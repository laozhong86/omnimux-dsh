window.__ModuleLoader__.load({
  id: "dsh-omnimux-accounts",
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
  "login": "\u767B\u5F55",
  "empty": "\u8FD8\u6CA1\u6709\u7ED1\u5B9A\u7684\u8D26\u53F7\u3002",
  "platform": "\u5E73\u53F0",
  "group": "\u5206\u7EC4",
  "all": "\u5168\u90E8",
  "connect": "\u8FDE\u63A5\u8D26\u53F7",
  "disconnect": "\u65AD\u5F00",
  "platformHint": "\u5E73\u53F0\uFF0C\u4F8B\u5982 tiktok"
};
var en = {
  "nav": "Accounts",
  "title": "Accounts",
  "loading": "Loading accounts\u2026",
  "needLogin": "Sign in to OmniMux to see connected accounts.",
  "login": "Sign in",
  "empty": "No connected accounts yet.",
  "platform": "Platform",
  "group": "Group",
  "all": "All",
  "connect": "Connect account",
  "disconnect": "Disconnect",
  "platformHint": "Platform, e.g. tiktok"
};
var NS = "omnimux-accounts";

// src/client/AccountsSection.jsx
var import_react = require("react");

// src/filter.js
function filterAccounts(accounts, filters = {}) {
  const platform = String(filters.platform || "").trim().toLowerCase();
  const group = String(filters.group || "").trim().toLowerCase();
  return (Array.isArray(accounts) ? accounts : []).filter((row2) => {
    if (platform && String(row2.platform || "").toLowerCase() !== platform) return false;
    if (group && String(row2.group || "").toLowerCase() !== group) return false;
    return true;
  });
}
function uniqueValues(accounts, key) {
  const seen = /* @__PURE__ */ new Set();
  const values = [];
  for (const row2 of Array.isArray(accounts) ? accounts : []) {
    const value = typeof row2[key] === "string" ? row2[key].trim() : "";
    if (!value || seen.has(value)) continue;
    seen.add(value);
    values.push(value);
  }
  return values.sort((a, b) => a.localeCompare(b));
}

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

// src/client/AccountsSection.jsx
var import_jsx_runtime = require("react/jsx-runtime");
var page = {
  padding: "16px 20px",
  color: "var(--dsw-text-primary, inherit)",
  display: "flex",
  flexDirection: "column",
  gap: 12,
  maxWidth: 560
};
var muted = { color: "var(--dsw-text-secondary, inherit)", lineHeight: 1.5, margin: 0 };
var row = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 12,
  padding: "8px 0",
  borderBottom: "1px solid var(--dsw-border, currentColor)"
};
var button = {
  padding: "6px 12px",
  border: "1px solid var(--dsw-border, currentColor)",
  background: "transparent",
  color: "inherit",
  borderRadius: 6,
  cursor: "pointer"
};
var input = {
  ...button,
  flex: 1,
  cursor: "text"
};
var select = { ...button };
function AccountsSection({ t }) {
  const [phase, setPhase] = (0, import_react.useState)("loading");
  const [accounts, setAccounts] = (0, import_react.useState)([]);
  const [platform, setPlatform] = (0, import_react.useState)("");
  const [group, setGroup] = (0, import_react.useState)("");
  const [nextPlatform, setNextPlatform] = (0, import_react.useState)("");
  const [busy, setBusy] = (0, import_react.useState)("");
  const [error, setError] = (0, import_react.useState)("");
  const refresh = () => {
    return listAccounts().then((result) => {
      if (result.status === 401) {
        setPhase("need-login");
        setAccounts([]);
        return;
      }
      if (!result.ok) {
        setError(String(result.body.error || `HTTP ${String(result.status)}`));
        setPhase("ready");
        return;
      }
      setError("");
      setAccounts(Array.isArray(result.body.accounts) ? result.body.accounts : []);
      setPhase("ready");
    }).catch((caught) => {
      setError(caught instanceof Error ? caught.message : String(caught));
      setPhase("ready");
    });
  };
  (0, import_react.useEffect)(() => {
    void refresh();
  }, []);
  const visible = (0, import_react.useMemo)(
    () => filterAccounts(accounts, { platform, group }),
    [accounts, platform, group]
  );
  const platforms = uniqueValues(accounts, "platform");
  const groups = uniqueValues(accounts, "group");
  const run = (key, work) => {
    setBusy(key);
    setError("");
    void work().then((result) => {
      if (result.status === 401) {
        setPhase("need-login");
        return;
      }
      if (!result.ok) {
        setError(String(result.body.error || `HTTP ${String(result.status)}`));
        return;
      }
      if (typeof result.body.auth_url === "string" && result.body.auth_url) {
        window.open(result.body.auth_url, "_blank", "noopener,noreferrer");
      }
      return refresh();
    }).catch((caught) => {
      setError(caught instanceof Error ? caught.message : String(caught));
    }).finally(() => {
      setBusy("");
    });
  };
  if (phase === "loading") {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: page, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { style: muted, children: t("loading") }) });
  }
  if (phase === "need-login") {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: page, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { style: { margin: 0, fontSize: 16 }, children: t("title") }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { style: muted, children: t("needLogin") })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: page, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { style: { margin: 0, fontSize: 16 }, children: t("title") }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", gap: 8, flexWrap: "wrap" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { style: muted, children: [
        t("platform"),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", { style: select, value: platform, onChange: (event) => {
          setPlatform(event.target.value);
        }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "", children: t("all") }),
          platforms.map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value, children: value }, value))
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { style: muted, children: [
        t("group"),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", { style: select, value: group, onChange: (event) => {
          setGroup(event.target.value);
        }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "", children: t("all") }),
          groups.map((value) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value, children: value }, value))
        ] })
      ] })
    ] }),
    visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { style: muted, children: t("empty") }) : null,
    visible.map((account) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: row, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: account.display_name || account.username || account.name || account.id }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { style: { ...muted, marginTop: 4 }, children: [account.platform, account.group].filter(Boolean).join(" \xB7 ") })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "button",
        {
          type: "button",
          style: button,
          disabled: busy !== "",
          onClick: () => {
            run(String(account.id), () => disconnectAccount(String(account.id)));
          },
          children: t("disconnect")
        }
      )
    ] }, String(account.id))),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", gap: 8 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "input",
        {
          style: input,
          value: nextPlatform,
          disabled: busy !== "",
          placeholder: t("platformHint"),
          onChange: (event) => {
            setNextPlatform(event.target.value);
          }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "button",
        {
          type: "button",
          style: button,
          disabled: busy !== "" || nextPlatform.trim() === "",
          onClick: () => {
            run("connect", () => connectAccount(nextPlatform.trim()));
          },
          children: t("connect")
        }
      )
    ] }),
    error !== "" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { style: muted, children: error }) : null
  ] });
}

// src/client/index.js
var name = "dsh-omnimux-accounts";
var inject = ["slots", "locale"];
function apply(ctx) {
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), "dsh-omnimux-accounts: dictionaries");
  const t = ctx.locale.bind(NS);
  ctx.slots.inject("settings.plugins.tab", () => ctx.slots.register({
    name: "settings.plugins.tab",
    id: "omnimux-accounts",
    order: 30,
    label: () => t("nav"),
    locale: NS,
    inject: () => ({ t })
  }, AccountsSection));
}

    return module.exports;
  }
});
