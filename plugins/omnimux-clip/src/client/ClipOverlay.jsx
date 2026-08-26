import { useEffect, useRef, useState } from 'react'
import { createClipBridge } from './ClipBridge.js'
import { CLIP_OVERLAY_CSS, CLIP_OVERLAY_STYLES_ID } from './styles.js'
import { timelineStore } from './store/useTimelineStore.js'
import { stripRuntimeUrls } from './store/timelineTypes.js'
import { exportTimeline, persistExport } from './engine/exportEngine.js'
import { disposePreviewResources } from './engine/previewRenderer.js'
import { TopHeader } from './components/TopHeader.jsx'
import { LeftSidebar } from './components/LeftSidebar.jsx'
import { CenterStage } from './components/CenterStage.jsx'
import { RightInspector } from './components/RightInspector.jsx'
import { BottomTimeline } from './components/BottomTimeline.jsx'
import { ExportModal } from './components/ExportModal.jsx'

/**
 * Insert overlay stylesheet once. Safe in non-DOM environments.
 */
export function injectClipOverlayStyles() {
  if (typeof document === 'undefined') return
  if (document.getElementById(CLIP_OVERLAY_STYLES_ID)) return
  const style = document.createElement('style')
  style.id = CLIP_OVERLAY_STYLES_ID
  style.textContent = CLIP_OVERLAY_CSS
  document.head.appendChild(style)
}

function markClipReady(ready) {
  if (typeof window === 'undefined') return
  window.__omnimuxClipReady = ready
}

/**
 * Full-screen clip editor overlay.
 *
 * Spec exemption: dedicated NLE workbench, not a 4-layer first-level page.
 * Close MUST unmount so WebCodecs / Canvas / object URLs can be released.
 */
export function ClipOverlay({ t, target }) {
  const [payload, setPayload] = useState(null)
  const [exportState, setExportState] = useState({
    open: false,
    progress: 0,
    status: '',
    error: '',
  })
  const abortRef = useRef(null)

  useEffect(() => {
    injectClipOverlayStyles()
    markClipReady(true)
    return () => {
      markClipReady(false)
      disposePreviewResources()
      abortRef.current?.abort()
      timelineStore.reset()
    }
  }, [])

  useEffect(() => {
    const bridge = createClipBridge({
      target,
      onOpen: (next) => {
        timelineStore.hydrateFromPayload(next)
        setPayload(next)
      },
    })
    return () => { bridge.dispose() }
  }, [target])

  if (!payload) return null

  const label = (key, fallback) => {
    if (typeof t === 'function') {
      try {
        const value = t(key)
        if (value && value !== key) return value
      } catch { /* fall through */ }
    }
    return fallback
  }

  const nodeId = typeof payload.nodeId === 'string' ? payload.nodeId : undefined

  function currentSavePayload(extra = {}) {
    const state = timelineStore.getState()
    return {
      nodeId,
      projectId: state.schema.projectId,
      schema: stripRuntimeUrls(state.schema),
      ...extra,
    }
  }

  function handleClose() {
    abortRef.current?.abort()
    const bridge = createClipBridge({ target })
    bridge.close({ nodeId })
    bridge.dispose()
    disposePreviewResources()
    timelineStore.reset()
    setPayload(null)
  }

  function handleSave() {
    const bridge = createClipBridge({ target })
    bridge.save(currentSavePayload())
    bridge.dispose()
    disposePreviewResources()
    timelineStore.reset()
    setPayload(null)
  }

  async function handleExport() {
    const state = timelineStore.getState()
    const controller = new AbortController()
    abortRef.current = controller
    setExportState({ open: true, progress: 0.02, status: '正在配置编码器…', error: '' })
    const bridge = createClipBridge({ target })
    bridge.progress({ nodeId, status: 'rendering', renderProgress: 0 })
    try {
      const result = await exportTimeline(state.schema, {
        signal: controller.signal,
        onProgress: (info) => {
          setExportState({
            open: true,
            progress: info.ratio,
            status: `编码帧 ${info.frame}/${info.frameCount}`,
            error: '',
          })
          bridge.progress({
            nodeId,
            status: 'rendering',
            renderProgress: Math.round(info.ratio * 100),
          })
        },
      })
      setExportState({ open: true, progress: 0.96, status: '正在写入磁盘…', error: '' })
      const persisted = await persistExport(state.schema.projectId, result, { schema: state.schema })
      const thumbnail = result.thumbnail || captureThumbnailFallback()
      bridge.save(currentSavePayload({
        output: {
          videoPath: persisted.path,
          thumbnailPath: thumbnail,
          durationMs: result.durationMs,
          width: result.width,
          height: result.height,
        },
      }))
      bridge.progress({ nodeId, status: 'completed', renderProgress: 100 })
      bridge.dispose()
      setExportState({ open: false, progress: 1, status: '完成', error: '' })
      disposePreviewResources()
      timelineStore.reset()
      setPayload(null)
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      if (message === 'canceled') {
        bridge.progress({ nodeId, status: 'editing', renderProgress: 0 })
        bridge.dispose()
        setExportState({ open: false, progress: 0, status: '', error: '' })
        return
      }
      bridge.progress({ nodeId, status: 'error', renderProgress: 0 })
      bridge.dispose()
      setExportState({
        open: true,
        progress: 0,
        status: '',
        error: message || label('export.failed', '导出失败'),
      })
    }
  }

  function handleCancelExport() {
    abortRef.current?.abort()
  }

  return (
    <div
      className="omnimux-clip-overlay omnimux-clip-overlay--editor"
      role="dialog"
      aria-modal="true"
      aria-label={label('overlay.title', 'AI 剪辑工坊')}
      data-plugin="omnimux-clip"
      data-stage="clip-editor"
    >
      <TopHeader
        onSave={handleSave}
        onClose={handleClose}
        onExport={handleExport}
        exporting={exportState.open && !exportState.error}
      />
      <div className="omx-clip-workbench">
        <LeftSidebar />
        <CenterStage />
        <RightInspector />
      </div>
      <BottomTimeline />
      <ExportModal
        open={exportState.open}
        progress={exportState.progress}
        status={exportState.status}
        error={exportState.error}
        onCancel={handleCancelExport}
        onClose={() => setExportState({ open: false, progress: 0, status: '', error: '' })}
      />
    </div>
  )
}

function captureThumbnailFallback() {
  const canvas = document.querySelector('.omx-clip-stage__canvas')
  if (!canvas) return ''
  try {
    return canvas.toDataURL('image/jpeg', 0.7)
  } catch {
    return ''
  }
}
