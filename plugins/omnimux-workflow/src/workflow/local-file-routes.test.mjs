/**
 * Native pick + local-file probe/stream. Picker is injected; no osascript.
 */
import assert from 'node:assert/strict';
import { mkdtempSync, realpathSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import { createLocalFileRoutes } from './routes/localFileRoutes.ts';
import { parseByteRange } from './byteRange.ts';
import { parsePickedPaths, pickNativePath, PickerError } from './picker.ts';

const local = { origin: 'http://127.0.0.1:43120' };

test('parseByteRange：bytes=0-1 与 suffix / 越界', () => {
  assert.deepEqual(parseByteRange('bytes=0-1', 10), { start: 0, end: 1 });
  assert.deepEqual(parseByteRange('bytes=8-', 10), { start: 8, end: 9 });
  assert.deepEqual(parseByteRange('bytes=-3', 10), { start: 7, end: 9 });
  assert.equal(parseByteRange('bytes=20-30', 10).invalid, true);
  assert.equal(parseByteRange(undefined, 10), null);
});

test('parsePickedPaths 拆 POSIX 行', () => {
  assert.deepEqual(parsePickedPaths('/a.png\n/b.mp4\n'), ['/a.png', '/b.mp4']);
});

test('pickNativePath：非 darwin 与取消', async () => {
  await assert.rejects(
    () => pickNativePath('file', { platform: 'linux' }),
    (error) => error instanceof PickerError && error.code === 'picker-unsupported',
  );
  const cancelled = await pickNativePath('file', {
    platform: 'darwin',
    run: async () => {
      throw Object.assign(new Error('User canceled. (-128)'), { stderr: '' });
    },
  });
  assert.deepEqual(cancelled, { path: null, paths: [] });
});

test('POST /api/pick 注入 picker，取消返回空数组', async () => {
  const routes = createLocalFileRoutes({
    picker: async () => ({ path: null, paths: [] }),
  });
  const result = await routes.tryHandle('POST', '/omnimux-workflow/api/pick', {
    method: 'POST',
    url: '/omnimux-workflow/api/pick',
    origin: local.origin,
    body: { kind: 'file' },
  });
  assert.equal(result.status, 200);
  assert.deepEqual(result.body, { path: null, paths: [] });
});

test('GET /api/local-file：相对路径 / 目录 / pdf / 合法文件', async () => {
  const dir = mkdtempSync(join(tmpdir(), 'wf-local-file-'));
  const png = join(dir, 'hero.png');
  const pdf = join(dir, 'notes.pdf');
  writeFileSync(png, 'PNG');
  writeFileSync(pdf, 'PDF');
  const routes = createLocalFileRoutes({ picker: async () => ({ path: null, paths: [] }) });
  const req = (path) => ({
    method: 'GET',
    url: `/omnimux-workflow/api/local-file?path=${encodeURIComponent(path)}`,
    origin: local.origin,
  });
  const relative = await routes.tryHandle('GET', '/omnimux-workflow/api/local-file', req('hero.png'));
  assert.equal(relative.status, 400);
  const folder = await routes.tryHandle('GET', '/omnimux-workflow/api/local-file', req(dir));
  assert.equal(folder.status, 400);
  const deniedType = await routes.tryHandle('GET', '/omnimux-workflow/api/local-file', req(pdf));
  assert.equal(deniedType.status, 415);
  const ok = await routes.tryHandle('GET', '/omnimux-workflow/api/local-file', req(png));
  assert.equal(ok.status, 200);
  assert.equal(ok.file, realpathSync(png));
  const remote = await routes.tryHandle('GET', '/omnimux-workflow/api/local-file', {
    ...req(png),
    origin: 'https://evil.example',
  });
  assert.equal(remote.status, 403);
  rmSync(dir, { recursive: true, force: true });
});

test('POST /api/local-file/probe 缺失仍 200，顺序对齐', async () => {
  const dir = mkdtempSync(join(tmpdir(), 'wf-probe-'));
  const png = join(dir, 'hero.png');
  writeFileSync(png, 'PNG');
  const routes = createLocalFileRoutes({ picker: async () => ({ path: null, paths: [] }) });
  const result = await routes.tryHandle('POST', '/omnimux-workflow/api/local-file/probe', {
    method: 'POST',
    url: '/omnimux-workflow/api/local-file/probe',
    origin: local.origin,
    body: { paths: [png, join(dir, 'gone.mp4')] },
  });
  assert.equal(result.status, 200);
  assert.equal(result.body.items[0].exists, true);
  assert.equal(result.body.items[0].path, png);
  assert.equal(result.body.items[1].exists, false);
  rmSync(dir, { recursive: true, force: true });
});
