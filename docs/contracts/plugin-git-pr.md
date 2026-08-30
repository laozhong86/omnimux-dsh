---
title: "plugin-git-pr — OmniMux 插件仓 Git / PR 合同"
id: "contract-plugin-git-pr"
type: "contract"
status: "living"
authority: "L1"
date: "2026-08-24"
authors: ["x", "agent-architect"]
subsystem: "global"
---

# plugin-git-pr — OmniMux 插件仓 Git / PR 合同

> 目的：给 `laozhong86/omnimux-dsh` 规定提交、分支、PR、质量门禁、合入与收尾纪律。
> 本合同与 `agent-issue-lifecycle.md`、`plugin-qa.md`、`dev-pipeline.md` 一起构成 Agent 交付流程的 L1 真源。
> **支持双轨交付：日常单插件迭代推荐「本地沙箱 + 极速门禁 (Fast Track)」一键闭环；高风险与跨团队变更走「远程 PR + CI」通道。**

## 仓库真源

| 项 | 值 |
|---|---|
| 本地路径 | `/Users/x/Desktop/Project/dsh-plugin/product/omnimux-dsh` |
| GitHub | 组织开源公开仓（`https://github.com/<org>/omnimux-dsh`） |
| remote | `origin` |
| 默认分支 / PR base | `main`（已配置 GitHub Merge Queue 保护队列） |
| 外层 `dsh-plugin/` | **不是** Git 仓；不要在外层初始化仓库 |
| `plugins/*` | **禁止**各自再嵌套 `.git` |

## 硬规则

1. **No Issue, No Code（必须先立项建单）**。所有需求、重构、Bug 修复必须在 GitHub 创建 Issue，完成定界并写明可验证的验收标准后，方可切支编码。
2. **禁止直接推 `main`**。日常改动走特性分支 + PR；Agent 不得把工作树直接切到 `main` 修改。
3. **产品 PR 只打本仓**：`gh -R <origin-repo> …`，base=`main`。禁止对上游 harness / desktop 开插件特性 PR。
4. **强制 Worktree 物理隔离**。每个实施任务使用 `./scripts/git-wt.sh start <plugin> <topic> <issue-id>` 创建独立工作区；主仓必须保持在干净的 `main`。
5. **Merge Queue 无损合并保护**：所有进入主干的变更必须走合并队列（`gh pr merge --squash --auto --delete-branch` 或网页 Enqueue）。GitHub 自动拉取最新 `main` 临时构建并在 CI 验证全绿后自动合入，根绝多 Worktree 并发导致的改动覆盖与无限排队问题。
6. **按风险定级决定合入通道**：
   - `R0/R1`、跨插件、生产 profile、一级页、公开契约、manifest/工具入口、模型/凭据边界、回滚或上游同步变更：**只能老板人工合入**。
   - `R2/R3`：只有 Issue 上存在老板/维护者的显式预授权，且所有质量门禁与 CI required checks 均通过，才可由 `pnpm auto:run <issue-id>` 代行自动加入合并队列。
   - 预授权不能授予 Agent 任意 `git merge`、直推 `main` 或绕过 required checks 的权限。
7. **显式预授权必须可机检**：Issue 同时具备 `status:ready-to-run`、`risk:R2` 或 `risk:R3`、frontmatter `pre-authorized: true`，以及维护者白名单作者的 `/auto-approve risk:R2` 或 `/auto-approve risk:R3` 评论。老板可以在合入前用移除标签或 `/revoke` 撤销。
8. **默认一插件一 PR**。跨插件改动必须在 Issue 与 PR 中说明理由；R0/R1 跨包改动自动进入人工通道。PR 必须显式声明 `Closes #<issue-id>`。
9. **质量证据先于状态标签**。`qa:pass` 只能由 CI 聚合门禁在真实检查全绿后写入；本地 Agent、`auto-pipeline` 或 PR 作者不得自打 `qa:pass`。
10. **未验收不得标完成**。本地测绿 / sync 成功 ≠ UI 验收；涉及浏览器的变更必须使用 `ego-browser`，缺 task space、URL、`snapshotText()`/DOM 断言或 `captureScreenshot()` 工件即 FAIL。
11. **禁止提交密钥**。credentials / token / `.env` / 私钥不进仓。所有敏感配置只能由环境或受控 Host 注入。
12. **跟 PR 细节交棒** `omnimux-pr-handoff`；跟踪写入本仓 `.workbuddy/pr-board.md`。该 board 不作为质量门禁的唯一信任源。
13. **插件进 App** 仍走桌面壳 `yarn omnimux:*`（见 `ops-entry.md`）。本合同不允许 Agent 重启公共桌面 App。

