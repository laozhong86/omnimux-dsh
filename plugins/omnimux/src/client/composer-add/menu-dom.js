const STYLE_ID = 'omx-composer-add-menu'
const MENU_ATTR = 'data-omnimux-composer-add-menu'

const CSS = `
.omx-composer-add-menu {
  position:fixed; z-index:400; min-width:188px; padding:6px;
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

function iconSvg(pathD) {
  return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">${pathD}</svg>`
}

/**
 * @param {Document} doc
 * @param {{
 *   anchor: { bottom: number, left: number },
 *   t: (key: string) => string,
 *   canAdd: boolean,
 *   fileDisabled?: boolean,
 *   fileDisabledReason?: string,
 *   onCommand: () => void,
 *   onAddFile: () => void,
 *   onAddLibrary: () => void,
 * }} opts
 */
export function openNativeAddMenu(doc, opts) {
  closeNativeAddMenu(doc)
  ensureStyles(doc)
  const menu = doc.createElement('div')
  menu.className = 'omx-composer-add-menu'
  menu.setAttribute('role', 'menu')
  menu.setAttribute(MENU_ATTR, 'true')
  const t = opts.t
  const rows = [
    { id: 'command', label: t('composerAdd.commands'), disabled: false, title: '', icon: '<path d="M6 13 L10 3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>', run: opts.onCommand, viewBox: true },
    {
      id: 'file',
      label: t('composerAdd.addFile'),
      disabled: !opts.canAdd || Boolean(opts.fileDisabled),
      title: !opts.canAdd ? t('composerAdd.needSession') : (opts.fileDisabled ? (opts.fileDisabledReason || '') : ''),
      icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>',
      run: opts.onAddFile,
    },
    {
      id: 'library',
      label: t('composerAdd.fromLibrary'),
      disabled: !opts.canAdd,
      title: !opts.canAdd ? t('composerAdd.needSession') : '',
      icon: '<rect x="3" y="4" width="7" height="16" rx="1.5"/><rect x="14" y="4" width="7" height="16" rx="1.5"/>',
      run: opts.onAddLibrary,
    },
  ]

  for (const row of rows) {
    const btn = doc.createElement('button')
    btn.type = 'button'
    btn.className = 'omx-composer-add-menu__item'
    btn.setAttribute('role', 'menuitem')
    btn.disabled = row.disabled
    if (row.title) btn.title = row.title
    btn.innerHTML = `<span class="omx-composer-add-menu__icon">${iconSvg(row.icon)}</span>${row.label}`
    btn.addEventListener('click', (event) => {
      event.preventDefault()
      event.stopPropagation()
      if (btn.disabled) return
      closeNativeAddMenu(doc)
      row.run()
    })
    menu.appendChild(btn)
  }

  menu.addEventListener('mousedown', (event) => {
    event.preventDefault()
    event.stopPropagation()
  })
  const vh = doc.defaultView?.innerHeight || 800
  const below = opts.anchor.bottom + 6
  menu.style.left = `${Math.round(opts.anchor.left)}px`
  menu.style.top = `${Math.round(below)}px`
  doc.body.appendChild(menu)
  const height = menu.getBoundingClientRect().height || 110
  if (below + height > vh - 8) {
    menu.style.top = `${Math.round(Math.max(8, opts.anchor.top - height - 6))}px`
  }
  return menu
}

export function closeNativeAddMenu(doc) {
  if (!doc) return
  doc.querySelectorAll(`[${MENU_ATTR}]`).forEach((node) => node.remove())
}

export function nativeAddMenuIsOpen(doc) {
  return Boolean(doc?.querySelector?.(`[${MENU_ATTR}]`))
}
