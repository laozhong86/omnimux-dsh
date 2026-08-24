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
  "title": "\u7075\u611F\u5E93",
  "close": "\u5173\u95ED",
  "loading": "\u6B63\u5728\u8BFB\u53D6\u7075\u611F\u2026",
  "needLogin": "\u67E5\u770B\u7075\u611F\u5E93\u9700\u8981\u767B\u5F55 OmniMux\u3002",
  "needLoginHint": "\u53EF\u5728 \u8BBE\u7F6E \u2192 \u4E2A\u4EBA\u8D44\u6599 \u4E2D\u767B\u5F55 OmniMux\u3002",
  "login": "\u767B\u5F55",
  "empty.title": "\u7075\u611F\u5E93\u8FD8\u662F\u7A7A\u7684",
  "empty.description": "\u7528\u811A\u672C\u6216 Agent \u628A\u94FE\u63A5\u5199\u5165\u5FAE\u670D\u52A1\u540E\uFF0C\u8FD9\u91CC\u4F1A\u51FA\u73B0\u5C01\u9762\u548C\u6807\u9898\u3002",
  "filter.search": "\u641C\u7D22\u6807\u9898\u6216\u5185\u5BB9",
  "filter.type": "\u7C7B\u578B",
  "filter.sort": "\u6392\u5E8F",
  "filter.favorite": "\u6536\u85CF",
  "filter.all": "\u5168\u90E8",
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
  "openSource": "\u6253\u5F00\u6765\u6E90",
  "noCover": "\u65E0\u5C01\u9762",
  "count": "{n} \u6761"
};
var en = {
  "nav": "Inspiration",
  "title": "Inspiration",
  "close": "Close",
  "loading": "Loading inspiration\u2026",
  "needLogin": "Sign in to OmniMux to see inspiration items.",
  "needLoginHint": "Sign in under Settings \u2192 Profile.",
  "login": "Sign in",
  "empty.title": "Inspiration library is empty",
  "empty.description": "Add links with the CLI or an Agent; covers and titles will show up here.",
  "filter.search": "Search title or body",
  "filter.type": "Type",
  "filter.sort": "Sort",
  "filter.favorite": "Favorites",
  "filter.all": "All",
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
  "openSource": "Open source",
  "noCover": "No cover",
  "count": "{n} items"
};
var NS = "omnimux-inspiration";

