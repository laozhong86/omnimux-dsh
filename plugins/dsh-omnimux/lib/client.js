window.__ModuleLoader__.load({
  id: "dsh-omnimux",
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
  "profile.loading": "\u6B63\u5728\u8BFB\u53D6\u2026",
  "plugins.nav": "\u5E94\u7528",
  "plugins.title": "\u5E94\u7528",
  "plugins.needLogin": "\u67E5\u770B\u5DF2\u53D1\u5E03\u7684\u5E94\u7528\u9700\u8981\u767B\u5F55 OmniMux\u3002",
  "plugins.login": "\u767B\u5F55",
  "plugins.waiting": "\u8BF7\u5728\u6253\u5F00\u7684\u9875\u9762\u786E\u8BA4\u767B\u5F55\u3002",
  "plugins.code": "\u8BBE\u5907\u7801",
  "plugins.open": "\u6253\u5F00\u786E\u8BA4\u9875",
  "plugins.empty": "\u8FD8\u6CA1\u6709\u5DF2\u53D1\u5E03\u7684\u5E94\u7528\u3002\u5E02\u573A\u76EE\u5F55\u4E0B\u4E00\u671F\u63A5\u901A\u3002",
  "plugins.hub": "\u672C\u673A\u4E2D\u67A2\u80FD\u529B",
  "plugins.cap.identity": "\u8EAB\u4EFD",
  "plugins.cap.videoGenerate": "\u89C6\u9891\u751F\u6210",
  "plugins.cap.imageGenerate": "\u56FE\u50CF\u751F\u6210",
  "plugins.cap.official": "\u5B98\u65B9\u793E\u4EA4\u63A5\u53E3",
  "plugins.cap.on": "\u5DF2\u6302\u4E0A",
  "plugins.cap.off": "\u672A\u6302\u4E0A",
  "plugins.denied": "\u767B\u5F55\u88AB\u62D2\u7EDD\u3002",
  "plugins.expired": "\u767B\u5F55\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u8BD5\u3002",
  "plugins.error": "\u767B\u5F55\u5931\u8D25\u3002",
  "plugins.close": "\u5173\u95ED\u5E94\u7528"
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
  "profile.loading": "Loading\u2026",
  "plugins.nav": "Apps",
  "plugins.title": "Apps",
  "plugins.needLogin": "Sign in to OmniMux to see apps you published.",
  "plugins.login": "Sign in",
  "plugins.waiting": "Confirm the login in the opened page.",
  "plugins.code": "Device code",
  "plugins.open": "Open confirmation page",
  "plugins.empty": "No published apps yet. The catalog comes in a later release.",
  "plugins.hub": "Hub capabilities on this machine",
  "plugins.cap.identity": "Identity",
  "plugins.cap.videoGenerate": "Video generate",
  "plugins.cap.imageGenerate": "Image generate",
  "plugins.cap.official": "Official social APIs",
  "plugins.cap.on": "mounted",
  "plugins.cap.off": "missing",
  "plugins.denied": "Sign-in was denied.",
  "plugins.expired": "Sign-in expired. Try again.",
  "plugins.error": "Sign-in failed.",
  "plugins.close": "Close apps"
};
var NS = "omnimux";

// src/client/apps-store.js
function createAppsStore() {
  let open = false;
  const listeners = /* @__PURE__ */ new Set();
  function emit() {
    for (const listener of listeners) listener();
  }
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
      emit();
    },
    toggle() {
      open = !open;
      emit();
    }
  };
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
  "error",
  "identity",
  "videoGenerate",
  "imageGenerate",
  "official"
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
function getCapabilities() {
  return authRequest("/omnimux/capabilities");
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

// src/client/ProfileSection.jsx
var import_jsx_runtime = require("react/jsx-runtime");
var page = {
  padding: "16px 20px",
  color: "var(--dsw-text-primary, inherit)",
  display: "flex",
  flexDirection: "column",
  gap: 12,
  maxWidth: 480
};
var muted = { color: "var(--dsw-text-secondary, inherit)", lineHeight: 1.5 };
var row = { display: "flex", justifyContent: "space-between", gap: 16 };
var button = {
  alignSelf: "flex-start",
  padding: "6px 12px",
  border: "1px solid var(--dsw-border, currentColor)",
  background: "transparent",
  color: "inherit",
  borderRadius: 6,
  cursor: "pointer"
};
function ProfileSection({ t }) {
  const { state, beginLogin, signOut, openUrl } = useOmnimuxAuth({ verifyOnMount: false });
  if (state.phase === "ready") {
    const profile = state.profile || {};
    const money = (value) => typeof value === "number" ? `$${value.toFixed(2)}` : "\u2014";
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: page, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { style: { margin: 0, fontSize: 16 }, children: t("profile.title") }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { style: muted, children: t("profile.signedIn") }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: row, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("profile.username") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: profile.username || "\u2014" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: row, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("profile.displayName") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: profile.display_name || "\u2014" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: row, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("profile.group") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: profile.group || "\u2014" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: row, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("profile.quota") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: money(profile.quota_usd) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: row, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("profile.used") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: money(profile.used_quota_usd) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: row, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t("profile.site") }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: profile.base_url || "\u2014" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", style: button, onClick: () => {
        void signOut();
      }, children: t("profile.logout") })
    ] });
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: page, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { style: { margin: 0, fontSize: 16 }, children: t("profile.title") }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { style: muted, children: message }),
    state.phase === "error" && state.detail ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { style: muted, children: state.detail }) : null,
    state.phase === "waiting" && state.user_code ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { style: muted, children: [
      t("plugins.code"),
      ": ",
      state.user_code
    ] }) : null,
    state.phase === "waiting" && state.verification_url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", style: button, onClick: () => openUrl(state.verification_url), children: t("plugins.open") }) : null,
    showLogin ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", style: button, onClick: () => {
      void beginLogin();
    }, children: t("plugins.login") }) : null
  ] });
}

