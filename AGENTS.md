# omnimux-dsh

OmniMux landing on official DeepSeek Harness as out-of-tree plugins. This product tree lives at `/Users/x/Desktop/Project/dsh-plugin/product/omnimux-dsh`. Hub is `omnimux`. First vertical is short-drama (`dsh-drama`), the first social-ops automation solution. Coding agents edit this tree. The product agent is `dsh --profile drama`.

## Hard bounds

- MUST NOT treat a sibling official `deepseek-harness/packages/` tree as product source. MUST NOT open feature PRs upstream. Ship `dsh-plugin` packages and `dsh plugin add`.
- The Electron shell (shipping) is `/Users/x/Desktop/Project/omnimux-desktop-fork` (fork of anywhere-labs desktop; sync per its `docs/contracts/upstream-sync.md`). The retired slim shell `/Users/x/Desktop/Project/omnimux-desktop` is archived read-only. MUST NOT recreate `apps/desktop/` on the official clone.
- Settings "DSH plugins" install into the `omnimux` profile bundles via packaged `dsh plugin`. MUST NOT remove `@deepseek-ai/dsh-base`, `@deepseek-ai/dsh-web-app`, or `omnimux`.
- Plugin config and plugin management MUST use official Settings plugin seats (`settings.plugins.tab` or `settings.plugin.item`). MUST NOT add a first-level `settings.section` for a plugin's knobs, install UI, or keys. Placement: [docs/contracts/settings-ui.md](docs/contracts/settings-ui.md).
- A published catalog app's own user page (`client: true`, e.g. accounts) belongs to the app stage (`shell.overlay` + the hub `omnimux-app-open` event), NOT to any Settings seat. Settings keeps the install channels and the full bundle inventory; the app page opens from the Apps card / sidebar tab.
- Official-clone overlays MUST live in `patches/` against the pin in `docs/harness-pin.md`. Apply/reset: `scripts/apply-harness-overlay.sh` and `scripts/reset-harness-overlay.sh`. MUST NOT accumulate product edits only as uncommitted diffs in the official clone. Bumping that pin or a dsh RC MUST load skill `omnimux-rc-upgrade` and finish its report; MUST NOT claim the bump done with `screens.*: missing`.
- OmniMux core MUST live in `plugins/omnimux/`: product chrome (logo, wordmark, tab title, favicon), auth, credentials, model/provider routes, hub Settings/Apps UI, and execution seams. MUST NOT add a sibling plugin for those (`omnimux-brand` and the same split under another name are forbidden).
- A new plugin in this tree MUST be one vertical business scene (short-drama, later e-commerce design, brand marketing). A vertical MUST NOT implement hub chrome, auth, or provider routes.
- MUST call `omnimux` the execution hub. MUST NOT call it a gateway or implement a second OmniMux router inside it. I/O: [docs/contracts/hub.md](docs/contracts/hub.md).
- MUST NOT put `series/` or Drama Center logic in `plugins/omnimux/`.
- A vertical MUST NOT import the hub, ship a brand-specific HTTP client, or store provider keys. It inputs through `ctx.get` / `omnimux_*` and writes only its own disk.
- MUST NOT claim live video unless `drama_generate_shot` / `omnimux_video_submit` returned `mode: "live"`. `mode: "stub"` is a file copy.
- Provider HTTP + keys live in `omnimux` only. Neutral seams and official-only tools are listed in `docs/contracts/hub.md`. `dsh-drama` only updates `series/`.
- MUST throw `DramaDomainError` from drama tools. MUST NOT return `{ ok: false }` as a successful tool value.
- MUST NOT commit secrets. Inject with `omnimux tokens exec` or the process environment.
- Product truth is `series/` on disk. Session logs and `docs/briefing.md` are not that store.
- Briefing (`docs/briefing.md`) is project memory, not truth. On conflict, live code, this file, and `docs/contracts/` win.
- AGPL trees (ArcReel, 墨音) stay isolate-run. MUST NOT merge them here.
- Dev/test/prod layering MUST follow [docs/contracts/dev-pipeline.md](docs/contracts/dev-pipeline.md): the production profile (`omnimux`) MUST NOT link working trees (materialized copies only, synced via `yarn omnimux:sync` / `scripts/sync-to-app.sh`); dev profiles (`omnimux-dev-*` under `~/.dsh-dev`) MUST link and MUST link at most one in-progress plugin each. MUST NOT hand-rsync/cp into any profile. Day-to-day agent ops run from `/Users/x/Desktop/Project/omnimux-desktop-fork` (`yarn omnimux:dev` / `yarn omnimux:sync` / `yarn omnimux:restart` / `yarn omnimux:stage`).
- Git / PR for this tree MUST follow [docs/contracts/plugin-git-pr.md](docs/contracts/plugin-git-pr.md): branch + PR to `laozhong86/omnimux-dsh` base `main`; no direct push to `main`; only the boss merges. Open-PR follow-up uses skill `omnimux-pr-handoff` and local `.workbuddy/pr-board.md`. Do NOT apply the desktop-fork `fork`/`omnimux` topology here.

