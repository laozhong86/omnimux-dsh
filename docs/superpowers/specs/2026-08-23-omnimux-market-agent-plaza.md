# OmniMux 插件市场：Agent 搜 / 选 / 召 闭环（Feature Spec）

> 状态：**选项卡 + 持久挂载已编码**（2026-08-23 下午；待 `yarn omnimux:sync omnimux-market` 后窗口 QA。未跑 §9.12/§15，不得对外交付）  
> 插件：`omnimux-market`（已有：技能 / 插件 / 专家 / 连接器 四 tab）  
> 输入：现场审计（`omnimux-market` `src/host.ts` / `src/expert/summon.js` / `src/client.js`）；归档 `archive/omnimux-gallery` 的 `esc_*`；WorkBuddy `recommend-experts` 对照  
> 设计：`product/omnimux-dsh/design.md`；对话内卡片走现有 `tool.call.toolview`（`--dsw-alias-*`）  
> 契约：`docs/contracts/hub.md`、`settings-ui.md`、`ops-entry.md`、`omnimux-dsh/AGENTS.md`

---

## 0. TL;DR

插件市场今天对人是完整货架，对 **dsh Agent 只是技能店**。  
人没指定专家时，会话里的 Agent **不会**去广场搜专家、不会出选项卡、选完也不能接到当前任务上。

本规格只补这一件事：**没挂专家的会话，遇到明显吃专业角色的任务，先去广场搜专家 → 输入区官方 `ask_user_question` 出 2–3 张选项卡让人点 → 选完 `plaza_summon` 把专家身份写进本会话落盘 → 之后每一轮系统提示重挂 SKILL.md。**

- **改现有 `omnimux-market`**，禁止新插件、禁止复活 `omnimux-gallery` 一级页
- P0：迁回专家搜索 / 安装 / 召唤工具；系统提示强制「未挂专家先搜」；人选走输入区选项卡（货架卡故意不渲染，防叠层）；点选后本轮 `plaza_summon`；身份靠磁盘挂载，不靠 `/skill` 手势
- P0 **不碰**官方会话生命周期、不热切预设、不中途改本轮已跑的 system prompt
- **持久化真源**：`$DSH_HOME/omnimux-market/sessions/<sessionId>.json` + 系统提示 `plaza:attached-expert`（order 8）。官方 `/skill` 只注入**当前一步**（`invokedSkillNames` 只扫本轮 claimed 用户消息），不能当会话身份
- 技能链路（`skillhub_*`）保持原样；本轮不扩跨源市场、不把插件/连接器做成同一套主动推荐
- **不改的话：** 广场专家目录对 Agent 等于不存在；专业任务继续由通用 Agent 硬扛，装专家变成人手逛侧栏

---

## 1. 问题陈述

创作者在 OmniMux 开一条**没指定专家**的会话，直接丢「写 PRD / 拆竞品 / 审合同 / 做投研」。  
广场里其实有对口专家（本地 `catalog/` 约 105 条），但会话 Agent 看不到、不会问、也不会召。

证据（2026-08-23 代码审计，不是访谈臆造）：

| 层 | 现状 |
|---|---|
| Agent 工具 | 只有 `skillhub_search` / `install` / `list` / `uninstall` |
| 系统提示 `tool:skillhub` | 只管「找技能必须搜」；只字不提专家 |
| 专家召唤 | 仅侧栏 UI：`POST catalogSummon` → 把 `/技能名` 写进输入框；**不自动发送** |
| 空白会话 | 才切「专家模式」预设；已有内容视为 `locked` |
| 旧能力 | `esc_search` / `esc_install` / `esc_summon` 停在 `archive/omnimux-gallery`，迁市场时没带过来 |

对照：同一套意图在 WorkBuddy 里是「无专家 → 搜候选 → 卡片让人选 → 启用后继续」。OmniMux 缺整条。

不解决的成本：

- 广场专家目录变成橱窗，Agent 永远用不到
- 专业任务质量靠人记得先去侧栏点专家；大多数人不会
- 即使点了，也只是输入框多一个斜杠，当前这一轮已经用通用人格答完了

---

## 2. Goals

