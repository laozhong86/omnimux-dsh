# dsh-publish 数据字段精简架构（UI 真源对齐）

架构：高见远 ／ 输入：主理人任务单（移除 Profile 列 + 清理假指标）+ PRD-v2.1 + 账本/hub 真源核对
版本观察：沿用 `docs/architecture.md`（harness `141eb6fef8` / 产品树 `e25b9cb`）；本轮**不改挂载点、不改工具面、不改账本 schema**。
核对日期：2026-08-25

> **v2.4 部分覆盖（保留本文作决策史，不删原文）**：`docs/architecture-ui-table-v2.4.md` 恢复 Table 的 8 维指标**列**为诚实空槽 `-`（颜色 `--dsw-alias-label-tertiary`）。§4.1 删除清单对 **Table 指标列**作废；对 Cards 8 格、Drawer 看板、Calendar 阅读数、CSV 指标列、Profile 列 **仍有效**。禁止用 `0` / `--` / `N/A` / 空白冒充已接入。

---

## 0. 选型结论（一句话）

**挂载点 = 既有 `shell.overlay`（id `dsh-publish-stage`）内的 Table / Cards / Detail Drawer 视图层，形态 = 函数插件（Host/Client 双半边不变），产物 = dsh.bundle。**

本轮是**展示合同收口**，不是新插件、不是新工具、不是新 Service。列表只渲染发布编排真源；互动指标与独立 Profile 列一律不进 UI。

---

## 1. 归属映射（逐项排除 → 唯一选型）

| 候选 | 裁决 | 理由 |
|---|---|---|
| 新模型可见工具 `ctx.tools`（如 `publish_get_metrics`） | **否** | 账本无指标字段；hub `omnimux_publish_get` 只回 `{id, status}`（`docs/hub-tool-contracts.md` §3）。新增工具会把假数据写进 system prompt。 |
| 接 hub `omnimux_analytics_posts` 填 Likes/Views | **否** | analytics 是另一条 official-only 产品面，不在 publish 账本契约内；用户明确要求清掉无账本接口的互动假指标。跨插件硬接会让发布中心在 analytics 不可用时继续撒谎。 |
| 新用户命令 `ctx.commands` | **否** | 无新命令语义。 |
| 后台任务 `ctx.jobs` | **否** | 已有结论：账本在 `records.json`，不用 jobs。 |
| 会话事件 waterfall / serial | **否** | 无新增模型可见输入；不扩 SessionEventMap。 |
| 对外 Service 三层 | **否** | 不对外提供指标/Profile 服务。 |
| LLM 适配器 | **否** | 与模型提供方无关。 |
| 新 Client Slot / 官方 `details` 列 | **否** | 详情走舞台内抽屉，禁止 `layout.openDetails`（官方 details 被对话详情占用）。 |
| 把 `display_name` 快照进账本当 Profile | **否** | 用户明确移除 Profile 列；账号真源是 hub `GET /omnimux/accounts`，快照会脏。 |
| **既有 overlay 视图层收口 + Client 侧账号 join** | **是** | Table/Cards/Drawer 只投影账本 + 已有账号只读面；卸载路径不变。 |

被否决后的唯一可执行句：**不新增 Host 能力；改 PRD-v2 合同与 `demo/index.html` 投影；生产 UI 后续按同一合同落地。**

---

## 2. 真源核对（禁止凭记忆补列）

### 2.1 账本有什么（`src/store.js`）

记录：`id, type, status, title, description, topics, media_ids, cover_media_id, settings, account_ids, uploads, error, subtasks[], created_at, updated_at, submitted_at`

子任务：`id, record_id, account_id, platform, status, post_id, raw_status, error, attempts, submitted_at, settled_at`

列表投影额外：`aggregate`、`subtask_summary`

**没有**：`profile` / `likes` / `cmts` / `shrs` / `saves` / `clicks` / `views` / `impr` / `reach`

### 2.2 hub 发布通道有什么

