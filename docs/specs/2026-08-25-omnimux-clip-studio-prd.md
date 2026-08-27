---
title: "PRD：OmniMux Clip Studio（omnimux-clip）完整微应用化"
id: "spec-omnimux-clip-studio-prd"
type: "spec"
status: "accepted"
authority: "L2"
date: "2026-08-25"
updated: "2026-08-27"
authors: ["x", "agent-architect", "agent-director"]
subsystem: "omnimux-clip"
tags: ["omnimux-clip", "openreel", "micro-app", "sidebar-tab", "prd"]
supersedes: []
superseded_by: null
related:
  - "docs/specs/2026-08-25-omnimux-clip-studio-spec.md"
  - "docs/contracts/openreel-vendor-contract.md"
  - "docs/contracts/sidebar-extra-entries.md"
  - "docs/contracts/ui-design-guidelines.md"
  - "docs/contracts/gxgen-workflow-migration.md"
---

# PRD：OmniMux Clip Studio（omnimux-clip）完整微应用化

> **版本**：v3.0.0（2026-08-27：废弃 Headless 引擎 + 手写 GUI；改为对标 MiniMax Design 的完整微应用，官方 OpenReel 全套源码直接落地为 DSH 侧边栏 Tab 插件）
> **状态**：已定稿，覆盖后续 Spec / Vendor 契约
> **核心依赖**：`Augani/openreel-video`（MIT）官方全套源码（原生 GUI + WebCodecs / WebGPU / Web Audio 管线）
> **目标插件**：id / 目录 **`omnimux-clip`** → `plugins/omnimux-clip/`。禁止 `dsh-clip` / `OmniMux-clip`。
> **冲突仲裁**：实现以 [技术 Spec](./2026-08-25-omnimux-clip-studio-spec.md) 为准；Vendorize 红线以 [openreel-vendor-contract](../contracts/openreel-vendor-contract.md) 为准。

---

## 1. 背景与拍板

### 1.1 要解决什么

工作流画布 (`omnimux-workflow`) 不该再内嵌多媒体时间轴。WebCodecs / WebGPU 与 React Flow 同树会把包体积和运行时一起拖垮。剪辑必须是独立插件。

真正的专业剪辑（多轨、逐帧解码、波形、磁吸、花字、硬件导出）已经在 MIT 开源的 OpenReel Video 里。再手写一套，只会得到假预览和假导出。

### 1.2 废弃方案（禁止回潮）

上一版把 OpenReel **拆成 Headless 引擎**，再 **手写一套 xAI 风格 GUI**（自研 TopHeader / 资源库 / 属性面板 / 时间轴壳）。这是错误方案，即日起作废：

| 废弃项 | 为什么作废 |
|---|---|
| Headless 引擎 + 自研 GUI | 官方已经有完整专业界面；拆开会丢交互、状态机和渲染时钟的绑定 |
| 手写 xAI / OmniMux NLE 壳 | 重复造轮子，且与「完整套用官方源码」冲突 |
| Phase 1 挂 `shell.overlay` 一级页 | 剪辑工作台应对标 MiniMax 微应用，先落在侧边栏内容面板 Tab，而不是再做一个全屏一级页 |
| 以画布 Launcher 为 P1 主入口 | 画布集成放到 Phase 3；P1 必须能独立新建、保存工程 |

### 1.3 现行方案

对标 MiniMax Design `bundled-plugins/clip-studio`：**完整微应用化（Micro-App）**。

1. **完整 Vendorize** `Augani/openreel-video` 官方全套源码：原生多轨时间轴、左侧资源库、属性面板、视口，以及 WebCodecs / WebGPU / Web Audio 渲染管线。不拆引擎、不重做壳。
2. **落地形态**：DSH 侧边栏 **Tab 插件**（`dsh-better-sidebar` 内容面板，`ctx.betterSidebar.registerTab`）。用户和 Agent 在侧边栏内容面板列表里点开该 Tab，直接进入官方 OpenReel GUI。
3. **主题**：宿主胶水与新增空态 / 保存对话框走 **DSH 官方主题**（`--dsw-alias-*` / `--dsw-specific-*`）。禁止另写 xAI GUI，禁止 `--omx-*` 岛。OpenReel 原生界面只做 CSS 变量映射，不重绘。
4. **分阶段**：P1 独立 Tab + 新建 / 本地保存；P2 Agent RPC；P3 画布 Launcher 与 DOM 事件桥。

