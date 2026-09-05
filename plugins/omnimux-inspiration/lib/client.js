window.__ModuleLoader__.load({
  id: "omnimux-inspiration",
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
  INSPIRATION_TAB_ID: () => INSPIRATION_TAB_ID2,
  SESSION_PREFILL_SLOT: () => SESSION_PREFILL_SLOT,
  SessionPrefillConsumer: () => SessionPrefillConsumer,
  apply: () => apply,
  inject: () => inject,
  name: () => name
});
module.exports = __toCommonJS(index_exports);
var import_react9 = require("react");

// src/client/locales.js
var zh = {
  "nav": "\u7075\u611F\u5E93",
  "title": "\u7075\u611F\u7D20\u6750\u5E93",
  "subtitle": "\u6C89\u6DC0\u7206\u6B3E\u89C6\u9891\u3001\u56FE\u6587\u4E0E\u793E\u5A92\u6587\u6848\u7075\u611F\uFF0C\u652F\u6301 AI \u591A\u7EF4\u89E3\u6784\u4E0E\u4E00\u952E\u590D\u523B",
  "close": "\u5173\u95ED",
  "loading": "\u6B63\u5728\u52A0\u8F7D\u7075\u611F\u2026",
  "needLogin": "\u767B\u5F55 OmniMux \u4EE5\u67E5\u770B\u4E91\u7AEF\u516C\u5171\u7075\u611F\u5E93\u3002",
  "needLoginHint": "\u53EF\u5728 \u8BBE\u7F6E \u2192 \u4E2A\u4EBA\u8D44\u6599 \u4E2D\u767B\u5F55 OmniMux\uFF0C\u672C\u5730\u7075\u611F\u5E93\u65E0\u9700\u767B\u5F55\u5373\u53EF\u4F7F\u7528\u3002",
  "login": "\u767B\u5F55",
  "empty.title": "\u7075\u611F\u7D20\u6750\u5E93\u6682\u65E0\u6570\u636E",
  "empty.description": "\u70B9\u51FB\u53F3\u4E0A\u89D2\u300C+ \u5BFC\u5165\u793E\u5A92\u7075\u611F\u300D\u6293\u53D6\u793E\u4EA4\u5A92\u4F53\u94FE\u63A5\uFF0C\u6216\u901A\u8FC7 Agent \u5B58\u5165\u3002",
  "filter.search": "\u641C\u7D22\u6807\u9898\u3001\u6587\u6848\u6216\u6807\u7B7E",
  "filter.type": "\u7C7B\u578B",
  "filter.sort": "\u6392\u5E8F",
  "filter.favorite": "\u6536\u85CF",
  "filter.all": "\u5168\u90E8",
  "tab.all": "\u5168\u90E8",
  "tab.local": "\u672C\u5730",
  "tab.public": "\u4E91\u7AEF",
  "add.btn": "\u5BFC\u5165\u7075\u611F",
  "add.dialogTitle": "\u5BFC\u5165\u793E\u5A92\u7075\u611F",
  "add.urlLabel": "\u793E\u5A92\u94FE\u63A5 (URL)",
  "add.urlPlaceholder": "\u7C98\u8D34 TikTok\u3001Instagram\u3001YouTube\u3001X (Twitter) \u94FE\u63A5\u2026",
  "add.platformLabel": "\u8BC6\u522B\u5E73\u53F0",
  "add.tagsLabel": "\u81EA\u5B9A\u4E49\u6807\u7B7E (\u9017\u53F7\u5206\u9694)",
  "add.tagsPlaceholder": "\u4F8B\u5982\uFF1A\u6838\u5FC3\u94A9\u5B50, \u7F8E\u5986\u62A4\u80A4, \u75DB\u70B9\u53CD\u8F6C",
  "add.tagsToggle": "+ \u6DFB\u52A0\u81EA\u5B9A\u4E49\u6807\u7B7E",
  "add.autoAnalyze": "\u5BFC\u5165\u540E\u81EA\u52A8\u6267\u884C AI \u591A\u7EF4\u5185\u5BB9\u89E3\u6784\u5206\u6790",
  "add.submit": "\u5BFC\u5165",
  "add.importing": "\u6B63\u5728\u6293\u53D6\u3001\u89E3\u6790\u5E76\u751F\u6210\u62C6\u89E3\u62A5\u544A\u2026",
  "add.success": "\u5DF2\u6DFB\u52A0\u81F3\u7075\u611F\u5E93",
  "add.error": "\u6293\u53D6\u6216\u89E3\u6790\u5931\u8D25",
  "type.video": "\u89C6\u9891",
  "type.image": "\u56FE\u7247",
  "type.link": "\u94FE\u63A5",
  "sort.hot": "\u70ED\u95E8",
  "sort.new": "\u6700\u65B0",
  "sort.fav": "\u6536\u85CF",
  "favorite.on": "\u53EA\u770B\u6536\u85CF",
  "favorite.off": "\u5168\u90E8",
  "error.generic": "\u8BFB\u53D6\u5931\u8D25",
  "error.disabled": "\u7075\u611F\u5E93\u7F51\u5173\u672A\u5F00\u542F",
  "openSource": "\u6253\u5F00\u539F\u5E16",
  "noCover": "\u65E0\u5C01\u9762",
  "count": "{n} \u9879",
  "badge.local": "\u672C\u5730",
  "badge.public": "\u4E91\u7AEF",
  "detail.title": "\u7075\u611F\u8BE6\u60C5\u4E0E\u591A\u7EF4\u62C6\u89E3",
  "detail.hook": "\u5F00\u5934\u94A9\u5B50 (0\u20133s Hook) \u4E0E\u4EAE\u70B9",
  "detail.breakdown": "AI \u591A\u7EF4\u7ED3\u6784\u5316\u62C6\u89E3\u62A5\u544A",
  "detail.copyMarkdown": "\u590D\u5236\u62C6\u89E3\u62A5\u544A",
  "detail.copied": "\u5DF2\u590D\u5236",
  "view.player": "\u4F5C\u54C1",
  "view.deconstruct": "\u4F5C\u54C1\u89E3\u6790",
  "view.switch": "\u9884\u89C8\u6A21\u5F0F",
  "status.breakdownReady": "\u4E94\u7EF4\u62C6\u89E3\u5DF2\u5C31\u7EEA",
  "status.breakdownGenerating": "AI \u62C6\u89E3\u751F\u6210\u4E2D\u2026",
  "dim.tab.all": "\u5168\u90E8\u7EF4\u5EA6",
  "dim.tab.hook": "\u26A1 \u9EC4\u91D1 3 \u79D2 Hook",
  "dim.tab.goal": "\u{1F3AF} \u8F6C\u5316\u76EE\u6807\u4E0E\u5FC3\u7406",
  "dim.tab.narrative": "\u{1F4D6} \u53D9\u4E8B\u89C6\u89D2\u4E0E\u811A\u672C",
  "dim.tab.visual": "\u{1F50D} \u753B\u9762\u4E0E\u89C6\u542C\u8282\u594F",
  "dim.tab.replication": "\u{1F680} \u7206\u6B3E\u590D\u523B\u7B56\u7565",
  "dim.tab.raw": "\u{1F4D1} Markdown \u539F\u6587",
  "dim.title.hook": "\u26A1 \u9EC4\u91D1 3 \u79D2 HOOK \u4EAE\u70B9",
  "dim.title.goal": "\u{1F3AF} \u76EE\u6807\u4E0E\u8F6C\u5316\u5FC3\u7406",
  "dim.title.narrative": "\u{1F4D6} \u53D9\u4E8B\u89C6\u89D2\u4E0E\u811A\u672C\u7ED3\u6784",
  "dim.title.visual": "\u{1F50D} \u89C6\u89C9\u4E0E\u89C6\u542C\u8282\u594F\u62C6\u89E3",
  "dim.title.replication": "\u{1F680} \u7206\u6B3E\u590D\u523B\u4E0E\u521B\u4F5C\u6307\u5F15",
  "dim.title.raw": "\u{1F4D1} \u5B8C\u6574\u62C6\u89E3\u62A5\u544A (Markdown)",
  "empty.breakdownTitle": "\u5C1A\u672A\u751F\u6210 AI \u4E94\u7EF4\u62C6\u89E3\u62A5\u544A",
  "empty.breakdownDesc": "\u8C03\u7528\u89C6\u89C9\u5927\u6A21\u578B\u5BF9\u9EC4\u91D1 3 \u79D2 Hook\u3001\u5FC3\u7406\u8F6C\u5316\u3001\u53D9\u4E8B\u89C6\u89D2\u3001\u955C\u5934\u8282\u594F\u4E0E\u590D\u523B\u6A21\u677F\u8FDB\u884C\u5168\u65B9\u4F4D\u89E3\u6784",
  "empty.breakdownAnalyzing": "AI \u591A\u6A21\u6001\u5927\u6A21\u578B\u6B63\u5728\u6DF1\u5EA6\u62C6\u89E3\u4E2D\u2026",
  "action.analyzing": "\u6B63\u5728\u89E3\u6790\u2026",
  "action.triggerAnalyze": "\u7ACB\u5373\u89E3\u6790",
  "stat.likes": "\u70B9\u8D5E",
  "stat.comments": "\u8BC4\u8BBA",
  "stat.shares": "\u5206\u4EAB",
  "meta.originalText": "\u539F\u5E16\u6587\u6848",
  "meta.platform": "\u5E73\u53F0: {platform}",
  "meta.author": "\u4F5C\u8005: {author}",
  "modal.header.copy": "\u590D\u5236\u6807\u9898",
  "modal.header.copied": "\u5DF2\u590D\u5236",
  "modal.header.analyze": "\u7528 Agent \u5206\u6790",
  "modal.header.reanalyze": "\u91CD\u65B0\u5206\u6790",
  "modal.header.analyzing": "\u6B63\u5728\u5206\u6790\u2026",
  "modal.header.favorite": "\u6536\u85CF",
  "modal.header.favorited": "\u5DF2\u6536\u85CF",
  "modal.header.segments": "{n} \u6BB5\u811A\u672C",
  "modal.header.tabs": "\u8BE6\u60C5\u89C6\u56FE",
  "modal.panel.video": "\u89C6\u9891",
  "modal.panel.script": "\u811A\u672C\u6587\u6848",
  "modal.panel.deconstruction": "\u5185\u5BB9\u89E3\u6784",
  "modal.meta.source": "\u6253\u5F00\u6E90\u94FE\u63A5",
  "modal.meta.author": "\u4F5C\u8005",
  "modal.meta.createdAt": "\u5165\u5E93\u4E8E",
  "modal.meta.publishedAt": "\u53D1\u5E03\u4E8E",
  "modal.meta.copyLink": "\u590D\u5236\u94FE\u63A5",
  "modal.meta.copyAuthor": "\u590D\u5236\u4F5C\u8005",
  "modal.script.copy": "\u590D\u5236\u811A\u672C",
  "modal.script.copySegment": "\u590D\u5236\u672C\u6BB5",
  "modal.script.empty": "\u6682\u65E0\u811A\u672C\u6587\u6848",
  "modal.script.emptyHint": "\u53EF\u70B9\u51FB\u300C\u7528 Agent \u5206\u6790\u300D\u751F\u6210\u811A\u672C\u4E0E\u89E3\u6784",
  "modal.script.translate": "\u7FFB\u8BD1",
  "modal.script.translating": "\u7FFB\u8BD1\u4E2D\u2026",
  "modal.script.showSource": "\u770B\u539F\u6587",
  "modal.script.translateFailed": "\u7FFB\u8BD1\u5931\u8D25\uFF0C\u539F\u6587\u672A\u6539\u52A8",
  "modal.deconstruction.copy": "\u590D\u5236\u89E3\u6784",
  "modal.deconstruction.showRaw": "\u67E5\u770B\u539F\u59CB Markdown",
  "modal.deconstruction.hideRaw": "\u6536\u8D77\u539F\u59CB Markdown",
  "modal.deconstruction.hook": "\u9EC4\u91D1 3 \u79D2 Hook",
  "modal.deconstruction.goal": "\u76EE\u6807\u4E0E\u8F6C\u5316\u5FC3\u7406",
  "modal.deconstruction.narrative": "\u53D9\u4E8B\u89C6\u89D2\u4E0E\u811A\u672C\u7ED3\u6784",
  "modal.deconstruction.visual": "\u89C6\u89C9\u4E0E\u89C6\u542C\u8282\u594F",
  "modal.deconstruction.replication": "\u7206\u6B3E\u590D\u523B\u7B56\u7565",
  "modal.deconstruction.empty": "\u5C1A\u672A\u751F\u6210\u5185\u5BB9\u89E3\u6784",
  "modal.deconstruction.analyze": "\u7ACB\u5373\u89E3\u6790",
  "modal.deconstruction.analyzing": "\u6B63\u5728\u89E3\u6790\u2026",
  "modal.deconstruction.error": "\u89E3\u6790\u670D\u52A1\u6682\u65F6\u4E0D\u53EF\u7528",
  "select.count": "\u5DF2\u9009 {n} \u9879",
  "select.selectAll": "\u5168\u9009\u672C\u5730",
  "select.clear": "\u53D6\u6D88\u9009\u62E9",
  "select.delete": "\u5220\u9664 ({n})",
  "select.toggle": "\u9009\u62E9\u6216\u53D6\u6D88\u9009\u62E9\u8BE5\u7075\u611F",
  "confirmRemove.title": "\u786E\u8BA4\u5220\u9664 {n} \u4E2A\u672C\u5730\u7075\u611F\uFF1F",
  "confirmRemove.description": "\u9009\u4E2D\u7684\u7075\u611F\u8BB0\u5F55\u5C06\u88AB\u6E05\u9664\uFF0C\u5173\u8054\u7684\u672C\u5730\u89C6\u9891\u53CA\u5C01\u9762\u7D20\u6750\u6587\u4EF6\u5C06\u79FB\u5165\u7CFB\u7EDF\u5E9F\u7EB8\u7BD3\u3002",
  "confirmRemove.cancel": "\u53D6\u6D88",
  "confirmRemove.confirm": "\u79FB\u5165\u5E9F\u7EB8\u7BD3",
  "confirmRemove.deleting": "\u6B63\u5728\u5220\u9664\u2026",
  "card.cta.detail": "\u67E5\u770B",
  "card.cta.try": "\u4E00\u952E\u590D\u523B",
  "card.cta.tryFull": "\u4E00\u952E\u590D\u523B",
  "card.cta.addToConversation": "\u4E00\u952E\u590D\u523B",
  "card.cta.workflowMissing": "\u5DE5\u4F5C\u6D41\u672A\u5C31\u7EEA\uFF0C\u8BF7\u786E\u8BA4\u5DF2\u5B89\u88C5\u5DE5\u4F5C\u6D41\u63D2\u4EF6",
  "card.cta.busy": "\u6B63\u5728\u590D\u523B\uFF0C\u8BF7\u7A0D\u5019",
  "card.cta.createFailed": "\u521B\u5EFA\u9879\u76EE\u5931\u8D25",
  "card.cta.sendManual": "\u65E0\u6CD5\u5B89\u5168\u9884\u586B\uFF0C\u8BF7\u5728\u65B0\u4F1A\u8BDD\u4E2D\u624B\u52A8\u786E\u8BA4\u540E\u91CD\u8BD5",
  "card.cta.draftProtected": "\u65B0\u4F1A\u8BDD\u5DF2\u6709\u672A\u53D1\u9001\u8349\u7A3F\uFF0C\u672A\u6539\u52A8\u5185\u5BB9\u6216\u9644\u4EF6",
  "card.cta.replicating": "\u6B63\u5728\u51C6\u5907\u590D\u523B\u2026",
  "card.cta.attachFull": "\u4F1A\u8BDD\u9644\u4EF6\u5DF2\u6EE1\uFF08\u6700\u591A 8 \u4E2A\uFF09",
  "card.cta.attachFailed": "\u65E0\u6CD5\u6DFB\u52A0\u5230\u4F1A\u8BDD\u9644\u4EF6",
  "card.cta.noSession": "\u8BF7\u5148\u65B0\u5EFA\u6216\u6253\u5F00\u4E00\u4E2A\u4F1A\u8BDD",
  "card.cta.newSessionFailed": "\u65E0\u6CD5\u6253\u5F00\u65B0\u4F1A\u8BDD\uFF0C\u8BF7\u624B\u52A8\u70B9\u300C\u65B0\u4F1A\u8BDD\u300D\u540E\u91CD\u8BD5"
};
var en = {
  "nav": "Inspiration",
  "title": "Inspiration Vault",
  "subtitle": "Curate viral videos, images, and copy inspirations with AI deconstruction and one-click replication.",
  "close": "Close",
  "loading": "Loading inspiration\u2026",
  "needLogin": "Sign in to OmniMux to view public cloud inspiration.",
  "needLoginHint": "Sign in under Settings \u2192 Profile. Local vault works offline without login.",
  "login": "Sign in",
  "empty.title": "Inspiration vault is empty",
  "empty.description": 'Click "+ Import Inspiration" above to fetch social links, or save via Agent.',
  "filter.search": "Search title, content, or tags",
  "filter.type": "Type",
  "filter.sort": "Sort",
  "filter.favorite": "Favorites",
  "filter.all": "All",
  "tab.all": "All",
  "tab.local": "Local",
  "tab.public": "Cloud",
  "add.btn": "Import Inspiration",
  "add.dialogTitle": "Import Social Media Inspiration",
  "add.urlLabel": "Social Media URL",
  "add.urlPlaceholder": "Paste TikTok, Instagram, YouTube, X (Twitter) URL\u2026",
  "add.platformLabel": "Detected Platform",
  "add.tagsLabel": "Custom Tags (comma separated)",
  "add.tagsPlaceholder": "e.g. Opening Hook, Skincare, Pain Point",
  "add.tagsToggle": "+ Add custom tags",
  "add.autoAnalyze": "Automatically run AI multi-dimensional breakdown",
  "add.submit": "Import",
  "add.importing": "Crawling, parsing, and analyzing\u2026",
  "add.success": "Saved to library",
  "add.error": "Failed to fetch or parse",
  "type.video": "Video",
  "type.image": "Image",
  "type.link": "Link",
  "sort.hot": "Hot",
  "sort.new": "New",
  "sort.fav": "Favorites",
  "favorite.on": "Favorites only",
  "favorite.off": "All",
  "error.generic": "Could not load",
  "error.disabled": "Inspiration gateway is off",
  "openSource": "Open Source",
  "noCover": "No cover",
  "count": "{n} items",
  "badge.local": "Local",
  "badge.public": "Cloud",
  "detail.title": "Inspiration Details & Analysis",
  "detail.hook": "Opening Hook (0\u20133s) & Highlights",
  "detail.breakdown": "Multi-Dimensional Content Analysis",
  "detail.copyMarkdown": "Copy Breakdown Markdown",
  "detail.copied": "Copied",
  "view.player": "Media",
  "view.deconstruct": "Deconstruction",
  "view.switch": "Preview mode",
  "status.breakdownReady": "5D Breakdown Ready",
  "status.breakdownGenerating": "AI Generating Breakdown\u2026",
  "dim.tab.all": "All Dimensions",
  "dim.tab.hook": "\u26A1 3s Hook",
  "dim.tab.goal": "\u{1F3AF} Conversion Goal",
  "dim.tab.narrative": "\u{1F4D6} Narrative & Script",
  "dim.tab.visual": "\u{1F50D} Visual & Pacing",
  "dim.tab.replication": "\u{1F680} Viral Strategy",
  "dim.tab.raw": "\u{1F4D1} Raw Markdown",
  "dim.title.hook": "\u26A1 3-Second Hook & Highlights",
  "dim.title.goal": "\u{1F3AF} Goal & Psychology",
  "dim.title.narrative": "\u{1F4D6} Narrative Structure & Script",
  "dim.title.visual": "\u{1F50D} Visual & Audio Pacing Breakdown",
  "dim.title.replication": "\u{1F680} Viral Replication Blueprint",
  "dim.title.raw": "\u{1F4D1} Full Breakdown Report (Markdown)",
  "empty.breakdownTitle": "5D AI Breakdown Not Generated",
  "empty.breakdownDesc": "Use multimodal AI to deconstruct 3s hooks, psychological triggers, pacing, and viral templates",
  "empty.breakdownAnalyzing": "AI multimodal model is analyzing content in depth\u2026",
  "action.analyzing": "Analyzing\u2026",
  "action.triggerAnalyze": "Deconstruct Now",
  "stat.likes": "Likes",
  "stat.comments": "Comments",
  "stat.shares": "Shares",
  "meta.originalText": "Original Content",
  "meta.platform": "Platform: {platform}",
  "meta.author": "Author: {author}",
  "modal.header.copy": "Copy title",
  "modal.header.copied": "Copied",
  "modal.header.analyze": "Analyze with Agent",
  "modal.header.reanalyze": "Re-analyze",
  "modal.header.analyzing": "Analyzing\u2026",
  "modal.header.favorite": "Favorite",
  "modal.header.favorited": "Favorited",
  "modal.header.segments": "{n} segments",
  "modal.header.tabs": "Detail views",
  "modal.panel.video": "Video",
  "modal.panel.script": "Script",
  "modal.panel.deconstruction": "Deconstruction",
  "modal.meta.source": "Open source link",
  "modal.meta.author": "Author",
  "modal.meta.createdAt": "Added on",
  "modal.meta.publishedAt": "Published",
  "modal.meta.copyLink": "Copy link",
  "modal.meta.copyAuthor": "Copy author",
  "modal.script.copy": "Copy script",
  "modal.script.copySegment": "Copy line",
  "modal.script.empty": "No script available",
  "modal.script.emptyHint": "Run Agent analysis to generate script & breakdown",
  "modal.script.translate": "Translate",
  "modal.script.translating": "Translating\u2026",
  "modal.script.showSource": "Show original",
  "modal.script.translateFailed": "Translation failed; original kept",
  "modal.deconstruction.copy": "Copy breakdown",
  "modal.deconstruction.showRaw": "View raw Markdown",
  "modal.deconstruction.hideRaw": "Hide raw Markdown",
  "modal.deconstruction.hook": "3-second Hook",
  "modal.deconstruction.goal": "Goal & conversion psychology",
  "modal.deconstruction.narrative": "Narrative & script structure",
  "modal.deconstruction.visual": "Visual & audio pacing",
  "modal.deconstruction.replication": "Replication strategy",
  "modal.deconstruction.empty": "No deconstruction generated",
  "modal.deconstruction.analyze": "Analyze now",
  "modal.deconstruction.analyzing": "Analyzing\u2026",
  "modal.deconstruction.error": "Analysis service unavailable",
  "select.count": "{n} selected",
  "select.selectAll": "Select all local",
  "select.clear": "Clear selection",
  "select.delete": "Delete ({n})",
  "select.toggle": "Toggle item selection",
  "confirmRemove.title": "Delete {n} local inspirations?",
  "confirmRemove.description": "Selected inspiration records will be removed, and local video/cover files will be moved to the Trash.",
  "confirmRemove.cancel": "Cancel",
  "confirmRemove.confirm": "Move to Trash",
  "confirmRemove.deleting": "Deleting\u2026",
  "card.cta.detail": "View",
  "card.cta.try": "Replicate",
  "card.cta.tryFull": "One-click replicate",
  "card.cta.addToConversation": "Replicate",
  "card.cta.workflowMissing": "Workflow plugin is not ready",
  "card.cta.busy": "Replication in progress",
  "card.cta.createFailed": "Could not create project",
  "card.cta.sendManual": "Could not safely prefill \u2014 confirm the new session and retry",
  "card.cta.draftProtected": "The new session has an unsent draft; nothing was changed",
  "card.cta.replicating": "Preparing replication\u2026",
  "card.cta.attachFull": "Attachment limit reached (max 8)",
  "card.cta.attachFailed": "Could not add to chat",
  "card.cta.noSession": "Start or open a session first",
  "card.cta.newSessionFailed": "Could not open a new session \u2014 click New session and retry"
};
var NS = "omnimux-inspiration";

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
injectCss("PageHeader.module.css", ".dshUk-PageHeader-pageHeader {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 20px;\n  min-height: 56px;\n  box-sizing: border-box;\n  flex: none;\n  gap: 16px;\n  border-bottom: 1px solid var(--dsw-alias-border-l1);\n  -webkit-app-region: drag;\n}\n\n.dshUk-PageHeader-heading {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n  flex: 1 1 auto;\n}\n\n.dshUk-PageHeader-breadcrumb {\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  line-height: 16px;\n  color: var(--dsw-alias-label-secondary);\n  margin-bottom: 2px;\n}\n\n.dshUk-PageHeader-titleRow {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.dshUk-PageHeader-title {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 28px;\n  color: var(--dsw-alias-label-primary);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.dshUk-PageHeader-subtitle {\n  margin: 0;\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 18px;\n  color: var(--dsw-alias-label-secondary);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.dshUk-PageHeader-tabsContainer {\n  display: flex;\n  align-items: center;\n  flex: none;\n  -webkit-app-region: no-drag;\n}\n\n.dshUk-PageHeader-controls {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: none;\n  -webkit-app-region: no-drag;\n}\n");
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
var SIDEBAR_ENTRY_COMMON_STYLES = `
.omnimux-sidebar-nav-entry {
  box-sizing: border-box; display: flex; align-items: center; gap: 6px; position: relative;
  width: calc(100% - 8px); height: 32px; margin: 0 4px; padding: 0 8px;
  border: none; border-radius: 8px; background: transparent;
  color: var(--dsw-alias-label-primary, inherit);
  font: var(--dsw-font-s-14, inherit); font-size: 14px; line-height: 20px;
  cursor: pointer; text-align: left;
}
.omnimux-sidebar-nav-entry[data-hidden="true"],
.omnimux-sidebar-nav-entry.omnimux-sidebar-nav-entry-hidden {
  display: none !important;
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
  const { id, rank, label, iconSvg, stageStore, locale, customClassName, datasetKey, access = "offline", requireAuth, authReason } = options;
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
    if (access === "cloud" || access === "offline" && requireAuth === true) {
      const auth = (typeof window !== "undefined" ? window : void 0)?.__omnimuxAuth;
      if (auth && typeof auth.ensureLogin === "function") {
        const reason = authReason ? resolveLabel(authReason) : resolveLabel(label);
        auth.ensureLogin({
          reason,
          kind: "explicit",
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

// src/client/sidebar-entry.js
var INSPIRATION_TAB_ID = "omnimux-inspiration:library";
var ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" width="14" height="14" fill="none" role="presentation" aria-hidden="true" preserveAspectRatio="xMidYMid meet"><g><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M1.833 4.813a2.52 2.52 0 0 1 2.521-2.521h6.875a2.52 2.52 0 0 1 2.521 2.52v12.375a2.52 2.52 0 0 1-2.52 2.521H4.353a2.52 2.52 0 0 1-2.52-2.52V4.813Zm2.521-.688h6.875c.38 0 .688.308.688.688v12.375c0 .38-.308.687-.688.687H4.354a.687.687 0 0 1-.687-.688V4.813c0-.38.307-.688.687-.688Z"/><path fill="currentColor" d="m20.9 7.428-1.65-.953v9.05l1.65-.953V7.428Zm-3.483-2.011-1.834-1.059v13.284l1.834-1.059V5.417Z"/></g></svg>';
function resolveWorkbenchTitle(t) {
  try {
    const val = typeof t === "function" ? t("nav") : void 0;
    if (val && val !== "nav") return val;
  } catch {
  }
  return "\u7075\u611F\u5E93";
}
function createWorkbenchStageStore(t, tabId) {
  let store = null;
  const ensure = () => {
    if (store) return store;
    const api = typeof window !== "undefined" ? window.__omnimuxWorkbench : void 0;
    if (!api || typeof api.createSidebarStore !== "function") return null;
    store = api.createSidebarStore({
      tabId,
      title: () => resolveWorkbenchTitle(t)
    });
    return store;
  };
  return {
    getSnapshot() {
      return Boolean(ensure()?.getSnapshot?.());
    },
    subscribe(listener) {
      if (typeof listener !== "function") return () => {
      };
      const ready = ensure();
      if (ready && typeof ready.subscribe === "function") return ready.subscribe(listener);
      let unsub = () => {
      };
      const started = Date.now();
      const timer = setInterval(() => {
        const next = ensure();
        if (next && typeof next.subscribe === "function") {
          clearInterval(timer);
          unsub = next.subscribe(listener);
          listener();
          return;
        }
        if (Date.now() - started > 8e3) clearInterval(timer);
      }, 50);
      return () => {
        clearInterval(timer);
        unsub();
      };
    },
    open() {
      const s = ensure();
      if (!s) return;
      s.open();
    },
    close() {
      ensure()?.close?.();
    },
    set(next) {
      if (next) this.open();
      else this.close();
    },
    readBox() {
      return ensure()?.readBox?.() || { top: 0, left: 0, width: 0, height: 0 };
    }
  };
}
function mountSidebarEntry(_stage, t, locale) {
  return createSidebarEntry({
    id: "omnimux-inspiration",
    rank: 7,
    label: () => t("nav"),
    iconSvg: ICON,
    stageStore: createWorkbenchStageStore(t, INSPIRATION_TAB_ID),
    locale,
    access: "cloud",
    customClassName: "omnimux-inspiration-entry",
    datasetKey: "data-omnimux-inspiration-entry"
  });
}

// src/client/InspirationStage.jsx
var import_react8 = require("react");

// src/client/InspirationSection.jsx
var import_react7 = require("react");

// src/client/ConfirmRemoveDialog.jsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function ConfirmRemoveDialog({ t, count, busy, onCancel, onConfirm }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    ConfirmModal,
    {
      open: true,
      onClose: onCancel,
      title: t("confirmRemove.title").replace("{n}", String(count)),
      message: t("confirmRemove.description"),
      confirmLabel: busy ? t("confirmRemove.deleting") : t("confirmRemove.confirm"),
      cancelLabel: t("confirmRemove.cancel"),
      confirmVariant: "danger",
      confirmLoading: busy,
      onConfirm
    }
  );
}

// src/client/InspirationCoverCard.jsx
var import_react2 = require("react");

// src/client/api.js
async function inspirationRequest(path, opts = {}) {
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
function isQuotaHttpResult(result) {
  if (!result || result.ok) return false;
  if (result.status === 402) return true;
  const err = result.body && typeof result.body === "object" ? result.body.error : null;
  return err === "quota-exceeded";
}
function notifyQuota(result, context) {
  const quota = typeof window !== "undefined" ? window.__omnimuxQuota : void 0;
  if (!quota || typeof quota.notify !== "function" || !isQuotaHttpResult(result)) return result;
  quota.notify({ status: result.status, body: result.body, code: result.body?.error }, context);
  return result;
}
function quotaGuard(fn, context) {
  return (...args) => {
    const quota = typeof window !== "undefined" ? window.__omnimuxQuota : void 0;
    const run = () => Promise.resolve(fn(...args)).then((result) => notifyQuota(result, context));
    if (!quota || typeof quota.ensureQuota !== "function") return run();
    return Promise.resolve(quota.ensureQuota(context)).then((gate) => {
      if (gate?.ok === false && gate.reason === "quota") return { ok: false, status: 402, body: { error: "quota-exceeded" } };
      if (gate?.ok === false) return { ok: false, status: 401, body: { error: "needs-omnimux" } };
      return run();
    });
  };
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
          kind: "write",
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
function whenAuthReady(cb) {
  if (typeof window === "undefined") return () => {
  };
  let done = false;
  const attempt = () => {
    if (done) return;
    const api = window.__omnimuxAuth;
    if (!api || typeof api.ensureLogin !== "function") return;
    done = true;
    clearInterval(timer);
    cb(api);
  };
  const timer = setInterval(attempt, 500);
  attempt();
  return () => {
    done = true;
    clearInterval(timer);
  };
}
var CACHE_TTL_MS = 12e4;
var memoryCache = /* @__PURE__ */ new Map();
function getInspirationCache(key) {
  const entry = memoryCache.get(key);
  if (!entry) return null;
  const isStale = Date.now() - entry.at > CACHE_TTL_MS;
  return { data: entry.data, isStale };
}
function setInspirationCache(key, data) {
  memoryCache.set(key, { data, at: Date.now() });
}
function invalidateInspirationCache() {
  memoryCache.clear();
}
function listInspirations(filters = {}) {
  const query = new URLSearchParams();
  for (const key of ["type", "tag", "tags", "q", "is_favorite", "sort", "page", "page_size"]) {
    const value = filters[
      /** @type {keyof typeof filters} */
      key
    ];
    if (value == null || value === "") continue;
    query.set(key, String(value));
  }
  const suffix = query.toString() ? `?${query}` : "";
  return inspirationRequest(`/omnimux/inspiration${suffix}`);
}
var listInspirationsGuarded = quotaGuard(authGuard(listInspirations), { capability: "inspiration" });
function listLocalInspirations(filters = {}) {
  const query = new URLSearchParams();
  for (const key of ["type", "tag", "tags", "q", "platform", "is_favorite", "sort", "page", "page_size"]) {
    const value = filters[
      /** @type {keyof typeof filters} */
      key
    ];
    if (value == null || value === "") continue;
    query.set(key, String(value));
  }
  const suffix = query.toString() ? `?${query}` : "";
  return inspirationRequest(`/omnimux/inspiration/local${suffix}`);
}
async function loadInspirationsAtomic(params) {
  const { tab = "all", q = "", type = "", sort = "hot", favorite = "0", page = 1, pageSize = 20 } = params;
  const filterArgs = {
    q: q.trim() || void 0,
    type: type || void 0,
    sort: sort || void 0,
    is_favorite: favorite === "1" ? "1" : void 0,
    page,
    page_size: pageSize
  };
  if (tab === "local") {
    const res = await listLocalInspirations(filterArgs);
    if (!res.ok) throw new Error(res.body?.error || `HTTP ${res.status}`);
    const items2 = (res.body?.data?.items || []).map((it) => ({ ...it, is_local: true }));
    const total2 = Number(res.body?.data?.total) || items2.length;
    return { items: items2, total: total2, hasMore: items2.length === pageSize && page * pageSize < total2, phase: "ready" };
  }
  if (tab === "public") {
    const res = await listInspirationsGuarded(filterArgs);
    if (res.status === 401) return { items: [], total: 0, hasMore: false, phase: "need-login" };
    if (!res.ok) throw new Error(res.body?.error || `HTTP ${res.status}`);
    const items2 = (res.body?.data?.items || []).map((it) => ({ ...it, is_local: false }));
    const total2 = Number(res.body?.data?.total) || items2.length;
    return { items: items2, total: total2, hasMore: items2.length === pageSize && page * pageSize < total2, phase: "ready" };
  }
  const [localOutcome, pubOutcome] = await Promise.allSettled([
    listLocalInspirations(filterArgs),
    listInspirationsGuarded(filterArgs)
  ]);
  let items = [];
  let total = 0;
  let needLogin = false;
  if (localOutcome.status === "fulfilled" && localOutcome.value.ok) {
    const lItems = (localOutcome.value.body?.data?.items || []).map((it) => ({ ...it, is_local: true }));
    items.push(...lItems);
    total += Number(localOutcome.value.body?.data?.total) || lItems.length;
  }
  if (pubOutcome.status === "fulfilled") {
    const pubRes = pubOutcome.value;
    if (pubRes.status === 401) {
      needLogin = true;
    } else if (pubRes.ok) {
      const pItems = (pubRes.body?.data?.items || []).map((it) => ({ ...it, is_local: false }));
      items.push(...pItems);
      total += Number(pubRes.body?.data?.total) || pItems.length;
    }
  }
  return {
    items,
    total,
    hasMore: items.length >= pageSize,
    phase: needLogin && items.length === 0 ? "need-login" : "ready"
  };
}
function importLocalInspiration(payload) {
  invalidateInspirationCache();
  return inspirationRequest("/omnimux/inspiration/local/import-url", {
    method: "POST",
    body: payload
  });
}
function triggerAnalyzeInspiration(id) {
  invalidateInspirationCache();
  return quotaGuard(() => inspirationRequest(`/omnimux/inspiration/local/${encodeURIComponent(id)}/analyze`, {
    method: "POST"
  }), { capability: "inspiration-analyze" })();
}
function translateInspiration(id, lang = "zh") {
  invalidateInspirationCache();
  return quotaGuard(() => inspirationRequest(`/omnimux/inspiration/local/${encodeURIComponent(id)}/translate`, {
    method: "POST",
    body: { lang }
  }), { capability: "inspiration-analyze" })();
}
function patchLocalInspiration(id, patch) {
  invalidateInspirationCache();
  return inspirationRequest(`/omnimux/inspiration/local/${encodeURIComponent(id)}`, {
    method: "PATCH",
    body: patch
  });
}
function batchDeleteLocalInspirations(ids) {
  invalidateInspirationCache();
  return inspirationRequest("/omnimux/inspiration/local/batch-delete", {
    method: "POST",
    body: { ids }
  });
}
var listTags = quotaGuard(
  () => inspirationRequest("/omnimux/inspiration/tags"),
  { capability: "inspiration" }
);
function hostMediaSrc(url) {
  if (typeof url !== "string" || url === "") return "";
  if (url.includes("..")) return "";
  if (/^https?:\/\//i.test(url)) return url;
  if (url.startsWith("/omnimux/inspiration/local/media/")) return url;
  if (url.startsWith("/omnimux/inspiration/media/")) return url;
  if (url.startsWith("/api/inspiration/v1/media/")) {
    return `/omnimux/inspiration/media/${url.slice("/api/inspiration/v1/media/".length)}`;
  }
  return `/omnimux/inspiration/media/${url.replace(/^\/+/, "")}`;
}
function pickCoverSrc(row) {
  if (!row || typeof row !== "object") return "";
  const rec = (
    /** @type {Record<string, unknown>} */
    row
  );
  return hostMediaSrc(rec.cover_key ?? rec.cover_url);
}
function isUsableCoverSize(width, height) {
  return Number(width) >= 8 && Number(height) >= 8;
}
var TIKTOK_VIDEO_RE = /tiktok\.com\/@?[^/]+\/video\/(\d{15,25})/i;
var TIKTOK_V_RE = /tiktok\.com\/v\/(\d{15,25})/i;
function extractTikTokVideoId(url) {
  if (typeof url !== "string" || !url.trim()) return null;
  const m = url.match(TIKTOK_VIDEO_RE) || url.match(TIKTOK_V_RE);
  if (m && m[1]) return m[1];
  return null;
}
function resolveTikTokEmbedUrl(sourceUrlOrId) {
  if (!sourceUrlOrId) return null;
  const raw = String(sourceUrlOrId).trim();
  if (/^\d{15,25}$/.test(raw)) {
    return `https://www.tiktok.com/player/v1/${raw}`;
  }
  const id = extractTikTokVideoId(raw);
  return id ? `https://www.tiktok.com/player/v1/${id}` : null;
}
function resolveCreatorProfileUrl(creator, sourceUrl = "", platform = "") {
  if (creator && typeof creator === "object") {
    const rec = (
      /** @type {Record<string, unknown>} */
      creator
    );
    if (typeof rec.profile_url === "string" && /^https?:\/\//i.test(rec.profile_url)) {
      return rec.profile_url;
    }
    if (typeof rec.url === "string" && /^https?:\/\//i.test(rec.url)) {
      return rec.url;
    }
  }
  const rawHandle = typeof creator === "string" ? creator : typeof creator === "object" && creator !== null ? String(
    /** @type {Record<string, unknown>} */
    creator.handle || /** @type {Record<string, unknown>} */
    creator.name || ""
  ) : "";
  let handle = rawHandle.replace(/^@+/, "").trim();
  const sUrl = typeof sourceUrl === "string" ? sourceUrl : "";
  const plat = typeof platform === "string" ? platform.toLowerCase() : "";
  if (!handle || handle.toLowerCase() === "creator" || handle.toLowerCase() === "social") {
    const m = sUrl.match(/@([^/?#]+)/);
    if (m && m[1]) handle = m[1];
    else return null;
  }
  const sUrlLower = sUrl.toLowerCase();
  if (sUrlLower.includes("instagram.com") || plat === "instagram") {
    return `https://www.instagram.com/${handle}`;
  }
  if (sUrlLower.includes("youtube.com") || sUrlLower.includes("youtu.be") || plat === "youtube") {
    return `https://www.youtube.com/@${handle}`;
  }
  if (sUrlLower.includes("twitter.com") || sUrlLower.includes("x.com") || plat === "twitter" || plat === "x") {
    return `https://x.com/${handle}`;
  }
  return `https://www.tiktok.com/@${handle}`;
}

// src/client/InspirationCoverCard.jsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var ICON_EYE = /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M2.062 12.348a1 1 0 0 1 0-.696A10.75 10.75 0 0 1 21.938 12.348a1 1 0 0 1 0 .696A10.75 10.75 0 0 1 2.062 12.348" }),
  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "12", cy: "12", r: "3" })
] });
var ICON_REPLICATE = /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: [
  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("rect", { x: "8", y: "8", width: "12", height: "12", rx: "2" }),
  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M4 16V6a2 2 0 0 1 2-2h10" })
] });
function stopCardEvent(e) {
  e.preventDefault();
  e.stopPropagation();
}
function isolateInnerCardKey(e) {
  e.stopPropagation();
  if (e.key === "Enter" || e.key === " ") e.preventDefault();
}
function InspirationCoverCard({ card }) {
  const { row, t, onSelect, onReplicate, selected, onToggleSelect, selecting, replicateBusy } = card;
  const title = String(row.title || row.source_url || row.id);
  const cover = pickCoverSrc(row);
  const [broken, setBroken] = (0, import_react2.useState)(!cover);
  (0, import_react2.useEffect)(() => {
    setBroken(!cover);
  }, [cover]);
  const platform = (row.source_platform || (row.is_local ? "local" : "tiktok")).toUpperCase();
  const isLocal = Boolean(row.is_local);
  const anyBusy = Boolean(replicateBusy);
  const handleClick = () => {
    if (selecting && isLocal && onToggleSelect) {
      onToggleSelect(row);
      return;
    }
    onSelect(row);
  };
  const handleDetail = (e) => {
    stopCardEvent(e);
    onSelect(row);
  };
  const handleReplicate = (e) => {
    stopCardEvent(e);
    if (anyBusy) return;
    if (typeof onReplicate === "function") onReplicate(row);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "article",
    {
      className: "omnimux-inspiration-card-pure",
      "aria-selected": selected ? "true" : "false",
      onClick: handleClick,
      role: "button",
      tabIndex: 0,
      onKeyDown: (e) => {
        if (e.key === "Enter" || e.key === " ") {
          if (selecting && isLocal && onToggleSelect) onToggleSelect(row);
          else onSelect(row);
        }
      },
      children: [
        isLocal && onToggleSelect ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          IconButton,
          {
            variant: "ghost",
            size: "xs",
            className: "omnimux-inspiration-card-check",
            "data-selected": selected ? "true" : "false",
            "aria-label": t("select.toggle"),
            "aria-pressed": selected ? "true" : "false",
            title: "",
            onClick: (e) => {
              e.stopPropagation();
              onToggleSelect(row);
            },
            onMouseDown: (e) => e.stopPropagation(),
            onPointerDown: (e) => e.stopPropagation(),
            onKeyDown: (e) => {
              isolateInnerCardKey(e);
              if (e.key === "Enter" || e.key === " ") onToggleSelect(row);
            },
            children: selected ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3.2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("polyline", { points: "20 6 9 17 4 12" }) }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", {})
          }
        ) : null,
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: `omnimux-inspiration-badge-platform ${isLocal ? "local" : ""}`, children: isLocal ? "\u672C\u5730" : platform }),
        broken ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "omnimux-inspiration-cover-fallback", "aria-hidden": "true", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "omnimux-inspiration-fallback-icon", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("polygon", { points: "5 3 19 12 5 21 5 3" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "omnimux-inspiration-fallback-title", children: title.replace(/^https?:\/\/(www\.)?/, "") })
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "img",
          {
            className: "omnimux-inspiration-cover-img",
            src: cover,
            alt: title,
            loading: "lazy",
            decoding: "async",
            onError: () => setBroken(true),
            onLoad: (event) => {
              const node = event.currentTarget;
              if (!isUsableCoverSize(node.naturalWidth, node.naturalHeight)) setBroken(true);
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "omnimux-inspiration-card-overlay", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "omnimux-inspiration-overlay-play", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M8 5v14l11-7z" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "omnimux-inspiration-overlay-cta", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
              "button",
              {
                type: "button",
                className: "omnimux-inspiration-overlay-cta-btn secondary",
                "aria-label": t("card.cta.detail"),
                onClick: handleDetail,
                onMouseDown: (e) => e.stopPropagation(),
                onPointerDown: (e) => e.stopPropagation(),
                onKeyDown: (e) => {
                  isolateInnerCardKey(e);
                  if (e.key === "Enter" || e.key === " ") handleDetail(e);
                },
                children: [
                  ICON_EYE,
                  t("card.cta.detail")
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
              "button",
              {
                type: "button",
                className: "omnimux-inspiration-overlay-cta-btn primary",
                "aria-label": t("card.cta.tryFull"),
                "aria-disabled": anyBusy ? "true" : "false",
                disabled: anyBusy,
                onClick: handleReplicate,
                onMouseDown: (e) => e.stopPropagation(),
                onPointerDown: (e) => e.stopPropagation(),
                onKeyDown: (e) => {
                  isolateInnerCardKey(e);
                  if (e.key === "Enter" || e.key === " ") handleReplicate(e);
                },
                children: [
                  ICON_REPLICATE,
                  t("card.cta.try")
                ]
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "omnimux-inspiration-overlay-footer", children: title.length > 32 ? `${title.slice(0, 32)}\u2026` : title })
        ] })
      ]
    }
  );
}

