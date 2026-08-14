# 官方意图对齐：OmniMux 是产品，dsh 是借来的 harness

日期：2026-08-14。  
依据：[EXTENSION.md](EXTENSION.md) 的扩展面事实 + 官方中英产品页。  
本文件只定站位，不写实现。

## 官方在做什么

中文产品页把受众写死了：面向全球 **Harness 开发者** 的预览，不是面向短剧创作者的应用商店。

他们的公式：

> Agent = Model + Harness  
> 模型是 Agent 的灵魂。Harness 给予 Agent 理解环境、使用工具，并在真实场景中持续工作的能力。

Cordis 内核「只负责插件的加载、卸载和依赖关系，**不承载 Agent 的具体能力**」。官方自己的标准 / PTC / 极简 / 创造模式，是这套内核上的展示组合，不是唯一合法业务。

生态意图（CONTRIBUTING + README）：

- 不收外部 PR，不要改官方仓。
- 社区包和官方包平级。
- 发现通道：`dsh-plugin` 话题、Discussions、Discord、how-to。
- 官方仓是理念和示例，不是必须遵守的产品方向。

一句话：他们要的是「别人在旁边挂能力」，不是「别人来帮他们写短剧」或「别人 fork 出垂直发行版」。

## 我们怎么对上号

你们已经定了：核心业务是 OmniMux；短剧 agent 只是用 dsh 落地，少写一套 agent 运行时。

套进官方公式：

```text
官方：  Agent = Model              + Harness
我们：  Agent = OmniMux（灵魂面） + dsh（借来的环境/工具/会话/UI）
                 │                      │
                 聊天 / 生图 / 生视频     loop / jobs / skills / Web
                 社交 / 计费 / 密钥
                 │
                 短剧只是一层很薄的领域工具 + skill
```

短剧不是第二个产品内核。它是「OmniMux 接到 dsh 上之后，领域文件怎么写」的示范。少写的是 loop、session、sandbox、审批、Web，不是少写 OmniMux。

## 拆成两包，才不破坏生态

| 包 | 给谁 | 在官方生态里说什么 | 和 OmniMux 的关系 |
|---|---|---|---|
| `dsh-omnimux` | 所有 dsh 用户 | 「不 fork，把 OmniMux 网关接到 dsh：模型 + 图 + 视频」 | **对外主资产** |
| `dsh-drama`（或 preset） | 短剧工作流 | 「一个用 OmniMux 的领域示例：系列文件 + 分镜工具」 | 内部落地 / 可选垂直层 |

只发短剧包、把 OmniMux 藏在里面：官方社区看不懂，也带不来网关用户。  
只做 OmniMux 包、短剧全靠 bash：能少代码，但系列状态会散在聊天里（见 EXTENSION）。

借力官方通道时，推的是第一包。第二包在 Discussions 里当 worked example，不要当主标题。

## 分发现状（不要把意图当成货架）

官方**没有**插件市场、审核上架、应用内货架。现货发现通道只有：

- `dsh plugin add <npm | git | tarball>`（安装协议）
- GitHub 话题 `dsh-plugin`（产品页 “Community plugins” 也指向这类入口）
- Discussions / Discord / how-to

「官方希望社区插件生态」是真的。「肯定会有上架位、上了就有流量」是推断，仓库和文档里没有承诺。自部署今天能做的是打 profile + bundle 给别人装；官方 `dsh web` 仍拒绝 `--host 0.0.0.0`，不能当成现成的局域网/公网发行版。

## 借力官方，但不消费官方

做：

- 独立仓，MIT，`dsh-plugin` 话题。
- `dsh plugin add <npm 或 tarball>`，peer 钉 `>=0.1.0-rc.5 <0.2.0`。
- Discussions 发插件帖（对照 #174 / #516 的写法：不改 harness 源码、给出安装命令、说明测过的 rc）。
- 写一篇 how-to：Custom provider 指到 `https://api.omnimux.ai/v1`，再挂视频 job。CONTRIBUTING 点名欢迎这种文章。
- Discord 答「怎么接非 DeepSeek 网关 / 怎么跑长视频任务」。
- 密钥继续走 `omnimux tokens exec`，不要教人把 `sk-` 写进 dsh 聊天。

不做：

- 不发「DeepSeek 短剧版」或改过的 `dsh` 发行包。
- 不改 inbox 行的语义让别人的 profile 悄悄坏掉。
- 不在官方仓提功能 PR。
- 不把 Drama Center / 蚁小二 / GeeLark 塞进 `dsh-omnimux`。
- 不在 dsh 上面再叠一套自研 loop（那正好违背「少写 agent 代码」和官方「内核不承载能力」）。

官方社区的人是 harness 开发者。他们能转化成 OmniMux 的，是需要多模型 + 生视频的人。短剧创作者不在这条通道里；那条获客不要指望 Discussions。

模型面官方就不是 DeepSeek 专用：Settings 可加 catalog 提供方（Anthropic、OpenAI、Bedrock、Vertex、Azure、Codex）和 custom provider（任意 OpenAI-compat 网关）。`dsh-omnimux` 应把 OmniMux 注册成一条可切换路由，并允许用户另接别的提供方。不要把短剧包写成只认 DeepSeek。

## 短剧层写多薄

dsh 已经有：loop、session、jobs、skill 加载、审批瀑布、Web。

短剧层只保留无法用 skill 表达的副作用：

- `series/` 文件约定（圣经、分集、shots.json）
- 调 OmniMux 的生成 / 拆解工具（实现应复用 `dsh-omnimux`，不要复制）
- 一篇短剧 skill（钩子、集末悬念、竖屏）

人设用 preset，不改官方 standard 的源文件。

## 成功标准（和官方意图对齐）

生态向：一个没听说过短剧的 dsh 用户，能 `dsh plugin add` 之后用 OmniMux 打一轮带 tool 的对话，并提交一个视频任务。  
业务向：你们自己用同一套运行时，一句话题材写出 `series/` 并出一镜。  
失败相：为了短剧 fork 了 harness，或为了短剧重写了一套 agent 框架。两条都同时伤害官方生态和 OmniMux 主业。
