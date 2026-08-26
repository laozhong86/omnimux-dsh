window.__ModuleLoader__.load({
  id: "omnimux-clip",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client/index.js
var index_exports = {};
__export(index_exports, {
  apply: () => apply,
  inject: () => inject,
  name: () => name
});
module.exports = __toCommonJS(index_exports);

// src/client/ClipOverlay.jsx
var import_react5 = require("react");

// src/client/clip-events.js
var OMNIMUX_CLIP_OPEN = "omnimux-clip-open";
var OMNIMUX_CLIP_SAVE = "omnimux-clip-save";
var OMNIMUX_CLIP_CLOSE = "omnimux-clip-close";
var OMNIMUX_CLIP_PROGRESS = "omnimux-clip-progress";
var CLIP_EVENT_MAX_BYTES = 1024 * 1024;
var OPEN_SOURCES = /* @__PURE__ */ new Set(["canvas", "sidebar", "agent"]);
function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}
function assertJsonPayload(payload) {
  let encoded;
  try {
    encoded = JSON.stringify(payload);
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    throw new Error(`clip payload is not JSON-serializable: ${reason}`);
  }
  if (encoded === void 0) {
    throw new Error("clip payload is not JSON-serializable");
  }
  const bytes = typeof TextEncoder === "function" ? new TextEncoder().encode(encoded).length : encoded.length;
  if (bytes > CLIP_EVENT_MAX_BYTES) {
    throw new Error("clip payload exceeds 1MB; persist via projectId");
  }
  return payload;
}
function isOpenClipEditorPayload(payload) {
  if (!isPlainObject(payload)) return false;
  if (!OPEN_SOURCES.has(payload.source)) return false;
  if (payload.nodeId != null && typeof payload.nodeId !== "string") return false;
  if (payload.source === "canvas" && !payload.nodeId) return false;
  return true;
}
function isSaveClipEditorPayload(payload) {
  if (!isPlainObject(payload)) return false;
  if (payload.nodeId != null && typeof payload.nodeId !== "string") return false;
  if (payload.projectId != null && typeof payload.projectId !== "string") return false;
  if (payload.schema != null && !isPlainObject(payload.schema)) return false;
  if (payload.output != null) {
    if (!isPlainObject(payload.output)) return false;
    if (typeof payload.output.videoPath !== "string") return false;
  }
  return true;
}
function isCloseClipEditorPayload(payload) {
  if (!isPlainObject(payload)) return false;
  if (payload.nodeId != null && typeof payload.nodeId !== "string") return false;
  return true;
}
function isProgressClipEditorPayload(payload) {
  if (!isPlainObject(payload)) return false;
  if (payload.nodeId != null && typeof payload.nodeId !== "string") return false;
  if (payload.status != null && typeof payload.status !== "string") return false;
  if (payload.renderProgress != null && typeof payload.renderProgress !== "number") return false;
  return true;
}
function dispatchClipEvent(type, detail, opts = {}) {
  assertJsonPayload(detail);
  const target = opts.target || (typeof window !== "undefined" ? window : void 0);
  if (!target || typeof CustomEvent !== "function") {
    throw new Error("clip events require a DOM EventTarget");
  }
  const event = new CustomEvent(type, { detail, bubbles: true });
  if (typeof opts.dispatch === "function") return opts.dispatch(event);
  return target.dispatchEvent(event);
}

// src/client/ClipBridge.js
function createClipBridge(opts = {}) {
  const target = opts.target || (typeof window !== "undefined" ? window : void 0);
  if (!target || typeof target.addEventListener !== "function") {
    throw new Error("ClipBridge requires a DOM EventTarget");
  }
  const bindings = [];
  function bind(type, guard, handler) {
    if (typeof handler !== "function") return;
    const listener = (event) => {
      const detail = event instanceof CustomEvent ? event.detail : void 0;
      if (!guard(detail)) return;
      handler(detail, event);
    };
    target.addEventListener(type, listener);
    bindings.push([type, listener]);
  }
  bind(OMNIMUX_CLIP_OPEN, isOpenClipEditorPayload, opts.onOpen);
  bind(OMNIMUX_CLIP_SAVE, isSaveClipEditorPayload, opts.onSave);
  bind(OMNIMUX_CLIP_CLOSE, isCloseClipEditorPayload, opts.onClose);
  bind(OMNIMUX_CLIP_PROGRESS, isProgressClipEditorPayload, opts.onProgress);
  return {
    target,
    /**
     * @param {object} payload
     */
    open(payload) {
      return dispatchClipEvent(OMNIMUX_CLIP_OPEN, payload, { target });
    },
    /**
     * @param {object} payload
     */
    save(payload) {
      return dispatchClipEvent(OMNIMUX_CLIP_SAVE, payload, { target });
    },
    /**
     * @param {object} payload
     */
    close(payload) {
      return dispatchClipEvent(OMNIMUX_CLIP_CLOSE, payload, { target });
    },
    /**
     * @param {object} payload
     */
    progress(payload) {
      return dispatchClipEvent(OMNIMUX_CLIP_PROGRESS, payload, { target });
    },
    dispose() {
      for (const [type, listener] of bindings) {
        target.removeEventListener(type, listener);
      }
      bindings.length = 0;
    }
  };
}

// src/client/styles.js
var CLIP_OVERLAY_STYLES_ID = "omnimux-clip-overlay-styles";
var CLIP_OVERLAY_CSS = `
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
`;

// src/client/store/useTimelineStore.js
var import_react = require("react");

// src/client/store/timelineTypes.js
var ASPECT_PRESETS = {
  "16:9": { width: 1920, height: 1080 },
  "9:16": { width: 1080, height: 1920 },
  "1:1": { width: 1080, height: 1080 }
};
var TEXT_PRESETS = [
  { id: "title", label: "\u6807\u9898", content: "\u6807\u9898\u6587\u5B57", fontFamily: "sans-serif", fontSize: 72, fontWeight: "bold", color: "#ffffff", strokeColor: "#000000", strokeWidth: 4, textAlign: "center" },
  { id: "subtitle", label: "\u5B57\u5E55", content: "\u5B57\u5E55\u5185\u5BB9", fontFamily: "sans-serif", fontSize: 42, fontWeight: "normal", color: "#ffffff", strokeColor: "#000000", strokeWidth: 3, backgroundColor: "rgba(0,0,0,0.45)", textAlign: "center" },
  { id: "caption", label: "\u82B1\u5B57", content: "\u82B1\u5B57", fontFamily: "sans-serif", fontSize: 56, fontWeight: "bold", color: "#ffe566", strokeColor: "#ff4d6d", strokeWidth: 5, textAlign: "center" },
  { id: "lower-third", label: "\u4E0B\u4E09\u5206\u4E4B\u4E00", content: "\u59D3\u540D / \u8EAB\u4EFD", fontFamily: "sans-serif", fontSize: 36, fontWeight: "bold", color: "#ffffff", backgroundColor: "rgba(20,20,24,0.75)", textAlign: "left" }
];
var TRANSITIONS = [
  { type: "none", label: "\u65E0\u8F6C\u573A", durationMs: 0 },
  { type: "cut", label: "\u786C\u5207", durationMs: 0 },
  { type: "crossfade", label: "\u4EA4\u53C9\u6EB6\u89E3", durationMs: 400 },
  { type: "fadeblack", label: "\u9ED1\u573A", durationMs: 600 }
];
function uid(prefix = "id") {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}_${Date.now().toString(36)}`;
}
function defaultCanvasConfig(aspectRatio = "16:9") {
  const size = ASPECT_PRESETS[aspectRatio] || ASPECT_PRESETS["16:9"];
  return {
    aspectRatio,
    width: size.width,
    height: size.height,
    fps: 30,
    durationMs: 8e3,
    backgroundColor: "#000000"
  };
}
function emptyTracks() {
  return [
    { id: "track_video", name: "\u89C6\u9891", type: "video", order: 0, isMuted: false, isLocked: false, isVisible: true, clips: [] },
    { id: "track_audio", name: "\u97F3\u9891", type: "audio", order: 1, isMuted: false, isLocked: false, isVisible: true, clips: [] },
    { id: "track_text", name: "\u5B57\u5E55", type: "text", order: 2, isMuted: false, isLocked: false, isVisible: true, clips: [] }
  ];
}
function defaultTextStyle(overrides = {}) {
  return {
    presetId: "subtitle",
    content: "\u5B57\u5E55",
    fontFamily: "sans-serif",
    fontSize: 42,
    fontWeight: "normal",
    color: "#ffffff",
    strokeColor: "#000000",
    strokeWidth: 3,
    backgroundColor: "",
    textAlign: "center",
    ...overrides
  };
}
function createEmptySchema(opts = {}) {
  const projectId = opts.projectId || uid("clip");
  return {
    version: "1.0",
    projectId,
    canvasConfig: { ...defaultCanvasConfig(opts.aspectRatio), ...opts.canvasConfig || {} },
    tracks: emptyTracks(),
    media: []
  };
}
function computeDurationMs(tracks, fallback = 8e3) {
  let max = 0;
  for (const track of tracks || []) {
    for (const clip of track.clips || []) {
      max = Math.max(max, (clip.startTimeMs || 0) + (clip.durationMs || 0));
    }
  }
  return Math.max(fallback, max);
}
function schemaFromOpenPayload(payload) {
  if (payload?.draftSchema && typeof payload.draftSchema === "object" && Array.isArray(payload.draftSchema.tracks)) {
    const schema2 = structuredCloneSafe(payload.draftSchema);
    schema2.projectId = payload.projectId || schema2.projectId || uid("clip");
    schema2.canvasConfig = { ...defaultCanvasConfig(), ...schema2.canvasConfig || {}, ...payload.canvasConfig || {} };
    schema2.canvasConfig.durationMs = computeDurationMs(schema2.tracks, schema2.canvasConfig.durationMs);
    return schema2;
  }
  const projectId = payload?.projectId || uid("clip");
  const schema = createEmptySchema({
    projectId,
    canvasConfig: payload?.canvasConfig
  });
  const inputs = payload?.upstreamInputs || {};
  const media = [];
  const videoTrack = schema.tracks.find((t) => t.type === "video");
  const audioTrack = schema.tracks.find((t) => t.type === "audio");
  const textTrack = schema.tracks.find((t) => t.type === "text");
  let cursor = 0;
  for (const item of inputs.videos || []) {
    const durationMs = Math.max(400, item.durationMs || 4e3);
    const path = item.path || item.url || "";
    const mediaId = uid("media");
    media.push({ id: mediaId, name: item.name || "video", type: "video", durationMs, path });
    videoTrack.clips.push(makeClip({
      trackId: videoTrack.id,
      name: item.name || "\u89C6\u9891",
      mediaType: "video",
      startTimeMs: cursor,
      durationMs,
      sourceUrl: path,
      sourceOutMs: durationMs
    }));
    cursor += durationMs;
  }
  for (const item of inputs.images || []) {
    const durationMs = Math.max(400, item.displayDurationMs || 3e3);
    const path = item.path || item.url || "";
    const mediaId = uid("media");
    media.push({ id: mediaId, name: item.name || "image", type: "image", durationMs, path });
    videoTrack.clips.push(makeClip({
      trackId: videoTrack.id,
      name: item.name || "\u56FE\u7247",
      mediaType: "image",
      startTimeMs: cursor,
      durationMs,
      sourceUrl: path,
      sourceOutMs: durationMs
    }));
    cursor += durationMs;
  }
  let audioCursor = 0;
  for (const item of inputs.audios || []) {
    const durationMs = Math.max(400, item.durationMs || 4e3);
    const path = item.path || item.url || "";
    media.push({ id: uid("media"), name: item.name || "audio", type: "audio", durationMs, path });
    audioTrack.clips.push(makeClip({
      trackId: audioTrack.id,
      name: item.name || "\u97F3\u9891",
      mediaType: "audio",
      startTimeMs: audioCursor,
      durationMs,
      sourceUrl: path,
      sourceOutMs: durationMs
    }));
    audioCursor += durationMs;
  }
  for (const caption of inputs.captions || []) {
    textTrack.clips.push(makeClip({
      trackId: textTrack.id,
      name: "\u5B57\u5E55",
      mediaType: "text",
      startTimeMs: caption.startTimeMs || 0,
      durationMs: caption.durationMs || 3e3,
      sourceUrl: "",
      textStyle: defaultTextStyle({ content: caption.text || "\u5B57\u5E55" })
    }));
  }
  schema.media = media;
  schema.canvasConfig.durationMs = computeDurationMs(schema.tracks, Math.max(cursor, audioCursor, 8e3));
  return schema;
}
function makeClip(partial = {}) {
  const durationMs = Math.max(200, partial.durationMs || 3e3);
  return {
    id: partial.id || uid("clip"),
    trackId: partial.trackId,
    name: partial.name || "\u7247\u6BB5",
    mediaType: partial.mediaType || "video",
    startTimeMs: Math.max(0, partial.startTimeMs || 0),
    durationMs,
    sourceUrl: partial.sourceUrl || "",
    sourceInMs: partial.sourceInMs || 0,
    sourceOutMs: partial.sourceOutMs || durationMs,
    speed: partial.speed ?? 1,
    volume: partial.volume ?? 1,
    textStyle: partial.textStyle,
    transition: partial.transition || { type: "none", durationMs: 0 }
  };
}
function structuredCloneSafe(value) {
  if (typeof structuredClone === "function") return structuredClone(value);
  return JSON.parse(JSON.stringify(value));
}
function stripRuntimeUrls(schema) {
  const next = structuredCloneSafe(schema);
  for (const track of next.tracks || []) {
    for (const clip of track.clips || []) {
      if (typeof clip.sourceUrl === "string" && clip.sourceUrl.startsWith("blob:")) {
        const media = (next.media || []).find((item) => item.id === clip.mediaId || item.name === clip.name);
        if (media?.path) clip.sourceUrl = media.path;
      }
    }
  }
  return next;
}
function formatTimecode(ms) {
  const value = Math.max(0, Math.round(Number(ms) || 0));
  const minutes = Math.floor(value / 6e4);
  const seconds = Math.floor(value % 6e4 / 1e3);
  const millis = value % 1e3;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(millis).padStart(3, "0")}`;
}

