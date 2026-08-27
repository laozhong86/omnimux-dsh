---
title: "决策：全面适配 DeepSeek Harness 原生 UI 规范，彻底废除外部主题覆盖层"
id: "decision-adopt-dsh-native-ui-system"
type: "decision"
status: "accepted"
authority: "L2"
date: "2026-08-27"
updated: "2026-08-27"
authors: ["x", "agent-architect"]
subsystem: "omnimux"
tags: ["ui", "theme", "design-system", "native", "tokens", "dsw", "adr"]
supersedes:
  - "docs/decisions/2026-08-21-xai-full-shell-theme.md"
superseded_by: null
related:
  - "docs/contracts/ui-design-guidelines.md"
  - "docs/decisions/2026-08-21-xai-full-shell-theme.md"
---

# 决策：全面适配 DeepSeek Harness 原生 UI 规范，彻底废除外部主题覆盖层

> **权威等级**：L2 | **状态**：`accepted`（正式生效） | **生效日期**：2026-08-27  
> **关联契约**：[《OmniMux UI 交互与视觉设计规范》](../contracts/ui-design-guidelines.md)  
> **替代决议**：取代并彻底废除 [2026-08-21-xai-full-shell-theme.md](2026-08-21-xai-full-shell-theme.md)

---

## 1. 决议一句话结论

OmniMux 系列全量插件（Hub、Accounts、Assets、Products、Inspiration、Workflow、Clip、Publish 等）**100% 回归并严格消费 DeepSeek Harness 官方原生设计系统（CSS Tokens 与 UI 原语）**，彻底废除、卸载任何形式的外部主题覆盖层（如 `overrideTokens` 全壳染色与 x.ai 外部调色板），构建完全契合官方交互体验、无侵入、零维护负担的现代原生插件界面体系。

---

## 2. 核心架构原则（Core Architectural Principles）

1. **100% 官方 Token 消费（100% Official Token Consumption）**：
   - 客户端界面样式一律强制消费官方 `--dsw-alias-*`（语义层）与 `--dsw-specific-*`（特定组件面）设计令牌。
   - 严禁在业务 CSS 中硬编码未经定义的 Hex/RGBA 裸颜色字面量；
   - 严禁自造平行主题变量体系（如历史废弃的 `--omx-*` 独立变量体系）。
2. **严禁外部全壳覆写（Zero Theme Overrides）**：
   - 严禁调用 `ctx.theme.overrideTokens()` 注入外部私有调色盘；
   - 严禁在宿主 `document.body`、`document.documentElement` 或全局 `<style>` 中注入样式劫持；
   - 移除插件 Client 端对 `theme` 服务的强制绑定与修改权，确保宿主主题服务（`ctx.theme`）的原生纯洁性。
3. **原生暗黑/明亮无缝自适应（Zero-JS Theme Adaptation）**：
   - 亮色与暗色模式完全跟随官方宿主切换（`data-theme="dark" | "light"`），通过 CSS 变量自动继承，禁止在业务组件层编写 `if (theme === 'dark')` 的属性级 JS 补丁或 `filter: invert()` 滤镜。
4. **严格遵从现行设计契约（Contract Conformance）**：
   - 全面落地 [《OmniMux UI 交互与视觉设计规范》](../contracts/ui-design-guidelines.md)，确保控件质感、组件规范与交互动效的一致性。

---

## 3. 控件几何与组件实施标准

