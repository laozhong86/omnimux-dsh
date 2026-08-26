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
  "title": "\u8D26\u53F7\u77E9\u9635",
  "loading": "\u6B63\u5728\u52A0\u8F7D\u8D26\u53F7\u2026",
  "needLogin": "\u767B\u5F55 OmniMux \u4EE5\u67E5\u770B\u5DF2\u8FDE\u63A5\u8D26\u53F7\u3002",
  "needLoginHint": "\u53EF\u5728 \u8BBE\u7F6E \u2192 \u4E2A\u4EBA\u8D44\u6599 \u4E2D\u767B\u5F55 OmniMux\u3002",
  "login": "\u767B\u5F55",
  "empty": "\u6682\u65E0\u5DF2\u8FDE\u63A5\u8D26\u53F7",
  "platform": "\u5E73\u53F0",
  "group": "\u5206\u7EC4",
  "all": "\u5168\u90E8",
  "connect": "\u8FDE\u63A5\u8D26\u53F7",
  "disconnect": "\u65AD\u5F00",
  "platformHint": "\u5E73\u53F0\uFF0C\u4F8B\u5982 tiktok",
  "close": "\u5173\u95ED",
  "overview.connected": "\u6B63\u5E38\u8FDE\u63A5",
  "overview.needsAttention": "\u9700\u91CD\u65B0\u6388\u6743",
  "overview.platforms": "\u5E73\u53F0\u6570",
  "overview.total": "\u8D26\u53F7\u603B\u6570",
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
  "status.active": "\u6B63\u5E38",
  "status.expiring": "\u5373\u5C06\u8FC7\u671F",
  "status.expired": "\u5DF2\u8FC7\u671F",
  "status.error": "\u5F02\u5E38",
  "card.agentUsable": "Agent \u8BBF\u95EE\u6743\u9650",
  "card.agentUsableOn": "Agent \u8BBF\u95EE\u6743\u9650\uFF1A\u5DF2\u542F\u7528",
  "card.agentUsableOff": "Agent \u8BBF\u95EE\u6743\u9650\uFF1A\u5DF2\u7981\u7528",
  "card.lastUsed": "\u6700\u540E\u4F7F\u7528\uFF1A{time}",
  "card.expiresIn": "{time}\u540E\u8FC7\u671F",
  "card.menu": "\u66F4\u591A\u64CD\u4F5C",
  "card.confirmDisconnect": "\u786E\u5B9A\u65AD\u5F00\u8FDE\u63A5 {name}\uFF1F\u65AD\u5F00\u540E Agent \u5C06\u65E0\u6CD5\u4F7F\u7528\u8BE5\u8D26\u53F7\u6267\u884C\u53D1\u5E03\u4EFB\u52A1\u3002",
  "action.cancel": "\u53D6\u6D88",
  "connect.title": "\u8FDE\u63A5\u65B0\u8D26\u53F7",
  "connect.choosePlatform": "\u9009\u62E9\u5E73\u53F0",
  "connect.comingSoon": "\u5373\u5C06\u652F\u6301",
  "connect.opened": "\u6388\u6743\u9875\u9762\u5DF2\u5728\u65B0\u7A97\u53E3\u6253\u5F00\uFF0C\u8BF7\u5728\u6D4F\u89C8\u5668\u4E2D\u5B8C\u6210\u6388\u6743\u3002",
  "connect.reopen": "\u91CD\u65B0\u6253\u5F00\u6388\u6743\u9875",
  "connect.waiting": "\u6B63\u5728\u7B49\u5F85\u6388\u6743\u2026 \u5B8C\u6210\u540E\u5C06\u81EA\u52A8\u540C\u6B65\u72B6\u6001\u3002",
  "connect.done": "\u5B8C\u6210\u6388\u6743",
  "connect.connected": "\u5DF2\u8FDE\u63A5",
  "connect.failed": "\u8FDE\u63A5\u5931\u8D25",
  "connect.retry": "\u91CD\u8BD5",
  "empty.title": "\u672A\u8FDE\u63A5\u793E\u4EA4\u5E73\u53F0\u8D26\u53F7",
  "empty.description": "\u8FDE\u63A5\u793E\u4EA4\u5E73\u53F0\u8D26\u53F7\u540E\uFF0CAgent \u5373\u53EF\u81EA\u52A8\u6267\u884C\u591A\u6E20\u9053\u5185\u5BB9\u5206\u53D1\u4E0E\u6570\u636E\u8FFD\u8E2A\u3002",
  "empty.cta": "\u8FDE\u63A5\u7B2C\u4E00\u4E2A\u8D26\u53F7",
  "empty.supportedTitle": "\u5DF2\u652F\u6301",
  "empty.comingTitle": "\u5373\u5C06\u652F\u6301",
  "bulk.selected": "\u5DF2\u9009 {count} \u9879",
  "bulk.selectAll": "\u5168\u9009",
  "bulk.selectRow": "\u9009\u62E9 {name}",
  "bulk.disconnect": "\u6279\u91CF\u65AD\u5F00",
  "bulk.agentOn": "\u6279\u91CF\u542F\u7528 Agent \u6743\u9650",
  "bulk.agentOff": "\u6279\u91CF\u7981\u7528 Agent \u6743\u9650",
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
  "title": "Account Matrix",
  "loading": "Loading accounts\u2026",
  "needLogin": "Sign in to OmniMux to view connected accounts.",
  "needLoginHint": "Sign in under Settings \u2192 Profile.",
  "login": "Sign in",
  "empty": "No connected accounts",
  "platform": "Platform",
  "group": "Group",
  "all": "All",
  "connect": "Connect Account",
  "disconnect": "Disconnect",
  "platformHint": "Platform, e.g. tiktok",
  "close": "Close",
  "overview.connected": "Connected",
  "overview.needsAttention": "Action Required",
  "overview.platforms": "Platforms",
  "overview.total": "Total Accounts",
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
  "card.agentUsable": "Agent Access",
  "card.agentUsableOn": "Agent Access: Enabled",
  "card.agentUsableOff": "Agent Access: Disabled",
  "card.lastUsed": "Last used {time}",
  "card.expiresIn": "Expires in {time}",
  "card.menu": "More actions",
  "card.confirmDisconnect": "Disconnect {name}? Agents will no longer have access to this account.",
  "action.cancel": "Cancel",
  "connect.title": "Connect a New Account",
  "connect.choosePlatform": "Choose a Platform",
  "connect.comingSoon": "Coming Soon",
  "connect.opened": "Authorization page opened. Complete the authorization in your browser.",
  "connect.reopen": "Reopen Authorization Page",
  "connect.waiting": "Waiting for authorization\u2026 Status updates automatically upon completion.",
  "connect.done": "Done",
  "connect.connected": "Connected",
  "connect.failed": "Connection Failed",
  "connect.retry": "Retry",
  "empty.title": "No Accounts Connected",
  "empty.description": "Connect accounts to allow Agents to publish content and sync analytics.",
  "empty.cta": "Connect First Account",
  "empty.supportedTitle": "Supported",
  "empty.comingTitle": "Coming Soon",
  "bulk.selected": "{count} selected",
  "bulk.selectAll": "Select all",
  "bulk.selectRow": "Select {name}",
  "bulk.disconnect": "Disconnect",
  "bulk.agentOn": "Batch Enable Agent Access",
  "bulk.agentOff": "Batch Disable Agent Access",
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
var ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="14" height="14" fill="none" role="presentation" aria-hidden="true" preserveAspectRatio="xMidYMid meet"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"><path d="M12.527 7c.551-2.024 2.29-3.486 4.473-3.643C19.556 3.173 23.335 3 28.5 3c5.133 0 8.897.171 11.452.354c2.558.182 4.512 2.136 4.694 4.694c.183 2.555.354 6.32.354 11.452c0 5.165-.173 8.944-.357 11.5c-.157 2.183-1.62 3.922-3.643 4.473"/><path d="M35.646 17.047c-.182-2.557-2.136-4.51-4.694-4.693C28.397 12.17 24.632 12 19.5 12c-5.133 0-8.897.171-11.452.354c-2.558.182-4.512 2.136-4.694 4.694C3.17 19.602 3 23.367 3 28.5s.171 8.897.354 11.453c.182 2.557 2.136 4.51 4.694 4.693c2.555.183 6.32.354 11.452.354c5.133 0 8.897-.171 11.452-.354c2.558-.182 4.512-2.136 4.694-4.694c.183-2.555.354-6.32.354-11.452c0-5.133-.171-8.897-.354-11.453"/><path d="M24.026 30.727a7 7 0 1 0-8.066-.01c-2.496.933-4.485 2.709-5.5 4.92c-.646 1.405.16 3.087 1.704 3.18l.044.003a150 150 0 0 0 7.77.18c3.309 0 5.874-.081 7.77-.18l.045-.003c1.543-.093 2.35-1.775 1.704-3.18c-1.012-2.203-2.989-3.974-5.471-4.91"/></g></svg>';
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
var import_react7 = require("react");
var import_dsh_client_ui_primitives2 = require("@deepseek-ai/dsh-client-ui-primitives");

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

