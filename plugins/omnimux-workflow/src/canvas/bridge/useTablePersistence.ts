/**
 * useTablePersistence — Autosave and Flush pipeline for tabular documents (.htable).
 *
 * Parallel to useWorkspacePersistence:
 * - Listens to tableDocumentCache dirty events.
 * - Debounced (800ms) PUT to /omnimux-workflow/api/workspaces/:wsId/tables/:tableId.
 * - Provides flushDirtyTables() for unmount / beforeReset / pagehide hard gates.
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import { tableDocumentCache, type DirtyTableCapture } from '../store/tableDocumentCache.ts';
import { saveWorkspaceTable } from './apiClient.ts';

const TABLE_AUTOSAVE_DEBOUNCE_MS = 800;

export interface TablePersistenceController {
  isDirty: boolean;
  saveNow: () => Promise<void>;
  flushDirtyTables: (opts?: { force?: boolean }) => void;
}

export interface UseTablePersistenceOptions {
  workspaceId: string | null;
  enabled?: boolean;
}

export function useTablePersistence(
  opts: UseTablePersistenceOptions,
): TablePersistenceController {
  const { workspaceId, enabled = true } = opts;
  const [isDirty, setIsDirty] = useState(false);

  const workspaceIdRef = useRef(workspaceId);
  workspaceIdRef.current = workspaceId;
  const enabledRef = useRef(enabled);
  enabledRef.current = enabled;
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const savingRef = useRef(false);

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const performSave = useCallback(
    async (captures?: DirtyTableCapture[]) => {
      const wsId = workspaceIdRef.current;
      if (!wsId || !enabledRef.current) return;

      const itemsToSave = captures ?? tableDocumentCache.captureDirty();
      if (itemsToSave.length === 0) {
        setIsDirty(false);
        return;
      }

      savingRef.current = true;
      try {
        await Promise.all(
          itemsToSave.map(async (item) => {
            tableDocumentCache.setSaving(item.tableId, true);
            try {
              const res = await saveWorkspaceTable(wsId, item.tableId, {
                expectedRev: item.expectedRev,
                document: item.document,
              });
              if (res.ok && res.body.table) {
                tableDocumentCache.markSaved(
                  item.tableId,
                  res.body.table.contentRev,
                  item.document,
                );
              } else {
                tableDocumentCache.markSaveError(
                  item.tableId,
                  res.body.message || res.body.error || 'Save failed',
                );
              }
            } catch (err: any) {
              tableDocumentCache.markSaveError(item.tableId, err.message || 'Network error');
            }
          }),
        );
      } finally {
        savingRef.current = false;
        const remaining = tableDocumentCache.captureDirty();
        setIsDirty(remaining.length > 0);
      }
    },
    [],
  );

  const scheduleSave = useCallback(() => {
    if (!enabledRef.current || !workspaceIdRef.current) return;
    setIsDirty(true);
    clearTimer();
    timerRef.current = setTimeout(() => {
      timerRef.current = null;
      void performSave();
    }, TABLE_AUTOSAVE_DEBOUNCE_MS);
  }, [performSave]);

  const flushDirtyTables = useCallback(
    (opts: { force?: boolean } = {}) => {
      clearTimer();
      const wsId = workspaceIdRef.current;
      if (!wsId) return;

      const captures = tableDocumentCache.captureDirty();
      if (captures.length === 0) return;

      void performSave(captures);
    },
    [performSave],
  );

  const saveNow = useCallback(async () => {
    clearTimer();
    await performSave();
  }, [performSave]);

  // Subscribe to table cache mutations
  useEffect(() => {
    if (!enabled || !workspaceId) return;

    const unsubscribe = tableDocumentCache.subscribeGlobal(() => {
      const dirtyItems = tableDocumentCache.captureDirty();
      if (dirtyItems.length > 0) {
        scheduleSave();
      } else {
        setIsDirty(false);
      }
    });

    return () => {
      unsubscribe();
      clearTimer();
    };
  }, [enabled, workspaceId, scheduleSave]);

  // Best-effort flush on pagehide
  useEffect(() => {
    if (!enabled) return;

    const handlePageHide = () => {
      flushDirtyTables({ force: true });
    };

    window.addEventListener('pagehide', handlePageHide);
    return () => {
      window.removeEventListener('pagehide', handlePageHide);
    };
  }, [enabled, flushDirtyTables]);

  return {
    isDirty,
    saveNow,
    flushDirtyTables,
  };
}
