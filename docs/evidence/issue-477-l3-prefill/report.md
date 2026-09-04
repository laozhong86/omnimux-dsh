# Issue #477 L3 — contenteditable 预填回归

- 日期: 2026-09-04
- HEAD: `5b2e673` `fix(omnimux-inspiration): prefill contenteditable composer (#477)`
- L2 URL（pageInfo）: `http://127.0.0.1:44204/`
- 端口: 44204（未使用 45120）
- task space: `issue-477-prefill-ce` id=431
- DSH_HOME: `/Users/x/.dsh-dev/tasks/one-click-replicate`
- 业务代码: 本轮未改

## 总评

**PASS**

## L1

```
pnpm --filter omnimux-inspiration test
```

- tests 143 | pass 143 | fail 0

## L3 DoD

| # | 条件 | 结果 |
|---|---|---|
| 1 | 无 Could not open a new session | PASS（aria-live 空，无失败 toast） |
| 2 | composer 含 `/video-deconstruct` | PASS（contenteditable 全文含手势、`inspiration_id: 148`、口播/字幕/出镜） |
| 3 | 发送键 click 计数 0 | PASS |
| 4 | 工作区不新增 | PASS（仍「测试环境」） |

可见 CTA：`One-click replicate` / `Replicate`，无「加会话」。

## 截图

- `01-hover-card.png`
- `02-after-replicate.png`
- `03-js-click-replicate.png`
- `04-click-first-cta.png`

## 备注

灵感库 Tab 成功路径会 `closeTab`，后续 hover overlay 可能不在 DOM。composer 仍保留本 L2 会话里已写入的 `/video-deconstruct` 复刻提示词。未自动发送。
