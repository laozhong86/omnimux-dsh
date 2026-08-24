export const page = {
  padding: '0 20px 24px',
  color: 'var(--dsw-alias-label-primary, var(--dsw-text-primary, inherit))',
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
}

export const toolbar = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: 10,
}

export const search = {
  width: 280,
  maxWidth: '100%',
  flex: '0 1 280px',
  height: 32,
  borderRadius: 8,
  border: '1px solid var(--dsw-alias-border, rgba(255,255,255,0.12))',
  background: 'transparent',
  color: 'inherit',
  padding: '0 10px',
  font: 'inherit',
  fontSize: 13,
}

export const grid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
  alignItems: 'stretch',
  gap: 12,
}

export const card = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  minHeight: 176,
  borderRadius: 12,
  padding: 16,
  background: 'var(--dsw-alias-bg-secondary, rgba(255,255,255,0.04))',
  border: '1px solid var(--dsw-alias-border, rgba(255,255,255,0.08))',
}

export const cardBody = {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  cursor: 'pointer',
  outline: 'none',
}

export const titleRow = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: 10,
}

export const iconBox = {
  width: 36,
  height: 36,
  borderRadius: 10,
  display: 'grid',
  placeItems: 'center',
  background: 'var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.10))',
  color: 'var(--dsw-alias-label-primary, inherit)',
  flex: '0 0 auto',
}

export const titleLine = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  minWidth: 0,
  flex: 1,
  paddingRight: 34, // reserve space for the top-right ⋯ button so the title / badge never overlap it
}

export const title = {
  margin: 0,
  minWidth: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  fontSize: 15,
  fontWeight: 600,
  lineHeight: '22px',
}

export const stateBadge = (state) => {
  if (state === 'installed') {
    return {
      fontSize: 11,
      lineHeight: '16px',
      padding: '2px 8px',
      borderRadius: 999,
      background: 'color-mix(in srgb, var(--dsw-alias-state-success-primary, #4caf7d) 16%, transparent)',
      color: 'var(--dsw-alias-state-success-primary, #4caf7d)',
      whiteSpace: 'nowrap',
    }
  }
  if (state === 'update') {
    return {
      fontSize: 11,
      lineHeight: '16px',
      padding: '2px 8px',
      borderRadius: 999,
      background: 'color-mix(in srgb, var(--dsw-alias-state-business-primary, #4c8dff) 16%, transparent)',
      color: 'var(--dsw-alias-state-business-primary, #4c8dff)',
      whiteSpace: 'nowrap',
    }
  }
  if (state === 'available') {
    return {
      fontSize: 11,
      lineHeight: '16px',
      padding: '2px 8px',
      borderRadius: 999,
      background: 'var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.08))',
      color: 'var(--dsw-alias-label-secondary, rgba(255,255,255,0.72))',
      whiteSpace: 'nowrap',
    }
  }
  return null
}

export const summary = {
  margin: 0,
  fontSize: 13,
  lineHeight: 1.55,
  opacity: 0.72,
}

export const tags = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 6,
}

export const tag = {
  fontSize: 11,
  lineHeight: '16px',
  padding: '2px 8px',
  borderRadius: 999,
  background: 'var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.08))',
  whiteSpace: 'nowrap',
}

export const footer = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: 10,
  marginTop: 'auto',
}

export const pill = (tone) => ({
  flex: '0 0 auto',
  border: tone === 'danger' || tone === 'ghost'
    ? '1px solid var(--dsw-alias-border, rgba(255,255,255,0.16))'
    : 'none',
  borderRadius: 8,
  padding: '4px 10px',
  font: 'inherit',
  fontSize: 13,
  cursor: 'pointer',
  background: tone === 'danger' || tone === 'ghost'
    ? 'transparent'
    : 'var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.12))',
  color: tone === 'danger'
    ? 'var(--dsw-alias-state-error-primary, #e06c75)'
    : 'inherit',
})

export const moreButton = {
  position: 'absolute',
  top: 8,
  right: 8,
  zIndex: 1,
  display: 'grid',
  placeItems: 'center',
  width: 26,
  height: 26,
  padding: 0,
  border: '1px solid var(--dsw-alias-border, rgba(255,255,255,0.16))',
  borderRadius: 8,
  background: 'transparent',
  color: 'inherit',
  font: 'inherit',
  fontSize: 16,
  lineHeight: 1,
  cursor: 'pointer',
}

export const popoverPanel = {
  position: 'absolute',
  top: 40,
  right: 8,
  zIndex: 5,
  minWidth: 200,
  maxWidth: 260,
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  padding: 6,
  borderRadius: 10,
  background: 'var(--dsw-alias-bg-primary, var(--dsw-bg, #16181d))',
  border: '1px solid var(--dsw-alias-border, rgba(255,255,255,0.16))',
  boxShadow: '0 8px 24px var(--dsw-alias-bg-mask-1, rgba(0,0,0,0.35))',
}

export const menuItem = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 2,
  border: 'none',
  borderRadius: 6,
  padding: '6px 10px',
  background: 'transparent',
  color: 'inherit',
  font: 'inherit',
  fontSize: 13,
  textAlign: 'left',
  cursor: 'pointer',
}

export const menuItemHint = {
  fontSize: 11,
  lineHeight: '16px',
  opacity: 0.6,
}

export const menuItemDanger = {
  ...menuItem,
  color: 'var(--dsw-alias-state-error-primary, #e06c75)',
}

export const bubbleText = {
  margin: 0,
  fontSize: 13,
  lineHeight: 1.5,
}

export const bubbleSummary = {
  margin: 0,
  fontSize: 12,
  lineHeight: 1.5,
  opacity: 0.7,
}

export const bubbleActions = {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: 8,
  marginTop: 8,
}

export const gatePanel = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 10,
  padding: 16,
  borderRadius: 12,
  background: 'var(--dsw-alias-bg-secondary, rgba(255,255,255,0.04))',
  border: '1px solid var(--dsw-alias-border, rgba(255,255,255,0.08))',
}

export const gateCode = {
  margin: 0,
  fontSize: 14,
  letterSpacing: 2,
  fontFamily: 'var(--dsw-font-markdown-code-font-family, monospace)',
}

export const muted = { opacity: 0.7, fontSize: 13, margin: 0 }
export const errText = { color: 'var(--dsw-alias-state-error-primary, #e06c75)', fontSize: 13, margin: 0 }
