# omnimux-dsh

OmniMux landing on official DeepSeek Harness as out-of-tree plugins. Hub is `dsh-omnimux`. First vertical is short-drama (`dsh-drama`), the first social-ops automation solution. Coding agents edit this tree. The product agent is `dsh --profile drama`.

## Hard bounds

- MUST NOT edit a sibling official `deepseek-harness/packages/` tree or open feature PRs upstream. Ship `dsh-plugin` packages and `dsh plugin add`.
- MUST NOT put `series/` or Drama Center logic in `plugins/dsh-omnimux/`.
- MUST NOT call OmniMux HTTP (or Gxgen / extra Seedance SDKs) from `plugins/dsh-drama/`.
- MUST NOT claim live video unless `drama_generate_shot` / `omnimux_video_submit` returned `mode: "live"`. `mode: "stub"` is a file copy.
- Live generate belongs in `dsh-omnimux` (`ctx.omnimuxVideo`). `dsh-drama` only updates `series/`.
- MUST throw `DramaDomainError` from drama tools. MUST NOT return `{ ok: false }` as a successful tool value.
- MUST NOT commit secrets. Inject with `omnimux tokens exec` or the process environment.
- Product truth is `series/` on disk. Session logs are not the store.
- AGPL trees (ArcReel, 墨音) stay isolate-run. MUST NOT merge them here.

## Map

| Path | Role |
|---|---|
| `CONTEXT.md` | Terms, two-agent split, shot statuses |
| `docs/capabilities.md` | Real / stub / absent |
| `docs/contracts/series.md` | Disk fields + error codes |
| `plugins/dsh-omnimux/` | Execution hub: video execute + later OmniMux-only paid APIs |
| `plugins/dsh-drama/` | First vertical: `series/` domain + `drama_*` |
| `fixtures/demo-series/` | Keyless replay (2 episodes, 3 shots) |
| `presets/drama/` | Product-agent persona + `short-drama` skill |
| `.agents/skills/dsh-plugin-dev/` | How to change these plugins |
| `.agents/skills/short-drama-router/` | Study index for other repos |
| `.agents/skills/tiktok-drama-center/` | Human Drama Center SOP |
| `docs/handoff-audit.md` | Stale-scaffold correction. Read if you still think `packages/drama-*` or phase letters are live. |
| `docs/decisions/2026-08-14-execution-hub.md` | Confirmed hub vs domain split. Live code still uses `omnimuxVideo` until that doc's gap list is closed. |
| `research/` | Extracts. Load only when changing positioning or platform SOP. |

## Package imports

| Package | May depend on | Must not import |
|---|---|---|
| `dsh-drama` | `yaml`, Node stdlib | OmniMux SDK, `dsh-omnimux` internals |
| `dsh-omnimux` | OmniMux CLI / gateway | `dsh-drama` domain, `series/` paths |

## Verify

```sh
pnpm test
./scripts/smoke-drama.sh
```

Do not claim the `drama` profile works unless `dsh --profile drama --dump-config` lists both `dsh-omnimux` and `dsh-drama`. Smoke exits 0 and prints a skip line when `dsh` is missing.

## Pointers

- Positioning: `research/dsh/POSITIONING.md`
- Execution hub decision (2026-08-14): `docs/decisions/2026-08-14-execution-hub.md`
- Extension facts: `research/dsh/EXTENSION.md`
- OmniMux layers: `research/omnimux/PLUGIN.md`
- Add a tool: `.agents/skills/dsh-plugin-dev/SKILL.md`
