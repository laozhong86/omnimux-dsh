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
  "stage.title": "\u521B\u4F5C\u8D44\u4EA7\u5E93",
  "stage.subtitle": "\u96C6\u4E2D\u7BA1\u7406\u53EF\u590D\u7528\u7684\u89D2\u8272\u3001\u573A\u666F\u9884\u8BBE\u3001\u89C6\u89C9\u98CE\u683C\u4E0E\u77E5\u8BC6\u5E93\uFF0C\u4F9B Agent \u5168\u5C40\u8C03\u7528",
  "stage.refresh": "\u5237\u65B0",
  "stage.refreshing": "\u6B63\u5728\u5237\u65B0\u2026",
  "stage.close": "\u5173\u95ED",
  "loading": "\u6B63\u5728\u52A0\u8F7D\u8D44\u4EA7\u5E93\u2026",
  "add.button": "\u6DFB\u52A0\u8D44\u4EA7",
  "add.title": "\u6DFB\u52A0\u8D44\u4EA7",
  "add.namePlaceholder": "\u8D44\u4EA7\u540D\u79F0",
  "add.descriptionPlaceholder": "\u8F93\u5165\u8D44\u4EA7\u7279\u5F81\u63CF\u8FF0\uFF0C\u4FBF\u4E8E Agent \u7CBE\u51C6\u68C0\u7D22\u4E0E\u590D\u7528\u2026",
  "add.drop": "\u62D6\u62FD\u6587\u4EF6\u6216\u6587\u4EF6\u5939\u81F3\u6B64\uFF0C\u6216\u70B9\u51FB\u6D4F\u89C8",
  "add.pickFiles": "\u9009\u62E9\u6587\u4EF6",
  "add.pickFolders": "\u9009\u62E9\u6587\u4EF6\u5939",
  "add.folderBadge": "\u6587\u4EF6\u5939",
  "add.tags": "\u6DFB\u52A0\u6807\u7B7E\uFF08\u53EF\u9009\uFF09",
  "add.tagsPlaceholder": "\u56DE\u8F66\u6DFB\u52A0\u6807\u7B7E",
  "add.submit": "\u6DFB\u52A0\u8D44\u4EA7",
  "add.cancel": "\u53D6\u6D88",
  "chip.all": "\u5168\u90E8",
  "type.character": "\u89D2\u8272",
  "type.scene": "\u573A\u666F",
  "type.style": "\u98CE\u683C\u5305",
  "type.prop": "\u9053\u5177",
  "type.knowledge": "\u77E5\u8BC6\u5305",
  "type.custom": "\u672A\u5206\u7C7B",
  "search.placeholder": "\u641C\u7D22\u8D44\u4EA7\u540D\u79F0\u6216\u6807\u7B7E",
  "sort.updated": "\u6700\u8FD1\u66F4\u65B0",
  "empty.all": "\u6682\u65E0\u521B\u4F5C\u8D44\u4EA7\u3002\u70B9\u51FB\u300C\u6DFB\u52A0\u8D44\u4EA7\u300D\u5F00\u59CB\u6784\u5EFA\u8D44\u4EA7\u5E93\u3002",
  "empty.noMatch": "\u6CA1\u6709\u5339\u914D\u7684\u8D44\u4EA7\u3002\u6362\u4E2A\u5173\u952E\u8BCD\u8BD5\u8BD5\u3002",
  "empty.type": "\u6682\u65E0{type}\u8D44\u4EA7\u3002",
  "empty.addType": "\u6DFB\u52A0{type}",
  "card.missing": "\u7D20\u6750\u7F3A\u5931",
  "card.copyCite": "\u590D\u5236 Agent \u5F15\u7528\u6807\u8BC6",
  "card.copied": "\u5DF2\u590D\u5236",
  "card.open": "\u6253\u5F00\u539F\u8DEF\u5F84",
  "select.count": "\u5DF2\u9009 {n} \u9879",
  "select.clear": "\u53D6\u6D88\u9009\u62E9",
  "select.delete": "\u79FB\u9664 {n} \u9879",
  "select.toggle": "\u9009\u62E9\u8D44\u4EA7",
  "select.removeTitle": "\u786E\u8BA4\u4ECE\u8D44\u4EA7\u5E93\u79FB\u9664\u8FD9 {n} \u9879\uFF1F",
  "detail.title": "\u8D44\u4EA7\u8BE6\u60C5",
  "detail.name": "\u540D\u79F0",
  "detail.type": "\u7C7B\u578B",
  "detail.description": "\u63CF\u8FF0",
  "detail.tags": "\u6807\u7B7E",
  "detail.files": "\u7D20\u6750",
  "detail.folder": "\u6587\u4EF6\u5939",
  "detail.file": "\u6587\u4EF6",
  "detail.browse": "\u6253\u5F00",
  "detail.back": "\u8FD4\u56DE",
  "detail.emptyFolder": "\u6587\u4EF6\u5939\u4E3A\u7A7A",
  "detail.root": "\u7D20\u6750",
  "browse.back": "\u8FD4\u56DE",
  "browse.empty": "\u5F53\u524D\u8D44\u4EA7\u6682\u65E0\u5173\u8054\u5A92\u4F53\u6587\u4EF6\u3002",
  "browse.openFolder": "\u6253\u5F00\u6587\u4EF6\u5939",
  "browse.previewVideo": "\u9884\u89C8\u89C6\u9891",
  "media.image": "\u56FE\u7247",
  "media.video": "\u89C6\u9891",
  "detail.save": "\u4FDD\u5B58",
  "detail.close": "\u5173\u95ED",
  "detail.cite": "\u5F15\u7528",
  "remove.title": "\u786E\u8BA4\u4ECE\u8D44\u4EA7\u5E93\u79FB\u9664\u300C{name}\u300D\uFF1F",
  "remove.hint": "\u4EC5\u4ECE\u8D44\u4EA7\u5E93\u79FB\u9664\u5F15\u7528\uFF0C\u672C\u5730\u78C1\u76D8\u6E90\u6587\u4EF6\u4E0D\u53D7\u5F71\u54CD\u3002",
  "remove.confirm": "\u786E\u8BA4\u79FB\u9664",
  "remove.cancel": "\u53D6\u6D88",
  "mapping.remove": "\u79FB\u9664",
  "mapping.removeTitle": "\u786E\u8BA4\u4ECE\u8D44\u4EA7\u5E93\u79FB\u9664\u300C{name}\u300D\uFF1F",
  "mapping.removeHint": "\u4EC5\u4ECE\u8D44\u4EA7\u5E93\u79FB\u9664\u5F15\u7528\uFF0C\u672C\u5730\u78C1\u76D8\u6E90\u6587\u4EF6\u4E0D\u53D7\u5F71\u54CD\u3002",
  "mapping.removeConfirm": "\u786E\u8BA4\u79FB\u9664",
  "mapping.cancel": "\u53D6\u6D88",
  "error.generic": "\u8BF7\u6C42\u5931\u8D25",
  "error.pickerUnsupported": "\u5F53\u524D\u8FD0\u884C\u73AF\u5883\u4E0D\u652F\u6301\u539F\u751F\u6587\u4EF6\u9009\u62E9\u5668\uFF0C\u8BF7\u5728 macOS \u684C\u9762\u7AEF\u4F7F\u7528\u3002",
  "error.pickerFailed": "\u7CFB\u7EDF\u9009\u62E9\u7A97\u53E3\u6253\u5F00\u5931\u8D25\u3002",
  "error.nameConflict": "\u5DF2\u6709\u540C\u540D\u8D44\u4EA7\uFF0C\u8BF7\u4F7F\u7528\u5176\u4ED6\u540D\u79F0\u3002"
};
var en = {
  "nav": "Assets",
  "stage.title": "Creative Asset Library",
  "stage.subtitle": "Manage reusable characters, scenes, style packs, and knowledge for Agent creation",
  "stage.refresh": "Refresh",
  "stage.refreshing": "Refreshing\u2026",
  "stage.close": "Close",
  "loading": "Loading asset library\u2026",
  "add.button": "Add Asset",
  "add.title": "Add Asset",
  "add.namePlaceholder": "Asset name",
  "add.descriptionPlaceholder": "Describe asset characteristics for precise Agent retrieval\u2026",
  "add.drop": "Drag and drop files or folders here, or browse",
  "add.pickFiles": "Choose Files",
  "add.pickFolders": "Choose Folders",
  "add.folderBadge": "Folder",
  "add.tags": "Tags (optional)",
  "add.tagsPlaceholder": "Press Enter to add tag",
  "add.submit": "Add Asset",
  "add.cancel": "Cancel",
  "chip.all": "All",
  "type.character": "Character",
  "type.scene": "Scene",
  "type.style": "Style Pack",
  "type.prop": "Prop",
  "type.knowledge": "Knowledge",
  "type.custom": "Uncategorized",
  "search.placeholder": "Search assets or tags",
  "sort.updated": "Recently updated",
  "empty.all": 'No creative assets yet. Click "Add Asset" to get started.',
  "empty.noMatch": "No matching assets found.",
  "empty.type": "No {type} assets yet.",
  "empty.addType": "Add {type}",
  "card.missing": "Files missing",
  "card.copyCite": "Copy Reference Handle",
  "card.copied": "Copied",
  "card.open": "Reveal Original",
  "select.count": "{n} selected",
  "select.clear": "Clear selection",
  "select.delete": "Remove {n}",
  "select.toggle": "Select asset",
  "select.removeTitle": "Remove these {n} items from library?",
  "detail.title": "Asset Details",
  "detail.name": "Name",
  "detail.type": "Type",
  "detail.description": "Description",
  "detail.tags": "Tags",
  "detail.files": "Files",
  "detail.folder": "Folder",
  "detail.file": "File",
  "detail.browse": "Open",
  "detail.back": "Back",
  "detail.emptyFolder": "Folder is empty",
  "detail.root": "Files",
  "browse.back": "Back",
  "browse.empty": "No files associated with this asset yet.",
  "browse.openFolder": "Open Folder",
  "browse.previewVideo": "Preview Video",
  "media.image": "Image",
  "media.video": "Video",
  "detail.save": "Save",
  "detail.close": "Close",
  "detail.cite": "Citation",
  "remove.title": 'Remove "{name}" from library?',
  "remove.hint": "Removes reference only. Local source files remain unchanged.",
  "remove.confirm": "Remove",
  "remove.cancel": "Cancel",
  "mapping.remove": "Remove",
  "mapping.removeTitle": 'Remove "{name}" from library?',
  "mapping.removeHint": "Removes reference only. Local source files remain unchanged.",
  "mapping.removeConfirm": "Remove",
  "mapping.cancel": "Cancel",
  "error.generic": "Request failed",
  "error.pickerUnsupported": "Native file picker is only supported on macOS desktop.",
  "error.pickerFailed": "Failed to open file picker.",
  "error.nameConflict": "An asset with this name already exists."
};
var NS = "omnimux-assets";

