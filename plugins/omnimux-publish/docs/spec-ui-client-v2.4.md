# dsh-publish 客户端 UI 组件与工程实现规范 (v2.4)

> **文档定位**：本规范基于 `personal/dsh-publish/demo/index.html` 交互原型与 `docs/architecture-ui-table-v2.4.md` 架构方案，严格遵循根目录 `AGENTS.md`（§77–95 规范）与 `architecture-ui-layout-v2.3.md`，作为 `dsh-publish` 客户端 React 生产代码（`src/client/`）落地的唯一真源技术规范。

---

## 1. 规范概述与 AGENTS.md 契约符合性自查矩阵

| # | AGENTS.md 强规则 | 规范落地策略与约束 | 状态 |
|---|---|---|---|
| 1 | **Shared UI Kit Usage**（标准控件库） | 生产代码全量导入标准控件（`Button`, `IconButton`, `SearchField`, `InputField`, `DropdownSelect`, `FilterBar`, `Toolbar`, `ModalDialog`, `ConfirmModal` 来自 `dsh-ui-kit`；行下拉菜单使用 `@deepseek-ai/dsh-client-ui-primitives` 中的 `Menu`）。严禁私造重复控件。 | **PASS** |
| 2 | **Strict Prohibition on Raw Visible HTML Controls**（严禁裸 HTML 控件） | React 视图层严禁裸写未经封装的可见原生 HTML `<button>`, 文本 `<input>`, `<select>`。仅允许隐藏 DOM 工具（如 `<input type="file" style={{ display: 'none' }} />`）。 | **PASS** |
| 3 | **Zero Inline Style Blobs**（零内联 style 对象） | 严禁 `style={{ ... }}` 样式对象及 `buttonStyle`、`tableStyle` 等重复样式对象。动态尺寸/位置一律通过 CSS Custom Properties 注入（如 `style={{ '--stage-top': ... }}`），视觉样式全部外置到 `styles.css` 类选择器。 | **PASS** |
| 4 | **100% Theme Token Compliance**（全量消费 Theme Token） | 生产客户端 100% 消费 Host 注入的官方 CSS 变量（`--dsw-alias-*`），所有字面量色值必须包装为 `var(--dsw-alias-*, fallback)`。生产 `styles.css` 严禁全量重写 `:root`，仅按需引用私有别名回退。 | **PASS** |
| 5 | **Standard Geometries**（标准几何规范） | 交互控件遵循标准高度：`size="default"` 32px，`size="sm"` 28px，`size="xs"` 24px。控制栏 `ControlBar` 严格锁定单行 44–48px 高度，严禁换行折行（`flex-wrap: nowrap; overflow-x: auto;`）。 | **PASS** |
| 6 | **Externalized Dependencies**（外部依赖解耦） | 客户端 bundle 严禁打包 `react`, `react-dom`, `@deepseek-ai/dsh-client-ui-primitives` 的重复副本，必须在打包配置中 externalize。 | **PASS** |
| 7 | **Specialized Engine Exemption**（引擎豁免边界） | 本插件为标准的社媒内容与任务管理舞台，不涉及 DAG/Canvas 专有引擎，全量严格遵守 UI Kit 与 Token 规范。 | **PASS** |
| 8 | **First-Level Page 4-Layer Layout Standard + Overlay Subsystem**（一级页 4 层标准架构 + 浮层子系统） | 基础架构遵循 AGENTS.md §88 一级页 4 层标准：Layer 1 (Page Header) → Layer 2 (Action Row) → Layer 3 (Single-Row FilterBar) → Layer 4 (Main Content Area)；详情抽屉 (Drawer) 与发布弹窗 (Composer Modal) 作为 `architecture-ui-layout-v2.3.md` 定义的 Layer 5 Overlay 附属子系统。 | **PASS** |

---

## 2. 客户端组件树与生产装配规范

生产环境严格对齐 OmniMux 一级页金标间距（`demo/index.html` 中的数值仅供原型参考）：

