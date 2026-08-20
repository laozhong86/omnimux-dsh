import { useEffect, useMemo, useState } from 'react'
import { filterAccounts, uniqueValues } from '../filter.js'
import { connectAccount, disconnectAccount, listAccounts } from './api.js'

// Full-width product-page layout: the AccountsStage chrome carries the title,
// so this section only renders the controls and rows. Padding matches the
// hub Apps page (PluginsSection).
const page = {
  padding: '0 20px 24px',
  color: 'var(--dsw-alias-label-primary, var(--dsw-text-primary, inherit))',
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
}

const muted = { color: 'var(--dsw-text-secondary, inherit)', lineHeight: 1.5, margin: 0 }
const row = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 12,
  padding: '8px 0',
  borderBottom: '1px solid var(--dsw-border, currentColor)',
}
const button = {
  padding: '6px 12px',
  border: '1px solid var(--dsw-border, currentColor)',
  background: 'transparent',
  color: 'inherit',
  borderRadius: 6,
  cursor: 'pointer',
}
const input = {
  ...button,
  flex: 1,
  cursor: 'text',
}
const select = { ...button }

/**
 * @param {{ t: (key: string) => string }} props
 */
export function AccountsSection({ t }) {
  const [phase, setPhase] = useState('loading')
  const [accounts, setAccounts] = useState([])
  const [platform, setPlatform] = useState('')
  const [group, setGroup] = useState('')
  const [nextPlatform, setNextPlatform] = useState('')
  const [busy, setBusy] = useState('')
  const [error, setError] = useState('')

  const refresh = () => {
    return listAccounts().then((result) => {
      if (result.status === 401) {
        setPhase('need-login')
        setAccounts([])
        return
      }
      if (!result.ok) {
        setError(String(result.body.error || `HTTP ${String(result.status)}`))
        setPhase('ready')
        return
      }
      setError('')
      setAccounts(Array.isArray(result.body.accounts) ? result.body.accounts : [])
      setPhase('ready')
    }).catch((caught) => {
      setError(caught instanceof Error ? caught.message : String(caught))
      setPhase('ready')
    })
  }

  useEffect(() => {
    void refresh()
  }, [])

  const visible = useMemo(
    () => filterAccounts(accounts, { platform, group }),
    [accounts, platform, group],
  )
  const platforms = uniqueValues(accounts, 'platform')
  const groups = uniqueValues(accounts, 'group')

  const run = (key, work) => {
    setBusy(key)
    setError('')
    void work().then((result) => {
      if (result.status === 401) {
        setPhase('need-login')
        return
      }
      if (!result.ok) {
        setError(String(result.body.error || `HTTP ${String(result.status)}`))
        return
      }
      if (typeof result.body.auth_url === 'string' && result.body.auth_url) {
        window.open(result.body.auth_url, '_blank', 'noopener,noreferrer')
      }
      return refresh()
    }).catch((caught) => {
      setError(caught instanceof Error ? caught.message : String(caught))
    }).finally(() => {
      setBusy('')
    })
  }

  if (phase === 'loading') {
    return <div style={page}><p style={muted}>{t('loading')}</p></div>
  }

  if (phase === 'need-login') {
    return (
      <div style={page}>
        <p style={muted}>{t('needLogin')}</p>
        <p style={muted}>{t('needLoginHint')}</p>
      </div>
    )
  }

  return (
    <div style={page}>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <label style={muted}>
          {t('platform')}
          <select style={select} value={platform} onChange={(event) => { setPlatform(event.target.value) }}>
            <option value="">{t('all')}</option>
            {platforms.map((value) => <option key={value} value={value}>{value}</option>)}
          </select>
        </label>
        <label style={muted}>
          {t('group')}
          <select style={select} value={group} onChange={(event) => { setGroup(event.target.value) }}>
            <option value="">{t('all')}</option>
            {groups.map((value) => <option key={value} value={value}>{value}</option>)}
          </select>
        </label>
      </div>
      {visible.length === 0 ? <p style={muted}>{t('empty')}</p> : null}
      {visible.map((account) => (
        <div key={String(account.id)} style={row}>
          <div>
            <div>{account.display_name || account.username || account.name || account.id}</div>
            <p style={{ ...muted, marginTop: 4 }}>
              {[account.platform, account.group].filter(Boolean).join(' · ')}
            </p>
          </div>
          <button
            type="button"
            style={button}
            disabled={busy !== ''}
            onClick={() => { run(String(account.id), () => disconnectAccount(String(account.id))) }}
          >
            {t('disconnect')}
          </button>
        </div>
      ))}
      <div style={{ display: 'flex', gap: 8 }}>
        <input
          style={input}
          value={nextPlatform}
          disabled={busy !== ''}
          placeholder={t('platformHint')}
          onChange={(event) => { setNextPlatform(event.target.value) }}
        />
        <button
          type="button"
          style={button}
          disabled={busy !== '' || nextPlatform.trim() === ''}
          onClick={() => { run('connect', () => connectAccount(nextPlatform.trim())) }}
        >
          {t('connect')}
        </button>
      </div>
      {error !== '' ? <p style={muted}>{error}</p> : null}
    </div>
  )
}
