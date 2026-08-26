import { Button } from 'dsh-ui-kit'
import { walletUrl } from './quota-failure.js'
import { openAuthUrl } from './use-omnimux-auth.js'

/**
 * Compact recharge affordance under a quota-failed turn.
 * @param {{ t: (key: string) => string, siteBaseUrl?: string }} props
 */
export function QuotaTopUpLink({ t, siteBaseUrl }) {
  const href = walletUrl(siteBaseUrl)
  return (
    <div className="omnimux-quota-topup-row" data-omnimux-quota-topup="">
      <span>{t('quota.hint')}</span>
      <Button
        variant="link"
        size="sm"
        className="omnimux-quota-topup-btn"
        onClick={() => openAuthUrl(href)}
      >
        {t('quota.topUp')}
      </Button>
    </div>
  )
}
