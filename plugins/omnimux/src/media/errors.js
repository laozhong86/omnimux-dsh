export class OmnimuxError extends Error {
  /**
   * @param {string} code
   * @param {string} message
   */
  constructor(code, message) {
    super(message)
    this.name = 'OmnimuxError'
    this.code = code
  }
}
