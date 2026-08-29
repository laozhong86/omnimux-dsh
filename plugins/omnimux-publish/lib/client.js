window.__ModuleLoader__.load({
  id: "omnimux-publish",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
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
var NS = "omnimux.publish";
var zh = {
  "nav": "\u53D1\u5E03",
  "title": "\u5185\u5BB9\u53D1\u5E03\u4E2D\u5FC3",
  "subtitle": "\u7EDF\u4E00\u7BA1\u7406\u591A\u5E73\u53F0\u793E\u5A92\u5185\u5BB9\u5206\u53D1\u3001\u5B9A\u65F6\u6392\u671F\u4E0E\u72B6\u6001\u8FFD\u8E2A\uFF0C\u63D0\u5347\u77E9\u9635\u8FD0\u8425\u6548\u7387",
  "close": "\u5173\u95ED",
  "loading": "\u6B63\u5728\u52A0\u8F7D\u2026",
  // 五 tab
  "tab.list": "\u5217\u8868\u89C6\u56FE",
  "tab.all": "\u5168\u90E8\u8BB0\u5F55",
  "tab.records": "\u53D1\u5E03\u8BB0\u5F55",
  "tab.drafts": "\u8349\u7A3F\u7BB1",
  "tab.reviewing": "\u5BA1\u6838\u4E2D",
  "tab.published": "\u5DF2\u53D1\u5E03",
  "tab.retry": "\u5931\u8D25\u5F85\u91CD\u8BD5",
  "tab.new": "+ \u65B0\u589E\u53D1\u5E03",
  // 顶层操作
  "action.new": "+ \u65B0\u589E\u53D1\u5E03",
  "action.batch": "\u6279\u91CF\u7BA1\u7406",
  "action.export": "\u5BFC\u51FA",
  "action.batchRetry": "\u6279\u91CF\u91CD\u8BD5\u5931\u8D25",
  "action.batchDeleteDrafts": "\u6279\u91CF\u5220\u9664\u8349\u7A3F",
  "action.exitBatch": "\u9000\u51FA\u6279\u91CF",
  "action.selectAll": "\u5168\u9009",
  // 视图与工具
  "view.grid": "\u7F51\u683C\u89C6\u56FE",
  "view.table": "\u8868\u683C\u89C6\u56FE",
  "view.calendar": "\u65E5\u5386\u89C6\u56FE",
  "search.placeholder": "\u641C\u7D22\u4F5C\u54C1...",
  "sort.recent": "\u6700\u8FD1\u66F4\u65B0",
  "sort.dateDesc": "\u53D1\u5E03\u65F6\u95F4 (\u65B0\u2192\u65E7)",
  "sort.dateAsc": "\u53D1\u5E03\u65F6\u95F4 (\u65E7\u2192\u65B0)",
  "sort.title": "\u4F5C\u54C1\u6807\u9898 (A\u2192Z)",
  "filter.type.all": "\u5168\u90E8",
  "filter.type.image": "\u56FE\u6587",
  "filter.type.video": "\u89C6\u9891",
  "filter.mode.all": "\u5168\u90E8",
  "filter.mode.scheduled": "\u5B9A\u65F6\u53D1\u5E03",
  "filter.mode.instant": "\u5373\u65F6\u53D1\u5E03",
  // 列表与空态
  "records.empty.all": "\u6682\u65E0\u4F5C\u54C1\u8BB0\u5F55",
  "records.empty.all.hint": "\u70B9\u51FB\u300C+ \u65B0\u589E\u53D1\u5E03\u300D\u521B\u5EFA\u56FE\u6587\u6216\u89C6\u9891\u5206\u53D1\u4EFB\u52A1\u3002",
  "records.empty.drafts": "\u8349\u7A3F\u7BB1\u6682\u65E0\u5185\u5BB9",
  "records.empty.drafts.hint": "\u70B9\u51FB\u300C+ \u65B0\u589E\u53D1\u5E03\u300D\u521B\u5EFA\u56FE\u6587\u6216\u89C6\u9891\u5206\u53D1\u4EFB\u52A1\u3002",
  "records.empty.records": "\u6682\u65E0\u5386\u53F2\u53D1\u5E03\u8BB0\u5F55",
  "records.empty.records.hint": "\u4ECE\u8349\u7A3F\u7BB1\u9009\u62E9\u5185\u5BB9\u5E76\u6307\u5B9A\u53D1\u5E03\u6E20\u9053\u8D26\u53F7\uFF0C\u5373\u53EF\u6267\u884C\u5206\u53D1\u3002",
  "records.empty.reviewing": "\u6682\u65E0\u5F85\u5BA1\u6838\u4EFB\u52A1",
  "records.empty.reviewing.hint": "\u793E\u4EA4\u5A92\u4F53\u5E73\u53F0\u5BA1\u6838\u4E2D\u7684\u53D1\u5E03\u4EFB\u52A1\u5C06\u5728\u6B64\u540C\u6B65\u663E\u793A\u3002",
  "records.empty.published": "\u6682\u65E0\u5DF2\u53D1\u5E03\u8BB0\u5F55",
  "records.empty.published.hint": "\u6210\u529F\u53D1\u5E03\u7684\u793E\u5A92\u4F5C\u54C1\u5C06\u5728\u6B64\u5F52\u6863\u5C55\u793A\u3002",
  "records.empty.retry": "\u6682\u65E0\u5931\u8D25\u5F85\u91CD\u8BD5\u4EFB\u52A1",
  "records.empty.retry.hint": "\u5206\u53D1\u5931\u8D25\u7684\u6E20\u9053\u5B50\u4EFB\u52A1\u5C06\u5728\u6B64\u96C6\u4E2D\u5C55\u793A\u4EE5\u4FBF\u91CD\u8BD5\u3002",
  "records.accounts": "{count} \u4E2A\u8D26\u53F7",
  "records.media": "{count} \u4E2A\u7D20\u6750",
  "records.retry": "\u91CD\u8BD5",
  "records.refresh": "\u5237\u65B0",
  "records.open": "\u67E5\u770B",
  "records.edit": "\u7F16\u8F91\u8349\u7A3F",
  "records.delete": "\u5220\u9664\u8349\u7A3F",
  "records.deleting": "\u6B63\u5728\u5220\u9664\u2026",
  "records.deleteConfirm": "\u786E\u5B9A\u5220\u9664\u8349\u7A3F\u300C{title}\u300D\uFF1F\u6B64\u64CD\u4F5C\u4E0D\u53EF\u64A4\u9500\u3002",
  "records.deleteFailed": "\u5220\u9664\u5931\u8D25\uFF1A{reason}",
  "records.more": "\u66F4\u591A\u64CD\u4F5C",
  "records.action.view": "\u67E5\u770B\u8BE6\u60C5",
  "records.action.edit": "\u7F16\u8F91\u8349\u7A3F",
  "records.action.delete": "\u5220\u9664\u8349\u7A3F",
  "records.action.retry": "\u91CD\u8BD5",
  // 六态聚合状态（单真源）
  "agg.draft": "\u8349\u7A3F",
  "agg.publishing": "\u53D1\u5E03\u4E2D",
  "agg.reviewing": "\u5BA1\u6838\u4E2D",
  "agg.partial_failed": "\u90E8\u5206\u5931\u8D25",
  "agg.failed": "\u5931\u8D25",
  "agg.published": "\u5DF2\u53D1\u5E03",
  // 子任务状态
  "task.submitting": "\u63D0\u4EA4\u4E2D",
  "task.submitted": "\u5DF2\u63D0\u4EA4",
  "task.reviewing": "\u5E73\u53F0\u5BA1\u6838\u4E2D",
  "task.published": "\u5DF2\u53D1\u5E03",
  "task.failed": "\u5931\u8D25",
  "task.retry": "\u91CD\u8BD5\u6B64\u6E20\u9053",
  "task.post": "\u53D1\u5E03\u4EFB\u52A1 {id}",
  "task.attempts": "\u5DF2\u5C1D\u8BD5 {count} \u6B21",
  "task.rawStatus": "\u5E73\u53F0\u72B6\u6001\uFF1A{status}",
  // 类型选择
  "type.title": "\u9009\u62E9\u53D1\u5E03\u7C7B\u578B",
  "type.video": "\u89C6\u9891",
  "type.video.hint": "\u4E0A\u4F20\u9AD8\u6E05\u89C6\u9891\uFF0C\u914D\u7F6E\u4E13\u5C5E\u63CF\u8FF0\u4E0E\u8BDD\u9898\u6807\u7B7E",
  "type.image": "\u56FE\u6587",
  "type.image.hint": "\u591A\u56FE\u8F6E\u64AD + \u5C01\u9762 + \u6807\u9898 + \u6B63\u6587\u4E0E\u8BDD\u9898\u6807\u7B7E",
  "type.locked": "\u53D1\u5E03\u7C7B\u578B\u786E\u5B9A\u540E\u4E0D\u53EF\u66F4\u6539\uFF1B\u5982\u9700\u5207\u6362\u8BF7\u65B0\u5EFA\u8349\u7A3F",
  // 表单
  "form.back": "\u8FD4\u56DE\u5217\u8868",
  "form.saveDraft": "\u4FDD\u5B58\u8349\u7A3F",
  "form.submit": "\u786E\u8BA4\u53D1\u5E03",
  "form.submitting": "\u6B63\u5728\u53D1\u5E03\u2026",
  "form.title": "\u6807\u9898",
  "form.titlePlaceholder": "\u8F93\u5165\u5F15\u4EBA\u5165\u80DC\u7684\u6807\u9898\uFF08\u56FE\u6587\u7C7B\u578B\u5FC5\u586B\uFF09",
  "form.description": "\u6B63\u6587\u63CF\u8FF0",
  "form.descriptionPlaceholder": "\u8F93\u5165\u6B63\u6587\u6587\u6848\u4E0E\u6838\u5FC3\u4FE1\u606F\u2026",
  "form.topics": "\u8BDD\u9898\u6807\u7B7E",
  "form.topicsPlaceholder": "\u4F7F\u7528\u7A7A\u683C\u6216\u9017\u53F7\u5206\u9694\u591A\u4E2A\u8BDD\u9898\u6807\u7B7E",
  "form.media": "\u5A92\u4F53\u7D20\u6750",
  "form.addMedia": "\u6DFB\u52A0\u7D20\u6750",
  "form.addMedia.video": "\u6DFB\u52A0\u89C6\u9891",
  "form.addMedia.image": "\u6DFB\u52A0\u56FE\u7247",
  "form.cover": "\u5C01\u9762\u56FE",
  "form.setCover": "\u8BBE\u4E3A\u5C01\u9762",
  "form.remove": "\u79FB\u9664",
  "form.coverDisabled": "\u5C01\u9762\u4E0D\u53EF\u7528\uFF1A{platforms} \u4E0D\u652F\u6301\u81EA\u5B9A\u4E49\u5C01\u9762",
  "form.imageLimit": "\u56FE\u7247\u6570\u91CF\u4E0A\u9650 {count} \u5F20\uFF08\u53D7\u6240\u9009\u5E73\u53F0\u9650\u5236\uFF09",
  "form.imageOverLimit": "\u56FE\u7247\u6570\u91CF\u8D85\u51FA\u9650\u5236\uFF08\u5F53\u524D {count} \u5F20\uFF0C\u6700\u5927\u5141\u8BB8 {max} \u5F20\uFF09",
  "form.needVideo": "\u89C6\u9891\u53D1\u5E03\u4EFB\u52A1\u81F3\u5C11\u9700\u8981\u4E0A\u4F20\u4E00\u4E2A\u89C6\u9891\u6587\u4EF6",
  "form.needImage": "\u56FE\u6587\u53D1\u5E03\u4EFB\u52A1\u81F3\u5C11\u9700\u8981\u4E0A\u4F20\u4E00\u5F20\u56FE\u7247",
  "form.saved": "\u8349\u7A3F\u5DF2\u4FDD\u5B58",
  "form.submitNoAccounts": "\u8BF7\u5728\u5DE6\u4FA7\u52FE\u9009\u81F3\u5C11\u4E00\u4E2A\u76EE\u6807\u53D1\u5E03\u8D26\u53F7",
  "form.submitBlocked": "\u53D1\u5E03\u524D\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A{reason}",
  "form.uploadFailed": "\u7D20\u6750\u4E0A\u4F20\u5931\u8D25\uFF1A{reason}",
  // 账号面板
  "accounts.title": "\u9009\u62E9\u53D1\u5E03\u6E20\u9053",
  "accounts.loading": "\u6B63\u5728\u52A0\u8F7D\u6E20\u9053\u8D26\u53F7\u2026",
  "accounts.selected": "\u5DF2\u9009\u62E9 {count} \u4E2A\u8D26\u53F7",
  "accounts.empty": "\u6682\u65E0\u53EF\u7528\u7684\u6E20\u9053\u8D26\u53F7",
  "accounts.empty.hint": "\u8BF7\u5148\u5728\u300C\u8D26\u53F7\u300D\u7BA1\u7406\u4E2D\u8FDE\u63A5\u76EE\u6807\u793E\u4EA4\u5E73\u53F0\u3002",
  "accounts.needLogin": "\u9700\u8981\u767B\u5F55 OmniMux \u540E\u540C\u6B65\u8D26\u53F7\u5217\u8868",
  "accounts.needLogin.hint": "\u53EF\u5728 \u8BBE\u7F6E \u2192 \u4E2A\u4EBA\u8D44\u6599 \u4E2D\u5B8C\u6210\u767B\u5F55\u3002",
  "accounts.unavailable": "\u6682\u4E0D\u53EF\u7528\uFF1A{reason}",
  "accounts.reason.expired": "\u6388\u6743\u4EE4\u724C\u5DF2\u8FC7\u671F",
  "accounts.reason.error": "\u8FDE\u63A5\u72B6\u6001\u5F02\u5E38",
  "accounts.reason.agentOff": "\u672A\u5411 Agent \u6388\u4E88\u6B64\u8D26\u53F7\u7684\u53D1\u5E03\u6743\u9650",
  // 详情抽屉三段式
  "detail.back": "\u8FD4\u56DE\u5217\u8868",
  "detail.title": "\u53D1\u5E03\u8BB0\u5F55\u8BE6\u60C5",
  "detail.sec.content": "\u4F5C\u54C1\u4FE1\u606F",
  "detail.sec.mode": "\u53D1\u5E03\u6A21\u5F0F",
  "detail.sec.distribution": "\u5206\u53D1\u4E0E\u8D26\u53F7",
  "detail.subtasks": "\u5206\u6E20\u9053\u53D1\u5E03\u7ED3\u679C",
  "detail.refresh": "\u540C\u6B65\u5E73\u53F0\u72B6\u6001",
  "detail.refreshing": "\u6B63\u5728\u540C\u6B65\u2026",
  "detail.syncError": "\u90E8\u5206\u6E20\u9053\u72B6\u6001\u540C\u6B65\u5931\u8D25\uFF1A{reason}",
  // 平台名
  "platform.xiaohongshu": "\u5C0F\u7EA2\u4E66",
  "platform.douyin": "\u6296\u97F3",
  "platform.kuaishou": "\u5FEB\u624B",
  "platform.weibo": "\u5FAE\u535A",
  "platform.bilibili": "\u54D4\u54E9\u54D4\u54E9",
  "platform.wechat_channels": "\u89C6\u9891\u53F7",
  "platform.tiktok": "TikTok",
  "platform.instagram": "Instagram",
  "platform.youtube": "YouTube",
  "platform.x": "X (Twitter)"
};
var en = {
  "nav": "Publish",
  "title": "Content Publishing Center",
  "subtitle": "Manage multi-platform social media distribution, scheduling and status tracking",
  "close": "Close",
  "loading": "Loading\u2026",
  "tab.list": "List views",
  "tab.all": "All Records",
  "tab.records": "Publish Records",
  "tab.drafts": "Drafts",
  "tab.reviewing": "In Review",
  "tab.published": "Published",
  "tab.retry": "Failed & Retry",
  "tab.new": "+ New Post",
  "action.new": "+ New Post",
  "action.batch": "Batch Manage",
  "action.export": "Export",
  "action.batchRetry": "Batch Retry",
  "action.batchDeleteDrafts": "Delete Drafts",
  "action.exitBatch": "Exit Batch",
  "action.selectAll": "Select All",
  "view.grid": "Grid View",
  "view.table": "Table View",
  "view.calendar": "Calendar View",
  "search.placeholder": "Search posts...",
  "sort.recent": "Recently Updated",
  "sort.dateDesc": "Date (New to Old)",
  "sort.dateAsc": "Date (Old to New)",
  "sort.title": "Title (A to Z)",
  "filter.type.all": "All",
  "filter.type.image": "Image",
  "filter.type.video": "Video",
  "filter.mode.all": "All",
  "filter.mode.scheduled": "Scheduled",
  "filter.mode.instant": "Instant",
  "records.empty.all": "No records yet",
  "records.empty.all.hint": 'Click "+ New Post" to create image or video posts.',
  "records.empty.drafts": "No drafts yet",
  "records.empty.drafts.hint": 'Click "+ New Post" to create image or video drafts.',
  "records.empty.records": "No publish records",
  "records.empty.records.hint": "Pick a draft and select channels to publish.",
  "records.empty.reviewing": "No tasks in review",
  "records.empty.reviewing.hint": "Subtasks reviewing on external platforms appear here.",
  "records.empty.published": "No published records",
  "records.empty.published.hint": "Successfully published posts appear here.",
  "records.empty.retry": "No failed tasks",
  "records.empty.retry.hint": "Failed channel subtasks appear here for retry.",
  "records.accounts": "{count} accounts",
  "records.media": "{count} files",
  "records.retry": "Retry",
  "records.refresh": "Refresh",
  "records.open": "View",
  "records.edit": "Edit Draft",
  "records.delete": "Delete Draft",
  "records.deleting": "Deleting\u2026",
  "records.deleteConfirm": 'Delete draft "{title}"? This cannot be undone.',
  "records.deleteFailed": "Delete failed: {reason}",
  "records.more": "More Actions",
  "records.action.view": "View Details",
  "records.action.edit": "Edit Draft",
  "records.action.delete": "Delete Draft",
  "records.action.retry": "Retry",
  "agg.draft": "Draft",
  "agg.publishing": "Publishing",
  "agg.reviewing": "In Review",
  "agg.partial_failed": "Partial Failure",
  "agg.failed": "Failed",
  "agg.published": "Published",
  "task.submitting": "Submitting",
  "task.submitted": "Submitted",
  "task.reviewing": "Platform Reviewing",
  "task.published": "Published",
  "task.failed": "Failed",
  "task.retry": "Retry channel",
  "task.post": "Task {id}",
  "task.attempts": "{count} attempts",
  "task.rawStatus": "Raw status: {status}",
  "type.title": "Select Type",
  "type.video": "Video",
  "type.video.hint": "Upload HD video with custom description and tags",
  "type.image": "Image Post",
  "type.image.hint": "Multi-image carousel + cover + title + text & tags",
  "type.locked": "Type is locked after creation; create a new draft to switch",
  "form.back": "Back",
  "form.saveDraft": "Save Draft",
  "form.submit": "Publish",
  "form.submitting": "Publishing\u2026",
  "form.title": "Title",
  "form.titlePlaceholder": "Enter title...",
  "form.description": "Description",
  "form.descriptionPlaceholder": "Enter text content...",
  "form.topics": "Topics / Tags",
  "form.topicsPlaceholder": "Space or comma separated tags",
  "form.media": "Media Files",
  "form.addMedia": "Add Media",
  "form.addMedia.video": "Add Video",
  "form.addMedia.image": "Add Image",
  "form.cover": "Cover",
  "form.setCover": "Set as Cover",
  "form.remove": "Remove",
  "form.coverDisabled": "Cover disabled: {platforms} do not support custom cover",
  "form.imageLimit": "Image limit {count} (constrained by channels)",
  "form.imageOverLimit": "Image limit exceeded (has {count}, max {max})",
  "form.needVideo": "Video post requires at least one video file",
  "form.needImage": "Image post requires at least one image file",
  "form.saved": "Draft saved",
  "form.submitNoAccounts": "Select at least one target account",
  "form.submitBlocked": "Pre-submit validation failed: {reason}",
  "form.uploadFailed": "Upload failed: {reason}",
  "accounts.title": "Select Channels",
  "accounts.loading": "Loading accounts\u2026",
  "accounts.selected": "{count} accounts selected",
  "accounts.empty": "No available accounts",
  "accounts.empty.hint": "Connect social accounts in Accounts settings first.",
  "accounts.needLogin": "Login to OmniMux required to sync accounts",
  "accounts.needLogin.hint": "Go to Settings \u2192 Profile to login.",
  "accounts.unavailable": "Unavailable: {reason}",
  "accounts.reason.expired": "Token expired",
  "accounts.reason.error": "Connection error",
  "accounts.reason.agentOff": "Permission not granted to Agent",
  "detail.back": "Back",
  "detail.title": "Post Details",
  "detail.sec.content": "Post Information",
  "detail.sec.mode": "Publish Mode",
  "detail.sec.distribution": "Channels & Accounts",
  "detail.subtasks": "Channel Results",
  "detail.refresh": "Sync Status",
  "detail.refreshing": "Syncing\u2026",
  "detail.syncError": "Channel sync error: {reason}",
  "platform.xiaohongshu": "Xiaohongshu",
  "platform.douyin": "Douyin",
  "platform.kuaishou": "Kuaishou",
  "platform.weibo": "Weibo",
  "platform.bilibili": "Bilibili",
  "platform.wechat_channels": "Channels",
  "platform.tiktok": "TikTok",
  "platform.instagram": "Instagram",
  "platform.youtube": "YouTube",
  "platform.x": "X (Twitter)"
};

// ../../node_modules/.pnpm/dsh-ui-kit@file+..+..+personal+dsh-ui-kit_@deepseek-ai+dsh-client-ui-primitives@0.1.0-r_e00e670598d3e1b30755d8571e7350d4/node_modules/dsh-ui-kit/lib/index.js
var import_react = require("react");
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
var Button = (0, import_react.forwardRef)(function Button2({ variant = "secondary", size = "default", loading = false, leadingIcon, trailingIcon, type = "button", className, disabled, children, ...rest }, ref) {
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
var IconButton = (0, import_react.forwardRef)(function IconButton2({ variant = "ghost", size = "default", loading = false, type = "button", className, disabled, children, title, tooltipSide = "bottom", "aria-label": ariaLabel, ...rest }, ref) {
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
var SearchField = (0, import_react.forwardRef)(function SearchField2({ value, defaultValue = "", onValueChange, onClear, debounceMs = 200, shortcut, stretch = false, clearLabel = "Clear", className, disabled, id, placeholder = "Search", ...rest }, ref) {
  const generatedId = (0, import_react.useId)();
  const inputId = id ?? generatedId;
  const inputRef = (0, import_react.useRef)(null);
  const timerRef = (0, import_react.useRef)(null);
  const controlled = value !== void 0;
  const [inner, setInner] = (0, import_react.useState)(defaultValue);
  const current = controlled ? value : inner;
  const immediate = controlled || debounceMs <= 0;
  (0, import_react.useEffect)(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);
  (0, import_react.useEffect)(() => {
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
  function emit(next) {
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
    emit(next);
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
  (0, import_react.useImperativeHandle)(ref, () => ({
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
var InputField = (0, import_react.forwardRef)(function InputField2({ label, hint, error, prefix, suffix, className, disabled, id, required, ...rest }, ref) {
  const generatedId = (0, import_react.useId)();
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
  const [open, setOpen] = (0, import_react.useState)(false);
  const generatedId = (0, import_react.useId)();
  const triggerId = id ?? generatedId;
  const selected = options.find((option) => option.value === value);
  const items = (0, import_react.useMemo)(() => options.map((option) => {
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
function ModalDialog({ open, onClose, title, description, children, footer, size = "md", closeLabel = "Close", className, contentClassName }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.Modal, {
    open,
    onClose,
    title,
    closeLabel,
    className: cx(Dialog_module_css_default.dialog, SIZE_CLASS[size], className),
    contentClassName: cx(Dialog_module_css_default.body, contentClassName),
    ...description !== void 0 ? { description } : {},
    ...footer !== void 0 ? { footer } : {},
    children
  });
}
function ConfirmModal({ message, children, confirmLabel = "Confirm", cancelLabel = "Cancel", confirmVariant = "primary", confirmLoading = false, onConfirm, onClose, size = "sm", ...rest }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModalDialog, {
    ...rest,
    size,
    onClose,
    footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: Dialog_module_css_default.footer,
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
        variant: "outline",
        onClick: onClose,
        disabled: confirmLoading,
        children: cancelLabel
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
        variant: confirmVariant,
        loading: confirmLoading,
        onClick: onConfirm,
        children: confirmLabel
      })]
    }),
    children: message != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
      className: Dialog_module_css_default.message,
      children: message
    }) : children
  });
}
injectCss("EmptyState.module.css", ".dshUk-EmptyState-emptyState {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 48px 24px;\n  min-height: 240px;\n  box-sizing: border-box;\n  color: var(--dsw-alias-label-secondary);\n}\n\n.dshUk-EmptyState-emptyState.dshUk-EmptyState-compact {\n  padding: 24px 16px;\n  min-height: 140px;\n}\n\n.dshUk-EmptyState-iconWrap {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 12px;\n  color: var(--dsw-alias-label-tertiary);\n}\n\n.dshUk-EmptyState-title {\n  margin: 0 0 6px;\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 20px;\n  color: var(--dsw-alias-label-primary);\n}\n\n.dshUk-EmptyState-description {\n  margin: 0;\n  font-size: 13px;\n  line-height: 18px;\n  color: var(--dsw-alias-label-secondary);\n  max-width: 360px;\n}\n\n.dshUk-EmptyState-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 16px;\n}\n");
var EmptyState_module_css_default = {
  "emptyState": "dshUk-EmptyState-emptyState",
  "compact": "dshUk-EmptyState-compact",
  "iconWrap": "dshUk-EmptyState-iconWrap",
  "title": "dshUk-EmptyState-title",
  "description": "dshUk-EmptyState-description",
  "actions": "dshUk-EmptyState-actions"
};
var EMPTY_CLASS = cssClass(EmptyState_module_css_default.emptyState, "emptyState");
var COMPACT_CLASS = cssClass(EmptyState_module_css_default.compact, "compact");
var ICON_WRAP_CLASS = cssClass(EmptyState_module_css_default.iconWrap, "iconWrap");
var TITLE_CLASS$1 = cssClass(EmptyState_module_css_default.title, "title");
var DESCRIPTION_CLASS = cssClass(EmptyState_module_css_default.description, "description");
var ACTIONS_CLASS = cssClass(EmptyState_module_css_default.actions, "actions");
var EmptyState = (0, import_react.forwardRef)(function EmptyState2({ icon, title, description, action, secondaryAction, compact = false, className, ...rest }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    ...rest,
    ref,
    className: cx(EMPTY_CLASS, compact && COMPACT_CLASS, className),
    children: [
      icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: ICON_WRAP_CLASS,
        children: icon
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
        className: TITLE_CLASS$1,
        children: title
      }),
      description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        className: DESCRIPTION_CLASS,
        children: description
      }),
      (action || secondaryAction) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: ACTIONS_CLASS,
        children: [action, secondaryAction]
      })
    ]
  });
});
injectCss("StageContainer.module.css", '.dshUk-StageContainer-stageContainer {\n  position: absolute;\n  top: var(--stage-top, 0px);\n  left: var(--stage-left, 56px);\n  width: var(--stage-width, calc(100vw - 56px));\n  height: var(--stage-height, 100vh);\n  background: var(--dsw-alias-bg-base);\n  color: var(--dsw-alias-label-primary);\n  z-index: 200;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n\n.dshUk-StageContainer-stageContainer[data-visible="false"] {\n  display: none !important;\n  pointer-events: none !important;\n}\n');
var CONTAINER_CLASS = cssClass({ "stageContainer": "dshUk-StageContainer-stageContainer" }.stageContainer, "stageContainer");
var StageContainer = (0, import_react.forwardRef)(function StageContainer2({ stageStore, title, className, style, children, ...rest }, ref) {
  const open = (0, import_react.useSyncExternalStore)(stageStore ? (onStoreChange) => stageStore.subscribe(onStoreChange) : () => () => {
  }, stageStore ? () => stageStore.getSnapshot() : () => false);
  const [everOpened, setEverOpened] = (0, import_react.useState)(false);
  const [box, setBox] = (0, import_react.useState)(() => stageStore ? stageStore.readBox() : {
    top: 0,
    left: 0,
    width: 0,
    height: 0
  });
  if (open && !everOpened) setEverOpened(true);
  (0, import_react.useLayoutEffect)(() => {
    if (!open || !stageStore) return void 0;
    const update = () => {
      setBox(stageStore.readBox());
    };
    update();
    const scroll = typeof document !== "undefined" ? document.querySelector("[data-conversation-scroll]") : null;
    const target = scroll instanceof HTMLElement ? scroll : typeof document !== "undefined" ? document.querySelector('[data-slot="conversation"]')?.parentElement : null;
    const observer = typeof ResizeObserver === "function" && target ? new ResizeObserver(update) : null;
    if (target && observer) observer.observe(target);
    if (typeof window !== "undefined") window.addEventListener("resize", update);
    return () => {
      observer?.disconnect();
      if (typeof window !== "undefined") window.removeEventListener("resize", update);
    };
  }, [open, stageStore]);
  if (!stageStore || !everOpened) return null;
  const customStyle = {
    ...style,
    display: open ? style?.display !== "none" ? style?.display : void 0 : "none",
    ["--stage-top"]: `${box.top}px`,
    ["--stage-left"]: `${box.left}px`,
    ["--stage-width"]: `${box.width}px`,
    ["--stage-height"]: `${box.height}px`
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    ...rest,
    ref,
    role: "region",
    "aria-label": title,
    "aria-hidden": open ? void 0 : true,
    "data-visible": open ? "true" : "false",
    className: cx(CONTAINER_CLASS, className),
    style: customStyle,
    children
  });
});
injectCss("Tabs.module.css", '.dshUk-Tabs-tabs {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  padding: 2px;\n  height: 32px;\n  box-sizing: border-box;\n  background: var(--dsw-alias-bg-layer-1);\n  border: 1px solid var(--dsw-alias-border-l1);\n  border-radius: 8px;\n  flex-shrink: 0;\n  user-select: none;\n}\n\n.dshUk-Tabs-sm {\n  height: 28px;\n  padding: 2px;\n  border-radius: 6px;\n}\n\n.dshUk-Tabs-tabItem {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  height: 26px;\n  padding: 0 10px;\n  border-radius: 6px;\n  border: none;\n  background: transparent;\n  color: var(--dsw-alias-label-secondary);\n  font: inherit;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 18px;\n  cursor: pointer;\n  white-space: nowrap;\n  box-sizing: border-box;\n  transition:\n    background-color 120ms cubic-bezier(0.16, 1, 0.3, 1),\n    color 120ms cubic-bezier(0.16, 1, 0.3, 1),\n    box-shadow 120ms cubic-bezier(0.16, 1, 0.3, 1);\n}\n\n.dshUk-Tabs-sm .dshUk-Tabs-tabItem {\n  height: 22px;\n  padding: 0 8px;\n  border-radius: 4px;\n  font-size: 12px;\n  line-height: 16px;\n  gap: 4px;\n}\n\n.dshUk-Tabs-tabItem:hover:not(:disabled):not([aria-selected="true"]) {\n  background: var(--dsw-alias-interactive-bg-hover);\n  color: var(--dsw-alias-label-primary);\n}\n\n.dshUk-Tabs-tabItem:focus {\n  outline: none;\n}\n\n.dshUk-Tabs-tabItem:focus-visible {\n  outline: 2px solid var(--dsw-alias-brand-primary);\n  outline-offset: 1px;\n}\n\n.dshUk-Tabs-tabItem:disabled {\n  cursor: not-allowed;\n  opacity: 0.4;\n}\n\n.dshUk-Tabs-active {\n  background: var(--dsw-alias-bg-elevated);\n  color: var(--dsw-alias-label-primary);\n  font-weight: 600;\n  box-shadow: 0 1px 2px var(--dsw-alias-border-l1);\n}\n\n.dshUk-Tabs-active:hover {\n  background: var(--dsw-alias-bg-elevated);\n  color: var(--dsw-alias-label-primary);\n}\n\n.dshUk-Tabs-label {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.dshUk-Tabs-badge {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 16px;\n  height: 16px;\n  padding: 0 4px;\n  box-sizing: border-box;\n  border-radius: 9999px;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 1;\n  background: var(--dsw-alias-interactive-bg-hover);\n  color: var(--dsw-alias-label-secondary);\n}\n\n.dshUk-Tabs-sm .dshUk-Tabs-badge {\n  min-width: 14px;\n  height: 14px;\n  padding: 0 3px;\n  font-size: 10px;\n}\n\n.dshUk-Tabs-active .dshUk-Tabs-badge {\n  background: var(--dsw-alias-interactive-bg-active);\n  color: var(--dsw-alias-label-primary);\n}\n');
var Tabs_module_css_default = {
  "tabs": "dshUk-Tabs-tabs",
  "sm": "dshUk-Tabs-sm",
  "tabItem": "dshUk-Tabs-tabItem",
  "active": "dshUk-Tabs-active",
  "label": "dshUk-Tabs-label",
  "badge": "dshUk-Tabs-badge"
};
var TABS_CLASS = cssClass(Tabs_module_css_default.tabs, "tabs");
var SM_CLASS = cssClass(Tabs_module_css_default.sm, "sm");
var TAB_ITEM_CLASS = cssClass(Tabs_module_css_default.tabItem, "tabItem");
var ACTIVE_CLASS = cssClass(Tabs_module_css_default.active, "active");
var BADGE_CLASS = cssClass(Tabs_module_css_default.badge, "badge");
var LABEL_CLASS$1 = cssClass(Tabs_module_css_default.label, "label");
var Tabs = (0, import_react.forwardRef)(function Tabs2({ items, activeId, onChange, size = "default", className, ...rest }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    ...rest,
    ref,
    role: "tablist",
    className: cx(TABS_CLASS, size === "sm" && SM_CLASS, className),
    children: items.map((item) => {
      const isActive = item.id === activeId;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
        type: "button",
        role: "tab",
        "aria-selected": isActive,
        disabled: item.disabled,
        className: cx(TAB_ITEM_CLASS, isActive && ACTIVE_CLASS),
        onClick: () => {
          if (!item.disabled && item.id !== activeId) onChange(item.id);
        },
        children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
          className: LABEL_CLASS$1,
          children: item.label
        }), item.badge != null && item.badge !== "" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
          className: BADGE_CLASS,
          children: item.badge
        }) : null]
      }, item.id);
    })
  });
});
injectCss("PageHeader.module.css", ".dshUk-PageHeader-pageHeader {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 20px;\n  min-height: 56px;\n  box-sizing: border-box;\n  flex: none;\n  gap: 16px;\n  border-bottom: 1px solid var(--dsw-alias-border-l1);\n  -webkit-app-region: no-drag;\n}\n\n.dshUk-PageHeader-heading {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n  flex: 1 1 auto;\n}\n\n.dshUk-PageHeader-breadcrumb {\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  line-height: 16px;\n  color: var(--dsw-alias-label-secondary);\n  margin-bottom: 2px;\n}\n\n.dshUk-PageHeader-titleRow {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.dshUk-PageHeader-title {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 28px;\n  color: var(--dsw-alias-label-primary);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.dshUk-PageHeader-subtitle {\n  margin: 0;\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 18px;\n  color: var(--dsw-alias-label-secondary);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.dshUk-PageHeader-tabsContainer {\n  display: flex;\n  align-items: center;\n  flex: none;\n}\n\n.dshUk-PageHeader-controls {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: none;\n}\n");
var PageHeader_module_css_default = {
  "pageHeader": "dshUk-PageHeader-pageHeader",
  "heading": "dshUk-PageHeader-heading",
  "breadcrumb": "dshUk-PageHeader-breadcrumb",
  "titleRow": "dshUk-PageHeader-titleRow",
  "title": "dshUk-PageHeader-title",
  "subtitle": "dshUk-PageHeader-subtitle",
  "tabsContainer": "dshUk-PageHeader-tabsContainer",
  "controls": "dshUk-PageHeader-controls"
};
var PAGE_HEADER_CLASS = cssClass(PageHeader_module_css_default.pageHeader, "pageHeader");
var HEADING_CLASS = cssClass(PageHeader_module_css_default.heading, "heading");
var BREADCRUMB_CLASS = cssClass(PageHeader_module_css_default.breadcrumb, "breadcrumb");
var TITLE_ROW_CLASS = cssClass(PageHeader_module_css_default.titleRow, "titleRow");
var TITLE_CLASS = cssClass(PageHeader_module_css_default.title, "title");
var SUBTITLE_CLASS = cssClass(PageHeader_module_css_default.subtitle, "subtitle");
var TABS_CONTAINER_CLASS = cssClass(PageHeader_module_css_default.tabsContainer, "tabsContainer");
var CONTROLS_CLASS = cssClass(PageHeader_module_css_default.controls, "controls");
var PageHeader = (0, import_react.forwardRef)(function PageHeader2({ title, subtitle, badge, tabs, actions, onRefresh, refreshing = false, refreshTitle = "Refresh", onClose, closeTitle = "Close", breadcrumb, className, ...rest }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
    ...rest,
    ref,
    className: cx(PAGE_HEADER_CLASS, className),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: HEADING_CLASS,
        children: [
          breadcrumb && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: BREADCRUMB_CLASS,
            children: breadcrumb
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: TITLE_ROW_CLASS,
            children: [typeof title === "string" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
              className: TITLE_CLASS,
              children: title
            }) : title, badge]
          }),
          subtitle && (typeof subtitle === "string" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            className: SUBTITLE_CLASS,
            children: subtitle
          }) : subtitle)
        ]
      }),
      tabs && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: TABS_CONTAINER_CLASS,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tabs, {
          items: tabs.items,
          activeId: tabs.activeId,
          onChange: tabs.onChange,
          size: "sm"
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: CONTROLS_CLASS,
        children: [
          actions,
          onRefresh && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
            variant: "ghost",
            size: "sm",
            "aria-label": refreshTitle,
            title: refreshTitle,
            disabled: refreshing,
            onClick: () => {
              onRefresh();
            },
            children: refreshing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.IconLoadingOutline16, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.IconRefreshOutline16, {})
          }),
          onClose && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
            variant: "ghost",
            size: "sm",
            "aria-label": closeTitle,
            title: closeTitle,
            onClick: () => {
              onClose();
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.IconCloseOutline16, {})
          })
        ]
      })
    ]
  });
});
var StageHeader = (0, import_react.forwardRef)(function StageHeader2(props, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
    ...props,
    ref
  });
});
injectCss("StatBar.module.css", ".dshUk-StatBar-statBar {\n  display: flex;\n  align-items: stretch;\n  gap: 12px;\n  width: 100%;\n  box-sizing: border-box;\n  flex-wrap: wrap;\n}\n\n.dshUk-StatBar-item {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  flex: 1 1 0;\n  min-width: 140px;\n  padding: 12px 16px;\n  background: var(--dsw-alias-bg-layer-1);\n  border: 1px solid var(--dsw-alias-border-l1);\n  border-radius: 8px;\n  box-sizing: border-box;\n}\n\n.dshUk-StatBar-label {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 16px;\n  color: var(--dsw-alias-label-secondary);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.dshUk-StatBar-valueRow {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n\n.dshUk-StatBar-value {\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 28px;\n  color: var(--dsw-alias-label-primary);\n  letter-spacing: -0.01em;\n}\n\n.dshUk-StatBar-trend {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 16px;\n}\n\n.dshUk-StatBar-trendUp {\n  color: var(--dsw-alias-status-success);\n}\n\n.dshUk-StatBar-trendDown {\n  color: var(--dsw-alias-state-error-primary);\n}\n\n.dshUk-StatBar-trendNeutral {\n  color: var(--dsw-alias-label-secondary);\n}\n\n.dshUk-StatBar-trendIcon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 14px;\n  height: 14px;\n  flex: none;\n}\n\n.dshUk-StatBar-extra {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 16px;\n  color: var(--dsw-alias-label-tertiary);\n  margin-top: auto;\n}\n");
var StatBar_module_css_default = {
  "statBar": "dshUk-StatBar-statBar",
  "item": "dshUk-StatBar-item",
  "label": "dshUk-StatBar-label",
  "valueRow": "dshUk-StatBar-valueRow",
  "value": "dshUk-StatBar-value",
  "trend": "dshUk-StatBar-trend",
  "trendUp": "dshUk-StatBar-trendUp",
  "trendDown": "dshUk-StatBar-trendDown",
  "trendNeutral": "dshUk-StatBar-trendNeutral",
  "trendIcon": "dshUk-StatBar-trendIcon",
  "extra": "dshUk-StatBar-extra"
};
var STAT_BAR_CLASS = cssClass(StatBar_module_css_default.statBar, "statBar");
var ITEM_CLASS = cssClass(StatBar_module_css_default.item, "item");
var LABEL_CLASS = cssClass(StatBar_module_css_default.label, "label");
var VALUE_ROW_CLASS = cssClass(StatBar_module_css_default.valueRow, "valueRow");
var VALUE_CLASS = cssClass(StatBar_module_css_default.value, "value");
var TREND_CLASS = cssClass(StatBar_module_css_default.trend, "trend");
var TREND_UP_CLASS = cssClass(StatBar_module_css_default.trendUp, "trendUp");
var TREND_DOWN_CLASS = cssClass(StatBar_module_css_default.trendDown, "trendDown");
var TREND_NEUTRAL_CLASS = cssClass(StatBar_module_css_default.trendNeutral, "trendNeutral");
var TREND_ICON_CLASS = cssClass(StatBar_module_css_default.trendIcon, "trendIcon");
var EXTRA_CLASS = cssClass(StatBar_module_css_default.extra, "extra");
var StatBar = (0, import_react.forwardRef)(function StatBar2({ items, className, ...rest }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    ...rest,
    ref,
    className: cx(STAT_BAR_CLASS, className),
    children: items.map((item) => {
      const trend = item.trend;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: ITEM_CLASS,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: LABEL_CLASS,
            children: item.label
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: VALUE_ROW_CLASS,
            children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: VALUE_CLASS,
              children: item.value
            }), trend && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: cx(TREND_CLASS, trend.direction === "up" && TREND_UP_CLASS, trend.direction === "down" && TREND_DOWN_CLASS, trend.direction === "neutral" && TREND_NEUTRAL_CLASS),
              children: [
                trend.direction === "up" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: TREND_ICON_CLASS,
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.IconChevronUpOutline14, { size: 14 })
                }),
                trend.direction === "down" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: TREND_ICON_CLASS,
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.IconChevronDownOutline14, { size: 14 })
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: trend.value })
              ]
            })]
          }),
          item.extra != null && item.extra !== "" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: EXTRA_CLASS,
            children: item.extra
          }) : null
        ]
      }, item.key);
    })
  });
});
injectCss("ActionRow.module.css", ".dshUk-ActionRow-actionRow {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: nowrap;\n  min-height: 32px;\n  box-sizing: border-box;\n  width: 100%;\n}\n\n.dshUk-ActionRow-leftGroup {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-shrink: 0;\n  min-width: 0;\n}\n\n.dshUk-ActionRow-rightGroup {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-left: auto;\n  flex-shrink: 0;\n}\n");
var ActionRow_module_css_default = {
  "actionRow": "dshUk-ActionRow-actionRow",
  "leftGroup": "dshUk-ActionRow-leftGroup",
  "rightGroup": "dshUk-ActionRow-rightGroup"
};
var ACTION_ROW_CLASS = cssClass(ActionRow_module_css_default.actionRow, "actionRow");
var LEFT_GROUP_CLASS = cssClass(ActionRow_module_css_default.leftGroup, "leftGroup");
var RIGHT_GROUP_CLASS = cssClass(ActionRow_module_css_default.rightGroup, "rightGroup");
var ActionRow = (0, import_react.forwardRef)(function ActionRow2({ primaryAction, secondaryActions, rightActions, className, children, ...rest }, ref) {
  const hasLeft = primaryAction != null || secondaryActions != null;
  const hasRight = rightActions != null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    ...rest,
    ref,
    className: cx(ACTION_ROW_CLASS, className),
    children: [
      hasLeft && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: LEFT_GROUP_CLASS,
        children: [primaryAction, secondaryActions]
      }),
      children,
      hasRight && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: RIGHT_GROUP_CLASS,
        children: rightActions
      })
    ]
  });
});
var PRODUCT_STAGE_EVENT = "dsh-product-stage";
var ACTIVE_STAGE_STORAGE_KEY = "omnimux_active_product_stage";
function createStageStore(stageId, getStage = () => typeof window !== "undefined" ? window.__omnimuxStage : void 0) {
  let open = false;
  if (typeof window !== "undefined") try {
    open = window.localStorage.getItem(ACTIVE_STAGE_STORAGE_KEY) === stageId;
  } catch {
  }
  const listeners = /* @__PURE__ */ new Set();
  function emit() {
    for (const listener of listeners) try {
      listener();
    } catch (err) {
      console.error("StageStore listener error:", err);
    }
  }
  if (open && typeof window !== "undefined") {
    const restore = () => {
      try {
        const stage = getStage();
        if (stage && typeof stage.claim === "function") stage.claim(stageId);
      } catch {
      }
    };
    if (typeof queueMicrotask === "function") queueMicrotask(restore);
    else setTimeout(restore, 0);
  }
  if (typeof window !== "undefined") window.addEventListener(PRODUCT_STAGE_EVENT, (event) => {
    const id = event instanceof CustomEvent ? event.detail?.id : void 0;
    if (id !== stageId && open) {
      open = false;
      emit();
    } else if (id === stageId && !open) {
      open = true;
      emit();
    }
  });
  return {
    getSnapshot: () => open,
    readBox() {
      const stage = getStage();
      if (stage && typeof stage.readBox === "function") return stage.readBox();
      const left = 56;
      const winWidth = typeof window !== "undefined" ? window.innerWidth : 1280;
      const winHeight = typeof window !== "undefined" ? window.innerHeight : 800;
      return {
        top: 0,
        left,
        width: Math.max(8, winWidth - left),
        height: Math.max(8, winHeight)
      };
    },
    subscribe(listener) {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    set(next) {
      if (open === next) return;
      open = next;
      const stage = getStage();
      if (open) stage?.claim?.(stageId);
      else stage?.release?.(stageId);
      emit();
    },
    open() {
      this.set(true);
    },
    close() {
      this.set(false);
    }
  };
}
var SIDEBAR_ENTRY_COMMON_STYLES = `
.omnimux-sidebar-nav-entry {
  box-sizing: border-box; display: flex; align-items: center; gap: 6px; position: relative;
  width: calc(100% - 8px); height: 32px; margin: 0 4px; padding: 0 8px;
  border: none; border-radius: 8px; background: transparent;
  color: var(--dsw-alias-label-primary, inherit);
  font: var(--dsw-font-s-14, inherit); font-size: 14px; line-height: 20px;
  cursor: pointer; text-align: left;
}
.omnimux-sidebar-nav-entry:hover {
  background: var(--dsw-alias-interactive-bg-hover);
}
.omnimux-sidebar-nav-entry[data-active="true"] {
  background: var(--dsw-alias-interactive-bg-active);
  font-weight: 500;
}
.omnimux-sidebar-nav-entry-icon {
  flex: none; display: inline-flex; width: 14px; height: 14px; align-items: center; justify-content: center;
}
.omnimux-sidebar-nav-entry-icon svg {
  display: block; width: 14px; height: 14px;
}
.omnimux-sidebar-nav-entry-label {
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 20px;
}
`;
function resolveLabel(label) {
  return typeof label === "function" ? label() : label;
}
function paintLabel(entry, labelText) {
  entry.setAttribute("aria-label", labelText);
  const node = entry.querySelector(".omnimux-sidebar-nav-entry-label");
  if (node) node.textContent = labelText;
}
function registerWhenCoordinatorReady(row) {
  let unregister = () => {
  };
  let disposed = false;
  const attempt = () => {
    if (disposed) return;
    const api = (typeof window !== "undefined" ? window : void 0)?.__omnimuxSidebar;
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
function createSidebarEntry(options) {
  const { id, rank, label, iconSvg, stageStore, locale, customClassName, datasetKey, requireAuth, authReason } = options;
  const entry = document.createElement("button");
  entry.type = "button";
  if (datasetKey) entry.setAttribute(datasetKey, "");
  entry.className = `omnimux-sidebar-nav-entry ${customClassName || ""}`.trim();
  entry.innerHTML = `<span class="omnimux-sidebar-nav-entry-icon">${iconSvg}</span><span class="omnimux-sidebar-nav-entry-label"></span>`;
  const updateLabel = () => {
    paintLabel(entry, resolveLabel(label));
  };
  updateLabel();
  entry.addEventListener("click", () => {
    if (requireAuth !== false) {
      const auth = (typeof window !== "undefined" ? window : void 0)?.__omnimuxAuth;
      if (auth && typeof auth.ensureLogin === "function") {
        const reason = authReason ? resolveLabel(authReason) : resolveLabel(label);
        auth.ensureLogin({
          reason,
          onSuccess: () => {
            stageStore.open();
          }
        });
        return;
      }
    }
    stageStore.open();
  });
  const syncActive = () => {
    if (stageStore.getSnapshot()) entry.dataset.active = "true";
    else delete entry.dataset.active;
  };
  const unsubscribeStage = stageStore.subscribe(syncActive);
  syncActive();
  const unsubscribeLocale = typeof locale?.subscribe === "function" ? locale.subscribe(updateLabel) : () => {
  };
  const unregisterCoordinator = registerWhenCoordinatorReady({
    id: `${id}-entry`,
    rank,
    styles: SIDEBAR_ENTRY_COMMON_STYLES,
    styleId: "omnimux-sidebar-nav-entry-styles",
    create: () => entry
  });
  return () => {
    unregisterCoordinator();
    unsubscribeStage();
    unsubscribeLocale();
  };
}

// src/client/stage-store.js
var STAGE_ID = "omnimux-publish";
function createStageStore2(getStage) {
  return createStageStore(STAGE_ID, getStage);
}

// src/client/sidebar-entry.js
var ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="14" height="14" fill="none" role="presentation" aria-hidden="true" preserveAspectRatio="xMidYMid meet"><g><path d="M5.833.833H7.5V2.5h5V.833h1.667V2.5H15A2.5 2.5 0 0 1 17.5 5v10a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 15V5A2.5 2.5 0 0 1 5 2.5h.833V.833ZM5 4.167A.833.833 0 0 0 4.167 5v1.667h11.666V5A.833.833 0 0 0 15 4.167H5Zm-.833 4.166V15c0 .46.373.833.833.833h10c.46 0 .833-.373.833-.833V8.333H4.167Z" clip-rule="evenodd" fill-rule="evenodd" fill="currentColor"/></g></svg>';
function mountSidebarEntry(stage, t, locale) {
  return createSidebarEntry({
    id: "omnimux-publish",
    rank: 4.2,
    label: () => t("nav"),
    iconSvg: ICON,
    stageStore: stage,
    locale,
    customClassName: "omnimux-publish-entry",
    datasetKey: "data-omnimux-publish-entry"
  });
}

// src/client/PublishStage.jsx
var import_react12 = require("react");
var import_dsh_client_ui_primitives6 = require("@deepseek-ai/dsh-client-ui-primitives");

// src/client/icons/stage.js
var import_react2 = __toESM(require("react"), 1);
function IconFolderOutline16({ size = 16, className, ...props } = {}) {
  return import_react2.default.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 16 16",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.3,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      className,
      ...props
    },
    import_react2.default.createElement("path", {
      d: "M1.75 4.25A1.25 1.25 0 0 1 3 3h3.086c.332 0 .65.132.884.366l.76.768a1.25 1.25 0 0 0 .884.366H13A1.25 1.25 0 0 1 14.25 5.75v6.5A1.25 1.25 0 0 1 13 13.5H3A1.25 1.25 0 0 1 1.75 12.25v-8Z"
    })
  );
}
function IconGridOutline16({ size = 16, className, ...props } = {}) {
  return import_react2.default.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 16 16",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.3,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      className,
      ...props
    },
    import_react2.default.createElement("rect", { x: 2, y: 2, width: 4.75, height: 4.75, rx: 1 }),
    import_react2.default.createElement("rect", { x: 9.25, y: 2, width: 4.75, height: 4.75, rx: 1 }),
    import_react2.default.createElement("rect", { x: 9.25, y: 9.25, width: 4.75, height: 4.75, rx: 1 }),
    import_react2.default.createElement("rect", { x: 2, y: 9.25, width: 4.75, height: 4.75, rx: 1 })
  );
}
function IconListOutline16({ size = 16, className, ...props } = {}) {
  return import_react2.default.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 16 16",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.3,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      className,
      ...props
    },
    import_react2.default.createElement("line", { x1: 5.75, y1: 4, x2: 14, y2: 4 }),
    import_react2.default.createElement("line", { x1: 5.75, y1: 8, x2: 14, y2: 8 }),
    import_react2.default.createElement("line", { x1: 5.75, y1: 12, x2: 14, y2: 12 }),
    import_react2.default.createElement("line", { x1: 2, y1: 4, x2: 3.25, y2: 4 }),
    import_react2.default.createElement("line", { x1: 2, y1: 8, x2: 3.25, y2: 8 }),
    import_react2.default.createElement("line", { x1: 2, y1: 12, x2: 3.25, y2: 12 })
  );
}
function IconCalendarOutline16({ size = 16, className, ...props } = {}) {
  return import_react2.default.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 16 16",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1.3,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      className,
      ...props
    },
    import_react2.default.createElement("rect", { x: 2, y: 3.5, width: 12, height: 10.5, rx: 1.5 }),
    import_react2.default.createElement("line", { x1: 2, y1: 7, x2: 14, y2: 7 }),
    import_react2.default.createElement("line", { x1: 5, y1: 2, x2: 5, y2: 4.5 }),
    import_react2.default.createElement("line", { x1: 11, y1: 2, x2: 11, y2: 4.5 }),
    import_react2.default.createElement("circle", { cx: 5.25, cy: 10, r: 0.6, fill: "currentColor", stroke: "none" }),
    import_react2.default.createElement("circle", { cx: 8, cy: 10, r: 0.6, fill: "currentColor", stroke: "none" }),
    import_react2.default.createElement("circle", { cx: 10.75, cy: 10, r: 0.6, fill: "currentColor", stroke: "none" })
  );
}

