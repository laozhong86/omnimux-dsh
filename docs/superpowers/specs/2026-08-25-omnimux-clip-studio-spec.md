# OmniMux Clip Studio（omnimux-clip）技术架构与实现 Spec

> **版本**：v1.1.0（架构去冗余：确定成片合成由 `omnimux-clip` 纯前端自包含完成，零 FFmpeg 依赖）  
> **状态**：**架构已定型 / 编码就绪**  
> **关联 PRD**：[`2026-08-25-omnimux-clip-studio-prd.md`](./2026-08-25-omnimux-clip-studio-prd.md)  
> **对标工程**：MiniMax Design `bundled-plugins/clip-studio`（OpenReel Video, MIT）  
> **交付总监**：齐活林  
> **本文件职责**：冻结插件边界、扩展点、数据契约、跨插件通信、目录结构与验收门槛。实现以本 spec 为准；PRD 冲突时以本文件为准。

---

## 0. 已冻结决策

| # | 决策 | 内容 |
|---|---|---|
| 1 | 独立插件 | 剪辑器 **MUST** 作为独立插件 `omnimux-clip`。**MUST NOT** 把 OpenReel / WebCodecs / WebGPU / 时间轴 UI 放进 `omnimux-workflow` 画布 island。 |
| 2 | 画布只留代理 | `video_composition` 在画布上 **只** 是 Launcher Card：展示状态 + 打开剪辑器。节点 `data` 只存工程快照引用与产物路径。 |
| 3 | 旧代码作废 | `omnimux-workflow/src/canvas/video-editor/**` 整树删除。本 spec **不** 复用那套 store / engine / 组件。 |
| 4 | 引擎来源 | 前端 NLE 以 **OpenReel Video**（`Augani/openreel-video`，MIT）为真源，vendorize 进 `omnimux-clip`。保留 `LICENSE.openreel.txt` + `THIRD_PARTY_NOTICES.md`。 |
| 5 | 自包含成片合成 | 成片导出 **MUST** 由 `omnimux-clip` 内置的 **WebCodecs (`VideoEncoder`/`AudioEncoder`) + WebGPU/Canvas + `mediabunny`** 纯前端引擎完成，实现 100% 像素级所见即所得。**MUST NOT** 强制把多轨时间轴拆给 `dsh-video` / FFmpeg 处理，彻底消除双渲染引擎冗余与花字/转场失真。 |
| 6 | 跨插件通信 | 对齐 MiniMax `window.hub`：两棵 React 树 **只** 交换 plain JSON。通道 = Host HTTP + DOM CustomEvent。禁止跨树传 React 元素 / ref / context。 |
| 7 | 归属与命名 | 源码 **MUST** 为 `product/omnimux-dsh/plugins/omnimux-clip/`。插件 id / 目录 / manifest `id` 一律 ASCII kebab-case **`omnimux-clip`**。**MUST NOT** 使用 `dsh-clip`、`OmniMux-clip`、`omnimux_clip`。显示名可以是「OmniMux Clip / AI 剪辑工坊」。 |
| 8 | Agent 面 | MiniMax 的 `project.*` 映射为 DSH `clip_*` tools + 同名 client RPC。Agent 不直接操作画布节点。 |
| 9 | 一级页形态 | 剪辑全屏工作台 **不是** 资产库 4 层一级页。挂 `shell.overlay` 的 **editor overlay**（关页可卸载，释放 WebGPU/解码器）。可选「工程列表」才走 4 层标准页（P2）。 |
| 10 | 密钥 | 插件不持 Key。ASR / 理解若需要模型，走 hub `textComplete` / 已有 `dsh-video` 理解工具。 |

---

## 1. 工程定位与物理边界

### 1.1 插件身份

