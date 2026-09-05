---
title: "model evidence — gemini-3.7-flash#vision_chat — 2026-09-05"
id: "evidence-model-gemini-3.7-flash-vision_chat-20260905"
type: "evidence"
status: "accepted"
authority: "L3"
date: "2026-09-05"
authors: ["kou-douma"]
subsystem: "omnimux/catalog"
tags: ["model-evidence", "backfill-530", "text"]
---

# model evidence — gemini-3.7-flash#vision_chat — 2026-09-05

## 0. 身份（Identity）
| 字段 | 值 |
|---|---|
| runtime ID | `gemini-3.7-flash`（wire alias：无） |
| operation | `vision_chat` |
| 契约位置 | `plugins/omnimux/src/catalog/specs/text-models.yaml` |
| 探测环境 | Darwin / Node v25.8.0 / live key 注入：`omnimux tokens exec 45 --yes --timeout=600 -- env OMNIMUX_API_KEY=__OMNIMUX_TOKEN_45__`；base `https://api.omnimux.ai/v1`；fixture：`/tmp` 64×64 PNG/JPEG/WebP（不入库） |
| 实测者 / 署名 | kou-douma |

## 1. existence（存在性探针）
- 请求：`GET https://api.omnimux.ai/v1/models`
- 结果：HTTP 200；`gemini-3.7-flash` **在列**
- 日志摘录：PR-A text set missing=[]；totalListed=127

## 2. minimal（最小生成）
- 最小输入：1× `image_url` data URL（64×64 red PNG）+ prompt「What dominant color… One word only.」；`POST /v1/chat/completions`
- 结果：HTTP 200；mode **live**；id `msg_01Ot5dpLAvfjt0VwsWAFT0Y5`；usage prompt=1102 completion=35 total=1137；摘要 `Red`；1419ms
- 日志摘录：content 识别为 red/Red；无 key

## 3. boundary（输入数量与角色边界）
| slot | role | min 实测 | max 实测（拒绝点） | 拒绝时上游行为 |
|---|---|---|---|---|
| prompt | prompt | 非空 + 1 图 → 200 live | node_field max=1 | — |
| reference_images | reference | 1 图 200 live（id `msg_01Ot5dpLAvfjt0VwsWAFT0Y5`） | 2 图 200 live text=`2`；10 图 200 live text=`10`；**11 图仍 HTTP 200 live text=`11`，未触达拒绝点** | 上游未在 11 拒绝 → **不得写「最大 10 实测」**；契约 max:10 仅 `policy_conservative` |

## 4. mime-size-duration（格式 / 体积 / 时长）
- allowedMimes 实测：
  - `image/png`：HTTP 200 live text=`Red`
  - `image/jpeg`：HTTP 200 live text=`Red`
  - `image/webp`：HTTP 200 live text=`Red`
- size 上限：未撞拒绝点 → `policy_conservative`（契约 maxSizeMb:20 维持，非 measured 上限）
- duration：N/A（image only；本 PR-A **不**声称 video 输入已证实）
- limitSource：MIME = live_probe；image count max10 = policy_conservative（11 未拒）；size = policy_conservative

## 5. conclusion（结论）
- **可上架**：四要素齐全 → 建议 YAML 翻 `research: verified`（docUrl=本文件, verifiedAt=2026-09-05）+ `execution: live`；reference_images max 保持 10 且 limitSource=`policy_conservative`
- 备注：契约含 reference_videos 槽，本 PR-A **仅证实 image**；video 输入保持 policy_conservative，不得因 image 探测声称 video 已证实。