## 合入决策矩阵

| 风险 | 典型变更 | 自动合入 | 证据要求 | 最终通道 |
|---|---|---:|---|---|
| R0 | P0、生产发布/回滚、凭据或权限边界、破坏性恢复 | 否 | 完整 L0–L3 | 老板人工 |
| R1 | 跨插件、一级 `shell.overlay`、公开 I/O、manifest/工具入口、模型列表、合同/CI/门禁 | 否 | 完整 L0–L3；必要时老板审查 | 老板人工 |
| R2 | 单插件常规功能、兼容性修复、非破坏性 Host/Client 改动 | 是（需预授权） | L0–L3 全绿、非 skip 测试、CI required checks、UI 用 ego-browser | 受控自动 |
| R3 | 纯文档、测试补齐、格式化、低风险脚本/标签描述 | 是（需预授权；可由策略默认开启） | L0–L2 全绿；若触及 UI 仍需 ego-browser | 受控自动 |

**风险高于标签**：任何变更只要命中 R0/R1 特征，流水线必须拒绝自动合入并转 `status:ready-for-boss`。不能通过把 Issue 改标成 R2/R3 绕过定级。

## 受控自动合入的完整前置条件

`auto-pipeline` 只有在以下条件全部成立时，才可发出 merge 请求：

1. Issue 元数据完整，风险为 R2/R3，且预授权尚未撤销；
2. 实施命令在受信任的 Agent 侧显式传入（不得从 Issue 正文执行任意命令）；
3. Worktree 与分支绑定 Issue，主仓未被修改；
4. L0 diff-aware 静态扫描通过；
5. L1 相关包真实执行测试，失败、0 tests、未声明的 skip 均阻断；
6. L2 集成/注册表/边界/doctor 检查通过；
7. 触及 UI/Host/Stage 时，L3 使用 `ego-browser` 取得 task space、真实 L2 URL、快照/DOM 断言与截图工件；ego-browser 不可用或证据缺失即阻断；
8. PR 已创建，CI 聚合 required check 通过，且合入确认接口返回 `state=MERGED`、`mergedAt` 与 merge commit；
9. 只有确认合入后，才允许 pull、物化、清理 Worktree 与更新终态。

## 分支与 Worktree 约定

| 项 | 约定 |
|---|---|
| 分支名 | `agent/<plugin>-<topic>-issue-<ID>` |
| 跨插件（已批准） | `agent/cross-<topic>-issue-<ID>` |
| 推送远端 | `origin` |
| PR base | `main` |
| Worktree 目录 | `../omnimux-dsh-wt-<topic>-<ID>` |
| 生命周期工具 | `./scripts/git-wt.sh`（`start`、`finish`、`clean`、`list`、`doctor`）。`finish` 只推特性分支并开 PR，禁止本地合 `main` / 直推 `main` |
| 回收 | 仅在合入确认且物化成功后删远程支与对应 Worktree；失败时保留现场 |

## 本机 board（不进 git）

真源：`.workbuddy/pr-board.md`（已 gitignore `.workbuddy/`）。每个 open PR 至少含 PR 号、Issue、分支、插件、风险、状态、CI、Review、下次动作、ego-browser 证据位置、会话、是否允许 force-with-lease。

状态建议：`draft` / `pipeline-running` / `ci-red` / `changes-requested` / `ready-for-boss` / `auto-merge-pending` / `merged` / `blocked` / `abandoned`。

## Agent 双轨交付 SOP

### 轨道 1：本地沙箱 + 极速门禁 (Fast Track — 日常迭代推荐)

适用于日常单插件功能开发、UI 迭代与 Bug 热修。`wt:finish` **只推特性分支并开 PR**，禁止本地 `git merge` / `git push origin main`。物化与销毁沙箱必须等 GitHub `state=MERGED`。