// src/client/AppsEntry.jsx
var import_react2 = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var fill = "var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.08))";
var item = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: 8,
  width: "100%",
  height: 32,
  padding: "0 8px",
  margin: "0 0 4px",
  boxSizing: "border-box",
  border: "none",
  borderRadius: 8,
  background: "transparent",
  color: "var(--dsw-alias-label-primary, inherit)",
  font: "inherit",
  fontSize: 14,
  fontWeight: 400,
  lineHeight: "22px",
  textAlign: "left",
  cursor: "pointer"
};
var railItem = {
  ...item,
  alignSelf: "flex-start",
  justifyContent: "center",
  width: 36,
  height: 36,
  padding: 0,
  margin: "0 0 8px",
  gap: 0
};
function AppsIcon({ size }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("svg", { width: size, height: size, viewBox: "0 0 16 16", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { x: "1.5", y: "1.5", width: "5", height: "5", rx: "1", fill: "none", stroke: "currentColor", strokeWidth: "1.25" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { x: "9.5", y: "1.5", width: "5", height: "5", rx: "1", fill: "none", stroke: "currentColor", strokeWidth: "1.25" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { x: "1.5", y: "9.5", width: "5", height: "5", rx: "1", fill: "none", stroke: "currentColor", strokeWidth: "1.25" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("rect", { x: "9.5", y: "9.5", width: "5", height: "5", rx: "1", fill: "none", stroke: "currentColor", strokeWidth: "1.25" })
  ] });
}
function AppsEntry({ wide, t, apps }) {
  const open = (0, import_react2.useSyncExternalStore)(apps.subscribe, apps.getSnapshot);
  const [hover, setHover] = (0, import_react2.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "button",
    {
      type: "button",
      style: {
        ...wide ? item : railItem,
        ...open || hover ? { background: fill } : {}
      },
      "aria-label": t("plugins.nav"),
      "aria-pressed": open,
      onMouseEnter: () => {
        setHover(true);
      },
      onMouseLeave: () => {
        setHover(false);
      },
      onClick: () => {
        apps?.toggle();
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AppsIcon, { size: wide ? 16 : 18 }),
        wide && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: t("plugins.nav") })
      ]
    }
  );
}

// src/client/AppsStage.jsx
var import_react4 = require("react");

// src/client/conversation-box.js
function sizableBox(node) {
  if (!node || typeof node.getBoundingClientRect !== "function") return null;
  const rect = node.getBoundingClientRect();
  if (rect.width >= 8 && rect.height >= 8) {
    return { top: rect.top, left: rect.left, width: rect.width, height: rect.height };
  }
  return null;
}
function readConversationBox() {
  const preferred = sizableBox(document.querySelector("[data-conversation-scroll]"));
  if (preferred) return preferred;
  let node = document.querySelector('[data-slot="conversation"]');
  while (node) {
    const box = sizableBox(node);
    if (box) return box;
    node = node.parentElement;
  }
  const left = 56;
  return { top: 0, left, width: Math.max(8, window.innerWidth - left), height: Math.max(8, window.innerHeight) };
}