// src/client/api.js
function errorText(body, status) {
  const row = body && typeof body === "object" && !Array.isArray(body) ? (
    /** @type {Record<string, unknown>} */
    body
  ) : null;
  const code = row && typeof row.error === "string" ? row.error.trim() : "";
  const message = row && typeof row.message === "string" ? row.message.trim() : "";
  if (message && code && message !== code) return `${code}: ${message}`;
  if (message) return message;
  if (code) return code;
  return Number.isFinite(status) ? `HTTP ${status}` : "request failed";
}
async function publishRequest(path, opts = {}) {
  const response = await fetch(path, {
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
function getState(rev) {
  const suffix = Number.isFinite(rev) ? `?rev=${rev}` : "";
  return publishRequest(`/omnimux/publish/state${suffix}`);
}
function listRecords(query = {}) {
  const params = new URLSearchParams();
  if (query.status) params.set("status", query.status);
  if (query.type) params.set("type", query.type);
  if (query.page) params.set("page", String(query.page));
  const suffix = params.toString() ? `?${params}` : "";
  return publishRequest(`/omnimux/publish/records${suffix}`);
}
function recordDetail(id) {
  return publishRequest(`/omnimux/publish/records/detail?id=${encodeURIComponent(id)}`);
}
function getCapabilities() {
  return publishRequest("/omnimux/publish/capabilities");
}
function mediaContentUrl(mediaId) {
  return `/omnimux/publish/media/content?id=${encodeURIComponent(mediaId)}`;
}
async function uploadMedia(file) {
  const response = await fetch(`/omnimux/publish/media?filename=${encodeURIComponent(file.name)}`, {
    method: "POST",
    headers: { "Content-Type": file.type || "application/octet-stream" },
    body: file
  });
  let json = {};
  try {
    json = await response.json();
  } catch {
    json = { error: `HTTP ${String(response.status)}` };
  }
  return { ok: response.ok, status: response.status, body: json };
}
function createDraft(type, payload) {
  return publishRequest("/omnimux/publish/drafts", { method: "POST", body: { type, payload } });
}
function updateDraft(draftId, patch) {
  return publishRequest("/omnimux/publish/drafts/update", { method: "POST", body: { draft_id: draftId, patch } });
}
function deleteDraft(draftId) {
  return publishRequest("/omnimux/publish/drafts/delete", { method: "POST", body: { draft_id: draftId, confirm: true } });
}
function submitRecord(recordId) {
  return publishRequest("/omnimux/publish/records/submit", { method: "POST", body: { record_id: recordId } });
}
function refreshRecord(recordId) {
  return publishRequest("/omnimux/publish/records/refresh", { method: "POST", body: { record_id: recordId } });
}
function retryTask(taskId) {
  return publishRequest("/omnimux/publish/tasks/retry", { method: "POST", body: { task_id: taskId } });
}
function listHubAccounts(filters = {}) {
  const query = new URLSearchParams();
  if (filters.platform) query.set("platform", filters.platform);
  const suffix = query.toString() ? `?${query}` : "";
  return publishRequest(`/omnimux/accounts${suffix}`);
}

// src/client/status-display.js
var STATUS_LABEL = {
  draft: "\u8349\u7A3F",
  publishing: "\u53D1\u5E03\u4E2D",
  reviewing: "\u5BA1\u6838\u4E2D",
  published: "\u5DF2\u53D1\u5E03",
  partial_failed: "\u90E8\u5206\u5931\u8D25",
  failed: "\u5931\u8D25"
};
function aggregateOf(record) {
  if (!record || record.status === "draft") return "draft";
  const tasks = Array.isArray(record.subtasks) ? record.subtasks : [];
  if (tasks.length === 0) return "publishing";
  const published = tasks.filter((t) => t.status === "published").length;
  const failed = tasks.filter((t) => t.status === "failed").length;
  const inflight = tasks.length - published - failed;
  if (inflight > 0) return "publishing";
  if (failed === 0) return "published";
  if (published === 0) return "failed";
  return "partial_failed";
}
function displayStatus(record) {
  if (!record || record.status === "draft") {
    return "draft";
  }
  const agg = record.aggregate || aggregateOf(record);
  const summary = record.subtask_summary;
  const reviewingCount = summary && typeof summary.reviewing === "number" ? summary.reviewing : (record.subtasks || []).filter((s) => s.status === "reviewing").length;
  if (reviewingCount > 0 && agg === "publishing") {
    return "reviewing";
  }
  if (agg === "reviewing") {
    return "reviewing";
  }
  if (agg === "published" || agg === "partial_failed" || agg === "failed" || agg === "publishing") {
    return agg;
  }
  return "draft";
}
function statusText(status) {
  return STATUS_LABEL[status] || status || "\u8349\u7A3F";
}

// src/client/views/RecordsTable.jsx
var import_react5 = __toESM(require("react"), 1);

// src/client/icons/metrics.js
var import_react3 = __toESM(require("react"), 1);
function IconLikesSvg(props) {
  return import_react3.default.createElement(
    "svg",
    { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    import_react3.default.createElement("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" })
  );
}
function IconCommentsSvg(props) {
  return import_react3.default.createElement(
    "svg",
    { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    import_react3.default.createElement("path", { d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" })
  );
}
function IconSharesSvg(props) {
  return import_react3.default.createElement(
    "svg",
    { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    import_react3.default.createElement("circle", { cx: 18, cy: 5, r: 3 }),
    import_react3.default.createElement("circle", { cx: 6, cy: 12, r: 3 }),
    import_react3.default.createElement("circle", { cx: 18, cy: 19, r: 3 }),
    import_react3.default.createElement("line", { x1: 8.59, y1: 13.51, x2: 15.42, y2: 17.49 }),
    import_react3.default.createElement("line", { x1: 15.41, y1: 6.51, x2: 8.59, y2: 10.49 })
  );
}
function IconSavesSvg(props) {
  return import_react3.default.createElement(
    "svg",
    { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    import_react3.default.createElement("path", { d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" })
  );
}
function IconClicksSvg(props) {
  return import_react3.default.createElement(
    "svg",
    { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    import_react3.default.createElement("path", { d: "m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" }),
    import_react3.default.createElement("path", { d: "m13 13 6 6" })
  );
}
function IconViewsSvg(props) {
  return import_react3.default.createElement(
    "svg",
    { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    import_react3.default.createElement("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    import_react3.default.createElement("circle", { cx: 12, cy: 12, r: 3 })
  );
}
function IconImpressionsSvg(props) {
  return import_react3.default.createElement(
    "svg",
    { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    import_react3.default.createElement("polyline", { points: "22 12 18 12 15 21 9 3 6 12 2 12" })
  );
}
function IconReachSvg(props) {
  return import_react3.default.createElement(
    "svg",
    { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", ...props },
    import_react3.default.createElement("path", { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }),
    import_react3.default.createElement("circle", { cx: 9, cy: 7, r: 4 }),
    import_react3.default.createElement("path", { d: "M23 21v-2a4 4 0 0 0-3-3.87" }),
    import_react3.default.createElement("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
  );
}

// src/client/metrics-display.js
function formatMetric(val) {
  if (val === null || val === void 0 || val === "" || typeof val !== "number" || !Number.isFinite(val)) {
    return "-";
  }
  return String(val);
}
var TABLE_COLUMNS = [
  { key: "select", label: "", width: 32, align: "center" },
  { key: "content", label: "Content", minWidth: 240, align: "left", sticky: true },
  { key: "platforms", label: "Platforms", minWidth: 100, align: "left" },
  { key: "date", label: "Date", width: 140, align: "left", sortable: true },
  { key: "status", label: "Status", width: 100, align: "left", sortable: true },
  // 8 维数据指标列：key 保持标准全称，表头 label 使用标准短名并包含内联 SVG 图标，宽度锁定 56px
  { key: "likes", label: "Likes", icon: IconLikesSvg, width: 56, align: "center" },
  { key: "comments", label: "Cmts", icon: IconCommentsSvg, width: 56, align: "center" },
  { key: "shares", label: "Shrs", icon: IconSharesSvg, width: 56, align: "center" },
  { key: "saves", label: "Saves", icon: IconSavesSvg, width: 56, align: "center" },
  { key: "clicks", label: "Clicks", icon: IconClicksSvg, width: 56, align: "center" },
  { key: "views", label: "Views", icon: IconViewsSvg, width: 56, align: "center" },
  { key: "impressions", label: "Impr.", icon: IconImpressionsSvg, width: 56, align: "center" },
  { key: "reach", label: "Reach", icon: IconReachSvg, width: 56, align: "center" },
  // 行末操作菜单
  { key: "actions", label: "", width: 40, align: "center", stickyRight: true }
];

// src/client/views/RowActionMenu.jsx
var import_react4 = __toESM(require("react"), 1);
var import_dsh_client_ui_primitives2 = require("@deepseek-ai/dsh-client-ui-primitives");
var import_dsh_client_ui_primitives3 = require("@deepseek-ai/dsh-client-ui-primitives");
var import_jsx_runtime2 = require("react/jsx-runtime");
function RowActionMenu({ t, record, onView, onEdit, onDelete, onRetry }) {
  const [open, setOpen] = (0, import_react4.useState)(false);
  const [anchorEl, setAnchorEl] = (0, import_react4.useState)(null);
  const status = displayStatus(record);
  const isDraft = status === "draft" || record.status === "draft";
  const hasFailedTasks = Array.isArray(record.subtasks) && record.subtasks.some((st) => st.status === "failed");
  const isRetryable = status === "failed" || status === "partial_failed" || hasFailedTasks;
  const handleOpen = (e) => {
    e.stopPropagation();
    setAnchorEl(e.currentTarget);
    setOpen((prev) => !prev);
  };
  const handleClose = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setOpen(false);
  };
  const handleAction = (e, actionFn) => {
    e.stopPropagation();
    setOpen(false);
    if (typeof actionFn === "function") {
      actionFn(record);
    }
  };
  const items = [
    {
      key: "view",
      label: t("records.action.view"),
      onClick: (e) => handleAction(e, onView)
    },
    isDraft ? {
      key: "edit",
      label: t("records.action.edit"),
      onClick: (e) => handleAction(e, onEdit)
    } : null,
    isDraft ? {
      key: "delete",
      label: t("records.action.delete"),
      danger: true,
      onClick: (e) => handleAction(e, onDelete)
    } : null,
    isRetryable && !isDraft ? {
      key: "retry",
      label: t("records.action.retry"),
      onClick: (e) => handleAction(e, onRetry)
    } : null
  ].filter(Boolean);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-publish-row-menu-wrap", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      IconButton,
      {
        variant: "ghost",
        size: "sm",
        "aria-label": t("records.more"),
        onClick: handleOpen,
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.IconEllipsisOutline16, {})
      }
    ),
    open && anchorEl ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_dsh_client_ui_primitives3.Menu,
      {
        portal: true,
        anchorEl,
        align: "end",
        dense: true,
        items,
        onClose: handleClose
      }
    ) : null
  ] });
}

// src/client/views/RecordsTable.jsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function RecordsTable({
  t,
  records,
  selectedIds,
  onToggleSelect,
  onToggleAll,
  onView,
  onEdit,
  onDelete,
  onRetry,
  sortField,
  sortOrder,
  onSort
}) {
  const allSelected = records.length > 0 && records.every((r) => selectedIds.has(String(r.id)));
  if (!records || records.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "omnimux-publish-table-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("table", { className: "omnimux-publish-table", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("th", { className: "omnimux-publish-col-check" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("th", { className: "omnimux-publish-col-content", children: "Content" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("th", { className: "omnimux-publish-col-platforms", children: "Platforms" }),
        TABLE_COLUMNS.map((col) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("th", { style: { "--pub-min-w": col.minWidth ? `${col.minWidth}px` : void 0 }, children: col.label }, col.key)),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("th", { className: "omnimux-publish-col-menu" })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("tbody", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { colSpan: 14, className: "omnimux-publish-table-empty", children: t("records.empty.all") }) }) })
    ] }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "omnimux-publish-table-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("table", { className: "omnimux-publish-table", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("tr", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("th", { className: "omnimux-publish-col-check", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "input",
        {
          type: "checkbox",
          checked: allSelected,
          onChange: (e) => onToggleAll(e.target.checked),
          "aria-label": t("action.selectAll")
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("th", { className: "omnimux-publish-col-content", children: "Content" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("th", { className: "omnimux-publish-col-platforms", children: "Platforms" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
        "th",
        {
          className: "omnimux-publish-col-sort omnimux-publish-col-date",
          onClick: () => onSort("date"),
          children: [
            "Date ",
            sortField === "date" ? sortOrder === "asc" ? "\u2191" : "\u2193" : ""
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
        "th",
        {
          className: "omnimux-publish-col-sort omnimux-publish-col-status",
          onClick: () => onSort("status"),
          children: [
            "Status ",
            sortField === "status" ? sortOrder === "asc" ? "\u2191" : "\u2193" : ""
          ]
        }
      ),
      TABLE_COLUMNS.slice(5, 13).map((col) => {
        const IconComp = col.icon;
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "th",
          {
            className: "omnimux-publish-th-metric",
            title: col.label,
            children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "omnimux-publish-th-metric-inner", children: [
              IconComp ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(IconComp, {}) : null,
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: col.label })
            ] })
          },
          col.key
        );
      }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("th", { className: "omnimux-publish-col-menu" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("tbody", { children: records.map((record) => {
      const id = String(record.id);
      const isSelected = selectedIds.has(id);
      const status = displayStatus(record);
      const statusLabel = statusText(status);
      const isDraft = record.status === "draft" || status === "draft";
      const title = String(record.title || record.description || id);
      const isVideo = record.type === "video";
      const dateStr = record.submitted_at || record.updated_at || record.created_at || "-";
      const subtasks = Array.isArray(record.subtasks) ? record.subtasks : [];
      const platforms = isDraft ? ["draft"] : subtasks.map((st) => st.platform || "unknown");
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
        "tr",
        {
          className: isSelected ? "omnimux-publish-row selected" : "omnimux-publish-row",
          onClick: () => isDraft ? onEdit(record) : onView(record),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { className: "omnimux-publish-td-center", onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "input",
              {
                type: "checkbox",
                checked: isSelected,
                onChange: () => onToggleSelect(id),
                "aria-label": `Select ${title}`
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "omnimux-publish-td-content", children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "omnimux-publish-td-thumb", children: isVideo ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "omnimux-publish-type-icon", children: "\u{1F3AC}" }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "omnimux-publish-type-icon", children: "\u{1F5BC}" }) }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "omnimux-publish-td-title-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "omnimux-publish-td-title", title, children: title }) })
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "omnimux-publish-platforms-cluster", children: platforms.length > 0 ? platforms.map((p, idx) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: `omnimux-publish-plat-tag ${p}`, title: p, children: p === "tiktok" ? "\u{1F3B5}" : p === "xiaohongshu" || p === "xhs" ? "\u5C0F" : p === "wechat_channels" || p === "sph" ? "\u89C6" : p.slice(0, 1).toUpperCase() }, idx)) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "omnimux-publish-muted", children: "-" }) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { className: "omnimux-publish-td-datetime", children: dateStr.slice(0, 16).replace("T", " ") }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: `omnimux-publish-status-pill ${status}`, children: statusLabel }) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { className: "omnimux-publish-td-metric", children: formatMetric(record.likes) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { className: "omnimux-publish-td-metric", children: formatMetric(record.comments) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { className: "omnimux-publish-td-metric", children: formatMetric(record.shares) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { className: "omnimux-publish-td-metric", children: formatMetric(record.saves) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { className: "omnimux-publish-td-metric", children: formatMetric(record.clicks) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { className: "omnimux-publish-td-metric", children: formatMetric(record.views) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { className: "omnimux-publish-td-metric", children: formatMetric(record.impressions) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { className: "omnimux-publish-td-metric", children: formatMetric(record.reach) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("td", { className: "omnimux-publish-td-center", onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              RowActionMenu,
              {
                t,
                record,
                onView,
                onEdit,
                onDelete,
                onRetry
              }
            ) })
          ]
        },
        id
      );
    }) })
  ] }) });
}

