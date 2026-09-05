import assert from 'node:assert/strict'
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, it } from 'node:test'
import { executeOmnimuxSpeechToText, loadAudioBytes } from './stt.js'
import { mountSpeechToText, STT_TOOL_NAME } from './stt-mount.js'
import { OmnimuxError } from './errors.js'
import { JSON_TOOL_OUTPUT } from '../tools/schema.js'

const AUDIO_BYTES = Buffer.from('fake-mp3-frames')

async function withTempAudio(fn) {
  const dir = mkdtempSync(join(tmpdir(), 'omnimux-stt-'))
  const file = join(dir, 'clip.mp3')
  writeFileSync(file, AUDIO_BYTES)
  try {
    return await fn(file, dir)
  } finally {
    rmSync(dir, { recursive: true, force: true })
  }
}

/** Fake fetcher that serves the transcription POST and captures the request. */
function sttFetcher(captured, body = { text: '你好世界' }, status = 200) {
  return async (url, init) => {
    captured.url = String(url)
    captured.init = init
    return {
      ok: status >= 200 && status < 300,
      status,
      json: async () => body,
      text: async () => (typeof body === 'string' ? body : JSON.stringify(body)),
    }
  }
}

describe('loadAudioBytes', () => {
  it('reads an absolute file path with mime from extension', async () => {
    await withTempAudio(async (file) => {
      const audio = await loadAudioBytes(file)
      assert.deepEqual(audio.bytes, AUDIO_BYTES)
      assert.equal(audio.filename, 'clip.mp3')
      assert.equal(audio.contentType, 'audio/mpeg')
    })
  })

  it('decodes a data:audio URI', async () => {
    const audio = await loadAudioBytes(`data:audio/wav;base64,${AUDIO_BYTES.toString('base64')}`)
    assert.deepEqual(audio.bytes, AUDIO_BYTES)
    assert.equal(audio.filename, 'audio.wav')
    assert.equal(audio.contentType, 'audio/wav')
  })

  it('rejects an unreadable path', async () => {
    await assert.rejects(
      () => loadAudioBytes('/nonexistent/nope.mp3'),
      (error) => error instanceof OmnimuxError && error.code === 'omnimux-invalid-request',
    )
  })

  it('rejects an empty audio value', async () => {
    await assert.rejects(
      () => loadAudioBytes('   '),
      (error) => error instanceof OmnimuxError && error.code === 'omnimux-invalid-request',
    )
  })
})

