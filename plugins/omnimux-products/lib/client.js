window.__ModuleLoader__.load({
  id: "omnimux-products",
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
  "nav": "\u4EA7\u54C1\u5E93",
  "stage.title": "\u4EA7\u54C1\u5E93",
  "stage.subtitle": "\u6C89\u6DC0\u8981\u5356\u7684\u8D27\uFF1A\u5356\u70B9\u3001\u4EBA\u7FA4\u3001\u4E3B\u56FE\uFF0C\u5728\u4F1A\u8BDD\u91CC\u7ED9 Agent \u5F15\u7528",
  "stage.refresh": "\u5237\u65B0",
  "stage.refreshing": "\u5237\u65B0\u4E2D\u2026",
  "stage.close": "\u5173\u95ED",
  "add.button": "\u6DFB\u52A0\u4EA7\u54C1",
  "add.title": "\u6DFB\u52A0\u4EA7\u54C1",
  "add.namePlaceholder": "\u4EA7\u54C1\u540D\u79F0",
  "add.sellingPlaceholder": "\u5356\u70B9\uFF08\u600E\u4E48\u5356\uFF09",
  "add.audiencePlaceholder": "\u4EBA\u7FA4",
  "add.brandPlaceholder": "\u54C1\u724C",
  "add.featuresPlaceholder": "\u7279\u70B9",
  "add.pricePlaceholder": "\u4EF7\u683C",
  "add.skuPlaceholder": "SKU",
  "add.promotionPlaceholder": "\u4FC3\u9500",
  "add.linkPlaceholder": "\u5546\u54C1\u94FE\u63A5\uFF08\u53EA\u5B58\u4E0D\u6293\uFF09",
  "add.digitalLinkPlaceholder": "\u4EA7\u54C1\u7F51\u7AD9\u94FE\u63A5\uFF08\u53EA\u5B58\u4E0D\u6293\uFF1B\u6293\u9875\u7528 Agent / \u6280\u80FD\uFF09",
  "add.drop": "\u5C06\u672C\u5730\u4E3B\u56FE\u62D6\u5165\uFF0C\u6216\u70B9\u4E0B\u9762\u6309\u94AE\u9009\u62E9\uFF08\u53EA\u5F15\u7528\u8DEF\u5F84\uFF0C\u4E0D\u62F7\u8D1D\u6587\u4EF6\uFF09",
  "add.pickFiles": "\u9009\u62E9\u6587\u4EF6",
  "add.categories": "\u7C7B\u522B\uFF08\u6700\u591A 5 \u4E2A\uFF09",
  "add.categoriesPlaceholder": "\u56DE\u8F66\u6DFB\u52A0\u7C7B\u522B",
  "add.submit": "\u521B\u5EFA\u4EA7\u54C1",
  "add.cancel": "\u53D6\u6D88",
  "add.dirty.reload": "\u91CD\u65B0\u52A0\u8F7D",
  "add.dirty.keep": "\u7EE7\u7EED\u63D0\u4EA4",
  "add.dirty.banner": "\u8FD9\u6761\u4EA7\u54C1\u5728\u522B\u5904\u5DF2\u66F4\u65B0\u3002\u8868\u5355\u672A\u8986\u76D6\uFF1B\u53EF\u91CD\u65B0\u52A0\u8F7D\u6216\u7EE7\u7EED\u63D0\u4EA4\uFF08\u540E\u5199\u80DC\uFF09\u3002",
  "search.placeholder": "\u641C\u7D22\u540D\u79F0 / \u5356\u70B9 / \u54C1\u724C / SKU",
  "sort.updated": "\u6700\u8FD1\u66F4\u65B0",
  "empty.all": "\u8FD8\u6CA1\u6709\u4EA7\u54C1\u3002\u5148\u6DFB\u52A0\u4E00\u4EF6\u8981\u5356\u7684\u8D27\u3002",
  "card.copyCite": "\u590D\u5236\u5F15\u7528",
  "card.copied": "\u5DF2\u590D\u5236",
  "detail.title": "\u7F16\u8F91\u4EA7\u54C1",
  "detail.name": "\u540D\u79F0",
  "detail.selling": "\u5356\u70B9",
  "detail.audience": "\u4EBA\u7FA4",
  "detail.brand": "\u54C1\u724C",
  "detail.features": "\u7279\u70B9",
  "detail.price": "\u4EF7\u683C",
  "detail.sku": "SKU",
  "detail.promotion": "\u4FC3\u9500",
  "detail.link": "\u94FE\u63A5",
  "detail.categories": "\u7C7B\u522B",
  "detail.media": "\u5A92\u4F53",
  "detail.primary": "\u4E3B\u56FE",
  "detail.save": "\u4FDD\u5B58",
  "detail.close": "\u5173\u95ED",
  "detail.cite": "\u5F15\u7528",
  "remove.title": "\u79FB\u9664\u300C{name}\u300D\uFF1F",
  "remove.hint": "\u53EA\u4ECE\u4EA7\u54C1\u5E93\u79FB\u9664\uFF0C\u4E0D\u4F1A\u5220\u9664\u78C1\u76D8\u4E0A\u7684\u539F\u6587\u4EF6\u3002\u4E0D\u53EF\u6062\u590D\u3002",
  "remove.confirm": "\u79FB\u9664",
  "remove.cancel": "\u53D6\u6D88",
  "error.generic": "\u8BF7\u6C42\u5931\u8D25",
  "error.pickerUnsupported": "\u5F53\u524D\u5E73\u53F0\u6682\u4E0D\u652F\u6301\u7CFB\u7EDF\u9009\u62E9\u7A97\uFF0C\u8BF7\u4F7F\u7528 macOS\u3002",
  "error.pickerFailed": "\u7CFB\u7EDF\u9009\u62E9\u7A97\u6253\u5F00\u5931\u8D25\u3002",
  "error.nameConflict": "\u5DF2\u6709\u540C\u540D\u4EA7\u54C1\uFF0C\u8BF7\u6362\u4E00\u4E2A\u540D\u79F0\u3002",
  "kind.label": "\u7C7B\u578B",
  "kind.physical": "\u5B9E\u7269",
  "kind.digital": "\u6570\u5B57",
  "strategy.title": "\u54C1\u724C\u6218\u7565",
  "strategy.hint": "\u53EF\u9009\u3002\u5C55\u5F00\u540E\u624D\u5199\u5165\uFF1B\u5168\u7A7A\u4F1A\u5B58\u6210\u7A7A\u3002",
  "strategy.hintDigital": "\u6570\u5B57\u8D27\u7528\u624B\u586B\u6218\u7565\u516D\u5757\u3002\u9875\u9762\u4E0D\u6293 URL\uFF1B\u9700\u8981\u5206\u6790\u65F6\u8BA9 Agent \u914D\u5408\u6280\u80FD\u5199\u8FDB\u6765\u3002",
  "strategy.expand": "\u5C55\u5F00",
  "strategy.collapse": "\u6536\u8D77",
  "strategy.basic": "\u54C1\u724C\u57FA\u672C\u4FE1\u606F",
  "strategy.companyName": "\u516C\u53F8\u540D\u79F0",
  "strategy.companyWebsite": "\u516C\u53F8\u7F51\u7AD9",
  "strategy.companyLocale": "\u8BED\u8A00\uFF08\u7A7A\u5219\u4E3A auto\uFF09",
  "strategy.productName": "\u4EA7\u54C1\u540D\u79F0\uFF08\u6218\u7565\u5185\uFF0C\u4E0D\u4E0E\u9876\u680F\u540C\u6B65\uFF09",
  "strategy.productCategory": "\u4EA7\u54C1\u54C1\u7C7B",
  "strategy.angles": "\u5185\u5BB9\u89D2\u5EA6\uFF08\u6700\u591A 10\uFF09",
  "strategy.addAngle": "\u6DFB\u52A0\u89D2\u5EA6",
  "strategy.angleTitle": "\u89D2\u5EA6\u6807\u9898",
  "strategy.angleDesc": "\u89D2\u5EA6\u8BF4\u660E",
  "strategy.angleAudience": "\u76EE\u6807\u4EBA\u7FA4",
  "strategy.tone": "\u8BED\u6C14",
  "strategy.listHint": "\u6BCF\u884C\u4E00\u6761",
  "strategy.dos": "\u8981\u8BF4\uFF08dos\uFF09",
  "strategy.donts": "\u4E0D\u8BF4\uFF08donts\uFF09",
  "strategy.identity": "\u8EAB\u4EFD\u4E0E\u4EA7\u54C1",
  "strategy.coreIdentity": "\u6838\u5FC3\u8EAB\u4EFD",
  "strategy.offering": "\u4EA7\u54C1\u4F9B\u7ED9",
  "strategy.advantage": "\u72EC\u7279\u4F18\u52BF",
  "strategy.problems": "\u89E3\u51B3\u7684\u95EE\u9898",
  "strategy.solutions": "\u89E3\u51B3\u65B9\u6848",
  "strategy.mission": "\u4F7F\u547D\u4E0E\u5B9A\u4F4D",
  "strategy.missionText": "\u4F7F\u547D",
  "strategy.diff": "\u5DEE\u5F02\u5316",
  "strategy.ownableStatement": "\u53EF\u5360\u9886\u5FC3\u667A",
  "strategy.ownableCategory": "\u54C1\u7C7B",
  "strategy.ownableNot": "\u4E0D\u662F\u4EC0\u4E48\uFF08\u6BCF\u884C\u4E00\u6761\uFF09",
  "strategy.market": "\u5E02\u573A\u4E0E\u7ADE\u4E89",
  "strategy.segments": "\u5BA2\u7FA4\uFF08\u6700\u591A 10\uFF09",
  "strategy.addSegment": "\u6DFB\u52A0\u5BA2\u7FA4",
  "strategy.segmentName": "\u5BA2\u7FA4\u540D\u79F0",
  "strategy.competitors": "\u7ADE\u54C1\uFF08\u6700\u591A 10\uFF09",
  "strategy.addCompetitor": "\u6DFB\u52A0\u7ADE\u54C1",
  "strategy.competitorName": "\u7ADE\u54C1\u540D\u79F0",
  "strategy.competitorWebsite": "\u7ADE\u54C1\u7F51\u7AD9"
};
var en = {
  "nav": "Products",
  "stage.title": "Product Library",
  "stage.subtitle": "Sellable items: selling points, audience, cover \u2014 cite them in chat",
  "stage.refresh": "Refresh",
  "stage.refreshing": "Refreshing\u2026",
  "stage.close": "Close",
  "add.button": "Add product",
  "add.title": "Add product",
  "add.namePlaceholder": "Product name",
  "add.sellingPlaceholder": "Selling points",
  "add.audiencePlaceholder": "Audience",
  "add.brandPlaceholder": "Brand",
  "add.featuresPlaceholder": "Features",
  "add.pricePlaceholder": "Price",
  "add.skuPlaceholder": "SKU",
  "add.promotionPlaceholder": "Promotion",
  "add.linkPlaceholder": "Store URL (stored, not fetched)",
  "add.digitalLinkPlaceholder": "Product site URL (stored, not fetched; Agent/skills fill analysis)",
  "add.drop": "Drop a local cover, or choose files (path refs only \u2014 files are never copied)",
  "add.pickFiles": "Choose files",
  "add.categories": "Categories (up to 5)",
  "add.categoriesPlaceholder": "Press Enter to add",
  "add.submit": "Create product",
  "add.cancel": "Cancel",
  "add.dirty.reload": "Reload",
  "add.dirty.keep": "Keep editing",
  "add.dirty.banner": "This product changed elsewhere. The form was not overwritten; reload or keep submitting (last write wins).",
  "search.placeholder": "Search name / selling points / brand / SKU",
  "sort.updated": "Recently updated",
  "empty.all": "No products yet. Add something you sell.",
  "card.copyCite": "Copy citation",
  "card.copied": "Copied",
  "detail.title": "Edit product",
  "detail.name": "Name",
  "detail.selling": "Selling points",
  "detail.audience": "Audience",
  "detail.brand": "Brand",
  "detail.features": "Features",
  "detail.price": "Price",
  "detail.sku": "SKU",
  "detail.promotion": "Promotion",
  "detail.link": "Link",
  "detail.categories": "Categories",
  "detail.media": "Media",
  "detail.primary": "Cover",
  "detail.save": "Save",
  "detail.close": "Close",
  "detail.cite": "Citation",
  "remove.title": "Remove \u201C{name}\u201D?",
  "remove.hint": "Only removed from the product library \u2014 the original file stays on disk. This cannot be undone.",
  "remove.confirm": "Remove",
  "remove.cancel": "Cancel",
  "error.generic": "Request failed",
  "error.pickerUnsupported": "The system picker is only available on macOS for now.",
  "error.pickerFailed": "Failed to open the system picker.",
  "error.nameConflict": "A product with this name already exists.",
  "kind.label": "Kind",
  "kind.physical": "Physical",
  "kind.digital": "Digital",
  "strategy.title": "Brand strategy",
  "strategy.hint": "Optional. Written only after you expand; an empty form stores null.",
  "strategy.hintDigital": "Fill the six strategy blocks by hand. This page never fetches URLs; Agent/skills can write analysis.",
  "strategy.expand": "Expand",
  "strategy.collapse": "Collapse",
  "strategy.basic": "Brand basics",
  "strategy.companyName": "Company name",
  "strategy.companyWebsite": "Company website",
  "strategy.companyLocale": "Locale (empty \u2192 auto)",
  "strategy.productName": "Product name (strategy only; not synced with the title)",
  "strategy.productCategory": "Product category",
  "strategy.angles": "Content angles (up to 10)",
  "strategy.addAngle": "Add angle",
  "strategy.angleTitle": "Angle title",
  "strategy.angleDesc": "Angle description",
  "strategy.angleAudience": "Target audience",
  "strategy.tone": "Tone of voice",
  "strategy.listHint": "One item per line",
  "strategy.dos": "Do say",
  "strategy.donts": "Don't say",
  "strategy.identity": "Identity and product",
  "strategy.coreIdentity": "Core identity",
  "strategy.offering": "Product offering",
  "strategy.advantage": "Unique advantage",
  "strategy.problems": "Problems solved",
  "strategy.solutions": "Solutions",
  "strategy.mission": "Mission and positioning",
  "strategy.missionText": "Mission",
  "strategy.diff": "Differentiation",
  "strategy.ownableStatement": "Ownable space",
  "strategy.ownableCategory": "Category",
  "strategy.ownableNot": "Is not (one per line)",
  "strategy.market": "Market and competition",
  "strategy.segments": "Customer segments (up to 10)",
  "strategy.addSegment": "Add segment",
  "strategy.segmentName": "Segment name",
  "strategy.competitors": "Competitors (up to 10)",
  "strategy.addCompetitor": "Add competitor",
  "strategy.competitorName": "Competitor name",
  "strategy.competitorWebsite": "Competitor website"
};
var NS = "omnimux-products";

// src/client/stage-store.js
var PRODUCT_STAGE_EVENT = "dsh-product-stage";
var STAGE_ID = "omnimux-products";
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
var ICON = '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><rect x="2.5" y="3.5" width="11" height="9" rx="1.5"/><path d="M5 7.5h6M5 10h4"/></svg>';
var STYLES = `
.omnimux-products-entry {
  box-sizing: border-box; display: flex; align-items: center; gap: 6px; position: relative;
  width: calc(100% - 8px); height: 32px; margin: 0 4px; padding: 0 8px;
  border: none; border-radius: 8px; background: transparent;
  color: var(--dsw-alias-label-primary);
  font: var(--dsw-font-s-14, inherit); font-size: 14px; line-height: 20px;
  cursor: pointer; text-align: left;
}
.omnimux-products-entry:hover { background: var(--dsw-alias-interactive-bg-hover); }
.omnimux-products-entry[data-active="true"] { background: var(--dsw-alias-interactive-bg-active); font-weight: 500; }
.omnimux-products-entry-icon { flex: none; display: inline-flex; width: 14px; height: 14px; align-items: center; justify-content: center; }
.omnimux-products-entry svg { display: block; width: 14px; height: 14px; }
.omnimux-products-entry-label { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 20px; }
`;
function paintLabel(entry, label) {
  entry.setAttribute("aria-label", label);
  const node = entry.querySelector(".omnimux-products-entry-label");
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
  entry.dataset.omnimuxProductsEntry = "";
  entry.className = "omnimux-products-entry";
  entry.innerHTML = `<span class="omnimux-products-entry-icon">${ICON}</span><span class="omnimux-products-entry-label"></span>`;
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
    id: "omnimux-products-entry",
    rank: 6,
    styles: STYLES,
    styleId: "omnimux-products-entry-styles",
    create: () => entry
  });
  return () => {
    unregister();
    unsubscribeStage();
    unsubscribeLocale();
  };
}

