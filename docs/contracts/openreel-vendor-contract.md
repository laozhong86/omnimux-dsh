---
title: "openreel-vendor-contract — OpenReel Video 引擎引入与反自研工程契约"
id: "contract-openreel-vendor-standard"
type: "contract"
status: "living"
authority: "L1"
date: "2026-08-27"
updated: "2026-08-27"
authors: ["x", "agent-architect", "agent-director"]
subsystem: "omnimux-clip"
tags: ["openreel", "nle", "vendor", "anti-reinvention", "clip", "governance"]
supersedes: []
superseded_by: null
related:
  - "docs/specs/2026-08-25-omnimux-clip-studio-prd.md"
  - "docs/specs/2026-08-25-omnimux-clip-studio-spec.md"
  - "docs/contracts/plugin-qa.md"
  - "docs/contracts/hub.md"
---

# openreel-vendor-contract — OpenReel Video 引擎引入与反自研工程契约

> **版本**：v1.0.0 | **生效日期**：2026-08-27 | **权威级别**：L1（工程契约）  
> **适用范围**：`omnimux-clip` 插件所有涉及时间轴、渲染、预览、导出、多媒体处理及 Agent 剪辑接口的开发与验收。

---

## 1. 宗旨与最高红线（Anti-Reinvention Directive）

在 OmniMux 视频剪辑工坊（`omnimux-clip`）的工程建设中，**严禁重新发明已经成熟的开源 NLE 轮子**。

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                              【最高行为铁律】                               │
│                                                                             │
│   凡是 OpenReel Video (`Augani/openreel-video`, MIT) 原生已具备的能力，      │
│   在 omnimux-clip 插件中【一律严禁自研/手写替代实现】，必须以 Vendorize       │
│   形式直接复用其核心引擎。                                                  │
│                                                                             │
│   违者（如手写 Canvas 2D 占位贴图、手写简化时间轴 store、手写伪造 MP4 导出）  │
│   代码审查一律打回，严过关五维质检判定为 Blocker 阻断，不得放行。             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. 能力归属与边界矩阵（Boundary Matrix）

### 2.1 严禁自研项（Strictly Vendorize from OpenReel）

| 领域 | 严禁自研行为（违规） | 必须采用的 OpenReel 原生引擎模块 | 目标路径 |
|---|---|---|---|
| **多轨时间轴** | 手写简易 Zustand/JS store、手写 Track/Clip 增删与历史记录 | OpenReel 原生 Timeline Store、Track/Clip 核心状态机与 Undo/Redo 快照 | `src/client/engine/openreel/timeline/` |
| **视频预览解码** | 用 `loadImage` / 静态图片贴图伪造视频帧播放 | OpenReel WebCodecs (`VideoDecoder`) / `HTMLVideoElement` 逐帧精确解码管线 | `src/client/engine/openreel/render/` |
| **画面合成视口** | 手写简易 `drawFrame` 占位渲染 | OpenReel 多图层混合合成器、高精度播放头时钟、画布缩放吸附 | `src/client/engine/openreel/stage/` |
| **音频与波形** | 仅做标量音量增益、不提取波形 | OpenReel Web Audio API 上下文、Wasm/JS FFT 波形发生器、变速音调保持算法 | `src/client/engine/openreel/audio/` |
| **剪辑交互** | 手写简易拖拽、忽略磁吸与波纹 | OpenReel 磁吸引擎 (Magnet Snapping)、波纹编辑 (Ripple Editing)、切片裁切手柄 | `src/client/engine/openreel/timeline/` |
| **成片导出** | 手写仅封装 JPEG 的伪 MP4 Muxer、强行依赖外部 FFmpeg | OpenReel Web Worker 硬件加速导出管线 (`VideoEncoder` + `AudioEncoder` + Muxer) | `src/client/engine/openreel/export/` |
| **花字与转场** | 仅支持固定几个硬编码 Chip、简单透明度变化 | OpenReel 富文本排版引擎（描边/阴影/排版）与 WebGL/WebGPU 转场 Shaders | `src/client/engine/openreel/effects/` |

### 2.2 允许且仅限自研项（OmniMux 宿主胶水层）

