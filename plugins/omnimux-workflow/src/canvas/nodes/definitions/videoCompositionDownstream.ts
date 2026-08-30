/**
 * Canvas-mode clip export: create (or reuse) a downstream video material
 * node and wire it to the composition node.
 *
 * Handle ids MUST match `CanvasNodeHandle` (`in` / `out`). Using
 * `input` / `output` stores an edge that React Flow cannot draw.
 */

export const CLIP_EXPORT_SOURCE_HANDLE = 'out';
export const CLIP_EXPORT_TARGET_HANDLE = 'in';
export const CLIP_EXPORT_DOWNSTREAM_GAP = 80;

export interface ClipExportOutput {
  videoPath: string;
  thumbnailPath?: string;
  durationMs?: number;
  width?: number;
  height?: number;
}

export interface ClipExportGraphNode {
  id: string;
  type?: string;
  data?: Record<string, unknown>;
  position?: { x: number; y: number };
}

export interface ClipExportGraphEdge {
  id?: string;
  source: string;
  target: string;
  sourceHandle?: string | null;
  targetHandle?: string | null;
}

export interface ClipExportDownstreamInput {
  sourceNodeId: string;
  sourcePosition: { x: number; y: number };
  sourceLabel: string;
  output: ClipExportOutput;
  currentNodes: ClipExportGraphNode[];
  currentEdges: ClipExportGraphEdge[];
  nodeWidth: number;
  createNodeId?: () => string;
  /** false: only repair/connect an existing 成片 node, never create a new one. */
  createIfMissing?: boolean;
}

export interface ClipExportDownstreamNode {
  id: string;
  type: 'material';
  position: { x: number; y: number };
  selected: boolean;
  data: {
    materialType: 'video';
    label: string;
    status: 'ready';
    selectedTool: 'import';
    realPath: string;
    mediaUrl: string;
    thumbnailUrl?: string;
    duration?: number;
    size: { width: number; height: number };
  };
}

export interface ClipExportDownstreamEdge {
  id: string;
  source: string;
  target: string;
  sourceHandle: typeof CLIP_EXPORT_SOURCE_HANDLE;
  targetHandle: typeof CLIP_EXPORT_TARGET_HANDLE;
}

export interface ClipExportDownstreamPlan {
  addNodes: ClipExportDownstreamNode[];
  addEdges: ClipExportDownstreamEdge[];
  removeEdgeIds: string[];
}

function existingDownstreamNode(
  nodes: ClipExportGraphNode[],
  videoPath: string,
): ClipExportGraphNode | undefined {
  return nodes.find((node) => (
    node.type === 'material'
    && (node.data as Record<string, unknown> | undefined)?.realPath === videoPath
  ));
}

export function isDrawableClipExportEdge(edge: ClipExportGraphEdge): boolean {
  return edge.sourceHandle === CLIP_EXPORT_SOURCE_HANDLE
    && edge.targetHandle === CLIP_EXPORT_TARGET_HANDLE;
}

function edgesBetween(
  edges: ClipExportGraphEdge[],
  source: string,
  target: string,
): ClipExportGraphEdge[] {
  return edges.filter((edge) => edge.source === source && edge.target === target);
}

function edgeBetween(
  source: string,
  target: string,
): ClipExportDownstreamEdge {
  return {
    id: `edge_${source}_${target}`,
    source,
    target,
    sourceHandle: CLIP_EXPORT_SOURCE_HANDLE,
    targetHandle: CLIP_EXPORT_TARGET_HANDLE,
  };
}

export function planClipExportDownstream(
  input: ClipExportDownstreamInput,
): ClipExportDownstreamPlan | null {
  const videoPath = input.output.videoPath;
  if (!videoPath) return null;

  const existing = existingDownstreamNode(input.currentNodes, videoPath);
  if (existing) {
    const between = edgesBetween(input.currentEdges, input.sourceNodeId, existing.id);
    const drawable = between.find(isDrawableClipExportEdge);
    if (drawable) return null;
    const brokenIds = between
      .map((edge) => edge.id)
      .filter((id): id is string => typeof id === 'string' && id.length > 0);
    return {
      addNodes: [],
      addEdges: [edgeBetween(input.sourceNodeId, existing.id)],
      removeEdgeIds: brokenIds,
    };
  }

  if (input.createIfMissing === false) return null;

  const newNodeId = input.createNodeId?.()
    ?? `node_mat_vid_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;
  const newNode: ClipExportDownstreamNode = {
    id: newNodeId,
    type: 'material',
    position: {
      x: input.sourcePosition.x + input.nodeWidth + CLIP_EXPORT_DOWNSTREAM_GAP,
      y: input.sourcePosition.y,
    },
    selected: true,
    data: {
      materialType: 'video',
      label: `${input.sourceLabel}_成片`,
      status: 'ready',
      selectedTool: 'import',
      realPath: videoPath,
      mediaUrl: videoPath,
      thumbnailUrl: input.output.thumbnailPath,
      duration: input.output.durationMs ? Math.round(input.output.durationMs / 1000) : undefined,
      size: {
        width: input.output.width || 1920,
        height: input.output.height || 1080,
      },
    },
  };

  return {
    addNodes: [newNode],
    addEdges: [edgeBetween(input.sourceNodeId, newNodeId)],
    removeEdgeIds: [],
  };
}
