import React, { useState } from 'react';
import {
  X,
  Columns2,
  FileEdit,
  Eye,
  Undo2,
  Redo2,
  History,
  Camera,
  Check,
  Edit2,
} from 'lucide-react';
import { useTextStageStore, calculateTextStats } from '../../store/textStageStore';
import { useT } from '../../i18n';

export const TextStageTopbar: React.FC = () => {
  const t = useT();
  const {
    title,
    content,
    isDirty,
    viewMode,
    versions,
    isDrawerOpen,
    setTitle,
    setViewMode,
    toggleDrawer,
    createSnapshot,
    saveAndClose,
    closeStage,
    undo,
    redo,
    canUndo,
    canRedo,
  } = useTextStageStore();

  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [tempTitle, setTempTitle] = useState(title);

  const stats = calculateTextStats(content);

  const handleTitleSubmit = () => {
    setTitle(tempTitle.trim() || '文本');
    setIsEditingTitle(false);
  };

  return (
    <header className="wf-text-stage-topbar">
      {/* 左侧：返回关闭 + 标题 + 保存状态 */}
      <div className="wf-text-stage-topbar__left">
        <button
          type="button"
          className="wf-text-stage-btn wf-text-stage-btn--icon"
          onClick={closeStage}
          title={t('textStage.close') || '关闭全屏 (ESC)'}
        >
          <X size={16} />
        </button>

        <div className="wf-text-stage-title-wrap">
          {isEditingTitle ? (
            <input
              type="text"
              className="wf-text-stage-title-input"
              value={tempTitle}
              onChange={(e) => setTempTitle(e.target.value)}
              onBlur={handleTitleSubmit}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleTitleSubmit();
                if (e.key === 'Escape') {
                  setTempTitle(title);
                  setIsEditingTitle(false);
                }
              }}
              autoFocus
            />
          ) : (
            <button
              type="button"
              className="wf-text-stage-title-btn"
              onClick={() => {
                setTempTitle(title);
                setIsEditingTitle(true);
              }}
              title={t('textStage.renameHint') || '点击重命名'}
            >
              <span className="wf-text-stage-title-text">{title || '文本'}</span>
              <Edit2 size={12} className="wf-text-stage-title-edit-icon" />
            </button>
          )}
        </div>

        <div className="wf-text-stage-status">
          {isDirty ? (
            <span className="wf-text-stage-status-badge wf-text-stage-status-badge--unsaved">
              <span className="wf-text-stage-dot wf-text-stage-dot--unsaved" />
              <span>{t('textStage.unsaved') || '未保存修改'}</span>
            </span>
          ) : (
            <span className="wf-text-stage-status-badge wf-text-stage-status-badge--saved">
              <span className="wf-text-stage-dot wf-text-stage-dot--saved" />
              <span>{t('textStage.saved') || '已同步'}</span>
            </span>
          )}
        </div>
      </div>

      {/* 中间：视图模式切换 + 字数统计 */}
      <div className="wf-text-stage-topbar__center">
        <div className="wf-text-stage-segmented-control">
          <button
            type="button"
            className={`wf-text-stage-segment-btn ${viewMode === 'split' ? 'is-active' : ''}`}
            onClick={() => setViewMode('split')}
            title={t('textStage.viewSplit') || '双栏实时对照'}
          >
            <Columns2 size={14} />
            <span>{t('textStage.split') || '双栏'}</span>
          </button>
          <button
            type="button"
            className={`wf-text-stage-segment-btn ${viewMode === 'edit' ? 'is-active' : ''}`}
            onClick={() => setViewMode('edit')}
            title={t('textStage.viewEdit') || '仅纯文本编辑'}
          >
            <FileEdit size={14} />
            <span>{t('textStage.editOnly') || '编辑'}</span>
          </button>
          <button
            type="button"
            className={`wf-text-stage-segment-btn ${viewMode === 'preview' ? 'is-active' : ''}`}
            onClick={() => setViewMode('preview')}
            title={t('textStage.viewPreview') || '仅全屏阅读预览'}
          >
            <Eye size={14} />
            <span>{t('textStage.previewOnly') || '预览'}</span>
          </button>
        </div>

        <div className="wf-text-stage-stats">
          <span className="wf-text-stage-stat-item">
            {stats.wordCount} <span className="wf-text-stage-stat-label">{t('textStage.words') || '词'}</span>
          </span>
          <span className="wf-text-stage-stat-divider">·</span>
          <span className="wf-text-stage-stat-item">
            {stats.charCount} <span className="wf-text-stage-stat-label">{t('textStage.chars') || '字'}</span>
          </span>
          <span className="wf-text-stage-stat-divider">·</span>
          <span className="wf-text-stage-stat-item">
            {stats.lineCount} <span className="wf-text-stage-stat-label">{t('textStage.lines') || '行'}</span>
          </span>
        </div>
      </div>

      {/* 右侧：Undo/Redo + 历史版本 + 保存 */}
      <div className="wf-text-stage-topbar__right">
        <div className="wf-text-stage-action-group">
          <button
            type="button"
            className="wf-text-stage-btn wf-text-stage-btn--icon"
            onClick={undo}
            disabled={!canUndo()}
            title={t('textStage.undo') || '撤销 (Cmd+Z)'}
          >
            <Undo2 size={15} />
          </button>
          <button
            type="button"
            className="wf-text-stage-btn wf-text-stage-btn--icon"
            onClick={redo}
            disabled={!canRedo()}
            title={t('textStage.redo') || '重做 (Cmd+Shift+Z)'}
          >
            <Redo2 size={15} />
          </button>
        </div>

        <div className="wf-text-stage-divider" />

        <button
          type="button"
          className="wf-text-stage-btn"
          onClick={() => createSnapshot()}
          title={t('textStage.createSnapshot') || '创建当前快照版本'}
        >
          <Camera size={14} />
          <span>{t('textStage.snapshot') || '创建快照'}</span>
        </button>

        <button
          type="button"
          className={`wf-text-stage-btn ${isDrawerOpen ? 'is-active' : ''}`}
          onClick={toggleDrawer}
          title={t('textStage.versionHistory') || '历史版本与对比'}
        >
          <History size={14} />
          <span>{t('textStage.versions') || '历史版本'}</span>
          {versions.length > 0 && (
            <span className="wf-text-stage-badge">{versions.length}</span>
          )}
        </button>

        <div className="wf-text-stage-divider" />

        <button
          type="button"
          className="wf-text-stage-btn wf-text-stage-btn--primary"
          onClick={saveAndClose}
          title={t('textStage.saveAndClose') || '保存并退出全屏'}
        >
          <Check size={14} />
          <span>{t('textStage.done') || '完成'}</span>
        </button>
      </div>
    </header>
  );
};
