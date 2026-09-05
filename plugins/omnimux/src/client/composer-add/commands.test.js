import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { registerComposerAddCommands } from './commands.js'

const t = (key) => ({
  'composerAdd.addFile': '添加文件或文件夹',
  'composerAdd.fromLibrary': '从资产库添加',
}[key] || key)

function makeCtx(capabilities = { clientAction: true }) {
  const registrations = []
  const effects = []
  return {
    registrations,
    effects,
    ctx: {
      inject(deps, callback) {
        assert.deepEqual(deps, ['commandUi'])
        callback({ commandUi: {
          capabilities,
          register(row) { registrations.push(row); return () => { row.stopped = true } },
        } })
      },
      effect(factory) { effects.push(factory) },
    },
  }
}

describe('registerComposerAddCommands', () => {
  it('registers both native command-list entries as session-bound client actions', async () => {
    const { ctx, registrations } = makeCtx()
    const calls = []
    registerComposerAddCommands(ctx, {
      t,
      onAddFile: (...args) => { calls.push(['file', ...args]) },
      onAddLibrary: (...args) => { calls.push(['library', ...args]) },
    })
    assert.deepEqual(registrations.map(row => [row.name, row.description, row.ui.kind]), [
      ['add-file', '添加文件或文件夹', 'clientAction'],
      ['add-from-library', '从资产库添加', 'clientAction'],
    ])
    const signal = new AbortController().signal
    const restore = () => {}
    await registrations[0].ui.run({ session: { sessionId: 's1' }, signal, restoreComposerFocus: restore })
    await registrations[1].ui.run({ session: { sessionId: 's2' }, signal, restoreComposerFocus: restore })
    assert.deepEqual(calls, [['file', 's1', signal, restore], ['library', 's2', signal, restore]])
  })

  it('cleans both registrations through the caller effect', () => {
    const { ctx, registrations, effects } = makeCtx()
    registerComposerAddCommands(ctx, { t, onAddFile() {}, onAddLibrary() {} })
    effects[0]()()
    assert.equal(registrations.every(row => row.stopped), true)
  })

  it('does not register client actions on a runtime without the explicit capability', () => {
    const { ctx, registrations, effects } = makeCtx({})
    const unavailable = []
    registerComposerAddCommands(ctx, {
      t,
      onAddFile() { throw new Error('must not run') },
      onAddLibrary() { throw new Error('must not run') },
      onClientActionUnavailable() { unavailable.push('notice') },
    })
    assert.deepEqual(registrations, [])
    assert.deepEqual(effects, [])
    assert.deepEqual(unavailable, ['notice'])
  })

  it('registers both direct entries after a capability-bearing runtime reload', () => {
    const oldRuntime = makeCtx({})
    registerComposerAddCommands(oldRuntime.ctx, { t, onAddFile() {}, onAddLibrary() {} })
    assert.equal(oldRuntime.registrations.length, 0)

    const upgradedRuntime = makeCtx({ clientAction: true })
    registerComposerAddCommands(upgradedRuntime.ctx, { t, onAddFile() {}, onAddLibrary() {} })
    assert.deepEqual(upgradedRuntime.registrations.map(row => row.name), ['add-file', 'add-from-library'])
  })
})
