window.__ModuleLoader__.load({
  id: "omnimux-market",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
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

// ../../node_modules/.pnpm/dsh-ui-kit@file+..+..+personal+dsh-ui-kit_@deepseek-ai+dsh-client-ui-primitives@0.1.0-r_e00e670598d3e1b30755d8571e7350d4/node_modules/dsh-ui-kit/lib/index.js
var lib_exports = {};
__export(lib_exports, {
  Button: () => Button,
  ConfirmModal: () => ConfirmModal,
  DropdownSelect: () => DropdownSelect,
  EmptyState: () => EmptyState,
  FilterBar: () => FilterBar,
  IconButton: () => IconButton,
  InputField: () => InputField,
  ModalDialog: () => ModalDialog,
  SearchField: () => SearchField,
  StageContainer: () => StageContainer,
  StageHeader: () => StageHeader,
  Toolbar: () => Toolbar,
  createSidebarEntry: () => createSidebarEntry,
  createStageStore: () => createStageStore
});
function cssClass(value, name) {
  if (!value) throw new Error(`dsh-ui-kit: missing CSS module class "${name}"`);
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
function injectCss(id, css) {
  if (typeof document === "undefined") return;
  if (injected.has(id)) return;
  injected.add(id);
  const style = document.createElement("style");
  style.setAttribute("data-dsh-ui-kit", id);
  style.textContent = css;
  document.head.appendChild(style);
}
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
    const api2 = (typeof window !== "undefined" ? window : void 0)?.__omnimuxSidebar;
    if (!api2 || typeof api2.register !== "function") return;
    unregister = api2.register(row);
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
var import_react, import_dsh_client_ui_primitives, import_jsx_runtime, injected, Button_module_css_default, VARIANT_CLASS, SIZE_CLASS$1, Button, IconButton, SearchField_module_css_default, SearchField, InputField_module_css_default, InputField, DropdownSelect_module_css_default, Toolbar_module_css_default, Dialog_module_css_default, SIZE_CLASS, EmptyState_module_css_default, EMPTY_CLASS, COMPACT_CLASS, ICON_WRAP_CLASS, TITLE_CLASS$1, DESCRIPTION_CLASS, ACTIONS_CLASS, EmptyState, CONTAINER_CLASS, StageContainer, StageHeader_module_css_default, HEADER_CLASS, HEADING_CLASS, TITLE_ROW_CLASS, TITLE_CLASS, SUBTITLE_CLASS, CONTROLS_CLASS, StageHeader, PRODUCT_STAGE_EVENT, ACTIVE_STAGE_STORAGE_KEY, SIDEBAR_ENTRY_COMMON_STYLES;
var init_lib = __esm({
  "../../node_modules/.pnpm/dsh-ui-kit@file+..+..+personal+dsh-ui-kit_@deepseek-ai+dsh-client-ui-primitives@0.1.0-r_e00e670598d3e1b30755d8571e7350d4/node_modules/dsh-ui-kit/lib/index.js"() {
    import_react = require("react");
    import_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
    import_jsx_runtime = require("react/jsx-runtime");
    injected = /* @__PURE__ */ new Set();
    injectCss("Button.module.css", '.dshUk-Button-button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  gap: 6px;\n  box-sizing: border-box;\n  margin: 0;\n  border: 1px solid transparent;\n  border-radius: 8px;\n  cursor: pointer;\n  font: inherit;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 18px;\n  letter-spacing: 0;\n  white-space: nowrap;\n  color: var(--dsw-alias-label-primary);\n  background: transparent;\n  padding: 0 12px;\n  height: 32px;\n  vertical-align: middle;\n  user-select: none;\n  transition:\n    background-color 120ms cubic-bezier(0.16, 1, 0.3, 1),\n    border-color 120ms cubic-bezier(0.16, 1, 0.3, 1),\n    color 120ms cubic-bezier(0.16, 1, 0.3, 1),\n    transform 120ms cubic-bezier(0.16, 1, 0.3, 1),\n    box-shadow 120ms cubic-bezier(0.16, 1, 0.3, 1),\n    opacity 120ms cubic-bezier(0.16, 1, 0.3, 1);\n}\n\n.dshUk-Button-button:focus {\n  outline: none;\n}\n\n.dshUk-Button-button:focus-visible {\n  outline: 2px solid var(--dsw-alias-brand-primary);\n  outline-offset: 2px;\n}\n\n.dshUk-Button-button:disabled,\n.dshUk-Button-button[aria-disabled="true"] {\n  cursor: not-allowed;\n  opacity: 0.4;\n}\n\n.dshUk-Button-button:active:not(:disabled):not([aria-disabled="true"]) {\n  transform: scale(0.96);\n}\n\n.dshUk-Button-sm {\n  height: 28px;\n  padding: 0 10px;\n  border-radius: 6px;\n  font-size: 12px;\n  line-height: 16px;\n}\n\n.dshUk-Button-xs {\n  height: 24px;\n  padding: 0 8px;\n  border-radius: 6px;\n  font-size: 12px;\n  line-height: 16px;\n  gap: 4px;\n}\n\n.dshUk-Button-iconOnly {\n  padding: 0;\n  width: 32px;\n}\n\n.dshUk-Button-iconOnly.dshUk-Button-sm {\n  width: 28px;\n}\n\n.dshUk-Button-iconOnly.dshUk-Button-xs {\n  width: 24px;\n}\n\n.dshUk-Button-primary {\n  background: var(--dsw-alias-button-primary-fill);\n  color: var(--dsw-alias-label-primary-foreground);\n}\n\n.dshUk-Button-primary:hover:not(:disabled):not([aria-disabled="true"]) {\n  background: var(--dsw-alias-button-primary-hover);\n}\n\n.dshUk-Button-secondary {\n  background: var(--dsw-alias-bg-layer-1);\n  border-color: var(--dsw-alias-border-l2);\n  color: var(--dsw-alias-label-primary);\n}\n\n.dshUk-Button-secondary:hover:not(:disabled):not([aria-disabled="true"]) {\n  background: var(--dsw-alias-interactive-bg-hover);\n  border-color: var(--dsw-alias-border-l3);\n}\n\n.dshUk-Button-ghost {\n  background: transparent;\n  color: var(--dsw-alias-label-primary);\n}\n\n.dshUk-Button-ghost:hover:not(:disabled):not([aria-disabled="true"]) {\n  background: var(--dsw-alias-interactive-bg-hover);\n}\n\n.dshUk-Button-ghost:active:not(:disabled):not([aria-disabled="true"]) {\n  background: var(--dsw-alias-interactive-bg-active);\n}\n\n.dshUk-Button-outline {\n  background: transparent;\n  border-color: var(--dsw-alias-border-l2);\n  color: var(--dsw-alias-label-primary);\n}\n\n.dshUk-Button-outline:hover:not(:disabled):not([aria-disabled="true"]) {\n  background: var(--dsw-alias-interactive-bg-hover);\n  border-color: var(--dsw-alias-border-l3);\n}\n\n.dshUk-Button-danger {\n  background: var(--dsw-alias-state-error-primary);\n  color: var(--dsw-alias-label-primary-foreground);\n}\n\n.dshUk-Button-danger:hover:not(:disabled):not([aria-disabled="true"]) {\n  background: var(--dsw-alias-state-error-secondary);\n}\n\n.dshUk-Button-ghost[aria-pressed="true"],\n.dshUk-Button-secondary[aria-pressed="true"] {\n  background: var(--dsw-alias-button-ghost-active-fill);\n  box-shadow: inset 0 0 0 1px var(--dsw-alias-button-ghost-active-border);\n}\n\n/* Outline already owns a real 1px border. Keep pressed fill/border as\n * declarations — do not share the ghost/secondary inset box-shadow or the\n * pressed state would double-stroke. */\n.dshUk-Button-outline[aria-pressed="true"] {\n  background: var(--dsw-alias-button-ghost-active-fill);\n  border-color: var(--dsw-alias-button-ghost-active-border);\n  color: var(--dsw-alias-label-primary);\n}\n\n/* Hover specificity defense: `.dshUk-Button-outline:hover` (and ghost/secondary hover)\n * would otherwise wash the pressed fill/border back to the idle hover tokens. */\n.dshUk-Button-ghost[aria-pressed="true"]:hover:not(:disabled):not([aria-disabled="true"]),\n.dshUk-Button-secondary[aria-pressed="true"]:hover:not(:disabled):not([aria-disabled="true"]),\n.dshUk-Button-outline[aria-pressed="true"]:hover:not(:disabled):not([aria-disabled="true"]) {\n  background: var(--dsw-alias-button-ghost-active-hover);\n}\n\n.dshUk-Button-outline[aria-pressed="true"]:hover:not(:disabled):not([aria-disabled="true"]) {\n  border-color: var(--dsw-alias-button-ghost-active-border);\n}\n\n.dshUk-Button-slot {\n  display: inline-flex;\n  width: 16px;\n  height: 16px;\n  align-items: center;\n  justify-content: center;\n  flex: none;\n}\n\n.dshUk-Button-xs .dshUk-Button-slot {\n  width: 14px;\n  height: 14px;\n}\n\n.dshUk-Button-spinner {\n  animation: dshUkSpin 0.7s linear infinite;\n}\n\n.dshUk-Button-label {\n  min-width: 0;\n}\n\n.dshUk-Button-loadingLabel {\n  opacity: 0.84;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .dshUk-Button-button {\n    transition: none;\n  }\n\n  .dshUk-Button-button:active:not(:disabled):not([aria-disabled="true"]) {\n    transform: none;\n  }\n\n  .dshUk-Button-spinner {\n    animation: none;\n  }\n}\n\n@keyframes dshUkSpin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n');
    Button_module_css_default = {
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
    VARIANT_CLASS = {
      primary: cssClass(Button_module_css_default.primary, "primary"),
      secondary: cssClass(Button_module_css_default.secondary, "secondary"),
      ghost: cssClass(Button_module_css_default.ghost, "ghost"),
      outline: cssClass(Button_module_css_default.outline, "outline"),
      danger: cssClass(Button_module_css_default.danger, "danger")
    };
    SIZE_CLASS$1 = {
      default: void 0,
      sm: cssClass(Button_module_css_default.sm, "sm"),
      xs: cssClass(Button_module_css_default.xs, "xs")
    };
    Button = (0, import_react.forwardRef)(function Button2({ variant = "secondary", size = "default", loading = false, leadingIcon, trailingIcon, type = "button", className, disabled, children, ...rest }, ref) {
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
    IconButton = (0, import_react.forwardRef)(function IconButton2({ variant = "ghost", size = "default", loading = false, type = "button", className, disabled, children, title, tooltipSide = "bottom", "aria-label": ariaLabel, ...rest }, ref) {
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
    SearchField_module_css_default = {
      "root": "dshUk-SearchField-root",
      "stretch": "dshUk-SearchField-stretch",
      "disabled": "dshUk-SearchField-disabled",
      "icon": "dshUk-SearchField-icon",
      "input": "dshUk-SearchField-input",
      "shortcut": "dshUk-SearchField-shortcut",
      "clear": "dshUk-SearchField-clear"
    };
    SearchField = (0, import_react.forwardRef)(function SearchField2({ value, defaultValue = "", onValueChange, onClear, debounceMs = 200, shortcut, stretch = false, clearLabel = "Clear", className, disabled, id, placeholder = "Search", ...rest }, ref) {
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
    InputField_module_css_default = {
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
    InputField = (0, import_react.forwardRef)(function InputField2({ label, hint, error, prefix, suffix, className, disabled, id, required, ...rest }, ref) {
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
    DropdownSelect_module_css_default = {
      "anchor": "dshUk-DropdownSelect-anchor",
      "trigger": "dshUk-DropdownSelect-trigger",
      "open": "dshUk-DropdownSelect-open",
      "label": "dshUk-DropdownSelect-label",
      "placeholder": "dshUk-DropdownSelect-placeholder",
      "chevron": "dshUk-DropdownSelect-chevron",
      "chevronOpen": "dshUk-DropdownSelect-chevronOpen"
    };
    injectCss("Toolbar.module.css", ".dshUk-Toolbar-bar {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  gap: 8px;\n  box-sizing: border-box;\n  height: 48px;\n  min-height: 44px;\n  max-height: 48px;\n  padding: 0 12px;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.dshUk-Toolbar-compact {\n  height: 44px;\n  min-height: 44px;\n}\n\n.dshUk-Toolbar-left,\n.dshUk-Toolbar-right {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n}\n\n.dshUk-Toolbar-left {\n  flex: 1 1 auto;\n  overflow: hidden;\n}\n\n.dshUk-Toolbar-right {\n  flex: 0 0 auto;\n  margin-left: auto;\n}\n\n.dshUk-Toolbar-right > * {\n  flex-shrink: 0;\n}\n\n.dshUk-Toolbar-filters {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  gap: 8px;\n  flex: 0 0 auto;\n}\n\n.dshUk-Toolbar-filters > * {\n  flex-shrink: 0;\n}\n");
    Toolbar_module_css_default = {
      "bar": "dshUk-Toolbar-bar",
      "compact": "dshUk-Toolbar-compact",
      "left": "dshUk-Toolbar-left",
      "right": "dshUk-Toolbar-right",
      "filters": "dshUk-Toolbar-filters"
    };
    injectCss("Dialog.module.css", ".dshUk-Dialog-dialog {\n  width: min(480px, 100%);\n  max-height: min(80vh, 720px);\n  border-radius: 16px;\n}\n\n.dshUk-Dialog-sm {\n  width: min(380px, 100%);\n}\n\n.dshUk-Dialog-lg {\n  width: min(640px, 100%);\n}\n\n.dshUk-Dialog-body {\n  overflow: auto;\n  max-height: min(56vh, 480px);\n}\n\n.dshUk-Dialog-footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 8px;\n  width: 100%;\n}\n\n.dshUk-Dialog-message {\n  margin: 0;\n  font-size: 14px;\n  line-height: 22px;\n  color: var(--dsw-alias-label-primary);\n}\n");
    Dialog_module_css_default = {
      "dialog": "dshUk-Dialog-dialog",
      "sm": "dshUk-Dialog-sm",
      "lg": "dshUk-Dialog-lg",
      "body": "dshUk-Dialog-body",
      "footer": "dshUk-Dialog-footer",
      "message": "dshUk-Dialog-message"
    };
    SIZE_CLASS = {
      sm: cssClass(Dialog_module_css_default.sm, "sm"),
      md: void 0,
      lg: cssClass(Dialog_module_css_default.lg, "lg")
    };
    injectCss("EmptyState.module.css", ".dshUk-EmptyState-emptyState {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  padding: 48px 24px;\n  min-height: 240px;\n  box-sizing: border-box;\n  color: var(--dsw-alias-label-secondary, rgba(255, 255, 255, 0.72));\n}\n\n.dshUk-EmptyState-emptyState.dshUk-EmptyState-compact {\n  padding: 24px 16px;\n  min-height: 140px;\n}\n\n.dshUk-EmptyState-iconWrap {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 12px;\n  color: var(--dsw-alias-label-tertiary, rgba(255, 255, 255, 0.4));\n}\n\n.dshUk-EmptyState-title {\n  margin: 0 0 6px;\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 20px;\n  color: var(--dsw-alias-label-primary, #ffffff);\n}\n\n.dshUk-EmptyState-description {\n  margin: 0;\n  font-size: 13px;\n  line-height: 18px;\n  color: var(--dsw-alias-label-secondary, rgba(255, 255, 255, 0.72));\n  max-width: 360px;\n}\n\n.dshUk-EmptyState-actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: 16px;\n}\n");
    EmptyState_module_css_default = {
      "emptyState": "dshUk-EmptyState-emptyState",
      "compact": "dshUk-EmptyState-compact",
      "iconWrap": "dshUk-EmptyState-iconWrap",
      "title": "dshUk-EmptyState-title",
      "description": "dshUk-EmptyState-description",
      "actions": "dshUk-EmptyState-actions"
    };
    EMPTY_CLASS = cssClass(EmptyState_module_css_default.emptyState, "emptyState");
    COMPACT_CLASS = cssClass(EmptyState_module_css_default.compact, "compact");
    ICON_WRAP_CLASS = cssClass(EmptyState_module_css_default.iconWrap, "iconWrap");
    TITLE_CLASS$1 = cssClass(EmptyState_module_css_default.title, "title");
    DESCRIPTION_CLASS = cssClass(EmptyState_module_css_default.description, "description");
    ACTIONS_CLASS = cssClass(EmptyState_module_css_default.actions, "actions");
    EmptyState = (0, import_react.forwardRef)(function EmptyState2({ icon, title, description, action, secondaryAction, compact = false, className, ...rest }, ref) {
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
    injectCss("StageContainer.module.css", '.dshUk-StageContainer-stageContainer {\n  position: absolute;\n  top: var(--stage-top, 0px);\n  left: var(--stage-left, 56px);\n  width: var(--stage-width, calc(100vw - 56px));\n  height: var(--stage-height, 100vh);\n  background: var(--dsw-alias-bg-base, #111113);\n  color: var(--dsw-alias-label-primary, #ffffff);\n  z-index: 200;\n  display: flex;\n  flex-direction: column;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n\n.dshUk-StageContainer-stageContainer[data-visible="false"] {\n  display: none !important;\n  pointer-events: none !important;\n}\n');
    CONTAINER_CLASS = cssClass({ "stageContainer": "dshUk-StageContainer-stageContainer" }.stageContainer, "stageContainer");
    StageContainer = (0, import_react.forwardRef)(function StageContainer2({ stageStore, title, className, style, children, ...rest }, ref) {
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
    injectCss("StageHeader.module.css", ".dshUk-StageHeader-stageHeader {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 20px;\n  min-height: 56px;\n  box-sizing: border-box;\n  flex: none;\n  gap: 16px;\n  border-bottom: 1px solid var(--dsw-alias-border-l1, rgba(255, 255, 255, 0.06));\n}\n\n.dshUk-StageHeader-heading {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  min-width: 0;\n  flex: 1 1 auto;\n}\n\n.dshUk-StageHeader-titleRow {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.dshUk-StageHeader-title {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 24px;\n  color: var(--dsw-alias-label-primary, #ffffff);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.dshUk-StageHeader-subtitle {\n  margin: 0;\n  font-size: 13px;\n  line-height: 18px;\n  color: var(--dsw-alias-label-secondary, rgba(255, 255, 255, 0.72));\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.dshUk-StageHeader-controls {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: none;\n}\n");
    StageHeader_module_css_default = {
      "stageHeader": "dshUk-StageHeader-stageHeader",
      "heading": "dshUk-StageHeader-heading",
      "titleRow": "dshUk-StageHeader-titleRow",
      "title": "dshUk-StageHeader-title",
      "subtitle": "dshUk-StageHeader-subtitle",
      "controls": "dshUk-StageHeader-controls"
    };
    HEADER_CLASS = cssClass(StageHeader_module_css_default.stageHeader, "stageHeader");
    HEADING_CLASS = cssClass(StageHeader_module_css_default.heading, "heading");
    TITLE_ROW_CLASS = cssClass(StageHeader_module_css_default.titleRow, "titleRow");
    TITLE_CLASS = cssClass(StageHeader_module_css_default.title, "title");
    SUBTITLE_CLASS = cssClass(StageHeader_module_css_default.subtitle, "subtitle");
    CONTROLS_CLASS = cssClass(StageHeader_module_css_default.controls, "controls");
    StageHeader = (0, import_react.forwardRef)(function StageHeader2({ title, subtitle, badge, onRefresh, refreshing = false, refreshTitle = "Refresh", onClose, closeTitle = "Close", actions, className, ...rest }, ref) {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
        ...rest,
        ref,
        className: cx(HEADER_CLASS, className),
        children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: HEADING_CLASS,
          children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: TITLE_ROW_CLASS,
            children: [typeof title === "string" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
              className: TITLE_CLASS,
              children: title
            }) : title, badge]
          }), subtitle && (typeof subtitle === "string" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            className: SUBTITLE_CLASS,
            children: subtitle
          }) : subtitle)]
        }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
        })]
      });
    });
    PRODUCT_STAGE_EVENT = "dsh-product-stage";
    ACTIVE_STAGE_STORAGE_KEY = "omnimux_active_product_stage";
    SIDEBAR_ENTRY_COMMON_STYLES = `
.omnimux-sidebar-nav-entry {
  box-sizing: border-box; display: flex; align-items: center; gap: 6px; position: relative;
  width: calc(100% - 8px); height: 32px; margin: 0 4px; padding: 0 8px;
  border: none; border-radius: 8px; background: transparent;
  color: var(--dsw-alias-label-primary, inherit);
  font: var(--dsw-font-s-14, inherit); font-size: 14px; line-height: 20px;
  cursor: pointer; text-align: left;
}
.omnimux-sidebar-nav-entry:hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,.12));
}
.omnimux-sidebar-nav-entry[data-active="true"] {
  background: var(--dsw-alias-interactive-bg-active, rgba(128,128,128,.18));
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
  }
});

// client-factory.js
var React = require("react");
var h = React.createElement;
var { useEffect: useEffect2, useState: useState2 } = React;
var { Button: Button3, FilterBar: FilterBar2, IconButton: IconButton3, InputField: InputField3, SearchField: SearchField3 } = (init_lib(), __toCommonJS(lib_exports));
var { IconCloseOutline16: IconCloseOutline162 } = require("@deepseek-ai/dsh-client-ui-primitives");
var CSS = `
.sh-root{font-family:inherit;color:var(--dsw-alias-label-primary,inherit);max-width:920px}
.sh-hint{color:var(--dsw-alias-label-caption,#6b7280);font-size:12px;line-height:18px;margin:0 0 10px}
.sh-cards{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
@media (max-width:640px){.sh-cards{grid-template-columns:1fr}}
.sh-cards .sh-card,.sh-card{display:flex;gap:12px;align-items:flex-start;background:var(--dsw-alias-bg-layer-3,#fff);border:1px solid var(--dsw-alias-border-l2,#e5e7eb);border-radius:12px;padding:12px;cursor:pointer;text-align:left;width:100%;height:auto;min-height:0;font:inherit;color:var(--dsw-alias-label-primary,inherit);white-space:normal;justify-content:flex-start;transition:border-color .16s,background .16s}
.sh-card:hover{background:var(--dsw-alias-interactive-bg-hover,rgba(38,49,72,.06));border-color:var(--dsw-alias-label-dimmed,#c7d2fe)}
.sh-card.on{border-color:var(--dsw-alias-state-success-primary,#86efac)}
.sh-card .dshUk-Button-label{display:flex;gap:12px;align-items:flex-start;min-width:0;flex:1;width:100%;white-space:normal;text-align:left}
.sh-icon{width:40px;height:40px;border-radius:10px;object-fit:cover;border:1px solid var(--dsw-alias-border-l2,#e5e7eb);flex-shrink:0;background:linear-gradient(135deg,var(--dsw-alias-state-business-tertiary,#c7d2fe),var(--dsw-alias-state-warn-tertiary,#fbcfe8));display:grid;place-items:center;font-weight:700;font-size:12px;color:var(--dsw-alias-label-secondary,#374151)}
.sh-meta{min-width:0;flex:1;display:flex;flex-direction:column;gap:2px}
.sh-top{display:flex;align-items:center;gap:8px;min-width:0}
.sh-title{flex:1;min-width:0;font-weight:600;font-size:14px;line-height:20px;color:var(--dsw-alias-label-primary,inherit);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.sh-badge{flex:none;font-size:11px;line-height:16px;padding:0 6px;border-radius:999px;background:var(--dsw-alias-state-success-tertiary,#ecfdf5);color:var(--dsw-alias-state-success-primary,#047857)}
.sh-desc{color:var(--dsw-alias-label-tertiary,#6b7280);font-size:12px;line-height:18px;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden}
.sh-marks{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:2px 0 0;min-width:0}
.sh-rate{display:inline-flex;align-items:center;gap:4px;font-size:11px;line-height:16px;color:var(--dsw-alias-state-warn-label,var(--dsw-alias-state-warn,#b45309));white-space:nowrap}
.sh-stars{color:var(--dsw-alias-state-warn-label,var(--dsw-alias-state-warn,#f59e0b));letter-spacing:.5px;font-size:11px;display:inline-flex;gap:1px;vertical-align:middle}
.sh-star-ico{display:inline-block;vertical-align:middle;color:var(--dsw-alias-state-warn-label,var(--dsw-alias-state-warn,#f59e0b));opacity:.35}
.sh-star-ico.on{opacity:1}
.sh-safe{display:inline-flex;align-items:center;gap:6px;margin-left:20px;font-size:12px;line-height:16px;color:var(--dsw-alias-label-primary,inherit);white-space:nowrap}
.sh-safe .sh-sec-ico{width:16px;height:16px}
.sh-bluev{display:inline-flex;align-items:center;gap:4px;font-size:11px;line-height:16px;color:var(--dsw-alias-state-business-primary,#2563eb);white-space:nowrap;min-width:0}
.sh-bluev i{width:14px;height:14px;border-radius:50%;background:var(--dsw-alias-state-business-primary,#2563eb);color:var(--dsw-alias-label-primary-foreground,#fff);font-style:normal;font-size:9px;font-weight:800;display:inline-grid;place-items:center;line-height:1;flex:none}
.sh-bluev span{min-width:0;overflow:hidden;text-overflow:ellipsis}
.sh-canon{font-size:12px;color:var(--dsw-alias-label-caption,#9ca3af);margin:0 0 8px}
.sh-overview{margin:0;font-size:14px;line-height:1.75;color:var(--dsw-alias-label-secondary,#374151);white-space:pre-wrap}
.sh-head .sh-marks{margin:0 0 8px}
.sh-head .sh-rate,.sh-head .sh-bluev,.sh-head .sh-safe{font-size:12px}
.sh-head .sh-stars{font-size:12px}
.sh-head .sh-bluev i{width:16px;height:16px;font-size:10px}
.sh-footline{color:var(--dsw-alias-label-caption,#9ca3af);font-size:11px;line-height:16px;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.sh-tags{display:flex;flex-wrap:wrap;gap:4px}
.sh-tag{font-size:11px;padding:2px 6px;border-radius:6px;background:var(--dsw-alias-markdown-tag,#f3f4f6);color:var(--dsw-alias-label-secondary,#4b5563)}
.sh-tag.blue{background:var(--dsw-alias-state-business-tertiary,#eff6ff);color:var(--dsw-alias-state-business-primary,#1d4ed8)}
.sh-tag.green{background:var(--dsw-alias-state-success-tertiary,#ecfdf5);color:var(--dsw-alias-state-success-primary,#047857)}
.sh-tag.orange{background:var(--dsw-alias-state-warn-tertiary,#fff7ed);color:var(--dsw-alias-state-warn-label,#c2410c)}
.sh-slug{color:var(--dsw-alias-label-caption,#9ca3af);font-size:11px;margin-top:auto}
.sh-overlay{position:fixed;inset:0;z-index:2147483000;background:var(--dsw-alias-bg-mask-3,rgba(15,23,42,.48));display:flex;align-items:center;justify-content:center;padding:24px 16px;box-sizing:border-box}
.sh-drawer{position:relative;width:min(720px,100%);max-height:min(86vh,840px);margin:0 auto;background:var(--dsw-alias-bg-layer-2,#fff);color:var(--dsw-alias-label-primary,inherit);border:1px solid var(--dsw-alias-border-l2,#9aa5b5);border-radius:12px;overflow:hidden;display:flex;flex-direction:column;box-shadow:var(--dsw-alias-shadow-overlay, var(--dsw-shadow-overlay, 0 18px 50px rgba(15,23,42,.28)))}
.sh-drawer.sh-skill{width:min(840px,100%);height:min(86vh,860px);max-height:min(86vh,860px)}
.sh-close{position:absolute;top:10px;right:10px;z-index:2}
.sh-head{display:flex;gap:14px;align-items:flex-start;padding:18px 48px 16px 18px;border-bottom:1px solid var(--dsw-alias-border-l2,#e5e7eb)}
.sh-dicon{width:64px;height:64px;border-radius:12px;display:grid;place-items:center;font-weight:800;background:linear-gradient(135deg,var(--dsw-alias-state-business-tertiary,#c7d2fe),var(--dsw-alias-state-warn-tertiary,#fbcfe8));border:1px solid var(--dsw-alias-border-l2,#e5e7eb);flex-shrink:0;object-fit:cover}
.sh-head-copy{min-width:0;flex:1}
.sh-head h2{margin:0 0 6px;font-size:18px;line-height:1.35;color:var(--dsw-alias-label-primary,inherit)}
.sh-body{overflow:auto;padding:12px 18px 20px}
.sh-drawer.sh-skill .sh-body{flex:1;min-height:0;overflow:hidden;display:flex;flex-direction:column;padding:16px 22px 0}
.sh-pane{flex:1;min-height:0;overflow:auto;padding:16px 2px 28px}
.sh-stats{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 12px;flex:none}
.sh-stat{font-size:12px;padding:6px 10px;border-radius:8px;background:var(--dsw-alias-bg-module-platform,#f7f8fa);border:1px solid var(--dsw-alias-border-l2,#e5e7eb);color:var(--dsw-alias-label-secondary,inherit)}
.sh-tabs{display:flex;gap:16px;margin:0 -22px;padding:0 22px;border-bottom:1px solid var(--dsw-alias-border-l2,#e5e7eb);overflow-x:auto;scrollbar-width:none;flex:none}
.sh-tabs::-webkit-scrollbar{display:none}
.sh-tabs .sh-tab,.sh-tab{appearance:none;flex:none;background:0 0;border:0;border-radius:0;border-bottom:2px solid transparent;margin-bottom:-1px;padding:10px 0 12px;height:auto;min-height:0;font:inherit;font-size:13px;line-height:20px;color:var(--dsw-alias-label-tertiary,#6b7280);cursor:pointer;white-space:nowrap}
.sh-tabs .sh-tab:hover,.sh-tab:hover{background:0 0}
.sh-tabs .sh-tab.on,.sh-tab.on{color:var(--dsw-alias-label-primary,inherit);border-bottom-color:var(--dsw-alias-label-primary,#111827);font-weight:650;background:0 0;box-shadow:none}
.sh-tab .dshUk-Button-label{font:inherit;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit}
.sh-ver-card{display:flex;gap:12px;align-items:flex-start;justify-content:space-between;padding:16px 18px;margin:0 0 12px;border:1px solid var(--dsw-alias-border-l2,#e5e7eb);border-radius:12px;background:var(--dsw-alias-bg-layer-3,#fff)}
.sh-ver-main{min-width:0;flex:1}
.sh-ver-head{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:0 0 6px}
.sh-ver-head b{font-size:15px}
.sh-ver-log{margin:8px 0 0;font-size:13px;line-height:1.7;color:var(--dsw-alias-label-secondary,#4b5563)}
.sh-ver-card .sh-mini{flex:none;align-self:center;white-space:nowrap}
.sh-ver-card .sh-hint{margin:0}
.sh-eval-hero{display:grid;grid-template-columns:200px minmax(0,1fr);gap:24px;align-items:start;border:1px solid var(--dsw-alias-border-l2,#e5e7eb);border-radius:16px;padding:20px 22px;margin:0 0 22px;background:var(--dsw-alias-bg-layer-3,#fff)}
.sh-eval-score{font-size:32px;line-height:1.15;font-weight:750;margin:4px 0 10px;letter-spacing:-.03em}
.sh-eval-score span{font-size:16px;font-weight:500;color:var(--dsw-alias-label-tertiary,#6b7280)}
.sh-eval-tag{display:inline-block;font-size:12px;line-height:22px;padding:0 10px;border-radius:8px;background:var(--dsw-alias-state-business-tertiary,#eff6ff);color:var(--dsw-alias-state-business-primary,#1d4ed8);margin:0 0 12px}
.sh-eval-sum{font-size:13px;line-height:1.8;color:var(--dsw-alias-label-secondary,#4b5563);margin:0}
.sh-eval-h{font-size:15px;font-weight:650;margin:4px 0 14px}
.sh-eval-item{padding:16px 18px;margin:0 0 12px;border:1px solid var(--dsw-alias-border-l2,#eee);border-radius:12px;background:var(--dsw-alias-bg-layer-3,#fff)}
.sh-eval-h + .sh-eval-item{border-top:1px solid var(--dsw-alias-border-l2,#eee)}
.sh-eval-top{display:flex;align-items:center;gap:10px;margin:0 0 10px}
.sh-eval-ico{width:28px;height:28px;border-radius:8px;display:grid;place-items:center;flex:none;color:var(--bar-tint);background:color-mix(in srgb,var(--bar-tint) 13%,transparent)}
.sh-eval-name{flex:1;min-width:0;font-size:14px;font-weight:650}
.sh-eval-sc{font-size:14px;font-weight:650;flex:none}
.sh-eval-bar{height:8px;border-radius:99px;background:var(--dsw-alias-bg-module-platform,#f3f4f6);overflow:hidden;margin:0 0 12px}
.sh-eval-bar>span{display:block;height:100%;border-radius:99px;width:var(--bar-pct);background:var(--bar-tint)}
.sh-eval-why{margin:0;font-size:13px;line-height:1.8;color:var(--dsw-alias-label-tertiary,#6b7280)}
.sh-radar{display:block;margin:4px auto 0;color:var(--dsw-alias-border-l3,#cbd5e1)}
.sh-sec-ico{width:16px;height:16px;flex:none;display:block}
@media (max-width:560px){.sh-eval-hero{grid-template-columns:1fr;justify-items:center;text-align:center}}
.sh-foot{display:flex;gap:8px;justify-content:flex-end;align-items:center;padding:12px 18px;border-top:1px solid var(--dsw-alias-border-l2,#e5e7eb);background:var(--dsw-alias-bg-layer-1,#fafafa)}
.sh-mini{border:1px solid var(--dsw-alias-border-l2,#e5e7eb);background:var(--dsw-alias-bg-layer-3,#fff);border-radius:8px;padding:6px 10px;cursor:pointer;font:inherit;font-size:12px;color:var(--dsw-alias-label-primary,inherit);text-decoration:none}
.sh-mini.primary{background:var(--dsw-alias-button-primary-fill,#111827);color:var(--dsw-alias-label-primary-foreground,#fff);border-color:var(--dsw-alias-button-primary-fill,#111827)}
.sh-mini:disabled{opacity:.4;cursor:default}
.sh-toast{position:fixed;left:50%;bottom:28px;transform:translateX(-50%);background:var(--dsw-alias-toast-bg,#111827);color:var(--dsw-alias-label-primary-foreground,#fff);padding:10px 16px;border-radius:999px;font-size:13px;z-index:2147483646}
.sh-err{color:var(--dsw-alias-state-error-primary,#b91c1c);font-size:12px;margin:8px 0}
.sh-tool{margin:4px 0 8px}
.sh-fade{animation:sh-in .18s ease}
.sh-row{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:12px;align-items:center;padding:10px 0;border-top:1px solid var(--dsw-alias-border-l2,#eee)}
.sh-row-actions{display:flex;align-items:center;gap:8px}
.sh-row:first-child{border-top:0}
.sh-cfg-item{list-style:none}
.sh-cfg{border:1px solid var(--dsw-alias-border-l2,#e5e7eb);background:var(--dsw-alias-bg-layer-3,#fff);border-radius:12px;box-sizing:border-box}
.sh-cfg.open{background:var(--dsw-alias-bg-layer-2,#fafafa)}
.sh-cfg-h{box-sizing:border-box;width:100%;align-items:center;gap:12px;padding:14px 16px;display:flex}
.sh-cfg-h .sh-cfg-expand,.sh-cfg-expand{appearance:none;flex:1;min-width:0;height:auto;font:inherit;color:inherit;text-align:left;cursor:pointer;background:0 0;border:0;border-radius:0;align-items:center;justify-content:flex-start;gap:12px;padding:0;display:flex;white-space:normal}
.sh-cfg-h .sh-cfg-expand:hover,.sh-cfg-expand:hover{background:0 0}
.sh-cfg-expand .dshUk-Button-label{display:flex;align-items:center;gap:12px;min-width:0;flex:1;width:100%;white-space:normal;text-align:left}
.sh-cfg-toggle{appearance:none;flex:none;width:28px;height:28px;padding:0;border:0;background:0 0;color:inherit;cursor:pointer;display:grid;place-items:center}
.sh-cfg-t{flex-direction:column;flex:1;gap:4px;min-width:0;display:flex}
.sh-cfg-n{font-size:15px;font-weight:600;line-height:1.4;color:var(--dsw-alias-label-primary,inherit)}
.sh-cfg-d{color:var(--dsw-alias-label-tertiary,#6b7280);font-size:13px;line-height:1.5}
.sh-cfg-ch{color:var(--dsw-alias-label-tertiary,#6b7280);flex:none;width:14px;height:14px;transition:transform .16s;display:block;pointer-events:none}
.sh-cfg.open .sh-cfg-ch{transform:rotate(180deg)}
.sh-cfg-b{border-top:1px solid var(--dsw-alias-border-l2,#e5e7eb);margin:0 16px;padding:8px 0 12px;display:flex;flex-direction:column;gap:10px}
.sh-cfg-f{display:flex;flex-direction:column;gap:6px;padding:10px 0;border-top:1px solid var(--dsw-alias-border-l2,#eee)}
.sh-cfg-f:first-child{border-top:0}
.sh-cfg-f label{font-size:13px;font-weight:500;color:var(--dsw-alias-label-primary,inherit)}
.sh-cfg-f input[type=text],.sh-cfg-f input[type=number]{border:1px solid var(--dsw-alias-border-l2,#e5e7eb);background:var(--dsw-specific-input-major,var(--dsw-alias-bg-layer-3,#fff));color:var(--dsw-alias-label-primary,inherit);height:34px;font:inherit;border-radius:8px;padding:0 12px;font-size:13px}
.sh-cfg-hint{margin:0;color:var(--dsw-alias-label-caption,#6b7280);font-size:12px}
.sh-cfg-ft{border-top:1px solid var(--dsw-alias-border-l2,#e5e7eb);justify-content:flex-end;gap:8px;padding:12px 0 4px;display:flex}
.sh-cfg-err{color:var(--dsw-alias-state-error-primary,#b91c1c);flex:1;margin:0;font-size:12px}
@keyframes sh-in{from{opacity:0}to{opacity:1}}
.sh-mkt{display:flex;flex-direction:column;gap:14px;width:100%;max-width:760px;padding-bottom:24px;color:var(--dsw-alias-label-primary,#17191c);font-family:var(--dsw-font-family,inherit)}
.sh-mkt *{box-sizing:border-box}
.sh-mkt-filter{flex:none;height:30px;padding:0 10px;border:0;border-radius:8px;background:transparent;color:var(--dsw-alias-label-tertiary,#7b8088);font:inherit;font-size:12px;cursor:pointer;white-space:nowrap}
.sh-mkt-search{display:block;width:100%}
.sh-mkt-search [role="toolbar"]{width:100%;padding:0;height:auto;min-height:32px;max-height:none}
.sh-mkt-search .dshUk-SearchField-root,.sh-mkt-search .dshUk-SearchField-stretch{max-width:none}
.sh-mkt-filters{display:flex;align-items:center;gap:5px;overflow-x:auto;padding-bottom:2px;scrollbar-width:none}
.sh-mkt-filters::-webkit-scrollbar{display:none}
.sh-mkt-filter:hover{background:var(--dsw-alias-interactive-bg-hover,#f3f4f6)}
.sh-mkt-filter.on{background:var(--dsw-specific-sidebar-nav-item-active,#ebeef2);color:var(--dsw-alias-label-primary,#17191c);font-weight:500}
.sh-mkt-results{display:flex;align-items:baseline;justify-content:flex-start;gap:12px;padding:0 2px}
.sh-mkt-summary{margin:0;color:var(--dsw-alias-label-tertiary,#7b8088);font-size:12px;font-variant-numeric:tabular-nums}
.sh-mkt-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));align-items:stretch;gap:10px}
.sh-mkt-card{position:relative;min-width:0;min-height:188px;display:flex;flex-direction:column;overflow:hidden;border:1px solid var(--dsw-alias-border-l2,#e2e4e8);border-radius:10px;padding:14px;background:var(--dsw-alias-bg-layer-3,#fff)}
.sh-mkt-card.on{border-color:color-mix(in srgb,var(--dsw-alias-state-success-primary,#279c62) 45%,var(--dsw-alias-border-l2,#e2e4e8))}
.sh-mkt-card:hover{border-color:var(--dsw-alias-border-l1,#cfd2d8);box-shadow:var(--dsw-shadow-lv1,0 2px 8px rgb(20 24 32 / 8%))}
.sh-mkt-card.on:hover{border-color:var(--dsw-alias-state-success-primary,#279c62)}
.sh-mkt-head{display:flex;align-items:center;gap:10px}
.sh-mkt-head-main{min-width:0;flex:1;display:flex;flex-direction:column;gap:1px;justify-content:center}
.sh-mkt-avatar{flex:none;width:36px;height:36px;border-radius:9px;object-fit:cover;border:1px solid var(--dsw-alias-border-l2,#e2e4e8);background:linear-gradient(135deg,var(--dsw-alias-state-business-tertiary,#c7d2fe),var(--dsw-alias-state-warn-tertiary,#fbcfe8))}
.sh-mkt-avatar-fallback{display:grid;place-items:center;font-weight:700;font-size:14px;line-height:1;color:var(--dsw-alias-label-secondary,#374151)}
.sh-mkt-stars{display:inline-flex;align-items:center;gap:3px}
.sh-mkt-stars .sh-star-ico{opacity:1}
.sh-mkt-top{display:flex;align-items:center;justify-content:space-between;gap:10px}
.sh-mkt-owner{min-width:0;overflow:hidden;margin:0;color:var(--dsw-alias-label-tertiary,#7b8088);font-family:var(--dsw-font-code,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace);font-size:11px;line-height:14px;text-overflow:ellipsis;white-space:nowrap}
.sh-mkt-badge{flex:none;min-height:18px;display:inline-flex;align-items:center;border-radius:5px;padding:1px 6px;background:var(--dsw-alias-bg-layer-1,#f5f6f8);color:var(--dsw-alias-label-tertiary,#7b8088);font-size:11px;line-height:16px}
.sh-mkt-badge.ok{background:color-mix(in srgb,var(--dsw-alias-state-success-primary,#279c62) 10%,transparent);color:var(--dsw-alias-state-success-primary,#279c62)}
.sh-mkt-badge.on{background:color-mix(in srgb,var(--dsw-alias-state-business-primary,#4d6bfe) 12%,transparent);color:var(--dsw-alias-state-business-primary,#4d6bfe)}
.sh-mkt-name{margin:0;overflow-wrap:anywhere;font-size:15px;line-height:18px;font-weight:600}
.sh-mkt-desc{display:-webkit-box;overflow:hidden;margin:10px 0 0;color:var(--dsw-alias-label-tertiary,#7b8088);font-size:12px;line-height:18px;-webkit-box-orient:vertical;-webkit-line-clamp:3}
.sh-mkt-meta{display:flex;justify-content:space-between;gap:10px;margin-top:auto;padding-top:13px;color:var(--dsw-alias-label-tertiary,#7b8088);font-size:11px;line-height:17px}
.sh-mkt-actions{display:flex;align-items:center;gap:8px;margin-top:10px;padding-top:10px;border-top:1px solid var(--dsw-alias-border-l2,#e2e4e8)}
.sh-mkt-details{flex:1;color:var(--dsw-alias-label-secondary,#4b5058);font-size:12px;font-weight:500;text-decoration:none;position:relative;z-index:1}
.sh-mkt-install{position:relative;z-index:1;min-height:30px;padding:0 10px;font-size:12px}
.sh-mkt-install:disabled{opacity:.4;cursor:default}
.sh-mkt-install.done{opacity:1;color:var(--dsw-alias-state-success-primary,#047857);background:transparent;cursor:default}
.sh-mkt-progress{display:flex;flex-direction:column;gap:8px;margin:0 2px;padding:10px 12px;border:1px solid var(--dsw-alias-border-l2,#e2e4e8);border-radius:10px;background:var(--dsw-alias-bg-layer-1,#f5f6f8);color:var(--dsw-alias-label-secondary,#4b5058);font-size:12px}
.sh-mkt-progress-row{display:flex;align-items:center;gap:10px;min-width:0}
.sh-mkt-progress-text{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-variant-numeric:tabular-nums}
.sh-mkt-progress-pct{flex:none;font-weight:600;font-variant-numeric:tabular-nums}
.sh-mkt-bar{width:100%;height:4px;border-radius:99px;overflow:hidden;background:var(--dsw-alias-border-l2,#e2e4e8)}
.sh-mkt-bar-fill{height:100%;width:var(--bar-pct);border-radius:99px;background:var(--bar-tint,var(--dsw-alias-state-business-primary,#4d6bfe));transition:width .6s ease}
.sh-mkt-bar-fill.wave{width:30%;animation:shBarSlide 1.2s ease-in-out infinite}
@keyframes shBarSlide{0%{margin-left:-30%}100%{margin-left:100%}}
@media (prefers-reduced-motion:reduce){.sh-mkt-bar-fill.wave{animation:none;width:40%}}
.sh-mkt-banner{position:sticky;top:0;z-index:3;display:flex;align-items:center;gap:10px;margin:0 2px 10px;padding:10px 12px;border:1px solid color-mix(in srgb,var(--dsw-alias-state-business-primary,#4d6bfe) 28%,var(--dsw-alias-border-l2,#e2e4e8));border-radius:10px;background:var(--dsw-alias-bg-layer-3,#fff)}
.sh-mkt-banner-text{flex:1;min-width:0;font-size:13px;line-height:18px}
.sh-mkt-banner-text b{font-weight:600}
.sh-mkt-restart{flex:none;height:30px;padding:0 12px;border:0;border-radius:8px;background:var(--dsw-alias-label-primary,#17191c);color:var(--dsw-alias-bg-layer-3,#fff);font:inherit;font-size:12px;font-weight:600;cursor:pointer}
.sh-mkt-restart:disabled{opacity:.5;cursor:default}
.sh-mkt-status{margin:0;padding:32px 12px;color:var(--dsw-alias-label-tertiary,#7b8088);font-size:13px;line-height:20px;text-align:center}
.sh-mkt-status.left{padding:0 2px;text-align:left}
.sh-mkt-more{align-self:stretch;display:flex;align-items:center;justify-content:center;gap:8px;height:auto;min-height:40px;margin-top:2px;padding:0 16px;border:1px solid var(--dsw-alias-border-l2,#e2e4e8);border-radius:10px;background:var(--dsw-alias-bg-layer-1,#f5f6f8);color:var(--dsw-alias-label-secondary,#4b5058);font:inherit;font-size:13px;font-weight:500;cursor:pointer;transition:background .16s,border-color .16s,box-shadow .16s,color .16s}
.sh-mkt-more:hover{background:var(--dsw-alias-bg-layer-3,#fff);border-color:var(--dsw-alias-border-l1,#cfd2d8);box-shadow:var(--dsw-shadow-lv1,0 2px 8px rgb(20 24 32 / 8%));color:var(--dsw-alias-label-primary,#17191c)}
.sh-mkt-more:active{transform:translateY(0.5px)}
.sh-mkt-more-left{color:var(--dsw-alias-label-tertiary,#7b8088);font-size:12px;font-weight:400;font-variant-numeric:tabular-nums}
.sh-mkt-more svg{flex:none;width:14px;height:14px}
@media (max-width:680px){.sh-mkt-grid{grid-template-columns:minmax(0,1fr)}}
.sh-plaza-wrap{width:100%}
.sh-plaza-wrap.rail{display:flex;justify-content:center}
.sh-plaza-trigger{box-sizing:border-box;display:flex;align-items:center;justify-content:flex-start;gap:8px;width:calc(100% + 4px);height:42px;margin:4px -2px;padding:0 10px 0 8px;border:0;border-radius:12px;background:transparent;color:var(--dsw-alias-label-primary,inherit);font:inherit;font-size:14px;line-height:22px;cursor:pointer;overflow:hidden}
.sh-plaza-wrap.rail .sh-plaza-trigger{width:36px;height:36px;margin:8px 0 10px;padding:0;justify-content:center;border-radius:50%;gap:0}
.sh-plaza-trigger:hover{background:var(--dsw-alias-interactive-bg-hover,#f3f4f6)}
.sh-plaza-trigger svg,.sh-plaza-trigger .dshUk-Button-slot svg{flex:none;width:16px;height:16px}
.sh-plaza-wrap.rail .sh-plaza-trigger svg,.sh-plaza-wrap.rail .sh-plaza-trigger .dshUk-Button-slot svg{width:18px;height:18px}
.sh-plaza-trigger.on,.sh-plaza-trigger[aria-expanded=true]{background:var(--dsw-specific-sidebar-nav-item-active,#ebeef2)}
.sh-plaza-trigger .dshUk-Button-label,.sh-plaza-trigger span{white-space:nowrap;overflow:hidden}
.sh-plaza-page{position:fixed;z-index:200;box-sizing:border-box;display:flex;flex-direction:column;min-height:0;overflow:hidden;background:var(--dsw-alias-bg-base,#111215);color:var(--dsw-alias-label-primary,#fff);top:0;left:var(--stage-left,56px);right:0;bottom:0;width:auto;height:auto}
.sh-plaza-view[data-active="false"]{display:none;pointer-events:none}
.sh-plaza-top{display:flex;align-items:center;gap:12px;flex:none;height:48px;padding:8px 20px;border-bottom:1px solid var(--dsw-alias-border-l2,#e2e4e8);background:var(--dsw-alias-bg-base,#fff);box-sizing:border-box;flex-wrap:nowrap}
.sh-plaza-tabs{display:flex;align-items:center;gap:16px;padding:0;border:0;background:inherit;flex:none}
.sh-plaza-tabs .sh-plaza-tab,.sh-plaza-tab{height:30px;padding:0;border:0;border-radius:0;background:inherit;color:var(--dsw-alias-label-tertiary,#7b8088);font:inherit;font-size:13px;font-weight:500;cursor:pointer}
.sh-plaza-tabs .sh-plaza-tab:hover,.sh-plaza-tab:hover{color:var(--dsw-alias-label-primary,#17191c);background:inherit}
.sh-plaza-tabs .sh-plaza-tab.on,.sh-plaza-tab.on{background:inherit;color:var(--dsw-alias-state-business-primary,#4d6bfe);box-shadow:none}
.sh-plaza-tab .dshUk-Button-label{font:inherit;font-size:inherit;font-weight:inherit;color:inherit}
.sh-plaza-search{display:flex;align-items:center;margin-left:auto;min-width:180px;max-width:280px;width:100%;flex:0 1 280px}
.sh-plaza-search .dshUk-SearchField-root,.sh-plaza-search .dshUk-SearchField-stretch{width:100%;max-width:none}
.sh-plaza-close{display:flex;align-items:center;flex:none}
.sh-plaza-body{flex:1;min-height:0;overflow:auto;padding:18px 20px 32px}
.sh-plaza-body .sh-mkt{max-width:none;width:100%}
.sh-plaza-body .sh-cards,.sh-plaza-body .sh-mkt-grid{grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}
@media (max-width:1400px){.sh-plaza-body .sh-cards,.sh-plaza-body .sh-mkt-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media (max-width:980px){.sh-plaza-body .sh-cards,.sh-plaza-body .sh-mkt-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:640px){.sh-plaza-body .sh-cards,.sh-plaza-body .sh-mkt-grid{grid-template-columns:1fr}}
.sh-plaza-body .sh-card{min-height:112px;padding:16px;gap:14px}
.sh-plaza-body .sh-icon{width:48px;height:48px;border-radius:12px;font-size:14px}
.sh-plaza-body .sh-title{font-size:15px;line-height:22px;white-space:normal;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}
.sh-plaza-body .sh-desc{-webkit-line-clamp:2;font-size:13px;line-height:20px}
.sh-plaza-body .sh-mkt-card{min-height:220px;padding:16px}
.sh-plaza-tool{margin:4px 0 8px}
.sh-plaza-tool .sh-cards{grid-template-columns:repeat(3,minmax(0,1fr))}
@media (max-width:720px){.sh-plaza-tool .sh-cards{grid-template-columns:1fr}}
.sh-plaza-skip{appearance:none;margin:8px 0 0;padding:0;border:0;background:0 0;color:var(--dsw-alias-label-caption,#9ca3af);font:inherit;font-size:12px;cursor:pointer}
.sh-plaza-skip:hover{color:var(--dsw-alias-label-secondary,#4b5563)}
.sh-plaza-status{margin:8px 0 0;font-size:12px;line-height:18px;color:var(--dsw-alias-label-secondary,#4b5563)}
`;
var CSS_ID = "omnimux-market-style";
function ensureCss() {
  if (typeof document === "undefined") return () => {
  };
  let s = document.getElementById(CSS_ID);
  if (!s) {
    s = document.createElement("style");
    s.id = CSS_ID;
    document.head.appendChild(s);
  }
  s.textContent = CSS;
  return () => {
  };
}
var fallbackPortal = (node) => node;
var createPortal = fallbackPortal;
try {
  const rd = require("react-dom");
  if (rd && typeof rd.createPortal === "function") createPortal = rd.createPortal;
} catch {
}
function initials(name) {
  const t = String(name || "").replace(/[a-zA-Z0-9._-]/g, "");
  return (t.slice(0, 3) || String(name || "SK").slice(0, 2)).toUpperCase();
}
function pluginUrl(path) {
  const suffix = String(path || "").replace(/^\/+/, "");
  const base = typeof document !== "undefined" ? document.baseURI : "/";
  return new URL("./omnimux-market" + (suffix ? "/" + suffix : ""), base).toString();
}
function iconSrc(url) {
  if (!url) return "";
  if (url.startsWith("data:")) return url;
  return pluginUrl("icon?url=" + encodeURIComponent(url));
}
function fmt(n, tr) {
  const v = Number(n) || 0;
  const en = tr && tr("locale") === "en";
  if (en) {
    if (v >= 1e6) return (v / 1e6).toFixed(v >= 1e7 ? 0 : 1) + "M";
    if (v >= 1e4) return (v / 1e3).toFixed(v >= 1e5 ? 0 : 1) + "k";
    return String(v);
  }
  if (v >= 1e4) return (v / 1e4).toFixed(v >= 1e5 ? 0 : 1) + " 万";
  return String(v);
}
function fmtStat(n, tr) {
  if (n == null || n === "") return "…";
  return fmt(n, tr);
}
function fmtTime(n, tr) {
  const t = Number(n);
  if (!t) return "";
  const d = new Date(t);
  if (Number.isNaN(d.getTime())) return "";
  const loc = tr && tr("locale") === "en" ? "en-US" : "zh-CN";
  return d.toLocaleDateString(loc, { year: "numeric", month: "short", day: "numeric" });
}
var ZH = {
  locale: "zh",
  "cfg.desc": "搜索 API、安装目录与结果数量。",
  "cfg.updateHint": "当前 {cur} · 最新 {latest}",
  "cfg.unsaved": "未保存",
  "cfg.collapse": "收起",
  "cfg.expand": "展开",
  "cfg.api": "API 地址",
  "cfg.dir": "安装目录",
  "cfg.max": "搜索结果上限",
  "cfg.discard": "放弃修改",
  "cfg.save": "保存",
  "cfg.saving": "保存中",
  "installed.hint": "已安装 {n} 个技能",
  "installed.none": "未安装任何技能",
  "action.detail": "详情",
  "action.uninstall": "卸载",
  "action.uninstalling": "卸载中",
  "action.install": "安装",
  "action.installing": "安装中",
  "action.installed": "已安装",
  "action.openHome": "打开主页",
  "action.close": "关闭",
  "badge.installed": "已安装",
  "search.hint": "共 {n} 个可用技能",
  "search.fallback": "没有匹配结果，以下是热门技能推荐",
  "search.empty": "没有结果",
  "tab.overview": "概述",
  "tab.versions": "版本历史",
  "tab.evaluation": "评测报告",
  "stat.downloads": "下载",
  "stat.stars": "收藏",
  "stat.installs": "安装",
  "meta.downloads": "{n} 下载",
  "grade.excellent": "优秀",
  "grade.good": "良好",
  "grade.fair": "一般",
  "grade.poor": "待提升",
  "rate.ai": "AI 评分",
  "verified": "认证",
  "verified.account": "认证账号",
  "eval.none": "该 Skill 暂未进行评测",
  "eval.grade": "综合评级：{g}",
  "eval.detail": "评测详情",
  "dim.trust": "可信任度",
  "dim.reliability": "可靠性",
  "dim.adaptability": "适用性",
  "dim.convention": "规范性",
  "dim.effectiveness": "有效性",
  "ver.none": "暂无版本历史",
  "ver.latest": "最新",
  "ver.current": "当前已装",
  "ver.unknownDate": "发布日期未知",
  "ver.noLog": "无更新说明",
  "ver.this": "已安装此版本",
  "ver.install": "安装指定版本",
  "overview.empty": "暂无简介",
  "sec.badge": "安全",
  loading: "加载中…",
  "toast.installed": "{name} 已安装",
  "toast.uninstalled": "已卸载 {name}",
  "cat.office-efficiency": "办公效率",
  "cat.content-creation": "内容创作",
  "cat.dev-programming": "开发编程",
  "cat.data-analysis": "数据分析",
  "cat.design-media": "设计多媒体",
  "cat.ai-agent": "AI Agent",
  "cat.knowledge-management": "知识管理",
  "cat.business-ops": "商业运营",
  "cat.education": "教育学习",
  "cat.professional": "行业专业",
  "cat.it-ops-security": "IT 运维与安全",
  "cat.life-service": "生活服务",
  "mkt.searchPlaceholder": "输入关键词搜索",
  "mkt.search": "搜索",
  "mkt.repos": "发现 GitHub MIT 开源的共 {n} 个插件扩展",
  "mkt.loading": "正在加载 SkillHub…",
  "mkt.error": "连接失败：{m}",
  "mkt.empty": "没有匹配的插件。",
  "mkt.noDesc": "该仓库暂无描述。",
  "mkt.details": "详情",
  "mkt.verified": "已验证",
  "mkt.unsupported": "不可直接安装",
  "mkt.sending": "正在安装",
  "mkt.install": "安装",
  "mkt.installed": "已安装",
  "mkt.sent": "已安装 {name}，刷新页面或重启服务后生效。",
  "mkt.progressHint": "首次安装需下载并构建依赖，耗时约 1–3 分钟",
  "mkt.phaseResolving": "解析依赖",
  "mkt.phaseDownloading": "下载中",
  "mkt.phaseLinking": "链接依赖",
  "mkt.phaseBuilding": "运行构建脚本",
  "mkt.packagesDone": "已处理 {n} 个包",
  "mkt.restartBanner": "已安装 {name}，刷新页面或重启服务后生效",
  "mkt.restartNow": "立即重启",
  "mkt.restarting": "正在重启…",
  "mkt.restartFail": "重启失败：{m}",
  "mkt.restartTimeout": "服务响应超时，请在终端手动重启 dsh web",
  "mkt.more": "加载更多",
  "mkt.moreLeft": "还剩 {n} 个",
  "mkt.catAll": "全部",
  "plaza.title": "扩展市场",
  "plaza.skills": "技能",
  "plaza.plugins": "插件",
  "plaza.experts": "专家",
  "plaza.connectors": "连接器",
  "expert.searchPlaceholder": "搜索专家（姓名 / 领域）",
  "expert.empty": "没有匹配的专家",
  "expert.summoning": "正在挂载…",
  "expert.gestureReady": "专家调度指令 {g} 已生成。请聚焦输入框重试，或直接键入指令发送。",
  "connector.searchPlaceholder": "搜索连接器",
  "connector.empty": "没有匹配的连接器",
  "connector.install": "安装",
  "connector.installing": "安装中…",
  "connector.installed": "已安装",
  "connector.uninstall": "卸载",
  "connector.restartHint": "连接器安装或卸载后需重启服务生效",
  "connector.installLater": "当前仅支持浏览连接器，安装与配置功能即将在后续版本开放",
  "plaza.noSession": "请先打开一个会话",
  "plaza.back": "返回对话",
  "plaza.card.hint": "选择适合当前任务的专家角色",
  "plaza.card.summon": "挂载",
  "plaza.card.summoning": "正在挂载…",
  "plaza.card.summoned": "已挂载",
  "plaza.card.kind.expert": "专家",
  "plaza.card.kind.team": "专家战队",
  "plaza.card.skip": "直接开始（不启用专家）",
  "plaza.card.continue": "已挂载 {name}，正在以该专家模式继续",
  "plaza.card.sendFail": "已挂载，请按发送继续"
};
var EN = {
  locale: "en",
  "cfg.desc": "Search API, install directory, and result count.",
  "cfg.updateHint": "Current {cur} · Latest {latest}",
  "cfg.unsaved": "Unsaved",
  "cfg.collapse": "Collapse",
  "cfg.expand": "Expand",
  "cfg.api": "API URL",
  "cfg.dir": "Install directory",
  "cfg.max": "Search result limit",
  "cfg.discard": "Discard",
  "cfg.save": "Save",
  "cfg.saving": "Saving",
  "installed.hint": "{n} skills installed",
  "installed.none": "No skills installed",
  "action.detail": "Details",
  "action.uninstall": "Uninstall",
  "action.uninstalling": "Uninstalling",
  "action.install": "Install",
  "action.installing": "Installing",
  "action.installed": "Installed",
  "action.openHome": "Open homepage",
  "action.close": "Close",
  "badge.installed": "Installed",
  "search.hint": "{n} available skills",
  "search.fallback": "No matches — showing popular skills instead",
  "search.empty": "No results",
  "tab.overview": "Overview",
  "tab.versions": "Versions",
  "tab.evaluation": "Evaluation",
  "stat.downloads": "Downloads",
  "stat.stars": "Stars",
  "stat.installs": "Installs",
  "meta.downloads": "{n} downloads",
  "grade.excellent": "Excellent",
  "grade.good": "Good",
  "grade.fair": "Fair",
  "grade.poor": "Needs work",
  "rate.ai": "AI rating",
  "verified": "Verified",
  "verified.account": "Verified publisher",
  "eval.none": "This skill has not been evaluated yet",
  "eval.grade": "Overall: {g}",
  "eval.detail": "Evaluation details",
  "dim.trust": "Trust",
  "dim.reliability": "Reliability",
  "dim.adaptability": "Adaptability",
  "dim.convention": "Convention",
  "dim.effectiveness": "Effectiveness",
  "ver.none": "No version history",
  "ver.latest": "Latest",
  "ver.current": "Installed",
  "ver.unknownDate": "Unknown date",
  "ver.noLog": "No changelog",
  "ver.this": "This version installed",
  "ver.install": "Install this version",
  "overview.empty": "No description",
  "sec.badge": "Safe",
  loading: "Loading…",
  "toast.installed": "{name} installed",
  "toast.uninstalled": "Uninstalled {name}",
  "cat.office-efficiency": "Office",
  "cat.content-creation": "Content",
  "cat.dev-programming": "Programming",
  "cat.data-analysis": "Data",
  "cat.design-media": "Design",
  "cat.ai-agent": "AI Agent",
  "cat.knowledge-management": "Knowledge",
  "cat.business-ops": "Business",
  "cat.education": "Education",
  "cat.professional": "Professional",
  "cat.it-ops-security": "IT & Security",
  "cat.life-service": "Lifestyle",
  "mkt.searchPlaceholder": "Enter keywords",
  "mkt.search": "Search",
  "mkt.repos": "Found {n} MIT-licensed open-source plugins on GitHub",
  "mkt.loading": "Loading SkillHub…",
  "mkt.error": "Connection failed: {m}",
  "mkt.empty": "No plugins match your filters.",
  "mkt.noDesc": "This repository has no description yet.",
  "mkt.details": "Details",
  "mkt.verified": "Verified",
  "mkt.unsupported": "Direct Install Unavailable",
  "mkt.sending": "Installing",
  "mkt.install": "Install",
  "mkt.installed": "Installed",
  "mkt.sent": "Installed {name}. Restart service to apply.",
  "mkt.progressHint": "Initial installation resolves and builds dependencies (approx. 1–3 min)",
  "mkt.phaseResolving": "Resolving dependencies",
  "mkt.phaseDownloading": "Downloading",
  "mkt.phaseLinking": "Linking",
  "mkt.phaseBuilding": "Running build scripts",
  "mkt.packagesDone": "Processed {n} packages",
  "mkt.restartBanner": "Installed {name} — restart service to apply",
  "mkt.restartNow": "Restart Now",
  "mkt.restarting": "Restarting…",
  "mkt.restartFail": "Restart failed: {m}",
  "mkt.restartTimeout": "Host startup timed out. Please restart dsh web manually.",
  "mkt.more": "Load more",
  "mkt.moreLeft": "{n} remaining",
  "mkt.catAll": "All",
  "plaza.title": "Extension Market",
  "plaza.skills": "Skills",
  "plaza.plugins": "Plugins",
  "plaza.experts": "Experts",
  "plaza.connectors": "Connectors",
  "expert.searchPlaceholder": "Search experts (name / domain)",
  "expert.empty": "No matching experts",
  "expert.summoning": "Attaching…",
  "expert.gestureReady": "{g} is ready. Focus the input composer to apply, or type the command manually.",
  "connector.searchPlaceholder": "Search connectors",
  "connector.empty": "No matching connectors",
  "connector.install": "Install",
  "connector.installing": "Installing…",
  "connector.installed": "Installed",
  "connector.uninstall": "Uninstall",
  "connector.restartHint": "Restart service after installing or uninstalling a connector",
  "connector.installLater": "Connector browsing only. Installation will be available in an upcoming release.",
  "plaza.noSession": "Open a session first",
  "plaza.back": "Back to chat",
  "plaza.card.hint": "Select an expert role suitable for current task",
  "plaza.card.summon": "Attach",
  "plaza.card.summoning": "Attaching…",
  "plaza.card.summoned": "Attached",
  "plaza.card.kind.expert": "Expert",
  "plaza.card.kind.team": "Expert Team",
  "plaza.card.skip": "Continue without Expert",
  "plaza.card.continue": "Attached {name}; continuing with this expert",
  "plaza.card.sendFail": "Attached. Press send to continue"
};
var I18nCtx = React.createContext(null);
function interpolate(template, params) {
  if (!params) return template;
  return String(template).replace(/\{(\w+)\}/g, (m, name) => name in params ? String(params[name]) : m);
}
function browserLang() {
  const lang = typeof document !== "undefined" && document.documentElement.lang || typeof navigator !== "undefined" && navigator.language || "zh";
  return /^en\b/i.test(String(lang)) ? "en" : "zh";
}
function lookup(key, params) {
  const dict = browserLang() === "en" ? EN : ZH;
  return interpolate(dict[key] || ZH[key] || key, params);
}
function useTr() {
  return React.useContext(I18nCtx) || lookup;
}
function I18nProvider({ t, children }) {
  const fn = typeof t === "function" ? t : lookup;
  return h(I18nCtx.Provider, { value: fn }, children);
}
function catLabel(item, tr) {
  const key = item && item.category ? "cat." + item.category : "";
  const label = key ? tr(key) : "";
  if (label && label !== key) return label;
  return item && (item.categoryLabel || item.category) || "";
}
var DETAIL_TABS = [
  { id: "overview", labelKey: "tab.overview" },
  { id: "versions", labelKey: "tab.versions" },
  { id: "evaluation", labelKey: "tab.evaluation" }
];
var TRACE = [
  ["trust", "T", "Trust", "可信任度", "var(--dsw-alias-state-success-primary, #16a34a)"],
  ["reliability", "R", "Reliability", "可靠性", "var(--dsw-alias-state-business-primary, #2563eb)"],
  ["adaptability", "A", "Adaptability", "适用性", "var(--dsw-alias-state-warn-label, var(--dsw-alias-state-warn, #d97706))"],
  ["convention", "C", "Convention", "规范性", "var(--dsw-alias-label-primary, #7c3aed)"],
  ["effectiveness", "E", "Effectiveness", "有效性", "var(--dsw-alias-state-warn-primary, #ea580c)"]
];
var apiCache = /* @__PURE__ */ new Map();
var API_CACHE_TTL_MS = 9e4;
var API_CACHE_READ = /* @__PURE__ */ new Set(["search", "plugins", "pluginCategories", "experts", "connectors"]);
function apiCacheKey(method, payload) {
  const { refresh, ...rest } = payload || {};
  return method + ":" + JSON.stringify(rest || {});
}
function invalidateApiCache(prefix) {
  for (const key of [...apiCache.keys()]) {
    if (!prefix || key.startsWith(prefix)) apiCache.delete(key);
  }
}
async function api(method, payload, opts) {
  const bodyIn = payload || {};
  const skipCache = !!(opts && opts.skipCache) || !!bodyIn.refresh || !API_CACHE_READ.has(method);
  const key = apiCacheKey(method, bodyIn);
  if (!skipCache) {
    const hit = apiCache.get(key);
    if (hit && Date.now() - hit.at < API_CACHE_TTL_MS) return hit.body;
  }
  const res = await fetch(pluginUrl(""), {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ method, ...bodyIn })
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok || body.ok === false) throw new Error(body.error || "HTTP " + res.status);
  if (API_CACHE_READ.has(method)) apiCache.set(key, { at: Date.now(), body });
  if (method === "install" || method === "uninstall" || method === "pluginInstall" || method === "catalogInstall" || method === "catalogUninstall" || method === "catalogSummon") {
    invalidateApiCache("search:");
    invalidateApiCache("plugins:");
    invalidateApiCache("experts:");
    invalidateApiCache("connectors:");
    invalidateApiCache("pluginCategories:");
  }
  return body;
}
var plazaKeepAlive = true;
function Toast({ text, onDone }) {
  useEffect2(() => {
    const t = setTimeout(onDone, 1600);
    return () => clearTimeout(t);
  }, [text, onDone]);
  return h("div", { className: "sh-toast" }, text);
}
function Icon({ item, className }) {
  const src = iconSrc(item.iconUrl);
  if (src) return h("img", { className, src, alt: "" });
  return h("div", { className }, initials(item.name || item.slug));
}
function Cards({ items, onOpen }) {
  const tr = useTr();
  if (!items?.length) return h("div", { className: "sh-hint" }, tr("search.empty"));
  return h(
    "div",
    { className: "sh-cards" },
    items.map((item) => {
      const meta = [
        catLabel(item, tr),
        item.downloads ? tr("meta.downloads", { n: fmt(item.downloads, tr) }) : null,
        item.version ? "v" + item.version : null
      ].filter(Boolean).join(" · ");
      return h(
        Button3,
        {
          key: item.slug || item.id,
          type: "button",
          variant: "ghost",
          className: "sh-card" + (item.installed ? " on" : ""),
          onClick: () => onOpen(item)
        },
        h(Icon, { item, className: "sh-icon" }),
        h(
          "div",
          { className: "sh-meta" },
          h(
            "div",
            { className: "sh-top" },
            h("div", { className: "sh-title", title: item.name }, item.name),
            item.installed ? h("span", { className: "sh-badge" }, tr("badge.installed")) : null
          ),
          item.description ? h("div", { className: "sh-desc" }, item.description) : null,
          h("div", { className: "sh-footline" }, meta || item.slug)
        )
      );
    })
  );
}
function TabBar({ tab, onChange }) {
  const tr = useTr();
  return h(
    "div",
    { className: "sh-tabs", role: "tablist" },
    DETAIL_TABS.map((it) => h(Button3, {
      key: it.id,
      type: "button",
      role: "tab",
      variant: "ghost",
      size: "sm",
      className: "sh-tab" + (tab === it.id ? " on" : ""),
      "aria-selected": tab === it.id,
      onClick: () => onChange(it.id)
    }, tr(it.labelKey)))
  );
}
function normVer(v) {
  return String(v || "").trim().replace(/^v/i, "");
}
function VersionsPane({ data, currentVersion, installed, busy, onInstall }) {
  const tr = useTr();
  const items = data?.versions || [];
  if (!items.length) return h("p", { className: "sh-hint" }, tr("ver.none"));
  return h("div", null, items.map((v, idx) => {
    const ver = normVer(v.version);
    const current = !!installed && !!ver && normVer(currentVersion) === ver;
    return h(
      "div",
      { key: ver || idx, className: "sh-ver-card" },
      h(
        "div",
        { className: "sh-ver-main" },
        h(
          "div",
          { className: "sh-ver-head" },
          h("b", null, "v" + ver),
          idx === 0 ? h("span", { className: "sh-tag blue" }, tr("ver.latest")) : null,
          current ? h("span", { className: "sh-tag green" }, tr("ver.current")) : null
        ),
        h("div", { className: "sh-hint" }, fmtTime(v.createdAt, tr) || tr("ver.unknownDate")),
        h("p", { className: "sh-ver-log" }, v.changelog || tr("ver.noLog"))
      ),
      h(Button3, {
        type: "button",
        size: "sm",
        variant: current ? "outline" : "primary",
        disabled: !!busy || current || !ver,
        loading: busy === ver,
        onClick: () => onInstall(ver)
      }, current ? tr("ver.this") : tr("ver.install"))
    );
  }));
}
function radarPoints(values, cx2, cy, r) {
  return values.map((v, i) => {
    const a = -Math.PI / 2 + i * (Math.PI * 2 / 5);
    const rr = r * Math.max(0, Math.min(1, Number(v) / 5));
    return (cx2 + Math.cos(a) * rr).toFixed(1) + "," + (cy + Math.sin(a) * rr).toFixed(1);
  }).join(" ");
}
function DimIcon({ letter }) {
  const svg = { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
  if (letter === "T") return h("svg", svg, h("path", { d: "M12 3l8 4v5c0 5-3.4 8.4-8 9.5C7.4 20.4 4 17 4 12V7l8-4z" }));
  if (letter === "R") return h("svg", svg, h("path", { d: "M12 21V3M5 10l7-7 7 7" }));
  if (letter === "A") return h("svg", svg, h("circle", { cx: 12, cy: 12, r: 8 }), h("path", { d: "M12 8v8M8 12h8" }));
  if (letter === "C") return h("svg", svg, h("path", { d: "M5 4h11a3 3 0 010 6H5z" }), h("path", { d: "M5 10h12a3 3 0 010 6H8" }));
  return h("svg", svg, h("path", { d: "M13 3L5 14h7l-1 7 8-11h-7l1-7z" }));
}
function RadarChart({ scores }) {
  const cx2 = 90;
  const cy = 90;
  const r = 58;
  const full = TRACE.map(() => 5);
  return h(
    "svg",
    { className: "sh-radar", viewBox: "0 0 180 180", width: 180, height: 180, "aria-hidden": "true" },
    [1, 2, 3, 4, 5].map((level) => h("polygon", {
      key: level,
      points: radarPoints(full.map(() => level), cx2, cy, r),
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 1
    })),
    TRACE.map((d, i) => {
      const a = -Math.PI / 2 + i * (Math.PI * 2 / 5);
      return h("line", {
        key: d[0],
        x1: cx2,
        y1: cy,
        x2: +(cx2 + Math.cos(a) * r).toFixed(1),
        y2: +(cy + Math.sin(a) * r).toFixed(1),
        stroke: "currentColor",
        strokeWidth: 1
      });
    }),
    h("polygon", {
      points: radarPoints(scores, cx2, cy, r),
      fill: "color-mix(in srgb, var(--dsw-alias-state-business-primary, #2563eb) 16%, transparent)",
      stroke: "var(--dsw-alias-state-business-primary, #2563eb)",
      strokeWidth: 1.6
    }),
    TRACE.map((d, i) => {
      const a = -Math.PI / 2 + i * (Math.PI * 2 / 5);
      return h("text", {
        key: "l" + d[0],
        x: +(cx2 + Math.cos(a) * (r + 16)).toFixed(1),
        y: +(cy + Math.sin(a) * (r + 16)).toFixed(1),
        textAnchor: "middle",
        dominantBaseline: "middle",
        fontSize: 12,
        fontWeight: 700,
        fill: d[4]
      }, d[1]);
    })
  );
}
function evalGrade(score, tr) {
  const n = Number(score);
  if (!Number.isFinite(n)) return "";
  const tx = tr || lookup;
  if (n >= 4.5) return tx("grade.excellent");
  if (n >= 4) return tx("grade.good");
  if (n >= 3) return tx("grade.fair");
  return tx("grade.poor");
}
function StarIcon({ filled, size = 12 }) {
  return h("svg", {
    className: "sh-star-ico" + (filled ? " on" : ""),
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: filled ? "currentColor" : "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, h("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }));
}
function StarGroup({ score }) {
  const n = Math.max(0, Math.min(5, Math.round(Number(score) || 0)));
  return h(
    "span",
    { className: "sh-stars", "aria-hidden": "true" },
    [0, 1, 2, 3, 4].map((i) => h(StarIcon, { key: i, filled: i < n }))
  );
}
function isSafeItem(item) {
  const reports = [item?.security?.keen, item?.security?.sanbu].filter(Boolean);
  if (reports.some((r) => r.status === "malicious" || r.status === "suspicious")) return false;
  if (reports.some((r) => r.status === "benign")) return true;
  return !!(item?.integrity?.signed || item?.integrity?.contentHash);
}
function Marks({ item, detail }) {
  const tr = useTr();
  const grade = evalGrade(item.rating, tr);
  const rate = item.rating != null && Number.isFinite(Number(item.rating));
  const bluev = detail && item.verified;
  const safe = detail && isSafeItem(item);
  if (!rate && !bluev && !safe) return null;
  return h(
    "div",
    { className: "sh-marks" },
    rate ? h(
      "span",
      { className: "sh-rate", title: tr("rate.ai") },
      h(StarGroup, { score: item.rating }),
      " " + Number(item.rating).toFixed(1),
      grade ? " " + grade : "",
      detail ? " (" + tr("rate.ai") + ")" : ""
    ) : null,
    bluev ? h(
      "span",
      { className: "sh-bluev", title: item.publisherName || tr("verified.account") },
      h("i", { "aria-hidden": "true" }, "v"),
      h("span", null, item.publisherName || tr("verified"))
    ) : null,
    safe ? h(
      "span",
      { className: "sh-safe", title: tr("sec.badge") },
      h(ShieldIcon),
      tr("sec.badge")
    ) : null
  );
}
function ShieldIcon() {
  return h(
    "svg",
    { className: "sh-sec-ico", viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true" },
    h("path", {
      d: "M3.15 2.35 10 .83l6.85 1.52c.38.09.65.42.65.82v8.32c0 1.67-.84 3.23-2.23 4.16L10 19.17l-5.27-3.52C3.34 14.72 2.5 13.16 2.5 11.49V3.17c0-.39.27-.73.65-.82Zm7.68 5.98V4.17L6.67 10h2.5v4.17L13.33 8.33H10.83Z",
      fill: "url(#shShield)"
    }),
    h(
      "defs",
      null,
      h(
        "linearGradient",
        { id: "shShield", x1: "10", y1: "0.83", x2: "10", y2: "19.17", gradientUnits: "userSpaceOnUse" },
        h("stop", { stopColor: "var(--dsw-alias-state-success-secondary, #A6E527)" }),
        h("stop", { offset: "1", stopColor: "var(--dsw-alias-state-success-primary, #0CBF5B)" })
      )
    )
  );
}
function EvaluationPane({ data }) {
  const tr = useTr();
  const ev = data?.evaluation;
  if (!ev) return h("p", { className: "sh-hint" }, tr("eval.none"));
  const scores = TRACE.map((d) => Number(ev.dimensions?.[d[0]]?.score) || 0);
  const grade = evalGrade(ev.score, tr);
  return h(
    "div",
    null,
    h(
      "div",
      { className: "sh-eval-hero" },
      h(RadarChart, { scores }),
      h(
        "div",
        null,
        h("div", { className: "sh-eval-score" }, ev.score != null ? ev.score : "-", h("span", null, " / 5")),
        grade ? h("div", { className: "sh-eval-tag" }, tr("eval.grade", { g: grade })) : null,
        ev.userSummary ? h("p", { className: "sh-eval-sum" }, ev.userSummary) : null
      )
    ),
    h("div", { className: "sh-eval-h" }, tr("eval.detail")),
    TRACE.map((d) => {
      const dim = ev.dimensions?.[d[0]];
      const score = dim?.score;
      const barStyle = {
        "--bar-pct": (Number(score) || 0) / 5 * 100 + "%",
        "--bar-tint": d[4]
      };
      return h(
        "div",
        { key: d[0], className: "sh-eval-item", style: barStyle },
        h(
          "div",
          { className: "sh-eval-top" },
          h("div", { className: "sh-eval-ico" }, h(DimIcon, { letter: d[1] })),
          h("div", { className: "sh-eval-name" }, d[1] + " · " + d[2] + " " + tr("dim." + d[0])),
          h("div", { className: "sh-eval-sc" }, (score == null ? "-" : score) + " / 5")
        ),
        h("div", { className: "sh-eval-bar" }, h("span")),
        dim?.userReason ? h("p", { className: "sh-eval-why" }, dim.userReason) : null
      );
    })
  );
}
function DetailCard({ item, busy, onClose, onInstalled, onUninstalled }) {
  const tr = useTr();
  const [toast, setToast] = useState2("");
  const [working, setWorking] = useState2("");
  const [tab, setTab] = useState2("overview");
  const [view, setView] = useState2(item);
  const [pane, setPane] = useState2({ loading: false, error: "", data: null });
  const cacheRef = React.useRef({});
  const installed = !!view.installed;
  useEffect2(() => {
    setView(item);
  }, [item]);
  const applyDetail = (d) => {
    if (!d) return;
    const card = d.card && typeof d.card === "object" ? d.card : null;
    setView((cur) => ({
      ...cur,
      ...card || {},
      slug: item.slug,
      installed: d.installed ?? cur.installed,
      version: d.version || card?.version || cur.version,
      pageUrl: card?.pageUrl || cur.pageUrl,
      rating: card?.rating ?? cur.rating,
      verified: card?.verified ?? cur.verified,
      publisherName: card?.publisherName || cur.publisherName,
      description: card?.description || cur.description,
      security: card?.security || cur.security,
      integrity: card?.integrity || cur.integrity
    }));
  };
  useEffect2(() => {
    let live = true;
    api("detail", { slug: item.slug }).then((d) => {
      if (live) applyDetail(d);
    }).catch(() => {
    });
    return () => {
      live = false;
    };
  }, [item.slug]);
  useEffect2(() => {
    if (tab === "overview") return;
    const cached = cacheRef.current[tab];
    if (cached) {
      setPane({ loading: false, error: "", data: cached });
      return;
    }
    let live = true;
    setPane({ loading: true, error: "", data: null });
    api("skillTab", { slug: item.slug, tab }).then((d) => {
      if (!live) return;
      cacheRef.current[tab] = d;
      setPane({ loading: false, error: "", data: d });
    }).catch((e) => {
      if (!live) return;
      setPane({ loading: false, error: e.message || String(e), data: null });
    });
    return () => {
      live = false;
    };
  }, [item.slug, tab]);
  const run = async (method, extra) => {
    const ver = extra && extra.version;
    setWorking(ver || method);
    try {
      const result = await api(method, { slug: item.slug, ...extra || {} });
      if (method === "install") {
        item.installed = true;
        if (result.version) item.version = result.version;
        else if (ver) item.version = ver;
        setView((cur) => ({ ...cur, installed: true, version: item.version || cur.version }));
        onInstalled?.(item);
        const shown = (view.name || item.name) + (item.version ? " v" + String(item.version).replace(/^v/i, "") : "");
        setToast(tr("toast.installed", { name: shown }));
        api("detail", { slug: item.slug }).then(applyDetail).catch(() => {
        });
      } else {
        item.installed = false;
        setView((cur) => ({ ...cur, installed: false }));
        onUninstalled?.(item);
        setToast(tr("toast.uninstalled", { name: view.name || item.name }));
      }
    } catch (e) {
      setToast(e.message || String(e));
    } finally {
      setWorking("");
    }
  };
  return h(
    "div",
    { className: "sh-drawer sh-skill sh-fade", role: "dialog", "aria-modal": "true" },
    h(
      "span",
      { className: "sh-close" },
      h(IconButton3, {
        variant: "ghost",
        "aria-label": tr("action.close"),
        onClick: onClose
      }, h(IconCloseOutline162))
    ),
    h(
      "div",
      { className: "sh-head" },
      h(Icon, { item: view, className: "sh-dicon" }),
      h(
        "div",
        { className: "sh-head-copy" },
        h("h2", null, view.name),
        view.id ? h("div", { className: "sh-canon" }, view.id) : null,
        h(Marks, { item: view, detail: true }),
        h(
          "div",
          { className: "sh-tags" },
          catLabel(view, tr) ? h("span", { className: "sh-tag blue" }, catLabel(view, tr)) : null,
          view.version ? h("span", { className: "sh-tag" }, "v" + view.version) : null,
          installed ? h("span", { className: "sh-tag green" }, tr("action.installed")) : null
        )
      )
    ),
    h(
      "div",
      { className: "sh-body" },
      h(
        "div",
        { className: "sh-stats" },
        h("div", { className: "sh-stat" }, tr("stat.downloads") + " ", h("b", null, fmtStat(view.downloads, tr))),
        h("div", { className: "sh-stat" }, tr("stat.stars") + " ", h("b", null, fmtStat(view.stars, tr))),
        h("div", { className: "sh-stat" }, tr("stat.installs") + " ", h("b", null, fmtStat(view.installs, tr)))
      ),
      h(TabBar, { tab, onChange: setTab }),
      h(
        "div",
        { className: "sh-pane" },
        tab === "overview" ? h("p", { className: "sh-overview" }, view.description || tr("overview.empty")) : null,
        tab !== "overview" && pane.loading ? h("p", { className: "sh-hint" }, tr("loading")) : null,
        tab !== "overview" && pane.error ? h("p", { className: "sh-err" }, pane.error) : null,
        tab === "versions" && pane.data ? h(VersionsPane, {
          data: pane.data,
          currentVersion: view.version,
          installed,
          busy: working,
          onInstall: (version) => run("install", { version })
        }) : null,
        tab === "evaluation" && pane.data ? h(EvaluationPane, { data: pane.data }) : null
      )
    ),
    h(
      "div",
      { className: "sh-foot" },
      view.pageUrl ? h("a", { className: "sh-mini", href: view.pageUrl, target: "_blank", rel: "noreferrer" }, tr("action.openHome")) : null,
      installed ? h(Button3, {
        type: "button",
        size: "sm",
        variant: "outline",
        disabled: !!working || busy,
        loading: working === "uninstall",
        onClick: () => run("uninstall")
      }, tr("action.uninstall")) : null,
      h(Button3, {
        type: "button",
        size: "sm",
        variant: "primary",
        disabled: installed || !!working || busy,
        loading: !!(working && working !== "uninstall"),
        onClick: () => run("install")
      }, installed ? tr("action.installed") : tr("action.install"))
    ),
    toast ? h(Toast, { text: toast, onDone: () => setToast("") }) : null
  );
}
var overlayStack = [];
function Overlay({ children, onClose }) {
  useEffect2(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    overlayStack.push(onClose);
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      if (overlayStack[overlayStack.length - 1] !== onClose) return;
      e.preventDefault();
      e.stopImmediatePropagation();
      onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      const i = overlayStack.lastIndexOf(onClose);
      if (i >= 0) overlayStack.splice(i, 1);
      document.body.style.overflow = overlayStack.length ? "hidden" : prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);
  const portaled = createPortal !== fallbackPortal;
  const hostRef = React.useRef(null);
  useEffect2(() => {
    if (portaled) return;
    const el = hostRef.current;
    if (!el) return;
    document.body.appendChild(el);
    return () => {
      el.remove();
    };
  }, [portaled]);
  const overlay = h("div", { ref: portaled ? void 0 : hostRef, className: "sh-overlay", onClick: (e) => {
    if (e.target === e.currentTarget) onClose();
  } }, children);
  return portaled && typeof document !== "undefined" ? createPortal(overlay, document.body) : overlay;
}
function Drawer({ item, onClose, onInstalled, onUninstalled }) {
  return h(
    Overlay,
    { onClose },
    h(DetailCard, { item, onClose, onInstalled, onUninstalled })
  );
}
function parseToolArgs(props) {
  const block = props?.block;
  const raw = (block && "kind" in block ? block.call?.argsRaw : block?.argsRaw) || "";
  if (!raw || typeof raw !== "string") return {};
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}
function contentText(node) {
  if (!node) return "";
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(contentText).join("\n");
  if (typeof node === "object") {
    if (typeof node.text === "string") return node.text;
    if (node.content) return contentText(node.content);
  }
  return "";
}
function pickPayload(props) {
  const found = [];
  const visit = (node, depth) => {
    if (!node || depth > 6) return;
    if (typeof node === "string") {
      const t = node.trim();
      if ((t.startsWith("{") || t.startsWith("[")) && t.length > 8) {
        try {
          visit(JSON.parse(t), depth + 1);
        } catch {
        }
      }
      return;
    }
    if (typeof node !== "object") return;
    if (Array.isArray(node)) {
      for (const x of node) visit(x, depth + 1);
      return;
    }
    if (Array.isArray(node.items)) found.push(node);
    for (const key of ["block", "meta", "result", "resultView", "view", "data", "value", "payload", "content", "message"]) {
      if (node[key] != null) visit(node[key], depth + 1);
    }
  };
  visit(props, 0);
  const block = props?.block;
  visit(block?.meta, 1);
  visit(block?.content, 1);
  visit(block?.resultView, 1);
  visit(contentText(block?.content), 1);
  return found.find((x) => Array.isArray(x.items) && x.items.length) || found[0] || null;
}
function SearchToolView(props) {
  useEffect2(() => ensureCss(), []);
  const payload = pickPayload(props);
  const args = parseToolArgs(props);
  const query = String(payload?.query || args.query || "").trim();
  const fromTool = Array.isArray(payload?.items) && payload.items.length ? payload.items : null;
  const running = !!(props?.block && !("kind" in props.block));
  const [items, setItems] = useState2(fromTool || []);
  const [err, setErr] = useState2("");
  const [open, setOpen] = useState2(null);
  useEffect2(() => {
    if (fromTool) setItems(fromTool);
  }, [fromTool]);
  useEffect2(() => {
    if (fromTool || running) return;
    let live = true;
    api("search", { query, queries: args.queries, category: args.category, offset: args.offset, limit: args.limit }).then((d) => {
      if (live) setItems(d.items || []);
    }).catch((e) => {
      if (live) {
        setItems([]);
        setErr(e.message || String(e));
      }
    });
    return () => {
      live = false;
    };
  }, [query, running, !!fromTool]);
  if (running || !items.length) return err ? h("div", { className: "sh-err" }, err) : null;
  const mark = (item, installed) => {
    setItems((cur) => cur.map((it) => it.slug === item.slug ? { ...it, installed } : it));
    setOpen((cur) => cur && cur.slug === item.slug ? { ...cur, installed } : cur);
  };
  const tr = typeof props.t === "function" ? props.t : lookup;
  return h(
    I18nProvider,
    { t: tr },
    h(
      "div",
      { className: "sh-root sh-tool" },
      h("div", { className: "sh-hint" }, tr("search.hint", { n: items.length })),
      h(Cards, { items, onOpen: setOpen }),
      open ? h(Drawer, {
        item: open,
        onClose: () => setOpen(null),
        onInstalled: (it) => mark(it, true),
        onUninstalled: (it) => mark(it, false)
      }) : null
    )
  );
}
var plazaSessions = null;
function currentSessionId(sessions) {
  try {
    return sessions?.list?.getSnapshot?.()?.current || "";
  } catch {
    return "";
  }
}
function PlazaSearchToolView() {
  return null;
}
function ListToolView(props) {
  useEffect2(() => ensureCss(), []);
  const payload = pickPayload(props);
  const fromTool = Array.isArray(payload?.items) ? payload.items : null;
  const running = !!(props?.block && !("kind" in props.block));
  const [items, setItems] = useState2(fromTool || []);
  const [open, setOpen] = useState2(null);
  const [toast, setToast] = useState2("");
  useEffect2(() => {
    if (fromTool) setItems(fromTool);
  }, [fromTool]);
  if (running) return null;
  const tr = typeof props.t === "function" ? props.t : lookup;
  const openItem = (it) => setOpen({
    slug: it.slug,
    name: it.name,
    description: it.description,
    version: it.version,
    installed: true,
    pageUrl: "https://skillhub.cn/skills/" + it.slug
  });
  return h(
    I18nProvider,
    { t: tr },
    h(
      "div",
      { className: "sh-root sh-tool" },
      h("div", { className: "sh-hint" }, items.length ? tr("installed.hint", { n: items.length }) : tr("installed.none")),
      items.map((it) => h(
        "div",
        { key: it.slug, className: "sh-row" },
        h(
          "div",
          null,
          h("div", { className: "sh-title" }, it.name),
          h("div", { className: "sh-slug" }, it.slug + (it.version ? " · v" + it.version : ""))
        ),
        h(
          "div",
          { className: "sh-row-actions" },
          h(Button3, { type: "button", size: "sm", variant: "outline", onClick: () => openItem(it) }, tr("action.detail")),
          h(Button3, {
            type: "button",
            size: "sm",
            variant: "outline",
            onClick: async () => {
              try {
                await api("uninstall", { slug: it.slug });
                setItems((cur) => cur.filter((x) => x.slug !== it.slug));
                setToast(tr("toast.uninstalled", { name: it.name }));
              } catch (e) {
                setToast(e.message || String(e));
              }
            }
          }, tr("action.uninstall"))
        )
      )),
      open ? h(Drawer, {
        item: open,
        onClose: () => setOpen(null),
        onUninstalled: (it) => setItems((cur) => cur.filter((x) => x.slug !== it.slug))
      }) : null,
      toast ? h(Toast, { text: toast, onDone: () => setToast("") }) : null
    )
  );
}
function ChevronDown({ className }) {
  return h("svg", {
    className,
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true"
  }, h("path", {
    d: "M11.8486 5.5L11.4238 5.92383L8.69727 8.65137C8.44157 8.90706 8.21562 9.13382 8.01172 9.29785C7.79912 9.46883 7.55595 9.61756 7.25 9.66602C7.08435 9.69222 6.91565 9.69222 6.75 9.66602C6.44405 9.61756 6.20088 9.46883 5.98828 9.29785C5.78438 9.13382 5.55843 8.90706 5.30273 8.65137L2.57617 5.92383L2.15137 5.5L3 4.65137L3.42383 5.07617L6.15137 7.80273C6.42595 8.07732 6.59876 8.24849 6.74023 8.3623C6.87291 8.46904 6.92272 8.47813 6.9375 8.48047C6.97895 8.48703 7.02105 8.48703 7.0625 8.48047C7.07728 8.47813 7.12709 8.46904 7.25977 8.3623C7.40124 8.24849 7.57405 8.07732 7.84863 7.80273L10.5762 5.07617L11 4.65137L11.8486 5.5Z",
    fill: "currentColor"
  }));
}
function emptyDraft() {
  return {
    apiBase: "https://api.skillhub.cn",
    skillsDir: "",
    maxResults: 12,
    timeoutMs: 2e4,
    sortBy: "score"
  };
}
function ConfigCard(props) {
  useEffect2(() => ensureCss(), []);
  const tr = typeof props.t === "function" ? props.t : lookup;
  const [open, setOpen] = useState2(false);
  const [saved, setSaved] = useState2(emptyDraft);
  const [draft, setDraft] = useState2(emptyDraft);
  const [saving, setSaving] = useState2(false);
  const [updateInfo, setUpdateInfo] = useState2(null);
  const [err, setErr] = useState2("");
  useEffect2(() => {
    let live = true;
    api("config", {}).then((d) => {
      if (!live) return;
      const next = {
        apiBase: d.apiBase || "https://api.skillhub.cn",
        skillsDir: d.skillsDir || "",
        maxResults: d.maxResults || 12,
        timeoutMs: d.timeoutMs || 2e4,
        sortBy: d.sortBy || "score"
      };
      setSaved(next);
      setDraft(next);
    }).catch((e) => {
      if (live) setErr(e.message || String(e));
    });
    api("updateCheck", {}).then((d) => {
      if (live) setUpdateInfo(d);
    }).catch(() => {
    });
    return () => {
      live = false;
    };
  }, []);
  const dirty = !!(draft && saved && JSON.stringify(draft) !== JSON.stringify(saved));
  const save = async () => {
    if (!draft) return;
    setSaving(true);
    setErr("");
    try {
      const d = await api("config", { save: true, ...draft });
      const next = {
        apiBase: d.apiBase,
        skillsDir: d.skillsDir,
        maxResults: d.maxResults,
        timeoutMs: d.timeoutMs,
        sortBy: d.sortBy
      };
      setSaved(next);
      setDraft(next);
    } catch (e) {
      setErr(e.message || String(e));
    } finally {
      setSaving(false);
    }
  };
  const versionHint = updateInfo?.latest ? tr("cfg.updateHint", { cur: updateInfo.currentVersion || "-", latest: updateInfo.latest.version || "-" }) : "";
  return h(
    I18nProvider,
    { t: tr },
    h(
      "li",
      { className: "sh-cfg-item" },
      h(
        "div",
        { className: "sh-cfg" + (open ? " open" : "") },
        h(
          "div",
          { className: "sh-cfg-h" },
          h(
            Button3,
            {
              type: "button",
              variant: "ghost",
              className: "sh-cfg-expand",
              "aria-expanded": open,
              onClick: () => setOpen((v) => !v)
            },
            h(
              "span",
              { className: "sh-cfg-t" },
              h("span", { className: "sh-cfg-n" }, "SkillHub"),
              h("span", { className: "sh-cfg-d" }, versionHint || tr("cfg.desc"))
            ),
            dirty ? h("span", { className: "sh-tag orange" }, tr("cfg.unsaved")) : null
          ),
          h(IconButton3, {
            type: "button",
            variant: "ghost",
            size: "sm",
            className: "sh-cfg-toggle",
            "aria-label": open ? tr("cfg.collapse") : tr("cfg.expand"),
            onClick: () => setOpen((v) => !v)
          }, h(ChevronDown, { className: "sh-cfg-ch" }))
        ),
        open ? h(
          "div",
          { className: "sh-cfg-b" },
          h(InputField3, {
            id: "sh-api",
            label: tr("cfg.api"),
            value: draft.apiBase,
            onChange: (e) => setDraft({ ...draft, apiBase: e.target.value })
          }),
          h(InputField3, {
            id: "sh-dir",
            label: tr("cfg.dir"),
            value: draft.skillsDir,
            onChange: (e) => setDraft({ ...draft, skillsDir: e.target.value })
          }),
          h(InputField3, {
            id: "sh-max",
            label: tr("cfg.max"),
            type: "number",
            min: 1,
            max: 80,
            value: draft.maxResults,
            onChange: (e) => setDraft({ ...draft, maxResults: Number(e.target.value) || 12 })
          }),
          h(
            "div",
            { className: "sh-cfg-ft" },
            err ? h("p", { className: "sh-cfg-err" }, err) : null,
            h(Button3, { type: "button", size: "sm", variant: "outline", disabled: !dirty || saving, onClick: () => setDraft(saved) }, tr("cfg.discard")),
            h(Button3, { type: "button", size: "sm", variant: "primary", disabled: !dirty, loading: saving, onClick: save }, tr("cfg.save"))
          )
        ) : null
      )
    )
  );
}
var MARKET_CAT_EN = {
  "fun-dressup": "Fun dress-up",
  "web-tools": "Web tools",
  memory: "Memory",
  "agent-workflow": "Agent workflow",
  "model-inference": "Model inference",
  client: "Client",
  "admin-security": "Admin & security"
};
var MARKET_CAT_FALLBACK = [
  { key: "fun-dressup", displayName: "趣味换装" },
  { key: "web-tools", displayName: "联网工具" },
  { key: "memory", displayName: "记忆" },
  { key: "agent-workflow", displayName: "Agent 工作流" },
  { key: "model-inference", displayName: "模型推理" },
  { key: "client", displayName: "客户端" },
  { key: "admin-security", displayName: "管理安全" }
];
function pluginLetter(plugin) {
  const raw = String(plugin && plugin.name || plugin && plugin.owner || "");
  const ch = raw.match(/[A-Za-z0-9]|[\u4e00-\u9fff]/);
  return (ch ? ch[0] : "?").toUpperCase();
}
function MarketAvatar({ plugin }) {
  const [failed, setFailed] = useState2(false);
  const src = !failed && plugin.avatarUrl ? iconSrc(plugin.avatarUrl) : "";
  if (src) {
    return h("img", {
      className: "sh-mkt-avatar",
      src,
      alt: "",
      onError: () => setFailed(true)
    });
  }
  return h("div", {
    className: "sh-mkt-avatar sh-mkt-avatar-fallback",
    "aria-hidden": "true"
  }, pluginLetter(plugin));
}
function StarIcon() {
  return h(
    "svg",
    {
      className: "sh-star-ico",
      width: 12,
      height: 12,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true"
    },
    h("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" })
  );
}
function installMarketPlugin(plugin) {
  return api("pluginInstall", {
    owner: plugin.owner,
    name: plugin.name,
    fullName: plugin.fullName
  });
}
function phaseLabel(phase, tr) {
  if (phase === "resolving") return tr("mkt.phaseResolving");
  if (phase === "downloading") return tr("mkt.phaseDownloading");
  if (phase === "linking") return tr("mkt.phaseLinking");
  if (phase === "building") return tr("mkt.phaseBuilding");
  return "";
}
function progressCopy(status, tr) {
  if (status && status.phase) {
    const bits = [phaseLabel(status.phase, tr)];
    if (status.currentPackage) bits.push(status.currentPackage);
    if (Number(status.done) > 0) bits.push(tr("mkt.packagesDone", { n: status.done }));
    if (Number(status.seconds) > 0) bits.push(status.seconds + "s");
    return bits.filter(Boolean).join(" · ");
  }
  const line = status && status.lastLine;
  if (line) return line + (status.seconds ? "  (" + status.seconds + "s)" : "");
  return tr("mkt.progressHint");
}
function progressPercent(status) {
  if (!status || !status.active) return null;
  if (typeof status.size === "number" && status.size > 0 && typeof status.downloaded === "number") {
    return Math.max(4, Math.min(96, Math.round(status.downloaded / status.size * 100)));
  }
  const m = /resolved (\d+), reused (\d+), downloaded (\d+), added (\d+)/.exec(status.lastLine || "");
  if (m && Number(m[1]) > 0) {
    const done = Number(m[2]) + Number(m[3]) + Number(m[4]);
    return Math.max(4, Math.min(96, Math.round(done / Number(m[1]) * 100)));
  }
  return null;
}
function Marketplace(props) {
  useEffect2(() => ensureCss(), []);
  const tr = typeof props.t === "function" ? props.t : lookup;
  const locale = tr("locale") === "en" ? "en" : "zh";
  const submitted = (props && props.submittedQuery) ?? "";
  const [category, setCategory] = useState2("");
  const [page, setPage] = useState2(1);
  const [prevSubmitted, setPrevSubmitted] = useState2(submitted);
  if (prevSubmitted !== submitted) {
    setPrevSubmitted(submitted);
    setPage(1);
  }
  const [items, setItems] = useState2([]);
  const [total, setTotal] = useState2(0);
  const [status, setStatus] = useState2("loading");
  const [err, setErr] = useState2("");
  const [sending, setSending] = useState2("");
  const [feedback, setFeedback] = useState2("");
  const [cats, setCats] = useState2(MARKET_CAT_FALLBACK);
  const [bootId, setBootId] = useState2("");
  const [liveStatus, setLiveStatus] = useState2(null);
  const [pendingRestart, setPendingRestart] = useState2("");
  const [restarting, setRestarting] = useState2(false);
  const install = installMarketPlugin;
  useEffect2(() => {
    let live = true;
    api("pluginCategories", {}).then((d) => {
      if (!live) return;
      const items2 = Array.isArray(d.items) ? d.items.filter((it) => it && it.key) : [];
      if (items2.length) setCats(items2);
    }).catch(() => {
    });
    api("pluginInstallStatus", {}).then((d) => {
      if (!live) return;
      if (d.boot) setBootId(d.boot);
    }).catch(() => {
    });
    api("config", {}).then((d) => {
      if (!live) return;
      if (typeof d.plazaKeepAlive === "boolean") plazaKeepAlive = d.plazaKeepAlive;
    }).catch(() => {
    });
    return () => {
      live = false;
    };
  }, []);
  useEffect2(() => {
    let live = true;
    const payload = { q: submitted, scope: "verified", category, sort: "stars", page, pageSize: 48 };
    const key = apiCacheKey("plugins", payload);
    const cached = apiCache.get(key);
    const hasFresh = cached && Date.now() - cached.at < API_CACHE_TTL_MS;
    if (page === 1 && hasFresh) {
      const d = cached.body;
      setItems(d.items || []);
      setTotal(Number(d.total) || 0);
      setStatus("ready");
      setErr("");
    } else if (page === 1) {
      setStatus("loading");
    }
    api("plugins", payload).then((d) => {
      if (!live) return;
      setItems((cur) => page === 1 ? d.items || [] : cur.concat(d.items || []));
      setTotal(Number(d.total) || 0);
      setStatus("ready");
      setErr("");
    }).catch((e) => {
      if (!live) return;
      if (page === 1 && !hasFresh) {
        setItems([]);
        setTotal(0);
        setStatus("error");
        setErr(e.message || String(e));
      }
    });
    return () => {
      live = false;
    };
  }, [submitted, category, page]);
  useEffect2(() => {
    if (!sending && !restarting) return;
    let live = true;
    const tick = () => {
      api("pluginInstallStatus", {}).then((d) => {
        if (!live) return;
        setLiveStatus(d);
        if (d.boot) setBootId((cur) => cur || d.boot);
      }).catch(() => {
      });
    };
    tick();
    const timer = setInterval(tick, 800);
    return () => {
      live = false;
      clearInterval(timer);
    };
  }, [sending, restarting]);
  const catLabelFor = (key) => {
    if (!key) return "";
    if (locale === "en" && MARKET_CAT_EN[key]) return MARKET_CAT_EN[key];
    const hit = cats.find((it) => it.key === key);
    return hit && hit.displayName || MARKET_CAT_FALLBACK.find((it) => it.key === key)?.displayName || key;
  };
  const detailHref = (plugin) => {
    const repo = String(plugin.repositoryUrl || "").trim();
    if (/^https:\/\/github\.com\//i.test(repo)) return repo;
    return "https://github.com/" + encodeURIComponent(plugin.owner) + "/" + encodeURIComponent(plugin.name);
  };
  const pct = sending ? progressPercent(liveStatus) : null;
  const startRestart = () => {
    if (restarting) return;
    setRestarting(true);
    setFeedback("");
    const previous = bootId;
    const deadline = Date.now() + 6e4;
    const awaitNewBoot = () => {
      const poll = () => {
        api("pluginInstallStatus", {}).then((d) => {
          if (typeof d.boot === "string" && previous && d.boot !== previous) {
            location.reload();
            return;
          }
          retry();
        }).catch(retry);
      };
      const retry = () => {
        if (Date.now() > deadline) {
          setRestarting(false);
          setFeedback(tr("mkt.restartTimeout"));
          return;
        }
        setTimeout(poll, 1500);
      };
      poll();
    };
    const requestRestart = (left) => {
      api("pluginRestart", {}).then(() => {
        awaitNewBoot();
      }).catch((e) => {
        const msg = e && e.message ? String(e.message) : String(e);
        if (/cannot restart while|HTTP 409/.test(msg) && left > 0) {
          setTimeout(() => requestRestart(left - 1), 1500);
          return;
        }
        if (/Failed to fetch|NetworkError|HTTP 5/i.test(msg)) {
          awaitNewBoot();
          return;
        }
        setRestarting(false);
        setFeedback(tr("mkt.restartFail", { m: msg }));
      });
    };
    requestRestart(10);
  };
  return h(
    I18nProvider,
    { t: tr },
    h(
      "div",
      { className: "sh-mkt" },
      h(
        "div",
        { className: "sh-mkt-filters" },
        h(Button3, {
          type: "button",
          size: "xs",
          variant: !category ? "secondary" : "ghost",
          onClick: () => {
            setCategory("");
            setPage(1);
          }
        }, tr("mkt.catAll")),
        cats.map((it) => h(Button3, {
          key: it.key,
          type: "button",
          size: "xs",
          variant: category === it.key ? "secondary" : "ghost",
          onClick: () => {
            setCategory(it.key);
            setPage(1);
          }
        }, catLabelFor(it.key)))
      ),
      status === "ready" ? h(
        "div",
        { className: "sh-mkt-results" },
        h("p", { className: "sh-mkt-summary" }, tr("mkt.repos", { n: total }))
      ) : null,
      sending ? h(
        "div",
        { className: "sh-mkt-progress" },
        h(
          "div",
          { className: "sh-mkt-progress-row" },
          h("span", { className: "sh-mkt-progress-text" }, progressCopy(liveStatus, tr)),
          pct != null ? h("span", { className: "sh-mkt-progress-pct" }, pct + "%") : null
        ),
        h(
          "div",
          { className: "sh-mkt-bar" },
          h("div", {
            className: "sh-mkt-bar-fill" + (pct == null ? " wave" : ""),
            style: pct != null ? { "--bar-pct": pct + "%" } : void 0
          })
        )
      ) : null,
      pendingRestart && !sending ? h(
        "div",
        { className: "sh-mkt-banner" },
        h("span", { className: "sh-mkt-banner-text" }, tr("mkt.restartBanner", { name: pendingRestart })),
        h(Button3, {
          type: "button",
          size: "sm",
          variant: "primary",
          loading: restarting,
          onClick: startRestart
        }, tr("mkt.restartNow"))
      ) : null,
      feedback ? h("p", { className: "sh-mkt-status left" }, feedback) : null,
      status === "loading" && page === 1 ? h("p", { className: "sh-mkt-status" }, tr("mkt.loading")) : null,
      status === "error" ? h("p", { className: "sh-mkt-status" }, tr("mkt.error", { m: err })) : null,
      status === "ready" && !items.length ? h("p", { className: "sh-mkt-status" }, tr("mkt.empty")) : null,
      items.length ? h(
        "div",
        { className: "sh-mkt-grid" },
        items.map((plugin) => {
          const id = plugin.fullName || plugin.owner + "/" + plugin.name;
          const verified = plugin.installability === "verified";
          const installed = !!plugin.installed;
          const busy = !!sending;
          return h(
            "article",
            { key: id, className: "sh-mkt-card" + (installed ? " on" : "") },
            h(
              "div",
              { className: "sh-mkt-head" },
              h(MarketAvatar, { plugin }),
              h(
                "div",
                { className: "sh-mkt-head-main" },
                h(
                  "div",
                  { className: "sh-mkt-top" },
                  h("p", { className: "sh-mkt-owner" }, plugin.owner),
                  h(
                    "span",
                    { className: "sh-mkt-badge" + (installed ? " on" : verified ? " ok" : "") },
                    installed ? tr("mkt.installed") : verified ? tr("mkt.verified") : tr("mkt.unsupported")
                  )
                ),
                h("div", { className: "sh-mkt-name" }, plugin.name)
              )
            ),
            h("p", { className: "sh-mkt-desc" }, plugin.description || tr("mkt.noDesc")),
            h(
              "div",
              { className: "sh-mkt-meta" },
              h("span", null, catLabelFor(plugin.categoryKey) || plugin.categoryKey),
              h("span", { className: "sh-mkt-stars" }, h(StarIcon), String(Number(plugin.stars) || 0))
            ),
            h(
              "div",
              { className: "sh-mkt-actions" },
              h("a", { className: "sh-mkt-details", href: detailHref(plugin), target: "_blank", rel: "noreferrer" }, tr("mkt.details")),
              h(Button3, {
                type: "button",
                size: "sm",
                variant: installed ? "ghost" : "primary",
                disabled: !verified || busy || restarting || installed,
                loading: sending === id,
                onClick: () => {
                  setSending(id);
                  setFeedback("");
                  setPendingRestart("");
                  setLiveStatus(null);
                  install(plugin).then(
                    () => {
                      setItems((cur) => cur.map((it) => {
                        const iid = it.fullName || it.owner + "/" + it.name;
                        return iid === id ? { ...it, installed: true } : it;
                      }));
                      setPendingRestart(plugin.fullName || id);
                    },
                    (e) => setFeedback(e.message || String(e))
                  ).finally(() => setSending(""));
                }
              }, !verified ? tr("mkt.unsupported") : installed ? tr("mkt.installed") : tr("mkt.install"))
            )
          );
        })
      ) : null,
      status === "ready" && items.length < total ? h(
        Button3,
        {
          type: "button",
          variant: "outline",
          className: "sh-mkt-more",
          onClick: () => setPage((n) => n + 1)
        },
        h("span", null, tr("mkt.more")),
        h("span", { className: "sh-mkt-more-left" }, tr("mkt.moreLeft", { n: Math.max(0, total - items.length) })),
        h(ChevronDown)
      ) : null
    )
  );
}
var SKILL_CAT_KEYS = [
  "office-efficiency",
  "content-creation",
  "dev-programming",
  "data-analysis",
  "design-media",
  "ai-agent",
  "knowledge-management",
  "business-ops",
  "education",
  "professional",
  "it-ops-security",
  "life-service"
];
function PlazaIcon() {
  return h(
    "svg",
    { viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true" },
    h("rect", { x: "1.75", y: "1.75", width: "5.5", height: "5.5", rx: "1.2", stroke: "currentColor", strokeWidth: "1.4" }),
    h("rect", { x: "8.75", y: "1.75", width: "5.5", height: "5.5", rx: "1.2", stroke: "currentColor", strokeWidth: "1.4" }),
    h("rect", { x: "1.75", y: "8.75", width: "5.5", height: "5.5", rx: "1.2", stroke: "currentColor", strokeWidth: "1.4" }),
    h("rect", { x: "8.75", y: "8.75", width: "5.5", height: "5.5", rx: "1.2", stroke: "currentColor", strokeWidth: "1.4" })
  );
}
function SkillPlaza(props) {
  const tr = useTr();
  const pageSize = 48;
  const submitted = (props && props.submittedQuery) ?? "";
  const [category, setCategory] = useState2("");
  const [page, setPage] = useState2(1);
  const [prevSubmitted, setPrevSubmitted] = useState2(submitted);
  if (prevSubmitted !== submitted) {
    setPrevSubmitted(submitted);
    setPage(1);
  }
  const [items, setItems] = useState2([]);
  const [total, setTotal] = useState2(0);
  const [hasMore, setHasMore] = useState2(false);
  const [fallback, setFallback] = useState2(false);
  const [status, setStatus] = useState2("loading");
  const [err, setErr] = useState2("");
  const [open, setOpen] = useState2(null);
  const applySearchBody = (d, mode) => {
    const next = d.items || [];
    const isFallback = !!d.fallback;
    setFallback(isFallback);
    const nextTotal = isFallback ? next.length : Number(d.total) || 0;
    if (mode === "replace") setItems(next);
    else setItems((cur) => cur.concat(next));
    setTotal(nextTotal);
    setHasMore(isFallback ? false : !!d.hasMore);
    setStatus("ready");
    setErr("");
    return next;
  };
  useEffect2(() => {
    let live = true;
    const payload = { query: submitted, category, limit: pageSize, offset: (page - 1) * pageSize };
    const key = apiCacheKey("search", payload);
    const cached = apiCache.get(key);
    const hasFresh = cached && Date.now() - cached.at < API_CACHE_TTL_MS;
    if (page === 1 && hasFresh) {
      applySearchBody(cached.body, "replace");
    } else if (page === 1) {
      setStatus("loading");
    }
    api("search", payload).then((d) => {
      if (!live) return;
      const next = applySearchBody(d, page === 1 ? "replace" : "append");
      const slugs = next.map((it) => it.slug).filter(Boolean);
      if (slugs.length) {
        api("ratings", { slugs }, { skipCache: true }).then((r) => {
          if (!live || !r || !r.ratings) return;
          setItems((cur) => cur.map((it) => {
            const score = r.ratings[it.slug];
            return score != null ? { ...it, rating: score } : it;
          }));
        }).catch(() => {
        });
      }
    }).catch((e) => {
      if (!live) return;
      if (page === 1 && !hasFresh) {
        setItems([]);
        setTotal(0);
        setHasMore(false);
        setFallback(false);
        setStatus("error");
        setErr(e.message || String(e));
      }
    });
    return () => {
      live = false;
    };
  }, [submitted, category, page]);
  const mark = (item, installed) => {
    setItems((cur) => cur.map((it) => it.slug === item.slug ? { ...it, installed } : it));
    setOpen((cur) => cur && cur.slug === item.slug ? { ...cur, installed } : cur);
  };
  const remaining = fallback ? 0 : Math.max(0, total - items.length);
  const summaryText = fallback ? tr("search.fallback") : tr("search.hint", { n: total || items.length });
  return h(
    "div",
    { className: "sh-mkt" },
    h(
      "div",
      { className: "sh-mkt-filters" },
      h(Button3, {
        type: "button",
        size: "xs",
        variant: !category ? "secondary" : "ghost",
        onClick: () => {
          setCategory("");
          setPage(1);
        }
      }, tr("mkt.catAll")),
      SKILL_CAT_KEYS.map((key) => h(Button3, {
        key,
        type: "button",
        size: "xs",
        variant: category === key ? "secondary" : "ghost",
        onClick: () => {
          setCategory(key);
          setPage(1);
        }
      }, tr("cat." + key)))
    ),
    status === "ready" ? h(
      "div",
      { className: "sh-mkt-results" },
      h("p", { className: "sh-mkt-summary" }, summaryText)
    ) : null,
    status === "loading" && page === 1 ? h("p", { className: "sh-mkt-status" }, tr("mkt.loading")) : null,
    status === "error" ? h("p", { className: "sh-mkt-status" }, tr("mkt.error", { m: err })) : null,
    status === "ready" && !items.length ? h("p", { className: "sh-mkt-status" }, tr("search.empty")) : null,
    items.length ? h(Cards, { items, onOpen: setOpen }) : null,
    status === "ready" && !fallback && (hasMore || remaining > 0) ? h(
      Button3,
      {
        type: "button",
        variant: "outline",
        className: "sh-mkt-more",
        onClick: () => setPage((n) => n + 1)
      },
      h("span", null, tr("mkt.more")),
      remaining ? h("span", { className: "sh-mkt-more-left" }, tr("mkt.moreLeft", { n: remaining })) : null,
      h(ChevronDown)
    ) : null,
    open ? h(Drawer, {
      item: open,
      onClose: () => setOpen(null),
      onInstalled: (it) => mark(it, true),
      onUninstalled: (it) => mark(it, false)
    }) : null
  );
}
function insertGesture(field, gesture) {
  const token = gesture.endsWith(" ") ? gesture : gesture + " ";
  const start = field.selectionStart ?? field.value.length;
  const end = field.selectionEnd ?? start;
  const next = field.value.slice(0, start) + token + field.value.slice(end);
  const proto = typeof HTMLTextAreaElement === "function" && field instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : typeof HTMLInputElement === "function" && field instanceof HTMLInputElement ? HTMLInputElement.prototype : Object.getPrototypeOf(field);
  const setter = proto ? Object.getOwnPropertyDescriptor(proto, "value")?.set : void 0;
  if (setter) setter.call(field, next);
  else field.value = next;
  const caret = start + token.length;
  field.setSelectionRange?.(caret, caret);
  const Input = typeof InputEvent === "function" ? InputEvent : Event;
  field.dispatchEvent(new Input("input", { bubbles: true, inputType: "insertText", data: token }));
  field.focus?.();
  return field.value.includes(token.trim());
}
function findComposer() {
  if (typeof document === "undefined") return null;
  return document.querySelector(
    "[data-composer-card] textarea, [data-composer-seat] textarea, textarea[data-phase], textarea[placeholder]"
  );
}
function isBlankSession() {
  if (typeof document === "undefined") return true;
  const header = document.querySelector('[data-slot="conversation.session.header"]');
  const title = header && header.textContent || "";
  if (/新会话|New session|Untitled/i.test(title)) return true;
  const scroll = document.querySelector("[data-conversation-scroll]");
  if (!scroll) return true;
  return (scroll.textContent || "").trim().length < 40;
}
function clickPreset(id) {
  if (typeof document === "undefined") return false;
  const chip = document.querySelector('button[title*="Agent"], button[title*="预设"]');
  if (!(chip instanceof HTMLElement)) return false;
  chip.click();
  const wanted = id === "expert-mode" ? /专家模式|Expert Mode/ : null;
  if (!wanted) return false;
  const items = Array.from(document.querySelectorAll('[role="menuitem"]'));
  const match = items.find((el) => wanted.test(el.textContent || ""));
  if (match instanceof HTMLElement) {
    match.click();
    return true;
  }
  chip.click();
  return false;
}
function ExpertPanel({ query = "", onClose }) {
  const tr = useTr();
  const [category, setCategory] = useState2("");
  const [items, setItems] = useState2([]);
  const [categories, setCategories] = useState2([]);
  const [status, setStatus] = useState2("loading");
  const [err, setErr] = useState2("");
  const [busy, setBusy] = useState2("");
  const [feedback, setFeedback] = useState2("");
  useEffect2(() => {
    let live = true;
    const key = apiCacheKey("experts", {});
    const cached = apiCache.get(key);
    const hasFresh = cached && Date.now() - cached.at < API_CACHE_TTL_MS;
    if (hasFresh) {
      const d = cached.body;
      setItems(Array.isArray(d.items) ? d.items : []);
      setCategories(Array.isArray(d.categories) ? d.categories : []);
      setStatus("ready");
      setErr("");
    }
    api("experts", {}).then((d) => {
      if (!live) return;
      setItems(Array.isArray(d.items) ? d.items : []);
      setCategories(Array.isArray(d.categories) ? d.categories : []);
      setStatus("ready");
      setErr("");
    }).catch((e) => {
      if (!live) return;
      if (hasFresh) return;
      setItems([]);
      setCategories([]);
      setStatus("error");
      setErr(e.message || String(e));
    });
    return () => {
      live = false;
    };
  }, []);
  const q = String(query || "").trim().toLowerCase();
  const filtered = items.filter((it) => {
    if (category && it.category !== category) return false;
    if (!q) return true;
    return `${it.name || ""} ${it.description || ""} ${it.id || ""}`.toLowerCase().includes(q);
  });
  async function summon(item) {
    if (busy) return;
    setBusy(item.id);
    setFeedback("");
    try {
      const blank = isBlankSession();
      const sessionId = currentSessionId(plazaSessions);
      const result = await api("catalogSummon", { id: item.id, sessionState: blank ? "blank" : "locked", sessionId });
      const field = findComposer();
      const wrote = field instanceof HTMLTextAreaElement || field instanceof HTMLInputElement ? insertGesture(field, result.gesture) : false;
      if (result.stagePreset === "expert-mode") clickPreset("expert-mode");
      setItems((cur) => cur.map((it) => it.id === item.id ? { ...it, installed: true } : it));
      if (!wrote) {
        setFeedback(tr("expert.gestureReady", { g: result.gesture }));
      } else {
        onClose?.();
      }
    } catch (e) {
      setFeedback(e.message || String(e));
    } finally {
      setBusy("");
    }
  }
  return h(
    "div",
    { className: "sh-mkt" },
    h(
      "div",
      { className: "sh-mkt-filters" },
      h(Button3, {
        type: "button",
        size: "xs",
        variant: !category ? "secondary" : "ghost",
        onClick: () => setCategory("")
      }, tr("mkt.catAll")),
      categories.map((it) => h(Button3, {
        key: it.id,
        type: "button",
        size: "xs",
        variant: category === it.id ? "secondary" : "ghost",
        onClick: () => setCategory(it.id)
      }, it.title))
    ),
    busy ? h("p", { className: "sh-mkt-status left" }, tr("expert.summoning")) : null,
    feedback ? h("p", { className: "sh-mkt-status left" }, feedback) : null,
    status === "loading" ? h("p", { className: "sh-mkt-status" }, tr("mkt.loading")) : null,
    status === "error" ? h("p", { className: "sh-mkt-status" }, tr("mkt.error", { m: err })) : null,
    status === "ready" && !filtered.length ? h("p", { className: "sh-mkt-status" }, tr("expert.empty")) : null,
    filtered.length ? h(Cards, { items: filtered, onOpen: summon }) : null
  );
}
function ConnectorPanel({ query = "" }) {
  const tr = useTr();
  const [category, setCategory] = useState2("");
  const [items, setItems] = useState2([]);
  const [categories, setCategories] = useState2([]);
  const [status, setStatus] = useState2("loading");
  const [err, setErr] = useState2("");
  const [busy, setBusy] = useState2("");
  const [feedback, setFeedback] = useState2("");
  useEffect2(() => {
    let live = true;
    const key = apiCacheKey("connectors", {});
    const cached = apiCache.get(key);
    const hasFresh = cached && Date.now() - cached.at < API_CACHE_TTL_MS;
    if (hasFresh) {
      const d = cached.body;
      setItems(Array.isArray(d.items) ? d.items : []);
      setCategories(Array.isArray(d.categories) ? d.categories : []);
      setStatus("ready");
      setErr("");
    }
    api("connectors", {}).then((d) => {
      if (!live) return;
      setItems(Array.isArray(d.items) ? d.items : []);
      setCategories(Array.isArray(d.categories) ? d.categories : []);
      setStatus("ready");
      setErr("");
    }).catch((e) => {
      if (!live) return;
      if (hasFresh) return;
      setItems([]);
      setCategories([]);
      setStatus("error");
      setErr(e.message || String(e));
    });
    return () => {
      live = false;
    };
  }, []);
  const q = String(query || "").trim().toLowerCase();
  const filtered = items.filter((it) => {
    if (category && it.category !== category) return false;
    if (!q) return true;
    return `${it.name || ""} ${it.description || ""} ${it.id || ""}`.toLowerCase().includes(q);
  });
  async function toggle(item) {
    if (item.installable === false || item.sourceKind === "marketplace") {
      setFeedback(tr("connector.installLater"));
      return;
    }
    if (busy) return;
    setBusy(item.id);
    setFeedback("");
    try {
      if (item.installed) await api("catalogUninstall", { id: item.id });
      else await api("catalogInstall", { id: item.id });
      setItems((cur) => cur.map((it) => it.id === item.id ? { ...it, installed: !item.installed } : it));
      setFeedback(tr("connector.restartHint"));
    } catch (e) {
      setFeedback(e.message || String(e));
    } finally {
      setBusy("");
    }
  }
  return h(
    "div",
    { className: "sh-mkt" },
    h(
      "div",
      { className: "sh-mkt-filters" },
      h(Button3, {
        type: "button",
        size: "xs",
        variant: !category ? "secondary" : "ghost",
        onClick: () => setCategory("")
      }, tr("mkt.catAll")),
      categories.map((it) => h(Button3, {
        key: it.id,
        type: "button",
        size: "xs",
        variant: category === it.id ? "secondary" : "ghost",
        onClick: () => setCategory(it.id)
      }, it.title))
    ),
    busy ? h("p", { className: "sh-mkt-status left" }, tr("connector.installing")) : null,
    feedback ? h("p", { className: "sh-mkt-status left" }, feedback) : null,
    status === "loading" ? h("p", { className: "sh-mkt-status" }, tr("mkt.loading")) : null,
    status === "error" ? h("p", { className: "sh-mkt-status" }, tr("mkt.error", { m: err })) : null,
    status === "ready" && !filtered.length ? h("p", { className: "sh-mkt-status" }, tr("connector.empty")) : null,
    filtered.length ? h(Cards, { items: filtered, onOpen: toggle }) : null
  );
}
var STAGE_ID = "omnimux-market";
var PRODUCT_STAGE_EVENT2 = "dsh-product-stage";
function conversationBox() {
  if (typeof window === "undefined") return null;
  let left = 0;
  try {
    const center = document.querySelector('.dshDesktopCenterSurface, [class*="centerCol"], [class*="CenterCol"], [class*="mainContent"], main');
    if (center) {
      const r = center.getBoundingClientRect();
      if (r.left > 0 && r.left < window.innerWidth - 100) {
        left = r.left;
      }
    }
    if (!left) {
      const sidebar = document.querySelector('.dshDesktopSidebarSurface, [class*="sidebarCol"], [class*="SidebarSurface"], [class*="SidebarRoot"]') || document.querySelector(".sh-plaza-wrap")?.closest('.dshDesktopSidebarSurface, [class*="sidebarCol"], [class*="SidebarSurface"], aside, nav');
      if (sidebar) {
        const r = sidebar.getBoundingClientRect();
        if (r.right > 0 && r.right < window.innerWidth - 100) {
          left = r.right;
        }
      }
    }
    if (!left) {
      const btn = document.querySelector(".sh-plaza-trigger");
      if (btn) {
        let p = btn.parentElement;
        while (p && p !== document.body) {
          const r = p.getBoundingClientRect();
          if (r.top <= 20 && r.left <= 10 && r.right >= 50 && r.right < window.innerWidth - 100) {
            left = r.right;
          }
          p = p.parentElement;
        }
      }
    }
  } catch {
  }
  if (!left || left <= 0) {
    const isCollapsed = document.querySelector('[data-sidebar-collapsed="true"], [data-collapsed="true"]') !== null;
    left = isCollapsed ? 56 : 280;
  }
  return {
    top: 0,
    left: Math.round(left),
    width: Math.max(100, Math.round(window.innerWidth - left)),
    height: Math.max(100, Math.round(window.innerHeight))
  };
}
function useConversationBox(active) {
  const [box, setBox] = useState2(null);
  const layout = React.useLayoutEffect || useEffect2;
  layout(() => {
    if (!active) {
      setBox(null);
      return;
    }
    const update = () => setBox(conversationBox());
    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
    };
  }, [active]);
  return box;
}
function PlazaTopSearch({ query, onQuery, onSubmit, onClear, placeholder }) {
  return h(
    "form",
    {
      className: "sh-plaza-search",
      onSubmit: (e) => {
        e.preventDefault();
        if (onSubmit) onSubmit();
      }
    },
    h(SearchField3, {
      stretch: true,
      value: query,
      debounceMs: 0,
      placeholder,
      onValueChange: onQuery,
      onClear: onClear || (() => onQuery(""))
    })
  );
}
function PlazaView({ t, onClose, box, active }) {
  useEffect2(() => {
    ensureCss();
    if (!active) return void 0;
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      e.preventDefault();
      onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, active]);
  const tr = typeof t === "function" ? t : lookup;
  const [tab, setTab] = useState2("plugins");
  const [tabQueries, setTabQueries] = useState2({
    plugins: "",
    skills: "",
    experts: "",
    connectors: ""
  });
  const [submittedQueries, setSubmittedQueries] = useState2({
    plugins: "",
    skills: ""
  });
  const currentQuery = tabQueries[tab] || "";
  const handleQueryChange = (val) => {
    setTabQueries((prev) => ({ ...prev, [tab]: val }));
  };
  const handleSubmit = () => {
    if (tab === "plugins" || tab === "skills") {
      setSubmittedQueries((prev) => ({ ...prev, [tab]: (tabQueries[tab] || "").trim() }));
    }
  };
  const handleClear = () => {
    setTabQueries((prev) => ({ ...prev, [tab]: "" }));
    if (tab === "plugins" || tab === "skills") {
      setSubmittedQueries((prev) => ({ ...prev, [tab]: "" }));
    }
  };
  const placeholder = tab === "plugins" ? tr("mkt.searchPlaceholder") : tab === "skills" ? tr("mkt.searchPlaceholder") : tab === "experts" ? tr("expert.searchPlaceholder") : tr("connector.searchPlaceholder");
  return h(
    I18nProvider,
    { t: tr },
    h(
      "div",
      {
        className: "sh-plaza-page",
        role: "dialog",
        "aria-modal": "false",
        "aria-label": tr("plaza.title"),
        style: {
          "--stage-top": box.top + "px",
          "--stage-left": box.left + "px",
          "--stage-width": box.width + "px",
          "--stage-height": box.height + "px"
        }
      },
      h(
        "div",
        { className: "sh-plaza-top" },
        h(
          "div",
          { className: "sh-plaza-tabs", role: "tablist" },
          h(Button3, {
            type: "button",
            role: "tab",
            variant: "ghost",
            size: "sm",
            className: "sh-plaza-tab" + (tab === "plugins" ? " on" : ""),
            "aria-selected": tab === "plugins",
            onClick: () => setTab("plugins")
          }, tr("plaza.plugins")),
          h(Button3, {
            type: "button",
            role: "tab",
            variant: "ghost",
            size: "sm",
            className: "sh-plaza-tab" + (tab === "skills" ? " on" : ""),
            "aria-selected": tab === "skills",
            onClick: () => setTab("skills")
          }, tr("plaza.skills")),
          h(Button3, {
            type: "button",
            role: "tab",
            variant: "ghost",
            size: "sm",
            className: "sh-plaza-tab" + (tab === "experts" ? " on" : ""),
            "aria-selected": tab === "experts",
            onClick: () => setTab("experts")
          }, tr("plaza.experts")),
          h(Button3, {
            type: "button",
            role: "tab",
            variant: "ghost",
            size: "sm",
            className: "sh-plaza-tab" + (tab === "connectors" ? " on" : ""),
            "aria-selected": tab === "connectors",
            onClick: () => setTab("connectors")
          }, tr("plaza.connectors"))
        ),
        h(PlazaTopSearch, {
          query: currentQuery,
          onQuery: handleQueryChange,
          onSubmit: handleSubmit,
          onClear: handleClear,
          placeholder
        }),
        h(
          "span",
          { className: "sh-plaza-close" },
          h(IconButton3, {
            variant: "ghost",
            onClick: onClose,
            "aria-label": tr("plaza.back"),
            title: tr("plaza.back")
          }, h(IconCloseOutline162))
        )
      ),
      h(
        "div",
        { className: "sh-plaza-body" },
        tab === "plugins" ? h(Marketplace, { t: tr, query: tabQueries.plugins, submittedQuery: submittedQueries.plugins }) : tab === "skills" ? h(SkillPlaza, { query: tabQueries.skills, submittedQuery: submittedQueries.skills }) : tab === "experts" ? h(ExpertPanel, { query: tabQueries.experts, onClose }) : h(ConnectorPanel, { query: tabQueries.connectors })
      )
    )
  );
}
function sessionListCurrent(sessions) {
  try {
    return sessions && sessions.list && typeof sessions.list.getSnapshot === "function" ? sessions.list.getSnapshot().current : void 0;
  } catch {
    return void 0;
  }
}
function PlazaAction({ wide, sessions, t }) {
  useEffect2(() => ensureCss(), []);
  const tr = typeof t === "function" ? t : lookup;
  const [open, setOpen] = useState2(false);
  const [everOpened, setEverOpened] = useState2(false);
  const [hint, setHint] = useState2("");
  const close = React.useCallback(() => setOpen(false), []);
  const box = useConversationBox(open || everOpened);
  if (open && !everOpened) setEverOpened(true);
  useEffect2(() => {
    if (!open) return;
    api("config", {}).then((d) => {
      if (typeof d.plazaKeepAlive === "boolean") plazaKeepAlive = d.plazaKeepAlive;
    }).catch(() => {
    });
  }, [open]);
  useEffect2(() => {
    const claim = () => {
      try {
        if (window.__omnimuxStage && typeof window.__omnimuxStage.claim === "function") {
          window.__omnimuxStage.claim(STAGE_ID);
        } else {
          window.dispatchEvent(new CustomEvent(PRODUCT_STAGE_EVENT2, { detail: { id: STAGE_ID } }));
          document.documentElement.dataset.dshProductStage = STAGE_ID;
        }
      } catch {
      }
    };
    const release = () => {
      try {
        if (window.__omnimuxStage && typeof window.__omnimuxStage.release === "function") {
          window.__omnimuxStage.release(STAGE_ID);
        } else {
          if (document.documentElement.dataset.dshProductStage === STAGE_ID) {
            delete document.documentElement.dataset.dshProductStage;
          }
          window.dispatchEvent(new CustomEvent(PRODUCT_STAGE_EVENT2, { detail: { id: "" } }));
        }
      } catch {
      }
    };
    if (open) claim();
    else release();
    return () => {
      if (open) release();
    };
  }, [open]);
  useEffect2(() => {
    const onStage = (e) => {
      const id = e instanceof CustomEvent ? e.detail?.id : void 0;
      if (id && id !== STAGE_ID && open) {
        close();
      }
    };
    window.addEventListener(PRODUCT_STAGE_EVENT2, onStage);
    return () => window.removeEventListener(PRODUCT_STAGE_EVENT2, onStage);
  }, [open, close]);
  useEffect2(() => {
    if (!open) return;
    const list = sessions && sessions.list;
    if (!list || typeof list.subscribe !== "function") return;
    let last = sessionListCurrent(sessions);
    return list.subscribe(() => {
      const now = sessionListCurrent(sessions);
      if (now === last) return;
      last = now;
      close();
    });
  }, [open, sessions, close]);
  useEffect2(() => {
    if (!open) return;
    const onPointer = (e) => {
      const node = e.target;
      if (!node || typeof node.closest !== "function") return;
      if (node.closest(".sh-plaza-page, .sh-plaza-wrap, .sh-overlay, .sh-mkt, .sh-modal")) return;
      close();
    };
    document.addEventListener("pointerdown", onPointer, true);
    return () => document.removeEventListener("pointerdown", onPointer, true);
  }, [open, close]);
  const keep = everOpened;
  const show = open && box;
  const panel = typeof document !== "undefined" && box && (keep || show) ? createPortal(
    h("div", {
      className: "sh-plaza-view",
      "data-active": open ? "true" : "false",
      "aria-hidden": open ? void 0 : "true",
      style: {
        display: open ? void 0 : "none"
      }
    }, h(PlazaView, { t: tr, onClose: close, box, active: open })),
    document.body
  ) : null;
  return h(
    I18nProvider,
    { t: tr },
    h(
      "div",
      { className: "sh-plaza-wrap" + (wide ? "" : " rail") },
      h(Button3, {
        type: "button",
        variant: "ghost",
        className: "sh-plaza-trigger" + (open ? " on" : ""),
        "aria-label": tr("plaza.title"),
        "aria-expanded": open,
        leadingIcon: h(PlazaIcon),
        onClick: () => {
          if (open) {
            close();
            setHint("");
            return;
          }
          setOpen(true);
          setHint("");
        }
      }, wide ? tr("plaza.title") : null),
      hint ? h(Toast, { text: hint, onDone: () => setHint("") }) : null,
      panel
    )
  );
}
var inject = ["slots", "sessions"];
function registerSlot(slots, options, component) {
  const next = { ...options };
  if (next.id == null && next.key != null) next.id = String(next.key);
  if (next.key == null && next.id != null) next.key = next.id;
  return slots.register(next, component);
}
function apply(ctx) {
  const slots = ctx.slots;
  const sessions = ctx.sessions;
  plazaSessions = sessions;
  if (!slots) return;
  ctx.inject(["locale"], (c) => {
    if (!c.locale || typeof c.locale.register !== "function") return;
    c.effect(() => {
      try {
        return c.locale.register("omnimux-market", { zh: ZH, en: EN });
      } catch {
        return () => {
        };
      }
    }, "omnimux-market-locale");
  });
  ctx.effect(() => ensureCss(), "omnimux-market-style");
  slots.inject("tool.call.toolview", () => registerSlot(
    slots,
    { name: "tool.call.toolview", key: "skillhub_search", locale: "omnimux-market" },
    SearchToolView
  ));
  slots.inject("tool.call.toolview", () => registerSlot(
    slots,
    { name: "tool.call.toolview", key: "plaza_search", locale: "omnimux-market" },
    PlazaSearchToolView
  ));
  slots.inject("tool.call.toolview", () => registerSlot(
    slots,
    { name: "tool.call.toolview", key: "skillhub_list", locale: "omnimux-market" },
    ListToolView
  ));
  slots.inject("settings.plugin.item", () => registerSlot(
    slots,
    { name: "settings.plugin.item", key: "omnimux-market", locale: "omnimux-market" },
    ConfigCard
  ));
  slots.inject("sidebar.footer.action", () => registerSlot(
    slots,
    { name: "sidebar.footer.action", id: "omnimux-market-plaza", order: 8, label: () => lookup("plaza.title"), locale: "omnimux-market" },
    function PlazaEntry(actionProps) {
      return h(PlazaAction, { ...actionProps, sessions });
    }
  ));
}
module.exports = { inject, apply };

    return module.exports;
  },
});
