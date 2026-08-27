---
title: "PRD：OmniMux 独立视频剪辑插件（OmniMux Clip Studio）及画布解耦集成规格书"
id: "spec-omnimux-clip-studio-prd"
type: "spec"
status: "accepted"
authority: "L2"
date: "2026-08-25"
updated: "2026-08-27"
authors: ["x", "agent-architect", "agent-director"]
subsystem: "omnimux-clip"
---

# PRD：OmniMux 独立视频剪辑插件（OmniMux Clip Studio）及画布解耦集成规格书

> **文档状态**：已定稿 (Ready for Architecture & Engineering)  
> **版本**：v2.0.0（【最高铁律】全面收敛：OpenReel 已有成熟能力一律严禁自研，强制直接 Vendorize 引入；自研范围仅限 DSH 宿主与 IPC 胶水）  
> **编写人**：齐活林（DSH 插件交付总监）  
> **核心依赖**：`Augani/openreel-video` (MIT License)  
> **目标插件**：id / 目录 **`omnimux-clip`**（kebab-case）→ `product/omnimux-dsh/plugins/omnimux-clip/`；与 `omnimux-workflow` 画布集成。**禁止** `dsh-clip` / `OmniMux-clip`。

---

## 1. 背景、业务价值与最高反自研铁律

### 1.1 现状与痛点
1. **画布代码臃肿与冲突**：工作流画布 (`omnimux-workflow`) 内部曾耦合多媒体时间轴组件，引发包体积过大及 WebCodecs/WebGPU 与 React Flow 共用 DOM 的性能瓶颈。
2. **重复造低质轮子（严惩自研）**：前序尝试手写 Canvas 2D 占位贴图、手写极简时间轴，导致真视频逐帧解码、真实音频波形、磁吸吸附等核心剪辑体验严重缺失。

### 1.2 最高反自研铁律（Anti-Reinvention Directive）
**「OpenReel Video (`Augani/openreel-video`, MIT) 已有的成熟能力，在 omnimux-clip 插件中一律严禁自研，强制 Vendorize 引入其核心引擎。」**

- **严禁手写**：多轨时间轴状态机、逐帧解码与渲染管线、音频波形与变调、磁吸与波纹编辑、WebCodecs 硬件加速导出、花字与转场着色器。
- **允许且仅限自研**：DSH Cordis 插件生命周期、画布 IPC 事件桥、Host 磁盘工程持久化、Agent RPC 映射、x.ai 主题 Token 适配。

---

## 2. 系统总体架构与拓扑关系

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                          OmniMux 画布 (omnimux-workflow)                    │
│                                                                             │
│   ┌─────────────────────┐       ┌──────────────────────────────────────┐    │
│   │ 上游: 视频/图像/音频 │ ────> │ video_composition (代理启动卡片)     │    │
│   └─────────────────────┘       └──────────────────┬───────────────────┘    │
└────────────────────────────────────────────────────┼────────────────────────┘
                                                     │ 唤起 / 数据回写
                                                     │ (ClipBridge Seam)
                                                     ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                 独立插件：omnimux-clip (OpenReel 引擎真源)                  │
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                  OmniMux 宿主胶水与视图壳 (DSH UI Kit)              │   │
│   │  • TopHeader (工程名、Undo/Redo、分辨率、保存并返回画布、导出成片)   │   │
│   │  • ClipBridge.js (监听/派发 omnimux-clip-* 事件，两端解耦)          │   │
│   │  • openreelAdapter.js (将画布 Payload 转为 OpenReel Schema)         │   │
│   │  • Agent RPC (clip_get/edit/view/snapshot/diagnostics/export)       │   │
│   └──────────────────────────────────┬──────────────────────────────────┘   │
│                                      │ 单向驱动与状态同步                    │
│                                      ▼                                      │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │        OpenReel Video 原生核心引擎 (src/client/engine/openreel/)    │   │
│   │  • 多轨时间轴状态机 (Video/Audio/Text/Effects Tracks + TimelineStore)│   │
│   │  • WebCodecs (VideoDecoder) + Canvas 实时逐帧真实解码与多图层合成   │   │
│   │  • Web Audio API 音频上下文 + Wasm/JS FFT 波形振幅渲染与变调算法    │   │
│   │  • 磁吸引擎 (Magnet Snapping) + 波纹切片 (Ripple Edit)              │   │
│   │  • Web Worker 硬件加速导出管线 (VideoEncoder + AudioEncoder + Muxer)│   │
│   │  • 富文本花字排版引擎与转场着色器 (Shaders)                         │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. 核心功能规格与能力分工

