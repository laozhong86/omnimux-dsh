import { createPortal } from 'react-dom'

const STYLE_ID = 'omx-composer-add-menu'

const CSS = `
.omx-composer-add-menu {
  position:fixed; z-index:80; min-width:188px; padding:6px;
  border:1px solid var(--dsw-alias-border-l2);
  border-radius:12px;
  background: var(--dsw-alias-bg-layer-3);
  box-shadow: var(--dsw-shadow-lv2);
}
.omx-composer-add-menu__item {
  appearance:none; font:inherit; width:100%; display:flex; align-items:center; gap:8px;
  height:32px; border:none; border-radius:8px; padding:0 10px; cursor:pointer;
  background:transparent; color:var(--dsw-alias-label-primary); text-align:left;
}
.omx-composer-add-menu__item:hover:not(:disabled) {
  background: var(--dsw-alias-interactive-bg-hover-solid);
}
.omx-composer-add-menu__item:disabled {
  opacity:0.5; cursor:default;
}
.omx-composer-add-menu__icon {
  width:16px; height:16px; display:grid; place-items:center; color:var(--dsw-alias-label-secondary);
}
`

function ensureStyles(doc) {
  if (!doc || doc.getElementById(STYLE_ID)) return
  const style = doc.createElement('style')
  style.id = STYLE_ID
  style.textContent = CSS
  doc.head?.appendChild(style)
}

function SlashIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M6 13 L10 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function FileIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
    </svg>
  )
}

function LibraryIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="4" width="7" height="16" rx="1.5" />
      <rect x="14" y="4" width="7" height="16" rx="1.5" />
    </svg>
  )
}

/**
 * @param {{
 *   open: boolean,
 *   anchor: DOMRect | null,
 *   t: (key: string) => string,
 *   canAdd: boolean,
 *   fileDisabled?: boolean,
 *   fileDisabledReason?: string,
 *   onCommand: () => void,
 *   onAddFile: () => void,
 *   onAddLibrary: () => void,
 *   onClose: () => void,
 * }} props
 */
export function ComposerAddMenu({
  open,
  anchor,
  t,
  canAdd,
  fileDisabled,
  fileDisabledReason,
  onCommand,
  onAddFile,
  onAddLibrary,
  onClose,
}) {
  if (!open || !anchor || typeof document === 'undefined') return null
  ensureStyles(document)
  const top = Math.round(anchor.bottom + 6)
  const left = Math.round(anchor.left)
  return createPortal(
    <div
      className="omx-composer-add-menu"
      role="menu"
      data-omnimux-composer-add-menu="true"
      style={{ top: `${top}px`, left: `${left}px` }}
      onMouseDown={(event) => { event.preventDefault(); event.stopPropagation() }}
    >
      <button type="button" className="omx-composer-add-menu__item" role="menuitem" onClick={onCommand}>
        <span className="omx-composer-add-menu__icon"><SlashIcon /></span>
        {t('composerAdd.commands')}
      </button>
      <button
        type="button"
        className="omx-composer-add-menu__item"
        role="menuitem"
        disabled={!canAdd || fileDisabled}
        title={!canAdd ? t('composerAdd.needSession') : (fileDisabled ? fileDisabledReason : undefined)}
        onClick={onAddFile}
      >
        <span className="omx-composer-add-menu__icon"><FileIcon /></span>
        {t('composerAdd.addFile')}
      </button>
      <button
        type="button"
        className="omx-composer-add-menu__item"
        role="menuitem"
        disabled={!canAdd}
        title={!canAdd ? t('composerAdd.needSession') : undefined}
        onClick={onAddLibrary}
      >
        <span className="omx-composer-add-menu__icon"><LibraryIcon /></span>
        {t('composerAdd.fromLibrary')}
      </button>
    </div>,
    document.body,
  )
}
