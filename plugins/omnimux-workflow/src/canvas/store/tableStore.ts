import { create } from 'zustand';
import {
  type HTableDocument,
  type HTableColumn,
  type HTableRow,
  type HTableFieldType,
  type HTableCellValue,
  type HTableFilterCondition,
  type HTableRowHeight,
  newColumnId,
  newRowId,
  defaultColumnWidth,
  migrateLegacyTableDocument,
} from '../../shared/types/htable.ts';

export interface ColumnModalState {
  isOpen: boolean;
  mode: 'add' | 'edit';
  targetColumnIndex: number | null;
  initialTitle: string;
  initialType: HTableFieldType;
}

export interface TableStoreState {
  // Document State
  document: HTableDocument;
  isStageOpen: boolean;

  // Row Selection State
  selectedRowIndices: number[];

  // History Stacks
  undoStack: HTableDocument[];
  redoStack: HTableDocument[];

  // UI Transient States
  activePopover: 'field-config' | 'filter' | 'row-height' | null;
  activeContextMenuColIdx: number | null;
  modalState: ColumnModalState;

  // Stage Control
  openStage: (initialDoc?: HTableDocument) => void;
  closeStage: () => void;

  // Row Selection Actions
  toggleRowSelection: (rowIdx: number) => void;
  selectAllRows: () => void;
  clearRowSelection: () => void;
  setRowSelection: (indices: number[]) => void;
  deleteSelectedRows: () => void;

  // History Actions
  undo: () => void;
  redo: () => void;
  canUndo: () => boolean;
  canRedo: () => boolean;

  // Popover & Modal UI Controls
  setActivePopover: (popover: 'field-config' | 'filter' | 'row-height' | null) => void;
  setContextMenuColIdx: (idx: number | null) => void;
  openColumnModal: (mode: 'add' | 'edit', colIdx?: number) => void;
  closeColumnModal: () => void;

  // Document Mutations (with automatic History Snapshot push)
  setTitle: (title: string) => void;
  updateCell: (rowIdx: number, columnIdOrIdx: string | number, val: HTableCellValue) => void;
  addRow: (cells?: Record<string, HTableCellValue> | HTableCellValue[]) => void;
  deleteRow: (rowIdx: number) => void;
  reorderRows: (sourceIdx: number, targetIdx: number) => void;
  addColumn: (title: string, type: HTableFieldType, width?: number) => void;
  updateColumn: (colIdx: number, title: string, type: HTableFieldType) => void;
  renameColumn: (colIdx: number, newTitle: string) => void;
  deleteColumn: (colIdx: number) => void;
  toggleColumnVisibility: (colIdx: number) => void;
  reorderColumns: (sourceIdx: number, targetIdx: number) => void;
  setFilterConditions: (conditions: HTableFilterCondition[]) => void;
  setRowHeight: (height: HTableRowHeight) => void;
  loadDocument: (doc: HTableDocument) => void;
}

const MAX_HISTORY_DEPTH = 50;

function cloneDoc(doc: HTableDocument): HTableDocument {
  return JSON.parse(JSON.stringify(doc));
}

const defaultInitialDocument: HTableDocument = {
  version: 1,
  title: '表格',
  rowHeight: 'low',
  columns: [
    { id: 'col_text', title: '文本', type: 'text', visible: true, width: 280 },
  ],
  rows: [],
};