// src/client/stage-store.js
var PRODUCT_STAGE_EVENT = "dsh-product-stage";
var STAGE_ID = "omnimux-assets";
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
function paintLabel(entry, label) {
  entry.setAttribute("aria-label", label);
  const node = entry.querySelector(".omnimux-assets-entry-label");
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
  entry.dataset.omnimuxAssetsEntry = "";
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
var import_react4 = require("react");

// src/client/a11y.js
var FOCUS_CSS = [
  ".omnimux-assets-focusable:focus-visible{outline:2px solid var(--dsw-alias-label-primary, inherit);outline-offset:2px;border-radius:8px;}",
  ".omnimux-assets-focusable:hover{border-color:var(--dsw-alias-border-l4, var(--dsw-alias-border-l3, currentColor));}",
  ".omnimux-assets-check{opacity:0;transition:opacity 0.15s ease;}",
  '.omnimux-assets-focusable:hover .omnimux-assets-check,.omnimux-assets-focusable:focus-within .omnimux-assets-check,.omnimux-assets-check[data-selected="true"]{opacity:1;}'
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
function PlusIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Icon, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 5v14" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 12h14" })
  ] });
}
function CheckIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { ...props, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "m5 12 5 5 9-10" }) });
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
  )) query.set("lrev", String(mrev));
  if (Number.isFinite(
    /** @type {number} */
    arev
  )) query.set("arev", String(arev));
  const suffix = query.toString() ? `?${query}` : "";
  return assetsRequest(`/omnimux/assets/state${suffix}`);
}
function createAsset(body) {
  return assetsRequest("/omnimux/assets/library", { method: "POST", body });
}
function updateAsset(id, patch) {
  return assetsRequest("/omnimux/assets/library/update", { method: "POST", body: { id, ...patch } });
}
function deleteAsset(id) {
  return assetsRequest("/omnimux/assets/library/delete", { method: "POST", body: { id } });
}
function pickPath(kind) {
  return assetsRequest("/omnimux/assets/pick", { method: "POST", body: { kind } });
}
function listAssetFiles(assetId, fileId, subPath = "") {
  const query = new URLSearchParams({ id: assetId, file: fileId });
  if (subPath !== "") query.set("path", subPath);
  return assetsRequest(`/omnimux/assets/library/files?${query}`);
}
function previewUrl(assetId, fileId = "", subPath = "") {
  const query = new URLSearchParams({ id: assetId });
  if (fileId) query.set("file", fileId);
  if (subPath !== "") query.set("path", subPath);
  return `/omnimux/assets/library/preview?${query}`;
}

