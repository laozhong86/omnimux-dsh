window.__ModuleLoader__.load({
  id: "omnimux-accounts",
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
  "nav": "\u8D26\u53F7",
  "title": "\u8D26\u53F7",
  "loading": "\u6B63\u5728\u8BFB\u53D6\u8D26\u53F7\u2026",
  "needLogin": "\u67E5\u770B\u5DF2\u7ED1\u5B9A\u8D26\u53F7\u9700\u8981\u767B\u5F55 OmniMux\u3002",
  "needLoginHint": "\u53EF\u5728 \u8BBE\u7F6E \u2192 \u4E2A\u4EBA\u8D44\u6599 \u4E2D\u767B\u5F55 OmniMux\u3002",
  "login": "\u767B\u5F55",
  "empty": "\u8FD8\u6CA1\u6709\u7ED1\u5B9A\u7684\u8D26\u53F7\u3002",
  "platform": "\u5E73\u53F0",
  "group": "\u5206\u7EC4",
  "all": "\u5168\u90E8",
  "connect": "\u8FDE\u63A5\u8D26\u53F7",
  "disconnect": "\u65AD\u5F00",
  "platformHint": "\u5E73\u53F0\uFF0C\u4F8B\u5982 tiktok",
  "close": "\u5173\u95ED",
  "overview.connected": "\u5DF2\u8FDE",
  "overview.needsAttention": "\u5F85\u91CD\u8FDE",
  "overview.platforms": "\u5E73\u53F0",
  "overview.total": "\u603B\u8D26\u53F7",
  "filter.search": "\u641C\u7D22\u8D26\u53F7\u3001\u5E73\u53F0\u6216\u5206\u7EC4",
  "filter.status": "\u72B6\u6001",
  "filter.sort": "\u6392\u5E8F",
  "filter.viewGrid": "\u7F51\u683C\u89C6\u56FE",
  "filter.viewTable": "\u8868\u683C\u89C6\u56FE",
  "filter.direction": "\u5207\u6362\u6392\u5E8F\u65B9\u5411",
  "filter.noResults": "\u6CA1\u6709\u5339\u914D\u7684\u8D26\u53F7",
  "sort.display_name": "\u540D\u79F0",
  "sort.platform": "\u5E73\u53F0",
  "sort.status": "\u72B6\u6001",
  "sort.lastUsed": "\u6700\u8FD1\u4F7F\u7528",
  "status.active": "\u6D3B\u8DC3",
  "status.expiring": "\u5373\u5C06\u8FC7\u671F",
  "status.expired": "\u5DF2\u8FC7\u671F",
  "status.error": "\u5F02\u5E38",
  "card.agentUsable": "Agent \u53EF\u7528",
  "card.agentUsableOn": "Agent \u53EF\u7528\uFF0C\u5DF2\u5F00\u542F",
  "card.agentUsableOff": "Agent \u53EF\u7528\uFF0C\u5DF2\u5173\u95ED",
  "card.lastUsed": "\u6700\u540E\u4F7F\u7528\uFF1A{time}",
  "card.expiresIn": "{time}\u540E\u8FC7\u671F",
  "card.menu": "\u66F4\u591A\u64CD\u4F5C",
  "card.confirmDisconnect": "\u786E\u5B9A\u65AD\u5F00 {name}\uFF1F\u65AD\u5F00\u540E Agent \u5C06\u65E0\u6CD5\u4F7F\u7528\u8BE5\u8D26\u53F7\u3002",
  "action.cancel": "\u53D6\u6D88",
  "connect.title": "\u8FDE\u63A5\u65B0\u8D26\u53F7",
  "connect.choosePlatform": "\u9009\u62E9\u5E73\u53F0",
  "connect.comingSoon": "\u5373\u5C06\u652F\u6301",
  "connect.opened": "\u5DF2\u6253\u5F00\u6388\u6743\u9875\uFF0C\u8BF7\u5728\u6D4F\u89C8\u5668\u4E2D\u5B8C\u6210\u6388\u6743\u3002",
  "connect.reopen": "\u91CD\u65B0\u6253\u5F00\u6388\u6743\u9875",
  "connect.waiting": "\u7B49\u5F85\u6388\u6743\u4E2D\u2026\u5B8C\u6210\u6388\u6743\u540E\u8FD9\u91CC\u4F1A\u81EA\u52A8\u5237\u65B0\u3002",
  "connect.done": "\u6211\u5DF2\u5B8C\u6210",
  "connect.connected": "\u5DF2\u8FDE\u63A5",
  "connect.failed": "\u8FDE\u63A5\u5931\u8D25",
  "connect.retry": "\u91CD\u8BD5",
  "empty.title": "\u8FD8\u6CA1\u6709\u8FDE\u63A5\u4EFB\u4F55\u8D26\u53F7",
  "empty.description": "Agent \u8C03\u7528\u5E73\u53F0 API \u9700\u8981\u5148\u8FDE\u63A5\u8D26\u53F7\u3002",
  "empty.cta": "\u8FDE\u63A5\u7B2C\u4E00\u4E2A\u8D26\u53F7",
  "empty.supportedTitle": "\u5DF2\u652F\u6301",
  "empty.comingTitle": "\u5373\u5C06\u652F\u6301",
  "bulk.selected": "\u5DF2\u9009 {count} \u9879",
  "bulk.selectAll": "\u5168\u9009",
  "bulk.selectRow": "\u9009\u62E9 {name}",
  "bulk.disconnect": "\u6279\u91CF\u65AD\u5F00",
  "bulk.agentOn": "\u6279\u91CF\u5F00\u542F Agent",
  "bulk.agentOff": "\u6279\u91CF\u5173\u95ED Agent",
  "bulk.clear": "\u53D6\u6D88\u9009\u62E9",
  "bulk.confirmDisconnect": "\u786E\u5B9A\u65AD\u5F00 {count} \u4E2A\u8D26\u53F7\uFF1F\u65AD\u5F00\u540E Agent \u5C06\u65E0\u6CD5\u4F7F\u7528\u8FD9\u4E9B\u8D26\u53F7\u3002",
  "bulk.partialError": "{count} \u4E2A\u8D26\u53F7\u64CD\u4F5C\u5931\u8D25",
  "bulk.done": "\u6279\u91CF\u64CD\u4F5C\u5B8C\u6210",
  "platform.tiktok": "TikTok",
  "platform.instagram": "Instagram",
  "platform.youtube": "YouTube",
  "platform.x": "X",
  "platform.xiaohongshu": "\u5C0F\u7EA2\u4E66",
  "platform.douyin": "\u6296\u97F3",
  "platform.facebook": "Facebook",
  "platform.wechat-channels": "\u89C6\u9891\u53F7"
};
var en = {
  "nav": "Accounts",
  "title": "Accounts",
  "loading": "Loading accounts\u2026",
  "needLogin": "Sign in to OmniMux to see connected accounts.",
  "needLoginHint": "Sign in under Settings \u2192 Profile.",
  "login": "Sign in",
  "empty": "No connected accounts yet.",
  "platform": "Platform",
  "group": "Group",
  "all": "All",
  "connect": "Connect account",
  "disconnect": "Disconnect",
  "platformHint": "Platform, e.g. tiktok",
  "close": "Close",
  "overview.connected": "Connected",
  "overview.needsAttention": "Needs reconnect",
  "overview.platforms": "Platforms",
  "overview.total": "Total accounts",
  "filter.search": "Search accounts, platforms, or groups",
  "filter.status": "Status",
  "filter.sort": "Sort by",
  "filter.viewGrid": "Grid view",
  "filter.viewTable": "Table view",
  "filter.direction": "Toggle sort direction",
  "filter.noResults": "No matching accounts",
  "sort.display_name": "Name",
  "sort.platform": "Platform",
  "sort.status": "Status",
  "sort.lastUsed": "Recently used",
  "status.active": "Active",
  "status.expiring": "Expiring soon",
  "status.expired": "Expired",
  "status.error": "Error",
  "card.agentUsable": "Agent usable",
  "card.agentUsableOn": "Agent usable, on",
  "card.agentUsableOff": "Agent usable, off",
  "card.lastUsed": "Last used {time}",
  "card.expiresIn": "Expires in {time}",
  "card.menu": "More actions",
  "card.confirmDisconnect": "Disconnect {name}? Agents will no longer be able to use this account.",
  "action.cancel": "Cancel",
  "connect.title": "Connect a new account",
  "connect.choosePlatform": "Choose a platform",
  "connect.comingSoon": "Coming soon",
  "connect.opened": "The authorization page has opened in your browser. Please finish there.",
  "connect.reopen": "Reopen the authorization page",
  "connect.waiting": "Waiting for authorization\u2026 This refreshes automatically once you finish.",
  "connect.done": "I've finished",
  "connect.connected": "Connected",
  "connect.failed": "Couldn't connect",
  "connect.retry": "Retry",
  "empty.title": "No accounts connected yet",
  "empty.description": "Agents need a connected account to call platform APIs.",
  "empty.cta": "Connect your first account",
  "empty.supportedTitle": "Supported",
  "empty.comingTitle": "Coming soon",
  "bulk.selected": "{count} selected",
  "bulk.selectAll": "Select all",
  "bulk.selectRow": "Select {name}",
  "bulk.disconnect": "Disconnect",
  "bulk.agentOn": "Enable Agent for all",
  "bulk.agentOff": "Disable Agent for all",
  "bulk.clear": "Clear selection",
  "bulk.confirmDisconnect": "Disconnect {count} accounts? Agents will no longer be able to use them.",
  "bulk.partialError": "{count} accounts failed",
  "bulk.done": "Bulk action complete",
  "platform.tiktok": "TikTok",
  "platform.instagram": "Instagram",
  "platform.youtube": "YouTube",
  "platform.x": "X",
  "platform.xiaohongshu": "Xiaohongshu",
  "platform.douyin": "Douyin",
  "platform.facebook": "Facebook",
  "platform.wechat-channels": "WeChat Channels"
};
var NS = "omnimux-accounts";

// src/client/stage-store.js
var PRODUCT_STAGE_EVENT = "dsh-product-stage";
var STAGE_ID = "omnimux-accounts";
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
var ICON = '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><circle cx="8" cy="5.2" r="2.4"/><path d="M3.4 13c.6-2.4 2.3-3.6 4.6-3.6s4 1.2 4.6 3.6" stroke-linecap="round"/></svg>';
var STYLES = `
.omnimux-accounts-entry {
  box-sizing: border-box; display: flex; align-items: center; gap: 6px; position: relative;
  width: calc(100% - 8px); height: 32px; margin: 0 4px; padding: 0 8px;
  border: none; border-radius: 8px; background: transparent;
  color: var(--dsw-alias-label-primary, inherit);
  font: var(--dsw-font-s-14, inherit); font-size: 14px; line-height: 20px;
  cursor: pointer; text-align: left;
}
.omnimux-accounts-entry:hover { background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,.12)); }
.omnimux-accounts-entry[data-active="true"] { background: var(--dsw-alias-interactive-bg-active, rgba(128,128,128,.18)); font-weight: 500; }
.omnimux-accounts-entry-icon { flex: none; display: inline-flex; width: 14px; height: 14px; align-items: center; justify-content: center; }
.omnimux-accounts-entry svg { display: block; width: 14px; height: 14px; }
.omnimux-accounts-entry-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 20px; }
`;
function paintLabel(entry, label) {
  entry.setAttribute("aria-label", label);
  const node = entry.querySelector(".omnimux-accounts-entry-label");
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
  entry.dataset.omnimuxAccountsEntry = "";
  entry.className = "omnimux-accounts-entry";
  entry.innerHTML = `<span class="omnimux-accounts-entry-icon">${ICON}</span><span class="omnimux-accounts-entry-label"></span>`;
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
    id: "omnimux-accounts-entry",
    rank: 3,
    styles: STYLES,
    styleId: "omnimux-accounts-entry-styles",
    create: () => entry
  });
  return () => {
    unregister();
    unsubscribeStage();
    unsubscribeLocale();
  };
}

