import {
  findComposer,
  findSendButton,
  getComposerText,
  setComposerValue,
} from '../composer-envelope.js'
import { assemblePromptWithAttachments } from '../attachments/prompt-assembly.ts'
import { getGlobalAttachmentStore } from '../attachments/store.ts'

export const CONTEXT_MARKER = '### 会话关联上下文'

/**
 * @param {string} text
 */
export function hasAttachedContext(text) {
  return typeof text === 'string' && text.includes(CONTEXT_MARKER)
}

/**
 * @param {string} userPrompt
 * @param {readonly object[]} attachments
 */
export function nextComposerText(userPrompt, attachments) {
  if (!attachments || attachments.length === 0) return userPrompt || ''
  if (hasAttachedContext(userPrompt)) return userPrompt || ''
  return assemblePromptWithAttachments(userPrompt || '', attachments)
}

function currentSessionId(store) {
  const id = store.getActiveSessionId?.() || ''
  return id && id !== 'default' ? id : ''
}

/**
 * @param {Document | null} doc
 * @param {{ store?: ReturnType<typeof getGlobalAttachmentStore>, globals?: object }} [options]
 */
export function injectAttachmentsBeforeSubmit(doc, options = {}) {
  const store = options.store || getGlobalAttachmentStore()
  const sessionId = currentSessionId(store)
  if (!sessionId) return false
  const attachments = store.getSnapshot(sessionId)
  if (!attachments || attachments.length === 0) return false
  const composer = findComposer(doc)
  if (!composer) return false
  const current = getComposerText(composer)
  if (hasAttachedContext(current)) return false
  const next = nextComposerText(current, attachments)
  if (next === current) return false
  try {
    const ok = setComposerValue(composer, next, options.globals)
    if (ok) {
      console.debug('[omnimux:composer-add]', 'injected-context', { sessionId, count: attachments.length })
    }
    return ok
  } catch (error) {
    console.debug('[omnimux:composer-add]', 'inject-failed', error)
    return false
  }
}

function shouldClearAfterSubmit(doc, previousDraft) {
  const composer = findComposer(doc)
  if (!composer) return false
  const now = getComposerText(composer).trim()
  if (now === '') return true
  if (previousDraft && now === previousDraft.trim()) return false
  return now.length < (previousDraft || '').length && !hasAttachedContext(now)
}

/**
 * @param {Document | null} doc
 * @param {{ store?: ReturnType<typeof getGlobalAttachmentStore>, globals?: object }} [options]
 */
export function installComposerAttachmentSubmitCapture(doc = (typeof document !== 'undefined' ? document : null), options = {}) {
  if (!doc || typeof doc.addEventListener !== 'function') return () => {}
  const store = options.store || getGlobalAttachmentStore()

  const scheduleClear = (previousDraft) => {
    const sessionId = currentSessionId(store)
    if (!sessionId) return
    const later = typeof globalThis.setTimeout === 'function'
      ? globalThis.setTimeout
      : (fn) => { fn(); return 0 }
    later(() => {
      if (shouldClearAfterSubmit(doc, previousDraft)) {
        store.clear(sessionId)
        console.debug('[omnimux:composer-add]', 'cleared-after-submit', { sessionId })
      }
    }, 80)
  }

  const handleKeydown = (e) => {
    if (e.key !== 'Enter' || e.shiftKey || e.isComposing || e.ctrlKey || e.metaKey) return
    const composer = findComposer(doc)
    if (!composer || (e.target !== composer && !composer.contains?.(e.target))) return
    injectAttachmentsBeforeSubmit(doc, { store, globals: options.globals })
    scheduleClear(getComposerText(composer))
  }

  const handlePointerDown = (e) => {
    const sendBtn = findSendButton(doc)
    if (!sendBtn || (e.target !== sendBtn && !sendBtn.contains?.(e.target))) return
    injectAttachmentsBeforeSubmit(doc, { store, globals: options.globals })
  }

  const handlePointerUp = (e) => {
    const sendBtn = findSendButton(doc)
    if (!sendBtn || (e.target !== sendBtn && !sendBtn.contains?.(e.target))) return
    scheduleClear(getComposerText(findComposer(doc)))
  }

  doc.addEventListener('keydown', handleKeydown, { capture: true })
  doc.addEventListener('pointerdown', handlePointerDown, { capture: true })
  doc.addEventListener('pointerup', handlePointerUp, { capture: true })
  return () => {
    doc.removeEventListener('keydown', handleKeydown, { capture: true })
    doc.removeEventListener('pointerdown', handlePointerDown, { capture: true })
    doc.removeEventListener('pointerup', handlePointerUp, { capture: true })
  }
}