// src/client/InspirationInlineImportDialog.jsx
var import_react4 = require("react");

// src/client/import-dialog-controls.jsx
var import_react3 = require("react");

// src/client/import-dialog-prefs.js
var AUTO_ANALYZE_STORAGE_KEY = "omnimux_inspiration_auto_analyze";
function readAutoAnalyzePreference() {
  try {
    const raw = globalThis.localStorage?.getItem(AUTO_ANALYZE_STORAGE_KEY);
    if (raw === null || raw === void 0) return true;
    return raw === "true" || raw === "1";
  } catch {
    return true;
  }
}
function writeAutoAnalyzePreference(next) {
  try {
    globalThis.localStorage?.setItem(AUTO_ANALYZE_STORAGE_KEY, next ? "true" : "false");
  } catch {
  }
}

// src/client/import-dialog-controls.jsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function CollapsibleTagsField({ t, value, disabled = false, onChange }) {
  const [expanded, setExpanded] = (0, import_react3.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "omnimux-inspiration-tags-collapse", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      "button",
      {
        type: "button",
        className: "omnimux-inspiration-tags-toggle",
        "aria-expanded": expanded,
        disabled,
        onClick: () => {
          setExpanded((prev) => !prev);
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "omnimux-inspiration-tags-toggle-label", children: t("add.tagsToggle") }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "span",
            {
              className: `omnimux-inspiration-tags-toggle-chevron${expanded ? " is-open" : ""}`,
              "aria-hidden": "true",
              children: "\u25BE"
            }
          )
        ]
      }
    ),
    expanded ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      InputField,
      {
        type: "text",
        label: t("add.tagsLabel"),
        placeholder: t("add.tagsPlaceholder"),
        value,
        disabled,
        onChange: (e) => {
          onChange(e.target.value);
        }
      }
    ) : null
  ] });
}
function AutoAnalyzeSwitch({ t, checked, disabled = false, onChange }) {
  const handleToggle = (0, import_react3.useCallback)(() => {
    if (disabled) return;
    const next = !checked;
    writeAutoAnalyzePreference(next);
    onChange(next);
  }, [checked, disabled, onChange]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "omnimux-inspiration-switch-row", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "button",
      {
        type: "button",
        role: "switch",
        className: "omnimux-inspiration-switch",
        "aria-checked": String(checked),
        "aria-label": t("add.autoAnalyze"),
        disabled,
        onClick: handleToggle,
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "omnimux-inspiration-switch-knob" })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "omnimux-inspiration-switch-label", children: t("add.autoAnalyze") })
  ] });
}