```
PublishStage (shell.overlay Container · id: dsh-publish-stage)
├── StageHeader (Layer 1 · 间距: 16px 20px 8px)
│   ├── HeaderTextBlock (H1 22px/700 "内容发布中心" + Subtitle 13px/400)
│   └── HeaderActionsAux (IconButton[variant="ghost", size="sm"] "刷新" + IconButton[variant="ghost", size="sm"] "关闭")
│
├── ActionBarRow (Layer 2 · 间距: 8px 20px 14px)
│   ├── Button[variant="primary", size="default"] "+ 新增发布" (主 CTA, 黑实心)
│   ├── Button[variant="outline", size="default"] "批量管理"
│   └── Button[variant="outline", size="default"] "导出"
│
├── ControlBar (Layer 3 · 单行 44px · 间距: 0 20px 12px)
│   └── <FilterBar
│         compact
│         filters={[
│           // 五 Tab 按钮组 (生产 Key 严格锁定为 drafts，demo 中 draft 为原型历史别名)
│           Button[size="sm", variant={tab==="all" ? "secondary" : "ghost"}] "全部记录",
│           Button[size="sm", variant={tab==="drafts" ? "secondary" : "ghost"}] "草稿箱 (4)",
│           Button[size="sm", variant={tab==="reviewing" ? "secondary" : "ghost"}] "审核中 (1)",
│           Button[size="sm", variant={tab==="published" ? "secondary" : "ghost"}] "已发布",
│           Button[size="sm", variant={tab==="retry" ? "secondary" : "ghost"}] "失败待重试 (2)"
│         ]}
│         tools={[
│           // 右侧工具集群 (搜索必须收纳在 tools 中，禁止使用导致折行的 search 独占槽位)
│           <SearchField width={220} placeholder="搜索作品..." />,
│           <DropdownSelect[Sort] options={...} />,
│           <DropdownSelect[Type] options={["全部", "图文", "视频"]} />,
│           <DropdownSelect[Mode] options={["全部", "定时发布", "即时发布"]} />,
│           <ViewModeSwitcher (Grid | Table | Calendar) />
│         ]}
│       />
│
├── ContentViewport (Layer 4 · 生产金标外层间距: padding: 16px · gap: 16px)
│   ├── BatchActionBar (批量管理展开条 · 全选 / 批量重试 / 批量删除草稿 / 退出)
│   ├── GridView (网格卡片流 · AssetCard 网格 gap: 12px)
│   ├── TableView (14 列表格 · RecordsTable)
│   └── CalendarView (7 列月排程日历 · CalendarGrid)
│
└── OverlayComponents (Layer 5 · 浮层子系统 · 依据 layout-v2.3 契约)
    ├── RecordDetailDrawer (三段式抽屉: 作品信息 / 发布模式 / 分发与账号)
    └── PublishComposerModal (ModalDialog: 即时发布 / 定时排期表单)
```

---

## 3. UI Kit 与 Primitives 控件选型对照表

| 原型 HTML 元素 (`demo/index.html`) | 生产 React 组件 (`src/client/`) | 来源模块 | 属性配置与约束 |
|---|---|---|---|
| `<button class="btn btn-primary">` | `<Button variant="primary" size="default">` | `dsh-ui-kit` | 高度 32px，实色背景，用于主 CTA |
| `<button class="btn btn-secondary">` | `<Button variant="outline" size="default">` | `dsh-ui-kit` | 高度 32px，线框边框，用于次级操作 |
| `<button class="icon-btn">` | `<IconButton variant="ghost" size="sm">` | `dsh-ui-kit` | 28px/32px 紧凑型，用于刷新、关闭、视图切换 |
| `<input type="text" class="search-input">` | `<SearchField>` | `dsh-ui-kit` | 宽 220px，高度 32px，内置放大镜与清除按钮，作为 FilterBar 的 tools 项注入 |
| `<select class="select-dropdown">` | `<DropdownSelect>` | `dsh-ui-kit` | 高度 32px，消费主题 Token，受控下拉菜单 |
| `<nav class="status-tabs-group">` | `<FilterBar compact filters={...}>` + `<Button variant={active ? "secondary" : "ghost"} size="sm">` | `dsh-ui-kit` | 单选受控，内嵌 Badge 计数 |
| `<div class="modal-box">` | `<ModalDialog>` | `dsh-ui-kit` | 遮罩、居中、Escape/点击外侧关闭 |
| 行末 `<button class="btn-menu">` 及浮层 | `<IconButton size="sm">` + `<Menu portal={true}>` | `@deepseek-ai/dsh-client-ui-primitives` | 行末 `⋮` 按钮，Portal 挂载下拉菜单，`stopPropagation` |
| 批量删除确认弹窗 | `<ConfirmModal confirmVariant="danger">` | `dsh-ui-kit` | 危险操作二次确认，`confirmVariant="danger"` |

