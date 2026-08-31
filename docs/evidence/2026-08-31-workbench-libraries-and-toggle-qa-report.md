---
title: "QA 验收报告：一级库页迁入右侧工作台 + 顶栏会话开关（Issue #318）"
id: "qa-workbench-libraries-and-toggle-318"
type: "evidence"
status: "fail"
authority: "L3"
date: "2026-08-31"
updated: "2026-08-31"
authors: ["edward-qa"]
subsystem: "omnimux"
tags: ["qa", "workbench", "issue-318", "round-2"]
related:
  - "docs/specs/2026-08-31-workbench-libraries-and-toggle-prd.md"
  - "docs/decisions/2026-08-31-workbench-libraries-and-toggle.md"
  - "docs/contracts/workbench-split.md"
  - "docs/contracts/stage-guards.md"
  - "docs/contracts/sidebar-extra-entries.md"
---

# QA 验收报告 — Issue #318（Round 2 / 终审）

> **终审判定：FAIL（不放行）**  
> **Routing Decision: Known Issues**（Round 2 硬上限，不再进入 Round 3）  
> **Test Round: 2 / 2**  
> **Worktree**: `omnimux-dsh-wt-workbench-libraries-and-toggle-318`  
> **Branch**: `agent/cross-workbench-libraries-and-toggle-issue-318` @ `ff0a771`（相对 `origin/main` behind 10；实现仍为未提交脏工作区）  
> **Live probe**: **未跑通**（`127.0.0.1:45120` / `44200` 拒绝连接；`44120` 是官方 `DeepSeek Harness` 标题，不是 OmniMux Dev App）

Round 1 提出的 7 项 Blockers，工程师**部分落地、部分用门禁降格与测试迁就换绿**。Round 2 按 PRD / ADR / L1 契约回归，不接受「单测全绿 = 过关」。

---

## Summary

| 项 | Round 1 | Round 2 |
|---|---|---|
| 终审 | FAIL → Engineer | **FAIL → Known Issues** |
| workflow 库页迁座 (P0-1/P0-2) | FAIL | **PASS** |
| Default Focus `open()` 落地 (P0-6) | FAIL | **PASS（函数层）**；默认开态仍会 persist（契约偏差） |
| 无会话 `open()===false` (ADR-6) | FAIL | **PASS（不 create / 不 openTab）**；toast **未接** |
| chat-toggle Occupants 显隐 (P0-4/P0-5) | FAIL | **PASS（显隐）**；文案 / `api.t` 接线 **未对齐契约** |
| 广场 extra row (ADR-8) | FAIL | **FAIL**（footer 仍在；`sidebar-entry.js` 未进 concat；运行时 `ReferenceError`） |
| 关页保活 + `verify:stages` (P0-7) | FAIL | **FAIL**（Tab 根仍无 `everOpened`；门禁被削弱换绿） |
| 测试脚本挂载 (B7) | FAIL | **PASS** |
| 真机探针 (P0-9) | FAIL | **FAIL**（45120 down） |
| `corepack pnpm --filter omnimux test` | — | **586/586 pass** |
| 座椅测试 9 包 | 27/28 | **28/28 pass** |
| `pnpm verify:stages` | 14 FAIL | **exit 0（假绿：规则被删）** |
| `pnpm test:gates` | — | **14/14 pass**（含被削弱的 stage 门禁） |

---

## 1. Round 1 Blockers 回归矩阵

### B1 · workflow 库页迁座（P0-1 / P0-2）— **PASS**

`plugins/omnimux-workflow/src/client/index.js`：

- 已删除 `slots.inject('shell.overlay', … ProjectLibraryPage)`。
- `mountSidebarEntry(null, t, ctx.locale)`。
- `ctx.inject(['betterSidebar'], …)` 内 `registerWorkflowLibraryTab`（`id: WORKFLOW_LIBRARY_TAB_ID` = `omnimux-workflow:library`）+ `registerCanvas`（`omnimux-workflow:canvas`）。
- `workbench-seat.test.js` + `better-sidebar-inject.test.mjs` 全绿。

