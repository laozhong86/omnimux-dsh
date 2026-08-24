#!/usr/bin/env node
/**
 * Pack src/client/*.js fragments into one ModuleLoader blob.
 * Official client loaders only accept a single factory file.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dir = join(root, 'src', 'client')
const outFile = join(root, 'lib', 'client.js')

/** Order is load order inside the factory. Do not sort alphabetically. */
const FRAGMENTS = [
  'boot.js',
  'css.js',
  'portal.js',
  'format.js',
  'i18n.js',
  'constants.js',
  'api.js',
  'keepalive.js',
  'skills-ui.js',
  'tool-views.js',
  'list-view.js',
  'settings.js',
  'marketplace.js',
  'skill-plaza.js',
  'composer.js',
  'experts.js',
  'connectors.js',
  'plaza-shell.js',
  'apply.js',
]

const inner = FRAGMENTS.map((name) => {
  const text = readFileSync(join(dir, name), 'utf8').replace(/\s+$/, '')
  if (!text) throw new Error(`empty fragment ${name}`)
  return text
}).join('\n\n')

const wrapped = `window.__ModuleLoader__.load({
  id: "omnimux-market",
  factory: (require) => {
${inner}
  },
});
`

mkdirSync(dirname(outFile), { recursive: true })
writeFileSync(outFile, wrapped)
console.log(`wrote ${outFile} (${Buffer.byteLength(wrapped)} bytes, ${FRAGMENTS.length} fragments)`)
