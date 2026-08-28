# dsh-publish 内容发布中心功能与 UI 需求规格说明书（PRD v2.4）

| 字段 | 内容 |
|---|---|
| 文档状态 | **Revised by Stakeholder Feedback** (2026-08-25) |
| 版本 | v2.4（Table 14 列诚实空槽 + 状态中文单真源；四层壳沿用 v2.3） |
| 插件归属 | `personal/dsh-publish/` |
| 需求负责人 | 齐活林（交付总监） / 许清楚（需求分析） |
| 架构对照 | `docs/architecture-ui-table-v2.4.md`（本轮真源）/ `docs/architecture-ui-layout-v2.3.md` / `docs/architecture-ui-slim.md` |
| 布局真源 | `product/omnimux-dsh/docs/contracts/first-level-page-layout.md` + 根目录 `AGENTS.md`「First-Level Page 4-Layer Layout Standard」 |

---

## 0. 本次需求修正要点（对齐最新反馈）

1. **去繁就简，聚焦核心能力**：
   - 移除上一版参考截图中非 DSH 规范的杂散元素（如顶栏的手机扫码、客服耳机、文档外链、通知铃铛等非中枢元素）。
   - **布局改判（v2.3）**：废弃「顶栏塞三 Tab + FilterBar 塞主 CTA」的旧 IA。一级页必须按自上而下标准层次排布（详见 §2）：页面标题 → 描述文本 → 操作按钮行 → 控制与筛选栏 → 内容列表区。状态分类 Tab 迁入 Control Bar 左侧，不再占据 Header。
2. **筛选工具条规范化**：
   - **移除**「发布人」筛选器。
   - 文案收敛为简洁的标准形式，默认均为「全部」：
     - `全部作品类型 ∨` $\rightarrow$ **`作品类型 ∨`**（默认：全部，选项：全部 / 图文 / 视频）
     - `全部发布状态 ∨` $\rightarrow$ **状态由 Control Bar 左侧 Tab 承载**（见 §2.4；不再在右侧重复「发布状态」下拉）
     - `全部发布模式 ∨` $\rightarrow$ **`发布模式 ∨`**（默认：全部，选项：全部 / 定时发布 / 即时发布）
   - 单行高度严格限制为 44–48px，控件均为 32px 标准高，严禁折行。
3. **三大视图切换体系**（列与指标以 v2.4 合同为准）：
   - **表格列表模式 (Table View)**：密集排布，列闭合为 14 列 `[ ] | Content | Platforms | Date | Status | Likes | Cmts | Shrs | Saves | Clicks | Views | Impr. | Reach | ⋮`，支持按 Date / Status 排序、复选框勾选、行末 ⋮ 菜单。账号信息不进 Table 列；8 维指标列为诚实空槽 `-`，禁止假数字。
   - **卡片视图模式 (Cards View)**：封面 + 类型标签 + 多图角标、标题、时间 + 发布模式、分发平台状态簇、关联账号（join）、右侧综合状态胶囊。
   - **日程排程日历模式 (Calendar Schedule View)**：月度日程看板、月份下拉选择、Today 回到今天、周起始日切换（Sun/Mon）、排期任务卡片（时间 + 标题 + 平台 + 定时 ⏰ + 溢出折叠 + 今日红框高亮）。日历 pill 不展示阅读数或任何互动指标。
4. **严格遵循 DSH 插件视觉规范**：
   - 100% Theme Token（`var(--dsw-alias-*, fallback)`），完美支持 Light / Dark 主题。
   - 控件高度 32px，标准圆角 8px / 12px，严禁 raw 未样式化 HTML 控制元素。
   - 必须消费 `dsh-ui-kit`（`Button` / `IconButton` / `SearchField` / `DropdownSelect` / `FilterBar` / `ModalDialog`）。

---

## 0.1 v2.2 展示合同修正（用户裁决，v2.3 继续生效）

