const GUARD_STATE = Symbol.for('omnimux.test.network-guard')

function isLoopback(url) {
  try {
    const parsed = new URL(url)
    return parsed.hostname === '127.0.0.1' || parsed.hostname === '::1' || parsed.hostname === 'localhost'
  } catch {
    return false
  }
}

function requestUrl(input) {
  if (typeof input === 'string' || input instanceof URL) return String(input)
  if (input && typeof input === 'object' && 'url' in input) return String(input.url)
  return String(input)
}

function installNetworkGuard() {
  if (globalThis[GUARD_STATE]) return globalThis[GUARD_STATE]
  const originalFetch = globalThis.fetch
  const state = {
    attempts: [],
    originalFetch,
  }
  globalThis.fetch = async (input, init) => {
    const url = requestUrl(input)
    if (isLoopback(url)) return originalFetch(input, init)
    state.attempts.push({
      url,
      method: typeof init?.method === 'string' ? init.method : 'GET',
    })
    const error = new Error(`omnimux test network guard blocked ${url}`)
    error.code = 'OMNIMUX_TEST_NETWORK_BLOCKED'
    throw error
  }
  globalThis[GUARD_STATE] = state
  return state
}

export function testNetworkAttempts() {
  return installNetworkGuard().attempts
}

export function resetTestNetworkAttempts() {
  installNetworkGuard().attempts.length = 0
}

installNetworkGuard()
