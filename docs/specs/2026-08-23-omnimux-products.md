---
title: "OmniMux 产品库插件需求文档"
id: "spec-omnimux-products"
type: "spec"
status: "accepted"
authority: "L2"
date: "2026-08-23"
authors: ["x", "agent-architect"]
subsystem: "omnimux-drama"
---

# OmniMux 产品库插件需求文档

> 状态：**已拍板**（2026-08-23，Q1–Q4 按默认；同日叠加 Agent 写 + 一级页实时同步差量）  
> 插件（建议）：`omnimux-products`（product 树垂直插件，与 `omnimux-assets` 平级）  
> 输入：Gxgen 产品库现网研究 `Gxgen/docs/.../2026-08-23-product-library-research.md`；资产库已拍板规格 `2026-08-22-omnimux-assets-creative-library.md`；需求评审许清楚 2026-08-23；Agent 写差量许清楚 + 架构高见远 2026-08-23  
> 设计：`product/omnimux-dsh/design.md`；一级页 token 走 `--dsw-alias-*`（禁止 `--omx-*` 浅色 fallback）  
> 契约：`docs/contracts/hub.md`、`sidebar-extra-entries.md`、`settings-ui.md`、`omnimux-dsh/AGENTS.md`

---

## 0. TL;DR

产品库是带货准备的**语义对象库**：一条产品 = 名称 + 怎么卖（卖点/人群/品牌/价格/SKU/链接）+ 可选主图引用。  
目的是让人和 Agent 在会话、项目、画布里按 **同一 `id`** 引用「卖什么」，而不是再丢一张散图。

- **新建独立插件** `omnimux-products`，**禁止**做成资产库第七类 / `type=product`
- 一级页 `shell.overlay`，侧栏 rank **6**（不重排旧行）
- 媒体只记本机 `real_path`：不拷贝、不移动；失效不显示；删产品 **永不** `rm` 原文件
- P0：人手建/编辑 + Agent `products_create` / `products_update` 写**同一份** `library.json`；列表/搜索/删除（仅 UI）+ 复制 `@产品/名称`；Agent 默认主图、全图按需读
- 一级页**已打开**时，Agent 建/改后 **≤5s** 网格跟上（revision 轮询，无需手刷）；本窗 UI 写成功立即刷新
- P0 **不画**：Gxgen 云存储 Tab、类型双路径、URL 抓取、数字品牌战略、CSV、手机上传、导入资产包、Agent 删除工具、WebSocket
- 社区无合用可装包（WeShop 画布 / 店助手 CSV / SHOPLINE MCP 都不是本机语义货盘）→ **自研**

**不改的话：** 带货只能拿资产 `prop` 凑合；会话和画布会各抄一份列表；产品被塞进 `custom`，永远搜不准。

---

## 1. 问题陈述

社媒 / 电商创作者在 OmniMux 里反复卖同一件货。资产库六类已经能沉淀角色、场景、风格、道具、知识，但 **「要卖的那件货」没有一等对象**。道具 `prop` 只有形制描述 + 图路径，没有卖点、人群、品牌、价格、SKU、链接。Agent 引用时会退化成「丢一张图」。

Gxgen 已经证明产品库的价值不在那个网盘 Tab，而在下游：聊天选品、`@product`、按需读图、模板槽。OmniMux 一级页已经对象化，**禁止再套一层云存储 Tab**；该搬的是对象模型，不是页面壳。

不解决的成本：

- 带货文案/主图不稳定，每次重写上下文
- 工作流或会话私藏第二份「产品表」，库里有、引用处没有
- 有人把货塞进资产 `custom`，污染六类语义

---

## 2. Goals

1. **10 秒内能建一条有名字的产品**（图可选），不必先选文件夹。
2. **对象层与磁盘分离**：媒体只引用 `real_path`；路径不在则该素材不显示；删库记录不动原文件。
3. **一份列表、多处消费**：CRUD 在产品库页；会话/画布/Agent 共用 `id` / `handle`。
4. **轻重上下文**：默认主图一张 + 文案字段；全套图必须显式 `products_read_media`。
5. **Agent 可检索**：按名称/卖点/品牌/SKU 搜到对象，而不是猜文件名。
6. **Agent 可建可改**：`products_create` / `products_update` 与 UI 写同一 store；一级页开着时写完 ≤5s 网格跟上。
7. **垂直边界干净**：不进 hub、不持密钥、磁盘只写 `$DSH_HOME/omnimux/products/`。

