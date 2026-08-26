---
title: "OmniMux 灵感库封面修复 + 媒体缓存方案"
id: "spec-omnimux-inspiration-cover-cache"
type: "spec"
status: "accepted"
authority: "L2"
date: "2026-08-24"
authors: ["x", "agent-architect"]
subsystem: "omnimux-inspiration"
---

# OmniMux 灵感库封面修复 + 媒体缓存方案

> 状态：**已落地**（2026-08-24 P0 字段修复 + P1 Host 磁盘缓存；待老板合入）
> 输入：生产环境（OmniMux.app Host `127.0.0.1:44121`，profile `omnimux`）实测证据；`plugins/omnimux-inspiration`、`plugins/omnimux/src/official/inspiration*.js` 代码审读
> 关联契约：`docs/contracts/hub.md`「Inspiration HTTP」表；`docs/contracts/dev-pipeline.md`（物化 profile 数据根）；`design.md`（`--dsw-alias-*` token 约束）

---

## 0. TL;DR

灵感库一级页**封面全部不显示**：真实网关返回的封面字段是 `cover_key`（不是前端读的 `cover_url`），媒体本身（Host 代理流）完全正常。修复=一处字段兼容 + `hostMediaSrc` 补裸 key 归一化。

顺带调查确认：**图片不落盘、无缓存控制**（上游不带 `cache-control`/`etag`，Host 代理不透明条件请求头，浏览器只能弱启发式缓存）→ 每次看图都全量带 PAT 拉云端；断网/重启即裂。加上一层 **Host 磁盘缓存 + 显式缓存头 + 304 条件请求**，重复浏览只打一次上游，离线可看已缓存封面。

- **P0（~10 行 + 测试）**：修 `cover_key` 字段 bug，三形态（Host 路径 / 裸 key / 历史 `cover_url`）都显示
- **P1（Hub 侧 ~120 行 + 测试）**：`streamMedia` 磁盘缓存（`$DSH_HOME/omnimux/media/inspiration/`，哈希文件名、LRU 上限、304 条件请求）
- **P2 明确不做**：视频/幻灯片预览、Service Worker、列表 JSON 缓存、重写 `rewriteMediaUrlsForHost`（除非碰绝对 URL 派生形态）

**不改的话：** 灵感库永远只有「无封面」占位卡；以后每条封面下载都实打实打一次云端，离线全裂。

---

## 1. 调查结论（证据，2026-08-24 生产实测）

### 1.1 封面断点：字段名不匹配（已证实）

真实列表响应（Host `/omnimux/inspiration`，未经篡改）：

```json
{
  "id": 4,
  "title": "好物开箱脚本模板：痛点三连",
  "cover_key": "/omnimux/inspiration/media/seed/cover-04.jpg",
  "media_keys": ["/omnimux/inspiration/media/seed/video-04.mp4"]
}
```

前端唯一封面来源 `InspirationSection.jsx:107`：

```js
const cover = hostMediaSrc(row.cover_url)   // row.cover_url === undefined
```

`hostMediaSrc(undefined) === ''` → 渲染「无封面」占位。**媒体链路本身通**：`curl /omnimux/inspiration/media/seed/cover-04.jpg` → `200 image/jpeg`。

### 1.2 schema 双形态（调查中发现，修复必须兼容）

| 接口 | `cover_key` 值形态 | `media_keys` 值形态 |
|---|---|---|
| 列表 `GET /omnimux/inspiration` | `/omnimux/inspiration/media/seed/cover-04.jpg`（**已带 Host 前缀**，经 `rewriteMediaUrlsForHost`） | 同上（带前缀） |
| 详情 `GET /omnimux/inspiration/{id}` | `seed/cover-04.jpg`（**裸 key**，rewrite 不命中保持原样） | 裸 key |

