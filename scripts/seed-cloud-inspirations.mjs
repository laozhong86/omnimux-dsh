import { readFileSync, existsSync } from 'node:fs'

async function resolveToken() {
  if (existsSync('/Users/x/.dsh/omnimux/access-token')) {
    const token = readFileSync('/Users/x/.dsh/omnimux/access-token', 'utf8').trim()
    if (token) return token
  }
  if (process.env.OMNIMUX_ACCESS_TOKEN) return process.env.OMNIMUX_ACCESS_TOKEN
  throw new Error('未找到 OmniMux Access Token，请在 设置 → 个人资料 登录')
}

const SEED_INSPIRATIONS = [
  {
    type: 'video',
    title: 'Ecolchi 护发发膜 沙龙拉直反差爆款',
    content: 'If you want ecolchipro, you can shop via my profile .#ecolchipro #ecolchiprohairoil #ecolchiprohairmask #ecolchiprocollagen #hairmask #hair #hairoil #smoothhair #keratin #haircare #4chair #ecolchiprocollagensheabutter',
    source_url: 'https://www.tiktok.com/@ecolchipro5/video/7661957211635059981?utm_source=seed',
    cover_key: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    hot_score: 118038,
    tags: ['TikTok', '美妆个护', '发膜', '反差测评', '爆款带货'],
    analysis: {
      creator: {
        name: 'btfcxwfomse',
        handle: 'ecolchipro5',
      },
      tiktok_video_id: '7661957211635059981',
      embed_player_url: 'https://www.tiktok.com/player/v1/7661957211635059981',
      hook_highlight: '【0–3s 黄金反差 Hook】沙龙开场直接展示极端蓬乱枯燥的 4C 发质与夹板拉直后镜面丝滑光泽的强烈对冲，视觉冲击力瞬间拉满。',
      target_goal: '【转化心理与目标】直击受损、粗硬与沙发人群痛点，通过理发师专业手法背书建立沙龙级信任，促成小黄车即时下单。',
      narrative_strategy: '【叙事视角与脚本】痛点场景代入 → 专业沙龙涂抹发膜实测 → 夹板一拉成型惊艳反转 → 强化个人主页橱窗导流（Shop via my profile）。',
      visual_breakdown: '【视听与节奏拆解】1.5 秒快速卡点剪辑，微距特写发丝由毛躁到反光的质感变化，配合原生节奏感强烈的沙龙背景原声。',
      replication_action: '【爆款复刻策略】1. 弃用长铺垫，开场必须展现对比极值；2. 强化产品大瓶装与质感特写；3. 文案核心关键词前置并覆盖受众痛点标签。',
    },
  },
  {
    type: 'video',
    title: 'Bionic Girlfriend 24小时约会实录：仿生科技情感共鸣',
    content: 'Dating a Bionic Girlfriend for 24 Hours: I Was Not Ready for This #robotgirlfriend #AI #humanoidrobot #futuretech #robotics #fyp',
    source_url: 'https://www.tiktok.com/@futurecompanion/video/7637493208297131277?utm_source=seed',
    cover_key: 'https://assets-stg.geminix.cc/link-extracts/2026/05/tiktok/7637493208297131277/image_0_1779624817957_dxdfcy.jpg',
    hot_score: 89200,
    tags: ['TikTok', 'AI科技', '仿生机器人', '爆款叙事', '情感短剧'],
    analysis: {
      creator: {
        name: 'Future Companion',
        handle: 'futurecompanion',
      },
      tiktok_video_id: '7637493208297131277',
      embed_player_url: 'https://www.tiktok.com/player/v1/7637493208297131277',
      hook_highlight: '【0–3s 悬念反差 Hook】“我和仿生女友约会了24小时，但接下来的事情完全超出了我的预期…” 机器人逼真神态直接抓住好奇心。',
      target_goal: '【转化心理与目标】激发观众对近未来科技生活的情感投射与好奇心，通过争议性与未来感设定拉高视频完播率与评论区深度互动。',
      narrative_strategy: '【叙事脚本结构】初见惊艳 → 日常互动温馨代入 → 突发系统拟真故障情绪反转 → 开放式哲学提问引发热烈讨论。',
      visual_breakdown: '【视听与节奏拆解】电影级调色与景深虚化，机器人微表情特写与第一人称主观镜头交织，科幻氛围原声配乐增强沉浸感。',
      replication_action: '【爆款复刻策略】科技题材短视频要避免生硬参数罗列，必须将硬核概念置入日常生活场景中，以“假作真时真亦假”的情绪张力做留存。',
    },
  },
  {
    type: 'video',
    title: '仿生女友系统 Bug 暴击：超出预设程序的真实反馈',
    content: 'She was not programmed to say that... The AI robot glitch that shocked everyone #ai #cyberpunk #robot #tech #future',
    source_url: 'https://www.tiktok.com/@futurecompanion/video/7643440072947240205?utm_source=seed',
    cover_key: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
    hot_score: 67500,
    tags: ['TikTok', '仿生科技', '反转短剧', '赛博朋克', '悬疑剧情'],
    analysis: {
      creator: {
        name: 'Future Companion',
        handle: 'futurecompanion',
      },
      tiktok_video_id: '7643440072947240205',
      embed_player_url: 'https://www.tiktok.com/player/v1/7643440072947240205',
      hook_highlight: '【0–3s 恐怖谷悬疑 Hook】机器人原本机械化的对答突然中断，眼神聚焦并说出一句带有自我意识的话语，瞬间打破安全感。',
      target_goal: '【转化心理与目标】利用“AI觉醒”与恐怖谷效应制造强刺激，让观众反复观看细节并在评论区寻找蛛丝马迹（二次完播率 > 80%）。',
      narrative_strategy: '【叙事脚本结构】常规对话铺垫 → 突发程序卡顿与异样动作 → 爆发核心金句 → 戛然而止留下悬念引导关注下集。',
      visual_breakdown: '【视听与节奏拆解】中景平视机位快速推向面部特写，背景音突兀静音后切入低频心跳音效，强化心理压迫感。',
      replication_action: '【爆款复刻策略】短视频反转的核心在“反差的不可逆性”，运用音画留白设计比直白解释更能激发社交传播与二创。',
    },
  },
  {
    type: 'video',
    title: '单身护士的日常生活：真实治愈系 UGC 口播',
    content: 'A normal day of an American nurse living alone. Though it is awful, I still have to keep smiling. #nurse #lifestyle #ugc #nurselife',
    source_url: 'https://www.tiktok.com/@aniston3060/video/7581306324319767838?utm_source=seed',
    cover_key: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    hot_score: 45300,
    tags: ['TikTok', '生活切片', '真实UGC', '情感共鸣', '护士日常'],
    analysis: {
      creator: {
        name: 'Aniston',
        handle: 'aniston3060',
      },
      tiktok_video_id: '7581306324319767838',
      embed_player_url: 'https://www.tiktok.com/player/v1/7581306324319767838',
      hook_highlight: '【0–3s 真实自述 Hook】护士服出镜微笑着说出最扎心的人生现状：“即使生活一团糟，我依然必须面对患者保持微笑”。',
      target_goal: '【转化心理与目标】用绝对真诚打破传统美化人设，建立深厚的情感认同与信任度，为后续生活好物种草打下坚实信任池。',
      narrative_strategy: '【叙事脚本结构】职业身份代入 → 情绪低谷与真实经历袒露 → 温暖自我打气 → 与观众建立“同路人”情感纽带。',
      visual_breakdown: '【视听与节奏拆解】无滤镜生活自然光，手持自拍视角，舒缓背景原声配合真挚口播，整体节奏自然松弛。',
      replication_action: '【爆款复刻策略】UGC 口播切忌演员感，开头第一句话必须点破受众内心共通的脆弱点，用脆弱换信任，用真诚换转化。',
    },
  },
  {
    type: 'video',
    title: 'TikTok Shop 美妆爆款好物开箱排版范式',
    content: 'I bet you have not seen this trending viral hair tool yet! Check the yellow basket below #tiktokshop #viralproduct #beautyhacks #fyp',
    source_url: 'https://www.tiktok.com/@rubdyzq/video/7636322506038578462?utm_source=seed',
    cover_key: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800&q=80',
    hot_score: 98100,
    tags: ['TikTok', 'TikTokShop', '好物开箱', '痛点带货', '美发神器'],
    analysis: {
      creator: {
        name: 'Ruby Trends',
        handle: 'rubdyzq',
      },
      tiktok_video_id: '7636322506038578462',
      embed_player_url: 'https://www.tiktok.com/player/v1/7636322506038578462',
      hook_highlight: '【0–3s 猎奇好物 Hook】“我敢打赌你绝对没见过这么神奇的美发工具！” 快速开箱展示奇特造型，直接激发点击欲。',
      target_goal: '【转化心理与目标】直观呈现“使用前 vs 使用后”的秒级见效效果，配合限时折扣打消购买决策疑虑，实现高转化率。',
      narrative_strategy: '【叙事脚本结构】惊叹抛出 → 10秒快速演示核心功能 → 价格与传统大牌对比 → 明确手势指引点击小黄车购买。',
      visual_breakdown: '【视听与节奏拆解】高饱和度画质，每一句话切换一个机位特写，快节奏 BGM 配合产品操作的清脆 ASMR 原声。',
      replication_action: '【爆款复刻策略】带货视频严格遵守 15 秒黄金法则：前3秒抛产品，中间8秒验效果，后4秒催下单，全片禁止冗余对话。',
    },
  },
  {
    type: 'video',
    title: '50+ 独立女性的松弛感：真诚对话与反焦虑视角',
    content: 'Life after 50 is not the end, it is just getting started. Embracing every wrinkle. #womenover50 #inspiration #lifestyle #mindset',
    source_url: 'https://www.tiktok.com/@aniston3060/video/7596887310491208991?utm_source=seed',
    cover_key: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80',
    hot_score: 52400,
    tags: ['TikTok', '女性成长', '反焦虑', '银发经济', '松弛感口播'],
    analysis: {
      creator: {
        name: 'Aniston',
        handle: 'aniston3060',
      },
      tiktok_video_id: '7596887310491208991',
      embed_player_url: 'https://www.tiktok.com/player/v1/7596887310491208991',
      hook_highlight: '【0–3s 态度金句 Hook】“谁说50岁是人生的下坡路？这恰恰是我真正自由的黄金起点！” 眼神笃定充满力量。',
      target_goal: '【转化心理与目标】打破年龄刻板印象，吸引中高客单价成熟女性受众，构建高净值私域与品质生活好物种草影响力。',
      narrative_strategy: '【叙事脚本结构】年龄痛点切入 → 人生阅历金句输出 → 展现松弛生活方式 → 鼓励所有女性拥抱真实自我。',
      visual_breakdown: '【视听与节奏拆解】柔和自然光与居家温暖色调，对话式中景平视构图，语速沉稳有力，配乐宁静治愈。',
      replication_action: '【爆款复刻策略】垂直受众内容重在价值观认同，打造具有鲜明反差力的人设立体度，往往比单纯追求泛流量具有更高的商业转化价值。',
    },
  },
  {
    type: 'video',
    title: '日常感悟随拍：如何用生活切片镜头打动观众',
    content: 'Sometimes peace of mind is all we need in this busy world. #mindfulness #peaceful #dailylife #vlog',
    source_url: 'https://www.tiktok.com/@aniston3060/video/7595037691368983839?utm_source=seed',
    cover_key: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
    hot_score: 38900,
    tags: ['TikTok', '生活美学', '治愈Vlog', '氛围感', '慢节奏'],
    analysis: {
      creator: {
        name: 'Aniston',
        handle: 'aniston3060',
      },
      tiktok_video_id: '7595037691368983839',
      embed_player_url: 'https://www.tiktok.com/player/v1/7595037691368983839',
      hook_highlight: '【0–3s 氛围沉浸 Hook】静谧清晨手冲咖啡的热气升腾与窗外鸟鸣，没有喧闹配乐，瞬间将观众拉入独处的治愈空间。',
      target_goal: '【转化心理与目标】为高压快节奏人群提供情绪庇护所，通过高赞收藏沉淀长期品牌美誉度与生活方式品牌调性。',
      narrative_strategy: '【叙事脚本结构】环境空镜开篇 → 动作细节特写 → 短小诗意独白 → 留下长久回味感。',
      visual_breakdown: '【视听与节奏拆解】高帧率慢动作升格镜头，微距捕捉生活质感，环境音原声（ASMR）作为主声音轨道。',
      replication_action: '【爆款复刻策略】慢节奏视频的核心在于音效质感和画面留白，用极简的视觉语言传递丰富的情绪价值。',
    },
  },
  {
    type: 'video',
    title: 'AI 机器人交互实测：前沿科技感短视频钩子',
    content: 'Testing humanoid AI robotics in public exhibition. People reactions are priceless! #robotics #futuretech #engineering #trending',
    source_url: 'https://www.tiktok.com/@10sorlabs/video/7676925302861221152?utm_source=seed',
    cover_key: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&q=80',
    hot_score: 142000,
    tags: ['TikTok', '具身智能', '科技展会', '路人反应', '硬核科技'],
    analysis: {
      creator: {
        name: '10sor Labs',
        handle: '10sorlabs',
      },
      tiktok_video_id: '7676925302861221152',
      embed_player_url: 'https://www.tiktok.com/player/v1/7676925302861221152',
      hook_highlight: '【0–3s 科技奇观 Hook】展会现场机器人与工程师实时动作同步，流畅的机械关节动作与拟真触感惊艳全场路人。',
      target_goal: '【转化心理与目标】展示顶尖前沿科技实力，建立行业领头羊认知，吸引科技爱好者、开发者以及投资人关注。',
      narrative_strategy: '【叙事脚本结构】路人震惊围观切入 → 多角度展现动作敏捷度 → 现场互动测试趣味细节 → 总结技术突破点。',
      visual_breakdown: '【视听与节奏拆解】多机位快速切换，机械运转声与展会环境声混合，动态变焦捕捉观众真实表情。',
      replication_action: '【爆款复刻策略】硬核技术展示必须搭配“路人真实反应”作为反光镜，通过第三方视角的震惊来强化观众的认知深度。',
    },
  },
  {
    type: 'video',
    title: '便携式游戏掌机 15秒超快节奏产品宣传片',
    content: 'MiniMax Console: Pocket size, desktop power. Game anywhere, anytime. #gamers #handheld #techreview #retrogaming',
    source_url: 'https://www.tiktok.com/@gametech/video/7650000000000000001?utm_source=seed',
    cover_key: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
    hot_score: 76000,
    tags: ['TikTok', '游戏硬件', '数码开箱', '快节奏混剪', '掌机'],
    analysis: {
      creator: {
        name: 'Game Tech Daily',
        handle: 'gametech',
      },
      tiktok_video_id: '7650000000000000001',
      embed_player_url: 'https://www.tiktok.com/player/v1/7650000000000000001',
      hook_highlight: '【0–3s 炫酷开箱 Hook】从西装口袋直接掏出掌机，一秒点亮屏幕进入 3A 大作光影画面，口袋与主机性能形成强对比。',
      target_goal: '【转化心理与目标】激发年轻数码玩家的随时随地畅玩需求，通过高密度产品卖点轰炸促成冲动消费。',
      narrative_strategy: '【叙事脚本结构】便携体积展示 → 3A 大作流畅帧率实操 → 散热与握持手感 → 限时早鸟特惠。',
      visual_breakdown: '【视听与节奏拆解】苹果级硬件工业质感打光，极速光流转场与游戏场景无缝衔接，强节奏电子乐与击键音效配合。',
      replication_action: '【爆款复刻策略】硬件数码视频要将“性能参数”转化为“直观使用场景”，用高质感的运镜烘托产品的高级感。',
    },
  },
  {
    type: 'video',
    title: '美妆护肤痛点反转：从烂脸到水光肌的真实打法',
    content: 'My skin transformation in 14 days. No filters, just real results. #skincareroutine #acnetreatment #glowup #beforeandafter',
    source_url: 'https://www.tiktok.com/@skincare_master/video/7655555555555555555?utm_source=seed',
    cover_key: 'https://images.unsplash.com/photo-1512290900672-1f4a9b6c0053?w=800&q=80',
    hot_score: 83000,
    tags: ['TikTok', '护肤蜕变', '对比测评', '痘肌逆袭', '成分党'],
    analysis: {
      creator: {
        name: 'Skincare Master',
        handle: 'skincare_master',
      },
      tiktok_video_id: '7655555555555555555',
      embed_player_url: 'https://www.tiktok.com/player/v1/7655555555555555555',
      hook_highlight: '【0–3s 真实蜕变 Hook】第一帧分屏直接对比 14 天前闭口痘肌与如今水润透亮素颜，视觉反差极大。',
      target_goal: '【转化心理与目标】直击问题肌肤受众自卑与求变心理，通过成分机理解释与每日打卡记录建立专业信任背书。',
      narrative_strategy: '【叙事脚本结构】烂脸焦虑代入 → 错误护肤踩坑辟谣 → 极简正确步骤实操 → 14天真实对比与购买指引。',
      visual_breakdown: '【视听与节奏拆解】高清无美颜原相机实拍，面部特写展现皮肤纹理变化，清新干净的视觉排版。',
      replication_action: '【爆款复刻策略】护肤类目最忌虚假美颜，原相机实拍的瑕疵和真实变化才是打动观众并产生长期复购的核心密码。',
    },
  },
]