---

## 3. Non-Goals

| 不做 | 原因 |
|---|---|
| Gxgen `/cloud-storage?view=product-library` Tab | OmniMux 一级页已经对象化 |
| 把产品并进 `omnimux-assets`（第七类 / `type=product`） | 推翻 2026-08-22 六类拍板；tools/引用前缀混用 |
| CSV 导入、手机上传（含 disabled 占位按钮） | Gxgen 半成品，教用户功能坏了 |
| 导入/导出资产包、云同步、跨用户货盘 | local-first；与资产库同一红线 |
| 子文件夹树、通用 Finder | 产品不是可浏览目录 |
| hub 登录/模型路由、Electron 壳 | Phase 0 |
| Agent 默认灌全部商品图 | 窗口/成本策略 |
| 会话输入框 `@` 补全 | P2，须与资产库一起设计，禁止垂直插件自挂 observer 改 composer |
| 数字产品品牌战略、电商 URL 抓取 | P1 |
| 产品级垃圾桶、草稿生命周期 | P0 硬删 + 文案 |
| `--omx-*` 浅色 fallback | 一级页走 `--dsw-alias-*` |

---

## 4. 产品定位与对象模型

### 4.1 一句话

**产品库是要卖的货的本地语义库，不是磁盘浏览器，也不是资产库的一个 Chip。**

### 4.2 术语（禁止混用）

| 中文 | 代码 | 是什么 | 不是什么 |
|---|---|---|---|
| **产品** | `product` | 有 `id/name/handle/卖点/人群/媒体引用` 的记录 | 不是文件夹，不是 `prop` |
| **种类** | `product.kind` | `physical` / `digital` | 不是资产六类，不是 MIME |
| **产品媒体** | `product.media[]` | 挂在这条产品下的主图/细节图引用 | 不是产品本身 |
| **资产** | `asset` | 角色/场景/风格/道具/知识 | 画面物件，不是货盘 |
| **引用句** | cite | `@产品/{name}` | 不是 `@道具/…`，P0 不双写 `@product/` |

### 4.3 和资产 `prop` 为什么必须拆开

| | `omnimux-assets` `prop` | `omnimux-products` |
|---|---|---|
| 是什么 | 短剧/画面里的关键物件 | 要卖的货 + 怎么说 + 用哪张图 |
| 引用 | `@道具/红色发簪` | `@产品/某防晒` |
| 字段 | name / description / tags / files | 卖点/人群/品牌/价格/SKU/链接/（P1）品牌战略 |

P0 **不做**自动互转。用户把定妆建进产品库 → 文案引导去资产库。

### 4.4 schema（v1）

```text
Product {
  id:               "prd_xxxxxxxx"
  name:             string
  handle:           string              // 默认 = name 规范化
  kind:             "physical" | "digital"   // P0 UI 只建 physical
  description:      string
  selling_points:   string
  target_audience:  string
  brand:            string
  features:         string
  price:            string              // 自由文本，不做币种
  sku:              string
  promotion:        string
  categories:       string[]            // 最多 5，P0 自由标签
  language:         "auto" | string     // 默认 auto
  status:           "active"            // P0 写死；draft 不进 UI
  link:             string              // P0 只存不抓
  media:            ProductMedia[]
  cover_media_id:   string | null       // 默认第一张磁盘仍在的图
  brand_strategy:   object | null       // P0 恒 null
  source:           "manual" | "url-import" | "brand-analysis"
  created_at, updated_at
}

ProductMedia {
  id
  real_path
  original_name
  kind              // image|video|audio|document|other
  sort_order        // 0 = 主图候选
  is_primary
  // stat 失败 → 不进 visible media，不画预览
}

cite:  "@产品/{name}"
tools: 接受 id 或 handle
```

落盘：`$DSH_HOME/omnimux/products/library.json`（schema 1），目录 `0700`，JSON `0600`。

---

## 5. User Stories

