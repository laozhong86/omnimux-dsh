/**
 * Cross-plugin app opening. The hub never imports an app's client code;
 * an installed app listens for this event with its own catalog `id` and
 * claims the product stage itself.
 */

export const APP_OPEN_EVENT = 'dsh-omnimux-app-open'

/**
 * Ask an installed app to open its standalone page.
 * @param {string} id catalog app id, e.g. `accounts`
 * @param {Window} [target]
 */
export function openApp(id, target = window) {
  target.dispatchEvent(new CustomEvent(APP_OPEN_EVENT, { detail: { id } }))
}

/**
 * After dispatching, the app answers by claiming the product stage. When no
 * stage appears, the app client is not loaded yet (usually a pending Host
 * restart), so the caller should surface a restart hint instead of dead air.
 * @param {() => string | undefined} readStage current `data-dsh-product-stage`
 * @param {number} [timeoutMs]
 * @returns {Promise<boolean>} whether some app stage claimed the stage
 */
export function waitForStageClaim(readStage, timeoutMs = 600) {
  return new Promise((resolve) => {
    const started = Date.now()
    const poll = () => {
      const stage = readStage()
      if (typeof stage === 'string' && stage !== '' && stage !== 'omnimux-apps') {
        resolve(true)
        return
      }
      if (Date.now() - started >= timeoutMs) {
        resolve(false)
        return
      }
      setTimeout(poll, 60)
    }
    poll()
  })
}
