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
  "profile.signedOut": "\u672A\u767B\u5F55\u3002",
  "profile.signedIn": "\u5DF2\u767B\u5F55",
  "profile.username": "\u7528\u6237\u540D",
  "profile.displayName": "\u663E\u793A\u540D",
  "profile.group": "\u5206\u7EC4",
  "profile.quota": "\u4F59\u989D",
  "profile.used": "\u5DF2\u7528",
  "profile.site": "\u7AD9\u70B9",
  "profile.logout": "\u9000\u51FA\u767B\u5F55",
  "profile.topUp": "\u53BB\u5145\u503C",
  "profile.loading": "\u6B63\u5728\u8BFB\u53D6\u2026",
  "avatar.title": "\u5934\u50CF",
  "avatar.reroll": "\u6362\u4E00\u4E2A",
  "avatar.hue": "\u989C\u8272",
  "avatar.reset": "\u6062\u590D\u9ED8\u8BA4",
  "avatar.error": "\u5934\u50CF\u52A0\u8F7D\u5931\u8D25",
  "avatar.edit": "\u7F16\u8F91",
  "avatar.upload": "\u4E0A\u4F20\u56FE\u7247",
  "avatar.uploadHint": "PNG / JPEG / WebP / GIF\uFF0C\u4E0D\u8D85\u8FC7 200KB",
  "avatar.close": "\u5173\u95ED",
  "quota.hint": "\u4F59\u989D\u4E0D\u8DB3\uFF0C\u5145\u503C\u540E\u5373\u53EF\u7EE7\u7EED\u3002",
  "quota.topUp": "\u53BB\u5145\u503C",
  "plugins.nav": "\u5E94\u7528",
  "plugins.title": "\u5E94\u7528",
  "plugins.needLogin": "\u67E5\u770B\u5DF2\u53D1\u5E03\u7684\u5E94\u7528\u9700\u8981\u767B\u5F55 OmniMux\u3002",
  "plugins.login": "\u767B\u5F55",
  "plugins.waiting": "\u8BF7\u5728\u6253\u5F00\u7684\u9875\u9762\u786E\u8BA4\u767B\u5F55\u3002",
  "plugins.code": "\u8BBE\u5907\u7801",
  "plugins.open": "\u6253\u5F00\u786E\u8BA4\u9875",
  "plugins.empty": "\u8FD8\u6CA1\u6709\u5DF2\u53D1\u5E03\u7684\u5E94\u7528\u3002",
  "plugins.emptySearch": "\u6CA1\u6709\u5339\u914D\u7684\u5E94\u7528\u3002",
  "plugins.search": "\u641C\u7D22\u540D\u79F0\u6216\u63CF\u8FF0",
  "plugins.install": "\u5B89\u88C5",
  "plugins.update": "\u66F4\u65B0",
  "plugins.remove": "\u5378\u8F7D",
  "plugins.openApp": "\u6253\u5F00",
  "plugins.cancel": "\u53D6\u6D88",
  "plugins.confirmInstall": "\u662F\u5426\u5B89\u88C5\u300C{title}\u300D\uFF1F",
  "plugins.confirmRemove": "\u5378\u8F7D\u300C{title}\u300D\uFF1F\u5DE6\u4FA7 tab \u8BB0\u5F55\u5C06\u4E00\u5E76\u79FB\u9664\u3002",
  "plugins.needRestart": "\u91CD\u542F\u540E\u53EF\u7528\u3002",
  "plugins.tab.remove": "\u5220\u9664\u8BB0\u5F55",
  "plugins.tab.pin": "\u56FA\u5B9A",
  "plugins.tab.unpin": "\u53D6\u6D88\u56FA\u5B9A",
  "plugins.tab.top": "\u7F6E\u9876",
  "plugins.installed": "\u5DF2\u5B89\u88C5\u3002\u91CD\u542F Host \u540E\u6253\u5F00\u5E94\u7528\u3002",
  "plugins.installedShort": "\u5DF2\u5B89\u88C5",
  "plugins.available": "\u672A\u5B89\u88C5",
  "plugins.cap.identity": "\u8EAB\u4EFD",
  "plugins.cap.videoGenerate": "\u89C6\u9891\u751F\u6210",
  "plugins.cap.imageGenerate": "\u56FE\u50CF\u751F\u6210",
  "plugins.cap.textComplete": "\u4E13\u5BB6\u8865\u5168",
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
  "plugins.detail.openFailed": "\u5E94\u7528\u9875\u9762\u672A\u54CD\u5E94\u3002\u5B89\u88C5\u540E\u9700\u8981\u91CD\u542F Host \u624D\u80FD\u6253\u5F00\u3002",
  "plugins.state.installed": "\u5DF2\u5B89\u88C5",
  "plugins.state.available": "\u672A\u5B89\u88C5",
  "plugins.state.update": "\u6709\u66F4\u65B0",
  "dshPlugins.nav": "DSH \u63D2\u4EF6",
  "dshPlugins.title": "DSH \u63D2\u4EF6",
  "dshPlugins.readonlyHint": "\u5F53\u524D omnimux profile \u5DF2\u5B89\u88C5\u7684 bundle \u53EA\u8BFB\u6E05\u5355\u3002\u5B89\u88C5\u4E0E\u5378\u8F7D\u8BF7\u5728\u300C\u5E94\u7528\u300D\u9875\u7684\u5361\u7247\u4E0A\u64CD\u4F5C\u3002",
  "dshPlugins.protected": "\u4E0D\u53EF\u5378\u8F7D",
  "dshPlugins.restart": "\u91CD\u542F\u4EE5\u4F7F\u63D2\u4EF6\u751F\u6548",
  "dshPlugins.desktopOnly": "\u5728 OmniMux \u684C\u9762\u91CC\u624D\u80FD\u7BA1\u7406 DSH \u63D2\u4EF6\u3002",
  "dshPlugins.needDesktop": "\u9700\u8981\u684C\u9762\u58F3\u624D\u80FD\u91CD\u542F Host\u3002"
};
var en = {
  "profile.nav": "Profile",
  "profile.title": "Profile",
  "profile.signedOut": "Not signed in.",
  "profile.signedIn": "Signed in",
  "profile.username": "Username",
  "profile.displayName": "Display name",
  "profile.group": "Group",
  "profile.quota": "Balance",
  "profile.used": "Used",
  "profile.site": "Site",
  "profile.logout": "Sign out",
  "profile.topUp": "Top up",
  "profile.loading": "Loading\u2026",
  "avatar.title": "Avatar",
  "avatar.reroll": "Re-roll",
  "avatar.hue": "Colour",
  "avatar.reset": "Reset to default",
  "avatar.error": "Failed to load avatar",
  "avatar.edit": "Edit",
  "avatar.upload": "Upload image",
  "avatar.uploadHint": "PNG / JPEG / WebP / GIF, up to 200KB",
  "avatar.close": "Close",
  "quota.hint": "Balance is too low. Top up to continue.",
  "quota.topUp": "Top up",
  "plugins.nav": "Apps",
  "plugins.title": "Apps",
  "plugins.needLogin": "Sign in to OmniMux to see apps you published.",
  "plugins.login": "Sign in",
  "plugins.waiting": "Confirm the login in the opened page.",
  "plugins.code": "Device code",
  "plugins.open": "Open confirmation page",
  "plugins.empty": "No published apps yet.",
  "plugins.emptySearch": "No matching apps.",
  "plugins.search": "Search by name or description",
  "plugins.install": "Install",
  "plugins.update": "Update",
  "plugins.remove": "Remove",
  "plugins.openApp": "Open",
  "plugins.cancel": "Cancel",
  "plugins.confirmInstall": 'Install "{title}"?',
  "plugins.confirmRemove": 'Remove "{title}"? Its sidebar tab record will be removed too.',
  "plugins.needRestart": "Available after a Host restart.",
  "plugins.tab.remove": "Remove tab record",
  "plugins.tab.pin": "Pin",
  "plugins.tab.unpin": "Unpin",
  "plugins.tab.top": "Move to top",
  "plugins.installed": "Installed. Restart the Host to open the app.",
  "plugins.installedShort": "Installed",
  "plugins.available": "Available",
  "plugins.cap.identity": "Identity",
  "plugins.cap.videoGenerate": "Video generate",
  "plugins.cap.imageGenerate": "Image generate",
  "plugins.cap.textComplete": "Expert complete",
  "plugins.cap.official": "Official social APIs",
  "plugins.denied": "Sign-in was denied.",
  "plugins.expired": "Sign-in expired. Try again.",
  "plugins.error": "Sign-in failed.",
  "plugins.close": "Close apps",
  "plugins.more": "More actions",
  "plugins.back": "Back",
  "plugins.detail.package": "Package",
  "plugins.detail.version": "Version",
  "plugins.detail.source": "Source",
  "plugins.detail.state": "State",
  "plugins.detail.bundled": "Bundled",
  "plugins.detail.kind.official": "Official app",
  "plugins.detail.loginHint": "Sign in to OmniMux before opening this app.",
  "plugins.detail.login": "Sign in",
  "plugins.detail.waiting": "Confirm the login in the opened page.",
  "plugins.detail.openFailed": "The app page did not respond. Restart the Host after installing.",
  "plugins.state.installed": "Installed",
  "plugins.state.available": "Not installed",
  "plugins.state.update": "Update available",
  "dshPlugins.nav": "DSH plugins",
  "dshPlugins.title": "DSH plugins",
  "dshPlugins.readonlyHint": "Read-only inventory of the bundles installed in this omnimux profile. Install and remove from the cards on the Apps page.",
  "dshPlugins.protected": "required",
  "dshPlugins.restart": "Restart to apply plugins",
  "dshPlugins.desktopOnly": "Manage DSH plugins from the OmniMux desktop app.",
  "dshPlugins.needDesktop": "The desktop shell is required to restart the Host."
};
var NS = "omnimux";

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
    const row2 = target.closest('[role="treeitem"][aria-selected="true"]');
    if (!(row2 instanceof HTMLElement)) return;
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

