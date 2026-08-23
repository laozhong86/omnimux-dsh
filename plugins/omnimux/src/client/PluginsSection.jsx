import { useEffect, useMemo, useState } from 'react'
import { getApps, installApp, uninstallApp } from './api.js'
import { canOpen, hasOverflowMenu, primaryActionFor } from './app-actions.js'
import { attemptOpen, notifyTabsChanged } from './open-app-flow.js'
import { useOmnimuxAuth } from './use-omnimux-auth.js'

const page = {
  padding: '0 20px 24px',
  color: 'var(--dsw-alias-label-primary, var(--dsw-text-primary, inherit))',
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
}

const toolbar = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: 10,
}

const search = {
  width: 280,
  maxWidth: '100%',
  flex: '0 1 280px',
  height: 32,
  borderRadius: 8,
  border: '1px solid var(--dsw-alias-border, rgba(255,255,255,0.12))',
  background: 'transparent',
  color: 'inherit',
  padding: '0 10px',
  font: 'inherit',
  fontSize: 13,
}

const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
  alignItems: 'stretch',
  gap: 12,
}

const card = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  minHeight: 176,
  borderRadius: 12,
  padding: 16,
  background: 'var(--dsw-alias-bg-secondary, rgba(255,255,255,0.04))',
  border: '1px solid var(--dsw-alias-border, rgba(255,255,255,0.08))',
}

const cardBody = {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  cursor: 'pointer',
  outline: 'none',
}

const titleRow = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: 10,
}

const iconBox = {
  width: 36,
  height: 36,
  borderRadius: 10,
  display: 'grid',
  placeItems: 'center',
  background: 'var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.10))',
  color: 'var(--dsw-alias-label-primary, inherit)',
  flex: '0 0 auto',
}

const titleLine = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  minWidth: 0,
  flex: 1,
  paddingRight: 34, // reserve space for the top-right ⋯ button so the title / badge never overlap it
}

const title = {
  margin: 0,
  minWidth: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  fontSize: 15,
  fontWeight: 600,
  lineHeight: '22px',
}

const stateBadge = (state) => {
  if (state === 'installed') {
    return {
      fontSize: 11,
      lineHeight: '16px',
      padding: '2px 8px',
      borderRadius: 999,
      background: 'color-mix(in srgb, var(--dsw-alias-state-success-primary, #4caf7d) 16%, transparent)',
      color: 'var(--dsw-alias-state-success-primary, #4caf7d)',
      whiteSpace: 'nowrap',
    }
  }
  if (state === 'update') {
    return {
      fontSize: 11,
      lineHeight: '16px',
      padding: '2px 8px',
      borderRadius: 999,
      background: 'color-mix(in srgb, var(--dsw-alias-state-business-primary, #4c8dff) 16%, transparent)',
      color: 'var(--dsw-alias-state-business-primary, #4c8dff)',
      whiteSpace: 'nowrap',
    }
  }
  if (state === 'available') {
    return {
      fontSize: 11,
      lineHeight: '16px',
      padding: '2px 8px',
      borderRadius: 999,
      background: 'var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.08))',
      color: 'var(--dsw-alias-label-secondary, rgba(255,255,255,0.72))',
      whiteSpace: 'nowrap',
    }
  }
  return null
}

const summary = {
  margin: 0,
  fontSize: 13,
  lineHeight: 1.55,
  opacity: 0.72,
}

const tags = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 6,
}

const tag = {
  fontSize: 11,
  lineHeight: '16px',
  padding: '2px 8px',
  borderRadius: 999,
  background: 'var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.08))',
  whiteSpace: 'nowrap',
}

const footer = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: 10,
  marginTop: 'auto',
}

const pill = (tone) => ({
  flex: '0 0 auto',
  border: tone === 'danger' || tone === 'ghost'
    ? '1px solid var(--dsw-alias-border, rgba(255,255,255,0.16))'
    : 'none',
  borderRadius: 8,
  padding: '4px 10px',
  font: 'inherit',
  fontSize: 13,
  cursor: 'pointer',
  background: tone === 'danger' || tone === 'ghost'
    ? 'transparent'
    : 'var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.12))',
  color: tone === 'danger'
    ? 'var(--dsw-alias-state-error-primary, #e06c75)'
    : 'inherit',
})

const moreButton = {
  position: 'absolute',
  top: 8,
  right: 8,
  zIndex: 1,
  display: 'grid',
  placeItems: 'center',
  width: 26,
  height: 26,
  padding: 0,
  border: '1px solid var(--dsw-alias-border, rgba(255,255,255,0.16))',
  borderRadius: 8,
  background: 'transparent',
  color: 'inherit',
  font: 'inherit',
  fontSize: 16,
  lineHeight: 1,
  cursor: 'pointer',
}