// src/client/ProductsStage.jsx
var import_react2 = require("react");

// src/client/a11y.js
var FOCUS_CSS = [
  ".omnimux-products-focusable:focus-visible{outline:2px solid var(--dsw-alias-label-primary);outline-offset:2px;border-radius:8px;}",
  ".omnimux-products-focusable:hover{border-color:var(--dsw-alias-border-l4);}"
].join("\n");
function activateRowKeydown(trigger) {
  return (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      trigger();
    }
  };
}

// src/client/api.js
async function productsRequest(path, opts = {}) {
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
function getState(prev) {
  const suffix = Number.isFinite(
    /** @type {number} */
    prev
  ) ? `?prev=${String(prev)}` : "";
  return productsRequest(`/omnimux/products/state${suffix}`);
}
function createProduct(body) {
  return productsRequest("/omnimux/products", { method: "POST", body });
}
function updateProduct(id, patch) {
  return productsRequest(`/omnimux/products/${encodeURIComponent(id)}`, { method: "PUT", body: patch });
}
function deleteProduct(id) {
  return productsRequest(`/omnimux/products/${encodeURIComponent(id)}`, { method: "DELETE" });
}
function pickPath(kind) {
  return productsRequest("/omnimux/products/pick", { method: "POST", body: { kind } });
}
function previewUrl(productId, mediaId) {
  const query = new URLSearchParams({ preview: mediaId });
  return `/omnimux/products/${encodeURIComponent(productId)}?${query}`;
}

// src/client/ConfirmRemoveDialog.jsx
var import_jsx_runtime = require("react/jsx-runtime");
var backdrop = {
  position: "fixed",
  inset: 0,
  zIndex: 300,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "var(--dsw-alias-bg-mask-1)"
};
var dialog = {
  width: 360,
  maxWidth: "calc(100vw - 48px)",
  display: "flex",
  flexDirection: "column",
  gap: 10,
  padding: 20,
  borderRadius: 16,
  background: "var(--dsw-alias-bg-base)",
  border: "1px solid var(--dsw-alias-border-l2)",
  color: "var(--dsw-alias-label-primary)"
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
  color: "var(--dsw-alias-label-secondary)"
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
  border: "1px solid var(--dsw-alias-border-l2)",
  background: "transparent",
  color: "inherit"
};
var dangerButton = {
  ...ghostButton,
  fontWeight: 600,
  border: "none",
  color: "var(--dsw-alias-label-primary-foreground)",
  background: "var(--dsw-alias-label-error)"
};
function ConfirmRemoveDialog({ t, name: name2, busy, onCancel, onConfirm }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      style: backdrop,
      onMouseDown: (event) => {
        if (event.target === event.currentTarget) onCancel();
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "div",
        {
          role: "alertdialog",
          "aria-modal": "true",
          "aria-label": t("remove.confirm"),
          style: dialog,
          onKeyDown: (event) => {
            if (event.key === "Escape") onCancel();
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { style: heading, children: t("remove.title").replace("{name}", name2) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { style: hint, children: t("remove.hint") }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: buttons, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", style: ghostButton, onClick: onCancel, autoFocus: true, children: t("remove.cancel") }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "button",
                {
                  type: "button",
                  style: { ...dangerButton, ...busy ? { opacity: 0.5, cursor: "default" } : {} },
                  disabled: busy,
                  onClick: onConfirm,
                  children: t("remove.confirm")
                }
              )
            ] })
          ]
        }
      )
    }
  );
}

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
      style: { flex: "none", display: "inline-block", verticalAlign: "middle" },
      children
    }
  );
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
function CloseIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Icon, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M6 6l12 12" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M18 6 6 18" })
  ] });
}
function RefreshIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Icon, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M20 11a8 8 0 0 0-14.9-3" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M4 5v4h4" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M4 13a8 8 0 0 0 14.9 3" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M20 19v-4h-4" })
  ] });
}

