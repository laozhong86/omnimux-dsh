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
  "filter.viewGrid": "\u7F51\u683C\u89C6\u56FE\uFF08\u5373\u5C06\u63A8\u51FA\uFF09",
  "filter.viewTable": "\u8868\u683C\u89C6\u56FE\uFF08\u5373\u5C06\u63A8\u51FA\uFF09",
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
  "empty.none": "\u6682\u65E0\u8D26\u53F7",
  "empty.noneHint": "\u8FDE\u63A5\u8D26\u53F7\u540E\uFF0CAgent \u624D\u80FD\u8C03\u7528\u5E73\u53F0 API\u3002",
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
  "filter.viewGrid": "Grid view (coming soon)",
  "filter.viewTable": "Table view (coming soon)",
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
  "empty.none": "No accounts yet",
  "empty.noneHint": "Connect an account so agents can call platform APIs.",
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

// src/client/AccountsStage.jsx
var import_react5 = require("react");

// src/client/AccountsSection.jsx
var import_react4 = require("react");

// src/client/AccountCard.jsx
var import_react2 = require("react");

// src/client/chips.jsx
var import_react = require("react");

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
function relativeTime(iso, now = Date.now()) {
  if (typeof iso !== "string" || iso === "") return "";
  const then = Date.parse(iso);
  if (!Number.isFinite(then)) return "";
  const base = now instanceof Date ? now.getTime() : now;
  const diffMs = then - base;
  const abs = Math.abs(diffMs);
  const formatter = new Intl.RelativeTimeFormat(void 0, { numeric: "auto" });
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

// src/client/chips.jsx
var import_jsx_runtime = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "omnimux-accounts-chip omnimux-accounts-chip--solid", children: label });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "span",
    {
      className: "omnimux-accounts-chip omnimux-accounts-chip--accent",
      style: { "--dsw-accounts-platform-color": info.color },
      children: label
    }
  );
}
function GroupChip({ group }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "omnimux-accounts-chip omnimux-accounts-chip--group", children: group });
}
function Avatar({ account, t }) {
  const [failed, setFailed] = (0, import_react.useState)(false);
  const url = typeof account.avatar_url === "string" ? account.avatar_url : "";
  const info = platformInfo(account.platform);
  const platformLabel = localeText(t, `platform.${info.id}`, String(account.platform || ""));
  const initial = (platformLabel || "?").charAt(0).toLocaleUpperCase() || "?";
  if (url && !failed) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "omnimux-accounts-avatar-fallback", "aria-hidden": "true", children: initial });
}

// src/client/AccountCard.jsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function AccountCard({ t, account, busy = "", onAgentToggle, onDisconnect }) {
  const [popover, setPopover] = (0, import_react2.useState)(null);
  const id = String(account.id);
  const name2 = [account.display_name, account.username, account.name].find((value) => typeof value === "string" && value !== "") || id;
  const username = typeof account.username === "string" && account.username !== "" ? `@${account.username}` : "";
  const status = typeof account.status === "string" ? account.status : "";
  const statusLabel = localeText(t, `status.${status}`, status);
  const agentUsable = account.agent_usable !== false;
  const lastUsed = typeof account.last_used_at === "string" ? relativeTime(account.last_used_at) : "";
  const expiresSoon = status === "expiring" && typeof account.expires_at === "string";
  (0, import_react2.useEffect)(() => {
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
  const disabled = busy !== "";
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("article", { className: "omnimux-accounts-card", "data-busy": busy === id, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-accounts-card-head", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Avatar, { account, t }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-accounts-id", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { className: "omnimux-accounts-name", children: name2 }),
        username !== "" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "omnimux-accounts-username", children: username }) : null
      ] })
    ] }),
    typeof account.platform === "string" || typeof account.group === "string" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-accounts-chips", children: [
      typeof account.platform === "string" && account.platform !== "" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(PlatformChip, { platform: account.platform, t }) : null,
      typeof account.group === "string" && account.group !== "" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(GroupChip, { group: account.group }) : null
    ] }) : null,
    status !== "" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: `omnimux-accounts-status omnimux-accounts-status--${status}`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(StatusDot, { status, label: statusLabel }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: statusLabel }),
      expiresSoon ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { children: [
        " \xB7 ",
        fmt(t("card.expiresIn"), { time: relativeTime(account.expires_at) })
      ] }) : null
    ] }) : null,
    lastUsed !== "" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "omnimux-accounts-meta", children: fmt(t("card.lastUsed"), { time: lastUsed }) }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-accounts-switchrow", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "button",
        {
          type: "button",
          role: "switch",
          className: "omnimux-accounts-switch",
          "aria-checked": String(agentUsable),
          "aria-label": agentUsable ? t("card.agentUsableOn") : t("card.agentUsableOff"),
          disabled,
          onClick: () => {
            onAgentToggle(id, !agentUsable);
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "omnimux-accounts-switch-knob" })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "omnimux-accounts-switch-label", children: t("card.agentUsable") })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
    popover === "menu" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { "data-omnimux-accounts-popover": "", role: "menu", className: "omnimux-accounts-popover", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
    popover === "confirm" ? /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { "data-omnimux-accounts-popover": "", role: "dialog", className: "omnimux-accounts-popover", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "omnimux-accounts-popover-text", children: fmt(t("card.confirmDisconnect"), { name: name2 }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-accounts-popover-actions", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "button",
          {
            type: "button",
            className: "omnimux-accounts-btn omnimux-accounts-btn--danger",
            disabled,
            onClick: () => {
              setPopover(null);
              onDisconnect(id);
            },
            children: t("disconnect")
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { type: "button", className: "omnimux-accounts-btn", onClick: () => {
          setPopover(null);
        }, children: t("action.cancel") })
      ] })
    ] }) : null
  ] });
}