// src/client/store/timelineStore.js
var HISTORY_LIMIT = 80;
function snapshotOf(state) {
  return {
    schema: structuredCloneSafe(state.schema),
    selectedClipId: state.selectedClipId,
    selectedTrackId: state.selectedTrackId
  };
}
function restoreSnapshot(state, snap) {
  state.schema = structuredCloneSafe(snap.schema);
  state.selectedClipId = snap.selectedClipId;
  state.selectedTrackId = snap.selectedTrackId;
}
function createStore() {
  let state = {
    schema: createEmptySchema(),
    projectName: "\u672A\u547D\u540D\u5DE5\u7A0B",
    nodeId: void 0,
    workspaceId: void 0,
    selectedClipId: null,
    selectedTrackId: null,
    playheadMs: 0,
    isPlaying: false,
    zoomLevel: 1,
    past: [],
    future: []
  };
  const listeners = /* @__PURE__ */ new Set();
  function emit() {
    for (const listener of listeners) listener();
  }
  function set(partial) {
    state = { ...state, ...typeof partial === "function" ? partial(state) : partial };
    emit();
  }
  function mutate(recipe, { record = true } = {}) {
    if (record) {
      const snap = snapshotOf(state);
      state = {
        ...state,
        past: [...state.past, snap].slice(-HISTORY_LIMIT),
        future: []
      };
    }
    recipe(state);
    state.schema.canvasConfig.durationMs = computeDurationMs(
      state.schema.tracks,
      state.schema.canvasConfig.durationMs
    );
    emit();
  }
  const api = {
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    getState() {
      return state;
    },
    hydrateFromPayload(payload) {
      const schema = schemaFromOpenPayload(payload || {});
      state = {
        ...state,
        schema,
        projectName: payload?.nodeTitle || schema.projectId || "\u672A\u547D\u540D\u5DE5\u7A0B",
        nodeId: payload?.nodeId,
        workspaceId: payload?.workspaceId,
        selectedClipId: null,
        selectedTrackId: schema.tracks[0]?.id || null,
        playheadMs: 0,
        isPlaying: false,
        zoomLevel: 1,
        past: [],
        future: []
      };
      emit();
    },
    reset() {
      state = {
        schema: createEmptySchema(),
        projectName: "\u672A\u547D\u540D\u5DE5\u7A0B",
        nodeId: void 0,
        workspaceId: void 0,
        selectedClipId: null,
        selectedTrackId: null,
        playheadMs: 0,
        isPlaying: false,
        zoomLevel: 1,
        past: [],
        future: []
      };
      emit();
    },
    setProjectName(name2) {
      set({ projectName: String(name2 || "").slice(0, 80) || "\u672A\u547D\u540D\u5DE5\u7A0B" });
    },
    setAspectRatio(aspectRatio) {
      mutate((draft) => {
        const size = ASPECT_PRESETS[aspectRatio] || ASPECT_PRESETS["16:9"];
        draft.schema.canvasConfig.aspectRatio = aspectRatio;
        draft.schema.canvasConfig.width = size.width;
        draft.schema.canvasConfig.height = size.height;
      });
    },
    setFps(fps) {
      mutate((draft) => {
        draft.schema.canvasConfig.fps = fps;
      });
    },
    selectClip(clipId, trackId) {
      set({ selectedClipId: clipId || null, selectedTrackId: trackId || state.selectedTrackId });
    },
    setPlayhead(ms) {
      const duration = state.schema.canvasConfig.durationMs || 0;
      set({ playheadMs: Math.max(0, Math.min(duration, Math.round(ms))) });
    },
    setPlaying(isPlaying) {
      set({ isPlaying: Boolean(isPlaying) });
    },
    togglePlaying() {
      set({ isPlaying: !state.isPlaying });
    },
    setZoom(level) {
      set({ zoomLevel: Math.max(0.25, Math.min(8, Number(level) || 1)) });
    },
    addMediaItem(item) {
      mutate((draft) => {
        draft.schema.media.push({
          id: item.id || uid("media"),
          name: item.name || "\u7D20\u6750",
          type: item.type || "video",
          durationMs: item.durationMs,
          path: item.path || item.url || "",
          url: item.url
        });
      });
    },
    addClip(trackId, partial) {
      mutate((draft) => {
        const track = draft.schema.tracks.find((item) => item.id === trackId);
        if (!track || track.isLocked) return;
        const clip = makeClip({
          ...partial,
          trackId,
          startTimeMs: partial?.startTimeMs ?? draft.playheadMs
        });
        if (track.type === "text" && !clip.textStyle) {
          clip.mediaType = "text";
        }
        if (track.type === "audio") clip.mediaType = "audio";
        track.clips.push(clip);
        draft.selectedClipId = clip.id;
        draft.selectedTrackId = track.id;
      });
    },
    addClipFromMedia(media, trackHint) {
      const type = media.type === "audio" ? "audio" : media.type === "text" ? "text" : "video";
      const track = state.schema.tracks.find((item) => item.id === trackHint) || state.schema.tracks.find((item) => item.type === type) || state.schema.tracks[0];
      if (!track) return;
      api.addClip(track.id, {
        name: media.name,
        mediaType: media.type || type,
        sourceUrl: media.path || media.url || "",
        durationMs: media.durationMs || media.displayDurationMs || (type === "image" ? 3e3 : 4e3),
        sourceOutMs: media.durationMs || 4e3
      });
    },
    splitClip(clipId, atMs) {
      mutate((draft) => {
        const found = findIn(draft, clipId);
        if (!found || found.track.isLocked) return;
        const { track, clip, index } = found;
        const cut = Math.round(atMs);
        if (cut <= clip.startTimeMs + 80 || cut >= clip.startTimeMs + clip.durationMs - 80) return;
        const offset = cut - clip.startTimeMs;
        const sourceOffset = Math.round(offset * (clip.speed || 1));
        const right = makeClip({
          ...clip,
          id: uid("clip"),
          startTimeMs: cut,
          durationMs: clip.durationMs - offset,
          sourceInMs: (clip.sourceInMs || 0) + sourceOffset
        });
        clip.durationMs = offset;
        clip.sourceOutMs = (clip.sourceInMs || 0) + sourceOffset;
        track.clips.splice(index + 1, 0, right);
        draft.selectedClipId = right.id;
      });
    },
    captureHistory() {
      state = {
        ...state,
        past: [...state.past, snapshotOf(state)].slice(-HISTORY_LIMIT),
        future: []
      };
    },
    trimClip(clipId, { startTimeMs, durationMs, sourceInMs, sourceOutMs }, opts = {}) {
      mutate((draft) => {
        const found = findIn(draft, clipId);
        if (!found || found.track.isLocked) return;
        if (startTimeMs != null) found.clip.startTimeMs = Math.max(0, Math.round(startTimeMs));
        if (durationMs != null) found.clip.durationMs = Math.max(120, Math.round(durationMs));
        if (sourceInMs != null) found.clip.sourceInMs = Math.max(0, Math.round(sourceInMs));
        if (sourceOutMs != null) found.clip.sourceOutMs = Math.max(found.clip.sourceInMs + 120, Math.round(sourceOutMs));
      }, { record: opts.record !== false });
    },
    moveClip(clipId, { startTimeMs, trackId }, opts = {}) {
      mutate((draft) => {
        const found = findIn(draft, clipId);
        if (!found || found.track.isLocked) return;
        const nextStart = Math.max(0, Math.round(startTimeMs ?? found.clip.startTimeMs));
        if (trackId && trackId !== found.track.id) {
          const dest = draft.schema.tracks.find((item) => item.id === trackId);
          if (!dest || dest.isLocked) return;
          if (dest.type !== found.track.type && !(dest.type === "video" && (found.clip.mediaType === "video" || found.clip.mediaType === "image"))) {
            return;
          }
          found.track.clips = found.track.clips.filter((item) => item.id !== clipId);
          found.clip.trackId = dest.id;
          found.clip.startTimeMs = nextStart;
          dest.clips.push(found.clip);
          draft.selectedTrackId = dest.id;
        } else {
          found.clip.startTimeMs = nextStart;
        }
      }, { record: opts.record !== false });
    },
    removeClip(clipId) {
      mutate((draft) => {
        for (const track of draft.schema.tracks) {
          if (track.isLocked) continue;
          const next = track.clips.filter((item) => item.id !== clipId);
          if (next.length !== track.clips.length) {
            track.clips = next;
            if (draft.selectedClipId === clipId) draft.selectedClipId = null;
            return;
          }
        }
      });
    },
    setSpeed(clipId, speed) {
      mutate((draft) => {
        const found = findIn(draft, clipId);
        if (!found) return;
        found.clip.speed = Math.max(0.2, Math.min(10, Number(speed) || 1));
      });
    },
    setVolume(clipId, volume) {
      mutate((draft) => {
        const found = findIn(draft, clipId);
        if (!found) return;
        found.clip.volume = Math.max(0, Math.min(1, Number(volume) || 0));
      });
    },
    setTextStyle(clipId, patch) {
      mutate((draft) => {
        const found = findIn(draft, clipId);
        if (!found) return;
        found.clip.textStyle = { ...found.clip.textStyle || {}, ...patch };
        if (patch.content) found.clip.name = String(patch.content).slice(0, 24);
      });
    },
    setTransition(clipId, transition) {
      mutate((draft) => {
        const found = findIn(draft, clipId);
        if (!found) return;
        found.clip.transition = transition;
      });
    },
    toggleTrackFlag(trackId, flag) {
      mutate((draft) => {
        const track = draft.schema.tracks.find((item) => item.id === trackId);
        if (!track) return;
        track[flag] = !track[flag];
      });
    },
    undo() {
      if (state.past.length === 0) return;
      const current = snapshotOf(state);
      const previous = state.past[state.past.length - 1];
      restoreSnapshot(state, previous);
      state.past = state.past.slice(0, -1);
      state.future = [...state.future, current];
      emit();
    },
    redo() {
      if (state.future.length === 0) return;
      const current = snapshotOf(state);
      const next = state.future[state.future.length - 1];
      restoreSnapshot(state, next);
      state.future = state.future.slice(0, -1);
      state.past = [...state.past, current];
      emit();
    }
  };
  function findIn(draft, clipId) {
    for (const track of draft.schema.tracks) {
      const index = track.clips.findIndex((item) => item.id === clipId);
      if (index >= 0) return { track, clip: track.clips[index], index };
    }
    return null;
  }
  return api;
}
var timelineStore = createStore();
function selectedClipOf(state) {
  if (!state.selectedClipId) return null;
  for (const track of state.schema.tracks) {
    const clip = track.clips.find((item) => item.id === state.selectedClipId);
    if (clip) return { track, clip };
  }
  return null;
}

// src/client/store/useTimelineStore.js
function useTimelineStore(selector = (s) => s) {
  return (0, import_react.useSyncExternalStore)(
    timelineStore.subscribe,
    () => selector(timelineStore.getState()),
    () => selector(timelineStore.getState())
  );
}

