---
title: "PRD：Agent 页面感知与工作台双向协同系统"
id: "spec-agent-workbench-bidirectional-sync"
type: "spec"
status: "proposed"
authority: "L2"
date: "2026-09-04"
updated: "2026-09-04"
authors: ["xu-qingchu", "agent-pm"]
subsystem: "omnimux"
tags: ["workbench", "agent-tools", "ui-context-envelope", "sse", "anti-annoyance", "prd"]
supersedes: []
superseded_by: null
related:
  - "docs/contracts/workbench-split.md"
  - "docs/contracts/stage-guards.md"
  - "docs/contracts/plugin-agent-tools-inventory.md"
  - "docs/contracts/hub.md"
  - "docs/contracts/first-level-page-layout.md"
  - "docs/contracts/project-assets-contract.md"
  - "docs/specs/2026-08-31-workbench-libraries-and-toggle-prd.md"
  - "docs/decisions/2026-08-31-workbench-libraries-and-toggle.md"
---

# PRD：Agent 页面感知与工作台双向协同系统

> **文档地位**：L2 产品规格。供架构师改契约、工程师落地。合入后须同步 L1：`workbench-split.md`、`plugin-agent-tools-inventory.md`；必要时补 ADR。  
> **基线**：#318 已把一级库页迁入右侧 `dsh-better-sidebar`；人机同面，但 **Agent 仍是盲人**——看不到用户正在看哪一页，也没有正式工具去切页；资产库 Client 仍以 **5 秒轮询**（`POLL_MS = 5000`）感知 Host 变更。  
> **本轮拍板**：把「视口上下文」做成每条用户消息的默认信封；把工作台切页做成 **可审计、可防打扰** 的 Agent 工具；把「Agent 写盘 → 页面秒级可见」做成 **推送优先、轮询兜底** 的事件总线。

---

## 0. TL;DR

人在右侧工作台翻角色、切分类、收起面板；Agent 在中间会话里回答。今天这两面 **只共享同一块屏幕，不共享同一份状态**。

本轮做三件事，缺一不可：

| # | 能力 | 一句话 | 金标验收 |
|---|---|---|---|
| 1 | **自动发送上下文** | 用户点发送时，前端默认附上「当前插件页 / 激活 Tab / 子视图分类」 | Agent 首轮即可引用「你正在资产库 · 角色」而不必先问 |
| 2 | **页面控制** | Agent 拥有 `workbench_get_active_view` / `workbench_open_tab` | 生图后可把资产库切到对应分类并高亮新卡；用户可一键撤销 |
| 3 | **内容即时更新** | Host 写盘后 ≤ 400ms 推到已打开的 Tab，而不是干等 5s 轮询 | 「资产库生图即刻可见」：卡片出现在网格里，不必刷新、不必等下一轮 poll |

**不做**：第二套 composer、卸载官方会话、Agent 随意拉满/收起对话栏、把 DOM 快照整页塞进上下文。

---

## 1. 项目信息

| 项 | 值 |
|---|---|
| Language | 中文 |
| Project Name | `agent_workbench_bidirectional_sync` |
| Programming Language | 现网栈：Hub `omnimux` Client + 各垂直插件 Host HTTP / `ctx.tools`；不新开包 |
| 涉及包 | **必改**：`omnimux`（信封采集 / 工作台工具 / 事件总线中枢）、`omnimux-assets`（金标：生图即刻可见）。**跟进**：`omnimux-products` / `accounts` / `inspiration` / `publish` / `analytics` / `workflow` / `market` / `clip`（实现同一信封与事件订阅接口） |
| 原始需求复述 | ① 用户发消息时默认把当前插件页、激活选项卡、子视图分类发给 Agent，避免大海捞针。② Agent 拥有主动控制右侧工作台页面切换、展示的工具（如 `workbench_open_tab`）。③ Agent 生成内容（如在资产库生图）后，页面秒级即时更新呈现，而不是干等几秒轮询。 |

### 1.1 问题（Why）

工作台「一座」已经成立（左官方导航 \| 中官方会话不卸载 \| 右插件 GUI）。但协同仍是单向的：

1. **Agent 看不见视口**。用户说「把这个角色再出一张侧脸」，模型不知道「这个」是资产库 · 角色 Chip · 当前选中的 `ast_xxx`，只能靠对话历史猜，或先 `assets_list` 扫全库。
2. **Agent 摸不到工作台**。`window.__omnimuxWorkbench.open({ tabId })` 只活在浏览器；Host 侧没有对等工具。Agent 生完图只能在对话里丢一张缩略图，用户还要自己点左栏、切分类、翻网格。
3. **写盘与呈现脱节**。资产库 `useAssetsFeed` 以 `setInterval(refreshState, 5000)` 拉 `GET /omnimux/assets/state`。即使 Host 在 `assets_create` / 生图落盘的瞬间抬了 `lrev`，用户最长要等 **一整轮 5 秒** 才看到新卡。这在「人机同面创作」里体感就是「Agent 说做好了，右边还是旧的」。

这三件事叠在一起，工作台从「人机同面」退化成「人看一面、Agent 看另一面」。

### 1.2 产品目标（3 个正交）

| # | 目标 | 可验收口径 |
|---|---|---|
| **G1 视口可寻址** | 每条用户消息默认携带一份结构化 UI Context Envelope；Agent 不必先问「你在哪一页」 | 金标会话：用户在资产库 · 角色 Chip 下说「再出一张」，首轮工具调用的 type 过滤 = `character`，且能引用当前选中 id（若有） |
| **G2 工作台可驾驶、可撤销** | Agent 用正式工具读/切右侧 Tab 与子视图；切页必须可感知、可撤销、遵守防打扰配额 | `workbench_open_tab` 成功后 400ms 内右栏聚焦目标 Tab；用户点「撤销切页」后 400ms 内回到切页前状态 |
| **G3 写盘即可见** | 垂直插件 Host 变更通过事件推到已打开的 Client，P95 ≤ 400ms；5s 轮询只作断连兜底 | 资产库生图：Host `lrev` 自增到网格出现新卡，P95 ≤ 400ms（面板打开且 SSE 健康时）；禁止把 5s poll 当主路径 |

