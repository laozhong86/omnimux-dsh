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

1. **禁止直接推 `main`**。日常改动走特性分支 + PR。
2. **产品 PR 只打本仓**：`gh -R laozhong86/omnimux-dsh …`，base=`main`。禁止对上游 harness / desktop 开插件特性 PR。
3. **合入权永远属于老板**。agent 不得 `gh pr merge`，除非老板当轮明文授权。
4. **默认一插件一 PR**。跨插件改动（例如 hub + accounts 同改）须在 PR 描述写明理由；大跨包先问老板。
5. **提交信息**用 conventional commits（例：`feat(market): …`、`fix(workflow): …`、`docs(contracts): …`）。
6. **未验收不得标完成**。本地测绿 / sync 成功 ≠ 合入；缺浏览器或窗口证据时，board 写「未验收」。
7. **禁止提交密钥**。credentials / token / `.env` 不进仓。
8. **跟 PR 细节交棒** `omnimux-pr-handoff`；跟踪写入本仓 `.workbuddy/pr-board.md`。**禁止**单文件 `memory/pr-tracking.md` 覆盖多 PR。
9. **插件进 App** 仍走桌面壳 `yarn omnimux:*`（见 `ops-entry.md`）。本合同不管 sync / restart。

## 分支约定

| 项 | 约定 |
|---|---|
| 分支名 | `agent/<plugin>-<topic>`（例：`agent/market-plaza-keepalive`） |
| 跨插件（已批准） | `agent/cross-<topic>` |
| 推送远端 | `origin` |
| PR base | `main` |
| 回收 | PR 合入或放弃后删远程支；更新 board |

当前阶段**不强制** git worktree。多会话并行写同一插件前，先在 board / 口头协调；冲突频发后再升级 worktree。

## 本机 board（不进 git）

真源：`.workbuddy/pr-board.md`（已 gitignore `.workbuddy/`）

每个 open PR 一行，至少含：PR 号、分支、插件、状态、CI、Review、下次动作、会话、是否允许 force-with-lease。

状态机建议：`draft` / `ci-red` / `changes-requested` / `ready-for-boss` / `merged` / `abandoned`。

## Agent 最短 SOP

```sh
cd /Users/x/Desktop/Project/dsh-plugin/product/omnimux-dsh
git fetch origin
git switch -c agent/<plugin>-<topic> origin/main
# 实现 + 本地验证（包内 test / 必要 sync 证据）
git add -p
git commit -m "feat(<plugin>): ..."
git push -u origin HEAD
gh -R laozhong86/omnimux-dsh pr create --base main --fill
# 更新 .workbuddy/pr-board.md
# 跟 CI/review：交棒 omnimux-pr-handoff
# 老板合入后：删远程支 + 更新 board
```

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