// src/client/engine/previewRenderer.js
var mediaCache = /* @__PURE__ */ new Map();
function aspectCss(aspectRatio) {
  if (aspectRatio === "9:16") return "9 / 16";
  if (aspectRatio === "1:1") return "1 / 1";
  return "16 / 9";
}
function clipsAt(schema, timeMs, type) {
  const hits = [];
  for (const track of schema.tracks || []) {
    if (type && track.type !== type) continue;
    if (track.isVisible === false) continue;
    for (const clip of track.clips || []) {
      const start = clip.startTimeMs || 0;
      const end = start + (clip.durationMs || 0);
      if (timeMs >= start && timeMs < end) hits.push({ track, clip, localMs: timeMs - start });
    }
  }
  return hits.sort((a, b) => a.track.order - b.track.order);
}
function loadImage(url) {
  if (!url) return Promise.resolve(null);
  const cached = mediaCache.get(url);
  if (cached) return cached;
  const promise = new Promise((resolve) => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = () => resolve(image);
    image.onerror = () => resolve(null);
    image.src = url;
  });
  mediaCache.set(url, promise);
  return promise;
}
async function drawFrame(ctx, schema, timeMs, { width, height } = {}) {
  const w = width || schema.canvasConfig.width || 1920;
  const h = height || schema.canvasConfig.height || 1080;
  ctx.save();
  ctx.fillStyle = schema.canvasConfig.backgroundColor || "#000";
  ctx.fillRect(0, 0, w, h);
  const visuals = clipsAt(schema, timeMs, "video");
  for (const { clip, localMs } of visuals) {
    const opacity = transitionOpacity(clip, localMs);
    ctx.globalAlpha = opacity;
    if (clip.mediaType === "image" || looksLikeImage(clip.sourceUrl)) {
      const image = await loadImage(clip.sourceUrl);
      if (image) drawCover(ctx, image, w, h);
      else drawPlaceholder(ctx, w, h, clip.name || "\u56FE\u7247");
    } else if (clip.sourceUrl) {
      const image = await loadImage(clip.sourceUrl);
      if (image) drawCover(ctx, image, w, h);
      else drawPlaceholder(ctx, w, h, clip.name || "\u89C6\u9891");
    } else {
      drawPlaceholder(ctx, w, h, clip.name || "\u89C6\u9891");
    }
    ctx.globalAlpha = 1;
  }
  const texts = clipsAt(schema, timeMs, "text");
  for (const { clip } of texts) {
    drawText(ctx, clip.textStyle || {}, w, h);
  }
  ctx.restore();
}
function looksLikeImage(url) {
  return typeof url === "string" && /\.(png|jpe?g|gif|webp|avif)(\?|$)/i.test(url);
}
function transitionOpacity(clip, localMs) {
  const transition = clip.transition;
  if (!transition || transition.type === "none" || transition.type === "cut") return 1;
  const fade = Math.max(0, transition.durationMs || 0);
  if (!fade) return 1;
  if (transition.type === "crossfade" || transition.type === "fadeblack") {
    if (localMs < fade) return localMs / fade;
    if (localMs > (clip.durationMs || 0) - fade) {
      return Math.max(0, ((clip.durationMs || 0) - localMs) / fade);
    }
  }
  return 1;
}
function drawCover(ctx, source, width, height) {
  const sw = source.videoWidth || source.naturalWidth || source.width || width;
  const sh = source.videoHeight || source.naturalHeight || source.height || height;
  if (!sw || !sh) {
    ctx.drawImage(source, 0, 0, width, height);
    return;
  }
  const scale = Math.max(width / sw, height / sh);
  const dw = sw * scale;
  const dh = sh * scale;
  ctx.drawImage(source, (width - dw) / 2, (height - dh) / 2, dw, dh);
}
function drawPlaceholder(ctx, width, height, label) {
  ctx.fillStyle = "rgba(255,255,255,0.06)";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "rgba(255,255,255,0.7)";
  ctx.font = `${Math.round(height * 0.045)}px sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(label || "Clip", width / 2, height / 2);
}
function drawText(ctx, style, width, height) {
  const content = style.content || "";
  if (!content) return;
  const fontSize = style.fontSize || 42;
  const fontWeight = style.fontWeight || "normal";
  const fontFamily = style.fontFamily || "sans-serif";
  ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
  ctx.textAlign = style.textAlign || "center";
  ctx.textBaseline = "middle";
  const x = style.textAlign === "left" ? width * 0.08 : style.textAlign === "right" ? width * 0.92 : width / 2;
  const y = height * 0.82;
  if (style.backgroundColor) {
    const metrics = ctx.measureText(content);
    const padX = 18;
    const padY = 10;
    ctx.fillStyle = style.backgroundColor;
    const textW = metrics.width;
    const left = style.textAlign === "left" ? x - padX : style.textAlign === "right" ? x - textW - padX : x - textW / 2 - padX;
    ctx.fillRect(left, y - fontSize / 2 - padY, textW + padX * 2, fontSize + padY * 2);
  }
  if (style.strokeColor && style.strokeWidth) {
    ctx.lineWidth = style.strokeWidth;
    ctx.strokeStyle = style.strokeColor;
    ctx.strokeText(content, x, y);
  }
  ctx.fillStyle = style.color || "#ffffff";
  ctx.fillText(content, x, y);
}
function captureThumbnail(canvas) {
  try {
    return canvas.toDataURL("image/jpeg", 0.72);
  } catch {
    return "";
  }
}
function disposePreviewResources() {
  mediaCache.clear();
}

// src/client/engine/mp4Muxer.js
function concat(chunks) {
  const size = chunks.reduce((sum, item) => sum + item.byteLength, 0);
  const out = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) {
    out.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return out;
}
function u8(...bytes) {
  return new Uint8Array(bytes);
}
function u16(value) {
  return u8(value >> 8 & 255, value & 255);
}
function u32(value) {
  return u8(
    value >>> 24 & 255,
    value >>> 16 & 255,
    value >>> 8 & 255,
    value & 255
  );
}
function fourcc(tag) {
  return new Uint8Array([tag.charCodeAt(0), tag.charCodeAt(1), tag.charCodeAt(2), tag.charCodeAt(3)]);
}
function box(type, ...payloads) {
  const body = concat(payloads);
  return concat([u32(body.byteLength + 8), fourcc(type), body]);
}
function fullBox(type, version, flags, ...payloads) {
  return box(type, u8(version, flags >> 16 & 255, flags >> 8 & 255, flags & 255), ...payloads);
}
function ascii(text, length) {
  const out = new Uint8Array(length);
  for (let i = 0; i < Math.min(text.length, length); i += 1) out[i] = text.charCodeAt(i);
  return out;
}
function parseAvcDecoderConfig(description) {
  const view = description instanceof Uint8Array ? description : new Uint8Array(description);
  if (view.byteLength >= 7 && view[0] === 1) return view;
  const nals = splitAnnexB(view);
  const sps = nals.find((nal) => (nal[0] & 31) === 7) || nals[0] || new Uint8Array();
  const pps = nals.find((nal) => (nal[0] & 31) === 8) || nals[1] || new Uint8Array();
  return concat([
    u8(1, sps[1] || 100, sps[2] || 0, sps[3] || 31, 255),
    u8(225),
    u16(sps.byteLength),
    sps,
    u8(1),
    u16(pps.byteLength),
    pps
  ]);
}
function splitAnnexB(data) {
  const nals = [];
  let i = 0;
  while (i < data.length) {
    let start = -1;
    if (i + 3 < data.length && data[i] === 0 && data[i + 1] === 0 && data[i + 2] === 1) start = i + 3;
    if (i + 4 < data.length && data[i] === 0 && data[i + 1] === 0 && data[i + 2] === 0 && data[i + 3] === 1) start = i + 4;
    if (start < 0) {
      i += 1;
      continue;
    }
    let next = data.length;
    for (let j = start; j + 3 < data.length; j += 1) {
      if (data[j] === 0 && data[j + 1] === 0 && (data[j + 2] === 1 || data[j + 2] === 0 && data[j + 3] === 1)) {
        next = j;
        break;
      }
    }
    nals.push(data.subarray(start, next));
    i = next;
  }
  return nals;
}
function toLengthPrefixed(chunk, description) {
  const data = chunk instanceof Uint8Array ? chunk : new Uint8Array(chunk);
  if (description && description.byteLength >= 7 && description[0] === 1) {
    return data;
  }
  const nals = splitAnnexB(data);
  if (nals.length === 0) return data;
  const parts = [];
  for (const nal of nals) parts.push(u32(nal.byteLength), nal);
  return concat(parts);
}
function muxMp4(opts) {
  const timescale = 3e4;
  const fps = Math.max(1, opts.fps || 30);
  const frameDuration = Math.round(timescale / fps);
  const videoSamples = opts.videoChunks.map((chunk, index) => {
    const duration = chunk.duration > 0 ? Math.max(1, Math.round(chunk.duration / 1e6 * timescale)) : frameDuration;
    return {
      data: toLengthPrefixed(chunk.data, chunk.description),
      duration,
      isKey: chunk.type === "key" || index === 0,
      timestamp: chunk.timestamp || 0,
      description: chunk.description
    };
  });
  if (videoSamples.length === 0) {
    throw new Error("export-encode-failed: no video samples");
  }
  const avcC = parseAvcDecoderConfig(videoSamples.find((s) => s.description)?.description || videoSamples[0].data);
  const mdatParts = [];
  let videoOffset = 0;
  const chunkOffsets = [];
  const sampleSizes = [];
  const sampleDurations = [];
  const syncSamples = [];
  videoSamples.forEach((sample, index) => {
    chunkOffsets.push(videoOffset);
    sampleSizes.push(sample.data.byteLength);
    sampleDurations.push(sample.duration);
    if (sample.isKey) syncSamples.push(index + 1);
    mdatParts.push(sample.data);
    videoOffset += sample.data.byteLength;
  });
  const videoDuration = sampleDurations.reduce((sum, item) => sum + item, 0);
  const audio = (opts.audioChunks || []).map((chunk) => ({
    data: chunk.data instanceof Uint8Array ? chunk.data : new Uint8Array(chunk.data),
    duration: Math.max(1, Math.round((chunk.duration || 0) / 1e6 * (opts.audioSampleRate || 48e3)))
  }));
  const audioSampleRate = opts.audioSampleRate || 48e3;
  const audioChannels = opts.audioChannels || 2;
  const audioSizes = audio.map((s) => s.data.byteLength);
  const audioDurations = audio.map((s) => s.duration || 1024);
  const audioDuration = audioDurations.reduce((sum, item) => sum + item, 0);
  let audioOffset = videoOffset;
  const audioChunkOffsets = [];
  for (const sample of audio) {
    audioChunkOffsets.push(audioOffset);
    mdatParts.push(sample.data);
    audioOffset += sample.data.byteLength;
  }
  const mvhd = fullBox(
    "mvhd",
    0,
    0,
    u32(0),
    u32(0),
    u32(timescale),
    u32(videoDuration),
    u32(65536),
    u16(256),
    u16(0),
    u32(0),
    u32(0),
    concat([
      u32(65536),
      u32(0),
      u32(0),
      u32(0),
      u32(65536),
      u32(0),
      u32(0),
      u32(0),
      u32(1073741824)
    ]),
    u32(0),
    u32(0),
    u32(0),
    u32(0),
    u32(0),
    u32(0),
    u32(audio.length ? 3 : 2)
  );
  const tkhd = fullBox(
    "tkhd",
    0,
    3,
    u32(0),
    u32(0),
    u32(1),
    u32(0),
    u32(videoDuration),
    u32(0),
    u32(0),
    u16(0),
    u16(0),
    u16(0),
    u16(0),
    concat([
      u32(65536),
      u32(0),
      u32(0),
      u32(0),
      u32(65536),
      u32(0),
      u32(0),
      u32(0),
      u32(1073741824)
    ]),
    u32(opts.width << 16),
    u32(opts.height << 16)
  );
  const mdhd = fullBox("mdhd", 0, 0, u32(0), u32(0), u32(timescale), u32(videoDuration), u16(21956), u16(0));
  const hdlr = fullBox("hdlr", 0, 0, u32(0), fourcc("vide"), u32(0), u32(0), u32(0), ascii("VideoHandler", 13));
  const vmhd = fullBox("vmhd", 0, 1, u16(0), u16(0), u16(0), u16(0));
  const dinf = box("dinf", fullBox("dref", 0, 0, u32(1), fullBox("url ", 0, 1)));
  const avc1 = concat([
    u32(8 + 78 + avcC.byteLength + 8),
    fourcc("avc1"),
    u8(0, 0, 0, 0, 0, 0),
    u16(1),
    u16(0),
    u16(0),
    u32(0),
    u32(0),
    u32(0),
    u16(opts.width),
    u16(opts.height),
    u32(4718592),
    u32(4718592),
    u32(0),
    u16(1),
    ascii("AVC Coding", 32),
    u16(24),
    u16(65535),
    box("avcC", avcC)
  ]);
  const stsd = fullBox("stsd", 0, 0, u32(1), avc1);
  const sttsEntries = compress(sampleDurations);
  const stts = fullBox(
    "stts",
    0,
    0,
    u32(sttsEntries.length),
    ...sttsEntries.flatMap(([count, duration]) => [u32(count), u32(duration)])
  );
  const stss = fullBox("stss", 0, 0, u32(syncSamples.length), ...syncSamples.map((n) => u32(n)));
  const stsz = fullBox("stsz", 0, 0, u32(0), u32(sampleSizes.length), ...sampleSizes.map((n) => u32(n)));
  const stsc = fullBox("stsc", 0, 0, u32(1), u32(1), u32(1), u32(1));
  const stcoPlaceholder = fullBox("stco", 0, 0, u32(chunkOffsets.length), ...chunkOffsets.map(() => u32(0)));
  const stbl = box("stbl", stsd, stts, stss, stsc, stsz, stcoPlaceholder);
  const minf = box("minf", vmhd, dinf, stbl);
  const mdia = box("mdia", mdhd, hdlr, minf);
  const videoTrak = box("trak", tkhd, mdia);
  let audioTrak = new Uint8Array(0);
  let audioStcoPlaceholder = new Uint8Array(0);
  if (audio.length) {
    const audioTkhd = fullBox(
      "tkhd",
      0,
      3,
      u32(0),
      u32(0),
      u32(2),
      u32(0),
      u32(Math.round(audioDuration * (timescale / audioSampleRate))),
      u32(0),
      u32(0),
      u16(0),
      u16(0),
      u16(256),
      u16(0),
      concat([
        u32(65536),
        u32(0),
        u32(0),
        u32(0),
        u32(65536),
        u32(0),
        u32(0),
        u32(0),
        u32(1073741824)
      ]),
      u32(0),
      u32(0)
    );
    const audioMdhd = fullBox("mdhd", 0, 0, u32(0), u32(0), u32(audioSampleRate), u32(audioDuration), u16(21956), u16(0));
    const audioHdlr = fullBox("hdlr", 0, 0, u32(0), fourcc("soun"), u32(0), u32(0), u32(0), ascii("SoundHandler", 13));
    const smhd = fullBox("smhd", 0, 0, u16(0), u16(0));
    const esds = box(
      "esds",
      u8(0, 0, 0, 0),
      u8(3, 25, 0, 1, 0),
      u8(4, 17, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
      u8(5, 2, 17, 144),
      u8(6, 1, 2)
    );
    const mp4a = concat([
      u32(8 + 28 + esds.byteLength),
      fourcc("mp4a"),
      u8(0, 0, 0, 0, 0, 0),
      u16(1),
      u32(0),
      u32(0),
      u16(audioChannels),
      u16(16),
      u16(0),
      u16(0),
      u32(audioSampleRate << 16),
      esds
    ]);
    const aStsd = fullBox("stsd", 0, 0, u32(1), mp4a);
    const aSttsEntries = compress(audioDurations);
    const aStts = fullBox(
      "stts",
      0,
      0,
      u32(aSttsEntries.length),
      ...aSttsEntries.flatMap(([count, duration]) => [u32(count), u32(duration)])
    );
    const aStsz = fullBox("stsz", 0, 0, u32(0), u32(audioSizes.length), ...audioSizes.map((n) => u32(n)));
    const aStsc = fullBox("stsc", 0, 0, u32(1), u32(1), u32(1), u32(1));
    audioStcoPlaceholder = fullBox("stco", 0, 0, u32(audioChunkOffsets.length), ...audioChunkOffsets.map(() => u32(0)));
    const aStbl = box("stbl", aStsd, aStts, aStsc, aStsz, audioStcoPlaceholder);
    const aMinf = box("minf", smhd, dinf, aStbl);
    const aMdia = box("mdia", audioMdhd, audioHdlr, aMinf);
    audioTrak = box("trak", audioTkhd, aMdia);
  }
  const moov = box("moov", mvhd, videoTrak, audioTrak);
  const ftyp = box("ftyp", fourcc("isom"), u32(512), fourcc("isom"), fourcc("iso2"), fourcc("avc1"), fourcc("mp41"));
  const mdatBody = concat(mdatParts);
  const mdat = concat([u32(mdatBody.byteLength + 8), fourcc("mdat"), mdatBody]);
  const headerSize = ftyp.byteLength + moov.byteLength + 8;
  const videoStco = fullBox("stco", 0, 0, u32(chunkOffsets.length), ...chunkOffsets.map((off) => u32(off + headerSize)));
  const patchedMoov = replaceOnce(moov, stcoPlaceholder, videoStco);
  const audioStco = audio.length ? fullBox("stco", 0, 0, u32(audioChunkOffsets.length), ...audioChunkOffsets.map((off) => u32(off + headerSize))) : new Uint8Array(0);
  const finalMoov = audio.length ? replaceOnce(patchedMoov, audioStcoPlaceholder, audioStco) : patchedMoov;
  return concat([ftyp, finalMoov, mdat]);
}
function compress(durations) {
  const entries = [];
  for (const duration of durations) {
    const last = entries[entries.length - 1];
    if (last && last[1] === duration) last[0] += 1;
    else entries.push([1, duration]);
  }
  return entries;
}
function replaceOnce(haystack, needle, replacement) {
  const src = haystack;
  const n = needle;
  outer: for (let i = 0; i + n.byteLength <= src.byteLength; i += 1) {
    for (let j = 0; j < n.byteLength; j += 1) {
      if (src[i + j] !== n[j]) continue outer;
    }
    return concat([src.subarray(0, i), replacement, src.subarray(i + n.byteLength)]);
  }
  return src;
}
function bytesToBase64(bytes) {
  const u8arr = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  const chunk = 32768;
  let binary = "";
  for (let i = 0; i < u8arr.length; i += chunk) {
    binary += String.fromCharCode(...u8arr.subarray(i, i + chunk));
  }
  return btoa(binary);
}

// src/client/engine/exportEngine.js
var CLIP_API_PREFIX = "/omnimux-clip/api";
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function pickVideoCodec() {
  if (typeof VideoEncoder === "undefined") return null;
  return "avc1.42001f";
}
async function encodeWithWebCodecs(schema, { onProgress, signal } = {}) {
  const width = even(schema.canvasConfig.width || 1920);
  const height = even(schema.canvasConfig.height || 1080);
  const fps = schema.canvasConfig.fps || 30;
  const durationMs = Math.max(200, schema.canvasConfig.durationMs || 1e3);
  const frameCount = Math.max(1, Math.round(durationMs / 1e3 * fps));
  const codec = pickVideoCodec();
  if (!codec) {
    throw new Error("export-encode-failed: VideoEncoder is not available");
  }
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d", { alpha: false, desynchronized: true });
  if (!ctx) throw new Error("export-encode-failed: 2d context unavailable");
  const chunks = [];
  let encoderError = null;
  const encoder = new VideoEncoder({
    output(chunk, meta) {
      const data = new Uint8Array(chunk.byteLength);
      chunk.copyTo(data);
      chunks.push({
        data,
        timestamp: chunk.timestamp,
        duration: chunk.duration || Math.round(1e6 / fps),
        type: chunk.type,
        description: meta?.decoderConfig?.description ? new Uint8Array(meta.decoderConfig.description) : void 0
      });
    },
    error(error) {
      encoderError = error;
    }
  });
  const config = {
    codec,
    width,
    height,
    bitrate: Math.max(15e5, Math.round(width * height * fps * 0.08)),
    framerate: fps,
    avc: { format: "avc" },
    hardwareAcceleration: "prefer-hardware"
  };
  try {
    if (typeof VideoEncoder.isConfigSupported === "function") {
      const support = await VideoEncoder.isConfigSupported(config);
      if (!support?.supported) {
        delete config.avc;
        config.codec = "avc1.4d001f";
      }
    }
    encoder.configure(config);
  } catch (error) {
    encoder.close();
    throw new Error(`export-encode-failed: ${error instanceof Error ? error.message : String(error)}`);
  }
  let thumbnail = "";
  for (let i = 0; i < frameCount; i += 1) {
    if (signal?.aborted) {
      try {
        encoder.close();
      } catch {
      }
      throw new Error("canceled");
    }
    const timeMs = Math.min(durationMs - 1, Math.round(i / fps * 1e3));
    await drawFrame(ctx, schema, timeMs, { width, height });
    if (i === Math.min(3, frameCount - 1)) thumbnail = captureThumbnail(canvas);
    const frame = new VideoFrame(canvas, {
      timestamp: Math.round(i / fps * 1e6),
      duration: Math.round(1e6 / fps)
    });
    encoder.encode(frame, { keyFrame: i % Math.max(1, fps) === 0 });
    frame.close();
    if (i % 4 === 0) {
      onProgress?.({
        ratio: (i + 1) / frameCount,
        frame: i + 1,
        frameCount,
        status: "encoding"
      });
      await wait(0);
    }
    if (encoderError) break;
  }
  await encoder.flush();
  encoder.close();
  if (encoderError) {
    throw new Error(`export-encode-failed: ${encoderError.message || encoderError}`);
  }
  const audioChunks = await encodeAudioTrack(schema, { durationMs, signal }).catch(() => []);
  const bytes = muxMp4({
    width,
    height,
    fps,
    videoChunks: chunks,
    audioChunks,
    audioSampleRate: 48e3,
    audioChannels: 2
  });
  return {
    bytes,
    thumbnail,
    durationMs,
    width,
    height
  };
}
async function encodeAudioTrack(schema, { durationMs, signal }) {
  if (typeof AudioEncoder === "undefined") return [];
  const clips = [];
  for (let t = 0; t < durationMs; t += 1e3) {
    if (signal?.aborted) break;
    clips.push(...clipsAt(schema, t, "audio"));
  }
  if (clips.length === 0) return [];
  return [];
}
function even(value) {
  const n = Math.max(16, Math.round(Number(value) || 16));
  return n % 2 === 0 ? n : n + 1;
}
async function exportTimeline(schema, opts = {}) {
  const result = await encodeWithWebCodecs(schema, opts);
  const blob = new Blob([result.bytes], { type: "video/mp4" });
  return { ...result, blob };
}
async function persistExport(projectId, result, { schema } = {}) {
  const id = projectId || schema?.projectId;
  if (!id) throw new Error("invalid-id: missing projectId");
  const payload = {
    base64: bytesToBase64(result.bytes),
    mime: "video/mp4",
    durationMs: result.durationMs,
    width: result.width,
    height: result.height
  };
  const response = await fetch(`${CLIP_API_PREFIX}/projects/${encodeURIComponent(id)}/save-export`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(body.message || body.error || "export persist failed");
  }
  if (schema) {
    await fetch(`${CLIP_API_PREFIX}/projects/${encodeURIComponent(id)}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ schema: stripRuntimeUrls(schema) })
    }).catch(() => {
    });
  }
  return {
    path: body.path,
    bytes: body.bytes,
    thumbnailPath: result.thumbnail
  };
}

