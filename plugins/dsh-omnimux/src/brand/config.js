/**
 * Host Config schema for the OmniMux brand overlay.
 * Deployment-varying brand strings and the logo document live here.
 * Standard Schema only — no schemastery import, so the local plugin resolves
 * without a workspace install.
 */

import { DEFAULT_CONFIG, DEFAULT_LOGO_SVG } from './defaults.js'

/**
 * @typedef {import('./defaults.js').BrandConfig} BrandConfig
 */

/**
 * Reject empty brand strings after defaults.
 * @param {BrandConfig} config Schema output.
 * @returns {BrandConfig} the same object when valid.
 */
export function assertBrandConfig(config) {
  if (config.productName.trim() === '') {
    throw new Error('dsh-omnimux: productName must be a non-empty string')
  }
  if (config.wordmarkText.trim() === '') {
    throw new Error('dsh-omnimux: wordmarkText must be a non-empty string')
  }
  if (!config.logoSvg.includes('<svg')) {
    throw new Error('dsh-omnimux: logoSvg must contain an <svg> document')
  }
  return config
}

/**
 * Fill defaults then validate.
 * @param {unknown} value Raw cordis.yml config.
 * @returns {BrandConfig} resolved config.
 */
export function parseBrandConfig(value) {
  if (value == null) return assertBrandConfig({ ...DEFAULT_CONFIG })
  if (typeof value !== 'object' || Array.isArray(value)) {
    throw new Error('dsh-omnimux: brand config must be an object')
  }
  const input = /** @type {Partial<BrandConfig>} */ (value)
  return assertBrandConfig({
    productName: input.productName ?? DEFAULT_CONFIG.productName,
    logoSvg: input.logoSvg ?? DEFAULT_LOGO_SVG,
    wordmarkText: input.wordmarkText ?? DEFAULT_CONFIG.wordmarkText,
    replaceHeroMark: input.replaceHeroMark ?? DEFAULT_CONFIG.replaceHeroMark,
    hidePreviewBadge: input.hidePreviewBadge ?? DEFAULT_CONFIG.hidePreviewBadge,
    rewriteWelcome: input.rewriteWelcome ?? DEFAULT_CONFIG.rewriteWelcome,
  })
}

/**
 * Cordis Standard Schema. Loader calls `Config['~standard'].validate`.
 * @type {{ '~standard': { version: 1, vendor: string, validate: (value: unknown) => { value: BrandConfig } | { issues: Array<{ message: string }> } } }}
 */
export const Config = {
  '~standard': {
    version: 1,
    vendor: 'dsh-omnimux',
    validate(value) {
      try {
        return { value: parseBrandConfig(value) }
      } catch (error) {
        return { issues: [{ message: error instanceof Error ? error.message : String(error) }] }
      }
    },
  },
}
