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
import type { MaterialType } from '../../types/materialNode';
import { MATERIAL_TYPE_ICONS } from './MaterialNode';

export type ContextMenuAction =
  | 'add-text'
  | 'add-image'
  | 'add-video'
  | 'add-audio'
  | 'copy'
  | 'paste'
  | 'duplicate'
  | 'delete'
  | 'undo'
  | 'redo'
  | 'select-all';

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

const ADD_NODE_ITEMS: Array<{ action: ContextMenuAction; type: MaterialType; label: string }> = [
  { action: 'add-text', type: 'text', label: '文本节点' },
  { action: 'add-image', type: 'image', label: '图片节点' },
  { action: 'add-video', type: 'video', label: '视频节点' },
  { action: 'add-audio', type: 'audio', label: '音频节点' },
];

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
    if (context.type === 'node' || context.type === 'selection') {
      return [
        { action: 'copy', label: '复制', shortcut: '⌘C', disabled: !hasSelection },
        { action: 'duplicate', label: '创建副本', shortcut: '⌘D', disabled: !hasSelection },
        { action: 'paste', label: '粘贴', shortcut: '⌘V', disabled: !hasClipboard },
        { action: 'delete', label: '删除', shortcut: 'Del' },
      ];
    }
    // pane
    const rows: MenuItemSpec[] = ADD_NODE_ITEMS.map((item) => ({
      action: item.action,
      label: `${MATERIAL_TYPE_ICONS[item.type]} ${item.label}`,
    }));
    rows.push(
      { action: 'undo', label: '撤销', shortcut: '⌘Z', disabled: !canUndo },
      { action: 'redo', label: '重做', shortcut: '⇧⌘Z', disabled: !canRedo },
      { action: 'paste', label: '粘贴', shortcut: '⌘V', disabled: !hasClipboard },
      { action: 'select-all', label: '全选', shortcut: '⌘A' },
    );
    return rows;
  }, [context, canUndo, canRedo, hasClipboard, hasSelection]);

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
