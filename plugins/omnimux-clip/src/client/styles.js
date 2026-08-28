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
.omnimux-clip-stage[data-clip-mode="canvas"] .omnimux-clip-stage-heading {
  display: none !important;
}
.omnimux-clip-stage-header {
  flex: none;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 20px 8px var(--clip-header-pad-left, 20px);
  height: 40px;
  box-sizing: border-box;
  border-bottom: 1px solid var(--dsw-alias-border-subtle, rgba(255, 255, 255, 0.12));
  background: var(--dsw-alias-bg-elevated, #161618);
  -webkit-app-region: no-drag;
}
.omnimux-clip-stage-heading {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 8px;
}
.omnimux-clip-stage-title {
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  line-height: 24px;
  color: var(--dsw-alias-label-primary, #ffffff);
}
.omnimux-clip-stage-subtitle {
  margin: 0;
  font-size: 12px;
  line-height: 20px;
  color: var(--dsw-alias-label-secondary, rgba(255, 255, 255, 0.65));
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
.omnimux-clip-stage-actions {
  flex: none;
  display: flex;
  align-items: center;
  gap: 8px;
  height: 32px;
}
.omnimux-clip-stage-save-status {
  font-size: 12px;
  line-height: 20px;
  font-weight: 500;
  white-space: nowrap;
  color: var(--dsw-alias-label-success, var(--dsw-alias-status-success, #4ade80));
}
.omnimux-clip-stage-icon-btn {
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: 1px solid var(--dsw-alias-border-subtle, rgba(255, 255, 255, 0.12));
  background: var(--dsw-alias-bg-control, rgba(255, 255, 255, 0.04));
  color: var(--dsw-alias-label-secondary, rgba(255, 255, 255, 0.7));
  cursor: pointer;
  transition: color 150ms ease, background-color 150ms ease, border-color 150ms ease;
}
.omnimux-clip-stage-icon-btn:hover {
  color: var(--dsw-alias-label-primary, #ffffff);
  background: var(--dsw-alias-interactive-bg-hover, rgba(255, 255, 255, 0.1));
  border-color: var(--dsw-alias-border-l3, rgba(255, 255, 255, 0.25));
}
.omnimux-clip-stage[data-clip-mode="canvas"] header {
  display: none !important;
}
.omnimux-clip-stage[data-clip-mode="standalone"] .omnimux-clip-stage-header {
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
}
.omnimux-clip-stage[data-clip-mode="standalone"] .omnimux-clip-stage-heading,
.omnimux-clip-stage[data-clip-mode="standalone"] .omnimux-clip-stage-icon-btn,
.omnimux-clip-stage[data-clip-mode="standalone"] .omnimux-clip-stage-save-btn,
.omnimux-clip-stage[data-clip-mode="standalone"] .omnimux-clip-stage-save-status {
  display: none !important;
}
.omnimux-clip-stage[data-clip-mode="standalone"] .omnimux-clip-stage-actions {
  pointer-events: auto;
}
.omnimux-clip-stage[data-clip-mode="standalone"] .omnimux-clip-stage-close-btn {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: var(--dsw-alias-bg-elevated, rgba(22, 22, 24, 0.92));
  border: 1px solid var(--dsw-alias-border-subtle, rgba(255, 255, 255, 0.16));
}
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
