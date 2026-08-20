/**
 * Stylesheet for the Accounts app. CSS-in-JS string injection (same pattern as
 * the hub's sidebar-entry.js) because esbuild bundles this package without a
 * CSS output path — a CSS Module import cannot build. All class names are
 * prefixed `.omnimux-accounts-`; colors go through `var(--dsw-alias-*, fallback)`
 * (platform brand colors are the documented exception). Spacing 8/12/16/24,
 * cards 12px radius / 16px padding.
 */

export const STYLES = `
.omnimux-accounts-root {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 20px 24px;
  color: var(--dsw-alias-label-primary, var(--dsw-text-primary, inherit));
}
.omnimux-accounts-root *,
.omnimux-accounts-root *::before,
.omnimux-accounts-root *::after { box-sizing: border-box; }

/* ---------- overview bar ---------- */
.omnimux-accounts-overview {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 12px;
  align-items: stretch;
}
.omnimux-accounts-stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 16px;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.08));
  border-radius: 12px;
  background: var(--dsw-alias-bg-secondary, rgba(255,255,255,0.04));
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}
.omnimux-accounts-stat:hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.12));
}
.omnimux-accounts-stat:active {
  background: var(--dsw-alias-interactive-bg-active, rgba(128,128,128,0.18));
}
.omnimux-accounts-stat:disabled { cursor: default; opacity: 0.6; }
.omnimux-accounts-stat-value {
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
}
.omnimux-accounts-stat-label {
  font-size: 12px;
  line-height: 16px;
  color: var(--dsw-alias-label-secondary, rgba(255,255,255,0.72));
}
.omnimux-accounts-overview-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
}
.omnimux-accounts-cta {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border: none;
  border-radius: 8px;
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.18));
  color: var(--dsw-alias-label-primary, inherit);
  font: inherit;
  font-size: 13px;
  cursor: pointer;
}
.omnimux-accounts-cta:hover {
  background: var(--dsw-alias-interactive-bg-active, rgba(128,128,128,0.26));
}

/* ---------- filter bar ---------- */
.omnimux-accounts-filterbar {
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
  background: var(--dsw-alias-bg-primary, var(--dsw-bg, #111));
}
.omnimux-accounts-search {
  flex: 0 1 240px;
  min-width: 160px;
  height: 32px;
  padding: 0 10px;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.12));
  border-radius: 8px;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 13px;
}
.omnimux-accounts-select {
  height: 32px;
  padding: 0 8px;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.12));
  border-radius: 8px;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 13px;
  cursor: pointer;
}
.omnimux-accounts-select:disabled { cursor: default; opacity: 0.5; }
.omnimux-accounts-iconbtn {
  display: inline-grid;
  place-items: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.12));
  border-radius: 8px;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 14px;
  line-height: 1;
  cursor: pointer;
}
.omnimux-accounts-iconbtn:disabled { cursor: default; opacity: 0.45; }
.omnimux-accounts-iconbtn:not(:disabled):hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.12));
}
.omnimux-accounts-iconbtn[aria-pressed="true"] {
  background: var(--dsw-alias-interactive-bg-active, rgba(128,128,128,0.18));
}

/* ---------- card grid ---------- */
.omnimux-accounts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  align-items: stretch;
  gap: 12px;
}
.omnimux-accounts-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 168px;
  padding: 16px;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.08));
  border-radius: 12px;
  background: var(--dsw-alias-bg-secondary, rgba(255,255,255,0.04));
}
.omnimux-accounts-card:hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.08));
}
.omnimux-accounts-card[data-busy="true"] { opacity: 0.6; }
.omnimux-accounts-card-head {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
  padding-right: 32px; /* keep the title clear of the ⋯ button */
}
.omnimux-accounts-avatar {
  flex: 0 0 auto;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  object-fit: cover;
  display: block;
}
.omnimux-accounts-avatar-fallback {
  flex: 0 0 auto;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.18));
  color: var(--dsw-alias-label-primary, inherit);
  font-size: 16px;
  font-weight: 600;
  user-select: none;
}
.omnimux-accounts-id {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}
.omnimux-accounts-name {
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  line-height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.omnimux-accounts-username {
  margin: 0;
  font-size: 12px;
  line-height: 16px;
  color: var(--dsw-alias-label-secondary, rgba(255,255,255,0.72));
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.omnimux-accounts-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.omnimux-accounts-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 11px;
  line-height: 16px;
  white-space: nowrap;
}
.omnimux-accounts-chip--solid {
  background: #2C2C2A;
  color: #fff;
}
.omnimux-accounts-chip--accent {
  background: color-mix(in srgb, var(--dsw-accounts-platform-color, rgba(128,128,128,1)) 16%, transparent);
  color: var(--dsw-accounts-platform-color, var(--dsw-alias-label-primary, inherit));
}
.omnimux-accounts-chip--group {
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.12));
  color: var(--dsw-alias-label-secondary, rgba(255,255,255,0.72));
}

/* ---------- status ---------- */
.omnimux-accounts-dot {
  flex: 0 0 auto;
  width: 8px;
  height: 8px;
  border-radius: 999px;
  display: inline-block;
}
.omnimux-accounts-dot--active {
  background: var(--dsw-alias-state-success-primary, #4caf7d);
}
.omnimux-accounts-dot--expiring {
  background: var(--dsw-alias-state-warning-primary, #d9a13b);
}
.omnimux-accounts-dot--expired,
.omnimux-accounts-dot--error {
  background: var(--dsw-alias-state-error-primary, #e06c75);
}
.omnimux-accounts-status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  line-height: 18px;
}
.omnimux-accounts-status--expiring { color: var(--dsw-alias-state-warning-primary, #d9a13b); }
.omnimux-accounts-status--expired,
.omnimux-accounts-status--error { color: var(--dsw-alias-state-error-primary, #e06c75); }
.omnimux-accounts-meta {
  margin: 0;
  font-size: 12px;
  line-height: 18px;
  color: var(--dsw-alias-label-secondary, rgba(255,255,255,0.72));
}

/* ---------- agent usable switch ---------- */
.omnimux-accounts-switchrow {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
}
.omnimux-accounts-switch {
  position: relative;
  width: 36px;
  height: 20px;
  padding: 0;
  border: none;
  border-radius: 999px;
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.30));
  cursor: pointer;
  transition: background 0.15s ease;
}
.omnimux-accounts-switch[aria-checked="true"] {
  background: var(--dsw-alias-state-success-primary, #4caf7d);
}
.omnimux-accounts-switch:disabled { cursor: default; opacity: 0.5; }
.omnimux-accounts-switch-knob {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  border-radius: 999px;
  background: #fff;
  transition: transform 0.15s ease;
}
.omnimux-accounts-switch[aria-checked="true"] .omnimux-accounts-switch-knob {
  transform: translateX(16px);
}
.omnimux-accounts-switch-label {
  font-size: 12px;
  line-height: 16px;
  color: var(--dsw-alias-label-secondary, rgba(255,255,255,0.72));
}

/* ---------- card menu + confirm popover ---------- */
.omnimux-accounts-more {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 1;
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  padding: 0;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.16));
  border-radius: 8px;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
}
.omnimux-accounts-more:not(:disabled):hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.12));
}
.omnimux-accounts-popover {
  position: absolute;
  top: 38px;
  right: 8px;
  z-index: 5;
  min-width: 200px;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 6px;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.16));
  border-radius: 10px;
  background: var(--dsw-alias-bg-primary, var(--dsw-bg, #16181d));
  box-shadow: 0 8px 24px rgba(0,0,0,0.35);
}
.omnimux-accounts-menuitem {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  padding: 6px 10px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 13px;
  text-align: left;
  cursor: pointer;
}
.omnimux-accounts-menuitem:not(:disabled):hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.12));
}
.omnimux-accounts-menuitem:disabled { cursor: default; opacity: 0.5; }
.omnimux-accounts-menuitem--danger {
  color: var(--dsw-alias-state-error-primary, #e06c75);
}
.omnimux-accounts-popover-text {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
}
.omnimux-accounts-popover-summary {
  margin: 0;
  font-size: 12px;
  line-height: 1.5;
  opacity: 0.7;
}
.omnimux-accounts-popover-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 8px;
}
.omnimux-accounts-btn {
  flex: 0 0 auto;
  padding: 4px 10px;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.16));
  border-radius: 8px;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 13px;
  cursor: pointer;
}
.omnimux-accounts-btn:not(:disabled):hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.12));
}
.omnimux-accounts-btn:disabled { cursor: default; opacity: 0.5; }
.omnimux-accounts-btn--primary {
  border: none;
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.22));
}
.omnimux-accounts-btn--danger {
  color: var(--dsw-alias-state-error-primary, #e06c75);
}

/* ---------- skeleton / empty / error ---------- */
.omnimux-accounts-skeleton {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 12px;
}
.omnimux-accounts-skeleton-card {
  height: 168px;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.08));
  border-radius: 12px;
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.08));
  animation: omnimux-accounts-pulse 1.2s ease-in-out infinite;
}
.omnimux-accounts-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 48px 16px;
  border: 1px dashed var(--dsw-alias-border, rgba(255,255,255,0.16));
  border-radius: 12px;
}
.omnimux-accounts-empty-text {
  margin: 0;
  font-size: 13px;
  line-height: 1.6;
  color: var(--dsw-alias-label-secondary, rgba(255,255,255,0.72));
  text-align: center;
}
.omnimux-accounts-error {
  margin: 0;
  padding: 8px 12px;
  border: 1px solid color-mix(in srgb, var(--dsw-alias-state-error-primary, #e06c75) 40%, transparent);
  border-radius: 8px;
  color: var(--dsw-alias-state-error-primary, #e06c75);
  font-size: 13px;
  line-height: 1.5;
}
.omnimux-accounts-muted {
  margin: 0;
  font-size: 13px;
  line-height: 1.6;
  color: var(--dsw-alias-label-secondary, rgba(255,255,255,0.72));
}
@keyframes omnimux-accounts-pulse {
  0%, 100% { opacity: 0.55; }
  50% { opacity: 1; }
}

/* ---------- table view + bulk bar (T05 wiring; styles land now) ---------- */
.omnimux-accounts-tablewrap {
  overflow: auto;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.08));
  border-radius: 12px;
}
.omnimux-accounts-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}
.omnimux-accounts-table th {
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 8px 12px;
  background: var(--dsw-alias-bg-primary, var(--dsw-bg, #16181d));
  text-align: left;
  font-weight: 600;
  font-size: 12px;
  color: var(--dsw-alias-label-secondary, rgba(255,255,255,0.72));
  border-bottom: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.12));
}
.omnimux-accounts-table td {
  padding: 8px 12px;
  border-bottom: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.06));
}
.omnimux-accounts-table tr:last-child td { border-bottom: none; }
.omnimux-accounts-table tbody tr:hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.08));
}
.omnimux-accounts-bulkbar {
  position: sticky;
  bottom: 0;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.16));
  border-radius: 10px;
  background: var(--dsw-alias-bg-primary, var(--dsw-bg, #16181d));
  box-shadow: 0 -4px 16px rgba(0,0,0,0.25);
}

/* ---------- focus visibility (keyboard only) ---------- */
.omnimux-accounts-root :focus-visible {
  outline: 2px solid var(--dsw-alias-state-business-primary, #4c8dff);
  outline-offset: 1px;
}
`

const STYLE_ELEMENT_ID = 'omnimux-accounts-styles'

/**
 * Idempotent <style> injection into document.head.
 * @returns {void}
 */
export function injectAccountsStyles() {
  if (typeof document === 'undefined') return
  if (document.getElementById(STYLE_ELEMENT_ID)) return
  const style = document.createElement('style')
  style.id = STYLE_ELEMENT_ID
  style.textContent = STYLES
  document.head.append(style)
}
