#!/usr/bin/env node
import { fileURLToPath } from 'node:url'
import { runLiveQa } from './live-qa.mjs'

const root = fileURLToPath(new URL('..', import.meta.url))
const report = await runLiveQa(process.argv.slice(2), { root })
console.log(`${report.status === 'pending' ? 'PENDING' : 'FAIL'} live QA ${report.stage || '(missing stage)'}: ${report.errors.join('; ') || report.url}`)
console.log(`Report: ${report.evidenceDir}/live-qa-report.json${report.requestPath ? `\nRequest: ${report.requestPath}` : ''}`)
process.exitCode = report.status === 'pending' ? 2 : 1
