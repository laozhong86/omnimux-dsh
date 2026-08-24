/**
 * Canvas context menu — M2 base version, ported in shape from Gxgen
 * `components/ContextMenu.tsx` + `hooks/useCanvasMenu.ts` (group/asset/
 * timeline actions cut). Basic set: add node / delete / copy (+ undo/redo,
 * paste, select-all on the pane).
 *
 * Rendered through a portal on document.body; its own token block mirrors
 * the island --wb-* layer so it follows the host theme outside the island
 * subtree.
 */

import React, { useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useT } from '../../i18n';

export type ContextMenuAction =
  | 'copy'
  | 'paste'
  | 'duplicate'
  | 'delete'
  | 'undo'
  | 'redo'
  | 'select-all'
  | 'execute-selection'
  | 'execute-node';

export type ContextMenuContext =
  | { type: 'pane' }
  | { type: 'node'; nodeId: string }
  | { type: 'selection' };

interface ContextMenuProps {
  x: number;
  y: number;
  visible: boolean;
  context: ContextMenuContext;
  onClose: () => void;
  onAction: (action: ContextMenuAction, context: ContextMenuContext) => void;
  canUndo?: boolean;
  canRedo?: boolean;
  /** Whether the in-island clipboard holds nodes (gates paste). */
  hasClipboard?: boolean;
  hasSelection?: boolean;
}

const MENU_WIDTH = 190;
const MENU_HEIGHT_ESTIMATE = 260;

interface MenuItemSpec {
  action: ContextMenuAction;
  label: string;
  shortcut?: string;
  disabled?: boolean;
}

const ContextMenu: React.FC<ContextMenuProps> = ({
  x,
  y,
  visible,
  context,
  onClose,
  onAction,
  canUndo = false,
  canRedo = false,
  hasClipboard = false,
  hasSelection = false,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const t = useT();

  // Close on outside mousedown and on Escape.
  useEffect(() => {
    if (!visible) return undefined;
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [visible, onClose]);

  const items = useMemo((): MenuItemSpec[] => {
    if (context.type === 'node') {
      return [
        { action: 'execute-node', label: t('panel.runHint') },
        { action: 'copy', label: t('menu.copy'), shortcut: '⌘C' },
        { action: 'duplicate', label: t('menu.duplicate'), shortcut: '⌘D' },
        { action: 'paste', label: t('menu.paste'), shortcut: '⌘V', disabled: !hasClipboard },
        { action: 'delete', label: t('menu.delete'), shortcut: 'Del' },
      ];
    }
    if (context.type === 'selection') {
      return [
        // 组执行入口（M4）：选中子集 + 传递上游闭包 = subset 执行。
        { action: 'execute-selection', label: t('menu.executeSelection') },
        { action: 'copy', label: t('menu.copy'), shortcut: '⌘C', disabled: !hasSelection },
        { action: 'duplicate', label: t('menu.duplicate'), shortcut: '⌘D', disabled: !hasSelection },
        { action: 'paste', label: t('menu.paste'), shortcut: '⌘V', disabled: !hasClipboard },
        { action: 'delete', label: t('menu.delete'), shortcut: 'Del' },
      ];
    }
    // pane：新建节点统一走左侧 Toolbar / 输出 handle plus 菜单，
    // 右键菜单只保留编辑动作（S1 菜单归并）。
    return [
      { action: 'undo', label: t('toolbar.undo'), shortcut: '⌘Z', disabled: !canUndo },
      { action: 'redo', label: t('toolbar.redo'), shortcut: '⇧⌘Z', disabled: !canRedo },
      { action: 'paste', label: t('menu.paste'), shortcut: '⌘V', disabled: !hasClipboard },
      { action: 'select-all', label: t('menu.selectAll'), shortcut: '⌘A' },
    ];
  }, [context, canUndo, canRedo, hasClipboard, hasSelection, t]);

  if (!visible) return null;

  // Keep the menu inside the viewport.
  const left = Math.min(x, window.innerWidth - MENU_WIDTH - 8);
  const top = Math.min(y, window.innerHeight - MENU_HEIGHT_ESTIMATE - 8);

  return createPortal(
    <div
      ref={menuRef}
      className="wf-context-menu"
      style={{ left, top }}
      onContextMenu={(e) => e.preventDefault()}
    >
      {items.map((item, index) => (
        <React.Fragment key={item.action}>
          {/* separators around the undo/redo/paste block on pane menus */}
          {context.type === 'pane' && item.action === 'undo' ? (
            <div className="wf-context-menu__separator" />
          ) : null}
          {context.type !== 'pane' && item.action === 'paste' ? (
            <div className="wf-context-menu__separator" />
          ) : null}
          <button
            type="button"
            className={`wf-context-menu__item${item.disabled ? ' wf-context-menu__item--disabled' : ''}`}
            disabled={item.disabled}
            onClick={(e) => {
              e.stopPropagation();
              onAction(item.action, context);
            }}
          >
            <span className="wf-context-menu__label">{item.label}</span>
            {item.shortcut ? (
              <span className="wf-context-menu__shortcut">{item.shortcut}</span>
            ) : null}
          </button>
        </React.Fragment>
      ))}
    </div>,
    document.body,
  );
};

export default ContextMenu;
