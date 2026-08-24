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
  flex: 1 1 auto;
  min-width: 0; /* allow the auto-fill grid to compute more than one 160px track inside the flex row */
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
.omnimux-accounts-toolbar {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: nowrap;
  margin-bottom: 12px;
}
.omnimux-accounts-cta {
  flex-shrink: 0;
  margin-left: auto; /* sit at the right end of the toolbar row, after the filter controls */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 32px;
  padding: 0 14px;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.14));
  border-radius: 8px;
  background: var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.08));
  color: var(--dsw-alias-label-primary, inherit);
  font: inherit;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
}
.omnimux-accounts-cta:hover {
  background: var(--dsw-alias-interactive-bg-active, rgba(255,255,255,0.14));
  border-color: rgba(255,255,255,0.24);
}
.omnimux-accounts-cta:active {
  transform: scale(0.98);
}
.omnimux-accounts-cta:disabled {
  cursor: default;
  opacity: 0.5;
}

/* ---------- filter bar ---------- */
.omnimux-accounts-filterbar {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 8px;
  flex: 1 1 auto;
  min-width: 0;
  padding: 8px 0;
}
.omnimux-accounts-filter-actions {
  display: inline-flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}
.omnimux-accounts-search {
  flex: 1 1 200px;
  min-width: 140px;
  max-width: 240px;
  height: 32px;
  padding: 0 12px;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.12));
  border-radius: 8px;
  background: var(--dsw-alias-bg-secondary, rgba(255,255,255,0.04));
  color: inherit;
  font: inherit;
  font-size: 13px;
  transition: all 0.15s ease;
}
.omnimux-accounts-search:hover {
  border-color: rgba(255,255,255,0.22);
  background: var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.07));
}
.omnimux-accounts-search:focus {
  outline: none;
  border-color: var(--dsw-alias-brand-primary, #3b82f6);
  box-shadow: 0 0 0 2px rgba(59,130,246,0.22);
  background: var(--dsw-alias-bg-secondary, rgba(255,255,255,0.06));
}
.omnimux-accounts-search::placeholder {
  color: var(--dsw-alias-label-tertiary, rgba(255,255,255,0.38));
}

/* ---------- dropdown select ---------- */
.omnimux-accounts-dropdown {
  position: relative;
  display: inline-block;
  flex-shrink: 0;
}
.omnimux-accounts-dropdown-trigger {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 32px;
  padding: 0 10px 0 12px;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.12));
  border-radius: 8px;
  background-color: var(--dsw-alias-bg-secondary, rgba(255,255,255,0.04));
  color: var(--dsw-alias-label-primary, inherit);
  font: inherit;
  font-size: 13px;
  cursor: pointer;
  white-space: nowrap;
  user-select: none;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}