// src/client/ProductFormDialog.jsx
var import_react = require("react");

// src/errors.js
var ProductsError = class extends Error {
  /**
   * @param {string} code
   * @param {string} message
   */
  constructor(code, message) {
    super(message);
    this.name = "ProductsError";
    this.code = code;
  }
};

// src/brand-strategy.js
var TEXT_MAX = 4e3;
var ANGLES_MAX = 10;
var LIST_MAX = 20;
var SEGMENTS_MAX = 10;
var COMPETITORS_MAX = 10;
function emptyBrandStrategy() {
  return {
    brand_basic_info: {
      company: { name: "", website: "", locale: "auto" },
      product: { name: "", category: "" }
    },
    content_angles: [],
    tone_and_voice: { dos: [], donts: [] },
    identity_and_product: {
      core_identity: "",
      product_offering: [],
      unique_advantage: [],
      problems_solved: [],
      solutions: []
    },
    mission_and_positioning: {
      mission: "",
      differentiation: [],
      ownable_space: { statement: "", category: "", is_not: [] }
    },
    market_and_competition: {
      customer_segments: [],
      competitors: []
    }
  };
}
function isPlainStrategy(value) {
  if (value == null || typeof value !== "object" || Array.isArray(value)) return false;
  const proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}
function isDigitalProduct(product) {
  if (!product || typeof product !== "object") return false;
  return product.kind === "digital" && isPlainStrategy(product.brand_strategy);
}
function clipStr(value) {
  if (typeof value !== "string") return "";
  return value.length > TEXT_MAX ? value.slice(0, TEXT_MAX) : value;
}
function clipStringList(value, max) {
  if (!Array.isArray(value)) return [];
  const out = [];
  for (const item of value) {
    if (typeof item !== "string") continue;
    const text = item.length > TEXT_MAX ? item.slice(0, TEXT_MAX) : item;
    if (!text.trim()) continue;
    out.push(text);
    if (out.length >= max) break;
  }
  return out;
}
function asPlain(value) {
  return isPlainStrategy(value) ? value : null;
}
function newAngleId() {
  const uuid = globalThis.crypto?.randomUUID?.();
  const hex = uuid ? uuid.replace(/-/g, "").slice(0, 8) : Math.random().toString(16).slice(2, 10).padEnd(8, "0");
  return `ang_${hex}`;
}
function normalizePriority(value) {
  const n = typeof value === "string" && value.trim() !== "" ? Number(value) : value;
  return n === 1 || n === 2 || n === 3 ? n : 3;
}
function clampPercent(value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return 0;
  if (n < 0) return 0;
  if (n > 100) return 100;
  return n;
}
function normalizeAngles(value) {
  if (!Array.isArray(value)) return [];
  const out = [];
  for (const row of value) {
    const item = asPlain(row);
    if (!item) continue;
    const title = clipStr(item.title);
    const description = clipStr(item.description);
    const target_audience = clipStr(item.target_audience);
    if (!title.trim() && !description.trim() && !target_audience.trim()) continue;
    const id = typeof item.id === "string" && item.id.trim() ? item.id.trim() : newAngleId();
    out.push({
      id,
      title,
      description,
      target_audience,
      priority: normalizePriority(item.priority)
    });
    if (out.length >= ANGLES_MAX) break;
  }
  return out;
}
function normalizeSegments(value) {
  if (!Array.isArray(value)) return [];
  const out = [];
  for (const row of value) {
    const item = asPlain(row);
    if (!item) continue;
    const name2 = clipStr(item.name);
    if (!name2.trim()) continue;
    out.push({ name: name2, percentage: clampPercent(item.percentage) });
    if (out.length >= SEGMENTS_MAX) break;
  }
  return out;
}
function normalizeCompetitors(value) {
  if (!Array.isArray(value)) return [];
  const out = [];
  for (const row of value) {
    const item = asPlain(row);
    if (!item) continue;
    const name2 = clipStr(item.name);
    const website = clipStr(item.website);
    if (!name2.trim() && !website.trim()) continue;
    out.push({ name: name2, website });
    if (out.length >= COMPETITORS_MAX) break;
  }
  return out;
}
function isEmptyStrategy(strategy) {
  const company = strategy.brand_basic_info.company;
  const product = strategy.brand_basic_info.product;
  if (company.name.trim() || company.website.trim()) return false;
  if (company.locale.trim() && company.locale !== "auto") return false;
  if (product.name.trim() || product.category.trim()) return false;
  if (strategy.content_angles.length) return false;
  if (strategy.tone_and_voice.dos.length || strategy.tone_and_voice.donts.length) return false;
  const identity = strategy.identity_and_product;
  if (identity.core_identity.trim()) return false;
  if (identity.product_offering.length || identity.unique_advantage.length) return false;
  if (identity.problems_solved.length || identity.solutions.length) return false;
  const mission = strategy.mission_and_positioning;
  if (mission.mission.trim() || mission.differentiation.length) return false;
  const space = mission.ownable_space;
  if (space.statement.trim() || space.category.trim() || space.is_not.length) return false;
  const market = strategy.market_and_competition;
  if (market.customer_segments.length || market.competitors.length) return false;
  return true;
}
function normalizeBrandStrategy(value) {
  if (value == null || value === "") return null;
  if (typeof value !== "object" || Array.isArray(value)) {
    throw new ProductsError("brand-strategy-invalid", "brand_strategy must be an object or null");
  }
  const basic = asPlain(value.brand_basic_info) ?? {};
  const companyIn = asPlain(basic.company) ?? {};
  const productIn = asPlain(basic.product) ?? {};
  const tone = asPlain(value.tone_and_voice) ?? {};
  const identityIn = asPlain(value.identity_and_product) ?? {};
  const missionIn = asPlain(value.mission_and_positioning) ?? {};
  const spaceIn = asPlain(missionIn.ownable_space) ?? {};
  const marketIn = asPlain(value.market_and_competition) ?? {};
  const localeRaw = clipStr(companyIn.locale).trim();
  const out = {
    brand_basic_info: {
      company: {
        name: clipStr(companyIn.name),
        website: clipStr(companyIn.website),
        locale: localeRaw || "auto"
      },
      product: {
        name: clipStr(productIn.name),
        category: clipStr(productIn.category)
      }
    },
    content_angles: normalizeAngles(value.content_angles),
    tone_and_voice: {
      dos: clipStringList(tone.dos, LIST_MAX),
      donts: clipStringList(tone.donts, LIST_MAX)
    },
    identity_and_product: {
      core_identity: clipStr(identityIn.core_identity),
      product_offering: clipStringList(identityIn.product_offering, LIST_MAX),
      unique_advantage: clipStringList(identityIn.unique_advantage, LIST_MAX),
      problems_solved: clipStringList(identityIn.problems_solved, LIST_MAX),
      solutions: clipStringList(identityIn.solutions, LIST_MAX)
    },
    mission_and_positioning: {
      mission: clipStr(missionIn.mission),
      differentiation: clipStringList(missionIn.differentiation, LIST_MAX),
      ownable_space: {
        statement: clipStr(spaceIn.statement),
        category: clipStr(spaceIn.category),
        is_not: clipStringList(spaceIn.is_not, LIST_MAX)
      }
    },
    market_and_competition: {
      customer_segments: normalizeSegments(marketIn.customer_segments),
      competitors: normalizeCompetitors(marketIn.competitors)
    }
  };
  if (isEmptyStrategy(out)) return null;
  return out;
}

