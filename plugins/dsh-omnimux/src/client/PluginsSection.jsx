import { useEffect, useState } from 'react'
import { getApps, installApp } from './api.js'

const page = {
  padding: '16px 20px',
  color: 'var(--dsw-text-primary, inherit)',
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  maxWidth: 520,
}

const muted = { color: 'var(--dsw-text-secondary, inherit)', lineHeight: 1.5, margin: 0 }
const row = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: 12,
  padding: '10px 0',
  borderBottom: '1px solid var(--dsw-border, currentColor)',
}
const button = {
  padding: '6px 12px',
  border: '1px solid var(--dsw-border, currentColor)',
  background: 'transparent',
  color: 'inherit',
  borderRadius: 6,
  cursor: 'pointer',
  flexShrink: 0,
}

function desktopBridge() {
  const api = window.dshDesktop
  return api && typeof api.restartHost === 'function' ? api : undefined
}

/**
 * @param {{ t: (key: string) => string }} props
 */
export function PluginsSection({ t }) {
  const [view, setView] = useState(null)
  const [busy, setBusy] = useState('')
  const [error, setError] = useState('')
  const [pendingRestart, setPendingRestart] = useState(false)

  const applyView = (body) => {
    setView(body && typeof body === 'object' ? body : null)
    if (body && typeof body.error === 'string' && body.error) setError(body.error)
  }

  const refresh = () => {
    return getApps().then((result) => {
      if (!result.ok) {
        setError(String(result.body.error || `HTTP ${String(result.status)}`))
        return
      }
      setError(typeof result.body.error === 'string' ? result.body.error : '')
      applyView(result.body)
    }).catch((caught) => {
      setError(caught instanceof Error ? caught.message : String(caught))
    })
  }

  useEffect(() => {
    void refresh()
  }, [])

  const install = (spec) => {
    if (!spec) return
    setBusy(spec)
    setError('')
    void installApp(spec).then((result) => {
      if (!result.ok) {
        setError(String(result.body.error || `HTTP ${String(result.status)}`))
        return
      }
      setPendingRestart(true)
      return refresh()
    }).catch((caught) => {
      setError(caught instanceof Error ? caught.message : String(caught))
    }).finally(() => {
      setBusy('')
    })
  }

  const restart = () => {
    const bridge = desktopBridge()
    if (bridge === undefined) {
      setError(t('dshPlugins.needDesktop'))
      return
    }
    setBusy('restart')
    setError('')
    void bridge.restartHost().then(() => {
      setPendingRestart(false)
    }).catch((caught) => {
      setError(caught instanceof Error ? caught.message : String(caught))
    }).finally(() => {
      setBusy('')
    })
  }

  const apps = Array.isArray(view?.apps) ? view.apps : []
  const softError = typeof view?.error === 'string' ? view.error : ''

  return (
    <div style={page}>
      {view == null && error === '' ? <p style={muted}>{t('profile.loading')}</p> : null}
      {apps.length === 0 && view != null ? <p style={muted}>{t('plugins.empty')}</p> : null}
      {apps.map((app) => {
        const spec = typeof app.install_spec === 'string' ? app.install_spec : ''
        const action = app.state === 'update' ? 'update' : app.state === 'available' ? 'install' : ''
        return (
          <div key={String(app.id)} style={row}>
            <div>
              <div>{app.title}</div>
              <p style={{ ...muted, marginTop: 4 }}>{app.summary}</p>
              {app.state === 'installed' ? <p style={muted}>{t('plugins.installed')}</p> : null}
            </div>
            {action !== '' ? (
              <button
                type="button"
                style={button}
                disabled={busy !== '' || spec === ''}
                onClick={() => { install(spec) }}
              >
                {t(action === 'update' ? 'plugins.update' : 'plugins.install')}
              </button>
            ) : null}
          </div>
        )
      })}
      {pendingRestart ? (
        <button type="button" style={button} disabled={busy !== ''} onClick={restart}>
          {t('dshPlugins.restart')}
        </button>
      ) : null}
      {softError !== '' ? <p style={muted}>{softError}</p> : null}
      {error !== '' && error !== softError ? <p style={muted}>{error}</p> : null}
    </div>
  )
}