1. **未挂专家时，领域任务会先出专家选项，而不是直接开跑。** 内部试用：10 条合成场景里 ≥ 8 条会先调搜索工具。
2. **选项是输入区官方选项卡，不是 markdown 清单，也不是对话里的货架卡。** 最多 3 张 + 一项「不用专家」；人必须点一张或明确跳过。
3. **点选后专家真正进本会话。** 未装先装；`plaza_summon` 写会话落盘；之后每一轮系统提示注入该专家 SKILL.md。可选方案 B 再发一条续任务，但身份不依赖那条斜杠。
4. **已挂专家禁止再推。** 搜索工具读到本会话落盘文件 → `skipped: already-attached`、空 items。
5. **技能链路不回退。** `skillhub_search` 出卡、点卡安装，行为与现网一致。
6. **垂直边界干净。** 不改 hub、不改 Electron 壳、不 import 其它垂直插件；磁盘写只在 `$DSH_HOME/skills`、既有 catalog 安装路径、以及 `$DSH_HOME/omnimux-market/sessions/`。

---

## 3. Non-Goals

| 不做 | 原因 |
|---|---|
| 本轮热切专家：中途改当前 turn 的 system prompt / 预设 | 官方会话生命周期，C 方案另立项（Q2） |
| 复活 `omnimux-gallery` 一级页 / 侧栏 rank | 市场已取代画廊 |
| 把 SkillHub 技能、DSH 插件、连接器并进同一套「主动推荐」 | 技能已有链路；插件安装要重启 Host；连接器写 `cordis.patch.yml` 也要重启。混推会装错东西 |
| 跨源 `market_search`（SkillsMP / ClaudeSkills） | 2026-08-23 另一份调研，P1 另文 |
| Agent 静默启用专家、不经人点选 | 专家与专家团会话只能挂一个；静默会覆盖意图 |
| 文字清单代替 toolview 卡片 | 与技能卡、WorkBuddy 专家卡同一红线 |
| 网页搜索专家目录 | 候选只来自本机 `catalog/`（P0） |
| 改官方 composer 补全、MutationObserver 劫持输入框（除沿用现有 `insertGesture`） | 召唤写框可复用；P0 续任务走「自动发消息」，不再加新的 DOM 旁路 |
| 专家卸载工具 / 连接器 Agent 安装 | 误卸成本高；连接器要重启，不适合对话中途 |
| `--omx-*` 新视觉、ReUI / Tailwind | 沿用现有广场卡片 |

---

## 4. 产品定位与对象模型

### 4.1 一句话

**插件市场对 Agent 必须是「能搜、能让人选、能召进会话」的专家目录，而不只是 SkillHub 技能店。**

侧栏四 tab 对人继续有效。本规格补的是 **对话流里的专家闭环**。

### 4.2 术语（禁止混用）

| 中文 | 代码 | 是什么 | 不是什么 |
|---|---|---|---|
| **插件市场 / 广场** | `omnimux-market` | 四 tab 货架 + 本规格的 Agent 工具 | 不是「应用」货架（`omnimux` Apps） |
| **专家** | `kind=expert` | catalog 一条，可召唤成 `/技能名` | 不是 SkillHub 普通技能 |
| **专家团** | `kind=team` | catalog 一条，同样召唤一个 skill | 不是一次启用多个专家 |
| **技能（SkillHub）** | `skillhub_*` | 在线技能卡，点选安装 | 不是专家 |
| **召唤** | summon | 确保已安装 + 产出手势 + **把身份写进本会话落盘** | 不是只写进输入框，也不是只发一条 `/技能` |
| **挂上专家** | session expert attach | `$DSH_HOME/omnimux-market/sessions/<id>.json` 存在且 skill 仍在盘上 | 不是「skills 目录里装着」、不是 `expert-mode` 预设、不是本轮斜杠手势 |
| **续任务** | follow-up send | 召唤成功后客户端可再发一条带手势的用户消息 | 不是身份真源；没有这条斜杠，下一轮身份仍在 |

### 4.3 和现网三套能力怎么拆

