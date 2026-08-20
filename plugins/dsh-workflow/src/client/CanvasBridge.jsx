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
 * (/dsh-workflow/canvas.js?v=<hash>), then mounts. The script is injected
 * at most once per hash per document.
 */
import { useCallback, useEffect, useRef, useState } from 'react'
import { fetchCanvasHash } from './api.js'

const CANVAS_GLOBAL = '__dshWorkflowCanvas'
const SCRIPT_ID = 'dsh-workflow-canvas-island'

/**
 * Inject the island script once; resolves when the global API is ready.
 * @param {string} hash
 * @returns {Promise<void>}
 */
function ensureCanvasScript(hash) {
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
      // A previous injection is still in flight: piggyback on its events.
      script.addEventListener('load', () => resolve(), { once: true })
      script.addEventListener('error', () => reject(new Error('canvas island script failed')), { once: true })
      return
    }
    script.src = `/dsh-workflow/canvas.js?v=${encodeURIComponent(hash)}`
    script.async = true
    script.addEventListener('load', () => {
      script.dataset.loaded = '1'
      resolve()
    }, { once: true })
    script.addEventListener('error', () => reject(new Error('canvas island script failed')), { once: true })
    document.head.append(script)
  })
}

/**
 * @param {{ onClose: () => void, t: (key: string) => string }} props
 */
export function CanvasBridge({ onClose, t }) {
  const containerRef = useRef(null)
  const mountedRef = useRef(false)
  const [status, setStatus] = useState('loading') // loading | ready | error

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
        api.mountCanvas(el, { onClose })
        mountedRef.current = true
        setStatus('ready')
      }
    } catch {
      setStatus('error')
    }
  }, [onClose])

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

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
      {status === 'loading' ? (
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 13, color: 'var(--dsw-alias-label-secondary, inherit)',
        }}
        >
          {t('canvas.loading')}
        </div>
      ) : null}
      {status === 'error' ? (
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 10, fontSize: 13,
          color: 'var(--dsw-alias-label-secondary, inherit)',
        }}
        >
          <span>{t('canvas.loadFailed')}</span>
          <button
            type="button"
            onClick={() => { void load() }}
            style={{
              border: '1px solid var(--dsw-alias-border, currentColor)', background: 'transparent',
              color: 'inherit', borderRadius: 6, cursor: 'pointer', fontSize: 12,
              lineHeight: '20px', padding: '2px 10px',
            }}
          >
            {t('canvas.retry')}
          </button>
        </div>
      ) : null}
    </div>
  )
}
