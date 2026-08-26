---
title: "产品规格与技术设计 (Specs & PRDs) 索引"
id: "index-specs"
type: "index"
status: "living"
authority: "L2"
date: "2026-08-26"
updated: "2026-08-26"
authors: ["x", "agent-architect"]
subsystem: "global"
---

# 产品规格与技术设计 (Specs & PRDs)

> **权威等级**：L2 | **生命周期**：阶段规格 -> 实现沉淀

## 1. 目录职能
各垂直插件与中枢功能的产品需求 PRD、技术设计规格 RFC 与高保真交互原型。

## 2. 索引矩阵 (Index Matrix)

| 状态 | 文件名 | 标题 | 模块 | 维护/生效日期 | 核心摘要 |
|---|---|---|---|---|---|
| `accepted` | [2026-08-25-omnimux-clip-studio-prd.md](2026-08-25-omnimux-clip-studio-prd.md) | PRD：OmniMux 独立视频剪辑插件（OmniMux Clip Studio）及画布解耦集成规格书 | `dsh-drama` | 2026-08-25 | 1. **画布代码臃肿**：当前 `omnimux-workflow`（工作流画布）内部硬编码了部分时间轴与剪辑组件，导致画布包体积过大、构建缓慢，且多媒体逻辑与 DAG 编排逻辑深度耦合。 |
| `accepted` | [2026-08-25-omnimux-clip-studio-spec.md](2026-08-25-omnimux-clip-studio-spec.md) | OmniMux Clip Studio（omnimux-clip）技术架构与实现 Spec | `dsh-drama` | 2026-08-25 | \| # \| 决策 \| 内容 \| |
| `accepted` | [2026-08-25-omnimux-gateway-analytics-api-prd.md](2026-08-25-omnimux-gateway-analytics-api-prd.md) | OmniMux 网关社媒数据分析 (Social Analytics) 接口接入需求文档 (PRD) | `omnimux-analytics` | 2026-08-25 | 当前 OmniMux 执行中枢（`product/omnimux-dsh/plugins/omnimux`）已打通 `/api/social/v1/accounts`（账号授权与管理）及 `/api/ |
| `accepted` | [2026-08-25-social-analytics-gateway-gap.md](2026-08-25-social-analytics-gateway-gap.md) | OmniMux 网关社媒数据分析接口 Gap 分析与能力设计 | `omnimux-analytics` | 2026-08-25 | 针对 **Analytics（社媒数据分析看板）** 页面需求，对 `product/omnimux-dsh` 当前已实现的执行中枢（Hub）代码及云端协议契约（`src/official/accou |
| `accepted` | [2026-08-25-social-analytics-prd.md](2026-08-25-social-analytics-prd.md) | 社媒发布与互动数据分析看板 (Social Analytics) PRD | `omnimux-analytics` | 2026-08-25 | 面向社媒多渠道矩阵运营、短剧/图文出海团队及创作者的**全渠道内容发布表现与受众互动分析中枢**。通过聚合各社媒平台（TikTok、X/Twitter、YouTube、Instagram 等）的数据表 |
| `accepted` | [2026-08-25-social-analytics-tech-spec.md](2026-08-25-social-analytics-tech-spec.md) | OmniMux 社媒数据分析看板 (omnimux-analytics) 技术架构与实现 Spec | `omnimux-analytics` | 2026-08-25 | - **插件包名**：`omnimux-analytics` |
| `accepted` | [2026-08-25-zernio-data-source-mapping-and-algorithms.md](2026-08-25-zernio-data-source-mapping-and-algorithms.md) | Zernio 数据源调研与 OmniMux 网关能力映射方案 | `omnimux-analytics` | 2026-08-25 | 通过对 `docs.zernio.com`（覆盖 16 个社媒平台的统一 API）的全面检索分析，**截图中所展示的所有分析图表与核心指标，在 Zernio 体系中均有现成或高度对应的原生数据支持** |
| `accepted` | [2026-08-24-omnimux-inspiration-cover-cache.md](2026-08-24-omnimux-inspiration-cover-cache.md) | OmniMux 灵感库封面修复 + 媒体缓存方案 | `omnimux-inspiration` | 2026-08-24 | 灵感库一级页**封面全部不显示**：真实网关返回的封面字段是 `cover_key`（不是前端读的 `cover_url`），媒体本身（Host 代理流）完全正常。修复=一处字段兼容 + `hostM |
| `accepted` | [2026-08-24-omnimux-market-agent-tool-matrix.md](2026-08-24-omnimux-market-agent-tool-matrix.md) | omnimux-market Agent 工具矩阵：架构设计与任务拆解 | `omnimux-workflow` | 2026-08-24 | **选型结论：`挂载点 = ctx.tools，形态 = 对象插件，产物 = dsh.bundle`。** |
| `accepted` | [2026-08-24-omnimux-market-three-channel-skill-search.md](2026-08-24-omnimux-market-three-channel-skill-search.md) | omnimux-market 三渠道聚合检索基础设施需求规格说明书 | `omnimux-market` | 2026-08-24 | \| 字段 \| 内容 \| |
| `accepted` | [2026-08-23-omnimux-local-project.md](2026-08-23-omnimux-local-project.md) | 新建本地项目（作品包 = dsh 工作区文件夹） | `omnimux-workflow` | 2026-08-23 | **项目就是一个本地文件夹。** 这个文件夹既是 MiniMax 意义上的作品包，也是 dsh 必须绑定的会话工作区。 |
| `accepted` | [2026-08-23-omnimux-market-agent-plaza.md](2026-08-23-omnimux-market-agent-plaza.md) | OmniMux 插件市场：Agent 搜 / 选 / 召 闭环（Feature Spec） | `omnimux-products` | 2026-08-23 | 插件市场今天对人是完整货架，对 **dsh Agent 只是技能店**。 |
| `accepted` | [2026-08-23-omnimux-products-digital-fields.md](2026-08-23-omnimux-products-digital-fields.md) | Gxgen 数字产品结构对照（P1.2 表单拆分） | `omnimux-products` | 2026-08-23 | 老板判断对。Gxgen **库表是一张、界面是两套**。OmniMux P1.1 只把 `kind` 和战略六块塞进**同一张 overlay**，实物电商字段永远在，数字产品看起来像「带折叠战略的  |
| `accepted` | [2026-08-23-omnimux-products.md](2026-08-23-omnimux-products.md) | OmniMux 产品库插件需求文档 | `dsh-drama` | 2026-08-23 | 产品库是带货准备的**语义对象库**：一条产品 = 名称 + 怎么卖（卖点/人群/品牌/价格/SKU/链接）+ 可选主图引用。 |
| `accepted` | [2026-08-22-gxgen-workflow-migration-design.md](2026-08-22-gxgen-workflow-migration-design.md) | 设计规格：Gxgen 工作流 → OmniMux 完整迁移 | `omnimux-workflow` | 2026-08-22 | - 日期：2026-08-22 |
| `accepted` | [2026-08-22-omnimux-assets-creative-library.md](2026-08-22-omnimux-assets-creative-library.md) | OmniMux 资产库：从文件夹挂载改为创作资产（Feature Spec） | `omnimux-assets` | 2026-08-22 | 资产库不再是「把磁盘上的文件/文件夹挂进来」。 |
| `accepted` | [2026-08-20-omnimux-account-avatars.md](2026-08-20-omnimux-account-avatars.md) | 社媒账号头像本地持久化（Phase 2） | `omnimux-accounts` | 2026-08-20 | 挂载点 = Host HTTP `prefix:/omnimux/accounts`（新增 `GET /{id}/avatar` 字节路由 + GET 列表改写）+ 现有 Client Slot `s |
| `accepted` | [2026-08-20-omnimux-login-gate.md](2026-08-20-omnimux-login-gate.md) | OmniMux 统一登录门 — 架构设计 | `dsh-drama` | 2026-08-20 | - 作者：高见远（架构师） |
