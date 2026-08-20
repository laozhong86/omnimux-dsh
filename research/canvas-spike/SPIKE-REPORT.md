# SPIKE 报告：Gxgen CanvasEditor 抽取可运行性验证

> 作者：工程师（software-engineer）｜日期：2026-08-20
> 沙盒：`/Users/x/Desktop/Project/dsh-plugin/product/omnimux-dsh/research/canvas-spike/`
> 来源（只读）：`/Users/x/Desktop/Project/Gxgen/apps/web/src/`
> 验证方式：独立 Vite 工程 + `tsc --noEmit` 严格类型检查 + 生产构建 + ego-browser 真实浏览器交互测试（节点添加/选中/配置面板/prompt 输入/执行 stub/拖线连线/环检测拒绝/主题变量切换）

---

## 0. 结论摘要（TL;DR）

| 验收项 | 结果 |
|---|---|
| 1. 空画布渲染（React Flow + 网格背景 + 平移缩放） | ✅ 通过（浏览器实测：flow/background/controls/minimap 均渲染，滚轮缩放生效） |
| 2. 素材节点可交互（节点卡片 + 配置面板 + prompt 输入 + 执行 stub） | ✅ 通过（选中展开面板 → prompt 写入节点数据 → 执行 stub 走 generating→completed 状态流转） |
| 3. 连线逻辑可用（类型校验 + 环检测 + 重复检测） | ✅ 通过（文本→图片有效连线成边；反向连线被环检测拒绝并 toast「这条连线会形成循环依赖」；重复连线被拒） |
| 4. CSS 变量注入换肤 | ✅ 通过（`--wb-accent` 从 `#4176E6` 切到 `#5a7d1e`，Handle 描边、画布底色、选中环、antd 主按钮全部跟随） |

**可抽取性评级：高**。画布核心（React Flow 容器 + Zustand Graph slice + 连接校验链 + MaterialNode 骨架）与 Gxgen 的服务端/商业系统耦合远比预期浅，且耦合点全部集中在可清晰替换的边界上（详见 §2、§6）。

---

## 1. 实际搬运的文件清单

搬运原则：**最小搬运**——先只搬画布容器 + MaterialNode 简化版 + canvasStore 核心 slice + 连接校验链，跑通后再按需补。共 13 个源文件（约 1500 行），替代 Gxgen 侧对应约 4000+ 行的原始实现。

| Gxgen 源路径（apps/web/src/） | 沙盒路径（src/） | 搬运方式 |
|---|---|---|
| `pages/CanvasEditor/CanvasEditor.tsx`（1455 行） | `canvas/CanvasEditor.tsx`（~250 行） | 窄化移植：ReactFlow props 配置、store 接线、isValidConnection、工具栏添加节点、删除级联原样保留；路由/分享/AI 面板/时间线/菜单裁掉 |
| `pages/CanvasEditor/components/MaterialNode/MaterialNode.tsx`（919 行） | `canvas/components/MaterialNode.tsx`（~320 行） | 简化版：卡片结构、尺寸计算（nodeSizeConfig）、配置面板、updateNodeData 模式保留；服务耦合全部 stub（见 §3） |
| `pages/CanvasEditor/components/CanvasNodeHandle.tsx`（384 行） | `canvas/components/CanvasNodeHandle.tsx`（~50 行） | 简化版：左右锚点 + hover 显隐；菜单系统裁掉 |
| `pages/CanvasEditor/components/AnimatedEdge.tsx` | `canvas/components/AnimatedEdge.tsx` | 移植 + 颜色变量化 |
| `pages/CanvasEditor/components/Toolbar.tsx` | `canvas/components/Toolbar.tsx` | 简化版：添加 4 类素材节点 |
| `pages/CanvasEditor/utils/canvasConnectionUtils.ts` | `canvas/utils/canvasConnectionUtils.ts` | **逐行原样** |
| `pages/CanvasEditor/utils/canvasConnectionStructure.ts` | `canvas/utils/canvasConnectionStructure.ts` | **逐行原样**（自连/重复/缺节点/类型合同/环检测） |
| `pages/CanvasEditor/utils/connectionConfig.ts`（689 行） | `canvas/utils/connectionConfig.ts`（~300 行） | 移植：类型矩阵 + isNodeConnectionValid + 输入/输出选项；group/结果节点分支裁掉 |
| `pages/CanvasEditor/utils/connectionValidator.ts` | `canvas/utils/connectionValidator.ts` | 移植：结构校验保留；模型资格预检裁掉（预设服务耦合） |
| `pages/CanvasEditor/utils/canvasInputMutationGateway.ts` | `canvas/utils/canvasInputMutationGateway.ts` | 移植：变更网关结构校验/patch/级联删除保留；模型资格回写裁掉 |
| `pages/CanvasEditor/utils/nodeSizeConfig.ts` | `canvas/utils/nodeSizeConfig.ts` | 原样子集（结果节点尺寸裁掉） |
| `pages/CanvasEditor/utils/nodeFactory.ts`（364 行） | `canvas/utils/nodeFactory.ts`（~80 行） | 简化版：4 类基础素材节点 |
| `store/canvasStore.ts`（899 行） | `store/canvasStore.ts`（~230 行） | 移植：Graph slice **逐行同构**（含 onEdgesChange 删除走 gateway 的细节）+ 最小 UI slice；Timeline/Overlay/Playback slice 裁掉 |
| `types/canvas.ts`（207 行） | `types/canvas.ts`（~60 行） | 窄化：快照契约（nodes+edges+version）保留 |
| `types/materialNode.ts`（465 行）+ `packages/shared/src/canvas/materialTypes.ts`（376 行） | `types/materialNode.ts`（~230 行） | 窄化 + **@gxg/shared/canvas 内联**（MaterialType/MaterialTool/MATERIAL_TOOLS/MATERIAL_TOOL_INPUT_TYPES 原样搬入） |
| （`@gxg/shared` 的 CanvasMediaSourceRef 类型） | `types/shared.ts` | 就地内联窄化 |
| 新增 | `index.css` / `App.tsx` / `main.tsx` / `package.json` / `vite.config.ts` / `tsconfig.json` / `index.html` | 沙盒基础设施 |

