window.__ModuleLoader__.load({
  id: "omnimux-gallery",
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
var NS = "omnimux-gallery";
var zh = {
  nav: "\u4E13\u5BB6\xB7\u6280\u80FD\xB7\u8FDE\u63A5\u5668",
  title: "\u4E13\u5BB6\xB7\u6280\u80FD\xB7\u8FDE\u63A5\u5668",
  close: "\u5173\u95ED",
  search: "\u641C\u7D22\u540D\u79F0\u6216\u63CF\u8FF0",
  tabExperts: "\u4E13\u5BB6",
  tabSkills: "\u6280\u80FD",
  tabConnectors: "\u8FDE\u63A5\u5668",
  all: "\u5168\u90E8",
  featured: "\u7CBE\u9009",
  installed: "\u5DF2\u5B89\u88C5",
  install: "\u5B89\u88C5",
  installing: "\u5B89\u88C5\u4E2D\u2026",
  summon: "\u53EC\u5524",
  summonHint: "\u63D2\u5165 /\u6280\u80FD\u540D\uFF1B\u7A7A\u767D\u4F1A\u8BDD\u624D\u4F1A\u5207\u6362\u5230\u4E13\u5BB6\u6A21\u5F0F",
  team: "\u56E2\u961F",
  sortDefault: "\u7EFC\u5408",
  sortName: "\u540D\u79F0",
  empty: "\u8FD9\u4E00\u7C7B\u8FD8\u6CA1\u6709\u6761\u76EE\u3002",
  loadError: "\u753B\u5ECA\u7D22\u5F15\u52A0\u8F7D\u5931\u8D25",
  hubSource: "SkillHub",
  localSource: "WorkBuddy",
  hubSearch: "\u5728 SkillHub \u4E0A\u641C\u7D22\u2026",
  hubNoQuery: "\u8F93\u5165\u5173\u952E\u8BCD\u5F00\u59CB\u641C\u7D22 SkillHub\uFF0C\u6216\u76F4\u63A5\u6D4F\u89C8\u70ED\u95E8",
  hubRequiresPlugin: "SkillHub \u5728\u7EBF\u6E90\u9700\u8981\u5B89\u88C5 @cocofhu/skillhub \u63D2\u4EF6",
  hubLoadError: "SkillHub \u641C\u7D22\u5931\u8D25",
  downloads: "\u4E0B\u8F7D {n}",
  hubInstall: "\u5B89\u88C5",
  fromHub: "\u6765\u81EA SkillHub"
};
var en = {
  nav: "Experts \xB7 Skills \xB7 Connectors",
  title: "Experts \xB7 Skills \xB7 Connectors",
  close: "Close",
  search: "Search title or summary",
  tabExperts: "Experts",
  tabSkills: "Skills",
  tabConnectors: "Connectors",
  all: "All",
  featured: "Featured",
  installed: "Installed",
  install: "Install",
  installing: "Installing\u2026",
  summon: "Summon",
  summonHint: "Inserts /skill-name. Blank sessions also stage Expert Mode.",
  team: "Team",
  sortDefault: "Default",
  sortName: "Name",
  empty: "Nothing in this category yet.",
  loadError: "Failed to load gallery index",
  hubSource: "SkillHub",
  localSource: "WorkBuddy",
  hubSearch: "Search SkillHub\u2026",
  hubNoQuery: "Type a keyword to search SkillHub, or browse popular",
  hubRequiresPlugin: "SkillHub live source needs @cocofhu/skillhub installed",
  hubLoadError: "SkillHub search failed",
  downloads: "{n} downloads",
  hubInstall: "Install",
  fromHub: "from SkillHub"
};

// src/client/conversation-box.js
function sizableBox(node) {
  if (!node || typeof node.getBoundingClientRect !== "function") return null;
  const rect = node.getBoundingClientRect();
  if (rect.width >= 8 && rect.height >= 8) {
    return { top: rect.top, left: rect.left, width: rect.width, height: rect.height };
  }
  return null;
}
var PRODUCT_STAGE_EVENT = "dsh-product-stage";
function claimProductStage(id) {
  window.dispatchEvent(new CustomEvent(PRODUCT_STAGE_EVENT, { detail: { id } }));
  document.documentElement.dataset.dshProductStage = id;
  ensureProductStageChrome();
}
function releaseProductStage(id) {
  if (document.documentElement.dataset.dshProductStage === id) {
    delete document.documentElement.dataset.dshProductStage;
  }
}
var PRODUCT_STAGE_CHROME = `
[data-slot="shell.overlay"]{pointer-events:none!important;}
html:not([data-dsh-product-stage]) [class*="toggleCluster"],
html:not([data-dsh-product-stage]) [class*="toggleCluster"] *{pointer-events:auto!important;z-index:300!important;}
html[data-dsh-product-stage] [class*="toggleCluster"]{display:none!important;}
html[data-dsh-product-stage] #dsh-window-drag{-webkit-app-region:no-drag!important;pointer-events:none!important;}
html[data-dsh-product-stage] header{-webkit-app-region:no-drag!important;}
html[data-dsh-product-stage] [data-slot="conversation.session.header"],
html[data-dsh-product-stage] [data-slot="conversation"] > header {display:none!important;}
html[data-dsh-product-stage] [role="treeitem"][aria-selected="true"]{background:transparent!important;}
`;
function ensureProductStageChrome() {
  const existing = document.getElementById("dsh-product-stage-chrome");
  if (existing instanceof HTMLStyleElement) {
    if (!existing.textContent?.includes("dsh-window-drag")) existing.textContent = PRODUCT_STAGE_CHROME;
  } else {
    const style = document.createElement("style");
    style.id = "dsh-product-stage-chrome";
    style.textContent = PRODUCT_STAGE_CHROME;
    document.head.append(style);
  }
  watchSelectedSessionClick();
}
function watchSelectedSessionClick() {
  if (document.documentElement.dataset.dshSessionCloser === "1") return;
  document.documentElement.dataset.dshSessionCloser = "1";
  document.addEventListener("click", (event) => {
    if (!document.documentElement.dataset.dshProductStage) return;
    const target = event.target;
    if (!(target instanceof Element)) return;
    const row = target.closest('[role="treeitem"][aria-selected="true"]');
    if (!(row instanceof HTMLElement)) return;
    if (target.closest("button") !== null) return;
    delete document.documentElement.dataset.dshProductStage;
    window.dispatchEvent(new CustomEvent(PRODUCT_STAGE_EVENT, { detail: { id: "" } }));
  }, true);
}
function readConversationBox() {
  let node = document.querySelector('[data-slot="conversation"]');
  while (node) {
    const box = sizableBox(node);
    if (box) return box;
    node = node.parentElement;
  }
  const preferred = sizableBox(document.querySelector("[data-conversation-scroll]"));
  if (preferred) return preferred;
  const left = 56;
  return { top: 0, left, width: Math.max(8, window.innerWidth - left), height: Math.max(8, window.innerHeight) };
}

// src/client/gallery-store.js
var STAGE_ID = "esc-gallery";
function createGalleryStore() {
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
      if (open) claimProductStage(STAGE_ID);
      else releaseProductStage(STAGE_ID);
      emit();
    },
    toggle() {
      this.set(!open);
    }
  };
}

