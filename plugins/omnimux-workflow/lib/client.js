window.__ModuleLoader__.load({
  id: "omnimux-workflow",
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
var import_react5 = require("react");

// src/client/locales.js
var zh = {
  "nav": "\u9879\u76EE",
  "stage.title": "\u5DE5\u4F5C\u6D41\u753B\u5E03",
  "stage.close": "\u5173\u95ED",
  "canvas.loading": "\u6B63\u5728\u52A0\u8F7D\u753B\u5E03\u2026",
  "canvas.loadFailed": "\u753B\u5E03\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002",
  "canvas.retry": "\u91CD\u8BD5",
  "projects.title": "\u9879\u76EE",
  "projects.subtitle": "\u7BA1\u7406\u4F60\u7684\u672C\u5730\u5DE5\u4F5C\u6D41\u9879\u76EE",
  "projects.newProject": "\u65B0\u5EFA\u9879\u76EE",
  "projects.close": "\u5173\u95ED",
  "projects.localTab": "\u672C\u5730\u9879\u76EE",
  "projects.searchPlaceholder": "\u641C\u7D22\u9879\u76EE\u2026",
  "projects.sortUpdated": "\u6309\u6700\u8FD1\u66F4\u65B0\u6392\u5E8F",
  "projects.empty": "\u8FD8\u6CA1\u6709\u9879\u76EE\uFF0C\u70B9\u51FB\u300C\u65B0\u5EFA\u9879\u76EE\u300D\u5F00\u59CB\u3002",
  "projects.emptySearch": "\u6CA1\u6709\u5339\u914D\u7684\u9879\u76EE\u3002",
  "projects.noWorkspace": "\u8BF7\u5148\u9009\u62E9\u4E00\u4E2A\u5DE5\u4F5C\u533A\u6587\u4EF6\u5939\u3002",
  "projects.genericError": "\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002",
  "projects.createFailed": "\u521B\u5EFA\u9879\u76EE\u5931\u8D25\uFF1A{error}",
  "projects.rename": "\u91CD\u547D\u540D",
  "projects.delete": "\u5220\u9664",
  "projects.renamePrompt": "\u9879\u76EE\u540D\u79F0",
  "projects.deleteConfirm": "\u786E\u5B9A\u5220\u9664\u300C{title}\u300D\u5417\uFF1F\u6587\u4EF6\u5939\u4F1A\u4FDD\u7559\u5728\u78C1\u76D8\u4E0A\u3002",
  "projects.dialog.title": "\u65B0\u5EFA\u672C\u5730\u9879\u76EE",
  "projects.dialog.nameLabel": "\u9879\u76EE\u540D\u79F0",
  "projects.dialog.namePlaceholder": "\u4F8B\u5982\uFF1A\u5BA3\u4F20\u7247",
  "projects.dialog.hint": "\u672C\u5730\u9879\u76EE\u4E0D\u4F1A\u81EA\u52A8\u4E0E\u5176\u4ED6\u8BBE\u5907\u6216\u7528\u6237\u5171\u4EAB",
  "projects.dialog.cancel": "\u53D6\u6D88",
  "projects.dialog.submit": "\u521B\u5EFA\u9879\u76EE",
  "details.canvasTab": "\u753B\u5E03",
  "details.toolTab": "\u5DE5\u5177\u8BE6\u60C5",
  "details.close": "\u5173\u95ED",
  "details.toolEmpty": "\u5DE5\u5177\u8BE6\u60C5\u5C06\u5728\u540E\u7EED\u7248\u672C\u4E2D\u63D0\u4F9B\u3002"
};
var en = {
  "nav": "Projects",
  "stage.title": "Workflow Canvas",
  "stage.close": "Close",
  "canvas.loading": "Loading canvas\u2026",
  "canvas.loadFailed": "Failed to load the canvas, please retry.",
  "canvas.retry": "Retry",
  "projects.title": "Projects",
  "projects.subtitle": "Manage your local workflow projects",
  "projects.newProject": "New Project",
  "projects.close": "Close",
  "projects.localTab": "Local projects",
  "projects.searchPlaceholder": "Search projects\u2026",
  "projects.sortUpdated": "Sorted by recent update",
  "projects.empty": 'No projects yet \u2014 click "New Project" to start.',
  "projects.emptySearch": "No matching projects.",
  "projects.noWorkspace": "Please select a workspace folder first.",
  "projects.genericError": "Operation failed, please retry.",
  "projects.createFailed": "Could not create the project: {error}",
  "projects.rename": "Rename",
  "projects.delete": "Delete",
  "projects.renamePrompt": "Project title",
  "projects.deleteConfirm": "Remove \u201C{title}\u201D from the library? The folder stays on disk.",
  "projects.dialog.title": "New local project",
  "projects.dialog.nameLabel": "Project name",
  "projects.dialog.namePlaceholder": "e.g. Promo film",
  "projects.dialog.hint": "Local projects are not shared with other devices or users",
  "projects.dialog.cancel": "Cancel",
  "projects.dialog.submit": "Create project",
  "details.canvasTab": "Canvas",
  "details.toolTab": "Tool details",
  "details.close": "Close",
  "details.toolEmpty": "Tool details will be available in a later version."
};
var NS = "dsh-workflow";

// src/client/stage-store.js
var PRODUCT_STAGE_EVENT = "dsh-product-stage";
var STAGE_ID = "omnimux-workflow";
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
var ICON = '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><circle cx="4" cy="4" r="2"/><circle cx="12" cy="8" r="2"/><circle cx="4" cy="12" r="2"/><path d="M5.8 4.9 10 7.1M10 8.9 5.8 11.1"/></svg>';
var STYLES = `
.omnimux-workflow-entry {
  box-sizing: border-box; display: flex; align-items: center; gap: 6px; position: relative;
  width: calc(100% - 8px); height: 32px; margin: 0 4px; padding: 0 8px;
  border: none; border-radius: 8px; background: transparent;
  color: var(--dsw-alias-label-primary, inherit);
  font: var(--dsw-font-s-14, inherit); font-size: 14px; line-height: 20px;
  cursor: pointer; text-align: left;
}
.omnimux-workflow-entry:hover { background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,.12)); }
.omnimux-workflow-entry[data-active="true"] { background: var(--dsw-alias-interactive-bg-active, rgba(128,128,128,.18)); font-weight: 500; }
.omnimux-workflow-entry-icon { flex: none; display: inline-flex; width: 14px; height: 14px; align-items: center; justify-content: center; }
.omnimux-workflow-entry svg { display: block; width: 14px; height: 14px; }
.omnimux-workflow-entry-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 20px; }
`;
function paintLabel(entry, label) {
  entry.setAttribute("aria-label", label);
  const node = entry.querySelector(".omnimux-workflow-entry-label");
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
  entry.dataset.dshOmnimuxWorkflowEntry = "";
  entry.className = "omnimux-workflow-entry";
  entry.innerHTML = `<span class="omnimux-workflow-entry-icon">${ICON}</span><span class="omnimux-workflow-entry-label"></span>`;
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
    id: "omnimux-workflow-entry",
    rank: 5,
    styles: STYLES,
    styleId: "omnimux-workflow-entry-styles",
    create: () => entry
  });
  return () => {
    unregister();
    unsubscribeStage();
    unsubscribeLocale();
  };
}

