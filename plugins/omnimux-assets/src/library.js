/**
 * Creative-asset library: named objects with a type + path-only file refs.
 *
 * RED LINE: this store never copies, moves, or deletes anything under a
 * file's `real_path`. Missing paths drop out of the visible file list.
 */
import { accessSync, constants, mkdirSync, readFileSync, readdirSync, realpathSync, renameSync, statSync, writeFileSync } from 'node:fs'
import { basename, dirname, resolve, sep } from 'node:path'
import { bucketOf, extOf, previewMimeOf, scanDir, scanFile, statStatus } from './scanner.js'
import { AssetsError, newRecordId } from './mappings.js'

const DEFAULT_FS = { accessSync, constants, mkdirSync, readFileSync, readdirSync, realpathSync, renameSync, statSync, writeFileSync }

export const ASSET_TYPES = Object.freeze(['character', 'scene', 'style', 'prop', 'knowledge', 'custom'])

/** Citation prefix in @类型/名称. Chinese labels are the product surface. */
export const TYPE_CITE = Object.freeze({
  character: '角色',
  scene: '场景',
  style: '风格包',
  prop: '道具',
  knowledge: '知识包',
  custom: '自定义',
})

const TYPE_SET = new Set(ASSET_TYPES)
const NAME_MAX = 40
const DESCRIPTION_MAX = 4000
const HANDLE_FORBIDDEN = /[/\u0000-\u001f]/

/**
 * @param {unknown} value
 */
function str(value) {
  return typeof value === 'string' ? value : ''
}

/**
 * @param {typeof DEFAULT_FS} fs
 * @param {string} file
 * @param {string} text
 */
function atomicWrite(fs, file, text) {
  fs.mkdirSync(dirname(file), { recursive: true, mode: 0o700 })
  const tmp = `${file}.tmp`
  fs.writeFileSync(tmp, text, { mode: 0o600 })
  fs.renameSync(tmp, file)
}

/**
 * Unselected type falls into custom (not a seventh creative kind).
 * @param {unknown} type
 */
export function normalizeType(type) {
  const raw = str(type).trim()
  if (raw === '') return 'custom'
  if (!TYPE_SET.has(raw)) throw new AssetsError('type-invalid', 'unknown asset type')
  return raw
}

/**
 * @param {unknown} name
 */
export function normalizeName(name) {
  const trimmed = str(name).trim()
  if (!trimmed) throw new AssetsError('name-required', 'display name is required')
  if (trimmed.length > NAME_MAX) throw new AssetsError('name-invalid', `display name must be at most ${NAME_MAX} characters`)
  if (HANDLE_FORBIDDEN.test(trimmed)) throw new AssetsError('name-invalid', 'display name cannot contain slashes or control characters')
  return trimmed
}

/**
 * @param {unknown} description
 */
export function normalizeDescription(description) {
  const text = str(description)
  if (text.length > DESCRIPTION_MAX) throw new AssetsError('description-too-long', `description must be at most ${DESCRIPTION_MAX} characters`)
  return text
}

/**
 * @param {unknown} tags
 * @returns {string[]}
 */
export function normalizeTags(tags) {
  if (tags == null) return []
  if (!Array.isArray(tags)) throw new AssetsError('tags-invalid', 'tags must be an array of strings')
  const out = []
  const seen = new Set()
  for (const item of tags) {
    const tag = str(item).trim()
    if (!tag) continue
    const key = tag.toLowerCase()
    if (seen.has(key)) continue
    seen.add(key)
    out.push(tag)
    if (out.length >= 20) break
  }
  return out
}

/**
 * Handle used in @type/name citations. Same display name shares one handle.
 * @param {string} name
 */
export function handleOf(name) {
  return name.trim().replace(/\s+/g, ' ')
}

/**
 * Visible file probe: missing path → hidden (record stays on disk JSON).
 * @param {string} realPath
 * @param {{ statSync: typeof statSync }} fs
 */
