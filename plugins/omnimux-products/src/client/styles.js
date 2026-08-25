export const STYLES_ID = 'omnimux-products-styles'

export const PRODUCTS_CSS = `
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
  -webkit-app-region: no-drag;
}
.omnimux-products-stage[data-visible="false"] {
  display: none;
  pointer-events: none;
}
.omnimux-products-stage-header {
  flex: none;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 20px;
  -webkit-app-region: no-drag;
}
.omnimux-products-stage-heading { flex: 1; min-width: 0; }
.omnimux-products-stage-title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 32px;
}
.omnimux-products-stage-subtitle {
  margin: 0;
  font-size: 13px;
  line-height: 20px;
  color: var(--dsw-alias-label-secondary);
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
`

export function injectProductsStyles() {
  if (typeof document === 'undefined') return
  if (document.getElementById(STYLES_ID)) return
  const styleNode = document.createElement('style')
  styleNode.id = STYLES_ID
  styleNode.textContent = PRODUCTS_CSS
  document.head.appendChild(styleNode)
}
