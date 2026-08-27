import { useEffect, useMemo, useRef, useState } from 'react'
import { Button, IconButton } from 'dsh-ui-kit'
import { timelineStore, useTimelineStore } from '../store/useTimelineStore.js'
import { formatTimecode } from '../store/timelineTypes.js'
import {
  computeSnapPoints,
  findSnap,
  getAudioWaveform,
  drawWaveformToCanvas,
} from '../engine/openreel/index.js'

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

function ClipWaveform({ sourceUrl, widthPx, heightPx }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!sourceUrl || !canvasRef.current) return
    const canvas = canvasRef.current
    canvas.width = Math.max(10, Math.round(widthPx))
    canvas.height = Math.round(heightPx)

    getAudioWaveform(sourceUrl, 60).then((peaks) => {
      if (canvasRef.current) {
        drawWaveformToCanvas(canvasRef.current, peaks, 'rgba(147, 197, 253, 0.45)')
      }
    })
  }, [sourceUrl, widthPx, heightPx])

  if (!sourceUrl) return null
  return (
    <canvas
      ref={canvasRef}
      className="omx-clip-block__waveform"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        opacity: 0.85,
      }}
    />
  )
}

/**
 * Multi-track timeline: trim / move / split / mute / lock / hide + Magnet Snapping & Waveform.
 */
export function BottomTimeline() {
  const tracks = useTimelineStore((s) => s.schema.tracks)
  const durationMs = useTimelineStore((s) => s.schema.canvasConfig.durationMs)
  const playheadMs = useTimelineStore((s) => s.playheadMs)
  const zoomLevel = useTimelineStore((s) => s.zoomLevel)
  const selectedClipId = useTimelineStore((s) => s.selectedClipId)
  const bodyRef = useRef(null)
  const [menu, setMenu] = useState(null)
  const [snapGuide, setSnapGuide] = useState(null)
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
    setSnapGuide(null)
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

    // Compute snap targets for magnet alignment
    const snapPoints = computeSnapPoints(tracks, { playheadMs, excludeClipId: clip.id })

    const move = (ev) => {
      const deltaMs = Math.round((ev.clientX - originX) / scale)
      if (edge === 'move') {
        const rawTargetMs = Math.max(0, originStart + deltaMs)
        const snap = findSnap(rawTargetMs, snapPoints, 120 / zoomLevel)
        const finalStartMs = snap.snapped ? snap.snappedTimeMs : rawTargetMs
        setSnapGuide(snap.snapped ? snap.snappedTimeMs : null)
        timelineStore.moveClip(clip.id, { startTimeMs: finalStartMs }, { record: false })
      } else if (edge === 'start') {
        const rawStart = Math.max(0, originStart + deltaMs)
        const snap = findSnap(rawStart, snapPoints, 120 / zoomLevel)
        const nextStart = snap.snapped ? snap.snappedTimeMs : rawStart
        setSnapGuide(snap.snapped ? snap.snappedTimeMs : null)
        const consumed = nextStart - originStart
        const nextDuration = Math.max(MIN_CLIP_MS, originDuration - consumed)
        timelineStore.trimClip(clip.id, {
          startTimeMs: nextStart,
          durationMs: nextDuration,
          sourceInMs: originIn + Math.max(0, consumed) * (clip.speed || 1),
        }, { record: false })
      } else if (edge === 'end') {
        const rawEnd = originStart + originDuration + deltaMs
        const snap = findSnap(rawEnd, snapPoints, 120 / zoomLevel)
        const finalEnd = snap.snapped ? snap.snappedTimeMs : rawEnd
        setSnapGuide(snap.snapped ? snap.snappedTimeMs : null)
        timelineStore.trimClip(clip.id, {
          durationMs: Math.max(MIN_CLIP_MS, finalEnd - originStart),
        }, { record: false })
      }
    }

    const up = () => {
      setSnapGuide(null)
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
              {track.clips.map((clip) => {
                const clipWidth = Math.max(8, clip.durationMs * scale)
                const isAudioOrVideo = clip.mediaType === 'audio' || clip.mediaType === 'video'
                return (
                  <div
                    key={clip.id}
                    className={`omx-clip-block omx-clip-block--${clip.mediaType}${selectedClipId === clip.id ? ' is-selected' : ''}`}
                    style={{
                      '--clip-left': `${clip.startTimeMs * scale}px`,
                      '--clip-width': `${clipWidth}px`,
                      '--clip-h': `${TRACK_HEIGHT - 8}px`,
                    }}
                    onPointerDown={(event) => beginClipDrag(event, clip, 'move')}
                    onContextMenu={(event) => onClipContext(event, clip)}
                    title={clip.name}
                  >
                    {isAudioOrVideo && clip.sourceUrl ? (
                      <ClipWaveform
                        sourceUrl={clip.sourceUrl}
                        widthPx={clipWidth}
                        heightPx={TRACK_HEIGHT - 8}
                      />
                    ) : null}
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
                )
              })}
            </div>
          ))}
          <div className="omx-clip-playhead" />
          {snapGuide != null ? (
            <div
              className="omx-clip-snap-guide"
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: `${snapGuide * scale}px`,
                width: '1px',
                backgroundColor: '#38bdf8',
                boxShadow: '0 0 4px #38bdf8',
                pointerEvents: 'none',
                zIndex: 15,
              }}
            />
          ) : null}
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
