# M4 调研：OmniMux 执行中枢 seam 契约（源码复核结论）

调研对象：`plugins/omnimux`（执行中枢，下称 hub）源码 + `docs/contracts/hub.md`。
结论日期：M4 交付时。**本文档以 hub 源码为准**（前期架构调研线索全部得到证实，个别字段名有出入）。

## 1. seam 注册与消费

hub 在 `src/index.js` 的 `apply(ctx)` 中注册（挂载即生效，非懒注册）：

| seam 名 | 注册处 | 用途 |
|---|---|---|
| `videoGenerate` | `ctx.provide('videoGenerate', api)`（`mountMedia('video', …)`） | 视频 / i2v / talking-head（variants） |
| `imageGenerate` | `ctx.provide('imageGenerate', api)`（`mountMedia('image', …)`） | 图片生成 |
| `textComplete` | `ctx.provide('textComplete', api)` | 一次性专家补全（非聊天） |
| `identity` | `ctx.provide('identity', …)` | 登录态（M4 未消费） |

**消费方式**：cordis 依赖注入 `ctx.get('<seam>')`，返回 `{ execute(req) }`。
在**调用时**懒取 `ctx.get('videoGenerate')`，
不在 mount 时缓存——规避插件加载顺序问题。omnimux-workflow 的 seam client 同样按调用时懒取。

## 2. 媒体 seam 请求 schema（`src/media/execute.js` `executeOmnimuxMedia`）

```ts
{
  prompt?: string,        // 必填（除非传 taskId 恢复）
  dest: string,           // 必填，绝对路径；hub 负责把产物下载写到 dest
  duration?: number,      // 秒
  image?: string,         // 参考图片（URL / data URI）。⚠️ 无视频参考字段
  speech?: string,        // talking-head 台词
  audio?: string,         // 参考音频
  provider?: string,      // 省略 → Config.media.defaultProvider（omnimux）
  model?: string,         // 省略 → 环境变量/Config 默认（video: seedance-2-0-fast, image: gpt-image-2）
  taskId?: string,        // 传了则跳过 submit，只轮询 + 下载（断点恢复）
  wait?: boolean,         // 默认 true；false = 只提交
  signal?: AbortSignal,   // 贯通 HTTP submit / poll / download
}
```

**注意：请求 schema 没有 aspectRatio（画幅）字段** —— 画布节点的画幅参数 M4 无法透传，记入已知限制。

## 3. 返回形状

| 调用方式 | 返回 |
|---|---|
| `{ prompt, dest, wait: false }` | `{ mode: 'submitted', taskId, url: null }`（若 provider 立即返回 URL 则下载后 `{ mode: 'live', taskId, url }`） |
| `{ prompt, dest }`（wait 默认 true） | submit + 轮询 + 下载到 dest → `{ mode: 'live', taskId, url }` |
| `{ dest, taskId }` | 跳过 submit，轮询 + 下载 → `{ mode: 'live', taskId, url }` |

**产物落盘由 hub 完成**（`media/job.js` `downloadMediaFile`：data URI 或 HTTP 下载 → `writeFileSync(dest)`），
vertical 只需要提供 dest 并拿回 url——不需要自己实现下载。

## 4. textComplete seam（`src/text/execute.js`）

```ts
{ prompt: string, model?: string, image?: string, system?: string, maxTokens?: number, signal?: AbortSignal }
→ { mode: 'live', model: string, text: string }
```

- 同步一次性调用（`ctx.llm.stream`），**没有 taskId / 轮询机制**。
- `model` 省略 → `Config.text.defaultModel`（默认 `gemini-3.7-flash`，`OMNIMUX_TEXT_DEFAULT_MODEL` 可覆盖）。
- 带 `image` 时必须落在支持视觉的模型行上，否则 `omnimux-invalid-request`。

## 5. 错误形态

hub 抛 `OmnimuxError`（`src/media/errors.js`）：`{ name: 'OmnimuxError', code: string, message }`。
画布需要映射的 code（见 `docs/contracts/hub.md` seam 表）：

- `needs-provider` — seam 缺失（ctx.llm / ctx.attachments 缺失）
- `omnimux-unconfigured` — 未配置 `OMNIMUX_API_KEY` / `OMNIMUX_TOKEN`
- `unknown-provider` / `unknown-protocol` / `unknown-model` — 路由解析失败（提交前失败，非 mid-HTTP）
- `omnimux-invalid-request` / `omnimux-invalid-response` — 请求/响应非法
- `omnimux-request-failed` / `omnimux-download-failed` — HTTP 失败

M4 映射：code + message 透传为节点执行错误（`[omnimux:<code>] <message>`），
单节点失败按既有 failStrategy（abort/skip）语义处理，不炸整个执行。

## 6. 能力发现（模型目录）

**hub 目前没有暴露模型目录 seam**（没有 `listModels` / catalog provide）。可得的真实数据源：

1. **seam 可达性探测**：`ctx.get('videoGenerate' | 'imageGenerate' | 'textComplete')` 是否存在 —— 决定 capabilities `source: 'omnimux' | 'static-stub'`。
2. **模型 id**：hub 的解析规则（`src/media/route.js`）允许环境变量覆盖：
   - `OMNIMUX_VIDEO_MODEL`（默认 `seedance-2-0-fast`）
   - `OMNIMUX_IMAGE_MODEL`（默认 `gpt-image-2`）
   - 文本白名单固定 8 行（`src/text/catalog.js` `CHAT_MODELS`，受 `Config.text.models` enabled 开关影响——该配置不透出，M4 按全量 8 行展示）

   → M4 capabilities 在 seam 可达时返回 source `omnimux` + 上述真实 id（含 env 覆盖），hub 不可达时回退静态清单。
3. `audioGenerate` seam **不存在**（hub.md 明确： OmniMux 发布音频契约之前不设该 seam）→ 音频生成节点在 omnimux 网关下报 `needs-provider`，目录 audio 列表为空。

## 7. 已知限制确认（i2v / 视频参考）

hub seam 请求字段只有 `image`（参考图片），**没有参考视频字段**。架构调研结论证实。
M4 处置：
- 视频节点的上游**图片**参考正常透传（i2v）；
- 上游**视频**参考（v2v / 动作模仿）不透传：host 端忽略 + 日志警告（不伪装成已消费），
  节点 UI 参考媒体区提示「视频参考输入等待执行中枢扩展」，README 记入已知限制；
  待 hub 扩展视频参考字段后补一行映射即可。

## 8. 并发与限流

hub 侧无队列 / 无任务台账（hub.md：hub does not keep a task ledger）。
限流保护是 vertical 的责任 → omnimux-workflow 在 seam client 内做并发上限
（默认 2，`OMNIMUX_WORKFLOW_MAX_SEAM_CONCURRENCY` 可调），
叠加工作区 `settings.maxParallel`（调度器层的节点并发）。
