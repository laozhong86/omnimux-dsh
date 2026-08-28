---
title: "dev-pipeline — 开发 / 预发布 / 生产三层环境契约"
id: "contract-dev-pipeline"
type: "contract"
status: "living"
authority: "L1"
date: "2026-08-21"
authors: ["x", "agent-architect"]
subsystem: "omnimux-assets"
---

# dev-pipeline — 开发 / 预发布 / 生产三层环境契约

> 解决问题：link 模式下"修改中的代码"污染"正在使用的 App"；多插件并行开发共用单环境必然冲突。
> 研究依据：DSH 官方 development/testing 工程实践（验证走分层测试，不喂运行实例；profile 是组合隔离单元；worktree 原生支持并行）。

## L2 → L3 速查（Agent / 人类主入口）

**主入口仓库**：`~/Desktop/Project/omnimux-desktop-fork`（本 fork）。日常开发 / 测试 / 同步 / 发布都从这里发命令；真源脚本在 sibling `dsh-plugin/product/omnimux-dsh/scripts/`。

| 场景 | 命令 | 说明 |
|------|------|------|
| 浏览器验收（L2 / Agent 唯一测试入口） | `yarn omnimux:dev start <任务名> <插件>` | 独立端口(442xx) + 独立 `DSH_HOME` + link 在研插件 + Host + **统一 watch**；改 client 源码 → 重建 → 官方 HMR 自动推浏览器 |
| 原地重启 L2 Host | `yarn omnimux:dev restart-host <任务名>` | 修改后端 Tool / Service 时同端口冷重启 Host（保端口与数据，Agent 可用） |
| 换在研插件的 watch | `yarn omnimux:dev watch <任务名> <插件>` | Host 不停，只换 watch 目标 |
| 自动化收尾推进开发版（Dev / 零重启物化） | `yarn omnimux:sync [插件...]` | **默认通道**：build + 物化进 `~/.omnimux-dev/profiles/omnimux`（供 `/Applications/OmniMux Dev.app` 消费） |
| 生产正式版发布（Prod / 仅限人类显式指令） | `yarn omnimux:sync --prod [插件...]` | **受限通道**：build + 物化进 `~/.dsh/profiles/omnimux`（供 `/Applications/OmniMux.app` 消费；**严禁 Agent 未经人类显式指令私自推送**） |
| 人工让 App 加载新 Host 插件 | `yarn omnimux:restart [dev\|prod]` | `pkill` + `open -a`（**仅限人类**；前端改动无需重启，直接 Cmd+R 刷新） |
| 环境自检 | `yarn omnimux:doctor` | 生产禁止 link、依赖声明 file: 等 |
| 发布重打包前 | `yarn omnimux:stage` → `yarn package:dir` / `dist:*` | 物化进 `preset/plugins/`，随安装包分发 |

**铁律提醒**：
1. **Agent 无法调试 Native 桌面窗口，所有端到端与 UI 测试必须在 L2 独立 Web 实例完成**。
2. **严禁 Agent 强杀或重启任何桌面 App**（避免多 Agent / 人机并发撞车）。
3. 日常迭代走 `omnimux:sync` 静态物化；前端 Client 改动直接在客户端/浏览器按 `Cmd+R` 刷新即可生效，无需重启进程。

## 三层模型

| 层 | 目的 | 载体 | profile | 插件形态 | 数据根 |
|----|------|------|---------|---------|--------|
| L1 本地开发 | 写代码 + 快速验证 | `node --test`（不开 App） | 不需要 | 源码直读 | 测试临时目录 |
| L2 预发布测试 | 真实运行集成验证 | 纯 Host + 浏览器 | `omnimux-dev-<task>`（可多实例并行） | **link 源码树** | `~/.dsh-dev/tasks/<task>`（任务隔离；逃生 `OMNIMUX_DEV_LEGACY_HOME=1`） |
| L3 生产 | 日常使用 | `/Applications/OmniMux.app`（由 `laozhong86/omnimux-desktop-fork` `dist:mac` / `dist:win` 产出） | `omnimux` | **物化副本**（打包时 stage-preset 物化进 preset/plugins/，首启 seed 写入 profile） | `~/.dsh`（真实数据） |

三层零共享：L1 不启动实例；L2/L3 用不同 `$DSH_HOME`（配置、插件、数据全隔离）；L3 插件更新只走工具通道。

## 铁律（违反即事故）

1. **生产 profile（omnimux）MUST NOT link 工作区**；其插件一律物化副本。
2. **dev/staging profile MUST link 源码树**；MUST NOT 出现在生产 App 的 profile 里。
3. **一个 dev profile 里 link 的在研插件 ≤ 1 个**，其余一律物化稳定副本——这是多插件并行开发防干扰的核心规则。
4. **同步生产副本只走 `yarn omnimux:sync` / `scripts/sync-to-app.sh`（内部再调 `sync-stable.sh`）**；MUST NOT 手动 rsync/cp 进 profile（多源目录铺平事故已发生一次）。`sync` 会先 build 再物化，避免同步到陈旧 `lib/client.js`。
5. **dev 环境用完即弃**：`yarn omnimux:dev rm <name>`；MUST NOT 把 dev profile 当长期环境养。
6. **L1 验证优先**：能写进 `node --test` 的验证 MUST NOT 依赖开 App 人工点（官方 testing.zh.md 原则）。
7. **`omnimux:sync` 纯静态物化，绝不重启任何进程**；前端 Client 改动通过客户端/浏览器页面刷新（Cmd+R）直接生效，Host 侧改动在应用下次自然启动或人类主动重启后生效。Agent 严禁执行任何 `restart`。

