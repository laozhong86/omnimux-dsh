window.__ModuleLoader__.load({
  id: "omnimux",
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
  "profile.nav": "\u4E2A\u4EBA\u8D44\u6599",
  "profile.title": "\u4E2A\u4EBA\u8D44\u6599",
  "profile.signedOut": "\u672A\u767B\u5F55",
  "profile.signedIn": "\u5DF2\u767B\u5F55",
  "profile.username": "\u7528\u6237\u540D",
  "profile.displayName": "\u663E\u793A\u540D",
  "profile.group": "\u5206\u7EC4",
  "profile.quota": "\u53EF\u7528\u989D\u5EA6",
  "profile.used": "\u5DF2\u6D88\u8017",
  "profile.site": "\u7AD9\u70B9",
  "profile.logout": "\u9000\u51FA\u767B\u5F55",
  "profile.topUp": "\u5145\u503C\u989D\u5EA6",
  "profile.loading": "\u6B63\u5728\u52A0\u8F7D\u2026",
  "avatar.title": "\u5934\u50CF",
  "avatar.reroll": "\u91CD\u65B0\u751F\u6210",
  "avatar.hue": "\u989C\u8272",
  "avatar.reset": "\u6062\u590D\u9ED8\u8BA4",
  "avatar.error": "\u5934\u50CF\u52A0\u8F7D\u5931\u8D25",
  "avatar.edit": "\u7F16\u8F91",
  "avatar.upload": "\u4E0A\u4F20\u56FE\u7247",
  "avatar.uploadHint": "PNG / JPEG / WebP / GIF\uFF0C\u4E0D\u8D85\u8FC7 200KB",
  "avatar.close": "\u5173\u95ED",
  "quota.hint": "\u53EF\u7528\u989D\u5EA6\u4E0D\u8DB3\uFF0C\u5145\u503C\u540E\u5373\u53EF\u7EE7\u7EED\u3002",
  "quota.topUp": "\u5145\u503C\u989D\u5EA6",
  "auth.gate.title": "\u767B\u5F55 OmniMux",
  "auth.gate.reason.generic": "\u5F53\u524D\u64CD\u4F5C\u9700\u8981\u9A8C\u8BC1\u60A8\u7684 OmniMux \u8D26\u53F7\uFF0C\u767B\u5F55\u540E\u5C06\u81EA\u52A8\u6062\u590D\u6267\u884C\u3002",
  "auth.gate.reason.account": "\u767B\u5F55 OmniMux \u4EE5\u7BA1\u7406\u793E\u4EA4\u5E73\u53F0\u8D26\u53F7\u3002",
  "auth.gate.reason.publish": "\u767B\u5F55 OmniMux \u4EE5\u6267\u884C\u5185\u5BB9\u53D1\u5E03\u3002",
  "auth.gate.reason.open": "\u767B\u5F55 OmniMux \u4EE5\u6253\u5F00\u6B64\u5E94\u7528\u3002",
  "auth.gate.resumeHint": "\u5B8C\u6210\u767B\u5F55\u540E\u5C06\u81EA\u52A8\u6062\u590D\u5F53\u524D\u64CD\u4F5C\u3002",
  "auth.gate.cancel": "\u53D6\u6D88",
  "auth.gate.retry": "\u91CD\u8BD5",
  "plugins.nav": "\u5E94\u7528",
  "plugins.title": "\u5E94\u7528\u4E2D\u5FC3",
  "plugins.needLogin": "\u767B\u5F55 OmniMux \u4EE5\u67E5\u770B\u5DF2\u53D1\u5E03\u5E94\u7528\u3002",
  "plugins.login": "\u767B\u5F55",
  "plugins.waiting": "\u8BF7\u5728\u6253\u5F00\u7684\u9875\u9762\u786E\u8BA4\u767B\u5F55\u3002",
  "plugins.code": "\u8BBE\u5907\u7801",
  "plugins.open": "\u6253\u5F00\u786E\u8BA4\u9875",
  "plugins.empty": "\u6682\u65E0\u5DF2\u53D1\u5E03\u5E94\u7528",
  "plugins.emptySearch": "\u6CA1\u6709\u5339\u914D\u7684\u5E94\u7528\u3002",
  "plugins.search": "\u641C\u7D22\u5E94\u7528\u540D\u79F0\u6216\u63CF\u8FF0",
  "plugins.install": "\u5B89\u88C5",
  "plugins.update": "\u66F4\u65B0",
  "plugins.remove": "\u5378\u8F7D",
  "plugins.openApp": "\u6253\u5F00",
  "plugins.cancel": "\u53D6\u6D88",
  "plugins.confirmInstall": "\u786E\u5B9A\u5B89\u88C5\u300C{title}\u300D\uFF1F",
  "plugins.confirmRemove": "\u786E\u5B9A\u5378\u8F7D\u300C{title}\u300D\uFF1F\u4FA7\u8FB9\u680F\u5FEB\u6377\u5165\u53E3\u5C06\u4E00\u5E76\u79FB\u9664\u3002",
  "plugins.needRestart": "\u91CD\u542F\u670D\u52A1\u540E\u751F\u6548\u3002",
  "plugins.tab.remove": "\u79FB\u51FA\u4FA7\u8FB9\u680F",
  "plugins.tab.pin": "\u56FA\u5B9A",
  "plugins.tab.unpin": "\u53D6\u6D88\u56FA\u5B9A",
  "plugins.tab.top": "\u7F6E\u9876",
  "plugins.installed": "\u5DF2\u5B89\u88C5\u3002\u91CD\u542F\u670D\u52A1\u540E\u5373\u53EF\u6253\u5F00\u5E94\u7528\u3002",
  "plugins.installedShort": "\u5DF2\u5B89\u88C5",
  "plugins.available": "\u672A\u5B89\u88C5",
  "plugins.cap.identity": "\u8EAB\u4EFD",
  "plugins.cap.videoGenerate": "\u89C6\u9891\u751F\u6210",
  "plugins.cap.imageGenerate": "\u56FE\u50CF\u751F\u6210",
  "plugins.cap.textComplete": "\u4E13\u5BB6\u667A\u80FD\u8865\u5168",
  "plugins.cap.official": "\u5B98\u65B9\u793E\u4EA4\u63A5\u53E3",
  "plugins.denied": "\u767B\u5F55\u88AB\u62D2\u7EDD\u3002",
  "plugins.expired": "\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u8BD5\u3002",
  "plugins.error": "\u767B\u5F55\u5931\u8D25\u3002",
  "plugins.close": "\u5173\u95ED\u5E94\u7528",
  "plugins.more": "\u66F4\u591A\u64CD\u4F5C",
  "plugins.back": "\u8FD4\u56DE",
  "plugins.detail.package": "\u5305\u540D",
  "plugins.detail.version": "\u7248\u672C",
  "plugins.detail.source": "\u6765\u6E90",
  "plugins.detail.state": "\u72B6\u6001",
  "plugins.detail.bundled": "\u5185\u7F6E",
  "plugins.detail.kind.official": "\u5B98\u65B9\u5E94\u7528",
  "plugins.detail.loginHint": "\u6B64\u5E94\u7528\u9700\u8981\u767B\u5F55 OmniMux \u540E\u624D\u80FD\u6253\u5F00\u3002",
  "plugins.detail.login": "\u767B\u5F55",
  "plugins.detail.waiting": "\u8BF7\u5728\u6253\u5F00\u7684\u9875\u9762\u786E\u8BA4\u767B\u5F55\u3002",
  "plugins.detail.openFailed": "\u5E94\u7528\u9875\u9762\u672A\u54CD\u5E94\u3002\u5B89\u88C5\u540E\u9700\u8981\u91CD\u542F\u670D\u52A1\u624D\u80FD\u6253\u5F00\u3002",
  "plugins.state.installed": "\u5DF2\u5B89\u88C5",
  "plugins.state.available": "\u672A\u5B89\u88C5",
  "plugins.state.update": "\u6709\u66F4\u65B0",
  "dshPlugins.nav": "\u7CFB\u7EDF\u6269\u5C55",
  "dshPlugins.title": "\u7CFB\u7EDF\u6269\u5C55",
  "dshPlugins.readonlyHint": "\u5F53\u524D\u73AF\u5883\u5DF2\u5B89\u88C5\u7684\u6269\u5C55\u7EC4\u4EF6\u6E05\u5355\uFF08\u53EA\u8BFB\uFF09\u3002\u5982\u9700\u5B89\u88C5\u6216\u5378\u8F7D\uFF0C\u8BF7\u524D\u5F80\u300C\u5E94\u7528\u300D\u9762\u677F\u3002",
  "dshPlugins.protected": "\u6838\u5FC3\u4F9D\u8D56",
  "dshPlugins.restart": "\u91CD\u542F\u4EE5\u4F7F\u6269\u5C55\u751F\u6548",
  "dshPlugins.desktopOnly": "\u5728 OmniMux \u684C\u9762\u7AEF\u4E2D\u7BA1\u7406\u7CFB\u7EDF\u6269\u5C55\u3002",
  "dshPlugins.needDesktop": "\u9700\u8981\u684C\u9762\u7AEF\u73AF\u5883\u4EE5\u91CD\u542F\u670D\u52A1\u3002",
  "update.status.restart": "\u66F4\u65B0\u91CD\u542F",
  "update.status.downloading": "\u6B63\u5728\u4E0B\u8F7D",
  "update.status.retry": "\u91CD\u8BD5\u66F4\u65B0",
  "update.status.ready": "\u7ACB\u5373\u66F4\u65B0",
  "update.tooltip.newVersion": "\u65B0\u7248\u672C: v{version}"
};
var en = {
  "profile.nav": "Profile",
  "profile.title": "Profile",
  "profile.signedOut": "Not signed in",
  "profile.signedIn": "Signed in",
  "profile.username": "Username",
  "profile.displayName": "Display name",
  "profile.group": "Group",
  "profile.quota": "Available Quota",
  "profile.used": "Usage",
  "profile.site": "Site",
  "profile.logout": "Sign out",
  "profile.topUp": "Add Credits",
  "profile.loading": "Loading\u2026",
  "avatar.title": "Avatar",
  "avatar.reroll": "Regenerate",
  "avatar.hue": "Colour",
  "avatar.reset": "Reset to default",
  "avatar.error": "Failed to load avatar",
  "avatar.edit": "Edit",
  "avatar.upload": "Upload image",
  "avatar.uploadHint": "PNG / JPEG / WebP / GIF, up to 200KB",
  "avatar.close": "Close",
  "quota.hint": "Available quota is low. Add credits to continue.",
  "quota.topUp": "Add Credits",
  "auth.gate.title": "Sign in to OmniMux",
  "auth.gate.reason.generic": "Sign in to OmniMux to continue.",
  "auth.gate.reason.account": "Sign in to OmniMux to manage social accounts.",
  "auth.gate.reason.publish": "Sign in to OmniMux to publish content.",
  "auth.gate.reason.open": "Sign in to OmniMux to open this app.",
  "auth.gate.resumeHint": "Action resumes automatically after sign-in.",
  "auth.gate.cancel": "Cancel",
  "auth.gate.retry": "Retry",
  "plugins.nav": "Apps",
  "plugins.title": "App Center",
  "plugins.needLogin": "Sign in to OmniMux to view published apps.",
  "plugins.login": "Sign in",
  "plugins.waiting": "Confirm sign-in on the opened page.",
  "plugins.code": "Device code",
  "plugins.open": "Open confirmation page",
  "plugins.empty": "No published apps",
  "plugins.emptySearch": "No matching apps.",
  "plugins.search": "Search by name or description",
  "plugins.install": "Install",
  "plugins.update": "Update",
  "plugins.remove": "Remove",
  "plugins.openApp": "Open",
  "plugins.cancel": "Cancel",
  "plugins.confirmInstall": 'Install "{title}"?',
  "plugins.confirmRemove": 'Remove "{title}"? Its sidebar shortcut will be removed.',
  "plugins.needRestart": "Available after restarting the service.",
  "plugins.tab.remove": "Remove from sidebar",
  "plugins.tab.pin": "Pin",
  "plugins.tab.unpin": "Unpin",
  "plugins.tab.top": "Move to top",
  "plugins.installed": "Installed. Restart the service to open.",
  "plugins.installedShort": "Installed",
  "plugins.available": "Available",
  "plugins.cap.identity": "Identity",
  "plugins.cap.videoGenerate": "Video Generation",
  "plugins.cap.imageGenerate": "Image Generation",
  "plugins.cap.textComplete": "Expert Completion",
  "plugins.cap.official": "Official Social APIs",
  "plugins.denied": "Sign-in was denied.",
  "plugins.expired": "Sign-in expired. Try again.",
  "plugins.error": "Sign-in failed.",
  "plugins.close": "Close App",
  "plugins.more": "More actions",
  "plugins.back": "Back",
  "plugins.detail.package": "Package",
  "plugins.detail.version": "Version",
  "plugins.detail.source": "Source",
  "plugins.detail.state": "State",
  "plugins.detail.bundled": "Bundled",
  "plugins.detail.kind.official": "Official App",
  "plugins.detail.loginHint": "Sign in to OmniMux before opening this app.",
  "plugins.detail.login": "Sign in",
  "plugins.detail.waiting": "Confirm sign-in on the opened page.",
  "plugins.detail.openFailed": "The app page did not respond. Restart the service after installing.",
  "plugins.state.installed": "Installed",
  "plugins.state.available": "Not installed",
  "plugins.state.update": "Update available",
  "dshPlugins.nav": "System Plugins",
  "dshPlugins.title": "System Plugins",
  "dshPlugins.readonlyHint": "Read-only inventory of bundles installed in this profile. Manage installations from the Apps panel.",
  "dshPlugins.protected": "Required",
  "dshPlugins.restart": "Restart to apply extensions",
  "dshPlugins.desktopOnly": "Manage system plugins from the OmniMux desktop app.",
  "dshPlugins.needDesktop": "The desktop app is required to restart the service.",
  "update.status.restart": "Restart Now",
  "update.status.downloading": "Downloading",
  "update.status.retry": "Retry Update",
  "update.status.ready": "Update Now",
  "update.tooltip.newVersion": "New version: v{version}"
};
var NS = "omnimux";

// src/client/ProfileSection.jsx
var import_react4 = require("react");

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
  function emit2(next) {
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
    emit2(next);
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

// src/auth/omnimux-auth.js
var DEFAULT_SITE = "https://omnimux.ai";
function joinUrl(base, path) {
  const b = String(base || "").replace(/\/+$/, "");
  const p = String(path || "");
  if (!p) return b;
  return p.startsWith("/") ? b + p : `${b}/${p}`;
}

// src/client/quota-failure.js
var WALLET_PATH = "/wallet";
function walletUrl(baseUrl) {
  const base = typeof baseUrl === "string" && baseUrl.trim() ? baseUrl.trim() : DEFAULT_SITE;
  return joinUrl(base, WALLET_PATH);
}

// src/client/use-omnimux-auth.js
var import_react2 = require("react");

// src/client/api-json.js
async function jsonRequest(path, opts = {}) {
  const response = await fetch(path, {
    method: opts.method ?? "GET",
    headers: opts.body === void 0 ? void 0 : { "Content-Type": "application/json" },
    body: opts.body === void 0 ? void 0 : JSON.stringify(opts.body)
  });
  const contentType = response.headers.get("content-type") || "";
  if (opts.requireJson && !contentType.includes("json")) {
    return {
      ok: false,
      status: response.status,
      body: { error: response.status === 404 ? opts.notMounted || "route not mounted" : `unexpected ${contentType || "response"}` }
    };
  }
  let json = {};
  try {
    json = await response.json();
  } catch {
    json = opts.requireJson ? {} : { error: `HTTP ${String(response.status)}` };
  }
  const body = opts.pick ? opts.pick(json) : json;
  return { ok: response.ok, status: response.status, body };
}

// src/client/api-auth.js
var PUBLIC_KEYS = [
  "logged_in",
  "verified",
  "base_url",
  "id",
  "username",
  "display_name",
  "group",
  "quota_usd",
  "used_quota_usd",
  "flow_id",
  "verification_url",
  "user_code",
  "expires_in",
  "interval",
  "kind",
  "error"
];
function pickPublic(raw) {
  const row = raw && typeof raw === "object" ? (
    /** @type {Record<string, unknown>} */
    raw
  ) : {};
  const out = {};
  for (const key of PUBLIC_KEYS) {
    if (key in row) out[key] = row[key];
  }
  return out;
}
async function authRequest(path, opts = {}) {
  const result = await jsonRequest(path, {
    ...opts,
    pick: pickPublic,
    requireJson: true,
    notMounted: "auth routes not mounted"
  });
  const dumped = JSON.stringify(result.body);
  if (typeof dumped === "string" && /access_token|"sk-/.test(dumped)) {
    throw new Error("refused a secret-bearing auth payload");
  }
  return result;
}
function getStatus(verify = false) {
  return authRequest(verify ? "/omnimux/auth/status?verify=1" : "/omnimux/auth/status");
}
function startLogin() {
  return authRequest("/omnimux/auth/login", { method: "POST" });
}
function pollLogin(flowId) {
  return authRequest("/omnimux/auth/poll", { method: "POST", body: { flow_id: flowId } });
}
function logout() {
  return authRequest("/omnimux/auth/logout", { method: "POST" });
}

// src/client/use-omnimux-auth.js
function openAuthUrl(url) {
  if (typeof url === "string" && url) window.open(url, "_blank", "noopener,noreferrer");
}
function runLogin(opts = {}) {
  const onSuccess = typeof opts.onSuccess === "function" ? opts.onSuccess : () => {
  };
  const onState = typeof opts.onState === "function" ? opts.onState : () => {
  };
  let timer = null;
  let flowId = "";
  let cancelled = false;
  function stop() {
    if (timer !== null) {
      window.clearInterval(timer);
      timer = null;
    }
  }
  function schedulePoll(delaySec) {
    stop();
    const delay = Math.max(1, Number(delaySec) || 5) * 1e3;
    timer = window.setInterval(async () => {
      if (cancelled || flowId === "") return;
      try {
        const result = await pollLogin(flowId);
        if (cancelled) return;
        if (result.body?.logged_in) {
          onSuccess(result.body);
          stop();
          return;
        }
        const kind = result.body?.kind;
        if (kind === "pending" || kind === "slow_down") {
          if (result.body?.interval) schedulePoll(result.body.interval);
          return;
        }
        if (result.status === 403 || kind === "denied") onState("denied", { detail: result.body?.error });
        else if (result.status === 410 || kind === "expired") onState("expired", { detail: result.body?.error });
        else onState("error", { detail: result.body?.error || `HTTP ${String(result.status)}` });
        stop();
      } catch (error) {
        if (!cancelled) onState("error", { detail: error instanceof Error ? error.message : "poll failed" });
        stop();
      }
    }, delay);
  }
  async function start() {
    if (cancelled) return;
    onState("starting");
    try {
      const started = await startLogin();
      if (cancelled) return;
      if (!started.ok || typeof started.body?.flow_id !== "string" || !started.body.flow_id) {
        onState("error", { detail: started.body?.error || `HTTP ${String(started.status)}` });
        return;
      }
      flowId = started.body.flow_id;
      openAuthUrl(started.body.verification_url);
      onState("waiting", {
        flow_id: started.body.flow_id,
        user_code: started.body.user_code,
        verification_url: started.body.verification_url,
        interval: started.body.interval
      });
      schedulePoll(started.body.interval);
    } catch (error) {
      if (!cancelled) onState("error", { detail: error instanceof Error ? error.message : "login failed" });
    }
  }
  function cancel2() {
    cancelled = true;
    stop();
  }
  return { start, stop, cancel: cancel2 };
}
function useOmnimuxAuth(opts = {}) {
  const verifyOnMount = opts.verifyOnMount === true;
  const [state2, setState2] = (0, import_react2.useState)({ phase: "checking" });
  (0, import_react2.useEffect)(() => {
    let cancelled = false;
    getStatus(verifyOnMount).then((result) => {
      if (cancelled) return;
      if (result.body.logged_in) setState2({ phase: "ready", profile: result.body });
      else setState2({ phase: "need-login" });
    }).catch(() => {
      if (!cancelled) setState2({ phase: "need-login" });
    });
    return () => {
      cancelled = true;
    };
  }, [verifyOnMount]);
  (0, import_react2.useEffect)(() => {
    if (state2.phase !== "waiting" || !state2.flow_id) return void 0;
    let cancelled = false;
    const delay = Math.max(1, Number(state2.interval) || 5) * 1e3;
    const timer = window.setInterval(() => {
      pollLogin(state2.flow_id).then((result) => {
        if (cancelled) return;
        if (result.body.logged_in) {
          setState2({ phase: "ready", profile: result.body });
          return;
        }
        if (result.body.kind === "pending" || result.body.kind === "slow_down") {
          if (result.body.interval) setState2((current) => ({ ...current, interval: result.body.interval }));
          return;
        }
        if (result.status === 403 || result.body.kind === "denied") setState2({ phase: "denied" });
        else if (result.status === 410 || result.body.kind === "expired") setState2({ phase: "expired" });
        else setState2({ phase: "error", detail: result.body.error || `HTTP ${result.status}` });
      }).catch((error) => {
        if (!cancelled) setState2({ phase: "error", detail: error instanceof Error ? error.message : "poll failed" });
      });
    }, delay);
    return () => {
      cancelled = true;
      window.clearInterval(timer);
    };
  }, [state2.phase, state2.flow_id, state2.interval]);
  async function beginLogin2() {
    setState2({ phase: "starting" });
    try {
      const started = await startLogin();
      if (!started.ok || typeof started.body.flow_id !== "string" || !started.body.flow_id) {
        setState2({ phase: "error", detail: started.body.error || `HTTP ${started.status}` });
        return;
      }
      openAuthUrl(started.body.verification_url);
      setState2({
        phase: "waiting",
        flow_id: started.body.flow_id,
        user_code: started.body.user_code,
        verification_url: started.body.verification_url,
        interval: started.body.interval
      });
    } catch (error) {
      setState2({ phase: "error", detail: error instanceof Error ? error.message : "login failed" });
    }
  }
  function signOut() {
    return logout().then(() => {
      setState2({ phase: "need-login" });
    });
  }
  const recheck = (0, import_react2.useCallback)(() => {
    return getStatus(false).then((result) => {
      if (result.body.logged_in) setState2({ phase: "ready", profile: result.body });
      else setState2({ phase: "need-login" });
      return result;
    }).catch(() => {
      setState2({ phase: "need-login" });
      return null;
    });
  }, []);
  return { state: state2, beginLogin: beginLogin2, signOut, openUrl: openAuthUrl, recheck };
}

// src/client/avatar-api.js
var AVATAR_KEYS = ["uri", "name", "opts", "using_default"];
var AVATAR_OPTS_KEYS = ["seed", "hue", "tone", "background"];
function pickAvatar(raw) {
  const row = raw && typeof raw === "object" ? (
    /** @type {Record<string, unknown>} */
    raw
  ) : {};
  const avatar = row.avatar && typeof row.avatar === "object" ? (
    /** @type {Record<string, unknown>} */
    row.avatar
  ) : {};
  const out = {};
  for (const key of AVATAR_KEYS) {
    if (key in avatar) out[key] = avatar[key];
  }
  if (out.opts && typeof out.opts === "object") {
    const opts = (
      /** @type {Record<string, unknown>} */
      out.opts
    );
    const picked = {};
    for (const key of AVATAR_OPTS_KEYS) {
      if (key in opts) picked[key] = opts[key];
    }
    out.opts = picked;
  }
  if (typeof row.error === "string") out.error = row.error;
  return out;
}
async function avatarRequest(path, opts = {}) {
  const response = await fetch(path, {
    method: opts.method ?? "GET",
    headers: opts.body === void 0 ? void 0 : { "Content-Type": "application/json" },
    body: opts.body === void 0 ? void 0 : JSON.stringify(opts.body)
  });
  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("json")) {
    return {
      ok: false,
      status: response.status,
      body: { error: response.status === 404 ? "avatar route not mounted" : `unexpected ${contentType || "response"}` }
    };
  }
  let json = null;
  try {
    json = await response.json();
  } catch {
    json = {};
  }
  const body = pickAvatar(json);
  if (/"access_token"\s*:/.test(JSON.stringify(body))) {
    throw new Error("refused a secret-bearing avatar payload");
  }
  return { ok: response.ok, status: response.status, body };
}
function getAvatar() {
  return avatarRequest("/omnimux/avatar");
}
function updateAvatar(patch) {
  return avatarRequest("/omnimux/avatar", { method: "PATCH", body: patch });
}

// src/client/ProfileAvatar.jsx
var import_react3 = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var HUES = [12, 90, 150, 210, 280, 320];
function AvatarFace({ uri, initial, size = 44 }) {
  const vars = { "--avatar-size": `${size}px` };
  if (uri) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "img",
      {
        src: uri,
        width: size,
        height: size,
        alt: "",
        className: "omnimux-profile-avatar-img",
        style: vars
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    {
      className: "omnimux-profile-avatar-face",
      "data-large": size > 60 ? "true" : "false",
      style: vars,
      children: initial
    }
  );
}
function EditableAvatar({ t, uri, initial, onOpen }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-avatar", onClick: onOpen, title: t("avatar.edit"), children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AvatarFace, { uri, initial }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "omnimux-avatar-edit", children: t("avatar.edit") })
  ] });
}
function AvatarModal({ t, avatar, initial, busy, error, onApply, onClose }) {
  const fileRef = (0, import_react3.useRef)(null);
  const activeHue = typeof avatar?.opts?.hue === "number" ? avatar.opts.hue : null;
  function pickFile(event) {
    const file = event.target.files && event.target.files[0];
    event.target.value = "";
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = typeof reader.result === "string" ? reader.result : "";
      if (dataUrl) void onApply({ upload: dataUrl });
    };
    reader.readAsDataURL(file);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    ModalDialog,
    {
      open: true,
      size: "sm",
      onClose,
      title: t("avatar.title"),
      closeLabel: t("avatar.close"),
      footer: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button, { variant: "ghost", onClick: onClose, children: t("avatar.close") }),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "omnimux-profile-avatar-preview", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AvatarFace, { uri: avatar?.uri, initial, size: 96 }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-profile-hues", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "omnimux-profile-hues-label", children: t("avatar.hue") }),
          HUES.map((hue) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            IconButton,
            {
              size: "xs",
              variant: "ghost",
              "aria-label": `${t("avatar.hue")} ${hue}`,
              "data-active": activeHue === hue ? "true" : "false",
              className: "omnimux-profile-hue",
              disabled: busy,
              onClick: () => {
                void onApply({ hue });
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "span",
                {
                  className: "omnimux-profile-hue-swatch",
                  style: { "--hue": String(hue) }
                }
              )
            },
            hue
          ))
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-profile-avatar-actions", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button, { variant: "primary", disabled: busy, onClick: () => {
            void onApply({ reroll: true });
          }, children: t("avatar.reroll") }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button, { variant: "ghost", disabled: busy, onClick: () => fileRef.current?.click(), children: t("avatar.upload") }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "input",
            {
              ref: fileRef,
              type: "file",
              accept: "image/png,image/jpeg,image/webp,image/gif",
              style: { display: "none" },
              onChange: pickFile
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            Button,
            {
              variant: "ghost",
              disabled: busy || avatar?.using_default !== false,
              onClick: () => {
                void onApply({ reset: true });
              },
              children: t("avatar.reset")
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "omnimux-profile-hint", children: t("avatar.uploadHint") }),
        error ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "omnimux-profile-error", children: error }) : null
      ]
    }
  );
}

