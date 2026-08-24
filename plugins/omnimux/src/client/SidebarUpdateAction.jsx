import React, { useEffect, useState } from 'react'

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

const ICON_SPINNER = (
  <svg className="omnimux-spin-icon" width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
    <style>{`@keyframes omnimux-spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } } .omnimux-spin-icon { animation: omnimux-spin 1s linear infinite; }`}</style>
    <path d="M8 2a6 6 0 1 0 6 6" />
  </svg>
)

export function SidebarUpdateAction({ wide = true, t = (k, p) => k }) {
  const [updateState, setUpdateState] = useState({ status: 'idle' })
  const [requesting, setRequesting] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

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

  // 展开形态：位于“插件市场”右侧的精致胶囊按钮
  const labelText = isReady 
    ? (t('update.status.restart') === 'update.status.restart' ? '更新重启' : t('update.status.restart'))
    : isDownloading 
    ? (t('update.status.downloading') === 'update.status.downloading' ? '正在下载' : t('update.status.downloading'))
    : isError 
    ? (t('update.status.retry') === 'update.status.retry' ? '重试更新' : t('update.status.retry'))
    : (t('update.status.ready') === 'update.status.ready' ? '立即更新' : t('update.status.ready'))

  return (
    <div
      style={{
        flex: 'none',
        marginLeft: 'auto',
        display: 'inline-flex',
        alignItems: 'center',
        alignSelf: 'center',
        paddingRight: 2,
      }}
    >
      <button
        type="button"
        onClick={handleClick}
        disabled={isDownloading || requesting}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        title={isError ? updateError : latestVersion ? (t('update.tooltip.newVersion', { version: latestVersion }) === 'update.tooltip.newVersion' ? `新版本: v${latestVersion}` : t('update.tooltip.newVersion', { version: latestVersion })) : undefined}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 5,
          height: 26,
          padding: '0 9px',
          borderRadius: 13,
          border: 'none',
          background: isDownloading
            ? 'rgba(37, 99, 235, 0.25)'
            : isError
            ? '#DC2626'
            : isHovered
            ? '#1D4ED8'
            : '#2563EB',
          color: isDownloading ? '#93C5FD' : '#FFFFFF',
          fontFamily: 'inherit',
          fontSize: 12,
          fontWeight: 600,
          cursor: isDownloading ? 'wait' : 'pointer',
          whiteSpace: 'nowrap',
          boxShadow: isReady ? '0 0 10px rgba(37, 99, 235, 0.8)' : '0 1px 3px rgba(0, 0, 0, 0.2)',
          transition: 'all 0.15s ease',
          userSelect: 'none',
        }}
      >
        <span style={{ display: 'inline-flex', alignItems: 'center' }}>
          {isDownloading ? ICON_SPINNER : isReady ? ICON_ROCKET : ICON_DOWNLOAD}
        </span>
        <span>{labelText}</span>
      </button>
    </div>
  )
}
