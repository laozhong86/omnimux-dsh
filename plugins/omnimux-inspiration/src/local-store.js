import { existsSync, mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs'
import { dirname } from 'node:path'
import { randomUUID } from 'node:crypto'
import { resolveInspirationPaths } from './paths.js'
import { getCanonicalItemKey, isSameSocialContent, normalizeUrl } from './url-normalizer.js'
import { moveToTrash } from './trash.js'

export class InspirationError extends Error {
  /**
   * @param {string} code
   * @param {string} message
   * @param {number} [status]
   */
  constructor(code, message, status = 400) {
    super(message)
    this.name = 'InspirationError'
    this.code = code
    this.status = status
  }
}

/**
 * @typedef {Object} LocalInspirationRecord
 * @property {string} id
 * @property {string} title
 * @property {string} [type] video | image | link
 * @property {string} [source_platform] tiktok | instagram | youtube | x
 * @property {string} [source_url]
 * @property {string} [cover_url] relative host media path or absolute url
 * @property {string[]} [media_urls] relative host media paths or urls
 * @property {Record<string, unknown>} [local_paths]
 * @property {string[]} [tags]
 * @property {boolean} [is_favorite]
 * @property {number} [hot_score]
 * @property {string} [content]
 * @property {Record<string, unknown> | string} [deconstruction] five-dimension breakdown object or markdown
 * @property {Record<string, unknown>} [stats] likes, comments, shares, etc.
 * @property {Record<string, unknown>} [author] name, handle, avatar
 * @property {string} created_at
 * @property {string} updated_at
 */

/**
 * @param {{ paths?: ReturnType<typeof resolveInspirationPaths> }} [opts]
 */
export function createLocalStore(opts = {}) {
  const paths = opts.paths ?? resolveInspirationPaths()

  function ensureDirs() {
    if (!existsSync(paths.dir)) mkdirSync(paths.dir, { recursive: true })
    if (!existsSync(paths.coversDir)) mkdirSync(paths.coversDir, { recursive: true })
    if (!existsSync(paths.videosDir)) mkdirSync(paths.videosDir, { recursive: true })
    if (!existsSync(paths.imagesDir)) mkdirSync(paths.imagesDir, { recursive: true })
  }

  /**
   * @returns {LocalInspirationRecord[]}
   */
  function readAll() {
    if (!existsSync(paths.libraryFile)) return []
    try {
      const raw = readFileSync(paths.libraryFile, 'utf8')
      const parsed = JSON.parse(raw)
      return Array.isArray(parsed.items) ? parsed.items : []
    } catch {
      return []
    }
  }

  /**
   * @param {LocalInspirationRecord[]} items
   */
  function writeAll(items) {
    ensureDirs()
    const tempFile = `${paths.libraryFile}.${randomUUID()}.tmp`
    const payload = JSON.stringify({ version: 1, items, updated_at: new Date().toISOString() }, null, 2)
    writeFileSync(tempFile, payload, 'utf8')
    renameSync(tempFile, paths.libraryFile)
  }

  return {
    paths,

    /**
     * @param {{
     *   q?: string,
     *   type?: string,
     *   platform?: string,
     *   tag?: string,
     *   tags?: string,
     *   is_favorite?: string | boolean,
     *   sort?: string,
     *   page?: number,
     *   page_size?: number
     * }} [query]
     */
    list(query = {}) {
      let items = readAll()

      if (query.q && typeof query.q === 'string') {
        const needle = query.q.toLowerCase().trim()
        items = items.filter((row) => {
          const t = (row.title || '').toLowerCase()
          const c = (row.content || '').toLowerCase()
          const u = (row.source_url || '').toLowerCase()
          const dec = typeof row.deconstruction === 'string'
            ? row.deconstruction.toLowerCase()
            : JSON.stringify(row.deconstruction || {}).toLowerCase()
          const tags = Array.isArray(row.tags) ? row.tags.join(' ').toLowerCase() : ''
          return t.includes(needle) || c.includes(needle) || u.includes(needle) || dec.includes(needle) || tags.includes(needle)
        })
      }

      if (query.type) {
        items = items.filter((row) => row.type === query.type)
      }

      if (query.platform) {
        items = items.filter((row) => row.source_platform === query.platform)
      }

      const matchTag = query.tag || query.tags
      if (matchTag) {
        const expected = String(matchTag).split(',').map((t) => t.trim().toLowerCase()).filter(Boolean)
        if (expected.length > 0) {
          items = items.filter((row) => {
            const current = (row.tags || []).map((t) => t.toLowerCase())
            return expected.some((exp) => current.includes(exp))
          })
        }
      }

      if (query.is_favorite !== undefined && query.is_favorite !== '') {
        const fav = query.is_favorite === true || query.is_favorite === 'true'
        items = items.filter((row) => Boolean(row.is_favorite) === fav)
      }

      const sortMode = query.sort || 'new'
      items.sort((a, b) => {
        if (sortMode === 'fav') {
          if (Boolean(b.is_favorite) !== Boolean(a.is_favorite)) {
            return b.is_favorite ? 1 : -1
          }
        }
        if (sortMode === 'hot') {
          const scoreA = typeof a.hot_score === 'number' ? a.hot_score : 0
          const scoreB = typeof b.hot_score === 'number' ? b.hot_score : 0
          if (scoreB !== scoreA) return scoreB - scoreA
        }
        const timeA = new Date(a.created_at || 0).getTime()
        const timeB = new Date(b.created_at || 0).getTime()
        return timeB - timeA
      })

      const total = items.length
      const page = Math.max(1, Number(query.page) || 1)
      const pageSize = Math.max(1, Math.min(100, Number(query.page_size) || 20))
      const start = (page - 1) * pageSize
      const paginated = items.slice(start, start + pageSize)

      return {
        items: paginated,
        total,
        page,
        page_size: pageSize,
      }
    },

    /**
     * @param {string} id
     */
    get(id) {
      const items = readAll()
      return items.find((item) => item.id === id) || null
    },

    /**
     * Find existing item by URL (supports canonical & query-stripped matching).
     * @param {string} url
     */
    findByUrl(url) {
      if (!url) return null
      const items = readAll()
      return items.find((item) => item.source_url && isSameSocialContent(item.source_url, url)) || null
    },

    /**
     * @param {Partial<LocalInspirationRecord> & { title: string }} record
     * @param {{ allowDuplicate?: boolean }} [opts]
     */
    add(record, opts = {}) {
      const items = readAll()
      if (record.source_url && !opts.allowDuplicate) {
        const existing = items.find((item) => item.source_url && isSameSocialContent(item.source_url, record.source_url))
        if (existing) return existing
      }
      const now = new Date().toISOString()
      const canonical = record.source_url ? getCanonicalItemKey(record.source_url) : null
      /** @type {LocalInspirationRecord} */
      const row = {
        id: record.id || `insp_${randomUUID().slice(0, 8)}`,
        title: record.title || 'Untitled',
        type: record.type || 'video',
        source_platform: record.source_platform || canonical?.platform,
        source_url: record.source_url,
        cover_url: record.cover_url,
        media_urls: record.media_urls || [],
        local_paths: record.local_paths || {},
        tags: Array.isArray(record.tags) ? record.tags : [],
        is_favorite: Boolean(record.is_favorite),
        hot_score: typeof record.hot_score === 'number' ? record.hot_score : 0,
        content: record.content || '',
        deconstruction: record.deconstruction,
        stats: record.stats || {},
        author: record.author || {},
        created_at: record.created_at || now,
        updated_at: now,
      }
      items.unshift(row)
      writeAll(items)
      return row
    },

    /**
     * @param {string} id
     * @param {Partial<LocalInspirationRecord>} patch
     */
    update(id, patch) {
      const items = readAll()
      const index = items.findIndex((item) => item.id === id)
      if (index === -1) throw new InspirationError('not-found', `inspiration ${id} not found`, 404)
      const current = items[index]
      const updated = {
        ...current,
        ...patch,
        id: current.id,
        updated_at: new Date().toISOString(),
      }
      items[index] = updated
      writeAll(items)
      return updated
    },

    /**
     * Delete single item and move its associated media files to the OS system trash.
     * @param {string} id
     */
    async delete(id) {
      const items = readAll()
      const index = items.findIndex((item) => item.id === id)
      if (index === -1) throw new InspirationError('not-found', `inspiration ${id} not found`, 404)
      const [removed] = items.splice(index, 1)

      // Move associated local media files to trash
      if (removed.local_paths) {
        if (removed.local_paths.video) await moveToTrash(String(removed.local_paths.video))
        if (removed.local_paths.cover) await moveToTrash(String(removed.local_paths.cover))
      }

      writeAll(items)
      return removed
    },

    /**
     * Batch delete multiple items and move all their local media files to trash.
     * @param {string[]} ids
     */
    async deleteBatch(ids) {
      if (!Array.isArray(ids) || ids.length === 0) return { deleted: [], count: 0 }
      const idSet = new Set(ids)
      const items = readAll()
      const remaining = []
      const removed = []

      for (const item of items) {
        if (idSet.has(item.id)) {
          removed.push(item)
          if (item.local_paths) {
            if (item.local_paths.video) await moveToTrash(String(item.local_paths.video))
            if (item.local_paths.cover) await moveToTrash(String(item.local_paths.cover))
          }
        } else {
          remaining.push(item)
        }
      }

      writeAll(remaining)
      return { deleted: removed.map((it) => it.id), count: removed.length }
    },

    tags() {
      const items = readAll()
      /** @type {Record<string, number>} */
      const counts = {}
      for (const item of items) {
        for (const tag of item.tags || []) {
          counts[tag] = (counts[tag] || 0) + 1
        }
      }
      return Object.entries(counts).map(([name, count]) => ({ name, count }))
    },
  }
}
