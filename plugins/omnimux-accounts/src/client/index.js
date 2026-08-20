import { NS, en, zh } from './locales.js'
import { AccountsStage } from './AccountsStage.jsx'

export const name = 'omnimux-accounts'
export const inject = ['slots', 'locale', 'product-stage']

/**
 * The Accounts app renders as a standalone product stage (opened by the hub
 * Apps card through the `omnimux-app-open` event), not as a Settings
 * seat. See docs/contracts/settings-ui.md.
 * @param {{
 *   locale: { register: Function, bind: Function },
 *   slots: { inject: Function, register: Function },
 *   get: (name: string) => unknown,
 *   effect?: Function,
 * }} ctx
 */
export function apply(ctx) {
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'omnimux-accounts: dictionaries')
  const t = ctx.locale.bind(NS)
  const stage = ctx.get('product-stage')
  ctx.slots.inject('shell.overlay', () => ctx.slots.register({
    name: 'shell.overlay',
    id: 'omnimux-app-accounts',
    order: 21,
    locale: NS,
    inject: () => ({ t, stage }),
  }, AccountsStage))
}
