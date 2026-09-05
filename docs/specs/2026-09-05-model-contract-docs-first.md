---
title: "模型合同：渠道官方 API 文档优先方法修订"
id: "spec-model-contract-docs-first"
type: "spec"
status: "accepted"
authority: "L2"
date: "2026-09-05"
updated: "2026-09-05"
authors: ["xu-qingchu", "gao-jianyuan"]
subsystem: "omnimux/catalog"
tags:
  - "model-contract"
  - "api-authority"
  - "docs-first"
  - "catalog"
supersedes:
  - "docs/specs/2026-09-05-model-evidence-backfill-prd.md"
  - "docs/specs/2026-09-05-model-evidence-backfill-design.md"
  - "docs/specs/2026-09-05-model-evidence-backfill-video-prd-addendum.md"
  - "docs/specs/2026-09-05-model-evidence-backfill-video-design-addendum.md"
  - "docs/specs/2026-09-05-wan-3-ref-wire-design.md"
superseded_by: null
related:
  - "docs/specs/2026-09-04-model-io-contract-h2-catalog-design.md"
  - "docs/specs/2026-09-04-model-io-contract-h2-catalog-prd.md"
  - "docs/specs/2026-09-04-model-io-contract-compatibility-design.md"
  - "docs/specs/2026-09-04-model-io-contract-compatibility-prd.md"
  - "docs/contracts/model-api-authority.md"
  - "docs/contracts/model-capabilities-matrix.md"
  - "docs/contracts/model-list-ownership.md"
---

# 模型合同：渠道官方 API 文档优先方法修订

> **裁定**：模型输入合同由具体渠道的具体模型 API 文档决定。本文替代所列旧规格中“以存在性、最小生成、试拒绝、样本或历史执行推导字段与上限”的执行方法；旧文件中的模型范围和历史执行记录仍可查阅，但不再是输入合同或上架条件的来源。

## 1. 范围与权威来源

本修订覆盖 `modelId#operationId` 的模式、字段、角色、数量、MIME、容器或格式、时长、尺寸和其他输入限制。

- 首选来源是渠道官方文档中的**该模型、该 operation 的 API 页面**，而不是渠道首页、同名模型、示例请求或社区资料。
- 当前主要渠道文档根为 [EvoLink 官方文档](https://evolink.ai/docs) 与 [APIMart 官方文档](https://docs.apimart.ai/)；具体来源、优先级和记录格式以 [模型 API 权威](../contracts/model-api-authority.md) 为准。
- 不得把同名模型在另一渠道的字段或限制移用到当前渠道，也不得用同渠道的相邻 SKU 补缺。
- 文档未说明即为**未知**。未知字段、角色、数量、格式、时长或模式不得猜测、试探或以保守值伪装为支持。

## 2. 模式和字段的判定

渠道文档应逐模型、逐 operation 记录字段名、类型、必填性、枚举、媒体角色、数量与格式限制，以及适用的时长和尺寸。

- `first_frame`、`last_frame`、`first_last_frame`、普通多参考图与“全能参考”是独立语义；仅当该渠道该模型文档明确等价时才可合并。全能参考不得缩写或映射为普通多图输入。
- 文档示例只说明示例能够表达的请求，不构成数量、时长、尺寸或格式的上限。
- API 返回的拒绝、历史成功或失败不能补充未写入官方文档的合同字段，也不能推翻已写明的字段。
- 变更模型合同前，记录具体官方页面 URL、渠道、模型、operation、文档章节和查阅日期；未形成该记录不得写为文档支持。

## 3. 三类证据，分别陈述

| 类别 | 能证明什么 | 不能证明什么 |
|---|---|---|
| 官方文档支持 | 渠道声明的合同字段和模式 | 本仓实现已覆盖或曾经执行成功 |
| 代码与离线 mock 验证 | mapper、schema、序列化及本地兼容行为 | 渠道实际接受请求或文档支持 |
| 历史真实执行 | 某个过去时间的请求、终态和产物事实 | 当前 URL 可用、合同上限或全部模式支持 |

历史记录必须保留其时间、渠道和执行上下文；不得把其转写为现在的文档支持。任何结论都必须标明所属类别。

## 4. 对旧探测计划的替换

以下做法不再是模型合同发现、限制确定或上架前提：

- `existence → 最小生成 → boundary` 的顺序探测；
- C1–C4 或其他批次中的真实生成、逐步试拒绝、付费预算和首次成功即停；
- 将测试样本数、历史成功参数或 `policy_conservative` 当成渠道上限；
- 以 dated probe、单次 MIME/readback 或“每 operation 必须真实生成”作为文档支持的替代；
- 因未做真实请求而断言渠道不支持，或因一次失败将模式排除。

本任务不发真实模型 API 请求，也不存在未来默认“最小真实冒烟”例外。任何真实执行都只记录执行事实，不以其反推未说明的合同。

## 5. 目录与实现的分层

合同层先按官方文档表达支持与未知；实现层再用离线验证确认当前代码能否正确传递该合同。两层都不自动改变 catalog 可见性。

当前 `listed` 实现仍依赖 `execution.live`，这与“官方文档支持”和离线实现验证是不同维度。该差异是后续需要在合同、catalog 与执行语义间对齐的实现问题；本修订不修改代码、YAML、`listed` 状态或 live 声明，也不把所有文档支持的型号上架。

## 6. 旧文档的保留边界

被本修订列入 `supersedes` 的五份探测计划保留：原始模型范围、历史日期、已发生执行和已有离线测试；其输入合同、探测预算、边界请求、样本上限、按执行翻转 `listed` 或“不测即不支持”的可执行指令均由本修订替代。

四份基础规格（H1 compatibility PRD/design 与 H2 catalog PRD/design）继续作为现行架构、schema、槽位、输出类型、画布兼容与 catalog 投影规范。本文只替代其中有关渠道字段来源、样本/实测上限、真实请求补证和以执行推导支持范围的方法部分。

阅读旧文档时，必须通过本文和 [模型 API 权威](../contracts/model-api-authority.md) 解释其历史内容；不得直接执行被替代的探测或上架步骤。

## 7. 本次文档验收

- 每项模型输入限制可回指具体渠道、具体模型和具体 operation 的官方 API 文档，或明确标为未知。
- 离线验证和历史执行与官方文档支持分列，不互相升级。
- 首尾帧与全能参考按渠道文档分别核对，不从旧测试或同名模型推断。
- 不发真实模型 API 请求、真实生成、生产变更、YAML 修改或 catalog 上架。