// src/client/apps-store.js
var STAGE_ID = "omnimux-apps";
function createAppsStore() {
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

// src/client/ProfileSection.jsx
var import_react2 = require("react");
var import_react_dom = require("react-dom");

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
var import_react = require("react");

// src/client/api.js
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
  const row2 = raw && typeof raw === "object" ? (
    /** @type {Record<string, unknown>} */
    raw
  ) : {};
  const out = {};
  for (const key of PUBLIC_KEYS) {
    if (key in row2) out[key] = row2[key];
  }
  return out;
}
async function authRequest(path, opts = {}) {
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
      body: { error: response.status === 404 ? "auth routes not mounted" : `unexpected ${contentType || "response"}` }
    };
  }
  let json = null;
  try {
    json = await response.json();
  } catch {
    json = {};
  }
  const body = pickPublic(json);
  if (typeof JSON.stringify(body) === "string" && /access_token|"sk-/.test(JSON.stringify(body))) {
    throw new Error("refused a secret-bearing auth payload");
  }
  return { ok: response.ok, status: response.status, body };
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
var APP_KEYS = [
  "schema",
  "source",
  "stale",
  "fetched_at",
  "refresh",
  "error",
  "apps"
];
var APP_ROW_KEYS = [
  "id",
  "title",
  "summary",
  "kind",
  "capabilities",
  "client",
  "spec",
  "state",
  "install_spec"
];
function pickAppsView(raw) {
  const row2 = raw && typeof raw === "object" ? (
    /** @type {Record<string, unknown>} */
    raw
  ) : {};
  const out = {};
  for (const key of APP_KEYS) {
    if (key in row2) out[key] = row2[key];
  }
  if (Array.isArray(out.apps)) {
    out.apps = out.apps.map((item) => {
      const app = item && typeof item === "object" ? (
        /** @type {Record<string, unknown>} */
        item
      ) : {};
      const next = {};
      for (const key of APP_ROW_KEYS) {
        if (key in app) next[key] = app[key];
      }
      return next;
    });
  }
  return out;
}
async function appsRequest(path, opts = {}) {
  const response = await fetch(path, { method: opts.method ?? "GET" });
  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("json")) {
    return {
      ok: false,
      status: response.status,
      body: { error: response.status === 404 ? "apps routes not mounted" : `unexpected ${contentType || "response"}` }
    };
  }
  let json = null;
  try {
    json = await response.json();
  } catch {
    json = {};
  }
  return { ok: response.ok, status: response.status, body: pickAppsView(json) };
}
function getApps() {
  return appsRequest("/omnimux/apps");
}
var TABS_KEYS = [
  "schema",
  "tabs",
  "error"
];
var TAB_ROW_KEYS = [
  "id",
  "title",
  "pinned",
  "lastOpenedAt"
];
function pickTabsView(raw) {
  const row2 = raw && typeof raw === "object" ? (
    /** @type {Record<string, unknown>} */
    raw
  ) : {};
  const out = {};
  for (const key of TABS_KEYS) {
    if (key in row2) out[key] = row2[key];
  }
  if (Array.isArray(out.tabs)) {
    out.tabs = out.tabs.map((item) => {
      const tab = item && typeof item === "object" ? (
        /** @type {Record<string, unknown>} */
        item
      ) : {};
      const next = {};
      for (const key of TAB_ROW_KEYS) {
        if (key in tab) next[key] = tab[key];
      }
      return next;
    });
  }
  return out;
}
async function tabsRequest(path, opts = {}) {
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
  return { ok: response.ok, status: response.status, body: pickTabsView(json) };
}
function getAppTabs() {
  return tabsRequest("/omnimux/apps/tabs");
}
function upsertAppTab(id) {
  return tabsRequest(`/omnimux/apps/tabs/${encodeURIComponent(id)}`, { method: "POST" });
}
function patchAppTab(id, body) {
  return tabsRequest(`/omnimux/apps/tabs/${encodeURIComponent(id)}`, { method: "PATCH", body });
}
function removeAppTab(id) {
  return tabsRequest(`/omnimux/apps/tabs/${encodeURIComponent(id)}`, { method: "DELETE" });
}
async function installApp(spec) {
  const response = await fetch("/omnimux/plugins", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ spec })
  });
  let json = {};
  try {
    json = await response.json();
  } catch {
    json = { error: `HTTP ${String(response.status)}` };
  }
  return { ok: response.ok, status: response.status, body: json };
}
async function uninstallApp(name2) {
  const response = await fetch(`/omnimux/plugins/${encodeURIComponent(name2)}`, { method: "DELETE" });
  let json = {};
  try {
    json = await response.json();
  } catch {
    json = { error: `HTTP ${String(response.status)}` };
  }
  return { ok: response.ok, status: response.status, body: json };
}

// src/client/use-omnimux-auth.js
function openAuthUrl(url) {
  if (typeof url === "string" && url) window.open(url, "_blank", "noopener,noreferrer");
}
function useOmnimuxAuth(opts = {}) {
  const verifyOnMount = opts.verifyOnMount === true;
  const [state, setState] = (0, import_react.useState)({ phase: "checking" });
  (0, import_react.useEffect)(() => {
    let cancelled = false;
    getStatus(verifyOnMount).then((result) => {
      if (cancelled) return;
      if (result.body.logged_in) setState({ phase: "ready", profile: result.body });
      else setState({ phase: "need-login" });
    }).catch(() => {
      if (!cancelled) setState({ phase: "need-login" });
    });
    return () => {
      cancelled = true;
    };
  }, [verifyOnMount]);
  (0, import_react.useEffect)(() => {
    if (state.phase !== "waiting" || !state.flow_id) return void 0;
    let cancelled = false;
    const delay = Math.max(1, Number(state.interval) || 5) * 1e3;
    const timer = window.setInterval(() => {
      pollLogin(state.flow_id).then((result) => {
        if (cancelled) return;
        if (result.body.logged_in) {
          setState({ phase: "ready", profile: result.body });
          return;
        }
        if (result.body.kind === "pending" || result.body.kind === "slow_down") {
          if (result.body.interval) setState((current) => ({ ...current, interval: result.body.interval }));
          return;
        }
        if (result.status === 403 || result.body.kind === "denied") setState({ phase: "denied" });
        else if (result.status === 410 || result.body.kind === "expired") setState({ phase: "expired" });
        else setState({ phase: "error", detail: result.body.error || `HTTP ${result.status}` });
      }).catch((error) => {
        if (!cancelled) setState({ phase: "error", detail: error instanceof Error ? error.message : "poll failed" });
      });
    }, delay);
    return () => {
      cancelled = true;
      window.clearInterval(timer);
    };
  }, [state.phase, state.flow_id, state.interval]);
  async function beginLogin() {
    setState({ phase: "starting" });
    try {
      const started = await startLogin();
      if (!started.ok || typeof started.body.flow_id !== "string" || !started.body.flow_id) {
        setState({ phase: "error", detail: started.body.error || `HTTP ${started.status}` });
        return;
      }
      openAuthUrl(started.body.verification_url);
      setState({
        phase: "waiting",
        flow_id: started.body.flow_id,
        user_code: started.body.user_code,
        verification_url: started.body.verification_url,
        interval: started.body.interval
      });
    } catch (error) {
      setState({ phase: "error", detail: error instanceof Error ? error.message : "login failed" });
    }
  }
  function signOut() {
    return logout().then(() => {
      setState({ phase: "need-login" });
    });
  }
  return { state, beginLogin, signOut, openUrl: openAuthUrl };
}

