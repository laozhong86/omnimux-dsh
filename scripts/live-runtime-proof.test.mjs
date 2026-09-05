import assert from 'node:assert/strict'
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { afterEach, test } from 'node:test'
import { assertRuntimeProofStable, captureRuntimeProof, declaredClientBundle } from './live-runtime-proof.mjs'

const roots = []
afterEach(() => roots.splice(0).forEach((root) => rmSync(root, { recursive: true, force: true })))

function fixture(plugins = ['omnimux', 'omnimux-assets']) {
  const root = mkdtempSync(join(tmpdir(), 'omnimux-runtime-proof-'))
  roots.push(root)
  for (const plugin of plugins) {
    const dir = join(root, 'plugins', plugin, 'lib')
    mkdirSync(dir, { recursive: true })
    writeFileSync(join(root, 'plugins', plugin, 'package.json'), JSON.stringify({ name: plugin, exports: { './client': './lib/client.js' } }))
    writeFileSync(join(dir, 'client.js'), `window.__ModuleLoader__.load({ id: "${plugin}" })`)
  }
  return root
}

function fakeTab({ origin = 'http://127.0.0.1:45120', scripts, hasMore = false, truncated = false }) {
  const calls = []
  const byId = new Map(scripts.map((script) => [script.scriptId, script.source]))
  return {
    calls,
    async url() { return `${origin}/` },
    capabilities: { async get(name) {
      assert.equal(name, 'cdp')
      return {
        async readEvents(options) {
          calls.push(['readEvents', options])
          return options.afterSequence === undefined ? { cursor: 4 } : {
            cursor: 8, hasMore, truncated,
            events: scripts.map(({ scriptId, url }) => ({ params: { scriptId, url } })),
          }
        },
        async send(method, params) {
          calls.push(['send', method, params])
          if (method === 'Debugger.getScriptSource') return { scriptSource: byId.get(params.scriptId) }
          return {}
        },
      }
    } },
  }
}

test('binds the selected renderer to exact hub and selected plugin bundles', async () => {
  const root = fixture()
  const hub = declaredClientBundle(root, 'omnimux').source
  const assets = declaredClientBundle(root, 'omnimux-assets').source
  const tab = fakeTab({ scripts: [
    { scriptId: '1', url: '/devtools/irrelevant.js', source: 'not a plugin bundle' },
    { scriptId: '2', url: '/plugins/all.js', source: `${hub}\n${assets}` },
  ] })
  const proof = await captureRuntimeProof(tab, { root, url: 'http://127.0.0.1:45120/', target: 'dev', targets: [{ tabId: 'omnimux-assets:library' }] })
  assert.equal(proof.bundles.length, 2)
  assert.equal(proof.bundles[1].plugin, 'omnimux-assets')
  assert.ok(proof.bundles.every((bundle) => bundle.bundleSha256 && bundle.loadedScriptSha256))
  assert.deepEqual(tab.calls.filter((call) => call[1] === 'Debugger.getScriptSource').map((call) => call[2].scriptId), ['2'])
  assert.ok(tab.calls.some((call) => call[1] === 'Debugger.disable'))
})

test('rejects wrong origin, missing or empty declared modules, incomplete event pages, and old/new ambiguity', async () => {
  const root = fixture()
  const hub = declaredClientBundle(root, 'omnimux').source
  const assets = declaredClientBundle(root, 'omnimux-assets').source
  await assert.rejects(captureRuntimeProof(fakeTab({ origin: 'http://127.0.0.1:44200', scripts: [] }), { root, url: 'http://127.0.0.1:45120/', targets: [] }), /origin changed before/)
  await assert.rejects(captureRuntimeProof(fakeTab({ scripts: [{ scriptId: '1', url: '/plugins/all.js', source: hub }] }), { root, url: 'http://127.0.0.1:45120/', targets: [{ plugin: 'omnimux-assets' }] }), /not loaded/)
  writeFileSync(join(root, 'plugins/omnimux-assets/lib/client.js'), '')
  await assert.rejects(captureRuntimeProof(fakeTab({ scripts: [] }), { root, url: 'http://127.0.0.1:45120/', targets: [{ plugin: 'omnimux-assets' }] }), /empty/)
  writeFileSync(join(root, 'plugins/omnimux-assets/lib/client.js'), assets)
  await assert.rejects(captureRuntimeProof(fakeTab({ scripts: [{ scriptId: '1', url: '/plugins/all.js', source: `${hub}\n${assets}` }], hasMore: true }), { root, url: 'http://127.0.0.1:45120/', targets: [{ plugin: 'omnimux-assets' }] }), /incomplete/)
  await assert.rejects(captureRuntimeProof(fakeTab({ scripts: [
    { scriptId: '1', url: '/plugins/omnimux-assets/client.js?rev=new', source: assets },
    { scriptId: '2', url: '/plugins/omnimux-assets/client.js?rev=old', source: 'window.__ModuleLoader__.load({ id: "omnimux-assets", old: true })' },
    { scriptId: '3', url: '/plugins/omnimux/client.js', source: hub },
  ] }), { root, url: 'http://127.0.0.1:45120/', targets: [{ plugin: 'omnimux-assets' }] }), /ambiguous old\/new/)
})

