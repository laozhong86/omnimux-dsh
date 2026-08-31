---
title: "Workbench split — 对话可收、插件 GUI 常驻"
id: "contract-workbench-split"
type: "contract"
status: "living"
authority: "L1"
date: "2026-08-31"
updated: "2026-08-31"
authors: ["x", "agent-architect"]
subsystem: "omnimux"
related:
  - "docs/contracts/sidebar-extra-entries.md"
  - "docs/contracts/openreel-vendor-contract.md"
  - "docs/contracts/gxgen-workflow-migration.md"
  - "docs/contracts/client-ui-remediation.md"
---

# Workbench split

Normative seat for plugin GUIs that must sit **beside** the official conversation (human + Agent both driving the same surface). Library / catalog pages stay on `shell.overlay`.

## Two seats, do not mix

| Kind | Examples | Seat | Left-row click |
|---|---|---|---|
| **Library** | 资产 / 产品 / 账号 / 灵感 / 发布 / 分析 / 专家馆 / 项目库 | `shell.overlay` + `claimProductStage` | Covers the conversation column; hides `[data-dsh-panel-host]` |
| **Workbench** | 视频剪辑 Tab；打开项目后的画布 Tab | `ctx.betterSidebar.registerTab` on `[data-dsh-panel-host]` | `window.__omnimuxWorkbench.open({ tabId })`. **MUST NOT** set `data-dsh-product-stage` |

Official AppFrame is already `sidebar | conversation | details`. Workbench does **not** replace `conversation`. The plugin GUI lives in the community `dsh-better-sidebar` panel (width up to the viewport). Official `details` stays at 300–520px and is closed (`layout.closeDetails`) when a workbench tab opens.

## Layout

```
左：官方 sidebar + 新会话下方入口
中：官方 conversation（不可卸载）
右：dsh-better-sidebar 工作台 Tab（可收起，Tab 状态按会话持久化）
```

「关掉对话框」= 收起右栏（`panelOpen: false`）或把右栏拉到 `viewport − 左栏`。`conversation` slot stays mounted. There is no official `hideConversation`.

## Focus (Phase 2)

`window.__omnimuxWorkbench.setFocus(mode)` writes **right-panel geometry**. It never unmounts `conversation`.

| mode | Geometry | Conversation |
|---|---|---|
| `split` | Default width (~420px conversation, rest GUI). Restores the last split width if the user had one. | Visible |
| `gui` | Panel width = `viewport −` official left rail. Conversation is squeezed by better-sidebar `#root { margin-right }`. | Mounted, visually collapsed |
| `chat` | `panelOpen: false`. Tab ids stay in the session snapshot. | Full remaining width |

Re-clicking a workbench left-row while `chat` restores `lastOpenMode` (`split` or `gui`). The in-panel `.omnimux-workbench-focus` is hidden while the panel is collapsed; restore also via better-sidebar's own expand cluster. Canvas `applyProjectCanvasRatio` MUST skip while focus is `gui` or `chat` so the 15:85 magnet does not fight the switch.

Occupant tabs host `.omnimux-workbench-focus` (hub CSS). Vertical plugins copy a small `WorkbenchFocusBar` that talks to the window global — they MUST NOT `import` the hub client.

## Global

Hub installs `window.__omnimuxWorkbench` at module top-level (same pattern as `__omnimuxStage` / `__omnimuxSidebar`). Vertical plugins **MUST NOT** import the hub client. They:

1. `registerTab({ id, single: true, path sentinel })`
2. Bind a StageStore-shaped adapter into `createSidebarEntry` whose `open()` calls `window.__omnimuxWorkbench.open({ tabId, path })`
3. `attachStore(props.store)` from the Tab component so default width can `store.reduce` (public API has no `setWidth`)

`open()` sequence: `closeDetails` → **release any current `data-dsh-product-stage`** (library overlay would hide the panel) → wait for session snapshot → close empty Files seed tabs → `openTab({ type, id, path: sentinel })` → default width ≈ conversation 420px / GUI the rest. NEVER `claim` a stage.

## MUST NOT

- Shadow `root` / `sidebar` / `conversation` / `details`.
- Draw a second composer inside `shell.overlay`.
- Claim `data-dsh-product-stage` when opening a workbench tab (product-stage chrome hides the panel host).
- Fall back to overlay or `details` when `dsh-better-sidebar` is missing. Host stays; Tab is absent.
- Move library pages into the right panel in this contract. That is a later product decision.

## Occupants

| Tab id | Owner | Left row |
|---|---|---|
| `omnimux-clip:studio` | `omnimux-clip` | `[data-omnimux-clip-entry]` — workbench, not overlay |
| `omnimux-workflow:canvas` | `omnimux-workflow` | not a left-row; opened after a project session |

Clip overlay (`ClipStage`) remains **only** for canvas-node portal (`openFromCanvas`, does not claim). Sidebar clicks MUST NOT call `stage.open()`.
