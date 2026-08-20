/**
 * @param {{ withPat: Function }} client
 */
export function listAccounts(client) {
  return client.withPat('/api/social/v1/accounts')
}

/**
 * @param {{ withPat: Function }} client
 * @param {{ platform?: string, redirect_url?: string }} args
 */
export function connectAccount(client, args) {
  return client.withPat('/api/social/v1/connect', {
    method: 'POST',
    body: {
      platform: args.platform,
      redirect_url: args.redirect_url,
    },
  })
}

/**
 * @param {{ withPat: Function }} client
 * @param {{ id?: string }} args
 */
export function disconnectAccount(client, args) {
  const id = encodeURIComponent(String(args.id || ''))
  return client.withPat(`/api/social/v1/accounts/${id}`, { method: 'DELETE' })
}