1. **移除 Table `Profile` 列**。无独立 Profile 接口；账号真源是 hub `GET /omnimux/accounts`，不得把 `display_name` 快照进账本当列。账号信息只出现在 Cards 与 Detail Drawer 的 join 展示，不回 Table 列。
2. **删除全部互动假指标**：Likes / Cmts / Shrs / Saves / Clicks / Views / Impr. / Reach。publish 账本与 `omnimux_publish_get` 均不提供这些字段；UI 不得用 `-` 占位冒充已接入。表头排序不得再出现 Views / Likes。
3. **列表真源闭合为编排字段**：Content / Platforms / Date / Status。`scheduled` 是发布模式，不是 Status pill。
4. **CSV 导出**不得固化 Profile / Likes / Views。列与 Table 真源一致，另附派生 Mode：`ID, Title, Type, Platforms, Date, Status, Mode`。

---

## 0.2 v2.3 布局合同修正（用户裁决）

1. **一级页强制 4 层（视觉上可拆成 5 段）**：对齐 `first-level-page-layout.md`。用户反馈的「标题 / 描述 / 操作按钮行 / 控制筛选栏 / 内容区」= 官方 Layer 1（标题+描述）+ Layer 2 + Layer 3 + Layer 4。
2. **主 CTA 禁止进入 FilterBar**：`+ 新增发布`、`批量管理`、`导出` 必须落在 Layer 2 Action Row；严禁再把 Primary 按钮塞进搜索行右侧。
3. **状态分类 Tab 迁入 Control Bar 左侧**：Header 不再承载业务 Tab。左侧 Tab 默认集合：`全部记录` / `草稿箱 (N)` / `审核中` / `已发布` / `失败待重试`。
4. **Header 右侧仅保留舞台辅助控件**：Refresh + Close `IconButton`；禁止主题切换、扫码、客服、外链等非中枢元素。

---

## 0.3 v2.4 指标列与状态中文单真源（用户裁决）

> 覆盖关系：v2.4 **只覆盖**「Table 不许出现指标列」；**不覆盖**「不许假装有数据」。`-` 是「无真源」的诚实字形，不是已接入的占位。Cards / Drawer / Calendar / CSV 仍禁止指标数字。完整合同见 `docs/architecture-ui-table-v2.4.md`。

1. **Table 恢复 8 维指标展示槽（无真源一律 `-`）**。列闭合 14 列：
   `[ ] | Content | Platforms | Date | Status | Likes | Cmts | Shrs | Saves | Clicks | Views | Impr. | Reach | ⋮`
   - 表头 8 个指标列：内联 SVG 图标 + 英文短名（Likes / Cmts / Shrs / Saves / Clicks / Views / Impr. / Reach），颜色 `--dsw-alias-label-tertiary`。禁止把 emoji 写进 DOM。
   - 单元格恒为居中 `'-'`（12px / tabular-nums / `--dsw-alias-label-tertiary`）。禁止 `0`、`--`、空白、`N/A`。
   - MOCK / 账本 **不准**写 `likes` / `views` 等字段。字段缺省 = 无真源。
   - 空态与错误提示 `colspan="14"`。容器 `overflow-x: auto`。禁止再加 Profile 列。
2. **行末 `⋮` 操作菜单**（四动作按状态动态可见，不可见项不渲染）：
   | 动作 | 可见条件 |
   |---|---|
   | 查看详情 | 恒显 |
   | 编辑草稿 | 仅 draft |
   | 删除草稿 | 仅 draft（危险） |
   | 重试 | `failed` / `partial_failed` |
   点 ⋮ 必须 `stopPropagation`，避免误开抽屉。
3. **状态中文单真源**。内部 key 闭合六态，UI 一律走 `STATUS_LABEL` / locale `agg.*`，禁止把英文 `published` 等 raw key 当 pill 文案：

   | 内部 key | 中文 | 色 token |
   |---|---|---|
   | `draft` | 草稿 | `--dsw-alias-label-secondary` + draft-subtle 底 |
   | `publishing` | 发布中 | `--dsw-alias-state-publishing` |
   | `reviewing` | 审核中 | `--dsw-alias-state-warn` |
   | `published` | 已发布 | `--dsw-alias-state-success` |
   | `partial_failed` | 部分失败 | `--dsw-alias-state-error` 橙红变体 |
   | `failed` | 失败 | `--dsw-alias-state-error` |

   Grid / Table / Calendar / Drawer 同源。`reviewing` 是 UI 覆盖层（in-flight 且存在审核中子任务），不改 Host `aggregateStatus`。
