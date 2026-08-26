/**
 * PR2 agent write-tool tests: workflow_create / workflow_node_add /
 * workflow_node_update / workflow_node_remove / workflow_connect /
 * workflow_disconnect registered by mountWorkflowHost, exercised in-process
 * over a temp $DSH_HOME (mock gateway; no real model calls).
 *
 * Success paths: create, add (default + explicit tool/position/prompt),
 * update (label/prompt/tool/params/position), connect, disconnect (by id
 * and by endpoints), remove (cascading edges).
 * Error paths: bad material_type, tool/type mismatch, missing node, edge
 * validation rejection (type_contract), missing edge, unknown workspace.
 *
 * Runs against the built dist/index.js (node scripts/build-host.mjs first).
 */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const host = await import('../../dist/index.js');

function makeHarness() {
  const dir = mkdtempSync(join(tmpdir(), 'omnimux-graph-tools-'));
  const tools = [];
  const ctx = {
    tools: {
      register(tool) {
        tools.push(tool);
        return () => {};
      },
    },
    systemPrompt: { section() { return () => {}; } },
  };
  const dispose = host.mountWorkflowHost(ctx, {
    paths: {
      root: dir,
      workspacesDir: join(dir, 'workspaces'),
      executionsDir: join(dir, 'executions'),
      mediaDir: join(dir, 'media'),
    },
    gateway: host.createMockGateway({ minLatencyMs: 10, maxLatencyMs: 30 }),
  });
  const tool = (name) => {
    const found = tools.find((t) => t.name === name);
    if (!found) throw new Error(`tool ${name} not registered`);
    return found;
  };
  return {
    dir,
    tool,
    cleanup: () => {
      dispose();
      rmSync(dir, { recursive: true, force: true });
    },
  };
}

/** create a workspace + one text node, returning { wsId, textNode }. */
async function seed(h) {
  const created = await h.tool('workflow_create').execute({ name: '写工具测试' });
  const wsId = created.workspace.id;
  const added = await h.tool('workflow_node_add').execute({
    workspace_id: wsId,
    material_type: 'text',
  });
  assert.equal(added.error, undefined);
  return { wsId, textNode: added.node, version: added.workspace.version };
}

test('all six write tools are registered', () => {
  const h = makeHarness();
  try {
    for (const name of [
      'workflow_create',
      'workflow_node_add',
      'workflow_node_update',
      'workflow_node_remove',
      'workflow_connect',
      'workflow_disconnect',
    ]) {
      h.tool(name);
    }
  } finally {
    h.cleanup();
  }
});

test('workflow_create + node_add defaults: import tool for image, auto position', async () => {
  const h = makeHarness();
  try {
    const { wsId } = await seed(h);
    const added = await h.tool('workflow_node_add').execute({
      workspace_id: wsId,
      material_type: 'image',
    });
    assert.equal(added.node.data.selectedTool, 'import');
    assert.equal(added.node.data.materialType, 'image');
    assert.ok(added.node.position.x > 0);
    assert.equal(added.workspace.nodeCount, 2);
    assert.ok(added.workspace.version > 0);
  } finally {
    h.cleanup();
  }
});

test('node_add: explicit tool + position + prompt land on the node', async () => {
  const h = makeHarness();
  try {
    const { wsId } = await seed(h);
    const added = await h.tool('workflow_node_add').execute({
      workspace_id: wsId,
      material_type: 'image',
      tool: 'text-to-image',
      position: { x: 500, y: 300 },
      label: '海报图',
      prompt: '一只戴墨镜的猫',
    });
    assert.equal(added.node.data.selectedTool, 'text-to-image');
    assert.equal(added.node.data.prompt, '一只戴墨镜的猫');
    assert.equal(added.node.data.label, '海报图');
    assert.deepEqual(added.node.position, { x: 500, y: 300 });
  } finally {
    h.cleanup();
  }
});

test('node_add rejects a tool of the wrong material type', async () => {
  const h = makeHarness();
  try {
    const { wsId } = await seed(h);
    const bad = await h.tool('workflow_node_add').execute({
      workspace_id: wsId,
      material_type: 'image',
      tool: 'video-generation',
    });
    assert.equal(bad.error, 'invalid-args');
    const badType = await h.tool('workflow_node_add').execute({
      workspace_id: wsId,
      material_type: 'doc',
    });
    assert.equal(badType.error, 'invalid-args');
  } finally {
    h.cleanup();
  }
});

