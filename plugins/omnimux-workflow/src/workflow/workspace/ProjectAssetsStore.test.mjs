/**
 * Project-private assets.json store (Issue #166).
 * Seeds canvas.json as a dummy marker so tests do not import WorkspaceStore/zod.
 * Never copies or unlinks user sources.
 */
import assert from 'node:assert/strict';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import { WorkflowStoreError } from './WorkflowStoreError.ts';
import { createProjectAssetsStore } from './ProjectAssetsStore.ts';
import { createProjectAssetsRoutes } from '../routes/projectAssetsRoutes.ts';

const here = dirname(fileURLToPath(import.meta.url));
const pluginRoot = join(here, '../../..');

function seedWorkspace(workspacesDir, id = `ws_${Math.random().toString(16).slice(2, 14)}`) {
  mkdirSync(join(workspacesDir, id), { recursive: true });
  writeFileSync(join(workspacesDir, id, 'canvas.json'), '{"id":"marker"}\n', 'utf8');
  return id;
}

function makeRoot() {
  const dir = mkdtempSync(join(tmpdir(), 'wf-assets-json-'));
  const workspacesDir = join(dir, 'workspaces');
  mkdirSync(workspacesDir, { recursive: true });
  const assetsStore = createProjectAssetsStore({ workspacesDir });
  return {
    dir,
    workspacesDir,
    assetsStore,
    seed: (id) => seedWorkspace(workspacesDir, id),
    cleanup: () => rmSync(dir, { recursive: true, force: true }),
  };
}

test('1. schema 空文件/坏 JSON → 空文档 rev:0，不 404', () => {
  const root = makeRoot();
  try {
    const id = root.seed();
    const missing = root.assetsStore.get(id);
    assert.equal(missing.rev, 0);
    assert.deepEqual(missing.folders, []);
    assert.deepEqual(missing.items, []);
    assert.equal(missing.schemaVersion, 1);

    const file = join(root.workspacesDir, id, 'assets.json');
    writeFileSync(file, '{not-json', 'utf8');
    const broken = root.assetsStore.get(id);
    assert.equal(broken.rev, 0);
    assert.deepEqual(broken.folders, []);
    assert.deepEqual(broken.items, []);

    writeFileSync(file, '', 'utf8');
    const emptyFile = root.assetsStore.get(id);
    assert.equal(emptyFile.rev, 0);

    assert.throws(
      () => root.assetsStore.get('ws_doesnotexist'),
      (error) => error instanceof WorkflowStoreError && error.code === 'workspace-not-found',
    );
  } finally {
    root.cleanup();
  }
});

test('2. 原子写 + 错 expectedRev → 409 + current；不写 canvas.json', () => {
  const root = makeRoot();
  try {
    const id = root.seed();
    const canvasBefore = readFileSync(join(root.workspacesDir, id, 'canvas.json'), 'utf8');
    const created = root.assetsStore.mkdir(id, { name: '角色', expectedRev: 0 });
    assert.equal(created.rev, 1);
    const disk = JSON.parse(readFileSync(join(root.workspacesDir, id, 'assets.json'), 'utf8'));
    assert.equal(disk.rev, 1);
    assert.equal(disk.schemaVersion, 1);

    try {
      root.assetsStore.mkdir(id, { name: '场景', expectedRev: 0 });
      assert.fail('expected version_conflict');
    } catch (error) {
      assert.equal(error instanceof WorkflowStoreError, true);
      assert.equal(error.code, 'version_conflict');
      assert.equal(error.current, 1);
    }

    const canvasAfter = readFileSync(join(root.workspacesDir, id, 'canvas.json'), 'utf8');
    assert.equal(canvasAfter, canvasBefore);
  } finally {
    root.cleanup();
  }
});

test('3. blob: / 相对路径 / NUL PUT → 400', () => {
  const root = makeRoot();
  try {
    const id = root.seed();
    const payload = (real_path) => ({
      expectedRev: 0,
      folders: [],
      items: [{
        id: 'ast_blob1',
        name: 'hero.png',
        type: 'image',
        parentId: null,
        real_path,
        updatedAt: 1,
      }],
    });

    assert.throws(
      () => root.assetsStore.save(id, payload('blob:https://local/hero')),
      (error) => error instanceof WorkflowStoreError && error.code === 'blob-url-forbidden',
    );
    assert.throws(
      () => root.assetsStore.save(id, payload('relative/hero.png')),
      (error) => error instanceof WorkflowStoreError && error.code === 'invalid-path',
    );
    assert.throws(
      () => root.assetsStore.save(id, payload('/tmp/hero.png\0sneaky')),
      (error) => error instanceof WorkflowStoreError && error.code === 'invalid-path',
    );

    const dirPath = join(root.dir, 'a-directory');
    mkdirSync(dirPath);
    assert.throws(
      () => root.assetsStore.save(id, payload(dirPath)),
      (error) => error instanceof WorkflowStoreError && error.code === 'not-a-file',
    );
  } finally {
    root.cleanup();
  }
});

test('4. mkdir 同层重名 → 409 name-conflict', () => {
  const root = makeRoot();
  try {
    const id = root.seed();
    const first = root.assetsStore.mkdir(id, { name: '角色', expectedRev: 0 });
    assert.equal(first.folders.length, 1);
    assert.throws(
      () => root.assetsStore.mkdir(id, { name: '角色', expectedRev: first.rev }),
      (error) => error instanceof WorkflowStoreError && error.code === 'name-conflict',
    );
    const nested = root.assetsStore.mkdir(id, {
      name: '角色',
      parentId: first.folders[0].id,
      expectedRev: first.rev,
    });
    assert.equal(nested.folders.length, 2);
  } finally {
    root.cleanup();
  }
});

