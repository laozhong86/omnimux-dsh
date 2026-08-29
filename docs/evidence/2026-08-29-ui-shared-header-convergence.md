# Issue #200 一级 Stage 页头收敛 — 验收证据与 L2 真机验收阻塞说明

- 日期：2026-08-29
- Worktree：`omnimux-dsh-wt-ui-shared-header-convergence-200`
- 分支：`agent/omnimux-ui-shared-header-convergence-issue-200`
- 结论：**静态与产物级验收全部通过；L2 真机（ego-browser）验收因环境依赖债阻塞，需在 PR 合入并物化后补做。**

---

## 1. 已通过的验收（有证据）

### 1.1 共享库消费（唯一真源）

全部 10 个插件的一级 Stage 页头已改为消费 `dsh-ui-kit` 的 `PageHeader`：

| 插件 | Stage 文件 |
|---|---|
| omnimux | `src/client/AppsStage.jsx` |
| omnimux-accounts | `src/client/AccountsStage.jsx` |
| omnimux-assets | `src/client/AssetsStage.jsx` |
| omnimux-inspiration | `src/client/InspirationStage.jsx` |
| omnimux-products | `src/client/ProductsStage.jsx` |
| omnimux-publish | `src/client/PublishStage.jsx` |
| omnimux-analytics | `src/client/AnalyticsStage.jsx`（已删除自建 `components/StageHeader.jsx`） |
| omnimux-workflow | `src/client/WorkflowStage.jsx`、`src/client/projects/ProjectLibraryPage.jsx` |
| omnimux-market | 4 轨 Tab 头部 |
| omnimux-clip | 宿主外壳（vendor 边界见 §1.4） |

### 1.2 构建产物级验收（每个插件 `lib/client.js`）

产物级验收说明：`dshUk-PageHeader-title` 计数为 3，是 `dsh-ui-kit` 因 `sideEffects: true`
将全部 CSS 注入 bundle 的结果，**因此该计数不能直接证明"该插件渲染了 PageHeader"**。
下表「是否渲染 PageHeader」列以**源码**为准（§1.1 已逐一列出消费 `PageHeader` 的 Stage 文件）。

| 插件 | 源码渲染 PageHeader | 旧自建标题类 | `font-size: 20px` |
|---|---|---:|---:|
| omnimux | ✅ AppsStage | 0 | 2 |
| omnimux-accounts | ✅ AccountsStage | 0 | 3 |
| omnimux-assets | ✅ AssetsStage | 0 | 2 |
| omnimux-inspiration | ✅ InspirationStage | 0 | 2 |
| omnimux-products | ✅ ProductsStage | 0 | 2 |
| omnimux-publish | ✅ PublishStage | 0 | 2 |
| omnimux-analytics | ✅ AnalyticsStage（删自建 StageHeader） | 0 | 2 |
| omnimux-workflow | ✅ WorkflowStage + ProjectLibraryPage | 0 | 2 |
| omnimux-market | ✅ 4 轨 Tab 头部 | 0 | 2 |
| omnimux-clip | ➖ 豁免（见下） | 0 | 2 |

**omnimux-clip 豁免依据**：`.omnimux-clip-stage-header` 是画布内**绝对定位的浮层操作区**
（`position:absolute; top:8px; right:8px`），其 heading 在 `standalone` / `canvas` 两种模式下均
`display:none !important`，并非一级 Stage 页面标题栏。依 `docs/contracts/openreel-vendor-contract.md`
保持宿主外壳原形态，已在 `styles.js` 对应行加 `/* exempt-ui08 */` 并注明原因。

产物内 `dshUk-PageHeader-*` 的实际 CSS（与裁定逐项一致）：

```css
.dshUk-PageHeader-pageHeader {
  padding: 12px 20px;
  min-height: 56px;
  box-sizing: border-box;
  border-bottom: 1px solid var(--dsw-alias-border-l1);
  -webkit-app-region: no-drag;
}
.dshUk-PageHeader-title {
  font-size: 20px;      /* 裁定值 */
  font-weight: 600;     /* 裁定值 */
  line-height: 28px;    /* 裁定值 */
  color: var(--dsw-alias-label-primary);
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.dshUk-PageHeader-subtitle {
  font-size: 13px; font-weight: 400; line-height: 18px;
  color: var(--dsw-alias-label-secondary);
}
```

### 1.3 三处真源一致性（消除 16/18/20/22px 四档并存）

| 真源位置 | 值 | 证据 |
|---|---|---|
| `design.md` §4.2 | `20px / 28px` weight 600 | `design.md:134` |
| `dsh-ui-kit` `PageHeader.module.css` | `20px / 600 / 28px` | `.title` 规则块 |
| `dsh-ui-kit` `StageHeader.module.css`（兼容别名） | `20px / 600` | `.title` 规则块 |
| 门禁 UI10 白名单 | 含 `20` | `scripts/scan-ui-gates.mjs:39` |

