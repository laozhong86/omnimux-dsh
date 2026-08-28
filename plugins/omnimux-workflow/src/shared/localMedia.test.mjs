/**
 * Local imported-media helpers: URL derivation, probe, MIME whitelist.
 */
import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  applyLocalMediaProbe,
  buildImportedMediaData,
  collectRealPaths,
  isAllowedImportedMedia,
  isBlobUrl,
  isLocalFileUrl,
  localFileMediaUrl,
  localFilePathFromUrl,
  looksAbsolutePath,
  materialTypeFromFilename,
} from './localMedia.ts';

test('localFileMediaUrl 编码绝对路径，禁止 blob', () => {
  const url = localFileMediaUrl('/Users/me/a b.png');
  assert.match(url, /^\/omnimux-workflow\/api\/local-file\?path=/);
  assert.equal(url.includes(' '), false);
  assert.equal(localFilePathFromUrl(url), '/Users/me/a b.png');
  assert.equal(isBlobUrl('blob:http://localhost/x'), true);
  assert.equal(isBlobUrl(url), false);
  assert.equal(isLocalFileUrl(url), true);
  assert.equal(isLocalFileUrl('blob:http://localhost/x'), false);
});

test('MIME / 扩展名白名单：媒体放行，pdf 拒绝', () => {
  assert.equal(materialTypeFromFilename('hero.png'), 'image');
  assert.equal(materialTypeFromFilename('clip.mp4'), 'video');
  assert.equal(materialTypeFromFilename('voice.wav'), 'audio');
  assert.equal(isAllowedImportedMedia('notes.pdf'), false);
  assert.equal(looksAbsolutePath('/tmp/a.png'), true);
  assert.equal(looksAbsolutePath('relative.png'), false);
  assert.equal(looksAbsolutePath('C:\\clips\\a.mp4'), true);
});

test('buildImportedMediaData 写入 realPath 且 mediaUrl 派生', () => {
  const data = buildImportedMediaData({
    realPath: '/Users/me/hero.png',
    name: 'hero.png',
    materialType: 'image',
    mime: 'image/png',
    size: 12,
  });
  assert.equal(data.realPath, '/Users/me/hero.png');
  assert.equal(data.status, 'ready');
  assert.equal(data.isMissing, false);
  assert.equal(data.mediaUrl.includes('blob:'), false);
  assert.equal(data.mediaAssets[0].path, '/Users/me/hero.png');
});

test('applyLocalMediaProbe：缺失 → offline，找回 → ready', () => {
  const nodes = [
    { id: 'n1', data: { realPath: '/gone.png', status: 'ready', isMissing: false } },
    { id: 'n2', data: { realPath: '/ok.png', status: 'offline', isMissing: true } },
    { id: 'n3', data: { mediaUrl: '/media/x.png' } },
  ];
  const next = applyLocalMediaProbe(nodes, [
    { path: '/gone.png', exists: false },
    { path: '/ok.png', exists: true, size: 8 },
  ]);
  assert.equal(next[0].data.status, 'offline');
  assert.equal(next[0].data.isMissing, true);
  assert.equal(next[1].data.status, 'ready');
  assert.equal(next[1].data.isMissing, false);
  assert.equal(next[2], nodes[2]);
  assert.deepEqual(collectRealPaths(nodes), ['/gone.png', '/ok.png']);
});