// src/client/AddAssetDialog.jsx
var import_react = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var ASSET_TYPE_KEYS = ["character", "scene", "style", "prop", "knowledge", "custom"];
var overlay = {
  position: "fixed",
  inset: 0,
  zIndex: 320,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "var(--dsw-alias-bg-mask-1, rgba(0,0,0,.40))"
};
var sheet = {
  width: 560,
  maxWidth: "calc(100vw - 48px)",
  maxHeight: "calc(100vh - 48px)",
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  background: "var(--dsw-alias-bg-base, var(--dsw-bg, inherit))",
  color: "var(--dsw-alias-label-primary, inherit)",
  borderRadius: 16,
  border: "1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))"
};
var inputBare = {
  border: "none",
  outline: "none",
  background: "transparent",
  color: "inherit",
  font: "inherit",
  width: "100%"
};
function AssetTypeDropdown({ value, onChange, t }) {
  const [open, setOpen] = (0, import_react.useState)(false);
  const ref = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    if (!open) return void 0;
    const onPointerDown = (event) => {
      if (ref.current && !ref.current.contains(event.target)) setOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { ref, style: { position: "relative", display: "inline-block" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      "button",
      {
        type: "button",
        onClick: () => {
          setOpen((prev) => !prev);
        },
        style: {
          border: "1px solid var(--dsw-alias-border-l2, rgba(255,255,255,0.12))",
          background: "var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.06))",
          borderRadius: 8,
          padding: "4px 10px 4px 12px",
          fontSize: 13,
          color: "inherit",
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          transition: "all 0.15s ease",
          ...open ? { borderColor: "var(--dsw-alias-brand-primary, #3b82f6)", boxShadow: "0 0 0 2px rgba(59,130,246,0.22)" } : {}
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: t(`type.${value}`) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "svg",
            {
              viewBox: "0 0 16 16",
              width: "12",
              height: "12",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              style: { transform: open ? "rotate(180deg)" : "none", transition: "transform 0.18s ease", opacity: 0.7 },
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "m4 6 4 4 4-4" })
            }
          )
        ]
      }
    ),
    open ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "div",
      {
        role: "listbox",
        style: {
          position: "absolute",
          top: "calc(100% + 4px)",
          left: 0,
          zIndex: 350,
          minWidth: 140,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: 4,
          borderRadius: 10,
          border: "1px solid var(--dsw-alias-border, rgba(255,255,255,0.14))",
          background: "var(--dsw-alias-bg-elevated, #1c1c1f)",
          boxShadow: "0 10px 28px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)",
          backdropFilter: "blur(16px)"
        },
        children: ASSET_TYPE_KEYS.map((key) => {
          const isSelected = key === value;
          return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
            "button",
            {
              type: "button",
              role: "option",
              "aria-selected": isSelected,
              onClick: () => {
                onChange(key);
                setOpen(false);
              },
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 8,
                width: "100%",
                padding: "6px 10px",
                border: "none",
                borderRadius: 6,
                background: isSelected ? "rgba(59,130,246,0.14)" : "transparent",
                color: isSelected ? "#60a5fa" : "inherit",
                fontSize: 13,
                fontWeight: isSelected ? 500 : 400,
                cursor: "pointer",
                textAlign: "left"
              },
              onMouseEnter: (event) => {
                if (!isSelected) event.currentTarget.style.background = "rgba(255,255,255,0.08)";
              },
              onMouseLeave: (event) => {
                if (!isSelected) event.currentTarget.style.background = "transparent";
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: t(`type.${key}`) }),
                isSelected ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { viewBox: "0 0 16 16", width: "12", height: "12", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "m3.5 8.5 3 3 6-6" }) }) : null
              ]
            },
            key
          );
        })
      }
    ) : null
  ] });
}
function AddAssetDialog({ t, busy, presetType = "character", error, onCancel, onPick, onSubmit }) {
  const nameRef = (0, import_react.useRef)(null);
  const [name2, setName] = (0, import_react.useState)("");
  const [type, setType] = (0, import_react.useState)(ASSET_TYPE_KEYS.includes(presetType) ? presetType : "character");
  const [description, setDescription] = (0, import_react.useState)("");
  const [tagsOpen, setTagsOpen] = (0, import_react.useState)(false);
  const [tagDraft, setTagDraft] = (0, import_react.useState)("");
  const [tags, setTags] = (0, import_react.useState)([]);
  const [files, setFiles] = (0, import_react.useState)([]);
  (0, import_react.useEffect)(() => {
    nameRef.current?.focus();
  }, []);
  const addTag = () => {
    const next = tagDraft.trim();
    if (!next) return;
    if (tags.some((tag) => tag.toLowerCase() === next.toLowerCase())) {
      setTagDraft("");
      return;
    }
    setTags([...tags, next]);
    setTagDraft("");
  };
  const addPaths = (paths) => {
    const next = Array.isArray(paths) ? paths.filter((path) => typeof path === "string" && path !== "") : [];
    if (next.length === 0) return;
    setFiles((current) => {
      const seen = new Set(current.map((file) => file.real_path));
      const extra = [];
      for (const path of next) {
        if (seen.has(path)) continue;
        seen.add(path);
        extra.push({ real_path: path });
      }
      return extra.length === 0 ? current : [...current, ...extra];
    });
  };
  const looksLikeFolder = (path) => typeof path === "string" && /\/$/.test(path);
  const canSubmit = name2.trim() !== "" && !busy;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    {
      style: overlay,
      onMouseDown: (event) => {
        if (event.target === event.currentTarget) onCancel();
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
        "div",
        {
          role: "dialog",
          "aria-modal": "true",
          "aria-label": t("add.title"),
          style: sheet,
          onKeyDown: (event) => {
            if (event.key === "Escape") onCancel();
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: 8, padding: "16px 20px 8px" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: { color: "var(--dsw-alias-label-tertiary, inherit)", fontSize: 18 }, children: "@" }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "input",
                {
                  ref: nameRef,
                  value: name2,
                  placeholder: t("add.namePlaceholder"),
                  onChange: (event) => {
                    setName(event.target.value);
                  },
                  style: { ...inputBare, fontSize: 18, fontWeight: 500, lineHeight: "28px" }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "button",
                {
                  type: "button",
                  "aria-label": t("stage.close"),
                  onClick: onCancel,
                  style: {
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    color: "inherit"
                  },
                  children: "\xD7"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: 8, padding: "0 20px 12px" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AssetTypeDropdown, { value: type, onChange: setType, t }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: { color: "var(--dsw-alias-border-l2, var(--dsw-border, currentColor))" }, children: "|" }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "input",
                {
                  value: description,
                  placeholder: t("add.descriptionPlaceholder"),
                  onChange: (event) => {
                    setDescription(event.target.value);
                  },
                  style: { ...inputBare, fontSize: 13, color: "var(--dsw-alias-label-secondary, inherit)" }
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { borderTop: "1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))", padding: 16 }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
                "div",
                {
                  onDragOver: (event) => {
                    event.preventDefault();
                  },
                  onDrop: (event) => {
                    event.preventDefault();
                    const dropped = Array.from(event.dataTransfer?.files ?? []);
                    addPaths(dropped.map((file) => typeof file.path === "string" ? file.path : "").filter(Boolean));
                  },
                  style: {
                    width: "100%",
                    minHeight: 128,
                    border: "1px dashed var(--dsw-alias-border-l4, var(--dsw-alias-border-l3, currentColor))",
                    borderRadius: 12,
                    background: "transparent",
                    color: "var(--dsw-alias-label-tertiary, inherit)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    fontSize: 13,
                    padding: 16,
                    boxSizing: "border-box"
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FileIcon, { size: 22 }),
                    t("add.drop"),
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }, children: [
                      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                        "button",
                        {
                          type: "button",
                          onClick: () => {
                            void onPick("file").then(addPaths);
                          },
                          style: {
                            border: "1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))",
                            background: "transparent",
                            color: "inherit",
                            borderRadius: 999,
                            padding: "6px 12px",
                            cursor: "pointer",
                            fontSize: 12
                          },
                          children: t("add.pickFiles")
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                        "button",
                        {
                          type: "button",
                          onClick: () => {
                            void onPick("directory").then(addPaths);
                          },
                          style: {
                            border: "1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))",
                            background: "transparent",
                            color: "inherit",
                            borderRadius: 999,
                            padding: "6px 12px",
                            cursor: "pointer",
                            fontSize: 12
                          },
                          children: t("add.pickFolders")
                        }
                      )
                    ] })
                  ]
                }
              ),
              files.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ul", { style: { margin: "10px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 4 }, children: files.map((file) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("li", { style: { display: "flex", gap: 8, fontSize: 12, color: "var(--dsw-alias-label-secondary, inherit)", alignItems: "center" }, children: [
                looksLikeFolder(file.real_path) ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FolderIcon, { size: 14 }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FileIcon, { size: 14 }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: { flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: file.real_path }),
                looksLikeFolder(file.real_path) ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { style: { fontSize: 11, color: "var(--dsw-alias-label-tertiary, inherit)" }, children: t("add.folderBadge") }) : null,
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setFiles((current) => current.filter((row) => row.real_path !== file.real_path));
                    },
                    style: { border: "none", background: "transparent", cursor: "pointer", color: "inherit" },
                    children: "\xD7"
                  }
                )
              ] }, file.real_path)) }) : null
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { borderTop: "1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))", padding: "10px 16px 16px" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setTagsOpen(!tagsOpen);
                  },
                  style: { border: "none", background: "transparent", cursor: "pointer", color: "var(--dsw-alias-label-secondary, inherit)", fontSize: 13, padding: 0 },
                  children: [
                    tagsOpen ? "\u25BE" : "\u25B8",
                    " ",
                    t("add.tags")
                  ]
                }
              ),
              tagsOpen ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { marginTop: 8 }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 8 }, children: tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { style: { fontSize: 12, padding: "2px 8px", borderRadius: 999, background: "var(--dsw-alias-bg-module-platform, var(--dsw-alias-interactive-bg-hover-solid, inherit))" }, children: [
                  tag,
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        setTags(tags.filter((item) => item !== tag));
                      },
                      style: { border: "none", background: "transparent", cursor: "pointer", marginLeft: 4 },
                      children: "\xD7"
                    }
                  )
                ] }, tag)) }),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                  "input",
                  {
                    value: tagDraft,
                    placeholder: t("add.tagsPlaceholder"),
                    onChange: (event) => {
                      setTagDraft(event.target.value);
                    },
                    onKeyDown: (event) => {
                      if (event.key === "Enter") {
                        event.preventDefault();
                        addTag();
                      }
                    },
                    style: {
                      ...inputBare,
                      border: "1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))",
                      borderRadius: 8,
                      padding: "6px 10px",
                      fontSize: 13
                    }
                  }
                )
              ] }) : null,
              error ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { style: { margin: "8px 0 0", fontSize: 12, color: "var(--dsw-alias-label-error, var(--dsw-alias-state-error-primary, inherit))" }, children: error }) : null,
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { style: { display: "flex", justifyContent: "flex-end", marginTop: 16 }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "button",
                {
                  type: "button",
                  disabled: !canSubmit,
                  onClick: () => {
                    onSubmit({
                      name: name2.trim(),
                      type,
                      description,
                      tags,
                      files
                    });
                  },
                  style: {
                    border: "none",
                    background: canSubmit ? "var(--dsw-alias-button-primary-fill, var(--dsw-alias-label-primary, currentColor))" : "var(--dsw-alias-border-l2, var(--dsw-border, currentColor))",
                    color: "var(--dsw-alias-label-primary-foreground, var(--dsw-alias-label-primary-inverted, #fff))",
                    borderRadius: 999,
                    padding: "8px 16px",
                    fontSize: 14,
                    fontWeight: 500,
                    cursor: canSubmit ? "pointer" : "default"
                  },
                  children: t("add.submit")
                }
              ) })
            ] })
          ]
        }
      )
    }
  );
}

