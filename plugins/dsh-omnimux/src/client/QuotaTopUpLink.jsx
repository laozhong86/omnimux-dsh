import { walletUrl } from './quota-failure.js'
import { openAuthUrl } from './use-omnimux-auth.js'

const row = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  margin: '4px 0 0',
  fontSize: 13,
  lineHeight: '20px',
}

const link = {
  color: 'var(--dsw-alias-label-accent, var(--dsw-text-primary, inherit))',
  cursor: 'pointer',
  background: 'none',
  border: 'none',
  padding: 0,
  font: 'inherit',
  textDecoration: 'underline',
}

/**
 * Compact recharge affordance under a quota-failed turn.
 * @param {{ t: (key: string) => string, siteBaseUrl?: string }} props
 */
export function QuotaTopUpLink({ t, siteBaseUrl }) {
  const href = walletUrl(siteBaseUrl)
  return (
    <div style={row} data-omnimux-quota-topup="">
      <span>{t('quota.hint')}</span>
      <button type="button" style={link} onClick={() => openAuthUrl(href)}>
        {t('quota.topUp')}
      </button>
    </div>
  )
}