| 项 | 值 |
|---|---|
| 插件 id | `omnimux-clip`（kebab-case；**不是** `OmniMux-clip`） |
| 显示名 | 中：AI 剪辑工坊 / 英：OmniMux Clip |
| Tier | `T1: omnimux-clip`（平台应用，与 `omnimux-workflow` / `omnimux-assets` 同级；**不是** T2 垂直 `dsh-*`） |
| 源码目录 | `product/omnimux-dsh/plugins/omnimux-clip/` |
| 入口 | Host `src/index.ts` → `dist/index.js`；Client `src/client/index.js` → `lib/client.js` |
| 存储域 | `$DSH_HOME/omnimux/clip/{projects,exports,snapshots,tmp}/` |
| 依赖插件 | 必需 `omnimux`；画布集成可选 `omnimux-workflow`；零外部二进制依赖（不依赖 ffmpeg） |
| 系统二进制 | 无（纯客户端硬件加速编解码） |

### 1.2 职责切分（硬边界）

```
omnimux-workflow          omnimux-clip                         dsh-video (不参与本链路)
─────────────────         ────────────                         ────────────────────────
DAG / 节点 / 连线          OpenReel NLE UI                      ffmpeg 11 slug 原子操作
Launcher Card             WebCodecs / WebGPU 实时预览          Headless 批处理
节点 data 快照引用         TimelineSchema 唯一真源              视频抽帧与视频理解分析
触发 open / 接收产物       纯前端自包含成片导出 (MP4)           无 UI，不参与多轨合成
不 import OpenReel         clip_* Agent RPC                     不持时间轴
不持 WebGPU / 解码器      零 FFmpeg 依赖，纯客户端闭环         不持密钥
```

`omnimux-clip` **MUST NOT**：实现 hub chrome、auth、provider 路由、写 `series/`、直连 OmniMux HTTP。  
`omnimux-workflow` **MUST NOT**：实现时间轴、解码器、字幕渲染器、静音检测。

### 1.3 MiniMax 实践 → OmniMux 映射

| MiniMax Design | OmniMux |
|---|---|
| `bundled-plugins/clip-studio/` 独立微应用 | `plugins/omnimux-clip/` 独立 Cordis 插件 |
| `index.html` + `/__hub-sdk__.js` → `window.hub` | `shell.overlay` + Host HTTP `/omnimux-clip/*` + `omnimux-clip-*` DOM 事件 |
| `manifest.json` `displayMode: launcher` 350×400 | 画布 `video_composition` Launcher Card 350×440 |
| `agent.methods` `project.get/edit/view/snapshot/diagnostics` | `clip_get` / `clip_edit` / `clip_view` / `clip_snapshot` / `clip_diagnostics` |
| iframe 与 gateway 同源 | 同 document 的独立 overlay（不 iframe）；通信仍是 JSON |
| 无 host 时降级本地文件选择 | 无画布 payload 时走独立工程；导入走 `omnimux-assets` / 本地 path |

不采用 iframe 的原因：DSH client slot 已是同 document 多 React 树；再套 iframe 会切断 `--dsw-*` token 与登录态 cookie。用 overlay + JSON 事件即可复刻「独立生命周期 / 独立依赖 / 双向契约」。

---

## 2. 物理目录

```
product/omnimux-dsh/plugins/omnimux-clip/
├── dsh.manifest.json
├── package.json
├── cordis.patch.yml
├── LICENSE                          # 本插件许可
├── LICENSE.openreel.txt             # OpenReel MIT 原文（Copyright Augustus Otu）
├── THIRD_PARTY_NOTICES.md
├── README.md
├── scripts/
│   ├── build-host.mjs
│   └── build-client.mjs             # react / react-dom / dsh-client-ui-primitives external
├── skills/
│   └── clip-craft/
│       └── SKILL.md                 # Agent 剪辑判断层（对齐 MiniMax clip-studio SKILL）
├── src/
│   ├── index.ts                     # Cordis：tools / HTTP / seam clipEditor
│   ├── config.ts
│   ├── errors.ts                    # ClipDomainError（对齐 DramaDomainError 风格）
│   ├── store/
│   │   └── projectStore.ts          # 工程落盘（JSON TimelineSchema）
│   ├── http/
│   │   └── routes.ts                # /omnimux-clip/api/*
│   ├── seam/
│   │   ├── clipEditor.ts            # ctx.provide('clipEditor')
│   │   └── types.ts                 # 跨插件共享类型（type-only 可被 workflow 复制一份）
│   └── client/
│       ├── index.js                 # slot 注入
│       ├── ClipOverlay.jsx          # 全屏剪辑 overlay（关页卸载）
│       ├── ClipBridge.js            # 监听/派发 omnimux-clip-* 事件
│       ├── api.js                   # fetch /omnimux-clip/api/*
│       ├── engine/                  # vendorize 自 OpenReel 的渲染/时钟/磁吸
│       ├── store/
│       │   └── useTimelineStore.ts
│       └── components/
│           ├── TopHeader.jsx
│           ├── LeftSidebar.jsx
│           ├── CenterStage.jsx
│           ├── RightInspector.jsx
│           └── BottomTimeline.jsx
```