// src/client/AssetBrowse.jsx
var import_react2 = require("react");
var import_jsx_runtime3 = require("react/jsx-runtime");
function isDirectoryRef(file) {
  return file?.kind === "directory" || file?.is_dir === true;
}
function initialStack(asset) {
  const files = Array.isArray(asset.files) ? asset.files : [];
  const folders = files.filter(isDirectoryRef);
  if (folders.length === 1 && files.length === 1) return { file: folders[0], path: "" };
  return null;
}
var muted = {
  margin: 0,
  fontSize: 13,
  color: "var(--dsw-alias-label-tertiary, inherit)"
};
var grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
  gap: 12
};
var IMAGE_EXT = /\.(png|jpe?g|gif|webp|svg|bmp|ico|avif|heic|tiff)$/i;
var VIDEO_EXT = /\.(mp4|mov|avi|mkv|webm|m4v|flv)$/i;
function mediaKind(row) {
  if (isDirectoryRef(row) || row?.is_dir) return "folder";
  const kind = String(row?.kind || row?.type || "");
  if (kind === "image" || kind === "video") return kind;
  const name2 = String(row?.name || row?.original_name || row?.real_path || "");
  if (IMAGE_EXT.test(name2)) return "image";
  if (VIDEO_EXT.test(name2)) return "video";
  return "file";
}
function AssetBrowse({ t, asset, onBack }) {
  const [stack, setStack] = (0, import_react2.useState)(() => initialStack(asset));
  const [entries, setEntries] = (0, import_react2.useState)([]);
  const [loading, setLoading] = (0, import_react2.useState)(false);
  const [error, setError] = (0, import_react2.useState)("");
  (0, import_react2.useEffect)(() => {
    setStack(initialStack(asset));
    setEntries([]);
    setError("");
  }, [asset.id]);
  (0, import_react2.useEffect)(() => {
    if (!stack) return void 0;
    let cancelled = false;
    setLoading(true);
    setError("");
    void listAssetFiles(asset.id, stack.file.id, stack.path).then((result) => {
      if (cancelled) return;
      if (!result.ok) {
        setError(String(result.body?.message || result.body?.error || `HTTP ${String(result.status)}`));
        setEntries([]);
        setLoading(false);
        return;
      }
      setEntries(Array.isArray(result.body?.entries) ? result.body.entries : []);
      setLoading(false);
    }).catch((caught) => {
      if (cancelled) return;
      setError(caught instanceof Error ? caught.message : String(caught));
      setEntries([]);
      setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, [asset.id, stack?.file?.id, stack?.path]);
  const crumbs = stack ? [asset.name, stack.file.original_name || stack.file.real_path, ...String(stack.path || "").split("/").filter(Boolean)] : [asset.name];
  const goCrumb = (index) => {
    if (index <= 0) {
      onBack();
      return;
    }
    if (!stack) return;
    if (index === 1) {
      setStack({ file: stack.file, path: "" });
      return;
    }
    const parts = String(stack.path || "").split("/").filter(Boolean);
    setStack({ file: stack.file, path: parts.slice(0, index - 1).join("/") });
  };
  const files = Array.isArray(asset.files) ? asset.files : [];
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: 12, minHeight: "100%" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center", fontSize: 13 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "button",
        {
          type: "button",
          onClick: () => {
            if (!stack) {
              onBack();
              return;
            }
            const parts = String(stack.path || "").split("/").filter(Boolean);
            if (parts.length === 0) setStack(null);
            else setStack({ file: stack.file, path: parts.slice(0, -1).join("/") });
          },
          style: {
            border: "1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))",
            background: "transparent",
            color: "inherit",
            borderRadius: 999,
            padding: "4px 10px",
            cursor: "pointer",
            fontSize: 12
          },
          children: t("browse.back")
        }
      ),
      crumbs.map((crumb, index) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { style: { display: "inline-flex", gap: 6, alignItems: "center" }, children: [
        index > 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { style: { color: "var(--dsw-alias-label-tertiary, inherit)" }, children: "/" }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "button",
          {
            type: "button",
            onClick: () => {
              goCrumb(index);
            },
            style: {
              border: "none",
              background: "transparent",
              color: index === crumbs.length - 1 ? "inherit" : "var(--dsw-alias-label-secondary, inherit)",
              cursor: "pointer",
              padding: 0,
              fontWeight: index === crumbs.length - 1 ? 500 : 400
            },
            children: crumb
          }
        )
      ] }, `${crumb}-${index}`))
    ] }),
    stack ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_jsx_runtime3.Fragment, { children: [
      loading ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: muted, children: t("loading") }) : null,
      error ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: { ...muted, color: "var(--dsw-alias-label-error, var(--dsw-alias-state-error-primary, inherit))" }, children: error }) : null,
      !loading && !error && entries.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: muted, children: t("detail.emptyFolder") }) : null,
      !loading && entries.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: grid, children: entries.map((entry) => {
        const folder = Boolean(entry.is_dir);
        const kind = mediaKind(entry);
        const src = folder ? "" : previewUrl(asset.id, stack.file.id, entry.relative_path || [stack.path, entry.name].filter(Boolean).join("/"));
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          MediaCard,
          {
            t,
            title: entry.name,
            kind,
            src,
            onOpen: folder ? () => {
              setStack({
                file: stack.file,
                path: entry.relative_path || [stack.path, entry.name].filter(Boolean).join("/")
              });
            } : void 0
          },
          String(entry.relative_path || entry.name)
        );
      }) }) : null
    ] }) : files.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: muted, children: t("browse.empty") }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: grid, children: files.map((file) => {
      const folder = isDirectoryRef(file);
      const kind = mediaKind(file);
      const src = folder ? "" : previewUrl(asset.id, file.id);
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        MediaCard,
        {
          t,
          title: file.original_name || file.real_path,
          kind,
          src,
          onOpen: folder ? () => {
            setStack({ file, path: "" });
          } : void 0
        },
        file.id
      );
    }) })
  ] });
}
function MediaCard({ t, title, kind, src, onOpen }) {
  const clickable = typeof onOpen === "function";
  const activate = clickable ? onOpen : void 0;
  const [broken, setBroken] = (0, import_react2.useState)(false);
  const showImage = kind === "image" && Boolean(src) && !broken;
  const showVideo = kind === "video" && Boolean(src) && !broken;
  const badge = kind === "folder" ? t("detail.folder") : kind === "image" ? t("media.image") : kind === "video" ? t("media.video") : t("detail.file");
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "article",
    {
      className: "omnimux-assets-focusable",
      tabIndex: clickable ? 0 : void 0,
      role: clickable ? "button" : void 0,
      "aria-label": title,
      onClick: activate,
      onKeyDown: clickable ? activateRowKeydown(activate) : void 0,
      style: {
        border: "1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))",
        borderRadius: 12,
        overflow: "hidden",
        cursor: clickable ? "pointer" : "default",
        background: "var(--dsw-alias-bg-base, var(--dsw-bg, inherit))",
        display: "flex",
        flexDirection: "column"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
          "div",
          {
            style: {
              height: 148,
              background: "var(--dsw-alias-bg-module-platform, var(--dsw-alias-interactive-bg-hover-solid, inherit))",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--dsw-alias-label-tertiary, inherit)",
              overflow: "hidden"
            },
            children: [
              showImage ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "img",
                {
                  src,
                  alt: "",
                  onError: () => {
                    setBroken(true);
                  },
                  style: { width: "100%", height: "100%", objectFit: "cover", display: "block" }
                }
              ) : null,
              showVideo ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "video",
                {
                  src,
                  muted: true,
                  playsInline: true,
                  preload: "metadata",
                  controls: true,
                  "aria-label": t("browse.previewVideo"),
                  onClick: (event) => {
                    event.stopPropagation();
                  },
                  onError: () => {
                    setBroken(true);
                  },
                  style: { width: "100%", height: "100%", objectFit: "cover", display: "block", background: "black" }
                }
              ) : null,
              !showImage && !showVideo ? kind === "folder" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(FolderIcon, { size: 28 }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(FileIcon, { size: 28 }) : null,
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "span",
                {
                  style: {
                    position: "absolute",
                    top: 8,
                    right: 8,
                    fontSize: 11,
                    lineHeight: "16px",
                    padding: "2px 8px",
                    borderRadius: 999,
                    background: "var(--dsw-alias-bg-base, var(--dsw-bg, inherit))",
                    border: "1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))"
                  },
                  children: badge
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: { padding: "10px 12px 12px", minHeight: 44 }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "div",
          {
            style: {
              fontSize: 13,
              fontWeight: 500,
              lineHeight: "20px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            },
            children: title
          }
        ) })
      ]
    }
  );
}

