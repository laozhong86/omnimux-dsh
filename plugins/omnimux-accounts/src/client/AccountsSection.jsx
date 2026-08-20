import { useEffect, useMemo, useState } from 'react'
import { AccountCard } from './AccountCard.jsx'
import { FilterBar } from './FilterBar.jsx'
import { OverviewBar } from './OverviewBar.jsx'
import { useAccounts } from './use-accounts.js'
import { injectAccountsStyles } from './styles.js'
import { filterAccounts, presentStatuses, sortAccounts, summarize, uniqueValues } from './view.js'

const SKELETON_CARDS = 8

/**
 * Accounts page body: overview strip + filter toolbar + card grid, with the
 * loading skeleton, need-login gate, error bar and (simple) empty state.
 * The full empty state and the connect dialog arrive in T04; until then the
 * CTA falls back to the v0.1 platform-input + auth_url flow.
 * @param {{ t: (key: string) => string }} props
 */
export function AccountsSection({ t }) {
  useEffect(() => {
    injectAccountsStyles()
  }, [])

  const { phase, accounts, error, busy, connect, patch, disconnect } = useAccounts()

  const [filters, setFilters] = useState({ query: '', platform: '', group: '', status: '' })
  const [sortKey, setSortKey] = useState('display_name')
  const [sortDir, setSortDir] = useState('asc')
  const [connectOpen, setConnectOpen] = useState(false)
  const [nextPlatform, setNextPlatform] = useState('')

  const summary = useMemo(() => summarize(accounts), [accounts])
  const platforms = useMemo(() => uniqueValues(accounts, 'platform'), [accounts])
  const groups = useMemo(() => uniqueValues(accounts, 'group'), [accounts])
  const statuses = useMemo(() => presentStatuses(accounts), [accounts])
  const visible = useMemo(
    () => sortAccounts(filterAccounts(accounts, filters), sortKey, sortDir),
    [accounts, filters, sortKey, sortDir],
  )

  /**
   * Overview stat click → filter patch. `null` clears every filter.
   * @param {{ status?: string, platform?: string } | null} filter
   */
  const onFilterClick = (filter) => {
    if (filter === null) {
      setFilters({ query: '', platform: '', group: '', status: '' })
      return
    }
    setFilters((current) => ({ ...current, ...filter }))
  }

  const onConnect = () => {
    setConnectOpen(true)
  }

  const onConnectSubmit = () => {
    const platform = nextPlatform.trim()
    if (platform === '') return
    void connect(platform).then((ok) => {
      if (ok) {
        setNextPlatform('')
        setConnectOpen(false)
      }
    })
  }

  if (phase === 'loading') {
    return (
      <div className="omnimux-accounts-root" role="status" aria-label={t('loading')}>
        <div className="omnimux-accounts-skeleton" aria-hidden="true">
          {Array.from({ length: SKELETON_CARDS }, (_, index) => (
            <div key={index} className="omnimux-accounts-skeleton-card" />
          ))}
        </div>
      </div>
    )
  }

  if (phase === 'need-login') {
    return (
      <div className="omnimux-accounts-root">
        <p className="omnimux-accounts-muted">{t('needLogin')}</p>
        <p className="omnimux-accounts-muted">{t('needLoginHint')}</p>
      </div>
    )
  }

  return (
    <div className="omnimux-accounts-root">
      <OverviewBar t={t} summary={summary} onConnect={onConnect} onFilterClick={onFilterClick} busy={busy} />
      {connectOpen ? (
        <div className="omnimux-accounts-filterbar" style={{ position: 'static' }}>
          <input
            type="text"
            className="omnimux-accounts-search"
            style={{ flex: '0 1 240px' }}
            value={nextPlatform}
            placeholder={t('platformHint')}
            aria-label={t('platformHint')}
            disabled={busy !== ''}
            onChange={(event) => { setNextPlatform(event.currentTarget.value) }}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault()
                onConnectSubmit()
              }
            }}
          />
          <button
            type="button"
            className="omnimux-accounts-btn omnimux-accounts-btn--primary"
            disabled={busy !== '' || nextPlatform.trim() === ''}
            onClick={onConnectSubmit}
          >
            {t('connect')}
          </button>
          <button
            type="button"
            className="omnimux-accounts-btn"
            disabled={busy !== ''}
            onClick={() => { setConnectOpen(false) }}
          >
            {t('action.cancel')}
          </button>
        </div>
      ) : null}
      {accounts.length > 0 ? (
        <FilterBar
          t={t}
          query={filters.query}
          platform={filters.platform}
          group={filters.group}
          status={filters.status}
          sortKey={sortKey}
          sortDir={sortDir}
          platforms={platforms}
          groups={groups}
          statuses={statuses}
          onFilterChange={(patchFilters) => { setFilters((current) => ({ ...current, ...patchFilters })) }}
          onSortChange={(patchSort) => {
            if (patchSort.key !== undefined) setSortKey(patchSort.key)
            if (patchSort.dir !== undefined) setSortDir(patchSort.dir)
          }}
          busy={busy}
        />
      ) : null}
      {error !== '' ? <p className="omnimux-accounts-error" role="alert">{error}</p> : null}
      {accounts.length === 0 ? (
        <div className="omnimux-accounts-empty">
          <p className="omnimux-accounts-empty-text">{t('empty.none')}</p>
          <p className="omnimux-accounts-empty-text">{t('empty.noneHint')}</p>
          <button
            type="button"
            className="omnimux-accounts-btn omnimux-accounts-btn--primary"
            disabled={busy !== ''}
            onClick={onConnect}
          >
            {t('connect')}
          </button>
        </div>
      ) : visible.length === 0 ? (
        <p className="omnimux-accounts-muted">{t('filter.noResults')}</p>
      ) : (
        <div className="omnimux-accounts-grid">
          {visible.map((account) => (
            <AccountCard
              key={String(account.id)}
              t={t}
              account={account}
              busy={busy}
              onAgentToggle={(id, next) => { void patch(id, { agent_usable: next }) }}
              onDisconnect={(id) => { void disconnect(id) }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
