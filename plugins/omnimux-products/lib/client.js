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
  "stage.title": "\u5546\u54C1\u4E0E\u4EA7\u54C1\u5E93",
  "stage.subtitle": "\u7BA1\u7406\u5546\u54C1\u6807\u54C1\uFF08SPU/SKU\uFF09\u4E0E\u6570\u5B57\u4EA7\u54C1\u8D44\u4EA7\uFF0C\u4F9B Agent \u5728\u521B\u4F5C\u4E2D\u7CBE\u51C6\u8C03\u7528",
  "stage.refresh": "\u5237\u65B0",
  "stage.refreshing": "\u6B63\u5728\u5237\u65B0\u2026",
  "stage.close": "\u5173\u95ED",
  "add.button": "\u6DFB\u52A0\u4EA7\u54C1",
  "add.title": "\u6DFB\u52A0\u4EA7\u54C1",
  "add.namePlaceholder": "\u4EA7\u54C1\u540D\u79F0",
  "add.sellingPlaceholder": "\u6838\u5FC3\u5356\u70B9 (Selling Points)",
  "add.audiencePlaceholder": "\u76EE\u6807\u53D7\u4F17",
  "add.brandPlaceholder": "\u54C1\u724C",
  "add.featuresPlaceholder": "\u4EA7\u54C1\u7279\u6027",
  "add.pricePlaceholder": "\u4EF7\u683C",
  "add.skuPlaceholder": "SKU \u7F16\u7801",
  "add.promotionPlaceholder": "\u4FC3\u9500\u4FE1\u606F",
  "add.linkPlaceholder": "\u5546\u54C1\u843D\u5730\u9875\u94FE\u63A5 (\u4EC5\u5B58 URL)",
  "add.digitalLinkPlaceholder": "\u4EA7\u54C1\u5B98\u7F51\u5730\u5740 (\u4EC5\u5B58 URL\uFF1B\u9875\u9762\u89E3\u6790\u8BF7\u5728\u4F1A\u8BDD\u4E2D\u4F7F\u7528 Agent \u6280\u80FD)",
  "add.drop": "\u62D6\u62FD\u4E3B\u56FE\u6587\u4EF6\u81F3\u6B64\uFF0C\u6216\u70B9\u51FB\u6D4F\u89C8",
  "add.pickFiles": "\u9009\u62E9\u6587\u4EF6",
  "add.categories": "\u5206\u7C7B\u6807\u7B7E\uFF08\u6700\u591A 5 \u4E2A\uFF09",
  "add.categoriesPlaceholder": "\u56DE\u8F66\u6DFB\u52A0\u5206\u7C7B",
  "add.submit": "\u6DFB\u52A0\u4EA7\u54C1",
  "add.cancel": "\u53D6\u6D88",
  "add.dirty.reload": "\u91CD\u65B0\u52A0\u8F7D",
  "add.dirty.keep": "\u5F3A\u5236\u8986\u76D6",
  "add.dirty.banner": "\u5F53\u524D\u4EA7\u54C1\u5DF2\u5728\u5176\u4ED6\u7EC8\u7AEF\u66F4\u65B0\u3002\u60A8\u53EF\u4EE5\u91CD\u65B0\u8F7D\u5165\u6700\u65B0\u6570\u636E\uFF0C\u6216\u5F3A\u5236\u8986\u76D6\u63D0\u4EA4\u3002",
  "search.placeholder": "\u641C\u7D22\u4EA7\u54C1\u540D\u79F0\u3001\u5356\u70B9\u3001\u54C1\u724C\u6216 SKU",
  "sort.updated": "\u6700\u8FD1\u66F4\u65B0",
  "empty.all": "\u6682\u65E0\u4EA7\u54C1\u6570\u636E\u3002\u70B9\u51FB\u300C\u6DFB\u52A0\u4EA7\u54C1\u300D\u5F55\u5165\u9996\u4EF6\u6807\u54C1\u3002",
  "empty.noMatch": "\u6CA1\u6709\u5339\u914D\u7684\u4EA7\u54C1\u3002\u6362\u4E2A\u5173\u952E\u8BCD\u8BD5\u8BD5\u3002",
  "card.copyCite": "\u590D\u5236 Agent \u5F15\u7528\u6807\u8BC6",
  "card.copied": "\u5DF2\u590D\u5236",
  "select.toggle": "\u9009\u62E9\u4EA7\u54C1",
  "select.count": "\u5DF2\u9009 {n} \u9879",
  "select.clear": "\u53D6\u6D88\u9009\u62E9",
  "select.delete": "\u79FB\u9664 {n} \u9879",
  "select.removeTitle": "\u786E\u8BA4\u4ECE\u4EA7\u54C1\u5E93\u79FB\u9664\u8FD9 {n} \u9879\uFF1F",
  "detail.title": "\u7F16\u8F91\u4EA7\u54C1",
  "detail.name": "\u540D\u79F0",
  "detail.selling": "\u5356\u70B9",
  "detail.audience": "\u53D7\u4F17",
  "detail.brand": "\u54C1\u724C",
  "detail.features": "\u7279\u6027",
  "detail.price": "\u4EF7\u683C",
  "detail.sku": "SKU",
  "detail.promotion": "\u4FC3\u9500",
  "detail.link": "\u94FE\u63A5",
  "detail.categories": "\u5206\u7C7B",
  "detail.media": "\u5A92\u4F53",
  "detail.primary": "\u4E3B\u56FE",
  "detail.save": "\u4FDD\u5B58",
  "detail.close": "\u5173\u95ED",
  "detail.cite": "\u5F15\u7528",
  "remove.title": "\u786E\u8BA4\u4ECE\u4EA7\u54C1\u5E93\u79FB\u9664\u300C{name}\u300D\uFF1F",
  "remove.hint": "\u4EC5\u4ECE\u4EA7\u54C1\u5E93\u79FB\u9664\u5F15\u7528\uFF0C\u672C\u5730\u78C1\u76D8\u6E90\u6587\u4EF6\u4E0D\u53D7\u5F71\u54CD\u3002",
  "remove.confirm": "\u786E\u8BA4\u79FB\u9664",
  "remove.cancel": "\u53D6\u6D88",
  "error.generic": "\u8BF7\u6C42\u5931\u8D25",
  "error.pickerUnsupported": "\u5F53\u524D\u8FD0\u884C\u73AF\u5883\u4E0D\u652F\u6301\u539F\u751F\u6587\u4EF6\u9009\u62E9\u5668\uFF0C\u8BF7\u5728 macOS \u684C\u9762\u7AEF\u4F7F\u7528\u3002",
  "error.pickerFailed": "\u7CFB\u7EDF\u9009\u62E9\u7A97\u53E3\u6253\u5F00\u5931\u8D25\u3002",
  "error.nameConflict": "\u5DF2\u6709\u540C\u540D\u4EA7\u54C1\uFF0C\u8BF7\u4F7F\u7528\u5176\u4ED6\u540D\u79F0\u3002",
  "kind.label": "\u7C7B\u578B",
  "kind.physical": "\u5B9E\u4F53\u5546\u54C1",
  "kind.digital": "\u6570\u5B57\u4EA7\u54C1",
  "strategy.title": "\u54C1\u724C\u6218\u7565\u5B9A\u4F4D",
  "strategy.hint": "\u53EF\u9009\u3002\u5C55\u5F00\u540E\u4FDD\u5B58\uFF1B\u5168\u7A7A\u5219\u4E0D\u5199\u5165\u3002",
  "strategy.hintDigital": "\u8BF7\u624B\u52A8\u5B8C\u5584\u516D\u5927\u54C1\u724C\u6218\u7565\u6A21\u5757\uFF0C\u6216\u5728\u4F1A\u8BDD\u4E2D\u8C03\u5EA6\u5206\u6790 Agent \u81EA\u52A8\u63D0\u53D6\u586B\u5145\u3002",
  "strategy.expand": "\u5C55\u5F00",
  "strategy.collapse": "\u6536\u8D77",
  "strategy.basic": "\u54C1\u724C\u57FA\u7840\u4FE1\u606F",
  "strategy.companyName": "\u516C\u53F8\u540D\u79F0",
  "strategy.companyWebsite": "\u516C\u53F8\u7F51\u7AD9",
  "strategy.companyLocale": "\u8BED\u8A00\uFF08\u7559\u7A7A\u4E3A\u81EA\u52A8\uFF09",
  "strategy.productName": "\u6218\u7565\u4EA7\u54C1\u540D (\u72EC\u7ACB\u5B57\u6BB5)",
  "strategy.productCategory": "\u4EA7\u54C1\u54C1\u7C7B",
  "strategy.angles": "\u5185\u5BB9\u5207\u5165\u89D2\u5EA6\uFF08\u6700\u591A 10 \u4E2A\uFF09",
  "strategy.addAngle": "\u6DFB\u52A0\u89D2\u5EA6",
  "strategy.angleTitle": "\u89D2\u5EA6\u6807\u9898",
  "strategy.angleDesc": "\u89D2\u5EA6\u8BF4\u660E",
  "strategy.angleAudience": "\u76EE\u6807\u4EBA\u7FA4",
  "strategy.tone": "\u8BED\u8C03\u98CE\u683C",
  "strategy.listHint": "\u6BCF\u884C\u4E00\u6761",
  "strategy.dos": "\u6838\u5FC3\u6C9F\u901A\u8981\u70B9 (Key Messaging)",
  "strategy.donts": "\u54C1\u724C\u7981\u5FCC\u7EA2\u7EBF (Constraints)",
  "strategy.identity": "\u54C1\u724C\u4E0E\u4EA7\u54C1\u8EAB\u4EFD",
  "strategy.coreIdentity": "\u6838\u5FC3\u5B9A\u4F4D",
  "strategy.offering": "\u4EA7\u54C1\u4F9B\u7ED9",
  "strategy.advantage": "\u5DEE\u5F02\u5316\u4F18\u52BF",
  "strategy.problems": "\u89E3\u51B3\u7684\u95EE\u9898",
  "strategy.solutions": "\u89E3\u51B3\u65B9\u6848",
  "strategy.mission": "\u4F7F\u547D\u4E0E\u613F\u666F",
  "strategy.missionText": "\u4F7F\u547D\u9648\u8FF0",
  "strategy.diff": "\u6838\u5FC3\u5DEE\u5F02\u5316",
  "strategy.ownableStatement": "\u54C1\u724C\u6838\u5FC3\u5FC3\u667A\u5B9A\u4F4D",
  "strategy.ownableCategory": "\u5F52\u5C5E\u54C1\u7C7B",
  "strategy.ownableNot": "\u975E\u5B9A\u4F4D\u6392\u9664\u9879 (\u6BCF\u884C\u4E00\u6761)",
  "strategy.market": "\u5E02\u573A\u4E0E\u7ADE\u4E89\u683C\u5C40",
  "strategy.segments": "\u76EE\u6807\u5BA2\u7FA4\uFF08\u6700\u591A 10 \u4E2A\uFF09",
  "strategy.addSegment": "\u6DFB\u52A0\u5BA2\u7FA4",
  "strategy.segmentName": "\u5BA2\u7FA4\u540D\u79F0",
  "strategy.competitors": "\u4E3B\u8981\u7ADE\u54C1\uFF08\u6700\u591A 10 \u4E2A\uFF09",
  "strategy.addCompetitor": "\u6DFB\u52A0\u7ADE\u54C1",
  "strategy.competitorName": "\u7ADE\u54C1\u540D\u79F0",
  "strategy.competitorWebsite": "\u7ADE\u54C1\u5B98\u7F51"
};
var en = {
  "nav": "Products",
  "stage.title": "Product Library",
  "stage.subtitle": "Manage product assets (selling points, audience, covers) for Agent citations in chat",
  "stage.refresh": "Refresh",
  "stage.refreshing": "Refreshing\u2026",
  "stage.close": "Close",
  "add.button": "Add Product",
  "add.title": "Add Product",
  "add.namePlaceholder": "Product name",
  "add.sellingPlaceholder": "Key selling points",
  "add.audiencePlaceholder": "Target audience",
  "add.brandPlaceholder": "Brand",
  "add.featuresPlaceholder": "Features",
  "add.pricePlaceholder": "Price",
  "add.skuPlaceholder": "SKU",
  "add.promotionPlaceholder": "Promotion",
  "add.linkPlaceholder": "Store URL (URL only)",
  "add.digitalLinkPlaceholder": "Website URL (URL only; use Agent skills for page extraction)",
  "add.drop": "Drag and drop cover image here, or browse",
  "add.pickFiles": "Choose Files",
  "add.categories": "Categories (up to 5)",
  "add.categoriesPlaceholder": "Press Enter to add category",
  "add.submit": "Add Product",
  "add.cancel": "Cancel",
  "add.dirty.reload": "Reload",
  "add.dirty.keep": "Overwrite",
  "add.dirty.banner": "This product was updated elsewhere. You can reload the latest data or overwrite.",
  "search.placeholder": "Search name, selling points, brand, or SKU",
  "sort.updated": "Recently updated",
  "empty.all": "No products yet. Add your first product to get started.",
  "empty.noMatch": "No matching products found.",
  "card.copyCite": "Copy Reference Handle",
  "card.copied": "Copied",
  "select.toggle": "Select product",
  "select.count": "{n} selected",
  "select.clear": "Clear selection",
  "select.delete": "Remove {n}",
  "select.removeTitle": "Remove these {n} items from library?",
  "detail.title": "Edit Product",
  "detail.name": "Name",
  "detail.selling": "Selling Points",
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
  "remove.title": 'Remove "{name}" from library?',
  "remove.hint": "Removes reference only. Local source files remain unchanged.",
  "remove.confirm": "Remove",
  "remove.cancel": "Cancel",
  "error.generic": "Request failed",
  "error.pickerUnsupported": "Native file picker is only supported on macOS desktop.",
  "error.pickerFailed": "Failed to open file picker.",
  "error.nameConflict": "A product with this name already exists.",
  "kind.label": "Kind",
  "kind.physical": "Physical Product",
  "kind.digital": "Digital Offering",
  "strategy.title": "Brand Strategy",
  "strategy.hint": "Optional. Saved upon expansion; empty form stores null.",
  "strategy.hintDigital": "Manually configure the strategy modules, or dispatch an analysis Agent to generate them.",
  "strategy.expand": "Expand",
  "strategy.collapse": "Collapse",
  "strategy.basic": "Brand Basics",
  "strategy.companyName": "Company name",
  "strategy.companyWebsite": "Company website",
  "strategy.companyLocale": "Locale (empty \u2192 auto)",
  "strategy.productName": "Product name (strategy only)",
  "strategy.productCategory": "Product category",
  "strategy.angles": "Content angles (up to 10)",
  "strategy.addAngle": "Add Angle",
  "strategy.angleTitle": "Angle title",
  "strategy.angleDesc": "Angle description",
  "strategy.angleAudience": "Target audience",
  "strategy.tone": "Tone of Voice",
  "strategy.listHint": "One item per line",
  "strategy.dos": "Key Messaging (Dos)",
  "strategy.donts": "Messaging Constraints (Don'ts)",
  "strategy.identity": "Brand & Product Identity",
  "strategy.coreIdentity": "Core positioning",
  "strategy.offering": "Product offering",
  "strategy.advantage": "Unique advantage",
  "strategy.problems": "Problems solved",
  "strategy.solutions": "Solutions",
  "strategy.mission": "Mission & Positioning",
  "strategy.missionText": "Mission statement",
  "strategy.diff": "Differentiation",
  "strategy.ownableStatement": "Core positioning",
  "strategy.ownableCategory": "Category",
  "strategy.ownableNot": "Exclusions (one per line)",
  "strategy.market": "Market & Competition",
  "strategy.segments": "Customer segments (up to 10)",
  "strategy.addSegment": "Add Segment",
  "strategy.segmentName": "Segment name",
  "strategy.competitors": "Competitors (up to 10)",
  "strategy.addCompetitor": "Add Competitor",
  "strategy.competitorName": "Competitor name",
  "strategy.competitorWebsite": "Competitor website"
};
var NS = "omnimux-products";

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
  const { id, rank, label, iconSvg, stageStore, locale, customClassName, datasetKey } = options;
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
var STAGE_ID = "omnimux-products";
function createStageStore2(getStage) {
  return createStageStore(STAGE_ID, getStage);
}