// src/client/InspirationInlineImportDialog.jsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function InspirationInlineImportDialog({ open, t, onClose, onImported }) {
  const [url, setUrl] = (0, import_react4.useState)("");
  const [tags, setTags] = (0, import_react4.useState)("");
  const [autoAnalyze, setAutoAnalyze] = (0, import_react4.useState)(() => readAutoAnalyzePreference());
  const [loading, setLoading] = (0, import_react4.useState)(false);
  const [error, setError] = (0, import_react4.useState)(null);
  if (!open) return null;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!url.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const tagList = tags.split(/[,，\s]+/).filter(Boolean);
      const res = await importLocalInspiration({
        url: url.trim(),
        tags: tagList,
        auto_analyze: autoAnalyze
      });
      if (res.ok && res.body?.data) {
        onImported(res.body.data);
        onClose();
      } else if (res.status === 409 && res.body?.data) {
        onImported(res.body.data);
        onClose();
      } else {
        setError(res.body?.error || t("add.error"));
      }
    } catch (err) {
      setError(String(err.message || err));
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    ModalDialog,
    {
      open,
      onClose,
      title: t("add.dialogTitle"),
      closeLabel: t("close"),
      footer: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Button, { variant: "outline", onClick: onClose, disabled: loading, children: t("close") }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          Button,
          {
            variant: "primary",
            loading,
            disabled: loading || !url.trim(),
            onClick: (event) => {
              void handleSubmit(event);
            },
            children: loading ? t("add.importing") : t("add.submit")
          }
        )
      ] }),
      children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("form", { className: "omnimux-inspiration-import-body", onSubmit: handleSubmit, children: [
        error ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "omnimux-inspiration-error-text", role: "alert", children: error }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          InputField,
          {
            type: "url",
            required: true,
            label: t("add.urlLabel"),
            placeholder: t("add.urlPlaceholder"),
            value: url,
            disabled: loading,
            onChange: (e) => setUrl(e.target.value)
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          CollapsibleTagsField,
          {
            t,
            value: tags,
            disabled: loading,
            onChange: setTags
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          AutoAnalyzeSwitch,
          {
            t,
            checked: autoAnalyze,
            disabled: loading,
            onChange: setAutoAnalyze
          }
        )
      ] })
    }
  );
}

// src/client/InspirationPreviewModal.jsx
var import_react5 = require("react");