// src/client/GalleryStage.jsx
var import_react = require("react");

// src/client/api.js
async function escFetch(path, opts = {}) {
  const method = opts.method || "GET";
  const init = {
    method,
    headers: method === "POST" ? { "Content-Type": "application/json" } : void 0,
    body: method === "POST" ? JSON.stringify(opts.body ?? {}) : void 0
  };
  const res = await fetch(path, init);
  const data = await res.json().catch(() => ({ error: "invalid json" }));
  if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
  return data;
}
function loadCatalog() {
  return escFetch("/esc/catalog");
}
function searchHub(opts = {}) {
  const params = new URLSearchParams();
  if (opts.query) params.set("q", opts.query);
  if (opts.category) params.set("category", opts.category);
  if (opts.limit) params.set("limit", String(opts.limit));
  if (opts.offset) params.set("offset", String(opts.offset));
  return escFetch(`/esc/hub/search?${params.toString()}`);
}
async function installHub(slug) {
  const res = await fetch("/skillhub", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ method: "install", slug })
  });
  const data = await res.json().catch(() => ({ error: "invalid json" }));
  if (!res.ok) {
    const err = new Error(data.error || `HTTP ${res.status}`);
    if (res.status === 404) err.missingPlugin = true;
    throw err;
  }
  return data;
}
async function uninstallHub(slug) {
  const res = await fetch("/skillhub", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ method: "uninstall", slug })
  });
  const data = await res.json().catch(() => ({ error: "invalid json" }));
  if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
  return data;
}
function installItem(id) {
  return escFetch("/esc/install", { method: "POST", body: { id } });
}
function summonItem(id, sessionState) {
  return escFetch("/esc/summon", { method: "POST", body: { id, sessionState } });
}

