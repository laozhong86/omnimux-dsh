import { NS, en, zh } from './locales.js'
import { AccountsStage } from './AccountsStage.jsx'

export const name = 'omnimux-accounts'
export const inject = ['slots', 'locale']

/**
 * The Accounts app renders as a standalone product stage (opened by the hub
 * Apps card through the `omnimux-app-open` event), not as a Settings
 * seat. See docs/contracts/settings-ui.md.
 * @param {{
 *   locale: { register: Function, bind: Function },
 *   slots: { inject: Function, register: Function },
 *   effect?: Function,
 * }} ctx
 */
export function apply(ctx) {
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'omnimux-accounts: dictionaries')
  const t = ctx.locale.bind(NS)
  ctx.slots.inject('shell.overlay', () => ctx.slots.register({
    name: 'shell.overlay',
    id: 'omnimux-app-accounts',
    order: 21,
    locale: NS,
    inject: () => ({ t }),
  }, AccountsStage))
}
