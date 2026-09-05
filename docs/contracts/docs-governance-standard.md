---
title: "开发文档工程治理合同"
id: "contract-docs-governance-standard"
type: "contract"
status: "living"
authority: "L1"
date: "2026-08-26"
updated: "2026-09-05"
authors: ["x", "agent-architect"]
subsystem: "global"
tags: ["governance", "documentation", "engineering-standards"]
supersedes: []
superseded_by: null
related:
  - "docs/README.md"
  - "docs/contracts/plugin-git-pr.md"
---

# 开发文档工程治理合同

本合同规定 `docs/` 的权威边界、分类、metadata 与生命周期。它不把现有脚本没有实现的检查描述成硬门禁。

## 事实与权限分开仲裁

发生冲突时先判断冲突属于哪一类：

| 类型 | 仲裁原则 |
|---|---|
| 当前实现/运行事实 | 以当前 runtime、磁盘、代码、配置和可复现测试为准；文档与事实不符时记录 drift 并修正文档或实现 |
| 能力声明 | 同时核对代码路径、`capabilities.md` 与当前证据；历史日志、截图或 briefing 不能证明当前能力 |
| 行动权限/风险 | 以当前用户指令、适用 `AGENTS.md` 和 [plugin-git-pr](plugin-git-pr.md) 为准；代码“能执行”不代表 Agent 获得执行权限 |
| 架构意图 | 现行 contract 优先于旧 ADR/spec；ADR 保留决策理由，不覆盖后续 living contract |

因此不得用 “Live Code > rules” 推导权限。脚本存在、按钮可点、token 可用或测试可通过都不会授予 push、merge、生产、重启、管理或支付权限。

## 文档层级

| 层 | 路径 | 用途 |
|---|---|---|
| L0 | `AGENTS.md`、`CONTEXT.md` | 仓库常驻硬边界与术语 |
| L1 | `docs/contracts/`、`docs/capabilities.md`、`docs/harness-pin.md` | 现行契约、能力状态与上游锚点 |
| L2 | `docs/decisions/`、`docs/specs/` | 决策理由、产品和技术规格 |
| L3 | `docs/evidence/`、`docs/logs/`、`docs/briefing.md` | 具时效的证据、过程记录与跨会话记忆 |
| L4 | `docs/references/`、`docs/archive/` | 外部参考与历史封存 |

层级不是“一切内容”的单轴覆盖关系：L0/L1 可以定义政策，runtime/code 只能证实现状；L3 证据必须带目标、版本和时间，过期后不得冒充当前事实。

## 目录与命名

| 路径 | 命名与维护方式 |
|---|---|
| `docs/contracts/<topic>.md` | kebab-case，无日期前缀，living |
| `docs/decisions/YYYY-MM-DD-<topic>.md` | 带日期，合入后保留历史 |
| `docs/specs/YYYY-MM-DD-<topic>.md` | 带日期；原型放 `docs/specs/prototypes/` |
| `docs/evidence/`、`docs/logs/` | 带日期，记录当时目标/SHA/环境 |
| `docs/references/<topic>.md` | 外部资料和业务参考 |
| `docs/archive/YYYY-MM-DD-<topic>.md` | 已废弃历史及替代关系 |

文件名使用小写 kebab-case；目录 README 例外。不要把运行时状态、开放 PR 清单或临时队列写进 living contract。

## Frontmatter

所有非转发桩 Markdown 第一行使用 YAML frontmatter。当前 `doc:lint` 强制字段是 `title`、`id`、`type`、`status`、`authority`、`date`；living 文档还应维护 `updated`。推荐完整格式：

```yaml
---
title: "文档标题"
id: "contract-unique-slug"
type: "contract"
status: "living"
authority: "L1"
date: "2026-09-05"
updated: "2026-09-05"
authors: ["x"]
subsystem: "global"
tags: ["topic"]
supersedes: []
superseded_by: null
related: []
---
```

允许的 `type` 以 `scripts/doc-lint.mjs` 中 `VALID_TYPES` 为准，允许的 `status` 以 `VALID_STATUS` 为准，`authority` 为 L0–L4。不要把希望未来支持的字段写成当前校验器已强制。

## 生命周期

- Contract 持续演进；接口、环境变量、存储路径或权限合同变化时，同一交付中更新对应 contract。
- ADR、evidence 与 log 记录历史。后续变化新增文档或明确 supersede，不改写旧证据使其看似证明新状态。
- 归档时记录 `supersedes` / `superseded_by` 并更新相应索引。需要保留历史链接时使用转发桩；不要为无引用的草稿机械制造桩。
- Briefing 是记忆，不是事实或权限真源；与当前代码、runtime、AGENTS 或 contract 冲突时不得继续引用为结论。
- 新增长流程应进入按需 skill；contract 只保留政策、接口、fail condition 与发现指针。

## 当前工具真实能力

| 命令 | 当前实际行为 | 不包含 |
|---|---|---|
| `pnpm doc:lint` | 扫描 `docs/`；检查父目录文件名规则、必填 frontmatter/枚举、Markdown 相对链接的**目标文件存在性**、关键索引存在；违禁术语只告警 | 不校验 `#anchor`，不检查文档是否被索引/孤岛，不验证正文语义 |
| `pnpm doc:index` | 改写/生成目录索引 | 不是只读校验；普通文档修改不得为了“验证”而全仓重生成 |
| `pnpm doctor` | 执行 `scripts/dev-doctor.sh` 的环境检查 | 不运行 `doc:lint` |
| `pnpm verify:all` | `verify:gates` + 测试 + registry + doctor | 当前不运行 `doc:lint`；`verify:gates` 的 `doc:pairing` 不是 doc lint |

文档任务应显式运行并报告真正执行的检查。不能把 `doctor` 或 `verify:all` 成功写成 Frontmatter、死链、锚点或孤岛检查成功。新增锚点/孤岛/required-doc gate 需要单独实现和评审；本合同不宣称其已存在。

## 维护最小流程

1. 修改文档真源和必要索引，避免复制同一政策或完整 SOP。
2. 检查所有新增相对链接的目标文件；若依赖并行子任务，明确记录待集成目标。
3. 运行 `pnpm doc:lint`；只在明确要求更新生成索引时运行 `pnpm doc:index`。
4. 报告实际命令、退出码、告警和未覆盖项，不把 warning 或未实现检查写成 PASS。
