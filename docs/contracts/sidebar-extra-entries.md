---
title: "Sidebar extra entries (under 新会话)"
id: "contract-sidebar-extra-entries"
type: "contract"
status: "living"
authority: "L1"
date: "2026-08-26"
authors: ["x", "agent-architect"]
subsystem: "omnimux-assets"
---

# Sidebar extra entries (under 新会话)

Normative look for any extra row injected under the official **新会话** button. Official workspace session rows win on size; this file is the product rule so new plugins do not invent a smaller row.

Official source of the numbers: `dsh-client-ui-workspace` session row (`.sessionRow` height 32px, `.title` 14px / 20px line-height). Extra-row icons use 14px so they match the 14px label optically (official 16px icon buttons look smaller because the glyph does not fill the box).

## Metrics

| Token | Value | Why |
|---|---|---|
| Row height | `32px` | Same as official session rows |
| Horizontal padding | `0 8px` | Same as official session rows |
| Icon | `14×14` | Same optical size as the 14px label |
| Label | `font: var(--dsw-font-s-14)` fallback `14px / 20px` | Same as official `.title` |
| Gap icon→label | `6px` | Same as official session row |
| Corner | `8px` | Same as official session row |
| Hover / active | `--dsw-alias-interactive-bg-hover` / `--dsw-alias-interactive-bg-active` | Same as official session row |

MUST NOT use 13px labels or 16px filled icons on these rows. MUST NOT invent a second visual scale next to 工作区. Icon box and label font-size MUST be the same number (14px).

## Current occupants

| Marker | Owner | Label |
|---|---|---|
| `[data-omnimux-apps-entry]` | `omnimux` | 应用 / Apps |
| `[data-omnimux-app-tabs]` | `omnimux` | Dynamic app tab rows (see below) |
| `[data-dsh-taskboard-entry]` | `dsh-taskboard-plugin` (fork) | 任务看板 / Taskboard |
| `[data-omnimux-esc-entry]` | `omnimux-gallery` | 专家·技能·连接器 |
| `[data-dsh-omnimux-workflow-entry]` | `omnimux-workflow` | 项目 / Projects（rank 5，原「工作流」→「项目库」→「项目」） |
| `[data-dsh-omnimux-new-project-entry]` | `omnimux-workflow` | 新建项目 / New Project（展开：`kind:'inline'` 并排「新建会话」。收起：CSS 藏项目按钮，点官方加号弹出「新建会话 / 新建项目」，选中再 click 原按钮。折叠态属性在 AppFrame，不在 html。收起 wrapper 可用 `display:contents`，但官方加号上的 `flex:1` **必须**收回 `flex:none` + 36×36，否则会吃掉会话列表高度变成竖条） |
| `[data-omnimux-assets-entry]` | `omnimux-assets` | 资产库（rank 4） |
| `[data-omnimux-products-entry]` | `omnimux-products` | 产品库（rank 6，不重排旧行） |
| `[data-omnimux-inspiration-entry]` | `omnimux-inspiration` | 灵感库（rank 7，不重排旧行） |
| `[data-omnimux-publish-entry]` | `omnimux-publish` | 发布（rank 9，尾部追加，不重排旧行；styleId `omnimux-publish-entry-styles`） |
| `[data-omnimux-analytics-entry]` | `omnimux-analytics` | 数据分析（rank 10） |

## Offline vs Cloud Visibility

Extra rows follow [docs/contracts/plugin-offline-cloud-matrix.md](./plugin-offline-cloud-matrix.md):
- `access: 'offline'`: Always visible. Clicking directly opens the stage without login blocking. (Workflow, Assets, Products, Clip).
- `access: 'cloud'`: Hidden when unauthenticated (`logged_in !== true`). Dynamic appearance upon login. (Analytics, Publish, Accounts, Inspiration).
- Policy D (Visitor Polite Interception): Cancelling a write-gate login prompt suppresses subsequent navigation prompts for the remainder of the session.

New extra rows MUST reuse these metrics (copy the CSS block or import the same numbers). A PR that adds a 新会话-below row with a different font-size or icon size is rejected.

## Placement

There is no official slot under 新会话. Extra rows are DOM-injected after the new-session button. Order: 新会话 → 应用 → [app tab rows…] → 任务看板 → 专家·技能·连接器. Do not register these as `sidebar.footer.action` (that seat is the Settings foot).

## Dynamic app tabs

Opened Apps get a persistent tab row under the fixed 应用 entry. Host owns the records (`$DSH_HOME/omnimux/apps/tabs.json`, mode `0600`, dir `0700`) and the endpoints `GET/POST/PATCH/DELETE /omnimux/apps/tabs*`; the sidebar renders the filtered view. First open creates the row; install alone does not.

