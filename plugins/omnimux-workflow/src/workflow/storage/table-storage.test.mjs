import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { TableStorageService } from './TableStorageService.ts';

test('TableStorageService: atomic save, load and validation', async () => {
  const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'htable-test-'));
  const targetFile = path.join(tmpDir, 'test_table.htable');

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
      { cells: ['镜头一：全景', 1, [{ assetId: 'ast_001', name: 'ref.png', kind: 'image' }]] },
      { cells: ['镜头二：特写', 2, []] },
    ],
    filter: {
      match: 'all',
      conditions: [{ columnIndex: 0, op: 'contains', value: '镜头' }],
    },
  };

  // 1. 保存
  await TableStorageService.saveTable(targetFile, sampleDoc);
  const exists = await TableStorageService.exists(targetFile);
  assert.equal(exists, true, 'File should exist after atomic save');

  // 2. 加载并验证内容
  const loaded = await TableStorageService.loadTable(targetFile);
  assert.equal(loaded.version, 1);
  assert.equal(loaded.title, '测试分镜表');
  assert.equal(loaded.rowHeight, 'tall');
  assert.equal(loaded.columns.length, 3);
  assert.equal(loaded.rows.length, 2);
  assert.deepEqual(loaded.rows[0].cells[2], [{ assetId: 'ast_001', name: 'ref.png', kind: 'image' }]);

  // 3. 非法 Schema 拦截验证
  const invalidDoc = {
    version: 2, // 仅允许 version: 1
    columns: [],
    rows: [],
  };
  await assert.rejects(
    async () => {
      await TableStorageService.saveTable(targetFile, invalidDoc);
    },
    /ZodError|Invalid/i,
    'Should reject invalid document schema'
  );

  // 清理
  await fs.rm(tmpDir, { recursive: true, force: true });
});
