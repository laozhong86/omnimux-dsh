---
title: "model evidence — seedance-2-5#video_multi_ref — 2026-09-05"
id: "evidence-model-seedance-2-5-video_multi_ref-20260905"
type: "evidence"
status: "accepted"
authority: "L3"
date: "2026-09-05"
authors: ["kou-douma"]
subsystem: "omnimux/catalog"
tags: ["model-evidence", "backfill-530", "video", "backfill-530-c1"]
---

# model evidence — seedance-2-5#video_multi_ref — 2026-09-05

## 0. 身份（Identity）
| 字段 | 值 |
|---|---|
| runtime ID | `seedance-2-5`（wire alias：无） |
| operation | `video_multi_ref` |
| 契约位置 | `plugins/omnimux/src/catalog/specs/video-models.yaml` |
| 探测环境 | Darwin / Node v25.8.0 / live key 注入：`omnimux tokens exec 45 --yes --timeout=600 -- env OMNIMUX_API_KEY=__OMNIMUX_TOKEN_45__`；base `https://api.omnimux.ai/v1`；**禁止记录 key 值** |
| 实测者 / 署名 | kou-douma |

## 1. existence（存在性探针）
- 请求：`GET https://api.omnimux.ai/v1/models`（Bearer token id 45）
- 结果：HTTP 200；catalog 共 127 模型；`seedance-2-5` **在列**（present=True）
- 日志摘录：seedance 相关 ID = seedance-2-0 / seedance-2-0-fast / seedance-2-0-mini / seedance-2-5 均 present=true（见同批 existence）

## 2. minimal（最小生成）
- 最小输入：model=`seedance-2-5` op=`video_multi_ref`；prompt 固定短句；duration=5; resolution=720P; aspect_ratio=16:9；wire 字段=reference_images
- 结果：submit HTTP 200; taskId `task_KzVsJ2EpaQAUIeHlkfhsvePX4ysDA3Wz`; terminal `success`; mode **live**; media bytes **5032675**; elapsedMs=300696
- 日志摘录：脱敏摘要 JSON 见同 basename `.json`（request shape 不含 key/完整 data URI；媒体 URL 已去 query）
- extras：无

## 3. boundary（输入数量与角色边界）
| slot | role | min 实测 | max 实测（拒绝点） | 拒绝时上游行为 |
|---|---|---|---|---|
| prompt | prompt | 非空短 prompt → 可 submit/live | node_field max=1 | 空 prompt 未作为本 op 烧费用点 |
| duration | parameter | 契约最小档实测成功 | 非法/过短：probe duration=0 → HTTP 400; body summary: {"error":{"code":"invalid_parameter","message":"duration must be an integer between 4 and 30 seconds, or -1 for automatic duration","type":"invalid_request_error"}} | 见 boundary 段；未即时拒绝者标 policy_conservative |
| reference/image count | reference | 1 | 1 | multi_ref：1 图 live；fast 另 2 图 live（可放宽 max）；2-5 仅 1 图，max 保持 1 |

- 未触达上限的维度：maxSizeMb=20 **未上传近限文件撞拒绝点** → size 上限保持 official_docs/policy_conservative。
- Seedance **禁止** `first_last_frame` 映射（家族铁律，本批未测 flf）。

## 4. mime-size-duration（格式 / 体积 / 时长）
- allowedMimes：PNG reference_images×1 live; 2-ref 未本模型复测，max 保持 1 policy_conservative
- size 上限：未撞拒绝点 → `policy_conservative` / 既有 official_docs（20MB 档保留，明确未实测撞点）
- duration：minimal 使用契约最小档；非法值见 §3；limitSource 混用 live_probe（有即时 400 时）与 policy_conservative
- limitSource 摘要：existence=live_probe；minimal=live_probe；duration 边界=live_probe 或 policy_conservative；size=policy_conservative

## 5. conclusion（结论）
- **当前 YAML 上架状态保持不变**：最小 1-reference 生成后 readback（2026-09-05T04:56:18.707Z）为 `HTTP 200 / video/mp4`，bytes 与 SHA-256 均匹配历史本地件，字段见 JSON。该 readback 是生成后的独立观测，不倒填为生成当时的响应头。
- artifact（历史生成）：terminal success 后本地保留 nonzero bytes；URL `.mp4` 与 ISO BMFF `ftypisom` 支持 `mimeInferred=video/mp4`；当前最小 1-reference 的 HTTP/MIME readback 另见 JSON。
- logs：`docs/evidence/2026-09-05-model-seedance-2-5-video_multi_ref.json`