// src/client/styles.js
var STYLES_ID = "omnimux-hub-styles";
var HUB_CSS = `
.omnimux-apps-stage {
  position: fixed;
  z-index: 200;
  top: var(--stage-top);
  left: var(--stage-left);
  width: var(--stage-width);
  height: var(--stage-height);
  display: flex;
  flex-direction: column;
  background: var(--dsw-alias-bg-primary, var(--dsw-bg, #111));
  color: var(--dsw-alias-label-primary, inherit);
  overflow: auto;
  pointer-events: auto;
}
.omnimux-apps-stage[data-visible="false"] {
  display: none;
  pointer-events: none;
}
.omnimux-apps-stage-header {
  flex: none;
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 32px;
  padding: 12px 20px 12px;
  -webkit-app-region: no-drag;
}
.omnimux-apps-stage-title {
  margin: 0;
  flex: 1;
  min-width: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 32px;
}
.omnimux-apps-stage-body {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: auto;
}

.omnimux-login-gate-code {
  font-family: var(--dsw-font-markdown-code-font-family, monospace);
  font-size: 22px;
  letter-spacing: 3px;
  text-align: center;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid var(--dsw-alias-border-l2, inherit);
  color: var(--dsw-alias-label-primary, inherit);
}
.omnimux-login-gate-hint {
  margin: 0;
  font-size: 12px;
  color: var(--dsw-alias-label-secondary, inherit);
  line-height: 1.5;
}
.omnimux-login-gate-error {
  margin: 0;
  font-size: 12px;
  color: var(--dsw-alias-label-error, inherit);
  line-height: 1.5;
}
.omnimux-login-gate-actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  flex-wrap: wrap;
}

.omnimux-profile {
  padding: 20px;
  color: var(--dsw-alias-label-primary, var(--dsw-text-primary, inherit));
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 520px;
}
.omnimux-profile-title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}
.omnimux-profile-card {
  background: var(--dsw-alias-bg-primary, rgba(127,127,127,.08));
  border: 1px solid var(--dsw-alias-border-l2, var(--dsw-border, rgba(127,127,127,.35)));
  border-radius: 10px;
  padding: 14px 16px;
}
.omnimux-profile-card--identity,
.omnimux-profile-card--quota {
  display: flex;
  align-items: center;
}
.omnimux-profile-card--identity { gap: 12px; }
.omnimux-profile-card--quota { gap: 16px; }
.omnimux-profile-card--details { padding: 4px 16px; }
.omnimux-profile-card--signed-out {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
}
.omnimux-profile-identity {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}
.omnimux-profile-name {
  font-size: 15px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.omnimux-profile-username {
  font-size: 13px;
  color: var(--dsw-alias-label-secondary, var(--dsw-text-secondary, rgba(127,127,127,.9)));
}
.omnimux-profile-status {
  margin-left: auto;
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--dsw-alias-label-secondary, var(--dsw-text-secondary, rgba(127,127,127,.9)));
}
.omnimux-profile-status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--dsw-alias-label-accent, #3fb950);
}
.omnimux-profile-error {
  margin: 0;
  font-size: 12px;
  color: var(--dsw-alias-label-error, #e5534b);
  line-height: 1.5;
}
.omnimux-profile-quota {
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1 1 auto;
  min-width: 0;
}
.omnimux-profile-label {
  font-size: 13px;
  color: var(--dsw-alias-label-secondary, var(--dsw-text-secondary, rgba(127,127,127,.9)));
}
.omnimux-profile-value {
  font-size: 13px;
  color: var(--dsw-alias-label-primary, var(--dsw-text-primary, inherit));
  word-break: break-all;
  text-align: right;
}
.omnimux-profile-quota-amount {
  font-size: 22px;
  font-weight: 600;
  line-height: 1.2;
}
.omnimux-profile-quota-used {
  font-size: 12px;
  color: var(--dsw-alias-label-secondary, var(--dsw-text-secondary, rgba(127,127,127,.9)));
}
.omnimux-profile-quota-track {
  height: 4px;
  border-radius: 2px;
  background: var(--dsw-alias-border-l2, var(--dsw-border, rgba(127,127,127,.35)));
  overflow: hidden;
  margin-top: 2px;
}
.omnimux-profile-quota-fill {
  width: var(--quota-used);
  height: 100%;
  border-radius: 2px;
  background: var(--dsw-alias-button-primary-fill, #3b82f6);
}
.omnimux-profile-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
  padding: 9px 0;
  border-bottom: 1px solid var(--dsw-alias-border-l2, var(--dsw-border, rgba(127,127,127,.35)));
}
.omnimux-profile-row[data-last="true"] { border-bottom: none; }
.omnimux-profile-message {
  margin: 0;
  font-size: 13px;
  color: var(--dsw-alias-label-secondary, var(--dsw-text-secondary, rgba(127,127,127,.9)));
  line-height: 1.5;
}
.omnimux-profile-logout { align-self: flex-start; }
.omnimux-avatar {
  position: relative;
  cursor: pointer;
  flex: 0 0 auto;
}
.omnimux-avatar-edit {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--dsw-alias-bg-mask-1, rgba(0,0,0,.55));
  color: var(--dsw-alias-label-primary-inverted, #fff);
  font-size: 11px;
  opacity: 0;
  transition: opacity .15s ease;
  pointer-events: none;
}
.omnimux-avatar:hover .omnimux-avatar-edit { opacity: 1; }
.omnimux-profile-avatar-face,
.omnimux-profile-avatar-img {
  width: var(--avatar-size, 44px);
  height: var(--avatar-size, 44px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  background: var(--dsw-alias-button-primary-fill, #3b82f6);
  color: var(--dsw-alias-label-primary-inverted, #fff);
}
.omnimux-profile-avatar-img {
  display: block;
  object-fit: cover;
  background: none;
}
.omnimux-profile-avatar-face[data-large="true"] { font-size: 28px; }
.omnimux-profile-avatar-preview { display: flex; justify-content: center; }
.omnimux-profile-hues {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.omnimux-profile-hues-label {
  font-size: 12px;
  color: var(--dsw-alias-label-secondary, var(--dsw-text-secondary, rgba(127,127,127,.9)));
}
.omnimux-profile-hue-swatch {
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: hsl(var(--hue) 70% 55%);
  box-shadow: inset 0 0 0 1px var(--dsw-alias-border-l2, rgba(127,127,127,.35));
}
.omnimux-profile-hue[data-active="true"] .omnimux-profile-hue-swatch {
  box-shadow: inset 0 0 0 2px var(--dsw-alias-label-primary, inherit);
}
.omnimux-profile-avatar-actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.omnimux-profile-hint {
  margin: 0;
  font-size: 11px;
  color: var(--dsw-alias-label-secondary, var(--dsw-text-secondary, rgba(127,127,127,.9)));
}

.omnimux-plugins {
  padding: 0 20px 24px;
  color: var(--dsw-alias-label-primary, var(--dsw-text-primary, inherit));
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.omnimux-plugins-toolbar {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 10px;
}
.omnimux-plugins-search { flex: 0 1 280px; max-width: 280px; }
.omnimux-plugins-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  align-items: stretch;
  gap: 12px;
}
.omnimux-plugins-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 176px;
  border-radius: 12px;
  padding: 16px;
  background: var(--dsw-alias-bg-secondary, rgba(255,255,255,0.04));
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.08));
}
.omnimux-plugins-card-body {
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: pointer;
  outline: none;
}
.omnimux-plugins-title-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}
.omnimux-plugins-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  background: var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.10));
  color: var(--dsw-alias-label-primary, inherit);
  flex: 0 0 auto;
}
.omnimux-plugins-title-line {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  flex: 1;
  padding-right: 36px;
}
.omnimux-plugins-title {
  margin: 0;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 15px;
  font-weight: 600;
  line-height: 22px;
}
.omnimux-plugins-badge {
  font-size: 11px;
  line-height: 16px;
  padding: 2px 8px;
  border-radius: 999px;
  white-space: nowrap;
}
.omnimux-plugins-badge[data-state="installed"] {
  background: color-mix(in srgb, var(--dsw-alias-state-success-primary, #4caf7d) 16%, transparent);
  color: var(--dsw-alias-state-success-primary, #4caf7d);
}
.omnimux-plugins-badge[data-state="update"] {
  background: color-mix(in srgb, var(--dsw-alias-state-business-primary, #4c8dff) 16%, transparent);
  color: var(--dsw-alias-state-business-primary, #4c8dff);
}
.omnimux-plugins-badge[data-state="available"] {
  background: var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.08));
  color: var(--dsw-alias-label-secondary, rgba(255,255,255,0.72));
}
.omnimux-plugins-summary {
  margin: 0;
  font-size: 13px;
  line-height: 1.55;
  opacity: 0.72;
}
.omnimux-plugins-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.omnimux-plugins-tag {
  font-size: 11px;
  line-height: 16px;
  padding: 2px 8px;
  border-radius: 999px;
  background: var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.08));
  white-space: nowrap;
}
.omnimux-plugins-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  margin-top: auto;
}
.omnimux-plugins-more {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 1;
}
.omnimux-plugins-popover {
  position: absolute;
  top: 40px;
  right: 8px;
  z-index: 5;
  min-width: 200px;
  max-width: 260px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 6px;
  border-radius: 10px;
  background: var(--dsw-alias-bg-primary, var(--dsw-bg, #16181d));
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.16));
  box-shadow: 0 8px 24px var(--dsw-alias-bg-mask-1, rgba(0,0,0,0.35));
}
.omnimux-plugins-menu-item {
  width: 100%;
  justify-content: flex-start;
}
.omnimux-plugins-menu-item-stack {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  width: 100%;
}
.omnimux-plugins-menu-hint {
  font-size: 11px;
  line-height: 16px;
  opacity: 0.6;
}
.omnimux-plugins-muted { opacity: 0.7; font-size: 13px; margin: 0; }
.omnimux-plugins-error {
  color: var(--dsw-alias-state-error-primary, #e06c75);
  font-size: 13px;
  margin: 0;
}
.omnimux-plugins-restart { align-self: flex-start; }
.omnimux-plugins-gate {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 16px;
  border-radius: 12px;
  background: var(--dsw-alias-bg-secondary, rgba(255,255,255,0.04));
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.08));
}
.omnimux-plugins-gate-code {
  margin: 0;
  font-size: 14px;
  letter-spacing: 2px;
  font-family: var(--dsw-font-markdown-code-font-family, monospace);
}
.omnimux-plugins-gate-waiting {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}

.omnimux-update-action {
  flex: none;
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  align-self: center;
  padding-right: 2px;
}
.omnimux-update-action-btn {
  border-radius: 999px;
  height: 28px;
}
.omnimux-update-action-btn[data-status="readyToRestart"] {
  box-shadow: 0 0 10px color-mix(in srgb, var(--dsw-alias-button-primary-fill, #2563EB) 80%, transparent);
}
.omnimux-update-action-icon {
  display: inline-flex;
  align-items: center;
}
`;
function injectHubStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(STYLES_ID)) return;
  const styleNode = document.createElement("style");
  styleNode.id = STYLES_ID;
  styleNode.textContent = HUB_CSS;
  document.head.appendChild(styleNode);
}

