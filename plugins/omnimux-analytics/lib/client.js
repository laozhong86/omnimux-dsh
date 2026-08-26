window.__ModuleLoader__.load({
  id: "omnimux-analytics",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client/index.js
var index_exports = {};
__export(index_exports, {
  apply: () => apply,
  inject: () => inject,
  name: () => name
});
module.exports = __toCommonJS(index_exports);

// src/client/locales.js
var NS = "omnimux-analytics";
var zh = {
  "nav": "\u6570\u636E\u5206\u6790",
  "title": "\u6570\u636E\u5206\u6790\u770B\u677F",
  "subtitle": "\u67E5\u770B\u8D26\u53F7\u77E9\u9635\u7684\u53D1\u5E03\u6548\u679C\u3001\u4E92\u52A8\u8D8B\u52BF\u4E0E\u6700\u4F73\u53D1\u5E03\u65F6\u95F4",
  "close": "\u5173\u95ED",
  "refresh": "\u5237\u65B0",
  "refreshing": "\u5237\u65B0\u4E2D\u2026",
  "loading": "\u6B63\u5728\u52A0\u8F7D\u6570\u636E\u770B\u677F\u2026",
  "export": "\u5BFC\u51FA\u6240\u9009\u5468\u671F\u62A5\u8868",
  "theme.toggle": "\u5207\u6362\u6697\u8272/\u4EAE\u8272\u6A21\u5F0F",
  "tab.list": "\u5206\u6790\u89C6\u56FE",
  "tab.posting": "\u53D1\u5E03\u6548\u679C\u5206\u6790",
  "tab.inbox": "\u79C1\u4FE1",
  "tab.inboxSoon": "\u5373\u5C06\u63A8\u51FA",
  "sync.last": "\u4E0A\u6B21\u540C\u6B65",
  "sync.next": "\u4E0B\u6B21\u8C03\u5EA6",
  "sync.now": "\u7ACB\u5373\u540C\u6B65",
  "sync.syncing": "\u540C\u6B65\u4E2D\u2026",
  "sync.pulling": "\u6B63\u5728\u4ECE\u5404\u5E73\u53F0\u62C9\u53D6\u6700\u65B0\u589E\u91CF\u2026",
  "sync.justNow": "\u521A\u521A",
  "sync.soon": "\u5373\u5C06\u5F00\u59CB",
  "sync.minutesAgo": "{n}\u5206\u949F\u524D",
  "sync.minutesLater": "{n}\u5206\u949F\u540E",
  "filter.platform": "\u5E73\u53F0",
  "filter.account": "\u8D26\u53F7",
  "filter.source": "\u53D1\u5E03\u65B9\u5F0F",
  "filter.timeRange": "\u65F6\u95F4\u8DE8\u5EA6",
  "filter.search": "\u641C\u7D22\u5E16\u5B50\u6807\u9898\u6216 ID",
  "filter.all": "\u5168\u90E8",
  "filter.account.main": "@dsh_drama_center\uFF08\u4E3B\u8D26\u53F7\uFF09",
  "filter.account.sub": "@dsh_short_clips\uFF08\u77E9\u9635 2 \u53F7\uFF09",
  "filter.source.manual": "\u624B\u52A8",
  "filter.source.omnimux": "OmniMux",
  "filter.range.7d": "\u8FD1 7 \u5929",
  "filter.range.30d": "\u8FD1 30 \u5929",
  "filter.range.90d": "\u8FD1 90 \u5929",
  "platform.tiktok": "TikTok",
  "platform.twitter": "X",
  "platform.youtube": "YouTube",
  "platform.instagram": "Instagram",
  "kpi.group": "\u6838\u5FC3\u6307\u6807",
  "kpi.er": "\u7EFC\u5408\u4E92\u52A8\u7387",
  "kpi.reach": "\u603B\u89E6\u8FBE",
  "kpi.followers": "\u603B\u7C89\u4E1D",
  "kpi.posts": "\u672C\u5468\u671F\u53D1\u5E16",
  "kpi.bestPost": "\u6700\u4F73\u5355\u7BC7",
  "kpi.plays": "\u64AD\u653E\u91CF",
  "kpi.viewDetail": "\u67E5\u770B\u8BE6\u60C5",
  "kpi.coverFallback": "\u5C01\u9762",
  "kpi.followersDelta": "{range} {n}",
  "kpi.health.normal": "\u6B63\u5E38\u66F4\u65B0",
  "kpi.health.stale": "\u66F4\u65B0\u505C\u6EDE",
  "kpi.health.none": "\u6682\u65E0\u53D1\u5E16",
  "charts.basic": "\u57FA\u7840\u5206\u5E03\u4E0E\u8D70\u52BF",
  "charts.postsPlatform": "\u5404\u5E73\u53F0\u53D1\u5E16\u5206\u5E03",
  "charts.postsPlatformSub": "\u5F53\u524D\u5468\u671F\u5185\u53D1\u5E16\u91CF Top \u5E73\u53F0",
  "charts.postsTime": "\u53D1\u5E16\u9891\u6B21\u65F6\u95F4\u8D70\u52BF",
  "charts.likesPlatform": "\u5404\u5E73\u53F0\u83B7\u8D5E\u5206\u5E03",
  "charts.likesPlatformSub": "\u5F53\u524D\u5468\u671F\u5185\u83B7\u8D5E\u603B\u91CF Top \u5E73\u53F0",
  "charts.likesTime": "\u70B9\u8D5E\u65F6\u95F4\u7D2F\u79EF\u8D70\u52BF",
  "charts.weekSlice": "\u6309\u5468\u5207\u7247 \xB7 {range}",
  "charts.postsUnit": "\u7BC7\u53D1\u5E16\u603B\u8BA1",
  "charts.likesUnit": "\u70B9\u8D5E\u603B\u8BA1",
  "charts.engagement": "\u591A\u7EF4\u4E92\u52A8\u7EFC\u5408\u8D70\u52BF",
  "charts.engagementSub": "\u6309\u5468\u805A\u5408 \xB7 \u5168\u4E92\u52A8\u6307\u6807\u8054\u52A8\u8D8B\u52BF",
  "charts.metrics": "\u4E92\u52A8\u6307\u6807",
  "charts.heatmap": "\u6700\u4F73\u53D1\u5E03\u65F6\u95F4\u70ED\u529B\u56FE",
  "charts.heatmapSub": "\u57FA\u4E8E\u5386\u53F2\u53D1\u5E03\u4E92\u52A8\u8868\u73B0\u52A0\u6743\u7684\u6700\u4F18\u6392\u671F\u65F6\u6BB5",
  "charts.low": "\u4F4E",
  "charts.high": "\u9AD8",
  "charts.recommended": "\u63A8\u8350\u65F6\u6BB5",
  "charts.followers": "\u7C89\u4E1D\u589E\u957F\u6F14\u8FDB\u66F2\u7EBF",
  "charts.followersUnit": "\u7C89\u4E1D\u603B\u91CF",
  "charts.authorizedCount": "\u5404\u5E73\u53F0\u7C89\u4E1D\u589E\u957F\u8F68\u8FF9 \xB7 {n} \u4E2A\u5DF2\u6388\u6743\u5E73\u53F0",
  "charts.strategy": "\u7B56\u7565\u5206\u6790",
  "charts.cadence": "\u53D1\u5E16\u9891\u6B21\u4E0E\u4E92\u52A8\u7387\u5173\u8054\u6A21\u578B",
  "charts.cadenceSub": "\u4E0D\u540C\u6BCF\u5468\u53D1\u5E16\u8282\u594F\u533A\u95F4\u7684\u5E73\u5747\u4E92\u52A8\u7387\u8868\u73B0",
  "charts.optimal": "\u5404\u5E73\u53F0\u6700\u4F18\u53D1\u5E16\u8282\u594F",
  "charts.accumulation": "\u5185\u5BB9\u751F\u547D\u5468\u671F\u4E92\u52A8\u8870\u51CF\u66F2\u7EBF",
  "charts.accumulationSub": "\u5185\u5BB9\u53D1\u5E03\u540E\u968F\u65F6\u95F4\u7A97\u53E3\u7684\u4E92\u52A8\u7D2F\u79EF\u767E\u5206\u6BD4",
  "charts.accumulationSeries": "\u4E92\u52A8\u7D2F\u79EF\u767E\u5206\u6BD4",
  "charts.halfEn": "Half of engagement lands in 2\u20137 days",
  "charts.eightyEn": "80% of engagement sits in the 2\u20137 day tail",
  "table.platformTitle": "\u5404\u5E73\u53F0\u8868\u73B0\u660E\u7EC6\u6C47\u603B",
  "table.postsTitle": "\u7206\u6B3E\u5185\u5BB9\u8868\u73B0\u6392\u884C\u699C",
  "table.platform": "\u5E73\u53F0",
  "table.posts": "\u53D1\u5E16\u6570",
  "table.likes": "\u70B9\u8D5E",
  "table.comments": "\u8BC4\u8BBA",
  "table.shares": "\u5206\u4EAB",
  "table.saves": "\u6536\u85CF",
  "table.clicks": "\u70B9\u51FB",
  "table.views": "\u64AD\u653E/\u6D4F\u89C8",
  "table.play": "\u64AD\u653E\u91CF",
  "table.impressions": "\u66DD\u5149",
  "table.reach": "\u89E6\u8FBE",
  "table.er": "\u4E92\u52A8\u7387 (ER)",
  "table.content": "\u5185\u5BB9\u6458\u8981 / \u53D1\u5E03\u65F6\u95F4",
  "table.follows": "\u5F15\u6D41\u6DA8\u7C89",
  "table.empty": "\u6682\u65E0\u6570\u636E",
  "inbox.title": "\u79C1\u4FE1\u4E0E\u4F1A\u8BDD\u5206\u6790\u770B\u677F",
  "inbox.subtitle": "\u5305\u542B\u79C1\u4FE1\u54A8\u8BE2\u91CF\u3001\u9996\u6B21\u54CD\u5E94\u8017\u65F6\u3001\u6E20\u9053\u5206\u5E03\u53CA 7\xD724h \u6D88\u606F\u70ED\u529B\u56FE",
  "empty.no_accounts.title": "\u5C1A\u672A\u7ED1\u5B9A\u793E\u5A92\u8D26\u53F7",
  "empty.no_accounts.description": "\u7ED1\u5B9A\u81F3\u5C11\u4E00\u4E2A\u793E\u5A92\u8D26\u53F7\u540E\u5373\u53EF\u67E5\u770B\u53D1\u5E03\u6548\u679C\u4E0E\u4E92\u52A8\u8D8B\u52BF\u3002",
  "empty.no_accounts.action": "\u524D\u5F80\u8D26\u53F7\u4E2D\u5FC3\u7ED1\u5B9A",
  "empty.no_posts.title": "\u6240\u9009\u5468\u671F\u5185\u6682\u65E0\u53D1\u5E03\u6570\u636E",
  "empty.no_posts.description": "\u8BD5\u8BD5\u6269\u5927\u65F6\u95F4\u8DE8\u5EA6\uFF0C\u6216\u5207\u6362\u5230\u5176\u4ED6\u8D26\u53F7\u77E9\u9635\u3002",
  "empty.no_posts_in_range.title": "\u6240\u9009\u5468\u671F\u5185\u6682\u65E0\u53D1\u5E03\u6570\u636E",
  "empty.no_posts_in_range.description": "\u8BD5\u8BD5\u6269\u5927\u65F6\u95F4\u8DE8\u5EA6\uFF0C\u6216\u5207\u6362\u5230\u5176\u4ED6\u8D26\u53F7\u77E9\u9635\u3002",
  "empty.unauthorized.title": "\u767B\u5F55 OmniMux \u4EE5\u67E5\u770B\u6570\u636E\u5206\u6790",
  "empty.unauthorized.description": "\u767B\u5F55\u540E\u5373\u53EF\u540C\u6B65\u8D26\u53F7\u77E9\u9635\u7684\u53D1\u5E03\u4E0E\u4E92\u52A8\u6307\u6807\u3002",
  "empty.auth_expired.title": "\u90E8\u5206\u8D26\u53F7\u6388\u6743\u5DF2\u8FC7\u671F",
  "empty.auth_expired.description": "\u8FC7\u671F\u8D26\u53F7\u7684\u6307\u6807\u53EF\u80FD\u4E0D\u5B8C\u6574\uFF0C\u8BF7\u524D\u5F80\u8D26\u53F7\u4E2D\u5FC3\u91CD\u65B0\u6388\u6743\u3002",
  "empty.auth_expired.action": "\u524D\u5F80\u91CD\u65B0\u6388\u6743",
  "empty.network_error.title": "\u90E8\u5206\u6307\u6807\u540C\u6B65\u5931\u8D25",
  "empty.network_error.description": "\u4E91\u7AEF\u90E8\u5206\u63A5\u53E3\u6682\u65F6\u4E0D\u53EF\u7528\u3002\u5DF2\u663E\u793A\u80FD\u62FF\u5230\u7684\u6570\u636E\uFF0C\u53EF\u70B9\u91CD\u8BD5\u3002",
  "empty.fetch_failed.title": "\u6682\u65F6\u65E0\u6CD5\u52A0\u8F7D\u6570\u636E\u5206\u6790",
  "empty.fetch_failed.description": "\u4E2D\u67A2\u672A\u80FD\u62C9\u5230\u6307\u6807\u3002\u53EF\u70B9\u91CD\u8BD5\uFF1B\u82E5\u521A\u66F4\u65B0\u8FC7\u540E\u7AEF\u8DEF\u7531\uFF0C\u9700\u8981\u91CD\u542F OmniMux \u540E\u624D\u4F1A\u751F\u6548\u3002",
  "login": "\u767B\u5F55",
  "retry": "\u91CD\u8BD5"
};
var en = {
  "nav": "Analytics",
  "title": "Analytics Dashboard",
  "subtitle": "Track posting performance, engagement trends, and the best times to publish",
  "close": "Close",
  "refresh": "Refresh",
  "refreshing": "Refreshing\u2026",
  "loading": "Loading analytics\u2026",
  "export": "Export the selected range",
  "theme.toggle": "Toggle dark / light mode",
  "tab.list": "Analytics views",
  "tab.posting": "Posting",
  "tab.inbox": "Inbox",
  "tab.inboxSoon": "Coming soon",
  "sync.last": "Last synced",
  "sync.next": "Next run",
  "sync.now": "Sync now",
  "sync.syncing": "Syncing\u2026",
  "sync.pulling": "Pulling the latest increment from each platform\u2026",
  "sync.justNow": "just now",
  "sync.soon": "soon",
  "sync.minutesAgo": "{n} min ago",
  "sync.minutesLater": "in {n} min",
  "filter.platform": "Platform",
  "filter.account": "Account",
  "filter.source": "Publish Method",
  "filter.timeRange": "Range",
  "filter.search": "Search post title or ID",
  "filter.all": "All",
  "filter.account.main": "@dsh_drama_center (primary)",
  "filter.account.sub": "@dsh_short_clips (matrix #2)",
  "filter.source.manual": "Manual",
  "filter.source.omnimux": "OmniMux",
  "filter.range.7d": "Last 7 days",
  "filter.range.30d": "Last 30 days",
  "filter.range.90d": "Last 90 days",
  "platform.tiktok": "TikTok",
  "platform.twitter": "X",
  "platform.youtube": "YouTube",
  "platform.instagram": "Instagram",
  "kpi.group": "Key metrics",
  "kpi.er": "Engagement rate",
  "kpi.reach": "Reach",
  "kpi.followers": "Followers",
  "kpi.posts": "Posts this period",
  "kpi.bestPost": "Best post",
  "kpi.plays": "plays",
  "kpi.viewDetail": "View details",
  "kpi.coverFallback": "Cover",
  "kpi.followersDelta": "{range} {n}",
  "kpi.health.normal": "On cadence",
  "kpi.health.stale": "Stale",
  "kpi.health.none": "No posts",
  "charts.basic": "Distribution and trend",
  "charts.postsPlatform": "Posts by platform",
  "charts.postsPlatformSub": "Top platform by posts this period",
  "charts.postsTime": "Posting cadence over time",
  "charts.likesPlatform": "Likes by platform",
  "charts.likesPlatformSub": "Top platform by likes this period",
  "charts.likesTime": "Likes accumulated over time",
  "charts.weekSlice": "Weekly buckets \xB7 {range}",
  "charts.postsUnit": "posts total",
  "charts.likesUnit": "likes total",
  "charts.engagement": "Engagement over time",
  "charts.engagementSub": "Weekly rollup of every engagement metric",
  "charts.metrics": "Engagement metrics",
  "charts.heatmap": "Best time to post",
  "charts.heatmapSub": "Weighted from historical engagement by hour",
  "charts.low": "Low",
  "charts.high": "High",
  "charts.recommended": "Suggested slots",
  "charts.followers": "Follower evolution",
  "charts.followersUnit": "followers total",
  "charts.authorizedCount": "Follower trajectories \xB7 {n} authorized platforms",
  "charts.strategy": "Strategy",
  "charts.cadence": "Posting frequency vs engagement",
  "charts.cadenceSub": "Average ER across weekly posting brackets",
  "charts.optimal": "Best cadence per platform",
  "charts.accumulation": "Engagement accumulation",
  "charts.accumulationSub": "Share of engagement captured after publish",
  "charts.accumulationSeries": "Cumulative engagement",
  "charts.halfEn": "Half of engagement lands in 2\u20137 days",
  "charts.eightyEn": "80% of engagement sits in the 2\u20137 day tail",
  "table.platformTitle": "Platform breakdown",
  "table.postsTitle": "Top performing posts",
  "table.platform": "Platform",
  "table.posts": "Posts",
  "table.likes": "Likes",
  "table.comments": "Comments",
  "table.shares": "Shares",
  "table.saves": "Saves",
  "table.clicks": "Clicks",
  "table.views": "Views",
  "table.play": "Plays",
  "table.impressions": "Impr.",
  "table.reach": "Reach",
  "table.er": "ER",
  "table.content": "Post / published",
  "table.follows": "Follows",
  "table.empty": "No rows",
  "inbox.title": "Inbox analytics",
  "inbox.subtitle": "Volume, time-to-reply, channel mix, and a 7\xD724h receive heatmap",
  "empty.no_accounts.title": "No social accounts connected",
  "empty.no_accounts.description": "Connect at least one account to see posting performance.",
  "empty.no_accounts.action": "Connect in Accounts",
  "empty.no_posts.title": "No posts in the selected range",
  "empty.no_posts.description": "Widen the range or switch to another profile.",
  "empty.no_posts_in_range.title": "No posts in the selected range",
  "empty.no_posts_in_range.description": "Widen the range or switch to another profile.",
  "empty.unauthorized.title": "Sign in to OmniMux to view analytics",
  "empty.unauthorized.description": "Sign in to sync posting and engagement metrics.",
  "empty.auth_expired.title": "Some accounts need reauthorization",
  "empty.auth_expired.description": "Expired accounts may report incomplete metrics.",
  "empty.auth_expired.action": "Reauthorize",
  "empty.network_error.title": "Some metrics failed to sync",
  "empty.network_error.description": "A cloud endpoint is temporarily unavailable. Showing whatever loaded; retry to fill the rest.",
  "empty.fetch_failed.title": "Could not load analytics",
  "empty.fetch_failed.description": "The hub could not fetch metrics. Retry, or restart OmniMux if the analytics routes were just updated.",
  "login": "Sign in",
  "retry": "Retry"
};

// src/client/defaults.js
var STAGE_ID = "omnimux-analytics";
var SLOT_ID = "omnimux-analytics-stage";
var SIDEBAR_RANK = 4.5;
var OVERLAY_ORDER = 22;
var USE_MOCK = false;
var CACHE_TTL_MS = 5e3;
var FILTER_DEBOUNCE_MS = 300;
function resolveUseMock(explicit) {
  if (typeof explicit === "boolean") return explicit;
  if (typeof process !== "undefined" && process.env?.OMNIMUX_ANALYTICS_MOCK === "1") return true;
  if (typeof window !== "undefined") {
    try {
      const url = new URL(window.location.href);
      if (url.searchParams.get("analytics_mock") === "1") return true;
      if (window.localStorage?.getItem("omnimux-analytics-mock") === "1") return true;
    } catch {
    }
  }
  return USE_MOCK;
}
var DEFAULT_QUERY = Object.freeze({
  tab: "posting",
  platform: "all",
  profileId: "all",
  source: "all",
  timeRange: "30d",
  searchQuery: ""
});

// src/client/stage-store.js
var PRODUCT_STAGE_EVENT = "dsh-product-stage";
function createStageStore(getStage) {
  let open = false;
  try {
    open = window.localStorage.getItem("omnimux_active_product_stage") === STAGE_ID;
  } catch {
  }
  const listeners2 = /* @__PURE__ */ new Set();
  function emit2() {
    for (const listener of listeners2) listener();
  }
  if (open) {
    const restore = () => {
      try {
        const stage = getStage();
        if (stage && typeof stage.claim === "function") {
          stage.claim(STAGE_ID);
        }
      } catch {
      }
    };
    if (typeof queueMicrotask === "function") queueMicrotask(restore);
    else setTimeout(restore, 0);
  }
  window.addEventListener(PRODUCT_STAGE_EVENT, (event) => {
    const id = event instanceof CustomEvent ? event.detail?.id : void 0;
    if (id !== STAGE_ID && open) {
      open = false;
      emit2();
    } else if (id === STAGE_ID && !open) {
      open = true;
      emit2();
    }
  });
  return {
    getSnapshot: () => open,
    readBox() {
      return getStage().readBox();
    },
    /**
     * @param {() => void} listener
     */
    subscribe(listener) {
      listeners2.add(listener);
      return () => {
        listeners2.delete(listener);
      };
    },
    /**
     * @param {boolean} next
     */
    set(next) {
      if (open === next) return;
      open = next;
      const stage = getStage();
      if (open) stage.claim(STAGE_ID);
      else stage.release(STAGE_ID);
      emit2();
    },
    toggle() {
      this.set(!open);
    }
  };
}

// src/client/sidebar-entry.js
var ICON = '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M2.5 12.5V9M6.5 12.5V5.5M10.5 12.5V7.5M13.5 12.5V3.5" stroke-linecap="round"/><path d="M2.5 13.5h11" stroke-linecap="round"/></svg>';
var STYLES = `
.omnimux-analytics-entry {
  box-sizing: border-box; display: flex; align-items: center; gap: 6px; position: relative;
  width: calc(100% - 8px); height: 32px; margin: 0 4px; padding: 0 8px;
  border: none; border-radius: 8px; background: transparent;
  color: var(--dsw-alias-label-primary, inherit);
  font: var(--dsw-font-s-14, inherit); font-size: 14px; line-height: 20px;
  cursor: pointer; text-align: left;
}
.omnimux-analytics-entry:hover { background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,.12)); }
.omnimux-analytics-entry[data-active="true"] { background: var(--dsw-alias-interactive-bg-active, rgba(128,128,128,.18)); font-weight: 500; }
.omnimux-analytics-entry-icon { flex: none; display: inline-flex; width: 14px; height: 14px; align-items: center; justify-content: center; }
.omnimux-analytics-entry svg { display: block; width: 14px; height: 14px; }
.omnimux-analytics-entry-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 20px; }
`;
function paintLabel(entry, label) {
  entry.setAttribute("aria-label", label);
  const node = entry.querySelector(".omnimux-analytics-entry-label");
  if (node) node.textContent = label;
}
function registerWhenReady(row) {
  let unregister = () => {
  };
  let disposed = false;
  const attempt = () => {
    if (disposed) return;
    const api = window.__omnimuxSidebar;
    if (!api || typeof api.register !== "function") return;
    unregister = api.register(row);
    clearInterval(timer);
  };
  const timer = setInterval(attempt, 500);
  attempt();
  return () => {
    disposed = true;
    clearInterval(timer);
    unregister();
  };
}
function mountSidebarEntry(stage, t, locale) {
  const entry = document.createElement("button");
  entry.type = "button";
  entry.dataset.omnimuxAnalyticsEntry = "";
  entry.className = "omnimux-analytics-entry";
  entry.innerHTML = `<span class="omnimux-analytics-entry-icon">${ICON}</span><span class="omnimux-analytics-entry-label"></span>`;
  paintLabel(entry, t("nav"));
  entry.addEventListener("click", () => {
    stage.toggle();
  });
  const paint = () => {
    paintLabel(entry, t("nav"));
  };
  const unsubscribeLocale = typeof locale?.subscribe === "function" ? locale.subscribe(paint) : () => {
  };
  const syncActive = () => {
    if (stage.getSnapshot()) entry.dataset.active = "true";
    else delete entry.dataset.active;
  };
  const unsubscribeStage = stage.subscribe(syncActive);
  syncActive();
  const unregister = registerWhenReady({
    id: "omnimux-analytics-entry",
    rank: SIDEBAR_RANK,
    styles: STYLES,
    styleId: "omnimux-analytics-entry-styles",
    create: () => entry
  });
  return () => {
    unregister();
    unsubscribeStage();
    unsubscribeLocale();
  };
}

// src/client/AnalyticsStage.jsx
var import_react7 = require("react");

// src/client/styles.js
var STYLES_ID = "omnimux-analytics-styles";
var ANALYTICS_CSS = `
.omnimux-analytics-stage {
  --omnimux-analytics-metric-likes: var(--dsw-alias-state-error-primary, #ef4444);
  --omnimux-analytics-metric-comments: var(--dsw-alias-brand-primary, #3b82f6);
  --omnimux-analytics-metric-shares: var(--dsw-alias-label-success, #10b981);
  --omnimux-analytics-metric-saves: var(--dsw-alias-state-warn-primary, #f59e0b);
  --omnimux-analytics-metric-views: var(--dsw-alias-brand-secondary, #8b5cf6);
  --omnimux-analytics-metric-impressions: var(--dsw-alias-brand-tertiary, #06b6d4);
  --omnimux-analytics-metric-reach: var(--dsw-alias-label-tertiary, #64748b);
  --omnimux-analytics-metric-clicks: var(--dsw-alias-brand-pink, #ec4899);
  --omnimux-analytics-metric-er: var(--dsw-alias-label-success, #22c55e);
  --omnimux-analytics-heat-0: var(--dsw-alias-bg-module-platform, #ebedf0);
  --omnimux-analytics-heat-1: var(--dsw-alias-chart-heat-1, #9be9a8);
  --omnimux-analytics-heat-2: var(--dsw-alias-chart-heat-2, #40c463);
  --omnimux-analytics-heat-3: var(--dsw-alias-chart-heat-3, #30a14e);
  --omnimux-analytics-heat-4: var(--dsw-alias-chart-heat-4, #216e39);
  --omnimux-analytics-platform-tiktok: var(--dsw-alias-label-primary, #0a0a0a);
  --omnimux-analytics-platform-twitter: var(--dsw-alias-brand-twitter, #1d9bf0);
  --omnimux-analytics-platform-youtube: var(--dsw-alias-brand-youtube, #ff0000);
  --omnimux-analytics-platform-instagram: var(--dsw-alias-brand-instagram, #e1306c);
  --omnimux-analytics-cadence: var(--dsw-alias-brand-primary, #0ea5e9);
  position: fixed;
  z-index: 200;
  top: var(--stage-top);
  left: var(--stage-left);
  width: var(--stage-width);
  height: var(--stage-height);
  display: flex;
  flex-direction: column;
  background: var(--dsw-alias-bg-base, var(--dsw-bg, #0d0d0d));
  color: var(--dsw-alias-label-primary, inherit);
  overflow: hidden;
  pointer-events: auto;
  -webkit-app-region: no-drag;
  box-sizing: border-box;
}
.omnimux-analytics-stage *,
.omnimux-analytics-stage *::before,
.omnimux-analytics-stage *::after { box-sizing: border-box; }
.omnimux-analytics-stage[data-visible="false"] {
  display: none;
  pointer-events: none;
}
.omnimux-analytics-stage-header {
  flex: none;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 20px;
  -webkit-app-region: no-drag;
}
.omnimux-analytics-stage-heading { flex: 1; min-width: 0; }
.omnimux-analytics-stage-title {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  line-height: 32px;
  color: var(--dsw-alias-label-primary, inherit);
}
.omnimux-analytics-stage-subtitle {
  margin: 4px 0 0;
  font-size: 13px;
  line-height: 20px;
  color: var(--dsw-alias-label-secondary, rgba(128,128,128,.72));
}
.omnimux-analytics-stage-header-actions {
  flex: none;
  display: flex;
  align-items: center;
  gap: 4px;
}

/* Layer 2 */
.omnimux-analytics-stage-action-row {
  flex: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 0 20px 12px;
  flex-wrap: nowrap;
}
.omnimux-analytics-tabs {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px;
  border-radius: 8px;
  border: 1px solid var(--dsw-alias-border-l2, rgba(128,128,128,.18));
  background: var(--dsw-alias-bg-module-platform, rgba(128,128,128,.08));
}
.omnimux-analytics-sync {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  margin-left: auto;
}
.omnimux-analytics-sync-caption {
  font-size: 12px;
  line-height: 16px;
  color: var(--dsw-alias-label-tertiary, rgba(128,128,128,.55));
  white-space: nowrap;
}

/* Layer 3 */
.omnimux-analytics-stage-filter {
  flex: none;
  padding: 0 20px;
  height: 48px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--dsw-alias-border-l2, rgba(128,128,128,.16));
}
.omnimux-analytics-filterbar {
  width: 100%;
  padding: 0 !important;
  height: 48px !important;
}
.omnimux-analytics-search {
  width: 220px;
  flex: 0 0 220px;
  min-width: 220px;
  max-width: 220px;
}

/* Layer 4 */
.omnimux-analytics-stage-body {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: auto;
  padding: 20px 20px 32px;
}

.omnimux-analytics-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid var(--dsw-alias-border-l2, rgba(128,128,128,.18));
  background: var(--dsw-alias-bg-layer-1, rgba(128,128,128,.06));
  font-size: 13px;
  color: var(--dsw-alias-label-secondary, inherit);
}
.omnimux-analytics-banner[data-code="auth_expired"],
.omnimux-analytics-banner[data-code="network_error"] {
  border-color: var(--dsw-alias-state-warn-primary, #b45309);
}
.omnimux-analytics-banner-copy {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}
.omnimux-analytics-banner-detail {
  font-size: 12px;
  color: var(--dsw-alias-label-tertiary, rgba(128,128,128,.7));
}

.omnimux-analytics-kpi-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 16px;
}
.omnimux-analytics-kpi {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  min-height: 98px;
  padding: 16px;
  border-radius: 10px;
  border: 1px solid var(--dsw-alias-border-l2, rgba(128,128,128,.16));
  background: var(--dsw-alias-bg-layer-1, rgba(128,128,128,.04));
}
.omnimux-analytics-kpi-title {
  margin: 0;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: var(--dsw-alias-label-secondary, rgba(128,128,128,.72));
}
.omnimux-analytics-kpi-row {
  display: flex;
  align-items: baseline;
  gap: 8px;
  min-width: 0;
}
.omnimux-analytics-kpi-value {
  margin: 0;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 32px;
  font-variant-numeric: tabular-nums;
  color: var(--dsw-alias-label-primary, inherit);
}
.omnimux-analytics-kpi-badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
  line-height: 14px;
  color: var(--dsw-alias-label-tertiary, rgba(128,128,128,.55));
  background: var(--dsw-alias-bg-module-platform, rgba(128,128,128,.08));
  white-space: nowrap;
}
.omnimux-analytics-kpi-badge.is-up {
  color: var(--dsw-alias-label-success, #15803d);
  background: var(--dsw-alias-state-success-soft, rgba(21, 128, 61, 0.1));
}
.omnimux-analytics-best {
  display: flex;
  align-items: center;
  gap: 12px;
}
.omnimux-analytics-best-cover {
  flex: none;
  width: 36px;
  height: 36px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-size: 10px;
  font-weight: 700;
  color: var(--dsw-alias-label-primary-inverted, #fff);
  background: var(--dsw-alias-brand-primary, #6366f1);
}
.omnimux-analytics-best-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.omnimux-analytics-best-views {
  margin: 0;
  display: flex;
  align-items: baseline;
  gap: 6px;
  font-size: 15px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}
.omnimux-analytics-best-views span {
  font-size: 12px;
  font-weight: 400;
  color: var(--dsw-alias-label-secondary, rgba(128,128,128,.72));
}
.omnimux-analytics-best-link {
  display: inline-flex;
  align-items: center;
  gap: 2px;
  margin-top: 2px;
  font-size: 12px;
  color: var(--dsw-alias-brand-primary, #3b82f6);
  text-decoration: none;
}
.omnimux-analytics-best-link.is-disabled {
  color: var(--dsw-alias-label-tertiary, rgba(128,128,128,.45));
  pointer-events: none;
}

.omnimux-analytics-grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.omnimux-analytics-panel {
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid var(--dsw-alias-border-l2, rgba(128,128,128,.16));
  background: var(--dsw-alias-bg-layer-1, rgba(128,128,128,.04));
  min-width: 0;
}
.omnimux-analytics-panel-wide { grid-column: 1 / -1; }
.omnimux-analytics-panel-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
}
.omnimux-analytics-panel-title {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: var(--dsw-alias-label-primary, inherit);
}
.omnimux-analytics-panel-subtitle {
  margin: 2px 0 0;
  font-size: 12px;
  line-height: 16px;
  color: var(--dsw-alias-label-tertiary, rgba(128,128,128,.55));
}
.omnimux-analytics-panel-meta {
  display: flex;
  align-items: baseline;
  gap: 6px;
  font-size: 13px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.omnimux-analytics-panel-meta span {
  font-size: 11px;
  font-weight: 400;
  color: var(--dsw-alias-label-tertiary, rgba(128,128,128,.55));
}
.omnimux-analytics-chartbox {
  width: 100%;
  height: 220px;
}
.omnimux-analytics-panel-wide .omnimux-analytics-chartbox { height: 260px; }
.omnimux-analytics-svg { width: 100%; height: 100%; display: block; overflow: visible; }
.omnimux-analytics-gridline {
  stroke: var(--dsw-alias-border-l1, rgba(128,128,128,.14));
  stroke-width: 1;
}
.omnimux-analytics-tick {
  fill: var(--dsw-alias-label-tertiary, rgba(128,128,128,.55));
  font-size: 10px;
}
.omnimux-analytics-tick-y { text-anchor: end; }
.omnimux-analytics-tick-y1 { text-anchor: start; }
.omnimux-analytics-tick-x { text-anchor: middle; }
.omnimux-analytics-bar { fill: var(--dsw-alias-label-primary, #18181b); }
.omnimux-analytics-line {
  fill: none;
  stroke: var(--series-color, currentColor);
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.omnimux-analytics-line-dash { stroke-dasharray: 4 4; }
.omnimux-analytics-area {
  fill: var(--series-color, currentColor);
  opacity: 0.12;
}
.omnimux-analytics-dot { fill: var(--series-color, currentColor); }

.omnimux-analytics-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px solid var(--dsw-alias-border-l1, rgba(128,128,128,.12));
}
.omnimux-analytics-pill {
  display: inline-flex !important;
  align-items: center;
  gap: 6px;
  height: 24px;
  padding: 0 8px !important;
  font-size: 12px;
  line-height: 16px;
  color: var(--dsw-alias-label-secondary, rgba(128,128,128,.72));
  cursor: pointer;
  user-select: none;
}
.omnimux-analytics-pill.is-on { color: var(--dsw-alias-label-primary, inherit); }
.omnimux-analytics-pill-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--pill-color, currentColor);
  box-shadow: 0 0 0 1px var(--dsw-alias-border-l2, rgba(128,128,128,.2));
}
.omnimux-analytics-pill:not(.is-on) .omnimux-analytics-pill-dot { opacity: 0.35; }
.omnimux-analytics-pill strong {
  font-variant-numeric: tabular-nums;
  font-weight: 600;
}
.omnimux-analytics-pill-delta {
  font-size: 10px;
  color: var(--dsw-alias-label-success, #10b981);
  font-variant-numeric: tabular-nums;
}

.omnimux-analytics-heatmap {
  display: grid;
  grid-template-columns: 44px repeat(24, minmax(0, 1fr));
  gap: 3px;
  position: relative;
}
.omnimux-analytics-heatmap-row { display: contents; }
.omnimux-analytics-heatmap-label {
  font-size: 11px;
  color: var(--dsw-alias-label-tertiary, rgba(128,128,128,.55));
  display: flex;
  align-items: center;
  height: 14px;
}
.omnimux-analytics-heatcell {
  height: 14px;
  border-radius: 2px;
  background: var(--omnimux-analytics-heat-0);
  cursor: pointer;
}
.omnimux-analytics-heatcell[data-level="1"] { background: var(--omnimux-analytics-heat-1); }
.omnimux-analytics-heatcell[data-level="2"] { background: var(--omnimux-analytics-heat-2); }
.omnimux-analytics-heatcell[data-level="3"] { background: var(--omnimux-analytics-heat-3); }
.omnimux-analytics-heatcell[data-level="4"] { background: var(--omnimux-analytics-heat-4); }
.omnimux-analytics-heatcell:hover {
  outline: 2px solid var(--dsw-alias-label-primary, currentColor);
  outline-offset: 1px;
}
.omnimux-analytics-heatmap-legend {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  color: var(--dsw-alias-label-tertiary, rgba(128,128,128,.55));
}
.omnimux-analytics-heatmap-legend .omnimux-analytics-heatcell {
  width: 10px;
  height: 10px;
  cursor: default;
}
.omnimux-analytics-heatmap-tip {
  grid-column: 1 / -1;
  margin-top: 4px;
  font-size: 11px;
  color: var(--dsw-alias-label-secondary, rgba(128,128,128,.72));
}

.omnimux-analytics-chips {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
  font-size: 12px;
}
.omnimux-analytics-chips-label {
  color: var(--dsw-alias-label-secondary, rgba(128,128,128,.72));
  font-weight: 500;
}
.omnimux-analytics-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 3px 8px;
  border-radius: 4px;
  border: 1px solid var(--dsw-alias-border-l2, rgba(128,128,128,.18));
  background: var(--dsw-alias-bg-module-platform, rgba(128,128,128,.08));
  font-size: 11px;
  font-weight: 500;
}
.omnimux-analytics-chip.is-highlight {
  color: var(--dsw-alias-label-success, #15803d);
  background: var(--dsw-alias-state-success-soft, rgba(33, 110, 57, 0.12));
  border-color: var(--dsw-alias-label-success, rgba(33, 110, 57, 0.25));
}

.omnimux-analytics-platform {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
}
.omnimux-analytics-platform-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--omnimux-analytics-platform-tiktok);
  flex: none;
}
.omnimux-analytics-platform-dot[data-platform="twitter"] { background: var(--omnimux-analytics-platform-twitter); }
.omnimux-analytics-platform-dot[data-platform="youtube"] { background: var(--omnimux-analytics-platform-youtube); }
.omnimux-analytics-platform-dot[data-platform="instagram"] { background: var(--omnimux-analytics-platform-instagram); }

.omnimux-analytics-tablewrap {
  border-radius: 10px;
  border: 1px solid var(--dsw-alias-border-l2, rgba(128,128,128,.16));
  background: var(--dsw-alias-bg-layer-1, rgba(128,128,128,.04));
  overflow: hidden;
}
.omnimux-analytics-table-head {
  padding: 16px 20px;
  border-bottom: 1px solid var(--dsw-alias-border-l1, rgba(128,128,128,.12));
}
.omnimux-analytics-tablescroll { overflow-x: auto; }
.omnimux-analytics-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 13px;
}
.omnimux-analytics-table th {
  background: var(--dsw-alias-bg-module-platform, rgba(128,128,128,.06));
  color: var(--dsw-alias-label-secondary, rgba(128,128,128,.72));
  font-weight: 500;
  font-size: 12px;
  padding: 8px 12px;
  border-bottom: 1px solid var(--dsw-alias-border-l2, rgba(128,128,128,.16));
  white-space: nowrap;
}
.omnimux-analytics-table td {
  padding: 12px 16px;
  border-bottom: 1px solid var(--dsw-alias-border-l1, rgba(128,128,128,.1));
  color: var(--dsw-alias-label-primary, inherit);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.omnimux-analytics-table td.is-num { text-align: right; }
.omnimux-analytics-table tbody tr:hover td {
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,.06));
}
.omnimux-analytics-sortbtn {
  padding: 0 4px !important;
  height: 24px;
  gap: 4px;
}
.omnimux-analytics-sortmark {
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 3px solid transparent;
  border-right: 3px solid transparent;
  border-bottom: 5px solid var(--dsw-alias-label-tertiary, rgba(128,128,128,.45));
  opacity: 0.45;
}
.omnimux-analytics-sortmark[data-active="true"] { opacity: 1; }
.omnimux-analytics-sortmark[data-active="true"][data-dir="desc"] {
  border-bottom: 0;
  border-top: 5px solid var(--dsw-alias-label-primary, currentColor);
}
.omnimux-analytics-sortmark[data-active="true"][data-dir="asc"] {
  border-bottom-color: var(--dsw-alias-label-primary, currentColor);
}
.omnimux-analytics-er {
  display: inline-block;
  padding: 2px 6px;
  border-radius: 4px;
  background: var(--dsw-alias-state-success-soft, rgba(34, 197, 94, 0.1));
  color: var(--dsw-alias-label-success, #16a34a);
  font-variant-numeric: tabular-nums;
  font-weight: 600;
}
.omnimux-analytics-postcell {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 220px;
}
.omnimux-analytics-thumb {
  width: 32px;
  height: 32px;
  border-radius: 6px;
  object-fit: cover;
  flex: none;
  background: var(--dsw-alias-bg-module-platform, rgba(128,128,128,.12));
}
.omnimux-analytics-thumb.is-fallback {
  background: var(--dsw-alias-brand-primary, #6366f1);
}
.omnimux-analytics-posttitle {
  font-weight: 600;
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.omnimux-analytics-postmeta {
  font-size: 11px;
  color: var(--dsw-alias-label-tertiary, rgba(128,128,128,.55));
}

.omnimux-analytics-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 280px;
  text-align: center;
  padding: 48px 24px;
}
.omnimux-analytics-empty-icon {
  color: var(--dsw-alias-label-tertiary, rgba(128,128,128,.45));
}
.omnimux-analytics-empty-title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}
.omnimux-analytics-empty-text {
  margin: 0;
  font-size: 13px;
  line-height: 20px;
  color: var(--dsw-alias-label-secondary, rgba(128,128,128,.72));
  max-width: 420px;
}
.omnimux-analytics-inbox {
  align-items: center;
  text-align: center;
  padding: 48px 24px;
  gap: 12px;
}

@media (max-width: 1200px) {
  .omnimux-analytics-kpi-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .omnimux-analytics-grid-2 { grid-template-columns: 1fr; }
}
@media (max-width: 720px) {
  .omnimux-analytics-kpi-grid { grid-template-columns: 1fr; }
}
`;
function injectAnalyticsStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(STYLES_ID)) return;
  const styleNode = document.createElement("style");
  styleNode.id = STYLES_ID;
  styleNode.textContent = ANALYTICS_CSS;
  document.head.appendChild(styleNode);
}

