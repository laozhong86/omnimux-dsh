import { mkdirSync, mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { createDispatcher } from './http.js'

function dispatcher() {
  const home = mkdtempSync(join(tmpdir(), 'esc-http-'))
  mkdirSync(join(home, 'profiles', 'omnimux'), { recursive: true })
  return createDispatcher({
    home,
    profile: 'omnimux',
    packageRoot: join(import.meta.dirname, '..'),
  })
}

test('GET /esc/catalog returns decorated items', async () => {
  const { dispatch } = dispatcher()
  const result = await dispatch({ method: 'GET', url: '/esc/catalog' })
  assert.equal(result.status, 200)
  assert.ok(result.body.items.length > 0)
  assert.equal(result.body.items[0].installed, false)
})

test('POST /esc/install refuses cross-site writes', async () => {
  const { dispatch } = dispatcher()
  const result = await dispatch({
    method: 'POST',
    url: '/esc/install',
    secFetchSite: 'cross-site',
    body: { id: 'stock-research' },
  })
  assert.equal(result.status, 403)
})

test('POST /esc/summon on a locked session does not stage a preset', async () => {
  const { dispatch } = dispatcher()
  const result = await dispatch({
    method: 'POST',
    url: '/esc/summon',
    origin: 'http://127.0.0.1:63805',
    body: { id: 'esc-demo-skill', sessionState: 'locked' },
  })
  assert.equal(result.status, 200)
  assert.equal(result.body.gesture, '/esc-demo-note')
  assert.equal(result.body.stagePreset, null)
})

test('GET /esc/hub/search hits SkillHub and marks installed', async () => {
  const { dispatch } = dispatcher()
  const result = await dispatch({ method: 'GET', url: '/esc/hub/search?q=pdf' })
  assert.equal(result.status, 200)
  assert.ok(Array.isArray(result.body.items))
  assert.equal(typeof result.body.total, 'number')
  for (const item of result.body.items) {
    assert.equal(typeof item.slug, 'string')
    assert.equal(typeof item.installed, 'boolean')
  }
})