### 3.1 画布代理节点规格 (`video_composition`)
* **视觉形态**：标准卡片尺寸（350px × 440px），展示 3D 堆叠 Layers 图标、描述文案「开源 AI 视频剪辑工具，支持自动剪辑与字幕生成」、主操作按钮「✏️ 打开视频剪辑」。
* **节点数据结构 (`VideoCompositionNodeData`)**：
  ```typescript
  export interface VideoCompositionNodeData {
    title: string;
    schema?: TimelineSchema; // 结构化时间轴工程快照
    inputAssets?: Array<{
      id: string;
      name: string;
      type: 'video' | 'image' | 'audio';
      url: string;
      durationMs?: number;
    }>;
    status: 'idle' | 'editing' | 'rendering' | 'completed' | 'error';
    renderProgress?: number;
    outputVideoUrl?: string;
    thumbnailUrl?: string;
    outputThumbnailUrl?: string;
    outputDurationMs?: number;
    outputWidth?: number;
    outputHeight?: number;
    errorMessage?: string;
  }
  ```
* **端口定义**：
  - **输入端口（Left Port）**：接收 `['video', 'image', 'audio', 'text']`。
  - **输出端口（Right Port）**：输出 `['video']`，可连入视频分析、社媒发布等下游节点。

---

### 3.2 独立剪辑插件功能规格 (`omnimux-clip`)

#### A. 视听与多轨编辑（必须承接自 OpenReel 原生引擎）
1. **多轨道支持**：
   - `video` 视频轨：多段视频真实解码播放、顺序/错位排布、磁吸引擎（Magnet Snapping）。
   - `audio` 音频轨：主音轨、BGM 背景音乐轨、音效轨（SFX），带真实音频波形图与变速音调保持。
   - `text` 字幕/花字轨：双行排版、描边、背景框、预设花字样式。
2. **精细操作**：
   - 毫秒级播放头拖拽与时钟驱动；
   - 片段自由分割（`split_clip`）、边缘裁切（`trim_clip`）、波纹删除（`ripple delete`）；
   - 变速调节（0.2x – 10x，音调保持）；
   - 关键帧淡入淡出、黑场转场（`fadeblack` / `crossfade`）。
3. **AI 智能剪辑辅助**：
   - **自动无声片段删除（Cut Silences）**：基于 FFT 分析音频静音区，一键智能切除无声停顿。
   - **ASR 自动字幕生成（P2）**：调用 Whisper/ASR 服务语音转文字挂载到 Text 轨。

#### B. 顶部操作栏与返回机制（DSH 宿主胶水）
- **「保存并返回画布」**：将当前时间轴的最新 `TimelineSchema` 与封面截图保存并写回画布节点，关闭全屏剪辑器回到画布。
- **「导出视频」**：
  - **纯前端硬件加速极速导出**：调用 OpenReel 的 Web Worker WebCodecs (`VideoEncoder`/`AudioEncoder`) + Muxer 逐帧渲染合成，直接在客户端本地生成高画质 MP4 文件，落盘至 `$DSH_HOME/omnimux/clip/exports/` 并回写画布。
  - **优势**：100% 像素级所见即所得，花字特效、字幕排版、着色器转场零失真，且无需安装任何外部 FFmpeg 二进制。

