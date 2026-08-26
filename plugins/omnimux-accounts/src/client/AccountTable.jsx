import { Button } from 'dsh-ui-kit'
import { AccountMenu, AgentSwitch } from './account-controls.jsx'
import { Avatar, GroupChip, PlatformChip, StatusDot } from './chips.jsx'
import { fmt, localeText, relativeTime, selectAllState } from './view.js'

/**
 * Column model. `sortKey` maps onto view.js sortAccounts (null = not
 * sortable, e.g. the free-text group column).
 */
const COLUMNS = [
  { id: 'name', labelKey: 'sort.display_name', sortKey: 'display_name' },
  { id: 'platform', labelKey: 'sort.platform', sortKey: 'platform' },
  { id: 'group', labelKey: 'group', sortKey: null },
  { id: 'status', labelKey: 'sort.status', sortKey: 'status' },
  { id: 'lastUsed', labelKey: 'sort.lastUsed', sortKey: 'last_used_at' },
]

/**
 * Dense table view. Semantics: thead sticky (styles.js), sortable headers
 * synced with the FilterBar sort controls, select-all checkbox column, and
 * per-row ⋯ menu with disconnect confirm — identical interactions to the
 * grid card.
 * @param {{
 *   t: (key: string) => string,
 *   accounts: Array<Record<string, unknown>>,
 *   selected: Set<string>,
 *   sortKey: string,
 *   sortDir: 'asc' | 'desc',
 *   busy: string,
 *   onSortHeader: (key: string) => void,
 *   onToggleSelect: (id: string) => void,
 *   onToggleSelectAll: () => void,
 *   onAgentToggle: (id: string, next: boolean) => void,
 *   onDisconnect: (id: string) => void,
 * }} props
 */
export function AccountTable(props) {
  const { t, accounts, selected, sortKey, sortDir, busy = '', onSortHeader, onToggleSelect, onToggleSelectAll, onAgentToggle, onDisconnect } = props
  const disabled = busy !== ''
  const checkState = selectAllState(accounts, selected)

  /**
   * @param {Record<string, unknown>} account
   */
  const rowName = (account) => [account.display_name, account.username, account.name]
    .find((value) => typeof value === 'string' && value !== '') || String(account.id)

  return (
    <div className="omnimux-accounts-tablewrap">
      <table className="omnimux-accounts-table">
        <thead>
          <tr>
            <th scope="col" className="omnimux-accounts-table-check">
              <input
                type="checkbox"
                checked={checkState.all}
                ref={(node) => {
                  if (node) node.indeterminate = checkState.some && !checkState.all
                }}
                aria-label={t('bulk.selectAll')}
                disabled={disabled || accounts.length === 0}
                onChange={onToggleSelectAll}
              />
            </th>
            {COLUMNS.map((column) => (
              <th
                key={column.id}
                scope="col"
                aria-sort={column.sortKey && sortKey === column.sortKey ? (sortDir === 'asc' ? 'ascending' : 'descending') : 'none'}
              >
                {column.sortKey ? (
                  <Button
                    variant="ghost"
                    size="xs"
                    className="omnimux-accounts-sortbtn"
                    disabled={disabled}
                    onClick={() => { onSortHeader(column.sortKey) }}
                  >
                    {t(column.labelKey)}
                    <span className="omnimux-accounts-sortmark" aria-hidden="true">
                      {sortKey === column.sortKey ? (sortDir === 'asc' ? '↑' : '↓') : '↕'}
                    </span>
                  </Button>
                ) : (
                  <span className="omnimux-accounts-thtext">{t(column.labelKey)}</span>
                )}
              </th>
            ))}
            <th scope="col"><span className="omnimux-accounts-thtext">{t('card.agentUsable')}</span></th>
            <th scope="col"><span className="omnimux-accounts-thtext">{t('card.menu')}</span></th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => {
            const id = String(account.id)
            const name = rowName(account)
            const username = typeof account.username === 'string' && account.username !== '' ? `@${account.username}` : ''
            const status = typeof account.status === 'string' ? account.status : ''
            const statusLabel = localeText(t, `status.${status}`, status)
            const lastUsed = typeof account.last_used_at === 'string' ? relativeTime(account.last_used_at) : ''
            const isSelected = selected.has(id)
            return (
              <tr key={id} className={isSelected ? 'omnimux-accounts-row-selected' : undefined} data-busy={disabled}>
                <td className="omnimux-accounts-table-check">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    aria-label={fmt(t('bulk.selectRow'), { name })}
                    disabled={disabled}
                    onChange={() => { onToggleSelect(id) }}
                  />
                </td>
                <td>
                  <div className="omnimux-accounts-cell-id">
                    <Avatar account={account} t={t} />
                    <div className="omnimux-accounts-id">
                      <span className="omnimux-accounts-name">{name}</span>
                      {username !== '' ? <span className="omnimux-accounts-username">{username}</span> : null}
                    </div>
                  </div>
                </td>
                <td>
                  {typeof account.platform === 'string' && account.platform !== '' ? (
                    <PlatformChip platform={account.platform} t={t} />
                  ) : null}
                </td>
                <td>
                  {typeof account.group === 'string' && account.group !== '' ? (
                    <GroupChip group={account.group} />
                  ) : null}
                </td>
                <td>
                  {status !== '' ? (
                    <div className={`omnimux-accounts-status omnimux-accounts-status--${status}`}>
                      <StatusDot status={status} label={statusLabel} />
                      <span>{statusLabel}</span>
                    </div>
                  ) : null}
                </td>
                <td>
                  {lastUsed !== '' ? (
                    <span className="omnimux-accounts-meta">{lastUsed}</span>
                  ) : null}
                </td>
                <td>
                  <AgentSwitch
                    t={t}
                    checked={account.agent_usable !== false}
                    disabled={disabled}
                    onToggle={(next) => { onAgentToggle(id, next) }}
                  />
                </td>
                <td>
                  <span className="omnimux-accounts-cellmenu">
                    <AccountMenu t={t} name={name} disabled={disabled} onDisconnect={() => { onDisconnect(id) }} />
                  </span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
