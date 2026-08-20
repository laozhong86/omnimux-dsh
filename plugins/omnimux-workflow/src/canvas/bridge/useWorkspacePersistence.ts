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
 * - Selection-only changes are NOT saved (the save signature strips the
 *   transient `selected` flags), so casual clicking never dirties the doc.
 * - Best-effort flush on unmount / pagehide.
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import { useCanvasStore } from '../store/canvasStore';
import { getWorkspace, saveWorkspace } from './apiClient';
import type {
  CanvasWorkspaceSnapshot,
  SerializedCanvasEdge,
  SerializedCanvasNode,
} from '../../shared/canvasTypes';

const AUTOSAVE_DEBOUNCE_MS = 1000;
const SAVED_BADGE_MS = 2500;

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
  /** Conflict recovery: pull the server version and re-save local content. */
  resolveConflict: () => Promise<void>;
  /** Discard local changes and re-hydrate from the server snapshot. */
  reloadFromServer: () => Promise<void>;
}

export interface UseWorkspacePersistenceOptions {
  /** Called with the fresh server snapshot after every successful save. */
  onSaved?: (workspace: CanvasWorkspaceSnapshot) => void;
}

/** Strip transient fields before persistence (island internals + selection). */
function sanitizeNodes(nodes: SerializedCanvasNode[]): SerializedCanvasNode[] {
  return nodes.map((node) => {
    const data = { ...(node.data as Record<string, unknown>) };
    delete data.__catalog;
    return { ...node, data, selected: false };
  });
}

function sanitizeEdges(edges: SerializedCanvasEdge[]): SerializedCanvasEdge[] {
  return edges.map((edge) => ({ ...edge, selected: false }));
}

/** Stable content signature (drives dirty detection). */
function signatureOf(nodes: SerializedCanvasNode[], edges: SerializedCanvasEdge[]): string {
  return JSON.stringify({ nodes: sanitizeNodes(nodes), edges: sanitizeEdges(edges) });
}

export function useWorkspacePersistence(
  workspace: CanvasWorkspaceSnapshot | null,
  opts: UseWorkspacePersistenceOptions = {},
): PersistenceController {
  const [status, setStatus] = useState<AutosaveStatus>('idle');
  const [isDirty, setIsDirty] = useState(false);

  const workspaceRef = useRef<CanvasWorkspaceSnapshot | null>(workspace);
  const serverVersionRef = useRef(0);
  const lastSavedSigRef = useRef('');
  const lastInitIdRef = useRef('');
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const savedBadgeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const savingRef = useRef(false);
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
    const { nodes, edges } = useCanvasStore.getState();
    lastSavedSigRef.current = signatureOf(nodes, edges);
    setIsDirty(false);
    setStatus('idle');
  }, [workspace?.id, workspace?.version]); // eslint-disable-line react-hooks/exhaustive-deps

  const clearSavedBadgeTimer = () => {
    if (savedBadgeTimerRef.current) {
      clearTimeout(savedBadgeTimerRef.current);
      savedBadgeTimerRef.current = null;
    }
  };

  const performSave = useCallback(async (): Promise<void> => {
    const ws = workspaceRef.current;
    if (!ws) return;
    if (savingRef.current) {
      // A save is in flight; the trailing store notification re-schedules.
      return;
    }

    const { nodes, edges } = useCanvasStore.getState();
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

      // 409: pull the server version, adopt it, retry once (local
      // last-write-wins — see plan §5.2 conflict policy).
      if (result.status === 409) {
        const latest = await getWorkspace(ws.id);
        if (latest.ok && latest.body.workspace) {
          serverVersionRef.current = latest.body.workspace.version;
          result = await saveWorkspace(ws.id, {
            name,
            nodes: sanitizeNodes(nodes),
            edges: sanitizeEdges(edges),
            expectedVersion: serverVersionRef.current,
          });
        }
      }

      if (result.ok && result.body.workspace) {
        serverVersionRef.current = result.body.workspace.version;
        lastSavedSigRef.current = signatureOf(nodes, edges);
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
  useEffect(() => {
    const evaluate = () => {
      const ws = workspaceRef.current;
      if (!ws) return;
      const { nodes, edges } = useCanvasStore.getState();
      const sig = signatureOf(nodes, edges);
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
      setStatus((prev) => (prev === 'saving' || prev === 'conflict' ? prev : 'pending'));
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        timerRef.current = null;
        void performSave();
      }, AUTOSAVE_DEBOUNCE_MS);
    };

    const unsubscribe = useCanvasStore.subscribe(evaluate);
    return () => {
      unsubscribe();
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [performSave]);

  // Best-effort flush on unmount / pagehide.
  useEffect(() => {
    const flushIfDirty = () => {
      const ws = workspaceRef.current;
      if (!ws) return;
      const { nodes, edges } = useCanvasStore.getState();
      if (signatureOf(nodes, edges) !== lastSavedSigRef.current) {
        void performSave();
      }
    };
    window.addEventListener('pagehide', flushIfDirty);
    return () => {
      window.removeEventListener('pagehide', flushIfDirty);
      flushIfDirty();
      clearSavedBadgeTimer();
    };
  }, [performSave]);

  const saveNow = useCallback(async () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    await performSave();
  }, [performSave]);

  const resolveConflict = useCallback(async () => {
    // performSave already implements pull-latest + retry-once.
    await performSave();
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
    useCanvasStore.getState().hydrateGraph(snapshot.nodes, snapshot.edges);
    setIsDirty(false);
    setStatus('idle');
    onSavedRef.current?.(snapshot);
  }, []);

  return { status, isDirty, saveNow, resolveConflict, reloadFromServer };
}
