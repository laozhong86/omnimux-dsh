# 插件质量与浏览器验收报告

- 结论：PASS（P0 空态隐藏 + 文本/表格有素材顶栏 + 添加到会话；媒体导入/生成预览未真机覆盖）
- Issue / PR / commit：#301 / #305 / `bc256a9` + 本轮胶囊 CSS 修复
- task space id：269（`omnimux-qa-issue-301-workflow-toolbar`；早期 262 已回收）
- task / plugin：omnimux-qa-issue-301-workflow-toolbar / omnimux-workflow
- L2 URL：`http://127.0.0.1:44120/`（`pageInfo()`；Dev App 进程在本轮中改听 44120，45120 已拒绝连接）
- DSH_HOME：`/Users/x/.omnimux-dev`
- canvasHash（主证据）：`f1d3cfcf046846bc`（worktree `lib/canvas.js` 与 `~/.omnimux-dev/profiles/omnimux/node_modules/omnimux-workflow/lib/canvas.js` 对齐）
- ego-browser evidence：`docs/evidence/issue-301-l3/`

## 用例

| 编号 | Given/When/Then | 结果 | snapshot/DOM 证据 | screenshot |
|---|---|---|---|---|
| T1 | 空文本节点选中 → 无 `.wf-floating-top-pill` | PASS | `selected:true empty:true pillCount:0` canvas=`f1d3cfcf046846bc` | `empty-text-selected-44120.png` |
| T2 | 空表格节点选中 → 无顶栏 | PASS | `type=table selected:true empty:true pillCount:0` | `empty-table-selected-44120.png` |
| T3 | 空图片节点选中 → 无顶栏（早期 45120） | PASS | `pillCount:0` | `empty-image-selected.png` |
| T4 | 文本写入内容后选中 → 横排胶囊「添加到会话 \| 编辑 \| 复制 \| 拆分」 | PASS | pill `280×34`；buttons 94/58/58/58；primary=`添加到会话` | `text-filled-pill-44120.png` |
| T5 | 点击「添加到会话」 | PASS | body `已添加到会话：未命名文本.md` | `add-to-conversation-toast-44120.png` |
| T6 | 表格添加首行后选中 → 「添加到会话 \| 全屏」 | PASS | pill `166×34`；primary + secondary | `table-filled-pill-44120.png` |
| T7 | 导入媒体 / 生成媒体预览 / 合成成片下载 | 未覆盖 | 无 native picker、本地项目无已生成媒体 | — |

## L0–L2 结果

| 层 | 命令 | exit code | 实际计数/摘要 | 证据 |
|---|---|---:|---|---|
| L0 | CSS 契约 + `max-content` 断言 | 0 | `CanvasNodeShell.test.mjs` 含 `width:max-content`、禁止 pill 块 `max-width:100%` | 本轮 diff |
| L1 | `node --test` pill + toolbar logic | 0 | 22 pass / 0 fail | 本会话 |
| L1 | `pnpm --filter omnimux-workflow test`（实现提交后） | 0 | 502 pass / 0 fail | 实现阶段 |
| L2 | `OMNIMUX_ALLOW_UNMERGED_MATERIALIZE=1 OMNIMUX_SKIP_KIT_BUILD=1 bash scripts/sync-to-app.sh omnimux-workflow` | 0 | 物化 `~/.omnimux-dev`，未 `--prod` | 本会话 |
| L3 | ego-browser 44120 | 0 | taskSpace 269；URL `http://127.0.0.1:44120/`；截图齐全 | 本目录 |

## 缺陷

- 🟡 L3 发现胶囊被节点宽度挤成竖排：`.wf-floating-top-pill__group { max-width: 100% }` 在 absolute 子元素上继承父宽。已改为 `width: max-content` + `flex-shrink: 0`，并去掉 group 的 `max-width: 100%`。溢出仍由 `partitionToolbarActions` 负责。
- 🟠 导入/生成媒体、合成成片未真机覆盖（native file picker 无法驱动；本地项目几乎无已填充媒体）。
- 🔵 验收后页面 `canvas.js?v=` 一度漂到旧 hash `49fc13a2cca1ddc2`（Host 未重启、Agent 未杀进程）。主证据以 `f1d3cfcf046846bc` 为准。
- 🔵 早期 45120 在本轮中途掉线；后续 Dev App 监听 44120。Agent 未 `pkill`；曾 `open -a "OmniMux Dev"` 尝试拉起，实际起来的进程听 44120。

## 环境限制与清理

- 未使用 L2 隔离池 44200–44299；真机走共享 Dev App（`~/.omnimux-dev`）。
- 未 `pnpm sync --prod`；未合入；未销毁 worktree。
- QA 在「短剧」画布写入样本文本并临时加过表格节点；表格已 Delete 删除；文本已清空回空态。
- task space 269 在报告落盘后 `completeTaskSpace(..., { keep: false })`。
- Agent 不得自打 `qa:pass`。
