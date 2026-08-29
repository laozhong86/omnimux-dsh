export const STYLES_ID = 'omnimux-clip-stage-styles'

export const CLIP_CSS = `
.omnimux-clip-stage {
  position: fixed;
  z-index: 250;
  top: var(--stage-top, 0px);
  left: var(--stage-left, 56px);
  width: var(--stage-width, calc(100vw - 56px));
  height: var(--stage-height, 100vh);
  min-width: 320px;
  min-height: 240px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background: var(--dsw-alias-bg-base, #111113);
  color: var(--dsw-alias-label-primary, #ffffff);
  overflow: hidden;
  pointer-events: auto;
  -webkit-app-region: no-drag;
  isolation: isolate;
  contain: layout paint;
}
.omnimux-clip-stage[data-visible="false"] {
  display: none !important;
  pointer-events: none !important;
}
.omnimux-clip-stage[data-clip-mode="canvas"] {
  position: absolute;
  inset: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  z-index: 20;
}
.omnimux-clip-stage[data-clip-mode="canvas"][data-visible="true"] {
  display: flex !important;
  pointer-events: auto !important;
}
html:not([data-dsh-product-stage]) .omnimux-clip-stage[data-clip-mode="canvas"][data-visible="true"] {
  display: flex !important;
  pointer-events: auto !important;
}
.omnimux-clip-stage[data-clip-mode="canvas"] .omnimux-clip-stage-heading {
  display: none !important;
}
/* ─── 顶栏三段模式互斥 ───────────────────────────────────────────────
   段标记由 OpenReel 顶栏自身提供：data-toolbar-section="left|center|right"
   （双保险类名 .openreel-toolbar-left / -center / -right）。

   · canvas（画布嵌入）：只保留右段（Export / 交付）。左段模式切换与中段
     项目名称 + 项目切换器全部隐藏；右段用 margin-left:auto 顶到最右。
   · standalone（完整模式）：三段全部还原为 flex 流式展示，一个不丢。

   注意：这里用 margin-left:auto 而非改 header 的 justify-content，避免破坏
   右段自身的 items-center 布局；header 是 flex 容器，auto margin 足够吸收空位。
   ------------------------------------------------------------------ */
.omnimux-clip-stage[data-clip-mode="canvas"] [data-toolbar-section="left"],
.omnimux-clip-stage[data-clip-mode="canvas"] [data-toolbar-section="center"],
.omnimux-clip-stage[data-clip-mode="canvas"] .openreel-toolbar-left,
.omnimux-clip-stage[data-clip-mode="canvas"] .openreel-toolbar-center {
  display: none !important;
}
.omnimux-clip-stage[data-clip-mode="canvas"] [data-toolbar-section="right"],
.omnimux-clip-stage[data-clip-mode="canvas"] .openreel-toolbar-right {
  margin-left: auto !important;
}
.omnimux-clip-stage[data-clip-mode="standalone"]
  [data-toolbar-section="left"]:where(:not([data-toolbar-responsive="true"])),
.omnimux-clip-stage[data-clip-mode="standalone"]
  [data-toolbar-section="center"]:where(:not([data-toolbar-responsive="true"])),
.omnimux-clip-stage[data-clip-mode="standalone"]
  [data-toolbar-section="right"]:where(:not([data-toolbar-responsive="true"])),
.omnimux-clip-stage[data-clip-mode="standalone"]
  .openreel-toolbar-left:where(:not([data-toolbar-responsive="true"])),
.omnimux-clip-stage[data-clip-mode="standalone"]
  .openreel-toolbar-center:where(:not([data-toolbar-responsive="true"])),
.omnimux-clip-stage[data-clip-mode="standalone"]
  .openreel-toolbar-right:where(:not([data-toolbar-responsive="true"])) {
  display: flex !important;
}
/* 官方 responsive 段（hidden lg:flex，如 Motion 顶栏的 SceneSwitcher 中段）：
   standalone 下不无脑强制 flex，交回官方 lg 断点，避免窄窗口把顶栏挤爆。
   Tailwind 以 important: '.openreel-studio-root' 前缀生成 .hidden，
   若不豁免，上面的 !important 会永久吃掉官方断点行为。 */
@media (min-width: 1024px) {
  .omnimux-clip-stage[data-clip-mode="standalone"]
    [data-toolbar-section][data-toolbar-responsive="true"] {
    display: flex !important;
  }
}
/* canvas 模式下右段被顶到最右，会被浮层关闭按钮压住，同样留出 64px 安全区 */
.omnimux-clip-stage[data-clip-mode="canvas"] .openreel-studio-root > * header,
.omnimux-clip-stage[data-clip-mode="canvas"] .openreel-studio-root header:first-of-type {
  padding-right: 64px;
}
.omnimux-clip-stage-header,
.omnimux-clip-stage[data-clip-mode="standalone"] .omnimux-clip-stage-header,
.omnimux-clip-stage[data-clip-mode="canvas"] .omnimux-clip-stage-header {
  position: absolute;
  top: 8px;
  right: 8px;
  left: auto;
  z-index: 40;
  width: auto;
  height: auto;
  padding: 0;
  border: none;
  background: transparent;
  pointer-events: none;
  -webkit-app-region: no-drag;
}
.omnimux-clip-stage-heading,
.omnimux-clip-stage-icon-btn,
.omnimux-clip-stage-save-btn,
.omnimux-clip-stage-save-status,
.omnimux-clip-stage[data-clip-mode="standalone"] .omnimux-clip-stage-heading,
.omnimux-clip-stage[data-clip-mode="standalone"] .omnimux-clip-stage-icon-btn,
.omnimux-clip-stage[data-clip-mode="standalone"] .omnimux-clip-stage-save-btn,
.omnimux-clip-stage[data-clip-mode="standalone"] .omnimux-clip-stage-save-status {
  display: none !important;
}
.omnimux-clip-stage-body {
  flex: 1;
  min-height: 0;
  min-width: 0;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.omnimux-clip-stage-actions,
.omnimux-clip-stage[data-clip-mode="standalone"] .omnimux-clip-stage-actions {
  pointer-events: auto;
  flex: none;
  display: flex;
  align-items: center;
  gap: 8px;
  height: 32px;
}
.omnimux-clip-stage-close-btn,
.omnimux-clip-stage[data-clip-mode="standalone"] .omnimux-clip-stage-close-btn {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: var(--dsw-alias-bg-elevated, rgba(22, 22, 24, 0.92));
  border: 1px solid var(--dsw-alias-border-subtle, rgba(255, 255, 255, 0.16));
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--dsw-alias-label-secondary, rgba(255, 255, 255, 0.7));
  cursor: pointer;
  transition: color 150ms ease, background-color 150ms ease, border-color 150ms ease;
}
.omnimux-clip-stage-close-btn:hover,
.omnimux-clip-stage[data-clip-mode="standalone"] .omnimux-clip-stage-close-btn:hover {
  color: var(--dsw-alias-label-primary, #ffffff);
  background: var(--dsw-alias-interactive-bg-hover, rgba(255, 255, 255, 0.1));
  border-color: var(--dsw-alias-border-l3, rgba(255, 255, 255, 0.25));
}
.openreel-studio-root > * header,
.openreel-studio-root header:first-of-type,
.omnimux-clip-stage[data-clip-mode="standalone"] .openreel-studio-root > * header,
.omnimux-clip-stage[data-clip-mode="standalone"] .openreel-studio-root header:first-of-type {
  padding-right: 64px;
}
.omnimux-clip-stage-save-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 32px;
  padding: 0 12px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  box-sizing: border-box;
  cursor: pointer;
  background: var(--dsw-alias-bg-layer-1, rgba(255, 255, 255, 0.06));
  border: 1px solid var(--dsw-alias-border-l2, rgba(255, 255, 255, 0.14));
  color: var(--dsw-alias-label-primary, #ffffff);
  transition: background-color 150ms ease, border-color 150ms ease, opacity 150ms ease;
  user-select: none;
}
.omnimux-clip-stage-save-btn:hover:not(:disabled) {
  background: var(--dsw-alias-interactive-bg-hover, rgba(255, 255, 255, 0.1));
  border-color: var(--dsw-alias-border-l3, rgba(255, 255, 255, 0.22));
}
.omnimux-clip-stage-save-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.omnimux-clip-stage-close-btn {
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: none;
  background: transparent;
  color: var(--dsw-alias-label-secondary, rgba(255, 255, 255, 0.65));
  cursor: pointer;
  transition: color 150ms ease, background-color 150ms ease;
}
.omnimux-clip-stage-close-btn:hover {
  color: var(--dsw-alias-label-primary, #ffffff);
  background: var(--dsw-alias-interactive-bg-hover, rgba(255, 255, 255, 0.08));
}
`

export function injectClipStyles() {
  if (typeof document === 'undefined') return
  let style = document.getElementById(STYLES_ID)
  if (!(style instanceof HTMLStyleElement)) {
    style = document.createElement('style')
    style.id = STYLES_ID
    document.head.appendChild(style)
  }
  style.textContent = CLIP_CSS
}
