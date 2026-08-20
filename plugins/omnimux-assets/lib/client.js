window.__ModuleLoader__.load({
  id: "omnimux-assets",
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
  "nav": "\u8D44\u4EA7\u5E93",
  "stage.title": "\u8D44\u4EA7\u5E93",
  "stage.refresh": "\u5237\u65B0",
  "stage.close": "\u5173\u95ED",
  "loading": "\u6B63\u5728\u8BFB\u53D6\u8D44\u4EA7\u5E93\u6570\u636E\u2026",
  "mapping.group": "\u672C\u5730\u6587\u4EF6\u5939",
  "mapping.addDir": "\u6DFB\u52A0\u6587\u4EF6\u5939",
  "mapping.addFile": "\u6DFB\u52A0\u6587\u4EF6",
  "mapping.empty": "\u8FD8\u6CA1\u6709\u672C\u5730\u6587\u4EF6\u6216\u6587\u4EF6\u5939\u3002",
  "mapping.invalid": "\u8DEF\u5F84\u4E0D\u53EF\u7528",
  "mapping.rename": "\u91CD\u547D\u540D",
  "mapping.renamePrompt": "\u65B0\u7684\u540D\u79F0",
  "mapping.remove": "\u79FB\u9664",
  "mapping.removeTitle": "\u79FB\u9664\u201C{name}\u201D\uFF1F",
  "mapping.removeHint": "\u4EC5\u5728\u5F53\u524D\u5217\u8868\u79FB\u9664\uFF0C\u5B9E\u9645\u7684\u6587\u4EF6\u4E0D\u53D7\u5F71\u54CD\u3002",
  "mapping.removeConfirm": "\u79FB\u9664",
  "mapping.cancel": "\u53D6\u6D88",
  "mapping.rescan": "\u91CD\u65B0\u626B\u63CF",
  "mapping.files": "\u6587\u4EF6",
  "mapping.kindFile": "\u6587\u4EF6",
  "mapping.kindDir": "\u6587\u4EF6\u5939",
  "artifact.group": "\u672C\u5730\u4EA7\u7269",
  "artifact.all": "\u5168\u90E8\u4EA7\u7269",
  "artifact.empty": "\u8FD8\u6CA1\u6709\u4E0A\u62A5\u7684\u4EA7\u7269\u3002\u53EF\u8BA9 Agent \u8C03\u7528 assets_upload \u4E0A\u62A5\u3002",
  "artifact.agent": "\u6765\u6E90 Agent",
  "artifact.model": "\u6A21\u578B",
  "artifact.filter": "\u7C7B\u578B",
  "table.name": "\u540D\u79F0",
  "table.size": "\u5927\u5C0F",
  "table.mtime": "\u4FEE\u6539\u65F6\u95F4",
  "table.type": "\u7C7B\u578B",
  "table.time": "\u65F6\u95F4",
  "table.empty": "\u6682\u65E0\u5185\u5BB9\u3002",
  "type.image": "\u56FE\u7247",
  "type.video": "\u89C6\u9891",
  "type.audio": "\u97F3\u9891",
  "type.document": "\u6587\u6863",
  "type.html": "\u7F51\u9875",
  "type.json": "JSON",
  "type.other": "\u5176\u4ED6",
  "detail.file": "\u6587\u4EF6\u8BE6\u60C5",
  "detail.artifact": "\u4EA7\u7269\u8BE6\u60C5",
  "detail.path": "\u771F\u5B9E\u8DEF\u5F84",
  "detail.size": "\u5927\u5C0F",
  "detail.mtime": "\u4FEE\u6539\u65F6\u95F4",
  "detail.type": "\u7C7B\u578B",
  "detail.agent": "\u6765\u6E90 Agent",
  "detail.model": "\u6A21\u578B",
  "detail.promptHash": "Prompt \u6458\u8981",
  "detail.runId": "\u8FD0\u884C ID",
  "detail.sessionId": "\u4F1A\u8BDD ID",
  "detail.traced": "\u5DF2\u6EAF\u6E90",
  "detail.untraced": "\u672A\u6EAF\u6E90",
  "detail.contentRef": "\u5B58\u50A8\u4F4D\u7F6E",
  "detail.close": "\u5173\u95ED",
  "error.generic": "\u8BF7\u6C42\u5931\u8D25",
  "error.pickerUnsupported": "\u5F53\u524D\u5E73\u53F0\u6682\u4E0D\u652F\u6301\u7CFB\u7EDF\u9009\u62E9\u7A97\uFF0C\u8BF7\u4F7F\u7528 macOS\u3002",
  "error.pickerFailed": "\u7CFB\u7EDF\u9009\u62E9\u7A97\u6253\u5F00\u5931\u8D25\u3002"
};
var en = {
  "nav": "Assets",
  "stage.title": "Asset Library",
  "stage.refresh": "Refresh",
  "stage.close": "Close",
  "loading": "Loading asset library\u2026",
  "mapping.group": "Local folders",
  "mapping.addDir": "Add folder",
  "mapping.addFile": "Add file",
  "mapping.empty": "No local files or folders yet.",
  "mapping.invalid": "Path unavailable",
  "mapping.rename": "Rename",
  "mapping.renamePrompt": "New name",
  "mapping.remove": "Remove",
  "mapping.removeTitle": "Remove \u201C{name}\u201D?",
  "mapping.removeHint": "Only removed from this list \u2014 the real file stays untouched.",
  "mapping.removeConfirm": "Remove",
  "mapping.cancel": "Cancel",
  "mapping.rescan": "Rescan",
  "mapping.files": "Files",
  "mapping.kindFile": "File",
  "mapping.kindDir": "Folder",
  "artifact.group": "Local artifacts",
  "artifact.all": "All artifacts",
  "artifact.empty": "No reported artifacts yet. Ask the agent to call assets_upload.",
  "artifact.agent": "Source agent",
  "artifact.model": "Model",
  "artifact.filter": "Type",
  "table.name": "Name",
  "table.size": "Size",
  "table.mtime": "Modified",
  "table.type": "Type",
  "table.time": "Time",
  "table.empty": "Nothing here yet.",
  "type.image": "Image",
  "type.video": "Video",
  "type.audio": "Audio",
  "type.document": "Document",
  "type.html": "HTML",
  "type.json": "JSON",
  "type.other": "Other",
  "detail.file": "File details",
  "detail.artifact": "Artifact details",
  "detail.path": "Real path",
  "detail.size": "Size",
  "detail.mtime": "Modified",
  "detail.type": "Type",
  "detail.agent": "Source agent",
  "detail.model": "Model",
  "detail.promptHash": "Prompt hash",
  "detail.runId": "Run ID",
  "detail.sessionId": "Session ID",
  "detail.traced": "Traced",
  "detail.untraced": "Not traced",
  "detail.contentRef": "Stored at",
  "detail.close": "Close",
  "error.generic": "Request failed",
  "error.pickerUnsupported": "The system picker is only available on macOS for now.",
  "error.pickerFailed": "Failed to open the system picker."
};
var NS = "omnimux-assets";

// src/client/stage-store.js
var PRODUCT_STAGE_EVENT = "dsh-product-stage";
var STAGE_ID = "omnimux-assets";
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
var ICON = '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><rect x="1.5" y="2.5" width="13" height="11" rx="1.5"/><path d="M1.5 6.5h13"/><path d="M5.5 6.5v7"/></svg>';
var STYLES = `
.omnimux-assets-entry {
  box-sizing: border-box; display: flex; align-items: center; gap: 6px; position: relative;
  width: calc(100% - 8px); height: 32px; margin: 0 4px; padding: 0 8px;
  border: none; border-radius: 8px; background: transparent;
  color: var(--dsw-alias-label-primary, inherit);
  font: var(--dsw-font-s-14, inherit); font-size: 14px; line-height: 20px;
  cursor: pointer; text-align: left;
}
.omnimux-assets-entry:hover { background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,.12)); }
.omnimux-assets-entry[data-active="true"] { background: var(--dsw-alias-interactive-bg-active, rgba(128,128,128,.18)); font-weight: 500; }
.omnimux-assets-entry-icon { flex: none; display: inline-flex; width: 14px; height: 14px; align-items: center; justify-content: center; }
.omnimux-assets-entry svg { display: block; width: 14px; height: 14px; }
.omnimux-assets-entry-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 20px; }
`;
function paintLabel(entry, label3) {
  entry.setAttribute("aria-label", label3);
  const node = entry.querySelector(".omnimux-assets-entry-label");
  if (node) node.textContent = label3;
}
function registerWhenReady(row3) {
  let unregister = () => {
  };
  let disposed = false;
  const attempt = () => {
    if (disposed) return;
    const api = window.__omnimuxSidebar;
    if (!api || typeof api.register !== "function") return;
    unregister = api.register(row3);
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
  entry.dataset.dshOmnimuxAssetsEntry = "";
  entry.className = "omnimux-assets-entry";
  entry.innerHTML = `<span class="omnimux-assets-entry-icon">${ICON}</span><span class="omnimux-assets-entry-label"></span>`;
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
    id: "omnimux-assets-entry",
    rank: 4,
    styles: STYLES,
    styleId: "omnimux-assets-entry-styles",
    create: () => entry
  });
  return () => {
    unregister();
    unsubscribeStage();
    unsubscribeLocale();
  };
}

