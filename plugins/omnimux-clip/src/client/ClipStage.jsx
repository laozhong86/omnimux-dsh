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
      setSaveStatus('已保存至节点')
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
            {isCanvasMode ? (session.nodeTitle || '画布视频合成') : (t ? t('tab.title') : '视频剪辑')}
          </h1>
          <span className="omnimux-clip-stage-subtitle">
            {isCanvasMode ? '· 画布联动模式' : '· OpenReel Studio'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {saveStatus ? (
            <span className="text-xs text-emerald-400 font-medium px-2">{saveStatus}</span>
          ) : null}
          {isCanvasMode ? (
            <button
              type="button"
              className="px-3 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border"
              onClick={handleSaveDraft}
            >
              💾 保存草稿至节点
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
