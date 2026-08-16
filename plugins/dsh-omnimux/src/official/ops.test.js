import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { apply } from '../index.js'
import { OmnimuxError } from '../media/errors.js'
import { createOfficialClient } from './client.js'
import { connectAccount, disconnectAccount, listAccounts } from './accounts.js'
import { createPost, getPost, presignMedia } from './publish.js'
import { fetchSocialData } from './social-data.js'

function mockClient(handler) {
  return createOfficialClient({
    siteBaseUrl: 'https://omnimux.ai',
    apiBaseUrl: 'https://api.omnimux.ai',
    resolveApiKey: () => 'sk-x',
    resolveAccess: async () => ({ token: 'pat-x', userId: 7 }),
    fetcher: handler,
  })
}

describe('official social ops', () => {
  it('lists, connects, and disconnects through /api/social/v1', async () => {
    const seen = []
    const client = mockClient(async (url, init) => {
      seen.push({ url: String(url), method: init.method || 'GET', headers: init.headers, body: init.body })
      return { ok: true, status: 200, json: async () => ({ ok: true }) }
    })
    await listAccounts(client)
    await connectAccount(client, { platform: 'tiktok', redirect_url: 'https://app/cb' })
    await disconnectAccount(client, { id: 'acc-1' })
    assert.equal(seen[0].url, 'https://omnimux.ai/api/social/v1/accounts')
    assert.equal(seen[1].url, 'https://omnimux.ai/api/social/v1/connect')
    assert.equal(seen[1].method, 'POST')
    assert.equal(JSON.parse(seen[1].body).platform, 'tiktok')
    assert.equal(seen[2].url, 'https://omnimux.ai/api/social/v1/accounts/acc-1')
    assert.equal(seen[2].method, 'DELETE')
    assert.equal(seen[0].headers['New-Api-User'], '7')
  })

  it('presigns, creates, and reads posts through /api/social/v1', async () => {
    const seen = []
    const client = mockClient(async (url, init) => {
      seen.push({ url: String(url), method: init.method || 'GET', body: init.body })
      return { ok: true, status: 200, json: async () => ({ id: 'post-1' }) }
    })
    await presignMedia(client, { filename: 'a.mp4', content_type: 'video/mp4' })
    await createPost(client, { account_ids: ['acc-1'], content: 'hello' })
    await getPost(client, { id: 'post-1' })
    assert.equal(seen[0].url, 'https://omnimux.ai/api/social/v1/media/presign')
    assert.equal(JSON.parse(seen[0].body).filename, 'a.mp4')
    assert.equal(seen[1].url, 'https://omnimux.ai/api/social/v1/posts')
    assert.equal(seen[2].url, 'https://omnimux.ai/api/social/v1/posts/post-1')
  })

  it('unsigned account tools throw needs-omnimux', async () => {
    const tools = {}
    apply({
      tools: { register(tool) { tools[tool.name] = tool } },
      provide() {},
      get() { return undefined },
    })
    await assert.rejects(
      () => tools.omnimux_accounts_list.execute({}),
      (error) => error instanceof OmnimuxError && error.code === 'needs-omnimux',
    )
    await assert.rejects(
      () => tools.omnimux_publish_get.execute({ id: 'p1' }),
      (error) => error instanceof OmnimuxError && error.code === 'needs-omnimux',
    )
  })

  it('social data without a key is omnimux-unconfigured', async () => {
    const client = createOfficialClient({
      siteBaseUrl: 'https://omnimux.ai',
      resolveApiKey: () => '',
      resolveAccess: async () => ({ token: '' }),
    })
    await assert.rejects(
      () => fetchSocialData(client, { platform: 'tiktok', capability: 'video', url: 'https://t' }),
      (error) => error instanceof OmnimuxError && error.code === 'omnimux-unconfigured',
    )
  })
})
