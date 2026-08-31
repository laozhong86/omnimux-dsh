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
    assert.deepEqual(provided, ['identity', 'videoGenerate', 'imageGenerate', 'audioGenerate', 'textComplete'])
    assert.deepEqual(names, [
      'omnimux_video_submit',
      'omnimux_image_submit',
      'omnimux_audio_submit',
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
    assert(provided.audioGenerate && typeof provided.audioGenerate.execute === 'function')
  })

  it('registers all 28 tools and 5 seams by default', () => {
    const names = []
    const provided = []
    apply({
      tools: { register(tool) { names.push(tool.name) } },
      provide(name) { provided.push(name) },
      get() { return undefined },
    })

    assert.equal(names.length, 28)
    assert.ok(names.includes('omnimux_video_submit'))
    assert.ok(names.includes('omnimux_image_submit'))
    assert.ok(names.includes('omnimux_audio_submit'))
    assert.ok(names.includes('omnimux_text_complete'))
    assert.ok(names.includes('omnimux_page_fetch'))
    assert.ok(names.includes('omnimux_social_data'))
    assert.ok(names.includes('omnimux_accounts_list'))

    assert.deepEqual(provided, ['identity', 'videoGenerate', 'imageGenerate', 'audioGenerate', 'textComplete'])
  })

  it('disables all gated capabilities when gate.enabled is false', () => {
    const names = []
    const provided = []
    apply({
      tools: { register(tool) { names.push(tool.name) } },
      provide(name) { provided.push(name) },
      get() { return undefined },
    }, { gate: { enabled: false } })

    assert.equal(names.length, 0)
    assert.deepEqual(provided, ['identity'])
  })

  it('fine-grained disables media, text models, and official tools via gate', () => {
    const tools = {}
    const provided = []
    apply({
      tools: { register(tool) { tools[tool.name] = tool } },
      provide(name) { provided.push(name) },
      get() { return undefined },
    }, {
      gate: {
        media: { video: false },
        tools: { omnimux_social_data: false },
        models: { textComplete: { 'grok-4.6': false } },
      },
    })

    assert.equal(tools.omnimux_video_submit, undefined)
    assert.ok(tools.omnimux_image_submit)
    assert.ok(tools.omnimux_audio_submit)
    assert.equal(tools.omnimux_social_data, undefined)
    assert.ok(tools.omnimux_page_fetch)
    assert.ok(tools.omnimux_accounts_list)

    assert.deepEqual(provided, ['identity', 'imageGenerate', 'audioGenerate', 'textComplete'])

    // grok-4.6 excluded from enum
    const textEnum = tools.omnimux_text_complete.parameters.properties.model.enum
    assert.ok(!textEnum.includes('grok-4.6'))
    assert.ok(textEnum.includes('gemini-3.7-flash'))
  })
})