// src/client/avatar-api.js
var AVATAR_KEYS = ["uri", "name", "opts", "using_default"];
var AVATAR_OPTS_KEYS = ["seed", "hue", "tone", "background"];
function pickAvatar(raw) {
  const row2 = raw && typeof raw === "object" ? (
    /** @type {Record<string, unknown>} */
    raw
  ) : {};
  const avatar = row2.avatar && typeof row2.avatar === "object" ? (
    /** @type {Record<string, unknown>} */
    row2.avatar
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
  if (typeof row2.error === "string") out.error = row2.error;
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

// src/client/ProfileSection.jsx
var import_jsx_runtime = require("react/jsx-runtime");
var HUES = [12, 90, 150, 210, 280, 320];
var tokens = {
  text: "var(--dsw-text-primary, inherit)",
  textSecondary: "var(--dsw-text-secondary, rgba(127,127,127,.9))",
  border: "var(--dsw-border, rgba(127,127,127,.35))",
  card: "var(--dsw-alias-bg-primary, rgba(127,127,127,.08))",
  hover: "var(--dsw-alias-interactive-bg-hover, rgba(127,127,127,.14))",
  primaryFill: "var(--dsw-alias-button-primary-fill, #3b82f6)",
  primaryHover: "var(--dsw-alias-button-primary-hover, #2f6fed)",
  primaryLabel: "var(--dsw-alias-label-primary-inverted, #fff)",
  error: "var(--dsw-alias-label-error, #e5534b)",
  success: "var(--dsw-alias-label-accent, #3fb950)"
};
var page = {
  padding: "20px",
  color: tokens.text,
  display: "flex",
  flexDirection: "column",
  gap: 14,
  maxWidth: 520
};
var card = {
  background: tokens.card,
  border: `1px solid ${tokens.border}`,
  borderRadius: 10,
  padding: "14px 16px"
};
var label = { fontSize: 13, color: tokens.textSecondary };
var value = { fontSize: 13, color: tokens.text, wordBreak: "break-all", textAlign: "right" };
var hoverStyles = `
.omx-profile .omx-btn { transition: background .15s ease, border-color .15s ease, color .15s ease; font-size: 13px; padding: 6px 14px; border-radius: 6px; cursor: pointer; }
.omx-profile .omx-btn-primary { background: ${tokens.primaryFill}; color: ${tokens.primaryLabel}; border: 1px solid transparent; }
.omx-profile .omx-btn-primary:hover { background: ${tokens.primaryHover}; }
.omx-profile .omx-btn-ghost { background: transparent; color: ${tokens.textSecondary}; border: 1px solid ${tokens.border}; }
.omx-profile .omx-btn-ghost:hover { color: ${tokens.text}; background: ${tokens.hover}; }
.omx-profile .omx-btn-danger:hover { color: ${tokens.error}; border-color: ${tokens.error}; background: transparent; }
.omx-avatar { position: relative; cursor: pointer; flex: 0 0 auto; }
.omx-avatar-edit { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; border-radius: 50%; background: rgba(0,0,0,.55); color: #fff; font-size: 11px; opacity: 0; transition: opacity .15s ease; pointer-events: none; }
.omx-avatar:hover .omx-avatar-edit { opacity: 1; }
`;
function money(value2) {
  return typeof value2 === "number" ? `$${value2.toFixed(2)}` : "\u2014";
}
function DetailRow({ name: name2, children, last }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    gap: 16,
    padding: "9px 0",
    borderBottom: last ? "none" : `1px solid ${tokens.border}`
  }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: label, children: name2 }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: value, children })
  ] });
}
function AvatarFace({ uri, initial, size = 44 }) {
  const inner = uri ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "img",
    {
      src: uri,
      width: size,
      height: size,
      alt: "",
      style: { width: size, height: size, borderRadius: "50%", display: "block" }
    }
  ) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
    width: size,
    height: size,
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: size > 60 ? 28 : 18,
    fontWeight: 600,
    background: tokens.primaryFill,
    color: tokens.primaryLabel
  }, children: initial });
  return inner;
}
function EditableAvatar({ t, uri, initial, onOpen }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "omx-avatar", onClick: onOpen, title: t("avatar.edit"), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFace, { uri, initial }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "omx-avatar-edit", children: t("avatar.edit") })
  ] });
}
function AvatarModal({ t, avatar, initial, busy, error, onApply, onClose }) {
  const fileRef = (0, import_react2.useRef)(null);
  const activeHue = typeof avatar?.opts?.hue === "number" ? avatar.opts.hue : null;
  (0, import_react2.useEffect)(() => {
    function onKey(event) {
      if (event.key !== "Escape") return;
      event.stopPropagation();
      onClose();
    }
    document.addEventListener("keydown", onKey, true);
    return () => document.removeEventListener("keydown", onKey, true);
  }, [onClose]);
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
  return (0, import_react_dom.createPortal)(
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "div",
      {
        onClick: onClose,
        style: {
          position: "fixed",
          inset: 0,
          zIndex: 1100,
          background: "rgba(0,0,0,.45)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 20
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "div",
          {
            onClick: (event) => event.stopPropagation(),
            style: {
              ...card,
              background: "var(--dsw-alias-bg-secondary, #1f2128)",
              border: `1px solid ${tokens.border}`,
              borderRadius: 12,
              width: 320,
              padding: "18px 20px",
              display: "flex",
              flexDirection: "column",
              gap: 14
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { fontSize: 14, fontWeight: 600 }, children: t("avatar.title") }) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { display: "flex", justifyContent: "center" }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFace, { uri: avatar?.uri, initial, size: 96 }) }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { fontSize: 12, color: tokens.textSecondary }, children: t("avatar.hue") }),
                HUES.map((hue) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "button",
                  {
                    type: "button",
                    "aria-label": `${t("avatar.hue")} ${hue}`,
                    disabled: busy,
                    onClick: () => {
                      void onApply({ hue });
                    },
                    style: {
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      padding: 0,
                      cursor: busy ? "default" : "pointer",
                      background: `hsl(${hue} 70% 55%)`,
                      border: activeHue === hue ? `2px solid ${tokens.text}` : `1px solid ${tokens.border}`,
                      boxSizing: "border-box"
                    }
                  },
                  hue
                ))
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", gap: 8, flexWrap: "wrap" }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "omx-btn omx-btn-primary", disabled: busy, onClick: () => {
                  void onApply({ reroll: true });
                }, children: t("avatar.reroll") }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "omx-btn omx-btn-ghost", disabled: busy, onClick: () => fileRef.current?.click(), children: t("avatar.upload") }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "input",
                  {
                    ref: fileRef,
                    type: "file",
                    accept: "image/png,image/jpeg,image/webp,image/gif",
                    style: { display: "none" },
                    onChange: pickFile
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "button",
                  {
                    type: "button",
                    className: "omx-btn omx-btn-ghost",
                    disabled: busy || avatar?.using_default !== false,
                    onClick: () => {
                      void onApply({ reset: true });
                    },
                    children: t("avatar.reset")
                  }
                )
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { style: { margin: 0, fontSize: 11, color: tokens.textSecondary }, children: t("avatar.uploadHint") }),
              error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { style: { margin: 0, fontSize: 12, color: tokens.error, lineHeight: 1.5 }, children: error }) : null,
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "omx-btn omx-btn-ghost", style: { alignSelf: "flex-end" }, onClick: onClose, children: t("avatar.close") })
            ]
          }
        )
      }
    ),
    document.body
  );
}
function SignedIn({ t, profile, onTopUp, onSignOut }) {
  const name2 = profile.display_name || profile.username || "";
  const initial = (name2.trim().charAt(0) || "?").toUpperCase();
  const balance = typeof profile.quota_usd === "number" ? profile.quota_usd : 0;
  const used = typeof profile.used_quota_usd === "number" ? profile.used_quota_usd : 0;
  const total = balance + used;
  const usedPct = total > 0 ? Math.min(100, used / total * 100) : 0;
  const [avatar, setAvatar] = (0, import_react2.useState)(null);
  const [avatarError, setAvatarError] = (0, import_react2.useState)("");
  const [busy, setBusy] = (0, import_react2.useState)(false);
  const [editing, setEditing] = (0, import_react2.useState)(false);
  (0, import_react2.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: page, className: "omx-profile", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: hoverStyles }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { style: { margin: 0, fontSize: 16, fontWeight: 600 }, children: t("profile.title") }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { ...card, display: "flex", alignItems: "center", gap: 12 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditableAvatar, { t, uri: avatar?.uri, initial, onOpen: () => setEditing(true) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { fontSize: 15, fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: name2 || "\u2014" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { fontSize: 13, color: tokens.textSecondary }, children: profile.username || "\u2014" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { style: {
        marginLeft: "auto",
        flex: "0 0 auto",
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontSize: 12,
        color: tokens.textSecondary
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { width: 7, height: 7, borderRadius: "50%", background: tokens.success } }),
        t("profile.signedIn")
      ] })
    ] }),
    avatarError && !editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { style: { margin: 0, fontSize: 12, color: tokens.error, lineHeight: 1.5 }, children: avatarError }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { ...card, display: "flex", alignItems: "center", gap: 16 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: 6, flex: "1 1 auto", minWidth: 0 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: label, children: t("profile.quota") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { fontSize: 22, fontWeight: 600, lineHeight: 1.2 }, children: money(profile.quota_usd) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { style: { fontSize: 12, color: tokens.textSecondary }, children: [
          t("profile.used"),
          " ",
          money(profile.used_quota_usd)
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { height: 4, borderRadius: 2, background: tokens.border, overflow: "hidden", marginTop: 2 }, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { width: `${usedPct}%`, height: "100%", borderRadius: 2, background: tokens.primaryFill } }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "omx-btn omx-btn-primary", style: { flex: "0 0 auto" }, onClick: onTopUp, children: t("profile.topUp") })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { ...card, padding: "4px 16px" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, { name: t("profile.username"), children: profile.username || "\u2014" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, { name: t("profile.displayName"), children: profile.display_name || "\u2014" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, { name: t("profile.group"), children: profile.group || "\u2014" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailRow, { name: t("profile.site"), last: true, children: profile.base_url || "\u2014" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "omx-btn omx-btn-ghost omx-btn-danger", style: { alignSelf: "flex-start" }, onClick: onSignOut, children: t("profile.logout") }),
    editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
  const { state, beginLogin, signOut, openUrl } = useOmnimuxAuth({ verifyOnMount: false });
  if (state.phase === "ready") {
    const profile = state.profile || {};
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
  const message = {
    checking: t("profile.loading"),
    "need-login": t("profile.signedOut"),
    starting: t("profile.loading"),
    waiting: t("plugins.waiting"),
    denied: t("plugins.denied"),
    expired: t("plugins.expired"),
    error: t("plugins.error")
  }[state.phase] || t("profile.signedOut");
  const showLogin = state.phase === "need-login" || state.phase === "denied" || state.phase === "expired" || state.phase === "error";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: page, className: "omx-profile", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: hoverStyles }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { style: { margin: 0, fontSize: 16, fontWeight: 600 }, children: t("profile.title") }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { ...card, display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { style: { margin: 0, fontSize: 13, color: tokens.textSecondary, lineHeight: 1.5 }, children: message }),
      state.phase === "error" && state.detail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { style: { margin: 0, fontSize: 12, color: tokens.error, lineHeight: 1.5 }, children: state.detail }) : null,
      state.phase === "waiting" && state.user_code ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
        fontFamily: "var(--dsw-font-markdown-code-font-family, monospace)",
        fontSize: 16,
        letterSpacing: 2,
        padding: "6px 12px",
        borderRadius: 6,
        border: `1px solid ${tokens.border}`
      }, children: state.user_code }) : null,
      state.phase === "waiting" && state.verification_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "omx-btn omx-btn-primary", onClick: () => openUrl(state.verification_url), children: t("plugins.open") }) : null,
      showLogin ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "omx-btn omx-btn-primary", onClick: () => {
        void beginLogin();
      }, children: t("plugins.login") }) : null
    ] })
  ] });
}

