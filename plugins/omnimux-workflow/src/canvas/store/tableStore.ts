import { create } from 'zustand';
import type {
  HTableDocument,
  HTableColumn,
  HTableRow,
  HTableFieldType,
  HTableCellValue,
  HTableFilterCondition,
  HTableRowHeight,
} from '../../shared/types/htable';

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
  updateCell: (rowIdx: number, colIdx: number, val: HTableCellValue) => void;
  addRow: (cells?: HTableCellValue[]) => void;
  deleteRow: (rowIdx: number) => void;
  addColumn: (title: string, type: HTableFieldType, width?: number) => void;
  updateColumn: (colIdx: number, title: string, type: HTableFieldType) => void;
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
  filter: {
    match: 'all',
    conditions: [
      { columnIndex: 0, op: 'equals', value: '' },
    ],
  },
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
        set({
          document: cloneDoc(initialDoc),
          isStageOpen: true,
          undoStack: [],
          redoStack: [],
          activePopover: null,
        });
      } else {
        set({ isStageOpen: true, activePopover: null });
      }
    },

    closeStage: () => set({ isStageOpen: false, activePopover: null, activeContextMenuColIdx: null }),

    undo: () => {
      const { undoStack, document, redoStack } = get();
      if (undoStack.length === 0) return;
      const prevDoc = undoStack[undoStack.length - 1];
      if (!prevDoc) return;
      const newUndo = undoStack.slice(0, -1);
      set({
        document: cloneDoc(prevDoc),
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

    updateCell: (rowIdx, colIdx, val) => {
      const { document } = get();
      const existingRow = document.rows[rowIdx];
      if (!existingRow) return;
      const history = pushSnapshot(document);
      const newRows = [...document.rows];
      const targetRow = { ...existingRow, cells: [...existingRow.cells] };
      targetRow.cells[colIdx] = val;
      newRows[rowIdx] = targetRow;
      set({
        document: { ...document, rows: newRows },
        ...history,
      });
    },

    addRow: (cells) => {
      const { document } = get();
      const history = pushSnapshot(document);
      const emptyCells = cells || document.columns.map((c) => (c.type === 'attachment' ? [] : ''));
      set({
        document: {
          ...document,
          rows: [...document.rows, { cells: emptyCells }],
        },
        ...history,
      });
    },

    deleteRow: (rowIdx) => {
      const { document } = get();
      if (!document.rows[rowIdx]) return;
      const history = pushSnapshot(document);
      const newRows = document.rows.filter((_, idx) => idx !== rowIdx);
      set({
        document: { ...document, rows: newRows },
        ...history,
      });
    },

    addColumn: (title, type, width = 240) => {
      const { document } = get();
      const history = pushSnapshot(document);
      const newCol: HTableColumn = {
        id: `col_${Math.random().toString(36).substring(2, 9)}`,
        title,
        type,
        visible: true,
        width,
      };
      const newRows = document.rows.map((row) => ({
        ...row,
        cells: [...row.cells, type === 'attachment' ? [] : ''],
      }));
      set({
        document: {
          ...document,
          columns: [...document.columns, newCol],
          rows: newRows,
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
      newCols[colIdx] = { ...targetCol, title, type };
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
      const newRows = document.rows.map((row) => ({
        ...row,
        cells: row.cells.filter((_, idx) => idx !== colIdx),
      }));
      set({
        document: { ...document, columns: newCols, rows: newRows },
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

      const newRows = document.rows.map((row) => {
        const newCells = [...row.cells];
        const [movedCell] = newCells.splice(sourceIdx, 1);
        if (movedCell !== undefined) newCells.splice(targetIdx, 0, movedCell);
        return { ...row, cells: newCells };
      });

      set({
        document: { ...document, columns: newCols, rows: newRows },
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

    loadDocument: (doc) => set({ document: cloneDoc(doc), undoStack: [], redoStack: [] }),
  };
});
