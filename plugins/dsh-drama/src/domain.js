import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { basename, dirname, join } from 'node:path'
import { parse as parseYaml, stringify as stringifyYaml } from 'yaml'

const SHOT_STATUSES = new Set(['draft', 'confirmed', 'generating', 'ready', 'failed'])

export class DramaDomainError extends Error {
  /**
   * @param {string} code
   * @param {string} message
   */
  constructor(code, message) {
    super(message)
    this.name = 'DramaDomainError'
    this.code = code
  }
}

/**
 * Walk from startDir to find a project that contains series/series.yaml.
 * @param {string} startDir
 * @returns {string | null}
 */
export function resolveProjectRoot(startDir) {
  let dir = startDir
  for (;;) {
    if (existsSync(join(dir, 'series', 'series.yaml'))) return dir
    if (basename(dir) === 'series' && existsSync(join(dir, 'series.yaml'))) {
      return dirname(dir)
    }
    const parent = dirname(dir)
    if (parent === dir) return null
    dir = parent
  }
}

/**
 * @param {string} filePath
 * @returns {unknown}
 */
function readYamlFile(filePath) {
  return parseYaml(readFileSync(filePath, 'utf8'))
}

/**
 * @param {unknown} value
 * @param {string} label
 * @returns {Record<string, unknown>}
 */
function asObject(value, label) {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) {
    throw new DramaDomainError('invalid-yaml', `${label} must be a mapping`)
  }
  return /** @type {Record<string, unknown>} */ (value)
}

/**
 * @param {unknown} value
 * @param {string} label
 * @returns {unknown[]}
 */
function asArray(value, label) {
  if (!Array.isArray(value)) {
    throw new DramaDomainError('invalid-yaml', `${label} must be a list`)
  }
  return value
}

/**
 * @param {string} root
 */
export function loadProject(root) {
  const seriesDir = join(root, 'series')
  const seriesPath = join(seriesDir, 'series.yaml')
  if (!existsSync(seriesPath)) {
    throw new DramaDomainError('not-a-project', `no series/series.yaml under ${root}`)
  }

  const series = asObject(readYamlFile(seriesPath), 'series.yaml')
  const bible = asObject(readYamlFile(join(seriesDir, 'bible.yaml')), 'bible.yaml')
  const episodesDir = join(seriesDir, 'episodes')
  const episodeFiles = existsSync(episodesDir)
    ? readdirSync(episodesDir).filter((name) => name.endsWith('.yaml')).sort()
    : []
  const episodes = episodeFiles.map((name) => {
    const data = asObject(readYamlFile(join(episodesDir, name)), name)
    return { file: name, ...data }
  })

  const shotsRaw = JSON.parse(readFileSync(join(seriesDir, 'shots.json'), 'utf8'))
  if (!Array.isArray(shotsRaw)) {
    throw new DramaDomainError('invalid-shots', 'shots.json must be an array')
  }
  const shots = shotsRaw.map((shot, index) => normalizeShot(shot, index))

  const characters = asArray(bible.characters ?? [], 'bible.characters').map((row, index) => {
    const character = asObject(row, `bible.characters[${index}]`)
    const id = String(character.id ?? '')
    if (!id) throw new DramaDomainError('invalid-bible', `characters[${index}] missing id`)
    return {
      id,
      name: String(character.name ?? id),
      confirmed: character.confirmed === true,
    }
  })

  return { root, seriesDir, series, bible, characters, episodes, shots, shotsRaw }
}

/**
 * @param {unknown} raw
 * @param {number} index
 */
function normalizeShot(raw, index) {
  const shot = asObject(raw, `shots[${index}]`)
  const status = String(shot.status ?? 'draft')
  if (!SHOT_STATUSES.has(status)) {
    throw new DramaDomainError('invalid-shot', `shots[${index}] has unknown status ${status}`)
  }
  const characterIds = Array.isArray(shot.character_ids)
    ? shot.character_ids.map((id) => String(id))
    : []
  return {
    shot_id: String(shot.shot_id ?? ''),
    episode_id: String(shot.episode_id ?? ''),
    status,
    character_ids: characterIds,
    scene_purpose: String(shot.scene_purpose ?? ''),
    visual_description: String(shot.visual_description ?? ''),
    duration: typeof shot.duration === 'number' ? shot.duration : Number(shot.duration) || null,
    asset_path: shot.asset_path == null ? null : String(shot.asset_path),
    job_id: shot.job_id == null ? null : String(shot.job_id),
  }
}

/**
 * @param {{ characters: { id: string, confirmed: boolean }[], shots: { status: string, character_ids: string[] }[] }} shot
 * @param {{ status: string, character_ids: string[], shot_id: string }} shot
 */
