import { useEffect, useLayoutEffect, useState, useSyncExternalStore } from 'react'
import OpenReelApp from './openreel/web/App.tsx'
import { applyOpenReelTheme } from './openreel/web/stores/theme-store.ts'
import { injectClipStyles } from './styles.js'
import { useCanvasIngestion } from './hooks/useCanvasIngestion.ts'
import { notifyCanvasSave, notifyCanvasClose } from './CanvasBridge.js'
import './theme/dsw-map.css'
import './openreel/web/index.css'

/**
 * OmniMux Clip first-level stage page on the shell.overlay seat.
 * After first open, keep the subtree with display:none — never `if (!open) return null`.
 * Supports both standalone mode (from sidebar) and canvas mode (from workflow node).
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

  const [everOpened, setEverOpened] = useState(false)
  const [box, setBox] = useState(() => ({ top: 0, left: 0, width: 0, height: 0 }))
  const [saveStatus, setSaveStatus] = useState('')

  if (open && !everOpened) setEverOpened(true)

  // Ingest upstream inputs if opened from canvas
  useCanvasIngestion(session)

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

  const isCanvasMode = session?.source === 'canvas'

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

  return (
    <div
      role="region"
      aria-label={t ? t('tab.title') : '视频剪辑'}
      aria-hidden={open ? undefined : 'true'}
      className="omnimux-clip-stage"
      data-visible={open ? 'true' : 'false'}
      data-clip-mode={isCanvasMode ? 'canvas' : 'standalone'}
      style={{
        display: open ? undefined : 'none',
        '--stage-top': `${box.top}px`,
        '--stage-left': `${box.left}px`,
        '--stage-width': `${box.width}px`,
        '--stage-height': `${box.height}px`,
      }}
    >
      <div className="omnimux-clip-stage-header">
        <div className="omnimux-clip-stage-heading">
          <h1 className="omnimux-clip-stage-title">
            {isCanvasMode ? (session.nodeTitle || (t ? t('tab.untitled') : '画布视频合成')) : (t ? t('tab.title') : '视频剪辑')}
          </h1>
          <span className="omnimux-clip-stage-subtitle">
            {isCanvasMode ? `· ${t ? t('tab.canvasMode') : '画布联动模式'}` : '· OpenReel Studio'}
          </span>
        </div>

        <div className="omnimux-clip-stage-actions">
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
        <OpenReelApp />
      </div>
    </div>
  )
}

export default ClipStage