// src/client/AssetGrid.jsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var checkBase = {
  position: "absolute",
  top: 8,
  left: 8,
  width: 22,
  height: 22,
  borderRadius: "50%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  cursor: "pointer",
  zIndex: 1
};
function AssetGrid({ t, assets, emptyLabel, emptyActionLabel, showEmptyAction = true, onEmptyAction, onOpen, onCopy, onRemove, copiedId, selectedIds, onToggleSelect }) {
  if (assets.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      "div",
      {
        style: {
          border: "1px dashed var(--dsw-alias-border-l4, var(--dsw-alias-border-l3, currentColor))",
          borderRadius: 12,
          minHeight: 160,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          color: "var(--dsw-alias-label-tertiary, inherit)",
          fontSize: 13
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { style: { margin: 0 }, children: emptyLabel }),
          emptyActionLabel && onEmptyAction && showEmptyAction ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "button",
            {
              type: "button",
              onClick: onEmptyAction,
              style: {
                border: "none",
                background: "var(--dsw-alias-button-primary-fill, var(--dsw-alias-label-primary, currentColor))",
                color: "var(--dsw-alias-label-primary-foreground, var(--dsw-alias-label-primary-inverted, #fff))",
                borderRadius: 999,
                padding: "6px 14px",
                cursor: "pointer",
                fontSize: 13
              },
              children: emptyActionLabel
            }
          ) : null
        ]
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }, children: assets.map((asset) => {
    const missing = Number(asset.missing_file_count) > 0 && (!asset.files || asset.files.length === 0);
    const selected = selectedIds?.has(asset.id);
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      "article",
      {
        className: "omnimux-assets-focusable",
        tabIndex: 0,
        role: "button",
        "aria-selected": selected ? "true" : "false",
        onClick: () => {
          onOpen(asset);
        },
        onKeyDown: activateRowKeydown(() => {
          onOpen(asset);
        }),
        style: {
          border: selected ? "1px solid var(--dsw-alias-label-primary, currentColor)" : "1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))",
          borderRadius: 12,
          overflow: "hidden",
          cursor: "pointer",
          background: "var(--dsw-alias-bg-base, var(--dsw-bg, inherit))",
          display: "flex",
          flexDirection: "column"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
            "div",
            {
              style: {
                height: 112,
                background: "var(--dsw-alias-bg-module-platform, var(--dsw-alias-interactive-bg-hover-solid, inherit))",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--dsw-alias-label-tertiary, inherit)"
              },
              children: [
                onToggleSelect ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                  "button",
                  {
                    type: "button",
                    className: "omnimux-assets-check",
                    "data-selected": selected ? "true" : "false",
                    "aria-label": t("select.toggle"),
                    "aria-pressed": selected ? "true" : "false",
                    onClick: (event) => {
                      event.stopPropagation();
                      onToggleSelect(asset);
                    },
                    style: {
                      ...checkBase,
                      border: selected ? "none" : "1px solid var(--dsw-alias-border-l3, currentColor)",
                      background: selected ? "var(--dsw-alias-button-primary-fill, var(--dsw-alias-label-primary, currentColor))" : "var(--dsw-alias-bg-base, var(--dsw-bg, inherit))",
                      color: selected ? "var(--dsw-alias-label-primary-foreground, var(--dsw-alias-label-primary-inverted, inherit))" : "inherit"
                    },
                    children: selected ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(CheckIcon, { size: 12 }) : null
                  }
                ) : null,
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(FileIcon, { size: 22 }),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                  "span",
                  {
                    style: {
                      position: "absolute",
                      top: 8,
                      right: 8,
                      fontSize: 11,
                      lineHeight: "16px",
                      padding: "2px 8px",
                      borderRadius: 999,
                      background: "var(--dsw-alias-bg-base, var(--dsw-bg, inherit))",
                      border: "1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))"
                    },
                    children: t(`type.${asset.type}`)
                  }
                ),
                missing ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                  "span",
                  {
                    style: {
                      position: "absolute",
                      bottom: 8,
                      left: 8,
                      fontSize: 11,
                      color: "var(--dsw-alias-state-warn-primary, inherit)"
                    },
                    children: t("card.missing")
                  }
                ) : null
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: { padding: "10px 12px 12px", display: "flex", flexDirection: "column", gap: 4, minHeight: 72 }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: { fontSize: 14, fontWeight: 500, lineHeight: "20px" }, children: asset.name }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "div",
              {
                style: {
                  fontSize: 12,
                  lineHeight: "18px",
                  color: "var(--dsw-alias-label-secondary, inherit)",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                },
                children: asset.description || "\u2014"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: { display: "flex", gap: 8, marginTop: 6 }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "button",
                {
                  type: "button",
                  onClick: (event) => {
                    event.stopPropagation();
                    onCopy(asset);
                  },
                  style: { border: "none", background: "transparent", cursor: "pointer", fontSize: 12, color: "var(--dsw-alias-label-secondary, inherit)", padding: 0 },
                  children: copiedId === asset.id ? t("card.copied") : t("card.copyCite")
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "button",
                {
                  type: "button",
                  onClick: (event) => {
                    event.stopPropagation();
                    onRemove(asset);
                  },
                  style: { border: "none", background: "transparent", cursor: "pointer", fontSize: 12, color: "var(--dsw-alias-label-error, var(--dsw-alias-state-error-primary, inherit))", padding: 0 },
                  children: t("mapping.remove")
                }
              )
            ] })
          ] })
        ]
      },
      asset.id
    );
  }) });
}