// src/client/ProfileSection.jsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function money(value) {
  return typeof value === "number" ? `$${value.toFixed(2)}` : "\u2014";
}
function DetailRow({ name: name2, children, last }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "omnimux-profile-row", "data-last": last ? "true" : "false", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "omnimux-profile-label", children: name2 }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "omnimux-profile-value", children })
  ] });
}
function SignedIn({ t, profile, onTopUp, onSignOut }) {
  const name2 = profile.display_name || profile.username || "";
  const initial = (name2.trim().charAt(0) || "?").toUpperCase();
  const balance = typeof profile.quota_usd === "number" ? profile.quota_usd : 0;
  const used = typeof profile.used_quota_usd === "number" ? profile.used_quota_usd : 0;
  const total = balance + used;
  const usedPct = total > 0 ? Math.min(100, used / total * 100) : 0;
  const [avatar, setAvatar] = (0, import_react4.useState)(null);
  const [avatarError, setAvatarError] = (0, import_react4.useState)("");
  const [busy, setBusy] = (0, import_react4.useState)(false);
  const [editing, setEditing] = (0, import_react4.useState)(false);
  (0, import_react4.useEffect)(() => {
    let cancelled = false;
    getAvatar().then((result) => {
      if (cancelled) return;
      if (result.ok && result.body.uri) {
        setAvatar(result.body);
        setAvatarError("");
      } else {
        setAvatarError(result.body.error || t("avatar.error"));
      }
    }).catch(() => {
      if (!cancelled) setAvatarError(t("avatar.error"));
    });
    return () => {
      cancelled = true;
    };
  }, [t]);
  async function applyAvatar(patch) {
    if (busy) return;
    setBusy(true);
    try {
      const result = await updateAvatar(patch);
      if (result.ok && result.body.uri) {
        setAvatar(result.body);
        setAvatarError("");
      } else {
        setAvatarError(result.body.error || t("avatar.error"));
      }
    } catch {
      setAvatarError(t("avatar.error"));
    } finally {
      setBusy(false);
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "omnimux-profile", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h2", { className: "omnimux-profile-title", children: t("profile.title") }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "omnimux-profile-card omnimux-profile-card--identity", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(EditableAvatar, { t, uri: avatar?.uri, initial, onOpen: () => setEditing(true) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "omnimux-profile-identity", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "omnimux-profile-name", children: name2 || "\u2014" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "omnimux-profile-username", children: profile.username || "\u2014" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "omnimux-profile-status", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "omnimux-profile-status-dot" }),
        t("profile.signedIn")
      ] })
    ] }),
    avatarError && !editing ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "omnimux-profile-error", children: avatarError }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "omnimux-profile-card omnimux-profile-card--quota", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "omnimux-profile-quota", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "omnimux-profile-label", children: t("profile.quota") }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "omnimux-profile-quota-amount", children: money(profile.quota_usd) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "omnimux-profile-quota-used", children: [
          t("profile.used"),
          " ",
          money(profile.used_quota_usd)
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "omnimux-profile-quota-track", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "div",
          {
            className: "omnimux-profile-quota-fill",
            style: { "--quota-used": `${usedPct}%` }
          }
        ) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Button, { variant: "primary", onClick: onTopUp, children: t("profile.topUp") })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "omnimux-profile-card omnimux-profile-card--details", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(DetailRow, { name: t("profile.username"), children: profile.username || "\u2014" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(DetailRow, { name: t("profile.displayName"), children: profile.display_name || "\u2014" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(DetailRow, { name: t("profile.group"), children: profile.group || "\u2014" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(DetailRow, { name: t("profile.site"), last: true, children: profile.base_url || "\u2014" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Button, { variant: "outline", className: "omnimux-profile-logout", onClick: onSignOut, children: t("profile.logout") }),
    editing ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      AvatarModal,
      {
        t,
        avatar,
        initial,
        busy,
        error: avatarError,
        onApply: applyAvatar,
        onClose: () => setEditing(false)
      }
    ) : null
  ] });
}
function ProfileSection({ t }) {
  (0, import_react4.useEffect)(() => {
    injectHubStyles();
  }, []);
  const { state: state2, signOut, openUrl, recheck } = useOmnimuxAuth({ verifyOnMount: false });
  if (state2.phase === "ready") {
    const profile = state2.profile || {};
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      SignedIn,
      {
        t,
        profile,
        onTopUp: () => openUrl(walletUrl(profile.base_url)),
        onSignOut: () => {
          void signOut();
        }
      }
    );
  }
  const signIn = () => {
    const gate = typeof window !== "undefined" ? (
      /** @type {any} */
      window.__omnimuxAuth
    ) : void 0;
    if (gate && typeof gate.ensureLogin === "function") {
      gate.ensureLogin({
        reason: t("auth.gate.reason.account"),
        onSuccess: () => {
          void recheck();
        }
      });
    } else {
      void recheck();
    }
  };
  const message = {
    checking: t("profile.loading"),
    "need-login": t("profile.signedOut"),
    denied: t("plugins.denied"),
    expired: t("plugins.expired"),
    error: t("plugins.error")
  }[state2.phase] || t("profile.signedOut");
  const showLogin = state2.phase !== "checking";
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "omnimux-profile", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h2", { className: "omnimux-profile-title", children: t("profile.title") }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "omnimux-profile-card omnimux-profile-card--signed-out", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "omnimux-profile-message", children: message }),
      showLogin ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Button, { variant: "primary", onClick: signIn, children: t("plugins.login") }) : null
    ] })
  ] });
}

