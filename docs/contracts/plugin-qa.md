# plugin-qa — OmniMux 产品插件浏览器验收契约

> 解决问题：多插件并行开发时，QA 环境抢口、数据串脏、验收口径各写一套。
> 配套：`dev-pipeline.md`（三层环境）+ `ops-entry.md`（命令入口）+ skill `omnimux-plugin-e2e-test`（操作手册）。

## 环境（必须 L2）

| 项 | 要求 |
|----|------|
| 入口 | `cd omnimux-desktop-fork && yarn omnimux:dev start <task> <plugin>` |
| 端口 | L2 池 **44200–44299**（`port.txt` / `ls` 的 `port:`）。保留窗：**44120–44151**（App）、**43120–43151**（DSH Desktop） |
| 数据 | `DSH_HOME=~/.dsh-dev/tasks/<task>`（任务隔离）。逃生：`OMNIMUX_DEV_LEGACY_HOME=1` → 共用 `~/.dsh-dev` |
| 插件形态 | 在研 link ≤ 1；验收改过的 client 必须 link 源码 |
| 禁区 | 不得把 canvas-harness、生产 App 口、共享脏库当主验收 |

并行：同机可多任务同时 running；`yarn omnimux:dev ls` 看 port/home。测完 `stop` 或 `rm`（`rm` 删整个任务子根）。

## 五维清单

| 维度 | 必测要点 |
|------|----------|
| 功能 | 入口 → 打开 → 空态 → 增改删 → 搜索 → 引用/复制 → 刷新；UI + 后端双核对 |
| 异常 | 校验失败、冲突 409、非法 400、跨源写 403、不存在 404 |
| 交互 | 弹窗开关（× / 遮罩 / Esc）、禁用态、字段切换不丢数据 |
| 视觉 | DOM computed style / token（`--dsw-alias-*`）；截图供人看，不作唯一断言 |
| 稳定 | 轮询同步、关页保活（禁 `return null` 卸树当已修口径） |

## 报告模板

```
# 结论：PASS x / FAIL y / 环境限制 z，是否可交付
# 用例：编号 | 用例 | 结果 | 证据
# 缺陷：🔴Blocker / 🟡Major / 🟠Minor / 🔵Suggestion + 路径
# 环境快照：task、plugin、URL/port、DSH_HOME、残留与清理命令
```

缺陷写入对应插件备注或 fork `.workbuddy/pr-board.md`；`gh issue*` 必须 `--repo laozhong86/omnimux-desktop-fork`。

## 操作细则

已知坑、ego 骨架、React 受控清空等 → skill `omnimux-plugin-e2e-test`（本契约不重复）。契约变更时同步改 skill 环境段。
