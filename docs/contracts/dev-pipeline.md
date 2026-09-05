---
title: "dev-pipeline — 开发 / 预发布 / 生产三层环境契约"
id: "contract-dev-pipeline"
type: "contract"
status: "living"
authority: "L1"
date: "2026-08-21"
updated: "2026-08-30"
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
| 验收完推进生产 App（L3 / 零重启物化） | `yarn omnimux:sync <插件>` | **先 build 再物化**进 `~/.dsh/profiles/omnimux`；**零副作用，绝不重启任何进程** |
| 人工让 App 加载新 Host 插件 | `yarn omnimux:restart` | `pkill` + `open -a OmniMux`（**仅限人类**；前端改动无需重启，直接 Cmd+R 刷新） |
| 环境自检 | `yarn omnimux:doctor` | 生产禁止 link、依赖声明 file: 等 |
| 发布重打包前 | `yarn omnimux:stage` → `yarn package:dir` / `dist:*` | 物化进 `preset/plugins/`，随安装包分发 |

**铁律提醒**：
1. **Agent 无法调试 Native 桌面窗口，所有端到端与 UI 测试必须在 L2 独立 Web 实例完成**。
2. **严禁 Agent 强杀或重启任何桌面 App**（避免多 Agent / 人机并发撞车）。
3. 日常迭代走 `omnimux:sync` 静态物化；前端 Client 改动直接在客户端/浏览器按 `Cmd+R` 刷新即可生效，无需重启进程。

## 三层与多 Profile 物理隔离模型

| 环境类型 | 目的 | 载体与端口 | Profile 目录 | 权限与物化规则 |
|---|---|---|---|---|
| **L1 本地单测** | 代码级快速测试 | `node --test` / `vitest` | 无 / 临时目录 | 源码直读，零副作用 |
| **L2 任务沙箱** | 隔离并发调试 | 独立端口 (44201~44299) | `~/.dsh-dev/tasks/<task>` | 任务隔离，用完即弃 |
| **L3-Dev 开发版** | 日常 Agent 物化与真机验收 | `OmniMux Dev.app` (端口 `45120`) | `~/.omnimux-dev` | **日常开发唯一目标**：`./scripts/sync-to-app.sh` 默认写入，Cmd+R / 重启即见最新改动 |
| **L3-Prod 正式版** | 用户日常高可用生产 | `OmniMux.app` (正式端口) | `~/.omnimux` | **严格物理锁定**：日常严禁写入，仅在人类明确下达发布指令时通过 `./scripts/sync-to-app.sh --prod` 单向发布 |
| **L3-Base 底座版** | 官方原生底座 | `DSH Desktop.app` | `~/.dsh` | 官方原生干净目录，禁止业务污染 |

### 物理隔离核心原则（铁律）
1. **日常开发与生产环境绝对物理隔离**：`./scripts/sync-to-app.sh` 默认且仅物化到 `~/.omnimux-dev`。严禁 Agent 在日常研发中未经授权添加 `--prod` 或 `--all` 污染正式版 `~/.omnimux`。
2. **真机定点验收（Electron 窗口红线，CDP 直连）**：涉及 Web/Stage 界面改动的交付验收，**必须能断言 Dev App 的真实 Electron renderer**，而非 host 端口的网页。
   - **Web 侧 ≠ Electron 窗口**：`http://127.0.0.1:45120` 是 Dev App 的 **host 端口**，用 Ego-Browser / curl / opencli 访问它只能触达 **web 侧页面**，**不是 Electron 渲染窗口**。两者的渲染进程与 DOM 不同（尤其受 `data-dsh-desktop-platform="darwin"` 门控的壳层样式，web 侧不会触发）。**严禁以 web 侧 45120 的渲染结果作为 Dev App UI 验收依据。**
   - **CDP 直连（推荐）**：Dev App（Dev 构建）通过 desktop-fork #33 暴露 `--remote-debugging-port=9229`（可用 `OMNIMUX_DEV_CDP_PORT` 覆盖）。Agent 走 `pnpm verify:cdp`（`scripts/verify-dev-cdp.mjs`）连 `http://127.0.0.1:9229/json` 进入真实 Electron renderer，驱动窗口并断言 computed 样式，自动落盘 `docs/evidence/live-cdp-qa-report.json`。
   - **红线**：涉及壳层样式 / `data-dsh-desktop-*` / macOS 门控的改动，web 侧不触发，必须用 CDP 连 Electron 窗口验收才能作为完成依据；**严禁使用 4817 等独立私有 harness 沙箱作为交付完成依据**。
3. **零重启与安全刷新**：前端 Client 代码更新在 45120 Dev App 界面按 `Cmd+R` 刷新即生效；Agent 严禁强杀或重启任何桌面 App。

## 铁律（违反即事故）

