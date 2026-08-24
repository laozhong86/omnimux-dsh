import { useEffect, useRef, useState } from 'react'

/**
 * Custom dark-themed dropdown select with floating menu and keyboard support.
 * @param {{
 *   value: string,
 *   options: Array<{ value: string, label: string }>,
 *   ariaLabel: string,
 *   disabled?: boolean,
 *   onChange: (value: string) => void,
 * }} props
 */
function DropdownSelect({ value, options, ariaLabel, disabled = false, onChange }) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined
    const onPointerDown = (event) => {
      const target = event.target
      if (containerRef.current && !containerRef.current.contains(target)) {
        setOpen(false)
      }
    }
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const selectedOption = options.find((opt) => opt.value === value)
  const displayLabel = selectedOption ? selectedOption.label : (options[0]?.label ?? value)

  return (
    <div className="omnimux-accounts-dropdown" ref={containerRef}>
      <button
        type="button"
        className={`omnimux-accounts-dropdown-trigger ${open ? 'omnimux-accounts-dropdown-trigger--open' : ''}`}
        aria-label={ariaLabel}
        aria-haspopup="listbox"
        aria-expanded={open}
        disabled={disabled}
        onClick={() => { setOpen((prev) => !prev) }}
      >
        <span className="omnimux-accounts-dropdown-label">{displayLabel}</span>
        <svg
          className="omnimux-accounts-dropdown-chevron"
          viewBox="0 0 16 16"
          width="12"
          height="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m4 6 4 4 4-4" />
        </svg>
      </button>
      {open ? (
        <div className="omnimux-accounts-dropdown-menu" role="listbox" aria-label={ariaLabel}>
          {options.map((option) => {
            const isSelected = option.value === value
            return (
              <button
                key={option.value}
                type="button"
                role="option"
                aria-selected={isSelected}
                className={`omnimux-accounts-dropdown-item ${isSelected ? 'omnimux-accounts-dropdown-item--selected' : ''}`}
                onClick={() => {
                  onChange(option.value)
                  setOpen(false)
                }}
              >
                <span className="omnimux-accounts-dropdown-item-text">{option.label}</span>
                {isSelected ? (
                  <svg
                    className="omnimux-accounts-dropdown-check"
                    viewBox="0 0 16 16"
                    width="12"
                    height="12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m3.5 8.5 3 3 6-6" />
                  </svg>
                ) : null}
              </button>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}

/**
 * Filter toolbar: search, platform / group / status dropdowns (options are
 * derived from live data — a control with no options is not rendered), sort
 * key + direction, and the grid / table view toggle (persisted by the
 * section).
 * @param {{
 *   t: (key: string) => string,
 *   query: string,
 *   platform: string,
 *   group: string,
 *   status: string,
 *   sortKey: string,
 *   sortDir: 'asc' | 'desc',
 *   view: 'grid' | 'table',
 *   platforms: string[],
 *   groups: string[],
 *   statuses: string[],
 *   onFilterChange: (patch: { query?: string, platform?: string, group?: string, status?: string }) => void,
 *   onSortChange: (patch: { key?: string, dir?: 'asc' | 'desc' }) => void,
 *   onViewChange: (view: 'grid' | 'table') => void,
 *   busy: string,
 * }} props
 */
export function FilterBar(props) {
  const { t, query, platform, group, status, sortKey, sortDir, view, platforms, groups, statuses, onFilterChange, onSortChange, onViewChange, busy = '' } = props
  const disabled = busy !== ''
  const sortOptions = [
    { value: 'display_name', label: t('sort.display_name') },
    { value: 'platform', label: t('sort.platform') },
    { value: 'status', label: t('sort.status') },
    { value: 'last_used_at', label: t('sort.lastUsed') },
  ]
  const platformOptions = [
    { value: '', label: `${t('platform')} · ${t('all')}` },
    ...platforms.map((value) => ({ value, label: value })),
  ]
  const groupOptions = [
    { value: '', label: `${t('group')} · ${t('all')}` },
    ...groups.map((value) => ({ value, label: value })),
  ]
  const statusOptions = [
    { value: '', label: `${t('filter.status')} · ${t('all')}` },
    ...statuses.map((value) => ({ value, label: t(`status.${value}`) })),
  ]

  return (
    <div className="omnimux-accounts-filterbar">
      <input
        type="search"
        className="omnimux-accounts-search"
        value={query}
        placeholder={t('filter.search')}
        aria-label={t('filter.search')}
        disabled={disabled}
        onChange={(event) => { onFilterChange({ query: event.currentTarget.value }) }}
      />
      {platforms.length > 0 ? (
        <DropdownSelect
          value={platform}
          options={platformOptions}
          ariaLabel={t('platform')}
          disabled={disabled}
          onChange={(nextPlatform) => { onFilterChange({ platform: nextPlatform }) }}
        />
      ) : null}
      {groups.length > 0 ? (
        <DropdownSelect
          value={group}
          options={groupOptions}
          ariaLabel={t('group')}
          disabled={disabled}
          onChange={(nextGroup) => { onFilterChange({ group: nextGroup }) }}
        />
      ) : null}
      {statuses.length > 0 ? (
        <DropdownSelect
          value={status}
          options={statusOptions}
          ariaLabel={t('filter.status')}
          disabled={disabled}
          onChange={(nextStatus) => { onFilterChange({ status: nextStatus }) }}
        />
      ) : null}
      <div className="omnimux-accounts-filter-actions" role="group" aria-label={t('filter.sort')}>
        <DropdownSelect
          value={sortKey}
          options={sortOptions}
          ariaLabel={t('filter.sort')}
          disabled={disabled}
          onChange={(nextKey) => { onSortChange({ key: nextKey }) }}
        />
        <button
          type="button"
          className="omnimux-accounts-iconbtn"
          aria-label={t('filter.direction')}
          aria-pressed={sortDir === 'desc'}
          disabled={disabled}
          onClick={() => { onSortChange({ dir: sortDir === 'asc' ? 'desc' : 'asc' }) }}
        >
          <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            {sortDir === 'asc' ? <path d="M8 12.5V3.5M4 6.5l4-4 4 4" /> : <path d="M8 3.5v9M4 9.5l4 4 4-4" />}
          </svg>
        </button>
        <button
          type="button"
          className="omnimux-accounts-iconbtn"
          aria-label={t('filter.viewGrid')}
          title={t('filter.viewGrid')}
          aria-pressed={view === 'grid'}
          disabled={disabled}
          onClick={() => { onViewChange('grid') }}
        >
          <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
            <rect x="2.5" y="2.5" width="4.5" height="4.5" rx="1" />
            <rect x="9" y="2.5" width="4.5" height="4.5" rx="1" />
            <rect x="2.5" y="9" width="4.5" height="4.5" rx="1" />
            <rect x="9" y="9" width="4.5" height="4.5" rx="1" />
          </svg>
        </button>
        <button
          type="button"
          className="omnimux-accounts-iconbtn"
          aria-label={t('filter.viewTable')}
          title={t('filter.viewTable')}
          aria-pressed={view === 'table'}
          disabled={disabled}
          onClick={() => { onViewChange('table') }}
        >
          <svg viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true">
            <path d="M2.5 4h11M2.5 8h11M2.5 12h11" />
          </svg>
        </button>
      </div>
    </div>
  )
}
