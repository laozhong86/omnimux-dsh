/**
 * useExecutionController — M3 port of Gxgen `useExecutionSSE` +
 * `useExecutionSync` (island flavor).
 *
 * Owns the execution lifecycle for the canvas:
 *  - startExecution: POST create (full / subset) -> subscribe SSE
 *  - pause / resume / cancel control calls
 *  - SSE event handling: control state -> executionStore; per-node states
 *    and mock results -> canvasStore node.data (only the changed node is
 *    updated — the Gxgen performance pattern; result writes also trigger
 *    the M2 autosave layer)
 *  - island reload: restore a still-live execution by executionId
 *    (GET list -> snapshot backfill -> re-subscribe)
 *
 * Differences from Gxgen: EventSource instead of fetch-stream (the plugin
 * exposes a dedicated GET /events route), no auth token (local same-origin).
 */

import { useCallback, useEffect, useRef } from 'react';
import { WORKFLOW_API_ROUTES } from '../../shared/api';
import type { ExecutionSnapshotDto } from '../../shared/api';
import {
  createExecution,
  executionAction,
  getExecution,
  listExecutions,
} from '../bridge/apiClient';
import { useCanvasStore } from '../store/canvasStore';
import { useExecutionStore, type ExecutionUiStatus } from '../store/executionStore';
import { t } from '../i18n';

const LIVE_STATUSES = new Set<ExecutionUiStatus>(['pending', 'running', 'paused']);
const TERMINAL_STATUSES = new Set<ExecutionUiStatus>(['completed', 'error', 'cancelled']);

interface SseEventData {
  executionId?: string;
  nodeId?: string;
  label?: string;
  type?: string;
  progress?: number;
  message?: string;
  error?: string;
  reason?: string;
  duration?: number;
  totalNodes?: number;
  completedNodes?: number;
  workflowId?: string;
  failedNode?: string | null;
  output?: {
    mediaAssets?: Array<{ type: 'image' | 'video' | 'audio'; url: string }>;
    text?: string;
  };
}

/** Merge one node's execution fields into canvasStore node.data (single node). */
function writeNodeData(nodeId: string, patch: Record<string, unknown>): void {
  const store = useCanvasStore.getState();
  const node = store.nodes.find((candidate) => candidate.id === nodeId);
  if (!node) return;
  store.setNodes((nodes) =>
    nodes.map((candidate) =>
      candidate.id === nodeId ? { ...candidate, data: { ...candidate.data, ...patch } } : candidate,
    ),
  );
}

export interface ExecutionController {
  startExecution: (opts?: { mode?: 'full' | 'subset'; nodeIds?: string[] }) => Promise<void>;
  pause: () => Promise<void>;
  resume: () => Promise<void>;
  cancel: () => Promise<void>;
  reset: () => void;
}

