import { existsSync, statSync } from 'node:fs'
import { extname, resolve } from 'node:path'
import { handleVideoStream, getMimeType } from './stream.js'

export const name = 'omnimux-video-preview'
export const inject = ['tools']

/**
 * Host plugin entry for omnimux-video-preview.
 * Exposes local video streaming route and metadata inspection tool.
 */
export function apply(ctx) {
  // 1. Register tools
  ctx.tools?.register?.({
    name: 'video_preview_info',
    description: 'Probe metadata for a local video file and get local streaming URL.',
    parameters: {
      type: 'object',
      properties: {
        path: { type: 'string', description: 'File path to video' },
      },
      required: ['path'],
    },
    execute: async ({ path: filePath }) => {
      const abs = resolve(filePath)
      if (!existsSync(abs)) throw new Error(`File not found: ${filePath}`)
      const stats = statSync(abs)
      return {
        path: abs,
        size: stats.size,
        mimeType: getMimeType(abs),
        streamUrl: `/omnimux/video-preview/stream?path=${encodeURIComponent(abs)}`,
      }
    },
  })

  // 2. Mount WebServer routes if webServer service is available
  const mountServer = (server) => {
    if (!server) return

    const route = '/omnimux/video-preview/stream'
    const handler = (req, res) => {
      const url = new URL(req.url, 'http://localhost')
      const targetPath = url.searchParams.get('path')
      handleVideoStream(req, res, targetPath)
    }

    if (typeof server.get === 'function') {
      server.get(route, (c) => {
        const targetPath = c.req.query('path')
        const nodeReq = c.req.raw ?? c.env?.incoming
        const nodeRes = c.res?.raw ?? c.env?.outgoing
        if (nodeReq && nodeRes) {
          handleVideoStream(nodeReq, nodeRes, targetPath)
        } else {
          return c.text('Node stream bridge unavailable', 500)
        }
      })
    } else if (typeof server.use === 'function') {
      server.use((req, res, next) => {
        if (req.url && req.url.startsWith(route)) {
          handler(req, res)
        } else if (typeof next === 'function') {
          next()
        }
      })
    }
  }

  if (typeof ctx.inject === 'function') {
    ctx.inject(['webServer'], (inner) => {
      const s = inner.webServer ?? inner.get?.('webServer')
      if (s) mountServer(s)
    })
  } else if (ctx.webServer) {
    mountServer(ctx.webServer)
  }
}
