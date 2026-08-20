import { useCallback, useEffect, useRef, useState } from 'react'
import { connectAccount, disconnectAccount, listAccounts, patchAccount } from './api.js'

/**
 * Data hook for the Accounts app. Owns loading, the 401 → need-login phase
 * transition, optimistic metadata patches with rollback, and disconnects.
 *
 * The connect-flow poller (watchConnect) lands with the ConnectModal in T04;
 * it will reuse `refresh` as its completion signal, which is why every state
 * mutation goes through commitAccounts.
 * @returns {{
 *   phase: 'loading' | 'ready' | 'need-login',
 *   accounts: Array<Record<string, unknown>>,
 *   error: string,
 *   busy: string,
 *   refresh: () => Promise<boolean>,
 *   connect: (platform: string) => Promise<boolean>,
 *   patch: (id: string, body: { group?: string | null, agent_usable?: boolean }) => Promise<boolean>,
 *   disconnect: (id: string) => Promise<boolean>,
 * }}
 */
export function useAccounts() {
  const [phase, setPhase] = useState('loading')
  const [accounts, setAccounts] = useState([])
  const [error, setError] = useState('')
  const [busy, setBusy] = useState('')
  const accountsRef = useRef([])

  /**
   * Single funnel for account-list mutations so the ref mirror (used for
   * optimistic rollback) can never drift from React state.
   * @param {Array<Record<string, unknown>>} next
   */
  const commitAccounts = useCallback((next) => {
    const rows = Array.isArray(next) ? next : []
    accountsRef.current = rows
    setAccounts(rows)
  }, [])

  /**
   * @param {{ ok: boolean, status: number, body: unknown }} result
   */
  const applyListResult = useCallback((result) => {
    if (result.status === 401) {
      setPhase('need-login')
      commitAccounts([])
      return true
    }
    if (!result.ok) {
      setError(String((result.body && typeof result.body === 'object' && result.body.error) || `HTTP ${String(result.status)}`))
      setPhase('ready')
      return true
    }
    const body = result.body && typeof result.body === 'object' ? /** @type {Record<string, unknown>} */ (result.body) : {}
    setError('')
    commitAccounts(Array.isArray(body.accounts) ? body.accounts : [])
    setPhase('ready')
    return true
  }, [commitAccounts])

  const refresh = useCallback(() => {
    return listAccounts().then(applyListResult).catch((caught) => {
      setError(caught instanceof Error ? caught.message : String(caught))
      setPhase('ready')
      return true
    })
  }, [applyListResult])

  useEffect(() => {
    void refresh()
  }, [refresh])

  /**
   * Opens the site OAuth page for the platform (the site only returns an
   * auth_url today — no device-code endpoint exists yet) and refreshes once
   * the request resolves. T04 adds the poll-until-connected loop.
   * @param {string} platform
   */
  const connect = useCallback((platform) => {
    setBusy('connect')
    setError('')
    return connectAccount(platform).then((result) => {
      if (result.status === 401) {
        setPhase('need-login')
        return false
      }
      if (!result.ok) {
        setError(String((result.body && typeof result.body === 'object' && result.body.error) || `HTTP ${String(result.status)}`))
        return false
      }
      const body = result.body && typeof result.body === 'object' ? /** @type {Record<string, unknown>} */ (result.body) : {}
      if (typeof body.auth_url === 'string' && body.auth_url) {
        window.open(body.auth_url, '_blank', 'noopener,noreferrer')
      }
      return refresh().then(() => true)
    }).catch((caught) => {
      setError(caught instanceof Error ? caught.message : String(caught))
      return false
    }).finally(() => {
      setBusy('')
    })
  }, [refresh])

  /**
   * Optimistic metadata patch; rolls the row back and surfaces an error if
   * the Host rejects it.
   * @param {string} id
   * @param {{ group?: string | null, agent_usable?: boolean }} body
   */
  const patch = useCallback((id, body) => {
    const key = String(id)
    const previous = accountsRef.current
    const target = previous.find((row) => String(row.id) === key)
    if (!target) return Promise.resolve(false)
    const optimistic = { ...target }
    if ('group' in body) {
      if (body.group === null || body.group === '') delete optimistic.group
      else optimistic.group = body.group
    }
    if (typeof body.agent_usable === 'boolean') optimistic.agent_usable = body.agent_usable
    commitAccounts(previous.map((row) => (String(row.id) === key ? optimistic : row)))
    return patchAccount(key, body).then((result) => {
      if (result.status === 401) {
        setPhase('need-login')
        return false
      }
      if (!result.ok) {
        commitAccounts(previous)
        setError(String((result.body && typeof result.body === 'object' && result.body.error) || `HTTP ${String(result.status)}`))
        return false
      }
      const bodyRow = result.body && typeof result.body === 'object' && /** @type {Record<string, unknown>} */ (result.body).account && typeof /** @type {Record<string, unknown>} */ (result.body).account === 'object'
        ? /** @type {Record<string, unknown>} */ (/** @type {Record<string, unknown>} */ (result.body).account)
        : null
      if (bodyRow) {
        commitAccounts(accountsRef.current.map((row) => (String(row.id) === key ? bodyRow : row)))
      }
      return true
    }).catch((caught) => {
      commitAccounts(previous)
      setError(caught instanceof Error ? caught.message : String(caught))
      return false
    })
  }, [commitAccounts])

  /**
   * @param {string} id
   */
  const disconnect = useCallback((id) => {
    const key = String(id)
    setBusy(key)
    setError('')
    return disconnectAccount(key).then((result) => {
      if (result.status === 401) {
        setPhase('need-login')
        return false
      }
      if (!result.ok) {
        setError(String((result.body && typeof result.body === 'object' && result.body.error) || `HTTP ${String(result.status)}`))
        return false
      }
      commitAccounts(accountsRef.current.filter((row) => String(row.id) !== key))
      return true
    }).catch((caught) => {
      setError(caught instanceof Error ? caught.message : String(caught))
      return false
    }).finally(() => {
      setBusy('')
    })
  }, [commitAccounts])

  return { phase, accounts, error, busy, refresh, connect, patch, disconnect }
}
