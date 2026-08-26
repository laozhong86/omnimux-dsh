import { createReadStream, existsSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { downloadMedia } from './downloader.js'
import { analyzeInspirationVideo } from './analyzer.js'
import { getCanonicalItemKey, isSameSocialContent, normalizeUrl } from './url-normalizer.js'

export const LOCAL_PREFIX = '/omnimux/inspiration/local'

// In-flight concurrency lock to prevent duplicate simultaneous imports
const importLocks = new Set()

/**
 * Format any thrown error / object safely without [object Object].
 * @param {unknown} err
 * @returns {string}
 */
export function formatErrorMessage(err) {
  if (!err) return '未知错误'
  if (typeof err === 'string') return err
  if (typeof err === 'object') {
    const obj = /** @type {Record<string, unknown>} */ (err)
    const code = typeof obj.code === 'string' ? obj.code : ''
    const msg = typeof obj.message === 'string' ? obj.message : (typeof obj.error === 'string' ? obj.error : '')
    if (code === 'omnimux-unconfigured') {
      return 'OmniMux 未配置 API Key，请在 设置 → 个人资料 或凭据库中配置 OMNIMUX_API_KEY'
    }
    if (code === 'needs-omnimux') {
      return '需要登录 OmniMux 账号，请在 设置 → 个人资料 中登录'
    }
    if (code && msg) return `[${code}] ${msg}`
    if (msg) return msg
    if (code) return `[${code}]`
    try {
      const s = JSON.stringify(err)
      if (s && s !== '{}') return s
    } catch {}
  }
  return String(err)
}

/**
 * Detect social platform from URL.
 * @param {string} url
 */
export function detectPlatformFromUrl(url) {
  if (!url || typeof url !== 'string') return 'unknown'
  const lower = url.toLowerCase()
  if (lower.includes('tiktok.com')) return 'tiktok'
  if (lower.includes('instagram.com')) return 'instagram'
  if (lower.includes('youtube.com') || lower.includes('youtu.be')) return 'youtube'
  if (lower.includes('x.com') || lower.includes('twitter.com')) return 'x'
  return 'unknown'
}

/**
 * Read request body safely.
 * @param {import('node:http').IncomingMessage} req
 */
export async function readJsonBody(req) {
  return new Promise((resolve) => {
    let raw = ''
    req.setEncoding('utf8')
    req.on('data', (chunk) => {
      raw += chunk
      if (raw.length > 2 * 1024 * 1024) {
        resolve(null)
      }
    })
    req.on('end', () => {
      if (!raw.trim()) return resolve({})
      try {
        resolve(JSON.parse(raw))
      } catch {
        resolve(null)
      }
    })
    req.on('error', () => resolve(null))
  })
}

/**
 * Send JSON HTTP response.
 * @param {import('node:http').ServerResponse} res
 * @param {number} status
 * @param {object} payload
 */
export function sendJson(res, status, payload) {
  const json = JSON.stringify(payload)
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(json),
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE, OPTIONS',
  })
  res.end(json)
}

/**
 * Create dispatcher for inspiration local endpoints.
 * @param {{
 *   localStore: ReturnType<typeof import('./local-store.js').createLocalStore>,
 *   socialFetcher?: (args: { platform: string, capability: string, url: string }) => Promise<any>,
 *   videoAnalyzeTool?: { execute: (args: object) => Promise<any> },
 *   fetcher?: typeof fetch,
 * }} deps
 */