画布侧（`omnimux-workflow`）允许改动的 **仅**：

- `src/canvas/nodes/definitions/videoComposition.tsx` —— 瘦身为 Launcher
- `src/canvas/bridge/` 或 `src/shared/` —— 增加 `clipBridge` 事件常量与 payload 类型
- `src/workflow/executors/` —— 执行该节点时读 `outputVideoUrl` 向下游传 video
- **删除** `src/canvas/video-editor/**` 及所有对其的 import

跨插件类型 **禁止** `omnimux-workflow` import `omnimux-clip` 源码。类型在两边各放一份，以本 spec §4 为真源。

---

## 3. 扩展点选型

### 3.1 omnimux-clip 提供

| 扩展点 | 选型 | 说明 |
|---|---|---|
| Slot | `shell.overlay` | 注册 Stage `clip-editor`。打开 = 全屏剪辑；关闭 = unmount，释放解码器/WebGPU。 |
| Slot | `sidebar.extra`（P2） | 独立入口「剪辑工坊」。P1 可不挂，仅从画布唤起。 |
| Seam | `clipEditor` | `open / save / export / getActive`。vertical / 画布 / drama 都走它。 |
| Tools | `clip_get` `clip_edit` `clip_view` `clip_snapshot` `clip_diagnostics` `clip_export` | Agent 面。超时对齐 PRD。 |
| HTTP | `/omnimux-clip/api/projects*` `/export` `/snapshot` | Client overlay 与 Host 工程落盘。 |
| Storage | `$DSH_HOME/omnimux/clip/` | 工程 JSON + 导出 mp4 + 瞬时截帧。 |

### 3.2 omnimux-clip 消费

| Seam / 能力 | 来源 | 用途 |
|---|---|---|
| `mediaSeam`（可选） | `omnimux` | 读资产 `real_path`；不自己做云下载 |
| `textComplete`（P2 ASR） | hub | 仅当本地 ASR 不可用时；P1 可用静音切片，字幕可先导入 SRT |

**注**：成片合成由前端 `omnimux-clip` 自包含完成（WebCodecs + mediabunny），**零外部 ffmpeg 依赖**。`dsh-video` 仅用于 headless 批处理与视频理解，不进入剪辑渲染主干链路。

### 3.3 omnimux-workflow 消费

画布 **不** `ctx.get('clipEditor')`（island 不在 Cordis ctx）。画布 island 只：

1. `window.dispatchEvent(new CustomEvent('omnimux-clip-open', { detail: OpenPayload }))`
2. `window.addEventListener('omnimux-clip-save', …)` 写回节点 `data`

`omnimux-clip` 的 `ClipBridge.js` 把事件转成 Host API / seam。这是 MiniMax `window.hub` 的 DSH 等价物。

---

## 4. 数据契约（冻结）

时间单位：**工程内一律毫秒整数**（`startTimeMs` / `durationMs`）。Agent 工具入参允许秒（与 MiniMax 一致），Host 边界换算为 ms。禁止帧号、禁止 `00:00:00:00` 字符串作为存储真源。

### 4.1 TimelineSchema

