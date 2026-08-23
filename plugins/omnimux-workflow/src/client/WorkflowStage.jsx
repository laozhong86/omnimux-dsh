/**
 * WorkflowStage — first-level workflow canvas page on the shell.overlay seat.
 * Chrome (header + close) renders in the host React 18 tree; the canvas
 * body delegates to CanvasBridge which mounts the React 19 island.
 */
import { useLayoutEffect, useState, useSyncExternalStore } from 'react'
import { CanvasBridge } from './CanvasBridge.jsx'

const chromeButton = {
  border: '1px solid var(--dsw-alias-border, var(--dsw-border, currentColor))',
  background: 'transparent',
  color: 'inherit',
  borderRadius: 6,
  cursor: 'pointer',
  fontSize: 12,
  lineHeight: '20px',
  padding: '2px 10px',
}

/**
 * @param {{
 *   t: (key: string) => string,
 *   stage: { getSnapshot: () => boolean, subscribe: Function, set: Function },
 *   locale?: { subscribe: (fn: () => void) => () => void, getLocale: () => { active: string } },
 * }} props
 */
export function WorkflowStage({ t, stage, locale }) {
  const open = useSyncExternalStore(
    stage ? stage.subscribe : () => () => {},
    stage ? stage.getSnapshot : () => false,
  )
  // W4 T4.1：宿主语言 live 订阅（'zh'|'en'），下发给 CanvasBridge → island。
  // locale.subscribe 是 LocaleRuntime 的实例方法（内部读 this.listeners）。
  // useSyncExternalStore 会裸调 subscribe(cb)，直接传 locale.subscribe 会丢 this，
  // 炸成 Cannot read properties of undefined (reading 'listeners')，
  // 进而 shell.overlay 整页变 data-slot-error（侧栏能点、页面白/空）。
  const activeLocale = useSyncExternalStore(
    locale
      ? (onStoreChange) => locale.subscribe(onStoreChange)
      : () => () => {},
    () => (locale ? locale.getLocale().active : 'zh'),
  )
  const [box, setBox] = useState(() => ({ top: 0, left: 0, width: 0, height: 0 }))

  useLayoutEffect(() => {
    if (!open) return undefined
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
  }, [open])

  if (!open || !stage) return null

  return (
    <div
      role="region"
      aria-label={t('stage.title')}
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
        overflow: 'hidden',
      }}
    >
      <div style={{
        flex: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        minHeight: 32,
        padding: '12px 20px',
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
          {t('stage.title')}
        </h1>
        <button
          type="button"
          aria-label={t('stage.close')}
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
      <div style={{ flex: 1, minHeight: 0, position: 'relative' }}>
        <CanvasBridge onClose={() => { stage.set(false) }} t={t} locale={activeLocale} />
      </div>
    </div>
  )
}