// src/client/DshPluginsSection.jsx
var import_react3 = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var page2 = {
  padding: "16px 20px",
  color: "var(--dsw-text-primary, inherit)",
  display: "flex",
  flexDirection: "column",
  gap: 12,
  maxWidth: 560
};
var muted = { color: "var(--dsw-text-secondary, inherit)", lineHeight: 1.5, margin: 0 };
var row = { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 };
function DshPluginsSection({ t }) {
  const [available, setAvailable] = (0, import_react3.useState)(false);
  const [plugins, setPlugins] = (0, import_react3.useState)([]);
  const [error, setError] = (0, import_react3.useState)("");
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
  (0, import_react3.useEffect)(() => {
    void refresh();
  }, []);
  if (!available && plugins.length === 0 && error === "") {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: page2, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", { style: { margin: 0, fontSize: 16 }, children: t("dshPlugins.title") }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { style: muted, children: t("dshPlugins.desktopOnly") })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: page2, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", { style: { margin: 0, fontSize: 16 }, children: t("dshPlugins.title") }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { style: muted, children: t("dshPlugins.readonlyHint") }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ul", { style: { margin: 0, paddingLeft: 18, lineHeight: 1.7 }, children: plugins.map((plugin) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { style: row, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { children: [
      plugin.name,
      plugin.protected ? ` (${t("dshPlugins.protected")})` : ""
    ] }) }, plugin.name)) }),
    error !== "" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { style: muted, children: error }) : null
  ] });
}

// src/client/AppsStage.jsx
var import_react5 = require("react");

// src/client/PluginsSection.jsx
var import_react4 = require("react");

// src/client/app-actions.js
function primaryActionFor(state) {
  if (state === "available") return "install";
  if (state === "update") return "update";
  return null;
}
function hasOverflowMenu(state) {
  return state === "installed" || state === "update";
}
function canOpen(app, pendingRestart) {
  const state = app?.state;
  return (state === "installed" || state === "update") && app?.client === true && !pendingRestart;
}
function needsIdentity(app) {
  return Array.isArray(app?.capabilities) && app.capabilities.includes("identity");
}

// src/client/open-app.js
var APP_OPEN_EVENT = "omnimux-app-open";
function openApp(id, target = window) {
  target.dispatchEvent(new CustomEvent(APP_OPEN_EVENT, { detail: { id } }));
}
function waitForStageClaim(readStage, timeoutMs = 600) {
  return new Promise((resolve) => {
    const started = Date.now();
    const poll = () => {
      const stage = readStage();
      if (typeof stage === "string" && stage !== "" && stage !== "omnimux-apps") {
        resolve(true);
        return;
      }
      if (Date.now() - started >= timeoutMs) {
        resolve(false);
        return;
      }
      setTimeout(poll, 60);
    };
    poll();
  });
}

// src/client/open-app-flow.js
var TABS_CHANGED_EVENT = "omnimux-app-tabs-changed";
function notifyTabsChanged(target) {
  const scope = target ?? (typeof window === "undefined" ? void 0 : window);
  if (scope === void 0 || typeof scope.dispatchEvent !== "function") return;
  if (typeof CustomEvent === "undefined") return;
  scope.dispatchEvent(new CustomEvent(TABS_CHANGED_EVENT));
}
function recordTab(id) {
  upsertAppTab(id).then((result) => {
    if (result.ok) notifyTabsChanged();
  }).catch(() => {
  });
}
async function attemptOpen(app, opts = {}) {
  const pendingRestart = opts.pendingRestart === true;
  const readStage = opts.readStage ?? defaultReadStage;
  const id = typeof app?.id === "string" ? app.id : "";
  if (!canOpen(app, pendingRestart) || id === "") return { kind: "restart" };
  if (needsIdentity(app) && opts.isLoggedIn !== true) return { kind: "login" };
  openApp(id);
  const claimed = await waitForStageClaim(readStage);
  if (!claimed) return { kind: "restart" };
  recordTab(id);
  return { kind: "opened" };
}
function defaultReadStage() {
  return typeof document === "undefined" ? void 0 : document.documentElement.dataset.dshProductStage;
}

