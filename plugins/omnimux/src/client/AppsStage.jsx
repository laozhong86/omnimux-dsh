import { useEffect, useLayoutEffect, useRef, useState, useSyncExternalStore } from 'react'
import { IconCloseOutline16 } from '@deepseek-ai/dsh-client-ui-primitives'
import { readConversationBox } from './conversation-box.js'
import { PluginsSection } from './PluginsSection.jsx'

export { readConversationBox } from './conversation-box.js'

/**
 * @param {{
 *   t: (key: string) => string,
 *   apps: { getSnapshot: () => boolean, subscribe: Function, set: Function },
 *   useSessions?: (select: (state: { current?: string }) => unknown) => unknown,
 * }} props
 */
export function AppsStage({ t, apps, useSessions }) {
  const open = useSyncExternalStore(
    apps ? apps.subscribe : () => () => {},
    apps ? apps.getSnapshot : () => false,
  )
  const readSessions = useSessions ?? ((select) => select({}))
  const currentSession = readSessions((state) => state.current)
  const lastSession = useRef(currentSession)
  const [box, setBox] = useState(() => readConversationBox())

  useLayoutEffect(() => {
    if (!open) return undefined
    const update = () => { setBox(readConversationBox()) }
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
  }, [open])

  useEffect(() => {
    if (open && lastSession.current !== currentSession) apps?.set(false)
    lastSession.current = currentSession
  }, [apps, currentSession, open])

  useEffect(() => {
    if (!open || !apps) return undefined
    const header = document.querySelector('[data-slot="conversation.session.header"]')
    if (!(header instanceof HTMLElement)) return undefined
    const onPointerDown = () => { apps.set(false) }
    header.addEventListener('pointerdown', onPointerDown)
    return () => { header.removeEventListener('pointerdown', onPointerDown) }
  }, [apps, open])

  if (!open || !apps) return null

  return (
    <div
      role="region"
      aria-label={t('plugins.title')}
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
          {t('plugins.title')}
        </h1>
        <button
          type="button"
          aria-label={t('plugins.close')}
          onClick={() => { apps.set(false) }}
          style={{
            WebkitAppRegion: 'no-drag',
            border: 'none',
            background: 'transparent',
            color: 'inherit',
            cursor: 'pointer',
            padding: 4,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.75,
          }}
        >
          <IconCloseOutline16 size={16} />
        </button>
      </div>
      <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
        <PluginsSection t={t} />
      </div>
    </div>
  )
}
