#!/usr/bin/env node
/**
 * Build catalog/index.json from the local WorkBuddy archive
 * /Users/x/Desktop/Project/Github/workbuddyskills (infometa/workbuddyskills).
 */
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = dirname(fileURLToPath(import.meta.url))
const ROOT = join(HERE, '..')
const WB = process.env.WORKBUDDYSKILLS_ROOT || '/Users/x/Desktop/Project/Github/workbuddyskills'
const REPO = 'infometa/workbuddyskills'
const ID = /^[a-z0-9]+(-[a-z0-9]+)*$/

const EXPERT_CATS = {
  '01-ProductDesign': { id: 'exp-product-design', title: '产品设计' },
  '02-Engineering': { id: 'exp-engineering', title: '技术工程' },
  '03-GameSpatial': { id: 'exp-game-spatial', title: '游戏空间' },
  '04-DataAI': { id: 'exp-data-ai', title: '数据智能' },
  '05-MarketingGrowth': { id: 'exp-marketing-growth', title: '营销增长' },
  '06-ContentCreative': { id: 'exp-content-creative', title: '内容创作' },
  '07-SalesCommerce': { id: 'exp-sales-commerce', title: '销售商务' },
  '08-FinanceInvestment': { id: 'exp-finance-investment', title: '金融投资' },
  '09-OperationsHR': { id: 'exp-operations-hr', title: '运营人力' },
  '10-ProjectQuality': { id: 'exp-project-quality', title: '项目质量' },
  '11-SecurityCompliance': { id: 'exp-security-compliance', title: '法务安全' },
  '12-IndustryConsultant': { id: 'exp-industry-consultant', title: '行业顾问' },
  '13-TencentZone': { id: 'exp-tencent-zone', title: '腾讯专区' },
  '14-GlobalDevelopment': { id: 'exp-global-development', title: '全球发展' },
}

const SKILLHUB_CATS = [
  { id: 'sk-opc', title: 'OPC·一人公司' },
  { id: 'sk-office', title: '办公协同' },
  { id: 'sk-dev', title: '开发工具' },
  { id: 'sk-invest', title: '投资理财' },
  { id: 'sk-efficiency', title: '效率工具' },
  { id: 'sk-content', title: '内容创作' },
  { id: 'sk-news', title: '信息资讯' },
  { id: 'sk-edu', title: '教育学习' },
  { id: 'sk-data', title: '数据分析' },
  { id: 'sk-deploy', title: '网站部署' },
  { id: 'sk-life', title: '生活服务' },
  { id: 'sk-biz', title: '商业运营' },
  { id: 'sk-knowledge', title: '知识与学习' },
]

const CATALOG_SKILL_TO_HUB = [
  ['AI / Agent 工具', 'sk-efficiency'],
  ['腾讯 / 微信 / 企微', 'sk-office'],
  ['文档 / 办公 / 协作', 'sk-office'],
  ['搜索 / 研究 / 知识', 'sk-knowledge'],
  ['设计 / UI / 地图', 'sk-content'],
  ['数据 / 金融 / 股票', 'sk-invest'],
  ['内容 / 营销 / 媒体', 'sk-content'],
  ['云 / 存储 / 部署', 'sk-deploy'],
  ['开发 / 工程', 'sk-dev'],
  ['其他', 'sk-efficiency'],
]

const CONN_CATS = [
  { id: 'cn-tencent', title: '腾讯生态', test: /tencent|wecom|weiyun|weixin|qidian|ima|lexiang|tapd|cloudbase|tmeet|yuanbao|qq-mail|cnb/ },
  { id: 'cn-im', title: '即时通讯', test: /feishu|dingtalk|lark|slack|wecom|imessage/ },
  { id: 'cn-docs', title: '文档协作', test: /docs|notion|kdocs|jinshuju|survey|gmail|mail|jira|linear/ },
  { id: 'cn-finance', title: '金融数据', test: /tdx|fin|stock|gildata|gangtise|qcc|tyc|pandadata|tongzhou|mx-ds/ },
  { id: 'cn-dev', title: '开发部署', test: /github|supabase|edgeone|miaoda|mastergo|cnb/ },
  { id: 'cn-other', title: '其他连接器', test: /./ },
]

/**
 * ============ OmniMux 社媒运营定位：三层过滤漏斗 ============
 *
 * L1 任务导向分类：条目按社媒运营任务链重新归类（源市场分类只是采集用）。
 * L2 黑名单规则：条目级关键词剔除（法务/财税/HR/售前/小说/开发/出行等非社媒内容）。
 * L3 人工清单：MANUAL_DROP（拍板剔除）/ MANUAL_KEEP（捞回误杀并可指定分类）。
 *
 * 管线：L2/L3 先裁 → L1 重映射 → 映射不上的进 pending.json（待审，默认不显示）。
 * 每次运行落盘三份文件：index.json（最终索引）、pending.json（待审）、dropped.json（剔除审计）。
 */

