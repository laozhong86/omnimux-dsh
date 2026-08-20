export const DEFAULT_OFFICIAL = Object.freeze({
  mount: true,
})

/**
 * @param {unknown} value
 */
export function parseOfficialConfig(value) {
  if (value == null) return { ...DEFAULT_OFFICIAL }
  if (typeof value !== 'object' || Array.isArray(value)) {
    throw new Error('omnimux: official config must be an object')
  }
  const input = /** @type {Record<string, unknown>} */ (value)
  return {
    mount: input.mount !== false,
  }
}