### 1.3 非目标（本轮明确不做）

- 不发明三栏壳，不 shadow `root` / `sidebar` / `conversation` / `details`。
- 不卸载官方会话，不自绘第二套 composer。
- **不**把整页 DOM、截图、滚动位置、未保存表单草稿作为默认信封内容（P2 可选「可视摘要」，默认关）。
- **不**让 Agent 默认调用 `setFocus('gui'|'chat')` 或折叠中间对话——焦点几何仍是用户手势（#318 / #372）。`workbench_open_tab` 只开/切 Tab，不改 `conversationCollapsed`。
- **不**让 Agent 关用户正在编辑的 Modal / 清多选 / 改排序——那些是 UI-Only，继续禁暴露为 Tool（见 `plugin-agent-tools-inventory.md` §1.4）。
- 不把 Apps 货架、Settings、登录门迁入本系统。
- 不改资产物化合同（导入仍 copy 进 `$DSH_HOME/omnimux/assets/data/files/<id>/`；用户原文件永不删）。
- 不把 5s 轮询删掉——它是 SSE 断连时的唯一降级；本轮只是把它从主路径降为兜底。
- 不在垂直包 `import` hub client；跨包只走 `window.__omnimuxWorkbench`、Host HTTP、本 PRD 定义的信封/事件协议。

### 1.4 成功指标（上线后 14 天）

| 类型 | 指标 | 基线（现网） | 目标 |
|---|---|---|---|
| 北极星 | 「用户消息 → Agent 首轮工具命中当前视口对象」比率 | 不可观测（无信封） | ≥ 70%（有信封且视口有选中/过滤时） |
| 驱动 | 资产库生图：写盘 → 卡片可见 P95 | ~0–5000ms（poll） | ≤ 400ms（SSE 健康） |
| 驱动 | `workbench_open_tab` 被调用且 10s 内用户未点撤销 | n/a | ≥ 80% |
| 健康 | 用户主动撤销切页 / 会话内切页超配额被拒 | n/a | 撤销率 < 25%；超配额拒绝要在工具结果里写明，不得静默 |
| 健康 | SSE 断连后 5s 内 poll 接上、页面不空白 | 现网 poll 已能撑 | 断连期间无「假空库」；重连后 1s 内追上 `lrev` |
| 成本 | 每条用户消息因信封增加的 input token | 0 | 信封序列化 ≤ 800 tokens（P95）；超限截断 `selection` 数组而不是丢 `surface` |

---

## 2. 用户故事与核心交互场景

用户故事标准格式：**作为 [角色]，我希望 [行为]，以便 [价值]**。

1. **作为**创作者，**我希望**在资产库盯着某个角色说话时 Agent 自动知道我在看谁，**以便**不用把「林晓 / 角色 / 资产库」再打一遍。
2. **作为**创作者，**我希望** Agent 生完图后右侧网格立刻出现新卡，**以便**对图而不是对聊天缩略图做判断。
3. **作为**创作者，**我希望** Agent 需要我看另一页时能自己把工作台切过去，并在对话里留一条可撤销的痕迹，**以便**不用自己点左栏，也不怕被乱切。
4. **作为**创作者，**我希望**把右栏收起后 Agent 仍能读到「上次我在哪」，但 **不要** 在我专心看对话时把面板弹开，**以便**防打扰优先于「Agent 想表演」。
5. **作为**创作者，**我希望**网络闪断时页面顶多慢几秒、不要变空白或重复插入同一张卡，**以便**断连可感知、重连可收敛。

### 2.1 金标场景 A：视口上下文感知（用户发送 → Agent 不捞针）

**前置**：右栏打开 `omnimux-assets:library`；Layer 3B Chip = `角色`；网格中选中「林晓」(`ast_7f3a`)；中间会话 composer 聚焦。

```text
用户点击发送「再出一张侧脸，光线偏窗边」
        │
        ▼
Composer 提交钩子采集 UI Context Envelope（≤ 16ms，失败则 envelope.ok=false）
        │
        ▼
用户文本 + envelope 作为同一条 user message 进入会话
        │
        ▼
Agent 系统侧看得到：
  surface.plugin = omnimux-assets
  surface.tabId  = omnimux-assets:library
  view.kind      = library
  view.filterType= character
  selection[0]   = { id: ast_7f3a, name: 林晓, type: character }
        │
        ▼
Agent 不得先 assets_list 全库。应：
  1. 以 selection[0] 为主体（或 filterType=character 缩小范围）
  2. 调生图 / assets_create（按现网工具）
  3. 需要给人看结果时，才考虑 workbench_open_tab（见场景 B）
```

**验收**：

| # | 断言 |
|---|---|
| A1 | 该条 user message 的 metadata 含 `uiContext` 对象，`schemaVersion` 为 `1` |
| A2 | `surface.tabId === 'omnimux-assets:library'` 且 `view.filterType === 'character'` |
| A3 | 有选中时 `selection[0].id` 与 DOM 当前选中卡一致 |
| A4 | Agent 首轮 **不得** 在未读信封的情况下对 `assets_list` 不带 `type` 扫全库（评测集约束；实现上靠 system prompt + 工具描述） |
| A5 | 采集失败（面板已卸、无 better-sidebar）时消息 **照常发出**，`uiContext.ok === false`，`reason` 为枚举，不阻塞发送 |