export function useExecutionController(workspaceId: string | null): ExecutionController {
  const eventSourceRef = useRef<EventSource | null>( null);
  const workspaceIdRef = useRef<string | null>(workspaceId);
  workspaceIdRef.current = workspaceId;

  const closeStream = useCallback(() => {
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
      eventSourceRef.current = null;
    }
  }, []);

  const applyTerminal = useCallback((status: ExecutionUiStatus, error: string | null) => {
    useExecutionStore.getState().setExecution({
      status,
      error,
      progress: { ...useExecutionStore.getState().progress, percentage: status === 'completed' ? 100 : useExecutionStore.getState().progress.percentage },
    });
  }, []);

  const handleEvent = useCallback((eventType: string, raw: string) => {
    let data: SseEventData;
    try {
      data = JSON.parse(raw) as SseEventData;
    } catch {
      return;
    }
    const exec = useExecutionStore.getState();

    switch (eventType) {
      case 'execution_start': {
        exec.setExecution({
          status: 'running',
          error: null,
          progress: {
            total: data.totalNodes ?? 0,
            completed: 0,
            running: 0,
            pending: data.totalNodes ?? 0,
            percentage: 0,
          },
        });
        break;
      }
      case 'node_start': {
        if (!data.nodeId) break;
        exec.setNodeStatus(data.nodeId, 'running');
        exec.setExecution({
          progress: {
            ...exec.progress,
            running: exec.progress.running + 1,
            pending: Math.max(0, exec.progress.pending - 1),
          },
        });
        writeNodeData(data.nodeId, { executionStatus: 'running', executionError: undefined });
        break;
      }
      case 'node_complete': {
        if (!data.nodeId) break;
        exec.setNodeStatus(data.nodeId, 'completed');
        exec.setExecution({
          progress: {
            ...exec.progress,
            completed: exec.progress.completed + 1,
            running: Math.max(0, exec.progress.running - 1),
            percentage: data.progress ?? exec.progress.percentage,
          },
        });
        // Result backfill (mock gateway output in M3) — node.data update
        // also marks the workspace dirty and triggers the autosave layer.
        const output = data.output ?? {};
        const patch: Record<string, unknown> = { executionStatus: 'completed', executionError: undefined };
        if (output.text) patch.generatedContent = output.text;
        if (output.mediaAssets && output.mediaAssets.length > 0) {
          const first = output.mediaAssets[0] as { type: string; url: string };
          patch.mediaAssets = output.mediaAssets;
          if (first.type === 'image') patch.mediaUrl = first.url;
          patch.taskId = `exec-${data.executionId ?? ''}`;
        }
        writeNodeData(data.nodeId, patch);
        break;
      }
      case 'node_error': {
        if (!data.nodeId) break;
        exec.setNodeStatus(data.nodeId, 'error');
        exec.setExecution({
          progress: { ...exec.progress, running: Math.max(0, exec.progress.running - 1) },
        });
        writeNodeData(data.nodeId, {
          executionStatus: 'error',
          executionError: data.error ?? t('error.nodeExecutionFailed'),
        });
        break;
      }
      case 'node_skipped': {
        if (!data.nodeId) break;
        exec.setNodeStatus(data.nodeId, 'skipped');
        writeNodeData(data.nodeId, {
          executionStatus: 'skipped',
          executionError: undefined,
        });
        break;
      }
      case 'execution_paused': {
        exec.setExecution({ status: 'paused' });
        break;
      }
      case 'execution_resumed': {
        exec.setExecution({ status: 'running' });
        break;
      }
      case 'execution_complete': {
        applyTerminal('completed', null);
        closeStream();
        break;
      }
      case 'execution_error': {
        applyTerminal('error', data.error ?? t('error.executionFailed'));
        closeStream();
        break;
      }
      case 'execution_cancelled': {
        applyTerminal('cancelled', null);
        closeStream();
        break;
      }
      default:
        break;
    }
  }, [applyTerminal, closeStream]);

  const subscribe = useCallback((executionId: string) => {
    closeStream();
    const workspace = workspaceIdRef.current;
    if (!workspace) return;

    const source = new EventSource(
      WORKFLOW_API_ROUTES.executionEvents(encodeURIComponent(workspace), encodeURIComponent(executionId)),
    );
    eventSourceRef.current = source;

    const events = [
      'execution_start',
      'node_start',
      'node_progress',
      'node_complete',
      'node_error',
      'node_skipped',
      'execution_paused',
      'execution_resumed',
      'execution_complete',
      'execution_error',
      'execution_cancelled',
    ];
    for (const event of events) {
      source.addEventListener(event, (message) => {
        handleEvent(event, (message as MessageEvent<string>).data);
      });
    }
    // EventSource auto-reconnects on transient drops; on hard errors the
    // status snapshot GET is the fallback (see restore()).
    source.onerror = () => {
      const status = useExecutionStore.getState().status;
      if (TERMINAL_STATUSES.has(status)) {
        closeStream();
      }
    };
  }, [closeStream, handleEvent]);

  /** Backfill node badges/results from a status snapshot (island reload). */
  const applySnapshot = useCallback((snapshot: ExecutionSnapshotDto) => {
    const exec = useExecutionStore.getState();
    exec.setExecution({
      executionId: snapshot.id,
      status: snapshot.status,
      error: snapshot.error,
      progress: {
        total: snapshot.progress.total,
        completed: snapshot.progress.completed,
        running: snapshot.progress.running,
        pending: snapshot.progress.pending,
        percentage: snapshot.progress.percentage,
      },
    });
    for (const [nodeId, state] of Object.entries(snapshot.nodeStates ?? {})) {
      exec.setNodeStatus(nodeId, state.status);
      const patch: Record<string, unknown> = { executionStatus: state.status };
      if (state.status === 'error' && state.error) patch.executionError = state.error;
      const output = snapshot.nodeOutputs?.[nodeId] as
        | { mediaAssets?: Array<{ type: string; url: string }>; text?: string }
        | undefined;
      if (output) {
        if (output.text) patch.generatedContent = output.text;
        if (output.mediaAssets && output.mediaAssets.length > 0) {
          patch.mediaAssets = output.mediaAssets;
          if (output.mediaAssets[0] && output.mediaAssets[0].type === 'image') {
            patch.mediaUrl = output.mediaAssets[0].url;
          }
        }
      }
      writeNodeData(nodeId, patch);
    }
  }, []);

  const startExecution = useCallback(
    async (opts: { mode?: 'full' | 'subset'; nodeIds?: string[] } = {}) => {
      const workspace = workspaceIdRef.current;
      if (!workspace) return;
      closeStream();
      useExecutionStore.getState().resetExecution();
      useExecutionStore.getState().setExecution({ status: 'pending' });

      const result = await createExecution(workspace, {
        mode: opts.mode ?? 'full',
        nodeIds: opts.nodeIds,
      });
      if (!result.ok || !result.body.execution) {
        useExecutionStore.getState().setExecution({
          status: 'error',
          error: result.body.message ?? t('error.createExecutionFailed'),
        });
        return;
      }
      useExecutionStore.getState().setExecution({ executionId: result.body.execution.id });
      subscribe(result.body.execution.id);
    },
    [closeStream, subscribe],
  );

  const control = useCallback(
    async (action: 'pause' | 'resume' | 'cancel') => {
      const workspace = workspaceIdRef.current;
      const { executionId } = useExecutionStore.getState();
      if (!workspace || !executionId) return;
      const result = await executionAction(workspace, executionId, action);
      if (!result.ok && result.body.message) {
        useExecutionStore.getState().setExecution({ error: result.body.message });
      }
    },
    [],
  );

  const pause = useCallback(() => control('pause'), [control]);
  const resume = useCallback(() => control('resume'), [control]);
  const cancel = useCallback(() => control('cancel'), [control]);

  const reset = useCallback(() => {
    closeStream();
    useExecutionStore.getState().resetExecution();
  }, [closeStream]);

  /** Island reload: if an execution is still live, restore the subscription. */
  useEffect(() => {
    if (!workspaceId) return;
    let cancelled = false;
    (async () => {
      try {
        const list = await listExecutions(workspaceId);
        if (cancelled || !list.ok) return;
        const live = (list.body.executions ?? []).find((row) => LIVE_STATUSES.has(row.status));
        if (!live) return;
        const snapshot = await getExecution(workspaceId, live.id);
        if (cancelled || !snapshot.ok || !snapshot.body.execution) return;
        applySnapshot(snapshot.body.execution);
        if (LIVE_STATUSES.has(snapshot.body.execution.status)) {
          subscribe(live.id);
        }
      } catch {
        // Offline / no backend: stay idle.
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [workspaceId, applySnapshot, subscribe]);

  // Single-node (subset) execution bridge for MaterialNode.
  useEffect(() => {
    const exec = useExecutionStore.getState();
    exec.setStartNodeExecution((nodeId: string) => {
      void startExecution({ mode: 'subset', nodeIds: [nodeId] });
    });
    return () => {
      useExecutionStore.getState().setStartNodeExecution(null);
    };
  }, [startExecution]);

  // Unmount: close the stream (execution keeps running host-side).
  useEffect(() => closeStream, [closeStream]);

  return { startExecution, pause, resume, cancel, reset };
}