**作为带货创作者**，我希望点「添加产品」就能建「某防晒」并写出卖点/人群，以便下次出图和文案不用重写。  
**作为带货创作者**，我希望给产品挂本地主图（只引用路径），以便聊天默认带那张图。  
**作为带货创作者**，我希望卡片能复制 `@产品/某防晒`，以便贴进会话或项目。  
**作为带货创作者**，我希望删产品或去掉一张图时磁盘原文件还在。  
**作为会话里的 Agent**，我希望按卖点/品牌搜到产品，以便引用货而不是猜文件名。  
**作为会话里的 Agent**，我希望默认只拿到主图；要全图再调工具，以便不撑爆上下文。  
**作为会话里的 Agent**，我希望能 `products_create` / `products_update` 建货和改卖点，以便对话里补货盘而不用人手填表。  
**作为带货创作者**，我希望产品库页开着时 Agent 刚建的货会自己出现在网格里，以便不用点刷新。  
**边界**：同名 `handle` 必须改名，禁止静默覆盖。  
**边界**：无图也可保存，卡片走名称占位封面。  
**边界**：创建时某条路径不存在 → 拒绝该条素材，产品仍可建。  
**边界**：Agent create 必须带名称 + 卖点或描述，禁止只丢一个空名字。人手建仍允许只填名称。  
**边界**：人正在编辑 overlay 时 Agent 改了同一条 → 不冲正在填的表；网格后台更新。  
**反故事**：角色定妆不属于本库。

---

## 6. 界面与交互

### 6.1 入口

```
新会话
 ├─ 应用                 rank 1  omnimux
 ├─ app tabs             rank 2  omnimux
 ├─ 账号                 rank 3  omnimux-accounts
 ├─ 资产库               rank 4  omnimux-assets
 ├─ 项目                 rank 5  omnimux-workflow
 └─ 产品库               rank 6  omnimux-products   ← 新增，不插队
```

- 座：`shell.overlay`；互斥 `dsh-product-stage`；顶距 **12 / 20 / 12**
- 侧栏：只 `window.__omnimuxSidebar.register()` 一次；禁止自挂 observer / interval
- 度量：32px 行 / 14px 图标 / 14px 字（`sidebar-extra-entries.md`）
- 点已选中会话行也要关页
- Settings：P0 **无 knobs**；以后只许 `settings.plugin.item`

**为什么不是资产库 Chip：** 六类是创作语义过滤，已经禁止第七类。产品放进去 = 告诉用户货 = 未分类素材。品牌战略详情（P1）也会撑爆资产弹窗。

### 6.2 一级页（P0）

单栏，视觉对齐资产中心，token `--dsw-alias-*`：

1. 顶栏：标题「产品库」；副标题「沉淀要卖的货：卖点、人群、主图，在会话里给 Agent 引用」；关闭
2. 动作行：主按钮 `+ 添加产品`。**不画** CSV / 导入包 / 手机上传
3. 过滤行：搜索（name / brand / selling_points / sku / handle）；排序最近更新。P0 不做类型 Chip
4. 网格：空态「还没有产品。先添加一件要卖的货。」
5. 卡片：可见主图或首字占位；标题 name；副文案卖点一行；悬停：复制引用、删除

### 6.3 创建 / 编辑（P0 实体表单 overlay）

| 区域 | 行为 |
|---|---|
| 名称 | 必填，trim 1–40，禁 `/` 与控制字符 |
| 媒体 | 拖入/系统选择本地图视频，可多选；顺序第一张 = 主图；可选 |
| 卖点 / 人群 / 品牌 / 特点 | 可选 |
| 价格 / SKU / 促销 / 链接 | 可选；链接只存 |
| 类别 | 最多 5 个自由标签 |
| 语言 | 默认 auto |
| 主按钮 | 名称为空则禁用 |

编辑：点卡片改字段、增删媒体、指定主图。不要文件夹钻取。  
**P0 不画「实物 / 数字」类型选择。**  
P1.1（数字货入口，2026-08-23）：表单可选手 `kind`；徽章跟 `kind`。战略六块 **仅** 在 `kind===digital` 且已 persist 的 `brand_strategy` 时默认展开；新建数字货收起，避免空壳写盘。URL 抓取仍属后续刀。  
P1.2（2026-08-23 已拍并编码）：按 `kind` 拆可见字段，schema 仍 1。数字 overlay：名称 / 链接 / 媒体 / 标签 + 战略六块，不画卖点/人群/品牌/特点/价格/SKU/促销。实物 overlay 不画战略。切 kind 隐藏不删（payload 省略对侧键）。页面不抓 URL；Agent/技能可写 link + strategy。Agent 数字货 `content-required`：链接或战略或卖点/描述。详情：`2026-08-23-omnimux-products-digital-fields.md`。

