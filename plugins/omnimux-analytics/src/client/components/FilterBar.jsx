import { FilterBar as KitFilterBar, SearchField, DropdownSelect } from 'dsh-ui-kit'
import { PLATFORMS, PROFILE_OPTIONS, RANGE_OPTIONS, SOURCE_OPTIONS } from '../constants.js'

/**
 * Layer 3: 48px single-row cascade — platform, account, source, range + 220px search.
 */
export function FilterBar({ t, query, onChange, disabled }) {
  const platformOptions = [
    { value: 'all', label: t('filter.platform.all') },
    ...PLATFORMS.map((id) => ({ value: id, label: t(`platform.${id}`) })),
  ]
  const profileOptions = PROFILE_OPTIONS.map((opt) => ({ value: opt.value, label: t(opt.labelKey) }))
  const sourceOptions = SOURCE_OPTIONS.map((opt) => ({ value: opt.value, label: t(opt.labelKey) }))
  const rangeOptions = RANGE_OPTIONS.map((opt) => ({ value: opt.value, label: t(opt.labelKey) }))

  return (
    <div className="omnimux-analytics-stage-filter">
      <KitFilterBar
        className="omnimux-analytics-filterbar"
        filters={(
          <>
            <DropdownSelect
              value={query.platform}
              options={platformOptions}
              aria-label={t('filter.platform')}
              disabled={disabled}
              onChange={(platform) => onChange({ platform })}
            />
            <DropdownSelect
              value={query.profileId}
              options={profileOptions}
              aria-label={t('filter.account')}
              disabled={disabled}
              onChange={(profileId) => onChange({ profileId })}
            />
            <DropdownSelect
              value={query.source}
              options={sourceOptions}
              aria-label={t('filter.source')}
              disabled={disabled}
              onChange={(source) => onChange({ source })}
            />
            <DropdownSelect
              value={query.timeRange}
              options={rangeOptions}
              aria-label={t('filter.timeRange')}
              disabled={disabled}
              onChange={(timeRange) => onChange({ timeRange })}
            />
          </>
        )}
        search={(
          <div className="omnimux-analytics-search">
            <SearchField
              value={query.searchQuery}
              placeholder={t('filter.search')}
              aria-label={t('filter.search')}
              disabled={disabled}
              debounceMs={0}
              stretch
              onValueChange={(searchQuery) => onChange({ searchQuery })}
            />
          </div>
        )}
      />
    </div>
  )
}
