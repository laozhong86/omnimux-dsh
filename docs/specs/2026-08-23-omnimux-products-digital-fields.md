---
title: "Gxgen 数字产品结构对照（P1.2 表单拆分）"
id: "spec-omnimux-products-digital-fields"
type: "spec"
status: "accepted"
authority: "L2"
date: "2026-08-23"
authors: ["x", "agent-architect"]
subsystem: "omnimux-products"
---

# Gxgen 数字产品结构对照（P1.2 表单拆分）

> 状态：**P1.2 已拍并编码**（2026-08-23；页面不抓 URL，Agent/技能补分析）  
> 输入：老板「数字产品的字段应该和实物产品的字段不一样」  
> 真源：`Gxgen/apps/web/src/pages/ProductLibrary/`、`Gxgen/server/src/services/productService.ts`、`parseBrandYaml.ts`；OmniMux `plugins/omnimux-products/src/client/ProductFormDialog.jsx`  
> 不改代码。URL 抓取仍属后续刀。schema 仍是 1。

---

## 0. TL;DR

老板判断对。Gxgen **库表是一张、界面是两套**。OmniMux P1.1 只把 `kind` 和战略六块塞进**同一张 overlay**，实物电商字段永远在，数字产品看起来像「带折叠战略的 SKU 表」。

| | Gxgen | OmniMux P1.1 |
|---|---|---|
| 存盘 | 一行 `products` + 可选 `brand_strategy` JSONB | 一行 `library.json` + 可选 `brand_strategy` |
| 创建 | 先选类型 → 两条 UI | 同一 overlay 切手 `kind` |
| 数字创建写什么 | `name` + `link` + `productType:digital` + `brandStrategy` + 截图 `fileIds` | 卖点/人群/品牌/特点/价格/SKU/促销/链接 **全写**，战略可折叠 |
| 实物创建写什么 | 卖点/人群/品牌/特点/价格/SKU/促销/链接/媒体 | 同上 |
| 编辑分叉 | **`brand_strategy` 真值** → 六卡详情，否则抽屉 | 仍是同一 overlay |

建议 **P1.2 只拆可见字段，不拆库**：`kind=physical` 走电商文案；`kind=digital` 走名称 / 链接 / 媒体 / 标签 + 战略六块。不复制 Gxgen「只看 JSON 真值」那条缝。

---

## 1. Gxgen 怎么分叉

```
添加产品
 ├─ 实体产品 → ProductDrawer（手填电商字段；可选 URL 导入回填）
 └─ 数字产品 → DigitalProductModal（只填网站 URL）
                 → analyzeBrandStrategy
                 → create { productType:'digital', brandStrategy, fileIds, name, link }
                 → BrandStrategyDetail（六卡）
```

编辑：`handleEditProduct` **先看 `product.brand_strategy`**。有对象进详情，没有才开抽屉。`product_type` 不是编辑路由的真源。实体货若被误写入战略 JSON，点卡片也会进六卡——现网缝。

后端 `createProduct` 仍接全套电商字段。数字弹窗**不传** `sellingPoints` / `price` / `sku`，那些列落 `null`。数字不是另一种 schema，是另一条 **写入子集**。

---

## 2. 字段对照

### 2.1 创建时人看见 / 真正提交

| 字段 | Gxgen 实物抽屉 | Gxgen 数字弹窗 | OmniMux P1.1 overlay |
|---|---|---|---|
| 类型选择 | 进抽屉前选 | 进 URL 弹窗前选 | overlay 内 chip |
| 名称 | 必填 | AI 给，失败用 URL | 必填 |
| 链接 | 可选 +「导入」抓电商页 | **唯一输入** | 始终一格，只存 |
| 卖点 / 人群 / 品牌 / 特点 | 手填或导入回填 | 不提交（列 null） | **始终可见** |
| 价格 / SKU / 促销 | 手填或导入回填 | 不提交 | **始终可见** |
| 类别 | 品牌类别接口，按 kind 滤，最多 5 | 从战略 `product.category` 推断一条 | 自由标签最多 5 |
| 语言 | 默认 auto | 不填 | schema 有，表单没画 |
| 媒体 | 本地 / 云存储 / 导入图 | 分析产出的桌面+移动首屏截图 | 本地 `real_path` |
| `brand_strategy` | 不写 | **创建必写**（分析成功才建） | 可折叠；新建数字默认收起，空壳不 persist |