// src/client/DshPluginsSection.jsx
var import_react5 = require("react");
var import_jsx_runtime4 = require("react/jsx-runtime");
function DshPluginsSection({ t }) {
  const [available, setAvailable] = (0, import_react5.useState)(false);
  const [plugins, setPlugins] = (0, import_react5.useState)([]);
  const [error, setError] = (0, import_react5.useState)("");
  const refresh = () => {
    return fetch("/omnimux/plugins").then(async (response) => {
      let json = {};
      try {
        json = await response.json();
      } catch {
        json = { error: `HTTP ${String(response.status)}` };
      }
      setAvailable(json.available === true);
      setPlugins(Array.isArray(json.plugins) ? json.plugins : []);
      if (!response.ok && typeof json.error === "string" && json.error) setError(json.error);
    }).catch((caught) => {
      setError(caught instanceof Error ? caught.message : String(caught));
    });
  };
  (0, import_react5.useEffect)(() => {
    void refresh();
  }, []);
  if (!available && plugins.length === 0 && error === "") {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "omnimux-dsh-plugins-page", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { className: "omnimux-dsh-plugins-title", children: t("dshPlugins.title") }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "omnimux-dsh-plugins-muted", children: t("dshPlugins.desktopOnly") })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "omnimux-dsh-plugins-page", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { className: "omnimux-dsh-plugins-title", children: t("dshPlugins.title") }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "omnimux-dsh-plugins-muted", children: t("dshPlugins.readonlyHint") }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("ul", { className: "omnimux-dsh-plugins-list", children: plugins.map((plugin) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("li", { className: "omnimux-dsh-plugins-row", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { children: [
      plugin.name,
      plugin.protected ? ` (${t("dshPlugins.protected")})` : ""
    ] }) }, plugin.name)) }),
    error !== "" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "omnimux-dsh-plugins-muted", children: error }) : null
  ] });
}

// src/client/LoginGate.jsx
var import_react6 = require("react");

// src/client/auth-gate.js
var AUTH_GLOBAL_KEY = "__omnimuxAuth";
var MAX_INTENTS = 100;
var impl = { getStatus, runLogin };
var state = Object.freeze({ phase: "closed" });
var intents = [];
var currentLogin = null;
var latestReason = void 0;
var intentSeq = 0;
var listeners = /* @__PURE__ */ new Set();
function emit() {
  for (const listener of [...listeners]) listener();
}
function setState(next) {
  state = Object.freeze({ ...next });
  emit();
}
function getSnapshot() {
  return state;
}
function subscribe(listener) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
function makeIntent(opts) {
  intentSeq += 1;
  return {
    id: intentSeq,
    reason: typeof opts.reason === "string" ? opts.reason : void 0,
    onSuccess: typeof opts.onSuccess === "function" ? opts.onSuccess : void 0,
    onCancel: typeof opts.onCancel === "function" ? opts.onCancel : void 0
  };
}
function rejectAll(reason) {
  const pending = intents;
  intents = [];
  for (const intent of pending) {
    try {
      if (intent.onCancel) intent.onCancel(reason);
    } catch {
    }
  }
}
function resolveAll(profile) {
  const pending = intents;
  intents = [];
  for (const intent of pending) {
    try {
      if (intent.onSuccess) intent.onSuccess(profile);
    } catch {
    }
  }
  setState({ phase: "closed" });
}
function beginLogin(reason) {
  if (currentLogin) {
    currentLogin.cancel();
    currentLogin = null;
  }
  currentLogin = impl.runLogin({
    onSuccess: (profile) => {
      resolveAll(profile);
    },
    onState: (phase, detail = {}) => {
      if (phase === "starting" || phase === "waiting") {
        if (currentLogin === null) return;
        setState({ phase, ...detail, reason });
        return;
      }
      if (phase === "denied" || phase === "expired" || phase === "error") {
        if (currentLogin === null) return;
        rejectAll(phase);
        setState({ phase, ...detail, reason });
        currentLogin = null;
      }
    }
  });
  currentLogin.start();
}
async function checkAndStart(reason) {
  setState({ phase: "checking" });
  let status;
  try {
    status = await impl.getStatus(false);
  } catch {
    status = { ok: false, status: 0, body: { logged_in: false } };
  }
  if (status.body?.logged_in) {
    resolveAll(status.body);
    return;
  }
  beginLogin(reason);
}
async function ensureLogin(opts = {}) {
  const intent = makeIntent(opts);
  if (state.phase !== "closed") {
    intents.push(intent);
    if (state.phase === "denied" || state.phase === "expired" || state.phase === "error") {
      latestReason = intent.reason ?? latestReason;
      beginLogin(intent.reason ?? latestReason);
    }
    return;
  }
  if (intents.length >= MAX_INTENTS) {
    rejectAll("overflow");
    return;
  }
  intents.push(intent);
  latestReason = intent.reason ?? latestReason;
  await checkAndStart(intent.reason ?? latestReason);
}
function cancel(reason = "cancelled") {
  if (currentLogin) {
    currentLogin.cancel();
    currentLogin = null;
  }
  rejectAll(reason);
  setState({ phase: "closed" });
}
function retry() {
  if (state.phase !== "denied" && state.phase !== "expired" && state.phase !== "error") return;
  beginLogin(latestReason);
}
function installAuthGlobal(target, overrides = {}) {
  if (overrides && (overrides.getStatus || overrides.runLogin)) {
    impl = {
      getStatus: overrides.getStatus ?? impl.getStatus,
      runLogin: overrides.runLogin ?? impl.runLogin
    };
  }
  if (target === void 0 || target === null) return void 0;
  const existing = target[AUTH_GLOBAL_KEY];
  if (existing !== void 0) return existing;
  const api = {
    getStatus: (verify) => impl.getStatus(verify),
    ensureLogin,
    cancel,
    retry,
    subscribe,
    getSnapshot
  };
  Object.defineProperty(target, AUTH_GLOBAL_KEY, { value: api, configurable: true });
  return api;
}
installAuthGlobal(
  typeof window !== "undefined" ? window : void 0
);

// src/client/LoginGate.jsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function LoginGate({ t }) {
  (0, import_react6.useEffect)(() => {
    injectHubStyles();
  }, []);
  const gate = (0, import_react6.useSyncExternalStore)(subscribe, getSnapshot);
  if (!gate || gate.phase === "closed") return null;
  const hint = { checking: t("profile.loading"), starting: t("profile.loading") };
  const waiting = gate.phase === "waiting";
  const failed = gate.phase === "denied" || gate.phase === "expired" || gate.phase === "error";
  const reason = gate.reason || t("auth.gate.reason.generic");
  const detail = {
    denied: t("plugins.denied"),
    expired: t("plugins.expired"),
    error: t("plugins.error")
  }[gate.phase];
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    ModalDialog,
    {
      open: true,
      size: "sm",
      onClose: () => {
        cancel();
      },
      title: t("auth.gate.title"),
      description: reason,
      closeLabel: t("auth.gate.cancel"),
      footer: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "omnimux-login-gate-actions", children: [
        waiting && gate.verification_url ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          Button,
          {
            variant: "primary",
            onClick: () => window.open(gate.verification_url, "_blank", "noopener,noreferrer"),
            children: t("plugins.open")
          }
        ) : null,
        failed ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Button, { variant: "primary", onClick: () => retry(), children: t("auth.gate.retry") }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Button, { variant: "ghost", onClick: () => cancel(), children: t("auth.gate.cancel") })
      ] }),
      children: [
        waiting ? /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "omnimux-login-gate-code", children: gate.user_code || "\u2014" }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "omnimux-login-gate-hint", children: t("auth.gate.resumeHint") })
        ] }) : null,
        waiting || gate.phase === "checking" || gate.phase === "starting" ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "omnimux-login-gate-hint", children: hint[gate.phase] || t("plugins.waiting") }) : null,
        failed ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "omnimux-login-gate-error", children: detail }) : null
      ]
    }
  );
}