// src/client/AssetsStage.jsx
var import_react2 = require("react");

// src/client/a11y.js
var FOCUS_CSS = [
  ".omnimux-assets-focusable:focus-visible{outline:2px solid var(--dsw-alias-bg-interactive-primary,#3b6fbd);outline-offset:-2px;border-radius:4px;}",
  "tr.omnimux-assets-focusable:hover{background:var(--dsw-alias-interactive-bg-hover,rgba(128,128,128,.12));}"
].join("\n");
function activateRowKeydown(trigger) {
  return (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      trigger();
    }
  };
}

// src/client/icons.jsx
var import_jsx_runtime = require("react/jsx-runtime");
function Icon({ size = 14, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      style: { flex: "none", display: "inline-block", verticalAlign: "middle" },
      children
    }
  );
}
function FolderIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" }) });
}
function FileIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Icon, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M14 3v5h5" })
  ] });
}
function AlertIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Icon, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 4 2.8 20h18.4Z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 10v4" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 17.5h.01" })
  ] });
}
function FolderCheckIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Icon, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m9 13 2 2 4-4" })
  ] });
}
function PlusIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Icon, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 5v14" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14" })
  ] });
}
function DotsIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Icon, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "5", cy: "12", r: "1.6", fill: "currentColor", stroke: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "12", cy: "12", r: "1.6", fill: "currentColor", stroke: "none" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { cx: "19", cy: "12", r: "1.6", fill: "currentColor", stroke: "none" })
  ] });
}
function CloseIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Icon, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 6l12 12" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18 6 6 18" })
  ] });
}
function RefreshIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Icon, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 11a8 8 0 0 0-14.9-3" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 5v4h4" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 13a8 8 0 0 0 14.9 3" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 19v-4h-4" })
  ] });
}
function ChevronRightIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m9 6 6 6-6 6" }) });
}

