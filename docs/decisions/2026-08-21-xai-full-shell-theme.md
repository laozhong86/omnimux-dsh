---
title: "决策：全壳 x.ai 品牌染色（overrideTokens 渲染官方 --dsw-）"
id: "decision-xai-full-shell-theme"
type: "decision"
status: "accepted"
authority: "L2"
date: "2026-08-21"
authors: ["x", "agent-architect"]
subsystem: "omnimux"
---

# 决策：全壳 x.ai 品牌染色（overrideTokens 渲染官方 `--dsw-*`）

日期：2026-08-21。
状态：**已落地，后临时关闭（2026-08-22）。** 实现仍在 `plugins/omnimux/src/client/xai-theme.js`（`XAI_TOKENS` 84 枚 token）；`src/client/index.js` 已注释掉 `applyXaiShellTheme` 挂接，并从 client `inject` / `package.json` `dsh.client.inject` 拿掉 `theme`，让壳回官方默认色（修复暗色主题发送钮白底白箭头）。恢复时反注释挂接并加回 inject。
补丁：本文件是 `design.md` §3.3「阶段 3 全壳统一（可选，需拍板）」的执行决策记录。
性质：视觉/架构决策。记录「渲染全壳」路径、官方无强制检查的核实结果、token 映射与 design.md 修正。

依据：本会话 UI 规范审计 + 官方主题源码逐 token grep 核实（`ui-theme/src/styles/design-platform.css`、`ui-theme/src/client/index.ts`、`ui-layout/src/client/theme-presenter.ts`、`web/src/seed.ts`、`bundle/web-app/cordis.patch.yml`）+ 老板拍板「渲染全壳」。

## 结论

OmniMux 桌面用 **`ctx.theme.overrideTokens('omnimux-xai', XAI_TOKENS)`** 把整个 DeepSeek Harness 宿主壳（侧栏 / 会话 / 顶栏 / 设置）染成 x.ai 品牌色。这是**渲染全壳**路径（覆盖官方 `--dsw-*` 别名层），不是岛内 `--omx-*` 路径。

**关键点：官方对第三方自定义 UI 视觉没有任何强制检查或拦截。** 我们自建品牌色覆盖官方视觉，机制上完全可行，且官方明确开放了 `overrideTokens` 给第三方（见下文「官方约束与检查」）。

## 为什么选渲染全壳而不是岛内 `--omx-*`

`design.md` §3.3 给了两条路径：
- **阶段 1-2 默认**：插件 UI 走 `--omx-*` + `.omx-scope` 岛内自建，宿主壳保持原样 → 同屏 dsw/omx 双视觉断层。
- **阶段 3 可选终态**：`overrideTokens` 染整个壳的别名层，全壳统一。

老板拍板选**阶段 3 渲染全壳**。理由：OmniMux 桌面本全由本系列插件构成，全壳统一是合理终态，且 `--omx-*` 与 `--dsw-*` 两套值同源（见设计.md §3.3 末句），桥接后插件侧无需改动。

## 官方约束与检查（核实结论）

### 官方规范有软性约束（文档指引，非强制门禁）
`docs/web-styling.zh.md` 写：「不得添加组件库或 Tailwind」「功能组件使用 `--dsw-alias-*` 语义 token、不得写颜色字面量」「不得另行定义全局主题」。这些是约定，不是代码强制。

### 官方没有任何自动检查会拒绝我们
| 检查层 | 是否存在 | 结果 |
|---|---|---|
| CSS/token lint（stylelint 等） | ❌ 无 | 官方仓无 stylelint 配置，无 token 白名单 |
| 构建期校验 | ❌ 无 | 插件 bundle 构建不校验样式内容 |
| 运行时 token 校验 | ❌ 无 | 无机制拦截非官方 token 或字面色 |
| ModuleLoader 样式校验 | ❌ 无 | `modules/src/client/system.ts` 只做 `<style>` 生命周期盘点，不检查内容 |
| Slot/guard 样式校验 | ❌ 无 | `guard.ts` 只防插件冒充身份，不拦样式 |