---

## 4. Table View 14 列与 8 维指标空槽契约

### 4.1 列定义与 ViewModel Key（严格 14 列闭合）

```tsx
export const METRIC_KEYS = [
  'likes',
  'comments',
  'shares',
  'saves',
  'clicks',
  'views',
  'impressions',
  'reach'
] as const;

export const TABLE_COLUMNS = [
  { key: 'select', label: '', width: 32, align: 'center' },
  { key: 'content', label: 'Content', minWidth: 240, align: 'left', sticky: true },
  { key: 'platforms', label: 'Platforms', minWidth: 100, align: 'left' },
  { key: 'date', label: 'Date', width: 140, align: 'left', sortable: true },
  { key: 'status', label: 'Status', width: 100, align: 'left', sortable: true },
  // 8 维数据指标列：key 保持标准全称，表头 label 使用标准短名并包含内联 SVG 图标，宽度严格锁定 56px
  { key: 'likes', label: 'Likes', icon: IconLikesSvg, width: 56, align: 'center' },
  { key: 'comments', label: 'Cmts', icon: IconCommentsSvg, width: 56, align: 'center' },
  { key: 'shares', label: 'Shrs', icon: IconSharesSvg, width: 56, align: 'center' },
  { key: 'saves', label: 'Saves', icon: IconSavesSvg, width: 56, align: 'center' },
  { key: 'clicks', label: 'Clicks', icon: IconClicksSvg, width: 56, align: 'center' },
  { key: 'views', label: 'Views', icon: IconViewsSvg, width: 56, align: 'center' },
  { key: 'impressions', label: 'Impr.', icon: IconImpressionsSvg, width: 56, align: 'center' },
  { key: 'reach', label: 'Reach', icon: IconReachSvg, width: 56, align: 'center' },
  // 行末操作菜单
  { key: 'actions', label: '', width: 40, align: 'center', stickyRight: true }
] as const;
```

### 4.2 表头图标规范
- 严禁使用 Emoji 字符（如 `♡`、`💬`、`🔀`）。必须使用标准的 14px 内联 SVG 图标，统一收敛在 `src/client/icons/metrics.js`。
- 表头文字与图标颜色统一消费 `--dsw-alias-label-tertiary`（字号 12px，字体加粗 600）。

### 4.3 诚实空槽渲染算法（`formatMetric`）

```ts
/**
 * 格式化指标数据
 * 规则：在社媒分析真源接入前，一律诚实返回 '-'，禁止注入任何假数据。
 * 当传入有效数字时直接转为字符串（预留未来接入真源）。
 */
export function formatMetric(val: unknown): string {
  if (val === null || val === undefined || val === '' || typeof val !== 'number' || !Number.isFinite(val)) {
    return '-';
  }
  return String(val);
}
```
- 指标单元格样式：`text-align: center; font-size: 12px; font-variant-numeric: tabular-nums; color: var(--dsw-alias-label-tertiary, #94a3b8);`。

### 4.4 行末操作菜单 `⋮` 交互与显隐规则
- **触发器**：`IconButton[size="sm"]`（图标为 `IconEllipsisOutline16` 或 14px SVG）。
- **事件冒泡阻断**：点击触发按钮及菜单内部任何操作项必须调用 `e.stopPropagation()`，严禁意外触发行点击（打开详情抽屉）。
- **状态感知显隐规则**：
  - `draft`（草稿）：查看详情、编辑草稿、删除草稿。
  - `published`（已发布）：查看详情。
  - `publishing`（发布中）：查看详情。
  - `reviewing`（审核中）：查看详情。
  - `failed` / `partial_failed`（失败/部分失败，或子任务中存在 failed）：查看详情、重试。

