# OmniMux × DeepSeek Harness

把 [OmniMux](https://omnimux.ai) 落到官方 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 插件生态。不 fork harness。

- `dsh-omnimux`：执行中枢。产品外壳、账号、模型 / 出片配一次，各垂直包复用。默认 OmniMux。兼容 OpenAI video 形的第三方 endpoint 可经 `OMNIMUX_BASE_URL` 指入（未验证）。只有 OmniMux 云里封装了业务逻辑的付费接口，必须走官方密钥并报 `needs-omnimux`。不要叫它网关，也不另开换标 / 登录插件。
- `dsh-drama`：第一条垂直方案（短剧创作）。管 `series/`。出片向中枢输入、接收结果，不单独存密钥。电商设计、品牌营销等同属垂直包。

I/O [docs/contracts/hub.md](docs/contracts/hub.md)。站位 [research/dsh/POSITIONING.md](research/dsh/POSITIONING.md)。拆包 [docs/decisions/2026-08-14-execution-hub.md](docs/decisions/2026-08-14-execution-hub.md)。能力真假 [docs/capabilities.md](docs/capabilities.md)。领域词表 [CONTEXT.md](CONTEXT.md)。

## 启动

需要 Node `^22.19 || >=24`。`dsh` 来自 `npx @deepseek-ai/dsh`，或干净 checkout 里的 `pnpm dsh`。

```sh
pnpm install
pnpm test
./scripts/smoke-drama.sh

dsh plugin --profile drama add ./plugins/dsh-omnimux
dsh plugin --profile drama add ./plugins/dsh-drama
dsh --profile drama --dump-config
dsh --profile drama web
```

Web 里把工作区指到 `fixtures/demo-series`，问「当前项目有几集几镜、谁还没确认」。应调用 `drama_project_status`。

确认卫安后，对 `e01-s01` 调用 `drama_generate_shot`（默认同步）。有 `videoGenerate` 缝时 `mode` 为 `live`；否则显式 stub 或 `needs-provider`。未确认角色的镜不得生成。

可选预设：`presets/drama`（smoke 会链到 `$DSH_HOME/.agent-presets/drama`）。

密钥不要写进仓库。`omnimux_video_submit` 与 `drama_generate_shot` 的 live 路径都已对真实 OmniMux / dsh 会话验证（见 [docs/evidence/omnimux-video-2026-08-14.md](docs/evidence/omnimux-video-2026-08-14.md) 与 [docs/evidence/e2e-dsh-2026-08-15.md](docs/evidence/e2e-dsh-2026-08-15.md)）。
