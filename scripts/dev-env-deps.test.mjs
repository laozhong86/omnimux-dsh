import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { existsSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { tmpdir } from 'node:os'

const here = dirname(fileURLToPath(import.meta.url))
const scriptPath = join(here, 'dev-env.sh')
const source = readFileSync(scriptPath, 'utf8')

const CORE_ENTRIES = [
  '@deepseek-ai/dsh-client-ui-chat/lib/index.js',
  '@deepseek-ai/dsh-base/package.json',
  '@deepseek-ai/dsh-web-app/package.json',
  'dsh-better-sidebar/lib/client.js',
]

describe('scripts/dev-env.sh L2 source dependency preflight', () => {
  let testRoot
  let prodProfile
  let wtRoot
  let fakeDshSrc

  const setupSandbox = ({ complete }) => {
    const runId = Math.random().toString(36).substring(2, 9)
    testRoot = join(tmpdir(), `omnimux-dev-env-deps-${runId}`)
    prodProfile = join(testRoot, 'prod', 'profiles', 'omnimux')
    mkdirSync(join(prodProfile, 'node_modules'), { recursive: true })
    writeFileSync(join(prodProfile, 'package.json'), '{}')
    writeFileSync(join(prodProfile, 'cordis.patch.yml'), '')
    for (const entry of CORE_ENTRIES) {
      const p = join(prodProfile, 'node_modules', entry)
      mkdirSync(dirname(p), { recursive: true })
      if (complete) writeFileSync(p, 'sentinel')
    }
    // fake plugin tree root for --source
    wtRoot = join(testRoot, 'wt-root')
    mkdirSync(join(wtRoot, 'plugins', 'omnimux-assets'), { recursive: true })
    writeFileSync(join(wtRoot, 'plugins', 'omnimux-assets', 'package.json'), JSON.stringify({ name: 'omnimux-assets', version: '1.0.0' }))
    // fake DSH_SRC bin.js that echoes the assigned port instantly
    fakeDshSrc = join(testRoot, 'dsrsrc')
    mkdirSync(join(fakeDshSrc, 'apps', 'cli', 'lib'), { recursive: true })
    writeFileSync(join(fakeDshSrc, 'apps', 'cli', 'lib', 'bin.js'),
      "const i = process.argv.indexOf('--port');\nconst port = i >= 0 ? process.argv[i+1] : 44200;\nconsole.log('http://127.0.0.1:' + port);\n")
  }

  const cleanupSandbox = () => {
    if (testRoot && existsSync(testRoot)) {
      try {
        // stop any L2 host/watch that the complete test started
        try {
          execSync(`bash "${scriptPath}" rm deps-test`, {
            env: { ...process.env, DSH_DEV_HOME: join(testRoot, 'dev') }, stdio: 'ignore',
          })
        } catch { /* ignore */ }
        rmSync(testRoot, { recursive: true, force: true })
      } catch { /* ignore */ }
    }
  }

  const runStart = () => execSync(
    `bash "${scriptPath}" start deps-test omnimux-assets --source="${wtRoot}"`,
    {
      encoding: 'utf8',
      env: {
        ...process.env,
        DSH_HOME: join(testRoot, 'prod'),
        DSH_DEV_HOME: join(testRoot, 'dev'),
        DSH_SRC: fakeDshSrc,
      },
      stdio: ['pipe', 'pipe', 'pipe'],
    },
  )

  it('fails fast with a clear message when the prod dsh layer is missing core deps', () => {
    setupSandbox({ complete: false })
    try {
      try {
        runStart()
        assert.fail('should have rejected incomplete source deps')
      } catch (err) {
        const msg = `${err.stdout || ''}${err.stderr || ''}`
        assert.ok(msg.includes('L2 源依赖不完整'), `expected preflight error, got: ${msg}`)
        assert.ok(msg.includes('yarn omnimux:sync'), 'should point to the dsh-layer fix')
        assert.ok(!msg.includes('dev 环境已启动'), 'must not start Host on incomplete deps')
      }
    } finally {
      cleanupSandbox()
    }
  })

  it('passes preflight and starts the L2 env when the prod dsh layer is complete', () => {
    setupSandbox({ complete: true })
    try {
      const out = runStart()
      assert.ok(out.includes('✓ L2 源依赖完整'), `expected preflight pass, got: ${out}`)
      assert.ok(out.includes('dev 环境已启动'), 'complete deps should reach the start success line')
    } finally {
      cleanupSandbox()
    }
  })

  it('embeds the preflight sentinels and guidance in source', () => {
    assert.ok(source.includes('assert_l2_source_deps'), 'preflight function must exist')
    assert.ok(source.includes('@deepseek-ai/dsh-client-ui-chat/lib/index.js'), 'must check the chat entry')
    assert.ok(source.includes('L2 源依赖不完整'), 'must have the failure banner')
    assert.ok(source.includes('host.log 尾部'), 'host-fail diagnostics must dump the log tail')
    assert.ok(source.includes('ERR_MODULE_NOT_FOUND'), 'host-fail diagnostics must hint at missing deps')
  })
})
