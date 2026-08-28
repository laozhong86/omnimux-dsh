export const STYLES_ID = 'omnimux-clip-stage-styles'

export const CLIP_CSS = `
.omnimux-clip-stage {
  position: fixed;
  z-index: 200;
  top: var(--stage-top);
  left: var(--stage-left);
  width: var(--stage-width);
  height: var(--stage-height);
  display: flex;
  flex-direction: column;
  background: var(--dsw-alias-bg-base, #111113);
  color: var(--dsw-alias-label-primary, #ffffff);
  overflow: hidden;
  pointer-events: auto;
  -webkit-app-region: no-drag;
}
.omnimux-clip-stage[data-visible="false"] {
  display: none;
  pointer-events: none;
}
.omnimux-clip-stage-header {
  flex: none;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  height: 48px;
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
  if (document.getElementById(STYLES_ID)) return
  const style = document.createElement('style')
  style.id = STYLES_ID
  style.textContent = CLIP_CSS
  document.head.appendChild(style)
}
