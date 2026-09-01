import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createWorkspaceStore } from '../workspace/WorkspaceStore.ts';
import { createCanvasWriteTableNodeTool, createCanvasGetTableNodeTool } from './tableTools.ts';
import { createWorkflowNodeRemoveTool } from './agentWriteTools.ts';
import { TableStorageService } from '../storage/TableStorageService.ts';

function createHarness() {
  const root = mkdtempSync(join(tmpdir(), 'table-agent-test-'));
  const store = createWorkspaceStore({ workspacesDir: join(root, 'workspaces') });
  const deps = {
    store,
    executionManager: {},
    mediaDir: join(root, 'media'),
  };
  return {
    root,
    store,
    deps,
    cleanup() {
      rmSync(root, { recursive: true, force: true });
    },
  };
}

test('tableTools: CREATE -> GET -> REPLACE -> REMOVE lifecycle with cascade file cleanup', async () => {
  const h = createHarness();
  try {
    const ws = h.store.create('表格测试画布');
    const writeTool = createCanvasWriteTableNodeTool(h.deps);
    const getTool = createCanvasGetTableNodeTool(h.deps);
    const removeTool = createWorkflowNodeRemoveTool(h.deps);

    // 1. CREATE Table Node
    const createRes = await writeTool.execute({
      workspace_id: ws.id,
      title: '短剧分镜表',
      columns: [
        { title: '场次', type: 'number' },
        { title: '景别', type: 'text' },
        { title: '台词', type: 'text' },
      ],
      rows: [
        { cells: [1, '全景', '阳光洒在古镇街道上'] },
        { cells: [2, '特写', '主角眼神坚定'] },
      ],
    });

    assert.equal(createRes.ok, true);
    assert.equal(createRes.created, true);
    assert.equal(createRes.rowCount, 2);
    assert.equal(createRes.columnCount, 3);
    const nodeId = createRes.nodeId;

    // Verify node is added to canvas graph in store
    const snapshotAfterCreate = h.store.get(ws.id);
    const tableNode = snapshotAfterCreate.nodes.find((n) => n.id === nodeId);
    assert.ok(tableNode);
    assert.equal(tableNode.type, 'table');
    assert.equal(tableNode.data.rowCount, 2);
    assert.equal(tableNode.data.status, 'ready');

    // Verify .htable file exists on disk
    const wsDir = join(h.root, 'workspaces', ws.id);
    const tablePath = TableStorageService.resolveTablePath(wsDir, nodeId);
    assert.equal(existsSync(tablePath), true);

    // 2. GET Table Node
    const getRes = await getTool.execute({
      workspace_id: ws.id,
      node_id: nodeId,
    });
    assert.equal(getRes.ok, true);
    assert.equal(getRes.tableContent.title, '短剧分镜表');
    assert.equal(getRes.tableContent.rows.length, 2);
    assert.deepEqual(getRes.tableContent.rows[0].cells, [1, '全景', '阳光洒在古镇街道上']);

    // 3. REPLACE Table Node
    const replaceRes = await writeTool.execute({
      workspace_id: ws.id,
      node_id: nodeId,
      title: '短剧分镜表 (v2)',
      columns: [
        { title: '场次', type: 'number' },
        { title: '景别', type: 'text' },
        { title: '台词', type: 'text' },
        { title: '备注', type: 'text' },
      ],
      rows: [
        { cells: [1, '全景', '阳光洒在古镇街道上', '晨光'] },
        { cells: [2, '特写', '主角眼神坚定', '逆光'] },
        { cells: [3, '中景', '配角推门而入', '带入动作'] },
      ],
    });
    assert.equal(replaceRes.ok, true);
    assert.equal(replaceRes.created, false);
    assert.equal(replaceRes.rowCount, 3);
    assert.equal(replaceRes.columnCount, 4);

    const snapshotAfterReplace = h.store.get(ws.id);
    const updatedNode = snapshotAfterReplace.nodes.find((n) => n.id === nodeId);
    assert.equal(updatedNode.data.rowCount, 3);
    assert.equal(updatedNode.data.columnCount, 4);
    assert.equal(updatedNode.data.label, '短剧分镜表 (v2)');

    // 4. REMOVE Node with cascade file cleanup
    const removeRes = await removeTool.execute({
      workspace_id: ws.id,
      node_ids: [nodeId],
    });
    assert.equal(removeRes.removedNodes, 1);

    const snapshotAfterRemove = h.store.get(ws.id);
    assert.equal(snapshotAfterRemove.nodes.some((n) => n.id === nodeId), false);
    // .htable file on disk should be cleanly removed
    assert.equal(existsSync(tablePath), false);
  } finally {
    h.cleanup();
  }
});