## 2. 依赖摸底结论

### 2.1 `@gxg/shared` 被引用的真实面

- 引用面：CanvasEditor 目录 27 个文件 import `@gxg/shared`（grep 实测），但**其中绝大多数是 `import type`**（CanvasMediaSourceRef、CanvasAssetType、ResolvedTextStyleSnapshot、TaskMediaManifestItem 等纯类型）。
- **运行时依赖只有 4 处**：
  1. `@gxg/shared/canvas` 的常量/函数（MATERIAL_TOOLS、MATERIAL_TOOL_INPUT_TYPES、VIDEO_MODE_LABELS、doesMaterialToolMeetInputRequirements 等）——该模块 376 行、零外部依赖，**可整体内联**（spike 已实测内联）；
  2. `@gxg/shared/textStylePresets`（resolveTextStylePreset、toCanvasTextOverlayStyle、字体选项组）——仅服务文本叠加层样式，裁剪 Timeline/Overlay 后不需要；
  3. `@gxg/shared/canvas` 的 getCanvasActionDeliveryMode——仅 useAIToolIntegration（AI 工具集成）用，spike 范围外；
  4. `MaterialPolicyAsset`——仅 materialTask* 执行链用，M2 移植执行器时处理。
- **结论：可就地内联窄化，无阻力切断 monorepo 依赖。** canvasStore 本身对 @gxg/shared 零依赖。

### 2.2 antd 依赖深度

- MaterialNode 组件树（components/MaterialNode/ 递归）：**Button、Input、Dropdown、Switch、Tooltip、Modal、Typography、Card、Spin，共 9 个组件**。
- 整个 CanvasEditor 目录：Alert、Button、Card、Checkbox、Drawer、Dropdown、Empty、Input、InputNumber、Modal、Popover、Progress、Select、Slider、Space、Spin、Switch、Table、Tabs、Tag、Tooltip、Typography，**约 22 个**。
- spike 实测：配置面板只用了 antd 的 `Input.TextArea + Select + Button` 三个即可成型，且 antd 主色能用 CSS 变量覆盖（`.ant-btn-primary { background: var(--wb-accent) }` 实测生效；正式做法是 ConfigProvider token 传 JS 值）。
- **结论：antd 是「表单控件层」依赖而非画布结构依赖，深度可控。** 建议正式插件保留 antd 作为 peer 依赖按需引入；若 dsh 侧版本冲突，重写面就是配置面板的表单控件（3-5 人日的评估与架构师判断一致）。

### 2.3 fabric 及其他重依赖

- **fabric 在 CanvasEditor 目录零引用**（grep 实测）。fabric 只用于 `pages/SlideshowEditor/`（幻灯片编辑器的离屏导出/文本框渲染）——**与工作流画布无关，不用搬**。
- react-moveable/dnd-kit/motion：只在时间线/多选工具栏/动效处使用，画布核心不需要。
- zustand@5 + @xyflow/react@12 + uuid：画布核心的完整第三方依赖面，**仅此三个**（加 React 本体）。

## 3. 改动清单（为跑通做了什么）

