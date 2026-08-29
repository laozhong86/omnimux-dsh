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
  "stage.title": "\u8D44\u4EA7\u4E2D\u5FC3",
  "stage.subtitle": "\u6C89\u6DC0\u53EF\u590D\u7528\u7684\u89D2\u8272\u3001\u573A\u666F\u3001\u98CE\u683C\u5305\u3001\u9053\u5177\u7B49\u7D20\u6750\uFF0C\u5728\u65B0\u7684\u521B\u4F5C\u9875\u7A7A\u95F4\u4E2D\u5FEB\u901F\u8C03\u7528",
  "stage.refresh": "\u5237\u65B0",
  "stage.refreshing": "\u6B63\u5728\u5237\u65B0\u2026",
  "stage.close": "\u5173\u95ED",
  "loading": "\u6B63\u5728\u52A0\u8F7D\u8D44\u4EA7\u5E93\u2026",
  "add.button": "\u6DFB\u52A0\u8D44\u4EA7",
  "import.button": "\u5BFC\u5165\u8D44\u4EA7\u5305",
  "import.notice": "\u5BFC\u5165\u8D44\u4EA7\u5305\u529F\u80FD\u5373\u5C06\u4E0A\u7EBF",
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
  "chip.all": "\u6240\u6709\u7C7B\u578B",
  "type.character": "\u89D2\u8272",
  "type.scene": "\u573A\u666F",
  "type.style": "\u98CE\u683C\u5305",
  "type.prop": "\u9053\u5177",
  "type.knowledge": "\u77E5\u8BC6\u5305",
  "type.custom": "\u81EA\u5B9A\u4E49",
  "search.placeholder": "\u641C\u7D22\u8D44\u4EA7",
  "sort.updated": "\u6700\u8FD1\u66F4\u65B0",
  "sort.name": "\u6309\u540D\u79F0",
  "view.grid": "\u7F51\u683C\u89C6\u56FE",
  "view.list": "\u5217\u8868\u89C6\u56FE",
  "empty.all": "\u6682\u65E0\u521B\u4F5C\u8D44\u4EA7\u3002\u70B9\u51FB\u300C\u6DFB\u52A0\u8D44\u4EA7\u300D\u5F00\u59CB\u6784\u5EFA\u8D44\u4EA7\u5E93\u3002",
  "empty.noMatch": "\u6CA1\u6709\u5339\u914D\u7684\u8D44\u4EA7\u3002\u6362\u4E2A\u5173\u952E\u8BCD\u8BD5\u8BD5\u3002",
  "empty.type": "\u6682\u65E0{type}\u8D44\u4EA7\u3002",
  "empty.addType": "\u6DFB\u52A0{type}",
  "card.missing": "\u7D20\u6750\u7F3A\u5931",
  "card.copyCite": "\u590D\u5236\u5F15\u7528",
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
  "stage.title": "Asset Center",
  "stage.subtitle": "Manage reusable characters, scenes, style packs, and props for rapid creation",
  "stage.refresh": "Refresh",
  "stage.refreshing": "Refreshing\u2026",
  "stage.close": "Close",
  "loading": "Loading asset library\u2026",
  "add.button": "Add Asset",
  "import.button": "Import Asset Pack",
  "import.notice": "Import asset pack coming soon",
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
  "chip.all": "All Types",
  "type.character": "Character",
  "type.scene": "Scene",
  "type.style": "Style Pack",
  "type.prop": "Prop",
  "type.knowledge": "Knowledge",
  "type.custom": "Custom",
  "search.placeholder": "Search assets",
  "sort.updated": "Recently Updated",
  "sort.name": "By Name",
  "view.grid": "Grid View",
  "view.list": "List View",
  "empty.all": 'No creative assets yet. Click "Add Asset" to get started.',
  "empty.noMatch": "No matching assets found.",
  "empty.type": "No {type} assets yet.",
  "empty.addType": "Add {type}",
  "card.missing": "Files missing",
  "card.copyCite": "Copy Reference",
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
injectCss("PageHeader.module.css", ".dshUk-PageHeader-pageHeader {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 20px;\n  min-height: 56px;\n  box-sizing: border-box;\n  flex: none;\n  gap: 16px;\n  border-bottom: 1px solid var(--dsw-alias-border-l1);\n  -webkit-app-region: no-drag;\n}\n\n.dshUk-PageHeader-heading {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n  flex: 1 1 auto;\n}\n\n.dshUk-PageHeader-breadcrumb {\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  line-height: 16px;\n  color: var(--dsw-alias-label-secondary);\n  margin-bottom: 2px;\n}\n\n.dshUk-PageHeader-titleRow {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.dshUk-PageHeader-title {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 28px;\n  color: var(--dsw-alias-label-primary);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.dshUk-PageHeader-subtitle {\n  margin: 0;\n  font-size: 13px;\n  font-weight: 400;\n  line-height: 18px;\n  color: var(--dsw-alias-label-secondary);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.dshUk-PageHeader-tabsContainer {\n  display: flex;\n  align-items: center;\n  flex: none;\n}\n\n.dshUk-PageHeader-controls {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: none;\n}\n");
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
var PRODUCT_STAGE_EVENT = "dsh-product-stage";
var ACTIVE_STAGE_STORAGE_KEY = "omnimux_active_product_stage";
function createStageStore(stageId, getStage = () => typeof window !== "undefined" ? window.__omnimuxStage : void 0) {
  let open = false;
  if (typeof window !== "undefined") try {
    open = window.localStorage.getItem(ACTIVE_STAGE_STORAGE_KEY) === stageId;
  } catch {
  }
  const listeners = /* @__PURE__ */ new Set();
  function emit() {
    for (const listener of listeners) try {
      listener();
    } catch (err) {
      console.error("StageStore listener error:", err);
    }
  }
  if (open && typeof window !== "undefined") {
    const restore = () => {
      try {
        const stage = getStage();
        if (stage && typeof stage.claim === "function") stage.claim(stageId);
      } catch {
      }
    };
    if (typeof queueMicrotask === "function") queueMicrotask(restore);
    else setTimeout(restore, 0);
  }
  if (typeof window !== "undefined") window.addEventListener(PRODUCT_STAGE_EVENT, (event) => {
    const id = event instanceof CustomEvent ? event.detail?.id : void 0;
    if (id !== stageId && open) {
      open = false;
      emit();
    } else if (id === stageId && !open) {
      open = true;
      emit();
    }
  });
  return {
    getSnapshot: () => open,
    readBox() {
      const stage = getStage();
      if (stage && typeof stage.readBox === "function") return stage.readBox();
      const left = 56;
      const winWidth = typeof window !== "undefined" ? window.innerWidth : 1280;
      const winHeight = typeof window !== "undefined" ? window.innerHeight : 800;
      return {
        top: 0,
        left,
        width: Math.max(8, winWidth - left),
        height: Math.max(8, winHeight)
      };
    },
    subscribe(listener) {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    set(next) {
      if (open === next) return;
      open = next;
      const stage = getStage();
      if (open) stage?.claim?.(stageId);
      else stage?.release?.(stageId);
      emit();
    },
    open() {
      this.set(true);
    },
    close() {
      this.set(false);
    }
  };
}
var SIDEBAR_ENTRY_COMMON_STYLES = `
.omnimux-sidebar-nav-entry {
  box-sizing: border-box; display: flex; align-items: center; gap: 6px; position: relative;
  width: calc(100% - 8px); height: 32px; margin: 0 4px; padding: 0 8px;
  border: none; border-radius: 8px; background: transparent;
  color: var(--dsw-alias-label-primary, inherit);
  font: var(--dsw-font-s-14, inherit); font-size: 14px; line-height: 20px;
  cursor: pointer; text-align: left;
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
  const { id, rank, label, iconSvg, stageStore, locale, customClassName, datasetKey, requireAuth, authReason } = options;
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
    if (requireAuth !== false) {
      const auth = (typeof window !== "undefined" ? window : void 0)?.__omnimuxAuth;
      if (auth && typeof auth.ensureLogin === "function") {
        const reason = authReason ? resolveLabel(authReason) : resolveLabel(label);
        auth.ensureLogin({
          reason,
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

// src/client/stage-store.js
var STAGE_ID = "omnimux-assets";
function createStageStore2(getStage) {
  return createStageStore(STAGE_ID, getStage);
}

// src/client/sidebar-entry.js
var ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" width="14" height="14" fill="none" role="presentation" aria-hidden="true" preserveAspectRatio="xMidYMid meet"><g><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="m7.249 11.552-1.691.323A2.335 2.335 0 0 0 6 16.5h10a2.333 2.333 0 0 0 .443-4.625l-1.691-.323.216-1.708a4 4 0 1 0-7.936 0l.217 1.708ZM5.167 9.333a5.833 5.833 0 1 1 11.62.741 4.168 4.168 0 0 1-.787 8.26H6a4.167 4.167 0 0 1-.787-8.26 5.89 5.89 0 0 1-.046-.74Z"/></g></svg>';
function mountSidebarEntry(stage, t, locale) {
  return createSidebarEntry({
    id: "omnimux-assets",
    rank: 6,
    label: () => t("nav"),
    iconSvg: ICON,
    stageStore: stage,
    locale,
    customClassName: "omnimux-assets-entry",
    datasetKey: "data-omnimux-assets-entry"
  });
}

// src/client/AssetsStage.jsx
var import_react5 = require("react");

// src/client/icons.jsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function Icon({ size = 14, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
      className: "omnimux-assets-icon",
      children
    }
  );
}
function FolderIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Icon, { ...props, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" }) });
}
function FileIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Icon, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M14 3v5h5" })
  ] });
}
function PlusIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Icon, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M12 5v14" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M5 12h14" })
  ] });
}
function CheckIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Icon, { ...props, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "m5 12 5 5 9-10" }) });
}
function CloseIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Icon, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M6 6l12 12" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M18 6 6 18" })
  ] });
}
function ImportIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Icon, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("polyline", { points: "17 8 12 3 7 8" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("line", { x1: "12", y1: "3", x2: "12", y2: "15" })
  ] });
}
function GridIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Icon, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { x: "3", y: "3", width: "7", height: "7", rx: "1" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { x: "14", y: "3", width: "7", height: "7", rx: "1" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { x: "14", y: "14", width: "7", height: "7", rx: "1" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { x: "3", y: "14", width: "7", height: "7", rx: "1" })
  ] });
}
function ListIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Icon, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("line", { x1: "8", y1: "6", x2: "21", y2: "6" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("line", { x1: "8", y1: "12", x2: "21", y2: "12" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("line", { x1: "8", y1: "18", x2: "21", y2: "18" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("line", { x1: "3", y1: "6", x2: "3.01", y2: "6" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("line", { x1: "3", y1: "12", x2: "3.01", y2: "12" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("line", { x1: "3", y1: "18", x2: "3.01", y2: "18" })
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
var import_react2 = require("react");
var import_jsx_runtime3 = require("react/jsx-runtime");
var ASSET_TYPE_KEYS = ["character", "scene", "style", "prop", "knowledge", "custom"];
function AddAssetDialog({ t, busy, presetType = "character", error, onCancel, onPick, onSubmit }) {
  const nameRef = (0, import_react2.useRef)(null);
  const [name2, setName] = (0, import_react2.useState)("");
  const [type, setType] = (0, import_react2.useState)(ASSET_TYPE_KEYS.includes(presetType) ? presetType : "character");
  const [description, setDescription] = (0, import_react2.useState)("");
  const [tagsOpen, setTagsOpen] = (0, import_react2.useState)(false);
  const [tagDraft, setTagDraft] = (0, import_react2.useState)("");
  const [tags, setTags] = (0, import_react2.useState)([]);
  const [files, setFiles] = (0, import_react2.useState)([]);
  (0, import_react2.useEffect)(() => {
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
  const typeOptions = ASSET_TYPE_KEYS.map((key) => ({ value: key, label: t(`type.${key}`) }));
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    ModalDialog,
    {
      open: true,
      onClose: onCancel,
      title: t("add.title"),
      closeLabel: t("stage.close"),
      size: "lg",
      footer: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        Button,
        {
          variant: "primary",
          disabled: !canSubmit,
          loading: busy,
          onClick: () => {
            onSubmit({
              name: name2.trim(),
              type,
              description,
              tags,
              files
            });
          },
          children: t("add.submit")
        }
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "omnimux-assets-form", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "omnimux-assets-name-row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "omnimux-assets-at", "aria-hidden": "true", children: "@" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            InputField,
            {
              ref: nameRef,
              className: "omnimux-assets-name-field",
              value: name2,
              placeholder: t("add.namePlaceholder"),
              disabled: busy,
              onChange: (event) => {
                setName(event.target.value);
              }
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "omnimux-assets-type-row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            DropdownSelect,
            {
              value: type,
              options: typeOptions,
              "aria-label": t("detail.type"),
              disabled: busy,
              onChange: setType
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "omnimux-assets-type-sep", "aria-hidden": "true", children: "|" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            InputField,
            {
              className: "omnimux-assets-desc-field",
              value: description,
              placeholder: t("add.descriptionPlaceholder"),
              disabled: busy,
              onChange: (event) => {
                setDescription(event.target.value);
              }
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
          "div",
          {
            className: "omnimux-assets-drop",
            onDragOver: (event) => {
              event.preventDefault();
            },
            onDrop: (event) => {
              event.preventDefault();
              const dropped = Array.from(event.dataTransfer?.files ?? []);
              addPaths(dropped.map((file) => typeof file.path === "string" ? file.path : "").filter(Boolean));
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(FileIcon, { size: 22 }),
              t("add.drop"),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "omnimux-assets-drop-actions", children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Button, { variant: "outline", size: "sm", disabled: busy, onClick: () => {
                  void onPick("file").then(addPaths);
                }, children: t("add.pickFiles") }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Button, { variant: "outline", size: "sm", disabled: busy, onClick: () => {
                  void onPick("directory").then(addPaths);
                }, children: t("add.pickFolders") })
              ] })
            ]
          }
        ),
        files.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("ul", { className: "omnimux-assets-filelist", children: files.map((file) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("li", { children: [
          looksLikeFolder(file.real_path) ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(FolderIcon, { size: 14 }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(FileIcon, { size: 14 }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "omnimux-assets-filelist-name", children: file.real_path }),
          looksLikeFolder(file.real_path) ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "omnimux-assets-folder-badge", children: t("add.folderBadge") }) : null,
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            IconButton,
            {
              variant: "ghost",
              size: "xs",
              "aria-label": t("mapping.remove"),
              onClick: () => {
                setFiles((current) => current.filter((row) => row.real_path !== file.real_path));
              },
              children: "\xD7"
            }
          )
        ] }, file.real_path)) }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Button, { variant: "ghost", size: "sm", onClick: () => {
            setTagsOpen(!tagsOpen);
          }, children: [
            tagsOpen ? "\u25BE" : "\u25B8",
            " ",
            t("add.tags")
          ] }),
          tagsOpen ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "omnimux-assets-tags", children: tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "omnimux-assets-tag", children: [
              tag,
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                IconButton,
                {
                  variant: "ghost",
                  size: "xs",
                  "aria-label": t("mapping.remove"),
                  onClick: () => {
                    setTags(tags.filter((item) => item !== tag));
                  },
                  children: "\xD7"
                }
              )
            ] }, tag)) }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              InputField,
              {
                value: tagDraft,
                placeholder: t("add.tagsPlaceholder"),
                disabled: busy,
                onChange: (event) => {
                  setTagDraft(event.target.value);
                },
                onKeyDown: (event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    addTag();
                  }
                }
              }
            )
          ] }) : null
        ] }),
        error ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "omnimux-assets-error", children: error }) : null
      ] })
    }
  );
}

// src/client/AssetBrowse.jsx
var import_react3 = require("react");

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

// src/client/AssetBrowse.jsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function isDirectoryRef(file) {
  return file?.kind === "directory" || file?.is_dir === true;
}
function initialStack(asset) {
  const files = Array.isArray(asset.files) ? asset.files : [];
  const folders = files.filter(isDirectoryRef);
  if (folders.length === 1 && files.length === 1) return { file: folders[0], path: "" };
  return null;
}
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
  const [stack, setStack] = (0, import_react3.useState)(() => initialStack(asset));
  const [entries, setEntries] = (0, import_react3.useState)([]);
  const [loading, setLoading] = (0, import_react3.useState)(false);
  const [error, setError] = (0, import_react3.useState)("");
  (0, import_react3.useEffect)(() => {
    setStack(initialStack(asset));
    setEntries([]);
    setError("");
  }, [asset.id]);
  (0, import_react3.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "omnimux-assets-browse", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "omnimux-assets-crumbs", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        Button,
        {
          variant: "outline",
          size: "xs",
          onClick: () => {
            if (!stack) {
              onBack();
              return;
            }
            const parts = String(stack.path || "").split("/").filter(Boolean);
            if (parts.length === 0) setStack(null);
            else setStack({ file: stack.file, path: parts.slice(0, -1).join("/") });
          },
          children: t("browse.back")
        }
      ),
      crumbs.map((crumb, index) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: "omnimux-assets-crumb", children: [
        index > 0 ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "omnimux-assets-crumb-sep", children: "/" }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          Button,
          {
            variant: "ghost",
            size: "xs",
            onClick: () => {
              goCrumb(index);
            },
            children: crumb
          }
        )
      ] }, `${crumb}-${index}`))
    ] }),
    stack ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
      loading ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "omnimux-assets-muted", children: t("loading") }) : null,
      error ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "omnimux-assets-error", children: error }) : null,
      !loading && !error && entries.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "omnimux-assets-muted", children: t("detail.emptyFolder") }) : null,
      !loading && entries.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "omnimux-assets-grid", children: entries.map((entry) => {
        const folder = Boolean(entry.is_dir);
        const kind = mediaKind(entry);
        const src = folder ? "" : previewUrl(asset.id, stack.file.id, entry.relative_path || [stack.path, entry.name].filter(Boolean).join("/"));
        return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
    ] }) : files.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "omnimux-assets-muted", children: t("browse.empty") }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "omnimux-assets-grid", children: files.map((file) => {
      const folder = isDirectoryRef(file);
      const kind = mediaKind(file);
      const src = folder ? "" : previewUrl(asset.id, file.id);
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
  const [broken, setBroken] = (0, import_react3.useState)(false);
  const showImage = kind === "image" && Boolean(src) && !broken;
  const showVideo = kind === "video" && Boolean(src) && !broken;
  const badge = kind === "folder" ? t("detail.folder") : kind === "image" ? t("media.image") : kind === "video" ? t("media.video") : t("detail.file");
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    "article",
    {
      className: "omnimux-assets-focusable omnimux-assets-card",
      tabIndex: clickable ? 0 : void 0,
      role: clickable ? "button" : void 0,
      "aria-label": title,
      onClick: activate,
      onKeyDown: clickable ? activateRowKeydown(activate) : void 0,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "omnimux-assets-card-thumb omnimux-assets-card-thumb--tall", children: [
          showImage ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "img",
            {
              src,
              alt: "",
              className: "omnimux-assets-card-media",
              onError: () => {
                setBroken(true);
              }
            }
          ) : null,
          showVideo ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "video",
            {
              src,
              muted: true,
              playsInline: true,
              preload: "metadata",
              controls: true,
              "aria-label": t("browse.previewVideo"),
              className: "omnimux-assets-card-video",
              onClick: (event) => {
                event.stopPropagation();
              },
              onError: () => {
                setBroken(true);
              }
            }
          ) : null,
          !showImage && !showVideo ? kind === "folder" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(FolderIcon, { size: 28 }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(FileIcon, { size: 28 }) : null,
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "omnimux-assets-badge", children: badge })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "omnimux-assets-card-body", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "omnimux-assets-card-title", children: title }) })
      ]
    }
  );
}

// src/client/AssetGrid.jsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function AssetGrid({ t, assets, emptyLabel, emptyActionLabel, showEmptyAction = true, onEmptyAction, onOpen, onCopy, onRemove, copiedId, selectedIds, onToggleSelect, viewMode = "grid" }) {
  if (assets.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "omnimux-assets-empty", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { children: emptyLabel }),
      emptyActionLabel && onEmptyAction && showEmptyAction ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Button, { variant: "primary", size: "sm", onClick: onEmptyAction, children: emptyActionLabel }) : null
    ] });
  }
  if (viewMode === "list") {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "omnimux-assets-list-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("table", { className: "omnimux-assets-list-table", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { className: "omnimux-assets-th-check" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { className: "omnimux-assets-th-name", children: t("detail.name") }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { className: "omnimux-assets-th-type", children: t("detail.type") }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { className: "omnimux-assets-th-desc", children: t("detail.description") }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { className: "omnimux-assets-th-files", children: t("detail.files") }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { className: "omnimux-assets-th-actions", children: t("card.copyCite") })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("tbody", { children: assets.map((asset) => {
        const selected = selectedIds?.has(asset.id);
        const missing = Number(asset.missing_file_count) > 0 && (!asset.files || asset.files.length === 0);
        return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
          "tr",
          {
            className: "omnimux-assets-list-row",
            "aria-selected": selected ? "true" : "false",
            onClick: () => {
              onOpen(asset);
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { className: "omnimux-assets-td-check", onClick: (e) => e.stopPropagation(), children: onToggleSelect ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                IconButton,
                {
                  variant: "ghost",
                  size: "xs",
                  "aria-label": t("select.toggle"),
                  "aria-pressed": selected ? "true" : "false",
                  onClick: () => {
                    onToggleSelect(asset);
                  },
                  children: selected ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(CheckIcon, { size: 12 }) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", {})
                }
              ) : null }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { className: "omnimux-assets-td-name", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "omnimux-assets-list-cell-name", children: [
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(FileIcon, { size: 16 }),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: asset.name })
              ] }) }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { className: "omnimux-assets-td-type", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "omnimux-assets-badge omnimux-assets-list-badge", children: t(`type.${asset.type}`) }) }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { className: "omnimux-assets-td-desc", children: asset.description || "\u2014" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("td", { className: "omnimux-assets-td-files", children: [
                asset.files?.length ? `${asset.files.length} \u4E2A\u7D20\u6750` : "\u65E0\u7D20\u6750",
                missing ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "omnimux-assets-missing omnimux-assets-list-missing", children: t("card.missing") }) : null
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("td", { className: "omnimux-assets-td-actions", onClick: (e) => e.stopPropagation(), children: [
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                  Button,
                  {
                    variant: "ghost",
                    size: "xs",
                    onClick: () => {
                      onCopy(asset);
                    },
                    children: copiedId === asset.id ? t("card.copied") : t("card.copyCite")
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                  Button,
                  {
                    variant: "ghost",
                    size: "xs",
                    onClick: () => {
                      onRemove(asset);
                    },
                    children: t("mapping.remove")
                  }
                )
              ] })
            ]
          },
          asset.id
        );
      }) })
    ] }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "omnimux-assets-grid", children: assets.map((asset) => {
    const missing = Number(asset.missing_file_count) > 0 && (!asset.files || asset.files.length === 0);
    const selected = selectedIds?.has(asset.id);
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
      "article",
      {
        className: "omnimux-assets-focusable omnimux-assets-card",
        tabIndex: 0,
        role: "button",
        "aria-selected": selected ? "true" : "false",
        onClick: () => {
          onOpen(asset);
        },
        onKeyDown: activateRowKeydown(() => {
          onOpen(asset);
        }),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "omnimux-assets-card-thumb", children: [
            onToggleSelect ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              IconButton,
              {
                variant: "ghost",
                size: "xs",
                className: "omnimux-assets-check",
                "data-selected": selected ? "true" : "false",
                "aria-label": t("select.toggle"),
                "aria-pressed": selected ? "true" : "false",
                title: "",
                onClick: (event) => {
                  event.stopPropagation();
                  onToggleSelect(asset);
                },
                children: selected ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(CheckIcon, { size: 12 }) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", {})
              }
            ) : null,
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(FileIcon, { size: 22 }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "omnimux-assets-badge", children: t(`type.${asset.type}`) }),
            missing ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "omnimux-assets-missing", children: t("card.missing") }) : null
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "omnimux-assets-card-body", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "omnimux-assets-card-title", children: asset.name }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "omnimux-assets-card-desc", children: asset.description || "\u2014" }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "omnimux-assets-card-actions", children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                Button,
                {
                  variant: "ghost",
                  size: "xs",
                  onClick: (event) => {
                    event.stopPropagation();
                    onCopy(asset);
                  },
                  children: copiedId === asset.id ? t("card.copied") : t("card.copyCite")
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                Button,
                {
                  variant: "ghost",
                  size: "xs",
                  onClick: (event) => {
                    event.stopPropagation();
                    onRemove(asset);
                  },
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
var import_react4 = require("react");
var import_jsx_runtime6 = require("react/jsx-runtime");
function AssetDetail({ t, asset, busy, onClose, onSave }) {
  const [name2, setName] = (0, import_react4.useState)(asset.name);
  const [type, setType] = (0, import_react4.useState)(asset.type);
  const [description, setDescription] = (0, import_react4.useState)(asset.description || "");
  const [browse, setBrowse] = (0, import_react4.useState)(null);
  (0, import_react4.useEffect)(() => {
    setName(asset.name);
    setType(asset.type);
    setDescription(asset.description || "");
    setBrowse(null);
  }, [asset.id, asset.name, asset.type, asset.description]);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("aside", { className: "omnimux-assets-detail", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "omnimux-assets-detail-header", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h2", { className: "omnimux-assets-detail-title", children: t("detail.title") }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(IconButton, { variant: "ghost", size: "sm", "aria-label": t("detail.close"), onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CloseIcon, { size: 16 }) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "omnimux-assets-detail-body", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        InputField,
        {
          label: t("detail.name"),
          value: name2,
          disabled: busy,
          onChange: (event) => {
            setName(event.target.value);
          }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        DropdownSelect,
        {
          value: type,
          "aria-label": t("detail.type"),
          disabled: busy,
          options: ASSET_TYPE_KEYS.map((key) => ({ value: key, label: t(`type.${key}`) })),
          onChange: setType
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("label", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "omnimux-assets-muted", children: t("detail.description") }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "textarea",
          {
            className: "omnimux-assets-textarea",
            value: description,
            rows: 6,
            disabled: busy,
            onChange: (event) => {
              setDescription(event.target.value);
            }
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "omnimux-assets-muted", children: t("detail.cite") }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("code", { className: "omnimux-assets-cite", children: asset.cite || `@${asset.type}/${asset.name}` })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "omnimux-assets-muted", children: t("detail.files") }),
        browse ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          FolderBrowse,
          {
            t,
            assetId: asset.id,
            file: browse.file,
            onBack: () => {
              setBrowse(null);
            }
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(TopFileList, { t, files: asset.files || [], onOpenFolder: (file) => {
          setBrowse({ file });
        } })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        Button,
        {
          variant: "primary",
          disabled: busy || name2.trim() === "",
          loading: busy,
          onClick: () => {
            onSave({ name: name2.trim(), type, description });
          },
          children: t("detail.save")
        }
      )
    ] })
  ] });
}
function isDirectoryRef2(file) {
  return file?.kind === "directory" || file?.is_dir === true;
}
function TopFileList({ t, files, onOpenFolder }) {
  if (files.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "omnimux-assets-muted", children: "\u2014" });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("ul", { className: "omnimux-assets-filelist", children: files.map((file) => {
    const folder = isDirectoryRef2(file);
    const activate = folder ? () => {
      onOpenFolder(file);
    } : void 0;
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
      Button,
      {
        variant: "ghost",
        size: "xs",
        className: "omnimux-assets-focusable",
        disabled: !folder,
        onClick: activate,
        onKeyDown: folder ? activateRowKeydown(activate) : void 0,
        children: [
          folder ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(FolderIcon, { size: 14 }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(FileIcon, { size: 14 }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "omnimux-assets-filelist-name", children: file.original_name || file.real_path }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "omnimux-assets-folder-badge", children: folder ? t("detail.browse") : t("detail.file") })
        ]
      }
    ) }, file.id);
  }) });
}
function FolderBrowse({ t, assetId, file, onBack }) {
  const [path, setPath] = (0, import_react4.useState)("");
  const [entries, setEntries] = (0, import_react4.useState)([]);
  const [loading, setLoading] = (0, import_react4.useState)(true);
  const [error, setError] = (0, import_react4.useState)("");
  (0, import_react4.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "omnimux-assets-crumbs", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        Button,
        {
          variant: "outline",
          size: "xs",
          onClick: () => {
            if (path === "") onBack();
            else setPath(crumbs.slice(0, -1).join("/"));
          },
          children: t("detail.back")
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Button, { variant: "ghost", size: "xs", onClick: () => {
        setPath("");
      }, children: file.original_name || t("detail.root") }),
      crumbs.map((crumb, index) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: "omnimux-assets-crumb", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "omnimux-assets-crumb-sep", children: "/" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Button, { variant: "ghost", size: "xs", onClick: () => {
          setPath(crumbs.slice(0, index + 1).join("/"));
        }, children: crumb })
      ] }, `${crumb}-${index}`))
    ] }),
    loading ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "omnimux-assets-muted", children: t("loading") }) : null,
    error ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "omnimux-assets-error", children: error }) : null,
    !loading && !error && entries.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "omnimux-assets-muted", children: t("detail.emptyFolder") }) : null,
    !loading && entries.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("ul", { className: "omnimux-assets-filelist", children: entries.map((entry) => {
      const folder = Boolean(entry.is_dir);
      const activate = folder ? () => {
        setPath(entry.relative_path || [path, entry.name].filter(Boolean).join("/"));
      } : void 0;
      return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
        Button,
        {
          variant: "ghost",
          size: "xs",
          className: "omnimux-assets-focusable",
          disabled: !folder,
          onClick: activate,
          onKeyDown: folder ? activateRowKeydown(activate) : void 0,
          children: [
            folder ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(FolderIcon, { size: 14 }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(FileIcon, { size: 14 }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "omnimux-assets-filelist-name", children: entry.name })
          ]
        }
      ) }, String(entry.relative_path || entry.name));
    }) }) : null
  ] });
}

// src/client/ConfirmRemoveDialog.jsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function ConfirmRemoveDialog({ t, name: name2, title, busy, onCancel, onConfirm }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    ConfirmModal,
    {
      open: true,
      onClose: onCancel,
      title: title || t("mapping.removeTitle").replace("{name}", name2),
      message: t("mapping.removeHint"),
      confirmLabel: t("mapping.removeConfirm"),
      cancelLabel: t("mapping.cancel"),
      confirmVariant: "danger",
      confirmLoading: busy,
      onConfirm
    }
  );
}

// src/client/styles.js
var STYLES_ID = "omnimux-assets-styles";
var ASSETS_CSS = `
.omnimux-assets-stage {
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
.omnimux-assets-stage[data-visible="false"] {
  display: none;
  pointer-events: none;
}
.omnimux-assets-action-row {
  flex: none;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 20px 14px;
}
.omnimux-assets-stage-toolbar {
  flex: none;
  padding: 0 20px 12px;
  height: 44px;
}
.omnimux-assets-tools-cluster {
  display: flex;
  align-items: center;
  gap: 8px;
}
.omnimux-assets-search-wrap {
  width: 220px;
}
.omnimux-assets-sort-wrap {
  width: 120px;
}
.omnimux-assets-view-toggle {
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 8px;
  padding: 2px;
  gap: 2px;
  background: var(--dsw-alias-bg-layer-1, transparent);
}
.omnimux-assets-list-wrap {
  width: 100%;
  overflow-x: auto;
}
.omnimux-assets-list-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}
.omnimux-assets-list-table th {
  text-align: left;
  padding: 8px 12px;
  color: var(--dsw-alias-label-tertiary);
  font-weight: 500;
  font-size: 12px;
  border-bottom: 1px solid var(--dsw-alias-border-l2);
}
.omnimux-assets-th-check, .omnimux-assets-td-check { width: 40px; text-align: center; }
.omnimux-assets-th-name { min-width: 160px; }
.omnimux-assets-th-type, .omnimux-assets-td-type { width: 100px; }
.omnimux-assets-th-desc { min-width: 200px; }
.omnimux-assets-th-files, .omnimux-assets-td-files { width: 120px; }
.omnimux-assets-th-actions, .omnimux-assets-td-actions { width: 160px; text-align: right; }
.omnimux-assets-list-badge { position: static !important; }
.omnimux-assets-list-missing { position: static !important; margin-left: 6px; }
.omnimux-assets-td-desc {
  color: var(--dsw-alias-label-secondary);
  max-width: 320px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.omnimux-assets-list-row {
  cursor: pointer;
  transition: background-color 0.12s ease;
  border-bottom: 1px solid var(--dsw-alias-border-l1);
}
.omnimux-assets-list-row:hover {
  background-color: var(--dsw-alias-interactive-bg-hover);
}
.omnimux-assets-list-row[aria-selected="true"] {
  background-color: var(--dsw-alias-bg-module-platform);
}
.omnimux-assets-list-row td {
  padding: 10px 12px;
  vertical-align: middle;
}
.omnimux-assets-list-cell-name {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
}
.omnimux-assets-selection {
  flex: none;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 20px;
  border-bottom: 1px solid var(--dsw-alias-border-l2);
}
.omnimux-assets-selection-actions {
  margin-left: auto;
  display: flex;
  gap: 8px;
  align-items: center;
}
.omnimux-assets-error {
  margin: 0;
  padding: 6px 20px;
  font-size: 12px;
  color: var(--dsw-alias-state-error-primary);
}
.omnimux-assets-body {
  flex: 1;
  min-height: 0;
  display: flex;
  overflow: hidden;
}
.omnimux-assets-main {
  flex: 1;
  min-width: 0;
  overflow: auto;
  padding: 16px;
}
.omnimux-assets-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 12px;
}
.omnimux-assets-empty {
  border: 1px dashed var(--dsw-alias-border-l4);
  border-radius: 12px;
  min-height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: var(--dsw-alias-label-tertiary);
  font-size: 13px;
}
.omnimux-assets-empty p { margin: 0; }
.omnimux-assets-card {
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  background: var(--dsw-alias-bg-base, var(--dsw-bg));
  display: flex;
  flex-direction: column;
}
.omnimux-assets-card[aria-selected="true"] {
  border-color: var(--dsw-alias-label-primary);
}
.omnimux-assets-card-thumb {
  height: 112px;
  background: var(--dsw-alias-bg-module-platform);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--dsw-alias-label-tertiary);
  overflow: hidden;
}
.omnimux-assets-card-thumb--tall { height: 148px; }
.omnimux-assets-card-media {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.omnimux-assets-card-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  background: var(--dsw-alias-bg-module-platform);
}
.omnimux-assets-badge {
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 11px;
  line-height: 16px;
  padding: 2px 8px;
  border-radius: 999px;
  background: var(--dsw-alias-bg-base, var(--dsw-bg));
  border: 1px solid var(--dsw-alias-border-l2);
  z-index: 1;
}
.omnimux-assets-missing {
  position: absolute;
  bottom: 8px;
  left: 8px;
  font-size: 11px;
  color: var(--dsw-alias-state-warn-primary);
}
.omnimux-assets-card-body {
  padding: 10px 12px 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-height: 72px;
}
.omnimux-assets-card-title {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.omnimux-assets-card-desc {
  font-size: 12px;
  line-height: 18px;
  color: var(--dsw-alias-label-secondary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.omnimux-assets-card-actions {
  display: flex;
  gap: 8px;
  margin-top: 6px;
}
.omnimux-assets-stage .omnimux-assets-card-thumb .omnimux-assets-check,
.omnimux-assets-stage .omnimux-assets-card-thumb .omnimux-assets-check:hover,
.omnimux-assets-stage .omnimux-assets-card-thumb .omnimux-assets-check:active {
  position: absolute;
  top: 8px;
  left: 8px;
  width: 22px;
  min-width: 22px;
  height: 22px;
  min-height: 22px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;
  z-index: 1;
  opacity: 0;
  transform: none;
  transition: opacity 0.15s ease;
  border: 1px solid var(--dsw-alias-border-l3);
  background: var(--dsw-alias-bg-base, var(--dsw-bg));
  color: inherit;
}
.omnimux-assets-stage .omnimux-assets-card-thumb .omnimux-assets-check[data-selected="true"],
.omnimux-assets-stage .omnimux-assets-card-thumb .omnimux-assets-check[data-selected="true"]:hover {
  opacity: 1;
  border: none;
  background: var(--dsw-alias-button-primary-fill);
  color: var(--dsw-alias-label-primary-foreground);
}
.omnimux-assets-focusable:focus-visible {
  outline: 2px solid var(--dsw-alias-label-primary);
  outline-offset: 2px;
  border-radius: 8px;
}
.omnimux-assets-focusable:hover { border-color: var(--dsw-alias-border-l4); }
.omnimux-assets-focusable:hover .omnimux-assets-check,
.omnimux-assets-focusable:focus-within .omnimux-assets-check { opacity: 1; }
.omnimux-assets-browse { display: flex; flex-direction: column; gap: 12px; min-height: 100%; }
.omnimux-assets-crumbs {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
  font-size: 13px;
}
.omnimux-assets-crumb {
  display: inline-flex;
  gap: 6px;
  align-items: center;
}
.omnimux-assets-crumb-sep { color: var(--dsw-alias-label-tertiary); }
.omnimux-assets-muted {
  margin: 0;
  font-size: 13px;
  color: var(--dsw-alias-label-tertiary);
}
.omnimux-assets-detail {
  flex: none;
  width: 320px;
  overflow: auto;
  border-left: 1px solid var(--dsw-alias-border-l2);
  background: var(--dsw-alias-bg-base, var(--dsw-bg));
  display: flex;
  flex-direction: column;
}
.omnimux-assets-detail-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-bottom: 1px solid var(--dsw-alias-border-l2);
}
.omnimux-assets-detail-title {
  margin: 0;
  flex: 1;
  font-size: 13px;
  font-weight: 600;
}
.omnimux-assets-detail-body {
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 13px;
}
.omnimux-assets-textarea {
  width: 100%;
  min-height: 96px;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 8px;
  padding: 6px 8px;
  resize: vertical;
  color: inherit;
  background: inherit;
  font: inherit;
  box-sizing: border-box;
}
.omnimux-assets-cite { font-size: 12px; }
.omnimux-assets-drop {
  width: 100%;
  min-height: 128px;
  border: 1px dashed var(--dsw-alias-border-l4);
  border-radius: 12px;
  background: transparent;
  color: var(--dsw-alias-label-tertiary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 13px;
  padding: 16px;
  box-sizing: border-box;
}
.omnimux-assets-drop-actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
}
.omnimux-assets-filelist {
  margin: 10px 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.omnimux-assets-filelist li {
  display: flex;
  gap: 8px;
  font-size: 12px;
  color: var(--dsw-alias-label-secondary);
  align-items: center;
}
.omnimux-assets-filelist-name {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.omnimux-assets-folder-badge {
  font-size: 11px;
  color: var(--dsw-alias-label-tertiary);
}
.omnimux-assets-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 8px; }
.omnimux-assets-tag {
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 999px;
  background: var(--dsw-alias-bg-module-platform);
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
.omnimux-assets-form { display: flex; flex-direction: column; gap: 12px; }
.omnimux-assets-name-row {
  display: flex;
  align-items: center;
  gap: 8px;
}
.omnimux-assets-at {
  color: var(--dsw-alias-label-tertiary);
  font-size: 18px;
}
.omnimux-assets-name-field { flex: 1; min-width: 0; }
.omnimux-assets-type-row {
  display: flex;
  align-items: center;
  gap: 8px;
}
.omnimux-assets-type-sep { color: var(--dsw-alias-border-l2); }
.omnimux-assets-desc-field { flex: 1; min-width: 0; }
.omnimux-assets-icon {
  flex: none;
  display: inline-block;
  vertical-align: middle;
}
`;
function injectAssetsStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(STYLES_ID)) return;
  const styleNode = document.createElement("style");
  styleNode.id = STYLES_ID;
  styleNode.textContent = ASSETS_CSS;
  document.head.appendChild(styleNode);
}

// src/client/AssetsStage.jsx
var import_jsx_runtime8 = require("react/jsx-runtime");
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
function AssetsStage({ t, stage }) {
  (0, import_react5.useEffect)(() => {
    injectAssetsStyles();
  }, []);
  const open = (0, import_react5.useSyncExternalStore)(
    stage ? (cb) => stage.subscribe(cb) : () => () => {
    },
    stage ? () => stage.getSnapshot() : () => false
  );
  const [everOpened, setEverOpened] = (0, import_react5.useState)(false);
  const [box, setBox] = (0, import_react5.useState)(() => ({ top: 0, left: 0, width: 0, height: 0 }));
  if (open && !everOpened) setEverOpened(true);
  (0, import_react5.useLayoutEffect)(() => {
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
  const [assets, setAssets] = (0, import_react5.useState)([]);
  const [filterType, setFilterType] = (0, import_react5.useState)("");
  const [query, setQuery] = (0, import_react5.useState)("");
  const [sortKey, setSortKey] = (0, import_react5.useState)("updated_at");
  const [viewMode, setViewMode] = (0, import_react5.useState)("grid");
  const [detail, setDetail] = (0, import_react5.useState)(null);
  const [creating, setCreating] = (0, import_react5.useState)(null);
  const [pendingRemove, setPendingRemove] = (0, import_react5.useState)(null);
  const [selectedIds, setSelectedIds] = (0, import_react5.useState)(() => /* @__PURE__ */ new Set());
  const [error, setError] = (0, import_react5.useState)("");
  const [formError, setFormError] = (0, import_react5.useState)("");
  const [busy, setBusy] = (0, import_react5.useState)(false);
  const [copiedId, setCopiedId] = (0, import_react5.useState)("");
  const [revisions, setRevisions] = (0, import_react5.useState)({ lrev: null, arev: null });
  const revisionsRef = (0, import_react5.useRef)(revisions);
  const refreshState = (0, import_react5.useCallback)((force = false) => {
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
  (0, import_react5.useEffect)(() => {
    if (!open) return void 0;
    void refreshState(true);
  }, [open, refreshState]);
  (0, import_react5.useEffect)(() => {
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
  }).sort((a, b) => {
    if (sortKey === "name") {
      return String(a.name || "").localeCompare(String(b.name || ""));
    }
    return String(b.updated_at || "").localeCompare(String(a.updated_at || ""));
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
  if (!stage || !everOpened) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
    "div",
    {
      role: "region",
      "aria-label": t("stage.title"),
      "aria-hidden": open ? void 0 : "true",
      className: "omnimux-assets-stage",
      "data-visible": open ? "true" : "false",
      style: {
        display: open ? void 0 : "none",
        "--stage-top": `${box.top}px`,
        "--stage-left": `${box.left}px`,
        "--stage-width": `${box.width}px`,
        "--stage-height": `${box.height}px`
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          PageHeader,
          {
            title: t("stage.title"),
            subtitle: t("stage.subtitle"),
            onRefresh: () => {
              setBusy(true);
              void refreshState(true).finally(() => {
                setBusy(false);
              });
            },
            refreshing: busy,
            refreshTitle: t("stage.refresh"),
            onClose: () => {
              stage.set(false);
            },
            closeTitle: t("stage.close")
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "omnimux-assets-action-row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            Button,
            {
              variant: "primary",
              leadingIcon: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(PlusIcon, {}),
              onClick: () => {
                setCreating(filterType || "character");
                setFormError("");
              },
              children: t("add.button")
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            Button,
            {
              variant: "outline",
              leadingIcon: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(ImportIcon, {}),
              onClick: () => {
                setError(t("import.notice"));
                setTimeout(() => setError(""), 3e3);
              },
              children: t("import.button")
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          FilterBar,
          {
            className: "omnimux-assets-stage-toolbar",
            compact: true,
            filters: [{ key: "", label: t("chip.all") }, ...ASSET_TYPE_KEYS.map((key) => ({ key, label: t(`type.${key}`) }))].map((chip) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
              Button,
              {
                variant: filterType === chip.key ? "secondary" : "ghost",
                size: "sm",
                "aria-pressed": filterType === chip.key,
                onClick: () => {
                  setFilterType(chip.key);
                  setDetail(null);
                  clearSelection();
                },
                children: chip.label
              },
              chip.key || "all"
            )),
            tools: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "omnimux-assets-tools-cluster", children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "omnimux-assets-search-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                SearchField,
                {
                  value: query,
                  placeholder: t("search.placeholder"),
                  "aria-label": t("search.placeholder"),
                  debounceMs: 0,
                  stretch: true,
                  onValueChange: setQuery
                }
              ) }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "omnimux-assets-sort-wrap", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                DropdownSelect,
                {
                  value: sortKey,
                  options: [
                    { value: "updated_at", label: t("sort.updated") },
                    { value: "name", label: t("sort.name") }
                  ],
                  onChange: setSortKey
                }
              ) }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "omnimux-assets-view-toggle", children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                  IconButton,
                  {
                    variant: viewMode === "grid" ? "secondary" : "ghost",
                    size: "xs",
                    "aria-pressed": viewMode === "grid",
                    "aria-label": t("view.grid"),
                    title: t("view.grid"),
                    onClick: () => setViewMode("grid"),
                    children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(GridIcon, { size: 14 })
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                  IconButton,
                  {
                    variant: viewMode === "list" ? "secondary" : "ghost",
                    size: "xs",
                    "aria-pressed": viewMode === "list",
                    "aria-label": t("view.list"),
                    title: t("view.list"),
                    onClick: () => setViewMode("list"),
                    children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(ListIcon, { size: 14 })
                  }
                )
              ] })
            ] })
          }
        ),
        selecting ? /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "omnimux-assets-selection", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { children: t("select.count").replace("{n}", String(selectedCount)) }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "omnimux-assets-selection-actions", children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Button, { variant: "ghost", size: "sm", onClick: clearSelection, children: t("select.clear") }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
              Button,
              {
                variant: "danger",
                size: "sm",
                disabled: busy,
                onClick: () => {
                  const names = assets.filter((row) => selectedIds.has(row.id)).map((row) => row.name);
                  setPendingRemove({ ids: [...selectedIds], names });
                },
                children: t("select.delete").replace("{n}", String(selectedCount))
              }
            )
          ] })
        ] }) : null,
        error !== "" ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "omnimux-assets-error", children: error }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "omnimux-assets-body", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "omnimux-assets-main", children: detail ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            AssetBrowse,
            {
              t,
              asset: detail,
              onBack: () => {
                setDetail(null);
              }
            },
            detail.id
          ) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            AssetGrid,
            {
              t,
              assets: visible,
              viewMode,
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
          detail ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
        creating ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
        pendingRemove ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
  const stage = createStageStore2(() => window.__omnimuxStage);
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