export const useTableStore = create<TableStoreState>((set, get) => {
  const pushSnapshot = (currentDoc: HTableDocument) => {
    const { undoStack } = get();
    const newUndo = [...undoStack, cloneDoc(currentDoc)].slice(-MAX_HISTORY_DEPTH);
    return { undoStack: newUndo, redoStack: [] };
  };

  return {
    document: defaultInitialDocument,
    isStageOpen: false,
    selectedRowIndices: [],
    undoStack: [],
    redoStack: [],
    activePopover: null,
    activeContextMenuColIdx: null,
    modalState: {
      isOpen: false,
      mode: 'add',
      targetColumnIndex: null,
      initialTitle: '',
      initialType: 'text',
    },

    openStage: (initialDoc) => {
      if (initialDoc) {
        const normalized = migrateLegacyTableDocument(initialDoc);
        set({
          document: cloneDoc(normalized),
          isStageOpen: true,
          selectedRowIndices: [],
          undoStack: [],
          redoStack: [],
          activePopover: null,
        });
      } else {
        set({ isStageOpen: true, selectedRowIndices: [], activePopover: null });
      }
    },

    closeStage: () =>
      set({
        isStageOpen: false,
        selectedRowIndices: [],
        activePopover: null,
        activeContextMenuColIdx: null,
      }),

    toggleRowSelection: (rowIdx) => {
      const { selectedRowIndices } = get();
      if (selectedRowIndices.includes(rowIdx)) {
        set({ selectedRowIndices: selectedRowIndices.filter((idx) => idx !== rowIdx) });
      } else {
        const newSelection = [...selectedRowIndices, rowIdx].sort((a, b) => a - b);
        set({ selectedRowIndices: newSelection });
      }
    },

    selectAllRows: () => {
      const { document } = get();
      const allIndices = document.rows.map((_, idx) => idx);
      set({ selectedRowIndices: allIndices });
    },

    clearRowSelection: () => set({ selectedRowIndices: [] }),

    setRowSelection: (indices) => {
      const sorted = Array.from(new Set(indices)).sort((a, b) => a - b);
      set({ selectedRowIndices: sorted });
    },

    deleteSelectedRows: () => {
      const { document, selectedRowIndices } = get();
      if (selectedRowIndices.length === 0) return;
      const history = pushSnapshot(document);
      const toDeleteSet = new Set(selectedRowIndices);
      const newRows = document.rows.filter((_, idx) => !toDeleteSet.has(idx));
      set({
        document: { ...document, rows: newRows },
        selectedRowIndices: [],
        ...history,
      });
    },

    undo: () => {
      const { undoStack, document, redoStack } = get();
      if (undoStack.length === 0) return;
      const prevDoc = undoStack[undoStack.length - 1];
      if (!prevDoc) return;
      const newUndo = undoStack.slice(0, -1);
      set({
        document: cloneDoc(prevDoc),
        selectedRowIndices: [],
        undoStack: newUndo,
        redoStack: [...redoStack, cloneDoc(document)].slice(-MAX_HISTORY_DEPTH),
      });
    },

    redo: () => {
      const { redoStack, document, undoStack } = get();
      if (redoStack.length === 0) return;
      const nextDoc = redoStack[redoStack.length - 1];
      if (!nextDoc) return;
      const newRedo = redoStack.slice(0, -1);
      set({
        document: cloneDoc(nextDoc),
        selectedRowIndices: [],
        redoStack: newRedo,
        undoStack: [...undoStack, cloneDoc(document)].slice(-MAX_HISTORY_DEPTH),
      });
    },

    canUndo: () => get().undoStack.length > 0,
    canRedo: () => get().redoStack.length > 0,

    setActivePopover: (popover) => set({ activePopover: popover }),
    setContextMenuColIdx: (idx) => set({ activeContextMenuColIdx: idx }),

    openColumnModal: (mode, colIdx) => {
      const { document } = get();
      if (mode === 'edit' && colIdx !== undefined && document.columns[colIdx]) {
        const col = document.columns[colIdx]!;
        set({
          activePopover: null,
          modalState: {
            isOpen: true,
            mode: 'edit',
            targetColumnIndex: colIdx,
            initialTitle: col.title,
            initialType: col.type,
          },
        });
      } else {
        set({
          activePopover: null,
          modalState: {
            isOpen: true,
            mode: 'add',
            targetColumnIndex: null,
            initialTitle: '',
            initialType: 'text',
          },
        });
      }
    },

    closeColumnModal: () =>
      set((s) => ({ modalState: { ...s.modalState, isOpen: false } })),

    setTitle: (title) => {
      const { document } = get();
      if (document.title === title) return;
      const history = pushSnapshot(document);
      set({
        document: { ...document, title },
        ...history,
      });
    },

    updateCell: (rowIdx, columnIdOrIdx, val) => {
      const { document } = get();
      const existingRow = document.rows[rowIdx];
      if (!existingRow) return;

      const columnId =
        typeof columnIdOrIdx === 'number'
          ? document.columns[columnIdOrIdx]?.id
          : columnIdOrIdx;

      if (!columnId) return;

      const history = pushSnapshot(document);
      const newRows = [...document.rows];
      const targetRow: HTableRow = {
        ...existingRow,
        cells: { ...existingRow.cells, [columnId]: val },
      };
      newRows[rowIdx] = targetRow;
      set({
        document: { ...document, rows: newRows },
        ...history,
      });
    },

    addRow: (cells) => {
      const { document } = get();
      const history = pushSnapshot(document);
      const cellMap: Record<string, HTableCellValue> = {};

      if (cells && typeof cells === 'object' && !Array.isArray(cells)) {
        Object.assign(cellMap, cells);
      } else if (Array.isArray(cells)) {
        cells.forEach((val, idx) => {
          const col = document.columns[idx];
          if (col) cellMap[col.id] = val;
        });
      }

      set({
        document: {
          ...document,
          rows: [...document.rows, { id: newRowId(), cells: cellMap }],
        },
        ...history,
      });
    },

    deleteRow: (rowIdx) => {
      const { document, selectedRowIndices } = get();
      if (!document.rows[rowIdx]) return;
      const history = pushSnapshot(document);
      const newRows = document.rows.filter((_, idx) => idx !== rowIdx);
      const newSelection = selectedRowIndices
        .filter((idx) => idx !== rowIdx)
        .map((idx) => (idx > rowIdx ? idx - 1 : idx));
      set({
        document: { ...document, rows: newRows },
        selectedRowIndices: newSelection,
        ...history,
      });
    },

    reorderRows: (sourceIdx, targetIdx) => {
      const { document, selectedRowIndices } = get();
      if (sourceIdx === targetIdx) return;
      const rowToMove = document.rows[sourceIdx];
      if (!rowToMove) return;

      const history = pushSnapshot(document);
      const newRows = [...document.rows];
      const [moved] = newRows.splice(sourceIdx, 1);
      if (moved) newRows.splice(targetIdx, 0, moved);

      // 重新映射选中行
      const newSelection = selectedRowIndices.map((idx) => {
        if (idx === sourceIdx) return targetIdx;
        if (sourceIdx < targetIdx && idx > sourceIdx && idx <= targetIdx) return idx - 1;
        if (sourceIdx > targetIdx && idx >= targetIdx && idx < sourceIdx) return idx + 1;
        return idx;
      }).sort((a, b) => a - b);

      set({
        document: { ...document, rows: newRows },
        selectedRowIndices: newSelection,
        ...history,
      });
    },

    addColumn: (title, type, width) => {
      const { document } = get();
      const history = pushSnapshot(document);
      const newCol: HTableColumn = {
        id: newColumnId(),
        title: title.trim() || 'Untitled',
        type,
        visible: true,
        width: width ?? defaultColumnWidth(type),
      };
      set({
        document: {
          ...document,
          columns: [...document.columns, newCol],
        },
        ...history,
      });
    },

    updateColumn: (colIdx, title, type) => {
      const { document } = get();
      const targetCol = document.columns[colIdx];
      if (!targetCol) return;
      const history = pushSnapshot(document);
      const newCols = [...document.columns];
      newCols[colIdx] = {
        ...targetCol,
        title: title.trim() || targetCol.title,
        type,
      };
      set({
        document: { ...document, columns: newCols },
        ...history,
      });
    },

    renameColumn: (colIdx, newTitle) => {
      const { document } = get();
      const targetCol = document.columns[colIdx];
      if (!targetCol) return;
      const trimmed = newTitle.trim();
      if (!trimmed || targetCol.title === trimmed) return;

      const history = pushSnapshot(document);
      const newCols = [...document.columns];
      newCols[colIdx] = { ...targetCol, title: trimmed };
      set({
        document: { ...document, columns: newCols },
        ...history,
      });
    },

    deleteColumn: (colIdx) => {
      const { document } = get();
      if (!document.columns[colIdx]) return;
      const history = pushSnapshot(document);
      const newCols = document.columns.filter((_, idx) => idx !== colIdx);
      // 字典模型下删除列定义无需对 rows 做破坏性清洗，保留原数据解耦
      set({
        document: { ...document, columns: newCols },
        ...history,
      });
    },

    toggleColumnVisibility: (colIdx) => {
      const { document } = get();
      const targetCol = document.columns[colIdx];
      if (!targetCol) return;
      const history = pushSnapshot(document);
      const newCols = [...document.columns];
      newCols[colIdx] = { ...targetCol, visible: !targetCol.visible };
      set({
        document: { ...document, columns: newCols },
        ...history,
      });
    },

    reorderColumns: (sourceIdx, targetIdx) => {
      const { document } = get();
      if (sourceIdx === targetIdx) return;
      const colToMove = document.columns[sourceIdx];
      if (!colToMove) return;

      const history = pushSnapshot(document);
      const newCols = [...document.columns];
      const [movedCol] = newCols.splice(sourceIdx, 1);
      if (movedCol) newCols.splice(targetIdx, 0, movedCol);

      // 字典模型下列重排无需改动 rows[].cells，纯表头顺序更新，100% 杜绝错位
      set({
        document: { ...document, columns: newCols },
        ...history,
      });
    },

    setFilterConditions: (conditions) => {
      const { document } = get();
      const history = pushSnapshot(document);
      set({
        document: {
          ...document,
          filter: { match: document.filter?.match || 'all', conditions },
        },
        ...history,
      });
    },

    setRowHeight: (height) => {
      const { document } = get();
      if (document.rowHeight === height) return;
      const history = pushSnapshot(document);
      set({
        document: { ...document, rowHeight: height },
        ...history,
      });
    },

    loadDocument: (doc) => {
      const normalized = migrateLegacyTableDocument(doc);
      set({
        document: cloneDoc(normalized),
        selectedRowIndices: [],
        undoStack: [],
        redoStack: [],
      });
    },
  };
});
