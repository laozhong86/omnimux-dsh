---
name: anti-loop
agents: [social-content-team-lead, content-copywriter, image-agent, video-agent, editing-agent, speech-agent, music-agent]
---

# Anti-Loop & Failure Breaker Contract

同参数连续失败达到 3 次强制熔断，严禁静默重试消耗算力。

## 核心规则

1. **同参数重试上限**：对相同参数、相同输入的工具调用，最多允许 1 次自动重试。若连续 2 次失败，必须变更参数或切换模型。
2. **熔断与求助**：当累计尝试 3 次仍无法成功时，子代理必须立即返回 `failed: true` 并携带明确的错误详情（`error_reason`、`model_signal`），主理人将问题和可选方案结构化呈报给用户。
3. **安全拦截即时中止**：若工具返回涉及安全审查拦截（Safety Check / Content Block），立即中止该分支，严禁绕过或重复尝试。
