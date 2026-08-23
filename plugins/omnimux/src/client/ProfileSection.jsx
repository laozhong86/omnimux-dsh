import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { walletUrl } from './quota-failure.js'
import { useOmnimuxAuth } from './use-omnimux-auth.js'
import { getAvatar, updateAvatar } from './avatar-api.js'

/** Hue presets, kept in sync with src/avatar/avatar.js. */
const HUES = [12, 90, 150, 210, 280, 320]

const tokens = {
  text: 'var(--dsw-text-primary, inherit)',
  textSecondary: 'var(--dsw-text-secondary, rgba(127,127,127,.9))',
  border: 'var(--dsw-border, rgba(127,127,127,.35))',
  card: 'var(--dsw-alias-bg-primary, rgba(127,127,127,.08))',
  hover: 'var(--dsw-alias-interactive-bg-hover, rgba(127,127,127,.14))',
  primaryFill: 'var(--dsw-alias-button-primary-fill, #3b82f6)',
  primaryHover: 'var(--dsw-alias-button-primary-hover, #2f6fed)',
  primaryLabel: 'var(--dsw-alias-label-primary-inverted, #fff)',
  error: 'var(--dsw-alias-label-error, #e5534b)',
  success: 'var(--dsw-alias-label-accent, #3fb950)',
}

const page = {
  padding: '20px',
  color: tokens.text,
  display: 'flex',
  flexDirection: 'column',
  gap: 14,
  maxWidth: 520,
}

const card = {
  background: tokens.card,
  border: `1px solid ${tokens.border}`,
  borderRadius: 10,
  padding: '14px 16px',
}

const label = { fontSize: 13, color: tokens.textSecondary }
const value = { fontSize: 13, color: tokens.text, wordBreak: 'break-all', textAlign: 'right' }

const hoverStyles = `
.omx-profile .omx-btn { transition: background .15s ease, border-color .15s ease, color .15s ease; font-size: 13px; padding: 6px 14px; border-radius: 6px; cursor: pointer; }
.omx-profile .omx-btn-primary { background: ${tokens.primaryFill}; color: ${tokens.primaryLabel}; border: 1px solid transparent; }
.omx-profile .omx-btn-primary:hover { background: ${tokens.primaryHover}; }
.omx-profile .omx-btn-ghost { background: transparent; color: ${tokens.textSecondary}; border: 1px solid ${tokens.border}; }
.omx-profile .omx-btn-ghost:hover { color: ${tokens.text}; background: ${tokens.hover}; }
.omx-profile .omx-btn-danger:hover { color: ${tokens.error}; border-color: ${tokens.error}; background: transparent; }
.omx-avatar { position: relative; cursor: pointer; flex: 0 0 auto; }
.omx-avatar-edit { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; border-radius: 50%; background: var(--dsw-alias-bg-mask-1, rgba(0,0,0,.55)); color: var(--dsw-alias-label-primary-inverted, #fff); font-size: 11px; opacity: 0; transition: opacity .15s ease; pointer-events: none; }
.omx-avatar:hover .omx-avatar-edit { opacity: 1; }
`

function money(value) {
  return typeof value === 'number' ? `$${value.toFixed(2)}` : '—'
}

function DetailRow({ name, children, last }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 16,
      padding: '9px 0',
      borderBottom: last ? 'none' : `1px solid ${tokens.border}`,
    }}>
      <span style={label}>{name}</span>
      <span style={value}>{children}</span>
    </div>
  )
}

function AvatarFace({ uri, initial, size = 44 }) {
  const inner = uri ? (
    <img
      src={uri}
      width={size}
      height={size}
      alt=""
      style={{ width: size, height: size, borderRadius: '50%', display: 'block' }}
    />
  ) : (
    <div style={{
      width: size,
      height: size,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: size > 60 ? 28 : 18,
      fontWeight: 600,
      background: tokens.primaryFill,
      color: tokens.primaryLabel,
    }}>
      {initial}
    </div>
  )
  return inner
}

function EditableAvatar({ t, uri, initial, onOpen }) {
  return (
    <div className="omx-avatar" onClick={onOpen} title={t('avatar.edit')}>
      <AvatarFace uri={uri} initial={initial} />
      <div className="omx-avatar-edit">{t('avatar.edit')}</div>
    </div>
  )
}

