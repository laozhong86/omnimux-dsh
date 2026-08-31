---
title: "Workbench split live QA — 2026-08-31"
id: "evidence-workbench-split-live"
type: "evidence"
status: "accepted"
authority: "L3"
date: "2026-08-31"
updated: "2026-08-31"
authors: ["x", "agent-architect"]
subsystem: "omnimux"
related:
  - "docs/contracts/workbench-split.md"
  - "docs/decisions/2026-08-31-workbench-split.md"
---

# Workbench split live QA — 2026-08-31

Profile `~/.omnimux-dev`. Dev App currently serves `http://127.0.0.1:44120/` (`DSH_HOME` on this Host is mixed; live SHA matched worktree hub/clip `lib/client.js`). Screenshots and machine JSON sit next to this file; this Markdown is the lint-facing record.

## Phase 1 — seat

- Click 「视频剪辑」 does **not** set `data-dsh-product-stage`.
- Official conversation stays mounted beside OpenReel in `dsh-better-sidebar`.
- Collapse (`panelOpen: false`) keeps tab id `omnimux-clip:studio` in the session snapshot.
- 「资产库」 still claims overlay; clicking clip from there releases the stage.
- Screenshot: [2026-08-31-workbench-split-clip-45120.png](./2026-08-31-workbench-split-clip-45120.png)
- Machine log: [2026-08-31-workbench-split-phase1-live-qa.json](./2026-08-31-workbench-split-phase1-live-qa.json)

## Phase 2 — focus

ego-browser task space `workbench split focus probe` (id 271), URL `http://127.0.0.1:44120/`.

| Mode | Geometry | Conversation | Screenshot |
|---|---|---|---|
| `gui` | `panelOpen:true`, width 1672, `#root` margin-right 1672px | mounted | [2026-08-31-workbench-split-focus-gui-44120.png](./2026-08-31-workbench-split-focus-gui-44120.png) |
| `chat` | `panelOpen:false`, `#root` margin-right 0 | mounted, composer visible | [2026-08-31-workbench-split-focus-chat-44120.png](./2026-08-31-workbench-split-focus-chat-44120.png) |
| `split` | `panelOpen:true`, width 1028 | mounted beside OpenReel | [2026-08-31-workbench-split-focus-split-44120.png](./2026-08-31-workbench-split-focus-split-44120.png) |

- Hostbar radios `对话` / `分栏` / `工作台` write right-panel geometry. Never claim product-stage.
- In-panel radios are hidden while `chat` (panel collapsed). Restore via `setFocus('split'|'gui')` or re-click 「视频剪辑」 (`lastOpenMode`).
- Re-click after `gui` then `chat` restored `gui` (width 1672).
- Canvas default 15:85 magnet skips while focus is `gui` or `chat` (unit-tested).
