    const CSS = `
.sh-root{font-family:inherit;color:var(--dsw-alias-label-primary,inherit);max-width:920px}
.sh-hint{color:var(--dsw-alias-label-caption,#6b7280);font-size:12px;line-height:18px;margin:0 0 10px}
.sh-cards{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
@media (max-width:640px){.sh-cards{grid-template-columns:1fr}}
.sh-card{display:flex;gap:12px;align-items:flex-start;background:var(--dsw-alias-bg-layer-3,#fff);border:1px solid var(--dsw-alias-border-l2,#e5e7eb);border-radius:12px;padding:12px;cursor:pointer;text-align:left;width:100%;font:inherit;color:var(--dsw-alias-label-primary,inherit);transition:border-color .16s,background .16s}
.sh-card:hover{background:var(--dsw-alias-interactive-bg-hover,rgba(38,49,72,.06));border-color:var(--dsw-alias-label-dimmed,#c7d2fe)}
.sh-card.on{border-color:var(--dsw-alias-state-success-primary,#86efac)}
.sh-icon{width:40px;height:40px;border-radius:10px;object-fit:cover;border:1px solid var(--dsw-alias-border-l2,#e5e7eb);flex-shrink:0;background:linear-gradient(135deg,#c7d2fe,#fbcfe8);display:grid;place-items:center;font-weight:700;font-size:12px;color:#374151}
.sh-meta{min-width:0;flex:1;display:flex;flex-direction:column;gap:2px}
.sh-top{display:flex;align-items:center;gap:8px;min-width:0}
.sh-title{flex:1;min-width:0;font-weight:600;font-size:14px;line-height:20px;color:var(--dsw-alias-label-primary,inherit);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.sh-badge{flex:none;font-size:11px;line-height:16px;padding:0 6px;border-radius:999px;background:var(--dsw-alias-state-success-tertiary,#ecfdf5);color:var(--dsw-alias-state-success-primary,#047857)}
.sh-desc{color:var(--dsw-alias-label-tertiary,#6b7280);font-size:12px;line-height:18px;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden}
.sh-marks{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin:2px 0 0;min-width:0}
.sh-rate{display:inline-flex;align-items:center;gap:4px;font-size:11px;line-height:16px;color:#b45309;white-space:nowrap}
.sh-stars{color:#f59e0b;letter-spacing:.5px;font-size:11px}
.sh-safe{display:inline-flex;align-items:center;gap:6px;margin-left:20px;font-size:12px;line-height:16px;color:var(--dsw-alias-label-primary,inherit);white-space:nowrap}
.sh-safe .sh-sec-ico{width:16px;height:16px}
.sh-bluev{display:inline-flex;align-items:center;gap:4px;font-size:11px;line-height:16px;color:#2563eb;white-space:nowrap;min-width:0}
.sh-bluev i{width:14px;height:14px;border-radius:50%;background:#2563eb;color:#fff;font-style:normal;font-size:9px;font-weight:800;display:inline-grid;place-items:center;line-height:1;flex:none}
.sh-bluev span{min-width:0;overflow:hidden;text-overflow:ellipsis}
.sh-canon{font-size:12px;color:var(--dsw-alias-label-caption,#9ca3af);margin:0 0 8px}
.sh-overview{margin:0;font-size:14px;line-height:1.75;color:var(--dsw-alias-label-secondary,#374151);white-space:pre-wrap}
.sh-head .sh-marks{margin:0 0 8px}
.sh-head .sh-rate,.sh-head .sh-bluev,.sh-head .sh-safe{font-size:12px}
.sh-head .sh-stars{font-size:12px}
.sh-head .sh-bluev i{width:16px;height:16px;font-size:10px}
.sh-footline{color:var(--dsw-alias-label-caption,#9ca3af);font-size:11px;line-height:16px;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.sh-tags{display:flex;flex-wrap:wrap;gap:4px}
.sh-tag{font-size:11px;padding:2px 6px;border-radius:6px;background:var(--dsw-alias-markdown-tag,#f3f4f6);color:var(--dsw-alias-label-secondary,#4b5563)}
.sh-tag.blue{background:var(--dsw-alias-state-business-tertiary,#eff6ff);color:var(--dsw-alias-state-business-primary,#1d4ed8)}
.sh-tag.green{background:var(--dsw-alias-state-success-tertiary,#ecfdf5);color:var(--dsw-alias-state-success-primary,#047857)}
.sh-tag.orange{background:var(--dsw-alias-state-warn-tertiary,#fff7ed);color:var(--dsw-alias-state-warn-label,#c2410c)}
.sh-slug{color:var(--dsw-alias-label-caption,#9ca3af);font-size:11px;margin-top:auto}
.sh-overlay{position:fixed;inset:0;z-index:2147483000;background:var(--dsw-alias-bg-mask-3,rgba(15,23,42,.48));display:flex;align-items:center;justify-content:center;padding:24px 16px;box-sizing:border-box}
.sh-drawer{position:relative;width:min(720px,100%);max-height:min(86vh,840px);margin:0 auto;background:var(--dsw-alias-bg-layer-2,#fff);color:var(--dsw-alias-label-primary,inherit);border:1px solid var(--dsw-alias-border-l2,#9aa5b5);border-radius:12px;overflow:hidden;display:flex;flex-direction:column;box-shadow:0 18px 50px rgba(15,23,42,.28)}
.sh-drawer.sh-skill{width:min(840px,100%);height:min(86vh,860px);max-height:min(86vh,860px)}
.sh-close{position:absolute;top:10px;right:10px;z-index:2}
.sh-head{display:flex;gap:14px;align-items:flex-start;padding:18px 48px 16px 18px;border-bottom:1px solid var(--dsw-alias-border-l2,#e5e7eb)}
.sh-dicon{width:64px;height:64px;border-radius:12px;display:grid;place-items:center;font-weight:800;background:linear-gradient(135deg,#c7d2fe,#fbcfe8);border:1px solid var(--dsw-alias-border-l2,#e5e7eb);flex-shrink:0;object-fit:cover}
.sh-head h2{margin:0 0 6px;font-size:18px;line-height:1.35;color:var(--dsw-alias-label-primary,inherit)}
.sh-body{overflow:auto;padding:12px 18px 20px}
.sh-drawer.sh-skill .sh-body{flex:1;min-height:0;overflow:hidden;display:flex;flex-direction:column;padding:16px 22px 0}
.sh-pane{flex:1;min-height:0;overflow:auto;padding:16px 2px 28px}
.sh-stats{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 12px;flex:none}
.sh-stat{font-size:12px;padding:6px 10px;border-radius:8px;background:var(--dsw-alias-bg-module-platform,#f7f8fa);border:1px solid var(--dsw-alias-border-l2,#e5e7eb);color:var(--dsw-alias-label-secondary,inherit)}
.sh-tabs{display:flex;gap:16px;margin:0 -22px;padding:0 22px;border-bottom:1px solid var(--dsw-alias-border-l2,#e5e7eb);overflow-x:auto;scrollbar-width:none;flex:none}
.sh-tabs::-webkit-scrollbar{display:none}
.sh-tab{appearance:none;flex:none;background:0 0;border:0;border-bottom:2px solid transparent;margin-bottom:-1px;padding:10px 0 12px;font:inherit;font-size:13px;line-height:20px;color:var(--dsw-alias-label-tertiary,#6b7280);cursor:pointer;white-space:nowrap}
.sh-tab.on{color:var(--dsw-alias-label-primary,inherit);border-bottom-color:var(--dsw-alias-label-primary,#111827);font-weight:650}
.sh-ver-card{display:flex;gap:12px;align-items:flex-start;justify-content:space-between;padding:16px 18px;margin:0 0 12px;border:1px solid var(--dsw-alias-border-l2,#e5e7eb);border-radius:12px;background:var(--dsw-alias-bg-layer-3,#fff)}
.sh-ver-main{min-width:0;flex:1}
.sh-ver-head{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:0 0 6px}
.sh-ver-head b{font-size:15px}
.sh-ver-log{margin:8px 0 0;font-size:13px;line-height:1.7;color:var(--dsw-alias-label-secondary,#4b5563)}
.sh-ver-card .sh-mini{flex:none;align-self:center;white-space:nowrap}
.sh-eval-hero{display:grid;grid-template-columns:200px minmax(0,1fr);gap:24px;align-items:start;border:1px solid var(--dsw-alias-border-l2,#e5e7eb);border-radius:16px;padding:20px 22px;margin:0 0 22px;background:var(--dsw-alias-bg-layer-3,#fff)}
.sh-eval-score{font-size:32px;line-height:1.15;font-weight:750;margin:4px 0 10px;letter-spacing:-.03em}
.sh-eval-score span{font-size:16px;font-weight:500;color:var(--dsw-alias-label-tertiary,#6b7280)}
.sh-eval-tag{display:inline-block;font-size:12px;line-height:22px;padding:0 10px;border-radius:8px;background:#eff6ff;color:#1d4ed8;margin:0 0 12px}
.sh-eval-sum{font-size:13px;line-height:1.8;color:var(--dsw-alias-label-secondary,#4b5563);margin:0}
.sh-eval-h{font-size:15px;font-weight:650;margin:4px 0 14px}
.sh-eval-item{padding:16px 18px;margin:0 0 12px;border:1px solid var(--dsw-alias-border-l2,#eee);border-radius:12px;background:var(--dsw-alias-bg-layer-3,#fff)}
.sh-eval-h + .sh-eval-item{border-top:1px solid var(--dsw-alias-border-l2,#eee)}
.sh-eval-top{display:flex;align-items:center;gap:10px;margin:0 0 10px}
.sh-eval-ico{width:28px;height:28px;border-radius:8px;display:grid;place-items:center;flex:none}
.sh-eval-name{flex:1;min-width:0;font-size:14px;font-weight:650}
.sh-eval-sc{font-size:14px;font-weight:650;flex:none}
.sh-eval-bar{height:8px;border-radius:99px;background:var(--dsw-alias-bg-module-platform,#f3f4f6);overflow:hidden;margin:0 0 12px}
.sh-eval-bar>span{display:block;height:100%;border-radius:99px}
.sh-eval-why{margin:0;font-size:13px;line-height:1.8;color:var(--dsw-alias-label-tertiary,#6b7280)}
.sh-radar{display:block;margin:4px auto 0;color:var(--dsw-alias-border-l3,#cbd5e1)}
.sh-sec-ico{width:16px;height:16px;flex:none;display:block}
@media (max-width:560px){.sh-eval-hero{grid-template-columns:1fr;justify-items:center;text-align:center}}
.sh-foot{display:flex;gap:8px;justify-content:flex-end;align-items:center;padding:12px 18px;border-top:1px solid var(--dsw-alias-border-l2,#e5e7eb);background:var(--dsw-alias-bg-layer-1,#fafafa)}
.sh-mini{border:1px solid var(--dsw-alias-border-l2,#e5e7eb);background:var(--dsw-alias-bg-layer-3,#fff);border-radius:8px;padding:6px 10px;cursor:pointer;font:inherit;font-size:12px;color:var(--dsw-alias-label-primary,inherit);text-decoration:none}
.sh-mini.primary{background:var(--dsw-alias-button-primary-fill,#111827);color:var(--dsw-alias-label-primary-foreground,#fff);border-color:var(--dsw-alias-button-primary-fill,#111827)}
.sh-mini:disabled{opacity:.4;cursor:default}
.sh-toast{position:fixed;left:50%;bottom:28px;transform:translateX(-50%);background:var(--dsw-alias-toast-bg,#111827);color:#fff;padding:10px 16px;border-radius:999px;font-size:13px;z-index:2147483646}
.sh-err{color:var(--dsw-alias-state-error-primary,#b91c1c);font-size:12px;margin:8px 0}
.sh-tool{margin:4px 0 8px}
.sh-fade{animation:sh-in .18s ease}
.sh-row{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:12px;align-items:center;padding:10px 0;border-top:1px solid var(--dsw-alias-border-l2,#eee)}
.sh-row-actions{display:flex;align-items:center;gap:8px}
.sh-row:first-child{border-top:0}
.sh-cfg-item{list-style:none}
.sh-cfg{border:1px solid var(--dsw-alias-border-l2,#e5e7eb);background:var(--dsw-alias-bg-layer-3,#fff);border-radius:12px;box-sizing:border-box}
.sh-cfg.open{background:var(--dsw-alias-bg-layer-2,#fafafa)}
.sh-cfg-h{box-sizing:border-box;width:100%;align-items:center;gap:12px;padding:14px 16px;display:flex}
.sh-cfg-expand{appearance:none;flex:1;min-width:0;font:inherit;color:inherit;text-align:left;cursor:pointer;background:0 0;border:0;align-items:center;gap:12px;padding:0;display:flex}
.sh-cfg-toggle{appearance:none;flex:none;width:28px;height:28px;padding:0;border:0;background:0 0;color:inherit;cursor:pointer;display:grid;place-items:center}
.sh-cfg-t{flex-direction:column;flex:1;gap:4px;min-width:0;display:flex}
.sh-cfg-n{font-size:15px;font-weight:600;line-height:1.4;color:var(--dsw-alias-label-primary,inherit)}
.sh-cfg-d{color:var(--dsw-alias-label-tertiary,#6b7280);font-size:13px;line-height:1.5}
.sh-cfg-ch{color:var(--dsw-alias-label-tertiary,#6b7280);flex:none;width:14px;height:14px;transition:transform .16s;display:block;pointer-events:none}
.sh-cfg.open .sh-cfg-ch{transform:rotate(180deg)}
.sh-cfg-b{border-top:1px solid var(--dsw-alias-border-l2,#e5e7eb);margin:0 16px;padding:8px 0 12px;display:flex;flex-direction:column;gap:10px}
.sh-cfg-f{display:flex;flex-direction:column;gap:6px;padding:10px 0;border-top:1px solid var(--dsw-alias-border-l2,#eee)}
.sh-cfg-f:first-child{border-top:0}
.sh-cfg-f label{font-size:13px;font-weight:500;color:var(--dsw-alias-label-primary,inherit)}
.sh-cfg-f input[type=text],.sh-cfg-f input[type=number]{border:1px solid var(--dsw-alias-border-l2,#e5e7eb);background:var(--dsw-specific-input-major,var(--dsw-alias-bg-layer-3,#fff));color:var(--dsw-alias-label-primary,inherit);height:34px;font:inherit;border-radius:8px;padding:0 12px;font-size:13px}
.sh-cfg-hint{margin:0;color:var(--dsw-alias-label-caption,#6b7280);font-size:12px}
.sh-cfg-ft{border-top:1px solid var(--dsw-alias-border-l2,#e5e7eb);justify-content:flex-end;gap:8px;padding:12px 0 4px;display:flex}
.sh-cfg-ft button{appearance:none;font:inherit;cursor:pointer;border-radius:8px;padding:5px 14px;font-size:13px}
.sh-cfg-save{background:var(--dsw-alias-button-primary-fill,#111827);color:var(--dsw-alias-label-primary-foreground,#fff);border:1px solid var(--dsw-alias-button-primary-fill,#111827)}
.sh-cfg-save:disabled,.sh-cfg-disc:disabled{opacity:.4;cursor:default}
.sh-cfg-disc{background:0 0;border:1px solid var(--dsw-alias-border-l2,#d1d5db);color:var(--dsw-alias-label-secondary,#4b5563)}
.sh-cfg-err{color:var(--dsw-alias-state-error-primary,#b91c1c);flex:1;margin:0;font-size:12px}
@keyframes sh-in{from{opacity:0}to{opacity:1}}
.sh-mkt{display:flex;flex-direction:column;gap:14px;width:100%;max-width:760px;padding-bottom:24px;color:var(--dsw-alias-label-primary,#17191c);font-family:var(--dsw-font-family,inherit)}
.sh-mkt *{box-sizing:border-box}
.sh-mkt-filter{flex:none;height:30px;padding:0 10px;border:0;border-radius:8px;background:transparent;color:var(--dsw-alias-label-tertiary,#7b8088);font:inherit;font-size:12px;cursor:pointer;white-space:nowrap}
.sh-mkt-search{display:block;width:100%}
.sh-mkt-search [role="toolbar"]{width:100%;padding:0;height:auto;min-height:32px;max-height:none}
.sh-mkt-search .dshUk-SearchField-root,.sh-mkt-search .dshUk-SearchField-stretch{max-width:none}
.sh-mkt-filters{display:flex;align-items:center;gap:5px;overflow-x:auto;padding-bottom:2px;scrollbar-width:none}
.sh-mkt-filters::-webkit-scrollbar{display:none}
.sh-mkt-filter:hover{background:var(--dsw-alias-interactive-bg-hover,#f3f4f6)}
.sh-mkt-filter.on{background:var(--dsw-specific-sidebar-nav-item-active,#ebeef2);color:var(--dsw-alias-label-primary,#17191c);font-weight:500}
.sh-mkt-results{display:flex;align-items:baseline;justify-content:flex-start;gap:12px;padding:0 2px}
.sh-mkt-summary{margin:0;color:var(--dsw-alias-label-tertiary,#7b8088);font-size:12px;font-variant-numeric:tabular-nums}
.sh-mkt-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));align-items:stretch;gap:10px}
.sh-mkt-card{position:relative;min-width:0;min-height:188px;display:flex;flex-direction:column;overflow:hidden;border:1px solid var(--dsw-alias-border-l2,#e2e4e8);border-radius:10px;padding:14px;background:var(--dsw-alias-bg-layer-3,#fff)}
.sh-mkt-card.on{border-color:color-mix(in srgb,var(--dsw-alias-state-success-primary,#279c62) 45%,var(--dsw-alias-border-l2,#e2e4e8))}
.sh-mkt-card:hover{border-color:var(--dsw-alias-border-l1,#cfd2d8);box-shadow:var(--dsw-shadow-lv1,0 2px 8px rgb(20 24 32 / 8%))}
.sh-mkt-card.on:hover{border-color:var(--dsw-alias-state-success-primary,#279c62)}
.sh-mkt-head{display:flex;align-items:center;gap:10px}
.sh-mkt-head-main{min-width:0;flex:1;display:flex;flex-direction:column;gap:1px;justify-content:center}
.sh-mkt-avatar{flex:none;width:36px;height:36px;border-radius:9px;object-fit:cover;border:1px solid var(--dsw-alias-border-l2,#e2e4e8);background:linear-gradient(135deg,#c7d2fe,#fbcfe8)}
.sh-mkt-avatar-fallback{display:grid;place-items:center;font-weight:700;font-size:14px;line-height:1;color:#374151}
.sh-mkt-top{display:flex;align-items:center;justify-content:space-between;gap:10px}
.sh-mkt-owner{min-width:0;overflow:hidden;margin:0;color:var(--dsw-alias-label-tertiary,#7b8088);font-family:var(--ds-font-family-code,ui-monospace,monospace);font-size:11px;line-height:14px;text-overflow:ellipsis;white-space:nowrap}
.sh-mkt-badge{flex:none;min-height:18px;display:inline-flex;align-items:center;border-radius:5px;padding:1px 6px;background:var(--dsw-alias-bg-layer-1,#f5f6f8);color:var(--dsw-alias-label-tertiary,#7b8088);font-size:11px;line-height:16px}
.sh-mkt-badge.ok{background:color-mix(in srgb,var(--dsw-alias-state-success-primary,#279c62) 10%,transparent);color:var(--dsw-alias-state-success-primary,#279c62)}
.sh-mkt-badge.on{background:color-mix(in srgb,var(--dsw-alias-state-business-primary,#4d6bfe) 12%,transparent);color:var(--dsw-alias-state-business-primary,#4d6bfe)}
.sh-mkt-name{margin:0;overflow-wrap:anywhere;font-size:15px;line-height:18px;font-weight:600}
.sh-mkt-desc{display:-webkit-box;overflow:hidden;margin:10px 0 0;color:var(--dsw-alias-label-tertiary,#7b8088);font-size:12px;line-height:18px;-webkit-box-orient:vertical;-webkit-line-clamp:3}
.sh-mkt-meta{display:flex;justify-content:space-between;gap:10px;margin-top:auto;padding-top:13px;color:var(--dsw-alias-label-tertiary,#7b8088);font-size:11px;line-height:17px}
.sh-mkt-actions{display:flex;align-items:center;gap:8px;margin-top:10px;padding-top:10px;border-top:1px solid var(--dsw-alias-border-l2,#e2e4e8)}
.sh-mkt-details{flex:1;color:var(--dsw-alias-label-secondary,#4b5058);font-size:12px;font-weight:500;text-decoration:none;position:relative;z-index:1}
.sh-mkt-install{position:relative;z-index:1;min-height:30px;padding:0 10px;font-size:12px}
.sh-mkt-install:disabled{opacity:.4;cursor:default}
.sh-mkt-install.done{opacity:1;color:var(--dsw-alias-state-success-primary,#047857);background:transparent;cursor:default}
.sh-mkt-progress{display:flex;flex-direction:column;gap:8px;margin:0 2px;padding:10px 12px;border:1px solid var(--dsw-alias-border-l2,#e2e4e8);border-radius:10px;background:var(--dsw-alias-bg-layer-1,#f5f6f8);color:var(--dsw-alias-label-secondary,#4b5058);font-size:12px}
.sh-mkt-progress-row{display:flex;align-items:center;gap:10px;min-width:0}
.sh-mkt-progress-text{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-variant-numeric:tabular-nums}
.sh-mkt-progress-pct{flex:none;font-weight:600;font-variant-numeric:tabular-nums}
.sh-mkt-bar{width:100%;height:4px;border-radius:99px;overflow:hidden;background:var(--dsw-alias-border-l2,#e2e4e8)}
.sh-mkt-bar-fill{height:100%;border-radius:99px;background:var(--dsw-alias-state-business-primary,#4d6bfe);transition:width .6s ease}
.sh-mkt-bar-fill.wave{width:30%;animation:shBarSlide 1.2s ease-in-out infinite}
@keyframes shBarSlide{0%{margin-left:-30%}100%{margin-left:100%}}
@media (prefers-reduced-motion:reduce){.sh-mkt-bar-fill.wave{animation:none;width:40%}}
.sh-mkt-banner{position:sticky;top:0;z-index:3;display:flex;align-items:center;gap:10px;margin:0 2px 10px;padding:10px 12px;border:1px solid color-mix(in srgb,var(--dsw-alias-state-business-primary,#4d6bfe) 28%,var(--dsw-alias-border-l2,#e2e4e8));border-radius:10px;background:var(--dsw-alias-bg-layer-3,#fff)}
.sh-mkt-banner-text{flex:1;min-width:0;font-size:13px;line-height:18px}
.sh-mkt-banner-text b{font-weight:600}
.sh-mkt-restart{flex:none;height:30px;padding:0 12px;border:0;border-radius:8px;background:var(--dsw-alias-label-primary,#17191c);color:var(--dsw-alias-bg-layer-3,#fff);font:inherit;font-size:12px;font-weight:600;cursor:pointer}
.sh-mkt-restart:disabled{opacity:.5;cursor:default}
.sh-mkt-status{margin:0;padding:32px 12px;color:var(--dsw-alias-label-tertiary,#7b8088);font-size:13px;line-height:20px;text-align:center}
.sh-mkt-more{align-self:stretch;display:flex;align-items:center;justify-content:center;gap:8px;min-height:40px;margin-top:2px;padding:0 16px;border:1px solid var(--dsw-alias-border-l2,#e2e4e8);border-radius:10px;background:var(--dsw-alias-bg-layer-1,#f5f6f8);color:var(--dsw-alias-label-secondary,#4b5058);font:inherit;font-size:13px;font-weight:500;cursor:pointer;transition:background .16s,border-color .16s,box-shadow .16s,color .16s}
.sh-mkt-more:hover{background:var(--dsw-alias-bg-layer-3,#fff);border-color:var(--dsw-alias-border-l1,#cfd2d8);box-shadow:var(--dsw-shadow-lv1,0 2px 8px rgb(20 24 32 / 8%));color:var(--dsw-alias-label-primary,#17191c)}
.sh-mkt-more:active{transform:translateY(0.5px)}
.sh-mkt-more-left{color:var(--dsw-alias-label-tertiary,#7b8088);font-size:12px;font-weight:400;font-variant-numeric:tabular-nums}
.sh-mkt-more svg{flex:none;width:14px;height:14px}
@media (max-width:680px){.sh-mkt-grid{grid-template-columns:minmax(0,1fr)}}
.sh-plaza-wrap{width:100%}
.sh-plaza-wrap.rail{display:flex;justify-content:center}
.sh-plaza-trigger{box-sizing:border-box;display:flex;align-items:center;gap:8px;width:calc(100% + 4px);height:42px;margin:4px -2px;padding:0 10px 0 8px;border:0;border-radius:12px;background:transparent;color:var(--dsw-alias-label-primary,inherit);font:inherit;font-size:14px;line-height:22px;cursor:pointer;overflow:hidden}
.sh-plaza-wrap.rail .sh-plaza-trigger{width:36px;height:36px;margin:8px 0 10px;padding:0;justify-content:center;border-radius:50%;gap:0}
.sh-plaza-trigger:hover{background:var(--dsw-alias-interactive-bg-hover,#f3f4f6)}
.sh-plaza-trigger svg{flex:none;width:16px;height:16px}
.sh-plaza-wrap.rail .sh-plaza-trigger svg{width:18px;height:18px}
.sh-plaza-trigger.on,.sh-plaza-trigger[aria-expanded=true]{background:var(--dsw-specific-sidebar-nav-item-active,#ebeef2)}
.sh-plaza-trigger span{white-space:nowrap;overflow:hidden}
.sh-plaza-page{position:fixed;z-index:200;box-sizing:border-box;display:flex;flex-direction:column;min-height:0;overflow:hidden;background:var(--dsw-alias-bg-base,#fff);color:var(--dsw-alias-label-primary,#17191c)}
.sh-plaza-top{display:flex;align-items:center;gap:16px;flex:none;padding:10px 20px;border-bottom:1px solid var(--dsw-alias-border-l2,#e2e4e8);background:var(--dsw-alias-bg-base,#fff)}
.sh-plaza-tabs{display:flex;align-items:center;gap:16px;padding:0;border:0;background:inherit}
.sh-plaza-tab{height:30px;padding:0;border:0;border-radius:0;background:inherit;color:var(--dsw-alias-label-tertiary,#7b8088);font:inherit;font-size:13px;font-weight:500;cursor:pointer}
.sh-plaza-tab:hover{color:var(--dsw-alias-label-primary,#17191c)}
.sh-plaza-tab.on{background:inherit;color:var(--dsw-alias-state-business-primary,#4d6bfe);box-shadow:none}
.sh-plaza-close{margin-left:auto}
.sh-plaza-body{flex:1;min-height:0;overflow:auto;padding:18px 20px 32px}
.sh-plaza-body .sh-mkt{max-width:none;width:100%}
.sh-plaza-body .sh-cards,.sh-plaza-body .sh-mkt-grid{grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}
@media (max-width:1400px){.sh-plaza-body .sh-cards,.sh-plaza-body .sh-mkt-grid{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media (max-width:980px){.sh-plaza-body .sh-cards,.sh-plaza-body .sh-mkt-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:640px){.sh-plaza-body .sh-cards,.sh-plaza-body .sh-mkt-grid{grid-template-columns:1fr}}
.sh-plaza-body .sh-card{min-height:112px;padding:16px;gap:14px}
.sh-plaza-body .sh-icon{width:48px;height:48px;border-radius:12px;font-size:14px}
.sh-plaza-body .sh-title{font-size:15px;line-height:22px;white-space:normal;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}
.sh-plaza-body .sh-desc{-webkit-line-clamp:2;font-size:13px;line-height:20px}
.sh-plaza-body .sh-mkt-card{min-height:220px;padding:16px}
.sh-plaza-tool{margin:4px 0 8px}
.sh-plaza-tool .sh-cards{grid-template-columns:repeat(3,minmax(0,1fr))}
@media (max-width:720px){.sh-plaza-tool .sh-cards{grid-template-columns:1fr}}
.sh-plaza-skip{appearance:none;margin:8px 0 0;padding:0;border:0;background:0 0;color:var(--dsw-alias-label-caption,#9ca3af);font:inherit;font-size:12px;cursor:pointer}
.sh-plaza-skip:hover{color:var(--dsw-alias-label-secondary,#4b5563)}
.sh-plaza-status{margin:8px 0 0;font-size:12px;line-height:18px;color:var(--dsw-alias-label-secondary,#4b5563)}
`;

    const CSS_ID = "omnimux-market-style";
    function ensureCss() {
      if (typeof document === "undefined") return () => {};
      let s = document.getElementById(CSS_ID);
      if (!s) {
        s = document.createElement("style");
        s.id = CSS_ID;
        document.head.appendChild(s);
      }
      s.textContent = CSS;
      return () => {};
    }