// src/client/AccountsSection.jsx
var import_react6 = require("react");

// src/client/account-controls.jsx
var import_react2 = require("react");

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
  const statusGroup = String(filters.statusGroup || "").trim().toLocaleLowerCase();
  return (Array.isArray(accounts) ? accounts : []).filter((row) => {
    if (!matchesQuery(row, query)) return false;
    if (platform && String(row.platform || "").toLocaleLowerCase() !== platform) return false;
    if (group && String(row.group || "").toLocaleLowerCase() !== group) return false;
    if (status) {
      if (String(row.status || "").toLocaleLowerCase() !== status) return false;
    } else if (statusGroup === "connected") {
      const s = String(row.status || "").toLocaleLowerCase();
      if (s !== "active" && s !== "expiring") return false;
    } else if (statusGroup === "needsattention") {
      const s = String(row.status || "").toLocaleLowerCase();
      if (s !== "expired" && s !== "error") return false;
    }
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
var import_jsx_runtime2 = require("react/jsx-runtime");
function AgentSwitch({ t, checked, disabled = false, onToggle }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    IconButton,
    {
      variant: "ghost",
      size: "xs",
      role: "switch",
      className: "omnimux-accounts-switch",
      "aria-checked": String(checked),
      "aria-label": checked ? t("card.agentUsableOn") : t("card.agentUsableOff"),
      title: "",
      disabled,
      onClick: () => {
        onToggle(!checked);
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "omnimux-accounts-switch-knob" })
    }
  );
}
function AccountMenu({ t, name: name2, disabled = false, onDisconnect }) {
  const [popover, setPopover] = (0, import_react2.useState)(null);
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      IconButton,
      {
        variant: "ghost",
        size: "sm",
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
      Button,
      {
        variant: "ghost",
        size: "sm",
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
          Button,
          {
            variant: "danger",
            size: "sm",
            disabled,
            onClick: () => {
              setPopover(null);
              onDisconnect();
            },
            children: t("disconnect")
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button, { variant: "outline", size: "sm", onClick: () => {
          setPopover(null);
        }, children: t("action.cancel") })
      ] })
    ] }) : null
  ] });
}

// src/client/chips.jsx
var import_react3 = require("react");

// src/client/platforms.js
var SUPPORTED_PLATFORMS = Object.freeze(["tiktok", "instagram", "youtube"]);
var COMING_PLATFORMS = Object.freeze(["x", "xiaohongshu", "douyin", "facebook", "wechat-channels"]);
var NEUTRAL_COLOR = "var(--dsw-alias-label-secondary, rgba(255,255,255,0.72))";
var REGISTRY = {
  tiktok: { id: "tiktok", color: "var(--dsw-platform-tiktok, #2C2C2A)", tone: "solid", coming: false },
  instagram: { id: "instagram", color: "var(--dsw-platform-instagram, #E1306C)", tone: "accent", coming: false },
  youtube: { id: "youtube", color: "var(--dsw-platform-youtube, #FF0000)", tone: "accent", coming: false },
  x: { id: "x", color: "var(--dsw-platform-x, #2C2C2A)", tone: "solid", coming: true },
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
var import_jsx_runtime3 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "omnimux-accounts-chip omnimux-accounts-chip--solid", children: label });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "span",
    {
      className: "omnimux-accounts-chip omnimux-accounts-chip--accent",
      style: { "--dsw-accounts-platform-color": info.color },
      children: label
    }
  );
}
function GroupChip({ group }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "omnimux-accounts-chip omnimux-accounts-chip--group", children: group });
}
function Avatar({ account, t }) {
  const [failed, setFailed] = (0, import_react3.useState)(false);
  const url = typeof account.avatar_url === "string" ? account.avatar_url : "";
  const info = platformInfo(account.platform);
  const platformLabel = localeText(t, `platform.${info.id}`, String(account.platform || ""));
  const initial = (platformLabel || "?").charAt(0).toLocaleUpperCase() || "?";
  if (url && !failed) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      "img",
      {
        className: "omnimux-accounts-avatar",
        src: url,
        alt: "",
        loading: "lazy",
        referrerPolicy: "no-referrer",
        onError: () => {
          setFailed(true);
        }
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "omnimux-accounts-avatar-fallback", "aria-hidden": "true", children: initial });
}