// src/client/views/GridView.jsx
var import_react7 = __toESM(require("react"), 1);

// src/client/views/AssetCard.jsx
var import_react6 = __toESM(require("react"), 1);
var import_jsx_runtime4 = require("react/jsx-runtime");
function AssetCard({
  t,
  record,
  isSelected,
  isBatchMode,
  onToggleSelect,
  onOpen,
  onEdit,
  onDelete,
  onRetry
}) {
  const id = String(record.id);
  const status = displayStatus(record);
  const statusLabel = statusText(status);
  const isDraft = record.status === "draft" || status === "draft";
  const isVideo = record.type === "video";
  const title = String(record.title || record.description || id);
  const dateStr = record.submitted_at || record.updated_at || record.created_at || "-";
  const subtasks = Array.isArray(record.subtasks) ? record.subtasks : [];
  const platforms = isDraft ? ["draft"] : subtasks.map((st) => ({ platform: st.platform || "unknown", status: st.status }));
  const handleClick = () => {
    if (isBatchMode) {
      onToggleSelect(id);
    } else {
      if (isDraft) onEdit(record);
      else onOpen(record);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    "div",
    {
      className: `omnimux-publish-asset-card ${isSelected ? "selected" : ""}`,
      onClick: handleClick,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "omnimux-publish-card-cover", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "omnimux-publish-card-thumb-icon", children: isVideo ? "\u{1F3AC} \u89C6\u9891" : "\u{1F5BC} \u56FE\u6587" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "omnimux-publish-card-type-badge", children: isVideo ? t("type.video") : t("type.image") }),
          isBatchMode ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "omnimux-publish-card-checkbox", onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "input",
            {
              type: "checkbox",
              checked: isSelected,
              onChange: () => onToggleSelect(id),
              "aria-label": `Select ${title}`
            }
          ) }) : null
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "omnimux-publish-card-body", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "omnimux-publish-card-title-row", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "omnimux-publish-card-title", title, children: title }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { onClick: (e) => e.stopPropagation(), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              RowActionMenu,
              {
                t,
                record,
                onView: onOpen,
                onEdit,
                onDelete,
                onRetry
              }
            ) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "omnimux-publish-card-meta", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: dateStr.slice(0, 10) }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: subtasks.length > 0 ? `${subtasks.length} \u6E20\u9053` : "" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "omnimux-publish-card-footer", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "omnimux-publish-platforms-cluster", children: platforms.length > 0 ? platforms.map((pObj, idx) => {
              const p = typeof pObj === "string" ? pObj : pObj.platform;
              const st = typeof pObj === "string" ? "draft" : pObj.status;
              return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: `omnimux-publish-plat-tag ${p}`, title: `${p} (${st})`, children: [
                p === "tiktok" ? "\u{1F3B5}" : p === "xiaohongshu" || p === "xhs" ? "\u5C0F" : p === "wechat_channels" || p === "sph" ? "\u89C6" : p.slice(0, 1).toUpperCase(),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: `omnimux-publish-plat-dot ${st}` })
              ] }, idx);
            }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "omnimux-publish-muted", children: "-" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: `omnimux-publish-status-pill ${status}`, children: statusLabel })
          ] })
        ] })
      ]
    }
  );
}