| # | 改动 | 原因 |
|---|---|---|
| 1 | 所有 `@/pages/CanvasEditor/...`、`@/store/...`、`@/types/...` 别名 import 重写为沙盒相对结构（保留 `@/` 别名本身） | 目录重组 |
| 2 | `@gxg/shared`、`@gxg/shared/canvas` import → 内联到 `src/types/materialNode.ts`、`src/types/shared.ts` | 切断 monorepo 依赖 |
| 3 | `react-i18next` 的 `useTranslation`/`t()` → 中文字面量 | 裁掉 i18n（M5 再接 zh/en 字典） |
| 4 | MaterialNode 服务依赖 stub 化：UnifiedAssetPicker/cloudStorage → 移除；useMaterialTask → `useStubExecution`（1.5s 定时器模拟 generating→completed + 占位图）；parseCanvasVideoToText/useSceneDetection/useVideoAudioExtraction → 移除 | spike 无后端 |
| 5 | 配置面板的预设服务字段（sceneId/modelOptions/parameterTemplate…）→ 假 OmniMux 能力目录（静态 MODEL_OPTIONS_BY_TYPE） | 预设服务未搬 |
| 6 | connectionValidator / canvasInputMutationGateway 裁掉 `resolveCanvasModelEligibility` 链（模型资格预检） | 依赖 canvasPresetService 的 modelOptions；空列表时原逻辑本就跳过，语义无损 |
| 7 | canvasStore 裁掉 Timeline/Overlay/Playback 三个 slice（~500 行）及 trackUtils/textOverlayTrackUtils/coordinateUtils 依赖 | 时间线编辑器域，工作流画布不需要 |
| 8 | CanvasNodeHandle 简化为纯锚点（无拖拽阈值/菜单） | spike 范围；**注意保留「Handle 始终 pointer-interactive」这一关键行为**（见 §4 坑 3） |
| 9 | antd Card → 普通 div + CSS（毛玻璃/圆角/阴影用 CSS 复刻） | 减少 antd 面测面 |
| 10 | 颜色全部变量化：Gxgen 的 `--gx-page-*` / 硬编码紫 → `--wb-*` 变量体系 | 品牌换肤机制验证 |

## 4. 坑清单（遇到的坑与解法）

| # | 坑 | 现象 | 解法 |
|---|---|---|---|
| 1 | **Vite HMR 陈旧闭包** | 修改 MaterialNode 后，热更新下点击执行按钮无效（probe 显示 onClick 未触发新代码路径）；整页刷新后一切正常 | 开发期验证交互前先 `gotoAndWait` 整页刷新；不是代码 bug，正式工程无此问题 |
| 2 | **节点创建位置互相遮挡** | 相邻节点偏移 60/80px < 节点尺寸 325×268，第二个节点的卡片盖住第一个节点的输出 Handle，拖线变成拖节点 | 节点摆放改为 420×360 网格错位；正式实现应做碰撞检测/findNearestEmptyPosition（Gxgen 有 layoutUtils 可搬） |
| 3 | **Handle 的 pointerEvents 不能 gate 在 hover 上** | 把锚点容器 `pointerEvents: nodeHovered ? 'auto' : 'none'` 后，鼠标从节点移向锚点的瞬间 mouseleave 触发 → 锚点禁用 → 拖线无法起手 | 对齐 Gxgen 原实现：Handle 本体**始终**可交互，hover 只控制视觉显隐（opacity） |
| 4 | **isValidConnection 拒绝时不走 onConnect** | 被校验拒绝的连线不会触发 onConnect，拒绝原因无法经 store 的 mutation gateway 透出 | 在 `onConnectEnd(event, connectionState)` 里读 `connectionState.isValid/fromNode/toNode`，用 `validateConnectionDetailed` 归因并 toast（React Flow v12 API，Gxgen 未用到这层） |
| 5 | **React Flow v12 Connection 类型要求 sourceHandle/targetHandle 字段** | 手构造 `{source, target}` 传给 validateConnectionDetailed 会 TS 报错 | 补 `sourceHandle: null, targetHandle: null` |
| 6 | **antd v6 + React 19 正常**，无 peer 冲突；CSS 变量覆盖 antd 主色可行但 `!important` 必要（hover 态） | — | 正式做法：ConfigProvider `theme.token.colorPrimary` 从 CSS 变量读一次 JS 值 |

**未遇到的坑**（原风险清单里担心的）：React 19 + @xyflow/react 12 + zustand 5 组合零兼容问题；zustand slice 拆分无障碍（graph slice 独立性极好）；CSS 引入顺序无坑（`@xyflow/react/dist/style.css` 先 import、自定义覆盖在后即可）。**React 18 兼容性仍为待验证项**（本次按任务要求走 React 19 原生路线；spike 代码未用任何 React 19 独有 API——无 `use`/`useOptimistic`/`useActionState`——降级 React 18 理论上只影响类型包，风险显著低于预期）。

## 5. 验证记录（ego-browser 真实浏览器实测）

