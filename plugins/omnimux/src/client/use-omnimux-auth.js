import { useCallback, useEffect, useState } from 'react'
import { getStatus, logout, pollLogin, startLogin } from './api.js'

/**
 * @param {unknown} url
 */
export function openAuthUrl(url) {
  if (typeof url === 'string' && url) window.open(url, '_blank', 'noopener,noreferrer')
}

/**
 * Reusable device-login flow controller, extracted so the unified gate
 * (`auth-gate.js`) can drive the same start → open → poll cycle that the
 * `useOmnimuxAuth` hook uses, without being a React hook. It is pure
 * orchestration: it reports phase transitions through `onState` and resolves
 * the login through `onSuccess(profile)`.
 *
 * @param {{
 *   onSuccess?: (profile: unknown) => void,
 *   onState?: (phase: 'starting' | 'waiting' | 'denied' | 'expired' | 'error', detail?: Record<string, unknown>) => void,
 * }} [opts]
 * @returns {{ start: () => void, stop: () => void, cancel: () => void }}
 */
export function runLogin(opts = {}) {
  const onSuccess = typeof opts.onSuccess === 'function' ? opts.onSuccess : () => {}
  const onState = typeof opts.onState === 'function' ? opts.onState : () => {}
  let timer = null
  let flowId = ''
  let cancelled = false

  function stop() {
    if (timer !== null) {
      window.clearInterval(timer)
      timer = null
    }
  }

  function schedulePoll(delaySec) {
    stop()
    const delay = Math.max(1, Number(delaySec) || 5) * 1000
    timer = window.setInterval(async () => {
      if (cancelled || flowId === '') return
      try {
        const result = await pollLogin(flowId)
        if (cancelled) return
        if (result.body?.logged_in) {
          onSuccess(result.body)
          stop()
          return
        }
        const kind = result.body?.kind
        if (kind === 'pending' || kind === 'slow_down') {
          if (result.body?.interval) schedulePoll(result.body.interval)
          return
        }
        // Any other kind / a 4xx is terminal.
        if (result.status === 403 || kind === 'denied') onState('denied', { detail: result.body?.error })
        else if (result.status === 410 || kind === 'expired') onState('expired', { detail: result.body?.error })
        else onState('error', { detail: result.body?.error || `HTTP ${String(result.status)}` })
        stop()
      } catch (error) {
        if (!cancelled) onState('error', { detail: error instanceof Error ? error.message : 'poll failed' })
        stop()
      }
    }, delay)
  }

  async function start() {
    if (cancelled) return
    onState('starting')
    try {
      const started = await startLogin()
      if (cancelled) return
      if (!started.ok || typeof started.body?.flow_id !== 'string' || !started.body.flow_id) {
        onState('error', { detail: started.body?.error || `HTTP ${String(started.status)}` })
        return
      }
      flowId = started.body.flow_id
      openAuthUrl(started.body.verification_url)
      onState('waiting', {
        flow_id: started.body.flow_id,
        user_code: started.body.user_code,
        verification_url: started.body.verification_url,
        interval: started.body.interval,
      })
      schedulePoll(started.body.interval)
    } catch (error) {
      if (!cancelled) onState('error', { detail: error instanceof Error ? error.message : 'login failed' })
    }
  }

  function cancel() {
    cancelled = true
    stop()
  }

  return { start, stop, cancel }
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

  /**
   * Re-check the (non-verify) profile status without remounting. Used by the
   * unified gate to refresh this section after a login it drove. Kept stable so
   * `useOmnimuxAuth` callers can depend on it.
   */
  const recheck = useCallback(() => {
    return getStatus(false).then((result) => {
      if (result.body.logged_in) setState({ phase: 'ready', profile: result.body })
      else setState({ phase: 'need-login' })
      return result
    }).catch(() => {
      setState({ phase: 'need-login' })
      return null
    })
  }, [])

  return { state, beginLogin, signOut, openUrl: openAuthUrl, recheck }
}
