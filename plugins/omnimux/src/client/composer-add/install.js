import { createRoot } from 'react-dom/client'
import { createElement } from 'react'
import { ComposerAddMenu } from './ComposerAddMenu.jsx'
import { AssetPickerModal } from './AssetPickerModal.jsx'
import { getGlobalAttachmentStore } from '../attachments/store.ts'
import { inferKindFromName } from './kind.js'
import { installComposerAttachmentSubmitCapture } from './submit-inject.js'
import { ADD_BUTTON_SELECTOR, closestAddButton, findAddButton, replayOfficialAdd } from './add-button.js'

export { ADD_BUTTON_SELECTOR, closestAddButton, findAddButton, replayOfficialAdd }

const HOST_ID = 'omnimux-composer-add-host'

function interpolate(template, vars) {
  if (!vars || typeof template !== 'string') return template
  return template.replace(/\{(\w+)\}/g, (_, key) => (vars[key] == null ? '' : String(vars[key])))
}

function toast(message) {
  if (!message) return
  console.debug('[omnimux:composer-add]', message)
  if (typeof document === 'undefined') return
  const existing = document.getElementById('omnimux-composer-add-toast')
  if (existing) existing.remove()
  const node = document.createElement('div')
  node.id = 'omnimux-composer-add-toast'
  node.setAttribute('role', 'status')
  node.textContent = message
  node.style.cssText = [
    'position:fixed',
    'bottom:24px',
    'left:50%',
    'transform:translateX(-50%)',
    'z-index:90',
    'padding:8px 12px',
    'border-radius:8px',
    'background:var(--dsw-alias-bg-layer-3)',
    'color:var(--dsw-alias-label-primary)',
    'border:1px solid var(--dsw-alias-border-l2)',
    'font-size:12px',
    'pointer-events:none',
  ].join(';')
  document.body.appendChild(node)
  window.setTimeout(() => { node.remove() }, 3200)
}

function tx(t, key, vars) {
  const raw = t(key, vars)
  return interpolate(typeof raw === 'string' && raw ? raw : key, vars)
}

function currentSessionId(store) {
  const id = store.getActiveSessionId?.() || ''
  return id && id !== 'default' ? id : ''
}

function alreadyEntityIds(store, sessionId) {
  return new Set(
    store.getSnapshot(sessionId).map((row) => row.entityId).filter(Boolean),
  )
}

function applyAddResults(store, sessionId, items, t) {
  let added = 0
  let duplicate = 0
  let quota = 0
  let failed = 0
  for (const item of items) {
    if (!item || item.ok === false) {
      failed += 1
      continue
    }
    const result = store.addAttachment(sessionId, {
      sourcePlugin: 'omnimux',
      kind: item.kind || inferKindFromName(item.title, item.relativePath),
      entityId: item.entityId || item.relativePath,
      title: item.title,
      extension: item.extension,
      relativePath: item.relativePath,
      previewUrl: item.previewUrl,
      metadata: item.files ? { files: item.files } : undefined,
    })
    if (result.ok) added += 1
    else if (result.reason === 'duplicate') duplicate += 1
    else if (result.reason === 'quota-exceeded') quota += 1
    else failed += 1
  }
  const parts = []
  if (added) parts.push(tx(t, 'composerAdd.toast.added', { n: added }))
  if (duplicate) parts.push(tx(t, 'composerAdd.toast.duplicate', { n: duplicate }))
  if (quota) parts.push(tx(t, 'composerAdd.toast.quota'))
  if (failed) parts.push(tx(t, 'composerAdd.toast.failed', { n: failed }))
  if (parts.length) toast(parts.join(' · '))
  console.debug('[omnimux:composer-add]', 'add-results', { added, duplicate, quota, failed })
  return { added, duplicate, quota, failed }
}

