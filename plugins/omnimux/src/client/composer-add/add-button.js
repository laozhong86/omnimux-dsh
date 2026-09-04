export const ADD_BUTTON_SELECTOR = '[data-composer-card] button[class*="add"][aria-haspopup="listbox"]'
export const ADD_BUTTON_INNER_SELECTOR = 'button[class*="add"][aria-haspopup="listbox"]'
const BYPASS = '__omnimuxComposerAddBypass'

export function findAddButton(doc = (typeof document !== 'undefined' ? document : null)) {
  if (!doc || typeof doc.querySelector !== 'function') return null
  return doc.querySelector(ADD_BUTTON_SELECTOR)
}

/**
 * Element.closest() does not accept a descendant combinator. Resolve the
 * official + button from a click target (often an inner SVG).
 * @param {EventTarget | null | undefined} target
 */
export function closestAddButton(target) {
  const el = target && typeof target === 'object' && 'nodeType' in target && target.nodeType === 3
    ? target.parentElement
    : target
  if (!el || typeof el.closest !== 'function') return null
  const button = el.closest(ADD_BUTTON_INNER_SELECTOR)
  if (!button) return null
  if (typeof button.closest !== 'function') return button
  return button.closest('[data-composer-card]') ? button : null
}

export function replayOfficialAdd(doc, state = {}) {
  const button = findAddButton(doc)
  if (!button || typeof button.click !== 'function') return false
  state.bypass = true
  button[BYPASS] = true
  try {
    button.click()
    return true
  } finally {
    state.bypass = false
    delete button[BYPASS]
  }
}
