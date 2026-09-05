/**
 * Inspiration → chat orchestrator (official new-session semantics).
 *
 * Pipeline: exclusive lock → hasAnySession → reuse blank or click .newSession
 * → addAttachment → dismissInspirationLibrary → prefillReplicationPrompt.
 * Never starts a workflow project, never copies text, never clicks send.
 */
import { buildReplicationPrompt } from './replication.js'
import { prefillReplicationPrompt } from './composer-inject.js'
import { hasAnySession, isBlankSession } from './is-blank-session.js'
import { clickOfficialNewSession } from './new-session-click.js'

export const INSPIRATION_LIBRARY_TAB_ID = 'omnimux-inspiration:library'

/** Module-level inflight lock. A second call returns `{ error: 'busy' }` and does not queue. */
let replicateInflight = null

/**
 * Immediate try-lock. If a replicate is already running, the second caller
 * is rejected with `{ ok: false, error: 'busy' }` and `fn` is never invoked.
 * @template T
 * @param {() => Promise<T>} fn
 * @returns {Promise<T | { ok: false, error: 'busy' }>}
 */
export function runExclusive(fn) {
  if (replicateInflight) {
    return Promise.resolve({ ok: false, error: 'busy' })
  }
  const work = Promise.resolve()
    .then(fn)
    .finally(() => {
      if (replicateInflight === work) replicateInflight = null
    })
  replicateInflight = work
  return work
}

export function isReplicateBusy() {
  return replicateInflight != null
}

/**
 * Test-only: drop the inflight handle so cases start from idle.
 */
export function resetReplicateLock() {
  replicateInflight = null
}

function resolveDoc(io) {
  if (io.document) return io.document
  return typeof document !== 'undefined' ? document : null
}

function resolveWindow(io, doc) {
  if (io.window) return io.window
  if (doc && doc.defaultView) return doc.defaultView
  if (typeof window !== 'undefined') return window
  return undefined
}

/**
 * Cover fallback copied from CoverCard's pickCoverSrc usage; do not import api.js.
 * @param {object | null | undefined} row
 * @returns {string}
 */
