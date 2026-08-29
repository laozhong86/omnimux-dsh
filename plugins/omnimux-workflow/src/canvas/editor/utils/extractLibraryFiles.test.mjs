import { test } from 'node:test';
import assert from 'node:assert/strict';
import { extractLibraryFilesFromNodes } from './extractLibraryFiles.ts';

test('extractLibraryFilesFromNodes: 收录 realPath / mediaAssets.path / local-file URL', () => {
  const files = extractLibraryFilesFromNodes([
    { id: 'n1', data: { realPath: '/tmp/night.png', title: '夜景' } },
    { id: 'n2', data: { mediaAssets: [{ path: '/tmp/clip.mp4' }] } },
    {
      id: 'n3',
      data: { previewUrl: '/omnimux-workflow/api/local-file?path=%2Ftmp%2Fvoice.wav' },
    },
  ]);
  assert.deepEqual(files.map((file) => file.real_path), [
    '/tmp/night.png',
    '/tmp/clip.mp4',
    '/tmp/voice.wav',
  ]);
  assert.equal(files[0].original_name, '夜景');
});

test('extractLibraryFilesFromNodes: blob / 远程预览不入库', () => {
  const files = extractLibraryFilesFromNodes([
    { id: 'n1', data: { previewUrl: 'blob:http://localhost/abc' } },
    { id: 'n2', data: { mediaUrl: 'https://cdn.example/out.png' } },
    { id: 'n3', data: { content: 'plain text' } },
  ]);
  assert.deepEqual(files, []);
});
