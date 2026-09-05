/**
 * Direct pointer activation for the two OmniMux commands inside the official
 * command menu. Keyboard selection deliberately remains owned by the host so
 * its popupSelect fallback is always available.
 */

/** Stable ids registered by composer-add/commands.js. */
export const DIRECT_COMMANDS = Object.freeze({
  addFile: 'add-file',
  addLibrary: 'add-from-library',
})

const LOG = '[omnimux:composer-add]'
const COMMAND_ROW_SELECTOR = '[data-composer-card] [role="listbox"] button[role="option"]'

function queryRows(doc) {
  if (!doc || typeof doc.querySelectorAll !== 'function') return []
  try {
    return [...doc.querySelectorAll(COMMAND_ROW_SELECTOR)]
  } catch {
    return []
  }
}

/**
 * The icon span is optional and precedes itemName in the official markup.
 * Match only an exact, plugin-controlled command id; descriptions are not a
 * safe anchor because translated prose can collide with other commands.
 * @param {Element} row
 * @returns {string}
 */
function commandIdForRow(row) {
  if (!row || typeof row.querySelectorAll !== 'function') return ''
  const names = new Set(Object.values(DIRECT_COMMANDS))
  for (const span of row.querySelectorAll('span')) {
    const text = String(span.textContent || '').trim()
    if (names.has(text)) return text
  }
  return ''
}

/**
 * Finds one direct command row. The returned level describes whether the
 * current host id convention was present; both levels require the same exact
 * command id and never use localized description text.
 * @param {Document} doc
 * @param {string} command
 * @returns {{ row: HTMLButtonElement, command: string, level: 1 | 2 } | null}
 */
export function findDirectRow(doc, command) {
  for (const row of queryRows(doc)) {
    if (commandIdForRow(row) !== command) continue
    const level = String(row.id || '').startsWith('dsh-slash-option-command-') ? 1 : 2
    return { row, command, level }
  }
  return null
}

function isPrimaryPointerDown(event) {
  return event?.type === 'mousedown'
    && event.button === 0
    && !event.ctrlKey
    && !event.metaKey
    && !event.altKey
    && !event.shiftKey
}

function swallow(event) {
  event.preventDefault?.()
  event.stopPropagation?.()
  event.stopImmediatePropagation?.()
}

/**
 * Ask the official controller to dismiss its menu without removing official
 * DOM. A pointerdown fallback is intentionally avoided: a delayed synthetic
 * outside click can close the AssetPicker opened by the direct action.
 * @param {Document} doc
 */
export function closeOfficialMenu(doc) {
  if (!doc) return
  const target = doc.activeElement || doc.body
  try {
    const EventClass = doc.defaultView?.KeyboardEvent || KeyboardEvent
    target?.dispatchEvent?.(new EventClass('keydown', {
      key: 'Escape', bubbles: true, cancelable: true,
    }))
  } catch {
    console.debug(LOG, 'menu-direct: escape-dismiss-failed')
  }
}

/**
 * Captures one primary mouse gesture. A following click is swallowed exactly
 * once so React cannot receive an alternate future click handler, but a
 * click with no preceding primary mousedown (keyboard/assistive simulation)
 * is left completely to the official fallback.
 * @param {Event} event
 * @param {() => void} action
 * @param {Document} doc
 * @param {{ suppressClick: boolean }} gesture
 * @returns {boolean}
 */
export function interceptRow(event, action, doc, gesture = { suppressClick: false }) {
  if (event?.type === 'click') {
    if (!gesture.suppressClick) return false
    gesture.suppressClick = false
    swallow(event)
    return true
  }
  if (!isPrimaryPointerDown(event) || typeof action !== 'function') return false
  swallow(event)
  gesture.suppressClick = true
  closeOfficialMenu(doc)
  console.debug(LOG, 'menu-direct: intercept', {
    command: event.currentTarget?.__omnimuxDirectCommand,
  })
  action()
  return true
}

function removeBinding(row, record) {
  row.removeEventListener('mousedown', record.handler, true)
  row.removeEventListener('click', record.handler, true)
  delete row.__omnimuxDirectCommand
}

/**
 * @param {Document} doc
 * @param {{
 *   onAddFileFolder: () => void,
 *   onAddLibrary: () => void,
 *   observerFactory?: typeof MutationObserver | null,
 * }} options
 * @returns {() => void} dispose
 */
export function installMenuDirect(doc, options) {
  if (!doc || typeof doc.addEventListener !== 'function') return () => {}
  const actions = {
    [DIRECT_COMMANDS.addFile]: options.onAddFileFolder,
    [DIRECT_COMMANDS.addLibrary]: options.onAddLibrary,
  }
  const bindings = new Map()
  let announced = false
  let menuOpenLogged = false

  const bind = (row, command) => {
    const gesture = { suppressClick: false }
    const handler = (event) => interceptRow(event, actions[command], doc, gesture)
    row.__omnimuxDirectCommand = command
    row.addEventListener('mousedown', handler, true)
    row.addEventListener('click', handler, true)
    bindings.set(row, { command, handler })
    if (!announced) {
      announced = true
      console.debug(LOG, 'menu-direct: bound', { command })
    }
  }

  const scan = () => {
    const rows = new Set(queryRows(doc))
    for (const [row, record] of bindings) {
      const command = rows.has(row) ? commandIdForRow(row) : ''
      if (command !== record.command) {
        removeBinding(row, record)
        bindings.delete(row)
      }
    }

    let matched = 0
    for (const row of rows) {
      const command = commandIdForRow(row)
      if (!command) continue
      matched += 1
      if (!bindings.has(row)) bind(row, command)
    }

    const menuOpen = rows.size > 0
    if (menuOpen && matched === 0 && !menuOpenLogged) {
      menuOpenLogged = true
      console.debug(LOG, 'menu-direct: no-row-bound')
    } else if (!menuOpen) {
      menuOpenLogged = false
    }
  }

  const ObserverClass = options.observerFactory
    || (typeof MutationObserver !== 'undefined' ? MutationObserver : null)
  const observer = ObserverClass ? new ObserverClass(scan) : null
  observer?.observe(doc.documentElement || doc.body, {
    childList: true,
    subtree: true,
    characterData: true,
  })
  scan()

  return () => {
    observer?.disconnect()
    for (const [row, record] of bindings) removeBinding(row, record)
    bindings.clear()
  }
}