const popover = {
  position: 'absolute',
  top: 40,
  right: 8,
  zIndex: 5,
  minWidth: 200,
  maxWidth: 260,
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  padding: 6,
  borderRadius: 10,
  background: 'var(--dsw-alias-bg-primary, var(--dsw-bg, #16181d))',
  border: '1px solid var(--dsw-alias-border, rgba(255,255,255,0.16))',
  boxShadow: '0 8px 24px var(--dsw-alias-bg-mask-1, rgba(0,0,0,0.35))',
}

const menuItem = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 2,
  border: 'none',
  borderRadius: 6,
  padding: '6px 10px',
  background: 'transparent',
  color: 'inherit',
  font: 'inherit',
  fontSize: 13,
  textAlign: 'left',
  cursor: 'pointer',
}

const menuItemHint = {
  fontSize: 11,
  lineHeight: '16px',
  opacity: 0.6,
}

const menuItemDanger = {
  ...menuItem,
  color: 'var(--dsw-alias-state-error-primary, #e06c75)',
}

const bubbleText = {
  margin: 0,
  fontSize: 13,
  lineHeight: 1.5,
}

const bubbleSummary = {
  margin: 0,
  fontSize: 12,
  lineHeight: 1.5,
  opacity: 0.7,
}

const bubbleActions = {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: 8,
  marginTop: 8,
}

const gatePanel = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 10,
  padding: 16,
  borderRadius: 12,
  background: 'var(--dsw-alias-bg-secondary, rgba(255,255,255,0.04))',
  border: '1px solid var(--dsw-alias-border, rgba(255,255,255,0.08))',
}

const gateCode = {
  margin: 0,
  fontSize: 14,
  letterSpacing: 2,
  fontFamily: 'var(--dsw-font-markdown-code-font-family, monospace)',
}

const muted = { opacity: 0.7, fontSize: 13, margin: 0 }
const errText = { color: 'var(--dsw-alias-state-error-primary, #e06c75)', fontSize: 13, margin: 0 }

function desktopBridge() {
  const api = window.dshDesktop
  return api && typeof api.restartHost === 'function' ? api : undefined
}

/**
 * @param {string} template locale sentence with `{title}` placeholders
 * @param {Record<string, unknown>} vars
 */
function fmt(template, vars) {
  return template.replace(/\{(\w+)\}/g, (whole, key) => (key in vars ? String(vars[key]) : whole))
}

function AppMark({ id }) {
  if (id === 'accounts') {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
        <circle cx="8" cy="5.2" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.3" />
        <path d="M3.4 13c.6-2.4 2.3-3.6 4.6-3.6s4 1.2 4.6 3.6" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    )
  }
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <rect x="1.5" y="1.5" width="5" height="5" rx="1" fill="none" stroke="currentColor" strokeWidth="1.25" />
      <rect x="9.5" y="1.5" width="5" height="5" rx="1" fill="none" stroke="currentColor" strokeWidth="1.25" />
      <rect x="1.5" y="9.5" width="5" height="5" rx="1" fill="none" stroke="currentColor" strokeWidth="1.25" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="1" fill="none" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  )
}

function matches(app, query) {
  if (query.length === 0) return true
  const hay = [app.title, app.summary, app.id, app.spec?.name]
    .filter((value) => typeof value === 'string')
    .join(' ')
    .toLocaleLowerCase()
  return hay.includes(query)
}

/**
 * Device-login gate shown when opening an identity app while signed out.
 * @param {{
 *   t: (key: string) => string,
 *   auth: ReturnType<typeof useOmnimuxAuth>,
 *   onCancel: () => void,
 * }} props
 */
function LoginGate({ t, auth, onCancel }) {
  const state = auth.state
  const idle = state.phase === 'need-login' || state.phase === 'denied' || state.phase === 'expired' || state.phase === 'error'
  return (
    <div style={gatePanel}>
      <p style={muted}>{t('plugins.needLogin')}</p>
      {state.phase === 'waiting' ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8 }}>
          <p style={muted}>{t('plugins.waiting')}</p>
          {typeof state.user_code === 'string' && state.user_code ? (
            <p style={gateCode}>{state.user_code}</p>
          ) : null}
          {typeof state.verification_url === 'string' && state.verification_url ? (
            <button type="button" style={pill('primary')} onClick={() => { auth.openUrl(state.verification_url) }}>
              {t('plugins.open')}
            </button>
          ) : null}
        </div>
      ) : null}
      {state.phase === 'denied' ? <p style={errText}>{t('plugins.denied')}</p> : null}
      {state.phase === 'expired' ? <p style={errText}>{t('plugins.expired')}</p> : null}
      {state.phase === 'error' ? <p style={errText}>{state.detail || t('plugins.error')}</p> : null}
      {idle ? (
        <button type="button" style={pill('primary')} onClick={() => { void auth.beginLogin() }}>
          {t('plugins.login')}
        </button>
      ) : null}
      <button type="button" style={pill('ghost')} onClick={onCancel}>
        {t('plugins.cancel')}
      </button>
    </div>
  )
}

