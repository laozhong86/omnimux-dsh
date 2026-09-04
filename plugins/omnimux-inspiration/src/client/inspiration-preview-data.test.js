import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { getInspirationPreviewData, hasDeconstruction } from './inspiration-preview-data.js'

describe('inspiration preview data', () => {
  it('prefers content over narrative and never invents timestamps', () => {
    const data = getInspirationPreviewData({ content: '脚本', analysis: { narrative_strategy: '策略' }, created_at: '2024-01-01', published_at: '2024-02-02' })
    assert.equal(data.script, '脚本')
    assert.equal(data.createdAt, '2024-01-01')
    assert.equal(Object.hasOwn(data, 'publishedAt'), false)
  })
  it('falls back to narrative then compatible caption', () => {
    assert.equal(getInspirationPreviewData({ analysis: { narrative_strategy: '策略' }, caption: '说明' }).script, '策略')
    assert.equal(getInspirationPreviewData({ caption: '说明' }).script, '说明')
  })
  it('handles malformed and empty legacy records', () => {
    const data = getInspirationPreviewData(null)
    assert.equal(data.title, '灵感详情')
    assert.equal(hasDeconstruction(data), false)
  })

  it('ignores non-text analysis fields instead of exposing render-unsafe values', () => {
    const data = getInspirationPreviewData({
      analysis: {
        narrative_strategy: { text: 'bad shape' },
        hook_highlight: { text: 'bad shape' },
        target_goal: ['bad shape'],
        visual_breakdown: 42,
        replication_action: false,
      },
    })
    assert.equal(data.script, '')
    assert.equal(data.hook, '')
    assert.equal(data.targetGoal, '')
    assert.equal(data.visual, '')
    assert.equal(data.replication, '')
    assert.equal(hasDeconstruction(data), false)
  })
})
