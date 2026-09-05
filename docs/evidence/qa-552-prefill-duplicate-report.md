# QA-552 第 2 轮独立验收：预填 prompt 重复

- **验收对象**：`efbfec50449208c82a8ae8994b0ebc84d9039a70`（前置 QA 报告提交：`c64eb0f116886feca57d97dd652eabcfd58d6fa1`；工程初修：`7b17646`）
- **工作树**：`/Users/x/Desktop/Project/dsh-plugin/product/omnimux-dsh-wt-replicate-dismiss-reversal-552`
- **范围**：仅审查与验证 `plugins/omnimux-inspiration/src/client/composer-inject.js` / `.test.js`；不改产品源码、不发送、不启动替代服务器、不物化或同步公共环境。
- **轮次限制**：这是本重复 Bug 的 **第 2/2 轮 QA**。本报告不触发第 3 轮；剩余环境和真实渲染风险只记录。
- **结论**：**代码级 F1 已修复；整体交付仍为 BLOCKED，不得宣称 App PASS。** 目标插件单测和适用静态门禁通过，且新增的“accepted but never commits”测试在 `c64eb0f` 红、在目标提交绿。构建因缺 `esbuild` 阻断；45120 无可追溯承载证据且本轮 ego-browser 导航在 40 秒超时，故无真实 Lexical/页面证据。

## 需求与代码逐项核验

| 验收点 | 代码审查结论 | 证据 |
|---|---|---|
| F1：`execCommand() === true` 但不提交不能误报成功 | **PASS（代码级）** | `prefillReplicationPrompt()` 在 `setComposerValue()` 后通过 `waitForComposerCommit()` 精确确认 `getComposerText(field) === prompt`；100 ms / 10 ms 默认窗口超时返回 `composer-rejected`，而非 `{ok:true}`。见 `composer-inject.js:102-110,257-269`。 |
| accepted 后不能 fallback / 重写 | **PASS（代码级）** | `setComposerValue()` 对严格 `true` 立即返回，且后续等待只读、不 retry、不 fallback；`textContent` 仅在 `false` / throw 或同步已失败时写入。见 `:152-172`。 |
| 单一命令 + 空行 + 一份正文 | **PASS（纯构造与受控注入）** | `buildReplicationPrompt()` 固定返回 `/${REPLICATION_SKILL}\n\n${REPLICATION_PROMPT_BODY}`；回读从宽松 `includes('/video-deconstruct')` / `includes('inspiration_id')` 改为完整字符串严格相等。见 `replication.js:84-98`、`composer-inject.js:88-90`。 |
| 延迟提交只写一次 | **PASS（受控时序）** | accepted-delayed 测试只观察一次 `insertText`、一份完整 prompt、零 fallback input event；旧版会在同步 DOM 为空时 fallback，造成双写。 |
| 已有草稿 selection replacement 后延迟提交 | **PASS（受控时序）** | 测试模拟 `selectAllChildren(field)` 后微任务提交，严格确认旧草稿不残留且只留目标 prompt。 |
| 轮询不会追加 | **PASS（代码级）** | `waitForComposerCommit()` 只有 `getComposerText()`；循环不写 DOM、不发 event、不再调用 `execCommand`。 |
| `false` / throw fallback 不制造本类双写 | **PASS（单元）** | 两个分支仅走 `textContent` + 单 input event；accepted 分支不会再进入该 fallback。 |
| 用户既有草稿、附件、库 Tab/画布、不发送 | **未见本提交退化；页面层未验证** | 本提交仅两文件，未改 `replicate-to-chat.js`。既有插件回归涵盖 official new session、attachment、library/canvas red lines、never send；但不能替代真机。 |

## 红绿回归证据

### 红：目标测试能杀死 F1 的旧实现

在临时目录使用 `c64eb0f:plugins/omnimux-inspiration/src/client/composer-inject.js`，配对目标提交的 `composer-inject.test.js`，执行：

```text
node --test --test-name-pattern='accepted command never commits|accepted delayed full-composer' ...
pass 1, fail 1
```

失败测试为 `returns composer-rejected when an accepted command never commits`：

```text
actual:   { ok: true, via: 'prefill' }
expected: { ok: false, error: 'composer-rejected' }
```

因此该测试不是仅凭 mock 复述新实现：它使第 1 轮 F1 的“accepted 但未提交仍成功”旧行为稳定失败。

### 绿：目标提交

```text
node --test src/client/composer-inject.test.js src/client/replication.test.js
29 pass, 0 fail, 0 skip

pnpm --filter omnimux-inspiration test
176 tests | 174 pass | 0 fail | 2 skip（既有 legacy 替换项）

pnpm verify:stages && pnpm check:package-files && pnpm verify:tools && git diff --check
PASS
```

