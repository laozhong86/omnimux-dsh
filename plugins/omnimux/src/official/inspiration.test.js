import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import {
  listQueryString,
  listInspirations,
  mediaKeyFromHostPath,
  rewriteMediaUrlsForHost,
} from './inspiration.js'

describe('inspiration query + rewrite', () => {
  it('encodes list filters and skips empties', () => {
    assert.equal(listQueryString({}), '')
    assert.equal(listQueryString({ type: 'video', q: '猫', page: 2, tag: '' }), '?type=video&q=%E7%8C%AB&page=2')
  })

  it('rewrites gateway media URLs onto the Host prefix', () => {
    const payload = {
      success: true,
      data: {
        items: [{
          cover_key: '/api/inspiration/v1/media/seed/cover-04.jpg',
          media_keys: ['https://omnimux.ai/api/inspiration/v1/media/seed/video-04.mp4'],
          cover_url: '/api/inspiration/v1/media/covers/a.jpg',
          media_urls: ['https://omnimux.ai/api/inspiration/v1/media/clips/a.mp4'],
        }],
      },
    }
    const rewritten = rewriteMediaUrlsForHost(payload)
    assert.equal(rewritten.data.items[0].cover_key, '/omnimux/inspiration/media/seed/cover-04.jpg')
    assert.equal(rewritten.data.items[0].media_keys[0], '/omnimux/inspiration/media/seed/video-04.mp4')
    assert.equal(rewritten.data.items[0].cover_url, '/omnimux/inspiration/media/covers/a.jpg')
    assert.equal(rewritten.data.items[0].media_urls[0], '/omnimux/inspiration/media/clips/a.mp4')
  })

  it('leaves a bare media key (detail envelope) unchanged', () => {
    const payload = { success: true, data: { cover_key: 'seed/cover-04.jpg', media_keys: ['seed/video-04.mp4'] } }
    assert.deepEqual(rewriteMediaUrlsForHost(payload), payload)
  })

  it('leaves a payload without media URLs alone', () => {
    const payload = { success: true, data: { total: 0, items: [] } }
    assert.deepEqual(rewriteMediaUrlsForHost(payload), payload)
  })

  it('pulls the media key from the Host path', () => {
    assert.equal(mediaKeyFromHostPath('/omnimux/inspiration/media/covers/a.jpg'), 'covers/a.jpg')
    assert.equal(mediaKeyFromHostPath('/omnimux/inspiration/media/seed/cover-04.jpg'), 'seed/cover-04.jpg')
    assert.equal(mediaKeyFromHostPath('/omnimux/inspiration/status'), '')
    assert.equal(mediaKeyFromHostPath('/omnimux/inspiration/media/%2e%2e/etc/passwd'), '')
    assert.equal(mediaKeyFromHostPath('/omnimux/inspiration/media/../etc/passwd'), '')
  })

  it('lists through the official client', async () => {
    /** @type {string[]} */
    const seen = []
    const json = await listInspirations({
      withPat: async (path) => {
        seen.push(path)
        return { success: true, data: { total: 0, items: [] } }
      },
    }, { type: 'image', sort: 'hot' })
    assert.deepEqual(seen, ['/api/inspiration/v1/inspirations?type=image&sort=hot'])
    assert.equal(json.success, true)
  })
})
