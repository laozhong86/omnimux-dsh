import { useOmnimuxAuth } from './use-omnimux-auth.js'

const page = {
  padding: '16px 20px',
  color: 'var(--dsw-text-primary, inherit)',
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  maxWidth: 480,
}

const muted = { color: 'var(--dsw-text-secondary, inherit)', lineHeight: 1.5 }
const row = { display: 'flex', justifyContent: 'space-between', gap: 16 }
const button = {
  alignSelf: 'flex-start',
  padding: '6px 12px',
  border: '1px solid var(--dsw-border, currentColor)',
  background: 'transparent',
  color: 'inherit',
  borderRadius: 6,
  cursor: 'pointer',
}

/**
 * @param {{ t: (key: string) => string }} props
 */
export function ProfileSection({ t }) {
  const { state, beginLogin, signOut, openUrl } = useOmnimuxAuth({ verifyOnMount: false })

  if (state.phase === 'ready') {
    const profile = state.profile || {}
    const money = (value) => (typeof value === 'number' ? `$${value.toFixed(2)}` : '—')
    return (
      <div style={page}>
        <h2 style={{ margin: 0, fontSize: 16 }}>{t('profile.title')}</h2>
        <p style={muted}>{t('profile.signedIn')}</p>
        <div style={row}><span>{t('profile.username')}</span><span>{profile.username || '—'}</span></div>
        <div style={row}><span>{t('profile.displayName')}</span><span>{profile.display_name || '—'}</span></div>
        <div style={row}><span>{t('profile.group')}</span><span>{profile.group || '—'}</span></div>
        <div style={row}><span>{t('profile.quota')}</span><span>{money(profile.quota_usd)}</span></div>
        <div style={row}><span>{t('profile.used')}</span><span>{money(profile.used_quota_usd)}</span></div>
        <div style={row}><span>{t('profile.site')}</span><span>{profile.base_url || '—'}</span></div>
        <button type="button" style={button} onClick={() => { void signOut() }}>
          {t('profile.logout')}
        </button>
      </div>
    )
  }

  const message = {
    checking: t('profile.loading'),
    'need-login': t('profile.signedOut'),
    starting: t('profile.loading'),
    waiting: t('plugins.waiting'),
    denied: t('plugins.denied'),
    expired: t('plugins.expired'),
    error: t('plugins.error'),
  }[state.phase] || t('profile.signedOut')

  const showLogin = state.phase === 'need-login' || state.phase === 'denied' || state.phase === 'expired' || state.phase === 'error'

  return (
    <div style={page}>
      <h2 style={{ margin: 0, fontSize: 16 }}>{t('profile.title')}</h2>
      <p style={muted}>{message}</p>
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