## Map

| Path | Role |
|---|---|
| `CONTEXT.md` | Terms, two-agent split, shot statuses |
| `design.md` | Plugin-series UI design system (x.ai brand): x.ai palette, token rules, full-shell bridge (adopted), light/dark strategy, component classes. The `--omx-*` island migration plan is superseded (see "Design system" below + decision [2026-08-21-xai-full-shell-theme](docs/decisions/2026-08-21-xai-full-shell-theme.md)). MUST load before any client-UI work. |
| `docs/capabilities.md` | Real / stub / absent |
| `docs/contracts/hub.md` | Execution-hub terms, I/O, seams, official-only list |
| `docs/contracts/settings-ui.md` | Where plugin UI sits in official Settings (no first-level plugin nav) |
| `docs/contracts/sidebar-extra-entries.md` | Extra rows under 新会话 (32px / 14px / 14px) and first-level page top chrome (`12px 20px 12px`, same as session header). Skill: `dsh-plugin-dev`. |
| `docs/model-list-ownership.md` | Who owns the OmniMux model list (plugin patch only; user layers set `agent-default-model` only) |
| `docs/contracts/series.md` | Disk fields + error codes |
| `docs/contracts/briefing.md` | Briefing create/update/delete. Memory, not truth |
| `docs/briefing.md` | Agent–human project briefing log |
| `plugins/omnimux/` | Execution hub. Verticals I/O through its seams. Apps shelf client (temporarily taken down from `client/index.js`; source kept in `src/client/apps-*`, `catalog.json`). Catalog contract: [docs/contracts/apps-catalog.md](docs/contracts/apps-catalog.md). |
| `plugins/omnimux-accounts/` | Pinned first-level plugin: own sidebar row under 新会话 (rank 3), standalone product page (`shell.overlay`, opened directly via the product stage — not the Apps catalog / `omnimux-app-open`). Host `/omnimux/accounts` only. |
| `plugins/omnimux-assets/` | 创作资产库：角色/场景/风格包/道具/知识包/自定义。素材只记 `real_path`。Host `/omnimux/assets`，tools `assets_list` / `assets_search` / `assets_get` / `assets_upload`。 |
| `plugins/omnimux-products/` | 产品库：要卖的货（名称 + 卖点/人群/品牌 + 主图路径引用）。Host `/omnimux/products`，tools `products_list` / `products_search` / `products_get` / `products_read_media` / `products_create` / `products_update`。侧栏 rank 6。 |
| `plugins/omnimux-gallery/` | 专家·技能·连接器一级页（`shell.overlay`），技能双数据源（本地 + SkillHub 在线源）。 |
| `plugins/omnimux-workflow/` | 工作流无限画布（拖拽 DAG、Agent 工具查询/执行），生成经 hub seam 提交。数据 `$DSH_HOME/omnimux/workflow/`。 |
| `docs/contracts/ops-entry.md` | **运维命令唯一入口**：对外只暴露 fork `yarn omnimux:*`；列出内部/废弃脚本边界。禁止插件私有 deploy/sync 体系。 |
| `docs/contracts/plugin-git-pr.md` | **插件仓 Git/PR 合同**：`origin`/`main`、一插件一 PR、合入永远老板；board 在 `.workbuddy/pr-board.md`。Skill：`omnimux-plugin-pr` + `omnimux-pr-handoff`。 |
| `docs/contracts/dev-pipeline.md` | 开发/预发布/生产三层环境契约：生产 MUST 物化副本、dev MUST link（在研 ≤1）。**主入口**：fork 仓库 `yarn omnimux:*`；真源：`scripts/sync-to-app.sh`、`scripts/dev-env.sh`（含统一 watch）、`scripts/dev-doctor.sh`、`scripts/sync-stable.sh`。 |
| `docs/contracts/apps-catalog.md` | Official Apps catalog: bundled JSON + optional remote JSON. Not an application table. |
| `docs/logs/2026-08-15-app-marketplace-mvp.md` | Earlier marketplace stories. Catalog storage is superseded by `docs/contracts/apps-catalog.md`. |
| `docs/logs/2026-08-16-hub-capability-mount.md` | P3–P8 hub capability mount plan and status |
| `plugins/dsh-drama/` | First vertical: `series/` domain + `drama_*` |
| `fixtures/demo-series/` | Keyless replay (2 episodes, 3 shots) |
| `presets/drama/` | Product-agent persona + `short-drama` skill |
| `.agents/skills/short-drama-router/` | Study index for other repos |
| `.agents/skills/tiktok-drama-center/` | Human Drama Center SOP |
| skill `dsh-plugin-dev` | Edit this tree (hub / first-level pages / top chrome). Not `dsh-plugin-guide`. |
| `docs/handoff-audit.md` | Stale-scaffold correction. Read if you still think `packages/drama-*` or phase letters are live. |
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