// src/structure-script.js
function parseDurationSeconds(value) {
  if (typeof value === "number" && Number.isFinite(value) && value >= 0) return value;
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  if (/^\d{1,2}:\d{2}(:\d{2})?$/.test(trimmed)) {
    const parts = trimmed.split(":").map((part) => Number(part));
    if (parts.some((part) => !Number.isFinite(part))) return null;
    if (parts.length === 2) return parts[0] * 60 + parts[1];
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  }
  const numeric = Number(trimmed);
  if (Number.isFinite(numeric) && numeric >= 0) return numeric;
  return null;
}
function formatTimecode(seconds) {
  const value = parseDurationSeconds(seconds);
  if (value == null) return "";
  const total = Math.floor(value);
  const minutes = Math.floor(total / 60);
  const rest = total % 60;
  return `${minutes}:${String(rest).padStart(2, "0")}`;
}
function formatInspirationDate(iso) {
  if (typeof iso !== "string" || !iso.trim()) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
function segmentsFromTimecodeLines(content) {
  if (typeof content !== "string" || !content.trim()) return [];
  const out = [];
  for (const line of content.split("\n")) {
    const match = line.match(/^\s*(\d{1,2}:\d{2}(?::\d{2})?)\s+(.+?)\s*$/);
    if (!match) continue;
    out.push({
      id: `seg_${out.length + 1}`,
      start: parseDurationSeconds(match[1]),
      end: null,
      text: match[2],
      section: ""
    });
  }
  return out.length >= 2 ? out : [];
}

// src/client/inspiration-preview-data.js
function text(value) {
  return typeof value === "string" ? value : "";
}
function renderPlainBreakdownText(value) {
  return text(value).replace(/(^|\n)[ \t]*(?:#{1,6})[ \t]*/g, "$1").replace(/(^|\n)[ \t]*(?:[*-]|\d+[.)])[ \t]+/g, "$1\xB7 ").replace(/[*_]{2}/g, "").replace(/(^|\n)[ \t]*>[ \t]?/g, "$1").replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
}
function analysisOf(item) {
  if (item.analysis && typeof item.analysis === "object") return item.analysis;
  if (item.deconstruction && typeof item.deconstruction === "object") return item.deconstruction;
  return {};
}
function collectSegments(item, analysis, script) {
  const raw = Array.isArray(analysis.segments) ? analysis.segments : Array.isArray(item.segments) ? item.segments : [];
  const normalized = raw.map((row, index) => {
    if (!row || typeof row !== "object") return null;
    const value = text(row.text);
    if (!value) return null;
    const start = parseDurationSeconds(row.start);
    const end = parseDurationSeconds(row.end);
    return {
      id: text(row.id) || `seg_${index + 1}`,
      start,
      end,
      text: value,
      section: text(row.section),
      startLabel: start == null ? "" : formatTimecode(start)
    };
  }).filter(Boolean);
  if (normalized.length) return normalized;
  return segmentsFromTimecodeLines(script).map((row) => ({
    ...row,
    startLabel: row.start == null ? "" : formatTimecode(row.start)
  }));
}
function collectSections(analysis) {
  const raw = Array.isArray(analysis.sections) ? analysis.sections : [];
  return raw.map((row, index) => {
    if (!row || typeof row !== "object") return null;
    const title = text(row.title);
    const analysisText = text(row.analysis);
    const quote = text(row.quote);
    if (!title && !analysisText && !quote) return null;
    return {
      id: text(row.id) || `sec_${index + 1}`,
      title: title || `Section ${index + 1}`,
      quote,
      analysis: analysisText,
      source_segment_ids: Array.isArray(row.source_segment_ids) ? row.source_segment_ids.filter((id) => typeof id === "string" && id) : []
    };
  }).filter(Boolean);
}
function getInspirationPreviewData(item = {}) {
  const safeItem = item && typeof item === "object" ? item : {};
  const analysis = analysisOf(safeItem);
  const content = text(safeItem.content);
  const caption = text(safeItem.caption) || text(safeItem.description);
  const narrative = text(analysis.narrative_strategy) || text(analysis.narrative);
  const script = content || narrative || caption;
  const creator = analysis.creator && typeof analysis.creator === "object" ? analysis.creator : safeItem.author && typeof safeItem.author === "object" ? safeItem.author : {};
  const stats = safeItem.stats && typeof safeItem.stats === "object" ? safeItem.stats : {};
  const durationSeconds = parseDurationSeconds(safeItem.duration) ?? parseDurationSeconds(analysis.duration) ?? parseDurationSeconds(stats.duration) ?? parseDurationSeconds(stats.video_duration);
  const segments = collectSegments(safeItem, analysis, script);
  const translation = safeItem.script_translation && typeof safeItem.script_translation === "object" ? safeItem.script_translation : {};
  return {
    safeItem,
    analysis,
    title: String(safeItem.title || analysis.video_name || "\u7075\u611F\u8BE6\u60C5"),
    script,
    caption,
    durationSeconds,
    durationLabel: durationSeconds == null ? "" : formatTimecode(durationSeconds),
    platform: text(safeItem.platform) || text(safeItem.source_platform),
    creator,
    stats,
    createdAt: formatInspirationDate(text(safeItem.created_at)),
    publishedAt: formatInspirationDate(text(safeItem.published_at)),
    favoritedAt: formatInspirationDate(text(safeItem.favorited_at)),
    isFavorite: Boolean(safeItem.is_favorite),
    hook: text(analysis.hook_highlight) || text(analysis.hook) || text(analysis["3s_hook"]),
    targetGoal: text(analysis.target_goal) || text(analysis.goal),
    narrative,
    visual: text(analysis.visual_breakdown) || text(analysis.breakdown) || text(analysis.content_breakdown),
    replication: text(analysis.replication_action) || text(analysis.replication_guide),
    rawMarkdown: text(analysis.markdown) || text(analysis.raw_markdown) || (typeof safeItem.deconstruction === "string" ? safeItem.deconstruction : ""),
    tags: Array.isArray(safeItem.tags) ? safeItem.tags : [],
    segments,
    hasTimecodes: segments.some((row) => row.start != null),
    segmentCount: segments.length,
    sections: collectSections(analysis),
    translationText: text(translation.text),
    translationLang: text(translation.lang),
    translationSegments: Array.isArray(translation.segments) ? translation.segments : [],
    analyzedAt: formatInspirationDate(text(analysis.analyzed_at))
  };
}
function hasDeconstruction(data) {
  return Boolean(data && (data.hook || data.targetGoal || data.narrative || data.visual || data.replication || data.rawMarkdown || data.sections && data.sections.length));
}
function scriptCopyText(data, translated) {
  if (translated && data.translationText) return data.translationText;
  if (data.segments?.length) {
    return data.segments.map((row) => row.startLabel ? `${row.startLabel}  ${row.text}` : row.text).join("\n");
  }
  return data.script || "";
}
function deconstructionCopyText(data) {
  if (data.sections?.length) {
    return data.sections.map((section) => {
      const quote = section.quote ? `
> ${section.quote}` : "";
      return `## ${section.title}${quote}
${section.analysis}`.trim();
    }).join("\n\n");
  }
  const blocks = [
    ["Hook", data.hook],
    ["Goal", data.targetGoal],
    ["Narrative", data.narrative],
    ["Visual", data.visual],
    ["Replication", data.replication]
  ].filter(([, value]) => value);
  if (blocks.length) return blocks.map(([title, value]) => `## ${title}
${value}`).join("\n\n");
  return data.rawMarkdown || "";
}

// src/client/InspirationPreviewModal.jsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var ICON_COPY = /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": "true", children: [
  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("rect", { x: "8", y: "8", width: "12", height: "12", rx: "2" }),
  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M4 16V6a2 2 0 0 1 2-2h10" })
] });
var ICON_CLOSE = /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M18 6 6 18M6 6l12 12" }) });
var ICON_REPLICATE2 = /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": "true", children: [
  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("rect", { x: "8", y: "8", width: "12", height: "12", rx: "2" }),
  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M4 16V6a2 2 0 0 1 2-2h10" })
] });
var ICON_EXTERNAL = /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": "true", children: [
  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M14 4h6v6M20 4 11 13" }),
  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" })
] });
var ICON_STAR = /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("polygon", { points: "12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9" }) });
var ICON_STAR_ON = /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("polygon", { points: "12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9" }) });
function CopyButton({ value, label, copiedLabel, iconOnly = false }) {
  const [copied, setCopied] = (0, import_react5.useState)(false);
  if (!value) return null;
  const copy = async () => {
    try {
      const clipboardApi = navigator["clipboard"];
      await clipboardApi?.writeText(String(value));
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    "button",
    {
      type: "button",
      className: `omnimux-inspiration-modal-copy${iconOnly ? " is-icon-only" : ""}`,
      onClick: copy,
      title: iconOnly ? label : void 0,
      "aria-label": label,
      children: [
        ICON_COPY,
        iconOnly ? null : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: copied ? copiedLabel : label })
      ]
    }
  );
}
function translatedSegmentText(data, segment) {
  const hit = data.translationSegments.find((row) => row.id === segment.id);
  return hit?.text || data.translationText || segment.text;
}
function InspirationPreviewModal({ row, t, onClose, onItemUpdated, onReplicate, replicateBusy }) {
  const [item, setItem] = (0, import_react5.useState)(row);
  const [activeTab, setActiveTab] = (0, import_react5.useState)("video");
  const [analyzing, setAnalyzing] = (0, import_react5.useState)(false);
  const [analyzeError, setAnalyzeError] = (0, import_react5.useState)(null);
  const [translating, setTranslating] = (0, import_react5.useState)(false);
  const [translateError, setTranslateError] = (0, import_react5.useState)(null);
  const [showTranslation, setShowTranslation] = (0, import_react5.useState)(false);
  const [favoriteBusy, setFavoriteBusy] = (0, import_react5.useState)(false);
  const [activeSegmentId, setActiveSegmentId] = (0, import_react5.useState)("");
  const [collapsed, setCollapsed] = (0, import_react5.useState)({});
  const [showRaw, setShowRaw] = (0, import_react5.useState)(false);
  (0, import_react5.useEffect)(() => setItem(row), [row]);
  (0, import_react5.useEffect)(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);
  const data = (0, import_react5.useMemo)(() => getInspirationPreviewData(item), [item]);
  if (!row) return null;
  const sourceUrl = data.safeItem.source_url;
  const embedUrl = resolveTikTokEmbedUrl(data.analysis.embed_player_url || sourceUrl);
  const localVideoUrl = data.safeItem.local_paths?.video ? `/omnimux/inspiration/local/media/${encodeURIComponent(data.safeItem.id)}/video.mp4` : null;
  const cover = pickCoverSrc(data.safeItem);
  const creator = data.creator && typeof data.creator === "object" ? data.creator : {};
  const creatorUrl = resolveCreatorProfileUrl(creator, sourceUrl, data.platform);
  const creatorLabel = creator.name || creator.handle || "";
  const dimensions = [
    ["hook", t("modal.deconstruction.hook"), data.hook],
    ["goal", t("modal.deconstruction.goal"), data.targetGoal],
    ["narrative", t("modal.deconstruction.narrative"), data.narrative],
    ["visual", t("modal.deconstruction.visual"), data.visual],
    ["replication", t("modal.deconstruction.replication"), data.replication]
  ];
  const applyItem = (next) => {
    setItem(next);
    onItemUpdated?.(next);
  };
  const handleAnalyze = async () => {
    if (analyzing || !data.safeItem.id) return;
    setAnalyzing(true);
    setAnalyzeError(null);
    try {
      const response = await triggerAnalyzeInspiration(data.safeItem.id);
      if (response.ok && response.body?.data) {
        applyItem(response.body.data);
        setActiveTab("deconstruction");
      } else {
        setAnalyzeError(response.body?.error || t("modal.deconstruction.error"));
      }
    } catch (error) {
      setAnalyzeError(String(error?.message || error));
    } finally {
      setAnalyzing(false);
    }
  };
  const handleTranslate = async () => {
    if (translating || !data.safeItem.id || !data.script) return;
    if (data.translationText) {
      setShowTranslation((value) => !value);
      return;
    }
    setTranslating(true);
    setTranslateError(null);
    try {
      const lang = typeof navigator !== "undefined" && String(navigator.language || "").toLowerCase().startsWith("zh") ? "zh" : "en";
      const response = await translateInspiration(data.safeItem.id, lang);
      if (response.ok && response.body?.data) {
        applyItem(response.body.data);
        setShowTranslation(true);
      } else {
        setTranslateError(response.body?.error || t("modal.script.translateFailed"));
      }
    } catch (error) {
      setTranslateError(String(error?.message || error));
    } finally {
      setTranslating(false);
    }
  };
  const handleFavorite = async () => {
    if (favoriteBusy || !data.safeItem.id) return;
    setFavoriteBusy(true);
    try {
      const response = await patchLocalInspiration(data.safeItem.id, { is_favorite: !data.isFavorite });
      if (response.ok && response.body?.data) applyItem(response.body.data);
    } finally {
      setFavoriteBusy(false);
    }
  };
  const highlightSegment = (id) => {
    setActiveSegmentId(id);
    setActiveTab("script");
  };
  const highlightSectionFromSegment = (segment) => {
    setActiveSegmentId(segment.id);
    const section = data.sections.find((row2) => row2.source_segment_ids.includes(segment.id));
    if (section) setActiveTab("deconstruction");
  };
  const scriptValue = scriptCopyText(data, showTranslation);
  const deconValue = deconstructionCopyText(data);
  const analyzeLabel = hasDeconstruction(data) ? t("modal.header.reanalyze") : t("modal.header.analyze");
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "omnimux-inspiration-modal-backdrop", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "omnimux-inspiration-modal-wrapper", onClick: (event) => event.stopPropagation(), children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "omnimux-inspiration-modal-container", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("header", { className: "omnimux-inspiration-modal-header", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "omnimux-inspiration-modal-heading", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h2", { children: data.title }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CopyButton, { value: data.title, label: t("modal.header.copy"), copiedLabel: t("modal.header.copied"), iconOnly: true })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "omnimux-inspiration-modal-header-meta", children: [
        data.durationLabel ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: data.durationLabel }) : null,
        data.segmentCount ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: t("modal.header.segments").replace("{n}", String(data.segmentCount)) }) : null,
        data.platform ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "omnimux-inspiration-modal-platform", children: data.platform }) : null
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "omnimux-inspiration-modal-actions", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(Button, { variant: "ghost", onClick: handleFavorite, disabled: favoriteBusy, "aria-label": t("modal.header.favorite"), children: [
          data.isFavorite ? ICON_STAR_ON : ICON_STAR,
          data.isFavorite ? t("modal.header.favorited") : t("modal.header.favorite")
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Button, { variant: "secondary", onClick: handleAnalyze, loading: analyzing, disabled: analyzing, children: analyzing ? t("modal.header.analyzing") : analyzeLabel }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(IconButton, { className: "omnimux-inspiration-modal-close", variant: "ghost", size: "sm", "aria-label": t("close"), onClick: onClose, children: ICON_CLOSE })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("nav", { className: "omnimux-inspiration-modal-mobile-tabs", role: "tablist", "aria-label": t("modal.header.tabs"), children: ["video", "script", "deconstruction"].map((tab) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "button",
      {
        type: "button",
        role: "tab",
        "aria-selected": activeTab === tab,
        className: activeTab === tab ? "active" : "",
        onClick: () => setActiveTab(tab),
        children: t(`modal.panel.${tab}`)
      },
      tab
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("main", { className: "omnimux-inspiration-modal-body", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("section", { className: `omnimux-inspiration-modal-panel omnimux-inspiration-modal-video-panel ${activeTab === "video" ? "is-active" : ""}`, children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "omnimux-inspiration-modal-panel-heading", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { children: t("modal.panel.video") }) }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "omnimux-inspiration-modal-player-box", children: embedUrl ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("iframe", { title: data.title, src: embedUrl, className: "omnimux-inspiration-player-frame", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowFullScreen: true }) : localVideoUrl ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("video", { src: localVideoUrl, controls: true, className: "omnimux-inspiration-player-frame" }) : cover ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("img", { src: cover, alt: data.title, className: "omnimux-inspiration-modal-cover-bg" }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "omnimux-inspiration-cover-fallback", children: data.title.slice(0, 1) }) }),
        sourceUrl ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "omnimux-inspiration-modal-meta-row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("a", { className: "omnimux-inspiration-modal-link", href: sourceUrl, target: "_blank", rel: "noopener noreferrer", title: sourceUrl, children: [
            sourceUrl,
            " ",
            ICON_EXTERNAL
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CopyButton, { value: sourceUrl, label: t("modal.meta.copyLink"), copiedLabel: t("modal.header.copied"), iconOnly: true })
        ] }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "omnimux-inspiration-modal-meta-list", children: [
          creatorLabel ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "omnimux-inspiration-modal-meta-row", children: [
            creatorUrl ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("a", { className: "omnimux-inspiration-creator-link", href: creatorUrl, target: "_blank", rel: "noopener noreferrer", children: [
              t("modal.meta.author"),
              ": ",
              creatorLabel
            ] }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { children: [
              t("modal.meta.author"),
              ": ",
              creatorLabel
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CopyButton, { value: creator.handle || creatorLabel, label: t("modal.meta.copyAuthor"), copiedLabel: t("modal.header.copied"), iconOnly: true })
          ] }) : null,
          data.publishedAt || data.createdAt ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { children: [
            data.publishedAt ? `${t("modal.meta.publishedAt")} ${data.publishedAt}` : "",
            data.publishedAt && data.createdAt ? " \xB7 " : "",
            data.createdAt ? `${t("modal.meta.createdAt")} ${data.createdAt}` : ""
          ] }) : null
        ] }),
        Object.keys(data.stats).length ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "omnimux-inspiration-stats-grid", children: [["likes", "stat.likes", "digg_count"], ["comments", "stat.comments", "comment_count"], ["shares", "stat.shares", "share_count"]].map(([key, label, fallback]) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "omnimux-inspiration-stat-item", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "omnimux-inspiration-stat-label", children: t(label) }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "omnimux-inspiration-stat-val", children: data.stats[key] ?? data.stats[fallback] ?? "-" })
        ] }, key)) }) : null
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("section", { className: `omnimux-inspiration-modal-panel omnimux-inspiration-modal-script-panel ${activeTab === "script" ? "is-active" : ""}`, children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "omnimux-inspiration-modal-panel-heading", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { children: t("modal.panel.script") }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "omnimux-inspiration-modal-panel-actions", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CopyButton, { value: scriptValue, label: t("modal.script.copy"), copiedLabel: t("modal.header.copied") }),
            data.script ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("button", { type: "button", className: "omnimux-inspiration-modal-copy", onClick: handleTranslate, disabled: translating, children: translating ? t("modal.script.translating") : showTranslation && data.translationText ? t("modal.script.showSource") : t("modal.script.translate") }) : null
          ] })
        ] }),
        translateError ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "omnimux-inspiration-error-text", children: translateError }) : null,
        data.segments.length ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("ol", { className: `omnimux-inspiration-modal-script-list ${data.hasTimecodes ? "has-timecode" : ""}`, children: data.segments.map((segment) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
          "li",
          {
            className: activeSegmentId === segment.id ? "is-active" : "",
            onClick: () => highlightSectionFromSegment(segment),
            children: [
              data.hasTimecodes ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "omnimux-inspiration-modal-timecode", children: segment.startLabel || "\u2014" }) : null,
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "omnimux-inspiration-modal-script-line", children: showTranslation ? translatedSegmentText(data, segment) : segment.text }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CopyButton, { value: showTranslation ? translatedSegmentText(data, segment) : segment.text, label: t("modal.script.copySegment"), copiedLabel: t("modal.header.copied") })
            ]
          },
          segment.id
        )) }) : data.script ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "omnimux-inspiration-modal-script-content", children: renderPlainBreakdownText(showTranslation && data.translationText ? data.translationText : data.script) }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "omnimux-inspiration-modal-empty", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: t("modal.script.empty") }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: t("modal.script.emptyHint") }),
          !hasDeconstruction(data) ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Button, { variant: "primary", onClick: handleAnalyze, loading: analyzing, disabled: analyzing, children: t("modal.deconstruction.analyze") }) : null
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("section", { className: `omnimux-inspiration-modal-panel omnimux-inspiration-modal-deconstruction-panel ${activeTab === "deconstruction" ? "is-active" : ""}`, children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "omnimux-inspiration-modal-panel-heading", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { children: t("modal.panel.deconstruction") }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CopyButton, { value: deconValue, label: t("modal.deconstruction.copy"), copiedLabel: t("modal.header.copied") })
        ] }),
        hasDeconstruction(data) ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "omnimux-inspiration-modal-dimensions", children: [
          data.sections.length ? data.sections.map((section) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
            "article",
            {
              className: section.source_segment_ids.includes(activeSegmentId) ? "is-active" : "",
              onClick: () => section.source_segment_ids[0] && highlightSegment(section.source_segment_ids[0]),
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                  "button",
                  {
                    type: "button",
                    className: "omnimux-inspiration-modal-fold",
                    onClick: (event) => {
                      event.stopPropagation();
                      setCollapsed((prev) => ({ ...prev, [section.id]: !prev[section.id] }));
                    },
                    children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h4", { children: section.title })
                  }
                ),
                collapsed[section.id] ? null : /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
                  section.quote ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("blockquote", { children: renderPlainBreakdownText(section.quote) }) : null,
                  section.analysis ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: renderPlainBreakdownText(section.analysis) }) : null
                ] })
              ]
            },
            section.id
          )) : dimensions.map(([key, label, value]) => value ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("article", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h4", { children: label }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: renderPlainBreakdownText(value) })
          ] }, key) : null),
          data.rawMarkdown ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "omnimux-inspiration-modal-raw", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("button", { type: "button", className: "omnimux-inspiration-modal-copy", onClick: () => setShowRaw((value) => !value), children: showRaw ? t("modal.deconstruction.hideRaw") : t("modal.deconstruction.showRaw") }),
            showRaw ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("pre", { children: data.rawMarkdown }) : null
          ] }) : null
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "omnimux-inspiration-modal-empty", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: analyzing ? t("modal.deconstruction.analyzing") : t("modal.deconstruction.empty") }),
          analyzeError ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "omnimux-inspiration-error-text", children: analyzeError }) : null,
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Button, { variant: "primary", onClick: handleAnalyze, loading: analyzing, disabled: analyzing, children: t("modal.deconstruction.analyze") })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("footer", { className: "omnimux-inspiration-modal-footer", children: typeof onReplicate === "function" ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
      Button,
      {
        variant: "primary",
        disabled: Boolean(replicateBusy),
        onClick: () => {
          onReplicate(data.safeItem);
          onClose?.();
        },
        children: [
          ICON_REPLICATE2,
          t("card.cta.try")
        ]
      }
    ) : null })
  ] }) }) });
}

