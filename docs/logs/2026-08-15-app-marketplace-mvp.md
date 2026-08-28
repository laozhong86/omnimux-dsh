---
title: "开发日志：OmniMux 应用市场 MVP"
id: "log-app-marketplace-mvp"
type: "log"
status: "accepted"
authority: "L3"
date: "2026-08-15"
authors: ["x", "agent-architect"]
subsystem: "omnimux"
---

# 开发日志：OmniMux 应用市场 MVP

- **日期:** 2026-08-15
- **状态:** 官方货架存储已改。规范真源：[docs/contracts/apps-catalog.md](../contracts/apps-catalog.md)（bundled JSON + 可选远程 JSON）。本文件保留用户故事和「应用 = 带 WebUI 的 dsh 插件」约束；**不要再按「先做 OmniMux 应用表」开工。**
- **读者:** 在 `omnimux-dsh` 接货架 / 打开 WebUI 的代理。个人「我的」与管理员写接口仍不做。
- **不要在本仓实现应用目录服务。** 允许中枢持有静态 catalog 与本机缓存。禁止再做一套带鉴权的应用表。`dsh-omnimux` 是执行中枢，不是网关。

---

## 给后续代理的任务

1. 先读完本文，再读文末「必读」。不要从聊天纪要另起一套词。
2. 在 **OmniMux 仓** 出应用 server 设计（路由、表、管理员鉴权、上下架、目录 JSON）。设计先给人确认，再写代码。
3. OmniMux 主仓默认走 worktree + 功能分支，不要在脏的 `main` 工作区直接改产品。
4. 公开用户 CLI（`cli/`）今天是 **纯用户面**，源码里禁止出现现有 `AdminAuth`/`RootAuth` 路由前缀。管理员上下架若走 CLI，必须先回答文里「CLI 和管理员权限」那一问，不能把 `/api/channel` 这类前缀写进 `@omnimux/cli`。
5. MVP 功能可以少、体验可以糙；**目录字段、打开方式、身份、官方/个人、插件安装协议这几条要一次定对**，避免以后迁数据。

---

## 已落地（不要重做）

Desktop / `dsh-omnimux` 已经有：

- 侧栏「应用」入口（无边框，图标 + 名称），点开铺满中间窗口。
- 设置「个人资料」可登录 / 退出；device-login，`client_name: dsh-omnimux`。
- PAT 只在 Host，键名 `OMNIMUX_ACCESS_TOKEN`，浏览器拿不到。
- `dsh-omnimux` 随 Desktop / web profile 默认安装，是原生底座，**不是货架上的普通应用**。

货架列表现读本机 `GET /omnimux/apps`。bundled `apps/catalog.json` 当前仍是空数组，所以文案仍是「还没有已发布的应用。」第一条官方行另 PR。

---

## 大白话

OmniMux 应用是 **带 WebUI、点开就能用** 的产品。开发时仍做成 dsh 插件，这样能调本机其它插件，也能调 OmniMux 官方接口。货架和需要云的数据在 OmniMux 云上。人在 Desktop / Web 里逛官方或个人应用，点一下打开 WebUI。

和普通 dsh 插件的差别：多了云上的目录、上下架、以及以后按应用隔离的云接口。安装协议仍是 `dsh plugin add`，不另发明一种包。

不是 CF OS 那种大家改同一份云实例。也不是 DeepSeek 官方插件商店（官方没有商店）。

---

## 用户故事

验收以故事为单位。Server 设计必须能撑住这些故事；字段名可以在设计里定，故事本身不要改。

### US-1 打开官方应用就能用

作为已登录的 Desktop 用户，我想在「应用」里看到官方货架上的应用，点一下打开它的 WebUI，直接开始用。

完成：至少有一个上架中的官方应用；中间窗口出现该应用自己的界面，而不是再跳一套登录。WebUI 能向 server 证明「当前是这个 OmniMux 用户」（经 `dsh-omnimux` 已有身份，浏览器仍无 PAT）。

### US-2 未登录也能逛官方货架

作为未登录用户，我想先看见官方应用列表（名称、简介），再决定登录。

完成：未登录可看官方已上架列表；点「打开」时若必须登录，走现有个人资料 / 应用页登录，不新做第三套。

### US-3 个人应用和官方分开

作为已登录用户，我想在「我的」里只看见自己的个人应用；官方列表和我对别人不可见的个人应用不是同一栏。

完成：目录带 `official | personal` 和 owner。未登录没有「我的」。MVP「我的」可以是空列表，但接口和字段要在。

### US-4 管理员上架

作为 OmniMux 管理员，我想用 CLI 把一个应用（dsh 插件 spec + WebUI 入口）挂到货架上，立刻能被 US-1 看见。

完成：一条管理员命令写入目录；`listed=true`；公开读接口能读到。**没有**管理员 Web 后台。

