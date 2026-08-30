/**
 * Modernized Floating Dock Toolbar (aligned with modern AI video/workflow canvases):
 *
 * 1. Centered bottom floating capsule dock (.wf-canvas-toolbar nodrag nopan).
 * 2. Primary (+) button (Hotkey N) opening AddNodeMenu (scope="dock").
 * 3. Pointer mode selector: Select (V) / Pan (H).
 * 4. Project Assets drawer trigger (Hotkey A).
 * 5. Hotkey help (?) modal.
 *
 * Maintains .nodrag .nopan and pointer event guards to prevent xyflow mouse capture.
 */

import { memo, useCallback, useRef, useState } from 'react';
import {
  Plus,
  MousePointer,
  Hand,
  FolderOpen,
  HelpCircle,
  ChevronUp,
  FileCode,
} from 'lucide-react';
import { useT } from '../../i18n';
import { CustomDropdown, type DropdownMenuItem } from '../../ui';
import { useClickOutside } from '../hooks/useClickOutside';
import {
  preventToolbarAddContextMenu,
  stopToolbarNativeEvent,
} from './toolbarPointerGuard';
import AddNodeMenu from './AddNodeMenu';
import type { CanvasAddNodeType } from './addNodePalette';

export type CanvasPointerMode = 'select' | 'pan';

export type { CanvasAddNodeType };

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
  const addMenuRef = useRef<HTMLDivElement>(null);
  const templateMenuRef = useRef<HTMLDivElement>(null);

  const isAddOpen = externalIsAddMenuOpen !== undefined ? externalIsAddMenuOpen : internalIsAddMenuOpen;
  const closeAdd = useCallback(() => {
    if (onToggleAddMenu) {
      if (isAddOpen) onToggleAddMenu();
    } else {
      setInternalIsAddMenuOpen(false);
    }
  }, [isAddOpen, onToggleAddMenu]);
  const toggleAdd = onToggleAddMenu || (() => setInternalIsAddMenuOpen((v) => !v));

  const handleSelectNodeType = useCallback(
    (type: CanvasAddNodeType) => {
      onAddNode(type);
      closeAdd();
    },
    [onAddNode, closeAdd],
  );

  useClickOutside({
    refs: addMenuRef,
    onClose: closeAdd,
    enabled: isAddOpen,
  });

  useClickOutside({
    refs: templateMenuRef,
    onClose: () => setIsTemplateMenuOpen(false),
    enabled: isTemplateMenuOpen,
  });

  const pointerMenuItems: DropdownMenuItem[] = [
    {
      key: 'select',
      icon: <MousePointer size={18} />,
      label: t('toolbar.selectMode'),
      onClick: () => onPointerModeChange?.('select'),
    },
    {
      key: 'pan',
      icon: <Hand size={18} />,
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
      <div ref={addMenuRef} style={{ position: 'relative' }}>
        <button
          type="button"
          className={`wf-canvas-toolbar__item wf-canvas-toolbar__item--primary-add ${isAddOpen ? 'wf-canvas-toolbar__item--primary-add-open' : ''}`}
          onClick={toggleAdd}
          onContextMenu={preventToolbarAddContextMenu}
          title={t('toolbar.addNode')}
        >
          <span className="wf-canvas-toolbar__icon">
            <Plus size={24} />
          </span>
        </button>

        {isAddOpen ? (
          <AddNodeMenu scope="dock" onSelect={handleSelectNodeType} />
        ) : null}
      </div>

      <div className="wf-canvas-toolbar__divider" />

      {onInsertTemplate && (
        <div ref={templateMenuRef} style={{ position: 'relative' }}>
          <button
            type="button"
            className="wf-canvas-toolbar__item wf-canvas-toolbar__item--icon-only"
            onClick={() => setIsTemplateMenuOpen((open) => !open)}
            title={t('toolbar.insertTemplate')}
          >
            <span className="wf-canvas-toolbar__icon">
              <FileCode size={20} />
            </span>
            <span className="wf-canvas-toolbar__label">{t('toolbar.insertTemplateLabel')}</span>
          </button>
          {isTemplateMenuOpen && (
            <div className="wf-template-picker">
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
            {pointerMode === 'select' ? <MousePointer size={20} /> : <Hand size={20} />}
          </span>
          <ChevronUp size={14} style={{ opacity: 0.6, marginLeft: 2 }} />
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
          <FolderOpen size={20} />
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
              <HelpCircle size={20} />
            </span>
            <span className="wf-canvas-toolbar__label">{t('toolbar.help')}</span>
          </button>
        </>
      )}
    </div>
  );
};

export default memo(Toolbar);
