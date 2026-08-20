import { useState, useSyncExternalStore } from 'react'

const fill = 'var(--dsw-alias-interactive-bg-hover, rgba(255,255,255,0.08))'

const item = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: 8,
  width: '100%',
  height: 32,
  padding: '0 8px',
  margin: '0 0 4px',
  boxSizing: 'border-box',
  border: 'none',
  borderRadius: 8,
  background: 'transparent',
  color: 'var(--dsw-alias-label-primary, inherit)',
  font: 'inherit',
  fontSize: 14,
  fontWeight: 400,
  lineHeight: '22px',
  textAlign: 'left',
  cursor: 'pointer',
}

const railItem = {
  ...item,
  alignSelf: 'flex-start',
  justifyContent: 'center',
  width: 36,
  height: 36,
  padding: 0,
  margin: '0 0 8px',
  gap: 0,
}

function AppsIcon({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true">
      <rect x="1.5" y="1.5" width="5" height="5" rx="1" fill="none" stroke="currentColor" strokeWidth="1.25" />
      <rect x="9.5" y="1.5" width="5" height="5" rx="1" fill="none" stroke="currentColor" strokeWidth="1.25" />
      <rect x="1.5" y="9.5" width="5" height="5" rx="1" fill="none" stroke="currentColor" strokeWidth="1.25" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="1" fill="none" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  )
}

/**
 * @param {{
 *   wide: boolean,
 *   t: (key: string) => string,
 *   apps: { getSnapshot: () => boolean, subscribe: Function, toggle: Function },
 * }} props
 */
export function AppsEntry({ wide, t, apps }) {
  const open = useSyncExternalStore(apps.subscribe, apps.getSnapshot)
  const [hover, setHover] = useState(false)
  return (
    <button
      type="button"
      style={{
        ...(wide ? item : railItem),
        ...(open || hover ? { background: fill } : {}),
      }}
      aria-label={t('plugins.nav')}
      aria-pressed={open}
      onMouseEnter={() => { setHover(true) }}
      onMouseLeave={() => { setHover(false) }}
      onClick={() => { apps?.toggle() }}
    >
      <AppsIcon size={wide ? 16 : 18} />
      {wide && <span>{t('plugins.nav')}</span>}
    </button>
  )
}
