import test from 'node:test';
import assert from 'node:assert/strict';
import { useTableStore } from '../../../store/tableStore.ts';

test('VirtualDataGrid logic: selection state calculations and toggle', () => {
  useTableStore.setState({
    document: {
      version: 1,
      title: '表格',
      rowHeight: 'low',
      columns: [
        { id: 'c1', title: '姓名', type: 'text', visible: true, width: 200 },
        { id: 'c2', title: '职业', type: 'text', visible: true, width: 200 },
      ],
      rows: [
        { id: 'r1', cells: { c1: 'Alice', c2: 'Designer' } },
        { id: 'r2', cells: { c1: 'Bob', c2: 'Developer' } },
        { id: 'r3', cells: { c1: 'Charlie', c2: 'Manager' } },
      ],
    },
    selectedRowIndices: [],
    undoStack: [],
    redoStack: [],
  });

  const state = useTableStore.getState();
  const totalRows = state.document.rows.length;

  // 1. 初始未选中
  assert.equal(state.selectedRowIndices.length, 0);
  let isAllSelected = totalRows > 0 && state.selectedRowIndices.length === totalRows;
  let isIndeterminate = state.selectedRowIndices.length > 0 && state.selectedRowIndices.length < totalRows;
  assert.equal(isAllSelected, false);
  assert.equal(isIndeterminate, false);

  // 2. 选中单行 -> 半选 (indeterminate)
  useTableStore.getState().toggleRowSelection(0);
  let currentSelection = useTableStore.getState().selectedRowIndices;
  assert.deepEqual(currentSelection, [0]);
  isAllSelected = totalRows > 0 && currentSelection.length === totalRows;
  isIndeterminate = currentSelection.length > 0 && currentSelection.length < totalRows;
  assert.equal(isAllSelected, false);
  assert.equal(isIndeterminate, true);

  // 3. 全选
  useTableStore.getState().selectAllRows();
  currentSelection = useTableStore.getState().selectedRowIndices;
  assert.deepEqual(currentSelection, [0, 1, 2]);
  isAllSelected = totalRows > 0 && currentSelection.length === totalRows;
  isIndeterminate = currentSelection.length > 0 && currentSelection.length < totalRows;
  assert.equal(isAllSelected, true);
  assert.equal(isIndeterminate, false);

  // 4. 清空全选
  useTableStore.getState().clearRowSelection();
  currentSelection = useTableStore.getState().selectedRowIndices;
  assert.deepEqual(currentSelection, []);
  isAllSelected = totalRows > 0 && currentSelection.length === totalRows;
  isIndeterminate = currentSelection.length > 0 && currentSelection.length < totalRows;
  assert.equal(isAllSelected, false);
  assert.equal(isIndeterminate, false);
});

test('VirtualDataGrid drag calculation logic', () => {
  useTableStore.setState({
    document: {
      version: 1,
      title: '表格',
      rowHeight: 'low',
      columns: [{ id: 'c1', title: '项', type: 'text', visible: true, width: 200 }],
      rows: [
        { id: 'r0', cells: { c1: 'Item 0' } },
        { id: 'r1', cells: { c1: 'Item 1' } },
        { id: 'r2', cells: { c1: 'Item 2' } },
        { id: 'r3', cells: { c1: 'Item 3' } },
      ],
    },
    selectedRowIndices: [],
    undoStack: [],
    redoStack: [],
  });

  // 模拟从 0 拖到 2，dropPosition 为 'bottom' -> target 插入在 2 之后 (index 2)
  const dragged = 0;
  const target = 2;
  const pos = 'bottom';
  let insertIdx = pos === 'bottom' ? target + 1 : target;
  if (dragged < insertIdx) insertIdx -= 1;

  useTableStore.getState().reorderRows(dragged, insertIdx);
  const rows = useTableStore.getState().document.rows.map((r) => r.cells['c1']);
  assert.deepEqual(rows, ['Item 1', 'Item 2', 'Item 0', 'Item 3']);
});
