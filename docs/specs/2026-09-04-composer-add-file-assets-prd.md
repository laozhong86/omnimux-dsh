# PRD：会话输入框「+」菜单 —— 添加文件 / 从资产库添加

- **Language**: 中文（zh-CN）
- **Programming Language**: Vite + React + MUI + Tailwind CSS（沿用插件现有技术栈；UI 必须 100% 消费 DSH 原生 `--dsw-alias-*` / `--dsw-specific-*` token，见 `design.md`）
- **Project Name**: `composer_add_file_assets`
- **归属插件**: `plugins/omnimux`（执行中枢，附件子系统所在；**不新增**兄弟插件，遵循 AGENTS.md「OmniMux core 必须活在 plugins/omnimux/」铁律）
- **状态**: proposed（等待老板对待确认问题拍板）
- **日期**: 2026-09-04

## 原始需求复述

> 「我们当前的 DSH 它没有添加文件选项，我希望在 + 号按钮增加『添加文件』和『从资产库添加』这两个功能：添加文件则是激活本地文件选择；从资产库添加则是弹窗（新建）资产库弹窗，左侧是分类 tab 右侧是卡片列表，最好卡片样式和资产库插件一致，支持多选后确认添加，但是要限制最大添加数。」

---

## 1. 产品目标与背景

### 1.1 问题陈述

DSH 官方会话输入框（composer）的「+」按钮当前没有任何菜单/入口。OmniMux 已具备完整的附件子系统（`plugins/omnimux/src/client/attachments/`：AttachmentStore、AttachmentTray、prompt-assembly），但附件**只能从垂直插件内部单向推入**——用户必须先进入工作流画布 / 资产库 / 灵感库等页面，找到「添加到会话」胶囊按钮，才能把上下文带进会话。用户无法停留在会话侧主动添加本地文件或资产库素材，形成明显的链路断点。

### 1.2 现状链路

```
用户想引用文件/资产 → 必须离开会话 → 进入垂直插件页面 → 找到「添加到会话」按钮
→ 触发 omnimux:add-to-conversation 事件 → AttachmentStore 写入 → AttachmentTray 渲染
                                    ↑
                          会话侧（composer「+」）无任何入口 ← 断点
```

### 1.3 Product Goals

1. **会话侧主动引入上下文**：用户在会话输入框点击「+」即可添加本地文件或资产库资产，无需离开会话页面，完成「推入 → 拉入」双向闭环。
2. **零架构风险接入**：完全复用既有 AttachmentStore / AttachmentTray / prompt-assembly 管线与 8 条上限、指纹去重规则，不 fork 官方 composer、不新建第二套附件体系。
3. **一致的资产挑选体验**：资产库选择弹窗复用 `omnimux-assets` AssetGrid 的卡片视觉与 6 大分类，让用户在会话侧获得与资产库浏览页一致的挑选心智。

### 1.4 目标价值

- 缩短「带上下文提问」路径：从 ≥4 步（切页面→找卡片→点胶囊→回会话）降到 2 步（点「+」→确认）。
- 提升资产库资产的使用率与曝光（会话是用户停留时间最长的界面）。
- 为后续「拖拽上传」「粘贴图片」等入口预留统一的「+」菜单容器。

---

## 2. 用户故事（User Stories）

1. **US-1 本地文件添加**：As a 会话用户，I want 点击输入框「+」后选择「添加文件」唤起本地文件选择器并可多选文件，so that 我可以直接把参考资料（合同 PDF、数据表、截图）带进当前会话提问，而无需先导入资产库。
2. **US-2 资产库多选添加**：As a 内容创作者，I want 点击「+」选择「从资产库添加」，在弹窗中按分类浏览并多选资产卡片后确认，so that 我可以一次性把角色图 + 场景图 + 风格包组合进会话上下文。
3. **US-3 上限拦截反馈**：As a 会话用户，当 I 当前会话已有 8 条附件（或本次选择会使总数超过 8）时，I want 看到明确的剩余配额提示与超限拦截文案，so that 我理解为什么添加被拒绝并知道要先移除旧附件。
4. **US-4 重复去重反馈**：As a 会话用户，当 I 重复添加已在 Tray 中的同一文件/资产时，I want 收到「该附件已在会话中」的轻提示且不产生重复条目，so that Tray 保持干净、prompt 不重复注入。
5. **US-5 资产库空态**：As a 新用户，当 I 的资产库为空时，I want 在弹窗中看到空态引导和「去资产库导入」的跳转入口，so that 我知道下一步该做什么而不是面对空白。

