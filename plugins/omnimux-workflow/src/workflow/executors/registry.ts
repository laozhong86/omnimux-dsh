/**
 * ★ Extension point: node executor registry (host side).
 *
 * Maps canvas node types to executors. The execution engine (M3
 * ExecutionScheduler) never hard-codes node behavior — it dispatches every
 * node through this registry (see docs/contracts/canvas-http-api.md +
 * ARCHITECTURE.md). The gateway-backed material executor is registered at
 * host mount time (src/workflow/execution/nodeExecutors.ts).
 */

/** Upstream-resolved inputs handed to each executor. */
export interface ExecutionContext {
  /** Node outputs keyed by upstream node id. */
  upstreamOutputs: Map<string, NodeOutput>;
  /** Cooperative cancellation (aborted when the execution is cancelled). */
  signal: AbortSignal;
  /** Destination dir for artifacts of this execution (absolute path). */
  mediaDir: string;
  /** Maps an absolute artifact path under mediaDir to a servable URL. */
  toPublicUrl?: (absolutePath: string) => string;
  /** Progress reporter wired to node_progress SSE events (0-100). */
  reportProgress?: (progress: number, message?: string) => void;
}

export interface NodeOutput {
  mediaAssets?: Array<{ type: 'image' | 'video' | 'audio'; url: string; thumbnail?: string }>;
  text?: string;
}

export interface NodeExecutor {
  /** Stable key matching NodeDefinition.executorKey on the client side. */
  key: string;
  execute(
    node: { id: string; type: string; data: Record<string, unknown> },
    ctx: ExecutionContext,
  ): Promise<NodeOutput>;
}

const executors = new Map<string, NodeExecutor>();

export function registerExecutor(executor: NodeExecutor): void {
  executors.set(executor.key, executor);
}

export function getExecutor(key: string): NodeExecutor | undefined {
  return executors.get(key);
}

export function listExecutorKeys(): string[] {
  return [...executors.keys()];
}