4. **继续禁止**：Cards 8 格指标看板、Drawer 互动数据看板、Calendar pill 阅读数、CSV 指标列、把 `scheduled` 当 Status pill。

---

## 1. 页面与信息架构 (IA)

```
PublishStage (shell.overlay 一级产品舞台 · id dsh-publish-stage)
│
├── Layer 1 · Page Header（标题区）
│   ├── Left:
│   │   ├── H1 Title：「内容发布中心」（22–24px Bold）
│   │   └── Description：「统一管理多平台社媒内容分发、定时排期与状态追踪，提升矩阵运营效率」
│   │                     （13px，--dsw-alias-label-secondary）
│   └── Right: IconButton[Refresh] · IconButton[Close]
│
├── Layer 2 · Action Row（独立操作按钮行，紧贴副标题下方，左对齐）
│   ├── Button Primary：「+ 新增发布」（variant="primary"）
│   ├── Button Outline：「批量管理」（variant="outline"；支持批量删草稿 / 批量重试）
│   └── Button Outline：「导出」（variant="outline"；UTF-8 BOM CSV）
│
├── Layer 3 · Control / Filter Bar（单行 44–48px，左过滤 · 右工具）
│   ├── Left · Status Tabs（业务主分类，下划线或 secondary 高亮）:
│   │   ├── 全部记录
│   │   ├── 草稿箱 (N)          ← N = draft 计数动态 Badge
│   │   ├── 审核中
│   │   ├── 已发布
│   │   └── 失败待重试
│   └── Right · Tools Cluster:
│       ├── SearchField：「🔍 搜索作品...」（200–260px，250ms 防抖）
│       ├── DropdownSelect：「最近更新 ∨」（排序）
│       ├── DropdownSelect：「作品类型 ∨」
│       ├── DropdownSelect：「发布模式 ∨」（必要时可再加「平台 ∨」）
│       └── ViewToggle：[表格] [卡片] [日历]
│
├── Layer 4 · Content List Area（主内容滚动区，三视图互斥）
│   ├── Table View
│   ├── Cards View
│   └── Calendar View
│
└── Detail Drawer（舞台内抽屉，非官方 details 槽）
    ├── 作品信息
    ├── 发布模式
    └── 分发与账号（分平台子任务 / 草稿已选账号）
```

---

## 2. UI 规范与布局架构（一级页合同 · 强制）

> **规范级别**：强制（MANDATORY）。  
> **适用范围**：`shell.overlay` 一级舞台 `PublishStage`（以及后续同构子页外壳）。  
> **对齐真源**：`product/omnimux-dsh/docs/contracts/first-level-page-layout.md`、根 `AGENTS.md` §「First-Level Page 4-Layer Layout Standard」、参考实现 `omnimux-assets/src/client/AssetsStage.jsx`。  
> **验收口径**：自上而下视觉层次与资产中心 / 商品中心一致；任何把主 CTA 塞回 FilterBar、或把状态 Tab 塞回 Header 的实现视为合同违约。

### 2.1 四层 ↔ 五段映射（合同用表）

| 用户反馈层次（截图口径） | 官方 Layer | DOM / 组件落点 | 默认/待确认 |
|---|---|---|---|
| 1. 页面标题 (Title) | Layer 1 Header | `<h1 class="…-stage-title">内容发布中心</h1>` | 默认文案锁定；i18n key `stage.title` |
| 2. 描述文本 (Description) | Layer 1 Header | `<p class="…-stage-subtitle">…</p>` | 默认副标题见 §2.2；token `--dsw-alias-label-secondary` |
| 3. 操作按钮行 (Action Bar) | Layer 2 Action Row | `.…-action-row` + `dsh-ui-kit` `Button` | Primary 必有；次按钮默认 `批量管理` + `导出` |
| 4. 控制与筛选栏 (Control Bar) | Layer 3 FilterBar | `FilterBar`：`filters`=左 Tabs；`tools`=右工具簇 | 左 Tab 集合见 §2.4；右工具顺序固定 |
| 5. 内容列表区域 (Content List) | Layer 4 Main | `.…-stage-body` 内 Table / Cards / Calendar 互斥 | 空态 / 错态 / 批量底栏均在本层 |

