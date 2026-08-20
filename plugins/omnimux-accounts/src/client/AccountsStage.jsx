import { useEffect, useLayoutEffect, useState } from 'react'
import { AccountsSection } from './AccountsSection.jsx'

// Event names are owned by the hub plugin
// (plugins/omnimux/src/client/open-app.js and conversation-box.js). This
// app package must not import hub internals (AGENTS.md package imports), so
// the literals are duplicated here on purpose and must stay in sync.
const APP_OPEN_EVENT = 'omnimux-app-open'
const PRODUCT_STAGE_EVENT = 'dsh-product-stage'
const CATALOG_ID = 'accounts'
const STAGE_ID = 'omnimux-app-accounts'

/**
 * Same stage-claim protocol as the hub's conversation-box.js. Local copy:
 * the app must not import the hub, and the protocol is two DOM operations.
 * @param {string} id
 */
function claimProductStage(id) {
  window.dispatchEvent(new CustomEvent(PRODUCT_STAGE_EVENT, { detail: { id } }))
  document.documentElement.dataset.dshProductStage = id
}

/**
 * @param {string} id
 */
function releaseProductStage(id) {
  if (document.documentElement.dataset.dshProductStage === id) {
    delete document.documentElement.dataset.dshProductStage
  }
}

/**
 * @param {unknown} node
 * @returns {{ top: number, left: number, width: number, height: number } | null}
 */
function sizableBox(node) {
  if (!node || typeof node.getBoundingClientRect !== 'function') return null
  const rect = node.getBoundingClientRect()
  if (rect.width >= 8 && rect.height >= 8) {
    return { top: rect.top, left: rect.left, width: rect.width, height: rect.height }
  }
  return null
}

/**
 * Cover the whole conversation column (header + body + composer).
 * Minimal local copy of the hub's readConversationBox
 * (plugins/omnimux/src/client/conversation-box.js); first-level product
 * pages are not session views. Duplicated, not imported.
 * @returns {{ top: number, left: number, width: number, height: number }}
 */
export function readStageBox() {
  let node = document.querySelector('[data-slot="conversation"]')
  while (node) {
    const box = sizableBox(node)
    if (box) return box
    node = node.parentElement
  }
  const preferred = sizableBox(document.querySelector('[data-conversation-scroll]'))
  if (preferred) return preferred
  const left = 56
  return { top: 0, left, width: Math.max(8, window.innerWidth - left), height: Math.max(8, window.innerHeight) }
}

/**
 * Standalone Accounts app page. The hub Apps card dispatches
 * `omnimux-app-open` with detail.id 'accounts'; this stage claims the
 * product stage (mutual exclusion with Apps / 任务看板 / expert pages) and
 * renders over the conversation column.
 * @param {{ t: (key: string) => string }} props
 */
export function AccountsStage({ t }) {
  const [open, setOpen] = useState(false)
  const [box, setBox] = useState(() => readStageBox())

  useEffect(() => {
    const onOpenRequest = (event) => {
      const id = event instanceof CustomEvent ? event.detail?.id : undefined
      if (id !== CATALOG_ID) return
      setOpen(true)
      claimProductStage(STAGE_ID)
    }
    const onStageChange = (event) => {
      const id = event instanceof CustomEvent ? event.detail?.id : undefined
      if (id === STAGE_ID) return
      setOpen((current) => {
        if (current) releaseProductStage(STAGE_ID)
        return false
      })
    }
    window.addEventListener(APP_OPEN_EVENT, onOpenRequest)
    window.addEventListener(PRODUCT_STAGE_EVENT, onStageChange)
    return () => {
      window.removeEventListener(APP_OPEN_EVENT, onOpenRequest)
      window.removeEventListener(PRODUCT_STAGE_EVENT, onStageChange)
      releaseProductStage(STAGE_ID)
    }
  }, [])

  useLayoutEffect(() => {
    if (!open) return undefined
    const update = () => { setBox(readStageBox()) }
    update()
    window.addEventListener('resize', update)
    return () => { window.removeEventListener('resize', update) }
  }, [open])

  if (!open) return null

  return (
    <div
      role="region"
      aria-label={t('title')}
      style={{
        position: 'fixed',
        top: box.top,
        left: box.left,
        width: box.width,
        height: box.height,
        zIndex: 200,
        pointerEvents: 'auto',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--dsw-alias-bg-primary, var(--dsw-bg, #111))',
        color: 'var(--dsw-alias-label-primary, inherit)',
        overflow: 'auto',
      }}
    >
      <div style={{
        flex: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        minHeight: 32,
        padding: '12px 20px 12px',
        WebkitAppRegion: 'no-drag',
      }}
      >
        <h1 style={{
          margin: 0,
          flex: 1,
          minWidth: 0,
          fontSize: 16,
          fontWeight: 600,
          lineHeight: '32px',
        }}
        >
          {t('title')}
        </h1>
        <button
          type="button"
          aria-label={t('close')}
          onClick={() => {
            releaseProductStage(STAGE_ID)
            setOpen(false)
          }}
          style={{
            WebkitAppRegion: 'no-drag',
            border: 'none',
            background: 'transparent',
            color: 'inherit',
            cursor: 'pointer',
            fontSize: 20,
            lineHeight: 1,
            padding: 4,
          }}
        >
          ×
        </button>
      </div>
      <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
        <AccountsSection t={t} />
      </div>
    </div>
  )
}
