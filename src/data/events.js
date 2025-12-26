export const events = [
  // --- 序幕：汉室衰微 ---
  {
    id: 1,
    year: 184,
    title: "黄巾起义",
    category: "Conflict",
    factionKey: "han", 
    summary: "巨鹿人张角发动农民起义，以此为导火索，东汉朝廷名存实亡，群雄割据的局面开始形成。",
    keyFigures: ["张角", "何进", "皇甫嵩"]
  },
  {
    id: 2,
    year: 190,
    title: "十八路诸侯讨董",
    category: "Politics",
    factionKey: "han",
    summary: "董卓入京专权，关东各州郡长官推举袁绍为盟主，联合讨伐董卓。虽未成功，但导致军阀混战全面爆发。",
    keyFigures: ["袁绍", "曹操", "董卓", "吕布"]
  },
  {
    id: 3,
    year: 196,
    title: "挟天子以令诸侯",
    category: "Politics",
    factionKey: "wei",
    summary: "曹操迎汉献帝于许昌，取得了政治上的主动权，开始以汉朝丞相名义征讨四方。",
    keyFigures: ["曹操", "汉献帝", "荀彧"]
  },
  // --- 官渡与赤壁：北雄南峙 ---
  {
    id: 4,
    year: 200,
    title: "官渡之战",
    category: "Battle",
    factionKey: "wei",
    summary: "曹操以两万兵力在官渡击败袁绍十一万大军，是中国历史上著名的以少胜多的战役，奠定了统一北方的基础。",
    keyFigures: ["曹操", "袁绍", "郭嘉"]
  },
  {
    id: 5,
    year: 207,
    title: "三顾茅庐",
    category: "Culture",
    factionKey: "shu",
    summary: "刘备三次拜访诸葛亮，隆中对策确立了“跨有荆益，保其岩阻，西和诸戎，南抚夷越，外结好孙权”的战略。",
    keyFigures: ["刘备", "诸葛亮", "关羽", "张飞"]
  },
  {
    id: 6,
    year: 208,
    title: "赤壁之战",
    category: "Battle",
    factionKey: "han", // 这里为了保持样式统一，暂时归为汉/中立，或者你可以自己在TimelineCard里加一个'alliance'的样式
    summary: "曹操率大军南下，孙权、刘备联军在长江赤壁用火攻大破曹军。此战形成了三国鼎立的雏形。",
    keyFigures: ["周瑜", "诸葛亮", "曹操", "黄盖"]
  },
  // --- 三国鼎立 ---
  {
    id: 7,
    year: 219,
    title: "襄樊之战与走麦城",
    category: "Battle",
    factionKey: "shu",
    summary: "关羽水淹七军威震华夏，但遭吕蒙白衣渡江偷袭后方。关羽败走麦城被杀，荆州落入东吴之手，蜀汉由盛转衰。",
    keyFigures: ["关羽", "吕蒙", "曹仁", "陆逊"]
  },
  {
    id: 8,
    year: 220,
    title: "曹丕代汉建魏",
    category: "Politics",
    factionKey: "wei",
    summary: "曹操去世后，曹丕逼迫汉献帝禅让，建立魏国，定都洛阳。东汉王朝正式结束。",
    keyFigures: ["曹丕", "汉献帝", "司马懿"]
  },
  {
    id: 9,
    year: 221,
    title: "刘备称帝与夷陵之战",
    category: "Conflict",
    factionKey: "shu",
    summary: "刘备在成都称帝建立蜀汉。为报关羽之仇东征孙吴，被陆逊火烧连营七百里，大败而归。",
    keyFigures: ["刘备", "陆逊", "赵云"]
  },
  {
    id: 10,
    year: 223,
    title: "白帝城托孤",
    category: "Politics",
    factionKey: "shu",
    summary: "刘备病危，在白帝城将刘禅托付给诸葛亮。诸葛亮开始辅佐幼主，致力于恢复国力与南征北伐。",
    keyFigures: ["刘备", "诸葛亮", "刘禅"]
  },
  {
    id: 11,
    year: 225,
    title: "七擒孟获",
    category: "Conflict",
    factionKey: "shu",
    summary: "诸葛亮南征，平定南中叛乱，通过“攻心为上”稳定了蜀汉后方，为北伐做准备。",
    keyFigures: ["诸葛亮", "孟获", "马谡"]
  },
  {
    id: 12,
    year: 227,
    title: "出师表与北伐",
    category: "Politics",
    factionKey: "shu",
    summary: "诸葛亮上《出师表》，率军北伐曹魏。虽多次进攻，但因粮草不济和魏军坚守，未能成功。",
    keyFigures: ["诸葛亮", "赵云", "姜维"]
  },
  {
    id: 13,
    year: 229,
    title: "孙权称帝",
    category: "Politics",
    factionKey: "wu",
    summary: "孙权在武昌称帝，国号吴，后迁都建业。至此，三国（魏、蜀、吴）皇帝名号并立局面正式形成。",
    keyFigures: ["孙权", "陆逊", "张昭"]
  },
  // --- 星落与归晋 ---
  {
    id: 14,
    year: 234,
    title: "星落五丈原",
    category: "Death",
    factionKey: "shu",
    summary: "诸葛亮在第五次北伐中积劳成疾，病逝于五丈原军中。蜀汉失去了支柱，转入战略防御。",
    keyFigures: ["诸葛亮", "司马懿", "姜维"]
  },
  {
    id: 15,
    year: 249,
    title: "高平陵之变",
    category: "Politics",
    factionKey: "wei",
    summary: "司马懿发动政变，诛杀大将军曹爽，掌握了曹魏的军政大权，为司马氏代魏铺平道路。",
    keyFigures: ["司马懿", "曹爽"]
  },
  {
    id: 16,
    year: 263,
    title: "蜀汉灭亡",
    category: "Battle",
    factionKey: "wei",
    summary: "司马昭发动灭蜀之战，邓艾偷渡阴平直逼成都，刘禅投降。蜀汉成为三国中第一个灭亡的国家。",
    keyFigures: ["邓艾", "钟会", "姜维", "刘禅"]
  },
  {
    id: 17,
    year: 265,
    title: "司马炎建晋",
    category: "Politics",
    factionKey: "jin",
    summary: "司马昭之子司马炎逼迫魏元帝禅让，建立晋朝（西晋），定都洛阳。",
    keyFigures: ["司马炎", "司马昭"]
  },
  {
    id: 18,
    year: 280,
    title: "三分归晋",
    category: "Unification",
    factionKey: "jin",
    summary: "晋军六路伐吴，石头城破，吴主孙皓投降。持续近百年的分裂局面结束，中国重新统一。",
    keyFigures: ["司马炎", "杜预", "王浚", "孙皓"]
  }
];