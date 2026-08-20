/**
 * @param {{ withPat: Function }} client
 * @param {{ filename?: string, content_type?: string }} args
 */
export function presignMedia(client, args) {
  return client.withPat('/api/social/v1/media/presign', {
    method: 'POST',
    body: {
      filename: args.filename,
      content_type: args.content_type,
    },
  })
}

/**
 * @param {{ withPat: Function }} client
 * @param {Record<string, unknown>} args
 */
export function createPost(client, args) {
  return client.withPat('/api/social/v1/posts', {
    method: 'POST',
    body: args,
  })
}

/**
 * @param {{ withPat: Function }} client
 * @param {{ id?: string }} args
 */
export function getPost(client, args) {
  const id = encodeURIComponent(String(args.id || ''))
  return client.withPat(`/api/social/v1/posts/${id}`)
}