`omnimux_publish_presign | create | get`：get 实证结构只有 `data.id` + `data.status`。无互动指标。

### 2.3 账号有什么（允许 join，不允许变成 Table 的 Profile 列）

hub `GET /omnimux/accounts` ViewRow：`id, platform, display_name, username, name, group, status, expires_at, connected_at, avatar_url?`

join 键：草稿 `account_ids[]`；已提交 `subtasks[].account_id`。

降级：账号面 401/未装 → 只显示 `account_id` 截断 + `platform`，不编造昵称。

### 2.4 发布模式从哪来

v1 明确「定时发布」是 v2 候选，矩阵只预留 `supports_schedule`。账本没有独立 `publish_mode` 字段。

本轮展示规则（只读、不新开执行通道）：

- `settings.schedule_at`（或 `scheduled_at`）为非空 ISO 字符串 → **定时发布**，时间用该字段。
- 否则 → **即时发布**。
- Table 不单开 Mode 列；Date 旁用 ⏰ 标记定时。Drawer / Cards 明文展示模式。

---

## 3. 架构图（文字版层级）

```
dsh-publish（既有 Mixed bundle，本轮不改装配）
├── Host（不动）
│   ├── ctx.tools × 9 publish_*
│   ├── ctx.systemPrompt section publish:ops
│   ├── webServer prefix /dsh-publish
│   └── RecordStore records.json（schema 1，无指标列）
│
└── Client shell.overlay#dsh-publish-stage（本轮改投影合同）
    ├── FilterBar（已有：类型 / 状态 / 模式；模式按 settings 派生）
    ├── ViewToggle：Table | Cards | Calendar
    ├── Table View（精简列）
    │     [ ] | Content | Platforms | Date | Status
    ├── Cards View（封面/类型/角标/平台状态/时间/关联账号）
    ├── Calendar View（顺带去掉 👁 假播放数；本轮不重做排期引擎）
    └── Detail Drawer（舞台内抽屉，非官方 details 槽）
          作品信息 | 发布模式 | 平台子任务 + 关联账号
```

数据流：

```
records.json ──GET /dsh-publish/records────────┐
                                              ├─→ ViewModel（无 metrics、无 profile 列）
GET /omnimux/accounts（已有只读面）────────────┘
```

浏览器半边继续不持业务规则；join 只做展示标签。Host `listViews` **不**补指标字段、**不**嵌账号快照。

---

## 4. 精简后三视图合同

### 4.1 删除清单（硬禁）

| 删除项 | 范围 | 理由 |
|---|---|---|
| Table 列 `Profile` | PRD-v2 §2.2、demo thead/tbody、CSV | 用户明确要求；无独立 Profile 接口 |
| Table 列 Likes / Cmts / Shrs / Saves / Clicks / Views / Impr. / Reach | 同上 | 账本与 `omnimux_publish_get` 均无接口；`-` 占位仍是假指标 |
| Cards 8 格指标看板 | PRD-v2 §2.4、demo `card-metrics-grid` | 同上 |
| Drawer「8 项互动数据看板」 | demo `openRecordDrawer` | 同上 |
| 表头排序 Views / Likes | PRD-v2 §2.1、demo `handleSort` | 无数值真源 |
| CSV 导出 Profile / Likes / Views | demo `exportData` | 导出不得把假列固化成「快照」 |
| 日历 pill 上的 `👁 viewsVal` | demo `renderCalendar` | 假播放数 |

保留：复选框、Content、Platforms、Date、Status、批量条、三视图切换、Drawer 骨架。

### 4.2 Table View

列（从左到右，闭合）：