// src/client/api.js
async function assetsRequest(path, opts = {}) {
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
function getState(mrev, arev) {
  const query = new URLSearchParams();
  if (Number.isFinite(
    /** @type {number} */
    mrev
  )) query.set("mrev", String(mrev));
  if (Number.isFinite(
    /** @type {number} */
    arev
  )) query.set("arev", String(arev));
  const suffix = query.toString() ? `?${query}` : "";
  return assetsRequest(`/omnimux/assets/state${suffix}`);
}
function addMapping(path, name2) {
  return assetsRequest("/omnimux/assets/mappings", { method: "POST", body: { path, name: name2 } });
}
function renameMapping(id, name2) {
  return assetsRequest("/omnimux/assets/mappings/rename", { method: "POST", body: { id, name: name2 } });
}
function deleteMapping(id) {
  return assetsRequest("/omnimux/assets/mappings/delete", { method: "POST", body: { id } });
}
function pickPath(kind) {
  return assetsRequest("/omnimux/assets/pick", { method: "POST", body: { kind } });
}
function rescanMapping(id) {
  return assetsRequest("/omnimux/assets/mappings/rescan", { method: "POST", body: { id } });
}
function listFiles(id, subPath = "") {
  const query = new URLSearchParams({ id });
  if (subPath !== "") query.set("path", subPath);
  return assetsRequest(`/omnimux/assets/mappings/files?${query}`);
}
function listArtifacts(type, arev) {
  const query = new URLSearchParams();
  if (type) query.set("type", type);
  if (Number.isFinite(
    /** @type {number} */
    arev
  )) query.set("arev", String(arev));
  const suffix = query.toString() ? `?${query}` : "";
  return assetsRequest(`/omnimux/assets/artifacts${suffix}`);
}

// src/client/MappingNav.jsx
var import_react = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var group = {
  padding: "8px 12px 4px",
  display: "flex",
  flexDirection: "column",
  gap: 2
};
var groupHeaderRow = {
  display: "flex",
  alignItems: "center",
  gap: 6,
  padding: "0 8px 6px",
  position: "relative"
};
var groupHeader = {
  flex: 1,
  minWidth: 0,
  display: "flex",
  alignItems: "center",
  gap: 6,
  fontSize: 12,
  fontWeight: 600,
  lineHeight: "16px",
  letterSpacing: 0.2,
  color: "var(--dsw-alias-label-secondary, var(--dsw-text-secondary, rgba(128,128,128,.9)))",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
};
var headerAddButton = {
  flex: "none",
  width: 22,
  height: 22,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  background: "transparent",
  color: "var(--dsw-alias-label-secondary, var(--dsw-text-secondary, rgba(128,128,128,.9)))",
  cursor: "pointer",
  borderRadius: 4,
  padding: 0
};
var row = {
  display: "flex",
  alignItems: "center",
  gap: 6,
  height: 32,
  padding: "0 8px 0 22px",
  // indented under the group header — visual hierarchy
  borderRadius: 8,
  cursor: "pointer",
  position: "relative",
  fontSize: 14,
  lineHeight: "20px"
};
var muted = {
  margin: 0,
  padding: "2px 8px",
  fontSize: 12,
  lineHeight: "18px",
  color: "var(--dsw-alias-label-secondary, var(--dsw-text-secondary, rgba(128,128,128,.9)))"
};
var menuButton = {
  flex: "none",
  width: 22,
  height: 22,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  background: "transparent",
  color: "var(--dsw-alias-label-secondary, inherit)",
  cursor: "pointer",
  borderRadius: 4,
  padding: 0
};
var dropdown = {
  position: "absolute",
  top: "100%",
  right: 4,
  zIndex: 6,
  display: "flex",
  flexDirection: "column",
  minWidth: 108,
  padding: 4,
  borderRadius: 8,
  background: "var(--dsw-alias-bg-elevated, var(--dsw-bg, #1c1c1c))",
  border: "1px solid var(--dsw-alias-border, var(--dsw-border, rgba(128,128,128,.35)))",
  boxShadow: "0 4px 16px rgba(0,0,0,.24)"
};
var headerDropdown = {
  ...dropdown,
  right: 0
};
var dropdownItem = {
  border: "none",
  background: "transparent",
  color: "inherit",
  cursor: "pointer",
  textAlign: "left",
  padding: "4px 8px",
  fontSize: 12,
  lineHeight: "18px",
  borderRadius: 4,
  whiteSpace: "nowrap"
};
var dangerItem = {
  ...dropdownItem,
  color: "var(--dsw-alias-label-danger, #d45656)"
};
var label = { flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" };
var count = { flex: "none", fontSize: 11, opacity: 0.7 };
function MappingNav({ t, mappings, activeId, busy, onSelect, onAddFile, onAddDir, onRename, onRemove }) {
  const [menuId, setMenuId] = (0, import_react.useState)("");
  const [addMenuOpen, setAddMenuOpen] = (0, import_react.useState)(false);
  const closeMenu = () => {
    setMenuId("");
  };
  const closeAddMenu = () => {
    setAddMenuOpen(false);
  };
  const handleRename = (rowValue) => {
    const next = window.prompt(t("mapping.renamePrompt"), rowValue.display_name);
    if (next === null) return;
    const name2 = next.trim();
    if (name2 === "" || name2 === rowValue.display_name) return;
    onRename(rowValue.id, name2);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: group, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: groupHeaderRow, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { style: groupHeader, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FolderIcon, {}),
        t("mapping.group")
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "button",
        {
          type: "button",
          style: headerAddButton,
          "aria-label": t("mapping.addDir"),
          disabled: busy,
          onClick: (event) => {
            event.stopPropagation();
            setAddMenuOpen(!addMenuOpen);
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(PlusIcon, {})
        }
      ),
      addMenuOpen ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "div",
          {
            style: { position: "fixed", inset: 0, zIndex: 5 },
            onClick: closeAddMenu
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
          "div",
          {
            style: headerDropdown,
            role: "menu",
            onKeyDown: (event) => {
              if (event.key === "Escape") {
                event.stopPropagation();
                closeAddMenu();
              }
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
                "button",
                {
                  type: "button",
                  style: { ...dropdownItem, display: "flex", alignItems: "center", gap: 6 },
                  role: "menuitem",
                  autoFocus: true,
                  onClick: () => {
                    closeAddMenu();
                    onAddDir();
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FolderIcon, {}),
                    t("mapping.addDir")
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
                "button",
                {
                  type: "button",
                  style: { ...dropdownItem, display: "flex", alignItems: "center", gap: 6 },
                  role: "menuitem",
                  onClick: () => {
                    closeAddMenu();
                    onAddFile();
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FileIcon, {}),
                    t("mapping.addFile")
                  ]
                }
              )
            ]
          }
        )
      ] }) : null
    ] }),
    mappings.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { style: muted, children: t("mapping.empty") }) : null,
    mappings.map((mapping) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      "div",
      {
        className: "omnimux-assets-focusable",
        tabIndex: 0,
        role: "button",
        "aria-label": String(mapping.display_name),
        onKeyDown: activateRowKeydown(() => {
          onSelect(String(mapping.id));
        }),
        style: {
          ...row,
          background: mapping.id === activeId ? "var(--dsw-alias-interactive-bg-active, rgba(128,128,128,.18))" : "transparent"
        },
        onClick: () => {
          onSelect(String(mapping.id));
        },
        onMouseEnter: (event) => {
          event.currentTarget.style.background = "var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,.12))";
        },
        onMouseLeave: (event) => {
          event.currentTarget.style.background = mapping.id === activeId ? "var(--dsw-alias-interactive-bg-active, rgba(128,128,128,.18))" : "transparent";
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { "aria-hidden": "true", style: { display: "inline-flex", color: mapping.status !== "ok" ? "var(--dsw-alias-label-warning, #d48806)" : "inherit" }, children: mapping.status !== "ok" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AlertIcon, {}) : mapping.kind === "file" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FileIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FolderIcon, {}) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: label, title: mapping.real_path, children: mapping.display_name }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: count, children: mapping.status === "ok" ? mapping.file_count : "\u2014" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "button",
            {
              type: "button",
              "aria-label": t("mapping.rename"),
              style: menuButton,
              disabled: busy,
              onClick: (event) => {
                event.stopPropagation();
                setMenuId(menuId === mapping.id ? "" : String(mapping.id));
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(DotsIcon, {})
            }
          ),
          menuId === mapping.id ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "div",
              {
                style: { position: "fixed", inset: 0, zIndex: 5 },
                onClick: (event) => {
                  event.stopPropagation();
                  closeMenu();
                }
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
              "div",
              {
                style: dropdown,
                role: "menu",
                onClick: (event) => {
                  event.stopPropagation();
                },
                onKeyDown: (event) => {
                  if (event.key === "Escape") {
                    event.stopPropagation();
                    closeMenu();
                  }
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                    "button",
                    {
                      type: "button",
                      style: dropdownItem,
                      role: "menuitem",
                      autoFocus: true,
                      onClick: () => {
                        closeMenu();
                        handleRename(mapping);
                      },
                      children: t("mapping.rename")
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                    "button",
                    {
                      type: "button",
                      style: dangerItem,
                      role: "menuitem",
                      onClick: () => {
                        closeMenu();
                        onRemove(mapping);
                      },
                      children: t("mapping.remove")
                    }
                  )
                ]
              }
            )
          ] }) : null
        ]
      },
      String(mapping.id)
    ))
  ] });
}

