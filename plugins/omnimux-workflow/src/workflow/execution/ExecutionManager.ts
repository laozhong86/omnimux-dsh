/**
 * ExecutionManager — M3 port of Gxgen
 * `server/src/services/canvas/ExecutionManager.ts` +
 * `ExecutionRecoveryService.ts` (file-based, strict TypeScript).
 *
 * Tracks in-memory execution instances (context + scheduler), persists each
 * run under $DSH_HOME/omnimux/workflow/executions/<id>/ (execution.json +
 * dag-state.json), exposes pause/resume/cancel/status, and recovers live
 * executions after a host restart (fromPersistedState + continue).
 *
 * Port notes:
 * - Gxgen's DB sync / Redis stream cleanup / Task System bookkeeping are cut
 *   (plugin has no DB); persistence is the file-based executionStore.
 * - Recovery runs at mount (recoverAll) instead of server boot.
 */

import { ExecutionContext, ExecutionStatus, type ExecutionStatusValue } from './ExecutionContext';
import {
  ExecutionScheduler,
  type DagState,
  type ExecutableEdge,
  type ExecutableNode,
} from './ExecutionScheduler';
import {
  buildExecutionRecord,
  listPersistedExecutionIds,
  loadDagState,
  loadExecutionRecord,
  saveDagState,
  saveExecutionRecord,
  type PersistedExecutionRecord,
} from './executionStore';
import { createDispatchingNodeExecutor } from './nodeExecutors';
import { createMaterialGatewayExecutor } from './materialGatewayExecutor';
import { registerExecutor } from '../executors/registry';
import type { GenerationGateway } from '../seam/gateway';
import { createWorkflowLogger } from './logger';

const LOG_TAG = 'ExecutionManager';

/** Periodic record sync interval while running (Gxgen: 5s DB sync). */
const RECORD_SYNC_INTERVAL_MS = 5_000;

/** In-memory execution retention / auto-cancel timeout (Gxgen: 30min). */
export const EXECUTION_TIMEOUT_MS = 30 * 60 * 1000;

const TERMINAL_STATUSES = new Set<string>([
  ExecutionStatus.COMPLETED,
  ExecutionStatus.ERROR,
  ExecutionStatus.CANCELLED,
]);

const logger = createWorkflowLogger(LOG_TAG);

export interface ExecutionManagerDeps {
  executionsDir: string;
  gateway: GenerationGateway;
  /** Plugin media root (absolute). */
  mediaDir: string;
}

export interface CreateExecutionOptions {
  workspaceId: string;
  nodes: ExecutableNode[];
  edges: ExecutableEdge[];
  maxParallel?: number;
  breakpoints?: string[];
}

export interface ExecutionSummary {
  id: string;
  workspaceId: string;
  status: string;
  createdAt: string;
  progress: { total: number; completed: number; percentage: number };
}

export interface ExecutionSnapshot {
  id: string;
  workspaceId: string;
  status: string;
  createdAt: string;
  startedAt: number | null;
  completedAt: number | null;
  error: string | null;
  totalNodes: number;
  completedNodes: number;
  progress: { total: number; completed: number; running: number; pending: number; percentage: number };
  nodeStates: Record<string, unknown>;
  nodeOutputs: Record<string, unknown>;
  mediaAssets: Record<string, unknown>;
  breakpoints: string[];
}

export interface ControlResult {
  ok: boolean;
  message?: string;
}

/** Replay buffer entry: late SSE subscribers get the full event sequence. */
export interface ExecutionEventLogEntry {
  event: import('./ExecutionContext').ExecutionEventName;
  payload: unknown;
}

/** Max replay events kept per execution (covers a full run + control ops). */
const EVENT_LOG_LIMIT = 500;