// src/client/components/TopHeader.jsx
var import_dsh_client_ui_primitives2 = require("@deepseek-ai/dsh-client-ui-primitives");

// node_modules/.pnpm/dsh-ui-kit@file+..+..+..+..+personal+dsh-ui-kit_@deepseek-ai+dsh-client-ui-primitives@0_c20a28005c8f0dbb66f7651fbedb1e05/node_modules/dsh-ui-kit/lib/index.js
var import_react2 = require("react");
var import_dsh_client_ui_primitives = require("@deepseek-ai/dsh-client-ui-primitives");
var import_jsx_runtime = require("react/jsx-runtime");
function cssClass(value, name2) {
  if (!value) throw new Error(`dsh-ui-kit: missing CSS module class "${name2}"`);
  return value;
}
function cx(...parts) {
  const out = [];
  for (const part of parts) {
    if (!part) continue;
    if (typeof part === "string" || typeof part === "number") {
      out.push(String(part));
      continue;
    }
    for (const [key, on] of Object.entries(part)) if (on) out.push(key);
  }
  return out.join(" ");
}
var injected = /* @__PURE__ */ new Set();
function injectCss(id, css) {
  if (typeof document === "undefined") return;
  if (injected.has(id)) return;
  injected.add(id);
  const style = document.createElement("style");
  style.setAttribute("data-dsh-ui-kit", id);
  style.textContent = css;
  document.head.appendChild(style);
}
injectCss("Button.module.css", '.dshUk-Button-button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  gap: 6px;\n  box-sizing: border-box;\n  margin: 0;\n  border: 1px solid transparent;\n  border-radius: 8px;\n  cursor: pointer;\n  font: inherit;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 18px;\n  letter-spacing: 0;\n  white-space: nowrap;\n  color: var(--dsw-alias-label-primary);\n  background: transparent;\n  padding: 0 12px;\n  height: 32px;\n  vertical-align: middle;\n  user-select: none;\n  transition:\n    background-color 120ms cubic-bezier(0.16, 1, 0.3, 1),\n    border-color 120ms cubic-bezier(0.16, 1, 0.3, 1),\n    color 120ms cubic-bezier(0.16, 1, 0.3, 1),\n    transform 120ms cubic-bezier(0.16, 1, 0.3, 1),\n    box-shadow 120ms cubic-bezier(0.16, 1, 0.3, 1),\n    opacity 120ms cubic-bezier(0.16, 1, 0.3, 1);\n}\n\n.dshUk-Button-button:focus {\n  outline: none;\n}\n\n.dshUk-Button-button:focus-visible {\n  outline: 2px solid var(--dsw-alias-brand-primary);\n  outline-offset: 2px;\n}\n\n.dshUk-Button-button:disabled,\n.dshUk-Button-button[aria-disabled="true"] {\n  cursor: not-allowed;\n  opacity: 0.4;\n}\n\n.dshUk-Button-button:active:not(:disabled):not([aria-disabled="true"]) {\n  transform: scale(0.96);\n}\n\n.dshUk-Button-sm {\n  height: 28px;\n  padding: 0 10px;\n  border-radius: 6px;\n  font-size: 12px;\n  line-height: 16px;\n}\n\n.dshUk-Button-xs {\n  height: 24px;\n  padding: 0 8px;\n  border-radius: 6px;\n  font-size: 12px;\n  line-height: 16px;\n  gap: 4px;\n}\n\n.dshUk-Button-iconOnly {\n  padding: 0;\n  width: 32px;\n}\n\n.dshUk-Button-iconOnly.dshUk-Button-sm {\n  width: 28px;\n}\n\n.dshUk-Button-iconOnly.dshUk-Button-xs {\n  width: 24px;\n}\n\n.dshUk-Button-primary {\n  background: var(--dsw-alias-button-primary-fill);\n  color: var(--dsw-alias-label-primary-foreground);\n}\n\n.dshUk-Button-primary:hover:not(:disabled):not([aria-disabled="true"]) {\n  background: var(--dsw-alias-button-primary-hover);\n}\n\n.dshUk-Button-secondary {\n  background: var(--dsw-alias-bg-layer-1);\n  border-color: var(--dsw-alias-border-l2);\n  color: var(--dsw-alias-label-primary);\n}\n\n.dshUk-Button-secondary:hover:not(:disabled):not([aria-disabled="true"]) {\n  background: var(--dsw-alias-interactive-bg-hover);\n  border-color: var(--dsw-alias-border-l3);\n}\n\n.dshUk-Button-ghost {\n  background: transparent;\n  color: var(--dsw-alias-label-primary);\n}\n\n.dshUk-Button-ghost:hover:not(:disabled):not([aria-disabled="true"]) {\n  background: var(--dsw-alias-interactive-bg-hover);\n}\n\n.dshUk-Button-ghost:active:not(:disabled):not([aria-disabled="true"]) {\n  background: var(--dsw-alias-interactive-bg-active);\n}\n\n.dshUk-Button-outline {\n  background: transparent;\n  border-color: var(--dsw-alias-border-l2);\n  color: var(--dsw-alias-label-primary);\n}\n\n.dshUk-Button-outline:hover:not(:disabled):not([aria-disabled="true"]) {\n  background: var(--dsw-alias-interactive-bg-hover);\n  border-color: var(--dsw-alias-border-l3);\n}\n\n.dshUk-Button-danger {\n  background: var(--dsw-alias-state-error-primary);\n  color: var(--dsw-alias-label-primary-foreground);\n}\n\n.dshUk-Button-danger:hover:not(:disabled):not([aria-disabled="true"]) {\n  background: var(--dsw-alias-state-error-secondary);\n}\n\n.dshUk-Button-ghost[aria-pressed="true"],\n.dshUk-Button-secondary[aria-pressed="true"] {\n  background: var(--dsw-alias-button-ghost-active-fill);\n  box-shadow: inset 0 0 0 1px var(--dsw-alias-button-ghost-active-border);\n}\n\n/* Outline already owns a real 1px border. Keep pressed fill/border as\n * declarations \u2014 do not share the ghost/secondary inset box-shadow or the\n * pressed state would double-stroke. */\n.dshUk-Button-outline[aria-pressed="true"] {\n  background: var(--dsw-alias-button-ghost-active-fill);\n  border-color: var(--dsw-alias-button-ghost-active-border);\n  color: var(--dsw-alias-label-primary);\n}\n\n/* Hover specificity defense: `.dshUk-Button-outline:hover` (and ghost/secondary hover)\n * would otherwise wash the pressed fill/border back to the idle hover tokens. */\n.dshUk-Button-ghost[aria-pressed="true"]:hover:not(:disabled):not([aria-disabled="true"]),\n.dshUk-Button-secondary[aria-pressed="true"]:hover:not(:disabled):not([aria-disabled="true"]),\n.dshUk-Button-outline[aria-pressed="true"]:hover:not(:disabled):not([aria-disabled="true"]) {\n  background: var(--dsw-alias-button-ghost-active-hover);\n}\n\n.dshUk-Button-outline[aria-pressed="true"]:hover:not(:disabled):not([aria-disabled="true"]) {\n  border-color: var(--dsw-alias-button-ghost-active-border);\n}\n\n.dshUk-Button-slot {\n  display: inline-flex;\n  width: 16px;\n  height: 16px;\n  align-items: center;\n  justify-content: center;\n  flex: none;\n}\n\n.dshUk-Button-xs .dshUk-Button-slot {\n  width: 14px;\n  height: 14px;\n}\n\n.dshUk-Button-spinner {\n  animation: dshUkSpin 0.7s linear infinite;\n}\n\n.dshUk-Button-label {\n  min-width: 0;\n}\n\n.dshUk-Button-loadingLabel {\n  opacity: 0.84;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .dshUk-Button-button {\n    transition: none;\n  }\n\n  .dshUk-Button-button:active:not(:disabled):not([aria-disabled="true"]) {\n    transform: none;\n  }\n\n  .dshUk-Button-spinner {\n    animation: none;\n  }\n}\n\n@keyframes dshUkSpin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n');
var Button_module_css_default = {
  "button": "dshUk-Button-button",
  "sm": "dshUk-Button-sm",
  "xs": "dshUk-Button-xs",
  "iconOnly": "dshUk-Button-iconOnly",
  "primary": "dshUk-Button-primary",
  "secondary": "dshUk-Button-secondary",
  "ghost": "dshUk-Button-ghost",
  "outline": "dshUk-Button-outline",
  "danger": "dshUk-Button-danger",
  "slot": "dshUk-Button-slot",
  "spinner": "dshUk-Button-spinner",
  "label": "dshUk-Button-label",
  "loadingLabel": "dshUk-Button-loadingLabel"
};
var VARIANT_CLASS = {
  primary: cssClass(Button_module_css_default.primary, "primary"),
  secondary: cssClass(Button_module_css_default.secondary, "secondary"),
  ghost: cssClass(Button_module_css_default.ghost, "ghost"),
  outline: cssClass(Button_module_css_default.outline, "outline"),
  danger: cssClass(Button_module_css_default.danger, "danger")
};
var SIZE_CLASS$1 = {
  default: void 0,
  sm: cssClass(Button_module_css_default.sm, "sm"),
  xs: cssClass(Button_module_css_default.xs, "xs")
};
var Button = (0, import_react2.forwardRef)(function Button2({ variant = "secondary", size = "default", loading = false, leadingIcon, trailingIcon, type = "button", className, disabled, children, ...rest }, ref) {
  const isDisabled = Boolean(disabled) || loading;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
    ...rest,
    ref,
    type,
    className: cx(Button_module_css_default.button, VARIANT_CLASS[variant], SIZE_CLASS$1[size], className),
    disabled: isDisabled,
    "aria-busy": loading || void 0,
    "aria-disabled": isDisabled || void 0,
    children: [
      loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        className: cx(Button_module_css_default.slot, Button_module_css_default.spinner),
        "aria-hidden": "true",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.IconLoadingOutline16, { size: size === "xs" ? 14 : 16 })
      }) : leadingIcon != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        className: Button_module_css_default.slot,
        "aria-hidden": "true",
        children: leadingIcon
      }) : null,
      children != null && children !== "" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        className: cx(Button_module_css_default.label, loading && Button_module_css_default.loadingLabel),
        children
      }) : null,
      !loading && trailingIcon != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        className: Button_module_css_default.slot,
        "aria-hidden": "true",
        children: trailingIcon
      }) : null
    ]
  });
});
var IconButton = (0, import_react2.forwardRef)(function IconButton2({ variant = "ghost", size = "default", loading = false, type = "button", className, disabled, children, title, tooltipSide = "bottom", "aria-label": ariaLabel, ...rest }, ref) {
  const isDisabled = Boolean(disabled) || loading;
  const tooltip = title ?? ariaLabel;
  const button = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
    ...rest,
    ref,
    type,
    className: cx(Button_module_css_default.button, VARIANT_CLASS[variant], SIZE_CLASS$1[size], Button_module_css_default.iconOnly, className),
    disabled: isDisabled,
    "aria-label": ariaLabel,
    "aria-busy": loading || void 0,
    "aria-disabled": isDisabled || void 0,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
      className: cx(Button_module_css_default.slot, loading && Button_module_css_default.spinner),
      "aria-hidden": "true",
      children: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.IconLoadingOutline16, { size: size === "xs" ? 14 : 16 }) : children
    })
  });
  if (!tooltip) return button;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.Tooltip, {
    label: tooltip,
    side: tooltipSide,
    delayMs: 280,
    disabled: isDisabled,
    children: button
  });
});
injectCss("SearchField.module.css", '.dshUk-SearchField-root {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  box-sizing: border-box;\n  height: 32px;\n  min-width: 140px;\n  max-width: 260px;\n  width: 100%;\n  padding: 0 8px 0 10px;\n  border: 1px solid var(--dsw-alias-border-l2);\n  border-radius: 8px;\n  background: var(--dsw-alias-bg-layer-1);\n  color: var(--dsw-alias-label-primary);\n  transition:\n    border-color 120ms cubic-bezier(0.16, 1, 0.3, 1),\n    box-shadow 120ms cubic-bezier(0.16, 1, 0.3, 1),\n    background-color 120ms cubic-bezier(0.16, 1, 0.3, 1);\n}\n\n.dshUk-SearchField-stretch {\n  flex: 1 1 200px;\n}\n\n.dshUk-SearchField-root:hover:not(.dshUk-SearchField-disabled) {\n  border-color: var(--dsw-alias-border-l3);\n}\n\n.dshUk-SearchField-root:focus-within {\n  border-color: var(--dsw-alias-brand-primary);\n  box-shadow: 0 0 0 2px var(--dsw-alias-state-business-tertiary);\n}\n\n.dshUk-SearchField-disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n\n.dshUk-SearchField-icon {\n  display: inline-flex;\n  width: 16px;\n  height: 16px;\n  align-items: center;\n  justify-content: center;\n  flex: none;\n  color: var(--dsw-alias-label-tertiary);\n}\n\n.dshUk-SearchField-input {\n  flex: 1;\n  min-width: 0;\n  height: 100%;\n  border: none;\n  outline: none;\n  background: transparent;\n  font: inherit;\n  font-size: 13px;\n  line-height: 18px;\n  color: var(--dsw-alias-label-primary);\n}\n\n.dshUk-SearchField-input::placeholder {\n  color: var(--dsw-alias-label-dimmed);\n}\n\n.dshUk-SearchField-input:disabled {\n  cursor: not-allowed;\n}\n\n.dshUk-SearchField-input::-webkit-search-decoration,\n.dshUk-SearchField-input::-webkit-search-cancel-button,\n.dshUk-SearchField-input::-webkit-search-results-button,\n.dshUk-SearchField-input::-webkit-search-results-decoration {\n  -webkit-appearance: none;\n  appearance: none;\n}\n\n.dshUk-SearchField-input[type="search"] {\n  -webkit-appearance: none;\n  appearance: none;\n}\n\n.dshUk-SearchField-shortcut {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex: none;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 5px;\n  border: 1px solid var(--dsw-alias-border-l2);\n  border-radius: 4px;\n  background: var(--dsw-alias-bg-layer-2);\n  color: var(--dsw-alias-label-tertiary);\n  font-size: 11px;\n  line-height: 16px;\n  font-weight: 500;\n  letter-spacing: 0;\n}\n\n.dshUk-SearchField-clear {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex: none;\n  width: 20px;\n  height: 20px;\n  margin: 0;\n  padding: 0;\n  border: none;\n  border-radius: 6px;\n  background: transparent;\n  color: var(--dsw-alias-label-tertiary);\n  cursor: pointer;\n}\n\n.dshUk-SearchField-clear:hover:not(:disabled) {\n  background: var(--dsw-alias-interactive-bg-hover);\n  color: var(--dsw-alias-label-primary);\n}\n\n.dshUk-SearchField-clear:focus {\n  outline: none;\n}\n\n.dshUk-SearchField-clear:focus-visible {\n  outline: 2px solid var(--dsw-alias-brand-primary);\n  outline-offset: 1px;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .dshUk-SearchField-root {\n    transition: none;\n  }\n}\n');
var SearchField_module_css_default = {
  "root": "dshUk-SearchField-root",
  "stretch": "dshUk-SearchField-stretch",
  "disabled": "dshUk-SearchField-disabled",
  "icon": "dshUk-SearchField-icon",
  "input": "dshUk-SearchField-input",
  "shortcut": "dshUk-SearchField-shortcut",
  "clear": "dshUk-SearchField-clear"
};
function isTypingTarget(target) {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return true;
  return target.isContentEditable;
}
function matchesShortcut(event, shortcut) {
  const raw = shortcut.trim();
  if (!raw) return false;
  const lower = raw.toLowerCase();
  const wantsMeta = /⌘|cmd|meta/.test(lower);
  const wantsCtrl = /\bctrl\b|⌃/.test(lower);
  const wantsAlt = /\balt\b|⌥/.test(lower);
  const wantsShift = /\bshift\b|⇧/.test(lower);
  const key = raw.replace(/⌘|⌃|⌥|⇧|cmd|meta|ctrl|alt|shift|\+/gi, "").trim().toLowerCase();
  if (!key) return false;
  if (Boolean(event.metaKey) !== wantsMeta) return false;
  if (Boolean(event.ctrlKey) !== wantsCtrl) return false;
  if (Boolean(event.altKey) !== wantsAlt) return false;
  if (Boolean(event.shiftKey) !== wantsShift) return false;
  return event.key.toLowerCase() === key;
}
var SearchField = (0, import_react2.forwardRef)(function SearchField2({ value, defaultValue = "", onValueChange, onClear, debounceMs = 200, shortcut, stretch = false, clearLabel = "Clear", className, disabled, id, placeholder = "Search", ...rest }, ref) {
  const generatedId = (0, import_react2.useId)();
  const inputId = id ?? generatedId;
  const inputRef = (0, import_react2.useRef)(null);
  const timerRef = (0, import_react2.useRef)(null);
  const controlled = value !== void 0;
  const [inner, setInner] = (0, import_react2.useState)(defaultValue);
  const current = controlled ? value : inner;
  const immediate = controlled || debounceMs <= 0;
  (0, import_react2.useEffect)(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);
  (0, import_react2.useEffect)(() => {
    if (!shortcut || disabled) return;
    const onKey = (event) => {
      if (event.defaultPrevented) return;
      if (isTypingTarget(event.target)) return;
      if (!matchesShortcut(event, shortcut)) return;
      event.preventDefault();
      inputRef.current?.focus();
      inputRef.current?.select();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [shortcut, disabled]);
  function emit(next) {
    if (immediate) {
      onValueChange?.(next);
      return;
    }
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      timerRef.current = null;
      onValueChange?.(next);
    }, debounceMs);
  }
  function apply2(next) {
    if (!controlled) setInner(next);
    emit(next);
  }
  function onChange(event) {
    apply2(event.target.value);
  }
  function handleClear() {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (!controlled) setInner("");
    onValueChange?.("");
    onClear?.();
    inputRef.current?.focus();
  }
  (0, import_react2.useImperativeHandle)(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
    clear: handleClear
  }));
  function onKeyDown(event) {
    rest.onKeyDown?.(event);
    if (event.defaultPrevented) return;
    if (event.key === "Escape" && current) {
      event.preventDefault();
      handleClear();
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
    className: cx(SearchField_module_css_default.root, stretch && SearchField_module_css_default.stretch, disabled && SearchField_module_css_default.disabled, className),
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        className: SearchField_module_css_default.icon,
        "aria-hidden": "true",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.IconSearchOutline16, { size: 16 })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
        ...rest,
        ref: inputRef,
        id: inputId,
        type: "search",
        className: SearchField_module_css_default.input,
        value: current,
        disabled,
        placeholder,
        autoComplete: "off",
        spellCheck: false,
        onChange,
        onKeyDown
      }),
      current ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
        type: "button",
        className: SearchField_module_css_default.clear,
        "aria-label": clearLabel,
        title: clearLabel,
        disabled,
        onClick: handleClear,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.IconCloseFill14, { size: 14 })
      }) : shortcut ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("kbd", {
        className: SearchField_module_css_default.shortcut,
        children: shortcut
      }) : null
    ]
  });
});
injectCss("InputField.module.css", ".dshUk-InputField-root {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 0;\n}\n\n.dshUk-InputField-label {\n  display: block;\n  font-size: 12px;\n  line-height: 16px;\n  font-weight: 500;\n  color: var(--dsw-alias-label-secondary);\n}\n\n.dshUk-InputField-required {\n  margin-left: 2px;\n  color: var(--dsw-alias-state-error-primary);\n}\n\n.dshUk-InputField-control {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  box-sizing: border-box;\n  height: 32px;\n  padding: 0 10px;\n  border: 1px solid var(--dsw-alias-border-l2);\n  border-radius: 8px;\n  background: var(--dsw-alias-bg-layer-1);\n  transition:\n    border-color 120ms cubic-bezier(0.16, 1, 0.3, 1),\n    box-shadow 120ms cubic-bezier(0.16, 1, 0.3, 1);\n}\n\n.dshUk-InputField-control:hover:not(.dshUk-InputField-disabled) {\n  border-color: var(--dsw-alias-border-l3);\n}\n\n.dshUk-InputField-control:focus-within {\n  border-color: var(--dsw-alias-brand-primary);\n  box-shadow: 0 0 0 2px var(--dsw-alias-state-business-tertiary);\n}\n\n.dshUk-InputField-invalid {\n  border-color: var(--dsw-alias-state-error-primary);\n}\n\n.dshUk-InputField-invalid:focus-within {\n  border-color: var(--dsw-alias-state-error-primary);\n  box-shadow: 0 0 0 2px var(--dsw-alias-interactive-bg-hover-danger);\n}\n\n.dshUk-InputField-disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n\n.dshUk-InputField-affix {\n  display: inline-flex;\n  align-items: center;\n  flex: none;\n  color: var(--dsw-alias-label-tertiary);\n  font-size: 12px;\n  line-height: 16px;\n}\n\n.dshUk-InputField-input {\n  flex: 1;\n  min-width: 0;\n  height: 100%;\n  border: none;\n  outline: none;\n  background: transparent;\n  font: inherit;\n  font-size: 13px;\n  line-height: 18px;\n  color: var(--dsw-alias-label-primary);\n}\n\n.dshUk-InputField-input::placeholder {\n  color: var(--dsw-alias-label-dimmed);\n}\n\n.dshUk-InputField-input:disabled {\n  cursor: not-allowed;\n}\n\n.dshUk-InputField-meta {\n  min-height: 16px;\n  font-size: 12px;\n  line-height: 16px;\n}\n\n.dshUk-InputField-hint {\n  color: var(--dsw-alias-label-tertiary);\n}\n\n.dshUk-InputField-error {\n  color: var(--dsw-alias-state-error-primary);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .dshUk-InputField-control {\n    transition: none;\n  }\n}\n");
var InputField_module_css_default = {
  "root": "dshUk-InputField-root",
  "label": "dshUk-InputField-label",
  "required": "dshUk-InputField-required",
  "control": "dshUk-InputField-control",
  "disabled": "dshUk-InputField-disabled",
  "invalid": "dshUk-InputField-invalid",
  "affix": "dshUk-InputField-affix",
  "input": "dshUk-InputField-input",
  "meta": "dshUk-InputField-meta",
  "hint": "dshUk-InputField-hint",
  "error": "dshUk-InputField-error"
};
var InputField = (0, import_react2.forwardRef)(function InputField2({ label, hint, error, prefix, suffix, className, disabled, id, required, ...rest }, ref) {
  const generatedId = (0, import_react2.useId)();
  const inputId = id ?? generatedId;
  const hintId = `${inputId}-hint`;
  const errorId = `${inputId}-error`;
  const invalid = Boolean(error);
  const describedBy = [
    rest["aria-describedby"],
    hint ? hintId : void 0,
    invalid ? errorId : void 0
  ].filter(Boolean).join(" ") || void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
    className: cx(InputField_module_css_default.root, className),
    htmlFor: inputId,
    children: [
      label != null && label !== "" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
        className: InputField_module_css_default.label,
        children: [label, required ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
          className: InputField_module_css_default.required,
          "aria-hidden": "true",
          children: "*"
        }) : null]
      }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
        className: cx(InputField_module_css_default.control, invalid && InputField_module_css_default.invalid, disabled && InputField_module_css_default.disabled),
        children: [
          prefix != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: InputField_module_css_default.affix,
            children: prefix
          }) : null,
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
            ...rest,
            ref,
            id: inputId,
            className: InputField_module_css_default.input,
            disabled,
            required,
            "aria-invalid": invalid || void 0,
            "aria-describedby": describedBy
          }),
          suffix != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: InputField_module_css_default.affix,
            children: suffix
          }) : null
        ]
      }),
      invalid ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        className: cx(InputField_module_css_default.meta, InputField_module_css_default.error),
        id: errorId,
        role: "alert",
        children: error
      }) : hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        className: cx(InputField_module_css_default.meta, InputField_module_css_default.hint),
        id: hintId,
        children: hint
      }) : null
    ]
  });
});
injectCss("DropdownSelect.module.css", ".dshUk-DropdownSelect-anchor {\n  display: inline-flex;\n  flex-shrink: 0;\n  min-width: 0;\n}\n\n.dshUk-DropdownSelect-trigger {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  box-sizing: border-box;\n  width: 100%;\n  min-width: 112px;\n  height: 32px;\n  margin: 0;\n  padding: 0 10px;\n  border: 1px solid var(--dsw-alias-border-l2);\n  border-radius: 8px;\n  background: var(--dsw-alias-bg-layer-1);\n  color: var(--dsw-alias-label-primary);\n  cursor: pointer;\n  font: inherit;\n  font-size: 13px;\n  line-height: 18px;\n  text-align: left;\n  transition:\n    background-color 120ms cubic-bezier(0.16, 1, 0.3, 1),\n    border-color 120ms cubic-bezier(0.16, 1, 0.3, 1);\n}\n\n.dshUk-DropdownSelect-trigger:hover:not(:disabled) {\n  border-color: var(--dsw-alias-border-l3);\n  background: var(--dsw-alias-interactive-bg-hover);\n}\n\n.dshUk-DropdownSelect-trigger:focus {\n  outline: none;\n}\n\n.dshUk-DropdownSelect-trigger:focus-visible {\n  outline: 2px solid var(--dsw-alias-brand-primary);\n  outline-offset: 2px;\n}\n\n.dshUk-DropdownSelect-trigger:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n\n.dshUk-DropdownSelect-open {\n  border-color: var(--dsw-alias-brand-primary);\n}\n\n.dshUk-DropdownSelect-label {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.dshUk-DropdownSelect-placeholder {\n  color: var(--dsw-alias-label-dimmed);\n}\n\n.dshUk-DropdownSelect-chevron {\n  display: inline-flex;\n  width: 14px;\n  height: 14px;\n  align-items: center;\n  justify-content: center;\n  flex: none;\n  color: var(--dsw-alias-label-tertiary);\n  transition: transform 120ms cubic-bezier(0.16, 1, 0.3, 1);\n}\n\n.dshUk-DropdownSelect-chevronOpen {\n  transform: rotate(180deg);\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .dshUk-DropdownSelect-trigger,\n  .dshUk-DropdownSelect-chevron {\n    transition: none;\n  }\n}\n");
var DropdownSelect_module_css_default = {
  "anchor": "dshUk-DropdownSelect-anchor",
  "trigger": "dshUk-DropdownSelect-trigger",
  "open": "dshUk-DropdownSelect-open",
  "label": "dshUk-DropdownSelect-label",
  "placeholder": "dshUk-DropdownSelect-placeholder",
  "chevron": "dshUk-DropdownSelect-chevron",
  "chevronOpen": "dshUk-DropdownSelect-chevronOpen"
};
function DropdownSelect({ value, options, onChange, placeholder = "Select", disabled = false, className, "aria-label": ariaLabel, id, align = "start" }) {
  const [open, setOpen] = (0, import_react2.useState)(false);
  const generatedId = (0, import_react2.useId)();
  const triggerId = id ?? generatedId;
  const selected = options.find((option) => option.value === value);
  const items = (0, import_react2.useMemo)(() => options.map((option) => {
    const item = {
      id: option.value,
      label: option.label
    };
    if (option.disabled === true) item.disabled = true;
    if (option.icon !== void 0) item.icon = option.icon;
    if (option.danger === true) item.danger = true;
    return item;
  }), [options]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.Menu, {
    open: open && !disabled,
    portal: true,
    compact: true,
    align,
    selectedId: value,
    items,
    onSelect: (next) => {
      onChange(next);
      setOpen(false);
    },
    onClose: () => {
      setOpen(false);
    },
    className: cx(DropdownSelect_module_css_default.anchor, className),
    anchor: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
      type: "button",
      id: triggerId,
      className: cx(DropdownSelect_module_css_default.trigger, open && DropdownSelect_module_css_default.open),
      "aria-label": ariaLabel,
      "aria-haspopup": "listbox",
      "aria-expanded": open,
      disabled,
      onClick: () => {
        if (!disabled) setOpen((prev) => !prev);
      },
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        className: cx(DropdownSelect_module_css_default.label, !selected && DropdownSelect_module_css_default.placeholder),
        children: selected ? selected.label : placeholder
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        className: cx(DropdownSelect_module_css_default.chevron, open && DropdownSelect_module_css_default.chevronOpen),
        "aria-hidden": "true",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.IconChevronDownOutline14, { size: 14 })
      })]
    })
  });
}
injectCss("Toolbar.module.css", ".dshUk-Toolbar-bar {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  gap: 8px;\n  box-sizing: border-box;\n  height: 48px;\n  min-height: 44px;\n  max-height: 48px;\n  padding: 0 12px;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.dshUk-Toolbar-compact {\n  height: 44px;\n  min-height: 44px;\n}\n\n.dshUk-Toolbar-left,\n.dshUk-Toolbar-right {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n}\n\n.dshUk-Toolbar-left {\n  flex: 1 1 auto;\n  overflow: hidden;\n}\n\n.dshUk-Toolbar-right {\n  flex: 0 0 auto;\n  margin-left: auto;\n}\n\n.dshUk-Toolbar-right > * {\n  flex-shrink: 0;\n}\n\n.dshUk-Toolbar-filters {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  gap: 8px;\n  flex: 0 0 auto;\n}\n\n.dshUk-Toolbar-filters > * {\n  flex-shrink: 0;\n}\n");
injectCss("Dialog.module.css", ".dshUk-Dialog-dialog {\n  width: min(480px, 100%);\n  max-height: min(80vh, 720px);\n  border-radius: 16px;\n}\n\n.dshUk-Dialog-sm {\n  width: min(380px, 100%);\n}\n\n.dshUk-Dialog-lg {\n  width: min(640px, 100%);\n}\n\n.dshUk-Dialog-body {\n  overflow: auto;\n  max-height: min(56vh, 480px);\n}\n\n.dshUk-Dialog-footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 8px;\n  width: 100%;\n}\n\n.dshUk-Dialog-message {\n  margin: 0;\n  font-size: 14px;\n  line-height: 22px;\n  color: var(--dsw-alias-label-primary);\n}\n");
var Dialog_module_css_default = {
  "dialog": "dshUk-Dialog-dialog",
  "sm": "dshUk-Dialog-sm",
  "lg": "dshUk-Dialog-lg",
  "body": "dshUk-Dialog-body",
  "footer": "dshUk-Dialog-footer",
  "message": "dshUk-Dialog-message"
};
var SIZE_CLASS = {
  sm: cssClass(Dialog_module_css_default.sm, "sm"),
  md: void 0,
  lg: cssClass(Dialog_module_css_default.lg, "lg")
};
function ModalDialog({ open, onClose, title, description, children, footer, size = "md", closeLabel = "Close", className, contentClassName }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_dsh_client_ui_primitives.Modal, {
    open,
    onClose,
    title,
    closeLabel,
    className: cx(Dialog_module_css_default.dialog, SIZE_CLASS[size], className),
    contentClassName: cx(Dialog_module_css_default.body, contentClassName),
    ...description !== void 0 ? { description } : {},
    ...footer !== void 0 ? { footer } : {},
    children
  });
}

