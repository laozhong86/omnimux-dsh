---
title: "产品规格与技术设计 (Specs & PRDs) 索引"
id: "index-specs"
type: "index"
status: "living"
authority: "L2"
date: "2026-08-26"
updated: "2026-09-05"
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
| `accepted` | [2026-09-05-inspiration-cover-repair.md](2026-09-05-inspiration-cover-repair.md) | 云灵感过期封面修复 | `omnimux` | 2026-09-05 | #584：原 ID 备份、官方来源恢复、持久媒体上传、只更新 cover_key、冲突检查与真实浏览器回读。 |
| `accepted` | [2026-09-05-builtin-browser-qa.md](2026-09-05-builtin-browser-qa.md) | Codex 内置浏览器验收适配 | `qa` | 2026-09-05 | #581；唯一请求、共享 Stage 探针、实际运行产物证明与严格证据消费。 |
| `draft` | [2026-09-05-wan-3-ref-wire-design.md](2026-09-05-wan-3-ref-wire-design.md) | 增量设计：#569 Wan 3.0 reference 系列 wire 与 mapper/探针路径 | `omnimux/catalog` | 2026-09-05 | BI-4/#569 draft（QA 不升 accepted）：multi-ref body 未钉；H1=`reference_images:[{url}]`；POST 硬顶每 ref≤10/两 ref≤20/对照≤8/会话≤28；B≤3 C≤2 D≤3；首个 OK-live 即停；A-auth/C-channel 与 F/M-unknown 分离且不否定 wire；prime-ref 无同 shape 豁免；任何省略 3.0 的短名均禁止；无 wire 证据不 listed。 |
| `accepted` | [2026-09-05-model-evidence-backfill-video-prd-addendum.md](2026-09-05-model-evidence-backfill-video-prd-addendum.md) | 增量产品附录：#530 视频优先范围修订（C1–C4 · Seedance/Wan/MiniMax H3/Kling） | `omnimux/catalog` | 2026-09-05 | 用户批准视频优先；局部修订原 PRD「43 行恒定」/avatar unavailable/o3·motion 不探测/PR-C 10×24 固定面；真实 wire：`wan-3.0-prime`/`wan-3.0-ref`/`wan-3.0-prime-ref`；H3 仅四后缀 wire、bare 不 generation listed；endframe registry_gap；avatar #538 后 draft-probeable；o3/motion 可探默 quarantine；C1→C2→C3→C4 测不过不 listed；旧 PRD/design status 不改。 |
| `accepted` | [2026-09-05-model-evidence-backfill-video-design-addendum.md](2026-09-05-model-evidence-backfill-video-design-addendum.md) | 增量设计附录：#530 视频 C1–C4（Seedance/Wan/MiniMax H3/Kling）证据补齐与上架 | `omnimux/catalog` | 2026-09-05 | 局部修订原 PRD/design「43 行恒定」与 avatar/o3/motion 约束；C1→C2→C3→C4 顺序合入；新 runtime 可 Y-new/D-new；listed=探测成功键变量；真实 wire：`wan-3.0-prime`/`wan-3.0-ref`/`wan-3.0-prime-ref`；H3 bare 不接、endframe draft+registry_gap；执行层 BI-1 last_frame / BI-2 endframe / BI-3 motion / BI-4 Wan ref 前置禁止假测；tokens exec 安全探测；T01–T05；R1 不写 Prod；status accepted。 |
| `proposed` | [2026-09-05-model-evidence-backfill-design.md](2026-09-05-model-evidence-backfill-design.md) | 增量设计：模型证据补齐（Evidence Backfill）证据协议与分批任务分解（#530） | `omnimux/catalog` | 2026-09-05 | 证据标准模板 `docs/evidence/_template-model-evidence.md`（per-op 文件 `YYYY-MM-DD-model-<id>-<op>.md`：existence/minimal/boundary/mime-size-duration/conclusion + 署名环境 + limitSource）；verified/live 逐 op 人工翻转、docUrl 只指本 op 文件、Batch A 外禁共享证据；draft/quarantine 书面结论路径（dispositions notes dated）；任务 T01 模板基线 → T02 PR-A text(19) → T03 PR-B image(20) → T04 PR-C video(24) → T05 PR-D audio(2)+收尾；每批 `pnpm --filter omnimux test` + `--strict --json` 绿、listed 差集==声明清单；零新增依赖、R1 人工合入、不写 Prod。 |
| `proposed` | [2026-09-05-model-evidence-backfill-prd.md](2026-09-05-model-evidence-backfill-prd.md) | 增量 PRD：模型证据补齐（Evidence Backfill）与分批上架（#530） | `omnimux/catalog` | 2026-09-05 | 相对 H2：65 个未 listed op 逐键补证；四要素证据标准（existence/最小生成/输入边界/MIME·size·duration）+ 独立 dated 证据禁止挪用；分批 PR-A text(19) / PR-B image(20) / PR-C video(24) / PR-D audio(2) 顺序人工合入、每批独立 `--strict` 绿；whisper-1/kling-avatar 锁 unavailable、quarantine 四 ID 不接、nanobanana 不双列；「不接留 draft/quarantine」也算交付；R1 不写 Prod。 |
| `proposed` | [2026-09-04-model-io-contract-h2-catalog-prd.md](2026-09-04-model-io-contract-h2-catalog-prd.md) | 增量 PRD：H2 审计 43 模型并切换 Catalog v1.1 契约投影（#465） | `omnimux/catalog` | 2026-09-04 | 相对 H1：43 ID 全处置；listed 仅 operation 级；Batch A 仅三 op 强证据；quarantine 铁律；Catalog 权威 models[]、四列表按 output.type；旧 JS 表 facade 且解析失败不回退；不做 Workflow UI；R1 人工合入。 |
| `proposed` | [2026-09-04-model-io-contract-h2-catalog-design.md](2026-09-04-model-io-contract-h2-catalog-design.md) | 增量设计：H2 审计 43 模型并切换 Catalog v1.1 契约投影（#465） | `omnimux/catalog` | 2026-09-04 | `dispositions.json` 43 处置机器真源（D1–D7 校验）；Batch A 三键证据不足则 draft；冲突限制取更严（policy_conservative）；Catalog v1.1 权威 `models[]` + 四列表仅按 `output.type` 派生（STT→text 桶）；`buildModelCatalog` 切投影、media/text 旧表 facade + fail-closed；coverage `--strict` 转红灯 + cordis 交叉验证；fingerprint 含 contractFP+listedOps；T01–T05 有序任务。图：`2026-09-04-model-io-contract-h2-catalog-*.mermaid`。 |
| `accepted` | [2026-09-04-model-io-contract-compatibility-design.md](2026-09-04-model-io-contract-compatibility-design.md) | 设计：全模态模型 I/O 契约 + 画布兼容（H1 foundation #464 · R1 / **R1.1**） | `omnimux/catalog` | 2026-09-04 | Hub `yaml@^2.9` + registry/schema/profiles；**operation 级** research/execution/listed（`listedOperations`）；**canonical 根 `schemaVersion: "1.1"`**（legacy `version` 仅 loader 输入迁移）；model.aliases=wire 归一；profile.operations ⊆ registry（`profile_operation_unknown`）；H1 实 specs 零 listed claim；promptPolicy；content-hash cache；schema↔JS parity；CLI fail-closed；CI trap；对账属 H2。图：`2026-09-04-model-io-contract-*.mermaid`。 |
| `accepted` | [2026-09-04-model-io-contract-compatibility-prd.md](2026-09-04-model-io-contract-compatibility-prd.md) | PRD：全模态模型 I/O 契约 + 画布兼容性与自动适配（#463/#464） | `omnimux/catalog` | 2026-09-04 | operation 原子任务（MCC 17 首批）；显式 output.type；slot 上限+来源（100MB 非全局硬顶）；可见性三元组；Hide don't grey；accepts≠ready；旧图 configuration_error；R1 人工合入。 |
| `proposed` | [2026-09-04-omnimux-universal-quota-gate-prd.md](2026-09-04-omnimux-universal-quota-gate-prd.md) | PRD：全局额度不足与统一充值弹窗 | `omnimux` | 2026-09-04 | 28 条云调用触发盘点；P0 客户端统一 `window.__omnimuxQuota` 弹窗；Agent 只结构化 `QUOTA`；充值不自动重试。 |
| `proposed` | [2026-09-04-omnimux-quota-precheck-prd.md](2026-09-04-omnimux-quota-precheck-prd.md) | 增量 PRD：计费入口余额预检 | `omnimux` | 2026-09-04 | 计费入口以 verify 权威额度预检；成功缓存 30 秒、并发合并；额度不足拦截，验证异常 fail-open。 |
| `proposed` | [2026-09-04-omnimux-universal-quota-gate-design.md](2026-09-04-omnimux-universal-quota-gate-design.md) | 系统设计：统一额度分类器 + 充值门 | `omnimux` | 2026-09-04 | 稳定码 `quota-exceeded`；official/media 402 保真；quotaGuard 对标 authGuard；T01–T05。图：`2026-09-04-omnimux-universal-quota-gate-*.mermaid`。 |
| `proposed` | [2026-09-04-agent-workbench-bidirectional-sync-design.md](2026-09-04-agent-workbench-bidirectional-sync-design.md) | 系统设计：Agent 页面感知与工作台双向协同 | `omnimux` | 2026-09-04 | Q1 双通道信封（composer 前缀 + viewport mailbox）；Q2 Hub 单路 SSE + hubEvents；五任务分解 T01–T05。图：`2026-09-04-agent-workbench-sync-*.mermaid`。 |
| `proposed` | [2026-09-04-agent-workbench-bidirectional-sync-prd.md](2026-09-04-agent-workbench-bidirectional-sync-prd.md) | PRD：Agent 页面感知与工作台双向协同系统 | `omnimux` | 2026-09-04 | UI Context Envelope 随消息默认附带；`workbench_get_active_view` / `workbench_open_tab` + 防打扰；资产库写盘 P95 ≤400ms 推送，5s poll 仅作 SSE 断连兜底。 |
| `proposed` | [2026-08-31-workbench-libraries-and-toggle-prd.md](2026-08-31-workbench-libraries-and-toggle-prd.md) | 增量 PRD：一级库页迁入右侧工作台与顶部对话开关注入（#318） | `omnimux` | 2026-08-31 | 废除库页 overlay；registerTab + Default Focus（画布 split / 其余 gui）；toggleCluster 首位插入对话开关；记忆按会话×Tab。 |
| `accepted` | [2026-08-30-omnimux-physical-materialization.md](2026-08-30-omnimux-physical-materialization.md) | 画布与资产库 100% 物理实体化（PRD + 技术规格） | `omnimux-workflow` | 2026-08-30 | 导入/主体/生成物全部 copy 进受管目录；项目相对路径；阶段 0 文档先行。 |
| `accepted` | [2026-08-28-canvas-project-assets-prd.md](2026-08-28-canvas-project-assets-prd.md) | 工作流画布：项目资产与画布素材双 Tab 抽屉 | `omnimux-workflow` | 2026-08-28 | 画布 Tab = 当前创作态；资产 Tab = 项目持久态。原型：`prototypes/2026-08-28-canvas-project-assets-prototype.html`。 |
| `accepted` | [2026-08-28-inspiration-hover-replication.md](2026-08-28-inspiration-hover-replication.md) | 灵感库卡片悬停 CTA × 去对话复刻：架构规格与任务分解 | `omnimux-inspiration` | 2026-08-28 | Track C 双包；跨包唯一缝 `window.__omnimuxWorkflow.startReplicationProject`；复用 `runNewProject` 默认库路径；Composer 走市场插件已验证的 React 18 setter + 发送按钮。严禁跨包 client import。 |
| `accepted` | [2026-08-25-omnimux-clip-studio-prd.md](2026-08-25-omnimux-clip-studio-prd.md) | PRD：OmniMux Clip Studio（omnimux-clip）完整微应用化 | `omnimux-clip` | 2026-08-25 | 工作流画布 (`omnimux-workflow`) 不该再内嵌多媒体时间轴。WebCodecs / WebGPU 与 React Flow 同树会把包体积和运行时一起拖垮。剪辑必须是独立插件。 |
| `accepted` | [2026-08-25-omnimux-clip-studio-spec.md](2026-08-25-omnimux-clip-studio-spec.md) | OmniMux Clip Studio（omnimux-clip）完整微应用技术 Spec | `omnimux-clip` | 2026-08-25 | \| # \| 决策 \| 内容 \| |
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
| `accepted` | [2026-08-23-omnimux-products.md](2026-08-23-omnimux-products.md) | OmniMux 产品库插件需求文档 | `omnimux-products` | 2026-08-23 | 产品库是带货准备的**语义对象库**：一条产品 = 名称 + 怎么卖（卖点/人群/品牌/价格/SKU/链接）+ 可选主图引用。 |
| `accepted` | [2026-08-22-gxgen-workflow-migration-design.md](2026-08-22-gxgen-workflow-migration-design.md) | 设计规格：Gxgen 工作流 → OmniMux 完整迁移 | `omnimux-workflow` | 2026-08-22 | - 日期：2026-08-22 |
| `accepted` | [2026-08-22-omnimux-assets-creative-library.md](2026-08-22-omnimux-assets-creative-library.md) | OmniMux 资产库：从文件夹挂载改为创作资产（Feature Spec） | `omnimux-assets` | 2026-08-22 | 资产库不再是「把磁盘上的文件/文件夹挂进来」。 |
| `accepted` | [2026-08-20-omnimux-account-avatars.md](2026-08-20-omnimux-account-avatars.md) | 社媒账号头像本地持久化（Phase 2） | `omnimux-accounts` | 2026-08-20 | 挂载点 = Host HTTP `prefix:/omnimux/accounts`（新增 `GET /{id}/avatar` 字节路由 + GET 列表改写）+ 现有 Client Slot `s |
| `accepted` | [2026-08-20-omnimux-login-gate.md](2026-08-20-omnimux-login-gate.md) | OmniMux 统一登录门 — 架构设计 | `omnimux` | 2026-08-20 | - 作者：高见远（架构师） |