// src/client/store.js
var import_react = require("react");

// src/client/sort.js
function isMissing(value) {
  return value == null || typeof value === "number" && Number.isNaN(value);
}
function compareNullable(a, b, dir = "asc") {
  const aN = isMissing(a);
  const bN = isMissing(b);
  if (aN && bN) return 0;
  if (aN) return 1;
  if (bN) return -1;
  if (typeof a === "number" && typeof b === "number") {
    const cmp2 = a < b ? -1 : a > b ? 1 : 0;
    return dir === "asc" ? cmp2 : -cmp2;
  }
  const left = String(a);
  const right = String(b);
  const cmp = left.localeCompare(right, "zh-CN");
  return dir === "asc" ? cmp : -cmp;
}
function sortRows(rows, key, dir = "asc") {
  if (!Array.isArray(rows) || !key) return Array.isArray(rows) ? rows.slice() : [];
  return rows.slice().sort((a, b) => compareNullable(a[key], b[key], dir));
}
function sortTopPostsDefault(rows) {
  if (!Array.isArray(rows)) return [];
  return rows.slice().sort((a, b) => {
    const er = compareNullable(a.er, b.er, "desc");
    if (er !== 0) return er;
    return compareNullable(a.views, b.views, "desc");
  });
}
function filterTopPosts(posts, searchQuery) {
  if (!Array.isArray(posts)) return [];
  const q = String(searchQuery || "").trim().toLowerCase();
  if (!q) return posts.slice();
  return posts.filter((post) => {
    const title = String(post.title || "").toLowerCase();
    const id = String(post.postId || "").toLowerCase();
    return title.includes(q) || id.includes(q);
  });
}

