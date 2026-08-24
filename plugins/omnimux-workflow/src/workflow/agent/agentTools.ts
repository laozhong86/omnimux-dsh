/**
 * Agent tool seats (M5): registers the workflow canvas tools on the cordis
 * `tools` seat plus the `workflow:ops` systemPrompt section, following the
 * proven omnimux-assets plugin pattern (ctx.tools.register + JSON-Schema
 * params + {error, message} error envelopes).
 *
 * Three tools, all host-side against the already assembled store /
 * executionManager (no extra HTTP calls, no hub imports):
 *   - workflow_list:     workspaces (+ optional recent executions overview)
 *   - workflow_run:      create an execution (full/subset); optional wait to
 *                        a terminal state with a bounded timeout
 *   - workflow_snapshot: workspace summary or the full node/edge structure
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

type FieldSpec = Record<string, unknown> & { required?: boolean };

/** Compile a flat field table into a JSON Schema object. */
function objectParams(fields: Record<string, FieldSpec>): Record<string, unknown> {
  const properties: Record<string, unknown> = {};
  const required: string[] = [];
  for (const [key, spec] of Object.entries(fields)) {
    const { required: isRequired, ...rest } = spec;
    properties[key] = rest;
    if (isRequired) required.push(key);
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
// systemPrompt section (workflow:ops)
// ============================================================================

const WORKFLOW_PROMPT = `This workspace may mount the OmniMux workflow canvas (omnimux-workflow): an infinite canvas where the user builds node DAGs (text/image/video/audio material nodes) and executes them through the OmniMux generation gateway.
workflow_list enumerates the user's canvas workspaces (id, name, nodeCount) and can include recent executions; workflow_snapshot returns one workspace's structure (include_nodes=true gives the full graph — read it before advising graph changes); workflow_run starts an execution (full or subset with node_ids) and with wait=true returns per-node statuses, text excerpts and generated media file paths.
When the user mentions a canvas, a workflow, nodes, or asks to run/analyze their graph, use these tools instead of guessing. Executions stream live progress on the canvas (SSE, pause/resume/cancel available there); the Agent can trigger and fetch results while the user watches. Generation goes through the OmniMux hub seams when available (mock gateway offline) — never invent results: report what the tools return, including per-node errors like [omnimux:<code>].`;

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
