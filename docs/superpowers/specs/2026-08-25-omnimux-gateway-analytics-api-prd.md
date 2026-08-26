# OmniMux 网关社媒数据分析 (Social Analytics) 接口接入需求文档 (PRD)

> **文档版本**：v1.0.0  
> **文档状态**：待评审 / 开工就绪  
> **负责人**：齐活林（交付总监）  
> **业务与架构定位**：定义 OmniMux 执行中枢（Hub）与云端网关需新增的社媒分析接口契约、鉴权机制、数据模型与对应 Cordis 官方工具封装。

---

## 一、 需求背景与目标

### 1.1 业务背景
当前 OmniMux 执行中枢（`product/omnimux-dsh/plugins/omnimux`）已打通 `/api/social/v1/accounts`（账号授权与管理）及 `/api/social/v1/posts`（发布与预签名），但在数据分析层（Analytics）仅有基于 `/v1/chat/completions` 的单点弱抓取模型（`omnimux_social_data`），无法支撑**多账号矩阵大盘分析、时序趋势、发布热力图、互动生命周期、粉丝演进以及私信转化分析**等高阶业务场景。

底层数据源能力（参考 Zernio 规范）已完全具备上述分析接口。OmniMux 网关需将这些现成能力标准化接入，并向上层业务插件（如 `omnimux-analytics`）提供标准的 HTTP 路由与 Cordis Tools 接口。

### 1.2 建设目标
1. **网关层代理**：在 OmniMux 云端/中枢网关中代理并标准化 8 个核心社媒分析端点。
2. **中枢工具挂载**：在 `omnimux` 插件（`src/official/mount.js`）中注册对应 `omnimux_analytics_*` 官方工具，支持 Agent 与本地 UI 调用。
3. **本地 HTTP 分发**：在 `src/official/http-routes.js` 扩展 `/omnimux/analytics/*` 路由，供桌面端/Web 端前端安全消费。

---

## 二、 系统架构与数据流转