```ts
export type ClipMediaType = 'video' | 'image' | 'audio' | 'text';
export type TrackType = 'video' | 'audio' | 'text';
export type AspectRatio = '16:9' | '9:16' | '1:1';

export interface CanvasConfig {
  aspectRatio: AspectRatio;
  width: number;
  height: number;
  fps: number;              // 24 | 25 | 30 | 60
  durationMs: number;
  backgroundColor: string;  // token 或 #rrggbb
}

export interface TextStyleConfig {
  presetId?: string;
  content: string;
  fontFamily: string;
  fontSize: number;         // canvas px
  fontWeight: 'normal' | 'bold';
  color: string;
  strokeColor?: string;
  strokeWidth?: number;
  backgroundColor?: string;
  textAlign: 'left' | 'center' | 'right';
}

export interface TransitionConfig {
  type: 'none' | 'cut' | 'crossfade' | 'fadeblack';
  durationMs: number;
}

export interface ClipModel {
  id: string;
  trackId: string;
  name: string;
  mediaType: ClipMediaType;
  startTimeMs: number;
  durationMs: number;
  sourceUrl: string;        // 工作区相对路径或 file:// / blob 仅运行时
  sourceInMs: number;
  sourceOutMs: number;
  speed: number;            // 1 = 正常；0.2–10
  volume: number;           // 0–1
  textStyle?: TextStyleConfig;
  transition?: TransitionConfig;
}

export interface TrackModel {
  id: string;
  name: string;
  type: TrackType;
  order: number;
  isMuted: boolean;
  isLocked: boolean;
  isVisible: boolean;
  clips: ClipModel[];
}

export interface TimelineSchema {
  version: '1.0';
  projectId: string;
  canvasConfig: CanvasConfig;
  tracks: TrackModel[];
  media: Array<{
    id: string;
    name: string;
    type: ClipMediaType;
    durationMs?: number;
    path: string;           // 给 host / ffmpeg / ASR 的本地路径
  }>;
}
```

`sourceUrl` 运行时可以是 blob；落盘 **MUST** 写成 `media[].path` 工作区相对路径。保存时 strip blob。

### 4.2 Open / Save payload

```ts
export interface OpenClipEditorPayload {
  source: 'canvas' | 'sidebar' | 'agent';
  nodeId?: string;            // canvas 必填
  workspaceId?: string;       // workflow workspace
  nodeTitle?: string;
  draftSchema?: TimelineSchema;
  upstreamInputs?: {
    videos: Array<{ path: string; name: string; durationMs?: number }>;
    audios: Array<{ path: string; name: string; durationMs?: number }>;
    images: Array<{ path: string; name: string; displayDurationMs?: number }>;
    captions?: Array<{ text: string; startTimeMs: number; durationMs: number }>;
  };
  canvasConfig?: Partial<CanvasConfig>;
}

export interface SaveClipEditorPayload {
  nodeId?: string;
  schema: TimelineSchema;
  output?: {
    videoPath: string;        // 落盘绝对或工作区相对路径，禁止长期 blob
    thumbnailPath: string;
    durationMs: number;
    width: number;
    height: number;
  };
}
```

打开规则：

1. 有 `draftSchema` → 原样载入。
2. 否则有 `upstreamInputs` → Host 生成默认三轨（video / audio / text），按输入顺序拼接，间距 0。
3. 否则空工程（独立入口）。

### 4.3 画布节点 data（Launcher 仅此字段）

```ts
export interface VideoCompositionNodeData {
  title: string;
  projectId?: string;         // 对应 clip 工程
  schemaVersion?: '1.0';
  schema?: TimelineSchema;    // 可只存引用：{ projectId }；P1 允许内联
  status: 'idle' | 'editing' | 'rendering' | 'completed' | 'error';
  renderProgress?: number;
  outputVideoUrl?: string;
  outputThumbnailUrl?: string;
  outputDurationMs?: number;
  errorMessage?: string;
}
```

节点端口保持：in `image|video|audio|text`，out `video`。

### 4.4 DOM 事件（ClipBridge）