// src/client/ArtifactNav.jsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var group2 = {
  padding: "8px 12px 4px",
  display: "flex",
  flexDirection: "column",
  gap: 2
};
var groupHeader2 = {
  display: "flex",
  alignItems: "center",
  gap: 6,
  fontSize: 12,
  fontWeight: 600,
  lineHeight: "16px",
  letterSpacing: 0.2,
  color: "var(--dsw-alias-label-secondary, var(--dsw-text-secondary, rgba(128,128,128,.9)))",
  padding: "0 8px 6px"
};
var row2 = {
  display: "flex",
  alignItems: "center",
  gap: 6,
  height: 32,
  padding: "0 8px 0 22px",
  // indented under the group header — visual hierarchy
  borderRadius: 8,
  cursor: "pointer",
  fontSize: 14,
  lineHeight: "20px"
};
var label2 = { flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" };
var count2 = { flex: "none", fontSize: 11, opacity: 0.7 };
var BUCKETS = ["image", "video", "audio", "document", "html", "json"];
function ArtifactNav({ t, artifacts, activeType, onSelect }) {
  const counts = {};
  for (const artifact of artifacts) {
    const type = typeof artifact.type === "string" ? artifact.type : "other";
    counts[type] = (counts[type] ?? 0) + 1;
  }
  const renderRow = (key, text, value, active, rowCount) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "div",
    {
      className: "omnimux-assets-focusable",
      tabIndex: 0,
      role: "button",
      "aria-label": String(text),
      onKeyDown: activateRowKeydown(() => {
        onSelect(value);
      }),
      style: {
        ...row2,
        background: active ? "var(--dsw-alias-interactive-bg-active, rgba(128,128,128,.18))" : "transparent"
      },
      onClick: () => {
        onSelect(value);
      },
      onMouseEnter: (event) => {
        event.currentTarget.style.background = "var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,.12))";
      },
      onMouseLeave: (event) => {
        event.currentTarget.style.background = active ? "var(--dsw-alias-interactive-bg-active, rgba(128,128,128,.18))" : "transparent";
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { style: label2, children: text }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { style: count2, children: rowCount })
      ]
    },
    key
  );
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: group2, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: groupHeader2, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(FolderCheckIcon, {}),
      t("artifact.group")
    ] }),
    renderRow("all", t("artifact.all"), "", activeType === "", artifacts.length),
    BUCKETS.filter((bucket) => (counts[bucket] ?? 0) > 0).map((bucket) => renderRow(bucket, t(`type.${bucket}`), bucket, activeType === bucket, counts[bucket]))
  ] });
}

// src/client/format.js
function formatBytes(bytes) {
  const size = Number(bytes);
  if (!Number.isFinite(size) || size < 0) return "\u2014";
  if (size < 1024) return `${size} B`;
  const units = ["KB", "MB", "GB", "TB"];
  let value = size / 1024;
  let unit = 0;
  while (value >= 1024 && unit < units.length - 1) {
    value /= 1024;
    unit += 1;
  }
  return `${value >= 10 ? value.toFixed(0) : value.toFixed(1)} ${units[unit]}`;
}
function formatRelative(iso, now = Date.now()) {
  const time = Date.parse(iso);
  if (!Number.isFinite(time)) return "";
  const deltaSec = Math.round((time - now) / 1e3);
  const abs = Math.abs(deltaSec);
  if (abs >= 86400 * 30) return new Date(time).toLocaleString();
  const rtf = new Intl.RelativeTimeFormat(void 0, { numeric: "auto" });
  if (abs < 60) return rtf.format(Math.trunc(deltaSec), "second");
  if (abs < 3600) return rtf.format(Math.trunc(deltaSec / 60), "minute");
  if (abs < 86400) return rtf.format(Math.trunc(deltaSec / 3600), "hour");
  return rtf.format(Math.trunc(deltaSec / 86400), "day");
}
function formatDateTime(iso) {
  const time = Date.parse(iso);
  if (!Number.isFinite(time)) return "";
  return new Date(time).toLocaleString();
}