// src/client/sidebar-entry.js
var ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid meet"><path fill="currentColor" d="M12.841 15.1L12 13l-.841 2.1L9 15.292l1.64 1.489L10.146 19L12 17.821L13.854 19l-.494-2.219L15 15.292zM6 2h12v2H6zM4 6h16v2H4z"/><path fill="currentColor" d="M20 12v8H4v-8zm0-2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2"/></svg>';
function mountSidebarEntry(stage, t, locale) {
  return createSidebarEntry({
    id: "omnimux-products",
    rank: 8,
    label: () => t("nav"),
    iconSvg: ICON,
    stageStore: stage,
    locale,
    customClassName: "omnimux-products-entry",
    datasetKey: "data-omnimux-products-entry"
  });
}

// src/client/ProductsStage.jsx
var import_react3 = require("react");

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
var import_jsx_runtime2 = require("react/jsx-runtime");
function ConfirmRemoveDialog({ t, name: name2, title, busy, onCancel, onConfirm }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    ConfirmModal,
    {
      open: true,
      onClose: onCancel,
      title: title || t("remove.title").replace("{name}", name2),
      message: t("remove.hint"),
      confirmLabel: t("remove.confirm"),
      cancelLabel: t("remove.cancel"),
      confirmVariant: "danger",
      confirmLoading: busy,
      onConfirm
    }
  );
}