// src/client/query.js
var FETCH_KEYS = (
  /** @type {const} */
  ["platform", "profileId", "timeRange"]
);
function cacheKey(query) {
  const q = { ...DEFAULT_QUERY, ...query };
  return JSON.stringify({
    platform: q.platform,
    profileId: q.profileId,
    timeRange: q.timeRange
  });
}
function patchNeedsFetch(patch) {
  return FETCH_KEYS.some((key) => Object.prototype.hasOwnProperty.call(patch, key));
}
function materializeFixture(raw, now = Date.now()) {
  const payload = structuredClone(raw);
  const sync = payload.syncStatus && typeof payload.syncStatus === "object" ? (
    /** @type {Record<string, unknown>} */
    payload.syncStatus
  ) : {};
  payload.syncStatus = {
    ...sync,
    lastSyncedAt: now - 14 * 60 * 1e3,
    nextSyncAt: now + 46 * 60 * 1e3,
    syncing: false
  };
  return payload;
}
function applyDashboardQuery(payload, query) {
  const q = { ...DEFAULT_QUERY, ...query };
  const next = structuredClone(payload);
  next.filtersEcho = q;
  if (Array.isArray(next.topPosts)) {
    next.topPosts = filterTopPosts(next.topPosts, q.searchQuery);
  }
  return next;
}
function ensureHeatmapCells(cells, maxScore = 0) {
  const out = Array.from({ length: 168 }, (_, i) => ({
    dayOfWeek: Math.floor(i / 24),
    hour: i % 24,
    score: 0,
    level: 0,
    postCount: 0
  }));
  if (!Array.isArray(cells)) return out;
  for (const cell of cells) {
    const day = Number(cell.dayOfWeek);
    const hour = Number(cell.hour);
    if (!Number.isInteger(day) || !Number.isInteger(hour)) continue;
    if (day < 0 || day > 6 || hour < 0 || hour > 23) continue;
    out[day * 24 + hour] = {
      dayOfWeek: day,
      hour,
      score: Number(cell.score) || 0,
      level: cell.level == null ? 0 : cell.level,
      postCount: cell.postCount == null ? 0 : cell.postCount,
      maxScore
    };
  }
  return out;
}

