---
name: dsh-plugin-guide
description: "Learn official DeepSeek Harness plugin development from the published /develop/basic/ guide. Use when: 学 dsh 插件, 写第一个插件, apply/inject/defineTool, cordis.yml, dsh plugin add, /dsh-plugin-guide. Not for: editing this repo's drama/omnimux tools (dsh-plugin-dev), Drama Center, forking official packages/."
---

# dsh-plugin-guide

官方插件开发指南的**学习索引**。本包不是指南正文。

真源：[第一个插件](https://deepseek-harness.github.io/deepseek-harness/develop/basic/)（英文 [Your first plugin](https://deepseek-harness.github.io/deepseek-harness/en/develop/basic/)）。站点不可达时读本机官方 checkout 的 `docs/user/develop/basic/`。源码与生成目录（`config-catalog` / `tool-catalog`）高于教程措辞。

栏目全表：`references/catalog.md`。真源地图：`references/sources.md`。

## 学习环

1. 用用户原话对照场景表，命中一行。
2. 打开该 dest 的**线上页**（先中文或先英文，与读者一致），整页读完再写代码。
3. 站点打不开：读 catalog 里的 checkout 路径，不要用本 skill 或 `research/dsh/` 代替。
4. 学完要改**本仓**插件：交棒 `dsh-plugin-dev`。不要把教程里的 `scratch-plugin` / `--patch` 路径抄进 `plugins/dsh-drama` 或 `plugins/dsh-omnimux`。

禁止：复述教程代码块当「标准答案」；把 Twitter / 橙皮书当 API；改官方 `packages/`。

## 场景 → dest

| 卡住的地方 | dest |
|---|---|
| 插件是什么、`apply(ctx)`、怎么挂进 Web UI | `basic-first` |
| `--patch`、绝对路径、`cordis.yml` insert | `basic-first` |
| `ctx.effect`、卸载自动清理 | `basic-first` |
| `inject`、等 `tools` / `llm` 就绪 | `basic-first` |
| 函数 / 对象 / 类三种形态 | `basic-first` |
| 注册 Tool、`defineTool`、parameters / execute / render | `basic-tool` |
| 插件 `Config` + Schemastery、默认值、坏配置要失败 | `basic-config` |
| 可调参数必须进 config，不要写死 | `basic-config` |
| 改 config 会 HMR 换实例 | `basic-config` |
| 打成 bundle、`dsh.bundle`、`dsh plugin add` | `basic-publish` |
| bundle vs profile、层顺序、整行替换不 merge | `basic-publish` |
| git 安装 `prepare` / `allowBuilds` / tarball | `basic-publish` |
| Fiber 生命周期、加载卸载 | `framework-lifecycle` |
| 对外提供服务、Service | `framework-service` |
| 事件、`ctx.on` | `framework-events` |
| Definition / Provider / Consumer 三层 | `practice-layers` |
| 写 LLM 适配器 | `practice-llm` |
| Cordis 本身（无 API key 的框架教程） | `cordis-tutorial` |
| 改本仓 `drama_*` / OmniMux 工具 | `dsh-plugin-dev`（相邻 skill） |

未命中：打开 `references/catalog.md`，列 2–3 个 dest，问一句。

## 交付

```text
scene: <卡住的一句>
dest: <id>
read: <官方 URL>
checkout: <仓内 md 或 none>
next: study-official | handoff-dsh-plugin-dev
not_this: 本包正文 / research 摘录 / 官方 packages/
```
