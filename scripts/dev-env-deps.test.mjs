import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { execSync } from 'node:child_process'
import { existsSync, mkdirSync, writeFileSync, readFileSync, rmSync, symlinkSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { tmpdir } from 'node:os'

const here = dirname(fileURLToPath(import.meta.url))
const scriptPath = join(here, 'dev-env.sh')
const source = readFileSync(scriptPath, 'utf8')

describe('scripts/dev-env.sh L2 Host install-closure preflight', () => {
  let testRoot
  let prodProfile
  let wtRoot
  let fakeDshSrc

  const writePkg = (dir, name, deps = {}) => {
    mkdirSync(dir, { recursive: true })
    writeFileSync(join(dir, 'package.json'), JSON.stringify({ name, version: '0.0.0-test', type: 'module', dependencies: deps }, null, 2))
  }

  /**
   * Build a mini monorepo that mirrors apps/cli → dsh-web-app → dsh-client-ui-chat.
   * When `complete` is false, ui-chat is omitted so createRequire fails.
   */
  const setupDshSrc = ({ complete }) => {
    fakeDshSrc = join(testRoot, 'dsrsrc')
    const cliDir = join(fakeDshSrc, 'apps', 'cli')
    const webAppDir = join(fakeDshSrc, 'packages', 'web-app')
    const chatDir = join(fakeDshSrc, 'packages', 'ui-chat')
    mkdirSync(join(cliDir, 'lib'), { recursive: true })
    mkdirSync(join(cliDir, 'node_modules', '@deepseek-ai'), { recursive: true })
    mkdirSync(join(webAppDir, 'node_modules', '@deepseek-ai'), { recursive: true })
    mkdirSync(join(chatDir, 'lib'), { recursive: true })

    writePkg(cliDir, '@deepseek-ai/dsh', { '@deepseek-ai/dsh-web-app': 'workspace:^' })
    writePkg(webAppDir, '@deepseek-ai/dsh-web-app', complete
      ? { '@deepseek-ai/dsh-client-ui-chat': 'workspace:^' }
      : {})
    writePkg(chatDir, '@deepseek-ai/dsh-client-ui-chat', {})
    writeFileSync(join(chatDir, 'lib', 'index.js'), 'export default {}\n')
    writeFileSync(join(cliDir, 'lib', 'bin.js'),
      "const i = process.argv.indexOf('--port');\nconst port = i >= 0 ? process.argv[i+1] : 44200;\nconsole.log('http://127.0.0.1:' + port);\n")

    // node resolution graph: cli → web-app; web-app → ui-chat (optional)
    symlinkSync(webAppDir, join(cliDir, 'node_modules', '@deepseek-ai', 'dsh-web-app'))
    if (complete) {
      symlinkSync(chatDir, join(webAppDir, 'node_modules', '@deepseek-ai', 'dsh-client-ui-chat'))
    }
  }

  const setupSandbox = ({ complete, emptyProdScope = true }) => {
    const runId = Math.random().toString(36).substring(2, 9)
    testRoot = join(tmpdir(), `omnimux-dev-env-deps-${runId}`)
    prodProfile = join(testRoot, 'prod', 'profiles', 'omnimux')
    mkdirSync(join(prodProfile, 'node_modules'), { recursive: true })
    // Real OmniMux profile seeds: package.json + cordis + plugin deps.
    // Official @deepseek-ai scope is normally EMPTY here.
    writeFileSync(join(prodProfile, 'package.json'), JSON.stringify({ name: 'omnimux-profile-seed' }))
    writeFileSync(join(prodProfile, 'cordis.patch.yml'), '')
    if (!emptyProdScope) {
      // Only used if a test wants a populated private scope (not required).
      const chat = join(prodProfile, 'node_modules', '@deepseek-ai', 'dsh-client-ui-chat', 'lib')
      mkdirSync(chat, { recursive: true })
      writeFileSync(join(chat, 'index.js'), 'sentinel')
    }
    wtRoot = join(testRoot, 'wt-root')
    mkdirSync(join(wtRoot, 'plugins', 'omnimux-assets'), { recursive: true })
    writeFileSync(join(wtRoot, 'plugins', 'omnimux-assets', 'package.json'), JSON.stringify({ name: 'omnimux-assets', version: '1.0.0' }))
    setupDshSrc({ complete })
  }

  const cleanupSandbox = () => {
    if (testRoot && existsSync(testRoot)) {
      try {
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
        // 隔离测试：显式种子，避免误用开发者本机 ~/.omnimux-dev
        OMNIMUX_L2_SEED_PROFILE: prodProfile,
        DSH_HOME: join(testRoot, 'prod'),
        DSH_DEV_HOME: join(testRoot, 'dev'),
        DSH_SRC: fakeDshSrc,
      },
      stdio: ['pipe', 'pipe', 'pipe'],
    },
  )

  it('does NOT false-positive when prod profile @deepseek-ai scope is empty (normal)', () => {
    setupSandbox({ complete: true, emptyProdScope: true })
    try {
      const out = runStart()
      assert.ok(out.includes('L2 Host 安装闭包完整'), `expected install-closure pass, got: ${out}`)
      assert.ok(out.includes('dev 环境已启动'), 'complete DSH_SRC closure should start Host')
      // Empty prod @deepseek-ai must not be treated as missing deps
      assert.ok(!out.includes('生产 dsh 层缺失'), 'must not blame empty prod profile scope')
    } finally {
      cleanupSandbox()
    }
  })

  it('fails fast when DSH_SRC cannot resolve web-app → ui-chat', () => {
    setupSandbox({ complete: false, emptyProdScope: true })
    try {
      try {
        runStart()
        assert.fail('should have rejected incomplete install closure')
      } catch (err) {
        const msg = `${err.stdout || ''}${err.stderr || ''}`
        assert.ok(msg.includes('L2 Host 安装闭包不完整'), `expected closure error, got: ${msg}`)
        assert.ok(msg.includes('ui-chat') || msg.includes('MISS'), `should mention ui-chat miss, got: ${msg}`)
        assert.ok(msg.includes('yarn omnimux:sync') === false || msg.includes('只物化'), 'must not claim sync fixes official client closure alone')
        assert.ok(!msg.includes('dev 环境已启动'), 'must not start Host on incomplete closure')
      }
    } finally {
      cleanupSandbox()
    }
  })

  it('rejects a seed better-sidebar that still imports removed settingsNamespace', () => {
    setupSandbox({ complete: true, emptyProdScope: true })
    try {
      const bsLib = join(prodProfile, 'node_modules', 'dsh-better-sidebar', 'lib')
      mkdirSync(bsLib, { recursive: true })
      writeFileSync(join(bsLib, 'index.js'),
        'import { SettingsConflictError, settingsNamespace } from "@deepseek-ai/dsh-settings";\nexport default {}\n')
      writeFileSync(join(prodProfile, 'node_modules', 'dsh-better-sidebar', 'package.json'),
        JSON.stringify({ name: 'dsh-better-sidebar', version: '0.13.1-stale' }))
      // Provide a dsh-settings package WITHOUT settingsNamespace export in the fake monorepo
      const settingsDir = join(fakeDshSrc, 'packages', 'settings')
      writePkg(settingsDir, '@deepseek-ai/dsh-settings', {})
      writeFileSync(join(settingsDir, 'index.js'), 'export class SettingsConflictError extends Error {}\n')
      mkdirSync(join(fakeDshSrc, 'apps', 'cli', 'node_modules', '@deepseek-ai'), { recursive: true })
      try { symlinkSync(settingsDir, join(fakeDshSrc, 'apps', 'cli', 'node_modules', '@deepseek-ai', 'dsh-settings')) } catch { /* exists */ }
      // Also link from web-app so createRequire from cli can still see web-app→chat path
      try {
        runStart()
        assert.fail('should reject incompatible better-sidebar seed')
      } catch (err) {
        const msg = `${err.stdout || ''}${err.stderr || ''}`
        assert.ok(msg.includes('better-sidebar') && msg.includes('不兼容'), `expected compat error, got: ${msg}`)
        assert.ok(msg.includes('omnimux-dev') || msg.includes('OMNIMUX_L2_SEED_PROFILE'), 'should point to Dev seed')
        assert.ok(!msg.includes('dev 环境已启动'), 'must not start Host')
      }
    } finally {
      cleanupSandbox()
    }
  })

  it('embeds DSH_SRC install-closure preflight and accurate guidance in source', () => {
    assert.ok(source.includes('assert_l2_source_deps'), 'preflight function must exist')
    assert.ok(source.includes('createRequire'), 'must resolve via Node install-anchor semantics')
    assert.ok(source.includes('dsh-client-ui-chat'), 'must check ui-chat')
    assert.ok(source.includes('L2 Host 安装闭包'), 'must use install-closure banner')
    assert.ok(source.includes('OMNIMUX_L2_SEED_PROFILE') || source.includes('omnimux-dev'), 'must prefer Dev seed')
    assert.ok(source.includes('settingsNamespace'), 'must detect better-sidebar API skew')
    assert.ok(source.includes('host.log 尾部'), 'host-fail diagnostics must dump the log tail')
  })
})