### 2.2 Layer 1 · Page Header（标题区）

| 字段 | 内容 | 默认/待确认 |
|---|---|---|
| 标题 | `内容发布中心` | 默认锁定 |
| 副标题 | `统一管理多平台社媒内容分发、定时排期与状态追踪，提升矩阵运营效率` | 默认锁定；若产品改口径再改文案，不改结构 |
| 字号 | H1 22–24px Bold；副标题 13px Regular | 对齐资产中心 |
| 右侧控件 | `Refresh` + `Close` 两个 `IconButton`（ghost / sm） | **禁止**再放主题切换、扫码、客服、文档外链、通知铃 |
| 间距 | 顶距遵循 `sidebar-extra-entries` 一级页顶距契约（`12px 20px 12px`） | 默认 |

**红线**：Header **不得**再承载业务状态 Tab（旧版「发布记录 / 草稿箱 / 待审核」居中排布作废）。

### 2.3 Layer 2 · Action Row（操作按钮行）

| 字段 | 内容 | 默认/待确认 |
|---|---|---|
| 位置 | 紧贴副标题下方，**独立一行**，左对齐 | 强制 |
| Primary CTA | `+ 新增发布`，`variant="primary"`，leading `PlusIcon` | 打开新增/创作流程（既有 Composer） |
| Secondary | `批量管理`，`variant="outline"` | 进入/退出批量模式；支持批量删草稿、批量重试失败子任务 |
| Secondary | `导出`，`variant="outline"` | 下载当前过滤结果 CSV（列合同见 §3.6） |
| 几何 | 按钮高 32px；行本身不折行 | 强制 |
| 控件来源 | 必须 `dsh-ui-kit` `Button` | 禁止 raw `<button>` |

**红线（Golden Rule #1）**：主 CTA **绝对不可**放在 Layer 3 搜索框旁挤同一行。旧 IA「Filter Toolbar 右侧塞 `+ 新增发布`」作废。

### 2.4 Layer 3 · Control / Filter Bar（控制与筛选栏）

单行高度 **44–48px**，`white-space: nowrap`，严禁折行。布局契约：**左属性过滤，右搜索工具**。

#### 2.4.1 左侧 · Status Tabs（业务主分类）

| Tab Key | 展示文案 | 过滤语义（对账本） | 默认/待确认 |
|---|---|---|---|
| `all` | `全部记录` | 不含纯草稿以外的全部已提交 + 可选含草稿（见右列） | **默认假设**：`all` = 全部非草稿已提交记录；草稿只在 `drafts` Tab。若产品要「全部含草稿」，待确认后改此行 |
| `drafts` | `草稿箱 (N)` | `status === 'draft'`；N 为动态计数 | Badge 必显；N=0 仍显示 Tab |
| `reviewing` | `审核中` | 存在 in-flight 且 `subtask_summary.reviewing > 0`（与 Table「平台审核中」同源） | 对齐 v2.2 Status 合同 |
| `published` | `已发布` | `aggregate === 'published'` | 默认 |
| `retry` | `失败待重试` | `aggregate ∈ {partial_failed, failed}` | 默认合并两类失败；若要拆 Tab，待确认 |

- 激活态：`variant="secondary"` 或下划线选中（与资产中心 / 项目库二选一，**默认用 secondary chip/tab**，与 Assets 一致）。
- **不再单独提供「发布状态」右侧下拉**——状态维度由本 Tab 独占，避免双重筛选互相打架。
- 旧三 Tab「发布记录 / 草稿箱 / 待审核」映射：`发布记录≈all`，`草稿箱=drafts`，`待审核=reviewing`；新增 `published` / `retry` 以贴合最新截图口径。

