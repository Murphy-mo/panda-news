/* ============================================================
   熊猫资讯 - 种子数据 seed-data.js
   说明：本文件为演示种子数据，多数条目依据公开报道整理，
   具体以官方公告为准（网站已内置免责声明）。后台 CMS 可随时增删改。
   ============================================================ */
window.__PANDA_SEED__ = {
  /* ---------------- 熊猫档案库 ---------------- */
  pandas: [
    {
      id: 'p-hh', name: '和花', nick: '花花', gender: '♀', birthday: '2020-07-04',
      studbook: '1237', parents: '母亲：成功 / 父亲：和和（以官方谱系为准）', venue: 'v-cd',
      personality: '温顺亲人、佛系慢生活、不爱动、是基地的"人气担当"',
      feature: '圆滚滚、几乎看不出脖子，标志性"饭团"身形',
      intro: '和花（花花）因圆润呆萌的外形与从容淡定的性格走红，是成都大熊猫繁育研究基地的明星熊猫，被网友爱称"花局"。',
      timeline: [
        { date: '2020-07-04', text: '出生于成都大熊猫繁育研究基地，母亲为"成功"' },
        { date: '2021-12-31', text: '正式与游客见面，亮相幼年园' },
        { date: '2023-01', text: '因"谭爷爷喊花花"等视频走红网络' },
        { date: '2024-01', text: '成都基地推出"花花"系列官方文创' }
      ],
      stories: [
        { title: '名场面：坐在木架上的"花局"', text: '花花常安静坐在木架上发呆，任凭游客围观也不挪窝，被调侃"上班如上坟，但班味最浓"。' },
        { title: '趣闻：吃饭要"慢动作"', text: '花花吃饭速度极慢、细嚼慢咽，与同期活泼的弟弟形成鲜明对比，反而圈粉无数。' }
      ]
    },
    {
      id: 'p-hy', name: '和叶', nick: '叶叶', gender: '♂', birthday: '2020-07-04',
      studbook: '1238', parents: '母亲：成功 / 父亲：和和（以官方谱系为准）', venue: 'v-cd',
      personality: '活泼好动、爱爬树、精力充沛',
      feature: '比姐姐和花更苗条，动作敏捷，头顶有标志性"小呆毛"',
      intro: '和叶是和花的弟弟，与姐姐同年同月同日出生。性格与姐姐相反，是基地里出了名的"好动分子"。',
      timeline: [
        { date: '2020-07-04', text: '与姐姐和花同日出生于成都基地' },
        { date: '2022-01', text: '与和花一同与游客见面' },
        { date: '2023-06', text: '因爬树"越狱"名场面登上热搜' }
      ],
      stories: [
        { title: '名场面：上树小能手', text: '和叶爬树又快又稳，常在三米高枝头挂壁休息，饲养员都忍不住点赞。' }
      ]
    },
    {
      id: 'p-fubao', name: '福宝', nick: '福猪猪', gender: '♀', birthday: '2020-07-20',
      studbook: '—', parents: '母亲：爱宝（华妮）/ 父亲：乐宝（园欣）', venue: 'v-wl',
      personality: '亲人活泼、爱撒娇、适应力强',
      feature: '标志性"V字刘海"，与母亲爱宝互动名场面无数',
      intro: '福宝是首只出生于韩国的大熊猫，中韩两国合力繁育的成果。2024年4月回国，现居中国大熊猫保护研究中心卧龙神树坪基地。',
      timeline: [
        { date: '2020-07-20', text: '出生于韩国爱宝乐园，父母为旅韩大熊猫爱宝、乐宝' },
        { date: '2020-11', text: '首次公开亮相，"福宝"命名公布' },
        { date: '2023-07', text: '韩国举行"福宝告别展"，引发万人排队' },
        { date: '2024-04-03', text: '启程回国，入住卧龙神树坪基地' },
        { date: '2024-06', text: '完成隔离检疫后正式与公众见面' }
      ],
      stories: [
        { title: '名场面：与"姜爷爷"的祖孙情', text: '饲养员姜哲远与福宝亲如祖孙，"福宝与姜爷爷"的日常视频火遍中韩两国。' },
        { title: '趣闻：自带"刘海"发型', text: '福宝额头的黑色毛发呈V字形，被网友称为天然"齐刘海"，成为她的专属标志。' }
      ]
    },
    {
      id: 'p-xiangxiang', name: '香香', gender: '♀', birthday: '2017-06-12',
      studbook: '—', parents: '母亲：真真 / 父亲：力力', venue: 'v-yaan',
      personality: '温婉安静、慢热、吃相优雅',
      feature: '面容清秀，右耳有标志性小缺口',
      intro: '香香是首只出生于日本上野动物园的大熊猫，在日本人气极高。2023年2月回国，现居雅安碧峰峡基地。',
      timeline: [
        { date: '2017-06-12', text: '出生于日本上野动物园，是"真真"与"力力"的女儿' },
        { date: '2017-12', text: '"香香"命名公布并正式亮相，上野动物园预约名额秒空' },
        { date: '2023-02-21', text: '结束旅日生活，启程回国' },
        { date: '2023-03', text: '在雅安碧峰峡基地完成检疫隔离' }
      ],
      stories: [
        { title: '名场面：日本人气"顶流"', text: '香香亮相期间，上野动物园单日入园需抽签排队数小时，相关周边一货难求。' }
      ]
    },
    {
      id: 'p-yaya', name: '丫丫', gender: '♀', birthday: '2000-08-03',
      studbook: '—', parents: '母亲：乐乐（北京动物园）/ 父亲：—', venue: 'v-bjzoo',
      personality: '坚韧温和，回国后状态逐渐好转',
      feature: '耳朵较大，身形偏瘦，神情温柔',
      intro: '丫丫于2003年赴美旅居孟菲斯动物园，2023年4月结束旅美生活回国，现居北京动物园。她牵动无数网友的心，也是推动大熊猫保护合作透明化的标志性个体。',
      timeline: [
        { date: '2000-08-03', text: '出生于北京动物园' },
        { date: '2003-04', text: '赴美国孟菲斯动物园开展合作研究' },
        { date: '2023-02', text: '旅美伴侣"乐乐"在孟菲斯离世' },
        { date: '2023-04-27', text: '丫丫启程回国，抵达上海，随后转至北京动物园' }
      ],
      stories: [
        { title: '名场面：回国后的"炫饭"', text: '回国后的丫丫大口吃竹子的画面让无数网友落泪："它终于可以好好吃饭了。"' }
      ]
    },
    {
      id: 'p-menglan', name: '萌兰', nick: '么么儿', gender: '♂', birthday: '2015-07-04',
      studbook: '—', parents: '母亲：萌萌 / 父亲：美兰', venue: 'v-bjzoo',
      personality: '聪明调皮、胆大爱探索、会"越狱"',
      feature: '方脸大眼、表情丰富，外号"西直门三太子"',
      intro: '萌兰出生在成都基地，2017年回到北京动物园。因多次尝试"越狱"和丰富表情包走红，是北京动物园的顶流。',
      timeline: [
        { date: '2015-07-04', text: '出生于成都大熊猫繁育研究基地' },
        { date: '2017-09', text: '回到北京动物园定居' },
        { date: '2021-12', text: '因"越狱"视频爆火，成为全民"三太子"' }
      ],
      stories: [
        { title: '名场面：翻墙"越狱"', text: '萌兰曾借助栖架攀爬翻出运动场围栏，被网友笑称"想出去看看世界"，饲养员随即加强围栏。"' },
        { title: '趣闻：与饲养员的"斗智斗勇"', text: '萌兰会扒开投食口偷看饲养员，甚至自己打开小门，被戏称"聪明过头"。' }
      ]
    },
    {
      id: 'p-qizi', name: '七仔', gender: '♂', birthday: '2009-11-01',
      studbook: '—', parents: '野生救助（具体谱系未公开）', venue: 'v-qinling',
      personality: '憨厚温吞、独来独往',
      feature: '全球罕见的棕色大熊猫（棕白色毛色）',
      intro: '七仔是至今唯一圈养的棕色大熊猫，2009年在陕西佛坪被发现并救助，现居秦岭大熊猫研究中心。',
      timeline: [
        { date: '2009-11', text: '在陕西佛坪野外被救助，发现时约2个月大' },
        { date: '2014', text: '迁入秦岭大熊猫研究中心（佛坪基地）' },
        { date: '2020', text: '七仔成为研究棕色毛色遗传机制的重要个体' }
      ],
      stories: [
        { title: '名场面：棕色"巧克力熊"', text: '七仔的棕白毛色全球罕见，被称为"巧克力色大熊猫"，是研究毛色突变的重要样本。' }
      ]
    },
    {
      id: 'p-ruyi', name: '如意', gender: '♂', birthday: '2016-07-31',
      studbook: '—', parents: '—', venue: 'v-moscow',
      personality: '活泼强壮、好奇心强',
      feature: '体型健硕，对雪天格外兴奋',
      intro: '如意于2019年4月与"丁丁"一同启程前往俄罗斯莫斯科动物园，是中俄大熊猫保护研究合作的代表。',
      timeline: [
        { date: '2016-07-31', text: '出生于中国大熊猫保护研究中心' },
        { date: '2019-04-29', text: '与"丁丁"启程赴俄罗斯莫斯科动物园' },
        { date: '2023-08-24', text: '女儿"喀秋莎"在莫斯科出生' }
      ],
      stories: [
        { title: '名场面：雪地撒欢', text: '莫斯科的冬天，如意在雪地里打滚翻滚的视频走红，被网友称"熊中豪杰"。' }
      ]
    },
    {
      id: 'p-jinhu', name: '金虎', gender: '♂', birthday: '2010-07-15',
      studbook: '—', parents: '—', venue: 'v-dalian',
      personality: '性格温和、爱"营业"、亲人',
      feature: '圆脸大眼，是园内人气担当',
      intro: '金虎是大连森林动物园的明星大熊猫，性格温顺亲人，常与游客隔着玻璃"互动"，多次登上热搜。',
      timeline: [
        { date: '2010-07-15', text: '出生于成都大熊猫繁育研究基地' },
        { date: '2012', text: '定居大连森林动物园' }
      ],
      stories: [
        { title: '名场面：玻璃前的"营业"', text: '金虎喜欢蹲在玻璃前近距离与游客互动，被网友称为"最敬业打工熊"。' }
      ]
    },
    {
      id: 'p-xingyi', name: '星一', gender: '♂', birthday: '2013-08-05',
      studbook: '—', parents: '—', venue: 'v-gz',
      personality: '活泼贪玩、精力旺盛',
      feature: '与妹妹"雅一"为龙凤胎',
      intro: '星一与妹妹雅一是一对龙凤胎，星一现居广州动物园，是广州小朋友的"老朋友"。',
      timeline: [
        { date: '2013-08-05', text: '与妹妹雅一出生于广州长隆' },
        { date: '2015', text: '移居广州动物园' }
      ],
      stories: [
        { title: '名场面：爬架"杂技"', text: '星一在栖架上翻腾跳跃的"杂技表演"常引得游客驻足喝彩。' }
      ]
    },
    {
      id: 'p-yuanzai', name: '圆仔', gender: '♀', birthday: '2013-07-06',
      studbook: '—', parents: '母亲：圆圆 / 父亲：团团', venue: 'v-taipei',
      personality: '温和亲人、慢条斯理',
      feature: '中国台湾出生的第一只大熊猫',
      intro: '圆仔是中国台湾地区台北市立动物园首只出生的大熊猫，母亲"圆圆"、父亲"团团"，是全台人气最高的"熊孩子"。',
      timeline: [
        { date: '2013-07-06', text: '出生于台北市立动物园' },
        { date: '2014-01', text: '首次公开亮相，全台轰动' }
      ],
      stories: [
        { title: '名场面：出生影像全球直播', text: '圆仔出生后，动物园直播其成长影像，创下动物园直播观看纪录。' }
      ]
    },
    {
      id: 'p-kqs', name: '喀秋莎', gender: '♀', birthday: '2023-08-24',
      studbook: '—', parents: '母亲：丁丁 / 父亲：如意', venue: 'v-moscow',
      personality: '活泼好动、爱爬树、初生牛犊不怕虎',
      feature: '俄罗斯首只出生的大熊猫，名字意为"小可爱"',
      intro: '喀秋莎于2023年8月24日出生于莫斯科动物园，是首只在俄罗斯出生的大熊猫，2024年3月首次公开亮相。',
      timeline: [
        { date: '2023-08-24', text: '出生于莫斯科动物园，父母为丁丁与如意' },
        { date: '2024-03', text: '"喀秋莎"命名公布，首次公开亮相' }
      ],
      stories: [
        { title: '名场面：雪地初体验', text: '喀秋莎第一次见到雪时兴奋打滚的画面萌翻两国网友。' }
      ]
    }
  ],

  /* ---------------- 全球场馆 ---------------- */
  venues: [
    {
      id: 'v-cd', name: '成都大熊猫繁育研究基地', region: 'domestic', location: '中国 · 四川成都',
      pandaCount: '200+（圈养）', updatedAt: '2026-08-15', officialUrl: 'https://www.panda.org.cn/',
      intro: '全球最知名的大熊猫科研繁育机构之一，集科研、繁育、保护教育于一体，也是"和花""和叶"的家乡。',
      pandas: ['和花', '和叶', '成实', '润玥'],
      dynamics: [
        { title: '基地启动暑期大熊猫科普研学营', date: '2026-08-15', source: '成都基地官方', text: '面向青少年的科普研学营开营，内容包括丰容制作体验、粪便分析实验等，官方渠道可预约。', tags: ['科普', '公益活动'] },
        { title: '新一季"熊猫萌态"慢直播上线', date: '2026-07-28', source: '成都基地官方', text: '基地上线高清慢直播频道，观众可实时观看幼年园熊猫宝宝日常。', tags: ['直播', '场馆动态'] }
      ]
    },
    {
      id: 'v-wl', name: '中国大熊猫保护研究中心 · 卧龙神树坪基地', region: 'domestic', location: '中国 · 四川阿坝',
      pandaCount: '60+', updatedAt: '2026-08-10', officialUrl: 'https://www.ipanda.cn/',
      intro: '大熊猫野化培训与放归的重要基地，"福宝"回国后的新家。',
      pandas: ['福宝', '青青', '盼盼'],
      dynamics: [
        { title: '福宝完成适应期，健康状态良好', date: '2026-07-02', source: '卧龙基地官方', text: '基地表示福宝已完全适应新环境，食欲与作息正常，游客可在开放区域正常观赏。', tags: ['福宝', '场馆动态'] },
        { title: '卧龙开展野外放归个体监测', date: '2026-06-20', source: '国家林草局', text: '科研团队对佩戴项圈的野化放归个体进行持续跟踪，记录其野外生存行为。', tags: ['科研保护'] }
      ]
    },
    {
      id: 'v-yaan', name: '中国大熊猫保护研究中心 · 雅安碧峰峡基地', region: 'domestic', location: '中国 · 四川雅安',
      pandaCount: '50+', updatedAt: '2026-07-30', officialUrl: 'https://www.ipanda.cn/',
      intro: '承担大熊猫检疫、繁育与科普展示功能，"香香"现居于此。',
      pandas: ['香香', '美美', '草草'],
      dynamics: [
        { title: '香香新居丰容升级完成', date: '2026-07-15', source: '雅安基地官方', text: '为香香新布置了木质栖架与水池，饲养员称其对新玩具很感兴趣。', tags: ['香香', '丰容'] }
      ]
    },
    {
      id: 'v-djy', name: '中国大熊猫保护研究中心 · 都江堰基地', region: 'domestic', location: '中国 · 四川都江堰',
      pandaCount: '40+', updatedAt: '2026-07-18', officialUrl: 'https://www.ipanda.cn/',
      intro: '紧邻青城山，环境清幽，是海归大熊猫的主要"驿站"。',
      pandas: ['泰山', '福妮', '淘淘'],
      dynamics: [
        { title: '都江堰基地迎来新一批海归熊猫', date: '2026-06-08', source: '熊猫中心', text: '本批海归大熊猫完成隔离检疫后入住新圈舍，状态稳定。', tags: ['回国', '场馆动态'] }
      ]
    },
    {
      id: 'v-bjzoo', name: '北京动物园', region: 'domestic', location: '中国 · 北京',
      pandaCount: '10+', updatedAt: '2026-08-01', officialUrl: 'https://www.bjzoo.com/',
      intro: '中国历史最悠久的动物园之一，"丫丫""萌兰"现居于此。',
      pandas: ['丫丫', '萌兰', '萌宝', '萌玉'],
      dynamics: [
        { title: '丫丫展出时间调整通知', date: '2026-07-22', source: '北京动物园官方', text: '因夏季高温，丫丫上午户外活动时间调整为7:00-9:30，请游客合理安排参观。', tags: ['丫丫', '场馆通知'] },
        { title: '萌兰"越狱"名场面重现？官方回应：系正常活动', date: '2026-08-01', source: '北京动物园官方', text: '有网友拍到萌兰爬上栖架顶端，园方回应为正常探索行为，围栏设施完好。', tags: ['萌兰'] }
      ]
    },
    {
      id: 'v-gz', name: '广州动物园', region: 'domestic', location: '中国 · 广东广州',
      pandaCount: '2', updatedAt: '2026-07-25', officialUrl: 'https://www.gzszoo.com/',
      intro: '华南地区人气动物园，大熊猫"星一"所在地。',
      pandas: ['星一', '雅一'],
      dynamics: [
        { title: '星一迎来13岁生日', date: '2026-08-05', source: '广州动物园官方', text: '园区为星一举办生日"竹蛋糕"活动，游客可通过官方渠道获取生日会照片。', tags: ['生日', '公益活动'] }
      ]
    },
    {
      id: 'v-dalian', name: '大连森林动物园', region: 'domestic', location: '中国 · 辽宁大连',
      pandaCount: '3', updatedAt: '2026-07-12', officialUrl: 'https://www.dalianzoo.com/',
      intro: '东北地区知名动物园，"金虎"所在地。',
      pandas: ['金虎', '妙音', '飞云'],
      dynamics: [
        { title: '金虎"敬业营业"视频走红', date: '2026-06-30', source: '游客投稿', text: '网友拍摄金虎在玻璃前"营业"的视频播放量破千万，园方提醒游客文明参观、勿投喂。', tags: ['金虎'] }
      ]
    },
    {
      id: 'v-qinling', name: '秦岭大熊猫研究中心', region: 'domestic', location: '中国 · 陕西汉中（佛坪）',
      pandaCount: '30+', updatedAt: '2026-07-08', officialUrl: 'https://www.snforest.gov.cn/',
      intro: '位于秦岭腹地，是棕色大熊猫"七仔"的家园，专注秦岭大熊猫保护研究。',
      pandas: ['七仔', '小馨', '正仔'],
      dynamics: [
        { title: '七仔毛发遗传研究取得新进展', date: '2026-07-08', source: '中心科研团队', text: '研究团队公布棕色毛色相关基因位点最新发现，成果已发表于学术期刊。', tags: ['科研保护', '七仔'] }
      ]
    },
    {
      id: 'v-taipei', name: '台北市立动物园', region: 'domestic', location: '中国台湾 · 台北',
      pandaCount: '3', updatedAt: '2026-06-25', officialUrl: 'https://www.zoo.gov.taipei/',
      intro: '"团团""圆圆"一家所在地，"圆仔"的母亲圆圆仍在此生活。',
      pandas: ['圆圆', '圆仔', '圆宝'],
      dynamics: [
        { title: '圆仔生日周活动举办中', date: '2026-07-06', source: '台北市立动物园', text: '园方为圆仔举办13岁生日周活动，游客可参与线上祝福墙。', tags: ['圆仔', '公益活动'] }
      ]
    },
    {
      id: 'v-ueno', name: '上野动物园', region: 'overseas', location: '日本 · 东京',
      pandaCount: '4', updatedAt: '2026-07-20', officialUrl: 'https://www.tokyo-zoo.net/',
      intro: '日本历史最悠久的动物园之一，"真真""力力"及其子女"晓晓""蕾蕾"所在地。',
      pandas: ['真真', '力力', '晓晓', '蕾蕾'],
      dynamics: [
        { title: '"晓晓""蕾蕾"双胞胎迎来5岁生日', date: '2026-06-23', source: '上野动物园官方', text: '园方公布双胞胎成长影像并举办生日庆祝活动，预约制参观。', tags: ['繁育', '生日'] }
      ]
    },
    {
      id: 'v-everland', name: '爱宝乐园', region: 'overseas', location: '韩国 · 龙仁',
      pandaCount: '3', updatedAt: '2026-07-16', officialUrl: 'https://www.everland.com/',
      intro: '韩国最大的主题乐园，"爱宝""乐宝"及女儿"睿宝""辉宝"所在地。',
      pandas: ['爱宝', '乐宝', '睿宝', '辉宝'],
      dynamics: [
        { title: '爱宝乐园双胞胎"睿宝""辉宝"周岁庆', date: '2026-07-07', source: '爱宝乐园官方', text: '园方为2025年出生的双胞胎熊猫举行周岁庆祝活动，公开成长日记。', tags: ['繁育', '生日'] }
      ]
    },
    {
      id: 'v-moscow', name: '莫斯科动物园', region: 'overseas', location: '俄罗斯 · 莫斯科',
      pandaCount: '4', updatedAt: '2026-08-08', officialUrl: 'https://moscowzoo.ru/',
      intro: '"如意""丁丁"及女儿"喀秋莎"所在地，中俄大熊猫保护研究合作的典范。',
      pandas: ['如意', '丁丁', '喀秋莎'],
      dynamics: [
        { title: '喀秋莎迎来3岁生日，动物园办"竹蛋糕"', date: '2026-08-24', source: '莫斯科动物园官方', text: '动物园为喀秋莎制作多层"竹蛋糕"，并直播其"拆蛋糕"名场面。', tags: ['喀秋莎', '生日'] }
      ]
    },
    {
      id: 'v-sd', name: '圣迭戈动物园', region: 'overseas', location: '美国 · 加利福尼亚',
      pandaCount: '2', updatedAt: '2026-07-28', officialUrl: 'https://zoo.sandiegozoo.org/',
      intro: '2024年重新迎来大熊猫"云川""鑫宝"，续写中美大熊猫保护合作。',
      pandas: ['云川', '鑫宝'],
      dynamics: [
        { title: '云川、鑫宝赴美一周年影像公布', date: '2026-06-27', source: '圣迭戈动物园官方', text: '动物园发布两只大熊猫一周年生活影像，均健康活泼。', tags: ['国际合作'] }
      ]
    },
    {
      id: 'v-snzoo', name: '史密森尼国家动物园（美国国家动物园）', region: 'overseas', location: '美国 · 华盛顿',
      pandaCount: '2', updatedAt: '2026-07-10', officialUrl: 'https://nationalzoo.si.edu/',
      intro: '1972年"玲玲""兴兴"赴美开启中美熊猫外交，2024年"宝力""青宝"再续前缘。',
      pandas: ['宝力', '青宝'],
      dynamics: [
        { title: '宝力、青宝亮相满周年', date: '2026-10-15', source: '国家动物园官方', text: '园方表示两只大熊猫已适应新环境，参观热度持续不减。', tags: ['国际合作'] }
      ]
    },
    {
      id: 'v-memphis', name: '孟菲斯动物园', region: 'overseas', location: '美国 · 田纳西',
      pandaCount: '0', updatedAt: '2026-05-01', officialUrl: 'https://www.memphiszoo.org/',
      intro: '"丫丫""乐乐"曾旅居于此。2023年乐乐离世、丫丫回国后，暂无大熊猫。',
      pandas: [],
      dynamics: [
        { title: '孟菲斯动物园暂无大熊猫常驻', date: '2026-05-01', source: '孟菲斯动物园官方', text: '园方确认当前园区无大熊猫，相关合作安排以官方公告为准。', tags: ['场馆动态'] }
      ]
    },
    {
      id: 'v-river', name: '新加坡河川生态园', region: 'overseas', location: '新加坡',
      pandaCount: '2', updatedAt: '2026-06-30', officialUrl: 'https://www.mandai.com/',
      intro: '"嘉嘉""凯凯"所在地，2021年8月迎来首只在新加坡出生的大熊猫"叻叻"（已回国）。',
      pandas: ['嘉嘉', '凯凯'],
      dynamics: [
        { title: '"叻叻"回国后首份体检报告公布', date: '2026-06-18', source: '新加坡万礼集团', text: '叻叻回国后在四川基地体检各项指标正常，已开始独立生活。', tags: ['回国', '叻叻'] }
      ]
    },
    {
      id: 'v-berlin', name: '柏林动物园', region: 'overseas', location: '德国 · 柏林',
      pandaCount: '4', updatedAt: '2026-07-05', officialUrl: 'https://www.zoo-berlin.de/',
      intro: '2017年"娇庆""梦梦"抵达柏林，2024年8月梦梦诞下双胞胎"皮特""宝妹"。',
      pandas: ['娇庆', '梦梦', '皮特', '宝妹'],
      dynamics: [
        { title: '柏林双胞胎熊猫宝宝亮相周年', date: '2026-08-31', source: '柏林动物园官方', text: '园方公布双胞胎最新影像，两只宝宝已能独立进食竹子。', tags: ['繁育'] }
      ]
    }
  ],

  /* ---------------- 大事件（时间线） ---------------- */
  events: [
    { id: 'e-2026-1', title: '成都基地"花花"生日月活动开启', date: '2026-07-04', year: 2026, tag: '公益活动', status: 'official', source: '成都大熊猫繁育研究基地', content: '为庆祝和花6岁生日，基地推出"花花生日月"主题科普活动，包括线上直播与限定科普周边展示（非售卖宣传）。', image: '', pinned: true },
    { id: 'e-2026-2', title: '网传"某地出现野生大熊猫进城"被辟谣', date: '2026-06-12', year: 2026, tag: '科研成果', status: 'rumor', source: '多部门联合辟谣', content: '近日网传"某县城出现野生大熊猫逛街"视频，经核实系异地旧视频拼接。提醒网友以官方通报为准，不信谣不传谣。', image: '' },
    { id: 'e-2025-1', title: '大熊猫国家公园完成首批巡护员培训', date: '2025-11-20', year: 2025, tag: '科研成果', status: 'official', source: '国家林草局', content: '大熊猫国家公园启动新一轮基层巡护员培训，覆盖野外监测、急救与反盗猎技能，保护大熊猫栖息地。', image: '' },
    { id: 'e-2025-2', title: '全球圈养大熊猫数量突破800只', date: '2025-03-15', year: 2025, tag: '科研成果', status: 'official', source: '国家林草局（公开报道）', content: '官方公开信息显示，随着繁育技术持续突破，全球圈养大熊猫种群数量已突破800只，大熊猫保护从"抢救性保护"迈向"高质量发展"。', image: '' },
    { id: 'e-2024-1', title: '"福宝"结束旅韩生活平安回国', date: '2024-04-03', year: 2024, tag: '回国租借', status: 'official', source: '中国大熊猫保护研究中心', content: '首只在韩国出生的大熊猫"福宝"于4月3日启程回国，抵达成都后入住卧龙神树坪基地开展隔离检疫，中韩大熊猫保护研究合作进入新阶段。', image: '', pinned: true },
    { id: 'e-2024-2', title: '"云川""鑫宝"启程赴美国圣迭戈动物园', date: '2024-06-27', year: 2024, tag: '回国租借', status: 'official', source: '国家林草局', content: '大熊猫"云川""鑫宝"启程前往美国圣迭戈动物园，开启为期10年的保护研究合作，这是中美大熊猫合作的新篇章。', image: '' },
    { id: 'e-2024-3', title: '香港"盈盈"诞下龙凤胎，创高龄产子纪录', date: '2024-08-15', year: 2024, tag: '繁育', status: 'official', source: '香港海洋公园', content: '19岁的"盈盈"在香港海洋公园诞下一对龙凤胎，成为全球最高龄首次产子的大熊猫之一，全港掀起熊猫热潮。', image: '', pinned: true },
    { id: 'e-2024-4', title: '野外大熊猫种群数量约1900只', date: '2024-01-25', year: 2024, tag: '科研成果', status: 'official', source: '国家林草局', content: '国家林草局发布：全国野外大熊猫种群数量已从抢救性保护时期的1114只增长到约1900只，受威胁程度等级由"濒危"降为"易危"。', image: '' },
    { id: 'e-2023-1', title: '"香香"从日本回到祖国怀抱', date: '2023-02-21', year: 2023, tag: '回国租借', status: 'official', source: '中国大熊猫保护研究中心', content: '旅日大熊猫"香香"启程回国，抵达四川雅安碧峰峡基地，结束5年多的旅日生活。', image: '' },
    { id: 'e-2023-2', title: '旅美大熊猫"乐乐"在孟菲斯动物园离世', date: '2023-02-01', year: 2023, tag: '离世纪念', status: 'official', source: '孟菲斯动物园/国内官方', content: '旅美大熊猫"乐乐"不幸离世，国内外高度关注。相关部门随即启动丫丫回国的各项安排，推动大熊猫旅外福利标准提升。', image: '' },
    { id: 'e-2023-3', title: '"丫丫"平安回到北京动物园', date: '2023-04-27', year: 2023, tag: '回国租借', status: 'official', source: '国家林草局', content: '丫丫从美国孟菲斯启程回国，经上海隔离检疫后回到北京动物园。无数网友以"炫饭"直播见证丫丫回归。', image: '', pinned: true },
    { id: 'e-2023-4', title: '俄罗斯首只大熊猫"喀秋莎"出生', date: '2023-08-24', year: 2023, tag: '繁育', status: 'official', source: '莫斯科动物园', content: '旅俄大熊猫"丁丁"在莫斯科动物园诞下女儿，这是俄罗斯历史上首只出生的大熊猫，取名"喀秋莎"。', image: '' },
    { id: 'e-2023-5', title: '"成功"妈妈在成都基地离世', date: '2023-09-03', year: 2023, tag: '离世纪念', status: 'official', source: '成都大熊猫繁育研究基地', content: '大熊猫"成功"（"和花""和叶"之母）因病抢救无效离世，基地公布病程细节并悼念这位功勋母亲。', image: '' },
    { id: 'e-2022-1', title: '大熊猫国家公园正式设立一周年', date: '2022-10-12', year: 2022, tag: '科研成果', status: 'official', source: '国家林草局', content: '大熊猫国家公园设立满一周年，栖息地保护范围覆盖川陕甘三省，野外种群与栖息地质量持续向好。', image: '' },
    { id: 'e-2021-1', title: '大熊猫国家公园正式设立', date: '2021-10-12', year: 2021, tag: '科研成果', status: 'official', source: '国家林草局', content: '我国宣布正式设立大熊猫国家公园，总面积约2.2万平方公里，将大熊猫关键栖息地纳入整体保护。', image: '' },
    { id: 'e-2016-1', title: 'IUCN将大熊猫受威胁等级降为"易危"', date: '2016-09-04', year: 2016, tag: '科研成果', status: 'official', source: 'IUCN（国际自然保护联盟）', content: 'IUCN红色名录将大熊猫从"濒危"调整为"易危"，中国林业部门同步强调：大熊猫保护形势依然严峻，仍需持续努力。', image: '' }
  ],

  /* ---------------- 文创专栏 ---------------- */
  culture: [
    { id: 'c-1', title: '成都基地"和花"官方玩偶（2026款）', category: '官方上新', brand: '成都大熊猫繁育研究基地官方文创', licensed: true, intro: '以"和花"为原型设计的官方玩偶，细节还原"饭团"身形，每只附官方授权吊牌与编号。', saleTime: '2026-05-20', link: 'https://www.panda.org.cn/', tags: ['和花', '玩偶'] },
    { id: 'c-2', title: '"福宝"回国纪念徽章（已售罄）', category: '限量文创', brand: '中国大熊猫保护研究中心', licensed: true, intro: '福宝回国纪念款金属徽章，限量发行，附收藏证书，目前已全部售罄，仅作回顾展示。', saleTime: '2024-05-01', link: 'https://www.ipanda.cn/', tags: ['福宝', '徽章', '绝版'] },
    { id: 'c-3', title: '北京动物园"萌兰"主题冰箱贴', category: '官方上新', brand: '北京动物园官方文创', licensed: true, intro: '以"西直门三太子"越狱名场面为灵感的树脂冰箱贴，园区文创店在售。', saleTime: '2026-03-01', link: 'https://www.bjzoo.com/', tags: ['萌兰', '冰箱贴'] },
    { id: 'c-4', title: '08奥运福娃"晶晶"纪念玩偶（绝版回顾）', category: '绝版回顾', brand: '北京奥组委（历史官方授权）', licensed: true, intro: '2008年北京奥运会吉祥物"晶晶"以熊猫为原型，如今已成一代人的集体记忆，市面上正品存量稀少。', saleTime: '2008-08-08', link: '', tags: ['绝版', '奥运'] },
    { id: 'c-5', title: '旅日"香香"纪念邮票册（正版测评）', category: '正版测评', brand: '日本邮便（官方发行）', licensed: true, intro: '日本官方为香香发行的纪念邮票，设计精美。本文测评入手渠道、印刷细节与收藏建议，供参考。', saleTime: '2023-02-01', link: '', tags: ['香香', '邮票', '测评'] },
    { id: 'c-6', title: '科普书《大熊猫的秘密》亲子共读测评', category: '正版测评', brand: '官方出版社', licensed: true, intro: '面向亲子家庭的熊猫科普读物，含大量实拍图片与基地授权资料，适合6-12岁儿童入门。', saleTime: '2025-08-01', link: '', tags: ['科普', '图书'] },
    { id: 'c-7', title: '警惕！市面上流通的"假福宝公仔"避雷指南', category: '盗版避雷', brand: '—', licensed: false, intro: '部分电商在售"福宝同款"公仔未获任何官方授权，材质不明。本文教你从吊牌、缝线、售价三处辨别。', saleTime: '', link: '', tags: ['避雷', '盗版'] },
    { id: 'c-8', title: '香港海洋公园"龙凤胎"主题限定周边', category: '官方上新', brand: '香港海洋公园', licensed: true, intro: '为"盈盈"龙凤胎推出的限定周边，包括毛绒玩偶与纪念币，收入用于园区动物保育。', saleTime: '2025-02-14', link: 'https://www.oceanpark.com.hk/', tags: ['香港', '龙凤胎'] },
    { id: 'c-9', title: '秦岭"七仔"棕色系手绘帆布包', category: '限量文创', brand: '秦岭大熊猫研究中心合作款', licensed: true, intro: '以棕色大熊猫"七仔"为设计元素的帆布包，部分收益捐赠用于秦岭大熊猫野外保护。', saleTime: '2026-04-22', link: '', tags: ['七仔', '公益'] },
    { id: 'c-10', title: '盗版辨别：卡通"熊猫头"挂件三处破绽', category: '盗版避雷', brand: '—', licensed: false, intro: '低价"熊猫头"挂件多为无授权盗版，常见破绽：无官方授权标、材质异味、图案模糊。购买前认准官方旗舰店。', saleTime: '', link: '', tags: ['避雷', '盗版'] }
  ],

  /* ---------------- 科普专栏 ---------------- */
  articles: [
    {
      id: 'a-1', title: '大熊猫是熊还是猫？一篇文章讲清楚', category: '基础认知', difficulty: '新手入门', date: '2026-07-10', source: '本站科普组',
      relatedPanda: '', relatedVenue: '',
      content: '<p>大熊猫属于食肉目、熊科、大熊猫亚科。从分类学上讲，它和我们常说的"猫"（猫科）没有任何关系，而是熊科动物中特化程度极高的一支。</p><h3>为什么长得不像熊？</h3><p>大熊猫的祖先在约700万年前开始转向以竹子为主食，牙齿、头骨、前掌都发生了适应性改变：臼齿变大变平便于磨碎竹竿，前掌长出"伪拇指"便于握竹。这些改变让它的外形逐渐远离了典型的熊类。</p><p>所以结论是：大熊猫是"吃素的熊"，不是猫。</p>'
    },
    {
      id: 'a-2', title: '大熊猫为什么是黑白配色？', category: '基础认知', difficulty: '新手入门', date: '2026-07-02', source: '本站科普组',
      relatedPanda: '', relatedVenue: '',
      content: '<p>大熊猫的黑白配色是长期演化的结果。2017年发表在《行为生态学》期刊的研究认为：白色部分用于在雪地背景中伪装，黑色四肢与肩带则帮助其在竹林阴影中隐藏。</p><p>黑色眼圈和耳朵则承担着沟通功能：熊猫之间靠黑眼圈、黑耳朵传递威胁与识别信号，类似其他熊科动物的耳朵姿态。</p><p>不过要提醒：这是目前主流假说之一，仍有学者持不同观点，属于"有科学依据的推测"而非定论。</p>'
    },
    {
      id: 'a-3', title: '什么是"丰容"？圈养熊猫的快乐密码', category: '圈养专项', difficulty: '进阶干货', date: '2026-06-25', source: '本站科普组',
      relatedPanda: '', relatedVenue: 'v-cd',
      content: '<p>丰容（Enrichment）是指通过改变圈养环境、提供新物品或活动，刺激动物表现自然行为、减少刻板行为的管理手段。对圈养大熊猫来说，丰容是必修课。</p><h3>常见丰容手段</h3><ul><li>食物丰容：把竹笋藏进纸筒、冰糕、竹球里，增加觅食难度</li><li>环境丰容：更新栖架、水池、麻袋、玩具球</li><li>气味丰容：投放其他动物的粪便气味、精油、香料</li><li>感官丰容：播放自然声、悬挂不同材质布条</li></ul><p>当你看到熊猫抱着"竹笋冰棍"啃得津津有味，那就是丰容物品。它让圈养生活更接近野外觅食节奏，是圈养熊猫福利的核心指标之一。</p>'
    },
    {
      id: 'a-4', title: '双胞胎轮换育幼：圈养大熊猫的"带娃智慧"', category: '圈养专项', difficulty: '进阶干货', date: '2026-06-18', source: '本站科普组',
      relatedPanda: 'p-hy', relatedVenue: 'v-cd',
      content: '<p>大熊猫分娩常产双胎，但野生状态下母亲通常只能养活一只。圈养体系通过"轮换育幼"技术显著提高了双胞胎存活率。</p><h3>怎么操作？</h3><p>初生熊猫宝宝仅100克左右、几乎无自理能力。饲养员将两只宝宝轮流与妈妈同处：一只在妈妈身边吃奶、获得抚育，另一只在育婴箱中人工喂养，每2-4小时轮换一次。</p><p>这一技术让圈养双胞胎存活率大幅提升。和花、和叶姐弟就是成功案例——它们正是同日出生、由"成功"妈妈与饲养团队共同带大的双胞胎。</p><blockquote>补充：熊猫妈妈有"选择性抚育"本能，轮换育幼既尊重母性行为，又保证两只宝宝都获得足够营养。</blockquote>'
    },
    {
      id: 'a-5', title: '辟谣：竹子开花，大熊猫就会灭绝吗？', category: '谣言辟谣', difficulty: '新手入门', date: '2026-06-10', source: '本站科普组',
      relatedPanda: '', relatedVenue: '',
      content: '<p><b>谣言</b>：竹子每隔几十年会同步开花枯死，一旦大面积开花，吃竹子的熊猫就会饿死灭绝。</p><p><b>事实</b>：竹子开花确实存在且有一定周期性，但大熊猫并不依赖单一竹种。野外大熊猫常在不同海拔活动，主食竹有多个种类，且不同竹种开花时间并不同步。</p><p>科研数据显示，上世纪70年代与80年代两次箭竹开花事件确实造成局部种群波动，但大熊猫通过迁移至其他竹种区域渡过难关，种群并未因此灭绝。</p><blockquote>真正威胁大熊猫的是栖息地破碎化与人类活动干扰，而不是竹子开花本身。</blockquote>'
    },
    {
      id: 'a-6', title: '辟谣：圈养熊猫"不会野外生存、放归必死"？', category: '谣言辟谣', difficulty: '进阶干货', date: '2026-05-28', source: '本站科普组',
      relatedPanda: '', relatedVenue: 'v-wl',
      content: '<p><b>谣言</b>：圈养大熊猫丧失野性，野化放归只会死掉。</p><p><b>事实</b>：我国自2003年起实施大熊猫野化放归，采用的是"母兽带崽"野化培训法：熊猫幼崽由有野外经验的母亲带大，在接近野外的环境中学习觅食、避敌、筑巢，全程不接触人类。</p><p>截至2023年，已有多只个体成功放归并通过项圈持续监测，其中"淘淘""华姣"等个体长期存活并记录到正常野外行为。放归是长期科学工程，成功个案说明方法是有效的，但放归绝不等于"扔进山林"。</p>'
    },
    {
      id: 'a-7', title: '大熊猫野化放归是怎么做的？', category: '科研保护', difficulty: '硬核科研', date: '2026-05-15', source: '本站科普组',
      relatedPanda: '', relatedVenue: 'v-wl',
      content: '<p>野化放归是恢复野生小种群的"终极手段"，流程极其严格：</p><ul><li>第一步：母兽选择——挑选有野外生存经历、母性强的个体作为"导师"</li><li>第二步：封闭培训——在海拔较高、模拟野外的培训圈内，幼崽随母兽学习，全程穿伪装服、抹气味膏避免人类印记</li><li>第三步：食性训练——逐步用野外竹种替代人工饲料，考核独立取食能力</li><li>第四步：放归监测——佩戴GPS项圈，跟踪活动范围、采食、体况，定期评估</li></ul><p>每只放归个体的培训周期通常2-3年，投入巨大。放归目标小种群包括四川栗子坪、卧龙等地，为孤立小种群补充基因多样性。</p>'
    },
    {
      id: 'a-8', title: '人工繁育的"三难"是怎么攻克的？', category: '科研保护', difficulty: '硬核科研', date: '2026-04-30', source: '本站科普组',
      relatedPanda: '', relatedVenue: 'v-cd',
      content: '<p>大熊猫人工繁育曾长期面临"发情难、配种受孕难、育幼成活难"三难问题。</p><h3>三难如何被攻克</h3><ul><li>发情难：通过营养调控、光照与激素监测，精准识别发情窗口</li><li>配种受孕难：以自然交配为主、人工授精为辅，配合B超早期妊娠诊断</li><li>育幼成活难：奶粉配方改良 + 轮换育幼 + 24小时监护，成活率大幅提升</li></ul><p>正是这些突破，让圈养种群从几十只发展到800余只。如今我国大熊猫保护已从"抢救性保护"转向"高质量繁育"，重点更关注遗传多样性而非单纯数量。</p>'
    },
    {
      id: 'a-9', title: '冷知识：熊猫的"第六根手指"——伪拇指', category: '冷知识', difficulty: '新手入门', date: '2026-04-12', source: '本站科普组',
      relatedPanda: '', relatedVenue: '',
      content: '<p>大熊猫前掌有5根真正的指头，外加1根由腕骨特化而成的"伪拇指"。这根没有指甲、可灵活对握的"第六指"，让大熊猫能稳稳握住竹子并精细地剥皮。</p><p>伪拇指是大熊猫演化史上最著名的适应特征之一，与人类拇指的功能类似，但来源完全不同——它是腕骨长出来的，属于"趋同演化"的经典案例。</p>'
    },
    {
      id: 'a-10', title: '冷知识：大熊猫的尾巴其实挺长', category: '冷知识', difficulty: '新手入门', date: '2026-03-22', source: '本站科普组',
      relatedPanda: '', relatedVenue: '',
      content: '<p>大熊猫的尾巴在熊科里算是长的，约10-15厘米，呈白色。这与其他熊类的小尾巴形成对比。</p><p>尾巴还有个妙用：大熊猫在树上排便时，会用尾巴把肛门分泌物涂抹在树干上做气味标记，用来宣示领地。下次看到熊猫"倒立撒尿"，别笑——那是它在留言。</p>'
    },
    {
      id: 'a-11', title: '粉丝问答：为什么熊猫一天到晚在睡觉？', category: '粉丝问答', difficulty: '新手入门', date: '2026-03-05', source: '本站科普组（用户提问）',
      relatedPanda: 'p-hh', relatedVenue: '',
      content: '<p><b>问</b>：为什么去动物园总看到熊猫在睡觉？</p><p><b>答</b>：竹子是低能量食物，大熊猫每天要花10-14小时进食，其余时间休息以保存能量。它们的活动高峰通常在清晨和傍晚，中午酷热时段自然选择睡觉。</p><p>所以想看"活泼熊猫"，建议赶早场（开园前后）或下午4点后，那时的熊猫更爱活动。</p>'
    },
    {
      id: 'a-12', title: '粉丝问答：游客可以和熊猫合影、摸熊猫吗？', category: '粉丝问答', difficulty: '新手入门', date: '2026-02-18', source: '本站科普组（用户提问）',
      relatedPanda: '', relatedVenue: 'v-cd',
      content: '<p><b>问</b>：好想摸一摸熊猫，游客可以吗？</p><p><b>答</b>：不可以。大熊猫是猛兽，成年个体咬合力极强；且人类携带的病菌可能威胁熊猫健康。我国所有合法场馆均严禁游客接触大熊猫。</p><p>在网上看到的"抱熊猫"合影，多为早年资料或国外个别特殊许可项目，不代表可复制行为。爱它就远远地看，别打扰。</p>'
    }
  ],

  /* ---------------- 投稿（UGC） ---------------- */
  subs: [
    {
      id: 's-1', type: '实拍作品', nickname: '竹子不胖', date: '2026-08-02', title: '清晨的福宝：吃播时间到',
      content: '清晨赶到卧龙神树坪基地，福宝正好开饭。慢悠悠啃竹笋的样子治愈了一整天，可惜隔着玻璃，画质尽力了。',
      images: ['fubao'], status: 'approved', featured: true, likes: 0,
      copyright: true
    },
    {
      id: 's-2', type: '观展游记', nickname: '阿喵看展', date: '2026-07-26', title: '成都基地一日游全攻略（附时间表）',
      content: '门票预约、最佳观赏时间、幼年园路线、花花出没时段……把我踩过的坑都写出来了，希望对第一次去的猫粉有用！',
      images: ['cd'], status: 'approved', featured: false, likes: 0,
      copyright: true
    },
    {
      id: 's-3', type: '手绘二创', nickname: '小熊软糖', date: '2026-07-15', title: '手绘：萌兰的"越狱"梦想',
      content: '用水彩画了三太子爬上栖架眺望远方的一幕。二创作品，仅供爱好者交流，请勿商用。',
      images: ['draw'], status: 'approved', featured: false, likes: 0,
      copyright: true
    },
    {
      id: 's-4', type: '科普短文', nickname: '熊猫观察员', date: '2026-07-08', title: '如何从"吃相"判断熊猫心情',
      content: '整理了几条观察技巧：竖着啃是专注、躺着啃是放松、啃两口换一根是"挑剔"、扒着围栏看人是"想吃零食"（不可能给的）。欢迎补充！',
      images: [], status: 'approved', featured: false, likes: 0,
      copyright: true
    },
    {
      id: 's-5', type: '实拍作品', nickname: '莫斯科的雪', date: '2026-06-20', title: '喀秋莎的雪地首秀',
      content: '莫斯科动物园冬日的喀秋莎，第一次见到雪兴奋到原地打滚。俄罗斯的冬天和熊猫真是绝配。',
      images: ['kqs'], status: 'approved', featured: false, likes: 0,
      copyright: true
    },
    {
      id: 's-6', type: '观展游记', nickname: '广州仔', date: '2026-06-05', title: '广州动物园星一见闻：它真的会"营业"',
      content: '下午三点到熊猫馆，星一正在爬架"杂技表演"，围观群众掌声雷动。建议错峰前往，人少体验好。',
      images: ['gz'], status: 'approved', featured: false, likes: 0,
      copyright: true
    }
  ],

  /* ---------------- 评论（已审核） ---------------- */
  comments: [
    { id: 'cm-1', subId: 's-1', nickname: '福宝铁粉', content: '太可爱了，福宝回国后状态真好！', date: '2026-08-03', status: 'approved' },
    { id: 'cm-2', subId: 's-1', nickname: '竹子不胖', content: '补充：去的早才有这待遇，下午福宝就睡觉啦。', date: '2026-08-03', status: 'approved' },
    { id: 'cm-3', subId: 's-2', nickname: '第一次去成都', content: '攻略太实用了，已收藏，月底去！', date: '2026-07-27', status: 'approved' },
    { id: 'cm-4', subId: 's-3', nickname: '手绘大佬', content: '水彩质感绝了，求壁纸原图！', date: '2026-07-16', status: 'approved' }
  ]
};
