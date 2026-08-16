import assert from 'node:assert/strict'
import { test } from 'node:test'
import { Config, parseHubConfig } from './config.js'

test('parseHubConfig fills brand and the OmniMux media row', () => {
  const parsed = parseHubConfig({})
  assert.equal(parsed.productName, 'OmniMux')
  assert.equal(parsed.media.defaultProvider, 'omnimux')
  assert.equal(parsed.media.providers.omnimux.protocol, 'openai-media')
  assert.equal(parsed.media.providers.omnimux.models.video, 'seedance-2-0-fast')
  assert.equal(parsed.media.providers.omnimux.models.image, 'gpt-image2')
  assert.equal(parsed.official.mount, true)
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