Single source of truth: [design.md](design.md). x.ai brand language via the full-shell bridge (official `--dsw-alias-*` / `--dsw-specific-*` tokens tinted by `xai-theme.js`).

Load `design.md` when the task touches ANY of these:

- Writing or editing any plugin web client UI (stage pages, tables, nav, dialogs, chips, buttons, empty states) in `omnimux-assets`, `omnimux-accounts`, `omnimux-workflow`, `omnimux-products`, or the `omnimux` hub client.
- Adding or changing any color / typography / spacing / radius / shadow value in client code.
- Creating a new plugin with a web stage.
- Implementing or changing light/dark mode behavior.
- Visual QA / acceptance of UI changes.

Hard rules (details and token tables in `design.md`; full-shell override is implemented — see `plugins/omnimux/src/client/xai-theme.js` and decision [2026-08-21-xai-full-shell-theme](docs/decisions/2026-08-21-xai-full-shell-theme.md)):

- **Shell brand via the full-shell bridge**: the OmniMux hub stacks a `ctx.theme.overrideTokens('omnimux-xai', XAI_TOKENS)` layer that tints the whole host shell (official `--dsw-*` alias layer) in the x.ai palette. This is the adopted path (was design.md §3.3 "Phase-3 full-shell"). Client code across verticals consumes the official `--dsw-alias-*` / `--dsw-specific-*` tokens, which render x.ai after the bridge applies.
- **Do NOT build the `--omx-*` island system**: `plugins/omnimux-theme` and `.omx-scope` / `installOmniMuxTheme` / `data-omx-mode` are NOT used and are deprecated in favor of the full-shell bridge. Do not create the theme package or mount `.omx-scope`.
- **Light/dark** follows the host theme service (`ctx.theme` + `theme/change`); the bridge provides dual-mode `{light,dark}` values automatically. Never per-property JS switches or `filter: invert()`.
- **Token discipline**: client code MUST consume official `--dsw-alias-*` / `--dsw-specific-*` tokens; raw hex/rgba literals in component code are violations (wrap them in a token). `xai-theme.js` is the single place the x.ai brand values live; do not add a second token/color source.
- **Theme overrides only through `ctx.theme.overrideTokens`**: do not hand-write `<style>`-injected global token overrides or patch official stylesheets.

Doc index inside `design.md`: §1 x.ai language extraction (colors/typography/spacing/radius/elevation) · §2 token naming + 4-layer hierarchy · §3 shared theme package vs full-shell bridge · §4 light/dark adaptation · §5 shared component classes · §6 do's & don'ts · §8 component-generation prompts. The `--omx-*` island migration plan (design.md §3.1-3.2 / §7) is **superseded** by the full-shell bridge decision.

## Package imports

| Package | May depend on | Must not import |
|---|---|---|
| `dsh-drama` | `yaml`, Node stdlib | OmniMux SDK, `omnimux` internals |
| `omnimux` | OmniMux HTTP, `aigc-provider-runtime-kit` | `dsh-drama` domain, `series/` paths |
| `omnimux-accounts` | Node stdlib, Host `/omnimux/accounts` | hub internals, `OMNIMUX_*` secrets |

> `omnimux-theme`（曾规划的 `--omx-*` 岛内共享主题包）**不建**——被全壳桥接 `xai-theme.js` 取代（见 Design system hard rules）。

## Verify

```sh
pnpm test
./scripts/smoke-drama.sh
./scripts/accept-apps-install.sh
pnpm verify:models
pnpm verify:image-live
```

Do not claim the `drama` profile works unless `dsh --profile drama --dump-config` lists both `omnimux` and `dsh-drama`. Smoke exits 0 and prints a skip line when `dsh` is missing. `verify:models` asserts every model in `plugins/omnimux/cordis.patch.yml` exists on the live gateway; it self-skips without `OMNIMUX_API_KEY` (see [docs/model-list-ownership.md](docs/model-list-ownership.md)). `verify:image-live` is the P8 image evidence gate; same key rule; not part of `pnpm test`.

## Pointers

- UI design system (tokens, theme layer, light/dark, migration): `design.md`
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
