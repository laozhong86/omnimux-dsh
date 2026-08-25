# Social Analytics 前端数据契约 Spec（Phase 1）

> **版本**：v1.0.0  
> **状态**：需求已细化 / 供架构师·工程师直接消费  
> **负责人**：许清楚（需求评审）  
> **消费方**：高见远（架构师）· 林深（研发工程师）  
> **源依据**：
> - PRD `docs/superpowers/specs/2026-08-25-social-analytics-prd.md`
> - Tech Spec `docs/superpowers/specs/2026-08-25-social-analytics-tech-spec.md`
> - 高保真原型 `docs/superpowers/specs/2026-08-25-social-analytics-prototype.html`
> - Gateway API PRD `docs/superpowers/specs/2026-08-25-omnimux-gateway-analytics-api-prd.md`
> - Zernio 映射 `docs/superpowers/specs/2026-08-25-zernio-data-source-mapping-and-algorithms.md`
>
> **物理边界**：本契约仅服务 `plugins/omnimux-analytics/` 前端看板。Mock Fixture 见  
> `src/client/mock/dashboard-fixture.json`。Phase 1 **不改 Host 路由、不改 Umami 埋点逻辑**。

---

## 0. 范围与默认假设

| 字段 | 内容 | 默认 / 待确认 |
| :--- | :--- | :--- |
| 交付范围 | 发布效果分析 Tab（`tab=posting`）完整前端 Mock 契约 | **默认**：Inbox Tab 仅占位，不进本 Spec 的数据体 |
| 数据源策略 | Phase 1–3 前端先吃本地 Mock；后续切 `/omnimux/analytics/*` | **默认**：`USE_MOCK=true` 开关，契约字段与 Host 聚合响应同构 |
| 时间轴粒度 | 近 7/30/90 天；基础柱图与复合大盘按**周切片** | **默认**：`timeRange=30d` → 5 个周锚点（与原型一致） |
| 平台枚举 | `tiktok` · `twitter` · `youtube` · `instagram` | **默认**：原型样本仅 TikTok 有发帖；X 仅粉丝曲线 |
| 缺失字段 | 平台不支持的指标统一 `null`，UI 渲染为 `-` | **硬规则**，不得出现 `NaN` / `undefined` / 空串 |
| 数值精度 | ER 存小数比率（`0.0226`）；展示层再格式化 | **默认**：存储层不存 `%` 字符串 |
| 热力图星期 | `dayOfWeek: 0=周一 … 6=周日`（与原型中文周一开头对齐） | **待确认**：若网关沿用 Zernio `0=周日`，Host 层必须转换 |
| Best Post 权重 | `Score = 0.5·ER + 0.3·log10(views+1) + 0.2·shares` | **默认假设**（Zernio 映射 §3.1）；可配置 |

---

## 1. 全局筛选与同步状态契约

### 1.1 请求 / 筛选 Query（前端 Store → API）

```ts
interface AnalyticsQuery {
  tab: 'posting' | 'inbox';          // 默认 'posting'
  platform: 'all' | PlatformId;     // 默认 'all'
  profileId: 'all' | string;        // 默认 'all'
  source: 'all' | 'manual' | 'omnimux'; // 默认 'all'
  timeRange: '7d' | '30d' | '90d';  // 默认 '30d'
  searchQuery: string;              // 默认 ''；仅过滤 Top Posts 标题/ID
}
```

```ts
type PlatformId = 'tiktok' | 'twitter' | 'youtube' | 'instagram';
```

### 1.2 同步状态机 `syncStatus`

| 字段 | 类型 | 说明 | 默认 / 待确认 |
| :--- | :--- | :--- | :--- |
| `lastSyncedAt` | `number` (ms epoch) | 上次成功同步时间戳 | 原型：`now - 14*60*1000` |
| `nextSyncAt` | `number` (ms epoch) | 下次调度时间戳 | 默认周期 60min |
| `syncIntervalMs` | `number` | 调度周期 | **默认** `3600000` |
| `syncing` | `boolean` | 是否正在同步 | `false` |
| `lastError` | `string \| null` | 最近一次同步失败文案 | `null` |

**展示口径**：`上次同步：X分钟前 · 下次调度：Y分钟后`；`立即同步` 成功后 800ms 内刷新大盘。

