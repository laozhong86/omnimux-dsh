#!/usr/bin/env node
// Verify the OmniMux model declarations in plugins/dsh-omnimux/cordis.patch.yml
// against the live OmniMux catalogs:
//
//   1. Modality consistency (always runs; the pricing catalog is keyless):
//      a model whose pricing description documents image input must declare
//      `input: [text, image]`, and a model declaring image input must be
//      documented as image-capable. Over-declaring admits an image the
//      provider rejects mid-turn, so the catalog is the gate, never real-world
//      brand knowledge.
//   2. Expert whitelist (always runs): every id in
//      plugins/dsh-omnimux/src/text/catalog.js CHAT_MODELS must appear on the
//      patch model list. The one-shot tool cannot name a model the chat
//      adapter does not advertise.
//   3. Gateway existence (needs OMNIMUX_API_KEY, else self-skips): every
//      declared model id must exist on api.omnimux.ai/v1/models.
//
// Key resolution: OMNIMUX_API_KEY env, else parsed from
// ~/.config/omnimux/dsh.env. Inject a key via:
//   omnimux tokens exec 40 --yes --timeout=600 -- \
//     env OMNIMUX_API_KEY=__OMNIMUX_TOKEN_40__ node scripts/verify-models.mjs
//
// The patch file is the single source of truth for the app's OmniMux model
// list; this gate makes drift against the live catalogs fail loud instead of
// shipping a stale list.
import { readFileSync } from 'node:fs'
import { homedir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { CHAT_MODEL_IDS } from '../plugins/dsh-omnimux/src/text/catalog.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const patchPath = join(root, 'plugins/dsh-omnimux/cordis.patch.yml')

// Scoped parser for the fixed patch structure (no runtime dependency; yaml is
// not a root dependency of this repo). The file shape is owned by this repo —
// if it changes, the parser fails loud instead of silently checking nothing.
function extract(text) {
  const lines = text.split(/\r?\n/)
  const rowLines = []
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (line.startsWith('- id: ')) rowLines.push(i)
  }
  const start = rowLines.findIndex((i) => lines[i].slice('- id: '.length).trim() === 'llm-pi-ai')
  if (start === -1) {
    throw new Error('cordis.patch.yml has no `- id: llm-pi-ai` row — the plugin model list is gone')
  }
  const block = lines.slice(rowLines[start], rowLines[start + 1] ?? lines.length)
  let baseURL = null
  let inModels = false
  /** @type {Array<{ id: string; contextWindow: number | null; input: string[] }>} */
  const models = []
  for (const line of block) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const indent = line.length - line.trimStart().length
    const baseURLMatch = trimmed.match(/^baseURL: (.+)$/)
    if (baseURLMatch) {
      baseURL = baseURLMatch[1].trim()
      continue
    }
    if (trimmed === 'models:') {
      inModels = true
      continue
    }
    if (!inModels) continue
    if (indent < 10) break // left the models block
    if (indent === 10) {
      const idMatch = trimmed.match(/^- id: (.+)$/)
      if (idMatch) models.push({ id: idMatch[1].trim(), contextWindow: null, input: [] })
      continue
    }
    if (indent === 12 && models.length > 0) {
      const current = models[models.length - 1]
      const windowMatch = trimmed.match(/^contextWindow: (\d+)$/)
      if (windowMatch) current.contextWindow = Number(windowMatch[1])
      const inputMatch = trimmed.match(/^input: \[(.+)\]$/)
      if (inputMatch) current.input = inputMatch[1].split(',').map((part) => part.trim())
    }
  }
  return { baseURL, models }
}

function resolveKey() {
  if (process.env.OMNIMUX_API_KEY) return process.env.OMNIMUX_API_KEY
  try {
    const envPath = join(homedir(), '.config', 'omnimux', 'dsh.env')
    for (const line of readFileSync(envPath, 'utf8').split(/\r?\n/)) {
      const match = line.match(/^\s*(?:export\s+)?OMNIMUX_API_KEY\s*=\s*["']?([^"'\s]+)["']?\s*$/)
      if (match) return match[1]
    }
  } catch {
    // fall through: no key file; gateway check self-skips below
  }
  return null
}

