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
  apply: () => apply,
  inject: () => inject,
  name: () => name
});
module.exports = __toCommonJS(index_exports);

// src/client/locales.js
var zh = {
  "nav": "\u7075\u611F\u5E93",
  "title": "\u7075\u611F\u7D20\u6750\u5E93",
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
  "add.autoAnalyze": "\u5BFC\u5165\u540E\u81EA\u52A8\u6267\u884C AI \u591A\u7EF4\u5185\u5BB9\u89E3\u6784\u5206\u6790",
  "add.submit": "\u5F00\u59CB\u6293\u53D6\u5E76\u89E3\u6790",
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
  "select.count": "\u5DF2\u9009 {n} \u9879",
  "select.selectAll": "\u5168\u9009\u672C\u5730",
  "select.clear": "\u53D6\u6D88\u9009\u62E9",
  "select.delete": "\u5220\u9664 ({n})",
  "select.toggle": "\u9009\u62E9\u6216\u53D6\u6D88\u9009\u62E9\u8BE5\u7075\u611F",
  "confirmRemove.title": "\u786E\u8BA4\u5220\u9664 {n} \u4E2A\u672C\u5730\u7075\u611F\uFF1F",
  "confirmRemove.description": "\u9009\u4E2D\u7684\u7075\u611F\u8BB0\u5F55\u5C06\u88AB\u6E05\u9664\uFF0C\u5173\u8054\u7684\u672C\u5730\u89C6\u9891\u53CA\u5C01\u9762\u7D20\u6750\u6587\u4EF6\u5C06\u79FB\u5165\u7CFB\u7EDF\u5E9F\u7EB8\u7BD3\u3002",
  "confirmRemove.cancel": "\u53D6\u6D88",
  "confirmRemove.confirm": "\u79FB\u5165\u5E9F\u7EB8\u7BD3",
  "confirmRemove.deleting": "\u6B63\u5728\u5220\u9664\u2026"
};
var en = {
  "nav": "Inspiration",
  "title": "Inspiration Vault",
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
  "add.autoAnalyze": "Automatically run AI multi-dimensional breakdown",
  "add.submit": "Fetch and Analyze",
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
  "select.count": "{n} selected",
  "select.selectAll": "Select all local",
  "select.clear": "Clear selection",
  "select.delete": "Delete ({n})",
  "select.toggle": "Toggle item selection",
  "confirmRemove.title": "Delete {n} local inspirations?",
  "confirmRemove.description": "Selected inspiration records will be removed, and local video/cover files will be moved to the Trash.",
  "confirmRemove.cancel": "Cancel",
  "confirmRemove.confirm": "Move to Trash",
  "confirmRemove.deleting": "Deleting\u2026"
};
var NS = "omnimux-inspiration";

// src/client/stage-store.js
var PRODUCT_STAGE_EVENT = "dsh-product-stage";
var STAGE_ID = "omnimux-inspiration";
function createStageStore(getStage) {
  let open = false;
  try {
    open = window.localStorage.getItem("omnimux_active_product_stage") === STAGE_ID;
  } catch {
  }
  const listeners = /* @__PURE__ */ new Set();
  function emit() {
    for (const listener of listeners) listener();
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
      emit();
    } else if (id === STAGE_ID && !open) {
      open = true;
      emit();
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
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
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
      emit();
    },
    toggle() {
      this.set(!open);
    }
  };
}

// src/client/sidebar-entry.js
var ICON = '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><rect x="2.5" y="2.5" width="11" height="11" rx="2"/><path d="M5 9.5 7 7l2 2 2-2.5 1.5 2.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="6" cy="5.5" r="0.9" fill="currentColor" stroke="none"/></svg>';
var STYLES = `
.omnimux-inspiration-entry {
  box-sizing: border-box; display: flex; align-items: center; gap: 6px; position: relative;
  width: calc(100% - 8px); height: 32px; margin: 0 4px; padding: 0 8px;
  border: none; border-radius: 8px; background: transparent;
  color: var(--dsw-alias-label-primary, inherit);
  font: var(--dsw-font-s-14, inherit); font-size: 14px; line-height: 20px;
  cursor: pointer; text-align: left;
}
.omnimux-inspiration-entry:hover { background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,.12)); }
.omnimux-inspiration-entry[data-active="true"] { background: var(--dsw-alias-interactive-bg-active, rgba(128,128,128,.18)); font-weight: 500; }
.omnimux-inspiration-entry-icon { flex: none; display: inline-flex; width: 14px; height: 14px; align-items: center; justify-content: center; }
.omnimux-inspiration-entry svg { display: block; width: 14px; height: 14px; }
.omnimux-inspiration-entry-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 20px; }
`;
function paintLabel(entry, label) {
  entry.setAttribute("aria-label", label);
  const node = entry.querySelector(".omnimux-inspiration-entry-label");
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
  entry.dataset.omnimuxInspirationEntry = "";
  entry.className = "omnimux-inspiration-entry";
  entry.innerHTML = `<span class="omnimux-inspiration-entry-icon">${ICON}</span><span class="omnimux-inspiration-entry-label"></span>`;
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
    id: "omnimux-inspiration-entry",
    rank: 7,
    styles: STYLES,
    styleId: "omnimux-inspiration-entry-styles",
    create: () => entry
  });
  return () => {
    unregister();
    unsubscribeStage();
    unsubscribeLocale();
  };
}

// src/client/InspirationStage.jsx
var import_react2 = require("react");