---

## 2. 看板聚合响应根结构 `AnalyticsDashboardPayload`

前端一次拉取（或 Mock 整包）消费的根对象。字段与 Tech Spec `fetchAllAnalyticsData` 返回值同构。

```ts
interface AnalyticsDashboardPayload {
  meta: DashboardMeta;
  syncStatus: SyncStatus;
  filtersEcho: AnalyticsQuery;       // 回显当前生效筛选，便于调试
  kpi: KpiBlock;
  basicCharts: BasicChartsBlock;
  engagementOverTime: EngagementSeriesBlock;
  heatmap: HeatmapBlock;
  followerEvolution: FollowerEvolutionBlock;
  platformBreakdown: PlatformBreakdownRow[];
  topPosts: TopPostRow[];
  strategy: StrategyBlock;
  emptyState: EmptyStateHint | null;
}
```

### 2.1 `meta`

| 字段 | 类型 | 说明 |
| :--- | :--- | :--- |
| `generatedAt` | `string` ISO8601 | Fixture / 响应生成时间 |
| `schemaVersion` | `'1.0.0'` | 契约版本 |
| `locale` | `'zh-CN' \| 'en-US'` | 标签语言（日期标签由前端本地化） |
| `boundAccountCount` | `number` | 已绑定账号数；`0` → 触发未绑定空态 |
| `authorizedPlatforms` | `PlatformId[]` | 已授权平台列表 |

---

## 3. KPI 卡片 `kpi`（5 卡）

```ts
interface KpiBlock {
  engagementRate: MetricNumber;   // 综合互动率，比率 0~1
  totalReach: MetricNumber;       // 总触达 UV
  totalFollowers: MetricNumber;   // 总粉丝
  followerDiff: MetricNumber;     // 近 N 天净增（可负）
  postsCount: MetricNumber;       // 本周期发帖
  postsHealth: 'normal' | 'stale' | 'none';
  bestPost: BestPostCard | null;
}

interface MetricNumber {
  value: number | null;           // null = 字段不可用 → UI '-'
  raw?: number | null;            // 可选：未压缩原值（如 reach 原始 1900）
}

interface BestPostCard {
  postId: string;
  platform: PlatformId;
  title: string;
  coverLabel: string | null;      // 如 "第1集"；无封面时可用文字占位
  coverUrl: string | null;
  views: number | null;
  er: number | null;              // 比率
  publishedAt: string;            // ISO8601
  detailHref: string | null;      // 跳转帖子详情；null 则禁用链接
}
```

### 3.1 业务口径（与 PRD 对齐）

| KPI | 计算 / 来源 | 展示格式 | 辅助标签 |
| :--- | :--- | :--- | :--- |
| 综合互动率 ER | `(likes+comments+shares+saves) / views`；views 缺失回退 impressions→reach | `2.26%`（两位小数） | 无 |
| 总触达 Reach | 周期内去重 UV 汇总 | `1.9K` / `0` / `-` | 无 |
| 总粉丝 Followers | 全矩阵当前粉丝合计 | `635`（千分位） | `↗ 近30天 +17`（绿）；净增≤0 不显示绿标或改灰 |
| 本周期发帖 | 有效帖子计数 | `12` | `↗ 正常更新` / `⚠ 更新停滞` |
| 最佳单篇 | Best Post 权重最高 | 缩略图 + `930 播放量` | `查看详情 ↗` |

**除零规则**：分母 `views|impressions|reach` 全为 0 或 null → `engagementRate.value = null`（展示 `-`），**不得**算成 `0%` 伪装有数据。

---

## 4. 2×2 基础图表 `basicCharts`

```ts
interface BasicChartsBlock {
  postsPerPlatform: CategoricalBar;
  postsOverTime: TimeBar;
  likesPerPlatform: CategoricalBar;
  likesOverTime: TimeBar;
}

interface CategoricalBar {
  labels: string[];               // 展示名，如 ['TikTok']
  platformIds: PlatformId[];      // 与 labels 等长
  values: Array<number | null>;
  total: number | null;           // 面板右上角汇总
}

interface TimeBar {
  buckets: TimeBucket[];
  total: number | null;
  grain: 'day' | 'week';          // 30d 默认 week
}

interface TimeBucket {
  key: string;                    // '2026-07-27'（桶起点 ISO date）
  label: string;                  // '7月27日'（前端也可本地重算）
  value: number | null;
}
```

