/**
 * Issue #314: canvas catalog rows sort by display name (A–Z).
 * Supersedes Issue #302 Claude-first whitelist ordering.
 */
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { sortCatalogRows } from '../../../../shared/sortCatalog.ts';

const here = dirname(fileURLToPath(import.meta.url));

test('sortCatalogRows：按 label A–Z，numeric collation，不改原数组', () => {
  const rows = [
    { id: 'b', label: 'Seedance 2.0' },
    { id: 'a', label: 'Claude Opus 4.6' },
    { id: 'c', label: 'Seedance 10' },
  ];
  const snapshot = rows.map((row) => row.id);
  assert.deepEqual(
    sortCatalogRows(rows).map((row) => row.label),
    ['Claude Opus 4.6', 'Seedance 2.0', 'Seedance 10'],
  );
  assert.deepEqual(rows.map((row) => row.id), snapshot);
  assert.deepEqual(sortCatalogRows([]), []);
  assert.deepEqual(sortCatalogRows(null), []);
});

test('ConfigPanel 不再硬编码假回退列表，也不再调用 orderTextModels', () => {
  const src = readFileSync(join(here, 'ConfigPanel/index.tsx'), 'utf8');
  assert.match(src, /sortCatalogRows/);
  assert.doesNotMatch(src, /orderTextModels/);
  assert.doesNotMatch(src, /nanobanana-2/);
  assert.doesNotMatch(src, /kling-o1/);
  assert.match(src, /defaults\?\.\[materialType\]/);
  assert.match(src, /deprecated/);
});

test('harness mock catalog 文本模型按 label A–Z', () => {
  const src = readFileSync(join(here, '../../../harness/harness.tsx'), 'utf8');
  const textBlock = src.slice(src.indexOf('text: ['), src.indexOf('image: ['));
  const labels = [...textBlock.matchAll(/label:\s*'([^']+)'/g)].map((m) => m[1]);
  assert.deepEqual(labels, [...labels].sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })));
});

test('seam capabilities 走 modelCatalog.list，不再引用 TEXT_MODEL_ORDER / SPECS', () => {
  const seamSrc = readFileSync(
    join(here, '../../../../workflow/seam/omnimuxGateway.ts'),
    'utf8',
  );
  assert.match(seamSrc, /modelCatalog/);
  assert.match(seamSrc, /\.list\(/);
  assert.doesNotMatch(seamSrc, /TEXT_MODEL_ORDER/);
  assert.doesNotMatch(seamSrc, /IMAGE_MODEL_SPECS/);
  assert.doesNotMatch(seamSrc, /VIDEO_MODEL_SPECS/);
});
