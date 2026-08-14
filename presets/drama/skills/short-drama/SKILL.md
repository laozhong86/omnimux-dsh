---
name: short-drama
description: "Short-drama series disk contract and production loop. Use when writing episodes, confirming bible characters, or generating a shot. Not for Drama Center upload (tiktok-drama-center) or a second video gateway."
---

# short-drama

`series/` is the product store. Session logs are disposable.

## Loop

1. `drama_project_status` (or `drama_init_project` if no `series/`)
2. Fill `series.yaml` / episodes with `drama_upsert_series`
3. Confirm every `character_ids` entry with `drama_confirm_bible`
4. `drama_upsert_shot` for draft/confirmed only
5. `drama_generate_shot` — `mode: "live"` is OmniMux; `mode: "stub"` is a file copy

## Hard gates

- Unconfirmed bible characters cannot become `ready`
- One shot, one `assets/<shot_id>.mp4`
- Do not invent ready paths or OmniMux job ids
- Do not tell the user a model rendered the clip while `mode` is `stub`
- `mode: "live"` 返回的 `jobId` 只表示任务已提交，`ready` 以 `drama_project_status` 复查为准
- Vertical 9:16, hook at episode end

Field names: repo `docs/contracts/series.md`. Drama Center export is skill `tiktok-drama-center`, not this loop.
