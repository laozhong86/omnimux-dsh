import { useLayoutEffect, useState, useSyncExternalStore } from 'react'
import { InspirationSection } from './InspirationSection.jsx'

/**
 * After the first open the subtree stays mounted and is hidden with
 * `display:none` so filters / list survive a close.
 * @param {{ t: (key: string) => string, stage: { getSnapshot: () => boolean, subscribe: Function, set: Function, readBox: () => { top: number, left: number, width: number, height: number } } }} props
 */
export function InspirationStage({ t, stage }) {
  const open = useSyncExternalStore(
    stage ? stage.subscribe : () => () => {},
    stage ? stage.getSnapshot : () => false,
  )
  const [everOpened, setEverOpened] = useState(false)
  const [box, setBox] = useState(() => (stage ? stage.readBox() : { top: 0, left: 0, width: 0, height: 0 }))

  if (open && !everOpened) setEverOpened(true)

  useLayoutEffect(() => {
    if (!open || !stage) return undefined
    const update = () => { setBox(stage.readBox()) }
    update()
    const scroll = document.querySelector('[data-conversation-scroll]')
    const target = scroll instanceof HTMLElement
      ? scroll
      : document.querySelector('[data-slot="conversation"]')?.parentElement
    const observer = typeof ResizeObserver === 'function' && target ? new ResizeObserver(update) : null
    if (target && observer) observer.observe(target)
    window.addEventListener('resize', update)
    return () => {
      observer?.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [open, stage])

  if (!stage || !everOpened) return null

  return (
    <div
      role="region"
      aria-label={t('title')}
      aria-hidden={open ? undefined : 'true'}
      style={{
        position: 'fixed',
        top: box.top,
        left: box.left,
        width: box.width,
        height: box.height,
        zIndex: 200,
        pointerEvents: open ? 'auto' : 'none',
        display: open ? 'flex' : 'none',
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
          onClick={() => { stage.set(false) }}
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
        <InspirationSection t={t} active={open} />
      </div>
    </div>
  )
}