// src/client/icons.jsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function Icon({ size = 14, children }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
      className: "omnimux-products-icon",
      children
    }
  );
}
function FileIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Icon, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M14 3v5h5" })
  ] });
}
function PlusIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Icon, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M12 5v14" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M5 12h14" })
  ] });
}
function CheckIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Icon, { ...props, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "m5 12 5 5 9-10" }) });
}
function CloseIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Icon, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M6 6l12 12" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M18 6 6 18" })
  ] });
}
function RefreshIcon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(Icon, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M20 11a8 8 0 0 0-14.9-3" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M4 5v4h4" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M4 13a8 8 0 0 0 14.9 3" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M20 19v-4h-4" })
  ] });
}

// src/client/ProductFormDialog.jsx
var import_react2 = require("react");

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

// src/client/ProductStrategyFields.jsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function linesOf(list) {
  return Array.isArray(list) ? list.join("\n") : "";
}
function listOf(text) {
  return String(text).split("\n").map((row) => row.trim()).filter(Boolean);
}
function StrategyFields({ t, strategy, patchStrategy }) {
  const basic = strategy.brand_basic_info;
  const identity = strategy.identity_and_product;
  const mission = strategy.mission_and_positioning;
  const market = strategy.market_and_competition;
  const priorityOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" }
  ];
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "omnimux-products-form", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("section", { className: "omnimux-products-section", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "omnimux-products-section-title", children: t("strategy.basic") }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "omnimux-products-grid-fields", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(InputField, { value: basic.company.name, placeholder: t("strategy.companyName"), onChange: (event) => {
          patchStrategy((next) => {
            next.brand_basic_info.company.name = event.target.value;
          });
        } }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(InputField, { value: basic.company.website, placeholder: t("strategy.companyWebsite"), onChange: (event) => {
          patchStrategy((next) => {
            next.brand_basic_info.company.website = event.target.value;
          });
        } }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(InputField, { value: basic.company.locale, placeholder: t("strategy.companyLocale"), onChange: (event) => {
          patchStrategy((next) => {
            next.brand_basic_info.company.locale = event.target.value;
          });
        } }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(InputField, { value: basic.product.name, placeholder: t("strategy.productName"), onChange: (event) => {
          patchStrategy((next) => {
            next.brand_basic_info.product.name = event.target.value;
          });
        } }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(InputField, { className: "omnimux-products-span2", value: basic.product.category, placeholder: t("strategy.productCategory"), onChange: (event) => {
          patchStrategy((next) => {
            next.brand_basic_info.product.category = event.target.value;
          });
        } })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("section", { className: "omnimux-products-section", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "omnimux-products-section-head", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "omnimux-products-section-title", children: t("strategy.angles") }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          Button,
          {
            variant: "outline",
            size: "xs",
            onClick: () => {
              patchStrategy((next) => {
                if (next.content_angles.length >= 10) return;
                next.content_angles.push({ id: "", title: "", description: "", target_audience: "", priority: 3 });
              });
            },
            children: t("strategy.addAngle")
          }
        )
      ] }),
      strategy.content_angles.map((angle, index) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "omnimux-products-section", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "omnimux-products-angle-row", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(InputField, { value: angle.title, placeholder: t("strategy.angleTitle"), onChange: (event) => {
            patchStrategy((next) => {
              next.content_angles[index].title = event.target.value;
            });
          } }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            DropdownSelect,
            {
              value: String(angle.priority || 3),
              options: priorityOptions,
              "aria-label": t("strategy.angleTitle"),
              onChange: (value) => {
                patchStrategy((next) => {
                  next.content_angles[index].priority = Number(value);
                });
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            IconButton,
            {
              variant: "ghost",
              size: "xs",
              "aria-label": t("remove.confirm"),
              onClick: () => {
                patchStrategy((next) => {
                  next.content_angles.splice(index, 1);
                });
              },
              children: "\xD7"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("textarea", { className: "omnimux-products-textarea", rows: 2, value: angle.description, placeholder: t("strategy.angleDesc"), onChange: (event) => {
          patchStrategy((next) => {
            next.content_angles[index].description = event.target.value;
          });
        } }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(InputField, { value: angle.target_audience, placeholder: t("strategy.angleAudience"), onChange: (event) => {
          patchStrategy((next) => {
            next.content_angles[index].target_audience = event.target.value;
          });
        } })
      ] }, angle.id || `new-${index}`))
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("section", { className: "omnimux-products-section", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "omnimux-products-section-title", children: t("strategy.tone") }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "omnimux-products-label", children: t("strategy.listHint") }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("textarea", { className: "omnimux-products-textarea", rows: 3, value: linesOf(strategy.tone_and_voice.dos), placeholder: t("strategy.dos"), onChange: (event) => {
        patchStrategy((next) => {
          next.tone_and_voice.dos = listOf(event.target.value);
        });
      } }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("textarea", { className: "omnimux-products-textarea", rows: 3, value: linesOf(strategy.tone_and_voice.donts), placeholder: t("strategy.donts"), onChange: (event) => {
        patchStrategy((next) => {
          next.tone_and_voice.donts = listOf(event.target.value);
        });
      } })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("section", { className: "omnimux-products-section", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "omnimux-products-section-title", children: t("strategy.identity") }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("textarea", { className: "omnimux-products-textarea", rows: 2, value: identity.core_identity, placeholder: t("strategy.coreIdentity"), onChange: (event) => {
        patchStrategy((next) => {
          next.identity_and_product.core_identity = event.target.value;
        });
      } }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "omnimux-products-label", children: t("strategy.listHint") }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("textarea", { className: "omnimux-products-textarea", rows: 2, value: linesOf(identity.product_offering), placeholder: t("strategy.offering"), onChange: (event) => {
        patchStrategy((next) => {
          next.identity_and_product.product_offering = listOf(event.target.value);
        });
      } }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("textarea", { className: "omnimux-products-textarea", rows: 2, value: linesOf(identity.unique_advantage), placeholder: t("strategy.advantage"), onChange: (event) => {
        patchStrategy((next) => {
          next.identity_and_product.unique_advantage = listOf(event.target.value);
        });
      } }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("textarea", { className: "omnimux-products-textarea", rows: 2, value: linesOf(identity.problems_solved), placeholder: t("strategy.problems"), onChange: (event) => {
        patchStrategy((next) => {
          next.identity_and_product.problems_solved = listOf(event.target.value);
        });
      } }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("textarea", { className: "omnimux-products-textarea", rows: 2, value: linesOf(identity.solutions), placeholder: t("strategy.solutions"), onChange: (event) => {
        patchStrategy((next) => {
          next.identity_and_product.solutions = listOf(event.target.value);
        });
      } })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("section", { className: "omnimux-products-section", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "omnimux-products-section-title", children: t("strategy.mission") }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("textarea", { className: "omnimux-products-textarea", rows: 2, value: mission.mission, placeholder: t("strategy.missionText"), onChange: (event) => {
        patchStrategy((next) => {
          next.mission_and_positioning.mission = event.target.value;
        });
      } }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "omnimux-products-label", children: t("strategy.listHint") }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("textarea", { className: "omnimux-products-textarea", rows: 2, value: linesOf(mission.differentiation), placeholder: t("strategy.diff"), onChange: (event) => {
        patchStrategy((next) => {
          next.mission_and_positioning.differentiation = listOf(event.target.value);
        });
      } }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(InputField, { value: mission.ownable_space.statement, placeholder: t("strategy.ownableStatement"), onChange: (event) => {
        patchStrategy((next) => {
          next.mission_and_positioning.ownable_space.statement = event.target.value;
        });
      } }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(InputField, { value: mission.ownable_space.category, placeholder: t("strategy.ownableCategory"), onChange: (event) => {
        patchStrategy((next) => {
          next.mission_and_positioning.ownable_space.category = event.target.value;
        });
      } }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("textarea", { className: "omnimux-products-textarea", rows: 2, value: linesOf(mission.ownable_space.is_not), placeholder: t("strategy.ownableNot"), onChange: (event) => {
        patchStrategy((next) => {
          next.mission_and_positioning.ownable_space.is_not = listOf(event.target.value);
        });
      } })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("section", { className: "omnimux-products-section", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "omnimux-products-section-head", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "omnimux-products-section-title", children: t("strategy.market") }) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "omnimux-products-section-head", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "omnimux-products-label", children: t("strategy.segments") }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          Button,
          {
            variant: "outline",
            size: "xs",
            onClick: () => {
              patchStrategy((next) => {
                if (next.market_and_competition.customer_segments.length >= 10) return;
                next.market_and_competition.customer_segments.push({ name: "", percentage: 0 });
              });
            },
            children: t("strategy.addSegment")
          }
        )
      ] }),
      market.customer_segments.map((row, index) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "omnimux-products-seg-row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(InputField, { value: row.name, placeholder: t("strategy.segmentName"), onChange: (event) => {
          patchStrategy((next) => {
            next.market_and_competition.customer_segments[index].name = event.target.value;
          });
        } }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          InputField,
          {
            type: "number",
            min: 0,
            max: 100,
            value: row.percentage,
            onChange: (event) => {
              patchStrategy((next) => {
                next.market_and_competition.customer_segments[index].percentage = Number(event.target.value);
              });
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          IconButton,
          {
            variant: "ghost",
            size: "xs",
            "aria-label": t("remove.confirm"),
            onClick: () => {
              patchStrategy((next) => {
                next.market_and_competition.customer_segments.splice(index, 1);
              });
            },
            children: "\xD7"
          }
        )
      ] }, `seg-${index}`)),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "omnimux-products-section-head", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "omnimux-products-label", children: t("strategy.competitors") }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          Button,
          {
            variant: "outline",
            size: "xs",
            onClick: () => {
              patchStrategy((next) => {
                if (next.market_and_competition.competitors.length >= 10) return;
                next.market_and_competition.competitors.push({ name: "", website: "" });
              });
            },
            children: t("strategy.addCompetitor")
          }
        )
      ] }),
      market.competitors.map((row, index) => /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "omnimux-products-comp-row", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(InputField, { value: row.name, placeholder: t("strategy.competitorName"), onChange: (event) => {
          patchStrategy((next) => {
            next.market_and_competition.competitors[index].name = event.target.value;
          });
        } }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(InputField, { value: row.website, placeholder: t("strategy.competitorWebsite"), onChange: (event) => {
          patchStrategy((next) => {
            next.market_and_competition.competitors[index].website = event.target.value;
          });
        } }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          IconButton,
          {
            variant: "ghost",
            size: "xs",
            "aria-label": t("remove.confirm"),
            onClick: () => {
              patchStrategy((next) => {
                next.market_and_competition.competitors.splice(index, 1);
              });
            },
            children: "\xD7"
          }
        )
      ] }, `comp-${index}`))
    ] })
  ] });
}

