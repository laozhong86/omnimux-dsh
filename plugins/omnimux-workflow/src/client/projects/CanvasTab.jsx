/**
 * better-sidebar 画布 tab：宿主 React 18 壳里挂 CanvasBridge（React 19 island）。
 * 第三方 tab 只给 DOM 容器；双 React 树边界仍是 CanvasBridge 的硬规则。
 */
import { useCallback, useEffect, useSyncExternalStore } from 'react'
import { sessionToWorkspaceId } from '../../shared/sessionWorkspaceId.ts'
import { CanvasBridge } from '../CanvasBridge.jsx'
import { injectWorkflowStyles } from '../styles.js'
import { applyProjectCanvasRatio, getBetterSidebar } from './projectCanvas.js'
import { WorkbenchFocusBar } from './WorkbenchFocusBar.jsx'

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
  useEffect(() => { injectWorkflowStyles() }, [])
  const locale = ctx?.locale
  const activeLocale = useSyncExternalStore(
    locale ? (onStoreChange) => locale.subscribe(onStoreChange) : () => () => {},
    () => (locale ? locale.getLocale().active : 'zh'),
  )
  const sessionId = scope?.sessionId

  useEffect(() => {
    const api = typeof window !== 'undefined' ? window.__omnimuxWorkbench : undefined
    if (!api || typeof api.attachStore !== 'function' || !store) return undefined
    api.attachStore(store)
    return () => { api.detachStore?.(store) }
  }, [store])

  useEffect(() => {
    if (!visible || !sessionId) return undefined
    let cancelled = false
    let timer = 0
    let attempts = 0
    const tick = (force = false) => {
      if (cancelled) return
      // 没有 tab store.reduce 时 apply 只写盘，返回 undefined，必须继续等。
      const result = applyProjectCanvasRatio(getBetterSidebar(ctx), sessionId, store, {}, force)
      if (result === undefined && attempts < 80) {
        attempts += 1
        timer = window.setTimeout(() => tick(force), 50)
      }
    }
    tick()

    // 监听左侧侧边栏宽度变化（折叠/展开）以及窗口 resize
    let sidebarObserver = null
    try {
      const sidebarEl = typeof document !== 'undefined'
        ? document.querySelector('[data-pane="sidebar"], [class*="sidebarCol"]')
        : null
      if (sidebarEl && typeof ResizeObserver === 'function') {
        sidebarObserver = new ResizeObserver(() => {
          if (!cancelled) tick(true)
        })
        sidebarObserver.observe(sidebarEl)
      }
    } catch {
      // ignore
    }

    const onResize = () => {
      if (!cancelled) tick(true)
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', onResize)
    }

    return () => {
      cancelled = true
      window.clearTimeout(timer)
      sidebarObserver?.disconnect?.()
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', onResize)
      }
    }
  }, [visible, sessionId, store, ctx])

  // 关闭走面板自己的 × / tab 关闭，不调 layout.closeDetails。
  // 必须稳定引用：CanvasBridge 虽已不再因 onClose 卸岛，但仍走 updateCanvas。
  const onClose = useCallback(() => {}, [])

  // 每个会话 / 项目拥有专属独立的画布工作区 ID，绝不串连其他项目的画布。
  // sessionId 未就绪时禁止挂岛：否则 workspaceId=undefined，boot 会误开最新图。
  const targetWorkspaceId = sessionToWorkspaceId(sessionId)

  return (
    <div
      data-omnimux-canvas-tab=""
      className="omnimux-workflow-canvas-tab"
      data-visible={visible ? 'true' : 'false'}
    >
      <div className="omnimux-workflow-canvas-hostbar">
        <div className="omnimux-workflow-canvas-hostbar-title">{t('details.canvasTab')}</div>
        <WorkbenchFocusBar t={t} />
      </div>
      <div className="omnimux-workflow-canvas-body">
        {targetWorkspaceId ? (
          <CanvasBridge onClose={onClose} t={t} locale={activeLocale} workspaceId={targetWorkspaceId} />
        ) : (
          <div className="omnimux-workflow-canvas-status">
            {t('canvas.loading')}
          </div>
        )}
      </div>
    </div>
  )
}
