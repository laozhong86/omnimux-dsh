# DeepSeek Harness：扩展面、官方同步，以及为什么不 fork

研究日期：2026-08-14。  
对照 checkout：`/Users/x/Desktop/Project/Github/deepseek-harness` @ `47f9438`（`origin` = `https://github.com/deepseek-ai/deepseek-harness`）。  
消化过程见 [NOTES.md](NOTES.md)，来源表见 [SOURCES.md](SOURCES.md)。

## 这篇文档回答什么

上一版方案写「不要 fork harness」。你的反问是：我们需要官方同步的更新；只做插件，能不能撑住各种业务。

结论先说：

1. **要官方更新，就不要 fork `packages/`。** 官方同步的单位是「正在跑的那份 `dsh` 安装」，不是你自己的 monorepo 分支。
2. **官方自己把二次开发定义成树外插件。** 产品页写「不改 DeepSeek Harness 源码」；CONTRIBUTING 写「暂不收外部 PR，请做 `dsh-plugin`」。
3. **短剧业务（圣经、分集、分镜、生图/生视频、拆解、后台 job）落在已公开的扩展点上。** 现在真正盖不住的，是「新的必读 session 事件」和「改 agent-loop」。这两项短剧 v1 都不需要。

下面按官方文本和本机源码把这三条钉死。

## 先纠正一个词

中文里的「二次开发」经常被理解成：把上游 clone 下来，在同一个仓里改，再定期 merge。

对 DeepSeek Harness，官方把这件事拆成两层：

| 层 | 谁拥有 | 更新怎么来 |
|---|---|---|
| 运行时 | DeepSeek 的 `dsh` 安装（inbox bundle：`dsh-base` / `dsh-web-app` / `dsh-headless`） | 换官方包或 `git pull` 干净上游，再构建 |
| 产品 | 你的 bundle + profile + preset + skills | `dsh plugin add` / `dsh plugin update`，跟运行时分开钉版本 |

把产品写进官方 monorepo，等于你同时维护一份会每周破坏兼容的预览树。那不是「跟上官方」，那是「自己变成官方的发布工程师」。

## Harness 是什么

