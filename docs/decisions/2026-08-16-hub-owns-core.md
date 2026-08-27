---
title: "决策：中枢拥有全部 OmniMux 核心能力"
id: "decision-hub-owns-core"
type: "decision"
status: "accepted"
authority: "L2"
date: "2026-08-16"
authors: ["x", "agent-architect"]
subsystem: "omnimux-drama"
---

# 决策：中枢拥有全部 OmniMux 核心能力

日期：2026-08-16。
状态：**站位已确认。**
性质：对 [2026-08-14 执行中枢](2026-08-14-execution-hub.md) 的补丁。仓规入口是根 `AGENTS.md`。I/O 与用语补丁：[2026-08-16 执行中枢 I/O 与落地设施](2026-08-16-hub-io-and-facilities.md)。词表真源 [docs/contracts/hub.md](../contracts/hub.md)。

依据：同日会话（预置 profile → `omnimux-brand` 是否独立 → 换标并进中枢 → 种子默认模型）。

## 结论

`dsh-omnimux` 是 OmniMux 落到 dsh 上的**唯一核心包**。和 OmniMux 产品身份、账号、模型、执行缝、中枢 UI 有关的能力，都写进这个包。

只有**细分业务场景**才单独做插件：短剧创作（已有 `omnimux-drama`）、以后的电商设计、品牌营销等。垂直包向中枢输入请求、接收结果，不实现换标、登录、模型路由，也不把中枢叫网关。

禁止再出现 `omnimux-brand` 这类「只切一块核心能力」的兄弟包，不论放在本仓、`dsh-plugin/personal`，还是官方 `deepseek-harness/plugins/`。

## 谁拥有什么（补 08-14 表）

| | `dsh-omnimux` | 垂直包 |
|---|---|---|
| 产品外壳 | logo、字标、tab title、favicon、欢迎文案 | 禁止 |
| 账号 | device login、credentials、Settings 个人资料 | 禁止 |
| 模型 | `llm-pi-ai` 路由、`OMNIMUX_API_KEY`、开箱默认模型 | 禁止 |
| 执行缝 | `videoGenerate`、以后的图/官方独有工具 | 只消费 |
| 中枢 UI | Settings / Apps 入口 | 自己的领域 UI |
| 领域磁盘 | 不认 | `series/`、货盘、营销企划等 |

08-14 写「中枢只做执行面」读成「不要做换标」是误读。执行面包含把官方 dsh 外壳收成 OmniMux 产品的那一层。仍不进中枢的：账号排期、Drama Center 传片、垂直工作流文件。

## 否决

| 方案 | 为何否决 |
|---|---|
| 独立 `omnimux-brand`（或同职责换名） | 核心能力被拆成两个 bundle、两份 `dsh.client`；下载用户无法只装中枢就得到完整产品 |
| 换标改官方 `packages/` | 已否决：不 fork harness |
| 整仓 fork `deepseek-harness` | 已否决：消费 pin + 产品仓 + 补丁。见 [2026-08-16 消费官方不 fork](2026-08-16-harness-consume-not-fork.md) |
| 每个垂直包自己换标 / 配模型 | 和「配一次、多领域复用」相反 |

活树：overlay 已并进 `plugins/dsh-omnimux/src/brand`。`Github/deepseek-harness/plugins/omnimux-brand` 已删除。预置 profile 不得再列这个包。

## 桌面种子（产品默认，不是仓规编码约束）

OmniMux 桌面预置 profile `omnimux` 的用户层默认模型：

- provider：`omnimux`（与中枢 `llm-pi-ai` 路由键一致）
- model：`deepseek-v4-flash`

不把本机 `~/.dsh/profiles/web/cordis.patch.yml` 打进安装包（含密钥和私有路由名）。

预置还带社区 `dsh-better-sidebar`（后期要用）。`omnimux-drama` 仍是垂直包，按场景装，不默认进消费者桌面，除非另拍板。

活树：桌面仓 `/Users/x/Desktop/Project/omnimux-desktop` 首次启动种子 `$DSH_HOME/profiles/omnimux`，Host 走 `dsh --profile omnimux`。设置「DSH 插件」经捆绑 pnpm + 打包 `dsh plugin` 写入该 profile 的 bundles；不可卸 `dsh-omnimux` / `dsh-base` / `dsh-web-app`。

> 2026-08-22 注：桌面壳已于 2026-08-21 切换为 fork 线（`omnimux-desktop-fork`，fork 自 anywhere-labs），旧 slim 壳 `omnimux-desktop` 归档为只读参考；本文为其时决策，路径以 [dev-pipeline.md](../contracts/dev-pipeline.md) 为准。
