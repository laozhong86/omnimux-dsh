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
tags: ["video", "model-contract", "phase-one", "scope"]
supersedes: []
superseded_by: null
related:
  - "docs/contracts/model-api-authority.md"
  - "docs/specs/2026-09-05-model-evidence-backfill-video-prd-addendum.md"
  - "docs/specs/2026-09-05-model-contract-docs-first.md"
---

# 视频模型阶段一范围：七个产品型号

> **裁定**：本阶段仅覆盖下列七个产品型号。它替代旧视频附录中 C1–C4、17 个型号及派生 wire 的**本阶段范围**，不回滚既有成果，也不改变旧文档的历史记录。

## 1. 本阶段产品型号

| # | 产品型号 | 目录标识或显示名 | 本阶段处理 |
|---|---|---|---|
| 1 | Seedance 2.0 | `seedance-2-0` | 按渠道文档核对模式和输入合同 |
| 2 | Seedance 2.0 Fast | `seedance-2-0-fast` | 同上 |
| 3 | Seedance 2.0 Mini | `seedance-2-0-mini` | 同上 |
| 4 | Seedance 2.5 | `seedance-2-5` | 同上 |
| 5 | Wan 3.0 | `wan-3.0` | 同上 |
| 6 | MiniMax H3 | `minimax-h3` | 单一产品型号；wire 和模式待渠道文档核对 |
| 7 | Grok 视频 1.5 | `grok-imagine-video-1-5` | 以该显示型号核对渠道文档 |

产品型号是本阶段的范围单位，不预先等同于 runtime wire、目录行或 operation。同一型号的多种官方生成模式仍属于本阶段，不能因型号数固定而只接文生视频或已测试模式。

## 2. 合同和验证方法

- 模式、字段、角色、数量、MIME、格式、时长和 wire 均以 [模型 API 权威](../contracts/model-api-authority.md) 规定的具体 EvoLink 或 APIMart 官方 API 文档为准。
- `first_frame`、`last_frame`、`first_last_frame`、多参考和全能参考分别核对；不得由同名模型、样本、旧测试或另一渠道推断。
- MiniMax H3 不预先拆成 `t2v`、`flf`、`fl2va`、`endframe` 等多个产品目标；确认属于 H3 的渠道合法 wire 及全部支持模式仍需纳入接入，具体关系以渠道文档为准。
- Wan 产品目标只限 `wan-3.0`；`wan-3.0-prime`、`wan-3.0-ref` 和 `wan-3.0-prime-ref` 不作为本阶段独立产品目标。若渠道文档要求使用专门 wire 表达同一 Wan 3.0 型号的参考模式，应记录为该型号内部映射，不因此遗漏参考模式或扩入 Prime 型号。
- 使用离线 fixture、mock 和测试核验实现是否能表达已记录的合同。文档支持、离线实现验证和历史真实执行必须分列。
- 不发真实模型 API 请求，不上传素材，不以生成、轮询、错误或历史样本发现合同。

## 3. 延后范围

Kling 全组、Wan 派生型号及不在 §1 的所有视频型号均延后，不在本阶段排期。延后不等于不支持，也不改变现有 catalog、YAML、wire 或 `listed` 状态。

## 4. 交付边界

本阶段交付目标是完成这七个型号的接入：先按实际渠道文档核对模式和输入合同，再补齐字段映射、素材槽位、参数面板、目录适配与提交前校验，并完成离线验证和必要的真实页面验收。仅列出文档或发现实现缺口不算接入完成；未完成项须明确记录。现有 `execution.live` 与 `listed` 的耦合须按接口准据对齐，不能以真实请求补证或伪造 live 绕过。

若后续改动 UI，仍按仓库 UI 验收要求完成真实浏览器验证；该验证不授权模型 API 请求。本规格本身不改 UI、代码、YAML 或环境。

## 5. 验收

- 范围清单恰为七个产品型号。
- 不出现 Kling 或 Wan 派生型号作为阶段一目标。
- MiniMax H3 保持单一产品型号，未预先展开为 wire/operation 清单。
- 每项合同记录都能回指渠道官方 API 文档，或明确为未知。
- 七个型号的实现覆盖与模式缺口逐项有结论；接入完成须有离线校验及所需 UI 验收证据，不能只凭文档清单宣称完成。