.omnimux-accounts-dropdown-trigger:not(:disabled):hover {
  background-color: var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.08));
  border-color: rgba(255,255,255,0.22);
}
.omnimux-accounts-dropdown-trigger--open {
  background-color: var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.08));
  border-color: var(--dsw-alias-brand-primary, #3b82f6);
  box-shadow: 0 0 0 2px rgba(59,130,246,0.22);
}
.omnimux-accounts-dropdown-trigger:disabled {
  cursor: default;
  opacity: 0.5;
}
.omnimux-accounts-dropdown-label {
  line-height: 1;
}
.omnimux-accounts-dropdown-chevron {
  flex-shrink: 0;
  opacity: 0.55;
  transition: transform 0.18s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.15s ease;
}
.omnimux-accounts-dropdown-trigger:hover .omnimux-accounts-dropdown-chevron {
  opacity: 0.85;
}
.omnimux-accounts-dropdown-trigger--open .omnimux-accounts-dropdown-chevron {
  transform: rotate(180deg);
  opacity: 1;
  stroke: var(--dsw-alias-brand-primary, #3b82f6);
}
.omnimux-accounts-dropdown-menu {
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  z-index: 50;
  min-width: 100%;
  width: max-content;
  max-width: 240px;
  max-height: 280px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 5px;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.14));
  border-radius: 10px;
  background: var(--dsw-alias-bg-elevated, #1c1c1f);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.5), 0 2px 8px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(16px);
  animation: omnimux-accounts-menu-pop 0.12s cubic-bezier(0.16, 1, 0.3, 1);
}
@keyframes omnimux-accounts-menu-pop {
  from {
    opacity: 0;
    transform: translateY(-4px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
.omnimux-accounts-dropdown-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  padding: 6px 10px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: var(--dsw-alias-label-secondary, rgba(255,255,255,0.8));
  font: inherit;
  font-size: 13px;
  line-height: 1.4;
  text-align: left;
  white-space: nowrap;
  cursor: pointer;
  user-select: none;
  transition: background 0.1s ease, color 0.1s ease;
}
.omnimux-accounts-dropdown-item:hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.08));
  color: var(--dsw-alias-label-primary, #ffffff);
}
.omnimux-accounts-dropdown-item--selected {
  background: rgba(59, 130, 246, 0.12);
  color: var(--dsw-alias-brand-primary, #60a5fa);
  font-weight: 500;
}
.omnimux-accounts-dropdown-item--selected:hover {
  background: rgba(59, 130, 246, 0.2);
  color: #93c5fd;
}
.omnimux-accounts-dropdown-item-text {
  flex: 1 1 auto;
}
.omnimux-accounts-dropdown-check {
  flex-shrink: 0;
  stroke: var(--dsw-alias-brand-primary, #60a5fa);
}

.omnimux-accounts-select {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  flex-shrink: 0;
  height: 32px;
  padding: 0 28px 0 12px;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.12));
  border-radius: 8px;
  background-color: var(--dsw-alias-bg-secondary, rgba(255,255,255,0.04));
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='12' height='12' fill='none' stroke='rgba(255,255,255,0.45)' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m4 6 4 4 4-4'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;
  color: var(--dsw-alias-label-primary, inherit);
  font: inherit;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.15s ease;
}
.omnimux-accounts-select:hover {
  background-color: var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.08));
  border-color: rgba(255,255,255,0.22);
}
.omnimux-accounts-select:focus {
  outline: none;
  border-color: var(--dsw-alias-brand-primary, #3b82f6);
  box-shadow: 0 0 0 2px rgba(59,130,246,0.22);
}
.omnimux-accounts-select option {
  background-color: #1a1a1c;
  color: #ededed;
}
.omnimux-accounts-select:disabled { cursor: default; opacity: 0.5; }
.omnimux-accounts-iconbtn {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.12));
  border-radius: 8px;
  background: var(--dsw-alias-bg-secondary, rgba(255,255,255,0.04));
  color: var(--dsw-alias-label-secondary, rgba(255,255,255,0.65));
  font: inherit;
  cursor: pointer;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}
