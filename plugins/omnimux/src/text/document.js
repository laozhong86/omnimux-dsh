import { extname } from 'node:path'
import { OmnimuxError } from '../media/errors.js'

const DOCUMENT_MIME_BY_EXTENSION = Object.freeze({
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  '.doc': 'application/msword',
  '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  '.xls': 'application/vnd.ms-excel',
  '.pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  '.ppt': 'application/vnd.ms-powerpoint',
  '.pdf': 'application/pdf',
  '.txt': 'text/plain',
  '.key': 'application/vnd.apple.keynote',
  '.pages': 'application/vnd.apple.pages',
  '.numbers': 'application/vnd.apple.numbers',
  '.md': 'text/markdown',
})

/**
 * Probe a public document URL without downloading the document body. APIMart
 * defines document formats by file kind, so a recognized URL extension is the
 * stable MIME source; Content-Length supplies the size gate.
 * @param {string} source
 * @param {{ fetcher?: typeof fetch, signal?: AbortSignal, maxDocumentBytes?: number }} [opts]
 */
export async function probeRemoteDocument(source, opts = {}) {
  const value = String(source || '').trim()
  let parsed
  try {
    parsed = new URL(value)
  } catch {
    throw new OmnimuxError('omnimux-invalid-request', 'document must be a public HTTP(S) URL')
  }
  if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
    throw new OmnimuxError('omnimux-invalid-request', 'document must be a public HTTP(S) URL')
  }
  const mime = DOCUMENT_MIME_BY_EXTENSION[extname(parsed.pathname).toLowerCase()]
  if (!mime) {
    throw new OmnimuxError('omnimux-invalid-request', 'document URL extension is not supported by APIMart')
  }
  const fetcher = opts.fetcher ?? fetch
  let response
  try {
    response = await fetcher(value, {
      method: 'HEAD',
      ...(opts.signal ? { signal: opts.signal } : {}),
    })
  } catch (error) {
    throw new OmnimuxError('omnimux-invalid-request', `failed to probe document: ${error instanceof Error ? error.message : String(error)}`)
  }
  if (!response.ok) {
    throw new OmnimuxError('omnimux-invalid-request', `document URL returned HTTP ${response.status}`)
  }
  const declaredHeader = response.headers?.get?.('content-length')
  const declared = typeof declaredHeader === 'string' && declaredHeader.trim() !== ''
    ? Number(declaredHeader)
    : Number.NaN
  if (!Number.isFinite(declared) || declared < 0) {
    throw new OmnimuxError('omnimux-invalid-request', 'document URL did not provide Content-Length')
  }
  const cap = opts.maxDocumentBytes
  if (typeof cap === 'number' && Number.isFinite(cap) && cap >= 0 && declared > cap) {
    throw new OmnimuxError('omnimux-invalid-request', `document exceeds ${cap} bytes`)
  }
  return { mime, sizeBytes: declared }
}

export const APIMART_DOCUMENT_MIMES = Object.freeze([...new Set(Object.values(DOCUMENT_MIME_BY_EXTENSION))])
