---
name: "🚀 01. 插件特性 / Stage 开发 (Track B & C)"
description: "用于 OmniMux 产品级 Stage 插件或标准通用服务的特性开发立项"
title: "feat(<scope>): <简要描述>"
labels: ["status:triage", "track:B-stage"]
---

```yaml
# Agent 结构化元数据 (由 许清楚 填充)
track: "Track B (OmniMux 产品级 Stage 插件)" # 或 Track C
scope: "" # 如 omnimux-workflow / omnimux-clip / omnimux-assets
priority: "P1" # P0 / P1 / P2
assignee: "林深"
architect: "高见远"
qa: "严过关"
```

### 1. 🎯 需求背景与目标
- **业务场景**：
- **用户痛点 / 诉求**：
- **社区/官方查重结论**：（许清楚已核对，确认自研）

### 2. 📐 架构设计与 Inspect 契约 (由 高见远 填写/确认)
- **扩展点选型**：`ctx.tools` / `shell.overlay` / `ctx.theme` / `Host 路由`
- **生命周期契约**：Strict Inject / 可逆卸载 / 无害默认值
- **视觉设计规范**：消费 `--dsw-alias-*` / `--dsw-specific-*` (遵循 `design.md`)

### 3. 🧪 验收标准 (Acceptance Criteria)
- [ ] 1. 核心功能实现并与 Host 契约对齐
- [ ] 2. UI 遵循 x.ai 视觉规范与暗黑模式适配
- [ ] 3. 独立单测 `pnpm --filter <scope> test` 100% 通过
- [ ] 4. 严过关五维立体验收放行 (`qa:pass`)

### 4. 📎 关联工作区与分支
- **Branch**: `agent/<scope>-<topic>-issue-<ID>`
- **Worktree**: `../omnimux-dsh-wt-<topic>-<ID>`