test('node_update patches prompt/tool/params/position; rejects unknown node', async () => {
  const h = makeHarness();
  try {
    const { wsId, textNode } = await seed(h);
    const updated = await h.tool('workflow_node_update').execute({
      workspace_id: wsId,
      node_id: textNode.id,
      patch: {
        prompt: '写一个开头',
        tool: 'text-to-text',
        params: { temperature: 0.7 },
        position: { x: 10, y: 20 },
        label: '编剧',
      },
    });
    assert.equal(updated.error, undefined);
    assert.equal(updated.node.data.prompt, '写一个开头');
    assert.equal(updated.node.data.selectedTool, 'text-to-text');
    assert.deepEqual(updated.node.data.params, { temperature: 0.7 });
    assert.deepEqual(updated.node.position, { x: 10, y: 20 });
    assert.equal(updated.node.data.label, '编剧');

    const missing = await h.tool('workflow_node_update').execute({
      workspace_id: wsId,
      node_id: 'nope',
      patch: { prompt: 'x' },
    });
    assert.equal(missing.error, 'node-not-found');

    const wrongTool = await h.tool('workflow_node_update').execute({
      workspace_id: wsId,
      node_id: textNode.id,
      patch: { tool: 'video-generation' },
    });
    assert.equal(wrongTool.error, 'invalid-args');

    const empty = await h.tool('workflow_node_update').execute({
      workspace_id: wsId,
      node_id: textNode.id,
      patch: {},
    });
    assert.equal(empty.error, 'invalid-args');
  } finally {
    h.cleanup();
  }
});

test('connect/disconnect: valid edge, duplicate rejection, type_contract', async () => {
  const h = makeHarness();
  try {
    const { wsId, textNode } = await seed(h);
    const image = await h.tool('workflow_node_add').execute({
      workspace_id: wsId,
      material_type: 'image',
      tool: 'text-to-image',
    });
    const linked = await h.tool('workflow_connect').execute({
      workspace_id: wsId,
      source: textNode.id,
      target: image.node.id,
    });
    assert.equal(linked.error, undefined);
    assert.equal(linked.workspace.edgeCount, 1);
    assert.equal(linked.edge.source, textNode.id);
    // DSH lossless JSON check: no undefined values on edge object
    assert.equal(Object.prototype.hasOwnProperty.call(linked.edge, 'sourceHandle'), false);

    const dup = await h.tool('workflow_connect').execute({
      workspace_id: wsId,
      source: textNode.id,
      target: image.node.id,
    });
    assert.equal(dup.error, 'mutation-rejected');
    assert.match(dup.message, /duplicate_edge/);

    // audio → image violates the type contract (image accepts text/image).
    const audio = await h.tool('workflow_node_add').execute({
      workspace_id: wsId,
      material_type: 'audio',
    });
    const bad = await h.tool('workflow_connect').execute({
      workspace_id: wsId,
      source: audio.node.id,
      target: image.node.id,
    });
    assert.equal(bad.error, 'mutation-rejected');
    assert.match(bad.message, /type_contract/);

    // disconnect by endpoints, then confirm reconnect works.
    const cut = await h.tool('workflow_disconnect').execute({
      workspace_id: wsId,
      source: textNode.id,
      target: image.node.id,
    });
    assert.equal(cut.removedEdges, 1);
    assert.equal(cut.workspace.edgeCount, 0);

    const relinked = await h.tool('workflow_connect').execute({
      workspace_id: wsId,
      source: textNode.id,
      target: image.node.id,
    });
    assert.equal(relinked.error, undefined);

    // disconnect by edge id.
    const cut2 = await h.tool('workflow_disconnect').execute({
      workspace_id: wsId,
      edge_ids: [relinked.edge.id],
    });
    assert.equal(cut2.removedEdges, 1);

    const noEdge = await h.tool('workflow_disconnect').execute({
      workspace_id: wsId,
      edge_ids: ['e-nope'],
    });
    assert.equal(noEdge.error, 'edge-not-found');
  } finally {
    h.cleanup();
  }
});

test('node_remove cascades edges; unknown ids envelope', async () => {
  const h = makeHarness();
  try {
    const { wsId, textNode } = await seed(h);
    const image = await h.tool('workflow_node_add').execute({
      workspace_id: wsId,
      material_type: 'image',
      tool: 'text-to-image',
    });
    await h.tool('workflow_connect').execute({
      workspace_id: wsId,
      source: textNode.id,
      target: image.node.id,
    });
    const removed = await h.tool('workflow_node_remove').execute({
      workspace_id: wsId,
      node_ids: [image.node.id],
    });
    assert.equal(removed.removedNodes, 1);
    assert.equal(removed.removedEdges, 1);
    assert.equal(removed.workspace.nodeCount, 1);

    const none = await h.tool('workflow_node_remove').execute({
      workspace_id: wsId,
      node_ids: ['ghost'],
    });
    assert.equal(none.error, 'node-not-found');
  } finally {
    h.cleanup();
  }
});

test('write tools envelope unknown workspaces (never throw)', async () => {
  const h = makeHarness();
  try {
    for (const [name, args] of [
      ['workflow_node_add', { workspace_id: 'ws_000000000000', material_type: 'text' }],
      ['workflow_node_update', { workspace_id: 'ws_000000000000', node_id: 'n', patch: { prompt: 'x' } }],
      ['workflow_node_remove', { workspace_id: 'ws_000000000000', node_ids: ['n'] }],
      ['workflow_connect', { workspace_id: 'ws_000000000000', source: 'a', target: 'b' }],
      ['workflow_disconnect', { workspace_id: 'ws_000000000000', edge_ids: ['e'] }],
    ]) {
      const result = await h.tool(name).execute(args);
      assert.equal(result.error, 'workspace-not-found', name);
    }
  } finally {
    h.cleanup();
  }
});

