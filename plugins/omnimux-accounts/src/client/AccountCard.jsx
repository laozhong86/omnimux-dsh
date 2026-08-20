import { useEffect, useState } from 'react'
import { Avatar, GroupChip, PlatformChip, StatusDot } from './chips.jsx'
import { fmt, localeText, relativeTime } from './view.js'

/**
 * One account card (grid view). The card body is display-only this batch —
 * no card-click semantics are defined yet, so the ⋯ menu and the Agent
 * toggle carry all interactions. Structure follows the PRD §7.2 mockup.
 * @param {{
 *   t: (key: string) => string,
 *   account: Record<string, unknown>,
 *   busy: string,
 *   onAgentToggle: (id: string, next: boolean) => void,
 *   onDisconnect: (id: string) => void,
 * }} props
 */
export function AccountCard({ t, account, busy = '', onAgentToggle, onDisconnect }) {
  const [popover, setPopover] = useState(null) // null | 'menu' | 'confirm'
  const id = String(account.id)
  const name = [account.display_name, account.username, account.name]
    .find((value) => typeof value === 'string' && value !== '') || id
  const username = typeof account.username === 'string' && account.username !== ''
    ? `@${account.username}`
    : ''
  const status = typeof account.status === 'string' ? account.status : ''
  const statusLabel = localeText(t, `status.${status}`, status)
  const agentUsable = account.agent_usable !== false
  const lastUsed = typeof account.last_used_at === 'string' ? relativeTime(account.last_used_at) : ''
  const expiresSoon = status === 'expiring' && typeof account.expires_at === 'string'

  // Close the popover on any outside pointer press (PluginsSection pattern).
  useEffect(() => {
    if (popover === null) return undefined
    const onPointerDown = (event) => {
      const target = event.target
      if (target instanceof Element && target.closest('[data-omnimux-accounts-popover]') !== null) return
      setPopover(null)
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => { document.removeEventListener('pointerdown', onPointerDown) }
  }, [popover])

  const disabled = busy !== ''

  return (
    <article className="omnimux-accounts-card" data-busy={busy === id}>
      <div className="omnimux-accounts-card-head">
        <Avatar account={account} t={t} />
        <div className="omnimux-accounts-id">
          <h3 className="omnimux-accounts-name">{name}</h3>
          {username !== '' ? <p className="omnimux-accounts-username">{username}</p> : null}
        </div>
      </div>
      {typeof account.platform === 'string' || typeof account.group === 'string' ? (
        <div className="omnimux-accounts-chips">
          {typeof account.platform === 'string' && account.platform !== '' ? (
            <PlatformChip platform={account.platform} t={t} />
          ) : null}
          {typeof account.group === 'string' && account.group !== '' ? (
            <GroupChip group={account.group} />
          ) : null}
        </div>
      ) : null}
      {status !== '' ? (
        <div className={`omnimux-accounts-status omnimux-accounts-status--${status}`}>
          <StatusDot status={status} label={statusLabel} />
          <span>{statusLabel}</span>
          {expiresSoon ? (
            <span> · {fmt(t('card.expiresIn'), { time: relativeTime(account.expires_at) })}</span>
          ) : null}
        </div>
      ) : null}
      {lastUsed !== '' ? (
        <p className="omnimux-accounts-meta">{fmt(t('card.lastUsed'), { time: lastUsed })}</p>
      ) : null}
      <div className="omnimux-accounts-switchrow">
        <button
          type="button"
          role="switch"
          className="omnimux-accounts-switch"
          aria-checked={String(agentUsable)}
          aria-label={agentUsable ? t('card.agentUsableOn') : t('card.agentUsableOff')}
          disabled={disabled}
          onClick={() => { onAgentToggle(id, !agentUsable) }}
        >
          <span className="omnimux-accounts-switch-knob" />
        </button>
        <span className="omnimux-accounts-switch-label">{t('card.agentUsable')}</span>
      </div>
      <button
        type="button"
        className="omnimux-accounts-more"
        aria-label={t('card.menu')}
        aria-haspopup="menu"
        aria-expanded={popover !== null}
        disabled={disabled}
        onClick={(event) => {
          event.stopPropagation()
          setPopover(popover === null ? 'menu' : null)
        }}
      >
        ⋯
      </button>
      {popover === 'menu' ? (
        <div data-omnimux-accounts-popover="" role="menu" className="omnimux-accounts-popover">
          <button
            type="button"
            role="menuitem"
            className="omnimux-accounts-menuitem omnimux-accounts-menuitem--danger"
            disabled={disabled}
            onClick={() => { setPopover('confirm') }}
          >
            {t('disconnect')}
          </button>
        </div>
      ) : null}
      {popover === 'confirm' ? (
        <div data-omnimux-accounts-popover="" role="dialog" className="omnimux-accounts-popover">
          <p className="omnimux-accounts-popover-text">{fmt(t('card.confirmDisconnect'), { name })}</p>
          <div className="omnimux-accounts-popover-actions">
            <button
              type="button"
              className="omnimux-accounts-btn omnimux-accounts-btn--danger"
              disabled={disabled}
              onClick={() => {
                setPopover(null)
                onDisconnect(id)
              }}
            >
              {t('disconnect')}
            </button>
            <button type="button" className="omnimux-accounts-btn" onClick={() => { setPopover(null) }}>
              {t('action.cancel')}
            </button>
          </div>
        </div>
      ) : null}
    </article>
  )
}
