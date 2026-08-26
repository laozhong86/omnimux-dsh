import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import {
  compileContinuityPrompt,
  DEFAULT_NEGATIVE_TOKENS,
  normalizeCharacterToken,
  normalizeSceneToken,
} from './continuity.js'

describe('character & scene continuity token schema', () => {
  it('normalizes character continuity token with LoRAs and faceRefs', () => {
    const char = normalizeCharacterToken({
      characterId: 'ch_wei_an',
      name: 'Wei-An',
      faceRef: 'asset://character/ch_wei_an/face.png',
      costumeId: 'tactical_black_suit',
      loraWeights: { 'wei_an_v2': 0.8 },
      fixedPromptTokens: ['silver short hair', 'blue eyes'],
      negativeTokens: ['glasses', 'long hair'],
    })

    assert.equal(char.characterId, 'ch_wei_an')
    assert.equal(char.name, 'Wei-An')
    assert.equal(char.faceRef, 'asset://character/ch_wei_an/face.png')
    assert.deepEqual(char.loraWeights, { 'wei_an_v2': 0.8 })
    assert.deepEqual(char.fixedPromptTokens, ['silver short hair', 'blue eyes'])
    assert.deepEqual(char.negativeTokens, ['glasses', 'long hair'])
  })

  it('normalizes scene continuity token with lighting and lut', () => {
    const scene = normalizeSceneToken({
      sceneId: 'sc_cyberpunk_alley',
      name: 'Cyberpunk Alley',
      environmentRef: 'asset://scene/sc_cyberpunk_alley/env.hdr',
      lightingProfile: 'neon rim light, dark rainy atmosphere',
      colorGradeLut: 'asset://style/luts/cold_teal.cube',
      fixedPromptTokens: ['wet asphalt reflecting neon signs', 'steam rising from manholes'],
      negativeTokens: ['sunlight', 'daytime'],
    })

    assert.equal(scene.sceneId, 'sc_cyberpunk_alley')
    assert.equal(scene.lightingProfile, 'neon rim light, dark rainy atmosphere')
    assert.equal(scene.colorGradeLut, 'asset://style/luts/cold_teal.cube')
  })

  it('compiles full shot continuity prompt correctly', () => {
    const compiled = compileContinuityPrompt({
      shotId: 'e01_s01',
      styleToken: '8k cinematic masterpiece, shot on arri alexa',
      scene: {
        sceneId: 'sc_alley',
        name: 'Dark Alley',
        lightingProfile: 'neon cyberpunk glow',
        fixedPromptTokens: ['rain drenched alley'],
        negativeTokens: ['bright sunny day'],
      },
      characters: [
        {
          characterId: 'ch_wei_an',
          name: 'Wei-An',
          faceRef: 'asset://character/ch_wei_an/face.png',
          costumeId: 'black trench coat',
          loraWeights: { 'weian_lora': 0.85 },
          fixedPromptTokens: ['silver hair'],
          negativeTokens: ['beard'],
        },
      ],
      visualDescription: 'Wei-An draws her weapon, stepping cautiously forward',
      extraNegative: ['oversaturated'],
    })

    assert.equal(compiled.shotId, 'e01_s01')
    // Positive prompt checks
    assert.ok(compiled.positivePrompt.includes('8k cinematic masterpiece'))
    assert.ok(compiled.positivePrompt.includes('rain drenched alley'))
    assert.ok(compiled.positivePrompt.includes('lighting: neon cyberpunk glow'))
    assert.ok(compiled.positivePrompt.includes('silver hair, wearing black trench coat'))
    assert.ok(compiled.positivePrompt.includes('<lora:weian_lora:0.85>'))
    assert.ok(compiled.positivePrompt.includes('Wei-An draws her weapon'))

    // LoRA and face references extraction
    assert.deepEqual(compiled.loras, { 'weian_lora': 0.85 })
    assert.deepEqual(compiled.faceRefs, [{ characterId: 'ch_wei_an', ref: 'asset://character/ch_wei_an/face.png' }])

    // Negative prompt checks
    assert.ok(compiled.negativePrompt.includes('bright sunny day'))
    assert.ok(compiled.negativePrompt.includes('beard'))
    assert.ok(compiled.negativePrompt.includes('oversaturated'))
    for (const defNeg of DEFAULT_NEGATIVE_TOKENS) {
      assert.ok(compiled.negativePrompt.includes(defNeg))
    }
  })
})
