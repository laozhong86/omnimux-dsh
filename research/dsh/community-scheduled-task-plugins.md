# 社区调研：DeepSeek Harness 自动化定时任务插件

> 调研日期：2026-08-16 ｜ 调研对象：官方仓库 deepseek-ai/deepseek-harness 的社区生态
> 本文件是未跟踪的调研笔记（仓库无 research 目录；`.agents/notes/` 为带格式门的决策记录树，不适用）。可随时删除或移入其他位置。
> 数据来源：GitHub GraphQL/REST（gh CLI）、npm registry、mydsh.dev 网站抓取，均为一手来源。

## 结论（TL;DR）

**有，而且社区相当活跃。** 官方仓库社区已分享至少 **10+ 个**自动化定时任务方向的插件/壳层项目，集中在 GitHub Discussions 与 GitHub 仓库搜索（`dsh-plugin` 生态）。同时，**官方仓库自身也在 PR #2519（feat/npm-public，合并于 2026-08-13）中落地了一手定时能力 `@deepseek-ai/dsh-schedule`（v0.1.0-rc.5）**——社区讨论（如 #1600 催更定时任务）与官方回应几乎同期出现。

## 一、官方一手能力（非社区）：@deepseek-ai/dsh-schedule

- 位置：`packages/schedule/schedule/`，npm 包名 `@deepseek-ai/dsh-schedule`，v0.1.0-rc.5
- 定位：「Agent-scoped durable after, at, and fixed-rate reminders over the session event log」——面向 Agent 会话的持久化提醒/定时工具
- 三个工具：`schedule_create` / `schedule_list` / `schedule_delete`（见 `docs/tool-catalog.md`）
- 能力边界（README）：`after_seconds` 延时、绝对 `at` 时刻、`every_seconds` 固定间隔（下限 5 分钟）；状态由 Session 事件日志持有；只装在插件加载后新建的 live root Agent 上
- 配套文档：`docs/subsystems/schedule.md` / `.zh.md`、tool-catalog、config-catalog
- 结论：官方原生定时能力已存在，但范围克制（Agent 会话内提醒），**没有**社区插件常见的「Web 侧边栏任务面板 / shell 命令动作 / 系统 crontab 管理 / 多任务调度 UI」等能力——这正是社区插件的差异化空间。

## 二、社区插件清单（全部为非官方社区项目）

按 `gh search repos "dsh-plugin cron"` 与 `"deepseek-harness 定时"` 检索结果整理，去重后 14 个相关项目：

