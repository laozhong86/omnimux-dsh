---
name: "⚡ 03. 动态轻量插件 / 临时交互 (Track A)"
description: "用于在会话内动态加载临时工具、GenUI 卡片、轻量 Slot 挂载"
title: "feat(dynamic): <功能简述>"
labels: ["status:triage", "track:A-dynamic"]
---

```yaml
# Agent 结构化元数据
track: "Track A (动态轻量插件)"
scope: "dynamic"
priority: "P2"
assignee: "林深"
qa: "严过关"
```

### 1. 🎯 临时诉求背景
- **会话目标**：
- **挂载形态**：`ctx.tools` / 临时交互卡片 / 实时看板

### 2. ⚡ 纯 JS 与无害化约束 (林深)
- **代码形态**：Plain JS (严禁 JSX / TypeScript / import，UI 必须用 `React.createElement`)
- **生命周期**：可逆卸载，会话退出时干净回收

### 3. 🧪 验收标准
- [ ] 1. 语法合规性通过 (Plain JS)
- [ ] 2. 严过关副作用质检通过 (`qa:pass`)