---

## 2. 产品目标与非目标

### 2.1 目标

| # | 目标 | 验收口径 |
|---|---|---|
| G1 | 用户在 DSH 侧边栏内容面板打开「剪辑工坊」Tab，看到的是官方 OpenReel 专业剪辑界面，而不是自研壳 | 资源库、视口、属性面板、多轨时间轴四件套齐全且可操作 |
| G2 | 不依赖画布即可新建工程、导入本地素材、本地保存 | `$DSH_HOME/omnimux/clip/projects/` 可读写回 |
| G3 | 预览是真视频 / 真波形，导出是可播放 MP4 | 见 Vendor 契约五维门禁 |
| G4 | Agent 能用结构化工具读改工程（Phase 2） | `clip_get` / `clip_edit` 等 |
| G5 | 画布 `video_composition` 只做 Launcher，经 JSON 事件唤起同一套微应用（Phase 3） | 画布不持解码器、不 import OpenReel |

### 2.2 非目标（v1 明确不做）

- 把 OpenReel 拆成无 UI 的 Headless 引擎再包一层自研界面
- 把剪辑器做进 `omnimux-workflow` canvas island
- 新 FFmpeg 封装 / 把多轨合成交给 `omnimux-video`
- 电影级调色、绿幕、多机位、协同光标
- OpenReel 云上传、账号体系、CapCut 模板导入器
- 把 GPL ComfyUI 打进本插件
- Phase 1 就做 Agent 工具或画布回写

---

## 3. 用户与场景

| 角色 | 场景 | Phase |
|---|---|---|
| 创作者 | 打开侧边栏「剪辑工坊」Tab，新建工程，导入本地视频 / 音频 / 图片，在官方多轨上剪，保存到本机 | P1 |
| 创作者 | 再次打开 Tab，从本地工程列表恢复上次时间轴 | P1 |
| Agent | 读取当前工程摘要，批量 trim / split / 加字幕，截帧自检后导出 | P2 |
| 工作流用户 | 画布上的视频合成卡片打开同一套剪辑 Tab，剪完把成片路径写回节点 | P3 |

P1 不需要画布，也不需要 Agent。Tab 本身就是产品入口。

---

## 4. 用户故事与优先级

| ID | 故事 | 优先级 | Phase |
|---|---|---|---|
| US-1 | 作为创作者，我在侧边栏内容面板点「剪辑工坊」，进入官方 OpenReel 完整界面 | Must | P1 |
| US-2 | 作为创作者，我能新建剪辑工程并给它起名 | Must | P1 |
| US-3 | 作为创作者，我能把本地视频 / 音频 / 图片放进官方资源库并铺到时间轴 | Must | P1 |
| US-4 | 作为创作者，我能用官方多轨做分割、裁切、磁吸、波形预览，并本地保存工程 | Must | P1 |
| US-5 | 作为创作者，我关掉 Tab 再打开，工程还在 | Must | P1 |
| US-6 | 作为创作者，我能用官方导出管线打出可播放 MP4 | Should（P1 能跑通即可，分辨率选项可后补） | P1 |
| US-7 | 作为 Agent，我能 `clip_get` / `clip_edit` / `clip_view` / `clip_snapshot` / `clip_diagnostics` / `clip_export` | Must | P2 |
| US-8 | 作为工作流用户，我在画布卡片上点「打开视频剪辑」，同一套 Tab 被唤起并带回写 | Must | P3 |

MoSCoW：P1 = US-1～US-6；P2 = US-7；P3 = US-8。P1 未完成不得提前做 P2 / P3 的产品承诺。

---

## 5. 方案形态