// src/client/AccountsStage.jsx
var import_react6 = require("react");

// src/client/AccountsSection.jsx
var import_react5 = require("react");

// src/client/account-controls.jsx
var import_react = require("react");

// src/client/view.js
var STATUS_ORDER = Object.freeze({ active: 0, expiring: 1, expired: 2, error: 3 });
function matchesQuery(row, query) {
  if (query === "") return true;
  const hay = [row.display_name, row.username, row.name, row.platform, row.group, row.id].filter((value) => typeof value === "string").join(" ").toLocaleLowerCase();
  return hay.includes(query);
}
function filterAccounts(accounts, filters = {}) {
  const query = String(filters.query || "").trim().toLocaleLowerCase();
  const platform = String(filters.platform || "").trim().toLocaleLowerCase();
  const group = String(filters.group || "").trim().toLocaleLowerCase();
  const status = String(filters.status || "").trim().toLocaleLowerCase();
  return (Array.isArray(accounts) ? accounts : []).filter((row) => {
    if (!matchesQuery(row, query)) return false;
    if (platform && String(row.platform || "").toLocaleLowerCase() !== platform) return false;
    if (group && String(row.group || "").toLocaleLowerCase() !== group) return false;
    if (status && String(row.status || "").toLocaleLowerCase() !== status) return false;
    return true;
  });
}
function sortValue(row, key) {
  const value = row[key];
  if (key === "status") {
    const status = typeof value === "string" ? value : "";
    return STATUS_ORDER[status] ?? STATUS_ORDER.error;
  }
  return typeof value === "string" ? value.toLocaleLowerCase() : void 0;
}
function sortAccounts(accounts, key = "display_name", dir = "asc") {
  const rows = Array.isArray(accounts) ? [...accounts] : [];
  const effectiveKey = ["display_name", "platform", "status", "last_used_at", "connected_at"].includes(key) ? key : "display_name";
  const sign = dir === "desc" ? -1 : 1;
  const fallbackKey = effectiveKey === "display_name" ? "username" : "display_name";
  return rows.sort((a, b) => {
    const av = sortValue(a, effectiveKey) ?? sortValue(a, fallbackKey);
    const bv = sortValue(b, effectiveKey) ?? sortValue(b, fallbackKey);
    if (av === void 0 && bv === void 0) return 0;
    if (av === void 0) return 1;
    if (bv === void 0) return -1;
    if (av < bv) return -1 * sign;
    if (av > bv) return 1 * sign;
    return 0;
  });
}
function summarize(accounts) {
  const rows = Array.isArray(accounts) ? accounts : [];
  let connected = 0;
  let needsAttention = 0;
  const platforms = /* @__PURE__ */ new Set();
  for (const row of rows) {
    const status = String(row.status || "").toLowerCase();
    if (status === "active" || status === "expiring") connected += 1;
    if (status === "expired" || status === "error") needsAttention += 1;
    const platform = typeof row.platform === "string" ? row.platform.trim() : "";
    if (platform !== "") platforms.add(platform.toLocaleLowerCase());
  }
  return {
    total: rows.length,
    connected,
    needsAttention,
    platformCount: platforms.size
  };
}
function resolveUiLocale(override) {
  const raw = typeof override === "string" && override.trim() !== "" ? override.trim() : typeof document !== "undefined" && document.documentElement?.lang ? document.documentElement.lang : typeof navigator !== "undefined" ? navigator.language : "en";
  const lower = String(raw || "en").toLowerCase();
  if (lower === "zh" || lower.startsWith("zh-")) return "zh-CN";
  if (lower === "en" || lower.startsWith("en-")) return "en";
  return raw;
}
function relativeTime(iso, now = Date.now(), locale) {
  if (typeof iso !== "string" || iso === "") return "";
  const then = Date.parse(iso);
  if (!Number.isFinite(then)) return "";
  const base = now instanceof Date ? now.getTime() : now;
  const diffMs = then - base;
  const abs = Math.abs(diffMs);
  const formatter = new Intl.RelativeTimeFormat(resolveUiLocale(locale), { numeric: "auto" });
  if (abs < 60 * 1e3) return formatter.format(Math.round(diffMs / 1e3), "second");
  if (abs < 60 * 60 * 1e3) return formatter.format(Math.round(diffMs / (60 * 1e3)), "minute");
  if (abs < 24 * 60 * 60 * 1e3) return formatter.format(Math.round(diffMs / (60 * 60 * 1e3)), "hour");
  return formatter.format(Math.round(diffMs / (24 * 60 * 60 * 1e3)), "day");
}
function uniqueValues(accounts, key) {
  const seen = /* @__PURE__ */ new Set();
  const values = [];
  for (const row of Array.isArray(accounts) ? accounts : []) {
    const value = typeof row[key] === "string" ? (
      /** @type {string} */
      row[key].trim()
    ) : "";
    if (value === "" || seen.has(value)) continue;
    seen.add(value);
    values.push(value);
  }
  return values.sort((a, b) => a.localeCompare(b));
}
function presentStatuses(accounts) {
  const present = /* @__PURE__ */ new Set();
  for (const row of Array.isArray(accounts) ? accounts : []) {
    const status = String(row.status || "").toLowerCase();
    if (status !== "") present.add(status);
  }
  return ["active", "expiring", "expired", "error"].filter((status) => present.has(status));
}
function fmt(template, vars) {
  return String(template).replace(/\{(\w+)\}/g, (whole, key) => key in vars ? String(vars[key]) : whole);
}
function localeText(t, key, fallback) {
  const value = t(key);
  return typeof value === "string" && value !== "" && value !== key ? value : fallback;
}
function selectAllState(accounts, selectedIds) {
  const rows = Array.isArray(accounts) ? accounts : [];
  const ids = selectedIds instanceof Set ? selectedIds : /* @__PURE__ */ new Set();
  let hit = 0;
  for (const row of rows) {
    if (ids.has(String(row.id))) hit += 1;
  }
  return {
    all: rows.length > 0 && hit === rows.length,
    some: hit > 0,
    count: hit
  };
}

// src/client/account-controls.jsx
var import_jsx_runtime = require("react/jsx-runtime");
function AgentSwitch({ t, checked, disabled = false, onToggle }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "button",
    {
      type: "button",
      role: "switch",
      className: "omnimux-accounts-switch",
      "aria-checked": String(checked),
      "aria-label": checked ? t("card.agentUsableOn") : t("card.agentUsableOff"),
      disabled,
      onClick: () => {
        onToggle(!checked);
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "omnimux-accounts-switch-knob" })
    }
  );
}
function AccountMenu({ t, name: name2, disabled = false, onDisconnect }) {
  const [popover, setPopover] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    if (popover === null) return void 0;
    const onPointerDown = (event) => {
      const target = event.target;
      if (target instanceof Element && target.closest("[data-omnimux-accounts-popover]") !== null) return;
      setPopover(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [popover]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "button",
      {
        type: "button",
        className: "omnimux-accounts-more",
        "aria-label": t("card.menu"),
        "aria-haspopup": "menu",
        "aria-expanded": popover !== null,
        disabled,
        onClick: (event) => {
          event.stopPropagation();
          setPopover(popover === null ? "menu" : null);
        },
        children: "\u22EF"
      }
    ),
    popover === "menu" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { "data-omnimux-accounts-popover": "", role: "menu", className: "omnimux-accounts-popover", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "button",
      {
        type: "button",
        role: "menuitem",
        className: "omnimux-accounts-menuitem omnimux-accounts-menuitem--danger",
        disabled,
        onClick: () => {
          setPopover("confirm");
        },
        children: t("disconnect")
      }
    ) }) : null,
    popover === "confirm" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { "data-omnimux-accounts-popover": "", role: "dialog", className: "omnimux-accounts-popover", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "omnimux-accounts-popover-text", children: fmt(t("card.confirmDisconnect"), { name: name2 }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "omnimux-accounts-popover-actions", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "button",
          {
            type: "button",
            className: "omnimux-accounts-btn omnimux-accounts-btn--danger",
            disabled,
            onClick: () => {
              setPopover(null);
              onDisconnect();
            },
            children: t("disconnect")
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", className: "omnimux-accounts-btn", onClick: () => {
          setPopover(null);
        }, children: t("action.cancel") })
      ] })
    ] }) : null
  ] });
}