// src/client/styles.js
var INSPIRATION_STYLES_ID = "omnimux-inspiration-styles";
var INSPIRATION_CSS = `
.omnimux-inspiration-stage {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-primary, inherit);
  overflow: hidden;
  box-sizing: border-box;
  pointer-events: auto;
}
.omnimux-inspiration-stage[data-visible="false"] {
  display: none !important;
  pointer-events: none;
}
.omnimux-inspiration-stage-body {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-sizing: border-box;
}

/* \u6839\u5BB9\u5668\u4E0E\u5FAE\u5149\u626B\u5149\u5173\u952E\u5E27 */
.omnimux-inspiration-root,
.omnimux-inspiration-root *,
.omnimux-inspiration-modal-backdrop,
.omnimux-inspiration-modal-backdrop * {
  box-sizing: border-box;
}

.omnimux-inspiration-root {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0 20px 24px;
  gap: 12px;
  background: var(--dsw-alias-bg-primary, var(--dsw-bg));
  color: var(--dsw-alias-label-primary, inherit);
  font-family: inherit;
}

/* Layer 2: Action Row */
.omnimux-inspiration-action-row {
  flex: none;
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 8px;
}

@keyframes omni-shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* \u9876\u90E8\u5BFC\u822A\u4E0E\u64CD\u4F5C\u680F */
.omnimux-inspiration-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  max-width: 100%;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--dsw-alias-border-l2, #222222);
}

.omnimux-inspiration-tabs {
  display: inline-flex;
  background: var(--dsw-alias-bg-module-platform, #141414);
  padding: 3px;
  border-radius: 9999px;
  border: 1px solid var(--dsw-alias-border-l2, #242424);
}

.omnimux-inspiration-tab {
  height: 28px;
  padding: 0 14px;
  border-radius: 9999px;
  border: none;
  background: transparent;
  color: var(--dsw-alias-label-tertiary, #888888);
  font: 500 13px/16px inherit;
  cursor: pointer;
  transition: color 120ms ease,
              background 120ms ease;
}

.omnimux-inspiration-tab:hover {
  color: var(--dsw-alias-label-primary-dimmed, #ebebeb);
}

.omnimux-inspiration-tab.active {
  background: var(--dsw-alias-bg-layer-1, #242424);
  color: var(--dsw-alias-label-primary, #ffffff);
  box-shadow: 0 1px 3px var(--dsw-alias-bg-mask-1, rgba(0,0,0,0.4));
}

.omnimux-inspiration-btn-add {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 16px;
  border-radius: 9999px;
  border: 1px solid var(--dsw-alias-border, rgba(255, 255, 255, 0.15));
  background: var(--dsw-alias-button-primary-fill, #ffffff);
  color: var(--dsw-alias-label-primary-foreground, #000000);
  font: 550 13px/16px inherit;
  cursor: pointer;
  box-shadow: 0 1px 4px var(--dsw-alias-bg-mask-1, rgba(0, 0, 0, 0.2));
  transition: all 120ms cubic-bezier(0.16, 1, 0.3, 1);
}
.omnimux-inspiration-btn-add:hover {
  background: var(--dsw-alias-button-primary-hover, #ebebeb);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px var(--dsw-alias-bg-mask-1, rgba(0, 0, 0, 0.35));
}
.omnimux-inspiration-btn-add:active {
  transform: translateY(0);
}

/* \u6781\u7B80\u53D1\u4E1D\u7EBF\u5DE5\u5177\u680F */
.omnimux-inspiration-toolbar {
  width: 100%;
  max-width: 100%;
  padding: 0;
}

.omnimux-inspiration-search-box {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1 1 200px;
  min-width: 160px;
  max-width: 360px;
}

.omnimux-inspiration-search-icon {
  position: absolute;
  left: 12px;
  pointer-events: none;
  color: var(--dsw-alias-label-tertiary, #7c7c7c);
  display: flex;
  align-items: center;
  justify-content: center;
}

.omnimux-inspiration-search {
  width: 100%;
  height: 32px;
  background: var(--dsw-alias-bg-module-platform, #141414);
  border: 1px solid var(--dsw-alias-border-l2, #242424);
  border-radius: 9999px;
  padding: 0 14px 0 34px;
  color: var(--dsw-alias-label-primary, #ffffff);
  font: 400 13px/18px inherit;
  outline: none;
  transition: border-color 120ms ease,
              background-color 120ms ease;
}
.omnimux-inspiration-search:focus {
  border-color: var(--dsw-alias-border-hover, rgba(255, 255, 255, 0.4));
  background: var(--dsw-alias-bg-layer-1, #1a1a1a);
}

.omnimux-inspiration-filters {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-left: auto;
}

.omnimux-inspiration-select {
  height: 32px;
  background: var(--dsw-alias-bg-module-platform, #141414);
  border: 1px solid var(--dsw-alias-border-l2, #242424);
  border-radius: 9999px;
  padding: 0 12px;
  color: var(--dsw-alias-label-primary-dimmed, #ebebeb);
  font: 500 12px/16px inherit;
  cursor: pointer;
  outline: none;
  transition: border-color 120ms ease,
              background-color 120ms ease;
}
.omnimux-inspiration-select:hover {
  border-color: var(--dsw-alias-border-l4, #3d3d3d);
  background: var(--dsw-alias-bg-layer-1, #1a1a1a);
}
.omnimux-inspiration-select:focus {
  border-color: var(--dsw-alias-border-hover, rgba(255, 255, 255, 0.4));
}

/* \u7D27\u51D1\u578B\u7B5B\u9009\u5668\u4E0B\u62C9\u6309\u94AE (\u7F29\u77ED\u5BBD\u5EA6) */
.omnimux-inspiration-filter-select .dshUk-DropdownSelect-trigger,
.omnimux-inspiration-filter-select > button {
  min-width: 74px !important;
  width: auto;
  padding: 0 10px;
  gap: 6px;
}
.omnimux-inspiration-filter-select .dshUk-DropdownSelect-label {
  font-size: 13px;
}

/* 9:16 \u539F\u5B50\u5316\u626B\u5149\u9AA8\u67B6\u5C4F\u77E9\u9635 */
.omnimux-inspiration-skeleton {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 16px;
  width: 100%;
  max-width: 100%;
}
@media (min-width: 1600px) {
  .omnimux-inspiration-skeleton {
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
    gap: 18px;
  }
}
.omnimux-inspiration-skel {
  position: relative;
  width: 100%;
  aspect-ratio: 9 / 16;
  border-radius: 10px;
  background: var(--dsw-alias-bg-module-platform, #141414);
  border: 1px solid var(--dsw-alias-border-l2, #222222);
  overflow: hidden;
}
.omnimux-inspiration-skel::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent 0%, var(--dsw-alias-bg-secondary, rgba(255, 255, 255, 0.04)) 50%, transparent 100%);
  animation: omni-shimmer 1.4s infinite;
}

/* \u7EDF\u4E00\u5361\u7247\u7F51\u683C */
.omnimux-inspiration-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 16px;
  width: 100%;
  max-width: 100%;
  animation: omni-fade-in 160ms ease;
}
@media (min-width: 1600px) {
  .omnimux-inspiration-grid {
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
    gap: 18px;
  }
}
@media (max-width: 640px) {
  .omnimux-inspiration-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
}

/* \u6279\u91CF\u591A\u9009\u64CD\u4F5C\u680F */
.omnimux-inspiration-selection-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  max-width: 100%;
  padding: 8px 14px;
  background: var(--dsw-alias-bg-layer-1, #181818);
  border: 1px solid var(--dsw-alias-border-l4, #333333);
  border-radius: 12px;
  animation: omni-fade-in 140ms ease;
  box-shadow: 0 4px 16px var(--dsw-alias-bg-mask-1, rgba(0, 0, 0, 0.4));
}
.omnimux-inspiration-selection-count {
  font: 500 13px/18px inherit;
  color: var(--dsw-alias-label-primary, #ffffff);
  display: flex;
  align-items: center;
  gap: 8px;
}
.omnimux-inspiration-selection-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
}
.omnimux-inspiration-btn-ghost {
  border: none;
  background: transparent;
  color: var(--dsw-alias-label-tertiary, #8e8e8e);
  cursor: pointer;
  font: 500 13px/18px inherit;
  padding: 4px 10px;
  border-radius: 9999px;
  transition: color 120ms ease;
}
.omnimux-inspiration-btn-ghost:hover {
  color: var(--dsw-alias-label-primary, #ffffff);
  background: var(--dsw-alias-bg-secondary, rgba(255, 255, 255, 0.06));
}
.omnimux-inspiration-btn-danger {
  border: none;
  background: var(--dsw-alias-state-error-primary, #ef4444);
  color: var(--dsw-alias-label-primary, #ffffff);
  border-radius: 9999px;
  padding: 5px 14px;
  cursor: pointer;
  font: 600 13px/18px inherit;
  transition: all 120ms ease;
}
.omnimux-inspiration-btn-danger:hover {
  background: var(--dsw-alias-state-error-primary, #dc2626);
  transform: translateY(-1px);
}

.omnimux-inspiration-card-pure {
  position: relative;
  width: 100%;
  aspect-ratio: 9 / 16;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  background: var(--dsw-alias-bg-module-platform, #131313);
  border: 1px solid var(--dsw-alias-border-l2, #242424);
  transition: transform 180ms cubic-bezier(.2,.4,.6,1),
              border-color 180ms cubic-bezier(.2,.4,.6,1),
              box-shadow 180ms ease;
}
.omnimux-inspiration-card-pure[aria-selected="true"] {
  border-color: var(--dsw-alias-label-secondary, rgba(255, 255, 255, 0.7));
  box-shadow: 0 0 0 1px var(--dsw-alias-label-secondary, rgba(255, 255, 255, 0.7)), 0 8px 24px var(--dsw-alias-bg-mask-1, rgba(0, 0, 0, 0.5));
}
.omnimux-inspiration-card-pure:hover {
  transform: translateY(-3px);
  border-color: var(--dsw-alias-border-l4, #4a4a4a);
  box-shadow: 0 8px 24px var(--dsw-alias-bg-mask-1, rgba(0, 0, 0, 0.45));
}

/* \u5361\u7247\u5DE6\u4E0A\u89D2\u590D\u9009\u6846 Checkbox */
.omnimux-inspiration-stage .omnimux-inspiration-card-pure .omnimux-inspiration-card-check,
.omnimux-inspiration-stage .omnimux-inspiration-card-pure .omnimux-inspiration-card-check:hover,
.omnimux-inspiration-stage .omnimux-inspiration-card-pure .omnimux-inspiration-card-check:active {
  position: absolute;
  top: 8px;
  left: 8px;
  width: 22px;
  min-width: 22px;
  height: 22px;
  min-height: 22px;
  border-radius: 6px;
  border: 1.5px solid var(--dsw-alias-border-hover, rgba(255, 255, 255, 0.4));
  background: var(--dsw-alias-bg-mask-1, rgba(0, 0, 0, 0.5));
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 5;
  color: var(--dsw-alias-bg-base, #000000);
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 120ms ease,
              transform 120ms ease,
              background-color 120ms ease,
              border-color 120ms ease;
}
.omnimux-inspiration-stage .omnimux-inspiration-card-pure:hover .omnimux-inspiration-card-check,
.omnimux-inspiration-stage .omnimux-inspiration-card-pure .omnimux-inspiration-card-check[data-selected="true"],
.omnimux-inspiration-stage .omnimux-inspiration-grid.selecting .omnimux-inspiration-card-check {
  opacity: 1;
  transform: scale(1);
}
.omnimux-inspiration-stage .omnimux-inspiration-card-pure .omnimux-inspiration-card-check[data-selected="true"] {
  background: var(--dsw-alias-label-primary, #ffffff);
  border-color: var(--dsw-alias-label-primary, #ffffff);
}
.omnimux-inspiration-stage .omnimux-inspiration-card-pure .omnimux-inspiration-card-check:hover {
  border-color: var(--dsw-alias-label-primary, rgba(255, 255, 255, 0.85));
  background: var(--dsw-alias-bg-mask-1, rgba(0, 0, 0, 0.7));
}
.omnimux-inspiration-stage .omnimux-inspiration-card-pure .omnimux-inspiration-card-check[data-selected="true"]:hover {
  background: var(--dsw-alias-button-primary-hover, #ebebeb);
  border-color: var(--dsw-alias-button-primary-hover, #ebebeb);
}
.omnimux-inspiration-cover-img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: var(--dsw-alias-bg-layer-1, #181818);
}

/* Fallback \u5360\u4F4D\u5361\u7247 */
.omnimux-inspiration-cover-fallback {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  aspect-ratio: 9 / 16;
  background: radial-gradient(circle at 50% 30%, var(--dsw-alias-bg-layer-2, #202020) 0%, var(--dsw-alias-bg-base, #111111) 100%);
  padding: 16px;
  gap: 12px;
  text-align: center;
  color: var(--dsw-alias-label-tertiary, #7c7c7c);
}
.omnimux-inspiration-fallback-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--dsw-alias-bg-secondary, rgba(255, 255, 255, 0.05));
  border: 1px solid var(--dsw-alias-border-l2, #242424);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--dsw-alias-label-primary-dimmed, #ebebeb);
}
.omnimux-inspiration-fallback-title {
  font-size: 12px;
  line-height: 16px;
  color: var(--dsw-alias-label-tertiary, #888888);
  max-width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
}

/* \u5361\u7247\u89D2\u6807 Badge (\u7F6E\u4E8E\u53F3\u4E0A\u89D2) */
.omnimux-inspiration-badge-platform {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 4;
  padding: 2px 8px;
  border-radius: 9999px;
  font-size: 11px;
  font-weight: 600;
  font-family: monospace;
  background: var(--dsw-alias-bg-mask-1, rgba(0, 0, 0, 0.65));
  backdrop-filter: blur(8px);
  border: 1px solid var(--dsw-alias-border, rgba(255, 255, 255, 0.15));
  color: var(--dsw-alias-label-primary, #ffffff);
  letter-spacing: 0.5px;
}
.omnimux-inspiration-badge-platform.local {
  border-color: var(--dsw-alias-state-success-primary, #10b981);
  color: var(--dsw-alias-state-success-primary, #10b981);
  background: var(--dsw-alias-state-success-tertiary, rgba(16, 185, 129, 0.2));
}

/* Hover \u6D6E\u5C42 */
.omnimux-inspiration-card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, var(--dsw-alias-bg-mask-1, rgba(0,0,0,0.3)) 0%, var(--dsw-alias-bg-mask-1, rgba(0,0,0,0.1)) 40%, var(--dsw-alias-bg-mask-1, rgba(0,0,0,0.75)) 100%);
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 12px;
  transition: opacity 120ms ease;
  pointer-events: none;
}
.omnimux-inspiration-card-pure:hover .omnimux-inspiration-card-overlay {
  opacity: 1;
}
.omnimux-inspiration-overlay-play {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.9);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--dsw-alias-button-primary-fill, #ffffff);
  color: var(--dsw-alias-label-primary-foreground, #0a0a0a);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 120ms ease;
  box-shadow: 0 4px 16px var(--dsw-alias-bg-mask-1, rgba(0, 0, 0, 0.45));
}
.omnimux-inspiration-card-pure:hover .omnimux-inspiration-overlay-play {
  transform: translate(-50%, -50%) scale(1);
}
.omnimux-inspiration-overlay-play svg {
  width: 20px;
  height: 20px;
  margin-left: 2px;
}
.omnimux-inspiration-overlay-cta {
  position: relative;
  z-index: 6;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: stretch;
  gap: 6px;
  width: 100%;
  margin-bottom: 8px;
  padding: 0 2px;
  box-sizing: border-box;
  pointer-events: auto;
}
.omnimux-inspiration-grid.selecting .omnimux-inspiration-overlay-cta {
  display: none;
}
.omnimux-inspiration-overlay-cta-btn {
  display: inline-flex;
  flex: 1 1 0;
  min-width: 0;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 28px;
  min-height: 28px;
  max-height: 28px;
  padding: 0 6px;
  border-radius: 9999px;
  border: 1px solid transparent;
  font: 550 12px/16px inherit;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
  -webkit-app-region: no-drag;
}
.omnimux-inspiration-overlay-cta-btn svg {
  width: 14px;
  height: 14px;
  flex: none;
}
.omnimux-inspiration-overlay-cta-btn.secondary {
  background: var(--dsw-alias-bg-mask-1);
  backdrop-filter: blur(8px);
  color: var(--dsw-alias-label-primary);
  border-color: var(--dsw-alias-border-l3);
}
.omnimux-inspiration-overlay-cta-btn.secondary:hover {
  background: var(--dsw-alias-bg-mask-2, var(--dsw-alias-bg-mask-1));
}
.omnimux-inspiration-overlay-cta-btn.primary {
  background: var(--dsw-alias-button-primary-fill);
  color: var(--dsw-alias-label-primary-foreground);
  border-color: transparent;
}
.omnimux-inspiration-overlay-cta-btn.primary:hover {
  background: var(--dsw-alias-button-primary-hover);
}
.omnimux-inspiration-overlay-cta-btn:disabled,
.omnimux-inspiration-overlay-cta-btn[aria-disabled="true"] {
  opacity: 0.55;
  cursor: not-allowed;
}
.omnimux-inspiration-overlay-footer {
  font-size: 11px;
  color: var(--dsw-alias-label-primary, rgba(255, 255, 255, 0.85));
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-shadow: 0 1px 2px var(--dsw-alias-bg-mask-1, rgba(0,0,0,0.8));
  position: relative;
  z-index: 1;
}
.omnimux-inspiration-cta-status {
  min-height: 18px;
  font-size: 12px;
  line-height: 18px;
  color: var(--dsw-alias-label-secondary);
}

/* \u8BE6\u60C5\u5F39\u7A97 Modal */
.omnimux-inspiration-modal-backdrop {
  position: fixed;
  inset: 0;
  background: var(--dsw-alias-bg-mask-1, rgba(0,0,0,.70));
  backdrop-filter: blur(16px);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  animation: omni-fade-in 120ms ease;
}
@keyframes omni-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
.omnimux-inspiration-modal-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 1040px;
  animation: omni-fade-in 120ms ease;
}
.omnimux-inspiration-modal-container {
  position: relative;
  display: flex;
  width: 100%;
  height: 85vh;
  max-height: 720px;
  border-radius: 16px;
  overflow: hidden;
  background: var(--dsw-alias-bg-module-platform, #131313);
  border: 1px solid var(--dsw-alias-border-l2, #242424);
  box-shadow: 0 12px 36px var(--dsw-alias-bg-mask-1, rgba(0,0,0,.60));
}
.omnimux-inspiration-modal-close {
  position: absolute;
  top: -10px;
  right: -48px;
  width: 36px !important;
  height: 36px !important;
  min-width: 36px;
  padding: 0 !important;
  border-radius: 50%;
  border: 1px solid var(--dsw-alias-border-hover, rgba(255, 255, 255, 0.22));
  background: var(--dsw-alias-bg-elevated, rgba(24, 24, 24, 0.88));
  backdrop-filter: blur(12px);
  color: var(--dsw-alias-label-primary, #ffffff);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  box-shadow: 0 4px 16px var(--dsw-alias-bg-mask-1, rgba(0, 0, 0, 0.55));
  transition: all 120ms ease;
  flex-shrink: 0;
  align-self: flex-start;
}
.omnimux-inspiration-modal-close:hover {
  border-color: var(--dsw-alias-label-tertiary, rgba(255, 255, 255, 0.45));
  background: var(--dsw-alias-bg-layer-2, rgba(45, 45, 45, 0.95));
  transform: scale(1.08);
}
@media (max-width: 1160px) {
  .omnimux-inspiration-modal-close {
    top: -44px;
    right: 4px;
  }
}

/* \u5F39\u7A97\u5DE6\u5217\uFF1A\u89C6\u9891\u64AD\u653E / \u5185\u5BB9\u62C6\u89E3 \u5207\u6362\u5927\u753B\u5E45\u533A\u57DF */
.omnimux-inspiration-modal-left {
  flex: 1 1 58%;
  min-width: 320px;
  background: var(--dsw-alias-bg-base, #000000);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

/* \u5DE6\u4FA7\u9876\u90E8\u6A21\u5F0F\u5207\u6362\u5F00\u5173 Segmented Controls
 * 32px \u8F68\u9053 + 28px \u5185\u94AE\uFF08\u7D27\u51D1\u53D8\u4F53\uFF09\u3002\u5FC5\u987B overflow:hidden\uFF0C\u4E14\u9009\u62E9\u5668
 * \u76D6\u8FC7 dsh-ui-kit Button \u7684 height/radius\uFF0C\u907F\u514D\u9009\u4E2D\u6001\u9876\u7834\u80F6\u56CA\u3002 */
.omnimux-inspiration-preview-switch {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: var(--dsw-alias-bg-elevated, rgba(18, 18, 18, 0.85));
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--dsw-alias-border-l2, #242424);
  z-index: 10;
}
.omnimux-inspiration-switch-group {
  display: inline-flex;
  align-items: stretch;
  height: 32px;
  padding: 1px;
  box-sizing: border-box;
  overflow: hidden;
  background: var(--dsw-alias-bg-base, #0a0a0a);
  border-radius: 9999px;
  border: 1px solid var(--dsw-alias-border-l2, #242424);
}
.omnimux-inspiration-switch-group > .omnimux-inspiration-switch-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 28px;
  min-height: 28px;
  max-height: 28px;
  padding: 0 12px;
  border-radius: 9999px;
  border: none;
  background: transparent;
  color: var(--dsw-alias-label-tertiary, #7c7c7c);
  font: 500 12px/16px inherit;
  cursor: pointer;
  flex: 0 0 auto;
  box-shadow: none;
  transform: none;
  outline: none;
  transition: color 120ms ease, background-color 120ms ease;
}
.omnimux-inspiration-switch-group > .omnimux-inspiration-switch-btn svg {
  display: block;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  overflow: visible;
}
.omnimux-inspiration-switch-group > .omnimux-inspiration-switch-btn:hover {
  color: var(--dsw-alias-label-primary-dimmed, #ebebeb);
  background: transparent;
}
.omnimux-inspiration-switch-group > .omnimux-inspiration-switch-btn.active,
.omnimux-inspiration-switch-group > .omnimux-inspiration-switch-btn[aria-selected="true"] {
  background: var(--dsw-alias-bg-layer-1, #242424);
  color: var(--dsw-alias-label-primary, #ffffff);
  box-shadow: none;
}
.omnimux-inspiration-switch-group > .omnimux-inspiration-switch-btn:focus-visible {
  outline: 2px solid var(--dsw-alias-brand-primary);
  outline-offset: -2px;
}
.omnimux-inspiration-status-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  border-radius: 9999px;
  font-size: 11px;
  font-family: monospace;
  font-weight: 500;
  background: var(--dsw-alias-bg-secondary, rgba(255, 255, 255, 0.06));
  border: 1px solid var(--dsw-alias-border, rgba(255, 255, 255, 0.1));
  color: var(--dsw-alias-label-primary-dimmed, #ebebeb);
}
.omnimux-inspiration-status-badge.done {
  border-color: var(--dsw-alias-state-success-tertiary, rgba(16, 185, 129, 0.4));
  background: var(--dsw-alias-state-success-tertiary, rgba(16, 185, 129, 0.12));
  color: var(--dsw-alias-state-success-primary, #10b981);
}
.omnimux-inspiration-status-badge.pending {
  border-color: var(--dsw-alias-state-warning-tertiary, rgba(245, 158, 11, 0.4));
  background: var(--dsw-alias-state-warning-tertiary, rgba(245, 158, 11, 0.12));
  color: var(--dsw-alias-state-warning-primary, #f59e0b);
}

/* \u64AD\u653E\u5668\u5BB9\u5668 */
.omnimux-inspiration-preview-player {
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 12px;
}
.omnimux-inspiration-player-frame {
  width: 100%;
  height: 100%;
  border: none;
  background: var(--dsw-alias-bg-base, #000000);
}
.omnimux-inspiration-modal-cover-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* AI \u5185\u5BB9\u62C6\u89E3\u5927\u89C6\u7A97 (5 \u7EF4\u5EA6\u6C89\u6D78\u5F0F\u67E5\u770B) */
.omnimux-inspiration-deconstruct-view {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: var(--dsw-alias-bg-base, #0d0d0d);
  overflow: hidden;
}
.omnimux-inspiration-dim-tabs {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 16px;
  overflow-x: auto;
  border-bottom: 1px solid var(--dsw-alias-border-l2, #222222);
  background: var(--dsw-alias-bg-base, #111111);
}
.omnimux-inspiration-dim-tabs::-webkit-scrollbar {
  height: 3px;
}
.omnimux-inspiration-dim-tab {
  white-space: nowrap;
  padding: 5px 10px;
  border-radius: 9999px;
  border: 1px solid var(--dsw-alias-border-l2, #242424);
  background: var(--dsw-alias-bg-layer-1, #161616);
  color: var(--dsw-alias-label-tertiary, #888888);
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
  transition: all 120ms ease;
}
.omnimux-inspiration-dim-tab:hover {
  color: var(--dsw-alias-label-primary, #ffffff);
  border-color: var(--dsw-alias-border-l3, #383838);
}
.omnimux-inspiration-dim-tab.active {
  background: var(--dsw-alias-bg-layer-2, #282828);
  border-color: var(--dsw-alias-border-l4, #555555);
  color: var(--dsw-alias-label-primary, #ffffff);
}

.omnimux-inspiration-dim-content {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.omnimux-inspiration-dim-card {
  border-radius: 10px;
  background: var(--dsw-alias-bg-layer-1, #141414);
  border: 1px solid var(--dsw-alias-border-l2, #242424);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.omnimux-inspiration-dim-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.omnimux-inspiration-dim-title {
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: var(--dsw-alias-label-primary, #ffffff);
  display: flex;
  align-items: center;
  gap: 6px;
}
.omnimux-inspiration-dim-body {
  font-size: 13px;
  line-height: 1.6;
  color: var(--dsw-alias-label-primary-dimmed, #d1d1d1);
  white-space: pre-wrap;
  word-break: break-word;
}
.omnimux-inspiration-dim-code {
  font-family: monospace;
  font-size: 12px;
  line-height: 1.5;
  background: var(--dsw-alias-bg-base, #0a0a0a);
  border: 1px solid var(--dsw-alias-border-l2, #222222);
  border-radius: 6px;
  padding: 12px;
  color: var(--dsw-alias-state-success-primary, #a3e635);
  white-space: pre-wrap;
  overflow-x: auto;
}

/* \u62C6\u89E3\u4E3A\u7A7A\u6216\u8FDB\u884C\u4E2D\u6001 */
.omnimux-inspiration-deconstruct-empty {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  padding: 30px;
  text-align: center;
}
.omnimux-inspiration-trigger-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  border-radius: 9999px;
  background: var(--dsw-alias-label-primary, #ffffff);
  color: var(--dsw-alias-bg-base, #0a0a0a);
  border: none;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 14px var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.18));
  transition: all 120ms ease;
}
.omnimux-inspiration-trigger-btn:hover:not(:disabled) {
  transform: translateY(-1px);
  background: var(--dsw-alias-button-primary-hover, #eaeaea);
}
.omnimux-inspiration-trigger-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* \u5F39\u7A97\u53F3\u5217\uFF1A\u6781\u7B80\u53D1\u4E1D\u7EBF\u8BE6\u60C5\u4FE1\u606F\u533A (\u6807\u9898\u4E0E\u63CF\u8FF0\u5728\u4E0B\u65B9) */
.omnimux-inspiration-modal-right {
  flex: 0 0 380px;
  width: 380px;
  background: var(--dsw-alias-bg-base, #0a0a0a);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 20px 24px;
  gap: 16px;
  border-left: 1px solid var(--dsw-alias-border-l2, #242424);
}

/* \u521B\u4F5C\u8005\u4FE1\u606F\u4E0E\u5E73\u53F0 Badge */
.omnimux-inspiration-creator-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--dsw-alias-border-l2, #202020);
}
.omnimux-inspiration-creator-left {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  border-radius: 8px;
  transition: all 120ms ease;
}
.omnimux-inspiration-creator-link {
  padding: 4px 6px;
  margin: -4px -6px;
  cursor: pointer;
}
.omnimux-inspiration-creator-link:hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(255, 255, 255, 0.06));
}
.omnimux-inspiration-creator-link:hover .omnimux-inspiration-modal-handle {
  color: var(--dsw-alias-brand-primary, #ffffff);
}
.omnimux-inspiration-creator-link:hover .omnimux-inspiration-ext-icon {
  opacity: 0.8;
  transform: translate(0, 0);
}
.omnimux-inspiration-creator-link:hover .omnimux-inspiration-creator-handle {
  color: var(--dsw-alias-label-primary-dimmed, #cccccc);
}
.omnimux-inspiration-creator-info {
  display: flex;
  flex-direction: column;
  gap: 1px;
}
.omnimux-inspiration-modal-avatar {
  position: relative;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--dsw-alias-bg-layer-1, #1c1c1c);
  border: 1px solid var(--dsw-alias-border-l2, #2a2a2a);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: monospace;
  font-size: 13px;
  font-weight: 600;
  color: var(--dsw-alias-label-primary, #ffffff);
  flex-shrink: 0;
  overflow: hidden;
}
.omnimux-inspiration-avatar-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.omnimux-inspiration-modal-handle {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  font-weight: 600;
  color: var(--dsw-alias-label-primary, #ffffff);
  transition: color 120ms ease;
}
.omnimux-inspiration-ext-icon {
  opacity: 0;
  transition: opacity 120ms ease, transform 120ms ease;
  transform: translate(-1px, 1px);
  color: var(--dsw-alias-label-tertiary, #888888);
}
.omnimux-inspiration-creator-handle {
  font-size: 12px;
  color: var(--dsw-alias-label-tertiary, #808080);
  transition: color 120ms ease;
}

.omnimux-inspiration-modal-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 500;
  color: var(--dsw-alias-label-primary-dimmed, #d1d1d1);
  text-decoration: none;
  padding: 4px 10px;
  border-radius: 9999px;
  border: 1px solid var(--dsw-alias-border-l2, #262626);
  background: var(--dsw-alias-bg-module-platform, #141414);
  transition: all 120ms ease;
}
.omnimux-inspiration-modal-link:hover {
  border-color: var(--dsw-alias-border-l3, #444444);
  color: var(--dsw-alias-label-primary, #ffffff);
}

/* \u6807\u7B7E Tags */
.omnimux-inspiration-modal-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.omnimux-inspiration-modal-tag {
  padding: 2px 8px;
  border-radius: 9999px;
  font-family: monospace;
  font-size: 11px;
  border: 1px solid var(--dsw-alias-border-l2, #242424);
  background: var(--dsw-alias-bg-module-platform, #141414);
  color: var(--dsw-alias-label-tertiary, #888888);
}

/* \u89C6\u9891\u4E92\u52A8\u6570\u636E Stats \u77E9\u9635 */
.omnimux-inspiration-stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 12px;
  border-radius: 8px;
  background: var(--dsw-alias-bg-base, #111111);
  border: 1px solid var(--dsw-alias-border-l2, #222222);
}
.omnimux-inspiration-stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2px;
}
.omnimux-inspiration-stat-label {
  font-size: 10px;
  text-transform: uppercase;
  color: var(--dsw-alias-label-tertiary, #7c7c7c);
  font-family: monospace;
}
.omnimux-inspiration-stat-val {
  font-size: 13px;
  font-weight: 600;
  color: var(--dsw-alias-label-primary, #ffffff);
}

/* \u6807\u9898\u548C\u539F\u8D34\u63CF\u8FF0\u533A\u5757\uFF08\u7F6E\u4E8E\u53F3\u4FA7\u9762\u677F\uFF09 */
.omnimux-inspiration-caption-block {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 10px;
  background: var(--dsw-alias-bg-layer-1, #141414);
  border: 1px solid var(--dsw-alias-border-l2, #242424);
}
.omnimux-inspiration-modal-title-text {
  font-size: 15px;
  font-weight: 600;
  line-height: 1.45;
  color: var(--dsw-alias-label-primary, #ffffff);
  word-break: break-word;
}
.omnimux-inspiration-caption-section {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.omnimux-inspiration-caption-label {
  font-size: 11px;
  font-weight: 600;
  font-family: monospace;
  color: var(--dsw-alias-label-tertiary, #888888);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.omnimux-inspiration-caption-text {
  margin: 0;
  font-size: 13px;
  line-height: 1.55;
  color: var(--dsw-alias-label-primary-dimmed, #d4d4d4);
  word-break: break-word;
  white-space: pre-wrap;
}
.omnimux-inspiration-summary-text {
  margin: 0;
  font-size: 12.5px; /* exempt-ui10: \u5BC6\u96C6\u4FE1\u606F\u5361\u8F85\u52A9\u6587\u672C\u5FAE\u8C03 */
  line-height: 1.55;
  color: var(--dsw-alias-label-tertiary, #a3a3a3);
  word-break: break-word;
  white-space: pre-wrap;
}

/* \u5BFC\u5165\u6A21\u6001\u6846 Import Dialog */
.omnimux-inspiration-import-modal {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 480px;
  border-radius: 16px;
  background: var(--dsw-alias-bg-module-platform, #131313);
  border: 1px solid var(--dsw-alias-border-l2, #242424);
  box-shadow: 0 8px 24px var(--dsw-alias-bg-mask-1, rgba(0,0,0,.48));
  overflow: hidden;
}
.omnimux-inspiration-import-header {
  padding: 16px 20px;
  border-bottom: 1px solid var(--dsw-alias-border-l2, #242424);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.omnimux-inspiration-import-header h2 {
  margin: 0;
  font-size: 15px;
  font-weight: 600;
}
.omnimux-inspiration-import-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.omnimux-inspiration-import-footer {
  padding: 14px 20px;
  border-top: 1px solid var(--dsw-alias-border-l2, #242424);
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

/* \u7A7A\u6001\u4E0E\u9519\u8BEF\u63D0\u793A */
.omnimux-inspiration-empty, .omnimux-inspiration-gate, .omnimux-inspiration-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 240px;
  text-align: center;
  padding: 24px;
}
.omnimux-inspiration-empty-title {
  margin: 0;
  font: 600 18px/28px inherit;
  color: var(--dsw-alias-label-primary, #ffffff);
}
.omnimux-inspiration-empty-text {
  margin: 0;
  font: 400 14px/20px inherit;
  color: var(--dsw-alias-label-tertiary, #7c7c7c);
}
.omnimux-inspiration-spinner--sm { width: 10px; height: 10px; }
.omnimux-inspiration-empty-cta { margin-top: 12px; }
.omnimux-inspiration-error-text {
  color: var(--dsw-alias-state-error-primary);
  font-size: 13px;
}
.omnimux-inspiration-success-text {
  color: var(--dsw-alias-state-success-primary);
  font-size: 13px;
}
.omnimux-inspiration-check {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  cursor: pointer;
}
.omnimux-inspiration-import-body {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.omnimux-inspiration-tags-collapse {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.omnimux-inspiration-tags-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  width: fit-content;
  min-height: 32px;
  padding: 0 2px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: var(--dsw-alias-label-secondary);
  font: 500 13px/20px inherit;
  cursor: pointer;
}
.omnimux-inspiration-tags-toggle:hover:not(:disabled) {
  color: var(--dsw-alias-label-primary);
}
.omnimux-inspiration-tags-toggle:disabled {
  opacity: 0.5;
  cursor: default;
}
.omnimux-inspiration-tags-toggle-label {
  color: inherit;
}
.omnimux-inspiration-tags-toggle-chevron {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  font-size: 12px;
  line-height: 1;
  transform: rotate(-90deg);
  transition: transform 0.15s ease;
}
.omnimux-inspiration-tags-toggle-chevron.is-open {
  transform: rotate(0deg);
}
.omnimux-inspiration-switch-row {
  display: flex;
  align-items: center;
  gap: 8px;
  min-height: 32px;
}
.omnimux-inspiration-switch,
.omnimux-inspiration-switch:hover,
.omnimux-inspiration-switch:active {
  position: relative;
  width: 36px;
  min-width: 36px;
  height: 20px;
  min-height: 20px;
  padding: 0;
  border: none;
  border-radius: 999px;
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.30));
  cursor: pointer;
  transform: none;
  transition: background 0.15s ease;
  overflow: visible;
}
.omnimux-inspiration-switch[aria-checked="true"],
.omnimux-inspiration-switch[aria-checked="true"]:hover {
  background: var(--dsw-alias-state-success-primary, #4caf7d);
}
.omnimux-inspiration-switch:disabled {
  cursor: default;
  opacity: 0.5;
}
.omnimux-inspiration-switch-knob {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  border-radius: 999px;
  background: var(--dsw-alias-label-primary-foreground, var(--dsw-alias-label-primary-inverted, #ffffff));
  transition: transform 0.15s ease;
  pointer-events: none;
}
.omnimux-inspiration-switch[aria-checked="true"] .omnimux-inspiration-switch-knob {
  transform: translateX(16px);
}
.omnimux-inspiration-switch-label {
  font-size: 13px;
  line-height: 20px;
  color: var(--dsw-alias-label-secondary);
}
.omnimux-inspiration-fallback-icon--lg { width: 56px; height: 56px; }
.omnimux-inspiration-empty-breakdown-title {
  margin: 0 0 6px 0;
  font-size: 15px;
  color: var(--dsw-alias-label-primary);
}
.omnimux-inspiration-empty-breakdown-desc {
  margin: 0;
  font-size: 12px;
  color: var(--dsw-alias-label-tertiary);
}
.omnimux-inspiration-creator-handle {
  font-size: 11px;
  color: var(--dsw-alias-label-tertiary);
}
.omnimux-inspiration-detail-body {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.omnimux-inspiration-detail-media,
.omnimux-inspiration-detail-cover {
  width: 100%;
  max-height: 320px;
  border-radius: 8px;
  object-fit: contain;
  background: var(--dsw-alias-bg-module-platform);
}
.omnimux-inspiration-hook-card {
  background: var(--dsw-alias-bg-module-platform);
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 8px;
  padding: 12px;
}
.omnimux-inspiration-hook-title {
  font-weight: 600;
  font-size: 13px;
  color: var(--dsw-alias-brand-primary);
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 6px;
}
.omnimux-inspiration-hook-body { font-size: 13px; line-height: 1.5; }
.omnimux-inspiration-field-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.omnimux-inspiration-field-label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--dsw-alias-label-secondary);
}
.omnimux-inspiration-content-box {
  font-size: 13px;
  line-height: 1.5;
  background: var(--dsw-alias-bg-module-platform);
  padding: 10px;
  border-radius: 6px;
}
.omnimux-inspiration-meta-row {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  font-size: 12px;
  color: var(--dsw-alias-label-tertiary);
}
.omnimux-inspiration-source-link { color: var(--dsw-alias-brand-primary); }
.omnimux-inspiration-platform-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--dsw-alias-brand-primary);
}
.omnimux-inspiration-btn {
  height: 34px;
  padding: 0 16px;
  border: none;
  border-radius: 9999px;
  background: var(--dsw-alias-button-primary-fill, #ffffff);
  color: var(--dsw-alias-label-primary-foreground, #0a0a0a);
  font: 500 13px/16px inherit;
  cursor: pointer;
}

/* \u89E6\u5E95\u6EDA\u52A8\u52A0\u8F7D\u5668 */
.omnimux-inspiration-scroll-loader {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 0;
  font-size: 12px;
  color: var(--dsw-alias-label-tertiary, #7c7c7c);
}
.omnimux-inspiration-spinner {
  width: 14px;
  height: 14px;
  border: 2px solid var(--dsw-alias-border, rgba(255,255,255,0.15));
  border-top-color: var(--dsw-alias-label-primary, #ffffff);
  border-radius: 50%;
  animation: omni-spin 0.6s linear infinite;
}
@keyframes omni-spin {
  to { transform: rotate(360deg); }
}

/* Triptych preview modal \u2014 overrides legacy dual-pane rules later in cascade */
.omnimux-inspiration-modal-wrapper {
  max-width: 1180px;
  align-items: stretch;
}
.omnimux-inspiration-modal-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: min(86vh, 760px);
  max-height: none;
  min-height: 420px;
  overflow: hidden;
  background: var(--dsw-alias-bg-elevated);
  border-radius: 16px;
}
.omnimux-inspiration-modal-header {
  min-height: 60px;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 16px;
  padding: 8px 16px;
  border-bottom: 1px solid var(--dsw-alias-border-l2);
}
.omnimux-inspiration-modal-heading {
  min-width: 0;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  gap: 8px;
}
.omnimux-inspiration-modal-heading h2 {
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  color: var(--dsw-alias-label-primary);
}
.omnimux-inspiration-modal-header-meta,
.omnimux-inspiration-modal-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}
.omnimux-inspiration-modal-platform,
.omnimux-inspiration-modal-header-meta span {
  padding: 4px 8px;
  border-radius: 9999px;
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-secondary);
  font-size: 12px;
}
.omnimux-inspiration-modal-copy {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  height: 32px;
  padding: 0 8px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: var(--dsw-alias-label-secondary);
  cursor: pointer;
}
.omnimux-inspiration-modal-copy:hover {
  background: var(--dsw-alias-interactive-bg-hover);
  color: var(--dsw-alias-label-primary);
}
.omnimux-inspiration-modal-copy.is-icon-only {
  width: 32px;
  padding: 0;
  justify-content: center;
  flex: 0 0 32px;
}
.omnimux-inspiration-modal-close {
  position: static !important;
  top: auto !important;
  right: auto !important;
  width: 32px !important;
  height: 32px !important;
  min-width: 32px;
  border-radius: 8px !important;
  border: 0 !important;
  background: transparent !important;
  box-shadow: none !important;
  align-self: center;
}
.omnimux-inspiration-modal-body {
  min-height: 0;
  flex: 1 1 auto;
  display: grid;
  grid-template-columns: minmax(260px, 1fr) minmax(280px, 1.1fr) minmax(280px, 1.1fr);
  overflow: hidden;
}
.omnimux-inspiration-modal-panel {
  min-width: 0;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 16px;
  border-right: 1px solid var(--dsw-alias-border-l2);
  color: var(--dsw-alias-label-primary);
}
.omnimux-inspiration-modal-panel:last-child { border-right: 0; }
.omnimux-inspiration-modal-panel-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 12px;
}
.omnimux-inspiration-modal-panel-heading h3 {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
}
.omnimux-inspiration-modal-player-box {
  position: relative;
  width: auto;
  max-width: 100%;
  aspect-ratio: 9 / 16;
  max-height: min(56vh, 560px);
  margin: 0 auto 14px;
  overflow: hidden;
  border-radius: 8px;
  background: var(--dsw-alias-bg-base);
  display: flex;
  align-items: center;
  justify-content: center;
}
.omnimux-inspiration-player-frame,
.omnimux-inspiration-modal-cover-bg {
  width: 100%;
  height: 100%;
}
.omnimux-inspiration-modal-script-content,
.omnimux-inspiration-modal-dimensions p,
.omnimux-inspiration-modal-dimensions pre {
  overflow-wrap: anywhere;
  white-space: pre-wrap;
  word-break: break-word;
  font-size: 13px;
  line-height: 1.65;
  color: var(--dsw-alias-label-secondary);
}
.omnimux-inspiration-modal-panel-actions {
  display: flex;
  align-items: center;
  gap: 4px;
}
.omnimux-inspiration-modal-meta-row {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: nowrap;
  min-width: 0;
}
.omnimux-inspiration-modal-link,
.omnimux-inspiration-creator-link {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--dsw-alias-label-secondary);
}
.omnimux-inspiration-modal-link svg {
  display: inline-block;
  margin-left: 4px;
  vertical-align: -2px;
  flex: 0 0 auto;
}
.omnimux-inspiration-modal-meta-row .omnimux-inspiration-modal-copy {
  flex: 0 0 32px;
}
.omnimux-inspiration-modal-script-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.omnimux-inspiration-modal-script-list li {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;
  align-items: start;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
}
.omnimux-inspiration-modal-script-list.has-timecode li {
  grid-template-columns: 52px 1fr auto;
}
.omnimux-inspiration-modal-script-list li.is-active,
.omnimux-inspiration-modal-dimensions article.is-active {
  background: var(--dsw-alias-interactive-bg-hover);
}
.omnimux-inspiration-modal-timecode {
  font-family: ui-monospace, monospace;
  font-size: 12px;
  color: var(--dsw-alias-label-tertiary);
}
.omnimux-inspiration-modal-script-line {
  overflow-wrap: anywhere;
  white-space: pre-wrap;
  font-size: 13px;
  line-height: 1.6;
  color: var(--dsw-alias-label-secondary);
}
.omnimux-inspiration-modal-dimensions article {
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 8px;
  background: var(--dsw-alias-bg-layer-1);
}
.omnimux-inspiration-modal-fold {
  display: flex;
  width: 100%;
  border: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;
  color: inherit;
  text-align: left;
}
.omnimux-inspiration-modal-dimensions blockquote {
  margin: 0 0 8px;
  padding: 0 0 0 10px;
  border-left: 2px solid var(--dsw-alias-border-l3);
  color: var(--dsw-alias-label-tertiary);
  font-style: italic;
  overflow-wrap: anywhere;
}
.omnimux-inspiration-modal-raw {
  margin-top: 8px;
}
.omnimux-inspiration-modal-dimensions h4 {
  margin: 0 0 6px;
  font-size: 13px;
  color: var(--dsw-alias-label-primary);
}
.omnimux-inspiration-modal-dimensions p { margin: 0; }
.omnimux-inspiration-modal-dimensions pre {
  margin: 0;
  font-family: ui-monospace, monospace;
}
.omnimux-inspiration-modal-empty {
  min-height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-align: center;
  color: var(--dsw-alias-label-tertiary);
}
.omnimux-inspiration-modal-meta-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;
  color: var(--dsw-alias-label-secondary);
  font-size: 12px;
}
.omnimux-inspiration-modal-mobile-tabs { display: none; }
.omnimux-inspiration-modal-footer {
  flex: 0 0 56px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 16px;
  border-top: 1px solid var(--dsw-alias-border-l2);
}
@media (max-width: 860px) {
  .omnimux-inspiration-modal-backdrop { padding: 12px; }
  .omnimux-inspiration-modal-container { height: min(92vh, 760px); }
  .omnimux-inspiration-modal-header { gap: 8px; padding: 0 12px; }
  .omnimux-inspiration-modal-header-meta { display: none; }
  .omnimux-inspiration-modal-mobile-tabs {
    display: flex;
    flex: 0 0 44px;
    align-items: center;
    gap: 4px;
    padding: 6px 12px;
    border-bottom: 1px solid var(--dsw-alias-border-l2);
  }
  .omnimux-inspiration-modal-mobile-tabs button {
    height: 32px;
    flex: 1;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: var(--dsw-alias-label-secondary);
    cursor: pointer;
  }
  .omnimux-inspiration-modal-mobile-tabs button.active {
    background: var(--dsw-alias-interactive-bg-active);
    color: var(--dsw-alias-label-primary);
  }
  .omnimux-inspiration-modal-body {
    display: block;
    overflow: hidden;
  }
  .omnimux-inspiration-modal-panel {
    display: none;
    height: 100%;
    border-right: 0;
  }
  .omnimux-inspiration-modal-panel.is-active { display: block; }
}
`;
function injectInspirationStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(INSPIRATION_STYLES_ID)) return;
  const styleNode = document.createElement("style");
  styleNode.id = INSPIRATION_STYLES_ID;
  styleNode.textContent = INSPIRATION_CSS;
  document.head.appendChild(styleNode);
}

