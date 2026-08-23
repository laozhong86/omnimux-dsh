import { test } from 'node:test'
import assert from 'node:assert/strict'
import { parseVideoConfig, Config } from './config.js'

test('parseVideoConfig defaults', () => {
  const expected = {
    video: { ffmpegPath: '', maxConcurrent: 2 },
    understand: {
      defaultModel: 'gemini-3.7-flash',
      maxTokens: 8000,
      maxVideoBytes: 20 * 1024 * 1024,
      analyzePromptPath: '',
      reversePromptPath: '',
    },
  }
  assert.deepEqual(parseVideoConfig(undefined), expected)
  assert.deepEqual(parseVideoConfig({}), expected)
  assert.deepEqual(parseVideoConfig({ video: {} }), expected)
})

test('parseVideoConfig reads video.ffmpegPath and maxConcurrent', () => {
  const out = parseVideoConfig({ video: { ffmpegPath: '/opt/ffmpeg/bin', maxConcurrent: 4 } })
  assert.equal(out.video.ffmpegPath, '/opt/ffmpeg/bin')
  assert.equal(out.video.maxConcurrent, 4)
})

test('parseVideoConfig env DSH_VIDEO_FFMPEG_PATH overrides config', () => {
  const prev = process.env.DSH_VIDEO_FFMPEG_PATH
  try {
    process.env.DSH_VIDEO_FFMPEG_PATH = '/env/ffmpeg'
    const out = parseVideoConfig({ video: { ffmpegPath: '/cfg/ffmpeg' } })
    assert.equal(out.video.ffmpegPath, '/env/ffmpeg')
  } finally {
    if (prev === undefined) delete process.env.DSH_VIDEO_FFMPEG_PATH
    else process.env.DSH_VIDEO_FFMPEG_PATH = prev
  }
})

test('parseVideoConfig empty env does not override', () => {
  const prev = process.env.DSH_VIDEO_FFMPEG_PATH
  try {
    process.env.DSH_VIDEO_FFMPEG_PATH = '   '
    const out = parseVideoConfig({ video: { ffmpegPath: '/cfg/ffmpeg' } })
    assert.equal(out.video.ffmpegPath, '/cfg/ffmpeg')
  } finally {
    if (prev === undefined) delete process.env.DSH_VIDEO_FFMPEG_PATH
    else process.env.DSH_VIDEO_FFMPEG_PATH = prev
  }
})

test('parseVideoConfig rejects bad maxConcurrent', () => {
  for (const bad of [0, -1, 1.5, 'two', NaN, Infinity]) {
    assert.throws(() => parseVideoConfig({ video: { maxConcurrent: bad } }), /maxConcurrent/)
  }
})

test('parseVideoConfig ignores unknown top-level fields', () => {
  const out = parseVideoConfig({ site: 'x', video: { maxConcurrent: 5 } })
  assert.equal(out.video.maxConcurrent, 5)
})

test('parseVideoConfig reads understand overrides', () => {
  const out = parseVideoConfig({
    understand: {
      defaultModel: 'gemini-3.7-flash',
      maxTokens: 4096,
      maxVideoBytes: 1024,
      analyzePromptPath: '/tmp/a.md',
      reversePromptPath: '/tmp/r.md',
    },
  })
  assert.equal(out.understand.maxTokens, 4096)
  assert.equal(out.understand.maxVideoBytes, 1024)
  assert.equal(out.understand.analyzePromptPath, '/tmp/a.md')
  assert.equal(out.understand.reversePromptPath, '/tmp/r.md')
})

test('parseVideoConfig rejects bad understand.maxTokens', () => {
  assert.throws(
    () => parseVideoConfig({ understand: { maxTokens: 0 } }),
    /maxTokens/,
  )
})

test('Config Standard Schema validate wraps parse errors into issues', () => {
  const ok = Config['~standard'].validate({ video: { maxConcurrent: 3 } })
  assert.ok('value' in ok)
  assert.equal(ok.value.video.maxConcurrent, 3)
  const bad = Config['~standard'].validate({ video: { maxConcurrent: 0 } })
  assert.ok('issues' in bad)
  assert.match(bad.issues[0].message, /maxConcurrent/)
})

test('Config vendor is dsh-video', () => {
  assert.equal(Config['~standard'].vendor, 'dsh-video')
  assert.equal(Config['~standard'].version, 1)
})