// src/client/chips.jsx
var import_react2 = require("react");

// src/client/platforms.js
var SUPPORTED_PLATFORMS = Object.freeze(["tiktok", "instagram", "youtube"]);
var COMING_PLATFORMS = Object.freeze(["x", "xiaohongshu", "douyin", "facebook", "wechat-channels"]);
var NEUTRAL_COLOR = "var(--dsw-alias-label-secondary, rgba(255,255,255,0.72))";
var REGISTRY = {
  tiktok: { id: "tiktok", color: "#2C2C2A", tone: "solid", coming: false },
  instagram: { id: "instagram", color: "#E1306C", tone: "accent", coming: false },
  youtube: { id: "youtube", color: "#FF0000", tone: "accent", coming: false },
  x: { id: "x", color: "#2C2C2A", tone: "solid", coming: true },
  xiaohongshu: { id: "xiaohongshu", color: NEUTRAL_COLOR, tone: "accent", coming: true },
  douyin: { id: "douyin", color: NEUTRAL_COLOR, tone: "accent", coming: true },
  facebook: { id: "facebook", color: NEUTRAL_COLOR, tone: "accent", coming: true },
  "wechat-channels": { id: "wechat-channels", color: NEUTRAL_COLOR, tone: "accent", coming: true }
};
function platformInfo(platform) {
  const id = typeof platform === "string" ? platform.trim().toLowerCase() : "";
  return REGISTRY[id] ?? { id: id || "unknown", color: NEUTRAL_COLOR, tone: "accent", coming: false };
}

// src/client/chips.jsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var KNOWN_STATUSES = Object.freeze(["active", "expiring", "expired", "error"]);
function StatusDot({ status, label = "" }) {
  const safe = KNOWN_STATUSES.includes(
    /** @type {string} */
    status
  ) ? (
    /** @type {'active' | 'expiring' | 'expired' | 'error'} */
    status
  ) : "error";
  const text = label !== "" ? label : safe;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "span",
    {
      role: "img",
      "aria-label": text,
      title: text,
      className: `omnimux-accounts-dot omnimux-accounts-dot--${safe}`
    }
  );
}
function PlatformChip({ platform, t }) {
  const info = platformInfo(platform);
  const label = localeText(t, `platform.${info.id}`, String(platform || info.id));
  if (info.tone === "solid") {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "omnimux-accounts-chip omnimux-accounts-chip--solid", children: label });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "span",
    {
      className: "omnimux-accounts-chip omnimux-accounts-chip--accent",
      style: { "--dsw-accounts-platform-color": info.color },
      children: label
    }
  );
}
function GroupChip({ group }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "omnimux-accounts-chip omnimux-accounts-chip--group", children: group });
}
function Avatar({ account, t }) {
  const [failed, setFailed] = (0, import_react2.useState)(false);
  const url = typeof account.avatar_url === "string" ? account.avatar_url : "";
  const info = platformInfo(account.platform);
  const platformLabel = localeText(t, `platform.${info.id}`, String(account.platform || ""));
  const initial = (platformLabel || "?").charAt(0).toLocaleUpperCase() || "?";
  if (url && !failed) {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "img",
      {
        className: "omnimux-accounts-avatar",
        src: url,
        alt: "",
        loading: "lazy",
        onError: () => {
          setFailed(true);
        }
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "omnimux-accounts-avatar-fallback", "aria-hidden": "true", children: initial });
}

// src/client/AccountCard.jsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function AccountCard({ t, account, busy = "", onAgentToggle, onDisconnect }) {
  const id = String(account.id);
  const name2 = [account.display_name, account.username, account.name].find((value) => typeof value === "string" && value !== "") || id;
  const username = typeof account.username === "string" && account.username !== "" ? `@${account.username}` : "";
  const status = typeof account.status === "string" ? account.status : "";
  const statusLabel = localeText(t, `status.${status}`, status);
  const agentUsable = account.agent_usable !== false;
  const lastUsed = typeof account.last_used_at === "string" ? relativeTime(account.last_used_at) : "";
  const expiresSoon = status === "expiring" && typeof account.expires_at === "string";
  const disabled = busy !== "";
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("article", { className: "omnimux-accounts-card", "data-busy": busy === id, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "omnimux-accounts-card-head", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Avatar, { account, t }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "omnimux-accounts-id", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h3", { className: "omnimux-accounts-name", children: name2 }),
        username !== "" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "omnimux-accounts-username", children: username }) : null
      ] })
    ] }),
    typeof account.platform === "string" || typeof account.group === "string" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "omnimux-accounts-chips", children: [
      typeof account.platform === "string" && account.platform !== "" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(PlatformChip, { platform: account.platform, t }) : null,
      typeof account.group === "string" && account.group !== "" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(GroupChip, { group: account.group }) : null
    ] }) : null,
    status !== "" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: `omnimux-accounts-status omnimux-accounts-status--${status}`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(StatusDot, { status, label: statusLabel }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { children: statusLabel }),
      expiresSoon ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { children: [
        " \xB7 ",
        fmt(t("card.expiresIn"), { time: relativeTime(account.expires_at) })
      ] }) : null
    ] }) : null,
    lastUsed !== "" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "omnimux-accounts-meta", children: fmt(t("card.lastUsed"), { time: lastUsed }) }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "omnimux-accounts-switchrow", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        AgentSwitch,
        {
          t,
          checked: agentUsable,
          disabled,
          onToggle: (next) => {
            onAgentToggle(id, next);
          }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "omnimux-accounts-switch-label", children: t("card.agentUsable") })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(AccountMenu, { t, name: name2, disabled, onDisconnect: () => {
      onDisconnect(id);
    } })
  ] });
}

// src/client/AccountTable.jsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var COLUMNS = [
  { id: "name", labelKey: "sort.display_name", sortKey: "display_name" },
  { id: "platform", labelKey: "sort.platform", sortKey: "platform" },
  { id: "group", labelKey: "group", sortKey: null },
  { id: "status", labelKey: "sort.status", sortKey: "status" },
  { id: "lastUsed", labelKey: "sort.lastUsed", sortKey: "last_used_at" }
];
function AccountTable(props) {
  const { t, accounts, selected, sortKey, sortDir, busy = "", onSortHeader, onToggleSelect, onToggleSelectAll, onAgentToggle, onDisconnect } = props;
  const disabled = busy !== "";
  const checkState = selectAllState(accounts, selected);
  const rowName = (account) => [account.display_name, account.username, account.name].find((value) => typeof value === "string" && value !== "") || String(account.id);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "omnimux-accounts-tablewrap", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("table", { className: "omnimux-accounts-table", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("tr", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("th", { scope: "col", className: "omnimux-accounts-table-check", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "input",
        {
          type: "checkbox",
          checked: checkState.all,
          ref: (node) => {
            if (node) node.indeterminate = checkState.some && !checkState.all;
          },
          "aria-label": t("bulk.selectAll"),
          disabled: disabled || accounts.length === 0,
          onChange: onToggleSelectAll
        }
      ) }),
      COLUMNS.map((column) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "th",
        {
          scope: "col",
          "aria-sort": column.sortKey && sortKey === column.sortKey ? sortDir === "asc" ? "ascending" : "descending" : "none",
          children: column.sortKey ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
            "button",
            {
              type: "button",
              className: "omnimux-accounts-sortbtn",
              disabled,
              onClick: () => {
                onSortHeader(column.sortKey);
              },
              children: [
                t(column.labelKey),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "omnimux-accounts-sortmark", "aria-hidden": "true", children: sortKey === column.sortKey ? sortDir === "asc" ? "\u2191" : "\u2193" : "\u2195" })
              ]
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "omnimux-accounts-thtext", children: t(column.labelKey) })
        },
        column.id
      )),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("th", { scope: "col", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "omnimux-accounts-thtext", children: t("card.agentUsable") }) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("th", { scope: "col", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "omnimux-accounts-thtext", children: t("card.menu") }) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("tbody", { children: accounts.map((account) => {
      const id = String(account.id);
      const name2 = rowName(account);
      const username = typeof account.username === "string" && account.username !== "" ? `@${account.username}` : "";
      const status = typeof account.status === "string" ? account.status : "";
      const statusLabel = localeText(t, `status.${status}`, status);
      const lastUsed = typeof account.last_used_at === "string" ? relativeTime(account.last_used_at) : "";
      const isSelected = selected.has(id);
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("tr", { className: isSelected ? "omnimux-accounts-row-selected" : void 0, "data-busy": disabled, children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("td", { className: "omnimux-accounts-table-check", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "input",
          {
            type: "checkbox",
            checked: isSelected,
            "aria-label": fmt(t("bulk.selectRow"), { name: name2 }),
            disabled,
            onChange: () => {
              onToggleSelect(id);
            }
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "omnimux-accounts-cell-id", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Avatar, { account, t }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "omnimux-accounts-id", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "omnimux-accounts-name", children: name2 }),
            username !== "" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "omnimux-accounts-username", children: username }) : null
          ] })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("td", { children: typeof account.platform === "string" && account.platform !== "" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(PlatformChip, { platform: account.platform, t }) : null }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("td", { children: typeof account.group === "string" && account.group !== "" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(GroupChip, { group: account.group }) : null }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("td", { children: status !== "" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: `omnimux-accounts-status omnimux-accounts-status--${status}`, children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(StatusDot, { status, label: statusLabel }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: statusLabel })
        ] }) : null }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("td", { children: lastUsed !== "" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "omnimux-accounts-meta", children: lastUsed }) : null }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          AgentSwitch,
          {
            t,
            checked: account.agent_usable !== false,
            disabled,
            onToggle: (next) => {
              onAgentToggle(id, next);
            }
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "omnimux-accounts-cellmenu", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(AccountMenu, { t, name: name2, disabled, onDisconnect: () => {
          onDisconnect(id);
        } }) }) })
      ] }, id);
    }) })
  ] }) });
}