/** L0：源分类预筛（WorkBuddy 源市场分类中的社媒相关分类，先粗筛收口再进漏斗）。 */
const SOCIAL_CATEGORIES = new Set([
  // experts —— 营销增长 / 内容创作 / 运营人力 / 全球发展（出海）/ 销售商务
  'exp-marketing-growth',
  'exp-content-creative',
  'exp-operations-hr',
  'exp-global-development',
  'exp-sales-commerce',
  // skills —— 内容创作 / OPC·一人公司 / 商业运营 / 办公协同
  'sk-content',
  'sk-opc',
  'sk-biz',
  'sk-office',
  // connectors —— 腾讯生态 / 即时通讯 / 文档协作
  'cn-tencent',
  'cn-im',
  'cn-docs',
])

/** L1：专家任务分类（从上到下首个命中生效；writing 最宽兜底。blob 已小写化）。 */
const EXPERT_TASK_CATS = [
  { id: 'exp-topic', title: '选题与热点', test: /选题|热点|雷达/ },
  { id: 'exp-platform', title: '平台运营', test: /小红书|抖音|快手|b站|bilibili|tiktok|微博|知乎|公众号|视频号|instagram|twitter|reddit|linkedin|领英|微信|社媒|社交媒体|全域|分发|社区|频道|账号/ },
  { id: 'exp-commerce', title: '电商与直播', test: /电商|直播|带货|变现|跨境|ozon|选品/ },
  { id: 'exp-video', title: '视频与视觉', test: /视频|剪辑|宣传片|视觉|ppt|幻灯|摄影|成片|绘图|图片|海报|封面/ },
  { id: 'exp-growth', title: '增长营销', test: /seo|广告|投放|ppc|增长|品牌|营销|市场|geo|搜索词|媒体|文化/ },
  { id: 'exp-dev', title: '软件开发', test: /开发|工程师|架构|代码|前端|后端|全栈|api|git|docker|devops|软件|小程序|设计|产品|原型|测试|部署|运维|安全/ },
  { id: 'exp-writing', title: '内容创作', test: /写作|文案|内容|痕迹|文本|脚本|博客|文章|创作/ },
]

/** L1：技能任务分类（顺序：commerce → marketing → office → visual → writing → dev 兜底。blob 已小写化）。 */
const SKILL_TASK_CATS = [
  { id: 'sk-commerce', title: '电商变现', test: /电商|ecommerce|1688|ozon|铺货|商品|带货/ },
  { id: 'sk-marketing', title: '营销增长', test: /seo|投放|广告|营销|竞品|趋势|增长|研究/ },
  { id: 'sk-office', title: '协作办公', test: /邮件|mail|日历|文档|表格|会议|消息|飞书|钉钉|企微|腾讯文档|金山|kdocs|gmail|whatsapp|笔记|知识库|ocr|转写|markdown|pdf|word|总结|网页|沟通/ },
  { id: 'sk-visual', title: '视觉与视频', test: /图片|图像|视频|gif|ui\/ux|封面|ppt|幻灯|动画|配色|渲染|remotion|帧|图库|生图|libtv|workrally|视觉/ },
  { id: 'sk-writing', title: '内容创作', test: /写作|文案|内容|痕迹|片段|博客|文章|prompt|提示词|评分|评审/ },
  { id: 'sk-dev', title: '软件开发', test: /开发|代码|github|git|docker|deploy|部署|前端|后端|全栈|api|mcp|测试|tdd|android|flutter|ios|react|小程序|pre-commit|响应式|抽象/ },
]

/** L1：连接器任务分类（匹配 blob 含条目 id，因连接器 title 多为「连接器配置与技能」）。 */
const CONN_TASK_CATS = [
  { id: 'cn-social', title: '社媒与营销', test: /tencentads|wecom|qidian|infimind|picset/ },
  { id: 'cn-office', title: '协作办公', test: /docs|kdocs|jinshuju|survey|notion|weiyun|gmail|mail|tmeet/ },
  { id: 'cn-comm', title: '通讯沟通', test: /feishu|dingtalk/ },
]

/** L2：条目级黑名单关键词（blob 已小写化）。 */
const DROP_RULES = [
  /法务|财税|合规|招标|投标|售前|crm|大客户|外呼|招商|配送|跑腿|外卖/,
  /小说|网文|novel|长篇|图书|世界观|出版/,
  /新闻|资讯/,
  /\bhr\b|人力|招聘|职业经纪|绩效|简历|面试/,
  /汽车|布道|公共事务|战略顾问|商务拓展/,
  /销售教练|销售管道|销售作战|销售运营|客户支持|需求发现/,
  /企业培训|outbound|私域/,
  /12306|列车|航班|机票|flights/,
  /供应链|留学|legal/,
  /fullstack-dev|shader-dev|ios-application-dev|react-native-dev|gsap|skyline|tdesign|小程序|model-usage/,
  /服务器运维|日志服务|tencentos|智能客服领域虾|辟谣|公益|charity|小加同学|创业|macos|peekaboo/,
  /iMessage|短信/,
  /文档管家|知识收藏/,
]