#### 2.4.2 右侧 · Tools Cluster（固定顺序，从左到右）

| 控件 | 规格 | 默认/待确认 |
|---|---|---|
| `SearchField` | placeholder `搜索作品...`；匹配 `title` / `description`；250ms 防抖；宽 200–260px | 默认 |
| 排序 `DropdownSelect` | 选项：`最近更新`（`updated_at` desc）/ `最早创建`（`created_at` asc）/ `发布时间`（Date 字段，规则同 §3.1） | **默认** `最近更新` |
| 筛选 `DropdownSelect`：作品类型 | `全部` / `图文` / `视频`；文案 **`作品类型 ∨`** | 默认 `全部` |
| 筛选 `DropdownSelect`：发布模式 | `全部` / `定时发布` / `即时发布`；文案 **`发布模式 ∨`** | 默认 `全部`；派生规则见 §3.1 |
| 筛选 `DropdownSelect`：平台（可选） | `全部` + 账号面可得平台枚举 | **默认先实现**；无平台数据时隐藏该下拉 |
| ViewToggle | 三段：`表格` / `卡片` / `日历`；`IconButton` xs + `aria-pressed` | 默认 `表格`；记忆可用 localStorage key `dsh-publish-view` |

**红线**：
- 左侧只放 Status Tabs，不准放输入框。
- 右侧不准再放 Primary / 批量 / 导出按钮。
- 整行必须走 `dsh-ui-kit` `FilterBar`（`filters` + `tools`），禁止手写双栏 div 冒充。

### 2.5 Layer 4 · Content List Area（内容列表区）

| 字段 | 内容 | 默认/待确认 |
|---|---|---|
| 容器 | 可滚动主区；三视图互斥渲染 | 强制 |
| Table | 列合同 14 列 `[ ] \| Content \| Platforms \| Date \| Status \| Likes \| Cmts \| Shrs \| Saves \| Clicks \| Views \| Impr. \| Reach \| ⋮`（§3.2 / §0.3） | v2.4 覆盖 v2.2 的 5 列合同；指标列为诚实空槽 |
| Cards | 封面 / 类型 / 角标 / 时间·模式 / 平台状态 / 关联账号 / Status pill（§3.4） | v2.2 继续生效 |
| Calendar | 月网格 + Event Pill；禁止互动指标（§3.3） | v2.2 继续生效 |
| 空态 | 居中引导 + 可点「+ 新增发布」回行动作 | 文案按当前 Tab 区分 |
| 错态 | 顶部错误条；不清空已有列表骨架策略由实现定 | 默认保留上次成功数据 |
| 批量底栏 | 仅批量模式显示；隶属本层，不挤占 Layer 2/3 | 默认 |

### 2.6 舞台附属：Detail Drawer

打开：Table 行 / Card / 日历 pill。关闭：右上 ✕、backdrop、Esc。  
抽屉是 overlay **内**组件，**禁止** `layout.openDetails`。内容区块合同见 §3.5。

### 2.7 布局违约清单（实现自检）

| # | 违约行为 | 正确做法 |
|---|---|---|
| 1 | Header 居中放业务 Tab | Tab → Layer 3 左侧 |
| 2 | FilterBar 右侧放 `+ 新增发布` | CTA → Layer 2 |
| 3 | 主按钮与搜索同一行 | Action Row 独立 |
| 4 | raw `<button>` / `<select>` / `<input>` 可见控件 | 改用 `dsh-ui-kit` |
| 5 | inline style 色值 / 未包 token 的 hex | `var(--dsw-alias-*, fallback)` |
| 6 | FilterBar 折成两行 | 单行 44–48px，溢出先藏可选「平台」下拉 |
| 7 | Table 复活 Profile 列，或指标列出现假数字 / `0` / `N/A` | 遵守 §0.1 + §0.3：指标列只许 `-` |

### 2.8 结构骨架（实现模板 · 非生产代码）

