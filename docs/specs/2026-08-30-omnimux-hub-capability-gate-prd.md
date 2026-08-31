---
title: "OmniMux 执行中枢能力门禁（Config.gate）一期增量 PRD"
id: "spec-omnimux-hub-capability-gate-prd"
type: "spec"
status: "accepted"
authority: "L2"
date: "2026-08-30"
authors: ["xu-qingchu"]
subsystem: "omnimux"
---

# OmniMux 执行中枢能力门禁（Config.gate）一期增量 PRD

- **作者**：许清楚（产品经理）
- **适用模块**：OmniMux 执行中枢（`plugins/omnimux`）
- **版本**：v1.0.0 (Phase 1)

---

## 1. 产品目标

为 OmniMux 执行中枢（`plugins/omnimux`）建立标准化、可预测的统一能力门禁配置规范（`Config.gate`），在**零前端 UI 侵入**的前提下，提供面向中枢核心 Agent 工具（Media 3 + Text 1 + Reader 1 + Official 23）的细粒度启停控制能力与跨插件扩展契约，实现「双写平滑兼容、双重生效拦截（注册不暴露 + 调用强拒绝）、HTTP 与 Tool 解耦独立运行」，降低企业私有化部署及运维管控风险。

---

## 2. 用户故事

1. **作为运维工程师 / 系统管理员**：我希望在插件 Config / YAML 中声明式关闭特定高消耗或敏感工具（如 `omnimux_video_submit` 或部分 Official 工具），以便在不改源码的情况下精确控制团队调用权限与成本。
2. **作为开发工程师 / 自动化流水线**：当我或下游 Agent 误调用已被禁用的中枢能力时，我希望收到统一错误码 `capability-disabled` 及被禁用能力名称，以便区分门禁拦截与网络/服务故障。
3. **作为垂直插件开发者（如 Workflow / Clip）**：我希望 `Config.gate` 具备标准且向后兼容的 Schema 扩展点，以便未来垂直插件能平滑接入同一套门禁机制。
4. **作为老版本升级维护者**：我希望升级后现有的 `official.mount` 整包总闸以及 `text.models[].enabled` 配置依然生效且逻辑自洽，避免历史环境配置失效。

---

## 3. 需求池（Requirements Pool）

### P0：一期必须交付

| 编号 | 需求项 | 详细说明 |
|:---|:---|:---|
| **REQ-01** | **Config.gate Schema 声明与解析** | 在中枢配置中增加 `gate` 对象；支持按工具名 / 专家模型 / 媒体能力细粒度布尔开关；默认全开，仅显式 `false` 禁用；预留垂直插件命名空间扩展点。 |
| **REQ-02** | **双重生效策略** | 1) 注册时不暴露：禁用则跳过 `tools.register` / 不 `provide` seam。<br>2) 调用时拒绝：命中禁用规则统一抛标准化错误。 |
| **REQ-03** | **统一错误码** | 被 gate 禁用的能力被调用时，统一抛出 `capability-disabled`（附带资源标识）。 |
| **REQ-04** | **媒体能力与工具映射等价** | `gate.media.video|image|audio: false` 等价于对应 `omnimux_<kind>_submit` 关闭。 |
| **REQ-05** | **专家模型双写兼容** | `gate.models.textComplete.<id>` 与现有 `text.models[].enabled`：**任一为 false 即禁用**。 |
| **REQ-06** | **官方整包总闸与细粒度并存** | 保留 `official.mount`。`false` 时整包禁用；`true` 时由 `gate.tools.<name>` 逐一仲裁。 |
| **REQ-07** | **Host HTTP 与 Agent Tool 解耦** | 关闭 Agent Tool **不**自动级联关闭对应 Host HTTP 路由。 |

### P1：近期规划

| 编号 | 需求项 | 说明 |
|:---|:---|:---|
| **REQ-08** | 官方工具分类批量门禁 | 如 `gate.official.publish: false` |
| **REQ-09** | 运维自检 / 能力清单探针 | 便于流水线检查当前工具生效状态 |

### P2：未来演进

| 编号 | 需求项 | 说明 |
|:---|:---|:---|
| **REQ-10** | Settings UI 可视化面板 | 座位须为 `settings.plugin.item`，禁止新 `settings.section` |
| **REQ-11** | 垂直插件强制接入门禁 | assets / products / clip / workflow 等 |
| **REQ-12** | 聊天主模型 runtime 动态禁用 | 与 `cordis.patch.yml` 所有权需另案设计 |

---

## 4. 非目标 / Out of Scope

1. 不做 Settings UI / 可视化配置（一期仅 YAML / Config）。
2. 不强制改造垂直插件。
3. 不管聊天主模型 Runtime 禁用（仅管专家白名单 `textComplete`）。
4. 不变更现有 Host HTTP 接口行为，不因关 tool 级联关 HTTP。

---

## 5. 验收标准（Acceptance Criteria）

1. **默认开启**：未配置 `gate`（或为空）时，中枢工具均正常注册且可调用。
2. **双重拦截**：`gate.tools.omnimux_page_fetch: false` 时，`ctx.tools` 无该工具；强制调用抛 `capability-disabled`。
3. **媒体联动**：`gate.media.video: false` 时，无 `videoGenerate` provide、无 `omnimux_video_submit`；直接调用抛 `capability-disabled`。
4. **双写兼容**：`text.models[].enabled: false` 或 `gate.models.textComplete.<id>: false`，任一为 false 即禁用。
5. **总闸与细闸**：`official.mount: false` → Official + reader 整包不挂载；`official.mount: true` + 单工具 false → 仅该工具禁用。
6. **HTTP 解耦**：禁用某 accounts/inspiration 相关 tool 后，对应 Host HTTP 仍可用。

---

## 6. 待确认问题

无（核心决策已锁定）。

---

## 7. 建议配置形态（产品侧示意，非最终 schema）

```yaml
gate:
  tools:
    omnimux_social_data: false
    omnimux_video_submit: false
  models:
    textComplete:
      grok-4.6: false
  media:
    video: true
    image: true
    audio: false
```
