# OmniMux live video evidence — 2026-08-14

One `POST /v1/video/generations` via `scripts/verify-omnimux-live.mjs` → `executeOmnimuxVideo`. No second submit.

| Field | Value |
|---|---|
| Token | `tikhub-smoke` (id 40, group `default`) |
| Model | `seedance-2-0-fast` (upstream `doubao-seedance-2.0-fast`) |
| Duration requested | 4s |
| Prompt | fixture `e01-s01` `visual_description` |
| Dest | macOS temp dir (not `fixtures/`) |
| Elapsed | 155s gateway (`created` 1786702970 → `finish_time` 1786703125); process ~165s including download |
| Result | `mode: "live"`, `taskId: "task_9Po0IyIKAITxRa5fSiGLY1cbyCeM4FbY"`, mp4 **1738534** bytes (`ISO Media, MP4 Base Media v1`) |

Keys were injected with `omnimux tokens exec 40 --yes --timeout=600 -- env OMNIMUX_API_KEY=__OMNIMUX_TOKEN_40__ …`. No `sk-` values below.

## Submit (`POST /v1/video/generations`, HTTP 200)

```json
{
  "created": 1786702970,
  "id": "task_9Po0IyIKAITxRa5fSiGLY1cbyCeM4FbY",
  "model": "seedance-2-0-fast",
  "object": "video",
  "status": "queued",
  "task_id": "task_9Po0IyIKAITxRa5fSiGLY1cbyCeM4FbY"
}
```

## Final poll (`GET /v1/video/generations/{task_id}`, HTTP 200)

Trimmed: dropped the nested upstream echo (`data.data` progress payload). Status and URL are from the gateway envelope.

```json
{
  "code": "success",
  "message": "",
  "data": {
    "id": 87,
    "task_id": "task_9Po0IyIKAITxRa5fSiGLY1cbyCeM4FbY",
    "group": "default",
    "channel_id": 32,
    "quota": 118044,
    "action": "generate",
    "status": "SUCCESS",
    "fail_reason": "",
    "result_url": "https://getapib.org/video/9998213296881078-a2d6926e-acfb-4bf3-bf43-956d19844bbc-video_task_01KZZWQFTNGVAZM6C8H3M2S841.mp4",
    "submit_time": 1786702970,
    "start_time": 1786702990,
    "finish_time": 1786703125,
    "progress": "100%",
    "properties": {
      "upstream_model_name": "doubao-seedance-2.0-fast",
      "origin_model_name": "seedance-2-0-fast"
    }
  }
}
```

## Script result fields

```json
{
  "mode": "live",
  "taskId": "task_9Po0IyIKAITxRa5fSiGLY1cbyCeM4FbY",
  "url": "https://getapib.org/video/9998213296881078-a2d6926e-acfb-4bf3-bf43-956d19844bbc-video_task_01KZZWQFTNGVAZM6C8H3M2S841.mp4",
  "bytes": 1738534
}
```

Stdout of the verify run was truncated at 64 KiB of in-progress polls; dest file + one follow-up GET (not a new generation) recovered the completed envelope.
