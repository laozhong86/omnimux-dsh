import { describe, it, before, after } from 'node:test'
import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { mkdirSync, rmSync, writeFileSync } from 'node:fs'
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
  })
})
