/** Client half: locale dictionaries, sidebar entry under 新会话, and the
 *  publish first-level page on the shell.overlay seat.
 *  装载件范式完整复制 omnimux-accounts（ModuleLoader id = omnimux-publish）。 */
import { NS, en, zh } from './locales.js'
import { createStageStore } from './stage-store.js'
import { mountSidebarEntry } from './sidebar-entry.js'
import { PublishStage } from './PublishStage.jsx'
import { ensureCss } from './styles.js'

export const name = 'omnimux-publish'
export const inject = ['slots', 'locale']

/**
 * @param {{
 *   locale: { register: Function, bind: Function },
 *   slots: { inject: Function, register: Function },
 *   effect?: Function,
 * }} ctx
 */
export function apply(ctx) {
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'omnimux-publish: dictionaries')
  ctx.effect(() => ensureCss(), 'omnimux-publish: styles')
  const t = ctx.locale.bind(NS)
  const stage = createStageStore(() => window.__omnimuxStage)
  const stageFace = () => ({ t, stage })
  ctx.effect(() => mountSidebarEntry(stage, t, ctx.locale), 'omnimux-publish: sidebar entry')
  ctx.slots.inject('shell.overlay', () => ctx.slots.register({
    name: 'shell.overlay',
    id: 'omnimux-publish-stage',
    order: 22,
    locale: NS,
    inject: stageFace,
  }, PublishStage))
}
