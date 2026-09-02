export const STYLES_ID = 'omnimux-workflow-styles'

export const WORKFLOW_CSS = `
.omnimux-workflow-stage,
.omnimux-workflow-library-page {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  background: var(--dsw-alias-bg-base, var(--dsw-bg));
  color: var(--dsw-alias-label-primary, inherit);
  overflow: hidden;
  pointer-events: auto;
}
.omnimux-workflow-library-page .dshUk-PageHeader-pageHeader,
.omnimux-workflow-library-page .dshUk-PageHeader-heading,
.omnimux-workflow-library-page .dshUk-PageHeader-controls {
  min-width: 0;
  max-width: 100%;
}
.omnimux-workflow-stage[data-visible="false"],
.omnimux-workflow-library-page[data-visible="false"] {
  display: none !important;
  pointer-events: none;
}
.omnimux-workflow-action-row,
.omnimux-workflow-library-action-row {
  flex: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  padding: 8px 20px 12px;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  min-width: 0;
}
.omnimux-workflow-library-filter {
  flex: none;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  padding: 0 20px 12px;
}
.omnimux-workflow-library-filter .dshUk-SearchField-root,
.omnimux-workflow-library-filter .dshUk-SearchField-stretch {
  width: 100%;
  max-width: min(260px, 100%);
  min-width: 0;
}
.omnimux-workflow-stage-toolbar {
  flex: none;
  padding: 0 20px 12px;
  height: 44px;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  min-width: 0;
}
.omnimux-workflow-tools-cluster {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  flex-wrap: wrap;
}
.omnimux-workflow-search-wrap {
  width: min(260px, 100%);
  max-width: 100%;
  min-width: 0;
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
.omnimux-workflow-error,
.omnimux-workflow-library-error {
  margin: 0;
  padding: 6px 20px;
  font-size: 12px;
  color: var(--dsw-alias-state-error-primary, var(--dsw-alias-label-error));
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
}
.omnimux-workflow-body,
.omnimux-workflow-library-body {
  flex: 1 1 auto;
  min-height: 0;
  min-width: 0;
  overflow: auto;
  padding: 16px 20px 20px;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
}
.omnimux-workflow-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(220px, 100%), 1fr));
  gap: 12px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}
.omnimux-workflow-empty,
.omnimux-workflow-library-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  min-height: 200px;
  padding: 24px 16px;
  color: var(--dsw-alias-label-secondary);
  font-size: 13px;
  text-align: center;
  border: 1px dashed var(--dsw-alias-border-l4, var(--dsw-alias-border));
  border-radius: 12px;
}
.omnimux-workflow-empty p,
.omnimux-workflow-library-empty-title,
.omnimux-workflow-library-empty-sub { margin: 0; }
.omnimux-workflow-library-empty-title {
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: var(--dsw-alias-label-primary, inherit);
}
.omnimux-workflow-library-empty-sub {
  font-size: 13px;
  line-height: 18px;
  color: var(--dsw-alias-label-secondary);
}
.omnimux-workflow-card {
  border: 1px solid var(--dsw-alias-border-l2, var(--dsw-alias-border));
  border-radius: 12px;
  padding: 14px;
  cursor: pointer;
  background: var(--dsw-alias-bg-base, var(--dsw-bg));
  min-height: 96px;
  min-width: 0;
  max-width: 100%;
  box-sizing: border-box;
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
.omnimux-workflow-card-main,
.omnimux-workflow-card-head {
  flex: 1;
  min-width: 0;
}
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
.omnimux-workflow-card-desc {
  font-size: 12px;
  line-height: 18px;
  color: var(--dsw-alias-label-secondary);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.omnimux-workflow-card-actions {
  display: flex;
  gap: 6px;
  justify-content: flex-end;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.12s ease;
}
.omnimux-workflow-card:hover .omnimux-workflow-card-actions,
.omnimux-workflow-card:focus-within .omnimux-workflow-card-actions {
  opacity: 1;
  pointer-events: auto;
}
@media (max-width: 720px) {
  .omnimux-workflow-action-row,
  .omnimux-workflow-library-action-row,
  .omnimux-workflow-library-filter,
  .omnimux-workflow-body,
  .omnimux-workflow-library-body {
    padding-left: 12px;
    padding-right: 12px;
  }
  .omnimux-workflow-grid {
    grid-template-columns: repeat(auto-fill, minmax(min(180px, 100%), 1fr));
    gap: 10px;
  }
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
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;
}
.omnimux-workflow-canvas-tab[data-visible="false"] {
  visibility: hidden;
}
.omnimux-workflow-canvas-hostbar {
  flex: none;
  display: flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 0 12px;
  border-bottom: 1px solid var(--dsw-alias-border, rgba(255, 255, 255, 0.12));
  background: var(--dsw-alias-bg-elevated, var(--dsw-alias-bg-base));
  color: var(--dsw-alias-label-secondary, inherit);
  font-size: 12px;
  line-height: 16px;
}
.omnimux-workflow-canvas-hostbar-title {
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--dsw-alias-label-primary, inherit);
  font-weight: 500;
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
