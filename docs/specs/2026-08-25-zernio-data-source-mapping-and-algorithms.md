---
title: "Zernio 数据源调研与 OmniMux 网关能力映射方案"
id: "spec-zernio-data-source-mapping-and-algorithms"
type: "spec"
status: "accepted"
authority: "L2"
date: "2026-08-25"
authors: ["x", "agent-architect"]
subsystem: "omnimux-analytics"
---

# Zernio 数据源调研与 OmniMux 网关能力映射方案

> 状态：**调研完成 / 映射方案已归档** · 版本：v1.0.0 · 负责人：齐活林（交付总监） · 参考源：[Zernio API Docs](https://docs.zernio.com/)

---

## 一、 调研背景与核心结论

通过对 `docs.zernio.com`（覆盖 16 个社媒平台的统一 API）的全面检索分析，**截图中所展示的所有分析图表与核心指标，在 Zernio 体系中均有现成或高度对应的原生数据支持**。

### 核心结论一览
1. **现成未接入网关的数据源（Ready in Zernio）**：
   - Zernio 已原生提供 `/v1/analytics`（全平台发帖分析）、`/v1/analytics/daily-metrics`（每日大盘指标）、`/v1/analytics/best-time-to-post`（最佳发布时间矩阵）、`/v1/analytics/posting-frequency`（频次与互动率模型）、`/v1/analytics/content-decay`（互动生命周期累积）、`/v1/accounts/follower-stats`（粉丝演进历史）、`/v1/analytics/sync-external-posts`（外部帖子增量同步）以及 `Inbox Analytics` 系列接口。
2. **可自研算法获取的衍生数据（Derived by Algorithm）**：
   - 顶部 5 大 KPI 跨账号去重加权汇总、`Platform Breakdown` 综合表格聚合、热力图 5 级绿度分位数阶梯算法、最优发帖时段推荐 Chips 提取、单帖综合性能权重打分（Best Post 计算）、数据同步倒计时与过期预警状态机。

---

## 二、 现成数据源对照表（Zernio API 深度映射）

下表详细梳理了 **截图看板各功能模块 ↔ Zernio 现成 API 端点 ↔ OmniMux 网关当前接入状态**：

| 看板 UI 模块 / 图表 | 对应 Zernio 现成接口 / 字段 | Zernio 返回数据结构 (Schema 摘要) | OmniMux 接入现状 |
| :--- | :--- | :--- | :--- |
| **1. 基础大盘与走势**<br>· Posts over time<br>· Likes over time<br>· Engagement over time | `GET /v1/analytics/daily-metrics` | `dailyData`: `[{ date, postCount, platforms: { tiktok: 2 }, metrics: { impressions, reach, likes, comments, shares, saves, clicks, views } }]` | ❌ **未接入**（OmniMux 仅有发布接口） |
| **2. 最佳发布时间热力图**<br>· Best Time to Post (7×24h) | `GET /v1/analytics/best-time-to-post` | `slots`: `[{ day_of_week: 0..6, hour: 0..23, avg_engagement: 510.3, post_count: 15 }]` | ❌ **未接入** |
| **3. 发帖频次 vs 互动率**<br>· Posting Frequency vs Engagement | `GET /v1/analytics/posting-frequency` | `frequency`: `[{ platform: "tiktok", posts_per_week: 2, avg_engagement_rate: 44.4, avg_engagement: 512, weeks_count: 18 }]` | ❌ **未接入** |
| **4. 互动生命周期衰减**<br>· Engagement Accumulation | `GET /v1/analytics/content-decay` | `buckets`: `[{ bucket_order: 0, bucket_label: "0-6h", avg_pct_of_final: 45.2, post_count: 89 }, { bucket_label: "2-7d", avg_pct_of_final: 80.0 }]` | ❌ **未接入** |
| **5. 粉丝增长演进曲线**<br>· Follower Evolution | `GET /v1/accounts/follower-stats` | `accounts`: `[{ platform, username, currentFollowers, growth }]`<br>`stats`: `{ [accountId]: [{ date, followers }] }` | ❌ **未接入**（当前仅有静态 `listAccounts`） |
| **6. 单帖排行榜 & 明细**<br>· Top Performing Posts | `GET /v1/analytics`<br>`GET /v1/analytics/post-timeline` | `posts`: `[{ postId, content, scheduledFor, publishedAt, analytics: { impressions, reach, likes, comments, shares, saves, clicks, views, follows } }]` | ⚠️ **仅单帖弱支持**（缺少列表及全字段） |
| **7. 增量数据即时同步**<br>· Sync External Posts | `POST /v1/analytics/sync-external-posts` | `{ accountId, url? }` 触发平台最新外部帖子即时拉取与指标刷新 | ❌ **未接入** |
| **8. 私信互动分析**<br>· Inbox Analytics (Tab 2) | `GET /v1/inbox-analytics/get-inbox-volume`<br>`GET /v1/inbox-analytics/get-inbox-heatmap`<br>`GET /v1/inbox-analytics/get-inbox-response-time` | 包含会话量、回复时效（TTR）、来源分布与消息热力图 | ❌ **未接入** |

---

## 三、 基于基础数据的自研算法与客户端加工方案

以下功能模块无需等待云端复杂建模，通过拉取上述基础数据，在 **OmniMux 网关层或插件本地端** 即可通过自研算法实现：

```
                               ┌────────────────────────┐
                               │  Zernio 基础时序与帖子   │
                               └───────────┬────────────┘
                                           │
         ┌─────────────────────────────────┼─────────────────────────────────┐
         ▼                                 ▼                                 ▼
┌──────────────────┐             ┌──────────────────┐             ┌──────────────────┐
│ 1. 核心 KPI 汇总  │             │ 2. 热力色阶与推荐 │             │ 3. 平台明细聚合表 │
│  · 加权 ER 计算   │             │  · 5 级分位数映射 │             │  · 多指标多维汇总 │
│  · Best Post 评选 │             │  · Top N 时段提炼 │             │  · 缺失项保底兼容 │
└──────────────────┘             └──────────────────┘             └──────────────────┘
```

### 3.1 核心 KPI 汇总与 Best Post 评选算法
- **综合互动率 (Overall ER)**：
  $$\text{ER} = \frac{\sum (\text{Likes} + \text{Comments} + \text{Shares} + \text{Saves})}{\sum \text{Views}} \times 100\%$$
  *(若 Views 为 0 或缺失，则回退为 Impressions 或 Reach)*
- **Best Post（爆款甄选权重算法）**：
  $$\text{Score}(P) = w_1 \cdot \text{ER}(P) + w_2 \cdot \log_{10}(\text{Views} + 1) + w_3 \cdot \text{Shares}$$
  从帖子列表中选出得分最高的帖子作为卡片展示，提供封面缩略图与跳转入口。

### 3.2 7×24h 热力图 5 级绿度分位数与推荐提取算法
- **分位数阶梯映射（Quantile Binning）**：
  将 `best-time-to-post` 返回的所有非空时段的 `avg_engagement` 进行升序排序，按五分位数（0~20%、20~40%、40~60%、60~80%、80~100%）映射为 5 级色阶（`#ebedf0` $\rightarrow$ `#c6e48b` $\rightarrow$ `#7bc96f` $\rightarrow$ `#239a3b` $\rightarrow$ `#196127`）。
- **Best Times 推荐 Chips 提取**：
  选取矩阵中 `avg_engagement` 排名前 3 的格子，按 `[星期 + 时段 · 互动指数]` 格式化（例如 `Sun 10am · 24`）。

### 3.3 Platform Breakdown 跨平台聚合计算
- **汇总算法**：
  对所选周期内的 `dailyData` 或 `posts` 列表按 `platform` 字段进行 `groupBy`，分别计算每个平台的发帖总量、点赞总量、评论总量、分享总量、播放总量及平台独立 ER，输出标准化表格对象。

### 3.4 同步状态与倒计时机（Sync Status Engine）
- **本地调度状态机**：
  记录最近一次同步时间戳 `last_sync_timestamp`，本地定时器每秒递减下次同步倒计时（如基于 60 分钟周期，`next_sync = 3600 - ((now - last_sync) % 3600)`），并在前端渲染 `Last sync: Xm ago` / `Next sync: in Ym`。

---

## 四、 OmniMux 网关改造建议（开发落地步骤）

为了打通社媒数据分析看板，建议在 `product/omnimux-dsh` 执行中枢中执行如下改造：

1. **扩展 `src/official/client.js`**：
   - 增加对 `/v1/analytics/*`、`/v1/accounts/follower-stats`、`/v1/inbox-analytics/*` 的转发与鉴权封装。
2. **扩展 `src/official/mount.js` 注册官方工具**：
   - `omnimux_analytics_overview`（对应 daily-metrics 与 KPI 计算）。
   - `omnimux_analytics_insights`（对应 best-time, content-decay, posting-frequency）。
   - `omnimux_analytics_followers`（对应 follower-stats）。
   - `omnimux_analytics_posts`（对应 get-analytics 帖子列表与排行）。
   - `omnimux_analytics_sync`（对应 sync-external-posts 触发立即增量拉取）。
3. **在 `omnimux-analytics` 插件中实现 UI 与可视化**：
   - 接入 DSH UI Kit，按首层页面规范（4 层标准布局）构建响应式图表看板。