// src/client/views/GridView.jsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function GridView({
  t,
  records,
  selectedIds,
  isBatchMode,
  onToggleSelect,
  onOpen,
  onEdit,
  onDelete,
  onRetry
}) {
  if (!records || records.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "omnimux-publish-empty-card", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "omnimux-publish-empty-title", children: t("records.empty.all") }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "omnimux-publish-empty-hint", children: t("records.empty.all.hint") })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "omnimux-publish-grid-container", children: records.map((record) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    AssetCard,
    {
      t,
      record,
      isSelected: selectedIds.has(String(record.id)),
      isBatchMode,
      onToggleSelect,
      onOpen,
      onEdit,
      onDelete,
      onRetry
    },
    String(record.id)
  )) });
}

// src/client/views/CalendarView.jsx
var import_react8 = __toESM(require("react"), 1);
var import_jsx_runtime6 = require("react/jsx-runtime");
function CalendarView({ t, records, onOpen }) {
  const [weekStart, setWeekStart] = (0, import_react8.useState)("sun");
  const [currentDate] = (0, import_react8.useState)(/* @__PURE__ */ new Date());
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const headers = weekStart === "sun" ? ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"] : ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const calendarRecords = (records || []).filter((r) => r.status !== "draft");
  const firstDayIndex = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const offset = weekStart === "sun" ? firstDayIndex : firstDayIndex === 0 ? 6 : firstDayIndex - 1;
  const days = [];
  for (let i = 0; i < offset; i++) {
    days.push({ day: null, isCurrentMonth: false });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    days.push({ day: d, isCurrentMonth: true });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "omnimux-publish-cal-wrap", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "omnimux-publish-cal-top", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "omnimux-publish-cal-month-label", children: [
        year,
        " \u5E74 ",
        month + 1,
        " \u6708"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "omnimux-publish-cal-controls", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "omnimux-publish-week-btn-group", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          Button,
          {
            variant: weekStart === "sun" ? "secondary" : "ghost",
            size: "xs",
            onClick: () => setWeekStart("sun"),
            children: "\u5468\u65E5"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          Button,
          {
            variant: weekStart === "mon" ? "secondary" : "ghost",
            size: "xs",
            onClick: () => setWeekStart("mon"),
            children: "\u5468\u4E00"
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "omnimux-publish-cal-grid", children: [
      headers.map((h) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "omnimux-publish-cal-head-cell", children: h }, h)),
      days.map((item, idx) => {
        if (!item.isCurrentMonth) {
          return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "omnimux-publish-cal-cell other-month" }, idx);
        }
        const d = item.day;
        const dayRecords = calendarRecords.filter((r) => {
          const dateStr = r.submitted_at || r.created_at || "";
          if (!dateStr) return false;
          const dObj = new Date(dateStr);
          return dObj.getDate() === d && dObj.getMonth() === month && dObj.getFullYear() === year;
        });
        return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "omnimux-publish-cal-cell", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "omnimux-publish-cal-date-num", children: d }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "omnimux-publish-cal-tasks", children: [
            dayRecords.slice(0, 2).map((rec) => {
              const status = displayStatus(rec);
              const label = statusText(status);
              const title = String(rec.title || rec.description || rec.id);
              return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                "div",
                {
                  className: `omnimux-publish-cal-pill ${status}`,
                  title: `${label} \xB7 ${title}`,
                  onClick: () => onOpen(rec),
                  children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "omnimux-publish-cal-pill-title", children: title })
                },
                String(rec.id)
              );
            }),
            dayRecords.length > 2 ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: "omnimux-publish-cal-more", children: [
              "+",
              dayRecords.length - 2,
              " \u66F4\u591A"
            ] }) : null
          ] })
        ] }, idx);
      })
    ] })
  ] });
}

