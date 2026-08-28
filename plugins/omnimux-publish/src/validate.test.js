import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { parseDraftPayload, validateContent, validateForSubmit, validationError } from './validate.js'
import { PublishError } from './store.js'

const PLATFORMS = {
  xiaohongshu: { media_types: ['image', 'video'], supports_cover: false, supports_schedule: false, max_images: 18 },
  douyin: { media_types: ['video', 'image'], supports_cover: true, supports_schedule: true, max_images: 35 },
  bilibili: { media_types: ['video'], supports_cover: true, supports_schedule: false },
}

const ACCOUNTS = [
  { id: 'a1', platform: 'xiaohongshu', status: 'active' },
  { id: 'a2', platform: 'douyin', status: 'active' },
  { id: 'a3', platform: 'douyin', status: 'expired' },
  { id: 'a4', platform: 'xiaohongshu', status: 'active', agent_usable: false },
  { id: 'a5', platform: 'telegram', status: 'active' },
]

describe('validateContent（草稿内容自身校验）', () => {
  it('accepts a well-formed image draft', () => {
    const errors = validateContent({
      type: 'image',
      title: '标题',
      description: '描述',
      mediaRows: [{ id: 'm1', kind: 'image' }, { id: 'm2', kind: 'image' }],
      coverRow: null,
    })
    assert.deepEqual(errors, [])
  })

  it('accepts a well-formed video draft', () => {
    const errors = validateContent({
      type: 'video',
      description: '描述',
      mediaRows: [{ id: 'm1', kind: 'video' }],
      coverRow: { id: 'c1', kind: 'image' },
    })
    assert.deepEqual(errors, [])
  })

  it('rejects image draft without title / images', () => {
    const errors = validateContent({ type: 'image', mediaRows: [], title: '' })
    assert.ok(errors.some((e) => e.code === 'image-required'))
    assert.ok(errors.some((e) => e.code === 'title-required'))
    assert.ok(errors.some((e) => e.code === 'text-required'))
  })

  it('rejects video draft without a video file', () => {
    const errors = validateContent({ type: 'video', description: 'd', mediaRows: [{ id: 'm1', kind: 'image' }] })
    assert.ok(errors.some((e) => e.code === 'video-required'))
  })

  it('rejects unknown media kinds and non-image covers', () => {
    const errors = validateContent({
      type: 'image', title: 't',
      mediaRows: [{ id: 'm1', kind: 'image' }, { id: 'm2', kind: 'other' }],
      coverRow: { id: 'c1', kind: 'video' },
    })
    assert.ok(errors.some((e) => e.code === 'media-kind-unsupported'))
    assert.ok(errors.some((e) => e.code === 'cover-not-image'))
  })
})