test('5. index 不 copy；delete 记录后源文件仍在', () => {
  const root = makeRoot();
  try {
    const id = root.seed();
    const source = join(root.dir, 'hero.png');
    writeFileSync(source, 'PNG-BYTES');
    const parent = root.assetsStore.mkdir(id, { name: 'A', expectedRev: 0 });
    const child = root.assetsStore.mkdir(id, {
      name: 'B',
      parentId: parent.folders.find((folder) => folder.name === 'A').id,
      expectedRev: parent.rev,
    });
    const folderB = child.folders.find((folder) => folder.name === 'B');
    const withFile = root.assetsStore.index(id, {
      paths: [source],
      parentId: folderB.id,
      expectedRev: child.rev,
    });
    assert.equal(withFile.items.length, 1);
    assert.equal(withFile.items[0].real_path, source);
    assert.equal(withFile.items.some((item) => item.parentId === folderB.id), true);
    assert.equal(existsSync(source), true);
    const siblingCopy = join(root.workspacesDir, id, 'hero.png');
    assert.equal(existsSync(siblingCopy), false);

    const folderA = withFile.folders.find((folder) => folder.name === 'A');
    const drop = new Set([
      folderA.id,
      folderB.id,
      ...withFile.items.filter((item) => item.parentId === folderB.id).map((item) => item.id),
    ]);
    const after = root.assetsStore.save(id, {
      expectedRev: withFile.rev,
      folders: withFile.folders.filter((folder) => !drop.has(folder.id)),
      items: withFile.items.filter((item) => !drop.has(item.id)),
    });
    assert.equal(after.folders.some((folder) => folder.name === 'A' || folder.name === 'B'), false);
    assert.equal(existsSync(source), true);
  } finally {
    root.cleanup();
  }
});

test('HTTP 路由模块：GET 空文档 / PUT blob 抛 blob-url-forbidden / mkdir 冲突', () => {
  const root = makeRoot();
  try {
    const id = root.seed();
    const routes = createProjectAssetsRoutes(root.assetsStore);
    const empty = routes.tryHandle('GET', `/omnimux-workflow/api/workspaces/${id}/assets`, {
      method: 'GET',
      url: `/omnimux-workflow/api/workspaces/${id}/assets`,
    });
    assert.equal(empty.status, 200);
    assert.equal(empty.body.assets.rev, 0);

    assert.throws(
      () => routes.tryHandle('PUT', `/omnimux-workflow/api/workspaces/${id}/assets`, {
        method: 'PUT',
        url: `/omnimux-workflow/api/workspaces/${id}/assets`,
        body: {
          expectedRev: 0,
          folders: [],
          items: [{
            id: 'ast_x',
            name: 'x.png',
            type: 'image',
            parentId: null,
            real_path: 'blob:https://local/x',
            updatedAt: 1,
          }],
        },
      }),
      (error) => error instanceof WorkflowStoreError && error.code === 'blob-url-forbidden',
    );

    const mkdir = routes.tryHandle('POST', `/omnimux-workflow/api/workspaces/${id}/assets/mkdir`, {
      method: 'POST',
      url: `/omnimux-workflow/api/workspaces/${id}/assets/mkdir`,
      body: { name: '道具', expectedRev: 0 },
    });
    assert.equal(mkdir.status, 200);
    assert.equal(mkdir.body.assets.folders[0].name, '道具');

    assert.throws(
      () => routes.tryHandle('POST', `/omnimux-workflow/api/workspaces/${id}/assets/mkdir`, {
        method: 'POST',
        url: `/omnimux-workflow/api/workspaces/${id}/assets/mkdir`,
        body: { name: '道具', expectedRev: mkdir.body.assets.rev },
      }),
      (error) => error instanceof WorkflowStoreError && error.code === 'name-conflict',
    );
  } finally {
    root.cleanup();
  }
});

test('8. 源码无「机甲」「Lora」当 type id、无 Mock「主角·艾拉」', () => {
  const files = [
    join(pluginRoot, 'src/canvas/editor/components/AssetsDrawer.tsx'),
    join(pluginRoot, 'src/canvas/editor/components/assets/views/SubjectLibraryView.tsx'),
    join(pluginRoot, 'src/canvas/editor/components/assets/views/ProjectAssetsView.tsx'),
    join(pluginRoot, 'src/canvas/bridge/assetsLibraryMapper.ts'),
    join(pluginRoot, 'src/canvas/bridge/assetsLibraryClient.ts'),
    join(pluginRoot, 'src/canvas/editor/hooks/useProjectAssets.ts'),
    join(pluginRoot, 'src/canvas/editor/hooks/useSubjectLibrary.ts'),
  ];
  const forbidden = ['主角·艾拉', "id: 'prop', label: '道具/机甲'", "id: 'style', label: '风格/Lora'", "tag: '机甲'", "tag: 'Lora'"];
  for (const file of files) {
    const source = readFileSync(file, 'utf8');
    for (const needle of forbidden) {
      assert.equal(source.includes(needle), false, `${file} 不得包含 ${needle}`);
    }
    assert.equal(/id:\s*['"]机甲['"]/.test(source), false, `${file} 不得把 机甲 当 type id`);
    assert.equal(/id:\s*['"]Lora['"]/.test(source), false, `${file} 不得把 Lora 当 type id`);
  }
});