// src/client/RecordDetail.jsx
var import_react9 = require("react");
var import_dsh_client_ui_primitives4 = require("@deepseek-ai/dsh-client-ui-primitives");
var import_jsx_runtime7 = require("react/jsx-runtime");
function RecordDetail({ t, recordId, onBack, onChanged }) {
  const [record, setRecord] = (0, import_react9.useState)(null);
  const [error, setError] = (0, import_react9.useState)("");
  const [busy, setBusy] = (0, import_react9.useState)("");
  const load = (0, import_react9.useCallback)(() => {
    setBusy("load");
    return recordDetail(recordId).then((result) => {
      if (result.ok && result.body && result.body.record) {
        setRecord(result.body.record);
        setError("");
      } else {
        setError(String(result.body?.error || `HTTP ${result.status}`));
      }
      setBusy("");
      return true;
    }).catch((caught) => {
      setError(caught instanceof Error ? caught.message : String(caught));
      setBusy("");
      return false;
    });
  }, [recordId]);
  (0, import_react9.useEffect)(() => {
    void load();
  }, [load]);
  const refresh = (0, import_react9.useCallback)(() => {
    setBusy("refresh");
    return refreshRecord(recordId).then((result) => {
      if (result.ok && result.body && result.body.record) {
        setRecord(result.body.record);
        const syncErrors = Array.isArray(result.body.sync_errors) ? result.body.sync_errors : [];
        setError(syncErrors.length > 0 ? t("detail.syncError", { reason: syncErrors[0].error }) : "");
      } else {
        setError(String(result.body?.error || `HTTP ${result.status}`));
      }
      setBusy("");
      onChanged();
      return true;
    }).catch((caught) => {
      setError(caught instanceof Error ? caught.message : String(caught));
      setBusy("");
      return false;
    });
  }, [recordId, t, onChanged]);
  const retry = (0, import_react9.useCallback)((taskId) => {
    setBusy(taskId);
    return retryTask(taskId).then((result) => {
      if (result.ok && result.body && result.body.record) {
        setRecord(result.body.record);
        setError("");
      } else {
        setError(String(result.body?.error || `HTTP ${result.status}`));
      }
      setBusy("");
      onChanged();
      return true;
    }).catch((caught) => {
      setError(caught instanceof Error ? caught.message : String(caught));
      setBusy("");
      return false;
    });
  }, [onChanged]);
  if (!record) {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Button, { variant: "ghost", size: "sm", leadingIcon: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_dsh_client_ui_primitives4.IconChevronLeftOutline14, {}), onClick: onBack, children: t("detail.back") }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "omnimux-publish-muted", children: error || t("loading") })
    ] });
  }
  const tasks = Array.isArray(record.subtasks) ? record.subtasks : [];
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "omnimux-publish-detail-head", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Button, { variant: "ghost", size: "sm", leadingIcon: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_dsh_client_ui_primitives4.IconChevronLeftOutline14, {}), onClick: onBack, children: t("detail.back") }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("strong", { className: "omnimux-publish-detail-title", children: String(record.title || record.description || "(untitled)") }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        Button,
        {
          variant: "outline",
          size: "sm",
          leadingIcon: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_dsh_client_ui_primitives4.IconRefreshOutline16, {}),
          loading: busy === "refresh",
          onClick: () => {
            void refresh();
          },
          children: t("detail.refresh")
        }
      )
    ] }),
    error ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { role: "alert", className: "omnimux-publish-alert warn", children: error }) : null,
    record.error ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { role: "alert", className: "omnimux-publish-alert banner", children: String(record.error) }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "omnimux-publish-section", children: t("detail.subtasks") }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "omnimux-publish-tasks", children: [
      tasks.map((task) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SubtaskRow, { t, task, busy, onRetry: retry }, String(task.id))),
      tasks.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "omnimux-publish-hint", children: "\u2014" }) : null
    ] })
  ] });
}
function SubtaskRow({ t, task, busy, onRetry }) {
  const status = String(task.status || "");
  const platformKey = `platform.${String(task.platform || "")}`;
  const platformLabel = t(platformKey) !== platformKey ? t(platformKey) : String(task.platform || "");
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "omnimux-publish-task", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "omnimux-publish-task-row", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: platformLabel }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "omnimux-publish-dot", children: "\xB7" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: String(task.account_id) }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "omnimux-publish-task-status", "data-status": status, children: t(`task.${status}`) })
    ] }),
    task.post_id ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "omnimux-publish-task-meta", children: t("task.post", { id: String(task.post_id) }) }) : null,
    task.raw_status ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "omnimux-publish-task-meta", children: t("task.rawStatus", { status: String(task.raw_status) }) }) : null,
    Number(task.attempts) > 1 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "omnimux-publish-task-meta", children: t("task.attempts", { count: Number(task.attempts) }) }) : null,
    task.error ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "omnimux-publish-task-err", children: String(task.error) }) : null,
    status === "failed" ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      Button,
      {
        type: "button",
        size: "sm",
        variant: "danger",
        loading: busy === String(task.id),
        onClick: () => {
          onRetry(String(task.id));
        },
        children: t("task.retry")
      }
    ) }) : null
  ] });
}

// src/client/Composer/index.jsx
var import_react11 = require("react");
var import_dsh_client_ui_primitives5 = require("@deepseek-ai/dsh-client-ui-primitives");