// src/client/ConnectModal.jsx
var import_react3 = require("react");

// src/client/api.js
async function accountsRequest(path, opts = {}) {
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
function listAccounts(filters = {}) {
  const query = new URLSearchParams();
  if (filters.platform) query.set("platform", filters.platform);
  if (filters.group) query.set("group", filters.group);
  const suffix = query.toString() ? `?${query}` : "";
  return accountsRequest(`/omnimux/accounts${suffix}`);
}
var connectAccount = authGuard((platform) => accountsRequest("/omnimux/accounts", { method: "POST", body: { platform } }));
var disconnectAccount = authGuard((id) => accountsRequest(`/omnimux/accounts/${encodeURIComponent(id)}`, { method: "DELETE" }));
var patchAccount = authGuard((id, body) => accountsRequest(`/omnimux/accounts/${encodeURIComponent(id)}`, { method: "PATCH", body }));

// src/client/ConnectModal.jsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function ConnectModal({ t, watchConnect, onClose, onConnected }) {
  const [phase, setPhase] = (0, import_react3.useState)("select");
  const [platform, setPlatform] = (0, import_react3.useState)("");
  const [authUrl, setAuthUrl] = (0, import_react3.useState)("");
  const [error, setError] = (0, import_react3.useState)("");
  const firstPlatformRef = (0, import_react3.useRef)(null);
  const stopRef = (0, import_react3.useRef)(null);
  (0, import_react3.useEffect)(() => {
    firstPlatformRef.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        handleClose();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);
  (0, import_react3.useEffect)(() => () => {
    const stop = stopRef.current;
    stopRef.current = null;
    if (stop) stop();
  }, []);
  function handleClose() {
    const stop = stopRef.current;
    stopRef.current = null;
    if (stop) stop();
    onClose();
  }
  async function startConnect(id) {
    setPlatform(id);
    setPhase("opening");
    setError("");
    setAuthUrl("");
    try {
      const result = await connectAccount(id);
      if (result.status === 401) {
        handleClose();
        return;
      }
      if (!result.ok) {
        setError(String(result.body && typeof result.body === "object" && result.body.error || `HTTP ${String(result.status)}`));
        setPhase("error");
        return;
      }
      const body = result.body && typeof result.body === "object" ? (
        /** @type {Record<string, unknown>} */
        result.body
      ) : {};
      const url = typeof body.auth_url === "string" && /^https:\/\//i.test(body.auth_url) ? body.auth_url : "";
      setAuthUrl(url);
      if (url) window.open(url, "_blank", "noopener,noreferrer");
      setPhase("waiting");
      stopRef.current = watchConnect(id, (row) => {
        stopRef.current = null;
        onConnected(row);
      });
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : String(caught));
      setPhase("error");
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "omnimux-accounts-modal-overlay", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    "div",
    {
      role: "dialog",
      "aria-modal": "true",
      "aria-label": t("connect.title"),
      className: "omnimux-accounts-modal",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "omnimux-accounts-modal-head", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "omnimux-accounts-modal-title", children: t("connect.title") }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "button",
            {
              type: "button",
              className: "omnimux-accounts-modal-close",
              "aria-label": t("close"),
              onClick: handleClose,
              children: "\xD7"
            }
          )
        ] }),
        phase === "select" || phase === "opening" ? /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "omnimux-accounts-modal-body", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "omnimux-accounts-muted", children: t("connect.choosePlatform") }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "omnimux-accounts-platform-grid", children: [
            SUPPORTED_PLATFORMS.map((id, index) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
              "button",
              {
                type: "button",
                ref: index === 0 ? firstPlatformRef : void 0,
                className: "omnimux-accounts-platform-btn",
                disabled: phase === "opening",
                onClick: () => {
                  void startConnect(id);
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(PlatformChip, { platform: id, t }),
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "omnimux-accounts-platform-name", children: localeText(t, `platform.${id}`, id) })
                ]
              },
              id
            )),
            COMING_PLATFORMS.map((id) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "omnimux-accounts-platform-btn omnimux-accounts-platform-btn--coming", children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(PlatformChip, { platform: id, t }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "omnimux-accounts-platform-name", children: localeText(t, `platform.${id}`, id) }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "omnimux-accounts-platform-soon", children: t("connect.comingSoon") })
            ] }, id))
          ] })
        ] }) : null,
        phase === "waiting" ? /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "omnimux-accounts-modal-body", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "omnimux-accounts-modal-text", children: t("connect.opened") }),
          authUrl !== "" ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "button",
            {
              type: "button",
              className: "omnimux-accounts-btn omnimux-accounts-modal-link",
              onClick: () => {
                window.open(authUrl, "_blank", "noopener,noreferrer");
              },
              children: t("connect.reopen")
            }
          ) : null,
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "omnimux-accounts-muted", children: t("connect.waiting") }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "omnimux-accounts-modal-actions", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { type: "button", className: "omnimux-accounts-btn", onClick: handleClose, children: t("action.cancel") }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              "button",
              {
                type: "button",
                className: "omnimux-accounts-btn omnimux-accounts-btn--primary",
                onClick: handleClose,
                children: t("connect.done")
              }
            )
          ] })
        ] }) : null,
        phase === "error" ? /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "omnimux-accounts-modal-body", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("p", { className: "omnimux-accounts-error", role: "alert", children: [
            t("connect.failed"),
            error !== "" ? `\uFF1A${error}` : ""
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "omnimux-accounts-modal-actions", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("button", { type: "button", className: "omnimux-accounts-btn", onClick: handleClose, children: t("action.cancel") }),
            platform !== "" ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              "button",
              {
                type: "button",
                className: "omnimux-accounts-btn omnimux-accounts-btn--primary",
                onClick: () => {
                  void startConnect(platform);
                },
                children: t("connect.retry")
              }
            ) : null
          ] })
        ] }) : null
      ]
    }
  ) });
}

// src/client/EmptyState.jsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function EmptyState({ t, onConnect, busy = "" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "omnimux-accounts-empty", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
      "svg",
      {
        className: "omnimux-accounts-empty-icon",
        viewBox: "0 0 120 96",
        width: "120",
        height: "96",
        "aria-hidden": "true",
        focusable: "false",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("g", { fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", opacity: "0.9", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("circle", { cx: "60", cy: "48", r: "14" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("circle", { cx: "60", cy: "48", r: "24", opacity: "0.35", strokeDasharray: "3 5" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("circle", { cx: "60", cy: "48", r: "38", opacity: "0.2", strokeDasharray: "3 6" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M60 34 L26 16 M72 40 L96 24 M68 60 L98 76 M50 60 L22 78", opacity: "0.55" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("g", { fill: "currentColor", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("circle", { cx: "60", cy: "48", r: "5" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("circle", { cx: "26", cy: "16", r: "4", opacity: "0.8" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("circle", { cx: "96", cy: "24", r: "4", opacity: "0.8" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("circle", { cx: "98", cy: "76", r: "4", opacity: "0.55" }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("circle", { cx: "22", cy: "78", r: "4", opacity: "0.55" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h2", { className: "omnimux-accounts-empty-title", children: t("empty.title") }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "omnimux-accounts-empty-text", children: t("empty.description") }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      "button",
      {
        type: "button",
        className: "omnimux-accounts-btn omnimux-accounts-btn--primary",
        disabled: busy !== "",
        onClick: onConnect,
        children: t("empty.cta")
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "omnimux-accounts-empty-platforms", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "omnimux-accounts-empty-group", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "omnimux-accounts-empty-grouptitle", children: t("empty.supportedTitle") }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "omnimux-accounts-chips", children: SUPPORTED_PLATFORMS.map((id) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(PlatformChip, { platform: id, t }, id)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "omnimux-accounts-empty-group", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "omnimux-accounts-empty-grouptitle", children: t("empty.comingTitle") }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "omnimux-accounts-chips", children: COMING_PLATFORMS.map((id) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("span", { className: "omnimux-accounts-empty-soonchip", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(PlatformChip, { platform: id, t }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "omnimux-accounts-platform-soon", children: t("connect.comingSoon") })
        ] }, id)) })
      ] })
    ] })
  ] });
}

