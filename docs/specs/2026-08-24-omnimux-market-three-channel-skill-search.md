---
title: "omnimux-market 三渠道聚合检索基础设施需求规格说明书"
id: "spec-omnimux-market-three-channel-skill-search"
type: "spec"
status: "accepted"
authority: "L2"
date: "2026-08-24"
authors: ["x", "agent-architect"]
subsystem: "omnimux-market"
---

# omnimux-market 三渠道聚合检索基础设施需求规格说明书

| 字段 | 内容 |
|---|---|
| 文档编号 | OMX-MKT-SEARCH-3CH-20260824 |
| 状态 | Draft → Ready for Architect |
| 归属插件 | `omnimux-market`（T1，非新插件） |
| 关联规格 | `2026-08-23-omnimux-market-agent-plaza.md`、`2026-08-24-omnimux-market-agent-tool-matrix.md` |
| 作者角色 | 需求评审员 · 许清楚 |
| 范围边界 | **仅技能（Skill）检索聚合**；专家仍走 `plaza_search`；插件/连接器本轮不动 |

---

## 0. 一句话结论

**建议：强化现有 `skillhub_search` 为三渠道统一聚合检索管道**（自建 Catalog `sk-omx-*` → WorkBuddy 本地市场 → SkillHub 远程公网），**不**新增独立 `skill_search` / `market_search` 工具；`plaza_search` 继续只服务专家/专家团，禁止与技能双搜。

```
建议：自研（product）· 强化 skillhub_search 聚合管道（非新插件）
```

---

## 1. 背景与现状差距

### 1.1 现状（As-Is）

| 表面能力 | 实际数据源 | Agent 可达？ |
|---|---|---|
| 技能 Tab UI（`SkillPlaza`） | 仅 `api.skillhub.cn`（`searchSkills`） | 人可见，非 Agent |
| `skillhub_search` | 同上，远程公网 | ✅ 唯一技能搜入口 |
| 本地 `catalog/index.json` 技能行 | `sk-omx-*`（OmniMux-skills，≈103）+ `sk-*`（workbuddyskills，≈69） | ❌ **Agent 搜不到**；仅 `installItem` 可装 |
| WorkBuddy 连接器本地市场 | `~/.workbuddy/connectors-marketplace` | 连接器只读展示；与技能无关 |
| `plaza_search` | 本地 catalog，`kind∈{expert,team}` | ✅ 专家专用；**明确声明 no hub/online merge** |

### 1.2 问题

Agent「找个做分镜 / PDF / 小红书的技能」时，只会打到 SkillHub 公网；OmniMux 自研精品（`sk-omx-*`）与已同步进 catalog 的 WorkBuddy 技能对 Agent **不可见**，造成：

1. 自建资产沉没；
2. 远程噪声优先于本地可信源；
3. 人用广场 Tab 与 Agent 工具行为不一致（未来 UI 也应同管道，本规格先锁 Agent + Host 领域函数）。

### 1.3 非目标（本轮不做）

- 不新建插件、不改 OmniMux 中枢 UI / 登录 / 模型路由。
- 不把专家、DSH 插件、连接器并进同一聚合工具。
- 不改变 `plaza_search` 的专家优先与 chip 选择协议。
- 不自动 `skillhub_install` / `catalogInstall`；安装仍需用户点选后触发。
- 不承诺 WorkBuddy 连接器市场可装（保持 display-only）。
- 不把「已安装目录 `skillsDir` / `~/.workbuddy/skills`」当成第四检索渠道（那是库存，不是货架）。

---

## 2. 三渠道数据源定义

统一渠道枚举（代码字段 `channel` / `sourceKind`）：

| `channel` | 中文名 | 优先级权重 | 说明 |
|---|---|---|---|
| `custom` | 自建 Catalog | **3（最高）** | OmniMux 自研/精选技能 |
| `workbuddy` | WorkBuddy 本地市场 | **2** | 本地同步/落地的 WB 技能货架 |
| `skillhub` | SkillHub 远程公网 | **1（最低）** | `api.skillhub.cn` 公开技能 |

### 2.1 Channel A · 自建 Catalog（`custom`）

