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
    { key: 'display_name', label: t('sort.display_name') },
    { key: 'platform', label: t('sort.platform') },
    { key: 'status', label: t('sort.status') },
    { key: 'last_used_at', label: t('sort.lastUsed') },
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
        <select
          className="omnimux-accounts-select"
          value={platform}
          aria-label={t('platform')}
          disabled={disabled}
          onChange={(event) => { onFilterChange({ platform: event.currentTarget.value }) }}
        >
          <option value="">{t('platform')} · {t('all')}</option>
          {platforms.map((value) => <option key={value} value={value}>{value}</option>)}
        </select>
      ) : null}
      {groups.length > 0 ? (
        <select
          className="omnimux-accounts-select"
          value={group}
          aria-label={t('group')}
          disabled={disabled}
          onChange={(event) => { onFilterChange({ group: event.currentTarget.value }) }}
        >
          <option value="">{t('group')} · {t('all')}</option>
          {groups.map((value) => <option key={value} value={value}>{value}</option>)}
        </select>
      ) : null}
      {statuses.length > 0 ? (
        <select
          className="omnimux-accounts-select"
          value={status}
          aria-label={t('filter.status')}
          disabled={disabled}
          onChange={(event) => { onFilterChange({ status: event.currentTarget.value }) }}
        >
          <option value="">{t('filter.status')} · {t('all')}</option>
          {statuses.map((value) => <option key={value} value={value}>{t(`status.${value}`)}</option>)}
        </select>
      ) : null}
      <select
        className="omnimux-accounts-select"
        value={sortKey}
        aria-label={t('filter.sort')}
        disabled={disabled}
        onChange={(event) => { onSortChange({ key: event.currentTarget.value }) }}
      >
        {sortOptions.map((option) => <option key={option.key} value={option.key}>{option.label}</option>)}
      </select>
      <button
        type="button"
        className="omnimux-accounts-iconbtn"
        aria-label={t('filter.direction')}
        aria-pressed={sortDir === 'desc'}
        disabled={disabled}
        onClick={() => { onSortChange({ dir: sortDir === 'asc' ? 'desc' : 'asc' }) }}
      >
        {sortDir === 'asc' ? '↑' : '↓'}
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
        ⊞
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
        ≣
      </button>
    </div>
  )
}
