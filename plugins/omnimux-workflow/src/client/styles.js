export const STYLES_ID = 'omnimux-workflow-styles'

export const WORKFLOW_CSS = `
.omnimux-workflow-stage {
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
.omnimux-workflow-stage[data-visible="false"] {
  display: none;
  pointer-events: none;
}
.omnimux-workflow-stage-header {
  flex: none;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 20px;
  -webkit-app-region: no-drag;
}
.omnimux-workflow-stage-heading { flex: 1; min-width: 0; }
.omnimux-workflow-stage-title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 32px;
}
.omnimux-workflow-stage-subtitle {
  margin: 0;
  font-size: 13px;
  line-height: 20px;
  color: var(--dsw-alias-label-secondary);
}
.omnimux-workflow-stage-toolbar {
  flex: none;
  padding: 0 20px 12px;
  height: 44px;
}
.omnimux-workflow-chip {
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  padding: 4px 12px;
  border-radius: 8px;
  background: var(--dsw-alias-interactive-bg-active);
  flex-shrink: 0;
}
.omnimux-workflow-muted {
  font-size: 12px;
  color: var(--dsw-alias-label-secondary);
  flex-shrink: 0;
  white-space: nowrap;
}
.omnimux-workflow-error {
  margin: 0;
  padding: 6px 20px;
  font-size: 12px;
  color: var(--dsw-alias-state-error-primary, var(--dsw-alias-label-error));
}
.omnimux-workflow-body {
  flex: 1;
  min-height: 0;
  overflow: auto;
  padding: 20px;
}
.omnimux-workflow-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 12px;
}
.omnimux-workflow-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 100%;
  min-height: 160px;
  color: var(--dsw-alias-label-secondary);
  font-size: 13px;
  border: 1px dashed var(--dsw-alias-border-l4, var(--dsw-alias-border));
  border-radius: 12px;
}
.omnimux-workflow-empty p { margin: 0; }
.omnimux-workflow-card {
  border: 1px solid var(--dsw-alias-border-l2, var(--dsw-alias-border));
  border-radius: 12px;
  padding: 14px;
  cursor: pointer;
  background: var(--dsw-alias-bg-base, var(--dsw-bg));
  min-height: 96px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;
}
.omnimux-workflow-card:hover {
  border-color: var(--dsw-alias-border-l4, var(--dsw-alias-border));
}
.omnimux-workflow-card:focus-visible {
  outline: 2px solid var(--dsw-alias-label-primary);
  outline-offset: 2px;
}
.omnimux-workflow-card-main { flex: 1; min-width: 0; }
.omnimux-workflow-card-title {
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.omnimux-workflow-card-meta {
  font-size: 12px;
  line-height: 18px;
  color: var(--dsw-alias-label-secondary);
  margin-top: 4px;
}
.omnimux-workflow-card-actions {
  display: flex;
  gap: 6px;
  justify-content: flex-end;
  align-items: center;
}
.omnimux-workflow-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.omnimux-workflow-form-error {
  margin: 0;
  font-size: 12px;
  color: var(--dsw-alias-state-error-primary, var(--dsw-alias-label-error));
}
.omnimux-workflow-dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  width: 100%;
}
.omnimux-workflow-canvas-host {
  position: absolute;
  inset: 0;
  overflow: hidden;
}
.omnimux-workflow-canvas-root {
  width: 100%;
  height: 100%;
}
.omnimux-workflow-canvas-status {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 13px;
  color: var(--dsw-alias-label-secondary);
}
.omnimux-workflow-canvas-body {
  flex: 1;
  min-height: 0;
  position: relative;
}
.omnimux-workflow-canvas-tab {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;
}
.omnimux-workflow-canvas-tab[data-visible="false"] {
  visibility: hidden;
}
`

export function injectWorkflowStyles() {
  if (typeof document === 'undefined') return
  if (document.getElementById(STYLES_ID)) return
  const styleNode = document.createElement('style')
  styleNode.id = STYLES_ID
  styleNode.textContent = WORKFLOW_CSS
  document.head.appendChild(styleNode)
}
