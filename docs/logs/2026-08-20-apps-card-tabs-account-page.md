---
title: "Apps card actions, sidebar app tabs, and the Accounts app stage"
id: "log-apps-card-tabs-account-page"
type: "log"
status: "accepted"
authority: "L3"
date: "2026-08-20"
authors: ["x", "agent-architect"]
subsystem: "dsh-drama"
---

# Apps card actions, sidebar app tabs, and the Accounts app stage

- **日期:** 2026-08-20
- **状态:** 已落地（T01–T05 全部完成）。规范见 [docs/contracts/apps-catalog.md](../contracts/apps-catalog.md)（卡片动作位 + tabs 端点）、[docs/contracts/sidebar-extra-entries.md](../contracts/sidebar-extra-entries.md)（动态应用 tab）、[docs/contracts/settings-ui.md](../contracts/settings-ui.md)（应用页面不占 Settings 席位）。
- **触发:** PRD `apps-card-tabs-account-page-prd.md`：卸载破坏性操作降权、已安装应用一键直达、应用持久回访入口、账号应用独立成页。

## 改动

- **FR-1 卡片动作位**：`PluginsSection.jsx` 动作位矩阵（available→安装主按钮 / update→更新主按钮+⋯ / installed→⋯ 溢出菜单），菜单内「打开」（pendingRestart 禁用+「重启后可用」副文案）与红字「卸载」（二次确认气泡，提示 tab 记录一并移除）；available 点卡片本体弹「是否安装」确认气泡；`open-app-flow.js` 统一打开编排（登录门→派发→600ms 舞台认领→失败回退重启提示）；`app-actions.js` `canOpen` 接受 installed|update。矩阵测试 `src/client/app-actions.test.js`。
- **FR-2 侧栏 tab**：Host 数据层 `src/apps/tabs.js`（`$DSH_HOME/omnimux/apps/tabs.json`，schema 1 / ≤64 行 / 五字段精确匹配 / 坏文件空表，0600+0700）；端点 `GET/POST/PATCH/DELETE /omnimux/apps/tabs*`（`src/apps/http-routes.js`，写守卫 POST/PATCH/DELETE 全覆盖）；卸载联动删 tab（`src/plugins/http-routes.js` 注入 `appsView`/`tabsRemove`）；客户端 `src/client/app-tabs.js`（32px/14px 契约行，hover 三动作 ✕/📌/⬆，`dsh-omnimux-app-tabs-changed` 刷新）；打开成功后 `open-app-flow.js` best-effort upsert。测试：`src/apps/tabs.test.js`、`src/apps/http-routes.test.js`、`src/plugins/http-routes.test.js`、`src/client/app-tabs.test.js`。
- **FR-3 账号独立页**：`dsh-omnimux-accounts` 撤 `settings.plugins.tab` 注册，改 `shell.overlay`（id `omnimux-app-accounts`，order 21）；`AccountsStage.jsx` 监听 `dsh-omnimux-app-open` 认领产品舞台（事件字面量本地复制，不 import hub）；`AccountsSection.jsx` 全宽排版去 h2；设置→插件 中账号 tab 消失，「DSH 插件」tab 只读化（`DshPluginsSection.jsx`，PRD D1）。断言反转 `src/client/settings-placement.test.js`。
- **FR-4 契约/文档**：`apps-catalog.md` 补卡片点击语义与 tabs 端点；`sidebar-extra-entries.md` 新增 Dynamic app tabs 一节；`settings-ui.md` 决策表加应用舞台行、occupants 更新；`AGENTS.md` 硬边界补「已上架应用用户页面属于应用舞台」；`capabilities.md` 加 Apps card actions / App tabs 两行并更新 Accounts app UI 入口。
- 顺手修正：`plugins.open` 重复 key 清理（保留「打开确认页」）；两个过期测试按现行设计意图更新（`apps-stage-box.test.js` 覆盖整列、`apps-store.test.js` 补 DOM stub）。

## 回归

根 `pnpm test` 全绿：dsh-drama 20 / dsh-omnimux 223 / dsh-omnimux-accounts 2（2026-08-20，node:test + assert/strict，keyless）。

已知环境问题：`dsh-omnimux-workbench`（他人未跟踪 WIP 包）prepare 失败会挡住触发重装的 pnpm 命令；用 `pnpm install --ignore-scripts` 刷新依赖状态后正常，未触碰该包。
