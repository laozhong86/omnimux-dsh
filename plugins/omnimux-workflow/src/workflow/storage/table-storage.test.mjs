import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { TableStorageService } from './TableStorageService.ts';
import {
  tableDocumentToLlmContent,
  buildTableDocument,
  migrateLegacyTableDocument,
} from '../../shared/types/htable.ts';

test('TableStorageService: atomic save, load and validation', async () => {
  const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'htable-test-'));
  const targetFile = path.join(tmpDir, 'test_table.htable');

  // 1. 物理字典模型结构
  const sampleDoc = {
    version: 1,
    title: '测试分镜表',
    rowHeight: 'tall',
    columns: [
      { id: 'col_1', title: '分镜', type: 'text', visible: true, width: 200 },
      { id: 'col_2', title: '数字序号', type: 'number', visible: true, width: 100 },
      { id: 'col_3', title: '参考图', type: 'attachment', visible: true, width: 300 },
    ],
    rows: [
      {
        id: 'row_1',
        cells: {
          col_1: '镜头一：全景',
          col_2: 1,
          col_3: [{ assetId: 'ast_001', name: 'ref.png', kind: 'image' }],
        },
      },
      {
        id: 'row_2',
        cells: {
          col_1: '镜头二：特写',
          col_2: 2,
        },
      },
    ],
    filter: {
      match: 'all',
      conditions: [{ columnId: 'col_1', op: 'contains', value: '镜头' }],
    },
  };

  // 保存
  await TableStorageService.saveTable(targetFile, sampleDoc);
  const exists = await TableStorageService.exists(targetFile);
  assert.equal(exists, true, 'File should exist after atomic save');

  // 加载并验证内容
  const loaded = await TableStorageService.loadTable(targetFile);
  assert.equal(loaded.version, 1);
  assert.equal(loaded.title, '测试分镜表');
  assert.equal(loaded.rowHeight, 'tall');
  assert.equal(loaded.columns.length, 3);
  assert.equal(loaded.rows.length, 2);
  assert.deepEqual(loaded.rows[0].cells['col_3'], [
    { assetId: 'ast_001', name: 'ref.png', kind: 'image' },
  ]);
  assert.equal(loaded.rows[1].cells['col_1'], '镜头二：特写');

  // 2. 双向转换器测试
  const llmContent = tableDocumentToLlmContent(loaded);
  assert.equal(llmContent.columns.length, 3);
  assert.equal(llmContent.rows.length, 2);
  assert.deepEqual(llmContent.rows[0].cells, [
    '镜头一：全景',
    1,
    [{ assetId: 'ast_001', name: 'ref.png', kind: 'image' }],
  ]);
  assert.deepEqual(llmContent.rows[1].cells, ['镜头二：特写', 2, null]);
  assert.deepEqual(llmContent.filter, {
    match: 'all',
    conditions: [{ columnIndex: 0, op: 'contains', value: '镜头' }],
  });

  const reconstructed = buildTableDocument(llmContent);
  assert.equal(reconstructed.columns.length, 3);
  assert.equal(reconstructed.rows.length, 2);
  const col1Id = reconstructed.columns[0].id;
  const col2Id = reconstructed.columns[1].id;
  assert.equal(reconstructed.rows[0].cells[col1Id], '镜头一：全景');
  assert.equal(reconstructed.rows[1].cells[col2Id], 2);

  // 3. 历史老格式（cells 为数组）容错平滑迁移测试
  const legacyDoc = {
    version: 1,
    title: '旧版本表格',
    columns: [
      { id: 'c_a', title: 'A', type: 'text' },
      { id: 'c_b', title: 'B', type: 'number' },
    ],
    rows: [{ cells: ['旧数据A', 99] }],
    filter: { match: 'any', conditions: [{ columnIndex: 1, op: 'gt', value: 50 }] },
  };
  const migrated = migrateLegacyTableDocument(legacyDoc);
  assert.equal(migrated.rows[0].cells['c_a'], '旧数据A');
  assert.equal(migrated.rows[0].cells['c_b'], 99);
  assert.equal(migrated.filter?.conditions[0].columnId, 'c_b');

  // 4. 非法 Schema 拦截验证
  const invalidDoc = {
    version: 2, // 仅允许 version: 1
    columns: [],
    rows: [],
  };
  await assert.rejects(
    async () => {
      await TableStorageService.saveTable(targetFile, invalidDoc);
    },
    /Unsupported table document version|Invalid/i,
    'Should reject invalid document version'
  );

  // 清理
  await fs.rm(tmpDir, { recursive: true, force: true });
});
