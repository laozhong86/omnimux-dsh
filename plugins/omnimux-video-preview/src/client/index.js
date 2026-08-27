import React from 'react'
import { VideoPlayer } from './VideoPlayer.js'

export const name = 'omnimux-video-preview'
export const inject = []

function IconVideo({ size = 16 }) {
  return React.createElement(
    'svg',
    {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    },
    React.createElement('polygon', { points: '23 7 16 12 23 17 23 7' }),
    React.createElement('rect', {
      x: 1,
      y: 5,
      width: 15,
      height: 14,
      rx: 2,
      ry: 2,
    })
  )
}

/**
 * Client entry point for omnimux-video-preview.
 */
export function apply(ctx) {
  if (typeof ctx.inject !== 'function') return

  ctx.inject(['betterSidebar'], (inner) => {
    const sidebar = inner.betterSidebar ?? inner.get?.('betterSidebar')
    if (!sidebar || typeof sidebar.registerFileViewer !== 'function') return

    const descriptor = {
      id: 'omnimux-video-preview',
      title: '视频',
      icon: (size) => React.createElement(IconVideo, { size }),
      exts: [
        'mp4',
        'webm',
        'mov',
        'mkv',
        'avi',
        'ogg',
        'ogv',
        'm4v',
        'flv',
        'wmv',
        'ts',
        'mp3',
        'wav',
        'm4a',
        'aac',
      ],
      priority: 20,
      fetchStrategy: 'mediaUrl',
      component: (props) => React.createElement(VideoPlayer, props),
    }

    const unregister = sidebar.registerFileViewer(descriptor)

    const effectTarget = typeof inner.effect === 'function' ? inner : ctx
    if (typeof effectTarget.effect === 'function') {
      effectTarget.effect(
        () => () => {
          try {
            unregister()
          } catch {
            // already disposed
          }
        },
        'omnimux-video-preview: file-viewer'
      )
    }
  })
}
