import assert from 'node:assert/strict'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, it } from 'node:test'
import { assertTestFiles, discoverTestFiles } from '../../scripts/run-tests.mjs'

const pluginRoot = fileURLToPath(new URL('../../', import.meta.url))

function writeFixture(root, relativePath) {
  const path = join(root, relativePath)
  mkdirSync(dirname(path), { recursive: true })
  writeFileSync(path, '')
}

describe('Hub test discovery', () => {
  it('includes every current source test and the previously omitted contracts', () => {
    const files = discoverTestFiles(pluginRoot)

    assert.ok(files.length > 0)
    assert.ok(files.includes('src/client/workbench-context.test.js'))
    assert.ok(files.includes('src/client/events-client.test.js'))
    assert.ok(files.includes('src/client/composer-envelope.test.js'))
    assert.ok(files.includes('src/client/conversation-collapse.test.js'))
    assert.ok(files.includes('src/events/hub-event-bus.test.js'))
  })

  it('excludes fixture, vendor, and generated directories', () => {
    const root = mkdtempSync(join(tmpdir(), 'omnimux-test-discovery-'))
    try {
      writeFixture(root, 'src/real.test.js')
      writeFixture(root, 'src/nested/real.test.ts')
      writeFixture(root, 'src/fixtures/ignored.test.js')
      writeFixture(root, 'src/vendor/ignored.test.js')
      writeFixture(root, 'src/build/ignored.test.js')
      writeFixture(root, 'src/dist/ignored.test.js')
      writeFixture(root, 'lib/generated.test.js')

      assert.deepEqual(discoverTestFiles(root), [
        'src/nested/real.test.ts',
        'src/real.test.js',
      ])
    } finally {
      rmSync(root, { recursive: true, force: true })
    }
  })

  it('rejects an empty discovery result', () => {
    const root = mkdtempSync(join(tmpdir(), 'omnimux-empty-test-discovery-'))
    try {
      assert.throws(
        () => assertTestFiles(discoverTestFiles(root)),
        /No Hub test files matched the source test globs/,
      )
    } finally {
      rmSync(root, { recursive: true, force: true })
    }
  })
})