---

## 3. 技术规范

### 3.1 复用边界声明（PRD 层契约，实现细节归架构阶段）

| 既有能力 | 位置 | 本需求的使用方式 |
|---|---|---|
| AttachmentStore（含 `MAX_ATTACHMENTS_PER_SESSION = 8`、指纹去重、`duplicate` / `quota-exceeded` / `invalid-payload` 拒绝原因） | `plugins/omnimux/src/client/attachments/store.ts` | **唯一写入口**。两个新入口最终都必须经 `omnimux:add-to-conversation` 事件总线流入，禁止旁路直写 Tray。 |
| AttachmentTray | `plugins/omnimux/src/client/attachments/AttachmentTray.tsx`（官方插槽 `conversation.input.attachments`，id `omnimux-attachment-tray`，priority -10） | 新增附件的展示与移除完全沿用，零改动预期。 |
| prompt-assembly | `plugins/omnimux/src/client/attachments/prompt-assembly.ts` | 发送组装逻辑零改动；新附件必须携带可被组装成 `@path` 引用的路径字段。 |
| AttachmentKind | `attachments/types.ts`（image/video/audio/table/document/canvas/asset/product/inspiration） | 本地文件按扩展名/MIME 推断 kind；资产库资产固定 `asset`（或按其媒体类型细化，待架构确认）。 |
| 资产库数据 | Host `/omnimux/assets` + `assets_list` / `assets_search` 工具；分类：角色/场景/风格包/道具/知识包/自定义 | 弹窗数据**只读**消费资产库 Host 接口；不得 import hub 内部、不得直连 `$DSH_HOME` 文件系统（AGENTS.md 硬约束）。 |
| AssetGrid 卡片样式 | `plugins/omnimux-assets/src/client/AssetGrid.jsx` | 视觉对齐：同一卡片信息结构（封面/名称/分类徽标）+ DSW token；**代码层面以抽取/复用为优先**，是否抽出共享组件由架构阶段决策，禁止复制后样式漂移。 |

**铁律复述**：严禁 fork/自绘第二套官方 composer（`docs/decisions/2026-08-31-workbench-split.md`、`docs/contracts/workbench-split.md`）；「+」菜单只能以 overlay/inject 方式增强；不新增一级 `settings.section`；UI 100% 消费 `--dsw-*` token。

### 3.2 Requirements Pool

#### P0（Must have）

