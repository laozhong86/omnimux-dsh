/**
 * useWorkspacePersistence — M2 auto-save layer (replaces the M1 manual
 * save button).
 *
 * Behavior:
 * - Subscribes to the canvasStore graph; changes are debounced (1s) and
 *   saved via PUT with the optimistic-lock version.
 * - 409 conflicts: pull the server snapshot, adopt its version, and retry
 *   the save once (local last-write-wins merge — the single-user / two
 *   windows scenario the plan §5.2 describes). A second conflict surfaces
 *   as status 'conflict' for explicit user action.
 * - Selection / measure-only changes are NOT saved (signature keeps a
 *   whitelist of canvas.json fields — strips `selected`, `measured`,
 *   `dragging`, `positionAbsolute`, `__catalog`, …), so casual clicking
 *   and first layout measure never dirty the doc.
 * - Best-effort flush on unmount / pagehide.
 *
 * 空图保护（persistPolicy）：
 * - 决定保存的瞬间同步拷贝 {nodes, edges}，await 后只用这份快照。
 * - 未观察到用户删光时，禁止把非空图覆盖成空（reset / flush / autosave）。
 * - hydrate 完成前（enabled=false）不订阅、不 flush。
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import { useCanvasStore } from '../store/canvasStore';
import { getWorkspace, getWorkspaceVersion, saveWorkspace } from './apiClient';
import type {
  CanvasWorkspaceSnapshot,
  SerializedCanvasEdge,
  SerializedCanvasNode,
} from '../../shared/canvasTypes';
import {
  decidePersist,
  inferPersistCause,
  shouldPersistEmptyGraph,
  snapshotGraph,
  type PersistCause,
} from './persistPolicy';
import { sanitizeEdges, sanitizeNodes, signatureOf } from './persistSanitize';

const AUTOSAVE_DEBOUNCE_MS = 1000;
const SAVED_BADGE_MS = 2500;
/** PR3: external-edit version poll interval (visible tab only). */
const EXTERNAL_WATCH_INTERVAL_MS = 3000;

export type AutosaveStatus =
  | 'idle'
  | 'pending'
  | 'saving'
  | 'saved'
  | 'error'
  | 'conflict';

export interface PersistenceController {
  status: AutosaveStatus;
  /** Whether the local graph differs from the last saved snapshot. */
  isDirty: boolean;
  /** Force an immediate save (flushes the debounce timer). */
  saveNow: () => Promise<void>;
  /**
   * 卸载硬闸：清 debounce，同步 `readStoreCapture()`，再 `void performSave`。
   * 必须在 `resetStore()` 之前调用；PUT 可以异步，capture 必须钉死。
   */
  flushPendingSave: () => void;
  /** Conflict recovery: pull the server version and re-save local content. */
  resolveConflict: () => Promise<void>;
  /** Discard local changes and re-hydrate from the server snapshot. */
  reloadFromServer: () => Promise<void>;
}

export interface UseWorkspacePersistenceOptions {
  /** Called with the fresh server snapshot after every successful save. */
  onSaved?: (workspace: CanvasWorkspaceSnapshot) => void;
  /**
   * hydrate 完成前必须为 false：不订阅 store、不 flush。
   * App 绑 `boot.phase === 'ready'`。
   */
  enabled?: boolean;
}

interface GraphCapture {
  nodes: SerializedCanvasNode[];
  edges: SerializedCanvasEdge[];
}

function readStoreCapture(): GraphCapture {
  const { nodes, edges } = useCanvasStore.getState();
  const snap = snapshotGraph(nodes as SerializedCanvasNode[], edges as SerializedCanvasEdge[]);
  return { nodes: snap.nodes, edges: snap.edges };
}

