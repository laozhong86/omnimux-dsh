---
title: "plugin-qa — OmniMux 产品插件浏览器验收契约"
id: "contract-plugin-qa"
type: "contract"
status: "living"
authority: "L1"
date: "2026-08-28"
authors: ["x", "agent-architect"]
subsystem: "omnimux"
---

# plugin-qa — OmniMux 产品插件浏览器验收契约

> 本合同定义 UI/Host/Stage 变更的可重复验收证据。静态检查和单测不能替代真实浏览器验收。
> **浏览器自检唯一工具是 `ego-browser`（ego-lite）；不得用 Playwright、Puppeteer、内置浏览器工具或主观截图代替。**
> 配套：`dev-pipeline.md`、`ops-entry.md`、`stage-guards.md`、本地 `scripts/ego-browser-qa.sh`。

## 一、环境（必须 L2）

| 项 | 要求 |
|---|---|
| L2 入口 | `cd /Users/x/Desktop/Project/omnimux-desktop-fork && yarn omnimux:dev start <task> <plugin>` |
| 端口 | L2 池 **44200–44299**；不得占用 43120–43151、44120–44151 |
| 数据 | `DSH_HOME=~/.dsh-dev/tasks/<task>`；任务之间隔离 |
| 插件形态 | 在研 link ≤ 1；验收改过的 client 必须 link 源码 |
| 浏览器 | 使用 `ego-browser nodejs <<'EOF' ... EOF`，创建或复用对应 task space |
| 禁区 | 不得把 canvas-harness、生产 App 口、共享脏库当主验收；Agent 不得重启公共桌面 App |

## 二、ego-browser 强制证据协议

每次涉及 UI/Host/Stage 的验收，必须形成一个可追溯 evidence bundle，至少包含：

1. **task space id**：由 `useOrCreateTaskSpace(<稳定任务名>)` 返回，并在报告中记录；同一任务的复测必须复用该 task space；
2. **实际 L2 URL**：从 `openOrReuseTab()` / `pageInfo()` 取得，不得手写或只写端口；
3. **页面语义证据**：`snapshotText()` 输出，或明确的 `js()` DOM 断言结果；
4. **视觉证据**：`captureScreenshot()` 返回的真实截图路径；
5. **时间与版本**：commit SHA、task/plugin、`DSH_HOME`、浏览器页面标题/URL；
6. **清理记录**：L2 task 的 stop/rm 结果；若为用户后续手工操作而保留 task space，必须说明理由。

推荐入口：

```sh
scripts/ego-browser-qa.sh <url> [evidence_dir]
```

脚本必须通过 heredoc 调用 `ego-browser nodejs`，并以非零退出码表示连接失败、页面打不开、空快照或截图失败。**任何证据缺失都是 FAIL，不得标记 skip/pass。**

## 三、分层验收门禁

| 层 | 检查 | 通过条件 | 失败动作 |
|---|---|---|---|
| L0 | diff-aware 静态 | 变更文件无语法/生命周期/安全/Token/Stage 阻断项 | 阻断 |
| L1 | 真实单测 | 相关包真实执行；失败、命令缺失、代码变更但 0 tests、未声明 skip 均阻断 | 阻断并回退工程师 |
| L2 | 集成/环境 | registry、边界、doctor、声明的 smoke/HTTP 检查真实通过 | 阻断；记录环境限制 |
| L3 | 浏览器 | **ego-browser** task space + L2 URL + snapshot/DOM + screenshot 全齐；主路径、异常、交互、刷新/保活按 DoD 执行 | 阻断；不得以其他工具替代 |
| L4 | 风险兜底 | R0/R1、跨插件、生产/契约改动由老板人工审查合入 | 转 `ready-for-boss` |

## 四、五维检查清单

### 功能

- [ ] 入口可达、打开/关闭正确；
- [ ] 空态、主路径、增改删/提交、搜索/引用（按功能适用）均符合 Issue DoD；
- [ ] UI 与 Host 返回值/错误码双核对；
- [ ] 刷新后状态、重试和失败恢复符合规格。

### 异常与安全

- [ ] 非法输入、400/403/404/409（适用时）有真实响应与文案证据；
- [ ] 不泄露 token、PAT、私钥或内部路径；
- [ ] RPC/HTTP schema 与权限边界正确。

### 交互与可访问性

- [ ] 弹窗可用 ×、遮罩、Esc 关闭；
- [ ] loading、禁用、错误和空态可见；
- [ ] 键盘焦点、语义 role/label、关键控件可操作。

### 视觉与设计系统

- [ ] computed style 使用 `--dsw-alias-*` / `--dsw-specific-*`；
- [ ] 32px 控件高、8px 基础圆角、单行工具栏、SVG 图标规则满足；
- [ ] 深浅色由 Host CSS token 级联，不能用 JS/filter 绕过；
- [ ] 裸 hex/rgba、`--omx-*` 和主题全局覆写为 FAIL。

### 稳定与保活

- [ ] Stage 离开/返回不丢输入、滚动和草稿状态；
- [ ] 轮询/事件/定时器可停止，异步失败不导致白屏；
- [ ] 生产 profile 不 link，任务数据无串扰。

## 五、报告模板

```markdown
# 插件质量与浏览器验收报告

- 结论：PASS / FAIL / BLOCKED
- Issue / PR / commit：#<id> / #<pr> / <sha>
- task space id：<ego task id>
- task / plugin：<task> / <plugin>
- L2 URL：<actual url from pageInfo>
- DSH_HOME：<isolated path>
- ego-browser evidence：<directory>

## 用例
| 编号 | Given/When/Then | 结果 | snapshot/DOM 证据 | screenshot |
|---|---|---|---|---|

## L0–L2 结果
| 层 | 命令 | exit code | 实际计数/摘要 | 证据 |
|---|---|---:|---|---|

## 缺陷
- 🔴 Blocker / 🟡 Major / 🟠 Minor / 🔵 Suggestion

## 环境限制与清理
- 无 / 明确说明原因
- `yarn omnimux:dev stop|rm <task>` 结果
```

## 六、放行规则

- 证据 bundle 缺任何一项：FAIL；
- `ego-browser` 命令不可用、task space 无法取得、URL 无法打开、快照为空或截图失败：BLOCKED/FAIL，不能自动合入；
- L0–L3 全绿且 Issue 风险允许自动时，才进入 `status:auto-merge-pending`；
- `qa:pass` 只能由 CI 聚合结果写入，不能由本地 Agent 自行声明；
- R0/R1 或生产/契约/跨插件变更始终进入 `status:ready-for-boss`。
