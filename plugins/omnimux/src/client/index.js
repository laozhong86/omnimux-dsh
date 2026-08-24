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
// x.ai 全壳 overrideTokens 已临时关闭：发送钮在暗色下变成白底白箭头。
// 恢复时：重新 import applyXaiShellTheme，并把 'theme' 加回 inject + package.json dsh.client.inject。
// import { applyXaiShellTheme } from './xai-theme.js'
import { installAuthGlobal } from './auth-gate.js'
import { LoginGate } from './LoginGate.jsx'

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
  installAuthGlobal()
  ctx.effect(
    () => startOverlay(document, configFromWindow(window)),
    'omnimux: brand overlay',
  )
  ctx.effect(() => {
    ensureProductStageChrome()
    return () => {}
  }, 'omnimux: product-stage chrome')
  // 临时关闭：ctx.effect(() => applyXaiShellTheme(ctx), 'omnimux: xai shell theme')
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'omnimux: dictionaries')
  const t = ctx.locale.bind(NS)

  // Apps shelf temporarily taken down (core-first): the 应用 row, app tabs,
  // and AppsStage overlay stay in the source tree (apps-store.js / app-tabs.js
  // / AppsStage.jsx / AppsEntry.jsx / catalog.json) and are re-enabled by
  // restoring the three mounts below. Pinned vertical plugins (账号 / 资产库 /
  // 专家·技能·连接器 / 工作流) open directly via the product stage and do not
  // depend on the catalog or the omnimux-app-open event.
  // const apps = createAppsStore()
  // const appsFace = () => ({ t, apps })
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
  // Unified login gate. It lives on the shell.overlay seat but renders as a
  // transient modal via createPortal(document.body) with a zIndex above every
  // other overlay; it returns null while closed so it never claims a product
  // slot or `data-dsh-product-stage`. Only the hub triggers it (single owner).
  ctx.slots.inject('shell.overlay', () => ctx.slots.register({
    name: 'shell.overlay',
    id: 'omnimux-auth-gate',
    order: 30,
    locale: NS,
    inject: () => ({ t }),
  }, LoginGate))
  // ctx.effect(() => mountSidebarEntry(apps, t, ctx.locale, SIDEBAR_GLOBAL().register), 'omnimux: sidebar apps entry')
  // ctx.effect(() => mountAppTabs(t, ctx.locale, SIDEBAR_GLOBAL().register), 'omnimux: sidebar app tabs')
  // ctx.slots.inject('shell.overlay', () => ctx.slots.register({
  //   name: 'shell.overlay',
  //   id: 'omnimux-apps-stage',
  //   order: 20,
  //   locale: NS,
  //   inject: appsFace,
  // }, AppsStage))
}
