---
title: "model evidence — <id>#<op> — YYYY-MM-DD"
id: "evidence-model-<id>-<op>-YYYYMMDD"
type: "evidence"
status: "accepted"
authority: "L3"
date: "YYYY-MM-DD"
authors: ["<实测者署名>"]
subsystem: "omnimux/catalog"
tags: ["model-evidence", "backfill-530", "<domain:text|image|video|audio>"]
---

# model evidence — <id>#<op> — YYYY-MM-DD

> 本文件是 #530（模型证据补齐）证据标准模板，规约见
> `docs/specs/2026-09-05-model-evidence-backfill-design.md` §3。
> 命名：`docs/evidence/YYYY-MM-DD-model-<id>-<op>.md`；一 op 一文件；alias 不单独出证据；
> YAML `research.docUrl` 只能指向本 op 自己的文件，`verifiedAt` = 文件日期。

## 0. 身份（Identity）
| 字段 | 值 |
|---|---|
| runtime ID | `<canonical id>`（wire alias：`<alias 或无>`） |
| operation | `<op>` |
| 契约位置 | `plugins/omnimux/src/catalog/specs/<domain>-models.yaml` |
| 探测环境 | OS / Node 版本 / 是否 keyless / key 注入方式（`omnimux tokens exec <id>`，**禁止出现 key 值**） |
| 实测者 / 署名 | <人或 agent 署名> |

## 1. existence（存在性探针）
- 请求：<方法 + 端点 + 模型字段值；不含 key>
- 结果：HTTP 状态 / runtime 可达性结论（200 或等价；403/404 也须如实记录并进入 conclusion）
- 日志摘录：<10 行内>

## 2. minimal（最小生成）
- 最小输入：<实际提交的 prompt/参考资产清单>
- 结果：mode 字段（live/stub）、taskId/回包摘要、产物落盘路径或字节数
- 日志摘录：<回包关键字段；禁止 key>

## 3. boundary（输入数量与角色边界）
- slot 递增实测表：| slot | role | min 实测 | max 实测（拒绝点） | 拒绝时上游行为 |
- 未实测到拒绝点的维度须显式标注「未触达上限」

## 4. mime-size-duration（格式 / 体积 / 时长）
- allowedMimes 实测或官方文档来源（注明 URL 与访问日期）
- size 上限 / duration 上限：实测值 或 `policy_conservative`（注明理由）
- limitSource：每条上限标注 kind ∈ official_docs | live_probe | policy_conservative | runtime_reconciled

## 5. conclusion（结论，二选一）
- **可上架**：四要素齐全 → 建议 YAML 翻 `research: verified`（docUrl=本文件, verifiedAt=<date>）+ `execution: live`
- **不接**：缺哪项要素 / 阻塞原因（如无 key 待复测、上游 403、seam 未闭环）→ 保持 draft，dispositions notes 同步
