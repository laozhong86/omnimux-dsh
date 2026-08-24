export const tokens = {
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

export const page = {
  padding: '20px',
  color: tokens.text,
  display: 'flex',
  flexDirection: 'column',
  gap: 14,
  maxWidth: 520,
}

export const card = {
  background: tokens.card,
  border: `1px solid ${tokens.border}`,
  borderRadius: 10,
  padding: '14px 16px',
}

export const label = { fontSize: 13, color: tokens.textSecondary }
export const value = { fontSize: 13, color: tokens.text, wordBreak: 'break-all', textAlign: 'right' }

export const hoverStyles = `
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

export function money(value) {
  return typeof value === 'number' ? `$${value.toFixed(2)}` : '—'
}
