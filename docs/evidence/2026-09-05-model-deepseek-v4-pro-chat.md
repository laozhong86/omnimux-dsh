---
title: "model evidence — deepseek-v4-pro#chat — 2026-09-05"
id: "evidence-model-deepseek-v4-pro-chat-20260905"
type: "evidence"
status: "accepted"
authority: "L3"
date: "2026-09-05"
authors: ["kou-douma"]
subsystem: "omnimux/catalog"
tags: ["model-evidence", "backfill-530", "text"]
---

# model evidence — deepseek-v4-pro#chat — 2026-09-05

## 0. 身份（Identity）
| 字段 | 值 |
|---|---|
| runtime ID | `deepseek-v4-pro`（wire alias：无） |
| operation | `chat` |
| 契约位置 | `plugins/omnimux/src/catalog/specs/text-models.yaml` |
| 探测环境 | Darwin / Node v25.8.0 / live key 注入：`omnimux tokens exec 45 --yes --timeout=600 -- env OMNIMUX_API_KEY=__OMNIMUX_TOKEN_45__`；base `https://api.omnimux.ai/v1`；**禁止记录 key 值** |
| 实测者 / 署名 | kou-douma |

## 1. existence（存在性探针）
- 请求：`GET https://api.omnimux.ai/v1/models`（Bearer token id 45）
- 结果：HTTP 200；catalog 共 127 模型；`deepseek-v4-pro` **在列**（present=true）
- 日志摘录：`missing=[]` for PR-A text set；totalListed=127

## 2. minimal（最小生成）
- 最小输入：`POST /v1/chat/completions` body `{model:"deepseek-v4-pro", max_tokens:≤256, messages:[{role:user, content:"Reply with exactly one word: pong"}]}`（无 image）
- 结果：HTTP 200；mode 等价 **live**；response id `021788575372622cdb985060772518cf2b73708fa98016eabd2b0`；usage prompt=91 completion=31 total=122；内容摘要 `pong`；耗时 2241ms
- 日志摘录：status=200 live=True finish/content non-empty；无 key

## 3. boundary（输入数量与角色边界）
| slot | role | min 实测 | max 实测（拒绝点） | 拒绝时上游行为 |
|---|---|---|---|---|
| prompt | prompt | 非空 prompt → HTTP 200 live | node_field max=1（单 prompt 字段语义，非上游 token 上限） | 空 prompt：HTTP 200; body text summary='I’d be happy to help!' (上游未硬拒空 prompt；契约 node_field min=1 仍成立) |
| max_tokens smoke | n/a | max_tokens=1 → HTTP 200 text='Hi' | 不虚构上游 max_tokens 上限 | 契约边界记录 only |

- 说明：chat 无 reference_images slot；空 prompt 行为因上游而异（400/500 拒绝或 200 仍答），**产品契约**仍以 node_field `min:1` 为准。

## 4. mime-size-duration（格式 / 体积 / 时长）
- allowedMimes：N/A（text-only chat；无多媒体输入）
- size 上限 / duration 上限：N/A
- limitSource：N/A（不适用）

## 5. conclusion（结论）
- **可上架**：四要素齐全（existence 200 在列 + minimal live 200 + prompt 边界记录 + MIME N/A）→ 建议 YAML 翻 `research: verified`（docUrl=本文件, verifiedAt=2026-09-05）+ `execution: live`
- 备注：text-only；本文件仅 chat。空 prompt 上游 200 仍答，契约 min:1 由节点层兜底。