---

## 5. 五 Tab 过滤契约与六态 displayStatus 算法

### 5.1 五 Tab ↔ Host 查询与计数映射表

生产环境 Tab 键值严格锁定为 `drafts`（对齐 `PRD-v2` §2.4.1 与 `architecture-ui-layout-v2.3` §7.4，`demo/index.html` 中的 `draft` 仅作为原型历史别名）：

| Tab 生产 Key | 中文 Tab 标签 | 对应 Host 查询条件 (`status`) | 徽章 Badge 数据源 | 过滤行为规则 |
|---|---|---|---|---|
| `all` | **全部记录** | `ui.allTabIncludesDrafts ? "all" : "submitted"` | 无徽章（或 `counts.submitted`） | 默认展示全部已提交记录（排除 draft 草稿） |
| `drafts` | **草稿箱** | `"draft"` | `counts.draft` | 仅展示本地草稿（`record.status === 'draft'`） |
| `reviewing` | **审核中** | `"reviewing"` | `counts.reviewing` | 仅展示处于平台审核中的任务（`displayStatus === 'reviewing'`） |
| `published` | **已发布** | `"published"` | 无徽章（或 `counts.published`） | 仅展示全平台发布成功的记录（`displayStatus === 'published'`） |
| `retry` | **失败待重试** | `"failed"` | `counts.failed` | 包含 `failed` 与 `partial_failed`，或存在失败子任务的记录 |

> **注**：Host `tabCounts()` 须按 `architecture-ui-layout-v2.3` 验收项 #2 补齐 `published` 与 `failed` 字段；前端徽章严格消费 `counts.failed`，严禁私造 `counts.retry`。

### 5.2 六态 displayStatus 映射与派生算法

记录级状态投影与徽章严格闭环为六态中文，全链路同源：

| 内部状态 Key | 中文状态标签 (`displayStatus`) | 色值 Token | Subtle 背景 Token |
|---|---|---|---|
| `draft` | **草稿** | `--dsw-alias-label-secondary` | `--dsw-alias-state-draft-subtle` |
| `publishing` | **发布中** | `--dsw-alias-state-publishing` | `--dsw-alias-state-publishing-subtle` |
| `reviewing` | **审核中** | `--dsw-alias-state-warn-text` | `--dsw-alias-state-warn-subtle` |
| `published` | **已发布** | `--dsw-alias-state-success-text` | `--dsw-alias-state-success-subtle` |
| `partial_failed` | **部分失败** | `--dsw-alias-state-partial-text` | `--dsw-alias-state-partial-subtle` |
| `failed` | **失败** | `--dsw-alias-state-error-text` | `--dsw-alias-state-error-subtle` |

