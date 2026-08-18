import assert from 'node:assert/strict'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, it } from 'node:test'
import { loadBundledCatalog } from './parse.js'
import { buildInstalledAppsView } from './view.js'
import { createPluginDispatcher } from '../plugins/http-routes.js'

function writeProfile(home, bundles, versions = {}) {
  const profileDir = join(home, 'profiles', 'omnimux')
  mkdirSync(profileDir, { recursive: true })
  writeFileSync(join(profileDir, 'package.json'), JSON.stringify({
    dsh: { profile: { bundles } },
  }))
  for (const [name, version] of Object.entries(versions)) {
    const pkg = join(profileDir, 'node_modules', name)
    mkdirSync(pkg, { recursive: true })
    writeFileSync(join(pkg, 'package.json'), JSON.stringify({ name, version }))
  }
}

describe('official accounts row install state', () => {
  it('is available, installed, then available again after remove', () => {
    const home = mkdtempSync(join(tmpdir(), 'omnimux-apps-accept-'))
    try {
      const catalog = loadBundledCatalog()
      writeProfile(home, ['dsh-omnimux'])
      const before = buildInstalledAppsView({
        catalog,
        home,
        profile: 'omnimux',
        env: { DSH_HOME: home },
      })
      assert.equal(before.apps[0].id, 'accounts')
      assert.equal(before.apps[0].state, 'available')
      assert.equal(before.apps[0].install_spec, 'dsh-omnimux-accounts@0.1.0')

      writeProfile(
        home,
        ['dsh-omnimux', 'dsh-omnimux-accounts'],
        { 'dsh-omnimux-accounts': '0.1.0' },
      )
      const installed = buildInstalledAppsView({
        catalog,
        home,
        profile: 'omnimux',
        env: { DSH_HOME: home },
      })
      assert.equal(installed.apps[0].state, 'installed')

      writeProfile(home, ['dsh-omnimux'])
      const after = buildInstalledAppsView({
        catalog,
        home,
        profile: 'omnimux',
        env: { DSH_HOME: home },
      })
      assert.equal(after.apps[0].state, 'available')
    } finally {
      rmSync(home, { recursive: true, force: true })
    }
  })

  it('installs and removes the official row through the plugin dispatcher', () => {
    const home = mkdtempSync(join(tmpdir(), 'omnimux-apps-cli-'))
    writeProfile(home, ['dsh-omnimux'])
    /** @type {string[][]} */
    const seen = []
    const dispatcher = createPluginDispatcher({
      env: { DSH_HOME: home, OMNIMUX_DSH_CLI: '/cli', OMNIMUX_PLUGIN_PROFILE: 'omnimux' },
      spawn(_node, args) {
        seen.push(args.slice(args.indexOf('plugin') + 1))
        if (args.includes('add')) {
          writeProfile(
            home,
            ['dsh-omnimux', 'dsh-omnimux-accounts'],
            { 'dsh-omnimux-accounts': '0.1.0' },
          )
        } else {
          writeProfile(home, ['dsh-omnimux'])
        }
        return { status: 0, stdout: '', stderr: '' }
      },
    })
    try {
      const added = dispatcher.dispatch({
        method: 'POST',
        url: '/omnimux/plugins',
        origin: 'http://127.0.0.1:8787',
        body: { spec: 'dsh-omnimux-accounts@0.1.0' },
      })
      assert.equal(added.status, 200)
      assert.equal(added.body.plugins.some((row) => row.name === 'dsh-omnimux-accounts'), true)
      const removed = dispatcher.dispatch({
        method: 'DELETE',
        url: '/omnimux/plugins/dsh-omnimux-accounts',
        origin: 'http://127.0.0.1:8787',
      })
      assert.equal(removed.status, 200)
      assert.equal(removed.body.plugins.some((row) => row.name === 'dsh-omnimux-accounts'), false)
      assert.deepEqual(seen, [
        ['--profile', 'omnimux', 'add', 'dsh-omnimux-accounts@0.1.0'],
        ['--profile', 'omnimux', 'remove', 'dsh-omnimux-accounts'],
      ])
    } finally {
      rmSync(home, { recursive: true, force: true })
    }
  })
})