// src/client/components/TopHeader.jsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var ASPECT_OPTIONS = [
  { value: "16:9", label: "16:9" },
  { value: "9:16", label: "9:16" },
  { value: "1:1", label: "1:1" }
];
var ZOOM_OPTIONS = [
  { value: "0.5", label: "50%" },
  { value: "1", label: "100%" },
  { value: "2", label: "200%" },
  { value: "4", label: "400%" }
];
function TopHeader({ onSave, onClose, onExport, exporting }) {
  const projectName = useTimelineStore((s) => s.projectName);
  const aspectRatio = useTimelineStore((s) => s.schema.canvasConfig.aspectRatio);
  const zoomLevel = useTimelineStore((s) => s.zoomLevel);
  const canUndo = useTimelineStore((s) => s.past.length > 0);
  const canRedo = useTimelineStore((s) => s.future.length > 0);
  const durationMs = useTimelineStore((s) => s.schema.canvasConfig.durationMs);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("header", { className: "omnimux-clip-overlay-header", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-clip-overlay-heading omnimux-clip-overlay-heading--editor", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        InputField,
        {
          "aria-label": "\u5DE5\u7A0B\u540D\u79F0",
          value: projectName,
          onChange: (event) => timelineStore.setProjectName(event.target.value)
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("p", { className: "omnimux-clip-overlay-subtitle", children: [
        "\u591A\u8F68\u526A\u8F91 \xB7 ",
        formatTimecode(durationMs)
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "omnimux-clip-overlay-actions", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        DropdownSelect,
        {
          "aria-label": "\u753B\u5E45",
          value: aspectRatio,
          options: ASPECT_OPTIONS,
          onChange: (value) => timelineStore.setAspectRatio(value)
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        IconButton,
        {
          variant: "ghost",
          size: "sm",
          "aria-label": "\u64A4\u9500",
          title: "\u64A4\u9500",
          disabled: !canUndo,
          onClick: () => timelineStore.undo(),
          children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.IconChevronLeftOutline14, { size: 14 })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        IconButton,
        {
          variant: "ghost",
          size: "sm",
          "aria-label": "\u91CD\u505A",
          title: "\u91CD\u505A",
          disabled: !canRedo,
          onClick: () => timelineStore.redo(),
          children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.IconChevronRightOutline14, { size: 14 })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        DropdownSelect,
        {
          "aria-label": "\u7F29\u653E",
          value: String(zoomLevel),
          options: ZOOM_OPTIONS,
          onChange: (value) => timelineStore.setZoom(Number(value))
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button, { variant: "outline", size: "sm", onClick: onSave, children: "\u4FDD\u5B58\u5E76\u8FD4\u56DE\u753B\u5E03" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Button, { variant: "primary", size: "sm", loading: exporting, onClick: onExport, children: "\u5BFC\u51FA\u6210\u7247" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        IconButton,
        {
          variant: "ghost",
          size: "sm",
          "aria-label": "\u5173\u95ED",
          title: "\u5173\u95ED",
          onClick: onClose,
          children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_dsh_client_ui_primitives2.IconCloseOutline16, { size: 16 })
        }
      )
    ] })
  ] });
}

// src/client/components/LeftSidebar.jsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function addPreset(preset) {
  const state = timelineStore.getState();
  const textTrack = state.schema.tracks.find((track) => track.type === "text");
  if (!textTrack) return;
  timelineStore.addClip(textTrack.id, {
    name: preset.label,
    mediaType: "text",
    durationMs: 3e3,
    textStyle: defaultTextStyle(preset)
  });
}
function applyTransition(type, durationMs) {
  const clipId = timelineStore.getState().selectedClipId;
  if (!clipId) return;
  timelineStore.setTransition(clipId, { type, durationMs });
}
function LeftSidebar() {
  const media = useTimelineStore((s) => s.schema.media);
  const selectedClipId = useTimelineStore((s) => s.selectedClipId);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("aside", { className: "omx-clip-sidebar", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { className: "omx-clip-pane", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h2", { className: "omx-clip-pane__title", children: "\u7D20\u6750\u5E93" }),
      media.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { className: "omx-clip-pane__empty", children: "\u4E0A\u6E38\u8FDE\u7EBF\u7684\u89C6\u9891 / \u56FE\u7247 / \u97F3\u9891\u4F1A\u663E\u793A\u5728\u8FD9\u91CC\u3002" }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("ul", { className: "omx-clip-media-list", children: media.map((item) => /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("li", { className: "omx-clip-media-item", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "omx-clip-media-item__meta", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "omx-clip-media-item__name", children: item.name }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "omx-clip-media-item__type", children: item.type })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          Button,
          {
            variant: "ghost",
            size: "xs",
            onClick: () => timelineStore.addClipFromMedia(item),
            children: "\u6DFB\u52A0\u5230\u65F6\u95F4\u8F74"
          }
        )
      ] }, item.id)) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { className: "omx-clip-pane", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h2", { className: "omx-clip-pane__title", children: "\u82B1\u5B57\u4E0E\u5B57\u5E55" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "omx-clip-chip-row", children: TEXT_PRESETS.map((preset) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        Button,
        {
          variant: "outline",
          size: "xs",
          onClick: () => addPreset(preset),
          children: preset.label
        },
        preset.id
      )) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("section", { className: "omx-clip-pane", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("h2", { className: "omx-clip-pane__title", children: "\u8F6C\u573A" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "omx-clip-chip-row", children: TRANSITIONS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        Button,
        {
          variant: selectedClipId ? "outline" : "ghost",
          size: "xs",
          disabled: !selectedClipId,
          onClick: () => applyTransition(item.type, item.durationMs),
          children: item.label
        },
        item.type
      )) })
    ] })
  ] });
}

