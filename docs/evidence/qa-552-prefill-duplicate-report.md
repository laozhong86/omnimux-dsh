# QA-552 独立验收：预填 prompt 重复

- **验收对象**：`7b1764659c6001a9d626a953f84a54cc41e2ee40`
- **前置**：`b7f8afa`、`e4fca92`
- **范围**：`plugins/omnimux-inspiration/src/client/composer-inject.js` 的 Lexical/contenteditable 预填通道；不发送、不改产品源码、不物化/同步环境。
- **结论**：**不通过（Engineer 路由）**。补丁确实修复了一个可控的“双写”回归，但将 `execCommand(...) === true` 直接作为写入成功，未作异步回读/重试或失败报告；因此在实际 Lexical 命令被接受却未提交到编辑器状态的情况下，函数会报告预填成功而丢失整条 prompt。该风险与本次“仅有一条 skill 命令 + 空行 + 一份正文”的验收目标直接相关。45120 真机也未能证明该 commit 在运行。

## 根因与截图解释

### 已证实的重复根因（高置信）

`composer-inject.js` 旧版在 contenteditable 路径调用 `execCommand('insertText', false, value)` 后立刻执行 `composerWriteSucceeded()`。Lexical 的 DOM 同步可以在微任务之后才到达：同步回读仍为空，旧代码随即走 `field.textContent = value` + input fallback；随后 Lexical 将已接受的命令再写入，形成 `value + value`。

这准确解释截图中的内容形状：第一份正文中的命令与正文粘连/层次受编辑器 DOM 序列化影响，而第二个纯文本命令、空行、及完整正文来自后续的命令提交；重复的完整正文是两个独立写通道竞争，而不是 `buildReplicationPrompt()` 构造了两份 prompt。

`replication.js:94-98` 仍只生成：

```text
/video-deconstruct

完全复刻原视频脚本和画面，仅将原视频中的商品替换成我的商品、如有口播内容需结合我的商品进行调整（没有则不需要出现口播），同时视频不需要出现字幕，原视频有出镜人物的话，新视频也需要有。复刻后的新脚本的时长需控制在时间范围内。
```

该构造满足唯一 skill token + 空行 + 一份约束正文，且不含 `inspiration_id`；附件归会话 attachment。

### 本提交的实际变化（高置信）

`composer-inject.js:146-147` 保存 `execCommand` 返回值；返回严格 `true` 时立即返回，避免 fallback。拒绝（`false`）或异常才用 `textContent` fallback。修复范围仅两文件，`git diff --check` 无输出。

## 红绿证据

### 新增测试不是仅靠 mock 结论

`composer-inject.test.js:107-130` 用独立的“接受命令后，在微任务才追加 DOM”的 fake execCommand 表达了本 bug 的 API/事件时序：调用后先返回 `true`，然后 `queueMicrotask` 才模拟 Lexical reconcile。它断言：

1. 只调用一次 `insertText`；
2. 微任务结算后文本严格等于一份 prompt；
3. prompt 出现一次；
4. 未派发 fallback input event。

这个 oracle 不是复述实现：它从用户可见的单份完整 prompt 导出，且包含旧代码不会同步暴露的延迟提交时序。

### 红：新测试在未修复源码失败

在临时目录取 `e4fca92:composer-inject.js`，配对执行 `7b17646` 的两条新测试：

```text
node --test --test-name-pattern='accepted delayed|insert command rejects' ...
pass 1, fail 1
actual:   prompt + prompt
expected: prompt
```

失败发生在 `does not fall back to textContent after an accepted delayed insert command` 的严格字符串断言，证实它能杀死旧双写实现，而非人为制造绿灯。

### 绿：当前提交

```text
pnpm --filter omnimux-inspiration test
172 tests, 170 pass, 0 fail, 2 skip
```

其中新增的 accepted-delayed 和 rejected-fallback 两项均通过。

```text
pnpm verify:stages && pnpm check:package-files && pnpm verify:tools
```

三项均通过（Stage 10/10、12 个插件 files 规则、工具契约扫描）。

## 阻断性发现：`true` 不是完整写入证明

### F1 — 高优先级：接受的 `execCommand` 可造成静默丢预填