### 官方明确开放第三方覆盖 token
- `ctx.theme.overrideTokens(source, tokens)` 是正式公开 API。
- `ui-theme/README.zh.md`：「第三方主题是表层，不是产品：注册主题意味着覆盖同名别名变量；**目前不会验证一组覆盖是否完整**。」
- `guard.ts` 只强制 `overrideTokens` 的 **source 必须是包 ID**（防冒名），不校验 token 名。
- 官方 `bundle/web-app/cordis.patch.yml:182` 确认 `ui-theme` 是官方 web-app 默认组合的一部分，`theme` 服务默认可用；hub 只需在 `inject` 加 `'theme'` + `dsh.client.inject` 加 `@deepseek-ai/dsh-client-ui-theme`，**不加 npm peerDep**（与现有 ui-layout/ui-sidebar/ui-settings 一致，全是 host 提供的 client 模块）。

## 实现机制（核实）

- `overrideTokens` → presenter `apply()` 在 `document.body` 上 `setProperty`（`ui-layout/src/client/theme-presenter.ts:43-48`）→ **全局染色，包含所有插件 island**（写的是 body，无法按插件隔离）。
- `{light,dark}` 双值强制校验（`validateOverrides`：裸字符串抛教学错误）；两态同值就重复写两遍。
- disposer / `ctx.effect` 挂接可即时回滚（disposer 删层 → republish → presenter 下次 apply 先 `removeProperty` 全部旧 token 再写新集合，官方样式表值重新生效）。
- **无持久化**：override 层是进程内 Map，不写 settings.yaml，重启即消失，不需清理用户设置。

## 实现文件

- `plugins/omnimux/src/client/xai-theme.js`（新增）：`XAI_TOKENS`（**84 枚官方 token 覆盖**，全部 `{light,dark}`）+ `applyXaiShellTheme(ctx)` 返回 `overrideTokens('omnimux-xai', XAI_TOKENS)`。
- `plugins/omnimux/src/client/index.js`：`inject = ['slots', 'locale', 'theme']`；`ctx.effect(() => applyXaiShellTheme(ctx), 'omnimux: xai shell theme')`。
- `plugins/omnimux/package.json`：`dsh.client.inject` 加 `@deepseek-ai/dsh-client-ui-theme`；peerDeps 保持 react-only。

### token 覆盖范围（84 枚）
背景层（bg-base/layer-1/2/3/module-platform/overlay/mask-1/2/3/skeleton）、文本层（label-primary/secondary/tertiary/caption/dimmed/inverted/foreground/…）、边框层（border-l1~l4/inverted）、交互/按钮层（interactive-bg-*/button-*）、状态层（state-success/error/warn/business + label-error）、品牌层（brand-*）、Markdown/代码块层、浮层/滚动条（tooltip/toast/scrollbar-*）、`specific-*` 壳结构面（sidebar-fill、menu、tip、input-major、selector、bubble 等）。

### 关键语义映射
`bg-base`→canvas、`label-primary/secondary/tertiary`→ink/body/muted、`border-l2`→hairline、`button-primary-fill/hover`→primary/primary-hover、`label-primary-foreground`/`inverted`→on-primary、`state-*`→success/warning/error、侧栏 `specific-sidebar-fill`→canvas-raised/canvas-soft、用户气泡 `specific-bubble`（官方 light 是淡蓝，必须单色化）。

## design.md 修正（死 token）

`design.md` §3.3 示例覆盖代码里，**3 个 token 名在全仓 0 次出现（官方不存在）**，照抄会覆盖到空 token 不生效：

| §3.3 示例名 | 状态 | 替换为 |
|---|---|---|
| `--dsw-alias-bg-primary` | ❌ 0 处 | `--dsw-alias-bg-base` + `bg-layer-1/2/3` + `--dsw-specific-sidebar-fill` |
| `--dsw-alias-bg-secondary` | ❌ 0 处 | `--dsw-alias-bg-layer-1` |
| `--dsw-alias-border` | ❌ 0 处（官方用层级名） | `--dsw-alias-border-l1` / `border-l2` / `border-l3` / `border-l4` |