1. **生产 profile（omnimux）MUST NOT link 工作区**；其插件一律物化副本。
2. **dev/staging profile MUST link 源码树**；MUST NOT 出现在生产 App 的 profile 里。
3. **一个 dev profile 里 link 的在研插件 ≤ 1 个**，其余一律物化稳定副本——这是多插件并行开发防干扰的核心规则。
4. **同步 profile 副本只走 `yarn omnimux:sync` / `scripts/sync-to-app.sh`（内部再调 `sync-stable.sh`）**；默认同步至开发版 `~/.omnimux-dev`，可用 `--prod` / `--dsh` / `--all` 参数指定其他目标；MUST NOT 手动 rsync/cp 进 profile（多源目录铺平事故已发生一次）。`sync` 会先 build 再物化，避免同步到陈旧 `lib/client.js`。
4a. **`omnimux-workflow` 源码唯一真相**：Git 只跟踪 `src/`。`dist/index.js`（Host）、`lib/client.js`、`lib/canvas.js` 由 `prepare` 或 `sync-to-app` 现场生成，**禁止提交、禁止为对齐仓内旧包另开 PR**。新 clone 未 install/build 时没有这些文件是目标态。其它插件的 `lib/client.js` 本阶段仍跟踪。禁止 `--ignore-scripts` 安装本插件（会跳过 prepare，Host 入口缺失）。画布 island 必须带 `canvas.js?v=<canvasHash>`；Dev App 验收若仍见旧 UI，先硬刷新，不得据此判断源码未合入。
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
omnimux-dev-assets    → link: omnimux-assets   | port ∈ 44201-44299 | DSH_HOME=~/.dsh-dev/tasks/assets
omnimux-dev-products  → link: omnimux-products | 另一 L2 口         | DSH_HOME=~/.dsh-dev/tasks/products
Dev omnimux          → 全部物化副本（日常验收）| App 口 45120
Prod omnimux         → 全部物化副本（仅授权发布）| App 口 44200
```

- L2 端口池 **44201–44299**（`dev-env.sh` 写 patch + `port.txt`）；生产 **44200** 永不分配，另保留 43120–43151 / 44120–44151。
- 浏览器验收契约：`docs/contracts/plugin-qa.md`。
- 源码侧可配 git worktree；主工作区 + 多任务 profile 已够用。

### L1 铁律：合并前测试 = L2 独立任务环境（禁止污染公共 dev）

- **合并前（PR 未 MERGED）的 UI / 交互 / 真机测试，一律在 L2 独立任务环境进行**：
  `pnpm wt dev <topic> [issue_id] [plugin]`（内部走 `dev-env.sh start <topic> <plugin>`，`--source` 指向该工作树 `plugins/`），
  独立端口 44201–44299、独立 `~/.dsh-dev/tasks/<topic>/`、独立 profile，与其它工作树互不干扰。
- **公共 dev（`~/.omnimux-dev` / 端口 45120）只接受「已 MERGED 的 main」物化**；公共 dev/prod 严禁出现未合并工作树产物。
- `sync-to-app.sh` 的未合并旁路已收窄为白名单：必须显式 `OMNIMUX_ALLOW_UNMERGED_TARGET=<~/.dsh-dev/tasks/... 前缀>`，
  且所有同步目标都必须落在该前缀内；旧布尔 `OMNIMUX_ALLOW_UNMERGED_MATERIALIZE=1` 单独设置会被拒绝（已废弃）。
- `wt:finish` 强制要求工作树存在 `.l2-dev.env`（`wt dev` 写入：PORT/URL/COMMIT/SOURCE/PROFILE_DIR）作为合并前验证记录；`verify:live` 另核对实际运行身份与行为证据。
  仅 R3 / 纯文档 / 纯后端变更可用 `--skip-l2` 显式跳过。`wt:clean` 在合并后自动回收对应 L2 任务环境。
- **L2 Host 安装闭包预检**：`dev-env.sh start` 在新环境初始化前检查 **`$DSH_SRC` 安装锚点**
  （`apps/cli/package.json` → `@deepseek-ai/dsh-web-app` → `@deepseek-ai/dsh-client-ui-chat/lib`）。
  官方 `@deepseek-ai/*` 由 app-boot 的 `healProfilesModuleFallback` 投影到任务
  `$DSH_HOME/profiles/node_modules`，**不**来自 profile 私有 `node_modules`。
- **L2 插件依赖种子**：克隆自 `OMNIMUX_L2_SEED_PROFILE` 或（默认）`~/.omnimux-dev/profiles/omnimux`
  （与 Dev App / `yarn omnimux:sync` 对齐）；不再默认使用可能过期的 `~/.dsh/profiles/omnimux`
  （曾出现同版本 `dsh-better-sidebar` 仍 import 已删除的 `settingsNamespace` 导致 Host 起不来）。
  `yarn omnimux:sync` 只物化 OmniMux 插件树，不修官方 client 闭包；缺 `ui-chat` 时修 DSH_SRC 或重打安装层。

## 数据与排障

- dev 环境需要真实数据时，从生产**只读拷贝**到该任务 `~/.dsh-dev/tasks/<task>/omnimux/`（或公共种子 `~/.dsh-dev/.credentials.yaml`）；MUST NOT 反向写生产。
- dev Host 日志：profile 目录 `host.log`；`ls` 打印 port/home；停止失败查 `lsof -nP -iTCP -sTCP:LISTEN`。
- dev 环境 Host 由 `$DSH_SRC/apps/cli/lib/bin.js` 启动；DSH_SRC 变更需重建克隆 lib。

## 上游同步合同（fork 桌面壳）

fork 桌面壳（`laozhong86/omnimux-desktop-fork`）与 DSH 官方上游的同步遵循 fork 仓库内 `docs/contracts/upstream-sync.md` 合同：四级合并决策（自动合/模板解/停等确认/直接拒绝）+ 强制决策日志（`upstream-sync-log.md`）+ 周级纪律。任何 agent 执行上游 merge 前必读该合同；无日志的 merge 不算完成。
