---
title: "plugin-git-pr — OmniMux 插件仓 Git / PR 合同"
id: "contract-plugin-git-pr"
type: "contract"
status: "living"
authority: "L1"
date: "2026-08-24"
authors: ["x", "agent-architect"]
subsystem: "omnimux-drama"
---

# plugin-git-pr — OmniMux 插件仓 Git / PR 合同

> 目的：给 `laozhong86/omnimux-dsh` 补提交 / 分支 / PR / 合入纪律。
> 对照桌面壳 `omnimux-desktop-fork/docs/contracts/parallel-dev-pr.md`；本合同更轻，先强制「分支 + PR + board」，不强制 worktree。
> 拍板（2026-08-24）：base=`main`；合入永远由老板点；一插件一 PR 为默认；开 PR 之后的 CI/review 交棒 `omnimux-pr-handoff`（罩着市场版 github-pr-manager）。

## 仓库真源

| 项 | 值 |
|---|---|
| 本地路径 | `/Users/x/Desktop/Project/dsh-plugin/product/omnimux-dsh` |
| GitHub | `laozhong86/omnimux-dsh`（私有） |
| remote | `origin` |
| 默认分支 / PR base | `main` |
| 外层 `dsh-plugin/` | **不是** Git 仓；不要在外层初始化仓库 |
| `plugins/*` | **禁止**各自再嵌套 `.git` |

## 硬规则

1. **No Issue, No Code（必须先立项建单）**。所有需求、重构、Bug 修复必须在 GitHub 创建 Issue（参照 `docs/contracts/agent-issue-lifecycle.md`），获得 Issue ID 后方可开始后续工作。严禁跳过 Issue 直接切支编码。
2. **禁止直接推 `main`**。日常改动走特性分支 + PR。
3. **产品 PR 只打本仓**：`gh -R laozhong86/omnimux-dsh …`，base=`main`。禁止对上游 harness / desktop 开插件特性 PR。
4. **强制 Worktree 物理隔离**。多 Agent 并行开发时，**严禁**在主仓库目录直接切分支或修改代码。每个新特性任务必须通过 `git worktree` 建立独立目录（`../omnimux-dsh-wt-<topic>-<issue-id>`）进行开发，主目录永远停留在干净的 `main` 分支。
5. **合入权与预授权自动化通道**。默认合入权属于老板；但在全自动无人值守流水线（`pnpm auto:run <issue_id>`）中，当且仅当前置已确认实施立项、5D 自动化质检门禁 `qa:pass` 且测试全绿时，流水线被赋予预授权代行 `gh pr merge --squash --auto --delete-branch`，并在合入后自动清理 Worktree 与静态物化。
6. **默认一插件一 PR**。跨插件改动（例如 hub + accounts 同改）须在 PR 描述写明理由；大跨包先问老板。PR 必须显式声明 `Closes #<issue-id>`。
7. **提交信息**用 conventional commits（例：`feat(market): … (#<issue-id>)`、`fix(workflow): … (#<issue-id>)`）。`feat` / `fix` / `docs` 是 commit type，**不是**分支前缀。scope 用插件目录名或 `contracts` / `scripts`。禁止 `WIP`、`update`、`temp commit`、`fix bug` 这类标题。特性改动与纯格式化拆开。
8. **未验收不得标完成**。本地测绿 / sync 成功 ≠ 合入；缺浏览器或窗口证据时，board 写「未验收」。验证命令见下方「本地验证」。
9. **禁止提交密钥**。credentials / token / `.env` / 私钥不进仓。安全修复的分支名、commit、PR 标题、测试名只写代码现在做什么（例如校验请求体大小），不写攻击类别词。
10. **跟 PR 细节交棒** `omnimux-pr-handoff`；跟踪写入本仓 `.workbuddy/pr-board.md`。**禁止**单文件 `memory/pr-tracking.md` 覆盖多 PR。
11. **插件进 App** 仍走桌面壳 `yarn omnimux:*`（见 `ops-entry.md`）。本合同不管 sync / restart。

## 分支与 Worktree 约定

| 项 | 约定 |
|---|---|
| 分支名 | `agent/<plugin>-<topic>-issue-<ID>`（例：`agent/market-plaza-keepalive-issue-42`） |
| 跨插件（已批准） | `agent/cross-<topic>-issue-<ID>` |
| 推送远端 | `origin` |
| PR base | `main` |
| Worktree 目录 | `../omnimux-dsh-wt-<topic>-<ID>`（例：`../omnimux-dsh-wt-clip-42`） |
| 生命周期工具 | `./scripts/git-wt.sh`（命令：`start`、`clean`、`list`、`doctor`） |
| 回收 | PR 合入或放弃后删远程支与对应 Worktree；更新 board |

多会话并行开发时，必须使用 `./scripts/git-wt.sh start <plugin> <topic> <issue_id>` 派生出独立兄弟目录，所有编码、构建与单测均在各自的 Worktree 中完成，禁止在主目录切支或写临时代码。

## 本机 board（不进 git）

真源：`.workbuddy/pr-board.md`（已 gitignore `.workbuddy/`）

每个 open PR 一行，至少含：PR 号、分支、插件、状态、CI、Review、下次动作、会话、是否允许 force-with-lease。

