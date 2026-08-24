/**
 * Agent tool seats (M5): registers the workflow canvas tools on the cordis
 * `tools` seat plus the `workflow:ops` systemPrompt section, following the
 * proven omnimux-assets plugin pattern (ctx.tools.register + JSON-Schema
 * params + {error, message} error envelopes).
 *
 * Read/run tools, all host-side against the already assembled store /
 * executionManager (no extra HTTP calls, no hub imports):
 *   - workflow_list:     workspaces (+ optional recent executions overview)
 *   - workflow_run:      create an execution (full/subset); optional wait to
 *                        a terminal state with a bounded timeout
 *   - workflow_snapshot: workspace summary or the full node/edge structure
 *
 * PR2 structural write tools (same patterns, all mutations through the
 * shared graph core + GraphMutator optimistic-lock replay):
 *   - workflow_create:        new empty workspace
 *   - workflow_node_add:      add a material node (type/tool/position/prompt)
 *   - workflow_node_update:   patch node label/prompt/tool/params/position
 *   - workflow_node_remove:   remove nodes (cascading edges)
 *   - workflow_connect:       add a validated edge
 *   - workflow_disconnect:    remove edges by id or by endpoint pair
 *
 * Expected failures are RETURNED as { error, message } objects (never thrown)
 * so the wire shape is deterministic regardless of how the host surfaces
 * tool exceptions.
 */

import { join } from 'node:path';
import type { WorkspaceStore } from '../workspace/WorkspaceStore';
import type {
  ExecutionManager,
  ExecutionSnapshot,
} from '../execution/ExecutionManager';
import type { CanvasWorkspaceSnapshot } from '../../shared/canvasTypes';
import {
  normalizeNodeIds,
  resolveExecutionSubgraph,
  toExecutionMode,
} from '../execution/subgraph';
import { mutateWorkspaceGraph } from '../graph/GraphMutator';
import { createMaterialNode } from '../../shared/graph/nodeFactory.ts';
import {
  MATERIAL_TOOLS,
  DEFAULT_MATERIAL_TOOL,
  type MaterialType,
  type MaterialTool,
} from '../../shared/graph/materialNode.ts';
import type { CanvasInputMutation } from '../../shared/graph/canvasInputMutationGateway.ts';

// ============================================================================
// Seat shapes (cordis tools / systemPrompt, structural typing)
// ============================================================================

export interface AgentToolSpec {
  name: string;
  description: string;
  parameters: Record<string, unknown>;
  output: {
    schema: Record<string, unknown>;
    render: (args: unknown, value: unknown) => Array<{ type: string; text: string }>;
  };
  execute: (args: Record<string, unknown>) => Promise<unknown>;
}

export interface ToolsSeat {
  register: (tool: AgentToolSpec) => unknown;
}

export interface SystemPromptSeat {
  section: (spec: { name: string; order: number; text: string }) => unknown;
}

export interface AgentSeatContext {
  tools?: ToolsSeat;
  systemPrompt?: SystemPromptSeat;
  effect?: (fn: () => unknown, label?: string) => unknown;
}

export interface WorkflowAgentDeps {
  store: WorkspaceStore;
  executionManager: ExecutionManager;
  /** Plugin media root (absolute) — resolves media URLs to local paths. */
  mediaDir: string;
}

// ============================================================================
// Schema helper (assets-plugin pattern, TS strict)
// ============================================================================

type FieldSpec = Record<string, unknown> & { required?: boolean | string[] };

/** Compile a flat field table into a JSON Schema object. */
function objectParams(fields: Record<string, FieldSpec>): Record<string, unknown> {
  const properties: Record<string, unknown> = {};
  const required: string[] = [];
  for (const [key, spec] of Object.entries(fields)) {
    const { required: isRequired, ...rest } = spec;
    properties[key] = rest;
    // Only a boolean `true` marks the TOP-LEVEL field required; a string[]
    // belongs to a nested object schema and passes through untouched.
    if (isRequired === true) required.push(key);
  }
  return {
    type: 'object',
    properties,
    ...(required.length > 0 ? { required } : {}),
    additionalProperties: false,
  };
}

const jsonOut = {
  schema: { type: 'object', additionalProperties: true },
  render: (_args: unknown, value: unknown): Array<{ type: string; text: string }> => [
    { type: 'text', text: JSON.stringify(value, null, 2) },
  ],
};

// ============================================================================
// Small helpers
// ============================================================================

const TERMINAL_STATUSES = new Set<string>(['completed', 'error', 'cancelled']);

/** Poll interval for workflow_run wait mode. */
const RUN_POLL_INTERVAL_MS = 250;
/** Default wait timeout (120s, per the M5 spec). */
export const DEFAULT_RUN_WAIT_TIMEOUT_MS = 120_000;
/** Text excerpt cap for node outputs in run summaries. */
const TEXT_EXCERPT_CHARS = 240;
/** Executions overview cap for workflow_list. */
const LIST_EXECUTIONS_LIMIT = 5;

