import { Button, DropdownSelect, InputField } from 'dsh-ui-kit'
import { timelineStore, selectedClipOf, useTimelineStore } from '../store/useTimelineStore.js'
import { formatTimecode } from '../store/timelineTypes.js'
import { resolveCssColor } from '../theme/colors.js'

const FONT_OPTIONS = [
  { value: 'sans-serif', label: 'Sans' },
  { value: 'serif', label: 'Serif' },
  { value: 'monospace', label: 'Mono' },
]

const ALIGN_OPTIONS = [
  { value: 'left', label: '左对齐' },
  { value: 'center', label: '居中' },
  { value: 'right', label: '右对齐' },
]

function KitSlider({ label, min, max, step, value, onChange }) {
  return (
    <label className="omx-clip-slider">
      <span className="omx-clip-slider__label">{label}</span>
      <input
        className="omx-clip-slider__input"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
      <span className="omx-clip-slider__value">{value}</span>
    </label>
  )
}

/**
 * Property inspector for the selected clip.
 */
export function RightInspector() {
  const selected = useTimelineStore((s) => selectedClipOf(s))
  if (!selected) {
    return (
      <aside className="omx-clip-inspector">
        <h2 className="omx-clip-pane__title">属性</h2>
        <p className="omx-clip-pane__empty">选中时间轴上的片段以编辑入点、速度、音量或文字样式。</p>
      </aside>
    )
  }

  const { clip } = selected
  const isText = clip.mediaType === 'text'
  const style = clip.textStyle || {}

  return (
    <aside className="omx-clip-inspector">
      <h2 className="omx-clip-pane__title">{clip.name}</h2>
      <dl className="omx-clip-kv">
        <div>
          <dt>入点</dt>
          <dd>{formatTimecode(clip.startTimeMs)}</dd>
        </div>
        <div>
          <dt>时长</dt>
          <dd>{formatTimecode(clip.durationMs)}</dd>
        </div>
      </dl>
      {!isText ? (
        <>
          <KitSlider
            label="速度"
            min={0.2}
            max={10}
            step={0.1}
            value={Number(clip.speed || 1)}
            onChange={(value) => timelineStore.setSpeed(clip.id, value)}
          />
          <KitSlider
            label="音量"
            min={0}
            max={1}
            step={0.01}
            value={Number(clip.volume ?? 1)}
            onChange={(value) => timelineStore.setVolume(clip.id, value)}
          />
        </>
      ) : (
        <>
          <InputField
            label="文本"
            value={style.content || ''}
            onChange={(event) => timelineStore.setTextStyle(clip.id, { content: event.target.value })}
          />
          <DropdownSelect
            aria-label="字体"
            value={style.fontFamily || 'sans-serif'}
            options={FONT_OPTIONS}
            onChange={(value) => timelineStore.setTextStyle(clip.id, { fontFamily: value })}
          />
          <KitSlider
            label="字号"
            min={16}
            max={120}
            step={1}
            value={Number(style.fontSize || 42)}
            onChange={(value) => timelineStore.setTextStyle(clip.id, { fontSize: value })}
          />
          <label className="omx-clip-color">
            <span>颜色</span>
            <input
              type="color"
              className="omx-clip-color__input"
              value={toHex(style.color) || '#ffffff'}
              onChange={(event) => timelineStore.setTextStyle(clip.id, { color: event.target.value })}
            />
          </label>
          <DropdownSelect
            aria-label="对齐"
            value={style.textAlign || 'center'}
            options={ALIGN_OPTIONS}
            onChange={(value) => timelineStore.setTextStyle(clip.id, { textAlign: value })}
          />
          <label className="omx-clip-color">
            <span>描边</span>
            <input
              type="color"
              className="omx-clip-color__input"
              value={toHex(style.strokeColor) || '#000000'}
              onChange={(event) => timelineStore.setTextStyle(clip.id, { strokeColor: event.target.value })}
            />
          </label>
          <KitSlider
            label="描边宽度"
            min={0}
            max={12}
            step={1}
            value={Number(style.strokeWidth || 0)}
            onChange={(value) => timelineStore.setTextStyle(clip.id, { strokeWidth: value })}
          />
          <label className="omx-clip-color">
            <span>背景</span>
            <input
              type="color"
              className="omx-clip-color__input"
              value={toHex(style.backgroundColor) || '#000000'}
              onChange={(event) => timelineStore.setTextStyle(clip.id, { backgroundColor: event.target.value })}
            />
          </label>
        </>
      )}
      <Button variant="danger" size="sm" onClick={() => timelineStore.removeClip(clip.id)}>
        删除片段
      </Button>
    </aside>
  )
}

function toHex(color) {
  if (typeof color !== 'string') return ''
  const resolved = resolveCssColor(color)
  if (/^#[0-9a-fA-F]{6}$/.test(resolved) || /^#[0-9a-fA-F]{3}$/.test(resolved)) return resolved
  return ''
}
