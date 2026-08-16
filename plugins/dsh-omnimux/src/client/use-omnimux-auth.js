import { useEffect, useState } from 'react'
import { getStatus, logout, pollLogin, startLogin } from './api.js'

/**
 * @param {unknown} url
 */
export function openAuthUrl(url) {
  if (typeof url === 'string' && url) window.open(url, '_blank', 'noopener,noreferrer')
}

/**
 * Device-login session for Apps and Settings profile.
 * @param {{ verifyOnMount?: boolean }} [opts]
 */
export function useOmnimuxAuth(opts = {}) {
  const verifyOnMount = opts.verifyOnMount === true
  const [state, setState] = useState({ phase: 'checking' })

  useEffect(() => {
    let cancelled = false
    getStatus(verifyOnMount).then((result) => {
      if (cancelled) return
      if (result.body.logged_in) setState({ phase: 'ready', profile: result.body })
      else setState({ phase: 'need-login' })
    }).catch(() => {
      if (!cancelled) setState({ phase: 'need-login' })
    })
    return () => { cancelled = true }
  }, [verifyOnMount])

  useEffect(() => {
    if (state.phase !== 'waiting' || !state.flow_id) return undefined
    let cancelled = false
    const delay = Math.max(1, Number(state.interval) || 5) * 1000
    const timer = window.setInterval(() => {
      pollLogin(state.flow_id).then((result) => {
        if (cancelled) return
        if (result.body.logged_in) {
          setState({ phase: 'ready', profile: result.body })
          return
        }
        if (result.body.kind === 'pending' || result.body.kind === 'slow_down') {
          if (result.body.interval) setState((current) => ({ ...current, interval: result.body.interval }))
          return
        }
        if (result.status === 403 || result.body.kind === 'denied') setState({ phase: 'denied' })
        else if (result.status === 410 || result.body.kind === 'expired') setState({ phase: 'expired' })
        else setState({ phase: 'error', detail: result.body.error || `HTTP ${result.status}` })
      }).catch((error) => {
        if (!cancelled) setState({ phase: 'error', detail: error instanceof Error ? error.message : 'poll failed' })
      })
    }, delay)
    return () => {
      cancelled = true
      window.clearInterval(timer)
    }
  }, [state.phase, state.flow_id, state.interval])

  async function beginLogin() {
    setState({ phase: 'starting' })
    try {
      const started = await startLogin()
      if (!started.ok || typeof started.body.flow_id !== 'string' || !started.body.flow_id) {
        setState({ phase: 'error', detail: started.body.error || `HTTP ${started.status}` })
        return
      }
      openAuthUrl(started.body.verification_url)
      setState({
        phase: 'waiting',
        flow_id: started.body.flow_id,
        user_code: started.body.user_code,
        verification_url: started.body.verification_url,
        interval: started.body.interval,
      })
    } catch (error) {
      setState({ phase: 'error', detail: error instanceof Error ? error.message : 'login failed' })
    }
  }

  function signOut() {
    return logout().then(() => {
      setState({ phase: 'need-login' })
    })
  }

  return { state, beginLogin, signOut, openUrl: openAuthUrl }
}
