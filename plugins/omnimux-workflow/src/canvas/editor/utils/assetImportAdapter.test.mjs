/**
 * 资产侧栏 → 导入节点：路径字段优先级与 MIME 映射。
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  readAssetRealPath,
  draftFromAsset,
  classifyAssetImport,
} from './assetImportAdapter.ts';
import { planStandaloneImportNodes } from './resourcePickerPolicy.ts';

test('readAssetRealPath：real_path 优先于 files[0]', () => {
  assert.equal(
    readAssetRealPath({
      real_path: '/Users/me/hero.png',
      files: [{ path: '/Users/me/other.jpg' }],
    }),
    '/Users/me/hero.png',
  );
  assert.equal(
    readAssetRealPath({ realPath: '/Users/me/clip.mp4' }),
    '/Users/me/clip.mp4',
  );
  assert.equal(
    readAssetRealPath({ files: [{ real_path: '/Users/me/voice.wav' }] }),
    '/Users/me/voice.wav',
  );
  assert.equal(
    readAssetRealPath({ files: [{ path: '/Users/me/still.png' }] }),
    '/Users/me/still.png',
  );
  assert.equal(readAssetRealPath({ name: 'no-path' }), '');
  assert.equal(readAssetRealPath(null), '');
  assert.equal(readAssetRealPath(undefined), '');
});

test('classifyAssetImport：png / mp4 / wav 按文件名定 materialType', () => {
  const png = classifyAssetImport({ name: '截图.png', real_path: '/Users/me/截图.png' });
  assert.equal(png.ok, true);
  assert.equal(png.draft.materialType, 'image');
  assert.equal(png.draft.realPath, '/Users/me/截图.png');

  const mp4 = classifyAssetImport({ real_path: '/tmp/clip.mp4' });
  assert.equal(mp4.ok, true);
  assert.equal(mp4.draft.materialType, 'video');

  const wav = classifyAssetImport({ files: [{ real_path: '/tmp/voice.wav', original_name: 'voice.wav' }] });
  assert.equal(wav.ok, true);
  assert.equal(wav.draft.materialType, 'audio');
});

test('classifyAssetImport：角色包 type 不覆盖文件 MIME', () => {
  const result = classifyAssetImport({
    type: 'character',
    name: '女主',
    real_path: '/Users/me/hero.png',
  });
  assert.equal(result.ok, true);
  assert.equal(result.draft.materialType, 'image');
  assert.equal(result.draft.name, '女主');
});

test('classifyAssetImport：无路径 → needPath；pdf → unsupported', () => {
  assert.deepEqual(
    classifyAssetImport({ type: 'image', previewUrl: 'blob:abc', prompt: 'x' }),
    { ok: false, reason: 'needPath' },
  );
  assert.deepEqual(
    classifyAssetImport({ real_path: '/Users/me/notes.pdf' }),
    { ok: false, reason: 'unsupported' },
  );
  assert.equal(draftFromAsset({ previewUrl: 'https://cdn/x.png' }), null);
});

test('有路径的资产 draft 可经 planStandaloneImportNodes 落导入节点', () => {
  const draft = draftFromAsset({ name: 'hero.png', real_path: '/Users/me/hero.png' });
  const plan = planStandaloneImportNodes({ files: [draft], origin: { x: 40, y: 80 } });
  assert.equal(plan.hasWork, true);
  assert.equal(plan.addNodes.length, 1);
  assert.equal(plan.addNodes[0].data.nodeKind, 'import');
  assert.equal(plan.addNodes[0].data.selectedTool, 'import');
  assert.equal(plan.addNodes[0].data.realPath, '/Users/me/hero.png');
  assert.equal(plan.addNodes[0].data.materialType, 'image');
});
