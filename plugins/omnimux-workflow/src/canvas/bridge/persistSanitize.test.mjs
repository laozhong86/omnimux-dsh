/**
 * 持久化消毒契约：选中 / measure / dragging 不得脏签名，也不得落盘。
 */
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { sanitizeEdges, sanitizeNodes, signatureOf } from './persistSanitize.ts';

const here = dirname(fileURLToPath(import.meta.url));

test('仅 selected 变化 → 签名不变', () => {
  const base = [
    {
      id: 'n1',
      type: 'material',
      position: { x: 10, y: 20 },
      data: { label: 'a', materialType: 'text' },
      selected: false,
    },
  ];
  const picked = [{ ...base[0], selected: true }];
  assert.equal(signatureOf(base, []), signatureOf(picked, []));
});

test('仅 measured / dragging / positionAbsolute 变化 → 签名不变', () => {
  const clean = [
    {
      id: 'n1',
      type: 'material',
      position: { x: 120, y: 120 },
      data: { label: '', materialType: 'text', nodeWidth: 325 },
    },
  ];
  const measured = [
    {
      ...clean[0],
      measured: { width: 325, height: 242 },
      dragging: true,
      positionAbsolute: { x: 120, y: 120 },
      resizing: false,
    },
  ];
  assert.equal(signatureOf(clean, []), signatureOf(measured, []));
});

test('sanitizeNodes 白名单：丢掉 measured/dragging，selected 强制 false，剥 __catalog', () => {
  const [out] = sanitizeNodes([
    {
      id: 'n1',
      type: 'material',
      position: { x: 1, y: 2 },
      data: { label: 'x', __catalog: { tools: [] } },
      selected: true,
      measured: { width: 100, height: 80 },
      dragging: true,
      positionAbsolute: { x: 1, y: 2 },
      width: 100,
      parentId: 'g1',
    },
  ]);
  assert.equal(out.selected, false);
  assert.equal(out.width, 100);
  assert.equal(out.parentId, 'g1');
  assert.equal('measured' in out, false);
  assert.equal('dragging' in out, false);
  assert.equal('positionAbsolute' in out, false);
  assert.equal('__catalog' in out.data, false);
  assert.equal(out.data.label, 'x');
});

test('sanitizeNodes 保留 extent: parent 与 parentId，供分组重开后约束子节点', () => {
  const [out] = sanitizeNodes([
    {
      id: 'child',
      type: 'material',
      position: { x: 32, y: 32 },
      data: { label: 'in-group' },
      parentId: 'group_1',
      extent: 'parent',
      measured: { width: 100, height: 80 },
    },
  ]);
  assert.equal(out.parentId, 'group_1');
  assert.equal(out.extent, 'parent');
  assert.equal('measured' in out, false);
});

test('sanitizeEdges 丢掉 selected，保留连接字段', () => {
  const [out] = sanitizeEdges([
    {
      id: 'e1',
      source: 'a',
      target: 'b',
      sourceHandle: 'out',
      targetHandle: 'in',
      type: 'animated',
      selected: true,
      animated: true,
    },
  ]);
  assert.equal(out.source, 'a');
  assert.equal(out.target, 'b');
  assert.equal(out.type, 'animated');
  assert.equal(out.animated, true);
  assert.equal('selected' in out, false);
});

test('sanitizeNodes 剥 blob:，有 realPath 时派生 local-file URL', () => {
  const [indexed] = sanitizeNodes([
    {
      id: 'n1',
      type: 'material',
      position: { x: 0, y: 0 },
      data: {
        materialType: 'image',
        realPath: '/Users/me/hero.png',
        mediaUrl: 'blob:http://localhost/abc',
        mediaAssets: [{ type: 'image', url: 'blob:http://localhost/abc' }],
      },
    },
  ]);
  assert.equal(indexed.data.realPath, '/Users/me/hero.png');
  assert.equal(String(indexed.data.mediaUrl).startsWith('blob:'), false);
  assert.match(String(indexed.data.mediaUrl), /\/api\/local-file\?path=/);
  assert.equal(indexed.data.mediaAssets[0].path, '/Users/me/hero.png');
  assert.match(String(indexed.data.mediaAssets[0].url), /\/omnimux-workflow\/api\/local-file\?path=/);
  assert.equal(String(indexed.data.mediaAssets[0].url).includes('blob:'), false);

  const [orphan] = sanitizeNodes([
    {
      id: 'n2',
      type: 'material',
      position: { x: 0, y: 0 },
      data: { mediaUrl: 'blob:orphan', mediaAssets: [{ type: 'image', url: 'blob:orphan' }] },
    },
  ]);
  assert.equal('mediaUrl' in orphan.data, false);
  assert.equal('mediaAssets' in orphan.data, false);
});

