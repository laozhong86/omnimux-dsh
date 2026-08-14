# Handoff for agent `019fff70-a3c1-7cd3-a9d4-6e5c2fbbe23a`

Date: 2026-08-14. Another session audited the scaffold you built, then patched it. **Do not keep building on the pre-audit mental model.** Read this, then `AGENTS.md` → `CONTEXT.md` → `docs/capabilities.md`.

## Drop these assumptions

| You may still believe | Live tree now |
|---|---|
| Layout is `packages/drama-bundle` + `drama-tools` | `plugins/dsh-omnimux/` + `plugins/dsh-drama/` |
| Disk is `series.json` / `bible.md` / `episodes/e01/episode.md` | `series/series.yaml`, `bible.yaml`, `episodes/<id>.yaml`, `shots.json` |
| `dsh-drama` only has `drama_project_status` | Also `drama_init_project`, `drama_upsert_series`, `drama_confirm_bible`, `drama_upsert_shot`, `drama_generate_shot` |
| Phase A/B/C labels are the contract | Obsolete. Use `docs/capabilities.md` (real / stub / absent) |
| `drama_generate_shot` is (or will silently become) OmniMux | **Stub only.** Copies `assets/stub.mp4`, returns `mode: "stub"` |
| Returning `{ ok: false }` from a tool is fine | **Forbidden.** Throw `DramaDomainError` so dsh marks `isError` |
| Bundle `customSkillDirs` via `import.meta.url` `../../../.agents/skills` | **Removed.** Breaks after `dsh plugin add` into profile `node_modules`. Skills live on `presets/drama` |
| Smoke hardcodes `/Users/x/Desktop/Project/Github/deepseek-harness` | Use `DSH_SRC` or `dsh` on PATH. Missing CLI → exit 0 + skip line, not a profile proof |
| Root `AGENTS.md` owns the production loop | Root = **coding** agent. Product loop = `presets/drama` + skill `short-drama` |
| Official plugin marketplace exists | **Does not.** Install = `dsh plugin add`. Discover = `dsh-plugin` topic / Discussions |
| Models are DeepSeek-only | dsh Settings already has catalog + custom OpenAI-compat providers |

## What the audit found (why we touched your work)

1. Coding agent and product agent shared one always-on file. Product rules polluted plugin work.
2. Empty `dsh-omnimux` + stub generate looked like live OmniMux. Agents would lie to the user.
3. Domain errors were returned as successful tool values.
4. No `drama_init_project` → empty cwd could not start a series.
5. Duplicate / stale paths in research vs live tree (your interval memory still cites `packages/`).

## What landed (do not revert without reading)

- `AGENTS.md` rewritten (54 lines). `CLAUDE.md` points at it.
- `CONTEXT.md` — two-agent split, objects, shot statuses.
- `docs/capabilities.md` — honest surface table.
- `docs/contracts/series.md` — fields + error codes.
- `.agents/skills/dsh-plugin-dev/SKILL.md` — which package, how to add a tool.
- `drama_init_project`; generate returns `mode: "stub"`; tools **throw**.
- `dsh-omnimux` mounts a prompt: no adapter, no generate tools. Do not invent `omnimux_generate_*`.
- Tests: `pnpm test` → 12 pass. Smoke without `dsh` skips dump-config.

## Keep doing (unchanged intent)

- Do not fork `deepseek-harness/packages/` or send feature PRs upstream.
- OmniMux HTTP / live jobs belong in `dsh-omnimux` only. `dsh-drama` must not `fetch`.
- Drama Center stays in skill `tiktok-drama-center` (no tools).
- `series/` on disk is product truth.
- Confirm bible characters before generate.
- Fixture: `fixtures/demo-series` — 2 episodes, 3 shots; 陈璃 confirmed, 卫安 not.

## Your next move if you continue implementation

1. Re-read `docs/capabilities.md`. Live OmniMux is still **absent**.
2. Next real work is `dsh-omnimux` tools (chat route / video job via `omnimux tokens exec`), then optionally teach `drama_generate_shot` to call them.
3. Do not reintroduce phase-letter folders, `packages/drama-*`, or `{ok:false}` wrappers.
4. Verify profile only with: `dsh --profile drama --dump-config` lists both bundle names.

Positioning still holds: OmniMux is the product; dsh is the borrowed runtime; plugin install is the distribution unit; there is no official store yet.