另：6 条种子数据中 **3 条无封面**（`cover_key: null`），占位逻辑必须保留。当前字段全集：`analysis / content / cover_key / created_at / hot_score / id / is_favorite / media_keys / source_url / tags / title / type / updated_at`。

### 1.3 缓存/持久化现状（已证实）

- `streamMedia`（`inspiration-http.js:130`）是纯代理：`Readable.fromWeb(upstream.body).pipe(res)`，**无任何落盘**；`~/.dsh`、`~/.dsh-dev` 下无灵感媒体目录
- 前端 `sessionCache`（`use-inspiration.js`）只缓存**列表 JSON**（内存态，重启即失），不含图片
- 媒体响应头实测：`content-type / content-length / accept-ranges / last-modified`——**无 `cache-control`、无 `etag`**
- `streamMedia` 只透传请求的 `range`，**不透传 `If-Modified-Since` / `If-None-Match`** → 浏览器永远无条件全量下载
- 上游无 PAT 一律 `401`（`curl https://omnimux.ai/api/inspiration/v1/media/seed/cover-04.jpg` → 401）→ 媒体**只能**走 Host 代理，不能直连

### 1.4 官方扩展点确认（可落地的依据）

- 官方 `packages/host/webserver` 支持 `register({ kind: 'exact' | 'prefix', path, handler })`，最长前缀匹配；`/omnimux/inspiration/media/...` 走 prefix 路由是**官方一等扩展点**，非 hack
- 未匹配路径 → 404 或 fallback（web-app 静态 index），Host 不干预响应缓存头 → 缓存头由插件自行负责
- `rewriteMediaUrlsForHost` 是 JSON 字符串前缀替换（`"https://omnimux.ai/api/inspiration/v1/media/` / `"https://www.omnimux.ai…` / `"/api/inspiration/v1/media/` → `"/omnimux/inspiration/media/`），只对带引号的已知前缀生效；裸 key 与未来绝对 URL 派生形态不被覆盖（P2）

### 1.5 测试脱节

`inspiration.test.js:21` / `inspiration-http.test.js:31` 的 mock 用 `cover_url` 造假数据 → 测试全绿而与真实 schema 脱节，此 bug 测试盲区。`docs/contracts/hub.md` 未钉死字段名。

---

## 2. Goals

1. **封面立现**：列表里所有带 `cover_key` 的条目显示真实封面；无封面条目保持占位且不报错
2. **三形态兼容**：Host 前缀路径、裸 key、历史 `cover_url`（`/api/inspiration/v1/media/...` 相对路径）一律显示
3. **重复浏览不重下载**：同一媒体只打一次上游（磁盘缓存命中 + 浏览器显式缓存生效）
4. **离线可看已缓存封面**：命中本地缓存的封面，断网/上游不可用仍显示
5. **测试反映真实 schema**：mock 改 `cover_key` 三形态，杜绝此类回归
6. **垂直边界干净**：缓存只写 `$DSH_HOME/omnimux/media/inspiration/`（dataRoot 注入，不碰 hub 内部、不持密钥）

## 3. Non-Goals

| 不做 | 原因 |
|---|---|
| 视频/幻灯片预览（消费 `media_keys`） | v1 只读定位；封面问题优先 |
| Service Worker / IndexedDB 前端持久化 | Host 缓存已解决流量与离线大头；SW 增加复杂度，无收益证明 |
| 列表 JSON 缓存（内存 sessionCache 之外） | 列表要实时（hot 排序、收藏态），内容新鲜优先 |
| 重写 `rewriteMediaUrlsForHost` 为字段级处理 | 当前形态已被字符串替换覆盖；仅当网关改发绝对派生 URL 时再动（见 §7 风险） |
| 把缓存目录放进工作树 / 生产 profile 链接区 | 违反 `dev-pipeline.md` 物化契约；必须走 `$DSH_HOME` 数据根 |

---

## 4. 方案

### 4.1 P0 封面字段修复（改动：前端 2 文件 + 测试 + 契约文档）