// src/client/insert-gesture.js
function insertGesture(field, gesture) {
  const token = gesture.endsWith(" ") ? gesture : `${gesture} `;
  const start = field.selectionStart ?? field.value.length;
  const end = field.selectionEnd ?? start;
  const next = `${field.value.slice(0, start)}${token}${field.value.slice(end)}`;
  const proto = typeof HTMLTextAreaElement === "function" && field instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : typeof HTMLInputElement === "function" && field instanceof HTMLInputElement ? HTMLInputElement.prototype : Object.getPrototypeOf(field);
  const setter = proto ? Object.getOwnPropertyDescriptor(proto, "value")?.set : void 0;
  if (setter) setter.call(field, next);
  else field.value = next;
  const caret = start + token.length;
  field.setSelectionRange?.(caret, caret);
  const Input = typeof InputEvent === "function" ? InputEvent : Event;
  field.dispatchEvent(new Input("input", { bubbles: true, inputType: "insertText", data: token }));
  field.focus?.();
  return field.value.includes(token.trim());
}

// src/client/GalleryStage.jsx
var import_jsx_runtime = require("react/jsx-runtime");
var TABS = [
  { id: "experts", key: "tabExperts" },
  { id: "skills", key: "tabSkills" },
  { id: "connectors", key: "tabConnectors" }
];
function findComposer() {
  return document.querySelector(
    "[data-composer-card] textarea, [data-composer-seat] textarea, textarea[data-phase], textarea[placeholder]"
  );
}
function isBlankSession() {
  const header = document.querySelector('[data-slot="conversation.session.header"]');
  const title = header?.textContent || "";
  if (/新会话|New session|Untitled/i.test(title)) return true;
  const scroll = document.querySelector("[data-conversation-scroll]");
  if (!scroll) return true;
  return (scroll.textContent || "").trim().length < 40;
}
function clickPreset(id) {
  const chip = document.querySelector('button[title*="Agent"], button[title*="\u9884\u8BBE"]');
  if (!(chip instanceof HTMLElement)) return false;
  chip.click();
  const wanted = id === "expert-mode" ? /专家模式|Expert Mode/ : null;
  if (!wanted) return false;
  const items = [...document.querySelectorAll('[role="menuitem"]')];
  const match = items.find((el) => wanted.test(el.textContent || ""));
  if (match instanceof HTMLElement) {
    match.click();
    return true;
  }
  chip.click();
  return false;
}
function GalleryStage({ t, gallery, useSessions }) {
  const open = (0, import_react.useSyncExternalStore)(
    gallery ? gallery.subscribe : () => () => {
    },
    gallery ? gallery.getSnapshot : () => false
  );
  const readSessions = useSessions ?? ((select) => select({}));
  const currentSession = readSessions((state) => state.current);
  const lastSession = (0, import_react.useRef)(currentSession);
  const [box, setBox] = (0, import_react.useState)(() => readConversationBox());
  const [tab, setTab] = (0, import_react.useState)("experts");
  const [category, setCategory] = (0, import_react.useState)("all");
  const [query, setQuery] = (0, import_react.useState)("");
  const [sort, setSort] = (0, import_react.useState)("default");
  const [catalog, setCatalog] = (0, import_react.useState)(null);
  const [error, setError] = (0, import_react.useState)("");
  const [busy, setBusy] = (0, import_react.useState)("");
  const [notice, setNotice] = (0, import_react.useState)("");
  const [hubMode, setHubMode] = (0, import_react.useState)(false);
  const [hubQuery, setHubQuery] = (0, import_react.useState)("");
  const [hubTotal, setHubTotal] = (0, import_react.useState)(0);
  const [hubItems, setHubItems] = (0, import_react.useState)(null);
  const [hubError, setHubError] = (0, import_react.useState)("");
  (0, import_react.useLayoutEffect)(() => {
    if (!open) return void 0;
    const update = () => {
      setBox(readConversationBox());
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
  }, [open]);
  (0, import_react.useEffect)(() => {
    if (open && lastSession.current !== currentSession) gallery?.set(false);
    lastSession.current = currentSession;
  }, [gallery, currentSession, open]);
  (0, import_react.useEffect)(() => {
    if (!open) return void 0;
    let cancelled = false;
    loadCatalog().then((data) => {
      if (!cancelled) {
        setCatalog(data);
        setError("");
      }
    }, (err) => {
      if (!cancelled) setError(err instanceof Error ? err.message : String(err));
    });
    return () => {
      cancelled = true;
    };
  }, [open]);
  const hubSearch = (0, import_react.useMemo)(() => debounce(async () => {
    try {
      const result = await searchHub({ query: hubQuery });
      setHubItems(result.items || []);
      setHubTotal(result.total || 0);
      setHubError("");
    } catch (err) {
      setHubItems([]);
      setHubError(err instanceof Error ? err.message : String(err));
    }
  }, 300), [hubQuery]);
  (0, import_react.useEffect)(() => {
    if (!open || !hubMode) return void 0;
    hubSearch();
    return () => hubSearch.cancel();
  }, [open, hubMode, hubQuery, hubSearch]);
  const categories = (0, import_react.useMemo)(() => {
    if (!catalog) return [];
    const tabItems = catalog.items.filter((item) => item.tab === tab);
    return catalog.categories.filter((row) => row.tab === tab).map((row) => ({ ...row, count: tabItems.filter((item) => item.category === row.id).length })).filter((row) => row.count > 0);
  }, [catalog, tab]);
  const items = (0, import_react.useMemo)(() => {
    if (!catalog) return [];
    const q = query.trim().toLowerCase();
    const filtered = catalog.items.filter((item) => {
      if (item.tab !== tab) return false;
      if (category !== "all" && item.category !== category) return false;
      if (!q) return true;
      return `${item.title} ${item.subtitle || ""} ${item.summary} ${item.tags.join(" ")}`.toLowerCase().includes(q);
    });
    if (sort === "name") return [...filtered].sort((a, b) => a.title.localeCompare(b.title, "zh"));
    return filtered;
  }, [catalog, tab, category, query, sort]);
  const featured = (0, import_react.useMemo)(() => {
    if (!catalog || tab !== "experts") return [];
    const ids = new Set(catalog.featured || []);
    return catalog.items.filter((item) => item.tab === "experts" && ids.has(item.id));
  }, [catalog, tab]);
  async function onInstall(id) {
    setBusy(id);
    setNotice("");
    try {
      await installItem(id);
      const next = await loadCatalog();
      setCatalog(next);
    } catch (err) {
      setNotice(err instanceof Error ? err.message : String(err));
    } finally {
      setBusy("");
    }
  }
  async function onSummon(id) {
    setBusy(id);
    setNotice("");
    try {
      const blank = isBlankSession();
      const result = await summonItem(id, blank ? "blank" : "locked");
      const field = findComposer();
      const wrote = field instanceof HTMLTextAreaElement || field instanceof HTMLInputElement ? insertGesture(field, result.gesture) : false;
      if (result.stagePreset === "expert-mode") clickPreset("expert-mode");
      if (!wrote) {
        setNotice(`${result.gesture} \u5DF2\u5C31\u7EEA\uFF0C\u4F46\u6CA1\u5199\u8FDB\u8F93\u5165\u6846\u3002\u8BF7\u70B9\u4E00\u4E0B\u8F93\u5165\u6846\u540E\u91CD\u8BD5\uFF0C\u6216\u624B\u52A8\u8F93\u5165\u8BE5\u624B\u52BF\u3002`);
        return;
      }
      gallery?.set(false);
    } catch (err) {
      setNotice(err instanceof Error ? err.message : String(err));
    } finally {
      setBusy("");
    }
  }
  async function onHubToggle(item) {
    const slug = item.slug;
    setBusy(slug);
    setNotice("");
    try {
      if (item.installed) await uninstallHub(slug);
      else await installHub(slug);
      hubSearch();
    } catch (err) {
      const message = err instanceof Error && err.missingPlugin ? t("hubRequiresPlugin") : err instanceof Error ? err.message : String(err);
      setNotice(message);
    } finally {
      setBusy("");
    }
  }
  if (!open || !gallery) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      role: "region",
      "aria-label": t("title"),
      style: {
        position: "fixed",
        top: box.top,
        left: box.left,
        width: box.width,
        height: box.height,
        zIndex: 200,
        pointerEvents: "auto",
        display: "flex",
        flexDirection: "column",
        background: "var(--dsw-alias-bg-primary, var(--dsw-bg, #111))",
        color: "var(--dsw-alias-label-primary, inherit)",
        overflow: "hidden"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "div",
          {
            style: {
              padding: "12px 20px 12px",
              display: "flex",
              gap: 12,
              alignItems: "center",
              WebkitAppRegion: "no-drag"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", { style: { display: "flex", gap: 8, WebkitAppRegion: "no-drag" }, children: TABS.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setTab(row.id);
                    setCategory("all");
                    setHubMode(false);
                  },
                  style: { ...tabButton(tab === row.id), WebkitAppRegion: "no-drag" },
                  children: t(row.key)
                },
                row.id
              )) }),
              tab === "skills" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "input",
                  {
                    value: hubMode ? hubQuery : query,
                    onChange: (event) => hubMode ? setHubQuery(event.target.value) : setQuery(event.target.value),
                    placeholder: hubMode ? t("hubSearch") : t("search"),
                    style: { ...searchStyle, WebkitAppRegion: "no-drag" }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", gap: 4, WebkitAppRegion: "no-drag" }, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", onClick: () => setHubMode(false), style: sortButton(!hubMode), children: t("localSource") }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", onClick: () => setHubMode(true), style: sortButton(hubMode), children: t("hubSource") })
                ] })
              ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "input",
                  {
                    value: query,
                    onChange: (event) => setQuery(event.target.value),
                    placeholder: t("search"),
                    style: { ...searchStyle, WebkitAppRegion: "no-drag" }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", gap: 4, WebkitAppRegion: "no-drag" }, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", onClick: () => setSort("default"), style: sortButton(sort === "default"), children: t("sortDefault") }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", onClick: () => setSort("name"), style: sortButton(sort === "name"), children: t("sortName") })
                ] })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", "aria-label": t("close"), onClick: () => gallery.set(false), style: { ...closeStyle, WebkitAppRegion: "no-drag" }, children: "\xD7" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { padding: "0 20px 12px", display: "flex", gap: 8, flexWrap: "wrap" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, { active: category === "all", onClick: () => setCategory("all"), children: t("all") }),
          categories.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Chip, { active: category === row.id, onClick: () => setCategory(row.id), children: [
            row.title,
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { opacity: 0.55 }, children: row.count })
          ] }, row.id))
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { flex: 1, minHeight: 0, overflow: "auto", padding: "0 20px 24px" }, children: [
          error && !hubMode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { style: muted, children: [
            t("loadError"),
            ": ",
            error
          ] }),
          notice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { style: muted, children: notice }),
          tab === "skills" && hubMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            HubPanel,
            {
              items: hubItems,
              loading: hubItems === null,
              error: hubError,
              busy,
              query: hubQuery,
              total: hubTotal,
              t,
              onToggle: onHubToggle
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
            tab === "experts" && category === "all" && !query && featured.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { style: { marginBottom: 24 }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { style: h2, children: t("featured") }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: featuredRow, children: featured.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedCard, { item, t, busy: busy === item.id, onSummon }, `f-${item.id}`)) })
            ] }),
            items.length === 0 && !error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { style: muted, children: t("empty") }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: grid, children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { item, t, busy: busy === item.id, onSummon, onInstall }, item.id)) })
          ] })
        ] })
      ]
    }
  );
}
function HubPanel({ items, loading, error, busy, query, total, t, onToggle }) {
  if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { style: muted, children: "\u2026" });
  if (error) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { style: muted, children: [
    t("hubLoadError"),
    ": ",
    error
  ] });
  if (!items || items.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { style: muted, children: query ? t("empty") : t("hubNoQuery") });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { style: { ...muted, marginTop: 0 }, children: [
      t("hubSource"),
      " \xB7 ",
      t("downloads", { n: formatCount(total) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: grid, children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HubCard, { item, t, busy: busy === item.slug, onToggle }, item.slug)) })
  ] });
}
function HubCard({ item, t, busy, onToggle }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", { style: card, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", gap: 10, alignItems: "flex-start" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: hubAvatar, "aria-hidden": "true", children: (item.name || "?").slice(0, 1) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { flex: 1, minWidth: 0 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", gap: 8, alignItems: "flex-start" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { minWidth: 0, display: "flex", gap: 6, alignItems: "baseline", flexWrap: "wrap" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { style: { margin: 0, fontSize: 15, fontWeight: 600 }, children: item.name }),
          item.categoryLabel ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HubBadge, { title: item.categoryLabel }) : null
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", disabled: busy, onClick: () => onToggle(item), style: plusButton, children: busy ? "\u2026" : item.installed ? t("installed") : t("hubInstall") })
      ] }),
      item.description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { style: { margin: "6px 0 0", fontSize: 12, opacity: 0.72, lineHeight: 1.5 }, children: item.description }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { style: { margin: "6px 0 0", fontSize: 11, opacity: 0.6 }, children: [
        t("downloads", { n: formatCount(item.downloads) }),
        item.version ? ` \xB7 ${item.version}` : ""
      ] })
    ] })
  ] }) });
}
function Avatar({ item }) {
  const [failed, setFailed] = (0, import_react.useState)(false);
  const initial = (item.title || "?").slice(0, 1);
  if (item.avatar && !failed) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "img",
      {
        src: item.avatar,
        alt: "",
        width: 40,
        height: 40,
        loading: "lazy",
        onError: () => setFailed(true),
        style: avatarImg
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: avatarFallback, "aria-hidden": "true", children: initial });
}
function Card({ item, t, busy, onSummon, onInstall }) {
  const market = item.kind === "skill" || item.kind === "connector";
  const team = item.kind === "team";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { style: card, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", gap: 10, alignItems: "flex-start" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, { item }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { flex: 1, minWidth: 0 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", gap: 8, alignItems: "flex-start" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { minWidth: 0 }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", gap: 6, alignItems: "baseline", flexWrap: "wrap" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { style: { margin: 0, fontSize: 15, fontWeight: 600 }, children: item.title }),
              team ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: teamBadge, children: t("team") }) : null,
              item.hub ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HubBadge, { title: t("fromHub") }) : null
            ] }),
            item.subtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { style: { margin: "2px 0 0", fontSize: 12, opacity: 0.66 }, children: item.subtitle }) : null
          ] }),
          market ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", disabled: busy || item.installed, onClick: () => onInstall(item.id), style: plusButton, children: item.installed ? t("installed") : busy ? t("installing") : "+" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", disabled: busy, onClick: () => onSummon(item.id), style: plusButton, children: busy ? "\u2026" : t("summon") })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { style: { margin: "6px 0 0", fontSize: 12, opacity: 0.72, lineHeight: 1.5 }, children: item.summary })
      ] })
    ] }),
    item.tags?.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { display: "flex", gap: 6, flexWrap: "wrap", marginTop: 10 }, children: item.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: tagStyle, children: tag }, tag)) })
  ] });
}
function FeaturedCard({ item, t, busy, onSummon }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { style: featuredCard, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, { item }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { flex: 1, minWidth: 0 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", gap: 6, alignItems: "baseline", flexWrap: "wrap" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { style: { margin: 0, fontSize: 14, fontWeight: 600 }, children: item.title }),
        item.kind === "team" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: teamBadge, children: t("team") }) : null
      ] }),
      item.subtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { style: { margin: "2px 0 0", fontSize: 11, opacity: 0.66 }, children: item.subtitle }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { style: { margin: "6px 0 0", fontSize: 11, opacity: 0.7, lineHeight: 1.45, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }, children: item.summary })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", disabled: busy, onClick: () => onSummon(item.id), style: { ...plusButton, alignSelf: "flex-start" }, children: busy ? "\u2026" : t("summon") })
  ] });
}
function Chip({ active, onClick, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "button",
    {
      type: "button",
      onClick,
      style: {
        border: "none",
        borderRadius: 999,
        padding: "4px 10px",
        font: "inherit",
        fontSize: 13,
        cursor: "pointer",
        background: active ? "var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.12))" : "transparent",
        color: "inherit"
      },
      children
    }
  );
}
var tabButton = (active) => ({
  border: "none",
  borderRadius: 8,
  padding: "6px 12px",
  font: "inherit",
  fontSize: 14,
  fontWeight: active ? 600 : 400,
  cursor: "pointer",
  background: active ? "var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.12))" : "transparent",
  color: "inherit"
});
var searchStyle = {
  flex: 1,
  minWidth: 160,
  height: 32,
  borderRadius: 8,
  border: "1px solid var(--dsw-alias-border, rgba(255,255,255,0.12))",
  background: "transparent",
  color: "inherit",
  padding: "0 10px",
  font: "inherit"
};
var closeStyle = {
  border: "none",
  background: "transparent",
  color: "inherit",
  cursor: "pointer",
  fontSize: 20,
  lineHeight: 1,
  padding: 4
};
var avatarImg = {
  flex: "0 0 auto",
  width: 40,
  height: 40,
  borderRadius: "50%",
  objectFit: "cover",
  background: "var(--dsw-alias-bg-secondary, rgba(255,255,255,0.06))"
};
var avatarFallback = {
  flex: "0 0 auto",
  width: 40,
  height: 40,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 16,
  fontWeight: 600,
  background: "var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.10))",
  color: "var(--dsw-alias-label-secondary, inherit)"
};
var hubAvatar = {
  flex: "0 0 auto",
  width: 40,
  height: 40,
  borderRadius: 12,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 16,
  fontWeight: 600,
  background: "var(--dsw-alias-state-business-primary, rgba(120,160,255,0.20))",
  color: "var(--dsw-alias-label-primary, inherit)"
};
var teamBadge = {
  flex: "0 0 auto",
  fontSize: 10,
  padding: "1px 6px",
  borderRadius: 4,
  fontWeight: 600,
  background: "var(--dsw-alias-state-business-primary, rgba(120,160,255,0.25))",
  color: "var(--dsw-alias-label-primary, inherit)"
};
var h2 = { margin: "0 0 12px", fontSize: 16, fontWeight: 600 };
var featuredRow = {
  display: "flex",
  gap: 12,
  overflowX: "auto",
  paddingBottom: 4
};
var featuredCard = {
  flex: "0 0 300px",
  display: "flex",
  gap: 10,
  alignItems: "flex-start",
  borderRadius: 12,
  padding: 12,
  background: "var(--dsw-alias-bg-secondary, rgba(255,255,255,0.04))",
  border: "1px solid var(--dsw-alias-border, rgba(255,255,255,0.08))"
};
var sortButton = (active) => ({
  border: "none",
  borderRadius: 6,
  padding: "4px 8px",
  font: "inherit",
  fontSize: 12,
  cursor: "pointer",
  background: active ? "var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.12))" : "transparent",
  color: active ? "inherit" : "var(--dsw-alias-label-secondary, inherit)"
});
var muted = { opacity: 0.7, fontSize: 13 };
var grid = { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12 };
var card = {
  borderRadius: 12,
  padding: 14,
  background: "var(--dsw-alias-bg-secondary, rgba(255,255,255,0.04))",
  border: "1px solid var(--dsw-alias-border, rgba(255,255,255,0.08))"
};
var plusButton = {
  flex: "0 0 auto",
  border: "none",
  borderRadius: 8,
  padding: "4px 8px",
  font: "inherit",
  fontSize: 13,
  cursor: "pointer",
  background: "var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.12))",
  color: "inherit"
};
var tagStyle = {
  fontSize: 11,
  padding: "2px 6px",
  borderRadius: 999,
  background: "rgba(255,255,255,0.08)"
};
function debounce(fn, wait) {
  let timer = 0;
  const debounced = (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, wait);
  };
  debounced.cancel = () => clearTimeout(timer);
  return debounced;
}
function formatCount(n) {
  const v = Number(n) || 0;
  if (v >= 1e8) return `${(v / 1e8).toFixed(1)}\u4EBF`;
  if (v >= 1e4) return `${(v / 1e4).toFixed(1)}\u4E07`;
  return String(v);
}
function HubBadge({ title }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: hubBadge, children: title });
}
var hubBadge = {
  fontSize: 10,
  padding: "1px 6px",
  borderRadius: 4,
  fontWeight: 600,
  background: "var(--dsw-alias-state-business-primary, rgba(120,160,255,0.25))",
  color: "var(--dsw-alias-label-primary, inherit)"
};