| 字段 | 定义 |
|---|---|
| 真源 | 插件包内 `catalog/index.json`（schema=1） |
| 过滤条件 | `tab === 'skills'` **且** `kind === 'skill'` **且** `id` 匹配 `^sk-omx-` |
| 典型来源 | `source.type === 'git'` + `source.repo === 'infometa/OmniMux-skills'`；允许少数 `bundled` |
| 业务身份 | OmniMux 产品侧可控精品；安装走现有 `installItem` / git sparse 或 bundled 拷贝 |
| 可用性 | 本地文件，**离线可搜**；与 Host 同生命周期 |
| 稳定键 | 去重主键优先 `skill`（目录名 / slug）；其次规范化 `id` 去掉 `sk-omx-` 前缀 |

**默认假设：** `sk-omx-*` ≡ 自建渠道。若未来出现非 `sk-omx-` 的自建行，须显式加 `channel: 'custom'` 或 `hub: 'omnimux'` 字段后才入 A；本轮不靠猜。

### 2.2 Channel B · WorkBuddy 本地市场（`workbuddy`）

| 字段 | 定义 |
|---|---|
| 主真源（P0） | 同一 `catalog/index.json` 中：`tab/skills` + `kind/skill` + **`id` 不匹配 `^sk-omx-`**，且 `source.repo === 'infometa/workbuddyskills'`（或等价本地同步产物） |
| 扩展真源（P1，可选） | 环境变量 `WORKBUDDY_SKILLS_MARKETPLACE`；未设则探测 `~/.workbuddy/skills-marketplace`（若目录不存在则静默跳过，**不报错**）。目录契约对齐连接器市场风格：可读索引 + 技能包，具体 schema 由实现 ADR 钉死 |
| 业务身份 | WorkBuddy / CodeBuddy 技能市场在本机的落地镜像；信任高于公网，低于 OmniMux 自建 |
| 可用性 | P0 catalog 行离线可搜；P1 扩展目录缺失视为空集 |
| 安装 | 与现网 `installItem`（git / 本地 clone 优先）一致；**禁止**把远程 SkillHub zip 安装逻辑套到 WB 行 |
| 稳定键 | `skill` 字段；`id` 形如 `sk-<slug>` |

**混淆点澄清（默认假设）：**  
用户口头「WorkBuddy 本地市场」≠ `~/.workbuddy/skills`（那是已装库存）。本规格货架真源以 **catalog 同步行** 为 P0；磁盘 marketplace 目录为 P1 增强，缺省不阻塞。

### 2.3 Channel C · SkillHub 远程公网（`skillhub`）

| 字段 | 定义 |
|---|---|
| 真源 | `Config.apiBase`（默认 `https://api.skillhub.cn`）`/api/skills` |
| 映射 | 现有 `searchSkills` / `mapSkill` / `SkillCard` |
| 业务身份 | 公网社区技能；噪声与安全风险最高 |
| 可用性 | 需网络；超时 / 5xx → 该渠道空集 + `channelErrors.skillhub`，**不得拖垮** A/B |
| 安装 | 现有 `skillhub_install`（zip → `skillsDir`） |
| 稳定键 | `slug`（小写） |

**安全提醒（规格强制文案）：** 远程渠道涉及任意第三方技能落盘；上榜 ≠ 安全。Agent 不得暗示「官方背书」；UI/卡片可继续展示 `security` / `verified`，但模型对用户一句短话里不要展开安全报告全文。

---

## 3. 检索管道改造方案

### 3.1 方案对比

| 方案 | 做法 | 优点 | 缺点 | 结论 |
|---|---|---|---|---|
| **A. 强化 `skillhub_search`**（推荐） | 保留工具名；内部改为 `aggregateSkillSearch`；出参加 `channel` | Agent 既有纪律/prompt/卡片协议可复用；用户心智「找技能就 skillhub_search」不变；无第四个 search 工具 | 工具名含 skillhub 略名不副实 | **采纳** |
| B. 新增 `market_skill_search` | 新工具 + 废弃/降级旧工具 | 命名干净 | prompt 双入口、易双搜、迁移成本高 | 拒绝 |
| C. 扩展 `plaza_search` 含 skills tab | plaza 兼搜技能 | 少一个工具 | 破坏「专家优先 / chip 协议」；与现网「no merge」冲突 | 拒绝 |
| D. Agent 自己连打三工具 | 不改 Host | 零开发 | 模型不可靠、刷屏、排序不一致 | 拒绝 |

### 3.2 推荐架构（给架构师的衔接面）

