import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { mountOfficial } from './mount.js'

function registerCapture() {
  const names = []
  /** @type {Record<string, string>} */
  const descriptions = {}
  return {
    names,
    descriptions,
    ctx: {
      tools: {
        register(tool) {
          names.push(tool.name)
          descriptions[tool.name] = tool.description
        },
      },
    },
    deps: {
      hub: { official: { mount: true } },
      identity: { require: async () => ({ id: 'u' }) },
      store: { resolve: async () => 'tok' },
      siteBaseUrl: 'https://omnimux.ai',
      objectParams: (fields) => ({ type: 'object', properties: fields }),
      jsonOut: { type: 'object' },
      rethrow: (error) => {
        throw error
      },
    },
  }
}

describe('official mount', () => {
  it('registers official tools by default', () => {
    const capture = registerCapture()
    mountOfficial(capture.ctx, capture.deps)
    assert.ok(capture.names.includes('omnimux_social_data'))
    assert.match(capture.descriptions.omnimux_social_data, /NOT publishing/)
    assert.match(capture.descriptions.omnimux_social_data, /tweet_id/)
    assert.match(capture.descriptions.omnimux_social_data, /media\.video/)
    assert.match(capture.descriptions.omnimux_social_data, /text\/display_text/)
    assert.ok(capture.names.includes('omnimux_accounts_list'))
    assert.ok(capture.names.includes('omnimux_publish_create'))
    assert.ok(capture.names.includes('omnimux_inspiration_list'))
    assert.ok(capture.names.includes('omnimux_analytics_daily_metrics'))
    assert.ok(capture.names.includes('omnimux_analytics_best_time'))
    assert.ok(capture.names.includes('omnimux_analytics_frequency'))
    assert.ok(capture.names.includes('omnimux_analytics_content_decay'))
    assert.ok(capture.names.includes('omnimux_analytics_follower_stats'))
    assert.ok(capture.names.includes('omnimux_analytics_posts'))
    assert.ok(capture.names.includes('omnimux_analytics_sync_external'))
    assert.ok(capture.names.includes('omnimux_analytics_inbox'))
  })

  it('skips official tools when official.mount is false', () => {
    const capture = registerCapture()
    mountOfficial(capture.ctx, {
      ...capture.deps,
      hub: { official: { mount: false } },
    })
    assert.equal(capture.names.includes('omnimux_social_data'), false)
    assert.equal(capture.names.length, 0)
  })
})
