import { describe, it, before, after } from 'node:test'
import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const syncToAppScript = join(root, 'scripts/sync-to-app.sh')
const syncStableScript = join(root, 'scripts/sync-stable.sh')
const syncPresetsScript = join(root, 'scripts/sync-agent-presets.sh')

describe('OmniMux Profile Target Selection Matrix', () => {
  const fakeHome = join(tmpdir(), 'test-fake-home-omnimux-' + Date.now())

  before(() => {
    // 创建包含 profiles/omnimux/package.json 的测试环境
    for (const sub of ['.omnimux-dev', '.omnimux', '.dsh']) {
      const p = join(fakeHome, sub, 'profiles', 'omnimux')
      mkdirSync(p, { recursive: true })
      writeFileSync(join(p, 'package.json'), JSON.stringify({
        name: 'omnimux-profile-mock',
        dependencies: {},
        dsh: { profile: { bundles: [] } }
      }, null, 2))
    }
  })

  after(() => {
    try {
      rmSync(fakeHome, { recursive: true, force: true })
    } catch {}
  })

  it('sync-to-app.sh help shows target parameter options', () => {
    const res = spawnSync('bash', [
      syncToAppScript,
      '--help'
    ], {
      cwd: root,
      encoding: 'utf8',
    })
    assert.equal(res.status, 1)
    assert.match(res.stdout, /默认：构建并同步全部清单插件到 ~\/\.omnimux-dev/)
    assert.match(res.stdout, /--prod/)
    assert.match(res.stdout, /--dsh/)
    assert.match(res.stdout, /--all/)
  })

  it('sync-stable.sh targets only ~/.omnimux-dev by default', () => {
    const res = spawnSync('bash', [
      syncStableScript,
      'omnimux-video'
    ], {
      cwd: root,
      env: {
        ...process.env,
        OMNIMUX_SYNC_VIA: 'internal',
        HOME: fakeHome,
      },
      encoding: 'utf8',
    })
    assert.equal(res.status, 0)
    assert.match(res.stdout, /\.omnimux-dev\/profiles\/omnimux/)
    assert.doesNotMatch(res.stdout, new RegExp(fakeHome + '/\\.omnimux/profiles'))
    assert.doesNotMatch(res.stdout, new RegExp(fakeHome + '/\\.dsh/profiles'))
  })

  it('sync-stable.sh targets ~/.omnimux when --prod is passed', () => {
    const res = spawnSync('bash', [
      syncStableScript,
      '--prod',
      'omnimux-video'
    ], {
      cwd: root,
      env: {
        ...process.env,
        OMNIMUX_SYNC_VIA: 'internal',
        HOME: fakeHome,
      },
      encoding: 'utf8',
    })
    assert.equal(res.status, 0)
    assert.match(res.stdout, /\.omnimux\/profiles\/omnimux/)
    assert.doesNotMatch(res.stdout, new RegExp(fakeHome + '/\\.omnimux-dev/profiles'))
    assert.doesNotMatch(res.stdout, new RegExp(fakeHome + '/\\.dsh/profiles'))
  })

  it('sync-stable.sh targets ~/.dsh when --dsh is passed', () => {
    const res = spawnSync('bash', [
      syncStableScript,
      '--dsh',
      'omnimux-video'
    ], {
      cwd: root,
      env: {
        ...process.env,
        OMNIMUX_SYNC_VIA: 'internal',
        HOME: fakeHome,
      },
      encoding: 'utf8',
    })
    assert.equal(res.status, 0)
    assert.match(res.stdout, /\.dsh\/profiles\/omnimux/)
    assert.doesNotMatch(res.stdout, new RegExp(fakeHome + '/\\.omnimux-dev/profiles'))
    assert.doesNotMatch(res.stdout, new RegExp(fakeHome + '/\\.omnimux/profiles'))
  })

  it('sync-stable.sh broadcasts to all profiles when --all is passed', () => {
    const res = spawnSync('bash', [
      syncStableScript,
      '--all',
      'omnimux-video'
    ], {
      cwd: root,
      env: {
        ...process.env,
        OMNIMUX_SYNC_VIA: 'internal',
        HOME: fakeHome,
      },
      encoding: 'utf8',
    })
    assert.equal(res.status, 0)
    assert.match(res.stdout, /\.omnimux-dev\/profiles\/omnimux/)
    assert.match(res.stdout, /\.omnimux\/profiles\/omnimux/)
    assert.match(res.stdout, /\.dsh\/profiles\/omnimux/)
  })

  it('sync-stable.sh supports --target=dev,prod multi-selection', () => {
    const res = spawnSync('bash', [
      syncStableScript,
      '--target=dev,prod',
      'omnimux-video'
    ], {
      cwd: root,
      env: {
        ...process.env,
        OMNIMUX_SYNC_VIA: 'internal',
        HOME: fakeHome,
      },
      encoding: 'utf8',
    })
    assert.equal(res.status, 0)
    assert.match(res.stdout, /\.omnimux-dev\/profiles\/omnimux/)
    assert.match(res.stdout, /\.omnimux\/profiles\/omnimux/)
    assert.doesNotMatch(res.stdout, new RegExp(fakeHome + '/\\.dsh/profiles'))
  })

  it('sync-stable.sh puts @deepseek-ai/dsh-base before omnimux in bundles', () => {
    const profile = join(fakeHome, '.omnimux-dev', 'profiles', 'omnimux')
    // Seed the wrong order that produced: patch: entry llm-pi-ai not found
    writeFileSync(join(profile, 'package.json'), JSON.stringify({
      name: 'omnimux-profile-mock',
      dependencies: {},
      dsh: {
        profile: {
          bundles: [
            'omnimux',
            'omnimux-workflow',
            '@deepseek-ai/dsh-base',
            '@deepseek-ai/dsh-web-app',
            'dsh-better-sidebar',
          ],
        },
      },
    }, null, 2) + '\n')
    // Declare dsh.bundle so omnimux stays on the load list after sync.
    mkdirSync(join(profile, 'node_modules', 'omnimux'), { recursive: true })
    writeFileSync(join(profile, 'node_modules', 'omnimux', 'package.json'), JSON.stringify({
      name: 'omnimux',
      dsh: { bundle: { patch: './cordis.patch.yml' } },
    }, null, 2) + '\n')

    const res = spawnSync('bash', [
      syncStableScript,
      'omnimux',
    ], {
      cwd: root,
      env: {
        ...process.env,
        OMNIMUX_SYNC_VIA: 'internal',
        HOME: fakeHome,
      },
      encoding: 'utf8',
    })
    assert.equal(res.status, 0)
    assert.match(res.stdout, /纠正 bundles 顺序/)

    const next = JSON.parse(readFileSync(join(profile, 'package.json'), 'utf8'))
    const bundles = next.dsh.profile.bundles
    const baseAt = bundles.indexOf('@deepseek-ai/dsh-base')
    const omnimuxAt = bundles.indexOf('omnimux')
    assert.ok(baseAt >= 0, 'dsh-base must remain listed')
    assert.ok(omnimuxAt >= 0, 'omnimux must remain listed')
    assert.ok(baseAt < omnimuxAt, `expected dsh-base before omnimux, got ${JSON.stringify(bundles)}`)
    assert.equal(bundles[0], '@deepseek-ai/dsh-base')
    assert.equal(bundles[1], '@deepseek-ai/dsh-web-app')
  })

  it('sync-agent-presets.sh targets only ~/.omnimux-dev by default', () => {
    const res = spawnSync('bash', [
      syncPresetsScript,
    ], {
      cwd: root,
      env: {
        ...process.env,
        HOME: fakeHome,
      },
      encoding: 'utf8',
    })
    assert.equal(res.status, 0)
    assert.match(res.stdout, /Agent Presets 物化完成/)
    assert.match(res.stdout, /OmniMux Dev\.app/)
    assert.doesNotMatch(res.stdout, /OmniMux\.app\/Contents/)
    assert.doesNotMatch(res.stdout, /DSH Desktop\.app/)
    assert.doesNotMatch(res.stdout, /\.agent-presets/)
  })

  it('sync-agent-presets.sh --dsh skips desktop/web and never retires user presets', () => {
    const userRoot = join(fakeHome, '.dsh', '.agent-presets')
    mkdirSync(join(userRoot, 'dsh-plugin-team'), { recursive: true })
    writeFileSync(join(userRoot, 'dsh-plugin-team', 'preset.yml'), 'name: keep-me\n')
    mkdirSync(join(fakeHome, '.dsh', 'profiles', 'desktop'), { recursive: true })
    mkdirSync(join(fakeHome, '.dsh', 'profiles', 'web'), { recursive: true })
    mkdirSync(join(fakeHome, '.dsh', 'profiles', 'omnimux'), { recursive: true })

    const res = spawnSync('bash', [
      syncPresetsScript,
      '--dsh',
    ], {
      cwd: root,
      env: {
        ...process.env,
        HOME: fakeHome,
      },
      encoding: 'utf8',
    })
    assert.equal(res.status, 0)
    assert.match(res.stdout, /skip non-omnimux profile/)
    assert.doesNotMatch(res.stdout, /==> 物化 Agent Presets → .*DSH Desktop/)
    assert.doesNotMatch(res.stdout, /清理旧用户预设/)
    assert.doesNotMatch(res.stdout, /- retired /)
    assert.ok(existsSync(join(userRoot, 'dsh-plugin-team', 'preset.yml')))
    assert.equal(
      readFileSync(join(userRoot, 'dsh-plugin-team', 'preset.yml'), 'utf8'),
      'name: keep-me\n',
    )
  })

  it('sync-agent-presets.sh --all never writes DSH Desktop.app or user preset root', () => {
    const userRoot = join(fakeHome, '.dsh', '.agent-presets', 'software-company')
    mkdirSync(userRoot, { recursive: true })
    writeFileSync(join(userRoot, 'preset.yml'), 'name: software\n')

    const res = spawnSync('bash', [
      syncPresetsScript,
      '--all',
    ], {
      cwd: root,
      env: {
        ...process.env,
        HOME: fakeHome,
      },
      encoding: 'utf8',
    })
    assert.equal(res.status, 0)
    assert.match(res.stdout, /OmniMux Dev\.app/)
    assert.match(res.stdout, /OmniMux\.app\/Contents/)
    assert.doesNotMatch(res.stdout, /==> 物化 Agent Presets → .*DSH Desktop/)
    assert.doesNotMatch(res.stdout, /清理旧用户预设/)
    assert.doesNotMatch(res.stdout, /- retired /)
    assert.ok(existsSync(join(userRoot, 'preset.yml')))
  })
})