// src/client/SidebarUpdateAction.jsx
var import_react7 = require("react");
var import_jsx_runtime6 = require("react/jsx-runtime");
var ICON_DOWNLOAD = /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", { width: "13", height: "13", viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M8 2v9m0 0l-3-3m3 3l3-3M2 13.5h12" }) });
var ICON_ROCKET = /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("svg", { width: "13", height: "13", viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round", children: [
  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M12 2c-3.5 0-6.5 3-7.5 7.5L3 11l2 2 1.5-1.5C11 10.5 14 7.5 14 4V2h-2z" }),
  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M6.5 9.5L4 12v2h2l2.5-2.5" }),
  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("circle", { cx: "10.5", cy: "5.5", r: "1", fill: "currentColor" })
] });
function SidebarUpdateAction({ wide = true, t = (k) => k }) {
  (0, import_react7.useEffect)(() => {
    injectHubStyles();
  }, []);
  const [updateState, setUpdateState] = (0, import_react7.useState)({ status: "idle" });
  const [requesting, setRequesting] = (0, import_react7.useState)(false);
  (0, import_react7.useEffect)(() => {
    let active = true;
    async function checkStatus() {
      try {
        const res = await fetch("/api/desktop/updates/status", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          if (active && data.status) {
            setUpdateState(data);
          }
        }
      } catch {
      }
    }
    void checkStatus();
    const timer = setInterval(checkStatus, updateState.status === "downloading" ? 1e3 : 3e3);
    return () => {
      active = false;
      clearInterval(timer);
    };
  }, [updateState.status]);
  const { status, latestVersion, error: updateError, isDev } = updateState;
  if (isDev || status === "idle" || !status) {
    return null;
  }
  const isReady = status === "readyToRestart";
  const isDownloading = status === "downloading";
  const isError = status === "error";
  const handleClick = async (e) => {
    e.stopPropagation();
    if (requesting) return;
    if (status === "available" || status === "error") {
      setRequesting(true);
      setUpdateState((prev) => ({ ...prev, status: "downloading" }));
      try {
        const res = await fetch("/api/desktop/updates/download", { method: "POST" });
        if (res.ok) {
          const data = await res.json();
          setUpdateState(data);
        }
      } catch {
        setUpdateState((prev) => ({ ...prev, status: "available" }));
      } finally {
        setRequesting(false);
      }
    } else if (status === "readyToRestart") {
      setRequesting(true);
      try {
        await fetch("/api/desktop/updates/apply", { method: "POST" });
      } catch {
        setRequesting(false);
      }
    }
  };
  if (!wide) {
    return null;
  }
  const pick = (key, fallback) => {
    const value = t(key);
    return value === key ? fallback : value;
  };
  const labelText = isReady ? pick("update.status.restart", "\u66F4\u65B0\u91CD\u542F") : isDownloading ? pick("update.status.downloading", "\u6B63\u5728\u4E0B\u8F7D") : isError ? pick("update.status.retry", "\u91CD\u8BD5\u66F4\u65B0") : pick("update.status.ready", "\u7ACB\u5373\u66F4\u65B0");
  const versionHint = latestVersion ? pick("update.tooltip.newVersion", `\u65B0\u7248\u672C: v${latestVersion}`).replace("{version}", latestVersion) : void 0;
  const title = isError ? updateError : versionHint;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "omnimux-update-action", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    Button,
    {
      type: "button",
      size: "sm",
      variant: isError ? "danger" : "primary",
      className: "omnimux-update-action-btn",
      "data-status": status,
      onClick: handleClick,
      disabled: isDownloading || requesting,
      loading: isDownloading || requesting,
      title,
      leadingIcon: isReady ? ICON_ROCKET : ICON_DOWNLOAD,
      children: labelText
    }
  ) });
}

// src/brand/defaults.js
var BOOT_WINDOW_KEY = "__OMNIMUX_BRAND__";
var OFFICIAL_PRODUCT_TITLE = "DeepSeek Harness";
var FALLBACK_BRAND_TEXTS = ["DSH Local Build"];
var FISH_VIEWBOX = "0 0 23.16 17.04";
var WORDMARK_VIEWBOX = "0 0 182 24";
var NAME_WORDMARK_VIEWBOX = "26 0 156 24";
var HERO_FISH_MIN_WIDTH = 34;
var PREVIEW_BADGE_TEXTS = ["\u9884\u89C8\u7248", "Preview"];
var DEFAULT_HERO_HEADLINE = "\u5C5E\u4E8E\u4F60\u7684AI\u793E\u5A92\u8FD0\u8425\u56E2\u961F";
var OFFICIAL_HERO_HEADLINES = ["\u63A2\u7D22\u672A\u81F3\u4E4B\u5883", "Into the Unknown"];
var DEFAULT_HERO_HEADLINE_MAX_PX = 26;
var DEFAULT_HERO_HEADLINE_MIN_PX = 16;
var DEFAULT_HERO_HEADLINE_LEADING_PX = 32;
var HERO_HEADLINE_FISH_PX = 34;
var HERO_HEADLINE_GAP_PX = 10;
var DEFAULT_LOGO_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <rect width="32" height="32" rx="7" fill="#0A0A0B"/>
  <g transform="translate(4 4) scale(1.5)">
    <path d="M0 2.5h4.5l2.5 4" stroke="#A1A1AA"/>
    <path d="M0 8h6.5" stroke="#A1A1AA"/>
    <path d="M0 13.5h4.5l2.5-4" stroke="#A1A1AA"/>
    <rect x="7" y="7" width="2" height="2" fill="#FAFAFA"/>
    <path d="M9.5 8H14" stroke="#C8F135"/>
    <rect x="14" y="7" width="2" height="2" fill="#C8F135"/>
  </g>