// src/client/api.js
async function workflowRequest(path, opts = {}) {
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
async function fetchCanvasHash() {
  try {
    const result = await workflowRequest("/omnimux-workflow/api/manifest");
    const hash = result.body?.canvasHash;
    return typeof hash === "string" ? hash : null;
  } catch {
    return null;
  }
}
function listProjects() {
  return workflowRequest("/omnimux-workflow/api/projects");
}
function createProject(title, sessionId = null, projectRoot) {
  return workflowRequest("/omnimux-workflow/api/projects", {
    method: "POST",
    body: {
      title,
      sessionId,
      ...typeof projectRoot === "string" && projectRoot !== "" ? { projectRoot } : {}
    }
  });
}
function renameProject(id, title) {
  return workflowRequest(`/omnimux-workflow/api/projects/${id}`, {
    method: "PATCH",
    body: { title }
  });
}
function bindProjectSession(id, sessionId) {
  return workflowRequest(`/omnimux-workflow/api/projects/${id}`, {
    method: "PATCH",
    body: { sessionId }
  });
}
function deleteProject(id) {
  return workflowRequest(`/omnimux-workflow/api/projects/${id}`, {
    method: "DELETE"
  });
}

// src/client/projects/cwd.js
function normalizeWorkspacePath(path) {
  const value = String(path);
  if (value === "/" || value === "\\") return value;
  return value.replace(/[/\\]+$/u, "");
}
function resolveWorkspaceForCwd(cwd, workspaces) {
  if (typeof cwd !== "string" || cwd === "") return void 0;
  try {
    const items = workspaces?.list?.getSnapshot?.()?.items;
    if (!Array.isArray(items)) return void 0;
    const needle = normalizeWorkspacePath(cwd);
    const hit = items.find((item) => {
      const path = item?.path;
      return path !== void 0 && path !== null && String(path) !== "" && normalizeWorkspacePath(path) === needle;
    });
    const id = hit?.workspaceId;
    if (id === void 0 || id === null || String(id) === "") return void 0;
    return String(id);
  } catch {
    return void 0;
  }
}

// src/client/projects/limits.js
var MAX_PROJECT_TITLE_LENGTH = 200;

// src/client/projects/folderName.js
function sanitizeFolderName(title) {
  const trimmed = String(title ?? "").trim();
  const replaced = trimmed.replace(/[<>:"/\\|?*\u0000-\u001f]/gu, "_").replace(/[. ]+$/u, "");
  return replaced.replace(/^\.+$/u, "");
}
function validateProjectTitle(raw) {
  if (typeof raw !== "string" || raw.trim() === "") {
    return { ok: false, error: "title-required" };
  }
  const title = raw.trim();
  if (title.length > MAX_PROJECT_TITLE_LENGTH) {
    return { ok: false, error: "title-too-long" };
  }
  const folderName = sanitizeFolderName(title);
  if (folderName === "") return { ok: false, error: "title-invalid" };
  return { ok: true, title, folderName };
}

// src/client/projects/projectCanvas.js
var CANVAS_TAB_ID = "omnimux-workflow:canvas";
var CANVAS_SENTINEL_PATH = "omnimux-workflow:canvas";
var PROJECT_CANVAS_RATIO = 0.85;
var LEGACY_PROJECT_CANVAS_RATIO = 0.7;
var PROJECT_CANVAS_MIN_PX = 280;
var SIDEBAR_LAYOUT_STORAGE_PREFIX = "dsh-sidebar:v1";
var SIDEBAR_FACTORY_WIDTH_PERCENT = 35;
var APPLIED_RATIO_SESSIONS = /* @__PURE__ */ new Set();
var boundService = null;
function bindBetterSidebar(service) {
  boundService = service || null;
}
function getBetterSidebar(ctx) {
  if (ctx && typeof ctx === "object") {
    try {
      if (ctx.betterSidebar) return ctx.betterSidebar;
    } catch {
    }
  }
  return boundService || null;
}
async function waitForBetterSidebar(ctx, timeoutMs = 4e3) {
  const first = getBetterSidebar(ctx);
  if (first && typeof first.openTab === "function") return first;
  if (timeoutMs <= 0) return first;
  const started = Date.now();
  while (Date.now() - started <= timeoutMs) {
    const service = getBetterSidebar(ctx);
    if (service && typeof service.openTab === "function") return service;
    await waitMs(50);
  }
  return getBetterSidebar(ctx);
}
function collectTabs(node) {
  if (!node || typeof node !== "object") return [];
  if (node.kind === "leaf") return Array.isArray(node.tabs) ? node.tabs : [];
  if (!Array.isArray(node.children)) return [];
  return node.children.flatMap(collectTabs);
}
function isSeedFilesTab(tab) {
  return tab?.type === "editor" && (tab.path === void 0 || tab.path === "");
}
function waitMs(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
function readStoredLayout(sessionId) {
  if (typeof localStorage === "undefined" || !sessionId) return null;
  try {
    const raw = localStorage.getItem(`${SIDEBAR_LAYOUT_STORAGE_PREFIX}:${sessionId}`);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : null;
  } catch {
    return null;
  }
}
function writeStoredLayout(sessionId, state) {
  if (typeof localStorage === "undefined" || !sessionId || !state) return false;
  try {
    localStorage.setItem(`${SIDEBAR_LAYOUT_STORAGE_PREFIX}:${sessionId}`, JSON.stringify(state));
    return true;
  } catch {
    return false;
  }
}
function viewportWidth() {
  return typeof window === "undefined" ? 0 : window.innerWidth || 0;
}
function conversationColumnWidth() {
  if (typeof document === "undefined") return 0;
  const node = document.querySelector('#root [data-slot="conversation"]')?.parentElement || document.querySelector('#root [data-pane="conversation"]');
  const width = node?.getBoundingClientRect?.().width;
  return typeof width === "number" && Number.isFinite(width) ? width : 0;
}
function currentPanelWidth(state) {
  return typeof state?.width === "number" && Number.isFinite(state.width) ? Math.max(0, state.width) : 0;
}
function envConversationWidth(env) {
  return typeof env.conversationWidth === "number" ? env.conversationWidth : conversationColumnWidth();
}
function envViewportWidth(env) {
  return typeof env.viewportWidth === "number" ? env.viewportWidth : viewportWidth();
}
function officialSessionSidebarWidth(env = {}) {
  if (typeof env.officialSidebarWidth === "number" && Number.isFinite(env.officialSidebarWidth)) {
    return Math.max(0, env.officialSidebarWidth);
  }
  if (typeof document === "undefined") return 0;
  const column = document.querySelector('[data-pane="sidebar"], [class*="sidebarCol"]');
  const width = column instanceof HTMLElement ? column.getBoundingClientRect().width : 0;
  return typeof width === "number" && Number.isFinite(width) ? width : 0;
}
function projectCanvasUsableWidthPx(state, env = {}) {
  const viewport = envViewportWidth(env);
  const official = officialSessionSidebarWidth(env);
  if (viewport > 0 && official > 0) return Math.max(0, viewport - official);
  const conversation = envConversationWidth(env);
  const extra = state?.panelOpen === false ? 0 : currentPanelWidth(state);
  return conversation > 0 ? conversation + extra : 0;
}
function factorySidebarWidthPx(prefs, env = {}) {
  const viewport = typeof env.viewportWidth === "number" ? env.viewportWidth : viewportWidth();
  const percent = typeof prefs?.defaultWidthPercent === "number" && Number.isFinite(prefs.defaultWidthPercent) ? prefs.defaultWidthPercent : SIDEBAR_FACTORY_WIDTH_PERCENT;
  if (!(viewport > 0)) return PROJECT_CANVAS_MIN_PX;
  return Math.max(PROJECT_CANVAS_MIN_PX, Math.round(viewport * percent / 100));
}
function projectCanvasWidthPx(state, env = {}) {
  const viewport = envViewportWidth(env);
  const max = viewport > 0 ? Math.max(PROJECT_CANVAS_MIN_PX, viewport) : PROJECT_CANVAS_MIN_PX;
  const usable = projectCanvasUsableWidthPx(state, env);
  const raw = usable > 0 ? Math.round(usable * PROJECT_CANVAS_RATIO) : viewport > 0 ? Math.round(viewport * PROJECT_CANVAS_RATIO) : PROJECT_CANVAS_MIN_PX;
  return Math.min(max, Math.max(PROJECT_CANVAS_MIN_PX, raw));
}
function liveWidth(state) {
  if (typeof state?.width === "number" && Number.isFinite(state.width)) return state.width;
  return null;
}
function leftoverHalfSidebarWidthPx(state, env = {}) {
  const usable = projectCanvasUsableWidthPx(state, env);
  if (usable > 0) return Math.max(PROJECT_CANVAS_MIN_PX, Math.round(usable * 0.5));
  const viewport = envViewportWidth(env);
  if (viewport > 0) return Math.max(PROJECT_CANVAS_MIN_PX, Math.round(viewport * 0.5));
  return PROJECT_CANVAS_MIN_PX;
}
function nearPx(width, target) {
  return Math.abs(width - target) <= 24;
}
function legacyProjectCanvasWidthPx(state, env = {}) {
  const viewport = envViewportWidth(env);
  const usable = projectCanvasUsableWidthPx(state, env);
  if (usable > 0) return Math.round(usable * LEGACY_PROJECT_CANVAS_RATIO);
  if (viewport > 0) return Math.round(viewport * LEGACY_PROJECT_CANVAS_RATIO);
  return PROJECT_CANVAS_MIN_PX;
}
function shouldApplyProjectCanvasRatio(sessionId, state, prefs, env = {}) {
  if (!sessionId || !state) return false;
  if (APPLIED_RATIO_SESSIONS.has(sessionId)) return false;
  const width = liveWidth(state);
  if (typeof width !== "number") return true;
  const expected = projectCanvasWidthPx(state, env);
  if (nearPx(width, expected)) return true;
  if (nearPx(width, legacyProjectCanvasWidthPx(state, env))) return true;
  const factoryViewport = factorySidebarWidthPx(prefs, env);
  if (nearPx(width, factoryViewport)) return true;
  const usable = projectCanvasUsableWidthPx(state, env);
  const percent = typeof prefs?.defaultWidthPercent === "number" && Number.isFinite(prefs.defaultWidthPercent) ? prefs.defaultWidthPercent : SIDEBAR_FACTORY_WIDTH_PERCENT;
  const factoryUsable = usable > 0 ? Math.max(PROJECT_CANVAS_MIN_PX, Math.round(usable * percent / 100)) : factoryViewport;
  if (nearPx(width, factoryUsable)) return true;
  if (nearPx(width, leftoverHalfSidebarWidthPx(state, env))) return true;
  const viewport = envViewportWidth(env);
  if (viewport > 0 && nearPx(width, Math.max(PROJECT_CANVAS_MIN_PX, Math.round(viewport * 0.5)))) return true;
  const conversation = envConversationWidth(env);
  if (conversation > 0 && usable > 0 && conversation / usable < 0.22) return true;
  return false;
}
function applyProjectCanvasRatio(service, sessionId, store = null, env = {}) {
  const snapshot = (typeof store?.getSnapshot === "function" ? store.getSnapshot() : null) || service?.getSnapshot?.();
  const state = snapshot?.state;
  const prefs = typeof store?.getPrefs === "function" ? store.getPrefs() : void 0;
  if (!shouldApplyProjectCanvasRatio(sessionId, state, prefs, env)) return null;
  const conversation = envConversationWidth(env);
  const viewport = envViewportWidth(env);
  const official = officialSessionSidebarWidth(env);
  if (conversation <= 0 && !(viewport > 0 && official > 0)) return void 0;
  const current = liveWidth(state) || 0;
  if (official <= 0 && state.panelOpen !== false && current > 0 && viewport > 0 && conversation + current > viewport) {
    return void 0;
  }
  const nextWidth = projectCanvasWidthPx(state, env);
  const canReduce = snapshot?.sessionId === sessionId && typeof store?.reduce === "function";
  if (typeof state.width === "number" && Math.abs(state.width - nextWidth) < 1) {
    if (!canReduce) return void 0;
    APPLIED_RATIO_SESSIONS.add(sessionId);
    return nextWidth;
  }
  if (canReduce) {
    store.reduce((currentState) => typeof currentState?.width === "number" && Math.abs(currentState.width - nextWidth) < 1 ? currentState : { ...currentState, width: nextWidth });
    APPLIED_RATIO_SESSIONS.add(sessionId);
    return nextWidth;
  }
  const stored = readStoredLayout(sessionId) || {};
  writeStoredLayout(sessionId, { ...stored, ...state, width: nextWidth });
  return void 0;
}
async function waitForSidebarSession(service, sessionId, timeoutMs = 4e3) {
  if (!service || !sessionId || typeof service.getSnapshot !== "function") return false;
  if (service.getSnapshot()?.sessionId === sessionId) return true;
  if (timeoutMs <= 0) return false;
  const started = Date.now();
  while (Date.now() - started <= timeoutMs) {
    if (service.getSnapshot()?.sessionId === sessionId) return true;
    await waitMs(50);
  }
  return service.getSnapshot()?.sessionId === sessionId;
}
async function waitForCanvasTab(service, timeoutMs = 4e3) {
  if (!service || typeof service.getTab !== "function") return false;
  if (service.getTab(CANVAS_TAB_ID)) return true;
  if (timeoutMs <= 0) return false;
  const started = Date.now();
  while (Date.now() - started <= timeoutMs) {
    if (service.getTab(CANVAS_TAB_ID)) return true;
    await waitMs(50);
  }
  return Boolean(service.getTab(CANVAS_TAB_ID));
}
async function activateProjectCanvas(ctx, opts = {}) {
  if (typeof ctx?.layout?.closeDetails === "function") {
    ctx.layout.closeDetails();
  }
  const timeoutMs = opts.timeoutMs ?? 4e3;
  const service = await waitForBetterSidebar(ctx, timeoutMs);
  if (!service || typeof service.openTab !== "function") return false;
  const registered = await waitForCanvasTab(service, timeoutMs);
  if (!registered) return false;
  const sessionId = opts.sessionId;
  const cwd = opts.cwd;
  const scope = sessionId ? { sessionId, ...cwd ? { cwd } : {} } : void 0;
  const ready = sessionId ? await waitForSidebarSession(service, sessionId, timeoutMs) : true;
  const openScope = ready ? scope : void 0;
  const state = service.getSnapshot?.()?.state;
  if (state) {
    const tabs = collectTabs(state.splits).concat(collectTabs(state.bottomSplits));
    for (const tab of tabs) {
      if (isSeedFilesTab(tab) && tab.id && tab.id !== CANVAS_TAB_ID) {
        service.closeTab(tab.id, openScope);
      }
    }
  }
  const title = typeof ctx.t === "function" ? ctx.t("details.canvasTab") : "\u753B\u5E03";
  service.openTab({
    type: CANVAS_TAB_ID,
    id: CANVAS_TAB_ID,
    title,
    path: CANVAS_SENTINEL_PATH
  }, openScope);
  applyProjectCanvasRatio(service, sessionId);
  return true;
}

// src/client/projects/newProject.js
function dismissProductStage(stage) {
  try {
    stage?.set?.(false);
  } catch {
  }
  const html = typeof document !== "undefined" ? document.documentElement : null;
  if (html?.dataset?.dshProductStage) {
    delete html.dataset.dshProductStage;
  }
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("dsh-product-stage", { detail: { id: "" } }));
  }
}
async function createProjectSession(sessions, workspaces, projectRoot) {
  if (typeof projectRoot !== "string" || projectRoot.trim() === "") {
    return { ok: false, error: "no-workspace" };
  }
  if (!workspaces || typeof workspaces.create !== "function") {
    return { ok: false, error: "no-workspace" };
  }
  const created = await workspaces.create({ path: projectRoot });
  const workspaceId = created?.workspaceId !== void 0 && created?.workspaceId !== null ? String(created.workspaceId) : resolveWorkspaceForCwd(projectRoot, workspaces);
  if (!workspaceId) return { ok: false, error: "no-workspace" };
  const sessionId = await sessions.create({ workspaceId });
  return { ok: true, cwd: projectRoot, workspaceId, sessionId };
}
function errorText(value) {
  if (!value) return "create-failed";
  if (typeof value === "string") return value;
  return String(value);
}
async function runNewProject(ctx, opts = {}) {
  const title = typeof opts.title === "string" ? opts.title : "";
  const validated = validateProjectTitle(title);
  if (!validated.ok) return { ok: false, error: validated.error };
  const seeded = await createProject(validated.title, null);
  if (!seeded.ok || !seeded.body?.project) {
    return { ok: false, error: errorText(seeded.body?.error || seeded.body?.message || seeded.status) };
  }
  const projectRoot = typeof seeded.body.project.path === "string" ? seeded.body.project.path : "";
  if (projectRoot === "") {
    return { ok: false, error: "invalid-project-root" };
  }
  const project = { ...seeded.body.project, path: projectRoot };
  try {
    const session = await createProjectSession(ctx.sessions, ctx.workspaces, projectRoot);
    if (!session.ok) return session;
    await bindProjectSession(project.id, session.sessionId);
    dismissProductStage(ctx.stage);
    ctx.sessions.open(session.sessionId);
    await activateProjectCanvas(ctx, { sessionId: session.sessionId, cwd: projectRoot });
    return { ok: true, project: { ...project, sessionId: session.sessionId, path: projectRoot } };
  } catch (error) {
    return { ok: false, error: error instanceof Error ? error.message : String(error) };
  }
}

// src/client/projects/promptNewProjectName.js
function css(el, styles) {
  Object.assign(el.style, styles);
}
function formatCreateError(error, t) {
  const code = String(error || "");
  if (code === "no-workspace") return t("projects.noWorkspace");
  if (code === "title-required" || code === "title-invalid" || code === "title-too-long") {
    return t("projects.genericError");
  }
  return t("projects.createFailed").replace("{error}", code);
}
function promptNewProjectName(t, opts = {}) {
  return new Promise((resolve) => {
    const overlay2 = document.createElement("div");
    overlay2.dataset.omnimuxNewLocalProject = "";
    overlay2.setAttribute("role", "presentation");
    css(overlay2, {
      position: "fixed",
      inset: "0",
      zIndex: "320",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--dsw-alias-bg-mask-1)"
    });
    const sheet2 = document.createElement("div");
    sheet2.setAttribute("role", "dialog");
    sheet2.setAttribute("aria-modal", "true");
    sheet2.setAttribute("aria-labelledby", "omnimux-new-local-project-title");
    css(sheet2, {
      width: "420px",
      maxWidth: "calc(100vw - 48px)",
      overflow: "auto",
      display: "flex",
      flexDirection: "column",
      background: "var(--dsw-alias-bg-base)",
      color: "var(--dsw-alias-label-primary)",
      borderRadius: "16px",
      border: "1px solid var(--dsw-alias-border-l2)"
    });
    const header = document.createElement("div");
    css(header, { display: "flex", alignItems: "center", gap: "8px", padding: "16px 20px 8px" });
    const titleEl = document.createElement("h2");
    titleEl.id = "omnimux-new-local-project-title";
    titleEl.textContent = t("projects.dialog.title");
    css(titleEl, { margin: "0", flex: "1", fontSize: "18px", fontWeight: "500", lineHeight: "28px" });
    const closeBtn = document.createElement("button");
    closeBtn.type = "button";
    closeBtn.setAttribute("aria-label", t("projects.close"));
    closeBtn.textContent = "\xD7";
    css(closeBtn, {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      width: "28px",
      height: "28px",
      borderRadius: "8px",
      color: "inherit",
      fontSize: "18px"
    });
    header.append(titleEl, closeBtn);
    const body = document.createElement("div");
    css(body, { padding: "0 20px 12px", display: "flex", flexDirection: "column", gap: "8px" });
    const label = document.createElement("label");
    label.htmlFor = "omnimux-new-local-project-name";
    label.textContent = t("projects.dialog.nameLabel");
    css(label, { fontSize: "13px", color: "var(--dsw-alias-label-secondary)" });
    const input = document.createElement("input");
    input.id = "omnimux-new-local-project-name";
    input.maxLength = MAX_PROJECT_TITLE_LENGTH;
    input.placeholder = t("projects.dialog.namePlaceholder");
    css(input, {
      width: "100%",
      border: "1px solid var(--dsw-alias-border-l2)",
      borderRadius: "8px",
      padding: "8px 10px",
      fontSize: "13px",
      color: "inherit",
      background: "transparent",
      boxSizing: "border-box"
    });
    const hint = document.createElement("p");
    hint.textContent = t("projects.dialog.hint");
    css(hint, { margin: "0", fontSize: "12px", lineHeight: "18px", color: "var(--dsw-alias-label-tertiary)" });
    const errorEl = document.createElement("p");
    css(errorEl, { margin: "0", fontSize: "12px", color: "var(--dsw-alias-label-error, #c00)", display: "none" });
    body.append(label, input, hint, errorEl);
    const footer = document.createElement("div");
    css(footer, { display: "flex", justifyContent: "flex-end", gap: "8px", padding: "10px 20px 16px" });
    const cancelBtn = document.createElement("button");
    cancelBtn.type = "button";
    cancelBtn.textContent = t("projects.dialog.cancel");
    css(cancelBtn, {
      border: "1px solid var(--dsw-alias-border-l2)",
      background: "transparent",
      color: "inherit",
      borderRadius: "999px",
      padding: "8px 16px",
      fontSize: "14px",
      cursor: "pointer"
    });
    const submitBtn = document.createElement("button");
    submitBtn.type = "button";
    submitBtn.textContent = t("projects.dialog.submit");
    submitBtn.disabled = true;
    let busy = false;
    const paintSubmit = () => {
      const ok = !busy && input.value.trim() !== "" && input.value.trim().length <= MAX_PROJECT_TITLE_LENGTH;
      submitBtn.disabled = !ok;
      css(submitBtn, {
        border: "none",
        background: ok ? "var(--dsw-alias-button-primary-fill)" : "var(--dsw-alias-border-l2)",
        color: "var(--dsw-alias-label-primary-foreground)",
        borderRadius: "999px",
        padding: "8px 16px",
        fontSize: "14px",
        fontWeight: "500",
        cursor: ok ? "pointer" : "default",
        opacity: busy ? "0.7" : "1"
      });
      input.disabled = busy;
      cancelBtn.disabled = busy;
      css(cancelBtn, { cursor: busy ? "default" : "pointer" });
    };
    paintSubmit();
    footer.append(cancelBtn, submitBtn);
    sheet2.append(header, body, footer);
    overlay2.append(sheet2);
    let settled = false;
    const finish = (value) => {
      if (settled) return;
      settled = true;
      overlay2.remove();
      resolve(value);
    };
    const setError = (text) => {
      if (!text) {
        errorEl.textContent = "";
        errorEl.style.display = "none";
        return;
      }
      errorEl.textContent = text;
      errorEl.style.display = "block";
    };
    const runSubmit = async () => {
      const title = input.value.trim();
      if (busy || title === "" || title.length > MAX_PROJECT_TITLE_LENGTH) return;
      if (typeof opts.submit !== "function") {
        finish(title);
        return;
      }
      busy = true;
      setError("");
      paintSubmit();
      try {
        const result = await opts.submit(title);
        if (result?.ok) {
          finish(title);
          return;
        }
        setError(formatCreateError(result?.error, t));
      } catch (error) {
        setError(formatCreateError(error instanceof Error ? error.message : String(error), t));
      } finally {
        busy = false;
        paintSubmit();
      }
    };
    overlay2.addEventListener("mousedown", (event) => {
      if (event.target === overlay2 && !busy) finish(null);
    });
    sheet2.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !busy) {
        event.preventDefault();
        finish(null);
      }
      if (event.key === "Enter" && !submitBtn.disabled) {
        event.preventDefault();
        void runSubmit();
      }
    });
    closeBtn.addEventListener("click", () => {
      if (!busy) finish(null);
    });
    cancelBtn.addEventListener("click", () => {
      if (!busy) finish(null);
    });
    submitBtn.addEventListener("click", () => {
      void runSubmit();
    });
    input.addEventListener("input", () => {
      setError("");
      paintSubmit();
    });
    document.body.appendChild(overlay2);
    input.focus();
  });
}

