/**
 * Dark theme styles for OmniMux inspiration tab (x.ai Minimalist Hairline Architecture)
 * Fully compliant with docs/contracts/design-tokens.md + Stage standards
 */
export const INSPIRATION_STYLES_ID = 'omnimux-inspiration-styles'

export const INSPIRATION_CSS = `
/* 根容器与微光扫光关键帧 */
.omnimux-inspiration-root,
.omnimux-inspiration-root *,
.omnimux-inspiration-modal-backdrop,
.omnimux-inspiration-modal-backdrop * {
  box-sizing: border-box;
}

.omnimux-inspiration-root {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 16px 24px 32px 24px;
  gap: 20px;
  background: var(--omx-color-canvas, #0a0a0a);
  color: var(--omx-color-ink, #ffffff);
  font-family: var(--omx-font-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
}

@keyframes omni-shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

/* 顶部导航与操作栏 */
.omnimux-inspiration-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  max-width: 100%;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--omx-color-hairline, #222222);
}

.omnimux-inspiration-tabs {
  display: inline-flex;
  background: var(--omx-color-canvas-soft, #141414);
  padding: 3px;
  border-radius: var(--omx-radius-pill, 9999px);
  border: 1px solid var(--omx-color-hairline, #242424);
}

.omnimux-inspiration-tab {
  height: 28px;
  padding: 0 14px;
  border-radius: var(--omx-radius-pill, 9999px);
  border: none;
  background: transparent;
  color: var(--omx-color-muted, #888888);
  font: var(--omx-text-label, 500 13px/16px var(--omx-font-sans));
  cursor: pointer;
  transition: color var(--omx-motion-fast, 120ms) ease,
              background var(--omx-motion-fast, 120ms) ease;
}

.omnimux-inspiration-tab:hover {
  color: var(--omx-color-ink-soft, #ebebeb);
}

.omnimux-inspiration-tab.active {
  background: var(--omx-color-canvas-raised, #242424);
  color: var(--omx-color-ink, #ffffff);
  box-shadow: 0 1px 3px rgba(0,0,0,0.4);
}

.omnimux-inspiration-btn-add {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 32px;
  padding: 0 16px;
  border-radius: var(--omx-radius-pill, 9999px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: var(--dsw-alias-button-primary-fill, #ffffff);
  color: var(--dsw-alias-label-primary-foreground, #000000);
  font: var(--omx-text-label, 550 13px/16px var(--omx-font-sans));
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  transition: all var(--omx-motion-fast, 120ms) cubic-bezier(0.16, 1, 0.3, 1);
}
.omnimux-inspiration-btn-add:hover {
  background: #ebebeb;
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.35);
}
.omnimux-inspiration-btn-add:active {
  transform: translateY(0);
}

/* 极简发丝线工具栏 */
.omnimux-inspiration-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  max-width: 100%;
  flex-wrap: wrap;
}

.omnimux-inspiration-search-box {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1 1 200px;
  min-width: 160px;
  max-width: 360px;
}

.omnimux-inspiration-search-icon {
  position: absolute;
  left: 12px;
  pointer-events: none;
  color: var(--omx-color-muted, #7c7c7c);
  display: flex;
  align-items: center;
  justify-content: center;
}

.omnimux-inspiration-search {
  width: 100%;
  height: 32px;
  background: var(--omx-color-canvas-soft, #141414);
  border: 1px solid var(--omx-color-hairline, #242424);
  border-radius: var(--omx-radius-pill, 9999px);
  padding: 0 14px 0 34px;
  color: var(--omx-color-ink, #ffffff);
  font: var(--omx-text-body-sm, 400 13px/18px var(--omx-font-sans));
  outline: none;
  transition: border-color var(--omx-motion-fast, 120ms) ease,
              background-color var(--omx-motion-fast, 120ms) ease;
}
.omnimux-inspiration-search:focus {
  border-color: rgba(255, 255, 255, 0.4);
  background: var(--omx-color-canvas-raised, #1a1a1a);
}

.omnimux-inspiration-filters {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-left: auto;
}

.omnimux-inspiration-select {
  height: 32px;
  background: var(--omx-color-canvas-soft, #141414);
  border: 1px solid var(--omx-color-hairline, #242424);
  border-radius: var(--omx-radius-pill, 9999px);
  padding: 0 12px;
  color: var(--omx-color-ink-soft, #ebebeb);
  font: var(--omx-text-label, 500 12px/16px var(--omx-font-sans));
  cursor: pointer;
  outline: none;
  transition: border-color var(--omx-motion-fast, 120ms) ease,
              background-color var(--omx-motion-fast, 120ms) ease;
}
.omnimux-inspiration-select:hover {
  border-color: var(--omx-color-hairline-strong, #3d3d3d);
  background: var(--omx-color-canvas-raised, #1a1a1a);
}
.omnimux-inspiration-select:focus {
  border-color: rgba(255, 255, 255, 0.4);
}

.omnimux-inspiration-count {
  font: var(--omx-text-code, 400 12px/16px var(--omx-font-mono));
  color: var(--omx-color-muted, #7c7c7c);
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--omx-radius-pill, 9999px);
  padding: 4px 10px;
  white-space: nowrap;
}

/* 9:16 原子化扫光骨架屏矩阵 */
.omnimux-inspiration-skeleton {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 16px;
  width: 100%;
  max-width: 100%;
}
@media (min-width: 1600px) {
  .omnimux-inspiration-skeleton {
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
    gap: 18px;
  }
}
.omnimux-inspiration-skel {
  position: relative;
  width: 100%;
  aspect-ratio: 9 / 16;
  border-radius: var(--omx-radius-sm, 10px);
  background: var(--omx-color-canvas-soft, #141414);
  border: 1px solid var(--omx-color-hairline, #222222);
  overflow: hidden;
}
.omnimux-inspiration-skel::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.04) 50%, transparent 100%);
  animation: omni-shimmer 1.4s infinite;
}

/* 统一卡片网格 */
.omnimux-inspiration-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 16px;
  width: 100%;
  max-width: 100%;
  animation: omni-fade-in 160ms ease;
}
@media (min-width: 1600px) {
  .omnimux-inspiration-grid {
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
    gap: 18px;
  }
}
@media (max-width: 640px) {
  .omnimux-inspiration-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
}

.omnimux-inspiration-card-pure {
  position: relative;
  width: 100%;
  aspect-ratio: 9 / 16;
  border-radius: var(--omx-radius-sm, 10px);
  overflow: hidden;
  cursor: pointer;
  background: var(--omx-color-canvas-soft, #131313);
  border: 1px solid var(--omx-color-hairline, #242424);
  transition: transform var(--omx-motion-base, 180ms) cubic-bezier(.2,.4,.6,1),
              border-color var(--omx-motion-base, 180ms) cubic-bezier(.2,.4,.6,1),
              box-shadow var(--omx-motion-base, 180ms) ease;
}
.omnimux-inspiration-card-pure:hover {
  transform: translateY(-3px);
  border-color: var(--omx-color-hairline-strong, #4a4a4a);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
}
.omnimux-inspiration-cover-img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #181818;
}

/* Fallback 占位卡片 */
.omnimux-inspiration-cover-fallback {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  aspect-ratio: 9 / 16;
  background: radial-gradient(circle at 50% 30%, #202020 0%, #111111 100%);
  padding: 16px;
  gap: 12px;
  text-align: center;
  color: var(--omx-color-muted, #7c7c7c);
}
.omnimux-inspiration-fallback-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--omx-color-hairline, #242424);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--omx-color-ink-soft, #ebebeb);
}
.omnimux-inspiration-fallback-title {
  font-size: 12px;
  line-height: 16px;
  color: var(--omx-color-muted, #888888);
  max-width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
}

/* Hover 浮层 */
.omnimux-inspiration-card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.75) 100%);
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px;
  transition: opacity var(--omx-motion-fast, 120ms) ease;
}
.omnimux-inspiration-card-pure:hover .omnimux-inspiration-card-overlay {
  opacity: 1;
}
.omnimux-inspiration-badge-platform {
  align-self: flex-start;
  padding: 2px 8px;
  border-radius: var(--omx-radius-pill, 9999px);
  font-size: 11px;
  font-weight: 600;
  font-family: var(--omx-font-mono, monospace);
  background: rgba(0,0,0,0.65);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.15);
  color: #ffffff;
  letter-spacing: 0.5px;
}
.omnimux-inspiration-badge-platform.local {
  border-color: #10b981;
  color: #10b981;
  background: rgba(16, 185, 129, 0.15);
}
.omnimux-inspiration-overlay-play {
  align-self: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--omx-color-primary, #ffffff);
  color: var(--omx-color-on-primary, #0a0a0a);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0.9);
  transition: transform var(--omx-motion-fast, 120ms) ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}
.omnimux-inspiration-card-pure:hover .omnimux-inspiration-overlay-play {
  transform: scale(1);
}
.omnimux-inspiration-overlay-play svg {
  width: 18px;
  height: 18px;
  margin-left: 2px;
}
.omnimux-inspiration-overlay-footer {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.85);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-shadow: 0 1px 2px rgba(0,0,0,0.8);
}

/* 详情弹窗 Modal */
.omnimux-inspiration-modal-backdrop {
  position: fixed;
  inset: 0;
  background: var(--omx-color-overlay, rgba(0,0,0,.70));
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
  max-width: 1040px;
  height: 85vh;
  max-height: 720px;
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
  z-index: 20;
  transition: border-color var(--omx-motion-fast, 120ms) ease,
              color var(--omx-motion-fast, 120ms) ease;
}
.omnimux-inspiration-modal-close:hover {
  border-color: var(--omx-color-hairline-strong, #3d3d3d);
  color: var(--omx-color-ink, #ffffff);
}

/* 弹窗左列：视频播放 / 内容拆解 切换大画幅区域 */
.omnimux-inspiration-modal-left {
  flex: 1 1 58%;
  min-width: 320px;
  background: #000000;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

/* 左侧顶部模式切换开关 Segmented Controls */
.omnimux-inspiration-preview-switch {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: rgba(18, 18, 18, 0.85);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--omx-color-hairline, #242424);
  z-index: 10;
}
.omnimux-inspiration-switch-group {
  display: inline-flex;
  background: #0a0a0a;
  padding: 3px;
  border-radius: var(--omx-radius-pill, 9999px);
  border: 1px solid var(--omx-color-hairline, #242424);
}
.omnimux-inspiration-switch-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 26px;
  padding: 0 12px;
  border-radius: var(--omx-radius-pill, 9999px);
  border: none;
  background: transparent;
  color: var(--omx-color-muted, #7c7c7c);
  font: var(--omx-text-label, 500 12px/14px var(--omx-font-sans));
  cursor: pointer;
  transition: all var(--omx-motion-fast, 120ms) ease;
}
.omnimux-inspiration-switch-btn.active {
  background: var(--omx-color-canvas-raised, #242424);
  color: var(--omx-color-ink, #ffffff);
  box-shadow: 0 1px 3px rgba(0,0,0,0.5);
}
.omnimux-inspiration-status-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  border-radius: var(--omx-radius-pill, 9999px);
  font-size: 11px;
  font-family: var(--omx-font-mono, monospace);
  font-weight: 500;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--omx-color-ink-soft, #ebebeb);
}
.omnimux-inspiration-status-badge.done {
  border-color: rgba(16, 185, 129, 0.4);
  background: rgba(16, 185, 129, 0.12);
  color: #10b981;
}
.omnimux-inspiration-status-badge.pending {
  border-color: rgba(245, 158, 11, 0.4);
  background: rgba(245, 158, 11, 0.12);
  color: #f59e0b;
}

/* 播放器容器 */
.omnimux-inspiration-preview-player {
  flex: 1;
  width: 100%;
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
  max-width: 320px;
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

/* AI 内容拆解大视窗 (5 维度沉浸式查看) */
.omnimux-inspiration-deconstruct-view {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #0d0d0d;
  overflow: hidden;
}
.omnimux-inspiration-dim-tabs {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 16px;
  overflow-x: auto;
  border-bottom: 1px solid var(--omx-color-hairline, #222222);
  background: #111111;
}
.omnimux-inspiration-dim-tabs::-webkit-scrollbar {
  height: 3px;
}
.omnimux-inspiration-dim-tab {
  white-space: nowrap;
  padding: 5px 10px;
  border-radius: var(--omx-radius-pill, 9999px);
  border: 1px solid var(--omx-color-hairline, #242424);
  background: #161616;
  color: var(--omx-color-muted, #888888);
  font-size: 11px;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--omx-motion-fast, 120ms) ease;
}
.omnimux-inspiration-dim-tab:hover {
  color: #ffffff;
  border-color: #383838;
}
.omnimux-inspiration-dim-tab.active {
  background: #282828;
  border-color: #555555;
  color: #ffffff;
}

.omnimux-inspiration-dim-content {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.omnimux-inspiration-dim-card {
  border-radius: var(--omx-radius-sm, 10px);
  background: #141414;
  border: 1px solid var(--omx-color-hairline, #242424);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.omnimux-inspiration-dim-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.omnimux-inspiration-dim-title {
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 6px;
}
.omnimux-inspiration-dim-body {
  font-size: 13px;
  line-height: 1.6;
  color: var(--omx-color-ink-soft, #d1d1d1);
  white-space: pre-wrap;
  word-break: break-word;
}
.omnimux-inspiration-dim-code {
  font-family: var(--omx-font-mono, monospace);
  font-size: 12px;
  line-height: 1.5;
  background: #0a0a0a;
  border: 1px solid #222222;
  border-radius: 6px;
  padding: 12px;
  color: #a3e635;
  white-space: pre-wrap;
  overflow-x: auto;
}

/* 拆解为空或进行中态 */
.omnimux-inspiration-deconstruct-empty {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  padding: 30px;
  text-align: center;
}
.omnimux-inspiration-trigger-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 18px;
  border-radius: var(--omx-radius-pill, 9999px);
  background: #ffffff;
  color: #0a0a0a;
  border: none;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(255,255,255,0.18);
  transition: all 120ms ease;
}
.omnimux-inspiration-trigger-btn:hover:not(:disabled) {
  transform: translateY(-1px);
  background: #eaeaea;
}
.omnimux-inspiration-trigger-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* 弹窗右列：极简发丝线详情信息区 (标题与描述在下方) */
.omnimux-inspiration-modal-right {
  flex: 0 0 380px;
  width: 380px;
  background: var(--omx-color-canvas, #0a0a0a);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 20px 24px;
  gap: 16px;
  border-left: 1px solid var(--omx-color-hairline, #242424);
}

/* 创作者信息与平台 Badge */
.omnimux-inspiration-creator-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--omx-color-hairline, #202020);
}
.omnimux-inspiration-creator-left {
  display: flex;
  align-items: center;
  gap: 10px;
}
.omnimux-inspiration-modal-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--omx-color-canvas-raised, #1c1c1c);
  border: 1px solid var(--omx-color-hairline, #2a2a2a);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--omx-font-mono, monospace);
  font-size: 13px;
  font-weight: 600;
  color: var(--omx-color-ink, #ffffff);
}
.omnimux-inspiration-modal-handle {
  font-size: 13px;
  font-weight: 600;
  color: #ffffff;
}

.omnimux-inspiration-modal-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 500;
  color: var(--omx-color-ink-soft, #d1d1d1);
  text-decoration: none;
  padding: 4px 10px;
  border-radius: var(--omx-radius-pill, 9999px);
  border: 1px solid var(--omx-color-hairline, #262626);
  background: var(--omx-color-canvas-soft, #141414);
  transition: all var(--omx-motion-fast, 120ms) ease;
}
.omnimux-inspiration-modal-link:hover {
  border-color: #444444;
  color: #ffffff;
}

/* 标签 Tags */
.omnimux-inspiration-modal-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.omnimux-inspiration-modal-tag {
  padding: 2px 8px;
  border-radius: var(--omx-radius-pill, 9999px);
  font-family: var(--omx-font-mono, monospace);
  font-size: 11px;
  border: 1px solid var(--omx-color-hairline, #242424);
  background: var(--omx-color-canvas-soft, #141414);
  color: var(--omx-color-muted, #888888);
}

/* 视频互动数据 Stats 矩阵 */
.omnimux-inspiration-stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 12px;
  border-radius: 8px;
  background: #111111;
  border: 1px solid #222222;
}
.omnimux-inspiration-stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2px;
}
.omnimux-inspiration-stat-label {
  font-size: 10px;
  text-transform: uppercase;
  color: var(--omx-color-muted, #7c7c7c);
  font-family: var(--omx-font-mono, monospace);
}
.omnimux-inspiration-stat-val {
  font-size: 13px;
  font-weight: 600;
  color: #ffffff;
}

/* 标题和原贴描述区块（置于下方） */
.omnimux-inspiration-caption-block {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 14px;
  border-radius: var(--omx-radius-sm, 8px);
  background: var(--omx-color-canvas-soft, #131313);
  border: 1px solid var(--omx-color-hairline, #242424);
}
.omnimux-inspiration-caption-label {
  font-size: 11px;
  font-family: var(--omx-font-mono, monospace);
  color: var(--omx-color-muted, #7c7c7c);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.omnimux-inspiration-caption-text {
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: var(--omx-color-ink-soft, #ebebeb);
  word-break: break-word;
  white-space: pre-wrap;
}

/* 导入模态框 Import Dialog */
.omnimux-inspiration-import-modal {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 480px;
  border-radius: var(--omx-radius-lg, 16px);
  background: var(--omx-color-canvas-soft, #131313);
  border: 1px solid var(--omx-color-hairline, #242424);
  box-shadow: var(--omx-shadow-overlay, 0 8px 24px rgba(0,0,0,.48));
  overflow: hidden;
}
.omnimux-inspiration-import-header {
  padding: 16px 20px;
  border-bottom: 1px solid var(--omx-color-hairline, #242424);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.omnimux-inspiration-import-header h2 {
  margin: 0;
  font-size: 15px;
  font-weight: 600;
}
.omnimux-inspiration-import-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.omnimux-inspiration-import-footer {
  padding: 14px 20px;
  border-top: 1px solid var(--omx-color-hairline, #242424);
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

/* 空态与错误提示 */
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
  font: var(--omx-text-label, 500 13px/16px var(--omx-font-sans));
  cursor: pointer;
}

/* 触底滚动加载器 */
.omnimux-inspiration-scroll-loader {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 0;
  font-size: 12px;
  color: var(--omx-color-muted, #7c7c7c);
}
.omnimux-inspiration-spinner {
  width: 14px;
  height: 14px;
  border: 2px solid rgba(255,255,255,0.15);
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: omni-spin 0.6s linear infinite;
}
@keyframes omni-spin {
  to { transform: rotate(360deg); }
}
`

/**
 * Inject inspiration CSS styles into document.head safely.
 */
export function injectInspirationStyles() {
  if (typeof document === 'undefined') return
  if (document.getElementById(INSPIRATION_STYLES_ID)) return
  const styleNode = document.createElement('style')
  styleNode.id = INSPIRATION_STYLES_ID
  styleNode.textContent = INSPIRATION_CSS
  document.head.appendChild(styleNode)
}