</svg>`;
var DEFAULT_CONFIG = Object.freeze({
  productName: "OmniMux",
  logoSvg: DEFAULT_LOGO_SVG,
  wordmarkText: "OmniMux",
  replaceHeroMark: true,
  hidePreviewBadge: true,
  rewriteWelcome: true,
  heroHeadline: DEFAULT_HERO_HEADLINE,
  heroHeadlineFit: true,
  heroHeadlineMaxPx: DEFAULT_HERO_HEADLINE_MAX_PX,
  heroHeadlineMinPx: DEFAULT_HERO_HEADLINE_MIN_PX
});

// src/brand/hero-headline-fit.js
var HERO_HEADLINE_FIT_STYLE_ID = "omnimux-hero-headline-fit";
var HERO_HEADLINE_ATTR = "data-omnimux-hero-headline";
var HERO_HEADLINE_SIZE_VAR = "--omnimux-hero-headline-size";
var HERO_HEADLINE_LEADING_VAR = "--omnimux-hero-headline-leading";
var HIDE_ATTR = "data-omnimux-hide";
var ASCII_WIDTH_RATIO = 0.55;
function headlineLeadingPx(sizePx, maxPx = DEFAULT_HERO_HEADLINE_MAX_PX, leadingPx = DEFAULT_HERO_HEADLINE_LEADING_PX) {
  if (sizePx >= maxPx) return leadingPx;
  return Math.max(1, Math.round(sizePx * leadingPx / maxPx));
}
function heuristicMeasure(text, px) {
  let width = 0;
  for (const ch of text) {
    const code = ch.codePointAt(0) ?? 0;
    width += code > 255 ? px : px * ASCII_WIDTH_RATIO;
  }
  return width;
}
function computeHeadlineSize(availableWidth, text, options = {}) {
  const maxPx = options.maxPx ?? DEFAULT_HERO_HEADLINE_MAX_PX;
  const minPx = options.minPx ?? DEFAULT_HERO_HEADLINE_MIN_PX;
  const fontFamily = options.fontFamily ?? "sans-serif";
  const fontWeight = options.fontWeight ?? 500;
  const measure = options.measure ?? ((value, px) => heuristicMeasure(value, px));
  if (typeof text !== "string" || text.length === 0) return maxPx;
  const width = Number(availableWidth);
  if (!Number.isFinite(width) || width <= 0) return maxPx;
  const fits = (px) => measure(text, px, fontFamily, fontWeight) <= width;
  if (fits(maxPx)) return maxPx;
  if (!fits(minPx)) return minPx;
  let lo = minPx;
  let hi = maxPx;
  let best = minPx;
  while (lo <= hi) {
    const mid = lo + hi >> 1;
    if (fits(mid)) {
      best = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return best;
}
function startHeadlineFit(document2, config, restores) {
  if (config?.heroHeadlineFit === false) {
    return { retarget() {
    }, dispose() {
    } };
  }
  const existing = fitters.get(document2);
  if (existing) {
    existing.retarget();
    return existing;
  }
  const view = document2.defaultView;
  const maxPx = config.heroHeadlineMaxPx ?? DEFAULT_CONFIG.heroHeadlineMaxPx;
  const minPx = config.heroHeadlineMinPx ?? DEFAULT_CONFIG.heroHeadlineMinPx;
  const measure = createMeasure(document2);
  let disposed = false;
  let observer = null;
  let observed = null;
  let marked = null;
  ensureFitStyle(document2);
  const fitNow = () => {
    if (disposed) return;
    const grid = observed ?? marked?.parentElement ?? null;
    const text = (marked?.textContent ?? config.heroHeadline ?? "").trim();
    const available = view && grid instanceof view.Element ? textAvailableWidth(grid, view) : 0;
    const font = readFont(marked, view);
    const size = computeHeadlineSize(available, text, {
      maxPx,
      minPx,
      fontFamily: font.family,
      fontWeight: font.weight,
      measure
    });
    writeVars(document2, size, maxPx);
  };
  const retarget = () => {
    if (disposed) return;
    const next = findHeadlineText(document2, config);
    if (marked && marked !== next) marked.removeAttribute(HERO_HEADLINE_ATTR);
    marked = next;
    if (marked && !marked.hasAttribute(HERO_HEADLINE_ATTR)) {
      marked.setAttribute(HERO_HEADLINE_ATTR, "");
    }
    const grid = marked?.parentElement ?? findHeadlineGrid(document2);
    if (observer && observed && observed !== grid) observer.unobserve(observed);
    observed = grid;
    if (observer && observed) observer.observe(observed);
    fitNow();
  };
  const dispose = () => {
    if (disposed) return;
    disposed = true;
    observer?.disconnect();
    observer = null;
    observed = null;
    if (marked?.hasAttribute(HERO_HEADLINE_ATTR)) marked.removeAttribute(HERO_HEADLINE_ATTR);
    marked = null;
    document2.documentElement.style.removeProperty(HERO_HEADLINE_SIZE_VAR);
    document2.documentElement.style.removeProperty(HERO_HEADLINE_LEADING_VAR);
    document2.getElementById(HERO_HEADLINE_FIT_STYLE_ID)?.remove();
    fitters.delete(document2);
  };
  if (view && typeof view.ResizeObserver === "function") {
    observer = new view.ResizeObserver(fitNow);
  }
  retarget();
  const fitter = { retarget, dispose };
  fitters.set(document2, fitter);
  restores.push(dispose);
  return fitter;
}
var fitters = /* @__PURE__ */ new WeakMap();
function ensureFitStyle(document2) {
  if (document2.getElementById(HERO_HEADLINE_FIT_STYLE_ID) !== null) return;
  const style = document2.createElement("style");
  style.id = HERO_HEADLINE_FIT_STYLE_ID;
  style.textContent = [
    `[${HERO_HEADLINE_ATTR}]{white-space:nowrap !important;font-size:var(${HERO_HEADLINE_SIZE_VAR}, ${DEFAULT_HERO_HEADLINE_MAX_PX}px) !important;line-height:var(${HERO_HEADLINE_LEADING_VAR}, ${DEFAULT_HERO_HEADLINE_LEADING_PX}px) !important}`,
    `[${HIDE_ATTR}]{display:none !important}`
  ].join("");
  document2.head.append(style);
}
function writeVars(document2, sizePx, maxPx) {
  const leading = headlineLeadingPx(sizePx, maxPx);
  document2.documentElement.style.setProperty(HERO_HEADLINE_SIZE_VAR, `${sizePx}px`);
  document2.documentElement.style.setProperty(HERO_HEADLINE_LEADING_VAR, `${leading}px`);
}
function findHeadlineText(document2, config) {
  const marked = document2.querySelector(`[${HERO_HEADLINE_ATTR}]`);
  if (marked) return marked;
  const byClass = document2.querySelector('[class*="headlineText"]');
  if (byClass) return byClass;
  const wanted = [config.heroHeadline, ...OFFICIAL_HERO_HEADLINES].filter((value) => typeof value === "string" && value.trim() !== "");
  for (const el of document2.querySelectorAll("span,div")) {
    if (el.childElementCount !== 0) continue;
    const current = el.textContent?.trim() ?? "";
    if (wanted.includes(current)) return el;
  }
  return null;
}
function findHeadlineGrid(document2) {
  const text = document2.querySelector(`[${HERO_HEADLINE_ATTR}], [class*="headlineText"]`);
  if (text?.parentElement) return text.parentElement;
  for (const el of document2.querySelectorAll('[class*="headline"]')) {
    const cls = typeof el.className === "string" ? el.className : "";
    if (cls.includes("headlineText")) continue;
    return el;
  }
  return null;
}
function textAvailableWidth(grid, view) {
  const width = Number(grid.clientWidth);
  if (!Number.isFinite(width) || width <= 0) return 0;
  let used = HERO_HEADLINE_FISH_PX + HERO_HEADLINE_GAP_PX;
  for (const child of grid.children) {
    if (isHeadlineTextNode(child)) continue;
    if (child.hasAttribute(HIDE_ATTR)) continue;
    const style = typeof view.getComputedStyle === "function" ? view.getComputedStyle(child) : null;
    if (style && (style.display === "none" || style.visibility === "hidden")) continue;
    const className = typeof child.className === "string" ? child.className : "";
    if (className.includes("fishHitbox") || className.includes("fish")) {
      const fishWidth = rectWidth(child);
      if (fishWidth > 0) used += fishWidth - HERO_HEADLINE_FISH_PX;
      continue;
    }
    const extra = rectWidth(child);
    if (extra > 0) used += extra + HERO_HEADLINE_GAP_PX;
  }
  return Math.max(0, width - used);
}
function isHeadlineTextNode(node) {
  if (node.hasAttribute(HERO_HEADLINE_ATTR)) return true;
  const className = typeof node.className === "string" ? node.className : "";
  return className.includes("headlineText");
}
function rectWidth(node) {
  if (typeof node.getBoundingClientRect !== "function") return 0;
  const width = node.getBoundingClientRect().width;
  return Number.isFinite(width) && width > 0 ? width : 0;
}
function readFont(node, view) {
  const style = node && view && typeof view.getComputedStyle === "function" ? view.getComputedStyle(node) : null;
  return {
    family: style?.fontFamily || "sans-serif",
    weight: style?.fontWeight || 500
  };
}
function createMeasure(document2) {
  const ctx = real2dContext(document2);
  return (text, px, fontFamily, fontWeight) => {
    if (ctx && typeof ctx.measureText === "function") {
      try {
        ctx.font = `${fontWeight} ${px}px ${fontFamily}`;
        const width = ctx.measureText(text).width;
        if (Number.isFinite(width) && width > 0) return width;
      } catch {
      }
    }
    return heuristicMeasure(text, px);
  };
}
function real2dContext(document2) {
  const view = document2.defaultView;
  if (!view || /jsdom/i.test(view.navigator?.userAgent ?? "")) return null;
  try {
    const canvas = document2.createElement("canvas");
    if (typeof canvas.getContext !== "function") return null;
    const ctx = canvas.getContext("2d");
    return ctx && typeof ctx.measureText === "function" ? ctx : null;
  } catch {
    return null;
  }
}

// src/brand/overlay.js
var BRAND_ATTR = "data-omnimux-brand";
var COVER_ATTR = "data-omnimux-covered";
var HIDE_ATTR2 = "data-omnimux-hide";
var STYLE_ID = "omnimux-brand-overlay";
var TITLE_SUFFIX = ` \u2014 ${OFFICIAL_PRODUCT_TITLE}`;
function resolveConfig(raw) {
  return {
    productName: raw?.productName ?? DEFAULT_CONFIG.productName,
    logoSvg: raw?.logoSvg ?? DEFAULT_CONFIG.logoSvg,
    wordmarkText: raw?.wordmarkText ?? DEFAULT_CONFIG.wordmarkText,
    replaceHeroMark: raw?.replaceHeroMark ?? DEFAULT_CONFIG.replaceHeroMark,
    hidePreviewBadge: raw?.hidePreviewBadge ?? DEFAULT_CONFIG.hidePreviewBadge,
    rewriteWelcome: raw?.rewriteWelcome ?? DEFAULT_CONFIG.rewriteWelcome,
    heroHeadline: raw?.heroHeadline ?? DEFAULT_CONFIG.heroHeadline,
    heroHeadlineFit: raw?.heroHeadlineFit ?? DEFAULT_CONFIG.heroHeadlineFit,
    heroHeadlineMaxPx: raw?.heroHeadlineMaxPx ?? DEFAULT_CONFIG.heroHeadlineMaxPx,
    heroHeadlineMinPx: raw?.heroHeadlineMinPx ?? DEFAULT_CONFIG.heroHeadlineMinPx
  };
}
function configFromWindow(win) {
  const raw = win[BOOT_WINDOW_KEY];
  return resolveConfig(raw && typeof raw === "object" ? raw : void 0);
}
function startOverlay(document2, config) {
  const restores = [];
  let applying = false;
  const paint = () => {
    if (applying) return;
    applying = true;
    try {
      applyOverlay(document2, config, restores);
    } finally {
      applying = false;
    }
  };
  paint();
  const view = document2.defaultView;
  const observer = new view.MutationObserver(paint);
  observer.observe(document2.documentElement, {
    subtree: true,
    childList: true
  });
  return () => {
    observer.disconnect();
    while (restores.length > 0) restores.pop()();
  };
}
function applyOverlay(document2, config, restores) {
  ensureStyle(document2, restores);
  rewriteTitle(document2, config.productName, restores);
  replaceFavicon(document2, config.logoSvg, restores);
  sweepOrphanCovers(document2);
  coverBrandText(document2, config, restores);
  coverWordmarks(document2, config, restores);
  coverBrandMarkFish(document2, config, restores);
  coverRailFish(document2, config, restores);
  coverHeroFish(document2, config, restores);
  rewriteHeroHeadline(document2, config, restores);
  if (config.hidePreviewBadge) hidePreviewBadges(document2, restores);
  if (config.rewriteWelcome) rewriteWelcomeCopy(document2, config.productName, restores);
  startHeadlineFit(document2, config, restores);
}
function ensureStyle(document2, restores) {
  if (document2.getElementById(STYLE_ID) !== null) return;
  const style = document2.createElement("style");
  style.id = STYLE_ID;
  style.textContent = [
    `svg[${COVER_ATTR}]{opacity:0 !important}`,
    `[${HIDE_ATTR2}]{visibility:hidden !important}`,
    `button:hover>[${BRAND_ATTR}="fish"]{visibility:hidden !important;opacity:0 !important}`
  ].join("");
  document2.head.append(style);
  restores.push(() => {
    style.remove();
  });
}
function rewriteTitle(document2, productName, restores) {
  const current = document2.title;
  const next = brandedTitle(current, productName);
  if (next === current) return;
  if (!restores.some((entry) => entry._title)) {
    const original = current.includes(OFFICIAL_PRODUCT_TITLE) ? current : brandedTitleInverse(current, productName);
    const restore = () => {
      document2.title = original;
    };
    restore._title = true;
    restores.push(restore);
  }
  document2.title = next;
}
function brandedTitle(title, productName) {
  if (title === OFFICIAL_PRODUCT_TITLE) return productName;
  if (title.endsWith(TITLE_SUFFIX)) return `${title.slice(0, -TITLE_SUFFIX.length)} \u2014 ${productName}`;
  return title;
}
function brandedTitleInverse(title, productName) {
  if (title === productName) return OFFICIAL_PRODUCT_TITLE;
  const suffix = ` \u2014 ${productName}`;
  if (title.endsWith(suffix)) return `${title.slice(0, -suffix.length)}${TITLE_SUFFIX}`;
  return title;
}
function replaceFavicon(document2, logoSvg, restores) {
  const link = document2.querySelector('link[rel="icon"]');
  if (!(link instanceof document2.defaultView.HTMLLinkElement)) return;
  const next = svgDataUri(logoSvg);
  if (link.href === next || link.getAttribute("href") === next) return;
  if (!restores.some((entry) => entry._favicon)) {
    const href = link.getAttribute("href");
    const type = link.getAttribute("type");
    const restore = () => {
      if (href === null) link.removeAttribute("href");
      else link.setAttribute("href", href);
      if (type === null) link.removeAttribute("type");
      else link.setAttribute("type", type);
    };
    restore._favicon = true;
    restores.push(restore);
  }
  link.setAttribute("type", "image/svg+xml");
  link.setAttribute("href", next);
}
function coverWordmarks(document2, config, restores) {
  for (const viewBox of [WORDMARK_VIEWBOX, NAME_WORDMARK_VIEWBOX]) {
    for (const svg of officialSvgs(document2, viewBox)) {
      const branded = viewBox === NAME_WORDMARK_VIEWBOX && inExpandedBrand(svg) ? createWordmarkLabel(document2, config) : createWordmark(document2, config);
      coverOfficial(svg, branded, restores);
    }
  }
}
function inExpandedBrand(node) {
  return node.closest('[class*="brandIdentity"]') !== null;
}
function inComposer(node) {
  return node.closest("[data-composer-seat], [data-composer-card], [data-input-scroll]") !== null;
}
function inHeroMark(node) {
  return node.closest('[class*="fishHitbox"], [class*="headline"]') !== null;
}
function inSidebarRail(node) {
  return node.closest('[class*="railMark"]') !== null;
}
function coverBrandText(document2, config, restores) {
  for (const text of FALLBACK_BRAND_TEXTS) {
    for (const el of document2.querySelectorAll("div,span")) {
      if (el.childElementCount !== 0 || el.textContent?.trim() !== text) continue;
      const original = el.textContent;
      if (original === config.productName) continue;
      el.textContent = config.productName;
      restores.push(() => {
        el.textContent = original;
      });
    }
  }
}
function coverBrandMarkFish(document2, config, restores) {
  for (const svg of officialSvgs(document2, FISH_VIEWBOX)) {
    if (!inExpandedBrand(svg) || inComposer(svg)) continue;
    const width = Number.parseFloat(svg.getAttribute("width") ?? "0");
    if (width >= HERO_FISH_MIN_WIDTH) continue;
    coverOfficial(svg, createMark(document2, config.logoSvg, svg), restores);
  }
}
function coverRailFish(document2, config, restores) {
  for (const svg of officialSvgs(document2, FISH_VIEWBOX)) {
    if (inExpandedBrand(svg) || inComposer(svg) || inHeroMark(svg) || !inSidebarRail(svg)) continue;
    const width = Number.parseFloat(svg.getAttribute("width") ?? "0");
    if (width >= HERO_FISH_MIN_WIDTH) continue;
    coverOfficial(svg, createMark(document2, config.logoSvg, svg), restores);
  }
}
function coverHeroFish(document2, config, restores) {
  if (!config.replaceHeroMark) return;
  for (const svg of officialSvgs(document2, FISH_VIEWBOX)) {
    if (inExpandedBrand(svg) || inComposer(svg) || !inHeroMark(svg)) continue;
    const width = Number.parseFloat(svg.getAttribute("width") ?? "0");
    if (width < HERO_FISH_MIN_WIDTH) continue;
    replaceInPlace(svg, createMark(document2, config.logoSvg, svg), restores);
  }
}
function rewriteHeroHeadline(document2, config, restores) {
  const next = config.heroHeadline;
  if (typeof next !== "string" || next.trim() === "") return;
  for (const el of document2.querySelectorAll("span,div")) {
    if (el.childElementCount !== 0) continue;
    if (el.closest(`[${BRAND_ATTR}]`) !== null) continue;
    const current = el.textContent?.trim() ?? "";
    if (!OFFICIAL_HERO_HEADLINES.includes(current)) continue;
    if (current === next) continue;
    const original = el.textContent;
    el.textContent = next;
    restores.push(() => {
      el.textContent = original;
    });
  }
}
function replaceInPlace(official, branded, restores) {
  if (official.hasAttribute(COVER_ATTR)) return;
  official.setAttribute(COVER_ATTR, "");
  const previousDisplay = official.style.display;
  official.style.display = "none";
  official.after(branded);
  restores.push(() => {
    branded.remove();
    official.style.display = previousDisplay;
    official.removeAttribute(COVER_ATTR);
  });
}
function sweepOrphanCovers(document2) {
  for (const branded of [...document2.querySelectorAll(`[${BRAND_ATTR}]`)]) {
    const official = branded.previousElementSibling;
    const stillCovering = official instanceof document2.defaultView.SVGElement && official.hasAttribute(COVER_ATTR);
    if (stillCovering) continue;
    branded.remove();
  }
}
function hidePreviewBadges(document2, restores) {
  const badges = /* @__PURE__ */ new Set();
  for (const text of PREVIEW_BADGE_TEXTS) {
    for (const el of document2.querySelectorAll("span,div")) {
      if (el.childElementCount === 0 && el.textContent?.trim() === text) badges.add(el);
    }
  }
  for (const badge of badges) {
    if (badge.hasAttribute(HIDE_ATTR2)) continue;
    badge.setAttribute(HIDE_ATTR2, "");
    restores.push(() => {
      badge.removeAttribute(HIDE_ATTR2);
    });
  }
}
function rewriteWelcomeCopy(document2, productName, restores) {
  const replacements = welcomeReplacements(productName);
  const walker = document2.createTreeWalker(document2.body ?? document2.documentElement, document2.defaultView.NodeFilter.SHOW_TEXT);
  const nodes = [];
  for (let node = walker.nextNode(); node !== null; node = walker.nextNode()) {
    if (node.parentElement?.closest(`[${BRAND_ATTR}]`) !== null) continue;
    if (typeof node.nodeValue === "string" && replacements.some(([from]) => node.nodeValue.includes(from))) {
      nodes.push(node);
    }
  }
  for (const node of nodes) {
    const original = node.nodeValue;
    let next = original;
    for (const [from, to] of replacements) next = next.split(from).join(to);
    if (next === original) continue;
    node.nodeValue = next;
    restores.push(() => {
      node.nodeValue = original;
    });
  }
}
function welcomeReplacements(productName) {
  return [
    ["DeepSeek Harness", productName],
    ["DSH \u63D2\u4EF6\u751F\u6001", `${productName} \u63D2\u4EF6\u751F\u6001`],
    ["DSH plugin ecosystem", `${productName} plugin ecosystem`]
  ];
}
function officialSvgs(document2, viewBox) {
  return [...document2.querySelectorAll("svg")].filter((svg) => svg.getAttribute("viewBox") === viewBox && !svg.hasAttribute(BRAND_ATTR) && !svg.hasAttribute(COVER_ATTR) && svg.closest(`[${BRAND_ATTR}]`) === null);
}
function coverOfficial(official, branded, restores) {
  replaceInPlace(official, branded, restores);
}
function createWordmark(document2, config) {
  const wrap = document2.createElement("span");
  wrap.setAttribute(BRAND_ATTR, "wordmark");
  wrap.setAttribute("aria-hidden", "true");
  wrap.style.cssText = "display:inline-flex;align-items:center;gap:8px;height:24px;color:inherit;min-width:0";
  const mark = parseSvg(document2, config.logoSvg);
  mark.setAttribute("width", "24");
  mark.setAttribute("height", "24");
  mark.style.flex = "none";
  wrap.append(mark, createWordmarkLabel(document2, config, false));
  return wrap;
}
function createWordmarkLabel(document2, config, ownAttr = true) {
  const label = document2.createElement("span");
  if (ownAttr) label.setAttribute(BRAND_ATTR, "wordmark");
  label.setAttribute("aria-hidden", "true");
  label.textContent = config.wordmarkText;
  label.style.cssText = "font-size:15px;font-weight:600;letter-spacing:-0.02em;line-height:24px;white-space:nowrap;display:inline-flex;align-items:center;gap:6px";
  const isDev = typeof window !== "undefined" && (window.__OMNIMUX_BRAND__ && String(window.__OMNIMUX_BRAND__.wordmarkText).includes("Dev")) || typeof process !== "undefined" && process.env?.OMNIMUX_CHANNEL === "dev";
  if (isDev && !config.wordmarkText.includes("DEV")) {
    const badge = document2.createElement("span");
    badge.textContent = "DEV";
    badge.style.cssText = "font-size:10px;font-weight:700;line-height:1;padding:2px 4px;border-radius:4px;background:#F59E0B;color:#000;vertical-align:middle;display:inline-block";
    label.append(badge);
  }
  return label;
}
function createMark(document2, logoSvg, official) {
  const mark = parseSvg(document2, logoSvg);
  mark.setAttribute(BRAND_ATTR, "fish");
  const width = official.getAttribute("width");
  const height = official.getAttribute("height");
  const className = official.getAttribute("class");
  if (width !== null) mark.setAttribute("width", width);
  if (height !== null) mark.setAttribute("height", height);
  if (className !== null) mark.setAttribute("class", className);
  mark.setAttribute("aria-hidden", "true");
  return mark;
}
function parseSvg(document2, markup) {
  const parsed = new document2.defaultView.DOMParser().parseFromString(markup, "image/svg+xml");
  const svg = parsed.documentElement;
  if (svg.localName !== "svg") {
    throw new Error("omnimux: logoSvg did not parse as an SVG document");
  }
  return document2.importNode(svg, true);
}
function svgDataUri(logoSvg) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(logoSvg)}`;
}

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
var ACTIVE_STAGE_STORAGE_KEY = "omnimux_active_product_stage";
function claimProductStage(id) {
  try {
    if (id) window.localStorage.setItem(ACTIVE_STAGE_STORAGE_KEY, id);
  } catch {
  }
  window.dispatchEvent(new CustomEvent(PRODUCT_STAGE_EVENT, { detail: { id } }));
  document.documentElement.dataset.dshProductStage = id;
  ensureProductStageChrome();
}
function releaseProductStage(id) {
  if (document.documentElement.dataset.dshProductStage === id) {
    delete document.documentElement.dataset.dshProductStage;
  }
  try {
    const current = window.localStorage.getItem(ACTIVE_STAGE_STORAGE_KEY);
    if (current === id) window.localStorage.removeItem(ACTIVE_STAGE_STORAGE_KEY);
  } catch {
  }
}
var PRODUCT_STAGE_CHROME = `
[data-slot="shell.overlay"]{pointer-events:none!important;}
html:not([data-dsh-product-stage]) [class*="toggleCluster"],
html:not([data-dsh-product-stage]) [class*="toggleCluster"] *{pointer-events:auto!important;z-index:300!important;}
html[data-dsh-product-stage] [class*="toggleCluster"]{display:none!important;}
html[data-dsh-product-stage] [data-dsh-panel-host]{display:none!important;}
html[data-dsh-product-stage]{--dsh-sidebar-width:0px!important;--dsh-sidebar-height:0px!important;}
html[data-dsh-product-stage] #dsh-window-drag{-webkit-app-region:no-drag!important;pointer-events:none!important;}
html[data-dsh-product-stage] header{-webkit-app-region:no-drag!important;}
html[data-dsh-product-stage] [data-slot="conversation.session.header"],
html[data-dsh-product-stage] [data-slot="conversation"] > header {display:none!important;}
html[data-dsh-product-stage] [role="treeitem"][aria-selected="true"]{background:transparent!important;}
html[data-dsh-product-stage] .dshDesktopConversationSurface > *:not([data-slot="shell.overlay"]),
html[data-dsh-product-stage] [data-slot="conversation.content"],
html[data-dsh-product-stage] [data-slot="input.trigger"] {visibility:hidden!important;}
`;
function ensureProductStageChrome() {
  const existing = document.getElementById("dsh-product-stage-chrome");
  if (existing instanceof HTMLStyleElement) {
    if (!existing.textContent?.includes("data-dsh-panel-host")) existing.textContent = PRODUCT_STAGE_CHROME;
  } else {
    const style = document.createElement("style");
    style.id = "dsh-product-stage-chrome";
    style.textContent = PRODUCT_STAGE_CHROME;
    document.head.append(style);
  }
  watchSelectedSessionClick();
}
function leaveProductStage() {
  if (!document.documentElement.dataset.dshProductStage) return;
  delete document.documentElement.dataset.dshProductStage;
  try {
    window.localStorage.removeItem(ACTIVE_STAGE_STORAGE_KEY);
  } catch {
  }
  window.dispatchEvent(new CustomEvent(PRODUCT_STAGE_EVENT, { detail: { id: "" } }));
}
function sessionRowPlainClick(target) {
  const row = target.closest('[role="treeitem"]');
  if (!(row instanceof HTMLElement)) return false;
  if (target.closest("button") !== null) return false;
  return true;
}
function workspaceNewSessionButton(target) {
  const button = target.closest("button");
  if (!(button instanceof HTMLElement)) return false;
  if (!button.closest('[role="treeitem"]')) return false;
  return /新建会话|New session/i.test(button.getAttribute("aria-label") || "");
}
function newSessionMenuPick(target) {
  const item = target.closest('#omnimux-sidebar-new-menu [role="menuitem"]');
  if (!(item instanceof HTMLElement)) return false;
  return /新会话|新建会话|new session/i.test(item.textContent || "");
}
function shellNewSessionControl(target) {
  const button = target.closest("button");
  if (!(button instanceof HTMLElement)) return false;
  if (button.closest("#omnimux-sidebar-new-menu")) return false;
  if (button.closest('[role="treeitem"]')) return false;
  if (String(button.className).includes("newSession")) return true;
  const aria = (button.getAttribute("aria-label") || "").trim();
  return /^(新建会话|新会话|New session)$/i.test(aria);
}
function watchSelectedSessionClick() {
  if (document.documentElement.dataset.dshSessionCloser === "1") return;
  document.documentElement.dataset.dshSessionCloser = "1";
  document.addEventListener("click", (event) => {
    if (!document.documentElement.dataset.dshProductStage) return;
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (sessionRowPlainClick(target) || workspaceNewSessionButton(target) || newSessionMenuPick(target)) {
      leaveProductStage();
    }
  }, true);
  document.addEventListener("click", (event) => {
    if (!document.documentElement.dataset.dshProductStage) return;
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (shellNewSessionControl(target)) leaveProductStage();
  });
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

// src/client/stage.js
var STAGE_GLOBAL_KEY = "__omnimuxStage";
function installStageGlobal(target = window) {
  const existing = target[STAGE_GLOBAL_KEY];
  if (existing !== void 0) return existing;
  const api = {
    claim: claimProductStage,
    release: releaseProductStage,
    PRODUCT_STAGE_EVENT,
    readBox: readConversationBox
  };
  target[STAGE_GLOBAL_KEY] = api;
  return api;
}
installStageGlobal();

// src/client/sidebar-coordinator.js
var SIDEBAR_GLOBAL_KEY = "__omnimuxSidebar";
var SIDEBAR_GLOBAL = () => typeof window !== "undefined" ? window[SIDEBAR_GLOBAL_KEY] : void 0;
var ROWS = [];
var INLINE_ROWS = [];
var seen = /* @__PURE__ */ new Set();
var INLINE_STYLES = `
.omnimux-sidebar-inline-row {
  display: flex; align-items: stretch; gap: 8px;
  margin: 0 2px 8px;
}
.omnimux-sidebar-inline-row > .omnimux-sidebar-inline-btn {
  flex: 1 1 0; min-width: 0;
}
.omnimux-sidebar-inline-row > .omnimux-sidebar-inline-new-session {
  flex: 1 1 0; min-width: 0; margin: 0;
}
/* \u6536\u8D77\u8F68 56px\u3001\u5B98\u65B9\u52A0\u53F7 36px\u3002\u5E76\u6392\u7B2C\u4E8C\u9897\u4F1A\u6324\u7206\uFF0C\u6539\u6210\u4E00\u4EFD\u52A0\u53F7 + \u83DC\u5355\u3002
   display:contents \u628A wrapper \u62C6\u6389\uFF0C\u597D\u8BA9\u5B98\u65B9 .collapsed .newSession \u5F53\u5217\u7684\u76F4\u63A5\u5B50\u3002
   \u4F46\u4E0D\u80FD\u628A\u5C55\u5F00\u65F6\u7684 flex:1 \u4E00\u8D77\u5E26\u8FDB\u7AD6\u5217 \u2014\u2014 \u5426\u5219\u52A0\u53F7\u4F1A\u5403\u6389 regionArea \u7684\u9AD8\u5EA6\uFF0C
   \u53D8\u6210\u622A\u56FE\u90A3\u79CD\u7AD6\u6761\u3002 */
[data-sidebar-collapsed] .omnimux-sidebar-inline-row {
  display: contents;
}
[data-sidebar-collapsed] .omnimux-sidebar-inline-btn {
  display: none !important;
}
[data-sidebar-collapsed] .omnimux-sidebar-inline-row > .omnimux-sidebar-inline-new-session {
  flex: none;
  align-self: flex-start;
  width: 36px;
  height: 36px;
  min-width: 36px;
  min-height: 36px;
  padding: 0;
  margin: 0 0 12px;
}
.omnimux-sidebar-new-menu {
  position: fixed; z-index: 400; min-width: 168px; padding: 6px;
  border: 1px solid var(--dsw-alias-border-l2, rgba(128,128,128,.28));
  border-radius: 10px;
  /* DSH \u6CA1\u6709 bg-elevated/bg-primary\uFF1B\u83DC\u5355\u6302 body\uFF0C\u5FC5\u987B\u7528\u73B0\u7F51 layer token\u3002 */
  background: var(--dsw-alias-bg-layer-2, var(--dsw-alias-bg-base, #232324));
  box-shadow: 0 8px 24px rgba(0,0,0,.16);
  color: var(--dsw-alias-label-primary, inherit);
}
.omnimux-sidebar-new-menu[hidden] { display: none !important; }
.omnimux-sidebar-new-menu button {
  display: block; width: 100%; box-sizing: border-box;
  margin: 0; padding: 8px 10px; border: 0; border-radius: 8px;
  background: transparent; color: inherit; cursor: pointer;
  font: var(--dsw-font-s-14, 14px/20px system-ui); text-align: left;
}
.omnimux-sidebar-new-menu button:hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,.12));
}
`;
function sidebarRoot() {
  const column = document.querySelector('[data-pane="sidebar"], [class*="sidebarCol"]');
  if (!(column instanceof HTMLElement)) return void 0;
  const logoOwner = column.querySelector('[class*="logoRow"]')?.parentElement;
  return logoOwner ?? (column.firstElementChild instanceof HTMLElement ? column.firstElementChild : void 0);
}
function railCollapsed() {
  return Boolean(document.querySelector("[data-sidebar-collapsed]"));
}
function sessionLabel(button) {
  const raw = button?.getAttribute?.("aria-label") || button?.textContent || "";
  const text = String(raw).trim();
  if (/new session/i.test(text)) return "New Session";
  return "\u65B0\u5EFA\u4F1A\u8BDD";
}
function projectLabel(button) {
  const raw = button?.getAttribute?.("aria-label") || button?.textContent || "";
  const text = String(raw).trim();
  if (/new project/i.test(text)) return "New Project";
  if (text) return text;
  return "\u65B0\u5EFA\u9879\u76EE";
}
var skipNextCollapsedClick = false;
var menuDocCleanup;
function closeNewMenu() {
  menuDocCleanup?.();
  menuDocCleanup = void 0;
  document.getElementById("omnimux-sidebar-new-menu")?.remove();
}
function openNewMenu(anchor, sessionBtn, projectBtn) {
  closeNewMenu();
  const menu = document.createElement("div");
  menu.id = "omnimux-sidebar-new-menu";
  menu.className = "omnimux-sidebar-new-menu";
  menu.setAttribute("role", "menu");
  const sessionItem = document.createElement("button");
  sessionItem.type = "button";
  sessionItem.setAttribute("role", "menuitem");
  sessionItem.textContent = sessionLabel(sessionBtn);
  sessionItem.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    closeNewMenu();
    skipNextCollapsedClick = true;
    sessionBtn.click();
  });
  const projectItem = document.createElement("button");
  projectItem.type = "button";
  projectItem.setAttribute("role", "menuitem");
  projectItem.textContent = projectLabel(projectBtn);
  projectItem.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    closeNewMenu();
    projectBtn.click();
  });
  menu.append(sessionItem, projectItem);
  document.body.append(menu);
  const rect = anchor.getBoundingClientRect();
  const left = Math.min(rect.right + 8, Math.max(8, window.innerWidth - 180));
  const top = Math.min(rect.top, Math.max(8, window.innerHeight - 96));
  menu.style.left = `${left}px`;
  menu.style.top = `${top}px`;
  const onDoc = (event) => {
    if (menu.contains(event.target) || event.target === anchor) return;
    closeNewMenu();
  };
  const onKey = (event) => {
    if (event.key !== "Escape") return;
    closeNewMenu();
  };
  document.addEventListener("mousedown", onDoc, true);
  document.addEventListener("keydown", onKey, true);
  menuDocCleanup = () => {
    document.removeEventListener("mousedown", onDoc, true);
    document.removeEventListener("keydown", onKey, true);
  };
}
function onCollapsedNewSessionClick(event) {
  if (skipNextCollapsedClick) {
    skipNextCollapsedClick = false;
    return;
  }
  if (!railCollapsed()) return;
  const projectBtn = INLINE_ROWS[0]?.element;
  if (!(projectBtn instanceof HTMLElement)) return;
  event.preventDefault();
  event.stopPropagation();
  const sessionBtn = event.currentTarget;
  if (!(sessionBtn instanceof HTMLElement)) return;
  openNewMenu(sessionBtn, sessionBtn, projectBtn);
}
function bindCollapsedNewMenu(sessionBtn) {
  if (!(sessionBtn instanceof HTMLElement)) return;
  if (sessionBtn.dataset.omnimuxCollapsedMenu === "1") return;
  sessionBtn.dataset.omnimuxCollapsedMenu = "1";
  sessionBtn.addEventListener("click", onCollapsedNewSessionClick, true);
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
function externalAnchor(root) {
  return [...root.children].find(
    (el) => el instanceof HTMLElement && el.matches("[data-dsh-taskboard-entry], [data-dsh-atb-entry], [data-dsh-ssh-entry]")
  );
}
function injectStyles(styleText, styleId) {
  if (!styleText) return;
  if (document.getElementById(styleId)) return;
  const style = document.createElement("style");
  style.id = styleId;
  style.textContent = styleText;
  document.head.append(style);
}
var waitObserver;
var collapsedAttrObserver;
var collapsedHost;
var retry2;
function collapsedHostNode() {
  const column = document.querySelector('[data-pane="sidebar"], [class*="sidebarCol"]');
  if (column instanceof HTMLElement) {
    const marked2 = column.closest("[data-sidebar-collapsed]");
    if (marked2 instanceof HTMLElement) return marked2;
    if (column.parentElement instanceof HTMLElement) return column.parentElement;
    const slot2 = column.closest('[data-slot="root"]');
    if (slot2 instanceof HTMLElement) return slot2;
  }
  const marked = document.querySelector("[data-sidebar-collapsed]");
  if (marked instanceof HTMLElement) return marked;
  const slot = document.querySelector('[data-slot="root"]');
  if (slot instanceof HTMLElement) return slot;
  return void 0;
}
function bindCollapsedAttrObserver() {
  const host = collapsedHostNode();
  if (!(host instanceof HTMLElement)) return;
  if (host === collapsedHost) return;
  collapsedHost = host;
  collapsedAttrObserver?.disconnect();
  collapsedAttrObserver = new MutationObserver(() => {
    runPlaceAll();
  });
  const subtree = host.matches('[data-slot="root"]') && !host.hasAttribute("data-sidebar-collapsed");
  collapsedAttrObserver.observe(host, {
    attributes: true,
    attributeFilter: ["data-sidebar-collapsed"],
    subtree
  });
}
function runPlaceAll() {
  bindCollapsedAttrObserver();
  const root = sidebarRoot();
  if (root === void 0) return;
  placeBelow(root);
  placeInline(root);
  if (!railCollapsed()) closeNewMenu();
}
function placeBelow(root) {
  const sorted = [...ROWS].sort((a, b) => a.rank - b.rank);
  let anchor = newSessionButton(root);
  if (anchor === void 0) return;
  const inlineWrap = anchor.closest("[data-omnimux-inline-row]");
  if (inlineWrap instanceof HTMLElement && inlineWrap.parentElement === root) {
    anchor = inlineWrap;
  }
  let slotExternal = true;
  for (const row of sorted) {
    if (row.rank >= 3 && slotExternal) {
      const ext = externalAnchor(root);
      if (ext instanceof HTMLElement) anchor = ext;
      slotExternal = false;
    }
    const el = row.element;
    if (el.parentElement === root && el.previousElementSibling === anchor) {
      anchor = el;
      continue;
    }
    root.insertBefore(el, anchor.nextElementSibling ?? null);
    anchor = el;
  }
}
function placeInline(root) {
  if (INLINE_ROWS.length === 0) return;
  const anchor = newSessionButton(root);
  if (anchor === void 0) return;
  let wrapper = root.querySelector("[data-omnimux-inline-row]");
  if (!(wrapper instanceof HTMLElement)) {
    wrapper = document.createElement("div");
    wrapper.dataset.omnimuxInlineRow = "";
    wrapper.className = "omnimux-sidebar-inline-row";
    anchor.before(wrapper);
    wrapper.append(anchor);
    anchor.classList.add("omnimux-sidebar-inline-new-session");
  }
  let prev = anchor;
  for (const row of INLINE_ROWS) {
    const el = row.element;
    if (el.parentElement === wrapper && el.previousElementSibling === prev) {
      prev = el;
      continue;
    }
    wrapper.insertBefore(el, prev.nextElementSibling ?? null);
    prev = el;
  }
  bindCollapsedNewMenu(anchor);
}
function createApi() {
  return {
    register(row) {
      const id = row.id;
      if (seen.has(id)) return () => {
      };
      seen.add(id);
      if (row.styles) injectStyles(row.styles, row.styleId);
      const element = row.create();
      if (row.kind === "inline") {
        injectStyles(INLINE_STYLES, "omnimux-sidebar-inline-styles");
        element.classList.add("omnimux-sidebar-inline-btn");
        INLINE_ROWS.push({ id, element });
        runPlaceAll();
        return () => {
          const i = INLINE_ROWS.findIndex((r) => r.id === id);
          if (i >= 0) INLINE_ROWS.splice(i, 1);
          seen.delete(id);
          element.remove();
          runPlaceAll();
        };
      }
      ROWS.push({ id, rank: row.rank, element });
      runPlaceAll();
      return () => {
        const i = ROWS.findIndex((r) => r.id === id);
        if (i >= 0) ROWS.splice(i, 1);
        seen.delete(id);
        element.remove();
        runPlaceAll();
      };
    },
    place: runPlaceAll
  };
}
function install() {
  const existing = SIDEBAR_GLOBAL();
  if (existing) return existing;
  const api = createApi();
  waitObserver?.disconnect();
  collapsedAttrObserver?.disconnect();
  collapsedHost = void 0;
  waitObserver = new MutationObserver(() => {
    runPlaceAll();
  });
  waitObserver.observe(document.body, { childList: true, subtree: true });
  bindCollapsedAttrObserver();
  retry2 = setInterval(() => {
    runPlaceAll();
  }, 2e3);
  Object.defineProperty(window, SIDEBAR_GLOBAL_KEY, { value: api, configurable: true });
  return api;
}
function installSidebarGlobal() {
  install();
}

// src/client/chrome.js
function installHubChrome(ctx) {
  installStageGlobal();
  installSidebarGlobal();
  installAuthGlobal();
  ctx.effect(
    () => startOverlay(document, configFromWindow(window)),
    "omnimux: brand overlay"
  );
  ctx.effect(() => {
    ensureProductStageChrome();
    return () => {
    };
  }, "omnimux: product-stage chrome");
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), "omnimux: dictionaries");
  return ctx.locale.bind(NS);
}

