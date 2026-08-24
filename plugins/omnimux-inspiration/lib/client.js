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
          forceVerify: true,
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

// src/client/styles.js
var STYLES2 = `
/* ==========================================================================
   OmniMux Inspiration UI \u2014 x.ai \u6781\u7B80\u8BBE\u8BA1\u89C4\u8303\u843D\u5730
   ========================================================================== */

.omnimux-inspiration-root {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: var(--omx-space-lg, 16px);
  padding: 0 var(--omx-space-xl, 24px) var(--omx-space-2xl, 32px);
  font-family: var(--omx-font-sans, 'Universal Sans', 'Inter', system-ui, -apple-system, sans-serif);
  color: var(--omx-color-ink, #ffffff);
  background: var(--omx-color-canvas, #0a0a0a);
  min-height: 100%;
}
.omnimux-inspiration-root *,
.omnimux-inspiration-root *::before,
.omnimux-inspiration-root *::after { box-sizing: border-box; }

/* \u5DE5\u5177\u680F Toolbar: \u53D1\u4E1D\u7EBF\u63CF\u8FB9 + \u80F6\u56CA/\u6781\u7B80\u63A7\u4EF6 */
.omnimux-inspiration-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--omx-space-sm, 8px);
  padding-bottom: var(--omx-space-md, 12px);
  border-bottom: 1px solid var(--omx-color-hairline, #242424);
}
.omnimux-inspiration-search {
  flex: 1 1 240px;
  min-width: 180px;
  height: 34px;
  padding: 0 var(--omx-space-md, 12px);
  border: 1px solid var(--omx-color-hairline, #242424);
  border-radius: var(--omx-radius-sm, 8px);
  background: var(--omx-color-canvas-soft, #131313);
  color: var(--omx-color-ink, #ffffff);
  font: var(--omx-text-body-sm, 400 14px/20px var(--omx-font-sans));
  outline: none;
  transition: border-color var(--omx-motion-fast, 120ms) ease;
}
.omnimux-inspiration-search:focus {
  border-color: var(--omx-color-hairline-strong, #3d3d3d);
}
.omnimux-inspiration-search::placeholder {
  color: var(--omx-color-muted, #7c7c7c);
}
.omnimux-inspiration-select {
  height: 34px;
  padding: 0 var(--omx-space-md, 12px);
  border: 1px solid var(--omx-color-hairline, #242424);
  border-radius: var(--omx-radius-sm, 8px);
  background: var(--omx-color-canvas-soft, #131313);
  color: var(--omx-color-ink-soft, #ebebeb);
  font: var(--omx-text-label, 500 13px/16px var(--omx-font-sans));
  outline: none;
  cursor: pointer;
  transition: border-color var(--omx-motion-fast, 120ms) ease;
}
.omnimux-inspiration-select:hover,
.omnimux-inspiration-select:focus {
  border-color: var(--omx-color-hairline-strong, #3d3d3d);
}
.omnimux-inspiration-count {
  margin-left: auto;
  font: var(--omx-text-code, 400 13px/20px var(--omx-font-mono, monospace));
  color: var(--omx-color-muted, #7c7c7c);
}

/* \u7011\u5E03\u6D41 Masonry \u7EAF\u753B\u9762\u5361\u7247\uFF08\u57FA\u4E8E\u6700\u4F73\u5217\u5BBD\u81EA\u9002\u5E94\uFF09 */
.omnimux-inspiration-masonry {
  columns: 180px auto;
  column-gap: var(--omx-space-md, 12px);
  width: 100%;
}
@media (min-width: 1600px) {
  .omnimux-inspiration-masonry { columns: 200px 7; }
}
@media (min-width: 1280px) and (max-width: 1599px) {
  .omnimux-inspiration-masonry { columns: 190px 6; }
}
@media (min-width: 960px) and (max-width: 1279px) {
  .omnimux-inspiration-masonry { columns: 180px 5; }
}
@media (min-width: 640px) and (max-width: 959px) {
  .omnimux-inspiration-masonry { columns: 160px 4; }
}
@media (max-width: 639px) {
  .omnimux-inspiration-masonry { columns: 140px 2; }
}

.omnimux-inspiration-card-pure {
  position: relative;
  break-inside: avoid;
  margin-bottom: var(--omx-space-md, 12px);
  border-radius: var(--omx-radius-sm, 8px);
  overflow: hidden;
  cursor: pointer;
  background: var(--omx-color-canvas-soft, #131313);
  border: 1px solid var(--omx-color-hairline, #242424);
  transition: transform var(--omx-motion-base, 180ms) var(--omx-motion-ease, cubic-bezier(.2,.4,.6,1)),
              border-color var(--omx-motion-base, 180ms) var(--omx-motion-ease, cubic-bezier(.2,.4,.6,1));
}
.omnimux-inspiration-card-pure:hover {
  transform: translateY(-2px);
  border-color: var(--omx-color-hairline-strong, #3d3d3d);
}
.omnimux-inspiration-cover-img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}
.omnimux-inspiration-cover-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 9 / 16;
  font: var(--omx-text-display-sm, 600 32px/38px var(--omx-font-sans));
  color: var(--omx-color-muted, #7c7c7c);
  background: var(--omx-color-canvas-raised, #171717);
}

/* Hover \u6D6E\u5C42: \u6781\u7B80\u7EAF\u9ED1\u6E10\u53D8 + \u5E73\u53F0 Chip + \u5C45\u4E2D\u64AD\u653E */
.omnimux-inspiration-card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.65) 100%);
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--omx-space-md, 12px);
  transition: opacity var(--omx-motion-fast, 120ms) ease;
}
.omnimux-inspiration-card-pure:hover .omnimux-inspiration-card-overlay {
  opacity: 1;
}
.omnimux-inspiration-badge-platform {
  align-self: flex-start;
  padding: var(--omx-space-2xs, 2px) var(--omx-space-sm, 8px);
  border-radius: var(--omx-radius-pill, 9999px);
  font: var(--omx-text-label, 500 12px/16px var(--omx-font-sans));
  font-family: var(--omx-font-mono, monospace);
  background: rgba(0,0,0,0.65);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.15);
  color: #ffffff;
}
.omnimux-inspiration-overlay-play {
  align-self: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--omx-color-primary, #ffffff);
  color: var(--omx-color-on-primary, #0a0a0a);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0.9);
  transition: transform var(--omx-motion-fast, 120ms) ease;
}
.omnimux-inspiration-card-pure:hover .omnimux-inspiration-overlay-play {
  transform: scale(1);
}
.omnimux-inspiration-overlay-play svg {
  width: 16px;
  height: 16px;
  margin-left: 2px;
}

/* \u8BE6\u60C5\u5F39\u7A97 Modal\uFF08x.ai \u53D1\u4E1D\u7EBF + \u89C4\u5219\u5206\u680F\uFF09 */
.omnimux-inspiration-modal-backdrop {
  position: fixed;
  inset: 0;
  background: var(--omx-color-overlay, rgba(0,0,0,.60));
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
.omnimux-inspiration-modal-container {
  position: relative;
  display: flex;
  width: 100%;
  max-width: 980px;
  height: 80vh;
  max-height: 660px;
  border-radius: var(--omx-radius-lg, 16px);
  overflow: hidden;
  background: var(--omx-color-canvas-soft, #131313);
  border: 1px solid var(--omx-color-hairline, #242424);
  box-shadow: var(--omx-shadow-overlay, 0 8px 24px rgba(0,0,0,.48));
}
.omnimux-inspiration-modal-close {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid var(--omx-color-hairline, #242424);
  background: var(--omx-color-canvas-soft, #131313);
  color: var(--omx-color-ink-soft, #ebebeb);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: border-color var(--omx-motion-fast, 120ms) ease,
              color var(--omx-motion-fast, 120ms) ease;
}
.omnimux-inspiration-modal-close:hover {
  border-color: var(--omx-color-hairline-strong, #3d3d3d);
  color: var(--omx-color-ink, #ffffff);
}

/* \u5F39\u7A97\u5DE6\u5217\uFF1A\u89C6\u9891\u64AD\u653E\u533A\uFF089:16 \u5C45\u4E2D\u5305\u88F9\u5BB9\u5668\uFF09 */
.omnimux-inspiration-modal-left {
  flex: 1 1 58%;
  min-width: 300px;
  background: #000000;
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
  max-width: 330px;
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

/* \u5F39\u7A97\u53F3\u5217\uFF1A\u7F16\u8F91\u5F0F\u8BE6\u60C5\u4E0E AI \u62C6\u89E3 */
.omnimux-inspiration-modal-right {
  flex: 0 0 380px;
  width: 380px;
  background: var(--omx-color-canvas, #0a0a0a);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: var(--omx-space-xl, 24px);
  gap: var(--omx-space-lg, 16px);
  border-left: 1px solid var(--omx-color-hairline, #242424);
}
.omnimux-inspiration-modal-title {
  margin: 0;
  font: var(--omx-text-title-sm, 600 18px/28px var(--omx-font-sans));
  color: var(--omx-color-ink, #ffffff);
  letter-spacing: -0.2px;
}
.omnimux-inspiration-modal-creator {
  display: flex;
  align-items: center;
  gap: var(--omx-space-md, 12px);
}
.omnimux-inspiration-modal-avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: var(--omx-color-canvas-raised, #171717);
  border: 1px solid var(--omx-color-hairline, #242424);
  display: flex;
  align-items: center;
  justify-content: center;
  font: var(--omx-text-label, 500 13px/16px var(--omx-font-mono));
  color: var(--omx-color-ink, #ffffff);
}
.omnimux-inspiration-modal-handle {
  font: var(--omx-text-label, 500 13px/16px var(--omx-font-sans));
  color: var(--omx-color-ink-soft, #ebebeb);
}
.omnimux-inspiration-modal-link {
  display: inline-flex;
  align-items: center;
  gap: var(--omx-space-xs, 4px);
  font: var(--omx-text-label, 500 13px/16px var(--omx-font-sans));
  color: var(--omx-color-body, #b4b4b4);
  text-decoration: none;
  padding: var(--omx-space-xs, 4px) var(--omx-space-sm, 8px);
  border-radius: var(--omx-radius-pill, 9999px);
  border: 1px solid var(--omx-color-hairline, #242424);
  background: var(--omx-color-canvas-soft, #131313);
  align-self: flex-start;
  transition: border-color var(--omx-motion-fast, 120ms) ease,
              color var(--omx-motion-fast, 120ms) ease;
}
.omnimux-inspiration-modal-link:hover {
  border-color: var(--omx-color-hairline-strong, #3d3d3d);
  color: var(--omx-color-ink, #ffffff);
}
.omnimux-inspiration-modal-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--omx-space-xs, 4px);
}
.omnimux-inspiration-modal-tag {
  padding: var(--omx-space-2xs, 2px) var(--omx-space-sm, 8px);
  border-radius: var(--omx-radius-pill, 9999px);
  font: var(--omx-text-code, 400 12px/16px var(--omx-font-mono));
  border: 1px solid var(--omx-color-hairline, #242424);
  background: var(--omx-color-canvas-soft, #131313);
  color: var(--omx-color-muted, #7c7c7c);
}

/* AI \u7ED3\u6784\u62C6\u89E3: \u6781\u7B80\u7EAF\u5355\u8272\u6846 + \u7B49\u5BBD\u6807\u7B7E */
.omnimux-inspiration-modal-analysis {
  display: flex;
  flex-direction: column;
  gap: var(--omx-space-md, 12px);
  padding: var(--omx-space-md, 12px) var(--omx-space-lg, 16px);
  border-radius: var(--omx-radius-sm, 8px);
  background: var(--omx-color-canvas-soft, #131313);
  border: 1px solid var(--omx-color-hairline, #242424);
}
.omnimux-inspiration-analysis-item {
  display: flex;
  flex-direction: column;
  gap: var(--omx-space-xs, 4px);
}
.omnimux-inspiration-analysis-label {
  font: var(--omx-text-code, 400 11px/14px var(--omx-font-mono));
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--omx-color-muted, #7c7c7c);
}
.omnimux-inspiration-analysis-val {
  font: var(--omx-text-body-sm, 400 13px/18px var(--omx-font-sans));
  color: var(--omx-color-ink-soft, #ebebeb);
}

/* \u7A7A\u6001\u4E0E\u9AA8\u67B6\u5C4F */
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
  font: var(--omx-text-action, 500 14px/20px var(--omx-font-sans));
  cursor: pointer;
  transition: transform var(--omx-motion-fast, 120ms) ease;
}
.omnimux-inspiration-btn:active {
  transform: scale(0.98);
}
.omnimux-inspiration-skeleton {
  columns: 180px auto;
  column-gap: var(--omx-space-md, 12px);
  width: 100%;
}
.omnimux-inspiration-skel {
  break-inside: avoid;
  margin-bottom: var(--omx-space-md, 12px);
  height: 240px;
  border-radius: var(--omx-radius-sm, 8px);
  background: var(--omx-color-canvas-soft, #131313);
  border: 1px solid var(--omx-color-hairline, #242424);
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
var CACHE_KEY = "omnimux_inspiration_cache_v1";
function readPersistentCache() {
  if (typeof window === "undefined" || !window.localStorage) {
    return { items: [], total: 0 };
  }
  try {
    const raw = window.localStorage.getItem(CACHE_KEY);
    if (!raw) return { items: [], total: 0 };
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed.items) && typeof parsed.total === "number") {
      return { items: parsed.items, total: parsed.total };
    }
  } catch {
  }
  return { items: [], total: 0 };
}
function writePersistentCache(items, total) {
  if (typeof window === "undefined" || !window.localStorage) return;
  try {
    window.localStorage.setItem(CACHE_KEY, JSON.stringify({ items, total, time: Date.now() }));
  } catch {
  }
}
var initialCache = readPersistentCache();
var sessionCache = {
  phase: initialCache.items.length > 0 ? "ready" : "loading",
  items: initialCache.items,
  total: initialCache.total
};
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
    writePersistentCache(picked.items, picked.total);
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
function LoginGate({ t, onSuccess }) {
  const login = () => {
    const gate = typeof window !== "undefined" ? window.__omnimuxAuth : void 0;
    if (gate && typeof gate.ensureLogin === "function") {
      gate.ensureLogin({
        reason: t("needLogin"),
        forceVerify: true,
        onSuccess: () => {
          if (typeof onSuccess === "function") onSuccess();
        }
      });
      return;
    }
    if (typeof onSuccess === "function") onSuccess();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "omnimux-inspiration-gate", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: "omnimux-inspiration-empty-title", children: t("needLogin") }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "omnimux-inspiration-empty-text", children: t("needLoginHint") }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "omnimux-inspiration-btn", onClick: login, children: t("login") })
  ] });
}
function PureCoverCard({ row, t, onSelect }) {
  const title = String(row.title || row.source_url || row.id);
  const cover = pickCoverSrc(row);
  const [broken, setBroken] = (0, import_react2.useState)(!cover);
  (0, import_react2.useEffect)(() => {
    setBroken(!cover);
  }, [cover]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "article",
    {
      className: "omnimux-inspiration-card-pure",
      onClick: () => onSelect(row),
      role: "button",
      tabIndex: 0,
      onKeyDown: (e) => {
        if (e.key === "Enter" || e.key === " ") onSelect(row);
      },
      children: [
        broken ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "omnimux-inspiration-cover-fallback", "aria-hidden": "true", children: coverGlyph(title) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "omnimux-inspiration-card-overlay", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "omnimux-inspiration-badge-platform", children: "TikTok" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "omnimux-inspiration-overlay-play", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 5v14l11-7z" }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {})
        ] })
      ]
    }
  );
}
function InspirationModal({ row, t, onClose }) {
  if (!row) return null;
  const title = String(row.title || "TikTok \u7075\u611F");
  const analysis = row.analysis && typeof row.analysis === "object" ? row.analysis : {};
  const rawEmbed = analysis.embed_player_url || row.source_url;
  const embedUrl = resolveTikTokEmbedUrl(rawEmbed) || (row.source_url ? resolveTikTokEmbedUrl(row.source_url) : null);
  const cover = pickCoverSrc(row);
  const tags = Array.isArray(row.tags) ? row.tags : [];
  const creator = analysis.creator || { name: "TikTok Creator", handle: "tiktok" };
  (0, import_react2.useEffect)(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "omnimux-inspiration-modal-backdrop", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "omnimux-inspiration-modal-container", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "omnimux-inspiration-modal-close", onClick: onClose, "aria-label": "Close", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 6L6 18M6 6l12 12" }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "omnimux-inspiration-modal-left", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "omnimux-inspiration-modal-player-box", children: embedUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "iframe",
      {
        title,
        src: embedUrl,
        className: "omnimux-inspiration-player-frame",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        allowFullScreen: true
      }
    ) : cover ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: cover, alt: title, className: "omnimux-inspiration-modal-cover-bg" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "omnimux-inspiration-cover-fallback", children: coverGlyph(title) }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "omnimux-inspiration-modal-right", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "omnimux-inspiration-modal-creator", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "omnimux-inspiration-modal-avatar", children: (creator.name || creator.handle || "T").charAt(0).toUpperCase() }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "omnimux-inspiration-modal-handle", children: [
          "@",
          creator.handle || creator.name
        ] }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: "omnimux-inspiration-modal-title", children: title }),
      tags.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "omnimux-inspiration-modal-tags", children: tags.map((tag, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "omnimux-inspiration-modal-tag", children: [
        "#",
        tag
      ] }, idx)) }) : null,
      row.source_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "a",
        {
          className: "omnimux-inspiration-modal-link",
          href: row.source_url,
          target: "_blank",
          rel: "noreferrer",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("openSource") || "\u67E5\u770B TikTok \u539F\u6587" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", { width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" }) })
          ]
        }
      ) : null,
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "omnimux-inspiration-modal-analysis", children: [
        analysis.hook ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "omnimux-inspiration-analysis-item", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "omnimux-inspiration-analysis-label", children: "Hook \u9EC4\u91D1 3 \u79D2\u94A9\u5B50" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "omnimux-inspiration-analysis-val", children: analysis.hook })
        ] }) : null,
        Array.isArray(analysis.structure) && analysis.structure.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "omnimux-inspiration-analysis-item", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "omnimux-inspiration-analysis-label", children: "\u811A\u672C\u7ED3\u6784\u62C6\u89E3" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "omnimux-inspiration-analysis-val", children: analysis.structure.join(" \u2192 ") })
        ] }) : null,
        analysis.cta ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "omnimux-inspiration-analysis-item", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "omnimux-inspiration-analysis-label", children: "CTA \u8F6C\u5316\u5F15\u5BFC" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "omnimux-inspiration-analysis-val", children: analysis.cta })
        ] }) : null
      ] })
    ] })
  ] }) });
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
  const [selectedItem, setSelectedItem] = (0, import_react2.useState)(null);
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
  const tiktokItems = (0, import_react2.useMemo)(() => {
    return items.filter((row) => {
      const sUrl = typeof row.source_url === "string" ? row.source_url : "";
      const hasId = Boolean(resolveTikTokEmbedUrl(sUrl));
      return hasId || sUrl.includes("tiktok.com");
    });
  }, [items]);
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", { className: "omnimux-inspiration-select", value: sort, "aria-label": t("filter.sort"), onChange: (event) => {
        setSort(event.currentTarget.value);
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "hot", children: t("sort.hot") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "new", children: t("sort.new") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "fav", children: t("sort.fav") })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "omnimux-inspiration-count", children: t("count").replace("{n}", String(tiktokItems.length)) })
    ] }),
    phase === "loading" && tiktokItems.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "omnimux-inspiration-skeleton", "aria-busy": "true", children: Array.from({ length: 8 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "omnimux-inspiration-skel" }, i)) }) : null,
    phase === "need-login" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoginGate, { t, onSuccess: () => {
      void refresh();
    } }) : null,
    phase === "ready" && error && tiktokItems.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "omnimux-inspiration-error", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "omnimux-inspiration-empty-text", children: error === "disabled" ? t("error.disabled") : error || t("error.generic") }) }) : null,
    phase === "ready" && !error && tiktokItems.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyState, { t }) : null,
    tiktokItems.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "omnimux-inspiration-masonry", children: tiktokItems.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      PureCoverCard,
      {
        row,
        t,
        onSelect: (item) => setSelectedItem(item)
      },
      String(row.id)
    )) }) : null,
    selectedItem ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      InspirationModal,
      {
        row: selectedItem,
        t,
        onClose: () => setSelectedItem(null)
      }
    ) : null
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
