import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { createClipBridge } from './ClipBridge.js'
import { CLIP_OVERLAY_CSS, CLIP_OVERLAY_STYLES_ID } from './styles.js'
import { timelineStore } from './store/useTimelineStore.js'
import { stripRuntimeUrls } from './store/timelineTypes.js'
import { exportTimeline, persistExport, CLIP_API_PREFIX } from './engine/exportEngine.js'
import { disposePreviewResources } from './engine/previewRenderer.js'
import { readClipHostBox, watchClipHostBox } from './overlayHost.js'
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
 * Supports:
 * 1. Canvas activation (bi-directional draftSchema/inputs/outputs exchange)
 * 2. URL direct access (?clip=1, ?stage=clip, #clip, #/clip/:id)
 * 3. Agent activation (custom event / bridge)
 */
export function ClipOverlay({ t, target }) {
  const [payload, setPayload] = useState(null)
  const [saveNotice, setSaveNotice] = useState('')
  const [hostBox, setHostBox] = useState(() => readClipHostBox())
  const [exportState, setExportState] = useState({
    open: false,
    progress: 0,
    status: '',
    error: '',
  })
  const abortRef = useRef(null)

  // 1. Initialize styles and listen for URL parameters/hash for standalone web access
  useEffect(() => {
    injectClipOverlayStyles()
    markClipReady(true)

    function checkUrlRoute() {
      if (typeof window === 'undefined') return
      const search = new URLSearchParams(window.location.search)
      const hash = (window.location.hash || '').toLowerCase()
      const isClipSearch = search.has('clip') || search.get('stage') === 'clip'
      const isClipHash = hash === '#clip' || hash.startsWith('#/clip') || hash.startsWith('#clip=')

      if (isClipSearch || isClipHash) {
        const rawProj = search.get('project') || search.get('projectId') || (hash.startsWith('#/clip/') ? hash.slice(7) : '')
        const projectId = rawProj.trim() || `clip_standalone_${Date.now()}`
        
        // Fetch existing project from Host or init fresh
        fetch(`${CLIP_API_PREFIX}/projects/${encodeURIComponent(projectId)}`)
          .then((r) => (r.ok ? r.json() : null))
          .then((data) => {
            const openPayload = {
              source: 'url',
              projectId,
              nodeTitle: data?.schema?.projectId || projectId,
              draftSchema: data?.schema,
            }
            timelineStore.hydrateFromPayload(openPayload)
            setPayload(openPayload)
          })
          .catch(() => {
            const openPayload = {
              source: 'url',
              projectId,
              nodeTitle: projectId,
            }
            timelineStore.hydrateFromPayload(openPayload)
            setPayload(openPayload)
          })
      }
    }

    checkUrlRoute()
    window.addEventListener('hashchange', checkUrlRoute)

    return () => {
      markClipReady(false)
      disposePreviewResources()
      abortRef.current?.abort()
      timelineStore.reset()
      window.removeEventListener('hashchange', checkUrlRoute)
    }
  }, [])

  // 2. Listen for CustomEvent / Bridge activations from Canvas or Agent
  useEffect(() => {
    const bridge = createClipBridge({
      target,
      onOpen: (next) => {
        timelineStore.hydrateFromPayload(next)
        setPayload(next)
      },
      onReload: (data) => {
        const state = timelineStore.getState()
        if (data?.projectId && data.projectId !== state.schema.projectId) return
        fetch(`${CLIP_API_PREFIX}/projects/${encodeURIComponent(state.schema.projectId)}`)
          .then((r) => (r.ok ? r.json() : null))
          .then((fresh) => {
            if (fresh?.schema) {
              timelineStore.hydrateFromPayload({
                ...payload,
                draftSchema: fresh.schema,
              })
              setSaveNotice('已从后台同步最新时间轴')
              setTimeout(() => setSaveNotice(''), 2500)
            }
          })
          .catch(() => {})
      },
    })
    return () => { bridge.dispose() }
  }, [payload, target])

  useLayoutEffect(() => {
    if (!payload) return undefined
    return watchClipHostBox(setHostBox)
  }, [payload])

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
  const source = payload.source || 'canvas'

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

  async function handleSave() {
    const state = timelineStore.getState()
    const saveObj = currentSavePayload()

    if (source === 'canvas') {
      // In canvas mode, save and return to workflow canvas
      const bridge = createClipBridge({ target })
      bridge.save(saveObj)
      bridge.dispose()
      disposePreviewResources()
      timelineStore.reset()
      setPayload(null)
    } else {
      // In standalone/URL/agent mode, persist to Host and keep GUI open
      try {
        await fetch(`${CLIP_API_PREFIX}/projects/${encodeURIComponent(state.schema.projectId)}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ schema: saveObj.schema }),
        })
        setSaveNotice('已保存')
        setTimeout(() => setSaveNotice(''), 2500)
      } catch {
        setSaveNotice('保存失败')
        setTimeout(() => setSaveNotice(''), 2500)
      }
    }
  }

  function handleSwitchProject(newProjectId) {
    if (!newProjectId) return
    fetch(`${CLIP_API_PREFIX}/projects/${encodeURIComponent(newProjectId)}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        const nextPayload = {
          source,
          projectId: newProjectId,
          nodeTitle: data?.schema?.projectId || newProjectId,
          draftSchema: data?.schema,
        }
        timelineStore.hydrateFromPayload(nextPayload)
        setPayload(nextPayload)
        setSaveNotice('已切换工程')
        setTimeout(() => setSaveNotice(''), 2000)
      })
      .catch(() => {})
  }

  function handleNewProject() {
    const newProjectId = `clip_standalone_${Date.now()}`
    const nextPayload = {
      source,
      projectId: newProjectId,
      nodeTitle: '未命名工程',
    }
    timelineStore.hydrateFromPayload(nextPayload)
    setPayload(nextPayload)
    setSaveNotice('已创建新工程')
    setTimeout(() => setSaveNotice(''), 2000)
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

      if (source === 'canvas') {
        disposePreviewResources()
        timelineStore.reset()
        setPayload(null)
      } else {
        setSaveNotice('成片已导出至本地')
        setTimeout(() => setSaveNotice(''), 3000)
      }
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

  const overlay = (
    <div
      className="omnimux-clip-overlay omnimux-clip-overlay--editor"
      role="dialog"
      aria-modal="true"
      aria-label={label('overlay.title', 'AI 剪辑工坊')}
      data-plugin="omnimux-clip"
      data-stage="clip-editor"
      style={{
        '--clip-overlay-top': `${hostBox.top}px`,
        '--clip-overlay-left': `${hostBox.left}px`,
        '--clip-overlay-width': `${hostBox.width}px`,
        '--clip-overlay-height': `${hostBox.height}px`,
      }}
    >
      <TopHeader
        source={source}
        onSave={handleSave}
        onClose={handleClose}
        onExport={handleExport}
        onSwitchProject={handleSwitchProject}
        onNewProject={handleNewProject}
        saveNotice={saveNotice}
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

  if (typeof document === 'undefined') return overlay
  return createPortal(overlay, document.body)
}

function captureThumbnailFallback() {
  const canvas = document.querySelector('.omx-clip-preview__canvas')
  if (!canvas) return ''
  try {
    return canvas.toDataURL('image/jpeg', 0.7)
  } catch {
    return ''
  }
}
