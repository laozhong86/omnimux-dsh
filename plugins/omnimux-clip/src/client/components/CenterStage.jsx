import { useEffect, useRef } from 'react'
import {
  IconPauseOutline16,
  IconPlayOutline16,
  IconStopFill16,
} from '@deepseek-ai/dsh-client-ui-primitives'
import { IconButton } from 'dsh-ui-kit'
import { timelineStore, useTimelineStore } from '../store/useTimelineStore.js'
import { formatTimecode } from '../store/timelineTypes.js'
import { aspectCss, drawFrame } from '../engine/previewRenderer.js'

/**
 * Preview viewport + transport. Playhead-driven Canvas 2D compositor.
 */
export function CenterStage() {
  const canvasRef = useRef(null)
  const playheadMs = useTimelineStore((s) => s.playheadMs)
  const isPlaying = useTimelineStore((s) => s.isPlaying)
  const schema = useTimelineStore((s) => s.schema)
  const durationMs = schema.canvasConfig.durationMs || 0
  const aspectRatio = schema.canvasConfig.aspectRatio || '16:9'

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined
    const ctx = canvas.getContext('2d')
    if (!ctx) return undefined
    canvas.width = schema.canvasConfig.width || 1920
    canvas.height = schema.canvasConfig.height || 1080
    drawFrame(ctx, schema, playheadMs, {
      width: canvas.width,
      height: canvas.height,
    }).catch(() => {})
    return undefined
  }, [playheadMs, schema])

  useEffect(() => {
    if (!isPlaying) return undefined
    let frameId = 0
    let last = performance.now()
    const tick = (now) => {
      const delta = now - last
      last = now
      const next = timelineStore.getState().playheadMs + delta
      const total = timelineStore.getState().schema.canvasConfig.durationMs || 0
      if (next >= total) {
        timelineStore.setPlayhead(total)
        timelineStore.setPlaying(false)
        return
      }
      timelineStore.setPlayhead(next)
      frameId = requestAnimationFrame(tick)
    }
    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [isPlaying])

  return (
    <section className="omx-clip-stage">
      <div
        className="omx-clip-stage__viewport"
        style={{ '--clip-aspect': aspectCss(aspectRatio) }}
      >
        <canvas ref={canvasRef} className="omx-clip-stage__canvas" />
      </div>
      <div className="omx-clip-transport">
        <IconButton
          variant="ghost"
          size="sm"
          aria-label="跳到起点"
          title="跳到起点"
          onClick={() => timelineStore.setPlayhead(0)}
        >
          <IconStopFill16 size={16} />
        </IconButton>
        <IconButton
          variant="secondary"
          size="sm"
          aria-label={isPlaying ? '暂停' : '播放'}
          title={isPlaying ? '暂停' : '播放'}
          onClick={() => timelineStore.togglePlaying()}
        >
          {isPlaying ? <IconPauseOutline16 size={16} /> : <IconPlayOutline16 size={16} />}
        </IconButton>
        <IconButton
          variant="ghost"
          size="sm"
          aria-label="跳到终点"
          title="跳到终点"
          onClick={() => timelineStore.setPlayhead(durationMs)}
        >
          <IconStopFill16 size={16} />
        </IconButton>
        <span className="omx-clip-timecode">
          {formatTimecode(playheadMs)} / {formatTimecode(durationMs)}
        </span>
      </div>
    </section>
  )
}