| | SkillHub 技能 | 广场专家（本规格 P0） | DSH 插件 / 连接器 |
|---|---|---|---|
| 数据 | `api.skillhub.cn` | 本地 `catalog/` | SkillHub 插件目录 / `cordis.patch.yml` |
| Agent 搜 | 已有 `skillhub_search` | **新增** `plaza_search` | P1 以后 |
| 人选 | 对话卡片 → 详情 → 安装 | 输入区 `ask_user_question` → 本轮 `plaza_summon` | 侧栏人手 |
| 生效 | 新对话被 skill 工具发现 | **本会话落盘** + 每轮系统提示 `plaza:attached-expert` | 需重启 Host |
| 主动推荐 | 用户要技能才搜 | **未挂专家 + 领域任务才搜** | 不做主动 |

同一条用户消息禁止同时 `plaza_search` 和 `skillhub_search`，除非用户明确既要专家又要技能（极少；默认专家优先，技能等用户再要）。

### 4.4 工具命名

不复用已死的 `esc_*` 对外名（分析器仍把 `esc_search` 映射到已下线的 gallery）。对外统一：

| 工具 | 职责 |
|---|---|
| `plaza_search` | 搜本地专家 / 专家团（可选 tab；P0 默认 `experts`） |
| `plaza_summon` | 按 catalog `id` 安装（若未装）+ 召唤；返回 gesture / skill |
| `plaza_install` | 只安装不召唤（连接器/技能包预留；**P0 Agent 专家路径不要单独调它**，召唤内含安装） |

`skillhub_*` 四件保留，描述里写明：找 **SkillHub 技能** 才用；找专家用 `plaza_search`。

内部实现可以 fork 归档 `createAgentTools`，但注册名必须是 `plaza_*`。`omnimux-analytics` 的 plugin map 同步改掉 `esc_*` → `omnimux-gallery` 那行。

### 4.5 触发策略（产品规则，不是模型随缘）

**何时必须 `plaza_search`（先搜再干）：**

会话 **未挂专家**，且用户任务命中任一：

- 用户口头要专家 / 专家团 / 「找个 XX 专家」
- 明显领域工作：写 PRD / 路线图、竞品、用户研究、法律合同、投研估值、深度调研报告、代码审查（非「随便改一行」）、长文稿/品牌内容操盘

**何时禁止搜：**

- 会话已挂专家（含专家团）
- 闲聊、简单问答、明确只要技能/只要插件
- 本轮已经出过专家卡且用户跳过 / 超时 / 取消
- 搜索 0 条匹配 → **静默继续原任务**，不道歉长文

**已挂专家的判定（P0 真源）：**

`$DSH_HOME/omnimux-market/sessions/<sessionId>.json` 存在，且含 `id` + `skill`。  
`plaza_search` / 系统提示都从这份文件读。`expert-mode` 预设和 `/skill` 手势**不算**挂上。

P0 允许「侧栏召唤没带 sessionId 时漏写一次」；不允许「每条消息都推」。漏写补救：侧栏 `catalogSummon` 必须带当前 `sessionId`。

---

## 5. User Stories

**作为没指定专家的创作者**，我希望把「帮我写产品库 PRD」丢进会话时，Agent 先给我 2–3 个广场专家选项，以便专业人格来写，而不是通用助手直接开写。  

**作为创作者**，我希望选项出现在输入区（名字、领域、一句擅长），而不是一串 markdown id，也不是跟选项卡叠一层的货架卡。  

**作为创作者**，我希望点一张选项后专家被装上，并且**这个会话一直是那个专家**——刷新、下一轮、压缩、不再打 `/技能名` 都还在。  

**作为已经召唤过专家的创作者**，我希望 Agent 别再打断我换人。  

**作为只要 PDF 技能的用户**，我希望仍然走 SkillHub 卡片安装，不被专家推荐抢走。  

**作为点了侧栏专家 tab 的用户**，我希望现有「点卡片写入手势」仍能用；空白会话仍可切专家模式。  

**边界：** 搜不到对口专家 → 不弹空卡，直接干原任务。  
**边界：** 用户说「不用专家 / 跳过」→ 本轮不再推，继续原任务。  
**边界：** 点选安装失败 → 卡片上可见错误；不假装已召唤。  
**边界：** 非空白会话召唤成功 → **不**强行切预设（沿用 `locked`）；身份靠落盘 + 系统提示，斜杠只是可选续任务。  
**反故事：** Agent 自行 `plaza_summon` 不经人点。  
**反故事：** Agent 用 markdown 列表代替选项卡。  
**反故事：** 把「给一段 `/技能` 上下文」当成已挂上专家。  
**反故事：** 把连接器、GitHub 插件当专家推上来。