// src/client/hero-brand.js
var HERO_BRAND_SLOT = "conversation.hero.brand.mark";
var HERO_BRAND_PRIORITY = -10;
var HERO_BRAND_ID = "omnimux-hero-brand-mark";
function heroMarkPresentation(size, className) {
  const px = typeof size === "number" ? size : Number(size);
  const edge = Number.isFinite(px) && px > 0 ? px : 34;
  return {
    width: edge,
    height: edge,
    className: typeof className === "string" && className !== "" ? className : void 0
  };
}
function parseLogoSvg(markup) {
  if (typeof markup !== "string" || !markup.includes("<svg")) {
    throw new Error("omnimux: hero mark logoSvg must contain an <svg> document");
  }
  const viewBox = /viewBox\s*=\s*"([^"]+)"/i.exec(markup)?.[1] ?? "0 0 32 32";
  const open = markup.search(/<svg\b/i);
  const innerStart = markup.indexOf(">", open) + 1;
  const close = markup.toLowerCase().lastIndexOf("</svg>");
  const inner = (close === -1 ? markup.slice(innerStart) : markup.slice(innerStart, close)).trim();
  return { viewBox, inner };
}
function resolveHeroLogoSvg(win) {
  const target = win ?? (typeof window === "undefined" ? void 0 : window);
  if (target) {
    const svg = configFromWindow(target).logoSvg;
    if (typeof svg === "string" && svg.includes("<svg")) return svg;
  }
  return DEFAULT_CONFIG.logoSvg ?? DEFAULT_LOGO_SVG;
}
function installHeroBrandSlot(ctx, component, config) {
  const replace = config?.replaceHeroMark ?? (typeof window === "undefined" ? DEFAULT_CONFIG.replaceHeroMark : configFromWindow(window).replaceHeroMark);
  if (!replace) return;
  if (typeof ctx?.slots?.inject !== "function" || typeof ctx.slots.register !== "function") return;
  ctx.slots.inject(HERO_BRAND_SLOT, () => ctx.slots.register({
    name: HERO_BRAND_SLOT,
    id: HERO_BRAND_ID,
    priority: HERO_BRAND_PRIORITY
  }, component));
}

