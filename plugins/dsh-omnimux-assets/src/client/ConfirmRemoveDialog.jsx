const backdrop = {
  position: 'fixed',
  inset: 0,
  zIndex: 300,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(0,0,0,.4)',
}

const dialog = {
  width: 360,
  maxWidth: 'calc(100vw - 48px)',
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  padding: 20,
  borderRadius: 12,
  background: 'var(--dsw-alias-bg-elevated, var(--dsw-bg, #1c1c1c))',
  border: '1px solid var(--dsw-alias-border, var(--dsw-border, rgba(128,128,128,.35)))',
  boxShadow: '0 8px 32px rgba(0,0,0,.32)',
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
  color: 'var(--dsw-alias-label-secondary, var(--dsw-text-secondary, rgba(128,128,128,.9)))',
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
  borderRadius: 6,
  cursor: 'pointer',
  border: '1px solid var(--dsw-alias-border, var(--dsw-border, currentColor))',
  background: 'transparent',
  color: 'inherit',
}

const dangerButton = {
  ...ghostButton,
  fontWeight: 600,
  border: 'none',
  color: 'var(--dsw-alias-label-on-interactive, #fff)',
  background: 'var(--dsw-alias-label-danger, #d45656)',
}

const dangerButtonDisabled = {
  ...dangerButton,
  opacity: 0.5,
  cursor: 'default',
}

/**
 * Inline remove-confirmation modal. Carries the red-line hint: removing a
 * mapping only drops it from this list and never touches the real file.
 * @param {{
 *   t: (key: string) => string,
 *   name: string,
 *   busy: boolean,
 *   onCancel: () => void,
 *   onConfirm: () => void,
 * }} props
 */
export function ConfirmRemoveDialog({ t, name, busy, onCancel, onConfirm }) {
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
          if (event.key === 'Enter') onConfirm()
        }}
      >
        <h2 style={heading}>{t('mapping.removeTitle').replace('{name}', name)}</h2>
        <p style={hint}>{t('mapping.removeHint')}</p>
        <div style={buttons}>
          <button type="button" style={ghostButton} onClick={onCancel} autoFocus>
            {t('mapping.cancel')}
          </button>
          <button
            type="button"
            style={busy ? dangerButtonDisabled : dangerButton}
            disabled={busy}
            onClick={onConfirm}
          >
            {t('mapping.removeConfirm')}
          </button>
        </div>
      </div>
    </div>
  )
}