// src/client/ProductFormDialog.jsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var overlay = {
  position: "fixed",
  inset: 0,
  zIndex: 320,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "var(--dsw-alias-bg-mask-1)"
};
var sheet = {
  width: 560,
  maxWidth: "calc(100vw - 48px)",
  maxHeight: "calc(100vh - 48px)",
  overflow: "auto",
  display: "flex",
  flexDirection: "column",
  background: "var(--dsw-alias-bg-base)",
  color: "var(--dsw-alias-label-primary)",
  borderRadius: 16,
  border: "1px solid var(--dsw-alias-border-l2)"
};
var inputBare = {
  border: "none",
  outline: "none",
  background: "transparent",
  color: "inherit",
  font: "inherit",
  width: "100%"
};
var field = {
  width: "100%",
  border: "1px solid var(--dsw-alias-border-l2)",
  borderRadius: 8,
  padding: "6px 10px",
  fontSize: 13,
  color: "inherit",
  background: "transparent",
  boxSizing: "border-box"
};
var chip = {
  border: "1px solid var(--dsw-alias-border-l2)",
  background: "transparent",
  color: "inherit",
  borderRadius: 999,
  padding: "4px 10px",
  cursor: "pointer",
  fontSize: 12
};
function draftFrom(product) {
  try {
    const next = normalizeBrandStrategy(product?.brand_strategy);
    return next ? structuredCloneSafe(next) : emptyBrandStrategy();
  } catch {
    return emptyBrandStrategy();
  }
}
function structuredCloneSafe(value) {
  return JSON.parse(JSON.stringify(value));
}
function linesOf(list) {
  return Array.isArray(list) ? list.join("\n") : "";
}
function listOf(text) {
  return String(text).split("\n").map((row) => row.trim()).filter(Boolean);
}
var miniBtn = {
  border: "1px solid var(--dsw-alias-border-l2)",
  background: "transparent",
  color: "inherit",
  borderRadius: 999,
  padding: "4px 10px",
  cursor: "pointer",
  fontSize: 12
};
function ProductFormDialog({ t, mode, busy, error, dirty, initial, onCancel, onPick, onSubmit, onReload }) {
  const nameRef = (0, import_react.useRef)(null);
  const digitalAtOpen = isDigitalProduct(initial);
  const [name2, setName] = (0, import_react.useState)(initial?.name ?? "");
  const [kind, setKind] = (0, import_react.useState)(initial?.kind === "digital" ? "digital" : "physical");
  const [selling, setSelling] = (0, import_react.useState)(initial?.selling_points ?? "");
  const [audience, setAudience] = (0, import_react.useState)(initial?.target_audience ?? "");
  const [brand, setBrand] = (0, import_react.useState)(initial?.brand ?? "");
  const [features, setFeatures] = (0, import_react.useState)(initial?.features ?? "");
  const [price, setPrice] = (0, import_react.useState)(initial?.price ?? "");
  const [sku, setSku] = (0, import_react.useState)(initial?.sku ?? "");
  const [promotion, setPromotion] = (0, import_react.useState)(initial?.promotion ?? "");
  const [link, setLink] = (0, import_react.useState)(initial?.link ?? "");
  const [tagDraft, setTagDraft] = (0, import_react.useState)("");
  const [categories, setCategories] = (0, import_react.useState)(Array.isArray(initial?.categories) ? [...initial.categories] : []);
  const [media, setMedia] = (0, import_react.useState)(Array.isArray(initial?.media) ? initial.media.map((row) => ({ ...row })) : []);
  const [coverId, setCoverId] = (0, import_react.useState)(initial?.cover_media_id ?? null);
  const [strategyOpen, setStrategyOpen] = (0, import_react.useState)(digitalAtOpen);
  const [strategyTouched, setStrategyTouched] = (0, import_react.useState)(digitalAtOpen);
  const [strategy, setStrategy] = (0, import_react.useState)(() => draftFrom(initial));
  (0, import_react.useEffect)(() => {
    nameRef.current?.focus();
  }, []);
  (0, import_react.useEffect)(() => {
    if (!initial) return;
    applySnapshot(initial);
  }, [initial?.id, initial?.updated_at]);
  const applySnapshot = (product) => {
    if (!product) return;
    setName(product.name ?? "");
    setKind(product.kind === "digital" ? "digital" : "physical");
    setSelling(product.selling_points ?? "");
    setAudience(product.target_audience ?? "");
    setBrand(product.brand ?? "");
    setFeatures(product.features ?? "");
    setPrice(product.price ?? "");
    setSku(product.sku ?? "");
    setPromotion(product.promotion ?? "");
    setLink(product.link ?? "");
    setCategories(Array.isArray(product.categories) ? [...product.categories] : []);
    setMedia(Array.isArray(product.media) ? product.media.map((row) => ({ ...row })) : []);
    setCoverId(product.cover_media_id ?? null);
    const asDigital = isDigitalProduct(product);
    setStrategyOpen(asDigital);
    setStrategyTouched(asDigital);
    setStrategy(draftFrom(product));
  };
  const openStrategy = () => {
    setStrategyOpen(true);
    setStrategyTouched(true);
  };
  const patchStrategy = (mutator) => {
    setStrategyTouched(true);
    setStrategy((current) => {
      const next = structuredCloneSafe(current);
      mutator(next);
      return next;
    });
  };
  const addTag = () => {
    const next = tagDraft.trim();
    if (!next) return;
    if (categories.length >= 5) {
      setTagDraft("");
      return;
    }
    if (categories.some((tag) => tag.toLowerCase() === next.toLowerCase())) {
      setTagDraft("");
      return;
    }
    setCategories([...categories, next]);
    setTagDraft("");
  };
  const addPaths = (paths) => {
    const next = Array.isArray(paths) ? paths.filter((path) => typeof path === "string" && path !== "") : [];
    if (next.length === 0) return;
    setMedia((current) => {
      const seen = new Set(current.map((file) => file.real_path));
      const extra = [];
      for (const path of next) {
        if (seen.has(path)) continue;
        seen.add(path);
        extra.push({ real_path: path, original_name: path.split("/").pop() || path });
      }
      return extra.length === 0 ? current : [...current, ...extra];
    });
  };
  const canSubmit = name2.trim() !== "" && !busy;
  const payload = () => {
    const body = {
      name: name2.trim(),
      kind,
      link,
      categories,
      media: media.map((row) => ({
        id: row.id,
        real_path: row.real_path,
        original_name: row.original_name
      })),
      cover_media_id: coverId
    };
    if (kind === "physical") {
      body.selling_points = selling;
      body.target_audience = audience;
      body.brand = brand;
      body.features = features;
      body.price = price;
      body.sku = sku;
      body.promotion = promotion;
    }
    if (kind === "digital" && strategyTouched) {
      try {
        body.brand_strategy = normalizeBrandStrategy(strategy);
      } catch {
        body.brand_strategy = null;
      }
    }
    return body;
  };
  const labelStyle = { fontSize: 12, color: "var(--dsw-alias-label-secondary)", margin: "0 0 6px" };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "div",
    {
      style: overlay,
      onMouseDown: (event) => {
        if (event.target === event.currentTarget) onCancel();
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
        "div",
        {
          role: "dialog",
          "aria-modal": "true",
          "aria-label": mode === "edit" ? t("detail.title") : t("add.title"),
          style: sheet,
          onKeyDown: (event) => {
            if (event.key === "Escape") onCancel();
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: 8, padding: "16px 20px 8px" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { style: { color: "var(--dsw-alias-label-tertiary)", fontSize: 18 }, children: "@" }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
                  children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(CloseIcon, { size: 16 })
                }
              )
            ] }),
            dirty ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
              "div",
              {
                style: {
                  margin: "0 20px 12px",
                  padding: "8px 12px",
                  borderRadius: 8,
                  fontSize: 12,
                  lineHeight: "18px",
                  background: "var(--dsw-alias-bg-module-platform)",
                  color: "var(--dsw-alias-label-secondary)",
                  display: "flex",
                  gap: 8,
                  alignItems: "center",
                  flexWrap: "wrap"
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { style: { flex: 1, minWidth: 160 }, children: t("add.dirty.banner") }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        onReload?.();
                      },
                      style: {
                        border: "1px solid var(--dsw-alias-border-l2)",
                        background: "transparent",
                        color: "inherit",
                        borderRadius: 999,
                        padding: "4px 10px",
                        cursor: "pointer",
                        fontSize: 12
                      },
                      children: t("add.dirty.reload")
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { style: { fontSize: 12 }, children: t("add.dirty.keep") })
                ]
              }
            ) : null,
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { padding: "0 20px 12px", display: "flex", gap: 8, alignItems: "center" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { style: { fontSize: 12, color: "var(--dsw-alias-label-secondary)" }, children: t("kind.label") }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setKind("physical");
                    setStrategyOpen(false);
                  },
                  style: {
                    ...chip,
                    background: kind === "physical" ? "var(--dsw-alias-bg-module-platform)" : "transparent"
                  },
                  children: t("kind.physical")
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "button",
                {
                  type: "button",
                  onClick: () => {
                    setKind("digital");
                    const persisted = isPlainStrategy(initial?.brand_strategy);
                    setStrategyOpen(persisted);
                    if (persisted) setStrategyTouched(true);
                  },
                  style: {
                    ...chip,
                    background: kind === "digital" ? "var(--dsw-alias-bg-module-platform)" : "transparent"
                  },
                  children: t("kind.digital")
                }
              )
            ] }),
            kind === "physical" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { padding: "0 20px 12px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("textarea", { rows: 2, value: selling, placeholder: t("add.sellingPlaceholder"), onChange: (event) => {
                setSelling(event.target.value);
              }, style: { ...field, gridColumn: "1 / -1", resize: "vertical" } }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { value: audience, placeholder: t("add.audiencePlaceholder"), onChange: (event) => {
                setAudience(event.target.value);
              }, style: field }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { value: brand, placeholder: t("add.brandPlaceholder"), onChange: (event) => {
                setBrand(event.target.value);
              }, style: field }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("textarea", { rows: 2, value: features, placeholder: t("add.featuresPlaceholder"), onChange: (event) => {
                setFeatures(event.target.value);
              }, style: { ...field, gridColumn: "1 / -1", resize: "vertical" } }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { value: price, placeholder: t("add.pricePlaceholder"), onChange: (event) => {
                setPrice(event.target.value);
              }, style: field }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { value: sku, placeholder: t("add.skuPlaceholder"), onChange: (event) => {
                setSku(event.target.value);
              }, style: field }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { value: promotion, placeholder: t("add.promotionPlaceholder"), onChange: (event) => {
                setPromotion(event.target.value);
              }, style: field }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { value: link, placeholder: t("add.linkPlaceholder"), onChange: (event) => {
                setLink(event.target.value);
              }, style: field })
            ] }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: { padding: "0 20px 12px" }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { value: link, placeholder: t("add.digitalLinkPlaceholder"), onChange: (event) => {
              setLink(event.target.value);
            }, style: field }) }),
            kind === "digital" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { borderTop: "1px solid var(--dsw-alias-border-l2)", padding: "12px 20px" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: { fontSize: 13, fontWeight: 500 }, children: t("strategy.title") }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: { fontSize: 12, color: "var(--dsw-alias-label-tertiary)", marginTop: 2 }, children: t("strategy.hintDigital") })
                ] }),
                strategyOpen ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "button", onClick: () => {
                  setStrategyOpen(false);
                }, style: miniBtn, children: t("strategy.collapse") }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "button", onClick: openStrategy, style: miniBtn, children: t("strategy.expand") })
              ] }),
              strategyOpen ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(StrategyFields, { t, strategy, patchStrategy, field, labelStyle, miniBtn }) : null
            ] }) : null,
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { borderTop: "1px solid var(--dsw-alias-border-l2)", padding: 16 }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
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
                    minHeight: 96,
                    border: "1px dashed var(--dsw-alias-border-l4)",
                    borderRadius: 12,
                    color: "var(--dsw-alias-label-tertiary)",
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
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(FileIcon, { size: 22 }),
                    t("add.drop"),
                    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                      "button",
                      {
                        type: "button",
                        onClick: () => {
                          void onPick("file").then(addPaths);
                        },
                        style: {
                          border: "1px solid var(--dsw-alias-border-l2)",
                          background: "transparent",
                          color: "inherit",
                          borderRadius: 999,
                          padding: "6px 12px",
                          cursor: "pointer",
                          fontSize: 12
                        },
                        children: t("add.pickFiles")
                      }
                    )
                  ]
                }
              ),
              media.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("ul", { style: { margin: "10px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 4 }, children: media.map((file, index) => {
                const id = file.id || file.real_path;
                const primary = coverId ? coverId === file.id : index === 0;
                return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("li", { style: { display: "flex", gap: 8, fontSize: 12, color: "var(--dsw-alias-label-secondary)", alignItems: "center" }, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(FileIcon, { size: 14 }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { style: { flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, children: file.original_name || file.real_path }),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        setCoverId(file.id || null);
                        if (!file.id) {
                          setMedia((current) => current.map((row, i) => i === index ? row : row));
                          setMedia((current) => {
                            const next = [...current];
                            const [picked] = next.splice(index, 1);
                            next.unshift(picked);
                            return next;
                          });
                        }
                      },
                      style: {
                        border: "none",
                        background: "transparent",
                        cursor: "pointer",
                        fontSize: 11,
                        color: primary ? "inherit" : "var(--dsw-alias-label-tertiary)"
                      },
                      children: t("detail.primary")
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                    "button",
                    {
                      type: "button",
                      onClick: () => {
                        setMedia((current) => current.filter((_, i) => i !== index));
                        if (file.id && coverId === file.id) setCoverId(null);
                      },
                      style: { border: "none", background: "transparent", cursor: "pointer", color: "inherit" },
                      children: "\xD7"
                    }
                  )
                ] }, id);
              }) }) : null
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { borderTop: "1px solid var(--dsw-alias-border-l2)", padding: "10px 16px 16px" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: { fontSize: 13, color: "var(--dsw-alias-label-secondary)", marginBottom: 8 }, children: t("add.categories") }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: { display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 8 }, children: categories.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { style: { fontSize: 12, padding: "2px 8px", borderRadius: 999, background: "var(--dsw-alias-bg-module-platform)" }, children: [
                tag,
                /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      setCategories(categories.filter((item) => item !== tag));
                    },
                    style: { border: "none", background: "transparent", cursor: "pointer", marginLeft: 4 },
                    children: "\xD7"
                  }
                )
              ] }, tag)) }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "input",
                {
                  value: tagDraft,
                  placeholder: t("add.categoriesPlaceholder"),
                  onChange: (event) => {
                    setTagDraft(event.target.value);
                  },
                  onKeyDown: (event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      addTag();
                    }
                  },
                  style: field
                }
              ),
              error ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: { margin: "8px 0 0", fontSize: 12, color: "var(--dsw-alias-label-error)" }, children: error }) : null,
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: { display: "flex", justifyContent: "flex-end", marginTop: 16 }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
                "button",
                {
                  type: "button",
                  disabled: !canSubmit,
                  onClick: () => {
                    onSubmit(payload());
                  },
                  style: {
                    border: "none",
                    background: canSubmit ? "var(--dsw-alias-button-primary-fill)" : "var(--dsw-alias-border-l2)",
                    color: "var(--dsw-alias-label-primary-foreground)",
                    borderRadius: 999,
                    padding: "8px 16px",
                    fontSize: 14,
                    fontWeight: 500,
                    cursor: canSubmit ? "pointer" : "default"
                  },
                  children: mode === "edit" ? t("detail.save") : t("add.submit")
                }
              ) })
            ] })
          ]
        }
      )
    }
  );
}
function StrategyFields({ t, strategy, patchStrategy, field: field2, labelStyle, miniBtn: miniBtn2 }) {
  const basic = strategy.brand_basic_info;
  const identity = strategy.identity_and_product;
  const mission = strategy.mission_and_positioning;
  const market = strategy.market_and_competition;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: 14, marginTop: 12 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: { fontSize: 13, fontWeight: 500, marginBottom: 8 }, children: t("strategy.basic") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { value: basic.company.name, placeholder: t("strategy.companyName"), onChange: (event) => {
          patchStrategy((next) => {
            next.brand_basic_info.company.name = event.target.value;
          });
        }, style: field2 }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { value: basic.company.website, placeholder: t("strategy.companyWebsite"), onChange: (event) => {
          patchStrategy((next) => {
            next.brand_basic_info.company.website = event.target.value;
          });
        }, style: field2 }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { value: basic.company.locale, placeholder: t("strategy.companyLocale"), onChange: (event) => {
          patchStrategy((next) => {
            next.brand_basic_info.company.locale = event.target.value;
          });
        }, style: field2 }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { value: basic.product.name, placeholder: t("strategy.productName"), onChange: (event) => {
          patchStrategy((next) => {
            next.brand_basic_info.product.name = event.target.value;
          });
        }, style: field2 }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { value: basic.product.category, placeholder: t("strategy.productCategory"), onChange: (event) => {
          patchStrategy((next) => {
            next.brand_basic_info.product.category = event.target.value;
          });
        }, style: { ...field2, gridColumn: "1 / -1" } })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: { fontSize: 13, fontWeight: 500 }, children: t("strategy.angles") }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "button",
          {
            type: "button",
            onClick: () => {
              patchStrategy((next) => {
                if (next.content_angles.length >= 10) return;
                next.content_angles.push({ id: "", title: "", description: "", target_audience: "", priority: 3 });
              });
            },
            style: miniBtn2,
            children: t("strategy.addAngle")
          }
        )
      ] }),
      strategy.content_angles.map((angle, index) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { display: "grid", gridTemplateColumns: "1fr 72px 28px", gap: 6, marginBottom: 8 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { value: angle.title, placeholder: t("strategy.angleTitle"), onChange: (event) => {
          patchStrategy((next) => {
            next.content_angles[index].title = event.target.value;
          });
        }, style: field2 }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
          "select",
          {
            value: String(angle.priority || 3),
            onChange: (event) => {
              patchStrategy((next) => {
                next.content_angles[index].priority = Number(event.target.value);
              });
            },
            style: field2,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: "1", children: "1" }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: "2", children: "2" }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("option", { value: "3", children: "3" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "button", onClick: () => {
          patchStrategy((next) => {
            next.content_angles.splice(index, 1);
          });
        }, style: { border: "none", background: "transparent", cursor: "pointer", color: "inherit" }, children: "\xD7" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("textarea", { rows: 2, value: angle.description, placeholder: t("strategy.angleDesc"), onChange: (event) => {
          patchStrategy((next) => {
            next.content_angles[index].description = event.target.value;
          });
        }, style: { ...field2, gridColumn: "1 / -1", resize: "vertical" } }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { value: angle.target_audience, placeholder: t("strategy.angleAudience"), onChange: (event) => {
          patchStrategy((next) => {
            next.content_angles[index].target_audience = event.target.value;
          });
        }, style: { ...field2, gridColumn: "1 / -1" } })
      ] }, angle.id || `new-${index}`))
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: { fontSize: 13, fontWeight: 500, marginBottom: 8 }, children: t("strategy.tone") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: labelStyle, children: t("strategy.listHint") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("textarea", { rows: 3, value: linesOf(strategy.tone_and_voice.dos), placeholder: t("strategy.dos"), onChange: (event) => {
        patchStrategy((next) => {
          next.tone_and_voice.dos = listOf(event.target.value);
        });
      }, style: { ...field2, resize: "vertical", marginBottom: 8 } }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("textarea", { rows: 3, value: linesOf(strategy.tone_and_voice.donts), placeholder: t("strategy.donts"), onChange: (event) => {
        patchStrategy((next) => {
          next.tone_and_voice.donts = listOf(event.target.value);
        });
      }, style: { ...field2, resize: "vertical" } })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: { fontSize: 13, fontWeight: 500, marginBottom: 8 }, children: t("strategy.identity") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("textarea", { rows: 2, value: identity.core_identity, placeholder: t("strategy.coreIdentity"), onChange: (event) => {
        patchStrategy((next) => {
          next.identity_and_product.core_identity = event.target.value;
        });
      }, style: { ...field2, resize: "vertical", marginBottom: 8 } }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: labelStyle, children: t("strategy.listHint") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("textarea", { rows: 2, value: linesOf(identity.product_offering), placeholder: t("strategy.offering"), onChange: (event) => {
        patchStrategy((next) => {
          next.identity_and_product.product_offering = listOf(event.target.value);
        });
      }, style: { ...field2, resize: "vertical", marginBottom: 8 } }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("textarea", { rows: 2, value: linesOf(identity.unique_advantage), placeholder: t("strategy.advantage"), onChange: (event) => {
        patchStrategy((next) => {
          next.identity_and_product.unique_advantage = listOf(event.target.value);
        });
      }, style: { ...field2, resize: "vertical", marginBottom: 8 } }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("textarea", { rows: 2, value: linesOf(identity.problems_solved), placeholder: t("strategy.problems"), onChange: (event) => {
        patchStrategy((next) => {
          next.identity_and_product.problems_solved = listOf(event.target.value);
        });
      }, style: { ...field2, resize: "vertical", marginBottom: 8 } }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("textarea", { rows: 2, value: linesOf(identity.solutions), placeholder: t("strategy.solutions"), onChange: (event) => {
        patchStrategy((next) => {
          next.identity_and_product.solutions = listOf(event.target.value);
        });
      }, style: { ...field2, resize: "vertical" } })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: { fontSize: 13, fontWeight: 500, marginBottom: 8 }, children: t("strategy.mission") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("textarea", { rows: 2, value: mission.mission, placeholder: t("strategy.missionText"), onChange: (event) => {
        patchStrategy((next) => {
          next.mission_and_positioning.mission = event.target.value;
        });
      }, style: { ...field2, resize: "vertical", marginBottom: 8 } }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { style: labelStyle, children: t("strategy.listHint") }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("textarea", { rows: 2, value: linesOf(mission.differentiation), placeholder: t("strategy.diff"), onChange: (event) => {
        patchStrategy((next) => {
          next.mission_and_positioning.differentiation = listOf(event.target.value);
        });
      }, style: { ...field2, resize: "vertical", marginBottom: 8 } }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { value: mission.ownable_space.statement, placeholder: t("strategy.ownableStatement"), onChange: (event) => {
        patchStrategy((next) => {
          next.mission_and_positioning.ownable_space.statement = event.target.value;
        });
      }, style: { ...field2, marginBottom: 8 } }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { value: mission.ownable_space.category, placeholder: t("strategy.ownableCategory"), onChange: (event) => {
        patchStrategy((next) => {
          next.mission_and_positioning.ownable_space.category = event.target.value;
        });
      }, style: { ...field2, marginBottom: 8 } }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("textarea", { rows: 2, value: linesOf(mission.ownable_space.is_not), placeholder: t("strategy.ownableNot"), onChange: (event) => {
        patchStrategy((next) => {
          next.mission_and_positioning.ownable_space.is_not = listOf(event.target.value);
        });
      }, style: { ...field2, resize: "vertical" } })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { style: { fontSize: 13, fontWeight: 500 }, children: t("strategy.market") }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { style: { fontSize: 12, color: "var(--dsw-alias-label-secondary)" }, children: t("strategy.segments") }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "button",
          {
            type: "button",
            onClick: () => {
              patchStrategy((next) => {
                if (next.market_and_competition.customer_segments.length >= 10) return;
                next.market_and_competition.customer_segments.push({ name: "", percentage: 0 });
              });
            },
            style: miniBtn2,
            children: t("strategy.addSegment")
          }
        )
      ] }),
      market.customer_segments.map((row, index) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { display: "grid", gridTemplateColumns: "1fr 72px 28px", gap: 6, marginBottom: 6 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { value: row.name, placeholder: t("strategy.segmentName"), onChange: (event) => {
          patchStrategy((next) => {
            next.market_and_competition.customer_segments[index].name = event.target.value;
          });
        }, style: field2 }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "input",
          {
            type: "number",
            min: 0,
            max: 100,
            value: row.percentage,
            onChange: (event) => {
              patchStrategy((next) => {
                next.market_and_competition.customer_segments[index].percentage = Number(event.target.value);
              });
            },
            style: field2
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "button", onClick: () => {
          patchStrategy((next) => {
            next.market_and_competition.customer_segments.splice(index, 1);
          });
        }, style: { border: "none", background: "transparent", cursor: "pointer", color: "inherit" }, children: "\xD7" })
      ] }, `seg-${index}`)),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", margin: "8px 0 6px" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { style: { fontSize: 12, color: "var(--dsw-alias-label-secondary)" }, children: t("strategy.competitors") }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "button",
          {
            type: "button",
            onClick: () => {
              patchStrategy((next) => {
                if (next.market_and_competition.competitors.length >= 10) return;
                next.market_and_competition.competitors.push({ name: "", website: "" });
              });
            },
            style: miniBtn2,
            children: t("strategy.addCompetitor")
          }
        )
      ] }),
      market.competitors.map((row, index) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 28px", gap: 6, marginBottom: 6 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { value: row.name, placeholder: t("strategy.competitorName"), onChange: (event) => {
          patchStrategy((next) => {
            next.market_and_competition.competitors[index].name = event.target.value;
          });
        }, style: field2 }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", { value: row.website, placeholder: t("strategy.competitorWebsite"), onChange: (event) => {
          patchStrategy((next) => {
            next.market_and_competition.competitors[index].website = event.target.value;
          });
        }, style: field2 }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("button", { type: "button", onClick: () => {
          patchStrategy((next) => {
            next.market_and_competition.competitors.splice(index, 1);
          });
        }, style: { border: "none", background: "transparent", cursor: "pointer", color: "inherit" }, children: "\xD7" })
      ] }, `comp-${index}`))
    ] })
  ] });
}

