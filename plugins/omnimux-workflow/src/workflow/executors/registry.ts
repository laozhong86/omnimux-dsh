/**
 * ★ Extension point: node executor registry (host side).
 *
 * Maps canvas node types to executors. M1 registers the scaffold plus a
 * pass-through material executor; M3 ports the Gxgen ExecutionScheduler
 * and dispatches through this registry. Adding an executor never touches
 * the scheduler (see docs/contracts/canvas-http-api.md + ARCHITECTURE.md).
 */

/** Upstream-resolved inputs handed to each executor (M3 fills resolution). */
export interface ExecutionContext {
  /** Node outputs keyed by upstream node id. */
  upstreamOutputs: Map<string, NodeOutput>;
  /** Cooperative cancellation. */
  signal: AbortSignal;
  /** Destination dir for artifacts of this execution. */
  mediaDir: string;
}

export interface NodeOutput {
  mediaAssets?: Array<{ type: 'image' | 'video' | 'audio'; url: string; thumbnail?: string }>;
  text?: string;
}

export interface NodeExecutor {
  /** Stable key matching NodeDefinition.executorKey on the client side. */
  key: string;
  execute(node: { id: string; type: string; data: Record<string, unknown> }, ctx: ExecutionContext): Promise<NodeOutput>;
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

/**
 * Material executor (M1 scaffold): pass-through of node-owned content.
 * Real generation dispatch by materialTool lands in M3 via the gateway.
 */
registerExecutor({
  key: 'material',
  async execute(node) {
    const data = node.data ?? {};
    const text = typeof data.content === 'string' ? data.content : undefined;
    const mediaUrl = typeof data.mediaUrl === 'string' ? data.mediaUrl : undefined;
    if (mediaUrl) {
      const type = data.materialType === 'video' ? 'video' : data.materialType === 'audio' ? 'audio' : 'image';
      return { mediaAssets: [{ type, url: mediaUrl }] };
    }
    return { text };
  },
});