describe('executeOmnimuxSpeechToText', () => {
  it('requires audio', async () => {
    await assert.rejects(
      () => executeOmnimuxSpeechToText({ env: { OMNIMUX_API_KEY: 'sk-x' } }),
      (error) => error instanceof OmnimuxError && error.code === 'omnimux-invalid-request',
    )
  })

  it('refuses to execute without a key (protocol path; guard bypassed)', async () => {
    await withTempAudio(async (file) => {
      await assert.rejects(
        () => executeOmnimuxSpeechToText({ audio: file, env: {}, bypassSubmitGuard: true }),
        (error) => error instanceof OmnimuxError && error.code === 'needs-omnimux',
      )
    })
  })

  it('rejects draft whisper-1 before HTTP even when seam exists (#468)', async () => {
    await withTempAudio(async (file) => {
      let vendorCalls = 0
      await assert.rejects(
        () => executeOmnimuxSpeechToText({
          audio: file,
          operation: 'speech_to_text',
          env: { OMNIMUX_API_KEY: 'sk-stt' },
          fetcher: async () => {
            vendorCalls += 1
            return { ok: true, status: 200, json: async () => ({ text: 'nope' }) }
          },
        }),
        (error) => error instanceof OmnimuxError && error.code === 'omnimux-invalid-request',
      )
      assert.equal(vendorCalls, 0)
    })
  })

  it('posts multipart audio to /audio/transcriptions and returns text', async () => {
    await withTempAudio(async (file) => {
      const captured = {}
      const result = await executeOmnimuxSpeechToText({
        audio: file,
        bypassSubmitGuard: true,
        env: { OMNIMUX_API_KEY: 'sk-stt' },
        fetcher: sttFetcher(captured),
      })
      assert.equal(captured.url, 'https://api.omnimux.ai/v1/audio/transcriptions')
      assert.equal(captured.init.method, 'POST')
      assert.equal(captured.init.headers.authorization, 'Bearer sk-stt')
      assert.ok(captured.init.body instanceof FormData, 'wire body must be multipart FormData')
      const form = captured.init.body
      assert.equal(form.get('model'), 'whisper-1')
      assert.equal(form.get('response_format'), 'json')
      const upload = form.get('file')
      assert.ok(upload && typeof upload === 'object' && typeof upload.name === 'string')
      assert.equal(upload.name, 'clip.mp3')
      assert.equal(upload.type, 'audio/mpeg')
      assert.equal(Buffer.from(await upload.arrayBuffer()).toString(), AUDIO_BYTES.toString())
      assert.deepEqual(result, { mode: 'live', model: 'whisper-1', text: '你好世界' })
    })
  })

  it('honours model override and OMNIMUX_STT_MODEL env overlay', async () => {
    await withTempAudio(async (file) => {
      const captured = {}
      await executeOmnimuxSpeechToText({
        audio: file,
        model: 'whisper-1',
        bypassSubmitGuard: true,
        env: { OMNIMUX_API_KEY: 'sk-stt', OMNIMUX_STT_MODEL: 'whisper-1' },
        fetcher: sttFetcher(captured),
      })
      assert.equal(captured.init.body.get('model'), 'whisper-1')
    })
  })

  it('accepts a data:audio URI without touching the filesystem', async () => {
    const captured = {}
    const result = await executeOmnimuxSpeechToText({
      audio: `data:audio/mpeg;base64,${AUDIO_BYTES.toString('base64')}`,
      language: 'zh',
      bypassSubmitGuard: true,
      env: { OMNIMUX_API_KEY: 'sk-stt' },
      fetcher: sttFetcher(captured),
    })
    assert.equal(captured.init.body.get('language'), 'zh')
    assert.equal(result.text, '你好世界')
  })

  it('fetches http(s) audio bytes before uploading', async () => {
    const captured = {}
    const urls = []
    const result = await executeOmnimuxSpeechToText({
      audio: 'https://cdn.example.com/voice/note.m4a',
      bypassSubmitGuard: true,
      env: { OMNIMUX_API_KEY: 'sk-stt' },
      fetcher: async (url, init) => {
        urls.push(String(url))
        if (init?.method === 'POST') return sttFetcher(captured)(url, init)
        return {
          ok: true,
          status: 200,
          headers: { get: () => 'audio/m4a' },
          arrayBuffer: async () => AUDIO_BYTES,
        }
      },
    })
    assert.deepEqual(urls, ['https://cdn.example.com/voice/note.m4a', 'https://api.omnimux.ai/v1/audio/transcriptions'])
    const upload = captured.init.body.get('file')
    assert.equal(upload.name, 'note.m4a')
    assert.equal(upload.type, 'audio/m4a')
    assert.equal(result.mode, 'live')
  })

  it('executes through mock store token without OMNIMUX_API_KEY', async () => {
    await withTempAudio(async (file) => {
      const captured = {}
      const result = await executeOmnimuxSpeechToText({
        audio: file,
        bypassSubmitGuard: true,
        env: {},
        store: { resolve: async () => 'pat-stt-token' },
        fetcher: sttFetcher(captured),
      })
      assert.equal(captured.init.headers.authorization, 'Bearer pat-stt-token')
      assert.equal(result.mode, 'live')
    })
  })

  it('maps quota failures to quota-exceeded', async () => {
    await withTempAudio(async (file) => {
      await assert.rejects(
        () => executeOmnimuxSpeechToText({
          audio: file,
          bypassSubmitGuard: true,
          env: { OMNIMUX_API_KEY: 'sk-stt' },
          fetcher: sttFetcher({}, { error: { message: 'insufficient quota' } }, 429),
        }),
        (error) => error instanceof OmnimuxError && error.code === 'quota-exceeded',
      )
    })
  })

  it('maps other HTTP failures to omnimux-request-failed', async () => {
    await withTempAudio(async (file) => {
      await assert.rejects(
        () => executeOmnimuxSpeechToText({
          audio: file,
          bypassSubmitGuard: true,
          env: { OMNIMUX_API_KEY: 'sk-stt' },
          fetcher: sttFetcher({}, { error: { message: 'boom' } }, 500),
        }),
        (error) => error instanceof OmnimuxError && error.code === 'omnimux-request-failed',
      )
    })
  })

  it('throws omnimux-invalid-response when the envelope carries no text', async () => {
    await withTempAudio(async (file) => {
      await assert.rejects(
        () => executeOmnimuxSpeechToText({
          audio: file,
          bypassSubmitGuard: true,
          env: { OMNIMUX_API_KEY: 'sk-stt' },
          fetcher: sttFetcher({}, { data: {} }),
        }),
        (error) => error instanceof OmnimuxError && error.code === 'omnimux-invalid-response',
      )
    })
  })

  it('accepts a plain-text transcription body', async () => {
    await withTempAudio(async (file) => {
      const result = await executeOmnimuxSpeechToText({
        audio: file,
        bypassSubmitGuard: true,
        env: { OMNIMUX_API_KEY: 'sk-stt' },
        fetcher: async () => ({
          ok: true,
          status: 200,
          json: async () => { throw new Error('not json') },
          text: async () => 'raw transcript',
        }),
      })
      assert.deepEqual(result, { mode: 'live', model: 'whisper-1', text: 'raw transcript' })
    })
  })
})