静态门禁实际结果：Stage 10/10、12 个插件 package files 清单、Agent tools 契约扫描均通过；`git diff --check c64eb0f..efbfec5` 无输出。

## 精确回读与 100 ms 边界审查

1. **正向改进**：删除基于 skill token 或 `inspiration_id` 的 `includes` 判定是必要修复。此类部分匹配会将“旧草稿 + 片段命令”、重复 prompt 或不完整正文错误认定为成功；当前完整字符串 equality 能把这些情况受控报告为 `composer-rejected`，不会再通过另一写通道补写。
2. **真实 Lexical 等价性尚无证据**：contenteditable 回读优先使用 `innerText`，后备 `textContent`（`composer-inject.js:74-81`）。真实 Lexical 的段落序列化可能带尾随换行、`\r\n`，或与目标 `\n\n` 不同的 DOM-to-text 表示；在可见内容正确时，严格 equality 会将其判为 `composer-rejected`。本轮 fake 仅令 `textContent` 恰好等于目标字符串，不能证明真实段落、空行和 `/video-deconstruct` token 的 `innerText` 表示严格相等。
3. **100 ms 是受控失败边界，但没有性能证据证明其足够**：窗口有确定上限（默认 100 ms、10 ms 间隔）并且超时不会重写，故不会回归截图中的双写；然而测试仅覆盖微任务提交和永不提交，未覆盖真实 Lexical 的 10–100 ms、刚超过 100 ms、后台节流或重渲染延迟。它应被视为“防双写且显式失败”的安全策略，不是已证明的真实编辑器成功率。
4. **迟到提交的行为**：超时后不会产生第二写或第二轮 command，故不会重复；如果首次 accepted command 在 100 ms 后才显示，函数/上游会报告 `sendManual`，但迟到内容仍可能出现在 composer。这是可观察的失败恢复风险，必须由目标环境验证，不能由单测宣称已解决。

这些是 **BLOCKED 的真实环境/兼容性风险**，不是本轮在当前源码中已经复现的新增产品缺陷；按两轮上限只报告，不新增第 3 轮。

## 构建与实机层

### 构建：BLOCKED

```text
pnpm --filter omnimux-inspiration run build
ERR_MODULE_NOT_FOUND: Cannot find package 'esbuild'
[ERR_PNPM_RECURSIVE_RUN_FIRST_FAIL]
```

`plugins/omnimux-inspiration/package.json` 已声明 `esbuild` 为 devDependency；当前 worktree 缺 node_modules。遵守约束，本轮没有安装依赖、没有破坏共享 node_modules，也没有绕过构建门禁。

### 45120 / ego-browser：LIVE BLOCKED

按要求仅一次只读尝试现有 `http://127.0.0.1:45120/`，未点 CTA、未修改草稿、未发送、未启动替代服务。`ego-browser` 在 40 秒内没有产生 pageInfo、snapshot 或 screenshot，进程被 harness 超时终止。此前已知的 401/无可追溯版本承载问题仍未获得相反证据。

此外，当前未合并 worktree 不得物化到公共 45120；现有 45120 也没有证据载入 `efbfec5`。因此不得将 HTTP、mock、其他版本或此处的单元测试称为 App/真实 Lexical 通过。没有 evidence bundle 或截图。

## 测试报告

| 项目 | 结果 |
|---|---|
| 本轮目标单测 | 29 passed / 0 failed / 0 skipped |
| 完整 inspiration 插件测试 | 176 total / 174 passed / 0 failed / 2 skipped |
| F1 旧提交红测 | 1 failed / 1 passed（预期） |
| 适用静态门禁 | PASS：`verify:stages`、`check:package-files`、`verify:tools`、diff check |
| 构建 | BLOCKED：本 worktree 缺 `esbuild` |
| 实机 / 真 Lexical | LIVE BLOCKED：45120 不可验证目标 commit，ego-browser 无 snapshot/screenshot |
| 估计覆盖 | 写入分支高；真实 Lexical DOM 序列化、实际时间边界、UI 交互未覆盖 |
| Routing Decision | **Known Issues / release-blocked**；F1 无需退回 Engineer，本 Bug QA 两轮已用尽 |

## 唯一可执行下一步（需要环境授权/证据）

由具备环境所有权者提供一个**与 `efbfec5`（或后续合入 SHA）可追溯关联的、已装依赖的隔离 L2 runtime**，并允许按 `docs/contracts/plugin-qa.md` 使用 ego-browser 进行一条真实 CTA 验收。证据必须包含 task-space id、实际 L2 URL、snapshot/DOM、截图、commit、task/DSH_HOME 与清理记录；同时读取真实 composer 的 `innerText` / `textContent`，确认其与唯一 `/video-deconstruct\n\n<完整正文>` 的比较语义。未具备此环境授权/证据前，整体不得交付 PASS。
