import { useMemo, useRef, useState } from 'react'
import { Button, IconButton } from 'dsh-ui-kit'
import { timelineStore, useTimelineStore } from '../store/useTimelineStore.js'
import { formatTimecode } from '../store/timelineTypes.js'

const TRACK_HEIGHT = 48
const MIN_CLIP_MS = 120

function pxPerMs(zoomLevel) {
  return 0.08 * zoomLevel
}

function ticks(durationMs, zoom) {
  const step = zoom >= 2 ? 500 : zoom >= 1 ? 1000 : 2000
  const out = []
  for (let t = 0; t <= durationMs; t += step) out.push(t)
  return out
}

/**
 * Multi-track timeline: trim / move / split / mute / lock / hide.
 */
export function BottomTimeline() {
  const tracks = useTimelineStore((s) => s.schema.tracks)
  const durationMs = useTimelineStore((s) => s.schema.canvasConfig.durationMs)
  const playheadMs = useTimelineStore((s) => s.playheadMs)
  const zoomLevel = useTimelineStore((s) => s.zoomLevel)
  const selectedClipId = useTimelineStore((s) => s.selectedClipId)
  const bodyRef = useRef(null)
  const [menu, setMenu] = useState(null)
  const scale = pxPerMs(zoomLevel)
  const widthPx = Math.max(640, durationMs * scale)
  const marks = useMemo(() => ticks(durationMs, zoomLevel), [durationMs, zoomLevel])

  function timeFromEvent(event) {
    const scroller = bodyRef.current
    if (!scroller) return 0
    const rect = scroller.getBoundingClientRect()
    const x = event.clientX - rect.left + scroller.scrollLeft
    return Math.max(0, Math.round(x / scale))
  }

  function onRulerPointerDown(event) {
    setMenu(null)
    timelineStore.setPlayhead(timeFromEvent(event))
    const move = (ev) => timelineStore.setPlayhead(timeFromEvent(ev))
    const up = () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
    }
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
  }

  function beginClipDrag(event, clip, edge) {
    event.stopPropagation()
    event.preventDefault()
    setMenu(null)
    timelineStore.selectClip(clip.id, clip.trackId)
    timelineStore.captureHistory()
    const originX = event.clientX
    const originStart = clip.startTimeMs
    const originDuration = clip.durationMs
    const originIn = clip.sourceInMs || 0
    const move = (ev) => {
      const deltaMs = Math.round((ev.clientX - originX) / scale)
      if (edge === 'move') {
        timelineStore.moveClip(clip.id, { startTimeMs: Math.max(0, originStart + deltaMs) }, { record: false })
      } else if (edge === 'start') {
        const nextStart = Math.max(0, originStart + deltaMs)
        const consumed = nextStart - originStart
        const nextDuration = Math.max(MIN_CLIP_MS, originDuration - consumed)
        timelineStore.trimClip(clip.id, {
          startTimeMs: nextStart,
          durationMs: nextDuration,
          sourceInMs: originIn + Math.max(0, consumed) * (clip.speed || 1),
        }, { record: false })
      } else if (edge === 'end') {
        timelineStore.trimClip(clip.id, {
          durationMs: Math.max(MIN_CLIP_MS, originDuration + deltaMs),
        }, { record: false })
      }
    }
    const up = () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
    }
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
  }

  function onClipContext(event, clip) {
    event.preventDefault()
    event.stopPropagation()
    timelineStore.selectClip(clip.id, clip.trackId)
    setMenu({ x: event.clientX, y: event.clientY, clipId: clip.id })
  }

  return (
    <section className="omx-clip-timeline">
      <div className="omx-clip-timeline__heads">
        <div className="omx-clip-timeline__ruler-spacer" />
        {tracks.map((track) => (
          <div key={track.id} className="omx-clip-track-head">
            <span className="omx-clip-track-head__name">{track.name}</span>
            <div className="omx-clip-track-head__ops">
              <IconButton
                variant={track.isMuted ? 'secondary' : 'ghost'}
                size="xs"
                aria-label={track.isMuted ? '取消静音' : '静音'}
                title={track.isMuted ? '取消静音' : '静音'}
                onClick={() => timelineStore.toggleTrackFlag(track.id, 'isMuted')}
              >
                <span className="omx-clip-glyph">{track.isMuted ? 'M' : '♪'}</span>
              </IconButton>
              <IconButton
                variant={track.isLocked ? 'secondary' : 'ghost'}
                size="xs"
                aria-label={track.isLocked ? '解锁' : '锁定'}
                title={track.isLocked ? '解锁' : '锁定'}
                onClick={() => timelineStore.toggleTrackFlag(track.id, 'isLocked')}
              >
                <span className="omx-clip-glyph">{track.isLocked ? 'L' : '○'}</span>
              </IconButton>
              <IconButton
                variant={track.isVisible === false ? 'secondary' : 'ghost'}
                size="xs"
                aria-label={track.isVisible === false ? '显示' : '隐藏'}
                title={track.isVisible === false ? '显示' : '隐藏'}
                onClick={() => timelineStore.toggleTrackFlag(track.id, 'isVisible')}
              >
                <span className="omx-clip-glyph">{track.isVisible === false ? 'H' : '◉'}</span>
              </IconButton>
            </div>
          </div>
        ))}
      </div>
      <div className="omx-clip-timeline__body" ref={bodyRef}>
        <div
          className="omx-clip-timeline__scroll"
          style={{ '--clip-timeline-width': `${widthPx}px`, '--clip-playhead': `${playheadMs * scale}px` }}
        >
          <div className="omx-clip-ruler" onPointerDown={onRulerPointerDown}>
            {marks.map((mark) => (
              <span
                key={mark}
                className="omx-clip-ruler__tick"
                style={{ '--tick-x': `${mark * scale}px` }}
              >
                {formatTimecode(mark).slice(0, 5)}
              </span>
            ))}
          </div>
          {tracks.map((track) => (
            <div
              key={track.id}
              className={`omx-clip-lane${track.isLocked ? ' is-locked' : ''}`}
              onPointerDown={() => {
                setMenu(null)
                timelineStore.selectClip(null, track.id)
              }}
            >
              {track.clips.map((clip) => (
                <div
                  key={clip.id}
                  className={`omx-clip-block omx-clip-block--${clip.mediaType}${selectedClipId === clip.id ? ' is-selected' : ''}`}
                  style={{
                    '--clip-left': `${clip.startTimeMs * scale}px`,
                    '--clip-width': `${Math.max(8, clip.durationMs * scale)}px`,
                    '--clip-h': `${TRACK_HEIGHT - 8}px`,
                  }}
                  onPointerDown={(event) => beginClipDrag(event, clip, 'move')}
                  onContextMenu={(event) => onClipContext(event, clip)}
                  title={clip.name}
                >
                  <span
                    className="omx-clip-block__edge omx-clip-block__edge--start"
                    onPointerDown={(event) => beginClipDrag(event, clip, 'start')}
                  />
                  <span className="omx-clip-block__label">{clip.name}</span>
                  <span
                    className="omx-clip-block__edge omx-clip-block__edge--end"
                    onPointerDown={(event) => beginClipDrag(event, clip, 'end')}
                  />
                </div>
              ))}
            </div>
          ))}
          <div className="omx-clip-playhead" />
        </div>
      </div>
      {menu ? (
        <div
          className="omx-clip-ctx"
          style={{ '--ctx-x': `${menu.x}px`, '--ctx-y': `${menu.y}px` }}
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              timelineStore.splitClip(menu.clipId, playheadMs)
              setMenu(null)
            }}
          >
            在播放头分割
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={() => {
              timelineStore.removeClip(menu.clipId)
              setMenu(null)
            }}
          >
            删除片段
          </Button>
        </div>
      ) : null}
    </section>
  )
}
