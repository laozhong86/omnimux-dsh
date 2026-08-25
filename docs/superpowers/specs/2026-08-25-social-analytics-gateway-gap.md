# OmniMux 网关社媒数据分析接口 Gap 分析与能力设计

> 状态：**已定界 / 网关接口设计已归档** · 版本：v1.0.0 · 负责人：齐活林（交付总监） · 模块：`omnimux` 执行中枢 & `omnimux-analytics`

---

## 一、 背景与现状审查

针对 **Analytics（社媒数据分析看板）** 页面需求，对 `product/omnimux-dsh` 当前已实现的执行中枢（Hub）代码及云端协议契约（`src/official/accounts.js`、`src/official/publish.js`、`src/official/social-data.js`、`contracts/hub.md`、`capabilities.md`）进行了全面审查。

### 1.1 现有 OmniMux 已具备/部分支持的能力

| 现有能力 / 接口 | 实现文件 / 机制 | 对 Analytics 看板的可用度 |
| :--- | :--- | :--- |
| **多平台授权账号列表** | `GET /omnimux/accounts`<br>`/api/social/v1/accounts` (`listAccounts`) | **✅ 可用**：能获取当前已绑定的社媒账号矩阵、平台类型（TikTok、X 等）、授权状态与本地分组。 |
| **单帖发布数据查询** | `omnimux_publish_get`<br>`/api/social/v1/posts/:id` | **⚠️ 部分可用**：仅能根据已知的 `post_id` 查询发布状态和基本元数据，不支持跨平台多帖子列表聚合。 |
| **社交单点抓取模型** | `omnimux_social_data`<br>（基于 `/v1/chat/completions` 模型映射） | **⚠️ 弱支持**：已挂载 `tiktok/user`, `tiktok/posts`, `x/user`, `x/posts` 等模型，但每次只能传入单个 `url/id/query` 做单次抓取，不是持久化的时序统计库。 |

---

## 二、 核心 Gap：现有接口无法满足的功能与缺失能力

