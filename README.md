# OmniMux × DeepSeek Harness

把 [OmniMux](https://omnimux.ai) 落到官方 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 插件生态。不 fork harness。

- `omnimux`：执行中枢。产品外壳、账号、模型 / 出片配一次，各业务插件复用。默认 OmniMux。兼容 OpenAI video 形的第三方 endpoint 可经 `OMNIMUX_BASE_URL` 指入（未验证）。只有 OmniMux 云里封装了业务逻辑的付费接口，必须走官方密钥并报 `needs-omnimux`。不要叫它网关，也不另开换标 / 登录插件。
- `omnimux-workflow`：画布工作流。节点编排 DAG、Agent 工具调用与多模态生成，提供直观的生成流与脚本生产能力。
- `omnimux-assets` / `omnimux-products` / `omnimux-clip` / `omnimux-accounts` / `omnimux-inspiration` / `omnimux-publish`：电商营销与全链路社媒运营插件矩阵。
- `omnimux-market`：插件市场（四 tab：技能 / 插件 / 专家 / 连接器）。基于 @cocofhu/skillhub v0.2.13（MIT）fork 改名，自更新已禁用、版本随本仓库走。

I/O [docs/contracts/hub.md](docs/contracts/hub.md)。站位 [research/dsh/POSITIONING.md](research/dsh/POSITIONING.md)。能力真假 [docs/capabilities.md](docs/capabilities.md)。领域词表 [CONTEXT.md](CONTEXT.md)。

## 启动

需要 Node `^22.19 || >=24`。`dsh` 来自 `npx @deepseek-ai/dsh`，或干净 checkout 里的 `pnpm dsh`。

```sh
pnpm install
pnpm test
./scripts/smoke.sh

dsh plugin add ./plugins/omnimux
dsh plugin add ./plugins/omnimux-workflow
dsh web
```

密钥不要写进仓库。`omnimux_video_submit` 与 `omnimux_image_submit` 的 live 路径都已对真实 OmniMux / dsh 会话验证（见 [docs/evidence/omnimux-video-2026-08-14.md](docs/evidence/omnimux-video-2026-08-14.md)）。
