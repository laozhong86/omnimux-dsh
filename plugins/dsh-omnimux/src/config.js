import { parseBrandConfig } from './brand/config.js'
import { parseMediaConfig } from './media/route.js'
import { parseOfficialConfig } from './official/config.js'

/**
 * @param {unknown} value
 */
export function parseHubConfig(value) {
  const brand = parseBrandConfig(value)
  const raw = value && typeof value === 'object' && !Array.isArray(value)
    ? /** @type {Record<string, unknown>} */ (value)
    : {}
  return {
    ...brand,
    media: parseMediaConfig(raw.media),
    official: parseOfficialConfig(raw.official),
  }
}

/**
 * @type {{ '~standard': { version: 1, vendor: string, validate: (value: unknown) => { value: ReturnType<typeof parseHubConfig> } | { issues: Array<{ message: string }> } } }}
 */
export const Config = {
  '~standard': {
    version: 1,
    vendor: 'dsh-omnimux',
    validate(value) {
      try {
        return { value: parseHubConfig(value) }
      } catch (error) {
        return { issues: [{ message: error instanceof Error ? error.message : String(error) }] }
      }
    },
  },
}
