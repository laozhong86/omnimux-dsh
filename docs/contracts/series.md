# `series/` contract

Product store. Session logs are not this store.

```
<project>/
  series/
    series.yaml
    bible.yaml
    episodes/<episode_id>.yaml
    shots.json
    assets/stub.mp4          # optional explicit stub; else generate throws needs-provider
    assets/<shot_id>.mp4     # written by generate only
```

`resolveProjectRoot(cwd)` walks up until it finds `series/series.yaml`.

## `series.yaml`

| Field | Type | Required |
|---|---|---|
| `id` | kebab-case string | yes after init |
| `title` | string | yes |
| `logline` | string | no |
| `genre` | string[] | no |
| `locale` | BCP 47 | default `zh-CN` |
| `aspect` | string | default `9:16` |

## `bible.yaml`

| Field | Type | Notes |
|---|---|---|
| `characters[]` | list | each has `id`, `name`, `role?`, `confirmed` (bool) |
| `scenes[]` | list | each has `id`, `name`, `confirmed` |
| `voice` | string | writing note |

`confirmed` defaults to false when omitted. Generate checks **characters** only.

## `episodes/<id>.yaml`

| Field | Type |
|---|---|
| `id` | must match filename stem |
| `title` | string |
| `synopsis` | string |
| `hook` | episode-end hook |
| `status` | `draft` or `confirmed` |

## `shots.json`

JSON array. One object per shot.

| Field | Type | Notes |
|---|---|---|
| `shot_id` | string | stable id, e.g. `e01-s01` |
| `episode_id` | string | must exist as episode file when generating later |
| `character_ids` | string[] | bible character ids |
| `status` | see CONTEXT.md | `ready` / `generating` only via generate |
| `scene_purpose` | string | why this shot exists |
| `visual_description` | string | generate prompt seed |
| `framing` | string | 近景 / 中近景 / … |
| `subject` | string | who or what is on camera |
| `start_time` / `end_time` / `duration` | number | seconds |
| `asset_path` | string or null | relative to `series/` |
| `job_id` | string or null | OmniMux task id when live generate exists |

`drama_generate_shot` is synchronous by default (returns after the asset is `ready`). `background: true` starts a job and returns `jobId` immediately.

## Typed errors (`DramaDomainError.code`)

| Code | When |
|---|---|
| `not-a-project` | no `series/series.yaml` above cwd |
| `already-a-project` | `drama_init_project` on an existing series |
| `invalid-yaml` | mapping/list expected |
| `invalid-bible` | missing character id or empty confirm list |
| `unknown-character` | confirm id not in bible |
| `invalid-episode` | missing episode id |
| `invalid-shots` | `shots.json` not an array |
| `invalid-shot` | bad status, missing `shot_id`, or upsert to ready |
| `unknown-shot` | generate id not in `shots.json` |
| `unconfirmed-characters` | generate while bible not confirmed |
| `missing-stub` | `DRAMA_STUB_MP4`（或显式 stubPath）指向的文件不存在 |
| `needs-provider` | 未挂 `videoGenerate` 缝，且项目没有 `assets/stub.mp4`、也未设 `DRAMA_STUB_MP4` |
| `generate-unavailable` | reserved; unused while stub fallback exists |

Tools must **throw** these. Do not return `{ ok: false }` as a successful tool value.
