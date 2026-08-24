/**
 * better-sidebar 画布 tab：宿主 React 18 壳里挂 CanvasBridge（React 19 island）。
 * 第三方 tab 只给 DOM 容器；双 React 树边界仍是 CanvasBridge 的硬规则。
 */
import { useEffect, useSyncExternalStore } from 'react'
import { CanvasBridge } from '../CanvasBridge.jsx'
import { applyProjectCanvasRatio, getBetterSidebar } from './projectCanvas.js'

/**
 * @param {{
 *   ctx: { locale?: { subscribe: Function, getLocale: Function }, betterSidebar?: object },
 *   t: (key: string) => string,
 *   visible: boolean,
 *   store?: { reduce?: Function, getSnapshot?: Function, getPrefs?: Function },
 *   scope?: { sessionId?: string },
 * }} props
 */
export function CanvasTab({ ctx, t, visible, store, scope }) {
  const locale = ctx?.locale
  const activeLocale = useSyncExternalStore(
    locale ? (onStoreChange) => locale.subscribe(onStoreChange) : () => () => {},
    () => (locale ? locale.getLocale().active : 'zh'),
  )
  const sessionId = scope?.sessionId

  useEffect(() => {
    if (!visible || !sessionId) return undefined
    let cancelled = false
    let timer = 0
    let attempts = 0
    const tick = () => {
      if (cancelled) return
      // 没有 tab store.reduce 时 apply 只写盘，返回 undefined，必须继续等。
      const result = applyProjectCanvasRatio(getBetterSidebar(ctx), sessionId, store)
      if (result === undefined && attempts < 80) {
        attempts += 1
        timer = window.setTimeout(tick, 50)
      }
    }
    tick()
    return () => {
      cancelled = true
      window.clearTimeout(timer)
    }
  }, [visible, sessionId, store, ctx])

  // 关闭走面板自己的 × / tab 关闭，不调 layout.closeDetails。
  const onClose = () => {}

  return (
    <div
      data-omnimux-canvas-tab=""
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: 0,
        overflow: 'hidden',
        visibility: visible ? 'visible' : 'hidden',
      }}
    >
      <CanvasBridge onClose={onClose} t={t} locale={activeLocale} />
    </div>
  )
}
