/** Registers OmniMux profile in Settings and Apps under 新会话. */
import { NS } from './locales.js'
import { ProfileSection } from './ProfileSection.jsx'
import { DshPluginsSection } from './DshPluginsSection.jsx'
import { LoginGate } from './LoginGate.jsx'
import { SidebarUpdateAction } from './SidebarUpdateAction.jsx'
import { getStatusCached } from './api.js'
import { installHubChrome } from './chrome.js'
import { STYLES_ID, injectHubStyles } from './styles.js'
import { HeroBrandMark } from './HeroBrandMark.jsx'
import { installHeroBrandSlot } from './hero-brand.js'
import { AttachmentTray } from './attachments/AttachmentTray.tsx'
import { getGlobalAttachmentStore } from './attachments/store.ts'

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
  const t = installHubChrome(ctx)
  installHeroBrandSlot(ctx, HeroBrandMark)
  // Optional session warmup: fill the status cache so the first sidebar
  // click can take the sync short path. Not a startup gate — fire-and-forget,
  // never setState, never block apply().
  void getStatusCached().catch(() => {})
  ctx.effect?.(() => {
    injectHubStyles()
    return () => { document.getElementById(STYLES_ID)?.remove() }
  }, 'omnimux: hub client styles')

  // Apps shelf temporarily taken down (core-first): the 应用 row, app tabs,
  // and AppsStage overlay stay in the source tree (apps-store.js / app-tabs.js
  // / AppsStage.jsx / AppsEntry.jsx / catalog.json) and are re-enabled by
  // restoring the three mounts below. Pinned vertical plugins (账号 / 资产库 /
  // 专家·技能·连接器 / 工作流) open directly via the product stage and do not
  // depend on the catalog or the omnimux-app-open event.
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

  // 官方侧边栏底部槽位：设置正上方的更新交互栏
  ctx.slots.inject('sidebar.footer.action', () => ctx.slots.register({
    name: 'sidebar.footer.action',
    id: 'omnimux-desktop-updater',
    order: 10,
    locale: NS,
    inject: () => ({ t }),
  }, SidebarUpdateAction))

  // 全平台通用「添加到会话」附件附着槽 (挂载至 conversation.input.dock, order: 20)
  const attachmentStore = getGlobalAttachmentStore()
  ctx.effect?.(() => attachmentStore.installGlobalEvents(), 'omnimux: attachment global events')
  ctx.slots.inject('conversation.input.dock', () => ctx.slots.register({
    name: 'conversation.input.dock',
    id: 'omnimux-attachment-tray',
    order: 20,
  }, AttachmentTray))
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
