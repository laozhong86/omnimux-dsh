/**
 * CanvasBridge — host React 18 shell that mounts the React 19 canvas island.
 *
 * ★ HARD RULE (docs/ARCHITECTURE.md): the two React trees NEVER exchange
 * React elements, refs, context, or component types. This bridge passes
 * ONLY a DOM container + plain-data props + plain callbacks to the island's
 * mountCanvas(el, props) API. The island bundles its own React 19.2.8 and
 * creates its own root — dual-React coexistence in one document is safe
 * because hooks/fiber/dispatcher state is module-private per React copy.
 *
 * Loading: the island bundle is lazy — first open fetches the build
 * manifest (canvas.js content hash), injects one <script> tag
 * (/omnimux-workflow/canvas.js?v=<hash>), then mounts. The script is
 * injected at most once per hash per document.
 */
import { useCallback, useEffect, useRef, useState } from 'react'
import { Button } from 'dsh-ui-kit'
import { fetchCanvasHash } from './api.js'
import { injectWorkflowStyles } from './styles.js'

const CANVAS_GLOBAL = '__omnimuxWorkflowCanvas'
const SCRIPT_ID = 'omnimux-workflow-canvas-island'

/**
 * Inject the island script once; resolves when the global API is ready.
 * @param {string} hash
 * @returns {Promise<void>}
 */
function ensureCanvasScript(hash) {
  if (typeof window !== 'undefined' && window[CANVAS_GLOBAL] && typeof window[CANVAS_GLOBAL].mountCanvas === 'function') {
    return Promise.resolve()
  }
  const existing = document.getElementById(SCRIPT_ID)
  if (existing instanceof HTMLScriptElement && existing.dataset.loaded === '1') {
    return Promise.resolve()
  }
  return new Promise((resolve, reject) => {
    let script = existing
    if (!(script instanceof HTMLScriptElement)) {
      script = document.createElement('script')
      script.id = SCRIPT_ID
    } else {
      if (script.dataset.loaded === 'error') {
        script.remove()
        script = document.createElement('script')
        script.id = SCRIPT_ID
      } else {
        // A previous injection is still in flight: piggyback on its events.
        script.addEventListener('load', () => resolve(), { once: true })
        script.addEventListener('error', () => reject(new Error('canvas island script failed')), { once: true })
        return
      }
    }
    script.src = `/omnimux-workflow/canvas.js?v=${encodeURIComponent(hash)}`
    script.async = true
    script.addEventListener('load', () => {
      script.dataset.loaded = '1'
      resolve()
    }, { once: true })
    script.addEventListener('error', () => {
      script.dataset.loaded = 'error'
      reject(new Error('canvas island script failed'))
    }, { once: true })
    document.head.append(script)
  })
}

/**
 * @param {{ onClose: () => void, t: (key: string) => string, locale?: string, workspaceId?: string }} props
 */
export function CanvasBridge({ onClose, t, locale, workspaceId }) {
  useEffect(() => { injectWorkflowStyles() }, [])
  const containerRef = useRef(null)
  const mountedRef = useRef(false)
  const [status, setStatus] = useState('loading') // loading | ready | error
  // 最新 props 快照：load 完成挂载与 locale/onClose/workspaceId live 切换共用（island
  // 边界纯数据 + 回调，一律走 mountCanvas/updateCanvas，禁止因回调换引用卸岛）。
  const propsRef = useRef({ onClose, locale, workspaceId })
  propsRef.current = { onClose, locale, workspaceId }

  // mount 只跑一次。onClose / locale 身份变化不得重跑 load，否则宿主每次
  // 重渲（点选节点、侧栏同步）都会 unmount→mount，岛闪白、选中丢、拖不动。
  const load = useCallback(async () => {
    setStatus('loading')
    try {
      const hash = (await fetchCanvasHash()) ?? String(Date.now())
      await ensureCanvasScript(hash)
      const api = window[CANVAS_GLOBAL]
      if (!api || typeof api.mountCanvas !== 'function') {
        throw new Error('canvas island global missing')
      }
      const el = containerRef.current
      if (el && !mountedRef.current) {
        api.mountCanvas(el, propsRef.current)
        mountedRef.current = true
        setStatus('ready')
      }
    } catch {
      setStatus('error')
    }
  }, [])

  useEffect(() => {
    void load()
    return () => {
      const api = window[CANVAS_GLOBAL]
      const el = containerRef.current
      if (api && typeof api.unmountCanvas === 'function' && el && mountedRef.current) {
        api.unmountCanvas(el)
      }
      mountedRef.current = false
    }
  }, [load])

  // W4 T4.1：宿主切语言 / 关闭回调换人 / 切换会话与画布 → island updateCanvas 同 root 重 render
  // （不可 unmount/remount，会丢画布状态）。
  useEffect(() => {
    const api = window[CANVAS_GLOBAL]
    const el = containerRef.current
    if (mountedRef.current && el && api && typeof api.updateCanvas === 'function') {
      api.updateCanvas(el, propsRef.current)
    }
  }, [locale, onClose, workspaceId])

  return (
    <div className="omnimux-workflow-canvas-host">
      <div ref={containerRef} className="omnimux-workflow-canvas-root" />
      {status === 'loading' ? (
        <div className="omnimux-workflow-canvas-status">
          {t('canvas.loading')}
        </div>
      ) : null}
      {status === 'error' ? (
        <div className="omnimux-workflow-canvas-status">
          <span>{t('canvas.loadFailed')}</span>
          <Button variant="outline" size="sm" onClick={() => { void load() }}>
            {t('canvas.retry')}
          </Button>
        </div>
      ) : null}
    </div>
  )
}
