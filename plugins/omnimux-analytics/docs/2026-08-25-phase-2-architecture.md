# Phase 2 架构备忘 — omnimux-analytics Social Dashboard

> 选型：`挂载点 = ctx.slots（shell.overlay order 22 + sidebar.extra rank 8），形态 = 函数插件 apply，产物 = dsh.bundle`

同包演进。Host Umami 埋点（`src/index.js`）保持独立；Social Dashboard 只新增 Client Stage。Phase 2 不改 Host 路由、不改 Umami 逻辑。

| 常量 | 值 |
|---|---|
| Stage id | `omnimux-analytics` |
| Overlay slot id | `omnimux-analytics-stage` |
| Overlay order | `22`（accounts=21 之后，hub overlay=20 之后） |
| Sidebar rank | `8`（inspiration=7 之后，不重排旧行） |
| Locale NS | `omnimux-analytics` |
| Client inject | `['slots', 'locale']` |
| Mock 开关 | `src/client/defaults.js` `USE_MOCK=true` |

关页保活：`everOpened` 延迟挂载 + `display:none`。侧栏只走 `window.__omnimuxSidebar.register`，禁止自挂 observer。