### 2.2 金标场景 B：资产库生图即刻可见（写盘 → 推送 → 可选切页）

**前置**：用户在会话里说「给林晓出一张侧脸，放进资产库」；右栏可能已经开着资产库，也可能收在 `chat`（`panelOpen: false`）。

```text
Agent
  ├─ 1. workbench_get_active_view     → 得知当前 tab / panelOpen / filterType
  ├─ 2. 生图（hub imageGenerate / 现网媒体缝；mode=live 才宣称真生图）
  ├─ 3. assets_create / 等价入库      → Host 物化到 data/files/<id>/ ，lrev++
  │         │
  │         ├─ Host 发 domain event: omnimux:assets:changed
  │         │     { lrev, op: "create", ids: ["ast_new"], type: "character" }
  │         │
  │         ▼
  │    已打开的 AssetsStage 经 SSE / 同页 EventTarget 收到事件
  │         → 增量合并到 feed（或 force refresh 一次）
  │         → 新卡插入网格（按当前 sortKey）
  │         → 若 type 与当前 Chip 不符：Chip 旁出现「1 张新角色，查看」hint，不擅自改用户过滤
  │
  └─ 4. 仅当需要用户看见结果时：
         workbench_open_tab({
           tabId: "omnimux-assets:library",
           view: { filterType: "character" },
           highlightIds: ["ast_new"],
           reason: "新角色图已入库"
         })
         → 若 panelOpen=false：默认 **不弹开面板**（防打扰 P0），
            工具返回 { ok:true, applied:false, code:"panel-collapsed" }
            并在对话里用一句话 + 可选「打开资产库」按钮（P1）
         → 若面板已开且 tab 不是资产库：切 Tab，对话出现「已切换到资产库 · 角色」+ 撤销
         → 若已在资产库：不重复 open，只 highlight + 必要时提示 Chip
```

**时序（SSE 健康）**

```text
t=0      Host 写盘提交成功，lrev = N+1
t≤50ms   事件入总线
t≤400ms  Client 网格出现新卡（P95）
t≤800ms  若调用了 open_tab 且面板已开：Tab 聚焦 + 新卡滚动进视口 + 1.5s 高亮
```

**验收**：

| # | 断言 |
|---|---|
| B1 | SSE 健康且面板打开：从 Host 返回 200 到 `[data-asset-id=ast_new]` 入 DOM，P95 ≤ 400ms |
| B2 | 禁止把 `POLL_MS=5000` 当本场景主路径；单测可把 poll 关掉，事件仍能刷新 |
| B3 | 同一 `id` 的 create 事件重放 **不得** 插入第二张卡（幂等） |
| B4 | 当前 Chip ≠ 新资产 type 时，**不得** 静默改 `filterType`；只允许 hint 或 `open_tab` 显式请求 |
| B5 | `mode: "stub"` 的生图必须在对话与卡片上可区分，禁止对用户宣称「已生成」 |

### 2.3 场景 C：面板收起时的防打扰（与 B 配套）

用户把右栏收到 `chat`。Agent 仍应完成入库（G3 的写盘不依赖面板）。**呈现**遵守：

| 条件 | 默认行为 | 用户如何看到 |
|---|---|---|
| `panelOpen === false` | `workbench_open_tab` **拒绝弹开**（`applied: false`, `code: panel-collapsed`） | 对话内一句话：「已入库 · 林晓侧脸。右栏已收起。」P1：按钮「打开资产库」= 用户手势，允许 `open` |
| 中间对话已折叠（`conversationCollapsed`） | 切 Tab **不得** 擅自 `setFocus('split')` 把对话拉回来 | 用户点聊天开关自己展开 |
| 用户正在资产创建 Modal 里填表 | 事件仍更新网格（display:none 保活的根仍在），但 **不得** 关 Modal、不得抢焦点 | Modal 内可有非阻断 toast「库已更新」 |

### 2.4 场景 D：跨插件「去看看」

用户在画布（`omnimux-workflow:canvas`）上让 Agent「把刚生成的角色同步到资产库并给我看」。Agent：入库 → `workbench_open_tab(omnimux-assets:library)`。画布 Tab **不得卸载**（关页保活）；只是焦点叶 Tab 换成资产库。用户点撤销 = 焦点回到画布，资产库 Tab 仍可 `isOpen`。

---

## 3. 功能规格清单（P0 / P1 / P2）

优先级：**P0 Must** · **P1 Should** · **P2 Nice**。语言：must / should / could。

### 3.1 P0 Must have

| ID | 需求 | 验收 |
|---|---|---|
| **P0-1** | 用户发送消息时，前端 **必须** 采集并附带 UI Context Envelope（§4）。采集失败不得阻断发送。 | 场景 A；无 better-sidebar 时 `ok:false` |
| **P0-2** | Envelope **必须** 含：`surface`（plugin、tabId、panelOpen、focus）、`view`（kind、filterType、query 截断）、`selection`（最多 20 条 id/name/type）、`sessionId`、`capturedAt`。**禁止** 含文件字节、绝对路径、secret、未保存草稿。 | Schema 单测 + 体积 ≤ 800 tokens P95 |
| **P0-3** | Hub **必须** 注册只读工具 `workbench_get_active_view`。返回与 Envelope 同构的当前快照，外加 `stale` / `panelOpen`。 | 面板收起仍返回 last-known view，`panelOpen:false` |
| **P0-4** | Hub **必须** 注册写工具 `workbench_open_tab`。参数：`tabId`（Occupants 白名单）、可选 `view`、`highlightIds`、`reason`。成功/拒绝都返回结构化 `{ ok, applied, code }`。 | 非法 tabId → `code: unknown-tab`；不在 Occupants → 拒绝 |
| **P0-5** | `workbench_open_tab` **必须** 遵守防打扰原则（§5.3）：面板收起默认不弹开；不改 `conversationCollapsed`；会话内自动切页配额；对话留下可撤销痕迹。 | 场景 C；撤销 400ms 内恢复焦点 Tab |
| **P0-6** | 资产库 Host 在 library / artifacts revision 变化时 **必须** 发出域事件。打开中的 `AssetsStage` **必须** 在 P95 400ms 内反映新卡。5s poll 降为 SSE 不健康时的兜底。 | 场景 B；可关 poll 单测 |
| **P0-7** | 事件与 refresh **必须** 幂等：以 `id` + `lrev` 去重；`unchanged: true` 的 poll 响应不得清空网格。 | 断连重放不双卡 |
| **P0-8** | 关页保活继续有效：`display:none` 的 Tab 仍可收事件并更新 store，再次打开不是空白旧数据。 | `stage-guards.md` 不回退 |
| **P0-9** | 垂直包 **禁止** `import` hub；切页走 `window.__omnimuxWorkbench.open`；信封由 Hub chrome 采集，垂直包只实现 `getUiContext()` 贡献器。 | `verify:stages` + 新契约扫描 |
| **P0-10** | 生图宣称必须尊重 `mode: "live"`。stub 产物可入库，但 UI 与 Agent 话术必须标明存根。 | capabilities / AGENTS.md 铁律 |

