---
title: "架构决策记录 (ADR / Decisions) 索引"
id: "index-decisions"
type: "index"
status: "living"
authority: "L2"
date: "2026-08-26"
updated: "2026-08-26"
authors: ["x", "agent-architect"]
subsystem: "global"
---

# 架构决策记录 (ADR / Decisions)

> **权威等级**：L2 | **生命周期**：不可变只读 (Immutable Records)

## 1. 目录职能
重大架构决议与技术选型裁定。历史决议不可篡改，若有升级仅通过新增补丁决议替代。

## 2. 索引矩阵 (Index Matrix)

| 状态 | 文件名 | 标题 | 模块 | 维护/生效日期 | 核心摘要 |
|---|---|---|---|---|---|
| `accepted` | [2026-08-26-l2-in-progress-plugin-cap.md](2026-08-26-l2-in-progress-plugin-cap.md) | 决策：L2 在研插件仍保持「每个 profile link ≤ 1」 | `omnimux-assets` | 2026-08-26 | 日期：2026-08-26。 |
| `accepted` | [2026-08-26-l2-restart-host-session-semantics.md](2026-08-26-l2-restart-host-session-semantics.md) | 决策：L2 restart-host 保端口与磁盘，不保浏览器会话 | `omnimux` | 2026-08-26 | 日期：2026-08-26。 |
| `accepted` | [2026-08-26-ops-entry-authority.md](2026-08-26-ops-entry-authority.md) | 决策：运维命令权威入口仍是 fork yarn omnimux: | `omnimux` | 2026-08-26 | 日期：2026-08-26。 |
| `accepted` | [2026-08-21-gxgen-capability-plugin.md](2026-08-21-gxgen-capability-plugin.md) | Gxgen 微服务 → OmniMux 能力插件 | `dsh-drama` | 2026-08-21 | **Superseded（2026-08-21 下午方向变更）**：引擎客户端方案废除——用户明确要求本地化自包含，不可能依赖本地 Docker 引擎或云端。Gxgen video-engine 降级 |
| `accepted` | [2026-08-21-xai-full-shell-theme.md](2026-08-21-xai-full-shell-theme.md) | 决策：全壳 x.ai 品牌染色（overrideTokens 渲染官方 --dsw-） | `omnimux` | 2026-08-21 | 日期：2026-08-21。 |
| `accepted` | [2026-08-16-harness-consume-not-fork.md](2026-08-16-harness-consume-not-fork.md) | 决策：消费官方 dsh，不整仓 fork | `omnimux` | 2026-08-16 | 日期：2026-08-16。 |
| `accepted` | [2026-08-16-hub-io-and-facilities.md](2026-08-16-hub-io-and-facilities.md) | 决策：执行中枢 I/O 与落地设施 | `omnimux` | 2026-08-16 | 日期：2026-08-16。 |
| `accepted` | [2026-08-16-hub-owns-core.md](2026-08-16-hub-owns-core.md) | 决策：中枢拥有全部 OmniMux 核心能力 | `dsh-drama` | 2026-08-16 | 日期：2026-08-16。 |
| `accepted` | [2026-08-14-execution-hub.md](2026-08-14-execution-hub.md) | 决策：执行中枢与领域插件 | `dsh-drama` | 2026-08-14 | 日期：2026-08-14。 |
