/**
 * Comprehensive keyboard shortcuts for OmniMux modern workflow canvas.
 *
 * Supports:
 * - V / H: Pointer / Hand pan mode toggle
 * - N: Add node popover menu
 * - A / Shift+A: Open/toggle Assets Drawer
 * - 1~6: Quick switch asset category in drawer
 * - M: Toggle minimap popover
 * - ?: Toggle shortcuts guide modal
 * - Cmd+1: Fit View
 * - Cmd+0: Reset zoom to 100%
 * - Copy / Paste / Duplicate (⌘D) / Delete (Delete/Backspace) / Select All (⌘A) / Undo (⌘Z) / Redo (⇧⌘Z)
 *
 * Editing inside inputs (INPUT/TEXTAREA/contentEditable) never triggers canvas shortcuts.
 */

import { useEffect } from 'react';

interface UseKeyboardShortcutsProps {
  onCopy?: () => void;
  onPaste?: () => void;
  onSelectAll?: () => void;
  onDeleteSelected?: () => void;
  onClearSelection?: () => void;
  onDuplicate?: () => void;
  hasSelection?: boolean;
  onUndo?: () => void;
  onRedo?: () => void;
  onToggleAssets?: () => void;
  onToggleShortcuts?: () => void;
  onToggleMinimap?: () => void;
  onToggleAddMenu?: () => void;
  onSetPointerMode?: (mode: 'select' | 'pan') => void;
  onFitView?: () => void;
  onResetZoom?: () => void;
  onCategoryKey?: (catIndex: number) => void;
  isAssetsOpen?: boolean;
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
  onToggleAssets,
  onToggleShortcuts,
  onToggleMinimap,
  onToggleAddMenu,
  onSetPointerMode,
  onFitView,
  onResetZoom,
  onCategoryKey,
  isAssetsOpen = false,
  enabled = true,
}: UseKeyboardShortcutsProps) => {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Skip when typing inside text inputs, textareas, or contenteditables
      const target = e.target as HTMLElement;
      if (['INPUT', 'TEXTAREA'].includes(target.tagName) || target.isContentEditable) {
        return;
      }

      const isMod = e.metaKey || e.ctrlKey;
      const keyLower = e.key.toLowerCase();

      // Number keys 1~6 for quick asset category switching when assets drawer is open
      if (!isMod && isAssetsOpen && /^[1-6]$/.test(e.key)) {
        e.preventDefault();
        onCategoryKey?.(parseInt(e.key, 10));
        return;
      }

      // 'A' or 'Shift + A': Toggle Assets Drawer
      if (!isMod && keyLower === 'a') {
        e.preventDefault();
        onToggleAssets?.();
        return;
      }

      // 'V': Pointer select mode
      if (!isMod && keyLower === 'v') {
        e.preventDefault();
        onSetPointerMode?.('select');
        return;
      }

      // 'H': Hand pan mode
      if (!isMod && keyLower === 'h') {
        e.preventDefault();
        onSetPointerMode?.('pan');
        return;
      }

      // 'N': Toggle add node popover
      if (!isMod && keyLower === 'n') {
        e.preventDefault();
        onToggleAddMenu?.();
        return;
      }

      // 'M': Toggle minimap popover
      if (!isMod && keyLower === 'm') {
        e.preventDefault();
        onToggleMinimap?.();
        return;
      }

      // '?' / Shift + '/': Toggle shortcuts cheatsheet
      if (e.key === '?' || (e.shiftKey && e.key === '/')) {
        e.preventDefault();
        onToggleShortcuts?.();
        return;
      }

      // Cmd + 1: Fit View
      if (isMod && e.key === '1') {
        e.preventDefault();
        onFitView?.();
        return;
      }

      // Cmd + 0: Reset zoom (100%)
      if (isMod && e.key === '0') {
        e.preventDefault();
        onResetZoom?.();
        return;
      }

      // Delete / Backspace: delete selected nodes
      if ((e.key === 'Delete' || e.key === 'Backspace') && hasSelection && !isMod) {
        e.preventDefault();
        onDeleteSelected?.();
        return;
      }

      // Escape: clear selection or close overlay
      if (e.key === 'Escape') {
        e.preventDefault();
        if (isAssetsOpen) {
          onToggleAssets?.();
        } else if (hasSelection) {
          onClearSelection?.();
        }
        return;
      }

      // Cmd/Ctrl + D: duplicate selected nodes
      if (isMod && keyLower === 'd' && hasSelection) {
        e.preventDefault();
        onDuplicate?.();
        return;
      }

      // Copy: Cmd/Ctrl + C
      if (isMod && keyLower === 'c' && !e.shiftKey) {
        e.preventDefault();
        onCopy?.();
        return;
      }

      // Paste: Cmd/Ctrl + V
      if (isMod && keyLower === 'v') {
        e.preventDefault();
        onPaste?.();
        return;
      }

      // Select All: Cmd/Ctrl + A
      if (isMod && keyLower === 'a') {
        e.preventDefault();
        onSelectAll?.();
        return;
      }

      // Undo: Cmd/Ctrl + Z
      if (isMod && keyLower === 'z' && !e.shiftKey) {
        e.preventDefault();
        onUndo?.();
        return;
      }

      // Redo: Cmd/Ctrl + Shift + Z
      if (isMod && keyLower === 'z' && e.shiftKey) {
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
    onToggleAssets,
    onToggleShortcuts,
    onToggleMinimap,
    onToggleAddMenu,
    onSetPointerMode,
    onFitView,
    onResetZoom,
    onCategoryKey,
    isAssetsOpen,
  ]);
};
