#!/usr/bin/env node
// Verify every OmniMux model declared in plugins/dsh-omnimux/cordis.patch.yml
// exists on the live gateway (api.omnimux.ai/v1/models).
//
// Key resolution: OMNIMUX_API_KEY env, else parsed from
// ~/.config/omnimux/dsh.env. Without a key the script self-skips (exit 0) —
// the same convention as the keyless smoke gates. Inject a key via:
//   omnimux tokens exec 40 --yes --timeout=600 -- \
//     env OMNIMUX_API_KEY=__OMNIMUX_TOKEN_40__ node scripts/verify-models.mjs
//
// The patch file is the single source of truth for the app's OmniMux model
// list; this gate makes drift against the gateway fail loud instead of
// shipping a stale list.
import { readFileSync } from 'node:fs'
import { homedir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

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
  /** @type {Array<{ id: string; contextWindow: number | null }>} */
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
      if (idMatch) models.push({ id: idMatch[1].trim(), contextWindow: null })
      continue
    }
    if (indent === 12 && models.length > 0) {
      const windowMatch = trimmed.match(/^contextWindow: (\d+)$/)
      if (windowMatch) models[models.length - 1].contextWindow = Number(windowMatch[1])
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
    // fall through: no key file, self-skip below
  }
  return null
}

const key = resolveKey()
if (!key) {
  process.stdout.write(`${JSON.stringify({
    event: 'skip',
    reason: 'no OMNIMUX_API_KEY (env or ~/.config/omnimux/dsh.env)',
    hint: 'omnimux tokens exec 40 --yes --timeout=600 -- env OMNIMUX_API_KEY=__OMNIMUX_TOKEN_40__ node scripts/verify-models.mjs',
  })}\n`)
  process.exit(0)
}

const { baseURL, models } = extract(readFileSync(patchPath, 'utf8'))
if (models.length === 0) {
  throw new Error('no models parsed from the llm-pi-ai row — patch structure changed?')
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
  checkedAt: new Date().toISOString(),
})}\n`)

if (missing.length > 0) {
  process.stderr.write(`verify-models: not on gateway (${missing.join(', ')})\n`)
  process.exit(1)
}
process.stderr.write('verify-models: ok\n')
