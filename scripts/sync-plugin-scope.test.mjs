import { afterEach, describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { chmodSync, mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const sourceSync = readFileSync(join(root, 'scripts', 'sync-to-app.sh'), 'utf8')
const temporaryRoots = []

afterEach(() => {
  for (const directory of temporaryRoots.splice(0)) {
    rmSync(directory, { recursive: true, force: true })
  }
})

function writeExecutable(file, contents) {
  writeFileSync(file, contents, 'utf8')
  chmodSync(file, 0o755)
}

function setupFixture({ kitSource = 'current-kit', kitTarget = kitSource, selectedBuild = 'process.exit(0)' } = {}) {
  const fixture = mkdtempSync(join(tmpdir(), 'omnimux-plugin-scope-'))
  temporaryRoots.push(fixture)

  const scripts = join(fixture, 'scripts')
  const plugin = join(fixture, 'plugins', 'omnimux-assets')
  const kit = join(fixture, 'kit')
  const targetHome = join(fixture, 'target')
  const profile = join(targetHome, 'profiles', 'omnimux')
  const events = join(fixture, 'events.log')
  const bin = join(fixture, 'bin')

  mkdirSync(scripts, { recursive: true })
  mkdirSync(join(plugin, 'scripts'), { recursive: true })
  mkdirSync(join(kit, 'lib'), { recursive: true })
  mkdirSync(join(profile, 'node_modules', 'dsh-ui-kit', 'lib'), { recursive: true })
  mkdirSync(join(profile, 'node_modules', 'omnimux-workflow'), { recursive: true })
  mkdirSync(bin, { recursive: true })

  writeFileSync(join(scripts, 'sync-to-app.sh'), sourceSync, 'utf8')
  chmodSync(join(scripts, 'sync-to-app.sh'), 0o755)
  writeExecutable(join(scripts, 'sync-stable.sh'), [
    '#!/bin/bash',
    'set -euo pipefail',
    'printf "stable:%s\\n" "$*" >> "$SYNC_EVENTS"',
    'exit "${SYNC_STABLE_STATUS:-0}"',
    '',
  ].join('\n'))
  writeExecutable(join(scripts, 'sync-agent-presets.sh'), [
    '#!/bin/bash',
    'set -euo pipefail',
    'printf "presets:%s\\n" "$*" >> "$SYNC_EVENTS"',
    '',
  ].join('\n'))
  writeExecutable(join(bin, 'corepack'), [
    '#!/bin/bash',
    'set -euo pipefail',
    'printf "kit-build:%s\\n" "$*" >> "$SYNC_EVENTS"',
    '',
  ].join('\n'))

  writeFileSync(join(plugin, 'package.json'), JSON.stringify({
    name: 'omnimux-assets',
    dependencies: { 'dsh-ui-kit': 'file:../../../../personal/dsh-ui-kit' },
  }), 'utf8')
  writeFileSync(join(plugin, 'scripts', 'build-client.mjs'), `${selectedBuild}\n`, 'utf8')
  writeFileSync(join(kit, 'lib', 'index.js'), kitSource, 'utf8')
  writeFileSync(join(profile, 'node_modules', 'dsh-ui-kit', 'lib', 'index.js'), kitTarget, 'utf8')
  writeFileSync(join(profile, 'node_modules', 'omnimux-workflow', 'sentinel.txt'), 'unselected plugin', 'utf8')
  writeFileSync(join(profile, 'package.json'), JSON.stringify({ name: 'fixture-profile' }), 'utf8')

  const preset = join(fixture, 'preset-sentinel.yml')
  const asar = join(fixture, 'app.asar')
  const infoPlist = join(fixture, 'Info.plist')
  writeFileSync(preset, 'preset sentinel', 'utf8')
  writeFileSync(asar, 'asar sentinel', 'utf8')
  writeFileSync(infoPlist, 'plist sentinel', 'utf8')

  return { fixture, targetHome, profile, kit, events, bin, preset, asar, infoPlist }
}

function run(fixture, args, extraEnv = {}) {
  return spawnSync('bash', [join(fixture.fixture, 'scripts', 'sync-to-app.sh'), ...args], {
    cwd: fixture.fixture,
    encoding: 'utf8',
    env: {
      ...process.env,
      ...extraEnv,
      OMNIMUX_DSH_UI_KIT_DIR: fixture.kit,
      SYNC_EVENTS: fixture.events,
      PATH: `${fixture.bin}:${process.env.PATH}`,
    },
  })
}

function events(fixture) {
  try {
    return readFileSync(fixture.events, 'utf8')
  } catch {
    return ''
  }
}

describe('sync-to-app named-plugin scope', () => {
  it('only materializes the named plugin and leaves kit, presets, and installer sentinels untouched', () => {
    const fixture = setupFixture()
    const result = run(fixture, ['--skip-build', `--target=${fixture.targetHome}`, 'omnimux-assets'])

    assert.equal(result.status, 0, `${result.stdout}\n${result.stderr}`)
    assert.match(result.stdout, /跳过 Agent Presets/)
    assert.match(events(fixture), /stable:.*omnimux-assets/)
    assert.doesNotMatch(events(fixture), /kit-build|presets:/)
    assert.equal(readFileSync(join(fixture.profile, 'node_modules', 'dsh-ui-kit', 'lib', 'index.js'), 'utf8'), 'current-kit')
    assert.equal(readFileSync(join(fixture.profile, 'node_modules', 'omnimux-workflow', 'sentinel.txt'), 'utf8'), 'unselected plugin')
    assert.equal(readFileSync(fixture.preset, 'utf8'), 'preset sentinel')
    assert.equal(readFileSync(fixture.asar, 'utf8'), 'asar sentinel')
    assert.equal(readFileSync(fixture.infoPlist, 'utf8'), 'plist sentinel')
  })

  it('fails before materialization when a named plugin sees kit drift', () => {
    const fixture = setupFixture({ kitTarget: 'stale-kit' })
    const result = run(fixture, ['--skip-build', `--target=${fixture.targetHome}`, 'omnimux-assets'])

    assert.notEqual(result.status, 0)
    assert.match(result.stderr, /dsh-ui-kit 漂移/)
    assert.match(result.stderr, /完整 yarn omnimux:sync/)
    assert.equal(events(fixture), '')
    assert.equal(readFileSync(join(fixture.profile, 'node_modules', 'dsh-ui-kit', 'lib', 'index.js'), 'utf8'), 'stale-kit')
  })

  it('keeps selected-plugin build and materialization failures nonzero', () => {
    const buildFixture = setupFixture({ selectedBuild: 'process.exit(23)' })
    const build = run(buildFixture, [`--target=${buildFixture.targetHome}`, 'omnimux-assets'])
    assert.equal(build.status, 23)
    assert.equal(events(buildFixture), '')

    const materializeFixture = setupFixture()
    const materialize = run(materializeFixture, ['--skip-build', `--target=${materializeFixture.targetHome}`, 'omnimux-assets'], {
      SYNC_STABLE_STATUS: '29',
    })
    assert.equal(materialize.status, 29)
    assert.match(events(materializeFixture), /stable:.*omnimux-assets/)
    assert.doesNotMatch(events(materializeFixture), /presets:/)
  })

  it('keeps the existing full operation explicit when no plugin is named', () => {
    const fixture = setupFixture()
    const fullHome = join(fixture.fixture, 'home')
    const fullProfile = join(fullHome, '.omnimux-dev', 'profiles', 'omnimux')
    mkdirSync(join(fullProfile, 'node_modules', 'dsh-ui-kit', 'lib'), { recursive: true })
    writeFileSync(join(fullProfile, 'node_modules', 'dsh-ui-kit', 'lib', 'index.js'), 'current-kit', 'utf8')

    const result = run(fixture, ['--skip-build'], { HOME: fullHome })

    assert.equal(result.status, 0, `${result.stdout}\n${result.stderr}`)
    assert.match(events(fixture), /kit-build:pnpm build/)
    assert.match(events(fixture), /stable:/)
    assert.match(events(fixture), /presets:/)
  })
})