- **位置**：`plugins/omnimux-inspiration/src/client/composer-inject.js:146-147`
- **触发序列**：Lexical/contenteditable 的 `execCommand('insertText', ...)` 返回 `true`（命令被浏览器接受/可执行），但编辑器未把该操作提交到可观察的编辑器状态，例如 editor 状态/selection 已失效、composition/reconciliation 丢弃该 mutation、或宿主命令在该时刻未生效。
- **实际行为**：函数直接返回 `true`，`prefillReplicationPrompt()` 回报 `{ ok:true, via:'prefill' }`，不会调用 fallback、不会异步回读、不会重试、更不会返回 `composer-rejected`。用户只会看到空内容或旧草稿，而 CTA 被上游视为成功。
- **为什么现有保护没有覆盖**：`composerWriteSucceeded()` 在 accepted 分支完全不执行；`prefillReplicationPrompt()` 仅在 `setComposerValue()` 同步返回 false 时失败。现有新增测试恰好将 accepted 命令安排为必然在微任务成功追加，未覆盖“accepted 但不提交”的反例。
- **影响**：虽不再重复，但不能证明“唯一一条完整 prompt”存在；这是相同 CTA 的数据完整性回归，不能接受为完整交付。
- **建议工程修复**：保留 `true` 后禁止立即 fallback 的原则，但把结果变为 pending：在一个有界的、事件/微任务驱动的 Lexical 回读窗口内确认 `getComposerText(field) === value`（且只出现一次）；未确认则返回 `composer-rejected`/受控错误，而非再直接写 `textContent`。只有经项目确认安全时才考虑幂等、精确替换的单次重试。新增至少三条测试：accepted-delayed success、accepted-no-commit -> rejected、accepted-existing-draft selection replacement -> exact one prompt。

## 范围审查

- **命令 + 正文混合**：`replication.js` 的固定 `/${REPLICATION_SKILL}\n\n${REPLICATION_PROMPT_BODY}` 通过既有 `replication.test.js`（“only /video-deconstruct plus user constraint paragraph”）；当前插件测试也通过。新重复测试用相同的 command + 两换行 + 文本形状，覆盖主要截图字符串。
- **selection 与已有草稿**：源码在 `composer-inject.js:137-141` 调 `selectAllChildren(field)` 再 insert，意图为整字段替换；但新增测试没有 fake selection、也没有“已有草稿 + accepted delayed insert”端到端证明。因此不能确认用户已有草稿时一定仅留下目标 prompt，也不能把该点判为通过。
- **同一 CTA 多次轮询/重复附加**：`prefillReplicationPrompt()` 在找到 field 后仅写一次（:228-248）；`replicate-to-chat.js:184-189` 的 module-level exclusive lock 防止并发 CTA 排队，现有插件回归包含 `second concurrent click returns busy and does not queue`。在同一次 orchestrator 调用中，未见 prefill 轮询重复追加。
- **附件、新会话、库 Tab/画布、不发送**：`replicate-to-chat.js:206-286` 先创建官方新会话、将 attachment 绑定返回 sessionId、reveal 再 prefill；已有 172 测试中的 #552 red-line、fallback attachment、never clicks send、canvas/library 保护均通过。此提交未改这些文件，未发现本提交引入的退化证据；但这不能替代真实 UI 验收。
- **同形风险扫描**：本仓 `execCommand('insertText')` 仅另见 `plugins/omnimux/src/client/composer-envelope.js:58`。它仍无返回值/回读验证，但用于 UI Context Envelope 的提交拦截，而不是本 CTA 的预填路径；本次不扩范围修改，记录为未解决的相似风险。

## 构建与真机证据

### 构建

```text
pnpm --filter omnimux-inspiration run build
ERR_MODULE_NOT_FOUND: Cannot find package 'esbuild'
```

worktree 本地 `node_modules` 缺失。依据约束，没有安装依赖或修改/破坏共享 node_modules；这是环境阻断，非已归因的产品源码失败。

### 45120 真机

- 直接读取 `http://127.0.0.1:45120/` 得到 `401 dsh web authentication required`，不能以 curl 做页面验收。
- 已按要求使用 ego-browser 试图打开同一地址；浏览器操作在 60 秒超时、无 snapshot/截图输出。没有重试、没有启动替代服务器、没有注入临时代码，也没有复用 modal-complete 证据。
- 当前 45120 无可追溯证明承载 `7b17646`：本 worktree 未 build/物化，且用户前置信息已说明端口承载版本不能关联该 commit。

因此：**没有真实页面通过证据，也没有截图。** 真机层为交付阻断，不能由单测替代。

## 测试报告

| 项目 | 结果 |
|---|---|
| 总插件测试 | 172 |
| 通过 | 170 |
| 失败 | 0 |
| 跳过 | 2（既有 legacy 替换项） |
| 旧源码红测 | 1 failed / 1 passed（预期，证明新防重测试有效） |
| 静态 gates | `verify:stages`、`check:package-files`、`verify:tools` 全通过 |
| 构建 | 阻断：本 worktree 缺 `esbuild` |
| 45120/ego 实机 | 阻断：认证端点 + ego 60 秒导航超时，且不可关联目标 commit |
| 覆盖估计 | 已变更分支的高覆盖；真实 Lexical/selection/实际页面为未覆盖 |
| Routing Decision | **Engineer**（F1 源码行为问题）；真机证据另为 release blocker |

## 工程回传建议

请工程师在不恢复同步 fallback 的前提下，补“accepted 但未 commit”的受控失败/验证逻辑和上述三项测试；然后在可构建并物化 `7b17646`（或后续修复 commit）的 45120 Dev App，用 ego-browser完成一条 CTA：保留灵感缩略附件、库 Tab、画布；不发送；截图中 composer 必严格为一个 `/video-deconstruct`、一个空行、一个完整约束段。QA 需对该新工程修复作为本重复 bug 的第 2 轮回归复验。
