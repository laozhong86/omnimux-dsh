---
title: "决策：一级库页迁入 dsh-better-sidebar，默认开态按 Tab 分流，对话开关进 toggleCluster"
id: "decision-workbench-libraries-and-toggle"
type: "decision"
status: "accepted"
authority: "L2"
date: "2026-08-31"
updated: "2026-08-31"
authors: ["gao-jianyuan", "agent-architect"]
subsystem: "omnimux"
tags: ["workbench", "better-sidebar", "library-tabs", "toggle-cluster", "adr", "issue-318"]
supersedes: []
superseded_by: null
amends: "docs/decisions/2026-08-31-workbench-split.md#裁定-1-库页-overlay-例外"
related:
  - "docs/contracts/workbench-split.md"
  - "docs/contracts/sidebar-extra-entries.md"
  - "docs/contracts/stage-guards.md"
  - "docs/contracts/client-ui-remediation.md"
  - "docs/contracts/first-level-page-layout.md"
  - "docs/specs/2026-08-31-workbench-libraries-and-toggle-prd.md"
  - "docs/specs/2026-08-31-workbench-libraries-and-toggle-design.md"
  - "https://github.com/omnimux-ai/omnimux-dsh/issues/318"
---

# 决策：一级库页迁入 dsh-better-sidebar，默认开态按 Tab 分流，对话开关进 toggleCluster

> **权威等级**：L2 | **状态**：`accepted` | **生效日期**：2026-08-31  
> **修订**：替代 [2026-08-31-workbench-split](./2026-08-31-workbench-split.md) **裁定第 1 条后半**（「库/目录页继续 `shell.overlay`」）。其余条款仍有效：不发明三栏壳、不卸载 `conversation`、无 better-sidebar 不回退 overlay、无当前会话不 `sessions.create({})`。  
> **关联契约**：[workbench-split.md](../contracts/workbench-split.md) · [sidebar-extra-entries.md](../contracts/sidebar-extra-entries.md)  
> **工程规格**：[2026-08-31-workbench-libraries-and-toggle-design.md](../specs/2026-08-31-workbench-libraries-and-toggle-design.md)

## 背景

#313 把剪辑 / 画布放进右栏，库页仍 `claimProductStage`。后果是点资产/产品/账号等会盖住中间会话，并触发 `PRODUCT_STAGE_CHROME` 藏 `[data-dsh-panel-host]` 与 `toggleCluster`。产品 #318 要求把「两座」收成「一座」。

现网代码（本 ADR 生效前的 L0）仍是：

- `plugins/omnimux/src/client/workbench.js` 用 **会话级** `focusBySession`（`lastOpenMode`）+ 内存 `Map`，刷新即丢，跨 Tab 会继承焦点。
- 六库 + 项目库 `apply()` 仍 `slots.inject('shell.overlay')`；广场仍 `sidebar.footer.action` + `document.body` portal + `claim('omnimux-market')`。
- `createWorkbenchSidebarStore.close()` 调 `closePanel()`（收整栏），不是 `closeTab`。

本 ADR 把这些全部改掉。实现细节与任务分解见工程规格，不在此重复伪代码。

## 裁定

1. **座只有一个**：所有 Occupants 名单内的一级库页、广场、剪辑、画布均坐 `ctx.betterSidebar.registerTab`（`single: true`）。左栏 `open()` 只走 `window.__omnimuxWorkbench.open({ tabId })`。**MUST NOT** `claimProductStage` / 写 `data-dsh-product-stage`。
2. **残留 overlay 白名单**：`shell.overlay` 仅留给 Hub 登录门、（未挂载的）Apps 货架、Clip **画布节点 portal**（`openFromCanvas`，不 claim）。库页 slot **删主路径**。
3. **Default Focus Rule**：仅当 `(sessionId, tabId)` 无用户手切记录时生效。`omnimux-workflow:canvas` → `split`；其余 OmniMux 工作台 Tab → `gui`；第三方 Files 不写焦点。禁止跨 Tab 继承 `lastOpenMode`。
4. **记忆**：`localStorage['omnimux-workbench-focus:v1:' + sessionId] = { [tabId]: { mode, splitWidth? } }`。只在用户手势写入（顶角开关、FocusBar、拖分隔条）。纯默认开态不落盘。`chat` 仍是 better-sidebar 会话级 `panelOpen: false`，不进 Tab 表。
5. **对话开关**：Hub 在 `[data-dsh-toggle-cluster]`（回退 `[class*="toggleCluster"]`）**第一位**注入一枚按钮 `data-omnimux-chat-toggle`。只切 `gui ↔ split`。垂直包禁止各写一份 DOM。不 fork `dsh-better-sidebar`，不改官方 AppFrame。
6. **无 better-sidebar**：`open()` 返回 `false`，禁止 overlay 回退。**无当前会话**：`open()` 返回 `false` 并提示「请先新建或打开一个会话」，禁止 `sessions.create({})`。
7. **项目库与画布**：同包双 Tab。打开项目时**保留** `omnimux-workflow:library`，激活 `omnimux-workflow:canvas`。`applyProjectCanvasRatio` 只作用于画布 Tab，且在 `gui`/`chat` 时 skip。
8. **广场**：P0 从 `sidebar.footer.action` 迁到新会话下方 extra row（rank `3.2`，`[data-omnimux-market-entry]`）+ 右栏 Tab `omnimux-market:plaza`。禁止 `document.body` 全屏 portal，禁止 claim。
9. **关页**：库 Tab 的 Close = `closeTab(tabId)`；若右栏已无 OmniMux 业务 Tab，再 `setFocus('chat')`。不要 `stage.set(false)`。
10. **点工作区会话行**：不再为库页 release overlay（库已不在 overlay）。`watchSelectedSessionClick` **收窄保留**，只服务仍 claim 的残留 overlay（Apps / 未来同类）。现网实现已按 `dataset.dshProductStage` 短路，本轮只改注释与测试口径，禁止扩成「点会话就关右栏 Tab」。