// src/client/FileTable.jsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: 13,
  lineHeight: "20px"
};
var th = {
  textAlign: "left",
  fontWeight: 600,
  fontSize: 11,
  textTransform: "uppercase",
  letterSpacing: 0.4,
  color: "var(--dsw-alias-label-secondary, var(--dsw-text-secondary, rgba(128,128,128,.9)))",
  padding: "6px 10px",
  borderBottom: "1px solid var(--dsw-alias-border, var(--dsw-border, rgba(128,128,128,.25)))",
  position: "sticky",
  top: 0,
  background: "var(--dsw-alias-bg-primary, var(--dsw-bg, #111))"
};
var td = {
  padding: "6px 10px",
  borderBottom: "1px solid var(--dsw-alias-border, var(--dsw-border, rgba(128,128,128,.15)))",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: 0
};
var muted2 = {
  margin: 0,
  fontSize: 12,
  lineHeight: "18px",
  color: "var(--dsw-alias-label-secondary, var(--dsw-text-secondary, rgba(128,128,128,.9)))"
};
function FileTable({ t, mapping, files, onOpenFile, onEnterDir }) {
  if (!mapping) {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { style: muted2, children: t("loading") });
  }
  if (mapping.status !== "ok") {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("p", { style: muted2, children: [
      "\u26A0 ",
      t("mapping.invalid")
    ] });
  }
  if (files.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { style: muted2, children: t("table.empty") });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("table", { style: tableStyle, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("tr", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("th", { style: { ...th, width: "40%" }, children: t("table.name") }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("th", { style: th, children: t("table.size") }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("th", { style: th, children: t("table.mtime") }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("th", { style: th, children: t("table.type") })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("tbody", { children: files.map((file) => {
      const activate = () => {
        if (file.is_dir) onEnterDir(file);
        else onOpenFile(file);
      };
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
        "tr",
        {
          className: "omnimux-assets-focusable",
          style: { cursor: "pointer" },
          tabIndex: 0,
          role: "button",
          "aria-label": String(file.name),
          onClick: activate,
          onKeyDown: activateRowKeydown(activate),
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("td", { style: td, title: String(file.relative_path), children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { style: { display: "inline-flex", alignItems: "center", gap: 6, maxWidth: "100%" }, children: [
              file.is_dir ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(FolderIcon, {}) : null,
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { style: { overflow: "hidden", textOverflow: "ellipsis" }, children: String(file.name) }),
              file.is_dir ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { style: { display: "inline-flex", color: "var(--dsw-alias-label-secondary, rgba(128,128,128,.9))" }, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ChevronRightIcon, {}) }) : null
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("td", { style: td, children: file.is_dir ? "\u2014" : formatBytes(Number(file.size)) }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("td", { style: td, children: formatRelative(String(file.mtime)) }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("td", { style: td, children: file.is_dir ? t("type.other") : t(`type.${file.type}`) })
          ]
        },
        String(file.relative_path)
      );
    }) })
  ] });
}

// src/client/ArtifactTable.jsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var tableStyle2 = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: 13,
  lineHeight: "20px"
};
var th2 = {
  textAlign: "left",
  fontWeight: 600,
  fontSize: 11,
  textTransform: "uppercase",
  letterSpacing: 0.4,
  color: "var(--dsw-alias-label-secondary, var(--dsw-text-secondary, rgba(128,128,128,.9)))",
  padding: "6px 10px",
  borderBottom: "1px solid var(--dsw-alias-border, var(--dsw-border, rgba(128,128,128,.25)))",
  position: "sticky",
  top: 0,
  background: "var(--dsw-alias-bg-primary, var(--dsw-bg, #111))"
};
var td2 = {
  padding: "6px 10px",
  borderBottom: "1px solid var(--dsw-alias-border, var(--dsw-border, rgba(128,128,128,.15)))",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: 0
};
var muted3 = {
  margin: 0,
  fontSize: 12,
  lineHeight: "18px",
  color: "var(--dsw-alias-label-secondary, var(--dsw-text-secondary, rgba(128,128,128,.9)))"
};
function ArtifactTable({ t, artifacts, onOpen }) {
  if (artifacts.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { style: muted3, children: t("artifact.empty") });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("table", { style: tableStyle2, children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("tr", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { style: { ...th2, width: "34%" }, children: t("table.name") }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { style: th2, children: t("artifact.agent") }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { style: th2, children: t("artifact.model") }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { style: th2, children: t("table.type") }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { style: th2, children: t("table.time") })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("tbody", { children: artifacts.map((artifact) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
      "tr",
      {
        className: "omnimux-assets-focusable",
        style: { cursor: "pointer" },
        tabIndex: 0,
        role: "button",
        "aria-label": String(artifact.title),
        onClick: () => {
          onOpen(artifact);
        },
        onKeyDown: activateRowKeydown(() => {
          onOpen(artifact);
        }),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { style: td2, title: String(artifact.title), children: String(artifact.title) }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { style: td2, children: String(artifact.source?.agent ?? "\u2014") }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { style: td2, children: artifact.source?.model ? String(artifact.source.model) : "\u2014" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { style: td2, children: t(`type.${artifact.type}`) }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { style: td2, children: formatRelative(String(artifact.created_at)) })
        ]
      },
      String(artifact.id)
    )) })
  ] });
}