/**
 * L3：人工拍板清单（显式条目 id，优先级最高）。
 * MANUAL_DROP：剔除（老板 2026-08-20 拍板"边缘全踢" + 办公工具类专家）。
 */
const MANUAL_DROP = new Set([
  // 边缘条目拍板剔除
  'exp-cultural-intelligence-strategist', // 文化智能策略师
  'exp-deal-strategist',                  // 交易策略师（销售赢单）
  'exp-market-analysis-cn',               // 市场分析专家
  'exp-podcast-strategist',               // 播客策略师
  'exp-private-domain-marketing-expert',  // 私域营销专家（国内私域，非海外社媒）
  'exp-study-abroad-consultant',          // 留学顾问
  'exp-supply-chain-strategist',          // 供应链策略师
  // 办公工具类专家（非社媒任务）
  'exp-kdocs-doc-butler',                 // 金山文档文档管家
  'exp-kdocs-knowledge-collector',        // 金山文档知识收藏
  'exp-kdocs-pdf-toolbox',                // 金山文档 PDF 处理
  // 审计剔除（2026-08-20 第二轮审计）：课程制作专家（非社媒任务链 + 重复条目）
  'exp-ai-shifu',                         // AI师傅课程制作专家（教育课程）
  'exp-ai-shifu-expert',                  // AI师傅课程制作专家（与上重复）
  // 审计剔除（技能）：前端 UI 设计工具 / C 端比价工具（非社媒运营任务）
  'sk-impeccable',                        // UI/UX 前端设计工具
  'sk-taobao',                            // maishou 商品价格比价（C 端购物）
  // 非社媒连接器
  'cn-cnb-api',                           // 代码托管
  'cn-cloudbase',                         // 云开发
  'cn-tencent-map',                       // 地图
  'cn-tencent-health-nges',               // 健康
  'cn-tapd',                              // 研发管理
  'cn-jira',                              // 研发管理
  'cn-linear-mcp',                        // 研发管理
  'cn-ima-mcp',                           // 知识库（边缘）
  'cn-lexiang',                           // 企业知识库（边缘）
])

/**
 * L3：人工捞回（修正规则误杀），值可指定任务分类 id（不指定则走 L1 映射）。
 * 老板 2026-08-20 拍板：主要做海外社媒 → 海外营销专家保留。
 */
