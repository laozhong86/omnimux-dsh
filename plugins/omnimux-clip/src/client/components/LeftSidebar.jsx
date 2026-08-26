import { Button } from 'dsh-ui-kit'
import { timelineStore, useTimelineStore } from '../store/useTimelineStore.js'
import { TEXT_PRESETS, TRANSITIONS, defaultTextStyle } from '../store/timelineTypes.js'

function addPreset(preset) {
  const state = timelineStore.getState()
  const textTrack = state.schema.tracks.find((track) => track.type === 'text')
  if (!textTrack) return
  timelineStore.addClip(textTrack.id, {
    name: preset.label,
    mediaType: 'text',
    durationMs: 3000,
    textStyle: defaultTextStyle(preset),
  })
}

function applyTransition(type, durationMs) {
  const clipId = timelineStore.getState().selectedClipId
  if (!clipId) return
  timelineStore.setTransition(clipId, { type, durationMs })
}

/**
 * Media library + text presets + transitions.
 */
export function LeftSidebar() {
  const media = useTimelineStore((s) => s.schema.media)
  const selectedClipId = useTimelineStore((s) => s.selectedClipId)

  return (
    <aside className="omx-clip-sidebar">
      <section className="omx-clip-pane">
        <h2 className="omx-clip-pane__title">素材库</h2>
        {media.length === 0 ? (
          <p className="omx-clip-pane__empty">上游连线的视频 / 图片 / 音频会显示在这里。</p>
        ) : (
          <ul className="omx-clip-media-list">
            {media.map((item) => (
              <li key={item.id} className="omx-clip-media-item">
                <div className="omx-clip-media-item__meta">
                  <span className="omx-clip-media-item__name">{item.name}</span>
                  <span className="omx-clip-media-item__type">{item.type}</span>
                </div>
                <Button
                  variant="ghost"
                  size="xs"
                  onClick={() => timelineStore.addClipFromMedia(item)}
                >
                  添加到时间轴
                </Button>
              </li>
            ))}
          </ul>
        )}
      </section>
      <section className="omx-clip-pane">
        <h2 className="omx-clip-pane__title">花字与字幕</h2>
        <div className="omx-clip-chip-row">
          {TEXT_PRESETS.map((preset) => (
            <Button
              key={preset.id}
              variant="outline"
              size="xs"
              onClick={() => addPreset(preset)}
            >
              {preset.label}
            </Button>
          ))}
        </div>
      </section>
      <section className="omx-clip-pane">
        <h2 className="omx-clip-pane__title">转场</h2>
        <div className="omx-clip-chip-row">
          {TRANSITIONS.map((item) => (
            <Button
              key={item.type}
              variant={selectedClipId ? 'outline' : 'ghost'}
              size="xs"
              disabled={!selectedClipId}
              onClick={() => applyTransition(item.type, item.durationMs)}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </section>
    </aside>
  )
}
