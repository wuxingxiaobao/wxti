// ============================================
// 60 日柱 · 天选搭子 & 避雷对象数据
// 命理依据：地支三合（sanhe）、六合（liuhe）→ 天选
//          地支六冲（liuchong）、六害（liuhai）→ 避雷
// ============================================

const PAIR_DATA = {
  '甲子': {
    match: [
      {gz:'甲申', name:'犟驴', relation:'sanhe', quote:"「犟驴」 补你能量，你给他方向"},
      {gz:'甲辰', name:'大饼', relation:'sanhe', quote:"你拉他进局，他帮你赢下来"},
      {gz:'乙丑', name:'高压锅', relation:'liuhe', quote:"「高压锅」 跟你像上下颠倒的拼图，对上就严丝合缝"},
    ],
    avoid: [
      {gz:'甲午', name:'打火机', relation:'liuchong', quote:"「打火机」 是你天然的刺——碰一下就炸"},
      {gz:'乙未', name:'草', relation:'liuhai', quote:"「草」 看起来没事，实际在你这里暗戳戳扣分"},
      {gz:'丙午', name:'喇叭', relation:'liuchong', quote:"你们见面 5 分钟就能吵 3 小时"},
    ]
  },
  '乙丑': {
    match: [
      {gz:'乙巳', name:'白嫖侠', relation:'sanhe', quote:"他一出现，你的运气就开始加速"},
      {gz:'乙酉', name:'带刺的玫瑰', relation:'sanhe', quote:"你俩一组队，事情自动推进"},
      {gz:'甲子', name:'深井', relation:'liuhe', quote:"他管你软，你管他硬，正好互相拿捏"},
    ],
    avoid: [
      {gz:'乙未', name:'草', relation:'liuchong', quote:"他的节奏把你的节奏掰断了"},
      {gz:'甲午', name:'打火机', relation:'liuhai', quote:"他不吵不闹，但你就是跟他消化不良"},
      {gz:'丁未', name:'老妈子', relation:'liuchong', quote:"一个想往东一个想往西，结果两个都卡住"},
    ]
  },
  '丙寅': {
    match: [
      {gz:'甲午', name:'打火机', relation:'sanhe', quote:"他是你的同频战友，不解释就懂"},
      {gz:'甲戌', name:'保姆', relation:'sanhe', quote:"「保姆」 补你能量，你给他方向"},
      {gz:'乙亥', name:'潜水员', relation:'liuhe', quote:"他能接住你最不想说出口的那部分"},
    ],
    avoid: [
      {gz:'甲申', name:'犟驴', relation:'liuchong', quote:"你俩的磁场天生相反，硬凑会互相消耗到空"},
      {gz:'乙巳', name:'白嫖侠', relation:'liuhai', quote:"表面风平浪静，背地里互相内耗"},
      {gz:'丙申', name:'嘴硬王者', relation:'liuchong', quote:"「嘴硬王者」 是你天然的刺——碰一下就炸"},
    ]
  },
  '丁卯': {
    match: [
      {gz:'乙亥', name:'潜水员', relation:'sanhe', quote:"你拉他进局，他帮你赢下来"},
      {gz:'乙未', name:'草', relation:'sanhe', quote:"他一出现，你的运气就开始加速"},
      {gz:'甲戌', name:'保姆', relation:'liuhe', quote:"跟他在一起，不用解释也能被理解"},
    ],
    avoid: [
      {gz:'乙酉', name:'带刺的玫瑰', relation:'liuchong', quote:"你们见面 5 分钟就能吵 3 小时"},
      {gz:'甲辰', name:'大饼', relation:'liuhai', quote:"他的好意总是搓错方向"},
      {gz:'丁酉', name:'杀猪刀', relation:'liuchong', quote:"他的节奏把你的节奏掰断了"},
    ]
  },
  '戊辰': {
    match: [
      {gz:'甲申', name:'犟驴', relation:'sanhe', quote:"你俩一组队，事情自动推进"},
      {gz:'甲子', name:'深井', relation:'sanhe', quote:"他是你的同频战友，不解释就懂"},
      {gz:'乙酉', name:'带刺的玫瑰', relation:'liuhe', quote:"你们不像两个人，像同一个人的正反面"},
    ],
    avoid: [
      {gz:'甲戌', name:'保姆', relation:'liuchong', quote:"一个想往东一个想往西，结果两个都卡住"},
      {gz:'乙卯', name:'软刀子', relation:'liuhai', quote:"你们相处会莫名累——没吵架，却一直在扛"},
      {gz:'丙戌', name:'暖宝宝', relation:'liuchong', quote:"你俩的磁场天生相反，硬凑会互相消耗到空"},
    ]
  },
  '己巳': {
    match: [
      {gz:'乙酉', name:'带刺的玫瑰', relation:'sanhe', quote:"「带刺的玫瑰」 补你能量，你给他方向"},
      {gz:'乙丑', name:'高压锅', relation:'sanhe', quote:"你拉他进局，他帮你赢下来"},
      {gz:'甲申', name:'犟驴', relation:'liuhe', quote:"「犟驴」 跟你像上下颠倒的拼图，对上就严丝合缝"},
    ],
    avoid: [
      {gz:'乙亥', name:'潜水员', relation:'liuchong', quote:"「潜水员」 是你天然的刺——碰一下就炸"},
      {gz:'甲寅', name:'推土机', relation:'liuhai', quote:"「推土机」 看起来没事，实际在你这里暗戳戳扣分"},
      {gz:'丁亥', name:'疼痛文学大师', relation:'liuchong', quote:"你们见面 5 分钟就能吵 3 小时"},
    ]
  },
  '庚午': {
    match: [
      {gz:'甲寅', name:'推土机', relation:'sanhe', quote:"他一出现，你的运气就开始加速"},
      {gz:'甲戌', name:'保姆', relation:'sanhe', quote:"你俩一组队，事情自动推进"},
      {gz:'乙未', name:'草', relation:'liuhe', quote:"他管你软，你管他硬，正好互相拿捏"},
    ],
    avoid: [
      {gz:'甲子', name:'深井', relation:'liuchong', quote:"他的节奏把你的节奏掰断了"},
      {gz:'乙丑', name:'高压锅', relation:'liuhai', quote:"他不吵不闹，但你就是跟他消化不良"},
      {gz:'丙子', name:'毒蘑菇', relation:'liuchong', quote:"一个想往东一个想往西，结果两个都卡住"},
    ]
  },
  '辛未': {
    match: [
      {gz:'乙亥', name:'潜水员', relation:'sanhe', quote:"他是你的同频战友，不解释就懂"},
      {gz:'乙卯', name:'软刀子', relation:'sanhe', quote:"「软刀子」 补你能量，你给他方向"},
      {gz:'甲午', name:'打火机', relation:'liuhe', quote:"他能接住你最不想说出口的那部分"},
    ],
    avoid: [
      {gz:'乙丑', name:'高压锅', relation:'liuchong', quote:"你俩的磁场天生相反，硬凑会互相消耗到空"},
      {gz:'甲子', name:'深井', relation:'liuhai', quote:"表面风平浪静，背地里互相内耗"},
      {gz:'丁丑', name:'狠人', relation:'liuchong', quote:"「狠人」 是你天然的刺——碰一下就炸"},
    ]
  },
  '壬申': {
    match: [
      {gz:'甲子', name:'深井', relation:'sanhe', quote:"你拉他进局，他帮你赢下来"},
      {gz:'甲辰', name:'大饼', relation:'sanhe', quote:"他一出现，你的运气就开始加速"},
      {gz:'乙巳', name:'白嫖侠', relation:'liuhe', quote:"跟他在一起，不用解释也能被理解"},
    ],
    avoid: [
      {gz:'甲寅', name:'推土机', relation:'liuchong', quote:"你们见面 5 分钟就能吵 3 小时"},
      {gz:'乙亥', name:'潜水员', relation:'liuhai', quote:"他的好意总是搓错方向"},
      {gz:'丙寅', name:'二踢脚', relation:'liuchong', quote:"他的节奏把你的节奏掰断了"},
    ]
  },
  '癸酉': {
    match: [
      {gz:'乙巳', name:'白嫖侠', relation:'sanhe', quote:"你俩一组队，事情自动推进"},
      {gz:'乙丑', name:'高压锅', relation:'sanhe', quote:"他是你的同频战友，不解释就懂"},
      {gz:'甲辰', name:'大饼', relation:'liuhe', quote:"你们不像两个人，像同一个人的正反面"},
    ],
    avoid: [
      {gz:'乙卯', name:'软刀子', relation:'liuchong', quote:"一个想往东一个想往西，结果两个都卡住"},
      {gz:'甲戌', name:'保姆', relation:'liuhai', quote:"你们相处会莫名累——没吵架，却一直在扛"},
      {gz:'丁卯', name:'纯爱战神', relation:'liuchong', quote:"你俩的磁场天生相反，硬凑会互相消耗到空"},
    ]
  },
  '甲戌': {
    match: [
      {gz:'甲寅', name:'推土机', relation:'sanhe', quote:"「推土机」 补你能量，你给他方向"},
      {gz:'甲午', name:'打火机', relation:'sanhe', quote:"你拉他进局，他帮你赢下来"},
      {gz:'乙卯', name:'软刀子', relation:'liuhe', quote:"「软刀子」 跟你像上下颠倒的拼图，对上就严丝合缝"},
    ],
    avoid: [
      {gz:'甲辰', name:'大饼', relation:'liuchong', quote:"「大饼」 是你天然的刺——碰一下就炸"},
      {gz:'乙酉', name:'带刺的玫瑰', relation:'liuhai', quote:"「带刺的玫瑰」 看起来没事，实际在你这里暗戳戳扣分"},
      {gz:'丙辰', name:'店长', relation:'liuchong', quote:"你们见面 5 分钟就能吵 3 小时"},
    ]
  },
  '乙亥': {
    match: [
      {gz:'乙卯', name:'软刀子', relation:'sanhe', quote:"他一出现，你的运气就开始加速"},
      {gz:'乙未', name:'草', relation:'sanhe', quote:"你俩一组队，事情自动推进"},
      {gz:'甲寅', name:'推土机', relation:'liuhe', quote:"他管你软，你管他硬，正好互相拿捏"},
    ],
    avoid: [
      {gz:'乙巳', name:'白嫖侠', relation:'liuchong', quote:"他的节奏把你的节奏掰断了"},
      {gz:'甲申', name:'犟驴', relation:'liuhai', quote:"他不吵不闹，但你就是跟他消化不良"},
      {gz:'丁巳', name:'永动机', relation:'liuchong', quote:"一个想往东一个想往西，结果两个都卡住"},
    ]
  },
  '丙子': {
    match: [
      {gz:'甲申', name:'犟驴', relation:'sanhe', quote:"他是你的同频战友，不解释就懂"},
      {gz:'甲辰', name:'大饼', relation:'sanhe', quote:"「大饼」 补你能量，你给他方向"},
      {gz:'乙丑', name:'高压锅', relation:'liuhe', quote:"他能接住你最不想说出口的那部分"},
    ],
    avoid: [
      {gz:'甲午', name:'打火机', relation:'liuchong', quote:"你俩的磁场天生相反，硬凑会互相消耗到空"},
      {gz:'乙未', name:'草', relation:'liuhai', quote:"表面风平浪静，背地里互相内耗"},
      {gz:'丙午', name:'喇叭', relation:'liuchong', quote:"「喇叭」 是你天然的刺——碰一下就炸"},
    ]
  },
  '丁丑': {
    match: [
      {gz:'乙巳', name:'白嫖侠', relation:'sanhe', quote:"你拉他进局，他帮你赢下来"},
      {gz:'乙酉', name:'带刺的玫瑰', relation:'sanhe', quote:"他一出现，你的运气就开始加速"},
      {gz:'甲子', name:'深井', relation:'liuhe', quote:"跟他在一起，不用解释也能被理解"},
    ],
    avoid: [
      {gz:'乙未', name:'草', relation:'liuchong', quote:"你们见面 5 分钟就能吵 3 小时"},
      {gz:'甲午', name:'打火机', relation:'liuhai', quote:"他的好意总是搓错方向"},
      {gz:'丁未', name:'老妈子', relation:'liuchong', quote:"他的节奏把你的节奏掰断了"},
    ]
  },
  '戊寅': {
    match: [
      {gz:'甲午', name:'打火机', relation:'sanhe', quote:"你俩一组队，事情自动推进"},
      {gz:'甲戌', name:'保姆', relation:'sanhe', quote:"他是你的同频战友，不解释就懂"},
      {gz:'乙亥', name:'潜水员', relation:'liuhe', quote:"你们不像两个人，像同一个人的正反面"},
    ],
    avoid: [
      {gz:'甲申', name:'犟驴', relation:'liuchong', quote:"一个想往东一个想往西，结果两个都卡住"},
      {gz:'乙巳', name:'白嫖侠', relation:'liuhai', quote:"你们相处会莫名累——没吵架，却一直在扛"},
      {gz:'丙申', name:'嘴硬王者', relation:'liuchong', quote:"你俩的磁场天生相反，硬凑会互相消耗到空"},
    ]
  },
  '己卯': {
    match: [
      {gz:'乙亥', name:'潜水员', relation:'sanhe', quote:"「潜水员」 补你能量，你给他方向"},
      {gz:'乙未', name:'草', relation:'sanhe', quote:"你拉他进局，他帮你赢下来"},
      {gz:'甲戌', name:'保姆', relation:'liuhe', quote:"「保姆」 跟你像上下颠倒的拼图，对上就严丝合缝"},
    ],
    avoid: [
      {gz:'乙酉', name:'带刺的玫瑰', relation:'liuchong', quote:"「带刺的玫瑰」 是你天然的刺——碰一下就炸"},
      {gz:'甲辰', name:'大饼', relation:'liuhai', quote:"「大饼」 看起来没事，实际在你这里暗戳戳扣分"},
      {gz:'丁酉', name:'杀猪刀', relation:'liuchong', quote:"你们见面 5 分钟就能吵 3 小时"},
    ]
  },
  '庚辰': {
    match: [
      {gz:'甲申', name:'犟驴', relation:'sanhe', quote:"他一出现，你的运气就开始加速"},
      {gz:'甲子', name:'深井', relation:'sanhe', quote:"你俩一组队，事情自动推进"},
      {gz:'乙酉', name:'带刺的玫瑰', relation:'liuhe', quote:"他管你软，你管他硬，正好互相拿捏"},
    ],
    avoid: [
      {gz:'甲戌', name:'保姆', relation:'liuchong', quote:"他的节奏把你的节奏掰断了"},
      {gz:'乙卯', name:'软刀子', relation:'liuhai', quote:"他不吵不闹，但你就是跟他消化不良"},
      {gz:'丙戌', name:'暖宝宝', relation:'liuchong', quote:"一个想往东一个想往西，结果两个都卡住"},
    ]
  },
  '辛巳': {
    match: [
      {gz:'乙酉', name:'带刺的玫瑰', relation:'sanhe', quote:"他是你的同频战友，不解释就懂"},
      {gz:'乙丑', name:'高压锅', relation:'sanhe', quote:"「高压锅」 补你能量，你给他方向"},
      {gz:'甲申', name:'犟驴', relation:'liuhe', quote:"他能接住你最不想说出口的那部分"},
    ],
    avoid: [
      {gz:'乙亥', name:'潜水员', relation:'liuchong', quote:"你俩的磁场天生相反，硬凑会互相消耗到空"},
      {gz:'甲寅', name:'推土机', relation:'liuhai', quote:"表面风平浪静，背地里互相内耗"},
      {gz:'丁亥', name:'疼痛文学大师', relation:'liuchong', quote:"「疼痛文学大师」 是你天然的刺——碰一下就炸"},
    ]
  },
  '壬午': {
    match: [
      {gz:'甲寅', name:'推土机', relation:'sanhe', quote:"你拉他进局，他帮你赢下来"},
      {gz:'甲戌', name:'保姆', relation:'sanhe', quote:"他一出现，你的运气就开始加速"},
      {gz:'乙未', name:'草', relation:'liuhe', quote:"跟他在一起，不用解释也能被理解"},
    ],
    avoid: [
      {gz:'甲子', name:'深井', relation:'liuchong', quote:"你们见面 5 分钟就能吵 3 小时"},
      {gz:'乙丑', name:'高压锅', relation:'liuhai', quote:"他的好意总是搓错方向"},
      {gz:'丙子', name:'毒蘑菇', relation:'liuchong', quote:"他的节奏把你的节奏掰断了"},
    ]
  },
  '癸未': {
    match: [
      {gz:'乙亥', name:'潜水员', relation:'sanhe', quote:"你俩一组队，事情自动推进"},
      {gz:'乙卯', name:'软刀子', relation:'sanhe', quote:"他是你的同频战友，不解释就懂"},
      {gz:'甲午', name:'打火机', relation:'liuhe', quote:"你们不像两个人，像同一个人的正反面"},
    ],
    avoid: [
      {gz:'乙丑', name:'高压锅', relation:'liuchong', quote:"一个想往东一个想往西，结果两个都卡住"},
      {gz:'甲子', name:'深井', relation:'liuhai', quote:"你们相处会莫名累——没吵架，却一直在扛"},
      {gz:'丁丑', name:'狠人', relation:'liuchong', quote:"你俩的磁场天生相反，硬凑会互相消耗到空"},
    ]
  },
  '甲申': {
    match: [
      {gz:'甲子', name:'深井', relation:'sanhe', quote:"「深井」 补你能量，你给他方向"},
      {gz:'甲辰', name:'大饼', relation:'sanhe', quote:"你拉他进局，他帮你赢下来"},
      {gz:'乙巳', name:'白嫖侠', relation:'liuhe', quote:"「白嫖侠」 跟你像上下颠倒的拼图，对上就严丝合缝"},
    ],
    avoid: [
      {gz:'甲寅', name:'推土机', relation:'liuchong', quote:"「推土机」 是你天然的刺——碰一下就炸"},
      {gz:'乙亥', name:'潜水员', relation:'liuhai', quote:"「潜水员」 看起来没事，实际在你这里暗戳戳扣分"},
      {gz:'丙寅', name:'二踢脚', relation:'liuchong', quote:"你们见面 5 分钟就能吵 3 小时"},
    ]
  },
  '乙酉': {
    match: [
      {gz:'乙巳', name:'白嫖侠', relation:'sanhe', quote:"他一出现，你的运气就开始加速"},
      {gz:'乙丑', name:'高压锅', relation:'sanhe', quote:"你俩一组队，事情自动推进"},
      {gz:'甲辰', name:'大饼', relation:'liuhe', quote:"他管你软，你管他硬，正好互相拿捏"},
    ],
    avoid: [
      {gz:'乙卯', name:'软刀子', relation:'liuchong', quote:"他的节奏把你的节奏掰断了"},
      {gz:'甲戌', name:'保姆', relation:'liuhai', quote:"他不吵不闹，但你就是跟他消化不良"},
      {gz:'丁卯', name:'纯爱战神', relation:'liuchong', quote:"一个想往东一个想往西，结果两个都卡住"},
    ]
  },
  '丙戌': {
    match: [
      {gz:'甲寅', name:'推土机', relation:'sanhe', quote:"他是你的同频战友，不解释就懂"},
      {gz:'甲午', name:'打火机', relation:'sanhe', quote:"「打火机」 补你能量，你给他方向"},
      {gz:'乙卯', name:'软刀子', relation:'liuhe', quote:"他能接住你最不想说出口的那部分"},
    ],
    avoid: [
      {gz:'甲辰', name:'大饼', relation:'liuchong', quote:"你俩的磁场天生相反，硬凑会互相消耗到空"},
      {gz:'乙酉', name:'带刺的玫瑰', relation:'liuhai', quote:"表面风平浪静，背地里互相内耗"},
      {gz:'丙辰', name:'店长', relation:'liuchong', quote:"「店长」 是你天然的刺——碰一下就炸"},
    ]
  },
  '丁亥': {
    match: [
      {gz:'乙卯', name:'软刀子', relation:'sanhe', quote:"你拉他进局，他帮你赢下来"},
      {gz:'乙未', name:'草', relation:'sanhe', quote:"他一出现，你的运气就开始加速"},
      {gz:'甲寅', name:'推土机', relation:'liuhe', quote:"跟他在一起，不用解释也能被理解"},
    ],
    avoid: [
      {gz:'乙巳', name:'白嫖侠', relation:'liuchong', quote:"你们见面 5 分钟就能吵 3 小时"},
      {gz:'甲申', name:'犟驴', relation:'liuhai', quote:"他的好意总是搓错方向"},
      {gz:'丁巳', name:'永动机', relation:'liuchong', quote:"他的节奏把你的节奏掰断了"},
    ]
  },
  '戊子': {
    match: [
      {gz:'甲申', name:'犟驴', relation:'sanhe', quote:"你俩一组队，事情自动推进"},
      {gz:'甲辰', name:'大饼', relation:'sanhe', quote:"他是你的同频战友，不解释就懂"},
      {gz:'乙丑', name:'高压锅', relation:'liuhe', quote:"你们不像两个人，像同一个人的正反面"},
    ],
    avoid: [
      {gz:'甲午', name:'打火机', relation:'liuchong', quote:"一个想往东一个想往西，结果两个都卡住"},
      {gz:'乙未', name:'草', relation:'liuhai', quote:"你们相处会莫名累——没吵架，却一直在扛"},
      {gz:'丙午', name:'喇叭', relation:'liuchong', quote:"你俩的磁场天生相反，硬凑会互相消耗到空"},
    ]
  },
  '己丑': {
    match: [
      {gz:'乙巳', name:'白嫖侠', relation:'sanhe', quote:"「白嫖侠」 补你能量，你给他方向"},
      {gz:'乙酉', name:'带刺的玫瑰', relation:'sanhe', quote:"你拉他进局，他帮你赢下来"},
      {gz:'甲子', name:'深井', relation:'liuhe', quote:"「深井」 跟你像上下颠倒的拼图，对上就严丝合缝"},
    ],
    avoid: [
      {gz:'乙未', name:'草', relation:'liuchong', quote:"「草」 是你天然的刺——碰一下就炸"},
      {gz:'甲午', name:'打火机', relation:'liuhai', quote:"「打火机」 看起来没事，实际在你这里暗戳戳扣分"},
      {gz:'丁未', name:'老妈子', relation:'liuchong', quote:"你们见面 5 分钟就能吵 3 小时"},
    ]
  },
  '庚寅': {
    match: [
      {gz:'甲午', name:'打火机', relation:'sanhe', quote:"他一出现，你的运气就开始加速"},
      {gz:'甲戌', name:'保姆', relation:'sanhe', quote:"你俩一组队，事情自动推进"},
      {gz:'乙亥', name:'潜水员', relation:'liuhe', quote:"他管你软，你管他硬，正好互相拿捏"},
    ],
    avoid: [
      {gz:'甲申', name:'犟驴', relation:'liuchong', quote:"他的节奏把你的节奏掰断了"},
      {gz:'乙巳', name:'白嫖侠', relation:'liuhai', quote:"他不吵不闹，但你就是跟他消化不良"},
      {gz:'丙申', name:'嘴硬王者', relation:'liuchong', quote:"一个想往东一个想往西，结果两个都卡住"},
    ]
  },
  '辛卯': {
    match: [
      {gz:'乙亥', name:'潜水员', relation:'sanhe', quote:"他是你的同频战友，不解释就懂"},
      {gz:'乙未', name:'草', relation:'sanhe', quote:"「草」 补你能量，你给他方向"},
      {gz:'甲戌', name:'保姆', relation:'liuhe', quote:"他能接住你最不想说出口的那部分"},
    ],
    avoid: [
      {gz:'乙酉', name:'带刺的玫瑰', relation:'liuchong', quote:"你俩的磁场天生相反，硬凑会互相消耗到空"},
      {gz:'甲辰', name:'大饼', relation:'liuhai', quote:"表面风平浪静，背地里互相内耗"},
      {gz:'丁酉', name:'杀猪刀', relation:'liuchong', quote:"「杀猪刀」 是你天然的刺——碰一下就炸"},
    ]
  },
  '壬辰': {
    match: [
      {gz:'甲申', name:'犟驴', relation:'sanhe', quote:"你拉他进局，他帮你赢下来"},
      {gz:'甲子', name:'深井', relation:'sanhe', quote:"他一出现，你的运气就开始加速"},
      {gz:'乙酉', name:'带刺的玫瑰', relation:'liuhe', quote:"跟他在一起，不用解释也能被理解"},
    ],
    avoid: [
      {gz:'甲戌', name:'保姆', relation:'liuchong', quote:"你们见面 5 分钟就能吵 3 小时"},
      {gz:'乙卯', name:'软刀子', relation:'liuhai', quote:"他的好意总是搓错方向"},
      {gz:'丙戌', name:'暖宝宝', relation:'liuchong', quote:"他的节奏把你的节奏掰断了"},
    ]
  },
  '癸巳': {
    match: [
      {gz:'乙酉', name:'带刺的玫瑰', relation:'sanhe', quote:"你俩一组队，事情自动推进"},
      {gz:'乙丑', name:'高压锅', relation:'sanhe', quote:"他是你的同频战友，不解释就懂"},
      {gz:'甲申', name:'犟驴', relation:'liuhe', quote:"你们不像两个人，像同一个人的正反面"},
    ],
    avoid: [
      {gz:'乙亥', name:'潜水员', relation:'liuchong', quote:"一个想往东一个想往西，结果两个都卡住"},
      {gz:'甲寅', name:'推土机', relation:'liuhai', quote:"你们相处会莫名累——没吵架，却一直在扛"},
      {gz:'丁亥', name:'疼痛文学大师', relation:'liuchong', quote:"你俩的磁场天生相反，硬凑会互相消耗到空"},
    ]
  },
  '甲午': {
    match: [
      {gz:'甲寅', name:'推土机', relation:'sanhe', quote:"「推土机」 补你能量，你给他方向"},
      {gz:'甲戌', name:'保姆', relation:'sanhe', quote:"你拉他进局，他帮你赢下来"},
      {gz:'乙未', name:'草', relation:'liuhe', quote:"「草」 跟你像上下颠倒的拼图，对上就严丝合缝"},
    ],
    avoid: [
      {gz:'甲子', name:'深井', relation:'liuchong', quote:"「深井」 是你天然的刺——碰一下就炸"},
      {gz:'乙丑', name:'高压锅', relation:'liuhai', quote:"「高压锅」 看起来没事，实际在你这里暗戳戳扣分"},
      {gz:'丙子', name:'毒蘑菇', relation:'liuchong', quote:"你们见面 5 分钟就能吵 3 小时"},
    ]
  },
  '乙未': {
    match: [
      {gz:'乙亥', name:'潜水员', relation:'sanhe', quote:"他一出现，你的运气就开始加速"},
      {gz:'乙卯', name:'软刀子', relation:'sanhe', quote:"你俩一组队，事情自动推进"},
      {gz:'甲午', name:'打火机', relation:'liuhe', quote:"他管你软，你管他硬，正好互相拿捏"},
    ],
    avoid: [
      {gz:'乙丑', name:'高压锅', relation:'liuchong', quote:"他的节奏把你的节奏掰断了"},
      {gz:'甲子', name:'深井', relation:'liuhai', quote:"他不吵不闹，但你就是跟他消化不良"},
      {gz:'丁丑', name:'狠人', relation:'liuchong', quote:"一个想往东一个想往西，结果两个都卡住"},
    ]
  },
  '丙申': {
    match: [
      {gz:'甲子', name:'深井', relation:'sanhe', quote:"他是你的同频战友，不解释就懂"},
      {gz:'甲辰', name:'大饼', relation:'sanhe', quote:"「大饼」 补你能量，你给他方向"},
      {gz:'乙巳', name:'白嫖侠', relation:'liuhe', quote:"他能接住你最不想说出口的那部分"},
    ],
    avoid: [
      {gz:'甲寅', name:'推土机', relation:'liuchong', quote:"你俩的磁场天生相反，硬凑会互相消耗到空"},
      {gz:'乙亥', name:'潜水员', relation:'liuhai', quote:"表面风平浪静，背地里互相内耗"},
      {gz:'丙寅', name:'二踢脚', relation:'liuchong', quote:"「二踢脚」 是你天然的刺——碰一下就炸"},
    ]
  },
  '丁酉': {
    match: [
      {gz:'乙巳', name:'白嫖侠', relation:'sanhe', quote:"你拉他进局，他帮你赢下来"},
      {gz:'乙丑', name:'高压锅', relation:'sanhe', quote:"他一出现，你的运气就开始加速"},
      {gz:'甲辰', name:'大饼', relation:'liuhe', quote:"跟他在一起，不用解释也能被理解"},
    ],
    avoid: [
      {gz:'乙卯', name:'软刀子', relation:'liuchong', quote:"你们见面 5 分钟就能吵 3 小时"},
      {gz:'甲戌', name:'保姆', relation:'liuhai', quote:"他的好意总是搓错方向"},
      {gz:'丁卯', name:'纯爱战神', relation:'liuchong', quote:"他的节奏把你的节奏掰断了"},
    ]
  },
  '戊戌': {
    match: [
      {gz:'甲寅', name:'推土机', relation:'sanhe', quote:"你俩一组队，事情自动推进"},
      {gz:'甲午', name:'打火机', relation:'sanhe', quote:"他是你的同频战友，不解释就懂"},
      {gz:'乙卯', name:'软刀子', relation:'liuhe', quote:"你们不像两个人，像同一个人的正反面"},
    ],
    avoid: [
      {gz:'甲辰', name:'大饼', relation:'liuchong', quote:"一个想往东一个想往西，结果两个都卡住"},
      {gz:'乙酉', name:'带刺的玫瑰', relation:'liuhai', quote:"你们相处会莫名累——没吵架，却一直在扛"},
      {gz:'丙辰', name:'店长', relation:'liuchong', quote:"你俩的磁场天生相反，硬凑会互相消耗到空"},
    ]
  },
  '己亥': {
    match: [
      {gz:'乙卯', name:'软刀子', relation:'sanhe', quote:"「软刀子」 补你能量，你给他方向"},
      {gz:'乙未', name:'草', relation:'sanhe', quote:"你拉他进局，他帮你赢下来"},
      {gz:'甲寅', name:'推土机', relation:'liuhe', quote:"「推土机」 跟你像上下颠倒的拼图，对上就严丝合缝"},
    ],
    avoid: [
      {gz:'乙巳', name:'白嫖侠', relation:'liuchong', quote:"「白嫖侠」 是你天然的刺——碰一下就炸"},
      {gz:'甲申', name:'犟驴', relation:'liuhai', quote:"「犟驴」 看起来没事，实际在你这里暗戳戳扣分"},
      {gz:'丁巳', name:'永动机', relation:'liuchong', quote:"你们见面 5 分钟就能吵 3 小时"},
    ]
  },
  '庚子': {
    match: [
      {gz:'甲申', name:'犟驴', relation:'sanhe', quote:"他一出现，你的运气就开始加速"},
      {gz:'甲辰', name:'大饼', relation:'sanhe', quote:"你俩一组队，事情自动推进"},
      {gz:'乙丑', name:'高压锅', relation:'liuhe', quote:"他管你软，你管他硬，正好互相拿捏"},
    ],
    avoid: [
      {gz:'甲午', name:'打火机', relation:'liuchong', quote:"他的节奏把你的节奏掰断了"},
      {gz:'乙未', name:'草', relation:'liuhai', quote:"他不吵不闹，但你就是跟他消化不良"},
      {gz:'丙午', name:'喇叭', relation:'liuchong', quote:"一个想往东一个想往西，结果两个都卡住"},
    ]
  },
  '辛丑': {
    match: [
      {gz:'乙巳', name:'白嫖侠', relation:'sanhe', quote:"他是你的同频战友，不解释就懂"},
      {gz:'乙酉', name:'带刺的玫瑰', relation:'sanhe', quote:"「带刺的玫瑰」 补你能量，你给他方向"},
      {gz:'甲子', name:'深井', relation:'liuhe', quote:"他能接住你最不想说出口的那部分"},
    ],
    avoid: [
      {gz:'乙未', name:'草', relation:'liuchong', quote:"你俩的磁场天生相反，硬凑会互相消耗到空"},
      {gz:'甲午', name:'打火机', relation:'liuhai', quote:"表面风平浪静，背地里互相内耗"},
      {gz:'丁未', name:'老妈子', relation:'liuchong', quote:"「老妈子」 是你天然的刺——碰一下就炸"},
    ]
  },
  '壬寅': {
    match: [
      {gz:'甲午', name:'打火机', relation:'sanhe', quote:"你拉他进局，他帮你赢下来"},
      {gz:'甲戌', name:'保姆', relation:'sanhe', quote:"他一出现，你的运气就开始加速"},
      {gz:'乙亥', name:'潜水员', relation:'liuhe', quote:"跟他在一起，不用解释也能被理解"},
    ],
    avoid: [
      {gz:'甲申', name:'犟驴', relation:'liuchong', quote:"你们见面 5 分钟就能吵 3 小时"},
      {gz:'乙巳', name:'白嫖侠', relation:'liuhai', quote:"他的好意总是搓错方向"},
      {gz:'丙申', name:'嘴硬王者', relation:'liuchong', quote:"他的节奏把你的节奏掰断了"},
    ]
  },
  '癸卯': {
    match: [
      {gz:'乙亥', name:'潜水员', relation:'sanhe', quote:"你俩一组队，事情自动推进"},
      {gz:'乙未', name:'草', relation:'sanhe', quote:"他是你的同频战友，不解释就懂"},
      {gz:'甲戌', name:'保姆', relation:'liuhe', quote:"你们不像两个人，像同一个人的正反面"},
    ],
    avoid: [
      {gz:'乙酉', name:'带刺的玫瑰', relation:'liuchong', quote:"一个想往东一个想往西，结果两个都卡住"},
      {gz:'甲辰', name:'大饼', relation:'liuhai', quote:"你们相处会莫名累——没吵架，却一直在扛"},
      {gz:'丁酉', name:'杀猪刀', relation:'liuchong', quote:"你俩的磁场天生相反，硬凑会互相消耗到空"},
    ]
  },
  '甲辰': {
    match: [
      {gz:'甲申', name:'犟驴', relation:'sanhe', quote:"「犟驴」 补你能量，你给他方向"},
      {gz:'甲子', name:'深井', relation:'sanhe', quote:"你拉他进局，他帮你赢下来"},
      {gz:'乙酉', name:'带刺的玫瑰', relation:'liuhe', quote:"「带刺的玫瑰」 跟你像上下颠倒的拼图，对上就严丝合缝"},
    ],
    avoid: [
      {gz:'甲戌', name:'保姆', relation:'liuchong', quote:"「保姆」 是你天然的刺——碰一下就炸"},
      {gz:'乙卯', name:'软刀子', relation:'liuhai', quote:"「软刀子」 看起来没事，实际在你这里暗戳戳扣分"},
      {gz:'丙戌', name:'暖宝宝', relation:'liuchong', quote:"你们见面 5 分钟就能吵 3 小时"},
    ]
  },
  '乙巳': {
    match: [
      {gz:'乙酉', name:'带刺的玫瑰', relation:'sanhe', quote:"他一出现，你的运气就开始加速"},
      {gz:'乙丑', name:'高压锅', relation:'sanhe', quote:"你俩一组队，事情自动推进"},
      {gz:'甲申', name:'犟驴', relation:'liuhe', quote:"他管你软，你管他硬，正好互相拿捏"},
    ],
    avoid: [
      {gz:'乙亥', name:'潜水员', relation:'liuchong', quote:"他的节奏把你的节奏掰断了"},
      {gz:'甲寅', name:'推土机', relation:'liuhai', quote:"他不吵不闹，但你就是跟他消化不良"},
      {gz:'丁亥', name:'疼痛文学大师', relation:'liuchong', quote:"一个想往东一个想往西，结果两个都卡住"},
    ]
  },
  '丙午': {
    match: [
      {gz:'甲寅', name:'推土机', relation:'sanhe', quote:"他是你的同频战友，不解释就懂"},
      {gz:'甲戌', name:'保姆', relation:'sanhe', quote:"「保姆」 补你能量，你给他方向"},
      {gz:'乙未', name:'草', relation:'liuhe', quote:"他能接住你最不想说出口的那部分"},
    ],
    avoid: [
      {gz:'甲子', name:'深井', relation:'liuchong', quote:"你俩的磁场天生相反，硬凑会互相消耗到空"},
      {gz:'乙丑', name:'高压锅', relation:'liuhai', quote:"表面风平浪静，背地里互相内耗"},
      {gz:'丙子', name:'毒蘑菇', relation:'liuchong', quote:"「毒蘑菇」 是你天然的刺——碰一下就炸"},
    ]
  },
  '丁未': {
    match: [
      {gz:'乙亥', name:'潜水员', relation:'sanhe', quote:"你拉他进局，他帮你赢下来"},
      {gz:'乙卯', name:'软刀子', relation:'sanhe', quote:"他一出现，你的运气就开始加速"},
      {gz:'甲午', name:'打火机', relation:'liuhe', quote:"跟他在一起，不用解释也能被理解"},
    ],
    avoid: [
      {gz:'乙丑', name:'高压锅', relation:'liuchong', quote:"你们见面 5 分钟就能吵 3 小时"},
      {gz:'甲子', name:'深井', relation:'liuhai', quote:"他的好意总是搓错方向"},
      {gz:'丁丑', name:'狠人', relation:'liuchong', quote:"他的节奏把你的节奏掰断了"},
    ]
  },
  '戊申': {
    match: [
      {gz:'甲子', name:'深井', relation:'sanhe', quote:"你俩一组队，事情自动推进"},
      {gz:'甲辰', name:'大饼', relation:'sanhe', quote:"他是你的同频战友，不解释就懂"},
      {gz:'乙巳', name:'白嫖侠', relation:'liuhe', quote:"你们不像两个人，像同一个人的正反面"},
    ],
    avoid: [
      {gz:'甲寅', name:'推土机', relation:'liuchong', quote:"一个想往东一个想往西，结果两个都卡住"},
      {gz:'乙亥', name:'潜水员', relation:'liuhai', quote:"你们相处会莫名累——没吵架，却一直在扛"},
      {gz:'丙寅', name:'二踢脚', relation:'liuchong', quote:"你俩的磁场天生相反，硬凑会互相消耗到空"},
    ]
  },
  '己酉': {
    match: [
      {gz:'乙巳', name:'白嫖侠', relation:'sanhe', quote:"「白嫖侠」 补你能量，你给他方向"},
      {gz:'乙丑', name:'高压锅', relation:'sanhe', quote:"你拉他进局，他帮你赢下来"},
      {gz:'甲辰', name:'大饼', relation:'liuhe', quote:"「大饼」 跟你像上下颠倒的拼图，对上就严丝合缝"},
    ],
    avoid: [
      {gz:'乙卯', name:'软刀子', relation:'liuchong', quote:"「软刀子」 是你天然的刺——碰一下就炸"},
      {gz:'甲戌', name:'保姆', relation:'liuhai', quote:"「保姆」 看起来没事，实际在你这里暗戳戳扣分"},
      {gz:'丁卯', name:'纯爱战神', relation:'liuchong', quote:"你们见面 5 分钟就能吵 3 小时"},
    ]
  },
  '庚戌': {
    match: [
      {gz:'甲寅', name:'推土机', relation:'sanhe', quote:"他一出现，你的运气就开始加速"},
      {gz:'甲午', name:'打火机', relation:'sanhe', quote:"你俩一组队，事情自动推进"},
      {gz:'乙卯', name:'软刀子', relation:'liuhe', quote:"他管你软，你管他硬，正好互相拿捏"},
    ],
    avoid: [
      {gz:'甲辰', name:'大饼', relation:'liuchong', quote:"他的节奏把你的节奏掰断了"},
      {gz:'乙酉', name:'带刺的玫瑰', relation:'liuhai', quote:"他不吵不闹，但你就是跟他消化不良"},
      {gz:'丙辰', name:'店长', relation:'liuchong', quote:"一个想往东一个想往西，结果两个都卡住"},
    ]
  },
  '辛亥': {
    match: [
      {gz:'乙卯', name:'软刀子', relation:'sanhe', quote:"他是你的同频战友，不解释就懂"},
      {gz:'乙未', name:'草', relation:'sanhe', quote:"「草」 补你能量，你给他方向"},
      {gz:'甲寅', name:'推土机', relation:'liuhe', quote:"他能接住你最不想说出口的那部分"},
    ],
    avoid: [
      {gz:'乙巳', name:'白嫖侠', relation:'liuchong', quote:"你俩的磁场天生相反，硬凑会互相消耗到空"},
      {gz:'甲申', name:'犟驴', relation:'liuhai', quote:"表面风平浪静，背地里互相内耗"},
      {gz:'丁巳', name:'永动机', relation:'liuchong', quote:"「永动机」 是你天然的刺——碰一下就炸"},
    ]
  },
  '壬子': {
    match: [
      {gz:'甲申', name:'犟驴', relation:'sanhe', quote:"你拉他进局，他帮你赢下来"},
      {gz:'甲辰', name:'大饼', relation:'sanhe', quote:"他一出现，你的运气就开始加速"},
      {gz:'乙丑', name:'高压锅', relation:'liuhe', quote:"跟他在一起，不用解释也能被理解"},
    ],
    avoid: [
      {gz:'甲午', name:'打火机', relation:'liuchong', quote:"你们见面 5 分钟就能吵 3 小时"},
      {gz:'乙未', name:'草', relation:'liuhai', quote:"他的好意总是搓错方向"},
      {gz:'丙午', name:'喇叭', relation:'liuchong', quote:"他的节奏把你的节奏掰断了"},
    ]
  },
  '癸丑': {
    match: [
      {gz:'乙巳', name:'白嫖侠', relation:'sanhe', quote:"你俩一组队，事情自动推进"},
      {gz:'乙酉', name:'带刺的玫瑰', relation:'sanhe', quote:"他是你的同频战友，不解释就懂"},
      {gz:'甲子', name:'深井', relation:'liuhe', quote:"你们不像两个人，像同一个人的正反面"},
    ],
    avoid: [
      {gz:'乙未', name:'草', relation:'liuchong', quote:"一个想往东一个想往西，结果两个都卡住"},
      {gz:'甲午', name:'打火机', relation:'liuhai', quote:"你们相处会莫名累——没吵架，却一直在扛"},
      {gz:'丁未', name:'老妈子', relation:'liuchong', quote:"你俩的磁场天生相反，硬凑会互相消耗到空"},
    ]
  },
  '甲寅': {
    match: [
      {gz:'甲午', name:'打火机', relation:'sanhe', quote:"「打火机」 补你能量，你给他方向"},
      {gz:'甲戌', name:'保姆', relation:'sanhe', quote:"你拉他进局，他帮你赢下来"},
      {gz:'乙亥', name:'潜水员', relation:'liuhe', quote:"「潜水员」 跟你像上下颠倒的拼图，对上就严丝合缝"},
    ],
    avoid: [
      {gz:'甲申', name:'犟驴', relation:'liuchong', quote:"「犟驴」 是你天然的刺——碰一下就炸"},
      {gz:'乙巳', name:'白嫖侠', relation:'liuhai', quote:"「白嫖侠」 看起来没事，实际在你这里暗戳戳扣分"},
      {gz:'丙申', name:'嘴硬王者', relation:'liuchong', quote:"你们见面 5 分钟就能吵 3 小时"},
    ]
  },
  '乙卯': {
    match: [
      {gz:'乙亥', name:'潜水员', relation:'sanhe', quote:"他一出现，你的运气就开始加速"},
      {gz:'乙未', name:'草', relation:'sanhe', quote:"你俩一组队，事情自动推进"},
      {gz:'甲戌', name:'保姆', relation:'liuhe', quote:"他管你软，你管他硬，正好互相拿捏"},
    ],
    avoid: [
      {gz:'乙酉', name:'带刺的玫瑰', relation:'liuchong', quote:"他的节奏把你的节奏掰断了"},
      {gz:'甲辰', name:'大饼', relation:'liuhai', quote:"他不吵不闹，但你就是跟他消化不良"},
      {gz:'丁酉', name:'杀猪刀', relation:'liuchong', quote:"一个想往东一个想往西，结果两个都卡住"},
    ]
  },
  '丙辰': {
    match: [
      {gz:'甲申', name:'犟驴', relation:'sanhe', quote:"他是你的同频战友，不解释就懂"},
      {gz:'甲子', name:'深井', relation:'sanhe', quote:"「深井」 补你能量，你给他方向"},
      {gz:'乙酉', name:'带刺的玫瑰', relation:'liuhe', quote:"他能接住你最不想说出口的那部分"},
    ],
    avoid: [
      {gz:'甲戌', name:'保姆', relation:'liuchong', quote:"你俩的磁场天生相反，硬凑会互相消耗到空"},
      {gz:'乙卯', name:'软刀子', relation:'liuhai', quote:"表面风平浪静，背地里互相内耗"},
      {gz:'丙戌', name:'暖宝宝', relation:'liuchong', quote:"「暖宝宝」 是你天然的刺——碰一下就炸"},
    ]
  },
  '丁巳': {
    match: [
      {gz:'乙酉', name:'带刺的玫瑰', relation:'sanhe', quote:"你拉他进局，他帮你赢下来"},
      {gz:'乙丑', name:'高压锅', relation:'sanhe', quote:"他一出现，你的运气就开始加速"},
      {gz:'甲申', name:'犟驴', relation:'liuhe', quote:"跟他在一起，不用解释也能被理解"},
    ],
    avoid: [
      {gz:'乙亥', name:'潜水员', relation:'liuchong', quote:"你们见面 5 分钟就能吵 3 小时"},
      {gz:'甲寅', name:'推土机', relation:'liuhai', quote:"他的好意总是搓错方向"},
      {gz:'丁亥', name:'疼痛文学大师', relation:'liuchong', quote:"他的节奏把你的节奏掰断了"},
    ]
  },
  '戊午': {
    match: [
      {gz:'甲寅', name:'推土机', relation:'sanhe', quote:"你俩一组队，事情自动推进"},
      {gz:'甲戌', name:'保姆', relation:'sanhe', quote:"他是你的同频战友，不解释就懂"},
      {gz:'乙未', name:'草', relation:'liuhe', quote:"你们不像两个人，像同一个人的正反面"},
    ],
    avoid: [
      {gz:'甲子', name:'深井', relation:'liuchong', quote:"一个想往东一个想往西，结果两个都卡住"},
      {gz:'乙丑', name:'高压锅', relation:'liuhai', quote:"你们相处会莫名累——没吵架，却一直在扛"},
      {gz:'丙子', name:'毒蘑菇', relation:'liuchong', quote:"你俩的磁场天生相反，硬凑会互相消耗到空"},
    ]
  },
  '己未': {
    match: [
      {gz:'乙亥', name:'潜水员', relation:'sanhe', quote:"「潜水员」 补你能量，你给他方向"},
      {gz:'乙卯', name:'软刀子', relation:'sanhe', quote:"你拉他进局，他帮你赢下来"},
      {gz:'甲午', name:'打火机', relation:'liuhe', quote:"「打火机」 跟你像上下颠倒的拼图，对上就严丝合缝"},
    ],
    avoid: [
      {gz:'乙丑', name:'高压锅', relation:'liuchong', quote:"「高压锅」 是你天然的刺——碰一下就炸"},
      {gz:'甲子', name:'深井', relation:'liuhai', quote:"「深井」 看起来没事，实际在你这里暗戳戳扣分"},
      {gz:'丁丑', name:'狠人', relation:'liuchong', quote:"你们见面 5 分钟就能吵 3 小时"},
    ]
  },
  '庚申': {
    match: [
      {gz:'甲子', name:'深井', relation:'sanhe', quote:"他一出现，你的运气就开始加速"},
      {gz:'甲辰', name:'大饼', relation:'sanhe', quote:"你俩一组队，事情自动推进"},
      {gz:'乙巳', name:'白嫖侠', relation:'liuhe', quote:"他管你软，你管他硬，正好互相拿捏"},
    ],
    avoid: [
      {gz:'甲寅', name:'推土机', relation:'liuchong', quote:"他的节奏把你的节奏掰断了"},
      {gz:'乙亥', name:'潜水员', relation:'liuhai', quote:"他不吵不闹，但你就是跟他消化不良"},
      {gz:'丙寅', name:'二踢脚', relation:'liuchong', quote:"一个想往东一个想往西，结果两个都卡住"},
    ]
  },
  '辛酉': {
    match: [
      {gz:'乙巳', name:'白嫖侠', relation:'sanhe', quote:"他是你的同频战友，不解释就懂"},
      {gz:'乙丑', name:'高压锅', relation:'sanhe', quote:"「高压锅」 补你能量，你给他方向"},
      {gz:'甲辰', name:'大饼', relation:'liuhe', quote:"他能接住你最不想说出口的那部分"},
    ],
    avoid: [
      {gz:'乙卯', name:'软刀子', relation:'liuchong', quote:"你俩的磁场天生相反，硬凑会互相消耗到空"},
      {gz:'甲戌', name:'保姆', relation:'liuhai', quote:"表面风平浪静，背地里互相内耗"},
      {gz:'丁卯', name:'纯爱战神', relation:'liuchong', quote:"「纯爱战神」 是你天然的刺——碰一下就炸"},
    ]
  },
  '壬戌': {
    match: [
      {gz:'甲寅', name:'推土机', relation:'sanhe', quote:"你拉他进局，他帮你赢下来"},
      {gz:'甲午', name:'打火机', relation:'sanhe', quote:"他一出现，你的运气就开始加速"},
      {gz:'乙卯', name:'软刀子', relation:'liuhe', quote:"跟他在一起，不用解释也能被理解"},
    ],
    avoid: [
      {gz:'甲辰', name:'大饼', relation:'liuchong', quote:"你们见面 5 分钟就能吵 3 小时"},
      {gz:'乙酉', name:'带刺的玫瑰', relation:'liuhai', quote:"他的好意总是搓错方向"},
      {gz:'丙辰', name:'店长', relation:'liuchong', quote:"他的节奏把你的节奏掰断了"},
    ]
  },
  '癸亥': {
    match: [
      {gz:'乙卯', name:'软刀子', relation:'sanhe', quote:"你俩一组队，事情自动推进"},
      {gz:'乙未', name:'草', relation:'sanhe', quote:"他是你的同频战友，不解释就懂"},
      {gz:'甲寅', name:'推土机', relation:'liuhe', quote:"你们不像两个人，像同一个人的正反面"},
    ],
    avoid: [
      {gz:'乙巳', name:'白嫖侠', relation:'liuchong', quote:"一个想往东一个想往西，结果两个都卡住"},
      {gz:'甲申', name:'犟驴', relation:'liuhai', quote:"你们相处会莫名累——没吵架，却一直在扛"},
      {gz:'丁巳', name:'永动机', relation:'liuchong', quote:"你俩的磁场天生相反，硬凑会互相消耗到空"},
    ]
  },
};

// 关系类型 → 中文标签
const RELATION_LABELS = {
  sanhe:   '三合',
  liuhe:   '六合',
  liuchong:'六冲',
  liuhai:  '六害'
};

window.PAIR_DATA = PAIR_DATA;
window.RELATION_LABELS = RELATION_LABELS;