// src/client/FilterBar.jsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function FilterBar(props) {
  const { t, query, platform, group, status, sortKey, sortDir, view, platforms, groups, statuses, onFilterChange, onSortChange, onViewChange, busy = "" } = props;
  const disabled = busy !== "";
  const sortOptions = [
    { key: "display_name", label: t("sort.display_name") },
    { key: "platform", label: t("sort.platform") },
    { key: "status", label: t("sort.status") },
    { key: "last_used_at", label: t("sort.lastUsed") }
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "omnimux-accounts-filterbar", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "input",
      {
        type: "search",
        className: "omnimux-accounts-search",
        value: query,
        placeholder: t("filter.search"),
        "aria-label": t("filter.search"),
        disabled,
        onChange: (event) => {
          onFilterChange({ query: event.currentTarget.value });
        }
      }
    ),
    platforms.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
      "select",
      {
        className: "omnimux-accounts-select",
        value: platform,
        "aria-label": t("platform"),
        disabled,
        onChange: (event) => {
          onFilterChange({ platform: event.currentTarget.value });
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("option", { value: "", children: [
            t("platform"),
            " \xB7 ",
            t("all")
          ] }),
          platforms.map((value) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value, children: value }, value))
        ]
      }
    ) : null,
    groups.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
      "select",
      {
        className: "omnimux-accounts-select",
        value: group,
        "aria-label": t("group"),
        disabled,
        onChange: (event) => {
          onFilterChange({ group: event.currentTarget.value });
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("option", { value: "", children: [
            t("group"),
            " \xB7 ",
            t("all")
          ] }),
          groups.map((value) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value, children: value }, value))
        ]
      }
    ) : null,
    statuses.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
      "select",
      {
        className: "omnimux-accounts-select",
        value: status,
        "aria-label": t("filter.status"),
        disabled,
        onChange: (event) => {
          onFilterChange({ status: event.currentTarget.value });
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("option", { value: "", children: [
            t("filter.status"),
            " \xB7 ",
            t("all")
          ] }),
          statuses.map((value) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value, children: t(`status.${value}`) }, value))
        ]
      }
    ) : null,
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "select",
      {
        className: "omnimux-accounts-select",
        value: sortKey,
        "aria-label": t("filter.sort"),
        disabled,
        onChange: (event) => {
          onSortChange({ key: event.currentTarget.value });
        },
        children: sortOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("option", { value: option.key, children: option.label }, option.key))
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "button",
      {
        type: "button",
        className: "omnimux-accounts-iconbtn",
        "aria-label": t("filter.direction"),
        "aria-pressed": sortDir === "desc",
        disabled,
        onClick: () => {
          onSortChange({ dir: sortDir === "asc" ? "desc" : "asc" });
        },
        children: sortDir === "asc" ? "\u2191" : "\u2193"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "button",
      {
        type: "button",
        className: "omnimux-accounts-iconbtn",
        "aria-label": t("filter.viewGrid"),
        title: t("filter.viewGrid"),
        "aria-pressed": view === "grid",
        disabled,
        onClick: () => {
          onViewChange("grid");
        },
        children: "\u229E"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "button",
      {
        type: "button",
        className: "omnimux-accounts-iconbtn",
        "aria-label": t("filter.viewTable"),
        title: t("filter.viewTable"),
        "aria-pressed": view === "table",
        disabled,
        onClick: () => {
          onViewChange("table");
        },
        children: "\u2263"
      }
    )
  ] });
}

// src/client/OverviewBar.jsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function OverviewBar({ t, summary, onFilterClick, busy = "" }) {
  const stats = [
    { key: "connected", label: t("overview.connected"), value: summary.connected, filter: { status: "active" } },
    { key: "needsAttention", label: t("overview.needsAttention"), value: summary.needsAttention, filter: { status: "expired" } },
    { key: "platforms", label: t("overview.platforms"), value: summary.platformCount, filter: { platform: "" } },
    { key: "total", label: t("overview.total"), value: summary.total, filter: null }
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "omnimux-accounts-overview-row", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "omnimux-accounts-overview", children: stats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
    "button",
    {
      type: "button",
      className: "omnimux-accounts-stat",
      disabled: busy !== "",
      onClick: () => {
        onFilterClick(stat.filter);
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "omnimux-accounts-stat-value", children: String(stat.value) }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "omnimux-accounts-stat-label", children: stat.label })
      ]
    },
    stat.key
  )) }) });
}

// src/client/use-accounts.js
var import_react4 = require("react");
var WATCH_POLL_MS = 5e3;
var sessionCache = { phase: "loading", accounts: [] };
function useAccounts() {
  const [phase, setPhase] = (0, import_react4.useState)(sessionCache.phase);
  const [accounts, setAccounts] = (0, import_react4.useState)(sessionCache.accounts);
  const [error, setError] = (0, import_react4.useState)("");
  const [busy, setBusy] = (0, import_react4.useState)("");
  const accountsRef = (0, import_react4.useRef)(sessionCache.accounts);
  const watchRef = (0, import_react4.useRef)(null);
  const commitAccounts = (0, import_react4.useCallback)((next) => {
    const rows = Array.isArray(next) ? next : [];
    accountsRef.current = rows;
    sessionCache.accounts = rows;
    setAccounts(rows);
  }, []);
  const applyListResult = (0, import_react4.useCallback)((result) => {
    if (result.status === 401) {
      sessionCache.phase = "need-login";
      setPhase("need-login");
      commitAccounts([]);
      return true;
    }
    if (!result.ok) {
      setError(String(result.body && typeof result.body === "object" && result.body.error || `HTTP ${String(result.status)}`));
      sessionCache.phase = "ready";
      setPhase("ready");
      return true;
    }
    const body = result.body && typeof result.body === "object" ? (
      /** @type {Record<string, unknown>} */
      result.body
    ) : {};
    setError("");
    commitAccounts(Array.isArray(body.accounts) ? body.accounts : []);
    sessionCache.phase = "ready";
    setPhase("ready");
    return true;
  }, [commitAccounts]);
  const refresh = (0, import_react4.useCallback)(() => {
    return listAccounts().then(applyListResult).catch((caught) => {
      setError(caught instanceof Error ? caught.message : String(caught));
      sessionCache.phase = "ready";
      setPhase("ready");
      return true;
    });
  }, [applyListResult]);
  (0, import_react4.useEffect)(() => {
    void refresh();
  }, [refresh]);
  const stopWatch = (0, import_react4.useCallback)(() => {
    const watch = watchRef.current;
    watchRef.current = null;
    if (watch) watch.stop();
  }, []);
  const watchConnect = (0, import_react4.useCallback)((platform, onChange) => {
    stopWatch();
    const key = String(platform || "").toLowerCase();
    const baselineIds = new Set(accountsRef.current.map((row) => String(row.id)));
    const baselineCount = accountsRef.current.filter((row) => String(row.platform || "").toLowerCase() === key).length;
    let stopped = false;
    let timer = 0;
    const stop = () => {
      if (stopped) return;
      stopped = true;
      if (timer) {
        clearTimeout(timer);
        timer = 0;
      }
      if (watchRef.current && watchRef.current.stop === stop) watchRef.current = null;
    };
    watchRef.current = { stop };
    const poll = async () => {
      if (stopped) return;
      try {
        const result = await listAccounts();
        if (stopped) return;
        if (result.ok && result.status === 200) {
          const body = result.body && typeof result.body === "object" ? (
            /** @type {Record<string, unknown>} */
            result.body
          ) : {};
          const rows = Array.isArray(body.accounts) ? body.accounts : [];
          let fresh = null;
          let count = 0;
          for (const row of rows) {
            if (String(row.platform || "").toLowerCase() === key) count += 1;
            const id = String(row.id);
            if (!baselineIds.has(id) && fresh === null) fresh = row;
          }
          if (fresh !== null || count > baselineCount) {
            stop();
            onChange(fresh);
            return;
          }
        }
      } catch {
      }
      if (!stopped) timer = setTimeout(() => {
        void poll();
      }, WATCH_POLL_MS);
    };
    timer = setTimeout(() => {
      void poll();
    }, WATCH_POLL_MS);
    return stop;
  }, [stopWatch]);
  (0, import_react4.useEffect)(() => () => {
    stopWatch();
  }, [stopWatch]);
  const patch = (0, import_react4.useCallback)((id, body) => {
    const key = String(id);
    const previous = accountsRef.current;
    const target = previous.find((row) => String(row.id) === key);
    if (!target) return Promise.resolve(false);
    const optimistic = { ...target };
    if ("group" in body) {
      if (body.group === null || body.group === "") delete optimistic.group;
      else optimistic.group = body.group;
    }
    if (typeof body.agent_usable === "boolean") optimistic.agent_usable = body.agent_usable;
    commitAccounts(previous.map((row) => String(row.id) === key ? optimistic : row));
    return patchAccount(key, body).then((result) => {
      if (result.status === 401) {
        sessionCache.phase = "need-login";
        setPhase("need-login");
        return false;
      }
      if (!result.ok) {
        commitAccounts(previous);
        setError(String(result.body && typeof result.body === "object" && result.body.error || `HTTP ${String(result.status)}`));
        return false;
      }
      const raw = result.body && typeof result.body === "object" ? (
        /** @type {Record<string, unknown>} */
        result.body
      ) : {};
      const bodyRow = raw.account && typeof raw.account === "object" ? (
        /** @type {Record<string, unknown>} */
        raw.account
      ) : null;
      if (bodyRow) {
        commitAccounts(accountsRef.current.map((row) => String(row.id) === key ? bodyRow : row));
      }
      return true;
    }).catch((caught) => {
      commitAccounts(previous);
      setError(caught instanceof Error ? caught.message : String(caught));
      return false;
    });
  }, [commitAccounts]);
  const disconnect = (0, import_react4.useCallback)((id) => {
    const key = String(id);
    setBusy(key);
    setError("");
    return disconnectAccount(key).then((result) => {
      if (result.status === 401) {
        sessionCache.phase = "need-login";
        setPhase("need-login");
        return false;
      }
      if (!result.ok) {
        setError(String(result.body && typeof result.body === "object" && result.body.error || `HTTP ${String(result.status)}`));
        return false;
      }
      commitAccounts(accountsRef.current.filter((row) => String(row.id) !== key));
      return true;
    }).catch((caught) => {
      setError(caught instanceof Error ? caught.message : String(caught));
      return false;
    }).finally(() => {
      setBusy("");
    });
  }, [commitAccounts]);
  return { phase, accounts, error, busy, refresh, watchConnect, patch, disconnect };
}

