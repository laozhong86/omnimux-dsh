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

import { useCallback, useEffect } from 'react';
import CanvasEditor from './editor/CanvasEditor';
import ExecutionBar from './editor/components/ExecutionBar';
import { useExecutionController } from './hooks/useExecutionController';
import { useCanvasBoot } from './hooks/useCanvasBoot';
import { setLocale, useT, type Locale, type DictKey } from './i18n';
import {
  useWorkspacePersistence,
  type AutosaveStatus,
} from './bridge/useWorkspacePersistence';
import type { CanvasWorkspaceSnapshot } from '../shared/canvasTypes';

export interface CanvasAppProps {
  onClose?: () => void;
  /** 宿主语言（island 边界纯数据 prop），变化时下发到 i18n 模块。 */
  locale?: Locale;
}

const AUTOSAVE_LABEL_KEYS: Record<Exclude<AutosaveStatus, 'idle'>, DictKey> = {
  pending: 'app.autosave.pending',
  saving: 'app.autosave.saving',
  saved: 'app.autosave.saved',
  error: 'app.autosave.error',
  conflict: 'app.autosave.conflict',
};

const App: React.FC<CanvasAppProps> = ({ onClose, locale }) => {
  const t = useT();
  const { boot, setBoot, catalog, nodeCount } = useCanvasBoot();

  // 宿主 → island 语言通道：locale prop 变化时下发（live 切换走
  // updateCanvas 重 render，W4 接入宿主 subscribe）。
  useEffect(() => {
    setLocale(locale);
  }, [locale]);

  const workspace = boot.phase === 'ready' ? boot.workspace : null;

  // M3 execution controller: full/subset runs, SSE subscription, node-state
  // sync, and island-reload restore (re-subscribes a still-live execution).
  const execution = useExecutionController(workspace ? workspace.id : null);

  const handleSaved = useCallback((snapshot: CanvasWorkspaceSnapshot) => {
    setBoot((prev) => (prev.phase === 'ready' ? { phase: 'ready', workspace: snapshot } : prev));
  }, [setBoot]);

  // hydrate 完成、boot.phase === 'ready' 之前禁止订阅 / flush，避免空图 autosave
  const persistence = useWorkspacePersistence(workspace, {
    onSaved: handleSaved,
    enabled: boot.phase === 'ready',
  });

  if (boot.phase === 'loading') {
    return (
      <div className="wf-canvas-root">
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, color: 'var(--wb-text-muted)' }}>
          {t('app.loading')}
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
            {t('app.retry')}
          </button>
        </div>
      </div>
    );
  }

  const autosaveLabel = persistence.status === 'idle' ? '' : t(AUTOSAVE_LABEL_KEYS[persistence.status]);

  return (
    <div className="wf-canvas-root">
      <header className="wf-canvas-header">
        <span className="wf-canvas-header__title">{boot.workspace.name}</span>
        <span className="wf-canvas-header__status">
          v{boot.workspace.version} · {nodeCount} {t('app.nodes')}
          {persistence.isDirty && persistence.status !== 'saving' ? ` · ${t('app.unsaved')}` : ''}
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
          title={t('app.saveNowTitle')}
        >
          {t('app.saveNow')}
        </button>
        {onClose ? (
          <button type="button" className="wf-canvas-header__button wf-canvas-header__button--ghost" onClick={onClose}>
            {t('app.close')}
          </button>
        ) : null}
      </header>
      {persistence.status === 'conflict' ? (
        <div className="wf-canvas-conflict-banner" role="alert">
          <span>
            {t('app.conflictBanner')}
          </span>
          <button type="button" className="wf-canvas-header__button" onClick={() => void persistence.resolveConflict()}>
            {t('app.conflictOverwrite')}
          </button>
          <button
            type="button"
            className="wf-canvas-header__button wf-canvas-header__button--ghost"
            onClick={() => void persistence.reloadFromServer()}
          >
            {t('app.conflictReload')}
          </button>
        </div>
      ) : null}
      <ExecutionBar
        onStart={() => void execution.startExecution({ mode: 'full' })}
        onPause={() => void execution.pause()}
        onResume={() => void execution.resume()}
        onCancel={() => void execution.cancel()}
        onReset={execution.reset}
      />
      <main className="wf-canvas-main">
        <CanvasEditor
          catalog={catalog}
          onExecuteNodeIds={(nodeIds) => {
            // M4 组/子集执行入口（右键菜单）：subset 模式自动补传递上游闭包。
            void execution.startExecution({ mode: 'subset', nodeIds });
          }}
        />
      </main>
    </div>
  );
};

export default App;