// src/client/FilterBar.jsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function FilterBar(props) {
  const { t, query, platform, group, status, sortKey, sortDir, platforms, groups, statuses, onFilterChange, onSortChange, busy = "" } = props;
  const disabled = busy !== "";
  const sortOptions = [
    { key: "display_name", label: t("sort.display_name") },
    { key: "platform", label: t("sort.platform") },
    { key: "status", label: t("sort.status") },
    { key: "last_used_at", label: t("sort.lastUsed") }
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "omnimux-accounts-filterbar", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
    platforms.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
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
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("option", { value: "", children: [
            t("platform"),
            " \xB7 ",
            t("all")
          ] }),
          platforms.map((value) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value, children: value }, value))
        ]
      }
    ) : null,
    groups.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
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
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("option", { value: "", children: [
            t("group"),
            " \xB7 ",
            t("all")
          ] }),
          groups.map((value) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value, children: value }, value))
        ]
      }
    ) : null,
    statuses.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
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
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("option", { value: "", children: [
            t("filter.status"),
            " \xB7 ",
            t("all")
          ] }),
          statuses.map((value) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value, children: t(`status.${value}`) }, value))
        ]
      }
    ) : null,
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "select",
      {
        className: "omnimux-accounts-select",
        value: sortKey,
        "aria-label": t("filter.sort"),
        disabled,
        onChange: (event) => {
          onSortChange({ key: event.currentTarget.value });
        },
        children: sortOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: option.key, children: option.label }, option.key))
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "button",
      {
        type: "button",
        className: "omnimux-accounts-iconbtn",
        "aria-label": t("filter.viewGrid"),
        title: t("filter.viewGrid"),
        disabled: true,
        children: "\u229E"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "button",
      {
        type: "button",
        className: "omnimux-accounts-iconbtn",
        "aria-label": t("filter.viewTable"),
        title: t("filter.viewTable"),
        disabled: true,
        children: "\u2263"
      }
    )
  ] });
}

// src/client/OverviewBar.jsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function OverviewBar({ t, summary, onConnect, onFilterClick, busy = "" }) {
  const stats = [
    { key: "connected", label: t("overview.connected"), value: summary.connected, filter: { status: "active" } },
    { key: "needsAttention", label: t("overview.needsAttention"), value: summary.needsAttention, filter: { status: "expired" } },
    { key: "platforms", label: t("overview.platforms"), value: summary.platformCount, filter: { platform: "" } },
    { key: "total", label: t("overview.total"), value: summary.total, filter: null }
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "omnimux-accounts-overview-row", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "omnimux-accounts-overview", children: stats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      "button",
      {
        type: "button",
        className: "omnimux-accounts-stat",
        disabled: busy !== "",
        onClick: () => {
          onFilterClick(stat.filter);
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "omnimux-accounts-stat-value", children: String(stat.value) }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "omnimux-accounts-stat-label", children: stat.label })
        ]
      },
      stat.key
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      "button",
      {
        type: "button",
        className: "omnimux-accounts-cta",
        disabled: busy !== "",
        onClick: onConnect,
        children: [
          "+ ",
          t("connect")
        ]
      }
    )
  ] });
}