// src/client/mock/dashboard-fixture.json
var dashboard_fixture_default = {
  meta: {
    generatedAt: "2026-08-25T04:00:00.000Z",
    schemaVersion: "1.0.0",
    locale: "zh-CN",
    boundAccountCount: 2,
    authorizedPlatforms: [
      "tiktok",
      "twitter"
    ],
    reachApprox: true,
    notes: "Phase-1 mock aligned to 2026-08-25-social-analytics-prototype.html; reachApprox=true because prototype KPI Reach uses views-near proxy while platform table Reach stays null."
  },
  syncStatus: {
    lastSyncedAt: 175609284e4,
    nextSyncAt: 175609644e4,
    syncIntervalMs: 36e5,
    syncing: false,
    lastError: null
  },
  filtersEcho: {
    tab: "posting",
    platform: "all",
    profileId: "all",
    source: "all",
    timeRange: "30d",
    searchQuery: ""
  },
  kpi: {
    engagementRate: {
      value: 0.0226
    },
    totalReach: {
      value: 1900,
      raw: 1900
    },
    totalFollowers: {
      value: 635
    },
    followerDiff: {
      value: 17
    },
    postsCount: {
      value: 12
    },
    postsHealth: "normal",
    bestPost: {
      postId: "post_ep1_pilot",
      platform: "tiktok",
      title: "\u7B2C1\u96C6 \u6B63\u7247\u9996\u53D1 (Episode 1 Pilot)",
      coverLabel: "\u7B2C1\u96C6",
      coverUrl: null,
      views: 930,
      er: 0.0183,
      publishedAt: "2026-08-02T02:00:00.000Z",
      detailHref: "#omnimux-analytics-top-posts"
    }
  },
  basicCharts: {
    postsPerPlatform: {
      labels: [
        "TikTok"
      ],
      platformIds: [
        "tiktok"
      ],
      values: [
        12
      ],
      total: 12
    },
    postsOverTime: {
      grain: "week",
      total: 12,
      buckets: [
        {
          key: "2026-07-27",
          label: "7\u670827\u65E5",
          value: 6
        },
        {
          key: "2026-08-03",
          label: "8\u67083\u65E5",
          value: 6
        },
        {
          key: "2026-08-10",
          label: "8\u670810\u65E5",
          value: 0
        },
        {
          key: "2026-08-17",
          label: "8\u670817\u65E5",
          value: 0
        },
        {
          key: "2026-08-24",
          label: "8\u670824\u65E5",
          value: 0
        }
      ]
    },
    likesPerPlatform: {
      labels: [
        "TikTok"
      ],
      platformIds: [
        "tiktok"
      ],
      values: [
        34
      ],
      total: 34
    },
    likesOverTime: {
      grain: "week",
      total: 34,
      buckets: [
        {
          key: "2026-07-27",
          label: "7\u670827\u65E5",
          value: 34
        },
        {
          key: "2026-08-03",
          label: "8\u67083\u65E5",
          value: 0
        },
        {
          key: "2026-08-10",
          label: "8\u670810\u65E5",
          value: 0
        },
        {
          key: "2026-08-17",
          label: "8\u670817\u65E5",
          value: 0
        },
        {
          key: "2026-08-24",
          label: "8\u670824\u65E5",
          value: 0
        }
      ]
    }
  },
  engagementOverTime: {
    grain: "week",
    buckets: [
      "2026-07-27",
      "2026-08-03",
      "2026-08-10",
      "2026-08-17",
      "2026-08-24"
    ],
    labels: [
      "7\u670827\u65E5",
      "8\u67083\u65E5",
      "8\u670810\u65E5",
      "8\u670817\u65E5",
      "8\u670824\u65E5"
    ],
    totals: {
      likes: 35,
      comments: 8,
      shares: 2,
      saves: 0,
      views: 2050,
      impressions: 0,
      reach: 0,
      clicks: 0,
      er: 0.0226
    },
    deltas: {
      views: 1993
    },
    series: [
      {
        key: "likes",
        labelZh: "\u70B9\u8D5E\u6570",
        labelEn: "Likes",
        color: "#ef4444",
        yAxis: 0,
        defaultVisible: true,
        points: [
          17,
          16,
          1,
          0,
          0
        ]
      },
      {
        key: "comments",
        labelZh: "\u8BC4\u8BBA\u6570",
        labelEn: "Comments",
        color: "#3b82f6",
        yAxis: 0,
        defaultVisible: true,
        points: [
          4,
          4,
          0,
          0,
          0
        ]
      },
      {
        key: "shares",
        labelZh: "\u5206\u4EAB\u6570",
        labelEn: "Shares",
        color: "#10b981",
        yAxis: 0,
        defaultVisible: true,
        points: [
          1,
          1,
          0,
          0,
          0
        ]
      },
      {
        key: "saves",
        labelZh: "\u6536\u85CF\u6570",
        labelEn: "Saves",
        color: "#f59e0b",
        yAxis: 0,
        defaultVisible: false,
        points: [
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        key: "views",
        labelZh: "\u64AD\u653E/\u6D4F\u89C8",
        labelEn: "Views",
        color: "#8b5cf6",
        yAxis: 1,
        defaultVisible: true,
        points: [
          1200,
          800,
          50,
          0,
          0
        ]
      },
      {
        key: "impressions",
        labelZh: "\u66DD\u5149\u91CF",
        labelEn: "Impressions",
        color: "#06b6d4",
        yAxis: 0,
        defaultVisible: false,
        points: [
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        key: "reach",
        labelZh: "\u89E6\u8FBE\u4EBA\u6570",
        labelEn: "Reach",
        color: "#64748b",
        yAxis: 0,
        defaultVisible: false,
        points: [
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        key: "clicks",
        labelZh: "\u94FE\u63A5\u70B9\u51FB",
        labelEn: "Clicks",
        color: "#ec4899",
        yAxis: 0,
        defaultVisible: false,
        points: [
          0,
          0,
          0,
          0,
          0
        ]
      },
      {
        key: "er",
        labelZh: "\u4E92\u52A8\u7387",
        labelEn: "Eng. Rate",
        color: "#22c55e",
        yAxis: 0,
        dashed: true,
        defaultVisible: true,
        points: [
          0.0226,
          0.021,
          5e-3,
          0,
          0
        ]
      }
    ]
  },
  heatmap: {
    dayLabelsZh: [
      "\u5468\u4E00",
      "\u5468\u4E8C",
      "\u5468\u4E09",
      "\u5468\u56DB",
      "\u5468\u4E94",
      "\u5468\u516D",
      "\u5468\u65E5"
    ],
    dayLabelsEn: [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun"
    ],
    maxScore: 24,
    recommended: [
      {
        dayOfWeek: 6,
        hour: 10,
        score: 24,
        labelZh: "\u5468\u65E5 10:00 \xB7 \u4E92\u52A8\u6307\u6570 24",
        labelEn: "Sun 10:00 \xB7 score 24"
      },
      {
        dayOfWeek: 2,
        hour: 20,
        score: 18,
        labelZh: "\u5468\u4E09 20:00 \xB7 \u4E92\u52A8\u6307\u6570 18",
        labelEn: "Wed 20:00 \xB7 score 18"
      },
      {
        dayOfWeek: 1,
        hour: 11,
        score: 13,
        labelZh: "\u5468\u4E8C 11:00 \xB7 \u4E92\u52A8\u6307\u6570 13",
        labelEn: "Tue 11:00 \xB7 score 13"
      }
    ],
    cells: [
      {
        dayOfWeek: 0,
        hour: 0,
        score: 2,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 0,
        hour: 1,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 0,
        hour: 2,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 0,
        hour: 3,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 0,
        hour: 4,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 0,
        hour: 5,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 0,
        hour: 6,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 0,
        hour: 7,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 0,
        hour: 8,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 0,
        hour: 9,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 0,
        hour: 10,
        score: 15,
        level: 3,
        postCount: 3
      },
      {
        dayOfWeek: 0,
        hour: 11,
        score: 16,
        level: 3,
        postCount: 3
      },
      {
        dayOfWeek: 0,
        hour: 12,
        score: 14,
        level: 3,
        postCount: 2
      },
      {
        dayOfWeek: 0,
        hour: 13,
        score: 2,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 0,
        hour: 14,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 0,
        hour: 15,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 0,
        hour: 16,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 0,
        hour: 17,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 0,
        hour: 18,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 0,
        hour: 19,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 0,
        hour: 20,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 0,
        hour: 21,
        score: 5,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 0,
        hour: 22,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 0,
        hour: 23,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 1,
        hour: 0,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 1,
        hour: 1,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 1,
        hour: 2,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 1,
        hour: 3,
        score: 3,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 1,
        hour: 4,
        score: 1,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 1,
        hour: 5,
        score: 2,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 1,
        hour: 6,
        score: 3,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 1,
        hour: 7,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 1,
        hour: 8,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 1,
        hour: 9,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 1,
        hour: 10,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 1,
        hour: 11,
        score: 13,
        level: 3,
        postCount: 2
      },
      {
        dayOfWeek: 1,
        hour: 12,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 1,
        hour: 13,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 1,
        hour: 14,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 1,
        hour: 15,
        score: 5,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 1,
        hour: 16,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 1,
        hour: 17,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 1,
        hour: 18,
        score: 1,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 1,
        hour: 19,
        score: 1,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 1,
        hour: 20,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 1,
        hour: 21,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 1,
        hour: 22,
        score: 4,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 1,
        hour: 23,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 2,
        hour: 0,
        score: 2,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 2,
        hour: 1,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 2,
        hour: 2,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 2,
        hour: 3,
        score: 4,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 2,
        hour: 4,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 2,
        hour: 5,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 2,
        hour: 6,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 2,
        hour: 7,
        score: 5,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 2,
        hour: 8,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 2,
        hour: 9,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 2,
        hour: 10,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 2,
        hour: 11,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 2,
        hour: 12,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 2,
        hour: 13,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 2,
        hour: 14,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 2,
        hour: 15,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 2,
        hour: 16,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 2,
        hour: 17,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 2,
        hour: 18,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 2,
        hour: 19,
        score: 1,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 2,
        hour: 20,
        score: 18,
        level: 4,
        postCount: 3
      },
      {
        dayOfWeek: 2,
        hour: 21,
        score: 5,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 2,
        hour: 22,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 2,
        hour: 23,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 3,
        hour: 0,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 3,
        hour: 1,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 3,
        hour: 2,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 3,
        hour: 3,
        score: 3,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 3,
        hour: 4,
        score: 1,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 3,
        hour: 5,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 3,
        hour: 6,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 3,
        hour: 7,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 3,
        hour: 8,
        score: 2,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 3,
        hour: 9,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 3,
        hour: 10,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 3,
        hour: 11,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 3,
        hour: 12,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 3,
        hour: 13,
        score: 2,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 3,
        hour: 14,
        score: 3,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 3,
        hour: 15,
        score: 1,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 3,
        hour: 16,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 3,
        hour: 17,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 3,
        hour: 18,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 3,
        hour: 19,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 3,
        hour: 20,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 3,
        hour: 21,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 3,
        hour: 22,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 3,
        hour: 23,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 4,
        hour: 0,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 4,
        hour: 1,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 4,
        hour: 2,
        score: 5,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 4,
        hour: 3,
        score: 2,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 4,
        hour: 4,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 4,
        hour: 5,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 4,
        hour: 6,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 4,
        hour: 7,
        score: 2,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 4,
        hour: 8,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 4,
        hour: 9,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 4,
        hour: 10,
        score: 2,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 4,
        hour: 11,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 4,
        hour: 12,
        score: 1,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 4,
        hour: 13,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 4,
        hour: 14,
        score: 4,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 4,
        hour: 15,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 4,
        hour: 16,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 4,
        hour: 17,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 4,
        hour: 18,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 4,
        hour: 19,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 4,
        hour: 20,
        score: 5,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 4,
        hour: 21,
        score: 1,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 4,
        hour: 22,
        score: 4,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 4,
        hour: 23,
        score: 2,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 5,
        hour: 0,
        score: 3,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 5,
        hour: 1,
        score: 5,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 5,
        hour: 2,
        score: 4,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 5,
        hour: 3,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 5,
        hour: 4,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 5,
        hour: 5,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 5,
        hour: 6,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 5,
        hour: 7,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 5,
        hour: 8,
        score: 1,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 5,
        hour: 9,
        score: 4,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 5,
        hour: 10,
        score: 4,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 5,
        hour: 11,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 5,
        hour: 12,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 5,
        hour: 13,
        score: 4,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 5,
        hour: 14,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 5,
        hour: 15,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 5,
        hour: 16,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 5,
        hour: 17,
        score: 3,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 5,
        hour: 18,
        score: 3,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 5,
        hour: 19,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 5,
        hour: 20,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 5,
        hour: 21,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 5,
        hour: 22,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 5,
        hour: 23,
        score: 1,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 6,
        hour: 0,
        score: 5,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 6,
        hour: 1,
        score: 3,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 6,
        hour: 2,
        score: 1,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 6,
        hour: 3,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 6,
        hour: 4,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 6,
        hour: 5,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 6,
        hour: 6,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 6,
        hour: 7,
        score: 1,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 6,
        hour: 8,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 6,
        hour: 9,
        score: 12,
        level: 3,
        postCount: 2
      },
      {
        dayOfWeek: 6,
        hour: 10,
        score: 24,
        level: 4,
        postCount: 4
      },
      {
        dayOfWeek: 6,
        hour: 11,
        score: 14,
        level: 3,
        postCount: 2
      },
      {
        dayOfWeek: 6,
        hour: 12,
        score: 2,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 6,
        hour: 13,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 6,
        hour: 14,
        score: 3,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 6,
        hour: 15,
        score: 2,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 6,
        hour: 16,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 6,
        hour: 17,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 6,
        hour: 18,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 6,
        hour: 19,
        score: 4,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 6,
        hour: 20,
        score: 4,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 6,
        hour: 21,
        score: 1,
        level: 1,
        postCount: 1
      },
      {
        dayOfWeek: 6,
        hour: 22,
        score: 0,
        level: 0,
        postCount: 0
      },
      {
        dayOfWeek: 6,
        hour: 23,
        score: 0,
        level: 0,
        postCount: 0
      }
    ]
  },
  followerEvolution: {
    totalFollowers: 635,
    platforms: [
      "tiktok",
      "twitter"
    ],
    timeline: [
      {
        date: "2026-08-01",
        label: "8\u67081\u65E5",
        total: 388,
        breakdown: {
          tiktok: 240,
          twitter: 148
        }
      },
      {
        date: "2026-08-02",
        label: "8\u67082\u65E5",
        total: 401,
        breakdown: {
          tiktok: 253,
          twitter: 148
        }
      },
      {
        date: "2026-08-10",
        label: "8\u670810\u65E5",
        total: 401,
        breakdown: {
          tiktok: 253,
          twitter: 148
        }
      },
      {
        date: "2026-08-24",
        label: "8\u670824\u65E5",
        total: 401,
        breakdown: {
          tiktok: 253,
          twitter: 148
        }
      }
    ]
  },
  platformBreakdown: [
    {
      platform: "tiktok",
      platformLabel: "TikTok",
      posts: 12,
      likes: 34,
      comments: 8,
      shares: 2,
      saves: null,
      clicks: null,
      views: 1900,
      impressions: null,
      reach: null,
      er: 0.0228
    }
  ],
  topPosts: [
    {
      postId: "post_ep1_pilot",
      platform: "tiktok",
      title: "\u7B2C1\u96C6 \u6B63\u7247\u9996\u53D1 (Episode 1 Pilot)",
      publishedAt: "2026-08-02T02:00:00.000Z",
      publishedLabel: "2026\u5E748\u67082\u65E5 10:00",
      coverUrl: null,
      likes: 17,
      comments: null,
      shares: null,
      saves: null,
      clicks: null,
      views: 930,
      follows: null,
      impressions: null,
      reach: null,
      er: 0.0183,
      score: 1.12
    },
    {
      postId: "post_ep2_clip",
      platform: "tiktok",
      title: "\u7B2C2\u96C6 \u7CBE\u5F69\u9AD8\u6F6E\u5207\u7247 (Episode 2 Clip)",
      publishedAt: "2026-08-02T10:30:00.000Z",
      publishedLabel: "2026\u5E748\u67082\u65E5 18:30",
      coverUrl: null,
      likes: 10,
      comments: 8,
      shares: 2,
      saves: null,
      clicks: null,
      views: 630,
      follows: null,
      impressions: null,
      reach: null,
      er: 0.0317,
      score: 1.45
    },
    {
      postId: "post_teaser",
      platform: "tiktok",
      title: "\u60AC\u7591\u77ED\u5267\u4E0A\u7EBF\u524D\u77BB\u9884\u544A (Teaser)",
      publishedAt: "2026-07-31T04:00:00.000Z",
      publishedLabel: "2026\u5E747\u670831\u65E5 12:00",
      coverUrl: null,
      likes: 7,
      comments: null,
      shares: null,
      saves: null,
      clicks: null,
      views: 325,
      follows: null,
      impressions: null,
      reach: null,
      er: 0.0215,
      score: 0.98
    }
  ],
  strategy: {
    cadence: {
      brackets: [
        "6-10/wk",
        "11+/wk"
      ],
      series: [
        {
          platform: "tiktok",
          erPercentPoints: [
            0.6,
            2.2
          ]
        }
      ],
      optimal: [
        {
          platform: "tiktok",
          bracket: "11+/wk",
          erPercent: 2.2,
          labelZh: "TikTok 11+\u7BC7/\u5468 \xB7 \u4E92\u52A8\u7387 2.2%",
          labelEn: "TikTok 11+/wk \xB7 ER 2.2%"
        }
      ]
    },
    accumulation: {
      windows: [
        {
          order: 0,
          key: "publish",
          labelZh: "\u53D1\u5E03\u65F6",
          labelEn: "At publish",
          pct: 0
        },
        {
          order: 1,
          key: "0-6h",
          labelZh: "0-6\u5C0F\u65F6",
          labelEn: "0-6h",
          pct: 42
        },
        {
          order: 2,
          key: "6-12h",
          labelZh: "6-12\u5C0F\u65F6",
          labelEn: "6-12h",
          pct: 43
        },
        {
          order: 3,
          key: "12-24h",
          labelZh: "12-24\u5C0F\u65F6",
          labelEn: "12-24h",
          pct: 43
        },
        {
          order: 4,
          key: "1-2d",
          labelZh: "1-2\u5929",
          labelEn: "1-2d",
          pct: 50
        },
        {
          order: 5,
          key: "2-7d",
          labelZh: "2-7\u5929",
          labelEn: "2-7d",
          pct: 100
        },
        {
          order: 6,
          key: "7-30d",
          labelZh: "7-30\u5929",
          labelEn: "7-30d",
          pct: 100
        }
      ],
      milestones: {
        halfEngagementBy: "2-7d",
        eightyPercentWithin: "2-7d",
        halfLabelZh: "\u534A\u6570\u4E92\u52A8\u5728\u53D1\u5E03\u540E 2-7\u5929\u5185\u4EA7\u751F",
        eightyLabelZh: "80% \u4E92\u52A8\u96C6\u4E2D\u5728 2-7\u5929\u957F\u5C3E\u671F"
      }
    }
  },
  emptyState: null
};

// src/client/mock/empty-states.json
var empty_states_default = {
  schemaVersion: "1.0.0",
  variants: {
    no_accounts: {
      meta: {
        generatedAt: "2026-08-25T04:00:00.000Z",
        schemaVersion: "1.0.0",
        locale: "zh-CN",
        boundAccountCount: 0,
        authorizedPlatforms: [],
        reachApprox: false
      },
      syncStatus: {
        lastSyncedAt: null,
        nextSyncAt: null,
        syncIntervalMs: 36e5,
        syncing: false,
        lastError: null
      },
      filtersEcho: {
        tab: "posting",
        platform: "all",
        profileId: "all",
        source: "all",
        timeRange: "30d",
        searchQuery: ""
      },
      kpi: {
        engagementRate: { value: null },
        totalReach: { value: null },
        totalFollowers: { value: null },
        followerDiff: { value: null },
        postsCount: { value: null },
        postsHealth: "none",
        bestPost: null
      },
      basicCharts: {
        postsPerPlatform: { labels: [], platformIds: [], values: [], total: 0 },
        postsOverTime: { grain: "week", total: 0, buckets: [] },
        likesPerPlatform: { labels: [], platformIds: [], values: [], total: 0 },
        likesOverTime: { grain: "week", total: 0, buckets: [] }
      },
      engagementOverTime: {
        grain: "week",
        buckets: [],
        labels: [],
        totals: {
          likes: null,
          comments: null,
          shares: null,
          saves: null,
          views: null,
          impressions: null,
          reach: null,
          clicks: null,
          er: null
        },
        deltas: {},
        series: []
      },
      heatmap: {
        dayLabelsZh: ["\u5468\u4E00", "\u5468\u4E8C", "\u5468\u4E09", "\u5468\u56DB", "\u5468\u4E94", "\u5468\u516D", "\u5468\u65E5"],
        dayLabelsEn: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        maxScore: 0,
        recommended: [],
        cells: []
      },
      followerEvolution: {
        totalFollowers: null,
        platforms: [],
        timeline: []
      },
      platformBreakdown: [],
      topPosts: [],
      strategy: {
        cadence: { brackets: ["6-10/wk", "11+/wk"], series: [], optimal: [] },
        accumulation: {
          windows: [],
          milestones: {
            halfEngagementBy: null,
            eightyPercentWithin: null,
            halfLabelZh: "",
            eightyLabelZh: ""
          }
        }
      },
      emptyState: {
        code: "no_accounts",
        titleZh: "\u5C1A\u672A\u7ED1\u5B9A\u793E\u5A92\u8D26\u53F7",
        titleEn: "No social accounts connected",
        actionLabelZh: "\u524D\u5F80\u8D26\u53F7\u4E2D\u5FC3\u7ED1\u5B9A",
        action: "open_accounts"
      }
    },
    no_posts_in_range: {
      description: "\u5DF2\u7ED1\u5B9A\u8D26\u53F7\u4F46\u6240\u9009\u5468\u671F\u65E0\u53D1\u5E16\uFF1AKPI \u7528 0\uFF08\u975E null\uFF09\uFF0C\u70ED\u529B\u56FE 168 \u683C\u5168 level0",
      kpiOverrides: {
        engagementRate: { value: null },
        totalReach: { value: 0 },
        totalFollowers: { value: 635 },
        followerDiff: { value: 0 },
        postsCount: { value: 0 },
        postsHealth: "none",
        bestPost: null
      },
      emptyState: {
        code: "no_posts_in_range",
        titleZh: "\u6240\u9009\u5468\u671F\u5185\u6682\u65E0\u53D1\u5E03\u6570\u636E",
        titleEn: "No posts in the selected range",
        action: "retry"
      }
    },
    auth_expired: {
      emptyState: {
        code: "auth_expired",
        titleZh: "\u90E8\u5206\u8D26\u53F7\u6388\u6743\u5DF2\u8FC7\u671F",
        titleEn: "Some account authorizations expired",
        actionLabelZh: "\u524D\u5F80\u91CD\u65B0\u6388\u6743",
        action: "reauth",
        affectedAccountIds: ["acc_x_01"]
      }
    },
    network_error: {
      emptyState: {
        code: "network_error",
        titleZh: "\u540C\u6B65\u5931\u8D25\uFF0C\u5DF2\u4FDD\u7559\u4E0A\u6B21\u6210\u529F\u5FEB\u7167",
        titleEn: "Sync failed; last successful snapshot kept",
        actionLabelZh: "\u91CD\u8BD5",
        action: "retry"
      },
      syncStatusPatch: {
        lastError: "upstream 502 from /omnimux/analytics/overview"
      }
    }
  }
};

// src/client/api.js
var HOST_PATHS = Object.freeze({
  overview: "/omnimux/analytics/overview",
  insights: "/omnimux/analytics/insights",
  followers: "/omnimux/analytics/followers",
  posts: "/omnimux/analytics/posts",
  sync: "/omnimux/analytics/sync"
});
var MOCK_LATENCY_MS = 40;
var SYNC_LATENCY_MS = 800;
async function analyticsRequest(path, opts = {}) {
  const url = opts.query ? `${path}?${new URLSearchParams(opts.query).toString()}` : path;
  const response = await fetch(url, {
    method: opts.method ?? "GET",
    headers: opts.body === void 0 ? void 0 : { "Content-Type": "application/json" },
    body: opts.body === void 0 ? void 0 : JSON.stringify(opts.body)
  });
  let json = {};
  try {
    json = await response.json();
  } catch {
    json = { error: `HTTP ${String(response.status)}` };
  }
  return { ok: response.ok, status: response.status, body: json };
}
function authGuard(fn) {
  return (...args) => {
    const run = async () => {
      const result = await fn(...args);
      if (result.status !== 401) return result;
      const gate = typeof window !== "undefined" ? (
        /** @type {any} */
        window.__omnimuxAuth
      ) : void 0;
      if (!gate || typeof gate.ensureLogin !== "function") return result;
      return new Promise((resolve, reject) => {
        gate.ensureLogin({
          onSuccess: () => {
            fn(...args).then(resolve, reject);
          },
          onCancel: () => resolve(result)
        });
      });
    };
    return run();
  };
}
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function fetchDashboardMock(query = {}, opts = {}) {
  await wait(MOCK_LATENCY_MS);
  const variant = opts.variant;
  let raw = dashboard_fixture_default;
  if (variant && empty_states_default.variants?.[variant]) {
    const pack = empty_states_default.variants[variant];
    raw = pack.meta ? pack : { ...dashboard_fixture_default, ...pack, emptyState: pack.emptyState ?? dashboard_fixture_default.emptyState };
    if (pack.kpiOverrides) raw = { ...raw, kpi: { ...raw.kpi, ...pack.kpiOverrides } };
    if (pack.syncStatusPatch) raw = { ...raw, syncStatus: { ...raw.syncStatus, ...pack.syncStatusPatch } };
  }
  const materialized = materializeFixture(raw, opts.now ?? Date.now());
  return applyDashboardQuery(materialized, query);
}
function hostQuery(query) {
  const params = {
    platform: query.platform ?? "all",
    profileId: query.profileId ?? "all",
    timeRange: query.timeRange ?? "30d"
  };
  if (query.source && query.source !== "all") params.source = query.source;
  return params;
}
function emptyBlock(kind) {
  if (kind === "heatmap") {
    return {
      cells: Array.from({ length: 168 }, (_, i) => ({
        dayOfWeek: Math.floor(i / 24),
        hour: i % 24,
        score: 0,
        level: 0,
        postCount: 0
      })),
      maxScore: 0,
      recommended: [],
      dayLabelsZh: ["\u5468\u4E00", "\u5468\u4E8C", "\u5468\u4E09", "\u5468\u56DB", "\u5468\u4E94", "\u5468\u516D", "\u5468\u65E5"],
      dayLabelsEn: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    };
  }
  if (kind === "strategy") {
    return {
      cadence: { brackets: ["1-5/wk", "6-10/wk", "11+/wk"], series: [], optimal: [] },
      accumulation: { windows: [], milestones: {} }
    };
  }
  return { totalFollowers: null, platforms: [], timeline: [] };
}
async function fetchDashboardLive(query) {
  const params = hostQuery(query);
  const guarded = authGuard(analyticsRequest);
  const [overview, insights, followers, posts] = await Promise.all([
    guarded(HOST_PATHS.overview, { query: params }),
    guarded(HOST_PATHS.insights, { query: params }),
    guarded(HOST_PATHS.followers, { query: params }),
    guarded(HOST_PATHS.posts, { query: params })
  ]);
  if (!overview.ok) {
    const unauthorized = overview.status === 401;
    return applyDashboardQuery({
      meta: { boundAccountCount: 0, authorizedPlatforms: [], filterAccounts: [], reachApprox: false },
      syncStatus: {
        lastSyncedAt: null,
        nextSyncAt: null,
        syncIntervalMs: 36e5,
        syncing: false,
        lastError: String(overview.body?.error || `HTTP ${overview.status}`)
      },
      kpi: {
        engagementRate: { value: null },
        totalReach: { value: null },
        totalFollowers: { value: null },
        followerDiff: { value: null },
        postsCount: { value: null },
        postsHealth: "none",
        bestPost: null
      },
      basicCharts: { postsPerPlatform: { labels: [], platformIds: [], values: [], total: 0 }, postsOverTime: { grain: "week", total: 0, buckets: [] }, likesPerPlatform: { labels: [], platformIds: [], values: [], total: 0 }, likesOverTime: { grain: "week", total: 0, buckets: [] } },
      engagementOverTime: { grain: "week", buckets: [], labels: [], totals: {}, deltas: {}, series: [] },
      heatmap: emptyBlock("heatmap"),
      followerEvolution: emptyBlock("followers"),
      platformBreakdown: [],
      topPosts: [],
      strategy: emptyBlock("strategy"),
      emptyState: unauthorized ? { code: "unauthorized", action: "login" } : { code: "fetch_failed", action: "retry" }
    }, query);
  }
  const kpi = { ...overview.body?.kpi || {} };
  if (followers.ok && followers.body?.kpiPatch) Object.assign(kpi, followers.body.kpiPatch);
  const payload = {
    ...overview.body,
    kpi,
    heatmap: insights.ok ? insights.body?.heatmap ?? overview.body?.heatmap : emptyBlock("heatmap"),
    strategy: insights.ok ? insights.body?.strategy ?? overview.body?.strategy : emptyBlock("strategy"),
    followerEvolution: followers.ok ? followers.body?.followerEvolution ?? overview.body?.followerEvolution : emptyBlock("followers"),
    topPosts: posts.ok ? posts.body?.topPosts ?? overview.body?.topPosts : overview.body?.topPosts ?? []
  };
  const BLOCK_LABEL = {
    insights: "\u70ED\u529B\u56FE / \u7B56\u7565\u5206\u6790",
    followers: "\u7C89\u4E1D\u6F14\u8FDB",
    posts: "\u7206\u6B3E\u6392\u884C",
    overview: "\u6838\u5FC3\u6307\u6807"
  };
  const failed = [
    !insights.ok && { key: "insights", status: insights.status, error: insights.body?.error },
    !followers.ok && { key: "followers", status: followers.status, error: followers.body?.error },
    !posts.ok && { key: "posts", status: posts.status, error: posts.body?.error }
  ].filter(Boolean);
  if (failed.length) {
    const names = failed.map((row) => BLOCK_LABEL[row.key] || row.key).join("\u3001");
    const detail = `\u672A\u62C9\u5230\uFF1A${names}\uFF08${failed.map((row) => `${row.key} ${row.status}${row.error ? ` ${row.error}` : ""}`).join("\uFF1B")}\uFF09`;
    const unauthorized = failed.some((row) => row.status === 401);
    if (!payload.emptyState || payload.emptyState.code === "network_error") {
      payload.emptyState = {
        code: unauthorized ? "unauthorized" : "network_error",
        action: unauthorized ? "login" : "retry",
        detail: payload.emptyState?.detail ? `${payload.emptyState.detail}\uFF1B${detail}` : detail
      };
    }
    payload.syncStatus = {
      ...payload.syncStatus || {},
      lastError: detail
    };
  }
  return applyDashboardQuery(payload, query);
}
async function fetchDashboard(query = {}, opts = {}) {
  const useMock = resolveUseMock(opts.useMock);
  if (useMock) return fetchDashboardMock(query, opts);
  return fetchDashboardLive(query);
}
async function syncNow(query = {}, opts = {}) {
  const useMock = resolveUseMock(opts.useMock);
  if (useMock) {
    await wait(SYNC_LATENCY_MS);
    const payload = await fetchDashboardMock(query, { now: opts.now ?? Date.now() });
    const now = opts.now ?? Date.now();
    payload.syncStatus = {
      ...payload.syncStatus,
      lastSyncedAt: now,
      nextSyncAt: now + (payload.syncStatus?.syncIntervalMs ?? 36e5),
      syncing: false,
      lastError: null
    };
    return payload;
  }
  const result = await authGuard(analyticsRequest)(HOST_PATHS.sync, { method: "POST", body: query });
  if (!result.ok) {
    const error = new Error(String(result.body?.error || `HTTP ${result.status}`));
    error.status = result.status;
    throw error;
  }
  return fetchDashboardLive(query);
}

// src/client/store.js
var initialState = {
  query: { ...DEFAULT_QUERY },
  payload: null,
  snapshot: null,
  phase: "idle",
  syncing: false,
  lastError: null,
  theme: "system"
};
var listeners = /* @__PURE__ */ new Set();
var cache = /* @__PURE__ */ new Map();
var state = initialState;
var debounceTimer = null;
var fetchSeq = 0;
function emit() {
  for (const listener of listeners) listener();
}
function setState(patch) {
  state = { ...state, ...patch };
  emit();
}
function subscribe(listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
function getSnapshot() {
  return state;
}
function commitPayload(payload, query) {
  const applied = applyDashboardQuery(payload, query);
  const code = applied.emptyState && applied.emptyState.code;
  const empty = code === "no_accounts" || code === "unauthorized" || code === "fetch_failed";
  if (!empty) cache.set(cacheKey(query), { at: Date.now(), payload });
  setState({
    payload: applied,
    snapshot: empty ? state.snapshot : payload,
    phase: empty ? "empty" : "ready",
    lastError: payload.syncStatus?.lastError ?? null,
    syncing: Boolean(payload.syncStatus?.syncing)
  });
}
async function loadDashboard(query = state.query, opts = {}) {
  const nextQuery = { ...DEFAULT_QUERY, ...query };
  const key = cacheKey(nextQuery);
  const hit = cache.get(key);
  const now = opts.now ?? Date.now();
  if (!opts.force && hit && now - hit.at < CACHE_TTL_MS) {
    commitPayload(hit.payload, nextQuery);
    return hit.payload;
  }
  const seq = ++fetchSeq;
  if (!state.payload) setState({ phase: "loading", query: nextQuery });
  else setState({ query: nextQuery });
  try {
    const payload = await fetchDashboard(nextQuery, { now });
    if (seq !== fetchSeq) return payload;
    commitPayload(payload, nextQuery);
    return payload;
  } catch (caught) {
    if (seq !== fetchSeq) return state.payload;
    const message = caught instanceof Error ? caught.message : String(caught);
    const keep = state.snapshot;
    setState({
      phase: keep ? "ready" : "error",
      lastError: message,
      payload: keep ? applyDashboardQuery(keep, nextQuery) : state.payload
    });
    return state.payload;
  }
}
function setQuery(patch, opts = {}) {
  const nextQuery = { ...state.query, ...patch };
  setState({ query: nextQuery });
  if (state.snapshot) {
    setState({ payload: applyDashboardQuery(state.snapshot, nextQuery) });
  }
  if (!patchNeedsFetch(patch) && state.snapshot) return;
  const delay = opts.debounceMs ?? FILTER_DEBOUNCE_MS;
  if (debounceTimer) clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    debounceTimer = null;
    void loadDashboard(nextQuery);
  }, delay);
}
function refresh() {
  return loadDashboard(state.query, { force: true });
}
async function syncNow2() {
  const seq = ++fetchSeq;
  setState({ syncing: true, lastError: null });
  try {
    const payload = await syncNow(state.query);
    if (seq !== fetchSeq) return payload;
    commitPayload(payload, state.query);
    setState({ syncing: false });
    return payload;
  } catch (caught) {
    if (seq !== fetchSeq) return state.payload;
    const message = caught instanceof Error ? caught.message : String(caught);
    const keep = state.snapshot;
    setState({
      syncing: false,
      lastError: message,
      payload: keep ? applyDashboardQuery(keep, state.query) : state.payload,
      phase: keep ? "ready" : "error"
    });
    return state.payload;
  }
}
function setTheme(theme) {
  setState({ theme });
}
function useAnalyticsStore() {
  const snap = (0, import_react.useSyncExternalStore)(subscribe, getSnapshot, getSnapshot);
  const setQueryStable = (0, import_react.useCallback)((patch, opts) => setQuery(patch, opts), []);
  const refreshStable = (0, import_react.useCallback)(() => refresh(), []);
  const syncNowStable = (0, import_react.useCallback)(() => syncNow2(), []);
  const loadStable = (0, import_react.useCallback)((query, opts) => loadDashboard(query, opts), []);
  const setThemeStable = (0, import_react.useCallback)((theme) => setTheme(theme), []);
  return {
    ...snap,
    setQuery: setQueryStable,
    refresh: refreshStable,
    syncNow: syncNowStable,
    load: loadStable,
    setTheme: setThemeStable
  };
}

// src/client/format.js
function formatCount(n) {
  if (n == null || Number.isNaN(n)) return "-";
  const abs = Math.abs(n);
  const sign = n < 0 ? "-" : "";
  if (abs >= 1e6) return `${sign}${(abs / 1e6).toFixed(1)}M`;
  if (abs >= 1e3) return `${sign}${(abs / 1e3).toFixed(1)}K`;
  return `${n}`;
}
function formatEr(ratio) {
  if (ratio == null || Number.isNaN(ratio)) return "-";
  return `${(ratio * 100).toFixed(2)}%`;
}
function formatPercentPoints(percent) {
  if (percent == null || Number.isNaN(percent)) return "-";
  return `${percent}%`;
}
function formatAxisTick(n) {
  if (n == null || Number.isNaN(n)) return "-";
  if (Math.abs(n - Math.round(n)) < 1e-4) return formatCount(Math.round(n));
  if (Math.abs(n) >= 1e3) return formatCount(n);
  const fixed = Number(n.toFixed(1));
  if (Math.abs(fixed - Math.round(fixed)) < 1e-4) return formatCount(Math.round(fixed));
  return fixed.toString();
}
function formatPercentTick(n) {
  if (n == null || Number.isNaN(n)) return "-";
  return `${formatAxisTick(n)}%`;
}
function formatSignedCount(n) {
  if (n == null || Number.isNaN(n)) return "";
  if (n > 0) return `+${formatCount(n)}`;
  return formatCount(n);
}
function minutesBetween(from, now) {
  if (from == null || Number.isNaN(from)) return { kind: "justNow", minutes: 0 };
  const minutes = Math.round(Math.abs(now - from) / 6e4);
  if (minutes < 1) return { kind: "justNow", minutes: 0 };
  return { kind: "minutes", minutes };
}
function niceMax(n) {
  if (!Number.isFinite(n) || n <= 0) return 1;
  const pow = 10 ** Math.floor(Math.log10(n));
  const scaled = n / pow;
  const nice = scaled <= 1 ? 1 : scaled <= 2 ? 2 : scaled <= 5 ? 5 : 10;
  return nice * pow;
}

// src/client/csv.js
var PLATFORM_COLUMNS = [
  ["platformLabel", "\u5E73\u53F0"],
  ["posts", "\u53D1\u5E16\u6570"],
  ["likes", "\u70B9\u8D5E"],
  ["comments", "\u8BC4\u8BBA"],
  ["shares", "\u5206\u4EAB"],
  ["saves", "\u6536\u85CF"],
  ["clicks", "\u70B9\u51FB"],
  ["views", "\u64AD\u653E/\u6D4F\u89C8"],
  ["impressions", "\u66DD\u5149"],
  ["reach", "\u89E6\u8FBE"],
  ["er", "\u4E92\u52A8\u7387 (ER)"]
];
var POST_COLUMNS = [
  ["title", "\u5185\u5BB9\u6458\u8981"],
  ["publishedLabel", "\u53D1\u5E03\u65F6\u95F4"],
  ["platform", "\u5E73\u53F0"],
  ["likes", "\u70B9\u8D5E"],
  ["comments", "\u8BC4\u8BBA"],
  ["shares", "\u5206\u4EAB"],
  ["saves", "\u6536\u85CF"],
  ["clicks", "\u70B9\u51FB"],
  ["views", "\u64AD\u653E\u91CF"],
  ["follows", "\u5F15\u6D41\u6DA8\u7C89"],
  ["impressions", "\u66DD\u5149"],
  ["reach", "\u89E6\u8FBE"],
  ["er", "\u4E92\u52A8\u7387 (ER)"]
];
function csvEscape(value) {
  const text = String(value ?? "");
  if (/[",\n]/.test(text)) return `"${text.replaceAll('"', '""')}"`;
  return text;
}
function cellValue(row, key) {
  const value = row[key];
  if (key === "er") return formatEr(
    /** @type {number | null} */
    value
  );
  if (typeof value === "number") return formatCount(value);
  if (value == null) return "-";
  return String(value);
}
function tableToCsv(rows, columns) {
  const header = columns.map(([, label]) => csvEscape(label)).join(",");
  const body = rows.map((row) => columns.map(([key]) => csvEscape(cellValue(row, key))).join(","));
  return [header, ...body].join("\n");
}
function buildDashboardCsv(payload) {
  const platforms = Array.isArray(payload?.platformBreakdown) ? payload.platformBreakdown : [];
  const posts = Array.isArray(payload?.topPosts) ? payload.topPosts : [];
  const parts = [
    "# Platform Breakdown",
    tableToCsv(platforms, PLATFORM_COLUMNS),
    "",
    "# Top Posts",
    tableToCsv(posts, POST_COLUMNS)
  ];
  return `${parts.join("\n")}
`;
}
function downloadCsv(csv, filename) {
  if (typeof document === "undefined") return;
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.rel = "noopener";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

// src/client/components/StageHeader.jsx
var import_dsh_client_ui_primitives2 = require("@deepseek-ai/dsh-client-ui-primitives");

// ../../node_modules/.pnpm/dsh-ui-kit@file+..+..+personal+dsh-ui-kit_@deepseek-ai+dsh-client-ui-primitives@0.1.0-r_e00e670598d3e1b30755d8571e7350d4/node_modules/dsh-ui-kit/lib/index.js
var import_react2 = require("react");
var import_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
var import_jsx_runtime = require("react/jsx-runtime");
function cssClass(value, name2) {
  if (!value) throw new Error(`dsh-ui-kit: missing CSS module class "${name2}"`);
  return value;
}
function cx(...parts) {
  const out = [];
  for (const part of parts) {
    if (!part) continue;
    if (typeof part === "string" || typeof part === "number") {
      out.push(String(part));
      continue;
    }
    for (const [key, on] of Object.entries(part)) if (on) out.push(key);
  }
  return out.join(" ");
}
var injected = /* @__PURE__ */ new Set();
function injectCss(id, css) {
  if (typeof document === "undefined") return;
  if (injected.has(id)) return;
  injected.add(id);
  const style = document.createElement("style");
  style.setAttribute("data-dsh-ui-kit", id);
  style.textContent = css;
  document.head.appendChild(style);
}
injectCss("Button.module.css", '.dshUk-Button-button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  gap: 6px;\n  box-sizing: border-box;\n  margin: 0;\n  border: 1px solid transparent;\n  border-radius: 8px;\n  cursor: pointer;\n  font: inherit;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 18px;\n  letter-spacing: 0;\n  white-space: nowrap;\n  color: var(--dsw-alias-label-primary);\n  background: transparent;\n  padding: 0 12px;\n  height: 32px;\n  vertical-align: middle;\n  user-select: none;\n  transition:\n    background-color 120ms cubic-bezier(0.16, 1, 0.3, 1),\n    border-color 120ms cubic-bezier(0.16, 1, 0.3, 1),\n    color 120ms cubic-bezier(0.16, 1, 0.3, 1),\n    transform 120ms cubic-bezier(0.16, 1, 0.3, 1),\n    box-shadow 120ms cubic-bezier(0.16, 1, 0.3, 1),\n    opacity 120ms cubic-bezier(0.16, 1, 0.3, 1);\n}\n\n.dshUk-Button-button:focus {\n  outline: none;\n}\n\n.dshUk-Button-button:focus-visible {\n  outline: 2px solid var(--dsw-alias-brand-primary);\n  outline-offset: 2px;\n}\n\n.dshUk-Button-button:disabled,\n.dshUk-Button-button[aria-disabled="true"] {\n  cursor: not-allowed;\n  opacity: 0.4;\n}\n\n.dshUk-Button-button:active:not(:disabled):not([aria-disabled="true"]) {\n  transform: scale(0.96);\n}\n\n.dshUk-Button-sm {\n  height: 28px;\n  padding: 0 10px;\n  border-radius: 6px;\n  font-size: 12px;\n  line-height: 16px;\n}\n\n.dshUk-Button-xs {\n  height: 24px;\n  padding: 0 8px;\n  border-radius: 6px;\n  font-size: 12px;\n  line-height: 16px;\n  gap: 4px;\n}\n\n.dshUk-Button-iconOnly {\n  padding: 0;\n  width: 32px;\n}\n\n.dshUk-Button-iconOnly.dshUk-Button-sm {\n  width: 28px;\n}\n\n.dshUk-Button-iconOnly.dshUk-Button-xs {\n  width: 24px;\n}\n\n.dshUk-Button-primary {\n  background: var(--dsw-alias-button-primary-fill);\n  color: var(--dsw-alias-label-primary-foreground);\n}\n\n.dshUk-Button-primary:hover:not(:disabled):not([aria-disabled="true"]) {\n  background: var(--dsw-alias-button-primary-hover);\n}\n\n.dshUk-Button-secondary {\n  background: var(--dsw-alias-bg-layer-1);\n  border-color: var(--dsw-alias-border-l2);\n  color: var(--dsw-alias-label-primary);\n}\n\n.dshUk-Button-secondary:hover:not(:disabled):not([aria-disabled="true"]) {\n  background: var(--dsw-alias-interactive-bg-hover);\n  border-color: var(--dsw-alias-border-l3);\n}\n\n.dshUk-Button-ghost {\n  background: transparent;\n  color: var(--dsw-alias-label-primary);\n}\n\n.dshUk-Button-ghost:hover:not(:disabled):not([aria-disabled="true"]) {\n  background: var(--dsw-alias-interactive-bg-hover);\n}\n\n.dshUk-Button-ghost:active:not(:disabled):not([aria-disabled="true"]) {\n  background: var(--dsw-alias-interactive-bg-active);\n}\n\n.dshUk-Button-outline {\n  background: transparent;\n  border-color: var(--dsw-alias-border-l2);\n  color: var(--dsw-alias-label-primary);\n}\n\n.dshUk-Button-outline:hover:not(:disabled):not([aria-disabled="true"]) {\n  background: var(--dsw-alias-interactive-bg-hover);\n  border-color: var(--dsw-alias-border-l3);\n}\n\n.dshUk-Button-danger {\n  background: var(--dsw-alias-state-error-primary);\n  color: var(--dsw-alias-label-primary-foreground);\n}\n\n.dshUk-Button-danger:hover:not(:disabled):not([aria-disabled="true"]) {\n  background: var(--dsw-alias-state-error-secondary);\n}\n\n.dshUk-Button-ghost[aria-pressed="true"],\n.dshUk-Button-secondary[aria-pressed="true"] {\n  background: var(--dsw-alias-button-ghost-active-fill);\n  box-shadow: inset 0 0 0 1px var(--dsw-alias-button-ghost-active-border);\n}\n\n/* Outline already owns a real 1px border. Keep pressed fill/border as\n * declarations \u2014 do not share the ghost/secondary inset box-shadow or the\n * pressed state would double-stroke. */\n.dshUk-Button-outline[aria-pressed="true"] {\n  background: var(--dsw-alias-button-ghost-active-fill);\n  border-color: var(--dsw-alias-button-ghost-active-border);\n  color: var(--dsw-alias-label-primary);\n}\n\n/* Hover specificity defense: `.dshUk-Button-outline:hover` (and ghost/secondary hover)\n * would otherwise wash the pressed fill/border back to the idle hover tokens. */\n.dshUk-Button-ghost[aria-pressed="true"]:hover:not(:disabled):not([aria-disabled="true"]),\n.dshUk-Button-secondary[aria-pressed="true"]:hover:not(:disabled):not([aria-disabled="true"]),\n.dshUk-Button-outline[aria-pressed="true"]:hover:not(:disabled):not([aria-disabled="true"]) {\n  background: var(--dsw-alias-button-ghost-active-hover);\n}\n\n.dshUk-Button-outline[aria-pressed="true"]:hover:not(:disabled):not([aria-disabled="true"]) {\n  border-color: var(--dsw-alias-button-ghost-active-border);\n}\n\n.dshUk-Button-slot {\n  display: inline-flex;\n  width: 16px;\n  height: 16px;\n  align-items: center;\n  justify-content: center;\n  flex: none;\n}\n\n.dshUk-Button-xs .dshUk-Button-slot {\n  width: 14px;\n  height: 14px;\n}\n\n.dshUk-Button-spinner {\n  animation: dshUkSpin 0.7s linear infinite;\n}\n\n.dshUk-Button-label {\n  min-width: 0;\n}\n\n.dshUk-Button-loadingLabel {\n  opacity: 0.84;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .dshUk-Button-button {\n    transition: none;\n  }\n\n  .dshUk-Button-button:active:not(:disabled):not([aria-disabled="true"]) {\n    transform: none;\n  }\n\n  .dshUk-Button-spinner {\n    animation: none;\n  }\n}\n\n@keyframes dshUkSpin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n');
var Button_module_css_default = {
  "button": "dshUk-Button-button",
  "sm": "dshUk-Button-sm",
  "xs": "dshUk-Button-xs",
  "iconOnly": "dshUk-Button-iconOnly",
  "primary": "dshUk-Button-primary",
  "secondary": "dshUk-Button-secondary",
  "ghost": "dshUk-Button-ghost",
  "outline": "dshUk-Button-outline",
  "danger": "dshUk-Button-danger",
  "slot": "dshUk-Button-slot",
  "spinner": "dshUk-Button-spinner",
  "label": "dshUk-Button-label",
  "loadingLabel": "dshUk-Button-loadingLabel"
};
var VARIANT_CLASS = {
  primary: cssClass(Button_module_css_default.primary, "primary"),
  secondary: cssClass(Button_module_css_default.secondary, "secondary"),
  ghost: cssClass(Button_module_css_default.ghost, "ghost"),
  outline: cssClass(Button_module_css_default.outline, "outline"),
  danger: cssClass(Button_module_css_default.danger, "danger")
};
var SIZE_CLASS$1 = {
  default: void 0,
  sm: cssClass(Button_module_css_default.sm, "sm"),
  xs: cssClass(Button_module_css_default.xs, "xs")
};
var Button = (0, import_react2.forwardRef)(function Button2({ variant = "secondary", size = "default", loading = false, leadingIcon, trailingIcon, type = "button", className, disabled, children, ...rest }, ref) {
  const isDisabled = Boolean(disabled) || loading;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
    ...rest,
    ref,
    type,
    className: cx(Button_module_css_default.button, VARIANT_CLASS[variant], SIZE_CLASS$1[size], className),
    disabled: isDisabled,
    "aria-busy": loading || void 0,
    "aria-disabled": isDisabled || void 0,
    children: [
      loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        className: cx(Button_module_css_default.slot, Button_module_css_default.spinner),
        "aria-hidden": "true",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.IconLoadingOutline16, { size: size === "xs" ? 14 : 16 })
      }) : leadingIcon != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        className: Button_module_css_default.slot,
        "aria-hidden": "true",
        children: leadingIcon
      }) : null,
      children != null && children !== "" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        className: cx(Button_module_css_default.label, loading && Button_module_css_default.loadingLabel),
        children
      }) : null,
      !loading && trailingIcon != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        className: Button_module_css_default.slot,
        "aria-hidden": "true",
        children: trailingIcon
      }) : null
    ]
  });
});
var IconButton = (0, import_react2.forwardRef)(function IconButton2({ variant = "ghost", size = "default", loading = false, type = "button", className, disabled, children, title, tooltipSide = "bottom", "aria-label": ariaLabel, ...rest }, ref) {
  const isDisabled = Boolean(disabled) || loading;
  const tooltip = title ?? ariaLabel;
  const button = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
    ...rest,
    ref,
    type,
    className: cx(Button_module_css_default.button, VARIANT_CLASS[variant], SIZE_CLASS$1[size], Button_module_css_default.iconOnly, className),
    disabled: isDisabled,
    "aria-label": ariaLabel,
    "aria-busy": loading || void 0,
    "aria-disabled": isDisabled || void 0,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
      className: cx(Button_module_css_default.slot, loading && Button_module_css_default.spinner),
      "aria-hidden": "true",
      children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.IconLoadingOutline16, { size: size === "xs" ? 14 : 16 }) : children
    })
  });
  if (!tooltip) return button;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.Tooltip, {
    label: tooltip,
    side: tooltipSide,
    delayMs: 280,
    disabled: isDisabled,
    children: button
  });
});
injectCss("SearchField.module.css", '.dshUk-SearchField-root {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  box-sizing: border-box;\n  height: 32px;\n  min-width: 140px;\n  max-width: 260px;\n  width: 100%;\n  padding: 0 8px 0 10px;\n  border: 1px solid var(--dsw-alias-border-l2);\n  border-radius: 8px;\n  background: var(--dsw-alias-bg-layer-1);\n  color: var(--dsw-alias-label-primary);\n  transition:\n    border-color 120ms cubic-bezier(0.16, 1, 0.3, 1),\n    box-shadow 120ms cubic-bezier(0.16, 1, 0.3, 1),\n    background-color 120ms cubic-bezier(0.16, 1, 0.3, 1);\n}\n\n.dshUk-SearchField-stretch {\n  flex: 1 1 200px;\n}\n\n.dshUk-SearchField-root:hover:not(.dshUk-SearchField-disabled) {\n  border-color: var(--dsw-alias-border-l3);\n}\n\n.dshUk-SearchField-root:focus-within {\n  border-color: var(--dsw-alias-brand-primary);\n  box-shadow: 0 0 0 2px var(--dsw-alias-state-business-tertiary);\n}\n\n.dshUk-SearchField-disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n\n.dshUk-SearchField-icon {\n  display: inline-flex;\n  width: 16px;\n  height: 16px;\n  align-items: center;\n  justify-content: center;\n  flex: none;\n  color: var(--dsw-alias-label-tertiary);\n}\n\n.dshUk-SearchField-input {\n  flex: 1;\n  min-width: 0;\n  height: 100%;\n  border: none;\n  outline: none;\n  background: transparent;\n  font: inherit;\n  font-size: 13px;\n  line-height: 18px;\n  color: var(--dsw-alias-label-primary);\n}\n\n.dshUk-SearchField-input::placeholder {\n  color: var(--dsw-alias-label-dimmed);\n}\n\n.dshUk-SearchField-input:disabled {\n  cursor: not-allowed;\n}\n\n.dshUk-SearchField-input::-webkit-search-decoration,\n.dshUk-SearchField-input::-webkit-search-cancel-button,\n.dshUk-SearchField-input::-webkit-search-results-button,\n.dshUk-SearchField-input::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  appearance: none;\n}\n\n.dshUk-SearchField-input[type="search"] {\n  -webkit-appearance: none;\n  appearance: none;\n}\n\n.dshUk-SearchField-shortcut {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex: none;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 5px;\n  border: 1px solid var(--dsw-alias-border-l2);\n  border-radius: 4px;\n  background: var(--dsw-alias-bg-layer-2);\n  color: var(--dsw-alias-label-tertiary);\n  font-size: 11px;\n  line-height: 16px;\n  font-weight: 500;\n  letter-spacing: 0;\n}\n\n.dshUk-SearchField-clear {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex: none;\n  width: 20px;\n  height: 20px;\n  margin: 0;\n  padding: 0;\n  border: none;\n  border-radius: 6px;\n  background: transparent;\n  color: var(--dsw-alias-label-tertiary);\n  cursor: pointer;\n}\n\n.dshUk-SearchField-clear:hover:not(:disabled) {\n  background: var(--dsw-alias-interactive-bg-hover);\n  color: var(--dsw-alias-label-primary);\n}\n\n.dshUk-SearchField-clear:focus {\n  outline: none;\n}\n\n.dshUk-SearchField-clear:focus-visible {\n  outline: 2px solid var(--dsw-alias-brand-primary);\n  outline-offset: 1px;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .dshUk-SearchField-root {\n    transition: none;\n  }\n}\n');
var SearchField_module_css_default = {
  "root": "dshUk-SearchField-root",
  "stretch": "dshUk-SearchField-stretch",
  "disabled": "dshUk-SearchField-disabled",
  "icon": "dshUk-SearchField-icon",
  "input": "dshUk-SearchField-input",
  "shortcut": "dshUk-SearchField-shortcut",
  "clear": "dshUk-SearchField-clear"
};
function isTypingTarget(target) {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return true;
  return target.isContentEditable;
}
function matchesShortcut(event, shortcut) {
  const raw = shortcut.trim();
  if (!raw) return false;
  const lower = raw.toLowerCase();
  const wantsMeta = /⌘|cmd|meta/.test(lower);
  const wantsCtrl = /\bctrl\b|⌃/.test(lower);
  const wantsAlt = /\balt\b|⌥/.test(lower);
  const wantsShift = /\bshift\b|⇧/.test(lower);
  const key = raw.replace(/⌘|⌃|⌥|⇧|cmd|meta|ctrl|alt|shift|\+/gi, "").trim().toLowerCase();
  if (!key) return false;
  if (Boolean(event.metaKey) !== wantsMeta) return false;
  if (Boolean(event.ctrlKey) !== wantsCtrl) return false;
  if (Boolean(event.altKey) !== wantsAlt) return false;
  if (Boolean(event.shiftKey) !== wantsShift) return false;
  return event.key.toLowerCase() === key;
}
var SearchField = (0, import_react2.forwardRef)(function SearchField2({ value, defaultValue = "", onValueChange, onClear, debounceMs = 200, shortcut, stretch = false, clearLabel = "Clear", className, disabled, id, placeholder = "Search", ...rest }, ref) {
  const generatedId = (0, import_react2.useId)();
  const inputId = id ?? generatedId;
  const inputRef = (0, import_react2.useRef)(null);
  const timerRef = (0, import_react2.useRef)(null);
  const controlled = value !== void 0;
  const [inner, setInner] = (0, import_react2.useState)(defaultValue);
  const current = controlled ? value : inner;
  const immediate = controlled || debounceMs <= 0;
  (0, import_react2.useEffect)(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);
  (0, import_react2.useEffect)(() => {
    if (!shortcut || disabled) return;
    const onKey = (event) => {
      if (event.defaultPrevented) return;
      if (isTypingTarget(event.target)) return;
      if (!matchesShortcut(event, shortcut)) return;
      event.preventDefault();
      inputRef.current?.focus();
      inputRef.current?.select();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [shortcut, disabled]);
  function emit2(next) {
    if (immediate) {
      onValueChange?.(next);
      return;
    }
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      timerRef.current = null;
      onValueChange?.(next);
    }, debounceMs);
  }
  function apply2(next) {
    if (!controlled) setInner(next);
    emit2(next);
  }
  function onChange(event) {
    apply2(event.target.value);
  }
  function handleClear() {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (!controlled) setInner("");
    onValueChange?.("");
    onClear?.();
    inputRef.current?.focus();
  }
  (0, import_react2.useImperativeHandle)(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
    clear: handleClear
  }));
  function onKeyDown(event) {
    rest.onKeyDown?.(event);
    if (event.defaultPrevented) return;
    if (event.key === "Escape" && current) {
      event.preventDefault();
      handleClear();
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
    className: cx(SearchField_module_css_default.root, stretch && SearchField_module_css_default.stretch, disabled && SearchField_module_css_default.disabled, className),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        className: SearchField_module_css_default.icon,
        "aria-hidden": "true",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.IconSearchOutline16, { size: 16 })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
        ...rest,
        ref: inputRef,
        id: inputId,
        type: "search",
        className: SearchField_module_css_default.input,
        value: current,
        disabled,
        placeholder,
        autoComplete: "off",
        spellCheck: false,
        onChange,
        onKeyDown
      }),
      current ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
        type: "button",
        className: SearchField_module_css_default.clear,
        "aria-label": clearLabel,
        title: clearLabel,
        disabled,
        onClick: handleClear,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.IconCloseFill14, { size: 14 })
      }) : shortcut ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
        className: SearchField_module_css_default.shortcut,
        children: shortcut
      }) : null
    ]
  });
});
injectCss("InputField.module.css", ".dshUk-InputField-root {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 0;\n}\n\n.dshUk-InputField-label {\n  display: block;\n  font-size: 12px;\n  line-height: 16px;\n  font-weight: 500;\n  color: var(--dsw-alias-label-secondary);\n}\n\n.dshUk-InputField-required {\n  margin-left: 2px;\n  color: var(--dsw-alias-state-error-primary);\n}\n\n.dshUk-InputField-control {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  box-sizing: border-box;\n  height: 32px;\n  padding: 0 10px;\n  border: 1px solid var(--dsw-alias-border-l2);\n  border-radius: 8px;\n  background: var(--dsw-alias-bg-layer-1);\n  transition:\n    border-color 120ms cubic-bezier(0.16, 1, 0.3, 1),\n    box-shadow 120ms cubic-bezier(0.16, 1, 0.3, 1);\n}\n\n.dshUk-InputField-control:hover:not(.dshUk-InputField-disabled) {\n  border-color: var(--dsw-alias-border-l3);\n}\n\n.dshUk-InputField-control:focus-within {\n  border-color: var(--dsw-alias-brand-primary);\n  box-shadow: 0 0 0 2px var(--dsw-alias-state-business-tertiary);\n}\n\n.dshUk-InputField-invalid {\n  border-color: var(--dsw-alias-state-error-primary);\n}\n\n.dshUk-InputField-invalid:focus-within {\n  border-color: var(--dsw-alias-state-error-primary);\n  box-shadow: 0 0 0 2px var(--dsw-alias-interactive-bg-hover-danger);\n}\n\n.dshUk-InputField-disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n\n.dshUk-InputField-affix {\n  display: inline-flex;\n  align-items: center;\n  flex: none;\n  color: var(--dsw-alias-label-tertiary);\n  font-size: 12px;\n  line-height: 16px;\n}\n\n.dshUk-InputField-input {\n  flex: 1;\n  min-width: 0;\n  height: 100%;\n  border: none;\n  outline: none;\n  background: transparent;\n  font: inherit;\n  font-size: 13px;\n  line-height: 18px;\n  color: var(--dsw-alias-label-primary);\n}\n\n.dshUk-InputField-input::placeholder {\n  color: var(--dsw-alias-label-dimmed);\n}\n\n.dshUk-InputField-input:disabled {\n  cursor: not-allowed;\n}\n\n.dshUk-InputField-meta {\n  min-height: 16px;\n  font-size: 12px;\n  line-height: 16px;\n}\n\n.dshUk-InputField-hint {\n  color: var(--dsw-alias-label-tertiary);\n}\n\n.dshUk-InputField-error {\n  color: var(--dsw-alias-state-error-primary);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .dshUk-InputField-control {\n    transition: none;\n  }\n}\n");
var InputField_module_css_default = {
  "root": "dshUk-InputField-root",
  "label": "dshUk-InputField-label",
  "required": "dshUk-InputField-required",
  "control": "dshUk-InputField-control",
  "disabled": "dshUk-InputField-disabled",
  "invalid": "dshUk-InputField-invalid",
  "affix": "dshUk-InputField-affix",
  "input": "dshUk-InputField-input",
  "meta": "dshUk-InputField-meta",
  "hint": "dshUk-InputField-hint",
  "error": "dshUk-InputField-error"
};
var InputField = (0, import_react2.forwardRef)(function InputField2({ label, hint, error, prefix, suffix, className, disabled, id, required, ...rest }, ref) {
  const generatedId = (0, import_react2.useId)();
  const inputId = id ?? generatedId;
  const hintId = `${inputId}-hint`;
  const errorId = `${inputId}-error`;
  const invalid = Boolean(error);
  const describedBy = [
    rest["aria-describedby"],
    hint ? hintId : void 0,
    invalid ? errorId : void 0
  ].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
    className: cx(InputField_module_css_default.root, className),
    htmlFor: inputId,
    children: [
      label != null && label !== "" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
        className: InputField_module_css_default.label,
        children: [label, required ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
          className: InputField_module_css_default.required,
          "aria-hidden": "true",
          children: "*"
        }) : null]
      }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
        className: cx(InputField_module_css_default.control, invalid && InputField_module_css_default.invalid, disabled && InputField_module_css_default.disabled),
        children: [
          prefix != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: InputField_module_css_default.affix,
            children: prefix
          }) : null,
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
            ...rest,
            ref,
            id: inputId,
            className: InputField_module_css_default.input,
            disabled,
            required,
            "aria-invalid": invalid || void 0,
            "aria-describedby": describedBy
          }),
          suffix != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: InputField_module_css_default.affix,
            children: suffix
          }) : null
        ]
      }),
      invalid ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        className: cx(InputField_module_css_default.meta, InputField_module_css_default.error),
        id: errorId,
        role: "alert",
        children: error
      }) : hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        className: cx(InputField_module_css_default.meta, InputField_module_css_default.hint),
        id: hintId,
        children: hint
      }) : null
    ]
  });
});
injectCss("DropdownSelect.module.css", ".dshUk-DropdownSelect-anchor {\n  display: inline-flex;\n  flex-shrink: 0;\n  min-width: 0;\n}\n\n.dshUk-DropdownSelect-trigger {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  box-sizing: border-box;\n  width: 100%;\n  min-width: 112px;\n  height: 32px;\n  margin: 0;\n  padding: 0 10px;\n  border: 1px solid var(--dsw-alias-border-l2);\n  border-radius: 8px;\n  background: var(--dsw-alias-bg-layer-1);\n  color: var(--dsw-alias-label-primary);\n  cursor: pointer;\n  font: inherit;\n  font-size: 13px;\n  line-height: 18px;\n  text-align: left;\n  transition:\n    background-color 120ms cubic-bezier(0.16, 1, 0.3, 1),\n    border-color 120ms cubic-bezier(0.16, 1, 0.3, 1);\n}\n\n.dshUk-DropdownSelect-trigger:hover:not(:disabled) {\n  border-color: var(--dsw-alias-border-l3);\n  background: var(--dsw-alias-interactive-bg-hover);\n}\n\n.dshUk-DropdownSelect-trigger:focus {\n  outline: none;\n}\n\n.dshUk-DropdownSelect-trigger:focus-visible {\n  outline: 2px solid var(--dsw-alias-brand-primary);\n  outline-offset: 2px;\n}\n\n.dshUk-DropdownSelect-trigger:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n\n.dshUk-DropdownSelect-open {\n  border-color: var(--dsw-alias-brand-primary);\n}\n\n.dshUk-DropdownSelect-label {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.dshUk-DropdownSelect-placeholder {\n  color: var(--dsw-alias-label-dimmed);\n}\n\n.dshUk-DropdownSelect-chevron {\n  display: inline-flex;\n  width: 14px;\n  height: 14px;\n  align-items: center;\n  justify-content: center;\n  flex: none;\n  color: var(--dsw-alias-label-tertiary);\n  transition: transform 120ms cubic-bezier(0.16, 1, 0.3, 1);\n}\n\n.dshUk-DropdownSelect-chevronOpen {\n  transform: rotate(180deg);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .dshUk-DropdownSelect-trigger,\n  .dshUk-DropdownSelect-chevron {\n    transition: none;\n  }\n}\n");
var DropdownSelect_module_css_default = {
  "anchor": "dshUk-DropdownSelect-anchor",
  "trigger": "dshUk-DropdownSelect-trigger",
  "open": "dshUk-DropdownSelect-open",
  "label": "dshUk-DropdownSelect-label",
  "placeholder": "dshUk-DropdownSelect-placeholder",
  "chevron": "dshUk-DropdownSelect-chevron",
  "chevronOpen": "dshUk-DropdownSelect-chevronOpen"
};
function DropdownSelect({ value, options, onChange, placeholder = "Select", disabled = false, className, "aria-label": ariaLabel, id, align = "start" }) {
  const [open, setOpen] = (0, import_react2.useState)(false);
  const generatedId = (0, import_react2.useId)();
  const triggerId = id ?? generatedId;
  const selected = options.find((option) => option.value === value);
  const items = (0, import_react2.useMemo)(() => options.map((option) => {
    const item = {
      id: option.value,
      label: option.label
    };
    if (option.disabled === true) item.disabled = true;
    if (option.icon !== void 0) item.icon = option.icon;
    if (option.danger === true) item.danger = true;
    return item;
  }), [options]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.Menu, {
    open: open && !disabled,
    portal: true,
    compact: true,
    align,
    selectedId: value,
    items,
    onSelect: (next) => {
      onChange(next);
      setOpen(false);
    },
    onClose: () => {
      setOpen(false);
    },
    className: cx(DropdownSelect_module_css_default.anchor, className),
    anchor: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
      type: "button",
      id: triggerId,
      className: cx(DropdownSelect_module_css_default.trigger, open && DropdownSelect_module_css_default.open),
      "aria-label": ariaLabel,
      "aria-haspopup": "listbox",
      "aria-expanded": open,
      disabled,
      onClick: () => {
        if (!disabled) setOpen((prev) => !prev);
      },
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        className: cx(DropdownSelect_module_css_default.label, !selected && DropdownSelect_module_css_default.placeholder),
        children: selected ? selected.label : placeholder
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        className: cx(DropdownSelect_module_css_default.chevron, open && DropdownSelect_module_css_default.chevronOpen),
        "aria-hidden": "true",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.IconChevronDownOutline14, { size: 14 })
      })]
    })
  });
}
injectCss("Toolbar.module.css", ".dshUk-Toolbar-bar {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  gap: 8px;\n  box-sizing: border-box;\n  height: 48px;\n  min-height: 44px;\n  max-height: 48px;\n  padding: 0 12px;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.dshUk-Toolbar-compact {\n  height: 44px;\n  min-height: 44px;\n}\n\n.dshUk-Toolbar-left,\n.dshUk-Toolbar-right {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n}\n\n.dshUk-Toolbar-left {\n  flex: 1 1 auto;\n  overflow: hidden;\n}\n\n.dshUk-Toolbar-right {\n  flex: 0 0 auto;\n  margin-left: auto;\n}\n\n.dshUk-Toolbar-right > * {\n  flex-shrink: 0;\n}\n\n.dshUk-Toolbar-filters {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  gap: 8px;\n  flex: 0 0 auto;\n}\n\n.dshUk-Toolbar-filters > * {\n  flex-shrink: 0;\n}\n");
var Toolbar_module_css_default = {
  "bar": "dshUk-Toolbar-bar",
  "compact": "dshUk-Toolbar-compact",
  "left": "dshUk-Toolbar-left",
  "right": "dshUk-Toolbar-right",
  "filters": "dshUk-Toolbar-filters"
};
function Toolbar({ left, right, compact = false, className, children, ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    ...rest,
    role: "toolbar",
    className: cx(Toolbar_module_css_default.bar, compact && Toolbar_module_css_default.compact, className),
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      className: Toolbar_module_css_default.left,
      children: left ?? children
    }), right != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      className: Toolbar_module_css_default.right,
      children: right
    }) : null]
  });
}
function FilterBar({ left, search, filters, actions, right, tools, className, compact, ...rest }) {
  let leftContent;
  let rightContent;
  if (left != null) {
    leftContent = left;
    rightContent = right ?? (search != null || tools != null || actions != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      search,
      tools,
      actions
    ] }) : null);
  } else if (filters != null && search != null && tools == null && actions != null && right == null) {
    leftContent = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [search, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      className: Toolbar_module_css_default.filters,
      children: filters
    })] });
    rightContent = actions;
  } else {
    leftContent = filters != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      className: Toolbar_module_css_default.filters,
      children: filters
    }) : null;
    rightContent = right ?? (search != null || tools != null || actions != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      search,
      tools,
      actions
    ] }) : null);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toolbar, {
    ...rest,
    left: leftContent,
    right: rightContent,
    ...compact !== void 0 ? { compact } : {},
    ...className !== void 0 ? { className } : {}
  });
}
injectCss("Dialog.module.css", ".dshUk-Dialog-dialog {\n  width: min(480px, 100%);\n  max-height: min(80vh, 720px);\n  border-radius: 16px;\n}\n\n.dshUk-Dialog-sm {\n  width: min(380px, 100%);\n}\n\n.dshUk-Dialog-lg {\n  width: min(640px, 100%);\n}\n\n.dshUk-Dialog-body {\n  overflow: auto;\n  max-height: min(56vh, 480px);\n}\n\n.dshUk-Dialog-footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 8px;\n  width: 100%;\n}\n\n.dshUk-Dialog-message {\n  margin: 0;\n  font-size: 14px;\n  line-height: 22px;\n  color: var(--dsw-alias-label-primary);\n}\n");
var Dialog_module_css_default = {
  "dialog": "dshUk-Dialog-dialog",
  "sm": "dshUk-Dialog-sm",
  "lg": "dshUk-Dialog-lg",
  "body": "dshUk-Dialog-body",
  "footer": "dshUk-Dialog-footer",
  "message": "dshUk-Dialog-message"
};
var SIZE_CLASS = {
  sm: cssClass(Dialog_module_css_default.sm, "sm"),
  md: void 0,
  lg: cssClass(Dialog_module_css_default.lg, "lg")
};