| 列 | 数据 | 交互 |
|---|---|---|
| `[ ]` | 行 id | 批量模式才强调；全选只作用于当前过滤结果 |
| Content | 封面：`cover_media_id \|\| media_ids[0]` 缩略图（视频类型用播放占位）；标题 `title \|\| description` 截断 | 点击行开抽屉 |
| Platforms | 已提交：`uniq(subtasks[].platform)` 图标簇；草稿：join 账号的 platform，无账号则 `—` | 不排序 |
| Date | 定时：`settings.schedule_at` + ⏰；否则已提交用 `submitted_at`，草稿用 `updated_at`；格式化本地时间 | 表头正逆序，默认降序 |
| Status | `aggregate` pill：`draft / publishing / reviewing* / published / partial_failed / failed` | 表头按枚举序排序 |

\* `reviewing` 不是独立 aggregate（`store.aggregateStatus` 无此值）。Table 若 `subtask_summary.reviewing > 0` 且仍有 in-flight，显示 **平台审核中**（黄），与待审核 tab 同源。`scheduled` **不是状态**，是发布模式，禁止再当 Status pill。

行高 48–56px；悬浮高亮；禁止再渲染 profile-dot。

### 4.3 Cards View

左 / 中 / 右 三区，**中间不再是指标格**：

```
┌────────┬─────────────────────────────┬──────────┐
│ 封面   │ 标题                         │ Status   │
│ 类型标 │ 时间 · 发布模式               │ pill     │
│ 1/N    │ 平台图标簇 + 各平台状态点     │          │
│        │ 关联账号：显示名×N（+N 溢出） │          │
└────────┴─────────────────────────────┴──────────┘
```

| 元素 | 真源 |
|---|---|
| 封面 | 同 Table Content |
| 类型标签 | `type === 'video'` → 🎬 视频；否则 🖼 图文 |
| 多图角标 | 仅图文且 `media_ids.length > 1`：`1/N`（N=`media_ids.length`） |
| 平台状态 | 已提交：每个 platform 取该平台子任务最坏状态（failed > partial/reviewing > publishing > published）；草稿：仅平台图标、无状态点 |
| 发布时间 | 同 Table Date |
| 关联账号 | join ViewRow：`display_name \|\| username \|\| name \|\| account_id`；草稿用 `account_ids`，已提交用 subtasks；>3 显示 `+N` |

点击卡片开同一抽屉。CSS：删除 `.card-metrics-*`，账号行用现有 token，不引入 profile-cell 列语义。

### 4.4 Detail Drawer（舞台内，非官方 details）

打开：Table 行 / Card / 日历 pill。关闭：右上 ✕、点 backdrop、Esc。

区块闭合：

1. **作品信息**：封面、标题、类型、话题、媒体数、`created_at` / `updated_at`、记录级 `error`（有则告警条）。
2. **发布模式**：即时 / 定时 + 时间（派生规则见 §2.4）。无 schedule 字段就写即时，不留空白假装「未知模式」。
3. **分发与账号**（主区）：每个 subtask 一行  
   `平台图标 · 账号显示名 · 子任务状态 pill · post_id(可选) · raw_status(可选) · 失败原因 · [重试]`  
   草稿无 subtasks：列出已选 `account_ids` join 结果 +「尚未提交」。
4. **禁止**：任何 Likes/Views/Clicks/Impr/Reach 看板；禁止单独「Profile」字段。

生产侧现有 `RecordDetail.jsx` 已是子任务真源、无假指标，本轮 demo 抽屉向它对齐；落地生产 UI 时把整页详情收成舞台内抽屉即可，不新开 Slot。

---

## 5. 扩展点清单（本轮实际改动面）

| 挂载点 | 作用 | 清理方式 |
|---|---|---|
| `ctx.slots` `shell.overlay` / id `dsh-publish-stage` | 一级舞台，本轮只改舞台内投影 | 既有 `ctx.effect` + unregister（见 `docs/architecture.md` §2.4） |
| 侧边栏协调器 rank 4.2 | 入口行，不改 | 协调器 unregister |
| Host `ctx.tools` × 9 | **不改签名、不增工具** | 框架 scoped 自动回收 |
| `webServer` `/dsh-publish` | **不增 metrics 路由**；列表 JSON 继续不含假字段 | `webServer.register` disposer |
| 浏览器 `GET /omnimux/accounts` | Cards/Drawer 账号标签 join（已有） | 无注册项；页面关闭即停 |
| 官方 `details` / `layout.openDetails` | **禁用** | — |
| `ctx.theme` / 新 Token | 不新增；平台色继续 `var(--dsw-alias-*, fallback)` | — |