## Occupants（Tab id 锁定）

| Tab id | Owner | 默认焦点 | 左栏 | 形态 |
|---|---|---|---|---|
| `omnimux-assets:library` | `omnimux-assets` | `gui` | `[data-omnimux-assets-entry]` rank 6 | A 类 4 层 |
| `omnimux-products:library` | `omnimux-products` | `gui` | `[data-omnimux-products-entry]` rank 8 | A 类 |
| `omnimux-accounts:library` | `omnimux-accounts` | `gui` | `[data-omnimux-accounts-entry]` rank 3 | A 类；`access: cloud` |
| `omnimux-inspiration:library` | `omnimux-inspiration` | `gui` | `[data-omnimux-inspiration-entry]` rank 7 | A 类；`access: cloud` |
| `omnimux-publish:library` | `omnimux-publish` | `gui` | `[data-omnimux-publish-entry]` rank 4.2 | A 类（允许 3A）；`access: cloud` |
| `omnimux-analytics:library` | `omnimux-analytics` | `gui` | `[data-omnimux-analytics-entry]` rank 4.5 | B2 仪表盘；`access: cloud` |
| `omnimux-workflow:library` | `omnimux-workflow` | `gui` | `[data-dsh-omnimux-workflow-entry]` rank 4 | A 类 |
| `omnimux-workflow:canvas` | `omnimux-workflow` | `split` | 非左栏；打开项目后激活 | B1 / B4 |
| `omnimux-market:plaza` | `omnimux-market` | `gui` | `[data-omnimux-market-entry]` rank 3.2（本轮新增） | B3 |
| `omnimux-clip:studio` | `omnimux-clip` | `gui` | `[data-omnimux-clip-entry]` rank 8.2 | B4 |

Tab id **冻结**。工程师不得改前缀或把 `:library` 写成包名。`isWorkbenchTab(tabId)` 只认上表。

## Q1–Q12 拍板

