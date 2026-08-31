/**
 * Issue #302: 文本节点模型下拉顺序契约。
 * 空 catalog 回退与非空 catalog（含 Host 旧序）都必须经 orderTextModels
 * 排成 3.7 / 4.6 / 5.5 / 3.1 / v4 flash；未选模型时 ConfigPanel 默认第一项。
 */
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { orderTextModels, TEXT_MODEL_ORDER } from '../../../../shared/textModelOrder.ts';

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

test('TEXT_MODEL_ORDER 规范序为 3.7 / 4.6 / 5.5 / 3.1 / v4 flash', () => {
  assert.deepEqual([...TEXT_MODEL_ORDER], EXPECTED_IDS);
});

test('orderTextModels：Host 旧 Claude 首项 catalog 重排为规范序', () => {
  const staleHostOrder = [
    { id: 'claude-opus-4-6', label: 'Claude 4.6' },
    { id: 'gemini-3.1-pro-preview', label: 'Gemini 3.1 Pro Preview' },
    { id: 'gemini-3.7-flash', label: 'Gemini 3.7 Flash' },
    { id: 'gpt-5.5', label: 'GPT-5.5' },
    { id: 'deepseek-v4-flash-vision-exp', label: 'DeepSeek 4 Flash' },
  ];
  assert.deepEqual(
    orderTextModels(staleHostOrder).map((row) => row.id),
    EXPECTED_IDS,
  );
});

test('orderTextModels：未知 id 保持原相对顺序接到已知 id 后面', () => {
  const rows = [
    { id: 'mystery-b' },
    { id: 'gpt-5.5' },
    { id: 'mystery-a' },
    { id: 'gemini-3.7-flash' },
    { id: 'claude-opus-4-6' },
  ];
  assert.deepEqual(
    orderTextModels(rows).map((row) => row.id),
    ['gemini-3.7-flash', 'claude-opus-4-6', 'gpt-5.5', 'mystery-b', 'mystery-a'],
  );
});

test('orderTextModels：空 / 非数组输入返回 [] 且不改原数组', () => {
  const original = [{ id: 'gpt-5.5' }, { id: 'gemini-3.7-flash' }];
  const snapshot = original.map((row) => row.id);
  const sorted = orderTextModels(original);
  assert.deepEqual(
    sorted.map((row) => row.id),
    ['gemini-3.7-flash', 'gpt-5.5'],
  );
  assert.deepEqual(
    original.map((row) => row.id),
    snapshot,
  );
  assert.deepEqual(orderTextModels([]), []);
  assert.deepEqual(orderTextModels(null), []);
  assert.deepEqual(orderTextModels(undefined), []);
});

test('ConfigPanel 空 catalog 回退按规范序，且 text 非空 catalog 也走 orderTextModels', () => {
  const src = readFileSync(join(here, 'ConfigPanel/index.tsx'), 'utf8');
  const textFallback = src.slice(src.indexOf("materialType === 'text'"), src.indexOf("materialType === 'image'"));
  assert.deepEqual(extractQuotedIdsInOrder(textFallback, EXPECTED_IDS), EXPECTED_IDS);
  assert.match(src, /from ['"]\.\.\/\.\.\/\.\.\/\.\.\/\.\.\/shared\/textModelOrder['"]/);
  assert.match(src, /orderTextModels/);
  assert.match(src, /if \(materialType === 'text'\) \{\s*rows = orderTextModels\(rows\);/s);
  assert.match(src, /params\.model === 'string' \? params\.model : modelOptions\[0\]/);
});

test('harness mock catalog 文本模型与 ConfigPanel 回退同序', () => {
  const src = readFileSync(join(here, '../../../harness/harness.tsx'), 'utf8');
  const textBlock = src.slice(src.indexOf('text: ['), src.indexOf('image: ['));
  assert.deepEqual(extractQuotedIdsInOrder(textBlock, EXPECTED_IDS), EXPECTED_IDS);
});

test('seam TEXT_MODEL_IDS 引用 TEXT_MODEL_ORDER，shared 常量为规范序', () => {
  const seamSrc = readFileSync(
    join(here, '../../../../workflow/seam/omnimuxGateway.ts'),
    'utf8',
  );
  assert.match(seamSrc, /from ['"]\.\.\/\.\.\/shared\/textModelOrder['"]/);
  assert.match(seamSrc, /const TEXT_MODEL_IDS: ReadonlyArray<string> = TEXT_MODEL_ORDER/);
  const sharedSrc = readFileSync(join(here, '../../../../shared/textModelOrder.ts'), 'utf8');
  const block = sharedSrc.slice(
    sharedSrc.indexOf('export const TEXT_MODEL_ORDER'),
    sharedSrc.indexOf('export type TextModelRow'),
  );
  assert.deepEqual(extractQuotedIdsInOrder(block, EXPECTED_IDS), EXPECTED_IDS);
});