---

## 6. 界面与交互

### 6.1 侧栏广场（已有，P0 不改信息架构）

四 tab：技能 / 插件 / 专家 / 连接器。  
专家 tab 点卡片 = 现网 `catalogSummon` + `insertGesture`。  
P0 **可以**在召唤成功且来自「对话续任务」通道时走 §7.4；侧栏人手点选 **默认仍只写框**（Q3），避免逛货架时误发一条消息。

### 6.2 对话内专家选项卡（P0：官方输入区选项）

座：**官方 `ask_user_question`**（composer chips）。**不是** `tool.call.toolview` 货架卡。

官方选项只有 `label` + `description`，选中值 = **label 原文**（没有隐藏 id）。约定：

- 一项专家：label 必须以 catalog id 开头，恰好 `id · 中文名`（例：`exp-product-management · 产品管理专家`）
- description = catalog `summary` 一行，禁止模型改写 id
- 最后一项 label **恰好** `skip · 不用专家`
- 单选，禁止 `multi_select`
- 一次最多 3 位专家 + skip（工具侧已截断；模型不得再列其余）
- 搜到结果后**立刻**出选项卡；未得到答案前禁止 `plaza_summon`
- 用户点完：本轮解析 label 里第一个 ` · ` 前面的 id，立刻 `plaza_summon({ id })`。点 skip 则静默干活
- 工具返回 0 条 → 不出选项卡，Agent 静默干活

对话 `plaza_search` toolview **故意 `return null`**（座仍注册，避免 key 丢失）。货架卡会跟输入区选项叠层。

Agent 正文：选项出现后 **最多一句**。禁止 markdown 名单。

侧栏专家 tab 仍是现网货架卡 + `catalogSummon`（带 `sessionId`），与对话通道分开。

### 6.3 召唤成功后用户看到什么

1. 工具短状态：「已持久挂上本会话：{名称}」
2. 身份真源已写盘；**不要求**用户再打 `/技能名`
3. 客户端仍可按方案 B 再发一条续任务（手势 + 原任务摘要），用来立刻接着干；**没有这条消息，下一轮身份也在**
4. 原一轮在出选项后应 **停手**，不要先把 PRD 写完再召

官方证据（不得再把斜杠当持久身份）：

- `packages/skill/tool-skill`：`invokedSkillNames` 只扫**当前 claimed** 用户消息里的 `/skill`
- `agent/pre-step` 注入的 skill-invocation 会 `session.append('user/message')`，但下一轮没有斜杠就不会再注入
- 官方没有「会话挂一个 catalog 专家」字段；`agentPreset.select` / `expert-mode` 只换预设

### 6.4 空态 / 错态

| 状态 | 行为 |
|---|---|
| 0 匹配 | 无卡；Agent 当没这回事继续 |
| 上游 catalog 读失败 | tool 抛错；Agent 一句「广场暂时不可用」然后继续原任务 |
| 安装失败 | 卡上错误；不发续任务 |
| composer 找不到 | 仍自动发消息（走 sessions API / 官方发消息座）；发不出去才回退「手势已写入，请按发送」 |

---

## 7. 业务逻辑

### 7.1 搜索

```text
plaza_search({ query, tab? })
  → tab 缺省 experts
  → 本地 catalog 过滤 title/subtitle/summary/tags/id
  → 只返回 expert | team
  → 上限 3（参数 limit 允许 1–3，默认 3）
  → 带 installed 布尔
  → output.render 必须逐条写出 label=`id · 中文名`（模型只看见这段字，看不见结构化 items）
```

P0 **不** `hub:true` 混 SkillHub。专家目录是本地货。  
坑（2026-08-23）：只写「已搜到 3 位」时模型会编「先用专家分诊流程」，点完也无法 `plaza_summon`。

### 7.2 召唤（内含安装）