副作用边界：无新 `ctx.effect`。禁止为假指标加轮询。

---

## 6. Config 字段表

本轮**无新增 Config**。沿用 `docs/architecture.md` §2.3：

| 字段（`publish.*`） | 类型 / 默认 | 本轮关系 |
|---|---|---|
| `dataDir` | string / `$DSH_HOME/omnimux/publish` | 不动 |
| `platforms` | object / 内置矩阵 | 不动；`supports_schedule` 只影响表单裁剪，不复活假指标 |
| `statusMap` | object / 内置 | 不动；只映射子任务状态，不含 metrics |
| `maxMediaMb` | number / 512 | 不动 |
| `submitTimeoutSeconds` | number / 120 | 不动 |
| `accountsOverlayPath` | string / `$DSH_HOME/omnimux/accounts.json` | 不动 |

禁止新增 `publish.metricsEnabled` 一类开关——没有真源的开关仍会诱导后人接假数据。

---

## 7. PRD-v2.md 修改指导

文件：`personal/dsh-publish/docs/PRD-v2.md`。只改合同，不扩范围。

1. **文首增加 v2.2 修正条**（建议插在 §0 之后）：
   - 用户裁决：移除 Table `Profile` 列（无独立接口）。
   - 用户裁决：删除全部互动假指标（Likes/Cmts/Shrs/Saves/Clicks/Views/Impr./Reach）。publish 账本与 `omnimux_publish_get` 均不提供这些字段；UI 不得用 `-` 占位冒充已接入。
   - 列表真源闭合为编排字段：Content / Platforms / Date / Status；账号信息只出现在 Cards 与 Drawer 的 join 展示，不回 Table 列。
2. **§0 第 3 点 Table View 描述**：删「账号 Profile、8 维度数据指标」「播放量、点赞等」排序。改为「按 Date / Status 排序」。
3. **§2.1 排序维度**：只保留 `Date`、`Status`；删除 `Views`、`Likes`。
4. **§2.2 列定义**：删 Profile 整行与 Metrics 整行。Status 枚举与 `aggregate` + reviewing 覆盖对齐；写明 `scheduled` 归发布模式不是 Status。
5. **§2.3 日历 Event Pill**：结构改为 `[时间] [标题] [平台] [定时⏰]`，删除 `[👁 阅读数/指标]`。
6. **§2.4 Cards**：删除「中间 8 格指标看板」。改为封面 + 类型标签 + 多图角标 + 平台状态 + 发布时间 + 关联账号（join，最多 3 +N）。
7. **新增 §2.5 Detail Drawer**：四个区块（作品信息 / 发布模式 / 分发与账号 / 明确非目标：指标看板、Profile 字段）。注明抽屉是 overlay 内组件，不是官方 details 槽。
8. **导出**：CSV 列与 Table 真源一致：`ID, Title, Type, Platforms, Date, Status, Mode`（Mode 派生）。禁止 Profile/Likes/Views。

---

## 8. demo/index.html 修改指导

文件：`personal/dsh-publish/demo/index.html`。demo 是合同验收件，必须先于生产 UI 改完。

### 8.1 数据

`MOCK_DATA` 每条记录：

- **删字段**：`profile, likes, likesVal, cmts, shrs, saves, clicks, views, viewsVal, impr, reach`
- **改平台模型**：`platform: string` → `platforms: string[]`（可多渠道）；保留 `type, imageCount, date, dateRaw, day, status, title, id`
- **补编排字段**（展示用，贴近账本）：
  - `account_ids: string[]`
  - `accounts: [{ id, platform, display_name, status }]`（demo 内嵌 join 结果，模拟 hub ViewRow，**不是** Table 列）
  - `subtasks?: [{ platform, account_id, display_name, status, post_id?, error? }]`
  - `mode: 'instant' | 'scheduled'`
  - `schedule_at?: string`（仅定时）