| Event | Direction | detail |
|---|---|---|
| `omnimux-clip-open` | canvas / sidebar → clip | `OpenClipEditorPayload` |
| `omnimux-clip-save` | clip → canvas | `SaveClipEditorPayload` |
| `omnimux-clip-progress` | clip → canvas | `{ nodeId, status, renderProgress }` |
| `omnimux-clip-close` | clip → canvas | `{ nodeId }` 无保存关闭 |

事件必须 `bubbles: true` 打在 `window`。payload **JSON-serializable**。单次 detail ≤ 1MB；更大 schema 先 PUT `/omnimux-clip/api/projects/:id` 再只传 `projectId`。

### 4.5 Seam `clipEditor`

```ts
interface ClipEditorSeam {
  open(payload: OpenClipEditorPayload): Promise<{ projectId: string }>;
  get(projectId: string): Promise<TimelineSchema>;
  save(payload: SaveClipEditorPayload): Promise<void>;
  export(projectId: string, dest: string): Promise<{
    mode: 'live';
    files: Array<{ path: string; kind: 'video' | 'image' }>;
  }>;
}
```

Host 实现：`open` 写工程 + 广播 overlay 打开；`export` 把 schema 编译成 `videoProcess.execute({ capability: 'video_export', input, dest })`。

---

## 5. Agent 工具映射

| MiniMax | DSH tool | timeout | 写? |
|---|---|---|---|
| `project.get` | `clip_get` | 15s | 否 |
| `project.edit` | `clip_edit` | 180s | 是 |
| `project.view` | `clip_view` | 5s | 否 |
| `project.snapshot` | `clip_snapshot` | 60s | 否（写瞬时 png 到 `snapshots/`） |
| `project.diagnostics` | `clip_diagnostics` | 10s | 否 |
| （导出） | `clip_export` | 300s | 是 |

`clip_edit.operations[]` 冻结的 `type`：

`split_clip` · `trim_clip` · `remove_clip` · `remove_range` · `move_clip` · `add_clip` · `import_media` · `set_speed` · `set_volume` · `add_text` · `set_subtitle_style` · `cut_silences` · `add_transition`

一条 `clip_edit` = 一个 undo 步。`validateOnly: true` 只校验不落盘。  
`clip_view` 在 overlay 未挂载时返回 `{ ok: false, code: 'PREVIEW_NOT_READY' }`，不抛 500。  
`clip_snapshot` 同理；Agent 应提示用户先打开剪辑器。

Skill：`skills/clip-craft/SKILL.md` 只写剪辑判断（节奏、转场克制、字幕安全区、完成后 diagnostics + snapshot），不重复 tool catalog。

---

## 6. UI 规格（剪辑 overlay）

**豁免** 4 层一级页。这是专用 NLE 工作台（对标 MiniMax 全屏编辑器 / 本仓库「canvas 内部引擎豁免」同类）。

仍强制：

- 外壳 chrome（顶栏按钮、关闭、导出）用 `dsh-ui-kit`，禁止裸 `<button>` / 裸 `<select>`。
- 颜色走 `--dsw-alias-*`。时间轴内部可用 `--wb-*` 映射，禁止新的 hex 岛。
- 控件高度 32 / 28 / 24。顶栏单行 44–48px。
- `react` / `react-dom` / `@deepseek-ai/dsh-client-ui-primitives` **external**。OpenReel 渲染内核打进 clip client bundle（允许自带一份仅引擎使用的工具库；**禁止** 再打一份 React）。

布局：

```
┌─────────────────────────────────────────────────────────────┐
│ TopHeader  工程名 | Undo/Redo | 画幅 | 保存并返回画布 | 导出 │
├──────────┬──────────────────────────────┬───────────────────┤
│ Left     │ CenterStage（预览视口）       │ RightInspector    │
│ Sidebar  │ WebGPU 优先 / Canvas2D 降级   │ 片段 / 字幕 / 调色│
│ 素材/花字│                              │                   │
├──────────┴──────────────────────────────┴───────────────────┤
│ BottomTimeline  多轨 + 播放头 + 磁吸 + 分割                 │
└─────────────────────────────────────────────────────────────┘
```