// src/client/ProductFormDialog.jsx
var import_jsx_runtime5 = require("react/jsx-runtime");
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
function ProductFormDialog({ t, data, onAction }) {
  const { mode, busy, error, dirty, initial } = data;
  const { onCancel, onPick, onSubmit, onReload } = onAction;
  const nameRef = (0, import_react2.useRef)(null);
  const digitalAtOpen = isDigitalProduct(initial);
  const [name2, setName] = (0, import_react2.useState)(initial?.name ?? "");
  const [kind, setKind] = (0, import_react2.useState)(initial?.kind === "digital" ? "digital" : "physical");
  const [selling, setSelling] = (0, import_react2.useState)(initial?.selling_points ?? "");
  const [audience, setAudience] = (0, import_react2.useState)(initial?.target_audience ?? "");
  const [brand, setBrand] = (0, import_react2.useState)(initial?.brand ?? "");
  const [features, setFeatures] = (0, import_react2.useState)(initial?.features ?? "");
  const [price, setPrice] = (0, import_react2.useState)(initial?.price ?? "");
  const [sku, setSku] = (0, import_react2.useState)(initial?.sku ?? "");
  const [promotion, setPromotion] = (0, import_react2.useState)(initial?.promotion ?? "");
  const [link, setLink] = (0, import_react2.useState)(initial?.link ?? "");
  const [tagDraft, setTagDraft] = (0, import_react2.useState)("");
  const [categories, setCategories] = (0, import_react2.useState)(Array.isArray(initial?.categories) ? [...initial.categories] : []);
  const [media, setMedia] = (0, import_react2.useState)(Array.isArray(initial?.media) ? initial.media.map((row) => ({ ...row })) : []);
  const [coverId, setCoverId] = (0, import_react2.useState)(initial?.cover_media_id ?? null);
  const [strategyOpen, setStrategyOpen] = (0, import_react2.useState)(digitalAtOpen);
  const [strategyTouched, setStrategyTouched] = (0, import_react2.useState)(digitalAtOpen);
  const [strategy, setStrategy] = (0, import_react2.useState)(() => draftFrom(initial));
  (0, import_react2.useEffect)(() => {
    nameRef.current?.focus();
  }, []);
  (0, import_react2.useEffect)(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onCancel();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onCancel]);
  (0, import_react2.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "omnimux-products-modal-backdrop", onClick: onCancel, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    "div",
    {
      className: "omnimux-products-modal-wrapper",
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "omnimux-products-modal-title",
      onClick: (event) => {
        event.stopPropagation();
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          IconButton,
          {
            className: "omnimux-products-modal-close",
            variant: "ghost",
            size: "sm",
            "aria-label": t("stage.close"),
            onClick: onCancel,
            children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(CloseIcon, { size: 14 })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "omnimux-products-modal-container", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "omnimux-products-modal-header", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { id: "omnimux-products-modal-title", className: "omnimux-products-modal-title", children: mode === "edit" ? t("detail.title") : t("add.title") }) }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "omnimux-products-modal-body", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "omnimux-products-form", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "omnimux-products-name-row", children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "omnimux-products-at", "aria-hidden": "true", children: "@" }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                InputField,
                {
                  ref: nameRef,
                  className: "omnimux-products-name-field",
                  value: name2,
                  placeholder: t("add.namePlaceholder"),
                  disabled: busy,
                  onChange: (event) => {
                    setName(event.target.value);
                  }
                }
              )
            ] }),
            dirty ? /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "omnimux-products-dirty", children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "omnimux-products-dirty-text", children: t("add.dirty.banner") }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Button, { variant: "outline", size: "xs", onClick: () => {
                onReload?.();
              }, children: t("add.dirty.reload") }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "omnimux-products-label", children: t("add.dirty.keep") })
            ] }) : null,
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "omnimux-products-kind-row", children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "omnimux-products-kind-label", children: t("kind.label") }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  className: "omnimux-products-kind-chip",
                  "aria-pressed": kind === "physical",
                  onClick: () => {
                    setKind("physical");
                    setStrategyOpen(false);
                  },
                  children: t("kind.physical")
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  className: "omnimux-products-kind-chip",
                  "aria-pressed": kind === "digital",
                  onClick: () => {
                    setKind("digital");
                    const persisted = isPlainStrategy(initial?.brand_strategy);
                    setStrategyOpen(persisted);
                    if (persisted) setStrategyTouched(true);
                  },
                  children: t("kind.digital")
                }
              )
            ] }),
            kind === "physical" ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              PhysicalFields,
              {
                t,
                values: { selling, audience, brand, features, price, sku, promotion, link },
                onChange: { setSelling, setAudience, setBrand, setFeatures, setPrice, setSku, setPromotion, setLink }
              }
            ) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(InputField, { value: link, placeholder: t("add.digitalLinkPlaceholder"), onChange: (event) => {
              setLink(event.target.value);
            } }),
            kind === "digital" ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              DigitalStrategyPanel,
              {
                t,
                strategyOpen,
                strategy,
                patchStrategy,
                onCollapse: () => {
                  setStrategyOpen(false);
                },
                onExpand: openStrategy
              }
            ) : null,
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
              "div",
              {
                className: "omnimux-products-drop",
                onDragOver: (event) => {
                  event.preventDefault();
                },
                onDrop: (event) => {
                  event.preventDefault();
                  const dropped = Array.from(event.dataTransfer?.files ?? []);
                  addPaths(dropped.map((file) => typeof file.path === "string" ? file.path : "").filter(Boolean));
                },
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(FileIcon, { size: 22 }),
                  t("add.drop"),
                  /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Button, { variant: "outline", size: "sm", onClick: () => {
                    void onPick("file").then(addPaths);
                  }, children: t("add.pickFiles") })
                ]
              }
            ),
            media.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
              MediaList,
              {
                t,
                media,
                coverId,
                onSetCover: (file, index) => {
                  setCoverId(file.id || null);
                  if (file.id) return;
                  setMedia((current) => {
                    const next = [...current];
                    const [picked] = next.splice(index, 1);
                    next.unshift(picked);
                    return next;
                  });
                },
                onRemove: (file, index) => {
                  setMedia((current) => current.filter((_, i) => i !== index));
                  if (file.id && coverId === file.id) setCoverId(null);
                }
              }
            ) : null,
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "omnimux-products-label", children: t("add.categories") }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "omnimux-products-tags", children: categories.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("span", { className: "omnimux-products-tag", children: [
                tag,
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                  IconButton,
                  {
                    variant: "ghost",
                    size: "xs",
                    "aria-label": t("remove.confirm"),
                    onClick: () => {
                      setCategories(categories.filter((item) => item !== tag));
                    },
                    children: "\xD7"
                  }
                )
              ] }, tag)) }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                InputField,
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
                  }
                }
              )
            ] }),
            error ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "omnimux-products-error", children: error }) : null
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "omnimux-products-modal-footer", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            Button,
            {
              variant: "primary",
              disabled: !canSubmit,
              loading: busy,
              onClick: () => {
                onSubmit(payload());
              },
              children: mode === "edit" ? t("detail.save") : t("add.submit")
            }
          ) })
        ] })
      ]
    }
  ) });
}
function PhysicalFields({ t, values, onChange }) {
  const { selling, audience, brand, features, price, sku, promotion, link } = values;
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "omnimux-products-grid-fields", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("textarea", { className: "omnimux-products-textarea omnimux-products-span2", rows: 2, value: selling, placeholder: t("add.sellingPlaceholder"), onChange: (event) => {
      onChange.setSelling(event.target.value);
    } }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(InputField, { value: audience, placeholder: t("add.audiencePlaceholder"), onChange: (event) => {
      onChange.setAudience(event.target.value);
    } }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(InputField, { value: brand, placeholder: t("add.brandPlaceholder"), onChange: (event) => {
      onChange.setBrand(event.target.value);
    } }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("textarea", { className: "omnimux-products-textarea omnimux-products-span2", rows: 2, value: features, placeholder: t("add.featuresPlaceholder"), onChange: (event) => {
      onChange.setFeatures(event.target.value);
    } }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(InputField, { value: price, placeholder: t("add.pricePlaceholder"), onChange: (event) => {
      onChange.setPrice(event.target.value);
    } }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(InputField, { value: sku, placeholder: t("add.skuPlaceholder"), onChange: (event) => {
      onChange.setSku(event.target.value);
    } }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(InputField, { value: promotion, placeholder: t("add.promotionPlaceholder"), onChange: (event) => {
      onChange.setPromotion(event.target.value);
    } }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(InputField, { value: link, placeholder: t("add.linkPlaceholder"), onChange: (event) => {
      onChange.setLink(event.target.value);
    } })
  ] });
}
function DigitalStrategyPanel({ t, strategyOpen, strategy, patchStrategy, onCollapse, onExpand }) {
  const toggleLabel = strategyOpen ? t("strategy.collapse") : t("strategy.expand");
  const onToggle = strategyOpen ? onCollapse : onExpand;
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "omnimux-products-strategy", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "omnimux-products-strategy-head", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "omnimux-products-strategy-title", children: t("strategy.title") }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "omnimux-products-strategy-hint", children: t("strategy.hintDigital") })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Button, { variant: "outline", size: "xs", onClick: onToggle, children: toggleLabel })
    ] }),
    strategyOpen ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(StrategyFields, { t, strategy, patchStrategy }) : null
  ] });
}
function MediaList({ t, media, coverId, onSetCover, onRemove }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("ul", { className: "omnimux-products-filelist", children: media.map((file, index) => {
    const id = file.id || file.real_path;
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("li", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(FileIcon, { size: 14 }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "omnimux-products-filelist-name", children: file.original_name || file.real_path }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        Button,
        {
          variant: "ghost",
          size: "xs",
          onClick: () => {
            onSetCover(file, index);
          },
          children: t("detail.primary")
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        IconButton,
        {
          variant: "ghost",
          size: "xs",
          "aria-label": t("remove.confirm"),
          onClick: () => {
            onRemove(file, index);
          },
          children: "\xD7"
        }
      )
    ] }, id);
  }) });
}