// src/client/styles.js
var STYLES2 = `
.omnimux-accounts-root {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 20px 24px;
  color: var(--dsw-alias-label-primary, var(--dsw-text-primary, inherit));
}
.omnimux-accounts-root *,
.omnimux-accounts-root *::before,
.omnimux-accounts-root *::after { box-sizing: border-box; }

/* ---------- overview bar ---------- */
.omnimux-accounts-overview {
  flex: 1 1 auto;
  min-width: 0; /* allow the auto-fill grid to compute more than one 160px track inside the flex row */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 12px;
  align-items: stretch;
}
.omnimux-accounts-stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 16px;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.08));
  border-radius: 12px;
  background: var(--dsw-alias-bg-secondary, rgba(255,255,255,0.04));
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}
.omnimux-accounts-stat:hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.12));
}
.omnimux-accounts-stat:active {
  background: var(--dsw-alias-interactive-bg-active, rgba(128,128,128,0.18));
}
.omnimux-accounts-stat:disabled { cursor: default; opacity: 0.6; }
.omnimux-accounts-stat-value {
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
}
.omnimux-accounts-stat-label {
  font-size: 12px;
  line-height: 16px;
  color: var(--dsw-alias-label-secondary, rgba(255,255,255,0.72));
}
.omnimux-accounts-overview-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
}
.omnimux-accounts-toolbar {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 12px;
}
.omnimux-accounts-cta {
  margin-left: auto; /* sit at the right end of the toolbar row, after the filter controls */
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  min-width: 120px;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.12));
  border-radius: 10px;
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.18));
  color: var(--dsw-alias-label-primary, inherit);
  font: inherit;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}
.omnimux-accounts-cta:hover {
  background: var(--dsw-alias-interactive-bg-active, rgba(128,128,128,0.26));
}
.omnimux-accounts-cta:disabled {
  cursor: default;
  opacity: 0.6;
}

/* ---------- filter bar ---------- */
.omnimux-accounts-filterbar {
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
  background: var(--dsw-alias-bg-primary, var(--dsw-bg, #111));
}
.omnimux-accounts-search {
  flex: 0 1 240px;
  min-width: 160px;
  height: 32px;
  padding: 0 10px;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.12));
  border-radius: 8px;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 13px;
}
.omnimux-accounts-select {
  height: 32px;
  padding: 0 8px;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.12));
  border-radius: 8px;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 13px;
  cursor: pointer;
}
.omnimux-accounts-select:disabled { cursor: default; opacity: 0.5; }
.omnimux-accounts-iconbtn {
  display: inline-grid;
  place-items: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.12));
  border-radius: 8px;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
}
.omnimux-accounts-iconbtn:disabled { cursor: default; opacity: 0.45; }
.omnimux-accounts-iconbtn:not(:disabled):hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.12));
}
.omnimux-accounts-iconbtn[aria-pressed="true"] {
  background: var(--dsw-alias-interactive-bg-active, rgba(128,128,128,0.18));
}

/* ---------- card grid ---------- */
.omnimux-accounts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  align-items: stretch;
  gap: 12px;
}
.omnimux-accounts-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 168px;
  padding: 16px;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.08));
  border-radius: 12px;
  background: var(--dsw-alias-bg-secondary, rgba(255,255,255,0.04));
}
.omnimux-accounts-card:hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.08));
}
.omnimux-accounts-card[data-busy="true"] { opacity: 0.6; }
.omnimux-accounts-card-head {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
  padding-right: 32px; /* keep the title clear of the \u22EF button */
}
.omnimux-accounts-avatar {
  flex: 0 0 auto;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  object-fit: cover;
  display: block;
}
.omnimux-accounts-avatar-fallback {
  flex: 0 0 auto;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.18));
  color: var(--dsw-alias-label-primary, inherit);
  font-size: 16px;
  font-weight: 600;
  user-select: none;
}
.omnimux-accounts-id {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}
.omnimux-accounts-name {
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.omnimux-accounts-username {
  margin: 0;
  font-size: 12px;
  line-height: 16px;
  color: var(--dsw-alias-label-secondary, rgba(255,255,255,0.72));
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.omnimux-accounts-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.omnimux-accounts-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 11px;
  line-height: 16px;
  white-space: nowrap;
}
.omnimux-accounts-chip--solid {
  background: #2C2C2A;
  color: #fff;
}
.omnimux-accounts-chip--accent {
  background: color-mix(in srgb, var(--dsw-accounts-platform-color, rgba(128,128,128,1)) 16%, transparent);
  color: var(--dsw-accounts-platform-color, var(--dsw-alias-label-primary, inherit));
}
.omnimux-accounts-chip--group {
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.12));
  color: var(--dsw-alias-label-secondary, rgba(255,255,255,0.72));
}

/* ---------- status ---------- */
.omnimux-accounts-dot {
  flex: 0 0 auto;
  width: 8px;
  height: 8px;
  border-radius: 999px;
  display: inline-block;
}
.omnimux-accounts-dot--active {
  background: var(--dsw-alias-state-success-primary, #4caf7d);
}
.omnimux-accounts-dot--expiring {
  background: var(--dsw-alias-state-warning-primary, #d9a13b);
}
.omnimux-accounts-dot--expired,
.omnimux-accounts-dot--error {
  background: var(--dsw-alias-state-error-primary, #e06c75);
}
.omnimux-accounts-status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  line-height: 18px;
}
.omnimux-accounts-status--expiring { color: var(--dsw-alias-state-warning-primary, #d9a13b); }
.omnimux-accounts-status--expired,
.omnimux-accounts-status--error { color: var(--dsw-alias-state-error-primary, #e06c75); }
.omnimux-accounts-meta {
  margin: 0;
  font-size: 12px;
  line-height: 18px;
  color: var(--dsw-alias-label-secondary, rgba(255,255,255,0.72));
}

/* ---------- agent usable switch ---------- */
.omnimux-accounts-switchrow {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
}
.omnimux-accounts-switch {
  position: relative;
  width: 36px;
  height: 20px;
  padding: 0;
  border: none;
  border-radius: 999px;
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.30));
  cursor: pointer;
  transition: background 0.15s ease;
}
.omnimux-accounts-switch[aria-checked="true"] {
  background: var(--dsw-alias-state-success-primary, #4caf7d);
}
.omnimux-accounts-switch:disabled { cursor: default; opacity: 0.5; }
.omnimux-accounts-switch-knob {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  border-radius: 999px;
  background: #fff;
  transition: transform 0.15s ease;
}
.omnimux-accounts-switch[aria-checked="true"] .omnimux-accounts-switch-knob {
  transform: translateX(16px);
}
.omnimux-accounts-switch-label {
  font-size: 12px;
  line-height: 16px;
  color: var(--dsw-alias-label-secondary, rgba(255,255,255,0.72));
}

/* ---------- card menu + confirm popover ---------- */
.omnimux-accounts-more {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 1;
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  padding: 0;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.16));
  border-radius: 8px;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
}
.omnimux-accounts-more:not(:disabled):hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.12));
}
.omnimux-accounts-popover {
  position: absolute;
  top: 38px;
  right: 8px;
  z-index: 5;
  min-width: 200px;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 6px;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.16));
  border-radius: 10px;
  background: var(--dsw-alias-bg-primary, var(--dsw-bg, #16181d));
  box-shadow: 0 8px 24px rgba(0,0,0,0.35);
}
.omnimux-accounts-menuitem {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  padding: 6px 10px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 13px;
  text-align: left;
  cursor: pointer;
}
.omnimux-accounts-menuitem:not(:disabled):hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.12));
}
.omnimux-accounts-menuitem:disabled { cursor: default; opacity: 0.5; }
.omnimux-accounts-menuitem--danger {
  color: var(--dsw-alias-state-error-primary, #e06c75);
}
.omnimux-accounts-popover-text {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
}
.omnimux-accounts-popover-summary {
  margin: 0;
  font-size: 12px;
  line-height: 1.5;
  opacity: 0.7;
}
.omnimux-accounts-popover-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 8px;
}
.omnimux-accounts-btn {
  flex: 0 0 auto;
  padding: 4px 10px;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.16));
  border-radius: 8px;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 13px;
  cursor: pointer;
}
.omnimux-accounts-btn:not(:disabled):hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.12));
}
.omnimux-accounts-btn:disabled { cursor: default; opacity: 0.5; }
.omnimux-accounts-btn--primary {
  border: none;
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.22));
}
.omnimux-accounts-btn--danger {
  color: var(--dsw-alias-state-error-primary, #e06c75);
}

/* ---------- skeleton / empty / error ---------- */
.omnimux-accounts-skeleton {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 12px;
}
.omnimux-accounts-skeleton-card {
  height: 168px;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.08));
  border-radius: 12px;
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.08));
  animation: omnimux-accounts-pulse 1.2s ease-in-out infinite;
}
.omnimux-accounts-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 48px 16px;
  border: 1px dashed var(--dsw-alias-border, rgba(255,255,255,0.16));
  border-radius: 12px;
}
.omnimux-accounts-empty-text {
  margin: 0;
  font-size: 13px;
  line-height: 1.6;
  color: var(--dsw-alias-label-secondary, rgba(255,255,255,0.72));
  text-align: center;
}
.omnimux-accounts-error {
  margin: 0;
  padding: 8px 12px;
  border: 1px solid color-mix(in srgb, var(--dsw-alias-state-error-primary, #e06c75) 40%, transparent);
  border-radius: 8px;
  color: var(--dsw-alias-state-error-primary, #e06c75);
  font-size: 13px;
  line-height: 1.5;
}
.omnimux-accounts-muted {
  margin: 0;
  font-size: 13px;
  line-height: 1.6;
  color: var(--dsw-alias-label-secondary, rgba(255,255,255,0.72));
}
@keyframes omnimux-accounts-pulse {
  0%, 100% { opacity: 0.55; }
  50% { opacity: 1; }
}

/* ---------- table view + bulk bar (T05 wiring; styles land now) ---------- */
.omnimux-accounts-tablewrap {
  overflow: auto;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.08));
  border-radius: 12px;
}
.omnimux-accounts-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}
.omnimux-accounts-table th {
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 8px 12px;
  background: var(--dsw-alias-bg-primary, var(--dsw-bg, #16181d));
  text-align: left;
  font-weight: 600;
  font-size: 12px;
  color: var(--dsw-alias-label-secondary, rgba(255,255,255,0.72));
  border-bottom: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.12));
}
.omnimux-accounts-table td {
  padding: 8px 12px;
  border-bottom: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.06));
  vertical-align: middle;
  white-space: nowrap;
}
.omnimux-accounts-table tr:last-child td { border-bottom: none; }
.omnimux-accounts-table tbody tr:hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.08));
}
.omnimux-accounts-row-selected {
  background: color-mix(in srgb, var(--dsw-alias-state-business-primary, #4c8dff) 10%, transparent);
}
.omnimux-accounts-table-check { width: 36px; }
.omnimux-accounts-table input[type="checkbox"] {
  accent-color: var(--dsw-alias-state-business-primary, #4c8dff);
  cursor: pointer;
}
.omnimux-accounts-table input[type="checkbox"]:disabled { cursor: default; }
.omnimux-accounts-sortbtn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 0;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
}
.omnimux-accounts-sortbtn:not(:disabled):hover {
  color: var(--dsw-alias-label-primary, inherit);
}
.omnimux-accounts-sortbtn:disabled { cursor: default; opacity: 0.5; }
.omnimux-accounts-sortmark { opacity: 0.6; }
.omnimux-accounts-thtext {
  font-size: 12px;
  font-weight: 600;
}
.omnimux-accounts-cell-id {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}
.omnimux-accounts-cellmenu {
  position: relative;
  display: inline-block;
}
.omnimux-accounts-bulkbar {
  position: sticky;
  bottom: 0;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.16));
  border-radius: 10px;
  background: var(--dsw-alias-bg-primary, var(--dsw-bg, #16181d));
  box-shadow: 0 -4px 16px rgba(0,0,0,0.25);
}
.omnimux-accounts-bulkbar .omnimux-accounts-popover {
  top: auto;
  bottom: 44px;
}
.omnimux-accounts-bulk-text {
  font-size: 13px;
  color: var(--dsw-alias-label-secondary, rgba(255,255,255,0.72));
}
.omnimux-accounts-bulk-progress {
  font-size: 12px;
  color: var(--dsw-alias-label-secondary, rgba(255,255,255,0.72));
  font-variant-numeric: tabular-nums;
}

/* ---------- notice (non-error feedback channel) ---------- */
.omnimux-accounts-notice {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: var(--dsw-alias-state-success-primary, #4caf7d);
}

/* ---------- connect modal ---------- */
.omnimux-accounts-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 300;
  display: grid;
  place-items: center;
  padding: 24px;
  background: rgba(0,0,0,0.55);
}
.omnimux-accounts-modal {
  width: min(480px, 100%);
  max-height: min(560px, 100%);
  overflow: auto;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.16));
  border-radius: 12px;
  background: var(--dsw-alias-bg-primary, var(--dsw-bg, #16181d));
  box-shadow: 0 16px 48px rgba(0,0,0,0.45);
}
.omnimux-accounts-modal-head {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.08));
}
.omnimux-accounts-modal-title {
  margin: 0;
  flex: 1;
  font-size: 15px;
  font-weight: 600;
  line-height: 22px;
}
.omnimux-accounts-modal-close {
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
}
.omnimux-accounts-modal-close:not(:disabled):hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.12));
}
.omnimux-accounts-modal-body {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
}
.omnimux-accounts-modal-text {
  margin: 0;
  font-size: 13px;
  line-height: 1.6;
}
.omnimux-accounts-modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
.omnimux-accounts-modal-link {
  align-self: flex-start;
}
.omnimux-accounts-platform-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 12px;
}
.omnimux-accounts-platform-btn {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 14px;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.12));
  border-radius: 12px;
  background: var(--dsw-alias-bg-secondary, rgba(255,255,255,0.04));
  color: inherit;
  font: inherit;
  cursor: pointer;
  text-align: left;
}
.omnimux-accounts-platform-btn:not(:disabled):hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.12));
}
.omnimux-accounts-platform-btn:active {
  background: var(--dsw-alias-interactive-bg-active, rgba(128,128,128,0.18));
}
.omnimux-accounts-platform-btn:disabled { cursor: default; opacity: 0.5; }
.omnimux-accounts-platform-btn--coming {
  cursor: default;
  opacity: 0.55;
}
.omnimux-accounts-platform-name {
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
}
.omnimux-accounts-platform-soon {
  font-size: 11px;
  line-height: 16px;
  padding: 1px 8px;
  border-radius: 999px;
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.18));
  color: var(--dsw-alias-label-secondary, rgba(255,255,255,0.72));
  white-space: nowrap;
}

/* ---------- empty state ---------- */
.omnimux-accounts-empty-icon {
  color: var(--dsw-alias-label-secondary, rgba(255,255,255,0.72));
}
.omnimux-accounts-empty-title {
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  line-height: 22px;
}
.omnimux-accounts-empty-platforms {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  padding-top: 12px;
  border-top: 1px dashed var(--dsw-alias-border, rgba(255,255,255,0.16));
}
.omnimux-accounts-empty-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.omnimux-accounts-empty-grouptitle {
  margin: 0;
  font-size: 12px;
  line-height: 16px;
  color: var(--dsw-alias-label-secondary, rgba(255,255,255,0.72));
}
.omnimux-accounts-empty-soonchip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

/* ---------- focus visibility (keyboard only) ---------- */
.omnimux-accounts-root :focus-visible {
  outline: 2px solid var(--dsw-alias-state-business-primary, #4c8dff);
  outline-offset: 1px;
}
`;
var STYLE_ELEMENT_ID = "omnimux-accounts-styles";
function injectAccountsStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(STYLE_ELEMENT_ID)) return;
  const style = document.createElement("style");
  style.id = STYLE_ELEMENT_ID;
  style.textContent = STYLES2;
  document.head.append(style);
}

