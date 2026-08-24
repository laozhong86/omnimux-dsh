import assert from 'node:assert/strict'
import { mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, it } from 'node:test'
import { OmnimuxError } from '../media/errors.js'
import { createInspirationDispatcher, registerInspirationRoutes } from './inspiration-http.js'

function clientWith(handler, rawHandler) {
  return {
    async withPat(path, init = {}) {
      return handler(path, init)
    },
    async withPatRaw(path, init = {}) {
      if (rawHandler) return rawHandler(path, init)
      throw new Error('raw not stubbed')
    },
  }
}

const LOCAL_ORIGIN = 'http://127.0.0.1:8787'

function listPayload() {
  return {
    success: true,
    data: {
      total: 1,
      page: 1,
      size: 20,
      items: [{
        id: '1',
        type: 'video',
        title: '猫',
        cover_key: '/api/inspiration/v1/media/seed/cover-04.jpg',
        cover_url: '/api/inspiration/v1/media/covers/a.jpg',
      }],
    },
  }
}

describe('inspiration dispatcher', () => {
  it('lists items and rewrites cover URLs onto Host', async () => {
    /** @type {string[]} */
    const seen = []
    const dispatcher = createInspirationDispatcher({
      official: { mount: true },
      client: clientWith(async (path) => {
        seen.push(path)
        return listPayload()
      }),
    })
    const result = await dispatcher.dispatch({ method: 'GET', url: '/omnimux/inspiration?type=video' })
    assert.equal(result.status, 200)
    assert.equal(result.body.data.items[0].cover_key, '/omnimux/inspiration/media/seed/cover-04.jpg')
    assert.equal(result.body.data.items[0].cover_url, '/omnimux/inspiration/media/covers/a.jpg')
    assert.deepEqual(seen, ['/api/inspiration/v1/inspirations?type=video'])
  })

  it('forwards status and tags', async () => {
    const dispatcher = createInspirationDispatcher({
      official: { mount: true },
      client: clientWith(async (path) => {
        if (path.endsWith('/status')) return { enabled: true, configured: true, gateway_ready: true }
        return { success: true, data: { tags: [{ id: 1, name: '猫' }] } }
      }),
    })
    const status = await dispatcher.dispatch({ method: 'GET', url: '/omnimux/inspiration/status' })
    assert.equal(status.body.gateway_ready, true)
    const tags = await dispatcher.dispatch({ method: 'GET', url: '/omnimux/inspiration/tags' })
    assert.equal(tags.body.data.tags[0].name, '猫')
  })

  it('maps unsigned calls to 401 and refuses a cross-origin write', async () => {
    const dispatcher = createInspirationDispatcher({
      official: { mount: true },
      client: clientWith(async () => {
        throw new OmnimuxError('needs-omnimux', 'sign in')
      }),
    })
    const unsigned = await dispatcher.dispatch({ method: 'GET', url: '/omnimux/inspiration' })
    assert.equal(unsigned.status, 401)
    const refused = await dispatcher.dispatch({
      method: 'POST',
      url: '/omnimux/inspiration',
      origin: 'https://evil.example',
      body: { source_url: 'https://x.com/a' },
    })
    assert.equal(refused.status, 403)
  })

  it('is absent when official tools are unmounted', async () => {
    const dispatcher = createInspirationDispatcher({ official: { mount: false } })
    const result = await dispatcher.dispatch({ method: 'GET', url: '/omnimux/inspiration' })
    assert.equal(result.status, 404)
  })

  it('streams media with Range and rejects traversal', async () => {
    const dispatcher = createInspirationDispatcher({
      official: { mount: true },
      client: clientWith(async () => ({}), async (path, init) => {
        assert.equal(path, '/api/inspiration/v1/media/covers/a.jpg')
        assert.equal(init.headers.range, 'bytes=0-3')
        return {
          status: 206,
          headers: { get: (name) => (name === 'content-type' ? 'image/jpeg' : name === 'content-range' ? 'bytes 0-3/10' : undefined) },
          arrayBuffer: async () => Uint8Array.from([1, 2, 3, 4]).buffer,
        }
      }),
    })
    const state = { status: 0, headers: {}, body: null, headersSent: false }
    const res = {
      writeHead(status, headers) {
        state.status = status
        state.headers = headers
        state.headersSent = true
      },
      end(buf) { state.body = buf },
      destroy() {},
    }
    await dispatcher.streamMedia({
      method: 'GET',
      url: '/omnimux/inspiration/media/covers/a.jpg',
      headers: { range: 'bytes=0-3' },
    }, res)
    assert.equal(state.status, 206)
    assert.equal(state.headers['content-type'], 'image/jpeg')
    assert.equal(Buffer.from(state.body).length, 4)

    const bad = {
      status: 0,
      body: '',
      writeHead() {},
      end(text) { this.body = String(text) },
      destroy() {},
    }
    await dispatcher.streamMedia({ method: 'GET', url: '/omnimux/inspiration/media/../etc/passwd' }, bad)
    assert.match(bad.body, /invalid media key/)

    const encoded = {
      status: 0,
      body: '',
      writeHead() {},
      end(text) { this.body = String(text) },
      destroy() {},
    }
    await dispatcher.streamMedia({ method: 'GET', url: '/omnimux/inspiration/media/%2e%2e/etc/passwd' }, encoded)
    assert.match(encoded.body, /invalid media key/)
  })

  it('serves a second GET from disk without calling upstream', async () => {
    const home = mkdtempSync(join(tmpdir(), 'insp-http-cache-'))
    let upstreams = 0
    const dispatcher = createInspirationDispatcher({
      official: { mount: true },
      dataRoot: home,
      client: clientWith(async () => ({}), async () => {
        upstreams += 1
        return {
          status: 200,
          headers: {
            get: (name) => (name === 'content-type' ? 'image/jpeg' : name === 'etag' ? '"up"' : undefined),
          },
          arrayBuffer: async () => Uint8Array.from([9, 8, 7]).buffer,
        }
      }),
    })
    function capture() {
      return {
        status: 0,
        headers: {},
        body: null,
        headersSent: false,
        writeHead(status, headers) { this.status = status; this.headers = headers; this.headersSent = true },
        end(buf) { this.body = buf },
        destroy() {},
      }
    }
    try {
      const first = capture()
      const second = capture()
      await dispatcher.streamMedia({ method: 'GET', url: '/omnimux/inspiration/media/seed/cover-04.jpg' }, first)
      await dispatcher.streamMedia({ method: 'GET', url: '/omnimux/inspiration/media/seed/cover-04.jpg' }, second)
      assert.equal(upstreams, 1)
      assert.equal(first.status, 200)
      assert.equal(second.status, 200)
      assert.equal(Buffer.from(second.body).toString('hex'), '090807')
      assert.equal(second.headers['cache-control'], 'public, max-age=3600')
      const notModified = capture()
      await dispatcher.streamMedia({
        method: 'GET',
        url: '/omnimux/inspiration/media/seed/cover-04.jpg',
        headers: { 'if-none-match': '"up"' },
      }, notModified)
      assert.equal(notModified.status, 304)
      assert.equal(upstreams, 1)
    } finally {
      rmSync(home, { recursive: true, force: true })
    }
  })
})

describe('registerInspirationRoutes', () => {
  it('registers the Host prefix', () => {
    const routes = []
    registerInspirationRoutes({
      register(route) {
        routes.push(`${route.kind}:${route.path}`)
        return () => {}
      },
    }, createInspirationDispatcher({ official: { mount: true }, client: clientWith(async () => ({})) }))
    assert.deepEqual(routes, ['prefix:/omnimux/inspiration'])
  })
})