**原型样本（30d）**：

| 图 | labels / buckets | values | total |
| :--- | :--- | :--- | :--- |
| postsPerPlatform | TikTok | `[12]` | 12 |
| postsOverTime | 7/27, 8/3, 8/10, 8/17, 8/24 | `[6,6,0,0,0]` | 12 |
| likesPerPlatform | TikTok | `[34]` | 34 |
| likesOverTime | 同上 | `[34,0,0,0,0]` | 34 |

---

## 5. 复合互动大盘 `engagementOverTime`（9 指标）

```ts
interface EngagementSeriesBlock {
  grain: 'day' | 'week';
  buckets: string[];              // ISO date 桶起点，与 series[*].points 对齐
  labels: string[];               // 展示轴标签
  totals: EngagementMetrics;      // 底部 pill 汇总数字
  deltas: Partial<Record<MetricKey, number | null>>; // 环比，如 views: 1993
  series: MetricSeries[];
}

type MetricKey =
  | 'likes' | 'comments' | 'shares' | 'saves'
  | 'views' | 'impressions' | 'reach' | 'clicks' | 'er';

interface MetricSeries {
  key: MetricKey;
  labelZh: string;
  labelEn: string;
  color: string;                  // 固定色板，见下表
  yAxis: 0 | 1;                   // 0=左轴绝对量/ER；1=右轴 views
  dashed?: boolean;
  defaultVisible: boolean;
  points: Array<number | null>;   // 与 buckets 等长；er 为比率 0~1
}

interface EngagementMetrics {
  likes: number | null;
  comments: number | null;
  shares: number | null;
  saves: number | null;
  views: number | null;
  impressions: number | null;
  reach: number | null;
  clicks: number | null;
  er: number | null;
}
```

### 5.1 9 指标固定色板与默认可见性（与 Tech Spec `METRIC_DEFS` 一致）

| key | 中文 | color | defaultVisible | yAxis | dashed |
| :--- | :--- | :--- | :--- | :--- | :--- |
| likes | 点赞数 | `#ef4444` | ✅ | 0 | |
| comments | 评论数 | `#3b82f6` | ✅ | 0 | |
| shares | 分享数 | `#10b981` | ✅ | 0 | |
| saves | 收藏数 | `#f59e0b` | ❌ | 0 | |
| views | 播放/浏览 | `#8b5cf6` | ✅ | 1 | |
| impressions | 曝光量 | `#06b6d4` | ❌ | 0 | |
| reach | 触达人数 | `#64748b` | ❌ | 0 | |
| clicks | 链接点击 | `#ec4899` | ❌ | 0 | |
| er | 互动率 | `#22c55e` | ✅ | 0 | ✅ |

**注意**：序列里 `er.points` 存比率（如 `0.0226`）；Chart 勾选 pill 展示用格式化后的 `2.26%`。Tech Spec 写 `yAxis: 0` 给 er——与原型一致（左轴）；若数值量级冲突，前端可将 er 单独映射到百分比刻度，**不得改契约字段**。

---

## 6. 7×24h 热力图 `heatmap`（168 格）

```ts
interface HeatmapBlock {
  /** 固定 168 项；缺测点也必须补齐 score:0 / level:0，禁止稀疏数组 */
  cells: HeatmapCell[];
  maxScore: number;               // 分位映射用
  recommended: RecommendedSlot[]; // Top 3
  dayLabelsZh: string[];          // ['周一'…'周日']
  dayLabelsEn: string[];          // ['Mon'…'Sun']
}

interface HeatmapCell {
  dayOfWeek: 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0=周一 … 6=周日
  hour: number;                   // 0–23
  score: number;                  // 互动指数（≥0）
  level: 0 | 1 | 2 | 3 | 4;       // 服务端或 Host 预计算；前端可重算校验
  postCount?: number;
}

interface RecommendedSlot {
  dayOfWeek: number;
  hour: number;
  score: number;
  labelZh: string;                // '周日 10:00 · 互动指数 24'
  labelEn: string;                // 'Sun 10:00 · score 24'
}
```

### 6.1 五级绿度色阶（CSS Token 建议）

