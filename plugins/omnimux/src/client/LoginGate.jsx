import { useEffect, useSyncExternalStore } from 'react'
import { Button, ModalDialog } from 'dsh-ui-kit'
import { cancel, getSnapshot, retry, subscribe } from './auth-gate.js'
import { injectHubStyles } from './styles.js'

/**
 * Unified Login gate modal. Renders only while the gate store is not
 * `closed`; otherwise returns null so it never occupies the stage or claims a
 * product slot. Kit ModalDialog owns the overlay chrome.
 * @param {{ t: (key: string) => string }} props
 */
export function LoginGate({ t }) {
  useEffect(() => { injectHubStyles() }, [])
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

  return (
    <ModalDialog
      open
      size="sm"
      onClose={() => { cancel() }}
      title={t('auth.gate.title')}
      description={reason}
      closeLabel={t('auth.gate.cancel')}
      footer={(
        <div className="omnimux-login-gate-actions">
          {waiting && gate.verification_url ? (
            <Button
              variant="primary"
              onClick={() => window.open(gate.verification_url, '_blank', 'noopener,noreferrer')}
            >
              {t('plugins.open')}
            </Button>
          ) : null}
          {failed ? (
            <Button variant="primary" onClick={() => retry()}>
              {t('auth.gate.retry')}
            </Button>
          ) : null}
          <Button variant="ghost" onClick={() => cancel()}>
            {t('auth.gate.cancel')}
          </Button>
        </div>
      )}
    >
      {waiting ? (
        <>
          <div className="omnimux-login-gate-code">{gate.user_code || '—'}</div>
          <p className="omnimux-login-gate-hint">{t('auth.gate.resumeHint')}</p>
        </>
      ) : null}

      {waiting || gate.phase === 'checking' || gate.phase === 'starting' ? (
        <p className="omnimux-login-gate-hint">
          {hint[gate.phase] || t('plugins.waiting')}
        </p>
      ) : null}

      {failed ? <p className="omnimux-login-gate-error">{detail}</p> : null}
    </ModalDialog>
  )
}
