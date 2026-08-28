/**
 * Tests for Session-to-Workspace binding, dynamic systemPrompt, and smart tool defaults.
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const host = await import('../../dist/index.js');
const {
  sessionToWorkspaceId,
  isValidWorkspaceId,
  sanitizeSessionId,
  sessionIdFromExec,
  createWorkflowPrompt,
  resolveTargetWorkspaceId,
  registerWorkflowAgentSeats,
  createWorkspaceStore,
  createExecutionManager,
  NodeResultCache,
} = host;

function createHarness() {
  const dir = mkdtempSync(join(tmpdir(), 'omx-sess-ws-'));
  const workspacesDir = join(dir, 'workspaces');
  const executionsDir = join(dir, 'executions');
  const mediaDir = join(dir, 'media');
  mkdirSync(workspacesDir, { recursive: true });
  mkdirSync(executionsDir, { recursive: true });
  mkdirSync(mediaDir, { recursive: true });

  const store = createWorkspaceStore({ workspacesDir });
  const cache = new NodeResultCache();
  const executionManager = createExecutionManager({
    executionsDir,
    store,
    cache,
    mediaDir,
  });

  const registeredTools = new Map();
  const promptSections = [];

  const ctx = {
    tools: {
      register(spec) {
        registeredTools.set(spec.name, spec);
        return () => registeredTools.delete(spec.name);
      },
    },
    systemPrompt: {
      section(section) {
        promptSections.push(section);
        return () => {
          const idx = promptSections.indexOf(section);
          if (idx >= 0) promptSections.splice(idx, 1);
        };
      },
    },
  };

  const dispose = registerWorkflowAgentSeats(ctx, {
    store,
    executionManager,
    mediaDir,
  });

  return {
    dir,
    store,
    executionManager,
    registeredTools,
    promptSections,
    tool(name) {
      const t = registeredTools.get(name);
      if (!t) throw new Error(`tool ${name} not registered`);
      return t;
    },
    cleanup() {
      dispose();
      rmSync(dir, { recursive: true, force: true });
    },
  };
}

test('sessionToWorkspaceId: deterministic, valid hex format, sanitized', () => {
  const sess1 = 'session-da302087-382c-4dbd-963d-6ac35d730287';
  const ws1 = sessionToWorkspaceId(sess1);
  assert.equal(ws1, 'ws_1838ebf07452');
  assert.ok(isValidWorkspaceId(ws1));

  // Idempotent
  assert.equal(sessionToWorkspaceId(sess1), ws1);

  // Different session produces different workspace
  const sess2 = 'session-04220525-9cae-41ba-90b4-2d6da0e3b84c';
  const ws2 = sessionToWorkspaceId(sess2);
  assert.notEqual(ws1, ws2);
  assert.ok(isValidWorkspaceId(ws2));

  // Invalid / empty session returns undefined
  assert.equal(sessionToWorkspaceId(''), undefined);
  assert.equal(sessionToWorkspaceId(null), undefined);
  assert.equal(sessionToWorkspaceId(undefined), undefined);

  // Sanitization blocks path traversal
  assert.equal(sanitizeSessionId('../../etc/passwd'), '');
  assert.equal(sanitizeSessionId('session-valid_123.456'), 'session-valid_123.456');
});

test('sessionIdFromExec extracts from agent.session.id or process.env', () => {
  assert.equal(
    sessionIdFromExec({ agent: { session: { id: 'sess-abc-123' } } }),
    'sess-abc-123',
  );
  assert.equal(
    sessionIdFromExec({ agent: { session: { header: { id: 'sess-hdr-456' } } } }),
    'sess-hdr-456',
  );
  assert.equal(
    sessionIdFromExec({ agent: { id: 'sess-direct-789' } }),
    'sess-direct-789',
  );
});

test('createWorkflowPrompt dynamically renders active session and project context', () => {
  const dir = mkdtempSync(join(tmpdir(), 'omx-prompt-test-'));
  const metaDir = join(dir, '.omnimux');
  mkdirSync(metaDir, { recursive: true });
  writeFileSync(
    join(metaDir, 'project.json'),
    JSON.stringify({ id: 'proj-999', title: '爆款短剧第1季' }),
  );

  const assembleCtx = {
    agent: {
      cwd: dir,
      session: { id: 'session-da302087-382c-4dbd-963d-6ac35d730287' },
    },
  };

  const promptText = createWorkflowPrompt(assembleCtx);
  assert.ok(promptText.includes('[Active Session Canvas Context]'));
  assert.ok(promptText.includes('ws_1838ebf07452'));
  assert.ok(promptText.includes('爆款短剧第1季'));
  assert.ok(promptText.includes('proj-999'));
  assert.ok(promptText.includes('DO NOT call workflow_create'));

  // Without session, prompt still renders base instructions without breaking
  const barePrompt = createWorkflowPrompt({ agent: {} });
  assert.ok(barePrompt.includes('This workspace mounts the OmniMux workflow canvas'));
  assert.ok(!barePrompt.includes('[Active Session Canvas Context]'));

  rmSync(dir, { recursive: true, force: true });
});

test('resolveTargetWorkspaceId: explicit ID wins, then name, then session', () => {
  const h = createHarness();
  try {
    const created = h.store.create('短剧流程', 'ws_explicit123');

    // 1. Explicit ID
    const r1 = resolveTargetWorkspaceId(h.store, 'ws_explicit123', undefined, undefined);
    assert.equal(r1.workspaceId, 'ws_explicit123');

    // 2. Explicit name
    const r2 = resolveTargetWorkspaceId(h.store, undefined, '短剧流程', undefined);
    assert.equal(r2.workspaceId, 'ws_explicit123');

    // 3. Fallback from exec context
    const execCtx = { agent: { session: { id: 'session-da302087-382c-4dbd-963d-6ac35d730287' } } };
    const r3 = resolveTargetWorkspaceId(h.store, undefined, undefined, execCtx);
    assert.equal(r3.workspaceId, 'ws_1838ebf07452');
  } finally {
    h.cleanup();
  }
});

test('workflow_node_add, snapshot, connect without workspace_id operate on session canvas with auto-healing', async () => {
  const h = createHarness();
  try {
    const sessionId = 'session-da302087-382c-4dbd-963d-6ac35d730287';
    const expectedWsId = 'ws_1838ebf07452';
    const exec = { agent: { session: { id: sessionId } } };

    // 1. Add first node without workspace_id -> should auto-heal/create ws_1838ebf07452
    const addResult1 = await h.tool('workflow_node_add').execute(
      {
        material_type: 'text',
        label: '短剧大纲',
        prompt: '编写反转科幻短剧大纲',
      },
      exec,
    );
    assert.equal(addResult1.workspace.id, expectedWsId);
    assert.equal(addResult1.workspace.nodeCount, 1);
    const node1Id = addResult1.node.id;
    assert.ok(node1Id);

    // 2. Add second node without workspace_id
    const addResult2 = await h.tool('workflow_node_add').execute(
      {
        material_type: 'text',
        label: '分镜生成',
        prompt: '拆分镜头脚本',
      },
      exec,
    );
    assert.equal(addResult2.workspace.nodeCount, 2);
    const node2Id = addResult2.node.id;

    // 3. Connect nodes without workspace_id
    const connectResult = await h.tool('workflow_connect').execute(
      {
        source: node1Id,
        target: node2Id,
      },
      exec,
    );
    assert.equal(connectResult.workspace.id, expectedWsId);
    assert.equal(connectResult.edge.source, node1Id);
    assert.equal(connectResult.edge.target, node2Id);

    // 4. Snapshot without workspace_id
    const snapResult = await h.tool('workflow_snapshot').execute(
      {
        include_nodes: true,
      },
      exec,
    );
    assert.equal(snapResult.workspace.id, expectedWsId);
    assert.equal(snapResult.workspace.nodes.length, 2);
    assert.equal(snapResult.workspace.edges.length, 1);

    // 5. Update node without workspace_id
    const updateResult = await h.tool('workflow_node_update').execute(
      {
        node_id: node1Id,
        patch: { prompt: '更新后的大纲提示词' },
      },
      exec,
    );
    assert.equal(updateResult.node.data.prompt, '更新后的大纲提示词');

    // 6. Disconnect edge without workspace_id
    const disconnectResult = await h.tool('workflow_disconnect').execute(
      {
        source: node1Id,
        target: node2Id,
      },
      exec,
    );
    assert.equal(disconnectResult.removedEdges, 1);

    // 7. Remove node without workspace_id
    const removeResult = await h.tool('workflow_node_remove').execute(
      {
        node_ids: [node2Id],
      },
      exec,
    );
    assert.equal(removeResult.removedNodes, 1);
    assert.equal(removeResult.workspace.nodeCount, 1);
  } finally {
    h.cleanup();
  }
});