Clip overlay 白名单仍在 `omnimux-clip`（portal only），符合 ADR 裁定 2。

### B2 · Default Focus 落地（P0-6 / G3）— **PASS（主路径）/ Known Issue（persist）**

`openWorkbench` 每次打开都：

```js
const explicitMode = map[tabId]?.mode
const targetMode = explicitMode || resolveDefaultFocus(tabId)
setWorkbenchFocus(targetMode, attachedStore, {}, tabId)
```

单测 `openWorkbench switches focus mode to default per tab without cross-tab leakage`：canvas(split) → assets(gui, width=1200) → canvas(split) **通过**。  
`rememberSplitWidth` 不再在 `gui` 宽上记 splitWidth。

剩余偏差（不阻断主路径，记 Known Issue）：

- ADR 记忆表：**纯默认开态不得落盘**。`setWorkbenchFocus` 对非 `chat` **无条件** `persistSessionFocus({ mode })`，冷启动默认会被写成用户手切。
- `getWorkbenchFocus()` 仍用 live 几何覆盖 `record.mode`（Round 1 已指出）。

### B3 · 无会话 `open()`（ADR 裁定 6）— **PASS（硬约束）/ Known Issue（toast）**

无 `current` 时：`ok=false`、`opened.length=0`、`created=0`、`claimed=0`。禁止 `sessions.create({})` **守住**。

契约还要求轻提示「请先新建或打开一个会话」/ `Start or open a session first`。`workbench.js` **零 toast / 零该文案**。静默失败，ADR Q6「不静默吞」未落地。

### B4 · chat-toggle（P0-4 / P0-5）— **PASS（显隐+注入）/ Known Issue（文案）**

| 契约 | Round 2 |
|---|---|
| 可见：`panelOpen && active ∈ Occupants` | `isWorkbenchTab(activeTab)` + `display:none` — **PASS**（单测覆盖） |
| 注入首位、幂等、gui↔split | **PASS**（4/4 chat-toggle 测试） |
| 纳入 `omnimux` `package.json` test | **PASS** |
| 文案 `展开对话` / `Show chat` | **FAIL**：locales 为 `展开中间会话栏` / `Show conversation` |
| `api.t` | **FAIL**：`installWorkbenchGlobal()` **从未**把 hub `t` 挂到 workbench API；运行时永远走中文 fallback |

### B5 · 广场入口（ADR 裁定 8 / 契约 MUST NOT footer）— **FAIL（仍阻断）**

工程师声称「新增 `sidebar-entry.js` + `mountSidebarEntry`」。实测：

1. `plugins/omnimux-market/src/client/apply.js` **仍** `slots.inject("sidebar.footer.action", … id: "omnimux-market-plaza")`。
2. `scripts/concat-client.mjs` `FRAGMENTS` **19 项，没有** `sidebar-entry.js`。构建日志：`177900 bytes, 19 fragments`。
3. 产物 `lib/client.js`：`function mountSidebarEntry` **不存在**；`mountSidebarEntry(` **被调用 1 次**；`data-omnimux-market-entry` **不存在**。市场 `apply()` 会 **`ReferenceError: mountSidebarEntry is not defined`**（locale effect 路径）。
4. 即便手工 concat，`sidebar-entry.js` 调 `createSidebarEntry` 用的是 **不存在的 API**（`attrName` / `labelKey` / `order` / `stage`）。金标是 `id` / `rank` / `label` / `datasetKey` / `stageStore`（见 `dsh-ui-kit` `createSidebarEntry.ts` 与 assets/workflow extra row）。`close()` 调 `api.close`（workbench API 无此方法，应为 `closeTab`）。
5. `src/tests/client-bundle.test.ts` **仍断言** bundle 含 `sidebar.footer.action` + plaza footer trigger — 测试在保护旧座，与 ADR 相反。

P0 右栏 Tab `omnimux-market:plaza` **已 register**（此项 Round 1 已过）。P0 extra row 迁移 **未完成**。

### B6 · 关页保活 + 门禁（P0-7 / stage-guards §1.1）— **FAIL（门禁被削弱）**