```
skillhub_search.execute
        │
        ▼
 aggregateSkillSearch(query, opts)
        │
        ├─ searchCustomCatalog()      // sync, local
        ├─ searchWorkbuddyLocal()     // sync, local (+ optional dir)
        └─ searchSkillhubRemote()     // async, network; soft-fail
        │
        ▼
 mergeAndRank(results)  // channel priority + dedupe + limit/limit
        │
        ▼
 SearchResult'  + presentationMeta(kind: 'skillhub-search')
        │
        ├─ output.render → 防刷屏短文（含渠道标签）
        └─ Client toolview → 卡片（channel badge）
```

**领域函数单一真源：** HTTP `method=search`（`local-api.ts`）与 `skillhub_search` **必须调用同一** `aggregateSkillSearch`，禁止 UI/Agent 两套合并逻辑。

**建议落地文件（非强制命名，供架构师参考）：**

| 模块 | 职责 |
|---|---|
| `src/skill-aggregate.ts`（新） | 三渠道路由、合并、去重、分页 |
| `src/api.ts` | 保留纯远程 `searchSkills`；被 aggregate 调用 |
| `src/expert/catalog.js` | 提供 skills 池过滤；或由 aggregate 只读 `loadCatalog()` |
| `src/host-render.ts` | `renderSearch` 增加渠道标记 |
| `src/host.ts` | 工具 description / systemPrompt 增补「自动聚合」一句 |
| `src/types.ts` | `SkillCard.channel`、`SearchResult.channels` 等 |

### 3.3 兼容策略

| 项 | 规则 |
|---|---|
| 工具名 | 对外仍叫 `skillhub_search` / `skillhub_install` / `list` / `uninstall` |
| description | 改为明确：「Search skills across OmniMux custom catalog, WorkBuddy local market, and SkillHub remote; show clickable cards…」 |
| 旧 Client | 不认识 `channel` 字段时忽略；卡片仍可渲染 |
| 仅远程行为 | 入参 `channels: ['skillhub']` 可强制单渠（调试/设置用）；**默认三渠全开** |
| `plaza_search` | **零改行为**；description 继续写「Do not use for SkillHub skills」——此处 “SkillHub skills” 语义升级为「技能货架（含聚合）」 |

---

## 4. 排序、合并与去重

### 4.1 渠道优先级（硬规则）

```
custom (3)  >  workbuddy (2)  >  skillhub (1)
```

同 slug 跨渠道冲突时：**高优先级渠道整卡胜出**，低优先级丢弃（不拼字段）。  
胜出卡必须保留胜出方的 `channel`、安装方式元数据。

### 4.2 去重键

按顺序尝试，命中即视为同一技能：

1. 规范化 `slug`：`skill` 或 `slug` 小写；去掉无意义前后缀空白；
2. 若无 slug：由 `id` 推导——`sk-omx-foo` / `sk-foo` → `foo`；
3. **禁止**仅用中文 `title`/`name` 去重（误伤同名异能）。

多关键词（`queries[]`）组内先各渠合并，再跨渠去重（复用并扩展现有 `mergeBySlug` 思路）。

### 4.3 排序键（稳定比较器）

对去重后的列表：

1. **渠道权重降序**（custom → workbuddy → skillhub）；
2. 同渠内：
   - 有 `query`：本地渠按 token 命中分（对齐 `scorePlazaItem` 思路：title/skill/tags/summary）；远程渠保持上游 `sortBy` 顺序；
   - 无 `query`（浏览）：custom / workbuddy 按 catalog 原序或 title 升序；skillhub 按配置 `sortBy`（浏览默认 `downloads`）；
3. 已安装（`installed=true`）**不**因已装而沉底或置顶（避免藏新品）；仅在卡片标「已安装」；
4. 比较器必须稳定（同分保输入序），保证翻页可复现。

### 4.4 分页语义

| 字段 | 语义 |
|---|---|
| `limit` | 本批返回条数；默认 `Config.maxResults`（12），clamp 1–80 |
| `offset` | 对**合并去重后的总列表**切片，不是单渠道 offset |
| `total` | 合并去重后的估计总数；远程 total 与本地 count 相加前须先做 slug 集合估算，允许 `totalApprox: true` |
| `hasMore` | `offset + items.length < total`（或 approx 下「本批满且任渠道可能还有」） |
| 还有吗 | 同现网：同一 `query` + `offset = 已展示条数`；**仍只允许每用户消息调用一次** |

**默认假设：** 本地两渠通常 ≤ 数百条，可全量过滤再与远程首页合并；远程仍按页拉取。若本地未来膨胀，再做本地倒排；本轮不做。

