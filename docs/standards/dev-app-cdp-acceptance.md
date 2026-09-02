---
title: "Dev App 真机验收 = CDP 直连 Electron 窗口"
id: "standard-dev-app-cdp-acceptance"
type: "standard"
status: "living"
authority: "L1"
date: "2026-09-02"
supersedes:
  - "dev-pipeline.md §真机定点验收（旧：Ego-Browser 连 45120 即验收）"
related:
  - "docs/contracts/dev-pipeline.md"
  - "docs/contracts/plugin-qa.md"
  - "scripts/verify-dev-cdp.mjs"
---

# Dev App 真机验收 = CDP 直连 Electron 窗口

> 此规范是对「Dev App UI 验收」的**唯一真源**。它修订并收窄 `dev-pipeline.md` / `plugin-qa.md` 中关于真机验收的表述，明确「Web 侧 ≠ Electron 窗口」。

## TL;DR

- **禁止**用 Ego-Browser / curl / opencli 访问 `http://127.0.0.1:45120` 的渲染结果作为 **Dev App 界面验收**依据。
- 涉及 **壳层样式 / `data-dsh-desktop-*` / macOS 门控** 的改动，必须用 **CDP 直连 Electron renderer** 验收。
- Dev App 通过 desktop-fork #33 暴露 CDP 端口（默认 `9229`）。Agent 用 `pnpm verify:cdp` 自动断言真实窗口。

## 一、为什么「45120 网页 ≠ Dev App 窗口」

Dev App 是 **Electron 应用**。`http://127.0.0.1:45120` 是其 **host 端口**：

| 访问方式 | 触达对象 | 能读到什么 |
|---|---|---|
| Ego-Browser / curl / opencli 访问 `45120` | **web 侧宿主页**（另一个 Chromium 渲染进程） | 网页 DOM，**不含 Electron 窗口特有的样式门控** |
| CDP 连接 `9229` 的 page target | **Dev App 的真实 Electron renderer** | 真实的窗口 DOM / computed 样式 / 交互 |

**本质差异**：`data-dsh-desktop-platform="darwin"` 等壳层样式只在 Electron 窗口触发，web 侧（非 darwin）**永远不会触发**。因此：

> 一个只在 Electron 窗口生效的样式回归（如 `.wf-panel-shell__card` padding 被壳层规则覆盖），在 web 侧验收**永远是绿的**，在 Dev App 却坏了。**web 侧绿 ≠ Dev App 验收通过。**

## 二、何时必须 CDP 直连验收

凡命中以下任一条件的改动，**必须**用 CDP 在 Electron 窗口验收，不得以 web 侧代替：

1. 触及壳层样式：`dsh-plugin-desktop/src/client/*.ts` 注入的、`[class*=...]` / `!important` / `data-dsh-desktop-*` 门控规则；
2. macOS / Windows 平台门控的布局、窗口、滚动、panel 表现；
3. 任何你无法在 web 侧复现、但用户/真机上报的 UI 差异。

纯插件 web 逻辑（不涉壳层/平台门控）的场景，仍可用 Ego-Browser 做 web 侧自查，但**不得作为 Dev App 最终验收依据**。

## 三、验收通道：CDP 直连（desktop-fork #33）

### 3.1 Dev App 暴露 CDP

Dev App（Dev 构建）通过 desktop-fork #33 在 `start()` 注入：

```ts
const cdpPort = resolveDevCdpPort({ env: process.env })
if (cdpPort !== null) app.commandLine.appendSwitch('remote-debugging-port', cdpPort)
```

- Dev 启动 → 默认 `9229`，可用 `OMNIMUX_DEV_CDP_PORT` 覆盖；
- Prod / release → `resolveDevCdpPort` 返回 `null`，**永不暴露 CDP**。

### 3.2 Agent 探针：`pnpm verify:cdp`

`scripts/verify-dev-cdp.mjs` 自动：

1. 连 `http://127.0.0.1:<CDP_PORT>/json/list`，找指向 `:45120` 的 page target（Dev App 窗口）；
2. 若目标 selector 不在，驱动窗口（创作 → 画布 → 选中节点）；
3. `Runtime.evaluate` 读 `.wf-panel-shell__card` 的 computed 样式；
4. 断言 `padding-top`（默认 `12px`）；
5. 落盘 `docs/evidence/live-cdp-qa-report.json`。

**用法**：

```sh
# 默认断言 .wf-panel-shell__card padding-top=12px
pnpm verify:cdp

# 自定义 selector / 期望值 / 端口
OMNIMUX_CDP_SELECTOR='.some-stage' OMNIMUX_CDP_PADDING_TOP='8px' pnpm verify:cdp
OMNIMUX_CDP_PORT=9333 pnpm verify:cdp
```

**前置条件**：Dev App 正在运行且已暴露 CDP 端口（desktop-fork #33 已合并 + Dev App 以新构建启动）。

## 四、合同落点（已同步）

- `docs/contracts/dev-pipeline.md §真机定点验收`：更新为「Electron 窗口红线，CDP 直连」，明确「Web 侧 ≠ Electron 窗口」，严禁以 web 侧 45120 渲染作为 Dev App 验收依据。
- `docs/contracts/plugin-qa.md`：新增「CDP 直连 Electron 窗口」章节，说明 Ego-Browser（web 侧）与 CDP（Electron 窗口）是两层验收，不可互相替代。

## 五、判别法则（给 Agent 的检查清单）

交付涉及 Dev App UI 的改动时，验收前先自问：

- [ ] 这个样式/布局会不会受 `data-dsh-desktop-*` 或壳层规则影响？→ 是则走 CDP。
- [ ] 我在哪个渲染进程量到的？—— `45120` 网页还是 Electron 窗口？→ 必须是 Electron 窗口才能作为 Dev App 验收。
- [ ] `.wf-panel-shell__card` / 关键 selector 的 computed 值是否符合预期、无 `!important` 外部覆盖？→ 用 `verify:cdp` 断言。
- [ ] 证据落盘了吗？—— `docs/evidence/live-cdp-qa-report.json` 是 CDP 验收证据。

## 六、历史根因（参考）

桌面壳 `extended-styles.ts` 曾用：

```css
body[data-dsh-desktop-platform="darwin"] [class*="panel"] { padding-top: 0 !important }
```

`[class*="panel"]` 误伤 `.wf-panel-shell__card`，把其 `padding-top` 压成 0，造成「web 正常 / Dev App 顶部贴顶」。已收窄为 `[class*="_panel"]`（desktop-fork #32）。此案例说明**壳层 `[class*]` 泛匹配 + `!important` 会误伤插件**，亦应成为壳层 CSS 审查红线。