| # | 裁定 |
|---|---|
| **Q1** toggleCluster 无官方扩展点 | Hub `MutationObserver` + 幂等 `insertBefore(btn, cluster.firstChild)`。选择器优先 `[data-dsh-toggle-cluster]`，回退 `[class*="toggleCluster"]`（与现 `PRODUCT_STAGE_CHROME` 同策略）。按钮稳定属性 `data-omnimux-chat-toggle`。已是第一位则 no-op。HMR / 重渲染靠 observer 再插入。**禁止** fork 社区包、**禁止** `display:none` 藏整个 cluster 后自绘。 |
| **Q2** 记忆落盘 | **Hub 旁路 `localStorage`，按 sessionId 分表**。不改 `dsh-sidebar:v1:<sessionId>`（那份快照只拥有 width / panelOpen / tabs；双写会和 `reduce` 打架）。刷新可恢复；新会话无键走默认矩阵。不写 `$DSH_HOME`（本轮无 Host API）。禁止只放内存 `Map`。 |
| **Q3** `verify:stages` | 业务根继续保活。门禁 glob 扩到工作台 Tab 根（`*Stage.jsx`、`ProjectLibraryPage.jsx`、`plaza-shell.js` / 继任 `PlazaTab`）。新增静态规则：迁入名单包的 client 入口 **禁止** `slots.inject('shell.overlay')`（allowlist：hub LoginGate、clip ClipStage portal）。不得为过门禁把页面改回 overlay。 |
| **Q4** 项目库 vs 画布 | **留库 Tab**，只激活画布。筛选状态保活；Tab 条变挤可接受（P1 再评估）。 |
| **Q5** 广场入口 | **P0 对齐 extra row**（rank 3.2）并删除 `sidebar.footer.action` 广场触发器。footer.action 合同禁止当一级页；只留 Hub 更新栏。 |
| **Q6** 无当前会话 | `open()` **false** + Hub 轻提示（`请先新建或打开一个会话` / `Start or open a session first`）。不静默吞、不 `sessions.create`。现网「无 session 仍 openTab」行为废止。 |
| **Q7** 顶角开关绑定 | 绑定**激活 Tab** 的记忆；几何仍是整栏一份 width。切 Tab 时按目标 Tab 的记忆/默认重写几何。一栏不能同时 split+gui。 |
| **Q8** 库页 Close | `closeTab(tabId)`；若 `listOpenTabs` 已无 `isWorkbenchTab` → `setFocus('chat')`。与空 Files 种子策略独立（种子仍在 `open()` 时关掉）。 |
| **Q9** overlay 删留 | 库页 overlay **删主路径**（`apply()` 不再 inject）。Clip overlay **只留 portal**。Apps / LoginGate 不动。 |
| **Q10** `watchSelectedSessionClick` | **收窄保留**：仅当 `dataset.dshProductStage` 仍存在时关残留 overlay。库页迁完后点会话行不再踢出右栏 Tab（右栏跟 better-sidebar 会话快照走）。 |
| **Q11** 15:85 磁吸 | **只限** `omnimux-workflow:canvas`。库/剪辑/广场禁止调用 `applyProjectCanvasRatio`。现有 `gui`/`chat` skip 保留。打开画布必须走 `window.__omnimuxWorkbench.open({ tabId: 'omnimux-workflow:canvas' })`，禁止旁路 `service.openTab` 绕过 Default Focus Rule。 |
| **Q12** Sidebar store 工厂 | 对外唯一：`window.__omnimuxWorkbench.createSidebarStore({ tabId, title, path })`。垂直包 **MUST NOT** `import` hub，**MUST NOT** 内联复制六件套。库页直接（或经本包一行转发）调用该工厂。Clip 可保留本地薄封装（常量 `CLIP_TAB_ID` / path），内部仍走 window；`close` 跟工厂走 `closeTab`。加载顺序：hub client 先于垂直包；工厂 subscribe 另有 ≤8s 就绪轮询。 |

## 对话开关（toggleCluster 第一位）

| 项 | 规则 |
|---|---|
| 模块 | Hub 新建 `plugins/omnimux/src/client/chat-toggle.js`，由 `installHubChrome` 在 `ensureProductStageChrome` 之后 `installChatToggle()`。垂直包禁插。 |
| 宿主 | `[data-dsh-toggle-cluster]` → 回退 `[class*="toggleCluster"]` |
| 插入 | `cluster.insertBefore(btn, cluster.firstChild)`。已存在且已是第一子节点 → no-op。存在但不是第一 → 再 `insertBefore`。 |
| 标记 | `data-omnimux-chat-toggle="1"`；`type="button"`；矢量 SVG（与 cluster 同 16px 规格）；禁止 emoji。 |
| 文案 | `gui` → `aria-label` `展开对话` / `Show chat`；`split` → `收起对话` / `Hide chat`。文案走 Hub locales `workbench.chatShow` / `workbench.chatHide`。 |
| 动作 | `getFocus() === 'gui' ? setFocus('split', { persist: true }) : setFocus('gui', { persist: true })`。永不 `chat`。永不卸载 `conversation`。 |
| 可见 | `panelOpen === true` **且** 当前激活 tab ∈ Occupants。`chat` 或第三方 Files → `hidden`（不占位，避免挤官方按钮）。 |
| 观察 | `MutationObserver` 挂 `document.documentElement`，过滤 `childList`/`subtree`；debounce 16ms；HMR 重绘 cluster 时再插入。`workbench.subscribe` 同步 aria / hidden。 |
| 禁止 | fork `dsh-better-sidebar`；改官方 AppFrame；`display:none` 藏整个 cluster 后自绘一套；垂直包再插一枚。 |

## 记忆 schema

```
localStorage['omnimux-workbench-focus:v1:' + sessionId] = {
  [tabId]: { "mode": "split" | "gui", "splitWidth"?: number }
}
```

| 操作 | 是否写入 |
|---|---|
| 冷启动 Default Focus Rule | **否** |
| 顶角对话开关 | **是**（mode + 当前 splitWidth） |
| Tab 内 FocusBar 点 split/gui | **是** |
| 用户拖分隔条（推断为 split，且 width 不贴近 gui 宽） | **是**（只更新该激活 Tab 的 `splitWidth`） |
| `setFocus('chat')` / 官方收起右栏 | **否**（`panelOpen` 由 better-sidebar 快照管） |
| 切会话 | 读目标 sessionId 的表；不拷贝 |