### 4.5 渠道失败策略

| 场景 | 行为 |
|---|---|
| custom 读 catalog 失败 | 抛错（本地真源坏了应可见） |
| workbuddy P1 目录不存在 | 空集，不抛 |
| skillhub 超时/网络错 | 空集 + `channelErrors: { skillhub: 'timeout' }`；若 A/B 有结果仍 `ok` 返回 |
| 三渠皆空 | 保持现网 fallback：热门远程浏览并 `fallback: true`；若远程也挂且本地空 → 文案「没有找到相关技能」 |

---

## 5. 工具入参 / 出参 Schema

### 5.1 `skillhub_search` 入参（扩展，均可选兼容）

| 字段 | 类型 | 必填 | 说明 | 默认 |
|---|---|---|---|---|
| `query` | string | 否 | 主关键词；Agent 抽取主题，禁整句粘贴 | `''` 浏览 |
| `queries` | string[] | 否 | 同次调用同义词，最多 4；禁止拆成多次 search | — |
| `category` | string | 否 | SkillHub 一级类目枚举（现网 `CATEGORY_KEYS`）；**仅过滤 remote**；本地渠按自身 `category`/`tags` 尽力匹配，不强制对齐枚举 | — |
| `sortBy` | string | 否 | `score\|downloads\|stars\|installs\|updated_at`；**主要作用于 remote** | 有 query→cfg；浏览→downloads |
| `limit` | number | 否 | 1–80 | `maxResults` |
| `offset` | number | 否 | ≥0 | `0` |
| `channels` | string[] | 否 | 子集：`custom` / `workbuddy` / `skillhub`；非法值忽略 | `['custom','workbuddy','skillhub']` |

**不加** `hub` / `includeExperts` 之类参数，防止与 plaza 串台。

### 5.2 出参 `SearchResult`（扩展）

```ts
type SkillChannel = 'custom' | 'workbuddy' | 'skillhub'

interface SkillCard {
  // —— 现网字段保留 ——
  id: string
  slug: string
  name: string
  description: string
  category: string
  categoryLabel: string
  version: string
  downloads: number
  stars: number
  installs: number
  iconUrl?: string
  pageUrl: string
  owner?: string
  installed?: boolean
  rating?: number
  verified?: boolean
  publisherName?: string
  security?: SecurityReports
  integrity?: SkillIntegrity

  // —— 本规格新增 ——
  channel: SkillChannel          // 必有
  catalogId?: string             // custom/workbuddy：catalog 行 id，如 sk-omx-storyboard
  installBackend: 'catalog' | 'skillhub'  // 决定后续安装工具
}

interface SearchResult {
  query: string
  queries?: string[]
  category?: string
  sortBy: SortBy
  items: SkillCard[]
  total: number
  totalApprox?: boolean
  offset: number
  hasMore: boolean
  fallback?: boolean
  channelsServed: SkillChannel[]           // 实际参与合并的渠
  channelCounts: Partial<Record<SkillChannel, number>>  // 去重前各渠命中数（调试/UI）
  channelErrors?: Partial<Record<SkillChannel, string>>
}
```

### 5.3 安装路由（出参约束 → Agent 行为）

| `installBackend` | Agent 下一步 | 禁止 |
|---|---|---|
| `skillhub` | 用户选卡后 `skillhub_install({ slug })` | 打印 curl / CLI |
| `catalog` | 用户选卡后走 **catalog 安装入口**（见下） | 对 `sk-omx-*` 调 `skillhub_install` |

**Catalog 安装入口（本规格要求补齐 Agent 可达路径）：**

- **P0 推荐：** 扩展 `skillhub_install`：当 slug/catalogId 命中本地渠时，内部转 `installItem`，对用户仍说「已安装」。
- **或** 复用/暴露薄封装（若架构师判定更干净）：仅安装技能的 catalog API，但 **不要**让 Agent 改调 `plaza_install`（该工具专家路径已禁用、语义混乱）。

默认假设采纳 **扩展 `skillhub_install` 智能路由**，对外仍一个安装工具，降低双工具选错率。

### 5.4 `plaza_search`（明确不变）

入参/出参/chip 协议完全维持现网。系统提示继续：**同一条用户消息禁止同时 `plaza_search` 与 `skillhub_search`**；专家领域任务先 plaza。

---

## 6. 卡片展示与 Render 格式（严格防刷屏）