状态机建议：`draft` / `ci-red` / `changes-requested` / `ready-for-boss` / `merged` / `abandoned`。

## Agent 标准 Worktree 最短 SOP

```sh
cd /Users/x/Desktop/Project/dsh-plugin/product/omnimux-dsh

# 1. 创建独立工作区（自动从 origin/main 切支，可使用 npm scripts 别名 pnpm wt:start）
pnpm wt:start <plugin> <topic> <issue-id>
# 或原生脚本: ./scripts/git-wt.sh start <plugin> <topic> <issue-id>

# 2. 进入专属 Worktree 独立实现与验证
cd ../omnimux-dsh-wt-<topic>-<issue-id>
pnpm --filter <plugin-pkg> test

# 3. 提交并推送到远端
git add plugins/<plugin-pkg>/
git commit -m "feat(<plugin>): ... (#<issue-id>)"
git push -u origin HEAD

# 4. 创建 PR
gh -R laozhong86/omnimux-dsh pr create --base main --fill
# 更新主仓 .workbuddy/pr-board.md

# 5. 老板合入后在主仓收尾销毁 Worktree
cd /Users/x/Desktop/Project/dsh-plugin/product/omnimux-dsh
git pull origin main
pnpm wt:clean <topic> <issue-id>
```

## 本地验证

按影响面选**已存在**的命令。没有的命令不要跑、不要写进 hook。没执行过的命令不得声称通过。

| 改动面 | 命令 | 通过标准 |
|---|---|---|
| 插件 `dsh.manifest.json` / 工具名 / 入口 | 在 `dsh-plugin` 根：`node scripts/registry-tool.mjs verify`，必要时 `build` | 声明的工具与入口在代码里存在 |
| 生产 profile 是否误 link | `node scripts/omnimux.mjs doctor` | 生产 profile 无工作区 symlink |
| 某插件 `src/`（`.js` `.jsx` `.mjs` `.ts` `.tsx`） | **该包** `pnpm --filter <pkg> test`（包内 `node --test`） | 非 skip 用例实际执行。有代码 diff 且 0 tests = 失败 |
| 仅已声明 `typecheck` 的 ts 包 | 该包 `pnpm --filter <pkg> typecheck` | 无该 script 的 JS 包不要假装跑 |
| UI / Host / 一级页 | `node scripts/omnimux.mjs dev start <task> <plugin>`（L2，44200–44299） | 证据 = URL + 截图或 DOM。无浏览器证据 → board「未验收」 |
| L2 通过后物化 | `node scripts/omnimux.mjs sync <plugin>` | 静态复制。**不等于验收** |

根目录 `pnpm test` 目前只 filter：`omnimux-drama`、`omnimux`、`omnimux-accounts`、`omnimux-inspiration`、`omnimux-market`。改 `assets` / `products` / `workflow` / `clip` / `analytics` / `omnimux-video` 必须跑 **该包** test，不能用根 `pnpm test` 代替。

**skip ≠ pass。** `smoke` / `verify:image-live` / `verify:models` 网关段在无 `dsh` 或无 key 时会 skip 并以 0 退出。PR 必须写明 skip。

**禁止当作本仓验证命令：** 根 `pnpm lint`、根 `pnpm typecheck`、`pnpm run lint:docs`、`vitest related`、`pnpm test:affected`、`diff-cover`、`cargo test`、`go test`、Playwright 多 OS、Knip、Trivy。不要在外层 `dsh-plugin/` 装 Husky / commitlint / `.github/workflows`。

## force-with-lease 闸门

- 默认 **禁止** `git push --force` / `--force-with-lease`。
- 仅当 board 该行 `force-with-lease=yes` **且** 老板当轮同意（DCO amend、独享分支纠错等）才可用 `--force-with-lease`。
- 多人同支或不确定是否有人已拉支 → 停手。

## 现状债（启用并行前）

启用多 PR 并行前，先处理：

1. 本地 `main` 相对 `origin/main` 的未推 commit
2. 工作区未提交脏文件（按插件分组进分支）

未清债时，禁止再叠新的并行特性分支「假装干净」。

## 与既有合同交棒

| 合同 / 技能 | 关系 |
|---|---|
| `ops-entry.md` / `dev-pipeline.md` | 管运维分层与 sync；不管 GitHub 合入 |
| 桌面壳 `parallel-dev-pr.md` | 壳层并行制度；插件仓用本合同，不混用 shell remote=`fork` |
| `omnimux-plugin-pr` | 开写 / 开 PR 前调度 |
| `omnimux-pr-handoff` | 开 PR 之后的 CI / review / 冲突跟踪；合入请示老板 |
| `omnimux-plugin-ops` | sync / doctor / restart；不代替 PR |

## 明确不做

- 直推 `main`
- agent 擅自 merge
- 用桌面壳的 `fork` remote / base=`omnimux` 套到本仓
- 市场版 github-pr-manager 单文件覆盖跟踪
- 把 sync 纪律和 Git PR 揉成一个巨无霸文档
- 在外层 `dsh-plugin/` `git init`、装 Husky、加 GitHub Actions
- 把 `--force-with-lease` 写成默认动作
- 用 `feat/` / `fix/` / `refactor/` 当分支前缀