// src/client/AccountsSection.jsx
var import_jsx_runtime9 = require("react/jsx-runtime");
var SKELETON_CARDS = 8;
var VIEW_STORAGE_KEY = "omnimux-accounts-view";
var NOTICE_TIMEOUT_MS = 6e3;
function readStoredView() {
  try {
    const value = window.localStorage.getItem(VIEW_STORAGE_KEY);
    return value === "table" ? "table" : "grid";
  } catch {
    return "grid";
  }
}
function AccountsSection({ t, active = true }) {
  (0, import_react5.useEffect)(() => {
    injectAccountsStyles();
  }, []);
  const { phase, accounts, error, busy, refresh, watchConnect, patch, disconnect } = useAccounts();
  const [filters, setFilters] = (0, import_react5.useState)({ query: "", platform: "", group: "", status: "" });
  const [sortKey, setSortKey] = (0, import_react5.useState)("display_name");
  const [sortDir, setSortDir] = (0, import_react5.useState)("asc");
  const [view, setView] = (0, import_react5.useState)(readStoredView);
  const [modalOpen, setModalOpen] = (0, import_react5.useState)(false);
  const [notice, setNotice] = (0, import_react5.useState)("");
  const [selected, setSelected] = (0, import_react5.useState)(() => /* @__PURE__ */ new Set());
  const [bulkProgress, setBulkProgress] = (0, import_react5.useState)(null);
  const [confirmBulk, setConfirmBulk] = (0, import_react5.useState)(false);
  const [sectionError, setSectionError] = (0, import_react5.useState)("");
  const wasActive = (0, import_react5.useRef)(active);
  (0, import_react5.useEffect)(() => {
    try {
      window.localStorage.setItem(VIEW_STORAGE_KEY, view);
    } catch {
    }
  }, [view]);
  (0, import_react5.useEffect)(() => {
    if (notice === "") return void 0;
    const timer = window.setTimeout(() => {
      setNotice("");
    }, NOTICE_TIMEOUT_MS);
    return () => {
      window.clearTimeout(timer);
    };
  }, [notice]);
  (0, import_react5.useEffect)(() => {
    const returning = active && !wasActive.current;
    wasActive.current = active;
    if (!active) {
      setModalOpen(false);
      setConfirmBulk(false);
      setNotice("");
      return void 0;
    }
    if (returning) void refresh();
    return void 0;
  }, [active, refresh]);
  (0, import_react5.useEffect)(() => {
    setSelected((current) => {
      const alive = new Set(accounts.map((row) => String(row.id)));
      const next = new Set([...current].filter((id) => alive.has(id)));
      return next.size === current.size ? current : next;
    });
  }, [accounts]);
  (0, import_react5.useEffect)(() => {
    if (!confirmBulk) return void 0;
    const onPointerDown = (event) => {
      const target = event.target;
      if (target instanceof Element && target.closest("[data-omnimux-accounts-popover]") !== null) return;
      setConfirmBulk(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [confirmBulk]);
  const summary = (0, import_react5.useMemo)(() => summarize(accounts), [accounts]);
  const platforms = (0, import_react5.useMemo)(() => uniqueValues(accounts, "platform"), [accounts]);
  const groups = (0, import_react5.useMemo)(() => uniqueValues(accounts, "group"), [accounts]);
  const statuses = (0, import_react5.useMemo)(() => presentStatuses(accounts), [accounts]);
  const visible = (0, import_react5.useMemo)(
    () => sortAccounts(filterAccounts(accounts, filters), sortKey, sortDir),
    [accounts, filters, sortKey, sortDir]
  );
  const bulkRunning = bulkProgress !== null;
  const combinedBusy = bulkRunning || busy !== "" ? bulkRunning ? "bulk" : busy : "";
  const onFilterClick = (filter) => {
    if (filter === null) {
      setFilters({ query: "", platform: "", group: "", status: "" });
      return;
    }
    setFilters((current) => ({ ...current, ...filter }));
  };
  const onSortHeader = (key) => {
    if (key === sortKey) {
      setSortDir((current) => current === "asc" ? "desc" : "asc");
      return;
    }
    setSortKey(key);
    setSortDir("asc");
  };
  const openConnect = () => {
    setModalOpen(true);
  };
  const closeConnect = () => {
    setModalOpen(false);
    void refresh();
  };
  const handleConnected = (_row) => {
    setModalOpen(false);
    setSectionError("");
    setNotice(t("connect.connected"));
    void refresh();
  };
  const toggleSelect = (id) => {
    setSelected((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };
  const toggleSelectAll = () => {
    setSelected((current) => {
      const ids = visible.map((row) => String(row.id));
      const all = ids.length > 0 && ids.every((id) => current.has(id));
      const next = new Set(current);
      if (all) ids.forEach((id) => next.delete(id));
      else ids.forEach((id) => next.add(id));
      return next;
    });
  };
  const runBulk = async (work) => {
    const ids = [...selected];
    if (ids.length === 0 || bulkProgress !== null) return;
    const failures = [];
    let signedOut = false;
    let done = 0;
    setSectionError("");
    setBulkProgress({ done: 0, total: ids.length });
    for (const id of ids) {
      if (signedOut) break;
      try {
        const result = await work(id);
        if (result.status === 401) {
          signedOut = true;
        } else if (!result.ok) {
          failures.push(id);
        }
      } catch {
        failures.push(id);
      }
      done += 1;
      setBulkProgress({ done, total: ids.length });
    }
    setBulkProgress(null);
    setSelected(/* @__PURE__ */ new Set());
    setConfirmBulk(false);
    await refresh();
    if (!signedOut && failures.length > 0) {
      setSectionError(fmt(t("bulk.partialError"), { count: failures.length }));
    } else if (!signedOut) {
      setNotice(t("bulk.done"));
    }
  };
  const bulkDisconnect = () => {
    return runBulk((id) => disconnectAccount(id));
  };
  const bulkAgent = (value) => {
    return runBulk((id) => patchAccount(id, { agent_usable: value }));
  };
  if (phase === "loading") {
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "omnimux-accounts-root", role: "status", "aria-label": t("loading"), children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "omnimux-accounts-skeleton", "aria-hidden": "true", children: Array.from({ length: SKELETON_CARDS }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "omnimux-accounts-skeleton-card" }, index)) }) });
  }
  if (phase === "need-login") {
    const signIn = () => {
      const gate = typeof window !== "undefined" ? (
        /** @type {any} */
        window.__omnimuxAuth
      ) : void 0;
      if (gate && typeof gate.ensureLogin === "function") {
        gate.ensureLogin({
          reason: t("needLogin"),
          onSuccess: () => {
            void refresh();
          }
        });
      } else {
        void refresh();
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "omnimux-accounts-root", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "omnimux-accounts-muted", children: t("needLogin") }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "omnimux-accounts-muted", children: t("needLoginHint") }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { type: "button", className: "omnimux-accounts-cta", onClick: signIn, children: t("login") })
    ] });
  }
  const errorText = sectionError !== "" ? sectionError : error;
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "omnimux-accounts-root", children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(OverviewBar, { t, summary, onFilterClick, busy: combinedBusy }),
    accounts.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "omnimux-accounts-toolbar", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        FilterBar,
        {
          t,
          query: filters.query,
          platform: filters.platform,
          group: filters.group,
          status: filters.status,
          sortKey,
          sortDir,
          view,
          platforms,
          groups,
          statuses,
          onFilterChange: (patchFilters) => {
            setFilters((current) => ({ ...current, ...patchFilters }));
          },
          onSortChange: (patchSort) => {
            if (patchSort.key !== void 0) setSortKey(patchSort.key);
            if (patchSort.dir !== void 0) setSortDir(patchSort.dir);
          },
          onViewChange: setView,
          busy: combinedBusy
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
        "button",
        {
          type: "button",
          className: "omnimux-accounts-cta",
          disabled: combinedBusy,
          onClick: openConnect,
          children: [
            "+ ",
            t("connect")
          ]
        }
      )
    ] }) : null,
    selected.size > 0 ? /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "omnimux-accounts-bulkbar", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "omnimux-accounts-bulk-text", children: fmt(t("bulk.selected"), { count: selected.size }) }),
      bulkProgress !== null ? /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("span", { className: "omnimux-accounts-bulk-progress", children: [
        String(bulkProgress.done),
        "/",
        String(bulkProgress.total)
      ] }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        "button",
        {
          type: "button",
          className: "omnimux-accounts-btn omnimux-accounts-btn--danger",
          disabled: combinedBusy !== "",
          onClick: () => {
            setConfirmBulk(true);
          },
          children: t("bulk.disconnect")
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        "button",
        {
          type: "button",
          className: "omnimux-accounts-btn",
          disabled: combinedBusy !== "",
          onClick: () => {
            void bulkAgent(true);
          },
          children: t("bulk.agentOn")
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        "button",
        {
          type: "button",
          className: "omnimux-accounts-btn",
          disabled: combinedBusy !== "",
          onClick: () => {
            void bulkAgent(false);
          },
          children: t("bulk.agentOff")
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        "button",
        {
          type: "button",
          className: "omnimux-accounts-btn",
          disabled: combinedBusy !== "",
          onClick: () => {
            setSelected(/* @__PURE__ */ new Set());
          },
          children: t("bulk.clear")
        }
      ),
      confirmBulk ? /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { "data-omnimux-accounts-popover": "", role: "dialog", className: "omnimux-accounts-popover", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "omnimux-accounts-popover-text", children: fmt(t("bulk.confirmDisconnect"), { count: selected.size }) }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "omnimux-accounts-popover-actions", children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            "button",
            {
              type: "button",
              className: "omnimux-accounts-btn omnimux-accounts-btn--danger",
              disabled: combinedBusy !== "",
              onClick: () => {
                void bulkDisconnect();
              },
              children: t("disconnect")
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { type: "button", className: "omnimux-accounts-btn", onClick: () => {
            setConfirmBulk(false);
          }, children: t("action.cancel") })
        ] })
      ] }) : null
    ] }) : null,
    errorText !== "" ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "omnimux-accounts-error", role: "alert", children: errorText }) : null,
    notice !== "" ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "omnimux-accounts-notice", role: "status", children: notice }) : null,
    accounts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(EmptyState, { t, onConnect: openConnect, busy: combinedBusy }) : visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "omnimux-accounts-muted", children: t("filter.noResults") }) : view === "table" ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      AccountTable,
      {
        t,
        accounts: visible,
        selected,
        sortKey,
        sortDir,
        busy: combinedBusy,
        onSortHeader,
        onToggleSelect: toggleSelect,
        onToggleSelectAll: toggleSelectAll,
        onAgentToggle: (id, next) => {
          void patch(id, { agent_usable: next });
        },
        onDisconnect: (id) => {
          void disconnect(id);
        }
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "omnimux-accounts-grid", children: visible.map((account) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      AccountCard,
      {
        t,
        account,
        busy: combinedBusy,
        onAgentToggle: (id, next) => {
          void patch(id, { agent_usable: next });
        },
        onDisconnect: (id) => {
          void disconnect(id);
        }
      },
      String(account.id)
    )) }),
    modalOpen ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      ConnectModal,
      {
        t,
        watchConnect,
        onClose: closeConnect,
        onConnected: handleConnected
      }
    ) : null
  ] });
}