export function pickReplicationPreviewUrl(row) {
  if (!row || typeof row !== 'object') return ''
  const rec = /** @type {Record<string, unknown>} */ (row)
  const raw = rec.cover_key ?? rec.cover_url
  if (typeof raw !== 'string' || raw === '') return ''
  if (raw.includes('..')) return ''
  if (/^https?:\/\//i.test(raw)) return raw
  if (raw.startsWith('/omnimux/inspiration/local/media/')) return raw
  if (raw.startsWith('/omnimux/inspiration/media/')) return raw
  if (raw.startsWith('/api/inspiration/v1/media/')) {
    return `/omnimux/inspiration/media/${raw.slice('/api/inspiration/v1/media/'.length)}`
  }
  return `/omnimux/inspiration/media/${raw.replace(/^\/+/, '')}`
}

/**
 * Attachment payload for this CTA only.
 * @param {object} row
 */
export function buildInspirationPayload(row) {
  const id = row?.id
  return {
    sourcePlugin: 'omnimux-inspiration',
    kind: 'inspiration',
    entityId: id,
    title: row?.title || row?.source_url || '灵感素材',
    extension: 'INSPIRATION',
    relativePath: row?.local_paths?.video || row?.local_paths?.cover || `inspiration/${id}`,
    previewUrl: pickReplicationPreviewUrl(row),
    metadata: {
      inspiration_id: id,
      source_url: row?.source_url,
      source_platform: row?.source_platform,
    },
  }
}

/**
 * @param {{ window?: Window, tabId?: string, onDismissModal?: () => void }} [io]
 */
/**
 * Library tabs default to `gui` (conversationCollapsed). Closing the library
 * while another occupant (创作画布) remains does NOT close the panel, so
 * `setFocus('split')` is overwritten by the leftover tab's gui record and
 * the middle composer stays width 0 — click looks like a no-op (#528).
 * Enter-conversation: close leftover panel + uncollapse AFTER closeTab.
 */
function revealConversationColumn(wb) {
  if (!wb) return
  if (typeof wb.setConversationCollapsed === 'function') {
    try { wb.setConversationCollapsed(false) } catch { /* ignore */ }
  }
  if (typeof wb.closePanel === 'function') {
    try { wb.closePanel() } catch { /* ignore */ }
    return
  }
  if (typeof wb.setFocus === 'function') {
    try { wb.setFocus('chat') } catch { /* ignore */ }
  }
}

function workbenchFrom(win) {
  if (win && win.__omnimuxWorkbench) return win.__omnimuxWorkbench
  if (typeof window !== 'undefined' && window.__omnimuxWorkbench) return window.__omnimuxWorkbench
  return undefined
}

export function dismissInspirationLibrary(io = {}) {
  if (typeof io.onDismissModal === 'function') {
    try { io.onDismissModal() } catch { /* ignore */ }
  }
  const win = io.window
    ?? (typeof window !== 'undefined' ? window : undefined)
  const tabId = io.tabId || INSPIRATION_LIBRARY_TAB_ID
  const wb = workbenchFrom(win)
  const hideLibraryThenReveal = () => {
    if (wb && typeof wb.closeTab === 'function') {
      try { wb.closeTab(tabId) } catch { /* ignore */ }
    } else if (wb && typeof wb.createSidebarStore === 'function') {
      try { wb.createSidebarStore({ tabId })?.close?.() } catch { /* ignore */ }
    }
    revealConversationColumn(wb)
  }
  hideLibraryThenReveal()
  // Library open() defaults to gui and can re-collapse the middle pane on the
  // same tick as closeTab; replay after React/workbench subscribers settle.
  if (typeof setTimeout === 'function') {
    setTimeout(hideLibraryThenReveal, 0)
    setTimeout(hideLibraryThenReveal, 50)
  }
}

function readActiveSessionId(win) {
  const getter = win && win.__omnimuxAttachments && win.__omnimuxAttachments.getActiveSessionId
  if (typeof getter !== 'function') return ''
  try {
    return String(getter.call(win.__omnimuxAttachments) || '')
  } catch {
    return ''
  }
}

function resolveAttachSessionId(io, clickResult, win) {
  if (io.sessionId != null && String(io.sessionId) !== '') {
    const explicit = String(io.sessionId)
    return explicit === 'default' ? '' : explicit
  }
  const fromClick = clickResult && clickResult.sessionId != null ? String(clickResult.sessionId) : ''
  if (fromClick && fromClick !== 'default') return fromClick
  const active = readActiveSessionId(win)
  if (active && active !== 'default') return active
  return ''
}

function defaultAddAttachment(win, doc) {
  return (sessionId, payload) => {
    const store = win && win.__omnimuxAttachments
    if (store && typeof store.addAttachment === 'function') {
      return store.addAttachment(sessionId || '', payload)
    }
    const target = win || (doc && doc.defaultView) || (typeof window !== 'undefined' ? window : null)
    if (target && typeof target.dispatchEvent === 'function' && typeof target.CustomEvent === 'function') {
      const eventName = ['omnimux', 'add-to-conversation'].join(':')
      target.dispatchEvent(new target.CustomEvent(eventName, { detail: payload }))
      return { ok: true }
    }
    return { ok: false, reason: 'invalid-payload' }
  }
}

/**
 * @param {{ id?: unknown, title?: unknown, source_url?: unknown, source_platform?: unknown, type?: unknown, local_paths?: object, stats?: object, deconstruction?: object, duration?: unknown }} row
 * @param {object} [io]
 */
export async function oneClickReplicate(row, io = {}) {
  const onStatus = typeof io.onStatus === 'function' ? io.onStatus : () => {}

  if (isReplicateBusy()) {
    onStatus('card.cta.busy')
    return { ok: false, error: 'busy' }
  }

  return runExclusive(async () => {
    const doc = resolveDoc(io)
    const win = resolveWindow(io, doc)
    const hasSession = typeof io.hasSession === 'function' ? io.hasSession : hasAnySession
    const isBlank = typeof io.isBlank === 'function' ? io.isBlank : isBlankSession
    const clickNew = typeof io.clickNewSession === 'function' ? io.clickNewSession : clickOfficialNewSession
    const addAttachment = typeof io.addAttachment === 'function'
      ? io.addAttachment
      : defaultAddAttachment(win, doc)
    const prefill = typeof io.prefillPrompt === 'function' ? io.prefillPrompt : prefillReplicationPrompt
    const dismiss = typeof io.dismissLibrary === 'function'
      ? io.dismissLibrary
      : () => dismissInspirationLibrary({
        window: win,
        onDismissModal: io.onDismissModal,
      })

    onStatus('card.cta.replicating')

    if (!hasSession(doc)) {
      onStatus('card.cta.noSession')
      return { ok: false, error: 'noSession' }
    }

    let reused = false
    let clickedNewSession = false
    let clickResult = null
    if (isBlank(doc)) {
      reused = true
    } else {
      try {
        clickResult = await clickNew({ document: doc, window: win, isBlank })
      } catch {
        onStatus('card.cta.newSessionFailed')
        return { ok: false, error: 'newSessionFailed' }
      }
      if (!clickResult || clickResult.ok !== true) {
        onStatus('card.cta.newSessionFailed')
        return { ok: false, error: 'newSessionFailed' }
      }
      clickedNewSession = true
    }

    const sessionId = resolveAttachSessionId(io, clickResult, win)
    const payload = buildInspirationPayload(row)
    let attached = false
    let duplicate = false
    let quotaExceeded = false
    let attachResult
    try {
      attachResult = addAttachment(sessionId, payload)
    } catch {
      onStatus('card.cta.attachFailed')
      return { ok: false, error: 'attachFailed' }
    }
    if (attachResult && typeof attachResult.then === 'function') {
      try {
        attachResult = await attachResult
      } catch {
        onStatus('card.cta.attachFailed')
        return { ok: false, error: 'attachFailed' }
      }
    }

    const reason = attachResult && attachResult.reason ? String(attachResult.reason) : ''
    if (attachResult && attachResult.ok === true) {
      attached = true
    } else if (reason === 'duplicate') {
      attached = true
      duplicate = true
    } else if (reason === 'quota-exceeded') {
      quotaExceeded = true
      onStatus('card.cta.attachFull')
    } else {
      onStatus('card.cta.attachFailed')
      return { ok: false, error: 'attachFailed' }
    }

    const prompt = buildReplicationPrompt(row)
    if (quotaExceeded) {
      try { await prefill(prompt) } catch { /* ignore */ }
      return { ok: false, error: 'attachFull' }
    }

    // Reveal before prefill so a gui-hidden composer does not fail first
    // and skip dismiss. Prefill errors still leave the conversation column up.
    try { dismiss() } catch { /* ignore */ }

    let prefilled
    try {
      prefilled = await prefill(prompt)
    } catch {
      onStatus('card.cta.sendManual')
      return { ok: false, error: 'sendManual' }
    }
    if (!prefilled || prefilled.ok !== true) {
      onStatus('card.cta.sendManual')
      return { ok: false, error: 'sendManual' }
    }

    onStatus(null)
    return {
      ok: true,
      reused,
      clickedNewSession,
      attached,
      ...(duplicate ? { duplicate: true } : {}),
    }
  })
}