// src/client/components/StageHeader.jsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function StageHeader({ t, theme, refreshing, onRefresh, onToggleTheme, onExport, onClose }) {
  const dark = theme === "dark";
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("header", { className: "omnimux-analytics-stage-header", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-analytics-stage-heading", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h1", { className: "omnimux-analytics-stage-title", children: t("title") }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "omnimux-analytics-stage-subtitle", children: t("subtitle") })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-analytics-stage-header-actions", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        IconButton,
        {
          "aria-label": t("refresh"),
          title: refreshing ? t("refreshing") : t("refresh"),
          variant: "ghost",
          disabled: refreshing,
          onClick: onRefresh,
          children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.IconRefreshOutline16, {})
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        IconButton,
        {
          "aria-label": t("theme.toggle"),
          title: t("theme.toggle"),
          variant: "ghost",
          "aria-pressed": dark,
          onClick: onToggleTheme,
          children: dark ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.IconLightOutline16, {}) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.IconDarkOutline16, {})
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        IconButton,
        {
          "aria-label": t("export"),
          title: t("export"),
          variant: "ghost",
          onClick: onExport,
          children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.IconDownloadOutline16, {})
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        IconButton,
        {
          "aria-label": t("close"),
          variant: "ghost",
          onClick: onClose,
          children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.IconCloseOutline16, {})
        }
      )
    ] })
  ] });
}

