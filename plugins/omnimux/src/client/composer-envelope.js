/**
 * Intercepts composer submit gestures (Enter key and Send button click)
 * to prefix UI Context Envelope to the user message before sending.
 * Supports both standard textarea and Lexical contenteditable editors.
 * Also injects CSS to hide <ui_context> tags in rendered chat bubbles.
 */

export const COMPOSER_SELECTOR = [
  '[data-lexical-editor="true"]',
  '[data-composer-input="true"]',
  'div[role="textbox"][contenteditable="true"]',
  'div[role="textbox"]',
  '[data-composer-card] textarea',
  '[data-composer-seat] textarea',
  'textarea[data-phase]',
  'textarea[placeholder]',
  'textarea',
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

export function getComposerText(field) {
  if (!field) return ''
  if (field.isContentEditable || field.getAttribute?.('contenteditable') === 'true') {
    return field.innerText ?? field.textContent ?? ''
  }
  return field.value ?? ''
}

export function setComposerValue(field, text, globals = {}) {
  if (!field) return false
  const value = String(text ?? '')

  // 1. Contenteditable / Lexical editor
  if (field.isContentEditable || field.getAttribute?.('contenteditable') === 'true' || field.__lexicalEditor) {
    if (field.__lexicalEditor && typeof document !== 'undefined') {
      try {
        field.focus()
        const sel = (globals.window || globalThis.window)?.getSelection?.()
        if (sel) {
          sel.selectAllChildren(field)
        }
        document.execCommand('insertText', false, value)
        return true
      } catch {
        // fall through
      }
    }
    field.textContent = value
    const Ev = globals.InputEvent ?? globals.Event ?? (typeof InputEvent === 'function' ? InputEvent : typeof Event === 'function' ? Event : undefined)
    if (Ev && typeof field.dispatchEvent === 'function') {
      try { field.dispatchEvent(new Ev('input', { bubbles: true, cancelable: true })) } catch {}
    }
    return true
  }

  // 2. Standard HTMLTextAreaElement / HTMLInputElement
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

export function attachComposerEnvelope(composerEl, getUiContext, formatCompactBlock, globals = {}) {
  if (!composerEl || typeof getUiContext !== 'function' || typeof formatCompactBlock !== 'function') return false
  const currentVal = getComposerText(composerEl)
  if (currentVal.includes('<ui_context')) return false

  try {
    const envelope = getUiContext()
    if (!envelope || !envelope.ok) return false
    const block = formatCompactBlock(envelope)
    if (!block) return false
    const nextVal = block + String.fromCharCode(10, 10) + currentVal
    return setComposerValue(composerEl, nextVal, globals)
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
      const composer = findComposer(doc)
      if (composer && (e.target === composer || composer.contains?.(e.target))) {
        const wb = getWorkbench()
        if (wb && typeof wb.getUiContext === 'function' && typeof wb.formatCompactContextBlock === 'function') {
          attachComposerEnvelope(composer, wb.getUiContext, wb.formatCompactContextBlock, options.globals)
        }
      }
    }
  }

  const handlePointerDown = (e) => {
    const sendBtn = findSendButton(doc)
    if (sendBtn && (e.target === sendBtn || sendBtn.contains?.(e.target))) {
      const composer = findComposer(doc)
      if (composer) {
        const wb = getWorkbench()
        if (wb && typeof wb.getUiContext === 'function' && typeof wb.formatCompactContextBlock === 'function') {
          attachComposerEnvelope(composer, wb.getUiContext, wb.formatCompactContextBlock, options.globals)
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
