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

  it('passes token store and credentials seam to media generators', async () => {
    const provided = {}
    const tools = {}
    const credMock = {
      resolve: async (ref) => (ref === 'OMNIMUX_ACCESS_TOKEN' ? { value: 'pat-from-ctx-cred' } : undefined),
    }
    apply({
      tools: { register(tool) { tools[tool.name] = tool } },
      provide(name, api) { provided[name] = api },
      get(name) { return name === 'credentials' ? credMock : undefined },
    }, { official: { mount: false } })

    assert(provided.imageGenerate && typeof provided.imageGenerate.execute === 'function')
    assert(provided.videoGenerate && typeof provided.videoGenerate.execute === 'function')
  })
})