// src/client/AccountsStage.jsx
var import_jsx_runtime10 = require("react/jsx-runtime");
function AccountsStage({ t, stage }) {
  const open = (0, import_react6.useSyncExternalStore)(
    stage ? (onStoreChange) => stage.subscribe(onStoreChange) : () => () => {
    },
    stage ? () => stage.getSnapshot() : () => false
  );
  const [everOpened, setEverOpened] = (0, import_react6.useState)(false);
  const [box, setBox] = (0, import_react6.useState)(() => stage ? stage.readBox() : { top: 0, left: 0, width: 0, height: 0 });
  if (open && !everOpened) setEverOpened(true);
  (0, import_react6.useLayoutEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
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
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { style: { flex: 1, minHeight: 0, display: "flex", flexDirection: "column", overflow: "auto" }, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(AccountsSection, { t, active: open }) })
      ]
    }
  );
}

// src/client/index.js
var name = "omnimux-accounts";
var inject = ["slots", "locale"];
function apply(ctx) {
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), "omnimux-accounts: dictionaries");
  const t = ctx.locale.bind(NS);
  const stage = createStageStore(() => window.__omnimuxStage);
  const stageFace = () => ({ t, stage });
  ctx.effect(() => mountSidebarEntry(stage, t, ctx.locale), "omnimux-accounts: sidebar entry");
  ctx.slots.inject("shell.overlay", () => ctx.slots.register({
    name: "shell.overlay",
    id: "omnimux-accounts-stage",
    order: 21,
    locale: NS,
    inject: stageFace
  }, AccountsStage));
}

    return module.exports;
  }
});
