/**
 * Execution UI store (island): ephemeral execution state for the control
 * bar + node badges. Result data (media/text) is written into canvasStore
 * node.data by the controller hook (Gxgen pattern: per-node updates, no
 * global re-render); this store only carries the light-weight control view.
 */

import { create } from 'zustand';
import type { NodeExecutionApiStatus } from '../../shared/api';

export type ExecutionUiStatus =
  | 'idle'
  | 'pending'
  | 'running'
  | 'paused'
  | 'completed'
  | 'error'
  | 'cancelled';

export interface ExecutionProgressState {
  total: number;
  completed: number;
  running: number;
  pending: number;
  percentage: number;
}

const EMPTY_PROGRESS: ExecutionProgressState = {
  total: 0,
  completed: 0,
  running: 0,
  pending: 0,
  percentage: 0,
};

export interface ExecutionState {
  executionId: string | null;
  status: ExecutionUiStatus;
  error: string | null;
  progress: ExecutionProgressState;
  /** nodeId -> execution status (fast lookup for badges / edge animation). */
  nodeStatuses: Record<string, NodeExecutionApiStatus>;

  /** Bridge set by the controller hook: single-node (subset) execution. */
  startNodeExecution: ((nodeId: string) => void) | null;

  setStartNodeExecution: (fn: ((nodeId: string) => void) | null) => void;
  setExecution: (patch: Partial<Omit<ExecutionState, 'setExecution' | 'setNodeStatus' | 'resetExecution' | 'setStartNodeExecution'>>) => void;
  setNodeStatus: (nodeId: string, status: NodeExecutionApiStatus) => void;
  resetExecution: () => void;
}

export const useExecutionStore = create<ExecutionState>()((set) => ({
  executionId: null,
  status: 'idle',
  error: null,
  progress: EMPTY_PROGRESS,
  nodeStatuses: {},

  startNodeExecution: null,

  setStartNodeExecution: (fn) => set({ startNodeExecution: fn }),

  setExecution: (patch) => set(patch),

  setNodeStatus: (nodeId, status) =>
    set((state) => ({
      nodeStatuses: { ...state.nodeStatuses, [nodeId]: status },
    })),

  resetExecution: () =>
    set({
      executionId: null,
      status: 'idle',
      error: null,
      progress: EMPTY_PROGRESS,
      nodeStatuses: {},
    }),
}));
