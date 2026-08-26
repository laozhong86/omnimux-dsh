---
title: "DeepSeek 搜索密钥：走官方配置面，不加产品设置入口"
id: "log-deepseek-search-key"
type: "log"
status: "accepted"
authority: "L3"
date: "2026-08-16"
authors: ["x", "agent-architect"]
subsystem: "global"
---

# DeepSeek 搜索密钥：走官方配置面，不加产品设置入口

- **日期:** 2026-08-16
- **状态:** 已收敛。自定义设置入口已删除；密钥已写入 `$DSH_HOME/.credentials.yaml`，`web_search` 在真实会话验证通过。
- **合同:** [docs/contracts/hub.md](../contracts/hub.md)

## 背景

桌面端 agent 的 `web_search` 走官方 `web-search-deepseek`（dsh-base），默认引用 `DEEPSEEK_API_KEY`；桌面端任何一层都没有该引用 → 每次搜索抛 `WEB_PROVIDER_CREDENTIAL_MISSING`。探测确认 `api.omnimux.ai` 无 Anthropic Messages 端点、无 `web_search_20250305` 工具，不能复用 OmniMux token 走网关，必须用真实 DeepSeek key。

## 第一版（已撤回）

在 `dsh-omnimux` 里加了顶层 `settings.section`「DeepSeek 搜索密钥」（order 8）和 `/omnimux/search-key` 路由。方向对（写 `ctx.credentials`），但放置违反官方 slot 规范：**单插件配置不该占一级设置菜单**。

## 收敛：官方 Slot 规范

| 需求 | 官方 Slot | 位置 |
|---|---|---|
| 产品级整页设置（资料等） | `settings.section` | 设置侧栏一级导航 |
| 插件管理整页 | `settings.plugins.tab` | 设置 → 插件 内一个页签 |
| 单插件配置卡片（含密钥） | `settings.plugin.item` | 设置 → 插件 → 可配置 |
| 单行偏好（无需整页） | `settings.general.item` | 设置 → 通用 内一行 |

官方 `@deepseek-ai/dsh-client-ui-settings-plugins`（dsh-web-app 已挂载）自带 **Web Search 卡片**（id `web-search`），密钥经 credentials 域写入、只显示 configured/writable —— 与需求完全一致。因此：

- 删除 `src/search-key/`、`SearchKeySection.jsx`、`search-key.js`、路由接线、locales、`files`/test 清单、auth 路由断言、README/hub 段落。
- 密钥配置面 = 官方 **设置 → 插件 → Web Search** 卡片，不新增产品 UI。

## 密钥配置（已完成）

剪贴板 DeepSeek key（35 位 `sk-`）写入 `$DSH_HOME/.credentials.yaml` 的 `DEEPSEEK_API_KEY`（0600；与 `OMNIMUX_API_KEY` 同文件）。凭据 provider 用文件 watcher 同步，运行中 Host 立即解析 —— 本会话 `web_search` 实测返回真实结果。

## 验收

- `npm test` 131 通过（回到改动前基线）。
- client bundle 重建，`omnimux-search-key` 注册已消失；preset 已重 stage，live profile 已同步。
- 桌面端重启后「DeepSeek 搜索密钥」侧栏项消失；后续改 key 走官方卡片。