### 3.2 P1 Should have

| ID | 需求 | 验收 |
|---|---|---|
| **P1-1** | 对话内「打开工作台 / 撤销切页」为 **用户手势**，可突破 `panel-collapsed`。 | 按钮点击后 `open()` 成功且 `applied:true` |
| **P1-2** | `open_tab.view.filterType` 与当前 Chip 不一致时，先 hint「查看新角色」；用户或 Agent 显式确认后才改 Chip。 | 不静默改过滤 |
| **P1-3** | 新卡 `highlightIds`：滚动进视口 + 1.5s 高亮；`prefers-reduced-motion` 时无动画只描边。 | 设计 token `--dsw-*`，无 emoji |
| **P1-4** | SSE 状态条（非阻断）：断连显示「实时更新暂停，已改用 5 秒刷新」；重连后消失。 | 不断弹 toast |
| **P1-5** | Occupants 名单内其余库页（products / accounts / …）实现同一 `getUiContext()` 与域事件订阅接口，即使推送内容仍是「整表刷新」。 | 信封 `plugin` 正确；切页白名单可用 |
| **P1-6** | Envelope 对 `query` 截断到 64 字；空查询不传。 | 体积预算 |
| **P1-7** | `workbench_open_tab` 的 `reason` **必须** 出现在工具结果与对话短句中，便于用户理解「为什么切页」。 | 无 reason 则拒绝（`code: reason-required`） |

### 3.3 P2 Nice to have

| ID | 需求 | 验收 |
|---|---|---|
| **P2-1** | 可选「可视摘要」：当前页 1 句自然语言（由垂直包提供，≤ 80 字），默认关，设置里开。 | 关闭时字段缺省 |
| **P2-2** | Agent 请求 `forceOpenPanel: true` 仅在用户 **本会话明确授权**（一次授权、会话级）后生效。 | 未授权当 `panel-collapsed` |
| **P2-3** | 画布节点选中、剪辑时间轴入点等深视口字段进入 envelope.view.extra（按插件 schema）。 | 非 Occupants 插件忽略 |
| **P2-4** | 跨会话不复用授权与切页配额。 | 新会话空计数 |
| **P2-5** | 开发者开关：composer 旁显示信封 JSON（仅 dev profile）。 | 生产不可见 |

---

## 4. UI Context Envelope 结构规范

### 4.1 设计原则

1. **默认附带、失败放行**：信封是消息的附属 metadata，不是用户可见附件。采集超时（建议 16ms）或抛错 → `ok: false`，消息照发。
2. **寻址不截屏**：只传「Agent 能用来选工具/填参数」的标识，不传像素、不传文件内容。
3. **垂直包贡献、Hub 封装**：各 Tab 根实现 `getUiContext()`；Hub 在 composer submit 时 `window.__omnimuxWorkbench.getUiContext()` 汇总。垂直包不得自己往 LLM 消息里塞私货。
4. **可截断**：超 800 tokens 时按 `selection` 从尾部丢、再丢 `view.query`、再丢 `view.extra`，**永不丢** `surface`。
5. **隐私最小**：不包含 `$DSH_HOME` 绝对路径、账号 token、未提交表单。`selection[].name` 是用户自己起的资产名，允许。

