---
title: "Market 技能候选对象加载修复"
id: "spec-market-skill-candidate"
type: "spec"
status: "accepted"
authority: "L2"
date: "2026-09-05"
updated: "2026-09-05"
authors: ["x", "codex"]
subsystem: "omnimux-market"
---

# Market 技能候选对象加载修复

关联 [#593](https://github.com/omnimux-ai/omnimux-dsh/issues/593)，是 [#552](https://github.com/omnimux-ai/omnimux-dsh/issues/552) 预填交互之后的发送阶段修复。

## 已确认边界

官方 `dsh-skill` 0.1.2-alpha.3 通过 `provider.get(candidate, options)` 加载技能。Market 的实现把候选对象作为名称传入路径拼接，导致技能消息在模型 step 前报路径类型错误。

仅修改 Market 的 Host provider 与回归测试：消费当前候选对象契约，不接受旧字符串签名；所有加载分支返回具备 `source`、`provider`、`invocation` 和非空正文的合法定义。缺失技能仍返回 `undefined`。不改官方 Harness、技能来源优先级、灵感预填 UI、模型路由或云数据。

## 实施与验收

1. 使用隔离目录 fixture，按 `list → get(candidate, options)` 调用；记录旧实现失败、修复后成功。
2. 覆盖目录技能、已安装技能和缺失项，验证完整定义元数据；通过实际官方 Registry 的零模型调用核实契约。
3. 执行 Market 包测试、构建及独立审查；检查构建产物与源码一致。
4. PR 合入和 Dev 激活分别报告。当前不物化或重启共享 45120；不重发用户消息、不调用付费模型、不修改用户草稿、工作区或画布。

代码由均衡 Agent 实施，轻量 Agent 验证，旗舰 Agent 独立审查。发现超出上述边界的问题另行定界。