// src/client/a11y.js
var FOCUS_CSS = [
  ".omnimux-products-focusable:focus-visible{outline:2px solid var(--dsw-alias-label-primary);outline-offset:2px;border-radius:8px;}",
  ".omnimux-products-focusable:hover{border-color:var(--dsw-alias-border-l4);}",
  ".omnimux-products-check{opacity:0;transition:opacity 0.15s ease;}",
  '.omnimux-products-focusable:hover .omnimux-products-check,.omnimux-products-focusable:focus-within .omnimux-products-check,.omnimux-products-check[data-selected="true"]{opacity:1;}'
].join("\n");
function activateRowKeydown(trigger) {
  return (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      trigger();
    }
  };
}

// src/client/ProductGrid.jsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function ProductGrid({ t, products, emptyLabel, emptyActionLabel, showEmptyAction = true, onEmptyAction, onOpen, onCopy, onRemove, copiedId, selectedIds, onToggleSelect }) {
  if (products.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "omnimux-products-empty", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { children: emptyLabel }),
      emptyActionLabel && onEmptyAction && showEmptyAction ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Button, { variant: "primary", size: "sm", onClick: onEmptyAction, children: emptyActionLabel }) : null
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "omnimux-products-grid", children: products.map((product) => {
    const glyph = (product.name || "?").trim().slice(0, 1);
    const cover = product.cover;
    const preview = cover?.kind === "image" && cover.id ? previewUrl(product.id, cover.id) : "";
    const selected = selectedIds?.has(product.id);
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
      "article",
      {
        className: "omnimux-products-focusable omnimux-products-card",
        tabIndex: 0,
        role: "button",
        "aria-selected": selected ? "true" : "false",
        onClick: () => {
          onOpen(product);
        },
        onKeyDown: activateRowKeydown(() => {
          onOpen(product);
        }),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "omnimux-products-card-thumb", children: [
            preview ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              "img",
              {
                src: preview,
                alt: "",
                className: "omnimux-products-card-media",
                onError: (event) => {
                  event.currentTarget.dataset.broken = "true";
                }
              }
            ) : null,
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "omnimux-products-glyph", children: glyph }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "omnimux-products-badge", children: product.kind === "digital" ? t("kind.digital") : t("kind.physical") }),
            onToggleSelect ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              IconButton,
              {
                variant: "ghost",
                size: "xs",
                className: "omnimux-products-check",
                "data-selected": selected ? "true" : "false",
                "aria-label": t("select.toggle"),
                "aria-pressed": selected ? "true" : "false",
                title: "",
                onClick: (event) => {
                  event.stopPropagation();
                  onToggleSelect(product);
                },
                children: selected ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(CheckIcon, { size: 12 }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", {})
              }
            ) : null
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "omnimux-products-card-body", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "omnimux-products-card-title", children: product.name }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "omnimux-products-card-desc", children: product.kind === "digital" ? product.link || product.brand_strategy?.brand_basic_info?.product?.name || product.description || "\u2014" : product.selling_points || product.description || "\u2014" })
          ] })
        ]
      },
      product.id
    );
  }) });
}

