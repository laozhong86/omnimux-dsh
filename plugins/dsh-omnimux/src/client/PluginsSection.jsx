import { useEffect, useState } from 'react'
import { getCapabilities } from './api.js'
import { useOmnimuxAuth } from './use-omnimux-auth.js'

const page = {
  padding: '16px 20px',
  color: 'var(--dsw-text-primary, inherit)',
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  maxWidth: 520,
}

const gate = {
  flex: 1,
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 12,
  padding: '16px 20px',
  color: 'var(--dsw-text-primary, inherit)',
  textAlign: 'center',
}

const muted = { color: 'var(--dsw-text-secondary, inherit)', lineHeight: 1.5, margin: 0 }
const button = {
  padding: '8px 24px',
  border: '1px solid var(--dsw-border, currentColor)',
  background: 'transparent',
  color: 'inherit',
  borderRadius: 6,
  cursor: 'pointer',
}

/**
 * @param {{ t: (key: string) => string }} props
 */
const CAP_KEYS = ['identity', 'videoGenerate', 'imageGenerate', 'official']

export function PluginsSection({ t }) {
  const { state, beginLogin, openUrl } = useOmnimuxAuth({ verifyOnMount: true })
  const [caps, setCaps] = useState(null)

  useEffect(() => {
    if (state.phase !== 'ready') return undefined
    let cancelled = false
    getCapabilities().then((result) => {
      if (!cancelled) setCaps(result.body)
    }).catch(() => {
      if (!cancelled) setCaps(null)
    })
    return () => { cancelled = true }
  }, [state.phase])

  if (state.phase === 'ready') {
    return (
      <div style={page}>
        <p style={muted}>{t('plugins.empty')}</p>
        <p style={{ ...muted, marginTop: 8 }}>{t('plugins.hub')}</p>
        {caps ? (
          <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
            {CAP_KEYS.map((key) => (
              <li key={key}>
                {t(`plugins.cap.${key}`)}
                {' — '}
                {caps[key] ? t('plugins.cap.on') : t('plugins.cap.off')}
              </li>
            ))}
          </ul>
        ) : (
          <p style={muted}>{t('profile.loading')}</p>
        )}
      </div>
    )
  }

  const message = {
    checking: t('profile.loading'),
    'need-login': t('plugins.needLogin'),
    starting: t('profile.loading'),
    waiting: t('plugins.waiting'),
    denied: t('plugins.denied'),
    expired: t('plugins.expired'),
    error: t('plugins.error'),
  }[state.phase] || t('plugins.needLogin')

  const showLogin = state.phase === 'need-login' || state.phase === 'denied' || state.phase === 'expired' || state.phase === 'error'
  const showStatus = state.phase !== 'need-login'

  return (
    <div style={gate}>
      {showStatus ? <p style={muted}>{message}</p> : null}
      {state.phase === 'error' && state.detail ? <p style={muted}>{state.detail}</p> : null}
      {state.phase === 'waiting' && state.user_code ? (
        <p style={muted}>{t('plugins.code')}: {state.user_code}</p>
      ) : null}
      {state.phase === 'waiting' && state.verification_url ? (
        <button type="button" style={button} onClick={() => openUrl(state.verification_url)}>
          {t('plugins.open')}
        </button>
      ) : null}
      {showLogin ? (
        <button type="button" style={button} onClick={() => { void beginLogin() }}>
          {t('plugins.login')}
        </button>
      ) : null}
    </div>
  )
}