### 4.2 JSON Schema（normative）

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "omnimux://ui-context-envelope/v1",
  "type": "object",
  "additionalProperties": false,
  "required": ["schemaVersion", "ok", "capturedAt"],
  "properties": {
    "schemaVersion": { "const": 1 },
    "ok": { "type": "boolean" },
    "reason": {
      "type": "string",
      "enum": [
        "ok",
        "no-workbench",
        "panel-collapsed",
        "no-contributor",
        "timeout",
        "unavailable"
      ]
    },
    "capturedAt": { "type": "integer", "description": "Unix ms" },
    "sessionId": { "type": "string" },
    "surface": {
      "type": "object",
      "additionalProperties": false,
      "required": ["tabId", "plugin", "panelOpen"],
      "properties": {
        "tabId": { "type": "string", "description": "e.g. omnimux-assets:library" },
        "plugin": { "type": "string", "description": "e.g. omnimux-assets" },
        "panelOpen": { "type": "boolean" },
        "focus": { "type": "string", "enum": ["split", "gui", "chat"] },
        "conversationCollapsed": { "type": "boolean" }
      }
    },
    "view": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "kind": {
          "type": "string",
          "enum": ["library", "canvas", "studio", "plaza", "detail", "unknown"]
        },
        "filterType": { "type": "string", "description": "Assets Chip: character|scene|style|prop|knowledge|custom|'' " },
        "query": { "type": "string", "maxLength": 64 },
        "sortKey": { "type": "string" },
        "viewMode": { "type": "string", "enum": ["grid", "list"] },
        "layer3Tab": { "type": "string", "description": "e.g. plaza Skills vs 我的" },
        "extra": { "type": "object", "additionalProperties": true }
      }
    },
    "selection": {
      "type": "array",
      "maxItems": 20,
      "items": {
        "type": "object",
        "additionalProperties": false,
        "required": ["id"],
        "properties": {
          "id": { "type": "string" },
          "name": { "type": "string", "maxLength": 80 },
          "type": { "type": "string" },
          "kind": { "type": "string", "description": "asset|product|account|node|clip|other" }
        }
      }
    }
  }
}
```

### 4.3 金标样例（资产库 · 角色 · 选中林晓）

```json
{
  "schemaVersion": 1,
  "ok": true,
  "reason": "ok",
  "capturedAt": 1756944000123,
  "sessionId": "ses_01J...",
  "surface": {
    "tabId": "omnimux-assets:library",
    "plugin": "omnimux-assets",
    "panelOpen": true,
    "focus": "gui",
    "conversationCollapsed": true
  },
  "view": {
    "kind": "library",
    "filterType": "character",
    "query": "",
    "sortKey": "updated_at",
    "viewMode": "grid"
  },
  "selection": [
    { "id": "ast_7f3a", "name": "林晓", "type": "character", "kind": "asset" }
  ]
}
```

面板收起样例：

```json
{
  "schemaVersion": 1,
  "ok": true,
  "reason": "panel-collapsed",
  "capturedAt": 1756944010000,
  "sessionId": "ses_01J...",
  "surface": {
    "tabId": "omnimux-assets:library",
    "plugin": "omnimux-assets",
    "panelOpen": false,
    "focus": "chat",
    "conversationCollapsed": false
  },
  "view": {
    "kind": "library",
    "filterType": "character",
    "viewMode": "grid"
  },
  "selection": []
}
```

> `panel-collapsed` 时 `ok` 仍为 true：last-known tab 有价值。`selection` 可空（不可见就不假装还选中）。`tabId` 取会话快照里最后一个 Occupant，而不是清空。

### 4.4 采集时序

```text
pointerdown/click 发送
  → Hub composer hook（同步，预算 16ms）
      1. workbench.getSnapshot()
      2. 若 panelOpen：向 active tab 贡献器要 getUiContext()
      3. 若 !panelOpen：surface 用 last Occupant + 清空 selection
      4. 截断 → 挂到 outgoing user message metadata.uiContext
  → 官方发送路径不变