// src/client/InspirationSection.jsx
var import_react = require("react");

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
var listInspirationsGuarded = authGuard(listInspirations);
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
  return inspirationRequest(`/omnimux/inspiration/local/${encodeURIComponent(id)}/analyze`, {
    method: "POST"
  });
}
function batchDeleteLocalInspirations(ids) {
  invalidateInspirationCache();
  return inspirationRequest("/omnimux/inspiration/local/batch-delete", {
    method: "POST",
    body: { ids }
  });
}
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
function coverGlyph(title) {
  const text = typeof title === "string" ? title.trim() : "";
  return text.slice(0, 1) || "\u7075";
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

// src/client/ConfirmRemoveDialog.jsx
var import_jsx_runtime = require("react/jsx-runtime");
var backdrop = {
  position: "fixed",
  inset: 0,
  zIndex: 300,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(0, 0, 0, 0.65)",
  backdropFilter: "blur(4px)"
};
var dialog = {
  width: 380,
  maxWidth: "calc(100vw - 48px)",
  display: "flex",
  flexDirection: "column",
  gap: 12,
  padding: 20,
  borderRadius: 16,
  background: "var(--omx-color-canvas-raised, #161616)",
  border: "1px solid var(--omx-color-hairline, #282828)",
  color: "var(--omx-color-ink, #ffffff)",
  boxShadow: "0 16px 36px rgba(0, 0, 0, 0.6)",
  boxSizing: "border-box"
};
var heading = {
  margin: 0,
  fontSize: 16,
  fontWeight: 600,
  lineHeight: "24px"
};
var hint = {
  margin: 0,
  fontSize: 13,
  lineHeight: "20px",
  color: "var(--omx-color-muted, #8e8e8e)"
};
var buttons = {
  display: "flex",
  justifyContent: "flex-end",
  gap: 10,
  marginTop: 6
};
var ghostButton = {
  padding: "6px 14px",
  fontSize: 13,
  lineHeight: "20px",
  borderRadius: 999,
  cursor: "pointer",
  border: "1px solid var(--omx-color-hairline-strong, #3a3a3a)",
  background: "transparent",
  color: "inherit"
};
var dangerButton = {
  ...ghostButton,
  fontWeight: 600,
  border: "none",
  color: "#ffffff",
  background: "var(--omx-color-error, #ef4444)"
};
function ConfirmRemoveDialog({ t, count, busy, onCancel, onConfirm }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      style: backdrop,
      onMouseDown: (event) => {
        if (event.target === event.currentTarget && !busy) onCancel();
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "div",
        {
          role: "alertdialog",
          "aria-modal": "true",
          "aria-labelledby": "omnimux-inspiration-remove-title",
          style: dialog,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { id: "omnimux-inspiration-remove-title", style: heading, children: t("confirmRemove.title").replace("{n}", String(count)) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { style: hint, children: t("confirmRemove.description") }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: buttons, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "button",
                {
                  type: "button",
                  disabled: busy,
                  onClick: onCancel,
                  style: { ...ghostButton, cursor: busy ? "default" : "pointer" },
                  children: t("confirmRemove.cancel")
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "button",
                {
                  type: "button",
                  disabled: busy,
                  onClick: onConfirm,
                  style: { ...dangerButton, opacity: busy ? 0.6 : 1, cursor: busy ? "default" : "pointer" },
                  children: busy ? t("confirmRemove.deleting") : t("confirmRemove.confirm")
                }
              )
            ] })
          ]
        }
      )
    }
  );
}

