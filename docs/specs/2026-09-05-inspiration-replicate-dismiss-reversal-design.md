---
title: "灵感库一键复刻：会话交接与草稿保护"
id: "spec-inspiration-replicate-dismiss-reversal"
type: "spec"
status: "accepted"
authority: "L2"
date: "2026-09-05"
subsystem: "omnimux-inspiration"
issue: 552
supersedes:
  - "2026-09-03-inspiration-one-click-replicate-prd.md"
  - "2026-09-04-inspiration-one-click-replicate-design.md"
---

# 一键复刻：会话交接与草稿保护

本文件是 #552 当前产品与实现约束。历史 PRD 和设计中的会话启发式、长提示词、DOM 编辑器写入与关闭灵感库方案均由本文件替代。执行状态与验证版本记录在 `docs/evidence/`，不由规格宣告测试通过。

## 产品结果

点击卡片、预览或详情中的「一键复刻」后，执行一次官方「新会话」动作，展开中间会话栏，并在官方最终选中的空白会话准备一条灵感附件及下面的完整提示词。停在可编辑状态，等待用户发送。

- 灵感库 Tab 保留，不调用 `closeTab`、`closePanel` 或打开画布。
- 已存在的画布 Tab、节点、边及视口由用户控制。
- 不创建项目、文件夹或工作区，不调用 workflow 建项目链路。
- 不自动发送、不写剪贴板、不在点击时安装 skill，也不要求先选择商品。
- 卡片「查看」只打开预览；三个复刻入口共享同一编排器。

## 官方目标会话

任意当前状态都必须执行官方新会话动作。插件通过官方按钮及折叠菜单触发，不直接调用 `sessions.create`。

官方动作可以创建会话，也可以复用一个合法空白会话；因此目标 ID 不必与点击前不同。插件不得因为点击前的当前会话已经 blank 就跳过动作或提前确认成功。存在多个空白会话时，必须等官方动作最终选定目标，不能把旧 current 当作结果。

会话身份及 blank 状态来自官方 `sessions.list`。标题、消息 DOM 长度、欢迎文案和附件 active ID 都不能替代官方确认。缺失目标、动作失败或超时应提示失败；不向旧会话或 `default` 回退写入。

## 安全准备

目标会话的 `conversation.input.dock` 消费一次性意图。该官方 session-scoped slot 在 blank Hero 和有内容会话的 InputZone 中都会渲染；`conversation.composer.dock` 在 Hero 中不渲染，不可用于此消费者。

消费者订阅意图变化，以唤醒已挂载的 composer，并核对目标 session ID。草稿通过官方 `useInput` 读取，预填通过同一会话的 `inputActions.setDraft` 完成，不查询或修改全局 DOM 编辑器。

- 目标已有未发送草稿：提示保护，文本与附件均不得改变。
- 成功：同一官方目标具有精确 prompt 和所选灵感附件；只写一次。
- 附件满或添加失败：提示失败，不能留下阻断下次重试的系统预填草稿。用户解除附件限制后可再次点击。
- 目标尚未挂载、意图过期或被替换：不允许延迟的旧 composer 写入，释放 busy 状态。
- 并发点击：模块锁拒绝第二次请求，不排队制造多次写入。

展开会话栏使用现有 workbench 的 `setConversationCollapsed(false)` 与 `setFocus('split')`。关闭详情 Modal 仅用于露出会话，不关闭一级库页。会话切换完成后的布局也必须满足可见性要求。

## 精确提示词与附件

`buildReplicationPrompt` 输出以下文本，命令和正文之间恰好两个换行；不追加元数据或额外步骤：

```text
/video-deconstruct

完全复刻原视频脚本和画面，仅将原视频中的商品替换成我的商品、如有口播内容需结合我的商品进行调整（没有则不需要出现口播），同时视频不需要出现字幕，原视频有出镜人物的话，新视频也需要有。复刻后的新脚本的时长需控制在时间范围内。
```

灵感身份放入附件：`sourcePlugin: 'omnimux-inspiration'`、`kind: 'inspiration'`、`entityId: row.id`、`extension: 'INSPIRATION'`，以及 `metadata.inspiration_id/source_url/source_platform`。附件调用必须带已确认的目标 session ID，并读取添加结果。重复附件视为已存在；满额或无效载荷不能被单向事件广播伪装成成功。

## 验收

| 场景 | 必须观察的结果 |
| --- | --- |
| A：仅灵感库 | 真实 CTA 后目标 composer 有精确 prompt 和一个匹配附件；库页保留、会话栏可见、没有发送。 |
| B：灵感库与画布共存 | A 的结果成立，两个 Tab 保留，画布节点、边、视口不变。空画布证据不能声称覆盖有内容画布。 |
| C：空白会话已有 draft | 真实 CTA 提示保护，draft 与附件前后完全相同。 |
| 多个 blank | 官方异步选择 A、点击前 current B 时，只接受最终的 A；折叠菜单未触发实际动作前不得成功。 |
| 附件失败后重试 | 首次失败不会污染草稿；解除限制后再次点击可以准备成功。 |
| 异步切换 | 有内容会话到新空白目标时不写旧 composer，目标会话栏最终可见。 |

先执行相关单测、构建及 slot/stage 门禁，再在专属 L2 用内置浏览器驱动真实 CTA。证据记录提交 SHA、源树、服务端版本、页面及 DOM 前后状态。历史截图和单测通过不能代替当前版本浏览器结果。合并后的共享 Dev App 交付走统一物化入口与 `verify:live`，由来源任务协调窗口；生产不在本任务范围内。