```jsx
import { Button, DropdownSelect, FilterBar, IconButton, SearchField } from 'dsh-ui-kit'

export function PublishStage({ t, stage }) {
  return (
    <div className="dsh-publish-stage" data-visible={open ? 'true' : 'false'}>
      {/* Layer 1 */}
      <header className="dsh-publish-stage-header">
        <div className="dsh-publish-stage-heading">
          <h1 className="dsh-publish-stage-title">{t('stage.title')}</h1>
          <p className="dsh-publish-stage-subtitle">{t('stage.subtitle')}</p>
        </div>
        <div className="dsh-publish-stage-controls">
          <IconButton variant="ghost" size="sm" aria-label={t('stage.refresh')} onClick={refresh} />
          <IconButton variant="ghost" size="sm" aria-label={t('stage.close')} onClick={() => stage.set(false)} />
        </div>
      </header>

      {/* Layer 2 — 主 CTA 独立行，禁止挪进 FilterBar */}
      <div className="dsh-publish-action-row">
        <Button variant="primary" leadingIcon={<PlusIcon />} onClick={openComposer}>
          {t('action.create')}
        </Button>
        <Button variant="outline" onClick={toggleBatch}>{t('action.batch')}</Button>
        <Button variant="outline" onClick={exportCsv}>{t('action.export')}</Button>
      </div>

      {/* Layer 3 */}
      <FilterBar
        className="dsh-publish-stage-toolbar"
        compact
        filters={STATUS_TABS.map((tab) => (
          <Button
            key={tab.key}
            variant={statusTab === tab.key ? 'secondary' : 'ghost'}
            size="sm"
            aria-pressed={statusTab === tab.key}
            onClick={() => setStatusTab(tab.key)}
          >
            {tab.label}
          </Button>
        ))}
        tools={(
          <div className="dsh-publish-tools-cluster">
            <SearchField value={query} placeholder={t('search.placeholder')} debounceMs={250} onValueChange={setQuery} />
            <DropdownSelect value={sortKey} options={sortOptions} onChange={setSortKey} />
            <DropdownSelect value={typeFilter} options={typeOptions} onChange={setTypeFilter} />
            <DropdownSelect value={modeFilter} options={modeOptions} onChange={setModeFilter} />
            <ViewToggle value={viewMode} onChange={setViewMode} />
          </div>
        )}
      />

      {/* Layer 4 */}
      <main className="dsh-publish-stage-body">
        {viewMode === 'table' && <TableView />}
        {viewMode === 'cards' && <CardsView />}
        {viewMode === 'calendar' && <CalendarView />}
      </main>
    </div>
  )
}
```

---

## 3. 详细功能规格

### 3.1 筛选与排序机制

| 筛选/排序列 | 选项 / 行为 | 默认值 | 适用视图 |
|---|---|---|---|
| Status Tab（Layer 3 左） | 全部记录 / 草稿箱 / 审核中 / 已发布 / 失败待重试（语义见 §2.4.1） | `全部记录` | 全视图 |
| 搜索框 | 针对 `title`、`description` 做不区分大小写模糊匹配，250ms 防抖 | 空 | 全视图 |
| 作品类型 | 全部 / 图文 (image) / 视频 (video) | `全部` | 全视图 |
| 发布模式 | 全部 / 定时发布 (scheduled) / 即时发布 (instant) | `全部` | 全视图 |
| 平台（可选） | 全部 + 账号面平台枚举 | `全部` | 全视图 |
| 排序维度 (Sort) | `最近更新` / `最早创建` / `发布时间`；表格另支持点击表头切 `Date` / `Status` | `最近更新` 降序 | 全视图；表头排序仅 Table |

发布模式为只读派生，不新开执行通道：

- `settings.schedule_at`（或 `scheduled_at`）为非空 ISO 字符串 → **定时发布**，时间用该字段。
- 否则 → **即时发布**。
- Table 不单开 Mode 列；Date 旁用 ⏰ 标记定时。Drawer / Cards 明文展示模式。

### 3.2 表格列表视图规格 (Table View)

列定义从左到右闭合 **14 列**，禁止再增 Profile 列。8 维指标列为诚实空槽，禁止假数字（见 §0.3）：

