# OmniMux × DeepSeek Harness

把 [OmniMux](https://omnimux.ai) 落到官方 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 插件生态。不 fork harness。

- `dsh-omnimux`：执行中枢。模型 / 出片配一次，各领域包复用。默认 OmniMux，也可配第三方兼容 API。只有网关里封装了业务逻辑的付费接口，必须走 OmniMux。
- `dsh-drama`：第一条开源解决方案（社交媒体运营自动化方向的短剧创作）。管 `series/`。出片消费中枢，不单独存密钥。

站位 [research/dsh/POSITIONING.md](research/dsh/POSITIONING.md)。拆包决策 [docs/decisions/2026-08-14-execution-hub.md](docs/decisions/2026-08-14-execution-hub.md)。能力真假 [docs/capabilities.md](docs/capabilities.md)。领域词表 [CONTEXT.md](CONTEXT.md)。

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

确认卫安后，对 `e01-s01` 调用 `drama_generate_shot`：写出 `series/assets/e01-s01.mp4`，`mode` 为 `stub`。未确认角色的镜不得生成。

可选预设：`presets/drama`（smoke 会链到 `$DSH_HOME/.agent-presets/drama`）。

密钥不要写进仓库。`omnimux_video_submit` 已对真实 OmniMux 验证（见 [docs/evidence/omnimux-video-2026-08-14.md](docs/evidence/omnimux-video-2026-08-14.md)）；`drama_generate_shot` 的 live 分支待 dsh 内接线验证。
