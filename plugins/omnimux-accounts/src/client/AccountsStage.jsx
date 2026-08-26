import { useLayoutEffect, useState, useSyncExternalStore } from 'react'
import { IconCloseOutline16 } from '@deepseek-ai/dsh-client-ui-primitives'
import { IconButton } from 'dsh-ui-kit'
import { AccountsSection } from './AccountsSection.jsx'

/**
 * Standalone pinned Accounts page. Its own sidebar row toggles the stage
 * store, which claims the product stage (mutual exclusion with 任务看板 /
 * 专家 pages) and renders over the conversation column. Open state lives in
 * the stage store, not in React state.
 *
 * After the first open the subtree stays mounted and is hidden with
 * `display:none` + `aria-hidden` so filters / list / view mode survive a
 * close. Returning `null` here would throw `AccountsSection` away and every
 * sidebar click would flash the loading skeleton.
 * @param {{ t: (key: string) => string, stage: { getSnapshot: () => boolean, subscribe: Function, set: Function, readBox: () => { top: number, left: number, width: number, height: number } } }} props
 */
export function AccountsStage({ t, stage }) {
  // Wrap method refs — useSyncExternalStore calls subscribe/getSnapshot bare.
  // Passing `stage.subscribe` / `stage.getSnapshot` drops `this` and can leave
  // the Fiber memoized snapshot stuck after store flips (issue #14).
  const open = useSyncExternalStore(
    stage ? (onStoreChange) => stage.subscribe(onStoreChange) : () => () => {},
    stage ? () => stage.getSnapshot() : () => false,
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
      className="omnimux-accounts-stage"
      data-visible={open ? 'true' : 'false'}
      style={{
        '--stage-top': `${box.top}px`,
        '--stage-left': `${box.left}px`,
        '--stage-width': `${box.width}px`,
        '--stage-height': `${box.height}px`,
      }}
    >
      <div className="omnimux-accounts-stage-header">
        <h1 className="omnimux-accounts-stage-title">{t('title')}</h1>
        <IconButton
          aria-label={t('close')}
          variant="ghost"
          onClick={() => { stage.set(false) }}
        >
          <IconCloseOutline16 />
        </IconButton>
      </div>
      <div className="omnimux-accounts-stage-body">
        <AccountsSection t={t} active={open} />
      </div>
    </div>
  )
}