```
┌────────────────────────────────────────────────────────────────────────┐
│               前端 / 业务插件层 (omnimux-analytics)                     │
│  - 4层布局 Stage 页面 (shell.overlay) / KPI卡片 / ECharts 图表 / 排行榜 │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼ Local HTTP / Tool Call
┌────────────────────────────────────────────────────────────────────────┐
│               OmniMux 执行中枢 (product/omnimux-dsh)                    │
│  - src/official/http-routes.js: 路由分发与安全校验                      │
│  - src/official/mount.js: Cordis Tool 注册 (omnimux_analytics_*)       │
│  - src/official/client.js: withPat / withSk 鉴权与 HTTP 转发            │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼ HTTPS (Bearer Token / PAT)
┌────────────────────────────────────────────────────────────────────────┐
│               OmniMux 云端社媒网关 / Zernio 适配层                     │
│  - /v1/analytics/daily-metrics, best-time-to-post, follower-stats ...  │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 三、 待接入接口详细契约 (API Specifications)

### 1. 每日时序大盘指标 (`GET /v1/analytics/daily-metrics`)
- **接口定位**：获取指定时间段内的每日汇总数据、各平台发帖数以及各项互动指标（用于渲染 Posts/Likes/Engagement over time 走势图）。
- **请求参数 (Query)**：
  | 参数名 | 类型 | 必填 | 默认值 | 说明 |
  | :--- | :--- | :--- | :--- | :--- |
  | `fromDate` | string (YYYY-MM-DD) | 否 | 30天前 | 统计开始日期 |
  | `toDate` | string (YYYY-MM-DD) | 否 | 当天 | 统计结束日期 |
  | `profileId` | string | 否 | - | 指定租户/品牌 Profile ID |
  | `platform` | string | 否 | - | 平台过滤（`tiktok`, `twitter`, `instagram`, `youtube` 等） |
  | `accountIds` | string | 否 | - | 逗号分隔的账号 ID 列表 |
- **响应结构 (JSON)**：
  ```json
  {
    "dailyData": [
      {
        "date": "2026-08-01",
        "postCount": 6,
        "platforms": { "tiktok": 4, "twitter": 2 },
        "metrics": {
          "impressions": 12500,
          "reach": 8900,
          "likes": 340,
          "comments": 28,
          "shares": 15,
          "saves": 12,
          "clicks": 45,
          "views": 9800
        }
      }
    ],
    "platformBreakdown": [
      {
        "platform": "tiktok",
        "postCount": 12,
        "metrics": { "likes": 34, "comments": 8, "shares": 2, "views": 1900, "er": 2.28 }
      }
    ]
  }
  ```

---

### 2. 7×24小时最佳发布时间热力矩阵 (`GET /v1/analytics/best-time-to-post`)
- **接口定位**：分析历史各时段发帖表现，返回周一至周日 24 小时的互动打分矩阵。
- **请求参数 (Query)**：
  | 参数名 | 类型 | 必填 | 默认值 | 说明 |
  | :--- | :--- | :--- | :--- | :--- |
  | `platform` | string | 否 | - | 平台过滤（缺省为全平台） |
  | `accountId` | string | 否 | - | 指定账号 ID |
  | `profileId` | string | 否 | - | 租户 Profile ID |
- **响应结构 (JSON)**：
  ```json
  {
    "slots": [
      { "day_of_week": 0, "hour": 10, "avg_engagement": 510.3, "post_count": 15 },
      { "day_of_week": 2, "hour": 18, "avg_engagement": 342.5, "post_count": 12 },
      { "day_of_week": 3, "hour": 20, "avg_engagement": 289.1, "post_count": 8 }
    ],
    "recommended": [
      { "label": "Sun 10am", "day_of_week": 0, "hour": 10, "score": 24 },
      { "label": "Wed 8pm", "day_of_week": 3, "hour": 20, "score": 18 }
    ]
  }
  ```

---

### 3. 发帖频次与互动率相关性模型 (`GET /v1/analytics/posting-frequency`)
- **接口定位**：分析各平台每周发帖篇数（Cadence）与最终互动率之间的关联模型。
- **请求参数 (Query)**：
  | 参数名 | 类型 | 必填 | 默认值 | 说明 |
  | :--- | :--- | :--- | :--- | :--- |
  | `profileId` | string | 否 | - | 租户 Profile ID |
  | `platform` | string | 否 | - | 平台过滤 |
- **响应结构 (JSON)**：
  ```json
  {
    "frequency": [
      {
        "platform": "tiktok",
        "posts_per_week": "6-10/wk",
        "avg_engagement_rate": 0.6,
        "avg_engagement": 120,
        "weeks_count": 12
      },
      {
        "platform": "tiktok",
        "posts_per_week": "11+/wk",
        "avg_engagement_rate": 2.2,
        "avg_engagement": 480,
        "weeks_count": 8
      }
    ],
    "optimalCadence": {
      "tiktok": { "recommendation": "11+/wk", "er": 2.2 }
    }
  }
  ```

---

### 4. 内容生命周期互动累积衰减曲线 (`GET /v1/analytics/content-decay`)
- **接口定位**：分析内容发布后在不同时间窗口内互动的累积百分比分布。
- **请求参数 (Query)**：
  | 参数名 | 类型 | 必填 | 默认值 | 说明 |
  | :--- | :--- | :--- | :--- | :--- |
  | `profileId` | string | 否 | - | 租户 Profile ID |
  | `platform` | string | 否 | - | 平台过滤 |
- **响应结构 (JSON)**：
  ```json
  {
    "buckets": [
      { "bucket_order": 0, "bucket_label": "0-6h", "avg_pct_of_final": 42.5, "post_count": 45 },
      { "bucket_order": 1, "bucket_label": "6-12h", "avg_pct_of_final": 58.0, "post_count": 45 },
      { "bucket_order": 2, "bucket_label": "12-24h", "avg_pct_of_final": 62.1, "post_count": 45 },
      { "bucket_order": 3, "bucket_label": "1-2d", "avg_pct_of_final": 71.3, "post_count": 45 },
      { "bucket_order": 4, "bucket_label": "2-7d", "avg_pct_of_final": 80.4, "post_count": 45 },
      { "bucket_order": 5, "bucket_label": "7-30d", "avg_pct_of_final": 100.0, "post_count": 45 }
    ],
    "milestones": {
      "half_engagement_by": "2-7d",
      "eighty_percent_within": "2-7d"
    }
  }
  ```

---

### 5. 粉丝增长历史演进统计 (`GET /v1/accounts/follower-stats`)
- **接口定位**：获取所绑定的各社媒账号随时间变化的粉丝量历史快照与净增情况。
- **请求参数 (Query)**：
  | 参数名 | 类型 | 必填 | 默认值 | 说明 |
  | :--- | :--- | :--- | :--- | :--- |
  | `profileId` | string | 否 | - | 租户 Profile ID |
  | `accountIds` | string | 否 | - | 账号 ID 列表 |
  | `days` | number | 否 | 30 | 统计天数 |
- **响应结构 (JSON)**：
  ```json
  {
    "accounts": [
      {
        "accountId": "acc_tt_01",
        "platform": "tiktok",
        "username": "@dsh_drama",
        "currentFollowers": 253,
        "growth": 17,
        "growthPercentage": 7.2
      },
      {
        "accountId": "acc_x_01",
        "platform": "twitter",
        "username": "@dsh_official",
        "currentFollowers": 148,
        "growth": 0,
        "growthPercentage": 0.0
      }
    ],
    "timeline": [
      {
        "date": "2026-08-02",
        "total": 401,
        "breakdown": { "acc_tt_01": 253, "acc_x_01": 148 }
      }
    ]
  }
  ```

---

### 6. 单帖与列表深度分析 (`GET /v1/analytics`)
- **接口定位**：支持按时间、平台、互动排序条件查询帖子分析列表（Top Performing Posts 表格数据源）或单篇帖子分析。
- **请求参数 (Query)**：
  | 参数名 | 类型 | 必填 | 默认值 | 说明 |
  | :--- | :--- | :--- | :--- | :--- |
  | `postId` | string | 否 | - | 传入时仅查单帖 |
  | `sortBy` | string | 否 | `date` | 排序字段（`date`, `engagement`, `impressions`, `reach`, `likes`, `comments`, `shares`, `saves`, `clicks`, `views`） |
  | `sortOrder` | string | 否 | `desc` | `asc` 或 `desc` |
  | `platform` | string | 否 | - | 平台过滤 |
  | `limit` | number | 否 | 50 | 分页条数 (1-100) |
  | `page` | number | 否 | 1 | 页码 |
- **响应结构 (JSON)**：
  ```json
  {
    "posts": [
      {
        "postId": "post_789abc",
        "platform": "tiktok",
        "content": "Ep.1 Drama release...",
        "publishedAt": "2026-08-02T10:00:00Z",
        "status": "published",
        "analytics": {
          "impressions": 1200,
          "reach": 930,
          "likes": 17,
          "comments": 0,
          "shares": 0,
          "saves": 0,
          "clicks": 0,
          "views": 930,
          "follows": 0,
          "engagementRate": 1.83
        }
      }
    ],
    "total": 12,
    "page": 1,
    "limit": 50
  }
  ```

---

### 7. 外部帖子即时增量同步 (`POST /v1/analytics/sync-external-posts`)
- **接口定位**：手动触发或定时触发从官方渠道拉取最新在外部直接发布的内容，并刷新指标。
- **请求 Body (JSON)**：
  ```json
  {
    "accountId": "acc_tt_01",
    "url": "https://www.tiktok.com/@dsh/video/123456789" // 可选，特定单帖拉取
  }
  ```
- **响应结构 (JSON)**：
  ```json
  {
    "ok": true,
    "syncedCount": 1,
    "posts": [{ "postId": "post_ext_123", "status": "synced" }]
  }
  ```

---

### 8. 私信与收件箱分析系列 (`GET /v1/inbox-analytics/*`)
- **接口清单**：
  1. `GET /v1/inbox-analytics/get-inbox-volume`（私信消息量趋势）
  2. `GET /v1/inbox-analytics/get-inbox-response-time`（首次响应时长 TTR 分析）
  3. `GET /v1/inbox-analytics/get-inbox-heatmap`（7×24h 私信接收热力图）
  4. `GET /v1/inbox-analytics/get-inbox-source-breakdown`（按平台渠道分布）

---

## 四、 OmniMux 插件中枢接入改造方案

### 4.1 中枢客户端扩展 (`plugins/omnimux/src/official/analytics.js`)
在 `plugins/omnimux/src/official/` 下新建 `analytics.js`，基于现有的 `client.withPat` 封装请求：

```javascript
/**
 * @param {{ withPat: Function }} client
 * @param {Record<string, unknown>} query
 */
