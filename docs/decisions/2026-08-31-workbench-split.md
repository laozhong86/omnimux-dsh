---
title: "决策：工作台挂 dsh-better-sidebar，库页留 overlay，对话不卸载"
id: "decision-workbench-split"
type: "decision"
status: "accepted"
authority: "L2"
date: "2026-08-31"
updated: "2026-08-31"
authors: ["x", "agent-architect"]
subsystem: "omnimux"
tags: ["workbench", "better-sidebar", "layout", "adr"]
supersedes: []
superseded_by: null
related:
  - "docs/contracts/workbench-split.md"
  - "docs/contracts/sidebar-extra-entries.md"
  - "docs/contracts/client-ui-remediation.md"
---

# 决策：工作台挂 dsh-better-sidebar，库页留 overlay，对话不卸载

> **权威等级**：L2 | **状态**：`accepted` | **生效日期**：2026-08-31  
> **关联契约**：[workbench-split.md](../contracts/workbench-split.md)

## 背景

用户要「左一级导航 | 中对话可关 | 右插件 GUI 常驻」。官方 `AppFrame` 已是三栏，但 `conversation` 不可卸载，`ctx.layout` 只有 `toggleSidebar` / `openDetails` / `closeDetails`。自绘三栏壳会 shadow `conversation`，违反 Slot Catalog。

## 裁定

1. **不发明三栏壳**。工作台（剪辑 Tab、项目画布 Tab）坐社区 `dsh-better-sidebar`；库/目录页继续 `shell.overlay` + `claimProductStage`。
2. 「关掉对话框」= 写右栏几何：`panelOpen: false`（chat）或把宽度拉到 `viewport − 左栏`（gui）。`conversation` 保持挂载。
3. 跨插件缝是 `window.__omnimuxWorkbench`。垂直插件禁止 import hub。无 better-sidebar 时 `open` 返回 false，不回退 overlay / `details`。
4. 打开工作台必须 `releaseCurrentProductStage()`，否则库页 overlay 会藏 `[data-dsh-panel-host]`。
5. 无当前会话时禁止 `sessions.create({})`。

## 备选（否决）

| 方案 | 否决理由 |
|---|---|
| Shadow `conversation` / 自绘 composer | 官方 slot 不可替换；双对话栏 |
| 把库页也搬进右栏 | 产品未拍板；overlay 互斥仍是一级页合同 |
| 官方 `details` 当工作台 | 宽 300–520px，剪辑/画布不够用 |
| 缺 better-sidebar 时回退 overlay | 会再次 claim product-stage，把对话盖住 |