export function assertShotGeneratable(project, shot) {
  if (shot.status !== 'generating' && shot.status !== 'ready') return
  const confirmed = new Set(project.characters.filter((c) => c.confirmed).map((c) => c.id))
  const missing = shot.character_ids.filter((id) => !confirmed.has(id))
  if (missing.length > 0) {
    throw new DramaDomainError(
      'unconfirmed-characters',
      `shot ${shot.shot_id || '(missing id)'} cannot be ${shot.status}: unconfirmed ${missing.join(', ')}`,
    )
  }
}

/**
 * @param {ReturnType<typeof loadProject>} project
 */
export function projectStatus(project) {
  const shotCounts = { draft: 0, confirmed: 0, generating: 0, ready: 0, failed: 0 }
  for (const shot of project.shots) {
    shotCounts[/** @type {keyof typeof shotCounts} */ (shot.status)] += 1
  }
  return {
    root: project.root,
    series_id: String(project.series.id ?? ''),
    title: String(project.series.title ?? ''),
    episode_count: project.episodes.length,
    shot_count: project.shots.length,
    shot_counts: shotCounts,
    unconfirmed_characters: project.characters
      .filter((c) => !c.confirmed)
      .map((c) => ({ id: c.id, name: c.name })),
  }
}

/**
 * @param {string} cwd
 */
export function requireProjectRoot(cwd) {
  const root = resolveProjectRoot(cwd)
  if (!root) {
    throw new DramaDomainError('not-a-project', `no series/ above ${cwd}`)
  }
  return root
}

export function statusFromCwd(cwd) {
  const project = loadProject(requireProjectRoot(cwd))
  for (const shot of project.shots) {
    assertShotGeneratable(project, shot)
  }
  return projectStatus(project)
}

/**
 * @param {string} filePath
 * @param {unknown} value
 */
function writeYamlFile(filePath, value) {
  writeFileSync(filePath, stringifyYaml(value, { lineWidth: 0 }), 'utf8')
}

/**
 * @param {string} filePath
 * @param {unknown} value
 */