删除确认必须写：**只从产品库移除，不会删除磁盘上的原文件。** 不可恢复。

---

## 7. 业务逻辑

### 7.1 创建

```text
打开 overlay（physical）
  → 填 name / 文案字段 / 本地路径
  → POST /omnimux/products
  → handle 规范化；同名冲突 409
  → 每条媒体只写 real_path（存在才进 visible）
  → 不 copy、不 move
  → 返回 product
```

### 7.2 路径失效

`stat` 失败的媒体不出现在预览、详情列表、Agent visible 集。产品记录保留。路径回来后下次刷新自动出现。整条没有可见媒体时卡片仍在，走占位封面。

### 7.3 删除

只删 `library.json` 一行。**永不 `rm` `real_path`。**

### 7.4 Agent 工具

失败抛错，禁止 `{ ok:false }` 当成功返回。

| 工具 | 优先级 | 行为 |
|---|---|---|
| `products_list` | P0 | 可选 search；媒体只给主图路径 + 张数 |
| `products_search` | P0 | name/handle/brand/selling_points/target_audience/sku/categories |
| `products_get` | P0 | id 或 handle；P0 的 `brand_strategy` 为 null |
| `products_read_media` | P0 | 全套可见媒体；**失败不降级半包** |
| `products_create` | P0 | 与 UI 同一 store。`name` 合法。实物还要 `selling_points` 或 `description`；数字货要 `link` 或 `brand_strategy` 或卖点/描述，否则 `content-required`。默认 `kind=physical`，`source=manual`。页面不抓 URL |
| `products_update` | P0 | id 或 handle；部分更新；改名走同一 handle 规则；同名 409。无「防空货」加严 |
| `products_delete` | P1 | P0 **无此工具**。人走一级页硬删（HTTP `DELETE`）。不可恢复，Agent 容易漏「不删原文件」 |
| `products_random_media` | P2 | P0 用主图 |
| URL 导入 / 品牌战略 | P1 | 走 hub `textComplete` / `imageGenerate` seam；不持密钥；未登录抛 `needs-omnimux` |

System prompt：先搜再引用；引用带 `@产品/名称`（实物带卖点，数字货带链接/战略要点）；默认不要读全图；不要把产品库当工作区 cd；不要改 `real_path` 文件；建货必须带怎么卖（数字货可用链接或战略）；改完告诉用户可在产品库页看到。

**写路径唯一：** HTTP dispatcher 与 `ctx.tools` 都进 `library.js`，禁止两套规范化。UI/HTTP POST 允许只填名称；Agent create 另加 `content-required`。tools 走进程内 store，不经 HTTP（同窗 Agent 不受 loopback 限）。

HTTP（loopback 写校验；**POST/PUT/DELETE 都算写**，不要盲抄资产库「只拦 POST」）：

`GET/POST /omnimux/products` · `GET/PUT/DELETE /omnimux/products/:id` · `GET /omnimux/products/:id/media` · `GET /omnimux/products/state?prev=`

`state` 形状（**单** revision，禁止抄资产库双 rev）：

```
prev === 当前 revision → { revision, unchanged: true }     // 不带 products
否则                   → { revision, unchanged: false, products }
```

### 7.5 会话 / 画布消费

| 能力 | 优先级 | 归属 |
|---|---|---|
| 复制 `@产品/名称` | P0 | 产品库页 |
| Agent tools（含 create/update） | P0 | 产品库 Host；与 UI 同一 store |
| 选品弹窗（展图、点一张即引用、无二次确认） | P1 | **本插件拥有组件与查询**；工作流/会话调用，禁止各写一份列表 |
| composer `@` 补全 | P2 | 与资产库一并设计 |

### 7.6 一级页实时同步

「实时」= 本机、当前窗口、产品库页**已打开**。不是跨设备、不是 WebSocket。

