# Agent preset fragments

`content-experts.cordis.yml` 和 `engagement-experts.cordis.yml` 是 10 个社媒专家 spawn 行的真源。

```
node scripts/build-agent-presets.mjs
```

按完整 `tool-subagent-fork` 六行块插入，禁止中线搜索 `    # ──`。运行两次应幂等。

| 产物 | 插入片段 |
|---|---|
| `presets/standard/agent.cordis.yml` | 两份全量（10 spawn）+ 标准模式分流 persona |
| `presets/social-content-team/agent.cordis.yml` | 仅创作 6 人 |
| `presets/social-engagement-team/agent.cordis.yml` | 仅增长 4 人 |