---

## 4. 接口契约与数据流定义

### 4.1 唤起契约（Canvas -> Clip Studio）
```typescript
export interface OpenClipEditorPayload {
  nodeId: string;
  nodeTitle?: string;
  projectId?: string;
  draftSchema?: TimelineSchema;
  upstreamInputs?: {
    videos: Array<{ path: string; name: string; durationMs?: number; url?: string }>;
    audios: Array<{ path: string; name: string; durationMs?: number; url?: string }>;
    images: Array<{ path: string; name: string; displayDurationMs?: number; url?: string }>;
    captions?: Array<{ text: string; startTimeMs: number; durationMs: number }>;
  };
  canvasConfig?: Partial<CanvasConfig>;
}
```

### 4.2 回写契约（Clip Studio -> Canvas）
```typescript
export interface SaveClipEditorPayload {
  nodeId?: string;
  schema?: TimelineSchema;
  projectId?: string;
  output?: {
    videoPath: string;
    thumbnailPath?: string;
    durationMs?: number;
    width?: number;
    height?: number;
  };
}
```

### 4.3 Agent 自动化控制 RPC 契约 (`clip_*`)
| 方法名 | 超时时间 | 参数 | 返回值与作用 |
| :--- | :--- | :--- | :--- |
| `clip_get` | 15s | `{ projectId: string, view?: 'summary' \| 'tracks' \| 'clips' \| 'full' }` | 读取当前项目的时间轴、轨道及所有素材片段信息 |
| `clip_edit` | 180s | `{ projectId: string, description: string, operations: Operation[], validateOnly?: boolean }` | 批量应用剪切、裁剪、移位、删空白、花字等操作，作为原子 Undo 步 |
| `clip_view` | 5s | `{ projectId: string, action: 'seek' \| 'play' \| 'pause', toSec?: number }` | 控制播放器跳转与播放预览 |
| `clip_snapshot` | 60s | `{ projectId: string, times?: number[], fromSec?: number, toSec?: number }` | 截取时间轴合成帧图片，供 Agent 视觉自检（字幕是否遮挡、画面是否穿帮） |
| `clip_diagnostics` | 10s | `{ projectId: string }` | 自动化工程体检（检查黑场缝隙 `timeline_gap`、重叠冲突 `clip_overlap`、素材缺失） |
| `clip_export` | 300s | `{ projectId: string, resolution?: '720p' \| '1080p' \| '4k' }` | 触发工程硬件加速导出成片 |

---

## 5. 实施路线图与团队分工

| 阶段 | 责任人 | 核心任务 |
| :--- | :--- | :--- |
| **Phase 1: 契约与规范升级** | **齐活林 / 许清楚** | • 确立 OpenReel 禁自研硬约束（`AGENTS.md` + `openreel-vendor-contract.md`）<br>• 升级 PRD & Spec 至 v2.0，明确定界与黑白名单 |
| **Phase 2: 架构设计与 Vendorize** | **高见远 / 林深** | • 搭建 `src/client/engine/openreel/` 目录结构，剪裁无关模块并保留 Pure Engine<br>• 建立 `openreelAdapter.js` 双向状态与数据转换机制 |
| **Phase 3: 引擎移植与画布联调** | **林深** | • 移除旧自研 Canvas 2D 占位贴图代码，嫁接 OpenReel 真实解码、渲染与波形管线<br>• 挂载 OpenReel 导出 Worker，打通 `/save-export` 与画布回写<br>• 对齐 Agent 6 大工具与 OpenReel 操作原子 |
| **Phase 4: 合规与五维 QA 验收** | **严过关** | • 审查 `LICENSE.openreel.txt` 与 `THIRD_PARTY_NOTICES.md`<br>• 在 L2 Web 隔离实例上验证：真视频流畅播放、波形显示、磁吸对齐、导出真实 MP4、关页内存彻底释放<br>• 出具五维质检报告并放行 |
