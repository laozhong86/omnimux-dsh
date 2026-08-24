const backdrop = {
  position: 'fixed',
  inset: 0,
  zIndex: 300,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'var(--dsw-alias-bg-mask-1)',
}

const dialog = {
  width: 360,
  maxWidth: 'calc(100vw - 48px)',
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  padding: 20,
  borderRadius: 16,
  background: 'var(--dsw-alias-bg-base)',
  border: '1px solid var(--dsw-alias-border-l2)',
  color: 'var(--dsw-alias-label-primary)',
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
  color: 'var(--dsw-alias-label-secondary)',
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
  border: '1px solid var(--dsw-alias-border-l2)',
  background: 'transparent',
  color: 'inherit',
}

const dangerButton = {
  ...ghostButton,
  fontWeight: 600,
  border: 'none',
  color: 'var(--dsw-alias-label-primary-foreground)',
  background: 'var(--dsw-alias-label-error)',
}

/**
 * Confirm removing a library record. Never unlinks the real file.
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
        aria-label={t('remove.confirm')}
        style={dialog}
        onKeyDown={(event) => {
          if (event.key === 'Escape') onCancel()
        }}
      >
        <h2 style={heading}>{t('remove.title').replace('{name}', name)}</h2>
        <p style={hint}>{t('remove.hint')}</p>
        <div style={buttons}>
          <button type="button" style={ghostButton} onClick={onCancel} autoFocus>
            {t('remove.cancel')}
          </button>
          <button
            type="button"
            style={{ ...dangerButton, ...(busy ? { opacity: 0.5, cursor: 'default' } : {}) }}
            disabled={busy}
            onClick={onConfirm}
          >
            {t('remove.confirm')}
          </button>
        </div>
      </div>
    </div>
  )
}
