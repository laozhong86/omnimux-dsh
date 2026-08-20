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

function GalleryIcon({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="5" cy="6" r="2.1" fill="none" stroke="currentColor" strokeWidth="1.25" />
      <circle cx="11" cy="6" r="2.1" fill="none" stroke="currentColor" strokeWidth="1.25" />
      <path d="M2.5 13c.6-2 2-3 3.5-3s2.9 1 3.5 3" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M9 13c.4-1.3 1.3-2 2.5-2s2 .6 2.5 2" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  )
}

/**
 * @param {{
 *   wide: boolean,
 *   t: (key: string) => string,
 *   gallery: { getSnapshot: () => boolean, subscribe: Function, toggle: Function },
 * }} props
 */
export function GalleryEntry({ wide, t, gallery }) {
  const open = useSyncExternalStore(gallery.subscribe, gallery.getSnapshot)
  const [hover, setHover] = useState(false)
  return (
    <button
      type="button"
      style={{
        ...(wide ? item : railItem),
        ...(open || hover ? { background: fill } : {}),
      }}
      aria-label={t('nav')}
      aria-pressed={open}
      onMouseEnter={() => { setHover(true) }}
      onMouseLeave={() => { setHover(false) }}
      onClick={() => { gallery?.toggle() }}
    >
      <GalleryIcon size={wide ? 16 : 18} />
      {wide && <span>{t('nav')}</span>}
    </button>
  )
}