// src/client/projects/sidebar-new-project.js
var ICON2 = '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M8 3v10M3 8h10"/></svg>';
var STYLES2 = `
.omnimux-new-project-entry {
  box-sizing: border-box; display: flex; align-items: center; justify-content: center; gap: 6px;
  height: 38px; padding: 8px 16px;
  border: 1px solid var(--dsw-alias-border-l2, currentColor); border-radius: 12px;
  background: transparent; color: var(--dsw-alias-label-primary, inherit);
  font-size: 14px; font-weight: 500; line-height: 22px; cursor: pointer;
  overflow: hidden; white-space: nowrap;
}
.omnimux-new-project-entry:hover { background: var(--dsw-alias-button-floating-hover, rgba(128,128,128,.12)); }
.omnimux-new-project-entry-icon { flex: none; display: inline-flex; width: 14px; height: 14px; align-items: center; justify-content: center; }
.omnimux-new-project-entry svg { display: block; width: 14px; height: 14px; }
.omnimux-new-project-entry-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
`;
function paintLabel2(entry, label) {
  entry.setAttribute("aria-label", label);
  const node = entry.querySelector(".omnimux-new-project-entry-label");
  if (node) node.textContent = label;
}
function registerWhenReady2(row) {
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
function mountNewProjectEntry(deps, t, locale) {
  const entry = document.createElement("button");
  entry.type = "button";
  entry.dataset.dshOmnimuxNewProjectEntry = "";
  entry.className = "omnimux-new-project-entry";
  entry.innerHTML = `<span class="omnimux-new-project-entry-icon">${ICON2}</span><span class="omnimux-new-project-entry-label"></span>`;
  paintLabel2(entry, t("projects.newProject"));
  entry.addEventListener("click", () => {
    void promptNewProjectName(t, {
      submit: (title) => runNewProject(deps, { title })
    });
  });
  const paint = () => {
    paintLabel2(entry, t("projects.newProject"));
  };
  const unsubscribeLocale = typeof locale?.subscribe === "function" ? locale.subscribe(paint) : () => {
  };
  const unregister = registerWhenReady2({
    id: "omnimux-new-project-entry",
    kind: "inline",
    styles: STYLES2,
    styleId: "omnimux-new-project-entry-styles",
    create: () => entry
  });
  return () => {
    unregister();
    unsubscribeLocale();
  };
}

// src/client/projects/ProjectLibraryPage.jsx
var import_react2 = require("react");
var import_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");

// src/client/projects/NewLocalProjectDialog.jsx
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var overlay = {
  position: "fixed",
  inset: 0,
  zIndex: 320,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "var(--dsw-alias-bg-mask-1)"
};
var sheet = {
  width: 420,
  maxWidth: "calc(100vw - 48px)",
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  background: "var(--dsw-alias-bg-base)",
  color: "var(--dsw-alias-label-primary)",
  borderRadius: 16,
  border: "1px solid var(--dsw-alias-border-l2)"
};
var field = {
  width: "100%",
  border: "1px solid var(--dsw-alias-border-l2)",
  borderRadius: 8,
  padding: "8px 10px",
  fontSize: 13,
  color: "inherit",
  background: "transparent",
  boxSizing: "border-box"
};
var ghostButton = {
  border: "1px solid var(--dsw-alias-border-l2)",
  background: "transparent",
  color: "inherit",
  borderRadius: 999,
  padding: "8px 16px",
  fontSize: 14,
  cursor: "pointer"
};
function NewLocalProjectDialog({ t, busy = false, error, onCancel, onSubmit }) {
  const nameRef = (0, import_react.useRef)(null);
  const [name2, setName] = (0, import_react.useState)("");
  (0, import_react.useEffect)(() => {
    nameRef.current?.focus();
  }, []);
  const trimmed = name2.trim();
  const canSubmit = trimmed !== "" && trimmed.length <= MAX_PROJECT_TITLE_LENGTH && !busy;
  const submit = () => {
    if (!canSubmit) return;
    onSubmit(trimmed);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      style: overlay,
      onMouseDown: (event) => {
        if (event.target === event.currentTarget && !busy) onCancel();
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "div",
        {
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": "omnimux-new-local-project-title",
          style: sheet,
          onKeyDown: (event) => {
            if (event.key === "Escape" && !busy) {
              event.preventDefault();
              onCancel();
            }
            if (event.key === "Enter" && canSubmit) {
              event.preventDefault();
              submit();
            }
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: 8, padding: "16px 20px 8px" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "h2",
                {
                  id: "omnimux-new-local-project-title",
                  style: { margin: 0, flex: 1, fontSize: 18, fontWeight: 500, lineHeight: "28px" },
                  children: t("projects.dialog.title")
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "button",
                {
                  type: "button",
                  "aria-label": t("projects.close"),
                  onClick: () => {
                    if (!busy) onCancel();
                  },
                  style: {
                    border: "none",
                    background: "transparent",
                    cursor: busy ? "default" : "pointer",
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    color: "inherit",
                    fontSize: 18
                  },
                  children: "\xD7"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { padding: "0 20px 12px", display: "flex", flexDirection: "column", gap: 8 }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", { htmlFor: "omnimux-new-local-project-name", style: { fontSize: 13, color: "var(--dsw-alias-label-secondary)" }, children: t("projects.dialog.nameLabel") }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "input",
                {
                  id: "omnimux-new-local-project-name",
                  ref: nameRef,
                  value: name2,
                  maxLength: MAX_PROJECT_TITLE_LENGTH,
                  placeholder: t("projects.dialog.namePlaceholder"),
                  disabled: busy,
                  onChange: (event) => {
                    setName(event.target.value);
                  },
                  style: field
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { style: { margin: 0, fontSize: 12, lineHeight: "18px", color: "var(--dsw-alias-label-tertiary)" }, children: t("projects.dialog.hint") }),
              error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { style: { margin: 0, fontSize: 12, color: "var(--dsw-alias-label-error)" }, children: error }) : null
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", justifyContent: "flex-end", gap: 8, padding: "10px 20px 16px" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", disabled: busy, onClick: onCancel, style: ghostButton, children: t("projects.dialog.cancel") }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "button",
                {
                  type: "button",
                  disabled: !canSubmit,
                  onClick: submit,
                  style: {
                    border: "none",
                    background: canSubmit ? "var(--dsw-alias-button-primary-fill)" : "var(--dsw-alias-border-l2)",
                    color: "var(--dsw-alias-label-primary-foreground)",
                    borderRadius: 999,
                    padding: "8px 16px",
                    fontSize: 14,
                    fontWeight: 500,
                    cursor: canSubmit ? "pointer" : "default"
                  },
                  children: t("projects.dialog.submit")
                }
              )
            ] })
          ]
        }
      )
    }
  );
}