| 胶水领域 | 自研职责边界 | 实现落点 |
|---|---|---|
| **Cordis 插件** | 声明 `omnimux-clip`、生命周期管理、依赖注入、`dsh.manifest.json` 与 `plugins.registry.json` 登记 | `src/index.js`, `dsh.manifest.json` |
| **画布 IPC 桥** | 监听/派发 `omnimux-clip-open/save/progress/close` DOM CustomEvent，保持与 `omnimux-workflow` 解耦 | `src/client/ClipBridge.js` |
| **数据适配器** | 将画布输入 `OpenClipEditorPayload` 转为 OpenReel timeline schema；将 OpenReel 产物序列化回写 | `src/client/store/openreelAdapter.js` |
| **宿主 HTTP & 磁盘** | 挂载 `/omnimux-clip/api/projects*` 路由；在 `$DSH_HOME/omnimux/clip/` 下管理工程/导出/快照 | `src/http/routes.js`, `src/paths.js` |
| **Agent RPC** | 将 6 大工具（`clip_get/edit/view/snapshot/diagnostics/export`）映射为 OpenReel 状态机原子操作 | `src/tools.js`, `src/timeline/ops.js` |
| **UI 挂载与主题** | 挂载 Stage 到 `shell.overlay`；包裹符合 x.ai 设计规范的顶栏（`TopHeader`）与主题 Token | `src/client/ClipOverlay.jsx` |
| **合规与版权** | 随包分发 `LICENSE.openreel.txt` 与 `THIRD_PARTY_NOTICES.md` | 根目录 |

---

## 3. Vendorize 目录规范与代码管理准则

1. **Vendor 目录唯一真源**：
   所有引入的 OpenReel 源码统一置于 `plugins/omnimux-clip/src/client/engine/openreel/`。
2. **轻量化剪裁（Pruning）准则**：
   - **MUST 剪裁剔除**：OpenReel 的用户登录/权限系统、云存储上传器（S3/OSS）、CapCut 模版导入器、其自带的应用外层顶栏与独立路由。
   - **MUST 保留**：时间轴、渲染器、音频处理、导出 Worker、排版与着色器特效。
3. **单向适配契约（Adapter Pattern）**：
   - OpenReel 引擎内部代码**禁止**反向 import DSH 专用模块（如 `@deepseek-ai/*` 或 `ClipBridge`）；
   - 所有宿主与引擎的交互**必须**经由 `src/client/store/openreelAdapter.js` 进行单向驱动。
4. **依赖隔离**：
   - 宿主 `react`、`react-dom`、`@deepseek-ai/dsh-client-ui-primitives` 必须在构建时声明为 `external`，严禁在 Client Bundle 中打包第二份 React。

---

## 4. 严过关五维反自研质检门禁（5D Anti-Reinvention QA Gate）

在常规 `plugin-qa` 五维验收之上，针对 `omnimux-clip` 设立**反自研专项门禁**：

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                           【反自研专项审查清单】                             │
│                                                                             │
│ 1. [真视频解码] 预览区播放 MP4 时，必须能实时看到视频画面帧流动，而非图片     │
│    占位或黑屏；DOM/Inspector 中必须存在真实的 VideoDecoder/Video 渲染上下文。 │
│ 2. [真波形渲染] 载入音频/含音视频时，时间轴上必须渲染出真实的音频波形振幅图。 │
│ 3. [真磁吸对齐] 拖拽片段靠近切点时，必须有磁吸吸附吸附点与吸附视觉线。         │
│ 4. [真硬件导出] 点击导出后，由 Web Worker WebCodecs 输出真正可被本地播放器  │
│    流畅播放的 MP4 成片，视频画面、转场、字幕严格对齐，零格式损坏。          │
│ 5. [生命周期释放] 关页 unmount 后，WebGPU 设备、AudioContext 与视频解码器    │
│    必须全部调用 destroy/close，无残留内存泄漏。                             │
│                                                                             │
│ 任何一项未达标，严过关必须直接判定为 FAIL，禁止放行。                        │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 5. 违规追责与退回流程

1. **提交检查**：PR 或阶段交付物若被发现含有自研 NLE 伪实现，评审人或齐活林直接打回；
2. **定界纠偏**：由许清楚与高见远重新出具 OpenReel 原生能力映射指引；
3. **责任人修复**：由林深重新从 `src/client/engine/openreel/` 对接原生能力；
4. **复检放行**：严过关按本契约第 4 节清单逐项核验证据（含 L2 Web 录屏），通过后方可交付。