// src/client/AssetDetail.jsx
var import_react3 = require("react");
var import_jsx_runtime5 = require("react/jsx-runtime");
function DetailTypeSelect({ value, onChange, t }) {
  const [open, setOpen] = (0, import_react3.useState)(false);
  const ref = (0, import_react3.useRef)(null);
  (0, import_react3.useEffect)(() => {
    if (!open) return void 0;
    const onPointerDown = (event) => {
      if (ref.current && !ref.current.contains(event.target)) setOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { ref, style: { position: "relative", width: "100%" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
      "button",
      {
        type: "button",
        onClick: () => {
          setOpen((prev) => !prev);
        },
        style: {
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "1px solid var(--dsw-alias-border-l2, rgba(255,255,255,0.12))",
          borderRadius: 8,
          padding: "6px 10px 6px 12px",
          color: "inherit",
          background: "var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.04))",
          fontSize: 13,
          cursor: "pointer",
          transition: "all 0.15s ease",
          ...open ? { borderColor: "var(--dsw-alias-brand-primary, #3b82f6)", boxShadow: "0 0 0 2px rgba(59,130,246,0.22)" } : {}
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: t(`type.${value}`) }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "svg",
            {
              viewBox: "0 0 16 16",
              width: "12",
              height: "12",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              style: { transform: open ? "rotate(180deg)" : "none", transition: "transform 0.18s ease", opacity: 0.7 },
              children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "m4 6 4 4 4-4" })
            }
          )
        ]
      }
    ),
    open ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "div",
      {
        role: "listbox",
        style: {
          position: "absolute",
          top: "calc(100% + 4px)",
          left: 0,
          zIndex: 100,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          padding: 4,
          borderRadius: 10,
          border: "1px solid var(--dsw-alias-border, rgba(255,255,255,0.14))",
          background: "var(--dsw-alias-bg-elevated, #1c1c1f)",
          boxShadow: "0 10px 28px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)",
          backdropFilter: "blur(16px)"
        },
        children: ASSET_TYPE_KEYS.map((key) => {
          const isSelected = key === value;
          return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
            "button",
            {
              type: "button",
              role: "option",
              "aria-selected": isSelected,
              onClick: () => {
                onChange(key);
                setOpen(false);
              },
              style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 8,
                width: "100%",
                padding: "6px 10px",
                border: "none",
                borderRadius: 6,
                background: isSelected ? "rgba(59,130,246,0.14)" : "transparent",
                color: isSelected ? "#60a5fa" : "inherit",
                fontSize: 13,
                fontWeight: isSelected ? 500 : 400,
                cursor: "pointer",
                textAlign: "left"
              },
              onMouseEnter: (event) => {
                if (!isSelected) event.currentTarget.style.background = "rgba(255,255,255,0.08)";
              },
              onMouseLeave: (event) => {
                if (!isSelected) event.currentTarget.style.background = "transparent";
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: t(`type.${key}`) }),
                isSelected ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("svg", { viewBox: "0 0 16 16", width: "12", height: "12", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("path", { d: "m3.5 8.5 3 3 6-6" }) }) : null
              ]
            },
            key
          );
        })
      }
    ) : null
  ] });
}
function AssetDetail({ t, asset, busy, onClose, onSave }) {
  const [name2, setName] = (0, import_react3.useState)(asset.name);
  const [type, setType] = (0, import_react3.useState)(asset.type);
  const [description, setDescription] = (0, import_react3.useState)(asset.description || "");
  const [browse, setBrowse] = (0, import_react3.useState)(null);
  (0, import_react3.useEffect)(() => {
    setName(asset.name);
    setType(asset.type);
    setDescription(asset.description || "");
    setBrowse(null);
  }, [asset.id, asset.name, asset.type, asset.description]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    "aside",
    {
      style: {
        flex: "none",
        width: 320,
        overflow: "auto",
        borderLeft: "1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))",
        background: "var(--dsw-alias-bg-base, var(--dsw-bg, inherit))",
        display: "flex",
        flexDirection: "column"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", borderBottom: "1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { style: { margin: 0, flex: 1, fontSize: 13, fontWeight: 600 }, children: t("detail.title") }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "button",
            {
              type: "button",
              "aria-label": t("detail.close"),
              onClick: onClose,
              style: { border: "none", background: "transparent", cursor: "pointer", width: 24, height: 24 },
              children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(CloseIcon, { size: 16 })
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { style: { padding: 14, display: "flex", flexDirection: "column", gap: 12, fontSize: 13 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("label", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { style: { fontSize: 11, color: "var(--dsw-alias-label-tertiary, inherit)", marginBottom: 4 }, children: t("detail.name") }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("input", { value: name2, onChange: (event) => {
              setName(event.target.value);
            }, style: { width: "100%", border: "1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))", borderRadius: 8, padding: "6px 8px", color: "inherit", background: "inherit" } })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("label", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { style: { fontSize: 11, color: "var(--dsw-alias-label-tertiary, inherit)", marginBottom: 4 }, children: t("detail.type") }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DetailTypeSelect, { value: type, onChange: setType, t })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("label", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { style: { fontSize: 11, color: "var(--dsw-alias-label-tertiary, inherit)", marginBottom: 4 }, children: t("detail.description") }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("textarea", { value: description, onChange: (event) => {
              setDescription(event.target.value);
            }, rows: 6, style: { width: "100%", border: "1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))", borderRadius: 8, padding: "6px 8px", resize: "vertical", color: "inherit", background: "inherit" } })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { style: { fontSize: 11, color: "var(--dsw-alias-label-tertiary, inherit)", marginBottom: 4 }, children: t("detail.cite") }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("code", { style: { fontSize: 12 }, children: asset.cite || `@${asset.type}/${asset.name}` })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { style: { fontSize: 11, color: "var(--dsw-alias-label-tertiary, inherit)", marginBottom: 4 }, children: t("detail.files") }),
            browse ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              FolderBrowse,
              {
                t,
                assetId: asset.id,
                file: browse.file,
                onBack: () => {
                  setBrowse(null);
                }
              }
            ) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(TopFileList, { t, files: asset.files || [], onOpenFolder: (file) => {
              setBrowse({ file });
            } })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "button",
            {
              type: "button",
              disabled: busy || name2.trim() === "",
              onClick: () => {
                onSave({ name: name2.trim(), type, description });
              },
              style: {
                border: "none",
                background: "var(--dsw-alias-button-primary-fill, var(--dsw-alias-label-primary, currentColor))",
                color: "var(--dsw-alias-label-primary-foreground, var(--dsw-alias-label-primary-inverted, #fff))",
                borderRadius: 999,
                padding: "8px 14px",
                cursor: "pointer"
              },
              children: t("detail.save")
            }
          )
        ] })
      ]
    }
  );
}
function isDirectoryRef2(file) {
  return file?.kind === "directory" || file?.is_dir === true;
}
function TopFileList({ t, files, onOpenFolder }) {
  if (files.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { style: { margin: 0, color: "var(--dsw-alias-label-tertiary, inherit)" }, children: "\u2014" });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("ul", { style: { margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 4 }, children: files.map((file) => {
    const folder = isDirectoryRef2(file);
    const activate = folder ? () => {
      onOpenFolder(file);
    } : void 0;
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
      "button",
      {
        type: "button",
        className: "omnimux-assets-focusable",
        disabled: !folder,
        onClick: activate,
        onKeyDown: folder ? activateRowKeydown(activate) : void 0,
        style: {
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 6,
          textAlign: "left",
          border: "none",
          background: "transparent",
          color: "inherit",
          cursor: folder ? "pointer" : "default",
          padding: "4px 0",
          fontSize: 12
        },
        children: [
          folder ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(FolderIcon, { size: 14 }) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(FileIcon, { size: 14 }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { style: { flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: file.original_name || file.real_path }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { style: { color: "var(--dsw-alias-label-tertiary, inherit)", fontSize: 11 }, children: folder ? t("detail.browse") : t("detail.file") })
        ]
      }
    ) }, file.id);
  }) });
}
function FolderBrowse({ t, assetId, file, onBack }) {
  const [path, setPath] = (0, import_react3.useState)("");
  const [entries, setEntries] = (0, import_react3.useState)([]);
  const [loading, setLoading] = (0, import_react3.useState)(true);
  const [error, setError] = (0, import_react3.useState)("");
  (0, import_react3.useEffect)(() => {
    let cancelled = false;
    setLoading(true);
    setError("");
    void listAssetFiles(assetId, file.id, path).then((result) => {
      if (cancelled) return;
      if (!result.ok) {
        setError(String(result.body?.message || result.body?.error || `HTTP ${String(result.status)}`));
        setEntries([]);
        setLoading(false);
        return;
      }
      setEntries(Array.isArray(result.body?.entries) ? result.body.entries : []);
      setLoading(false);
    }).catch((caught) => {
      if (cancelled) return;
      setError(caught instanceof Error ? caught.message : String(caught));
      setEntries([]);
      setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, [assetId, file.id, path]);
  const crumbs = path === "" ? [] : path.split("/").filter(Boolean);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { style: { display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center", marginBottom: 8, fontSize: 12 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "button",
        {
          type: "button",
          onClick: () => {
            if (path === "") onBack();
            else setPath(crumbs.slice(0, -1).join("/"));
          },
          style: {
            border: "1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))",
            background: "transparent",
            color: "inherit",
            borderRadius: 999,
            padding: "2px 8px",
            cursor: "pointer",
            fontSize: 12
          },
          children: t("detail.back")
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "button",
        {
          type: "button",
          onClick: () => {
            setPath("");
          },
          style: { border: "none", background: "transparent", color: "inherit", cursor: "pointer", padding: 0 },
          children: file.original_name || t("detail.root")
        }
      ),
      crumbs.map((crumb, index) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("span", { style: { display: "inline-flex", gap: 6, alignItems: "center" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { style: { color: "var(--dsw-alias-label-tertiary, inherit)" }, children: "/" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "button",
          {
            type: "button",
            onClick: () => {
              setPath(crumbs.slice(0, index + 1).join("/"));
            },
            style: { border: "none", background: "transparent", color: "inherit", cursor: "pointer", padding: 0 },
            children: crumb
          }
        )
      ] }, `${crumb}-${index}`))
    ] }),
    loading ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { style: { margin: 0, color: "var(--dsw-alias-label-tertiary, inherit)" }, children: t("loading") }) : null,
    error ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { style: { margin: 0, color: "var(--dsw-alias-label-error, var(--dsw-alias-state-error-primary, inherit))" }, children: error }) : null,
    !loading && !error && entries.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { style: { margin: 0, color: "var(--dsw-alias-label-tertiary, inherit)" }, children: t("detail.emptyFolder") }) : null,
    !loading && entries.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("ul", { style: { margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 2 }, children: entries.map((entry) => {
      const folder = Boolean(entry.is_dir);
      const activate = folder ? () => {
        setPath(entry.relative_path || [path, entry.name].filter(Boolean).join("/"));
      } : void 0;
      return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
        "button",
        {
          type: "button",
          className: "omnimux-assets-focusable",
          disabled: !folder,
          onClick: activate,
          onKeyDown: folder ? activateRowKeydown(activate) : void 0,
          style: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: 6,
            textAlign: "left",
            border: "none",
            background: "transparent",
            color: "inherit",
            cursor: folder ? "pointer" : "default",
            padding: "4px 0",
            fontSize: 12
          },
          children: [
            folder ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(FolderIcon, { size: 14 }) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(FileIcon, { size: 14 }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { style: { flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: entry.name })
          ]
        }
      ) }, String(entry.relative_path || entry.name));
    }) }) : null
  ] });
}

