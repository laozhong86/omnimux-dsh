/** Client half: locale dictionaries, sidebar entry under 新会话, and the
 *  analytics first-level page on the shell.overlay seat (order 22). */
import { NS, en, zh } from './locales.js'
import { OVERLAY_ORDER, SLOT_ID } from './defaults.js'
import { createStageStore } from './stage-store.js'
import { mountSidebarEntry } from './sidebar-entry.js'
import { AnalyticsStage } from './AnalyticsStage.jsx'

export const name = 'omnimux-analytics'
export const inject = ['slots', 'locale']

/**
 * Analytics renders as a standalone pinned first-level page.
 * Host Umami hooks stay in src/index.js and are independent of this Stage.
 * @param {{
 *   locale: { register: Function, bind: Function },
 *   slots: { inject: Function, register: Function },
 *   effect?: Function,
 * }} ctx
 */
export function apply(ctx) {
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'omnimux-analytics: dictionaries')
  const t = ctx.locale.bind(NS)
  const stage = createStageStore(() => window.__omnimuxStage)
  const stageFace = () => ({ t, stage })
  ctx.effect(() => mountSidebarEntry(stage, t, ctx.locale), 'omnimux-analytics: sidebar entry')
  ctx.slots.inject('shell.overlay', () => ctx.slots.register({
    name: 'shell.overlay',
    id: SLOT_ID,
    order: OVERLAY_ORDER,
    locale: NS,
    inject: stageFace,
  }, AnalyticsStage))
}