| level | 含义 | 色值（须包在 `var(--dsw-…, fallback)`） |
| :--- | :--- | :--- |
| 0 | 无数据/极低 | `#ebedf0` |
| 1 | 轻度 | `#9be9a8` |
| 2 | 中度 | `#40c463` |
| 3 | 高度 | `#30a14e` |
| 4 | 峰值 | `#216e39` |

### 6.2 Level 算法（与 Tech Spec 对齐，供 Host/前端双端一致）

```js
function getHeatmapLevel(score, maxScore) {
  if (!score || score <= 0) return 0;
  const ratio = score / (maxScore || 1);
  if (ratio < 0.25) return 1;
  if (ratio < 0.50) return 2;
  if (ratio < 0.75) return 3;
  return 4;
}
```

**格子排序约定**：`cells[dayOfWeek * 24 + hour]`，便于 `CSS Grid` 顺序渲染。

**原型推荐 Top3**：周日 10:00 · 24；周三 20:00 · 18；周二 11:00 · 13。

---

## 7. 粉丝演进 `followerEvolution`

```ts
interface FollowerEvolutionBlock {
  totalFollowers: number | null;
  platforms: PlatformId[];        // 参与曲线的平台
  timeline: FollowerPoint[];
}

interface FollowerPoint {
  date: string;                   // '2026-08-01'
  label: string;                  // '8月1日'
  total: number | null;
  breakdown: Partial<Record<PlatformId, number | null>>;
}
```

**原型样本**：

| date | TikTok | twitter | total |
| :--- | :--- | :--- | :--- |
| 2026-08-01 | 240 | 148 | 388 |
| 2026-08-02 | 253 | 148 | 401 |
| 2026-08-10 | 253 | 148 | 401 |
| 2026-08-24 | 253 | 148 | 401 |

面板 meta 显示当前 `totalFollowers=635`（含未画进 timeline 的其它矩阵账号时允许大于 timeline 末值——**默认假设**：KPI 用账户中心实时合计，曲线用分析快照；二者不一致时以 KPI 为准，曲线 Hover 展示当日 breakdown）。

---

## 8. 平台汇总明细 `platformBreakdown`

```ts
interface PlatformBreakdownRow {
  platform: PlatformId;
  platformLabel: string;          // 'TikTok'
  posts: number | null;
  likes: number | null;
  comments: number | null;
  shares: number | null;
  saves: number | null;           // Twitter 等不支持 → null → '-'
  clicks: number | null;
  views: number | null;
  impressions: number | null;
  reach: number | null;
  er: number | null;              // 比率
}
```

**列顺序（冻结，与原型表头一致）**：  
平台 → 发帖数 → 点赞 → 评论 → 分享 → 收藏 → 点击 → 播放/浏览 → 曝光 → 触达 → 互动率 (ER)

**排序**：前端点击列头升降序；`null` 在升序时沉底、降序时亦沉底（视为缺失，不参与比较）。

**原型样本行**：TikTok · 12 · 34 · 8 · 2 · `-` · `-` · 1.9K · `-` · `-` · 2.28%

---

## 9. 爆款排行 `topPosts`

```ts
interface TopPostRow {
  postId: string;
  platform: PlatformId;
  title: string;
  publishedAt: string;            // ISO8601
  publishedLabel: string;         // '2026年8月2日 10:00'
  coverUrl: string | null;
  likes: number | null;
  comments: number | null;
  shares: number | null;
  saves: number | null;
  clicks: number | null;
  views: number | null;
  follows: number | null;         // 引流涨粉
  impressions: number | null;
  reach: number | null;
  er: number | null;
  score?: number;                 // Best Post 权重，可选
}
```

**列顺序**：内容摘要/发布时间 → 点赞 → 评论 → 分享 → 收藏 → 点击 → 播放量 → 引流涨粉 → 曝光 → 触达 → 互动率

**默认排序**：`er desc`；并列时 `views desc`。`searchQuery` 对 `title` / `postId` 做大小写不敏感包含匹配。

---

## 10. 策略分析 `strategy`

