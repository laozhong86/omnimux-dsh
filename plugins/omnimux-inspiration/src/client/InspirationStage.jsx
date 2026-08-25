import { useLayoutEffect, useState, useSyncExternalStore } from 'react'
import { IconCloseOutline16 } from '@deepseek-ai/dsh-client-ui-primitives'
import { IconButton } from 'dsh-ui-kit'
import { InspirationSection } from './InspirationSection.jsx'

/**
 * After the first open the subtree stays mounted and is hidden with
 * `display:none` so filters / list survive a close.
 * @param {{ t: (key: string) => string, stage: { getSnapshot: () => boolean, subscribe: Function, set: Function, readBox: () => { top: number, left: number, width: number, height: number } } }} props
 */
export function InspirationStage({ t, stage }) {
  const open = useSyncExternalStore(
    stage ? stage.subscribe : () => () => {},
    stage ? stage.getSnapshot : () => false,
  )
  const [everOpened, setEverOpened] = useState(false)
  const [box, setBox] = useState(() => (stage ? stage.readBox() : { top: 0, left: 0, width: 0, height: 0 }))

  if (open && !everOpened) setEverOpened(true)

  useLayoutEffect(() => {
    if (!open || !stage) return undefined
    const update = () => { setBox(stage.readBox()) }
    update()
    const scroll = document.querySelector('[data-conversation-scroll]')
    const target = scroll instanceof HTMLElement
      ? scroll
      : document.querySelector('[data-slot="conversation"]')?.parentElement
    const observer = typeof ResizeObserver === 'function' && target ? new ResizeObserver(update) : null
    if (target && observer) observer.observe(target)
    window.addEventListener('resize', update)
    return () => {
      observer?.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [open, stage])

  if (!stage || !everOpened) return null

  return (
    <div
      role="region"
      aria-label={t('title')}
      aria-hidden={open ? undefined : 'true'}
      className="omnimux-inspiration-stage"
      data-visible={open ? 'true' : 'false'}
      style={{
        '--stage-top': `${box.top}px`,
        '--stage-left': `${box.left}px`,
        '--stage-width': `${box.width}px`,
        '--stage-height': `${box.height}px`,
      }}
    >
      <div className="omnimux-inspiration-stage-header">
        <h1 className="omnimux-inspiration-stage-title">{t('title')}</h1>
        <IconButton
          aria-label={t('close')}
          variant="ghost"
          onClick={() => { stage.set(false) }}
        >
          <IconCloseOutline16 />
        </IconButton>
      </div>
      <div className="omnimux-inspiration-stage-body">
        <InspirationSection t={t} active={open} />
      </div>
    </div>
  )
}