// src/client/components/ActionNavRow.jsx
var import_dsh_client_ui_primitives3 = require("@deepseek-ai/dsh-client-ui-primitives");
var import_jsx_runtime3 = require("react/jsx-runtime");
function formatMinutes(t, info, ago) {
  if (info.kind === "justNow") return t(ago ? "sync.justNow" : "sync.soon");
  const template = t(ago ? "sync.minutesAgo" : "sync.minutesLater");
  return template.replace("{n}", String(info.minutes));
}
function ActionNavRow({ t, tab, syncStatus, syncing, now = Date.now(), onTabChange, onSync }) {
  const last = minutesBetween(syncStatus?.lastSyncedAt, now);
  const next = minutesBetween(syncStatus?.nextSyncAt, now);
  const caption = syncing ? t("sync.pulling") : syncStatus?.lastSyncedAt ? `${t("sync.last")}\uFF1A${formatMinutes(t, last, true)} \xB7 ${t("sync.next")}\uFF1A${formatMinutes(t, next, false)}` : t("loading");
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "omnimux-analytics-stage-action-row", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "omnimux-analytics-tabs", role: "tablist", "aria-label": t("tab.list"), children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        Button,
        {
          type: "button",
          role: "tab",
          "aria-selected": tab === "posting",
          variant: tab === "posting" ? "secondary" : "ghost",
          size: "sm",
          onClick: () => onTabChange("posting"),
          children: t("tab.posting")
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        Button,
        {
          type: "button",
          role: "tab",
          "aria-selected": tab === "inbox",
          variant: tab === "inbox" ? "secondary" : "ghost",
          size: "sm",
          onClick: () => onTabChange("inbox"),
          children: t("tab.inbox")
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "omnimux-analytics-sync", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "omnimux-analytics-sync-caption", children: caption }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        Button,
        {
          type: "button",
          variant: "outline",
          size: "sm",
          loading: syncing,
          disabled: syncing,
          leadingIcon: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_dsh_client_ui_primitives3.IconRefreshOutline14, {}),
          onClick: onSync,
          children: syncing ? t("sync.syncing") : t("sync.now")
        }
      )
    ] })
  ] });
}

// src/client/constants.js
var PLATFORMS = (
  /** @type {const} */
  ["tiktok", "twitter", "youtube", "instagram"]
);
var PLATFORM_LABEL = {
  tiktok: "TikTok",
  twitter: "X",
  youtube: "YouTube",
  instagram: "Instagram"
};
var PROFILE_OPTIONS = [
  { value: "all", labelKey: "filter.all" },
  { value: "main", labelKey: "filter.account.main" },
  { value: "sub", labelKey: "filter.account.sub" }
];
var SOURCE_OPTIONS = [
  { value: "all", labelKey: "filter.all" },
  { value: "manual", labelKey: "filter.source.manual" },
  { value: "omnimux", labelKey: "filter.source.omnimux" }
];
var RANGE_OPTIONS = [
  { value: "7d", labelKey: "filter.range.7d" },
  { value: "30d", labelKey: "filter.range.30d" },
  { value: "90d", labelKey: "filter.range.90d" }
];
var PLATFORM_TABLE_COLUMNS = [
  { key: "platformLabel", labelKey: "table.platform", kind: "text" },
  { key: "posts", labelKey: "table.posts", kind: "count" },
  { key: "likes", labelKey: "table.likes", kind: "count" },
  { key: "comments", labelKey: "table.comments", kind: "count" },
  { key: "shares", labelKey: "table.shares", kind: "count" },
  { key: "saves", labelKey: "table.saves", kind: "count" },
  { key: "clicks", labelKey: "table.clicks", kind: "count" },
  { key: "views", labelKey: "table.views", kind: "count" },
  { key: "impressions", labelKey: "table.impressions", kind: "count" },
  { key: "reach", labelKey: "table.reach", kind: "count" },
  { key: "er", labelKey: "table.er", kind: "er" }
];
var POST_TABLE_COLUMNS = [
  { key: "title", labelKey: "table.content", kind: "post", sortable: false },
  { key: "likes", labelKey: "table.likes", kind: "count" },
  { key: "comments", labelKey: "table.comments", kind: "count" },
  { key: "shares", labelKey: "table.shares", kind: "count" },
  { key: "saves", labelKey: "table.saves", kind: "count" },
  { key: "clicks", labelKey: "table.clicks", kind: "count" },
  { key: "views", labelKey: "table.play", kind: "count" },
  { key: "follows", labelKey: "table.follows", kind: "count" },
  { key: "impressions", labelKey: "table.impressions", kind: "count" },
  { key: "reach", labelKey: "table.reach", kind: "count" },
  { key: "er", labelKey: "table.er", kind: "er" }
];
var CADENCE_BRACKET_LABEL = {
  "1-5/wk": "1-5\u7BC7/\u5468",
  "6-10/wk": "6-10\u7BC7/\u5468",
  "11+/wk": "11+\u7BC7/\u5468"
};