// src/client/components/CenterStage.jsx
var import_react3 = require("react");
var import_dsh_client_ui_primitives3 = require("@deepseek-ai/dsh-client-ui-primitives");
var import_jsx_runtime4 = require("react/jsx-runtime");
function CenterStage() {
  const canvasRef = (0, import_react3.useRef)(null);
  const playheadMs = useTimelineStore((s) => s.playheadMs);
  const isPlaying = useTimelineStore((s) => s.isPlaying);
  const schema = useTimelineStore((s) => s.schema);
  const durationMs = schema.canvasConfig.durationMs || 0;
  const aspectRatio = schema.canvasConfig.aspectRatio || "16:9";
  (0, import_react3.useEffect)(() => {
    const canvas = canvasRef.current;
    if (!canvas) return void 0;
    const ctx = canvas.getContext("2d");
    if (!ctx) return void 0;
    canvas.width = schema.canvasConfig.width || 1920;
    canvas.height = schema.canvasConfig.height || 1080;
    drawFrame(ctx, schema, playheadMs, {
      width: canvas.width,
      height: canvas.height
    }).catch(() => {
    });
    return void 0;
  }, [playheadMs, schema]);
  (0, import_react3.useEffect)(() => {
    if (!isPlaying) return void 0;
    let frameId = 0;
    let last = performance.now();
    const tick = (now) => {
      const delta = now - last;
      last = now;
      const next = timelineStore.getState().playheadMs + delta;
      const total = timelineStore.getState().schema.canvasConfig.durationMs || 0;
      if (next >= total) {
        timelineStore.setPlayhead(total);
        timelineStore.setPlaying(false);
        return;
      }
      timelineStore.setPlayhead(next);
      frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isPlaying]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("section", { className: "omx-clip-stage", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "div",
      {
        className: "omx-clip-stage__viewport",
        style: { "--clip-aspect": aspectCss(aspectRatio) },
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("canvas", { ref: canvasRef, className: "omx-clip-stage__canvas" })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "omx-clip-transport", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        IconButton,
        {
          variant: "ghost",
          size: "sm",
          "aria-label": "\u8DF3\u5230\u8D77\u70B9",
          title: "\u8DF3\u5230\u8D77\u70B9",
          onClick: () => timelineStore.setPlayhead(0),
          children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives3.IconStopFill16, { size: 16 })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        IconButton,
        {
          variant: "secondary",
          size: "sm",
          "aria-label": isPlaying ? "\u6682\u505C" : "\u64AD\u653E",
          title: isPlaying ? "\u6682\u505C" : "\u64AD\u653E",
          onClick: () => timelineStore.togglePlaying(),
          children: isPlaying ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives3.IconPauseOutline16, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives3.IconPlayOutline16, { size: 16 })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        IconButton,
        {
          variant: "ghost",
          size: "sm",
          "aria-label": "\u8DF3\u5230\u7EC8\u70B9",
          title: "\u8DF3\u5230\u7EC8\u70B9",
          onClick: () => timelineStore.setPlayhead(durationMs),
          children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_dsh_client_ui_primitives3.IconStopFill16, { size: 16 })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("span", { className: "omx-clip-timecode", children: [
        formatTimecode(playheadMs),
        " / ",
        formatTimecode(durationMs)
      ] })
    ] })
  ] });
}

