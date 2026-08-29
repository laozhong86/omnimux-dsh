# OmniMux 出厂 Agent Presets

顶部会话模式下拉只保留三项：

| id | 显示名 | order |
|---|---|---|
| `standard` | 标准模式 | 1 |
| `social-content-team` | 社媒内容创作专家团 | 2 |
| `social-engagement-team` | 社媒互动增长专家团 | 3 |

## 产品化机制

1. 本目录是 **OmniMux 产品真源**（不是 DSH 上游 `config/agent-presets`）。
2. `scripts/sync-agent-presets.sh` 物化到：
   - 各 profile 的 `node_modules/@deepseek-ai/dsh/config/agent-presets/`（桌面端强制以此为 system root）
   - 可选清理 `~/.dsh/.agent-presets` 旧用户预设
3. Profile `cordis.patch.yml` 必须设置：

```yaml
- id: agent-presets
  config:
    default: standard
    includeUserRoot: false
```

这样顶部下拉不会再混入 PTC / 极简 / 创造 / 专家模式 / 旧社媒增长团。

## 命名契约

与市场专家团 catalog id 对齐：

- 创作 = `social-content-team`
- 增长 = `social-engagement-team`
