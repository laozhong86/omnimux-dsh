/**
 * Island boot: ensure a workspace exists, hydrate canvasStore, load the
 * capability catalog. Extracted from App so chrome stays presentational.
 */
import { useEffect, useState } from 'react';
import { useCanvasStore } from '../store/canvasStore';
import { t } from '../i18n';
import {
  listWorkspaces,
  createWorkspace,
  getWorkspace,
  fetchCapabilities,
} from '../bridge/apiClient';
import type { CapabilityCatalog } from '../../shared/api';
import type { CanvasWorkspaceSnapshot } from '../../shared/canvasTypes';

export type BootState =
  | { phase: 'loading' }
  | { phase: 'ready'; workspace: CanvasWorkspaceSnapshot }
  | { phase: 'error'; message: string };

export function useCanvasBoot() {
  const [boot, setBoot] = useState<BootState>({ phase: 'loading' });
  const [catalog, setCatalog] = useState<CapabilityCatalog | null>(null);
  const hydrateGraph = useCanvasStore((state) => state.hydrateGraph);
  const resetStore = useCanvasStore((state) => state.resetStore);
  const nodeCount = useCanvasStore((state) => state.nodes.length);

  useEffect(() => {
    let cancelled = false;
    // 重跑时先退出 ready，persistence enabled=false，避免 resetStore 空图被 autosave
    setBoot({ phase: 'loading' });
    (async () => {
      try {
        void fetchCapabilities().then((result) => {
          if (!cancelled && result.ok) setCatalog(result.body);
        });

        const list = await listWorkspaces();
        if (cancelled) return;
        let workspaceId: string | undefined = list.body.workspaces?.[0]?.id;
        if (!workspaceId) {
          const created = await createWorkspace('我的工作流');
          if (cancelled) return;
          if (!created.ok || !created.body.workspace) {
            throw new Error(created.body.message ?? t('error.createWorkspaceFailed'));
          }
          workspaceId = created.body.workspace.id;
        }
        const loaded = await getWorkspace(workspaceId);
        if (cancelled) return;
        if (!loaded.ok || !loaded.body.workspace) {
          throw new Error(loaded.body.message ?? t('error.loadWorkspaceFailed'));
        }
        hydrateGraph(loaded.body.workspace.nodes, loaded.body.workspace.edges);
        setBoot({ phase: 'ready', workspace: loaded.body.workspace });
      } catch (error) {
        if (!cancelled) {
          setBoot({ phase: 'error', message: error instanceof Error ? error.message : String(error) });
        }
      }
    })();
    return () => {
      cancelled = true;
      resetStore();
    };
  }, [hydrateGraph, resetStore]);

  return { boot, setBoot, catalog, nodeCount };
}