```

**MUST NOT** 用异步 `await` 拖住发送按钮。贡献器必须同步纯函数。超时或抛错：`ok:false, reason:timeout|unavailable`。

### 4.5 注入到模型的形态（产品约束，实现可调整）

推荐作为 **隐藏的系统侧前缀块**（用户气泡不展示 JSON），例如：

```text
<ui_context schema="1">
tab: omnimux-assets:library | filter: character | selected: 林晓 (ast_7f3a)
panel: open | focus: gui
</ui_context>
```

- 用户可见消息 = 用户打的字。
- 调试（P2-5）可在 dev 显示原文 JSON。
- Agent 工具描述须写明：**先读本块，再决定是否 list 全库**。

### 4.6 Occupants → envelope 映射（P0 资产库，P1 其余）

| tabId | plugin | view.kind | 关键 view 字段 | selection.kind |
|---|---|---|---|---|
| `omnimux-assets:library` | omnimux-assets | library | filterType, query, sortKey, viewMode | asset |
| `omnimux-products:library` | omnimux-products | library | filter / query | product |
| `omnimux-accounts:library` | omnimux-accounts | library | platform chip | account |
| `omnimux-inspiration:library` | omnimux-inspiration | library | tags / query | other |
| `omnimux-publish:library` | omnimux-publish | library | status chip | other |
| `omnimux-analytics:library` | omnimux-analytics | library | date range in extra | other |
| `omnimux-workflow:library` | omnimux-workflow | library | query | other |
| `omnimux-workflow:canvas` | omnimux-workflow | canvas | extra.canvasId | node |
| `omnimux-market:plaza` | omnimux-market | plaza | layer3Tab | other |
| `omnimux-clip:studio` | omnimux-clip | studio | extra.route | clip |
| （非 Occupant / Files） | — | unknown | 省略 view | [] |

非 Occupant 激活时：`surface.tabId` 仍报真实 id，`plugin` 空或 `"third-party"`，Hub **不得** 假装用户在资产库。

---

## 5. Agent 控制工具规范与用户防打扰原则

### 5.1 `workbench_get_active_view`（L2，只读）

| 项 | 规范 |
|---|---|
| Owner | `omnimux` Hub（`ctx.tools.register`） |
| 分级 | L2 Standard Tool（探查当前视口） |
| 破坏性 | 否 |
| 参数 | 无（`additionalProperties: false` 的空 object） |
| 语义 | 返回 **此刻** 的 Envelope 同构快照。Host 通过工作台 RPC / 最后一次 Client 心跳得到；若心跳 > 3s，`stale: true` |

**返回（成功）**

```json
{
  "ok": true,
  "stale": false,
  "uiContext": { "schemaVersion": 1, "ok": true, "reason": "ok", "surface": {}, "view": {}, "selection": [] }
}
```

**错误**

| code | 何时 |
|---|---|
| `no-workbench` | 无 `dsh-better-sidebar` / 全局 API 未安装 |
| `no-session` | 无当前会话（与 `open()` 同一约束：禁止 `sessions.create({})`） |

工具描述（产品口径，实现可润色）：

> Read the user's current OmniMux workbench viewport: which plugin tab is focused, whether the right panel is open, library filters, and up to 20 selected ids. Use this before listing an entire library. Does not change the UI.

### 5.2 `workbench_open_tab`（L1，写 UI 但不写盘）

| 项 | 规范 |
|---|---|
| Owner | `omnimux` Hub |
| 分级 | L1（改变用户看见的工作台，必须暴露且必须可撤销） |
| 破坏性 | **否**（不删数据）。但是 **打扰性** 操作，走防打扰而不是 `confirm:true` |
| 与现网关系 | Host 侧薄适配 → 最终调用 Client `window.__omnimuxWorkbench.open({ tabId, path })`。**MUST NOT** `claimProductStage`。**MUST NOT** 旁路 Default Focus Rule（画布默认 split，其余默认 gui；已有手势记忆则恢复） |

**参数**

```json
{
  "type": "object",
  "additionalProperties": false,
  "required": ["tabId", "reason"],
  "properties": {
    "tabId": {
      "type": "string",
      "description": "Occupant id, e.g. omnimux-assets:library"
    },
    "reason": {
      "type": "string",
      "minLength": 4,
      "maxLength": 80,
      "description": "Short Chinese/English why the user should see this tab; shown in the transcript"
    },
    "view": {
      "type": "object",
      "description": "Optional subview. Unknown keys ignored.",
      "properties": {
        "filterType": { "type": "string" },
        "query": { "type": "string" },
        "layer3Tab": { "type": "string" }
      }
    },
    "highlightIds": {
      "type": "array",
      "maxItems": 20,
      "items": { "type": "string" }
    },
    "forceOpenPanel": {
      "type": "boolean",
      "description": "P2. Default false. Ignored unless the user granted session-level permission."
    }
  }
}
```

**返回**

```json
{
  "ok": true,
  "applied": true,
  "code": "opened",
  "tabId": "omnimux-assets:library",
  "previousTabId": "omnimux-workflow:canvas",
  "undoToken": "undo_01J...",
  "reason": "新角色图已入库"
}
```

| code | applied | 含义 |
|---|---|---|
| `opened` | true | 新开或切到目标 Tab |
| `already-active` | true | 已在该 Tab；仍可应用 highlight / view |
| `panel-collapsed` | **false** | 右栏收起，默认不弹开；数据面可能已写完 |
| `quota-exceeded` | false | 本会话自动切页次数用尽 |
| `unknown-tab` | false | 不在 Occupants 白名单 |
| `no-session` | false | 无会话 |
| `no-workbench` | false | 无 better-sidebar |
| `reason-required` | false | 缺 reason |
| `user-denied` | false | 用户本会话关闭了「允许 Agent 切页」 |
| `undone` | true | （仅 undo 工具或同一工具带 undoToken）已恢复 |

`ok: true, applied: false` 是 **合法成功**：工具没撒谎，UI 没动。Agent 必须把 `code` 翻译成对用户的一句话，而不是重试死循环。

**Undo**：`undoToken` 在 60s 内有效；`workbench_open_tab({ undoToken })` 或对话内「撤销切页」按钮恢复 `previousTabId` + 当时的 `filterType`。超时则按钮 disable，文案「已过期」。

### 5.3 用户防打扰原则（normative）

> 信任是 AI 产品的货币。切页是在抢用户的注意力，不是在展示 Agent 很勤快。

| # | 原则 | 规则 |
|---|---|---|
| D1 | **面板收起 = 请勿打扰** | `panelOpen===false` 时自动 `open` 默认 `applied:false`。用户手势（P1 按钮）除外。 |
| D2 | **不碰中栏几何** | 禁止 Agent `setFocus` / 改 `conversationCollapsed`。切 Tab 沿用该 Tab 已记忆的 split/gui。 |
| D3 | **配额** | 每个会话自动成功切页（`applied:true` 且 tab 实际变化）最多 **3** 次。`already-active` 不计数。超出 → `quota-exceeded`。新会话清零。 |
| D4 | **必须说明原因** | 无 `reason` 拒绝。对话里用一句话复述 reason，禁止只在工具 JSON 里出现。 |
| D5 | **可撤销** | 每次实际切页留下 undo。撤销是用户手势，不占配额。 |
| D6 | **不关用户的编辑态** | 不关 Modal、不清多选、不改 sortKey、不切 viewMode。`view.filterType` 仅当 P1 策略允许时改。 |
| D7 | **不循环切页** | 同一 `tabId` 3s 内重复调用：第二次起返回 `already-active`，不得闪烁。 |
| D8 | **用户总开关** | 设置（现有 Settings plugin seat，**禁止**新的一级 settings.section）增加「允许 Agent 切换工作台页面」，默认 **开**。关掉后一律 `user-denied`。 |
| D9 | **失败可见** | `applied:false` 时 Agent **不得** 假装「已打开资产库」。 |
| D10 | **写盘与切页解耦** | 入库成功不依赖切页成功。先写盘、再视情况切页。 |

### 5.4 与双面交付铁律的关系

| 能力 | UI 面 | Agent 面 | 共享 |
|---|---|---|---|
| 读视口 | 用户眼睛 | `workbench_get_active_view` + 每条消息 Envelope | workbench snapshot |
| 切 Tab | 左栏 / Tab 条 / P1 按钮 | `workbench_open_tab` | `__omnimuxWorkbench.open` |
| 资产 CRUD | AssetsStage | 现网 `assets_*` | library store |
| 即时刷新 | 网格 | （无单独 tool，是写盘的副作用） | 域事件 |

纯视口平移、光标、本地高亮 **仍是 UI-Only**，不新增 `workbench_scroll_to` 之类工具。`highlightIds` 只作为 `open_tab` 的附属参数。

### 5.5 System prompt 增量（Hub `systemPrompt.section`）

建议 `name: workbench:viewport`，`order` 低于各垂直 ops：

```text
The user may have an OmniMux workbench tab open beside this conversation.
Each user message may include an <ui_context> block. Trust it over guessing.
Call workbench_get_active_view if the block is missing or stale.
Call workbench_open_tab only when the user needs to see a result; always pass reason.
If the tool returns applied=false, tell the user in one sentence; do not retry in a loop.
Never claim an image was generated unless the media result mode is "live".
```

---

## 6. 异常场景与降级策略

### 6.1 矩阵

| 场景 | 检测 | 信封 | 切页工具 | 即时更新 | 用户感知 |
|---|---|---|---|---|---|
| **面板收起** `panelOpen:false` | snapshot | `ok:true, reason:panel-collapsed`，last tab，selection 空 | `applied:false, panel-collapsed` | Host 仍推事件；保活根更新 store；用户下次打开即是新数据 | 对话说明「右栏已收起」；P1 按钮 |
| **SSE / 事件总线断连** | heartbeat > 5s 或 `EventSource.onerror` | 不受影响（同步采集） | 不受影响（RPC） | **自动回退 5s poll**；重连后立即 force refresh 一次 | P1 非阻断条「实时更新暂停，已改用 5 秒刷新」 |
| **better-sidebar 未装** | `open()` 现网已返回 false | `ok:false, reason:no-workbench` | `no-workbench` | 无 Client Tab，不推 UI | 不回退 overlay（沿用 #313） |
| **无当前会话** | sessions | 仍可采集 tab，但 `sessionId` 空 | `no-session`，禁止 `sessions.create({})` | Host 事件按进程广播，无会话也不写错库 | toast 沿用 open() 现网 |
| **贡献器超时 / 抛错** | 16ms 预算 | `ok:false, timeout\|unavailable`，消息照发 | get_active_view 可再试一次 | 无关 | 无用户噪音 |
| **Tab 根未挂载（从未打开）** | `everOpened===false` | surface 可能仍有 tabId（快照里有），view 弱 | `open` 会挂载根 | 无订阅者，事件丢弃直到首次 open 后 force refresh | 打开瞬间拉最新 lrev（现网 `refreshState(true)` 保留） |
| **事件乱序 / 重放** | `lrev` 单调 | — | — | 只接受 `lrev > local`；id 幂等合并 | 无双卡、无闪空 |
| **poll 与 SSE 双击** | 两者同时活 | — | — | 以 lrev 为准；`unchanged:true` 忽略 | 无闪烁 |
| **生图失败 / stub** | media `mode` | — | 不因失败切页 | 不发 create 事件 | 对话报错；stub 标明 |
| **磁盘 / assertLocalWrite 拒绝** | 400/403 | — | 不切页 | 无事件 | 现网错误文案 |
| **用户关「允许 Agent 切页」** | 设置 | 仍采集 | `user-denied` | 写盘与推送照常 | 对话说明可在设置打开 |
| **配额用尽** | 会话计数 | 仍采集 | `quota-exceeded` | 照常 | 「本会话切页已达上限，请手动打开」 |
| **跨会话残留 undo** | token 含 sessionId | — | 外会话 token 无效 | — | 按钮过期 |
| **垂直包热重载丢贡献器** | getUiContext 空 | `no-contributor`，surface 仍有 | 切页仍可用 tabId | 该包事件可能断 | 降级为只知 tab、不知 Chip |

### 6.2 SSE 与 poll 的关系（资产库金标）

```text
正常：
  SSE 订阅 /omnimux/assets/events（或等价 bus）
  poll 暂停（不设 5s interval）