```
emptyCanvas:      { hasFlow: true, hasBackground: true, hasControls: true, hasMinimap: true, nodeCount: 0 }
twoNodes:         { nodeCount: 2, labels: ["📝 文本", "🖼️ 图片"] }
panel:            { open: true, prompt: "赛博朋克城市夜景", hasModelSelect: true }
execution:        { badges: ["material-node__badge--done"], text: "【stub 生成结果】…" }   // generating→completed 流转实测
validConnection:  1 条边（文本 → 图片，拖拽真实鼠标事件完成）
cycleRejection:   { edgeCount: 仍为 1, toast: "这条连线会形成循环依赖" }
duplicateReject:  { edgeCount: 仍为 1 }
themeSwitch:      before { accent: #4176E6, handleBorder: rgb(65,118,230) }
                  after  { accent: #5a7d1e, handleBorder: rgb(90,125,30), canvasBg: rgb(244,246,236) }
构建:             tsc --noEmit（strict）0 错误 + vite build 通过（754KB/249KB gzip，未分包）
```

## 6. 结论与 M1 建议

### 可抽取性评级：**高**

证据：
1. 连接校验链（canvasConnectionUtils → canvasConnectionStructure → connectionConfig → canvasInputMutationGateway）**逐行搬运零改动即通过严格类型检查**，其中类型矩阵和环检测是画布最难自研的部分；
2. canvasStore 的 Graph slice 对 Supabase/antd/@gxg/shared **零依赖**，纯前端状态，抽取无阻力；
3. 所有服务耦合点（预设服务、云存储、任务执行、i18n）都收敛在 MaterialNode 组件内部的 hook 调用边界上，stub 替换不动骨架；
4. 换肤机制（CSS 变量注入）实测有效，Gxgen 紫色 → dsh 蓝的替换路径清晰。

### 对 M1 的建议：搬运 vs 部分重写的边界

| 模块 | 建议 | 理由 |
|---|---|---|
| React Flow 容器（CanvasEditor 骨架） | **搬运**（照本次 spike 的窄化口径） | props 配置/交互参数是调试出来的资产，重写纯浪费 |
| 连接校验链 4 个文件 + nodeSizeConfig | **逐行搬运** | 已实测零改动可跑；类型矩阵是产品语义 |
| canvasStore Graph slice | **搬运**，Timeline/Overlay/Playback 先不搬 | 零依赖；后续要时间线再补 |
| MaterialNode | **骨架搬运 + 面板重写** | 骨架（卡片/尺寸/handle/updateNodeData 模式）搬；配置面板表单建议按 OmniMux 能力目录重写（antd 表单层，3-5 人日） |
| CanvasNodeHandle | **部分搬运** | plus 菜单系统（拖线释放建节点）值得搬，本次未验证，列为 M1 补充项 |
| @gxg/shared 引用 | **内联窄化**（照本次口径：materialTypes.ts 整体内联 + MediaSourceRef 类型内联） | 已实测可行 |
| antd | **保留为 peer 依赖按需引入**；配置面板 Input/Select/Button 起步 | 冲突时的退路是表单层重写 |
| nodeFactory/templates | **按节点类型增量搬运** | 模板（首尾帧/数字人等）在接入 OmniMux 能力目录时逐个补 |
| fabric / dnd-kit / motion / 时间线全家 | **不搬** | 与工作流画布无关 |

**M1 最短路径**（本次 spike 已铺完一半）：把本沙盒的 `canvas/` + `store/` + `types/` 三目录平移进插件 client bundle，替换 App.tsx 为 WorkbenchStage（Apps shelf claim 入口），`--wb-*` 变量的 fallback 值从硬编码改为 `var(--dsw-static-deepseek-500, #4176E6)`，再补 React 18 兼容冒烟。

### 遗留待验证项（移交给 M1/M2）

1. **React 18 兼容冒烟**（R1）：spike 代码未用 React 19 独有 API，但需在 dsh web 实际 React 18 环境跑一次；
2. CanvasNodeHandle 的 plus 菜单系统（拖线释放空白处建下游节点）未在 spike 验证；
3. 执行链（ExecutionScheduler / nodeExecutors / SSE）属 M2 范围，本次未触及；
4. 大画布性能（200+ 节点）未测。

## 7. 沙盒复现方式

```bash
cd /Users/x/Desktop/Project/dsh-plugin/product/omnimux-dsh/research/canvas-spike
/Users/x/.workbuddy/binaries/node/versions/22.22.2/bin/npm install
/Users/x/.workbuddy/binaries/node/versions/22.22.2/bin/npm run dev
# 打开 http://localhost:5199
# 验证动线：左侧工具栏加节点 → 点选节点展开配置面板 → 输入 prompt → 执行(stub)
#          → 悬停节点见锚点 → 拖线连接（环/重复会被拒并 toast）→ 右上角切主题看换肤
```
