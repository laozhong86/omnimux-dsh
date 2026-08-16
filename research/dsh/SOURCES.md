# 来源索引

抓取日期：2026-08-14。本地对照 checkout：`/Users/x/Desktop/Project/Github/deepseek-harness` @ `47f9438`（`2026-08-13`，`Merge pull request #2519 feat/npm-public`）。远程：`https://github.com/deepseek-ai/deepseek-harness`。

只收录一手源：官方站点、官方仓文档/源码、官方 Discussions 里作者自述的插件。二手解读不进主文档。

## 官方 / 一手

| 文件 | URL 或路径 | 用途 |
|---|---|---|
| `sources/official/01-deepseek-harness-site.md` | https://www.deepseek.com/harness/en/ | 产品页：everything is a plugin；不改源码即可扩展 |
| `sources/official/07-deepseek-harness-site-zh.md` | https://www.deepseek.com/harness/zh/ | 中文产品页：面向 Harness 开发者；内核不承载能力；Agent = Model + Harness |
| `sources/official/02-github-readme.md` | https://raw.githubusercontent.com/deepseek-ai/deepseek-harness/master/README.md | 开发者预览、破坏兼容声明 |
| `sources/official/03-contributing.md` | https://raw.githubusercontent.com/deepseek-ai/deepseek-harness/master/CONTRIBUTING.md | 暂不收外部 PR；贡献路径是 `dsh-plugin` |
| `sources/official/04-cli-reference.md` | `apps/cli/reference/README.md` | profile 分层、inbox/out-of-tree 解析、`dsh plugin` |
| `sources/official/05-architecture.md` | `docs/architecture.md` | 扩展点地图、无特权核心 |
| `sources/official/06-publish-plugin.md` | `docs/user/develop/basic/publish.md` | bundle 打包、安装、升级、git `prepare` |
| （本地）`CONTRIBUTING.zh.md` | 同上中文 | 与英文同口径 |
| （本地）`packages/README.md` | 包组「Product — stable API」分类 | 与预览破坏声明对照 |
| （本地）`docs/subsystems/persistence.md` | 会话格式无升级路径 | 同步风险 |
| （本地）`docs/subsystems/skills.md` / `packages/skill/skill-filesystem/README.md` | skill 发现根 | 产品能否自带 SKILL.md |
| （本地）`docs/user/guide/providers.md` | 自定义 OpenAI-compat provider | 不写适配器也能换网关 |
| （本地）`packages/llm/llm-deepseek/README.md` | `baseURL` 与 DeepSeek 专有字段 | OmniMux 适配风险 |
| （本地）`docs/cookbook/extension-cookbook.md` | 功能到扩展点，不改 loop | 业务覆盖面 |
| （本地）`.agents/notes/implemented/architecture/2026-08-10-session-log-version-mechanism.md` | 树外 session 事件无法被官方 reader 恢复 | 插件边界 |

## 社区（作者自述，对照官方安装路径）

| 文件 | URL | 用途 | 风险 |
|---|---|---|---|
| `sources/community/01-dsh-tool-policy.md` | https://github.com/deepseek-ai/deepseek-harness/discussions/174 | 树外政策插件；peer `>=0.1.0-rc.5 <0.2.0`；缺 `dsh.bundle` 会装不上 | 讨论页含站点导航噪音 |
| `sources/community/02-session-memory-plugin.md` | https://github.com/deepseek-ai/deepseek-harness/discussions/516 | 树外记忆插件；`dsh plugin add` tarball；不改 harness 源码 | 同上 |
| `sources/community/03-dsh-plugin-topic.md` | https://github.com/topics/dsh-plugin | topic 页被无关仓污染，**不当作插件清单** | 误报多，只作背景 |
| `community-scheduled-task-plugins.md` | Discussions / 社区仓 / npm（2026-08-16 一手） | 定时任务社区插件对照官方 `dsh-schedule` | 清单会过期；不当作安装真源 |

## 未采用

- Medium / 博客转述（非一手）。
- 名为 `HenryZ838978/deepseek-harness` 的同名无关项目。
- GitHub topic 搜索里的设计工具仓（标签撞车）。