// src/client/components/FilterBar.jsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function FilterBar2({ t, query, onChange, disabled, accounts }) {
  const platformOptions = [
    { value: "all", label: t("filter.all") },
    ...PLATFORMS.map((id) => ({ value: id, label: t(`platform.${id}`) }))
  ];
  const hasLive = Array.isArray(accounts);
  const liveAccounts = hasLive ? accounts : [];
  const profileOptions = [
    { value: "all", label: t("filter.all") },
    ...hasLive ? liveAccounts.map((row) => ({
      value: row.id,
      label: row.expired ? `${row.label} \u26A0` : row.label
    })) : PROFILE_OPTIONS.filter((opt) => opt.value !== "all").map((opt) => ({
      value: opt.value,
      label: t(opt.labelKey)
    }))
  ];
  if (query.profileId && query.profileId !== "all" && !profileOptions.some((opt) => opt.value === query.profileId)) {
    profileOptions.push({ value: query.profileId, label: query.profileId });
  }
  const sourceOptions = SOURCE_OPTIONS.map((opt) => ({ value: opt.value, label: t(opt.labelKey) }));
  const rangeOptions = RANGE_OPTIONS.map((opt) => ({ value: opt.value, label: t(opt.labelKey) }));
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "omnimux-analytics-stage-filter", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    FilterBar,
    {
      className: "omnimux-analytics-filterbar",
      filters: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          DropdownSelect,
          {
            value: query.platform === "all" ? void 0 : query.platform,
            placeholder: t("filter.platform"),
            options: platformOptions,
            "aria-label": t("filter.platform"),
            disabled,
            onChange: (platform) => onChange({ platform })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          DropdownSelect,
          {
            value: query.profileId === "all" ? void 0 : query.profileId,
            placeholder: t("filter.account"),
            options: profileOptions,
            "aria-label": t("filter.account"),
            disabled,
            onChange: (profileId) => onChange({ profileId })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          DropdownSelect,
          {
            value: query.source === "all" ? void 0 : query.source,
            placeholder: t("filter.source"),
            options: sourceOptions,
            "aria-label": t("filter.source"),
            disabled,
            onChange: (source) => onChange({ source })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          DropdownSelect,
          {
            value: query.timeRange,
            placeholder: t("filter.timeRange"),
            options: rangeOptions,
            "aria-label": t("filter.timeRange"),
            disabled,
            onChange: (timeRange) => onChange({ timeRange })
          }
        )
      ] }),
      search: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "omnimux-analytics-search", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        SearchField,
        {
          value: query.searchQuery,
          placeholder: t("filter.search"),
          "aria-label": t("filter.search"),
          disabled,
          debounceMs: 0,
          stretch: true,
          onValueChange: (searchQuery) => onChange({ searchQuery })
        }
      ) })
    }
  ) });
}

// src/client/components/KpiGrid.jsx
var import_dsh_client_ui_primitives4 = require("@deepseek-ai/dsh-client-ui-primitives");
var import_jsx_runtime5 = require("react/jsx-runtime");
function Trend({ up, children }) {
  if (!children) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: up ? "omnimux-analytics-kpi-badge is-up" : "omnimux-analytics-kpi-badge", children });
}
function BestPostCard({ t, post }) {
  if (!post) {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("article", { className: "omnimux-analytics-kpi", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h3", { className: "omnimux-analytics-kpi-title", children: t("kpi.bestPost") }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "omnimux-analytics-kpi-value", children: "-" })
    ] });
  }
  const href = post.detailHref || "#omnimux-analytics-top-posts";
  const isInternal = href.startsWith("#");
  const handleClick = (e) => {
    if (isInternal) {
      e.preventDefault();
      const targetId = href.replace(/^#/, "");
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("article", { className: "omnimux-analytics-kpi omnimux-analytics-kpi-best", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h3", { className: "omnimux-analytics-kpi-title", children: t("kpi.bestPost") }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "omnimux-analytics-best", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "omnimux-analytics-best-cover", "aria-hidden": "true", children: post.coverUrl ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("img", { src: post.coverUrl, alt: "" }) : post.coverLabel || t("kpi.coverFallback") }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "omnimux-analytics-best-copy", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { className: "omnimux-analytics-best-views", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("strong", { children: formatCount(post.views) }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: t("kpi.plays") })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
          "a",
          {
            className: "omnimux-analytics-best-link",
            href,
            target: isInternal ? void 0 : "_blank",
            rel: isInternal ? void 0 : "noreferrer",
            onClick: handleClick,
            children: [
              t("kpi.viewDetail"),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_dsh_client_ui_primitives4.IconRightUpOutline14, {})
            ]
          }
        )
      ] })
    ] })
  ] });
}
function KpiGrid({ t, kpi, timeRange = "30d" }) {
  const followers = kpi?.totalFollowers?.value;
  const diff = kpi?.followerDiff?.value;
  const posts = kpi?.postsCount?.value;
  const health = kpi?.postsHealth || "none";
  const rangeLabel = t(`filter.range.${timeRange}`);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("section", { className: "omnimux-analytics-kpi-grid", "aria-label": t("kpi.group"), children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("article", { className: "omnimux-analytics-kpi", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h3", { className: "omnimux-analytics-kpi-title", children: t("kpi.er") }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "omnimux-analytics-kpi-value", children: formatEr(kpi?.engagementRate?.value) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("article", { className: "omnimux-analytics-kpi", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h3", { className: "omnimux-analytics-kpi-title", children: t("kpi.reach") }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "omnimux-analytics-kpi-value", children: formatCount(kpi?.totalReach?.value) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("article", { className: "omnimux-analytics-kpi", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h3", { className: "omnimux-analytics-kpi-title", children: t("kpi.followers") }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "omnimux-analytics-kpi-row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "omnimux-analytics-kpi-value", children: formatCount(followers) }),
        typeof diff === "number" && diff > 0 ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Trend, { up: true, children: t("kpi.followersDelta").replace("{range}", rangeLabel).replace("{n}", formatSignedCount(diff)) }) : null
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("article", { className: "omnimux-analytics-kpi", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h3", { className: "omnimux-analytics-kpi-title", children: t("kpi.posts") }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "omnimux-analytics-kpi-row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "omnimux-analytics-kpi-value", children: formatCount(posts) }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Trend, { up: health === "normal", children: t(`kpi.health.${health}`) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(BestPostCard, { t, post: kpi?.bestPost })
  ] });
}

// src/client/charts-math.js
var CHART_PAD = Object.freeze({ top: 12, right: 18, bottom: 28, left: 38 });
var DUAL_PAD = Object.freeze({ top: 16, right: 44, bottom: 28, left: 38 });
function numericMax(values) {
  let max = 0;
  for (const value of values) {
    if (typeof value === "number" && Number.isFinite(value) && value > max) max = value;
  }
  return max;
}
function plotBox(width, height, pad) {
  const innerWidth = Math.max(1, width - pad.left - pad.right);
  const innerHeight = Math.max(1, height - pad.top - pad.bottom);
  return {
    x: pad.left,
    y: pad.top,
    width: innerWidth,
    height: innerHeight,
    right: pad.left + innerWidth,
    bottom: pad.top + innerHeight
  };
}
function barLayout(values, width, height, opts = {}) {
  const pad = opts.pad ?? CHART_PAD;
  const box = plotBox(width, height, pad);
  const max = niceMax(numericMax(values));
  const count = Math.max(1, values.length);
  const gap = opts.gap ?? 8;
  const slot = box.width / count;
  const barWidth = Math.max(4, Math.min(28, slot - gap));
  const bars = values.map((value, index) => {
    const n = typeof value === "number" && Number.isFinite(value) ? Math.max(0, value) : 0;
    const h = max === 0 ? 0 : n / max * box.height;
    const x = box.x + slot * index + (slot - barWidth) / 2;
    const y = box.bottom - h;
    return { x, y, width: barWidth, height: h, value: value ?? null, cx: x + barWidth / 2 };
  });
  return { box, max, bars };
}
function lineLayout(values, width, height, opts = {}) {
  const pad = opts.pad ?? CHART_PAD;
  const box = plotBox(width, height, pad);
  const max = opts.max ?? niceMax(numericMax(values));
  const count = Math.max(1, values.length);
  const step = count === 1 ? 0 : box.width / (count - 1);
  const points = values.map((value, index) => {
    const n = typeof value === "number" && Number.isFinite(value) ? value : null;
    const x = box.x + step * index;
    const y = n == null ? null : box.bottom - (max === 0 ? 0 : Math.max(0, n) / max * box.height);
    return { x, y, value: n };
  });
  return { box, max, points, step };
}
function polylinePath(points) {
  let d = "";
  let drawing = false;
  for (const point of points) {
    if (point.y == null) {
      drawing = false;
      continue;
    }
    d += drawing ? ` L ${point.x.toFixed(2)} ${point.y.toFixed(2)}` : `M ${point.x.toFixed(2)} ${point.y.toFixed(2)}`;
    drawing = true;
  }
  return d.trim();
}
function areaPath(points, baselineY) {
  const line = polylinePath(points);
  if (!line) return "";
  const first = points.find((p) => p.y != null);
  const last = [...points].reverse().find((p) => p.y != null);
  if (!first || !last) return "";
  return `${line} L ${last.x.toFixed(2)} ${baselineY.toFixed(2)} L ${first.x.toFixed(2)} ${baselineY.toFixed(2)} Z`;
}
function ticks(max, count = 5) {
  if (!Number.isFinite(max) || max <= 0) return [0];
  if (max === 5 && count === 5) return [0, 1, 2, 3, 4, 5];
  const steps = Math.max(1, count - 1);
  return Array.from({ length: count }, (_, i) => {
    const raw = max * i / steps;
    return Math.round(raw * 1e6) / 1e6;
  });
}
function chartPointsForMetric(key, points) {
  if (key !== "er") return points;
  return points.map((value) => value == null ? null : value * 100);
}

// src/client/components/SvgChart.jsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function AxisLabels({ box, max, labels, labelXs, formatTick = formatAxisTick }) {
  const yTicks = ticks(max, 5);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
    yTicks.map((tick, index) => {
      const y = box.bottom - (max === 0 ? 0 : tick / max * box.height);
      return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("g", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("line", { className: "omnimux-analytics-gridline", x1: box.x, x2: box.right, y1: y, y2: y }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("text", { className: "omnimux-analytics-tick omnimux-analytics-tick-y", x: box.x - 6, y: y + 3, children: formatTick(tick) })
      ] }, `y-${index}-${tick}`);
    }),
    labels.map((label, index) => {
      const x = labelXs?.[index] ?? (labels.length === 1 ? box.x + box.width / 2 : box.x + box.width / Math.max(1, labels.length - 1) * index);
      return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("text", { className: "omnimux-analytics-tick omnimux-analytics-tick-x", x, y: box.bottom + 16, children: label }, `x-${label}-${index}`);
    })
  ] });
}
function BarChart({ labels, values, width = 480, height = 200 }) {
  const { box, max, bars } = barLayout(values, width, height);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("svg", { viewBox: `0 0 ${width} ${height}`, className: "omnimux-analytics-svg", role: "img", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(AxisLabels, { box, max, labels, labelXs: bars.map((bar) => bar.cx) }),
    bars.map((bar, index) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "rect",
      {
        className: "omnimux-analytics-bar",
        x: bar.x,
        y: bar.y,
        width: bar.width,
        height: bar.height,
        rx: "3",
        children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("title", { children: `${labels[index] ?? ""}: ${formatCount(bar.value)}` })
      },
      `${labels[index] ?? index}`
    ))
  ] });
}
function LineChart({
  labels,
  series,
  width = 480,
  height = 220,
  dual = false,
  yFormat,
  y1Format,
  fillFirst = false
}) {
  const pad = dual ? DUAL_PAD : CHART_PAD;
  const leftSeries = series.filter((s) => (s.yAxis ?? 0) === 0 && s.visible !== false);
  const rightSeries = series.filter((s) => s.yAxis === 1 && s.visible !== false);
  const leftValues = leftSeries.flatMap((s) => s.points);
  const rightValues = rightSeries.flatMap((s) => s.points);
  const left = lineLayout(leftValues.length ? leftValues : [0], width, height, { pad });
  const right = lineLayout(rightValues.length ? rightValues : [0], width, height, { pad });
  const leftMax = leftSeries.length ? left.max : 1;
  const rightMax = rightSeries.length ? right.max : 1;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("svg", { viewBox: `0 0 ${width} ${height}`, className: "omnimux-analytics-svg", role: "img", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(AxisLabels, { box: left.box, max: leftMax, labels, formatTick: yFormat ?? formatAxisTick }),
    dual && rightSeries.length > 0 ? ticks(rightMax, 5).map((tick) => {
      const y = right.box.bottom - (rightMax === 0 ? 0 : tick / rightMax * right.box.height);
      return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("text", { className: "omnimux-analytics-tick omnimux-analytics-tick-y1", x: right.box.right + 6, y: y + 3, children: (y1Format ?? formatCount)(tick) }, `y1-${tick}`);
    }) : null,
    series.map((item) => {
      if (item.visible === false) return null;
      const axis = item.yAxis === 1 ? { max: rightMax, box: right.box } : { max: leftMax, box: left.box };
      const laid = lineLayout(item.points, width, height, { pad, max: axis.max });
      const d = polylinePath(laid.points);
      if (!d) return null;
      return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("g", { className: "omnimux-analytics-series", style: { "--series-color": item.color }, children: [
        fillFirst && item === series[0] ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { className: "omnimux-analytics-area", d: areaPath(laid.points, laid.box.bottom) }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "path",
          {
            className: item.dashed ? "omnimux-analytics-line omnimux-analytics-line-dash" : "omnimux-analytics-line",
            d
          }
        ),
        laid.points.map((point, index) => point.y == null ? null : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("circle", { className: "omnimux-analytics-dot", cx: point.x, cy: point.y, r: "2.5", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("title", { children: `${item.label}: ${labels[index]} ${item.format ? item.format(point.value) : formatCount(point.value)}` }) }, `${item.key}-${index}`))
      ] }, item.key);
    })
  ] });
}
function ChartPanel({ title, subtitle, meta, legend, footer, children, wide }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("section", { className: wide ? "omnimux-analytics-panel omnimux-analytics-panel-wide" : "omnimux-analytics-panel", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("header", { className: "omnimux-analytics-panel-header", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "omnimux-analytics-panel-heading", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { className: "omnimux-analytics-panel-title", children: title }),
        subtitle ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "omnimux-analytics-panel-subtitle", children: subtitle }) : null
      ] }),
      meta ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "omnimux-analytics-panel-meta", children: meta }) : null,
      legend
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "omnimux-analytics-chartbox", children }),
    footer
  ] });
}

// src/client/components/BasicCharts.jsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function totalLabel(t, total, unitKey) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("strong", { children: formatCount(total) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: t(unitKey) })
  ] });
}
function BasicCharts({ t, basicCharts, timeRange = "30d" }) {
  const postsPlat = basicCharts?.postsPerPlatform ?? { labels: [], values: [], total: null };
  const postsTime = basicCharts?.postsOverTime ?? { buckets: [], total: null };
  const likesPlat = basicCharts?.likesPerPlatform ?? { labels: [], values: [], total: null };
  const likesTime = basicCharts?.likesOverTime ?? { buckets: [], total: null };
  const rangeLabel = t(`filter.range.${timeRange}`);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("section", { className: "omnimux-analytics-grid-2", "aria-label": t("charts.basic"), children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      ChartPanel,
      {
        title: t("charts.postsPlatform"),
        subtitle: t("charts.postsPlatformSub"),
        meta: totalLabel(t, postsPlat.total, "charts.postsUnit"),
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(BarChart, { labels: postsPlat.labels, values: postsPlat.values })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      ChartPanel,
      {
        title: t("charts.postsTime"),
        subtitle: t("charts.weekSlice").replace("{range}", rangeLabel),
        meta: totalLabel(t, postsTime.total, "charts.postsUnit"),
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          BarChart,
          {
            labels: postsTime.buckets.map((b) => b.label),
            values: postsTime.buckets.map((b) => b.value)
          }
        )
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      ChartPanel,
      {
        title: t("charts.likesPlatform"),
        subtitle: t("charts.likesPlatformSub"),
        meta: totalLabel(t, likesPlat.total, "charts.likesUnit"),
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(BarChart, { labels: likesPlat.labels, values: likesPlat.values })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      ChartPanel,
      {
        title: t("charts.likesTime"),
        subtitle: t("charts.weekSlice").replace("{range}", rangeLabel),
        meta: totalLabel(t, likesTime.total, "charts.likesUnit"),
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          BarChart,
          {
            labels: likesTime.buckets.map((b) => b.label),
            values: likesTime.buckets.map((b) => b.value)
          }
        )
      }
    )
  ] });
}

// src/client/components/EngagementChart.jsx
var import_react3 = require("react");
var import_jsx_runtime8 = require("react/jsx-runtime");
function formatMetric(key, value) {
  if (key === "er") return formatEr(value);
  return formatCount(value);
}
function formatDelta(delta) {
  if (delta == null || Number.isNaN(delta)) return "";
  if (Math.abs(delta) >= 10) return `${formatSignedCount(delta)}`;
  return `${delta > 0 ? "+" : ""}${(delta * 100).toFixed(0)}%`;
}
function EngagementChart({ t, block, locale = "zh-CN" }) {
  const series = Array.isArray(block?.series) ? block.series : [];
  const defaults = (0, import_react3.useMemo)(() => {
    const seed = {};
    for (const item of series) seed[item.key] = item.defaultVisible !== false;
    return seed;
  }, [series]);
  const [overrides, setOverrides] = (0, import_react3.useState)({});
  const plotted = (0, import_react3.useMemo)(() => series.map((item) => ({
    key: item.key,
    label: locale.startsWith("en") ? item.labelEn : item.labelZh,
    color: `var(--omnimux-analytics-metric-${item.key}, ${item.color})`,
    yAxis: item.yAxis,
    dashed: Boolean(item.dashed),
    visible: (overrides[item.key] ?? defaults[item.key]) !== false,
    points: chartPointsForMetric(item.key, item.points),
    format: (value) => item.key === "er" ? `${Number(value).toFixed(2)}%` : formatCount(value)
  })), [series, overrides, defaults, locale]);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    ChartPanel,
    {
      wide: true,
      title: t("charts.engagement"),
      subtitle: t("charts.engagementSub"),
      footer: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "omnimux-analytics-pills", role: "group", "aria-label": t("charts.metrics"), children: series.map((item) => {
        const checked = (overrides[item.key] ?? defaults[item.key]) !== false;
        const total = block?.totals?.[item.key];
        const delta = block?.deltas?.[item.key];
        return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
          Button,
          {
            type: "button",
            variant: "ghost",
            size: "xs",
            className: checked ? "omnimux-analytics-pill is-on" : "omnimux-analytics-pill",
            "aria-pressed": checked,
            onClick: () => {
              setOverrides((prev) => ({ ...prev, [item.key]: !checked }));
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                "span",
                {
                  className: "omnimux-analytics-pill-dot",
                  style: { "--pill-color": `var(--omnimux-analytics-metric-${item.key}, ${item.color})` }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "omnimux-analytics-pill-label", children: locale.startsWith("en") ? item.labelEn : item.labelZh }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("strong", { children: formatMetric(item.key, total) }),
              delta != null ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "omnimux-analytics-pill-delta", children: formatDelta(delta) }) : null
            ]
          },
          item.key
        );
      }) }),
      children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        LineChart,
        {
          dual: true,
          labels: block?.labels ?? [],
          series: plotted,
          height: 260,
          yFormat: (n) => formatCount(n),
          y1Format: (n) => formatCount(n)
        }
      )
    }
  );
}

