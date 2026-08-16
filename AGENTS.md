# omnimux-dsh

OmniMux landing on official DeepSeek Harness as out-of-tree plugins. This product tree lives at `/Users/x/Desktop/Project/dsh-plugin/product/omnimux-dsh`. Hub is `dsh-omnimux`. First vertical is short-drama (`dsh-drama`), the first social-ops automation solution. Coding agents edit this tree. The product agent is `dsh --profile drama`.

## Hard bounds

- MUST NOT treat a sibling official `deepseek-harness/packages/` tree as product source. MUST NOT open feature PRs upstream. Ship `dsh-plugin` packages and `dsh plugin add`.
- The Electron shell is `/Users/x/Desktop/Project/omnimux-desktop`. MUST NOT recreate `apps/desktop/` on the official clone.
- Settings "DSH plugins" install into the `omnimux` profile bundles via packaged `dsh plugin`. MUST NOT remove `@deepseek-ai/dsh-base`, `@deepseek-ai/dsh-web-app`, or `dsh-omnimux`.
- Official-clone overlays MUST live in `patches/` against the pin in `docs/harness-pin.md`. Apply/reset: `scripts/apply-harness-overlay.sh` and `scripts/reset-harness-overlay.sh`. MUST NOT accumulate product edits only as uncommitted diffs in the official clone.
- OmniMux core MUST live in `plugins/dsh-omnimux/`: product chrome (logo, wordmark, tab title, favicon), auth, credentials, model/provider routes, hub Settings/Apps UI, and execution seams. MUST NOT add a sibling plugin for those (`omnimux-brand` and the same split under another name are forbidden).
- A new plugin in this tree MUST be one vertical business scene (short-drama, later e-commerce design, brand marketing). A vertical MUST NOT implement hub chrome, auth, or provider routes.
- MUST call `dsh-omnimux` the execution hub. MUST NOT call it a gateway or implement a second OmniMux router inside it. I/O: [docs/contracts/hub.md](docs/contracts/hub.md).
- MUST NOT put `series/` or Drama Center logic in `plugins/dsh-omnimux/`.
- A vertical MUST NOT import the hub, ship a brand-specific HTTP client, or store provider keys. It inputs through `ctx.get` / `omnimux_*` and writes only its own disk.
- MUST NOT claim live video unless `drama_generate_shot` / `omnimux_video_submit` returned `mode: "live"`. `mode: "stub"` is a file copy.
- Provider HTTP + keys live in `dsh-omnimux` only. Neutral seams and official-only tools are listed in `docs/contracts/hub.md`. `dsh-drama` only updates `series/`.
- MUST throw `DramaDomainError` from drama tools. MUST NOT return `{ ok: false }` as a successful tool value.
- MUST NOT commit secrets. Inject with `omnimux tokens exec` or the process environment.
- Product truth is `series/` on disk. Session logs and `docs/briefing.md` are not that store.
- Briefing (`docs/briefing.md`) is project memory, not truth. On conflict, live code, this file, and `docs/contracts/` win.
- AGPL trees (ArcReel, 墨音) stay isolate-run. MUST NOT merge them here.

## Map

