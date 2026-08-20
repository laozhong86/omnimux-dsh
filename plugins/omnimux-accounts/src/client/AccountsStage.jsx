import { useEffect, useLayoutEffect, useState } from 'react'
import { AccountsSection } from './AccountsSection.jsx'

// The app-open event name is owned by the hub plugin. The stage primitives
// (claim/release/readBox/event) come from the hub's `product-stage` client
// seam, so this app package ships no copy.
const APP_OPEN_EVENT = 'omnimux-app-open'
const CATALOG_ID = 'accounts'
const STAGE_ID = 'omnimux-app-accounts'

/**
 * Standalone Accounts app page. The hub Apps card dispatches
 * `omnimux-app-open` with detail.id 'accounts'; this stage claims the
 * product stage (mutual exclusion with Apps / 任务看板 / expert pages) and
 * renders over the conversation column.
 * @param {{ t: (key: string) => string, stage: { claim: (id: string) => void, release: (id: string) => void, PRODUCT_STAGE_EVENT: string, readBox: () => { top: number, left: number, width: number, height: number } } }} props
 */
export function AccountsStage({ t, stage }) {
  const [open, setOpen] = useState(false)
  const [box, setBox] = useState(() => stage.readBox())

  useEffect(() => {
    const onOpenRequest = (event) => {
      const id = event instanceof CustomEvent ? event.detail?.id : undefined
      if (id !== CATALOG_ID) return
      setOpen(true)
      stage.claim(STAGE_ID)
    }
    const onStageChange = (event) => {
      const id = event instanceof CustomEvent ? event.detail?.id : undefined
      if (id === STAGE_ID) return
      setOpen((current) => {
        if (current) stage.release(STAGE_ID)
        return false
      })
    }
    window.addEventListener(APP_OPEN_EVENT, onOpenRequest)
    window.addEventListener(stage.PRODUCT_STAGE_EVENT, onStageChange)
    return () => {
      window.removeEventListener(APP_OPEN_EVENT, onOpenRequest)
      window.removeEventListener(stage.PRODUCT_STAGE_EVENT, onStageChange)
      stage.release(STAGE_ID)
    }
  }, [])

  useLayoutEffect(() => {
    if (!open) return undefined
    const update = () => { setBox(stage.readBox()) }
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
            stage.release(STAGE_ID)
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
