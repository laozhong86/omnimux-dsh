---
title: "OmniMux-DSH 开发文档全局导航门户"
id: "index-docs-root"
type: "index"
status: "living"
authority: "L1"
date: "2026-08-26"
updated: "2026-08-26"
authors: ["x", "agent-architect"]
subsystem: "global"
tags: ["portal", "index", "docs-root", "navigation"]
---

# OmniMux-DSH 开发文档全局导航门户 (Documentation Portal)

> **规范指引**：本仓库全量文档遵循 [《开发文档工程实践管理规范》](contracts/docs-governance-standard.md)。  
> **权威金字塔**：`Live Code` > `AGENTS.md` > `docs/contracts/` $\ge$ `capabilities.md` > `decisions/` > `specs/` > `briefing.md` > `logs/` > `references/`

---

## 1. 核心活清单与工作记忆 (Living Surfaces & Memory)

| 核心文件 | 权威级别 | 类型 | 说明与核心职能 |
|---|---|---|---|
| 📋 [capabilities.md](capabilities.md) | **L1** | `core` | 系统真实/存根/未接入能力真假清单 (Real / Stub / Absent) |
| 📌 [harness-pin.md](harness-pin.md) | **L1** | `core` | 官方上游 deepseek-harness 依赖 Commit Pin 与 Overlay 补丁清单 |
| 🧠 [briefing.md](briefing.md) | **L3** | `log` | 跨会话人-Agent 项目级协同记忆与最新决策速记 |

---

## 2. 四层文档拓扑与子目录导航

```text
docs/
├── contracts/   [L1] 现行工程契约与硬规范 (Living Contracts)
├── decisions/   [L2] 架构决策记录 (Immutable ADRs)
├── specs/       [L2] 产品 PRD 与技术设计规格 (PRDs / Tech Specs / Prototypes)
├── evidence/    [L3] 客观测试与真机验证凭据 (Test Evidence)
├── logs/        [L3] 阶段交付与操作追踪日志 (Milestone Logs)
├── references/  [L4] 外部资料与业务 SOP 参考 (Domain References)
└── archive/     [L4] 历史废弃与过时文档归档 (Archived Records)
```

### 2.1 [contracts/ (系统契约与工程规范)](contracts/README.md)
*随系统迭代持续演进的高权威契约（L1），定义模块接口、中枢 I/O 缝、UI 规范与运维入口。*
- **[docs-governance-standard.md](contracts/docs-governance-standard.md)**: 《开发文档工程实践管理规范》（本规范）
- **[hub.md](contracts/hub.md)**: 执行中枢（Hub）I/O 契约、中立缝与官方专属工具定义
- **[dev-pipeline.md](contracts/dev-pipeline.md)**: 三层开发环境（开发/预发布/生产）与隔离部署流水线
- **[ops-entry.md](contracts/ops-entry.md)**: 运维命令唯一入口契约与各级脚本权责
- **[plugin-git-pr.md](contracts/plugin-git-pr.md)**: 插件仓 Git 分支、Worktree 与 PR 提交流程规范
- **[ui-design-guidelines.md](contracts/ui-design-guidelines.md)**: OmniMux UI 交互与视觉设计规范 (x.ai 品牌语言)
- **[model-list-ownership.md](contracts/model-list-ownership.md)**: 模型列表单一所有权与补丁机制
- *[👉 查看完整 22 篇契约矩阵...](contracts/README.md)*

