// Ensure Electron does not intercept raw .asar file read/write operations
process.env.ELECTRON_NO_ASAR = '1'

import { test } from 'node:test'
import { strictEqual, ok, deepStrictEqual } from 'node:assert'
import { mkdtempSync, writeFileSync, readFileSync, rmSync, mkdirSync, existsSync } from 'node:fs'
import { join, resolve } from 'node:path'
import { tmpdir } from 'node:os'
import { spawnSync } from 'node:child_process'
import {
  calculateSha256,
  locateInfoPlist,
  readPlistIntegrity,
  updatePlistIntegrity,
  verifyIntegrity,
} from './lib/asar-integrity-engine.mjs'
import {
  patchAsarPresets,
  unpackedTree,
  sha256,
} from './patch-asar-agent-presets.mjs'

test('calculateSha256 handles buffer and file path', () => {
  const buf = Buffer.from('hello-asar-integrity')
  const hash1 = calculateSha256(buf)
  strictEqual(typeof hash1, 'string')
  strictEqual(hash1.length, 64)

  const tmp = mkdtempSync(join(tmpdir(), 'test-sha-'))
  const file = join(tmp, 'test.bin')
  writeFileSync(file, buf)

  const hash2 = calculateSha256(file)
  strictEqual(hash1, hash2)
  rmSync(tmp, { recursive: true, force: true })
})

test('locateInfoPlist discovers Info.plist in macOS bundle hierarchy', () => {
  const tmp = mkdtempSync(join(tmpdir(), 'test-bundle-'))
  const contentsDir = join(tmp, 'Contents')
  const resourcesDir = join(contentsDir, 'Resources')
  mkdirSync(resourcesDir, { recursive: true })

  const asarPath = join(resourcesDir, 'app.asar')
  writeFileSync(asarPath, 'dummy-asar')

  // Not yet existing Info.plist
  strictEqual(locateInfoPlist(asarPath), null)

  const infoPlistPath = join(contentsDir, 'Info.plist')
  writeFileSync(infoPlistPath, 'dummy-plist')

  const located = locateInfoPlist(asarPath)
  strictEqual(located, infoPlistPath)

  rmSync(tmp, { recursive: true, force: true })
})

test('readPlistIntegrity and updatePlistIntegrity work with XML plist fallback', () => {
  const tmp = mkdtempSync(join(tmpdir(), 'test-plist-'))
  const plistPath = join(tmp, 'Info.plist')

  const initialXml = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>CFBundleName</key>
	<string>OmniMux</string>
</dict>
</plist>`
  writeFileSync(plistPath, initialXml, 'utf8')

  // Initially empty
  strictEqual(readPlistIntegrity(plistPath), null)

  const sampleHash = 'a1b2c3d4e5f60718293a4b5c6d7e8f90123456789abcdef0123456789abcdef0'
  const updated = updatePlistIntegrity(plistPath, sampleHash)
  ok(updated, 'updatePlistIntegrity should return true')

  const record = readPlistIntegrity(plistPath)
  ok(record, 'should read integrity record')
  strictEqual(record.hash, sampleHash)
  strictEqual(record.algorithm, 'SHA256')

  // Update with new hash
  const updatedHash = 'ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
  const reUpdated = updatePlistIntegrity(plistPath, updatedHash)
  ok(reUpdated)

  const record2 = readPlistIntegrity(plistPath)
  strictEqual(record2.hash, updatedHash)

  rmSync(tmp, { recursive: true, force: true })
})

test('verifyIntegrity validates asar sha256 against Info.plist', () => {
  const tmp = mkdtempSync(join(tmpdir(), 'test-verify-'))
  const contents = join(tmp, 'Contents')
  const resources = join(contents, 'Resources')
  mkdirSync(resources, { recursive: true })

  const asar = join(resources, 'app.asar')
  const plist = join(contents, 'Info.plist')
  const asarContent = Buffer.from('asar-content-sample-data')
  writeFileSync(asar, asarContent)

  const initialXml = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>CFBundleName</key>
	<string>OmniMux</string>
</dict>
</plist>`
  writeFileSync(plist, initialXml, 'utf8')

  // Mismatch when empty
  const res1 = verifyIntegrity(asar, plist)
  strictEqual(res1.valid, false)

  // Update plist with real hash
  const correctHash = calculateSha256(asarContent)
  updatePlistIntegrity(plist, correctHash)

  const res2 = verifyIntegrity(asar, plist)
  strictEqual(res2.valid, true)
  strictEqual(res2.calculatedHash, correctHash)
  strictEqual(res2.plistHash, correctHash)

  rmSync(tmp, { recursive: true, force: true })
})

test('patch-asar-agent-presets CLI --verify-only and --dry-run flags', () => {
  const tmp = mkdtempSync(join(tmpdir(), 'test-cli-'))
  const contents = join(tmp, 'Contents')
  const resources = join(contents, 'Resources')
  mkdirSync(resources, { recursive: true })

  const asar = join(resources, 'app.asar')
  const plist = join(contents, 'Info.plist')
  const asarContent = Buffer.from('mock-asar-bytes')
  writeFileSync(asar, asarContent)

  const correctHash = calculateSha256(asarContent)
  const initialXml = `<?xml version="1.0" encoding="UTF-8"?>
<plist version="1.0">
<dict>
	<key>ElectronAsarIntegrity</key>
	<dict>
		<key>Resources/app.asar</key>
		<dict>
			<key>algorithm</key>
			<string>SHA256</string>
			<key>hash</key>
			<string>${correctHash}</string>
		</dict>
	</dict>
</dict>
</plist>`
  writeFileSync(plist, initialXml, 'utf8')

  const scriptPath = resolve(import.meta.dirname, 'patch-asar-agent-presets.mjs')

  // Test --verify-only
  const runVerify = spawnSync('node', [scriptPath, asar, '--verify-only'], {
    encoding: 'utf8',
  })
  strictEqual(runVerify.status, 0, `verify-only failed: ${runVerify.stderr}`)
  ok(runVerify.stdout.includes('Asar integrity verified'))

  rmSync(tmp, { recursive: true, force: true })
})
