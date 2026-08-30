# omnimux-dsh

OmniMux landing on official DeepSeek Harness as out-of-tree plugins. This product tree lives at `/Users/x/Desktop/Project/dsh-plugin/product/omnimux-dsh`. Hub is `omnimux`. Coding agents edit this tree. Platform plugins include `omnimux-workflow`, `omnimux-assets`, `omnimux-clip`, `omnimux-products`, `omnimux-inspiration`, `omnimux-accounts`, `omnimux-gallery`, `omnimux-analytics`, `omnimux-publish`.

## Agent Execution & CWD Invariants (Agent 行为与路径硬约束)

- **Git & CWD 锚定**：当前工作区 `./`（`/Users/x/Desktop/Project/dsh-plugin/product/omnimux-dsh` 或派生的 worktree）**就是 Git 仓库根目录**。
- **禁止工作目录越级**：外层 `dsh-plugin` **不是** Git 仓库。**严禁**执行 `cd ..` 或给 bash 工具传入外层 `workdir`。
- **脚本入口统一**：优先使用 `package.json` 中的 `pnpm <script>`（如 `pnpm wt ...`、`pnpm test`、`pnpm doctor`、`pnpm smoke`），禁止猜测父级脚本路径。

## Hard bounds

- MUST NOT treat a sibling official `deepseek-harness/packages/` tree as product source. MUST NOT open feature PRs upstream. Ship `dsh-plugin` packages and `dsh plugin add`.
- The Electron shell (shipping) is `/Users/x/Desktop/Project/omnimux-desktop-fork` (fork of anywhere-labs desktop; sync per its `docs/contracts/upstream-sync.md`). The retired slim shell `/Users/x/Desktop/Project/omnimux-desktop` is archived read-only. MUST NOT recreate `apps/desktop/` on the official clone.
- Settings "DSH plugins" install into the `omnimux` profile bundles via packaged `dsh plugin`. MUST NOT remove `@deepseek-ai/dsh-base`, `@deepseek-ai/dsh-web-app`, or `omnimux`.
- Plugin config and plugin management MUST use official Settings plugin seats (`settings.plugins.tab` or `settings.plugin.item`). MUST NOT add a first-level `settings.section` for a plugin's knobs, install UI, or keys. Placement: [docs/contracts/settings-ui.md](docs/contracts/settings-ui.md).
- A published catalog app's own user page (`client: true`, e.g. accounts) belongs to the app stage (`shell.overlay` + the hub `omnimux-app-open` event), NOT to any Settings seat. Settings keeps the install channels and the full bundle inventory; the app page opens from the Apps card / sidebar tab.
- Official-clone overlays MUST live in `patches/` against the pin in `docs/harness-pin.md`. Apply/reset: `scripts/apply-harness-overlay.sh` and `scripts/reset-harness-overlay.sh`. MUST NOT accumulate product edits only as uncommitted diffs in the official clone. Bumping that pin or a dsh RC MUST load skill `omnimux-rc-upgrade` and finish its report; MUST NOT claim the bump done with `screens.*: missing`.
- OmniMux core MUST live in `plugins/omnimux/`: product chrome (logo, wordmark, tab title, favicon), auth, credentials, model/provider routes, hub Settings/Apps UI, and execution seams. MUST NOT add a sibling plugin for those (`omnimux-brand` and the same split under another name are forbidden).
- A new plugin in this tree MUST be focused on its own business domain (workflow canvas, e-commerce assets, accounts, video clip, publishing). A plugin MUST NOT implement hub chrome, auth, or provider routes.
- MUST call `omnimux` the execution hub. MUST NOT call it a gateway or implement a second OmniMux router inside it. I/O: [docs/contracts/hub.md](docs/contracts/hub.md).
- A plugin MUST NOT import the hub, ship a brand-specific HTTP client, or store provider keys. It inputs through `ctx.get` / `omnimux_*` seams and writes only its own domain store.
- MUST NOT claim live video/image generation unless media submission returned `mode: "live"`. `mode: "stub"` is a file copy.
- Provider HTTP + keys live in `omnimux` only. Neutral seams and official-only tools are listed in `docs/contracts/hub.md`.
- MUST NOT commit secrets. Inject with `omnimux tokens exec` or the process environment.
- Briefing (`docs/briefing.md`) is project memory, not truth. On conflict, live code, this file, and `docs/contracts/` win.
- AGPL trees (ArcReel, 墨音) stay isolate-run. MUST NOT merge them here.
- **OpenReel 完整微应用铁律**：`omnimux-clip` 必须以 MIT 开源 `Augani/openreel-video` 官方**全套源码**（原生 GUI + WebCodecs/WebGPU/Web Audio 管线）为真源，完整 Vendorize 到 `src/client/openreel/`，落地为 DSH 侧边栏 Tab 插件（`ctx.betterSidebar.registerTab`，id `omnimux-clip:studio`）。**严禁**把 OpenReel 拆成 Headless 引擎再手写 GUI；**严禁**自研官方已有的多轨时间轴、资源库、属性面板、视口、解码/波形/磁吸/花字/导出。插件自研范围仅限 Cordis 生命周期、Tab 挂载、Host 磁盘持久化、Agent RPC 映射、以及把官方 CSS 变量映射到 DSH `--dsw-*` token。违反者 PR 一律驳回。详见 [docs/contracts/openreel-vendor-contract.md](docs/contracts/openreel-vendor-contract.md)。
- Dev/test/prod layering MUST follow [docs/contracts/dev-pipeline.md](docs/contracts/dev-pipeline.md): the production profile (`omnimux`) MUST NOT link working trees (materialized copies only, synced via `yarn omnimux:sync` / `scripts/sync-to-app.sh`); dev profiles (`omnimux-dev-*` under `~/.dsh-dev`) MUST link and MUST link at most one in-progress plugin each. MUST NOT hand-rsync/cp into any profile. Day-to-day agent ops run from `/Users/x/Desktop/Project/omnimux-desktop-fork` (`yarn omnimux:dev` / `yarn omnimux:sync` / `yarn omnimux:restart` / `yarn omnimux:stage`).
- **Target Profile Materialization Invariant (Profile 物化契约)**：物化交付必须走 `scripts/sync-to-app.sh`（或 `yarn omnimux:sync`）。默认仅物化到开发版 `~/.omnimux-dev`（安全隔离），可通过 `--prod`（`~/.omnimux`）、`--dsh`（`~/.dsh`）或 `--all`（全部 Profile）指定同步目标。严禁猜测环境变量 `$DSH_HOME`。
- **Stage & StageStore 契约铁律**：所有一级 Stage 页面及其状态机，必须通过静态门禁 `pnpm verify:stages`。其 `stage-store.js` 必须 100% 消费 `dsh-ui-kit` 标准 `createStageStore`（或严格实现六件套 `getSnapshot`, `subscribe`, `open`, `close`, `set`, `readBox`），严禁私写缺失 `open()/close()` 的残缺 store。
- **Agent 交付防假阳性铁律 (Live Probe Requirement)**：凡是改动前端 Client、Stage 页面或侧边栏入口的 Issue/任务，**严禁仅凭单测全绿汇报完成**。交付前必须执行 `pnpm verify:live <stage>`，在真机端口（`45120` Dev App 或当前运行实例）完成真实的侧栏触发、Stage 状态机互斥、DOM 节点与渲染内容非空断言，并生成 `docs/evidence/live-qa-report.json`。未跑通真机探针判定为交付阻断。
- Git / PR for this tree MUST follow [docs/contracts/plugin-git-pr.md](docs/contracts/plugin-git-pr.md): branch + PR to `laozhong86/omnimux-dsh` base `main`; no direct push to `main`; merge authority follows the risk matrix — R0/R1 and production-impacting changes require the boss, while R2/R3 may use `pnpm auto:run <issue_id>` only after explicit maintainer pre-authorization and every required quality gate passes. Multi-agent parallel tasks MUST use isolated worktrees (`./scripts/git-wt.sh start <plugin> <topic>`) to avoid file collision and dirty workspace contamination; the main workspace must stay pure on `main`. Open-PR follow-up uses skill `omnimux-pr-handoff` and local `.workbuddy/pr-board.md`. UI acceptance MUST use `ego-browser`; missing browser evidence is a hard failure. Do NOT apply the desktop-fork `fork`/`omnimux` topology here.
- **Delivery Board Invariant (交付透明看板铁律)**：Agent 在每个任务/对话轮次的最终回复中，**严禁只给模糊的文本结论**。必须显式输出结构化【交付透明看板 (Delivery Board)】，清晰包含 4 大模块：① **本次任务目标与交付结论**；② **已完成工作与改动文件清单**（精确到路径）；③ **物理环境与收尾状态**（主仓暂存区是否 Clean、当前 Worktree 是否已销毁、分支是否已合并、App 是否已物化）；④ **下一步计划与建议**。缺少状态看板判定为未完全交棒。

