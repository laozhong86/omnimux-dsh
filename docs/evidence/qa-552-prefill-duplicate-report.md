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

## 2026-09-05：授权 L2 真实 CTA 补充（HEAD `7b67f4d`）

> 这是授权后的隔离 L2 live gate，不是 45120 的物化后验收。它不重开既有代码级重复 Bug QA 轮次；它记录新发现的真实 CTA 阻断。

- **实际 L2 URL / task space**：`http://127.0.0.1:44202/` / ego-browser task space `476`（标题 `DSH Local Build`）。
- **来源关联**：`.l2-dev.env` 记录 `TOPIC=replicate-dismiss-reversal`、`PLUGIN=omnimux-inspiration`、`COMMIT=7b67f4d`、`SOURCE=<本 worktree>/plugins`；Host PID `15622`、watch PID `15792` 仍运行。
- **隔离 fixture**：通过已认证 L2 UI 同域 Host API 创建本地记录 `qa552-live-fixture`（标题 `QA-552 isolated inspiration fixture`；`https://example.invalid/qa-552-live-fixture`；无媒体、无云写入、无真实用户草稿）。该记录位于 task 的 `DSH_HOME`，供清理时删除。
- **A（仅灵感库、空会话、真实 CTA）**：先通过官方 UI 创建 `session-bdc04d83-3a50-4546-b2cd-5604bb110c46`，打开灵感库 Local Tab，hover 后点击真实 `.omnimux-inspiration-overlay-cta-btn.primary`。初检约 `446 ms`，再观察 `1 s`：active id 未变；`window.__omnimuxAttachments.getSnapshot()` 仍 `[]`；真实 contenteditable 的 `innerText`/`textContent` 均空；Send 禁用；库仍开但 workbench tabs 仍仅 `omnimux-inspiration:library`，未取得 split/uncollapsed 会话。UI 一度显示 `Preparing replication…`，随后无成功状态/无可见错误。
- **判定**：A **FAIL（源码/运行时缺陷，回传主理人）**。此路径未满足新官方会话 id、附件、精确 Lexical prompt 或 split 的任一必要条件；不以 `includes` 作判断，直接读真实 DOM/text 和 attachment snapshot。无发送行为。
- **B（先画布、再库点击）**：**NOT RUN**。遵循“浏览器异常/失败只诊断一次，禁止盲重试”边界；A 已在第一次真实 CTA 暴露前置 release blocker，B 无法建立其共同的“新会话 + 附件 + prompt”基线，故不反复点击。
- **完整 evidence bundle**：`docs/evidence/qa-552-live/live-qa-report.json` 和 `docs/evidence/qa-552-live/A-before-cta.png`、`A-after-cta.png`、`A-settled-fail.png`。截图已确认不包含 token 或用户真实草稿。
- **GIF**：未生成。真实 CTA 无可验证成功状态，生成“成功演示”会误导；且本任务不授权 push/PR 发布。

## 测试报告

| 项目 | 结果 |
|---|---|
| 本轮目标单测 | 29 passed / 0 failed / 0 skipped |
| 完整 inspiration 插件测试 | 176 total / 174 passed / 0 failed / 2 skipped |
| F1 旧提交红测 | 1 failed / 1 passed（预期） |
| 适用静态门禁 | PASS：`verify:stages`、`check:package-files`、`verify:tools`、diff check |
| 构建 | BLOCKED：本 worktree 缺 `esbuild` |
| 授权 L2 live CTA | **FAIL**：真实 CTA 未创建新 session、未附加、未预填，不能达到 Split |
| 实机 / 真 Lexical | **FAIL**：真实 Lexical DOM 为空；不是 45120 或其它 revision |
| 估计覆盖 | 写入分支高；真实 CTA 新会话、附件、Lexical prompt、画布保活尚未通过 |
| Routing Decision | **Engineer（仅回传主理人）**：#552 合并前 L2 gate FAIL；不改源码、不联系工程师 |

## 历史结论 → 当前 #552 official-session seam 状态（2026-09-05）

本文件上半部分是旧的“预填 prompt 重复”第 2/2 轮 QA 历史记录；它不能替代当前 official-session seam 的独立验收。

当前目标为 `b70143c0ec9ebc8b4889e6200f338ce223071dae`，实际 L2 为 `http://127.0.0.1:44202/` / ego task space `476`，加载产物 `plugins/omnimux-inspiration/lib/client.js` SHA-256 为 `53ec6a41a038c605c031a6df7a41de375b40bdb8f2a2d69193e35555604fd1c0`。代码与回归层已验证 official `sessions.list` seam 注入、`current` + `byId[current].blank === true` 确认、same-id blank reuse、seam 存在时禁用 attachment fallback、action dispatch 后立刻 split reveal、失败 zero-write；focused 41/41、插件 178 pass / 2 skip、`verify:stages` 和 inspiration build 均绿。

但当前真实 L2 A 场景仍 **FAIL**：在 `qa552-live-fixture` 上 hover 后只点击一次真实 `.omnimux-inspiration-overlay-cta-btn.primary`，2.5 秒后显示“无法打开新会话，请手动点「新会话」后重试”；无官方 blank target、无 session tree row、attachment 仍 `[]`、真实 contenteditable 的 `innerText` / `textContent` 都为空、Send 未点、库仍开、canvas 未触碰，且未变为 split。官方侧栏新会话 UI 和工作区添加流也无法在此 L2 状态产出 session target；安装 Host `workspaces.startSession()` 在无可解析 target 时 `sessions.clear()`，与观察一致。

完整当前证据与报告：`docs/evidence/qa-552-live-resolved/report.md`、`A-live-state.json` 和同目录截图。结论为 **Engineer / 主理人路由：L2 release gate FAIL，不得宣称 App PASS**。下一步是修复/准备 L2 official workspace/session lifecycle，使按钮驱动 action 产出 `current` 且 `byId[current].blank === true`，随后从干净隔离 L2 复跑 A/B/C、live busy 与真实 Lexical exact-text 验收；不得用公共 45120、HTTP 200、其它 revision 或物化后状态替代。

## 唯一可执行下一步（需要源码修复后再验收）

工程师需从隔离 L2 对真实 CTA 的实际运行路径诊断：为什么官方新会话 UI 不产生可由 `sessions.list` 确认的 blank target。修复后由主理人再授权一次干净 L2 场景，按 A 与 B 全量复测，须保留真实 session id、attachment snapshot、Lexical exact text、tabs/画布 snapshot 和视觉证据。L2 Host/watch 保留，**不得**以公共 45120、HTTP 200、其它 revision 或物化后状态替代本门禁。
