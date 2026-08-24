import { NS, en, zh } from './locales.js'
import { createStageStore } from './stage-store.js'
import { mountSidebarEntry } from './sidebar-entry.js'
import { InspirationStage } from './InspirationStage.jsx'

export const name = 'omnimux-inspiration'
export const inject = ['slots', 'locale']

/**
 * Inspiration renders as a standalone pinned first-level page.
 * @param {{
 *   locale: { register: Function, bind: Function },
 *   slots: { inject: Function, register: Function },
 *   effect?: Function,
 * }} ctx
 */
export function apply(ctx) {
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'omnimux-inspiration: dictionaries')
  const t = ctx.locale.bind(NS)
  const stage = createStageStore(() => window.__omnimuxStage)
  const stageFace = () => ({ t, stage })
  ctx.effect(() => mountSidebarEntry(stage, t, ctx.locale), 'omnimux-inspiration: sidebar entry')
  ctx.slots.inject('shell.overlay', () => ctx.slots.register({
    name: 'shell.overlay',
    id: 'omnimux-inspiration-stage',
    order: 27,
    locale: NS,
    inject: stageFace,
  }, InspirationStage))
}
