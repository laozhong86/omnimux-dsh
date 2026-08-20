/** Registers the Experts · Skills · Connectors gallery. */
import { NS, en, zh } from './locales.js'
import { createGalleryStore } from './gallery-store.js'
import { GalleryStage } from './GalleryStage.jsx'
import { mountSidebarEntry } from './sidebar-entry.js'

export const name = 'omnimux-gallery'
export const inject = ['slots', 'locale']

/**
 * @param {{
 *   locale: { register: Function, bind: Function },
 *   slots: { inject: Function, register: Function },
 *   effect?: Function,
 * }} ctx
 */
export function apply(ctx) {
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'omnimux-gallery: dictionaries')
  const t = ctx.locale.bind(NS)
  const gallery = createGalleryStore(() => window.__omnimuxStage)
  ctx.effect(() => mountSidebarEntry(gallery, t, ctx.locale), 'omnimux-gallery: sidebar entry')
  ctx.slots.inject('shell.overlay', () => ctx.slots.register({
    name: 'shell.overlay',
    id: 'omnimux-gallery-stage',
    order: 25,
    locale: NS,
    inject: () => ({ t, gallery }),
  }, GalleryStage))
}