// src/client/projects/ProjectLibraryPage.jsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var chromeButton = {
  border: "1px solid var(--dsw-alias-border, currentColor)",
  background: "transparent",
  color: "inherit",
  borderRadius: 8,
  cursor: "pointer",
  fontSize: 13,
  lineHeight: "20px",
  padding: "5px 12px"
};
function errText(result, t) {
  const code = String(result?.body?.error ?? "");
  if (code === "no-workspace") return t("projects.noWorkspace");
  return String(result?.body?.message || result?.body?.error || result?.status || t("projects.genericError"));
}
function ProjectLibraryPage({ t, stage, locale, sessions, workspaces, layout, betterSidebar }) {
  const open = (0, import_react2.useSyncExternalStore)(
    stage ? stage.subscribe : () => () => {
    },
    stage ? stage.getSnapshot : () => false
  );
  const [box, setBox] = (0, import_react2.useState)(() => ({ top: 0, left: 0, width: 0, height: 0 }));
  const [projects, setProjects] = (0, import_react2.useState)([]);
  const [query, setQuery] = (0, import_react2.useState)("");
  const [error, setError] = (0, import_react2.useState)("");
  const [busy, setBusy] = (0, import_react2.useState)(false);
  const [dialogOpen, setDialogOpen] = (0, import_react2.useState)(false);
  (0, import_react2.useLayoutEffect)(() => {
    if (!open) return void 0;
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
  const refresh = (0, import_react2.useCallback)(async () => {
    const result = await listProjects();
    if (!result.ok) {
      setError(errText(result, t));
      return;
    }
    setError("");
    setProjects(Array.isArray(result.body?.projects) ? result.body.projects : []);
  }, [t]);
  (0, import_react2.useEffect)(() => {
    if (!open) return void 0;
    void refresh();
  }, [open, refresh]);
  const openProject = (0, import_react2.useCallback)(async (project) => {
    const projectRoot = typeof project.path === "string" ? project.path : "";
    if (!projectRoot) {
      setError(t("projects.genericError"));
      return;
    }
    if (project.sessionId) {
      dismissProductStage(stage);
      sessions.open(project.sessionId);
      await activateProjectCanvas({ layout, betterSidebar, t }, { sessionId: project.sessionId, cwd: projectRoot });
      return;
    }
    const created = await createProjectSession(sessions, workspaces, projectRoot);
    if (!created.ok) {
      setError(t("projects.noWorkspace"));
      return;
    }
    await bindProjectSession(project.id, created.sessionId);
    dismissProductStage(stage);
    sessions.open(created.sessionId);
    await activateProjectCanvas({ layout, betterSidebar, t }, { sessionId: created.sessionId, cwd: created.cwd });
  }, [sessions, workspaces, layout, betterSidebar, t, stage]);
  const handleNew = (0, import_react2.useCallback)(() => {
    setError("");
    setDialogOpen(true);
  }, []);
  const handleDialogSubmit = (0, import_react2.useCallback)(async (title) => {
    setBusy(true);
    setError("");
    const result = await runNewProject({ sessions, workspaces, layout, betterSidebar, t, stage }, { title });
    setBusy(false);
    if (!result.ok) {
      setError(result.error === "no-workspace" ? t("projects.noWorkspace") : result.error || t("projects.genericError"));
      return;
    }
    setDialogOpen(false);
  }, [sessions, workspaces, layout, betterSidebar, t, stage]);
  const handleRename = (0, import_react2.useCallback)(async (project) => {
    const next = window.prompt(t("projects.renamePrompt"), project.title);
    if (next === null || next.trim() === "") return;
    const result = await renameProject(project.id, next);
    if (!result.ok) {
      setError(errText(result, t));
      return;
    }
    setError("");
    void refresh();
  }, [t, refresh]);
  const handleDelete = (0, import_react2.useCallback)(async (project) => {
    if (!window.confirm(t("projects.deleteConfirm").replace("{title}", project.title))) return;
    const result = await deleteProject(project.id);
    if (!result.ok) {
      setError(errText(result, t));
      return;
    }
    setError("");
    void refresh();
  }, [t, refresh]);
  if (!open || !stage) return null;
  const visible = projects.filter((project) => {
    if (!query.trim()) return true;
    return String(project.title).toLowerCase().includes(query.trim().toLowerCase());
  });
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "div",
    {
      role: "region",
      "aria-label": t("projects.title"),
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
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { flex: "none", display: "flex", alignItems: "flex-start", gap: 12, padding: "12px 20px 12px", WebkitAppRegion: "no-drag" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { flex: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h1", { style: { margin: 0, fontSize: 16, fontWeight: 600, lineHeight: "32px" }, children: t("projects.title") }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { style: { margin: 0, fontSize: 13, lineHeight: "20px", color: "var(--dsw-alias-label-secondary, inherit)" }, children: t("projects.subtitle") })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("button", { type: "button", style: { ...chromeButton, display: "inline-flex", alignItems: "center", gap: 6, ...busy ? { opacity: 0.5, cursor: "default" } : {} }, disabled: busy, onClick: handleNew, children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { viewBox: "0 0 16 16", width: "14", height: "14", fill: "none", stroke: "currentColor", strokeWidth: "1.3", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M8 3v10M3 8h10" }) }),
            t("projects.newProject")
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", "aria-label": t("projects.close"), onClick: () => {
            stage.set(false);
          }, style: { border: "none", background: "transparent", color: "inherit", cursor: "pointer", width: 28, height: 28, display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: 6, fontSize: 20, lineHeight: 1, padding: 4 }, children: "\xD7" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { flex: "none", display: "flex", alignItems: "center", gap: 12, padding: "0 20px 12px", borderBottom: "1px solid var(--dsw-alias-border, rgba(128,128,128,.2))" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: { fontSize: 13, fontWeight: 500, lineHeight: "20px", padding: "4px 12px", borderRadius: 999, background: "var(--dsw-alias-interactive-bg-active, rgba(128,128,128,.18))" }, children: t("projects.localTab") }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { marginLeft: "auto", display: "flex", gap: 8, alignItems: "center" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "input",
              {
                value: query,
                placeholder: t("projects.searchPlaceholder"),
                onChange: (event) => {
                  setQuery(event.target.value);
                },
                style: { border: "1px solid var(--dsw-alias-border, rgba(128,128,128,.3))", borderRadius: 8, padding: "6px 12px", fontSize: 13, minWidth: 180, background: "transparent", color: "inherit" }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: { fontSize: 12, color: "var(--dsw-alias-label-secondary, inherit)" }, children: t("projects.sortUpdated") })
          ] })
        ] }),
        error !== "" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { style: { margin: 0, padding: "6px 20px", fontSize: 12, color: "var(--dsw-alias-label-secondary, inherit)" }, children: error }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { flex: 1, minHeight: 0, overflow: "auto", padding: 20 }, children: visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, height: "100%", color: "var(--dsw-alias-label-secondary, inherit)", fontSize: 13 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: query.trim() ? t("projects.emptySearch") : t("projects.empty") }),
          !query.trim() ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", style: chromeButton, onClick: handleNew, children: t("projects.newProject") }) : null
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }, children: visible.map((project) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { role: "button", tabIndex: 0, onClick: () => {
          void openProject(project);
        }, onKeyDown: (event) => {
          if (event.key === "Enter" || event.key === " ") void openProject(project);
        }, style: { border: "1px solid var(--dsw-alias-border, rgba(128,128,128,.2))", borderRadius: 12, padding: 14, cursor: "pointer", background: "transparent", minHeight: 96, display: "flex", flexDirection: "column", gap: 8, textAlign: "left" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { flex: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { fontSize: 14, fontWeight: 600, lineHeight: "20px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: project.title }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { fontSize: 12, lineHeight: "18px", color: "var(--dsw-alias-label-secondary, inherit)", marginTop: 4 }, children: String(project.updatedAt).slice(0, 10) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { display: "flex", gap: 6, justifyContent: "flex-end", alignItems: "center" }, onClick: (event) => {
            event.stopPropagation();
          }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "button",
              {
                type: "button",
                title: t("projects.rename"),
                "aria-label": t("projects.rename"),
                onClick: () => {
                  void handleRename(project);
                },
                style: { border: "none", background: "transparent", color: "inherit", cursor: "pointer", padding: 4, opacity: 0.7, display: "inline-flex", alignItems: "center", justifyContent: "center" },
                children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives.IconEditOutline16, { size: 14 })
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "button",
              {
                type: "button",
                title: t("projects.delete"),
                "aria-label": t("projects.delete"),
                onClick: () => {
                  void handleDelete(project);
                },
                style: { border: "none", background: "transparent", color: "inherit", cursor: "pointer", padding: 4, opacity: 0.7, display: "inline-flex", alignItems: "center", justifyContent: "center" },
                children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives.IconTrashOutline16, { size: 14 })
              }
            )
          ] })
        ] }, project.id)) }) }),
        dialogOpen ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          NewLocalProjectDialog,
          {
            t,
            busy,
            error,
            onCancel: () => {
              if (!busy) setDialogOpen(false);
            },
            onSubmit: (title) => {
              void handleDialogSubmit(title);
            }
          }
        ) : null
      ]
    }
  );
}