```sh
cd /Users/x/Desktop/Project/dsh-plugin/product/omnimux-dsh

# 1. 切出专属沙箱 Worktree
pnpm wt:start <plugin> <topic> [issue-id]
cd ../omnimux-dsh-wt-<topic>-[issue-id]

# 2. 在沙箱内开发、构建与提交
git add <changed-files>
git commit -m "feat(<plugin>): ... (#<issue-id>)"

# 3. 本地门禁 → 推送特性分支 → 创建 PR（主仓 main 保持干净）
pnpm wt:finish <topic> [issue-id]
# 看板若不是 MERGED：不得宣称完成，不得 pnpm sync，不得销毁 Worktree

# 4. PR MERGED 且存在 mergeCommit 后，主仓 pull + 物化 + 回收沙箱
git -C /Users/x/Desktop/Project/dsh-plugin/product/omnimux-dsh pull origin main
pnpm sync
pnpm wt:clean <topic> [issue-id] --pr <pr-number>
```

### 轨道 2：远程 PR + 云端 CI + 预授权通道 (Full PR Track — 高风险/跨团队)

适用于 R0/R1 架构大重构、跨插件契约变更或开源协作：

```sh
cd /Users/x/Desktop/Project/dsh-plugin/product/omnimux-dsh
pnpm wt:start <plugin> <topic> <issue-id>
cd ../omnimux-dsh-wt-<topic>-<issue-id>
# 在沙箱内完成代码与单测
pnpm --filter <plugin-pkg> test
git add <changed-files>
git commit -m "feat(<plugin>): ... (#<issue-id>)"
git push -u origin HEAD
gh -R laozhong86/omnimux-dsh pr create --base main --body-file <generated-body.md>
# UI 验收：涉及 UI/Stage 必须使用 ego-browser 收集截图与 DOM 工件
```

## 本地验证

按影响面选已存在的命令；未执行的命令不得声称通过。

| 改动面 | 命令 | 通过标准 |
|---|---|---|
| 插件 `dsh.manifest.json` / 工具名 / 入口 | `node scripts/registry-tool.mjs verify` | 声明的工具与入口在代码里存在 |
| 生产 profile 是否误 link | `node scripts/omnimux.mjs doctor` | 生产 profile 无工作区 symlink |
| 某插件 `src/` | `pnpm --filter <pkg> test` | 真实执行、无失败、非 skip；有代码 diff 且 0 tests = FAIL |
| 合同/脚本/标签 | `pnpm test:gates` + 对应脚本测试 | 退出码 0，测试计数真实 |
| UI / Host / 一级页 | `node scripts/omnimux.mjs dev start <task> <plugin>`，随后 `scripts/ego-browser-qa.sh <url>` | task space + URL + `snapshotText()`/DOM + 截图工件齐全 |
| L2 通过后物化 | `node scripts/omnimux.mjs sync <plugin>` | 仅在合入确认后执行；静态复制不等于验收 |

`skip ≠ pass`：`smoke` / `verify:image-live` / `verify:models` 因缺 `dsh` 或 key 而 skip 时，必须记录环境限制；若该检查被 Issue DoD 声明为必需，流水线阻断。
根目录 `pnpm test` 目前 filter：`omnimux`、`omnimux-accounts`、`omnimux-inspiration`、`omnimux-market`、`omnimux-publish`。改 `assets` / `products` / `workflow` / `clip` / `analytics` / `omnimux-video` 必须跑 **该包** test，不能用根 `pnpm test` 代替。

**本仓 CI 约定**：允许在 `omnimux-dsh/.github/workflows/` 放置本仓 required checks；禁止在外层 `dsh-plugin/` 添加独立 Git 仓、Husky、commitlint 或工作流。

## force-with-lease 闸门

- 默认禁止 `git push --force` / `--force-with-lease`。
- 仅当 board 该行 `force-with-lease=yes` 且老板当轮同意才可用。
- 多人同支或不确定是否有人已拉支 → 停手。

## 明确不做

- 直推 `main`；
- Agent 擅自 merge；
- 用 `git merge` 绕过 PR、required checks 或风险通道；
- 用标签伪造 `qa:pass`；
- 把缺失的 ego-browser 证据写成「人工看过」；
- 用桌面壳的 `fork` remote / base=`omnimux` 套到本仓；
- 在外层 `dsh-plugin/` `git init`、装 Husky、加 GitHub Actions；
- 把 `--force-with-lease` 写成默认动作；
- 用 `feat/` / `fix/` / `refactor/` 当分支前缀。
