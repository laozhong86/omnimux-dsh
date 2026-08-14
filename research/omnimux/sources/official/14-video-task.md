# Query Video Task

> Source: /Users/x/Desktop/Project/OmniMux-docs/en/api-reference/tasks/video-task.mdx  
> Live: https://docs.omnimux.ai/en/api-reference/tasks/video-task  
> Copied 2026-08-14 from sibling docs repo (Mintlify MDX).

GET https://api.omnimux.ai/v1/video/generations/{task_id}

- Only for `task_id` from video series `POST /v1/video/generations`
- Not OpenAI Videos `/v1/videos/{id}` or `/content` download
- Auth: `Authorization: Bearer sk-...`

Path: `task_id` (required) from the create response.

Response (summary):

| Field | Notes |
| --- | --- |
| `status` | e.g. `queued` / `in_progress` / `completed` / `failed` (live) |
| `task_id` / `id` | Task id |
| Result fields | May include output URLs when completed; shape varies by model |

Base URL: `https://api.omnimux.ai`

See Connection and usage, Cost optimization (402).