test('accepts an esbuild-normalized source-path comment difference but rejects changed executable code', async () => {
  const root = fixture()
  const hub = declaredClientBundle(root, 'omnimux').source
  const local = `${declaredClientBundle(root, 'omnimux-assets').source} // ../../../omnimux-dsh-wt-current/node_modules/dsh-ui-kit/lib/index.js\n`
  const installed = `${declaredClientBundle(root, 'omnimux-assets').source} // ../../../omnimux-dsh-wt-older/node_modules/dsh-ui-kit/lib/index.js\n`
  writeFileSync(join(root, 'plugins/omnimux-assets/lib/client.js'), local)
  const proof = await captureRuntimeProof(fakeTab({ scripts: [{ scriptId: '1', url: '/plugins/??client.js', source: `${hub}\n${installed}` }] }), {
    root, url: 'http://127.0.0.1:45120/', targets: [{ plugin: 'omnimux-assets' }],
  })
  assert.equal(proof.bundles.find((bundle) => bundle.plugin === 'omnimux-assets').match, 'normalized-code')
  const middleOfConcat = await captureRuntimeProof(fakeTab({ scripts: [{
    scriptId: '1', url: '/plugins/??client.js', source: `${hub}\n${installed}window.__nextFactory = () => true`,
  }] }), { root, url: 'http://127.0.0.1:45120/', targets: [{ plugin: 'omnimux-assets' }] })
  assert.equal(middleOfConcat.bundles.find((bundle) => bundle.plugin === 'omnimux-assets').match, 'normalized-code')
  const separateFactories = await captureRuntimeProof(fakeTab({ scripts: [
    { scriptId: '1', url: '/plugins/??omnimux/client.js', source: hub },
    { scriptId: '2', url: '/plugins/??omnimux-assets/client.js', source: installed },
  ] }), { root, url: 'http://127.0.0.1:45120/', targets: [{ plugin: 'omnimux-assets' }] })
  assert.equal(separateFactories.bundles.find((bundle) => bundle.plugin === 'omnimux-assets').match, 'normalized-code')
  const changed = declaredClientBundle(root, 'omnimux-assets').source.replace('omnimux-assets', 'omnimux-assets-changed')
  await assert.rejects(captureRuntimeProof(fakeTab({ scripts: [{ scriptId: '1', url: '/plugins/??client.js', source: `${hub}\n${changed}` }] }), {
    root, url: 'http://127.0.0.1:45120/', targets: [{ plugin: 'omnimux-assets' }],
  }), /not loaded/)
})

test('stable proof compares content fingerprints, not CDP script ids', () => {
  const proof = { requestedOrigin: 'http://127.0.0.1:45120', target: 'dev', allocation: null, bundles: [{ plugin: 'omnimux', bundlePath: 'plugins/omnimux/lib/client.js', bundleSha256: 'disk', bundleBytes: 1, loadedScriptUrl: '/all.js', loadedScriptSha256: 'loaded', matchingScriptCount: 1 }] }
  assertRuntimeProofStable(proof, structuredClone(proof))
  assert.throws(() => assertRuntimeProofStable(proof, { ...proof, bundles: [{ ...proof.bundles[0], bundleSha256: 'changed' }] }), /changed/)
})
