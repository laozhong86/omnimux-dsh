export const ADD_BUTTON_SELECTOR = '[data-composer-card] button[class*="add"][aria-haspopup="listbox"]'
const BYPASS = '__omnimuxComposerAddBypass'

export function findAddButton(doc = (typeof document !== 'undefined' ? document : null)) {
  if (!doc || typeof doc.querySelector !== 'function') return null
  return doc.querySelector(ADD_BUTTON_SELECTOR)
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