```ts
export type DisplayStatus = 'draft' | 'publishing' | 'reviewing' | 'published' | 'partial_failed' | 'failed';

export interface RecordItem {
  id: string;
  status: 'draft' | 'submitted';
  aggregate?: 'draft' | 'publishing' | 'partial_failed' | 'failed' | 'published';
  subtask_summary?: {
    total?: number;
    reviewing?: number;
    failed?: number;
    published?: number;
  };
  subtasks?: Array<{
    platform: string;
    account?: string;
    status: 'pending' | 'publishing' | 'reviewing' | 'published' | 'failed';
  }>;
}

/**
 * 客户端状态聚合辅助函数（与 Host store.aggregateStatus 严格同构）
 * 核心不变量：inflight > 0 优先返回 'publishing'，保障 reviewing 覆盖层能正确派生。
 */
export function aggregateOf(record: RecordItem): 'draft' | 'publishing' | 'partial_failed' | 'failed' | 'published' {
  if (!record || record.status === 'draft') return 'draft';
  const tasks = Array.isArray(record.subtasks) ? record.subtasks : [];
  if (tasks.length === 0) return 'publishing';
  const published = tasks.filter(t => t.status === 'published').length;
  const failed = tasks.filter(t => t.status === 'failed').length;
  const inflight = tasks.length - published - failed;
  if (inflight > 0) return 'publishing';
  if (failed === 0) return 'published';
  if (published === 0) return 'failed';
  return 'partial_failed';
}

/**
 * 将账本数据投影为前端展示态
 * 严格逐行对齐 architecture-ui-table-v2.4.md §5.2 伪代码
 * 
 * 对照表：
 * 1. if record.status === 'draft' -> 'draft'
 * 2. agg = record.aggregate || aggregateOf(record)
 * 3. reviewingCount = record.subtask_summary?.reviewing || count(subtasks, s => s.status==='reviewing')
 * 4. if reviewingCount > 0 and agg === 'publishing' -> 'reviewing'
 * 5. return agg
 */
export function displayStatus(record: RecordItem): DisplayStatus {
  if (!record || record.status === 'draft') {
    return 'draft';
  }
  const agg = record.aggregate || aggregateOf(record);
  const summary = record.subtask_summary;
  const reviewingCount = summary && typeof summary.reviewing === 'number'
    ? summary.reviewing
    : (record.subtasks || []).filter(s => s.status === 'reviewing').length;

  if (reviewingCount > 0 && agg === 'publishing') {
    return 'reviewing';
  }
  return agg;
}
```

---

## 6. Theme Token 消费规范与主题适配

生产客户端组件必须 100% 消费 Host 运行时注入的 `--dsw-alias-*` CSS 变量。`styles.css` 中所有颜色消费均采用 `var(--dsw-alias-*, fallback)`。严禁在生产 `styles.css` 中全局重写 `:root`。

### 6.1 生产常用 Token 消费与 Fallback 清单

```css
/* 生产样式只消费 Host 注入的 Token，附带标准 Fallback */
.dsh-publish-view {
  background: var(--dsw-alias-bg-base, #ffffff);
  color: var(--dsw-alias-label-primary, #0f172a);
}

.dsh-publish-card {
  background: var(--dsw-alias-bg-base, #ffffff);
  border: 1px solid var(--dsw-alias-border-l1, #e2e8f0);
}

.status-pill-badge.publishing {
  background: var(--dsw-alias-state-publishing-subtle, rgba(37, 99, 235, 0.12));
  color: var(--dsw-alias-state-publishing, #2563eb);
}

.platform-tag.tiktok { background: var(--dsw-alias-platform-tiktok, #000000); }
.platform-tag.xhs { background: var(--dsw-alias-platform-xhs, #ff2442); }
.platform-tag.sph { background: var(--dsw-alias-platform-sph, #fa9d3b); }
```

### 6.2 附录：Demo 原型独立沙箱双主题映射对照（生产严禁在 styles.css 重写全局 :root）

> 以下定义仅作为 `demo/index.html` 独立静态演示沙箱的 Token 对照字典，生产运行时由 OmniMux Shell 全局注入。

