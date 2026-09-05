---
title: "model evidence — seedance-2-0#first_frame — 2026-09-05"
id: "evidence-model-seedance-2-0-first_frame-20260905"
type: "evidence"
status: "accepted"
authority: "L3"
date: "2026-09-05"
authors: ["kou-douma"]
subsystem: "omnimux/catalog"
tags: ["model-evidence", "backfill-530", "video", "backfill-530-c1"]
---

# model evidence — seedance-2-0#first_frame — 2026-09-05

## 0. 身份（Identity）
| 字段 | 值 |
|---|---|
| runtime ID | `seedance-2-0`（wire alias：无） |
| operation | `first_frame` |
| 契约位置 | `plugins/omnimux/src/catalog/specs/video-models.yaml` |
| 探测环境 | Darwin / Node v25.8.0 / live key 注入：`omnimux tokens exec 45 --yes --timeout=600 -- env OMNIMUX_API_KEY=__OMNIMUX_TOKEN_45__`；base `https://api.omnimux.ai/v1`；**禁止记录 key 值** |
| 实测者 / 署名 | kou-douma |

## 1. existence（存在性探针）
- 请求：`GET https://api.omnimux.ai/v1/models`（Bearer token id 45）
- 结果：HTTP 200；catalog 共 127 模型；`seedance-2-0` **在列**（present=True）
- 日志摘录：seedance 相关 ID = seedance-2-0 / seedance-2-0-fast / seedance-2-0-mini / seedance-2-5 均 present=true（见同批 existence）

## 2. minimal（最小生成）
- 最小输入：model=`seedance-2-0` op=`first_frame`；prompt 固定短句；duration=5; resolution=720P; aspect_ratio=16:9；wire 字段=images[]
- 结果：submit HTTP 200; taskId `task_FSGXMHcrd9omJnfBtoeEVoI5BYNrjuuF`; terminal `success`; mode **live**; media bytes **1406407**; elapsedMs=289793
- 日志摘录：脱敏摘要 JSON 见同 basename `.json`（request shape 不含 key/完整 data URI；媒体 URL 已去 query）
- extras：无

## 3. boundary（输入数量与角色边界）
| slot | role | min 实测 | max 实测（拒绝点） | 拒绝时上游行为 |
|---|---|---|---|---|
| prompt | prompt | 非空短 prompt → 可 submit/live | node_field max=1 | 空 prompt 未作为本 op 烧费用点 |
| duration | parameter | 契约最小档实测成功 | 非法/过短：probe duration=0 → HTTP 200; body summary: {'created': 1788581523, 'id': 'task_98Ac6OvpkRcl46GcivlxEA8vzobm4pGn', 'model': 'seedance-2-0', 'object': 'video', 'status': 'queued', 'task_id': 'task_98Ac6OvpkRcl46GcivlxEA8vzobm4pGn'} | 见 boundary 段；未即时拒绝者标 policy_conservative |
| reference/image count | first_frame | 1 | 1 wire images[] | multi_ref：1 图 live；fast 另 2 图 live（可放宽 max）；2-5 仅 1 图，max 保持 1 |

- 未触达上限的维度：maxSizeMb=20 **未上传近限文件撞拒绝点** → size 上限保持 official_docs/policy_conservative。
- Seedance **禁止** `first_last_frame` 映射（家族铁律，本批未测 flf）。

## 4. mime-size-duration（格式 / 体积 / 时长）
- allowedMimes：本 op 仅 PNG 经 `images[]` live。家族对照中 fast 的 PNG/JPEG 有 live terminal；WebP 仅 submit HTTP 200、未取得终态，不能称为格式已证。singular `image` 的 HTTP 400 仅在 fast/mini/2.5 实测，seedance-2-0 本身未单测。
- size 上限：未撞拒绝点 → `policy_conservative` / 既有 official_docs（20MB 档保留，明确未实测撞点）
- duration：minimal 使用契约最小档；非法值见 §3；limitSource 混用 live_probe（有即时 400 时）与 policy_conservative
- limitSource 摘要：existence=live_probe；minimal=live_probe；duration 边界=live_probe 或 policy_conservative；size=policy_conservative

## 5. conclusion（结论）
- **不接（documented non-admission）**：本 op 以 `images[]` live 出片（submit200 + terminal success + nonzero mp4 bytes + ftyp isom）。Hub mapper 实际发 singular `image`；同家族 fast/mini/2.5 的 singular `image` 实测 HTTP 400（"does not support image"）。**seedance-2-0 未单独重发 singular-image 400**，不接依据=mapper 字段 + 家族 400 + 本 op 仅 images[] 可跑。可跑的 `images[]` ≠ executor-ready → **不 listed**；YAML 保持 draft/stub。
- logs：`docs/evidence/2026-09-05-model-seedance-2-0-first_frame.json`（含 wireFieldProbes 脱敏摘要；无 /tmp 路径）
