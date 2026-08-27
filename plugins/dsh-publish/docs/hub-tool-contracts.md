# hub 工具契约核对（T0 产出）

核对人：林深（Phase 3a）／核对日期：2026-08-21
版本观察：harness `141eb6fef8`（dsh-0.1.0-rc.8）；产品树 `e25b9cb`

## 核对方式与实证等级标注

| 等级 | 含义 |
|---|---|
| **实证-源码** | 直接读 hub 源码（`plugins/omnimux/src/official/`）确认，可信度最高 |
| **实证-文档** | 从 OmniMux 官方文档站（docs.omnimux.ai）2026-08-21 实时抓取的 API 契约 |
| **未实证** | 无法在本环境验证（无 OmniMux 登录态 / 无真实账号），已标注并给出防御性实现 |

**环境实况**：

- `dev-doctor.sh`：6 项中 5 项通过；1 项不合规为生产 profile `.npmrc` store 未固定（omnimux profile 的事，与 dev 环境无关，不影响本插件开发）。
- dev 环境 `omnimux-dev-market` Host 在跑（`http://127.0.0.1:65354`），dev profile bundles 含 `omnimux`（official.mount 默认 true）→ `omnimux_publish_*` 工具已注册（代码路径静态确认，Host 日志不打印工具名）。
- **dev 环境 `~/.dsh-dev/omnimux/` 无 `access-token`，未登录** → 无法真实调用 presign/create/get。生产 `~/.dsh/omnimux/access-token` 存在但生产 profile 未在跑，且不动生产环境。
- 结论：以下「响应结构」按 实证-文档 + 源码透传事实 定稿；**live 调用未实证**，submit.js 对响应做防御性解析（缺字段报确定性错误，不假装成功）。

## 1. `omnimux_publish_presign`（实证-源码 + 实证-文档）

**工具签名（源码 `official/mount.js` + `official/publish.js`）**：

```
参数：filename (string, required)、content_type (string, optional)
调用：POST {site}/api/social/v1/media/presign  body: { filename, content_type }
注意：hub 发送的是 snake_case `content_type`；官方文档 cURL 示例用 camelCase `contentType`。
     我们走 hub 工具（不是直连 HTTP），传 content_type 即可，服务端兼容性【未实证】。
```

**响应（实证-文档）**：hub 工具原样返回上游 JSON（jsonOut，无字段裁剪）：

```json
{ "success": true, "data": { "upload_url": "https://...", "public_url": "https://..." } }
```

- 字段名：`upload_url`（PUT 目标，预签名自授权）、`public_url`（可放进 media_items 的最终 URL）。
- 有效期 / header 要求：文档未写【未实证】→ 实现：PUT 不带任何 auth header（预签名 URL 自授权），失败时报原文错误。
- 401/403 → hub client 抛 `needs-omnimux`；402/429/500 → `omnimux-request-failed`。

## 2. `omnimux_publish_create`（实证-源码 + 实证-文档）

**工具签名（源码）**：

```
参数：account_ids (array)、content (string)、media_items (array)
调用：POST {site}/api/social/v1/posts  body 原样透传
```

**文档请求体**：`{ account_ids: [1], text: "hello", media_items: [{ url: "https://..." }] }`

> ⚠️ 差异：文档字段名是 `text`，hub 工具 schema 声明的是 `content` 且原样透传。
> 我们必须按 hub 工具 schema 传 `content`（hub 测试同此用法）。服务端是否同时接受两者【未实证】。
> 这是 product 迁移前需要在 hub 侧跟上游确认的一项（记入 PRD §10① 合规确认清单随附）。

**media_items 元素结构（实证-文档）**：`{ url: string }`——presign 返回的 `public_url`。

**响应（实证-文档）**：

```json
{ "success": true, "data": { "id": 1, "status": "scheduled" } }
```

- `data.id` = post_id（子任务 taskId，注意可能是 number，落盘前 String() 归一）。
- `data.status`：create 即返回（文档示例 `scheduled`）。
- 同一 presign 的 public_url 可否跨多次 create 复用：**未实证**。实现按「一个媒体 presign 一次、url 缓存在 record.uploads 供 retry 复用」处理；若上游有一次性限制，retry 时 create 会失败并落 error，可再手动重试（retry 失败自动重新 presign 的兜底逻辑已实现：uploads 缺失时重新上传）。