截图中的数据看板属于**多维时序聚合分析（Time-Series Multi-Dimension Aggregation）**系统，目前 OmniMux Hub 和云端网关存在以下 **5 大核心缺失能力**：

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                             OmniMux 云端与网关 Gap                           │
├────────────────────────────────┬────────────────────────────────────────────┤
│ 1. 时序指标聚合数据缺失        │ ❌ 无法提供按周/按日切片的 Posts/Likes/ER 走势 │
│ 2. 账号粉丝历史演进接口缺失    │ ❌ 无 Follower Evolution（粉丝增长历史快照） │
│ 3. 统计学分析模型与热力图缺失  │ ❌ 无 7x24h 最佳发布时间热力图矩阵数据       │
│ 4. 内容生命周期衰减曲线缺失    │ ❌ 无 0-6h、6-12h... 互动累积生命周期分布   │
│ 5. 同步调度与归因系统缺失      │ ❌ 无 Last sync / Next sync 定时增量拉取任务 │
└────────────────────────────────┴────────────────────────────────────────────┘
```

### 2.1 缺失时序聚合与多维统计接口 (`/api/social/v1/analytics/overview`)
- **现状**：现有 `/api/social/v1` 只有发布操作接口（`presign`, `posts`），没有返回按时间范围、按平台切片的聚合接口。
- **看板诉求**：
  - 核心 KPI（`engagement_rate`, `total_reach`, `total_followers`, `posts_count`, `best_post`）。
  - 分布图（`posts_per_platform`, `likes_per_platform`）。
  - 走势折线（`posts_over_time`, `likes_over_time`, `engagement_over_time`）。

### 2.2 缺失粉丝增长演进快照接口 (`/api/social/v1/analytics/follower-evolution`)
- **现状**：现有 `listAccounts` 仅返回账号当前瞬间的静态信息（或需实时调用官方 API），没有历史快照。
- **看板诉求**：按日/周记录各绑定账号（TikTok, Twitter 等）的粉丝数量变化历史轨迹（如 `Aug 2, 2026: Total 401, TikTok 253, Twitter 148`）。

### 2.3 缺失发布热力图与频次模型算法数据 (`/api/social/v1/analytics/insights`)
- **现状**：无跨帖子统计分析算法。
- **看板诉求**：
  - **7 × 24 小时热力矩阵**：返回周一到周日 24 小时各个时段的互动表现分（0~100）。
  - **最优发布时段推荐**：如 `Sun 10am · 24`。
  - **频次与互动率相关性**：`Posting Frequency vs Engagement` 拟合回归线。
  - **生命周期衰减**：`Engagement Accumulation`（0~6h、6~12h、1~2d、2~7d、7~30d 累积百分比）。

### 2.4 缺失多平台帖子明细与排行榜接口 (`/api/social/v1/analytics/posts`)
- **现状**：无已发布帖子列表分页及性能指标排序接口。
- **看板诉求**：
  - 平台综合汇总表（`Platform Breakdown`：包含 Likes, Comments, Shares, Saves, Clicks, Views, Impr., Reach, ER）。
  - 单帖表现排行表（`Top Performing Posts`：支持按 ER、Views、Likes 等字段排序与筛选）。

### 2.5 缺失云端定时拉取与增量同步机制 (`Sync Engine`)
- **现状**：无后台 Cron 定时拉取第三方社媒（TikTok API、X API）并落地时序数据库的机制。
- **看板诉求**：页面顶部的 `Last sync: 14m ago` 与 `Next sync: in 46m` 说明后端需要一个周期性调度器（例如每小时全量同步一次各账号互动增量）。

---

## 三、 建议由 OmniMux 网关/云端提供的标准 API 设计清单

为支撑此 Analytics 看板的上线，建议向 OmniMux 云端/中枢网关申请扩充以下 **4 组标准 RESTful 接口**（鉴权沿用现有的 PAT / Access Token 机制）：

```http
# 1. 核心大盘概览与时序走势
GET /api/social/v1/analytics/overview?platforms=tiktok,x&account_ids=...&time_range=30d
Response:
{
  "kpi": { "engagement_rate": 0.0226, "total_reach": 0, "total_followers": 635, "follower_diff": 17, "posts_count": 12, "best_post": { ... } },
  "posts_distribution": { "platforms": { "tiktok": 12 }, "over_time": [{ "date": "2026-07-27", "count": 6 }, ...] },
  "likes_distribution": { "platforms": { "tiktok": 34 }, "over_time": [{ "date": "2026-07-27", "count": 34 }, ...] },
  "engagement_over_time": [{ "date": "2026-07-27", "likes": 35, "comments": 8, "shares": 2, "views": 2000, "er": 0.0226 }, ...]
}

# 2. 深度洞察与策略模型
GET /api/social/v1/analytics/insights?time_range=30d
Response:
{
  "best_time_heatmap": [ { "day_of_week": 0, "hour": 10, "score": 24, "level": 4 }, ... ],
  "recommended_times": [ { "label": "Sun 10am", "score": 24 }, { "label": "Wed 8pm", "score": 18 } ],
  "follower_evolution": [ { "date": "2026-08-02", "total": 401, "breakdown": { "tiktok": 253, "x": 148 } } ],
  "cadence_vs_er": [ { "cadence_bracket": "6-10/wk", "er": 0.006 }, { "cadence_bracket": "11+/wk", "er": 0.024 } ],
  "accumulation_curve": [ { "window": "0-6h", "pct": 40 }, { "window": "2-7d", "pct": 80 }, { "window": "7-30d", "pct": 100 } ]
}

# 3. 平台明细表与单帖排行榜
GET /api/social/v1/analytics/breakdown?time_range=30d
GET /api/social/v1/analytics/posts/top?sort=er&order=desc&page=1&page_size=20

# 4. 同步调度与触发
GET /api/social/v1/analytics/sync-status
POST /api/social/v1/analytics/sync-now
```

---

## 四、 本地插件层（`omnimux-analytics`）与网关的分工建议

1. **OmniMux 云端网关职责**：
   - 负责与各社媒开放平台（TikTok Open API、X API、YouTube Data API）对接、OAuth Token 刷新。
   - 负责周期性抓取各账号发帖、播放、点赞互动增量，维护时序数据聚合表。
2. **DSH 插件端（前端 & Host）职责**：
   - 在 `product/omnimux-dsh/plugins/omnimux-analytics` 注册首层 Stage 页面（`shell.overlay`）或侧边栏 Entry。
   - 消费上述 4 个标准接口，完成交互筛选、图表联动渲染（ECharts/Chart.js）、本地数据缓存（500ms 防抖响应）与导出。
