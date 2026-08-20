/** Client half: locale dictionaries, sidebar entry under 新会话, and the
 *  workflow canvas first-level page on the shell.overlay seat (React 19
 *  island lazy-loaded via CanvasBridge). */
import { NS, en, zh } from './locales.js'
import { createStageStore } from './stage-store.js'
import { mountSidebarEntry } from './sidebar-entry.js'
import { WorkflowStage } from './WorkflowStage.jsx'

export const name = 'omnimux-workflow'
export const inject = ['slots', 'locale', 'product-stage']

/**
 * @param {{
 *   locale: { register: Function, bind: Function },
 *   slots: { inject: Function, register: Function },
 *   get: (name: string) => unknown,
 *   effect?: Function,
 * }} ctx
 */
export function apply(ctx) {
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'omnimux-workflow: dictionaries')
  const t = ctx.locale.bind(NS)
  const stage = createStageStore(ctx.get('product-stage'))
  const stageFace = () => ({ t, stage })
  ctx.effect(() => mountSidebarEntry(stage, t, ctx.locale), 'omnimux-workflow: sidebar entry')
  ctx.slots.inject('shell.overlay', () => ctx.slots.register({
    name: 'shell.overlay',
    id: 'omnimux-workflow-stage',
    order: 40,
    locale: NS,
    inject: stageFace,
  }, WorkflowStage))
}