function writeJsonFile(filePath, value) {
  writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`, 'utf8')
}

/**
 * @param {string} root
 * @param {Record<string, unknown>} fields
 */
export function upsertSeries(root, fields) {
  const project = loadProject(root)
  const next = { ...project.series }
  for (const key of ['id', 'title', 'logline', 'locale', 'aspect']) {
    if (fields[key] !== undefined && fields[key] !== null) next[key] = fields[key]
  }
  if (fields.genre !== undefined) {
    next.genre = Array.isArray(fields.genre) ? fields.genre : [fields.genre]
  }
  writeYamlFile(join(project.seriesDir, 'series.yaml'), next)
  return projectStatus(loadProject(root))
}

/**
 * @param {string} root
 * @param {{ id: string } & Record<string, unknown>} fields
 */
export function upsertEpisode(root, fields) {
  const id = String(fields.id ?? '')
  if (!id) throw new DramaDomainError('invalid-episode', 'episode id is required')
  const project = loadProject(root)
  const episodesDir = join(project.seriesDir, 'episodes')
  mkdirSync(episodesDir, { recursive: true })
  const file = `${id}.yaml`
  const existing = project.episodes.find((row) => String(row.id) === id) ?? {}
  const { file: _ignored, ...rest } = existing
  const next = { ...rest, ...fields, id }
  writeYamlFile(join(episodesDir, file), next)
  return projectStatus(loadProject(root))
}

/**
 * @param {string} root
 * @param {string[]} characterIds
 */
export function confirmBible(root, characterIds) {
  const ids = characterIds.map((id) => String(id)).filter(Boolean)
  if (ids.length === 0) {
    throw new DramaDomainError('invalid-bible', 'character_ids must not be empty')
  }
  const project = loadProject(root)
  const characters = asArray(project.bible.characters ?? [], 'bible.characters')
  for (const id of ids) {
    const row = characters.find((item) => String(asObject(item, 'character').id) === id)
    if (!row) {
      throw new DramaDomainError('unknown-character', `no bible character ${id}`)
    }
    asObject(row, id).confirmed = true
  }
  writeYamlFile(join(project.seriesDir, 'bible.yaml'), project.bible)
  return projectStatus(loadProject(root))
}

/**
 * @param {string} root
 * @param {Record<string, unknown>} patch
 * @param {{ allowReady?: boolean }} [options]
 */
export function upsertShot(root, patch, options = {}) {
  const shotId = String(patch.shot_id ?? '')
  if (!shotId) throw new DramaDomainError('invalid-shot', 'shot_id is required')
  const project = loadProject(root)
  const raw = project.shotsRaw.map((row) => asObject(row, 'shot'))
  const index = raw.findIndex((row) => String(row.shot_id) === shotId)
  const merged = { ...(index >= 0 ? raw[index] : { status: 'draft', character_ids: [] }), ...patch, shot_id: shotId }
  const status = String(merged.status ?? 'draft')
  if (!options.allowReady && (status === 'ready' || status === 'generating')) {
    throw new DramaDomainError('invalid-shot', 'use drama_generate_shot to mark a shot generating or ready')
  }
  const nextRaw = [...raw]
  if (index >= 0) nextRaw[index] = merged
  else nextRaw.push(merged)
  const nextShots = nextRaw.map((row, i) => normalizeShot(row, i))
  const preview = { ...project, shots: nextShots }
  for (const shot of nextShots) assertShotGeneratable(preview, shot)
  writeJsonFile(join(project.seriesDir, 'shots.json'), nextRaw)
  return {
    shot: normalizeShot(merged, index >= 0 ? index : nextRaw.length - 1),
    status: projectStatus(loadProject(root)),
  }
}

/**
 * @param {string} root
 * @param {string} shotId
 * @param {(spec: { dest: string, destRel: string, shot: ReturnType<typeof normalizeShot> }) => Promise<{ mode?: string, taskId?: string | null } | void>} produce
 */
export async function runGenerateShot(root, shotId, produce) {
  const project = loadProject(root)
  const shot = project.shots.find((row) => row.shot_id === shotId)
  if (!shot) throw new DramaDomainError('unknown-shot', `no shot ${shotId}`)
  assertShotGeneratable(project, { ...shot, status: 'ready' })
  upsertShot(root, { shot_id: shotId, status: 'generating' }, { allowReady: true })
  const destRel = `assets/${shotId}.mp4`
  const dest = join(project.seriesDir, destRel)
  mkdirSync(dirname(dest), { recursive: true })
  try {
    const meta = await produce({ dest, destRel, shot })
    return {
      mode: meta?.mode ?? 'live',
      ...upsertShot(root, {
        shot_id: shotId,
        status: 'ready',
        asset_path: destRel,
        job_id: meta?.taskId ?? null,
      }, { allowReady: true }),
    }
  } catch (error) {
    upsertShot(root, { shot_id: shotId, status: 'failed' }, { allowReady: true })
    throw error
  }
}

/**
 * No videoGenerate seam: copy an explicit stub, or throw needs-provider.
 * @param {string} root
 * @param {string} shotId
 * @param {string} [stubPath]
 */
export async function generateShot(root, shotId, stubPath) {
  return runGenerateShot(root, shotId, async ({ dest }) => {
    const project = loadProject(root)
    const explicit = stubPath ?? process.env.DRAMA_STUB_MP4
    const projectStub = join(project.seriesDir, 'assets', 'stub.mp4')
    if (explicit) {
      if (!existsSync(explicit)) {
        throw new DramaDomainError('missing-stub', `stub mp4 not found at ${explicit}`)
      }
      copyFileSync(explicit, dest)
      return { mode: 'stub' }
    }
    if (existsSync(projectStub)) {
      copyFileSync(projectStub, dest)
      return { mode: 'stub' }
    }
    throw new DramaDomainError(
      'needs-provider',
      'install dsh plugin add ./plugins/dsh-omnimux and configure a provider',
    )
  })
}

/**
 * Create an empty series project under cwd.
 * @param {string} cwd
 * @param {{ id: string, title?: string, logline?: string }} fields
 */
export function initProject(cwd, fields) {
  const id = String(fields.id ?? '').trim()
  if (!id) throw new DramaDomainError('invalid-yaml', 'series id is required')
  const existing = resolveProjectRoot(cwd)
  if (existing) {
    throw new DramaDomainError('already-a-project', `series already exists at ${existing}`)
  }
  const seriesDir = join(cwd, 'series')
  mkdirSync(join(seriesDir, 'episodes'), { recursive: true })
  mkdirSync(join(seriesDir, 'assets'), { recursive: true })
  writeYamlFile(join(seriesDir, 'series.yaml'), {
    id,
    title: String(fields.title ?? id),
    logline: String(fields.logline ?? ''),
    genre: [],
    locale: 'zh-CN',
    aspect: '9:16',
  })
  writeYamlFile(join(seriesDir, 'bible.yaml'), {
    characters: [],
    scenes: [],
    voice: '',
  })
  writeJsonFile(join(seriesDir, 'shots.json'), [])
  return projectStatus(loadProject(cwd))
}