// src/client/DetailPanel.jsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var panel = {
  flex: "none",
  width: 320,
  overflow: "auto",
  borderLeft: "1px solid var(--dsw-alias-border, var(--dsw-border, rgba(128,128,128,.25)))",
  background: "var(--dsw-alias-bg-secondary, var(--dsw-bg, #161616))",
  display: "flex",
  flexDirection: "column"
};
var header = {
  flex: "none",
  display: "flex",
  alignItems: "center",
  gap: 8,
  padding: "10px 14px",
  borderBottom: "1px solid var(--dsw-alias-border, var(--dsw-border, rgba(128,128,128,.25)))"
};
var title = {
  flex: 1,
  minWidth: 0,
  margin: 0,
  fontSize: 13,
  fontWeight: 600,
  lineHeight: "20px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
};
var body = {
  padding: "8px 14px 14px",
  display: "flex",
  flexDirection: "column",
  gap: 10
};
var fieldLabel = {
  fontSize: 11,
  lineHeight: "16px",
  textTransform: "uppercase",
  letterSpacing: 0.4,
  color: "var(--dsw-alias-label-secondary, var(--dsw-text-secondary, rgba(128,128,128,.9)))"
};
var fieldValue = {
  margin: "2px 0 0",
  fontSize: 13,
  lineHeight: "18px",
  wordBreak: "break-all"
};
var closeButton = {
  flex: "none",
  width: 24,
  height: 24,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  background: "transparent",
  color: "inherit",
  cursor: "pointer",
  borderRadius: 4,
  padding: 0
};
var badge = {
  display: "inline-block",
  fontSize: 11,
  lineHeight: "16px",
  padding: "1px 8px",
  borderRadius: 8
};
var tracedBadge = {
  ...badge,
  color: "var(--dsw-alias-label-success, #3f9142)",
  border: "1px solid var(--dsw-alias-label-success, #3f9142)"
};
var untracedBadge = {
  ...badge,
  color: "var(--dsw-alias-label-warning, #d48806)",
  border: "1px solid var(--dsw-alias-label-warning, #d48806)"
};
function Field({ label: label3, value }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { style: fieldLabel, children: label3 }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { style: fieldValue, children: value === "" || value === void 0 || value === null ? "\u2014" : String(value) })
  ] });
}
function DetailPanel({ t, detail, onClose }) {
  if (!detail) return null;
  if (detail.kind === "file") {
    const { file, mapping } = detail;
    const realPath = mapping && typeof mapping.real_path === "string" && typeof file.relative_path === "string" ? `${mapping.real_path.replace(/\/$/, "")}/${file.relative_path}` : "";
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("aside", { style: panel, "aria-label": t("detail.file"), children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: header, children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { style: title, title: String(file.name), children: String(file.name) }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("button", { type: "button", "aria-label": t("detail.close"), style: closeButton, onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CloseIcon, {}) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: body, children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Field, { label: t("detail.path"), value: realPath }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Field, { label: t("detail.size"), value: file.is_dir ? "\u2014" : formatBytes(Number(file.size)) }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Field, { label: t("detail.mtime"), value: formatDateTime(String(file.mtime)) }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Field, { label: t("detail.type"), value: file.is_dir ? t("type.other") : t(`type.${file.type}`) }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { style: { ...fieldValue, fontSize: 12, opacity: 0.7 }, children: t("mapping.deleteHint") })
      ] })
    ] });
  }
  const artifact = detail.artifact;
  const source = artifact?.source ?? {};
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("aside", { style: panel, "aria-label": t("detail.artifact"), children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: header, children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { style: title, title: String(artifact.title), children: String(artifact.title) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("button", { type: "button", "aria-label": t("detail.close"), style: closeButton, onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CloseIcon, {}) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: body, children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { style: source.traced ? tracedBadge : untracedBadge, children: source.traced ? t("detail.traced") : t("detail.untraced") }) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Field, { label: t("detail.agent"), value: source.agent }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Field, { label: t("detail.model"), value: source.model }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Field, { label: t("detail.promptHash"), value: source.prompt_hash }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Field, { label: t("detail.runId"), value: source.run_id }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Field, { label: t("detail.sessionId"), value: source.session_id }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Field, { label: t("detail.type"), value: t(`type.${artifact.type}`) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Field, { label: t("detail.size"), value: formatBytes(Number(artifact.size)) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Field, { label: t("detail.mtime"), value: formatDateTime(String(artifact.created_at)) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Field, { label: t("detail.contentRef"), value: artifact.content_ref })
    ] })
  ] });
}

// src/client/ConfirmRemoveDialog.jsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var backdrop = {
  position: "fixed",
  inset: 0,
  zIndex: 300,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(0,0,0,.4)"
};
var dialog = {
  width: 360,
  maxWidth: "calc(100vw - 48px)",
  display: "flex",
  flexDirection: "column",
  gap: 10,
  padding: 20,
  borderRadius: 12,
  background: "var(--dsw-alias-bg-elevated, var(--dsw-bg, #1c1c1c))",
  border: "1px solid var(--dsw-alias-border, var(--dsw-border, rgba(128,128,128,.35)))",
  boxShadow: "0 8px 32px rgba(0,0,0,.32)",
  color: "var(--dsw-alias-label-primary, inherit)"
};
var heading = {
  margin: 0,
  fontSize: 15,
  fontWeight: 600,
  lineHeight: "22px",
  wordBreak: "break-all"
};
var hint = {
  margin: 0,
  fontSize: 12,
  lineHeight: "18px",
  color: "var(--dsw-alias-label-secondary, var(--dsw-text-secondary, rgba(128,128,128,.9)))"
};
var buttons = {
  display: "flex",
  justifyContent: "flex-end",
  gap: 8,
  marginTop: 4
};
var ghostButton = {
  padding: "6px 14px",
  fontSize: 13,
  lineHeight: "20px",
  borderRadius: 6,
  cursor: "pointer",
  border: "1px solid var(--dsw-alias-border, var(--dsw-border, currentColor))",
  background: "transparent",
  color: "inherit"
};
var dangerButton = {
  ...ghostButton,
  fontWeight: 600,
  border: "none",
  color: "var(--dsw-alias-label-on-interactive, #fff)",
  background: "var(--dsw-alias-label-danger, #d45656)"
};
var dangerButtonDisabled = {
  ...dangerButton,
  opacity: 0.5,
  cursor: "default"
};
function ConfirmRemoveDialog({ t, name: name2, busy, onCancel, onConfirm }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "div",
    {
      style: backdrop,
      onMouseDown: (event) => {
        if (event.target === event.currentTarget) onCancel();
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
        "div",
        {
          role: "alertdialog",
          "aria-modal": "true",
          "aria-label": t("mapping.remove"),
          style: dialog,
          onKeyDown: (event) => {
            if (event.key === "Escape") onCancel();
            if (event.key === "Enter" && event.target instanceof HTMLElement && event.target.dataset.confirmRemove === "true") {
              onConfirm();
            }
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", { style: heading, children: t("mapping.removeTitle").replace("{name}", name2) }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { style: hint, children: t("mapping.removeHint") }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { style: buttons, children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("button", { type: "button", style: ghostButton, onClick: onCancel, autoFocus: true, children: t("mapping.cancel") }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                "button",
                {
                  type: "button",
                  style: busy ? dangerButtonDisabled : dangerButton,
                  disabled: busy,
                  "data-confirm-remove": "true",
                  onClick: onConfirm,
                  children: t("mapping.removeConfirm")
                }
              )
            ] })
          ]
        }
      )
    }
  );
}

