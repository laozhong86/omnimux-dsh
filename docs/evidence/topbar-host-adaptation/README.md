---
title: "顶部功能按钮宿主适配交付证据"
id: "evidence-topbar-host-adaptation"
type: "evidence"
status: "draft"
authority: "L3"
date: "2026-09-05"
updated: "2026-09-05"
authors: ["x", "codex"]
subsystem: "omnimux"
tags: ["topbar", "host-adaptation", "browser-qa", "l2"]
related:
  - "docs/specs/2026-09-05-topbar-host-adaptation.md"
---

# 顶部功能按钮宿主适配交付证据

## 结论

本目录记录相对历史基线 `ad2d00eb47c4755f51500ffa0d5103144dfcb3e4` 的隔离 L2 浏览器证据：代码、构建、定向和全 Hub 回归，以及截图与几何采样。该证据仍准确，但只是历史记录，不能代替当前 main 上的最终真机验收。

当前复验以最新 main `0714340` 为基线。#576 已改为真实探针，但 `topbar` 不是受支持参数；当前只支持库页参数或 `all`，且收集器目前只支持 ego-browser。本任务按用户要求必须用内置浏览器复验，不能以不匹配的参数或 ego 收集器伪造门禁通过。

## 实现范围

- `sidebar-toggle-topbar.js` 根据现有 `data-dsh-desktop-mode` 和 `data-dsh-desktop-platform` 标记计算左侧安全区：真实 macOS 桌面分支保留 84px，普通网页与其他桌面平台使用 8px。
- 顶部控制统一为 32 × 32px，SVG 为 16 × 16px，圆角 8px，组内间隔 8px；右侧标签栏仅对与控制组相交的叶 pane 让出右留白。
- ResizeObserver 观察左右栏、控制组和每个标签栏的父 pane；候选集合只过滤 `null`，不依赖跨 Document 不稳定的 `instanceof Element`。
- `conversation-box.js` 将尺寸、垂直对齐和右侧适配限制在 workbench 顶部 panel；非 macOS 的 `title-bar-compat` 保持原顶距，隐藏的对话开关不被强制显示。
- 既有左侧开关、新建会话、底部面板、右侧工作台、标签新增入口和库页互斥逻辑保持原事件路径。

## 变更文件

| 文件 | 交付内容 |
|---|---|
| `plugins/omnimux/src/client/sidebar-toggle-topbar.js` | 宿主留白、标签栏右留白、叶 pane 观察和清理逻辑。 |
| `plugins/omnimux/src/client/conversation-box.js` | 顶部控件几何与作用域受限的样式。 |
| `plugins/omnimux/src/client/sidebar-toggle-topbar.test.js` | 宿主标记晚到、4 种宿主留白和分栏右留白回归。 |
| `docs/specs/2026-09-05-topbar-host-adaptation.md` | 已确认范围与验收边界。 |

## 验证

`measurements.json` 是截图的原始采样。四组几何断言全部通过：

| 场景 | 视口 | 顶部控件 | 断言 |
|---|---:|---:|---|
| `web-collapsed-981` | 981 × 964 | 5 | 32 × 32、16 × 16 SVG、8px 圆角、中心线 `cy=20`、命中均通过。 |
| `web-expanded-workbench-981` | 981 × 964 | 4 | 同上。 |
| `assets-three-controls-981` | 981 × 964 | 5 | 同上，覆盖活动插件页的条件对话开关。 |
| `web-collapsed-768` | 768 × 964 | 6 | 同上，覆盖窄视口。 |

行为采样还记录了：新建标签菜单保留，先从该菜单打开资产库与产品库；随后通过真实左侧资产库入口切回资产库，库页显示互斥；底部开关可打开；右栏关闭和左栏展开后的控件仍可命中。定向测试 54 项、全 Hub 994 项、最终 `sidebar-toggle-topbar.test.js` 33 项均通过；`verify:stages` 为 10 个 Stage，Stores 为 8 个，插件边界检查为 1877 项，均通过。构建及 `git diff --check` 通过。

## 已知限制与后续验收

- 历史 45120 是未改动的基线，未物化该历史 worktree；`pnpm verify:live topbar` 对其 HTTP 探针返回 401、退出码 1，不能作为成功证据。当前复验遵循最新 main 的真实探针契约，且不把 `topbar` 当作其受支持参数。
- L2 仅是浏览器宿主。84px macOS 桌面安全区只有单测覆盖，尚无真实桌面宿主证据。
- L2 的底部开关动作有效，但终端内容模块返回 `client module system unavailable`，因此没有内容层验收。
- 点击新建会话后 composer 出现，菜单仍保持打开；Escape 可关闭。该现象是否与基线一致未证实，本次不扩修。
- 已记录的 `pnpm doc:lint` 日志为既有 189 errors 与 23 warnings，且没有新增方案文档诊断；本 README 生成后未另跑全仓 lint，已执行 JSON、证据清单和 `git diff --check` 校验。

隔离服务已通过官方 fork 的 `yarn omnimux:dev stop topbar-host-adaptation` 正常停止；44200 随后为 `ECONNREFUSED`。测试 IAB tab 已关闭、视口覆盖已重置，45120 原有 tab 保留。最终验收需要在物化到获准目标后，以真实 macOS 桌面和 45120 Dev App 分别复测。

## 证据清单

| 文件 | 覆盖内容 |
|---|---|
| [measurements.json](measurements.json) | 原始几何、命中、宿主和行为采样。 |
| [before-45120.png](before-45120.png) | 未改动 45120 基线。 |
| [web-collapsed-981.png](web-collapsed-981.png) | 981 宽网页收起态。 |
| [web-expanded-workbench-981.png](web-expanded-workbench-981.png) | 981 宽工作台展开态。 |
| [web-left-expanded-981.png](web-left-expanded-981.png) | 左栏展开态。 |
| [web-collapsed-768.png](web-collapsed-768.png) | 768 宽收起态。 |
| [web-responsive-767.png](web-responsive-767.png) | 767 宽既有响应式行为。 |
| [assets-three-controls-981.png](assets-three-controls-981.png) | 资产库条件控制组。 |
| [assets-collapsed-final-981.png](assets-collapsed-final-981.png) | 资产库收起后的最终状态。 |
| [products-stage-981.png](products-stage-981.png) | 产品库与库页互斥。 |
| [sidebar-assets-981.png](sidebar-assets-981.png) | 左栏打开资产库。 |
| [bottom-open-981.png](bottom-open-981.png) | 底部面板开关。 |
| [right-closed-981.png](right-closed-981.png) | 右侧工作台关闭态。 |
| [new-session-menu.png](new-session-menu.png) | 新建会话菜单。 |
| [new-tab-menu.png](new-tab-menu.png) | 新建标签菜单。 |