// src/client/use-inspiration-feed.js
var import_react6 = require("react");

// src/client/feed-helpers.js
function cacheKeyOf(...args) {
  const [tab = "all", q = "", type = "", sort = "hot", favorite = "0"] = typeof args[0] === "object" && args[0] !== null ? [args[0].tab, args[0].q, args[0].type, args[0].sort, args[0].favorite] : args;
  return `insp:${tab || "all"}:${q || ""}:${type || ""}:${sort || "hot"}:${favorite ?? "0"}`;
}
function applyCachedPage(cached, setters) {
  if (!cached || !cached.data) return false;
  const { setItems, setHasMore, setPhase, setLoading } = setters || {};
  if (setItems) setItems(cached.data.items || []);
  if (setHasMore) setHasMore(Boolean(cached.data.hasMore));
  if (setPhase && cached.data.phase) setPhase(cached.data.phase);
  if (setLoading) setLoading(false);
  return !cached.isStale;
}
function applyNextPageResult(result, targetPage, setters) {
  const { setItems, setPage, setHasMore } = setters;
  if (setItems) setItems((prev) => [...prev, ...result.items || []]);
  if (setPage) setPage(targetPage);
  if (setHasMore) setHasMore(Boolean(result.hasMore));
}
function applyFirstPageResult(result, cacheKey, setters) {
  const { setItems, setPage, setHasMore, setPhase } = setters;
  if (setItems) setItems(result.items || []);
  if (setPage) setPage(1);
  if (setHasMore) setHasMore(Boolean(result.hasMore));
  if (setPhase && result.phase) setPhase(result.phase);
  if (cacheKey) setInspirationCache(cacheKey, result);
}
function mergeFetchResult(options) {
  const { isNextPage, result, targetPage = 1, cacheKey, setters } = options || {};
  if (!result || !setters) return;
  if (isNextPage) {
    applyNextPageResult(result, targetPage, setters);
  } else {
    applyFirstPageResult(result, cacheKey, setters);
  }
  if (setters.setError) setters.setError(null);
}
function toggleIdInSet(prevSet, id) {
  const next = new Set(prevSet);
  if (next.has(id)) {
    next.delete(id);
  } else {
    next.add(id);
  }
  return next;
}
function removeIdsFromSet(prevSet, idsToRemove) {
  const next = new Set(prevSet);
  const set = idsToRemove instanceof Set ? idsToRemove : new Set(idsToRemove);
  for (const id of set) {
    next.delete(id);
  }
  return next;
}
function filterOutItemsByIds(items, idsToRemove) {
  const removedSet = idsToRemove instanceof Set ? idsToRemove : new Set(idsToRemove);
  return (items || []).filter((it) => !removedSet.has(it.id));
}
function extractLocalItemIds(items) {
  return (items || []).filter((it) => it.is_local).map((it) => it.id);
}
function updateItemInList(items, updatedItem) {
  if (!updatedItem) return items || [];
  return (items || []).map((it) => it.id === updatedItem.id ? updatedItem : it);
}
function createReplicateStatusHandler(flashCtaStatus, setCtaStatus) {
  return (key) => {
    if (key === "card.cta.replicating") {
      setCtaStatus(key);
      return;
    }
    if (key == null) {
      setCtaStatus(null);
      return;
    }
    flashCtaStatus(key);
  };
}
function resetReplicateBusy(ref, busySetter, ticket) {
  if (ref.current !== ticket) return;
  ref.current = null;
  busySetter(null);
}
async function executeBatchDelete(ids, setters) {
  const { selectedItem, setSelectedItem, setItems, setSelectedIds, setPendingRemove } = setters;
  await batchDeleteLocalInspirations(ids);
  setItems((prev) => filterOutItemsByIds(prev, ids));
  setSelectedIds((prev) => removeIdsFromSet(prev, ids));
  const isSelectedRemoved = Boolean(selectedItem && ids.includes(selectedItem.id));
  if (isSelectedRemoved) {
    setSelectedItem(null);
  }
  setPendingRemove(null);
}
async function fetchAndMergeInspirations(params, options) {
  const { tab, q, type, sort, favorite, targetPage } = params;
  const { isNextPage, cacheKey, setters } = options;
  const result = await loadInspirationsAtomic({
    tab,
    q,
    type,
    sort,
    favorite,
    page: targetPage,
    pageSize: 20
  });
  mergeFetchResult({
    isNextPage,
    result,
    targetPage,
    cacheKey,
    setters
  });
}
function checkCacheEarlyReturn(cacheKey, setters) {
  const cached = getInspirationCache(cacheKey);
  const hitFresh = applyCachedPage(cached, setters);
  if (hitFresh) return true;
  if (!cached && setters.setLoading) setters.setLoading(true);
  return false;
}
async function executeFeedLoad(params, setters) {
  const { isNextPage, tab, q, type, sort, favorite, page, hasExistingItems } = params;
  const { setItems, setPage, setHasMore, setPhase, setError, setLoading, setLoadingMore } = setters;
  const targetPage = isNextPage ? page + 1 : 1;
  const cacheKey = cacheKeyOf(tab, q, type, sort, favorite);
  if (!isNextPage) {
    const hitFresh = checkCacheEarlyReturn(cacheKey, { setItems, setHasMore, setPhase, setLoading });
    if (hitFresh) return;
  } else {
    setLoadingMore(true);
  }
  try {
    await fetchAndMergeInspirations(
      { tab, q, type, sort, favorite, targetPage },
      { isNextPage, cacheKey, setters: { setItems, setPage, setHasMore, setPhase, setError } }
    );
  } catch (err) {
    setError(String(err?.message || err));
    const shouldResetPhase = !isNextPage && !hasExistingItems;
    if (shouldResetPhase) setPhase("ready");
  } finally {
    setLoading(false);
    setLoadingMore(false);
  }
}