export function useWorkspacePersistence(
  workspace: CanvasWorkspaceSnapshot | null,
  opts: UseWorkspacePersistenceOptions = {},
): PersistenceController {
  const enabled = opts.enabled !== false;
  const [status, setStatus] = useState<AutosaveStatus>('idle');
  const [isDirty, setIsDirty] = useState(false);

  const workspaceRef = useRef<CanvasWorkspaceSnapshot | null>(workspace);
  const serverVersionRef = useRef(0);
  const lastSavedSigRef = useRef('');
  const lastSavedNodeCountRef = useRef(0);
  const lastInitIdRef = useRef('');
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const savedBadgeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const savingRef = useRef(false);
  const enabledRef = useRef(enabled);
  enabledRef.current = enabled;
  const onSavedRef = useRef(opts.onSaved);
  onSavedRef.current = opts.onSaved;

  // (Re)initialize tracking on workspace switch / initial load. A mere
  // version bump from our own successful save only refreshes the server
  // version — it must not clobber the 'saved' badge or dirty tracking.
  useEffect(() => {
    workspaceRef.current = workspace;
    if (!workspace) return;
    serverVersionRef.current = workspace.version;
    if (lastInitIdRef.current === workspace.id) return;
    lastInitIdRef.current = workspace.id;
    // 以磁盘/服务端快照为 last-saved，不读可能已被 reset 的 store
    lastSavedSigRef.current = signatureOf(workspace.nodes, workspace.edges);
    lastSavedNodeCountRef.current = workspace.nodes.length;
    setIsDirty(false);
    setStatus('idle');
  }, [workspace?.id, workspace?.version]); // eslint-disable-line react-hooks/exhaustive-deps

  const clearSavedBadgeTimer = () => {
    if (savedBadgeTimerRef.current) {
      clearTimeout(savedBadgeTimerRef.current);
      savedBadgeTimerRef.current = null;
    }
  };

  /**
   * 只用调用瞬间传入的 capture；await 之后禁止再读 store。
   */
  const performSave = useCallback(async (
    capture: GraphCapture,
    cause: PersistCause,
    force = false,
  ): Promise<void> => {
    const ws = workspaceRef.current;
    if (!ws) return;
    // 卸载硬闸（force）必须在 enabled 被打成 false 时仍能发出已钉死的快照
    if (!force && !enabledRef.current) return;
    if (savingRef.current) {
      // A save is in flight; the trailing store notification re-schedules.
      return;
    }

    const decision = decidePersist({
      lastSavedNodeCount: lastSavedNodeCountRef.current,
      nextNodes: capture.nodes,
      nextEdges: capture.edges,
      cause,
      lastSavedSignature: lastSavedSigRef.current,
      nextSignature: signatureOf(capture.nodes, capture.edges),
    });
    if (!decision.persist || !decision.snapshot) return;

    const { nodes, edges } = decision.snapshot;
    const name = ws.name;
    savingRef.current = true;
    setStatus('saving');
    try {
      let result = await saveWorkspace(ws.id, {
        name,
        nodes: sanitizeNodes(nodes),
        edges: sanitizeEdges(edges),
        expectedVersion: serverVersionRef.current,
      });

      // 409: the doc moved on under us (another window, or an agent edit
      // via the workflow_* write tools). Local last-write-wins retry was
      // the M2 policy, but it silently clobbers agent edits — PR3 surfaces
      // the conflict instead; the user picks resolveConflict (push local)
      // or reloadFromServer (take remote).
      if (result.status === 409) {
        if (typeof result.body.current === 'number') {
          serverVersionRef.current = result.body.current;
        }
        setStatus('conflict');
        return;
      }

      if (result.ok && result.body.workspace) {
        serverVersionRef.current = result.body.workspace.version;
        lastSavedSigRef.current = signatureOf(nodes, edges);
        lastSavedNodeCountRef.current = nodes.length;
        setIsDirty(false);
        setStatus('saved');
        clearSavedBadgeTimer();
        savedBadgeTimerRef.current = setTimeout(() => {
          setStatus((prev) => (prev === 'saved' ? 'idle' : prev));
        }, SAVED_BADGE_MS);
        onSavedRef.current?.(result.body.workspace);
      } else if (result.status === 409) {
        setStatus('conflict');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      savingRef.current = false;
    }
  }, []);

  // Core subscription: debounce store changes, skip no-op notifications.
  // hydrate 完成前不订阅。
  useEffect(() => {
    if (!enabled) return;
    const evaluate = (cause: PersistCause = 'autosave') => {
      const ws = workspaceRef.current;
      if (!ws) return;
      if (!enabledRef.current) return;
      const capture = readStoreCapture();
      const sig = signatureOf(capture.nodes, capture.edges);
      const dirty = sig !== lastSavedSigRef.current;
      setIsDirty(dirty);
      if (!dirty) {
        if (timerRef.current) {
          clearTimeout(timerRef.current);
          timerRef.current = null;
        }
        setStatus((prev) => (prev === 'pending' ? 'idle' : prev));
        return;
      }
      const inferred = inferPersistCause(capture.nodes.length, cause);
      if (
        !shouldPersistEmptyGraph({
          lastSavedNodeCount: lastSavedNodeCountRef.current,
          nextNodeCount: capture.nodes.length,
          cause: inferred,
        })
      ) {
        // 从有节点跳到 0 但不是 user-delete：跳过，不要 debounce 存空
        if (timerRef.current) {
          clearTimeout(timerRef.current);
          timerRef.current = null;
        }
        setIsDirty(false);
        setStatus((prev) => (prev === 'pending' ? 'idle' : prev));
        return;
      }
      setStatus((prev) => (prev === 'saving' || prev === 'conflict' ? prev : 'pending'));
      if (timerRef.current) clearTimeout(timerRef.current);
      // 决定保存的瞬间钉死 capture；1s 后只用这份，禁止再读 store
      const scheduled: GraphCapture = { nodes: capture.nodes, edges: capture.edges };
      const scheduledCause = inferred;
      timerRef.current = setTimeout(() => {
        timerRef.current = null;
        void performSave(scheduled, scheduledCause);
      }, AUTOSAVE_DEBOUNCE_MS);
    };

    const unsubscribe = useCanvasStore.subscribe(() => {
      evaluate('autosave');
    });
    return () => {
      unsubscribe();
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [performSave, enabled]);

  // Best-effort flush on unmount / pagehide.
  // 先同步签名+拷贝，再交给 save（禁止 void performSave() 无快照）。
  useEffect(() => {
    if (!enabled) return;
    const flushIfDirty = () => {
      if (!enabledRef.current) return;
      const ws = workspaceRef.current;
      if (!ws) return;
      const capture = readStoreCapture();
      const cause = inferPersistCause(capture.nodes.length, 'flush');
      const decision = decidePersist({
        lastSavedNodeCount: lastSavedNodeCountRef.current,
        nextNodes: capture.nodes,
        nextEdges: capture.edges,
        cause,
        lastSavedSignature: lastSavedSigRef.current,
        nextSignature: signatureOf(capture.nodes, capture.edges),
      });
      if (!decision.persist || !decision.snapshot) return;
      void performSave(decision.snapshot, cause);
    };
    window.addEventListener('pagehide', flushIfDirty);
    return () => {
      window.removeEventListener('pagehide', flushIfDirty);
      flushIfDirty();
      clearSavedBadgeTimer();
    };
  }, [performSave, enabled]);

  const saveNow = useCallback(async () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    const capture = readStoreCapture();
    await performSave(capture, inferPersistCause(capture.nodes.length, 'autosave'));
  }, [performSave]);

  /**
   * 必须同步：先读 store 再交给 PUT。调用方保证发生在 resetStore() 之前。
   */
  const flushPendingSave = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    const ws = workspaceRef.current;
    if (!ws) return;
    const capture = readStoreCapture();
    const cause: PersistCause = 'flush';
    const decision = decidePersist({
      lastSavedNodeCount: lastSavedNodeCountRef.current,
      nextNodes: capture.nodes,
      nextEdges: capture.edges,
      cause,
      lastSavedSignature: lastSavedSigRef.current,
      nextSignature: signatureOf(capture.nodes, capture.edges),
    });
    if (!decision.persist || !decision.snapshot) return;
    void performSave(decision.snapshot, cause, true);
  }, [performSave]);

  const resolveConflict = useCallback(async () => {
    const capture = readStoreCapture();
    await performSave(capture, inferPersistCause(capture.nodes.length, 'autosave'));
  }, [performSave]);

  const reloadFromServer = useCallback(async () => {
    const ws = workspaceRef.current;
    if (!ws) return;
    const latest = await getWorkspace(ws.id);
    if (!latest.ok || !latest.body.workspace) {
      setStatus('error');
      return;
    }
    const snapshot = latest.body.workspace;
    serverVersionRef.current = snapshot.version;
    lastSavedSigRef.current = signatureOf(snapshot.nodes, snapshot.edges);
    lastSavedNodeCountRef.current = snapshot.nodes.length;
    useCanvasStore.getState().hydrateGraph(snapshot.nodes, snapshot.edges);
    setIsDirty(false);
    setStatus('idle');
    onSavedRef.current?.(snapshot);
  }, []);

  // PR3 external-edit watcher: the agent write tools bump the workspace
  // version without this window noticing. Poll the lightweight /version
  // route while the tab is visible; when the server runs ahead, adopt the
  // server graph if local is clean, otherwise surface the conflict state
  // (never silently clobber either side).
  useEffect(() => {
    if (!enabled) return;
    let inFlight = false;
    const tick = async () => {
      if (inFlight) return;
      if (!enabledRef.current) return;
      if (typeof document !== 'undefined' && document.visibilityState === 'hidden') return;
      const ws = workspaceRef.current;
      if (!ws || savingRef.current) return;
      inFlight = true;
      try {
        const probe = await getWorkspaceVersion(ws.id);
        if (!probe.ok || typeof probe.body.version !== 'number') return;
        if (probe.body.version <= serverVersionRef.current) return;
        const capture = readStoreCapture();
        const dirty = signatureOf(capture.nodes, capture.edges) !== lastSavedSigRef.current;
        if (dirty) {
          // Adopt the server version so future saves don't 409-loop, and let
          // the user resolve explicitly.
          serverVersionRef.current = probe.body.version;
          setStatus('conflict');
          return;
        }
        await reloadFromServer();
      } catch {
        // Probe failures are silent — the next tick retries.
      } finally {
        inFlight = false;
      }
    };
    const timer = setInterval(() => {
      void tick();
    }, EXTERNAL_WATCH_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [enabled, reloadFromServer]);

  return { status, isDirty, saveNow, flushPendingSave, resolveConflict, reloadFromServer };
}