1. **列定义**（左 → 右）：
   - `[ ]` 复选框（全选 / 单选）。批量模式才强调；全选只作用于当前过滤结果。
   - `Content`：封面取 `cover_media_id || media_ids[0]` 缩略图（视频类型用播放占位）；标题 `title || description` 截断。点击行打开舞台内抽屉。
   - `Platforms`：已提交渲染 `uniq(subtasks[].platform)` 图标簇；草稿 join 账号的 platform，无账号则 `—`。不排序。
   - `Date`：定时用 `settings.schedule_at` + ⏰；否则已提交用 `submitted_at`，草稿用 `updated_at`；格式化本地时间。表头正逆序，默认降序。
   - `Status`：`displayStatus(record)` 中文 pill（`STATUS_LABEL` / locale `agg.*` 单真源）。枚举闭合为 `草稿 / 发布中 / 审核中 / 已发布 / 部分失败 / 失败`。
     - `reviewing` 不是独立 aggregate。若 `subtask_summary.reviewing > 0` 且仍有 in-flight，显示 **审核中**（黄），与「审核中」Tab 同源。记录级 pill 只用 `agg.*`，子任务行可用更具体的「平台审核中」。
     - `scheduled` **不是状态**，是发布模式，禁止再当 Status pill。
     - 颜色：已发布绿、发布中蓝紫、审核中黄、部分失败橙红、失败红、草稿灰。禁止把英文 raw key（`published` 等）当 UI 字符串。
   - **8 维指标列** `Likes / Cmts / Shrs / Saves / Clicks / Views / Impr. / Reach`：表头为内联 SVG + 英文短名（颜色 `--dsw-alias-label-tertiary`）；单元格恒为居中 `'-'`（12px / tabular-nums / `--dsw-alias-label-tertiary`）。禁止 `0`、`--`、空白、`N/A`。指标列不可排序、不可点成「已接入」假链接。
   - `⋮` 操作列：行菜单触发器。查看详情恒显；编辑草稿 / 删除草稿仅 draft；重试仅 `failed` / `partial_failed`。点 ⋮ `stopPropagation`。
2. **交互**：
   - 行高 48–56px；悬浮行高亮；点击行弹出详情抽屉。
   - 批量模式下显示勾选框与底部批量操作条。
   - 禁止再渲染 profile-dot。
   - 空态 / 错态 `colspan="14"`。容器 `overflow-x: auto`。

### 3.3 日程排期日历视图规格 (Calendar View)

1. **顶部控制栏**（落在 Layer 4 内容区顶，不占 Layer 3）：
   - 月份选择器：如 `August 2026 ∨`。
   - `Today` 快速回到当前日期。
   - `Week starts` 分段切换器：支持 `Sun`（周日开始）或 `Mon`（周一开始）。
2. **7 列月度网格**：
   - 星期表头：`SUN, MON, TUE, WED, THU, FRI, SAT`（或 MON 开头）。
   - 日期单元格：
     - 非本月日期置灰淡化。
     - 本月日期显示右上角/左上角日期数。
     - **今日高亮框**：当前真实日期显示醒目的 Brand/Red 强调边框（如截图中的 25 日红框）。
3. **单元格内排期事件卡片 (Event Pill)**：
   - 结构：`[时间 (16:33)] [标题截断] [平台小标] [定时标志 ⏰]`。
   - **禁止** `[👁 阅读数/指标]` 或任何 Likes/Views 数字。
   - 溢出处理：单元格内超过 2 条事件时，底部显示 `+N more` 折叠提示，点击展开当天全部任务。

### 3.4 卡片视图规格 (Cards View)

左 / 中 / 右 三区，**中间不再是指标格**：

```
┌────────┬─────────────────────────────┬──────────┐
│ 封面   │ 标题                         │ Status   │
│ 类型标 │ 时间 · 发布模式               │ pill     │
│ 1/N    │ 平台图标簇 + 各平台状态点     │          │
│        │ 关联账号：显示名×N（+N 溢出） │          │
└────────┴─────────────────────────────┴──────────┘
```

