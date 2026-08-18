/** Registers OmniMux profile in Settings and Apps above Settings. */
import { NS, en, zh } from './locales.js'
import { createAppsStore } from './apps-store.js'
import { ProfileSection } from './ProfileSection.jsx'
import { DshPluginsSection } from './DshPluginsSection.jsx'
import { AppsEntry } from './AppsEntry.jsx'
import { AppsStage } from './AppsStage.jsx'
import { configFromWindow, startOverlay } from '../brand/overlay.js'

export const name = 'dsh-omnimux'
export const inject = ['slots', 'locale']

/**
 * @param {{
 *   locale: { register: Function, bind: Function },
 *   slots: { inject: Function, register: Function },
 *   effect?: Function,
 * }} ctx
 */
export function apply(ctx) {
  ctx.effect(
    () => startOverlay(document, configFromWindow(window)),
    'dsh-omnimux: brand overlay',
  )
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'dsh-omnimux: dictionaries')
  const t = ctx.locale.bind(NS)
  const apps = createAppsStore()
  const appsFace = () => ({ t, apps })
  ctx.slots.inject('settings.section', () => ctx.slots.register({
    name: 'settings.section',
    id: 'omnimux-profile',
    order: 5,
    label: () => t('profile.nav'),
    locale: NS,
    inject: () => ({ t }),
  }, ProfileSection))
  ctx.slots.inject('settings.plugins.tab', () => ctx.slots.register({
    name: 'settings.plugins.tab',
    id: 'omnimux-dsh-plugins',
    order: 20,
    label: () => t('dshPlugins.nav'),
    locale: NS,
    inject: () => ({ t }),
  }, DshPluginsSection))
  ctx.slots.inject('shell.overlay', () => ctx.slots.register({
    name: 'shell.overlay',
    id: 'omnimux-apps-stage',
    order: 20,
    locale: NS,
    inject: appsFace,
  }, AppsStage))
  ctx.slots.inject('sidebar.footer.action', () => ctx.slots.register({
    name: 'sidebar.footer.action',
    id: 'omnimux-apps',
    order: 0,
    label: () => t('plugins.nav'),
    locale: NS,
    inject: appsFace,
  }, AppsEntry))
}
