# 短剧 Agent

官方 [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) 上的树外插件：`dsh-omnimux` 将来接管模型和出片，`dsh-drama` 管 `series/` 目录。不 fork harness。

能力真假见表 [docs/capabilities.md](docs/capabilities.md)。领域词表 [CONTEXT.md](CONTEXT.md)。

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

密钥不要写进仓库。真出片还没接到 OmniMux。
