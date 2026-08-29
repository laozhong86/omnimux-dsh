import assert from 'node:assert/strict'
import { mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, it } from 'node:test'
import {
  executeOmnimuxAudio,
  readOmnimuxAudioConfig,
} from './audio.js'
import { parseMediaConfig, resolveMediaRoute } from './route.js'

describe('omnimux audio helpers', () => {
  it('defaults to suno on the openai-media row', () => {
    const route = resolveMediaRoute('audio', {}, parseMediaConfig(undefined), {
      OMNIMUX_API_KEY: 'sk-test',
    })
    assert.equal(route.providerId, 'omnimux')
    assert.equal(route.modelId, 'suno')
    assert.equal(route.protocol, 'openai-media')
  })

  it('overlays OMNIMUX_AUDIO_MODEL', () => {
    const route = resolveMediaRoute('audio', {}, parseMediaConfig(undefined), {
      OMNIMUX_API_KEY: 'sk-test',
      OMNIMUX_AUDIO_MODEL: 'gpt-4o-mini-tts',
    })
    assert.equal(route.modelId, 'gpt-4o-mini-tts')
  })

  it('refuses to execute without a key', async () => {
    await assert.rejects(
      () => executeOmnimuxAudio({ prompt: 'synthwave track', dest: '/tmp/no.mp3', env: {} }),
      (err) => err?.code === 'needs-omnimux',
    )
  })

  it('executes through mock store token without OMNIMUX_API_KEY', async () => {
    const dir = mkdtempSync(join(tmpdir(), 'omnimux-audio-pat-'))
    const dest = join(dir, 'out.mp3')
    const result = await executeOmnimuxAudio({
      prompt: 'a piano melody',
      dest,
      env: {},
      store: {
        resolve: async () => 'pat-login-token',
      },
      runtime: {
        async execute(req) {
          assert.equal(req.modelId, 'omnimux-audio')
          return {
            taskId: 'audio-pat-1',
            outputs: [{ type: 'audio', url: 'https://cdn.example/out-pat.mp3' }],
          }
        },
      },
      fetcher: async (url) => {
        assert.equal(String(url), 'https://cdn.example/out-pat.mp3')
        return { ok: true, arrayBuffer: async () => Buffer.from('pat-mp3-bytes') }
      },
    })
    assert.equal(result.mode, 'live')
    assert.equal(result.taskId, 'audio-pat-1')
    assert.equal(readFileSync(dest, 'utf8'), 'pat-mp3-bytes')
    rmSync(dir, { recursive: true, force: true })
  })
})