## Map

| Path | Role |
|---|---|
| `CONTEXT.md` | Terms, two-agent split, shot statuses |
| `design.md` | Plugin-series UI design system (v2.0): DSH native UI tokens (`--dsw-alias-*` / `--dsw-specific-*`), 32px height baseline, 8px radius, single-row toolbar, Popover dropdowns, SVG icons, WCAG AA contrast, and component standards. Single source of truth. MUST load before any client-UI work. |
| `docs/README.md` | **全局文档导航门户**：四层权威金字塔与全量文档索引矩阵 |
| `docs/capabilities.md` | Real / stub / absent |
| `docs/contracts/docs-governance-standard.md` | **开发文档工程实践管理规范**：四层金字塔、元数据标准、生命周期与 CI 门禁 |
| `docs/contracts/hub.md` | Execution-hub terms, I/O, seams, official-only list |
| `docs/contracts/settings-ui.md` | Where plugin UI sits in official Settings (no first-level plugin nav) |
| `docs/contracts/sidebar-extra-entries.md` | Extra rows under 新会话 (32px / 14px / 14px) and first-level page top chrome (`12px 20px 12px`, same as session header). Skill: `dsh-plugin-dev`. |
| `docs/contracts/ui-design-guidelines.md` | **OmniMux UI 交互与视觉规范**：单行工具栏、深色浮层菜单、矢量 SVG 图标、32px 控件高与 8px 圆角体系。客户端改动必读。 |
| `docs/contracts/model-list-ownership.md` | Who owns the OmniMux model list (plugin patch only; user layers set `agent-default-model` only) |
| `docs/contracts/series.md` | Disk fields + error codes |
| `docs/contracts/briefing.md` | Briefing create/update/delete. Memory, not truth |
| `docs/briefing.md` | Agent–human project briefing log |
| `plugins/omnimux/` | Execution hub. Verticals I/O through its seams. Apps shelf client (temporarily taken down from `client/index.js`; source kept in `src/client/apps-*`, `catalog.json`). Catalog contract: [docs/contracts/apps-catalog.md](docs/contracts/apps-catalog.md). |
| `plugins/omnimux-accounts/` | Pinned first-level plugin: own sidebar row under 新会话 (rank 3), standalone product page (`shell.overlay`, opened directly via the product stage — not the Apps catalog / `omnimux-app-open`). Host `/omnimux/accounts` only. |
| `plugins/omnimux-assets/` | 创作资产库：角色/场景/风格包/道具/知识包/自定义。**导入物化到 `$DSH_HOME/omnimux/assets/data/files/<id>/`**（用户原文件不删）。Host `/omnimux/assets`，tools `assets_list` / `assets_search` / `assets_get` / `assets_upload`。合同：`docs/contracts/project-assets-contract.md`。 |
| `plugins/omnimux-products/` | 产品库：要卖的货（名称 + 卖点/人群/品牌 + 主图路径引用）。Host `/omnimux/products`，tools `products_list` / `products_search` / `products_get` / `products_read_media` / `products_create` / `products_update`。侧栏 rank 6。 |
| `plugins/omnimux-inspiration/` | 灵感库一级页（`shell.overlay`，sidebar rank 7）。浏览器只打 Host `/omnimux/inspiration`；云 HTTP 在中枢 `withPat`。 |
| `plugins/omnimux-gallery/` | 专家·技能·连接器一级页（`shell.overlay`），技能双数据源（本地 + SkillHub 在线源）。 |
| `plugins/omnimux-workflow/` | 工作流无限画布（拖拽 DAG、Agent 工具查询/执行），生成经 hub seam 提交。**作品媒体落项目根** `assets/` + `artifacts/`；执行态仍可暂存 `$DSH_HOME/omnimux/workflow/`。 |
| `plugins/omnimux-clip/` | 剪辑工坊：完整套用 OpenReel Video (MIT) 官方 GUI+管线，P1 挂 `dsh-better-sidebar` Tab（`omnimux-clip:studio`）；P2 `clip_*`；P3 与画布 JSON 事件桥。 |
| `plugins/omnimux-publish/` | 账号发布中心（`shell.overlay`，sidebar rank 9）：草稿→多账号分发→per-account 子任务台账。Host `/omnimux/publish`，tools `publish_*` 9 个；执行只走中枢 `omnimux_publish_*` 官方通道，不直连平台、不存 secret。 |
| `docs/contracts/openreel-vendor-contract.md` | **OpenReel 完整微应用契约**：官方 GUI+管线整包 Vendorize；禁止 Headless 拆分与自研四宫格；P1 侧边栏 Tab；DSW token 映射。 |
| `docs/contracts/ops-entry.md` | **运维命令唯一入口**：对外只暴露 fork `yarn omnimux:*`；列出内部/废弃脚本边界。禁止插件私有 deploy/sync 体系。 |
| `docs/contracts/plugin-git-pr.md` | **插件仓 Git/PR 合同**：`origin`/`main`、一插件一 PR、R0/R1 老板人工合入、R2/R3 显式预授权后可自动合入；board 在 `.workbuddy/pr-board.md`。UI 验收统一用 `ego-browser`。Skill：`omnimux-plugin-pr` + `omnimux-pr-handoff`。 |
| `docs/contracts/dev-pipeline.md` | 开发/预发布/生产三层环境契约：生产 MUST 物化副本、dev MUST link（在研 ≤1）。**主入口**：fork 仓库 `yarn omnimux:*`；真源：`scripts/sync-to-app.sh`、`scripts/dev-env.sh`（含统一 watch）、`scripts/dev-doctor.sh`、`scripts/sync-stable.sh`。浏览器验收由 `ego-browser` 完成。  |
| `docs/contracts/apps-catalog.md` | Official Apps catalog: bundled JSON + optional remote JSON. Not an application table. |
| `docs/logs/2026-08-15-app-marketplace-mvp.md` | Earlier marketplace stories. Catalog storage is superseded by `docs/contracts/apps-catalog.md`. |
| `docs/logs/2026-08-16-hub-capability-mount.md` | P3–P8 hub capability mount plan and status |
| skill `dsh-plugin-dev` | Edit this tree (hub / first-level pages / top chrome). Not `dsh-plugin-guide`. |
| `docs/archive/2026-08-14-handoff-audit.md` | Stale-scaffold correction (Archived). Read if you still think `packages/drama-*` or phase letters are live. |
| `docs/decisions/2026-08-14-execution-hub.md` | Hub vs vertical split. Live seam is `videoGenerate`. |
| `docs/decisions/2026-08-16-hub-io-and-facilities.md` | Hub I/O wording + facility phases |
| `docs/decisions/2026-08-16-harness-consume-not-fork.md` | Consume official dsh; no full-repo fork |
| `/Users/x/Desktop/Project/omnimux-desktop-fork` | OmniMux Electron shell (shipping; fork of anywhere-labs). Not this tree. |
| `/Users/x/Desktop/Project/omnimux-desktop` | ~~slim shell~~ archived 2026-08-22, read-only reference. |
| `/Users/x/Desktop/Project/Github/deepseek-harness-desktop` | anywhere-labs DSH desktop. Study only. Consult on major desktop changes; rules in that shell's `AGENTS.md`. |
| `docs/harness-pin.md` | Official SHA / overlay list / bump ritual |
| skill `omnimux-rc-upgrade` | MUST run when bumping the pin / a dsh RC (install tree, overlay contracts, three screens) |
| `research/` | Extracts. Load only when changing positioning or platform SOP. |

