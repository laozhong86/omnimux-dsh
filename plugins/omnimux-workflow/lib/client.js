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
var import_react6 = require("react");

// src/client/locales.js
var zh = {
  "nav": "\u521B\u4F5C",
  "stage.title": "\u5DE5\u4F5C\u6D41\u5DE5\u7A0B",
  "stage.close": "\u5173\u95ED",
  "canvas.loading": "\u6B63\u5728\u52A0\u8F7D\u753B\u5E03\u2026",
  "canvas.loadFailed": "\u753B\u5E03\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002",
  "canvas.retry": "\u91CD\u8BD5",
  "projects.title": "\u5DE5\u4F5C\u6D41\u5DE5\u7A0B",
  "projects.subtitle": "\u7BA1\u7406\u672C\u5730\u5DE5\u4F5C\u6D41\u9879\u76EE",
  "projects.newProject": "\u65B0\u5EFA\u9879\u76EE",
  "projects.close": "\u5173\u95ED",
  "projects.all": "\u5168\u90E8",
  "projects.localTab": "\u672C\u5730\u9879\u76EE",
  "projects.searchPlaceholder": "\u641C\u7D22\u9879\u76EE\u540D\u79F0\u2026",
  "projects.sortUpdated": "\u6309\u6700\u8FD1\u66F4\u65B0\u6392\u5E8F",
  "projects.empty": "\u6682\u65E0\u5DE5\u4F5C\u6D41\u9879\u76EE\u3002\u70B9\u51FB\u300C\u65B0\u5EFA\u9879\u76EE\u300D\u5F00\u59CB\u6784\u5EFA\u3002",
  "projects.emptySearch": "\u6CA1\u6709\u5339\u914D\u7684\u9879\u76EE\u3002",
  "projects.noWorkspace": "\u8BF7\u5148\u9009\u62E9\u4E00\u4E2A\u5DE5\u4F5C\u533A\u76EE\u5F55\u3002",
  "projects.genericError": "\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002",
  "projects.createFailed": "\u521B\u5EFA\u9879\u76EE\u5931\u8D25\uFF1A{error}",
  "projects.rename": "\u91CD\u547D\u540D",
  "projects.delete": "\u89E3\u6563\u9879\u76EE",
  "projects.renamePrompt": "\u9879\u76EE\u540D\u79F0",
  "projects.deleteConfirm": "\u5C06\u89E3\u6563\u9879\u76EE\u300C{title}\u300D\uFF0C\u9879\u76EE\u4E0B\u7684\u521B\u4F5C\u9875\u4F1A\u4FDD\u7559\uFF0C\u4EC5\u53D6\u6D88\u5F52\u7C7B\u3002",
  "projects.dialog.title": "\u65B0\u5EFA\u672C\u5730\u9879\u76EE",
  "projects.dialog.nameLabel": "\u9879\u76EE\u540D\u79F0",
  "projects.dialog.namePlaceholder": "\u4F8B\u5982\uFF1A\u77ED\u5267\u5BA3\u4F20\u7247\u751F\u6210",
  "projects.dialog.hint": "\u672C\u5730\u9879\u76EE\u4EC5\u4FDD\u5B58\u5728\u5F53\u524D\u8BBE\u5907\uFF0C\u4E0D\u4F1A\u81EA\u52A8\u540C\u6B65\u6216\u5171\u4EAB\u3002",
  "projects.dialog.pathLabel": "\u76EE\u5F55\u8DEF\u5F84",
  "projects.dialog.pathPlaceholder": "\u53EF\u9009\uFF1A\u5DF2\u6709\u4F5C\u54C1\u5305\u7EDD\u5BF9\u8DEF\u5F84",
  "projects.dialog.pathHint": "\u7559\u7A7A\u5219\u5199\u5165\u9ED8\u8BA4\u9879\u76EE\u5E93\u3002\u586B\u5199\u5DF2\u6709\u76EE\u5F55\u65F6\uFF0CHost \u4F1A\u5728\u8BE5\u8DEF\u5F84\u79CD\u5B50 project.json\u3002",
  "projects.dialog.cancel": "\u53D6\u6D88",
  "projects.dialog.submit": "\u521B\u5EFA\u9879\u76EE",
  "details.canvasTab": "\u753B\u5E03\u5DE5\u4F5C\u533A",
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
  "projects.title": "Workflow Projects",
  "projects.subtitle": "Manage local workflow projects",
  "projects.newProject": "New Project",
  "projects.close": "Close",
  "projects.all": "All",
  "projects.localTab": "Local Projects",
  "projects.searchPlaceholder": "Search projects\u2026",
  "projects.sortUpdated": "Sorted by recent update",
  "projects.empty": 'No workflow projects yet. Click "New Project" to start.',
  "projects.emptySearch": "No matching projects.",
  "projects.noWorkspace": "Please select a workspace folder first.",
  "projects.genericError": "Operation failed, please retry.",
  "projects.createFailed": "Could not create project: {error}",
  "projects.rename": "Rename",
  "projects.delete": "Disband Project",
  "projects.renamePrompt": "Project title",
  "projects.deleteConfirm": "Disband project \u201C{title}\u201D? Creation pages will be retained, only removing categorization.",
  "projects.dialog.title": "New Local Project",
  "projects.dialog.nameLabel": "Project name",
  "projects.dialog.namePlaceholder": "e.g. Promo Video Generation",
  "projects.dialog.hint": "Local projects are stored on this device and not shared.",
  "projects.dialog.pathLabel": "Directory path",
  "projects.dialog.pathPlaceholder": "Optional: absolute path of an existing package",
  "projects.dialog.pathHint": "Leave empty to write into the default library. An existing directory is seeded with project.json.",
  "projects.dialog.cancel": "Cancel",
  "projects.dialog.submit": "Create Project",
  "details.canvasTab": "Canvas Workspace",
  "details.toolTab": "Tool Details",
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
var ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="14" height="14" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid meet"><path fill="currentColor" d="M2 5.5a1.5 1.5 0 0 1 3 0V6h10v-.5a1.5 1.5 0 0 1 3 0v4.757a5.5 5.5 0 0 0-1-.657V5.5a.5.5 0 0 0-1 0v3.707a5.5 5.5 0 0 0-1-.185V7H5v6h4.207a5.5 5.5 0 0 0-.185 1H5v.5a1.5 1.5 0 0 1-3 0zm2 0a.5.5 0 0 0-1 0v9a.5.5 0 0 0 1 0zm15 9a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.287-.437l-2.97-1.65a.5.5 0 0 0-.743.437v3.3a.5.5 0 0 0 .743.437l2.97-1.65a.5.5 0 0 0 0-.874"/></svg>';
var STYLES = `
.omnimux-workflow-entry {
  box-sizing: border-box; display: flex; align-items: center; gap: 6px; position: relative;
  width: calc(100% - 8px); height: 32px; margin: 0 4px; padding: 0 8px;
  border: none; border-radius: 8px; background: transparent;
  color: var(--dsw-alias-label-primary, inherit);
  font: var(--dsw-font-s-14, inherit); font-size: 14px; line-height: 20px;
  cursor: pointer; text-align: left;
}
.omnimux-workflow-entry:hover { background: var(--dsw-alias-interactive-bg-hover); }
.omnimux-workflow-entry[data-active="true"] { background: var(--dsw-alias-interactive-bg-active); font-weight: 500; }
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
    rank: 4,
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
var PROJECT_CONVERSATION_TARGET_WIDTH_PX = 420;
var PROJECT_CONVERSATION_MIN_WIDTH_PX = 360;
function projectCanvasWidthPx(state, env = {}) {
  const viewport = envViewportWidth(env);
  const max = viewport > 0 ? Math.max(PROJECT_CANVAS_MIN_PX, viewport) : PROJECT_CANVAS_MIN_PX;
  const usable = projectCanvasUsableWidthPx(state, env);
  if (usable <= 0) {
    const raw = viewport > 0 ? Math.max(PROJECT_CANVAS_MIN_PX, viewport - PROJECT_CONVERSATION_TARGET_WIDTH_PX) : PROJECT_CANVAS_MIN_PX;
    return Math.min(max, raw);
  }
  let targetCanvasWidth = usable - PROJECT_CONVERSATION_TARGET_WIDTH_PX;
  if (targetCanvasWidth < PROJECT_CANVAS_MIN_PX) {
    targetCanvasWidth = usable - PROJECT_CONVERSATION_MIN_WIDTH_PX;
  }
  return Math.min(max, Math.max(PROJECT_CANVAS_MIN_PX, Math.round(targetCanvasWidth)));
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
function shouldApplyProjectCanvasRatio(sessionId, state, prefs, env = {}, force = false) {
  if (!sessionId || !state) return false;
  if (force) return true;
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
function applyProjectCanvasRatio(service, sessionId, store = null, env = {}, force = false) {
  const snapshot = (typeof store?.getSnapshot === "function" ? store.getSnapshot() : null) || service?.getSnapshot?.();
  const state = snapshot?.state;
  const prefs = typeof store?.getPrefs === "function" ? store.getPrefs() : void 0;
  if (!shouldApplyProjectCanvasRatio(sessionId, state, prefs, env, force)) return null;
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
  const givenRoot = typeof opts.projectRoot === "string" ? opts.projectRoot.trim() : "";
  const validated = validateProjectTitle(title);
  if (!validated.ok) return { ok: false, error: validated.error };
  const seeded = await createProject(validated.title, null, givenRoot !== "" ? givenRoot : void 0);
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
    const overlay = document.createElement("div");
    overlay.dataset.omnimuxNewLocalProject = "";
    overlay.setAttribute("role", "presentation");
    css(overlay, {
      position: "fixed",
      inset: "0",
      zIndex: "320",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--dsw-alias-bg-mask-1)"
    });
    const sheet = document.createElement("div");
    sheet.setAttribute("role", "dialog");
    sheet.setAttribute("aria-modal", "true");
    sheet.setAttribute("aria-labelledby", "omnimux-new-local-project-title");
    css(sheet, {
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
    css(errorEl, { margin: "0", fontSize: "12px", color: "var(--dsw-alias-state-error-primary, var(--dsw-alias-label-error))", display: "none" });
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
    sheet.append(header, body, footer);
    overlay.append(sheet);
    let settled = false;
    const finish = (value) => {
      if (settled) return;
      settled = true;
      overlay.remove();
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
    overlay.addEventListener("mousedown", (event) => {
      if (event.target === overlay && !busy) finish(null);
    });
    sheet.addEventListener("keydown", (event) => {
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
    document.body.appendChild(overlay);
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
.omnimux-new-project-entry:hover { background: var(--dsw-alias-button-floating-hover); }
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
var import_react3 = require("react");
var import_dsh_client_ui_primitives2 = require("@deepseek-ai/dsh-client-ui-primitives");

// ../../node_modules/.pnpm/dsh-ui-kit@file+..+..+personal+dsh-ui-kit_@deepseek-ai+dsh-client-ui-primitives@0.1.0-r_01b5a2d96805ee6fa669372349bfb5d4/node_modules/dsh-ui-kit/lib/index.js
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
function injectCss(id, css2) {
  if (typeof document === "undefined") return;
  if (injected.has(id)) return;
  injected.add(id);
  const style = document.createElement("style");
  style.setAttribute("data-dsh-ui-kit", id);
  style.textContent = css2;
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
injectCss("EmptyState.module.css", ".dshUk-EmptyState-emptyState {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 48px 24px;\n  min-height: 240px;\n  box-sizing: border-box;\n  color: var(--dsw-alias-label-secondary, rgba(255, 255, 255, 0.72));\n}\n\n.dshUk-EmptyState-emptyState.dshUk-EmptyState-compact {\n  padding: 24px 16px;\n  min-height: 140px;\n}\n\n.dshUk-EmptyState-iconWrap {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 12px;\n  color: var(--dsw-alias-label-tertiary, rgba(255, 255, 255, 0.4));\n}\n\n.dshUk-EmptyState-title {\n  margin: 0 0 6px;\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 20px;\n  color: var(--dsw-alias-label-primary, #ffffff);\n}\n\n.dshUk-EmptyState-description {\n  margin: 0;\n  font-size: 13px;\n  line-height: 18px;\n  color: var(--dsw-alias-label-secondary, rgba(255, 255, 255, 0.72));\n  max-width: 360px;\n}\n\n.dshUk-EmptyState-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 16px;\n}\n");
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
injectCss("StageContainer.module.css", '.dshUk-StageContainer-stageContainer {\n  position: absolute;\n  top: var(--stage-top, 0px);\n  left: var(--stage-left, 56px);\n  width: var(--stage-width, calc(100vw - 56px));\n  height: var(--stage-height, 100vh);\n  background: var(--dsw-alias-bg-base, #111113);\n  color: var(--dsw-alias-label-primary, #ffffff);\n  z-index: 200;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n\n.dshUk-StageContainer-stageContainer[data-visible="false"] {\n  display: none !important;\n  pointer-events: none !important;\n}\n');
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
injectCss("StageHeader.module.css", ".dshUk-StageHeader-stageHeader {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 20px;\n  min-height: 56px;\n  box-sizing: border-box;\n  flex: none;\n  gap: 16px;\n  border-bottom: 1px solid var(--dsw-alias-border-l1, rgba(255, 255, 255, 0.06));\n}\n\n.dshUk-StageHeader-heading {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n  flex: 1 1 auto;\n}\n\n.dshUk-StageHeader-titleRow {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.dshUk-StageHeader-title {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 24px;\n  color: var(--dsw-alias-label-primary, #ffffff);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.dshUk-StageHeader-subtitle {\n  margin: 0;\n  font-size: 13px;\n  line-height: 18px;\n  color: var(--dsw-alias-label-secondary, rgba(255, 255, 255, 0.72));\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.dshUk-StageHeader-controls {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: none;\n}\n");
var StageHeader_module_css_default = {
  "stageHeader": "dshUk-StageHeader-stageHeader",
  "heading": "dshUk-StageHeader-heading",
  "titleRow": "dshUk-StageHeader-titleRow",
  "title": "dshUk-StageHeader-title",
  "subtitle": "dshUk-StageHeader-subtitle",
  "controls": "dshUk-StageHeader-controls"
};
var HEADER_CLASS = cssClass(StageHeader_module_css_default.stageHeader, "stageHeader");
var HEADING_CLASS = cssClass(StageHeader_module_css_default.heading, "heading");
var TITLE_ROW_CLASS = cssClass(StageHeader_module_css_default.titleRow, "titleRow");
var TITLE_CLASS = cssClass(StageHeader_module_css_default.title, "title");
var SUBTITLE_CLASS = cssClass(StageHeader_module_css_default.subtitle, "subtitle");
var CONTROLS_CLASS = cssClass(StageHeader_module_css_default.controls, "controls");
var StageHeader = (0, import_react.forwardRef)(function StageHeader2({ title, subtitle, badge, onRefresh, refreshing = false, refreshTitle = "Refresh", onClose, closeTitle = "Close", actions, className, ...rest }, ref) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
    ...rest,
    ref,
    className: cx(HEADER_CLASS, className),
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: HEADING_CLASS,
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: TITLE_ROW_CLASS,
        children: [typeof title === "string" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
          className: TITLE_CLASS,
          children: title
        }) : title, badge]
      }), subtitle && (typeof subtitle === "string" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        className: SUBTITLE_CLASS,
        children: subtitle
      }) : subtitle)]
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
    })]
  });
});

// src/client/styles.js
var STYLES_ID = "omnimux-workflow-styles";
var WORKFLOW_CSS = `
.omnimux-workflow-stage {
  position: fixed;
  z-index: 200;
  top: var(--stage-top);
  left: var(--stage-left);
  width: var(--stage-width);
  height: var(--stage-height);
  display: flex;
  flex-direction: column;
  background: var(--dsw-alias-bg-base, var(--dsw-bg));
  color: var(--dsw-alias-label-primary, inherit);
  overflow: hidden;
  pointer-events: auto;
  -webkit-app-region: no-drag;
}
.omnimux-workflow-stage[data-visible="false"] {
  display: none;
  pointer-events: none;
}
.omnimux-workflow-stage-header {
  flex: none;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 20px;
  -webkit-app-region: no-drag;
}
.omnimux-workflow-stage-heading { flex: 1; min-width: 0; }
.omnimux-workflow-stage-title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 32px;
}
.omnimux-workflow-stage-subtitle {
  margin: 0;
  font-size: 13px;
  line-height: 20px;
  color: var(--dsw-alias-label-secondary);
}
.omnimux-workflow-stage-controls {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: auto;
}
.omnimux-workflow-action-row {
  flex: none;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 20px 14px;
}
.omnimux-workflow-stage-toolbar {
  flex: none;
  padding: 0 20px 12px;
  height: 44px;
}
.omnimux-workflow-tools-cluster {
  display: flex;
  align-items: center;
  gap: 8px;
}
.omnimux-workflow-search-wrap {
  width: 260px;
}
.omnimux-workflow-chip {
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  padding: 4px 12px;
  border-radius: 8px;
  background: var(--dsw-alias-interactive-bg-active);
  flex-shrink: 0;
}
.omnimux-workflow-muted {
  font-size: 12px;
  color: var(--dsw-alias-label-secondary);
  flex-shrink: 0;
  white-space: nowrap;
}
.omnimux-workflow-error {
  margin: 0;
  padding: 6px 20px;
  font-size: 12px;
  color: var(--dsw-alias-state-error-primary, var(--dsw-alias-label-error));
}
.omnimux-workflow-body {
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding: 20px;
}
.omnimux-workflow-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 12px;
}
.omnimux-workflow-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100%;
  min-height: 160px;
  color: var(--dsw-alias-label-secondary);
  font-size: 13px;
  border: 1px dashed var(--dsw-alias-border-l4, var(--dsw-alias-border));
  border-radius: 12px;
}
.omnimux-workflow-empty p { margin: 0; }
.omnimux-workflow-card {
  border: 1px solid var(--dsw-alias-border-l2, var(--dsw-alias-border));
  border-radius: 12px;
  padding: 14px;
  cursor: pointer;
  background: var(--dsw-alias-bg-base, var(--dsw-bg));
  min-height: 96px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
}
.omnimux-workflow-card:hover {
  border-color: var(--dsw-alias-border-l4, var(--dsw-alias-border));
}
.omnimux-workflow-card:focus-visible {
  outline: 2px solid var(--dsw-alias-label-primary);
  outline-offset: 2px;
}
.omnimux-workflow-card-main { flex: 1; min-width: 0; }
.omnimux-workflow-card-title {
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.omnimux-workflow-card-meta {
  font-size: 12px;
  line-height: 18px;
  color: var(--dsw-alias-label-secondary);
  margin-top: 4px;
}
.omnimux-workflow-card-actions {
  display: flex;
  gap: 6px;
  justify-content: flex-end;
  align-items: center;
}
.omnimux-workflow-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.omnimux-workflow-form-error {
  margin: 0;
  font-size: 12px;
  color: var(--dsw-alias-state-error-primary, var(--dsw-alias-label-error));
}
.omnimux-workflow-dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  width: 100%;
}
.omnimux-workflow-canvas-host {
  position: absolute;
  inset: 0;
  overflow: hidden;
}
.omnimux-workflow-canvas-root {
  width: 100%;
  height: 100%;
}
.omnimux-workflow-canvas-status {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 13px;
  color: var(--dsw-alias-label-secondary);
}
.omnimux-workflow-canvas-body {
  flex: 1;
  min-height: 0;
  position: relative;
}
.omnimux-workflow-canvas-tab {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;
}
.omnimux-workflow-canvas-tab[data-visible="false"] {
  visibility: hidden;
}
`;
function injectWorkflowStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(STYLES_ID)) return;
  const styleNode = document.createElement("style");
  styleNode.id = STYLES_ID;
  styleNode.textContent = WORKFLOW_CSS;
  document.head.appendChild(styleNode);
}

// src/client/projects/NewLocalProjectDialog.jsx
var import_react2 = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
function NewLocalProjectDialog({ t, busy = false, error, onCancel, onSubmit }) {
  const nameRef = (0, import_react2.useRef)(null);
  const [name2, setName] = (0, import_react2.useState)("");
  const [path, setPath] = (0, import_react2.useState)("");
  (0, import_react2.useEffect)(() => {
    nameRef.current?.focus();
  }, []);
  const trimmed = name2.trim();
  const trimmedPath = path.trim();
  const canSubmit = trimmed !== "" && trimmed.length <= MAX_PROJECT_TITLE_LENGTH && !busy;
  const submit = () => {
    if (!canSubmit) return;
    onSubmit({
      title: trimmed,
      ...trimmedPath !== "" ? { projectRoot: trimmedPath } : {}
    });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    ModalDialog,
    {
      open: true,
      onClose: () => {
        if (!busy) onCancel();
      },
      title: t("projects.dialog.title"),
      closeLabel: t("projects.close"),
      size: "md",
      footer: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-workflow-dialog-footer", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button, { variant: "outline", disabled: busy, onClick: onCancel, children: t("projects.dialog.cancel") }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button, { variant: "primary", disabled: !canSubmit, loading: busy, onClick: submit, children: t("projects.dialog.submit") })
      ] }),
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-workflow-form", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          InputField,
          {
            ref: nameRef,
            id: "omnimux-new-local-project-name",
            label: t("projects.dialog.nameLabel"),
            value: name2,
            maxLength: MAX_PROJECT_TITLE_LENGTH,
            placeholder: t("projects.dialog.namePlaceholder"),
            hint: t("projects.dialog.hint"),
            disabled: busy,
            required: true,
            onChange: (event) => {
              setName(event.target.value);
            },
            onKeyDown: (event) => {
              if (event.key === "Enter" && canSubmit) {
                event.preventDefault();
                submit();
              }
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          InputField,
          {
            id: "omnimux-new-local-project-path",
            label: t("projects.dialog.pathLabel"),
            value: path,
            placeholder: t("projects.dialog.pathPlaceholder"),
            hint: t("projects.dialog.pathHint"),
            disabled: busy,
            onChange: (event) => {
              setPath(event.target.value);
            },
            onKeyDown: (event) => {
              if (event.key === "Enter" && canSubmit) {
                event.preventDefault();
                submit();
              }
            }
          }
        ),
        error ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "omnimux-workflow-form-error", children: error }) : null
      ] })
    }
  );
}

// src/client/projects/ProjectLibraryPage.jsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function errText(result, t) {
  const code = String(result?.body?.error ?? "");
  if (code === "no-workspace") return t("projects.noWorkspace");
  return String(result?.body?.message || result?.body?.error || result?.status || t("projects.genericError"));
}
function ProjectLibraryPage({ t, stage, locale, sessions, workspaces, layout, betterSidebar }) {
  (0, import_react3.useEffect)(() => {
    injectWorkflowStyles();
  }, []);
  const open = (0, import_react3.useSyncExternalStore)(
    stage ? (onStoreChange) => stage.subscribe(onStoreChange) : () => () => {
    },
    stage ? () => stage.getSnapshot() : () => false
  );
  const [everOpened, setEverOpened] = (0, import_react3.useState)(false);
  const [box, setBox] = (0, import_react3.useState)(() => ({ top: 0, left: 0, width: 0, height: 0 }));
  const [projects, setProjects] = (0, import_react3.useState)([]);
  const [query, setQuery] = (0, import_react3.useState)("");
  const [error, setError] = (0, import_react3.useState)("");
  const [busy, setBusy] = (0, import_react3.useState)(false);
  const [dialogOpen, setDialogOpen] = (0, import_react3.useState)(false);
  const [pendingDelete, setPendingDelete] = (0, import_react3.useState)(null);
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
  const refresh = (0, import_react3.useCallback)(async () => {
    const result = await listProjects();
    if (!result.ok) {
      setError(errText(result, t));
      return;
    }
    setError("");
    setProjects(Array.isArray(result.body?.projects) ? result.body.projects : []);
  }, [t]);
  (0, import_react3.useEffect)(() => {
    if (!open) return void 0;
    void refresh();
  }, [open, refresh]);
  const openProject = (0, import_react3.useCallback)(async (project) => {
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
  const handleNew = (0, import_react3.useCallback)(() => {
    setError("");
    setDialogOpen(true);
  }, []);
  const handleDialogSubmit = (0, import_react3.useCallback)(async (payload) => {
    const title = typeof payload === "string" ? payload : payload?.title;
    const projectRoot = typeof payload === "object" && payload && typeof payload.projectRoot === "string" ? payload.projectRoot : void 0;
    setBusy(true);
    setError("");
    const result = await runNewProject(
      { sessions, workspaces, layout, betterSidebar, t, stage },
      { title, ...projectRoot ? { projectRoot } : {} }
    );
    setBusy(false);
    if (!result.ok) {
      setError(result.error === "no-workspace" ? t("projects.noWorkspace") : result.error || t("projects.genericError"));
      return;
    }
    setDialogOpen(false);
  }, [sessions, workspaces, layout, betterSidebar, t, stage]);
  const handleRename = (0, import_react3.useCallback)(async (project) => {
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
  const confirmDelete = (0, import_react3.useCallback)(async () => {
    if (!pendingDelete) return;
    const result = await deleteProject(pendingDelete.id);
    if (!result.ok) {
      setError(errText(result, t));
      setPendingDelete(null);
      return;
    }
    setError("");
    setPendingDelete(null);
    void refresh();
  }, [pendingDelete, t, refresh]);
  if (!stage || !everOpened) return null;
  const visible = projects.filter((project) => {
    if (!query.trim()) return true;
    return String(project.title).toLowerCase().includes(query.trim().toLowerCase());
  });
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "div",
    {
      role: "region",
      "aria-label": t("projects.title"),
      "aria-hidden": open ? void 0 : "true",
      className: "omnimux-workflow-stage",
      "data-visible": open ? "true" : "false",
      style: {
        display: open ? void 0 : "none",
        "--stage-top": `${box.top}px`,
        "--stage-left": `${box.left}px`,
        "--stage-width": `${box.width}px`,
        "--stage-height": `${box.height}px`
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "omnimux-workflow-stage-header", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "omnimux-workflow-stage-heading", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h1", { className: "omnimux-workflow-stage-title", children: t("projects.title") }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "omnimux-workflow-stage-subtitle", children: t("projects.subtitle") })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "omnimux-workflow-stage-controls", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            IconButton,
            {
              "aria-label": t("projects.close"),
              variant: "ghost",
              onClick: () => {
                stage.set(false);
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_dsh_client_ui_primitives2.IconCloseOutline16, {})
            }
          ) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "omnimux-workflow-action-row", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          Button,
          {
            variant: "primary",
            size: "sm",
            leadingIcon: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_dsh_client_ui_primitives2.IconPlusOutline16, {}),
            disabled: busy,
            onClick: handleNew,
            children: t("projects.newProject")
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          FilterBar,
          {
            className: "omnimux-workflow-stage-toolbar",
            compact: true,
            filters: [{ key: "all", label: t("projects.all") }].map((chip) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              Button,
              {
                variant: "secondary",
                size: "sm",
                "aria-pressed": "true",
                children: chip.label
              },
              chip.key
            )),
            tools: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "omnimux-workflow-tools-cluster", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "omnimux-workflow-search-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              SearchField,
              {
                value: query,
                placeholder: t("projects.searchPlaceholder"),
                "aria-label": t("projects.searchPlaceholder"),
                debounceMs: 0,
                stretch: true,
                onValueChange: setQuery
              }
            ) }) })
          }
        ),
        error !== "" && !dialogOpen ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "omnimux-workflow-error", children: error }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "omnimux-workflow-body", children: visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "omnimux-workflow-empty", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: query.trim() ? t("projects.emptySearch") : t("projects.empty") }),
          !query.trim() ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Button, { variant: "primary", size: "sm", disabled: busy, onClick: handleNew, children: t("projects.newProject") }) : null
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "omnimux-workflow-grid", children: visible.map((project) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
          "div",
          {
            role: "button",
            tabIndex: 0,
            className: "omnimux-workflow-card",
            onClick: () => {
              void openProject(project);
            },
            onKeyDown: (event) => {
              if (event.key === "Enter" || event.key === " ") void openProject(project);
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "omnimux-workflow-card-main", children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "omnimux-workflow-card-title", children: project.title }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "omnimux-workflow-card-meta", children: String(project.updatedAt).slice(0, 10) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
                "div",
                {
                  className: "omnimux-workflow-card-actions",
                  onClick: (event) => {
                    event.stopPropagation();
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                      IconButton,
                      {
                        variant: "ghost",
                        size: "xs",
                        title: t("projects.rename"),
                        "aria-label": t("projects.rename"),
                        onClick: () => {
                          void handleRename(project);
                        },
                        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_dsh_client_ui_primitives2.IconEditOutline16, { size: 14 })
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                      IconButton,
                      {
                        variant: "ghost",
                        size: "xs",
                        title: t("projects.delete"),
                        "aria-label": t("projects.delete"),
                        onClick: () => {
                          setPendingDelete(project);
                        },
                        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_dsh_client_ui_primitives2.IconTrashOutline16, { size: 14 })
                      }
                    )
                  ]
                }
              )
            ]
          },
          project.id
        )) }) }),
        dialogOpen ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          NewLocalProjectDialog,
          {
            t,
            busy,
            error,
            onCancel: () => {
              if (!busy) setDialogOpen(false);
            },
            onSubmit: (payload) => {
              void handleDialogSubmit(payload);
            }
          }
        ) : null,
        pendingDelete ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          ConfirmModal,
          {
            open: true,
            onClose: () => {
              setPendingDelete(null);
            },
            title: t("projects.delete"),
            message: t("projects.deleteConfirm").replace("{title}", pendingDelete.title),
            confirmLabel: t("projects.delete"),
            cancelLabel: t("projects.dialog.cancel"),
            confirmVariant: "danger",
            onConfirm: () => {
              void confirmDelete();
            }
          }
        ) : null
      ]
    }
  );
}

// src/client/projects/CanvasTab.jsx
var import_react5 = require("react");

// src/client/CanvasBridge.jsx
var import_react4 = require("react");
var import_jsx_runtime4 = require("react/jsx-runtime");
var CANVAS_GLOBAL = "__omnimuxWorkflowCanvas";
var SCRIPT_ID = "omnimux-workflow-canvas-island";
function ensureCanvasScript(hash) {
  if (typeof window !== "undefined" && window[CANVAS_GLOBAL] && typeof window[CANVAS_GLOBAL].mountCanvas === "function") {
    return Promise.resolve();
  }
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
      if (script.dataset.loaded === "error") {
        script.remove();
        script = document.createElement("script");
        script.id = SCRIPT_ID;
      } else {
        script.addEventListener("load", () => resolve(), { once: true });
        script.addEventListener("error", () => reject(new Error("canvas island script failed")), { once: true });
        return;
      }
    }
    script.src = `/omnimux-workflow/canvas.js?v=${encodeURIComponent(hash)}`;
    script.async = true;
    script.addEventListener("load", () => {
      script.dataset.loaded = "1";
      resolve();
    }, { once: true });
    script.addEventListener("error", () => {
      script.dataset.loaded = "error";
      reject(new Error("canvas island script failed"));
    }, { once: true });
    document.head.append(script);
  });
}
function CanvasBridge({ onClose, t, locale, workspaceId }) {
  (0, import_react4.useEffect)(() => {
    injectWorkflowStyles();
  }, []);
  const containerRef = (0, import_react4.useRef)(null);
  const mountedRef = (0, import_react4.useRef)(false);
  const [status, setStatus] = (0, import_react4.useState)("loading");
  const propsRef = (0, import_react4.useRef)({ onClose, locale, workspaceId });
  propsRef.current = { onClose, locale, workspaceId };
  const load = (0, import_react4.useCallback)(async () => {
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
  (0, import_react4.useEffect)(() => {
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
  (0, import_react4.useEffect)(() => {
    const api = window[CANVAS_GLOBAL];
    const el = containerRef.current;
    if (mountedRef.current && el && api && typeof api.updateCanvas === "function") {
      api.updateCanvas(el, propsRef.current);
    }
  }, [locale, onClose, workspaceId]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "omnimux-workflow-canvas-host", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { ref: containerRef, className: "omnimux-workflow-canvas-root" }),
    status === "loading" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "omnimux-workflow-canvas-status", children: t("canvas.loading") }) : null,
    status === "error" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "omnimux-workflow-canvas-status", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: t("canvas.loadFailed") }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button, { variant: "outline", size: "sm", onClick: () => {
        void load();
      }, children: t("canvas.retry") })
    ] }) : null
  ] });
}

// src/client/projects/CanvasTab.jsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function sessionToWorkspaceId(sessionId) {
  if (!sessionId) return void 0;
  let h1 = 2166136261;
  let h2 = 1075203691;
  for (let i = 0; i < sessionId.length; i++) {
    const code = sessionId.charCodeAt(i);
    h1 = Math.imul(h1 ^ code, 16777619);
    h2 = Math.imul(h2 ^ code, 84703693);
  }
  const hex1 = (h1 >>> 0).toString(16).padStart(8, "0");
  const hex2 = (h2 >>> 0).toString(16).padStart(8, "0");
  return `ws_${(hex1 + hex2).slice(0, 12)}`;
}
function CanvasTab({ ctx, t, visible, store, scope }) {
  (0, import_react5.useEffect)(() => {
    injectWorkflowStyles();
  }, []);
  const locale = ctx?.locale;
  const activeLocale = (0, import_react5.useSyncExternalStore)(
    locale ? (onStoreChange) => locale.subscribe(onStoreChange) : () => () => {
    },
    () => locale ? locale.getLocale().active : "zh"
  );
  const sessionId = scope?.sessionId;
  (0, import_react5.useEffect)(() => {
    if (!visible || !sessionId) return void 0;
    let cancelled = false;
    let timer = 0;
    let attempts = 0;
    const tick = (force = false) => {
      if (cancelled) return;
      const result = applyProjectCanvasRatio(getBetterSidebar(ctx), sessionId, store, {}, force);
      if (result === void 0 && attempts < 80) {
        attempts += 1;
        timer = window.setTimeout(() => tick(force), 50);
      }
    };
    tick();
    let sidebarObserver = null;
    try {
      const sidebarEl = typeof document !== "undefined" ? document.querySelector('[data-pane="sidebar"], [class*="sidebarCol"]') : null;
      if (sidebarEl && typeof ResizeObserver === "function") {
        sidebarObserver = new ResizeObserver(() => {
          if (!cancelled) tick(true);
        });
        sidebarObserver.observe(sidebarEl);
      }
    } catch {
    }
    const onResize = () => {
      if (!cancelled) tick(true);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("resize", onResize);
    }
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      sidebarObserver?.disconnect?.();
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", onResize);
      }
    };
  }, [visible, sessionId, store, ctx]);
  const onClose = (0, import_react5.useCallback)(() => {
  }, []);
  const targetWorkspaceId = sessionToWorkspaceId(sessionId);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "div",
    {
      "data-omnimux-canvas-tab": "",
      className: "omnimux-workflow-canvas-tab",
      "data-visible": visible ? "true" : "false",
      children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(CanvasBridge, { onClose, t, locale: activeLocale, workspaceId: targetWorkspaceId })
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
  const renderCanvasIcon = (size = 16) => (0, import_react6.createElement)("svg", {
    width: size,
    height: size,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    (0, import_react6.createElement)("rect", {
      key: "frame",
      x: "1.75",
      y: "1.75",
      width: "12.5",
      height: "12.5",
      rx: "2.5",
      stroke: "currentColor",
      strokeWidth: "1.5"
    }),
    (0, import_react6.createElement)("circle", {
      key: "dot-1",
      cx: "5.5",
      cy: "5.5",
      r: "1.25",
      fill: "currentColor"
    }),
    (0, import_react6.createElement)("circle", {
      key: "dot-2",
      cx: "10.5",
      cy: "10.5",
      r: "1.25",
      fill: "currentColor"
    }),
    (0, import_react6.createElement)("path", {
      key: "edge",
      d: "M6.75 5.5h1.75a2 2 0 0 1 2 2v1.75",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round"
    })
  ]);
  const registerCanvas = (sidebar) => {
    if (!sidebar || typeof sidebar.registerTab !== "function") return () => {
    };
    bindBetterSidebar(sidebar);
    return sidebar.registerTab({
      id: CANVAS_TAB_ID,
      title: () => t("details.canvasTab"),
      icon: renderCanvasIcon,
      order: 5,
      hidden: false,
      single: true,
      component: (props) => (0, import_react6.createElement)(CanvasTab, { ...props, t })
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
