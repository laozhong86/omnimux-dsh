import assert from 'node:assert/strict'
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, it } from 'node:test'
import { OmnimuxError } from './errors.js'
import { executeOmnimuxImage, readOmnimuxImageConfig } from './image.js'
import { pickMediaUrl } from './vendors/omnimux.js'
import { resolveMediaRoute, parseMediaConfig } from './route.js'

describe('omnimux image helpers', () => {
  it('defaults to gpt-image2 on the openai-media row', () => {
    const config = readOmnimuxImageConfig({})
    assert.equal(config.baseUrl, 'https://api.omnimux.ai/v1')
    assert.equal(config.modelId, 'gpt-image2')
    assert.equal(config.apiKey, '')
  })

  it('overlays OMNIMUX_IMAGE_MODEL', () => {
    const route = resolveMediaRoute('image', {}, parseMediaConfig(undefined), {
      OMNIMUX_IMAGE_MODEL: 'gpt-image2-hd',
      OMNIMUX_API_KEY: 'sk-a',
    })
    assert.equal(route.modelId, 'gpt-image2-hd')
    assert.equal(route.capability, 'image')
  })

  it('picks OpenAI data[0].url envelopes', () => {
    assert.equal(pickMediaUrl({ data: [{ url: 'https://cdn.example/a.png' }] }), 'https://cdn.example/a.png')
  })

  it('refuses to execute without a key', async () => {
    await assert.rejects(
      () => executeOmnimuxImage({ prompt: 'a lamp', dest: '/tmp/no.png', env: {} }),
      (error) => error instanceof OmnimuxError && error.code === 'omnimux-unconfigured',
    )
  })

  it('executes through a fake runtime and writes dest', async () => {
    const dir = mkdtempSync(join(tmpdir(), 'omnimux-img-'))
    const dest = join(dir, 'out.png')
    const result = await executeOmnimuxImage({
      prompt: 'a lamp at night',
      dest,
      env: { OMNIMUX_API_KEY: 'sk-test' },
      runtime: {
        async execute(req) {
          assert.equal(req.modelId, 'omnimux-image')
          return {
            taskId: 'img-1',
            outputs: [{ type: 'image', url: 'https://cdn.example/out.png' }],
          }
        },
      },
      fetcher: async (url) => {
        assert.equal(String(url), 'https://cdn.example/out.png')
        return { ok: true, arrayBuffer: async () => Buffer.from('png-bytes') }
      },
    })
    assert.equal(result.mode, 'live')
    assert.equal(result.taskId, 'img-1')
    assert.equal(readFileSync(dest, 'utf8'), 'png-bytes')
    rmSync(dir, { recursive: true, force: true })
  })

  it('wait false returns submitted without writing dest', async () => {
    const dir = mkdtempSync(join(tmpdir(), 'omnimux-img-'))
    const dest = join(dir, 'out.png')
    const result = await executeOmnimuxImage({
      prompt: 'a lamp',
      dest,
      wait: false,
      env: { OMNIMUX_API_KEY: 'sk-test' },
      runtime: {
        async execute() {
          return { taskId: 'img-wait', outputs: [] }
        },
      },
    })
    assert.equal(result.mode, 'submitted')
    assert.equal(result.taskId, 'img-wait')
    assert.equal(existsSync(dest), false)
    rmSync(dir, { recursive: true, force: true })
  })

  it('resumes from taskId without submitting', async () => {
    const dir = mkdtempSync(join(tmpdir(), 'omnimux-img-'))
    const dest = join(dir, 'out.png')
    let posts = 0
    const result = await executeOmnimuxImage({
      dest,
      taskId: 'img-7',
      env: { OMNIMUX_API_KEY: 'sk-test' },
      fetcher: async (url, init) => {
        if (init?.method === 'POST') {
          posts += 1
          return { ok: true, json: async () => ({}) }
        }
        if (String(url).includes('/images/generations/img-7')) {
          return {
            ok: true,
            json: async () => ({ status: 'completed', url: 'https://cdn.example/done.png' }),
          }
        }
        assert.equal(String(url), 'https://cdn.example/done.png')
        return { ok: true, arrayBuffer: async () => Buffer.from('resumed-png') }
      },
    })
    assert.equal(posts, 0)
    assert.equal(result.mode, 'live')
    assert.equal(result.taskId, 'img-7')
    assert.equal(readFileSync(dest, 'utf8'), 'resumed-png')
    rmSync(dir, { recursive: true, force: true })
  })
})
