/**
 * dsh-workflow canvas island application root.
 *
 * Boot flow: ensure a workspace exists (create on first open) -> hydrate
 * the canvas store -> render the editor. The header exposes a manual save
 * (M2 replaces this with debounced auto-save + conflict merge UX).
 */

import { useCallback, useEffect, useState } from 'react';
import CanvasEditor from './editor/CanvasEditor';
import { useCanvasStore } from './store/canvasStore';
import {
  listWorkspaces,
  createWorkspace,
  getWorkspace,
  saveWorkspace,
  fetchCapabilities,
} from './bridge/apiClient';
import type { CapabilityCatalog } from '../shared/api';
import type { CanvasWorkspaceSnapshot } from '../shared/canvasTypes';

export interface CanvasAppProps {
  onClose?: () => void;
}

type BootState =
  | { phase: 'loading' }
  | { phase: 'ready'; workspace: CanvasWorkspaceSnapshot }
  | { phase: 'error'; message: string };

/** Strip island-internal injection keys before persisting. */
function sanitizeNodes(nodes: ReturnType<typeof useCanvasStore.getState>['nodes']) {
  return nodes.map((node) => {
    const data = { ...(node.data as Record<string, unknown>) };
    delete data.__catalog;
    return { ...node, data, selected: false };
  });
}

const App: React.FC<CanvasAppProps> = ({ onClose }) => {
  const [boot, setBoot] = useState<BootState>({ phase: 'loading' });
  const [catalog, setCatalog] = useState<CapabilityCatalog | null>(null);
  const [saveState, setSaveState] = useState<'idle' | 'saving' | 'saved' | 'conflict'>('idle');
  const hydrateGraph = useCanvasStore((state) => state.hydrateGraph);
  const resetStore = useCanvasStore((state) => state.resetStore);

  useEffect(() => {
    let cancelled = false;
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
            throw new Error(created.body.message ?? '创建工作区失败');
          }
          workspaceId = created.body.workspace.id;
        }
        const loaded = await getWorkspace(workspaceId);
        if (cancelled) return;
        if (!loaded.ok || !loaded.body.workspace) {
          throw new Error(loaded.body.message ?? '读取工作区失败');
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

  const handleSave = useCallback(async () => {
    if (boot.phase !== 'ready') return;
    setSaveState('saving');
    const { nodes, edges } = useCanvasStore.getState();
    const result = await saveWorkspace(boot.workspace.id, {
      name: boot.workspace.name,
      nodes: sanitizeNodes(nodes),
      edges,
      expectedVersion: boot.workspace.version,
    });
    if (result.ok && result.body.workspace) {
      setBoot({ phase: 'ready', workspace: result.body.workspace });
      setSaveState('saved');
    } else if (result.status === 409) {
      setSaveState('conflict');
    } else {
      setSaveState('idle');
    }
  }, [boot]);

  if (boot.phase === 'loading') {
    return (
      <div className="wf-canvas-root">
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, color: 'var(--wb-text-muted)' }}>
          正在加载工作区…
        </div>
      </div>
    );
  }

  if (boot.phase === 'error') {
    return (
      <div className="wf-canvas-root">
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, fontSize: 13, color: 'var(--wb-text-muted)' }}>
          <span>{boot.message}</span>
          <button type="button" className="wf-canvas-header__button" onClick={() => window.location.reload()}>
            重试
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="wf-canvas-root">
      <header className="wf-canvas-header">
        <span className="wf-canvas-header__title">{boot.workspace.name}</span>
        <span className="wf-canvas-header__status">
          v{boot.workspace.version} · {useCanvasStore.getState().nodes.length} 节点
          {saveState === 'saved' ? ' · 已保存' : ''}
          {saveState === 'conflict' ? ' · 版本冲突（已在别处修改）' : ''}
        </span>
        <span className="wf-canvas-header__spacer" />
        <button
          type="button"
          className="wf-canvas-header__button"
          onClick={() => void handleSave()}
          disabled={saveState === 'saving'}
        >
          {saveState === 'saving' ? '保存中…' : '保存'}
        </button>
        {onClose ? (
          <button type="button" className="wf-canvas-header__button wf-canvas-header__button--ghost" onClick={onClose}>
            关闭
          </button>
        ) : null}
      </header>
      <main className="wf-canvas-main">
        <CanvasEditor catalog={catalog} />
      </main>
    </div>
  );
};

export default App;