## 日常流程

### 开发一个插件功能（如 omnimux-assets）

```sh
# 推荐：始终在 fork 仓库发命令
cd ~/Desktop/Project/omnimux-desktop-fork

# L1：改代码 + 单测（产品树插件目录内）
cd ~/Desktop/Project/dsh-plugin/product/omnimux-dsh/plugins/omnimux-assets
node --test src/*.test.js

# L2：起隔离环境验证（含 UI + 统一 watch / HMR）
cd ~/Desktop/Project/omnimux-desktop-fork
yarn omnimux:dev start assets-v2 omnimux-assets
# → 浏览器打开打印的 URL；改 src/client 后 watch 自动重建，Host HMR 自动推浏览器
# → Host 侧（非 client）改动仍需：yarn omnimux:dev stop/start

# 收工
yarn omnimux:dev rm assets-v2
```

### 发布到生产（日常使用的 App）

#### 日常迭代（不重打包）——默认通道

```sh
cd ~/Desktop/Project/omnimux-desktop-fork
yarn omnimux:sync omnimux-assets    # build + 物化（不自动重启）
yarn omnimux:restart                # 手动重启后生效
```

底层仍是 `scripts/sync-to-app.sh` → `scripts/sync-stable.sh`。禁止手动 rsync/cp 进 profile。

#### 重打安装包（DSH Desktop 升级 / 发版）

```sh
# 1. 同步上游官方 dsh desktop 壳（保持薄改点最稳定）
cd ~/Desktop/Project/omnimux-desktop-fork
git fetch origin && git merge origin/master    # 周级 merge
corepack yarn install

# 2. 物化产品树插件到 preset/plugins/
yarn omnimux:stage
# 等价：OMNIMUX_PLUGINS_DIR=... corepack yarn workspace dsh-plugin-desktop stage:preset

# 3. 出包（mac 本机 / Windows 走 GH Actions release workflow）
corepack yarn package:dir   # 本地冒烟 → dist/mac/OmniMux.app
corepack yarn dist:mac      # mac DMG（公证+签名）
corepack yarn dist:win      # mac 交叉产 win nsis（需 wine）

# 4. 替换安装
cp -R dsh-plugin-desktop/dist/mac/OmniMux.app /Applications/
```

#### 旧壳退役说明

L3 旧壳是 `~/Desktop/Project/omnimux-desktop`（独立 Electron 壳，spawn Host 子进程），自 2026-08-21 起退役——fork dsh desktop 接管 L3 出包。`/Applications/OmniMux.app` 由 fork 替换，userData 目录 `~/Library/Application Support/OmniMux` 直接接管（旧壳无独立目录约定，Electron userData 按 productName 走）。`omnimux-desktop` 仓库归档为只读参考。

重打包正式通道（preset 播种）由 fork 的 `stage-preset-profile.ts` 实现；日常迭代请用 `yarn omnimux:sync`，不要走 stage/dist。

## 并行开发矩阵（多插件同时在研）

```
omnimux-dev-assets    → link: omnimux-assets   | port ∈ 44200-44299 | DSH_HOME=~/.dsh-dev/tasks/assets
omnimux-dev-products  → link: omnimux-products | 另一 L2 口         | DSH_HOME=~/.dsh-dev/tasks/products
生产 omnimux          → 全部物化副本（日常用，绝不被开发污染）| App 口 44120-44151
```

- L2 端口池 **44200–44299**（`dev-env.sh` 写 patch + `port.txt`）；保留窗 43120–43151 / 44120–44151。
- 浏览器验收契约：`docs/contracts/plugin-qa.md`。
- 源码侧可配 git worktree；主工作区 + 多任务 profile 已够用。

## 数据与排障

- dev 环境需要真实数据时，从生产**只读拷贝**到该任务 `~/.dsh-dev/tasks/<task>/omnimux/`（或公共种子 `~/.dsh-dev/.credentials.yaml`）；MUST NOT 反向写生产。
- dev Host 日志：profile 目录 `host.log`；`ls` 打印 port/home；停止失败查 `lsof -nP -iTCP -sTCP:LISTEN`。
- dev 环境 Host 由 `$DSH_SRC/apps/cli/lib/bin.js` 启动；DSH_SRC 变更需重建克隆 lib。

## 上游同步合同（fork 桌面壳）

fork 桌面壳（`laozhong86/omnimux-desktop-fork`）与 DSH 官方上游的同步遵循 fork 仓库内 `docs/contracts/upstream-sync.md` 合同：四级合并决策（自动合/模板解/停等确认/直接拒绝）+ 强制决策日志（`upstream-sync-log.md`）+ 周级纪律。任何 agent 执行上游 merge 前必读该合同；无日志的 merge 不算完成。
