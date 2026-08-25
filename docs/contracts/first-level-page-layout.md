# OmniMux 全局插件一级页 UI 布局规范 (First-Level Page Layout Standard)

> 适用范围：所有 OmniMux 插件一级页（`shell.overlay` 页面，如资产中心、商品中心、账号矩阵、工作流中心等）  
> 规范级别：**强制 (MANDATORY)** —— 所有 Agent 与人类开发者新建/改造插件一级页均必须遵守。

---

## 1. 四层信息架构标准 (4-Layer Pattern)

所有一级页 Stage 必须严格按照以下从上至下的四层顺序组织，禁止混杂或随意调序：

```
┌───────────────────────────────────────────────────────────────────────────────┐
│ Layer 1: Page Header                                                          │
│  [ 大标题 H1 (22-24px Bold) ]                                [ 刷新 ] [ 关闭 ]  │
│  [ 副标题说明 (13px secondary) ]                                               │
├───────────────────────────────────────────────────────────────────────────────┤
│ Layer 2: Action Row                                                           │
│  [ + 添加资产 (主CTA: 黑胶囊/8px) ]  [ 导入资产包 (次级: outline) ]              │
├───────────────────────────────────────────────────────────────────────────────┤
│ Layer 3: Single-Row Toolbar (FilterBar, 44-48px)                              │
│  [所有类型] [角色] [场景] [风格包] [道具] … │ [ 🔍 搜索资产 ] [ 最近更新 ∨ ] [▦][☰] │
│  (左侧: 分类过滤 Chips)                    │ (右侧: 搜索框 + 排序下拉 + 视图切换) │
├───────────────────────────────────────────────────────────────────────────────┤
│ Layer 4: Main Content Area                                                    │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                         │
│  │ 资产卡片/列表 │  │ 资产卡片/列表 │  │ 资产卡片/列表 │                         │
│  └──────────────┘  └──────────────┘  └──────────────┘                         │
└───────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. 各层规范细节

### Layer 1: 页面头部 (Page Header)
- **大标题 (H1)**：字号 `22px–24px`，`font-weight: 700`，`color: var(--dsw-alias-label-primary)`，行高 `30px`。
- **副标题 (Subtitle)**：字号 `13px`，`color: var(--dsw-alias-label-secondary)`，行高 `20px`。说明该模块核心价值及给 Agent 调用的语义。
- **右侧控制区**：放置辅助性操作图标（`RefreshIcon` 刷新、`CloseIcon` 关闭），使用 28px/32px `IconButton`（`variant="ghost"`）。

### Layer 2: 独立操作行 (Action Row)
- **位置**：副标题正下方、工具栏正上方，**左对齐**。
- **主 CTA 按钮**：`Button variant="primary"`（例如 `+ 添加资产`、`+ 新建商品`、`+ 绑定账号`）。
- **次级操作按钮**：`Button variant="outline"` / `variant="secondary"`（例如 `导入资产包`、`批量同步`、`导出`）。
- **红线**：禁止将主新建 CTA 按钮挤在 Layer 3 搜索栏右侧。

### Layer 3: 单行工具栏 (Toolbar / FilterBar)
- **高度**：单行高度 `44px–48px`，`overflow: hidden`，**严禁多行折行**。
- **左侧 (Filters)**：
  - 第一个 Chip 为 `所有类型` / `全部`。
  - 业务分类 Chips（角色 / 场景 / 风格包 / 道具 / 知识包 / 自定义等）。
  - 选中态使用 `variant="secondary"` / filled pill 背景，未选中态使用 `variant="ghost"`。
- **右侧 (Tools & Search Cluster)**：
  - **搜索框**：`SearchField`（宽度 `200px–260px`，带清除按钮与放大镜图标）。
  - **排序下拉**：`DropdownSelect`（宽度 `110px–130px`，选项如 `最近更新`、`按名称`）。
  - **视图切换 (View Mode)**：`[ ▦ 网格 ] [ ☰ 列表 ]` 图标切换按钮组，使用 `aria-pressed` 标记当前视图。

### Layer 4: 主内容区 (Main Content Area)
- **自适应与滚动**：`flex: 1; overflow: auto;`。
- **网格模式 (Grid)**：卡片宽度 `minmax(220px, 1fr)`，`gap: 12px`。
- **列表模式 (List)**：标准表格行布局，悬停背景色高亮，支持勾选批量管理。
- **空态与异常**：标准化空态居中引导（`emptyLabel` + `emptyActionLabel`）。

---

## 3. 组件库对接规范 (`dsh-ui-kit`)

- 必须从 `dsh-ui-kit` 导入 `Button`, `IconButton`, `SearchField`, `DropdownSelect`, `FilterBar`, `Toolbar` 等控件。
- 严禁书写原生 HTML `<button>` 或 `<select>`。
- 所有颜色一律采用 `var(--dsw-alias-*)`。