// src/client/projects/CanvasTab.jsx
var import_react4 = require("react");

// src/client/CanvasBridge.jsx
var import_react3 = require("react");
var import_jsx_runtime3 = require("react/jsx-runtime");
var CANVAS_GLOBAL = "__omnimuxWorkflowCanvas";
var SCRIPT_ID = "omnimux-workflow-canvas-island";
function ensureCanvasScript(hash) {
  const existing = document.getElementById(SCRIPT_ID);
  if (existing instanceof HTMLScriptElement && existing.dataset.loaded === "1") {
    return Promise.resolve();
  }
  return new Promise((resolve, reject) => {
    let script = existing;
    if (!(script instanceof HTMLScriptElement)) {
      script = document.createElement("script");
      script.id = SCRIPT_ID;
    } else {
      script.addEventListener("load", () => resolve(), { once: true });
      script.addEventListener("error", () => reject(new Error("canvas island script failed")), { once: true });
      return;
    }
    script.src = `/omnimux-workflow/canvas.js?v=${encodeURIComponent(hash)}`;
    script.async = true;
    script.addEventListener("load", () => {
      script.dataset.loaded = "1";
      resolve();
    }, { once: true });
    script.addEventListener("error", () => reject(new Error("canvas island script failed")), { once: true });
    document.head.append(script);
  });
}
function CanvasBridge({ onClose, t, locale }) {
  const containerRef = (0, import_react3.useRef)(null);
  const mountedRef = (0, import_react3.useRef)(false);
  const [status, setStatus] = (0, import_react3.useState)("loading");
  const propsRef = (0, import_react3.useRef)({ onClose, locale });
  propsRef.current = { onClose, locale };
  const load = (0, import_react3.useCallback)(async () => {
    setStatus("loading");
    try {
      const hash = await fetchCanvasHash() ?? String(Date.now());
      await ensureCanvasScript(hash);
      const api = window[CANVAS_GLOBAL];
      if (!api || typeof api.mountCanvas !== "function") {
        throw new Error("canvas island global missing");
      }
      const el = containerRef.current;
      if (el && !mountedRef.current) {
        api.mountCanvas(el, propsRef.current);
        mountedRef.current = true;
        setStatus("ready");
      }
    } catch {
      setStatus("error");
    }
  }, []);
  (0, import_react3.useEffect)(() => {
    void load();
    return () => {
      const api = window[CANVAS_GLOBAL];
      const el = containerRef.current;
      if (api && typeof api.unmountCanvas === "function" && el && mountedRef.current) {
        api.unmountCanvas(el);
      }
      mountedRef.current = false;
    };
  }, [load]);
  (0, import_react3.useEffect)(() => {
    const api = window[CANVAS_GLOBAL];
    const el = containerRef.current;
    if (mountedRef.current && el && api && typeof api.updateCanvas === "function") {
      api.updateCanvas(el, propsRef.current);
    }
  }, [locale, onClose]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { position: "absolute", inset: 0, overflow: "hidden" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { ref: containerRef, style: { width: "100%", height: "100%" } }),
    status === "loading" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "div",
      {
        style: {
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 13,
          color: "var(--dsw-alias-label-secondary, inherit)"
        },
        children: t("canvas.loading")
      }
    ) : null,
    status === "error" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
      "div",
      {
        style: {
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          fontSize: 13,
          color: "var(--dsw-alias-label-secondary, inherit)"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: t("canvas.loadFailed") }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "button",
            {
              type: "button",
              onClick: () => {
                void load();
              },
              style: {
                border: "1px solid var(--dsw-alias-border, currentColor)",
                background: "transparent",
                color: "inherit",
                borderRadius: 6,
                cursor: "pointer",
                fontSize: 12,
                lineHeight: "20px",
                padding: "2px 10px"
              },
              children: t("canvas.retry")
            }
          )
        ]
      }
    ) : null
  ] });
}

