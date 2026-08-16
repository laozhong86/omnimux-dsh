import assert from 'node:assert/strict'
import { mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, it } from 'node:test'
import { createAppsDispatcher } from './http-routes.js'
import { parseCatalog } from './parse.js'
import { createAppsStore } from './store.js'

function emptyCatalog() {
  return parseCatalog({
    schema: 1,
    generated_at: '2026-08-17T00:00:00Z',
    min_hub: '0.1.0',
    apps: [],
  })
}

function tempHome() {
  return mkdtempSync(join(tmpdir(), 'omnimux-apps-http-'))
}

describe('apps dispatcher', () => {
  it('serves the bundled empty catalog', async () => {
    const dispatcher = createAppsDispatcher({
      env: { DSH_HOME: tempHome() },
      store: createAppsStore({
        home: tempHome(),
        profile: 'omnimux',
        apps: { remote: false, catalogUrl: '', ttlSeconds: 21600, timeoutMs: 5000 },
        siteBaseUrl: 'https://omnimux.ai',
        loadBundled: emptyCatalog,
      }),
    })
    const result = await dispatcher.dispatch({ method: 'GET', url: '/omnimux/apps' })
    assert.equal(result.status, 200)
    assert.equal(result.body.source, 'bundled')
    assert.equal(result.body.refresh, 'idle')
    assert.deepEqual(result.body.apps, [])
  })

  it('returns 500 when the bundled catalog cannot be loaded', async () => {
    const dispatcher = createAppsDispatcher({
      env: { DSH_HOME: tempHome() },
      store: createAppsStore({
        home: tempHome(),
        profile: 'omnimux',
        apps: { remote: false, catalogUrl: '', ttlSeconds: 21600, timeoutMs: 5000 },
        siteBaseUrl: 'https://omnimux.ai',
        loadBundled() {
          throw new Error('bundled apps catalog is missing')
        },
      }),
    })
    const result = await dispatcher.dispatch({ method: 'GET', url: '/omnimux/apps' })
    assert.equal(result.status, 500)
    assert.match(result.body.error, /missing/)
  })

  it('does not list unmarked profile plugins', async () => {
    const dispatcher = createAppsDispatcher({
      env: { DSH_HOME: '/tmp/not-a-profile' },
      store: createAppsStore({
        home: '/tmp/not-a-profile',
        profile: 'omnimux',
        apps: { remote: false, catalogUrl: '', ttlSeconds: 21600, timeoutMs: 5000 },
        siteBaseUrl: 'https://omnimux.ai',
        loadBundled: emptyCatalog,
      }),
    })
    const result = await dispatcher.dispatch({ method: 'GET', url: '/omnimux/apps' })
    assert.equal(result.status, 200)
    assert.ok(!JSON.stringify(result.body).includes('dsh-cron-parse'))
  })

  it('does not fetch when remote is off', async () => {
    let calls = 0
    const dispatcher = createAppsDispatcher({
      env: { DSH_HOME: tempHome() },
      store: createAppsStore({
        home: tempHome(),
        profile: 'omnimux',
        apps: { remote: false, catalogUrl: '', ttlSeconds: 21600, timeoutMs: 5000 },
        siteBaseUrl: 'https://omnimux.ai',
        loadBundled: emptyCatalog,
        fetcher: async () => {
          calls += 1
          throw new Error('network should stay quiet')
        },
      }),
    })
    await dispatcher.dispatch({ method: 'GET', url: '/omnimux/apps' })
    await dispatcher.dispatch({ method: 'POST', url: '/omnimux/apps/refresh' })
    assert.equal(calls, 0)
  })

  it('refuses a cross-origin refresh', async () => {
    const dispatcher = createAppsDispatcher({
      env: { DSH_HOME: tempHome() },
      store: createAppsStore({
        home: tempHome(),
        profile: 'omnimux',
        apps: { remote: false, catalogUrl: '', ttlSeconds: 21600, timeoutMs: 5000 },
        siteBaseUrl: 'https://omnimux.ai',
        loadBundled: emptyCatalog,
      }),
    })
    const result = await dispatcher.dispatch({
      method: 'POST',
      url: '/omnimux/apps/refresh',
      origin: 'https://evil.example',
    })
    assert.equal(result.status, 403)
  })
})