// src/client/PluginsSection.jsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var page3 = {
  padding: "0 20px 24px",
  color: "var(--dsw-alias-label-primary, var(--dsw-text-primary, inherit))",
  display: "flex",
  flexDirection: "column",
  gap: 16
};
var toolbar = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: 10
};
var search = {
  width: 280,
  maxWidth: "100%",
  flex: "0 1 280px",
  height: 32,
  borderRadius: 8,
  border: "1px solid var(--dsw-alias-border, rgba(255,255,255,0.12))",
  background: "transparent",
  color: "inherit",
  padding: "0 10px",
  font: "inherit",
  fontSize: 13
};
var grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
  alignItems: "stretch",
  gap: 12
};
var card2 = {
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: 12,
  minHeight: 176,
  borderRadius: 12,
  padding: 16,
  background: "var(--dsw-alias-bg-secondary, rgba(255,255,255,0.04))",
  border: "1px solid var(--dsw-alias-border, rgba(255,255,255,0.08))"
};
var cardBody = {
  display: "flex",
  flexDirection: "column",
  gap: 12,
  cursor: "pointer",
  outline: "none"
};
var titleRow = {
  display: "flex",
  alignItems: "flex-start",
  gap: 10
};
var iconBox = {
  width: 36,
  height: 36,
  borderRadius: 10,
  display: "grid",
  placeItems: "center",
  background: "var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.10))",
  color: "var(--dsw-alias-label-primary, inherit)",
  flex: "0 0 auto"
};
var titleLine = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  minWidth: 0,
  flex: 1,
  paddingRight: 34
  // reserve space for the top-right ⋯ button so the title / badge never overlap it
};
var title = {
  margin: 0,
  minWidth: 0,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  fontSize: 15,
  fontWeight: 600,
  lineHeight: "22px"
};
var stateBadge = (state) => {
  if (state === "installed") {
    return {
      fontSize: 11,
      lineHeight: "16px",
      padding: "2px 8px",
      borderRadius: 999,
      background: "color-mix(in srgb, var(--dsw-alias-state-success-primary, #4caf7d) 16%, transparent)",
      color: "var(--dsw-alias-state-success-primary, #4caf7d)",
      whiteSpace: "nowrap"
    };
  }
  if (state === "update") {
    return {
      fontSize: 11,
      lineHeight: "16px",
      padding: "2px 8px",
      borderRadius: 999,
      background: "color-mix(in srgb, var(--dsw-alias-state-business-primary, #4c8dff) 16%, transparent)",
      color: "var(--dsw-alias-state-business-primary, #4c8dff)",
      whiteSpace: "nowrap"
    };
  }
  if (state === "available") {
    return {
      fontSize: 11,
      lineHeight: "16px",
      padding: "2px 8px",
      borderRadius: 999,
      background: "var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.08))",
      color: "var(--dsw-alias-label-secondary, rgba(255,255,255,0.72))",
      whiteSpace: "nowrap"
    };
  }
  return null;
};
var summary = {
  margin: 0,
  fontSize: 13,
  lineHeight: 1.55,
  opacity: 0.72
};
var tags = {
  display: "flex",
  flexWrap: "wrap",
  gap: 6
};
var tag = {
  fontSize: 11,
  lineHeight: "16px",
  padding: "2px 8px",
  borderRadius: 999,
  background: "rgba(255,255,255,0.08)",
  whiteSpace: "nowrap"
};
var footer = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: 10,
  marginTop: "auto"
};
var pill = (tone) => ({
  flex: "0 0 auto",
  border: tone === "danger" || tone === "ghost" ? "1px solid var(--dsw-alias-border, rgba(255,255,255,0.16))" : "none",
  borderRadius: 8,
  padding: "4px 10px",
  font: "inherit",
  fontSize: 13,
  cursor: "pointer",
  background: tone === "danger" || tone === "ghost" ? "transparent" : "var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.12))",
  color: tone === "danger" ? "var(--dsw-alias-state-error-primary, #e06c75)" : "inherit"
});
var moreButton = {
  position: "absolute",
  top: 8,
  right: 8,
  zIndex: 1,
  display: "grid",
  placeItems: "center",
  width: 26,
  height: 26,
  padding: 0,
  border: "1px solid var(--dsw-alias-border, rgba(255,255,255,0.16))",
  borderRadius: 8,
  background: "transparent",
  color: "inherit",
  font: "inherit",
  fontSize: 16,
  lineHeight: 1,
  cursor: "pointer"
};
var menuItem = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 2,
  border: "none",
  borderRadius: 6,
  padding: "6px 10px",
  background: "transparent",
  color: "inherit",
  font: "inherit",
  fontSize: 13,
  textAlign: "left",
  cursor: "pointer"
};
var menuItemHint = {
  fontSize: 11,
  lineHeight: "16px",
  opacity: 0.6
};
var menuItemDanger = {
  ...menuItem,
  color: "var(--dsw-alias-state-error-primary, #e06c75)"
};
var bubbleText = {
  margin: 0,
  fontSize: 13,
  lineHeight: 1.5
};
var bubbleSummary = {
  margin: 0,
  fontSize: 12,
  lineHeight: 1.5,
  opacity: 0.7
};
var bubbleActions = {
  display: "flex",
  justifyContent: "flex-end",
  gap: 8,
  marginTop: 8
};
var gatePanel = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 10,
  padding: 16,
  borderRadius: 12,
  background: "var(--dsw-alias-bg-secondary, rgba(255,255,255,0.04))",
  border: "1px solid var(--dsw-alias-border, rgba(255,255,255,0.08))"
};
var gateCode = {
  margin: 0,
  fontSize: 14,
  letterSpacing: 2,
  fontFamily: "var(--dsw-font-markdown-code-font-family, monospace)"
};
var muted2 = { opacity: 0.7, fontSize: 13, margin: 0 };
var errText = { color: "var(--dsw-alias-state-error-primary, #e06c75)", fontSize: 13, margin: 0 };
function desktopBridge() {
  const api = window.dshDesktop;
  return api && typeof api.restartHost === "function" ? api : void 0;
}
function fmt(template, vars) {
  return template.replace(/\{(\w+)\}/g, (whole, key) => key in vars ? String(vars[key]) : whole);
}
function AppMark({ id }) {
  if (id === "accounts") {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", "aria-hidden": "true", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "8", cy: "5.2", r: "2.4", fill: "none", stroke: "currentColor", strokeWidth: "1.3" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M3.4 13c.6-2.4 2.3-3.6 4.6-3.6s4 1.2 4.6 3.6", fill: "none", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round" })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("rect", { x: "1.5", y: "1.5", width: "5", height: "5", rx: "1", fill: "none", stroke: "currentColor", strokeWidth: "1.25" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("rect", { x: "9.5", y: "1.5", width: "5", height: "5", rx: "1", fill: "none", stroke: "currentColor", strokeWidth: "1.25" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("rect", { x: "1.5", y: "9.5", width: "5", height: "5", rx: "1", fill: "none", stroke: "currentColor", strokeWidth: "1.25" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("rect", { x: "9.5", y: "9.5", width: "5", height: "5", rx: "1", fill: "none", stroke: "currentColor", strokeWidth: "1.25" })
  ] });
}
function matches(app, query) {
  if (query.length === 0) return true;
  const hay = [app.title, app.summary, app.id, app.spec?.name].filter((value2) => typeof value2 === "string").join(" ").toLocaleLowerCase();
  return hay.includes(query);
}
function LoginGate({ t, auth, onCancel }) {
  const state = auth.state;
  const idle = state.phase === "need-login" || state.phase === "denied" || state.phase === "expired" || state.phase === "error";
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: gatePanel, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: muted2, children: t("plugins.needLogin") }),
    state.phase === "waiting" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: muted2, children: t("plugins.waiting") }),
      typeof state.user_code === "string" && state.user_code ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: gateCode, children: state.user_code }) : null,
      typeof state.verification_url === "string" && state.verification_url ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "button", style: pill("primary"), onClick: () => {
        auth.openUrl(state.verification_url);
      }, children: t("plugins.open") }) : null
    ] }) : null,
    state.phase === "denied" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: errText, children: t("plugins.denied") }) : null,
    state.phase === "expired" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: errText, children: t("plugins.expired") }) : null,
    state.phase === "error" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: errText, children: state.detail || t("plugins.error") }) : null,
    idle ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "button", style: pill("primary"), onClick: () => {
      void auth.beginLogin();
    }, children: t("plugins.login") }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "button", style: pill("ghost"), onClick: onCancel, children: t("plugins.cancel") })
  ] });
}
function PluginsSection({ t }) {
  const [view, setView] = (0, import_react4.useState)(null);
  const [query, setQuery] = (0, import_react4.useState)("");
  const [busy, setBusy] = (0, import_react4.useState)("");
  const [error, setError] = (0, import_react4.useState)("");
  const [pendingRestart, setPendingRestart] = (0, import_react4.useState)(false);
  const [popover, setPopover] = (0, import_react4.useState)(null);
  const [gate, setGate] = (0, import_react4.useState)(null);
  const [notice, setNotice] = (0, import_react4.useState)("");
  const auth = useOmnimuxAuth();
  const applyView = (body) => {
    setView(body && typeof body === "object" ? body : null);
    if (body && typeof body.error === "string" && body.error) setError(body.error);
  };
  const refresh = () => {
    return getApps().then((result) => {
      if (!result.ok) {
        setError(String(result.body.error || `HTTP ${String(result.status)}`));
        return;
      }
      setError(typeof result.body.error === "string" ? result.body.error : "");
      applyView(result.body);
    }).catch((caught) => {
      setError(caught instanceof Error ? caught.message : String(caught));
    });
  };
  (0, import_react4.useEffect)(() => {
    void refresh();
  }, []);
  (0, import_react4.useEffect)(() => {
    if (popover === null) return void 0;
    const onPointerDown = (event) => {
      const target = event.target;
      if (target instanceof Element && target.closest("[data-omnimux-popover]") !== null) return;
      setPopover(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [popover]);
  (0, import_react4.useEffect)(() => {
    if (notice === "") return void 0;
    const timer = window.setTimeout(() => {
      setNotice("");
    }, 6e3);
    return () => {
      window.clearTimeout(timer);
    };
  }, [notice]);
  const runChange = (key, work) => {
    setBusy(key);
    setError("");
    void work().then((result) => {
      if (!result.ok) {
        setError(String(result.body.error || `HTTP ${String(result.status)}`));
        return;
      }
      setPendingRestart(true);
      notifyTabsChanged();
      return refresh();
    }).catch((caught) => {
      setError(caught instanceof Error ? caught.message : String(caught));
    }).finally(() => {
      setBusy("");
    });
  };
  const install2 = (spec) => {
    if (!spec) return;
    runChange(spec, () => installApp(spec));
  };
  const uninstall = (name2) => {
    if (!name2) return;
    runChange(name2, () => uninstallApp(name2));
  };
  const restart = () => {
    const bridge = desktopBridge();
    if (bridge === void 0) {
      setError(t("dshPlugins.needDesktop"));
      return;
    }
    setBusy("restart");
    setError("");
    void bridge.restartHost().then(() => {
      setPendingRestart(false);
    }).catch((caught) => {
      setError(caught instanceof Error ? caught.message : String(caught));
    }).finally(() => {
      setBusy("");
    });
  };
  const readStage = () => document.documentElement.dataset.dshProductStage;
  const runOpen = (app, isLoggedIn = auth.state.phase === "ready") => {
    setNotice("");
    void attemptOpen(app, { pendingRestart, readStage, isLoggedIn }).then((result) => {
      if (result.kind === "login") {
        setGate(app);
        return;
      }
      if (result.kind === "restart") setNotice(t("plugins.needRestart"));
    }).catch(() => {
      setNotice(t("plugins.needRestart"));
    });
  };
  (0, import_react4.useEffect)(() => {
    if (gate === null || auth.state.phase !== "ready") return;
    const app = gate;
    setGate(null);
    runOpen(app, true);
  }, [gate, auth.state.phase]);
  const handleCardClick = (app) => {
    if (app.state === "available") {
      setPopover({ kind: "install", id: String(app.id) });
      return;
    }
    runOpen(app);
  };
  const apps = Array.isArray(view?.apps) ? view.apps : [];
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const filtered = (0, import_react4.useMemo)(
    () => apps.filter((app) => matches(app, normalizedQuery)),
    [apps, normalizedQuery]
  );
  const softError = typeof view?.error === "string" ? view.error : "";
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: page3, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: toolbar, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "input",
      {
        type: "search",
        value: query,
        placeholder: t("plugins.search"),
        "aria-label": t("plugins.search"),
        onChange: (event) => {
          setQuery(event.currentTarget.value);
        },
        style: search
      }
    ) }),
    gate !== null ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(LoginGate, { t, auth, onCancel: () => {
      setGate(null);
    } }) : null,
    view == null && error === "" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: muted2, children: t("profile.loading") }) : null,
    apps.length === 0 && view != null ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: muted2, children: t("plugins.empty") }) : null,
    apps.length > 0 && filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: muted2, children: t("plugins.emptySearch") }) : null,
    filtered.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: grid, children: filtered.map((app) => {
      const key = String(app.id);
      const spec = typeof app.install_spec === "string" ? app.install_spec : "";
      const name2 = typeof app.spec?.name === "string" ? app.spec.name : "";
      const primary = primaryActionFor(app.state);
      const overflow = hasOverflowMenu(app.state);
      const badge = stateBadge(app.state);
      const appCaps = Array.isArray(app.capabilities) ? app.capabilities : [];
      const badgeKey = app.state === "update" ? "plugins.update" : app.state === "available" ? "plugins.available" : "plugins.installedShort";
      return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("article", { style: card2, children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
          "div",
          {
            role: "button",
            tabIndex: 0,
            style: cardBody,
            onClick: () => {
              handleCardClick(app);
            },
            onKeyDown: (event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                handleCardClick(app);
              }
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: titleRow, children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { style: iconBox, "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(AppMark, { id: app.id }) }),
                /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: titleLine, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { style: title, children: app.title }),
                  badge ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { style: badge, children: t(badgeKey) }) : null
                ] })
              ] }),
              app.summary ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: summary, children: app.summary }) : null,
              appCaps.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: tags, children: appCaps.map((capKey) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { style: tag, children: t(`plugins.cap.${capKey}`) }, capKey)) }) : null
            ]
          }
        ),
        overflow ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "button",
          {
            type: "button",
            style: moreButton,
            "aria-label": t("plugins.more"),
            "aria-haspopup": "menu",
            "aria-expanded": popover?.kind === "menu" && popover.id === key,
            disabled: busy !== "",
            onClick: (event) => {
              event.stopPropagation();
              setPopover(popover?.kind === "menu" && popover.id === key ? null : { kind: "menu", id: key });
            },
            children: "\u22EF"
          }
        ) : null,
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: footer, children: primary !== null ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "button",
          {
            type: "button",
            style: pill("primary"),
            disabled: busy !== "" || spec === "",
            onClick: (event) => {
              event.stopPropagation();
              install2(spec);
            },
            children: t(primary === "update" ? "plugins.update" : "plugins.install")
          }
        ) : null }),
        popover?.id === key && popover.kind === "menu" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { "data-omnimux-popover": "", role: "menu", style: popover, children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
            "button",
            {
              type: "button",
              role: "menuitem",
              style: menuItem,
              disabled: busy !== "" || !canOpen(app, pendingRestart),
              onClick: () => {
                setPopover(null);
                runOpen(app);
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: t("plugins.openApp") }),
                pendingRestart ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { style: menuItemHint, children: t("plugins.needRestart") }) : null
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            "button",
            {
              type: "button",
              role: "menuitem",
              style: menuItemDanger,
              disabled: busy !== "" || name2 === "",
              onClick: () => {
                setPopover({ kind: "remove", id: key });
              },
              children: t("plugins.remove")
            }
          )
        ] }) : null,
        popover?.id === key && popover.kind === "install" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { "data-omnimux-popover": "", role: "dialog", style: popover, children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: bubbleText, children: fmt(t("plugins.confirmInstall"), { title: app.title }) }),
          app.summary ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: bubbleSummary, children: app.summary }) : null,
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: bubbleActions, children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "button",
              {
                type: "button",
                style: pill("primary"),
                disabled: busy !== "" || spec === "",
                onClick: () => {
                  setPopover(null);
                  install2(spec);
                },
                children: t("plugins.install")
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "button", style: pill("ghost"), onClick: () => {
              setPopover(null);
            }, children: t("plugins.cancel") })
          ] })
        ] }) : null,
        popover?.id === key && popover.kind === "remove" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { "data-omnimux-popover": "", role: "dialog", style: popover, children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: bubbleText, children: fmt(t("plugins.confirmRemove"), { title: app.title }) }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: bubbleActions, children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              "button",
              {
                type: "button",
                style: pill("danger"),
                disabled: busy !== "" || name2 === "",
                onClick: () => {
                  setPopover(null);
                  uninstall(name2);
                },
                children: t("plugins.remove")
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "button", style: pill("ghost"), onClick: () => {
              setPopover(null);
            }, children: t("plugins.cancel") })
          ] })
        ] }) : null
      ] }, key);
    }) }) : null,
    notice !== "" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: muted2, children: notice }) : null,
    pendingRestart ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "button", style: { ...pill("primary"), alignSelf: "flex-start" }, disabled: busy !== "", onClick: restart, children: t("dshPlugins.restart") }) : null,
    softError !== "" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: muted2, children: softError }) : null,
    error !== "" && error !== softError ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: errText, children: error }) : null
  ] });
}