```text
plaza_summon({ id, sessionState?, followUp? })
  → 未知 id 抛错
  → kind 不是 expert/team 抛错（连接器拒绝）
  → 未装 → installItem（与侧栏同一 install.js）
  → 返回 { id, skill, gesture, stagePreset, installed }
  → followUp !== false 且来自对话点选 → 走 §7.4
```

`sessionState`：对话点选默认按 **locked**（会话已有内容）。  
`stagePreset=expert-mode` 仅 `blank` 且本机存在专家模式预设文件时返回；客户端点预设芯片沿用现网 `clickPreset`。

### 7.3 系统提示（新增段，order 紧挨 skillhub）

段名 `tool:plaza-experts`，order **209**（先于 `tool:skillhub` 的 210）：

要点必须写死（实施时可英文化，语义不许淡）：

1. 会话未挂专家，且任务明显吃专业角色 → **先** `plaza_search`，**禁止**先把活干完。
2. 已挂专家 / 用户只要技能 / 闲聊 → 不准搜专家。
3. 有结果 → 立刻 `ask_user_question`；label 必须以 catalog id 开头 `id · 中文名`，末项 `skip · 不用专家`；不准 markdown 名单；未得到选项答案前不准 `plaza_summon`。
4. 0 结果或用户跳过 → 静默继续。
5. 找 SkillHub 技能才用 `skillhub_search`；不要双搜。
6. `plaza_summon` 会把专家持久挂在本会话（落盘 + 之后每轮系统提示）。`/skill` 只注入一步，不得当成挂载。
7. 点选后客户端可能再发续任务，Agent **不要再手写一遍任务**。

### 7.4 续任务发送（方案 B）

归属：`omnimux-market` 客户端在 `plaza_summon` / `catalogSummon` 成功后执行。

优先序：

1. 若官方 `sessions` / composer 暴露「提交当前输入」API → 用它（把 gesture + 模板写进框再 submit）
2. 否则：沿用 `insertGesture` + 合成一次 Enter / 官方 send 按钮点击（必须测 rc 版本，失败走 3）
3. 失败回退：框里已有 `/{skill} `，toast「已召唤，请按发送继续」

**禁止** Host 工具自己伪造用户消息灌进日志（除非官方 tools 有受支持的 `sendUserMessage` 座——有再用，没有就只走客户端）。

身份**不依赖**这条续任务。没有斜杠，只要落盘在，下一轮系统提示仍带专家。

### 7.5 会话级持久挂载（P0，身份真源）

```text
plaza_summon / catalogSummon(sessionId)
  → write $DSH_HOME/omnimux-market/sessions/<sessionId>.json
     { id, skill, title, kind, attachedAt }

每步 systemPrompt.assemble({ agent })
  → plaza:attached-expert (order 8)
  → sessionId = agent.session.header.id ?? agent.session.id ?? agent.id
  → 读落盘 + $DSH_HOME/skills/<skill>/SKILL.md（截断 24_000 字）
  → 空串则组装时丢掉

plaza_search
  → 同一 sessionId 已有落盘 → skipped: already-attached，items=[]
```

sessionId 只允许 `[A-Za-z0-9._-]`，防路径穿越。  
Host **不**改官方 session event 白名单，**不**热切 preset。

### 7.6 和技能安装的互不干扰

| 用户说 | 走 |
|---|---|
| 找个写 PRD 的专家 | `plaza_search` |
| 找个 PDF 技能 / SkillHub | `skillhub_search` |
| 「专家」+「技能」都要 | 先专家卡；技能等下一句 |
| 侧栏逛专家 | UI summon，P0 默认不自动发送（Q3） |

---

## 8. 存储与红线

- 专家安装路径与现网一致：`$DSH_HOME/skills/<slug>` + catalog 声明的 git/local 源
- 会话挂载：`$DSH_HOME/omnimux-market/sessions/<sessionId>.json`（只含 id/skill/title/kind/attachedAt）
- 连接器仍写 profile `cordis.patch.yml` 托管段；**P0 Agent 不装连接器**
- 不 copy 用户素材；不持 `OMNIMUX_*`；不 import hub
- `plaza_*` 失败必须抛错，禁止 `{ ok:false }` 当成功
- 生产同步：`yarn omnimux:sync omnimux-market` + `yarn omnimux:restart`（市场包若仍不在默认同步名单，实施时 **必须写入** `sync-to-app` / `sync-stable` / `dev-doctor`，这是已知风险）

