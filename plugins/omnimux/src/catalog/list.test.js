import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { parseHubConfig } from '../config.js'
import { IMAGE_MODEL_SPECS, VIDEO_MODEL_SPECS, AUDIO_MODEL_SPECS } from '../media/catalog.js'
import { buildModelCatalog, resolveDefault } from './list.js'
import { sortCatalogRows } from './sort.js'

describe('sortCatalogRows', () => {
  it('sorts by label with numeric collation and does not mutate input', () => {
    const rows = [
      { id: 'b', label: 'Seedance 2.0' },
      { id: 'a', label: 'Claude 4.6' },
      { id: 'c', label: 'Seedance 10' },
    ]
    const snapshot = rows.map((row) => row.id)
    assert.deepEqual(sortCatalogRows(rows).map((row) => row.label), ['Claude 4.6', 'Seedance 2.0', 'Seedance 10'])
    assert.deepEqual(rows.map((row) => row.id), snapshot)
    assert.deepEqual(sortCatalogRows([]), [])
    assert.deepEqual(sortCatalogRows(null), [])
  })
})

describe('buildModelCatalog', () => {
  it('returns sorted lists, fingerprint, and config defaults', () => {
    const catalog = buildModelCatalog({ text: parseHubConfig({}).text, media: parseHubConfig({}).media, env: {} })
    assert.equal(catalog.source, 'omnimux')
    assert.equal(typeof catalog.fingerprint, 'string')
    assert.equal(catalog.fingerprint.length, 16)
    assert.equal(catalog.defaults.text, 'gemini-3.7-flash')
    assert.equal(catalog.defaults.image, 'gpt-image-2')
    assert.equal(catalog.defaults.video, 'seedance-2-0-fast')
    assert.equal(catalog.defaults.audio, 'suno')
    assert.ok(catalog.text.length >= 5)
    assert.equal(catalog.image.length, IMAGE_MODEL_SPECS.length)
    assert.equal(catalog.video.length, VIDEO_MODEL_SPECS.length)
    assert.equal(catalog.audio.length, AUDIO_MODEL_SPECS.length)
    assert.ok(catalog.image.some((row) => row.id === 'gpt-image-2' && row.parameters))
    assert.ok(catalog.video.some((row) => row.id === 'kling-o1'))
    assert.ok(catalog.video.some((row) => row.id === 'wan-2.6'))
    const labels = catalog.text.map((row) => row.label)
    const sorted = [...labels].sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
    assert.deepEqual(labels, sorted)
  })

  it('lets env overlay defaults without shrinking lists', () => {
    const hub = parseHubConfig({})
    const catalog = buildModelCatalog({
      text: hub.text,
      media: hub.media,
      env: { OMNIMUX_VIDEO_MODEL: 'kling-o1', OMNIMUX_TEXT_DEFAULT_MODEL: 'gpt-5.5' },
    })
    assert.equal(catalog.defaults.video, 'kling-o1')
    assert.equal(catalog.defaults.text, 'gpt-5.5')
    assert.equal(catalog.video.length, VIDEO_MODEL_SPECS.length)
    assert.ok(catalog.video.some((row) => row.id === 'seedance-2-0-fast'))
  })

  it('ignores env / settings ids that are not in the list', () => {
    const hub = parseHubConfig({})
    const catalog = buildModelCatalog({
      text: hub.text,
      media: hub.media,
      env: { OMNIMUX_VIDEO_MODEL: 'not-a-real-model' },
      settingsDefaults: { defaultTextModel: 'totally-fake' },
    })
    assert.equal(catalog.defaults.video, 'seedance-2-0-fast')
    assert.equal(catalog.defaults.text, 'gemini-3.7-flash')
  })

  it('prefers settings overlay over config when env is absent', () => {
    const hub = parseHubConfig({})
    const catalog = buildModelCatalog({
      text: hub.text,
      media: hub.media,
      env: {},
      settingsDefaults: { defaultImageModel: 'nanobanana-2', defaultAudioModel: 'gpt-4o-mini-tts' },
    })
    assert.equal(catalog.defaults.image, 'nanobanana-2')
    assert.equal(catalog.defaults.audio, 'gpt-4o-mini-tts')
    assert.equal(catalog.image.length, IMAGE_MODEL_SPECS.length)
  })

  it('empties a media kind when the gate disables it', () => {
    const hub = parseHubConfig({ gate: { media: { video: false } } })
    const catalog = buildModelCatalog({ text: hub.text, media: hub.media, gate: hub.gate, env: {} })
    assert.deepEqual(catalog.video, [])
    assert.equal(catalog.defaults.video, '')
    assert.ok(catalog.image.length > 0)
  })

  it('hides a gated text model from the list', () => {
    const hub = parseHubConfig({ gate: { models: { textComplete: { 'grok-4.6': false } } } })
    const catalog = buildModelCatalog({ text: hub.text, media: hub.media, gate: hub.gate, env: {} })
    assert.ok(!catalog.text.some((row) => row.id === 'grok-4.6'))
    assert.ok(catalog.text.some((row) => row.id === 'gemini-3.7-flash'))
  })
})

describe('resolveDefault', () => {
  it('walks env → settings → config → first sorted id', () => {
    const ids = new Set(['a', 'b'])
    assert.equal(resolveDefault({
      kind: 'text',
      ids,
      env: { OMNIMUX_TEXT_DEFAULT_MODEL: 'b' },
      settingsDefaults: { defaultTextModel: 'a' },
      configDefault: 'a',
      fallback: 'a',
    }), 'b')
    assert.equal(resolveDefault({
      kind: 'text',
      ids,
      env: {},
      settingsDefaults: { defaultTextModel: 'b' },
      configDefault: 'a',
      fallback: 'a',
    }), 'b')
    assert.equal(resolveDefault({
      kind: 'text',
      ids,
      env: { OMNIMUX_TEXT_DEFAULT_MODEL: 'missing' },
      settingsDefaults: { defaultTextModel: 'missing' },
      configDefault: 'a',
      fallback: 'b',
    }), 'a')
  })
})
