---
title: "决策：Agent 页面感知与工作台双向协同（信封注入 + Hub SSE 总线）"
id: "adr-2026-09-04-agent-workbench-bidirectional-sync"
type: "decision"
status: "accepted"
authority: "L2"
date: "2026-09-04"
updated: "2026-09-04"
authors: ["gao-jianyuan", "agent-architect"]
subsystem: "omnimux"
tags: ["workbench", "sse", "ui-context-envelope", "agent-tools", "adr"]
supersedes: []
superseded_by: null
related:
  - "docs/specs/2026-09-04-agent-workbench-bidirectional-sync-prd.md"
  - "docs/specs/2026-09-04-agent-workbench-bidirectional-sync-design.md"
  - "docs/contracts/agent-workbench-sync.md"
  - "docs/contracts/workbench-split.md"
  - "docs/contracts/hub.md"
  - "docs/decisions/2026-08-31-workbench-split.md"
---

# ADR：Agent 页面感知与工作台双向协同

## Status

Accepted

## Context

#318 已把一级库页迁入右侧 `dsh-better-sidebar`，人机同面成立，但三件事未打通：

1. 用户发消息时 Agent 看不见当前 Tab / Chip / 选中对象。
2. Host 侧没有对等的切页工具；`window.__omnimuxWorkbench.open` 只活在渲染进程。
3. 资产库 `useAssetsFeed` 以 `POLL_MS = 5000` 拉 `GET /omnimux/assets/state`，写盘到可见最长一整轮 5 秒。

PRD（许清楚，`docs/specs/2026-09-04-agent-workbench-bidirectional-sync-prd.md`）把这三件事定为 P0，并留下 Q1/Q2 给架构拍板。官方会话不可卸载、不可自绘第二套 composer、垂直包禁止 `import` hub。

## Decision

### Q1 — 信封挂哪

**不**把信封写成独立 hidden 系统消息，也 **不**依赖官方 `message.metadata`（插件没有该缝，fork composer 被禁）。

采用 **双通道**：

| 通道 | 用途 | 形态 |
|---|---|---|
| **认知面（G1）** | 每条用户消息默认让模型看见视口 | Composer 提交拦截器同步采集（≤16ms），在原生发送前把紧凑 `<ui_context schema="1">…</ui_context>` **前缀**写入用户文本。Hub 会话气泡 CSS/渲染过滤器隐藏该块，用户只看见自己打的字。 |
| **工具面（G2）** | `workbench_get_active_view` 读此刻快照 | Client 在 workbench snapshot 变化时 `POST /omnimux/workbench/viewport`（loopback）；Host 存 last-known + `capturedAt`；心跳超过 3s 标 `stale: true`。 |

截断永不丢 `surface`。采集失败消息照发。

若未来官方暴露 `UserPromptSubmit` / message metadata 插件钩，本 ADR 的前缀注入可被替换；工具面 mailbox **保留**。

### Q2 — 事件传输

**Hub 拥有一条多路复用 SSE**：`GET /omnimux/events/stream`。

- 进程内 `HubEventBus`（`ctx.provide('hubEvents')`），垂直包只 `ctx.get('hubEvents').emit(...)`，禁止私有 WebSocket、禁止直连云。
- 浏览器只开 **一条** EventSource；同页 `BroadcastChannel('omnimux:hub-events')` 扇出给各 Tab hook。
- 心跳 `omnimux:heartbeat` 每 **2s**；Client 连续 **5s** 无任何事件 → SSE 不健康 → 资产库恢复 5s poll。
- 鉴权：loopback origin（与 `assertLocalWrite` 同主机集合）。SSE 是只读广播，**不**绕过写闸。
- `Last-Event-ID` + 环形缓冲（64 条 / 10s）做短断重放；以域 `lrev` 做业务幂等。

不选「各垂直私有 SSE」（N 条 EventSource 打爆 HTTP/1 连接）。不选「纯 EventEmitter + 长轮询」作主路径（达不到 400ms P95 的产品体感，且与画布已验证的 SSE 模式重复）。同页 `BroadcastChannel` 只作扇出，不作跨进程真源。

### 切页 RPC

`workbench_open_tab` 在 Host 执行：校验 Occupants / reason / 配额 / 设置 / `panelOpen` → 需要动 UI 时向总线发 `omnimux:workbench:rpc` → 浏览器桥调用现有 `window.__omnimuxWorkbench.open({ tabId, path })` → `POST /omnimux/workbench/rpc/ack`。工具 **禁止** `setFocus` / 改 `conversationCollapsed` / `claimProductStage` / `sessions.create({})`。

### 防打扰与设置

收起面板默认 `applied: false, code: panel-collapsed`。设置项落在现有 `settings.plugin.item`（`omnimux` 卡）布尔 `allowAgentSwitchTab`，默认开；**禁止**新的一级 `settings.section`。

## Consequences

**更容易**

- 垂直包零 hub import，只多一条 `hubEvents` seam 与一个 `registerContextContributor`。
- 资产库可关 poll 单测仍刷新；断连自动回 5s 兜底。
- 切页与写盘解耦：入库成功不依赖面板打开。

**更难**

- Composer 前缀是可逆 hack：官方气泡 DOM 结构变了，隐藏过滤器要跟着修。
- SSE 在 Electron 会话下若 cookie/代理不稳，必须在 5s 内落到 poll，验收不能假装「一直 SSE」。
- 环形缓冲不保证跨进程重启回放；重启后 Client force refresh 一次。

**明确不做**

- `forceOpenPanel` 进 P0（P2 + 会话授权）。
- 画布节点选中进 P0 信封（P2 `view.extra`）。
- 无 better-sidebar 时回退 overlay / details（沿用 #313）。
- 删除 5s poll。
