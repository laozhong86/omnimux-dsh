import assert from 'node:assert/strict'
import { cpSync, existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { describe, it } from 'node:test'
import { fileURLToPath } from 'node:url'
import {
  assertShotGeneratable,
  confirmBible,
  DramaDomainError,
  generateShot,
  initProject,
  runGenerateShot,
  loadProject,
  projectStatus,
  resolveProjectRoot,
  statusFromCwd,
  upsertShot,
} from './domain.js'

const here = dirname(fileURLToPath(import.meta.url))
const fixtureRoot = join(here, '../../../fixtures/demo-series')

describe('demo-series fixture', () => {
  it('resolves from the project root and from series/', () => {
    assert.equal(resolveProjectRoot(fixtureRoot), fixtureRoot)
    assert.equal(resolveProjectRoot(join(fixtureRoot, 'series')), fixtureRoot)
    assert.equal(resolveProjectRoot(join(fixtureRoot, 'series', 'episodes')), fixtureRoot)
  })

  it('reports 2 episodes, 3 shots, and one unconfirmed character', () => {
    const status = statusFromCwd(fixtureRoot)
    assert.equal(status.series_id, 'demo-forbidden-duty')
    assert.equal(status.episode_count, 2)
    assert.equal(status.shot_count, 3)
    assert.deepEqual(status.shot_counts, {
      draft: 2,
      confirmed: 1,
      generating: 0,
      ready: 0,
      failed: 0,
    })
    assert.deepEqual(status.unconfirmed_characters, [{ id: 'wei-an', name: '卫安' }])
  })

  it('rejects generating a shot whose characters are unconfirmed', () => {
    const project = loadProject(fixtureRoot)
    const shot = project.shots.find((row) => row.shot_id === 'e01-s02')
    assert.ok(shot)
    assert.throws(
      () => assertShotGeneratable(project, { ...shot, status: 'ready' }),
      (error) => error instanceof DramaDomainError && error.code === 'unconfirmed-characters',
    )
  })

  it('allows a confirmed-only shot to become ready', () => {
    const project = loadProject(fixtureRoot)
    const shot = project.shots.find((row) => row.shot_id === 'e01-s01')
    assert.ok(shot)
    assert.doesNotThrow(() => assertShotGeneratable(project, { ...shot, status: 'ready' }))
    const snapshot = projectStatus(project)
    assert.equal(snapshot.title, '长公主的禁忌职分')
  })
})

describe('writes on a fixture copy', () => {
  /** @type {string} */
  let root

  it('setup copy', () => {
    root = mkdtempSync(join(tmpdir(), 'drama-'))
    cpSync(fixtureRoot, root, { recursive: true })
  })

  it('refuses upsert to ready', () => {
    assert.throws(
      () => upsertShot(root, { shot_id: 'e01-s01', status: 'ready' }),
      (error) => error instanceof DramaDomainError && error.code === 'invalid-shot',
    )
  })

  it('refuses generate while wei-an is unconfirmed', async () => {
    await assert.rejects(
      () => generateShot(root, 'e01-s02'),
      (error) => error instanceof DramaDomainError && error.code === 'unconfirmed-characters',
    )
    assert.equal(existsSync(join(root, 'series/assets/e01-s02.mp4')), false)
    const shot = loadProject(root).shots.find((row) => row.shot_id === 'e01-s02')
    assert.equal(shot?.status, 'draft')
  })

  it('confirms wei-an then generates e01-s01 to a ready asset', async () => {
    const afterConfirm = confirmBible(root, ['wei-an'])
    assert.deepEqual(afterConfirm.unconfirmed_characters, [])
    const result = await generateShot(root, 'e01-s01')
    assert.equal(result.mode, 'stub')
    assert.equal(result.shot.status, 'ready')
    assert.equal(result.shot.asset_path, 'assets/e01-s01.mp4')
    assert.equal(existsSync(join(root, 'series/assets/e01-s01.mp4')), true)
    assert.equal(result.status.shot_counts.ready, 1)
    const written = JSON.parse(readFileSync(join(root, 'series/shots.json'), 'utf8'))
    const raw = written.find((row) => row.shot_id === 'e01-s01')
    assert.equal(raw.framing, '近景')
  })

  it('marks only the failed shot when produce throws', async () => {
    await assert.rejects(
      () => runGenerateShot(root, 'e01-s01', async () => {
        throw new Error('upstream down')
      }),
      /upstream down/,
    )
    const project = loadProject(root)
    const failed = project.shots.find((row) => row.shot_id === 'e01-s01')
    const other = project.shots.find((row) => row.shot_id === 'e01-s02')
    assert.equal(failed?.status, 'failed')
    assert.equal(other?.status, 'draft')
  })

  it('cleanup', () => {
    rmSync(root, { recursive: true, force: true })
  })
})

describe('initProject', () => {
  /** @type {string} */
  let empty

  it('creates a blank series tree', () => {
    empty = mkdtempSync(join(tmpdir(), 'drama-init-'))
    const status = initProject(empty, { id: 'new-series', title: '新剧' })
    assert.equal(status.series_id, 'new-series')
    assert.equal(status.title, '新剧')
    assert.equal(status.episode_count, 0)
    assert.equal(status.shot_count, 0)
    assert.equal(resolveProjectRoot(empty), empty)
  })

  it('refuses a second init', () => {
    assert.throws(
      () => initProject(empty, { id: 'other' }),
      (error) => error instanceof DramaDomainError && error.code === 'already-a-project',
    )
  })

  it('generate without seam or stub throws needs-provider', async () => {
    writeFileSync(join(empty, 'series/bible.yaml'), [
      'characters:',
      '  - id: hero',
      '    name: Hero',
      '    confirmed: true',
      'scenes: []',
      'voice: ""',
      '',
    ].join('\n'))
    upsertShot(empty, {
      shot_id: 'e01-s01',
      episode_id: 'e01',
      character_ids: ['hero'],
      status: 'confirmed',
      visual_description: 'a face in torchlight',
    })
    await assert.rejects(
      () => generateShot(empty, 'e01-s01'),
      (error) => error instanceof DramaDomainError && error.code === 'needs-provider',
    )
  })

  it('cleanup', () => {
    rmSync(empty, { recursive: true, force: true })
  })
})

