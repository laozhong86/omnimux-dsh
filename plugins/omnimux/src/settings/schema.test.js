import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { SettingsConfig, parseSettingsSection, SETTINGS_DEFAULTS } from './schema.js'

describe('SettingsConfig', () => {
  it('fills defaults from empty input and is callable', () => {
    const parsed = SettingsConfig({})
    assert.deepEqual(parsed, { ...SETTINGS_DEFAULTS })
    assert.equal(SettingsConfig.type, 'object')
    assert.ok(SettingsConfig.dict.defaultTextModel)
    const json = SettingsConfig.toJSON()
    assert.equal(json.type, 'object')
    assert.ok(json.properties.defaultVideoModel)
  })

  it('keeps trimmed user overlays', () => {
    const parsed = parseSettingsSection({
      defaultTextModel: '  gpt-5.5  ',
      defaultImageModel: 'nanobanana-2',
    })
    assert.equal(parsed.defaultTextModel, 'gpt-5.5')
    assert.equal(parsed.defaultImageModel, 'nanobanana-2')
    assert.equal(parsed.defaultVideoModel, SETTINGS_DEFAULTS.defaultVideoModel)
  })
})