```css
/* [Demo 沙箱参考] 浅色模式 */
:root {
  --dsw-alias-bg-base: #ffffff;
  --dsw-alias-bg-layer-1: #ffffff;
  --dsw-alias-bg-layer-2: #f8fafc;
  --dsw-alias-bg-layer-3: #f1f5f9;
  --dsw-alias-thumb-bg: #475569;
  --dsw-alias-border-l1: #e2e8f0;
  --dsw-alias-border-l2: #cbd5e1;
  --dsw-alias-label-primary: #0f172a;
  --dsw-alias-label-secondary: #64748b;
  --dsw-alias-label-tertiary: #94a3b8;
  --dsw-alias-label-inverse: #ffffff;
  --dsw-alias-brand-primary: #0f172a;
  --dsw-alias-brand-hover: #1e293b;
  --dsw-alias-brand-subtle: rgba(15, 23, 42, 0.06);
  --dsw-alias-brand-border: rgba(15, 23, 42, 0.15);
  --dsw-alias-brand-focus-ring: rgba(37, 99, 235, 0.15);
  --dsw-alias-interactive-bg-hover: rgba(0, 0, 0, 0.04);
  --dsw-alias-interactive-bg-active: rgba(0, 0, 0, 0.08);
  --dsw-alias-state-success: #10b981;
  --dsw-alias-state-success-text: #059669;
  --dsw-alias-state-success-subtle: rgba(16, 185, 129, 0.12);
  --dsw-alias-state-error: #ef4444;
  --dsw-alias-state-error-text: #dc2626;
  --dsw-alias-state-error-subtle: rgba(239, 68, 68, 0.12);
  --dsw-alias-state-partial: #ea580c;
  --dsw-alias-state-partial-text: #c2410c;
  --dsw-alias-state-partial-subtle: rgba(234, 88, 12, 0.12);
  --dsw-alias-state-warn: #f59e0b;
  --dsw-alias-state-warn-text: #d97706;
  --dsw-alias-state-warn-subtle: rgba(245, 158, 11, 0.12);
  --dsw-alias-state-publishing: #2563eb;
  --dsw-alias-state-publishing-subtle: rgba(37, 99, 235, 0.12);
  --dsw-alias-state-draft-subtle: rgba(100, 116, 139, 0.12);
  --dsw-alias-backdrop-bg: rgba(0, 0, 0, 0.45);
  --dsw-alias-platform-tiktok: #000000;
  --dsw-alias-platform-xhs: #ff2442;
  --dsw-alias-platform-sph: #fa9d3b;
  --dsw-shadow-lv1: 0 1px 3px 0 rgba(0, 0, 0, 0.06), 0 1px 2px 0 rgba(0, 0, 0, 0.04);
  --dsw-shadow-lv2: 0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);
  --dsw-shadow-modal: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* [Demo 沙箱参考] 暗色模式 */
[data-theme="dark"] {
  --dsw-alias-bg-base: #0f172a;
  --dsw-alias-bg-layer-1: #1e293b;
  --dsw-alias-bg-layer-2: #0b1120;
  --dsw-alias-bg-layer-3: #334155;
  --dsw-alias-thumb-bg: #334155;
  --dsw-alias-border-l1: #334155;
  --dsw-alias-border-l2: #475569;
  --dsw-alias-label-primary: #f8fafc;
  --dsw-alias-label-secondary: #94a3b8;
  --dsw-alias-label-tertiary: #64748b;
  --dsw-alias-label-inverse: #0f172a;
  --dsw-alias-brand-primary: #f8fafc;
  --dsw-alias-brand-hover: #e2e8f0;
  --dsw-alias-brand-subtle: rgba(248, 250, 252, 0.1);
  --dsw-alias-brand-border: rgba(248, 250, 252, 0.2);
  --dsw-alias-brand-focus-ring: rgba(59, 130, 246, 0.25);
  --dsw-alias-interactive-bg-hover: rgba(255, 255, 255, 0.06);
  --dsw-alias-interactive-bg-active: rgba(255, 255, 255, 0.12);
  --dsw-alias-state-success: #10b981;
  --dsw-alias-state-success-text: #34d399;
  --dsw-alias-state-success-subtle: rgba(16, 185, 129, 0.2);
  --dsw-alias-state-error: #ef4444;
  --dsw-alias-state-error-text: #f87171;
  --dsw-alias-state-error-subtle: rgba(239, 68, 68, 0.2);
  --dsw-alias-state-partial: #f97316;
  --dsw-alias-state-partial-text: #fb923c;
  --dsw-alias-state-partial-subtle: rgba(249, 115, 22, 0.2);
  --dsw-alias-state-warn: #f59e0b;
  --dsw-alias-state-warn-text: #fbbf24;
  --dsw-alias-state-warn-subtle: rgba(245, 158, 11, 0.2);
  --dsw-alias-state-publishing: #3b82f6;
  --dsw-alias-state-publishing-subtle: rgba(59, 130, 246, 0.2);
  --dsw-alias-state-draft-subtle: rgba(148, 163, 184, 0.2);
  --dsw-alias-backdrop-bg: rgba(0, 0, 0, 0.65);
  --dsw-alias-platform-tiktok: #1e293b;
  --dsw-shadow-lv1: 0 1px 3px 0 rgba(0, 0, 0, 0.4);
  --dsw-shadow-lv2: 0 4px 6px -1px rgba(0, 0, 0, 0.5);
  --dsw-shadow-modal: 0 20px 25px -5px rgba(0, 0, 0, 0.6);
}
```

