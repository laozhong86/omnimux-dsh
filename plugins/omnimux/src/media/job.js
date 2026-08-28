import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname } from 'node:path'
import { OmnimuxError } from './errors.js'

/**
 * @param {typeof fetch} fetcher
 * @param {string} url
 * @param {string} apiKey
 * @param {AbortSignal | undefined} signal
 */
export async function getJson(fetcher, url, apiKey, signal) {
  /** @type {Record<string, string>} */
  const headers = {
    accept: 'application/json',
    ...(apiKey && apiKey.trim() ? { authorization: `Bearer ${apiKey.trim()}` } : {}),
  }
  const response = await fetcher(url, {
    method: 'GET',
    headers,
    ...(signal ? { signal } : {}),
  })
  const json = await response.json()
  if (!response.ok) {
    throw new OmnimuxError('omnimux-request-failed', `GET ${url} failed: ${response.status}`)
  }
  return json
}

/**
 * @param {{ dest: string, url: string, fetcher?: typeof fetch, signal?: AbortSignal }} options
 */
export async function downloadMediaFile(options) {
  const url = options.url
  let buffer
  if (url.startsWith('data:')) {
    const comma = url.indexOf(',')
    const payload = comma >= 0 ? url.slice(comma + 1) : ''
    if (!payload) {
      throw new OmnimuxError('omnimux-download-failed', 'data URL has no payload')
    }
    buffer = Buffer.from(payload, 'base64')
  } else {
    const fetcher = options.fetcher ?? fetch
    const response = await fetcher(url, options.signal ? { signal: options.signal } : {})
    if (!response.ok) {
      throw new OmnimuxError('omnimux-download-failed', `download failed: ${response.status}`)
    }
    buffer = Buffer.from(await response.arrayBuffer())
  }
  mkdirSync(dirname(options.dest), { recursive: true })
  writeFileSync(options.dest, buffer)
}
