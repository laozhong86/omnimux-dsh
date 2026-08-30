# OmniMux

<p align="center">
  <strong>The Open-Source Multi-Agent Creation & Operations Orchestrator for DeepSeek Harness</strong>
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-Source--Available-blue.svg" alt="License: Source-Available"></a>
  <a href="COMMERCIAL.md"><img src="https://img.shields.io/badge/Edition-Community%20%7C%20Enterprise-success.svg" alt="Community | Enterprise"></a>
  <a href="https://nodejs.org"><img src="https://img.shields.io/badge/Node.js-%3E%3D22.19%20%7C%7C%20%3E%3D24-brightgreen.svg" alt="Node Version"></a>
  <a href="https://github.com/deepseek-ai/deepseek-harness"><img src="https://img.shields.io/badge/Ecosystem-DeepSeek%20Harness-purple.svg" alt="DSH Ecosystem"></a>
  <a href="CONTRIBUTING.md"><img src="https://img.shields.io/badge/PRs-Welcome-orange.svg" alt="PRs Welcome"></a>
</p>

---

## 🌟 简介 (Introduction)

**OmniMux** 是专为 [DeepSeek Harness (DSH)](https://github.com/deepseek-ai/deepseek-harness) 打造的开源多智能体（Multi-Agent）创作与社媒全链路运营编排平台。

我们参考了 **Multica**（将 Agent 视为团队员工进行协同与管理）与 **n8n**（可视化工作流自动化）的产品与商业架构，将 AI 创作团与增长团深度融合，提供从**创意灵感 → 脚本生成 → 视觉生图 → 视频分镜 → 剪辑出片 → 账号矩阵多平台发布 → 自动化互动监控**的全链路闭环。

---

## 🏗️ 架构与插件矩阵 (Architecture & Plugins)

OmniMux 采用“执行中枢 + 业务垂直插件”的微内核模块化架构：

```
                              ┌────────────────────────┐
                              │  DeepSeek Harness Host │
                              └───────────┬────────────┘
                                          │
                        ┌─────────────────▼─────────────────┐
                        │   plugins/omnimux (执行中枢)       │
                        │   - 产品外壳 / 品牌状态             │
                        │   - 统一账号凭证与鉴权              │
                        │   - 多模态模型统一调度通道         │
                        └─────────────────┬─────────────────┘
                                          │
        ┌───────────────────┬─────────────┼─────────────┬───────────────────┐
        │                   │             │             │                   │
┌───────▼──────────┐ ┌──────▼──────┐ ┌────▼─────┐ ┌─────▼───────┐ ┌─────────▼────────┐
│ omnimux-workflow │ │ omnimux-    │ │ omnimux- │ │ omnimux-    │ │ omnimux-publish  │
│ 无限画布工作流    │ │ assets/    │ │ clip     │ │ accounts    │ │ 多平台账号发布   │
│ DAG 编排 & 生成  │ │ products   │ │ 剪辑工坊  │ │ 矩阵管理    │ │ 分发与任务台账   │
│ 自动化任务调度   │ │ 创作资产库 │ │ 视频合成  │ │ 状态风控    │ │ 自动化数据回流   │
└──────────────────┘ └─────────────┘ └──────────┘ └─────────────┘ └──────────────────┘
```

* **`omnimux`**：执行中枢。统一产品外壳、账号鉴权、模型/出片服务路由。业务插件无缝复用。
* **`omnimux-workflow`**：工作流无限画布。拖拽编排 DAG、Agent 工具调用与多模态内容生成流。
* **`omnimux-assets` & `omnimux-products`**：创作资产与商品库。角色、场景、风格包与带货商品资产统一管理。
* **`omnimux-clip`**：剪辑工坊。集成专业微应用时间轴与视频轨道编排合成。
* **`omnimux-accounts`**：社媒矩阵账号池。多平台账号状态监控、授权与可用性保护。
* **`omnimux-inspiration`**：灵感复刻库。爆款视频拆解、提示词与多模态工程复刻。
* **`omnimux-publish`**：多账号内容发布中心。草稿箱、多平台并发分发与子任务台账管理。

---

## 💼 版本对比 (Community vs Enterprise)

OmniMux 采用与 **Multica** 相同的 **Open-Core** 模式与 **Sustainable Source** 许可：

| 特性 | Community Edition (社区开源自托管) | Commercial / Enterprise (商业企业版) |
| :--- | :---: | :---: |
| **源码完全开放与二次开发** | ✅ 自由修改与本地扩展 | ✅ 支持私有化源码交付与定制 |
| **个人使用 / 学术研究** | ✅ 永久免费 | ✅ 永久免费 |
| **企业内部业务自用 (Self-Hosted)** | ✅ 永久免费 (无限制) | ✅ 免费 (提供专属部署技术支持) |
| **全量创作/增长 Agent 调度** | ✅ 完整支持 | ✅ 支持多租户高并发与性能优化 |
| **企业单点登录 (SSO / SAML)** | ❌ | ✅ 完整支持 |
| **多租户权限与协作隔离 (RBAC)** | ❌ (单租户/本地隔离) | ✅ 完整支持多团队权限矩阵 |
| **商业转售与白标 OEM 贴牌** | ❌ (明确禁止) | ✅ 官方授权 OEM 品牌独立售卖 |
| **托管云服务运营 (Cloud SaaS)** | ❌ (明确禁止) | ✅ 官方商业 SaaS 运营授权 |
| **技术支持与服务 SLA** | 社区 GitHub 讨论区 / Issue | ✅ 专属企业响应群与 7×24h SLA |

*详细说明与授权流程请查阅 [COMMERCIAL.md](COMMERCIAL.md)。*

---

## 🚀 快速启动 (Quickstart)

### 环境要求
* **Node.js**：`^22.19 || >=24`
* **pnpm**：`>=9`
* **DeepSeek Harness (DSH)**：通过 `npx @deepseek-ai/dsh` 或本地 DSH 环境运行。

### 本地部署运行
```bash
# 1. 克隆代码仓库
git clone https://github.com/omnimux-ai/omnimux-dsh.git
cd omnimux-dsh

# 2. 安装依赖并运行测试
pnpm install
pnpm test
./scripts/smoke.sh

# 3. 挂载插件至 DSH
dsh plugin add ./plugins/omnimux
dsh plugin add ./plugins/omnimux-workflow
dsh plugin add ./plugins/omnimux-accounts
dsh plugin add ./plugins/omnimux-publish

# 4. 启动 DSH Web 工作台
dsh web
```

---

## 🤝 贡献与社区 (Contributing)

我们非常欢迎开发者参与共建！无论是修复 Bug、编写文档，还是为 OmniMux 贡献新的 Agent Skills 或插件：
1. 查阅 [CONTRIBUTING.md](CONTRIBUTING.md) 了解代码规范与 PR 提交流程。
2. 遵守 [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) 行为准则。
3. 发现安全问题请按照 [SECURITY.md](SECURITY.md) 私密通报。

---

## 📄 开源许可与商业授权 (License & Commercial)

* **开源自托管许可**：本项目遵循 **[OmniMux Sustainable Source License (Version 1.0)](LICENSE)**（Source-Available 模式）。个人使用、科研学术及企业内部自建业务完全免费。
* **商业授权**：若您需要将 OmniMux 包装成商业产品转售（OEM 贴牌）、搭建收费 SaaS 云服务或采购 Enterprise 企业版，请联系 `commercial@omnimux.ai` 或查阅 **[COMMERCIAL.md](COMMERCIAL.md)**。

---

<p align="center">
  <sub>Copyright © 2026 OmniMux Project. All rights reserved.</sub>
</p>
