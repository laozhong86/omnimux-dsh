import assert from 'node:assert/strict'
import { mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, it } from 'node:test'
import {
  executeOmnimuxVideo,
  OmnimuxError,
  pickTaskId,
  pickVideoUrl,
  pollVideoTask,
  readOmnimuxConfig,
} from './video.js'

describe('omnimux video helpers', () => {
  it('reads env defaults', () => {
    const config = readOmnimuxConfig({})
    assert.equal(config.baseUrl, 'https://api.omnimux.ai/v1')
    assert.equal(config.modelId, 'seedance-2-0-fast')
    assert.equal(config.apiKey, '')
  })

  it('picks task id and video url from nested payloads', () => {
    assert.equal(pickTaskId({ data: { task_id: 't-1' } }), 't-1')
    assert.equal(pickVideoUrl({ videoUrls: ['https://cdn.example/a.mp4'] }), 'https://cdn.example/a.mp4')
  })

  it('polls until completed', async () => {
    let calls = 0
    const json = await pollVideoTask({
      fetcher: async () => {
        calls += 1
        const body = calls === 1
          ? { status: 'in_progress' }
          : { status: 'completed', url: 'https://cdn.example/done.mp4' }
        return { ok: true, json: async () => body }
      },
      baseUrl: 'https://api.omnimux.ai/v1',
      apiKey: 'sk-test',
      taskId: 't-1',
      sleep: async () => {},
    })
    assert.equal(pickVideoUrl(json), 'https://cdn.example/done.mp4')
    assert.equal(calls, 2)
  })

  it('refuses to execute without a key', async () => {
    await assert.rejects(
      () => executeOmnimuxVideo({ prompt: 'x', dest: '/tmp/no.mp4', env: {} }),
      (error) => error instanceof OmnimuxError && error.code === 'omnimux-unconfigured',
    )
  })

  it('executes through a fake runtime and writes dest', async () => {
    const dir = mkdtempSync(join(tmpdir(), 'omnimux-'))
    const dest = join(dir, 'out.mp4')
    const result = await executeOmnimuxVideo({
      prompt: 'a wall at night',
      dest,
      duration: 4,
      env: { OMNIMUX_API_KEY: 'sk-test' },
      runtime: {
        async execute() {
          return {
            taskId: 'task-9',
            outputs: [{ type: 'video', url: 'https://cdn.example/out.mp4' }],
          }
        },
      },
      fetcher: async (url) => {
        assert.equal(String(url), 'https://cdn.example/out.mp4')
        return { ok: true, arrayBuffer: async () => Buffer.from('mp4-bytes') }
      },
    })
    assert.equal(result.mode, 'live')
    assert.equal(result.taskId, 'task-9')
    assert.equal(readFileSync(dest, 'utf8'), 'mp4-bytes')
    rmSync(dir, { recursive: true, force: true })
  })
})