const ALL_EVENT_NAMES: ReadonlyArray<import('./ExecutionContext').ExecutionEventName> = [
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

interface ExecutionEntry {
  context: ExecutionContext;
  scheduler: ExecutionScheduler;
  abortController: AbortController;
  nodes: ExecutableNode[];
  edges: ExecutableEdge[];
  maxParallel: number;
  createdAt: string;
  syncTimer: ReturnType<typeof setInterval> | null;
  timeoutTimer: ReturnType<typeof setTimeout> | null;
  loopRunning: boolean;
  isRecovered: boolean;
  /** Replay buffer for late SSE subscribers (create-then-subscribe race). */
  eventLog: ExecutionEventLogEntry[];
  /** Event-listener disposers (detached on dispose so a dying loop cannot
   *  clobber the persisted record of a recovered run). */
  disposers: Array<() => void>;
}

export function createExecutionManager(deps: ExecutionManagerDeps) {
  const { executionsDir, gateway, mediaDir } = deps;
  const entries = new Map<string, ExecutionEntry>();

  // Extension point ② wiring: register the gateway-backed material executor
  // (replaces nothing else — further node types register the same way).
  registerExecutor(createMaterialGatewayExecutor({ gateway }));

  // ========================================================================
  // Persistence helpers
  // ========================================================================

  const persistRecord = (entry: ExecutionEntry): void => {
    try {
      saveExecutionRecord(executionsDir, buildExecutionRecord({
        context: entry.context.toJSON(),
        nodes: entry.nodes,
        edges: entry.edges,
        maxParallel: entry.maxParallel,
        createdAt: entry.createdAt,
        progress: entry.scheduler.getProgress(),
        eventLog: entry.eventLog,
      }));
    } catch (error) {
      logger.warn('failed to persist execution record', {
        executionId: entry.context.id,
        error: error instanceof Error ? error.message : String(error),
      });
    }
  };

  const persistDagState = (executionId: string, state: DagState): Promise<void> => {
    saveDagState(executionsDir, executionId, state);
    return Promise.resolve();
  };

  const stopSyncTimer = (entry: ExecutionEntry): void => {
    if (entry.syncTimer) {
      clearInterval(entry.syncTimer);
      entry.syncTimer = null;
    }
  };

  const stopTimeoutTimer = (entry: ExecutionEntry): void => {
    if (entry.timeoutTimer) {
      clearTimeout(entry.timeoutTimer);
      entry.timeoutTimer = null;
    }
  };

  const setupListeners = (entry: ExecutionEntry): void => {
    const { context } = entry;

    const onStart = (): void => {
      persistRecord(entry);
      stopSyncTimer(entry);
      entry.syncTimer = setInterval(() => persistRecord(entry), RECORD_SYNC_INTERVAL_MS);
    };
    const onPause = (): void => {
      persistRecord(entry);
    };
    const onResume = (): void => {
      persistRecord(entry);
    };
    const onTerminal = (): void => {
      stopSyncTimer(entry);
      persistRecord(entry);
    };

    context.events.on('execution_start', onStart);
    context.events.on('execution_paused', onPause);
    context.events.on('execution_resumed', onResume);
    context.events.on('execution_complete', onTerminal);
    context.events.on('execution_error', onTerminal);
    context.events.on('execution_cancelled', onTerminal);

    // Replay recorder: every protocol event lands in the entry log so an SSE
    // subscriber that attaches after execution_start still sees the whole
    // sequence (create-then-subscribe is the plugin's flow).
    for (const event of ALL_EVENT_NAMES) {
      const recorder = (payload: unknown): void => {
        entry.eventLog.push({ event, payload });
        if (entry.eventLog.length > EVENT_LOG_LIMIT) {
          entry.eventLog.splice(0, entry.eventLog.length - EVENT_LOG_LIMIT);
        }
      };
      context.events.on(event, recorder);
      entry.disposers.push(() => context.events.off(event, recorder));
    }

    entry.disposers.push(
      () => context.events.off('execution_start', onStart),
      () => context.events.off('execution_paused', onPause),
      () => context.events.off('execution_resumed', onResume),
      () => context.events.off('execution_complete', onTerminal),
      () => context.events.off('execution_error', onTerminal),
      () => context.events.off('execution_cancelled', onTerminal),
    );
  };

  const continueLoop = (entry: ExecutionEntry, opts: { isRecovery?: boolean } = {}): void => {
    if (entry.loopRunning) return;
    entry.loopRunning = true;
    void entry.scheduler.execute({ isRecovery: opts.isRecovery ?? true }).finally(() => {
      entry.loopRunning = false;
    });
  };

  const startTimeout = (entry: ExecutionEntry): void => {
    entry.timeoutTimer = setTimeout(() => {
      cleanupExecution(entry.context.id);
    }, EXECUTION_TIMEOUT_MS);
  };

  // ========================================================================
  // Create
  // ========================================================================

  function createExecution(opts: CreateExecutionOptions): ExecutionEntry {
    const context = new ExecutionContext({
      workflowId: opts.workspaceId,
      breakpoints: new Set(opts.breakpoints ?? []),
    });
    const abortController = new AbortController();
    const { executor } = createDispatchingNodeExecutor({
      gateway,
      mediaRoot: mediaDir,
      executionId: context.id,
      edges: opts.edges,
      abortController,
    });
    const scheduler = new ExecutionScheduler({
      nodes: opts.nodes,
      edges: opts.edges,
      context,
      nodeExecutor: executor,
      maxParallel: opts.maxParallel,
      persistDagState: (state) => persistDagState(context.id, state),
    });

    const entry: ExecutionEntry = {
      context,
      scheduler,
      abortController,
      nodes: opts.nodes,
      edges: opts.edges,
      maxParallel: opts.maxParallel ?? 3,
      createdAt: new Date().toISOString(),
      syncTimer: null,
      timeoutTimer: null,
      loopRunning: false,
      isRecovered: false,
      eventLog: [],
      disposers: [],
    };

    entries.set(context.id, entry);
    logger.info('execution created', {
      executionId: context.id,
      workspaceId: opts.workspaceId,
      nodeCount: opts.nodes.length,
      edgeCount: opts.edges.length,
      maxParallel: entry.maxParallel,
    });

    // Persist the initial record (graph snapshot enables restart recovery).
    persistRecord(entry);
    setupListeners(entry);
    startTimeout(entry);

    // Fire-and-forget: the HTTP create route answers immediately, the DAG
    // runs in the background and streams progress over SSE.
    continueLoop(entry, { isRecovery: false });
    return entry;
  }

  // ========================================================================
  // Lookup / status
  // ========================================================================

  function getEntry(executionId: string): ExecutionEntry | null {
    return entries.get(executionId) ?? null;
  }

  function listExecutions(workspaceId?: string): ExecutionSummary[] {
    const rows: ExecutionSummary[] = [];
    for (const entry of entries.values()) {
      if (workspaceId && entry.context.workflowId !== workspaceId) continue;
      rows.push({
        id: entry.context.id,
        workspaceId: entry.context.workflowId,
        status: entry.context.status,
        createdAt: entry.createdAt,
        progress: entry.scheduler.getProgress(),
      });
    }
    rows.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
    return rows;
  }

  function snapshotOfEntry(entry: ExecutionEntry): ExecutionSnapshot {
    const json = entry.context.toJSON();
    const progress = entry.scheduler.getProgress();
    return {
      id: json.id,
      workspaceId: json.workflowId,
      status: json.status,
      createdAt: entry.createdAt,
      startedAt: json.startedAt,
      completedAt: json.completedAt,
      error: json.error,
      totalNodes: json.totalNodes,
      completedNodes: json.completedNodes,
      progress,
      nodeStates: json.nodeStates,
      nodeOutputs: json.nodeOutputs,
      mediaAssets: json.mediaAssets,
      breakpoints: json.breakpoints,
    };
  }

  function snapshotOfRecord(record: PersistedExecutionRecord): ExecutionSnapshot {
    return {
      id: record.id,
      workspaceId: record.workspaceId,
      status: record.status,
      createdAt: record.createdAt,
      startedAt: record.startedAt,
      completedAt: record.completedAt,
      error: record.error,
      totalNodes: record.totalNodes,
      completedNodes: record.completedNodes,
      progress: {
        total: record.progress.total,
        completed: record.progress.completed,
        running: 0,
        pending: Math.max(0, record.progress.total - record.progress.completed),
        percentage: record.progress.percentage,
      },
      nodeStates: record.nodeStates,
      nodeOutputs: record.nodeOutputs,
      mediaAssets: record.mediaAssets,
      breakpoints: record.breakpoints,
    };
  }

  /** In-memory snapshot first; persisted record read-only fallback. */
  function getSnapshot(executionId: string): ExecutionSnapshot | null {
    const entry = entries.get(executionId);
    if (entry) return snapshotOfEntry(entry);
    const record = loadExecutionRecord(executionsDir, executionId);
    return record ? snapshotOfRecord(record) : null;
  }

  // ========================================================================
  // Control: pause / resume / cancel
  // ========================================================================

  async function pauseExecution(executionId: string): Promise<ControlResult> {
    const entry = entries.get(executionId);
    if (!entry) return { ok: false, message: '执行不存在' };
    if (entry.context.status !== ExecutionStatus.RUNNING) {
      return { ok: false, message: `无法暂停 ${entry.context.status} 状态的执行` };
    }
    entry.scheduler.pause();
    return { ok: true };
  }

  async function resumeExecution(executionId: string): Promise<ControlResult> {
    let entry = entries.get(executionId) ?? null;
    if (!entry) {
      entry = await recoverExecution(executionId);
      if (!entry) return { ok: false, message: '执行不存在或不可恢复' };
    }
    const status = entry.context.status;
    if (status !== ExecutionStatus.PAUSED && status !== ExecutionStatus.RUNNING) {
      return { ok: false, message: `只能恢复暂停状态的执行（当前 ${status}）` };
    }
    // Emits execution_resumed when paused; no-op when already running.
    entry.scheduler.resume();
    // A recovered (or crashed-loop) execution has no live loop: restart it.
    if (!entry.loopRunning) {
      continueLoop(entry, { isRecovery: true });
    }
    return { ok: true };
  }

  async function cancelExecution(executionId: string): Promise<ControlResult> {
    const entry = entries.get(executionId);
    if (!entry) return { ok: false, message: '执行不存在' };
    const canCancelStatuses: readonly ExecutionStatusValue[] = [
      ExecutionStatus.PENDING,
      ExecutionStatus.RUNNING,
      ExecutionStatus.PAUSED,
    ];
    if (!canCancelStatuses.includes(entry.context.status)) {
      return { ok: false, message: `无法取消 ${entry.context.status} 状态的执行` };
    }
    entry.scheduler.cancel();
    // Abort in-flight node executors (cooperative cancellation).
    entry.abortController.abort();
    return { ok: true };
  }

  // ========================================================================
  // SSE attach
  // ========================================================================

  /** Resolve a live context for the SSE route, recovering from disk if the
   *  run predates this mount (crash/restart recovery). Returns the context
   *  plus its replay log so late subscribers see the full event sequence. */
  async function openEventStream(
    executionId: string,
  ): Promise<{ context: ExecutionContext; eventLog: ExecutionEventLogEntry[] } | null> {
    const existing = entries.get(executionId);
    if (existing) {
      // Crash-loop guard: a 'running' context without a live loop resumes.
      if (!existing.loopRunning && existing.context.status === ExecutionStatus.RUNNING) {
        continueLoop(existing, { isRecovery: true });
      }
      return { context: existing.context, eventLog: existing.eventLog };
    }
    const entry = await recoverExecution(executionId);
    if (!entry) return null;
    if (entry.context.status === ExecutionStatus.RUNNING) {
      continueLoop(entry, { isRecovery: true });
    }
    return { context: entry.context, eventLog: entry.eventLog };
  }

  // ========================================================================
  // Recovery (Gxgen ExecutionRecoveryService port, file-based)
  // ========================================================================

  async function recoverExecution(executionId: string): Promise<ExecutionEntry | null> {
    const existing = entries.get(executionId);
    if (existing) return existing;

    const record = loadExecutionRecord(executionsDir, executionId);
    if (!record) return null;
    if (TERMINAL_STATUSES.has(record.status)) return null;

    // Timeout guard (Gxgen rule): a stale run is marked failed, not retried.
    if (record.startedAt !== null && Date.now() - record.startedAt > EXECUTION_TIMEOUT_MS) {
      logger.warn('recovered execution timed out, marking failed', { executionId });
      saveExecutionRecord(executionsDir, {
        ...record,
        status: ExecutionStatus.ERROR,
        error: `Execution timed out after restart (>${Math.round(EXECUTION_TIMEOUT_MS / 60000)}min)`,
        completedAt: Date.now(),
      });
      return null;
    }

    const dagState = loadDagState(executionsDir, executionId) ?? {};

    const context = ExecutionContext.fromJSON({
      id: record.id,
      workflowId: record.workspaceId,
      status: record.status,
      variables: record.variables,
      nodeOutputs: record.nodeOutputs,
      nodeStates: record.nodeStates,
      mediaAssets: record.mediaAssets,
      breakpoints: record.breakpoints,
      startedAt: record.startedAt,
      completedAt: record.completedAt,
      error: record.error,
      totalNodes: record.totalNodes,
      completedNodes: record.completedNodes,
    });

    const abortController = new AbortController();
    const { executor } = createDispatchingNodeExecutor({
      gateway,
      mediaRoot: mediaDir,
      executionId: record.id,
      edges: record.edges,
      abortController,
    });

    const scheduler = ExecutionScheduler.fromPersistedState({
      dagState,
      nodes: record.nodes,
      edges: record.edges,
      context,
      nodeExecutor: executor,
      maxParallel: record.maxParallel,
      persistDagState: (state) => persistDagState(record.id, state),
    });

    // Nodes that were in-flight at the crash got re-pended by
    // fromPersistedState — reset their node state so the UI shows pending.
    for (const nodeId of dagState.runningNodes ?? []) {
      const state = context.nodeStates.get(nodeId);
      if (state && state.status === 'running') {
        context.nodeStates.set(nodeId, {
          status: 'pending',
          startedAt: null,
          completedAt: null,
          error: null,
        });
      }
    }

    const entry: ExecutionEntry = {
      context,
      scheduler,
      abortController,
      nodes: record.nodes,
      edges: record.edges,
      maxParallel: record.maxParallel,
      createdAt: record.createdAt,
      syncTimer: null,
      timeoutTimer: null,
      loopRunning: false,
      isRecovered: true,
      // Restore the persisted replay log (unknown event names dropped) so a
      // late SSE subscriber still sees pre-crash events after recovery.
      eventLog: record.eventLog.filter(
        (row): row is ExecutionEventLogEntry =>
          (ALL_EVENT_NAMES as readonly string[]).includes(row.event),
      ),
      disposers: [],
    };
    entries.set(record.id, entry);
    setupListeners(entry);
    startTimeout(entry);

    logger.info('execution recovered', {
      executionId: record.id,
      status: record.status,
      pending: scheduler.getProgress().pending,
      completed: scheduler.getProgress().completed,
    });
    return entry;
  }

  /** Scan persisted executions and resume live ones (mount-time hook). */
  async function recoverAll(): Promise<{ recovered: number; resumed: number }> {
    const stats = { recovered: 0, resumed: 0 };
    for (const executionId of listPersistedExecutionIds(executionsDir)) {
      try {
        const entry = await recoverExecution(executionId);
        if (!entry) continue;
        stats.recovered += 1;
        if (entry.context.status === ExecutionStatus.RUNNING) {
          continueLoop(entry, { isRecovery: true });
          stats.resumed += 1;
        }
        // paused runs stay paused — the user resumes them explicitly.
      } catch (error) {
        logger.error('recovery failed', {
          executionId,
          error: error instanceof Error ? error.message : String(error),
        });
      }
    }
    if (stats.recovered > 0) {
      logger.info('recovery complete', stats);
    }
    return stats;
  }

  // ========================================================================
  // Cleanup / dispose
  // ========================================================================

  function cleanupExecution(executionId: string): void {
    const entry = entries.get(executionId);
    if (!entry) return;
    const wasRunning = entry.context.status === ExecutionStatus.RUNNING;
    if (wasRunning) {
      entry.scheduler.cancel();
      entry.abortController.abort();
    }
    stopSyncTimer(entry);
    stopTimeoutTimer(entry);
    entries.delete(executionId);
    logger.info('execution cleaned up', {
      executionId,
      wasRunning,
      finalStatus: entry.context.status,
    });
  }

  /**
   * Plugin unmount: flush + detach, but do NOT mutate statuses. A live run's
   * persisted record stays recoverable (recoverAll at next mount re-runs it).
   * Note: an un-disposed in-process loop may keep running in the background;
   * its listeners are detached so it cannot clobber the recovered record.
   */
  function disposeAll(): void {
    for (const entry of entries.values()) {
      stopSyncTimer(entry);
      stopTimeoutTimer(entry);
      for (const dispose of entry.disposers) dispose();
      entry.disposers.length = 0;
      entry.scheduler.dispose();
      persistRecord(entry);
    }
    entries.clear();
  }

  return {
    createExecution,
    getEntry,
    listExecutions,
    getSnapshot,
    pauseExecution,
    resumeExecution,
    cancelExecution,
    openEventStream,
    recoverExecution,
    recoverAll,
    cleanupExecution,
    disposeAll,
  };
}

export type ExecutionManager = ReturnType<typeof createExecutionManager>;