### 2.2 数字详情六块（Gxgen `BrandStrategyDetail` = OmniMux 战略区）

结构与 `brandStrategySchema` / OmniMux `brand-strategy.js` 对齐：

1. `brand_basic_info` 公司名 / 网站 / locale / 产品名 / 类目
2. `content_angles[]` 标题 / 描述 / 人群 / priority 1–3（最多 10）
3. `tone_and_voice` dos / donts
4. `identity_and_product` 核心身份 / 供给 / 优势 / 解决的问题 / 方案
5. `mission_and_positioning` 使命 / 差异化 / ownable_space
6. `market_and_competition` 客群占比 / 竞品名+网站

Gxgen 解析时会把 `problems_solved` 并进 `solutions`，并把 ownable `category` 收成一句话 statement。OmniMux 规范化**保留两套列表 + ownable.category**，不做这次合并。P1.2 不必改。

Gxgen 详情头只展示 **产品名 + 外链**，不展示价格/SKU。

---

## 3. OmniMux 现状为什么看起来「一类表」

`ProductFormDialog.jsx` 不管 `kind`：

- 卖点 / 人群 / 品牌 / 特点 / 价格 / SKU / 促销 / 链接永远画
- 战略六块永远挂在底部，用折叠而不是换表
- `payload()` 每次把电商字段整包提交
- `isDigitalProduct` = `kind==='digital' &&` 已 persist 的战略对象，只控制**默认展开**，不控制字段集

P1.1 完成的是「kind 可写 + 战略能落盘」，不是「数字货长得像品牌页」。

---

## 4. P1.2（已拍：对齐 Gxgen 可见字段；人手创建；链接导入走 Agent/技能）

**仍 `omnimux-products`，schema 1，不拆表。** 分叉在 overlay / Agent 提示，不在 `library.json` 形状。

### 实物 overlay

名称、媒体、卖点、人群、品牌、特点、价格、SKU、促销、链接、标签。  
战略区 **不出现**（切到数字再出现）。  
已有战略的实物：切 kind 时不清库，只是本屏不画；切回数字再看见。

### 数字 overlay

名称、链接、媒体、标签 + 战略六块（默认：已 persist 则展开，新建收起）。  
**不画**卖点 / 人群 / 品牌 / 特点 / 价格 / SKU / 促销。  
提交：这些键写空串（或省略，store 保持旧值）。不在 persist 时清空已有卖点，避免人手误切 kind 丢字段。

### 编辑路由

跟 **`kind`**，不跟 `brand_strategy` 真值。避免抄 Gxgen 缝。

### Agent

- `kind=digital`：名称 + 链接或战略或描述/卖点之一即可过 `content-required`（待拍；默认仍可要求描述，避免空壳站点）
- 工具描述写清：数字货不要填 SKU/价格；那些是实物字段
- 仍无 URL 分析、无 `products_delete`

### 明确不做（本刀）

URL → `analyzeBrandStrategy`、选品弹窗、`products_delete`、挂资产路径、拆独立详情页。数字创建允许手填链接+战略，不等待抓页。

---

## 5. 拍板点

| # | 问题 | 建议默认 |
|---|---|---|
| Q1 | 数字 overlay 是否隐藏全部电商字段？ | **是** |
| Q2 | 数字是否保留「人群」？Gxgen 把它放在战略 angles 里 | **否**，只留在战略块 |
| Q3 | 切 kind 是否清空对侧字段？ | **否**，隐藏不删 |
| Q4 | 编辑分叉跟 kind 还是跟战略真值？ | **kind** |
| Q5 | Agent 数字货 `content-required` 放宽到「链接或战略」？ | **是**，人手仍可只填名称 |

拍板后下一刀只改 `ProductFormDialog` + tools 文案 + 测；不 sync 杀 App。