| Path | Role |
|---|---|
| `CONTEXT.md` | Terms, two-agent split, shot statuses |
| `docs/capabilities.md` | Real / stub / absent |
| `docs/contracts/hub.md` | Execution-hub terms, I/O, seams, official-only list |
| `docs/model-list-ownership.md` | Who owns the OmniMux model list (plugin patch only; user layers set `agent-default-model` only) |
| `docs/contracts/series.md` | Disk fields + error codes |
| `docs/contracts/briefing.md` | Briefing create/update/delete. Memory, not truth |
| `docs/briefing.md` | Agent–human project briefing log |
| `plugins/dsh-omnimux/` | Execution hub. Verticals I/O through its seams. Apps shelf client. Catalog contract: [docs/contracts/apps-catalog.md](docs/contracts/apps-catalog.md). |
| `docs/contracts/apps-catalog.md` | Official Apps catalog: bundled JSON + optional remote JSON. Not an application table. |
| `docs/logs/2026-08-15-app-marketplace-mvp.md` | Earlier marketplace stories. Catalog storage is superseded by `docs/contracts/apps-catalog.md`. |
| `docs/logs/2026-08-16-hub-capability-mount.md` | P3–P8 hub capability mount plan and status |
| `plugins/dsh-drama/` | First vertical: `series/` domain + `drama_*` |
| `fixtures/demo-series/` | Keyless replay (2 episodes, 3 shots) |
| `presets/drama/` | Product-agent persona + `short-drama` skill |
| `.agents/skills/short-drama-router/` | Study index for other repos |
| `.agents/skills/tiktok-drama-center/` | Human Drama Center SOP |
| `docs/handoff-audit.md` | Stale-scaffold correction. Read if you still think `packages/drama-*` or phase letters are live. |
| `docs/decisions/2026-08-14-execution-hub.md` | Hub vs vertical split. Live seam is `videoGenerate`. |
| `docs/decisions/2026-08-16-hub-io-and-facilities.md` | Hub I/O wording + facility phases |
| `docs/decisions/2026-08-16-harness-consume-not-fork.md` | Consume official dsh; no full-repo fork |
| `/Users/x/Desktop/Project/omnimux-desktop` | OmniMux Electron shell (independent). Not this tree. |
| `/Users/x/Desktop/Project/Github/deepseek-harness-desktop` | anywhere-labs DSH desktop. Study only. Consult on major desktop changes; rules in that shell's `AGENTS.md`. |
| `docs/harness-pin.md` | Official SHA / overlay list / bump ritual |
| `research/` | Extracts. Load only when changing positioning or platform SOP. |

## Package imports

| Package | May depend on | Must not import |
|---|---|---|
| `dsh-drama` | `yaml`, Node stdlib | OmniMux SDK, `dsh-omnimux` internals |
| `dsh-omnimux` | OmniMux HTTP, `aigc-provider-runtime-kit` | `dsh-drama` domain, `series/` paths |

## Verify

```sh
pnpm test
./scripts/smoke-drama.sh
pnpm verify:models
pnpm verify:image-live
```

Do not claim the `drama` profile works unless `dsh --profile drama --dump-config` lists both `dsh-omnimux` and `dsh-drama`. Smoke exits 0 and prints a skip line when `dsh` is missing. `verify:models` asserts every model in `plugins/dsh-omnimux/cordis.patch.yml` exists on the live gateway; it self-skips without `OMNIMUX_API_KEY` (see [docs/model-list-ownership.md](docs/model-list-ownership.md)). `verify:image-live` is the P8 image evidence gate; same key rule; not part of `pnpm test`.

## Pointers

- Positioning: `research/dsh/POSITIONING.md`
- Hub I/O contract: `docs/contracts/hub.md`
- Apps catalog (bundled + optional remote JSON): `docs/contracts/apps-catalog.md`
- Execution hub decision (2026-08-14, amended 2026-08-16): `docs/decisions/2026-08-14-execution-hub.md`
- Hub owns core (2026-08-16): `docs/decisions/2026-08-16-hub-owns-core.md`
- Consume official dsh, no fork (2026-08-16): `docs/decisions/2026-08-16-harness-consume-not-fork.md`
- Official pin + overlay: `docs/harness-pin.md`
- Desktop shell home: `/Users/x/Desktop/Project/omnimux-desktop`
- Desktop study reference: `/Users/x/Desktop/Project/Github/deepseek-harness-desktop` (`docs/architecture.md`; consult on major shell changes)
- Hub I/O and facilities (2026-08-16): `docs/decisions/2026-08-16-hub-io-and-facilities.md`
- Extension facts: `research/dsh/EXTENSION.md`
- OmniMux cloud layers (extract; live terms in `docs/contracts/hub.md`): `research/omnimux/PLUGIN.md`
- Briefing create / update / delete: `docs/contracts/briefing.md`. Load `docs/briefing.md` when the task is project direction, a prior decision, or a cross-session design.
