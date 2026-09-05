import { useCallback, useEffect, useState } from 'react'
import { Button } from 'dsh-ui-kit'
import { IconPlusOutline16 } from '@deepseek-ai/dsh-client-ui-primitives'
import {
  ACCOUNTS_HELP_URL,
  ACCOUNTS_TUTORIAL_URL,
  errorText,
  listHubAccounts,
} from './api.js'
import {
  ACCOUNT_PLATFORM,
  ACCOUNT_TABS,
  accountDisplayName,
  accountHandle,
  accountStatusTone,
  countAccountTabs,
  extractAccounts,
  filterAccounts,
  isNeedsLogin,
} from './account-sidebar-view.js'
import { AuthorizeModal, authorizeBaseline } from './AuthorizeModal.jsx'
import {
  IconBookOutline16,
  IconExternalLinkOutline16,
  IconSearchOutline16,
  IconUserOutline16,
} from './icons/accounts.js'

/**
 * 打开外链（仅当常量已配置；空字符串不渲染入口）。
 * @param {string} url
 */
function openExternal(url) {
  if (typeof url !== 'string' || url === '') return
  window.open(url, '_blank', 'noopener,noreferrer')
}

/**
 * 账号行状态文案：优先已知状态映射，未知值原样透传，空值回退「已连接」。
 * @param {(key: string) => string} t
 * @param {Record<string, unknown>} row
 */
function statusLabel(t, row) {
  const status = String(row?.status ?? '').trim().toLowerCase()
  if (status === 'connected' || status === 'active' || status === 'ok') return t('acct.status.connected')
  if (status === 'expired') return t('acct.status.expired')
  if (status === 'error' || status === 'failed' || status === 'revoked') return t('acct.status.error')
  if (status !== '') return status
  return t('acct.status.connected')
}

/**
 * 单个账号行：头像（hub 同源重写 avatar_url，缺失/加载失败退 SVG 占位）
 * + 显示名 + @username + 状态 pill（agent_usable=false 另置灰标注）。
 * @param {{
 *   t: (key: string) => string,
 *   row: Record<string, unknown>,
 * }} props
 */
function AccountItem({ t, row }) {
  const [avatarFailed, setAvatarFailed] = useState(false)
  const avatarUrl = typeof row.avatar_url === 'string' ? row.avatar_url : ''
  const tone = row.agent_usable === false ? 'muted' : accountStatusTone(row)
  const name = accountDisplayName(row)
  const handle = accountHandle(row)
  return (
    <div className="omnimux-publish-accounts-item">
      <span className="omnimux-publish-accounts-avatar">
        {avatarUrl !== '' && !avatarFailed ? (
          <img
            className="omnimux-publish-accounts-avatar-img"
            src={avatarUrl}
            alt=""
            loading="lazy"
            onError={() => { setAvatarFailed(true) }}
          />
        ) : (
          <IconUserOutline16 size={18} />
        )}
      </span>
      <span className="omnimux-publish-accounts-item-main">
        <span className="omnimux-publish-accounts-item-name">{name}</span>
        {handle !== '' ? (
          <span className="omnimux-publish-accounts-item-handle">{handle}</span>
        ) : null}
      </span>
      <span className={`omnimux-publish-accounts-item-status ${tone}`}>
        {row.agent_usable === false ? t('acct.agentOff') : statusLabel(t, row)}
      </span>
    </div>
  )
}

/**
 * 空态：暂无授权账号 + 新增账号主按钮 + 使用教程外链（常量配置后渲染）。
 * @param {{
 *   t: (key: string) => string,
 *   onAdd: () => void,
 * }} props
 */
function EmptyState({ t, onAdd }) {
  return (
    <div className="omnimux-publish-accounts-empty">
      <div className="omnimux-publish-accounts-empty-title">{t('acct.empty')}</div>
      <Button
        variant="primary"
        size="default"
        leadingIcon={<IconPlusOutline16 />}
        onClick={onAdd}
      >
        {t('acct.add')}
      </Button>
      {ACCOUNTS_TUTORIAL_URL !== '' ? (
        <button
          type="button"
          className="omnimux-publish-accounts-tutorial"
          onClick={() => { openExternal(ACCOUNTS_TUTORIAL_URL) }}
        >
          <IconBookOutline16 />
          <span>{t('acct.tutorial')}</span>
          <IconExternalLinkOutline16 size={12} />
        </button>
      ) : null}
    </div>
  )
}

/**
 * 发布 Stage 内「账号」侧栏视图：左侧 336px 账号列表面板（头部 + 新增 +
 * 搜索 + 分段 tabs + 账号行 / 空态 / 登录引导态），右侧说明留白区。
 * 数据源：GET /omnimux/accounts?platform=tiktok（hub 权威 ViewRow 合并，
 * 本插件不自建账号路由）。「新增账号」弹 AuthorizeModal 走官方授权。
 * @param {{
 *   t: (key: string, vars?: Record<string, unknown>) => string,
 * }} props
 */
