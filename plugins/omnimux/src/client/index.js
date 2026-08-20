/** Registers OmniMux profile in Settings and Apps under 新会话. */
import { NS, en, zh } from './locales.js'
import { createAppsStore } from './apps-store.js'
import { ProfileSection } from './ProfileSection.jsx'
import { DshPluginsSection } from './DshPluginsSection.jsx'
import { AppsStage } from './AppsStage.jsx'
import { mountSidebarEntry } from './sidebar-entry.js'
import { mountAppTabs } from './app-tabs.js'
import { configFromWindow, startOverlay } from '../brand/overlay.js'
import {
  PRODUCT_STAGE_EVENT,
  claimProductStage,
  ensureProductStageChrome,
  readConversationBox,
  releaseProductStage,
} from './conversation-box.js'

export const name = 'omnimux'
export const inject = ['slots', 'locale']

/**
 * Client seam for vertical plugins: single source of truth for the
 * first-level product stage. Only the hub installs the chrome style and the
 * document click listener, so concurrent verticals cannot double-register
 * global side-effects (the duplicate-copy race that wedged the page).
 * @param {{
 *   locale: { register: Function, bind: Function },
 *   slots: { inject: Function, register: Function },
 *   provide: (name: string, impl: unknown) => void,
 *   effect?: Function,
 * }} ctx
 */
export function apply(ctx) {
  ctx.effect(
    () => startOverlay(document, configFromWindow(window)),
    'omnimux: brand overlay',
  )
  ctx.effect(() => {
    ensureProductStageChrome()
    return () => {}
  }, 'omnimux: product-stage chrome')
  ctx.provide('product-stage', {
    claim: claimProductStage,
    release: releaseProductStage,
    PRODUCT_STAGE_EVENT,
    readBox: readConversationBox,
  })
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
  ctx.effect(() => mountSidebarEntry(apps, t, ctx.locale), 'omnimux: sidebar apps entry')
  ctx.effect(() => mountAppTabs(t, ctx.locale), 'omnimux: sidebar app tabs')
  ctx.slots.inject('shell.overlay', () => ctx.slots.register({
    name: 'shell.overlay',
    id: 'omnimux-apps-stage',
    order: 20,
    locale: NS,
    inject: appsFace,
  }, AppsStage))
}
