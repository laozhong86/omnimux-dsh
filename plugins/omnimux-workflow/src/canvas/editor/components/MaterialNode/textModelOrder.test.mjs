/**
 * Issue #302: 文本节点模型下拉顺序契约。
 * 空 catalog 回退（ConfigPanel）与 harness mock 必须与 seam TEXT_MODEL_IDS 同序，
 * 第一项为 gemini-3.7-flash，未选模型时 ConfigPanel 默认它。
 */
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const EXPECTED_IDS = [
  'gemini-3.7-flash',
  'claude-opus-4-6',
  'gpt-5.5',
  'gemini-3.1-pro-preview',
  'deepseek-v4-flash-vision-exp',
];

function extractQuotedIdsInOrder(src, ids) {
  const found = [];
  for (const id of ids) {
    const idx = src.indexOf(`'${id}'`);
    assert.notEqual(idx, -1, `missing model id ${id}`);
    found.push({ id, idx });
  }
  found.sort((a, b) => a.idx - b.idx);
  return found.map((row) => row.id);
}

test('ConfigPanel 空 catalog 回退按 3.7 / 4.6 / 5.5 / 3.1 / v4 flash 排序', () => {
  const src = readFileSync(join(here, 'ConfigPanel/index.tsx'), 'utf8');
  const textFallback = src.slice(src.indexOf("materialType === 'text'"), src.indexOf("materialType === 'image'"));
  assert.deepEqual(extractQuotedIdsInOrder(textFallback, EXPECTED_IDS), EXPECTED_IDS);
  assert.match(src, /params\.model === 'string' \? params\.model : modelOptions\[0\]/);
});

test('harness mock catalog 文本模型与 ConfigPanel 回退同序', () => {
  const src = readFileSync(join(here, '../../../harness/harness.tsx'), 'utf8');
  const textBlock = src.slice(src.indexOf('text: ['), src.indexOf('image: ['));
  assert.deepEqual(extractQuotedIdsInOrder(textBlock, EXPECTED_IDS), EXPECTED_IDS);
});

test('seam TEXT_MODEL_IDS 与下拉顺序一致且 3.7 Flash 为首项', () => {
  const src = readFileSync(
    join(here, '../../../../workflow/seam/omnimuxGateway.ts'),
    'utf8',
  );
  const block = src.slice(src.indexOf('const TEXT_MODEL_IDS'), src.indexOf('const MODEL_DISPLAY_NAMES'));
  assert.deepEqual(extractQuotedIdsInOrder(block, EXPECTED_IDS), EXPECTED_IDS);
});
