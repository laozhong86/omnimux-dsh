const backdrop = {
  position: 'fixed',
  inset: 0,
  zIndex: 300,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'var(--dsw-alias-bg-mask-1, rgba(0,0,0,.40))',
}

const dialog = {
  width: 360,
  maxWidth: 'calc(100vw - 48px)',
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  padding: 20,
  borderRadius: 16,
  background: 'var(--dsw-alias-bg-base, var(--dsw-bg, inherit))',
  border: '1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))',
  color: 'var(--dsw-alias-label-primary, inherit)',
}

const heading = {
  margin: 0,
  fontSize: 15,
  fontWeight: 600,
  lineHeight: '22px',
  wordBreak: 'break-all',
}

const hint = {
  margin: 0,
  fontSize: 12,
  lineHeight: '18px',
  color: 'var(--dsw-alias-label-secondary, inherit)',
}

const buttons = {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: 8,
  marginTop: 4,
}

const ghostButton = {
  padding: '6px 14px',
  fontSize: 13,
  lineHeight: '20px',
  borderRadius: 999,
  cursor: 'pointer',
  border: '1px solid var(--dsw-alias-border-l2, var(--dsw-border, currentColor))',
  background: 'transparent',
  color: 'inherit',
}

const dangerButton = {
  ...ghostButton,
  fontWeight: 600,
  border: 'none',
  color: 'var(--dsw-alias-label-primary-foreground, var(--dsw-alias-label-primary-inverted, #fff))',
  background: 'var(--dsw-alias-label-error, var(--dsw-alias-state-error-primary, inherit))',
}

const dangerButtonDisabled = {
  ...dangerButton,
  opacity: 0.5,
  cursor: 'default',
}

/**
 * Confirm removing a library record. Never unlinks the real file.
 * @param {{
 *   t: (key: string) => string,
 *   name: string,
 *   title?: string,
 *   busy: boolean,
 *   onCancel: () => void,
 *   onConfirm: () => void,
 * }} props
 */
export function ConfirmRemoveDialog({ t, name, title, busy, onCancel, onConfirm }) {
  return (
    <div
      style={backdrop}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onCancel()
      }}
    >
      <div
        role="alertdialog"
        aria-modal="true"
        aria-label={t('mapping.remove')}
        style={dialog}
        onKeyDown={(event) => {
          if (event.key === 'Escape') onCancel()
          if (
            event.key === 'Enter' &&
            event.target instanceof HTMLElement &&
            event.target.dataset.confirmRemove === 'true'
          ) {
            onConfirm()
          }
        }}
      >
        <h2 style={heading}>{title || t('mapping.removeTitle').replace('{name}', name)}</h2>
        <p style={hint}>{t('mapping.removeHint')}</p>
        <div style={buttons}>
          <button type="button" style={ghostButton} onClick={onCancel} autoFocus>
            {t('mapping.cancel')}
          </button>
          <button
            type="button"
            style={busy ? dangerButtonDisabled : dangerButton}
            disabled={busy}
            data-confirm-remove="true"
            onClick={onConfirm}
          >
            {t('mapping.removeConfirm')}
          </button>
        </div>
      </div>
    </div>
  )
}
