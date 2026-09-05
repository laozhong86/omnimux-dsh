---
title: "视频模型阶段一范围：七个产品型号"
id: "spec-video-phase-one-scope"
type: "spec"
status: "accepted"
authority: "L2"
date: "2026-09-05"
updated: "2026-09-05"
authors: ["xu-qingchu", "gao-jianyuan"]
subsystem: "omnimux/catalog"
tags: ["video", "model-contract", "phase-one", "scope", "apimart"]
supersedes: []
superseded_by: null
related:
  - "docs/contracts/model-api-authority.md"
  - "docs/references/evolink-video-channel.md"
  - "docs/specs/2026-09-05-model-evidence-backfill-video-prd-addendum.md"
  - "docs/specs/2026-09-05-model-contract-docs-first.md"
---

# 视频模型阶段一范围：七个产品型号

> **裁定**：本阶段只接下列七个产品型号，固定使用 APIMart 官方接口。EvoLink 独立建账，不混用约束，不自动切换渠道。接入以官方文档、适配实现、离线验证和 45120 页面验收为完成条件，不要求真实生成。

## 1. 型号与接口映射

| 产品模型 | APIMart `model` | 官方接口页 |
|---|---|---|
| `seedance-2-0` | `seedance-2.0` | [Seedance 2.0](https://docs.apimart.ai/en/api-reference/videos/seedance-2-0/generation.md) |
| `seedance-2-0-fast` | `seedance-2.0-fast` | [Seedance 2.0](https://docs.apimart.ai/en/api-reference/videos/seedance-2-0/generation.md) |
| `seedance-2-0-mini` | `seedance-2.0-mini` | [Seedance 2.0](https://docs.apimart.ai/en/api-reference/videos/seedance-2-0/generation.md) |
| `seedance-2-5` | `seedance-2.5` | [Seedance 2.5](https://docs.apimart.ai/en/api-reference/videos/seedance-2-5/generation.md) |
| `wan-3.0` | `wan3.0-video` | [Wan 3.0](https://docs.apimart.ai/en/api-reference/videos/wan3.0-video/generation.md) |
| `minimax-h3` | `MiniMax-H3` | [MiniMax H3](https://docs.apimart.ai/en/api-reference/videos/minimax-h3/generation.md) |
| `grok-imagine-video-1-5` | `grok-imagine-video-1.5` | [Grok Imagine Video 1.5](https://docs.apimart.ai/en/api-reference/videos/grok-imagine/official.md) |

产品 ID、APIMart wire model 和 operation 是三层不同标识。映射必须精确匹配上表，不能靠大小写、标点模糊匹配，也不能落到 EXT、Prime 或其他版本。

## 2. 本阶段模式

| 产品模型 | 文生 | 首帧 | 尾帧 | 首尾帧 | 全能参考 | 编辑 | 延长 | 文档 | 网页 |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| Seedance 2.0 / Fast / Mini | ✓ | ✓ | — | ✓ | ✓ | — | — | — | — |
| Seedance 2.5 | ✓ | ✓ | — | ✓ | ✓ | ✓ | ✓ | — | — |
| Wan 3.0 | ✓ | ✓ | — | ✓ | ✓ | — | — | ✓ | ✓ |
| MiniMax H3 | ✓ | ✓ | ✓ | ✓ | ✓ | — | — | — | — |
| Grok Imagine Video 1.5 | ✓ | — | — | — | ✓ | — | — | — | — |

内部 operation 分别使用 `text_to_video`、`first_frame`、`end_frame`、`first_last_frame`、`video_multi_ref`、`video_edit`、`video_extend`、`document_to_video` 和 `webpage_to_video`。Grok 1.5 只按官方 1.5 文生与参考图接口实现，不混入 EXT 编辑能力。

## 3. 关键输入和参数边界

- Seedance 2.0 系：参考图最多 9 张、参考视频最多 3 段、参考音频最多 3 段；音频不能单独作为参考。视频总时长须大于 1.8 秒且小于 15.2 秒，音频总时长不超过 15 秒。输出时长 4–15 秒。基础版支持 480p/720p/1080p/4K，Fast 和 Mini 支持 480p/720p。
- Seedance 2.5：参考图最多 30 张、视频最多 10 段、音频最多 10 段；音频可单独输入。编辑源视频 4–30 秒，延长源视频至少 2 秒；输出时长 4–30 秒或 `-1` 自动，编辑模式必须自适应画幅并使用自动时长。
- Wan 3.0：参考图最多 10 张，视频和音频各最多 5 段；各段 1–15 秒，视频或音频各自总时长不超过 15 秒。存在参考视频时，输入视频总时长加输出时长不超过 30 秒。文档最大 100MB、50 页，网页必须公开且无需登录。输出时长 2–30 秒或 `-1`；分辨率枚举大小写不敏感。
- MiniMax H3：参考图最多 9 张、视频最多 3 段、音频最多 3 段；音频不能单独输入，帧模式与全能参考互斥。输出时长 4–15 秒，分辨率为 2K 或 768P，提示词必填且最多 7000 个字符。
- Grok Imagine Video 1.5：参考输入只有有序 HTTPS 图片；官方未公布参考图数量上限，因此合同值为 `null`，不能用历史试跑数量代替。输出时长 1–15 秒，分辨率为 480p/720p/1080p，提示词最多 8000 个字符。

完整 MIME、体积、比例、声音和高级字段保存在 `plugins/omnimux/src/catalog/specs/video-models.yaml`。官方未公布的限制明确保留为空，不自行补值。

## 4. 实现与验证合同

1. 前端提交产品模型、operation、带角色和顺序的素材及参数；中枢按同一合同二次校验，再转换成 APIMart 字段。
2. 切换模型或模式时保留不兼容值并明确提示；用户确认调整前，不静默删除素材或改参数。
3. 每个模式都有合法与错误 fixture，覆盖数量、时长、互斥、音频单独输入、自动时长、枚举大小写、可空提示词和模型切换。
4. 离线测试禁止外网请求；提交、失败、轮询和结果解析使用固定响应替身。页面里的合法提交必须明确显示为模拟结果。
5. 状态分成 `research`（官方文档确认）、`implementation`（映射与校验就绪）、`execution`（历史真实执行）。目录准入不要求 `execution.live`，也不得伪造它。
6. 最终 UI 验收在 45120 Dev App 完成，并生成仓库规定的 live QA 证据；环境不可用时只能标待完成，单测不能代替。

## 5. 延后范围

Kling 全组、Wan 派生型号、Grok EXT 及不在 §1 的所有视频型号均延后。延后不等于不支持，也不改变它们已有的历史记录。

## 6. 完成判定

- 七个产品 ID 与七个 APIMart wire model 一一对应，且没有渠道自动回退。
- §2 的 31 个“型号 × 模式”组合都能由同一合同驱动素材槽位、参数面板、提交校验和 APIMart 映射。
- 官方上限与未知项按 §3 表达；合法、错误与固定响应 fixture 全部离线通过。
- 45120 页面完成新建节点、切换模式、素材添加与排序、参数修改、错误提示、提交拦截和模拟成功验收。
- 真实执行历史保持原样，本轮没有新增真实生成请求。