// src/client/components/RightInspector.jsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var FONT_OPTIONS = [
  { value: "sans-serif", label: "Sans" },
  { value: "serif", label: "Serif" },
  { value: "monospace", label: "Mono" }
];
var ALIGN_OPTIONS = [
  { value: "left", label: "\u5DE6\u5BF9\u9F50" },
  { value: "center", label: "\u5C45\u4E2D" },
  { value: "right", label: "\u53F3\u5BF9\u9F50" }
];
function KitSlider({ label, min, max, step, value, onChange }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("label", { className: "omx-clip-slider", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "omx-clip-slider__label", children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "input",
      {
        className: "omx-clip-slider__input",
        type: "range",
        min,
        max,
        step,
        value,
        onChange: (event) => onChange(Number(event.target.value))
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "omx-clip-slider__value", children: value })
  ] });
}
function RightInspector() {
  const selected = useTimelineStore((s) => selectedClipOf(s));
  if (!selected) {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("aside", { className: "omx-clip-inspector", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "omx-clip-pane__title", children: "\u5C5E\u6027" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "omx-clip-pane__empty", children: "\u9009\u4E2D\u65F6\u95F4\u8F74\u4E0A\u7684\u7247\u6BB5\u4EE5\u7F16\u8F91\u5165\u70B9\u3001\u901F\u5EA6\u3001\u97F3\u91CF\u6216\u6587\u5B57\u6837\u5F0F\u3002" })
    ] });
  }
  const { clip } = selected;
  const isText = clip.mediaType === "text";
  const style = clip.textStyle || {};
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("aside", { className: "omx-clip-inspector", children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "omx-clip-pane__title", children: clip.name }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("dl", { className: "omx-clip-kv", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("dt", { children: "\u5165\u70B9" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("dd", { children: formatTimecode(clip.startTimeMs) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("dt", { children: "\u65F6\u957F" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("dd", { children: formatTimecode(clip.durationMs) })
      ] })
    ] }),
    !isText ? /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        KitSlider,
        {
          label: "\u901F\u5EA6",
          min: 0.2,
          max: 10,
          step: 0.1,
          value: Number(clip.speed || 1),
          onChange: (value) => timelineStore.setSpeed(clip.id, value)
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        KitSlider,
        {
          label: "\u97F3\u91CF",
          min: 0,
          max: 1,
          step: 0.01,
          value: Number(clip.volume ?? 1),
          onChange: (value) => timelineStore.setVolume(clip.id, value)
        }
      )
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        InputField,
        {
          label: "\u6587\u672C",
          value: style.content || "",
          onChange: (event) => timelineStore.setTextStyle(clip.id, { content: event.target.value })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        DropdownSelect,
        {
          "aria-label": "\u5B57\u4F53",
          value: style.fontFamily || "sans-serif",
          options: FONT_OPTIONS,
          onChange: (value) => timelineStore.setTextStyle(clip.id, { fontFamily: value })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        KitSlider,
        {
          label: "\u5B57\u53F7",
          min: 16,
          max: 120,
          step: 1,
          value: Number(style.fontSize || 42),
          onChange: (value) => timelineStore.setTextStyle(clip.id, { fontSize: value })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("label", { className: "omx-clip-color", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: "\u989C\u8272" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "input",
          {
            type: "color",
            className: "omx-clip-color__input",
            value: style.color || "#ffffff",
            onChange: (event) => timelineStore.setTextStyle(clip.id, { color: event.target.value })
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        DropdownSelect,
        {
          "aria-label": "\u5BF9\u9F50",
          value: style.textAlign || "center",
          options: ALIGN_OPTIONS,
          onChange: (value) => timelineStore.setTextStyle(clip.id, { textAlign: value })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("label", { className: "omx-clip-color", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: "\u63CF\u8FB9" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "input",
          {
            type: "color",
            className: "omx-clip-color__input",
            value: style.strokeColor || "#000000",
            onChange: (event) => timelineStore.setTextStyle(clip.id, { strokeColor: event.target.value })
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        KitSlider,
        {
          label: "\u63CF\u8FB9\u5BBD\u5EA6",
          min: 0,
          max: 12,
          step: 1,
          value: Number(style.strokeWidth || 0),
          onChange: (value) => timelineStore.setTextStyle(clip.id, { strokeWidth: value })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("label", { className: "omx-clip-color", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: "\u80CC\u666F" }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "input",
          {
            type: "color",
            className: "omx-clip-color__input",
            value: toHex(style.backgroundColor) || "#000000",
            onChange: (event) => timelineStore.setTextStyle(clip.id, { backgroundColor: event.target.value })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Button, { variant: "danger", size: "sm", onClick: () => timelineStore.removeClip(clip.id), children: "\u5220\u9664\u7247\u6BB5" })
  ] });
}
function toHex(color) {
  if (typeof color !== "string") return "#000000";
  if (color.startsWith("#") && (color.length === 7 || color.length === 4)) return color;
  return "#000000";
}

// src/client/components/BottomTimeline.jsx
var import_react4 = require("react");
var import_jsx_runtime6 = require("react/jsx-runtime");
var TRACK_HEIGHT = 48;
var MIN_CLIP_MS = 120;
function pxPerMs(zoomLevel) {
  return 0.08 * zoomLevel;
}
function ticks(durationMs, zoom) {
  const step = zoom >= 2 ? 500 : zoom >= 1 ? 1e3 : 2e3;
  const out = [];
  for (let t = 0; t <= durationMs; t += step) out.push(t);
  return out;
}
function BottomTimeline() {
  const tracks = useTimelineStore((s) => s.schema.tracks);
  const durationMs = useTimelineStore((s) => s.schema.canvasConfig.durationMs);
  const playheadMs = useTimelineStore((s) => s.playheadMs);
  const zoomLevel = useTimelineStore((s) => s.zoomLevel);
  const selectedClipId = useTimelineStore((s) => s.selectedClipId);
  const bodyRef = (0, import_react4.useRef)(null);
  const [menu, setMenu] = (0, import_react4.useState)(null);
  const scale = pxPerMs(zoomLevel);
  const widthPx = Math.max(640, durationMs * scale);
  const marks = (0, import_react4.useMemo)(() => ticks(durationMs, zoomLevel), [durationMs, zoomLevel]);
  function timeFromEvent(event) {
    const scroller = bodyRef.current;
    if (!scroller) return 0;
    const rect = scroller.getBoundingClientRect();
    const x = event.clientX - rect.left + scroller.scrollLeft;
    return Math.max(0, Math.round(x / scale));
  }
  function onRulerPointerDown(event) {
    setMenu(null);
    timelineStore.setPlayhead(timeFromEvent(event));
    const move = (ev) => timelineStore.setPlayhead(timeFromEvent(ev));
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  }
  function beginClipDrag(event, clip, edge) {
    event.stopPropagation();
    event.preventDefault();
    setMenu(null);
    timelineStore.selectClip(clip.id, clip.trackId);
    timelineStore.captureHistory();
    const originX = event.clientX;
    const originStart = clip.startTimeMs;
    const originDuration = clip.durationMs;
    const originIn = clip.sourceInMs || 0;
    const move = (ev) => {
      const deltaMs = Math.round((ev.clientX - originX) / scale);
      if (edge === "move") {
        timelineStore.moveClip(clip.id, { startTimeMs: Math.max(0, originStart + deltaMs) }, { record: false });
      } else if (edge === "start") {
        const nextStart = Math.max(0, originStart + deltaMs);
        const consumed = nextStart - originStart;
        const nextDuration = Math.max(MIN_CLIP_MS, originDuration - consumed);
        timelineStore.trimClip(clip.id, {
          startTimeMs: nextStart,
          durationMs: nextDuration,
          sourceInMs: originIn + Math.max(0, consumed) * (clip.speed || 1)
        }, { record: false });
      } else if (edge === "end") {
        timelineStore.trimClip(clip.id, {
          durationMs: Math.max(MIN_CLIP_MS, originDuration + deltaMs)
        }, { record: false });
      }
    };
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  }
  function onClipContext(event, clip) {
    event.preventDefault();
    event.stopPropagation();
    timelineStore.selectClip(clip.id, clip.trackId);
    setMenu({ x: event.clientX, y: event.clientY, clipId: clip.id });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("section", { className: "omx-clip-timeline", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "omx-clip-timeline__heads", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "omx-clip-timeline__ruler-spacer" }),
      tracks.map((track) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "omx-clip-track-head", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "omx-clip-track-head__name", children: track.name }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "omx-clip-track-head__ops", children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            IconButton,
            {
              variant: track.isMuted ? "secondary" : "ghost",
              size: "xs",
              "aria-label": track.isMuted ? "\u53D6\u6D88\u9759\u97F3" : "\u9759\u97F3",
              title: track.isMuted ? "\u53D6\u6D88\u9759\u97F3" : "\u9759\u97F3",
              onClick: () => timelineStore.toggleTrackFlag(track.id, "isMuted"),
              children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "omx-clip-glyph", children: track.isMuted ? "M" : "\u266A" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            IconButton,
            {
              variant: track.isLocked ? "secondary" : "ghost",
              size: "xs",
              "aria-label": track.isLocked ? "\u89E3\u9501" : "\u9501\u5B9A",
              title: track.isLocked ? "\u89E3\u9501" : "\u9501\u5B9A",
              onClick: () => timelineStore.toggleTrackFlag(track.id, "isLocked"),
              children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "omx-clip-glyph", children: track.isLocked ? "L" : "\u25CB" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            IconButton,
            {
              variant: track.isVisible === false ? "secondary" : "ghost",
              size: "xs",
              "aria-label": track.isVisible === false ? "\u663E\u793A" : "\u9690\u85CF",
              title: track.isVisible === false ? "\u663E\u793A" : "\u9690\u85CF",
              onClick: () => timelineStore.toggleTrackFlag(track.id, "isVisible"),
              children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "omx-clip-glyph", children: track.isVisible === false ? "H" : "\u25C9" })
            }
          )
        ] })
      ] }, track.id))
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "omx-clip-timeline__body", ref: bodyRef, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
      "div",
      {
        className: "omx-clip-timeline__scroll",
        style: { "--clip-timeline-width": `${widthPx}px`, "--clip-playhead": `${playheadMs * scale}px` },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "omx-clip-ruler", onPointerDown: onRulerPointerDown, children: marks.map((mark) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            "span",
            {
              className: "omx-clip-ruler__tick",
              style: { "--tick-x": `${mark * scale}px` },
              children: formatTimecode(mark).slice(0, 5)
            },
            mark
          )) }),
          tracks.map((track) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            "div",
            {
              className: `omx-clip-lane${track.isLocked ? " is-locked" : ""}`,
              onPointerDown: () => {
                setMenu(null);
                timelineStore.selectClip(null, track.id);
              },
              children: track.clips.map((clip) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
                "div",
                {
                  className: `omx-clip-block omx-clip-block--${clip.mediaType}${selectedClipId === clip.id ? " is-selected" : ""}`,
                  style: {
                    "--clip-left": `${clip.startTimeMs * scale}px`,
                    "--clip-width": `${Math.max(8, clip.durationMs * scale)}px`,
                    "--clip-h": `${TRACK_HEIGHT - 8}px`
                  },
                  onPointerDown: (event) => beginClipDrag(event, clip, "move"),
                  onContextMenu: (event) => onClipContext(event, clip),
                  title: clip.name,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                      "span",
                      {
                        className: "omx-clip-block__edge omx-clip-block__edge--start",
                        onPointerDown: (event) => beginClipDrag(event, clip, "start")
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "omx-clip-block__label", children: clip.name }),
                    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                      "span",
                      {
                        className: "omx-clip-block__edge omx-clip-block__edge--end",
                        onPointerDown: (event) => beginClipDrag(event, clip, "end")
                      }
                    )
                  ]
                },
                clip.id
              ))
            },
            track.id
          )),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "omx-clip-playhead" })
        ]
      }
    ) }),
    menu ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
      "div",
      {
        className: "omx-clip-ctx",
        style: { "--ctx-x": `${menu.x}px`, "--ctx-y": `${menu.y}px` },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            Button,
            {
              variant: "ghost",
              size: "sm",
              onClick: () => {
                timelineStore.splitClip(menu.clipId, playheadMs);
                setMenu(null);
              },
              children: "\u5728\u64AD\u653E\u5934\u5206\u5272"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
            Button,
            {
              variant: "danger",
              size: "sm",
              onClick: () => {
                timelineStore.removeClip(menu.clipId);
                setMenu(null);
              },
              children: "\u5220\u9664\u7247\u6BB5"
            }
          )
        ]
      }
    ) : null
  ] });
}