// src/client/AssetsStage.jsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var POLL_MS = 5e3;
function messageOf(result, t) {
  return String(result.body?.message || result.body?.error || `HTTP ${String(result.status)}` || t("error.generic"));
}
function errText(caught) {
  return caught instanceof Error ? caught.message : String(caught);
}
function pickErrorText(result, t) {
  const code = String(result.body?.error ?? "");
  if (code === "picker-unsupported") return t("error.pickerUnsupported");
  if (code === "picker-failed") return t("error.pickerFailed");
  return messageOf(result, t);
}
var chromeButton = {
  border: "1px solid var(--dsw-alias-border, var(--dsw-border, currentColor))",
  background: "transparent",
  color: "inherit",
  borderRadius: 6,
  cursor: "pointer",
  fontSize: 12,
  lineHeight: "20px",
  padding: "2px 10px"
};
function breadcrumbButton(isCurrent) {
  return {
    border: "none",
    background: "transparent",
    cursor: isCurrent ? "default" : "pointer",
    fontSize: 14,
    fontWeight: 600,
    lineHeight: "20px",
    padding: "0 2px",
    borderRadius: 4,
    color: isCurrent ? "inherit" : "var(--dsw-alias-label-secondary, var(--dsw-text-secondary, rgba(128,128,128,.9)))"
  };
}
function AssetsStage({ t, stage }) {
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
  const [mappings, setMappings] = (0, import_react2.useState)([]);
  const [allArtifacts, setAllArtifacts] = (0, import_react2.useState)([]);
  const [files, setFiles] = (0, import_react2.useState)([]);
  const [view, setView] = (0, import_react2.useState)({ kind: "artifacts", type: "", subPath: "" });
  const [detail, setDetail] = (0, import_react2.useState)(null);
  const [pendingRemove, setPendingRemove] = (0, import_react2.useState)(null);
  const [error, setError] = (0, import_react2.useState)("");
  const [busy, setBusy] = (0, import_react2.useState)(false);
  const [revisions, setRevisions] = (0, import_react2.useState)({ mrev: null, arev: null });
  const revisionsRef = (0, import_react2.useRef)(revisions);
  const refreshState = (0, import_react2.useCallback)((force = false) => {
    const current = revisionsRef.current;
    const useRevs = !force && current.mrev !== null && current.arev !== null;
    return getState(useRevs ? current.mrev : void 0, useRevs ? current.arev : void 0).then((result) => {
      if (!result.ok) {
        setError(messageOf(result, t));
        return;
      }
      setError("");
      const next = { mrev: Number(result.body.mrev) || 0, arev: Number(result.body.arev) || 0 };
      revisionsRef.current = next;
      setRevisions(next);
      if (result.body.unchanged) return;
      setMappings(Array.isArray(result.body.mappings) ? result.body.mappings : []);
    }).catch((caught) => {
      setError(errText(caught));
    });
  }, [t]);
  const reloadArtifacts = (0, import_react2.useCallback)(() => {
    return listArtifacts().then((result) => {
      if (result.ok) setAllArtifacts(Array.isArray(result.body.artifacts) ? result.body.artifacts : []);
      else setError(messageOf(result, t));
    }).catch((caught) => {
      setError(errText(caught));
    });
  }, [t]);
  const reloadFiles = (0, import_react2.useCallback)(() => {
    if (view.kind !== "mapping" || !view.id) {
      setFiles([]);
      return Promise.resolve();
    }
    return listFiles(view.id, view.subPath ?? "").then((result) => {
      if (!result.ok) {
        setError(messageOf(result, t));
        return;
      }
      setError("");
      setFiles(Array.isArray(result.body.files) ? result.body.files : []);
      const mapping = result.body.mapping;
      if (mapping && typeof mapping.id === "string") {
        setMappings((prev) => prev.map((row3) => row3.id === mapping.id ? { ...row3, ...mapping } : row3));
      }
    }).catch((caught) => {
      setError(errText(caught));
    });
  }, [t, view.kind, view.id, view.subPath]);
  (0, import_react2.useEffect)(() => {
    if (!open) return void 0;
    void refreshState(true);
  }, [open, refreshState]);
  (0, import_react2.useEffect)(() => {
    if (!open) return void 0;
    void reloadArtifacts();
  }, [open, revisions.arev, reloadArtifacts]);
  (0, import_react2.useEffect)(() => {
    if (!open) return void 0;
    void reloadFiles();
  }, [open, reloadFiles]);
  (0, import_react2.useEffect)(() => {
    if (!open) return void 0;
    const timer = setInterval(() => {
      void refreshState();
    }, POLL_MS);
    return () => {
      clearInterval(timer);
    };
  }, [open, refreshState]);
  const run = (work, after) => {
    setBusy(true);
    setError("");
    void Promise.resolve(work()).then((result) => {
      if (!result.ok) {
        setError(messageOf(result, t));
        return;
      }
      if (after) after(result);
      return refreshState(true);
    }).catch((caught) => {
      setError(errText(caught));
    }).finally(() => {
      setBusy(false);
    });
  };
  const handleAddPicked = (kind) => {
    setBusy(true);
    setError("");
    void pickPath(kind).then((result) => {
      if (!result.ok) {
        setError(pickErrorText(result, t));
        return;
      }
      const path = typeof result.body?.path === "string" ? result.body.path : null;
      if (path === null) return;
      const clean = path.replace(/\/+$/, "");
      const base = clean.split("/").pop() || clean;
      return run(() => addMapping(clean, base), (addedResult) => {
        const mapping = addedResult.body?.mapping;
        if (mapping && typeof mapping.id === "string") {
          setView({ kind: "mapping", id: mapping.id, subPath: "" });
          setDetail(null);
          setFiles([]);
        }
      });
    }).catch((caught) => {
      setError(errText(caught));
    }).finally(() => {
      setBusy(false);
    });
  };
  const handleRename = (id, name2) => {
    run(() => renameMapping(id, name2));
  };
  const handleConfirmRemove = (mapping) => {
    run(() => deleteMapping(mapping.id), () => {
      setPendingRemove(null);
      if (view.kind === "mapping" && view.id === mapping.id) {
        setView({ kind: "artifacts", type: "" });
        setFiles([]);
        setDetail(null);
      }
    });
  };
  const handleRescan = (id) => {
    run(() => rescanMapping(id), (result) => {
      setFiles(Array.isArray(result.body?.files) ? result.body.files : []);
    });
  };
  const handleManualRefresh = () => {
    void refreshState(true);
    void reloadArtifacts();
    void reloadFiles();
  };
  const handleEnterDir = (file) => {
    if (view.kind !== "mapping") return;
    const next = view.subPath ? `${view.subPath}/${file.name}` : String(file.name);
    setView({ ...view, subPath: next });
    setDetail(null);
  };
  const handleBreadcrumb = (subPath) => {
    if (view.kind !== "mapping") return;
    setView({ ...view, subPath });
    setDetail(null);
  };
  if (!open || !stage) return null;
  const currentMapping = view.kind === "mapping" ? mappings.find((row3) => row3.id === view.id) : void 0;
  const visibleArtifacts = view.kind === "artifacts" ? allArtifacts.filter((row3) => !view.type || row3.type === view.type) : [];
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
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
        overflow: "auto"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("style", { children: FOCUS_CSS }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
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
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
              /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
                "button",
                {
                  type: "button",
                  style: { ...chromeButton, display: "inline-flex", alignItems: "center", gap: 5 },
                  onClick: handleManualRefresh,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(RefreshIcon, {}),
                    t("stage.refresh")
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
                    width: 28,
                    height: 28,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 6,
                    padding: 0
                  },
                  children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(CloseIcon, { size: 16 })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { style: { flex: 1, minHeight: 0, display: "flex", overflow: "hidden" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
            "nav",
            {
              style: {
                flex: "none",
                width: 220,
                overflow: "auto",
                padding: "8px 0",
                borderRight: "1px solid var(--dsw-alias-border, var(--dsw-border, rgba(128,128,128,.25)))"
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                  MappingNav,
                  {
                    t,
                    mappings,
                    activeId: view.kind === "mapping" ? view.id : "",
                    busy,
                    onSelect: (id) => {
                      setView({ kind: "mapping", id, subPath: "" });
                      setDetail(null);
                    },
                    onAddFile: () => {
                      handleAddPicked("file");
                    },
                    onAddDir: () => {
                      handleAddPicked("directory");
                    },
                    onRename: handleRename,
                    onRemove: (mapping) => {
                      setPendingRemove(mapping);
                    }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                  ArtifactNav,
                  {
                    t,
                    artifacts: allArtifacts,
                    activeType: view.kind === "artifacts" ? view.type : null,
                    onSelect: (type) => {
                      setView({ kind: "artifacts", type });
                      setDetail(null);
                    }
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("main", { style: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column", overflow: "hidden" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
              "div",
              {
                style: {
                  flex: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  flexWrap: "wrap",
                  padding: "10px 16px",
                  borderBottom: "1px solid var(--dsw-alias-border, var(--dsw-border, rgba(128,128,128,.25)))"
                },
                children: [
                  view.kind === "mapping" && currentMapping ? /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("nav", { "aria-label": "breadcrumb", style: { display: "flex", alignItems: "center", gap: 2, flexWrap: "wrap", minWidth: 0 }, children: [
                    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                      "button",
                      {
                        type: "button",
                        style: breadcrumbButton(!view.subPath),
                        onClick: () => {
                          handleBreadcrumb("");
                        },
                        children: currentMapping.display_name
                      }
                    ),
                    (view.subPath ? view.subPath.split("/") : []).map((segment, index, all) => {
                      const prefix = all.slice(0, index + 1).join("/");
                      const isLast = index === all.length - 1;
                      return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { style: { display: "inline-flex", alignItems: "center", gap: 2 }, children: [
                        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { style: { color: "var(--dsw-alias-label-secondary, rgba(128,128,128,.9))", fontSize: 12 }, children: "/" }),
                        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                          "button",
                          {
                            type: "button",
                            style: breadcrumbButton(isLast),
                            onClick: () => {
                              handleBreadcrumb(prefix);
                            },
                            children: segment
                          }
                        )
                      ] }, prefix);
                    })
                  ] }) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { style: { margin: 0, fontSize: 14, fontWeight: 600, lineHeight: "20px" }, children: view.type ? t(`type.${view.type}`) : t("artifact.all") }),
                  view.kind === "mapping" && currentMapping && currentMapping.status !== "ok" ? /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("span", { style: { fontSize: 12, color: "var(--dsw-alias-label-warning, #d48806)" }, children: [
                    "\u26A0 ",
                    t("mapping.invalid")
                  ] }) : null,
                  view.kind === "mapping" && currentMapping ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                    "button",
                    {
                      type: "button",
                      style: chromeButton,
                      disabled: busy || currentMapping.status !== "ok",
                      onClick: () => {
                        handleRescan(currentMapping.id);
                      },
                      children: t("mapping.rescan")
                    }
                  ) : null,
                  view.kind === "artifacts" ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { style: { display: "flex", gap: 6, flexWrap: "wrap" }, children: ["image", "video", "audio", "document", "html", "json"].map((type) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                    "button",
                    {
                      type: "button",
                      style: {
                        ...chromeButton,
                        ...view.type === type ? { fontWeight: 600 } : {}
                      },
                      onClick: () => {
                        setView({ kind: "artifacts", type: view.type === type ? "" : type });
                        setDetail(null);
                      },
                      children: t(`type.${type}`)
                    },
                    type
                  )) }) : null
                ]
              }
            ),
            error !== "" ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { style: { margin: 0, padding: "6px 16px", fontSize: 12, color: "var(--dsw-alias-label-danger, #d45656)" }, children: error }) : null,
            /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { style: { flex: 1, minHeight: 0, display: "flex", overflow: "hidden" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { style: { flex: 1, minWidth: 0, overflow: "auto", padding: "8px 16px" }, children: view.kind === "mapping" ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                FileTable,
                {
                  t,
                  mapping: currentMapping,
                  files,
                  onOpenFile: (file) => {
                    setDetail({ kind: "file", file, mapping: currentMapping });
                  },
                  onEnterDir: handleEnterDir
                }
              ) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                ArtifactTable,
                {
                  t,
                  artifacts: visibleArtifacts,
                  onOpen: (artifact) => {
                    setDetail({ kind: "artifact", artifact });
                  }
                }
              ) }),
              detail ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(DetailPanel, { t, detail, onClose: () => {
                setDetail(null);
              } }) : null
            ] })
          ] })
        ] }),
        pendingRemove ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          ConfirmRemoveDialog,
          {
            t,
            name: String(pendingRemove.display_name),
            busy,
            onCancel: () => {
              setPendingRemove(null);
            },
            onConfirm: () => {
              handleConfirmRemove(pendingRemove);
            }
          }
        ) : null
      ]
    }
  );
}

// src/client/index.js
var name = "omnimux-assets";
var inject = ["slots", "locale"];
function apply(ctx) {
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), "omnimux-assets: dictionaries");
  const t = ctx.locale.bind(NS);
  const stage = createStageStore(() => window.__omnimuxStage);
  const stageFace = () => ({ t, stage });
  ctx.effect(() => mountSidebarEntry(stage, t, ctx.locale), "omnimux-assets: sidebar entry");
  ctx.slots.inject("shell.overlay", () => ctx.slots.register({
    name: "shell.overlay",
    id: "omnimux-assets-stage",
    order: 30,
    locale: NS,
    inject: stageFace
  }, AssetsStage));
}

    return module.exports;
  }
});
