import assert from 'node:assert/strict'
import { test } from 'node:test'
import { Config, parseHubConfig } from './config.js'

test('parseHubConfig fills brand and the OmniMux media row', () => {
  const parsed = parseHubConfig({})
  assert.equal(parsed.productName, 'OmniMux')
  assert.equal(parsed.heroHeadline, '属于你的AI社媒运营团队')
  assert.equal(parsed.media.defaultProvider, 'omnimux')
  assert.equal(parsed.media.providers.omnimux.protocol, 'openai-media')
  assert.equal(parsed.media.providers.omnimux.models.video, 'seedance-2-0-fast')
  assert.equal(parsed.media.providers.omnimux.models.image, 'gpt-image-2')
  assert.equal(parsed.official.mount, true)
  assert.equal(parsed.apps.remote, false)
  assert.equal(parsed.apps.ttlSeconds, 21600)
  assert.equal(parsed.text.defaultProvider, 'omnimux')
  assert.equal(parsed.text.maxTokens, 4096)
  assert.equal(parsed.text.models.length, 11)
  assert.equal(parsed.text.models.every((row) => row.enabled), true)
})

test('Config Standard Schema accepts empty input', () => {
  const result = Config['~standard'].validate({})
  assert.ok('value' in result)
  assert.equal(result.value.productName, 'OmniMux')
  assert.equal(result.value.media.defaultProvider, 'omnimux')
})

test('Config Standard Schema rejects a bad media protocol', () => {
  const result = Config['~standard'].validate({
    media: { providers: { omnimux: { protocol: 'nope', baseUrl: 'https://x', apiKeyEnv: 'K' } } },
  })
  assert.ok('issues' in result)
  assert.match(result.issues[0]?.message ?? '', /protocol must be one of/)
})

test('Config Standard Schema rejects a catalog URL on another host', () => {
  const result = Config['~standard'].validate({
    siteBaseUrl: 'https://omnimux.ai',
    apps: { catalogUrl: 'https://evil.example/apps/catalog.json' },
  })
  assert.ok('issues' in result)
  assert.match(result.issues[0]?.message ?? '', /host must match/)
})

test('Config Standard Schema rejects a text model outside the chat directory', () => {
  const result = Config['~standard'].validate({
    text: { models: [{ id: 'claude-haiku-4-5' }] },
  })
  assert.ok('issues' in result)
  assert.match(result.issues[0]?.message ?? '', /not in the chat directory/)
})
