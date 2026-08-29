/**
 * Node executor bridge: connects the M1 executor registry to the M3
 * ExecutionScheduler.
 *
 * The scheduler calls a plain `(node, context) => Promise<output>` function;
 * this module builds that function per execution:
 *  - resolves upstream outputs from the graph edges + context output cache,
 *  - looks the executor up in the registry (extension point ②) — unknown
 *    node types fail fast with a clear error,
 *  - threads cooperative cancellation (one AbortController per execution),
 *  - rewrites absolute artifact paths into /omnimux-workflow/media/ URLs.
 */

import { relative, resolve } from 'node:path';
import type { ExecutionContext } from './ExecutionContext.ts';
import type {
  ExecutableEdge,
  ExecutableNode,
  NodeExecutorFn,
} from './ExecutionScheduler.ts';
import {
  getExecutor,
  type ExecutionContext as ExecutorContext,
  type NodeOutput,
} from '../executors/registry.ts';
import { createWorkflowLogger } from './logger.ts';
import { WORKFLOW_ROUTE_PREFIX } from '../../shared/api.ts';
import { resolveNodeKind } from '../../shared/graph/materialNode.ts';

const LOG_TAG = 'nodeExecutors';

const logger = createWorkflowLogger(LOG_TAG);

export function resolveExecutorKey(node: { type: string; data?: Record<string, unknown> }): string {
  if (node.type !== 'material') return node.type;
  try {
    const kind = resolveNodeKind(node.data ?? {});
    return kind === 'import' ? 'material:import' : 'material:generate';
  } catch (err) {
    logger.warn('failed to resolve material node kind, falling back to generate', {
      nodeId: (node as { id?: string }).id,
      error: err instanceof Error ? err.message : String(err),
    });
    return 'material:generate';
  }
}

export interface DispatchingExecutorOptions {
  gateway: import('../seam/gateway').GenerationGateway;
  /** Plugin media root (absolute) — artifacts land under <root>/executions/<id>/. */
  mediaRoot: string;
  executionId: string;
  edges: ExecutableEdge[];
  /** AbortController shared by the execution (cancel aborts in-flight nodes). */
  abortController: AbortController;
}

export interface DispatchingNodeExecutor {
  /** Scheduler-facing executor function. */
  executor: NodeExecutorFn;
  /** Per-execution media dir (absolute), also used by the URL rewriter. */
  mediaDir: string;
}

export function createDispatchingNodeExecutor(
  opts: DispatchingExecutorOptions,
): DispatchingNodeExecutor {
  const mediaDir = resolve(opts.mediaRoot, 'executions', opts.executionId);

  /** Absolute artifact path -> /omnimux-workflow/media/executions/<id>/<file>. */
  const toPublicUrl = (absolutePath: string): string => {
    const rel = relative(opts.mediaRoot, resolve(absolutePath));
    const normalized = rel.split('\\').join('/');
    if (normalized.startsWith('..')) {
      // Path outside the media root: refuse to expose.
      logger.warn('artifact path escapes media root', { executionId: opts.executionId, absolutePath });
      return absolutePath;
    }
    return `${WORKFLOW_ROUTE_PREFIX}/media/${normalized}`;
  };

  const executor: NodeExecutorFn = async (node, context) => {
    const executorKey = resolveExecutorKey(node);
    const registryExecutor = getExecutor(executorKey);
    if (!registryExecutor) {
      throw new Error(`节点类型 ${node.type} 没有注册执行器（registry key: ${executorKey}）`);
    }

    const upstreamOutputs = resolveUpstreamOutputs(node, opts.edges, context);

    const ctx: ExecutorContext = {
      upstreamOutputs,
      signal: opts.abortController.signal,
      mediaDir,
      toPublicUrl,
      reportProgress: (progress, message) => {
        context.reportProgress(node.id, progress, message ?? '');
      },
    };

    const output = await registryExecutor.execute(
      { id: node.id, type: node.type, data: node.data ?? {} },
      ctx,
    );

    // Cache media assets on the context (Gxgen behavior: asset bookkeeping).
    for (const asset of output.mediaAssets ?? []) {
      context.addMediaAsset(node.id, { ...asset });
    }
    return output as unknown;
  };

  return { executor, mediaDir };
}

function resolveUpstreamOutputs(
  node: ExecutableNode,
  edges: ExecutableEdge[],
  context: ExecutionContext,
): Map<string, NodeOutput> {
  const upstream = new Map<string, NodeOutput>();
  for (const edge of edges) {
    if (edge.target !== node.id) continue;
    const output = context.getNodeOutput(edge.source);
    if (output === undefined) continue;
    upstream.set(edge.source, normalizeOutput(output));
  }
  return upstream;
}

function normalizeOutput(output: unknown): NodeOutput {
  if (output && typeof output === 'object' && ('text' in output || 'mediaAssets' in output)) {
    return output as NodeOutput;
  }
  return { text: typeof output === 'string' ? output : JSON.stringify(output) };
}
