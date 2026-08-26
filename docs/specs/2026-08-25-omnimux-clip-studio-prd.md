---
title: "PRD：OmniMux 独立视频剪辑插件（OmniMux Clip Studio）及画布解耦集成规格书"
id: "spec-omnimux-clip-studio-prd"
type: "spec"
status: "accepted"
authority: "L2"
date: "2026-08-25"
authors: ["x", "agent-architect"]
subsystem: "dsh-drama"
---

# PRD：OmniMux 独立视频剪辑插件（OmniMux Clip Studio）及画布解耦集成规格书

> **文档状态**：已定稿 (Ready for Architecture & Engineering)  
> **版本**：v1.1.0（架构去冗余：确定成片由 `omnimux-clip` 内置纯前端 WebCodecs/WebGPU 自包含导出，零 FFmpeg 强依赖）  
> **编写人**：齐活林（DSH 插件交付总监）  
> **参考对标**：MiniMax Design (`clip-studio` / OpenReel Video 架构)  
> **目标插件**：id / 目录 **`omnimux-clip`**（kebab-case）→ `product/omnimux-dsh/plugins/omnimux-clip/`；与 `omnimux-workflow` 画布集成。**禁止** `dsh-clip` / `OmniMux-clip`。

---

## 1. 背景与业务价值

### 1.1 现状与痛点
1. **画布代码臃肿**：当前 `omnimux-workflow`（工作流画布）内部硬编码了部分时间轴与剪辑组件，导致画布包体积过大、构建缓慢，且多媒体逻辑与 DAG 编排逻辑深度耦合。
2. **多媒体引擎资源冲突**：视频剪辑涉及 WebCodecs、WebGPU、Wasm 音频波形运算及高频 RAF 刷新，与 React Flow 画布节点共用同一 DOM/渲染上下文极易引发掉帧、内存泄漏和主线程卡顿。
3. **能力无法复用**：内嵌在画布中的剪辑能力无法作为全局独立工具（如侧边栏工具、短剧全流程 `dsh-drama` 剪辑环节）对外开放。

### 1.2 对标 MiniMax Design 的工程解法
在 MiniMax Design 中，剪辑器作为独立插件（`bundled-plugins/clip-studio`，基于 MIT 开源的 **OpenReel Video**）存在，画布上的 `video_composition` 节点仅作为**轻量级启动代理卡片（Launcher Card）**。宿主通过标准数据通道（Input/Output Schema）与剪辑器进行双向数据流转。

### 1.3 产品目标
1. **独立插件化**：新建 T1 平台插件 `omnimux-clip`（显示名：OmniMux Clip / AI 剪辑工坊），剥离并沉淀完整的 WebCodecs + WebGPU + Canvas 多轨时间轴剪辑能力。
2. **画布彻底解耦**：移除 `omnimux-workflow` 内所有旧剪辑实现，将 `video_composition` 节点改造为轻量级代理，支持“双击/点击打开剪辑器”。
3. **双向数据流闭环**：
   - **输入**：画布将上游生成节点（图片/视频/TTS 音频/分镜提示词）聚合为剪辑初始化工程（`ClipEditorOpenPayload`）；
   - **输出**：剪辑器导出后，将结构化工程快照（`TimelineSchema`）及渲染成片（`OutputVideo`）回写至画布节点，无缝驱动下游节点。
4. **Agent 协同协议对齐**：内置对齐 MiniMax 的 `project.edit`、`project.snapshot`、`project.diagnostics` 等 Agent 自动化剪辑 RPC 方法。

---

## 2. 系统总体架构与拓扑关系

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          OmniMux 画布 (omnimux-workflow)                    │
│                                                                             │
│   ┌─────────────────────┐       ┌──────────────────────────────────────┐    │
│   │ 上游: 视频/图像生成 │ ────> │ video_composition (代理启动卡片)     │    │
│   └─────────────────────┘       └──────────────────┬───────────────────┘    │
└────────────────────────────────────────────────────┼────────────────────────┘
                                                     │ 唤起 / 数据回写
                                                     │ (ClipBridge Seam)
                                                     ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                 独立插件：omnimux-clip / omnimux-clip (OpenReel 引擎)            │
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                      Client UI 视图层 (React)                       │   │
│   │  • TopHeader (工程名、Undo/Redo、分辨率选择、导出/保存并返回画布)   │   │
│   │  • LeftSidebar (素材库、花字/字幕预设、滤镜特效、BGM/音效)          │   │
│   │  • CenterStage (4K 实时视口、缩放吸附、字幕选框拖拽)                │   │
│   │  • RightInspector (片段属性、变速曲线、音量增益、文字排版样式)      │   │
│   │  • BottomTimeline (多轨时间轴、高精度时钟、磁吸对齐、切片工具)      │   │
│   └──────────────────────────────────┬──────────────────────────────────┘   │
│                                      │                                      │
│   ┌──────────────────────────────────┴──────────────────────────────────┐   │
│   │                     底层核心引擎 (100% 客户端本地)                  │   │
│   │  • OpenReel WebCodecs/WebGPU 加速渲染管线 + Canvas 2D 降级          │   │
│   │  • Wasm FFT 音频频域波形与静音检测算法                              │   │
│   │  • Zustand 响应式时间轴状态机 (useTimelineStore)                    │   │
│   │  • Agent RPC 调度网关 (project.get/edit/view/snapshot/diagnostics)  │   │
│   └──────────────────────────────────┬──────────────────────────────────┘   │
│                                      │                                      │
│                                      ▼                                      │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                     后端与后处理 (dsh-video Seam)                   │   │
│   │  • 本地 FFmpeg 转码、硬字幕烧录 (ASS/SRT)、Filter_complex 拼轨导出 │   │
│   │  • Whisper/ASR 语音转文字与时间戳自动切片对齐                       │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. 核心功能规格

