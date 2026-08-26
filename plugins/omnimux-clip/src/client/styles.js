export const CLIP_OVERLAY_STYLES_ID = 'omnimux-clip-overlay-styles'

/**
 * Overlay chrome + NLE workbench. Colors go through `--dsw-alias-*`.
 * Geometry: top bar 48px, 32/28/24 controls, specialized timeline internals.
 */
export const CLIP_OVERLAY_CSS = `
.omnimux-clip-overlay {
  position: fixed;
  inset: 0;
  z-index: 240;
  display: flex;
  flex-direction: column;
  background: var(--dsw-alias-bg-base, #111113);
  color: var(--dsw-alias-label-primary, inherit);
  overflow: hidden;
  box-sizing: border-box;
  pointer-events: auto;
  -webkit-app-region: no-drag;
}
.omnimux-clip-overlay-header {
  flex: none;
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 44px;
  height: 48px;
  padding: 0 20px;
  box-sizing: border-box;
  border-bottom: 1px solid var(--dsw-alias-border, rgba(255, 255, 255, 0.12));
  background: var(--dsw-alias-bg-elevated, var(--dsw-alias-bg-base, #161618));
  -webkit-app-region: no-drag;
}
.omnimux-clip-overlay-heading {
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.omnimux-clip-overlay-heading--editor {
  flex-direction: row;
  align-items: center;
  gap: 12px;
  max-width: 360px;
}
.omnimux-clip-overlay-heading--editor .omnimux-clip-overlay-subtitle {
  flex: none;
  white-space: nowrap;
}
.omnimux-clip-overlay-title {
  margin: 0;
  font-size: 15px;
  font-weight: 650;
  line-height: 20px;
  color: var(--dsw-alias-label-primary, inherit);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.omnimux-clip-overlay-subtitle {
  margin: 0;
  font-size: 12px;
  line-height: 16px;
  color: var(--dsw-alias-label-secondary, inherit);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.omnimux-clip-overlay-actions {
  flex: none;
  display: flex;
  align-items: center;
  gap: 8px;
}
.omnimux-clip-overlay-body {
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: var(--dsw-alias-bg-base, #111113);
}
.omnimux-clip-overlay-placeholder {
  margin: 0;
  max-width: 480px;
  text-align: center;
  font-size: 13px;
  line-height: 20px;
  color: var(--dsw-alias-label-secondary, inherit);
}

.omx-clip-workbench {
  flex: 1 1 auto;
  min-height: 0;
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr) 260px;
  gap: 0;
  background: var(--dsw-alias-bg-base, #111113);
}

.omx-clip-sidebar,
.omx-clip-inspector {
  min-height: 0;
  overflow: auto;
  padding: 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: var(--dsw-alias-bg-elevated, #161618);
  border-right: 1px solid var(--dsw-alias-border, rgba(255, 255, 255, 0.12));
}
.omx-clip-inspector {
  border-right: none;
  border-left: 1px solid var(--dsw-alias-border, rgba(255, 255, 255, 0.12));
}

.omx-clip-pane { display: flex; flex-direction: column; gap: 8px; }
.omx-clip-pane__title {
  margin: 0;
  font-size: 12px;
  font-weight: 650;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--dsw-alias-label-secondary, inherit);
}
.omx-clip-pane__empty {
  margin: 0;
  font-size: 12px;
  line-height: 18px;
  color: var(--dsw-alias-label-secondary, inherit);
}
.omx-clip-media-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.omx-clip-media-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid var(--dsw-alias-border, rgba(255, 255, 255, 0.12));
  background: var(--dsw-alias-bg-base, #111113);
}
.omx-clip-media-item__meta { min-width: 0; display: flex; flex-direction: column; gap: 2px; }
.omx-clip-media-item__name {
  font-size: 13px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.omx-clip-media-item__type {
  font-size: 11px;
  color: var(--dsw-alias-label-secondary, inherit);
}
.omx-clip-chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.omx-clip-stage {
  min-width: 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 16px;
  background: var(--dsw-alias-bg-base, #111113);
}
.omx-clip-stage__viewport {
  width: min(100%, 720px);
  aspect-ratio: var(--clip-aspect, 16 / 9);
  border-radius: 12px;
  overflow: hidden;
  background: var(--dsw-alias-bg-base, #000);
  border: 1px solid var(--dsw-alias-border, rgba(255, 255, 255, 0.12));
}
.omx-clip-stage__canvas {
  width: 100%;
  height: 100%;
  display: block;
}
.omx-clip-transport {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 32px;
}
.omx-clip-timecode {
  font-variant-numeric: tabular-nums;
  font-size: 12px;
  color: var(--dsw-alias-label-secondary, inherit);
}

.omx-clip-kv {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin: 0;
}
.omx-clip-kv dt {
  font-size: 11px;
  color: var(--dsw-alias-label-secondary, inherit);
}
.omx-clip-kv dd {
  margin: 2px 0 0;
  font-size: 13px;
  font-weight: 600;
}

.omx-clip-slider {
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr) 36px;
  align-items: center;
  gap: 8px;
  height: 32px;
}
.omx-clip-slider__label,
.omx-clip-slider__value {
  font-size: 12px;
  color: var(--dsw-alias-label-secondary, inherit);
}
.omx-clip-slider__input {
  width: 100%;
  accent-color: var(--dsw-alias-control-primary, #5b68f6);
}
.omx-clip-color {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 32px;
  font-size: 12px;
  color: var(--dsw-alias-label-secondary, inherit);
}
.omx-clip-color__input {
  width: 32px;
  height: 28px;
  padding: 0;
  border: 1px solid var(--dsw-alias-border, rgba(255, 255, 255, 0.12));
  border-radius: 6px;
  background: transparent;
}

.omx-clip-timeline {
  flex: none;
  height: 220px;
  display: grid;
  grid-template-columns: 160px minmax(0, 1fr);
  border-top: 1px solid var(--dsw-alias-border, rgba(255, 255, 255, 0.12));
  background: var(--dsw-alias-bg-elevated, #161618);
  position: relative;
}
.omx-clip-timeline__heads {
  display: flex;
  flex-direction: column;
  border-right: 1px solid var(--dsw-alias-border, rgba(255, 255, 255, 0.12));
}
.omx-clip-timeline__ruler-spacer { height: 28px; }
.omx-clip-track-head {
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  padding: 0 8px;
  box-sizing: border-box;
  border-top: 1px solid var(--dsw-alias-border, rgba(255, 255, 255, 0.08));
}
.omx-clip-track-head__name {
  font-size: 12px;
  font-weight: 600;
}
.omx-clip-track-head__ops { display: flex; gap: 2px; }
.omx-clip-glyph {
  font-size: 11px;
  font-weight: 700;
}
.omx-clip-timeline__body {
  overflow: auto;
  position: relative;
}
.omx-clip-timeline__scroll {
  position: relative;
  width: var(--clip-timeline-width, 800px);
  min-height: 100%;
}
.omx-clip-ruler {
  height: 28px;
  position: relative;
  border-bottom: 1px solid var(--dsw-alias-border, rgba(255, 255, 255, 0.12));
  cursor: ew-resize;
}
.omx-clip-ruler__tick {
  position: absolute;
  left: var(--tick-x, 0);
  top: 6px;
  font-size: 10px;
  color: var(--dsw-alias-label-secondary, inherit);
  transform: translateX(-50%);
}
.omx-clip-lane {
  position: relative;
  height: 48px;
  border-top: 1px solid var(--dsw-alias-border, rgba(255, 255, 255, 0.08));
}
.omx-clip-lane.is-locked { opacity: 0.55; }
.omx-clip-block {
  position: absolute;
  left: var(--clip-left, 0);
  top: 4px;
  width: var(--clip-width, 40px);
  height: var(--clip-h, 40px);
  border-radius: 6px;
  display: flex;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
  border: 1px solid color-mix(in srgb, var(--dsw-alias-info, #5b68f6) 50%, transparent);
  background: color-mix(in srgb, var(--dsw-alias-info, #5b68f6) 28%, var(--dsw-alias-bg-base, #111));
  cursor: grab;
}
.omx-clip-block--audio {
  border-color: color-mix(in srgb, var(--dsw-alias-success, #34d399) 50%, transparent);
  background: color-mix(in srgb, var(--dsw-alias-success, #34d399) 24%, var(--dsw-alias-bg-base, #111));
}
.omx-clip-block--text {
  border-color: color-mix(in srgb, var(--dsw-alias-warning, #fbbf24) 50%, transparent);
  background: color-mix(in srgb, var(--dsw-alias-warning, #fbbf24) 22%, var(--dsw-alias-bg-base, #111));
}
.omx-clip-block.is-selected {
  box-shadow: inset 0 0 0 1px var(--dsw-alias-control-primary, #5b68f6);
}
.omx-clip-block__label {
  flex: 1 1 auto;
  min-width: 0;
  padding: 0 8px;
  font-size: 11px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  pointer-events: none;
}
.omx-clip-block__edge {
  flex: none;
  width: 8px;
  height: 100%;
  cursor: ew-resize;
  background: color-mix(in srgb, var(--dsw-alias-label-primary, #fff) 18%, transparent);
}
.omx-clip-playhead {
  position: absolute;
  top: 0;
  bottom: 0;
  left: var(--clip-playhead, 0);
  width: 2px;
  background: var(--dsw-alias-danger, #f43f5e);
  pointer-events: none;
  z-index: 3;
}

.omx-clip-ctx {
  position: fixed;
  left: var(--ctx-x, 0);
  top: var(--ctx-y, 0);
  z-index: 260;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 6px;
  border-radius: 10px;
  border: 1px solid var(--dsw-alias-border, rgba(255, 255, 255, 0.12));
  background: var(--dsw-alias-bg-elevated, #1a1a1c);
  box-shadow: 0 12px 32px color-mix(in srgb, var(--dsw-alias-bg-base, #000) 55%, transparent);
}

.omx-clip-export { display: flex; flex-direction: column; gap: 12px; }
.omx-clip-export__bar {
  height: 8px;
  border-radius: 999px;
  overflow: hidden;
  background: color-mix(in srgb, var(--dsw-alias-label-primary, #fff) 10%, transparent);
}
.omx-clip-export__fill {
  display: block;
  height: 100%;
  width: calc(var(--export-ratio, 0) * 100%);
  background: var(--dsw-alias-control-primary, #5b68f6);
}
.omx-clip-export__status {
  margin: 0;
  font-size: 13px;
  color: var(--dsw-alias-label-secondary, inherit);
}
`
