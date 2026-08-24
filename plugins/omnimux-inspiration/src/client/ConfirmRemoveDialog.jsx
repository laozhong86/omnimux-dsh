const backdrop = {
  position: 'fixed',
  inset: 0,
  zIndex: 300,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(0, 0, 0, 0.65)',
  backdropFilter: 'blur(4px)',
}

const dialog = {
  width: 380,
  maxWidth: 'calc(100vw - 48px)',
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  padding: 20,
  borderRadius: 16,
  background: 'var(--omx-color-canvas-raised, #161616)',
  border: '1px solid var(--omx-color-hairline, #282828)',
  color: 'var(--omx-color-ink, #ffffff)',
  boxShadow: '0 16px 36px rgba(0, 0, 0, 0.6)',
  boxSizing: 'border-box',
}

const heading = {
  margin: 0,
  fontSize: 16,
  fontWeight: 600,
  lineHeight: '24px',
}

const hint = {
  margin: 0,
  fontSize: 13,
  lineHeight: '20px',
  color: 'var(--omx-color-muted, #8e8e8e)',
}

const buttons = {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: 10,
  marginTop: 6,
}

const ghostButton = {
  padding: '6px 14px',
  fontSize: 13,
  lineHeight: '20px',
  borderRadius: 999,
  cursor: 'pointer',
  border: '1px solid var(--omx-color-hairline-strong, #3a3a3a)',
  background: 'transparent',
  color: 'inherit',
}

const dangerButton = {
  ...ghostButton,
  fontWeight: 600,
  border: 'none',
  color: '#ffffff',
  background: 'var(--omx-color-error, #ef4444)',
}

/**
 * Confirm deletion of local inspirations (files move to system Trash).
 * @param {{
 *   t: (key: string) => string,
 *   count: number,
 *   busy: boolean,
 *   onCancel: () => void,
 *   onConfirm: () => void,
 * }} props
 */
export function ConfirmRemoveDialog({ t, count, busy, onCancel, onConfirm }) {
  return (
    <div
      style={backdrop}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && !busy) onCancel()
      }}
    >
      <div
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="omnimux-inspiration-remove-title"
        style={dialog}
      >
        <h2 id="omnimux-inspiration-remove-title" style={heading}>
          {t('confirmRemove.title').replace('{n}', String(count))}
        </h2>
        <p style={hint}>
          {t('confirmRemove.description')}
        </p>
        <div style={buttons}>
          <button
            type="button"
            disabled={busy}
            onClick={onCancel}
            style={{ ...ghostButton, cursor: busy ? 'default' : 'pointer' }}
          >
            {t('confirmRemove.cancel')}
          </button>
          <button
            type="button"
            disabled={busy}
            onClick={onConfirm}
            style={{ ...dangerButton, opacity: busy ? 0.6 : 1, cursor: busy ? 'default' : 'pointer' }}
          >
            {busy ? t('confirmRemove.deleting') : t('confirmRemove.confirm')}
          </button>
        </div>
      </div>
    </div>
  )
}
