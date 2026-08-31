# 插件质量与浏览器验收报告

- 结论：PASS（顶栏「添加到会话」仅图标 + 次区；点击仍 toast）
- Issue / PR / commit：#316 / #317 / `5dc5fec`
- task space id：279（`omnimux-qa-issue-316-chat-icon`，已 complete keep:false）
- L2 URL：`http://127.0.0.1:44120/`（`pageInfo()`；45120 拒绝连接）
- DSH_HOME：`/Users/x/.omnimux-dev`
- canvasHash：`082b9c9005acd65c`
- ego-browser evidence：`docs/evidence/issue-316-l3/`

## 用例

| 编号 | Given/When/Then | 结果 | DOM | screenshot |
|---|---|---|---|---|
| T1 | 有内容文本节点选中 → 胶囊 innerText 不含「添加到会话」 | PASS | pill text=`编辑 复制 拆分` | `text-chat-icon-only.png` |
| T2 | chat 按钮仅图标，title/aria-label=添加到会话，无 `--primary` | PASS | text="" w=29；title=aria=添加到会话；class=`wf-floating-top-pill__btn` | 同上 |
| T3 | 主区仍有「编辑」；次区为图标 + 复制 + 拆分 | PASS | 按钮顺序 编辑 / (icon) / 复制 / 拆分 | 同上 |
| T4 | 点击图标 → toast | PASS | `已添加到会话：未命名文本.md` | `add-to-conversation-toast.png` |

## L0–L2

| 层 | 命令 | exit | 摘要 |
|---|---|---:|---|
| L1 | `pnpm --filter omnimux-workflow test` | 0 | 519 pass / 0 fail |
| L2 | unmerged materialize → `~/.omnimux-dev` | 0 | 未 `--prod` |
| L3 | ego-browser 44120 | 0 | task 279 |

## 环境限制

- 未走 L2 隔离池；共享 Dev App 44120。
- 表格/合成节点本轮未再灌素材（源码契约已覆盖三处 chat action）。
- Agent 未自打 `qa:pass`。未 merge。