// src/client/projects/CanvasTab.jsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function CanvasTab({ ctx, t, visible, store, scope }) {
  const locale = ctx?.locale;
  const activeLocale = (0, import_react4.useSyncExternalStore)(
    locale ? (onStoreChange) => locale.subscribe(onStoreChange) : () => () => {
    },
    () => locale ? locale.getLocale().active : "zh"
  );
  const sessionId = scope?.sessionId;
  (0, import_react4.useEffect)(() => {
    if (!visible || !sessionId) return void 0;
    let cancelled = false;
    let timer = 0;
    let attempts = 0;
    const tick = () => {
      if (cancelled) return;
      const result = applyProjectCanvasRatio(getBetterSidebar(ctx), sessionId, store);
      if (result === void 0 && attempts < 80) {
        attempts += 1;
        timer = window.setTimeout(tick, 50);
      }
    };
    tick();
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [visible, sessionId, store, ctx]);
  const onClose = (0, import_react4.useCallback)(() => {
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "div",
    {
      "data-omnimux-canvas-tab": "",
      style: {
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: 0,
        overflow: "hidden",
        visibility: visible ? "visible" : "hidden"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(CanvasBridge, { onClose, t, locale: activeLocale })
    }
  );
}

// src/client/index.js
var name = "omnimux-workflow";
var inject = ["slots", "locale", "sessions", "workspaces", "layout"];
function apply(ctx) {
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), "omnimux-workflow: dictionaries");
  const t = ctx.locale.bind(NS);
  const stage = createStageStore(() => window.__omnimuxStage);
  ctx.effect(() => mountSidebarEntry(stage, t, ctx.locale), "omnimux-workflow: sidebar entry");
  ctx.effect(
    () => mountNewProjectEntry({ sessions: ctx.sessions, workspaces: ctx.workspaces, layout: ctx.layout, stage }, t, ctx.locale),
    "omnimux-workflow: new-project entry"
  );
  const stageFace = () => ({
    t,
    stage,
    locale: ctx.locale,
    sessions: ctx.sessions,
    workspaces: ctx.workspaces,
    layout: ctx.layout
  });
  ctx.slots.inject("shell.overlay", () => ctx.slots.register({
    name: "shell.overlay",
    id: "omnimux-workflow-stage",
    order: 40,
    locale: NS,
    inject: stageFace
  }, ProjectLibraryPage));
  const registerCanvas = (sidebar) => {
    if (!sidebar || typeof sidebar.registerTab !== "function") return () => {
    };
    bindBetterSidebar(sidebar);
    return sidebar.registerTab({
      id: CANVAS_TAB_ID,
      title: () => t("details.canvasTab"),
      order: 5,
      hidden: true,
      single: true,
      component: (props) => (0, import_react5.createElement)(CanvasTab, { ...props, t })
    });
  };
  if (typeof ctx.inject === "function") {
    ctx.inject(["betterSidebar"], (inner) => {
      ctx.effect(() => registerCanvas(inner.betterSidebar), "omnimux-workflow: canvas tab");
    });
  }
}

    return module.exports;
  }
});