### US-5 管理员下架

作为管理员，我想把某个应用从货架拿掉。用户再也点不开货架上的这一项。已经装在本机的 dsh 插件可以仍留在 profile 里（下架 ≠ 远程卸载）。

完成：一条命令把 `listed` 设为 false（或等价状态）。公开列表消失。已安装副本不自动删除。

### US-6 下架后再上架

作为管理员，我想把同一应用 id 再次上架，而不是当成全新应用。

完成：同一稳定 `app_id` 可改 listed；不要靠删行假装下架，除非设计里明确软删并能恢复。

### US-7 应用复用原生登录和平台能力

作为应用开发者，我不想在自己的插件里再写 device-login。我要调 `dsh-omnimux` 已经提供的身份，以及以后的生视频等能力。

完成：示例应用打开后能显示当前用户的公开资料字段（用户名等）。不出现第二套登录 UI。不把 `sk-` / access token 送到浏览器。

### US-8 仍是合法 dsh 插件

作为只使用官方 dsh、不走货架的人，我仍可用 `dsh plugin add <npm|git|tarball>` 装同一个包。

完成：货架记录里的安装 spec 就是普通 dsh bundle。没有货架时包自己能加载。

### US-9 原生底座不出现在货架商品里

作为用户，我不把 `dsh-omnimux` 当成一个可下架的应用。

完成：目录里没有 `dsh-omnimux` 这一条。货架页由它渲染。

---

## 架构前置（实现时不要悄悄改）

这些是产品已经拍板的约束。Server 设计可以选表和路径，不能推翻这些。

1. **每个上架应用都有可打开的 WebUI。** 货架项若打不开界面，就不算应用。
2. **实现单位是 dsh 插件**（Host 工具 + Client UI）。云上多的是目录和以后的应用接口，不是第二种运行时。
3. **`dsh-omnimux` 是 Desktop 原生插件**，提供登录、货架壳、以及给其它应用调用的平台能力。
4. **浏览器永不持有 PAT / `sk-`。** 应用 WebUI 调云，经本机 Host 代理或 server 签发的短时应用票，由 server 设计选定，但密钥不过浏览器。
5. **官方 / 个人是可见性和上架通道，不是两套协议。** 两边都是同一条目录、同一种打开方式。
6. **安装协议只有 `dsh plugin add`。** 货架不发明第二种包格式。
7. **本机一份，不是多人共改一个云实例。** 云托管目录和官方接口；需要本机工具时跑用户自己的插件。
8. **管理员 MVP 只用 CLI，不做后台 WebUI。**
9. **不改官方 `deepseek-harness/packages/`。** 客户端改 `dsh-omnimux`；server 改 OmniMux。
10. **领域包（如 `omnimux-drama`）不认货架，不 import 中枢内部。** 应用调中性能力（已有 `videoGenerate`），不调中枢私有模块。

---

## MVP 要跑通的链路

```text
管理员 CLI ──上架/下架──► OmniMux 应用 server（目录）
                                │
                     公开读 / 登录后读「我的」
                                │
Desktop「应用」页 ◄──────────────┘
        │
        │ 点开
        ▼
  应用 WebUI（dsh 插件 client，中间窗口）
        │
        │ 身份 / 以后的官方能力
        ▼
  dsh-omnimux Host ──已有 device-login──► OmniMux 身份
```

本期最小闭环：**目录可写（CLI）+ 可读（Desktop）+ 打开一个示例应用 WebUI + 该 UI 能读到当前用户。** 社媒账号、发布编排、生图、审核后台、评分付费都不做。

装到本机 profile 可以第二步再接；若第一步只打开云上或插件内 WebUI、尚未调用 `dsh plugin add`，设计里仍要留下安装 spec 字段，避免以后补字段。

---

## 非范围（本期）

- 管理员 Web 后台
- 用户自助提交审核流
- 任意用户后端托管 / 每应用一台云函数（PaaS）
- 评分、评论、付费分成
- 社媒账号绑定、发布队列（以后的官方能力和以后的应用）
- 改官方 harness
- 把 `dsh-omnimux` 做成可下架商品
- 抄 CF OS Gadget / Blueprint / 同实例协作

---

## Server 端必须先回答的问题

后续代理的设计文档要逐条给结论，不要空着开工。

### 1. 目录存在哪

新表还是 JSON 文件？要支持 SQLite / MySQL / PostgreSQL（OmniMux 云三库都要能跑）。上架记录的稳定主键是什么（`app_id` slug）？

### 2. 一条目录至少有哪些字段

故事需要的最低集合（名称可改，语义不要丢）：

