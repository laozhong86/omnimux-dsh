import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { describe, it } from 'node:test'
import { fileURLToPath } from 'node:url'
import {
  FALLBACK_TITLE,
  MAX_TITLE,
  REPLICATION_SKILL,
  buildReplicationPrompt,
  deriveProjectTitle,
  resolveMediaType,
  sanitizeFolderName,
} from './replication.js'

const here = dirname(fileURLToPath(import.meta.url))
const source = readFileSync(join(here, 'replication.js'), 'utf8')

describe('replication.js isolation', () => {
  it('does not import workflow or touch browser globals', () => {
    assert.doesNotMatch(source, /omnimux-workflow/)
    assert.doesNotMatch(source, /\bwindow\./)
    assert.doesNotMatch(source, /\bdocument\./)
  })
})

describe('sanitizeFolderName', () => {
  it('keeps CJK and replaces path separators', () => {
    assert.equal(sanitizeFolderName('  宣传片  '), '宣传片')
    assert.equal(sanitizeFolderName('a/b\\c:d'), 'a_b_c_d')
    assert.equal(sanitizeFolderName('...'), '')
  })
})

describe('deriveProjectTitle', () => {
  it('uses the row title when present', () => {
    assert.equal(deriveProjectTitle({ title: '  夏日护肤  ', id: 'x' }), '夏日护肤')
  })

  it('strips http(s) from a URL title and sanitizes path chars', () => {
    assert.equal(
      deriveProjectTitle({ source_url: 'https://www.tiktok.com/@a/video/1' }),
      'tiktok.com_@a_video_1',
    )
  })

  it('falls back to 灵感复刻 when empty / dots-only', () => {
    assert.equal(deriveProjectTitle({ title: '   ' }), FALLBACK_TITLE)
    assert.equal(deriveProjectTitle({ title: '...' }), FALLBACK_TITLE)
    assert.equal(deriveProjectTitle(null), FALLBACK_TITLE)
    assert.equal(deriveProjectTitle({ id: 'insp-9' }), 'insp-9')
  })

  it('truncates to MAX_TITLE', () => {
    const long = '片'.repeat(MAX_TITLE + 40)
    const title = deriveProjectTitle({ title: long })
    assert.equal(title.length, MAX_TITLE)
    assert.equal(title, '片'.repeat(MAX_TITLE))
  })
})

describe('resolveMediaType', () => {
  it('honors explicit type and local video path', () => {
    assert.equal(resolveMediaType({ type: 'image' }), 'image')
    assert.equal(resolveMediaType({ type: 'link' }), 'link')
    assert.equal(resolveMediaType({ local_paths: { video: '/tmp/a.mp4' } }), 'video')
    assert.equal(resolveMediaType({}), 'video')
  })
})

describe('buildReplicationPrompt', () => {
  it('contains the skill gesture and the four scalar fields', () => {
    const prompt = buildReplicationPrompt({
      id: 'insp-42',
      title: '夏日护肤',
      source_url: 'https://tiktok.com/@x/video/1',
      type: 'video',
    })
    assert.match(prompt, new RegExp(`^/${REPLICATION_SKILL}\\n`))
    assert.match(prompt, /inspiration_id: insp-42/)
    assert.match(prompt, /media_type: video/)
    assert.match(prompt, /title: 夏日护肤/)
    assert.match(prompt, /source_url: https:\/\/tiktok.com\/@x\/video\/1/)
    assert.match(prompt, /inspiration_get/)
  })
})
