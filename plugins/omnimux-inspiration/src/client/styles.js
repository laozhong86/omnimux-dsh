export const STYLES = `
/* ==========================================================================
   OmniMux Inspiration UI — x.ai 极简设计规范落地
   ========================================================================== */

.omnimux-inspiration-root {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: var(--omx-space-lg, 16px);
  padding: 0 var(--omx-space-xl, 24px) var(--omx-space-2xl, 32px);
  font-family: var(--omx-font-sans, 'Universal Sans', 'Inter', system-ui, -apple-system, sans-serif);
  color: var(--omx-color-ink, #ffffff);
  background: var(--omx-color-canvas, #0a0a0a);
  min-height: 100%;
}
.omnimux-inspiration-root *,
.omnimux-inspiration-root *::before,
.omnimux-inspiration-root *::after { box-sizing: border-box; }

/* 工具栏 Toolbar: 发丝线描边 + 胶囊/极简控件 */
.omnimux-inspiration-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--omx-space-sm, 8px);
  padding-bottom: var(--omx-space-md, 12px);
  border-bottom: 1px solid var(--omx-color-hairline, #242424);
}
.omnimux-inspiration-search {
  flex: 1 1 240px;
  min-width: 180px;
  height: 34px;
  padding: 0 var(--omx-space-md, 12px);
  border: 1px solid var(--omx-color-hairline, #242424);
  border-radius: var(--omx-radius-sm, 8px);
  background: var(--omx-color-canvas-soft, #131313);
  color: var(--omx-color-ink, #ffffff);
  font: var(--omx-text-body-sm, 400 14px/20px var(--omx-font-sans));
  outline: none;
  transition: border-color var(--omx-motion-fast, 120ms) ease;
}
.omnimux-inspiration-search:focus {
  border-color: var(--omx-color-hairline-strong, #3d3d3d);
}
.omnimux-inspiration-search::placeholder {
  color: var(--omx-color-muted, #7c7c7c);
}
.omnimux-inspiration-select {
  height: 34px;
  padding: 0 var(--omx-space-md, 12px);
  border: 1px solid var(--omx-color-hairline, #242424);
  border-radius: var(--omx-radius-sm, 8px);
  background: var(--omx-color-canvas-soft, #131313);
  color: var(--omx-color-ink-soft, #ebebeb);
  font: var(--omx-text-label, 500 13px/16px var(--omx-font-sans));
  outline: none;
  cursor: pointer;
  transition: border-color var(--omx-motion-fast, 120ms) ease;
}
.omnimux-inspiration-select:hover,
.omnimux-inspiration-select:focus {
  border-color: var(--omx-color-hairline-strong, #3d3d3d);
}
.omnimux-inspiration-count {
  margin-left: auto;
  font: var(--omx-text-code, 400 13px/20px var(--omx-font-mono, monospace));
  color: var(--omx-color-muted, #7c7c7c);
}

/* 瀑布流 Masonry 纯画面卡片（基于最佳列宽自适应） */
.omnimux-inspiration-masonry {
  columns: 180px auto;
  column-gap: var(--omx-space-md, 12px);
  width: 100%;
}
@media (min-width: 1600px) {
  .omnimux-inspiration-masonry { columns: 200px 7; }
}
@media (min-width: 1280px) and (max-width: 1599px) {
  .omnimux-inspiration-masonry { columns: 190px 6; }
}
@media (min-width: 960px) and (max-width: 1279px) {
  .omnimux-inspiration-masonry { columns: 180px 5; }
}
@media (min-width: 640px) and (max-width: 959px) {
  .omnimux-inspiration-masonry { columns: 160px 4; }
}
@media (max-width: 639px) {
  .omnimux-inspiration-masonry { columns: 140px 2; }
}

.omnimux-inspiration-card-pure {
  position: relative;
  break-inside: avoid;
  margin-bottom: var(--omx-space-md, 12px);
  border-radius: var(--omx-radius-sm, 8px);
  overflow: hidden;
  cursor: pointer;
  background: var(--omx-color-canvas-soft, #131313);
  border: 1px solid var(--omx-color-hairline, #242424);
  transition: transform var(--omx-motion-base, 180ms) var(--omx-motion-ease, cubic-bezier(.2,.4,.6,1)),
              border-color var(--omx-motion-base, 180ms) var(--omx-motion-ease, cubic-bezier(.2,.4,.6,1));
}
.omnimux-inspiration-card-pure:hover {
  transform: translateY(-2px);
  border-color: var(--omx-color-hairline-strong, #3d3d3d);
}
.omnimux-inspiration-cover-img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
}
.omnimux-inspiration-cover-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 9 / 16;
  font: var(--omx-text-display-sm, 600 32px/38px var(--omx-font-sans));
  color: var(--omx-color-muted, #7c7c7c);
  background: var(--omx-color-canvas-raised, #171717);
}

/* Hover 浮层: 极简纯黑渐变 + 平台 Chip + 居中播放 */
.omnimux-inspiration-card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.65) 100%);
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--omx-space-md, 12px);
  transition: opacity var(--omx-motion-fast, 120ms) ease;
}
.omnimux-inspiration-card-pure:hover .omnimux-inspiration-card-overlay {
  opacity: 1;
}
.omnimux-inspiration-badge-platform {
  align-self: flex-start;
  padding: var(--omx-space-2xs, 2px) var(--omx-space-sm, 8px);
  border-radius: var(--omx-radius-pill, 9999px);
  font: var(--omx-text-label, 500 12px/16px var(--omx-font-sans));
  font-family: var(--omx-font-mono, monospace);
  background: rgba(0,0,0,0.65);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.15);
  color: #ffffff;
}
.omnimux-inspiration-overlay-play {
  align-self: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--omx-color-primary, #ffffff);
  color: var(--omx-color-on-primary, #0a0a0a);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0.9);
  transition: transform var(--omx-motion-fast, 120ms) ease;
}
.omnimux-inspiration-card-pure:hover .omnimux-inspiration-overlay-play {
  transform: scale(1);
}
.omnimux-inspiration-overlay-play svg {
  width: 16px;
  height: 16px;
  margin-left: 2px;
}

/* 详情弹窗 Modal（x.ai 发丝线 + 规则分栏） */
.omnimux-inspiration-modal-backdrop {
  position: fixed;
  inset: 0;
  background: var(--omx-color-overlay, rgba(0,0,0,.60));
  backdrop-filter: blur(16px);
  z-index: var(--omx-z-modal, 200);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--omx-space-xl, 24px);
  animation: omni-fade-in var(--omx-motion-fast, 120ms) ease;
}
@keyframes omni-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
.omnimux-inspiration-modal-container {
  position: relative;
  display: flex;
  width: 100%;
  max-width: 980px;
  height: 80vh;
  max-height: 660px;
  border-radius: var(--omx-radius-lg, 16px);
  overflow: hidden;
  background: var(--omx-color-canvas-soft, #131313);
  border: 1px solid var(--omx-color-hairline, #242424);
  box-shadow: var(--omx-shadow-overlay, 0 8px 24px rgba(0,0,0,.48));
}
.omnimux-inspiration-modal-close {
  position: absolute;
  top: 14px;
  right: 14px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid var(--omx-color-hairline, #242424);
  background: var(--omx-color-canvas-soft, #131313);
  color: var(--omx-color-ink-soft, #ebebeb);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: border-color var(--omx-motion-fast, 120ms) ease,
              color var(--omx-motion-fast, 120ms) ease;
}
.omnimux-inspiration-modal-close:hover {
  border-color: var(--omx-color-hairline-strong, #3d3d3d);
  color: var(--omx-color-ink, #ffffff);
}

/* 弹窗左列：视频播放区（9:16 居中包裹容器） */
.omnimux-inspiration-modal-left {
  flex: 1 1 58%;
  min-width: 300px;
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: var(--omx-space-md, 12px);
}
.omnimux-inspiration-modal-player-box {
  position: relative;
  width: 100%;
  max-width: 330px;
  height: 100%;
  aspect-ratio: 9 / 16;
  border-radius: var(--omx-radius-sm, 8px);
  overflow: hidden;
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.omnimux-inspiration-player-frame {
  width: 100%;
  height: 100%;
  border: none;
  background: #000000;
}
.omnimux-inspiration-modal-cover-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 弹窗右列：编辑式详情与 AI 拆解 */
.omnimux-inspiration-modal-right {
  flex: 0 0 380px;
  width: 380px;
  background: var(--omx-color-canvas, #0a0a0a);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: var(--omx-space-xl, 24px);
  gap: var(--omx-space-lg, 16px);
  border-left: 1px solid var(--omx-color-hairline, #242424);
}
.omnimux-inspiration-modal-title {
  margin: 0;
  font: var(--omx-text-title-sm, 600 18px/28px var(--omx-font-sans));
  color: var(--omx-color-ink, #ffffff);
  letter-spacing: -0.2px;
}
.omnimux-inspiration-modal-creator {
  display: flex;
  align-items: center;
  gap: var(--omx-space-md, 12px);
}
.omnimux-inspiration-modal-avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: var(--omx-color-canvas-raised, #171717);
  border: 1px solid var(--omx-color-hairline, #242424);
  display: flex;
  align-items: center;
  justify-content: center;
  font: var(--omx-text-label, 500 13px/16px var(--omx-font-mono));
  color: var(--omx-color-ink, #ffffff);
}
.omnimux-inspiration-modal-handle {
  font: var(--omx-text-label, 500 13px/16px var(--omx-font-sans));
  color: var(--omx-color-ink-soft, #ebebeb);
}
.omnimux-inspiration-modal-link {
  display: inline-flex;
  align-items: center;
  gap: var(--omx-space-xs, 4px);
  font: var(--omx-text-label, 500 13px/16px var(--omx-font-sans));
  color: var(--omx-color-body, #b4b4b4);
  text-decoration: none;
  padding: var(--omx-space-xs, 4px) var(--omx-space-sm, 8px);
  border-radius: var(--omx-radius-pill, 9999px);
  border: 1px solid var(--omx-color-hairline, #242424);
  background: var(--omx-color-canvas-soft, #131313);
  align-self: flex-start;
  transition: border-color var(--omx-motion-fast, 120ms) ease,
              color var(--omx-motion-fast, 120ms) ease;
}
.omnimux-inspiration-modal-link:hover {
  border-color: var(--omx-color-hairline-strong, #3d3d3d);
  color: var(--omx-color-ink, #ffffff);
}
.omnimux-inspiration-modal-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--omx-space-xs, 4px);
}
.omnimux-inspiration-modal-tag {
  padding: var(--omx-space-2xs, 2px) var(--omx-space-sm, 8px);
  border-radius: var(--omx-radius-pill, 9999px);
  font: var(--omx-text-code, 400 12px/16px var(--omx-font-mono));
  border: 1px solid var(--omx-color-hairline, #242424);
  background: var(--omx-color-canvas-soft, #131313);
  color: var(--omx-color-muted, #7c7c7c);
}

/* AI 结构拆解: 极简纯单色框 + 等宽标签 */
.omnimux-inspiration-modal-analysis {
  display: flex;
  flex-direction: column;
  gap: var(--omx-space-md, 12px);
  padding: var(--omx-space-md, 12px) var(--omx-space-lg, 16px);
  border-radius: var(--omx-radius-sm, 8px);
  background: var(--omx-color-canvas-soft, #131313);
  border: 1px solid var(--omx-color-hairline, #242424);
}
.omnimux-inspiration-analysis-item {
  display: flex;
  flex-direction: column;
  gap: var(--omx-space-xs, 4px);
}
.omnimux-inspiration-analysis-label {
  font: var(--omx-text-code, 400 11px/14px var(--omx-font-mono));
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--omx-color-muted, #7c7c7c);
}
.omnimux-inspiration-analysis-val {
  font: var(--omx-text-body-sm, 400 13px/18px var(--omx-font-sans));
  color: var(--omx-color-ink-soft, #ebebeb);
}

/* 空态与骨架屏 */
.omnimux-inspiration-empty, .omnimux-inspiration-gate, .omnimux-inspiration-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--omx-space-sm, 8px);
  min-height: 240px;
  text-align: center;
  padding: var(--omx-space-xl, 24px);
}
.omnimux-inspiration-empty-title {
  margin: 0;
  font: var(--omx-text-title-sm, 600 18px/28px var(--omx-font-sans));
  color: var(--omx-color-ink, #ffffff);
}
.omnimux-inspiration-empty-text {
  margin: 0;
  font: var(--omx-text-body-sm, 400 14px/20px var(--omx-font-sans));
  color: var(--omx-color-muted, #7c7c7c);
}
.omnimux-inspiration-btn {
  height: 34px;
  padding: 0 var(--omx-space-lg, 16px);
  border: none;
  border-radius: var(--omx-radius-pill, 9999px);
  background: var(--omx-color-primary, #ffffff);
  color: var(--omx-color-on-primary, #0a0a0a);
  font: var(--omx-text-action, 500 14px/20px var(--omx-font-sans));
  cursor: pointer;
  transition: transform var(--omx-motion-fast, 120ms) ease;
}
.omnimux-inspiration-btn:active {
  transform: scale(0.98);
}
.omnimux-inspiration-skeleton {
  columns: 180px auto;
  column-gap: var(--omx-space-md, 12px);
  width: 100%;
}
.omnimux-inspiration-skel {
  break-inside: avoid;
  margin-bottom: var(--omx-space-md, 12px);
  height: 240px;
  border-radius: var(--omx-radius-sm, 8px);
  background: var(--omx-color-canvas-soft, #131313);
  border: 1px solid var(--omx-color-hairline, #242424);
}
`

const STYLE_ID = 'omnimux-inspiration-styles'

export function injectInspirationStyles() {
  if (typeof document === 'undefined') return
  if (document.getElementById(STYLE_ID)) return
  const node = document.createElement('style')
  node.id = STYLE_ID
  node.textContent = STYLES
  document.head.appendChild(node)
}