| Rule | Detail |
|---|---|
| Metrics | Same 32px / `0 8px` / 14px icon / 14px-20px label / 8px corner table above — the tab rows are contract rows, not a second visual scale |
| Container | `[data-omnimux-app-tabs]`, inserted as the 应用 entry's `nextSibling`; empty container renders no rows so 应用 and 任务看板 stay flush |
| Row marker | `data-omnimux-app-tab="<catalog id>"`; classes `omnimux-app-tab*`; pinned rows also carry `data-pinned="true"` and a pin glyph at the row head |
| Row click | Dispatches the hub `omnimux-app-open` event (`openApp(id)`); the app claims the stage. Tab-click login gating is a P1 enhancement, not part of the row |
| Active state | Row sets `data-active="true"` while `document.documentElement.dataset.dshProductStage === 'omnimux-app-<id>'`; listens on `dsh-product-stage`, clears on every other claim |
| Hover actions | Three 14px-optical icon buttons at the row end (visible on hover / focus-within): ✕ 删除记录 = remove the record only, the app stays installed (DELETE); 📌 固定/取消固定 = move into the always-first pinned group with a pin badge (PATCH `{pinned}`); ⬆ 置顶 = one-shot move to the front of its group, does not change pinning (PATCH `{order:"top"}`) |
| Sorting | Host-computed: pinned group first (key `toppedAt ?? pinnedAt ?? lastOpenedAt`, descending), then the non-pinned group (key `toppedAt ?? lastOpenedAt`, descending). Opening refreshes `lastOpenedAt` and clears the one-shot `toppedAt` |
| Refresh | Initial `GET /omnimux/apps/tabs`; afterwards the hub dispatches the DOM event `omnimux-app-tabs-changed` after every successful tab write (open upsert, pin, top, remove, uninstall linkage) and the rows re-fetch. Rows for uninstalled / unlisted apps are filtered by the Host view but kept on disk |
| Cap | 64 rows; the least-recent non-pinned row is evicted past the cap |

MUST NOT fake a tab as a real session row (no `conversation.view`, no session data), and MUST NOT render tab rows with any metric other than the table above.

## Independent pages

These rows are first-level product pages, not session views.

| Rule | Detail |
|---|---|
| Seat | `shell.overlay` (same as Apps / ESC gallery) |
| Cover | Whole conversation column, including official header and composer. Overlay `z-index` is 200 so session-header utilities cannot steal clicks. |
| Top chrome | `12px 20px 12px` on every first-level page, same as official conversation header (`padding: 12px 28px 0 20px`). Window-drag is turned off while the page is open, so do not add a 44/56px inset. |
| Mutual exclusion | Opening one page dispatches `dsh-product-stage` so the others close. Session rows lose `aria-selected` highlight while a product page is open; only the extra-row `data-active` stays on. |
| Layout chrome | While a product page is open, hide better-sidebar's fixed `toggleCluster`, the official `conversation.session.header`, **and the right-panel host** (`[data-dsh-panel-host]`). Also force `--dsh-sidebar-width` and `--dsh-sidebar-height` to `0` so `#root` is not still squeezed. `shell.overlay` stays click-through when no product page is open so those buttons remain usable. Do not hide the panel host when `data-dsh-product-stage` is absent. |
| Session click | Clicking **any** workspace session row (`[role="treeitem"]`, selected or not) must leave the product page and return to chat. Official workspace treats a click on the already-selected row as a no-op, so product pages must close that case themselves. Clicks on buttons inside a row (pin / delete) MUST NOT close the page. **新会话** also leaves: official `.newSession` / brand shortcut (`aria-label` 新建会话), the workspace-group plus (`在“x”中新建会话`), and the collapsed menu pick「新建会话」. Official `startSession` **reuses** an existing blank session, so the overlay must close itself — otherwise the click looks dead. 「新建项目」and the collapsed menu pick「新建项目」MUST NOT use this path (project flow releases the stage on success). Collapsed-rail plus that only opens the menu MUST NOT leave until the user picks「新建会话」(coordinator capture swallows that click). |

MUST NOT register these pages as `conversation.view`. That slot is a session-hosted tab (chat / trajectory / team run). A first-level product page that lives there will keep the session header and composer.

Project-session canvas (workflow scheme C) does **not** set `data-dsh-product-stage`. The first-level library page releases the stage before opening the canvas tab, so this chrome MUST NOT hide the right panel for that session.

### Overlay external-store binding

If a `shell.overlay` stage uses React `useSyncExternalStore` against host faces (`ctx.locale`, auth, settings scope), follow [`client-external-store.md`](./client-external-store.md). Passing a class/instance method like `locale.subscribe` bare into the hook drops `this`, crashes the slot entry, and leaves only `data-slot-error="shell.overlay"` — which looks like a blank first-level page after a successful sidebar click.
