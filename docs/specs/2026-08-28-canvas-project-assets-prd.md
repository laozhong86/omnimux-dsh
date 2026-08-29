---
title: "OmniMux 工作流画布：项目资产与画布素材双 Tab 抽屉功能规格说明书 (PRD)"
id: "spec-omnimux-canvas-project-assets"
type: "spec"
status: "accepted"
authority: "L2"
date: "2026-08-28"
authors: ["方向明", "析客", "高见远", "林深", "严过关"]
subsystem: "omnimux-workflow"
---

# OmniMux 工作流画布：项目资产与画布素材双 Tab 抽屉功能规格说明书 (PRD)

> 状态：**已拍板（以高保真原型 v10.0 为优先真相）**  
> 原型依据：`deliverables/prototypes/canvas-project-assets-demo.html`  
> 设计令牌：`product/omnimux-dsh/design.md`（100% DSH 原生 `--dsw-*` Token）  
> 宿主插件：`plugins/omnimux-workflow`

---

## 1. 背景与核心分流心智

在 OmniMux-DSH 画布创作过程中，用户与 Agent 需要在**「当前创作态」**与**「项目持久态」**两个不同维度频繁操作资产：
1. **【画布】Tab（当前创作态）**：聚焦当前画布运行态素材，专属提供搜索、三维下拉筛选（`类型 ∨`、`标签 ∨`、`时间 ∨`）、列表/网格切换、Hover 元数据卡片、`⌖` 靶心定位以及 13 项全量专属右键菜单。底部为单个高对比度主按钮 **`[↑ 导入文件]`**。
2. **【资产】Tab（全局持久态）**：聚焦工程持久化资产与主体库，置顶展示「主体库」成套资产入口，下接项目物理目录树（如 `1111` 文件夹）、文件列表、空态拖拽上传区，底部提供 **`[📁 新建文件夹]` + `[↑ 导入文件]`** 双操作栏。

---

## 2. 现有画布 UI 资产复用清单（严禁重复造轮子）

本次工程落地**强制优先复用以下已有结构与模块**，避免重复造轮子：

1. **抽屉宿主**：复用 `plugins/omnimux-workflow/src/canvas/editor/components/AssetsDrawer.tsx`，保留生命周期、快捷键（`Cmd+E` / `A`）和后端通信，升级为双 Tab 与三维筛选结构。
2. **浮层容器**：复用 `plugins/omnimux-workflow/src/canvas/editor/components/ContextMenu.tsx` 的 `createPortal(..., document.body)` 绝对挂载架构，承载 3 套专属右键菜单与 4 套下拉筛选 Popover。
3. **指针防穿透守卫**：复用 `plugins/omnimux-workflow/src/canvas/editor/components/toolbarPointerGuard.ts`（`stopToolbarNativeEvent`），确保抽屉与浮层内部操作不触发画布缩放与拖拽。
4. **主题 Token 桥接**：复用 `plugins/omnimux-workflow/src/canvas/theme/workbench-theme.css` 的 `--wb-*` / `--dsw-*` 全量主题变量，0 裸色硬编码。
5. **图标库**：复用现存 `lucide-react`，严格使用 1.6px 细线条线性矢量图标。
6. **后端 API**：复用 `/omnimux/assets/library` 与 `/omnimux/assets/artifacts` 现有接口。

---

## 3. 功能规格明细

### 3.1 【画布】Tab 专属功能
- **三维筛选 Popover**：
  - `类型 ∨`：宽 140px，全部/图片/视频/音频/文本/其他，白底黑勾圆圈；
  - `标签 ∨`：宽 136px，人物/场景/待定版/最终版/道具/音色/服装，7 色实心圆点；
  - `时间 ∨`：宽 145px，两段式布局（最新优先/最旧优先 + 全部/今天/近7天/近30天/自定义），右侧白勾；
- **Hover 预览卡片 (Flyout Inspector)**：宽 250px，缩略图 + 尺寸/格式/大小/修改时间 + ⌖ 定位 + 查看依赖；
- **⌖ 靶心定位**：平滑居中聚焦画布目标节点 + 2 次蓝色脉冲光晕（`highlight-pulse`）；
- **专属右键菜单（13 项）**：`添加到画布 (⌘⇧A)`、`添加到对话`、`添加到主体库`、`存到项目资产`、`在画布中定位`、`打开 (⌘O)`、`在 Finder 中打开 (⌘⇧R)`、`复制路径`、`复制文件 (⌘C)`、`复制副本 (⌘D)`、`切换到树形视图`、`重命名 (Enter)`、`删除 (Backspace 🔴)`；
- **底部操作**：单个主按钮 **`[↑ 导入文件]`**（白底黑字高对比度）。

### 3.2 【资产】Tab 专属功能
- **置顶主体库卡片**：高度 48px，点击进入主体库二级管理页；
- **专属右键菜单**：
  - 素材文件（5项）：`🖼 添加到画布`、`💬 添加到 agent`、`📁 在 Finder 中打开`、`🗂 移动到`、`🗑 删除 (🔴)`；
  - 文件夹（4项）：`📁 在 Finder 中打开`、`✎ 重命名`、`🗂 移动到`、`🗑 删除 (🔴)`；
- **空态拖拽区**：支持文件拖入本地增量导入；
- **底部操作**：双按钮 `[📁 新建文件夹]` + `[↑ 导入文件]`。

### 3.3 主体库二级页面
- **顶部操作**：`[← 返回]` + `[最近更新 ∨]` 排序下拉（最近更新 ✓ / 使用次数）；
- **五联分类胶囊**：`所有类型`、`角色`、`场景`、`风格包`、`自定义`；
- **成套主体卡片**：支持直接拖入画布成套生成对应节点；
- **底部操作**：`[创建主体]` + `[导入主体包]`。