| 语义 | 用途 |
|---|---|
| 稳定应用 id | 上下架、再次上架 |
| 显示名、简介 | 货架卡片 |
| `official` / `personal` | 分栏 |
| owner 用户 id | 「我的」 |
| `listed`（或等价状态机） | 上架/下架 |
| WebUI 怎么打开 | 插件 client 槽，或以后的云页面 URL |
| dsh 安装 spec | `npm` / `git` / `tarball` + 版本 |
| 需要哪些平台能力 | 如 `identity`、`videoGenerate` |
| 版本 | 以后更新 |

不要在 MVP 做成「只有一个 URL 字符串、以后再拆」。

### 3. 公开读和管理员写怎么拆路由

建议形状（可改，但要写进设计）：

- 任何人：`GET` 官方已上架列表
- 登录用户：`GET` 我的个人应用
- 管理员：创建 / 改 listed / 改元数据

写接口必须 `AdminAuth` 或与现网一致的管理员判定。不要用「知道一个秘密 URL」当权限。

### 4. CLI 和管理员权限（和现网冲突，必须先选）

用户要求：用 OmniMux CLI、管理员权限、快捷上下架。

现网硬约束：`cli/AGENTS.md` 写死 `@omnimux/cli` 是用户面；`cli/test/no-admin.test.js` 扫描 `cli/src`，禁止出现现有管理员路由前缀字符串。

候选（设计里选一个，并写清为什么）：

| 方案 | 含义 |
|---|---|
| A. 新的用户可读路径 | 例如 `/api/apps/...`，写操作在 server 查管理员角色。公开 CLI 只出现 `/api/apps`，不碰黑名单前缀。 |
| B. 独立管理员 CLI / ops 二进制 | 不进公开 `@omnimux/cli`，可以打管理员路由。 |
| C. 现有 CLI 加 `apps` 只读，写操作另给脚本 | 用户 CLI 只逛货架；上下架用仓内 ops 脚本。 |

**推荐先评估 A：** 新资源名 `/api/apps`，公开 CLI 可以有 `omnimux apps list|publish|unpublish`，server 对写操作做管理员校验。这样满足「用 omnimux CLI 管上下架」，又不破坏 no-admin 扫描。

若写操作必须走 `/api/admin/...` 这类已有管理员组，就不要把它写进公开 `cli/src`。

### 5. 打开 WebUI 的第一跳是什么

Desktop 点开之后：

- 加载该应用 dsh 插件的 `./client`，还是
- iframe / 打开 server 给出的 https 页面？

MVP 建议：第一跳是 **已安装（或随 Desktop 带的示例）插件 Client**，铺在现有 `shell.overlay`。云 URL 作为字段预留，第一版可以不用。

### 6. 应用 WebUI 怎么向 server 证明身份

不要让 WebUI 拿 PAT。候选：Host 代发带用户身份的请求；或 server 给短时应用票。和现有 `/omnimux/auth/status` 对齐，不要第三套用户体系。

### 7. 下架的语义

货架不可见。本机已装插件是否保留：US-5 定为保留。目录行是软下架还是硬删：必须支持 US-6 再上架。

### 8. 个人应用 MVP 写不写

读路径和字段要有。管理员 CLI 第一期可以只上架官方应用。用户自助 `publish` 个人应用可以第二期，但表结构现在就要能存 `personal`。

---

## 建议的管理员命令形（供 CLI 设计对齐，不是已实现）

```text
omnimux apps list
omnimux apps publish --id <app_id> --title ... --spec <npm|git|tarball> --kind official
omnimux apps unpublish --id <app_id>
omnimux apps show --id <app_id>
```

JSON 输入输出跟现有 CLI `ok` / `error.type` 合同。未实现前不要当活命令写进帮助。

---

## 必读

| 文件 | 读什么 |
|---|---|
| 本文件 | 故事和前置约束 |
| `docs/briefing.md` 条目 `2026-08-15-app-marketplace` | 会话记忆；冲突时以本文件和代码为准 |
| `plugins/dsh-omnimux/README.md` | 已有身份、两套凭证 |
| `docs/decisions/2026-08-14-execution-hub.md` | 中枢 / 领域拆分 |
| `research/dsh/POSITIONING.md` | 为什么不 fork harness |
| OmniMux `cli/AGENTS.md`、`cli/test/no-admin.test.js` | 用户 CLI 禁止管理员路由 |
| OmniMux `router/api-router.go` | 现有 AdminAuth / 用户路由怎么挂 |
| OmniMux `cli/src/commands/login.js` | device-login，Desktop 已复用同一套 HTTP |

---

## 完成定义（server 设计代理交稿时）

交出一份可确认的设计（建议放 OmniMux 仓 `docs/`），至少包括：表或存储、HTTP 路径和方法、管理员判定、上下架状态机、公开列表 JSON 示例、与 `omnimux apps` 命令的对应、以及上面 8 个问题的选择。人确认后再写代码。