test('仅 nodeHeight / width / height 变化 → 签名不变', () => {
  const base = [
    {
      id: 'n1',
      type: 'material',
      position: { x: 0, y: 0 },
      data: { label: '', materialType: 'image', nodeWidth: 350 },
    },
  ];
  const measured = [
    {
      ...base[0],
      width: 350,
      height: 362,
      data: { ...base[0].data, nodeHeight: 362 },
    },
  ];
  assert.equal(signatureOf(base, []), signatureOf(measured, []));
});

test('剥 outputVideoUrl / thumbnailUrl 的 blob，签名与无 blob 一致', () => {
  const clean = [
    {
      id: 'n1',
      type: 'material',
      position: { x: 0, y: 0 },
      data: { label: '视频合成 - 导出产物', materialType: 'video', status: 'done' },
    },
  ];
  const withBlob = [
    {
      ...clean[0],
      data: {
        ...clean[0].data,
        outputVideoUrl: 'blob:http://127.0.0.1:45120/abc',
        thumbnailUrl: 'blob:http://127.0.0.1:45120/def',
      },
    },
  ];
  const [out] = sanitizeNodes(withBlob);
  assert.equal('outputVideoUrl' in out.data, false);
  assert.equal('thumbnailUrl' in out.data, false);
  assert.equal(signatureOf(clean, []), signatureOf(withBlob, []));
});

test('真位移 / 改 data 会变脏', () => {
  const a = signatureOf(
    [{ id: 'n1', type: 'material', position: { x: 0, y: 0 }, data: { label: '' } }],
    [],
  );
  const moved = signatureOf(
    [{ id: 'n1', type: 'material', position: { x: 40, y: 0 }, data: { label: '' } }],
    [],
  );
  const edited = signatureOf(
    [{ id: 'n1', type: 'material', position: { x: 0, y: 0 }, data: { label: 'hi' } }],
    [],
  );
  assert.notEqual(a, moved);
  assert.notEqual(a, edited);
});

test('源码契约：persistence 用 persistSanitize，不再本地展开 {...node}', () => {
  const persistSrc = readFileSync(join(here, 'useWorkspacePersistence.ts'), 'utf8');
  assert.match(persistSrc, /from '\.\/persistSanitize'/);
  assert.match(persistSrc, /from '\.\/persistConflict'/);
  assert.match(persistSrc, /decideRemoteVersionAdvance/);
  assert.match(persistSrc, /sanitizeNodes|signatureOf/);
  assert.equal(
    /function sanitizeNodes\(/.test(persistSrc),
    false,
    'sanitizeNodes 应迁到 persistSanitize.ts',
  );
  assert.equal(
    /\{\s*\.\.\.node,\s*data,\s*selected:\s*false\s*\}/.test(persistSrc),
    false,
    '禁止展开 node 把 measured 带回签名',
  );
});

test('源码契约：WorkspaceStore 落盘 zod cleaned，不是原始 next', () => {
  const storeSrc = readFileSync(
    join(here, '../../workflow/workspace/WorkspaceStore.ts'),
    'utf8',
  );
  assert.match(storeSrc, /const cleaned = strict\.data/);
  assert.match(storeSrc, /atomicWriteJson\(fileOf\(id\), cleaned\)/);
  assert.equal(
    /atomicWriteJson\(fileOf\(id\), next\)/.test(storeSrc),
    false,
    '不得把未 strip 的 next 写盘',
  );
});
