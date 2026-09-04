/**
 * Sole entry path: contribute the two composer 添加 actions to the official
 * slash/command menu via `commandUi.register`. The composer「+」button opens
 * exactly this native command list (empty-query slash source), so the
 * contributions appear in the「+」menu with name + description and support
 * fuzzy search. Selecting one opens the official popupSelect layer with a
 * single confirm row (the only official client-command UI pattern); its
 * onSelect dispatches the business action. Optional inject — never add
 * commandUi to the hub's top-level export.
 */

/**
 * @param {{
 *   inject?: (deps: string[], cb: (inner: object) => void) => void,
 *   effect?: (factory: () => () => void, label?: string) => void,
 * }} ctx
 * @param {{
 *   t: (key: string) => string,
 *   onAddFile: () => void,
 *   onAddLibrary: () => void,
 * }} actions
 */
export function registerComposerAddCommands(ctx, actions) {
  if (typeof ctx.inject !== 'function') return
  ctx.inject(['commandUi'], (inner) => {
    const commandUi = inner.commandUi ?? inner.get?.('commandUi')
    if (!commandUi || typeof commandUi.register !== 'function') return
    const t = actions.t
    const stopFile = commandUi.register({
      name: 'add-file',
      description: t('composerAdd.addFile'),
      available: () => true,
      ui: {
        kind: 'popupSelect',
        async options() {
          return [{ id: 'pick', label: t('composerAdd.pickFiles') }]
        },
        onSelect() { actions.onAddFile() },
      },
    })
    const stopLib = commandUi.register({
      name: 'add-from-library',
      description: t('composerAdd.fromLibrary'),
      available: () => true,
      ui: {
        kind: 'popupSelect',
        async options() {
          return [{ id: 'open', label: t('composerAdd.openLibrary') }]
        },
        onSelect() { actions.onAddLibrary() },
      },
    })
    ctx.effect?.(() => () => {
      try { stopFile?.() } catch { /* ignore */ }
      try { stopLib?.() } catch { /* ignore */ }
    }, 'omnimux: composer add commands')
  })
}