| 维度 | 规范标准 | 实现要求 | 违规禁止 |
|---|---|---|---|
| **控件高度基准** | **`32px`** | 输入框、下拉触发器、图标按钮、次级操作按钮统一为 `height: 32px; box-sizing: border-box;` | 禁止出现 24px/28px/36px/40px 参差不齐的工具栏高度 |
| **圆角体系 (Radius)** | **`8px` (基础) / `10~12px` (浮层) / `16px` (弹窗)** | 按钮、输入框、下拉框统一 `border-radius: 8px`；Menu/Popover 浮层 `10~12px`；模态框外壳 `16px` | 严禁在同一界面混用胶囊圆角 (`999px`) 与标准 `8px` 圆角 |
| **工具栏流向** | **单行无折行 (`nowrap`)** | 搜索与筛选工具栏一律声明 `flex-wrap: nowrap;`；搜索框自适应拉伸 (`flex: 1 1 200px`)，筛选器与操作按钮 `flex-shrink: 0;`，主要行动点（CTA）`margin-left: auto;` | 严禁在标准桌面视口下工具栏被子元素挤压折行换行 |
| **UI 基础原语** | **官方 UI 组件库 / SVG 矢量原语** | 优先引入 `@deepseek-ai/dsh-client-ui-primitives` / `@deepseek-ai/dsh-ui-kit`；图标统一使用矢量 SVG（原生或 `lucide-react`） | 严禁使用 Emoji 或文本字符（如 `↑`、`↓`、`⚙️`、`🔍`、`×`）充当交互图标 |
| **下拉选择器** | **React Popover 浮层** | 定制 Popover 下拉浮层面板（背景 `var(--dsw-alias-bg-elevated)` + 毛玻璃 + 独立 Check 态），支持全局 `pointerdown` 外部关闭与 `Escape` 键监听 | 严禁裸露 WebKit / Electron 系统原生蓝白相间 `<select>` 菜单 |

---

## 4. 弃用外部 x.ai 规范、回归原生的技术根因与架构收益

### 4.1 弃用外部 x.ai 全壳主题的技术根因复盘

1. **破坏宿主官方交互与状态流转**：
   - 官方 DSH 的组件交互（按钮 Hover、Active、Focus Ring、发送箭头颜色、Badge 态、Markdown 语法高亮）高度依赖精确匹配的 `--dsw-*` 色彩矩阵。外部 x.ai 的 84 枚硬编码变量强行覆盖后，直接破坏了暗色主题下的操作反馈，导致发送按钮白底白字失真、链接焦点环丢失等低级可用性 Bug。
2. **文本与边框对比度大幅受损（a11y 严重降级）**：
   - 外部 x.ai 调色盘过度追求单色极简暗黑，导致 light 模式下弱文本（`muted #848484` on `#fff`）对比度仅 3.74:1（低于 WCAG AA 要求的 4.5:1 基准），dark 模式下边框（`hairline #242424` on `#0a0a0a`）对比度仅 1.28:1，极大降低了用户在高强度工作下的表单与列表可读性。
3. **上游升级维护负担沉重**：
   - 上游 DSH 保持高频迭代，官方每调整或新增一个 Token，全壳覆盖层就会产生死 Token 或缺失映射。维护一个庞大的 84+ Token 外部覆盖字典消耗了大量架构精力，极易导致升级翻车。
4. **违背插件生态的隔离性与纯粹性**：
   - `overrideTokens` 作用于全局 `document.body`，会无差别污染整个宿主和其他第三方插件的视觉渲染，违反了 DSH 插件独立、互不干扰的沙箱原则。

### 4.2 全面回归原生系统的架构收益

1. **零维护负担与上游天然兼容**：
   - 插件直接消费官方标准 Token，上游 DSH 进行任何设计升级、色板微调或新组件扩充，插件端均能 100% 自动受益且零回归成本。
2. **极佳的视觉一致性与交互沉浸感**：
   - 插件界面与 DSH 会话、侧边栏、设置面板、工作台无缝融合，消除割裂感，呈现如同宿主原生内置一般的高品质体验。
3. **代码体积瘦身与生命周期简化**：
   - 移除 `xai-theme.js` 及相关的 Token 校验与应用逻辑，降低 Client Bundle 体积，减少运行时 DOM `setProperty` 开销与内存占用。

---

## 5. 迁移与执行清单

1. **废弃解绑**：中枢与所有垂直插件 Client 移除对 `xai-theme.js` 的引用与生命周期挂载，从 `inject` 列表中剔除不必要的 `theme` 写操作；
2. **样式审计**：全量扫描各插件 CSS / Less / Emotion 样式表，清除硬编码色值，将其转换为官方标准 `--dsw-alias-*` Token；
3. **组件对齐**：核对各独立页的工具栏、输入框、下拉框、图标，严格落实 32px 高度与 8px 圆角规范。
