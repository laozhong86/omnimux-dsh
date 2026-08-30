import React, { useState } from 'react';
import {
  Undo2,
  Redo2,
  History,
  Save,
  Search,
  X,
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
    versions,
    isDrawerOpen,
    isSearchOpen,
    setTitle,
    toggleDrawer,
    toggleSearch,
    save,
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
      {/* 左侧：标题 + 保存状态 */}
      <div className="wf-text-stage-topbar__left">
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
              <span>{t('textStage.unsaved') || '未保存'}</span>
            </span>
          ) : (
            <span className="wf-text-stage-status-badge wf-text-stage-status-badge--saved">
              <span className="wf-text-stage-dot wf-text-stage-dot--saved" />
              <span>{t('textStage.saved') || '已同步'}</span>
            </span>
          )}
        </div>
      </div>

      {/* 中间：字数统计 */}
      <div className="wf-text-stage-topbar__center">
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

      {/* 右侧：纯图标按钮组 (回退/前进、快照历史、保存、搜索、关闭) */}
      <div className="wf-text-stage-topbar__right">
        {/* 撤销 / 重做 */}
        <button
          type="button"
          className="wf-text-stage-btn wf-text-stage-btn--icon"
          onClick={undo}
          disabled={!canUndo()}
          title={t('textStage.undo') || '撤销 (Cmd+Z)'}
        >
          <Undo2 size={16} />
        </button>
        <button
          type="button"
          className="wf-text-stage-btn wf-text-stage-btn--icon"
          onClick={redo}
          disabled={!canRedo()}
          title={t('textStage.redo') || '重做 (Cmd+Shift+Z)'}
        >
          <Redo2 size={16} />
        </button>

        <div className="wf-text-stage-divider" />

        {/* 历史版本 / 快照 */}
        <button
          type="button"
          className={`wf-text-stage-btn wf-text-stage-btn--icon ${isDrawerOpen ? 'is-active' : ''}`}
          onClick={toggleDrawer}
          title={t('textStage.versionHistory') || '历史版本与快照'}
        >
          <History size={16} />
          {versions.length > 0 && (
            <span className="wf-text-stage-badge wf-text-stage-badge--dot" />
          )}
        </button>

        {/* 保存 */}
        <button
          type="button"
          className="wf-text-stage-btn wf-text-stage-btn--icon"
          onClick={save}
          title={t('textStage.save') || '保存 (Cmd+S)'}
        >
          <Save size={16} />
        </button>

        {/* 搜索 */}
        <button
          type="button"
          className={`wf-text-stage-btn wf-text-stage-btn--icon ${isSearchOpen ? 'is-active' : ''}`}
          onClick={toggleSearch}
          title={t('textStage.search') || '查找 (Cmd+F)'}
        >
          <Search size={16} />
        </button>

        {/* 关闭 */}
        <button
          type="button"
          className="wf-text-stage-btn wf-text-stage-btn--icon wf-text-stage-btn--close"
          onClick={closeStage}
          title={t('textStage.close') || '关闭 (ESC)'}
        >
          <X size={16} />
        </button>
      </div>
    </header>
  );
};
