import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { apply } from '../index.js'

describe('hub apply composition', () => {
  it('registers media, text, and identity seams in a stable order', () => {
    const names = []
    const provided = []
    apply({
      tools: { register(tool) { names.push(tool.name) } },
      provide(name) { provided.push(name) },
      get() { return undefined },
    }, { official: { mount: false } })
    assert.deepEqual(provided, ['identity', 'videoGenerate', 'imageGenerate', 'textComplete'])
    assert.deepEqual(names, [
      'omnimux_video_submit',
      'omnimux_image_submit',
      'omnimux_text_complete',
    ])
  })
})