function AvatarModal({ t, avatar, initial, busy, error, onApply, onClose }) {
  const fileRef = useRef(null)
  const activeHue = typeof avatar?.opts?.hue === 'number' ? avatar.opts.hue : null

  useEffect(() => {
    function onKey(event) {
      if (event.key !== 'Escape') return
      event.stopPropagation()
      onClose()
    }
    document.addEventListener('keydown', onKey, true)
    return () => document.removeEventListener('keydown', onKey, true)
  }, [onClose])

  function pickFile(event) {
    const file = event.target.files && event.target.files[0]
    event.target.value = ''
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      const dataUrl = typeof reader.result === 'string' ? reader.result : ''
      if (dataUrl) void onApply({ upload: dataUrl })
    }
    reader.readAsDataURL(file)
  }

  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1100,
        background: 'var(--dsw-alias-bg-mask-1, rgba(0,0,0,.45))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        style={{
          ...card,
          background: 'var(--dsw-alias-bg-secondary, #1f2128)',
          border: `1px solid ${tokens.border}`,
          borderRadius: 12,
          width: 320,
          padding: '18px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <span style={{ fontSize: 14, fontWeight: 600 }}>{t('avatar.title')}</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <AvatarFace uri={avatar?.uri} initial={initial} size={96} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          <span style={{ fontSize: 12, color: tokens.textSecondary }}>{t('avatar.hue')}</span>
          {HUES.map((hue) => (
            <button
              key={hue}
              type="button"
              aria-label={`${t('avatar.hue')} ${hue}`}
              disabled={busy}
              onClick={() => { void onApply({ hue }) }}
              style={{
                width: 20,
                height: 20,
                borderRadius: '50%',
                padding: 0,
                cursor: busy ? 'default' : 'pointer',
                background: `hsl(${hue} 70% 55%)`,
                border: activeHue === hue ? `2px solid ${tokens.text}` : `1px solid ${tokens.border}`,
                boxSizing: 'border-box',
              }}
            />
          ))}
        </div>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <button type="button" className="omx-btn omx-btn-primary" disabled={busy} onClick={() => { void onApply({ reroll: true }) }}>
            {t('avatar.reroll')}
          </button>
          <button type="button" className="omx-btn omx-btn-ghost" disabled={busy} onClick={() => fileRef.current?.click()}>
            {t('avatar.upload')}
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="image/png,image/jpeg,image/webp,image/gif"
            style={{ display: 'none' }}
            onChange={pickFile}
          />
          <button
            type="button"
            className="omx-btn omx-btn-ghost"
            disabled={busy || avatar?.using_default !== false}
            onClick={() => { void onApply({ reset: true }) }}
          >
            {t('avatar.reset')}
          </button>
        </div>
        <p style={{ margin: 0, fontSize: 11, color: tokens.textSecondary }}>{t('avatar.uploadHint')}</p>
        {error ? <p style={{ margin: 0, fontSize: 12, color: tokens.error, lineHeight: 1.5 }}>{error}</p> : null}

        <button type="button" className="omx-btn omx-btn-ghost" style={{ alignSelf: 'flex-end' }} onClick={onClose}>
          {t('avatar.close')}
        </button>
      </div>
    </div>,
    document.body,
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
    <div style={page} className="omx-profile">
      <style>{hoverStyles}</style>
      <h2 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>{t('profile.title')}</h2>

      <div style={{ ...card, display: 'flex', alignItems: 'center', gap: 12 }}>
        <EditableAvatar t={t} uri={avatar?.uri} initial={initial} onOpen={() => setEditing(true)} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
          <span style={{ fontSize: 15, fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {name || '—'}
          </span>
          <span style={{ fontSize: 13, color: tokens.textSecondary }}>{profile.username || '—'}</span>
        </div>
        <span style={{
          marginLeft: 'auto',
          flex: '0 0 auto',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          fontSize: 12,
          color: tokens.textSecondary,
        }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: tokens.success }} />
          {t('profile.signedIn')}
        </span>
      </div>

      {avatarError && !editing ? (
        <p style={{ margin: 0, fontSize: 12, color: tokens.error, lineHeight: 1.5 }}>{avatarError}</p>
      ) : null}

      <div style={{ ...card, display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: '1 1 auto', minWidth: 0 }}>
          <span style={label}>{t('profile.quota')}</span>
          <span style={{ fontSize: 22, fontWeight: 600, lineHeight: 1.2 }}>{money(profile.quota_usd)}</span>
          <span style={{ fontSize: 12, color: tokens.textSecondary }}>
            {t('profile.used')} {money(profile.used_quota_usd)}
          </span>
          <div style={{ height: 4, borderRadius: 2, background: tokens.border, overflow: 'hidden', marginTop: 2 }}>
            <div style={{ width: `${usedPct}%`, height: '100%', borderRadius: 2, background: tokens.primaryFill }} />
          </div>
        </div>
        <button type="button" className="omx-btn omx-btn-primary" style={{ flex: '0 0 auto' }} onClick={onTopUp}>
          {t('profile.topUp')}
        </button>
      </div>

      <div style={{ ...card, padding: '4px 16px' }}>
        <DetailRow name={t('profile.username')}>{profile.username || '—'}</DetailRow>
        <DetailRow name={t('profile.displayName')}>{profile.display_name || '—'}</DetailRow>
        <DetailRow name={t('profile.group')}>{profile.group || '—'}</DetailRow>
        <DetailRow name={t('profile.site')} last>{profile.base_url || '—'}</DetailRow>
      </div>

      <button type="button" className="omx-btn omx-btn-ghost omx-btn-danger" style={{ alignSelf: 'flex-start' }} onClick={onSignOut}>
        {t('profile.logout')}
      </button>

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
    <div style={page} className="omx-profile">
      <style>{hoverStyles}</style>
      <h2 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>{t('profile.title')}</h2>
      <div style={{ ...card, display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
        <p style={{ margin: 0, fontSize: 13, color: tokens.textSecondary, lineHeight: 1.5 }}>{message}</p>
        {showLogin ? (
          <button type="button" className="omx-btn omx-btn-primary" onClick={signIn}>
            {t('plugins.login')}
          </button>
        ) : null}
      </div>
    </div>
  )
}