// src/client/replication.js
var REPLICATION_SKILL = "video-deconstruct";
var REPLICATION_PROMPT_BODY = "\u5B8C\u5168\u590D\u523B\u539F\u89C6\u9891\u811A\u672C\u548C\u753B\u9762\uFF0C\u4EC5\u5C06\u539F\u89C6\u9891\u4E2D\u7684\u5546\u54C1\u66FF\u6362\u6210\u6211\u7684\u5546\u54C1\u3001\u5982\u6709\u53E3\u64AD\u5185\u5BB9\u9700\u7ED3\u5408\u6211\u7684\u5546\u54C1\u8FDB\u884C\u8C03\u6574\uFF08\u6CA1\u6709\u5219\u4E0D\u9700\u8981\u51FA\u73B0\u53E3\u64AD\uFF09\uFF0C\u540C\u65F6\u89C6\u9891\u4E0D\u9700\u8981\u51FA\u73B0\u5B57\u5E55\uFF0C\u539F\u89C6\u9891\u6709\u51FA\u955C\u4EBA\u7269\u7684\u8BDD\uFF0C\u65B0\u89C6\u9891\u4E5F\u9700\u8981\u6709\u3002\u590D\u523B\u540E\u7684\u65B0\u811A\u672C\u7684\u65F6\u957F\u9700\u63A7\u5236\u5728\u65F6\u95F4\u8303\u56F4\u5185\u3002";
function buildReplicationPrompt(_row, opts = {}) {
  void _row;
  void opts.product;
  return `/${REPLICATION_SKILL}

${REPLICATION_PROMPT_BODY}`;
}

// src/client/session-prefill.js
var pendingIntent = null;
var listeners = /* @__PURE__ */ new Set();
var DEFAULT_TIMEOUT_MS = 6e3;
function queueSessionPrefill(request) {
  const targetSessionId = String(request?.targetSessionId ?? "");
  const prompt = String(request?.prompt ?? "");
  const timeoutMs = Number.isFinite(request?.timeoutMs) ? Math.max(0, request.timeoutMs) : DEFAULT_TIMEOUT_MS;
  if (!targetSessionId || targetSessionId === "default" || !prompt) {
    return Promise.resolve({ ok: false, error: "composer-missing" });
  }
  if (pendingIntent) finishIntent(pendingIntent, { ok: false, error: "composer-rejected" });
  return new Promise((resolve) => {
    const intent = {
      targetSessionId,
      prompt,
      resolve,
      timer: setTimeout(() => finishIntent(intent, { ok: false, error: "composer-missing" }), timeoutMs)
    };
    pendingIntent = intent;
    emitSessionPrefill();
  });
}
function subscribeSessionPrefill(listener) {
  if (typeof listener !== "function") return () => {
  };
  listeners.add(listener);
  return () => listeners.delete(listener);
}
function consumeSessionPrefill(intent, slot) {
  if (!intent || pendingIntent !== intent) return "waiting";
  if (String(slot?.sessionId ?? "") !== intent.targetSessionId) return "waiting";
  if (String(slot?.draft ?? "") !== "") {
    finishIntent(intent, { ok: false, error: "draft-protected" });
    return "protected";
  }
  if (typeof slot?.inputActions?.setDraft !== "function") {
    finishIntent(intent, { ok: false, error: "composer-rejected" });
    return "rejected";
  }
  try {
    slot.inputActions.setDraft(intent.prompt);
    finishIntent(intent, { ok: true, via: "input-actions" });
    return "consumed";
  } catch {
    finishIntent(intent, { ok: false, error: "composer-rejected" });
    return "rejected";
  }
}
function getPendingSessionPrefill() {
  return pendingIntent;
}
function finishIntent(intent, result) {
  if (pendingIntent !== intent) return;
  pendingIntent = null;
  clearTimeout(intent.timer);
  intent.resolve(result);
  emitSessionPrefill();
}
function emitSessionPrefill() {
  for (const listener of listeners) {
    try {
      listener();
    } catch {
    }
  }
}