| 规则 | 行为 |
|---|---|
| 打开页 | 立即拉一次 state；之后每 **5s** `GET .../state?prev=` |
| 关页 | **必须停 interval**；树用账号页 `everOpened` 保活（`display:none`，禁止 `return null` 卸树） |
| UI 自己写成功 | 立刻 refresh，不等下一轮 poll |
| Agent 他窗写 | 最多 **5s** 网格出现新卡或旧卡字段更新 |
| 脏 overlay | 不冲正在填的表；网格后台更新；非阻塞「重新加载 / 继续提交」（后写胜，无 ETag） |

POLL_MS 写死 5000，**不做 Settings**。

---

## 8. 存储与红线

```text
$DSH_HOME/omnimux/products/
  library.json     # schema 1，products[] + revision；媒体只有 real_path
```

**红线：**

- 对用户素材路径只读（`stat` / 读缩略图），禁止 copy / rename / unlink
- 删除产品 = 删 JSON 行，禁止 `rm` `real_path`
- 不 import hub，不持 `OMNIMUX_*`，不写 `series/` 或资产 `library.json`
- 不把云 `file_id` / 签名 URL 当真源
- POST / PUT / DELETE 走 loopback 写校验（不要盲抄资产库只拦 POST）
- 权限：目录 `0700`，JSON `0600`

---

## 9. Requirements

### P0 Must

1. 插件骨架：Host `/omnimux/products`、`library.json`、侧栏 rank 6、一级页 chrome
2. 手建 physical：§6.3 字段 + 本地媒体路径引用
3. 列表 / 搜索 / 详情编辑 / 删除（确认文案含不删原文件）
4. 失效素材不显示；无图卡片仍在
5. 复制 `@产品/名称`
6. tools **六件**：`products_list` / `search` / `get` / `read_media` / `create` / `update` + prompt 段。**无** `products_delete` 工具
7. 一级页打开时 5s `state?prev=` 轮询；Agent 写完 ≤5s 网格更新；关页停 poll；`everOpened` 保活
8. 单测：校验、同名冲突、删除不碰盘、搜索命中卖点、失效路径不在 visible、Agent 空名/无卖点 create 抛错、prev 命中 unchanged
9. Token：`--dsw-alias-*`；无 `--omx-*` fallback
10. 把本行写入 `sidebar-extra-entries.md` occupants（实施时改契约，不重排旧 rank）

### P1 Should

1. 实体 URL → 回填字段和图（hub seam；未登录不画半残按钮）
2. 数字产品：URL → `brand_strategy` + 首屏截图 `real_path`；详情可编辑。判定 **同时** 看 `kind=digital` 和 `brand_strategy`，避免 Gxgen「只看 JSON 真值」的缝。**P1.1 已落地人手/Agent 写 kind + 战略 persist**（无 URL 抓取）；徽章中文「实物 / 数字」
3. 选品弹窗（本插件拥有；与库同一查询）
4. 卡片真实缩略图
5. `products_delete` 工具（描述必须写死只删 JSON 行）
6. 可选：从资产库挑已有文件路径挂到产品（仍无跨库 FK）

### P2 Later

1. composer `@` 补全（与资产库一起）
2. `products_random_media`
3. 内容角度生成、ask_user 裁掉已绑字段
4. 软删 / 垃圾桶
5. 云同步、CSV、工作区共享

---

## 10. Success Metrics

本地产品，先定性 + 手动量，不编造用户数。

| 指标 | 成功线（内部试用） |
|---|---|
| 从打开产品库到建成第一条有名称的产品 | ≤ 1 分钟 |
| 新条带卖点或人群的比例 | ≥ 50%（这是 Agent 价值） |
| 复制 `@产品/` 或 Agent `products_search` 至少被用过 | 试用期内 ≥ 1 条会话 |
| 回退到资产 `custom`/`prop` 当货盘 | 应为 0（引导文案到位） |
| 删除后原文件仍在 | 100% QA |

---

## 11. 与现有插件

| 插件 | 关系 | MUST NOT |
|---|---|---|
| `omnimux` hub | P1 模型走 seam | import 内部、持钥、货盘进 hub |
| `omnimux-assets` | 平行准备库；引用前缀不同 | 扩六类、共享 store |
| `omnimux-workflow` | P1 画布 `source=product` 调本插件 HTTP/选品 | 工作流磁盘复制产品表 |
| `omnimux-accounts` / gallery | 无关 | 抢 rank 3 |
| `omnimux-drama` | 继续用角色/场景 | 产品库写 `series/` |
| 官方 composer | P0 当纯文本粘贴 | MutationObserver 改输入框 |