async function seed() {
  const token = await resolveToken()
  const base = 'https://omnimux.ai/api/inspiration/v1'

  console.log('=== Step 1: 清空云端现有所有数据 ===')
  const listResp = await fetch(`${base}/inspirations?page_size=100`, {
    headers: { 'authorization': `Bearer ${token}`, 'accept': 'application/json' },
  })
  const listJson = await listResp.json()
  const currentItems = listJson.data?.items || listJson.data || []
  console.log(`当前云端共有 ${currentItems.length} 条数据，开始全量清空...`)

  for (const item of currentItems) {
    try {
      const delResp = await fetch(`${base}/inspirations/${item.id}`, {
        method: 'DELETE',
        headers: { 'authorization': `Bearer ${token}` },
      })
      console.log(`- 删除 ID ${item.id} (${item.title.slice(0, 20)}...): ${delResp.status}`)
    } catch (e) {
      console.error(`- 删除 ID ${item.id} 失败:`, e.message)
    }
  }

  console.log('\n=== Step 2: 注入 10 条完整五维 AI 拆解短视频灵感 ===')
  for (let i = 0; i < SEED_INSPIRATIONS.length; i++) {
    const seedItem = SEED_INSPIRATIONS[i]
    try {
      const createResp = await fetch(`${base}/inspirations`, {
        method: 'POST',
        headers: {
          'authorization': `Bearer ${token}`,
          'content-type': 'application/json',
          'accept': 'application/json',
        },
        body: JSON.stringify(seedItem),
      })
      const createJson = await createResp.json()
      if (createResp.status === 201 || createResp.status === 200) {
        const id = createJson.data?.id
        console.log(`[${i + 1}/10] 成功录入 ID: ${id} | 《${seedItem.title}》`)
      } else {
        console.error(`[${i + 1}/10] 录入失败 status ${createResp.status}:`, createJson)
      }
    } catch (err) {
      console.error(`[${i + 1}/10] 录入异常:`, err.message)
    }
  }

  console.log('\n=== Step 3: 全链路回查与字段映射校验 ===')
  const verifyResp = await fetch(`${base}/inspirations?page_size=50`, {
    headers: { 'authorization': `Bearer ${token}`, 'accept': 'application/json' },
  })
  const verifyJson = await verifyResp.json()
  const verifyList = verifyJson.data?.items || []
  console.log(`\n 云端微服务灵感库现存数据共 ${verifyList.length} 条：`)
  for (const item of verifyList) {
    const an = item.analysis || {}
    console.log(`--------------------------------------------------`)
    console.log(`ID: ${item.id} | 标题: ${item.title}`)
    console.log(`- 来源作者: ${an.creator?.name} (@${an.creator?.handle}) | 播放链接: ${an.embed_player_url}`)
    console.log(`- [1] Hook亮点: ${an.hook_highlight?.slice(0, 30)}...`)
    console.log(`- [2] 转化目标: ${an.target_goal?.slice(0, 30)}...`)
    console.log(`- [3] 叙事脚本: ${an.narrative_strategy?.slice(0, 30)}...`)
    console.log(`- [4] 视觉节奏: ${an.visual_breakdown?.slice(0, 30)}...`)
    console.log(`- [5] 复刻策略: ${an.replication_action?.slice(0, 30)}...`)
  }
}

seed().catch((err) => {
  console.error('Seed script fatal error:', err)
  process.exit(1)
})