// src/client/ProductGrid.jsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function ProductGrid({ t, products, emptyLabel, emptyActionLabel, onEmptyAction, onOpen, onCopy, onRemove, copiedId }) {
  if (products.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      "div",
      {
        style: {
          border: "1px dashed var(--dsw-alias-border-l4)",
          borderRadius: 12,
          minHeight: 160,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          color: "var(--dsw-alias-label-tertiary)",
          fontSize: 13
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { style: { margin: 0 }, children: emptyLabel }),
          emptyActionLabel && onEmptyAction ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "button",
            {
              type: "button",
              onClick: onEmptyAction,
              style: {
                border: "none",
                background: "var(--dsw-alias-button-primary-fill)",
                color: "var(--dsw-alias-label-primary-foreground)",
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 12 }, children: products.map((product) => {
    const glyph = (product.name || "?").trim().slice(0, 1);
    const cover = product.cover;
    const preview = cover?.kind === "image" && cover.id ? previewUrl(product.id, cover.id) : "";
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      "article",
      {
        className: "omnimux-products-focusable",
        tabIndex: 0,
        role: "button",
        onClick: () => {
          onOpen(product);
        },
        onKeyDown: activateRowKeydown(() => {
          onOpen(product);
        }),
        style: {
          border: "1px solid var(--dsw-alias-border-l2)",
          borderRadius: 12,
          overflow: "hidden",
          cursor: "pointer",
          background: "var(--dsw-alias-bg-base)",
          display: "flex",
          flexDirection: "column"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
            "div",
            {
              style: {
                height: 112,
                background: "var(--dsw-alias-bg-module-platform)",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--dsw-alias-label-tertiary)",
                overflow: "hidden"
              },
              children: [
                preview ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                  "img",
                  {
                    src: preview,
                    alt: "",
                    onError: (event) => {
                      event.currentTarget.style.display = "none";
                    },
                    style: { width: "100%", height: "100%", objectFit: "cover", position: "absolute", inset: 0 }
                  }
                ) : null,
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { style: { fontSize: 28, fontWeight: 600, lineHeight: 1 }, children: glyph })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: { padding: "10px 12px 12px", display: "flex", flexDirection: "column", gap: 4, minHeight: 72 }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: 6, minWidth: 0 }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: { fontSize: 14, fontWeight: 500, lineHeight: "20px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", flex: 1, minWidth: 0 }, children: product.name }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "span",
                {
                  style: {
                    flex: "none",
                    fontSize: 11,
                    lineHeight: "16px",
                    padding: "1px 6px",
                    borderRadius: 999,
                    background: "var(--dsw-alias-bg-module-platform)",
                    color: "var(--dsw-alias-label-secondary)"
                  },
                  children: product.kind === "digital" ? t("kind.digital") : t("kind.physical")
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "div",
              {
                style: {
                  fontSize: 12,
                  lineHeight: "18px",
                  color: "var(--dsw-alias-label-secondary)",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                },
                children: product.kind === "digital" ? product.link || product.brand_strategy?.brand_basic_info?.product?.name || product.description || "\u2014" : product.selling_points || product.description || "\u2014"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { style: { display: "flex", gap: 8, marginTop: 6 }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "button",
                {
                  type: "button",
                  onClick: (event) => {
                    event.stopPropagation();
                    onCopy(product);
                  },
                  style: { border: "none", background: "transparent", cursor: "pointer", fontSize: 12, color: "var(--dsw-alias-label-secondary)", padding: 0 },
                  children: copiedId === product.id ? t("card.copied") : t("card.copyCite")
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "button",
                {
                  type: "button",
                  onClick: (event) => {
                    event.stopPropagation();
                    onRemove(product);
                  },
                  style: { border: "none", background: "transparent", cursor: "pointer", fontSize: 12, color: "var(--dsw-alias-label-error)", padding: 0 },
                  children: t("remove.confirm")
                }
              )
            ] })
          ] })
        ]
      },
      product.id
    );
  }) });
}

