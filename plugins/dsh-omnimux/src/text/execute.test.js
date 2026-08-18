import assert from 'node:assert/strict'
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { describe, it } from 'node:test'
import { apply } from '../index.js'
import { OmnimuxError } from '../media/errors.js'
import { decodeDataUri, mediaFromMagic } from './image.js'
import { executeOmnimuxText } from './execute.js'

const PNG = Uint8Array.from([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
  0x00, 0x00, 0x00, 0x00,
])

function pngFile() {
  const dir = mkdtempSync(join(tmpdir(), 'omnimux-text-'))
  const dest = join(dir, 'shot.png')
  writeFileSync(dest, PNG)
  return { dir, dest }
}

function collectStream(seen) {
  return {
    async * stream(options) {
      seen.push(options)
      yield { type: 'text-delta', index: 0, text: 'a cat' }
      yield { type: 'finish', reason: { kind: 'stop' } }
    },
  }
}

describe('textComplete execute', () => {
  it('refuses an empty prompt', async () => {
    await assert.rejects(
      () => executeOmnimuxText({ prompt: '  ', llm: collectStream([]) }),
      (error) => error instanceof OmnimuxError && error.code === 'omnimux-invalid-request',
    )
  })

  it('throws needs-provider without llm', async () => {
    await assert.rejects(
      () => executeOmnimuxText({ prompt: 'hello', model: 'claude-opus-5' }),
      (error) => error instanceof OmnimuxError && error.code === 'needs-provider',
    )
  })

  it('streams a named model without tools or parent messages', async () => {
    const seen = []
    const result = await executeOmnimuxText({
      prompt: 'summarize this contract',
      model: 'claude-opus-5',
      system: 'return one sentence',
      llm: collectStream(seen),
    })
    assert.deepEqual(result, { mode: 'live', model: 'claude-opus-5', text: 'a cat' })
    assert.equal(seen.length, 1)
    assert.equal(seen[0].provider, 'omnimux')
    assert.equal(seen[0].model, 'claude-opus-5')
    assert.equal(seen[0].system, 'return one sentence')
    assert.equal(seen[0].maxTokens, 4096)
    assert.equal('tools' in seen[0], false)
    assert.equal(seen[0].messages.length, 1)
    assert.equal(seen[0].messages[0].role, 'user')
    assert.deepEqual(seen[0].messages[0].content, [{ type: 'text', text: 'summarize this contract' }])
  })

  it('attaches a local image only on the one-shot request', async () => {
    const { dir, dest } = pngFile()
    const seen = []
    const saved = []
    try {
      const result = await executeOmnimuxText({
        prompt: 'what is in this frame',
        image: dest,
        llm: collectStream(seen),
        attachments: {
          saveImage(input) {
            saved.push(input)
            return { attachmentId: 'att-1', mediaType: input.mediaType, bytes: input.data.byteLength, width: 1, height: 1 }
          },
        },
      })
      assert.equal(result.model, 'grok-4.6')
      assert.equal(saved.length, 1)
      assert.equal(saved[0].mediaType, 'image/png')
      assert.equal(seen[0].messages[0].content[1].type, 'image')
      assert.equal(seen[0].messages[0].content[1].attachment.attachmentId, 'att-1')
    } finally {
      rmSync(dir, { recursive: true, force: true })
    }
  })

  it('throws needs-provider when an image is set without attachments', async () => {
    await assert.rejects(
      () => executeOmnimuxText({
        prompt: 'describe',
        image: 'data:image/png;base64,iVBORw0KGgo=',
        llm: collectStream([]),
      }),
      (error) => error instanceof OmnimuxError && error.code === 'needs-provider',
    )
  })

  it('maps a stream error finish to omnimux-failed', async () => {
    await assert.rejects(
      () => executeOmnimuxText({
        prompt: 'hello',
        model: 'kimi-k3',
        llm: {
          async * stream() {
            yield { type: 'finish', reason: { kind: 'error', failure: { message: 'gateway 500' } } }
          },
        },
      }),
      (error) => error instanceof OmnimuxError && error.code === 'omnimux-failed' && /gateway 500/.test(error.message),
    )
  })

  it('decodes a data URI and reads PNG magic', () => {
    const decoded = decodeDataUri(`data:image/png;base64,${Buffer.from(PNG).toString('base64')}`)
    assert.equal(decoded.mediaType, 'image/png')
    assert.equal(mediaFromMagic(decoded.data), 'image/png')
  })
})

describe('omnimux_text_complete tool', () => {
  it('registers and forwards onto textComplete', async () => {
    const tools = {}
    const provided = {}
    const seen = []
    apply({
      tools: { register(tool) { tools[tool.name] = tool } },
      provide(name, value) { provided[name] = value },
      get(name) {
        if (name === 'llm') return collectStream(seen)
        return undefined
      },
    })
    assert.equal(typeof provided.textComplete.execute, 'function')
    assert.ok(tools.omnimux_text_complete)
    assert.ok(tools.omnimux_text_complete.parameters.properties.model.enum.includes('grok-4.6'))
    assert.equal(tools.omnimux_text_complete.parameters.properties.model.enum.includes('claude-haiku-4-5'), false)
    assert.match(tools.omnimux_text_complete.description, /whitelist/)
    const result = await tools.omnimux_text_complete.execute({
      model: 'glm-5.3',
      prompt: 'one line',
      reason: 'user asked for GLM wording',
    }, { signal: undefined })
    assert.equal(result.model, 'glm-5.3')
    assert.equal(seen[0].model, 'glm-5.3')
  })

  it('hides a disabled whitelist model from the tool enum', () => {
    const tools = {}
    apply({
      tools: { register(tool) { tools[tool.name] = tool } },
      provide() {},
      get() { return undefined },
    }, { text: { models: [{ id: 'grok-4.6', enabled: false }, { id: 'glm-5.3' }] } })
    assert.deepEqual(tools.omnimux_text_complete.parameters.properties.model.enum, ['glm-5.3'])
  })

  it('rejects a missing reason at the tool', async () => {
    const tools = {}
    apply({
      tools: { register(tool) { tools[tool.name] = tool } },
      provide() {},
      get() { return { stream: async function* () {} } },
    })
    await assert.rejects(
      () => tools.omnimux_text_complete.execute({ model: 'glm-5.3', prompt: 'hi' }, {}),
      (error) => error instanceof OmnimuxError && error.code === 'omnimux-invalid-request',
    )
  })
})
