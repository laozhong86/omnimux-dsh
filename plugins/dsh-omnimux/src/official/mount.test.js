import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { apply } from '../index.js'

describe('official mount', () => {
  it('registers official tools by default', () => {
    const names = []
    apply({
      tools: { register(tool) { names.push(tool.name) } },
      provide() {},
      get() { return undefined },
    })
    assert.ok(names.includes('omnimux_social_data'))
    assert.ok(names.includes('omnimux_accounts_list'))
    assert.ok(names.includes('omnimux_publish_create'))
  })

  it('skips official tools when official.mount is false', () => {
    const names = []
    apply({
      tools: { register(tool) { names.push(tool.name) } },
      provide() {},
      get() { return undefined },
    }, { official: { mount: false } })
    assert.equal(names.includes('omnimux_social_data'), false)
    assert.ok(names.includes('omnimux_video_submit'))
    assert.ok(names.includes('omnimux_image_submit'))
  })
})