const MANUAL_KEEP = new Map([
  ['exp-cross-border-ecommerce-expert', 'exp-commerce'], // 跨境电商（海外变现）
  ['exp-vibeknow-ppt-explain', 'exp-video'],             // PPT/PDF 一键成片
  ['exp-egypt-marketing', 'exp-growth'],                 // 埃及市场营销（海外）
  ['exp-malaysia-marketing', 'exp-growth'],              // 马来西亚市场营销（海外）
  ['exp-uae-marketing-advisor', 'exp-growth'],           // 阿联酋市场营销（海外）
  ['sk-yt-competitive-analysis', 'sk-marketing'],        // YouTube 竞品分析（社媒研究）
  ['sk-canvas-design', 'sk-visual'],                     // 设计哲学视觉艺术（被 office 的 pdf 误抢）
  // 审计修正（2026-08-20 第二轮审计）：规则误归类的专家，强制纠正到准确任务分类
  ['exp-brand-guardian', 'exp-growth'],                  // 品牌策略师（品牌战略 → 增长营销，被 video 误抢）
  ['exp-remotion-video-generator', 'exp-video'],         // 视频生成专家（Remotion 出片，被 platform 误抢）
  ['exp-social-ad-strategist', 'exp-growth'],            // 社交广告策略师（广告投放，被 platform 误抢）
  ['exp-marketing-campaign-team', 'exp-growth'],         // 营销战役与内容（营销活动，被 platform 误抢）
  // 软件开发分类恢复（2026-08-20 老板拍板：产品设计/技术工程常用条目恢复进 exp-dev/sk-dev）
  // —— 产品设计 13 ——
  ['exp-adort-design-expert', 'exp-dev'],                // Ardot 设计专家
  ['exp-ai-image-prompt-engineer', 'exp-dev'],           // AI 图像提示词工程师
  ['exp-design-engine', 'exp-dev'],                      // 设计原型专家团
  ['exp-design-md-architect', 'exp-dev'],                // 设计系统架构师
  ['exp-design-prototype-expert', 'exp-dev'],            // 设计工作室主理人
  ['exp-design-to-code', 'exp-dev'],                     // 设计转代码专家
  ['exp-mermaid-diagram-expert', 'exp-dev'],             // 图表设计与渲染专家
  ['exp-product-management', 'exp-dev'],                 // 产品管理专家
  ['exp-product-strategy-team', 'exp-dev'],              // 产品战略与管理
  ['exp-ui-designer', 'exp-dev'],                        // UI 设计师
  ['exp-user-experience-architect', 'exp-dev'],          // 用户体验架构师
  ['exp-user-experience-researcher', 'exp-dev'],         // 用户体验研究员
  ['exp-visual-storytelling-expert', 'exp-dev'],         // 视觉叙事专家
  // —— 技术工程 26 ——
  ['exp-api-dev', 'exp-dev'],                            // API 开发专家
  ['exp-backend-architect', 'exp-dev'],                  // 后端架构师
  ['exp-code', 'exp-dev'],                               // 代码开发流程专家
  ['exp-code-review-expert', 'exp-dev'],                 // 代码审查专家
  ['exp-dev-ops-automation-engineer', 'exp-dev'],        // DevOps 自动化工程师
  ['exp-dockerfile-gen', 'exp-dev'],                     // Dockerfile 生成专家
  ['exp-engineering-assurance-team', 'exp-dev'],         // 全栈工程保障
  ['exp-engineering-workflow-skills', 'exp-dev'],        // 工程实践专家
  ['exp-frontend', 'exp-dev'],                           // 前端界面开发专家
  ['exp-frontend-developer', 'exp-dev'],                 // 前端开发工程师
  ['exp-git-workflow-expert', 'exp-dev'],                // Git 工作流专家
  ['exp-gstack', 'exp-dev'],                             // 工程工作流团队
  ['exp-hsk-devops-expert', 'exp-dev'],                  // 网页发布与前端调试专家
  ['exp-mcp-build-expert', 'exp-dev'],                   // MCP 构建专家
  ['exp-mobile-application-developer', 'exp-dev'],       // 移动应用开发工程师
  ['exp-modern-webapp', 'exp-dev'],                      // 现代 Web 应用专家
  ['exp-mvp-dev-expert-team', 'exp-dev'],                // MVP 开发专家团
  ['exp-prompt-engineer', 'exp-dev'],                    // LLM 提示词架构师
  ['exp-python-fullstack-engineer', 'exp-dev'],          // Python 全栈工程师
  ['exp-rapid-prototyping-engineer', 'exp-dev'],         // 快速原型工程师
  ['exp-security-engineer', 'exp-dev'],                  // 安全工程师
  ['exp-senior-developer', 'exp-dev'],                   // 高级开发工程师
  ['exp-software-architect', 'exp-dev'],                 // 软件架构师
  ['exp-software-company', 'exp-dev'],                   // 软件开发团队
  ['exp-superpowers-zh', 'exp-dev'],                     // AI 编程方法论专家
  ['exp-tencentcloud-api', 'exp-dev'],                   // 腾讯云 API 专家
  ['exp-we-chat-mini-program-developer', 'exp-dev'],     // 微信小程序开发者
  // —— 技能 17（16 软件开发 + 1 宣传片制作归视觉）——
  ['sk-fullstack-dev', 'sk-dev'],                        // fullstack-dev
  ['sk-shader-dev', 'sk-dev'],                           // shader-dev
  ['sk-ios-application-dev', 'sk-dev'],                  // ios-application-dev
  ['sk-react-native-dev', 'sk-dev'],                     // react-native-dev
  ['sk-gsap-animation-assistant', 'sk-dev'],             // GSAP 动画开发助手
  ['sk-android-native-dev', 'sk-dev'],                   // Android 原生应用开发指南
  ['sk-flutter-dev', 'sk-dev'],                          // Flutter 跨平台开发指南
  ['sk-frontend-dev', 'sk-dev'],                         // 前端开发与 AI 媒体生成
  ['sk-github', 'sk-dev'],                               // GitHub Issues/PR/CI
  ['sk-github-trending-cn', 'sk-dev'],                   // GitHub 热门项目
  ['sk-mcp-builder', 'sk-dev'],                          // MCP 服务器开发指南
  ['sk-api-gateway', 'sk-dev'],                          // 连接 100+ API 服务
  ['sk-oracle', 'sk-dev'],                               // 第二个 AI 交叉审查代码
  ['sk-responsiveness-check', 'sk-dev'],                 // 多视口响应式检查
  ['sk-setup-pre-commit', 'sk-dev'],                     // Husky pre-commit
  ['sk-tdd', 'sk-dev'],                                  // 测试驱动开发
  ['sk-zoom-out', 'sk-dev'],                             // 代码全局地图
  ['sk-promo-creator-skills', 'sk-visual'],              // 产品宣传片全流程制作（视频制作 → 视觉）
  ['sk-tencent-yuanbao-standard-search', 'sk-office'],   // 元宝 AI 搜索（内容研究工具，summary 含 API 被误吸进 sk-dev）
])

