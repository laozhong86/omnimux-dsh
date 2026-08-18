import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { filterAccounts, pickAccount, pickAccountsView, pickConnectView } from './public-account.js'

describe('pickAccount', () => {
  it('keeps public fields and drops secrets', () => {
    const picked = pickAccount({
      id: 9,
      platform: 'tiktok',
      display_name: 'Ada',
      group: 'ops',
      access_token: 'pat-nope',
      avatar_url: 'https://cdn.example/a.png',
      email: 'hidden@x',
    })
    assert.equal(picked.id, '9')
    assert.equal(picked.platform, 'tiktok')
    assert.equal(picked.avatar_url, 'https://cdn.example/a.png')
    assert.equal('access_token' in picked, false)
    assert.equal('email' in picked, false)
  })

  it('drops a non-https avatar', () => {
    const picked = pickAccount({ id: 'a', avatar_url: 'http://insecure/a.png' })
    assert.equal('avatar_url' in picked, false)
  })
})

describe('pickAccountsView', () => {
  it('unwraps data.accounts and filters by platform or group', () => {
    const raw = {
      data: {
        accounts: [
          { id: 'a', platform: 'tiktok', group: 'ops' },
          { id: 'b', platform: 'youtube', group: 'ads' },
        ],
      },
    }
    assert.deepEqual(pickAccountsView(raw).accounts.map((row) => row.id), ['a', 'b'])
    assert.deepEqual(filterAccounts(raw, { platform: 'TikTok' }).accounts.map((row) => row.id), ['a'])
    assert.deepEqual(filterAccounts(raw, { group: 'ADS' }).accounts.map((row) => row.id), ['b'])
  })
})

describe('pickConnectView', () => {
  it('keeps only an https auth_url', () => {
    assert.equal(pickConnectView({ data: { auth_url: 'https://omnimux.ai/connect' } }).auth_url, 'https://omnimux.ai/connect')
    assert.equal(pickConnectView({ auth_url: 'http://evil' }).auth_url, '')
  })
})
