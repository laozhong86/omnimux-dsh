import { test } from 'node:test'
import { strictEqual, ok } from 'node:assert'
import { spawnSync } from 'node:child_process'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { gitBlobHash } from './verify-bilingual-docs.mjs'
import { walkAgentNoteTree } from './lib/agent-note-tree.mjs'

const here = dirname(fileURLToPath(import.meta.url))
const repoRoot = resolve(here, '..')

test('gitBlobHash computes accurate SHA-1 blob hashes', () => {
  const content = Buffer.from('# Test Document\n')
  const hash = gitBlobHash(content)
  strictEqual(typeof hash, 'string')
  strictEqual(hash.length, 40)
})

test('walkAgentNoteTree discovers valid agent notes and checks structure', () => {
  const { notes, errors } = walkAgentNoteTree(repoRoot)
  strictEqual(errors.length, 0, `walk errors: ${errors.join(', ')}`)
  ok(notes.length >= 1, 'should find at least 1 agent note')
  const note = notes[0]
  strictEqual(note.lifecycle, 'implemented')
  strictEqual(note.class, 'architecture')
})

test('verify-agent-note-format runs successfully on codebase', () => {
  const res = spawnSync('node', [resolve(here, 'verify-agent-note-format.mjs')], {
    cwd: repoRoot,
    encoding: 'utf8',
  })
  strictEqual(res.status, 0, `format script failed: ${res.stderr}`)
})

test('verify-bilingual-docs passes on codebase', () => {
  const res = spawnSync('node', [resolve(here, 'verify-bilingual-docs.mjs')], {
    cwd: repoRoot,
    encoding: 'utf8',
  })
  strictEqual(res.status, 0, `bilingual pairing failed: ${res.stderr}`)
})

test('verify-archived-agent-notes passes on codebase', () => {
  const res = spawnSync('node', [resolve(here, 'verify-archived-agent-notes.mjs')], {
    cwd: repoRoot,
    encoding: 'utf8',
  })
  strictEqual(res.status, 0, `archived verification failed: ${res.stderr}`)
})

test('verify-plugin-boundaries passes on codebase', () => {
  const res = spawnSync('node', [resolve(here, 'verify-plugin-boundaries.mjs')], {
    cwd: repoRoot,
    encoding: 'utf8',
  })
  strictEqual(res.status, 0, `boundary verification failed: ${res.stderr}`)
})
