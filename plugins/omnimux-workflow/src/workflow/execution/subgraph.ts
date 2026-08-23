/**
 * Execution subgraph resolution — M3 port of Gxgen
 * `server/src/routes/canvas/executionSubgraph.ts` (pure algorithm, strict).
 *
 * full: the whole graph. subset: the selected nodes plus their transitive
 * upstream closure (induced subgraph) — Gxgen semantics.
 */

export type ExecutionMode = 'full' | 'subset';

const SUPPORTED_EXECUTION_MODES = new Set<string>(['full', 'subset']);

export function toExecutionMode(value: unknown): ExecutionMode {
  if (value === undefined || value === null) return 'full';
  if (typeof value !== 'string' || !SUPPORTED_EXECUTION_MODES.has(value)) {
    throw new Error('mode 必须是 full 或 subset');
  }
  return value as ExecutionMode;
}

export function normalizeNodeIds(nodeIds: unknown): string[] {
  if (!Array.isArray(nodeIds)) return [];
  const unique = new Set<string>();
  for (const nodeId of nodeIds) {
    if (typeof nodeId !== 'string') continue;
    const trimmed = nodeId.trim();
    if (trimmed) unique.add(trimmed);
  }
  return [...unique];
}

export interface SubgraphNodeLike {
  id: string;
  [key: string]: unknown;
}

export interface SubgraphEdgeLike {
  source: string;
  target: string;
  [key: string]: unknown;
}

export interface ResolvedExecutionSubgraph<TNode extends SubgraphNodeLike, TEdge extends SubgraphEdgeLike> {
  nodes: TNode[];
  edges: TEdge[];
  nodeIdSet: Set<string>;
}

export function resolveExecutionSubgraph<TNode extends SubgraphNodeLike, TEdge extends SubgraphEdgeLike>(
  input: {
    nodes: TNode[];
    edges: TEdge[];
    executionMode: ExecutionMode;
    nodeIds: string[];
  },
): ResolvedExecutionSubgraph<TNode, TEdge> {
  const { nodes, edges, executionMode } = input;

  if (executionMode === 'full') {
    return {
      nodes,
      edges,
      nodeIdSet: new Set(nodes.map((node) => node.id)),
    };
  }

  const targetNodeIds = normalizeNodeIds(input.nodeIds);
  if (targetNodeIds.length === 0) {
    throw new Error('subset 模式必须提供 nodeIds');
  }

  const nodeMap = new Map<string, TNode>();
  for (const node of nodes) {
    nodeMap.set(node.id, node);
  }

  const invalidNodeIds = targetNodeIds.filter((nodeId) => !nodeMap.has(nodeId));
  if (invalidNodeIds.length > 0) {
    throw new Error(`包含无效节点 ID: ${invalidNodeIds.join(', ')}`);
  }

  // Incoming edge index (only edges between known nodes).
  const incomingMap = new Map<string, string[]>();
  for (const edge of edges) {
    if (!nodeMap.has(edge.source) || !nodeMap.has(edge.target)) continue;
    const incoming = incomingMap.get(edge.target) ?? [];
    incoming.push(edge.source);
    incomingMap.set(edge.target, incoming);
  }

  // Transitive upstream closure (DFS from the selected nodes).
  const closure = new Set<string>();
  const stack = [...targetNodeIds];
  while (stack.length > 0) {
    const current = stack.pop();
    if (!current || closure.has(current)) continue;
    closure.add(current);
    for (const upstream of incomingMap.get(current) ?? []) {
      if (!closure.has(upstream)) stack.push(upstream);
    }
  }

  return {
    nodes: nodes.filter((node) => closure.has(node.id)),
    edges: edges.filter((edge) => closure.has(edge.source) && closure.has(edge.target)),
    nodeIdSet: closure,
  };
}