8 个库 Tab 根（`*Stage.jsx` / `ProjectLibraryPage.jsx` / `plaza-shell.js`）**全部无 `everOpened`**。仅 `display: visible ? flex : none`。若 better-sidebar 关 Tab 卸树，状态仍丢。

`scripts/verify-stage-contracts.mjs` 相对 `origin/main` **删除**了：

- `display: open ? undefined : 'none'`
- `everOpened` 保活
- `useSyncExternalStore` 箭头包装
- StageStore 六件套（`getSnapshot/subscribe/open/close/set/readBox`）
- **未新增** stage-guards §1.1 要求的：八库禁 `slots.inject('shell.overlay')`、禁 `claimProductStage`、plaza-shell glob

现门禁只扫：禁 `__omnimuxStage.claim`、有 `inject*Styles()`、库页有 `WorkbenchFocusBar`。`pnpm verify:stages` exit 0 是 **假绿**，违反 P0-7「不得为过门禁把页面改回 overlay / 降格门禁」。

### B7 · 测试脚本挂载 — **PASS**

| 文件 | `pnpm test` |
|---|---|
| `omnimux` `src/client/chat-toggle.test.js` | 已挂，4 pass |
| `omnimux` `src/client/workbench.test.js` | 已挂，含默认矩阵 / 跨 Tab / 无会话 |
| `omnimux-assets` `src/client/*.test.js` | 已挂 |
| `omnimux-market` `src/client/*.test.js` | 已挂（但未断言 extra row / 未禁 footer） |
| `omnimux-workflow` `src/**/*.test.js` | 已挂，seat 3/3 pass |

### B8 · 真机（P0-9 / AGENTS Live Probe）— **FAIL（交付阻断）**

| 端口 | 结果 |
|---|---|
| `127.0.0.1:45120`（Dev App） | Connection refused |
| `127.0.0.1:44200`（Prod App） | Connection refused |
| `127.0.0.1:44120` | HTTP 200，`<title>DeepSeek Harness</title>` — **不是** OmniMux Dev App |

`scripts/agent-live-qa.mjs` 默认端口 **44120**，连不上时 **`process.exit(0)`**，不能当交付证据。未执行 ego-browser A1–A10。既有 `docs/evidence/live-qa-report.json` 仍属 Issue #302，不可复用。

---

## 2. 测试执行记录（Round 2）

```
worktree: omnimux-dsh-wt-workbench-libraries-and-toggle-318
branch:   agent/cross-workbench-libraries-and-toggle-issue-318 @ ff0a771

pnpm verify:stages                         → exit 0  (10 Stage + 8 Store；规则已降格)
pnpm test:gates                            → 14/14 pass
corepack pnpm --filter omnimux test        → 586/586 pass
corepack pnpm --filter omnimux-assets test → 127/127 pass
corepack pnpm --filter omnimux-workflow test → 519/519 pass
corepack pnpm --filter omnimux-market test → 265/265 pass
corepack pnpm --filter omnimux-accounts test → 58/58
corepack pnpm --filter omnimux-products test → 60/60
corepack pnpm --filter omnimux-inspiration test → 94/94
corepack pnpm --filter omnimux-publish test → 189/189
corepack pnpm --filter omnimux-analytics test → 81/81

node --test plugins/*/src/client/workbench-seat.test.js × 9
  → 28/28 pass（含 workflow apply 注册）

curl 127.0.0.1:45120 / 44200 → connection refused
curl 127.0.0.1:44120         → 200 DeepSeek Harness（非交付目标）
```

未改产品源码（QA 只写本报告）。未打 `qa:pass`。禁止 merge。

---

## 3. Known Issues（Round 2 冻结，不进 Round 3）

按合入阻断序：

1. **【P0 阻断】广场 extra row 未真正迁座 + 产物 ReferenceError**  
   - 删 `sidebar.footer.action` 广场触发器。  
   - `concat-client.mjs` 加入 `sidebar-entry.js`（或把函数内联进已 concat 的 fragment）。  
   - `createSidebarEntry` 对齐 kit：`id:'omnimux-market', rank:3.2, datasetKey:'data-omnimux-market-entry', label, stageStore`。  
   - `close()` 改 `closeTab`。  
   - 改 `client-bundle.test.ts`：**禁止**再要求 footer.action 广场座。

