import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { OmnimuxError } from './errors.js'
import { parseMediaConfig, resolveMediaRoute } from './route.js'
import { mapOmnimuxInput } from './vendors/omnimux.js'

describe('media route', () => {
  it('defaults to the OmniMux openai-media video row', () => {
    const media = parseMediaConfig(undefined)
    const route = resolveMediaRoute('video', {}, media, {})
    assert.equal(route.providerId, 'omnimux')
    assert.equal(route.protocol, 'openai-media')
    assert.equal(route.baseUrl, 'https://api.omnimux.ai/v1')
    assert.equal(route.modelId, 'seedance-2-0-fast')
    assert.equal(route.apiKey, '')
  })

  it('defaults image to gpt-image2 on the same provider row', () => {
    const route = resolveMediaRoute('image', {}, parseMediaConfig(undefined), {})
    assert.equal(route.providerId, 'omnimux')
    assert.equal(route.protocol, 'openai-media')
    assert.equal(route.modelId, 'gpt-image2')
  })

  it('overlays OmniMux env on the omnimux row', () => {
    const media = parseMediaConfig(undefined)
    const route = resolveMediaRoute('video', {}, media, {
      OMNIMUX_BASE_URL: 'https://compat.example/v1/',
      OMNIMUX_VIDEO_MODEL: 'seedance-2-5',
      OMNIMUX_API_KEY: 'sk-a',
    })
    assert.equal(route.baseUrl, 'https://compat.example/v1')
    assert.equal(route.modelId, 'seedance-2-5')
    assert.equal(route.apiKey, 'sk-a')
  })

  it('pins provider and model from the request', () => {
    const media = parseMediaConfig({
      defaultProvider: 'omnimux',
      providers: {
        omnimux: {
          protocol: 'openai-media',
          baseUrl: 'https://api.omnimux.ai/v1',
          apiKeyEnv: 'OMNIMUX_API_KEY',
          models: { video: 'seedance-2-0-fast' },
        },
        other: {
          protocol: 'openai-media',
          baseUrl: 'https://other.example/v1',
          apiKeyEnv: 'OTHER_KEY',
          models: { video: 'other-video' },
        },
      },
    })
    const route = resolveMediaRoute('video', { provider: 'other', model: 'pinned' }, media, {
      OTHER_KEY: 'sk-b',
    })
    assert.equal(route.providerId, 'other')
    assert.equal(route.modelId, 'pinned')
    assert.equal(route.baseUrl, 'https://other.example/v1')
    assert.equal(route.apiKey, 'sk-b')
  })

  it('rejects an unknown provider at resolve', () => {
    const media = parseMediaConfig(undefined)
    assert.throws(
      () => resolveMediaRoute('video', { provider: 'runway' }, media, {}),
      (error) => error instanceof OmnimuxError && error.code === 'unknown-provider',
    )
  })

  it('rejects an unknown protocol at parse', () => {
    assert.throws(
      () => parseMediaConfig({
        providers: {
          omnimux: { protocol: 'kling-native', baseUrl: 'https://x', apiKeyEnv: 'K' },
        },
      }),
      /protocol must be one of/,
    )
  })

  it('maps talking-head extras into metadata and leaves t2v clean', () => {
    assert.deepEqual(mapOmnimuxInput('video', { prompt: 'a street at night' }), { prompt: 'a street at night' })
    assert.deepEqual(
      mapOmnimuxInput('video', { prompt: 'talk', image: 'https://face', speech: 'hello', audio: 'https://a.wav' }),
      {
        prompt: 'talk',
        image: 'https://face',
        metadata: { speech: 'hello', audio: 'https://a.wav' },
      },
    )
  })

  it('rejects a defaultProvider missing from the table', () => {
    assert.throws(
      () => parseMediaConfig({ defaultProvider: 'missing', providers: {} }),
      /defaultProvider 'missing'/,
    )
  })
})