## 3. `omnimux_publish_get`（实证-源码 + 实证-文档）

**工具签名（源码）**：

```
参数：id (string, required)
调用：GET {site}/api/social/v1/posts/{id}
```

**响应（实证-文档）**：

```json
{ "success": true, "data": { "id": 1, "status": "published" } }
```

- 平台状态字段：`data.status`（string）。文档只示例了 `scheduled` / `published` 两个值，**完整枚举未实证**。
- 防御策略：`statusMap` 做「已知值映射 + 未知值保留原状」——未知 raw_status 只存 `raw_status` 不改子任务状态，`statusMap` 可由 Config 覆盖扩展。

## 4. statusMap 定稿（随本核对定稿，Config `publish.statusMap` 可覆盖）

raw（lowercase 后匹配）→ 子任务状态：

| raw（示例集） | 映射 | 依据 |
|---|---|---|
| `scheduled` `pending` `queued` `processing` `in_progress` `publishing` `submitted` | `submitted`（发布中/排队） | 文档示例 scheduled |
| `review` `reviewing` `pending_review` `under_review` `in_review` `audit` `auditing` | `reviewing`（待审核） | PRD §5.2 语义 |
| `published` `success` `done` `completed` | `published` | 文档示例 published |
| `failed` `error` `rejected` `reject` `blocked` `removed` `deleted` | `failed` | 常规失败语义 |

未知值 → 不改状态（保留当前），raw_status 照存。**该表是保守猜测 + 文档两点实证的混合，待有真实账号后用 get 返回值校准**（记入 T10 横切抽查项）。

## 5. `omnimux_accounts_list`（实证-源码 + hub.md ViewRow 规格）

- 工具无参数；`GET /api/social/v1/accounts`；未登录抛 `needs-omnimux`。
- 站点行经 hub 工具返回**未裁剪**的上游 JSON（pickAccount 裁剪发生在 hub 自己的 HTTP 面 `/omnimux/accounts`，不在工具面）→ 我们的 AccountSource 需要自行做白名单裁剪（等价复刻 `pickAccount`，不 import hub 模块）。
- overlay 文件 `$DSH_HOME/omnimux/accounts.json`：`{ [account_id]: { group?, agent_usable?, last_used_at?, updated_at } }`（源码 `official/account-meta.js` 实证）。
- ViewRow 计算状态：`active | expiring | expired | error`（site status 归一；无 site status 时由 expires_at 推导：过期→expired，<24h→expiring，否则 active）。
- 账号可用性判定（本插件定）：`status ∈ {active, expiring}` 且 `agent_usable !== false`。
- **PRD §5.6「未登录允许读账号列表」与 hub 现实不符**：站点列表需要登录态才能拉取，hub 无缓存。降级实现：`publish_list_accounts` 在未登录时返回 `{ accounts: [], degraded: 'needs-omnimux', message }`（明确报因，不静默）；建草稿不受影响。已作为发现回传主理人。

## 6. `ctx.tools.execute` 程序化调用（实证-源码）

- `ToolRuntime.execute(exec: ToolExecutionInput)` → `Promise<ToolExecutionResult>`，`ToolExecutionInput = { callId, name, arguments, signal?, agent?, rootCallId?, parent? }`，结果 `{ content, isError, value }`（`packages/core/tools/src/index.ts:1342`；官方测试 `packages/core/tools/tests/tools.spec.ts:91` 同用法）。
- jsonOut 工具的 `value` 即 execute 返回的对象（tool result 原样）。
- hub official 工具的 execute 不消费 `exec.agent`，透传安全；默认 dev profile 无 ask 策略。

## 7. 遗留确认清单（随交付上报）

1. `content` vs `text` 字段名（§2）——product 迁移前 hub 侧确认。
2. presign URL 有效期 / 是否一次性（§1、§2）——有真实账号后补 E2E。
3. `get` 的完整 status 枚举（§3/§4）——statusMap 校准。
4. 跨 create 复用 public_url（§2）——retry E2E 时观察。