**`plugins/omnimux-inspiration/src/client/InspirationSection.jsx:107`**

```js
const cover = hostMediaSrc(row.cover_key ?? row.cover_url)
```

**`plugins/omnimux-inspiration/src/client/api.js` `hostMediaSrc`** —— 增加裸 key 归一化（顺序在前缀判断之后）：

```js
export function hostMediaSrc(url) {
  if (typeof url !== 'string' || url === '') return ''
  if (/^https?:\/\//i.test(url)) return url
  if (url.startsWith('/omnimux/inspiration/media/')) return url
  if (url.startsWith('/api/inspiration/v1/media/')) {
    return `/omnimux/inspiration/media/${url.slice('/api/inspiration/v1/media/'.length)}`
  }
  // 裸 key（详情接口形态，如 "seed/cover-04.jpg"）→ 补 Host 前缀
  return `/omnimux/inspiration/media/${url.replace(/^\/+/, '')}`
}
```

**测试同步（关键，堵测试盲区）**：
- `client/api.test.js`：`hostMediaSrc` 三形态（带前缀 / 裸 key / `cover_url` 相对路径 / 绝对 URL / 空）
- `official/inspiration.test.js` + `inspiration-http.test.js`：mock 改用真实 schema `cover_key`（列表=带 `/omnimux/` 前缀、详情=裸 key 两种输入），断言 rewrite 对 `cover_key` 字符串替换仍成立（覆盖列表形态），并保留一条 `cover_url` 形态做兼容回放
- `view.test.js` 不受影响（`pickList` 与字段无关）

**契约**：`docs/contracts/hub.md`「Inspiration HTTP」表补字段契约——`cover_key` / `media_keys`（列表返回 Host 媒体路径、详情返回裸 key），并注明前端只允许读 `cover_key ?? cover_url`。

### 4.2 P1 Host 侧媒体磁盘缓存（改动：`inspiration-http.js` + 测试）

**目标路径**：`streamMedia` 命中逻辑（新增），依赖注入 `dataRoot`（由 `omnimux/src/index.js` mountHttp 传入 hub 的 homeDir/profile 数据根；不新增环境变量）。

```
$DSH_HOME/omnimux/media/inspiration/
  <sha1(mediaKey)[:20]>.bin        # 原始字节
  <sha1(mediaKey)[:20]>.json       # { mime, etag?, lastModified?, length, fetchedAt, hits }
```

**流程（GET /omnimux/inspiration/media/{key}）**：

1. 校验 key（现有 `mediaKeyFromHostPath` + `..` 拒绝不变）→ 计算哈希路径
2. 缓存命中（.bin 存在 && 未过 TTL，默认 7 天）：
   - 浏览器带 `If-None-Match`/`If-Modified-Since` 且与缓存条目 etag/lastModified 匹配 → **304**（不读盘正文）
   - 否则 → 200 + 缓存字节 + `cache-control: public, max-age=3600` + etag（取上游 etag，无则派生 `"<sha1>[:12]"`）+ 透传 last-modified（若缓存条目有）
   - Range（现状透传，P1 先只对未命中路径与上游交互；命中路径忽略 Range 回 200 —— 见 §7 边界）
3. 缓存未命中：带缓存条目 etag（若有）向上游 `withPatRaw`：
   - 上游 **304** → 用本地 .bin 回 200（缓存刷新 fetchedAt）
   - 上游 **200** → 写 .bin + .json，回 200 + 透传头（现有 7 头 + cache-control 兜底 `public, max-age=3600`）
   - 上游错误 → `mapError` 不变；磁盘不可写 → 降级为纯代理（不阻页面）
4. 无论命中与否：`res.writeHead` 后按字节/流输出；写缓存用 `createWriteStream` 边流边写（不整块缓冲内存）

**清理**：写缓存后触发——条数 > 512 或字节 > 256MB 时按 `.json.fetchedAt` LRU 删除最旧（同步删，避免定时器）。上限按常量 + `deps` 配置，不进 UI。

