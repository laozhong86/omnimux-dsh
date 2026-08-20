# Canvas HTTP API 契约（/dsh-workflow/*）

> Host 路由（src/workflow/routes/canvasRoutes.ts）与 island api client（src/canvas/bridge/apiClient.ts）共同的契约。常量单一事实来源：`src/shared/api.ts`。

## 总则

- 所有响应为 JSON（bundle/媒体路由除外），错误形如 `{ error, message }`
- 写操作（POST/PUT/DELETE）经 `assertLocalWrite`：仅接受同机回环来源（origin/referer hostname ∈ {127.0.0.1, localhost, ::1}；sec-fetch-site=cross-site 拒绝）
- 响应文本过 secret-emission guard（含 `access_token` / `sk-…` 模式时拒绝发送）

## 路由

### GET /dsh-workflow/canvas.js
画布 island bundle（lib/canvas.js，IIFE，global `__dshWorkflowCanvas`）。`Cache-Control: no-cache`；由 manifest hash 做 `?v=` 缓存戳。

### GET /dsh-workflow/api/manifest
```json
{ "canvasHash": "9f2a1c…" }   // sha256(canvas.js) 前 16 位，5s 缓存
```

### GET /dsh-workflow/api/workspaces
```json
{ "workspaces": [ { "id": "ws_…", "name": "…", "version": 3, "nodeCount": 5, "updatedAt": "…" } ] }
```

### POST /dsh-workflow/api/workspaces
Body：`{ "name"?: string }` → `{ "workspace": CanvasWorkspaceSnapshot }`（version 从 0 起）

### GET /dsh-workflow/api/workspaces/:id
`{ "workspace": CanvasWorkspaceSnapshot }`；不存在 → 404 `workspace-not-found`

### PUT /dsh-workflow/api/workspaces/:id
Body：`SaveCanvasWorkspacePayload`（必含 `expectedVersion`）。
- 成功 → `{ "workspace": <新快照，version+1> }`
- 版本不符 → **409** `{ "error": "version_conflict", "message": "…", "current": <服务端当前版本> }`
- schema 不合法 → 400 `invalid-snapshot`

### DELETE /dsh-workflow/api/workspaces/:id
`{ "ok": true }`；不存在 → 404

### GET /dsh-workflow/api/capabilities
能力目录（M1 为静态 stub，M4 起来自 OmniMux 能力发现）：
```json
{ "source": "static-stub", "text": [ { "id": "mock-text-pro", "label": "MockText Pro" } ], "image": […], "video": […], "audio": […] }
```

### GET /dsh-workflow/media/*
插件媒体目录（`$DSH_HOME/omnimux/workflow/media/`）静态下发；路径规范化后必须仍在媒体根内（防穿越，逃逸 → 403 `path-denied`）。

## M3 预留（本里程碑未实现）

```
POST /dsh-workflow/api/executions           { executionMode:'full'|'subset', maxParallel, nodeIds? }
GET  /dsh-workflow/api/executions/:id
POST /dsh-workflow/api/executions/:id/pause | resume | cancel
GET  /dsh-workflow/api/executions/:id/events  # SSE，11 事件协议（见 src/shared/events.ts）
```
