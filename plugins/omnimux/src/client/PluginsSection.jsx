import { useEffect, useMemo, useState } from 'react'
import { getApps, installApp, uninstallApp } from './api.js'
import { canOpen, hasOverflowMenu, primaryActionFor } from './app-actions.js'
import { attemptOpen, notifyTabsChanged } from './open-app-flow.js'
import { useOmnimuxAuth } from './use-omnimux-auth.js'
import { AppMark, PluginLoginPanel, desktopBridge, fmt, matches } from './plugin-helpers.jsx'
import {
  bubbleActions,
  bubbleSummary,
  bubbleText,
  card,
  cardBody,
  errText,
  footer,
  grid,
  iconBox,
  menuItem,
  menuItemDanger,
  menuItemHint,
  moreButton,
  muted,
  page,
  pill,
  popoverPanel,
  search,
  stateBadge,
  summary,
  tag,
  tags,
  title,
  titleLine,
  titleRow,
  toolbar,
} from './plugins-styles.js'

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
      {gate !== null ? <PluginLoginPanel t={t} auth={auth} onCancel={() => { setGate(null) }} /> : null}
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
                  <div data-omnimux-popover="" role="menu" style={popoverPanel}>
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
                  <div data-omnimux-popover="" role="dialog" style={popoverPanel}>
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
                  <div data-omnimux-popover="" role="dialog" style={popoverPanel}>
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
