# 中枢其余能力挂接计划

- **日期:** 2026-08-16
- **状态:** P3–P7 已落地。P8 出图已升 **real**（默认 `gpt-image-2`；`grok-imagine-image` 同步出图也过）。`nano_banana_2` 另修，不挡。设置登录仍 **unproven**。
- **合同:** [docs/contracts/hub.md](../contracts/hub.md)
- **能力表:** [docs/capabilities.md](../capabilities.md)

在 `dsh-omnimux` 里按 hub 合同把还没挂上的能力接完。不新开兄弟包，不叫网关，不做任务台 / 账号矩阵 / Drama Center。

## 本计划不重做

换标、device login、`identity`、媒体路由、`videoGenerate` 提交/续取、`imageGenerate` 骨架、聊天走 `llm-pi-ai` `omnimux` 路由。

## 分期

| 期 | 能力 | 状态 |
|---|---|---|
| P3 | 应用页能力门 `GET /omnimux/capabilities` | 已挂。货架目录仍空 |
| P4 | official HTTP 客户端（sk- / PAT 分道） | 已挂 |
| P5 | `omnimux_social_data` 第一刀：tiktok/video、tiktok/user、instagram/post | 已挂，**unproven** |
| P6 | `omnimux_accounts_*` / `omnimux_publish_*` | 已挂，**unproven** |
| P7 | `videoGenerate` 可选 `speech` / `audio` → vendor `metadata` | 已挂，keyless |
| P8 | `scripts/verify-omnimux-image-live.mjs`；手工登录 | 出图 **real**。登录仍要手工过一遍 |

不做：`audioGenerate`、中枢任务台、账号矩阵/排期/预热、货架 server（OmniMux 仓）、Drama Center 工具、按供应商拆缝。

## 验收

- 默认 `pnpm --filter dsh-omnimux test` 覆盖 P3–P7 keyless 路径。
- 未登录发帖 / 账户工具 → `needs-omnimux`。
- 社交数据无 `OMNIMUX_API_KEY` → `omnimux-unconfigured`。
- `official.mount: false` 时不注册 P5/P6。
- P8 不进默认测试。无钥匙自跳过。