「保存并返回画布」：PUT schema → `omnimux-clip-save` → unmount overlay。  
「导出」：走 `clipEditor.export`；节点 `status=rendering` 直到 `completed`。

P1 不做：专业调色轮、绿幕、多机位、协同光标。PRD details 已排除电影级后期。

---

## 7. 运行时与隔离

### 7.1 三棵树

```
Host chrome React 18     workflow canvas React 19 island     omnimux-clip overlay
(sidebar / stage chrome) (xyflow DAG)                        (OpenReel NLE)
        │                         │                                  │
        └──────── DOM + JSON ─────┴──────── CustomEvent / HTTP ──────┘
```

Clip overlay 由 **host chrome** 的 `shell.overlay` 挂载（React 18 树），OpenReel 组件在这棵树里。  
**禁止** 把 OpenReel mount 进 canvas island：会把 WebGPU 与 xyflow 绑死，违背独立插件目标。

### 7.2 资源生命周期

- Overlay `open`：创建 VideoDecoder / AudioContext / WebGPU device。
- Overlay `unmount`：`close()` 全部 decoder、`device.destroy()`、revokeObjectURL。
- 画布节点只保留 `<img>` 封面，不持 `<video>` 解码器。

### 7.3 导出管线（纯前端硬件加速闭环）

```
TimelineSchema (Zustand)
  → OpenReel ExportEngine (Web Worker)
      逐帧调度 WebGPU / OffscreenCanvas 多轨渲染
      WebCodecs VideoEncoder (硬件加速 H.264/H.265) + AudioEncoder
      mediabunny / mp4-muxer 实时封包为 .mp4 文件
  → 写入本地磁盘 $DSH_HOME/omnimux/clip/exports/<projectId>.mp4
  → 触发 omnimux-clip-save { nodeId, schema, output: { videoPath, thumbnailPath } }
  → 画布节点持久化并解锁下游连线
```

**设计决策**：彻底放弃拆分给 FFmpeg 的旧思路，采用与 OpenReel / MiniMax 相同的 WebCodecs 纯客户端导出，保证**所见即所得、零转场失真、零外部二进制依赖**。

---

## 8. OpenReel 引入规则

1. Vendor 目录：`src/client/engine/openreel/`。只引入时间轴、WebGPU/Canvas 渲染、波形 FFT、编解码封装。
2. **不要** 引入 OpenReel 的云上传、账号、CapCut 导入器、其自有顶栏。
3. 顶栏 / 侧栏 / Inspector 外壳自研，走 ui-kit。
4. 许可证：根目录 `LICENSE.openreel.txt` 必须随包分发。
5. 禁止把 GPL ComfyUI 前端打进本插件（那是 MiniMax 的另一插件 `comfyui`，与 clip-studio 无关）。

---

## 9. 画布改造清单（workflow）

删除：

- `src/canvas/video-editor/**`
- 任何 `useTimelineStore` / `FullscreenEditorView` / `VideoEditorStage` import

保留并改写：

- `videoComposition.tsx`：Launcher UI（文案可沿用 PRD：「开源 AI 视频剪辑工具…」「打开视频剪辑」）
- `openEditor(nodeId)` → 组 `OpenClipEditorPayload`（从入边收集 path）→ `dispatchEvent('omnimux-clip-open')`
- 监听 `omnimux-clip-save`：`setNodes` 写 `schema` / `outputVideoUrl` / `status`
- 执行器：若 `outputVideoUrl` 存在则作为 video 输出；否则跳过或报 `needs-clip-export`

未安装 `omnimux-clip`：按钮可点，toast「需要安装剪辑工坊插件」，不得白屏。

---

## 10. Host HTTP（P1）

前缀：`/omnimux-clip/api`

| Method | Path | 作用 |
|---|---|---|
| PUT | `/projects/:id` | 写入 TimelineSchema（乐观锁 version） |
| GET | `/projects/:id` | 读取工程 |
| POST | `/projects/:id/save-export` | 接收前端导出的 MP4 文件落盘至 `$DSH_HOME/omnimux/clip/exports/` |
| POST | `/projects/:id/snapshot` | 若 overlay 存活则截帧，否则 409 PREVIEW_NOT_READY |
| GET | `/health` | `{ clip: true }` |