// src/client/components/HeatmapChart.jsx
var import_react4 = require("react");
var import_jsx_runtime9 = require("react/jsx-runtime");
function cellTitle(dayLabel, cell) {
  const hour = String(cell.hour).padStart(2, "0");
  return `${dayLabel} ${hour}:00 \xB7 ${cell.score}`;
}
function HeatmapChart({ t, heatmap, locale = "zh-CN" }) {
  const dayLabels = locale.startsWith("en") ? heatmap?.dayLabelsEn ?? [] : heatmap?.dayLabelsZh ?? [];
  const cells = ensureHeatmapCells(heatmap?.cells, heatmap?.maxScore ?? 0);
  const recommended = Array.isArray(heatmap?.recommended) ? heatmap.recommended : [];
  const [hover, setHover] = (0, import_react4.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    ChartPanel,
    {
      title: t("charts.heatmap"),
      subtitle: t("charts.heatmapSub"),
      legend: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "omnimux-analytics-heatmap-legend", "aria-hidden": "true", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: t("charts.low") }),
        [0, 1, 2, 3, 4].map((level) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "omnimux-analytics-heatcell", "data-level": String(level) }, level)),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: t("charts.high") })
      ] }),
      footer: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "omnimux-analytics-chips", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "omnimux-analytics-chips-label", children: t("charts.recommended") }),
        recommended.map((slot) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "omnimux-analytics-chip is-highlight", children: locale.startsWith("en") ? slot.labelEn : slot.labelZh }, `${slot.dayOfWeek}-${slot.hour}`))
      ] }),
      children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "omnimux-analytics-heatmap", role: "grid", "aria-label": t("charts.heatmap"), children: [
        dayLabels.map((label, day) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "omnimux-analytics-heatmap-row", role: "row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "omnimux-analytics-heatmap-label", children: label }),
          Array.from({ length: 24 }, (_, hour) => {
            const cell = cells[day * 24 + hour];
            return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
              "span",
              {
                role: "gridcell",
                className: "omnimux-analytics-heatcell",
                "data-level": String(cell.level ?? 0),
                title: cellTitle(label, cell),
                onMouseEnter: () => setHover({ label, cell }),
                onMouseLeave: () => setHover(null)
              },
              `${day}-${hour}`
            );
          })
        ] }, label)),
        hover ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "omnimux-analytics-heatmap-tip", role: "tooltip", children: cellTitle(hover.label, hover.cell) }) : null
      ] })
    }
  );
}

// src/client/components/FollowerEvolution.jsx
var import_jsx_runtime10 = require("react/jsx-runtime");
var PLATFORM_COLOR = {
  tiktok: "var(--omnimux-analytics-platform-tiktok, #0a0a0a)",
  twitter: "var(--omnimux-analytics-platform-twitter, #1d9bf0)",
  youtube: "var(--omnimux-analytics-platform-youtube, #ff0000)",
  instagram: "var(--omnimux-analytics-platform-instagram, #e1306c)"
};
function FollowerEvolution({ t, block }) {
  const timeline = Array.isArray(block?.timeline) ? block.timeline : [];
  const platforms = Array.isArray(block?.platforms) ? block.platforms : [];
  const labels = timeline.map((point) => point.label);
  const series = platforms.map((platform) => ({
    key: platform,
    label: PLATFORM_LABEL[platform] ?? platform,
    color: PLATFORM_COLOR[platform] ?? "currentColor",
    yAxis: 0,
    visible: true,
    points: timeline.map((point) => point.breakdown?.[platform] ?? null)
  }));
  const countLabel = t("charts.authorizedCount").replace("{n}", String(platforms.length));
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    ChartPanel,
    {
      title: t("charts.followers"),
      subtitle: countLabel,
      meta: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("strong", { children: formatCount(block?.totalFollowers) }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { children: t("charts.followersUnit") })
      ] }),
      children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(LineChart, { labels, series })
    }
  );
}

// src/client/components/PlatformTable.jsx
var import_react5 = require("react");
var import_jsx_runtime11 = require("react/jsx-runtime");
function cellText(kind, value) {
  if (kind === "er") return formatEr(value);
  if (kind === "count") return formatCount(value);
  if (value == null || value === "") return "-";
  return String(value);
}
function PlatformTable({ t, rows }) {
  const [sort, setSort] = (0, import_react5.useState)({ key: "posts", dir: "desc" });
  const sorted = (0, import_react5.useMemo)(
    () => sortRows(Array.isArray(rows) ? rows : [], sort.key, sort.dir),
    [rows, sort]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("section", { className: "omnimux-analytics-tablewrap", children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("header", { className: "omnimux-analytics-table-head", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h3", { className: "omnimux-analytics-panel-title", children: t("table.platformTitle") }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "omnimux-analytics-tablescroll", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("table", { className: "omnimux-analytics-table", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("tr", { children: PLATFORM_TABLE_COLUMNS.map((column) => {
        const active = sort.key === column.key;
        return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("th", { scope: "col", "aria-sort": active ? sort.dir === "asc" ? "ascending" : "descending" : "none", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
          Button,
          {
            variant: "ghost",
            size: "xs",
            className: "omnimux-analytics-sortbtn",
            onClick: () => {
              setSort((prev) => prev.key === column.key ? { key: column.key, dir: prev.dir === "asc" ? "desc" : "asc" } : { key: column.key, dir: "desc" });
            },
            children: [
              t(column.labelKey),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "omnimux-analytics-sortmark", "data-active": active ? "true" : "false", "data-dir": sort.dir })
            ]
          }
        ) }, column.key);
      }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("tbody", { children: sorted.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("td", { colSpan: PLATFORM_TABLE_COLUMNS.length, children: t("table.empty") }) }) : sorted.map((row) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("tr", { children: PLATFORM_TABLE_COLUMNS.map((column) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("td", { className: column.kind === "text" ? "" : "is-num", children: column.key === "platformLabel" ? /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { className: "omnimux-analytics-platform", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "omnimux-analytics-platform-dot", "data-platform": row.platform }),
        row.platformLabel || t(`platform.${row.platform}`)
      ] }) : column.kind === "er" && row.er != null ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "omnimux-analytics-er", children: formatEr(row.er) }) : cellText(column.kind, row[column.key]) }, column.key)) }, row.platform)) })
    ] }) })
  ] });
}

// src/client/components/TopPostsTable.jsx
var import_react6 = require("react");
var import_jsx_runtime12 = require("react/jsx-runtime");
function cellText2(kind, value) {
  if (kind === "er") return formatEr(value);
  if (kind === "count") return formatCount(value);
  if (value == null || value === "") return "-";
  return String(value);
}
function TopPostsTable({ t, rows }) {
  const [sort, setSort] = (0, import_react6.useState)({ key: "er", dir: "desc" });
  const sorted = (0, import_react6.useMemo)(() => {
    const list = Array.isArray(rows) ? rows : [];
    if (sort.key === "er" && sort.dir === "desc") return sortTopPostsDefault(list);
    return sortRows(list, sort.key, sort.dir);
  }, [rows, sort]);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("section", { id: "omnimux-analytics-top-posts", className: "omnimux-analytics-tablewrap", children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("header", { className: "omnimux-analytics-table-head", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h3", { className: "omnimux-analytics-panel-title", children: t("table.postsTitle") }) }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "omnimux-analytics-tablescroll", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("table", { className: "omnimux-analytics-table", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("tr", { children: POST_TABLE_COLUMNS.map((column) => {
        const sortable = column.sortable !== false;
        const active = sort.key === column.key;
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("th", { scope: "col", "aria-sort": active ? sort.dir === "asc" ? "ascending" : "descending" : "none", children: sortable ? /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
          Button,
          {
            variant: "ghost",
            size: "xs",
            className: "omnimux-analytics-sortbtn",
            onClick: () => {
              setSort((prev) => prev.key === column.key ? { key: column.key, dir: prev.dir === "asc" ? "desc" : "asc" } : { key: column.key, dir: "desc" });
            },
            children: [
              t(column.labelKey),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "omnimux-analytics-sortmark", "data-active": active ? "true" : "false", "data-dir": sort.dir })
            ]
          }
        ) : t(column.labelKey) }, column.key);
      }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("tbody", { children: sorted.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("td", { colSpan: POST_TABLE_COLUMNS.length, children: t("table.empty") }) }) : sorted.map((row) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("tr", { children: POST_TABLE_COLUMNS.map((column) => {
        if (column.kind === "post") {
          return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "omnimux-analytics-postcell", children: [
            row.coverUrl ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("img", { className: "omnimux-analytics-thumb", src: row.coverUrl, alt: "" }) : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "omnimux-analytics-thumb is-fallback", "data-platform": row.platform }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "omnimux-analytics-platform-dot", "data-platform": row.platform }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "omnimux-analytics-postcopy", children: [
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "omnimux-analytics-posttitle", children: row.title || "-" }),
              /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "omnimux-analytics-postmeta", children: row.publishedLabel || "-" })
            ] })
          ] }) }, column.key);
        }
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("td", { className: "is-num", children: column.kind === "er" && row.er != null ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "omnimux-analytics-er", children: formatEr(row.er) }) : cellText2(column.kind, row[column.key]) }, column.key);
      }) }, row.postId)) })
    ] }) })
  ] });
}

// src/client/components/StrategyCharts.jsx
var import_jsx_runtime13 = require("react/jsx-runtime");
var CADENCE_COLOR = {
  tiktok: "var(--omnimux-analytics-cadence, #0ea5e9)",
  twitter: "var(--omnimux-analytics-platform-twitter, #1d9bf0)",
  youtube: "var(--omnimux-analytics-platform-youtube, #ff0000)",
  instagram: "var(--omnimux-analytics-platform-instagram, #e1306c)"
};
function StrategyCharts({ t, strategy, locale = "zh-CN" }) {
  const cadence = strategy?.cadence;
  const accumulation = strategy?.accumulation;
  const brackets = Array.isArray(cadence?.brackets) ? cadence.brackets : [];
  const cadenceLabels = brackets.map((key) => CADENCE_BRACKET_LABEL[key] ?? key);
  const cadenceSeries = (cadence?.series ?? []).map((item) => ({
    key: item.platform,
    label: PLATFORM_LABEL[item.platform] ?? item.platform,
    color: CADENCE_COLOR[item.platform] ?? "currentColor",
    yAxis: 0,
    visible: true,
    points: item.erPercentPoints,
    format: formatPercentPoints
  }));
  const windows = Array.isArray(accumulation?.windows) ? accumulation.windows : [];
  const accLabels = windows.map((w) => locale.startsWith("en") ? w.labelEn : w.labelZh);
  const accSeries = [{
    key: "accumulation",
    label: t("charts.accumulationSeries"),
    color: "var(--dsw-alias-label-primary, #0a0a0a)",
    yAxis: 0,
    visible: true,
    points: windows.map((w) => w.pct),
    format: (value) => `${value ?? "-"}%`
  }];
  const optimal = Array.isArray(cadence?.optimal) ? cadence.optimal : [];
  const milestones = accumulation?.milestones;
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("section", { className: "omnimux-analytics-grid-2", "aria-label": t("charts.strategy"), children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      ChartPanel,
      {
        title: t("charts.cadence"),
        subtitle: t("charts.cadenceSub"),
        footer: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "omnimux-analytics-chips", children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "omnimux-analytics-chips-label", children: t("charts.optimal") }),
          optimal.map((item) => /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("span", { className: "omnimux-analytics-chip", children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "omnimux-analytics-platform-dot", "data-platform": item.platform }),
            locale.startsWith("en") ? item.labelEn : item.labelZh
          ] }, item.platform))
        ] }),
        children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          LineChart,
          {
            labels: cadenceLabels,
            series: cadenceSeries,
            fillFirst: true,
            yFormat: formatPercentTick
          }
        )
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      ChartPanel,
      {
        title: t("charts.accumulation"),
        subtitle: t("charts.accumulationSub"),
        footer: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "omnimux-analytics-chips", children: [
          milestones?.halfLabelZh ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "omnimux-analytics-chip", children: locale.startsWith("en") ? t("charts.halfEn") : milestones.halfLabelZh }) : null,
          milestones?.eightyLabelZh ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "omnimux-analytics-chip", children: locale.startsWith("en") ? t("charts.eightyEn") : milestones.eightyLabelZh }) : null
        ] }),
        children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          LineChart,
          {
            labels: accLabels,
            series: accSeries,
            yFormat: formatPercentTick
          }
        )
      }
    )
  ] });
}

// src/client/components/EmptyState.jsx
var import_jsx_runtime14 = require("react/jsx-runtime");
function actionLabel(t, hint) {
  if (hint?.action === "open_accounts") return t("empty.no_accounts.action");
  if (hint?.action === "reauth") return t("empty.auth_expired.action");
  if (hint?.action === "retry") return t("retry");
  if (hint?.action === "login") return t("login");
  return hint?.actionLabelZh || t("retry");
}
function EmptyState({ t, hint, onAction }) {
  const code = hint?.code ?? "no_accounts";
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "omnimux-analytics-empty", "data-code": code, children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("svg", { className: "omnimux-analytics-empty-icon", viewBox: "0 0 120 96", width: "120", height: "96", "aria-hidden": "true", focusable: "false", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("g", { fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("rect", { x: "18", y: "22", width: "84", height: "56", rx: "8", opacity: "0.85" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("path", { d: "M30 64 L48 46 L62 58 L78 38 L102 64", opacity: "0.7" }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("circle", { cx: "40", cy: "40", r: "4", fill: "currentColor", stroke: "none", opacity: "0.7" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h2", { className: "omnimux-analytics-empty-title", children: t(`empty.${code}.title`) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "omnimux-analytics-empty-text", children: hint?.detail || t(`empty.${code}.description`) }),
    hint?.action && onAction ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Button, { variant: "primary", onClick: () => onAction(hint.action), children: actionLabel(t, hint) }) : null
  ] });
}
function LoadingState({ t }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { className: "omnimux-analytics-empty", "data-code": "loading", children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "omnimux-analytics-empty-text", children: t("loading") }) });
}
function InboxPlaceholder({ t }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("section", { className: "omnimux-analytics-panel omnimux-analytics-inbox", children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h3", { className: "omnimux-analytics-panel-title", children: t("inbox.title") }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("p", { className: "omnimux-analytics-panel-subtitle", children: t("inbox.subtitle") }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "omnimux-analytics-chip", children: t("tab.inboxSoon") })
  ] });
}
function Banner({ t, hint, onAction }) {
  if (!hint?.code) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "omnimux-analytics-banner", "data-code": hint.code, role: "status", children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "omnimux-analytics-banner-copy", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { children: t(`empty.${hint.code}.title`) }),
      hint.detail ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "omnimux-analytics-banner-detail", children: hint.detail }) : null
    ] }),
    hint.action && onAction ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Button, { variant: "outline", size: "sm", onClick: () => onAction(hint.action), children: actionLabel(t, hint) }) : null
  ] });
}

// src/client/AnalyticsStage.jsx
var import_jsx_runtime15 = require("react/jsx-runtime");
function readLocale() {
  if (typeof document === "undefined") return "zh-CN";
  const lang = document.documentElement.lang || "";
  return lang.toLowerCase().startsWith("en") ? "en-US" : "zh-CN";
}
function openAccounts() {
  try {
    const stage = window.__omnimuxStage;
    if (stage && typeof stage.claim === "function") {
      stage.claim("omnimux-accounts");
      return;
    }
  } catch {
  }
  window.dispatchEvent(new CustomEvent("dsh-product-stage", { detail: { id: "omnimux-accounts" } }));
}
function AnalyticsStage({ t, stage }) {
  (0, import_react7.useEffect)(() => {
    injectAnalyticsStyles();
  }, []);
  const open = (0, import_react7.useSyncExternalStore)(
    stage ? (onStoreChange) => stage.subscribe(onStoreChange) : () => () => {
    },
    stage ? () => stage.getSnapshot() : () => false
  );
  const [everOpened, setEverOpened] = (0, import_react7.useState)(false);
  const [box, setBox] = (0, import_react7.useState)(() => stage ? stage.readBox() : { top: 0, left: 0, width: 0, height: 0 });
  const [now, setNow] = (0, import_react7.useState)(() => Date.now());
  const store = useAnalyticsStore();
  if (open && !everOpened) setEverOpened(true);
  (0, import_react7.useLayoutEffect)(() => {
    if (!open || !stage) return void 0;
    const update = () => {
      setBox(stage.readBox());
    };
    update();
    const scroll = document.querySelector("[data-conversation-scroll]");
    const target = scroll instanceof HTMLElement ? scroll : document.querySelector('[data-slot="conversation"]')?.parentElement;
    const observer = typeof ResizeObserver === "function" && target ? new ResizeObserver(update) : null;
    if (target && observer) observer.observe(target);
    window.addEventListener("resize", update);
    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [open, stage]);
  (0, import_react7.useEffect)(() => {
    if (!open) return void 0;
    void store.load();
    setNow(Date.now());
    const timer = setInterval(() => setNow(Date.now()), 3e4);
    return () => clearInterval(timer);
  }, [open, store.load]);
  const handleAction = (action) => {
    if (action === "open_accounts" || action === "reauth") openAccounts();
    else if (action === "retry") void store.refresh();
    else if (action === "login") {
      const gate = window.__omnimuxAuth;
      if (gate && typeof gate.ensureLogin === "function") gate.ensureLogin({ onSuccess: () => {
        void store.refresh();
      } });
    }
  };
  const handleTheme = () => {
    const next = store.theme === "dark" ? "light" : "dark";
    store.setTheme(next);
  };
  const handleExport = () => {
    const csv = buildDashboardCsv(store.payload);
    downloadCsv(csv, `omnimux-analytics-${store.query.timeRange}.csv`);
  };
  if (!stage || !everOpened) return null;
  const payload = store.payload;
  const empty = payload?.emptyState;
  const blockingEmpty = empty?.code === "no_accounts" || empty?.code === "unauthorized" || empty?.code === "fetch_failed";
  const locale = readLocale();
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
    "div",
    {
      role: "region",
      "aria-label": t("title"),
      "aria-hidden": open ? void 0 : "true",
      className: "omnimux-analytics-stage",
      "data-visible": open ? "true" : "false",
      "data-theme": store.theme === "system" ? void 0 : store.theme,
      style: {
        "--stage-top": `${box.top}px`,
        "--stage-left": `${box.left}px`,
        "--stage-width": `${box.width}px`,
        "--stage-height": `${box.height}px`
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          StageHeader,
          {
            t,
            theme: store.theme,
            refreshing: store.phase === "loading",
            onRefresh: () => {
              void store.refresh();
            },
            onToggleTheme: handleTheme,
            onExport: handleExport,
            onClose: () => {
              stage.set(false);
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          ActionNavRow,
          {
            t,
            tab: store.query.tab,
            syncStatus: payload?.syncStatus,
            syncing: store.syncing,
            now,
            onTabChange: (tab) => store.setQuery({ tab }),
            onSync: () => {
              void store.syncNow();
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          FilterBar2,
          {
            t,
            query: store.query,
            accounts: payload?.meta?.filterAccounts,
            disabled: store.syncing,
            onChange: (patch) => store.setQuery(patch)
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "omnimux-analytics-stage-body", children: store.phase === "loading" && !payload ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(LoadingState, { t }) : store.query.tab === "inbox" ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(InboxPlaceholder, { t }) : blockingEmpty ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(EmptyState, { t, hint: empty, onAction: handleAction }) : !payload ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(EmptyState, { t, hint: { code: "fetch_failed", action: "retry" }, onAction: handleAction }) : /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(import_jsx_runtime15.Fragment, { children: [
          empty && empty.code !== "no_accounts" ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Banner, { t, hint: empty, onAction: handleAction }) : null,
          store.lastError && empty?.code !== "network_error" ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Banner, { t, hint: { code: "network_error", action: "retry", detail: store.lastError }, onAction: handleAction }) : null,
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(KpiGrid, { t, kpi: payload.kpi, timeRange: store.query.timeRange }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(BasicCharts, { t, basicCharts: payload.basicCharts, timeRange: store.query.timeRange }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(EngagementChart, { t, block: payload.engagementOverTime, locale }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("section", { className: "omnimux-analytics-grid-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(HeatmapChart, { t, heatmap: payload.heatmap, locale }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(FollowerEvolution, { t, block: payload.followerEvolution })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(PlatformTable, { t, rows: payload.platformBreakdown }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(TopPostsTable, { t, rows: payload.topPosts }),
          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(StrategyCharts, { t, strategy: payload.strategy, locale })
        ] }) })
      ]
    }
  );
}

// src/client/index.js
var name = "omnimux-analytics";
var inject = ["slots", "locale"];
function apply(ctx) {
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), "omnimux-analytics: dictionaries");
  const t = ctx.locale.bind(NS);
  const stage = createStageStore(() => window.__omnimuxStage);
  const stageFace = () => ({ t, stage });
  ctx.effect(() => mountSidebarEntry(stage, t, ctx.locale), "omnimux-analytics: sidebar entry");
  ctx.slots.inject("shell.overlay", () => ctx.slots.register({
    name: "shell.overlay",
    id: SLOT_ID,
    order: OVERLAY_ORDER,
    locale: NS,
    inject: stageFace
  }, AnalyticsStage));
}

    return module.exports;
  }
});
