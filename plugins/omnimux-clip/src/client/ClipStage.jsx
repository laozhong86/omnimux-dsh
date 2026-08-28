import { Component, useEffect, useLayoutEffect, useState, useSyncExternalStore } from 'react'
import { createPortal } from 'react-dom'
import OpenReelApp from './openreel/web/App.tsx'
import { applyOpenReelTheme } from './openreel/web/stores/theme-store.ts'
import { resetOpenReelRouter } from './openreel/web/hooks/use-router.ts'
import { useProjectStore } from './openreel/web/stores/project-store.ts'
import { injectClipStyles } from './styles.js'
import { computeHeaderPadLeft, computeStandaloneBox, readHostSidebarInset } from './stage-box.js'
import { useCanvasIngestion } from './hooks/useCanvasIngestion.ts'
import { notifyCanvasSave, notifyCanvasClose } from './CanvasBridge.js'
import { findCanvasHost } from './findCanvasHost.js'
import './openreel/web/index.css'
import './theme/dsw-map.css'

class ClipErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('[omnimux-clip] render error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24, color: 'var(--dsw-alias-label-primary, #ffffff)', background: 'var(--dsw-alias-bg-base, #111113)', height: '100%', boxSizing: 'border-box' }}>
          <h3 style={{ margin: '0 0 12px 0', fontSize: 16, color: 'var(--dsw-alias-label-danger)' }}>剪辑器加载遇到异常</h3>
          <pre style={{ fontSize: 12, padding: 12, borderRadius: 6, background: 'var(--dsw-alias-bg-mask-1)', overflow: 'auto', whiteSpace: 'pre-wrap' }}>
            {String(this.state.error?.stack || this.state.error?.message || this.state.error)}
          </pre>
          <button
            type="button"
            style={{ marginTop: 12, padding: '8px 16px', background: 'var(--dsw-alias-accent-primary)', color: 'var(--dsw-alias-on-accent, #fff)', border: 'none', borderRadius: 8, cursor: 'pointer' }}
            onClick={() => this.setState({ hasError: false, error: null })}
          >
            重试加载
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

/**
 * OmniMux Clip first-level stage page on the shell.overlay seat.
 * After first open, keep the subtree with display:none — never `if (!open) return null`.
 * Supports both standalone mode (from sidebar) and canvas mode (from workflow node).
 *
 * In canvas mode (`session.source === 'canvas'`), the editor is portaled into the
 * visible `[data-omnimux-canvas-tab]` host and laid out with `position:absolute; inset:0`.
 * It must not guess overlay coordinates or occupy the conversation column.
 *
 * @param {{
 *   t: (key: string) => string,
 *   stage: {
 *     getSnapshot: () => boolean,
 *     getSessionSnapshot: () => any,
 *     subscribe: Function,
 *     set: Function,
 *     readBox: Function
 *   },
 * }} props
 */
export function ClipStage({ t, stage }) {
  useEffect(() => {
    injectClipStyles()
    applyOpenReelTheme(true)
  }, [])

  const open = useSyncExternalStore(
    stage ? (cb) => stage.subscribe(cb) : () => () => {},
    stage ? () => stage.getSnapshot() : () => false,
  )
  const session = useSyncExternalStore(
    stage ? (cb) => stage.subscribe(cb) : () => () => {},
    stage ? () => stage.getSessionSnapshot() : () => null,
  )

  const isCanvasMode = session?.source === 'canvas'

  const [everOpened, setEverOpened] = useState(false)
  const [canvasHost, setCanvasHost] = useState(null)
  const [box, setBox] = useState(() => {
    if (typeof window !== 'undefined') {
      return {
        top: 0,
        left: 56,
        width: Math.max(320, window.innerWidth - 56),
        height: Math.max(240, window.innerHeight),
      }
    }
    return { top: 0, left: 0, width: 0, height: 0 }
  })
  const [saveStatus, setSaveStatus] = useState('')

  useEffect(() => {
    if (open) setEverOpened(true)
  }, [open])

  // Ingest upstream inputs if opened from canvas
  useCanvasIngestion(session)

  // 路由同步重置到 editor
  useEffect(() => {
    if (open && isCanvasMode) {
      try {
        resetOpenReelRouter({ route: 'editor', params: {} })
      } catch (err) {
        console.warn('[omnimux-clip] resetOpenReelRouter failed:', err)
      }
    }
  }, [open, isCanvasMode])

  useLayoutEffect(() => {
    if (!open) return undefined

    const update = () => {
      if (session?.source === 'canvas') {
        const host = findCanvasHost()
        setCanvasHost(host)
        return
      }
      setCanvasHost(null)

      const read = stage?.readBox?.()
      const usableRead = read && read.width >= 50 && read.height >= 50 ? read : null
      setBox(computeStandaloneBox(
        usableRead,
        { width: window.innerWidth, height: window.innerHeight },
        readHostSidebarInset(document),
      ))
    }

    update()

    let retryTimer = 0
    if (session?.source === 'canvas' && !findCanvasHost()) {
      let attempts = 0
      const retry = () => {
        attempts += 1
        update()
        if (!findCanvasHost() && attempts < 40) {
          retryTimer = window.setTimeout(retry, 50)
        }
      }
      retryTimer = window.setTimeout(retry, 50)
    }

    const targets = [
      document.querySelector('[data-omnimux-canvas-tab]'),
      document.querySelector('.omnimux-workflow-canvas-tab'),
      document.querySelector('[data-conversation-scroll]'),
      document.querySelector('[data-slot="conversation"]')?.parentElement,
      document.querySelector('[data-pane="sidebar"], [class*="sidebarCol"]'),
    ].filter((el) => el instanceof HTMLElement)

    const observer = typeof ResizeObserver === 'function' ? new ResizeObserver(update) : null
    for (const target of targets) {
      observer?.observe(target)
    }

    window.addEventListener('resize', update)
    return () => {
      if (retryTimer) window.clearTimeout(retryTimer)
      observer?.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [open, stage, session])

  if (!stage) return null
  if (!open && !everOpened) return null

  const handleSaveDraft = () => {
    if (session?.nodeId) {
      notifyCanvasSave({
        nodeId: session.nodeId,
        projectId: session.projectId,
      })
      setSaveStatus(t ? t('tab.savedToNode') : '已保存至节点')
      setTimeout(() => setSaveStatus(''), 2000)
    }
  }

  const handleClose = () => {
    if (isCanvasMode && session?.nodeId) {
      notifyCanvasClose({ nodeId: session.nodeId })
    }
    stage.set(false)
  }

  const isMac = typeof navigator !== 'undefined' && /Macintosh|Mac OS X/i.test(navigator.userAgent)
  const headerPadLeft = computeHeaderPadLeft({ isCanvasMode, boxLeft: box.left, isMac })
  const portalTarget = isCanvasMode ? canvasHost : null

  const stageNode = (
    <div
      role="region"
      aria-label={t ? t('tab.title') : '视频剪辑'}
      aria-hidden={open ? undefined : 'true'}
      className="omnimux-clip-stage"
      data-visible={open ? 'true' : 'false'}
      data-clip-mode={isCanvasMode ? 'canvas' : 'standalone'}
      style={isCanvasMode ? {
        display: open ? undefined : 'none',
        '--clip-header-pad-left': `${headerPadLeft}px`,
      } : {
        display: open ? undefined : 'none',
        '--stage-top': `${box.top}px`,
        '--stage-left': `${box.left}px`,
        '--stage-width': `${box.width}px`,
        '--stage-height': `${box.height}px`,
        '--clip-header-pad-left': `${headerPadLeft}px`,
      }}
    >
      <div className="omnimux-clip-stage-header">
        {!isCanvasMode ? (
          <div className="omnimux-clip-stage-heading">
            <h1 className="omnimux-clip-stage-title">
              {t ? t('tab.title') : '视频剪辑'}
            </h1>
            <span className="omnimux-clip-stage-subtitle">
              · OpenReel Studio
            </span>
          </div>
        ) : (
          <div style={{ flex: 1 }} />
        )}

        <div className="omnimux-clip-stage-actions">
          <button
            type="button"
            className="omnimux-clip-stage-icon-btn"
            title="撤销 (Cmd+Z)"
            aria-label="撤销"
            onClick={() => useProjectStore.getState().undo()}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 7v6h6" />
              <path d="M21 17a9 9 0 00-9-9 9 9 0 00-6 2.3L3 13" />
            </svg>
          </button>
          <button
            type="button"
            className="omnimux-clip-stage-icon-btn"
            title="重做 (Cmd+Shift+Z)"
            aria-label="重做"
            onClick={() => useProjectStore.getState().redo()}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 7v6h-6" />
              <path d="M3 17a9 9 0 019-9 9 9 0 016 2.3l3 2.7" />
            </svg>
          </button>
          {saveStatus ? (
            <span className="omnimux-clip-stage-save-status">{saveStatus}</span>
          ) : null}
          {isCanvasMode ? (
            <button
              type="button"
              className="omnimux-clip-stage-save-btn"
              onClick={handleSaveDraft}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <rect x="2.5" y="2.5" width="11" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round"/>
                <path d="M5.25 2.5v3.5c0 .41.34.75.75.75h4c.41 0 .75-.34.75-.75V2.5" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round"/>
                <path d="M5.25 9h5.5v4.5h-5.5V9Z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round"/>
              </svg>
              <span>{t ? t('tab.saveToNode') : '保存草稿至节点'}</span>
            </button>
          ) : null}
          <button
            type="button"
            className="omnimux-clip-stage-close-btn"
            aria-label="Close"
            onClick={handleClose}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      <div className="omnimux-clip-stage-body openreel-studio-root dark" data-theme="dark">
        <ClipErrorBoundary>
          <OpenReelApp />
        </ClipErrorBoundary>
      </div>
    </div>
  )

  if (isCanvasMode) {
    if (!portalTarget) return null
    return createPortal(stageNode, portalTarget)
  }
  return stageNode
}

export default ClipStage
