/**
 * Write through React's value tracker. A plain `field.value =` is ignored by
 * the official controlled composer, so the gallery used to close with no draft.
 * @param {{
 *   value: string,
 *   selectionStart?: number | null,
 *   selectionEnd?: number | null,
 *   setSelectionRange?: (start: number, end: number) => void,
 *   dispatchEvent: (event: Event) => boolean,
 *   focus?: () => void,
 * }} field
 * @param {string} gesture
 * @returns {boolean}
 */
export function insertGesture(field, gesture) {
  const token = gesture.endsWith(' ') ? gesture : `${gesture} `
  const start = field.selectionStart ?? field.value.length
  const end = field.selectionEnd ?? start
  const next = `${field.value.slice(0, start)}${token}${field.value.slice(end)}`
  const proto = typeof HTMLTextAreaElement === 'function' && field instanceof HTMLTextAreaElement
    ? HTMLTextAreaElement.prototype
    : typeof HTMLInputElement === 'function' && field instanceof HTMLInputElement
      ? HTMLInputElement.prototype
      : Object.getPrototypeOf(field)
  const setter = proto ? Object.getOwnPropertyDescriptor(proto, 'value')?.set : undefined
  if (setter) setter.call(field, next)
  else field.value = next
  const caret = start + token.length
  field.setSelectionRange?.(caret, caret)
  const Input = typeof InputEvent === 'function' ? InputEvent : Event
  field.dispatchEvent(new Input('input', { bubbles: true, inputType: 'insertText', data: token }))
  field.focus?.()
  return field.value.includes(token.trim())
}
