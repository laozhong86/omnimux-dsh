---
title: "决策：全壳 x.ai 品牌染色（overrideTokens 渲染官方 --dsw-）"
id: "decision-xai-full-shell-theme"
type: "decision"
status: "superseded"
authority: "L2"
date: "2026-08-21"
updated: "2026-08-27"
authors: ["x", "agent-architect"]
subsystem: "omnimux"
tags: ["ui", "theme", "xai", "superseded"]
supersedes: []
superseded_by: "docs/decisions/2026-08-27-adopt-dsh-native-ui-system.md"
related:
  - "docs/decisions/2026-08-27-adopt-dsh-native-ui-system.md"
  - "docs/contracts/ui-design-guidelines.md"
---

# 决策：全壳 x.ai 品牌染色（overrideTokens 渲染官方 `--dsw-*`）

> ⚠️ **【已废弃 - SUPERSEDED】**  
> **废弃声明**：本决议方案由于破坏宿主官方基础交互（如暗色发送按钮反白、焦点环失效）、大幅降低文本与边框对比度导致 a11y 降级、制造上游更新断层并增加长期维护负担，已于 **2026-08-27 架构决议** 彻底废除。  
> **继任决议**：请参阅 [《决策：全面适配 DeepSeek Harness 原生 UI 规范，彻底废除外部主题覆盖层》](2026-08-27-adopt-dsh-native-ui-system.md)。  
> **现行规范**：OmniMux 全系列插件 100% 回归消费官方原生 `--dsw-alias-*` / `--dsw-specific-*` 设计系统，禁止任何形式的 `overrideTokens` 全壳染色。

---

日期：2026-08-21。  
历史状态：**已废弃（Superseded）**。原实现于 `plugins/omnimux/src/client/xai-theme.js`（`XAI_TOKENS` 84 枚 token）已彻底停用解绑，Client 端 `inject` 移除 `theme` 服务依赖。  
性质：历史视觉/架构决策记录（只读封存）。

## 历史方案背景与设想（归档参考）

OmniMux 桌面曾尝试使用 **`ctx.theme.overrideTokens('omnimux-xai', XAI_TOKENS)`** 把整个 DeepSeek Harness 宿主壳（侧栏 / 会话 / 顶栏 / 设置）染成外部 x.ai 品牌色。

### 当时设想的路径
- 试图通过覆写官方 84 枚 `--dsw-*` token，将整个宿主界面统一为 x.ai 单色暗黑风格。
- 试图抹平第三方插件岛内与宿主界面的视觉差异。

## 废除根因复盘（Why Deprecated）

1. **破坏宿主官方交互与视觉状态**：
   - 官方组件（如发送按钮、链接、状态徽标、聚焦环、折叠面板）依赖精细调优的状态颜色映射，全壳覆盖导致暗色模式下发送按钮出现白底白箭头、激活态失真、输入框焦点指示模糊等严重交互缺陷。
2. **严重损害可访问性与对比度（a11y Regression）**：
   - x.ai 调色盘中的次级与弱文本在浅色与深色背景下对比度骤降（如 light `muted #848484` 对比度仅 3.74:1，低于 WCAG AA 标准的 4.5:1；dark hairline 边框对比度仅 1.28:1），在实际使用中导致高频文本与表单边框难以辨识。
3. **巨大的上游同步与维护负担**：
   - 官方 DSH 持续迭代底层 token 与 UI Primitives，每次上游 token 调整都会导致外部 84 枚硬编码 token 出现断裂、死 token 或表现异常，违反了「插件紧随官方演进、不当二道贩子」的核心架构原则。
4. **架构治理冲突**：
   - 强行劫持宿主全局 body 样式破坏了插件的运行时边界与隔离性，阻碍了生态内其他标准插件的协同。

---
*（以下保留原决策记录文本供历史溯源）*

## 历史原记录（2026-08-21 提案内容）

OmniMux 桌面用 **`ctx.theme.overrideTokens('omnimux-xai', XAI_TOKENS)`** 把整个 DeepSeek Harness 宿主壳（侧栏 / 会话 / 顶栏 / 设置）染成 x.ai 品牌色。这是**渲染全壳**路径（覆盖官方 `--dsw-*` 别名层），不是岛内 `--omx-*` 路径。

**关键点：官方对第三方自定义 UI 视觉没有任何强制检查或拦截。** 我们自建品牌色覆盖官方视觉，机制上完全可行，且官方明确开放了 `overrideTokens` 给第三方。

### 实现机制
- `overrideTokens` → presenter `apply()` 在 `document.body` 上 `setProperty`（`ui-layout/src/client/theme-presenter.ts:43-48`）→ 全局染色，包含所有插件 island。
- `{light,dark}` 双值强制校验。
- disposer / `ctx.effect` 挂接。