export function AccountsSidebar({ t }) {
  const [phase, setPhase] = useState('loading') // loading | ready | need-login
  const [rows, setRows] = useState([])
  const [error, setError] = useState('')
  const [tab, setTab] = useState('all')
  const [query, setQuery] = useState('')
  const [modalOpen, setModalOpen] = useState(false)

  const loadAccounts = useCallback(() => {
    return listHubAccounts({ platform: ACCOUNT_PLATFORM }).then((result) => {
      if (isNeedsLogin(result)) {
        setPhase('need-login')
        setRows([])
        return true
      }
      if (!result.ok) {
        setPhase('ready')
        setError(errorText(result.body, result.status))
        return true
      }
      setPhase('ready')
      setError('')
      setRows(extractAccounts(result.body))
      return true
    }).catch((caught) => {
      setPhase('ready')
      setError(caught instanceof Error ? caught.message : String(caught))
      return true
    })
  }, [])

  useEffect(() => {
    void loadAccounts()
  }, [loadAccounts])

  const counts = countAccountTabs(rows)
  const filtered = filterAccounts(rows, { tab, query })

  /** 授权完成（检测到新账号或用户点「我已完成」）：关弹窗并刷新列表。 */
  const handleConnected = useCallback(() => {
    setModalOpen(false)
    void loadAccounts()
  }, [loadAccounts])

  /** 授权流程遇 401：关弹窗，整体进入登录引导态。 */
  const handleNeedLogin = useCallback(() => {
    setModalOpen(false)
    setPhase('need-login')
  }, [])

  const tabLabels = { all: 'acct.tab.all', commerce: 'acct.tab.commerce', standard: 'acct.tab.standard' }

  return (
    <div className="omnimux-publish-accounts-view">
      <aside className="omnimux-publish-accounts-sidebar">
        <div className="omnimux-publish-accounts-head">
          <span className="omnimux-publish-accounts-head-title">{t('acct.title')}</span>
          {ACCOUNTS_HELP_URL !== '' ? (
            <button
              type="button"
              className="omnimux-publish-accounts-help"
              onClick={() => { openExternal(ACCOUNTS_HELP_URL) }}
            >
              <span>{t('acct.help')}</span>
              <IconExternalLinkOutline16 size={12} />
            </button>
          ) : null}
        </div>

        {phase === 'need-login' ? (
          <>
            <div className="omnimux-publish-accounts-note">{t('acct.needLogin')}</div>
            <div className="omnimux-publish-accounts-note">{t('acct.needLogin.hint')}</div>
          </>
        ) : (
          <>
            <Button
              variant="primary"
              size="default"
              className="omnimux-publish-accounts-add"
              leadingIcon={<IconPlusOutline16 />}
              onClick={() => { setModalOpen(true) }}
            >
              {t('acct.add')}
            </Button>

            <div className="omnimux-publish-accounts-search">
              <span className="omnimux-publish-accounts-search-icon"><IconSearchOutline16 /></span>
              <input
                type="search"
                className="omnimux-publish-accounts-search-input"
                placeholder={t('acct.searchPlaceholder')}
                value={query}
                onChange={(event) => { setQuery(event.currentTarget.value) }}
              />
            </div>

            <div className="omnimux-publish-accounts-tabs" role="tablist">
              {ACCOUNT_TABS.map((key) => (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={tab === key}
                  className={`omnimux-publish-accounts-tab${tab === key ? ' active' : ''}`}
                  onClick={() => { setTab(key) }}
                >
                  <span>{t(tabLabels[key])}</span>
                  <span className="omnimux-publish-accounts-tab-count">{counts[key]}</span>
                </button>
              ))}
            </div>

            {phase === 'loading' ? (
              <div className="omnimux-publish-accounts-note">{t('acct.loading')}</div>
            ) : null}

            {error !== '' ? (
              <div role="alert" className="omnimux-publish-accounts-error">
                {t('acct.loadFailed', { reason: error })}
              </div>
            ) : null}

            {phase === 'ready' && error === '' ? (
              rows.length === 0 ? (
                <EmptyState t={t} onAdd={() => { setModalOpen(true) }} />
              ) : filtered.length === 0 ? (
                <div className="omnimux-publish-accounts-note">{t('acct.empty')}</div>
              ) : (
                <div className="omnimux-publish-accounts-items">
                  {filtered.map((row) => (
                    <AccountItem key={String(row.id)} t={t} row={row} />
                  ))}
                </div>
              )
            ) : null}
          </>
        )}
      </aside>

      <section className="omnimux-publish-accounts-panel">
        <div className="omnimux-publish-accounts-panel-title">{t('acct.panel.title')}</div>
        <div className="omnimux-publish-accounts-panel-body">{t('acct.panel.body')}</div>
      </section>

      {modalOpen ? (
        <AuthorizeModal
          t={t}
          baselineIds={authorizeBaseline(rows)}
          onClose={() => { setModalOpen(false) }}
          onNeedLogin={handleNeedLogin}
          onConnected={handleConnected}
        />
      ) : null}
    </div>
  )
}
