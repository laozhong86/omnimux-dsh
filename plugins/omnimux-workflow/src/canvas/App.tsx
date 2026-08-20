/**
 * omnimux-workflow canvas island application root.
 *
 * Boot flow: ensure a workspace exists (create on first open) -> hydrate
 * the canvas store -> render the editor.
 *
 * M2: saving is automatic — useWorkspacePersistence debounces store
 * changes (1s), PUTs with the optimistic-lock version, resolves 409s by
 * pulling + retrying once, and surfaces a live save-state indicator in
 * the header (the M1 manual save button is gone).
 */

import { useCallback, useEffect, useState } from 'react';
import CanvasEditor from './editor/CanvasEditor';
import { useCanvasStore } from './store/canvasStore';
import {
  useWorkspacePersistence,
  type AutosaveStatus,
} from './bridge/useWorkspacePersistence';
import {
  listWorkspaces,
  createWorkspace,
  getWorkspace,
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

const AUTOSAVE_LABELS: Record<AutosaveStatus, string> = {
  idle: '',
  pending: '有未保存更改…',
  saving: '自动保存中…',
  saved: '已保存',
  error: '保存失败，将在下次更改后重试',
  conflict: '版本冲突（已在别处修改）',
};

const App: React.FC<CanvasAppProps> = ({ onClose }) => {
  const [boot, setBoot] = useState<BootState>({ phase: 'loading' });
  const [catalog, setCatalog] = useState<CapabilityCatalog | null>(null);
  const hydrateGraph = useCanvasStore((state) => state.hydrateGraph);
  const resetStore = useCanvasStore((state) => state.resetStore);
  const nodeCount = useCanvasStore((state) => state.nodes.length);

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

  const workspace = boot.phase === 'ready' ? boot.workspace : null;

  const handleSaved = useCallback((snapshot: CanvasWorkspaceSnapshot) => {
    setBoot((prev) => (prev.phase === 'ready' ? { phase: 'ready', workspace: snapshot } : prev));
  }, []);

  const persistence = useWorkspacePersistence(workspace, { onSaved: handleSaved });

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

  const autosaveLabel = AUTOSAVE_LABELS[persistence.status];

  return (
    <div className="wf-canvas-root">
      <header className="wf-canvas-header">
        <span className="wf-canvas-header__title">{boot.workspace.name}</span>
        <span className="wf-canvas-header__status">
          v{boot.workspace.version} · {nodeCount} 节点
          {persistence.isDirty && persistence.status !== 'saving' ? ' · 未保存' : ''}
        </span>
        <span
          className={`wf-canvas-header__save-state wf-canvas-header__save-state--${persistence.status}`}
        >
          {autosaveLabel}
        </span>
        <span className="wf-canvas-header__spacer" />
        <button
          type="button"
          className="wf-canvas-header__button wf-canvas-header__button--ghost"
          onClick={() => void persistence.saveNow()}
          disabled={persistence.status === 'saving' || !persistence.isDirty}
          title="立即保存（平时自动保存，1 秒防抖）"
        >
          立即保存
        </button>
        {onClose ? (
          <button type="button" className="wf-canvas-header__button wf-canvas-header__button--ghost" onClick={onClose}>
            关闭
          </button>
        ) : null}
      </header>
      {persistence.status === 'conflict' ? (
        <div className="wf-canvas-conflict-banner" role="alert">
          <span>
            保存冲突：该工作区已在别处被修改（当前服务器版本更高）。
          </span>
          <button type="button" className="wf-canvas-header__button" onClick={() => void persistence.resolveConflict()}>
            以本画布为准重存
          </button>
          <button
            type="button"
            className="wf-canvas-header__button wf-canvas-header__button--ghost"
            onClick={() => void persistence.reloadFromServer()}
          >
            放弃本地，载入最新
          </button>
        </div>
      ) : null}
      <main className="wf-canvas-main">
        <CanvasEditor catalog={catalog} />
      </main>
    </div>
  );
};

export default App;