// src/client/AccountCard.jsx
var import_jsx_runtime4 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("article", { className: "omnimux-accounts-card", "data-busy": busy === id, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "omnimux-accounts-card-head", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Avatar, { account, t }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "omnimux-accounts-id", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h3", { className: "omnimux-accounts-name", children: name2 }),
        username !== "" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "omnimux-accounts-username", children: username }) : null
      ] })
    ] }),
    typeof account.platform === "string" || typeof account.group === "string" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "omnimux-accounts-chips", children: [
      typeof account.platform === "string" && account.platform !== "" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(PlatformChip, { platform: account.platform, t }) : null,
      typeof account.group === "string" && account.group !== "" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(GroupChip, { group: account.group }) : null
    ] }) : null,
    status !== "" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: `omnimux-accounts-status omnimux-accounts-status--${status}`, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(StatusDot, { status, label: statusLabel }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: statusLabel }),
      expiresSoon ? /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { children: [
        " \xB7 ",
        fmt(t("card.expiresIn"), { time: relativeTime(account.expires_at) })
      ] }) : null
    ] }) : null,
    lastUsed !== "" ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "omnimux-accounts-meta", children: fmt(t("card.lastUsed"), { time: lastUsed }) }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "omnimux-accounts-switchrow", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "omnimux-accounts-switch-label", children: t("card.agentUsable") })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(AccountMenu, { t, name: name2, disabled, onDisconnect: () => {
      onDisconnect(id);
    } })
  ] });
}

// src/client/AccountTable.jsx
var import_jsx_runtime5 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "omnimux-accounts-tablewrap", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("table", { className: "omnimux-accounts-table", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("tr", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { scope: "col", className: "omnimux-accounts-table-check", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
      COLUMNS.map((column) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        "th",
        {
          scope: "col",
          "aria-sort": column.sortKey && sortKey === column.sortKey ? sortDir === "asc" ? "ascending" : "descending" : "none",
          children: column.sortKey ? /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
            Button,
            {
              variant: "ghost",
              size: "xs",
              className: "omnimux-accounts-sortbtn",
              disabled,
              onClick: () => {
                onSortHeader(column.sortKey);
              },
              children: [
                t(column.labelKey),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "omnimux-accounts-sortmark", "aria-hidden": "true", children: sortKey === column.sortKey ? sortDir === "asc" ? "\u2191" : "\u2193" : "\u2195" })
              ]
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "omnimux-accounts-thtext", children: t(column.labelKey) })
        },
        column.id
      )),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { scope: "col", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "omnimux-accounts-thtext", children: t("card.agentUsable") }) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("th", { scope: "col", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "omnimux-accounts-thtext", children: t("card.menu") }) })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("tbody", { children: accounts.map((account) => {
      const id = String(account.id);
      const name2 = rowName(account);
      const username = typeof account.username === "string" && account.username !== "" ? `@${account.username}` : "";
      const status = typeof account.status === "string" ? account.status : "";
      const statusLabel = localeText(t, `status.${status}`, status);
      const lastUsed = typeof account.last_used_at === "string" ? relativeTime(account.last_used_at) : "";
      const isSelected = selected.has(id);
      return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("tr", { className: isSelected ? "omnimux-accounts-row-selected" : void 0, "data-busy": disabled, children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { className: "omnimux-accounts-table-check", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "omnimux-accounts-cell-id", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Avatar, { account, t }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "omnimux-accounts-id", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "omnimux-accounts-name", children: name2 }),
            username !== "" ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "omnimux-accounts-username", children: username }) : null
          ] })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { children: typeof account.platform === "string" && account.platform !== "" ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(PlatformChip, { platform: account.platform, t }) : null }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { children: typeof account.group === "string" && account.group !== "" ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(GroupChip, { group: account.group }) : null }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { children: status !== "" ? /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: `omnimux-accounts-status omnimux-accounts-status--${status}`, children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(StatusDot, { status, label: statusLabel }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: statusLabel })
        ] }) : null }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { children: lastUsed !== "" ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "omnimux-accounts-meta", children: lastUsed }) : null }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "omnimux-accounts-cellmenu", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(AccountMenu, { t, name: name2, disabled, onDisconnect: () => {
          onDisconnect(id);
        } }) }) })
      ] }, id);
    }) })
  ] }) });
}

// src/client/ConnectModal.jsx
var import_react4 = require("react");

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
var import_jsx_runtime6 = require("react/jsx-runtime");
function ConnectModal({ t, watchConnect, onClose, onConnected }) {
  const [phase, setPhase] = (0, import_react4.useState)("select");
  const [platform, setPlatform] = (0, import_react4.useState)("");
  const [authUrl, setAuthUrl] = (0, import_react4.useState)("");
  const [error, setError] = (0, import_react4.useState)("");
  const firstPlatformRef = (0, import_react4.useRef)(null);
  const stopRef = (0, import_react4.useRef)(null);
  (0, import_react4.useEffect)(() => {
    firstPlatformRef.current?.focus();
  }, []);
  (0, import_react4.useEffect)(() => () => {
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
  const footer = phase === "waiting" ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Button, { variant: "outline", onClick: handleClose, children: t("action.cancel") }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Button, { variant: "primary", onClick: handleClose, children: t("connect.done") })
  ] }) : phase === "error" ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_jsx_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Button, { variant: "outline", onClick: handleClose, children: t("action.cancel") }),
    platform !== "" ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Button, { variant: "primary", onClick: () => {
      void startConnect(platform);
    }, children: t("connect.retry") }) : null
  ] }) : void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    ModalDialog,
    {
      open: true,
      onClose: handleClose,
      title: t("connect.title"),
      closeLabel: t("close"),
      size: "lg",
      footer,
      children: [
        phase === "select" || phase === "opening" ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "omnimux-accounts-modal-body", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "omnimux-accounts-muted", children: t("connect.choosePlatform") }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "omnimux-accounts-platform-grid", children: [
            SUPPORTED_PLATFORMS.map((id, index) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
              Button,
              {
                ref: index === 0 ? firstPlatformRef : void 0,
                className: "omnimux-accounts-platform-btn",
                disabled: phase === "opening",
                onClick: () => {
                  void startConnect(id);
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(PlatformChip, { platform: id, t }),
                  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "omnimux-accounts-platform-name", children: localeText(t, `platform.${id}`, id) })
                ]
              },
              id
            )),
            COMING_PLATFORMS.map((id) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "omnimux-accounts-platform-btn omnimux-accounts-platform-btn--coming", children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(PlatformChip, { platform: id, t }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "omnimux-accounts-platform-name", children: localeText(t, `platform.${id}`, id) }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "omnimux-accounts-platform-soon", children: t("connect.comingSoon") })
            ] }, id))
          ] })
        ] }) : null,
        phase === "waiting" ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "omnimux-accounts-modal-body", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "omnimux-accounts-modal-text", children: t("connect.opened") }),
          authUrl !== "" ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            Button,
            {
              variant: "ghost",
              className: "omnimux-accounts-modal-link",
              onClick: () => {
                window.open(authUrl, "_blank", "noopener,noreferrer");
              },
              children: t("connect.reopen")
            }
          ) : null,
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "omnimux-accounts-muted", children: t("connect.waiting") })
        ] }) : null,
        phase === "error" ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("p", { className: "omnimux-accounts-error", role: "alert", children: [
          t("connect.failed"),
          error !== "" ? `\uFF1A${error}` : ""
        ] }) : null
      ]
    }
  );
}