// src/client/capabilities.js
function platformRow(platforms, platform) {
  const key = String(platform || "").toLowerCase();
  const row = platforms && typeof platforms === "object" ? platforms[key] : void 0;
  return row && typeof row === "object" ? (
    /** @type {Record<string, unknown>} */
    row
  ) : {};
}
function supportsType(platforms, platform, type) {
  const row = platformRow(platforms, platform);
  const mediaTypes = Array.isArray(row.media_types) ? row.media_types : null;
  if (mediaTypes === null) return true;
  return mediaTypes.includes(type);
}
function coverDecision(platforms, platformsOfSelected) {
  const seen = [...new Set((platformsOfSelected || []).map((p) => String(p || "").toLowerCase()))];
  const blocked = seen.filter((p) => platformRow(platforms, p).supports_cover !== true);
  return { enabled: blocked.length === 0, blockedPlatforms: blocked };
}
function imageLimit(platforms, platformsOfSelected) {
  const seen = [...new Set((platformsOfSelected || []).map((p) => String(p || "").toLowerCase()))];
  const limits = seen.map((p) => platformRow(platforms, p).max_images).filter((v) => typeof v === "number" && v > 0);
  return limits.length > 0 ? Math.min(...limits) : void 0;
}
function formCapabilities(input) {
  const platforms = input.platforms || {};
  const selected = Array.isArray(input.selectedAccounts) ? input.selectedAccounts : [];
  const platformsOfSelected = selected.map((row) => String(row.platform || "").toLowerCase());
  const cover = coverDecision(platforms, platformsOfSelected);
  const limit = input.type === "image" ? imageLimit(platforms, platformsOfSelected) : void 0;
  const imageCount = typeof input.imageCount === "number" ? input.imageCount : 0;
  return {
    cover,
    imageLimit: limit,
    imageOverLimit: typeof limit === "number" && imageCount > limit,
    // 类型冲突：所选账号的平台里有不支持当前内容类型的
    typeConflicts: [...new Set(platformsOfSelected)].filter((p) => !supportsType(platforms, p, input.type))
  };
}
function accountUsable(row) {
  const status = String(row.status || "").toLowerCase();
  if (status === "expired") return { ok: false, reason: "expired" };
  if (status && status !== "active" && status !== "expiring") return { ok: false, reason: "error" };
  if (row.agent_usable === false) return { ok: false, reason: "agentOff" };
  return { ok: true, reason: "" };
}
function groupAccountsByPlatform(rows) {
  const byPlatform = /* @__PURE__ */ new Map();
  for (const row of Array.isArray(rows) ? rows : []) {
    const platform = String(row.platform || "").toLowerCase() || "other";
    if (!byPlatform.has(platform)) byPlatform.set(platform, []);
    byPlatform.get(platform).push(row);
  }
  return [...byPlatform.entries()].map(([platform, accounts]) => ({
    platform,
    accounts: accounts.map((row) => {
      const verdict = accountUsable(row);
      return { ...row, usable: verdict.ok, unusableReason: verdict.reason };
    })
  })).sort((a, b) => a.platform.localeCompare(b.platform));
}
function parseTopics(raw) {
  return String(raw || "").split(/[\s,，]+/).map((item) => item.replace(/^#/, "").trim()).filter((item) => item !== "");
}

// src/client/AccountPanel.jsx
var import_react10 = require("react");
var import_jsx_runtime8 = require("react/jsx-runtime");
function AccountPanel({ t, selectedIds, onChange }) {
  const [phase, setPhase] = (0, import_react10.useState)("loading");
  const [rows, setRows] = (0, import_react10.useState)([]);
  const [error, setError] = (0, import_react10.useState)("");
  (0, import_react10.useEffect)(() => {
    let disposed = false;
    listHubAccounts().then((result) => {
      if (disposed) return;
      if (result.ok && result.body && Array.isArray(result.body.accounts)) {
        setRows(result.body.accounts);
        setPhase("ready");
        setError("");
        return;
      }
      if (result.status === 401 || result.status === 403 || /needs-omnimux/.test(String(result.body?.error || ""))) {
        setPhase("need-login");
        return;
      }
      setPhase("ready");
      setError(String(result.body?.error || `HTTP ${result.status}`));
    }).catch((caught) => {
      if (disposed) return;
      setPhase("ready");
      setError(caught instanceof Error ? caught.message : String(caught));
    });
    return () => {
      disposed = true;
    };
  }, []);
  const groups = groupAccountsByPlatform(rows);
  const selected = new Set(selectedIds);
  const toggleAccount = (id, checked) => {
    const next = new Set(selected);
    if (checked) next.add(id);
    else next.delete(id);
    const selectedRows = rows.filter((row) => next.has(String(row.id)));
    onChange([...next], selectedRows);
  };
  const togglePlatform = (platform, checked) => {
    const group = groups.find((g) => g.platform === platform);
    if (!group) return;
    const next = new Set(selected);
    for (const account of group.accounts) {
      const id = String(account.id);
      if (checked && account.usable) next.add(id);
      else if (!checked) next.delete(id);
    }
    const selectedRows = rows.filter((row) => next.has(String(row.id)));
    onChange([...next], selectedRows);
  };
  if (phase === "loading") {
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("aside", { className: "omnimux-publish-accounts", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "omnimux-publish-accounts-title", children: t("accounts.title") }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "omnimux-publish-accounts-muted", children: t("accounts.loading") })
    ] });
  }
  if (phase === "need-login") {
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("aside", { className: "omnimux-publish-accounts", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "omnimux-publish-accounts-title", children: t("accounts.title") }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "omnimux-publish-accounts-stack", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { children: t("accounts.needLogin") }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "omnimux-publish-accounts-muted", children: t("accounts.needLogin.hint") })
      ] })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("aside", { className: "omnimux-publish-accounts", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "omnimux-publish-accounts-title", children: t("accounts.title") }),
    error ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { role: "alert", className: "omnimux-publish-accounts-alert", children: error }) : null,
    groups.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "omnimux-publish-accounts-stack", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { children: t("accounts.empty") }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "omnimux-publish-accounts-muted", children: t("accounts.empty.hint") })
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "omnimux-publish-accounts-groups", children: groups.map((group) => {
      const usableIds = group.accounts.filter((a) => a.usable).map((a) => String(a.id));
      const allChecked = usableIds.length > 0 && usableIds.every((id) => selected.has(id));
      const someChecked = usableIds.some((id) => selected.has(id));
      const platformLabel = t(`platform.${group.platform}`) !== `platform.${group.platform}` ? t(`platform.${group.platform}`) : group.platform;
      return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("label", { className: "omnimux-publish-accounts-group-label", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "input",
            {
              type: "checkbox",
              checked: allChecked,
              ref: (node) => {
                if (node) node.indeterminate = !allChecked && someChecked;
              },
              onChange: (event) => {
                togglePlatform(group.platform, event.currentTarget.checked);
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "omnimux-publish-accounts-platform", children: platformLabel })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "omnimux-publish-accounts-list", children: group.accounts.map((account) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          AccountRow,
          {
            t,
            account,
            checked: selected.has(String(account.id)),
            onToggle: (checked) => {
              toggleAccount(String(account.id), checked);
            }
          },
          String(account.id)
        )) })
      ] }, group.platform);
    }) }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "omnimux-publish-accounts-foot", children: t("accounts.selected", { count: selected.size }) })
  ] });
}
function AccountRow({ t, account, checked, onToggle }) {
  const name2 = String(account.display_name || account.username || account.name || account.id);
  const rowClass = account.usable ? "omnimux-publish-accounts-row" : "omnimux-publish-accounts-row is-disabled";
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("label", { className: rowClass, children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      "input",
      {
        type: "checkbox",
        checked,
        disabled: !account.usable,
        onChange: (event) => {
          onToggle(event.currentTarget.checked);
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "omnimux-publish-accounts-name", children: name2 }),
    account.usable ? null : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "omnimux-publish-accounts-unavail", children: t("accounts.unavailable", { reason: t(`accounts.reason.${account.unusableReason}`) }) })
  ] });
}

// src/client/Composer/index.jsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function Composer({ t, draftId, onBack, onSubmitted, onSaved }) {
  const [editingId, setEditingId] = (0, import_react11.useState)(draftId || "");
  const [type, setType] = (0, import_react11.useState)("");
  const [title, setTitle] = (0, import_react11.useState)("");
  const [description, setDescription] = (0, import_react11.useState)("");
  const [topicsRaw, setTopicsRaw] = (0, import_react11.useState)("");
  const [mediaList, setMediaList] = (0, import_react11.useState)([]);
  const [coverMediaId, setCoverMediaId] = (0, import_react11.useState)("");
  const [accountIds, setAccountIds] = (0, import_react11.useState)([]);
  const [accountRows, setAccountRows] = (0, import_react11.useState)([]);
  const [platforms, setPlatforms] = (0, import_react11.useState)({});
  const [error, setError] = (0, import_react11.useState)("");
  const [notice, setNotice] = (0, import_react11.useState)("");
  const [busy, setBusy] = (0, import_react11.useState)(false);
  const [uploading, setUploading] = (0, import_react11.useState)(false);
  const fileInputRef = (0, import_react11.useRef)(null);
  (0, import_react11.useEffect)(() => {
    let disposed = false;
    getCapabilities().then((result) => {
      if (!disposed && result.ok && result.body && result.body.platforms) setPlatforms(result.body.platforms);
    }).catch(() => {
    });
    return () => {
      disposed = true;
    };
  }, []);
  (0, import_react11.useEffect)(() => {
    if (!draftId) return;
    let disposed = false;
    recordDetail(draftId).then((result) => {
      if (disposed) return;
      const record = result.ok && result.body ? result.body.record : null;
      if (!record) {
        setError(errorText(result.body, result.status));
        return;
      }
      setType(String(record.type || ""));
      setTitle(String(record.title || ""));
      setDescription(String(record.description || ""));
      setTopicsRaw(Array.isArray(record.topics) ? record.topics.join(" ") : "");
      const mediaRows = Array.isArray(result.body.media) ? result.body.media : [];
      setMediaList(mediaRows.map((row) => ({ id: String(row.id), kind: String(row.kind || "image"), filename: String(row.filename || "") })));
      setCoverMediaId(record.cover_media_id ? String(record.cover_media_id) : "");
      setAccountIds((Array.isArray(record.account_ids) ? record.account_ids : []).map(String));
    }).catch((caught) => {
      setError(caught instanceof Error ? caught.message : String(caught));
    });
    return () => {
      disposed = true;
    };
  }, [draftId]);
  const images = mediaList.filter((m) => m.kind === "image");
  const videos = mediaList.filter((m) => m.kind === "video");
  const caps = formCapabilities({
    platforms,
    selectedAccounts: accountRows,
    type: type || "image",
    imageCount: images.length
  });
  const handleFiles = (0, import_react11.useCallback)(async (files) => {
    const list = Array.from(files || []);
    if (list.length === 0) return;
    setUploading(true);
    setError("");
    for (const file of list) {
      try {
        const result = await uploadMedia(file);
        if (result.ok && result.body && result.body.media) {
          const media = result.body.media;
          setMediaList((prev) => [...prev, { id: String(media.id), kind: String(media.kind), filename: String(media.filename) }]);
        } else {
          setError(t("form.uploadFailed", { reason: errorText(result.body, result.status) }));
        }
      } catch (caught) {
        setError(t("form.uploadFailed", { reason: caught instanceof Error ? caught.message : String(caught) }));
      }
    }
    setUploading(false);
  }, [t]);
  const buildPayload = (0, import_react11.useCallback)(() => {
    const payload = {
      title,
      description,
      topics: parseTopics(topicsRaw),
      media: mediaList.map((m) => ({ media_id: m.id }))
    };
    if (type === "image" && coverMediaId) payload.cover = { media_id: coverMediaId };
    return payload;
  }, [title, description, topicsRaw, mediaList, coverMediaId, type]);
  const persistDraft = (0, import_react11.useCallback)(async (opts = {}) => {
    setBusy(true);
    setError("");
    setNotice("");
    try {
      let id = editingId;
      const payload = opts.withAccounts !== false ? { ...buildPayload(), account_ids: accountIds } : buildPayload();
      if (!id) {
        const result = await createDraft(type, payload);
        if (!result.ok || !result.body || !result.body.record) {
          throw new PublishUiError(errorText(result.body, result.status), result.body);
        }
        id = String(result.body.record.id);
        setEditingId(id);
      } else {
        const result = await updateDraft(id, payload);
        if (!result.ok) throw new PublishUiError(errorText(result.body, result.status), result.body);
      }
      setNotice(t("form.saved"));
      onSaved();
      return id;
    } catch (caught) {
      setError(describeError(caught, t));
      return null;
    } finally {
      setBusy(false);
    }
  }, [editingId, buildPayload, type, accountIds, t, onSaved]);
  const handleSubmit = (0, import_react11.useCallback)(async () => {
    if (accountIds.length === 0) {
      setError(t("form.submitNoAccounts"));
      return;
    }
    const id = await persistDraft({ withAccounts: true });
    if (!id) return;
    setBusy(true);
    try {
      const result = await submitRecord(id);
      if (!result.ok) throw new PublishUiError(errorText(result.body, result.status), result.body);
      onSubmitted(id);
    } catch (caught) {
      setError(describeError(caught, t));
    } finally {
      setBusy(false);
    }
  }, [accountIds.length, persistDraft, onSubmitted, t]);
  if (!type) {
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button, { variant: "ghost", size: "sm", leadingIcon: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_dsh_client_ui_primitives5.IconChevronLeftOutline14, {}), onClick: onBack, children: t("form.back") }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "omnimux-publish-type-pick", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "omnimux-publish-type-title", children: t("type.title") }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "omnimux-publish-type-row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(TypeCard, { t, value: "video", onPick: setType }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(TypeCard, { t, value: "image", onPick: setType })
        ] })
      ] })
    ] });
  }
  const coverBlocked = type === "image" && !caps.cover.enabled;
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "omnimux-publish-composer", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      AccountPanel,
      {
        t,
        selectedIds: accountIds,
        onChange: (ids, rows) => {
          setAccountIds(ids);
          setAccountRows(rows);
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "omnimux-publish-form", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        Toolbar,
        {
          compact: true,
          left: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button, { variant: "ghost", size: "sm", leadingIcon: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_dsh_client_ui_primitives5.IconChevronLeftOutline14, {}), onClick: onBack, children: t("form.back") }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: t(`type.${type}`) }),
            editingId ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "omnimux-publish-lock", children: t("type.locked") }) : null
          ] }),
          right: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_jsx_runtime9.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button, { variant: "secondary", size: "sm", disabled: uploading, loading: busy, onClick: () => {
              void persistDraft();
            }, children: t("form.saveDraft") }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Button, { variant: "primary", size: "sm", disabled: uploading, loading: busy, onClick: () => {
              void handleSubmit();
            }, children: busy ? t("form.submitting") : t("form.submit") })
          ] })
        }
      ),
      error ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { role: "alert", className: "omnimux-publish-alert error", children: error }) : null,
      notice ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { role: "status", className: "omnimux-publish-alert ok", children: notice }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        InputField,
        {
          label: t("form.title"),
          value: title,
          placeholder: t("form.titlePlaceholder"),
          onChange: (event) => {
            setTitle(event.currentTarget.value);
          }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("label", { className: "omnimux-publish-field", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "omnimux-publish-label", children: t("form.description") }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          "textarea",
          {
            value: description,
            placeholder: t("form.descriptionPlaceholder"),
            rows: 4,
            className: "omnimux-publish-textarea",
            onChange: (event) => {
              setDescription(event.currentTarget.value);
            }
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        InputField,
        {
          label: t("form.topics"),
          value: topicsRaw,
          placeholder: t("form.topicsPlaceholder"),
          onChange: (event) => {
            setTopicsRaw(event.currentTarget.value);
          }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "omnimux-publish-field", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "omnimux-publish-label", children: t("form.media") }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "omnimux-publish-media", children: [
          mediaList.map((media) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "omnimux-publish-media-item", children: [
            media.kind === "image" ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("img", { src: mediaContentUrl(media.id), alt: media.filename, className: "omnimux-publish-thumb" }) : /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "omnimux-publish-thumb", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_dsh_client_ui_primitives5.IconPlayOutline16, { size: 20 }) }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "omnimux-publish-media-actions", children: [
              type === "image" && media.kind === "image" ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                Button,
                {
                  type: "button",
                  size: "xs",
                  variant: coverMediaId === media.id ? "secondary" : "ghost",
                  disabled: coverBlocked,
                  leadingIcon: coverMediaId === media.id ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_dsh_client_ui_primitives5.IconCheckOutline16, { size: 14 }) : void 0,
                  onClick: () => {
                    setCoverMediaId(media.id);
                  },
                  children: coverMediaId === media.id ? t("form.cover") : t("form.setCover")
                }
              ) : null,
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
                Button,
                {
                  type: "button",
                  size: "xs",
                  variant: "ghost",
                  leadingIcon: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_dsh_client_ui_primitives5.IconTrashOutline16, { size: 14 }),
                  onClick: () => {
                    setMediaList((prev) => prev.filter((m) => m.id !== media.id));
                    if (coverMediaId === media.id) setCoverMediaId("");
                  },
                  children: t("form.remove")
                }
              )
            ] })
          ] }, media.id)),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            Button,
            {
              type: "button",
              variant: "outline",
              className: "omnimux-publish-add-media",
              disabled: uploading,
              loading: uploading,
              leadingIcon: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_dsh_client_ui_primitives5.IconPlusOutline16, {}),
              onClick: () => {
                if (fileInputRef.current) fileInputRef.current.click();
              },
              children: type === "video" ? t("form.addMedia.video") : t("form.addMedia.image")
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            "input",
            {
              ref: fileInputRef,
              type: "file",
              multiple: type === "image",
              accept: type === "video" ? "video/*" : "image/*",
              hidden: true,
              onChange: (event) => {
                void handleFiles(event.currentTarget.files);
                event.currentTarget.value = "";
              }
            }
          )
        ] }),
        type === "video" && videos.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Hint, { text: t("form.needVideo") }) : null,
        type === "image" && images.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Hint, { text: t("form.needImage") }) : null,
        type === "image" && typeof caps.imageLimit === "number" ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Hint, { text: caps.imageOverLimit ? t("form.imageOverLimit", { count: images.length, max: caps.imageLimit }) : t("form.imageLimit", { count: caps.imageLimit }), tone: caps.imageOverLimit ? "warn" : "muted" }) : null,
        caps.typeConflicts.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Hint, { text: `${caps.typeConflicts.join(", ")} \xD7 ${t(`type.${type}`)}`, tone: "warn" }) : null
      ] }),
      type === "image" ? /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: coverBlocked ? "omnimux-publish-field dim" : "omnimux-publish-field", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "omnimux-publish-label", children: t("form.cover") }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "omnimux-publish-cover-row", children: [
          coverMediaId ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("img", { src: mediaContentUrl(coverMediaId), alt: "", className: "omnimux-publish-thumb sm" }) : /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "omnimux-publish-thumb sm", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_dsh_client_ui_primitives5.IconPaperclipOutline16, { size: 18 }) }),
          coverBlocked ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "omnimux-publish-cover-note", children: t("form.coverDisabled", { platforms: caps.cover.blockedPlatforms.join(", ") }) }) : /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "omnimux-publish-cover-note", children: coverMediaId ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_dsh_client_ui_primitives5.IconCheckOutline16, { size: 14 }) : "\u2014" })
        ] })
      ] }) : null
    ] })
  ] });
}
var PublishUiError = class extends Error {
  /**
   * @param {string} message
   * @param {unknown} body
   */
  constructor(message, body) {
    super(message);
    this.body = body;
  }
};
function describeError(caught, t) {
  const body = caught instanceof PublishUiError ? caught.body : null;
  const details = body && typeof body === "object" && Array.isArray(
    /** @type {any} */
    body.details?.errors
  ) ? (
    /** @type {any} */
    body.details.errors
  ) : null;
  if (details && details.length > 0) {
    return `${t("form.submitBlocked", { reason: "" })}${details.map((e) => String(e.message || e.code || "")).join("\n")}`;
  }
  return caught instanceof Error ? caught.message : String(caught);
}
function TypeCard({ t, value, onPick }) {
  const Icon = value === "video" ? import_dsh_client_ui_primitives5.IconPlayOutline16 : import_dsh_client_ui_primitives5.IconPaperclipOutline16;
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
    Button,
    {
      type: "button",
      variant: "outline",
      className: "omnimux-publish-type-card",
      onClick: () => {
        onPick(value);
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "omnimux-publish-type-icon", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Icon, { size: 20 }) }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "omnimux-publish-type-name", children: t(`type.${value}`) }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "omnimux-publish-type-hint", children: t(`type.${value}.hint`) })
      ]
    }
  );
}
function Hint({ text, tone = "muted" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: tone === "warn" ? "omnimux-publish-hint warn" : "omnimux-publish-hint", children: text });
}

