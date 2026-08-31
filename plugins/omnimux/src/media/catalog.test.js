import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { AUDIO_MODEL_SPECS, IMAGE_MODEL_SPECS, VIDEO_MODEL_SPECS, findMediaModel } from './catalog.js'

describe('hub media catalog tables', () => {
  it('GPT Image 2 only lists auto, 1:1, 16:9, 9:16 aspect ratios', () => {
    const gpt = IMAGE_MODEL_SPECS.find((m) => m.id === 'gpt-image-2')
    assert.ok(gpt)
    const ratioValues = gpt.parameters.aspectRatio?.options.map((o) => o.value)
    assert.deepEqual(ratioValues, ['auto', '1:1', '16:9', '9:16'])
    assert.equal(gpt.parameters.aspectRatio?.defaultValue, '16:9')
  })

  it('Seedream 5.0 Pro includes 4:3 and 21:9', () => {
    const seedream = IMAGE_MODEL_SPECS.find((m) => m.id === 'seedream-5.0-pro')
    assert.ok(seedream)
    const ratioValues = seedream.parameters.aspectRatio?.options.map((o) => o.value)
    assert.ok(ratioValues?.includes('4:3'))
    assert.ok(ratioValues?.includes('21:9'))
    assert.ok(ratioValues?.includes('16:9'))
  })

  it('Kling O3 supports 5/10/15s and 4K', () => {
    const klingO3 = VIDEO_MODEL_SPECS.find((m) => m.id === 'kling-o3')
    assert.ok(klingO3)
    const durations = klingO3.parameters.duration?.options?.map((o) => o.value)
    assert.deepEqual(durations, [5, 10, 15])
    const resolutions = klingO3.parameters.resolution?.options?.map((o) => o.value)
    assert.deepEqual(resolutions, ['1080P', '4K'])
    assert.equal(klingO3.parameters.sound?.supported, true)
  })

  it('Veo 3.1 defaults to 8s', () => {
    const veo = VIDEO_MODEL_SPECS.find((m) => m.id === 'veo-3.1')
    assert.ok(veo)
    assert.equal(veo.parameters.duration?.defaultValue, 8)
  })

  it('audio table includes suno and gpt-4o-mini-tts', () => {
    assert.ok(findMediaModel('audio', 'suno'))
    assert.ok(AUDIO_MODEL_SPECS.some((row) => row.id === 'gpt-4o-mini-tts'))
  })
})