function fileView(realPath, fs) {
  const path = str(realPath).trim()
  if (!path) return null
  try {
    const info = fs.statSync(path)
    if (!info.isFile() && !info.isDirectory()) return null
    const name = basename(path.replace(/\/+$/, '')) || path
    const ext = extOf(name)
    const kind = info.isDirectory() ? 'directory' : bucketOf(ext)
    return {
      real_path: path,
      original_name: name,
      kind,
      size: info.isFile() ? Number(info.size) || 0 : null,
      visible: true,
    }
  } catch {
    return null
  }
}

/**
 * @param {{
 *   id: string,
 *   name: string,
 *   handle: string,
 *   type: string,
 *   description: string,
 *   tags: string[],
 *   files: { id: string, real_path: string, original_name?: string }[],
 *   cover_file_id: string | null,
 *   source: string,
 *   created_at: string,
 *   updated_at: string,
 * }} asset
 * @param {{ statSync: typeof statSync }} fs
 */
function viewOf(asset, fs) {
  const visibleFiles = []
  for (const file of asset.files) {
    const live = fileView(file.real_path, fs)
    if (!live) continue
    visibleFiles.push({
      id: file.id,
      ...live,
    })
  }
  const cover = visibleFiles.find((row) => row.id === asset.cover_file_id)
    ?? visibleFiles.find((row) => row.kind === 'image')
    ?? visibleFiles[0]
    ?? null
  return {
    ...asset,
    files: visibleFiles,
    cover_file_id: cover ? cover.id : null,
    cover: cover,
    missing_file_count: asset.files.length - visibleFiles.length,
    cite: citeOf(asset.name, asset.type),
  }
}

/**
 * @param {string} type
 */
export function typeCiteLabel(type) {
  return TYPE_CITE[type] || TYPE_CITE.custom
}

/**
 * @param {string} name
 * @param {string} type
 */
export function citeOf(name, type) {
  return `@${typeCiteLabel(type)}/${name}`
}

/**
 * @param {unknown[]} files
 * @param {{ statSync: typeof statSync, accessSync: typeof accessSync, constants: typeof constants }} fs
 * @param {{ requireExisting?: boolean }} [opts]
 */
function normalizeFiles(files, fs, opts = {}) {
  if (files == null) return []
  if (!Array.isArray(files)) throw new AssetsError('files-invalid', 'files must be an array')
  const out = []
  const seen = new Set()
  for (const item of files) {
    const path = typeof item === 'string' ? item.trim() : str(item?.real_path ?? item?.path).trim()
    if (!path) continue
    if (seen.has(path)) continue
    seen.add(path)
    const statusFile = statStatus(path, 'file', { stat: (p) => fs.statSync(p) })
    const statusDir = statStatus(path, 'directory', { stat: (p) => fs.statSync(p) })
    const exists = statusFile === 'ok' || statusDir === 'ok'
    if (!exists) {
      // Spec: missing paths are refused as files, the asset itself can still be created.
      if (opts.requireExisting) throw new AssetsError('path-not-found', 'path does not exist')
      continue
    }
    try {
      fs.accessSync(path, fs.constants.R_OK)
    } catch {
      if (opts.requireExisting) throw new AssetsError('path-denied', 'path is not readable')
      continue
    }
    const name = typeof item === 'object' && item ? str(item.original_name) : ''
    out.push({
      id: newRecordId('fil'),
      real_path: path,
      original_name: name || basename(path.replace(/\/+$/, '')) || path,
    })
  }
  return out
}

/**
 * @param {{
 *   paths?: { libraryFile: string, mappingsFile?: string },
 *   fs?: Partial<typeof DEFAULT_FS>,
 *   migrateFrom?: { list?: Function },
 * }} [opts]
 */