// src/client/ConfirmRemoveDialog.jsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var backdrop = {
  position: "fixed",
  inset: 0,
  zIndex: 300,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "var(--dsw-alias-bg-mask-1, rgba(0,0,0,.40))"
};
var dialog = {
  width: 360,
  maxWidth: "calc(100vw - 48px)",
  display: "flex",
  flexDirection: "column",
  gap: 10,
  padding: 20,
  borderRadius: 16,
  background: "var(--dsw-alias-bg-base, var(--dsw-bg, inherit))",
  border: "1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))",
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
  color: "var(--dsw-alias-label-secondary, inherit)"
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
  borderRadius: 999,
  cursor: "pointer",
  border: "1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))",
  background: "transparent",
  color: "inherit"
};
var dangerButton = {
  ...ghostButton,
  fontWeight: 600,
  border: "none",
  color: "var(--dsw-alias-label-primary-foreground, var(--dsw-alias-label-primary-inverted, #fff))",
  background: "var(--dsw-alias-label-error, var(--dsw-alias-state-error-primary, inherit))"
};
var dangerButtonDisabled = {
  ...dangerButton,
  opacity: 0.5,
  cursor: "default"
};
function ConfirmRemoveDialog({ t, name: name2, title, busy, onCancel, onConfirm }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "div",
    {
      style: backdrop,
      onMouseDown: (event) => {
        if (event.target === event.currentTarget) onCancel();
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
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
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h2", { style: heading, children: title || t("mapping.removeTitle").replace("{name}", name2) }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { style: hint, children: t("mapping.removeHint") }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { style: buttons, children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("button", { type: "button", style: ghostButton, onClick: onCancel, autoFocus: true, children: t("mapping.cancel") }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
var import_jsx_runtime7 = require("react/jsx-runtime");
var POLL_MS = 5e3;
function messageOf(result, t) {
  if (result.body?.error === "name-conflict") return t("error.nameConflict");
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
function citeOf(asset) {
  return asset.cite || `@${asset.type}/${asset.name}`;
}
var chromeButton = {
  border: "1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))",
  background: "transparent",
  color: "inherit",
  borderRadius: 999,
  cursor: "pointer",
  fontSize: 13,
  lineHeight: "20px",
  padding: "6px 12px"
};
function AssetsStage({ t, stage }) {
  const open = (0, import_react4.useSyncExternalStore)(
    stage ? (cb) => stage.subscribe(cb) : () => () => {
    },
    stage ? () => stage.getSnapshot() : () => false
  );
  const [everOpened, setEverOpened] = (0, import_react4.useState)(false);
  const [box, setBox] = (0, import_react4.useState)(() => ({ top: 0, left: 0, width: 0, height: 0 }));
  if (open && !everOpened) setEverOpened(true);
  (0, import_react4.useLayoutEffect)(() => {
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
  const [assets, setAssets] = (0, import_react4.useState)([]);
  const [filterType, setFilterType] = (0, import_react4.useState)("");
  const [query, setQuery] = (0, import_react4.useState)("");
  const [detail, setDetail] = (0, import_react4.useState)(null);
  const [creating, setCreating] = (0, import_react4.useState)(null);
  const [pendingRemove, setPendingRemove] = (0, import_react4.useState)(null);
  const [selectedIds, setSelectedIds] = (0, import_react4.useState)(() => /* @__PURE__ */ new Set());
  const [error, setError] = (0, import_react4.useState)("");
  const [formError, setFormError] = (0, import_react4.useState)("");
  const [busy, setBusy] = (0, import_react4.useState)(false);
  const [copiedId, setCopiedId] = (0, import_react4.useState)("");
  const [revisions, setRevisions] = (0, import_react4.useState)({ lrev: null, arev: null });
  const revisionsRef = (0, import_react4.useRef)(revisions);
  const refreshState = (0, import_react4.useCallback)((force = false) => {
    const current = revisionsRef.current;
    const useRevs = !force && current.lrev !== null && current.arev !== null;
    return getState(useRevs ? current.lrev : void 0, useRevs ? current.arev : void 0).then((result) => {
      if (!result.ok) {
        setError(messageOf(result, t));
        return;
      }
      setError("");
      const next = {
        lrev: Number(result.body.lrev ?? result.body.mrev) || 0,
        arev: Number(result.body.arev) || 0
      };
      revisionsRef.current = next;
      setRevisions(next);
      if (result.body.unchanged) return;
      const nextAssets = Array.isArray(result.body.assets) ? result.body.assets : [];
      setAssets(nextAssets);
      setDetail((current2) => {
        if (!current2) return current2;
        const fresh = nextAssets.find((row) => row.id === current2.id);
        return fresh ?? current2;
      });
      const live = new Set(nextAssets.map((row) => row.id));
      setSelectedIds((prev) => {
        const kept = [...prev].filter((id) => live.has(id));
        if (kept.length === prev.size) return prev;
        return new Set(kept);
      });
    }).catch((caught) => {
      setError(errText(caught));
    });
  }, [t]);
  (0, import_react4.useEffect)(() => {
    if (!open) return void 0;
    void refreshState(true);
  }, [open, refreshState]);
  (0, import_react4.useEffect)(() => {
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
        setFormError(messageOf(result, t));
        return;
      }
      setFormError("");
      if (after) after(result);
      return refreshState(true);
    }).catch((caught) => {
      setError(errText(caught));
    }).finally(() => {
      setBusy(false);
    });
  };
  const handlePick = async (kind) => {
    const result = await pickPath(kind);
    if (!result.ok) {
      setFormError(pickErrorText(result, t));
      return [];
    }
    const paths = Array.isArray(result.body?.paths) ? result.body.paths.filter((path) => typeof path === "string" && path !== "") : [];
    if (paths.length > 0) return paths;
    return typeof result.body?.path === "string" && result.body.path !== "" ? [result.body.path] : [];
  };
  const visible = assets.filter((asset) => {
    if (filterType && asset.type !== filterType) return false;
    if (!query.trim()) return true;
    const hay = `${asset.name}
${asset.description}
${(asset.tags || []).join("\n")}`.toLowerCase();
    return hay.includes(query.trim().toLowerCase());
  });
  const selectedCount = selectedIds.size;
  const selecting = selectedCount > 0;
  const toggleSelect = (asset) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(asset.id)) next.delete(asset.id);
      else next.add(asset.id);
      return next;
    });
  };
  const clearSelection = () => {
    setSelectedIds(/* @__PURE__ */ new Set());
  };
  if (!stage || !everOpened) return null;
  const searching = Boolean(query.trim());
  const emptyTypeLabel = filterType ? t(`type.${filterType}`) : "";
  const emptyLabel = searching ? t("empty.noMatch") : filterType ? t("empty.type").replace("{type}", emptyTypeLabel) : t("empty.all");
  const emptyActionLabel = searching ? void 0 : filterType ? t("empty.addType").replace("{type}", emptyTypeLabel) : t("add.button");
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    "div",
    {
      role: "region",
      "aria-label": t("stage.title"),
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
        background: "var(--dsw-alias-bg-base, var(--dsw-bg, inherit))",
        color: "var(--dsw-alias-label-primary, inherit)",
        overflow: "hidden"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("style", { children: FOCUS_CSS }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
          "div",
          {
            style: {
              flex: "none",
              display: "flex",
              alignItems: "flex-start",
              gap: 12,
              padding: "12px 20px 12px",
              WebkitAppRegion: "no-drag"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { style: { flex: 1, minWidth: 0 }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h1", { style: { margin: 0, fontSize: 16, fontWeight: 600, lineHeight: "32px" }, children: t("stage.title") }),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { style: { margin: 0, fontSize: 13, lineHeight: "20px", color: "var(--dsw-alias-label-secondary, inherit)" }, children: t("stage.subtitle") })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
                "button",
                {
                  type: "button",
                  style: { ...chromeButton, display: "inline-flex", alignItems: "center", gap: 5, ...busy ? { opacity: 0.5, cursor: "default" } : {} },
                  disabled: busy,
                  onClick: () => {
                    setBusy(true);
                    void refreshState(true).finally(() => {
                      setBusy(false);
                    });
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(RefreshIcon, {}),
                    busy ? t("stage.refreshing") : t("stage.refresh")
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                "button",
                {
                  type: "button",
                  "aria-label": t("stage.close"),
                  onClick: () => {
                    stage.set(false);
                  },
                  style: {
                    border: "none",
                    background: "transparent",
                    color: "inherit",
                    cursor: "pointer",
                    width: 28,
                    height: 28,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 6
                  },
                  children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(CloseIcon, { size: 16 })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { style: { flex: "none", display: "flex", gap: 8, padding: "0 20px 16px" }, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
          "button",
          {
            type: "button",
            onClick: () => {
              setCreating(filterType || "character");
              setFormError("");
            },
            style: {
              border: "none",
              background: "var(--dsw-alias-button-primary-fill, var(--dsw-alias-label-primary, currentColor))",
              color: "var(--dsw-alias-label-primary-foreground, var(--dsw-alias-label-primary-inverted, #fff))",
              borderRadius: 999,
              padding: "8px 16px",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
              fontWeight: 500
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(PlusIcon, {}),
              t("add.button")
            ]
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
          "div",
          {
            style: {
              flex: "none",
              display: "flex",
              alignItems: "center",
              gap: 12,
              flexWrap: "wrap",
              padding: "0 20px 12px",
              borderBottom: "1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { style: { display: "flex", gap: 4, flexWrap: "wrap" }, children: [{ key: "", label: t("chip.all") }, ...ASSET_TYPE_KEYS.map((key) => ({ key, label: t(`type.${key}`) }))].map((chip) => {
                const active = filterType === chip.key;
                return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setFilterType(chip.key);
                      setDetail(null);
                      clearSelection();
                    },
                    style: {
                      border: "none",
                      background: active ? "var(--dsw-alias-interactive-bg-active, rgba(128,128,128,.18))" : "transparent",
                      color: active ? "inherit" : "var(--dsw-alias-label-secondary, inherit)",
                      borderRadius: 999,
                      padding: "4px 10px",
                      cursor: "pointer",
                      fontSize: 13,
                      fontWeight: active ? 500 : 400
                    },
                    children: chip.label
                  },
                  chip.key || "all"
                );
              }) }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { style: { marginLeft: "auto", display: "flex", gap: 8, alignItems: "center" }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                  "input",
                  {
                    value: query,
                    placeholder: t("search.placeholder"),
                    onChange: (event) => {
                      setQuery(event.target.value);
                    },
                    style: {
                      border: "1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))",
                      borderRadius: 999,
                      padding: "6px 12px",
                      fontSize: 13,
                      minWidth: 180,
                      background: "transparent",
                      color: "inherit"
                    }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { style: { fontSize: 12, color: "var(--dsw-alias-label-tertiary, inherit)" }, children: t("sort.updated") })
              ] })
            ]
          }
        ),
        selecting ? /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
          "div",
          {
            style: {
              flex: "none",
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "8px 20px",
              borderBottom: "1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { style: { fontSize: 13 }, children: t("select.count").replace("{n}", String(selectedCount)) }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { style: { marginLeft: "auto", display: "flex", gap: 8, alignItems: "center" }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                  "button",
                  {
                    type: "button",
                    onClick: clearSelection,
                    style: {
                      border: "none",
                      background: "transparent",
                      color: "inherit",
                      cursor: "pointer",
                      fontSize: 13,
                      padding: "4px 8px"
                    },
                    children: t("select.clear")
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
                  "button",
                  {
                    type: "button",
                    disabled: busy,
                    onClick: () => {
                      const names = assets.filter((row) => selectedIds.has(row.id)).map((row) => row.name);
                      setPendingRemove({ ids: [...selectedIds], names });
                    },
                    style: {
                      border: "none",
                      background: "var(--dsw-alias-state-error-tertiary, var(--dsw-alias-interactive-bg-hover-danger, transparent))",
                      color: "var(--dsw-alias-label-error, var(--dsw-alias-state-error-primary, inherit))",
                      borderRadius: 999,
                      padding: "6px 12px",
                      cursor: busy ? "default" : "pointer",
                      fontSize: 13,
                      fontWeight: 500,
                      opacity: busy ? 0.5 : 1
                    },
                    children: t("select.delete").replace("{n}", String(selectedCount))
                  }
                )
              ] })
            ]
          }
        ) : null,
        error !== "" ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { style: { margin: 0, padding: "6px 20px", fontSize: 12, color: "var(--dsw-alias-label-error, var(--dsw-alias-state-error-primary, inherit))" }, children: error }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { style: { flex: 1, minHeight: 0, display: "flex", overflow: "hidden" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { style: { flex: 1, minWidth: 0, overflow: "auto", padding: 16 }, children: detail ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            AssetBrowse,
            {
              t,
              asset: detail,
              onBack: () => {
                setDetail(null);
              }
            },
            detail.id
          ) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            AssetGrid,
            {
              t,
              assets: visible,
              emptyLabel,
              emptyActionLabel,
              showEmptyAction: !searching,
              onEmptyAction: () => {
                setCreating(filterType || "character");
                setFormError("");
              },
              onOpen: (asset) => {
                setDetail(asset);
              },
              onCopy: (asset) => {
                const text = citeOf(asset);
                if (navigator.clipboard?.writeText) void navigator.clipboard.writeText(text);
                setCopiedId(asset.id);
                window.setTimeout(() => {
                  setCopiedId("");
                }, 1500);
              },
              onRemove: (asset) => {
                setPendingRemove({ ids: [asset.id], names: [asset.name] });
              },
              copiedId,
              selectedIds,
              onToggleSelect: toggleSelect
            }
          ) }),
          detail ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            AssetDetail,
            {
              t,
              asset: detail,
              busy,
              onClose: () => {
                setDetail(null);
              },
              onSave: (patch) => {
                run(() => updateAsset(detail.id, patch), (result) => {
                  setDetail(result.body?.asset ?? { ...detail, ...patch });
                });
              }
            },
            detail.id
          ) : null
        ] }),
        creating ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          AddAssetDialog,
          {
            t,
            busy,
            presetType: creating,
            error: formError,
            onCancel: () => {
              setCreating(null);
              setFormError("");
            },
            onPick: handlePick,
            onSubmit: (payload) => {
              run(() => createAsset(payload), (result) => {
                const asset = result.body?.asset;
                setCreating(null);
                if (asset?.type) setFilterType(asset.type);
                if (asset) setDetail(asset);
              });
            }
          }
        ) : null,
        pendingRemove ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          ConfirmRemoveDialog,
          {
            t,
            name: String(pendingRemove.names[0] ?? ""),
            title: pendingRemove.ids.length > 1 ? t("select.removeTitle").replace("{n}", String(pendingRemove.ids.length)) : void 0,
            busy,
            onCancel: () => {
              setPendingRemove(null);
            },
            onConfirm: () => {
              const ids = pendingRemove.ids;
              run(async () => {
                let last = { ok: true, status: 200, body: {} };
                for (const id of ids) {
                  last = await deleteAsset(id);
                  if (!last.ok) return last;
                }
                return last;
              }, () => {
                setPendingRemove(null);
                if (ids.includes(detail?.id)) setDetail(null);
                setSelectedIds((prev) => {
                  const next = new Set(prev);
                  for (const id of ids) next.delete(id);
                  return next;
                });
              });
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