写操作校验 loopback / 工作区路径，禁止写到 `clip/` 以外。

---

## 11. 错误码

`ClipDomainError`，`code` 稳定字符串：

| code | 何时 |
|---|---|
| `needs-clip-plugin` | 画布打开但 clip 未加载 |
| `export-encode-failed` | WebCodecs 硬件编码器异常或配置不支持 |
| `PREVIEW_NOT_READY` | snapshot/view 时 overlay 未挂 |
| `timeline_gap` / `clip_overlap` / `media_missing` | diagnostics |
| `schema-too-large` | 事件 detail 超 1MB 且未走 projectId |
| `canceled` | 导出中断 |

禁止 `{ ok: false }` 当成功返回值（tools 抛错，对齐 drama）。

---

## 12. 分阶段落地

### P1 — 可联调闭环（本 spec 验收范围）

1. 建 `omnimux-clip` 脚手架：manifest、Host、overlay 空壳、ClipBridge 事件。
2. 删 workflow `video-editor`，Launcher 只发/收事件。
3. Vendorize OpenReel 核心引擎：多轨时间轴 + WebGPU 预览 + ExportEngine (WebCodecs 硬件导出 MP4)。
4. 前端直接合成导出成片，通过 `/projects/:id/save-export` 落盘并写回画布。
5. 双向闭环：上游素材 → 打开自动铺轨 → 剪辑并导出 → 回写封面与真实视频文件 → 驱动下游连线。

### P2

- `cut_silences`（Wasm FFT）
- ASR 字幕（经 hub / 本地 whisper，不自持 key）
- 侧栏独立入口 + 工程列表 4 层页
- 前端 WebCodecs 快速导出
- `clip_snapshot` 真合成帧

### 明确不做（v1）

- 把剪辑器做进 canvas island
- 新 ffmpeg 封装
- ComfyUI 画布替代 xyflow
- 电影级调色 / 绿幕 / 多用户协同

---

## 13. 验收门槛

| # | 标准 | 证据 |
|---|---|---|
| A | `dsh --dump-config` 列出 `omnimux-clip` 且不把 OpenReel 打进 `omnimux-workflow` canvas bundle | bundle 体积对比 / 源码无 `video-editor/` |
| B | 画布双击 Launcher → overlay 打开；保存后节点出现封面与 `outputVideoUrl` | L2 Web 录屏或截图 |
| C | 未装 `omnimux-clip` 时画布不崩溃 | toast |
| D | 剪辑器内点击导出，前端 WebCodecs 直接输出真实 MP4，零外部 ffmpeg 依赖 | 播放导出的视频文件 |
| E | overlay 关闭后 WebGPU 设备、AudioContext 与 VideoDecoder 彻底释放 | unmount 钩子与内存基线 |
| F | MIT OpenReel 声明随包 | `LICENSE.openreel.txt` |
| G | `clip_edit` 一次调用 = 一次 undo | 单测 |
| H | 客户端 external react；ui-kit 顶栏 | `build-client.mjs` + QA 目录审计 |
| I | L2：`node scripts/omnimux.mjs dev start <task> omnimux-clip`，禁止杀桌面 App | 操作规范 |

---

## 14. 实施顺序（给工程师）

1. **契约先行**：落地 `src/seam/types.ts` + 事件名常量（workflow 复制常量文件）。
2. **空 overlay + Bridge**：能 open/close，payload 打日志。
3. **删 workflow 旧剪辑**，Launcher 改桥。
4. **OpenReel 引入与多轨渲染**：引入时间轴 + WebGPU 预览 + ExportEngine (WebCodecs 硬件加速导出)。
5. **双向联调**：素材连线 → 自动铺轨 → 前端合成导出 → 保存回写画布。
6. **Agent tools**：注册 `clip_*` RPC。
7. **QA / doctor / sync**。

不要在第 3 步完成前移植引擎，避免继续污染画布包。