**测试**：
- 单元（fake `withPatRaw` 计数 + 临时目录）：第一次请求打上游 1 次并落盘；第二次命中磁盘不再打上游；上游 304 时用缓存体；`..` 拒绝不变；磁盘写失败降级纯代理
- 集成（真实 Host）：`curl` 同 key 两次，第二次响应含 `cache-control` 且上游计数不增长（可注入计数器）

### 4.3 前端微小配合（P1 附带，不改行为）

`InspirationSection.jsx` 的 `<img>` 加 `loading="lazy" decoding="async"`（量大时省初始带宽；当前 6 条无害）。不加 SW、不改网格。

---

## 5. 验收标准

1. 打开灵感库：带 `cover_key` 的条目显示真实封面（种子数据 ≥1 张），无封面条目显示「无封面」占位，页面无报错
2. `pnpm test` 全绿（含新增的三形态/缓存用例）
3. 二次加载同一封面：浏览器 Network 显示 `cache`（memory/disk）命中，或 Host 日志显示磁盘 Hit；模拟上游不可用（断网/400），已缓存封面仍显示
4. `~/.dsh/profiles/omnimux` 对应的数据根下出现 `omnimux/media/inspiration/`（生产物化目录），文件为哈希名 .bin/.json
5. 列表/详情 JSON 仍实时（不被缓存）

## 6. 不改的边界与理由

| 边界 | 理由 |
|---|---|
| 缓存 TTL 7 天 | 封面 key 不变即内容不变；TTL 兜底云端变更（重启上游换封面 ≤7 天反映） |
| 命中路径忽略 Range | 封面是图片全量下载；视频 Range 属 `media_keys` 预览（P2）。若真要缓存视频，见 P1.5（fs Range 切片） |
| 不缓存 JSON | 列表实时性（hot 排序/收藏态）优先 |
| 缓存失败静默降级 | 磁盘只读/满时页面照常工作，仅丢缓存红利 |

## 7. 风险与对策

| 风险 | 对策 |
|---|---|
| 网关把媒体 URL 改成绝对派生形态（如 `https://api.omnimux.ai/...` 或 CDN），字符串 rewrite 落空 → `<img>` 直连 401 | P1 监控项：`streamMedia` 对非 `SITE_MEDIA` 前缀的上游请求记 warn 日志；触发后升级 P0.5 改字段级重写 |
| 缓存目录失控 | 哈希单层 + 条数/字节双上限 + LRU |
| key 路径注入 | 已有 `..` 拒绝 + 哈希文件名双保险 |
| 上游封面更新延迟（TTL 内） | 可接受；需要时手动清 `media/inspiration/` 目录 |
| 缓存写一半崩溃 → 残 .bin | .json 先行落地，读缓存时 .bin/.json 必须同存才视为命中；崩溃残留由 LRU 清理回收 |
| 与 `dev-pipeline` 冲突 | 缓存目录用 dataRoot（`$DSH_HOME`），不碰工作树/链接区；生产 profile 物化目录天然在内 |

---

## 8. 实施清单（拍板后顺序）

1. P0：`InspirationSection.jsx` 字段兼容 + `api.js` 归一化 → 前端 build（`scripts/build-client.mjs`）
2. P0：三处测试改真实 schema + 新增用例 → `pnpm test` 全绿
3. P1：`inspiration-http.js` 缓存层（dataRoot 注入、哈希、TTL、LRU、304）→ 单元测试
4. P1：`docs/contracts/hub.md` 字段契约 + 本 spec 状态改「已拍板」
5. 同步生产 profile（`yarn omnimux:sync` / `omnimux:restart`，dev 侧 `omnimux-dev-*` 先验收）
6. P0/P1 各打一条 PR（`plugin-git-pr.md`：一插件一 PR，老板合入；board 记 `.workbuddy/pr-board.md`）