### 6.1 对人（Client toolview）

- 继续 `presentationMeta.kind = 'skillhub-search'`（或升级为 `skill-search` 但须双写兼容一版）。
- 每张卡增加渠道徽标（文案固定，勿自由发挥）：

| channel | 徽标文案（zh） | 徽标文案（en） |
|---|---|---|
| `custom` | 自建 | Custom |
| `workbuddy` | WorkBuddy | WorkBuddy |
| `skillhub` | SkillHub | SkillHub |

- 单批卡片数跟随 `limit`；UI 不因三渠而默认放大 pageSize。
- 渠道过滤芯片（可选 P1）：全部 / 自建 / WorkBuddy / SkillHub；与工具入参 `channels` 对齐。

### 6.2 对模型（`output.render` → `renderSearch`）

**硬约束（继承并加严现网）：**

1. 对用户 **最多一句短话**；禁止清单、长文、复述内部序号。
2. 模型可见文本给「内部序号 + 名 + slug + 渠道 + 已装」，禁止把整段 render 朗读给用户。
3. 有结果后 **本轮禁止再调** `skillhub_search`（还有吗除外，且须新用户消息）。
4. 空结果：只说换词再搜；不道歉长文。

**推荐 render 模板：**

```
卡片已展示 N 条（内部序号，禁止复述给用户）：
1. {name}{（已安装）} · {slug} · channel=custom
2. {name} · {slug} · channel=workbuddy
3. {name} · {slug} · channel=skillhub
对用户最多回一句短话。禁止清单和长文。不要再调用 skillhub_search。
用户若问还有吗，立刻再调用 skillhub_search 一次，query 仍为「{query}」，offset={shown}。
```

若存在 `channelErrors.skillhub`，可在内部加一行：`远程 SkillHub 暂不可用，已仅展示本地结果。`——仍禁止对用户展开堆栈。

### 6.3 presentCall / presentResult 标题

| 阶段 | 标题 |
|---|---|
| presentCall | `技能检索 · {query\|category\|浏览}`（可从「SkillHub ·」弱化为「技能检索 ·」，避免暗示仅远程） |
| presentResult | `技能 · {n} 条` / `技能搜索失败` |

---

## 7. 调度协议与防错准则（Agent 行为规则）

写入 `systemPrompt` 段 `tool:skillhub`（order 210）的增量条款——与现网条款合并，不另开段。

### 7.1 何时调用

| 用户意图 | 动作 |
|---|---|
| 找/推荐/浏览 **技能**、Agent Skill、SkillHub、「有没有 xx skill」 | **必须** `skillhub_search` 一次 |
| 领域专家任务且未挂专家 | **先** `plaza_search`；不要技能聚合 |
| 明确 DSH 插件 / 连接器 | `plugin_search` / `connector_search` |
| 闲聊、简单事实问答 | 不搜 |

### 7.2 防错清单（MUST / MUST NOT）

1. **MUST** 每条用户消息最多一次 `skillhub_search`（聚合已在工具内完成）。
2. **MUST NOT** 为「覆盖本地」再调 bash、`web_search`、读 `SKILL.md`、或第二次 search。
3. **MUST NOT** 同消息混用 `plaza_search` 与 `skillhub_search`。
4. **MUST** 抽取真实主题词作 `query`；无主题则省略 query 浏览。
5. **MUST NOT** 在出卡后罗列技能或写安装教程；等用户选卡。
6. **MUST** 按卡片的 `installBackend` / `channel` 选择安装路径；禁止对 catalog 卡编造 SkillHub slug。
7. **MUST NOT** 打印 `dsh plugin` / `curl` / `skillhub install` CLI。
8. **MUST** 远程结果涉及凭证或不明来源时，不宣称安全；需要时一句「请自行查看详情再装」。
9. **MUST NOT** 把 WorkBuddy / 自建技能误称为「专家」或调用 `plaza_summon`。
10. **MUST** 「还有吗」复用同一 query + 正确 offset；不得改词假装翻页。

### 7.3 与其它 search 的互斥矩阵（保持 tool-matrix）

同一条用户消息，下列 **最多选一个**：

`plaza_search` | `skillhub_search` | `plugin_search` | `connector_search`

领域路由：专家 → 技能（聚合）→ DSH 插件 → 连接器。

---

## 8. 配置项