async function requestJson(path, body) {
  const response = await fetch(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  let json = {}
  try { json = await response.json() } catch { json = {} }
  return { ok: response.ok, status: response.status, body: json }
}

/**
 * @param {Document | null} doc
 * @param {{ t: (key: string, vars?: object) => string, store?: object }} options
 */
export function installComposerAddCapture(doc = (typeof document !== 'undefined' ? document : null), options = {}) {
  if (!doc || typeof doc.addEventListener !== 'function') return () => {}
  const t = typeof options.t === 'function' ? options.t : (key) => key
  const store = options.store || getGlobalAttachmentStore()
  const host = ensureHost(doc)
  const root = createRoot(host)
  const state = {
    open: false,
    libraryOpen: false,
    anchor: null,
    fileDisabled: false,
    fileDisabledReason: '',
    bypass: false,
  }

  const render = () => {
    const sessionId = currentSessionId(store)
    root.render(createElement(
      'div',
      null,
      createElement(ComposerAddMenu, {
        open: state.open,
        anchor: state.anchor,
        t,
        canAdd: Boolean(sessionId),
        fileDisabled: state.fileDisabled,
        fileDisabledReason: state.fileDisabledReason,
        onCommand: () => {
          state.open = false
          render()
          replayOfficialAdd(doc, state)
        },
        onAddFile: () => {
          state.open = false
          render()
          void addLocalFiles(sessionId)
        },
        onAddLibrary: () => {
          state.open = false
          state.libraryOpen = true
          render()
        },
        onClose: () => {
          state.open = false
          render()
        },
      }),
      createElement(AssetPickerModal, {
        open: state.libraryOpen,
        onClose: () => { state.libraryOpen = false; render() },
        t,
        occupied: sessionId ? store.getSnapshot(sessionId).length : 0,
        alreadyIds: sessionId ? alreadyEntityIds(store, sessionId) : new Set(),
        onConfirm: async (picked) => {
          if (!sessionId) return
          const result = await requestJson('/omnimux/composer/attachments/instantiate', {
            sessionId,
            assetIds: picked.map((row) => row.id),
          })
          const rows = Array.isArray(result.body.results) ? result.body.results : []
          applyAddResults(store, sessionId, rows.map((row) => ({
            ...row,
            entityId: row.entityId || row.sourcePath,
          })), t)
          if (!result.ok && rows.length === 0) {
            toast(result.body.message || tx(t, 'composerAdd.toast.failed', { n: 1 }))
          }
          state.libraryOpen = false
          render()
        },
      }),
    ))
  }

  async function addLocalFiles(sessionId) {
    if (!sessionId) {
      toast(tx(t, 'composerAdd.needSession'))
      return
    }
    const picked = await requestJson('/omnimux/assets/pick', { kind: 'file' })
    if (picked.status === 501) {
      state.fileDisabled = true
      state.fileDisabledReason = tx(t, 'composerAdd.pickerUnsupported')
      toast(state.fileDisabledReason)
      return
    }
    const paths = Array.isArray(picked.body.paths) ? picked.body.paths.filter(Boolean) : []
    if (!picked.ok) {
      toast(picked.body.message || tx(t, 'composerAdd.toast.failed', { n: 1 }))
      return
    }
    if (paths.length === 0) return
    const materialized = await requestJson('/omnimux/composer/attachments/materialize', { sessionId, paths })
    const rows = Array.isArray(materialized.body.results) ? materialized.body.results : []
    applyAddResults(store, sessionId, rows, t)
    if (!materialized.ok && rows.length === 0) {
      toast(materialized.body.message || tx(t, 'composerAdd.toast.failed', { n: 1 }))
    }
  }

  const onClick = (event) => {
    if (state.bypass) return
    const button = closestAddButton(event.target)
    if (!button) return
    event.preventDefault()
    event.stopImmediatePropagation()
    state.anchor = typeof button.getBoundingClientRect === 'function' ? button.getBoundingClientRect() : null
    state.open = !state.open
    render()
  }

  const onPointerDown = (event) => {
    if (!state.open) return
    const target = event.target
    if (target instanceof Element && target.closest('[data-omnimux-composer-add-menu]')) return
    if (closestAddButton(target)) return
    state.open = false
    render()
  }

  const onKey = (event) => {
    if (event.key !== 'Escape') return
    if (state.open || state.libraryOpen) {
      state.open = false
      state.libraryOpen = false
      render()
    }
  }

  const observer = typeof MutationObserver === 'function'
    ? new MutationObserver(() => {
      if (state.open && !findAddButton(doc)) {
        state.open = false
        render()
      }
    })
    : null
  observer?.observe(doc.documentElement || doc.body, { childList: true, subtree: true })

  doc.addEventListener('click', onClick, { capture: true })
  doc.addEventListener('pointerdown', onPointerDown, { capture: true })
  doc.addEventListener('keydown', onKey)
  render()
  const stopSubmit = installComposerAttachmentSubmitCapture(doc, { store })

  return () => {
    doc.removeEventListener('click', onClick, { capture: true })
    doc.removeEventListener('pointerdown', onPointerDown, { capture: true })
    doc.removeEventListener('keydown', onKey)
    observer?.disconnect()
    stopSubmit()
    root.unmount()
    host.remove()
  }
}

function ensureHost(doc) {
  let host = doc.getElementById(HOST_ID)
  if (host) return host
  host = doc.createElement('div')
  host.id = HOST_ID
  doc.body.appendChild(host)
  return host
}
