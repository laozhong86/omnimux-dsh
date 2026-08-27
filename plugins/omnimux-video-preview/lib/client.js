window.__ModuleLoader__.load({
  id: "omnimux-video-preview",
  factory: (require) => {
    var module = { exports: {} };
    var exports = module.exports;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client/index.js
var index_exports = {};
__export(index_exports, {
  apply: () => apply,
  inject: () => inject,
  name: () => name
});
module.exports = __toCommonJS(index_exports);
var import_react2 = __toESM(require("react"), 1);

// src/client/VideoPlayer.js
var import_react = __toESM(require("react"), 1);
function VideoPlayer({ mediaUrl, path, title }) {
  const [error, setError] = (0, import_react.useState)(null);
  const streamUrl = path ? `/omnimux/video-preview/stream?path=${encodeURIComponent(path)}` : mediaUrl;
  return import_react.default.createElement(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        minHeight: "280px",
        backgroundColor: "var(--dsw-alias-bg-surface-1, #0c0c0e)",
        padding: "16px",
        boxSizing: "border-box"
      }
    },
    error ? import_react.default.createElement(
      "div",
      {
        style: {
          color: "var(--dsw-alias-text-secondary, #999)",
          textAlign: "center",
          padding: "24px"
        }
      },
      import_react.default.createElement("div", { style: { marginBottom: "12px" } }, "\u89C6\u9891\u65E0\u6CD5\u76F4\u63A5\u64AD\u653E\u6216\u89E3\u7801\u53D7\u9650"),
      mediaUrl && import_react.default.createElement(
        "a",
        {
          href: mediaUrl,
          download: title || "video",
          style: {
            color: "var(--dsw-alias-brand-accent, #3b82f6)",
            textDecoration: "underline",
            fontSize: "13px"
          }
        },
        "\u4E0B\u8F7D\u539F\u6587\u4EF6"
      )
    ) : import_react.default.createElement("video", {
      src: streamUrl,
      controls: true,
      playsInline: true,
      onError: () => setError("Video playback error"),
      style: {
        maxWidth: "100%",
        maxHeight: "100%",
        borderRadius: "var(--dsw-alias-radius-md, 8px)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
        backgroundColor: "#000",
        outline: "none"
      }
    })
  );
}

// src/client/index.js
var name = "omnimux-video-preview";
var inject = [];
function IconVideo({ size = 16 }) {
  return import_react2.default.createElement(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    },
    import_react2.default.createElement("polygon", { points: "23 7 16 12 23 17 23 7" }),
    import_react2.default.createElement("rect", {
      x: 1,
      y: 5,
      width: 15,
      height: 14,
      rx: 2,
      ry: 2
    })
  );
}
function apply(ctx) {
  if (typeof ctx.inject !== "function") return;
  ctx.inject(["betterSidebar"], (inner) => {
    const sidebar = inner.betterSidebar ?? inner.get?.("betterSidebar");
    if (!sidebar || typeof sidebar.registerFileViewer !== "function") return;
    const descriptor = {
      id: "omnimux-video-preview",
      title: "\u89C6\u9891",
      icon: (size) => import_react2.default.createElement(IconVideo, { size }),
      exts: [
        "mp4",
        "webm",
        "mov",
        "mkv",
        "avi",
        "ogg",
        "ogv",
        "m4v",
        "flv",
        "wmv",
        "ts",
        "mp3",
        "wav",
        "m4a",
        "aac"
      ],
      priority: 20,
      fetchStrategy: "mediaUrl",
      component: (props) => import_react2.default.createElement(VideoPlayer, props)
    };
    const unregister = sidebar.registerFileViewer(descriptor);
    const effectTarget = typeof inner.effect === "function" ? inner : ctx;
    if (typeof effectTarget.effect === "function") {
      effectTarget.effect(
        () => () => {
          try {
            unregister();
          } catch {
          }
        },
        "omnimux-video-preview: file-viewer"
      );
    }
  });
}

    return module.exports;
  }
});