.omnimux-accounts-iconbtn:disabled { cursor: default; opacity: 0.45; }
.omnimux-accounts-iconbtn:not(:disabled):hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.09));
  border-color: rgba(255,255,255,0.22);
  color: var(--dsw-alias-label-primary, #ffffff);
}
.omnimux-accounts-iconbtn:not(:disabled):active {
  transform: scale(0.96);
}
.omnimux-accounts-iconbtn[aria-pressed="true"] {
  background: var(--dsw-alias-interactive-bg-active, rgba(255,255,255,0.14));
  border-color: var(--dsw-alias-border-active, rgba(255,255,255,0.26));
  color: var(--dsw-alias-label-primary, #ffffff);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.08);
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
  vertical-align: middle;
  white-space: nowrap;
}
.omnimux-accounts-table tr:last-child td { border-bottom: none; }
.omnimux-accounts-table tbody tr:hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.08));
}
.omnimux-accounts-row-selected {
  background: color-mix(in srgb, var(--dsw-alias-state-business-primary, #4c8dff) 10%, transparent);
}
.omnimux-accounts-table-check { width: 36px; }
.omnimux-accounts-table input[type="checkbox"] {
  accent-color: var(--dsw-alias-state-business-primary, #4c8dff);
  cursor: pointer;
}
.omnimux-accounts-table input[type="checkbox"]:disabled { cursor: default; }
.omnimux-accounts-sortbtn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 0;
  border: none;
  border-radius: 4px;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
}
.omnimux-accounts-sortbtn:not(:disabled):hover {
  color: var(--dsw-alias-label-primary, inherit);
}
.omnimux-accounts-sortbtn:disabled { cursor: default; opacity: 0.5; }
.omnimux-accounts-sortmark { opacity: 0.6; }
.omnimux-accounts-thtext {
  font-size: 12px;
  font-weight: 600;
}
.omnimux-accounts-cell-id {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}
.omnimux-accounts-cellmenu {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  vertical-align: middle;
  position: relative;
}
/* Table-only overrides. Default .omnimux-accounts-more / .omnimux-accounts-popover
   stay absolute so grid cards keep pinning the ⋯ to the card corner. */
.omnimux-accounts-cellmenu .omnimux-accounts-more {
  position: static;
  top: auto;
  right: auto;
  z-index: auto;
  width: 26px;
  height: 26px;
}
.omnimux-accounts-cellmenu .omnimux-accounts-popover {
  top: calc(100% + 4px);
  right: 0;
  left: auto;
  z-index: 6;
  min-width: 200px;
  max-width: min(280px, 70vw);
}
.omnimux-accounts-table tbody tr:last-child .omnimux-accounts-cellmenu .omnimux-accounts-popover,
.omnimux-accounts-table tbody tr:nth-last-child(2) .omnimux-accounts-cellmenu .omnimux-accounts-popover {
  top: auto;
  bottom: calc(100% + 4px);
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
.omnimux-accounts-bulkbar .omnimux-accounts-popover {
  top: auto;
  bottom: 44px;
}
.omnimux-accounts-bulk-text {
  font-size: 13px;
  color: var(--dsw-alias-label-secondary, rgba(255,255,255,0.72));
}
.omnimux-accounts-bulk-progress {
  font-size: 12px;
  color: var(--dsw-alias-label-secondary, rgba(255,255,255,0.72));
  font-variant-numeric: tabular-nums;
}

/* ---------- notice (non-error feedback channel) ---------- */
.omnimux-accounts-notice {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: var(--dsw-alias-state-success-primary, #4caf7d);
}

/* ---------- connect modal ---------- */
.omnimux-accounts-modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 300;
  display: grid;
  place-items: center;
  padding: 24px;
  background: rgba(0,0,0,0.55);
}
.omnimux-accounts-modal {
  width: min(480px, 100%);
  max-height: min(560px, 100%);
  overflow: auto;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.16));
  border-radius: 12px;
  background: var(--dsw-alias-bg-primary, var(--dsw-bg, #16181d));
  box-shadow: 0 16px 48px rgba(0,0,0,0.45);
}
.omnimux-accounts-modal-head {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-bottom: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.08));
}
.omnimux-accounts-modal-title {
  margin: 0;
  flex: 1;
  font-size: 15px;
  font-weight: 600;
  line-height: 22px;
}
.omnimux-accounts-modal-close {
  display: grid;
  place-items: center;
  width: 28px;
  height: 28px;
  padding: 0;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
}
.omnimux-accounts-modal-close:not(:disabled):hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.12));
}
.omnimux-accounts-modal-body {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
}
.omnimux-accounts-modal-text {
  margin: 0;
  font-size: 13px;
  line-height: 1.6;
}
.omnimux-accounts-modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
.omnimux-accounts-modal-link {
  align-self: flex-start;
}
.omnimux-accounts-platform-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 12px;
}
.omnimux-accounts-platform-btn {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 14px;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.12));
  border-radius: 12px;
  background: var(--dsw-alias-bg-secondary, rgba(255,255,255,0.04));
  color: inherit;
  font: inherit;
  cursor: pointer;
  text-align: left;
}
.omnimux-accounts-platform-btn:not(:disabled):hover {
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.12));
}
.omnimux-accounts-platform-btn:active {
  background: var(--dsw-alias-interactive-bg-active, rgba(128,128,128,0.18));
}
.omnimux-accounts-platform-btn:disabled { cursor: default; opacity: 0.5; }
.omnimux-accounts-platform-btn--coming {
  cursor: default;
  opacity: 0.55;
}
.omnimux-accounts-platform-name {
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
}
.omnimux-accounts-platform-soon {
  font-size: 11px;
  line-height: 16px;
  padding: 1px 8px;
  border-radius: 999px;
  background: var(--dsw-alias-interactive-bg-hover, rgba(128,128,128,0.18));
  color: var(--dsw-alias-label-secondary, rgba(255,255,255,0.72));
  white-space: nowrap;
}

/* ---------- empty state ---------- */
.omnimux-accounts-empty-icon {
  color: var(--dsw-alias-label-secondary, rgba(255,255,255,0.72));
}
.omnimux-accounts-empty-title {
  margin: 0;
  font-size: 15px;
  font-weight: 600;
  line-height: 22px;
}
.omnimux-accounts-empty-platforms {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  padding-top: 12px;
  border-top: 1px dashed var(--dsw-alias-border, rgba(255,255,255,0.16));
}
.omnimux-accounts-empty-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.omnimux-accounts-empty-grouptitle {
  margin: 0;
  font-size: 12px;
  line-height: 16px;
  color: var(--dsw-alias-label-secondary, rgba(255,255,255,0.72));
}
.omnimux-accounts-empty-soonchip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
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