// src/client/styles.js
var CSS_ID = "omnimux-publish-styles";
var CSS = `
.omnimux-publish-stage {
  position: fixed;
  z-index: 200;
  top: var(--stage-top);
  left: var(--stage-left);
  width: var(--stage-width);
  height: var(--stage-height);
  display: flex;
  flex-direction: column;
  background: var(--dsw-alias-bg-base, #ffffff);
  color: var(--dsw-alias-label-primary, #0f172a);
  overflow: auto;
  pointer-events: auto;
  -webkit-app-region: no-drag;
}
.omnimux-publish-stage[data-visible="false"] {
  display: none;
  pointer-events: none;
}

/* Layer 2: Action Row (8px 20px 14px) */
.omnimux-publish-action-row {
  flex: none;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 20px 14px;
  background: var(--dsw-alias-bg-base, #ffffff);
}

/* Layer 3: Control Bar (Single FilterBar, 44px, 0 20px 12px) */
.omnimux-publish-control-bar {
  flex: none;
  padding: 0 20px 12px;
  background: var(--dsw-alias-bg-base, #ffffff);
}
.omnimux-publish-tab-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 4px;
  margin-left: 6px;
  font-size: 11px;
  font-weight: 600;
  color: var(--dsw-alias-label-secondary, #64748b);
  background: var(--dsw-alias-bg-layer-2, #f8fafc);
  border-radius: 9999px;
  border: 1px solid var(--dsw-alias-border-l1, #e2e8f0);
}
.omnimux-publish-tab-badge.retry {
  color: var(--dsw-alias-state-error, #ef4444);
}

/* Layer 4: Content Viewport (padding: 16px; gap: 16px) */
.omnimux-publish-viewport {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
  overflow: auto;
}

/* Batch Action Bar */
.omnimux-publish-batch-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background: var(--dsw-alias-brand-subtle, rgba(15, 23, 42, 0.06));
  border: 1px solid var(--dsw-alias-brand-border, rgba(15, 23, 42, 0.15));
  border-radius: 8px;
  font-size: 13px;
}
.omnimux-publish-batch-actions { display: flex; gap: 8px; }
.omnimux-publish-view-switcher { display: flex; gap: 2px; }

/* Layer 5 Overlay Subscreen (Composer & Detail full-screen) */
.omnimux-publish-subscreen {
  position: fixed;
  inset: 0;
  z-index: 300;
  background: var(--dsw-alias-bg-base, #ffffff);
  display: flex;
  flex-direction: column;
}

/* 14-Column Table View */
.omnimux-publish-table-wrap {
  width: 100%;
  overflow-x: auto;
  border: 1px solid var(--dsw-alias-border-l1, #e2e8f0);
  border-radius: 8px;
  background: var(--dsw-alias-bg-base, #ffffff);
}
.omnimux-publish-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  text-align: left;
}
.omnimux-publish-table th {
  padding: 10px 12px;
  font-size: 12px;
  font-weight: 600;
  color: var(--dsw-alias-label-tertiary, #94a3b8);
  border-bottom: 1px solid var(--dsw-alias-border-l1, #e2e8f0);
  background: var(--dsw-alias-bg-layer-2, #f8fafc);
  white-space: nowrap;
  user-select: none;
}
.omnimux-publish-th-metric {
  width: 56px;
  text-align: center;
  padding: 8px 4px;
}
.omnimux-publish-th-metric-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  font-size: 11px;
}
.omnimux-publish-table td {
  padding: 10px 12px;
  border-bottom: 1px solid var(--dsw-alias-border-l1, #e2e8f0);
  color: var(--dsw-alias-label-secondary, #64748b);
  vertical-align: middle;
}
.omnimux-publish-row {
  cursor: pointer;
  transition: background-color 0.15s ease;
}
.omnimux-publish-row:hover td {
  background: var(--dsw-alias-interactive-bg-hover, rgba(0, 0, 0, 0.04));
}
.omnimux-publish-row.selected td {
  background: var(--dsw-alias-brand-subtle, rgba(15, 23, 42, 0.06));
}
/* Column layout classes (UI02: no business inline styles in table JSX) */
.omnimux-publish-col-check { width: 32px; text-align: center; }
.omnimux-publish-col-content { min-width: 240px; text-align: left; }
.omnimux-publish-col-platforms { min-width: 100px; text-align: left; }
.omnimux-publish-col-date { width: 140px; text-align: left; cursor: pointer; }
.omnimux-publish-col-status { width: 100px; text-align: left; cursor: pointer; }
.omnimux-publish-col-menu { width: 40px; text-align: center; }
.omnimux-publish-col-sort:hover { color: var(--dsw-alias-label-secondary, #64748b); }
th[style*="--pub-min-w"] { min-width: var(--pub-min-w); }
.omnimux-publish-td-center { text-align: center; }
.omnimux-publish-td-datetime { white-space: nowrap; font-size: 12px; }
.omnimux-publish-td-metric {
  text-align: center;
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  color: var(--dsw-alias-label-tertiary, #94a3b8);
  width: 56px;
}
.omnimux-publish-td-content {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 240px;
}
.omnimux-publish-td-thumb {
  width: 36px;
  height: 36px;
  border-radius: 6px;
  background: var(--dsw-alias-thumb-bg, #475569);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  flex-shrink: 0;
  color: #ffffff;
}
.omnimux-publish-td-title-wrap {
  flex: 1;
  min-width: 0;
}
.omnimux-publish-td-title {
  font-weight: 500;
  color: var(--dsw-alias-label-primary, #0f172a);
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.omnimux-publish-table-empty {
  text-align: center;
  padding: 48px 0;
  color: var(--dsw-alias-label-tertiary, #94a3b8);
}

/* Status Pills */
.omnimux-publish-status-pill {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
  white-space: nowrap;
}
.omnimux-publish-status-pill.draft {
  background: var(--dsw-alias-state-draft-subtle, rgba(100, 116, 139, 0.12));
  color: var(--dsw-alias-label-secondary, #64748b);
}
.omnimux-publish-status-pill.publishing {
  background: var(--dsw-alias-state-publishing-subtle, rgba(37, 99, 235, 0.12));
  color: var(--dsw-alias-state-publishing, #2563eb);
}
.omnimux-publish-status-pill.reviewing {
  background: var(--dsw-alias-state-warn-subtle, rgba(245, 158, 11, 0.12));
  color: var(--dsw-alias-state-warn-text, #d97706);
}
.omnimux-publish-status-pill.published {
  background: var(--dsw-alias-state-success-subtle, rgba(16, 185, 129, 0.12));
  color: var(--dsw-alias-state-success-text, #059669);
}
.omnimux-publish-status-pill.partial_failed {
  background: var(--dsw-alias-state-partial-subtle, rgba(234, 88, 12, 0.12));
  color: var(--dsw-alias-state-partial-text, #c2410c);
}
.omnimux-publish-status-pill.failed {
  background: var(--dsw-alias-state-error-subtle, rgba(239, 68, 68, 0.12));
  color: var(--dsw-alias-state-error-text, #dc2626);
}

/* Platform Cluster & Tags */
.omnimux-publish-platforms-cluster {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.omnimux-publish-plat-tag {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 700;
  color: #ffffff;
}
.omnimux-publish-plat-tag.tiktok { background: var(--dsw-alias-platform-tiktok, #000000); }
.omnimux-publish-plat-tag.xiaohongshu, .omnimux-publish-plat-tag.xhs { background: var(--dsw-alias-platform-xhs, #ff2442); }
.omnimux-publish-plat-tag.wechat_channels, .omnimux-publish-plat-tag.sph { background: var(--dsw-alias-platform-sph, #fa9d3b); }
.omnimux-publish-plat-tag.draft { background: var(--dsw-alias-thumb-bg, #475569); }

.omnimux-publish-plat-dot {
  position: absolute;
  top: -2px;
  right: -2px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: 1px solid var(--dsw-alias-bg-base, #ffffff);
}
.omnimux-publish-plat-dot.published { background: var(--dsw-alias-state-success, #10b981); }
.omnimux-publish-plat-dot.failed { background: var(--dsw-alias-state-error, #ef4444); }
.omnimux-publish-plat-dot.reviewing { background: var(--dsw-alias-state-warn, #f59e0b); }
.omnimux-publish-plat-dot.publishing { background: var(--dsw-alias-state-publishing, #2563eb); }

/* Grid View & 112px AssetCard */
.omnimux-publish-grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 12px;
}
.omnimux-publish-asset-card {
  background: var(--dsw-alias-bg-base, #ffffff);
  border: 1px solid var(--dsw-alias-border-l1, #e2e8f0);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
}
.omnimux-publish-asset-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--dsw-shadow-lv2, 0 4px 6px rgba(0,0,0,0.08));
  border-color: var(--dsw-alias-border-l2, #cbd5e1);
}
.omnimux-publish-card-cover {
  width: 100%;
  height: 112px;
  background: var(--dsw-alias-thumb-bg, #475569);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
}
.omnimux-publish-card-thumb-icon {
  font-size: 14px;
  font-weight: 500;
  opacity: 0.9;
}
.omnimux-publish-card-type-badge {
  position: absolute;
  top: 6px;
  right: 6px;
  background: var(--dsw-alias-backdrop-bg, rgba(0,0,0,0.65));
  color: #ffffff;
  font-size: 11px;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: 500;
}
.omnimux-publish-card-checkbox {
  position: absolute;
  top: 6px;
  left: 6px;
}
.omnimux-publish-card-body {
  padding: 10px 12px 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  justify-content: space-between;
}
.omnimux-publish-card-title-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 6px;
}
.omnimux-publish-card-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--dsw-alias-label-primary, #0f172a);
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.omnimux-publish-card-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 11px;
  color: var(--dsw-alias-label-tertiary, #94a3b8);
}
.omnimux-publish-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
  border-top: 1px solid var(--dsw-alias-border-l1, #e2e8f0);
}

/* Calendar View */
.omnimux-publish-cal-wrap {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.omnimux-publish-cal-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.omnimux-publish-cal-month-label {
  font-size: 15px;
  font-weight: 600;
  color: var(--dsw-alias-label-primary, #0f172a);
}
.omnimux-publish-week-btn-group {
  display: flex;
  gap: 4px;
}
.omnimux-publish-cal-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-top: 1px solid var(--dsw-alias-border-l1, #e2e8f0);
  border-left: 1px solid var(--dsw-alias-border-l1, #e2e8f0);
  background: var(--dsw-alias-bg-base, #ffffff);
  border-radius: 8px;
  overflow: hidden;
}
.omnimux-publish-cal-head-cell {
  padding: 8px 0;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  color: var(--dsw-alias-label-tertiary, #94a3b8);
  border-right: 1px solid var(--dsw-alias-border-l1, #e2e8f0);
  border-bottom: 1px solid var(--dsw-alias-border-l1, #e2e8f0);
  background: var(--dsw-alias-bg-layer-2, #f8fafc);
}
.omnimux-publish-cal-cell {
  min-height: 96px;
  padding: 6px;
  border-right: 1px solid var(--dsw-alias-border-l1, #e2e8f0);
  border-bottom: 1px solid var(--dsw-alias-border-l1, #e2e8f0);
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.omnimux-publish-cal-cell.other-month {
  background: var(--dsw-alias-bg-layer-2, #f8fafc);
  opacity: 0.5;
}
.omnimux-publish-cal-date-num {
  font-size: 11px;
  font-weight: 500;
  color: var(--dsw-alias-label-secondary, #64748b);
  align-self: flex-end;
}
.omnimux-publish-cal-tasks {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.omnimux-publish-cal-pill {
  padding: 3px 6px;
  border-radius: 4px;
  background: var(--dsw-alias-bg-layer-2, #f8fafc);
  border-left: 3px solid var(--dsw-alias-state-publishing, #2563eb);
  font-size: 11px;
  cursor: pointer;
  box-shadow: var(--dsw-shadow-lv1, 0 1px 2px rgba(0,0,0,0.05));
}
.omnimux-publish-cal-pill.published { border-left-color: var(--dsw-alias-state-success, #10b981); }
.omnimux-publish-cal-pill.failed { border-left-color: var(--dsw-alias-state-error, #ef4444); }
.omnimux-publish-cal-pill.reviewing { border-left-color: var(--dsw-alias-state-warn, #f59e0b); }
.omnimux-publish-cal-pill-title {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 120px;
}
.omnimux-publish-cal-more {
  font-size: 10px;
  color: var(--dsw-alias-label-tertiary, #94a3b8);
}

.omnimux-publish-muted { padding: 24px 0; color: var(--dsw-alias-label-tertiary); text-align: center; }
.omnimux-publish-alert {
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 13px;
  margin-bottom: 12px;
}
.omnimux-publish-alert.error {
  background: var(--dsw-alias-state-error-subtle, rgba(239, 68, 68, 0.12));
  color: var(--dsw-alias-state-error-text, #dc2626);
  border: 1px solid var(--dsw-alias-state-error, #ef4444);
}
`;
function ensureCss() {
  if (typeof document === "undefined") return;
  if (document.getElementById(CSS_ID)) return;
  const style = document.createElement("style");
  style.id = CSS_ID;
  style.textContent = CSS;
  document.head.appendChild(style);
}
function injectPublishStyles() {
  ensureCss();
}

