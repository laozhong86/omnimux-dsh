import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { describe, it } from 'node:test'
import { fileURLToPath } from 'node:url'
import { CHAT_MODEL_IDS } from './catalog.js'

const patchPath = join(dirname(fileURLToPath(import.meta.url)), '../../cordis.patch.yml')

/**
 * Split the llm-pi-ai model list into per-id blocks so a missing
 * `reasoningEfforts.max` fails on that id instead of on the file as a whole.
 * @param {string} text
 */
function modelBlocks(text) {
  const start = text.indexOf('\n- id: llm-pi-ai\n')
  assert.notEqual(start, -1, 'cordis.patch.yml has no llm-pi-ai row')
  const modelsAt = text.indexOf('\n        models:\n', start)
  assert.notEqual(modelsAt, -1, 'llm-pi-ai row has no models list')
  const slice = text.slice(modelsAt)
  const parts = slice.split(/\n          - id: /).slice(1)
  return parts.map((part) => {
    const nl = part.indexOf('\n')
    const id = (nl === -1 ? part : part.slice(0, nl)).trim()
    return { id, body: part }
  })
}

describe('omnimux patch reasoning offer', () => {
  const text = readFileSync(patchPath, 'utf8')
  const blocks = modelBlocks(text)

  it('sets the omnimux route default to max', () => {
    assert.match(text, /\n        reasoning: max\n/)
  })

  it('declares reasoningEfforts.max on every chat-directory model', () => {
    const byId = new Map(blocks.map((row) => [row.id, row.body]))
    for (const id of CHAT_MODEL_IDS) {
      const body = byId.get(id)
      assert.ok(body, `patch is missing chat-directory model ${id}`)
      assert.match(body, /reasoningEfforts:\n/, `${id} has no reasoningEfforts`)
      assert.match(body, /^\s+max: max$/m, `${id} does not offer max`)
    }
  })

  it('maps Off to wire none only on the models that can disable thinking', () => {
    const byId = new Map(blocks.map((row) => [row.id, row.body]))
    assert.match(byId.get('gpt-5.6-sol') ?? '', /'off': 'none'/)
    assert.match(byId.get('deepseek-v4-pro') ?? '', /'off': 'none'/)
    assert.match(byId.get('deepseek-v4-flash') ?? '', /'off': 'none'/)
    for (const id of ['claude-opus-5', 'grok-4.6', 'kimi-k3', 'gemini-3.7-flash', 'glm-5.3']) {
      assert.doesNotMatch(byId.get(id) ?? '', /'off':/, `${id} must not offer Off`)
    }
  })
})