| 配置键 | 类型 | 默认 | 说明 |
|---|---|---|---|
| （继承）`apiBase` / `webBase` / `skillsDir` / `timeoutMs` / `maxResults` / `sortBy` / `plazaCacheTtlSec` | — | 现网 | 远程与缓存不变 |
| `aggregateChannels` | `SkillChannel[]` | `['custom','workbuddy','skillhub']` | 主机默认参与渠 |
| `workbuddySkillsMarketplace` | string | `''`（→ env → `~/.workbuddy/skills-marketplace`） | P1 扩展目录 |
| `aggregateRemoteSoftFail` | boolean | `true` | 远程失败不阻断本地 |

设置页文案：在「插件市场」配置中增加只读说明「技能搜索默认聚合：自建 > WorkBuddy > SkillHub」，高级可关渠（P1）。

---

## 9. 验收标准（给 QA）

| # | Given | Then |
|---|---|---|
| 1 | catalog 存在 `sk-omx-storyboard`，用户说「找个分镜技能」 | `skillhub_search` 返回项含该卡，`channel=custom`，排序不低于同 slug 的远程卡 |
| 2 | 仅 workbuddyskills 同步行命中「腾讯文档」类关键词 | 返回 `channel=workbuddy`，可经安装路由落地 |
| 3 | 断网 | 仍能返回 custom/workbuddy；`channelErrors.skillhub` 有值；不抛未捕获异常 |
| 4 | 同 slug 三渠都有 | 只出现一张，`channel=custom` |
| 5 | 用户说「写 PRD」且未挂专家 | 只 `plaza_search`，不打技能聚合 |
| 6 | 出卡后模型输出 | ≤1 句短话；无 markdown 清单 |
| 7 | 「还有吗」 | 同 query、offset 递增、仍单次调用 |
| 8 | HTTP `method=search` 与工具 | 同一合并结果形状（允许少数字段差异但 `channel` 一致） |
| 9 | 对 `sk-omx-*` 安装 | 不走 SkillHub zip；落在 skills 目录且 `SKILL.md` 存在 |
| 10 | 回归 | 纯远程关键词（确定无本地命中）行为与改前一致可装 |

---

## 10. 风险与开放问题

| ID | 项 | 默认假设 | 需架构师确认？ |
|---|---|---|---|
| R1 | 工具名 `skillhub_search` 名不副实 | 保留名称，改 description | 否（产品已拍板强化现工具） |
| R2 | WorkBuddy 磁盘 marketplace schema 未稳 | P0 只用 catalog 同步行 | 是（P1 目录契约） |
| R3 | `skillhub_install` 兼装 catalog 是否过载 | P0 智能路由 | 是 |
| R4 | 本地类目与 SkillHub `CATEGORY_KEYS` 不一致 | 远程严过滤，本地宽松 tags 匹配 | 否 |
| R5 | total 跨渠难以精确 | 允许 `totalApprox` | 否 |
| R6 | 安全审查 | 远程装前提醒用户自审；不在 Agent 长文展开 | 否 |

---

## 11. 交付切分建议（供排期，非实现承诺）

| 切片 | 内容 | 依赖 |
|---|---|---|
| S0 | 本规格评审通过；类型与 channel 枚举冻结 | — |
| S1 | `aggregateSkillSearch` + custom/workbuddy catalog 过滤 + 去重排序单测 | S0 |
| S2 | 接入远程 soft-fail；`skillhub_search` + HTTP search 切到聚合 | S1 |
| S3 | render / Client 徽标 / prompt 文案 | S2 |
| S4 | `skillhub_install` 智能路由或等价安装入口 + 验收用例 1/9 | S2 |
| S5 | （可选）WorkBuddy 磁盘 marketplace P1 | R2 关闭后 |

---

## 12. 规格结语

| 字段 | 内容 | 默认/待确认 |
|---|---|---|
| 目标行为 | Agent 搜技能时一次调用即聚合三渠，自建优先 | 默认 |
| 触发场景 | 用户找/推荐/浏览技能；UI 技能 Tab 搜索 | 默认 |
| 预期交互 | 出卡 → 一句短话 → 用户选卡 → 按渠安装 | 默认 |
| 配置项 | 默认可关渠；WB 目录可配 | P1 待确认 |
| 归属 | `omnimux-market` 产品内增强，非新插件、非中枢改判 | 默认 |

**最终建议：自研（product）——在 `omnimux-market` 内强化 `skillhub_search` 为三渠道聚合检索管道；不新建插件；不上报中枢改判。**