实现里已用真实 token 名（`xai-theme.js`）。**建议同步更新 design.md §3.3 的示例代码**，避免后人照抄死 token。

另发现官方 6 个「引用了但未定义」的瑕疵 token（`separator-primary`、`line-secondary`、`text-primary`、`text-tertiary`、`border-subtle`、`label-error`），其中只有 `--dsw-alias-label-error` 语义明确且影响表单可读性，已在本实现里补定义；其余属上游 bug，由官方修复，OmniMux 不替它命名。

## 风险与副作用

1. **全局染色 = 所有插件 island 一起变**。`overrideTokens` 写的是 body 全局，无法按插件隔离。对纯 OmniMux 桌面是特性；若用户装第三方 dsh 插件，其 island 也被强制 x.ai 化，若硬编码了与官方蓝协调的颜色会违和。
2. **`state-business-primary` 单色化影响面最大**：18+ 文件（caret-color、发送/信息按钮、链接、TodoPanel 进行态、trajectory 等）从 DeepSeek 蓝变墨色。可点链接 / 进行态指示的交互可发现性会变含蓄。
3. **`brand-primary` 变墨色 → 焦点环变色**：视觉变化极小（官方 brand-primary 本来就是近黑，非蓝），风险低。真正的蓝焦点来自 `button-info-fill` / `state-business-primary`。
4. **对比度 a11y**（DevTools 可测）：
   - light `muted #848484` on `#ffffff` = **3.74:1**，低于 WCAG AA 正文 4.5:1（官方 7.46:1）。`label-tertiary` 是全壳最高频弱文本（时间戳、图标、placeholder），渲染后 DevTools 会对大量 12-13px 灰字报警。
   - dark `muted #7c7c7c` on `#0a0a0a` = 4.74:1，刚好过 AA 正文线，但官方暗色 tertiary 是 8.54:1，明显变弱。
   - dark `hairline #242424` on `#0a0a0a` = 1.28:1，边框几乎不可见（设计意图，但 `border-l2` 承担输入框描边，可用性偏淡）。
   - 若需过 a11y，建议 light muted 从 `#848484` 压到 `#767676`（4.5:1）或仅对 `label-tertiary` 用 body 色。
5. **tooltip/toast 反相板**：`tooltip-bg`/`toast-bg`/`button-contrast-fill` 是「深板浅字」反相浮板，**不可**映射成 canvas，否则暗模式 tooltip 亮得刺眼（实现已保持反相逻辑）。
6. **`label-primary-inverted` ↔ `label-primary` 耦合**：SidebarRoot 用 `color: label-primary-inverted; background: label-primary` 做选中态反相块，两枚必须同步反相（实现已满足）。
7. **卸载回滚**：disposer 只删层并 publish，回滚在下一次 apply 生效；挂 `ctx.effect` 时 dispose 触发 publish，回滚即时。重复注册同一 source id `'omnimux-xai'` 安全（旧 disposer 变 no-op）。
8. **官方 token 表是「颜色值唯一权威」**：本 override 层不动上游文件，合规；但**不要**试图把 x.ai 值回写到官方 `design-platform.css`（AGENTS.md：官方 packages 只消费、不当产品源）。

## 待办 / 后续

- [ ] 实机走查 light/dark 切换，确认对比度与交互可发现性；按需调整 `muted`/`state-business-primary` 值。
- [ ] 同步更新 `design.md` §3.3 示例代码（3 个死 token → 真实名）。
- [ ] 同步更新 `AGENTS.md` 设计系统条款：现默认策略已改为「全壳 overrideTokens 染 `--dsw-*`」，不再是「岛内 `--omx-*` only」。`--omx-*` 岛内体系目前**未落地**（`omnimux-theme` 包不存在），若不再走岛内路径，应清理或明确废弃 design.md §3.1-3.2 / §7 的 `--omx-*` 迁移规划。
