import { useEffect, useState } from 'react'

const page = {
  padding: '16px 20px',
  color: 'var(--dsw-text-primary, inherit)',
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  maxWidth: 560,
}

const muted = { color: 'var(--dsw-text-secondary, inherit)', lineHeight: 1.5, margin: 0 }
const row = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }
const button = {
  padding: '6px 12px',
  border: '1px solid var(--dsw-border, currentColor)',
  background: 'transparent',
  color: 'inherit',
  borderRadius: 6,
  cursor: 'pointer',
}
const input = {
  flex: 1,
  padding: '6px 8px',
  border: '1px solid var(--dsw-border, currentColor)',
  background: 'transparent',
  color: 'inherit',
  borderRadius: 6,
}

async function pluginRequest(path, opts = {}) {
  const response = await fetch(path, {
    method: opts.method ?? 'GET',
    headers: opts.body === undefined ? undefined : { 'Content-Type': 'application/json' },
    body: opts.body === undefined ? undefined : JSON.stringify(opts.body),
  })
  let json = {}
  try {
    json = await response.json()
  } catch {
    json = { error: `HTTP ${String(response.status)}` }
  }
  return { ok: response.ok, status: response.status, body: json }
}

function desktopBridge() {
  const api = window.dshDesktop
  return api && typeof api.restartHost === 'function' ? api : undefined
}

/**
 * @param {{ t: (key: string) => string }} props
 */
export function DshPluginsSection({ t }) {
  const [spec, setSpec] = useState('')
  const [available, setAvailable] = useState(false)
  const [plugins, setPlugins] = useState([])
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [pendingRestart, setPendingRestart] = useState(false)

  const applyList = (body) => {
    setAvailable(body.available === true)
    setPlugins(Array.isArray(body.plugins) ? body.plugins : [])
  }

  const refresh = () => {
    return pluginRequest('/omnimux/plugins').then((result) => {
      applyList(result.body)
      if (!result.ok && result.body.error) setError(String(result.body.error))
    }).catch((caught) => {
      setError(caught instanceof Error ? caught.message : String(caught))
    })
  }

  useEffect(() => {
    void refresh()
  }, [])

  const run = (work) => {
    setBusy(true)
    setError('')
    return work().then((result) => {
      if (!result.ok) {
        setError(String(result.body.error || `HTTP ${String(result.status)}`))
        return false
      }
      applyList(result.body)
      setPendingRestart(true)
      return true
    }).catch((caught) => {
      setError(caught instanceof Error ? caught.message : String(caught))
      return false
    }).finally(() => {
      setBusy(false)
    })
  }

  const install = () => {
    const value = spec.trim()
    if (value === '') return
    void run(() => pluginRequest('/omnimux/plugins', { method: 'POST', body: { spec: value } }))
      .then((ok) => { if (ok) setSpec('') })
  }

  const uninstall = (name) => {
    void run(() => pluginRequest(`/omnimux/plugins/${encodeURIComponent(name)}`, { method: 'DELETE' }))
  }

  const restart = () => {
    const bridge = desktopBridge()
    if (bridge === undefined) {
      setError(t('dshPlugins.needDesktop'))
      return
    }
    setBusy(true)
    setError('')
    void bridge.restartHost().then(() => {
      setPendingRestart(false)
    }).catch((caught) => {
      setError(caught instanceof Error ? caught.message : String(caught))
    }).finally(() => {
      setBusy(false)
    })
  }

  if (!available && plugins.length === 0 && error === '') {
    return (
      <div style={page}>
        <h2 style={{ margin: 0, fontSize: 16 }}>{t('dshPlugins.title')}</h2>
        <p style={muted}>{t('dshPlugins.desktopOnly')}</p>
      </div>
    )
  }

  return (
    <div style={page}>
      <h2 style={{ margin: 0, fontSize: 16 }}>{t('dshPlugins.title')}</h2>
      <p style={muted}>{t('dshPlugins.hint')}</p>
      <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
        {plugins.map((plugin) => (
          <li key={plugin.name} style={row}>
            <span>{plugin.name}{plugin.protected ? ` (${t('dshPlugins.protected')})` : ''}</span>
            <button
              type="button"
              style={button}
              disabled={busy || plugin.protected === true}
              onClick={() => { uninstall(plugin.name) }}
            >
              {t('dshPlugins.remove')}
            </button>
          </li>
        ))}
      </ul>
      <div style={row}>
        <input
          style={input}
          value={spec}
          disabled={busy}
          placeholder={t('dshPlugins.placeholder')}
          onChange={(event) => { setSpec(event.target.value) }}
          onKeyDown={(event) => {
            if (event.key === 'Enter') install()
          }}
        />
        <button type="button" style={button} disabled={busy || spec.trim() === ''} onClick={install}>
          {t('dshPlugins.add')}
        </button>
      </div>
      {pendingRestart ? (
        <button type="button" style={button} disabled={busy} onClick={restart}>
          {t('dshPlugins.restart')}
        </button>
      ) : null}
      {error !== '' ? <p style={muted}>{error}</p> : null}
    </div>
  )
}