### 1.4 静态门禁（`node scripts/scan-ui-gates.mjs`）

| 规则 | 迁移前 | 现在 |
|---|---:|---:|
| UI08 私建 `*-stage-title/-header` 类 | 29 | **0** |
| UI09 一级 Stage 手写 `<h1>` | 8 | **0** |
| UI10 非标字号 | 13 | **0** |

### 1.5 回归门禁

- `pnpm test`：**1038 项 pass / 0 fail**（exit 0）
- `pnpm verify:stages`：10 个 Stage + 8 个 StageStore 全部符合契约
- `pnpm check:boundaries`：1557 个文件依赖与运行时边界校验通过

### 1.6 契约红线零侵入

- `plugins/omnimux-clip/src/client/openreel/`：**0 处改动**（`docs/contracts/openreel-vendor-contract.md`）
- `plugins/omnimux-workflow/src/canvas/`：**0 处改动**（画布技术债隔离）

---

## 2. L2 真机验收阻塞说明（未通过，需后续补做）

### 2.1 阻塞事实

- 生产 App（`127.0.0.1:45120`）加载的是**物化副本**，当前仍为旧 bundle：
  `~/.dsh` 与 `~/.omnimux` 下 `omnimux-assets/lib/client.js` 中 `PageHeader` 出现 **0** 次。
- 生产物化入口 `scripts/sync-to-app.sh` 有硬门禁：要求分支为 `main`、工作区干净、HEAD 对齐 `origin/main`。
  当前分支 `agent/omnimux-ui-shared-header-convergence-issue-200` **尚未合入**，故物化被正确拒绝。
  （这是设计如此，不是缺陷；AGENTS.md 亦规定「仅在 PR 确认 MERGED 后方可物化」。）

### 2.2 尝试过的 dev 环境路径及其阻塞原因

已按 `docs/contracts/dev-pipeline.md` 创建 dev 环境 `ui-header-qa`（L2 端口 44200，link 到本 worktree 的 `omnimux-assets`），
插件 link 成功，但 **Host 进程启动失败**，日志：

```
SyntaxError: The requested module '@deepseek-ai/dsh-llm' does not provide an export named 'CallId'
  at .../dsh-plugin-subscriptions/lib/index.js:2
```

根因（已定位，与本次改动无关）：dev 环境把 `@deepseek-ai/dsh-llm` 解析到了 **harness 开发仓源码**
（`/Users/x/Desktop/Project/Github/deepseek-harness/packages/llm/llm/lib/index.js`），
而生产 App 使用的是发行版 `dsh-llm@0.1.1-rc.2`。两者 `CallId` 导出不一致。

**为什么不由本次任务修复**：该问题属于 dev 环境依赖解析债，修改它会超出 Issue #200（UI 收敛）的授权范围，
且可能影响其他在跑的 dev 环境。已如实记录，未绕过、未伪造证据。

该 dev 环境已清理（`dev-env.sh rm ui-header-qa`），未影响既有的 `assets-drawer-mock`（44202）。

### 2.3 补做条件

PR 合入 `main` 后，在主仓 `git pull origin main`，然后：

```bash
pnpm sync                      # 物化到生产 profile（会先 build kit + 刷新 pnpm store + sha256 校验）
# 刷新浏览器 / 重启 App
pnpm verify:live <stage>       # 在 127.0.0.1:45120 执行 L2 真机验收
```

### 2.4 `pnpm verify:live` 前置缺口

`package.json:59` 的 `"verify:live": "node scripts/agent-live-qa.mjs"` 指向的脚本**在仓库中不存在**（`ENOENT`）。
因此即使环境就绪，`pnpm verify:live` 也无法执行，需先补齐该脚本（建议作为独立 Issue）。

---

## 3. 遗留债（不属于本次收敛范围）

`pnpm test:ui` 当前 exit 1，剩余均为**批次 D 既有违规**，与页头收敛无关：

| 规则 | 剩余 | 说明 |
|---|---:|---|
| UI01 | 22 | 裸 `<button>` / `<select>`（assets 8、inspiration 4、omnimex 3、clip 5 业务层等） |
| UI02 | 94 | JSX 内联业务样式（已修复 `var(--x, #fff)` 误报，从 103 降至 94） |
| UI03 | 19 | 裸色硬编码（WARN 级） |

另有 800+ 处 hex/rgba 分布在全仓，其中 `omnimux-workflow` 一家占 656 处
（集中在 `src/canvas/theme/components.css`），建议单独立项。
