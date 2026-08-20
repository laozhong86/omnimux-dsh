/**
 * Ported (narrowed) from Gxgen
 * `apps/web/src/pages/CanvasEditor/hooks/useKeyboardShortcuts.ts`.
 *
 * M2 base set only: copy / paste / delete / select-all, plus escape-clear,
 * duplicate (⌘D) and undo/redo (⌘Z / ⇧⌘Z). The single-letter add-node
 * shortcuts (t/i/v) and fit-view (⇧C) are cut from the base set.
 *
 * Editing inside inputs (INPUT/TEXTAREA/contentEditable — including the
 * node-internal prompt editor) never triggers canvas shortcuts.
 */

import { useEffect } from 'react';

interface UseKeyboardShortcutsProps {
  onCopy?: () => void;
  onPaste?: () => void;
  onSelectAll?: () => void;
  /** Delete the currently selected nodes. */
  onDeleteSelected?: () => void;
  /** Clear the current selection. */
  onClearSelection?: () => void;
  /** Duplicate the selected nodes (in-place offset copy). */
  onDuplicate?: () => void;
  /** Whether any node is selected (gates delete/duplicate/escape). */
  hasSelection?: boolean;
  onUndo?: () => void;
  onRedo?: () => void;
  /** Whether the canvas keyboard layer is active. */
  enabled?: boolean;
}

export const useKeyboardShortcuts = ({
  onCopy,
  onPaste,
  onSelectAll,
  onDeleteSelected,
  onClearSelection,
  onDuplicate,
  hasSelection = false,
  onUndo,
  onRedo,
  enabled = true,
}: UseKeyboardShortcutsProps) => {
  useEffect(() => {
    if (!enabled) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip when the user is typing in an input or textarea.
      const target = e.target as HTMLElement;
      if (['INPUT', 'TEXTAREA'].includes(target.tagName) || target.isContentEditable) {
        return;
      }

      const isMod = e.metaKey || e.ctrlKey;

      // Delete / Backspace: delete selected nodes
      if ((e.key === 'Delete' || e.key === 'Backspace') && hasSelection && !isMod) {
        e.preventDefault();
        onDeleteSelected?.();
        return;
      }

      // Escape: clear selection
      if (e.key === 'Escape' && hasSelection) {
        e.preventDefault();
        onClearSelection?.();
        return;
      }

      // Cmd/Ctrl + D: duplicate selected nodes
      if (isMod && e.key.toLowerCase() === 'd' && hasSelection) {
        e.preventDefault();
        onDuplicate?.();
        return;
      }

      // Copy: Cmd/Ctrl + C
      if (isMod && e.key.toLowerCase() === 'c' && !e.shiftKey) {
        e.preventDefault();
        onCopy?.();
        return;
      }

      // Paste: Cmd/Ctrl + V
      if (isMod && e.key.toLowerCase() === 'v') {
        e.preventDefault();
        onPaste?.();
        return;
      }

      // Select All: Cmd/Ctrl + A
      if (isMod && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        onSelectAll?.();
        return;
      }

      // Undo: Cmd/Ctrl + Z
      if (isMod && e.key.toLowerCase() === 'z' && !e.shiftKey) {
        e.preventDefault();
        onUndo?.();
        return;
      }

      // Redo: Cmd/Ctrl + Shift + Z
      if (isMod && e.key.toLowerCase() === 'z' && e.shiftKey) {
        e.preventDefault();
        onRedo?.();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    enabled,
    onCopy,
    onPaste,
    onSelectAll,
    onDeleteSelected,
    onClearSelection,
    onDuplicate,
    hasSelection,
    onUndo,
    onRedo,
  ]);
};
