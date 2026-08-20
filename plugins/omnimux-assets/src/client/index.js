/** Client half: locale dictionaries, sidebar entry under 新会话, and the
 *  assets first-level page on the shell.overlay seat. */
import { NS, en, zh } from './locales.js'
import { createStageStore } from './stage-store.js'
import { mountSidebarEntry } from './sidebar-entry.js'
import { AssetsStage } from './AssetsStage.jsx'

export const name = 'omnimux-assets'
export const inject = ['slots', 'locale']

/**
 * @param {{
 *   locale: { register: Function, bind: Function },
 *   slots: { inject: Function, register: Function },
 *   effect?: Function,
 * }} ctx
 */
export function apply(ctx) {
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'omnimux-assets: dictionaries')
  const t = ctx.locale.bind(NS)
  const stage = createStageStore()
  const stageFace = () => ({ t, stage })
  ctx.effect(() => mountSidebarEntry(stage, t, ctx.locale), 'omnimux-assets: sidebar entry')
  ctx.slots.inject('shell.overlay', () => ctx.slots.register({
    name: 'shell.overlay',
    id: 'omnimux-assets-stage',
    order: 30,
    locale: NS,
    inject: stageFace,
  }, AssetsStage))
}