## Design system

Single source of truth: [design.md](design.md) and [`docs/contracts/ui-design-guidelines.md`](docs/contracts/ui-design-guidelines.md). DSH native UI design system (`--dsw-alias-*` / `--dsw-specific-*` tokens).

Load `design.md` when the task touches ANY of these:

- Writing or editing any plugin web client UI (stage pages, tables, nav, dialogs, chips, buttons, empty states) in `omnimux-assets`, `omnimux-accounts`, `omnimux-workflow`, `omnimux-products`, `omnimux-inspiration`, `omnimux-clip`, `omnimux-publish`, or the `omnimux` hub client.
- Adding or changing any color / typography / spacing / radius / shadow value in client code.
- Creating a new plugin with a web stage.
- Implementing or changing light/dark mode behavior.
- Visual QA / acceptance of UI changes.

Hard rules (details and token tables in `design.md` and decision [2026-08-27-adopt-dsh-native-ui-system](docs/decisions/2026-08-27-adopt-dsh-native-ui-system.md)):

- **100% Native Token Consumption**: All client code across plugins MUST consume official `--dsw-alias-*` / `--dsw-specific-*` tokens. Raw hex/rgba literals in component code are violations (wrap them in a token).
- **Zero Theme Overrides**: `x.ai` brand language, `xai-theme.js`, and `ctx.theme.overrideTokens()` are completely abolished. Do NOT inject global style overrides or patch official stylesheets.
- **Do NOT build `--omx-*` islands**: The `--omx-*` token namespace and `.omx-scope` isolation islands are completely removed.
- **Zero-JS Light/Dark Adaptation**: Follows the host theme service (`ctx.theme` + CSS variables). Dual-mode `{light,dark}` is automatically handled by CSS variables cascading from the host. Never use per-property JS switches or `filter: invert()`.
- **Visual & Interaction Invariants**: 32px control height baseline, 8px base radius (10~12px for popover menus, 16px for modal dialogs), single-row toolbars (`flex-wrap: nowrap`), React Popover dropdowns (no native `<select>`), vector SVG icons (no text/emojis), and WCAG AA contrast conformance.

