# ops-entry — 插件运维命令唯一入口

> 解决问题：各插件 / 产品树脚本各自一派（`deploy.mjs`、直调 `sync-stable.sh`、文档写旧路径），Agent 不知道走哪条。
> 真源实现仍在 `product/omnimux-dsh/scripts/`；**对外命令只暴露 fork 的 `yarn omnimux:*`**。

## 唯一对外入口

工作目录：`~/Desktop/Project/omnimux-desktop-fork`

| 命令 | 用途 | 底层（勿直调） |
|------|------|----------------|
| `yarn omnimux:dev …` | L2 预发布 Host + 统一 watch（打印 URL/port/`DSH_HOME=…/tasks/<task>`） | `scripts/dev-env.sh` + `scripts/watch-plugin.mjs` |
| `yarn omnimux:sync [插件…]` | build + 物化进生产 profile（不自动重启） | `scripts/sync-to-app.sh` → `scripts/sync-stable.sh` |
| `yarn omnimux:restart` | 手动重启 `/Applications/OmniMux.app` | `pkill` + `open -a OmniMux` |
| `yarn omnimux:doctor` | 三层环境合规自检 | `scripts/dev-doctor.sh` |
| `yarn omnimux:stage` | 发版前物化进 `preset/plugins/` | `dsh-plugin-desktop` `stage:preset` |
| `yarn omnimux:path` / `help` | 路径与用法 | `scripts/omnimux.mjs` |

## 保留但降级的脚本

| 路径 | 状态 | 说明 |
|------|------|------|
| `scripts/sync-stable.sh` | **内部** | 只物化不 build；直调会 stderr 警告；`OMNIMUX_SYNC_VIA=sync-to-app` 时由 sync-to-app 调用 |
| `scripts/sync-to-app.sh` | 真源 | fork `omnimux:sync` 的实现 |
| `scripts/dev-env.sh` / `watch-plugin.mjs` | 真源 | fork `omnimux:dev` 的实现 |
| `plugins/omnimux-workflow/scripts/deploy.mjs` | **废弃转发** | 旧 `npm run deploy` → `sync-to-app.sh omnimux-workflow`；禁止再加私有同步逻辑 |
| `plugins/omnimux-workflow/scripts/dev.mjs` | **构建 watcher** | 只负责 esbuild watch；由统一 `watch-plugin.mjs` 复用，不是运维入口 |
| `plugins/*/scripts/build-*.mjs` | **构建** | 产品构建步骤，不是 sync/deploy 入口 |
| `plugins/omnimux-gallery/scripts/sync-workbuddyskills.mjs` | **数据漏斗** | 重建 catalog，与 App 同步无关 |

## 禁止

- MUST NOT 在插件目录新增第二套 `deploy` / `sync-to-profile` / `restart-app` 脚本。
- MUST NOT 文档再教人直调 `./scripts/sync-stable.sh` 或 `./scripts/dev-env.sh`（写 `yarn omnimux:*`）。
- MUST NOT 手 `rsync`/`cp` 进 `~/.dsh/profiles/omnimux`。
