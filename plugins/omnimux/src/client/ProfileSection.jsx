import { useEffect, useState } from 'react'
import { Button } from 'dsh-ui-kit'
import { walletUrl } from './quota-failure.js'
import { useOmnimuxAuth } from './use-omnimux-auth.js'
import { getAvatar, updateAvatar } from './avatar-api.js'
import { AvatarModal, EditableAvatar } from './ProfileAvatar.jsx'
import { injectHubStyles } from './styles.js'

function money(value) {
  return typeof value === 'number' ? `$${value.toFixed(2)}` : '—'
}

function DetailRow({ name, children, last }) {
  return (
    <div className="omnimux-profile-row" data-last={last ? 'true' : 'false'}>
      <span className="omnimux-profile-label">{name}</span>
      <span className="omnimux-profile-value">{children}</span>
    </div>
  )
}

function SignedIn({ t, profile, onTopUp, onSignOut }) {
  const name = profile.display_name || profile.username || ''
  const initial = (name.trim().charAt(0) || '?').toUpperCase()
  const balance = typeof profile.quota_usd === 'number' ? profile.quota_usd : 0
  const used = typeof profile.used_quota_usd === 'number' ? profile.used_quota_usd : 0
  const total = balance + used
  const usedPct = total > 0 ? Math.min(100, (used / total) * 100) : 0
  const [avatar, setAvatar] = useState(null)
  const [avatarError, setAvatarError] = useState('')
  const [busy, setBusy] = useState(false)
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    let cancelled = false
    getAvatar().then((result) => {
      if (cancelled) return
      if (result.ok && result.body.uri) {
        setAvatar(result.body)
        setAvatarError('')
      } else {
        setAvatarError(result.body.error || t('avatar.error'))
      }
    }).catch(() => {
      if (!cancelled) setAvatarError(t('avatar.error'))
    })
    return () => { cancelled = true }
  }, [t])

  async function applyAvatar(patch) {
    if (busy) return
    setBusy(true)
    try {
      const result = await updateAvatar(patch)
      if (result.ok && result.body.uri) {
        setAvatar(result.body)
        setAvatarError('')
      } else {
        setAvatarError(result.body.error || t('avatar.error'))
      }
    } catch {
      setAvatarError(t('avatar.error'))
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="omnimux-profile">
      <h2 className="omnimux-profile-title">{t('profile.title')}</h2>

      <div className="omnimux-profile-card omnimux-profile-card--identity">
        <EditableAvatar t={t} uri={avatar?.uri} initial={initial} onOpen={() => setEditing(true)} />
        <div className="omnimux-profile-identity">
          <span className="omnimux-profile-name">{name || '—'}</span>
          <span className="omnimux-profile-username">{profile.username || '—'}</span>
        </div>
        <span className="omnimux-profile-status">
          <span className="omnimux-profile-status-dot" />
          {t('profile.signedIn')}
        </span>
      </div>

      {avatarError && !editing ? (
        <p className="omnimux-profile-error">{avatarError}</p>
      ) : null}

      <div className="omnimux-profile-card omnimux-profile-card--quota">
        <div className="omnimux-profile-quota">
          <span className="omnimux-profile-label">{t('profile.quota')}</span>
          <span className="omnimux-profile-quota-amount">{money(profile.quota_usd)}</span>
          <span className="omnimux-profile-quota-used">
            {t('profile.used')} {money(profile.used_quota_usd)}
          </span>
          <div className="omnimux-profile-quota-track">
            <div
              className="omnimux-profile-quota-fill"
              style={{ '--quota-used': `${usedPct}%` }}
            />
          </div>
        </div>
        <Button variant="primary" onClick={onTopUp}>
          {t('profile.topUp')}
        </Button>
      </div>

      <div className="omnimux-profile-card omnimux-profile-card--details">
        <DetailRow name={t('profile.username')}>{profile.username || '—'}</DetailRow>
        <DetailRow name={t('profile.displayName')}>{profile.display_name || '—'}</DetailRow>
        <DetailRow name={t('profile.group')}>{profile.group || '—'}</DetailRow>
        <DetailRow name={t('profile.site')} last>{profile.base_url || '—'}</DetailRow>
      </div>

      <Button variant="outline" className="omnimux-profile-logout" onClick={onSignOut}>
        {t('profile.logout')}
      </Button>

      {editing ? (
        <AvatarModal
          t={t}
          avatar={avatar}
          initial={initial}
          busy={busy}
          error={avatarError}
          onApply={applyAvatar}
          onClose={() => setEditing(false)}
        />
      ) : null}
    </div>
  )
}

/**
 * @param {{ t: (key: string) => string }} props
 */
export function ProfileSection({ t }) {
  useEffect(() => { injectHubStyles() }, [])
  const { state, signOut, openUrl, recheck } = useOmnimuxAuth({ verifyOnMount: false })

  if (state.phase === 'ready') {
    const profile = state.profile || {}
    return (
      <SignedIn
        t={t}
        profile={profile}
        onTopUp={() => openUrl(walletUrl(profile.base_url))}
        onSignOut={() => { void signOut() }}
      />
    )
  }

  // Sign-in is converged onto the unified gate: this section only shows a
  // short message and a single entry button. The gate owns the device code,
  // the verification page, polling, and the resume-after-login intent queue.
  const signIn = () => {
    const gate = typeof window !== 'undefined' ? /** @type {any} */ (window).__omnimuxAuth : undefined
    if (gate && typeof gate.ensureLogin === 'function') {
      gate.ensureLogin({
        reason: t('auth.gate.reason.account'),
        kind: 'explicit',
        onSuccess: () => { void recheck() },
      })
    } else {
      void recheck()
    }
  }

  const message = {
    checking: t('profile.loading'),
    'need-login': t('profile.signedOut'),
    denied: t('plugins.denied'),
    expired: t('plugins.expired'),
    error: t('plugins.error'),
  }[state.phase] || t('profile.signedOut')

  const showLogin = state.phase !== 'checking'

  return (
    <div className="omnimux-profile">
      <h2 className="omnimux-profile-title">{t('profile.title')}</h2>
      <div className="omnimux-profile-card omnimux-profile-card--signed-out">
        <p className="omnimux-profile-message">{message}</p>
        {showLogin ? (
          <Button variant="primary" onClick={signIn}>
            {t('plugins.login')}
          </Button>
        ) : null}
      </div>
    </div>
  )
}