| 项目 | 作者 | 一句话能力 | 安装方式 | 来源 |
|---|---|---|---|---|
| **dsh-polling** | cnyac | cron 轮询/定时任务做成真实会话，自然语言创建 + 防重入/重启补跑/归档会话自动重建，Web UI；npm v0.1.1，MIT | `dsh plugin --profile web add dsh-polling`（或 `github:cnyac/dsh-polling`） | Discussion [#1006](https://github.com/deepseek-ai/deepseek-harness/discussions/1006)、[repo](https://github.com/cnyac/dsh-polling)、[npm](https://www.npmjs.com/package/dsh-polling) |
| **dsh-schedule-tasks** | uluckystar（MyDSH 社区） | 标准 5 段式 cron 调度 + shell/通知触发动作 + Web 侧边栏管理面板（新建/启停/删除/手动触发），状态持久化 | 见 mydsh.dev/plugins | Discussion [#1600](https://github.com/deepseek-ai/deepseek-harness/discussions/1600)、[repo](https://github.com/uluckystar/dsh-schedule-tasks)、[mydsh.dev/plugins](https://mydsh.dev/plugins) |
| **dsh-delayed-task** | m-guo-2 | 持久化「延时决策」：页面关闭后冷启动恢复原会话，注入目标历史决策事件；reassess-only 与限权授权双模式，16 测试 + CI + 真 E2E | `dsh plugin --profile web add github:m-guo-2/dsh-delayed-task` | Discussion [#1214](https://github.com/deepseek-ai/deepseek-harness/discussions/1214)、[repo](https://github.com/m-guo-2/dsh-delayed-task) |
| **dsh-cron** | omdsh-dev | 模型与人类均可调用的调度：按计划向 Agent 会话注入 followup/inject | `dsh plugin add` | [repo](https://github.com/omdsh-dev/dsh-cron) |
| **dsh-schedule** | csiroqa | 定时任务 + 状态监控：cron 自动触发 Agent 执行，`/status` 与设置页仪表盘 | `dsh plugin add` | [repo](https://github.com/csiroqa/dsh-schedule) |
| **dsh-cron-panel** | a792883583 | Web 侧边栏任务面板：管理 DSH 与系统 crontab 任务，自然语言创建 + 执行日志 | `dsh plugin add` | [repo](https://github.com/a792883583/dsh-cron-panel) |
| **dsh-cron-parse** | ZhijiangTang | cron 表达式解析/人话化/未来运行预览（工具类，非调度器） | `dsh plugin add` | [repo](https://github.com/ZhijiangTang/dsh-cron-parse) |
| **dsh-routines** | Jesse-njx | 定时 Agent 例程：cron 跑 prompt，把摘要投递到「你所在的地方」（文件摘要/chatnode 投递，无人值守安全） | `dsh plugin add` | [repo](https://github.com/Jesse-njx/dsh-routines) |
| **dsh-scheduler** | yangyongzhen | 调度器（描述未公开，按名称归类） | `dsh plugin add` | [repo](https://github.com/yangyongzhen/dsh-scheduler) |
| **dsh-automation** | titanwings | 让 Coding 任务按计划在全新 Agent 会话中运行，DSH Web 或 Agent 都可创建/管理 | `dsh plugin add` | [repo](https://github.com/titanwings/dsh-automation) |
| **dsh-daily-digest** | JingHao-Leon | 每日技术摘要 demo：RSS → 中文 Markdown 摘要，headless + cron-ready（示例项目） | `dsh plugin add` | [repo](https://github.com/JingHao-Leon/dsh-daily-digest) |
| **dsh-backup** | xiaoyuyu6420 | 一键备份 + 定时自动备份 + sha256 轮转（定时能力附属） | `dsh plugin add` | [repo](https://github.com/xiaoyuyu6420/dsh-backup) |
| **dsh-wechat-bridge** | zxz9988 | 微信桥接（iLink/ClawBot），带流式回复/扫码登录/定时任务/网页抓取 | `dsh plugin add` | [repo](https://github.com/zxz9988/dsh-wechat-bridge) |
| **dsh-wallpaper-rotator** | liceses | 壁纸定时轮换（交叉淡化），定时能力为附属 | `dsh plugin add` | [repo](https://github.com/liceses/dsh-wallpaper-rotator) |

## 三、桌面壳层（SHELL 级，非插件，但自带定时任务）

| 项目 | 作者 | 说明 |
|---|---|---|
| **DshCockpit** | Lxiayu | macOS 桌面驾驶舱：托盘常驻 + 壳层定时任务（间隔/每天 + 通知）、成本中心、全局 Quick Ask、Ctrl+K 会话搜索、自动更新；★3；dmg 未签名（需 `xattr -dr com.apple.quarantine`） |
| **dsh-companion** | william-jin-cmu | 常驻桌面助手：全局唤起、定时自动化、快捷回复、插件市场 |
| **deepseek-harness-desktop** | xxccdl | Electron 壳层封装 dsh web：记忆查看、电脑控制、桌面设置、定时任务、快捷对话、用量条 |

## 四、社区渠道盘点

- **GitHub Discussions 是主要分享阵地**：官方仓库 Discussions 共 1782 帖；`(schedule OR cron OR timer OR 定时 OR 定时任务)` 标题/正文检索命中 376 帖，定时任务方向的头部帖子即上文 #1006/#1214/#1600。
- **mydsh.dev 是非官方社区生态索引**（Discussion [#1563](https://github.com/deepseek-ai/deepseek-harness/discussions/1563) 建站帖），其 /plugins 页（HTTP 200 实测可访问）带有 `scheduler`、`cron`、`automation-tools` 分类标签，收录 dsh-schedule-tasks 等插件。
- **官方口径**：这些均为社区/第三方项目；dsh-delayed-task 讨论原文明确写「社区插件，不是 DeepSeek 官方组件」。官方 npm 范围（`@deepseek-ai`）下除本次新增的 `dsh-schedule` 外，没有定时类包。

## 五、给使用者的建议

- 想要**开箱即用的 Web 管理面板 + cron**：优先 `dsh-schedule-tasks`（MyDSH）或 `dsh-cron-panel`（需 `dsh plugin add` 后自验）。
- 想要**与 Agent 会话深度绑定的定时/延时**：官方 `@deepseek-ai/dsh-schedule`（after/at/every ≥5min）或社区 `dsh-delayed-task`（冷恢复）、`dsh-cron`（注入 followup）、`dsh-polling`（轮询即会话）。
- 想**无人值守跑 Coding 任务**：`dsh-automation`。
- 想要**系统级桌面体验 + 定时通知**：DshCockpit / dsh-companion / deepseek-harness-desktop（非插件，壳层）。
- 注意：社区插件质量参差（多为个人项目、star 数低），安装前建议核对 README 与测试情况；`dsh-delayed-task` 是目前唯一公开了测试数（16 tests + CI + E2E）的项目。

## 来源

- GitHub Discussions：#1006、#1214、#1563、#1600（deepseek-ai/deepseek-harness）
- GitHub 仓库搜索：`q='dsh-plugin cron'`（11 命中）、`q='deepseek-harness 定时'`（9 命中），2026-08-16 执行
- npm：`dsh-polling@0.1.1`、`@deepseek-ai/dsh-schedule@0.1.0-rc.5`（`npm view` 验证）
- 官方仓库源码：`packages/schedule/schedule/`、`docs/tool-catalog.md`、`docs/subsystems/schedule.md`；引入提交 = PR #2519（feat/npm-public，2026-08-13 合并）
- mydsh.dev/plugins（HTTP 200，含 scheduler/cron/automation-tools 标签）
