/**
 * Injects a chat expand/collapse toggle button at the first position of the
 * better-sidebar toggleCluster ([data-dsh-toggle-cluster]).
 *
 * Click behavior: toggles between 'split' (chat expanded) and 'gui' (chat collapsed).
 * Visible only when the right panel is open and the active tab is an OmniMux workbench tab.
 */

import { WORKBENCH_FOCUS, activeTabId, isWorkbenchTab } from './workbench.js'

export const CHAT_TOGGLE_ATTR = 'data-omnimux-chat-toggle'
export const CHAT_TOGGLE_SELECTOR = `[${CHAT_TOGGLE_ATTR}="1"]`

const SVG_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="none" role="presentation" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
  <rect x="1.5" y="2" width="13" height="12" rx="2" stroke="currentColor" stroke-width="1.25"/>
  <path d="M6 2.5v11" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"/>
  <path d="M3.2 6.5h1.6M3.2 9.5h1.6" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
</svg>`

function hostWindow() {
  return typeof globalThis.window !== 'undefined' ? globalThis.window : undefined
}

function hostDocument() {
  return typeof globalThis.document !== 'undefined' ? globalThis.document : hostWindow()?.document
}

function getWorkbenchApi() {
  return hostWindow()?.__omnimuxWorkbench
}

function findToggleCluster(doc = hostDocument()) {
  if (!doc || typeof doc.querySelector !== 'function') return null
  return doc.querySelector('[data-dsh-toggle-cluster], [class*="toggleCluster"]')
}

export function syncChatToggleState(btn) {
  if (!btn) return
  const api = getWorkbenchApi()
  if (!api) return
  const snapshot = api.getSnapshot?.()
  const state = snapshot?.state
  const panelOpen = state?.panelOpen === true
  const activeTab = api.getActiveTab?.() || activeTabId(state)
  const isWorkbench = isWorkbenchTab(activeTab)

  // Only show if panel is open and the active tab is a registered workbench occupant
  if (!panelOpen || !isWorkbench) {
    btn.style.display = 'none'
    return
  }

  const focus = api.getFocus?.() || 'split'
  const isGui = focus === WORKBENCH_FOCUS.gui

  btn.style.display = ''
  btn.setAttribute('data-active', isGui ? 'false' : 'true')
  const label = isGui
    ? (api.t?.('workbench.chatShow') || '展开中间会话栏')
    : (api.t?.('workbench.chatHide') || '收起中间会话栏')
  btn.setAttribute('aria-label', label)
  btn.setAttribute('title', label)
}

export function createChatToggleButton(doc = hostDocument()) {
  if (!doc || typeof doc.createElement !== 'function') return null
  const btn = doc.createElement('button')
  btn.type = 'button'
  btn.setAttribute(CHAT_TOGGLE_ATTR, '1')
  btn.className = 'omnimux-chat-toggle-btn'
  btn.innerHTML = SVG_ICON

  btn.addEventListener('click', (event) => {
    event.preventDefault()
    event.stopPropagation()
    const api = getWorkbenchApi()
    if (!api) return
    const current = api.getFocus?.() || 'split'
    if (current === WORKBENCH_FOCUS.gui) {
      api.setFocus?.(WORKBENCH_FOCUS.split)
    } else {
      api.setFocus?.(WORKBENCH_FOCUS.gui)
    }
  })

  syncChatToggleState(btn)
  return btn
}

export function ensureChatToggle(doc = hostDocument()) {
  const cluster = findToggleCluster(doc)
  if (!cluster) return null
  let existing = cluster.querySelector(CHAT_TOGGLE_SELECTOR)
  if (existing) {
    if (cluster.firstChild !== existing) {
      cluster.insertBefore(existing, cluster.firstChild)
    }
    syncChatToggleState(existing)
    return existing
  }
  const btn = createChatToggleButton(doc)
  if (!btn) return null
  cluster.insertBefore(btn, cluster.firstChild)
  return btn
}

/**
 * Installs an observer on the document body to maintain the toggle button
 * in the toggle cluster across dynamic DOM updates.
 * @returns {() => void} cleanup function
 */
export function installChatToggleObserver(doc = hostDocument()) {
  if (!doc) return () => {}
  ensureChatToggle(doc)

  const api = getWorkbenchApi()
  const unsubWorkbench = api?.subscribe?.(() => {
    ensureChatToggle(doc)
  })

  let observer = null
  if (typeof MutationObserver !== 'undefined' && doc.body) {
    observer = new MutationObserver(() => {
      ensureChatToggle(doc)
    })
    observer.observe(doc.body, { childList: true, subtree: true })
  }

  return () => {
    if (typeof unsubWorkbench === 'function') unsubWorkbench()
    if (observer) observer.disconnect()
    const btn = doc.querySelector(CHAT_TOGGLE_SELECTOR)
    if (btn) btn.remove()
  }
}

export const installChatToggle = installChatToggleObserver
