import assert from 'node:assert/strict'
import { mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, it } from 'node:test'
import { apply } from '../index.js'
import { createAuthDispatcher, sendJson } from './http-routes.js'
import { createPendingStore } from './pending.js'
import { createTokenStore } from './store.js'

function jsonResponse(status, json) {
  return {
    ok: status >= 200 && status < 300,
    status,
    json: async () => json,
  }
}

describe('auth http dispatcher', () => {
  it('starts a flow without leaking the device code and stores the PAT on success', async () => {
    const homeDir = mkdtempSync(join(tmpdir(), 'dsh-omnimux-http-'))
    const store = createTokenStore({ homeDir })
    const pending = createPendingStore()
    /** @type {string[]} */
    const urls = []
    const dispatcher = createAuthDispatcher({
      store,
      pending,
      siteBaseUrl: 'https://omnimux.ai',
      fetcher: async (url, init) => {
        urls.push(`${init?.method || 'GET'} ${url}`)
        if (String(url).endsWith('/api/user/device/code')) {
          return jsonResponse(200, {
            success: true,
            data: {
              device_code: 'SECRET-DEVICE',
              user_code: 'WXYZ',
              verification_uri_complete: 'https://omnimux.ai/cli/login?user_code=WXYZ',
              expires_in: 900,
              interval: 5,
            },
          })
        }
        if (String(url).endsWith('/api/user/device/token')) {
          const body = JSON.parse(String(init?.body || '{}'))
          assert.equal(body.device_code, 'SECRET-DEVICE')
          return jsonResponse(200, {
            success: true,
            data: { access_token: 'pat-live', user_id: 3, username: 'ada' },
          })
        }
        if (String(url).endsWith('/api/user/self')) {
          return jsonResponse(200, {
            success: true,
            data: { id: 3, username: 'ada', display_name: 'Ada', quota: 500000, used_quota: 0, email: 'hidden@x' },
          })
        }
        throw new Error(`unexpected ${url}`)
      },
    })
    try {
      const started = await dispatcher.dispatch({ method: 'POST', url: '/omnimux/auth/login' })
      assert.equal(started.status, 200)
      const startedText = JSON.stringify(started.body)
      assert.equal(started.body.user_code, 'WXYZ')
      assert.match(started.body.flow_id, /^[a-f0-9]{32}$/)
      assert.equal(/SECRET-DEVICE|pat-live|access_token|sk-/.test(startedText), false)

      const pendingPoll = await dispatcher.dispatch({
        method: 'POST',
        url: '/omnimux/auth/poll',
        body: { flow_id: started.body.flow_id },
      })
      assert.equal(pendingPoll.status, 200)
      assert.equal(pendingPoll.body.logged_in, true)
      assert.equal(pendingPoll.body.username, 'ada')
      assert.equal(pendingPoll.body.quota_usd, 1)
      assert.equal(/pat-live|SECRET-DEVICE|hidden@x|access_token/.test(JSON.stringify(pendingPoll.body)), false)
      assert.equal(await store.resolve(), 'pat-live')

      const status = await dispatcher.dispatch({ method: 'GET', url: '/omnimux/auth/status' })
      assert.equal(status.body.logged_in, true)
      assert.equal(status.body.username, 'ada')
      assert.equal(status.body.verified, null)

      const loggedOut = await dispatcher.dispatch({ method: 'POST', url: '/omnimux/auth/logout' })
      assert.equal(loggedOut.body.logged_in, false)
      assert.equal(await store.resolve(), undefined)
    } finally {
      rmSync(homeDir, { recursive: true, force: true })
    }
  })

  it('lists hub capabilities without secrets', async () => {
    const dispatcher = createAuthDispatcher({
      store: createTokenStore({ homeDir: mkdtempSync(join(tmpdir(), 'dsh-omnimux-cap-')) }),
      pending: createPendingStore(),
      siteBaseUrl: 'https://omnimux.ai',
      capabilities: { identity: true, videoGenerate: true, imageGenerate: true, official: true },
    })
    const result = await dispatcher.dispatch({ method: 'GET', url: '/omnimux/capabilities' })
    assert.equal(result.status, 200)
    assert.equal(result.body.identity, true)
    assert.equal(result.body.official, true)
    assert.equal(/access_token|sk-/.test(JSON.stringify(result.body)), false)
  })

  it('sendJson refuses a body that contains a token', () => {
    /** @type {{ status?: number, chunks: string[] }} */
    const seen = { chunks: [] }
    const res = {
      writeHead(status) {
        seen.status = status
      },
      end(chunk) {
        seen.chunks.push(String(chunk))
      },
    }
    sendJson(res, 200, { access_token: 'pat-nope' })
    assert.equal(seen.status, 500)
    assert.equal(/pat-nope/.test(seen.chunks.join('')), false)
  })

  it('apply mounts auth routes when webServer arrives through inject', () => {
    const paths = []
    apply({
      tools: { register() {} },
      provide() {},
      inject(deps, callback) {
        assert.deepEqual(deps, ['webServer'])
        callback({
          webServer: {
            register(route) {
              paths.push(`${route.kind}:${route.path}`)
              return () => {}
            },
          },
          effect(factory) { factory() },
        })
      },
    })
    assert.deepEqual(paths, [
      'exact:/omnimux/auth/status',
      'exact:/omnimux/auth/login',
      'exact:/omnimux/auth/poll',
      'exact:/omnimux/auth/logout',
      'exact:/omnimux/capabilities',
      'prefix:/omnimux/plugins',
      'prefix:/omnimux/apps',
    ])
  })

  it('apply still registers the video tool when webServer is absent', () => {
    /** @type {string[]} */
    const names = []
    apply({
      tools: { register(tool) { names.push(tool.name) } },
      provide() {},
      get() { return undefined },
    })
    assert.ok(names.includes('omnimux_video_submit'))
    assert.ok(names.includes('omnimux_image_submit'))
    assert.ok(names.includes('omnimux_social_data'))
  })
})
