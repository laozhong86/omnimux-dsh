# 栏目：官方插件开发

线上栏目入口（中文默认）：

https://deepseek-harness.github.io/deepseek-harness/develop/basic/

英文入口：

https://deepseek-harness.github.io/deepseek-harness/en/develop/basic/

对照 checkout（若本机有）：`/Users/x/Desktop/Project/Github/deepseek-harness`。路径相对该仓根。站点与 checkout 冲突时，以 checkout 当前 SHA 的 md + 源码为准，并记下 SHA。

改 dest 只改本表。不要在对话里另造 id，不要把教程正文贴进本包。

## 基础（从这里学插件）

| dest | 中文 | 英文 | checkout | 学完能做什么 |
|---|---|---|---|---|
| `basic-first` | [第一个插件](https://deepseek-harness.github.io/deepseek-harness/develop/basic/) | [Your first plugin](https://deepseek-harness.github.io/deepseek-harness/en/develop/basic/) | `docs/user/develop/basic/index.md` | `apply`、`--patch` 绝对路径、`inject`、`ctx.effect`、三种形态 |
| `basic-tool` | [开发一个 Tool](https://deepseek-harness.github.io/deepseek-harness/develop/basic/tool) | [Build a tool](https://deepseek-harness.github.io/deepseek-harness/en/develop/basic/tool) | `docs/user/develop/basic/tool.md` | `defineTool`：parameters、execute、output.schema / render |
| `basic-config` | [插件配置](https://deepseek-harness.github.io/deepseek-harness/develop/basic/config) | [Plugin configuration](https://deepseek-harness.github.io/deepseek-harness/en/develop/basic/config) | `docs/user/develop/basic/config.md` | `Config` + Schemastery、默认值、加载期校验、HMR |
| `basic-publish` | [打包与安装插件](https://deepseek-harness.github.io/deepseek-harness/develop/basic/publish) | [Package and install](https://deepseek-harness.github.io/deepseek-harness/en/develop/basic/publish) | `docs/user/develop/basic/publish.md` | `dsh.bundle`、profile、层顺序、git `prepare` |

官方顺序：`basic-first` → `basic-tool` → `basic-config` → `basic-publish`。跳步只在用户已经会上一步时。

## 框架

| dest | 中文 | 英文 | checkout |
|---|---|---|---|
| `framework-lifecycle` | [插件与生命周期](https://deepseek-harness.github.io/deepseek-harness/develop/framework/) | [Plugin lifecycle](https://deepseek-harness.github.io/deepseek-harness/en/develop/framework/) | `docs/user/develop/framework/index.md` |
| `framework-service` | [服务与依赖](https://deepseek-harness.github.io/deepseek-harness/develop/framework/service) | [Services and dependencies](https://deepseek-harness.github.io/deepseek-harness/en/develop/framework/service) | `docs/user/develop/framework/service.md` |
| `framework-events` | [事件系统](https://deepseek-harness.github.io/deepseek-harness/develop/framework/events) | [Event system](https://deepseek-harness.github.io/deepseek-harness/en/develop/framework/events) | `docs/user/develop/framework/events.md` |

## 实战

| dest | 中文 | 英文 | checkout |
|---|---|---|---|
| `practice-layers` | [能力的三层拆分](https://deepseek-harness.github.io/deepseek-harness/develop/practice/) | [Capability layering](https://deepseek-harness.github.io/deepseek-harness/en/develop/practice/) | `docs/user/develop/practice/index.md` |
| `practice-llm` | [LLM 适配器](https://deepseek-harness.github.io/deepseek-harness/develop/practice/llm-adapter) | [LLM adapter](https://deepseek-harness.github.io/deepseek-harness/en/develop/practice/llm-adapter) | `docs/user/develop/practice/llm-adapter.md` |

## Cordis 教程

无 API key。从临时目录动手。总入口：[总览](https://deepseek-harness.github.io/deepseek-harness/develop/cordis-tutorial/) / [Overview](https://deepseek-harness.github.io/deepseek-harness/en/develop/cordis-tutorial/)。checkout：`docs/cordis-tutorial/`。

| dest | 页 |
|---|---|
| `cordis-tutorial` | 总览 + 01–07（第一个插件 → 进入 Harness） |

需要某一课再打开对应 URL：`…/develop/cordis-tutorial/01-first-plugin` 至 `07-into-the-harness`。

## 相邻，不是本栏目

| dest | 去哪 |
|---|---|
| `dsh-plugin-dev` | 本仓 `.agents/skills/dsh-plugin-dev/SKILL.md`：改 `dsh-drama` / `dsh-omnimux` |
| `official-reference` | 站点 [参考](https://deepseek-harness.github.io/deepseek-harness/reference/)：架构、生成目录、Cookbook |
| `product-landing` | [产品页](https://www.deepseek.com/harness/en/)：定位，不是插件教程 |
