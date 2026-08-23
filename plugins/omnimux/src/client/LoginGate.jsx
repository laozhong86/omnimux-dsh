import { useSyncExternalStore } from 'react'
import { createPortal } from 'react-dom'
import { cancel, getSnapshot, retry, subscribe } from './auth-gate.js'

/**
 * Design tokens — host-shell (`--dsw-alias-*` / `--dsw-specific-*`) per
 * design.md's full-shell bridge (xai-theme.js tints these). Same precedent as
 * ProfileSection / AvatarModal in this bundle, but here only token variables
 * plus keyword fallbacks — no bare hex/rgba literals. These are real host
 * alias tokens, so no global `<style>` token override is needed.
 */
const tokens = {
  text: 'var(--dsw-alias-label-primary, inherit)',
  textSecondary: 'var(--dsw-alias-label-secondary, inherit)',
  border: 'var(--dsw-alias-border-l2, inherit)',
  card: 'var(--dsw-alias-bg-secondary, var(--dsw-alias-bg-base, inherit))',
  overlay: 'var(--dsw-alias-bg-mask-1, transparent)',
  error: 'var(--dsw-alias-label-error, inherit)',
}

// The gate must sit above every other overlay (AppsStage / AccountsStage use
// ~200, AvatarModal uses 1100) but still be a transient portal on document.body
// — it must never claim `data-dsh-product-stage` (that stays owned by whatever
// first-level page is open).
const GATE_Z_INDEX = 1200

// Buttons are styled by classes scoped to this gate, because the shared
// `.omx-btn` classes only exist inside `.omx-profile` (ProfileSection) — this
// gate portals to `<body>`, so it would otherwise fall back to native control
// styling. Scoped to `.omnimux-login-gate`, so it leaks nothing and is not a
// global theme/token override. Colours come only from `--dsw-*` tokens.
const BTN_STYLES = `
.omnimux-login-gate .omx-gate-btn {
  display: inline-flex; align-items: center; justify-content: center;
  border: 1px solid transparent; border-radius: 6px; padding: 6px 14px;
  font: inherit; font-size: 13px; line-height: 20px; cursor: pointer;
  transition: background .15s ease, border-color .15s ease, color .15s ease;
}
.omnimux-login-gate .omx-gate-btn:focus-visible {
  outline: 2px solid var(--dsw-alias-label-primary, inherit); outline-offset: 2px;
}
.omnimux-login-gate .omx-gate-btn--primary {
  background: var(--dsw-alias-button-primary-fill, inherit);
  color: var(--dsw-alias-label-primary-inverted, inherit);
}
.omnimux-login-gate .omx-gate-btn--primary:hover {
  background: var(--dsw-alias-button-primary-hover, inherit);
}
.omnimux-login-gate .omx-gate-btn--ghost {
  background: transparent; color: var(--dsw-alias-label-secondary, inherit);
  border-color: var(--dsw-alias-border-l2, inherit);
}
.omnimux-login-gate .omx-gate-btn--ghost:hover {
  color: var(--dsw-alias-label-primary, inherit);
  background: var(--dsw-alias-interactive-bg-hover, transparent);
}
.omnimux-login-gate .omx-gate-btn--ghost:active {
  background: var(--dsw-alias-interactive-bg-active, transparent);
}
`

/**
 * Unified Login gate modal. Renders only while the gate store is not
 * `closed`; otherwise returns null so it never occupies the stage or claims a
 * product slot. Rendered via createPortal(document.body) as a fixed overlay.
 * @param {{ t: (key: string) => string }} props
 */
export function LoginGate({ t }) {
  const gate = useSyncExternalStore(subscribe, getSnapshot)
  if (!gate || gate.phase === 'closed') return null

  const hint = { checking: t('profile.loading'), starting: t('profile.loading') }
  const waiting = gate.phase === 'waiting'
  const failed = gate.phase === 'denied' || gate.phase === 'expired' || gate.phase === 'error'
  const reason = gate.reason || t('auth.gate.reason.generic')

  const detail = {
    denied: t('plugins.denied'),
    expired: t('plugins.expired'),
    error: t('plugins.error'),
  }[gate.phase]

  return createPortal(
    <div
      className="omnimux-login-gate"
      role="dialog"
      aria-modal="true"
      onKeyDown={(event) => { if (event.key === 'Escape') cancel() }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: GATE_Z_INDEX,
        background: tokens.overlay,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}
    >
      <style>{BTN_STYLES}</style>
      <div
        role="document"
        style={{
          background: tokens.card,
          border: `1px solid ${tokens.border}`,
          borderRadius: 16,
          width: 'min(440px, 100%)',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
          color: tokens.text,
        }}
      >
        <div>
          <h2 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>{t('auth.gate.title')}</h2>
          <p style={{ margin: '6px 0 0', fontSize: 13, color: tokens.textSecondary, lineHeight: 1.5 }}>{reason}</p>
        </div>

        {waiting ? (
          <>
            <div style={{
              fontFamily: 'var(--dsw-font-markdown-code-font-family, monospace)',
              fontSize: 22,
              letterSpacing: 3,
              textAlign: 'center',
              padding: '10px 12px',
              borderRadius: 8,
              border: `1px solid ${tokens.border}`,
              color: tokens.text,
            }}>
              {gate.user_code || '—'}
            </div>
            <p style={{ margin: 0, fontSize: 12, color: tokens.textSecondary, lineHeight: 1.5 }}>{t('auth.gate.resumeHint')}</p>
          </>
        ) : null}

        {waiting || gate.phase === 'checking' || gate.phase === 'starting' ? (
          <p style={{ margin: 0, fontSize: 12, color: tokens.textSecondary, lineHeight: 1.5 }}>
            {hint[gate.phase] || t('plugins.waiting')}
          </p>
        ) : null}

        {failed ? (
          <p style={{ margin: 0, fontSize: 12, color: tokens.error, lineHeight: 1.5 }}>{detail}</p>
        ) : null}

        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', flexWrap: 'wrap' }}>
          {waiting && gate.verification_url ? (
            <button type="button" className="omx-gate-btn omx-gate-btn--primary" onClick={() => window.open(gate.verification_url, '_blank', 'noopener,noreferrer')}>
              {t('plugins.open')}
            </button>
          ) : null}
          {failed ? (
            <button type="button" className="omx-gate-btn omx-gate-btn--primary" onClick={() => retry()}>
              {t('auth.gate.retry')}
            </button>
          ) : null}
          <button type="button" className="omx-gate-btn omx-gate-btn--ghost" onClick={() => cancel()}>
            {t('auth.gate.cancel')}
          </button>
        </div>
      </div>
    </div>,
    document.body,
  )
}
