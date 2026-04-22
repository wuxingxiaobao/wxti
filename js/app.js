// ============================================
// 五行小宝 WXTI v3 final · 主逻辑
// 支持新 6 模块人格数据、智能图片 fallback
// ============================================

(function() {
  'use strict';
  
  const WX_EMOJI = { '木': '🌿', '火': '🔥', '土': '🏔️', '金': '⚙️', '水': '💧' };
  
  // 省份
  const PROVINCES = [
    { v: 'beijing', n: '北京（基准·东八区）', default: true },
    '上海','天津','重庆','河北','山西','辽宁','吉林','黑龙江',
    '江苏','浙江','安徽','福建','江西','山东','河南','湖北','湖南','广东','海南',
    '四川','贵州','云南','陕西','甘肃','青海','内蒙古','广西','西藏','宁夏','新疆',
    '香港','澳门','台湾',
    { v: 'overseas', n: '🌍 海外其他地区' }
  ];
  
  const HOURS = [
    { v: '', n: '不确定 / 不知道' },
    { v: '0', n: '子时 · 23-01' },
    { v: '2', n: '丑时 · 01-03' },
    { v: '4', n: '寅时 · 03-05' },
    { v: '6', n: '卯时 · 05-07' },
    { v: '8', n: '辰时 · 07-09' },
    { v: '10', n: '巳时 · 09-11' },
    { v: '12', n: '午时 · 11-13' },
    { v: '14', n: '未时 · 13-15' },
    { v: '16', n: '申时 · 15-17' },
    { v: '18', n: '酉时 · 17-19' },
    { v: '20', n: '戌时 · 19-21' },
    { v: '22', n: '亥时 · 21-23' }
  ];
  
  let selectedGender = 'male';
  
  // ==================== 路由 ====================
  function go(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const t = document.getElementById(pageId);
    if (t) {
      t.classList.add('active');
      window.scrollTo(0, 0);
    }
  }
  
  // ==================== 初始化表单 ====================
  function initForm() {
    const yearSel = document.getElementById('year');
    const monthSel = document.getElementById('month');
    const daySel = document.getElementById('day');
    const hourSel = document.getElementById('hour');
    const provSel = document.getElementById('province');
    if (!yearSel) return;
    
    const curY = new Date().getFullYear();
    for (let y = curY; y >= 1930; y--) {
      const o = document.createElement('option');
      o.value = y; o.textContent = y + '年';
      yearSel.appendChild(o);
    }
    for (let m = 1; m <= 12; m++) {
      const o = document.createElement('option');
      o.value = m; o.textContent = m + '月';
      monthSel.appendChild(o);
    }
    function updateDays() {
      const y = parseInt(yearSel.value);
      const m = parseInt(monthSel.value);
      const dim = new Date(y, m, 0).getDate();
      const cur = parseInt(daySel.value) || 15;
      daySel.innerHTML = '';
      for (let d = 1; d <= dim; d++) {
        const o = document.createElement('option');
        o.value = d; o.textContent = d + '日';
        if (d === Math.min(cur, dim)) o.selected = true;
        daySel.appendChild(o);
      }
    }
    yearSel.value = 1995;
    monthSel.value = 5;
    updateDays();
    yearSel.addEventListener('change', updateDays);
    monthSel.addEventListener('change', updateDays);
    
    HOURS.forEach(h => {
      const o = document.createElement('option');
      o.value = h.v; o.textContent = h.n;
      hourSel.appendChild(o);
    });
    hourSel.value = '';
    
    PROVINCES.forEach(p => {
      const o = document.createElement('option');
      if (typeof p === 'object') {
        o.value = p.v; o.textContent = p.n;
        if (p.default) o.selected = true;
      } else {
        o.value = p; o.textContent = p;
      }
      provSel.appendChild(o);
    });
    
    // 海外选中时显示免责提示
    provSel.addEventListener('change', function() {
      const tip = document.getElementById('overseas-tip');
      if (!tip) return;
      tip.style.display = (this.value === 'overseas') ? 'block' : 'none';
    });
    
    document.querySelectorAll('.gender-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        document.querySelectorAll('.gender-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        selectedGender = this.dataset.gender;
      });
    });
  }
  
  // ==================== 主流程 ====================
  function handleSubmit() {
    const y = parseInt(document.getElementById('year').value);
    const m = parseInt(document.getElementById('month').value);
    const d = parseInt(document.getElementById('day').value);
    const hStr = document.getElementById('hour').value;
    const hour = hStr === '' ? null : parseInt(hStr);
    const province = document.getElementById('province').value;
    
    if (!window.Ganzhi || !window.DAY_PILLARS) {
      alert('数据加载中，请稍后再试');
      return;
    }
    
    const bazi = window.Ganzhi.getFullBazi(y, m, d, hour);
    const dayTg = bazi.day.tg;
    const wx = window.Ganzhi.getWuxing(dayTg);
    const persona = window.DAY_PILLARS[bazi.day.full];
    
    if (!persona) {
      alert('日柱数据异常：' + bazi.day.full);
      return;
    }
    
    window.CURRENT_RESULT = {
      bazi, wx, persona,
      input: { y, m, d, hour, gender: selectedGender, province }
    };
    
    go('page-loading');
    setTimeout(() => {
      try {
        renderResult();
        go('page-result');
      } catch (e) {
        console.error('[WXTI] renderResult 失败:', e);
        alert('渲染出错：' + e.message + '\n请打开 F12 控制台查看详情');
        go('page-input');
      }
    }, 1200);
  }
  
  // ==================== 智能图片加载（多路径 fallback） ====================
  function loadPersonaImage(dayPillar, personaName, imgWrap, fallbackEl) {
    // 尝试路径：
    // 1. personas-y2k/new/{dayPillar}-{name}.png （最新覆盖）
    // 2. personas-y2k/{dayPillar}-{name}.png
    // 3. personas-y2k/{dayPillar}-*.png （模糊匹配，通过缓存索引）
    // 4. 显示大字 fallback
    
    const paths = [
      `assets/personas-y2k/new/${dayPillar}-${personaName}.png`,
      `assets/personas-y2k/${dayPillar}-${personaName}.png`
    ];
    // 加入 manifest 里的映射（如果有）
    if (window.IMG_MANIFEST && window.IMG_MANIFEST[dayPillar]) {
      paths.unshift('assets/personas-y2k/' + window.IMG_MANIFEST[dayPillar]);
    }
    
    let idx = 0;
    function tryNext() {
      if (idx >= paths.length) {
        // 显示 fallback 大字
        imgWrap.innerHTML = '';
        const f = document.createElement('div');
        f.className = 'fallback';
        f.textContent = personaName;
        imgWrap.appendChild(f);
        return;
      }
      const img = new Image();
      img.onload = () => {
        imgWrap.innerHTML = '';
        imgWrap.appendChild(img);
      };
      img.onerror = () => {
        idx++;
        tryNext();
      };
      img.src = paths[idx];
    }
    tryNext();
  }
  
  // ==================== 渲染结果 ====================
  function renderResult() {
    const { bazi, wx, persona } = window.CURRENT_RESULT;
    const wxColor = window.Ganzhi.getWuxingColor(wx);
    
    // 🎨 五行主色动态注入到 CSS 变量（整站跟着换色）
    const WX_THEME = {
      '木': { main: '#6FB65A', soft: '#EAF5E4', text: '#4A8A38' },
      '火': { main: '#FF461F', soft: '#FFE8E0', text: '#D63A18' },
      '土': { main: '#E8A53C', soft: '#FFF3D9', text: '#B67D1E' },
      '金': { main: '#6B7280', soft: '#E8ECEF', text: '#4B5563' },
      '水': { main: '#2E6FE8', soft: '#E1ECFF', text: '#1E4FB8' }
    };
    const theme = WX_THEME[wx] || WX_THEME['火'];
    const root = document.documentElement;
    root.style.setProperty('--theme', theme.main);
    root.style.setProperty('--theme-soft', theme.soft);
    root.style.setProperty('--theme-text', theme.text);
    
    // 八字 4 柱
    const pillarsEl = document.getElementById('bazi-pillars');
    pillarsEl.innerHTML = '';
    const pillars = [
      { key: 'year', label: '年柱' },
      { key: 'month', label: '月柱' },
      { key: 'day', label: '日柱 ★' },
      { key: 'hour', label: '时柱' }
    ];
    pillars.forEach(p => {
      const div = document.createElement('div');
      div.className = 'pillar' + (p.key === 'day' ? ' day' : '');
      const val = bazi[p.key];
      if (val) {
        div.innerHTML = `<div class="pillar-label">${p.label}</div><div class="pillar-tg">${val.tg}</div><div class="pillar-dz">${val.dz}</div>`;
      } else {
        div.innerHTML = `<div class="pillar-label">${p.label}</div><div class="pillar-tg" style="color:var(--muted);font-size:14px;padding-top:6px;">—</div><div class="pillar-dz" style="color:var(--muted);font-size:9px;">未知</div>`;
      }
      pillarsEl.appendChild(div);
    });
    
    // 人格图
    const imgWrap = document.getElementById('p-img-wrap');
    loadPersonaImage(bazi.day.full, persona.name, imgWrap, document.getElementById('p-fallback'));
    
    // 人格名（日柱·名字居中）
    document.getElementById('p-gz').textContent = bazi.day.full;
    document.getElementById('p-name').textContent = persona.name;
    
    // 灵魂弹幕
    const linesEl = document.getElementById('p-lines');
    linesEl.innerHTML = '';
    persona.lines.forEach(line => {
      const div = document.createElement('div');
      div.className = 'line';
      div.textContent = line;
      linesEl.appendChild(div);
    });
    
    // 出厂技能
    const skillsEl = document.getElementById('p-skills');
    skillsEl.innerHTML = '';
    persona.skills.forEach(s => {
      const div = document.createElement('div');
      div.className = 'skill';
      div.innerHTML = `<div class="skill-head"><span class="skill-icon">${s.icon}</span><span class="skill-title">${s.title}</span></div><div class="skill-desc">${s.desc}</div>`;
      skillsEl.appendChild(div);
    });
    
    // 日柱解读
    document.getElementById('p-explain').textContent = persona.explain;
    
    // 正确/错误用法
    document.getElementById('p-good').textContent = persona.good;
    document.getElementById('p-bad').textContent = persona.bad;
    
    // 🤝 天选 / ⚠️ 避雷
    renderPair(bazi.day.full);
  }
  
  // ==================== 渲染天选/避雷 ====================
  function renderPair(myGz) {
    const pair = window.PAIR_DATA && window.PAIR_DATA[myGz];
    if (!pair) return;
    
    const matchEl = document.getElementById('p-match');
    const avoidEl = document.getElementById('p-avoid');
    if (matchEl) {
      matchEl.className = 'pair-list';
      matchEl.innerHTML = pair.match.map(item => renderPairItem(item)).join('');
    }
    if (avoidEl) {
      avoidEl.className = 'pair-list avoid';
      avoidEl.innerHTML = pair.avoid.map(item => renderPairItem(item)).join('');
    }
  }
  
  function renderPairItem(item) {
    const imgPath = resolvePersonaImg(item.gz);
    const imgHtml = imgPath 
      ? `<img src="${imgPath}" alt="${item.name}" onerror="this.parentNode.innerHTML='<span class=fb>'+this.alt.slice(0,2)+'</span>'">` 
      : `<span class="fb">${item.name.slice(0,2)}</span>`;
    const relLabel = (window.RELATION_LABELS && window.RELATION_LABELS[item.relation]) || '';
    return `
      <div class="pair-item" data-action="viewPairDetail" data-gz="${item.gz}">
        <div class="pair-img">${imgHtml}</div>
        <div class="pair-body">
          <div class="pair-head">
            <span class="pair-gz">${item.gz}</span>
            <span class="pair-name">${item.name}</span>
            <span class="pair-relation-tag ${item.relation}">${relLabel}</span>
          </div>
          <div class="pair-quote">${item.quote}</div>
        </div>
      </div>
    `;
  }
  
  // 从 manifest 或默认路径找图
  function resolvePersonaImg(gz) {
    if (window.IMG_MANIFEST && window.IMG_MANIFEST[gz]) {
      return 'assets/personas-y2k/' + window.IMG_MANIFEST[gz];
    }
    return null;
  }
  
  // 简易拼音转换（只做首字母大写化的展示用）
  function pinyinOf(name) {
    // 做个简易的"拼音占位"——直接用英文占位，等拼音库更准
    const map = {
      '深井':'SHEN JING','推土机':'TUI TU JI','大饼':'DA BING','打火机':'DA HUO JI',
      '犟驴':'JIANG LV','保姆':'BAO MU','高压锅':'GAO YA GUO','软刀子':'RUAN DAO ZI',
      '白嫖侠':'BAI PIAO XIA','草':'CAO','带刺的玫瑰':'DAI CI DE MEI GUI',
      '潜水员':'QIAN SHUI YUAN','毒蘑菇':'DU MO GU','二踢脚':'ER TI JIAO','店长':'DIAN ZHANG',
      '喇叭':'LA BA','嘴硬王者':'ZUI YING WANG ZHE','暖宝宝':'NUAN BAO BAO',
      '狠人':'HEN REN','纯爱战神':'CHUN AI ZHAN SHEN','永动机':'YONG DONG JI',
      '老妈子':'LAO MA ZI','杀猪刀':'SHA ZHU DAO','疼痛文学大师':'TENG TONG WEN XUE DA SHI',
      '闷骚王者':'MEN SAO WANG ZHE','群公告':'QUN GONG GAO','树懒':'SHU LAN',
      '大马路':'DA MA LU','嘴炮':'ZUI PAO','老干部':'LAO GAN BU',
      '老黄牛':'LAO HUANG NIU','便利贴':'BIAN LI TIE','烧杯':'SHAO BEI',
      '海绵':'HAI MIAN','EXCEL 人':'EXCEL REN','我佛了':'WO FO LE',
      '冷屁股':'LENG PI GU','电锯人':'DIAN JU REN','甲方':'JIA FANG',
      '工具人':'GONG JU REN','铁头':'TIE TOU','1':'ONE',
      '老鼠人':'LAO SHU REN','颜究生':'YAN JIU SHENG','刺头':'CI TOU',
      '乙方':'YI FANG','999 足金':'JIU JIU JIU','文青':'WEN QING',
      '深水炸弹':'SHEN SHUI ZHA DAN','厨子':'CHU ZI','大佬':'DA LAO',
      '戏精':'XI JING','AI':'AI','挑夫':'TIAO FU',
      '有大冰':'YOU DA BING','一朵莲':'YI DUO LIAN','刺客':'CI KE',
      '老兵':'LAO BING','湿人':'SHI REN','大侠':'DA XIA'
    };
    return map[name] || '';
  }
  
  // ==================== 分享卡 ====================
  function openShareCard() {
    if (!window.CURRENT_RESULT) {
      alert('请先完成测试');
      return;
    }
    const { bazi, persona } = window.CURRENT_RESULT;
    
    // 八字四柱
    const sBazi = document.getElementById('sc-bazi');
    if (sBazi) {
      sBazi.innerHTML = '';
      [['year','年'],['month','月'],['day','日'],['hour','时']].forEach(([k]) => {
        const div = document.createElement('div');
        div.className = 'p' + (k === 'day' ? ' day' : '');
        const v = bazi[k];
        div.textContent = v ? (v.tg + v.dz) : '—';
        sBazi.appendChild(div);
      });
    }
    
    // 人格图
    const sImgWrap = document.getElementById('sc-img-wrap');
    if (sImgWrap) loadPersonaImage(bazi.day.full, persona.name, sImgWrap, document.getElementById('sc-fallback'));
    
    // 日柱·人格名
    const scGz = document.getElementById('sc-gz');
    const scName = document.getElementById('sc-name');
    if (scGz) scGz.textContent = bazi.day.full;
    if (scName) scName.textContent = persona.name;
    
    // 灵魂弹幕
    const sLines = document.getElementById('sc-lines');
    if (sLines) {
      sLines.innerHTML = '';
      persona.lines.forEach(line => {
        const div = document.createElement('div');
        div.className = 'sl';
        div.textContent = '"' + line + '"';
        sLines.appendChild(div);
      });
    }
    
    // 简版解读
    const scExplain = document.getElementById('sc-explain');
    if (scExplain) {
      const short = persona.explain.length > 100 ? persona.explain.substring(0, 98) + '…' : persona.explain;
      scExplain.textContent = short;
    }
    
    // 🤝 天选 / ⚠️ 避雷
    const pair = window.PAIR_DATA && window.PAIR_DATA[bazi.day.full];
    if (pair) {
      const matchEl = document.getElementById('sc-match');
      const avoidEl = document.getElementById('sc-avoid');
      if (matchEl) {
        matchEl.innerHTML = pair.match.map(it => 
          `<div class="sc-pair-item"><div class="sc-pair-gz">${it.gz}</div><div class="sc-pair-name">${it.name}</div></div>`
        ).join('');
      }
      if (avoidEl) {
        avoidEl.innerHTML = pair.avoid.map(it => 
          `<div class="sc-pair-item avoid"><div class="sc-pair-gz">${it.gz}</div><div class="sc-pair-name">${it.name}</div></div>`
        ).join('');
      }
    }
    
    document.getElementById('share-overlay').classList.add('active');
  }
  
  function closeShareCard() {
    document.getElementById('share-overlay').classList.remove('active');
  }
  
  async function downloadShareCard() {
    const card = document.getElementById('share-card');
    if (!card) { alert('未找到分享卡'); return; }
    if (typeof html2canvas === 'undefined') {
      alert('图片生成库加载中，请稍后重试');
      return;
    }
    try {
      // 宽度固定 360，高度自适应内容 · scale 3 得到宽度 1080 高清图
      const canvas = await html2canvas(card, { 
        backgroundColor: '#FFFFFF', 
        scale: 3, 
        useCORS: true, 
        allowTaint: true,
        logging: false
      });
      const url = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `WXTI_${window.CURRENT_RESULT.bazi.day.full}_${window.CURRENT_RESULT.persona.name}.png`;
      link.href = url;
      link.click();
    } catch (e) {
      alert('保存失败：' + e.message);
      console.error(e);
    }
  }
  
  // ==================== 付费 ====================
  function openPremium() { document.getElementById('premium-overlay').classList.add('active'); }
  function closePremium() { document.getElementById('premium-overlay').classList.remove('active'); }
  
  // ==================== 测测 TA ====================
  function openTa() {
    const modal = document.getElementById('ta-overlay');
    if (!modal) return;
    document.getElementById('ta-step-input').style.display = '';
    document.getElementById('ta-step-result').style.display = 'none';
    initTaSelects();
    modal.classList.add('active');
  }
  function closeTa() { document.getElementById('ta-overlay').classList.remove('active'); }
  function testTaAgain() {
    document.getElementById('ta-step-input').style.display = '';
    document.getElementById('ta-step-result').style.display = 'none';
    const n = document.getElementById('ta-nickname');
    if (n) n.value = '';
  }
  
  function initTaSelects() {
    const ySel = document.getElementById('ta-year');
    const mSel = document.getElementById('ta-month');
    const dSel = document.getElementById('ta-day');
    if (!ySel || ySel.options.length) return;
    for (let y = 2026; y >= 1950; y--) ySel.add(new Option(y+'年', y));
    for (let m = 1; m <= 12; m++) mSel.add(new Option(m+'月', m));
    for (let d = 1; d <= 31; d++) dSel.add(new Option(d+'日', d));
    ySel.value = 1995; mSel.value = 5; dSel.value = 15;
  }
  
  function submitTa() {
    const nick = (document.getElementById('ta-nickname').value || 'TA').trim().slice(0, 8);
    const y = +document.getElementById('ta-year').value;
    const m = +document.getElementById('ta-month').value;
    const d = +document.getElementById('ta-day').value;
    if (!y || !m || !d) { alert('请填完整 TA 的生日'); return; }
    
    const taBazi = window.Ganzhi.getFullBazi(y, m, d, null);
    const taGz = taBazi.day.full;
    const taPersona = window.DAY_PILLARS[taGz];
    if (!taPersona) { alert('找不到 TA 的日柱数据'); return; }
    
    const me = window.CURRENT_RESULT;
    if (!me) { alert('请先完成你自己的测试'); return; }
    
    renderTaResult(nick, taBazi, taPersona);
    document.getElementById('ta-step-input').style.display = 'none';
    document.getElementById('ta-step-result').style.display = '';
  }
  
  function renderTaResult(nick, taBazi, taPersona) {
    const me = window.CURRENT_RESULT;
    const myGz = me.bazi.day.full;
    const taGz = taBazi.day.full;
    const myPersona = me.persona;
    
    const myPair = window.PAIR_DATA[myGz];
    let verdict = 'neutral', verdictText = '', quote = '';
    
    const matchHit = myPair && myPair.match.find(it => it.gz === taGz);
    const avoidHit = myPair && myPair.avoid.find(it => it.gz === taGz);
    
    if (matchHit) {
      verdict = 'match'; verdictText = '🤝 天选搭子'; quote = matchHit.quote;
    } else if (avoidHit) {
      verdict = 'avoid'; verdictText = '⚠️ 建议警惕'; quote = avoidHit.quote;
    } else {
      const rel = computeRelation(myGz[1], taGz[1]);
      if (rel === 'same') {
        verdict = 'neutral'; verdictText = '🔄 同款出厂';
        quote = `你们都是「${myPersona.name}」——秒懂彼此也共享彼此的坑，相处像照镜子。`;
      } else if (rel === 'banhe') {
        verdict = 'match'; verdictText = '🤝 能凑一块';
        quote = `没到天选级别，但你们属同一三合局边角料——搭把手没问题，默契要慢慢养。`;
      } else {
        verdict = 'neutral'; verdictText = '🔄 中性路人';
        quote = `不是天选也不是雷区，这段关系完全取决于你们怎么经营——靠近看缘分，保持距离也没损失。`;
      }
    }
    
    document.getElementById('ta-result-title').textContent = `你 × ${nick}`;
    const vs = document.getElementById('ta-result-verdict');
    vs.textContent = verdictText;
    vs.className = 'ta-result-subtitle ' + verdict;
    
    document.getElementById('ta-duo-me-gz').textContent = myGz;
    document.getElementById('ta-duo-me-name').textContent = myPersona.name;
    document.getElementById('ta-duo-ta-label').textContent = nick;
    document.getElementById('ta-duo-ta-gz').textContent = taGz;
    document.getElementById('ta-duo-ta-name').textContent = taPersona.name;
    
    fillDuoImg('ta-duo-me-img', myGz, myPersona.name);
    fillDuoImg('ta-duo-ta-img', taGz, taPersona.name);
    
    const relEl = document.getElementById('ta-duo-relation');
    if (verdict === 'match') { relEl.textContent = '❤'; relEl.style.color = 'var(--wx-fire)'; }
    else if (verdict === 'avoid') { relEl.textContent = '⚡'; relEl.style.color = 'var(--wx-water)'; }
    else { relEl.textContent = '◎'; relEl.style.color = 'var(--muted)'; }
    
    document.getElementById('ta-verdict-quote').textContent = quote;
  }
  
  function fillDuoImg(elId, gz, name) {
    const el = document.getElementById(elId);
    if (!el) return;
    const imgPath = resolvePersonaImg(gz);
    if (imgPath) {
      el.innerHTML = `<img src="${imgPath}" alt="${name}" onerror="this.parentNode.innerHTML='<span class=fb>'+this.alt.slice(0,2)+'</span>'">`;
    } else {
      el.innerHTML = `<span class="fb">${name.slice(0,2)}</span>`;
    }
  }
  
  function computeRelation(myDz, taDz) {
    if (myDz === taDz) return 'same';
    const SANHE_GROUPS = [['申','子','辰'],['寅','午','戌'],['巳','酉','丑'],['亥','卯','未']];
    for (const g of SANHE_GROUPS) {
      if (g.includes(myDz) && g.includes(taDz)) return 'banhe';
    }
    return 'other';
  }
  
  function shareTa() {
    alert('双人配对卡导出功能开发中～\n你可以先截图这个页面分享到小红书 📸');
  }
  
  function viewPairDetail(btn) {
    if (!btn) return;
    const gz = btn.dataset.gz;
    const p = window.DAY_PILLARS[gz];
    if (!p) return;
    alert(`${gz}·${p.name}\n\n${p.lines.slice(0,2).join('\n')}\n\n→ 想看完整解读？让 TA 自己来测一次吧 😈`);
  }
  
  // ==================== 全局 API ====================
  window.WXTI = {
    go,
    start: () => go('page-input'),
    back: () => go('page-cover'),
    submit: handleSubmit,
    retest: () => go('page-input'),
    share: openShareCard,
    closeShare: closeShareCard,
    download: downloadShareCard,
    premium: openPremium,
    closePremium,
    testTa: openTa,
    closeTa,
    submitTa,
    testTaAgain,
    shareTa,
    viewPairDetail
  };
  
  // ==================== 初始化 ====================
  function init() {
    console.log('[WXTI] init');
    console.log('[WXTI] Ganzhi:', !!window.Ganzhi, 'DATA:', Object.keys(window.DAY_PILLARS || {}).length, '条');
    
    try { initForm(); } catch (e) { console.error('initForm:', e); }
    
    document.body.addEventListener('click', e => {
      const btn = e.target.closest('[data-action]');
      if (!btn) return;
      const action = btn.dataset.action;
      if (window.WXTI[action]) window.WXTI[action](btn, e);
    });
    
    const so = document.getElementById('share-overlay');
    const po = document.getElementById('premium-overlay');
    const to = document.getElementById('ta-overlay');
    if (so) so.addEventListener('click', e => { if (e.target === so) closeShareCard(); });
    if (po) po.addEventListener('click', e => { if (e.target === po) closePremium(); });
    if (to) to.addEventListener('click', e => { if (e.target === to) closeTa(); });
    
    console.log('[WXTI] ready ✓');
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
