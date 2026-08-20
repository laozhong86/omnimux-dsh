/** Registers OmniMux profile in Settings and Apps under 新会话. */
import { NS, en, zh } from './locales.js'
import { createAppsStore } from './apps-store.js'
import { ProfileSection } from './ProfileSection.jsx'
import { DshPluginsSection } from './DshPluginsSection.jsx'
import { AppsStage } from './AppsStage.jsx'
import { mountSidebarEntry } from './sidebar-entry.js'
import { mountAppTabs } from './app-tabs.js'
import { configFromWindow, startOverlay } from '../brand/overlay.js'
import { ensureProductStageChrome } from './conversation-box.js'
import { installStageGlobal } from './stage.js'
import { installSidebarGlobal, SIDEBAR_GLOBAL } from './sidebar-coordinator.js'

export const name = 'omnimux'
export const inject = ['slots', 'locale']

/**
 * Client seam for vertical plugins: single source of truth for the
 * first-level product stage. `installStageGlobal()` installs
 * `window.__omnimuxStage` at module top-level; vertical plugins read it in
 * their own `apply()` instead of shipping a copy or depending on
 * cross-plugin client service ordering. Only the hub installs the chrome
 * style and the document click listener, so concurrent verticals cannot
 * double-register global side-effects (the duplicate-copy race that wedged
 * the page).
 * @param {{
 *   locale: { register: Function, bind: Function },
 *   slots: { inject: Function, register: Function },
 *   effect?: Function,
 * }} ctx
 */
export function apply(ctx) {
  installStageGlobal()
  installSidebarGlobal()
  ctx.effect(
    () => startOverlay(document, configFromWindow(window)),
    'omnimux: brand overlay',
  )
  ctx.effect(() => {
    ensureProductStageChrome()
    return () => {}
  }, 'omnimux: product-stage chrome')
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'omnimux: dictionaries')
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
  ctx.effect(() => mountSidebarEntry(apps, t, ctx.locale, SIDEBAR_GLOBAL().register), 'omnimux: sidebar apps entry')
  ctx.effect(() => mountAppTabs(t, ctx.locale, SIDEBAR_GLOBAL().register), 'omnimux: sidebar app tabs')
  ctx.slots.inject('shell.overlay', () => ctx.slots.register({
    name: 'shell.overlay',
    id: 'omnimux-apps-stage',
    order: 20,
    locale: NS,
    inject: appsFace,
  }, AppsStage))
}