// src/client/HeroBrandMark.jsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function HeroBrandMark({ size, className }) {
  const { width, height, className: cls } = heroMarkPresentation(size, className);
  const { viewBox, inner } = parseLogoSvg(resolveHeroLogoSvg());
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox,
      width,
      height,
      className: cls,
      "aria-hidden": "true",
      focusable: "false",
      "data-omnimux-hero-mark": "",
      dangerouslySetInnerHTML: { __html: inner }
    }
  );
}

// src/client/index.js
var name = "omnimux";
var inject = ["slots", "locale"];
function apply(ctx) {
  const t = installHubChrome(ctx);
  installHeroBrandSlot(ctx, HeroBrandMark);
  ctx.effect?.(() => {
    injectHubStyles();
    return () => {
      document.getElementById(STYLES_ID)?.remove();
    };
  }, "omnimux: hub client styles");
  ctx.slots.inject("settings.section", () => ctx.slots.register({
    name: "settings.section",
    id: "omnimux-profile",
    order: 5,
    label: () => t("profile.nav"),
    locale: NS,
    inject: () => ({ t })
  }, ProfileSection));
  ctx.slots.inject("settings.plugins.tab", () => ctx.slots.register({
    name: "settings.plugins.tab",
    id: "omnimux-dsh-plugins",
    order: 20,
    label: () => t("dshPlugins.nav"),
    locale: NS,
    inject: () => ({ t })
  }, DshPluginsSection));
  ctx.slots.inject("shell.overlay", () => ctx.slots.register({
    name: "shell.overlay",
    id: "omnimux-auth-gate",
    order: 30,
    locale: NS,
    inject: () => ({ t })
  }, LoginGate));
  ctx.slots.inject("sidebar.footer.action", () => ctx.slots.register({
    name: "sidebar.footer.action",
    id: "omnimux-desktop-updater",
    order: 10,
    locale: NS,
    inject: () => ({ t })
  }, SidebarUpdateAction));
}

    return module.exports;
  }
});