/**
 * @param {{ t: (key: string) => string }} props
 */
export function PluginsSection({ t }) {
  const [view, setView] = useState(null)
  const [query, setQuery] = useState('')
  const [busy, setBusy] = useState('')
  const [error, setError] = useState('')
  const [pendingRestart, setPendingRestart] = useState(false)
  const [popover, setPopover] = useState(null)
  const [gate, setGate] = useState(null)
  const [notice, setNotice] = useState('')
  const auth = useOmnimuxAuth()

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

  useEffect(() => {
    if (popover === null) return undefined
    const onPointerDown = (event) => {
      const target = event.target
      if (target instanceof Element && target.closest('[data-omnimux-popover]') !== null) return
      setPopover(null)
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => { document.removeEventListener('pointerdown', onPointerDown) }
  }, [popover])

  useEffect(() => {
    if (notice === '') return undefined
    const timer = window.setTimeout(() => { setNotice('') }, 6000)
    return () => { window.clearTimeout(timer) }
  }, [notice])

  const runChange = (key, work) => {
    setBusy(key)
    setError('')
    void work().then((result) => {
      if (!result.ok) {
        setError(String(result.body.error || `HTTP ${String(result.status)}`))
        return
      }
      setPendingRestart(true)
      // Uninstall removes the tab row Host-side; tell the sidebar rows to
      // re-fetch. Install/update change nothing yet (first open creates the
      // tab), but one extra GET is cheaper than a second refresh channel.
      notifyTabsChanged()
      return refresh()
    }).catch((caught) => {
      setError(caught instanceof Error ? caught.message : String(caught))
    }).finally(() => {
      setBusy('')
    })
  }

  const install = (spec) => {
    if (!spec) return
    runChange(spec, () => installApp(spec))
  }

  const uninstall = (name) => {
    if (!name) return
    runChange(name, () => uninstallApp(name))
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

  const readStage = () => document.documentElement.dataset.dshProductStage

  const runOpen = (app, isLoggedIn = auth.state.phase === 'ready') => {
    setNotice('')
    void attemptOpen(app, { pendingRestart, readStage, isLoggedIn }).then((result) => {
      if (result.kind === 'login') {
        setGate(app)
        return
      }
      if (result.kind === 'restart') setNotice(t('plugins.needRestart'))
    }).catch(() => {
      setNotice(t('plugins.needRestart'))
    })
  }

  useEffect(() => {
    if (gate === null || auth.state.phase !== 'ready') return
    const app = gate
    setGate(null)
    runOpen(app, true)
  }, [gate, auth.state.phase])

  const handleCardClick = (app) => {
    if (app.state === 'available') {
      setPopover({ kind: 'install', id: String(app.id) })
      return
    }
    runOpen(app)
  }

  const apps = Array.isArray(view?.apps) ? view.apps : []
  const normalizedQuery = query.trim().toLocaleLowerCase()
  const filtered = useMemo(
    () => apps.filter((app) => matches(app, normalizedQuery)),
    [apps, normalizedQuery],
  )
  const softError = typeof view?.error === 'string' ? view.error : ''

  return (
    <div style={page}>
      <div style={toolbar}>
        <input
          type="search"
          value={query}
          placeholder={t('plugins.search')}
          aria-label={t('plugins.search')}
          onChange={(event) => { setQuery(event.currentTarget.value) }}
          style={search}
        />
      </div>
      {gate !== null ? <LoginGate t={t} auth={auth} onCancel={() => { setGate(null) }} /> : null}
      {view == null && error === '' ? <p style={muted}>{t('profile.loading')}</p> : null}
      {apps.length === 0 && view != null ? <p style={muted}>{t('plugins.empty')}</p> : null}
      {apps.length > 0 && filtered.length === 0 ? <p style={muted}>{t('plugins.emptySearch')}</p> : null}
      {filtered.length > 0 ? (
        <div style={grid}>
          {filtered.map((app) => {
            const key = String(app.id)
            const spec = typeof app.install_spec === 'string' ? app.install_spec : ''
            const name = typeof app.spec?.name === 'string' ? app.spec.name : ''
            const primary = primaryActionFor(app.state)
            const overflow = hasOverflowMenu(app.state)
            const badge = stateBadge(app.state)
            const appCaps = Array.isArray(app.capabilities) ? app.capabilities : []
            const badgeKey = app.state === 'update'
              ? 'plugins.update'
              : app.state === 'available'
                ? 'plugins.available'
                : 'plugins.installedShort'
            return (
              <article key={key} style={card}>
                <div
                  role="button"
                  tabIndex={0}
                  style={cardBody}
                  onClick={() => { handleCardClick(app) }}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault()
                      handleCardClick(app)
                    }
                  }}
                >
                  <div style={titleRow}>
                    <span style={iconBox} aria-hidden="true">
                      <AppMark id={app.id} />
                    </span>
                    <div style={titleLine}>
                      <h3 style={title}>{app.title}</h3>
                      {badge ? <span style={badge}>{t(badgeKey)}</span> : null}
                    </div>
                  </div>
                  {app.summary ? <p style={summary}>{app.summary}</p> : null}
                  {appCaps.length > 0 ? (
                    <div style={tags}>
                      {appCaps.map((capKey) => (
                        <span key={capKey} style={tag}>{t(`plugins.cap.${capKey}`)}</span>
                      ))}
                    </div>
                  ) : null}
                </div>
                {overflow ? (
                  <button
                    type="button"
                    style={moreButton}
                    aria-label={t('plugins.more')}
                    aria-haspopup="menu"
                    aria-expanded={popover?.kind === 'menu' && popover.id === key}
                    disabled={busy !== ''}
                    onClick={(event) => {
                      event.stopPropagation()
                      setPopover(popover?.kind === 'menu' && popover.id === key ? null : { kind: 'menu', id: key })
                    }}
                  >
                    ⋯
                  </button>
                ) : null}
                <div style={footer}>
                  {primary !== null ? (
                    <button
                      type="button"
                      style={pill('primary')}
                      disabled={busy !== '' || spec === ''}
                      onClick={(event) => { event.stopPropagation(); install(spec) }}
                    >
                      {t(primary === 'update' ? 'plugins.update' : 'plugins.install')}
                    </button>
                  ) : null}
                </div>
                {popover?.id === key && popover.kind === 'menu' ? (
                  <div data-omnimux-popover="" role="menu" style={popover}>
                    <button
                      type="button"
                      role="menuitem"
                      style={menuItem}
                      disabled={busy !== '' || !canOpen(app, pendingRestart)}
                      onClick={() => {
                        setPopover(null)
                        runOpen(app)
                      }}
                    >
                      <span>{t('plugins.openApp')}</span>
                      {pendingRestart ? <span style={menuItemHint}>{t('plugins.needRestart')}</span> : null}
                    </button>
                    <button
                      type="button"
                      role="menuitem"
                      style={menuItemDanger}
                      disabled={busy !== '' || name === ''}
                      onClick={() => { setPopover({ kind: 'remove', id: key }) }}
                    >
                      {t('plugins.remove')}
                    </button>
                  </div>
                ) : null}
                {popover?.id === key && popover.kind === 'install' ? (
                  <div data-omnimux-popover="" role="dialog" style={popover}>
                    <p style={bubbleText}>{fmt(t('plugins.confirmInstall'), { title: app.title })}</p>
                    {app.summary ? <p style={bubbleSummary}>{app.summary}</p> : null}
                    <div style={bubbleActions}>
                      <button
                        type="button"
                        style={pill('primary')}
                        disabled={busy !== '' || spec === ''}
                        onClick={() => {
                          setPopover(null)
                          install(spec)
                        }}
                      >
                        {t('plugins.install')}
                      </button>
                      <button type="button" style={pill('ghost')} onClick={() => { setPopover(null) }}>
                        {t('plugins.cancel')}
                      </button>
                    </div>
                  </div>
                ) : null}
                {popover?.id === key && popover.kind === 'remove' ? (
                  <div data-omnimux-popover="" role="dialog" style={popover}>
                    <p style={bubbleText}>{fmt(t('plugins.confirmRemove'), { title: app.title })}</p>
                    <div style={bubbleActions}>
                      <button
                        type="button"
                        style={pill('danger')}
                        disabled={busy !== '' || name === ''}
                        onClick={() => {
                          setPopover(null)
                          uninstall(name)
                        }}
                      >
                        {t('plugins.remove')}
                      </button>
                      <button type="button" style={pill('ghost')} onClick={() => { setPopover(null) }}>
                        {t('plugins.cancel')}
                      </button>
                    </div>
                  </div>
                ) : null}
              </article>
            )
          })}
        </div>
      ) : null}
      {notice !== '' ? <p style={muted}>{notice}</p> : null}
      {pendingRestart ? (
        <button type="button" style={{ ...pill('primary'), alignSelf: 'flex-start' }} disabled={busy !== ''} onClick={restart}>
          {t('dshPlugins.restart')}
        </button>
      ) : null}
      {softError !== '' ? <p style={muted}>{softError}</p> : null}
      {error !== '' && error !== softError ? <p style={errText}>{error}</p> : null}
    </div>
  )
}
