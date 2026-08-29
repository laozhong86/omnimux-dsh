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
   - `app.asar.unpacked/.../config/agent-presets/`（真实文件）
   - 同长度 patch `app.asar` header，把目录从官方 `code/cordis/minimal/standard` 改成三项（Electron 先读 asar 清单）
   - 可选清理 `~/.dsh/.agent-presets` 旧用户预设
3. Profile `cordis.patch.yml` 必须设置：

```yaml
- id: agent-presets
  config:
    default: standard
    includeUserRoot: false
```

这样顶部下拉不会再混入 PTC / 极简 / 创造 / 专家模式 / 旧社媒增长团。

## 标准模式如何调用专家团

DSH **不允许**已开始的会话热切换 preset（`agentPreset.select` 会 `agent-preset-locked`）。产品路径是：

- **默认停在 `standard`**：主会话按指令 spawn 10 个具名专家（创作 6 + 增长 4），header 仍显示「标准模式」。
- **专用团 preset**：用户开新会话就要整场沉浸该团时，用下拉选团（仅空白会话可 `select`）。
- 专家 spawn 真源在 `presets/fragments/`，由 `scripts/build-agent-presets.mjs` 插入三个 `agent.cordis.yml`。

## 命名契约

与市场专家团 catalog id 对齐：

- 创作 = `social-content-team`
- 增长 = `social-engagement-team`