// src/client/styles.js
var STYLES_ID = "omnimux-products-styles";
var PRODUCTS_CSS = `
.omnimux-products-stage {
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
.omnimux-products-stage[data-visible="false"] {
  display: none;
  pointer-events: none;
}
.omnimux-products-stage-toolbar {
  flex: none;
  padding: 0 20px 12px;
  height: 44px;
}
.omnimux-products-selection {
  flex: none;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 20px;
  border-bottom: 1px solid var(--dsw-alias-border-l2);
}
.omnimux-products-selection-actions {
  margin-left: auto;
  display: flex;
  gap: 8px;
  align-items: center;
}
.omnimux-products-error {
  margin: 0;
  padding: 6px 20px;
  font-size: 12px;
  color: var(--dsw-alias-state-error-primary);
}
.omnimux-products-body {
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding: 16px;
}
.omnimux-products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 12px;
}
.omnimux-products-empty {
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
.omnimux-products-empty p { margin: 0; }
.omnimux-products-card {
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  background: var(--dsw-alias-bg-base, var(--dsw-bg));
  display: flex;
  flex-direction: column;
}
.omnimux-products-card[aria-selected="true"] {
  border-color: var(--dsw-alias-label-primary);
}
.omnimux-products-card-thumb {
  height: 112px;
  background: var(--dsw-alias-bg-module-platform);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--dsw-alias-label-tertiary);
  overflow: hidden;
}
.omnimux-products-card-media {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  inset: 0;
}
.omnimux-products-card-media[data-broken="true"] { display: none; }
.omnimux-products-glyph {
  font-size: 28px;
  font-weight: 600;
  line-height: 1;
}
.omnimux-products-badge {
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 11px;
  line-height: 16px;
  font-weight: 500;
  padding: 2px 8px;
  border-radius: 999px;
  background: var(--dsw-alias-bg-base, var(--dsw-bg));
  border: 1px solid var(--dsw-alias-border-l2);
  color: var(--dsw-alias-label-secondary);
  z-index: 1;
}
.omnimux-products-card-body {
  padding: 10px 12px 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.omnimux-products-card-title {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.omnimux-products-card-desc {
  font-size: 12px;
  line-height: 18px;
  color: var(--dsw-alias-label-secondary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.omnimux-products-stage .omnimux-products-card-thumb .omnimux-products-check,
.omnimux-products-stage .omnimux-products-card-thumb .omnimux-products-check:hover,
.omnimux-products-stage .omnimux-products-card-thumb .omnimux-products-check:active {
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
.omnimux-products-stage .omnimux-products-card-thumb .omnimux-products-check[data-selected="true"],
.omnimux-products-stage .omnimux-products-card-thumb .omnimux-products-check[data-selected="true"]:hover {
  opacity: 1;
  border: none;
  background: var(--dsw-alias-button-primary-fill);
  color: var(--dsw-alias-label-primary-foreground);
}
.omnimux-products-icon {
  flex: none;
  display: inline-block;
  vertical-align: middle;
}
.omnimux-products-focusable:focus-visible {
  outline: 2px solid var(--dsw-alias-label-primary);
  outline-offset: 2px;
  border-radius: 8px;
}
.omnimux-products-focusable:hover { border-color: var(--dsw-alias-border-l4); }
.omnimux-products-focusable:hover .omnimux-products-check,
.omnimux-products-focusable:focus-within .omnimux-products-check { opacity: 1; }
.omnimux-products-form { display: flex; flex-direction: column; gap: 12px; }
.omnimux-products-name-row { display: flex; align-items: center; gap: 8px; }
.omnimux-products-at { color: var(--dsw-alias-label-tertiary); font-size: 18px; }
.omnimux-products-name-field { flex: 1; min-width: 0; }
.omnimux-products-dirty {
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 12px;
  line-height: 18px;
  background: var(--dsw-alias-bg-module-platform);
  color: var(--dsw-alias-label-secondary);
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
}
.omnimux-products-dirty-text { flex: 1; min-width: 160px; }
.omnimux-products-kind-row {
  display: flex;
  gap: 8px;
  align-items: center;
}
.omnimux-products-kind-label {
  font-size: 12px;
  color: var(--dsw-alias-label-secondary);
}
.omnimux-products-kind-chip[aria-pressed="true"] {
  background: var(--dsw-alias-bg-module-platform);
}
.omnimux-products-grid-fields {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.omnimux-products-span2 { grid-column: 1 / -1; }
.omnimux-products-textarea {
  width: 100%;
  border: 1px solid var(--dsw-alias-border-l2);
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 13px;
  color: inherit;
  background: transparent;
  box-sizing: border-box;
  resize: vertical;
  font: inherit;
}
.omnimux-products-strategy {
  border-top: 1px solid var(--dsw-alias-border-l2);
  padding-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.omnimux-products-strategy-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}
.omnimux-products-strategy-title { font-size: 13px; font-weight: 500; }
.omnimux-products-strategy-hint {
  font-size: 12px;
  color: var(--dsw-alias-label-tertiary);
  margin-top: 2px;
}
.omnimux-products-drop {
  width: 100%;
  min-height: 96px;
  border: 1px dashed var(--dsw-alias-border-l4);
  border-radius: 12px;
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
.omnimux-products-filelist {
  margin: 10px 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.omnimux-products-filelist li {
  display: flex;
  gap: 8px;
  font-size: 12px;
  color: var(--dsw-alias-label-secondary);
  align-items: center;
}
.omnimux-products-filelist-name {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.omnimux-products-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 8px; }
.omnimux-products-tag {
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 999px;
  background: var(--dsw-alias-bg-module-platform);
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
.omnimux-products-section { display: flex; flex-direction: column; gap: 8px; }
.omnimux-products-section-title { font-size: 13px; font-weight: 500; }
.omnimux-products-section-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}
.omnimux-products-angle-row,
.omnimux-products-seg-row {
  display: grid;
  grid-template-columns: 1fr 96px 28px;
  gap: 6px;
}
.omnimux-products-comp-row {
  display: grid;
  grid-template-columns: 1fr 1fr 28px;
  gap: 6px;
}
.omnimux-products-label {
  font-size: 12px;
  color: var(--dsw-alias-label-secondary);
  margin: 0;
}

/* Self-drawn product form modal (outside-corner close, kit controls only) */
.omnimux-products-modal-backdrop,
.omnimux-products-modal-backdrop * {
  box-sizing: border-box;
}
.omnimux-products-modal-backdrop {
  position: fixed;
  inset: 0;
  background: var(--dsw-alias-bg-mask-1, rgba(0, 0, 0, 0.70));
  backdrop-filter: blur(16px);
  z-index: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  animation: omnimux-products-fade-in 120ms ease;
  pointer-events: auto;
  -webkit-app-region: no-drag;
}
@keyframes omnimux-products-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
.omnimux-products-modal-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 720px;
  animation: omnimux-products-fade-in 120ms ease;
}
.omnimux-products-modal-container {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 85vh;
  border-radius: 16px;
  overflow: hidden;
  background: var(--dsw-alias-bg-module-platform, #131313);
  border: 1px solid var(--dsw-alias-border-l2, #242424);
  box-shadow: 0 12px 36px var(--dsw-alias-bg-mask-1, rgba(0, 0, 0, 0.60));
}
.omnimux-products-modal-close {
  position: absolute;
  top: -10px;
  right: -48px;
  width: 36px !important;
  height: 36px !important;
  min-width: 36px;
  padding: 0 !important;
  border-radius: 50%;
  border: 1px solid var(--dsw-alias-border-hover, rgba(255, 255, 255, 0.22));
  background: var(--dsw-alias-bg-elevated, rgba(24, 24, 24, 0.88));
  backdrop-filter: blur(12px);
  color: var(--dsw-alias-label-primary, #ffffff);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  box-shadow: 0 4px 16px var(--dsw-alias-bg-mask-1, rgba(0, 0, 0, 0.55));
  transition: all 120ms ease;
  flex-shrink: 0;
  align-self: flex-start;
}
.omnimux-products-modal-close:hover {
  border-color: var(--dsw-alias-label-tertiary, rgba(255, 255, 255, 0.45));
  background: var(--dsw-alias-bg-layer-2, rgba(45, 45, 45, 0.95));
  transform: scale(1.08);
}
@media (max-width: 1160px) {
  .omnimux-products-modal-close {
    top: -44px;
    right: 4px;
  }
}
.omnimux-products-modal-header {
  flex: none;
  display: flex;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid var(--dsw-alias-border-l2, #242424);
}
.omnimux-products-modal-title {
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  line-height: 24px;
  color: var(--dsw-alias-label-primary, inherit);
}
.omnimux-products-modal-body {
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding: 16px 20px;
}
.omnimux-products-modal-footer {
  flex: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  padding: 12px 20px;
  border-top: 1px solid var(--dsw-alias-border-l2, #242424);
}
`;
function injectProductsStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(STYLES_ID)) return;
  const styleNode = document.createElement("style");
  styleNode.id = STYLES_ID;
  styleNode.textContent = PRODUCTS_CSS;
  document.head.appendChild(styleNode);
}