// src/client/AppsStage.jsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function AppsStage({ t, apps, useSessions }) {
  const open = (0, import_react5.useSyncExternalStore)(
    apps ? apps.subscribe : () => () => {
    },
    apps ? apps.getSnapshot : () => false
  );
  const readSessions = useSessions ?? ((select) => select({}));
  const currentSession = readSessions((state) => state.current);
  const lastSession = (0, import_react5.useRef)(currentSession);
  const [box, setBox] = (0, import_react5.useState)(() => readConversationBox());
  (0, import_react5.useLayoutEffect)(() => {
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
  (0, import_react5.useEffect)(() => {
    if (open && lastSession.current !== currentSession) apps?.set(false);
    lastSession.current = currentSession;
  }, [apps, currentSession, open]);
  (0, import_react5.useEffect)(() => {
    if (!open || !apps) return void 0;
    const header = document.querySelector('[data-slot="conversation.session.header"]');
    if (!(header instanceof HTMLElement)) return void 0;
    const onPointerDown = () => {
      apps.set(false);
    };
    header.addEventListener("pointerdown", onPointerDown);
    return () => {
      header.removeEventListener("pointerdown", onPointerDown);
    };
  }, [apps, open]);
  if (!open || !apps) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    "div",
    {
      role: "region",
      "aria-label": t("plugins.title"),
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
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
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
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
                  children: t("plugins.title")
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "button",
                {
                  type: "button",
                  "aria-label": t("plugins.close"),
                  onClick: () => {
                    apps.set(false);
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
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: { flex: 1, minHeight: 0, display: "flex", flexDirection: "column", overflow: "auto" }, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(PluginsSection, { t }) })
      ]
    }
  );
}