function errorBody(error: string, message: string): { error: string; message: string } {
  return { error, message };
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function readString(args: Record<string, unknown>, key: string): string | undefined {
  const value = args[key];
  return typeof value === 'string' && value.trim().length > 0 ? value.trim() : undefined;
}

function readBoolean(args: Record<string, unknown>, key: string): boolean {
  return args[key] === true;
}

/** Media URL (public route) -> absolute local path under the media root. */
function mediaUrlToPath(url: unknown, mediaDir: string): string | null {
  if (typeof url !== 'string' || url.length === 0) return null;
  const marker = '/media/';
  const index = url.indexOf(marker);
  if (index === -1 || !url.startsWith('/')) return null;
  return join(mediaDir, url.slice(index + marker.length));
}

interface NodeRunSummary {
  nodeId: string;
  label: string;
  type: string;
  status: string;
  error?: string;
  textExcerpt?: string;
  mediaAssets?: Array<{ type: unknown; url: unknown; path: string | null }>;
}

/** Build the per-node result summary from a terminal (or timed-out) snapshot. */
function summarizeNodes(
  workspace: CanvasWorkspaceSnapshot,
  nodeIds: ReadonlySet<string>,
  snapshot: ExecutionSnapshot,
  mediaDir: string,
): NodeRunSummary[] {
  const rows: NodeRunSummary[] = [];
  for (const node of workspace.nodes) {
    if (!nodeIds.has(node.id)) continue;
    const data = (node.data ?? {}) as Record<string, unknown>;
    const state = (snapshot.nodeStates[node.id] ?? {}) as Record<string, unknown>;
    const output = (snapshot.nodeOutputs[node.id] ?? {}) as Record<string, unknown>;
    const assets = Array.isArray(snapshot.mediaAssets[node.id])
      ? (snapshot.mediaAssets[node.id] as Array<Record<string, unknown>>)
      : [];

    const row: NodeRunSummary = {
      nodeId: node.id,
      label: typeof data.label === 'string' && data.label ? data.label : node.id,
      type: typeof node.type === 'string' ? node.type : 'unknown',
      status: typeof state.status === 'string' ? state.status : 'pending',
    };
    if (typeof state.error === 'string' && state.error) row.error = state.error;

    if (typeof output.text === 'string' && output.text) {
      row.textExcerpt =
        output.text.length > TEXT_EXCERPT_CHARS
          ? `${output.text.slice(0, TEXT_EXCERPT_CHARS)}…`
          : output.text;
    }
    if (assets.length > 0) {
      row.mediaAssets = assets.map((asset) => ({
        type: asset.type,
        url: asset.url,
        path: mediaUrlToPath(asset.url, mediaDir),
      }));
    }
    rows.push(row);
  }
  return rows;
}

/** Resolve a workspace by id (preferred) or exact unique name. */
function resolveWorkspace(
  store: WorkspaceStore,
  workspaceId: string | undefined,
  workspaceName: string | undefined,
): { snapshot: CanvasWorkspaceSnapshot } | { error: string; message: string } {
  if (workspaceId) {
    try {
      return { snapshot: store.get(workspaceId) };
    } catch {
      return errorBody('workspace-not-found', `workspace ${workspaceId} not found`);
    }
  }
  if (workspaceName) {
    const matches = store.list().filter((row) => row.name === workspaceName);
    const first = matches[0];
    if (matches.length === 0 || !first) {
      return errorBody('workspace-not-found', `no workspace named "${workspaceName}"`);
    }
    if (matches.length > 1) {
      return errorBody(
        'ambiguous-workspace-name',
        `multiple workspaces named "${workspaceName}" — pass workspaceId instead`,
      );
    }
    try {
      return { snapshot: store.get(first.id) };
    } catch {
      return errorBody('workspace-not-found', `workspace ${first.id} not found`);
    }
  }
  return errorBody(
    'invalid-args',
    'pass workspaceId (preferred, from workflow_list) or workspaceName',
  );
}

async function waitForTerminal(
  executionManager: ExecutionManager,
  executionId: string,
  timeoutMs: number,
): Promise<{ snapshot: ExecutionSnapshot | null; timedOut: boolean }> {
  const deadline = Date.now() + timeoutMs;
  for (;;) {
    const snapshot = executionManager.getSnapshot(executionId);
    if (!snapshot) return { snapshot: null, timedOut: false };
    if (TERMINAL_STATUSES.has(snapshot.status)) return { snapshot, timedOut: false };
    if (Date.now() >= deadline) return { snapshot, timedOut: true };
    await sleep(RUN_POLL_INTERVAL_MS);
  }
}

// ============================================================================
// Tool implementations
// ============================================================================

function createWorkflowListTool(deps: WorkflowAgentDeps): AgentToolSpec {
  const { store, executionManager } = deps;
  return {
    name: 'workflow_list',
    description:
      'List the workflow infinite-canvas workspaces of the omnimux-workflow plugin (id, name, version, nodeCount, updatedAt), newest first. Set includeExecutions=true to also get the 5 most recent executions (current process) with status and progress. Read-only. Use workflow_snapshot to inspect one workspace and workflow_run to execute it.',
    parameters: objectParams({
      include_executions: {
        type: 'boolean',
        description: 'Also include the 5 most recent executions (status + progress overview)',
      },
    }),
    output: jsonOut,
    async execute(args) {
      const workspaces = store.list();
      if (!readBoolean(args, 'include_executions')) {
        return { workspaces };
      }
      const executions = executionManager
        .listExecutions()
        .slice(0, LIST_EXECUTIONS_LIMIT);
      return { workspaces, executions };
    },
  };
}

function createWorkflowRunTool(deps: WorkflowAgentDeps): AgentToolSpec {
  const { store, executionManager, mediaDir } = deps;
  return {
    name: 'workflow_run',
    description:
      'Run a workflow canvas (node DAG) on the omnimux-workflow execution engine. mode "full" runs every node; mode "subset" runs only the given nodeIds plus their transitive upstream closure. wait=false (default) returns the executionId immediately — the user can watch live progress on the canvas (per-node badges + SSE). wait=true polls until a terminal status (completed/error/cancelled) or the timeout (default 120s) and returns per-node statuses, text excerpts and media file paths. The canvas performs generation through the OmniMux gateway (real hub seams when available, mock otherwise).',
    parameters: objectParams({
      workspace_id: {
        type: 'string',
        description: 'Workspace id (preferred — from workflow_list), e.g. ws_0123456789ab',
      },
      workspace_name: {
        type: 'string',
        description: 'Exact workspace name (fallback when the id is unknown; must be unique)',
      },
      mode: {
        type: 'string',
        enum: ['full', 'subset'],
        description: 'Execution scope: full (default) or subset (nodeIds + upstream closure)',
      },
      node_ids: {
        type: 'array',
        items: { type: 'string' },
        description: 'Required for subset mode: node ids to execute (upstream nodes are added automatically)',
      },
      wait: {
        type: 'boolean',
        description: 'Wait for a terminal status (bounded by timeout_ms) and return the result summary',
      },
      timeout_ms: {
        type: 'number',
        description: 'wait=true polling budget in milliseconds (default 120000)',
      },
    }),
    output: jsonOut,
    async execute(args) {
      const workspaceId = readString(args, 'workspace_id');
      const workspaceName = readString(args, 'workspace_name');
      const resolved = resolveWorkspace(store, workspaceId, workspaceName);
      if ('error' in resolved) return resolved;
      const workspace = resolved.snapshot;

      let mode: 'full' | 'subset';
      try {
        mode = toExecutionMode(args.mode);
      } catch (error) {
        return errorBody(
          'invalid-args',
          error instanceof Error ? error.message : String(error),
        );
      }

      const nodeIds = normalizeNodeIds(args.node_ids);
      let subgraph;
      try {
        subgraph = resolveExecutionSubgraph({
          nodes: workspace.nodes as Array<{ id: string; [key: string]: unknown }>,
          edges: workspace.edges as Array<{ source: string; target: string; [key: string]: unknown }>,
          executionMode: mode,
          nodeIds,
        });
      } catch (error) {
        return errorBody(
          'invalid-subgraph',
          error instanceof Error ? error.message : String(error),
        );
      }
      if (subgraph.nodes.length === 0) {
        return errorBody('empty-graph', `workspace ${workspace.id} has no nodes to execute`);
      }

      const entry = executionManager.createExecution({
        workspaceId: workspace.id,
        nodes: subgraph.nodes as unknown as Array<{ id: string; type: string; data?: Record<string, unknown> }>,
        edges: subgraph.edges as unknown as Array<{ source: string; target: string }>,
        maxParallel: workspace.settings.maxParallel,
      });
      const executionId = entry.context.id;

      if (!readBoolean(args, 'wait')) {
        return {
          executionId,
          workspaceId: workspace.id,
          workspaceName: workspace.name,
          mode,
          totalNodes: subgraph.nodes.length,
          maxParallel: workspace.settings.maxParallel,
          status: entry.context.status,
          hint:
            'Execution started in the background — the user can watch live per-node progress on the canvas. Call workflow_snapshot / workflow_list(include_executions=true) or re-run with wait=true to fetch the outcome.',
        };
      }

      const timeoutMs =
        typeof args.timeout_ms === 'number' && args.timeout_ms > 0
          ? Math.floor(args.timeout_ms)
          : DEFAULT_RUN_WAIT_TIMEOUT_MS;
      const { snapshot: final, timedOut } = await waitForTerminal(
        executionManager,
        executionId,
        timeoutMs,
      );
      if (!final) {
        return errorBody('execution-not-found', `execution ${executionId} disappeared`);
      }

      const durationMs =
        final.completedAt !== null && final.startedAt !== null
          ? final.completedAt - final.startedAt
          : null;
      return {
        executionId,
        workspaceId: workspace.id,
        workspaceName: workspace.name,
        mode,
        totalNodes: subgraph.nodes.length,
        status: final.status,
        timedOut,
        error: final.error,
        progress: final.progress,
        ...(durationMs !== null ? { durationMs } : {}),
        nodes: summarizeNodes(workspace, subgraph.nodeIdSet, final, mediaDir),
        ...(timedOut
          ? { hint: `Still not terminal after ${String(timeoutMs)}ms — the run continues in the background; retry workflow_run or check the canvas.` }
          : {}),
      };
    },
  };
}

function createWorkflowSnapshotTool(deps: WorkflowAgentDeps): AgentToolSpec {
  const { store } = deps;
  return {
    name: 'workflow_snapshot',
    description:
      'Read the current state of one workflow canvas workspace. Default: a compact summary (name, version, node/edge counts, node type/material breakdown, execution settings). includeNodes=true returns the FULL node and edge structure (positions, prompts, tools, models, connections) so the graph can be analyzed or modification advice given. Read-only. Data lives under $DSH_HOME/omnimux/workflow/workspaces/<id>/canvas.json.',
    parameters: objectParams({
      workspace_id: {
        type: 'string',
        required: true,
        description: 'Workspace id (from workflow_list), e.g. ws_0123456789ab',
      },
      include_nodes: {
        type: 'boolean',
        description: 'Return the full nodes/edges structure instead of the compact summary',
      },
    }),
    output: jsonOut,
    async execute(args) {
      const workspaceId = readString(args, 'workspace_id');
      if (!workspaceId) {
        return errorBody('invalid-args', 'workspace_id is required');
      }
      let workspace: CanvasWorkspaceSnapshot;
      try {
        workspace = store.get(workspaceId);
      } catch {
        return errorBody('workspace-not-found', `workspace ${workspaceId} not found`);
      }

      if (readBoolean(args, 'include_nodes')) {
        return { workspace };
      }

      const nodeTypeCounts: Record<string, number> = {};
      const materialCounts: Record<string, number> = {};
      for (const node of workspace.nodes) {
        const data = (node.data ?? {}) as Record<string, unknown>;
        const type = typeof node.type === 'string' ? node.type : 'unknown';
        nodeTypeCounts[type] = (nodeTypeCounts[type] ?? 0) + 1;
        const material = typeof data.materialType === 'string' ? data.materialType : 'unknown';
        materialCounts[material] = (materialCounts[material] ?? 0) + 1;
      }
      return {
        summary: {
          id: workspace.id,
          name: workspace.name,
          version: workspace.version,
          nodeCount: workspace.nodes.length,
          edgeCount: workspace.edges.length,
          nodeTypeCounts,
          materialCounts,
          settings: workspace.settings,
          metadata: workspace.metadata,
        },
        hint: 'Pass include_nodes=true for the full node/edge structure.',
      };
    },
  };
}

// ============================================================================
// PR2 structural write tools
// ============================================================================

const MATERIAL_TYPE_ENUM = ['text', 'image', 'video', 'audio'];

function workspaceSummary(workspace: CanvasWorkspaceSnapshot): Record<string, unknown> {
  return {
    id: workspace.id,
    name: workspace.name,
    version: workspace.version,
    nodeCount: workspace.nodes.length,
    edgeCount: workspace.edges.length,
  };
}

/**
 * Validate a tool for a material type. Returns the tool string on success
 * (default when omitted) or an error envelope.
 */
function resolveTool(
  materialType: MaterialType,
  tool: unknown,
): { tool: MaterialTool } | { error: string; message: string } {
  if (tool === undefined) return { tool: DEFAULT_MATERIAL_TOOL[materialType] };
  const valid = MATERIAL_TOOLS[materialType] as readonly string[];
  if (typeof tool !== 'string' || !valid.includes(tool)) {
    return errorBody(
      'invalid-args',
      `tool must be one of ${valid.join(', ')} for material_type ${materialType} (got ${JSON.stringify(tool)})`,
    );
  }
  return { tool: tool as MaterialTool };
}

function readPosition(args: Record<string, unknown>): { x: number; y: number } | undefined {
  const raw = args.position;
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return undefined;
  const pos = raw as Record<string, unknown>;
  if (typeof pos.x !== 'number' || typeof pos.y !== 'number') return undefined;
  return { x: pos.x, y: pos.y };
}

/** Default placement: right of the rightmost node, same row cadence as the user flow. */
function defaultNodePosition(snapshot: CanvasWorkspaceSnapshot): { x: number; y: number } {
  if (snapshot.nodes.length === 0) return { x: 120, y: 120 };
  const maxX = Math.max(...snapshot.nodes.map((node) => node.position.x));
  return { x: maxX + 420, y: 120 };
}

function createWorkflowCreateTool(deps: WorkflowAgentDeps): AgentToolSpec {
  const { store } = deps;
  return {
    name: 'workflow_create',
    description:
      'Create a new empty workflow canvas workspace and return it (id, name, version). Follow up with workflow_node_add / workflow_connect to build the graph, and workflow_run to execute it.',
    parameters: objectParams({
      name: {
        type: 'string',
        description: 'Workspace name (max 200 chars; default 未命名工作流)',
      },
    }),
    output: jsonOut,
    async execute(args) {
      try {
        const workspace = store.create(readString(args, 'name'));
        return { workspace };
      } catch (error) {
        return errorBody(
          'invalid-args',
          error instanceof Error ? error.message : String(error),
        );
      }
    },
  };
}

function createWorkflowNodeAddTool(deps: WorkflowAgentDeps): AgentToolSpec {
  const { store } = deps;
  return {
    name: 'workflow_node_add',
    description:
      'Add a material node to a workflow canvas. material_type picks the node kind; tool picks what the node does and must be valid for that type — text: text-editor|text-to-text|link-extract|audio-transcription, image: import|text-to-image|image-to-image, video: import|video-generation|motion-mimicry|subtitle-render|digital-human, audio: import|text-to-audio|text-to-music|video-to-audio|voice-clone|audio-extract (default: text-editor for text, import otherwise). position is optional (auto-placed right of the existing nodes). Node ids come from the returned node — use them for workflow_connect / workflow_run. Read workflow_snapshot first when editing an existing canvas.',
    parameters: objectParams({
      workspace_id: { type: 'string', required: true, description: 'Workspace id (from workflow_list)' },
      material_type: { type: 'string', enum: MATERIAL_TYPE_ENUM, required: true, description: 'Node material type' },
      tool: { type: 'string', description: 'Node tool; must belong to material_type (see description). Default: text-editor (text) / import (others)' },
      position: {
        type: 'object',
        properties: { x: { type: 'number' }, y: { type: 'number' } },
        required: ['x', 'y'],
        additionalProperties: false,
        description: 'Canvas coordinates; default auto-placed right of the rightmost node',
      },
      label: { type: 'string', description: 'Display label (empty = localized type name)' },
      prompt: { type: 'string', description: 'Generation prompt for generative tools' },
    }),
    output: jsonOut,
    async execute(args) {
      const workspaceId = readString(args, 'workspace_id');
      if (!workspaceId) return errorBody('invalid-args', 'workspace_id is required');
      const materialType = readString(args, 'material_type') as MaterialType | undefined;
      if (!materialType || !MATERIAL_TYPE_ENUM.includes(materialType)) {
        return errorBody('invalid-args', `material_type must be one of ${MATERIAL_TYPE_ENUM.join(', ')}`);
      }
      const toolResolved = resolveTool(materialType, args.tool);
      if ('error' in toolResolved) return toolResolved;

      let snapshot: CanvasWorkspaceSnapshot;
      try {
        snapshot = store.get(workspaceId);
      } catch {
        return errorBody('workspace-not-found', `workspace ${workspaceId} not found`);
      }

      const label = readString(args, 'label');
      const prompt = readString(args, 'prompt');
      const node = createMaterialNode(materialType, readPosition(args) ?? defaultNodePosition(snapshot), {
        selectedTool: toolResolved.tool,
        ...(label !== undefined ? { label } : {}),
        ...(prompt !== undefined ? { prompt } : {}),
      });

      const result = mutateWorkspaceGraph(store, workspaceId, { addNodes: [node] });
      if (!result.ok) return errorBody(result.error, result.message);
      return { workspace: workspaceSummary(result.snapshot), node };
    },
  };
}

function createWorkflowNodeUpdateTool(deps: WorkflowAgentDeps): AgentToolSpec {
  const { store } = deps;
  return {
    name: 'workflow_node_update',
    description:
      'Patch one node on a workflow canvas: label / prompt / tool / params / position (all optional, shallow-merged into the node). tool must be valid for the node\'s material_type. Changing tool never invalidates existing edges (edge validation uses the union of all tools of the material type), but it changes what the node does on the next workflow_run. material_type and output content fields cannot be changed — remove and re-add the node instead.',
    parameters: objectParams({
      workspace_id: { type: 'string', required: true, description: 'Workspace id' },
      node_id: { type: 'string', required: true, description: 'Node id (from workflow_snapshot include_nodes=true)' },
      patch: {
        type: 'object',
        required: true,
        properties: {
          label: { type: 'string' },
          prompt: { type: 'string' },
          tool: { type: 'string', description: 'New selectedTool; must belong to the node material_type' },
          params: { type: 'object', additionalProperties: true, description: 'Tool params (e.g. aspectRatio 1:1|4:3|16:9|9:16, duration) — replaces the whole params object' },
          position: {
            type: 'object',
            properties: { x: { type: 'number' }, y: { type: 'number' } },
            required: ['x', 'y'],
            additionalProperties: false,
          },
        },
        additionalProperties: false,
        description: 'Fields to patch; at least one required',
      },
    }),
    output: jsonOut,
    async execute(args) {
      const workspaceId = readString(args, 'workspace_id');
      const nodeId = readString(args, 'node_id');
      if (!workspaceId) return errorBody('invalid-args', 'workspace_id is required');
      if (!nodeId) return errorBody('invalid-args', 'node_id is required');
      const patch = args.patch;
      if (!patch || typeof patch !== 'object' || Array.isArray(patch)) {
        return errorBody('invalid-args', 'patch object is required');
      }
      const spec = patch as Record<string, unknown>;

      let snapshot: CanvasWorkspaceSnapshot;
      try {
        snapshot = store.get(workspaceId);
      } catch {
        return errorBody('workspace-not-found', `workspace ${workspaceId} not found`);
      }
      const node = snapshot.nodes.find((row) => row.id === nodeId);
      if (!node) return errorBody('node-not-found', `node ${nodeId} not found in workspace ${workspaceId}`);

      const materialType = (node.data as Record<string, unknown>).materialType as MaterialType | undefined;
      const data: Record<string, unknown> = {};
      if (spec.label !== undefined) data.label = spec.label;
      if (spec.prompt !== undefined) data.prompt = spec.prompt;
      if (spec.params !== undefined) {
        if (!spec.params || typeof spec.params !== 'object' || Array.isArray(spec.params)) {
          return errorBody('invalid-args', 'patch.params must be an object');
        }
        data.params = spec.params;
      }
      if (spec.tool !== undefined) {
        if (!materialType) return errorBody('invalid-args', `node ${nodeId} has no material_type; cannot set tool`);
        const toolResolved = resolveTool(materialType, spec.tool);
        if ('error' in toolResolved) return toolResolved;
        data.selectedTool = toolResolved.tool;
      }
      const position = spec.position;
      if (position !== undefined) {
        if (!position || typeof position !== 'object' || Array.isArray(position)
          || typeof (position as Record<string, unknown>).x !== 'number'
          || typeof (position as Record<string, unknown>).y !== 'number') {
          return errorBody('invalid-args', 'patch.position must be {x: number, y: number}');
        }
      }
      if (Object.keys(data).length === 0 && position === undefined) {
        return errorBody('invalid-args', 'patch must contain at least one of label / prompt / tool / params / position');
      }

      const mutation: CanvasInputMutation = {
        nodePatches: [{
          nodeId,
          data,
          ...(position !== undefined ? { node: { position: position as { x: number; y: number } } } : {}),
        }],
      };
      const result = mutateWorkspaceGraph(store, workspaceId, mutation);
      if (!result.ok) return errorBody(result.error, result.message);
      return {
        workspace: workspaceSummary(result.snapshot),
        node: result.snapshot.nodes.find((row) => row.id === nodeId),
      };
    },
  };
}

function createWorkflowNodeRemoveTool(deps: WorkflowAgentDeps): AgentToolSpec {
  const { store } = deps;
  return {
    name: 'workflow_node_remove',
    description:
      'Remove nodes from a workflow canvas. Edges connected to removed nodes are deleted automatically (same cascade as the Delete key on the canvas). Returns the removed node/edge counts.',
    parameters: objectParams({
      workspace_id: { type: 'string', required: true, description: 'Workspace id' },
      node_ids: { type: 'array', required: true, items: { type: 'string' }, description: 'Node ids to remove' },
    }),
    output: jsonOut,
    async execute(args) {
      const workspaceId = readString(args, 'workspace_id');
      if (!workspaceId) return errorBody('invalid-args', 'workspace_id is required');
      const nodeIds = normalizeNodeIds(args.node_ids);
      if (nodeIds.length === 0) return errorBody('invalid-args', 'node_ids must be a non-empty array');

      let snapshot: CanvasWorkspaceSnapshot;
      try {
        snapshot = store.get(workspaceId);
      } catch {
        return errorBody('workspace-not-found', `workspace ${workspaceId} not found`);
      }
      const existing = new Set(snapshot.nodes.map((node) => node.id));
      const toRemove = nodeIds.filter((id) => existing.has(id));
      if (toRemove.length === 0) {
        return errorBody('node-not-found', `none of ${nodeIds.join(', ')} exists in workspace ${workspaceId}`);
      }

      const result = mutateWorkspaceGraph(store, workspaceId, { removeNodeIds: toRemove });
      if (!result.ok) return errorBody(result.error, result.message);
      return {
        workspace: workspaceSummary(result.snapshot),
        removedNodes: toRemove.length,
        removedEdges: snapshot.edges.length - result.snapshot.edges.length,
      };
    },
  };
}

function createWorkflowConnectTool(deps: WorkflowAgentDeps): AgentToolSpec {
  const { store } = deps;
  return {
    name: 'workflow_connect',
    description:
      'Connect two nodes on a workflow canvas (source output → target input). Validated exactly like a manual drag connection: no self-connection, no duplicates, no cycles, and the source material type must be accepted by the target (edge validation uses the union of all tools of the target material type). On rejection the error message carries the reason code (self_connection / duplicate_edge / missing_node / cycle / type_contract).',
    parameters: objectParams({
      workspace_id: { type: 'string', required: true, description: 'Workspace id' },
      source: { type: 'string', required: true, description: 'Source (upstream) node id' },
      target: { type: 'string', required: true, description: 'Target (downstream) node id' },
      source_handle: { type: 'string', description: 'Source handle (default out)' },
      target_handle: { type: 'string', description: 'Target handle (default in)' },
    }),
    output: jsonOut,
    async execute(args) {
      const workspaceId = readString(args, 'workspace_id');
      const source = readString(args, 'source');
      const target = readString(args, 'target');
      if (!workspaceId || !source || !target) {
        return errorBody('invalid-args', 'workspace_id, source and target are required');
      }
      try {
        store.get(workspaceId);
      } catch {
        return errorBody('workspace-not-found', `workspace ${workspaceId} not found`);
      }
      const result = mutateWorkspaceGraph(store, workspaceId, {
        addEdges: [{
          source,
          target,
          sourceHandle: readString(args, 'source_handle'),
          targetHandle: readString(args, 'target_handle'),
        }],
      });
      if (!result.ok) return errorBody(result.error, result.message);
      const edge = result.snapshot.edges.find(
        (row) => row.source === source && row.target === target,
      );
      return { workspace: workspaceSummary(result.snapshot), edge };
    },
  };
}

function createWorkflowDisconnectTool(deps: WorkflowAgentDeps): AgentToolSpec {
  const { store } = deps;
  return {
    name: 'workflow_disconnect',
    description:
      'Remove edges from a workflow canvas, either by edge ids (from workflow_snapshot include_nodes=true) or by a source+target node pair. Returns the removed edge count.',
    parameters: objectParams({
      workspace_id: { type: 'string', required: true, description: 'Workspace id' },
      edge_ids: { type: 'array', items: { type: 'string' }, description: 'Edge ids to remove' },
      source: { type: 'string', description: 'With target: remove the edge between these nodes' },
      target: { type: 'string', description: 'With source: remove the edge between these nodes' },
    }),
    output: jsonOut,
    async execute(args) {
      const workspaceId = readString(args, 'workspace_id');
      if (!workspaceId) return errorBody('invalid-args', 'workspace_id is required');
      const edgeIds = normalizeNodeIds(args.edge_ids);
      const source = readString(args, 'source');
      const target = readString(args, 'target');
      if (edgeIds.length === 0 && !(source && target)) {
        return errorBody('invalid-args', 'pass edge_ids or source+target');
      }

      let snapshot: CanvasWorkspaceSnapshot;
      try {
        snapshot = store.get(workspaceId);
      } catch {
        return errorBody('workspace-not-found', `workspace ${workspaceId} not found`);
      }

      const resolved = new Set(edgeIds);
      if (source && target) {
        for (const edge of snapshot.edges) {
          if (edge.source === source && edge.target === target) resolved.add(edge.id);
        }
      }
      const existing = new Set(snapshot.edges.map((edge) => edge.id));
      const toRemove = [...resolved].filter((id) => existing.has(id));
      if (toRemove.length === 0) {
        return errorBody('edge-not-found', 'no matching edges in this workspace');
      }

      const result = mutateWorkspaceGraph(store, workspaceId, { removeEdgeIds: toRemove });
      if (!result.ok) return errorBody(result.error, result.message);
      return { workspace: workspaceSummary(result.snapshot), removedEdges: toRemove.length };
    },
  };
}

function createWorkflowExecutionControlTool(deps: WorkflowAgentDeps): AgentToolSpec {
  const { executionManager } = deps;
  return {
    name: 'workflow_execution_control',
    description:
      'Control a running workflow execution: pause (halts scheduling, in-flight node finishes), resume (continues; also recovers a persisted paused execution after a restart), or cancel (aborts cooperatively). Use the executionId returned by workflow_run. The open canvas reflects the new state live via SSE. Returns the resulting execution status.',
    parameters: objectParams({
      execution_id: {
        type: 'string',
        required: true,
        description: 'Execution id (from workflow_run or workflow_list include_executions=true)',
      },
      action: {
        type: 'string',
        enum: ['pause', 'resume', 'cancel'],
        required: true,
        description: 'Control action',
      },
    }),
    output: jsonOut,
    async execute(args) {
      const executionId = readString(args, 'execution_id');
      const action = readString(args, 'action');
      if (!executionId) return errorBody('invalid-args', 'execution_id is required');
      if (action !== 'pause' && action !== 'resume' && action !== 'cancel') {
        return errorBody('invalid-args', 'action must be pause | resume | cancel');
      }
      const control =
        action === 'pause'
          ? executionManager.pauseExecution
          : action === 'resume'
            ? executionManager.resumeExecution
            : executionManager.cancelExecution;
      const result = await control(executionId);
      if (!result.ok) {
        return errorBody('execution-control-failed', result.message ?? `cannot ${action} execution ${executionId}`);
      }
      const snapshot = executionManager.getSnapshot(executionId);
      return {
        executionId,
        action,
        ok: true,
        status: snapshot?.status ?? null,
        progress: snapshot?.progress ?? null,
      };
    },
  };
}

// ============================================================================
// systemPrompt section (workflow:ops)
// ============================================================================

const WORKFLOW_PROMPT = `This workspace may mount the OmniMux workflow canvas (omnimux-workflow): an infinite canvas where the user builds node DAGs (text/image/video/audio material nodes) and executes them through the OmniMux generation gateway.
Reading: workflow_list enumerates the user's canvas workspaces (id, name, nodeCount); workflow_snapshot returns one workspace's structure (include_nodes=true gives the full graph — ALWAYS read it before editing: node/edge ids must come from the snapshot, never invent them); workflow_run starts an execution (full or subset with node_ids) and with wait=true returns per-node statuses, text excerpts and generated media file paths.
Editing: workflow_create makes a new empty canvas; workflow_node_add adds a material node (returns its id); workflow_node_update patches label/prompt/tool/params/position; workflow_node_remove deletes nodes (edges cascade); workflow_connect / workflow_disconnect wire and unwire edges. Write tools fail with a structured error (invalid-args / node-not-found / mutation-rejected with reasonCode like cycle or type_contract) — fix the arguments and retry, do not work around the validation. After each edit the response carries the new workspace version; the open canvas refreshes itself within a few seconds.
Control: workflow_execution_control pauses / resumes / cancels a live execution by executionId (from workflow_run).
When the user mentions a canvas, a workflow, nodes, or asks to run/analyze/modify their graph, use these tools instead of guessing. Executions stream live progress on the canvas (SSE, pause/resume/cancel available there). Generation goes through the OmniMux hub seams when available (mock gateway offline) — never invent results: report what the tools return, including per-node errors like [omnimux:<code>].`;

// ============================================================================
// Registration entry
// ============================================================================

/**
 * Register the three workflow tools and the workflow:ops systemPrompt
 * section on the provided seats. Returns a disposer that undoes whatever
 * the seats allowed to be undone.
 */
export function registerWorkflowAgentSeats(
  ctx: AgentSeatContext,
  deps: WorkflowAgentDeps,
): () => void {
  const disposers: Array<() => void> = [];

  const tools = ctx.tools;
  if (tools && typeof tools.register === 'function') {
    const specs = [
      createWorkflowListTool(deps),
      createWorkflowRunTool(deps),
      createWorkflowSnapshotTool(deps),
      createWorkflowCreateTool(deps),
      createWorkflowNodeAddTool(deps),
      createWorkflowNodeUpdateTool(deps),
      createWorkflowNodeRemoveTool(deps),
      createWorkflowConnectTool(deps),
      createWorkflowDisconnectTool(deps),
      createWorkflowExecutionControlTool(deps),
    ];
    for (const spec of specs) {
      const dispose = tools.register(spec);
      if (typeof dispose === 'function') disposers.push(dispose as () => void);
    }
  }

  const systemPrompt = ctx.systemPrompt;
  if (systemPrompt && typeof systemPrompt.section === 'function') {
    // order 60: after the assets plugin's assets:ops (50) — canvas tools
    // complement, never collide with, the assets seats.
    const dispose = systemPrompt.section({
      name: 'workflow:ops',
      order: 60,
      text: WORKFLOW_PROMPT,
    });
    if (typeof dispose === 'function') disposers.push(dispose as () => void);
  }

  return () => {
    for (const dispose of disposers) dispose();
  };
}

/** Exposed for tests: the prompt section name/order (assertion targets). */
export const WORKFLOW_PROMPT_SECTION = { name: 'workflow:ops', order: 60 } as const;
