export const STYLES_ID = 'omnimux-hub-styles'

export const HUB_CSS = `
.omnimux-apps-stage {
  position: fixed;
  z-index: 200;
  top: var(--stage-top);
  left: var(--stage-left);
  width: var(--stage-width);
  height: var(--stage-height);
  display: flex;
  flex-direction: column;
  background: var(--dsw-alias-bg-primary, var(--dsw-bg, #111));
  color: var(--dsw-alias-label-primary, inherit);
  overflow: auto;
  pointer-events: auto;
}
.omnimux-apps-stage[data-visible="false"] {
  display: none;
  pointer-events: none;
}
.omnimux-apps-stage-header {
  flex: none;
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 32px;
  padding: 12px 20px 12px;
  -webkit-app-region: no-drag;
}
.omnimux-apps-stage-title {
  margin: 0;
  flex: 1;
  min-width: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 32px;
}
.omnimux-apps-stage-body {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: auto;
}

.omnimux-login-gate-code {
  font-family: var(--dsw-font-markdown-code-font-family, monospace);
  font-size: 22px;
  letter-spacing: 3px;
  text-align: center;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid var(--dsw-alias-border-l2, inherit);
  color: var(--dsw-alias-label-primary, inherit);
}
.omnimux-login-gate-hint {
  margin: 0;
  font-size: 12px;
  color: var(--dsw-alias-label-secondary, inherit);
  line-height: 1.5;
}
.omnimux-login-gate-error {
  margin: 0;
  font-size: 12px;
  color: var(--dsw-alias-label-error, inherit);
  line-height: 1.5;
}
.omnimux-login-gate-actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  flex-wrap: wrap;
}

.omnimux-profile {
  padding: 20px;
  color: var(--dsw-alias-label-primary, var(--dsw-text-primary, inherit));
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 520px;
}
.omnimux-profile-title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}
.omnimux-profile-card {
  background: var(--dsw-alias-bg-primary, rgba(127,127,127,.08));
  border: 1px solid var(--dsw-alias-border-l2, var(--dsw-border, rgba(127,127,127,.35)));
  border-radius: 10px;
  padding: 14px 16px;
}
.omnimux-profile-card--identity,
.omnimux-profile-card--quota {
  display: flex;
  align-items: center;
}
.omnimux-profile-card--identity { gap: 12px; }
.omnimux-profile-card--quota { gap: 16px; }
.omnimux-profile-card--details { padding: 4px 16px; }
.omnimux-profile-card--signed-out {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
}
.omnimux-profile-identity {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}
.omnimux-profile-name {
  font-size: 15px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.omnimux-profile-username {
  font-size: 13px;
  color: var(--dsw-alias-label-secondary, var(--dsw-text-secondary, rgba(127,127,127,.9)));
}
.omnimux-profile-status {
  margin-left: auto;
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: var(--dsw-alias-label-secondary, var(--dsw-text-secondary, rgba(127,127,127,.9)));
}
.omnimux-profile-status-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--dsw-alias-label-accent, #3fb950);
}
.omnimux-profile-error {
  margin: 0;
  font-size: 12px;
  color: var(--dsw-alias-label-error, #e5534b);
  line-height: 1.5;
}
.omnimux-profile-quota {
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1 1 auto;
  min-width: 0;
}
.omnimux-profile-label {
  font-size: 13px;
  color: var(--dsw-alias-label-secondary, var(--dsw-text-secondary, rgba(127,127,127,.9)));
}
.omnimux-profile-value {
  font-size: 13px;
  color: var(--dsw-alias-label-primary, var(--dsw-text-primary, inherit));
  word-break: break-all;
  text-align: right;
}
.omnimux-profile-quota-amount {
  font-size: 22px;
  font-weight: 600;
  line-height: 1.2;
}
.omnimux-profile-quota-used {
  font-size: 12px;
  color: var(--dsw-alias-label-secondary, var(--dsw-text-secondary, rgba(127,127,127,.9)));
}
.omnimux-profile-quota-track {
  height: 4px;
  border-radius: 2px;
  background: var(--dsw-alias-border-l2, var(--dsw-border, rgba(127,127,127,.35)));
  overflow: hidden;
  margin-top: 2px;
}
.omnimux-profile-quota-fill {
  width: var(--quota-used);
  height: 100%;
  border-radius: 2px;
  background: var(--dsw-alias-button-primary-fill, #3b82f6);
}
.omnimux-profile-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
  padding: 9px 0;
  border-bottom: 1px solid var(--dsw-alias-border-l2, var(--dsw-border, rgba(127,127,127,.35)));
}
.omnimux-profile-row[data-last="true"] { border-bottom: none; }
.omnimux-profile-message {
  margin: 0;
  font-size: 13px;
  color: var(--dsw-alias-label-secondary, var(--dsw-text-secondary, rgba(127,127,127,.9)));
  line-height: 1.5;
}
.omnimux-profile-logout { align-self: flex-start; }
.omnimux-avatar {
  position: relative;
  cursor: pointer;
  flex: 0 0 auto;
}
.omnimux-avatar-edit {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--dsw-alias-bg-mask-1, rgba(0,0,0,.55));
  color: var(--dsw-alias-label-primary-inverted, #fff);
  font-size: 11px;
  opacity: 0;
  transition: opacity .15s ease;
  pointer-events: none;
}
.omnimux-avatar:hover .omnimux-avatar-edit { opacity: 1; }
.omnimux-profile-avatar-face,
.omnimux-profile-avatar-img {
  width: var(--avatar-size, 44px);
  height: var(--avatar-size, 44px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  background: var(--dsw-alias-button-primary-fill, #3b82f6);
  color: var(--dsw-alias-label-primary-inverted, #fff);
}
.omnimux-profile-avatar-img {
  display: block;
  object-fit: cover;
  background: none;
}
.omnimux-profile-avatar-face[data-large="true"] { font-size: 28px; }
.omnimux-profile-avatar-preview { display: flex; justify-content: center; }
.omnimux-profile-hues {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.omnimux-profile-hues-label {
  font-size: 12px;
  color: var(--dsw-alias-label-secondary, var(--dsw-text-secondary, rgba(127,127,127,.9)));
}
.omnimux-profile-hue-swatch {
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: hsl(var(--hue) 70% 55%);
  box-shadow: inset 0 0 0 1px var(--dsw-alias-border-l2, rgba(127,127,127,.35));
}
.omnimux-profile-hue[data-active="true"] .omnimux-profile-hue-swatch {
  box-shadow: inset 0 0 0 2px var(--dsw-alias-label-primary, inherit);
}
.omnimux-profile-avatar-actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.omnimux-profile-hint {
  margin: 0;
  font-size: 11px;
  color: var(--dsw-alias-label-secondary, var(--dsw-text-secondary, rgba(127,127,127,.9)));
}

.omnimux-plugins {
  padding: 0 20px 24px;
  color: var(--dsw-alias-label-primary, var(--dsw-text-primary, inherit));
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.omnimux-plugins-toolbar {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 10px;
}
.omnimux-plugins-search { flex: 0 1 280px; max-width: 280px; }
.omnimux-plugins-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  align-items: stretch;
  gap: 12px;
}
.omnimux-plugins-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 176px;
  border-radius: 12px;
  padding: 16px;
  background: var(--dsw-alias-bg-secondary, rgba(255,255,255,0.04));
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.08));
}
.omnimux-plugins-card-body {
  display: flex;
  flex-direction: column;
  gap: 12px;
  cursor: pointer;
  outline: none;
}
.omnimux-plugins-title-row {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}
.omnimux-plugins-icon {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  background: var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.10));
  color: var(--dsw-alias-label-primary, inherit);
  flex: 0 0 auto;
}
.omnimux-plugins-title-line {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  flex: 1;
  padding-right: 36px;
}
.omnimux-plugins-title {
  margin: 0;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 15px;
  font-weight: 600;
  line-height: 22px;
}
.omnimux-plugins-badge {
  font-size: 11px;
  line-height: 16px;
  padding: 2px 8px;
  border-radius: 999px;
  white-space: nowrap;
}
.omnimux-plugins-badge[data-state="installed"] {
  background: color-mix(in srgb, var(--dsw-alias-state-success-primary, #4caf7d) 16%, transparent);
  color: var(--dsw-alias-state-success-primary, #4caf7d);
}
.omnimux-plugins-badge[data-state="update"] {
  background: color-mix(in srgb, var(--dsw-alias-state-business-primary, #4c8dff) 16%, transparent);
  color: var(--dsw-alias-state-business-primary, #4c8dff);
}
.omnimux-plugins-badge[data-state="available"] {
  background: var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.08));
  color: var(--dsw-alias-label-secondary, rgba(255,255,255,0.72));
}
.omnimux-plugins-summary {
  margin: 0;
  font-size: 13px;
  line-height: 1.55;
  opacity: 0.72;
}
.omnimux-plugins-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.omnimux-plugins-tag {
  font-size: 11px;
  line-height: 16px;
  padding: 2px 8px;
  border-radius: 999px;
  background: var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.08));
  white-space: nowrap;
}
.omnimux-plugins-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  margin-top: auto;
}
.omnimux-plugins-more {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 1;
}
.omnimux-plugins-popover {
  position: absolute;
  top: 40px;
  right: 8px;
  z-index: 5;
  min-width: 200px;
  max-width: 260px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 6px;
  border-radius: 10px;
  background: var(--dsw-alias-bg-primary, var(--dsw-bg, #16181d));
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.16));
  box-shadow: 0 8px 24px var(--dsw-alias-bg-mask-1, rgba(0,0,0,0.35));
}
.omnimux-plugins-menu-item {
  width: 100%;
  justify-content: flex-start;
}
.omnimux-plugins-menu-item-stack {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  width: 100%;
}
.omnimux-plugins-menu-hint {
  font-size: 11px;
  line-height: 16px;
  opacity: 0.6;
}
.omnimux-plugins-muted { opacity: 0.7; font-size: 13px; margin: 0; }
.omnimux-plugins-error {
  color: var(--dsw-alias-state-error-primary, #e06c75);
  font-size: 13px;
  margin: 0;
}
.omnimux-plugins-restart { align-self: flex-start; }
.omnimux-plugins-gate {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 16px;
  border-radius: 12px;
  background: var(--dsw-alias-bg-secondary, rgba(255,255,255,0.04));
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.08));
}
.omnimux-plugins-gate-code {
  margin: 0;
  font-size: 14px;
  letter-spacing: 2px;
  font-family: var(--dsw-font-markdown-code-font-family, monospace);
}
.omnimux-plugins-gate-waiting {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}

.omnimux-update-action {
  flex: none;
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  align-self: center;
  padding-right: 2px;
}
.omnimux-update-action-btn {
  border-radius: 999px;
  height: 28px;
}
.omnimux-update-action-btn[data-status="readyToRestart"] {
  box-shadow: 0 0 10px color-mix(in srgb, var(--dsw-alias-button-primary-fill, #2563EB) 80%, transparent);
}
.omnimux-update-action-icon {
  display: inline-flex;
  align-items: center;
}
`

export function injectHubStyles() {
  if (typeof document === 'undefined') return
  if (document.getElementById(STYLES_ID)) return
  const styleNode = document.createElement('style')
  styleNode.id = STYLES_ID
  styleNode.textContent = HUB_CSS
  document.head.appendChild(styleNode)
}