export function getDailyMetrics(client, query) {
  const qs = new URLSearchParams(query).toString()
  return client.withPat(`/api/social/v1/analytics/daily-metrics${qs ? `?${qs}` : ''}`)
}

export function getBestTimeToPost(client, query) {
  const qs = new URLSearchParams(query).toString()
  return client.withPat(`/api/social/v1/analytics/best-time-to-post${qs ? `?${qs}` : ''}`)
}

export function getPostingFrequency(client, query) {
  const qs = new URLSearchParams(query).toString()
  return client.withPat(`/api/social/v1/analytics/posting-frequency${qs ? `?${qs}` : ''}`)
}

export function getContentDecay(client, query) {
  const qs = new URLSearchParams(query).toString()
  return client.withPat(`/api/social/v1/analytics/content-decay${qs ? `?${qs}` : ''}`)
}

export function getFollowerStats(client, query) {
  const qs = new URLSearchParams(query).toString()
  return client.withPat(`/api/social/v1/accounts/follower-stats${qs ? `?${qs}` : ''}`)
}

export function getPostAnalytics(client, query) {
  const qs = new URLSearchParams(query).toString()
  return client.withPat(`/api/social/v1/analytics${qs ? `?${qs}` : ''}`)
}

export function syncExternalPosts(client, body) {
  return client.withPat('/api/social/v1/analytics/sync-external-posts', {
    method: 'POST',
    body,
  })
}
```

### 4.2 官方 Cordis 工具注册 (`plugins/omnimux/src/official/mount.js`)
注册以下 5 个原子工具：
- `omnimux_analytics_daily_metrics`
- `omnimux_analytics_best_time`
- `omnimux_analytics_frequency`
- `omnimux_analytics_content_decay`
- `omnimux_analytics_follower_stats`
- `omnimux_analytics_posts_list`
- `omnimux_analytics_sync_trigger`

### 4.3 本地 HTTP 路由分发 (`plugins/omnimux/src/official/http-routes.js`)
为 Web 前端提供免鉴权代理路径：
- `GET /omnimux/analytics/overview`
- `GET /omnimux/analytics/insights`
- `GET /omnimux/analytics/followers`
- `GET /omnimux/analytics/posts`
- `POST /omnimux/analytics/sync`

---

## 五、 验收标准与测试规范

1. **鉴权透传测试**：
   - 未登录 OmniMux（无 Token/PAT）时调用，工具与 HTTP 接口均统一抛出 `needs-omnimux` 401 错误。
2. **多平台过滤测试**：
   - 传入 `platform: tiktok` 时，返回的 `dailyData` 与 `posts` 仅包含 TikTok 数据。
3. **空数据容错**：
   - 当用户绑定的账号无历史发帖时，接口返回空数组 `[]` 与零值 KPI，不产生 500/502 崩溃。
4. **性能要求**：
   - 30 天区间大盘指标聚合接口响应时间 $\le 600\text{ms}$。