---

## 9. Requirements

### P0 Must

1. Host 注册 `plaza_search` / `plaza_summon`（可选 `plaza_install` 但不作为专家主路径）
2. 系统提示 `tool:plaza-experts`（§7.3）；`tool:skillhub` 加一句「专家走 plaza，不要双搜」；另注册 `plaza:attached-expert`（order 8）
3. `plaza_search` 有结果 → 立刻 `ask_user_question`；对话 toolview **不渲染货架卡**
4. 点选 → 本轮 `plaza_summon`；同一 `summon.js` / `install.js`；禁止第二套安装逻辑
5. 召唤成功 → 写会话落盘（§7.5）；方案 B 续任务可选，**身份不以斜杠为准**
6. 抑制：落盘已挂、用户跳过、0 命中
7. 侧栏专家 tab 现网行为保持；blank 仍可切专家模式
8. `skillhub_*` 回归：搜技能仍出卡可装
9. 单测：搜过滤 tab；连接器拒绝召唤；未装先装；0 命中空 items；prompt 段存在
10. 分析 mapper：去掉 gallery `esc_*`，改认 `plaza_*` → `omnimux-market`
11. 默认同步名单纳入 `omnimux-market`（若尚未）
12. App 窗口 QA：无专家 +「写一份 PRD」应出输入区选项卡；点选后落盘出现、后续轮次系统提示含该专家且不再出卡；「找 PDF 技能」仍走 SkillHub

### P1 Should

1. 侧栏人手召唤也可选「召唤并继续」（Q3 若拍「侧栏也自动发」则升 P0）
2. `plaza_search` 可选 `connectors` / `skills` **浏览**（仍不主动推荐、连接器安装仍提示重启）
3. 跨源技能搜索 `market_search`（另文，不进本闭环）
4. 召唤失败的重试按钮
5. 会话挂载卸下（换专家 / 用户明确不要）走 UI 或工具；P0 不提供 `plaza_detach`

### P2 Later

1. 方案 C：宿主支持会话中途热切预设 / 注入专家 skill 再续 **当前 turn**（独立决策 + 官方生命周期调研）
2. composer `@专家/` 补全
3. 专家卸载工具
4. 一次推荐混排技能+专家

---

## 10. Success Metrics

本地产品，先定性 + 手动量，不编造用户数。

| 指标 | 成功线（内部试用） |
|---|---|
| 无专家 + 领域任务，先出输入区选项卡再干活 | ≥ 8 / 10 条合成场景 |
| 出卡后 Agent 仍先写完整答案 | = 0（P0 验收红线） |
| 点选后落盘存在，且下一轮系统提示含该专家 SKILL.md（即使没有 `/skill`） | 100% 点选成功路径 |
| 已挂专家时再次推卡 | = 0 |
| 「找技能」误出专家卡 | = 0（抽样 5 条） |
| 0 命中时弹空卡 / 长篇道歉 | = 0 |
| 侧栏专家点选仍只写框（若 Q3=否） | 回归通过 |

---

## 11. 与现有插件

| 插件 | 关系 | MUST NOT |
|---|---|---|
| `omnimux-market` | **本规格唯一改动面** | 拆新包、复制 gallery 一级页 |
| `omnimux` hub | 无 | 专家目录进 hub、持钥 |
| `omnimux-gallery` | 已 DEPRECATED | 再挂侧栏、再注册 `esc_*` |
| `omnimux-analytics` | 改 tool→plugin 映射 | 继续把搜索算到 gallery |
| 官方 sessions / composer | 方案 B 发消息要适配 | 改官方包源码；热切预设（P0） |
| `omnimux-products` 等垂直 | 无直接依赖 | 垂直插件里再写一套专家推荐 |

---

## 12. 对照：WorkBuddy vs OmniMux P0

| | WorkBuddy（对照，不是要抄宿主） | OmniMux P0 |
|---|---|---|
| 搜 | `search_plugins` type=expert | `plaza_search` 本地 catalog |
| 选 | `suggest_plugin_install` 卡片，最多 3 | `ask_user_question` 输入区选项，最多 3 + skip |
| 启用 | 用户点一张；不能静默换 | 点选项后本轮 `plaza_summon`；不能静默召唤 |
| 续任务 | 专家进当前会话技能集 | 落盘 + 每轮系统提示；斜杠续任务只是可选加速 |
| 已选专家 | `expertAlreadySelected` 即停 | §4.5 抑制 |