// src/client/PublishStage.jsx
var import_jsx_runtime10 = require("react/jsx-runtime");
var TAB_FILTER = {
  all: "submitted",
  drafts: "draft",
  reviewing: "reviewing",
  published: "published",
  retry: "failed"
};
var SUBMIT_POLL_MS = 2e3;
var SUBMIT_POLL_MAX_MS = 5 * 60 * 1e3;
function PublishStage({ t, stage }) {
  injectPublishStyles();
  const open = (0, import_react12.useSyncExternalStore)(
    stage ? (onStoreChange) => stage.subscribe(onStoreChange) : () => () => {
    },
    stage ? () => stage.getSnapshot() : () => false
  );
  const [everOpened, setEverOpened] = (0, import_react12.useState)(false);
  const [box, setBox] = (0, import_react12.useState)(() => stage ? stage.readBox() : { top: 0, left: 0, width: 0, height: 0 });
  if (open && !everOpened) setEverOpened(true);
  useLayoutEffectBox(stage, open, setBox);
  const [tab, setTab] = (0, import_react12.useState)("all");
  const [viewMode, setViewMode] = (0, import_react12.useState)("grid");
  const [searchQuery, setSearchQuery] = (0, import_react12.useState)("");
  const [sortOption, setSortOption] = (0, import_react12.useState)("recent");
  const [typeFilter, setTypeFilter] = (0, import_react12.useState)("");
  const [modeFilter, setModeFilter] = (0, import_react12.useState)("");
  const [view, setView] = (0, import_react12.useState)({ name: "list" });
  const [records, setRecords] = (0, import_react12.useState)([]);
  const [counts, setCounts] = (0, import_react12.useState)({ total: 0, draft: 0, submitted: 0, reviewing: 0, published: 0, failed: 0 });
  const [listLoading, setListLoading] = (0, import_react12.useState)(false);
  const [revision, setRevision] = (0, import_react12.useState)(void 0);
  const [isBatchMode, setIsBatchMode] = (0, import_react12.useState)(false);
  const [selectedIds, setSelectedIds] = (0, import_react12.useState)(/* @__PURE__ */ new Set());
  const [pendingDelete, setPendingDelete] = (0, import_react12.useState)(null);
  const [busyDelete, setBusyDelete] = (0, import_react12.useState)(false);
  const [toastMsg, setToastMsg] = (0, import_react12.useState)("");
  const [tracking, setTracking] = (0, import_react12.useState)(false);
  const startedAtRef = (0, import_react12.useRef)(0);
  const [detailTick, setDetailTick] = (0, import_react12.useState)(0);
  const showToast = (msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(""), 3e3);
  };
  const loadList = (0, import_react12.useCallback)(() => {
    setListLoading(true);
    const hostStatus = TAB_FILTER[tab] || "submitted";
    return Promise.all([
      listRecords({ status: hostStatus }),
      getState(void 0)
    ]).then(([recRes, stateRes]) => {
      if (recRes.ok && recRes.body && Array.isArray(recRes.body.records)) {
        setRecords(recRes.body.records);
      }
      if (stateRes.ok && stateRes.body && stateRes.body.counts) {
        setCounts(stateRes.body.counts);
      }
      setListLoading(false);
      return true;
    }).catch(() => {
      setListLoading(false);
      return false;
    });
  }, [tab]);
  (0, import_react12.useEffect)(() => {
    if (!open || view.name !== "list") return void 0;
    void loadList();
    return void 0;
  }, [open, view.name, loadList]);
  (0, import_react12.useEffect)(() => {
    if (!open || !tracking) return void 0;
    let stopped = false;
    let timer = 0;
    const poll = async () => {
      if (stopped) return;
      try {
        const result = await getState(revision);
        if (!stopped && result.ok && result.body) {
          if (result.body.unchanged === false) {
            setRevision(result.body.rev);
            if (result.body.counts) setCounts(result.body.counts);
            if (view.name === "list") void loadList();
            if (view.name === "detail") setDetailTick((n) => n + 1);
          }
        }
      } catch {
      }
      if (stopped) return;
      if (Date.now() - startedAtRef.current > SUBMIT_POLL_MAX_MS) {
        setTracking(false);
        return;
      }
      timer = setTimeout(() => {
        void poll();
      }, SUBMIT_POLL_MS);
    };
    timer = setTimeout(() => {
      void poll();
    }, SUBMIT_POLL_MS);
    return () => {
      stopped = true;
      clearTimeout(timer);
    };
  }, [open, tracking, revision, view.name, loadList]);
  const filteredRecords = (0, import_react12.useMemo)(() => {
    let list = [...records];
    const q = searchQuery.trim().toLowerCase();
    list = list.filter((rec) => {
      const status = displayStatus(rec);
      if (tab === "all" && rec.status === "draft") return false;
      if (tab === "drafts" && rec.status !== "draft") return false;
      if (tab === "reviewing" && status !== "reviewing") return false;
      if (tab === "published" && status !== "published") return false;
      if (tab === "retry" && status !== "failed" && status !== "partial_failed") return false;
      if (q) {
        const title = String(rec.title || "").toLowerCase();
        const desc = String(rec.description || "").toLowerCase();
        const topics = Array.isArray(rec.topics) ? rec.topics.join(" ").toLowerCase() : "";
        if (!title.includes(q) && !desc.includes(q) && !topics.includes(q)) return false;
      }
      if (typeFilter && rec.type !== typeFilter) return false;
      if (modeFilter && rec.mode !== modeFilter) return false;
      return true;
    });
    if (sortOption === "recent") {
      list.sort((a, b) => String(b.updated_at || b.created_at || "").localeCompare(String(a.updated_at || a.created_at || "")));
    } else if (sortOption === "dateDesc") {
      list.sort((a, b) => String(b.submitted_at || b.created_at || "").localeCompare(String(a.submitted_at || a.created_at || "")));
    } else if (sortOption === "dateAsc") {
      list.sort((a, b) => String(a.submitted_at || a.created_at || "").localeCompare(String(b.submitted_at || b.created_at || "")));
    } else if (sortOption === "title") {
      list.sort((a, b) => String(a.title || "").localeCompare(String(b.title || "")));
    }
    return list;
  }, [records, tab, searchQuery, typeFilter, modeFilter, sortOption]);
  const handleToggleSelect = (id) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };
  const handleToggleAll = (allSelected) => {
    if (allSelected) {
      setSelectedIds(new Set(filteredRecords.map((r) => String(r.id))));
    } else {
      setSelectedIds(/* @__PURE__ */ new Set());
    }
  };
  const confirmDelete = async () => {
    if (!pendingDelete) return;
    const id = String(pendingDelete.id);
    setBusyDelete(true);
    try {
      const result = await deleteDraft(id);
      if (result.ok) {
        setPendingDelete(null);
        showToast("\u5DF2\u5220\u9664\u8349\u7A3F");
        void loadList();
      } else {
        showToast(t("records.deleteFailed", { reason: errorText(result.body, result.status) }));
      }
    } catch (e) {
      showToast(String(e));
    } finally {
      setBusyDelete(false);
    }
  };
  const handleBatchRetry = async () => {
    const ids = Array.from(selectedIds);
    let retryCount = 0;
    for (const id of ids) {
      const rec = records.find((r) => String(r.id) === id);
      if (!rec || !Array.isArray(rec.subtasks)) continue;
      for (const st of rec.subtasks) {
        if (st.status === "failed") {
          await retryTask(id, st.platform, st.account_id || "");
          retryCount++;
        }
      }
    }
    showToast(`\u5DF2\u91CD\u8BD5 ${retryCount} \u4E2A\u5931\u8D25\u5B50\u4EFB\u52A1`);
    setSelectedIds(/* @__PURE__ */ new Set());
    setIsBatchMode(false);
    void loadList();
  };
  const handleBatchDeleteDrafts = async () => {
    const ids = Array.from(selectedIds);
    let deletedCount = 0;
    for (const id of ids) {
      const rec = records.find((r) => String(r.id) === id);
      if (rec && rec.status === "draft") {
        const res = await deleteDraft(id);
        if (res.ok) deletedCount++;
      }
    }
    showToast(`\u5DF2\u5220\u9664 ${deletedCount} \u6761\u8349\u7A3F`);
    setSelectedIds(/* @__PURE__ */ new Set());
    setIsBatchMode(false);
    void loadList();
  };
  const handleExport = () => {
    if (filteredRecords.length === 0) {
      showToast("\u5F53\u524D\u65E0\u8BB0\u5F55\u53EF\u5BFC\u51FA");
      return;
    }
    const headers = ["ID", "Title", "Type", "Platforms", "Date", "Status", "Mode"];
    const rows = filteredRecords.map((r) => [
      `"${r.id}"`,
      `"${(r.title || "").replace(/"/g, '""')}"`,
      `"${r.type || "image"}"`,
      `"${(r.subtasks || []).map((s) => s.platform).join(";")}"`,
      `"${r.submitted_at || r.created_at || ""}"`,
      `"${displayStatus(r)}"`,
      `"${r.mode || "instant"}"`
    ]);
    const csv = "\uFEFF" + [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `publish_records_${Date.now()}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast(`\u5DF2\u5BFC\u51FA ${filteredRecords.length} \u6761\u8BB0\u5F55`);
  };
  if (!stage || !everOpened) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
    "div",
    {
      role: "region",
      "aria-label": t("title"),
      "aria-hidden": open ? void 0 : "true",
      className: "omnimux-publish-stage",
      "data-visible": open ? "true" : "false",
      style: {
        "--stage-top": `${box.top}px`,
        "--stage-left": `${box.left}px`,
        "--stage-width": `${box.width}px`,
        "--stage-height": `${box.height}px`,
        display: open ? void 0 : "none"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          PageHeader,
          {
            title: t("title"),
            subtitle: t("subtitle"),
            onRefresh: loadList,
            refreshing: listLoading,
            refreshTitle: t("records.refresh"),
            onClose: () => stage.set(false),
            closeTitle: t("close")
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("section", { className: "omnimux-publish-action-row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            Button,
            {
              variant: "primary",
              size: "default",
              leadingIcon: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_dsh_client_ui_primitives6.IconPlusOutline16, {}),
              onClick: () => setView({ name: "composer" }),
              children: t("action.new")
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            Button,
            {
              variant: "outline",
              size: "default",
              leadingIcon: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(IconFolderOutline16, {}),
              onClick: () => setIsBatchMode((prev) => !prev),
              children: t("action.batch")
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            Button,
            {
              variant: "outline",
              size: "default",
              leadingIcon: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_dsh_client_ui_primitives6.IconDownloadOutline16, {}),
              onClick: handleExport,
              children: t("action.export")
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("section", { className: "omnimux-publish-control-bar", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          FilterBar,
          {
            compact: true,
            filters: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                Button,
                {
                  variant: tab === "all" ? "secondary" : "ghost",
                  size: "sm",
                  onClick: () => setTab("all"),
                  children: t("tab.all")
                },
                "all"
              ),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
                Button,
                {
                  variant: tab === "drafts" ? "secondary" : "ghost",
                  size: "sm",
                  onClick: () => setTab("drafts"),
                  children: [
                    t("tab.drafts"),
                    counts.draft > 0 ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "omnimux-publish-tab-badge", children: counts.draft }) : null
                  ]
                },
                "drafts"
              ),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
                Button,
                {
                  variant: tab === "reviewing" ? "secondary" : "ghost",
                  size: "sm",
                  onClick: () => setTab("reviewing"),
                  children: [
                    t("tab.reviewing"),
                    counts.reviewing > 0 ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "omnimux-publish-tab-badge", children: counts.reviewing }) : null
                  ]
                },
                "reviewing"
              ),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                Button,
                {
                  variant: tab === "published" ? "secondary" : "ghost",
                  size: "sm",
                  onClick: () => setTab("published"),
                  children: t("tab.published")
                },
                "published"
              ),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
                Button,
                {
                  variant: tab === "retry" ? "secondary" : "ghost",
                  size: "sm",
                  onClick: () => setTab("retry"),
                  children: [
                    t("tab.retry"),
                    counts.failed > 0 ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "omnimux-publish-tab-badge retry", children: counts.failed }) : null
                  ]
                },
                "retry"
              )
            ],
            tools: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                SearchField,
                {
                  width: 220,
                  placeholder: t("search.placeholder"),
                  value: searchQuery,
                  onChange: (e) => setSearchQuery(e.target.value)
                },
                "search"
              ),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                DropdownSelect,
                {
                  value: sortOption,
                  onChange: (val) => setSortOption(val),
                  options: [
                    { value: "recent", label: t("sort.recent") },
                    { value: "dateDesc", label: t("sort.dateDesc") },
                    { value: "dateAsc", label: t("sort.dateAsc") },
                    { value: "title", label: t("sort.title") }
                  ]
                },
                "sort"
              ),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                DropdownSelect,
                {
                  value: typeFilter,
                  onChange: (val) => setTypeFilter(val),
                  options: [
                    { value: "", label: t("filter.type.all") },
                    { value: "image", label: t("filter.type.image") },
                    { value: "video", label: t("filter.type.video") }
                  ]
                },
                "type"
              ),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                DropdownSelect,
                {
                  value: modeFilter,
                  onChange: (val) => setModeFilter(val),
                  options: [
                    { value: "", label: t("filter.mode.all") },
                    { value: "scheduled", label: t("filter.mode.scheduled") },
                    { value: "instant", label: t("filter.mode.instant") }
                  ]
                },
                "mode"
              ),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "omnimux-publish-view-switcher", children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                  IconButton,
                  {
                    variant: viewMode === "grid" ? "secondary" : "ghost",
                    size: "xs",
                    title: t("view.grid"),
                    onClick: () => setViewMode("grid"),
                    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(IconGridOutline16, {})
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                  IconButton,
                  {
                    variant: viewMode === "table" ? "secondary" : "ghost",
                    size: "xs",
                    title: t("view.table"),
                    onClick: () => setViewMode("table"),
                    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(IconListOutline16, {})
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                  IconButton,
                  {
                    variant: viewMode === "calendar" ? "secondary" : "ghost",
                    size: "xs",
                    title: t("view.calendar"),
                    onClick: () => setViewMode("calendar"),
                    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(IconCalendarOutline16, {})
                  }
                )
              ] }, "view-switcher")
            ]
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("main", { className: "omnimux-publish-viewport", children: [
          toastMsg ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "omnimux-publish-alert", children: toastMsg }) : null,
          isBatchMode ? /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "omnimux-publish-batch-bar", children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { children: [
              "\u5DF2\u9009 ",
              selectedIds.size,
              " \u9879"
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "omnimux-publish-batch-actions", children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Button, { size: "xs", variant: "outline", onClick: () => handleToggleAll(selectedIds.size < filteredRecords.length), children: selectedIds.size < filteredRecords.length ? t("action.selectAll") : "\u53D6\u6D88\u5168\u9009" }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Button, { size: "xs", variant: "outline", onClick: handleBatchRetry, children: t("action.batchRetry") }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Button, { size: "xs", variant: "outline", onClick: handleBatchDeleteDrafts, children: t("action.batchDeleteDrafts") }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Button, { size: "xs", variant: "ghost", onClick: () => setIsBatchMode(false), children: t("action.exitBatch") })
            ] })
          ] }) : null,
          viewMode === "table" ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            RecordsTable,
            {
              t,
              records: filteredRecords,
              selectedIds,
              onToggleSelect: handleToggleSelect,
              onToggleAll: handleToggleAll,
              onView: (record) => setView({ name: "detail", recordId: String(record.id) }),
              onEdit: (record) => setView({ name: "composer", draftId: String(record.id) }),
              onDelete: setPendingDelete,
              onRetry: async (record) => {
                for (const st of record.subtasks || []) {
                  if (st.status === "failed") {
                    await retryTask(record.id, st.platform, st.account_id || "");
                  }
                }
                showToast("\u5DF2\u4E0B\u53D1\u91CD\u8BD5");
                void loadList();
              },
              sortField: "date",
              sortOrder: "desc",
              onSort: () => {
              }
            }
          ) : null,
          viewMode === "grid" ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            GridView,
            {
              t,
              records: filteredRecords,
              selectedIds,
              isBatchMode,
              onToggleSelect: handleToggleSelect,
              onOpen: (record) => setView({ name: "detail", recordId: String(record.id) }),
              onEdit: (record) => setView({ name: "composer", draftId: String(record.id) }),
              onDelete: setPendingDelete,
              onRetry: async (record) => {
                for (const st of record.subtasks || []) {
                  if (st.status === "failed") {
                    await retryTask(record.id, st.platform, st.account_id || "");
                  }
                }
                showToast("\u5DF2\u4E0B\u53D1\u91CD\u8BD5");
                void loadList();
              }
            }
          ) : null,
          viewMode === "calendar" ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            CalendarView,
            {
              t,
              records: filteredRecords,
              onOpen: (record) => setView({ name: "detail", recordId: String(record.id) })
            }
          ) : null
        ] }),
        view.name === "composer" ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "omnimux-publish-subscreen", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          Composer,
          {
            t,
            draftId: view.draftId,
            onBack: () => setView({ name: "list" }),
            onSubmitted: (recordId) => {
              setView({ name: "detail", recordId });
              startedAtRef.current = Date.now();
              setTracking(true);
            },
            onSaved: () => {
              void loadList();
              setView({ name: "list" });
            }
          }
        ) }) : null,
        view.name === "detail" ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "omnimux-publish-subscreen", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          RecordDetail,
          {
            t,
            recordId: view.recordId,
            onBack: () => setView({ name: "list" }),
            onChanged: () => void loadList()
          },
          `${view.recordId}:${detailTick}`
        ) }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          ConfirmModal,
          {
            open: Boolean(pendingDelete),
            title: t("records.delete"),
            message: t("records.deleteConfirm", {
              title: String(pendingDelete?.title || pendingDelete?.description || pendingDelete?.id || "")
            }),
            confirmLabel: t("records.delete"),
            cancelLabel: t("close"),
            closeLabel: t("close"),
            confirmVariant: "danger",
            confirmLoading: busyDelete,
            onConfirm: () => {
              void confirmDelete();
            },
            onClose: () => {
              if (!busyDelete) setPendingDelete(null);
            }
          }
        )
      ]
    }
  );
}
function useLayoutEffectBox(stage, open, setBox) {
  (0, import_react12.useLayoutEffect)(() => {
    if (!open) return void 0;
    const update = () => {
      setBox(stage.readBox());
    };
    update();
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
    };
  }, [open, stage, setBox]);
}

// src/client/index.js
var name = "omnimux-publish";
var inject = ["slots", "locale"];
function apply(ctx) {
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), "omnimux-publish: dictionaries");
  ctx.effect(() => ensureCss(), "omnimux-publish: styles");
  const t = ctx.locale.bind(NS);
  const stage = createStageStore2(() => window.__omnimuxStage);
  const stageFace = () => ({ t, stage });
  ctx.effect(() => mountSidebarEntry(stage, t, ctx.locale), "omnimux-publish: sidebar entry");
  ctx.slots.inject("shell.overlay", () => ctx.slots.register({
    name: "shell.overlay",
    id: "omnimux-publish-stage",
    order: 22,
    locale: NS,
    inject: stageFace
  }, PublishStage));
}

    return module.exports;
  }
});