- 禁止再写死 `likes: "-"` 这种占位。

### 8.2 表格

- `<thead>` 只留：checkbox、Content、Platforms、Date、Status。
- `renderTable`：删 profile-cell 与 8 个指标 `<td>`；空态 `colspan` 从 14 改为 **5**。
- Platforms 渲染 `rec.platforms` 图标簇，不再单平台。
- `handleSort` 只接受 `date | status`。

### 8.3 卡片

- 删除整个 `.card-metrics-grid` 及相关 CSS。
- `card-rich-meta`：时间、模式（即时/定时）、平台图标簇。
- 新增账号行：`accounts.slice(0,3)` 显示名，溢出 `+N`。
- 已提交卡片用 subtask 状态点画在对应平台图标上（CSS `data-status`，token 色）。

### 8.4 抽屉

`openRecordDrawer` 重写为四段：作品信息、发布模式、分发子任务表、草稿则「已选账号 / 尚未提交」。删除「8 项互动数据看板」。

### 8.5 其它

- `exportData` headers 改为 `ID, Title, Type, Platforms, Date, Status, Mode`。
- 日历 pill 删除 `👁` 行。
- `.profile-cell` CSS 可删；不要用它在卡片里「换皮复活」Profile 列。

验收（打开 demo 目视 + 搜索）：

- 源码中 **零命中** 作为 UI 文案的 `Likes|Cmts|Shrs|Saves|Clicks|Views|Impr|Reach|Profile` 表头。
- 任意记录点开抽屉看不到指标数字或 `-` 指标格。
- 多平台记录在 Table 的 Platforms 列显示 ≥2 个图标。

---

## 9. 任务清单（按依赖）

| # | 任务 | 依赖 | 验证标准 |
|---|---|---|---|
| T1 | 按 §7 改 `docs/PRD-v2.md` 升 v2.2，闭合列/排序/卡片/抽屉/导出合同 | — | 文中不再出现 Profile 列与 8 维指标；Status 与 mode 分离 |
| T2 | 按 §8 改 `demo/index.html` MOCK + Table/Cards/Drawer/CSV/日历 | T1 | 浏览器打开 demo：三视图无假指标、无 Profile 列；抽屉三段+账号；CSV 无 Likes/Views/Profile |
| T3 | demo 多账号/部分失败样例至少 1 条（验证平台簇与子任务表） | T2 | `partial_failed` 行 Platforms≥2；抽屉能看出失败账号可区分 |
| T4 | （生产，非本 demo 门禁）`RecordsList` 按 Cards 合同补平台簇与账号 join；Table 若落地须同列 | T1 | 生产列表仍零指标字段；账号名来自 `/omnimux/accounts` |
| T5 | （生产）`RecordDetail` 收成舞台内抽屉，补发布模式派生展示 | T4 | 不调用 `layout.openDetails`；草稿/已提交两态与 §4.4 一致 |
| T6 | 回归：Host `listViews` / 工具 schema **零 diff**（本轮禁止改账本） | T2 | `git diff src/store.js src/index.js src/http-routes.js` 空，或仅注释 |

T1–T3 是本轮交付门禁；T4–T6 交给工程师按同一合同落地，避免 demo 与生产再分叉。

---

## 10. 风险与非目标

- **不在本轮做**定时发布执行、analytics 接入、账号 Profile 独立页、改 hub、改官方 packages。
- 日历仍是 demo 排期可视化；真排期引擎仍是 PRD v1 的 v2 候选。
- 若日后真要指标：必须先有 publish 账本或显式 vertical 合同去消费 `omnimux_analytics_*`，再开新工具 + 新会话事件；不得从 UI 先把列加回来。
