import { OmnimuxError } from '../media/errors.js'
import { connectAccount, disconnectAccount, listAccounts } from './accounts.js'
import { createOfficialClient } from './client.js'
import { createPost, getPost, presignMedia } from './publish.js'
import { fetchSocialData } from './social-data.js'

/**
 * @param {{
 *   tools: { register: (tool: object) => unknown },
 * }} ctx
 * @param {{
 *   hub: { official: { mount: boolean } },
 *   identity: { require: Function },
 *   store: { resolve: () => Promise<string | undefined> },
 *   siteBaseUrl: string,
 *   env?: Record<string, string | undefined>,
 *   fetcher?: typeof fetch,
 *   objectParams: Function,
 *   jsonOut: object,
 *   rethrow: (error: unknown) => never,
 * }} deps
 */
export function mountOfficial(ctx, deps) {
  if (!deps.hub.official.mount) return
  const env = deps.env ?? process.env
  const client = createOfficialClient({
    fetcher: deps.fetcher,
    siteBaseUrl: deps.siteBaseUrl,
    apiBaseUrl: (env.OMNIMUX_BASE_URL || 'https://api.omnimux.ai/v1').replace(/\/v1\/?$/, ''),
    resolveApiKey: () => env.OMNIMUX_API_KEY || env.OMNIMUX_TOKEN,
    async resolveAccess() {
      const profile = await deps.identity.require()
      const token = await deps.store.resolve()
      if (!token) {
        throw new OmnimuxError('needs-omnimux', 'sign in to OmniMux or set OMNIMUX_ACCESS_TOKEN')
      }
      return { token, userId: profile.id }
    },
  })

  /**
   * @param {string} name
   * @param {string} description
   * @param {Record<string, object>} fields
   * @param {(args: Record<string, unknown>) => Promise<unknown>} run
   */
  function tool(name, description, fields, run) {
    ctx.tools.register({
      name,
      description,
      parameters: deps.objectParams(fields),
      output: deps.jsonOut,
      async execute(args) {
        try {
          return await run(args)
        } catch (error) {
          if (error instanceof OmnimuxError) throw error
          return deps.rethrow(error)
        }
      },
    })
  }

  tool(
    'omnimux_social_data',
    'Fetch OmniMux social data. platform+capability must be a documented pair (tiktok/video, tiktok/user, instagram/post). Uses OMNIMUX_API_KEY. Pass url, id, or query.',
    {
      platform: { type: 'string', required: true, enum: ['tiktok', 'instagram'] },
      capability: { type: 'string', required: true, enum: ['video', 'user', 'post'] },
      url: { type: 'string' },
      id: { type: 'string' },
      query: { type: 'string' },
    },
    (args) => fetchSocialData(client, args),
  )

  tool(
    'omnimux_accounts_list',
    'List connected social accounts. Requires OmniMux sign-in. Does not store a local matrix.',
    {},
    () => listAccounts(client),
  )
  tool(
    'omnimux_accounts_connect',
    'Start connecting a social account. Returns auth_url. Requires OmniMux sign-in.',
    {
      platform: { type: 'string', required: true },
      redirect_url: { type: 'string' },
    },
    (args) => connectAccount(client, args),
  )
  tool(
    'omnimux_accounts_disconnect',
    'Disconnect a social account by id. Requires OmniMux sign-in.',
    { id: { type: 'string', required: true } },
    (args) => disconnectAccount(client, args),
  )
  tool(
    'omnimux_publish_presign',
    'Presign media for a social post. Requires OmniMux sign-in.',
    {
      filename: { type: 'string', required: true },
      content_type: { type: 'string' },
    },
    (args) => presignMedia(client, args),
  )
  tool(
    'omnimux_publish_create',
    'Create a social post via OmniMux. Requires OmniMux sign-in. Not a scheduling calendar.',
    {
      account_ids: { type: 'array' },
      content: { type: 'string' },
      media_items: { type: 'array' },
    },
    (args) => createPost(client, args),
  )
  tool(
    'omnimux_publish_get',
    'Get a social post by id. Requires OmniMux sign-in.',
    { id: { type: 'string', required: true } },
    (args) => getPost(client, args),
  )
}
