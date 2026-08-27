/** Stage CSS: layout + semantic tokens only. Injected once into <head>. */

const CSS_ID = 'dsh-publish-style'

const CSS = `
.dsh-pub-stage {
  position: fixed;
  z-index: 200;
  top: var(--stage-top);
  left: var(--stage-left);
  width: var(--stage-width);
  height: var(--stage-height);
  display: flex;
  flex-direction: column;
  background: var(--dsw-alias-bg-base, #ffffff);
  color: var(--dsw-alias-label-primary, #0f172a);
  overflow: auto;
  pointer-events: auto;
  -webkit-app-region: no-drag;
}
.dsh-pub-stage[data-visible="false"] {
  display: none;
  pointer-events: none;
}

/* Layer 1: Page Header (16px 20px 8px) */
.dsh-pub-header {
  flex: none;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 16px 20px 8px;
  background: var(--dsw-alias-bg-base, #ffffff);
}
.dsh-pub-header-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.dsh-pub-title {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  line-height: 28px;
  color: var(--dsw-alias-label-primary, #0f172a);
  letter-spacing: -0.2px;
}
.dsh-pub-subtitle {
  margin: 0;
  font-size: 13px;
  line-height: 18px;
  color: var(--dsw-alias-label-secondary, #64748b);
}
.dsh-pub-header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Layer 2: Action Row (8px 20px 14px) */
.dsh-pub-action-row {
  flex: none;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 20px 14px;
  background: var(--dsw-alias-bg-base, #ffffff);
}

/* Layer 3: Control Bar (Single FilterBar, 44px, 0 20px 12px) */
.dsh-pub-control-bar {
  flex: none;
  padding: 0 20px 12px;
  background: var(--dsw-alias-bg-base, #ffffff);
}
.dsh-pub-tab-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 4px;
  margin-left: 6px;
  font-size: 11px;
  font-weight: 600;
  color: var(--dsw-alias-label-secondary, #64748b);
  background: var(--dsw-alias-bg-layer-2, #f8fafc);
  border-radius: 9999px;
  border: 1px solid var(--dsw-alias-border-l1, #e2e8f0);
}
.dsh-pub-tab-badge.retry {
  color: var(--dsw-alias-state-error, #ef4444);
}

/* Layer 4: Content Viewport (padding: 16px; gap: 16px) */
.dsh-pub-viewport {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
  overflow: auto;
}

/* Batch Action Bar */
.dsh-pub-batch-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background: var(--dsw-alias-brand-subtle, rgba(15, 23, 42, 0.06));
  border: 1px solid var(--dsw-alias-brand-border, rgba(15, 23, 42, 0.15));
  border-radius: 8px;
  font-size: 13px;
}
.dsh-pub-batch-actions { display: flex; gap: 8px; }
.dsh-pub-view-switcher { display: flex; gap: 2px; }

/* Layer 5 Overlay Subscreen (Composer & Detail full-screen) */
.dsh-pub-subscreen {
  position: fixed;
  inset: 0;
  z-index: 300;
  background: var(--dsw-alias-bg-base, #ffffff);
  display: flex;
  flex-direction: column;
}

/* 14-Column Table View */
.dsh-pub-table-wrap {
  width: 100%;
  overflow-x: auto;
  border: 1px solid var(--dsw-alias-border-l1, #e2e8f0);
  border-radius: 8px;
  background: var(--dsw-alias-bg-base, #ffffff);
}
.dsh-pub-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  text-align: left;
}
.dsh-pub-table th {
  padding: 10px 12px;
  font-size: 12px;
  font-weight: 600;
  color: var(--dsw-alias-label-tertiary, #94a3b8);
  border-bottom: 1px solid var(--dsw-alias-border-l1, #e2e8f0);
  background: var(--dsw-alias-bg-layer-2, #f8fafc);
  white-space: nowrap;
  user-select: none;
}
.dsh-pub-th-metric {
  width: 56px;
  text-align: center;
  padding: 8px 4px;
}
.dsh-pub-th-metric-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  font-size: 11px;
}
.dsh-pub-table td {
  padding: 10px 12px;
  border-bottom: 1px solid var(--dsw-alias-border-l1, #e2e8f0);
  color: var(--dsw-alias-label-secondary, #64748b);
  vertical-align: middle;
}
.dsh-pub-row {
  cursor: pointer;
  transition: background-color 0.15s ease;
}
.dsh-pub-row:hover td {
  background: var(--dsw-alias-interactive-bg-hover, rgba(0, 0, 0, 0.04));
}
.dsh-pub-row.selected td {
  background: var(--dsw-alias-brand-subtle, rgba(15, 23, 42, 0.06));
}
/* Column layout classes (UI02: no business inline styles in table JSX) */
.dsh-pub-col-check { width: 32px; text-align: center; }
.dsh-pub-col-content { min-width: 240px; text-align: left; }
.dsh-pub-col-platforms { min-width: 100px; text-align: left; }
.dsh-pub-col-date { width: 140px; text-align: left; cursor: pointer; }
.dsh-pub-col-status { width: 100px; text-align: left; cursor: pointer; }
.dsh-pub-col-menu { width: 40px; text-align: center; }
.dsh-pub-col-sort:hover { color: var(--dsw-alias-label-secondary, #64748b); }
th[style*="--pub-min-w"] { min-width: var(--pub-min-w); }
.dsh-pub-td-center { text-align: center; }
.dsh-pub-td-datetime { white-space: nowrap; font-size: 12px; }
.dsh-pub-td-metric {
  text-align: center;
  font-size: 12px;
  font-variant-numeric: tabular-nums;
  color: var(--dsw-alias-label-tertiary, #94a3b8);
  width: 56px;
}
.dsh-pub-td-content {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 240px;
}
.dsh-pub-td-thumb {
  width: 36px;
  height: 36px;
  border-radius: 6px;
  background: var(--dsw-alias-thumb-bg, #475569);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  flex-shrink: 0;
  color: #ffffff;
}
.dsh-pub-td-title-wrap {
  flex: 1;
  min-width: 0;
}
.dsh-pub-td-title {
  font-weight: 500;
  color: var(--dsw-alias-label-primary, #0f172a);
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.dsh-pub-table-empty {
  text-align: center;
  padding: 48px 0;
  color: var(--dsw-alias-label-tertiary, #94a3b8);
}

/* Status Pills */
.dsh-pub-status-pill {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 600;
  white-space: nowrap;
}
.dsh-pub-status-pill.draft {
  background: var(--dsw-alias-state-draft-subtle, rgba(100, 116, 139, 0.12));
  color: var(--dsw-alias-label-secondary, #64748b);
}
.dsh-pub-status-pill.publishing {
  background: var(--dsw-alias-state-publishing-subtle, rgba(37, 99, 235, 0.12));
  color: var(--dsw-alias-state-publishing, #2563eb);
}
.dsh-pub-status-pill.reviewing {
  background: var(--dsw-alias-state-warn-subtle, rgba(245, 158, 11, 0.12));
  color: var(--dsw-alias-state-warn-text, #d97706);
}
.dsh-pub-status-pill.published {
  background: var(--dsw-alias-state-success-subtle, rgba(16, 185, 129, 0.12));
  color: var(--dsw-alias-state-success-text, #059669);
}
.dsh-pub-status-pill.partial_failed {
  background: var(--dsw-alias-state-partial-subtle, rgba(234, 88, 12, 0.12));
  color: var(--dsw-alias-state-partial-text, #c2410c);
}
.dsh-pub-status-pill.failed {
  background: var(--dsw-alias-state-error-subtle, rgba(239, 68, 68, 0.12));
  color: var(--dsw-alias-state-error-text, #dc2626);
}

/* Platform Cluster & Tags */
.dsh-pub-platforms-cluster {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}
.dsh-pub-plat-tag {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 700;
  color: #ffffff;
}
.dsh-pub-plat-tag.tiktok { background: var(--dsw-alias-platform-tiktok, #000000); }
.dsh-pub-plat-tag.xiaohongshu, .dsh-pub-plat-tag.xhs { background: var(--dsw-alias-platform-xhs, #ff2442); }
.dsh-pub-plat-tag.wechat_channels, .dsh-pub-plat-tag.sph { background: var(--dsw-alias-platform-sph, #fa9d3b); }
.dsh-pub-plat-tag.draft { background: var(--dsw-alias-thumb-bg, #475569); }

.dsh-pub-plat-dot {
  position: absolute;
  top: -2px;
  right: -2px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: 1px solid var(--dsw-alias-bg-base, #ffffff);
}
.dsh-pub-plat-dot.published { background: var(--dsw-alias-state-success, #10b981); }
.dsh-pub-plat-dot.failed { background: var(--dsw-alias-state-error, #ef4444); }
.dsh-pub-plat-dot.reviewing { background: var(--dsw-alias-state-warn, #f59e0b); }
.dsh-pub-plat-dot.publishing { background: var(--dsw-alias-state-publishing, #2563eb); }

/* Grid View & 112px AssetCard */
.dsh-pub-grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 12px;
}
.dsh-pub-asset-card {
  background: var(--dsw-alias-bg-base, #ffffff);
  border: 1px solid var(--dsw-alias-border-l1, #e2e8f0);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
}
.dsh-pub-asset-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--dsw-shadow-lv2, 0 4px 6px rgba(0,0,0,0.08));
  border-color: var(--dsw-alias-border-l2, #cbd5e1);
}
.dsh-pub-card-cover {
  width: 100%;
  height: 112px;
  background: var(--dsw-alias-thumb-bg, #475569);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
}
.dsh-pub-card-thumb-icon {
  font-size: 14px;
  font-weight: 500;
  opacity: 0.9;
}
.dsh-pub-card-type-badge {
  position: absolute;
  top: 6px;
  right: 6px;
  background: var(--dsw-alias-backdrop-bg, rgba(0,0,0,0.65));
  color: #ffffff;
  font-size: 11px;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: 500;
}
.dsh-pub-card-checkbox {
  position: absolute;
  top: 6px;
  left: 6px;
}
.dsh-pub-card-body {
  padding: 10px 12px 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
  justify-content: space-between;
}
.dsh-pub-card-title-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 6px;
}
.dsh-pub-card-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--dsw-alias-label-primary, #0f172a);
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.dsh-pub-card-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 11px;
  color: var(--dsw-alias-label-tertiary, #94a3b8);
}
.dsh-pub-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
  border-top: 1px solid var(--dsw-alias-border-l1, #e2e8f0);
}

/* Calendar View */
.dsh-pub-cal-wrap {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.dsh-pub-cal-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.dsh-pub-cal-month-label {
  font-size: 15px;
  font-weight: 600;
  color: var(--dsw-alias-label-primary, #0f172a);
}
.dsh-pub-week-btn-group {
  display: flex;
  gap: 4px;
}
.dsh-pub-cal-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-top: 1px solid var(--dsw-alias-border-l1, #e2e8f0);
  border-left: 1px solid var(--dsw-alias-border-l1, #e2e8f0);
  background: var(--dsw-alias-bg-base, #ffffff);
  border-radius: 8px;
  overflow: hidden;
}
.dsh-pub-cal-head-cell {
  padding: 8px 0;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  color: var(--dsw-alias-label-tertiary, #94a3b8);
  border-right: 1px solid var(--dsw-alias-border-l1, #e2e8f0);
  border-bottom: 1px solid var(--dsw-alias-border-l1, #e2e8f0);
  background: var(--dsw-alias-bg-layer-2, #f8fafc);
}
.dsh-pub-cal-cell {
  min-height: 96px;
  padding: 6px;
  border-right: 1px solid var(--dsw-alias-border-l1, #e2e8f0);
  border-bottom: 1px solid var(--dsw-alias-border-l1, #e2e8f0);
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.dsh-pub-cal-cell.other-month {
  background: var(--dsw-alias-bg-layer-2, #f8fafc);
  opacity: 0.5;
}
.dsh-pub-cal-date-num {
  font-size: 11px;
  font-weight: 500;
  color: var(--dsw-alias-label-secondary, #64748b);
  align-self: flex-end;
}
.dsh-pub-cal-tasks {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.dsh-pub-cal-pill {
  padding: 3px 6px;
  border-radius: 4px;
  background: var(--dsw-alias-bg-layer-2, #f8fafc);
  border-left: 3px solid var(--dsw-alias-state-publishing, #2563eb);
  font-size: 11px;
  cursor: pointer;
  box-shadow: var(--dsw-shadow-lv1, 0 1px 2px rgba(0,0,0,0.05));
}
.dsh-pub-cal-pill.published { border-left-color: var(--dsw-alias-state-success, #10b981); }
.dsh-pub-cal-pill.failed { border-left-color: var(--dsw-alias-state-error, #ef4444); }
.dsh-pub-cal-pill.reviewing { border-left-color: var(--dsw-alias-state-warn, #f59e0b); }
.dsh-pub-cal-pill-title {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 120px;
}
.dsh-pub-cal-more {
  font-size: 10px;
  color: var(--dsw-alias-label-tertiary, #94a3b8);
}

.dsh-pub-muted { padding: 24px 0; color: var(--dsw-alias-label-tertiary); text-align: center; }
.dsh-pub-alert {
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 13px;
  margin-bottom: 12px;
}
.dsh-pub-alert.error {
  background: var(--dsw-alias-state-error-subtle, rgba(239, 68, 68, 0.12));
  color: var(--dsw-alias-state-error-text, #dc2626);
  border: 1px solid var(--dsw-alias-state-error, #ef4444);
}
`

export function ensureCss() {
  if (typeof document === 'undefined') return
  if (document.getElementById(CSS_ID)) return
  const style = document.createElement('style')
  style.id = CSS_ID
  style.textContent = CSS
  document.head.appendChild(style)
}

/** Stage-contract alias: PublishStage must call inject*Styles() at top level
 *  (scripts/verify-stage-contracts.mjs rule 4). Same injection as ensureCss. */
export function injectPublishStyles() {
  ensureCss()
}