export function createLibraryStore(opts = {}) {
  const fs = { ...DEFAULT_FS, ...(opts.fs ?? {}) }
  const paths = opts.paths ?? {}

  function loadState() {
    try {
      const raw = JSON.parse(fs.readFileSync(paths.libraryFile, 'utf8'))
      if (raw && typeof raw === 'object' && Array.isArray(raw.assets)) {
        const assets = raw.assets.filter((row) => row && typeof row === 'object' && typeof row.id === 'string' && typeof row.name === 'string')
        return {
          schema: 2,
          revision: Number(raw.revision) || 0,
          migrated_mappings: Boolean(raw.migrated_mappings),
          assets: assets.map(hydrateAsset),
        }
      }
    } catch {
      // fall through
    }
    return { schema: 2, revision: 0, migrated_mappings: false, assets: [] }
  }

  /**
   * @param {any} row
   */
  function hydrateAsset(row) {
    const name = str(row.name)
    const type = TYPE_SET.has(row.type) ? row.type : 'custom'
    const files = Array.isArray(row.files)
      ? row.files.filter((file) => file && typeof file.real_path === 'string').map((file) => ({
          id: typeof file.id === 'string' ? file.id : newRecordId('fil'),
          real_path: file.real_path,
          original_name: str(file.original_name) || basename(file.real_path),
        }))
      : []
    return {
      id: row.id,
      name,
      handle: str(row.handle) || handleOf(name),
      type,
      description: str(row.description),
      tags: Array.isArray(row.tags) ? row.tags.filter((tag) => typeof tag === 'string') : [],
      files,
      cover_file_id: typeof row.cover_file_id === 'string' ? row.cover_file_id : null,
      source: str(row.source) || 'manual',
      created_at: str(row.created_at) || new Date().toISOString(),
      updated_at: str(row.updated_at) || str(row.created_at) || new Date().toISOString(),
    }
  }

  let state = loadState()

  function persist() {
    atomicWrite(fs, paths.libraryFile, `${JSON.stringify({
      schema: 2,
      revision: state.revision,
      migrated_mappings: state.migrated_mappings,
      assets: state.assets,
    }, null, 2)}\n`)
  }

  /**
   * One-shot: each v0.1 mapping becomes a custom asset pointing at the same path.
   * @param {{ list: Function }} mappings
   */
  function migrateMappings(mappings) {
    if (state.migrated_mappings) return { migrated: 0 }
    const rows = typeof mappings?.list === 'function' ? mappings.list() : []
    let count = 0
    for (const mapping of rows) {
      if (!mapping || typeof mapping.id !== 'string') continue
      const already = state.assets.some((asset) => asset.source === 'migrated-mapping' && asset.id === `ast_${mapping.id.replace(/^map_/, '')}`)
      if (already) continue
      const name = str(mapping.display_name) || basename(str(mapping.real_path)) || mapping.id
      let uniqueName = name
      let suffix = 2
      while (state.assets.some((asset) => asset.handle === handleOf(uniqueName))) {
        uniqueName = `${name} (${suffix})`
        suffix += 1
      }
      const now = new Date().toISOString()
      const path = str(mapping.real_path)
      state.assets.push({
        id: newRecordId('ast'),
        name: uniqueName,
        handle: handleOf(uniqueName),
        type: 'custom',
        description: '',
        tags: [],
        files: path
          ? [{ id: newRecordId('fil'), real_path: path, original_name: basename(path.replace(/\/+$/, '')) || path }]
          : [],
        cover_file_id: null,
        source: 'migrated-mapping',
        created_at: str(mapping.created_at) || now,
        updated_at: now,
      })
      count += 1
    }
    state.migrated_mappings = true
    state.revision += 1
    persist()
    return { migrated: count }
  }

  function list(filter = {}) {
    const type = str(filter.type).trim()
    const query = str(filter.query).trim().toLowerCase()
    let rows = state.assets.map((asset) => viewOf(asset, fs))
    if (type && TYPE_SET.has(type)) rows = rows.filter((row) => row.type === type)
    if (query) {
      rows = rows.filter((row) => {
        const hay = `${row.name}\n${row.handle}\n${row.description}\n${row.tags.join('\n')}`.toLowerCase()
        return hay.includes(query)
      })
    }
    rows.sort((a, b) => String(b.updated_at).localeCompare(String(a.updated_at)))
    return rows
  }

  /**
   * @param {string} idOrHandle
   */
  function get(idOrHandle) {
    const key = str(idOrHandle)
    const found = state.assets.find((asset) => asset.id === key || asset.handle === key)
    return found ? { ...found, files: found.files.map((file) => ({ ...file })) } : null
  }

  /**
   * @param {string} idOrHandle
   */
  function getView(idOrHandle) {
    const found = get(idOrHandle)
    return found ? viewOf(found, fs) : null
  }

  /**
   * @param {{ name: unknown, type?: unknown, description?: unknown, tags?: unknown, files?: unknown, source?: string }} input
   */
  function add(input) {
    const name = normalizeName(input?.name)
    const handle = handleOf(name)
    if (state.assets.some((asset) => asset.handle === handle)) {
      throw new AssetsError('name-conflict', 'an asset with this name already exists')
    }
    const type = normalizeType(input?.type)
    const description = normalizeDescription(input?.description)
    const tags = normalizeTags(input?.tags)
    const files = normalizeFiles(input?.files, fs, { requireExisting: false })
    const now = new Date().toISOString()
    const asset = {
      id: newRecordId('ast'),
      name,
      handle,
      type,
      description,
      tags,
      files,
      cover_file_id: files[0]?.id ?? null,
      source: str(input?.source) || 'manual',
      created_at: now,
      updated_at: now,
    }
    state.assets.push(asset)
    state.revision += 1
    persist()
    return viewOf(asset, fs)
  }

  /**
   * @param {string} id
   * @param {{ name?: unknown, type?: unknown, description?: unknown, tags?: unknown, files?: unknown }} patch
   */
  function update(id, patch) {
    const found = state.assets.find((asset) => asset.id === id)
    if (!found) throw new AssetsError('asset-not-found', 'asset not found')
    if (patch && Object.prototype.hasOwnProperty.call(patch, 'name')) {
      const name = normalizeName(patch.name)
      const handle = handleOf(name)
      if (handle !== found.handle && state.assets.some((asset) => asset.handle === handle)) {
        throw new AssetsError('name-conflict', 'an asset with this name already exists')
      }
      found.name = name
      found.handle = handle
    }
    if (patch && Object.prototype.hasOwnProperty.call(patch, 'type')) {
      found.type = normalizeType(patch.type)
    }
    if (patch && Object.prototype.hasOwnProperty.call(patch, 'description')) {
      found.description = normalizeDescription(patch.description)
    }
    if (patch && Object.prototype.hasOwnProperty.call(patch, 'tags')) {
      found.tags = normalizeTags(patch.tags)
    }
    if (patch && Object.prototype.hasOwnProperty.call(patch, 'files')) {
      found.files = normalizeFiles(patch.files, fs, { requireExisting: false })
      found.cover_file_id = found.files[0]?.id ?? null
    }
    found.updated_at = new Date().toISOString()
    state.revision += 1
    persist()
    return viewOf(found, fs)
  }

  /**
   * Delete only the JSON record. Never unlinks real_path.
   * @param {string} id
   */
  function remove(id) {
    const index = state.assets.findIndex((asset) => asset.id === id)
    if (index < 0) throw new AssetsError('asset-not-found', 'asset not found')
    state.assets.splice(index, 1)
    state.revision += 1
    persist()
  }

  function revision() {
    return state.revision
  }

  /**
   * Keep a drill-down inside one stored file ref. Same escape rules as mapping
   * scan: lexical resolve + realpath must stay under the file root.
   * @param {string} rootPath
   * @param {string} subPath
   */
  function resolveFileSubPath(rootPath, subPath) {
    const cleaned = String(subPath ?? '').replace(/^\/+/, '')
    if (cleaned === '') return rootPath
    let rootReal
    try {
      rootReal = fs.realpathSync ? fs.realpathSync(rootPath) : resolve(rootPath)
    } catch {
      throw new AssetsError('path-not-found', 'file root does not exist')
    }
    const resolved = resolve(rootReal, cleaned)
    if (resolved !== rootReal && !resolved.startsWith(rootReal + sep)) {
      throw new AssetsError('path-denied', 'sub path escapes the file root')
    }
    let real
    try {
      real = fs.realpathSync ? fs.realpathSync(resolved) : resolved
    } catch {
      throw new AssetsError('path-not-found', 'sub path does not exist')
    }
    if (real !== rootReal && !real.startsWith(rootReal + sep)) {
      throw new AssetsError('path-denied', 'sub path escapes the file root')
    }
    return real
  }

  /**
   * One-layer listing for an asset file ref. Directories are not flattened.
   * @param {string} assetId
   * @param {string} fileId
   * @param {string} [subPath]
   */
  function listFileEntries(assetId, fileId, subPath = '') {
    const asset = get(assetId)
    if (!asset) throw new AssetsError('asset-not-found', 'asset not found')
    const file = asset.files.find((row) => row.id === fileId)
    if (!file) throw new AssetsError('path-not-found', 'asset file not found')
    const view = fileView(file.real_path, fs)
    if (!view) throw new AssetsError('path-not-found', 'path does not exist')
    if (view.kind !== 'directory') {
      if (String(subPath ?? '') !== '') {
        throw new AssetsError('path-not-dir', 'file refs have no sub directories')
      }
      return { file: { id: file.id, ...view }, path: '', entries: scanFile(file.real_path, { stat: (p) => fs.statSync(p) }) }
    }
    const target = resolveFileSubPath(file.real_path, subPath)
    const prefix = String(subPath ?? '').replace(/^\/+|\/+$/g, '')
    return {
      file: { id: file.id, ...view },
      path: prefix,
      entries: scanDir(target, { prefix }, { readdir: (p) => fs.readdirSync(p), stat: (p) => fs.statSync(p) }),
    }
  }

  /**
   * Resolve an in-library media file for read-only preview. Directories and
   * unknown types are refused — never streams a user path blindly.
   * @param {string} assetId
   * @param {string} fileId
   * @param {string} [subPath]
   * @returns {{ absolutePath: string, mime: string, size: number }}
   */
  function resolvePreview(assetId, fileId, subPath = '') {
    const asset = get(assetId)
    if (!asset) throw new AssetsError('asset-not-found', 'asset not found')
    const file = asset.files.find((row) => row.id === fileId)
    if (!file) throw new AssetsError('path-not-found', 'asset file not found')
    const view = fileView(file.real_path, fs)
    if (!view) throw new AssetsError('path-not-found', 'path does not exist')
    let absolutePath = file.real_path
    if (view.kind === 'directory') {
      const cleaned = String(subPath ?? '').replace(/^\/+/, '')
      if (cleaned === '') throw new AssetsError('path-not-dir', 'folders cannot be previewed')
      absolutePath = resolveFileSubPath(file.real_path, cleaned)
    } else if (String(subPath ?? '') !== '') {
      throw new AssetsError('path-not-dir', 'file refs have no sub directories')
    }
    let info
    try {
      info = fs.statSync(absolutePath)
    } catch {
      throw new AssetsError('path-not-found', 'path does not exist')
    }
    if (!info.isFile()) throw new AssetsError('path-not-dir', 'preview target is not a file')
    const mime = previewMimeOf(basename(absolutePath.replace(/\/+$/, '')))
    if (!mime) throw new AssetsError('path-unsupported', 'preview only supports image and video')
    return { absolutePath, mime, size: Number(info.size) || 0 }
  }

  return { list, get, getView, add, update, remove, migrateMappings, revision, listFileEntries, resolvePreview }
}