| # | 需求 | 验收标准（可测、可观察） |
|---|---|---|
| P0-1 | 「+」按钮菜单 | 点击官方 composer 工具行「+」按钮，弹出 Popover 菜单（圆角 10~12px，深色浮层，SVG 图标），包含且仅包含两个菜单项：「添加文件」「从资产库添加」；菜单项高度 32px；Esc/点击外部关闭；键盘可达（WCAG AA）。**与官方已有行为的关系见 Open Questions Q1**。 |
| P0-2 | 添加文件：本地选择器 | 点击「添加文件」唤起 OS 原生文件选择器（`<input type="file" multiple>` 或等价物），支持多选；文件类型过滤策略：默认全类型可选，kind 推断白名单见 P0-3；不支持的类型选中后给出「暂不支持该文件类型」提示且不进入 Tray。 |
| P0-3 | kind 推断规则 | 选中文件按扩展名/MIME 映射 AttachmentKind：图片→`image`，视频→`video`，音频→`audio`，csv/xlsx→`table`，pdf/md/txt/doc→`document`，其余→`document` 兜底；推断结果体现在 Tray 卡片图标上，可被单测断言。 |
| P0-4 | 本地文件物化/引用 | 选中的本地文件按 Open Questions Q2 拍板结果执行（物化复制 or 路径引用）；无论哪种，进入 Tray 的附件必须携带可被 prompt-assembly 组装为 `@path` 的有效绝对路径；文件读取失败时该条目被跳过并提示「N 个文件读取失败」。 |
| P0-5 | 从资产库添加：弹窗 | 点击「从资产库添加」打开**新建** Modal（16px 圆角，DSW token）：左侧分类 Tab 列（对齐资产库 6 分类：角色/场景/风格包/道具/知识包/自定义，默认选中「全部」或第一项——见 Q4），右侧卡片网格（视觉与 AssetGrid 一致）；弹窗打开时发起 `assets_list` 数据加载。 |
| P0-6 | 弹窗多选与确认栏 | 卡片支持点击切换选中态（明显的选中描边/角标，WCAG AA 对比度）；底部确认栏固定显示：已选计数（如「已选 3 项」）+ 取消按钮 + 确认按钮（32px 高，主按钮样式）；未选中任何项时确认按钮禁用；确认后批量经事件总线写入 AttachmentStore 并关闭弹窗，Tray 出现对应条目。 |
| P0-7 | 最大添加数限制 | 全局沿用 `MAX_ATTACHMENTS_PER_SESSION = 8`（除非 Q3 拍板单独设限）。弹窗内与菜单入口均需感知**剩余配额 = 8 − 当前 Tray 数**：剩余配额在确认栏实时提示（如「还可添加 5 项」）；选择数超过剩余配额时禁止继续勾选并提示「最多还能添加 N 项」；确认时由 AttachmentStore 的 `quota-exceeded` 拒绝兜底，超限条目不进入 Tray 并提示「附件已达上限 8 条，请先移除部分附件」。 |
| P0-8 | 去重反馈 | 重复添加（本地同一文件 / 资产库同一资产 id）触发既有 `duplicate` 拒绝：不产生重复 Tray 条目，给出轻量 toast/内联提示「该附件已在会话中」；已在 Tray 中的资产在弹窗卡片上呈现「已添加」置灰态、不可再次勾选。 |

#### P1（Should have）

| # | 需求 | 验收标准 |
|---|---|---|
| P1-1 | 埋点 | 记录事件：`composer_plus_menu_open`、`composer_add_file_click`、`composer_add_file_confirmed{count, kinds}`、`composer_asset_dialog_open`、`composer_asset_dialog_confirmed{count, categories}`、`composer_attachment_rejected{reason}`；接入既有 omnimux-analytics 通道（若该通道为本需求范围内可用，否则记录为本地 debug 日志，见 Q6）。 |
| P1-2 | 空态 | 资产库为空（全库 0 条或当前分类 0 条）：弹窗右侧显示空态图标 + 文案「资产库暂无资产」+「去资产库导入」按钮（点击打开资产库 workbench Tab 并关闭弹窗）。 |
| P1-3 | 加载态 | 弹窗数据加载中显示骨架卡片（≥6 个占位）；加载失败显示错误态 + 「重试」按钮；重试复用同一请求。 |
| P1-4 | 异常态 | 会话未激活（无 active session）时「+」菜单两项均禁用并 tooltip 说明「请先开始一个会话」；文件读取失败、资产 Host 接口失败均有用户可读文案，不静默吞错。 |
| P1-5 | 弹窗内搜索 | 弹窗顶部提供搜索框（32px 高），按名称过滤当前分类下卡片（可复用 `assets_search` 语义，本地过滤或远端由架构定）。是否进 P0 见 Q5。 |

#### P2（Nice to have）

