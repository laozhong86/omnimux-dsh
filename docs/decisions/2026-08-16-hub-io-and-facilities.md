---
title: "决策：执行中枢 I/O 与落地设施"
id: "decision-hub-io-and-facilities"
type: "decision"
status: "accepted"
authority: "L2"
date: "2026-08-16"
authors: ["x", "agent-architect"]
subsystem: "omnimux"
---

# 决策：执行中枢 I/O 与落地设施

日期：2026-08-16。
状态：**站位已确认。**
性质：对 [08-14 执行中枢](2026-08-14-execution-hub.md) 与 [08-16 中枢拥有核心](2026-08-16-hub-owns-core.md) 的补丁。规范真源是 [docs/contracts/hub.md](../contracts/hub.md)。

依据：同日会话（能力表能否撑住图 / 音 / 数字人 / 社交数据 / 账号 → 纠正「网关」称呼 → 垂直包只经中枢 I/O）。

## 结论

`dsh-omnimux` 的产品名是 **执行中枢**。不要叫它网关。OmniMux 云提供 HTTP；中枢把这些收成 dsh 可调用的缝和工具。垂直包（含以后的货架应用）只向中枢输入请求、接收结果或错误，自己不写 OmniMux HTTP、不存密钥。

08-14 写「OmniMux 云才是网关、中枢不是网关」仍然对职责拆分成立。本仓规范用语从此只用「执行中枢 / 垂直 / OmniMux 云」，避免代理把中枢再做成第二套路由计费。

## 谁输入、谁输出

| 方向 | 谁 | 什么 |
|---|---|---|
| 入 | 垂直工具 / App | prompt、dest、业务 id、signal |
| 出 | 中枢 | `{ mode, taskId, url }` 或抛错 |
| 盘 | 垂直 | 只写自己的领域文件 |
| 钥 | 中枢 | `OMNIMUX_ACCESS_TOKEN` 与 `OMNIMUX_API_KEY` |

中性缝（`videoGenerate`、以后的 `imageGenerate`）可以换兼容 endpoint。官方独有工具（身份、社交数据、连账户 / 发帖）不能换，未开通抛 `needs-omnimux`。

账号矩阵、排期日历、预热、Drama Center 传片仍不进中枢。中枢只做连接 / 列表 / 代理发帖。

## 否决

| 方案 | 为何否决 |
|---|---|
| 把中枢改名叫网关或做成 `/v1` 路由器 | 复制 OmniMux 云；08-14 失败相 |
| 每个垂直包自己 fetch | 密钥和 poll 复制；违反 I/O |
| `gateway.execute(kind, payload)` 万能入口 | 浅接口，调用方要学会整份云协议 |
| 按供应商拆 `videoGenerateOmnimux` / `videoGenerateX` | 垂直包绑死品牌；换 endpoint 要改领域工具 |
| 把 OmniMux 渠道号（50/61/…）写进中枢 | 复制云端渠道表 |
| 数字人独立 HTTP 客户端 | 公开手册没有这条族；走 `videoGenerate` 请求 |
| 现在发明 `audioGenerate` | 无 live 音频生成合同 |
| 中枢再挂一套 chat tool | 和 dsh LLM 面抢请求。一次性 `textComplete` 不是 chat，另见 [hub.md](../contracts/hub.md#text-complete) |
| 把矩阵 / 排期塞进中枢 | 推翻「中枢不是社媒运营套件」 |

## 落地设施（按期可独立合并）

每一期结束后产品仍可用。规范已在 `docs/contracts/hub.md` 生效；下面是代码期。

### 1. 中枢装配面 + 媒体路由脚手架

不增加用户可见能力。视频仍走同一条 `videoGenerate` 缝。让下一条供应商或协议不必改缝、也不必改 `apply()`。

- 入口导出 `Config`：brand 字段 + `media.defaultProvider` + `media.providers`。
- 媒体四层：`route.js`（解析）→ `protocols/`（HTTP）→ `vendors/`（字段）→ `job.js`（落盘）。现有 OmniMux 视频是第一行：`omnimux` + `openai-media`。
- 未知 `provider` / `protocol` / 缺模型在 resolve 失败，不打到一半再 500。
- 增加 `needs-omnimux` 错误码（与 `omnimux-unconfigured`、`needs-provider`、`unknown-provider` 并列）。
- `ctx.provide('identity', { status })`：只回公开资料，永不回 token。现有 `/omnimux/auth/*` 继续给浏览器。

验收：`pnpm --filter dsh-omnimux test`；`verify-cordis-propagate.mjs` 仍看见 `videoGenerate`；无密钥仍抛 `omnimux-unconfigured`；假 runtime 仍写下 dest。

### 2. `imageGenerate`

同一条路由表，capability 换成 `image`。I/O：`execute({ prompt, dest, signal })` → `{ mode: "live", taskId?, url }`；工具 `omnimux_image_submit`。`openai-media` 走 `POST /v1/images/generations`。新供应商只加 `providers` 行和 vendor 文件。

验收：keyless 单测（无密钥抛 `omnimux-unconfigured`；假 runtime 写下 dest）。标 **real** 仍要真实 `task_id` + 产物 + 磁盘文件，规则同视频。

### 3. 身份可被其它插件消费

垂直包 / 以后的 App 用 `ctx.get('identity')`，禁止 import `src/auth`。应用页所需平台能力字段按合同写 `identity`、`videoGenerate`、`imageGenerate`。

验收：keyless 测试证明 provide / get / dispose；Client 仍只打本机 auth 路由。

### 4. 官方独有：社交数据与连账户

薄工具，包住 OmniMux 已有 HTTP。默认可关（`Config`）。不做矩阵、排期、预热。

- `omnimux_social_data_*`：`sk-`
- `omnimux_accounts_list` / `connect`、`omnimux_publish_*`：access token

验收：未登录 / 未配密钥抛 `needs-omnimux`；响应剥 PAT / `sk-`。

数字人和音频不单开期。口播数字人是第 2 期视频缝上的请求字段。音频等公开手册出现 live 生成合同再开缝。

## 与活树的差距

今天仍为真、由本决策标为待做：

- `imageGenerate` / 社交数据 / 发帖仅 keyless；标 **real** 仍要真实回包
- `textComplete` 仅 keyless；标 **real** 仍要一次真实识图回包（默认 `gemini-3.7-flash`）。模型能力矩阵已实测：`docs/evidence/omnimux-modality-2026-08-18.md`
- 货架目录仍空（OmniMux 仓）

已落地：媒体路由与句柄；`identity`；`imageGenerate`；应用页本机能力门；`official` 客户端；社交数据第一刀；连账户/发帖薄工具；口播字段走 `videoGenerate` metadata；一次性 `textComplete` 白名单。

## 源

| 材料 | 用来干什么 |
|---|---|
| [hub.md](../contracts/hub.md) | I/O、词表、C 类名单 |
| 08-14 / 08-16 决策 | 中枢 / 垂直拆分；禁止兄弟核心包 |
| 同日能力评估 | 图 / 社交可进中枢；矩阵 / 音频缝不可现在发明 |