Doc index inside `design.md`: §1 architectural principles & native regression · §2 hard rules (32px / 8px / single-row toolbar / no native select / SVG icons / WCAG AA) · §3 color & token matrices · §4 typography system · §5 component specifications · §6 do's & don'ts · §7 AI agent generation prompts.

## Package imports

| Package | May depend on | Must not import |
|---|---|---|
| `omnimux` | OmniMux HTTP, `aigc-provider-runtime-kit` | Plugin-private internals |
| `omnimux-accounts` | Node stdlib, Host `/omnimux/accounts` | hub internals, `OMNIMUX_*` secrets |
| `omnimux-inspiration` | Node stdlib, Host `/omnimux/inspiration` | hub internals, `OMNIMUX_*` secrets |
| `omnimux-workflow` | React, React Flow, Node stdlib | hub internals, `OMNIMUX_*` secrets |

> `omnimux-theme`（历史规划的 `--omx-*` 岛内共享主题包）与全壳染色覆写已彻底废除，全量插件 100% 直连消费 DSH 原生 `--dsw-*` 设计系统。

## Verify

```sh
pnpm test
./scripts/smoke.sh
./scripts/accept-apps-install.sh
pnpm verify:models
pnpm verify:image-live
```

Smoke exits 0 and prints a skip line when `dsh` is missing. `verify:models` asserts every model in `plugins/omnimux/cordis.patch.yml` exists on the live gateway; it self-skips without `OMNIMUX_API_KEY` (see [docs/model-list-ownership.md](docs/model-list-ownership.md)). `verify:image-live` is the P8 image evidence gate; same key rule; not part of `pnpm test`.

