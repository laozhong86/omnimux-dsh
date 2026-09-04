/**
 * Intercepts composer submit gestures (Enter key and Send button click)
 * to prefix UI Context Envelope to the user message before sending.
 * Also injects CSS to hide <ui_context> tags in rendered chat bubbles.
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
  '[data-send-button]',
].join(', ')

export function findComposer(doc) {
  if (!doc || typeof doc.querySelector !== 'function') return null
  return doc.querySelector(COMPOSER_SELECTOR)
}

export function findSendButton(doc) {
  if (!doc || typeof doc.querySelector !== 'function') return null
  return doc.querySelector(SEND_SELECTOR)
}

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

  const Ev = globals.InputEvent ?? globals.Event ?? (typeof InputEvent === 'function' ? InputEvent : typeof Event === 'function' ? Event : undefined)
  if (Ev && typeof field.dispatchEvent === 'function') {
    try {
      field.dispatchEvent(new Ev('input', { bubbles: true, cancelable: true }))
    } catch {
      // ignore
    }
  }
  return true
}

export function injectUiContextStyle(doc = (typeof document !== 'undefined' ? document : null)) {
  if (!doc || typeof doc.createElement !== 'function') return
  const id = 'omnimux-ui-context-style'
  if (doc.getElementById?.(id)) return
  const style = doc.createElement('style')
  style.id = id
  style.textContent = `
    ui_context, .omnimux-ui-context-hidden {
      display: none !important;
    }
  `
  doc.head?.appendChild(style)
}

export function attachComposerEnvelope(textarea, getUiContext, formatCompactBlock, globals = {}) {
  if (!textarea || typeof getUiContext !== 'function' || typeof formatCompactBlock !== 'function') return false
  const currentVal = textarea.value || ''
  if (currentVal.includes('<ui_context')) return false

  try {
    const envelope = getUiContext()
    if (!envelope || !envelope.ok) return false
    const block = formatCompactBlock(envelope)
    if (!block) return false
    const nextVal = block + String.fromCharCode(10, 10) + currentVal
    return setComposerValue(textarea, nextVal, globals)
  } catch (err) {
    console.error('[composer-envelope] attach failed:', err)
    return false
  }
}

export function installComposerEnvelopeCapture(doc = (typeof document !== 'undefined' ? document : null), options = {}) {
  if (!doc || typeof doc.addEventListener !== 'function') return () => {}

  injectUiContextStyle(doc)

  const getWorkbench = options.getWorkbench || (() => globalThis.window?.__omnimuxWorkbench)

  const handleKeydown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey && !e.isComposing && !e.ctrlKey && !e.metaKey) {
      const textarea = findComposer(doc)
      if (textarea && (e.target === textarea || textarea.contains?.(e.target))) {
        const wb = getWorkbench()
        if (wb && typeof wb.getUiContext === 'function' && typeof wb.formatCompactContextBlock === 'function') {
          attachComposerEnvelope(textarea, wb.getUiContext, wb.formatCompactContextBlock, options.globals)
        }
      }
    }
  }

  const handlePointerDown = (e) => {
    const sendBtn = findSendButton(doc)
    if (sendBtn && (e.target === sendBtn || sendBtn.contains?.(e.target))) {
      const textarea = findComposer(doc)
      if (textarea) {
        const wb = getWorkbench()
        if (wb && typeof wb.getUiContext === 'function' && typeof wb.formatCompactContextBlock === 'function') {
          attachComposerEnvelope(textarea, wb.getUiContext, wb.formatCompactContextBlock, options.globals)
        }
      }
    }
  }

  doc.addEventListener('keydown', handleKeydown, { capture: true })
  doc.addEventListener('pointerdown', handlePointerDown, { capture: true })

  return () => {
    doc.removeEventListener('keydown', handleKeydown, { capture: true })
    doc.removeEventListener('pointerdown', handlePointerDown, { capture: true })
  }
}
