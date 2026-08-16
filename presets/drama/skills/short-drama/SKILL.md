---
name: short-drama
description: "Short-drama series disk contract and production loop. Use when writing episodes, confirming bible characters, or generating a shot. Not for Drama Center upload (tiktok-drama-center) or a second video HTTP client."
---

# short-drama

`series/` is the product store. Session logs are disposable.

## Loop

1. `drama_project_status` (or `drama_init_project` if no `series/`)
2. Fill `series.yaml` / episodes with `drama_upsert_series`
3. Confirm every `character_ids` entry with `drama_confirm_bible`
4. `drama_upsert_shot` for draft/confirmed only
5. `drama_generate_shot` — `mode: "live"` is the `videoGenerate` seam; `mode: "stub"` is an explicit stub copy; no seam and no stub throws `needs-provider`. A `generating` shot with `job_id` resumes that cloud task.

## Hard gates

- Unconfirmed bible characters cannot become `ready`
- One shot, one `assets/<shot_id>.mp4`
- Do not invent ready paths or OmniMux job ids
- Do not tell the user a model rendered the clip while `mode` is `stub`
- Default `drama_generate_shot` is synchronous: wait for `mode` and the asset. `jobId` only means submitted when `background: true`; then `ready` needs `drama_project_status`
- Vertical 9:16, hook at episode end

Field names: repo `docs/contracts/series.md`. Drama Center export is skill `tiktok-drama-center`, not this loop.