| 元素 | 真源 |
|---|---|
| 封面 | 同 Table Content |
| 类型标签 | `type === 'video'` → 🎬 视频；否则 🖼 图文 |
| 多图角标 | 仅图文且 `media_ids.length > 1`：`1/N`（N=`media_ids.length`） |
| 发布时间 | 同 Table Date |
| 发布模式 | 即时发布 / 定时发布（派生规则见 §3.1） |
| 平台状态 | 已提交：每个 platform 取该平台子任务最坏状态（failed > partial/reviewing > publishing > published）；草稿：仅平台图标、无状态点 |
| 关联账号 | join ViewRow：`display_name \|\| username \|\| name \|\| account_id`；草稿用 `account_ids`，已提交用 subtasks；最多显示 3 个，溢出 `+N` |

点击卡片打开同一舞台内抽屉。禁止 8 格指标看板，禁止用 profile-cell 在卡片里换皮复活 Profile 列。

### 3.5 Detail Drawer（舞台内，非官方 details）

打开：Table 行 / Card / 日历 pill。关闭：右上 ✕、点 backdrop、Esc。抽屉是 overlay 内组件，**禁止**调用 `layout.openDetails`（官方 details 槽被对话详情占用）。

区块闭合：

1. **作品信息**：封面、标题、类型、话题、媒体数、`created_at` / `updated_at`、记录级 `error`（有则告警条）。
2. **发布模式**：即时 / 定时 + 时间（派生规则见 §3.1）。无 schedule 字段就写即时，不留空白假装「未知模式」。
3. **分发与账号**（主区）：每个 subtask 一行  
   `平台图标 · 账号显示名 · 子任务状态 pill · post_id(可选) · raw_status(可选) · 失败原因 · [重试]`  
   草稿无 subtasks：列出已选 `account_ids` join 结果 +「尚未提交」。
4. **明确非目标**：任何 Likes / Views / Clicks / Impr / Reach 看板（禁止 8 格互动数据）；禁止单独「Profile」字段。记录级 / 子任务级状态 pill 一律中文（`STATUS_LABEL` / `agg.*` / `task.*`），禁止英文 raw key。

### 3.6 导出

「导出」下载带 UTF-8 BOM 的 CSV。列闭合为：

`ID, Title, Type, Platforms, Date, Status, Mode`

- `Platforms` 为平台标识拼接（多渠道用 `;` 分隔）。
- `Mode` 为派生值 `instant` / `scheduled`。
- **禁止** Profile / Likes / Views / 其它互动指标列。
- 导出范围 = **当前 Layer 3 过滤结果**（含 Status Tab + 搜索 + 下拉），不是全库盲导。

---

## 4. 视觉与 Token 规范 (DSH Design System)

- **标准几何**：
  - Layer 3 工具条高度：44–48px。
  - 所有按钮与下拉框高：32px（对齐 `dsh-ui-kit` 标准高度）。
  - 表格行高：48px–56px，日历单元格最小高度：110px。
  - Action Row 与 Header / FilterBar 的垂直间距对齐资产中心实现，不另行发明。
- **Token 映射**：
  - 背景：`var(--dsw-alias-bg-base)`、`var(--dsw-alias-bg-layer-1)`、`var(--dsw-alias-bg-layer-2)`
  - 边框：`var(--dsw-alias-border-l1)`、`var(--dsw-alias-border-l2)`
  - 文字：`var(--dsw-alias-label-primary)`、`var(--dsw-alias-label-secondary)`、`var(--dsw-alias-label-tertiary)`
  - 强调色：`var(--dsw-alias-brand-primary)`
  - 状态色：`var(--dsw-alias-state-success)`、`var(--dsw-alias-state-error)`、`var(--dsw-alias-state-warn)`
- **零外部网络依赖**：图标全走 inline SVG，图片封面全走本地/内嵌矢量 SVG 生成器，断网可用。
- **控件禁令**：零 raw 可见 HTML 控件；零 inline style 色值 blob；第三方平台品牌色必须 token 化并带 fallback。