// src/client/sidebar-entry.js
var ICON = '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="5" cy="6" r="2.1"/><circle cx="11" cy="6" r="2.1"/><path d="M2.5 13c.6-2 2-3 3.5-3s2.9 1 3.5 3"/><path d="M9 13c.4-1.3 1.3-2 2.5-2s2 .6 2.5 2"/></svg>';
var STYLES = `
.omnimux-esc-entry {
  box-sizing: border-box; display: flex; align-items: center; gap: 6px; position: relative;
  width: calc(100% - 8px); height: 32px; margin: 0 4px; padding: 0 8px;
  border: none; border-radius: 8px; background: transparent;
  color: var(--dsw-alias-label-primary, inherit);
  font: var(--dsw-font-s-14, inherit); font-size: 14px; line-height: 20px;
  cursor: pointer; text-align: left;
}
.omnimux-esc-entry:hover { background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,.12)); }
.omnimux-esc-entry[data-active="true"] { background: var(--dsw-alias-interactive-bg-active, rgba(128,128,128,.18)); font-weight: 500; }
.omnimux-esc-entry-icon { flex: none; display: inline-flex; width: 14px; height: 14px; align-items: center; justify-content: center; }
.omnimux-esc-entry svg { display: block; width: 14px; height: 14px; }
.omnimux-esc-entry-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 20px; }
`;
function injectStyles() {
  if (document.getElementById("omnimux-esc-entry-styles")) return;
  const style = document.createElement("style");
  style.id = "omnimux-esc-entry-styles";
  style.textContent = STYLES;
  document.head.append(style);
}
function sidebarRoot() {
  const column = document.querySelector('[data-pane="sidebar"], [class*="sidebarCol"]');
  if (!(column instanceof HTMLElement)) return void 0;
  const logoOwner = column.querySelector('[class*="logoRow"]')?.parentElement;
  return logoOwner ?? (column.firstElementChild instanceof HTMLElement ? column.firstElementChild : void 0);
}
function newSessionButton(root) {
  const nested = root.querySelector('button[class*="newSession"]');
  if (nested instanceof HTMLButtonElement) return nested;
  for (const child of root.children) {
    if (child instanceof HTMLButtonElement) return child;
  }
  const byAria = root.querySelector(
    'button[aria-label="\u65B0\u5EFA\u4F1A\u8BDD"], button[aria-label="New Session"], button[aria-label*="\u65B0\u4F1A\u8BDD"], button[aria-label*="new session" i]'
  );
  if (byAria instanceof HTMLButtonElement) return byAria;
  return [...root.querySelectorAll("button")].find((button) => /新会话|新建会话|new session/i.test(button.textContent ?? ""));
}
function paintLabel(entry, label) {
  entry.setAttribute("aria-label", label);
  const node = entry.querySelector(".omnimux-esc-entry-label");
  if (node) node.textContent = label;
}
function createEntry(gallery, t) {
  const entry = document.createElement("button");
  entry.type = "button";
  entry.dataset.dshEscEntry = "";
  entry.className = "omnimux-esc-entry";
  entry.innerHTML = `<span class="omnimux-esc-entry-icon">${ICON}</span><span class="omnimux-esc-entry-label"></span>`;
  paintLabel(entry, t("nav"));
  entry.addEventListener("click", () => {
    gallery.toggle();
  });
  return entry;
}
function placeEntry(root, entry) {
  const button = newSessionButton(root);
  if (button === void 0) return false;
  if (entry.parentElement !== root) {
    const row = button.closest('[class*="logoRow"]');
    const base = row instanceof HTMLElement && row.parentElement === root ? row : button;
    const family = [...root.children].filter(
      (el) => el instanceof HTMLElement && el.matches("[data-dsh-atb-entry], [data-dsh-taskboard-entry], [data-dsh-ssh-entry]")
    );
    const apps = root.querySelector("[data-omnimux-apps-entry]");
    const last = family[family.length - 1];
    const after = last ?? (apps instanceof HTMLElement ? apps : base);
    const anchor = after.nextElementSibling;
    root.insertBefore(entry, anchor === entry ? entry.nextElementSibling : anchor);
  }
  return true;
}
function mountSidebarEntry(gallery, t, locale) {
  injectStyles();
  const entry = createEntry(gallery, t);
  const paint = () => {
    paintLabel(entry, t("nav"));
  };
  const unsubscribeLocale = typeof locale?.subscribe === "function" ? locale.subscribe(paint) : () => {
  };
  let root;
  let placed = false;
  const syncActive = () => {
    if (gallery.getSnapshot()) entry.dataset.active = "true";
    else delete entry.dataset.active;
  };
  const tryPlace = () => {
    if (root !== void 0 && !root.isConnected) {
      rootObserver.disconnect();
      root = void 0;
      placed = false;
    }
    if (placed) {
      if (document.body.contains(entry)) return;
      rootObserver.disconnect();
      root = void 0;
      placed = false;
    }
    root ??= sidebarRoot();
    if (root === void 0) return;
    placed = placeEntry(root, entry);
    if (placed) rootObserver.observe(root, { childList: true, subtree: true });
  };
  const waitObserver = new MutationObserver(() => {
    tryPlace();
  });
  waitObserver.observe(document.body, { childList: true, subtree: true });
  const rootObserver = new MutationObserver(() => {
    if (root === void 0 || !root.isConnected) {
      placed = false;
      tryPlace();
      return;
    }
    if (!root.contains(entry)) placed = placeEntry(root, entry);
  });
  const retry = setInterval(() => {
    tryPlace();
  }, 2e3);
  const unsubscribe = gallery.subscribe(syncActive);
  syncActive();
  tryPlace();
  return () => {
    clearInterval(retry);
    waitObserver.disconnect();
    rootObserver.disconnect();
    unsubscribe();
    unsubscribeLocale();
    entry.remove();
  };
}

// src/client/index.js
var name = "omnimux-gallery";
var inject = ["slots", "locale"];
function apply(ctx) {
  ctx.effect(() => {
    ensureProductStageChrome();
    return () => {
    };
  }, "omnimux-gallery: product-stage chrome");
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), "omnimux-gallery: dictionaries");
  const t = ctx.locale.bind(NS);
  const gallery = createGalleryStore();
  ctx.effect(() => mountSidebarEntry(gallery, t, ctx.locale), "omnimux-gallery: sidebar entry");
  ctx.slots.inject("shell.overlay", () => ctx.slots.register({
    name: "shell.overlay",
    id: "esc-gallery-stage",
    order: 25,
    locale: NS,
    inject: () => ({ t, gallery })
  }, GalleryStage));
}

    return module.exports;
  }
});
