import { NS, en, zh } from './locales.js'
import { createStageStore } from './stage-store.js'
import { mountSidebarEntry } from './sidebar-entry.js'
import { AccountsStage } from './AccountsStage.jsx'

export const name = 'omnimux-accounts'
export const inject = ['slots', 'locale']

/**
 * Accounts renders as a standalone pinned first-level page (its own sidebar
 * row under 新会话, opened directly via the shared product stage), not as an
 * Apps-catalog app and not as a Settings seat. See
 * docs/contracts/settings-ui.md.
 * @param {{
 *   locale: { register: Function, bind: Function },
 *   slots: { inject: Function, register: Function },
 *   effect?: Function,
 * }} ctx
 */
export function apply(ctx) {
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'omnimux-accounts: dictionaries')
  const t = ctx.locale.bind(NS)
  const stage = createStageStore(() => window.__omnimuxStage)
  const stageFace = () => ({ t, stage })
  ctx.effect(() => mountSidebarEntry(stage, t, ctx.locale), 'omnimux-accounts: sidebar entry')
  ctx.slots.inject('shell.overlay', () => ctx.slots.register({
    name: 'shell.overlay',
    id: 'omnimux-accounts-stage',
    order: 21,
    locale: NS,
    inject: stageFace,
  }, AccountsStage))
}