| # | 需求 | 验收标准 |
|---|---|---|
| P2-1 | 分类计数徽标 | 左侧分类 Tab 显示各分类资产数量。 |
| P2-2 | 最近使用分类记忆 | 弹窗记住上次选中的分类（仅内存态，刷新重置，避免与「附件状态不落盘」原则冲突）。 |
| P2-3 | 键盘操作 | 弹窗内支持方向键移动焦点、空格选中、Enter 确认。 |

#### Out of Scope（非目标）

- ❌ 拖拽文件到输入框上传（drag & drop）——后续单独立项。
- ❌ 粘贴板图片直传（paste to attach）。
- ❌ 修改官方 composer 本体 / 官方上传管线（若有）——只 overlay 增强。
- ❌ 在弹窗内编辑/删除/上传资产库资产（弹窗是**只读选择器**，资产管理仍归资产库页）。
- ❌ 附件持久化到磁盘 / 跨会话恢复（沿用现有内存态语义）。
- ❌ 移动端适配。

### 3.3 与官方行为的关系（风险声明）

官方 composer 工具行已存在「+」add 按钮（`plugins/omnimux/src/client/composer-compact.js` 中 `[class*="tools"] > button:not([class*="add"])` 选择器可佐证其存在）。**官方「+」当前是否已绑定原生功能（如原生文件上传），侦察阶段未在官方只读 checkout 中最终确认**。菜单共存策略（拦截替换 / 追加注入 / 并列第二按钮）直接影响交互形态，列为 Q1 由老板拍板、架构阶段核实 DOM 结构后落地。

---

## 4. UI 设计稿描述

> 全部尺寸遵循 `design.md`：控件高 32px、基础圆角 8px、Popover 10~12px、Modal 16px、SVG 图标、WCAG AA；颜色 100% 消费 `--dsw-alias-*` / `--dsw-specific-*` token，禁止裸 hex。

### 4.1 「+」菜单（Popover）

```
┌─ composer 工具行 ────────────────────────────┐
│ [+]  [其他官方工具按钮…]        [发送 ▶]     │
└──┬───────────────────────────────────────────┘
   │ 点击 [+] 后向上弹出 Popover（圆角 10~12px）
   ▼
┌──────────────────────┐
│ 📎 添加文件           │ ← 32px 行高，SVG 图标左置
│ 🗂 从资产库添加        │ ← 32px 行高，SVG 图标左置
└──────────────────────┘
  · 宽度约 160~180px，内边距 4px
  · hover 态消费 --dsw-alias-* hover token
  · Esc / 点击外部 / 选中项后关闭
```

### 4.2 资产库选择弹窗（Modal，16px 圆角，新建组件）

```
┌─ 从资产库添加 ──────────────────────────────────────────── ✕ ─┐
│ ┌────────────┬──────────────────────────────────────────────┐ │
│ │ 分类 Tab    │  [🔍 搜索资产…（P1）]                        │ │
│ │            │ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐  │ │
│ │ ▸ 全部      │ │ ▄▄▄▄▄▄ │ │ ▄▄▄▄▄▄ │ │ ▄▄▄▄▄▄ │ │ ▄▄▄▄▄▄ │  │ │
│ │   角色      │ │ 封面图  │ │ 封面图  │ │ 封面图  │ │ 封面图  │  │ │
│ │   场景      │ │ ▔▔▔▔▔▔ │ │ ▔▔▔▔▔▔ │ │ ▔▔▔▔▔▔ │ │ ▔▔▔▔▔▔ │  │ │
│ │   风格包    │ │ 名称    │ │ 名称    │ │ 名称    │ │ 名称    │  │ │
│ │   道具      │ │ [分类]  │ │ [分类]  │ │[已添加]│ │ [分类]  │  │ │
│ │   知识包    │ └────────┘ └────────┘ └────────┘ └────────┘  │ │
│ │   自定义    │  （网格纵向滚动；卡片样式 = AssetGrid 卡片）   │ │
│ │            │  选中态：描边 + 右上 ✓ 角标                    │ │
│ ├────────────┴──────────────────────────────────────────────┤ │
│ │ 已选 3 项 · 还可添加 5 项          [ 取消 ]  [ 确认添加 ]   │ │ ← 底部确认栏，按钮 32px
│ └────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
  · 建议尺寸：宽 ~720px、高 ~560px（不超过视口 80%），左右栏比例约 1:4
  · 左侧 Tab 列宽 ~140px，项高 32px，选中态消费 dsw 选中 token
  · 卡片网格：gap 12px，列宽自适应（约 140~160px/列）
  · 空态：右侧区域居中图标 + 「资产库暂无资产」+ [去资产库导入]
  · 超限：勾选数达剩余配额后未选卡片置灰 + 提示「最多还能添加 N 项」
```