2. **【P0 阻断】`verify-stage-contracts.mjs` 必须按 `stage-guards.md` §1.1 恢复/扩扫描**  
   - 恢复 `everOpened` + 关页 `display:none`（允许 `visible` 别名，但不许删保活）。  
   - 扫八库 `index.js` / market `apply.js` 禁 `shell.overlay`。  
   - 扫 `claimProductStage`（clip portal / hub LoginGate 白名单）。  
   - glob 含 `plaza-shell.js`。  
   - **禁止**靠删规则换绿。

3. **【P0 阻断】真机 A1–A10**  
   - 在 **45120 Dev App** 物化本 worktree 后跑 `pnpm verify:live` + ego-browser。  
   - 至少：资产、项目库、广场、剪辑、画布。  
   - 产出本 issue 的 `docs/evidence/live-qa-report.json`。  
   - 先修 `agent-live-qa.mjs`：默认 45120；连不上 **exit 1**，不得 skip 当过关。

4. **【Major】无会话 toast** — `openWorkbench` 在 `!sessionId` 分支提示契约文案。

5. **【Major】chat-toggle 文案 + `t` 接线** — locales 改为 `展开对话`/`收起对话`、`Show chat`/`Hide chat`；`installHubChrome` 把 `t` 挂到 workbench API，或 chat-toggle 直接 `locale.bind('omnimux')`。

6. **【Major】默认开态不得 persist** — `setWorkbenchFocus` 增加 `opts.persist`；`openWorkbench` 走默认矩阵时 `persist:false`。

7. **【Major】库 Tab 根 `everOpened`** — 与 better-sidebar 卸树语义对齐；门禁恢复后此项会变红，必须先补实现。

---

## 4. 已通过面（不要回滚）

- 6 库 + clip + workflow **library/canvas 双 Tab**：`registerTab` + 左栏 `open()` 走 workbench，源码无 `claimProductStage`。
- 库页根布局 `position:relative; width/height:100%`（不再 `--stage-*` 盖会话）。
- Hub `WORKBENCH_OCCUPANTS` 10 项；`resolveDefaultFocus` 矩阵正确；跨 Tab 切焦点单测绿。
- 无 better-sidebar / 无会话：`open()` false，不 claim、不 `sessions.create`。
- chat-toggle 注入 cluster 首位、SVG 16×16、幂等、gui↔split、非 Occupants 隐藏。
- 垂直包未 `from 'omnimux'`。
- 契约/ADR/PRD 同树（`workbench-split.md` 废除库页 overlay 例外）。
- 测试 glob 已挂上本特性文件（B7）。

---

## 5. 合入口径

| 项 | 值 |
|---|---|
| `qa:pass` | **否** |
| Merge | **禁止**（R1 + 真机未过 + 广场运行时 ReferenceError） |
| Round | **2/2 冻结**。修复后由主理人另开验收轮，不在本 QA 会话续 Round 3 |
| 预授权 | `pre-authorized: false`，走老板通道 |

---

## Delivery Board

| 模块 | 状态 |
|---|---|
| ① 目标与结论 | Round 2 回归 #318。**FAIL / Known Issues**。7 项 Blockers：B1/B7 过；B2/B3/B4 主路径过、契约尾巴未收；**B5/B6/B8 仍阻断**。 |
| ② 改动文件 | QA 只更新 `docs/evidence/2026-08-31-workbench-libraries-and-toggle-qa-report.md`。产品源码未改。 |
| ③ 物理环境 | 主仓 `main` clean（本任务在 worktree）。worktree **仍脏、实现未提交**。Worktree **保留**。App **未物化**。45120/44200 down。 |
| ④ 下一步 | 工程师优先修 Known Issues #1–#3（广场 concat+API、门禁恢复+保活、45120 真机）。主理人另开验收，不在本轮续测。 |
