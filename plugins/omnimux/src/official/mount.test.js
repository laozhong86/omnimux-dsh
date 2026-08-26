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
    assert.ok(names.includes('omnimux_inspiration_list'))
    assert.ok(names.includes('omnimux_analytics_daily_metrics'))
    assert.ok(names.includes('omnimux_analytics_best_time'))
    assert.ok(names.includes('omnimux_analytics_frequency'))
    assert.ok(names.includes('omnimux_analytics_content_decay'))
    assert.ok(names.includes('omnimux_analytics_follower_stats'))
    assert.ok(names.includes('omnimux_analytics_posts'))
    assert.ok(names.includes('omnimux_analytics_sync_external'))
    assert.ok(names.includes('omnimux_analytics_inbox'))
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
    assert.ok(names.includes('omnimux_text_complete'))
  })
})