### 5.1 拓扑（Phase 1 主路径）

```text
┌─────────────────────────────────────────────────────────────────┐
│ DSH 宿主  sidebar | conversation | [data-dsh-panel-host]         │
│                                                                  │
│  侧边栏内容面板 Tab 列表                                          │
│   · Files / 画布 / … / 剪辑工坊  ← 用户或 Agent 点这一项           │
│                                                                  │
│                    ctx.betterSidebar.registerTab                 │
│                    id = omnimux-clip:studio                      │
│                                  │                               │
│                                  ▼                               │
│   ┌──────────────────────────────────────────────────────────┐  │
│   │ omnimux-clip 微应用（完整套用 OpenReel 官方 GUI + 管线）    │  │
│   │  左侧资源库 · 视口 · 属性面板 · 多轨时间轴（官方原生）      │  │
│   │  WebCodecs / WebGPU / Web Audio（官方原生）               │  │
│   │  宿主胶水：工程 CRUD、本地落盘、DSW token 映射、关 Tab 释放 │  │
│   └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘

Phase 3 才增加：

  omnimux-workflow 画布
    video_composition Launcher ──omnimux-clip-* 事件──► 同一套 Tab
```

### 5.2 挂载座（硬规则）

| 座 | Phase 1 | 说明 |
|---|---|---|
| `ctx.betterSidebar.registerTab` | **主座** | 侧边栏内容面板 Tab。对标工作流画布 tab 的落法 C |
| `shell.overlay` | 不用作 P1 主入口 | 禁止再把剪辑器做成一级全屏页来「代替」Tab |
| `conversation.view` | 禁止 | 那是会话内 chat / trajectory tab，会留下会话头和输入框 |
| `sidebar.footer.action` | 禁止 | 那是设置脚 |
| 新会话下方 extra row | P1 不做 | 需要独立入口时另议，不阻塞 Tab 落地 |

未安装 `dsh-better-sidebar` 时：插件仍可加载 Host API，但 Tab 不可用；不得改挂 `conversation.view` 顶上。

### 5.3 微应用边界

**官方 OpenReel 负责（完整保留，禁止重写）：**

- 多轨时间轴状态机、Undo/Redo、磁吸、波纹
- 左侧资源库、属性面板、视口、原生工具栏
- WebCodecs 解码 / WebGPU 或 Canvas 合成 / Web Audio 波形与变调
- Web Worker 硬件导出（VideoEncoder + AudioEncoder + Muxer）
- 花字排版与转场着色器

**omnimux-clip 只做宿主胶水：**

- Cordis 生命周期、`dsh.manifest.json`
- `betterSidebar.registerTab` 与 Tab 开关
- Host HTTP + `$DSH_HOME/omnimux/clip/` 工程 / 导出 / 快照
- Phase 2：`clip_*` Agent RPC 映射到官方状态机
- Phase 3：与画布的 JSON 事件桥
- 把 OpenReel 色板映射到 `--dsw-alias-*` / `--dsw-specific-*`（映射，不是重做 GUI）

---

## 6. 功能规格（按阶段）

### 6.1 Phase 1：独立侧边栏 Tab + 官方 GUI + 本地工程

- 注册 Tab：id `omnimux-clip:studio`，标题「剪辑工坊」/ OmniMux Clip，`single: true`。
- 打开 Tab = 挂载完整 OpenReel 应用；关闭 Tab = unmount，释放 decoder / AudioContext / WebGPU。
- 空态：新建工程、打开最近工程。空态控件走 DSH ui-kit 与官方 token。
- 工程真源：OpenReel 原生工程结构序列化后落盘（见 Spec §4）。P1 允许「官方 schema 原样存 JSON」，不先发明第二套 TimelineSchema 再双向翻译。
- 保存：显式保存 + 可做本地自动保存草稿。路径限制在 `$DSH_HOME/omnimux/clip/`。
- 导出：走官方 ExportEngine，MP4 落到 `clip/exports/`。P1 不要求画布回写。

### 6.2 Phase 2：Agent RPC