```ts
interface StrategyBlock {
  cadence: CadenceBlock;
  accumulation: AccumulationBlock;
}

interface CadenceBlock {
  /** x 轴档位顺序冻结 */
  brackets: Array<'1-5/wk' | '6-10/wk' | '11+/wk'>;
  series: CadenceSeries[];
  optimal: OptimalCadence[];
}

interface CadenceSeries {
  platform: PlatformId;
  /** 与 brackets 等长；单位：百分比数值 0.6 表示 0.6%（与原型 Chart 一致） */
  erPercentPoints: Array<number | null>;
}

interface OptimalCadence {
  platform: PlatformId;
  bracket: string;                // '11+/wk'
  erPercent: number;              // 2.2 表示 2.2%
  labelZh: string;                // 'TikTok 11+篇/周 · 互动率 2.2%'
  labelEn: string;
}

interface AccumulationBlock {
  windows: AccumulationWindow[];
  milestones: {
    halfEngagementBy: string;     // '2-7d'
    eightyPercentWithin: string;  // '2-7d'
    halfLabelZh: string;
    eightyLabelZh: string;
  };
}

interface AccumulationWindow {
  order: number;
  key: 'publish' | '0-6h' | '6-12h' | '12-24h' | '1-2d' | '2-7d' | '7-30d';
  labelZh: string;
  labelEn: string;
  /** 累积百分比 0–100 */
  pct: number | null;
}
```

### 10.1 口径澄清（重要）

| 模块 | 存储单位 | 展示 | 说明 |
| :--- | :--- | :--- | :--- |
| KPI / 表格 / engagement 序列的 `er` | 比率 `0.0226` | `2.26%` | 统一比率 |
| `strategy.cadence.erPercentPoints` | **百分比数值** `2.2` | `2.2%` | **例外**：对齐原型 Chart.js `data:[0.6,2.2]` 与 y 轴 `v+'%'`；**禁止**再乘 100 |

### 10.2 原型累积曲线样本

| window | pct |
| :--- | :--- |
| publish | 0 |
| 0-6h | 42 |
| 6-12h | 43 |
| 12-24h | 43 |
| 1-2d | 50 |
| 2-7d | 100 |
| 7-30d | 100 |

里程碑文案：`半数互动在发布后 2-7天内产生`；`80% 互动集中在 2-7天长尾期`。

---

## 11. 异常处理与空态 `emptyState`

```ts
type EmptyStateCode =
  | 'no_accounts'          // 未绑定账号
  | 'no_posts_in_range'    // 周期内无发帖
  | 'unauthorized'         // 登录闸
  | 'auth_expired'         // 部分账号授权过期
  | 'network_error';       // 接口失败（保留快照）

interface EmptyStateHint {
  code: EmptyStateCode;
  titleZh: string;
  titleEn: string;
  actionLabelZh?: string;         // '前往账号中心绑定'
  action?: 'open_accounts' | 'reauth' | 'retry' | 'login';
  affectedAccountIds?: string[];  // auth_expired 时
}
```

### 11.1 状态机规范（PRD §四 落地）

| 场景 | 数据表现 | UI |
| :--- | :--- | :--- |
| 未绑定任何账号 | `meta.boundAccountCount=0`，`emptyState.code='no_accounts'`，图表数组可空 | 空态图 + `前往账号中心绑定` |
| 周期无发帖 | KPI 数值型为 `0`（非 null），`emptyState.code='no_posts_in_range'`，热力图全 `level:0` | 提示「所选周期内暂无发布数据」 |
| 账号授权过期 | 正常返回可算数据 + `emptyState.code='auth_expired'` | 筛选器账号旁 `⚠ 授权已过期` |
| 字段缺失 | 该字段 `null` | 统一 `-`；禁止 `NaN` / `undefined` / 页面坍缩 |
| 网络 5xx/401 | Store 保留上一成功快照；`syncStatus.lastError` 有值 | 非阻塞 Toast + 可重试；大盘不空白闪断 |
| 未登录 | 不发请求或 401 → LoginGate | `unauthorized` |

### 11.2 数字格式化规则（前端纯函数，建议 `formatMetric.ts`）