// src/client/sidebar-entry.js
var ICON = '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><rect x="1.5" y="1.5" width="5" height="5" rx="1"/><rect x="9.5" y="1.5" width="5" height="5" rx="1"/><rect x="1.5" y="9.5" width="5" height="5" rx="1"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/></svg>';
var STYLES = `
.omnimux-apps-entry {
  box-sizing: border-box; display: flex; align-items: center; gap: 6px; position: relative;
  width: calc(100% - 8px); height: 32px; margin: 0 4px; padding: 0 8px;
  border: none; border-radius: 8px; background: transparent;
  color: var(--dsw-alias-label-primary, inherit);
  font: var(--dsw-font-s-14, inherit); font-size: 14px; line-height: 20px;
  cursor: pointer; text-align: left;
}
.omnimux-apps-entry:hover { background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,.12)); }
.omnimux-apps-entry[data-active="true"] { background: var(--dsw-alias-interactive-bg-active, rgba(128,128,128,.18)); font-weight: 500; }
.omnimux-apps-entry-icon { flex: none; display: inline-flex; width: 14px; height: 14px; align-items: center; justify-content: center; }
.omnimux-apps-entry svg { display: block; width: 14px; height: 14px; }
.omnimux-apps-entry-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 20px; }
`;
function paintLabel(entry, label2) {
  entry.setAttribute("aria-label", label2);
  const node = entry.querySelector(".omnimux-apps-entry-label");
  if (node) node.textContent = label2;
}
function mountSidebarEntry(apps, t, locale, register) {
  const entry = document.createElement("button");
  entry.type = "button";
  entry.dataset.dshOmnimuxAppsEntry = "";
  entry.className = "omnimux-apps-entry";
  entry.innerHTML = `<span class="omnimux-apps-entry-icon">${ICON}</span><span class="omnimux-apps-entry-label"></span>`;
  paintLabel(entry, t("plugins.nav"));
  entry.addEventListener("click", () => {
    apps.toggle();
  });
  const paint = () => {
    paintLabel(entry, t("plugins.nav"));
  };
  const unsubscribeLocale = typeof locale?.subscribe === "function" ? locale.subscribe(paint) : () => {
  };
  const syncActive = () => {
    if (apps.getSnapshot()) entry.dataset.active = "true";
    else delete entry.dataset.active;
  };
  const unsubscribeApps = apps.subscribe(syncActive);
  syncActive();
  const unregister = register({
    id: "omnimux-apps-entry",
    rank: 1,
    styles: STYLES,
    styleId: "omnimux-apps-entry-styles",
    create: () => entry
  });
  return () => {
    unregister();
    unsubscribeApps();
    unsubscribeLocale();
  };
}

// src/client/app-tabs.js
var ICON_ACCOUNTS = '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><circle cx="8" cy="5.2" r="2.4"/><path d="M3.4 13c.6-2.4 2.3-3.6 4.6-3.6s4 1.2 4.6 3.6" stroke-linecap="round"/></svg>';
var ICON_DEFAULT = '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.25" aria-hidden="true"><rect x="1.5" y="1.5" width="5" height="5" rx="1"/><rect x="9.5" y="1.5" width="5" height="5" rx="1"/><rect x="1.5" y="9.5" width="5" height="5" rx="1"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/></svg>';
var STYLES2 = `
[data-omnimux-app-tabs]{display:flex;flex-direction:column;}
.omnimux-app-tab {
  box-sizing: border-box; display: flex; align-items: center; gap: 6px; position: relative;
  width: calc(100% - 8px); height: 32px; margin: 0 4px; padding: 0 8px;
  border: none; border-radius: 8px; background: transparent;
  color: var(--dsw-alias-label-primary, inherit);
  font: var(--dsw-font-s-14, inherit); font-size: 14px; line-height: 20px;
  cursor: pointer; text-align: left;
}
.omnimux-app-tab:hover { background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,.12)); }
.omnimux-app-tab[data-active="true"] { background: var(--dsw-alias-interactive-bg-active, rgba(128,128,128,.18)); font-weight: 500; }
.omnimux-app-tab-icon { flex: none; display: inline-flex; width: 14px; height: 14px; align-items: center; justify-content: center; }
.omnimux-app-tab svg { display: block; width: 14px; height: 14px; }
.omnimux-app-tab-label { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 20px; }
.omnimux-app-tab-pin { flex: none; font-size: 10px; line-height: 1; }
.omnimux-app-tab-actions { position: absolute; top: 0; right: 6px; height: 32px; display: flex; align-items: center; gap: 2px; opacity: 0; }
.omnimux-app-tab:hover .omnimux-app-tab-actions,
.omnimux-app-tab:focus-within .omnimux-app-tab-actions { opacity: 1; }
.omnimux-app-tab-action {
  box-sizing: border-box; display: grid; place-items: center;
  width: 22px; height: 22px; padding: 0; border: none; border-radius: 6px;
  background: transparent; color: var(--dsw-alias-label-secondary, inherit);
  font: inherit; font-size: 12px; line-height: 1; cursor: pointer;
}
.omnimux-app-tab-action:hover { background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,.12)); color: var(--dsw-alias-label-primary, inherit); }
.omnimux-app-tab[data-pinned="true"] .omnimux-app-tab-action[data-kind="pin"] { color: var(--dsw-alias-state-business-primary, #4c8dff); }
`;
function tabRowModel(view) {
  const tabs = view && typeof view === "object" && Array.isArray(view.tabs) ? view.tabs : [];
  const rows = [];
  for (const item of tabs) {
    const tab = item && typeof item === "object" ? (
      /** @type {Record<string, unknown>} */
      item
    ) : {};
    const id = typeof tab.id === "string" ? tab.id : "";
    if (id === "") continue;
    rows.push({
      id,
      title: typeof tab.title === "string" && tab.title !== "" ? tab.title : id,
      pinned: tab.pinned === true,
      lastOpenedAt: typeof tab.lastOpenedAt === "string" ? tab.lastOpenedAt : ""
    });
  }
  return rows;
}
function iconFor(id) {
  return id === "accounts" ? ICON_ACCOUNTS : ICON_DEFAULT;
}
function createTabRow(model) {
  const row2 = document.createElement("div");
  row2.className = "omnimux-app-tab";
  row2.dataset.dshOmnimuxAppTab = model.id;
  row2.setAttribute("role", "button");
  row2.setAttribute("tabindex", "0");
  if (model.pinned) row2.dataset.pinned = "true";
  row2.innerHTML = `
    ${model.pinned ? '<span class="omnimux-app-tab-pin" aria-hidden="true">\u{1F4CC}</span>' : ""}
    <span class="omnimux-app-tab-icon" aria-hidden="true">${iconFor(model.id)}</span>
    <span class="omnimux-app-tab-label"></span>
    <span class="omnimux-app-tab-actions">
      <button type="button" class="omnimux-app-tab-action" data-kind="top">\u2B06</button>
      <button type="button" class="omnimux-app-tab-action" data-kind="pin">\u{1F4CC}</button>
      <button type="button" class="omnimux-app-tab-action" data-kind="remove">\u2715</button>
    </span>`;
  return row2;
}
function paintAction(row2, kind, label2, glyph) {
  const action = row2.querySelector(`[data-kind="${kind}"]`);
  if (!(action instanceof HTMLElement)) return;
  action.title = label2;
  action.setAttribute("aria-label", label2);
  action.textContent = glyph;
}
function mountAppTabs(t, locale, register) {
  const container = document.createElement("div");
  container.dataset.dshOmnimuxAppTabs = "";
  let rows = [];
  const modelFor = (id) => rows.find((row2) => row2.id === id);
  function syncActive() {
    const stage = document.documentElement.dataset.dshProductStage;
    for (const row2 of container.children) {
      const id = row2 instanceof Element ? row2.getAttribute("data-omnimux-app-tab") : null;
      if (typeof stage === "string" && stage !== "" && id !== null && stage === `omnimux-app-${id}`) {
        row2.dataset.active = "true";
      } else {
        delete row2.dataset.active;
      }
    }
  }
  function render() {
    container.replaceChildren();
    for (const model of rows) {
      const row2 = createTabRow(model);
      const label2 = row2.querySelector(".omnimux-app-tab-label");
      if (label2) label2.textContent = model.title;
      row2.setAttribute("aria-label", model.title);
      paintAction(row2, "remove", t("plugins.tab.remove"), "\u2715");
      paintAction(row2, "pin", model.pinned ? t("plugins.tab.unpin") : t("plugins.tab.pin"), "\u{1F4CC}");
      paintAction(row2, "top", t("plugins.tab.top"), "\u2B06");
      container.append(row2);
    }
    syncActive();
  }
  function refresh() {
    return getAppTabs().then((result) => {
      if (!result.ok) return;
      rows = tabRowModel(result.body);
      render();
    }).catch(() => {
    });
  }
  function runPatch(id, body) {
    void patchAppTab(id, body).then((result) => {
      if (result.ok) void refresh();
    }).catch(() => {
    });
  }
  function onClick(event) {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const row2 = target.closest("[data-omnimux-app-tab]");
    if (!(row2 instanceof Element)) return;
    const id = row2.getAttribute("data-omnimux-app-tab") ?? "";
    if (id === "") return;
    const action = target.closest("[data-omnimux-app-tab-action]");
    if (action instanceof Element) {
      const kind = action.getAttribute("data-kind");
      if (kind === "remove") {
        void removeAppTab(id).then((result) => {
          if (result.ok) void refresh();
        }).catch(() => {
        });
        return;
      }
      if (kind === "pin") {
        runPatch(id, { pinned: !(modelFor(id)?.pinned === true) });
        return;
      }
      if (kind === "top") {
        runPatch(id, { order: "top" });
        return;
      }
      return;
    }
    openApp(id);
  }
  function onKeyDown(event) {
    if (event.key !== "Enter" && event.key !== " ") return;
    const target = event.target;
    if (!(target instanceof Element)) return;
    const row2 = target.closest("[data-omnimux-app-tab]");
    if (row2 !== target || !(row2 instanceof Element)) return;
    event.preventDefault();
    const id = row2.getAttribute("data-omnimux-app-tab") ?? "";
    if (id !== "") openApp(id);
  }
  container.addEventListener("click", onClick);
  container.addEventListener("keydown", onKeyDown);
  const onTabsChanged = () => {
    void refresh();
  };
  const onStageChange = () => {
    syncActive();
  };
  window.addEventListener(TABS_CHANGED_EVENT, onTabsChanged);
  window.addEventListener(PRODUCT_STAGE_EVENT, onStageChange);
  const unsubscribeLocale = typeof locale?.subscribe === "function" ? locale.subscribe(render) : () => {
  };
  const unregister = register({
    id: "omnimux-app-tabs",
    rank: 2,
    styles: STYLES2,
    styleId: "omnimux-app-tabs-styles",
    create: () => container
  });
  void refresh();
  return () => {
    unregister();
    window.removeEventListener(TABS_CHANGED_EVENT, onTabsChanged);
    window.removeEventListener(PRODUCT_STAGE_EVENT, onStageChange);
    unsubscribeLocale();
    container.remove();
  };
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
  rewriteWelcome: true
});