适配预判：新垂直 = Host + tools + overlay 一级页 + sidebar register。不改 Agent loop，P0 无 Settings section。

---

## 12. 社区结论

`awesome-dsh-plugin` + `topic:dsh-plugin` **没有**本机语义产品库。

| 候选 | 差距 | 结论 |
|---|---|---|
| `weshopai/weshop-dsh-plugin` | 画布电商视觉；持 `WESHOP_API_KEY` | 放弃 |
| `pengzhou267-ai/dsh-shop-assistant` | CSV/网页摘要，不是带 id 的货对象 | 放弃（P1 抓页可参考思路，不装包） |
| `lunw/shopline-ai-toolkit-dsh` | 店后台云商品 | 放弃 |
| 各类 `*-catalog` | 模型清单/插件目录，词碰撞 | 放弃 |

**建议：自研（product），不要装社区包。**

---

## 13. 拍板

2026-08-23 老板：「按照你的默认继续」。Q1–Q4 按默认生效。Q5–Q7 仍归架构，不挡 P0 原型。

| ID | 问题 | 拍板 | 拍板人 |
|---|---|---|---|
| Q1 | 独立一级页 vs 资产库 Chip | **独立页 + rank 6** | 老板 · 已拍 |
| Q2 | 引用句要不要双语 `@product/` | **P0 仅 `@产品/名称`**，tools 认 id/handle | 老板 · 已拍 |
| Q3 | URL 导入 / 数字品牌战略是否升 P0 | **否，P1** | 老板 · 已拍 |
| Q4 | 删除不可恢复？ | **P0 硬删 + 文案** | 老板 · 已拍 |
| Q5 | P1 抓页走 hub 模型（计费/登录） | 允许，经 seam；未登录明确失败 | 架构 |
| Q6 | 选品弹窗是否进官方 composer 槽 | P1 先 overlay，不改官方 composer | 架构 |
| Q7 | 产品媒体能否挂资产库已有路径 | P1 可选，不建 FK | 架构 |
| Q8 | Agent 能否 create/update | **P0 升**；delete 工具仍 P1 | 老板 · 已拍（2026-08-23 下午） |
| Q9 | 写完一级页怎么「实时」 | **打开页才 5s revision 轮询**；本窗写立即刷；不要 WS | 老板 · 已拍 |
| Q10 | 人正在编辑 + Agent 改同一条 | **不冲表**；网格后台更新；后写胜 | 需求默认 |

原型：`docs/superpowers/specs/2026-08-23-omnimux-products-prototype.html`。视觉 OK 后再进 M1。

---

## 14. 节奏（拍板后）

| 阶段 | 内容 | 出口 |
|---|---|---|
| 拍板 | Q1–Q4 | 已切「已拍板」 |
| 原型 | 可点 HTML，对齐资产库 chrome；含 Agent 建/改 → 网格跟上示意 | 本文同目录 `…-prototype.html` |
| M1 | schema + overlay 创建 + 空态一级页 + 侧栏 rank 6 | 能建一条无图产品 |
| M2 | 卡片、搜索、编辑、删除、失效不显示、复制 `@` | 主路径可演示 |
| M3 | Host 路由 + **六工具** + `state?prev=` + 打开页才 poll | 可 `yarn omnimux:sync omnimux-products` |
| 验收 | 真实 OmniMux 窗口：人手建改、Agent create/update、开着一级页 ≤5s 见新条、复制引用、删记录原文件还在 | 独立 QA，不自证 |

实施落点（视觉 OK 后）：`dsh-plugin/product/omnimux-dsh/plugins/omnimux-products/`  
运维入口：fork 仓库 `yarn omnimux:sync omnimux-products` + `yarn omnimux:restart`  
**未视觉 OK 前不写插件代码。**

---

_对照 Gxgen：搬「产品 = 元数据 + 媒体引用 + 下游同一 id」；不搬网盘 Tab、半成品按钮、云 fileId。对照资产库：同构路径引用与一级页 chrome；不同构类型体系和字段。_
