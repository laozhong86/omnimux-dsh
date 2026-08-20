/**
 * Ported (narrowed) from Gxgen `apps/web/src/store/canvasStore.ts`
 * (validated by the extraction spike).
 *
 * The Graph slice is line-for-line isomorphic with Gxgen — including the
 * detail that edge removals route through the mutation gateway. The UI
 * slice is minimal (selection). Timeline/Overlay/Playback slices are cut
 * (timeline domain, V1 out of scope).
 */

import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';
import {
  type Edge,
  type OnNodesChange,
  type OnEdgesChange,
  type OnConnect,
  type NodeChange,
  type EdgeChange,
  type Connection,
  applyNodeChanges,
  applyEdgeChanges,
} from '@xyflow/react';
import {
  planCanvasInputMutation,
  dispatchSuccessfulConnectionEvents,
  type CanvasInputMutation,
  type CanvasInputMutationPlan,
  type CanvasNode,
} from '../editor/utils/canvasInputMutationGateway';

export type SelectedElementType = 'none' | 'node';

export interface CanvasState {
  // ===== Graph Slice =====
  nodes: CanvasNode[];
  edges: Edge[];
  onNodesChange: OnNodesChange<CanvasNode>;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  applyCanvasInputMutation: (mutation: CanvasInputMutation) => CanvasInputMutationPlan;
  setNodes: (nodes: CanvasNode[] | ((nodes: CanvasNode[]) => CanvasNode[])) => void;
  setEdges: (edges: Edge[] | ((edges: Edge[]) => Edge[])) => void;
  removeEdge: (edgeId: string) => void;
  deleteElements: (nodeIds: string[], edgeIds: string[]) => void;
  /** Replace the whole graph (workspace load). */
  hydrateGraph: (nodes: CanvasNode[], edges: Edge[]) => void;

  // ===== UI Slice（最小）=====
  selectedElement: { type: SelectedElementType; id: string | null };
  setSelectedElement: (type: SelectedElementType, id: string | null) => void;

  // ===== Store Reset =====
  resetStore: () => void;
}

export const useCanvasStore = create<CanvasState>()(
  (set, get) => ({
    // ========================================================================
    // Graph Slice（与 Gxgen 同构）
    // ========================================================================
    nodes: [] as CanvasNode[],
    edges: [] as Edge[],

    onNodesChange: (changes: NodeChange<CanvasNode>[]) => {
      set({
        nodes: applyNodeChanges(changes, get().nodes),
      });
    },

    onEdgesChange: (changes: EdgeChange[]) => {
      const removedEdgeIds = changes
        .filter((change): change is EdgeChange & { type: 'remove' } => change.type === 'remove')
        .map((change) => change.id);
      if (removedEdgeIds.length > 0) {
        get().applyCanvasInputMutation({ removeEdgeIds: removedEdgeIds });
      }
      const nonRemovalChanges = changes.filter((change) => change.type !== 'remove');
      if (nonRemovalChanges.length > 0) {
        set({ edges: applyEdgeChanges(nonRemovalChanges, get().edges) });
      }
    },

    onConnect: (connection: Connection) => {
      get().applyCanvasInputMutation({ addEdges: [connection] });
    },

    applyCanvasInputMutation: (mutation: CanvasInputMutation) => {
      const current = get();
      const plan = planCanvasInputMutation(
        { nodes: current.nodes, edges: current.edges },
        mutation,
      );
      if (plan.status !== 'allowed') return plan;
      set({ nodes: plan.nodes, edges: plan.edges });
      const addedEdges = plan.edges.filter((edge) => (
        !current.edges.some((existing) => existing.id === edge.id)
      ));
      dispatchSuccessfulConnectionEvents(addedEdges);
      return plan;
    },

    setNodes: (nodesOrUpdater) => {
      set((state) => ({
        nodes: typeof nodesOrUpdater === 'function'
          ? nodesOrUpdater(state.nodes)
          : nodesOrUpdater,
      }));
    },

    setEdges: (edgesOrUpdater) => {
      set((state) => ({
        edges: typeof edgesOrUpdater === 'function'
          ? edgesOrUpdater(state.edges)
          : edgesOrUpdater,
      }));
    },

    removeEdge: (edgeId) => {
      get().applyCanvasInputMutation({ removeEdgeIds: [edgeId] });
    },

    deleteElements: (nodeIds, edgeIds) => {
      get().applyCanvasInputMutation({ removeNodeIds: nodeIds, removeEdgeIds: edgeIds });
      const selected = get().selectedElement;
      if (selected.type === 'node' && selected.id && nodeIds.includes(selected.id)) {
        set({ selectedElement: { type: 'none', id: null } });
      }
    },

    hydrateGraph: (nodes, edges) => {
      set({ nodes, edges, selectedElement: { type: 'none', id: null } });
    },

    // ========================================================================
    // UI Slice（最小）
    // ========================================================================
    selectedElement: { type: 'none' as SelectedElementType, id: null as string | null },

    setSelectedElement: (type: SelectedElementType, id: string | null) => {
      set({ selectedElement: { type, id } });
    },

    // ========================================================================
    // Store Reset
    // ========================================================================
    resetStore: () => {
      set({
        nodes: [],
        edges: [],
        selectedElement: { type: 'none', id: null },
      });
    },
  }),
);

// ============================================================================
// Convenience Hooks（保留 Gxgen 的 selector 组织方式）
// ============================================================================

export const useGraphStore = () =>
  useCanvasStore(
    useShallow((state) => ({
      nodes: state.nodes,
      edges: state.edges,
      setNodes: state.setNodes,
      setEdges: state.setEdges,
      onNodesChange: state.onNodesChange,
      onEdgesChange: state.onEdgesChange,
      onConnect: state.onConnect,
    })),
  );

export const useSelection = () =>
  useCanvasStore(
    useShallow((state) => ({
      selectedElement: state.selectedElement,
      setSelectedElement: state.setSelectedElement,
    })),
  );
