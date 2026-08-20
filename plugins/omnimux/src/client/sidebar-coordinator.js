/**
 * Single authoritative owner of the sidebar "extra rows" block under 新会话.
 *
 * The four OmniMux plugins used to each mount their own MutationObserver on
 * `document.body` (subtree) plus a second observer on the sidebar root plus a
 * 2s retry interval. Any one row's insertion mutated the sidebar root, which
 * re-fired every other plugin's root observer, which re-placed its row, which
 * mutated the root again — an unbounded cross-plugin re-placement cascade that
 * wedged the renderer on load. (Root cause: the sidebar-row mount was
 * copy-pasted into each plugin instead of shared.)
 *
 * This module is the single owner instead. It installs `window.__omnimuxSidebar`
 * at import time (same global-singleton pattern as `__omnimuxStage`) and owns
 * exactly one `document.body` subtree observer, one sidebar-root observer and
 * one retry interval. Plugins `register()` a row with a fixed `rank`; on every
 * change the coordinator runs a single idempotent `placeAll()` that walks rows
 * in rank order and re-inserts a row only when it is out of place. Because the
 * walker never mutates an already-correct tree, a placement does not re-trigger
 * its own observer, so there is no feedback loop.
 */

export const SIDEBAR_GLOBAL_KEY = '__omnimuxSidebar'
export const SIDEBAR_GLOBAL = () => (typeof window !== 'undefined' ? window[SIDEBAR_GLOBAL_KEY] : undefined)

const ROWS = []
const seen = new Set()

function sidebarRoot() {
  const column = document.querySelector('[data-pane="sidebar"], [class*="sidebarCol"]')
  if (!(column instanceof HTMLElement)) return undefined
  const logoOwner = column.querySelector('[class*="logoRow"]')?.parentElement
  return logoOwner ?? (column.firstElementChild instanceof HTMLElement ? column.firstElementChild : undefined)
}

function newSessionButton(root) {
  const nested = root.querySelector('button[class*="newSession"]')
  if (nested instanceof HTMLButtonElement) return nested
  for (const child of root.children) {
    if (child instanceof HTMLButtonElement) return child
  }
  const byAria = root.querySelector(
    'button[aria-label="新建会话"], button[aria-label="New Session"], button[aria-label*="新会话"], button[aria-label*="new session" i]',
  )
  if (byAria instanceof HTMLButtonElement) return byAria
  return [...root.querySelectorAll('button')].find((button) => /新会话|新建会话|new session/i.test(button.textContent ?? ''))
}

/** Optional external family rows (taskboard/atb/ssh) that precede our block. */
function externalAnchor(root) {
  return [...root.children].find(
    (el) => el instanceof HTMLElement && el.matches('[data-dsh-taskboard-entry], [data-dsh-atb-entry], [data-dsh-ssh-entry]'),
  )
}

function injectStyles(styleText, styleId) {
  if (!styleText) return
  if (document.getElementById(styleId)) return
  const style = document.createElement('style')
  style.id = styleId
  style.textContent = styleText
  document.head.append(style)
}

let waitObserver
let retry

function runPlaceAll() {
  const root = sidebarRoot()
  if (root === undefined) return
  const sorted = [...ROWS].sort((a, b) => a.rank - b.rank)
  let anchor = newSessionButton(root)
  if (anchor === undefined) return
  let slotExternal = true
  for (const row of sorted) {
    // External family rows (taskboard/atb/ssh) slot between the hub block
    // (ranks 1-2) and the vertical block. Rebase the anchor once, before the
    // first vertical row, so our rows land below the external rows.
    if (row.rank >= 3 && slotExternal) {
      const ext = externalAnchor(root)
      if (ext instanceof HTMLElement) anchor = ext
      slotExternal = false
    }
    const el = row.element
    if (el.parentElement === root && el.previousElementSibling === anchor) {
      anchor = el
      continue
    }
    root.insertBefore(el, anchor.nextElementSibling ?? null)
    anchor = el
  }
}

function createApi() {
  return {
    register(row) {
      const id = row.id
      if (seen.has(id)) return () => {}
      seen.add(id)
      if (row.styles) injectStyles(row.styles, row.styleId)
      const element = row.create()
      ROWS.push({ id, rank: row.rank, element })
      runPlaceAll()
      return () => {
        const i = ROWS.findIndex((r) => r.id === id)
        if (i >= 0) ROWS.splice(i, 1)
        seen.delete(id)
        element.remove()
        runPlaceAll()
      }
    },
    place: runPlaceAll,
  }
}

function install() {
  const existing = SIDEBAR_GLOBAL()
  if (existing) return existing
  const api = createApi()
  waitObserver = new MutationObserver(() => { runPlaceAll() })
  waitObserver.observe(document.body, { childList: true, subtree: true })
  retry = setInterval(() => { runPlaceAll() }, 2000)
  Object.defineProperty(window, SIDEBAR_GLOBAL_KEY, { value: api, configurable: true })
  return api
}

/** Call at module top level of the hub client (mirrors installStageGlobal). */
export function installSidebarGlobal() {
  install()
}