不在 OmniMux 宿主上接 WorkBuddy 的 MCP。行为对齐，实现走 dsh tools。

---

## 13. 拍板（本规格默认建议）

实施前老板需签 Q1–Q4。未签不算开工。

| ID | 问题 | 默认建议 | 谁拍 |
|---|---|---|---|
| Q1 | P0 是否包含「主动搜专家」（无专家+领域任务） | **是**。若否，规格降级成「用户开口才搜」，价值腰斩 | 老板 |
| Q2 | 续任务 A 只写框 / **B 自动发下一条** / C 热切本轮 | **P0 = B**；C 另开宿主议题 | 老板 |
| Q3 | 侧栏点专家要不要也自动发消息 | **否**。逛货架 ≠ 要把当前对话续上 | 老板 |
| Q4 | 工具名 `plaza_*` vs 恢复 `esc_*` | **`plaza_*`**，避免分析器绑死已下线 gallery | 老板 |
| Q5 | 「领域任务」列表是否够（PRD/法律/投研/调研/代码审查/内容操盘） | 先用 §4.5 清单；过宽再收 | 产品默认 |
| Q6 | Host 读不到「已挂专家」时是否允许误推一次 | **允许一次，同会话抑制** | 工程 |
| Q7 | 自动发送找不到官方 API 时，DOM 点发送算不算 P0 | **算 P0 回退**；两边都失败才 toast | 工程 |
| Q8 | `omnimux-market` 是否进默认同步名单 | **必须进**，否则 QA 永远对不上生产 | 运维 |

---

## 14. 节奏（拍板后）

1. **M0 契约**  
   Q1–Q4 签字；确认官方 composer 提交办法（Q7 spike，不超过半天）。
2. **M1 工具 + prompt**  
   `plaza_search` / `plaza_summon` + 系统提示；单测绿。不改 UI 也能用文字调（但验收仍禁文字列表当产品）。
3. **M2 对话卡 + 方案 B**  
   toolview；点选召唤；自动发续任务；跳过/0 命中/已挂专家。
4. **M3 回归 + 同步**  
   技能卡不回退；侧栏专家不回退；sync 进生产 profile；App 窗口 QA 十二条（§9.12）。

未做 M3 窗口 QA，不得声称交付。

---

## 15. 验收清单（Given / When / Then）

- Given 新会话未挂专家，When 用户说「帮我写产品库 PRD」，Then Agent **先** `plaza_search`，输入区出现 ≤3 张选项 + skip，且 **没有**先吐完整 PRD、**没有**货架卡叠层。
- Given 选项已出，When 用户点「exp-… · 产品通」，Then 本轮 `plaza_summon`，未装则安装，写入 `$DSH_HOME/omnimux-market/sessions/<id>.json`；下一轮系统提示含该专家，即使用户不再打 `/技能`。
- Given 用户点 `skip · 不用专家`，When 同一轮继续，Then 不召唤、不落盘，Agent 自己干活。
- Given 会话落盘已挂专家，When 用户再丢领域任务，Then `plaza_search` skipped，不再出选项卡。
- Given 用户说「找个处理 PDF 的技能」，Then 走 `skillhub_search`，不出专家卡。
- Given catalog 无匹配，Then 无空卡，Agent 直接干活。
- Given 侧栏专家 tab 点一张（Q3=否），Then 只写入手势，不自动发送。
- Given `plaza_summon` 一个连接器 id，Then 抛错，不写 MCP 行。

---

## 16. Open Questions（非阻塞写进工程笔记）

- 官方 `sessions` 有没有受支持的 submit API？（Q7 spike）
- `expert-mode` 预设在 OmniMux.app 生产机是否一定存在？（召唤 `stagePreset` 依赖文件；没有则只靠 skill 手势）
- 自动发送的那条用户消息，要不要在 UI 标「由广场召唤代发」以免用户以为自己手滑？建议 P1 加一条 caption。
