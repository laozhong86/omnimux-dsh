#!/usr/bin/env node
/**
 * Same-length Electron asar header patch: replace
 * node_modules/@deepseek-ai/dsh/config/agent-presets children with the
 * unpacked directory tree (unpacked:true files only). Refuses to grow the
 * header JSON so file offsets stay valid.
 *
 * Usage: node scripts/patch-asar-agent-presets.mjs <app.asar> <unpacked-presets-dir>
 */
import { createRequire } from 'node:module'
import { createHash } from 'node:crypto'
import {
  copyFileSync,
  existsSync,
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from 'node:fs'
import { dirname, join } from 'node:path'

const require = createRequire(import.meta.url)

function loadAsar() {
  const npxDisk = join(process.env.HOME || '', '.npm/_npx/8b3f11f22d4db0c9/node_modules/asar/lib/disk.js')
  const npxPickle = join(process.env.HOME || '', '.npm/_npx/8b3f11f22d4db0c9/node_modules/chromium-pickle-js')
  try {
    return { disk: require(npxDisk), pickle: require(npxPickle) }
  } catch {
    try {
      return { disk: require('asar/lib/disk.js'), pickle: require('chromium-pickle-js') }
    } catch (error) {
      console.error('asar modules not found:', error.message)
      process.exit(2)
    }
  }
}

function sha256(buf) {
  return createHash('sha256').update(buf).digest('hex')
}

function unpackedTree(dir) {
  const files = {}
  for (const name of readdirSync(dir).sort()) {
    if (name.startsWith('.')) continue
    const p = join(dir, name)
    const st = statSync(p)
    if (st.isDirectory()) {
      files[name] = { files: unpackedTree(p) }
    } else {
      const buf = readFileSync(p)
      const hash = sha256(buf)
      files[name] = {
        size: buf.length,
        unpacked: true,
        integrity: {
          algorithm: 'SHA256',
          hash,
          blockSize: 4194304,
          blocks: [hash],
        },
      }
    }
  }
  return files
}

const asarPath = process.argv[2]
const presetsDir = process.argv[3]
if (!asarPath || !presetsDir) {
  console.error('usage: patch-asar-agent-presets.mjs <app.asar> <unpacked-presets-dir>')
  process.exit(1)
}
if (!existsSync(asarPath) || !existsSync(presetsDir)) {
  console.error('missing asar or presets dir')
  process.exit(1)
}

const { disk, pickle } = loadAsar()
const { header, headerSize, headerString } = disk.readArchiveHeaderSync(asarPath)
const cfg = header.files?.node_modules?.files?.['@deepseek-ai']?.files?.dsh?.files?.config?.files
if (!cfg?.['agent-presets']) {
  console.error('agent-presets missing in asar header:', asarPath)
  process.exit(1)
}
const before = Object.keys(cfg['agent-presets'].files || {})
cfg['agent-presets'] = { files: unpackedTree(presetsDir) }
const after = Object.keys(cfg['agent-presets'].files)
const newJson = JSON.stringify(header)
if (newJson.length > headerString.length) {
  console.error(`refuse: new header JSON longer (${newJson.length} > ${headerString.length})`)
  process.exit(1)
}
const padded = newJson + ' '.repeat(headerString.length - newJson.length)
const headerPickle = pickle.createEmpty()
headerPickle.writeString(padded)
const headerBuf = headerPickle.toBuffer()
if (headerBuf.length !== headerSize) {
  console.error(`pickle size changed ${headerBuf.length} !== ${headerSize}`)
  process.exit(1)
}
const sizePickle = pickle.createEmpty()
sizePickle.writeUInt32(headerBuf.length)
const sizeBuf = sizePickle.toBuffer()
if (sizeBuf.length !== 8) {
  console.error('size pickle not 8 bytes')
  process.exit(1)
}
const orig = readFileSync(asarPath)
const out = Buffer.concat([sizeBuf, headerBuf, orig.subarray(8 + headerSize)])
if (out.length !== orig.length) {
  console.error(`asar length changed ${out.length} vs ${orig.length}`)
  process.exit(1)
}
const bak = `${asarPath}.bak-header`
if (!existsSync(bak)) copyFileSync(asarPath, bak)
writeFileSync(asarPath, out)
console.log(`  ✓ asar header ${asarPath}: ${before.join(',')} → ${after.join(',')}`)
