# Skill 货架分类过滤机制设计（Issue #497）

- 日期：2026-09-04
- 范围：`plugins/omnimux-market` 的 Composer Skill 选择器面板（picker）与插件广场技能 Tab（plaza）
- 前置：#494 已落地货架分类 v1（9 标签、tag 精确 + 文本兜底、未打标隐藏）

## 1. 分类法（Taxonomy）单一真源

### 1.1 有序常量（锁定顺序）

`全部 / 我的 / 精选` 为固定前置 Tab（「我的 / 精选」仅 picker 有），其后货架分类顺序锁定为：

| 序 | id | label i18n key | 兜底关键词（v1 = id 自身） |
|---|---|---|---|
| 1 | 电商 | picker.tab.ecom | [电商] |
| 2 | 商业广告 | picker.tab.ad | [商业广告] |
| 3 | 短剧漫剧 | picker.tab.drama | [短剧漫剧] |
| 4 | 专业影视 | picker.tab.film | [专业影视] |
| 5 | 动画 | picker.tab.anim | [动画] |
| 6 | 教育 | picker.tab.edu | [教育] |
| 7 | 创意实验 | picker.tab.lab | [创意实验] |
| 8 | 音频音乐 | picker.tab.audio | [音频音乐] |
| 9 | 平台工具 | picker.tab.platform | [平台工具] |

### 1.2 元数据结构

真源模块 `src/client/skill-picker-logic.js` 导出：

```js
SKILL_SHELF_TAXONOMY = Object.freeze([
  { id: '电商', labelKey: 'picker.tab.ecom', keywords: Object.freeze(['电商']) },
  // ...共 9 项，顺序即展示顺序
])
SKILL_SHELF_TAGS = Object.freeze(SKILL_SHELF_TAXONOMY.map(t => t.id)) // 兼容旧导出
```

- `id`：中文标签，同时是分类 Tab id、query 注入词、L1 匹配值。
- `labelKey`：i18n 文案键（i18n.js 已有全部 9 键，本次无新增）。
- `keywords`：L2/L3 兜底匹配词表，v1 收敛为 `[id]`（与 #494 行为完全一致）；扩充关键词是 P1 后续项，需评估误命中风险（如 `ad`、`music` 等短词不得直接进入词表）。

### 1.3 三处重复定义的处置

约束：client 片段经 `scripts/concat-client.mjs` 拼接为单 factory + esbuild，**UI 片段无法 import logic 模块**，且跨片段顶层 const 名必须唯一。因此：

- 评估方案 (a) 构建期从 logic 模块提取注入：需改 concat 脚本引入 AST/正则提取，构建链复杂度与故障面上升，否决。
- **选定方案 (b)：logic 模块为唯一语义真源 + 对拍守卫测试**。`skill-picker.js`（`SKILL_SHELF_TAGS`）与 `skill-plaza.js`（`PLAZA_SHELF_TAGS`）维持内联副本，新增 `skill-shelf-parity.test.js` 直接读取两个 UI 片段源码，断言内联数组与真源顺序**逐项相等**、label 映射覆盖全部 9 个 id。漂移即测试失败，构成强制同步机制。

## 2. 过滤机制形式化

### 2.1 匹配优先级分层（picker 与 plaza 共用同一套语义）

- **L1 tags 精确**：`item.tags` 包含任一货架 id → 命中该分类，且属于货架集合。
- **L2 结构化字段**：`category` / `categoryLabel` / `name` / `title` 拼接后包含关键词 → 命中。
- **L3 文本兜底**：`description` / `summary` / `tags.join(' ')` 拼接后包含关键词 → 命中。

实现上 L2/L3 合并为单一 haystack（现状一致），分层仅作为语义说明与未来收紧的挂点。判定函数：`matchesDomainTag(item, tag)`（picker 真源）/ `pickerMatchesTag`（picker UI 副本）/ `plazaFilterShelf` 内联（plaza）。

### 2.2 货架成员资格

`inSkillShelf(item)` / `plazaShelfItem(item)`：L1 命中任一分类，或 L2/L3 对任一分类关键词命中 → 属于货架；否则**不属于货架**。

### 2.3 未命中处理（锁定结论）

无货架标签且文本不命中的 skill **隐藏不展示**（维持 #494 行为）。理由：用户意图为「插件广场只显示这些分类的 skill」；不设「其他」桶，避免广场退化回全量噪声列表。唯一例外：picker 的「我的」Tab 展示全部已安装 skill（不过滤货架），保证已装资产始终可见可管理。

