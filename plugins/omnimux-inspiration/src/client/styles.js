export const STYLES = `
.omnimux-inspiration-root {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 20px 24px;
  color: var(--dsw-alias-label-primary, var(--dsw-text-primary, inherit));
}
.omnimux-inspiration-root *,
.omnimux-inspiration-root *::before,
.omnimux-inspiration-root *::after { box-sizing: border-box; }
.omnimux-inspiration-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}
.omnimux-inspiration-search {
  flex: 1 1 220px;
  min-width: 160px;
  height: 32px;
  padding: 0 12px;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.08));
  border-radius: 8px;
  background: var(--dsw-alias-bg-secondary, rgba(255,255,255,0.04));
  color: inherit;
  font: inherit;
}
.omnimux-inspiration-select {
  height: 32px;
  padding: 0 10px;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.08));
  border-radius: 8px;
  background: var(--dsw-alias-bg-secondary, rgba(255,255,255,0.04));
  color: inherit;
  font: inherit;
}
.omnimux-inspiration-count {
  margin-left: auto;
  font-size: 12px;
  color: var(--dsw-alias-label-secondary, rgba(255,255,255,0.72));
}
.omnimux-inspiration-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 12px;
}
.omnimux-inspiration-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--dsw-alias-border, rgba(255,255,255,0.08));
  border-radius: 12px;
  background: var(--dsw-alias-bg-secondary, rgba(255,255,255,0.04));
}
.omnimux-inspiration-cover {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  background: var(--dsw-alias-bg-tertiary, rgba(255,255,255,0.06));
}
.omnimux-inspiration-cover-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 16 / 10;
  font-size: 12px;
  color: var(--dsw-alias-label-secondary, rgba(255,255,255,0.72));
  background: var(--dsw-alias-bg-tertiary, rgba(255,255,255,0.06));
}
.omnimux-inspiration-body { padding: 12px 16px 16px; display: flex; flex-direction: column; gap: 6px; }
.omnimux-inspiration-title {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
}
.omnimux-inspiration-meta {
  display: flex;
  gap: 8px;
  font-size: 12px;
  line-height: 16px;
  color: var(--dsw-alias-label-secondary, rgba(255,255,255,0.72));
}
.omnimux-inspiration-link {
  align-self: start;
  color: inherit;
  font-size: 12px;
}
.omnimux-inspiration-empty, .omnimux-inspiration-gate, .omnimux-inspiration-error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 240px;
  text-align: center;
  padding: 24px;
}
.omnimux-inspiration-empty-title { margin: 0; font-size: 16px; font-weight: 600; }
.omnimux-inspiration-empty-text { margin: 0; font-size: 13px; color: var(--dsw-alias-label-secondary, rgba(255,255,255,0.72)); }
.omnimux-inspiration-btn {
  height: 32px;
  padding: 0 16px;
  border: none;
  border-radius: 8px;
  background: var(--dsw-alias-interactive-bg-active, rgba(128,128,128,0.18));
  color: inherit;
  cursor: pointer;
  font: inherit;
}
.omnimux-inspiration-skeleton {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 12px;
}
.omnimux-inspiration-skel {
  height: 180px;
  border-radius: 12px;
  background: var(--dsw-alias-bg-secondary, rgba(255,255,255,0.04));
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
