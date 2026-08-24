# stage-guards — 一级 Stage / 本地写闸 / 空态静态契约

> 解决问题：E2E 反复踩「关页卸树丢状态」「写路由无同域闸」「空态文案混用」。
> 配套：`plugin-qa.md`（验收五维）+ `yarn omnimux:doctor`（静态拦）+ `hub.md`（垂直禁 import）。

## 1. 关页保活（一级 Stage / Plaza）

| 规则 | 判定 |
|------|------|
| MUST | 首次打开后子树保活：`everOpened`（或等价 keep 旗）+ 关闭用 `display:none` / `aria-hidden`，禁止关页卸树 |
| MUST NOT | 以 `if (!open …) return null` 作为**已打开过**的关页路径 |
| 允许 | 从未打开：`if (!stage \|\| !everOpened) return null`；**Modal/Dialog** 关闭 `return null` |
| 金标（doctor **FAIL** 若回归） | `AccountsStage.jsx`、`ProductsStage.jsx`（已合入 main） |
| 推进中（doctor **WARN** / 文件缺失则跳过） | `AssetsStage.jsx`、`plaza-shell.js` — 契约仍 MUST；待各自业务 PR 合入后再升 FAIL |
| 已知债（doctor **WARN**） | `WorkflowStage.jsx`、`AppsStage.jsx` — 契约仍 MUST；修码 backlog |

## 2. 本地写闸

| 规则 | 判定 |
|------|------|
| MUST | Host 变更类路由（POST/PUT/DELETE 或 method 触发写盘 / 装包 / 重启）在执行副作用前过闸 |
| 闸形态 | `assertLocalWrite`（hub `apps/origin.js` 或插件本地副本）**或** `trustedRestartRequest`（market） |
| 金标已闸（doctor **FAIL** 若丢失） | market `pluginRestart`；products / assets / workflow / hub 写路由上的 `assertLocalWrite` |
| 推进中 / 债（doctor **WARN**） | market `config`+`save`（业务 PR 已补闸、待合入）；`install` / `uninstall` / `pluginInstall` / `catalogInstall` / `catalogSummon` / `catalogUninstall` — 契约仍 MUST |

## 3. 空态语义

| 面 | 正确语义 | doctor |
|----|----------|--------|
| products / assets | 无关键词 → `empty.all`；有关键词无命中 → `empty.noMatch` | key 缺失 → **WARN**（待业务 PR；合入齐全后可升 FAIL） |
| market Skills | 无命中可走 `search.fallback`（热门兜底） | `i18n.js` 缺失则跳过；有文件缺 key → **WARN**；**有** fallback **不算**缺陷 |
| market 其他 tab | `mkt.empty` / `expert.empty` / `connector.empty` 真空 OK | — |

## 4. 垂直禁 hub import

| 规则 | 判定 |
|------|------|
| MUST NOT | `omnimux-accounts` / `assets` / `products` / `market` / `workflow` / `analytics` 等垂直包 `from 'omnimux'` 或 import hub 包内路径 |
| 对齐 | `hub.md`；doctor 静态扫包名 import → **FAIL** |

## 5. 非本契约本轮实现范围

共享 StageShell、修卸树债、修 install/catalog / config 闸、改 Skills fallback —— 见 backlog；除 accounts/products 关页与 pluginRestart / assertLocalWrite 存在性外，债项本轮进 doctor **WARN**，不进 FAIL 集。