产品页（[deepseek.com/harness](https://www.deepseek.com/harness/en/)）：

- Agent = Model + Harness。
- 内核是 Cordis：挂载、卸载、依赖。能力全在插件里：模型、工具、skills、session、sandbox、存储、loop、调度、UI。
- 「Developers can select, swap, or extend any capability in configuration without changing the DeepSeek Harness source code.」

根 README：

> DeepSeek Harness is currently in _developer preview_ and is iterating rapidly. **THERE WILL BE COMPATIBILITY-BREAKING CHANGES.**

`AGENTS.md` 更硬：没有外部消费者时，正确的地基优先于兼容垫片；后端拒绝旧磁盘格式；SQLite 用单调 `SCHEMA_VERSION`；`SESSION_FORMAT_VERSION` 停在 `0`，无兼容承诺。本机 persistence 实现：版本不一致就拒载，没有迁移。

`packages/README.md` 把多数组标成 Product / stable API。这和上面的预览声明冲突。处理方式：那是仓内相对 POC / Support 的分类，不是给你的 SemVer。对外仍按预览：每次升级当 breaking 测。

CONTRIBUTING（中英一致）：

- 早期阶段，**暂不接受外部 PR**。
- 贡献路径：GitHub Discussions 报问题；**创建插件并打 `dsh-plugin` 话题**。
- 「官方仓里的包并不天然比社区包更重要。你可以把本仓库看成一种理念、一份官方示例、一处灵感来源，而不是必须遵守的方向。」

官方既开源了源码，又把「改这份源码」从社区路径里拿掉了。他们要的生态是旁边挂包，不是 fork 回灌。

## 官方扩展面

`docs/architecture.md`：「There is no privileged core to patch: you extend dsh by mounting a plugin beside the others。」

分层（空树往上叠，后层整行替换 `config`，不 deep-merge）：

```text
dsh --profile <name>
  1. 每个 dsh.profile.bundles 的 patch（inbox 先解析安装本身）
  2. 该 profile 的 cordis.patch.yml
  3. $DSH_HOME/cordis.patch.yml
  4. 命令行 --patch，按 argv 顺序
```

| 名词 | 是什么 | 用来干什么 |
|---|---|---|
| Plugin | 导出 `apply(ctx)` 的模块 | 注册 tool、adapter、监听事件 |
| Bundle | 带 `"dsh": { "bundle": { "patch": "..." } }` 的 npm 包 | 可安装的一层配置 + 代码 |
| Profile | `$DSH_HOME/profiles/<name>` | 一次可启动的组合；`dsh plugin` 维护 |
| Patch | YAML：按 `id` 整行覆盖，或 `insert` | 改官方行，或插入你的行 |
| Preset | 一个目录里的 `agent.cordis.yml` | 单会话的人设、工具集、prompt 段 |
| Skill | `<root>/<name>/SKILL.md` | 给模型的可选说明书，不是 session 事件 |
| Capability seam | Service Definition + Provider + Consumer | 换实现、不换工具面 |

`dsh plugin --profile <name> <pnpm 动词>` 会初始化 profile，然后把 `add` / `remove` / `update` 交给该目录的 pnpm。装完后，凡是声明了 `dsh.bundle` 的依赖会进入 `dsh.profile.bundles`。

官方教程里的安装形态（`docs/user/develop/basic/publish.md`）：

```sh
dsh plugin --profile demo add ./hello-plugin
dsh plugin --profile tui add github:deepseek-harness/turtle-ui
dsh --profile demo --dump-config
```

Inbox 名（`@deepseek-ai/dsh-base` 等）永远从**当前这套 dsh 安装**解析。树外包从 profile 的 `node_modules` 解析。这就是「官方更新」的机械路径：换 dsh，inbox 跟着换；你的包还在 profile 里，用 `dsh plugin update` 单独升。

社区已经按这条路交过货，不是纸面设计：

- Discussions #174 `dsh-tool-policy`：`tools/pre-execute` 政策层；补上 `dsh.bundle` 才能进 profile；peer 写成 `>=0.1.0-rc.5 <0.2.0`。
- Discussions #516 会话记忆插件：作者写明「without patching Harness source」；安装命令是 `dsh plugin --profile web add <tarball>`。

GitHub topic `dsh-plugin` 的列表被无关仓污染，本文不引用那个数字。

## 官方同步实际怎么发生

对「我要跟上官方」这件事，官方给的是安装拓扑，不是 fork 工作流。

| 部件 | 官方更新之后发生什么 |
|---|---|
| inbox bundle | 跟**正在执行的** `dsh` 走，不跟 profile 里的旧拷贝走 |
| 恰好等于模板的 `web` / `headless` bundle 列表 | `loadProfile` 会改写成当前模板 |
| 你改过顺序或加过层的 bundle 列表 | 视为用户所有，原样保留 |
| 树外 bundle | 留在 profile `dependencies`；`dsh plugin update` 是 pnpm |
| `$DSH_HOME/profiles/node_modules` | 每次启动按当前安装愈合符号链接 |
| 用户拷贝出去的 preset | **不会**随部署升级自动刷新 |
| 会话日志 / SQLite | 版本不对就拒载，没有迁移 |

所以：

- 产品代码放在你自己的 bundle 里，升官方 = 换 dsh + 跑冒烟。
- 产品代码散在 fork 的 `packages/` 里，升官方 = 整树 rebase，还要消化他们「正确地基优先于兼容」的重命名。

预览阶段没有兼容垫片。插件路径至少把冲突限制在**你的包的 peer 范围**里。Fork 路径把冲突铺到整仓。

## 为什么 fork 会丢掉同步

不是道德选择，是机械结果。

1. **官方不收你的 PR。** 改 `packages/` 的代码回不去上游。你的 delta 会永远留在自己的历史上。
2. **预览仓主动破坏磁盘格式。** `SESSION_FORMAT_VERSION = 0`；旧日志「this build ships no upgrade path」；SQLite `SCHEMA_VERSION` 对不上就抛。Fork 并不能减轻这件事，只会让你同时消化上游格式和自己的补丁。
3. **`adding-a-package.md` 是给本仓贡献者的清单**（`private: true`、改根 tsconfig、进 workspace constraints）。CONTRIBUTING 又说现在不收外部 PR。在官方 checkout 里加 `packages/drama-*`，既不是社区路径，也不是可发布产品。
4. **inbox 解析绑的是安装，不是你的 fork 工作树。** 用户跑 `npx @deepseek-ai/dsh` 时，inbox 来自那份 npm，不是你 fork 里改过的行。除非你连启动器一起重新发布，否则 fork 里的「官方同步」只对自己机器有效。

「跟踪官方源码」和「fork 当产品仓」不是一回事。干净 clone、只 `git pull`、用 `pnpm dsh` 当二进制，产品仍在旁边的 bundle：这是跟踪。在同一棵树上提交短剧代码：这是 fork。

## 三种用法

| 做法 | 官方更新 | 产品隔离 | 适用 |
|---|---|---|---|
| A. 用官方 `dsh`（npm 或干净源码）+ 自己的 bundle / profile | 换安装即换 inbox | 产品在你的仓 | **默认** |
| B. 本机保留干净 `deepseek-harness` checkout，只 pull，不当产品仓 | `git pull` + build | 同上 | 预览期要跑未发布提交时 |
| C. Fork 整个 monorepo，在 `packages/` 里写短剧 | 每次 rebase | 没有 | 只在必须改 loop / 必读 session 事件时 |

A 和 B 都满足「要官方更新」。C 看起来最像二次开发，同步成本最高。

## 插件覆盖哪些业务

`docs/architecture.md` 的「Where new behavior goes」和 `extension-cookbook.md` 的功能表，明确写：**没有一行是改 loop。**

树外能做（官方机制 + 社区已验证）：

- 新工具：`ctx.tools.register(defineTool(...))`
- 新模型提供方：`ctx.llm.registerAdapter`，或 Settings「Add a custom provider」（`dsh-llm-pi-ai`，`openai-completions` + 你的 `baseURL`）
- 单会话人设和工具集：preset + `@deepseek-ai/dsh-persona`
- 长任务：`ctx.jobs.start`，模型面用自带的 `job_*`
- 政策 / 确认：`tools/pre-execute` 的 allow / deny / ask
- 说明书：项目 `.dsh/skills`、`.agents/skills`、bundle 的 `customSkillDirs`、preset 目录里的 skills
- 人机命令、workflow、subagent、MCP（`dsh-mcp-client` 已在 CLI 依赖里，默认不启用任何 server）
- Web 会话节点、独立 UI（听 `session/event`）

树外现在盖不住、或官方写明会疼：

| 需求 | 原因 |
|---|---|
| 新的**必读** session 事件，还要官方 reader 能 resume | 2026-08-10 note：树外事件在官方 reader 下拒恢复；`ignorable: true` 的运行时登记面还没做 |
| 改 turn / step 怎么开关、inbox 怎么领取 | 必须改 `agent-loop`，并改 architecture 地图 |
| 换 SQLite 表结构 | `SCHEMA_VERSION` 不匹配就拒 |
| 经 `dsh-llm-deepseek` 传图片 | 适配器硬拒绝 `UNSUPPORTED_CONTENT` |
| 把 LLM adapter 或 `ctx.jobs` 放进 preset | 官方 note：loop 在 host 面解析 adapter；preset 发根 realm 服务会被拒 |

短剧 v1 要的是：写文件、调 OmniMux、轮询成片、装 skill。全部落在第一张表。不需要第二张表。

## 短剧场景逐条

| 场景 | 走哪条官方缝 | 要不要 fork |
|---|---|---|
| 系列圣经 / 分集 / 分镜落盘 | tools + 工作区文件 | 否 |
| 短剧人设、钩子和集末悬念 | preset persona + `SKILL.md` | 否 |
| OmniMux 当大脑 | 改 `llm-deepseek` 的 `baseURL`，或 Settings custom provider | 否 |
| 生图 / 生视频 | tool + `omnimux tokens exec` + `ctx.jobs` | 否 |
| 整段视频拆解 | tool，走 Gemini 多模态（不要走 deepseek adapter 的图片路径） | 否 |
| 付费前确认 | `tools/pre-execute` → ask | 否 |
| 一句话题材出三集目录 | 上面几件的组合，真源在磁盘 | 否 |
| 自定义「镜头已生成」必读日志类型，还要官方 UI 当一等事件回放 | `SessionEventMap`，树外拒恢复 | 现在不要做；用 `shots.json` |
| 自己发明一种 turn 调度 | `agent-loop` | 否，用 jobs + followup |

「各种业务场景」若是指换题材、换模型、换分发渠道、加确认、加 skill：插件够。  
若是指把短剧状态嵌进 harness 自己的 session 类型系统、改 Web 远程协议：那才是核心工作，而且官方现在不收 PR。

## OmniMux 适配（和 fork 无关）

`dsh-llm-deepseek` 允许 `baseURL`（默认 `https://api.deepseek.com`，否则 `$DEEPSEEK_BASE_URL`）。请求仍按 DeepSeek 文档序列化：

- 顶层 `thinking: { type: enabled \| disabled }`
- `reasoning_effort: high \| max`（不会发 `off`）
- 带 tool call 的历史回传 `reasoning_content`
- 永远 `stream` + `stream_options.include_usage`
- 额外头：`x-deepseek-harness-user-id` / `session-id` / `compact`

多数网关会忽略未知头。会 400 的是 body 里的 thinking 字段。

官方逃生口已经在产品里：Settings → Add a custom provider，协议选 OpenAI completions，填 `https://api.omnimux.ai/v1`。这是 `dsh-llm-pi-ai`，不是改 `llm-deepseek`。

本产品的顺序：先 `thinking: disabled` 打一把 OmniMux；拒字段就走 custom provider。两条都不用 fork。

## 升级怎么做（产品仓）

1. 钉 `dsh` 版本（npm 的 `@deepseek-ai/dsh`，或干净 checkout 的 commit）。本机对照是 `47f9438` / `0.1.0-rc.5`；社区帖已出现公开 `0.1.0-rc.6` 包，升级前要重测。
2. 产品 peer 写成社区同款：`>=0.1.0-rc.5 <0.2.0`，rc 期内当可能每周破。
3. 升官方：换 dsh → `dsh --profile drama --dump-config` → 跑「写系列 + 一镜生成」冒烟。
4. git 装的插件钉 `#<sha>`；`prepare` 要进 profile 的 `allowBuilds`。更稳的是发 tarball / npm，避免在用户机器编译。
5. 不要把用户 preset 当补丁层。官方写明拷贝出去的 preset 不会随升级更新。要改官方行，写 bundle 的 `cordis.patch.yml`，并重写整行 `config`。

失败回滚：卸产品 bundle，或换回旧 dsh。不要回滚官方会话文件到新格式之后。预览期会话不当长期资产；系列真源放在 `series/` 文件里。

## 仍不确定的事

- 首个稳定 tag 之后，session 升级器会不会落地。2026-08-10 note 写升级链推迟到第一次 `v0 → v1`。在那之前按「无迁移」规划。
- 树外 Typert / Web Remote 自挂是否会变成稳定面。#516 作者在问，官方尚未写成教程。短剧 v1 不依赖自定义 Web 节点。
- OmniMux 对 DeepSeek thinking 字段的现场态度。实现时用一次流式 + tool call 冒烟判定，不在本文里猜。

## 延伸阅读

入门：产品页 [deepseek.com/harness](https://www.deepseek.com/harness/en/)，然后 `docs/architecture.md`。  
动手：`docs/user/develop/basic/index.md` → `publish.md`。  
对照社区包装：Discussions #174、#516。  
不要当插件清单：GitHub topic `dsh-plugin`（标签撞车）。

## 对上一版方案的修正

上一版「不要 fork」仍然成立，理由从「升级麻烦」收成官方机制：

- 官方同步 = 消费官方安装的 inbox + 把产品放在 profile 的树外层。
- 干净跟踪上游源码（做法 B）可以保留，当作预览期的 dsh 二进制来源。
- 只有出现「必须改 loop / 必须新增必读 session 事件」时，才重新评估做法 C。

短剧 agent 继续按树外 bundle 做。Harness checkout 保持干净，只 pull，不往里面写产品。
