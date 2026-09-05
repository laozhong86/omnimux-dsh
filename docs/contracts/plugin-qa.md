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

## 一、环境（合并前 L2，合并后 Dev）

| 项 | 要求 |
|---|---|
| L2 入口 | `cd /Users/x/Desktop/Project/omnimux-desktop-fork && yarn omnimux:dev start <task> <plugin>` |
| 端口 | L2 池 **44201–44299**；生产 **44200** 永不分配；不得占用 43120–43151、44120–44151 |
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

### Stage 实际验收入口

```sh
# 合并前：在当前 worktree 创建并绑定独立 L2
pnpm wt dev <topic> <issue-id> <plugin>
pnpm verify:live assets --target=l2 --url=<.l2-dev.env中的URL>

# 合并后：从桌面 fork 物化 Dev，再验收 45120
pnpm verify:live assets
pnpm verify:live all
```

Stage 参数为 `accounts`、`workflow`、`assets`、`products`、`inspiration`、`publish`、`analytics`、`market` 或 `all`。没有公开侧栏行的 canvas/clip 不列入 `all`。未知或缺失 Stage、零目标均失败。默认 Dev 固定为 `http://127.0.0.1:45120/`，不读取旧 `OMNIMUX_PORT`。L2 必须校验当前 worktree 的 `.l2-dev.env` URL、PORT、SOURCE 和 COMMIT；提交后需重新绑定 L2 验证记录。

先在该任务的 ego-browser task space 完成 Host 本地认证、首次提示和 QA 会话准备。使用 `EGO_TASK_SPACE_NAME` 复用同一 task space。探针只操作所选 QA 会话的 Tab，不发送消息、生成媒体或提交账号任务。

`verify:stages` 保留源码静态检查，并通过受控 Host/kit 座执行实际 client 装配入口。七个 kit sidebar adapter 必须通过 `getSnapshot`、`subscribe`、`open`、`close`、`set`、`readBox`，以及取消订阅、会话隔离和关闭重开检查。Market 验证其 footer slot 与注册 Tab；旧 `stage-store.js` 的存在不代表覆盖了实际 adapter。

`verify:live` 使用捕获的真实 `datasetKey` 和注册 Tab ID 点击侧栏；断言目标内容可见且非空、active Tab 与选中项唯一、重复点击幂等、多个 Tabs 共存、关闭后选中清空与再次打开恢复。viewport/context 必须归属当前 session。仅首页 HTTP 200、加载占位或页面标题非空不能通过。

每次运行产生独立 UUID，默认汇总报告为 `docs/evidence/live-qa-report.json`（本机生成文件，不提交），完整证据放在 `.workbuddy/evidence/live-qa/<run-id>/`。`--evidence-dir=<目录>` 可改变独立证据父目录。报告含代码 SHA、源码 dirty 状态、目标 profile/URL、Stage、逐项断言、截图、起止时间及 collector 清理结果。子进程失败、旧 run ID/SHA/URL、缺少断言或截图均返回非零；失败报告覆盖默认汇总，但独立证据保留。回收 worktree 前必须把证据保存到不会被回收的任务目录。


## 二点五、CDP 直连 Electron 窗口（Dev App 真机验收）

> `ego-browser` 访问 `http://127.0.0.1:45120` 触达的是 **web 侧页面**（host 端口），**不是 Dev App 的 Electron 渲染窗口**。两者渲染进程与 DOM 不同（尤其受 `data-dsh-desktop-platform="darwin"` 门控的壳层样式，web 侧不会触发）。凡涉及壳层样式 / 平台门控 / Electron 窗口布局的改动，必须用 CDP 直连验收。

- **通道**：Dev App（Dev 构建）通过 desktop-fork #33 暴露 `--remote-debugging-port=9229`（可用 `OMNIMUX_DEV_CDP_PORT` 覆盖）。
- **命令**：`pnpm verify:cdp`（`scripts/verify-dev-cdp.mjs`）连 `http://127.0.0.1:9229/json`，驱动窗口（创作→画布→选中节点）读取目标 selectors 的 computed 样式并断言，落盘 `docs/evidence/live-cdp-qa-report.json`。
- **可覆盖**：`OMNIMUX_CDP_SELECTOR`（默认 `.wf-panel-shell__card`）、`OMNIMUX_CDP_PADDING_TOP`（默认 `12px`）、`OMNIMUX_CDP_PORT`。
- **红线**：涉及壳层样式 / `data-dsh-desktop-*` / macOS 门控的改动，`ego-browser`（web 侧）不触发，必须 CDP 过 Electron 窗口才能作为完成依据；`ego-browser` 与 CDP 属于两层验收，不可互相替代。

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
