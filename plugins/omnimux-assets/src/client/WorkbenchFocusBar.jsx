import { useSyncExternalStore } from 'react'

const MODES = [
  { id: 'chat', zh: '对话', en: 'Chat' },
  { id: 'split', zh: '分栏', en: 'Split' },
  { id: 'gui', zh: '工作台', en: 'Workbench' },
]

function workbenchApi() {
  return typeof window !== 'undefined' ? window.__omnimuxWorkbench : undefined
}

function subscribeFocus(listener) {
  const api = workbenchApi()
  if (api && typeof api.subscribe === 'function') return api.subscribe(listener)
  return () => {}
}

function readFocus() {
  const api = workbenchApi()
  if (api && typeof api.getFocus === 'function') return api.getFocus()
  return 'split'
}

/**
 * Three-way layout switch. Talks to `window.__omnimuxWorkbench` only —
 * vertical plugins MUST NOT import the hub module.
 * @param {{ t?: (key: string) => string }} [props]
 */
export function WorkbenchFocusBar({ t } = {}) {
  const focus = useSyncExternalStore(subscribeFocus, readFocus, () => 'split')
  const label = (mode) => {
    if (typeof t === 'function') {
      try {
        const value = t(`focus.${mode.id}`)
        if (value && value !== `focus.${mode.id}`) return value
      } catch { /* fall through */ }
    }
    return mode.zh
  }
  return (
    <div className="omnimux-workbench-focus" role="radiogroup" aria-label="布局">
      {MODES.map((mode) => (
        <button
          key={mode.id}
          type="button"
          role="radio"
          aria-checked={focus === mode.id}
          data-omnimux-workbench-focus={mode.id}
          data-active={focus === mode.id ? 'true' : undefined}
          className="omnimux-workbench-focus-btn"
          onClick={() => { workbenchApi()?.setFocus?.(mode.id) }}
        >
          {label(mode)}
        </button>
      ))}
    </div>
  )
}

export default WorkbenchFocusBar
