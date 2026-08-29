export const STYLES_ID = 'omnimux-clip-stage-styles'

export const CLIP_CSS = `
.omnimux-clip-stage {
  position: fixed;
  z-index: 250;
  top: var(--stage-top, 0px);
  left: var(--stage-left, 56px);
  width: var(--stage-width, calc(100vw - 56px));
  height: var(--stage-height, 100vh);
  min-width: 320px;
  min-height: 240px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: var(--dsw-alias-bg-base, #111113);
  color: var(--dsw-alias-label-primary, #ffffff);
  overflow: hidden;
  pointer-events: auto;
  -webkit-app-region: no-drag;
  isolation: isolate;
  contain: layout paint;
}
.omnimux-clip-stage[data-visible="false"] {
  display: none !important;
  pointer-events: none !important;
}
.omnimux-clip-stage[data-clip-mode="canvas"] {
  position: absolute;
  inset: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  z-index: 20;
}
.omnimux-clip-stage[data-clip-mode="canvas"][data-visible="true"] {
  display: flex !important;
  pointer-events: auto !important;
}
html:not([data-dsh-product-stage]) .omnimux-clip-stage[data-clip-mode="canvas"][data-visible="true"] {
  display: flex !important;
  pointer-events: auto !important;
}
/* exempt-ui08: clip 的 stage-header 是画布内绝对定位的浮层操作区（top/right 8px），
   不是一级 Stage 页面标题栏；其 heading 在 standalone/canvas 两种模式下均 display:none。
   依 docs/contracts/openreel-vendor-contract.md，此处保持宿主外壳原形态，不套 PageHeader。 */
.omnimux-clip-stage[data-clip-mode="canvas"] .omnimux-clip-stage-heading { /* exempt-ui08: 画布内浮层操作区标题，非页面标题栏 */
  display: none !important;
}
/* canvas 模式下右段被顶到最右，会被浮层关闭按钮压住，同样留出 64px 安全区 */
.omnimux-clip-stage[data-clip-mode="canvas"] .openreel-studio-root > * header,
.omnimux-clip-stage[data-clip-mode="canvas"] .openreel-studio-root header:first-of-type {
  padding-right: 64px;
}
.omnimux-clip-stage-header, /* exempt-ui08: 画布内浮层操作区，非页面标题栏 */
.omnimux-clip-stage[data-clip-mode="standalone"] .omnimux-clip-stage-header, /* exempt-ui08: 同上 */
.omnimux-clip-stage[data-clip-mode="canvas"] .omnimux-clip-stage-header { /* exempt-ui08: 同上 */
  position: absolute;
  top: 8px;
  right: 8px;
  left: auto;
  z-index: 40;
  width: auto;
  height: auto;
  padding: 0;
  border: none;
  background: transparent;
  pointer-events: none;
  -webkit-app-region: no-drag;
}
.omnimux-clip-stage-heading, /* exempt-ui08: 画布内浮层操作区标题，非页面标题栏 */
.omnimux-clip-stage-icon-btn,
.omnimux-clip-stage-save-btn,
.omnimux-clip-stage-save-status,
.omnimux-clip-stage[data-clip-mode="standalone"] .omnimux-clip-stage-heading, /* exempt-ui08: 同上 */
.omnimux-clip-stage[data-clip-mode="standalone"] .omnimux-clip-stage-icon-btn,
.omnimux-clip-stage[data-clip-mode="standalone"] .omnimux-clip-stage-save-btn,
.omnimux-clip-stage[data-clip-mode="standalone"] .omnimux-clip-stage-save-status {
  display: none !important;
}
.omnimux-clip-stage-body {
  flex: 1;
  min-height: 0;
  min-width: 0;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.omnimux-clip-stage-actions,
.omnimux-clip-stage[data-clip-mode="standalone"] .omnimux-clip-stage-actions {
  pointer-events: auto;
  flex: none;
  display: flex;
  align-items: center;
  gap: 8px;
  height: 32px;
}
.omnimux-clip-stage-close-btn,
.omnimux-clip-stage[data-clip-mode="standalone"] .omnimux-clip-stage-close-btn {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: var(--dsw-alias-bg-elevated, rgba(22, 22, 24, 0.92));
  border: 1px solid var(--dsw-alias-border-subtle, rgba(255, 255, 255, 0.16));
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--dsw-alias-label-secondary, rgba(255, 255, 255, 0.7));
  cursor: pointer;
  transition: color 150ms ease, background-color 150ms ease, border-color 150ms ease;
}
.omnimux-clip-stage-close-btn:hover,
.omnimux-clip-stage[data-clip-mode="standalone"] .omnimux-clip-stage-close-btn:hover {
  color: var(--dsw-alias-label-primary, #ffffff);
  background: var(--dsw-alias-interactive-bg-hover, rgba(255, 255, 255, 0.1));
  border-color: var(--dsw-alias-border-l3, rgba(255, 255, 255, 0.25));
}
.openreel-studio-root > * header,
.openreel-studio-root header:first-of-type,
.omnimux-clip-stage[data-clip-mode="standalone"] .openreel-studio-root > * header,
.omnimux-clip-stage[data-clip-mode="standalone"] .openreel-studio-root header:first-of-type {
  padding-right: 64px;
}
.omnimux-clip-stage-save-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 32px;
  padding: 0 12px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  box-sizing: border-box;
  cursor: pointer;
  background: var(--dsw-alias-bg-layer-1, rgba(255, 255, 255, 0.06));
  border: 1px solid var(--dsw-alias-border-l2, rgba(255, 255, 255, 0.14));
  color: var(--dsw-alias-label-primary, #ffffff);
  transition: background-color 150ms ease, border-color 150ms ease, opacity 150ms ease;
  user-select: none;
}
.omnimux-clip-stage-save-btn:hover:not(:disabled) {
  background: var(--dsw-alias-interactive-bg-hover, rgba(255, 255, 255, 0.1));
  border-color: var(--dsw-alias-border-l3, rgba(255, 255, 255, 0.22));
}
.omnimux-clip-stage-save-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.omnimux-clip-stage-close-btn {
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: var(--dsw-alias-label-secondary, rgba(255, 255, 255, 0.65));
  cursor: pointer;
  transition: color 150ms ease, background-color 150ms ease;
}
.omnimux-clip-stage-close-btn:hover {
  color: var(--dsw-alias-label-primary, #ffffff);
  background: var(--dsw-alias-interactive-bg-hover, rgba(255, 255, 255, 0.08));
}
`

export function injectClipStyles() {
  if (typeof document === 'undefined') return
  let style = document.getElementById(STYLES_ID)
  if (!(style instanceof HTMLStyleElement)) {
    style = document.createElement('style')
    style.id = STYLES_ID
    document.head.appendChild(style)
  }
  style.textContent = CLIP_CSS
}