// src/client/styles.js
var INSPIRATION_STYLES_ID = "omnimux-inspiration-styles";
var INSPIRATION_CSS = `
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
  padding: 16px 24px 32px 24px;
  gap: 20px;
  background: var(--omx-color-canvas, #0a0a0a);
  color: var(--omx-color-ink, #ffffff);
  font-family: var(--omx-font-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
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
  border-bottom: 1px solid var(--omx-color-hairline, #222222);
}

.omnimux-inspiration-tabs {
  display: inline-flex;
  background: var(--omx-color-canvas-soft, #141414);
  padding: 3px;
  border-radius: var(--omx-radius-pill, 9999px);
  border: 1px solid var(--omx-color-hairline, #242424);
}

.omnimux-inspiration-tab {
  height: 28px;
  padding: 0 14px;
  border-radius: var(--omx-radius-pill, 9999px);
  border: none;
  background: transparent;
  color: var(--omx-color-muted, #888888);
  font: var(--omx-text-label, 500 13px/16px var(--omx-font-sans));
  cursor: pointer;
  transition: color var(--omx-motion-fast, 120ms) ease,
              background var(--omx-motion-fast, 120ms) ease;
}

.omnimux-inspiration-tab:hover {
  color: var(--omx-color-ink-soft, #ebebeb);
}

.omnimux-inspiration-tab.active {
  background: var(--omx-color-canvas-raised, #242424);
  color: var(--omx-color-ink, #ffffff);
  box-shadow: 0 1px 3px rgba(0,0,0,0.4);
}

.omnimux-inspiration-btn-add {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 16px;
  border-radius: var(--omx-radius-pill, 9999px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: var(--dsw-alias-button-primary-fill, #ffffff);
  color: var(--dsw-alias-label-primary-foreground, #000000);
  font: var(--omx-text-label, 550 13px/16px var(--omx-font-sans));
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  transition: all var(--omx-motion-fast, 120ms) cubic-bezier(0.16, 1, 0.3, 1);
}
.omnimux-inspiration-btn-add:hover {
  background: #ebebeb;
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
}
.omnimux-inspiration-btn-add:active {
  transform: translateY(0);
}

/* \u6781\u7B80\u53D1\u4E1D\u7EBF\u5DE5\u5177\u680F */
.omnimux-inspiration-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  max-width: 100%;
  flex-wrap: wrap;
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
  color: var(--omx-color-muted, #7c7c7c);
  display: flex;
  align-items: center;
  justify-content: center;
}

.omnimux-inspiration-search {
  width: 100%;
  height: 32px;
  background: var(--omx-color-canvas-soft, #141414);
  border: 1px solid var(--omx-color-hairline, #242424);
  border-radius: var(--omx-radius-pill, 9999px);
  padding: 0 14px 0 34px;
  color: var(--omx-color-ink, #ffffff);
  font: var(--omx-text-body-sm, 400 13px/18px var(--omx-font-sans));
  outline: none;
  transition: border-color var(--omx-motion-fast, 120ms) ease,
              background-color var(--omx-motion-fast, 120ms) ease;
}
.omnimux-inspiration-search:focus {
  border-color: rgba(255, 255, 255, 0.4);
  background: var(--omx-color-canvas-raised, #1a1a1a);
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
  background: var(--omx-color-canvas-soft, #141414);
  border: 1px solid var(--omx-color-hairline, #242424);
  border-radius: var(--omx-radius-pill, 9999px);
  padding: 0 12px;
  color: var(--omx-color-ink-soft, #ebebeb);
  font: var(--omx-text-label, 500 12px/16px var(--omx-font-sans));
  cursor: pointer;
  outline: none;
  transition: border-color var(--omx-motion-fast, 120ms) ease,
              background-color var(--omx-motion-fast, 120ms) ease;
}
.omnimux-inspiration-select:hover {
  border-color: var(--omx-color-hairline-strong, #3d3d3d);
  background: var(--omx-color-canvas-raised, #1a1a1a);
}
.omnimux-inspiration-select:focus {
  border-color: rgba(255, 255, 255, 0.4);
}

.omnimux-inspiration-count {
  font: var(--omx-text-code, 400 12px/16px var(--omx-font-mono));
  color: var(--omx-color-muted, #7c7c7c);
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--omx-radius-pill, 9999px);
  padding: 4px 10px;
  white-space: nowrap;
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
  border-radius: var(--omx-radius-sm, 10px);
  background: var(--omx-color-canvas-soft, #141414);
  border: 1px solid var(--omx-color-hairline, #222222);
  overflow: hidden;
}
.omnimux-inspiration-skel::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.04) 50%, transparent 100%);
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
  background: var(--omx-color-canvas-raised, #181818);
  border: 1px solid var(--omx-color-hairline-strong, #333333);
  border-radius: var(--omx-radius-md, 12px);
  animation: omni-fade-in 140ms ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
}
.omnimux-inspiration-selection-count {
  font: var(--omx-text-label, 500 13px/18px var(--omx-font-sans));
  color: var(--omx-color-ink, #ffffff);
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
  color: var(--omx-color-muted, #8e8e8e);
  cursor: pointer;
  font: var(--omx-text-label, 500 13px/18px var(--omx-font-sans));
  padding: 4px 10px;
  border-radius: var(--omx-radius-pill, 9999px);
  transition: color var(--omx-motion-fast, 120ms) ease;
}
.omnimux-inspiration-btn-ghost:hover {
  color: var(--omx-color-ink, #ffffff);
  background: rgba(255, 255, 255, 0.06);
}
.omnimux-inspiration-btn-danger {
  border: none;
  background: var(--omx-color-error, #ef4444);
  color: #ffffff;
  border-radius: var(--omx-radius-pill, 9999px);
  padding: 5px 14px;
  cursor: pointer;
  font: var(--omx-text-label, 600 13px/18px var(--omx-font-sans));
  transition: all var(--omx-motion-fast, 120ms) ease;
}
.omnimux-inspiration-btn-danger:hover {
  background: #dc2626;
  transform: translateY(-1px);
}

.omnimux-inspiration-card-pure {
  position: relative;
  width: 100%;
  aspect-ratio: 9 / 16;
  border-radius: var(--omx-radius-sm, 10px);
  overflow: hidden;
  cursor: pointer;
  background: var(--omx-color-canvas-soft, #131313);
  border: 1px solid var(--omx-color-hairline, #242424);
  transition: transform var(--omx-motion-base, 180ms) cubic-bezier(.2,.4,.6,1),
              border-color var(--omx-motion-base, 180ms) cubic-bezier(.2,.4,.6,1),
              box-shadow var(--omx-motion-base, 180ms) ease;
}
.omnimux-inspiration-card-pure[aria-selected="true"] {
  border-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.7), 0 8px 24px rgba(0, 0, 0, 0.5);
}
.omnimux-inspiration-card-pure:hover {
  transform: translateY(-3px);
  border-color: var(--omx-color-hairline-strong, #4a4a4a);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
}

/* \u5361\u7247\u5DE6\u4E0A\u89D2\u590D\u9009\u6846 Checkbox */
.omnimux-inspiration-card-check {
  position: absolute;
  top: 8px;
  left: 8px;
  width: 22px;
  height: 22px;
  border-radius: 6px;
  border: 1.5px solid rgba(255, 255, 255, 0.4);
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 5;
  color: #000000;
  opacity: 0;
  transform: scale(0.9);
  transition: opacity var(--omx-motion-fast, 120ms) ease,
              transform var(--omx-motion-fast, 120ms) ease,
              background-color var(--omx-motion-fast, 120ms) ease,
              border-color var(--omx-motion-fast, 120ms) ease;
}
.omnimux-inspiration-card-pure:hover .omnimux-inspiration-card-check,
.omnimux-inspiration-card-check[data-selected="true"],
.omnimux-inspiration-grid.selecting .omnimux-inspiration-card-check {
  opacity: 1;
  transform: scale(1);
}
.omnimux-inspiration-card-check[data-selected="true"] {
  background: #ffffff;
  border-color: #ffffff;
}
.omnimux-inspiration-card-check:hover {
  border-color: rgba(255, 255, 255, 0.85);
  background: rgba(0, 0, 0, 0.7);
}
.omnimux-inspiration-card-check[data-selected="true"]:hover {
  background: #ebebeb;
  border-color: #ebebeb;
}
.omnimux-inspiration-cover-img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #181818;
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
  background: radial-gradient(circle at 50% 30%, #202020 0%, #111111 100%);
  padding: 16px;
  gap: 12px;
  text-align: center;
  color: var(--omx-color-muted, #7c7c7c);
}
.omnimux-inspiration-fallback-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--omx-color-hairline, #242424);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--omx-color-ink-soft, #ebebeb);
}
.omnimux-inspiration-fallback-title {
  font-size: 12px;
  line-height: 16px;
  color: var(--omx-color-muted, #888888);
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
  border-radius: var(--omx-radius-pill, 9999px);
  font-size: 11px;
  font-weight: 600;
  font-family: var(--omx-font-mono, monospace);
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #ffffff;
  letter-spacing: 0.5px;
}
.omnimux-inspiration-badge-platform.local {
  border-color: #10b981;
  color: #10b981;
  background: rgba(16, 185, 129, 0.2);
}

/* Hover \u6D6E\u5C42 */
.omnimux-inspiration-card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.75) 100%);
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 12px;
  transition: opacity var(--omx-motion-fast, 120ms) ease;
}
.omnimux-inspiration-card-pure:hover .omnimux-inspiration-card-overlay {
  opacity: 1;
}
.omnimux-inspiration-overlay-play {
  align-self: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--omx-color-primary, #ffffff);
  color: var(--omx-color-on-primary, #0a0a0a);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0.9);
  transition: transform var(--omx-motion-fast, 120ms) ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}
.omnimux-inspiration-card-pure:hover .omnimux-inspiration-overlay-play {
  transform: scale(1);
}
.omnimux-inspiration-overlay-play svg {
  width: 18px;
  height: 18px;
  margin-left: 2px;
}
.omnimux-inspiration-overlay-footer {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.85);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-shadow: 0 1px 2px rgba(0,0,0,0.8);
}

/* \u8BE6\u60C5\u5F39\u7A97 Modal */
.omnimux-inspiration-modal-backdrop {
  position: fixed;
  inset: 0;
  background: var(--omx-color-overlay, rgba(0,0,0,.70));
  backdrop-filter: blur(16px);
  z-index: var(--omx-z-modal, 200);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--omx-space-xl, 24px);
  animation: omni-fade-in var(--omx-motion-fast, 120ms) ease;
}
@keyframes omni-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
.omnimux-inspiration-modal-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1040px;
  animation: omni-fade-in var(--omx-motion-fast, 120ms) ease;
}
.omnimux-inspiration-modal-container {
  position: relative;
  display: flex;
  width: 100%;
  height: 85vh;
  max-height: 720px;
  border-radius: var(--omx-radius-lg, 16px);
  overflow: hidden;
  background: var(--omx-color-canvas-soft, #131313);
  border: 1px solid var(--omx-color-hairline, #242424);
  box-shadow: var(--omx-shadow-overlay, 0 12px 36px rgba(0,0,0,.60));
}
.omnimux-inspiration-modal-close {
  position: absolute;
  top: -10px;
  right: -48px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.22);
  background: rgba(24, 24, 24, 0.88);
  backdrop-filter: blur(12px);
  color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.55);
  transition: all var(--omx-motion-fast, 120ms) ease;
}
.omnimux-inspiration-modal-close:hover {
  border-color: rgba(255, 255, 255, 0.45);
  background: rgba(45, 45, 45, 0.95);
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
  background: #000000;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

/* \u5DE6\u4FA7\u9876\u90E8\u6A21\u5F0F\u5207\u6362\u5F00\u5173 Segmented Controls */
.omnimux-inspiration-preview-switch {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: rgba(18, 18, 18, 0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--omx-color-hairline, #242424);
  z-index: 10;
}
.omnimux-inspiration-switch-group {
  display: inline-flex;
  background: #0a0a0a;
  padding: 3px;
  border-radius: var(--omx-radius-pill, 9999px);
  border: 1px solid var(--omx-color-hairline, #242424);
}
.omnimux-inspiration-switch-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 26px;
  padding: 0 12px;
  border-radius: var(--omx-radius-pill, 9999px);
  border: none;
  background: transparent;
  color: var(--omx-color-muted, #7c7c7c);
  font: var(--omx-text-label, 500 12px/14px var(--omx-font-sans));
  cursor: pointer;
  transition: all var(--omx-motion-fast, 120ms) ease;
}
.omnimux-inspiration-switch-btn.active {
  background: var(--omx-color-canvas-raised, #242424);
  color: var(--omx-color-ink, #ffffff);
  box-shadow: 0 1px 3px rgba(0,0,0,0.5);
}
.omnimux-inspiration-status-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  border-radius: var(--omx-radius-pill, 9999px);
  font-size: 11px;
  font-family: var(--omx-font-mono, monospace);
  font-weight: 500;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--omx-color-ink-soft, #ebebeb);
}
.omnimux-inspiration-status-badge.done {
  border-color: rgba(16, 185, 129, 0.4);
  background: rgba(16, 185, 129, 0.12);
  color: #10b981;
}
.omnimux-inspiration-status-badge.pending {
  border-color: rgba(245, 158, 11, 0.4);
  background: rgba(245, 158, 11, 0.12);
  color: #f59e0b;
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
  padding: var(--omx-space-md, 12px);
}
.omnimux-inspiration-modal-player-box {
  position: relative;
  width: 100%;
  max-width: 320px;
  height: 100%;
  aspect-ratio: 9 / 16;
  border-radius: var(--omx-radius-sm, 8px);
  overflow: hidden;
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.omnimux-inspiration-player-frame {
  width: 100%;
  height: 100%;
  border: none;
  background: #000000;
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
  background: #0d0d0d;
  overflow: hidden;
}
.omnimux-inspiration-dim-tabs {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 16px;
  overflow-x: auto;
  border-bottom: 1px solid var(--omx-color-hairline, #222222);
  background: #111111;
}
.omnimux-inspiration-dim-tabs::-webkit-scrollbar {
  height: 3px;
}
.omnimux-inspiration-dim-tab {
  white-space: nowrap;
  padding: 5px 10px;
  border-radius: var(--omx-radius-pill, 9999px);
  border: 1px solid var(--omx-color-hairline, #242424);
  background: #161616;
  color: var(--omx-color-muted, #888888);
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--omx-motion-fast, 120ms) ease;
}
.omnimux-inspiration-dim-tab:hover {
  color: #ffffff;
  border-color: #383838;
}
.omnimux-inspiration-dim-tab.active {
  background: #282828;
  border-color: #555555;
  color: #ffffff;
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
  border-radius: var(--omx-radius-sm, 10px);
  background: #141414;
  border: 1px solid var(--omx-color-hairline, #242424);
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
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 6px;
}
.omnimux-inspiration-dim-body {
  font-size: 13px;
  line-height: 1.6;
  color: var(--omx-color-ink-soft, #d1d1d1);
  white-space: pre-wrap;
  word-break: break-word;
}
.omnimux-inspiration-dim-code {
  font-family: var(--omx-font-mono, monospace);
  font-size: 12px;
  line-height: 1.5;
  background: #0a0a0a;
  border: 1px solid #222222;
  border-radius: 6px;
  padding: 12px;
  color: #a3e635;
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
  border-radius: var(--omx-radius-pill, 9999px);
  background: #ffffff;
  color: #0a0a0a;
  border: none;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(255,255,255,0.18);
  transition: all 120ms ease;
}
.omnimux-inspiration-trigger-btn:hover:not(:disabled) {
  transform: translateY(-1px);
  background: #eaeaea;
}
.omnimux-inspiration-trigger-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* \u5F39\u7A97\u53F3\u5217\uFF1A\u6781\u7B80\u53D1\u4E1D\u7EBF\u8BE6\u60C5\u4FE1\u606F\u533A (\u6807\u9898\u4E0E\u63CF\u8FF0\u5728\u4E0B\u65B9) */
.omnimux-inspiration-modal-right {
  flex: 0 0 380px;
  width: 380px;
  background: var(--omx-color-canvas, #0a0a0a);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 20px 24px;
  gap: 16px;
  border-left: 1px solid var(--omx-color-hairline, #242424);
}

/* \u521B\u4F5C\u8005\u4FE1\u606F\u4E0E\u5E73\u53F0 Badge */
.omnimux-inspiration-creator-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--omx-color-hairline, #202020);
}
.omnimux-inspiration-creator-left {
  display: flex;
  align-items: center;
  gap: 10px;
}
.omnimux-inspiration-modal-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--omx-color-canvas-raised, #1c1c1c);
  border: 1px solid var(--omx-color-hairline, #2a2a2a);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--omx-font-mono, monospace);
  font-size: 13px;
  font-weight: 600;
  color: var(--omx-color-ink, #ffffff);
}
.omnimux-inspiration-modal-handle {
  font-size: 13px;
  font-weight: 600;
  color: #ffffff;
}

.omnimux-inspiration-modal-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 500;
  color: var(--omx-color-ink-soft, #d1d1d1);
  text-decoration: none;
  padding: 4px 10px;
  border-radius: var(--omx-radius-pill, 9999px);
  border: 1px solid var(--omx-color-hairline, #262626);
  background: var(--omx-color-canvas-soft, #141414);
  transition: all var(--omx-motion-fast, 120ms) ease;
}
.omnimux-inspiration-modal-link:hover {
  border-color: #444444;
  color: #ffffff;
}

/* \u6807\u7B7E Tags */
.omnimux-inspiration-modal-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.omnimux-inspiration-modal-tag {
  padding: 2px 8px;
  border-radius: var(--omx-radius-pill, 9999px);
  font-family: var(--omx-font-mono, monospace);
  font-size: 11px;
  border: 1px solid var(--omx-color-hairline, #242424);
  background: var(--omx-color-canvas-soft, #141414);
  color: var(--omx-color-muted, #888888);
}

/* \u89C6\u9891\u4E92\u52A8\u6570\u636E Stats \u77E9\u9635 */
.omnimux-inspiration-stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 12px;
  border-radius: 8px;
  background: #111111;
  border: 1px solid #222222;
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
  color: var(--omx-color-muted, #7c7c7c);
  font-family: var(--omx-font-mono, monospace);
}
.omnimux-inspiration-stat-val {
  font-size: 13px;
  font-weight: 600;
  color: #ffffff;
}

/* \u6807\u9898\u548C\u539F\u8D34\u63CF\u8FF0\u533A\u5757\uFF08\u7F6E\u4E8E\u4E0B\u65B9\uFF09 */
.omnimux-inspiration-caption-block {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 14px;
  border-radius: var(--omx-radius-sm, 8px);
  background: var(--omx-color-canvas-soft, #131313);
  border: 1px solid var(--omx-color-hairline, #242424);
}
.omnimux-inspiration-caption-label {
  font-size: 11px;
  font-family: var(--omx-font-mono, monospace);
  color: var(--omx-color-muted, #7c7c7c);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.omnimux-inspiration-caption-text {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: var(--omx-color-ink-soft, #ebebeb);
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
  border-radius: var(--omx-radius-lg, 16px);
  background: var(--omx-color-canvas-soft, #131313);
  border: 1px solid var(--omx-color-hairline, #242424);
  box-shadow: var(--omx-shadow-overlay, 0 8px 24px rgba(0,0,0,.48));
  overflow: hidden;
}
.omnimux-inspiration-import-header {
  padding: 16px 20px;
  border-bottom: 1px solid var(--omx-color-hairline, #242424);
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
  border-top: 1px solid var(--omx-color-hairline, #242424);
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
  gap: var(--omx-space-sm, 8px);
  min-height: 240px;
  text-align: center;
  padding: var(--omx-space-xl, 24px);
}
.omnimux-inspiration-empty-title {
  margin: 0;
  font: var(--omx-text-title-sm, 600 18px/28px var(--omx-font-sans));
  color: var(--omx-color-ink, #ffffff);
}
.omnimux-inspiration-empty-text {
  margin: 0;
  font: var(--omx-text-body-sm, 400 14px/20px var(--omx-font-sans));
  color: var(--omx-color-muted, #7c7c7c);
}
.omnimux-inspiration-btn {
  height: 34px;
  padding: 0 var(--omx-space-lg, 16px);
  border: none;
  border-radius: var(--omx-radius-pill, 9999px);
  background: var(--omx-color-primary, #ffffff);
  color: var(--omx-color-on-primary, #0a0a0a);
  font: var(--omx-text-label, 500 13px/16px var(--omx-font-sans));
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
  color: var(--omx-color-muted, #7c7c7c);
}
.omnimux-inspiration-spinner {
  width: 14px;
  height: 14px;
  border: 2px solid rgba(255,255,255,0.15);
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: omni-spin 0.6s linear infinite;
}
@keyframes omni-spin {
  to { transform: rotate(360deg); }
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

// src/client/InspirationSection.jsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function LoginGate({ t }) {
  const login = () => {
    const gate = typeof window !== "undefined" ? window.__omnimuxAuth : void 0;
    if (gate && typeof gate.ensureLogin === "function") gate.ensureLogin({});
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-inspiration-gate", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", { className: "omnimux-inspiration-empty-title", children: t("needLogin") }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "omnimux-inspiration-empty-text", children: t("needLoginHint") }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: "omnimux-inspiration-btn", onClick: login, children: t("login") })
  ] });
}
function PureCoverCard({ row, t, onSelect, selected, onToggleSelect, selecting }) {
  const title = String(row.title || row.source_url || row.id);
  const cover = pickCoverSrc(row);
  const [broken, setBroken] = (0, import_react.useState)(!cover);
  (0, import_react.useEffect)(() => {
    setBroken(!cover);
  }, [cover]);
  const platform = (row.source_platform || (row.is_local ? "local" : "tiktok")).toUpperCase();
  const isLocal = Boolean(row.is_local);
  const handleClick = (e) => {
    if (selecting && isLocal && onToggleSelect) {
      onToggleSelect(row);
      return;
    }
    onSelect(row);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
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
        isLocal && onToggleSelect ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "button",
          {
            type: "button",
            className: "omnimux-inspiration-card-check",
            "data-selected": selected ? "true" : "false",
            "aria-label": t("select.toggle"),
            "aria-pressed": selected ? "true" : "false",
            onClick: (e) => {
              e.stopPropagation();
              onToggleSelect(row);
            },
            children: selected ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3.2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("polyline", { points: "20 6 9 17 4 12" }) }) : null
          }
        ) : null,
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: `omnimux-inspiration-badge-platform ${isLocal ? "local" : ""}`, children: isLocal ? "\u672C\u5730" : platform }),
        broken ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-inspiration-cover-fallback", "aria-hidden": "true", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "omnimux-inspiration-fallback-icon", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("polygon", { points: "5 3 19 12 5 21 5 3" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "omnimux-inspiration-fallback-title", children: title.replace(/^https?:\/\/(www\.)?/, "") })
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-inspiration-card-overlay", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "omnimux-inspiration-overlay-play", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M8 5v14l11-7z" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "omnimux-inspiration-overlay-footer", children: title.length > 32 ? `${title.slice(0, 32)}\u2026` : title })
        ] })
      ]
    }
  );
}
function InspirationModal({ row, t, onClose, onItemUpdated }) {
  if (!row) return null;
  const [item, setItem] = (0, import_react.useState)(row);
  const [viewMode, setViewMode] = (0, import_react.useState)("player");
  const [analyzing, setAnalyzing] = (0, import_react.useState)(false);
  const [analyzeError, setAnalyzeError] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    setItem(row);
  }, [row]);
  const title = String(item.title || "\u7075\u611F\u8BE6\u60C5");
  const analysis = item.analysis && typeof item.analysis === "object" ? item.analysis : item.deconstruction || {};
  const rawEmbed = analysis.embed_player_url || item.source_url;
  const embedUrl = resolveTikTokEmbedUrl(rawEmbed) || (item.source_url ? resolveTikTokEmbedUrl(item.source_url) : null);
  const cover = pickCoverSrc(item);
  const tags = Array.isArray(item.tags) ? item.tags : [];
  const creator = analysis.creator || item.author || { name: "Creator", handle: item.source_platform || "social" };
  const localVideoUrl = item.local_paths?.video ? `/omnimux/inspiration/local/media/${encodeURIComponent(item.id)}/video.mp4` : null;
  const hook = analysis.hook_highlight || analysis.hook || analysis["3s_hook"] || "";
  const targetGoal = analysis.target_goal || analysis.goal || "";
  const narrative = analysis.narrative_strategy || analysis.narrative || "";
  const breakdown = analysis.visual_breakdown || analysis.breakdown || analysis.content_breakdown || "";
  const replication = analysis.replication_action || analysis.replication_guide || "";
  const rawMarkdown = analysis.markdown || analysis.raw_markdown || (typeof item.deconstruction === "string" ? item.deconstruction : "");
  const hasDeconstruction = Boolean(hook || targetGoal || narrative || breakdown || replication || rawMarkdown);
  (0, import_react.useEffect)(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);
  const handleTriggerAnalyze = async () => {
    if (analyzing || !item.id) return;
    setAnalyzing(true);
    setAnalyzeError(null);
    try {
      const res = await triggerAnalyzeInspiration(item.id);
      if (res.ok && res.body?.data) {
        setItem(res.body.data);
        if (onItemUpdated) onItemUpdated(res.body.data);
        setViewMode("deconstruct");
      } else {
        setAnalyzeError(res.body?.error || "\u89E3\u6790\u670D\u52A1\u6682\u65F6\u4E0D\u53EF\u7528");
      }
    } catch (err) {
      setAnalyzeError(String(err.message || err));
    } finally {
      setAnalyzing(false);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "omnimux-inspiration-modal-backdrop", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-inspiration-modal-wrapper", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { className: "omnimux-inspiration-modal-close", onClick: onClose, "aria-label": "Close", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M18 6L6 18M6 6l12 12" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-inspiration-modal-container", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-inspiration-modal-left", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-inspiration-preview-switch", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-inspiration-switch-group", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
              "button",
              {
                type: "button",
                className: `omnimux-inspiration-switch-btn ${viewMode === "player" ? "active" : ""}`,
                onClick: () => setViewMode("player"),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("polygon", { points: "5 3 19 12 5 21 5 3" }) }),
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: t("view.player") })
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
              "button",
              {
                type: "button",
                className: `omnimux-inspiration-switch-btn ${viewMode === "deconstruct" ? "active" : ""}`,
                onClick: () => setViewMode("deconstruct"),
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("polygon", { points: "12 2 2 7 12 12 22 7 12 2" }),
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("polyline", { points: "2 17 12 22 22 17" }),
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("polyline", { points: "2 12 12 17 22 12" })
                  ] }),
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: t("view.deconstruct") })
                ]
              }
            )
          ] }),
          hasDeconstruction ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "omnimux-inspiration-status-badge done", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { width: "10", height: "10", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("polyline", { points: "20 6 9 17 4 12" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: t("status.breakdownReady") })
          ] }) : analyzing ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "omnimux-inspiration-status-badge pending", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "omnimux-inspiration-spinner", style: { width: "10px", height: "10px" } }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: t("status.breakdownGenerating") })
          ] }) : null
        ] }),
        viewMode === "player" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "omnimux-inspiration-preview-player", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "omnimux-inspiration-modal-player-box", children: embedUrl ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "iframe",
          {
            title,
            src: embedUrl,
            className: "omnimux-inspiration-player-frame",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
            allowFullScreen: true
          }
        ) : localVideoUrl ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "video",
          {
            src: localVideoUrl,
            controls: true,
            autoPlay: true,
            className: "omnimux-inspiration-player-frame"
          }
        ) : cover ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("img", { src: cover, alt: title, className: "omnimux-inspiration-modal-cover-bg" }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "omnimux-inspiration-cover-fallback", children: coverGlyph(title) }) }) }) : null,
        viewMode === "deconstruct" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "omnimux-inspiration-deconstruct-view", children: hasDeconstruction ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-inspiration-dim-content", children: [
          hook ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-inspiration-dim-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "omnimux-inspiration-dim-header", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { className: "omnimux-inspiration-dim-title", children: t("dim.title.hook") }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "omnimux-inspiration-dim-body", children: hook })
          ] }) : null,
          targetGoal ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-inspiration-dim-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "omnimux-inspiration-dim-header", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { className: "omnimux-inspiration-dim-title", children: t("dim.title.goal") }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "omnimux-inspiration-dim-body", children: targetGoal })
          ] }) : null,
          narrative ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-inspiration-dim-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "omnimux-inspiration-dim-header", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { className: "omnimux-inspiration-dim-title", children: t("dim.title.narrative") }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "omnimux-inspiration-dim-body", children: narrative })
          ] }) : null,
          breakdown ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-inspiration-dim-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "omnimux-inspiration-dim-header", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { className: "omnimux-inspiration-dim-title", children: t("dim.title.visual") }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "omnimux-inspiration-dim-body", children: breakdown })
          ] }) : null,
          replication ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-inspiration-dim-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "omnimux-inspiration-dim-header", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { className: "omnimux-inspiration-dim-title", children: t("dim.title.replication") }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "omnimux-inspiration-dim-body", children: replication })
          ] }) : null,
          rawMarkdown && !hook && !targetGoal && !narrative && !breakdown && !replication ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-inspiration-dim-card", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "omnimux-inspiration-dim-header", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { className: "omnimux-inspiration-dim-title", children: t("dim.title.raw") }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("pre", { className: "omnimux-inspiration-dim-code", children: rawMarkdown })
          ] }) : null
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-inspiration-deconstruct-empty", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "omnimux-inspiration-fallback-icon", style: { width: "56px", height: "56px" }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("polygon", { points: "12 2 2 7 12 12 22 7 12 2" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("polyline", { points: "2 17 12 22 22 17" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("polyline", { points: "2 12 12 17 22 12" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { style: { margin: "0 0 6px 0", fontSize: "15px", color: "#ffffff" }, children: analyzing ? t("empty.breakdownAnalyzing") : t("empty.breakdownTitle") }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { style: { margin: 0, fontSize: "12px", color: "var(--omx-color-muted, #7c7c7c)" }, children: t("empty.breakdownDesc") })
          ] }),
          analyzeError ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { color: "#ef4444", fontSize: "12px" }, children: analyzeError }) : null,
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "button",
            {
              type: "button",
              className: "omnimux-inspiration-trigger-btn",
              onClick: handleTriggerAnalyze,
              disabled: analyzing,
              children: analyzing ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "omnimux-inspiration-spinner", style: { width: "12px", height: "12px", borderTopColor: "#000" } }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: "\u6B63\u5728\u89E3\u6790\u2026" })
              ] }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" }) }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: "\u7ACB\u5373\u89E3\u6790" })
              ] })
            }
          )
        ] }) }) : null
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-inspiration-modal-right", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-inspiration-creator-card", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-inspiration-creator-left", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "omnimux-inspiration-modal-avatar", children: (creator.name || creator.handle || "U").slice(0, 1).toUpperCase() }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "omnimux-inspiration-modal-handle", children: creator.name || creator.handle || "Creator" }),
              creator.handle ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { fontSize: "11px", color: "var(--omx-color-muted, #7c7c7c)" }, children: [
                "@",
                creator.handle
              ] }) : null
            ] })
          ] }),
          item.source_url ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
            "a",
            {
              href: item.source_url,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "omnimux-inspiration-modal-link",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: t("openSource") }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { width: "11", height: "11", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" }) })
              ]
            }
          ) : null
        ] }),
        item.stats && Object.keys(item.stats).length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-inspiration-stats-grid", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-inspiration-stat-item", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "omnimux-inspiration-stat-label", children: "\u70B9\u8D5E" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "omnimux-inspiration-stat-val", children: item.stats.likes ?? item.stats.digg_count ?? "-" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-inspiration-stat-item", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "omnimux-inspiration-stat-label", children: "\u8BC4\u8BBA" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "omnimux-inspiration-stat-val", children: item.stats.comments ?? item.stats.comment_count ?? "-" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-inspiration-stat-item", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "omnimux-inspiration-stat-label", children: "\u5206\u4EAB" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "omnimux-inspiration-stat-val", children: item.stats.shares ?? item.stats.share_count ?? "-" })
          ] })
        ] }) : null,
        tags.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "omnimux-inspiration-modal-tags", children: tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "omnimux-inspiration-modal-tag", children: [
          "#",
          tag
        ] }, tag)) }) : null
      ] })
    ] })
  ] }) });
}
function ImportDialog({ open, t, onClose, onImported }) {
  const [url, setUrl] = (0, import_react.useState)("");
  const [tags, setTags] = (0, import_react.useState)("");
  const [autoAnalyze, setAutoAnalyze] = (0, import_react.useState)(true);
  const [loading, setLoading] = (0, import_react.useState)(false);
  const [error, setError] = (0, import_react.useState)(null);
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "omnimux-inspiration-modal-backdrop", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-inspiration-import-modal", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-inspiration-import-header", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", { children: t("add.dialogTitle") }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: "omnimux-inspiration-modal-close", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M18 6L6 18M6 6l12 12" }) }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-inspiration-import-body", children: [
        error ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { color: "#ef4444", fontSize: "13px" }, children: error }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("label", { style: { display: "block", fontSize: "13px", marginBottom: "6px", color: "var(--omx-color-muted, #7c7c7c)" }, children: t("add.urlLabel") }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "input",
            {
              type: "url",
              required: true,
              className: "omnimux-inspiration-search",
              style: { width: "100%" },
              placeholder: t("add.urlPlaceholder"),
              value: url,
              onChange: (e) => setUrl(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("label", { style: { display: "block", fontSize: "13px", marginBottom: "6px", color: "var(--omx-color-muted, #7c7c7c)" }, children: t("add.tagsLabel") }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "input",
            {
              type: "text",
              className: "omnimux-inspiration-search",
              style: { width: "100%" },
              placeholder: t("add.tagsPlaceholder"),
              value: tags,
              onChange: (e) => setTags(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { style: { display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", cursor: "pointer" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "input",
            {
              type: "checkbox",
              checked: autoAnalyze,
              onChange: (e) => setAutoAnalyze(e.target.checked)
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: t("add.autoAnalyze") })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-inspiration-import-footer", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: "omnimux-inspiration-select", onClick: onClose, disabled: loading, children: t("close") }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "submit", className: "omnimux-inspiration-btn", disabled: loading, children: loading ? t("add.importing") : t("add.submit") })
      ] })
    ] })
  ] }) });
}
function EmptyState({ t, onOpenAdd }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-inspiration-empty", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", { className: "omnimux-inspiration-empty-title", children: t("empty.title") }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "omnimux-inspiration-empty-text", children: t("empty.description") }),
    onOpenAdd ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: "omnimux-inspiration-btn", onClick: onOpenAdd, style: { marginTop: "12px" }, children: t("add.btn") }) : null
  ] });
}
function InspirationSection({ t, active }) {
  const [tab, setTab] = (0, import_react.useState)("all");
  const [q, setQ] = (0, import_react.useState)("");
  const [type, setType] = (0, import_react.useState)("");
  const [sort, setSort] = (0, import_react.useState)("hot");
  const [favorite, setFavorite] = (0, import_react.useState)("0");
  const [items, setItems] = (0, import_react.useState)([]);
  const [page, setPage] = (0, import_react.useState)(1);
  const [hasMore, setHasMore] = (0, import_react.useState)(false);
  const [loading, setLoading] = (0, import_react.useState)(true);
  const [loadingMore, setLoadingMore] = (0, import_react.useState)(false);
  const [phase, setPhase] = (0, import_react.useState)("loading");
  const [error, setError] = (0, import_react.useState)(null);
  const [selectedItem, setSelectedItem] = (0, import_react.useState)(null);
  const [importOpen, setImportOpen] = (0, import_react.useState)(false);
  const [selectedIds, setSelectedIds] = (0, import_react.useState)(() => /* @__PURE__ */ new Set());
  const [pendingRemove, setPendingRemove] = (0, import_react.useState)(null);
  const [removing, setRemoving] = (0, import_react.useState)(false);
  const sentinelRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    injectInspirationStyles();
  }, []);
  const selectedCount = selectedIds.size;
  const selecting = selectedCount > 0;
  const toggleSelect = (0, import_react.useCallback)((row) => {
    if (!row.is_local) return;
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(row.id)) next.delete(row.id);
      else next.add(row.id);
      return next;
    });
  }, []);
  const selectAllLocal = (0, import_react.useCallback)(() => {
    const localIds = items.filter((it) => it.is_local).map((it) => it.id);
    setSelectedIds(new Set(localIds));
  }, [items]);
  const clearSelection = (0, import_react.useCallback)(() => {
    setSelectedIds(/* @__PURE__ */ new Set());
  }, []);
  const handleConfirmBatchRemove = async () => {
    if (!pendingRemove || !pendingRemove.ids.length) return;
    setRemoving(true);
    try {
      await batchDeleteLocalInspirations(pendingRemove.ids);
      const removedSet = new Set(pendingRemove.ids);
      setItems((prev) => prev.filter((it) => !removedSet.has(it.id)));
      setSelectedIds((prev) => {
        const next = new Set(prev);
        for (const id of removedSet) next.delete(id);
        return next;
      });
      if (selectedItem && removedSet.has(selectedItem.id)) {
        setSelectedItem(null);
      }
      setPendingRemove(null);
    } catch (err) {
      console.error("Failed to delete local inspirations:", err);
    } finally {
      setRemoving(false);
    }
  };
  const loadData = (0, import_react.useCallback)(async (isNextPage = false) => {
    const targetPage = isNextPage ? page + 1 : 1;
    const cacheKey = `insp:${tab}:${q}:${type}:${sort}:${favorite}`;
    if (!isNextPage) {
      const cached = getInspirationCache(cacheKey);
      if (cached) {
        setItems(cached.data.items);
        setHasMore(cached.data.hasMore);
        setPhase(cached.data.phase);
        setLoading(false);
        if (!cached.isStale) return;
      } else {
        setLoading(true);
      }
    } else {
      setLoadingMore(true);
    }
    try {
      const result = await loadInspirationsAtomic({
        tab,
        q,
        type,
        sort,
        favorite,
        page: targetPage,
        pageSize: 20
      });
      if (isNextPage) {
        setItems((prev) => [...prev, ...result.items]);
        setPage(targetPage);
        setHasMore(result.hasMore);
      } else {
        setItems(result.items);
        setPage(1);
        setHasMore(result.hasMore);
        setPhase(result.phase);
        setInspirationCache(cacheKey, result);
      }
      setError(null);
    } catch (err) {
      setError(String(err.message || err));
      if (!isNextPage && items.length === 0) setPhase("ready");
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, [tab, q, type, sort, favorite, page, items.length]);
  (0, import_react.useEffect)(() => {
    if (!active) return;
    loadData(false);
  }, [active, tab, q, type, sort, favorite]);
  (0, import_react.useEffect)(() => {
    return whenAuthReady(() => {
      loadData(false);
    });
  }, []);
  (0, import_react.useEffect)(() => {
    if (!sentinelRef.current || !hasMore || loading || loadingMore) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore && !loading && !loadingMore) {
        loadData(true);
      }
    }, { rootMargin: "200px" });
    observer.observe(sentinelRef.current);
    return () => observer.disconnect();
  }, [hasMore, loading, loadingMore, loadData]);
  const handleImportSuccess = (newItem) => {
    setItems((prev) => [newItem, ...prev]);
    setSelectedItem(newItem);
  };
  const handleItemUpdated = (updatedItem) => {
    setItems((prev) => prev.map((it) => it.id === updatedItem.id ? updatedItem : it));
    setSelectedItem(updatedItem);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-inspiration-root", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-inspiration-header", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-inspiration-tabs", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "button",
          {
            type: "button",
            className: `omnimux-inspiration-tab ${tab === "all" ? "active" : ""}`,
            onClick: () => setTab("all"),
            children: t("tab.all")
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "button",
          {
            type: "button",
            className: `omnimux-inspiration-tab ${tab === "local" ? "active" : ""}`,
            onClick: () => setTab("local"),
            children: t("tab.local")
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "button",
          {
            type: "button",
            className: `omnimux-inspiration-tab ${tab === "public" ? "active" : ""}`,
            onClick: () => setTab("public"),
            children: t("tab.public")
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        "button",
        {
          type: "button",
          className: "omnimux-inspiration-btn-add",
          onClick: () => setImportOpen(true),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M12 5v14M5 12h14" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: t("add.btn") })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-inspiration-toolbar", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-inspiration-search-box", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "omnimux-inspiration-search-icon", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("circle", { cx: "11", cy: "11", r: "8" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "input",
          {
            type: "search",
            className: "omnimux-inspiration-search",
            placeholder: t("filter.search"),
            value: q,
            onChange: (e) => setQ(e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-inspiration-filters", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
          "select",
          {
            className: "omnimux-inspiration-select",
            value: type,
            onChange: (e) => setType(e.target.value),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("option", { value: "", children: [
                t("filter.type"),
                " (",
                t("filter.all"),
                ")"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: "video", children: t("type.video") }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: "image", children: t("type.image") }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: "link", children: t("type.link") })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
          "select",
          {
            className: "omnimux-inspiration-select",
            value: sort,
            onChange: (e) => setSort(e.target.value),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: "hot", children: t("sort.hot") }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: "new", children: t("sort.new") }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: "fav", children: t("sort.fav") })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
          "select",
          {
            className: "omnimux-inspiration-select",
            value: favorite,
            onChange: (e) => setFavorite(e.target.value),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: "0", children: t("favorite.off") }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: "1", children: t("favorite.on") })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "omnimux-inspiration-count", children: t("count", { n: items.length }) })
      ] })
    ] }),
    selecting ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-inspiration-selection-bar", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "omnimux-inspiration-selection-count", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: t("select.count").replace("{n}", String(selectedCount)) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-inspiration-selection-actions", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "button",
          {
            type: "button",
            className: "omnimux-inspiration-btn-ghost",
            onClick: selectAllLocal,
            children: t("select.selectAll")
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "button",
          {
            type: "button",
            className: "omnimux-inspiration-btn-ghost",
            onClick: clearSelection,
            children: t("select.clear")
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "button",
          {
            type: "button",
            disabled: removing,
            className: "omnimux-inspiration-btn-danger",
            onClick: () => setPendingRemove({ ids: [...selectedIds], count: selectedCount }),
            children: t("select.delete").replace("{n}", String(selectedCount))
          }
        )
      ] })
    ] }) : null,
    loading && items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "omnimux-inspiration-skeleton", children: Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "omnimux-inspiration-skel" }, i)) }) : null,
    phase === "need-login" && tab === "public" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(LoginGate, { t }) : null,
    phase === "ready" && error && items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "omnimux-inspiration-error", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "omnimux-inspiration-empty-text", children: error === "disabled" ? t("error.disabled") : error || t("error.generic") }) }) : null,
    !loading && items.length === 0 && (!error || tab === "local") ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(EmptyState, { t, onOpenAdd: () => setImportOpen(true) }) : null,
    items.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: `omnimux-inspiration-grid ${selecting ? "selecting" : ""}`, children: items.map((row) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      PureCoverCard,
      {
        row,
        t,
        selected: selectedIds.has(row.id),
        selecting,
        onToggleSelect: toggleSelect,
        onSelect: (item) => setSelectedItem(item)
      },
      String(row.id)
    )) }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { ref: sentinelRef }),
    loadingMore ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-inspiration-scroll-loader", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "omnimux-inspiration-spinner" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: "\u6B63\u5728\u52A0\u8F7D\u66F4\u591A\u7075\u611F\u2026" })
    ] }) : null,
    selectedItem ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      InspirationModal,
      {
        row: selectedItem,
        t,
        onClose: () => setSelectedItem(null),
        onItemUpdated: handleItemUpdated
      }
    ) : null,
    pendingRemove ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      ConfirmRemoveDialog,
      {
        t,
        count: pendingRemove.count,
        busy: removing,
        onCancel: () => setPendingRemove(null),
        onConfirm: handleConfirmBatchRemove
      }
    ) : null,
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      ImportDialog,
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
var import_jsx_runtime3 = require("react/jsx-runtime");
function InspirationStage({ t, stage }) {
  const open = (0, import_react2.useSyncExternalStore)(
    stage ? stage.subscribe : () => () => {
    },
    stage ? stage.getSnapshot : () => false
  );
  const [everOpened, setEverOpened] = (0, import_react2.useState)(false);
  const [box, setBox] = (0, import_react2.useState)(() => stage ? stage.readBox() : { top: 0, left: 0, width: 0, height: 0 });
  if (open && !everOpened) setEverOpened(true);
  (0, import_react2.useLayoutEffect)(() => {
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
  if (!stage || !everOpened) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "div",
    {
      role: "region",
      "aria-label": t("title"),
      "aria-hidden": open ? void 0 : "true",
      style: {
        position: "fixed",
        top: box.top,
        left: box.left,
        width: box.width,
        height: box.height,
        zIndex: 200,
        pointerEvents: open ? "auto" : "none",
        display: open ? "flex" : "none",
        flexDirection: "column",
        background: "var(--dsw-alias-bg-primary, var(--dsw-bg, #111))",
        color: "var(--dsw-alias-label-primary, inherit)",
        overflow: "hidden",
        boxSizing: "border-box"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
          "div",
          {
            style: {
              flex: "none",
              display: "flex",
              alignItems: "center",
              gap: 12,
              minHeight: 32,
              padding: "12px 24px",
              boxSizing: "border-box",
              WebkitAppRegion: "no-drag"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "h1",
                {
                  style: {
                    margin: 0,
                    flex: 1,
                    minWidth: 0,
                    fontSize: 16,
                    fontWeight: 600,
                    lineHeight: "32px"
                  },
                  children: t("title")
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "button",
                {
                  type: "button",
                  "aria-label": t("close"),
                  onClick: () => {
                    stage.set(false);
                  },
                  style: {
                    WebkitAppRegion: "no-drag",
                    border: "none",
                    background: "transparent",
                    color: "inherit",
                    cursor: "pointer",
                    fontSize: 20,
                    lineHeight: 1,
                    padding: 4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 28,
                    height: 28,
                    borderRadius: 6
                  },
                  children: "\xD7"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: { flex: 1, minHeight: 0, display: "flex", flexDirection: "column", overflow: "hidden", boxSizing: "border-box" }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(InspirationSection, { t, active: open }) })
      ]
    }
  );
}

// src/client/index.js
var name = "omnimux-inspiration";
var inject = ["slots", "locale"];
function apply(ctx) {
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), "omnimux-inspiration: dictionaries");
  const t = ctx.locale.bind(NS);
  const stage = createStageStore(() => window.__omnimuxStage);
  const stageFace = () => ({ t, stage });
  ctx.effect(() => mountSidebarEntry(stage, t, ctx.locale), "omnimux-inspiration: sidebar entry");
  ctx.slots.inject("shell.overlay", () => ctx.slots.register({
    name: "shell.overlay",
    id: "omnimux-inspiration-stage",
    order: 27,
    locale: NS,
    inject: stageFace
  }, InspirationStage));
}

    return module.exports;
  }
});
