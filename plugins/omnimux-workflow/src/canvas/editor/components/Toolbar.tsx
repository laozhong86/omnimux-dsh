/**
 * Modernized Floating Dock Toolbar (aligned with modern AI video/workflow canvases):
 *
 * 1. Centered bottom floating capsule dock (.wf-canvas-toolbar nodrag nopan).
 * 2. Primary (+) button (Hotkey N) opening modern node creation popover menu.
 * 3. Pointer mode selector: Select (V) / Pan (H).
 * 4. Project Assets (📁) drawer trigger (Hotkey A).
 * 5. Hotkey help (?) modal.
 *
 * Maintains .nodrag .nopan and pointer event guards to prevent xyflow mouse capture.
 */

import { memo, useState, useCallback } from 'react';
import {
  FileText,
  ImagePlus,
  Video,
  Music,
  Plus,
  Film,
  Table,
  MousePointer,
  Hand,
  FolderOpen,
  HelpCircle,
  ChevronUp,
  UploadCloud,
  FileCode,
} from 'lucide-react';
import type { MaterialType } from '../../types/materialNode';
import { useT } from '../../i18n';
import { CustomDropdown, type DropdownMenuItem } from '../../ui';
import {
  preventToolbarAddContextMenu,
  stopToolbarNativeEvent,
} from './toolbarPointerGuard';

export type CanvasPointerMode = 'select' | 'pan';

export type CanvasAddNodeType = MaterialType | 'table' | 'video_composition' | 'import_asset';

export interface ToolbarProps {
  onAddNode: (type: CanvasAddNodeType) => void;
  pointerMode?: CanvasPointerMode;
  onPointerModeChange?: (mode: CanvasPointerMode) => void;
  onOpenAssets?: () => void;
  onOpenHelp?: () => void;
  isAddMenuOpen?: boolean;
  onToggleAddMenu?: () => void;
  isAssetsOpen?: boolean;
  templates?: Array<{ id: string; name: string; nodeCount: number }>;
  onInsertTemplate?: (id: string) => void;
}

const ADD_NODE_ITEMS: Array<{
  type: CanvasAddNodeType;
  Icon: React.ComponentType<{ size?: number }>;
  color: string;
  bg: string;
}> = [
  { type: 'import_asset', Icon: UploadCloud, color: '#38bdf8', bg: 'rgba(56, 189, 248, 0.16)' },
  { type: 'text', Icon: FileText, color: '#60a5fa', bg: 'rgba(59, 130, 246, 0.16)' },
  { type: 'image', Icon: ImagePlus, color: '#c084fc', bg: 'rgba(168, 85, 247, 0.16)' },
  { type: 'video', Icon: Video, color: '#fb923c', bg: 'rgba(249, 115, 22, 0.16)' },
  { type: 'audio', Icon: Music, color: '#34d399', bg: 'rgba(16, 185, 129, 0.16)' },
  { type: 'table', Icon: Table, color: '#10b981', bg: 'rgba(16, 185, 129, 0.16)' },
  { type: 'video_composition', Icon: Film, color: '#f472b6', bg: 'rgba(244, 114, 182, 0.16)' },
];

