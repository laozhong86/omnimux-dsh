---
title: "Official harness pin"
id: "core-harness-pin"
type: "core"
status: "living"
authority: "L1"
date: "2026-08-22"
authors: ["x", "agent-architect"]
subsystem: "dsh-drama"
---

# Official harness pin

Current upstream this product builds against. Not a fork record.

| Field | Value |
|---|---|
| Package | `dsh@0.1.1-rc.2` |
| SHA | `b150a551b8d465e31e418e1b2eaf5e79bbb7d28e` |
| Remote | `https://github.com/deepseek-ai/deepseek-harness.git` |
| Default local clone | `/Users/x/Desktop/Project/Github/deepseek-harness` |
| Recorded | 2026-08-22 |

Override the clone path with `DSH_SRC`. Decision: [decisions/2026-08-16-harness-consume-not-fork.md](decisions/2026-08-16-harness-consume-not-fork.md).

## Overlay against this pin

Directory: `patches/dsh-0.1.1-rc.2/`. Current overlay: `quota-403-not-auth.patch` (classify exhausted-quota 403 as `QUOTA`, not `AUTH`). Desktop packaging patches have left this clone; the shipping shell is `/Users/x/Desktop/Project/omnimux-desktop-fork` (sync per its `docs/contracts/upstream-sync.md`); the retired slim shell `omnimux-desktop` is archived.

`pnpm-lock.yaml` is not a patch.

Untracked on the clone and **not** in this directory: `.agents/skills/dsh-plugin-guide`, `CLAUDE.local.md`. MUST NOT recreate `apps/desktop/` on the official clone.

## Apply / reset

```sh
DSH_SRC=/Users/x/Desktop/Project/Github/deepseek-harness ./scripts/apply-harness-overlay.sh
DSH_SRC=/Users/x/Desktop/Project/Github/deepseek-harness ./scripts/reset-harness-overlay.sh
```

Apply requires `HEAD` to equal the SHA above. Reset restores tracked overlay files to `origin/master`.

## Bump the pin

1. Fetch the official tag or SHA. Set it in this file.
2. `reset-harness-overlay.sh`, then `git checkout` that SHA in `DSH_SRC`.
3. Replay each patch. If official added the same seat or desktop wiring, delete that patch instead of rebasing it.
4. `pnpm install` in the clone. Run `dsh-omnimux` / `dsh-drama` tests and desktop smoke.
5. Load skill `omnimux-rc-upgrade` (`.agents/skills/omnimux-rc-upgrade/SKILL.md`) and finish its report. MUST NOT tag or call the bump done while any `screens.*` is `missing`.
6. Tag the product repo. Changelog names the new dsh pin.