// src/client/ProductsStage.jsx
var import_jsx_runtime5 = require("react/jsx-runtime");
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
function citeOf(product) {
  return product.cite || `@\u4EA7\u54C1/${product.name}`;
}
var chromeButton = {
  border: "1px solid var(--dsw-alias-border-l2)",
  background: "transparent",
  color: "inherit",
  borderRadius: 999,
  cursor: "pointer",
  fontSize: 13,
  lineHeight: "20px",
  padding: "6px 12px"
};
function ProductsStage({ t, stage }) {
  const open = (0, import_react2.useSyncExternalStore)(
    stage ? (cb) => stage.subscribe(cb) : () => () => {
    },
    stage ? () => stage.getSnapshot() : () => false
  );
  const [everOpened, setEverOpened] = (0, import_react2.useState)(false);
  const [box, setBox] = (0, import_react2.useState)(() => ({ top: 0, left: 0, width: 0, height: 0 }));
  if (open && !everOpened) setEverOpened(true);
  (0, import_react2.useLayoutEffect)(() => {
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
  const [products, setProducts] = (0, import_react2.useState)([]);
  const [query, setQuery] = (0, import_react2.useState)("");
  const [creating, setCreating] = (0, import_react2.useState)(false);
  const [editing, setEditing] = (0, import_react2.useState)(null);
  const [editingDirty, setEditingDirty] = (0, import_react2.useState)(false);
  const [pendingRemove, setPendingRemove] = (0, import_react2.useState)(null);
  const [error, setError] = (0, import_react2.useState)("");
  const [formError, setFormError] = (0, import_react2.useState)("");
  const [busy, setBusy] = (0, import_react2.useState)(false);
  const [copiedId, setCopiedId] = (0, import_react2.useState)("");
  const [revision, setRevision] = (0, import_react2.useState)(null);
  const revisionRef = (0, import_react2.useRef)(revision);
  const editingRef = (0, import_react2.useRef)(editing);
  editingRef.current = editing;
  const refreshState = (0, import_react2.useCallback)((force = false) => {
    const current = revisionRef.current;
    const usePrev = !force && current !== null;
    return getState(usePrev ? current : void 0).then((result) => {
      if (!result.ok) {
        setError(messageOf(result, t));
        return;
      }
      setError("");
      const nextRev = Number(result.body.revision) || 0;
      revisionRef.current = nextRev;
      setRevision(nextRev);
      if (result.body.unchanged) return;
      const nextProducts = Array.isArray(result.body.products) ? result.body.products : [];
      setProducts(nextProducts);
      const openEdit = editingRef.current;
      if (openEdit) {
        const fresh = nextProducts.find((row) => row.id === openEdit.id);
        if (fresh && fresh.updated_at !== openEdit.updated_at) {
          setEditingDirty(true);
          setEditing((currentEdit) => currentEdit ? { ...currentEdit, _fresh: fresh } : currentEdit);
        }
      }
    }).catch((caught) => {
      setError(errText(caught));
    });
  }, [t]);
  (0, import_react2.useEffect)(() => {
    if (!open) return void 0;
    void refreshState(true);
  }, [open, refreshState]);
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
  const visible = products.filter((product) => {
    if (!query.trim()) return true;
    const hay = `${product.name}
${product.handle}
${product.selling_points}
${product.brand}
${product.sku}
${product.link}
${(product.categories || []).join("\n")}`.toLowerCase();
    return hay.includes(query.trim().toLowerCase());
  });
  if (!stage || !everOpened) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
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
        background: "var(--dsw-alias-bg-base)",
        color: "var(--dsw-alias-label-primary)",
        overflow: "hidden"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("style", { children: FOCUS_CSS }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
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
              /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { style: { flex: 1, minWidth: 0 }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h1", { style: { margin: 0, fontSize: 16, fontWeight: 600, lineHeight: "32px" }, children: t("stage.title") }),
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { style: { margin: 0, fontSize: 13, lineHeight: "20px", color: "var(--dsw-alias-label-secondary)" }, children: t("stage.subtitle") })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
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
                    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(RefreshIcon, {}),
                    busy ? t("stage.refreshing") : t("stage.refresh")
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
                  children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(CloseIcon, { size: 16 })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { style: { flex: "none", display: "flex", gap: 8, padding: "0 20px 16px" }, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
          "button",
          {
            type: "button",
            onClick: () => {
              setCreating(true);
              setFormError("");
              setEditing(null);
              setEditingDirty(false);
            },
            style: {
              border: "none",
              background: "var(--dsw-alias-button-primary-fill)",
              color: "var(--dsw-alias-label-primary-foreground)",
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
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(PlusIcon, {}),
              t("add.button")
            ]
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
          "div",
          {
            style: {
              flex: "none",
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "0 20px 12px",
              borderBottom: "1px solid var(--dsw-alias-border-l2)"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                "input",
                {
                  value: query,
                  placeholder: t("search.placeholder"),
                  onChange: (event) => {
                    setQuery(event.target.value);
                  },
                  style: {
                    border: "1px solid var(--dsw-alias-border-l2)",
                    borderRadius: 999,
                    padding: "6px 12px",
                    fontSize: 13,
                    minWidth: 220,
                    background: "transparent",
                    color: "inherit"
                  }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { style: { marginLeft: "auto", fontSize: 12, color: "var(--dsw-alias-label-tertiary)" }, children: t("sort.updated") })
            ]
          }
        ),
        error !== "" ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { style: { margin: 0, padding: "6px 20px", fontSize: 12, color: "var(--dsw-alias-label-error)" }, children: error }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { style: { flex: 1, minHeight: 0, overflow: "auto", padding: 16 }, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          ProductGrid,
          {
            t,
            products: visible,
            emptyLabel: t("empty.all"),
            emptyActionLabel: t("add.button"),
            onEmptyAction: () => {
              setCreating(true);
              setFormError("");
            },
            onOpen: (product) => {
              setCreating(false);
              setEditingDirty(false);
              setFormError("");
              setEditing(product);
            },
            onCopy: (product) => {
              const text = citeOf(product);
              if (navigator.clipboard?.writeText) void navigator.clipboard.writeText(text);
              setCopiedId(product.id);
              window.setTimeout(() => {
                setCopiedId("");
              }, 1500);
            },
            onRemove: (product) => {
              setPendingRemove(product);
            },
            copiedId
          }
        ) }),
        creating ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          ProductFormDialog,
          {
            t,
            mode: "create",
            busy,
            error: formError,
            onCancel: () => {
              setCreating(false);
              setFormError("");
            },
            onPick: handlePick,
            onSubmit: (payload) => {
              run(() => createProduct(payload), () => {
                setCreating(false);
              });
            }
          }
        ) : null,
        editing ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          ProductFormDialog,
          {
            t,
            mode: "edit",
            busy,
            error: formError,
            dirty: editingDirty,
            initial: editing,
            onCancel: () => {
              setEditing(null);
              setEditingDirty(false);
              setFormError("");
            },
            onPick: handlePick,
            onReload: () => {
              if (editing._fresh) {
                setEditing(editing._fresh);
                setEditingDirty(false);
              }
            },
            onSubmit: (payload) => {
              run(() => updateProduct(editing.id, payload), (result) => {
                const product = result.body?.product;
                setEditing(product ?? null);
                setEditingDirty(false);
              });
            }
          }
        ) : null,
        pendingRemove ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          ConfirmRemoveDialog,
          {
            t,
            name: String(pendingRemove.name ?? ""),
            busy,
            onCancel: () => {
              setPendingRemove(null);
            },
            onConfirm: () => {
              const id = pendingRemove.id;
              run(() => deleteProduct(id), () => {
                setPendingRemove(null);
                if (editing?.id === id) {
                  setEditing(null);
                  setEditingDirty(false);
                }
              });
            }
          }
        ) : null
      ]
    }
  );
}

// src/client/index.js
var name = "omnimux-products";
var inject = ["slots", "locale"];
function apply(ctx) {
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), "omnimux-products: dictionaries");
  const t = ctx.locale.bind(NS);
  const stage = createStageStore(() => window.__omnimuxStage);
  const stageFace = () => ({ t, stage });
  ctx.effect(() => mountSidebarEntry(stage, t, ctx.locale), "omnimux-products: sidebar entry");
  ctx.slots.inject("shell.overlay", () => ctx.slots.register({
    name: "shell.overlay",
    id: "omnimux-products-stage",
    order: 31,
    locale: NS,
    inject: stageFace
  }, ProductsStage));
}

    return module.exports;
  }
});