// src/client/new-session-click.js
var NEW_SESSION_WAIT_MS = 1500;
var NEW_SESSION_POLL_MS = 50;
var officialSessions = null;
function bindOfficialSessions(sessions) {
  officialSessions = sessions || null;
}
var SESSION_MENU_RE = /新会话|新建会话|new session/i;
var PROJECT_MENU_RE = /新建项目|create project|new project/i;
function resolveDoc(doc) {
  if (doc) return doc;
  return typeof document !== "undefined" ? document : null;
}
function resolveWindow(doc, win) {
  if (win) return win;
  if (doc && doc.defaultView) return doc.defaultView;
  if (typeof window !== "undefined") return window;
  return void 0;
}
function isVisible(el) {
  if (!el) return false;
  if (typeof el.getClientRects !== "function") return true;
  try {
    return el.getClientRects().length > 0;
  } catch {
    return true;
  }
}
function isTopbarNewSession(button) {
  if (!button) return false;
  if (typeof button.getAttribute === "function") {
    const value = button.getAttribute("data-omnimux-topbar-new-session");
    if (value != null && value !== "false" && value !== "0") return true;
  }
  if (typeof button.hasAttribute === "function" && button.hasAttribute("data-omnimux-topbar-new-session")) {
    return true;
  }
  if (typeof button.closest === "function") {
    if (button.closest('[data-omnimux-topbar-new-session="1"]')) return true;
    if (button.closest("[data-omnimux-topbar-new-session]")) return true;
  }
  return false;
}
function matchesOfficialNewSession(button) {
  if (!button || typeof button.getAttribute !== "function") return false;
  if (isTopbarNewSession(button)) return false;
  if (typeof button.closest === "function") {
    if (button.closest("#omnimux-sidebar-new-menu")) return false;
    if (button.closest('[role="treeitem"]')) return false;
  }
  if (String(button.className || "").includes("newSession")) return true;
  const aria = String(button.getAttribute("aria-label") || "").trim();
  return /^(新建会话|新会话|New session)$/i.test(aria);
}
function findNewSessionButton(doc) {
  const d = resolveDoc(doc);
  if (!d) return null;
  const list = typeof d.querySelectorAll === "function" ? Array.from(d.querySelectorAll("button")) : typeof d.querySelector === "function" ? [d.querySelector("button")].filter(Boolean) : [];
  const hits = list.filter((el) => matchesOfficialNewSession(el));
  if (hits.length === 0) return null;
  const classHits = hits.filter((el) => String(el.className || "").includes("newSession"));
  const pool = classHits.length > 0 ? classHits : hits;
  const visible = pool.find((el) => isVisible(el));
  return visible || pool[0];
}
function findSingleWorkspaceNewSessionButton(doc) {
  const d = resolveDoc(doc);
  if (!d || typeof d.querySelectorAll !== "function") return null;
  const matches = Array.from(d.querySelectorAll("button")).filter((button) => {
    if (!isVisible(button) || typeof button.getAttribute !== "function") return false;
    const aria = String(button.getAttribute("aria-label") || "").trim();
    return /^(在.+中新建会话|New session in .+)$/i.test(aria);
  });
  return matches.length === 1 ? matches[0] : null;
}
function menuItemLabel(el) {
  if (!el) return "";
  const text2 = el.textContent;
  if (text2 != null && String(text2).trim()) return String(text2).trim();
  if (typeof el.getAttribute === "function") {
    return String(el.getAttribute("aria-label") || "").trim();
  }
  return "";
}
function isNewSessionMenuItem(el) {
  if (!el) return false;
  const label = menuItemLabel(el);
  if (!label) return false;
  if (PROJECT_MENU_RE.test(label)) return false;
  return SESSION_MENU_RE.test(label);
}
function queryMenuItems(doc) {
  const d = resolveDoc(doc);
  if (!d) return [];
  if (typeof d.querySelector === "function") {
    const menu = d.querySelector("#omnimux-sidebar-new-menu");
    if (menu && typeof menu.querySelectorAll === "function") {
      return Array.from(menu.querySelectorAll('[role="menuitem"]'));
    }
  }
  if (typeof d.querySelectorAll === "function") {
    return Array.from(d.querySelectorAll('#omnimux-sidebar-new-menu [role="menuitem"]'));
  }
  return [];
}
function findNewSessionMenuItem(doc) {
  return queryMenuItems(doc).find((el) => isNewSessionMenuItem(el)) || null;
}
function clickIfPossible(el) {
  if (!el || typeof el.click !== "function") return false;
  el.click();
  return true;
}
function readActiveSessionId(win) {
  const getter = win && win.__omnimuxAttachments && win.__omnimuxAttachments.getActiveSessionId;
  if (typeof getter !== "function") return "";
  try {
    return String(getter.call(win.__omnimuxAttachments) || "");
  } catch {
    return "";
  }
}
function sessionSnapshot(sessions) {
  const list = sessions && sessions.list;
  if (!list || typeof list.getSnapshot !== "function") return null;
  try {
    return list.getSnapshot();
  } catch {
    return null;
  }
}
function resolvedOfficialTarget(sessions, beforeId) {
  const snapshot = sessionSnapshot(sessions);
  const sessionId = snapshot?.current;
  if (!sessionId || typeof sessionId !== "string") return null;
  const summary = snapshot.byId?.[sessionId];
  if (!summary || summary.blank !== true) return null;
  return {
    ok: true,
    sessionId,
    reusedBlank: sessionId === beforeId
  };
}
function resolvedAttachmentTarget(win, beforeId) {
  const afterId = readActiveSessionId(win);
  if (!afterId || afterId === "default" || afterId === beforeId) return null;
  return { ok: true, sessionId: afterId };
}
async function clickOfficialNewSession(opts = {}) {
  const doc = resolveDoc(opts.document);
  const win = resolveWindow(doc, opts.window);
  const sessions = opts.sessions || officialSessions;
  const timeoutMs = Number.isFinite(opts.timeoutMs) ? opts.timeoutMs : NEW_SESSION_WAIT_MS;
  const pollMs = Number.isFinite(opts.pollMs) ? opts.pollMs : NEW_SESSION_POLL_MS;
  const now = typeof opts.now === "function" ? opts.now : () => Date.now();
  const sleep = typeof opts.sleep === "function" ? opts.sleep : (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const beforeId = sessionSnapshot(sessions)?.current || readActiveSessionId(win);
  const hasOfficialCurrent = Boolean(sessionSnapshot(sessions)?.current);
  let clickedMenu = clickIfPossible(findNewSessionMenuItem(doc));
  if (!clickedMenu) {
    const button = !hasOfficialCurrent ? findSingleWorkspaceNewSessionButton(doc) || findNewSessionButton(doc) : findNewSessionButton(doc);
    if (!button || typeof button.click !== "function") {
      return { ok: false, error: "newSessionFailed" };
    }
    button.click();
    clickedMenu = clickIfPossible(findNewSessionMenuItem(doc));
  }
  const started = now();
  while (now() - started < timeoutMs) {
    if (!clickedMenu) {
      clickedMenu = clickIfPossible(findNewSessionMenuItem(doc));
    }
    const officialTarget2 = resolvedOfficialTarget(sessions, beforeId);
    if (officialTarget2) return officialTarget2;
    if (!sessions) {
      const attachmentTarget = resolvedAttachmentTarget(win, beforeId);
      if (attachmentTarget) return attachmentTarget;
    }
    await sleep(pollMs);
  }
  const officialTarget = resolvedOfficialTarget(sessions, beforeId);
  if (officialTarget) return officialTarget;
  if (!sessions) {
    const attachmentTarget = resolvedAttachmentTarget(win, beforeId);
    if (attachmentTarget) return attachmentTarget;
  }
  return { ok: false, error: "newSessionFailed" };
}

// src/client/replicate-to-chat.js
var replicateInflight = null;
function runExclusive(fn) {
  if (replicateInflight) {
    return Promise.resolve({ ok: false, error: "busy" });
  }
  const work = Promise.resolve().then(fn).finally(() => {
    if (replicateInflight === work) replicateInflight = null;
  });
  replicateInflight = work;
  return work;
}
function isReplicateBusy() {
  return replicateInflight != null;
}
function resolveDoc2(io) {
  if (io.document) return io.document;
  return typeof document !== "undefined" ? document : null;
}
function resolveWindow2(io, doc) {
  if (io.window) return io.window;
  if (doc && doc.defaultView) return doc.defaultView;
  if (typeof window !== "undefined") return window;
  return void 0;
}
function pickReplicationPreviewUrl(row) {
  if (!row || typeof row !== "object") return "";
  const rec = (
    /** @type {Record<string, unknown>} */
    row
  );
  const raw = rec.cover_key ?? rec.cover_url;
  if (typeof raw !== "string" || raw === "") return "";
  if (raw.includes("..")) return "";
  if (/^https?:\/\//i.test(raw)) return raw;
  if (raw.startsWith("/omnimux/inspiration/local/media/")) return raw;
  if (raw.startsWith("/omnimux/inspiration/media/")) return raw;
  if (raw.startsWith("/api/inspiration/v1/media/")) {
    return `/omnimux/inspiration/media/${raw.slice("/api/inspiration/v1/media/".length)}`;
  }
  return `/omnimux/inspiration/media/${raw.replace(/^\/+/, "")}`;
}
function buildInspirationPayload(row) {
  const id = row?.id;
  return {
    sourcePlugin: "omnimux-inspiration",
    kind: "inspiration",
    entityId: id,
    title: row?.title || row?.source_url || "\u7075\u611F\u7D20\u6750",
    extension: "INSPIRATION",
    relativePath: row?.local_paths?.video || row?.local_paths?.cover || `inspiration/${id}`,
    previewUrl: pickReplicationPreviewUrl(row),
    metadata: {
      inspiration_id: id,
      source_url: row?.source_url,
      source_platform: row?.source_platform
    }
  };
}
function revealConversationColumn(wb) {
  if (!wb) return;
  if (typeof wb.setConversationCollapsed === "function") {
    try {
      wb.setConversationCollapsed(false);
    } catch {
    }
  }
  if (typeof wb.setFocus === "function") {
    try {
      wb.setFocus("split");
    } catch {
    }
  }
}
function workbenchFrom(win) {
  if (win && win.__omnimuxWorkbench) return win.__omnimuxWorkbench;
  if (typeof window !== "undefined" && window.__omnimuxWorkbench) return window.__omnimuxWorkbench;
  return void 0;
}
function revealConversationForReplicate(io = {}) {
  if (typeof io.onDismissModal === "function") {
    try {
      io.onDismissModal();
    } catch {
    }
  }
  const win = io.window ?? (typeof window !== "undefined" ? window : void 0);
  const wb = workbenchFrom(win);
  revealConversationColumn(wb);
  if (typeof setTimeout === "function") {
    const replay = () => revealConversationColumn(wb);
    setTimeout(replay, 0);
    setTimeout(replay, 50);
  }
}
function resolveNewSessionId(clickResult) {
  const sessionId = clickResult && clickResult.sessionId != null ? String(clickResult.sessionId) : "";
  return sessionId !== "default" ? sessionId : "";
}
function defaultAddAttachment(win, doc) {
  return (sessionId, payload) => {
    const store = win && win.__omnimuxAttachments;
    if (store && typeof store.addAttachment === "function") {
      return store.addAttachment(sessionId || "", payload);
    }
    const target = win || doc && doc.defaultView || (typeof window !== "undefined" ? window : null);
    if (target && typeof target.dispatchEvent === "function" && typeof target.CustomEvent === "function") {
      const eventName = ["omnimux", "add-to-conversation"].join(":");
      target.dispatchEvent(new target.CustomEvent(eventName, {
        detail: { ...payload, sessionId }
      }));
      return { ok: true };
    }
    return { ok: false, reason: "invalid-payload" };
  };
}
async function oneClickReplicate(row, io = {}) {
  const onStatus = typeof io.onStatus === "function" ? io.onStatus : () => {
  };
  if (isReplicateBusy()) {
    onStatus("card.cta.busy");
    return { ok: false, error: "busy" };
  }
  return runExclusive(async () => {
    const doc = resolveDoc2(io);
    const win = resolveWindow2(io, doc);
    const clickNew = typeof io.clickNewSession === "function" ? io.clickNewSession : clickOfficialNewSession;
    const addAttachment = typeof io.addAttachment === "function" ? io.addAttachment : defaultAddAttachment(win, doc);
    const prefill = typeof io.prefillPrompt === "function" ? io.prefillPrompt : (prompt2) => queueSessionPrefill({ targetSessionId: sessionId, prompt: prompt2 });
    const reveal = typeof io.revealConversation === "function" ? io.revealConversation : () => revealConversationForReplicate({
      window: win,
      onDismissModal: io.onDismissModal
    });
    onStatus("card.cta.replicating");
    let clickPromise;
    try {
      clickPromise = clickNew({ document: doc, window: win });
    } catch {
      try {
        reveal();
      } catch {
      }
      onStatus("card.cta.newSessionFailed");
      return { ok: false, error: "newSessionFailed" };
    }
    try {
      reveal();
    } catch {
    }
    let clickResult = null;
    try {
      clickResult = await clickPromise;
    } catch {
      onStatus("card.cta.newSessionFailed");
      return { ok: false, error: "newSessionFailed" };
    }
    if (!clickResult || clickResult.ok !== true) {
      onStatus("card.cta.newSessionFailed");
      return { ok: false, error: "newSessionFailed" };
    }
    const sessionId = resolveNewSessionId(clickResult);
    if (!sessionId) {
      onStatus("card.cta.newSessionFailed");
      return { ok: false, error: "newSessionFailed" };
    }
    const prompt = buildReplicationPrompt(row);
    let prefilled;
    try {
      prefilled = await prefill(prompt);
    } catch {
      onStatus("card.cta.sendManual");
      return { ok: false, error: "sendManual" };
    }
    if (!prefilled || prefilled.ok !== true) {
      onStatus(prefilled?.error === "draft-protected" ? "card.cta.draftProtected" : "card.cta.sendManual");
      return { ok: false, error: prefilled?.error === "draft-protected" ? "draftProtected" : "sendManual" };
    }
    const payload = buildInspirationPayload(row);
    let attached = false;
    let duplicate = false;
    let attachResult;
    try {
      attachResult = addAttachment(sessionId, payload);
    } catch {
      onStatus("card.cta.attachFailed");
      return { ok: false, error: "attachFailed" };
    }
    if (attachResult && typeof attachResult.then === "function") {
      try {
        attachResult = await attachResult;
      } catch {
        onStatus("card.cta.attachFailed");
        return { ok: false, error: "attachFailed" };
      }
    }
    const reason = attachResult && attachResult.reason ? String(attachResult.reason) : "";
    if (attachResult && attachResult.ok === true) {
      attached = true;
    } else if (reason === "duplicate") {
      attached = true;
      duplicate = true;
    } else if (reason === "quota-exceeded") {
      onStatus("card.cta.attachFull");
      return { ok: false, error: "attachFull" };
    } else {
      onStatus("card.cta.attachFailed");
      return { ok: false, error: "attachFailed" };
    }
    onStatus(null);
    return {
      ok: true,
      clickedNewSession: true,
      attached,
      ...duplicate ? { duplicate: true } : {}
    };
  });
}

// src/client/use-inspiration-feed.js
function useReplicateToChat() {
  const [replicateBusy, setReplicateBusy] = (0, import_react6.useState)(null);
  const [ctaStatus, setCtaStatus] = (0, import_react6.useState)(null);
  const ctaStatusTimer = (0, import_react6.useRef)(null);
  const replicateBusyRef = (0, import_react6.useRef)(null);
  (0, import_react6.useEffect)(() => {
    return () => {
      if (ctaStatusTimer.current) clearTimeout(ctaStatusTimer.current);
    };
  }, []);
  const flashCtaStatus = (0, import_react6.useCallback)((key) => {
    if (ctaStatusTimer.current) clearTimeout(ctaStatusTimer.current);
    setCtaStatus(key);
    if (key) {
      ctaStatusTimer.current = setTimeout(() => setCtaStatus(null), 2e3);
    }
  }, []);
  const handleReplicate = (0, import_react6.useCallback)((row) => {
    if (replicateBusyRef.current) return;
    const ticket = row.id;
    replicateBusyRef.current = ticket;
    setReplicateBusy(ticket);
    const onStatus = createReplicateStatusHandler(flashCtaStatus, setCtaStatus);
    const execOpts = { onStatus };
    void oneClickReplicate(row, execOpts).finally(() => {
      resetReplicateBusy(replicateBusyRef, setReplicateBusy, ticket);
    });
  }, [flashCtaStatus]);
  return { replicateBusy, ctaStatus, handleReplicate };
}
function useFeedSelection(options) {
  const { items, selectedItem, setSelectedItem, setItems } = options || {};
  const [selectedIds, setSelectedIds] = (0, import_react6.useState)(() => /* @__PURE__ */ new Set());
  const [pendingRemove, setPendingRemove] = (0, import_react6.useState)(null);
  const [removing, setRemoving] = (0, import_react6.useState)(false);
  const toggleSelect = (0, import_react6.useCallback)((row) => {
    if (!row.is_local) return;
    setSelectedIds((prev) => toggleIdInSet(prev, row.id));
  }, []);
  const selectAllLocal = (0, import_react6.useCallback)(() => {
    setSelectedIds(new Set(extractLocalItemIds(items)));
  }, [items]);
  const clearSelection = (0, import_react6.useCallback)(() => {
    setSelectedIds(/* @__PURE__ */ new Set());
  }, []);
  const handleConfirmBatchRemove = (0, import_react6.useCallback)(async () => {
    const ids = pendingRemove?.ids;
    if (!ids || ids.length === 0) return;
    setRemoving(true);
    try {
      await executeBatchDelete(ids, { selectedItem, setSelectedItem, setItems, setSelectedIds, setPendingRemove });
    } catch (err) {
      console.error("Failed to delete local inspirations:", err);
    } finally {
      setRemoving(false);
    }
  }, [pendingRemove, selectedItem, setItems, setSelectedItem]);
  return {
    selectedIds,
    setSelectedIds,
    pendingRemove,
    setPendingRemove,
    removing,
    selectedCount: selectedIds.size,
    selecting: selectedIds.size > 0,
    toggleSelect,
    selectAllLocal,
    clearSelection,
    handleConfirmBatchRemove
  };
}
function createSentinelObserver(sentinelEl, options) {
  const { hasMore, loading, loadingMore, loadData } = options;
  const observer = new IntersectionObserver((entries) => {
    const isVisible2 = Boolean(entries[0]?.isIntersecting);
    const isIdle = !loading && !loadingMore;
    if (isVisible2 && hasMore && isIdle) {
      loadData(true);
    }
  }, { rootMargin: "200px" });
  observer.observe(sentinelEl);
  return observer;
}
function useSentinelObserver(options) {
  const { sentinelRef, hasMore, loading, loadingMore, loadData } = options || {};
  (0, import_react6.useEffect)(() => {
    const sentinelEl = sentinelRef?.current;
    const isIdle = !loading && !loadingMore;
    if (!sentinelEl || !hasMore || !isIdle) return;
    const observer = createSentinelObserver(sentinelEl, { hasMore, loading, loadingMore, loadData });
    return () => observer.disconnect();
  }, [hasMore, loading, loadingMore, loadData, sentinelRef]);
}
function useInspirationFilters() {
  const [tab, setTab] = (0, import_react6.useState)("all");
  const [q, setQ] = (0, import_react6.useState)("");
  const [type, setType] = (0, import_react6.useState)("");
  const [sort, setSort] = (0, import_react6.useState)("hot");
  const [favorite, setFavorite] = (0, import_react6.useState)("0");
  return {
    tab,
    setTab,
    q,
    setQ,
    type,
    setType,
    sort,
    setSort,
    favorite,
    setFavorite
  };
}
function useFeedData(options) {
  const { active, filters } = options || {};
  const { tab, q, type, sort, favorite } = filters || {};
  const [items, setItems] = (0, import_react6.useState)([]);
  const [page, setPage] = (0, import_react6.useState)(1);
  const [hasMore, setHasMore] = (0, import_react6.useState)(false);
  const [loading, setLoading] = (0, import_react6.useState)(true);
  const [loadingMore, setLoadingMore] = (0, import_react6.useState)(false);
  const [phase, setPhase] = (0, import_react6.useState)("loading");
  const [error, setError] = (0, import_react6.useState)(null);
  const loadData = (0, import_react6.useCallback)((isNextPage = false) => {
    return executeFeedLoad(
      { isNextPage, tab, q, type, sort, favorite, page, hasExistingItems: items.length > 0 },
      { setItems, setPage, setHasMore, setPhase, setError, setLoading, setLoadingMore }
    );
  }, [tab, q, type, sort, favorite, page, items.length]);
  (0, import_react6.useEffect)(() => {
    if (!active) return;
    loadData(false);
  }, [active, tab, q, type, sort, favorite, loadData]);
  (0, import_react6.useEffect)(() => {
    return whenAuthReady(() => {
      loadData(false);
    });
  }, [loadData]);
  return {
    items,
    setItems,
    page,
    hasMore,
    loading,
    loadingMore,
    phase,
    error,
    loadData
  };
}
function useInspirationFeed({ active }) {
  const filters = useInspirationFilters();
  const data = useFeedData({ active, filters });
  const { items, setItems, hasMore, loading, loadingMore, loadData } = data;
  const [selectedItem, setSelectedItem] = (0, import_react6.useState)(null);
  const [importOpen, setImportOpen] = (0, import_react6.useState)(false);
  const sentinelRef = (0, import_react6.useRef)(null);
  const replicate = useReplicateToChat();
  const selection = useFeedSelection({ items, selectedItem, setSelectedItem, setItems });
  useSentinelObserver({ sentinelRef, hasMore, loading, loadingMore, loadData });
  const handleImportSuccess = (0, import_react6.useCallback)((newItem) => {
    setItems((prev) => [newItem, ...prev]);
    setSelectedItem(newItem);
  }, [setItems]);
  const handleItemUpdated = (0, import_react6.useCallback)((updatedItem) => {
    setItems((prev) => updateItemInList(prev, updatedItem));
    setSelectedItem(updatedItem);
  }, [setItems]);
  return {
    ...filters,
    ...data,
    selectedItem,
    setSelectedItem,
    importOpen,
    setImportOpen,
    sentinelRef,
    ...replicate,
    handleImportSuccess,
    handleItemUpdated,
    ...selection
  };
}

// src/client/InspirationSection.jsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function LoginGate({ t }) {
  const login = () => {
    const gate = typeof window !== "undefined" ? window.__omnimuxAuth : void 0;
    if (gate && typeof gate.ensureLogin === "function") gate.ensureLogin({ kind: "explicit" });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "omnimux-inspiration-gate", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", { className: "omnimux-inspiration-empty-title", children: t("needLogin") }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "omnimux-inspiration-empty-text", children: t("needLoginHint") }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Button, { variant: "primary", onClick: login, children: t("login") })
  ] });
}
function EmptyState3({ t, onOpenAdd }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "omnimux-inspiration-empty", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", { className: "omnimux-inspiration-empty-title", children: t("empty.title") }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "omnimux-inspiration-empty-text", children: t("empty.description") }),
    onOpenAdd ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Button, { variant: "primary", className: "omnimux-inspiration-empty-cta", onClick: onOpenAdd, children: t("add.btn") }) : null
  ] });
}
function InspirationSection({ t, active }) {
  const feed = useInspirationFeed({ active });
  const {
    tab,
    setTab,
    q,
    setQ,
    type,
    setType,
    sort,
    setSort,
    favorite,
    setFavorite,
    items,
    loading,
    loadingMore,
    phase,
    error,
    selectedItem,
    setSelectedItem,
    importOpen,
    setImportOpen,
    selectedIds,
    pendingRemove,
    setPendingRemove,
    removing,
    replicateBusy,
    ctaStatus,
    sentinelRef,
    selectedCount,
    selecting,
    handleReplicate,
    toggleSelect,
    selectAllLocal,
    clearSelection,
    handleConfirmBatchRemove,
    handleImportSuccess,
    handleItemUpdated
  } = feed;
  (0, import_react7.useEffect)(() => {
    injectInspirationStyles();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "omnimux-inspiration-root", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "omnimux-inspiration-action-row", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      Button,
      {
        variant: "primary",
        className: "omnimux-inspiration-btn-add",
        leadingIcon: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: "M12 5v14M5 12h14" }) }),
        onClick: () => setImportOpen(true),
        children: t("add.btn")
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      FilterBar,
      {
        className: "omnimux-inspiration-toolbar",
        compact: true,
        filters: [
          { key: "all", label: t("tab.all") },
          { key: "local", label: t("tab.local") },
          { key: "public", label: t("tab.public") }
        ].map((tabItem) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          Button,
          {
            variant: tab === tabItem.key ? "secondary" : "ghost",
            size: "sm",
            "aria-pressed": tab === tabItem.key,
            onClick: () => setTab(tabItem.key),
            children: tabItem.label
          },
          tabItem.key
        )),
        search: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          SearchField,
          {
            value: q,
            placeholder: t("filter.search"),
            "aria-label": t("filter.search"),
            debounceMs: 0,
            stretch: true,
            onValueChange: setQ
          }
        ),
        tools: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            DropdownSelect,
            {
              value: type,
              "aria-label": t("filter.type"),
              onChange: setType,
              className: "omnimux-inspiration-filter-select",
              options: [
                { value: "", label: t("filter.type") },
                { value: "video", label: t("type.video") },
                { value: "image", label: t("type.image") },
                { value: "link", label: t("type.link") }
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            DropdownSelect,
            {
              value: sort,
              "aria-label": t("filter.sort"),
              onChange: setSort,
              className: "omnimux-inspiration-filter-select",
              options: [
                { value: "hot", label: t("sort.hot") },
                { value: "new", label: t("sort.new") },
                { value: "fav", label: t("sort.fav") }
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            DropdownSelect,
            {
              value: favorite,
              "aria-label": t("filter.favorite"),
              onChange: setFavorite,
              className: "omnimux-inspiration-filter-select",
              options: [
                { value: "0", label: t("favorite.off") },
                { value: "1", label: t("favorite.on") }
              ]
            }
          )
        ] })
      }
    ),
    selecting ? /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "omnimux-inspiration-selection-bar", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "omnimux-inspiration-selection-count", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: t("select.count").replace("{n}", String(selectedCount)) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "omnimux-inspiration-selection-actions", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Button, { variant: "ghost", size: "sm", onClick: selectAllLocal, children: t("select.selectAll") }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Button, { variant: "ghost", size: "sm", onClick: clearSelection, children: t("select.clear") }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          Button,
          {
            variant: "danger",
            size: "sm",
            disabled: removing,
            onClick: () => setPendingRemove({ ids: [...selectedIds], count: selectedCount }),
            children: t("select.delete").replace("{n}", String(selectedCount))
          }
        )
      ] })
    ] }) : null,
    loading && items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "omnimux-inspiration-skeleton", children: Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "omnimux-inspiration-skel" }, i)) }) : null,
    phase === "need-login" && tab === "public" ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(LoginGate, { t }) : null,
    phase === "ready" && error && items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "omnimux-inspiration-error", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "omnimux-inspiration-empty-text", children: error === "disabled" ? t("error.disabled") : error || t("error.generic") }) }) : null,
    !loading && items.length === 0 && (!error || tab === "local") ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(EmptyState3, { t, onOpenAdd: () => setImportOpen(true) }) : null,
    items.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: `omnimux-inspiration-grid ${selecting ? "selecting" : ""}`, children: items.map((row) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      InspirationCoverCard,
      {
        card: {
          row,
          t,
          selected: selectedIds.has(row.id),
          selecting,
          replicateBusy,
          onToggleSelect: toggleSelect,
          onSelect: (item) => setSelectedItem(item),
          onReplicate: handleReplicate
        }
      },
      String(row.id)
    )) }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "div",
      {
        className: "omnimux-inspiration-cta-status",
        id: "omnimux-inspiration-cta-status",
        "aria-live": "polite",
        role: "status",
        children: ctaStatus ? t(ctaStatus) : ""
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { ref: sentinelRef }),
    loadingMore ? /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "omnimux-inspiration-scroll-loader", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "omnimux-inspiration-spinner" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: "\u6B63\u5728\u52A0\u8F7D\u66F4\u591A\u7075\u611F\u2026" })
    ] }) : null,
    selectedItem ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      InspirationPreviewModal,
      {
        row: selectedItem,
        t,
        onClose: () => setSelectedItem(null),
        onItemUpdated: handleItemUpdated,
        onReplicate: handleReplicate,
        replicateBusy
      }
    ) : null,
    pendingRemove ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      ConfirmRemoveDialog,
      {
        t,
        count: pendingRemove.count,
        busy: removing,
        onCancel: () => setPendingRemove(null),
        onConfirm: handleConfirmBatchRemove
      }
    ) : null,
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      InspirationInlineImportDialog,
      {
        open: importOpen,
        t,
        onClose: () => setImportOpen(false),
        onImported: handleImportSuccess
      }
    )
  ] });
}

// src/client/InspirationStage.jsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var TAB_ID = "omnimux-inspiration:library";
function InspirationStage({ t, stage, store, visible = true }) {
  (0, import_react8.useEffect)(() => {
    injectInspirationStyles();
  }, []);
  const everOpened = true;
  (0, import_react8.useEffect)(() => {
    const api = typeof window !== "undefined" ? window.__omnimuxWorkbench : void 0;
    if (!api || typeof api.attachStore !== "function" || !store) return void 0;
    api.attachStore(store);
    return () => {
      api.detachStore?.(store);
    };
  }, [store]);
  const handleClose = () => {
    const api = typeof window !== "undefined" ? window.__omnimuxWorkbench : void 0;
    if (api && typeof api.closeTab === "function") {
      api.closeTab(TAB_ID);
    } else {
      stage?.set?.(false);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
    "div",
    {
      role: "region",
      "aria-label": t("title"),
      "aria-hidden": visible ? void 0 : "true",
      className: "omnimux-inspiration-stage",
      "data-visible": visible ? "true" : "false",
      style: {
        display: visible ? "flex" : "none",
        position: "relative",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        overflow: "hidden"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          PageHeader,
          {
            title: t("title"),
            subtitle: t("subtitle"),
            onClose: handleClose,
            closeTitle: t("close")
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "omnimux-inspiration-stage-body", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(InspirationSection, { t, active: visible }) })
      ]
    }
  );
}

// src/client/index.js
var name = "omnimux-inspiration";
var inject = ["slots", "locale"];
var INSPIRATION_TAB_ID2 = "omnimux-inspiration:library";
var SESSION_PREFILL_SLOT = "conversation.composer.dock";
function SessionPrefillConsumer(props) {
  const intent = (0, import_react9.useSyncExternalStore)(
    subscribeSessionPrefill,
    getPendingSessionPrefill,
    getPendingSessionPrefill
  );
  const draft = typeof props?.useInput === "function" ? String(props.useInput((state) => state?.draft ?? "") ?? "") : "";
  const sessionId = String(props?.sessionId ?? "");
  (0, import_react9.useEffect)(() => {
    consumeSessionPrefill(intent, {
      sessionId,
      draft,
      inputActions: props?.inputActions
    });
  }, [draft, intent, sessionId, props?.inputActions]);
  return null;
}
function renderInspirationIcon(size = 16) {
  return (0, import_react9.createElement)("svg", {
    width: size,
    height: size,
    viewBox: "0 0 22 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    (0, import_react9.createElement)("path", {
      key: "p1",
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1.833 4.813a2.52 2.52 0 0 1 2.521-2.521h6.875a2.52 2.52 0 0 1 2.521 2.52v12.375a2.52 2.52 0 0 1-2.52 2.521H4.353a2.52 2.52 0 0 1-2.52-2.52V4.813Zm2.521-.688h6.875c.38 0 .688.308.688.688v12.375c0 .38-.308.687-.688.687H4.354a.687.687 0 0 1-.687-.688V4.813c0-.38.307-.688.687-.688Z"
    }),
    (0, import_react9.createElement)("path", {
      key: "p2",
      fill: "currentColor",
      d: "m20.9 7.428-1.65-.953v9.05l1.65-.953V7.428Zm-3.483-2.011-1.834-1.059v13.284l1.834-1.059V5.417Z"
    })
  ]);
}
function apply(ctx) {
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), "omnimux-inspiration: dictionaries");
  const t = ctx.locale.bind(NS);
  ctx.effect(() => mountSidebarEntry(null, t, ctx.locale), "omnimux-inspiration: sidebar entry");
  ctx.slots.inject(SESSION_PREFILL_SLOT, () => ctx.slots.register({
    name: SESSION_PREFILL_SLOT,
    id: "omnimux-inspiration:session-prefill",
    order: 100
  }, SessionPrefillConsumer));
  const registerInspirationTab = (sidebar) => {
    if (!sidebar || typeof sidebar.registerTab !== "function") return () => {
    };
    return sidebar.registerTab({
      id: INSPIRATION_TAB_ID2,
      title: () => {
        try {
          const value = t("nav");
          if (value && value !== "nav") return value;
        } catch {
        }
        return "\u7075\u611F\u5E93";
      },
      icon: renderInspirationIcon,
      order: 18,
      hidden: false,
      single: true,
      component: (props) => (0, import_react9.createElement)(InspirationStage, { ...props, t })
    });
  };
  const bindWorkbench = (patch) => {
    try {
      window.__omnimuxWorkbench?.bind?.(patch);
    } catch {
    }
  };
  if (typeof ctx.inject === "function") {
    ctx.inject(["betterSidebar"], (inner) => {
      const sidebar = inner.betterSidebar ?? inner.get?.("betterSidebar");
      bindWorkbench({ betterSidebar: sidebar });
      if (typeof ctx.effect === "function") {
        ctx.effect(() => registerInspirationTab(sidebar), "omnimux-inspiration: library tab");
      } else {
        registerInspirationTab(sidebar);
      }
    });
    ctx.inject(["layout", "sessions"], (inner) => {
      bindWorkbench({ layout: inner.layout, sessions: inner.sessions });
      bindOfficialSessions(inner.sessions);
    });
  }
}

    return module.exports;
  }
});
