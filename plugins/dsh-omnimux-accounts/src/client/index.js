import { NS, en, zh } from './locales.js'
import { AccountsSection } from './AccountsSection.jsx'

export const name = 'dsh-omnimux-accounts'
export const inject = ['slots', 'locale']

/**
 * @param {{
 *   locale: { register: Function, bind: Function },
 *   slots: { inject: Function, register: Function },
 *   effect?: Function,
 * }} ctx
 */
export function apply(ctx) {
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'dsh-omnimux-accounts: dictionaries')
  const t = ctx.locale.bind(NS)
  ctx.slots.inject('settings.plugins.tab', () => ctx.slots.register({
    name: 'settings.plugins.tab',
    id: 'omnimux-accounts',
    order: 30,
    label: () => t('nav'),
    locale: NS,
    inject: () => ({ t }),
  }, AccountsSection))
}
