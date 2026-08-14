---
name: dsh-plugin-dev
description: "Edit the out-of-tree dsh bundles in this repo. Use when adding a drama_* or OmniMux tool, changing series/ files, scaffolding a dsh plugin, or deciding which package a change belongs in. Not for Drama Center SOP, not for forking deepseek-harness."
---

# dsh-plugin-dev

Read `AGENTS.md` and `CONTEXT.md` first. Then `docs/capabilities.md`.

## Which package

| Change | Package |
|---|---|
| `series/` schema, status machine, `drama_*` | `plugins/dsh-drama/` |
| OmniMux chat / image / video / tokens | `plugins/dsh-omnimux/` |
| Product-agent persona or short-drama skill | `presets/drama/` |
| Coding-agent always-on rules | root `AGENTS.md` only |
| Drama Center human SOP | `.agents/skills/tiktok-drama-center/` |

If both packages seem to need the same HTTP helper, put it in `dsh-omnimux` and have `dsh-drama` call a tool, not `fetch`.

## Add a drama tool

1. Pure function in `plugins/dsh-drama/src/domain.js`. Throw `DramaDomainError(code, message)`.
2. Keyless test in `domain.test.js` against a **copy** of `fixtures/demo-series` or a temp `initProject` tree.
3. Register in `src/index.js`: `execute` calls the function and **rethrows** domain errors (do not wrap as `{ok:false}`).
4. Update `docs/contracts/series.md` if you add a field or code.
5. Update `docs/capabilities.md` if the surface moves stub → real.
6. `pnpm --filter dsh-drama test`.

`defineTool` is optional. Current tools use a raw `ctx.tools.register` object. Keep one style in this package.

## Do not

- Edit official `deepseek-harness/packages/`.
- Register LLM adapters inside a **preset** (host plane only; see `research/dsh/EXTENSION.md`).
- Point `cordis.patch.yml` `customSkillDirs` at a path that breaks after `dsh plugin add` (profile `node_modules`). Skills live on the preset.
- Claim live video because `drama_generate_shot` wrote an mp4. Check `mode === "stub"`.
- Vendor OmniMux `cli/skill/**` into this repo. Product agent installs them later with `omnimux skill install --project`.

## Verify

```sh
pnpm test
./scripts/smoke-drama.sh
```

`smoke` may skip profile dump when `dsh` is not on PATH. That is not proof the profile works.