### 2.2 [decisions/ (架构决策记录 - ADR)](decisions/README.md)
*不可变的历史架构决策（L2），记录重大技术选型背景、裁定理由与备选方案权衡。*
- **[2026-08-14-execution-hub.md](decisions/2026-08-14-execution-hub.md)**: 执行中枢与垂直插件分离架构决议
- **[2026-08-16-harness-consume-not-fork.md](decisions/2026-08-16-harness-consume-not-fork.md)**: 消费官方 Harness 而非全量 Fork 架构决议
- **[2026-08-16-hub-owns-core.md](decisions/2026-08-16-hub-owns-core.md)**: 执行中枢拥有核心产品 Chrome 与认证决议
- **[2026-08-21-xai-full-shell-theme.md](decisions/2026-08-21-xai-full-shell-theme.md)**: x.ai 全壳主题桥接方案决议
- **[2026-08-26-ops-entry-authority.md](decisions/2026-08-26-ops-entry-authority.md)**: 运维入口收敛与 omnimux.mjs 权威裁定
- *[👉 查看完整 9 篇 ADR 时间线...](decisions/README.md)*

### 2.3 [specs/ (产品规格与技术设计)](specs/README.md)
*各垂直插件与中枢功能的产品需求 PRD、技术设计规格 RFC 与高保真交互原型。*
- **[2026-08-22-omnimux-assets-creative-library.md](specs/2026-08-22-omnimux-assets-creative-library.md)**: 创作资产库功能规格
- **[2026-08-23-omnimux-products.md](specs/2026-08-23-omnimux-products.md)**: 产品库需求与设计规格
- **[2026-08-24-omnimux-market-agent-plaza.md](specs/2026-08-23-omnimux-market-agent-plaza.md)**: 专家·技能·连接器集市设计规格
- **[2026-08-25-social-analytics-prd.md](specs/2026-08-25-social-analytics-prd.md)**: 全社媒矩阵数据看板 PRD
- **[prototypes/](specs/prototypes/)**: 包含独立交互原型（如 `2026-08-23-omnimux-products-prototype.html`、`2026-08-25-social-analytics-prototype.html`）
- *[👉 查看完整 18 篇技术与产品规格...](specs/README.md)*

### 2.4 [evidence/ (实测与验证证据)](evidence/README.md)
*自动化测试、真机实测、基线度量与能力验证的客观证据记录（L3）。*
- **[2026-08-14-omnimux-video.md](evidence/2026-08-14-omnimux-video.md)**: OmniMux Video 真实视频生成实测证据
- **[2026-08-15-e2e-dsh.md](evidence/2026-08-15-e2e-dsh.md)**: 官方 DSH 插件加载与端到端跑通实测
- **[2026-08-16-omnimux-image.md](evidence/2026-08-16-omnimux-image.md)**: 生图接口多模型实测与基准证据
- *[👉 查看完整 7 篇实测证据...](evidence/README.md)*

### 2.5 [logs/ (里程碑与交付日志)](logs/README.md)
*版本迭代、阶段功能交付、踩坑排查与关键操作追溯日志（L3）。*
- **[2026-08-15-app-marketplace-mvp.md](logs/2026-08-15-app-marketplace-mvp.md)**: 应用市场 MVP 落地日志
- **[2026-08-20-accounts-v02.md](logs/2026-08-20-accounts-v02.md)**: 账号中心 v0.2 重构交付日志
- *[👉 查看完整 6 篇交付日志...](logs/README.md)*

### 2.6 [references/ (业务资料与外部参考)](references/README.md)
*外部平台接入文档、行业 SOP、调研报告等背景知识参考（L4）。*
- **[tiktok-drama-center.md](references/tiktok-drama-center.md)**: TikTok Drama Center 官方入驻与业务一站式参考

### 2.7 [archive/ (历史废弃与归档文档)](archive/README.md)
*已被新架构完全替代的历史文档，保留供溯源与上下文审计（L4）。*
- **[2026-08-14-handoff-audit.md](archive/2026-08-14-handoff-audit.md)**: 2026-08-14 单次交接审计记录（已封存）

---

## 3. 文档工程工具与 CI 门禁

```bash
# 运行文档工程规范合规检查 (包含 Frontmatter、死链、命名规范、禁词)
pnpm doc:lint

# 自动扫描并重新生成全量子目录 README.md 索引矩阵
pnpm doc:index

# 综合环境与工程门禁检查 (已集成 doc:lint)
pnpm doctor
pnpm verify:all
```
