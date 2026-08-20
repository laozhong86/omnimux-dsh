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

// src/client/locales.js
var zh = {
  "nav": "\u5DE5\u4F5C\u6D41",
  "stage.title": "\u5DE5\u4F5C\u6D41\u753B\u5E03",
  "stage.close": "\u5173\u95ED",
  "canvas.loading": "\u6B63\u5728\u52A0\u8F7D\u753B\u5E03\u2026",
  "canvas.loadFailed": "\u753B\u5E03\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002",
  "canvas.retry": "\u91CD\u8BD5"
};
var en = {
  "nav": "Workflow",
  "stage.title": "Workflow Canvas",
  "stage.close": "Close",
  "canvas.loading": "Loading canvas\u2026",
  "canvas.loadFailed": "Failed to load the canvas, please retry.",
  "canvas.retry": "Retry"
};
var NS = "dsh-workflow";

// src/client/stage-store.js
var STAGE_ID = "omnimux-workflow";
function createStageStore(stage) {
  let open = false;
  const listeners = /* @__PURE__ */ new Set();
  function emit() {
    for (const listener of listeners) listener();
  }
  window.addEventListener(stage.PRODUCT_STAGE_EVENT, (event) => {
    const id = event instanceof CustomEvent ? event.detail?.id : void 0;
    if (id !== STAGE_ID && open) {
      open = false;
      emit();
    }
  });
  return {
    getSnapshot: () => open,
    readBox: stage.readBox,
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
.dsh-workflow-entry {
  box-sizing: border-box; display: flex; align-items: center; gap: 6px; position: relative;
  width: calc(100% - 8px); height: 32px; margin: 0 4px; padding: 0 8px;
  border: none; border-radius: 8px; background: transparent;
  color: var(--dsw-alias-label-primary, inherit);
  font: var(--dsw-font-s-14, inherit); font-size: 14px; line-height: 20px;
  cursor: pointer; text-align: left;
}
.dsh-workflow-entry:hover { background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,.12)); }
.dsh-workflow-entry[data-active="true"] { background: var(--dsw-alias-interactive-bg-active, rgba(128,128,128,.18)); font-weight: 500; }
.dsh-workflow-entry-icon { flex: none; display: inline-flex; width: 14px; height: 14px; align-items: center; justify-content: center; }
.dsh-workflow-entry svg { display: block; width: 14px; height: 14px; }
.dsh-workflow-entry-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 20px; }
`;
function injectStyles() {
  if (document.getElementById("dsh-workflow-entry-styles")) return;
  const style = document.createElement("style");
  style.id = "dsh-workflow-entry-styles";
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
function anchorRow(root) {
  const assets = root.querySelector("[data-omnimux-assets-entry]");
  if (assets instanceof HTMLElement) return assets;
  const esc = root.querySelector("[data-omnimux-esc-entry]");
  if (esc instanceof HTMLElement) return esc;
  const taskboard = root.querySelector("[data-dsh-taskboard-entry]");
  if (taskboard instanceof HTMLElement) return taskboard;
  return newSessionButton(root);
}
function paintLabel(entry, label) {
  entry.setAttribute("aria-label", label);
  const node = entry.querySelector(".dsh-workflow-entry-label");
  if (node) node.textContent = label;
}
function createEntry(stage, t) {
  const entry = document.createElement("button");
  entry.type = "button";
  entry.dataset.dshWorkflowEntry = "";
  entry.className = "dsh-workflow-entry";
  entry.innerHTML = `<span class="dsh-workflow-entry-icon">${ICON}</span><span class="dsh-workflow-entry-label"></span>`;
  paintLabel(entry, t("nav"));
  entry.addEventListener("click", () => {
    stage.toggle();
  });
  return entry;
}
function placeEntry(root, entry) {
  const anchor = anchorRow(root);
  if (anchor === void 0) return false;
  if (entry.previousElementSibling === anchor && entry.parentElement === root) return true;
  anchor.after(entry);
  return true;
}
function mountSidebarEntry(stage, t, locale) {
  injectStyles();
  const entry = createEntry(stage, t);
  const paint = () => {
    paintLabel(entry, t("nav"));
  };
  const unsubscribeLocale = typeof locale?.subscribe === "function" ? locale.subscribe(paint) : () => {
  };
  let root;
  let placed = false;
  const syncActive = () => {
    if (stage.getSnapshot()) entry.dataset.active = "true";
    else delete entry.dataset.active;
  };
  const tryPlace = () => {
    if (root !== void 0 && !root.isConnected) {
      rootObserver.disconnect();
      root = void 0;
      placed = false;
    }
    if (placed) {
      if (!document.body.contains(entry)) {
        rootObserver.disconnect();
        root = void 0;
        placed = false;
      } else if (root !== void 0) {
        const anchor = anchorRow(root);
        if (anchor !== void 0 && entry.previousElementSibling === anchor && entry.parentElement === root) return;
        placed = false;
      }
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
    if (!root.contains(entry) || entry.previousElementSibling !== anchorRow(root)) {
      placed = placeEntry(root, entry);
    }
  });
  const retry = setInterval(() => {
    tryPlace();
  }, 2e3);
  const unsubscribe = stage.subscribe(syncActive);
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

// src/client/WorkflowStage.jsx
var import_react2 = require("react");

// src/client/CanvasBridge.jsx
var import_react = require("react");

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

// src/client/CanvasBridge.jsx
var import_jsx_runtime = require("react/jsx-runtime");
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
function CanvasBridge({ onClose, t }) {
  const containerRef = (0, import_react.useRef)(null);
  const mountedRef = (0, import_react.useRef)(false);
  const [status, setStatus] = (0, import_react.useState)("loading");
  const load = (0, import_react.useCallback)(async () => {
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
        api.mountCanvas(el, { onClose });
        mountedRef.current = true;
        setStatus("ready");
      }
    } catch {
      setStatus("error");
    }
  }, [onClose]);
  (0, import_react.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { position: "absolute", inset: 0, overflow: "hidden" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref: containerRef, style: { width: "100%", height: "100%" } }),
    status === "loading" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    status === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("canvas.loadFailed") }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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

// src/client/WorkflowStage.jsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function WorkflowStage({ t, stage }) {
  const open = (0, import_react2.useSyncExternalStore)(
    stage ? stage.subscribe : () => () => {
    },
    stage ? stage.getSnapshot : () => false
  );
  const [box, setBox] = (0, import_react2.useState)(() => ({ top: 0, left: 0, width: 0, height: 0 }));
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
  }, [open]);
  if (!open || !stage) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "div",
    {
      role: "region",
      "aria-label": t("stage.title"),
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
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
          "div",
          {
            style: {
              flex: "none",
              display: "flex",
              alignItems: "center",
              gap: 12,
              minHeight: 32,
              padding: "12px 20px",
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
                  children: t("stage.title")
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "button",
                {
                  type: "button",
                  "aria-label": t("stage.close"),
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
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { flex: 1, minHeight: 0, position: "relative" }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(CanvasBridge, { onClose: () => {
          stage.set(false);
        }, t }) })
      ]
    }
  );
}

// src/client/index.js
var name = "omnimux-workflow";
var inject = ["slots", "locale", "product-stage"];
function apply(ctx) {
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), "omnimux-workflow: dictionaries");
  const t = ctx.locale.bind(NS);
  const stage = createStageStore(ctx.get("product-stage"));
  const stageFace = () => ({ t, stage });
  ctx.effect(() => mountSidebarEntry(stage, t, ctx.locale), "omnimux-workflow: sidebar entry");
  ctx.slots.inject("shell.overlay", () => ctx.slots.register({
    name: "shell.overlay",
    id: "omnimux-workflow-stage",
    order: 40,
    locale: NS,
    inject: stageFace
  }, WorkflowStage));
}

    return module.exports;
  }
});