// src/client/ProductsStage.jsx
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
function citeOf(product) {
  return product.cite || `@\u4EA7\u54C1/${product.name}`;
}
function ProductsStage({ t, stage }) {
  (0, import_react3.useEffect)(() => {
    injectProductsStyles();
  }, []);
  const open = (0, import_react3.useSyncExternalStore)(
    stage ? (cb) => stage.subscribe(cb) : () => () => {
    },
    stage ? () => stage.getSnapshot() : () => false
  );
  const [everOpened, setEverOpened] = (0, import_react3.useState)(false);
  const [box, setBox] = (0, import_react3.useState)(() => ({ top: 0, left: 0, width: 0, height: 0 }));
  if (open && !everOpened) setEverOpened(true);
  (0, import_react3.useLayoutEffect)(() => {
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
  const [products, setProducts] = (0, import_react3.useState)([]);
  const [query, setQuery] = (0, import_react3.useState)("");
  const [creating, setCreating] = (0, import_react3.useState)(false);
  const [editing, setEditing] = (0, import_react3.useState)(null);
  const [editingDirty, setEditingDirty] = (0, import_react3.useState)(false);
  const [pendingRemove, setPendingRemove] = (0, import_react3.useState)(null);
  const [selectedIds, setSelectedIds] = (0, import_react3.useState)(() => /* @__PURE__ */ new Set());
  const [error, setError] = (0, import_react3.useState)("");
  const [formError, setFormError] = (0, import_react3.useState)("");
  const [busy, setBusy] = (0, import_react3.useState)(false);
  const [copiedId, setCopiedId] = (0, import_react3.useState)("");
  const [revision, setRevision] = (0, import_react3.useState)(null);
  const revisionRef = (0, import_react3.useRef)(revision);
  const editingRef = (0, import_react3.useRef)(editing);
  editingRef.current = editing;
  const refreshState = (0, import_react3.useCallback)((force = false) => {
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
      const live = new Set(nextProducts.map((row) => row.id));
      setSelectedIds((prev) => {
        const kept = [...prev].filter((id) => live.has(id));
        if (kept.length === prev.size) return prev;
        return new Set(kept);
      });
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
  (0, import_react3.useEffect)(() => {
    if (!open) return void 0;
    void refreshState(true);
  }, [open, refreshState]);
  (0, import_react3.useEffect)(() => {
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
  const selectedCount = selectedIds.size;
  const selecting = selectedCount > 0;
  const toggleSelect = (product) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(product.id)) next.delete(product.id);
      else next.add(product.id);
      return next;
    });
  };
  const clearSelection = () => {
    setSelectedIds(/* @__PURE__ */ new Set());
  };
  if (!stage || !everOpened) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    "div",
    {
      role: "region",
      "aria-label": t("stage.title"),
      "aria-hidden": open ? void 0 : "true",
      className: "omnimux-products-stage",
      "data-visible": open ? "true" : "false",
      style: {
        display: open ? void 0 : "none",
        "--stage-top": `${box.top}px`,
        "--stage-left": `${box.left}px`,
        "--stage-width": `${box.width}px`,
        "--stage-height": `${box.height}px`
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          PageHeader,
          {
            title: t("stage.title"),
            subtitle: t("stage.subtitle"),
            actions: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              Button,
              {
                variant: "outline",
                size: "sm",
                leadingIcon: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(RefreshIcon, {}),
                disabled: busy,
                onClick: () => {
                  setBusy(true);
                  void refreshState(true).finally(() => {
                    setBusy(false);
                  });
                },
                children: busy ? t("stage.refreshing") : t("stage.refresh")
              }
            ),
            onClose: () => {
              stage.set(false);
            },
            closeTitle: t("stage.close")
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          FilterBar,
          {
            className: "omnimux-products-stage-toolbar",
            compact: true,
            search: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              SearchField,
              {
                value: query,
                placeholder: t("search.placeholder"),
                "aria-label": t("search.placeholder"),
                debounceMs: 0,
                stretch: true,
                onValueChange: setQuery
              }
            ),
            filters: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "omnimux-products-label", children: t("sort.updated") }),
            actions: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              Button,
              {
                variant: "primary",
                leadingIcon: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(PlusIcon, {}),
                onClick: () => {
                  setCreating(true);
                  setFormError("");
                  setEditing(null);
                  setEditingDirty(false);
                },
                children: t("add.button")
              }
            )
          }
        ),
        selecting ? /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "omnimux-products-selection", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { children: t("select.count").replace("{n}", String(selectedCount)) }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "omnimux-products-selection-actions", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Button, { variant: "ghost", size: "sm", onClick: clearSelection, children: t("select.clear") }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              Button,
              {
                variant: "danger",
                size: "sm",
                disabled: busy,
                onClick: () => {
                  const names = products.filter((row) => selectedIds.has(row.id)).map((row) => row.name);
                  setPendingRemove({ ids: [...selectedIds], names });
                },
                children: t("select.delete").replace("{n}", String(selectedCount))
              }
            )
          ] })
        ] }) : null,
        error !== "" ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "omnimux-products-error", children: error }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "omnimux-products-body", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          ProductGrid,
          {
            t,
            products: visible,
            emptyLabel: query.trim() ? t("empty.noMatch") : t("empty.all"),
            emptyActionLabel: t("add.button"),
            showEmptyAction: !query.trim(),
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
              setPendingRemove({ ids: [product.id], names: [product.name] });
            },
            copiedId,
            selectedIds,
            onToggleSelect: toggleSelect
          }
        ) }),
        creating ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          ProductFormDialog,
          {
            t,
            data: { mode: "create", busy, error: formError },
            onAction: {
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
          }
        ) : null,
        editing ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          ProductFormDialog,
          {
            t,
            data: { mode: "edit", busy, error: formError, dirty: editingDirty, initial: editing },
            onAction: {
              onCancel: () => {
                setEditing(null);
                setEditingDirty(false);
                setFormError("");
              },
              onPick: handlePick,
              onReload: () => {
                if (!editing._fresh) return;
                setEditing(editing._fresh);
                setEditingDirty(false);
              },
              onSubmit: (payload) => {
                run(() => updateProduct(editing.id, payload), (result) => {
                  const product = result.body?.product;
                  setEditing(product ?? null);
                  setEditingDirty(false);
                });
              }
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
                  last = await deleteProduct(id);
                  if (!last.ok) return last;
                }
                return last;
              }, () => {
                setPendingRemove(null);
                if (ids.includes(editing?.id)) {
                  setEditing(null);
                  setEditingDirty(false);
                }
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
var name = "omnimux-products";
var inject = ["slots", "locale"];
function apply(ctx) {
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), "omnimux-products: dictionaries");
  const t = ctx.locale.bind(NS);
  const stage = createStageStore2(() => window.__omnimuxStage);
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