// src/client/EmptyState.jsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function EmptyState({ t, onConnect, busy = "" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "omnimux-accounts-empty", children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
      "svg",
      {
        className: "omnimux-accounts-empty-icon",
        viewBox: "0 0 120 96",
        width: "120",
        height: "96",
        "aria-hidden": "true",
        focusable: "false",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("g", { fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", opacity: "0.9", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("circle", { cx: "60", cy: "48", r: "14" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("circle", { cx: "60", cy: "48", r: "24", opacity: "0.35", strokeDasharray: "3 5" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("circle", { cx: "60", cy: "48", r: "38", opacity: "0.2", strokeDasharray: "3 6" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: "M60 34 L26 16 M72 40 L96 24 M68 60 L98 76 M50 60 L22 78", opacity: "0.55" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("g", { fill: "currentColor", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("circle", { cx: "60", cy: "48", r: "5" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("circle", { cx: "26", cy: "16", r: "4", opacity: "0.8" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("circle", { cx: "96", cy: "24", r: "4", opacity: "0.8" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("circle", { cx: "98", cy: "76", r: "4", opacity: "0.55" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("circle", { cx: "22", cy: "78", r: "4", opacity: "0.55" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", { className: "omnimux-accounts-empty-title", children: t("empty.title") }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "omnimux-accounts-empty-text", children: t("empty.description") }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Button, { variant: "primary", disabled: busy !== "", onClick: onConnect, children: t("empty.cta") }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "omnimux-accounts-empty-platforms", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "omnimux-accounts-empty-group", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "omnimux-accounts-empty-grouptitle", children: t("empty.supportedTitle") }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "omnimux-accounts-chips", children: SUPPORTED_PLATFORMS.map((id) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(PlatformChip, { platform: id, t }, id)) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "omnimux-accounts-empty-group", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "omnimux-accounts-empty-grouptitle", children: t("empty.comingTitle") }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "omnimux-accounts-chips", children: COMING_PLATFORMS.map((id) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("span", { className: "omnimux-accounts-empty-soonchip", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(PlatformChip, { platform: id, t }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "omnimux-accounts-platform-soon", children: t("connect.comingSoon") })
        ] }, id)) })
      ] })
    ] })
  ] });
}

// src/client/FilterBar.jsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function FilterBar2(props) {
  const { t, query, platform, group, status, sortKey, sortDir, view, platforms, groups, statuses, onFilterChange, onSortChange, onViewChange, busy = "" } = props;
  const disabled = busy !== "";
  const sortOptions = [
    { value: "display_name", label: t("sort.display_name") },
    { value: "platform", label: t("sort.platform") },
    { value: "status", label: t("sort.status") },
    { value: "last_used_at", label: t("sort.lastUsed") }
  ];
  const platformOptions = [
    { value: "", label: `${t("platform")} \xB7 ${t("all")}` },
    ...platforms.map((value) => ({ value, label: value }))
  ];
  const groupOptions = [
    { value: "", label: `${t("group")} \xB7 ${t("all")}` },
    ...groups.map((value) => ({ value, label: value }))
  ];
  const statusOptions = [
    { value: "", label: `${t("filter.status")} \xB7 ${t("all")}` },
    ...statuses.map((value) => ({ value, label: t(`status.${value}`) }))
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    FilterBar,
    {
      className: "omnimux-accounts-filterbar",
      compact: true,
      search: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        SearchField,
        {
          value: query,
          placeholder: t("filter.search"),
          "aria-label": t("filter.search"),
          disabled,
          debounceMs: 0,
          stretch: true,
          onValueChange: (next) => {
            onFilterChange({ query: next });
          }
        }
      ),
      filters: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_jsx_runtime8.Fragment, { children: [
        platforms.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          DropdownSelect,
          {
            value: platform,
            options: platformOptions,
            "aria-label": t("platform"),
            disabled,
            onChange: (nextPlatform) => {
              onFilterChange({ platform: nextPlatform });
            }
          }
        ) : null,
        groups.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          DropdownSelect,
          {
            value: group,
            options: groupOptions,
            "aria-label": t("group"),
            disabled,
            onChange: (nextGroup) => {
              onFilterChange({ group: nextGroup });
            }
          }
        ) : null,
        statuses.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          DropdownSelect,
          {
            value: status,
            options: statusOptions,
            "aria-label": t("filter.status"),
            disabled,
            onChange: (nextStatus) => {
              onFilterChange({ status: nextStatus });
            }
          }
        ) : null
      ] }),
      actions: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "omnimux-accounts-filter-actions", role: "group", "aria-label": t("filter.sort"), children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          DropdownSelect,
          {
            value: sortKey,
            options: sortOptions,
            "aria-label": t("filter.sort"),
            disabled,
            onChange: (nextKey) => {
              onSortChange({ key: nextKey });
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          IconButton,
          {
            variant: "outline",
            size: "sm",
            "aria-label": t("filter.direction"),
            "aria-pressed": sortDir === "desc",
            disabled,
            onClick: () => {
              onSortChange({ dir: sortDir === "asc" ? "desc" : "asc" });
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("svg", { viewBox: "0 0 16 16", width: "13", height: "13", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true", children: sortDir === "asc" ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { d: "M8 12.5V3.5M4 6.5l4-4 4 4" }) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { d: "M8 3.5v9M4 9.5l4 4 4-4" }) })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          IconButton,
          {
            variant: "outline",
            size: "sm",
            "aria-label": t("filter.viewGrid"),
            title: t("filter.viewGrid"),
            "aria-pressed": view === "grid",
            disabled,
            onClick: () => {
              onViewChange("grid");
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("svg", { viewBox: "0 0 16 16", width: "13", height: "13", fill: "none", stroke: "currentColor", strokeWidth: "1.3", "aria-hidden": "true", children: [
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("rect", { x: "2.5", y: "2.5", width: "4.5", height: "4.5", rx: "1" }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("rect", { x: "9", y: "2.5", width: "4.5", height: "4.5", rx: "1" }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("rect", { x: "2.5", y: "9", width: "4.5", height: "4.5", rx: "1" }),
              /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("rect", { x: "9", y: "9", width: "4.5", height: "4.5", rx: "1" })
            ] })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          IconButton,
          {
            variant: "outline",
            size: "sm",
            "aria-label": t("filter.viewTable"),
            title: t("filter.viewTable"),
            "aria-pressed": view === "table",
            disabled,
            onClick: () => {
              onViewChange("table");
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("svg", { viewBox: "0 0 16 16", width: "13", height: "13", fill: "none", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { d: "M2.5 4h11M2.5 8h11M2.5 12h11" }) })
          }
        )
      ] })
    }
  );
}

// src/client/OverviewBar.jsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function OverviewBar({ t, summary, filters = {}, onFilterClick, busy = "" }) {
  const isTotalSelected = Boolean(
    !filters.query && !filters.platform && !filters.group && !filters.status && !filters.statusGroup && !filters.overview
  );
  const stats = [
    {
      key: "connected",
      label: t("overview.connected"),
      value: summary.connected,
      tone: "active",
      selected: filters.statusGroup === "connected",
      filter: { status: "", statusGroup: "connected", overview: "" }
    },
    {
      key: "needsAttention",
      label: t("overview.needsAttention"),
      value: summary.needsAttention,
      tone: "needsAttention",
      selected: filters.statusGroup === "needsAttention",
      filter: { status: "", statusGroup: "needsAttention", overview: "" }
    },
    {
      key: "platforms",
      label: t("overview.platforms"),
      value: summary.platformCount,
      tone: "platforms",
      selected: filters.overview === "platforms",
      filter: { platform: "", overview: "platforms" }
    },
    {
      key: "total",
      label: t("overview.total"),
      value: summary.total,
      tone: "total",
      selected: isTotalSelected,
      filter: null
    }
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "omnimux-accounts-overview", role: "group", "aria-label": t("title"), children: stats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
    Button,
    {
      variant: "secondary",
      className: `omnimux-accounts-stat omnimux-accounts-stat--${stat.key}`,
      "aria-pressed": stat.selected,
      disabled: busy !== "",
      onClick: () => {
        onFilterClick(stat.filter);
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("span", { className: "omnimux-accounts-stat-head", children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: `omnimux-accounts-dot omnimux-accounts-dot--${stat.tone}`, "aria-hidden": "true" }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "omnimux-accounts-stat-label", children: stat.label })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "omnimux-accounts-stat-value", children: String(stat.value) })
      ]
    },
    stat.key
  )) });
}

