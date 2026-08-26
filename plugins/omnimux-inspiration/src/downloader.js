import { createWriteStream, existsSync, mkdirSync, unlinkSync } from 'node:fs'
import { extname, join } from 'node:path'
import { randomUUID } from 'node:crypto'
import { Readable } from 'node:stream'
import { pipeline } from 'node:stream/promises'

/**
 * Detect extension from URL or mime type.
 * @param {string} url
 * @param {string} [defaultExt]
 */
export function detectExt(url, defaultExt = '.mp4') {
  try {
    const pathname = new URL(url).pathname
    const ext = extname(pathname).toLowerCase()
    if (['.mp4', '.mov', '.webm', '.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
      return ext
    }
  } catch {
    // fallback
  }
  return defaultExt
}

/**
 * Download a remote URL into a target local destination safely.
 * @param {string} url
 * @param {string} destDir
 * @param {{ prefix?: string, ext?: string, fetcher?: typeof fetch }} [opts]
 * @returns {Promise<string>} absolute path of saved file
 */
export async function downloadMedia(url, destDir, opts = {}) {
  if (!existsSync(destDir)) mkdirSync(destDir, { recursive: true })
  const fetcher = opts.fetcher ?? fetch
  const ext = opts.ext || detectExt(url, '.mp4')
  const prefix = opts.prefix || 'insp_'
  const filename = `${prefix}${randomUUID().slice(0, 8)}${ext}`
  const targetPath = join(destDir, filename)
  const tempPath = `${targetPath}.${randomUUID().slice(0, 4)}.tmp`

  const response = await fetcher(url)
  if (!response.ok) {
    throw new Error(`Failed to download media: HTTP ${response.status} from ${url}`)
  }

  try {
    if (response.body && typeof response.body.getReader === 'function') {
      const nodeStream = Readable.fromWeb(/** @type {any} */ (response.body))
      await pipeline(nodeStream, createWriteStream(tempPath))
    } else if (typeof response.arrayBuffer === 'function') {
      const buffer = Buffer.from(await response.arrayBuffer())
      const { writeFileSync } = await import('node:fs')
      writeFileSync(tempPath, buffer)
    } else {
      throw new Error('Unsupported response body for media download')
    }

    const { renameSync } = await import('node:fs')
    renameSync(tempPath, targetPath)
    return targetPath
  } catch (err) {
    if (existsSync(tempPath)) {
      try { unlinkSync(tempPath) } catch {}
    }
    throw err
  }
}
