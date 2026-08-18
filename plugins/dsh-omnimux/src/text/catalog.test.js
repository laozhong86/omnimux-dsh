import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { OmnimuxError } from '../media/errors.js'
import {
  CHAT_MODEL_IDS,
  DEFAULT_TEXT,
  enabledTextModels,
  parseTextConfig,
  resolveTextRoute,
} from './catalog.js'

describe('text whitelist', () => {
  it('defaults to the eight chat-directory models, all enabled', () => {
    const parsed = parseTextConfig(undefined)
    assert.equal(parsed.defaultProvider, 'omnimux')
    assert.equal(parsed.maxTokens, 4096)
    assert.deepEqual(parsed.models.map((row) => row.id), [...CHAT_MODEL_IDS])
    assert.equal(enabledTextModels(parsed).length, 8)
    assert.equal(parsed.models.find((row) => row.id === 'deepseek-v4-flash')?.role, 'classic')
    assert.equal(parsed.models.find((row) => row.id === 'grok-4.6')?.brand, 'xai')
  })

  it('rejects an id outside the chat directory', () => {
    assert.throws(
      () => parseTextConfig({ models: [{ id: 'claude-haiku-4-5' }] }),
      /not in the chat directory/,
    )
  })

  it('rejects a repeated id', () => {
    assert.throws(
      () => parseTextConfig({ models: [{ id: 'grok-4.6' }, { id: 'grok-4.6' }] }),
      /repeats id/,
    )
  })

  it('treats enabled false as absent at resolve', () => {
    const text = parseTextConfig({
      models: [
        { id: 'grok-4.6', enabled: false },
        { id: 'deepseek-v4-pro' },
      ],
    })
    assert.equal(enabledTextModels(text).map((row) => row.id).join(','), 'deepseek-v4-pro')
    assert.throws(
      () => resolveTextRoute({ model: 'grok-4.6' }, text),
      (error) => error instanceof OmnimuxError && error.code === 'unknown-model',
    )
  })

  it('requires a model when there is no image', () => {
    assert.throws(
      () => resolveTextRoute({ prompt: 'hi' }, parseTextConfig(undefined)),
      (error) => error instanceof OmnimuxError && error.code === 'omnimux-invalid-request',
    )
  })

  it('defaults a vision call to grok-4.6', () => {
    const route = resolveTextRoute({ image: '/tmp/a.png' }, parseTextConfig(undefined))
    assert.equal(route.modelId, 'grok-4.6')
    assert.equal(route.providerId, 'omnimux')
    assert.ok(route.input.includes('image'))
  })

  it('honors OMNIMUX_VISION_MODEL when that id is enabled and image-capable', () => {
    const text = parseTextConfig({
      models: [{ id: 'grok-4.6' }, { id: 'deepseek-v4-pro' }],
    })
    const route = resolveTextRoute({ image: '/tmp/a.png' }, text, { OMNIMUX_VISION_MODEL: 'grok-4.6' })
    assert.equal(route.modelId, 'grok-4.6')
  })

  it('rejects OMNIMUX_VISION_MODEL when the model is disabled', () => {
    const text = parseTextConfig({
      models: [{ id: 'grok-4.6', enabled: false }, { id: 'deepseek-v4-pro' }],
    })
    assert.throws(
      () => resolveTextRoute({ image: '/tmp/a.png' }, text, { OMNIMUX_VISION_MODEL: 'grok-4.6' }),
      (error) => error instanceof OmnimuxError && error.code === 'unknown-model',
    )
  })

  it('rejects an image on a text-only model', () => {
    assert.throws(
      () => resolveTextRoute({ model: 'deepseek-v4-flash', image: '/tmp/a.png' }, parseTextConfig(undefined)),
      (error) => error instanceof OmnimuxError
        && error.code === 'omnimux-invalid-request'
        && /does not declare image input/.test(error.message),
    )
  })

  it('pins an explicit enabled model', () => {
    const route = resolveTextRoute({ model: 'claude-opus-5' }, parseTextConfig(undefined))
    assert.equal(route.modelId, 'claude-opus-5')
    assert.deepEqual(route.input, ['text'])
  })

  it('keeps the default table frozen identity for omitted config', () => {
    assert.equal(DEFAULT_TEXT.models.length, 8)
    assert.equal(DEFAULT_TEXT.models[2].id, 'grok-4.6')
  })
})