// src/client/components/ExportModal.jsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function ExportModal({ open, progress, status, error, onCancel, onClose }) {
  const ratio = Math.max(0, Math.min(1, Number(progress) || 0));
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    ModalDialog,
    {
      open,
      onClose: error ? onClose : onCancel,
      title: "\u5BFC\u51FA\u6210\u7247",
      description: error ? "\u7F16\u7801\u5931\u8D25" : "WebCodecs \u786C\u4EF6\u52A0\u901F\u5408\u6210\u4E2D",
      footer: error ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Button, { variant: "primary", size: "sm", onClick: onClose, children: "\u5173\u95ED" }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Button, { variant: "outline", size: "sm", onClick: onCancel, children: "\u53D6\u6D88" }),
      children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "omx-clip-export", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "div",
          {
            className: "omx-clip-export__bar",
            role: "progressbar",
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-valuenow": Math.round(ratio * 100),
            style: { "--export-ratio": String(ratio) },
            children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "omx-clip-export__fill" })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "omx-clip-export__status", children: error || status || "\u51C6\u5907\u7F16\u7801\u5668\u2026" })
      ] })
    }
  );
}

// src/client/ClipOverlay.jsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function injectClipOverlayStyles() {
  if (typeof document === "undefined") return;
  if (document.getElementById(CLIP_OVERLAY_STYLES_ID)) return;
  const style = document.createElement("style");
  style.id = CLIP_OVERLAY_STYLES_ID;
  style.textContent = CLIP_OVERLAY_CSS;
  document.head.appendChild(style);
}
function markClipReady(ready) {
  if (typeof window === "undefined") return;
  window.__omnimuxClipReady = ready;
}
function ClipOverlay({ t, target }) {
  const [payload, setPayload] = (0, import_react5.useState)(null);
  const [exportState, setExportState] = (0, import_react5.useState)({
    open: false,
    progress: 0,
    status: "",
    error: ""
  });
  const abortRef = (0, import_react5.useRef)(null);
  (0, import_react5.useEffect)(() => {
    injectClipOverlayStyles();
    markClipReady(true);
    return () => {
      markClipReady(false);
      disposePreviewResources();
      abortRef.current?.abort();
      timelineStore.reset();
    };
  }, []);
  (0, import_react5.useEffect)(() => {
    const bridge = createClipBridge({
      target,
      onOpen: (next) => {
        timelineStore.hydrateFromPayload(next);
        setPayload(next);
      }
    });
    return () => {
      bridge.dispose();
    };
  }, [target]);
  if (!payload) return null;
  const label = (key, fallback) => {
    if (typeof t === "function") {
      try {
        const value = t(key);
        if (value && value !== key) return value;
      } catch {
      }
    }
    return fallback;
  };
  const nodeId = typeof payload.nodeId === "string" ? payload.nodeId : void 0;
  function currentSavePayload(extra = {}) {
    const state = timelineStore.getState();
    return {
      nodeId,
      projectId: state.schema.projectId,
      schema: stripRuntimeUrls(state.schema),
      ...extra
    };
  }
  function handleClose() {
    abortRef.current?.abort();
    const bridge = createClipBridge({ target });
    bridge.close({ nodeId });
    bridge.dispose();
    disposePreviewResources();
    timelineStore.reset();
    setPayload(null);
  }
  function handleSave() {
    const bridge = createClipBridge({ target });
    bridge.save(currentSavePayload());
    bridge.dispose();
    disposePreviewResources();
    timelineStore.reset();
    setPayload(null);
  }
  async function handleExport() {
    const state = timelineStore.getState();
    const controller = new AbortController();
    abortRef.current = controller;
    setExportState({ open: true, progress: 0.02, status: "\u6B63\u5728\u914D\u7F6E\u7F16\u7801\u5668\u2026", error: "" });
    const bridge = createClipBridge({ target });
    bridge.progress({ nodeId, status: "rendering", renderProgress: 0 });
    try {
      const result = await exportTimeline(state.schema, {
        signal: controller.signal,
        onProgress: (info) => {
          setExportState({
            open: true,
            progress: info.ratio,
            status: `\u7F16\u7801\u5E27 ${info.frame}/${info.frameCount}`,
            error: ""
          });
          bridge.progress({
            nodeId,
            status: "rendering",
            renderProgress: Math.round(info.ratio * 100)
          });
        }
      });
      setExportState({ open: true, progress: 0.96, status: "\u6B63\u5728\u5199\u5165\u78C1\u76D8\u2026", error: "" });
      const persisted = await persistExport(state.schema.projectId, result, { schema: state.schema });
      const thumbnail = result.thumbnail || captureThumbnailFallback();
      bridge.save(currentSavePayload({
        output: {
          videoPath: persisted.path,
          thumbnailPath: thumbnail,
          durationMs: result.durationMs,
          width: result.width,
          height: result.height
        }
      }));
      bridge.progress({ nodeId, status: "completed", renderProgress: 100 });
      bridge.dispose();
      setExportState({ open: false, progress: 1, status: "\u5B8C\u6210", error: "" });
      disposePreviewResources();
      timelineStore.reset();
      setPayload(null);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      if (message === "canceled") {
        bridge.progress({ nodeId, status: "editing", renderProgress: 0 });
        bridge.dispose();
        setExportState({ open: false, progress: 0, status: "", error: "" });
        return;
      }
      bridge.progress({ nodeId, status: "error", renderProgress: 0 });
      bridge.dispose();
      setExportState({
        open: true,
        progress: 0,
        status: "",
        error: message || label("export.failed", "\u5BFC\u51FA\u5931\u8D25")
      });
    }
  }
  function handleCancelExport() {
    abortRef.current?.abort();
  }
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
    "div",
    {
      className: "omnimux-clip-overlay omnimux-clip-overlay--editor",
      role: "dialog",
      "aria-modal": "true",
      "aria-label": label("overlay.title", "AI \u526A\u8F91\u5DE5\u574A"),
      "data-plugin": "omnimux-clip",
      "data-stage": "clip-editor",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          TopHeader,
          {
            onSave: handleSave,
            onClose: handleClose,
            onExport: handleExport,
            exporting: exportState.open && !exportState.error
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "omx-clip-workbench", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(LeftSidebar, {}),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(CenterStage, {}),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(RightInspector, {})
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(BottomTimeline, {}),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          ExportModal,
          {
            open: exportState.open,
            progress: exportState.progress,
            status: exportState.status,
            error: exportState.error,
            onCancel: handleCancelExport,
            onClose: () => setExportState({ open: false, progress: 0, status: "", error: "" })
          }
        )
      ]
    }
  );
}
function captureThumbnailFallback() {
  const canvas = document.querySelector(".omx-clip-stage__canvas");
  if (!canvas) return "";
  try {
    return canvas.toDataURL("image/jpeg", 0.7);
  } catch {
    return "";
  }
}

// src/client/index.js
var name = "omnimux-clip";
var inject = ["slots"];
var NS = "omnimux.clip";
function apply(ctx) {
  const t = ctx.locale && typeof ctx.locale.bind === "function" ? ctx.locale.bind(NS) : void 0;
  const face = () => ({ t });
  ctx.slots.inject("shell.overlay", () => ctx.slots.register({
    name: "shell.overlay",
    id: "clip-editor",
    order: 50,
    locale: NS,
    inject: face
  }, ClipOverlay));
}

    return module.exports;
  }
});