---

## 7. 生产源码工程目录规划

后续由编码工程师林深将 demo 落地至 `src/client/` 时，按如下模块化组织：

```
src/client/
├── PublishStage.jsx          # 主入口舞台（4层标准架构容器、stage subscribe、响应式 box）
├── StageHeader.jsx           # Layer 1: 标题 + 业务描述 + 刷新/关闭 (间距 16px 20px 8px)
├── ActionBar.jsx             # Layer 2: + 新增发布 + 批量管理 + 导出 (间距 8px 20px 14px)
├── ControlBar.jsx            # Layer 3: 单个 FilterBar (filters=五Tab, tools=搜索+下拉+视图) (单行 44px, 间距 0 20px 12px)
├── BatchActionBar.jsx        # 批量操作滑动条
├── views/
│   ├── GridView.jsx          # Layer 4: 网格卡片视图 (AssetCard 流 · gap: 12px)
│   ├── AssetCard.jsx         # 现代卡片组件 (112px 封面 + 平台点 + 中文 Pill)
│   ├── RecordsTable.jsx      # Layer 4: 14 列列表视图 (8 维 SVG 表头 + 56px '-' 空槽)
│   ├── RowActionMenu.jsx     # 行末 ⋮ 菜单 (primitives Menu + stopPropagation)
│   ├── CalendarView.jsx      # Layer 4: 日历排程视图 (7 列月网格 + 色条排期条)
│   └── EmptyState.jsx        # 空状态组件 (colspan="14" / 图标 + 提示)
├── drawer/
│   └── RecordDetailDrawer.jsx# Layer 5: 三段式详情抽屉 (作品信息/发布模式/分发账号)
├── composer/
│   └── ComposerModal.jsx     # Layer 5: 新增发布弹窗表单
├── icons/
│   └── metrics.js            # 8 维指标 SVG 图标集 (Likes, Cmts, Shrs, Saves, Clicks, Views, Impr, Reach)
├── status-display.js         # displayStatus 算法与中文映射
├── metrics-display.js        # formatMetric 算法与空值处理
├── locales.js                # 国际化语言包 (统一中文单真源)
└── styles.css                # 100% Theme Token 映射样式表
```

---

## 8. 验收与交付门禁

1. **表格结构**：`RecordsTable` 必须严格闭合为 14 列，表头使用内联 SVG，无真源指标列全部居中渲染为 `-`（宽度严格锁定 56px）。
2. **状态中文化与 Tab 隔离**：过滤 UI 严格采用五 Tab（`all`, `drafts`, `reviewing`, `published`, `retry`），记录状态徽章严格采用六态 `displayStatus`（草稿、发布中、审核中、已发布、部分失败、失败），全链路 100% 覆盖，严禁英文 raw 字符串。
3. **菜单交互**：点击 `⋮` 按钮展开操作菜单，阻断事件冒泡，按状态显隐操作项。
4. **Host 零污染**：Host 账本与接口不夹带任何虚假数据字段，`src/store.js` 与 `src/index.js` 零 diff。
5. **AGENTS.md 规范与金标尺寸**：
   - 零裸 visible HTML 控件、零 inline style 对象、100% Theme Token 覆盖。
   - Layer 4 生产外层间距必须为 `padding: 16px`（严禁 demo 原型值 `20px 20px 40px` 进生产）。
   - AssetCard 封面高度严格锁定为 `112px`（严禁 demo 原型值 `116px` 进生产）。
   - Layer 3 仅使用单个 `<FilterBar compact>` 装配，搜索框严格收纳在 `tools` 中，保障单行 44px 不换行。