| 方法 | 超时 | 作用 |
|---|---|---|
| `clip_get` | 15s | 读工程摘要 / 轨 / 片段 |
| `clip_edit` | 180s | 批量原子操作，一条调用 = 一个 Undo 步 |
| `clip_view` | 5s | seek / play / pause |
| `clip_snapshot` | 60s | 合成帧截图供视觉自检 |
| `clip_diagnostics` | 10s | 缝隙、重叠、缺素材 |
| `clip_export` | 300s | 触发官方导出 |

Tab 未打开时，`clip_view` / `clip_snapshot` 返回 `PREVIEW_NOT_READY`，不抛 500。Agent 应提示先打开剪辑 Tab。

### 6.3 Phase 3：画布 Launcher + DOM 事件桥

画布节点 `video_composition` **只**是 350×440 Launcher：状态、封面、「打开视频剪辑」。节点 `data` 只存 `projectId` / 产物路径，不持解码器。

事件（plain JSON，打在 `window`）：

| Event | 方向 |
|---|---|
| `omnimux-clip-open` | 画布 → clip |
| `omnimux-clip-save` | clip → 画布 |
| `omnimux-clip-progress` | clip → 画布 |
| `omnimux-clip-close` | clip → 画布 |

未安装 `omnimux-clip` 时按钮可点，toast「需要安装剪辑工坊插件」，不得白屏。

画布改造范围仅限：瘦身 Launcher、事件常量、执行器读 `outputVideoUrl`、删除 `src/canvas/video-editor/**`。禁止 `omnimux-workflow` import `omnimux-clip` 源码。

---

## 7. 主题与视觉

1. **权威**：DSH 官方 token（`--dsw-alias-*` / `--dsw-specific-*`），见 `docs/contracts/ui-design-guidelines.md`。Hub 全壳桥已经把官方 token 染成产品壳颜色；clip **消费这套 token**，不再单独实现 xAI 规范，不新建 `--omx-*` 岛。
2. **OpenReel 原生 GUI 保留。** 允许一份映射表，把 OpenReel 内部 CSS 变量指到 `--dsw-*`。禁止为「更像 xAI」重写资源库 / 时间轴 / 视口。
3. 宿主新增控件（空态、保存失败、Tab 标题旁的工程名）用 `dsh-ui-kit`，禁止裸 `<button>` / 裸 `<select>`，禁止 emoji 当图标。
4. `react` / `react-dom` / `@deepseek-ai/dsh-client-ui-primitives` 构建时 **external**。OpenReel 打进 clip client bundle，但禁止第二份 React。

---

## 8. 指标

| 指标 | P1 门槛 |
|---|---|
| 打开 Tab 到官方 GUI 可点 | ≤ 3s（本地已装插件、无素材） |
| 关 Tab 后解码器 / AudioContext / WebGPU | 全部 `close` / `destroy`，无泄漏基线回升 |
| 新建 + 保存 + 再打开 | 时间轴片段数与入点出点一致 |
| 导出 MP4 | 系统播放器可播，画面与时间轴对齐 |
| 包边界 | OpenReel **不**打进 `omnimux-workflow` canvas bundle |
| Agent（P2） | `clip_edit` 一次 = 一次 Undo；失败抛 `ClipDomainError` |

---

## 9. 路线图

| 阶段 | 交付 | 完成定义 |
|---|---|---|
| **Phase 1** | 侧边栏 Tab 插件；完整官方 OpenReel GUI；新建 / 本地保存；可选导出 MP4 | 不打开画布也能完成一轮剪辑并落盘 |
| **Phase 2** | `clip_*` 工具 + Skill `clip-craft` | Agent 可读写当前工程并导出 |
| **Phase 3** | 画布 Launcher + `omnimux-clip-*` 事件桥 | 上游素材 → 打开 Tab → 导出回写 → 下游连线 |

P1 的工程契约与 QA 门禁现在就要写进 Vendor 契约；P2 / P3 的类型可以在 Spec 里先冻结，但实现不得抢跑到 P1 验收之前。
