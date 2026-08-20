/**
 * Overview strip: four clickable stat numbers (connected / needs attention /
 * platforms / total). The "+ Connect" CTA is rendered separately by
 * AccountsSection above this strip — it is the page-level primary action,
 * not an overview element.
 * @param {{
 *   t: (key: string) => string,
 *   summary: { total: number, connected: number, needsAttention: number, platformCount: number },
 *   onFilterClick: (filter: { status?: string, platform?: string } | null) => void,
 *   busy: string,
 * }} props
 */
export function OverviewBar({ t, summary, onFilterClick, busy = '' }) {
  const stats = [
    { key: 'connected', label: t('overview.connected'), value: summary.connected, filter: { status: 'active' } },
    { key: 'needsAttention', label: t('overview.needsAttention'), value: summary.needsAttention, filter: { status: 'expired' } },
    { key: 'platforms', label: t('overview.platforms'), value: summary.platformCount, filter: { platform: '' } },
    { key: 'total', label: t('overview.total'), value: summary.total, filter: null },
  ]
  return (
    <div className="omnimux-accounts-overview-row">
      <div className="omnimux-accounts-overview">
        {stats.map((stat) => (
          <button
            key={stat.key}
            type="button"
            className="omnimux-accounts-stat"
            disabled={busy !== ''}
            onClick={() => { onFilterClick(stat.filter) }}
          >
            <span className="omnimux-accounts-stat-value">{String(stat.value)}</span>
            <span className="omnimux-accounts-stat-label">{stat.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