`setFocus(mode, store?, env?, opts?)` 新增 `opts.persist`（默认：用户手势 true，程序默认开态 false）。内存 `Map` 只作热缓存，`resetWorkbenchForTests` 必须清 Map **并**可注入假 `localStorage`。

## 8 包 Tab 化硬模板

垂直包 **调用 hub `createSidebarStore`，禁止再发明第二套六件套**。金标：`registerTab` + `window.__omnimuxWorkbench.createSidebarStore({ tabId, title, path })` + `mountSidebarEntry(null, t)`。Clip 可保留常量薄封装（`createClipWorkbenchStore` → 工厂）。库页差异只在：组件仍是现有 `*Stage.jsx`，根节点从 `position:fixed + --stage-*` 改为填满 Tab 容器。

| 步骤 | 规则 |
|---|---|
| 1. 常量 | 每包 `TAB_ID` / `SENTINEL_PATH` 等于 Occupants 表 |
| 2. 左栏 | `createSidebarEntry({ stageStore: window.__omnimuxWorkbench.createSidebarStore({ tabId, title, path }), … })`。`access` 沿用 offline/cloud，**登录门闩仍在 kit 点击分流**，成功后再 `open()`。 |
| 3. `apply()` | **删除** `ctx.slots.inject('shell.overlay', …)`（clip portal / hub LoginGate 除外）。`ctx.inject(['betterSidebar'], …)` 里 `registerTab({ id: TAB_ID, single: true, component })` 并 `workbench.bind({ betterSidebar })`。 |
| 4. Tab 根 | 现有 Stage 继续保活：`everOpened` + `display: open ? undefined : 'none'`。`open` 优先 `props.visible`（better-sidebar），否则才读本地 store。Close = `workbench.closeTab(TAB_ID)`，禁止 `stage.set(false)`。 |
| 5. 几何 | 根节点 `position: absolute; inset: 0;`（或 flex 100%）。**禁止** `position: fixed` + `--stage-top/left/width/height` 盖会话。`useStageBox` 在 Tab 模式短路。 |
| 6. attachStore | Tab `useEffect` 调 `workbench.attachStore(props.store)`，unload `detachStore`。否则 `setFocus` 写不了 width。 |
| 7. 跨包 | **MUST NOT** `import` hub client。只读 `window.__omnimuxWorkbench` / `__omnimuxSidebar` / `__omnimuxAuth`。 |
| 8. 单测 | 每包 `workbench-seat.test.js`：源码禁止 `claimProductStage`、禁止 `shell.overlay`（clip 除外）、`open()` 走 workbench。 |

广场例外：client 仍是 concat 工厂（`scripts/concat-client.mjs`）。新增 `sidebar-entry.js` fragment，改 `apply.js` / `plaza-shell.js`，**不要**把市场整包改成 ESM。`PlazaView` 填满 Tab，删除 `createPortal(document.body)` 与 `claim(STAGE_ID)`。

## 备选（否决）

| 方案 | 否决理由 |
|---|---|
| 库页继续 overlay | 产品已拍板废除；chrome 会藏右栏 |
| 缺 better-sidebar 回退 overlay | 再次 claim，把对话盖住（#313 已否） |
| 把焦点记进 `dsh-sidebar:v1` | 与官方 width/panelOpen 双写；升级社区包即碎 |
| 记忆只放内存 Map | 刷新丢失，违反 P0-6 |
| fork `dsh-better-sidebar` 加 slot | 产品树禁 fork 社区包 |
| 无会话时 `sessions.create({})` | #313 硬约束；空白会话无工作区 |
| 打开项目时卸掉 library Tab | 丢失筛选/滚动；双 Tab 共存是 better-sidebar 本职 |
| 广场继续 `document.body` portal | 全屏遮罩，违反 G1 |
| 顶角开关切 `chat` | 会把工作台一起收掉；「收起中间对话」= `gui` |

## 后果

- **更容易**：人机同面；Agent 不再按旧契约把库页写回 overlay。
- **更难**：跨 9 包改挂载；toggleCluster 依赖第三方 class 稳定性；门禁要从 overlay Stage 扩到 Tab 根。
- **不变**：不发明三栏壳；不卸载 `conversation`；不迁 Apps/Settings；不改 Host API / Agent 工具 / 4 层信息架构。

## 工程师入口

有序任务从 **T01** 开始（Hub 内核：Default Focus + 记忆 + closeTab + 对话开关）。完整文件级 WBS 见 [设计规格 §任务分解](../specs/2026-08-31-workbench-libraries-and-toggle-design.md#9-任务分解)。