// src/client/PluginsSection.jsx
var import_react3 = require("react");
var import_jsx_runtime3 = require("react/jsx-runtime");
var page2 = {
  padding: "16px 20px",
  color: "var(--dsw-text-primary, inherit)",
  display: "flex",
  flexDirection: "column",
  gap: 12,
  maxWidth: 520
};
var gate = {
  flex: 1,
  minHeight: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 12,
  padding: "16px 20px",
  color: "var(--dsw-text-primary, inherit)",
  textAlign: "center"
};
var muted2 = { color: "var(--dsw-text-secondary, inherit)", lineHeight: 1.5, margin: 0 };
var button2 = {
  padding: "8px 24px",
  border: "1px solid var(--dsw-border, currentColor)",
  background: "transparent",
  color: "inherit",
  borderRadius: 6,
  cursor: "pointer"
};
var CAP_KEYS = ["identity", "videoGenerate", "imageGenerate", "official"];
function PluginsSection({ t }) {
  const { state, beginLogin, openUrl } = useOmnimuxAuth({ verifyOnMount: true });
  const [caps, setCaps] = (0, import_react3.useState)(null);
  (0, import_react3.useEffect)(() => {
    if (state.phase !== "ready") return void 0;
    let cancelled = false;
    getCapabilities().then((result) => {
      if (!cancelled) setCaps(result.body);
    }).catch(() => {
      if (!cancelled) setCaps(null);
    });
    return () => {
      cancelled = true;
    };
  }, [state.phase]);
  if (state.phase === "ready") {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: page2, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: muted2, children: t("plugins.empty") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: { ...muted2, marginTop: 8 }, children: t("plugins.hub") }),
      caps ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("ul", { style: { margin: 0, paddingLeft: 18, lineHeight: 1.7 }, children: CAP_KEYS.map((key) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("li", { children: [
        t(`plugins.cap.${key}`),
        " \u2014 ",
        caps[key] ? t("plugins.cap.on") : t("plugins.cap.off")
      ] }, key)) }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: muted2, children: t("profile.loading") })
    ] });
  }
  const message = {
    checking: t("profile.loading"),
    "need-login": t("plugins.needLogin"),
    starting: t("profile.loading"),
    waiting: t("plugins.waiting"),
    denied: t("plugins.denied"),
    expired: t("plugins.expired"),
    error: t("plugins.error")
  }[state.phase] || t("plugins.needLogin");
  const showLogin = state.phase === "need-login" || state.phase === "denied" || state.phase === "expired" || state.phase === "error";
  const showStatus = state.phase !== "need-login";
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: gate, children: [
    showStatus ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: muted2, children: message }) : null,
    state.phase === "error" && state.detail ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: muted2, children: state.detail }) : null,
    state.phase === "waiting" && state.user_code ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("p", { style: muted2, children: [
      t("plugins.code"),
      ": ",
      state.user_code
    ] }) : null,
    state.phase === "waiting" && state.verification_url ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "button", style: button2, onClick: () => openUrl(state.verification_url), children: t("plugins.open") }) : null,
    showLogin ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "button", style: button2, onClick: () => {
      void beginLogin();
    }, children: t("plugins.login") }) : null
  ] });
}

// src/client/AppsStage.jsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function AppsStage({ t, apps, useSessions }) {
  const open = (0, import_react4.useSyncExternalStore)(
    apps ? apps.subscribe : () => () => {
    },
    apps ? apps.getSnapshot : () => false
  );
  const readSessions = useSessions ?? ((select) => select({}));
  const currentSession = readSessions((state) => state.current);
  const lastSession = (0, import_react4.useRef)(currentSession);
  const [box, setBox] = (0, import_react4.useState)(() => readConversationBox());
  (0, import_react4.useLayoutEffect)(() => {
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
  (0, import_react4.useEffect)(() => {
    if (open && lastSession.current !== currentSession) apps?.set(false);
    lastSession.current = currentSession;
  }, [apps, currentSession, open]);
  (0, import_react4.useEffect)(() => {
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
        zIndex: 20,
        pointerEvents: "auto",
        display: "flex",
        flexDirection: "column",
        background: "var(--dsw-alias-bg-primary, var(--dsw-bg, #111))",
        color: "var(--dsw-alias-label-primary, inherit)",
        overflow: "auto"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "button",
          {
            type: "button",
            "aria-label": t("plugins.close"),
            onClick: () => {
              apps.set(false);
            },
            style: {
              position: "absolute",
              top: 12,
              right: 16,
              zIndex: 1,
              border: "none",
              background: "transparent",
              color: "inherit",
              cursor: "pointer",
              fontSize: 18,
              lineHeight: 1,
              padding: 4
            },
            children: "\xD7"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: { flex: 1, minHeight: 0, display: "flex", flexDirection: "column", overflow: "auto" }, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(PluginsSection, { t }) })
      ]
    }
  );
}