| 类型 | 规则 | 示例 |
| :--- | :--- | :--- |
| `null` / `undefined` | 恒为 `-` | `-` |
| 整数计数（粉丝、发帖、赞…） | 千分位；`≥1000` 可用 `1.9K` / `2.1M`（1 位小数）；`≥10_000_000` 用 `M` | `635` · `1.9K` |
| Reach/Views 卡片 | 同计数压缩规则 | `1.9K` · `0` |
| ER / 百分比 | `(ratio * 100).toFixed(2) + '%'`；比率为 null → `-` | `2.26%` |
| 环比 delta | 百分比点或倍率文案；`null` 不展示箭头 | `+199300% ↑` |
| 零值 | **有意义的 0** 显示 `0`（有发帖但赞为 0）；**不可用** 才是 `-` | 区分 `0` vs `-` |

```ts
function formatCount(n: number | null | undefined): string {
  if (n == null || Number.isNaN(n)) return '-';
  const abs = Math.abs(n);
  if (abs >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (abs >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return `${n}`;
}

function formatEr(ratio: number | null | undefined): string {
  if (ratio == null || Number.isNaN(ratio)) return '-';
  return `${(ratio * 100).toFixed(2)}%`;
}
```

---

## 12. Host 路由映射（给架构师的衔接表）

前端 **不直连** Zernio。本地 Mock → 日后替换为：

| 前端块 | Host 路由（聚合） | 云端源 |
| :--- | :--- | :--- |
| kpi + basicCharts + engagementOverTime + platformBreakdown | `GET /omnimux/analytics/overview` | `/v1/analytics/daily-metrics` + 派生 KPI |
| heatmap + strategy | `GET /omnimux/analytics/insights` | `best-time-to-post` + `posting-frequency` + `content-decay` |
| followerEvolution | `GET /omnimux/analytics/followers` | `/v1/accounts/follower-stats` |
| topPosts | `GET /omnimux/analytics/posts` | `/v1/analytics` |
| syncStatus / syncNow | `GET·POST /omnimux/analytics/sync` | `sync-external-posts` + 本地调度 |

Phase 1 要求：**Mock 根对象字段名 = 未来 overview/insights 聚合后的前端视图模型**，避免二次 Renaming。

---

## 13. Fixture 文件与验收清单

| 产物 | 路径 |
| :--- | :--- |
| 本契约 | `plugins/omnimux-analytics/docs/2026-08-25-frontend-data-contract.md` |
| Mock 整包 | `plugins/omnimux-analytics/src/client/mock/dashboard-fixture.json` |
| （可选）TS 类型镜像 | 由工程师在 Phase 3.1 落 `src/client/types.ts`，须与本 Spec 字段 1:1 |

**验收（Phase 1 Done）**：

1. Fixture 可被 `JSON.parse`，含齐：kpi、basicCharts、engagementOverTime（9 series）、heatmap（168 cells）、followerEvolution、platformBreakdown、topPosts、strategy。
2. 所有「平台不支持」字段显式 `null`，无缺失 key（key 必须在，值可为 null）。
3. `engagementOverTime.series` 长度 === 9，顺序与色板表一致。
4. `heatmap.cells.length === 168`。
5. 格式化规则与空态码在本文 §11 冻结，前后端不得各写一套口语口径。

---

## 14. 混淆点备案（默认已拍板，如需改判请主理人明示）

| # | 混淆点 | 默认假设 |
| :--- | :--- | :--- |
| 1 | 现有 `omnimux-analytics` 是 Umami 埋点插件 | **同包演进**：Social Dashboard 作为新 Stage 挂入，埋点逻辑保留；不新建 `omnimux-social-analytics` 包名 |
| 2 | 热力图 `dayOfWeek` 周一是否为 0 | **是**（对齐中文产品）；Host 适配 Zernio 时做偏移 |
| 3 | cadence ER 用比率还是百分数 | **百分数数值**（原型例外）；其它 ER 一律比率 |
| 4 | Inbox Tab | Phase 1 不出数据契约；仅 `tab` 枚举占位 |
| 5 | KPI Reach 原型同时出现 `1.9K` 与表格 `-` | Reach **按平台可用性**：有 UV 口径则出数，无则 null；KPI 总触达允许由 views 近端近似时须在 `meta` 打 `reachApprox: true`（默认 false，原型 Fixture 用 views 汇总值填 reach 仅作视觉对齐并标注） |

---

**建议结论（需求侧）**：`自研（product）` —— 在现有 `omnimux-analytics` 产品插件内扩展 Social Dashboard Stage；数据契约以本文 + `dashboard-fixture.json` 为 Phase 2/3 唯一前端真源。