// src/client/use-accounts.js
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
function listAccounts(filters = {}) {
  const query = new URLSearchParams();
  if (filters.platform) query.set("platform", filters.platform);
  if (filters.group) query.set("group", filters.group);
  const suffix = query.toString() ? `?${query}` : "";
  return accountsRequest(`/omnimux/accounts${suffix}`);
}
function connectAccount(platform) {
  return accountsRequest("/omnimux/accounts", { method: "POST", body: { platform } });
}
function disconnectAccount(id) {
  return accountsRequest(`/omnimux/accounts/${encodeURIComponent(id)}`, { method: "DELETE" });
}
function patchAccount(id, body) {
  return accountsRequest(`/omnimux/accounts/${encodeURIComponent(id)}`, { method: "PATCH", body });
}

// src/client/use-accounts.js
function useAccounts() {
  const [phase, setPhase] = (0, import_react3.useState)("loading");
  const [accounts, setAccounts] = (0, import_react3.useState)([]);
  const [error, setError] = (0, import_react3.useState)("");
  const [busy, setBusy] = (0, import_react3.useState)("");
  const accountsRef = (0, import_react3.useRef)([]);
  const commitAccounts = (0, import_react3.useCallback)((next) => {
    const rows = Array.isArray(next) ? next : [];
    accountsRef.current = rows;
    setAccounts(rows);
  }, []);
  const applyListResult = (0, import_react3.useCallback)((result) => {
    if (result.status === 401) {
      setPhase("need-login");
      commitAccounts([]);
      return true;
    }
    if (!result.ok) {
      setError(String(result.body && typeof result.body === "object" && result.body.error || `HTTP ${String(result.status)}`));
      setPhase("ready");
      return true;
    }
    const body = result.body && typeof result.body === "object" ? (
      /** @type {Record<string, unknown>} */
      result.body
    ) : {};
    setError("");
    commitAccounts(Array.isArray(body.accounts) ? body.accounts : []);
    setPhase("ready");
    return true;
  }, [commitAccounts]);
  const refresh = (0, import_react3.useCallback)(() => {
    return listAccounts().then(applyListResult).catch((caught) => {
      setError(caught instanceof Error ? caught.message : String(caught));
      setPhase("ready");
      return true;
    });
  }, [applyListResult]);
  (0, import_react3.useEffect)(() => {
    void refresh();
  }, [refresh]);
  const connect = (0, import_react3.useCallback)((platform) => {
    setBusy("connect");
    setError("");
    return connectAccount(platform).then((result) => {
      if (result.status === 401) {
        setPhase("need-login");
        return false;
      }
      if (!result.ok) {
        setError(String(result.body && typeof result.body === "object" && result.body.error || `HTTP ${String(result.status)}`));
        return false;
      }
      const body = result.body && typeof result.body === "object" ? (
        /** @type {Record<string, unknown>} */
        result.body
      ) : {};
      if (typeof body.auth_url === "string" && body.auth_url) {
        window.open(body.auth_url, "_blank", "noopener,noreferrer");
      }
      return refresh().then(() => true);
    }).catch((caught) => {
      setError(caught instanceof Error ? caught.message : String(caught));
      return false;
    }).finally(() => {
      setBusy("");
    });
  }, [refresh]);
  const patch = (0, import_react3.useCallback)((id, body) => {
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
        setPhase("need-login");
        return false;
      }
      if (!result.ok) {
        commitAccounts(previous);
        setError(String(result.body && typeof result.body === "object" && result.body.error || `HTTP ${String(result.status)}`));
        return false;
      }
      const bodyRow = result.body && typeof result.body === "object" && /** @type {Record<string, unknown>} */
      result.body.account && typeof /** @type {Record<string, unknown>} */
      result.body.account === "object" ? (
        /** @type {Record<string, unknown>} */
        /** @type {Record<string, unknown>} */
        result.body.account
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
  const disconnect = (0, import_react3.useCallback)((id) => {
    const key = String(id);
    setBusy(key);
    setError("");
    return disconnectAccount(key).then((result) => {
      if (result.status === 401) {
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
  return { phase, accounts, error, busy, refresh, connect, patch, disconnect };
}

// src/client/styles.js
var STYLES = `
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
.omnimux-accounts-cta {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border: none;
  border-radius: 8px;
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.18));
  color: var(--dsw-alias-label-primary, inherit);
  font: inherit;
  font-size: 13px;
  cursor: pointer;
}
.omnimux-accounts-cta:hover {
  background: var(--dsw-alias-interactive-bg-active, rgba(128,128,128,0.26));
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
}
.omnimux-accounts-table tr:last-child td { border-bottom: none; }
.omnimux-accounts-table tbody tr:hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.08));
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
  style.textContent = STYLES;
  document.head.append(style);
}

// src/client/AccountsSection.jsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var SKELETON_CARDS = 8;
function AccountsSection({ t }) {
  (0, import_react4.useEffect)(() => {
    injectAccountsStyles();
  }, []);
  const { phase, accounts, error, busy, connect, patch, disconnect } = useAccounts();
  const [filters, setFilters] = (0, import_react4.useState)({ query: "", platform: "", group: "", status: "" });
  const [sortKey, setSortKey] = (0, import_react4.useState)("display_name");
  const [sortDir, setSortDir] = (0, import_react4.useState)("asc");
  const [connectOpen, setConnectOpen] = (0, import_react4.useState)(false);
  const [nextPlatform, setNextPlatform] = (0, import_react4.useState)("");
  const summary = (0, import_react4.useMemo)(() => summarize(accounts), [accounts]);
  const platforms = (0, import_react4.useMemo)(() => uniqueValues(accounts, "platform"), [accounts]);
  const groups = (0, import_react4.useMemo)(() => uniqueValues(accounts, "group"), [accounts]);
  const statuses = (0, import_react4.useMemo)(() => presentStatuses(accounts), [accounts]);
  const visible = (0, import_react4.useMemo)(
    () => sortAccounts(filterAccounts(accounts, filters), sortKey, sortDir),
    [accounts, filters, sortKey, sortDir]
  );
  const onFilterClick = (filter) => {
    if (filter === null) {
      setFilters({ query: "", platform: "", group: "", status: "" });
      return;
    }
    setFilters((current) => ({ ...current, ...filter }));
  };
  const onConnect = () => {
    setConnectOpen(true);
  };
  const onConnectSubmit = () => {
    const platform = nextPlatform.trim();
    if (platform === "") return;
    void connect(platform).then((ok) => {
      if (ok) {
        setNextPlatform("");
        setConnectOpen(false);
      }
    });
  };
  if (phase === "loading") {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "omnimux-accounts-root", role: "status", "aria-label": t("loading"), children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "omnimux-accounts-skeleton", "aria-hidden": "true", children: Array.from({ length: SKELETON_CARDS }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "omnimux-accounts-skeleton-card" }, index)) }) });
  }
  if (phase === "need-login") {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "omnimux-accounts-root", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "omnimux-accounts-muted", children: t("needLogin") }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "omnimux-accounts-muted", children: t("needLoginHint") })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "omnimux-accounts-root", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(OverviewBar, { t, summary, onConnect, onFilterClick, busy }),
    connectOpen ? /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "omnimux-accounts-filterbar", style: { position: "static" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "input",
        {
          type: "text",
          className: "omnimux-accounts-search",
          style: { flex: "0 1 240px" },
          value: nextPlatform,
          placeholder: t("platformHint"),
          "aria-label": t("platformHint"),
          disabled: busy !== "",
          onChange: (event) => {
            setNextPlatform(event.currentTarget.value);
          },
          onKeyDown: (event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              onConnectSubmit();
            }
          }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "button",
        {
          type: "button",
          className: "omnimux-accounts-btn omnimux-accounts-btn--primary",
          disabled: busy !== "" || nextPlatform.trim() === "",
          onClick: onConnectSubmit,
          children: t("connect")
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "button",
        {
          type: "button",
          className: "omnimux-accounts-btn",
          disabled: busy !== "",
          onClick: () => {
            setConnectOpen(false);
          },
          children: t("action.cancel")
        }
      )
    ] }) : null,
    accounts.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      FilterBar,
      {
        t,
        query: filters.query,
        platform: filters.platform,
        group: filters.group,
        status: filters.status,
        sortKey,
        sortDir,
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
        busy
      }
    ) : null,
    error !== "" ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "omnimux-accounts-error", role: "alert", children: error }) : null,
    accounts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "omnimux-accounts-empty", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "omnimux-accounts-empty-text", children: t("empty.none") }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "omnimux-accounts-empty-text", children: t("empty.noneHint") }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "button",
        {
          type: "button",
          className: "omnimux-accounts-btn omnimux-accounts-btn--primary",
          disabled: busy !== "",
          onClick: onConnect,
          children: t("connect")
        }
      )
    ] }) : visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "omnimux-accounts-muted", children: t("filter.noResults") }) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "omnimux-accounts-grid", children: visible.map((account) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      AccountCard,
      {
        t,
        account,
        busy,
        onAgentToggle: (id, next) => {
          void patch(id, { agent_usable: next });
        },
        onDisconnect: (id) => {
          void disconnect(id);
        }
      },
      String(account.id)
    )) })
  ] });
}

// src/client/AccountsStage.jsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var APP_OPEN_EVENT = "omnimux-app-open";
var PRODUCT_STAGE_EVENT = "dsh-product-stage";
var CATALOG_ID = "accounts";
var STAGE_ID = "omnimux-app-accounts";
function claimProductStage(id) {
  window.dispatchEvent(new CustomEvent(PRODUCT_STAGE_EVENT, { detail: { id } }));
  document.documentElement.dataset.dshProductStage = id;
}
function releaseProductStage(id) {
  if (document.documentElement.dataset.dshProductStage === id) {
    delete document.documentElement.dataset.dshProductStage;
  }
}
function sizableBox(node) {
  if (!node || typeof node.getBoundingClientRect !== "function") return null;
  const rect = node.getBoundingClientRect();
  if (rect.width >= 8 && rect.height >= 8) {
    return { top: rect.top, left: rect.left, width: rect.width, height: rect.height };
  }
  return null;
}
function readStageBox() {
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
function AccountsStage({ t }) {
  const [open, setOpen] = (0, import_react5.useState)(false);
  const [box, setBox] = (0, import_react5.useState)(() => readStageBox());
  (0, import_react5.useEffect)(() => {
    const onOpenRequest = (event) => {
      const id = event instanceof CustomEvent ? event.detail?.id : void 0;
      if (id !== CATALOG_ID) return;
      setOpen(true);
      claimProductStage(STAGE_ID);
    };
    const onStageChange = (event) => {
      const id = event instanceof CustomEvent ? event.detail?.id : void 0;
      if (id === STAGE_ID) return;
      setOpen((current) => {
        if (current) releaseProductStage(STAGE_ID);
        return false;
      });
    };
    window.addEventListener(APP_OPEN_EVENT, onOpenRequest);
    window.addEventListener(PRODUCT_STAGE_EVENT, onStageChange);
    return () => {
      window.removeEventListener(APP_OPEN_EVENT, onOpenRequest);
      window.removeEventListener(PRODUCT_STAGE_EVENT, onStageChange);
      releaseProductStage(STAGE_ID);
    };
  }, []);
  (0, import_react5.useLayoutEffect)(() => {
    if (!open) return void 0;
    const update = () => {
      setBox(readStageBox());
    };
    update();
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("resize", update);
    };
  }, [open]);
  if (!open) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    "div",
    {
      role: "region",
      "aria-label": t("title"),
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
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
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
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                "button",
                {
                  type: "button",
                  "aria-label": t("close"),
                  onClick: () => {
                    releaseProductStage(STAGE_ID);
                    setOpen(false);
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
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { style: { flex: 1, minHeight: 0, display: "flex", flexDirection: "column", overflow: "auto" }, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(AccountsSection, { t }) })
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
  ctx.slots.inject("shell.overlay", () => ctx.slots.register({
    name: "shell.overlay",
    id: "omnimux-app-accounts",
    order: 21,
    locale: NS,
    inject: () => ({ t })
  }, AccountsStage));
}

    return module.exports;
  }
});