---

## 5. Open Questions（待老板拍板）

| # | 问题 | 备选方案 | 建议 |
|---|---|---|---|
| Q1 | 官方「+」按钮若已绑定原生功能（如原生上传），菜单策略如何？ | A. 拦截官方点击，完全替换为我们的双项菜单；B. 我们的两项与官方原功能合并为同一菜单（官方项在上）；C. 在「+」旁注入第二个入口按钮。 | 建议 B（共存合并），架构阶段需先在官方只读 checkout 核实「+」当前 DOM 与事件绑定。 |
| Q2 | 本地文件是复制物化到 `$DSH_HOME/omnimux/assets/`（或专用 attachments 目录）还是仅引用原始路径？ | A. 物化复制（路径稳定、会话发送时文件一定存在；占磁盘）；B. 仅引用原路径（零拷贝；用户移动/删除原文件后失效）。 | 建议 A（物化到 `$DSH_HOME/omnimux/assets/data/files/` 或独立 attachments 子目录），与资产库「导入物化、原文件不删」语义一致。 |
| Q3 | 最大添加数沿用全局 8，还是为本入口单独设限（如单次最多选 5）？ | A. 沿用全局 8（剩余配额制）；B. 全局 8 + 单次确认最多 N。 | 建议 A，不加第二层限制，保持规则单一。 |
| Q4 | 弹窗默认选中分类与是否提供「全部」？ | A. 默认「全部」聚合视图；B. 默认第一个分类（角色）。 | 建议 A。 |
| Q5 | 弹窗内搜索是否进 P0？ | A. 进 P0（本地过滤即可）；B. 保持 P1，首版不做。 | 建议 B，首版控制范围，搜索留 P1。 |
| Q6 | 埋点走哪个通道？ | A. 接入 `omnimux-analytics`；B. 首版仅 debug 日志。 | 建议视 analytics 通道当前可用性由架构阶段确认，PRD 暂列 P1。 |

---

## 6. 验收与工程约束备注（给下游阶段）

- **测试**：`plugins/omnimux/src/client/attachments/` 单测需新增菜单/弹窗交互用例；`pnpm test`、`pnpm verify:stages`、`pnpm verify:slots` 必须通过（插槽契约见 `scripts/verify-slot-contracts.mjs`，本需求**不新增插槽占用**）。
- **真机验收**：涉及前端 Client 改动，交付前必须 `pnpm verify:live <stage>` 在 45120 Dev App 完成 ego-browser 探针并产出 `docs/evidence/live-qa-report.json`（AGENTS.md 防假阳性铁律）。
- **Git/PR**：遵循 `docs/contracts/plugin-git-pr.md`，独立 worktree 开发（本 PRD 已在 worktree `omnimux-dsh-wt-composer-add-file-assets-prd` 落盘），一插件一 PR。
- **硬约束复述**：插件不得 import hub 内部；UI 100% `--dsw-*` token；不新增一级 `settings.section`；不 fork 官方 composer；官方 checkout（`/Applications/DSH Desktop.app/...`）仅作只读参考。