降级：
  onerror / heartbeat miss → 启动 POLL_MS=5000（现网逻辑复用）
  状态条 P1

恢复：
  onopen → force refresh(true) → 停 poll → 藏状态条
```

**MUST**：`GET /omnimux/assets/state?lrev&arev` 的 `unchanged:true` 语义保留，降级期继续省流量。  
**MUST NOT**：SSE 健康时仍每 5s 全量刷网格（避免闪烁和浪费）。

事件 payload 最小集（资产库）：

```json
{
  "type": "omnimux:assets:changed",
  "lrev": 42,
  "arev": 7,
  "op": "create",
  "ids": ["ast_new"],
  "assetType": "character",
  "at": 1756944000500
}
```

`op`: `create | update | delete | bulk`。Client 可用 ids 做乐观合并；不确定则 `refreshState(true)`。

### 6.3 面板收起时的数据面 vs 注意面

| 面 | 收起时 |
|---|---|
| 数据面（G3） | **不停**。Host 写盘、事件、保活 store 更新。 |
| 注意面（G2） | **默认停**。不弹面板、不改 focus、不抢中栏。 |
| 认知面（G1） | **降级不停**。信封带 last tab + `panel-collapsed`，让 Agent 知道用户此刻在看对话。 |

### 6.4 安全与合规

- 信封与事件 **不得** 携带 `OMNIMUX_*`、路径穿越、用户桌面绝对路径。预览继续走 Host `/omnimux/assets/library/preview`。
- `assertLocalWrite` 继续闸写路由。事件总线只读广播，不因 SSE 绕过写闸。
- 工具结果走现网 JSON `{ ok, ... }` 口径；破坏性仍只在 `assets_delete` 等已有工具上要求 `confirm:true`。切页不是破坏性。
- 中国生成式内容：本轮不新增标识义务；生图仍走中枢媒体缝与现网标识策略。

---

## 7. UI 草案（仅协同相关，不改 4 层库页骨架）

一级页 4 层信息架构 **不动**（`first-level-page-layout.md`）。本轮只加三处微表面：

1. **对话内切页痕迹**（Hub 渲染工具结果，非垂直包）：一行 13px 次文案 + 文本按钮「撤销」；P1 在 `panel-collapsed` 时多一个「打开」。控件高 32px、圆角 8px、SVG 图标、无 emoji。
2. **资产网格新卡**：1.5s 使用 `--dsw-alias-accent-primary` 描边；尊重 `prefers-reduced-motion`。
3. **P1 实时状态**：工作台 Tab 顶栏右侧极小字，不断 toast。Chip 旁 hint「1 张新角色，查看」可点，点击才改 `filterType`。

**禁止**：WorkbenchFocusBar 回潮；垂直包往 `toggleCluster` 塞按钮。

---

## 8. 技术约束（给架构师的边界，不是实现方案）

1. 座与焦点：继续 `docs/contracts/workbench-split.md`。`open` 序列：`closeDetails` → 释放残留 product-stage → 要求当前会话 → `openTab` → Default Focus Rule。
2. 跨包缝：`window.__omnimuxWorkbench` + Host HTTP + 本 PRD 的 Envelope/事件。垂直包零 hub import。
3. 工具注册：Hub 注册两个 workbench_* ；资产域事件由 `omnimux-assets` Host 发、Client 收。不要在 hub 里解析 `library.json`。
4. 贡献器接口（建议，供架构拍板）：

```text
window.__omnimuxWorkbench.registerContextContributor(tabId, () => ({ view, selection }))
```

5. Client↔Host 工作台 RPC 必须走现有 webServer / 官方通道，禁止垂直包私有 websocket 直连云。
6. 真机验收：改 Client / Stage 必须 `pnpm verify:live assets`（及 workbench），禁止只拿单测当完成。
7. 物化：日常只打 `~/.omnimux-dev`（45120）。禁止未经授权 `--prod`。

---

## 9. 里程碑建议

| 里程碑 | 内容 | 出口 |
|---|---|---|
| M1 契约 | Envelope schema、两工具 JSON Schema、事件名、防打扰状态机写入 L1 草案 | 架构师 ADR + contract 补丁 |
| M2 资产金标 | 采集 + assets SSE + 关 poll 主路径 + 两工具对资产 Tab | 场景 A/B 真机；P95 400ms |
| M3 防打扰 | 收起/配额/撤销/设置开关 | 场景 C |
| M4 P1 铺开 | 其余 Occupants 贡献器 + 对话按钮 | 信封 plugin 字段全绿 |
| M5 评测 | 14 天指标看板：命中率、撤销率、SSE 健康度 | 北极星可观测 |

建议先 M2 再 M3：没有「即刻可见」，切页只是把用户拉去看旧网格，伤害大于收益。

---

## 10. Open Questions（需架构 / 老板拍板）

| # | 问题 | PM 建议 | 影响 |
|---|---|---|---|
| Q1 | 信封挂在 user message metadata，还是独立 hidden 系统消息？ | metadata + 渲染时转成 `<ui_context>` 短块，用户气泡不展示 | 实现挂钩子位置 |
| Q2 | SSE 用官方 webServer 的 EventSource，还是 Host 内 EventEmitter + 长轮询？ | 产品只要求 400ms P95 与断连降级；不指定传输。若 EventSource 在 Electron 会话 cookie 下不稳，允许同页 `BroadcastChannel` + Host 推。 | 架构 |
| Q3 | `forceOpenPanel` 要不要进 P0？ | **不要**。收起=勿扰是信任底线。P2 + 会话授权。 | 范围 |
| Q4 | Chip 是否允许 Agent 直接改？ | P0 不允许静默改；P1 hint；`open_tab.view.filterType` 算显式请求，计 1 次「视图片段变更」，可与切页共用配额。 | 交互 |
| Q5 | 设置项放哪？ | 官方 Settings **plugin.item / plugins.tab**，禁止新的一级 `settings.section`。 | 契约 |
| Q6 | 无 better-sidebar 是否降级到 details？ | **否**，沿用 #313。 | 已决 |
| Q7 | 画布选中节点是否 P0 进信封？ | P0 只保证 tabId + 资产金标字段；画布 `extra` 放 P2。 | 范围 |

---

## 11. 风险

| 风险 | 可能 | 影响 | 缓解 |
|---|---|---|---|
| 信封泄漏路径/隐私 | 中 | 高 | Schema `additionalProperties:false`；扫描绝对路径；截断 |
| Agent 切页骚扰 | 高 | 高 | D1–D10 默认拒绝弹开、配额、撤销、总开关 |
| SSE 在现网 Host 不好做，又退回 5s | 中 | 中 | 合同写清：poll 只能兜底；验收关 poll 仍要 400ms（可用同页事件） |
| 双刷闪烁 | 中 | 中 | lrev 单调 + 幂等 id |
| 贡献器拖住发送 | 低 | 中 | 同步 16ms；超时放行 |
| 与 #372 焦点独立性冲突 | 中 | 高 | 工具禁止 setFocus / conversationCollapsed |

---

## 12. 给下游的一页纸

| 角色 | 请做什么 |
|---|---|
| **架构师** | 把 Envelope、两工具、事件、防打扰状态机落进 L1；拍板 Q1/Q2；补 ADR。 |
| **Hub 工程师** | composer 采集；`workbench_*` 工具；undo；设置开关；对话痕迹 UI。 |
| **资产库工程师** | `getUiContext()`；写盘事件；SSE/总线；poll 降级；新卡高亮与 Chip hint。 |
| **QA** | 场景 A/B/C 真机；`verify:live assets`；断连、收起、配额、stub 生图。 |
| **不要做的** | 不要为了「演示智能」在用户收起右栏时弹开；不要删 5s poll；不要把 DOM 塞进上下文。 |

---

*许清楚 · 产品 · 2026-09-04*