// src/brand/defaults.js
var BOOT_WINDOW_KEY = "__OMNIMUX_BRAND__";
var OFFICIAL_PRODUCT_TITLE = "DeepSeek Harness";
var FISH_VIEWBOX = "0 0 23.16 17.04";
var WORDMARK_VIEWBOX = "0 0 182 24";
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
  coverWordmarks(document2, config, restores);
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
  for (const svg of officialSvgs(document2, WORDMARK_VIEWBOX)) {
    coverOfficial(svg, createWordmark(document2, config), restores);
  }
}
function coverRailFish(document2, config, restores) {
  for (const svg of officialSvgs(document2, FISH_VIEWBOX)) {
    const width = Number.parseFloat(svg.getAttribute("width") ?? "0");
    if (width >= HERO_FISH_MIN_WIDTH) continue;
    coverOfficial(svg, createMark(document2, config.logoSvg, svg), restores);
  }
}
function coverHeroFish(document2, config, restores) {
  if (!config.replaceHeroMark) return;
  for (const svg of officialSvgs(document2, FISH_VIEWBOX)) {
    const width = Number.parseFloat(svg.getAttribute("width") ?? "0");
    if (width < HERO_FISH_MIN_WIDTH) continue;
    coverOfficial(svg, createMark(document2, config.logoSvg, svg), restores);
  }
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
  if (official.hasAttribute(COVER_ATTR)) return;
  const sibling = official.nextElementSibling;
  if (sibling?.hasAttribute(BRAND_ATTR)) {
    official.setAttribute(COVER_ATTR, "");
    return;
  }
  const parent = official.parentElement;
  if (parent === null) return;
  const previousPosition = parent.style.position;
  if (previousPosition === "" || previousPosition === "static") {
    parent.style.position = "relative";
  }
  official.setAttribute(COVER_ATTR, "");
  branded.style.position = "absolute";
  branded.style.left = "0";
  branded.style.top = "50%";
  branded.style.transform = "translateY(-50%)";
  branded.style.pointerEvents = "none";
  branded.style.zIndex = "1";
  official.after(branded);
  restores.push(() => {
    branded.remove();
    official.removeAttribute(COVER_ATTR);
    parent.style.position = previousPosition;
  });
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
  const label = document2.createElement("span");
  label.textContent = config.wordmarkText;
  label.style.cssText = "font-size:15px;font-weight:600;letter-spacing:-0.02em;line-height:24px;white-space:nowrap";
  wrap.append(mark, label);
  return wrap;
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
    throw new Error("dsh-omnimux: logoSvg did not parse as an SVG document");
  }
  return document2.importNode(svg, true);
}
function svgDataUri(logoSvg) {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(logoSvg)}`;
}

// src/client/index.js
var name = "dsh-omnimux";
var inject = ["slots", "locale"];
function apply(ctx) {
  ctx.effect(
    () => startOverlay(document, configFromWindow(window)),
    "dsh-omnimux: brand overlay"
  );
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), "dsh-omnimux: dictionaries");
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
  ctx.slots.inject("shell.overlay", () => ctx.slots.register({
    name: "shell.overlay",
    id: "omnimux-apps-stage",
    order: 20,
    locale: NS,
    inject: appsFace
  }, AppsStage));
  ctx.slots.inject("sidebar.footer.action", () => ctx.slots.register({
    name: "sidebar.footer.action",
    id: "omnimux-apps",
    order: 0,
    label: () => t("plugins.nav"),
    locale: NS,
    inject: appsFace
  }, AppsEntry));
}

    return module.exports;
  }
});