describe('mountSpeechToText', () => {
  function fakeCtx(gate) {
    const tools = {}
    const provided = {}
    return {
      tools,
      provided,
      ctx: {
        tools: { register(tool) { tools[tool.name] = tool } },
        provide(name, api) { provided[name] = api },
        get(name) { return name === 'gate' ? gate : undefined },
      },
    }
  }

  it('provides the speechToText seam and registers the tool by default', () => {
    const { ctx, tools, provided } = fakeCtx(undefined)
    mountSpeechToText(ctx, {
      execute: async () => ({ mode: 'live', model: 'whisper-1', text: 'hi' }),
      media: undefined,
      jsonOut: JSON_TOOL_OUTPUT,
    })
    assert.ok(provided.speechToText && typeof provided.speechToText.execute === 'function')
    assert.ok(tools[STT_TOOL_NAME])
    assert.deepEqual(tools[STT_TOOL_NAME].parameters.required, ['audio'])
  })

  it('skips seam and tool when gate.tools.omnimux_speech_to_text is false', () => {
    const { ctx, tools, provided } = fakeCtx({ enabled: true, tools: { [STT_TOOL_NAME]: false } })
    mountSpeechToText(ctx, {
      execute: async () => ({}),
      media: undefined,
      jsonOut: JSON_TOOL_OUTPUT,
    })
    assert.equal(provided.speechToText, undefined)
    assert.equal(tools[STT_TOOL_NAME], undefined)
  })

  it('seam execute forwards media/store/credentials and returns the result', async () => {
    const store = { resolve: async () => 'pat' }
    const credentials = { resolve: async () => undefined }
    let seen
    const provided = {}
    const ctx = {
      tools: { register() {} },
      provide(name, value) { provided[name] = value },
      get(name) { return name === 'credentials' ? credentials : undefined },
    }
    mountSpeechToText(ctx, {
      execute: async (req) => { seen = req; return { mode: 'live', model: 'whisper-1', text: 'ok' } },
      media: { defaultProvider: 'omnimux' },
      store,
      jsonOut: JSON_TOOL_OUTPUT,
    })
    const result = await provided.speechToText.execute({ audio: '/tmp/a.mp3', language: 'zh' })
    assert.equal(result.text, 'ok')
    assert.equal(seen.audio, '/tmp/a.mp3')
    assert.equal(seen.language, 'zh')
    assert.deepEqual(seen.media, { defaultProvider: 'omnimux' })
    assert.equal(seen.store, store)
    assert.equal(seen.credentials, credentials)
  })

  it('tool execute maps args and rethrows OmnimuxError unchanged', async () => {
    const { ctx, tools } = fakeCtx(undefined)
    mountSpeechToText(ctx, {
      execute: async () => {
        throw new OmnimuxError('omnimux-invalid-request', 'audio is required')
      },
      media: undefined,
      jsonOut: JSON_TOOL_OUTPUT,
    })
    await assert.rejects(
      () => tools[STT_TOOL_NAME].execute({ audio: '' }, {}),
      (error) => error instanceof OmnimuxError && error.code === 'omnimux-invalid-request',
    )
  })
})