const Toolbar: React.FC<ToolbarProps> = ({
  onAddNode,
  pointerMode = 'select',
  onPointerModeChange,
  onOpenAssets,
  onOpenHelp,
  isAddMenuOpen: externalIsAddMenuOpen,
  onToggleAddMenu,
  isAssetsOpen = false,
  templates = [],
  onInsertTemplate,
}) => {
  const t = useT();
  const [internalIsAddMenuOpen, setInternalIsAddMenuOpen] = useState(false);
  const [isTemplateMenuOpen, setIsTemplateMenuOpen] = useState(false);

  const isAddOpen = externalIsAddMenuOpen !== undefined ? externalIsAddMenuOpen : internalIsAddMenuOpen;
  const toggleAdd = onToggleAddMenu || (() => setInternalIsAddMenuOpen((v) => !v));

  const handleSelectNodeType = useCallback(
    (type: CanvasAddNodeType) => {
      onAddNode(type);
      if (onToggleAddMenu) {
        onToggleAddMenu();
      } else {
        setInternalIsAddMenuOpen(false);
      }
    },
    [onAddNode, onToggleAddMenu],
  );

  const pointerMenuItems: DropdownMenuItem[] = [
    {
      key: 'select',
      icon: <MousePointer size={15} />,
      label: t('toolbar.selectMode'),
      onClick: () => onPointerModeChange?.('select'),
    },
    {
      key: 'pan',
      icon: <Hand size={15} />,
      label: t('toolbar.panMode'),
      onClick: () => onPointerModeChange?.('pan'),
    },
  ];

  return (
    <div
      className="wf-canvas-toolbar nodrag nopan"
      onPointerDown={stopToolbarNativeEvent}
      onMouseDown={stopToolbarNativeEvent}
    >
      {/* 核心 (+) 按钮与浮层菜单 */}
      <div style={{ position: 'relative' }}>
        <button
          type="button"
          className={`wf-canvas-toolbar__item wf-canvas-toolbar__item--primary-add ${isAddOpen ? 'wf-canvas-toolbar__item--primary-add-open' : ''}`}
          onClick={toggleAdd}
          onContextMenu={preventToolbarAddContextMenu}
          title={t('toolbar.addNode')}
        >
          <span className="wf-canvas-toolbar__icon">
            <Plus size={20} />
          </span>
        </button>

        {isAddOpen && (
          <div className="wf-dock-add-popover">
            {ADD_NODE_ITEMS.map((item) => (
              <button
                key={item.type}
                type="button"
                className="wf-dock-add-popover__item"
                onClick={() => handleSelectNodeType(item.type)}
                onContextMenu={preventToolbarAddContextMenu}
              >
                <div
                  className="wf-dock-add-popover__icon"
                  style={{ background: item.bg, color: item.color }}
                >
                  <item.Icon size={18} />
                </div>
                <div className="wf-dock-add-popover__content">
                  <span className="wf-dock-add-popover__label">{t(`node.type.${item.type}`)}</span>
                  <span className="wf-dock-add-popover__desc">{t(`toolbar.add.${item.type}Desc`)}</span>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="wf-canvas-toolbar__divider" />

      {onInsertTemplate && (
        <div style={{ position: 'relative' }}>
          <button
            type="button"
            className="wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only"
            onClick={() => setIsTemplateMenuOpen((open) => !open)}
            title={t('toolbar.insertTemplate')}
          >
            <span className="wf-canvas-toolbar__icon">
              <FileCode size={16} />
            </span>
            <span className="wf-canvas-toolbar__label">{t('toolbar.insertTemplateLabel')}</span>
          </button>
          {isTemplateMenuOpen && (
            <div className="wf-dock-add-popover wf-template-picker">
              {templates.length === 0 ? (
                <div className="wf-template-picker__empty">{t('toolbar.insertTemplateEmpty')}</div>
              ) : (
                templates.map((template) => (
                  <button
                    key={template.id}
                    type="button"
                    className="wf-template-picker__item"
                    onClick={() => {
                      onInsertTemplate(template.id);
                      setIsTemplateMenuOpen(false);
                    }}
                  >
                    <span>{template.name}</span>
                    <span className="wf-template-picker__meta">{t('toolbar.insertTemplateNodes').replace('{count}', String(template.nodeCount))}</span>
                  </button>
                ))
              )}
            </div>
          )}
        </div>
      )}

      {/* 指针模式选择 (V/H) */}
      <CustomDropdown
        items={pointerMenuItems}
        selectedKeys={[pointerMode]}
        placement="topCenter"
      >
        <button
          type="button"
          className="wf-canvas-toolbar__item"
          title={pointerMode === 'select' ? t('toolbar.selectMode') : t('toolbar.panMode')}
        >
          <span className="wf-canvas-toolbar__icon">
            {pointerMode === 'select' ? <MousePointer size={16} /> : <Hand size={16} />}
          </span>
          <ChevronUp size={12} style={{ opacity: 0.6, marginLeft: 2 }} />
        </button>
      </CustomDropdown>

      {/* 项目资产库入口 */}
      <button
        type="button"
        className={`wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only ${isAssetsOpen ? 'wf-canvas-toolbar__item--active' : ''}`}
        onClick={onOpenAssets}
        title={t('toolbar.assets')}
      >
        <span className="wf-canvas-toolbar__icon">
          <FolderOpen size={17} />
        </span>
        <span className="wf-canvas-toolbar__label">{t('toolbar.assets')}</span>
      </button>

      {/* 帮助 */}
      {onOpenHelp && (
        <>
          <div className="wf-canvas-toolbar__divider" />
          <button
            type="button"
            className="wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only"
            onClick={onOpenHelp}
            title={t('toolbar.help')}
          >
            <span className="wf-canvas-toolbar__icon">
              <HelpCircle size={16} />
            </span>
            <span className="wf-canvas-toolbar__label">{t('toolbar.help')}</span>
          </button>
        </>
      )}
    </div>
  );
};

export default memo(Toolbar);