async function fetchPricing() {
  const response = await fetch('https://api.omnimux.ai/api/pricing')
  if (!response.ok) {
    throw new Error(`pricing endpoint returned ${response.status}`)
  }
  const payload = await response.json()
  const byName = new Map()
  for (const row of payload.data ?? []) {
    if (typeof row?.model_name === 'string' && typeof row?.description === 'string') {
      byName.set(row.model_name, row.description)
    }
  }
  return byName
}

/**
 * @param {Array<{ id: string; input: string[] }>} models
 * @param {Map<string, string>} descriptions pricing catalog model_name → description
 * @returns {Array<{ id: string; problem: string }>}
 */
function modalityMismatches(models, descriptions) {
  const mismatches = []
  for (const model of models) {
    const description = descriptions.get(model.id)
    if (description === undefined) continue // not in the pricing catalog; nothing to check
    const documented = /image/i.test(description)
    const declared = model.input.includes('image')
    if (documented && !declared) {
      mismatches.push({ id: model.id, problem: 'pricing documents image input but the patch declares none' })
    }
    if (declared && !documented) {
      mismatches.push({ id: model.id, problem: 'patch declares image input but the pricing catalog does not document it' })
    }
  }
  return mismatches
}

const { baseURL, models } = extract(readFileSync(patchPath, 'utf8'))
if (models.length === 0) {
  throw new Error('no models parsed from the llm-pi-ai row — patch structure changed?')
}

const pricing = await fetchPricing()
const mismatches = modalityMismatches(models, pricing)
const patchIds = new Set(models.map((model) => model.id))
const whitelistMissing = CHAT_MODEL_IDS.filter((id) => !patchIds.has(id))
const key = resolveKey()

if (!key) {
  process.stdout.write(`${JSON.stringify({
    event: 'models',
    patch: 'plugins/dsh-omnimux/cordis.patch.yml',
    baseURL,
    modalityMismatches: mismatches,
    whitelistMissing,
    skip: 'no OMNIMUX_API_KEY — gateway existence check skipped; modality check ran keyless',
    hint: 'omnimux tokens exec 40 --yes --timeout=600 -- env OMNIMUX_API_KEY=__OMNIMUX_TOKEN_40__ node scripts/verify-models.mjs',
    checkedAt: new Date().toISOString(),
  })}\n`)
  if (mismatches.length > 0 || whitelistMissing.length > 0) {
    process.stderr.write(`verify-models: modality mismatch (${mismatches.map((row) => row.id).join(', ')}); whitelist not on patch (${whitelistMissing.join(', ')})\n`)
    process.exit(1)
  }
  process.stderr.write('verify-models: ok (modality + whitelist)\n')
  process.exit(0)
}

const response = await fetch('https://api.omnimux.ai/v1/models', {
  headers: { authorization: `Bearer ${key}` },
})
if (!response.ok) {
  process.stderr.write(`verify-models: models endpoint returned ${response.status}\n`)
  process.exit(1)
}
const payload = await response.json()
const gatewayIds = new Set(
  (Array.isArray(payload) ? payload : payload.data ?? []).map((model) => model.id),
)

const table = models.map((model) => ({
  id: model.id,
  contextWindow: model.contextWindow,
  input: model.input.length > 0 ? model.input : null,
  onGateway: gatewayIds.has(model.id),
}))
const missing = table.filter((row) => !row.onGateway).map((row) => row.id)

process.stdout.write(`${JSON.stringify({
  event: 'models',
  patch: 'plugins/dsh-omnimux/cordis.patch.yml',
  baseURL,
  gatewayTotal: gatewayIds.size,
  configured: models.length,
  table,
  missing,
  modalityMismatches: mismatches,
  whitelistMissing,
  checkedAt: new Date().toISOString(),
})}\n`)

if (missing.length > 0 || mismatches.length > 0 || whitelistMissing.length > 0) {
  process.stderr.write(`verify-models: not on gateway (${missing.join(', ')}); modality mismatch (${mismatches.map((row) => row.id).join(', ')}); whitelist not on patch (${whitelistMissing.join(', ')})\n`)
  process.exit(1)
}
process.stderr.write('verify-models: ok\n')
