# 安全政策与漏洞披露 (Security Policy)

OmniMux 团队高度重视系统的安全性、用户数据隐私以及与模型服务商通信的合规性。如果您在本项目中发现了任何潜在的安全漏洞，请按照本指南与我们联系。

---

## 1. 支持的版本 (Supported Versions)

我们仅对以下版本提供安全修复支持：

| 版本系列 | 支持状态 |
| :--- | :---: |
| `main` 分支最新代码 | :white_check_mark: 支持 |
| 最新正式发布 Release 版本 (v1.x) | :white_check_mark: 支持 |
| < v1.0 历史 Beta 预览版 | :x: 不再维护，建议升级 |

---

## 2. 漏洞报告渠道 (Reporting a Vulnerability)

**请勿在公开的 GitHub Issue 或 Discussions 中披露安全漏洞！**

如果您发现了安全漏洞，请通过以下私密渠道进行报告：

- **安全邮箱**：`security@omnimux.ai`
- **GitHub 私密漏洞报告 (Private Vulnerability Reporting)**：直接在仓库的 `Security` -> `Advisories` -> `Report a vulnerability` 中提交。

### 报告中请尽量包含以下信息：
1. 受影响的插件、组件或 API 路由（例如 `plugins/omnimux` 或 `plugins/omnimux-accounts`）；
2. 漏洞类型（如越权访问、凭证泄露、XSS、未授权跨源请求）；
3. 详细的复现步骤或最小可复现 PoC（Proof of Concept）；
4. 您对潜在影响和修复方案的建议评估。

---

## 3. 安全响应流程与 SLA (Response Process)

1. **确认与建单（48 小时内）**：安全团队在收到报告后 48 小时内完成初审并回复确认。
2. **复现与修复（7 个工作日内）**：团队在私有安全分支中完成漏洞复现并产出修复补丁。
3. **协同发布与公告**：在修复补丁发布至生产版本后，我们将协助报告者发布 CVE / Security Advisory，并在 Release Note 中致谢。