// src/client/stage-store.js
var PRODUCT_STAGE_EVENT = "dsh-product-stage";
var STAGE_ID = "omnimux-inspiration";
function createStageStore(getStage) {
  let open = false;
  const listeners = /* @__PURE__ */ new Set();
  function emit() {
    for (const listener of listeners) listener();
  }
  window.addEventListener(PRODUCT_STAGE_EVENT, (event) => {
    const id = event instanceof CustomEvent ? event.detail?.id : void 0;
    if (id !== STAGE_ID && open) {
      open = false;
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
var import_react3 = require("react");

// src/client/InspirationSection.jsx
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
function hostMediaSrc(url) {
  if (typeof url !== "string" || url === "") return "";
  if (url.includes("..")) return "";
  if (/^https?:\/\//i.test(url)) return url;
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

// src/client/styles.js
var STYLES2 = `
.omnimux-inspiration-root {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 20px 24px;
  color: var(--dsw-alias-label-primary, var(--dsw-text-primary, inherit));
}
.omnimux-inspiration-root *,
.omnimux-inspiration-root *::before,
.omnimux-inspiration-root *::after { box-sizing: border-box; }
.omnimux-inspiration-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}
.omnimux-inspiration-search {
  flex: 1 1 220px;
  min-width: 160px;
  height: 32px;
  padding: 0 12px;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.08));
  border-radius: 8px;
  background: var(--dsw-alias-bg-secondary, rgba(255,255,255,0.04));
  color: inherit;
  font: inherit;
}
.omnimux-inspiration-select {
  height: 32px;
  padding: 0 10px;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.08));
  border-radius: 8px;
  background: var(--dsw-alias-bg-secondary, rgba(255,255,255,0.04));
  color: inherit;
  font: inherit;
}
.omnimux-inspiration-count {
  margin-left: auto;
  font-size: 12px;
  color: var(--dsw-alias-label-secondary, rgba(255,255,255,0.72));
}
.omnimux-inspiration-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 12px;
}
.omnimux-inspiration-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.08));
  border-radius: 12px;
  background: var(--dsw-alias-bg-secondary, rgba(255,255,255,0.04));
}
.omnimux-inspiration-cover {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  background: var(--dsw-alias-bg-tertiary, rgba(255,255,255,0.06));
}
.omnimux-inspiration-cover-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 16 / 10;
  font-size: 12px;
  color: var(--dsw-alias-label-secondary, rgba(255,255,255,0.72));
  background: var(--dsw-alias-bg-tertiary, rgba(255,255,255,0.06));
}
.omnimux-inspiration-body { padding: 12px 16px 16px; display: flex; flex-direction: column; gap: 6px; }
.omnimux-inspiration-title {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
}
.omnimux-inspiration-meta {
  display: flex;
  gap: 8px;
  font-size: 12px;
  line-height: 16px;
  color: var(--dsw-alias-label-secondary, rgba(255,255,255,0.72));
}
.omnimux-inspiration-link {
  align-self: start;
  color: inherit;
  font-size: 12px;
}
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
.omnimux-inspiration-empty-title { margin: 0; font-size: 16px; font-weight: 600; }
.omnimux-inspiration-empty-text { margin: 0; font-size: 13px; color: var(--dsw-alias-label-secondary, rgba(255,255,255,0.72)); }
.omnimux-inspiration-btn {
  height: 32px;
  padding: 0 16px;
  border: none;
  border-radius: 8px;
  background: var(--dsw-alias-interactive-bg-active, rgba(128,128,128,0.18));
  color: inherit;
  cursor: pointer;
  font: inherit;
}
.omnimux-inspiration-skeleton {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 12px;
}
.omnimux-inspiration-skel {
  height: 180px;
  border-radius: 12px;
  background: var(--dsw-alias-bg-secondary, rgba(255,255,255,0.04));
}
`;
var STYLE_ID = "omnimux-inspiration-styles";
function injectInspirationStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(STYLE_ID)) return;
  const node = document.createElement("style");
  node.id = STYLE_ID;
  node.textContent = STYLES2;
  document.head.appendChild(node);
}

// src/client/use-inspiration.js
var import_react = require("react");

// src/view.js
function pickList(body) {
  const root = body && typeof body === "object" ? (
    /** @type {Record<string, unknown>} */
    body
  ) : {};
  const data = root.data && typeof root.data === "object" ? (
    /** @type {Record<string, unknown>} */
    root.data
  ) : root;
  const items = Array.isArray(data.items) ? data.items : [];
  const total = typeof data.total === "number" ? data.total : items.length;
  return { total, items: items.filter((row) => row && typeof row === "object") };
}
function errorMessage(errorBody, status) {
  const body = errorBody && typeof errorBody === "object" ? (
    /** @type {Record<string, unknown>} */
    errorBody
  ) : {};
  const code = String(body.code || body.error || "");
  if (code === "INSPIRATION_DISABLED" || /disabled/i.test(code)) return "disabled";
  if (code === "INSPIRATION_NOT_CONFIGURED") return "disabled";
  return String(body.message || body.error || `HTTP ${String(status)}`);
}

// src/client/use-inspiration.js
var sessionCache = { phase: "loading", items: [], total: 0 };
function useInspiration(filters) {
  const [phase, setPhase] = (0, import_react.useState)(sessionCache.phase);
  const [items, setItems] = (0, import_react.useState)(sessionCache.items);
  const [total, setTotal] = (0, import_react.useState)(sessionCache.total);
  const [error, setError] = (0, import_react.useState)("");
  const apply2 = (0, import_react.useCallback)((result) => {
    if (result.status === 401) {
      sessionCache.phase = "need-login";
      sessionCache.items = [];
      sessionCache.total = 0;
      setPhase("need-login");
      setItems([]);
      setTotal(0);
      return;
    }
    if (!result.ok) {
      setError(errorMessage(result.body, result.status));
      sessionCache.phase = "ready";
      setPhase("ready");
      return;
    }
    const picked = pickList(result.body);
    setError("");
    sessionCache.phase = "ready";
    sessionCache.items = picked.items;
    sessionCache.total = picked.total;
    setPhase("ready");
    setItems(picked.items);
    setTotal(picked.total);
  }, []);
  const refresh = (0, import_react.useCallback)(() => {
    return listInspirationsGuarded(filters).then(apply2).catch((caught) => {
      setError(caught instanceof Error ? caught.message : String(caught));
      sessionCache.phase = "ready";
      setPhase("ready");
    });
  }, [apply2, filters]);
  (0, import_react.useEffect)(() => {
    void refresh();
  }, [refresh]);
  (0, import_react.useEffect)(() => whenAuthReady(() => {
    void refresh();
  }), [refresh]);
  return { phase, items, total, error, refresh };
}

// src/client/InspirationSection.jsx
var import_jsx_runtime = require("react/jsx-runtime");
function LoginGate({ t }) {
  const login = () => {
    const gate = typeof window !== "undefined" ? window.__omnimuxAuth : void 0;
    if (gate && typeof gate.ensureLogin === "function") gate.ensureLogin({});
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "omnimux-inspiration-gate", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: "omnimux-inspiration-empty-title", children: t("needLogin") }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "omnimux-inspiration-empty-text", children: t("needLoginHint") }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "omnimux-inspiration-btn", onClick: login, children: t("login") })
  ] });
}
function EmptyState({ t }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "omnimux-inspiration-empty", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: "omnimux-inspiration-empty-title", children: t("empty.title") }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "omnimux-inspiration-empty-text", children: t("empty.description") })
  ] });
}
function InspirationSection({ t, active = true }) {
  (0, import_react2.useEffect)(() => {
    injectInspirationStyles();
  }, []);
  const [type, setType] = (0, import_react2.useState)("");
  const [sort, setSort] = (0, import_react2.useState)("hot");
  const [favorite, setFavorite] = (0, import_react2.useState)("");
  const [query, setQuery] = (0, import_react2.useState)("");
  const [q, setQ] = (0, import_react2.useState)("");
  const wasActive = (0, import_react2.useRef)(active);
  (0, import_react2.useEffect)(() => {
    const timer = window.setTimeout(() => {
      setQ(query.trim());
    }, 250);
    return () => {
      window.clearTimeout(timer);
    };
  }, [query]);
  const filters = (0, import_react2.useMemo)(() => ({
    type,
    sort,
    is_favorite: favorite,
    q
  }), [type, sort, favorite, q]);
  const { phase, items, total, error, refresh } = useInspiration(filters);
  (0, import_react2.useEffect)(() => {
    const returning = active && !wasActive.current;
    wasActive.current = active;
    if (returning) void refresh();
  }, [active, refresh]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "omnimux-inspiration-root", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "omnimux-inspiration-toolbar", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "input",
        {
          type: "search",
          className: "omnimux-inspiration-search",
          value: query,
          placeholder: t("filter.search"),
          "aria-label": t("filter.search"),
          onChange: (event) => {
            setQuery(event.currentTarget.value);
          }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", { className: "omnimux-inspiration-select", value: type, "aria-label": t("filter.type"), onChange: (event) => {
        setType(event.currentTarget.value);
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "", children: t("filter.all") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "video", children: t("type.video") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "image", children: t("type.image") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "link", children: t("type.link") })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", { className: "omnimux-inspiration-select", value: sort, "aria-label": t("filter.sort"), onChange: (event) => {
        setSort(event.currentTarget.value);
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "hot", children: t("sort.hot") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "new", children: t("sort.new") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "fav", children: t("sort.fav") })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", { className: "omnimux-inspiration-select", value: favorite, "aria-label": t("filter.favorite"), onChange: (event) => {
        setFavorite(event.currentTarget.value);
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "", children: t("favorite.off") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "true", children: t("favorite.on") })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "omnimux-inspiration-count", children: t("count").replace("{n}", String(total)) })
    ] }),
    phase === "loading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "omnimux-inspiration-skeleton", "aria-busy": "true", children: Array.from({ length: 6 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "omnimux-inspiration-skel" }, i)) }) : null,
    phase === "need-login" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoginGate, { t }) : null,
    phase === "ready" && error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "omnimux-inspiration-error", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "omnimux-inspiration-empty-text", children: error === "disabled" ? t("error.disabled") : error || t("error.generic") }) }) : null,
    phase === "ready" && !error && items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { t }) : null,
    phase === "ready" && items.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "omnimux-inspiration-grid", children: items.map((row) => {
      const id = String(row.id);
      const title = String(row.title || row.source_url || id);
      const cover = pickCoverSrc(row);
      const source = typeof row.source_url === "string" ? row.source_url : "";
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { className: "omnimux-inspiration-card", children: [
        cover ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { className: "omnimux-inspiration-cover", src: cover, alt: "", loading: "lazy", decoding: "async" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "omnimux-inspiration-cover-empty", children: t("noCover") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "omnimux-inspiration-body", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { className: "omnimux-inspiration-title", children: title }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "omnimux-inspiration-meta", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(`type.${row.type}`) === `type.${row.type}` ? String(row.type || "") : t(`type.${row.type}`) }),
            row.is_favorite ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("filter.favorite") }) : null
          ] }),
          source ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", { className: "omnimux-inspiration-link", href: source, target: "_blank", rel: "noreferrer", children: t("openSource") }) : null
        ] })
      ] }, id);
    }) }) : null
  ] });
}

// src/client/InspirationStage.jsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function InspirationStage({ t, stage }) {
  const open = (0, import_react3.useSyncExternalStore)(
    stage ? stage.subscribe : () => () => {
    },
    stage ? stage.getSnapshot : () => false
  );
  const [everOpened, setEverOpened] = (0, import_react3.useState)(false);
  const [box, setBox] = (0, import_react3.useState)(() => stage ? stage.readBox() : { top: 0, left: 0, width: 0, height: 0 });
  if (open && !everOpened) setEverOpened(true);
  (0, import_react3.useLayoutEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
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
        overflow: "auto"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
          "div",
          {
            style: {
              flex: "none",
              display: "flex",
              alignItems: "center",
              gap: 12,
              minHeight: 32,
              padding: "12px 20px 12px",
              WebkitAppRegion: "no-drag"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
                    padding: 4
                  },
                  children: "\xD7"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { flex: 1, minHeight: 0, display: "flex", flexDirection: "column", overflow: "auto" }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(InspirationSection, { t, active: open }) })
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
