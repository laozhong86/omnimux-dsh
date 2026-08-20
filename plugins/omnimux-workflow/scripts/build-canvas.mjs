/**
 * Build the canvas island bundle: src/canvas/index.tsx -> lib/canvas.js.
 *
 * React 19.2.8 + react-dom are BUNDLED IN (not external) — this is the
 * React-island strategy (plan §2.2 α): the island owns its own React
 * runtime and never exchanges elements/refs/context with the host React 18
 * tree. Format: IIFE with global `__omnimuxWorkflowCanvas`, lazy-loaded by
 * CanvasBridge via GET /omnimux-workflow/canvas.js.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as esbuild from 'esbuild'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const outFile = join(root, 'lib', 'canvas.js')

const result = await esbuild.build({
  absWorkingDir: root,
  entryPoints: ['src/canvas/index.tsx'],
  bundle: true,
  format: 'iife',
  platform: 'browser',
  target: 'es2020',
  jsx: 'automatic',
  globalName: '__omnimuxWorkflowCanvas',
  minify: true,
  write: false,
  logLevel: 'info',
  legalComments: 'none',
  loader: {
    '.css': 'text',
  },
  define: {
    'process.env.NODE_ENV': '"production"',
  },
})

const code = result.outputFiles[0]?.text
if (!code) throw new Error('esbuild produced no output')

mkdirSync(dirname(outFile), { recursive: true })
writeFileSync(outFile, code)
console.log(`wrote ${outFile} (${code.length} bytes)`)
