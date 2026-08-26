import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { OmnimuxError } from '../media/errors.js'
import { fetchSocialData, resolveSocialDataModel } from './social-data.js'

describe('social data catalog', () => {
  it('resolves documented platform pairs', () => {
    assert.equal(resolveSocialDataModel({ platform: 'tiktok', capability: 'video', url: 'https://t' }).model, 'tiktok-video')
    assert.equal(resolveSocialDataModel({ platform: 'tiktok', capability: 'user', id: 'ada' }).model, 'tiktok-user')
    assert.equal(resolveSocialDataModel({ platform: 'tiktok', capability: 'posts', id: 'ada' }).model, 'tiktok-posts')
    assert.equal(resolveSocialDataModel({ platform: 'tiktok', capability: 'search', query: 'trend' }).model, 'tiktok-search')

    assert.equal(resolveSocialDataModel({ platform: 'instagram', capability: 'post', url: 'https://i' }).model, 'instagram-post')
    assert.equal(resolveSocialDataModel({ platform: 'instagram', capability: 'user', id: 'ada' }).model, 'instagram-user')
    assert.equal(resolveSocialDataModel({ platform: 'instagram', capability: 'posts', id: 'ada' }).model, 'instagram-posts')
    assert.equal(resolveSocialDataModel({ platform: 'instagram', capability: 'search', query: 'art' }).model, 'instagram-search')

    assert.equal(resolveSocialDataModel({ platform: 'youtube', capability: 'video', url: 'https://y' }).model, 'youtube-video')
    assert.equal(resolveSocialDataModel({ platform: 'youtube', capability: 'user', id: 'ada' }).model, 'youtube-user')
    assert.equal(resolveSocialDataModel({ platform: 'youtube', capability: 'posts', id: 'ada' }).model, 'youtube-posts')
    assert.equal(resolveSocialDataModel({ platform: 'youtube', capability: 'search', query: 'news' }).model, 'youtube-search')

    assert.equal(resolveSocialDataModel({ platform: 'x', capability: 'tweet', url: 'https://x' }).model, 'x-tweet')
    assert.equal(resolveSocialDataModel({ platform: 'x', capability: 'user', id: 'ada' }).model, 'x-user')
    assert.equal(resolveSocialDataModel({ platform: 'x', capability: 'posts', id: 'ada' }).model, 'x-posts')
    assert.equal(resolveSocialDataModel({ platform: 'x', capability: 'search', query: 'ai' }).model, 'x-search')
  })

  it('rejects an unknown pair before HTTP', () => {
    assert.throws(
      () => resolveSocialDataModel({ platform: 'tiktok', capability: 'invalid_cap', url: 'https://t' }),
      (error) => error instanceof OmnimuxError && error.code === 'omnimux-invalid-request',
    )
    assert.throws(
      () => resolveSocialDataModel({ platform: 'unknown_platform', capability: 'video', url: 'https://t' }),
      (error) => error instanceof OmnimuxError && error.code === 'omnimux-invalid-request',
    )
  })

  it('posts the mapped model and returns parsed content', async () => {
    const seen = []
    const result = await fetchSocialData({
      async withSk(path, opts) {
        seen.push({ path, opts })
        return {
          choices: [{ message: { content: '{"title":"clip"}' } }],
        }
      },
    }, { platform: 'tiktok', capability: 'video', url: 'https://tiktok.com/x' })
    assert.equal(seen[0].path, '/v1/chat/completions')
    assert.equal(seen[0].opts.body.model, 'tiktok-video')
    assert.equal(result.data.title, 'clip')
  })
})