export function createLocalInspirationDispatcher(deps) {
  const store = deps.localStore
  const paths = store.paths
  const fetcher = deps.fetcher ?? fetch

  /**
   * Main dispatch entry point.
   * @param {{ method?: string, url?: string, body?: any, headers?: Record<string, string> }} req
   */
  async function dispatch(req) {
    const method = (req.method || 'GET').toUpperCase()
    const rawPath = req.url || LOCAL_PREFIX
    const url = new URL(rawPath, 'http://127.0.0.1')
    const path = url.pathname

    try {
      // 1. List local items
      if (method === 'GET' && (path === LOCAL_PREFIX || path === `${LOCAL_PREFIX}/`)) {
        const q = url.searchParams.get('q') || undefined
        const platform = url.searchParams.get('platform') || undefined
        const type = url.searchParams.get('type') || undefined
        const tag = url.searchParams.get('tag') || undefined
        const isFavorite = url.searchParams.get('is_favorite') || undefined
        const sort = url.searchParams.get('sort') || undefined
        const page = parseInt(url.searchParams.get('page') || '1', 10)
        const pageSize = parseInt(url.searchParams.get('page_size') || '20', 10)

        const result = store.list({
          q,
          platform,
          type,
          tag,
          is_favorite: isFavorite,
          sort,
          page,
          pageSize,
        })
        return { status: 200, body: { data: result } }
      }

      // 2. Create raw item manually
      if (method === 'POST' && (path === LOCAL_PREFIX || path === `${LOCAL_PREFIX}/`)) {
        const body = req.body || {}
        if (!body.title) return { status: 400, body: { error: 'title is required' } }
        const created = store.add(body)
        return { status: 201, body: { data: created } }
      }

      // 3. Import from URL (Scrape + Download Media + Trigger AI Analysis)
      if (method === 'POST' && path === `${LOCAL_PREFIX}/import-url`) {
        const body = req.body || {}
        const rawUrl = String(body.url || '').trim()
        if (!rawUrl) return { status: 400, body: { error: 'url is required' } }

        const platform = body.platform || detectPlatformFromUrl(rawUrl)
        const autoAnalyze = body.auto_analyze !== false
        const customTags = Array.isArray(body.tags) ? body.tags : []
        const force = Boolean(body.force)

        // 1. Pre-check: Fast duplicate check against local library
        const existing = store.findByUrl(rawUrl)
        if (existing && !force) {
          if (body.return_existing) {
            return { status: 200, body: { data: existing, existing: true, is_duplicate: true } }
          }
          return {
            status: 409,
            body: {
              error: '该灵感素材已在库中，请勿重复导入',
              data: existing,
              is_duplicate: true,
            },
          }
        }

        // 2. Concurrency Lock check to prevent identical concurrent downloads
        const canonicalKey = getCanonicalItemKey(rawUrl).key || normalizeUrl(rawUrl) || rawUrl
        if (importLocks.has(canonicalKey)) {
          return {
            status: 429,
            body: { error: '该灵感正在解析导入中，请勿重复提交' },
          }
        }

        importLocks.add(canonicalKey)

        try {
          // 3. Fetch social data through OmniMux social service
          if (!deps.socialFetcher) {
            return { status: 500, body: { error: '未注入 OmniMux 社媒解析能力 (socialFetcher 未就绪)' } }
          }

          let socialMeta = { title: rawUrl, text: '', cover_url: '', video_url: '', images: [], author: {}, stats: {} }
          try {
            const capability = platform === 'x' ? 'tweet' : (platform === 'instagram' ? 'post' : 'video')
            const fetched = await deps.socialFetcher({ platform, capability, url: rawUrl })
            if (!fetched || !fetched.data) {
              return { status: 502, body: { error: 'OmniMux 社媒解析接口未返回有效数据，请检查链接或网络' } }
            }
            const d = fetched.data
            socialMeta.title = d.title || d.desc || d.text || rawUrl
            socialMeta.text = d.text || d.desc || d.content || ''
            socialMeta.cover_url = d.cover_url || d.cover || d.thumbnail || d.thumbnail_url || d.origin_cover || ''
            socialMeta.video_url = d.video_url || d.video || d.play_url || d.play || d.download_url || (Array.isArray(d.videos) ? d.videos[0] : '')
            socialMeta.images = Array.isArray(d.images) ? d.images : []
            socialMeta.author = d.author || { name: d.author_name, handle: d.author_handle }
            socialMeta.stats = d.stats || { likes: d.likes || d.digg_count, comments: d.comments || d.comment_count, shares: d.shares || d.share_count }

            // Secondary duplicate check if API returned a canonical permanent URL
            const resolvedUrl = d.url || d.canonical_url
            if (resolvedUrl && resolvedUrl !== rawUrl && !force) {
              const secondExisting = store.findByUrl(resolvedUrl)
              if (secondExisting) {
                if (body.return_existing) {
                  return { status: 200, body: { data: secondExisting, existing: true, is_duplicate: true } }
                }
                return {
                  status: 409,
                  body: {
                    error: '该灵感素材已在库中，请勿重复导入',
                    data: secondExisting,
                    is_duplicate: true,
                  },
                }
              }
            }
          } catch (fetchErr) {
            return {
              status: 502,
              body: { error: `OmniMux 社媒解析调用失败: ${formatErrorMessage(fetchErr)}` },
            }
          }

          // 4. Strict Ingestion Rule: Video URL is mandatory for video platforms
          const rawVideoUrl = socialMeta.video_url
          if (!rawVideoUrl || !/^https?:\/\//i.test(rawVideoUrl)) {
            return {
              status: 422,
              body: { error: '社媒解析未提取到有效无水印视频直链，无法完成视频下载入库' },
            }
          }

          let localCoverPath = ''
          let localVideoPath = ''
          const localPaths = {}

          // Download video to local vault (mandatory)
          try {
            const savedVideo = await downloadMedia(rawVideoUrl, paths.videosDir, { prefix: 'video_', fetcher })
            localVideoPath = savedVideo
            localPaths.video = savedVideo
          } catch (downErr) {
            return {
              status: 502,
              body: { error: `视频素材下载落盘失败: ${formatErrorMessage(downErr)}` },
            }
          }

          // Download cover image to local vault (optional/best-effort)
          if (socialMeta.cover_url && /^https?:\/\//i.test(socialMeta.cover_url)) {
            try {
              const savedCover = await downloadMedia(socialMeta.cover_url, paths.coversDir, { prefix: 'cover_', fetcher })
              localCoverPath = savedCover
              localPaths.cover = savedCover
            } catch {}
          }

          // 5. Multimodal Video AI Deconstruction (mandatory when autoAnalyze is on)
          let deconstruction = null
          if (autoAnalyze && localVideoPath) {
            const analysisResult = await analyzeInspirationVideo({
              videoPath: localVideoPath,
              title: socialMeta.title,
              content: socialMeta.text,
              tags: customTags,
              platform,
              videoAnalyzeTool: deps.videoAnalyzeTool,
            })
            deconstruction = analysisResult.deconstruction
          }

          // 6. Store complete record
          const record = store.add({
            title: socialMeta.title,
            content: socialMeta.text,
            type: 'video',
            source_platform: platform,
            source_url: rawUrl,
            cover_url: localCoverPath ? `/omnimux/inspiration/local/media/covers/${localCoverPath.split('/').pop()}` : socialMeta.cover_url,
            media_urls: [`/omnimux/inspiration/local/media/videos/${localVideoPath.split('/').pop()}`],
            local_paths: localPaths,
            tags: customTags,
            author: socialMeta.author,
            stats: socialMeta.stats,
            deconstruction,
          })

          return { status: 200, body: { data: record } }
        } finally {
          importLocks.delete(canonicalKey)
        }
      }

      // 4. Trigger / Re-run AI Deconstruction on existing item
      if (method === 'POST' && path.startsWith(`${LOCAL_PREFIX}/`) && path.endsWith('/analyze')) {
        const id = decodeURIComponent(path.slice(`${LOCAL_PREFIX}/`.length, -'/analyze'.length))
        const item = store.get(id)
        if (!item) return { status: 404, body: { error: 'not found' } }

        let videoPath = item.local_paths?.video
        // If no local video file yet, try downloading via OmniMux social data
        if (!videoPath && item.source_url && deps.socialFetcher) {
          try {
            const platform = item.source_platform || detectPlatformFromUrl(item.source_url)
            const capability = platform === 'x' ? 'tweet' : (platform === 'instagram' ? 'post' : 'video')
            const fetched = await deps.socialFetcher({ platform, capability, url: item.source_url })
            const vUrl = fetched?.data?.video_url || fetched?.data?.video || fetched?.data?.play_url || fetched?.data?.play
            if (vUrl && /^https?:\/\//i.test(vUrl)) {
              videoPath = await downloadMedia(vUrl, paths.videosDir, { prefix: 'video_', fetcher })
              item.local_paths = { ...(item.local_paths || {}), video: videoPath }
            }
          } catch (downErr) {
            return {
              status: 502,
              body: { error: `重新下载视频失败: ${downErr instanceof Error ? downErr.message : String(downErr)}` },
            }
          }
        }

        if (!videoPath || !existsSync(videoPath)) {
          return {
            status: 422,
            body: { error: '未找到本地视频文件，请重新导入以完成视频下载与解析' },
          }
        }

        const analysisResult = await analyzeInspirationVideo({
          videoPath,
          title: item.title,
          content: item.content,
          tags: item.tags,
          platform: item.source_platform,
          videoAnalyzeTool: deps.videoAnalyzeTool,
        })

        if (!analysisResult.deconstruction) {
          return {
            status: 500,
            body: { error: analysisResult.error || 'AI 视频拆解失败，请确保大模型视觉分析服务可用' },
          }
        }

        const updated = store.update(id, {
          deconstruction: analysisResult.deconstruction,
          local_paths: item.local_paths,
        })

        return { status: 200, body: { data: updated } }
      }

      // 5. Batch Delete operations: POST / DELETE /omnimux/inspiration/local/batch-delete
      if ((method === 'POST' || method === 'DELETE') && path === `${LOCAL_PREFIX}/batch-delete`) {
        const body = req.body || {}
        const ids = Array.isArray(body.ids) ? body.ids : []
        if (ids.length === 0) return { status: 400, body: { error: 'ids array is required' } }
        const result = await store.deleteBatch(ids)
        return { status: 200, body: { data: result } }
      }

      // 6. Single item operations: GET / PATCH / DELETE
      if (path.startsWith(`${LOCAL_PREFIX}/`) && path !== LOCAL_PREFIX) {
        const id = decodeURIComponent(path.slice(`${LOCAL_PREFIX}/`.length))
        if (!id || id.includes('/')) return { status: 404, body: { error: 'not found' } }

        if (method === 'GET') {
          const item = store.get(id)
          if (!item) return { status: 404, body: { error: 'not found' } }
          return { status: 200, body: { data: item } }
        }

        if (method === 'PATCH') {
          const body = req.body || {}
          const updated = store.update(id, body)
          return { status: 200, body: { data: updated } }
        }

        if (method === 'DELETE') {
          const removed = await store.delete(id)
          return { status: 200, body: { data: removed } }
        }
      }
    } catch (error) {
      const status = error.status || 500
      return { status, body: { error: error.message || String(error) } }
    }

    return { status: 404, body: { error: 'not found' } }
  }

  /**
   * Stream local media file (supports video seeking / range requests).
   * @param {{ method?: string, url?: string, headers?: Record<string, string | string[] | undefined> }} req
   * @param {import('node:http').ServerResponse} res
   */
  async function streamLocalMedia(req, res) {
    const url = new URL(req.url || LOCAL_PREFIX, 'http://127.0.0.1')
    const prefix = `${LOCAL_PREFIX}/media/`
    if (!url.pathname.startsWith(prefix)) {
      sendJson(res, 404, { error: 'not found' })
      return
    }

    const subpath = url.pathname.slice(prefix.length)
    if (!subpath || subpath.includes('..')) {
      sendJson(res, 400, { error: 'invalid path' })
      return
    }

    const filePath = join(paths.mediaDir, subpath)
    if (!existsSync(filePath)) {
      sendJson(res, 404, { error: 'file not found' })
      return
    }

    const stat = statSync(filePath)
    const fileSize = stat.size
    const range = req.headers?.range || req.headers?.Range

    const ext = filePath.split('.').pop()?.toLowerCase()
    let contentType = 'application/octet-stream'
    if (ext === 'mp4') contentType = 'video/mp4'
    else if (ext === 'webm') contentType = 'video/webm'
    else if (ext === 'jpg' || ext === 'jpeg') contentType = 'image/jpeg'
    else if (ext === 'png') contentType = 'image/png'
    else if (ext === 'webp') contentType = 'image/webp'

    if (range && typeof range === 'string') {
      const parts = range.replace(/bytes=/, '').split('-')
      const start = parseInt(parts[0], 10)
      const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1
      const chunksize = (end - start) + 1
      const file = createReadStream(filePath, { start, end })
      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunksize,
        'Content-Type': contentType,
      })
      file.pipe(res)
    } else {
      res.writeHead(200, {
        'Content-Length': fileSize,
        'Content-Type': contentType,
        'Accept-Ranges': 'bytes',
      })
      createReadStream(filePath).pipe(res)
    }
  }

  return {
    dispatch,
    streamLocalMedia,
  }
}