test('edited graph runs end-to-end (create → add → connect → run wait)', async () => {
  const h = makeHarness();
  try {
    const created = await h.tool('workflow_create').execute({ name: 'e2e' });
    const wsId = created.workspace.id;
    const text = await h.tool('workflow_node_add').execute({
      workspace_id: wsId,
      material_type: 'text',
      prompt: '一只猫的出场',
    });
    const image = await h.tool('workflow_node_add').execute({
      workspace_id: wsId,
      material_type: 'image',
      tool: 'text-to-image',
    });
    await h.tool('workflow_connect').execute({
      workspace_id: wsId,
      source: text.node.id,
      target: image.node.id,
    });
    const run = await h.tool('workflow_run').execute({
      workspace_id: wsId,
      wait: true,
      timeout_ms: 10_000,
    });
    assert.equal(run.status, 'completed');
    assert.equal(run.nodes.length, 2);
    assert.ok(run.nodes.every((row) => row.status === 'completed'));
  } finally {
    h.cleanup();
  }
});

test('PR4: workflow_execution_control pause → resume → cancel lifecycle', async () => {
  const dir = mkdtempSync(join(tmpdir(), 'omnimux-exec-control-'));
  const tools = [];
  const ctx = {
    tools: { register(t) { tools.push(t); return () => {}; } },
    systemPrompt: { section() { return () => {}; } },
  };
  const dispose = host.mountWorkflowHost(ctx, {
    paths: {
      root: dir,
      workspacesDir: join(dir, 'workspaces'),
      executionsDir: join(dir, 'executions'),
      mediaDir: join(dir, 'media'),
    },
    // Slow mock gateway so the execution stays live long enough to pause.
    gateway: host.createMockGateway({ minLatencyMs: 1500, maxLatencyMs: 2000 }),
  });
  const tool = (name) => tools.find((t) => t.name === name);
  try {
    const { wsId } = await seed({ tool });
    // text-editor finishes instantly (no gateway call) — add a generative
    // image node so the run stays live long enough to control.
    const image = await tool('workflow_node_add').execute({
      workspace_id: wsId,
      material_type: 'image',
      tool: 'text-to-image',
    });
    const started = await tool('workflow_run').execute({
      workspace_id: wsId,
      mode: 'subset',
      node_ids: [image.node.id],
    });
    const executionId = started.executionId;

    // Pause is only legal from RUNNING; the scheduler starts async — poll
    // the executions overview until the run leaves pending.
    const statusOf = async () => {
      const list = await tool('workflow_list').execute({ include_executions: true });
      return list.executions.find((row) => row.id === executionId)?.status ?? '';
    };
    {
      const deadline = Date.now() + 5000;
      while ((await statusOf()) === 'pending' && Date.now() < deadline) {
        await new Promise((resolve) => setTimeout(resolve, 25));
      }
    }

    const paused = await tool('workflow_execution_control').execute({
      execution_id: executionId,
      action: 'pause',
    });
    assert.equal(paused.ok, true);
    assert.equal(paused.status, 'paused');

    const resumed = await tool('workflow_execution_control').execute({
      execution_id: executionId,
      action: 'resume',
    });
    assert.equal(resumed.ok, true);

    // Cancel while paused: deterministic terminal state (no race with the
    // slow node completing after resume).
    await tool('workflow_execution_control').execute({ execution_id: executionId, action: 'pause' });
    const cancelled = await tool('workflow_execution_control').execute({
      execution_id: executionId,
      action: 'cancel',
    });
    assert.equal(cancelled.ok, true);
    // Cancel flips the status asynchronously (scheduler event) — poll the
    // executions overview until the terminal state lands.
    let terminal = '';
    const deadline = Date.now() + 5000;
    while (Date.now() < deadline) {
      const list = await tool('workflow_list').execute({ include_executions: true });
      terminal = list.executions.find((row) => row.id === executionId)?.status ?? '';
      if (terminal === 'cancelled') break;
      await new Promise((resolve) => setTimeout(resolve, 25));
    }
    assert.equal(terminal, 'cancelled');

    // Terminal executions reject further control with an envelope.
    const again = await tool('workflow_execution_control').execute({
      execution_id: executionId,
      action: 'cancel',
    });
    assert.equal(again.error, 'execution-control-failed');

    const missing = await tool('workflow_execution_control').execute({
      execution_id: 'no-such-execution',
      action: 'pause',
    });
    assert.equal(missing.error, 'execution-control-failed');

    const badAction = await tool('workflow_execution_control').execute({
      execution_id: executionId,
      action: 'yolo',
    });
    assert.equal(badAction.error, 'invalid-args');
  } finally {
    dispose();
    rmSync(dir, { recursive: true, force: true });
  }
});
