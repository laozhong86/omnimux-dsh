import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { OmnimuxError } from '../media/errors.js'
import { fetchSocialData, resolveSocialDataModel } from './social-data.js'

describe('social data catalog', () => {
  it('resolves documented first-cut pairs', () => {
    assert.equal(resolveSocialDataModel({ platform: 'tiktok', capability: 'video', url: 'https://t' }).model, 'tiktok-video')
    assert.equal(resolveSocialDataModel({ platform: 'tiktok', capability: 'user', id: 'ada' }).model, 'tiktok-user')
    assert.equal(resolveSocialDataModel({ platform: 'instagram', capability: 'post', url: 'https://i' }).model, 'instagram-post')
  })

  it('rejects an unknown pair before HTTP', () => {
    assert.throws(
      () => resolveSocialDataModel({ platform: 'tiktok', capability: 'post', url: 'https://t' }),
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
