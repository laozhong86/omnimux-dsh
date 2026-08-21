# dev-pipeline — 开发 / 预发布 / 生产三层环境契约

> 解决问题：link 模式下"修改中的代码"污染"正在使用的 App"；多插件并行开发共用单环境必然冲突。
> 研究依据：DSH 官方 development/testing 工程实践（验证走分层测试，不喂运行实例；profile 是组合隔离单元；worktree 原生支持并行）。

## 三层模型

| 层 | 目的 | 载体 | profile | 插件形态 | 数据根 |
|----|------|------|---------|---------|--------|
| L1 本地开发 | 写代码 + 快速验证 | `node --test`（不开 App） | 不需要 | 源码直读 | 测试临时目录 |
| L2 预发布测试 | 真实运行集成验证 | 纯 Host + 浏览器 | `omnimux-dev-<task>`（可多实例并行） | **link 源码树** | `~/.dsh-dev`（独立） |
| L3 生产 | 日常使用 | `/Applications/OmniMux.app`（由 `laozhong86/omnimux-desktop-fork` `dist:mac` / `dist:win` 产出） | `omnimux` | **物化副本**（打包时 stage-preset 物化进 preset/plugins/，首启 seed 写入 profile） | `~/.dsh`（真实数据） |

三层零共享：L1 不启动实例；L2/L3 用不同 `$DSH_HOME`（配置、插件、数据全隔离）；L3 插件更新只走工具通道。

## 铁律（违反即事故）

1. **生产 profile（omnimux）MUST NOT link 工作区**；其插件一律物化副本。
2. **dev/staging profile MUST link 源码树**；MUST NOT 出现在生产 App 的 profile 里。
3. **一个 dev profile 里 link 的在研插件 ≤ 1 个**，其余一律物化稳定副本——这是多插件并行开发防干扰的核心规则。
4. **同步生产副本只走 `scripts/sync-stable.sh`**；MUST NOT 手动 rsync/cp 进 profile（多源目录铺平事故已发生一次）。
5. **dev 环境用完即弃**：`dev-env.sh rm <name>`；MUST NOT 把 dev profile 当长期环境养。
6. **L1 验证优先**：能写进 `node --test` 的验证 MUST NOT 依赖开 App 人工点（官方 testing.zh.md 原则）。

## 日常流程

### 开发一个插件功能（如 omnimux-assets）

```sh
# L1：改代码 + 单测（插件目录内）
cd plugins/omnimux-assets && node --test src/*.test.js

# L2：起隔离环境验证（含 UI）
./scripts/dev-env.sh start assets-v2 omnimux-assets
# → 浏览器打开打印的 URL；改代码后只需重建 lib（node scripts/build-client.mjs），Host 侧改动需 dev-env.sh stop/start

# 收工
./scripts/dev-env.sh rm assets-v2
```

### 发布到生产（日常使用的 App）

#### 重打安装包（DSH Desktop 升级）

```sh
# 1. 同步上游官方 dsh desktop 壳（保持薄改点最稳定）
cd ~/Desktop/Project/omnimux-desktop-fork
git fetch origin && git merge origin/master    # 周级 merge
corepack yarn install

# 2. 物化产品树插件到 preset/plugins/
OMNIMUX_PLUGINS_DIR=~/Desktop/Project/dsh-plugin/product/omnimux-dsh/plugins \
  corepack yarn workspace dsh-plugin-desktop stage:preset

# 3. 出包（mac 本机 / Windows 走 GH Actions release workflow）
corepack yarn workspace dsh-plugin-desktop package:dir   # 本地冒烟 → dist/mac/OmniMux.app
corepack yarn workspace dsh-plugin-desktop dist:mac       # mac DMG（公证+签名）
corepack yarn workspace dsh-plugin-desktop dist:win       # mac 交叉产 win nsis（需 wine）
# 或在 fork GitHub Actions 手动触发 release workflow（mac + win 双 runner）

# 4. 替换安装
cp -R dsh-plugin-desktop/dist/mac/OmniMux.app /Applications/
# 或在 GH Actions 上传 artifact 后下载安装
```

#### 旧壳退役说明

L3 旧壳是 `~/Desktop/Project/omnimux-desktop`（独立 Electron 壳，spawn Host 子进程），自 2026-08-21 起退役——fork dsh desktop 接管 L3 出包。`/Applications/OmniMux.app` 由 fork 替换，userData 目录 `~/Library/Application Support/OmniMux` 直接接管（旧壳无独立目录约定，Electron userData 按 productName 走）。`omnimux-desktop` 仓库归档为只读参考。

#### preset 内更新（不重打包）

```sh
./scripts/sync-stable.sh            # 全部产品树插件物化进生产 profile
# 或只同步一个：./scripts/sync-stable.sh omnimux-assets
# 然后重启 OmniMux（kill 主进程 + open -a OmniMux）
```

重打包正式通道（preset 播种）由 fork 的 stage-preset-profile.ts 实现：它从产品树源码物化全部 5 插件进 `dsh-plugin-desktop/preset/plugins/`，与本契约等价但集成在 fork 的 `package:dir` / `dist:*` 链中。

## 并行开发矩阵（多插件同时在研）

```
omnimux-dev-assets    → link: omnimux-assets   | 其余物化副本
omnimux-dev-gallery   → link: omnimux-gallery  | 其余物化副本
生产 omnimux          → 全部物化副本（日常用，绝不被开发污染）
```

源码侧可配 git worktree 分任务分支（官方实践），主工作区保持稳定。当前阶段单工作区 + 任务 profile 已够用。

## 数据与排障

- dev 环境需要真实数据时，从生产**只读拷贝**映射注册表等 JSON 到 `~/.dsh-dev/omnimux/` 对应目录；MUST NOT 反向写。
- dev Host 日志：`<env>/host.log`；停止失败查 `lsof -nP -iTCP -sTCP:LISTEN | grep <pid>`。
- dev 环境 Host 由 `$DSH_SRC/apps/cli/lib/bin.js` 启动；DSH_SRC 变更需重建克隆 lib。
