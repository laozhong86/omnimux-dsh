/**
 * Official Composer bypass — copied from omnimux-market insertGesture,
 * but whole-field replace instead of caret insert.
 *
 * Replication only prefills the composer (set value + focus + caret at end).
 * The user decides when to send; this module never clicks the send button.
 *
 * `document` is injected so node:test can drive a fake textarea.
 */

export const COMPOSER_SELECTOR = [
  '[data-composer-card] textarea',
  '[data-composer-seat] textarea',
  'textarea[data-phase]',
  'textarea[placeholder]',
].join(', ')

export const SEND_SELECTOR = [
  'button[aria-label="发送消息"]',
  'button[aria-label="Send message"]',
  'button[aria-label="Send"]',
].join(', ')

/**
 * @param {Document | { querySelector: Function } | null | undefined} doc
 * @returns {HTMLTextAreaElement | HTMLInputElement | null}
 */
export function findComposer(doc) {
  if (!doc || typeof doc.querySelector !== 'function') return null
  return doc.querySelector(COMPOSER_SELECTOR)
}

/**
 * Kept as a locator helper. Prefill never clicks this button.
 *
 * @param {Document | { querySelector: Function } | null | undefined} doc
 * @returns {HTMLButtonElement | null}
 */
export function findSendButton(doc) {
  if (!doc || typeof doc.querySelector !== 'function') return null
  return doc.querySelector(SEND_SELECTOR)
}

/**
 * Replace the composer value via the prototype setter + InputEvent so React 18
 * controlled inputs pick it up. Direct `field.value =` is ignored.
 *
 * @param {HTMLTextAreaElement | HTMLInputElement} field
 * @param {string} text
 * @param {{
 *   HTMLTextAreaElement?: Function,
 *   HTMLInputElement?: Function,
 *   InputEvent?: Function,
 *   Event?: Function,
 * }} [globals]
 * @returns {boolean}
 */
export function setComposerValue(field, text, globals = {}) {
  if (!field) return false
  const value = String(text ?? '')
  const TextArea = globals.HTMLTextAreaElement ?? (typeof HTMLTextAreaElement === 'function' ? HTMLTextAreaElement : undefined)
  const InputEl = globals.HTMLInputElement ?? (typeof HTMLInputElement === 'function' ? HTMLInputElement : undefined)
  const proto = TextArea && field instanceof TextArea
    ? TextArea.prototype
    : InputEl && field instanceof InputEl
      ? InputEl.prototype
      : Object.getPrototypeOf(field)
  const setter = proto ? Object.getOwnPropertyDescriptor(proto, 'value')?.set : undefined
  if (setter) setter.call(field, value)
  else field.value = value
  try {
    field.setSelectionRange?.(value.length, value.length)
  } catch {
    // some fake fields have no selection
  }
  const InputCtor = globals.InputEvent
    ?? (typeof InputEvent === 'function' ? InputEvent : undefined)
    ?? globals.Event
    ?? (typeof Event === 'function' ? Event : undefined)
  if (typeof InputCtor === 'function') {
    try {
      field.dispatchEvent(new InputCtor('input', { bubbles: true, inputType: 'insertText', data: value }))
    } catch {
      field.dispatchEvent(new InputCtor('input'))
    }
  }
  field.focus?.()
  return field.value.includes('inspiration_id') || field.value === value
}

/**
 * Wait for the composer, write `text`, focus the field and move the caret to
 * the end. Never locates or clicks the send button — the user submits.
 *
 * @param {string} text
 * @param {{
 *   document?: Document | { querySelector: Function },
 *   timeoutMs?: number,
 *   pollMs?: number,
 *   now?: () => number,
 *   sleep?: (ms: number) => Promise<void>,
 *   HTMLTextAreaElement?: Function,
 *   HTMLInputElement?: Function,
 *   InputEvent?: Function,
 *   Event?: Function,
 * }} [opts]
 * @returns {Promise<{ ok: true, via: 'prefill' } | { ok: false, error: string }>}
 */
export async function prefillReplicationPrompt(text, opts = {}) {
  const doc = opts.document ?? (typeof document !== 'undefined' ? document : null)
  const timeoutMs = Number.isFinite(opts.timeoutMs) ? opts.timeoutMs : 6000
  const pollMs = Number.isFinite(opts.pollMs) ? opts.pollMs : 50
  const now = typeof opts.now === 'function' ? opts.now : () => Date.now()
  const sleep = typeof opts.sleep === 'function'
    ? opts.sleep
    : (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  const started = now()
  let field = findComposer(doc)
  while (!field && now() - started < timeoutMs) {
    await sleep(pollMs)
    field = findComposer(doc)
  }
  if (!field) return { ok: false, error: 'composer-missing' }

  const wrote = setComposerValue(field, text, opts)
  if (!wrote || !String(field.value || '').includes('inspiration_id')) {
    return { ok: false, error: 'composer-rejected' }
  }

  try {
    field.focus?.()
    const len = String(field.value || '').length
    field.setSelectionRange?.(len, len)
  } catch {
    // some fake fields have no selection
  }
  return { ok: true, via: 'prefill' }
}
