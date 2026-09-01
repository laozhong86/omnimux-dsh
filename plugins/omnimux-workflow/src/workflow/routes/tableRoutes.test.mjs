import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync, mkdirSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createWorkspaceStore } from '../workspace/WorkspaceStore.ts';
import { createTableRoutes } from './tableRoutes.ts';

function createHarness() {
  const root = mkdtempSync(join(tmpdir(), 'table-routes-test-'));
  const workspacesDir = join(root, 'workspaces');
  mkdirSync(workspacesDir, { recursive: true });

  const workspaceStore = createWorkspaceStore({
    workspacesDir,
  });

  const ws = workspaceStore.create('Test WS');
  const tableRoutes = createTableRoutes(workspaceStore);

  return {
    root,
    workspaceStore,
    wsId: ws.id,
    tableRoutes,
    cleanup() {
      rmSync(root, { recursive: true, force: true });
    },
  };
}

test('tableRoutes: GET 404 on non-existent table', async () => {
  const { wsId, tableRoutes, cleanup } = createHarness();
  try {
    const res = await tableRoutes.tryHandle(
      'GET',
      `/omnimux-workflow/api/workspaces/${wsId}/tables/tbl_nonexistent`,
      { method: 'GET', url: `/omnimux-workflow/api/workspaces/${wsId}/tables/tbl_nonexistent` },
    );
    assert.ok(res);
    assert.equal(res.status, 404);
    assert.equal(res.body.error, 'table-not-found');
  } finally {
    cleanup();
  }
});

test('tableRoutes: PUT and GET table document with optimistic lock', async () => {
  const { wsId, tableRoutes, cleanup } = createHarness();
  try {
    const tableId = 'tbl_demo1';
    const sampleDoc = {
      version: 1,
      title: '剧本分镜表',
      columns: [
        { id: 'col_1', title: '分镜', type: 'text', visible: true, width: 200 },
      ],
      rows: [
        { id: 'row_1', cells: { col_1: '第1镜头' } },
        { id: 'row_2', cells: { col_1: '第2镜头' } },
      ],
    };

    // 1. Initial PUT (expectedRev: 0)
    const putRes1 = await tableRoutes.tryHandle(
      'PUT',
      `/omnimux-workflow/api/workspaces/${wsId}/tables/${tableId}`,
      {
        method: 'PUT',
        url: `/omnimux-workflow/api/workspaces/${wsId}/tables/${tableId}`,
        body: {
          expectedRev: 0,
          document: sampleDoc,
        },
      },
    );

    assert.ok(putRes1);
    assert.equal(putRes1.status, 200);
    assert.equal(putRes1.body.table.tableId, tableId);
    assert.equal(putRes1.body.table.contentRev, 1);
    assert.equal(putRes1.body.table.rowCount, 2);
    assert.equal(putRes1.body.table.title, '剧本分镜表');

    // 2. GET table
    const getRes = await tableRoutes.tryHandle(
      'GET',
      `/omnimux-workflow/api/workspaces/${wsId}/tables/${tableId}`,
      { method: 'GET', url: `/omnimux-workflow/api/workspaces/${wsId}/tables/${tableId}` },
    );

    assert.ok(getRes);
    assert.equal(getRes.status, 200);
    assert.equal(getRes.body.table.contentRev, 1);
    assert.equal(getRes.body.table.rowCount, 2);
    assert.equal(getRes.body.table.document.rows[0].cells['col_1'], '第1镜头');

    // 3. Concurrent PUT with stale expectedRev -> 409 version_conflict
    const putConflict = await tableRoutes.tryHandle(
      'PUT',
      `/omnimux-workflow/api/workspaces/${wsId}/tables/${tableId}`,
      {
        method: 'PUT',
        url: `/omnimux-workflow/api/workspaces/${wsId}/tables/${tableId}`,
        body: {
          expectedRev: 0, // Stale! Current is 1
          document: sampleDoc,
        },
      },
    );

    assert.ok(putConflict);
    assert.equal(putConflict.status, 409);
    assert.equal(putConflict.body.error, 'version_conflict');
    assert.equal(putConflict.body.currentRev, 1);

    // 4. PUT with matching expectedRev: 1 -> increments to 2
    const putRes2 = await tableRoutes.tryHandle(
      'PUT',
      `/omnimux-workflow/api/workspaces/${wsId}/tables/${tableId}`,
      {
        method: 'PUT',
        url: `/omnimux-workflow/api/workspaces/${wsId}/tables/${tableId}`,
        body: {
          expectedRev: 1,
          document: {
            ...sampleDoc,
            rows: [
              ...sampleDoc.rows,
              { id: 'row_3', cells: { col_1: '第3镜头' } },
            ],
          },
        },
      },
    );

    assert.ok(putRes2);
    assert.equal(putRes2.status, 200);
    assert.equal(putRes2.body.table.contentRev, 2);
    assert.equal(putRes2.body.table.rowCount, 3);

    // 5. DELETE table
    const delRes = await tableRoutes.tryHandle(
      'DELETE',
      `/omnimux-workflow/api/workspaces/${wsId}/tables/${tableId}`,
      { method: 'DELETE', url: `/omnimux-workflow/api/workspaces/${wsId}/tables/${tableId}` },
    );
    assert.ok(delRes);
    assert.equal(delRes.status, 200);

    // 6. GET after DELETE -> 404
    const getAfterDel = await tableRoutes.tryHandle(
      'GET',
      `/omnimux-workflow/api/workspaces/${wsId}/tables/${tableId}`,
      { method: 'GET', url: `/omnimux-workflow/api/workspaces/${wsId}/tables/${tableId}` },
    );
    assert.ok(getAfterDel);
    assert.equal(getAfterDel.status, 404);
  } finally {
    cleanup();
  }
});