/** 无论规则如何都强制保留的条目（离线演示技能，供安装/召唤单测使用）。 */
const ALWAYS_KEEP = new Set(['esc-demo-skill'])

function clip(text, n) {
  const s = String(text || '').replace(/\s+/g, ' ').trim()
  if (!s) return ''
  return s.length <= n ? s : `${s.slice(0, n - 1)}…`
}

function zh(value) {
  if (!value) return ''
  if (typeof value === 'string') return value
  return value.zh || value.en || ''
}

function parseCatalogMd(md) {
  /** @type {Record<string, { title: string, summary: string, category: string }>} */
  const skills = {}
  /** @type {Record<string, { title: string, summary: string }>} */
  const connectors = {}
  /** @type {Record<string, { title: string, summary: string }>} */
  const experts = {}
  let section = ''
  let skillCat = 'sk-efficiency'
  for (const raw of md.split(/\r?\n/)) {
    const line = raw.trim()
    if (line.startsWith('## 1.')) { section = 'skills'; continue }
    if (line.startsWith('## 2.')) { section = 'connectors'; continue }
    if (line.startsWith('## 3.')) { section = 'experts'; continue }
    if (line.startsWith('## 4.')) { section = ''; continue }
    if (section === 'skills' && line.startsWith('### ')) {
      const hit = CATALOG_SKILL_TO_HUB.find(([header]) => line.includes(header))
      skillCat = hit ? hit[1] : 'sk-efficiency'
      continue
    }
    const m = line.match(/^\|\s*\[`([^`]+)`\]\(\.\/(skills|connectors|experts)\/[^)]+\/\)\s*\|\s*(?:\[([^\]]+)\]\([^)]+\)|([^|]+))\s*\|\s*([^|]*)\|/)
    if (!m) continue
    const folder = m[1]
    const kind = m[2]
    const title = clip(m[3] || m[4] || folder, 40)
    const summary = clip(m[5] || title, 180)
    if (kind === 'skills') skills[folder] = { title, summary, category: skillCat }
    else if (kind === 'connectors') connectors[folder] = { title, summary }
    else experts[folder] = { title, summary }
  }
  return { skills, connectors, experts }
}

function readJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'))
}

function frontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---/)
  if (!m) return {}
  /** @type {Record<string, string>} */
  const out = {}
  const block = m[1]
  const name = block.match(/^name:\s*(.+)$/m)
  if (name) out.name = name[1].trim().replace(/^['"]|['"]$/g, '')
  const display = block.match(/^display_name:\s*(.+)$/m)
  if (display) out.display_name = display[1].trim().replace(/^['"]|['"]$/g, '')
  const descZh = block.match(/^description_zh:\s*(.+)$/m)
  if (descZh) out.description_zh = descZh[1].trim()
  const desc = block.match(/^description:\s*(>-\s*)?\n?([\s\S]*)$/m)
  if (desc) {
    const rest = block.split(/^description:\s*/m)[1] || ''
    if (rest.trim().startsWith('>-') || rest.trim().startsWith('|')) {
      const parts = []
      for (const line of rest.split('\n').slice(1)) {
        if (/^[ \t]/.test(line)) parts.push(line.trim())
        else if (line.trim() === '') continue
        else break
      }
      out.description = parts.join(' ')
    } else {
      out.description = rest.split('\n')[0].trim().replace(/^['"]|['"]$/g, '')
    }
  }
  return out
}

function parseMcp(dir) {
  const path = join(dir, 'mcp.json')
  if (!existsSync(path)) return null
  try {
    const data = readJson(path)
    const servers = data.mcpServers && typeof data.mcpServers === 'object' ? data.mcpServers : data
    const entries = Object.entries(servers).filter(([, v]) => v && typeof v === 'object')
    if (entries.length === 0) return null
    const [serverNameRaw, row] = entries[0]
    const serverName = String(serverNameRaw).replace(/[^A-Za-z0-9_-]/g, '-').slice(0, 32) || 'mcp'
    const type = String(row.type || '')
    if (row.url || /http/i.test(type)) {
      const url = String(row.url || '')
      if (!/^https?:\/\//.test(url)) return null
      return { serverName, source: { type: 'mcp', transport: 'streamable-http', url } }
    }
    if (row.command || type === 'stdio') {
      const command = String(row.command || '')
      if (!command) return null
      const args = Array.isArray(row.args) ? row.args.map(String) : []
      return { serverName, source: { type: 'mcp', transport: 'stdio', command, args } }
    }
  } catch {
    return null
  }
  return null
}

function firstConnectorSkill(dir, folder) {
  const skills = join(dir, 'skills')
  if (!existsSync(skills)) return ''
  for (const name of readdirSync(skills)) {
    if (existsSync(join(skills, name, 'SKILL.md'))) return `connectors/${folder}/skills/${name}`
  }
  return ''
}

function genericNickname(name) {
  return !name || /鹏城信息|AI专家$|Expert$/i.test(name)
}

function classifySkill(folder, title, summary, listed) {
  const blob = `${folder} ${title} ${summary}`.toLowerCase()
  const rules = [
    ['sk-opc', /opc|一人公司|solo.?founder/],
    ['sk-invest', /股票|基金|理财|证券|a-?stock|yahoo-finance|invest|wealth|fintech|行情/],
    ['sk-news', /资讯|新闻|rss|news|热点|日报/],
    ['sk-edu', /教育|学习|exam|课程|tutor|study|gaokao|高考|教材/],
    ['sk-life', /生活|出行|旅游|外卖|天气|打车|美团|行程|酒店|coupon/],
    ['sk-biz', /销售|运营|crm|商业|lead|增长黑客|获客/],
    ['sk-deploy', /deploy|部署|vercel|pages|nginx|cloudflare|网站|hosting/],
    ['sk-data', /数据|分析|sql|bi\b|metric|看板|可视化|统计/],
    ['sk-office', /企微|wecom|腾讯文档|飞书|钉钉|会议|问卷|邮箱|mail|docs|notion|协作|办公|kdocs|ima/],
    ['sk-dev', /github|git\b|docker|frontend|backend|debug|ci\/cd|代码|开发|工程|api-|sdk|test/],
    ['sk-content', /内容|写作|文案|封面|小红书|视频|营销|绘图|设计|prompt|创作/],
    ['sk-knowledge', /知识|wiki|笔记|obsidian|research|论文|arxiv|文献/],
    ['sk-efficiency', /效率|日历|todo|habit|reminder|planner|tracker|打卡|待办/],
  ]
  for (const [id, test] of rules) {
    if (test.test(blob)) return id
  }
  return listed || 'sk-efficiency'
}

function connectorCategory(folder) {
  for (const cat of CONN_CATS) {
    if (cat.test.test(folder)) return cat.id
  }
  return 'cn-other'
}

function gitSource(path) {
  return { type: 'git', repo: REPO, path, ref: 'main' }
}

if (!existsSync(join(WB, 'CATALOG.md'))) {
  throw new Error(`workbuddyskills not found at ${WB}`)
}

const catalogMd = parseCatalogMd(readFileSync(join(WB, 'CATALOG.md'), 'utf8'))
const center = readJson(join(WB, 'experts/expert_center.json'))
const pluginByFolder = new Map()
for (const row of center.experts) {
  if (row.plugin) pluginByFolder.set(row.plugin, row)
}

const skillFolders = new Set(readdirSync(join(WB, 'skills')).filter((name) => existsSync(join(WB, 'skills', name, 'SKILL.md'))))
const connFolders = new Set(readdirSync(join(WB, 'connectors')).filter((name) => existsSync(join(WB, 'connectors', name)) && !name.startsWith('.')))
const expFolders = new Set(readdirSync(join(WB, 'experts')).filter((name) => existsSync(join(WB, 'experts', name, '.codebuddy-plugin', 'plugin.json'))))

const skillDest = new Map()
for (const folder of skillFolders) skillDest.set(folder, folder)
const expDest = new Map()
for (const folder of expFolders) {
  expDest.set(folder, skillFolders.has(folder) ? `exp-${folder}` : folder)
}

/**
 * Point cards at the public WorkBuddy avatar. Do not vendor 100MB of PNGs.
 * @param {string} folder
 * @param {'expert' | 'team'} kind
 */
function avatarUrl(folder, kind) {
  const names = kind === 'team' ? ['team.png', 'expert.png'] : ['expert.png', 'team.png']
  for (const name of names) {
    if (!existsSync(join(WB, 'experts', folder, 'avatars', name))) continue
    return `https://raw.githubusercontent.com/${REPO}/main/experts/${folder}/avatars/${name}`
  }
  return ''
}