---

## 15. 对照 AGENTS.md 的合规审计（v1.0.1）

对照真源：仓库根 `AGENTS.md`、`product/omnimux-dsh/AGENTS.md`、L0 路由矩阵。

### 15.1 命名（本次纠偏）

| 错误写法 | 规范 | 本 spec |
|---|---|---|
| `dsh-clip` | 根 AGENTS 对**新建仓外插件**建议 `dsh-` 前缀；**本树 T1 平台应用**与现网一致用 `omnimux-*`（`omnimux-workflow` / `omnimux-assets`） | **`omnimux-clip`** |
| `OmniMux-clip` | ASCII **kebab-case**；禁止 PascalCase / 驼峰目录 | 禁止。显示名可用「OmniMux Clip」 |
| `omnimux_clip` | 下划线不是目录名 | 禁止。工具名仍是 `clip_*`（对齐 `workflow_*` / `assets_*`） |

插件 id、目录名、`dsh.manifest.json` 的 `id`、L2 `dev start` 参数、`dump-config` 包名 **四面必须同一字符串** `omnimux-clip`。

### 15.2 硬边界对照

| 规则 | spec 落点 | 结论 |
|---|---|---|
| 新插件只放 `product/omnimux-dsh/plugins/<kebab>/` | §1.1 | 合规（用户明确要进产品画布配套，不进 `personal/`） |
| 不在官方 harness 仓建插件树 / 不 fork packages | 全文无 | 合规 |
| 中枢只在 `plugins/omnimux`；不新建 hub sibling | 本插件不碰 chrome/auth/路由 | 合规 |
| 称 `omnimux` 为 **execution hub**，不称 gateway | MiniMax 对照表里的 “gateway” 仅描述对标产品；本树 Host 称 hub | 合规（实现注释禁止写「网关插件」） |
| 垂直不 import hub、不持密钥、只写自己磁盘 | `$DSH_HOME/omnimux/clip/`；密钥走 hub | 合规 |
| 不把 AGPL（ArcReel/墨音）合入 | 引擎为 OpenReel **MIT** | 合规 |
| Settings 不做一级 `settings.section` | 本插件 P1 无独立设置页 | 合规；若有开关走 `settings.plugin.item` |
| 一级页 4 层布局 | 剪辑工作台豁免（专用 NLE）；P2 工程列表才走 4 层 | 已在决策 #9 写明 |
| Client：ui-kit、token、external react | §6 / 验收 H | 合规 |
| 装好的副本在 profile，源码不混放 | 走 `omnimux.mjs sync` | 合规 |
| 测试只走 L2 Web，禁止杀桌面 App | 验收 I | 合规 |
| 每个插件自有 `dsh.manifest.json`，改完跑 registry-tool | 目录树含 manifest | 编码阶段强制 |
| `mode: live` 才称真视频 | 导出必须 `videoProcess` 返回 live | 合规 |
| 工具失败抛错，禁止 `{ ok: false }` 当成功 | `ClipDomainError`；`PREVIEW_NOT_READY` 仅 overlay RPC | 合规 |

### 15.3 与「新插件必须是垂直场景」条款的关系

`omnimux-dsh/AGENTS.md` 写：本树新插件应是业务垂直（短剧等），且垂直不得做 hub chrome。  
**本插件定位为 T1 平台应用**（画布配套剪辑工作台），与已存在的 `omnimux-workflow` / `omnimux-assets` 同级，**不是** `dsh-drama` 那种垂直，也 **不是** 中枢。不实现 logo/登录/模型路由。

L0 路由矩阵落地时应增一行：

| 用户意图 | Tier & Plugin ID | 目录 | 关键能力 |
|---|---|---|---|
| 本地多轨剪辑 / 画布视频合成节点 | `T1: omnimux-clip` | `product/omnimux-dsh/plugins/omnimux-clip` | `clip_*`、seam `clipEditor`、slot `shell.overlay` |

`dsh-video` 仍为 T2 处理引擎（ffmpeg），本插件消费它，不替代它。
