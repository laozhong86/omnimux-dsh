/**
 * Fallback: put the two actions on the official slash/command menu so they
 * remain visible even if the + button intercept misses. Optional inject —
 * never add commandUi to the hub's top-level export.
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
          return [{ id: 'pick', label: t('composerAdd.addFile') }]
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
          return [{ id: 'open', label: t('composerAdd.fromLibrary') }]
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