const items = []

for (const folder of [...expFolders].sort()) {
  const plugin = readJson(join(WB, 'experts', folder, '.codebuddy-plugin', 'plugin.json'))
  const centerRow = pluginByFolder.get(folder)
  const cat = EXPERT_CATS[plugin.categoryId] || EXPERT_CATS[centerRow?.categoryId] || { id: 'exp-industry-consultant', title: '行业顾问' }
  const profession = clip(zh(plugin.profession) || catalogMd.experts[folder]?.title || folder, 40)
  const nickname = clip(zh(plugin.displayName), 24)
  const title = profession || nickname || folder
  const subtitle = !genericNickname(nickname) && nickname !== title ? nickname : ''
  const summary = clip(
    zh(plugin.displayDescription) || plugin.description || catalogMd.experts[folder]?.summary || title,
    180,
  ) || title
  const kind = plugin.expertType === 'team' ? 'team' : 'expert'
  const tags = Array.isArray(plugin.tags) ? plugin.tags.map(zh).filter(Boolean).slice(0, 6) : []
  const dest = expDest.get(folder)
  const id = `exp-${folder}`
  if (!ID.test(id) || !ID.test(dest)) continue
  const avatar = avatarUrl(folder, kind)
  items.push({
    id,
    tab: 'experts',
    kind,
    title,
    subtitle,
    summary,
    category: cat.id,
    tags,
    avatar,
    skill: dest,
    source: gitSource(`experts/${folder}`),
  })
}

