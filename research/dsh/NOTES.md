# 消化笔记

对照 `SOURCES.md`。只把过两关的主张写进主文档：同一事实在两处官方文本重复，或能预测官方对新问题会怎么答。

## 材料怎么过筛

| 主张 | 过关数 | 处理 |
|---|---|---|
| 扩展官方路径是挂插件，不是改 `packages/` | 产品页 + architecture + CONTRIBUTING + 扩展 cookbook | 主文档 |
| 官方暂不收外部 PR，要你做 `dsh-plugin` | CONTRIBUTING 中英 | 主文档 |
| inbox bundle 跟运行中的 dsh 走，树外 bundle 跟 profile 的 pnpm 走 | CLI reference + publish 教程 + app-boot | 主文档 |
| 开发者预览，会破坏兼容，会话格式无升级路径 | README + AGENTS.md + persistence | 主文档 |
| 树外可以做 tool / adapter / preset / skill / job / hook | architecture 表 + cookbook + 两个社区插件 | 主文档 |
| 新的必读 session 事件，官方 reader 拒恢复 | 2026-08-10 note + persistence catalog | 主文档，标为硬边界 |
| `packages/README` 写 Product stable API | 只出现在包组表 | 主文档标矛盾：这是仓内分类，不是 SemVer 承诺 |
| GitHub topic `dsh-plugin` 有大量真插件 | topic 页 1513 仓，大量撞车 | 不写数量；只用 Discussions 里自述安装的两个 |

## 矛盾

1. **「稳定 API」vs「会破坏兼容」**  
   `packages/README.md` 把几乎所有组标成 `Product — stable API`。根 README 与 `AGENTS.md` 写死开发者预览、破坏兼容、会话格式无承诺。两边都是官方。主文档采用：stable 是相对 POC/Support 的仓内标签；对外仍按预览处理，每次升级当 breaking 测。

2. **「不改源码就能扩展」vs「新 session 事件要改 map」**  
   产品页与 architecture 都说挂插件即可。同一份 architecture 又说新的模型可见输入必须扩 `SessionEventMap`。2026-08-10 note 写明树外事件在官方 reader 下无法 resume。主文档两边都留：普通业务走插件；要新的必读日志类型才碰核心。

3. **DeepSeek adapter 自称 OpenAI-compat，又写死 thinking 字段**  
   README 允许自定义 `baseURL`。序列化仍发 `thinking` / `reasoning_effort` / `reasoning_content`。主文档：可以试 `thinking: disabled`；网关拒字段就用 Settings 里的 custom provider（`dsh-llm-pi-ai`），不要 fork `llm-deepseek`。

## 大纲（主文档）

1. 这篇文档回答什么  
2. 先纠正「二次开发 = fork」  
3. Harness 是什么（预览、Cordis、分层）  
4. 官方扩展面（plugin / bundle / profile / preset / skill / seam）  
5. 官方同步实际怎么发生  
6. 为什么 fork 会丢掉同步  
7. 三种用法对照  
8. 插件覆盖哪些业务、盖不住哪些  
9. 短剧 agent 逐条对照  
10. 升级与钉版本  
11. 仍不确定的事  
12. 延伸阅读  

每节只引用上面过关的来源。
