/**
 * Island boot: ensure a workspace exists, hydrate canvasStore, load the
 * capability catalog. Extracted from App so chrome stays presentational.
 */
import { useEffect, useRef, useState } from 'react';
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
import { getCachedCatalog, setCachedCatalog } from '../editor/hooks/useModelParameterSchema';

export type BootState =
  | { phase: 'loading' }
  | { phase: 'ready'; workspace: CanvasWorkspaceSnapshot }
  | { phase: 'error'; message: string };

export interface UseCanvasBootOptions {
  /** 指定要加载的目标工作区/画布 ID（会话或创作页专属） */
  workspaceId?: string;
  /**
   * 卸载硬闸：必须同步读 canvas store（capture），再交给 persist PUT。
   * 调用发生在 `resetStore()` 之前；inline 回调用 ref 承接，避免进 effect deps。
   */
  beforeReset?: () => void;
}

export function useCanvasBoot(opts: UseCanvasBootOptions = {}) {
  const targetWorkspaceId = opts.workspaceId;
  const [boot, setBoot] = useState<BootState>({ phase: 'loading' });
  const [catalog, setCatalog] = useState<CapabilityCatalog | null>(() => getCachedCatalog());
  const hydrateGraph = useCanvasStore((state) => state.hydrateGraph);
  const resetStore = useCanvasStore((state) => state.resetStore);
  const nodeCount = useCanvasStore((state) => state.nodes.length);
  const beforeResetRef = useRef(opts.beforeReset);
  beforeResetRef.current = opts.beforeReset;

  useEffect(() => {
    let cancelled = false;
    // 重跑时先退出 ready，persistence enabled=false，避免 resetStore 空图被 autosave
    setBoot({ phase: 'loading' });
    (async () => {
      try {
        void fetchCapabilities().then((result) => {
          if (!cancelled && result.ok) {
            setCatalog(result.body);
            setCachedCatalog(result.body);
          }
        });

        // 1. 如果传入了特定会话/创作页的 workspaceId，优先加载或新建该专属画布
        if (targetWorkspaceId) {
          const loaded = await getWorkspace(targetWorkspaceId);
          if (cancelled) return;
          if (loaded.ok && loaded.body.workspace) {
            hydrateGraph(loaded.body.workspace.nodes, loaded.body.workspace.edges);
            setBoot({ phase: 'ready', workspace: loaded.body.workspace });
            return;
          }
          // 专属工作区尚不存在，创建属于该 ID 的纯净新工作区
          const created = await createWorkspace('工作流', targetWorkspaceId);
          if (cancelled) return;
          if (!created.ok || !created.body.workspace) {
            throw new Error(created.body.message ?? t('error.createWorkspaceFailed'));
          }
          hydrateGraph(created.body.workspace.nodes, created.body.workspace.edges);
          setBoot({ phase: 'ready', workspace: created.body.workspace });
          return;
        }

        // 2. 兜底策略（仅在没有指定 workspaceId 时回退）
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
      // 先 capture/flush 再清空，避免未 PUT 的新节点被 reset 吃掉
      beforeResetRef.current?.();
      resetStore();
    };
  }, [targetWorkspaceId, hydrateGraph, resetStore]);

  return { boot, setBoot, catalog, nodeCount };
}