### 3.1 画布代理节点规格 (`video_composition`)
* **视觉形态**：标准卡片尺寸（350px × 440px），展示 3D 堆叠 Layers 图标、描述文案「开源 AI 视频剪辑工具，支持自动剪辑与字幕生成」、主操作按钮「✏️ 打开视频剪辑」。
* **节点数据结构 (`VideoCompositionNodeData`)**：
  ```typescript
  export interface VideoCompositionNodeData {
    title: string;
    // 结构化时间轴工程快照
    schema?: TimelineSchema;
    // 上游输入的关联素材
    inputAssets?: Array<{
      id: string;
      name: string;
      type: 'video' | 'image' | 'audio';
      url: string;
      durationMs?: number;
    }>;
    // 渲染状态
    status: 'idle' | 'rendering' | 'completed' | 'error';
    renderProgress?: number;
    // 输出产物
    outputVideoUrl?: string;
    outputThumbnailUrl?: string;
    outputDurationMs?: number;
    errorMessage?: string;
  }
  ```
* **端口定义**：
  - **输入端口（Left Port）**：接收 `['video', 'image', 'audio', 'text']`。
  - **输出端口（Right Port）**：输出 `['video']`，可连入视频分析、社媒发布等下游节点。

---

### 3.2 独立剪辑插件功能规格 (`omnimux-clip`)

#### A. 视听与多轨编辑（OpenReel 核心能力）
1. **多轨道支持**：
   - `video` 视频轨：支持多段视频顺序/错位排布，自动贴合吸附（Magnet Engine）。
   - `audio` 音频轨：支持主音轨、BGM 背景音乐轨、音效轨（SFX），带音频波形渲染。
   - `text` 字幕/花字轨：支持双行排版、描边、背景框、预设花字样式。
2. **精细操作**：
   - 毫秒级播放头拖拽（`HighPrecisionPlayheadClock`）；
   - 片段自由分割（`split_clip`）、边缘裁切（`trim_clip`）、波纹删除（`ripple delete`）；
   - 变速调节（0.2x – 10x，支持音调保持）；
   - 关键帧淡入淡出、黑场转场（`fadeblack` / `crossfade`）。
3. **AI 智能剪辑辅助**：
   - **自动无声片段删除（Cut Silences）**：基于 Wasm FFT 分析音频静音区，一键智能切除无声停顿。
   - **ASR 自动字幕生成**：调用 Whisper/ASR 服务对音频轨进行语音识别，自动按语义断句并生成对应时长的字幕片段挂载到 Text 轨。

#### B. 顶部操作栏与返回机制
- **「保存并返回画布」**：将当前时间轴的最新 `TimelineSchema` 与封面截图保存并写回画布节点，关闭全屏剪辑器回到画布。
- **「导出视频」**：
  - **纯前端硬件加速极速导出**：基于 WebCodecs (`VideoEncoder`/`AudioEncoder`) + WebGPU/Canvas + `mediabunny` 离屏逐帧渲染合成，直接在客户端本地生成高画质 MP4 文件，落盘并回写画布。
  - **优势**：100% 像素级所见即所得，花字特效、字幕排版、着色器转场零失真，且无需安装任何外部 FFmpeg 二进制。

---

## 4. 接口契约与数据流定义 (Seam & Protocols)

### 4.1 唤起契约（Canvas -> Clip Studio）
通过全局状态或跨插件事件调度：

```typescript
export interface OpenClipEditorPayload {
  nodeId: string;
  nodeTitle?: string;
  // 1. 若已有工程草稿，直接载入
  draftSchema?: TimelineSchema;
  // 2. 若首次打开，上游连线输入自动初始化为轨道片段
  upstreamInputs?: {
    videos: Array<{ url: string; name: string; durationMs?: number }>;
    audios: Array<{ url: string; name: string; durationMs?: number }>;
    images: Array<{ url: string; name: string; displayDurationMs?: number }>;
    captions?: Array<{ text: string; startTimeMs: number; durationMs: number }>;
  };
  canvasConfig?: {
    aspectRatio: '16:9' | '9:16' | '1:1';
    fps: number;
  };
}
```

