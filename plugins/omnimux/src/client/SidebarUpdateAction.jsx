import { useEffect, useState } from 'react'
import { Button } from 'dsh-ui-kit'
import { injectHubStyles } from './styles.js'

const ICON_DOWNLOAD = (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 2v9m0 0l-3-3m3 3l3-3M2 13.5h12" />
  </svg>
)

const ICON_ROCKET = (
  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2c-3.5 0-6.5 3-7.5 7.5L3 11l2 2 1.5-1.5C11 10.5 14 7.5 14 4V2h-2z" />
    <path d="M6.5 9.5L4 12v2h2l2.5-2.5" />
    <circle cx="10.5" cy="5.5" r="1" fill="currentColor" />
  </svg>
)

export function SidebarUpdateAction({ wide = true, t = (k) => k }) {
  useEffect(() => { injectHubStyles() }, [])
  const [updateState, setUpdateState] = useState({ status: 'idle' })
  const [requesting, setRequesting] = useState(false)

  useEffect(() => {
    let active = true

    async function checkStatus() {
      try {
        const res = await fetch('/api/desktop/updates/status', { cache: 'no-store' })
        if (res.ok) {
          const data = await res.json()
          if (active && data.status) {
            setUpdateState(data)
          }
        }
      } catch {
        // Desktop updates endpoint unavailable
      }
    }

    void checkStatus()
    const timer = setInterval(checkStatus, updateState.status === 'downloading' ? 1000 : 3000)

    return () => {
      active = false
      clearInterval(timer)
    }
  }, [updateState.status])

  const { status, latestVersion, error: updateError, isDev } = updateState

  if (isDev || status === 'idle' || !status) {
    return null
  }

  const isReady = status === 'readyToRestart'
  const isDownloading = status === 'downloading'
  const isError = status === 'error'

  const handleClick = async (e) => {
    e.stopPropagation()
    if (requesting) return

    if (status === 'available' || status === 'error') {
      setRequesting(true)
      setUpdateState(prev => ({ ...prev, status: 'downloading' }))
      try {
        const res = await fetch('/api/desktop/updates/download', { method: 'POST' })
        if (res.ok) {
          const data = await res.json()
          setUpdateState(data)
        }
      } catch {
        setUpdateState(prev => ({ ...prev, status: 'available' }))
      } finally {
        setRequesting(false)
      }
    } else if (status === 'readyToRestart') {
      setRequesting(true)
      try {
        await fetch('/api/desktop/updates/apply', { method: 'POST' })
      } catch {
        setRequesting(false)
      }
    }
  }

  // 侧边栏收起折叠（窄轨模式）：不渲染更新按钮，避免挤压变形
  if (!wide) {
    return null
  }

  const pick = (key, fallback) => {
    const value = t(key)
    return value === key ? fallback : value
  }
  const labelText = isReady
    ? pick('update.status.restart', '更新重启')
    : isDownloading
    ? pick('update.status.downloading', '正在下载')
    : isError
    ? pick('update.status.retry', '重试更新')
    : pick('update.status.ready', '立即更新')

  const versionHint = latestVersion
    ? pick('update.tooltip.newVersion', `新版本: v${latestVersion}`).replace('{version}', latestVersion)
    : undefined
  const title = isError ? updateError : versionHint

  return (
    <div className="omnimux-update-action">
      <Button
        type="button"
        size="sm"
        variant={isError ? 'danger' : 'primary'}
        className="omnimux-update-action-btn"
        data-status={status}
        onClick={handleClick}
        disabled={isDownloading || requesting}
        loading={isDownloading || requesting}
        title={title}
        leadingIcon={isReady ? ICON_ROCKET : ICON_DOWNLOAD}
      >
        {labelText}
      </Button>
    </div>
  )
}