## Pointers

- UI design system (tokens, native theme, light/dark, component standards): `design.md`
- Positioning: `research/dsh/POSITIONING.md`
- Hub I/O contract: `docs/contracts/hub.md`
- Apps catalog (bundled + optional remote JSON): `docs/contracts/apps-catalog.md`
- Execution hub decision (2026-08-14, amended 2026-08-16): `docs/decisions/2026-08-14-execution-hub.md`
- Hub owns core (2026-08-16): `docs/decisions/2026-08-16-hub-owns-core.md`
- Consume official dsh, no fork (2026-08-16): `docs/decisions/2026-08-16-harness-consume-not-fork.md`
- Official pin + overlay: `docs/harness-pin.md`
- Desktop shell home (shipping): `/Users/x/Desktop/Project/omnimux-desktop-fork`
- Desktop study reference: `/Users/x/Desktop/Project/Github/deepseek-harness-desktop` (`docs/architecture.md`; consult on major shell changes)
- Hub I/O and facilities (2026-08-16): `docs/decisions/2026-08-16-hub-io-and-facilities.md`
- Extension facts: `research/dsh/EXTENSION.md`
- OmniMux cloud layers (extract; live terms in `docs/contracts/hub.md`): `research/omnimux/PLUGIN.md`
- Briefing create / update / delete: `docs/contracts/briefing.md`. Load `docs/briefing.md` when the task is project direction, a prior decision, or a cross-session design.