### 2.4 列表内排序（锁定结论）

保持搜索接口返回序（服务端相关性排序），客户端**不做二次重排**。分类 Tab 顺序 = Taxonomy 常量顺序。理由：客户端重排会破坏 SkillHub 在线源的相关性语义，且分页追加（plaza pageSize 48）下重排会产生跳动。

### 2.5 广场 query 注入语义（锁定结论）

- 广场选中分类时 payload `query = submitted ? submitted + ' ' + category : category`，`channels: ['custom','workbuddy']`：服务端按组合关键词召回（OR 倾向的相关性召回，保证有结果）。
- 客户端 `plazaFilterShelf(items, category)` 再执行**精确成员过滤**（AND 语义），保证展示项确实属于该分类。
- 即「服务端宽召回 + 客户端严过滤」分工。picker 侧同理（`buildSearchPayload` 注入 tag 词 + `filterPickerItems` 精确过滤）。

### 2.6 「我的」「精选」与货架标签的组合关系（picker）

三者与 9 个分类 Tab 为**平级互斥** Tab，不做组合筛选：

- 全部 = 货架成员全集；
- 我的 = `installed === true`（不过滤货架，见 2.3）；
- 精选 = `channels: ['custom']`（本地官方 catalog）∩ 货架成员；
- 分类 Tab = 货架成员 ∩ 该分类。

## 3. 双端一致性

picker 与 plaza 的过滤语义必须始终一致。对策：

1. 语义真源只在 `skill-picker-logic.js`；plaza 因 concat 约束保留内联实现（`PLAZA_SHELF_TAGS` / `plazaShelfItem` / `plazaFilterShelf`）。
2. `skill-shelf-parity.test.js` 对拍：标签数组顺序一致 + label 映射完整 + 兜底 haystack 字段集合一致（以源码结构断言约束）。
3. 行为级 fixture 对拍：同一组 fixture item 分别过 `filterPickerItems` 真源函数与 plaza 内联逻辑的语义断言（通过 parity 测试中的关键用例固化：tag 精确、name 命中、description 兜底、未命中隐藏）。

## 4. 任务列表（按实现顺序）

| # | 任务 | 文件 | 依赖 | 验收点 |
|---|---|---|---|---|
| T1 | 设计文档落盘 | `docs/design/2026-09-skill-shelf-filter-design.md` | — | 本文档 |
| T2 | Taxonomy 结构化 + 新顺序 | `plugins/omnimux-market/src/client/skill-picker-logic.js` | T1 | `SKILL_SHELF_TAGS` 顺序为 电商→…→平台工具；旧导出兼容 |
| T3 | picker UI 副本同步新顺序 | `plugins/omnimux-market/src/client/skill-picker.js` | T2 | 内联数组与真源逐项一致 |
| T4 | plaza UI 副本同步新顺序 | `plugins/omnimux-market/src/client/skill-plaza.js` | T2 | 同上 |
| T5 | 对拍守卫测试 | `plugins/omnimux-market/src/client/skill-shelf-parity.test.js`（新增） | T3 T4 | 漂移场景下测试失败 |
| T6 | logic 测试扩展（taxonomy 结构/顺序/唯一性） | `plugins/omnimux-market/src/client/skill-picker-logic.test.js` | T2 | 全绿 |
| T7 | `pnpm --filter omnimux-market test` + 仓级 `pnpm test` | — | T5 T6 | 全绿 |
| T8 | verify:live 真机验收（45120 Dev App） | `docs/evidence/live-qa-report.json` | T7 | 双端 Tab 顺序与过滤行为真机断言通过 |
| T9 | PR → Merge Queue → sync Dev → 销毁 worktree | — | T8 | main 合入、`~/.omnimux-dev` 物化 |

## 5. 待明确事项（建议默认值）

1. **兜底关键词扩充**（如英文别名 ecommerce/film）：默认不扩充，P1 后续单独评估误命中。
2. **「我的」是否也按货架过滤**：默认不过滤（已装资产必须可见）。
3. **窄宽度下 9+3 个 Tab 的折叠**：维持现状横向滚动，不在本期。
4. **plaza 是否补「我的/精选」Tab**：不补，广场保持「全部 + 货架分类」（picker 特有资产视角）。