### 4.2 回写契约（Clip Studio -> Canvas）
剪辑器退出或导出完成时触发：

```typescript
export interface SaveClipEditorPayload {
  nodeId: string;
  // 结构化时间轴工程
  schema: TimelineSchema;
  // 成品输出（可选，若执行了导出）
  output?: {
    videoUrl: string;
    thumbnailUrl: string;
    durationMs: number;
    width: number;
    height: number;
  };
}
```

### 4.3 Agent 自动化控制 RPC 契约 (`project.*`)
为了支持 AI Agent 对剪辑工坊的无感调用，插件需暴露以下标准方法：

| 方法名 | 超时时间 | 参数 | 返回值与作用 |
| :--- | :--- | :--- | :--- |
| `project.get` | 15s | `{ view?: 'summary' \| 'tracks' \| 'clips' \| 'full' }` | 读取当前项目的时间轴、轨道及所有素材片段信息 |
| `project.edit` | 180s | `{ description: string, operations: Operation[] }` | 批量应用剪切（split）、裁剪（trim）、移位（move）、删空白（remove_range）等操作，作为一个原子 Undo 步 |
| `project.view` | 5s | `{ action: 'seek' \| 'play' \| 'pause', toSec?: number }` | 控制播放器跳转与播放预览 |
| `project.snapshot` | 60s | `{ times?: number[], fromSec?: number, toSec?: number }` | 截取时间轴合成帧图片，供 Agent 视觉自检（字幕是否遮挡、画面是否穿帮） |
| `project.diagnostics` | 10s | `{}` | 自动化工程体检（检查黑场缝隙 `timeline_gap`、重叠冲突 `clip_overlap`、字幕出界） |

---

## 5. 目录组织与归属规划

按照 DSH 规范，新插件归属如下：

```
/Users/x/Desktop/Project/dsh-plugin/
├── product/omnimux-dsh/plugins/
│   ├── omnimux-clip/                     <-- [新建] 独立视频剪辑插件
│   │   ├── dsh.manifest.json         <-- 声明 id: "omnimux-clip"（kebab-case），tools 为 clip_*
│   │   ├── package.json
│   │   ├── LICENSE (MIT - OpenReel)
│   │   ├── src/
│   │   │   ├── index.ts              <-- Cordis 后端服务入口 (注册 RPC / Seams)
│   │   │   ├── client/               <-- 独立 Web 前端界面 (OpenReel 引擎)
│   │   │   │   ├── engine/           <-- WebGPU/WebCodecs 渲染器、Wasm FFT、时钟
│   │   │   │   ├── store/            <-- Zustand useTimelineStore
│   │   │   │   ├── components/       <-- Stage, Timeline, Track, Inspector
│   │   │   │   └── ClipStudioModal.tsx <-- 全屏/模态容器
│   │   │   └── seam/                 <-- 跨插件桥接协议
│   │   └── skills/                   <-- Agent 剪辑专家 Skill (plugin.omnimux-clip.craft)
│   │
│   ├── omnimux-workflow/             <-- [改造] 画布插件
│   │   └── src/canvas/nodes/definitions/
│   │       └── videoComposition.tsx  <-- [精简] 仅保留代理 Launcher 卡片及跨插件调用
│   │
│   └── dsh-video/                    <-- [复用] 底层 FFmpeg 后处理与转码 Seam
```

---

## 6. 实施路线图与团队分工

| 阶段 | 责任人 | 核心任务 |
| :--- | :--- | :--- |
| **Phase 1: 协议与依赖解耦** | **齐活林 / 许清楚** | • 审核 PRD 规格书并冻结数据契约<br>• 清理 `omnimux-workflow` 中旧有的冗余剪辑代码与未使用的 store |
| **Phase 2: 独立插件脚手架与引擎移植** | **高见远 / 林深** | • 搭建 `omnimux-clip` 插件结构并配置 `dsh.manifest.json`<br>• 引入 OpenReel 的 WebCodecs、WebGPU/Canvas 渲染器与多轨 Zustand 状态机<br>• 实现与 `dsh-video`（FFmpeg）后端的渲染桥接 |
| **Phase 3: 画布代理节点联调与双向通信** | **林深** | • 改造 `videoComposition.tsx` 代理卡片<br>• 联调数据通路：连线素材 → 初始化工程 → 剪辑器交互 → 结果写回画布 |
| **Phase 4: 合规审计、L2 隔离验证与交付** | **严过关** | • 审计 MIT 开源协议与 THIRD_PARTY_NOTICES<br>• 在 L2 Web 隔离实例上验证 4K 播放流畅度、内存回收与 Undo/Redo 稳定性<br>• 执行 `omnimux.mjs sync` 完成零重启热生效交付 |
