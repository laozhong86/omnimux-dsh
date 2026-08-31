---
title: "增量 PRD：一级库页全量迁入右侧工作台与顶部对话开关注入（Issue #318）"
id: "spec-workbench-libraries-and-toggle-318"
type: "spec"
status: "proposed"
authority: "L2"
date: "2026-08-31"
updated: "2026-08-31"
authors: ["xu-qingchu", "agent-pm"]
subsystem: "omnimux"
tags: ["workbench", "better-sidebar", "library-tabs", "toggle-cluster", "prd", "issue-318"]
supersedes: []
superseded_by: null
related:
  - "docs/contracts/workbench-split.md"
  - "docs/contracts/sidebar-extra-entries.md"
  - "docs/contracts/first-level-page-layout.md"
  - "docs/contracts/stage-guards.md"
  - "docs/contracts/client-ui-remediation.md"
  - "docs/decisions/2026-08-31-workbench-split.md"
  - "https://github.com/omnimux-ai/omnimux-dsh/issues/318"
---

# 增量 PRD：一级库页全量迁入右侧工作台与顶部对话开关注入

> **Issue**：[#318](https://github.com/omnimux-ai/omnimux-dsh/issues/318)  
> **基线**：#313 / `docs/contracts/workbench-split.md`（剪辑 Tab + 画布 Tab 已坐 `dsh-better-sidebar`；库页仍 `shell.overlay`）  
> **本轮产品拍板**：废除「库页 = overlay」例外，一级库页与剪辑同座；默认开态按页面类型分流；右上角 `toggleCluster` 第一位插入「中间对话栏」开关。  
> **文档地位**：L2 增量规格，供架构师改契约 / 工程师落地。实现合入后须同步改 L1 契约（`workbench-split.md`、`sidebar-extra-entries.md`），并新增一篇 ADR 替代 2026-08-31 中「库页留 overlay」条款。

---

## 1. 项目信息

| 项 | 值 |
|---|---|
| Language | 中文 |
| Issue | `#318` feat(workbench): 一级库页全量迁入右侧工作台与顶部对话开关注入 |
| 工作区 | `omnimux-dsh-wt-workbench-libraries-and-toggle-318` / 分支 `agent/cross-workbench-libraries-and-toggle-issue-318` |
| 涉及包 | `omnimux`（中枢协调 / chrome / workbench API）、`omnimux-assets`、`omnimux-products`、`omnimux-accounts`、`omnimux-inspiration`、`omnimux-publish`、`omnimux-analytics`、`omnimux-workflow`（项目库）、`omnimux-market`（专家馆/广场）、`omnimux-clip`（已是工作台，吃默认开态 + 顶角开关） |
| 原始需求 | 彻底打破一级库页全屏 overlay 遮挡对话框的割裂体验；全量改为右侧 Tab；达成「左官方导航 \| 中官方会话不卸载 \| 右插件工作台」；`toggleCluster` 首位插入对话栏开关；画布默认 split，其余默认 gui；手动切换按会话记忆。 |

### 1.1 问题（Why）

#313 只把**创作工作台**（剪辑、画布）放进右栏，库/目录页仍 `claimProductStage`。后果：

1. 点「资产 / 产品 / 账号 / 灵感 / 发布 / 分析 / 项目 / 专家馆」会盖住中间会话，人机无法同面。
2. `html[data-dsh-product-stage]` 会藏 `[data-dsh-panel-host]` 与 `toggleCluster`，右栏工作台被物理关掉。
3. 用户没有一个**固定位置**去展开/收起中间对话栏（现有 `WorkbenchFocusBar` 只活在剪辑/画布 Tab 内，且面板收起时消失）。

本轮不是新壳，是把 #313 的「两座」收成「一座」。

### 1.2 产品目标（3 个正交）

| # | 目标 | 可验收口径 |
|---|---|---|
| G1 | **同面**：点任一一级库入口，页面出现在右侧工作台 Tab，中间官方 `conversation` 保持挂载，不再全屏 overlay | 打开后 `data-dsh-product-stage` 为空；`[data-dsh-panel-host]` 可见；composer 仍在 DOM |
| G2 | **可唤对话**：右上角 `toggleCluster` 第一位永远能展开/收起中间对话栏 | 按钮在库页、剪辑、画布上位置一致；gui ↔ split 切换不卸载会话 |
| G3 | **开态分流 + 记忆**：画布默认 split；其余插件页默认 gui；用户手切后按「会话 × Tab」记住 | 冷启动走默认矩阵；同会话再进同一 Tab 恢复手切结果，不串到别的 Tab |

### 1.3 非目标（本轮明确不做）

- 不发明三栏壳，不 shadow `root` / `sidebar` / `conversation` / `details`。
- 不卸载官方会话，不自绘第二套 composer。
- 无 `dsh-better-sidebar` 时 **不回退 overlay / details**（沿用 #313：`open()` 返回 false，Host 在、Tab 缺席）。
- 不把 **应用货架（Apps）**、**Settings**、登录门、个人资料迁入右栏。
- 不改各库页 4 层信息架构、Host API、Agent 工具、离线/云端登录门闩。
- 不改生产 profile；不 `sessions.create({})` 凑会话。
- 不把 OpenReel / 画布内芯重做一遍。

---

## 2. 用户故事

1. **作为**创作者，**我希望**点「资产库」时右侧打开资产页、中间对话还在，**以便**一边翻角色一边跟 Agent 改设定，而不是被全屏页挡住。
2. **作为**创作者，**我希望**进项目画布时默认就能看到对话栏，**以便**人机同面改节点；进资产/剪辑等工具页时默认工作台铺满，**以便**表格和轨道够用。
3. **作为**创作者，**我希望**在右上角固定位置一键展开/收起中间对话，**以便**不钻进每个 Tab 内部找「分栏/工作台」开关。
4. **作为**创作者，**我希望**在本会话里把资产页改成「对话+库」分栏后，切去剪辑再回来仍是分栏，**以便**手势不被默认规则抹掉。
5. **作为**创作者，**我希望**点工作区会话行或「新会话」时不再被强制踢出库页（库已在右栏、按会话隔离），**以便**换会话就是换一套右栏，而不是「关 overlay 回聊天」。

---

## 3. 范围与座椅矩阵

### 3.1 迁入名单（P0 必迁）

| 左栏入口 | 包 | 现状座 | 目标 Tab id（产品建议，架构可改前缀） | 默认焦点 |
|---|---|---|---|---|
| 资产库 | `omnimux-assets` | `shell.overlay` + claim | `omnimux-assets:library` | `gui` |
| 产品库 | `omnimux-products` | overlay | `omnimux-products:library` | `gui` |
| 账号 | `omnimux-accounts` | overlay | `omnimux-accounts:library` | `gui` |
| 灵感库 | `omnimux-inspiration` | overlay | `omnimux-inspiration:library` | `gui` |
| 发布 | `omnimux-publish` | overlay | `omnimux-publish:library` | `gui` |
| 分析 | `omnimux-analytics` | overlay | `omnimux-analytics:library` | `gui` |
| 项目（项目库列表） | `omnimux-workflow` | overlay `ProjectLibraryPage` | `omnimux-workflow:library` | `gui` |
| 专家馆 / 广场 | `omnimux-market` | `sidebar.footer.action` + body portal overlay | `omnimux-market:plaza` | `gui` |
| 视频剪辑 | `omnimux-clip` | **已是** `omnimux-clip:studio` | 不改 id | **改为** `gui`（现状跟随 lastOpenMode / split 默认，需纠偏） |
| 创作画布 | `omnimux-workflow` | **已是** `omnimux-workflow:canvas` | 不改 id | `split`（保持） |

左栏 rank / 32px 行规格 / `access: offline|cloud` 登录门闩 **一律不动**。变的是 `stageStore.open()`：从 `claimProductStage` 改为 `window.__omnimuxWorkbench.open({ tabId })`。

### 3.2 本轮不迁

| 表面 | 理由 |
|---|---|
| Hub「应用」货架 `omnimux-apps` | Issue 未列；仍是中枢抽屉，走 `client-ui-remediation` B5 |
| Settings / 登录 / 个人资料 | 官方 Settings 座，禁止一级页化 |
| Clip `ClipStage` overlay | **仅**保留画布节点 portal（不 claim）；侧栏点击不得再 `stage.open()` |
| 画布内芯 / OpenReel 内芯 | 已在右栏 |

---

## 4. 关键功能清单

### P0 — Must

| ID | 需求 | 验收 |
|---|---|---|
| P0-1 | 上表 8 个库页（含项目库、广场）`registerTab`，`single: true`，组件即现有 Stage/Plaza 视图 | 左栏点击后 Tab 出现在 `[data-dsh-panel-host]` |
| P0-2 | 左栏 `open()` **禁止** `claimProductStage` / 写 `data-dsh-product-stage` | 打开后 `document.documentElement.dataset.dshProductStage` 为空；`PRODUCT_STAGE_CHROME` 不再藏右栏 |
| P0-3 | 打开序列沿用 workbench：`closeDetails` → `releaseCurrentProductStage` → 等会话快照 → 关空 Files 种子 → `openTab` → 按 **Default Focus Rule** 写几何 | 与 #313 `openWorkbench` 同构；无当前会话不 `sessions.create` |
| P0-4 | 官方 `conversation` 始终挂载；「关掉对话框」= `setFocus('gui')`（右栏拉到 `viewport − 左栏`） | composer 仍在 DOM；gui 时会话被挤到可视宽度 ≈ 0，但未卸载 |
| P0-5 | Hub 在 better-sidebar **`toggleCluster` 第一位**注入「中间对话栏展开/收起」按钮 | 见 §5.2；库页/剪辑/画布位置一致 |
| P0-6 | Default Focus Rule + 会话×Tab 记忆，见 §5.3 / §6 | 冷启动矩阵命中；手切后刷新同会话仍在 |
| P0-7 | 库页进 Tab 后仍遵守 4 层布局、关页保活、kit 控件、token；`pnpm verify:stages` 继续绿（架构须把门禁从「overlay Stage」扩到「工作台 Tab 根」） | 不得为过门禁把页面改回 overlay |
| P0-8 | 契约三件套与本 PRD 同 PR 更新：`workbench-split.md` 删除「库页留 overlay」；`sidebar-extra-entries.md` 独立页座改为工作台；ADR 新篇 supersede 08-31 第 1 条后半 | 文档权威不打架 |
| P0-9 | 真机：`pnpm verify:live` + ego-browser，至少覆盖资产、项目库、广场、剪辑、画布五条路径 | 禁止只靠单测交棒 |

### P1 — Should

| ID | 需求 | 说明 |
|---|---|---|
| P1-1 | 评估下线 Tab 内 `WorkbenchFocusBar` 三态收音机（对话/分栏/工作台） | 顶角按钮已覆盖 split↔gui；`chat` 仍用 better-sidebar 原有「收起右栏」。若保留 FocusBar，不得和顶角按钮状态分叉 |
| P1-2 | 广场入口从 `sidebar.footer.action` 对齐为「新会话下方 extra row」（若现网已无 `[data-omnimux-esc-entry]`） | 产品倾向：专家馆与资产等一级入口同列；具体 rank 交架构 |
| P1-3 | 库 Tab 的「关闭」= `closeTab`；若右栏已无 OmniMux 业务 Tab，则 `setFocus('chat')` | 不要再走 `stage.set(false)` + overlay 释放 |
| P1-4 | 多 Tab 共存：资产与剪辑可同时挂在同一会话右栏，点左栏只激活对应 Tab，不卸另一个 | 默认 `single:true` 防重复实例；跨 type 共存由 better-sidebar 列表承担 |

### P2 — Nice

- 键盘快捷键切换中间对话栏。
- 把默认开态写成用户可改的 Settings（**本轮禁止**加一级 Settings section）。

---

## 5. 交互规则

### 5.1 三栏几何（不变）

```
左：官方 sidebar + 新会话下方入口
中：官方 conversation（不可卸载）
右：dsh-better-sidebar 工作台 Tab
```

`setFocus` 只写右栏几何：

| mode | 右栏 | 中间会话 |
|---|---|---|
| `split` | 默认约留下 420px 会话（可恢复用户上次 split 宽） | 可见 |
| `gui` | `width = viewport − 官方左栏` | 挂载、被 `#root { margin-right }` 挤到不可用 |
| `chat` | `panelOpen: false` | 占满剩余宽度；Tab id 留在会话快照 |

本轮**新增语义**：对库页/剪辑，「收起中间对话」= `gui`，不是 `chat`（`chat` 会把工作台一起收掉）。

### 5.2 toggleCluster 首位按钮（对话栏开关）

| 项 | 规则 |
|---|---|
| 位置 | better-sidebar 右上角 `toggleCluster` **第一位**（原「展开/收起右栏」等按钮顺延） |
| 作用 | 切换中间对话栏：**gui ↔ split** |
| 显示条件 | 右栏 `panelOpen === true` 且当前激活 Tab 属于 OmniMux 工作台名单（§3.1）。右栏已 `chat` 时该按钮隐藏或禁用（先展开右栏才谈中间栏） |
| 态 | `gui` = 对话收起（图标/ aria 为「展开对话」）；`split` = 对话展开（「收起对话」） |
| 实现归属 | **Hub `omnimux` chrome 注入一处**，垂直包禁止各写一份 DOM 插入 |
| 禁止 | 改官方 AppFrame；fork `dsh-better-sidebar` 源码进本仓；用 `display:none` 藏整个 cluster 后自己画一套 |
| 与 FocusBar | 同一 `setFocus` 真源；两处 UI 必须同态。P1 再决定是否删 FocusBar |

文案（产品）：

- `aria-label`：展开时 `展开对话` / `Show chat`；收起时 `收起对话` / `Hide chat`
- 图标：与现有 cluster 同规格的矢量 SVG，禁止 emoji

### 5.3 Default Focus Rule（默认开态分流）

**只在「该会话 × 该 tabId 还没有用户手切记录」时生效。**

```
if (tabId === 'omnimux-workflow:canvas') default = split
else if (tabId ∈ OmniMux 工作台名单) default = gui
else 不写焦点（第三方 Files 等）
```

纠偏相对 #313：

- #313 `open()` 在 `chat` 时恢复 **会话级** `lastOpenMode`，且 `applyDefaultWidth` 默认按 split。这会让「从画布（split）点资产」错误继承 split。
- 本轮改为 **按 tabId 分流**，禁止跨 Tab 继承焦点。

项目库 → 打开项目：

1. 关闭或切换离开 `omnimux-workflow:library`（架构二选一，产品不强制卸库 Tab）。
2. `open('omnimux-workflow:canvas')`。
3. 若该会话画布无手切记录 → `split`；有记录则恢复。
4. `applyProjectCanvasRatio` 在 `gui`/`chat` 时仍必须 skip（沿用 #313）。

### 5.4 记忆（按会话持久化）

| 键 | 值 |
|---|---|
| 粒度 | **sessionId × tabId** → `{ mode: 'split'\|'gui', splitWidth? }` |
| 写入 | 用户点顶角对话开关、FocusBar、或拖分隔条（split 宽） |
| 不写入 | 纯默认开态（避免「没碰过的 Tab」被记成默认，挡住以后改默认规则） |
| 持久化介质 | 必须活过刷新。产品要求「按会话」；优先挂 better-sidebar 已有 `dsh-sidebar:v1:<sessionId>` 快照，或 Hub 旁路同一 session 作用域。禁止只放内存 `Map`（现状 `focusBySession` 刷新即丢） |
| 新会话 | 无记录，走默认矩阵 |
| 切会话 | 读目标会话自己的表；不把 A 会话的手切带到 B |
| `chat` | 仍是会话级「右栏收起」。再点该左栏入口：打开对应 Tab，焦点恢复该 Tab 的记忆，无记忆则走默认（**不要**无脑 lastOpenMode） |

### 5.5 左栏 / 会话行 / 新会话

| 动作 | 新行为 |
|---|---|
| 点库/剪辑左栏 | `ensureLogin`（cloud）→ `workbench.open(tabId)` → 默认或记忆焦点。**禁止 claim** |
| 再点同一左栏 | 若已在该 Tab 且为 `gui`/`split`：保持；若右栏 `chat`：打开该 Tab 并恢复记忆/默认 |
| 点另一库左栏 | 激活另一 Tab；按**那一 Tab** 的默认/记忆写焦点，不沿用上一 Tab |
| 点工作区会话行 | **不再**为了「离开 overlay」而关库页。右栏随 better-sidebar 会话快照切换 |
| 新会话 | 新会话快照无业务 Tab → 中间聊天。用户再点左栏，在新会话里按默认矩阵打开 |
| 「新建项目」 | 成功后释放任何残留 product-stage，打开画布 Tab + split 默认（同现逻辑，只是不再从 overlay 退场） |

### 5.6 缺依赖

| 条件 | 行为 |
|---|---|
| 无 `dsh-better-sidebar` | `open()` false；左栏可 toast/静默；**禁止** overlay 顶上 |
| 无当前会话 | 不 `sessions.create`；open 失败或等用户先开会话（沿用 #313，架构确认 UX 文案） |

---

## 6. 开态矩阵（界面契约）

冷启动 / 该 Tab 无手切记录：

| 激活 Tab | 默认 mode | 中间对话 | 右栏 | 顶角「对话开关」 |
|---|---|---|---|---|
| `omnimux-workflow:canvas` | `split` | 可见 ~420px | 画布 | 显示为「收起对话」 |
| `omnimux-clip:studio` | `gui` | 挤没 | 剪辑满工作台 | 「展开对话」 |
| `omnimux-*:library` / `omnimux-market:plaza` | `gui` | 挤没 | 库页满工作台 | 「展开对话」 |
| 右栏 `chat`（无面板） | `chat` | 满宽 | 关 | 隐藏/禁用 |
| 第三方 Files 等 | 不干预 | — | — | 不插入 OmniMux 按钮 |

手切后（例：会话 S1）

| 序列 | 结果 |
|---|---|
| S1 打开资产（默认 gui）→ 点「展开对话」 | 资产 = split，写入记忆 (S1, assets) |
| 再点剪辑 | 剪辑无记忆 → gui（**不**继承资产的 split） |
| 再回资产 | 恢复 split |
| 新会话 S2 打开资产 | gui（S1 记忆不泄漏） |

---

## 7. 界面契约（给实现的硬约束）

1. **跨包缝**：只走 `window.__omnimuxWorkbench`（及已有 `__omnimuxStage` / `__omnimuxSidebar` / `__omnimuxAuth`）。垂直包 **MUST NOT** `import` hub client。
2. **左栏适配器**：复制 clip 的 `createClipWorkbenchStore` 模式（或消费 hub 的 `createWorkbenchSidebarStore`——**仅能经 window 工厂，不能 import**）。六件套 `getSnapshot/subscribe/open/close/set/readBox` 必须在，好过 `verify:stages`。
3. **Tab 根**：现有 `*Stage.jsx` / `ProjectLibraryPage.jsx` / `plaza-shell` 迁入 Tab 后仍要 `everOpened` + `display: open ? undefined : 'none'` 保活；禁止改回 `if (!open) return null`。
4. **Chrome**：迁入完成后，这些入口打开时 **不得**再触发 `PRODUCT_STAGE_CHROME` 藏 `toggleCluster` / `[data-dsh-panel-host]`。Hub 可收紧 chrome 选择器，避免误伤残留 clip portal。
5. **4 层布局**：库页在 Tab 内仍是 L1–L4，不是 B4 创作工作台豁免。广场仍 B3（无「+新建」L2）。
6. **Token / kit**：`--dsw-*`，禁止裸 `<select>` / 原生主按钮。
7. **登录门闩**：`access:'cloud'` 仍先 `ensureLogin({ kind:'explicit' })` 再 `open()`。

---

## 8. 待架构师明确的关键边界

下列是产品**不擅自发明实现**的点；架构 ADR 必须逐条拍板。

| # | 问题 | 产品倾向（非裁定） | 为什么必须架构拍 |
|---|---|---|---|
| Q1 | `toggleCluster` 无官方扩展点，如何插到**第一位**且不 fork 社区包？ | Hub MutationObserver / 包装 cluster DOM，按钮带稳定 `data-omnimux-chat-toggle` | 涉及第三方 DOM 稳定性、HMR、z-index=300 现状 |
| Q2 | 记忆落盘：扩展 better-sidebar session snapshot，还是 Hub 自写 `$DSH_HOME` / `sessionStorage` 按 sessionId？ | 能挂官方快照就挂，避免第二份布局源 | 双写会打架（width vs mode） |
| Q3 | `verify:stages` 仍按 overlay Stage 扫 `display:open`；Tab 化后文件还算不算 Stage？plaza-shell / ClipStage 怎么办？ | 业务根组件继续保活；门禁 glob 扩到 `*Tab.jsx` 或白名单 | 静态门禁误杀会卡合入 |
| Q4 | 项目库 Tab 与画布 Tab 同包：打开项目时库 Tab 关还是留？ | 可留，激活画布即可 | 关了就丢筛选状态；留则 Tab 条变挤 |
| Q5 | 广场现座 `sidebar.footer.action`（Settings 脚）。是否改挂新会话下方 extra row？ | P1 对齐其它一级入口；P0 至少先变成右栏 Tab | footer.action 合同禁止当一级页，但改 rank 会动协调器 |
| Q6 | 无当前会话时左栏点击的 UX | 不静默吞；可轻提示「先开一个会话」，仍禁止 `sessions.create({})` | 与 #313 硬约束冲突面 |
| Q7 | 多业务 Tab 共存时，顶角开关绑定「激活 Tab」还是「整个右栏」？ | 绑定激活 Tab 的记忆；几何仍是整栏一份 width | 一栏不能同时 split+gui |
| Q8 | 库页 L1 的 Close：`closeTab` vs `setFocus('chat')` vs 两者 | 先 closeTab，空了再 chat | 与 better-sidebar 空 Files 种子策略要对齐 |
| Q9 | overlay slot 代码是删还是留死代码？Clip portal 是否仍要 `shell.overlay`？ | 库页 slot **删主路径**；Clip overlay **只留 portal** | 残留 `claim` 会再次藏右栏 |
| Q10 | 工作区会话行点击监听（`watchSelectedSessionClick`）专为 overlay 退场。迁完后这段是删、收窄，还是改成「切会话」？ | 删除「点会话就 release stage」对库页的副作用 | 误删会影响尚未迁移的 Apps overlay |
| Q11 | 默认 gui 与画布 `applyProjectCanvasRatio` 15:85 磁吸的冲突面是否只限 canvas Tab？ | 是；库/剪辑禁止套 15:85 | 现码已 skip gui/chat，迁入后别把磁吸挂到 library Tab |
| Q12 | `createWorkbenchSidebarStore` 在 hub 模块；垂直包不能 import。对外暴露方式？ | `window.__omnimuxWorkbench.createSidebarStore`（已有雏形） | 加载顺序 / 单测替身 |

---

## 9. 验收清单（给 QA / 真机探针）

**环境**：Dev App（日常 45120 / 以当时 `~/.omnimux-dev` 为准），禁止用私有 harness 端口冒充交付。

| # | 步骤 | 期望 |
|---|---|---|
| A1 | 冷启动点「资产库」 | 右栏资产页；`data-dsh-product-stage` 空；会话 DOM 在；焦点 gui |
| A2 | 点顶角「展开对话」 | 进入 split；再点「收起对话」回 gui |
| A3 | 切「视频剪辑」 | 默认 gui，不继承 A2 的 split |
| A4 | 回「资产库」 | 仍是 A2 手切后的 split |
| A5 | 「项目」→ 打开一项目 | 画布 Tab；默认 split；磁吸不与 gui 打架 |
| A6 | 专家馆 / 广场 | 右栏 Tab，不是 body 全屏 portal；不 claim stage |
| A7 | 点工作区另一会话 | 不出现 overlay 遮罩；右栏跟会话快照走 |
| A8 | 刷新同会话 | 手切记忆仍在 |
| A9 | 卸掉 better-sidebar（或模拟 `open` false） | 不出现 overlay 回退 |
| A10 | cloud 入口未登录点「账号」 | 先登录门闩，成功后再开 Tab |

单测最低面（产品要求，路径由架构定）：

- Hub：默认矩阵、记忆粒度（session×tab）、跨 Tab 不继承、`toggleCluster` 注入幂等、不再为库页写 `data-dsh-product-stage`。
- 各垂直包：sidebar `open()` 走 workbench、源码禁止 `claimProductStage`（clip portal 除外）。

---

## 10. 风险与合入

| 项 | 值 |
|---|---|
| 风险 | **R1**（跨 9+ 包、一级入口语义、第三方 DOM） |
| 预授权 | `pre-authorized: false`，走老板通道 |
| 文档债 | 08-31 ADR「库页留 overlay」必须被新 ADR 替代，否则 Agent 会按旧契约把库页写回 overlay |
| 最大回归 | `PRODUCT_STAGE_CHROME` 仍藏右栏；默认焦点仍会话级 lastOpenMode；广场继续 `document.body` portal |

---

## 11. 给架构师的一句话

> **座只有一个：`dsh-better-sidebar`。库页不再是 overlay 例外。焦点默认按 Tab 类型分流（画布 split / 其余 gui），记忆按会话×Tab。对话开关进 `toggleCluster` 首位，只切 gui↔split，永不卸载 `conversation`。**