describe('validateForSubmit 三分支：能力冲突 / 账号不可用 / 账号不存在', () => {
  const imageDraft = {
    type: 'image',
    title: '标题',
    description: '描述',
    mediaRows: Array.from({ length: 20 }, (_, i) => ({ id: `m${i}`, kind: 'image' })),
    coverRow: { id: 'c1', kind: 'image' },
  }

  it('capability conflict: platform without image support + cover unsupported + image cap exceeded', () => {
    const verdict = validateForSubmit(
      { ...imageDraft, account_ids: ['a2'] }, // douyin: image ok, cover ok, 20 < 35
      { accounts: ACCOUNTS, platforms: PLATFORMS },
    )
    assert.equal(verdict.ok, true)

    const conflicts = validateForSubmit(
      { ...imageDraft, account_ids: ['a1'] }, // xiaohongshu: supports_cover false; 20 > 18
      { accounts: ACCOUNTS, platforms: PLATFORMS },
    )
    assert.equal(conflicts.ok, false)
    const codes = conflicts.errors.map((e) => e.code)
    assert.ok(codes.includes('capability-conflict'))
    assert.ok(conflicts.errors.some((e) => /不支持封面/.test(e.message)))
    assert.ok(conflicts.errors.some((e) => /最多 18 张图/.test(e.message)))

    const videoOnly = validateForSubmit(
      { type: 'video', description: 'd', mediaRows: [{ id: 'v1', kind: 'video' }], account_ids: ['a5b'] },
      { accounts: [ACCOUNTS[0]], platforms: PLATFORMS },
    )
    // 平台不在矩阵 → platform-unknown（能力矩阵的另一分支）
    const unknown = validateForSubmit(
      { type: 'image', title: 't', mediaRows: [{ id: 'm1', kind: 'image' }], account_ids: ['a5'] },
      { accounts: ACCOUNTS, platforms: PLATFORMS },
    )
    assert.ok(unknown.errors.some((e) => e.code === 'platform-unknown'))
    assert.ok(videoOnly.errors.some((e) => e.code === 'account-not-found'))
  })

  it('account unavailable: expired token or agent_usable=false', () => {
    const base = { type: 'image', title: 't', mediaRows: [{ id: 'm1', kind: 'image' }] }
    const expired = validateForSubmit({ ...base, account_ids: ['a3'] }, { accounts: ACCOUNTS, platforms: PLATFORMS })
    assert.ok(expired.errors.some((e) => e.code === 'account-unavailable' && /expired/.test(e.message)))
    const unusable = validateForSubmit({ ...base, account_ids: ['a4'] }, { accounts: ACCOUNTS, platforms: PLATFORMS })
    assert.ok(unusable.errors.some((e) => e.code === 'account-unavailable' && /agent_usable/.test(e.message)))
  })

  it('no accounts → accounts-required (未选账号分支)', () => {
    const verdict = validateForSubmit(
      { type: 'image', title: 't', mediaRows: [{ id: 'm1', kind: 'image' }], account_ids: [] },
      { accounts: ACCOUNTS, platforms: PLATFORMS },
    )
    assert.ok(verdict.errors.some((e) => e.code === 'accounts-required'))
  })

  it('video media type vs image-only platform conflicts', () => {
    // bilibili 支持视频 → 通过
    const verdict = validateForSubmit(
      { type: 'video', description: 'd', mediaRows: [{ id: 'v1', kind: 'video' }], account_ids: ['a1'] },
      { accounts: [{ id: 'a1', platform: 'bilibili', status: 'active' }], platforms: PLATFORMS },
    )
    assert.equal(verdict.ok, true)
    // xiaohongshu media_types 含 video → 通过
    const verdict2 = validateForSubmit(
      { type: 'video', description: 'd', mediaRows: [{ id: 'v1', kind: 'video' }], account_ids: ['a2'] },
      { accounts: ACCOUNTS, platforms: PLATFORMS },
    )
    assert.equal(verdict2.ok, true)
    // 只支持 image 的平台 → capability-conflict
    const imageOnlyPlatform = validateForSubmit(
      { type: 'video', description: 'd', mediaRows: [{ id: 'v1', kind: 'video' }], account_ids: ['a6'] },
      { accounts: [...ACCOUNTS, { id: 'a6', platform: 'weibo', status: 'active' }], platforms: { weibo: { media_types: ['image'], supports_cover: false } } },
    )
    assert.ok(imageOnlyPlatform.errors.some((e) => e.code === 'capability-conflict' && /不支持视频/.test(e.message)))
  })
})

describe('validationError 形态', () => {
  it('carries structured details for the tool/HTTP faces', () => {
    const error = validationError([{ code: 'image-required', field: 'media', message: 'x' }])
    assert.ok(error instanceof PublishError)
    assert.equal(error.code, 'validation-failed')
    assert.deepEqual(error.details.errors.length, 1)
  })
})

describe('parseDraftPayload', () => {
  it('normalizes media refs with path or media_id', () => {
    const parsed = parseDraftPayload({ title: 't', media: [{ path: '/a.png' }, { media_id: 'abc' }] })
    assert.deepEqual(parsed.media, [{ path: '/a.png' }, { media_id: 'abc' }])
  })

  it('rejects media entries without path/media_id', () => {
    assert.throws(() => parseDraftPayload({ media: [{}] }), (e) => e.code === 'invalid-arguments')
    assert.throws(() => parseDraftPayload({ media: 'nope' }), (e) => e.code === 'invalid-arguments')
  })

  it('parses cover and rejects bad topics', () => {
    const parsed = parseDraftPayload({ cover: { media_id: 'c' }, topics: ['a', 'b'] })
    assert.deepEqual(parsed.cover, { media_id: 'c' })
    assert.throws(() => parseDraftPayload({ topics: [1] }), (e) => e.code === 'invalid-arguments')
    assert.throws(() => parseDraftPayload({ cover: {} }), (e) => e.code === 'invalid-arguments')
  })

  it('rejects non-object payloads', () => {
    assert.throws(() => parseDraftPayload('x'), (e) => e.code === 'invalid-arguments')
  })
})