for (const folder of [...skillFolders].sort()) {
  const md = readFileSync(join(WB, 'skills', folder, 'SKILL.md'), 'utf8')
  const fm = frontmatter(md)
  const listed = catalogMd.skills[folder]
  const rawTitle = fm.display_name
    || (listed?.title && listed.title !== folder ? listed.title : '')
    || fm.description_zh
    || folder
  const title = clip(String(rawTitle).replace(/^["']|["']$/g, ''), 40)
  const summary = clip(listed?.summary || fm.description_zh || fm.description || title, 180) || title
  items.push({
    id: `sk-${folder}`,
    tab: 'skills',
    kind: 'skill',
    title,
    subtitle: '',
    summary,
    category: classifySkill(folder, title, summary, listed?.category),
    tags: [],
    skill: skillDest.get(folder),
    source: gitSource(`skills/${folder}`),
  })
}

for (const folder of [...connFolders].sort()) {
  const dir = join(WB, 'connectors', folder)
  const mcp = parseMcp(dir)
  const listed = catalogMd.connectors[folder]
  const title = clip(listed?.title && listed.title !== folder ? listed.title : folder, 40)
  const summary = clip(listed?.summary || title, 180) || title
  const id = `cn-${folder}`
  if (mcp) {
    items.push({
      id,
      tab: 'connectors',
      kind: 'connector',
      title,
      subtitle: '',
      summary,
      category: connectorCategory(folder),
      tags: [],
      serverName: mcp.serverName,
      source: mcp.source,
    })
    continue
  }
  const nested = firstConnectorSkill(dir, folder)
  items.push({
    id,
    tab: 'connectors',
    kind: 'skill',
    title,
    subtitle: '',
    summary,
    category: connectorCategory(folder),
    tags: ['需登录'],
    skill: `cn-${folder}`.replace(/[^a-z0-9-]/g, '').slice(0, 80),
    source: gitSource(nested || `connectors/${folder}`),
  })
}

items.push({
  id: 'esc-demo-skill',
  tab: 'skills',
  kind: 'skill',
  title: '画廊离线演示',
  subtitle: '',
  summary: '本包随附的离线演示技能，供安装与召唤单测使用，不是 WorkBuddy 市场条目。',
  category: 'sk-office',
  tags: ['演示'],
  skill: 'esc-demo-note',
  source: { type: 'bundled', path: 'catalog/skills/esc-demo-note/SKILL.md' },
})

// ============ 三层过滤漏斗（L2/L3 裁决 → L1 任务分类重映射 → pending 待审） ============

/**
 * L1：按 tab 选任务分类表，从上到下首个命中生效。
 * blob 含条目 id（连接器的 title 多为「连接器配置与技能」，只有 id 能区分）。
 * @param {{ id: string, tab: string, title: string, subtitle?: string, summary: string, tags: string[] }} item
 */
function mapTaskCategory(item) {
  const table = item.tab === 'experts' ? EXPERT_TASK_CATS : item.tab === 'skills' ? SKILL_TASK_CATS : CONN_TASK_CATS
  const blob = `${item.id} ${item.title} ${item.subtitle || ''} ${item.summary} ${item.tags.join(' ')}`.toLowerCase()
  for (const cat of table) {
    if (cat.test.test(blob)) return cat.id
  }
  return ''
}

/** @type {{ id: string, tab: string, title: string, rule: string }[]} */
const dropped = []
/** @type {{ id: string, tab: string, title: string }[]} */
const pending = []
/** @type {typeof items} */
const kept = []

for (const item of items) {
  // L0 源分类预筛：只放行社媒相关源分类（源市场标注可信度高，先粗筛收口）
  if (!SOCIAL_CATEGORIES.has(item.category) && !MANUAL_KEEP.has(item.id) && !ALWAYS_KEEP.has(item.id)) {
    dropped.push({ id: item.id, tab: item.tab, title: item.title, rule: `source-category: ${item.category}` })
    continue
  }
  // L3 人工拍板优先
  if (MANUAL_DROP.has(item.id)) {
    dropped.push({ id: item.id, tab: item.tab, title: item.title, rule: 'manual' })
    continue
  }
  if (MANUAL_KEEP.has(item.id) || ALWAYS_KEEP.has(item.id)) {
    const forced = MANUAL_KEEP.get(item.id)
    kept.push(forced ? { ...item, category: forced } : item)
    continue
  }
  // L2 黑名单规则（blob 小写化，含条目 id）
  const blob = `${item.id} ${item.title} ${item.subtitle || ''} ${item.summary} ${item.tags.join(' ')}`.toLowerCase()
  const hit = DROP_RULES.find((rule) => rule.test(blob))
  if (hit) {
    dropped.push({ id: item.id, tab: item.tab, title: item.title, rule: String(hit) })
    continue
  }
  // L1 任务分类重映射
  const mapped = mapTaskCategory(item)
  if (!mapped) {
    pending.push({ id: item.id, tab: item.tab, title: item.title })
    continue
  }
  kept.push({ ...item, category: mapped })
}

const categories = [
  ...EXPERT_TASK_CATS.map(({ id, title }) => ({ id, title, tab: 'experts' })),
  ...SKILL_TASK_CATS.map(({ id, title }) => ({ id, title, tab: 'skills' })),
  ...CONN_TASK_CATS.map(({ id, title }) => ({ id, title, tab: 'connectors' })),
  // 分类只保留过滤后仍有条目的，避免前端出现空分类筛选
].filter((row) => kept.some((item) => item.category === row.id))

const featuredWanted = [
  'exp-a-share-analysis',
  'exp-ai-content-creator-team',
  'exp-chatlaw',
  'exp-mvp-dev-team',
  'exp-software-company',
  'exp-opc-team',
  'exp-design-engine',
  'exp-trading-agent',
]
const have = new Set(kept.map((item) => item.id))
const featured = featuredWanted.filter((id) => have.has(id))
if (featured.length < 6) {
  for (const item of kept) {
    if (item.tab === 'experts' && !featured.includes(item.id)) featured.push(item.id)
    if (featured.length >= 8) break
  }
}

const doc = {
  schema: 1,
  generated_at: new Date().toISOString(),
  tabs: ['experts', 'skills', 'connectors'],
  categories,
  featured,
  items: kept,
}

if (process.argv.includes('--probe-hub')) {
  await tagHubDuplicates(doc)
}

writeFileSync(join(ROOT, 'catalog/index.json'), `${JSON.stringify(doc, null, 2)}\n`)
// 待审清单：映射不上的条目默认不显示，人工复核后把 id 移进 MANUAL_KEEP / MANUAL_DROP
writeFileSync(join(ROOT, 'catalog/pending.json'), `${JSON.stringify({ generated_at: doc.generated_at, pending }, null, 2)}\n`)
// 剔除审计：每条带命中规则，方便回溯与 diff
writeFileSync(join(ROOT, 'catalog/dropped.json'), `${JSON.stringify({ generated_at: doc.generated_at, dropped }, null, 2)}\n`)
const counts = { experts: 0, skills: 0, connectors: 0 }
for (const item of kept) counts[item.tab] += 1
console.log(JSON.stringify({ root: WB, ...counts, pending: pending.length, dropped: dropped.length, featured }, null, 2))

/**
 * 用 SkillHub 扫描技能条目，命中 → hub 标记（重复）。离线安全：失败跳过不写标记。
 * @param {{ items: Array<Record<string, any>> }} doc
 */
async function tagHubDuplicates(doc) {
  const API = process.env.SKILLHUB_API || 'https://api.skillhub.cn'
  const UA = 'Mozilla/5.0 (compatible; omnimux-gallery-sync)'
  const skills = doc.items.filter((item) => item.tab === 'skills')
  let tagged = 0
  const concurrency = 16
  let cursor = 0
  async function worker() {
    while (cursor < skills.length) {
      const item = skills[cursor++]
      const slug = String(item.skill || item.id || '').replace(/^sk-/, '')
      if (!/^[a-z0-9][a-z0-9_-]{0,127}$/i.test(slug)) continue
      const hit = await probe(slug, API, UA)
      if (hit) {
        item.hub = { slug, name: hit.name, version: hit.version, downloads: hit.downloads }
        tagged += 1
      }
    }
  }
  await Promise.all(Array.from({ length: concurrency }, worker))
  console.log(JSON.stringify({ hubTagged: tagged, of: skills.length }, null, 2))
}

/**
 * @param {string} slug
 * @param {string} api
 * @param {string} ua
 */
async function probe(slug, api, ua) {
  try {
    const ctrl = new AbortController()
    const timer = setTimeout(() => ctrl.abort(), 15000)
    const res = await fetch(`${api.replace(/\/$/, '')}/api/v1/skills/${encodeURIComponent(slug)}`, {
      headers: { 'user-agent': ua, accept: 'application/json' },
      signal: ctrl.signal,
    })
    clearTimeout(timer)
    if (res.status !== 200) return null
    const data = await res.json()
    const skill = data.skill || {}
    if (!skill.slug) return null
    return {
      name: String(skill.displayName || skill.name || slug),
      version: String(data.latestVersion?.version || skill.version || ''),
      downloads: Number(skill.downloads || 0),
    }
  } catch {
    return null
  }
}