// src/brand/overlay.js
var BRAND_ATTR = "data-omnimux-brand";
var COVER_ATTR = "data-omnimux-covered";
var HIDE_ATTR = "data-omnimux-hide";
var STYLE_ID = "omnimux-brand-overlay";
var TITLE_SUFFIX = ` \u2014 ${OFFICIAL_PRODUCT_TITLE}`;
function resolveConfig(raw) {
  return {
    productName: raw?.productName ?? DEFAULT_CONFIG.productName,
    logoSvg: raw?.logoSvg ?? DEFAULT_CONFIG.logoSvg,
    wordmarkText: raw?.wordmarkText ?? DEFAULT_CONFIG.wordmarkText,
    replaceHeroMark: raw?.replaceHeroMark ?? DEFAULT_CONFIG.replaceHeroMark,
    hidePreviewBadge: raw?.hidePreviewBadge ?? DEFAULT_CONFIG.hidePreviewBadge,
    rewriteWelcome: raw?.rewriteWelcome ?? DEFAULT_CONFIG.rewriteWelcome
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
  if (config.hidePreviewBadge) hidePreviewBadges(document2, restores);
  if (config.rewriteWelcome) rewriteWelcomeCopy(document2, config.productName, restores);
}
function ensureStyle(document2, restores) {
  if (document2.getElementById(STYLE_ID) !== null) return;
  const style = document2.createElement("style");
  style.id = STYLE_ID;
  style.textContent = [
    `svg[${COVER_ATTR}]{opacity:0 !important}`,
    `[${HIDE_ATTR}]{visibility:hidden !important}`,
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
function brandedTitle(title2, productName) {
  if (title2 === OFFICIAL_PRODUCT_TITLE) return productName;
  if (title2.endsWith(TITLE_SUFFIX)) return `${title2.slice(0, -TITLE_SUFFIX.length)} \u2014 ${productName}`;
  return title2;
}
function brandedTitleInverse(title2, productName) {
  if (title2 === productName) return OFFICIAL_PRODUCT_TITLE;
  const suffix = ` \u2014 ${productName}`;
  if (title2.endsWith(suffix)) return `${title2.slice(0, -suffix.length)}${TITLE_SUFFIX}`;
  return title2;
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
    if (badge.hasAttribute(HIDE_ATTR)) continue;
    badge.setAttribute(HIDE_ATTR, "");
    restores.push(() => {
      badge.removeAttribute(HIDE_ATTR);
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
  const label2 = document2.createElement("span");
  if (ownAttr) label2.setAttribute(BRAND_ATTR, "wordmark");
  label2.setAttribute("aria-hidden", "true");
  label2.textContent = config.wordmarkText;
  label2.style.cssText = "font-size:15px;font-weight:600;letter-spacing:-0.02em;line-height:24px;white-space:nowrap";
  return label2;
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
var seen = /* @__PURE__ */ new Set();
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
var retry;
function runPlaceAll() {
  const root = sidebarRoot();
  if (root === void 0) return;
  const sorted = [...ROWS].sort((a, b) => a.rank - b.rank);
  let anchor = newSessionButton(root);
  if (anchor === void 0) return;
  let slotExternal = true;
  for (const row2 of sorted) {
    if (row2.rank >= 3 && slotExternal) {
      const ext = externalAnchor(root);
      if (ext instanceof HTMLElement) anchor = ext;
      slotExternal = false;
    }
    const el = row2.element;
    if (el.parentElement === root && el.previousElementSibling === anchor) {
      anchor = el;
      continue;
    }
    root.insertBefore(el, anchor.nextElementSibling ?? null);
    anchor = el;
  }
}
function createApi() {
  return {
    register(row2) {
      const id = row2.id;
      if (seen.has(id)) return () => {
      };
      seen.add(id);
      if (row2.styles) injectStyles(row2.styles, row2.styleId);
      const element = row2.create();
      ROWS.push({ id, rank: row2.rank, element });
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
  waitObserver = new MutationObserver(() => {
    runPlaceAll();
  });
  waitObserver.observe(document.body, { childList: true, subtree: true });
  retry = setInterval(() => {
    runPlaceAll();
  }, 2e3);
  Object.defineProperty(window, SIDEBAR_GLOBAL_KEY, { value: api, configurable: true });
  return api;
}
function installSidebarGlobal() {
  install();
}

// src/client/index.js
var name = "omnimux";
var inject = ["slots", "locale"];
function apply(ctx) {
  installStageGlobal();
  installSidebarGlobal();
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
  const t = ctx.locale.bind(NS);
  const apps = createAppsStore();
  const appsFace = () => ({ t, apps });
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
  ctx.effect(() => mountSidebarEntry(apps, t, ctx.locale, SIDEBAR_GLOBAL().register), "omnimux: sidebar apps entry");
  ctx.effect(() => mountAppTabs(t, ctx.locale, SIDEBAR_GLOBAL().register), "omnimux: sidebar app tabs");
  ctx.slots.inject("shell.overlay", () => ctx.slots.register({
    name: "shell.overlay",
    id: "omnimux-apps-stage",
    order: 20,
    locale: NS,
    inject: appsFace
  }, AppsStage));
}

    return module.exports;
  }
});