// src/client/use-accounts.js
var import_react5 = require("react");
var WATCH_POLL_MS = 5e3;
var sessionCache = { phase: "loading", accounts: [] };
function useAccounts() {
  const [phase, setPhase] = (0, import_react5.useState)(sessionCache.phase);
  const [accounts, setAccounts] = (0, import_react5.useState)(sessionCache.accounts);
  const [error, setError] = (0, import_react5.useState)("");
  const [busy, setBusy] = (0, import_react5.useState)("");
  const accountsRef = (0, import_react5.useRef)(sessionCache.accounts);
  const watchRef = (0, import_react5.useRef)(null);
  const commitAccounts = (0, import_react5.useCallback)((next) => {
    const rows = Array.isArray(next) ? next : [];
    accountsRef.current = rows;
    sessionCache.accounts = rows;
    setAccounts(rows);
  }, []);
  const applyListResult = (0, import_react5.useCallback)((result) => {
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
  const refresh = (0, import_react5.useCallback)(() => {
    return listAccounts().then(applyListResult).catch((caught) => {
      setError(caught instanceof Error ? caught.message : String(caught));
      sessionCache.phase = "ready";
      setPhase("ready");
      return true;
    });
  }, [applyListResult]);
  (0, import_react5.useEffect)(() => {
    void refresh();
  }, [refresh]);
  const stopWatch = (0, import_react5.useCallback)(() => {
    const watch = watchRef.current;
    watchRef.current = null;
    if (watch) watch.stop();
  }, []);
  const watchConnect = (0, import_react5.useCallback)((platform, onChange) => {
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
  (0, import_react5.useEffect)(() => () => {
    stopWatch();
  }, [stopWatch]);
  const patch = (0, import_react5.useCallback)((id, body) => {
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
  const disconnect = (0, import_react5.useCallback)((id) => {
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
.omnimux-accounts-stage {
  position: fixed;
  z-index: 200;
  top: var(--stage-top);
  left: var(--stage-left);
  width: var(--stage-width);
  height: var(--stage-height);
  display: flex;
  flex-direction: column;
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-primary, inherit);
  overflow: auto;
  pointer-events: auto;
  -webkit-app-region: no-drag;
}
.omnimux-accounts-stage[data-visible="false"] {
  display: none;
  pointer-events: none;
}
.omnimux-accounts-stage-header {
  flex: none;
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 32px;
  padding: 12px 20px;
  -webkit-app-region: no-drag;
}
.omnimux-accounts-stage-title {
  margin: 0;
  flex: 1;
  min-width: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 32px;
}
.omnimux-accounts-stage-body {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: auto;
}
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
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
  align-items: stretch;
  margin: 0;
}
.omnimux-accounts-stat {
  display: flex !important;
  flex-direction: column !important;
  align-items: flex-start !important;
  justify-content: space-between !important;
  gap: 8px !important;
  min-height: 72px !important;
  height: auto !important;
  padding: 12px 16px !important;
  border: 1px solid var(--dsw-alias-border-l2) !important;
  border-radius: 12px !important;
  background: var(--dsw-alias-bg-secondary, var(--dsw-alias-bg-layer-1, rgba(128,128,128,0.04))) !important;
  color: inherit !important;
  font: inherit !important;
  text-align: left !important;
  white-space: normal !important;
  cursor: pointer !important;
  user-select: none !important;
  box-shadow: none !important;
  transition: background-color 120ms cubic-bezier(0.16, 1, 0.3, 1),
              border-color 120ms cubic-bezier(0.16, 1, 0.3, 1),
              transform 120ms cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 120ms cubic-bezier(0.16, 1, 0.3, 1) !important;
}
.omnimux-accounts-stat:hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.12)) !important;
  border-color: var(--dsw-alias-border-l3, var(--dsw-alias-border-hover, rgba(255,255,255,0.22))) !important;
}
.omnimux-accounts-stat:active {
  transform: scale(0.98) !important;
  background: var(--dsw-alias-interactive-bg-active, rgba(128,128,128,0.18)) !important;
}
.omnimux-accounts-stat:focus {
  outline: none !important;
}
.omnimux-accounts-stat:focus-visible {
  outline: 2px solid var(--dsw-alias-brand-primary, #4c8dff) !important;
  outline-offset: 2px !important;
}
.omnimux-accounts-stat[aria-pressed="true"] {
  background: var(--dsw-alias-button-ghost-active-fill, rgba(255,255,255,0.14)) !important;
  border-color: var(--dsw-alias-button-ghost-active-border, rgba(255,255,255,0.26)) !important;
}
.omnimux-accounts-stat[aria-pressed="true"]:hover {
  background: var(--dsw-alias-button-ghost-active-hover, rgba(255,255,255,0.2)) !important;
  border-color: var(--dsw-alias-button-ghost-active-border, rgba(255,255,255,0.26)) !important;
}
.omnimux-accounts-stat:disabled {
  cursor: default !important;
  opacity: 0.6 !important;
  transform: none !important;
}
.omnimux-accounts-stat > [class*="Button-label"],
.omnimux-accounts-stat > span:first-child {
  display: flex !important;
  flex-direction: column !important;
  align-items: flex-start !important;
  justify-content: space-between !important;
  gap: 8px !important;
  width: 100% !important;
  min-width: 0 !important;
  white-space: normal !important;
}
@media (prefers-reduced-motion: reduce) {
  .omnimux-accounts-stat {
    transition: none !important;
  }
  .omnimux-accounts-stat:active {
    transform: none !important;
  }
}
.omnimux-accounts-stat-head {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.omnimux-accounts-stat-label {
  font-size: 12px;
  line-height: 16px;
  color: var(--dsw-alias-label-secondary, rgba(255,255,255,0.72));
  font-weight: 500;
}
.omnimux-accounts-stat-value {
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.3px;
  color: var(--dsw-alias-label-primary, #ffffff);
}
.omnimux-accounts-toolbar {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: nowrap;
  margin-bottom: 12px;
}
.omnimux-accounts-cta {
  flex-shrink: 0;
  margin-left: auto;
}
/* ---------- filter bar ---------- */
.omnimux-accounts-filterbar {
  flex: 1 1 auto;
  min-width: 0;
  padding: 0;
  height: 44px;
}
.omnimux-accounts-filter-actions {
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}
.omnimux-accounts-search {
  flex: 1 1 200px;
  min-width: 140px;
  max-width: 240px;
  height: 32px;
  padding: 0 12px;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.12));
  border-radius: 8px;
  background: var(--dsw-alias-bg-secondary, rgba(255,255,255,0.04));
  color: inherit;
  font: inherit;
  font-size: 13px;
  transition: all 0.15s ease;
}
.omnimux-accounts-search:hover {
  border-color: var(--dsw-alias-border-hover, rgba(255,255,255,0.22));
  background: var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.07));
}
.omnimux-accounts-search:focus {
  outline: none;
  border-color: var(--dsw-alias-brand-primary, #3b82f6);
  box-shadow: 0 0 0 2px var(--dsw-alias-state-business-tertiary, rgba(59,130,246,0.22));
  background: var(--dsw-alias-bg-secondary, rgba(255,255,255,0.06));
}
.omnimux-accounts-search::placeholder {
  color: var(--dsw-alias-label-tertiary, rgba(255,255,255,0.38));
}

/* ---------- dropdown select ---------- */
.omnimux-accounts-dropdown {
  position: relative;
  display: inline-block;
  flex-shrink: 0;
}
.omnimux-accounts-dropdown-trigger {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 0 10px 0 12px;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.12));
  border-radius: 8px;
  background-color: var(--dsw-alias-bg-secondary, rgba(255,255,255,0.04));
  color: var(--dsw-alias-label-primary, inherit);
  font: inherit;
  font-size: 13px;
  cursor: pointer;
  white-space: nowrap;
  user-select: none;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}
.omnimux-accounts-dropdown-trigger:not(:disabled):hover {
  background-color: var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.08));
  border-color: var(--dsw-alias-border-hover, rgba(255,255,255,0.22));
}
.omnimux-accounts-dropdown-trigger--open {
  background-color: var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.08));
  border-color: var(--dsw-alias-brand-primary, #3b82f6);
  box-shadow: 0 0 0 2px var(--dsw-alias-state-business-tertiary, rgba(59,130,246,0.22));
}
.omnimux-accounts-dropdown-trigger:disabled {
  cursor: default;
  opacity: 0.5;
}
.omnimux-accounts-dropdown-label {
  line-height: 1;
}
.omnimux-accounts-dropdown-chevron {
  flex-shrink: 0;
  opacity: 0.55;
  transition: transform 0.18s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.15s ease;
}
.omnimux-accounts-dropdown-trigger:hover .omnimux-accounts-dropdown-chevron {
  opacity: 0.85;
}
.omnimux-accounts-dropdown-trigger--open .omnimux-accounts-dropdown-chevron {
  transform: rotate(180deg);
  opacity: 1;
  stroke: var(--dsw-alias-brand-primary, #3b82f6);
}
.omnimux-accounts-dropdown-menu {
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  z-index: 50;
  min-width: 100%;
  width: max-content;
  max-width: 240px;
  max-height: 280px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 5px;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.14));
  border-radius: 10px;
  background: var(--dsw-alias-bg-elevated, #1c1c1f);
  box-shadow: 0 10px 28px var(--dsw-alias-bg-mask-1, rgba(0, 0, 0, 0.5)), 0 2px 8px var(--dsw-alias-bg-mask-1, rgba(0, 0, 0, 0.3));
  backdrop-filter: blur(16px);
  animation: omnimux-accounts-menu-pop 0.12s cubic-bezier(0.16, 1, 0.3, 1);
}
@keyframes omnimux-accounts-menu-pop {
  from {
    opacity: 0;
    transform: translateY(-4px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
.omnimux-accounts-dropdown-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  padding: 6px 10px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: var(--dsw-alias-label-secondary, rgba(255,255,255,0.8));
  font: inherit;
  font-size: 13px;
  line-height: 1.4;
  text-align: left;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  transition: background 0.1s ease, color 0.1s ease;
}
.omnimux-accounts-dropdown-item:hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.08));
  color: var(--dsw-alias-label-primary, #ffffff);
}
.omnimux-accounts-dropdown-item--selected {
  background: var(--dsw-alias-state-business-tertiary, rgba(59, 130, 246, 0.12));
  color: var(--dsw-alias-brand-primary, #60a5fa);
  font-weight: 500;
}
.omnimux-accounts-dropdown-item--selected:hover {
  background: var(--dsw-alias-state-business-tertiary, rgba(59, 130, 246, 0.2));
  color: var(--dsw-alias-brand-primary, #93c5fd);
}
.omnimux-accounts-dropdown-item-text {
  flex: 1 1 auto;
}
.omnimux-accounts-dropdown-check {
  flex-shrink: 0;
  stroke: var(--dsw-alias-brand-primary, #60a5fa);
}

.omnimux-accounts-select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  flex-shrink: 0;
  height: 32px;
  padding: 0 28px 0 12px;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.12));
  border-radius: 8px;
  background-color: var(--dsw-alias-bg-secondary, rgba(255,255,255,0.04));
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='12' height='12' fill='none' stroke='rgba(255,255,255,0.45)' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m4 6 4 4 4-4'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;
  color: var(--dsw-alias-label-primary, inherit);
  font: inherit;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.15s ease;
}
.omnimux-accounts-select:hover {
  background-color: var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.08));
  border-color: var(--dsw-alias-border-hover, rgba(255,255,255,0.22));
}
.omnimux-accounts-select:focus {
  outline: none;
  border-color: var(--dsw-alias-brand-primary, #3b82f6);
  box-shadow: 0 0 0 2px var(--dsw-alias-state-business-tertiary, rgba(59,130,246,0.22));
}
.omnimux-accounts-select option {
  background-color: var(--dsw-alias-bg-elevated, #1a1a1c);
  color: var(--dsw-alias-label-primary, #ededed);
}
.omnimux-accounts-select:disabled { cursor: default; opacity: 0.5; }

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
  background: var(--dsw-alias-bg-module-platform);
  color: var(--dsw-alias-label-primary-foreground, var(--dsw-alias-label-primary-inverted));
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
.omnimux-accounts-dot--needsAttention {
  background: var(--dsw-alias-state-warn-primary, var(--dsw-alias-state-warning-primary, #b45309));
}
.omnimux-accounts-dot--platforms {
  background: var(--dsw-alias-brand-primary, #4c8dff);
}
.omnimux-accounts-dot--total {
  background: var(--dsw-alias-label-secondary, rgba(255,255,255,0.72));
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
.omnimux-accounts-stage .omnimux-accounts-switch,
.omnimux-accounts-stage .omnimux-accounts-switch:hover,
.omnimux-accounts-stage .omnimux-accounts-switch:active {
  position: relative;
  width: 36px;
  min-width: 36px;
  height: 20px;
  min-height: 20px;
  padding: 0;
  border: none;
  border-radius: 999px;
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.30));
  cursor: pointer;
  transform: none;
  transition: background 0.15s ease;
  overflow: visible;
}
.omnimux-accounts-stage .omnimux-accounts-switch[aria-checked="true"],
.omnimux-accounts-stage .omnimux-accounts-switch[aria-checked="true"]:hover {
  background: var(--dsw-alias-state-success-primary, #4caf7d);
}
.omnimux-accounts-stage .omnimux-accounts-switch:disabled { cursor: default; opacity: 0.5; }
.omnimux-accounts-switch-knob {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  border-radius: 999px;
  background: var(--dsw-alias-label-primary-foreground, var(--dsw-alias-label-primary-inverted));
  transition: transform 0.15s ease;
  pointer-events: none;
}
.omnimux-accounts-stage .omnimux-accounts-switch[aria-checked="true"] .omnimux-accounts-switch-knob {
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
  box-shadow: 0 8px 24px var(--dsw-alias-bg-mask-1, rgba(0,0,0,0.35));
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  vertical-align: middle;
  position: relative;
}
/* Table-only overrides. Default .omnimux-accounts-more / .omnimux-accounts-popover
   stay absolute so grid cards keep pinning the \u22EF to the card corner. */
.omnimux-accounts-cellmenu .omnimux-accounts-more {
  position: static;
  top: auto;
  right: auto;
  z-index: auto;
  width: 26px;
  height: 26px;
}
.omnimux-accounts-cellmenu .omnimux-accounts-popover {
  top: calc(100% + 4px);
  right: 0;
  left: auto;
  z-index: 6;
  min-width: 200px;
  max-width: min(280px, 70vw);
}
.omnimux-accounts-table tbody tr:last-child .omnimux-accounts-cellmenu .omnimux-accounts-popover,
.omnimux-accounts-table tbody tr:nth-last-child(2) .omnimux-accounts-cellmenu .omnimux-accounts-popover {
  top: auto;
  bottom: calc(100% + 4px);
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
  box-shadow: 0 -4px 16px var(--dsw-alias-bg-mask-1, rgba(0,0,0,0.25));
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
  background: var(--dsw-alias-bg-mask-1, rgba(0,0,0,0.55));
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
  box-shadow: 0 16px 48px var(--dsw-alias-bg-mask-1, rgba(0,0,0,0.45));
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
  height: auto;
  padding: 14px;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 12px;
  background: var(--dsw-alias-bg-secondary);
  color: inherit;
  cursor: pointer;
  text-align: left;
  white-space: normal;
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
var import_jsx_runtime10 = require("react/jsx-runtime");
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
  (0, import_react6.useEffect)(() => {
    injectAccountsStyles();
  }, []);
  const { phase, accounts, error, busy, refresh, watchConnect, patch, disconnect } = useAccounts();
  const [filters, setFilters] = (0, import_react6.useState)({ query: "", platform: "", group: "", status: "", statusGroup: "", overview: "" });
  const [sortKey, setSortKey] = (0, import_react6.useState)("display_name");
  const [sortDir, setSortDir] = (0, import_react6.useState)("asc");
  const [view, setView] = (0, import_react6.useState)(readStoredView);
  const [modalOpen, setModalOpen] = (0, import_react6.useState)(false);
  const [notice, setNotice] = (0, import_react6.useState)("");
  const [selected, setSelected] = (0, import_react6.useState)(() => /* @__PURE__ */ new Set());
  const [bulkProgress, setBulkProgress] = (0, import_react6.useState)(null);
  const [confirmBulk, setConfirmBulk] = (0, import_react6.useState)(false);
  const [sectionError, setSectionError] = (0, import_react6.useState)("");
  const wasActive = (0, import_react6.useRef)(active);
  (0, import_react6.useEffect)(() => {
    try {
      window.localStorage.setItem(VIEW_STORAGE_KEY, view);
    } catch {
    }
  }, [view]);
  (0, import_react6.useEffect)(() => {
    if (notice === "") return void 0;
    const timer = window.setTimeout(() => {
      setNotice("");
    }, NOTICE_TIMEOUT_MS);
    return () => {
      window.clearTimeout(timer);
    };
  }, [notice]);
  (0, import_react6.useEffect)(() => {
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
  (0, import_react6.useEffect)(() => {
    setSelected((current) => {
      const alive = new Set(accounts.map((row) => String(row.id)));
      const next = new Set([...current].filter((id) => alive.has(id)));
      return next.size === current.size ? current : next;
    });
  }, [accounts]);
  (0, import_react6.useEffect)(() => {
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
  const summary = (0, import_react6.useMemo)(() => summarize(accounts), [accounts]);
  const platforms = (0, import_react6.useMemo)(() => uniqueValues(accounts, "platform"), [accounts]);
  const groups = (0, import_react6.useMemo)(() => uniqueValues(accounts, "group"), [accounts]);
  const statuses = (0, import_react6.useMemo)(() => presentStatuses(accounts), [accounts]);
  const visible = (0, import_react6.useMemo)(
    () => sortAccounts(filterAccounts(accounts, filters), sortKey, sortDir),
    [accounts, filters, sortKey, sortDir]
  );
  const bulkRunning = bulkProgress !== null;
  const combinedBusy = bulkRunning || busy !== "" ? bulkRunning ? "bulk" : busy : "";
  const onFilterClick = (filter) => {
    if (filter === null) {
      setFilters({ query: "", platform: "", group: "", status: "", statusGroup: "", overview: "" });
      return;
    }
    setFilters((current) => {
      if (filter.statusGroup !== void 0) {
        const nextGroup = current.statusGroup === filter.statusGroup ? "" : filter.statusGroup;
        return { ...current, status: "", statusGroup: nextGroup, overview: "" };
      }
      if (filter.overview !== void 0) {
        const nextOverview = current.overview === filter.overview ? "" : filter.overview;
        return { ...current, platform: "", overview: nextOverview };
      }
      return { ...current, ...filter };
    });
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
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "omnimux-accounts-root", role: "status", "aria-label": t("loading"), children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "omnimux-accounts-skeleton", "aria-hidden": "true", children: Array.from({ length: SKELETON_CARDS }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "omnimux-accounts-skeleton-card" }, index)) }) });
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
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "omnimux-accounts-root", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "omnimux-accounts-muted", children: t("needLogin") }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "omnimux-accounts-muted", children: t("needLoginHint") }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Button, { variant: "primary", onClick: signIn, children: t("login") })
    ] });
  }
  const errorText = sectionError !== "" ? sectionError : error;
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "omnimux-accounts-root", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(OverviewBar, { t, summary, filters, onFilterClick, busy: combinedBusy }),
    accounts.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "omnimux-accounts-toolbar", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        FilterBar2,
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
            setFilters((current) => ({
              ...current,
              ...patchFilters,
              ...patchFilters.status !== void 0 ? { statusGroup: "", overview: "" } : {},
              ...patchFilters.platform !== void 0 ? { overview: "" } : {}
            }));
          },
          onSortChange: (patchSort) => {
            if (patchSort.key !== void 0) setSortKey(patchSort.key);
            if (patchSort.dir !== void 0) setSortDir(patchSort.dir);
          },
          onViewChange: setView,
          busy: combinedBusy
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
        Button,
        {
          variant: "primary",
          className: "omnimux-accounts-cta",
          disabled: combinedBusy !== "",
          onClick: openConnect,
          children: [
            "+ ",
            t("connect")
          ]
        }
      )
    ] }) : null,
    selected.size > 0 ? /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "omnimux-accounts-bulkbar", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "omnimux-accounts-bulk-text", children: fmt(t("bulk.selected"), { count: selected.size }) }),
      bulkProgress !== null ? /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("span", { className: "omnimux-accounts-bulk-progress", children: [
        String(bulkProgress.done),
        "/",
        String(bulkProgress.total)
      ] }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        Button,
        {
          variant: "danger",
          size: "sm",
          disabled: combinedBusy !== "",
          onClick: () => {
            setConfirmBulk(true);
          },
          children: t("bulk.disconnect")
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        Button,
        {
          variant: "outline",
          size: "sm",
          disabled: combinedBusy !== "",
          onClick: () => {
            void bulkAgent(true);
          },
          children: t("bulk.agentOn")
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        Button,
        {
          variant: "outline",
          size: "sm",
          disabled: combinedBusy !== "",
          onClick: () => {
            void bulkAgent(false);
          },
          children: t("bulk.agentOff")
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        Button,
        {
          variant: "ghost",
          size: "sm",
          disabled: combinedBusy !== "",
          onClick: () => {
            setSelected(/* @__PURE__ */ new Set());
          },
          children: t("bulk.clear")
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        ConfirmModal,
        {
          open: confirmBulk,
          onClose: () => {
            setConfirmBulk(false);
          },
          title: t("bulk.disconnect"),
          message: fmt(t("bulk.confirmDisconnect"), { count: selected.size }),
          confirmLabel: t("disconnect"),
          cancelLabel: t("action.cancel"),
          confirmVariant: "danger",
          confirmLoading: combinedBusy !== "",
          onConfirm: () => {
            void bulkDisconnect();
          }
        }
      )
    ] }) : null,
    errorText !== "" ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "omnimux-accounts-error", role: "alert", children: errorText }) : null,
    notice !== "" ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "omnimux-accounts-notice", role: "status", children: notice }) : null,
    accounts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(EmptyState, { t, onConnect: openConnect, busy: combinedBusy }) : visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "omnimux-accounts-muted", children: t("filter.noResults") }) : view === "table" ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
    ) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "omnimux-accounts-grid", children: visible.map((account) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
    modalOpen ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
var import_jsx_runtime11 = require("react/jsx-runtime");
function AccountsStage({ t, stage }) {
  const open = (0, import_react7.useSyncExternalStore)(
    stage ? (onStoreChange) => stage.subscribe(onStoreChange) : () => () => {
    },
    stage ? () => stage.getSnapshot() : () => false
  );
  const [everOpened, setEverOpened] = (0, import_react7.useState)(false);
  const [box, setBox] = (0, import_react7.useState)(() => stage ? stage.readBox() : { top: 0, left: 0, width: 0, height: 0 });
  if (open && !everOpened) setEverOpened(true);
  (0, import_react7.useLayoutEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
    "div",
    {
      role: "region",
      "aria-label": t("title"),
      "aria-hidden": open ? void 0 : "true",
      className: "omnimux-accounts-stage",
      "data-visible": open ? "true" : "false",
      style: {
        display: open ? void 0 : "none",
        "--stage-top": `${box.top}px`,
        "--stage-left": `${box.left}px`,
        "--stage-width": `${box.width}px`,
        "--stage-height": `${box.height}px`
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "omnimux-accounts-stage-header", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h1", { className: "omnimux-accounts-stage-title", children: t("title") }),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            IconButton,
            {
              "aria-label": t("close"),
              variant: "ghost",
              onClick: () => {
                stage.set(false);
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_dsh_client_ui_primitives2.IconCloseOutline16, {})
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "omnimux-accounts-stage-body", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(AccountsSection, { t, active: open }) })
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
