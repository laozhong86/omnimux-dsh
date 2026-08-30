import test from 'node:test';
import assert from 'node:assert/strict';
import { useTableStore } from './tableStore.ts';

test('tableStore: columnId-based cell mutations, row operations and undo/redo', () => {
  // 1. 初始化包含字典 cells 的文档
  useTableStore.setState({
    document: {
      version: 1,
      title: '测试表格',
      rowHeight: 'low',
      columns: [
        { id: 'col_name', title: '姓名', type: 'text', visible: true, width: 200 },
        { id: 'col_age', title: '年龄', type: 'number', visible: true, width: 100 },
      ],
      rows: [
        { id: 'row_1', cells: { col_name: 'Alice', col_age: 20 } },
        { id: 'row_2', cells: { col_name: 'Bob', col_age: 25 } },
        { id: 'row_3', cells: { col_name: 'Charlie', col_age: 30 } },
      ],
    },
    selectedRowIndices: [],
    undoStack: [],
    redoStack: [],
  });

  // 2. updateCell via columnId
  useTableStore.getState().updateCell(0, 'col_name', 'Alice In Wonderland');
  assert.equal(useTableStore.getState().document.rows[0].cells['col_name'], 'Alice In Wonderland');

  // 3. 列重排测试：调换列顺序，行数据字典不受影响
  useTableStore.getState().reorderColumns(0, 1);
  const colsAfterReorder = useTableStore.getState().document.columns;
  assert.equal(colsAfterReorder[0].id, 'col_age');
  assert.equal(colsAfterReorder[1].id, 'col_name');
  assert.equal(useTableStore.getState().document.rows[0].cells['col_name'], 'Alice In Wonderland');
  assert.equal(useTableStore.getState().document.rows[0].cells['col_age'], 20);

  // 4. 新增列测试
  useTableStore.getState().addColumn('角色', 'text');
  const colsAfterAdd = useTableStore.getState().document.columns;
  assert.equal(colsAfterAdd.length, 3);
  const newColId = colsAfterAdd[2].id;
  useTableStore.getState().updateCell(0, newColId, '主角');
  assert.equal(useTableStore.getState().document.rows[0].cells[newColId], '主角');

  // 5. 增行与删行
  useTableStore.getState().addRow({ col_name: 'David', col_age: 28 });
  const rowsAfterAdd = useTableStore.getState().document.rows;
  assert.equal(rowsAfterAdd.length, 4);
  assert.equal(rowsAfterAdd[3].cells['col_name'], 'David');

  // 6. 批量删除选中的行
  useTableStore.getState().setRowSelection([1, 3]);
  useTableStore.getState().deleteSelectedRows();
  const rowsAfterDelete = useTableStore.getState().document.rows;
  assert.equal(rowsAfterDelete.length, 2);
  assert.equal(rowsAfterDelete[0].cells['col_name'], 'Alice In Wonderland');
  assert.equal(rowsAfterDelete[1].cells['col_name'], 'Charlie');

  // 7. Undo / Redo
  assert.equal(useTableStore.getState().canUndo(), true);
  useTableStore.getState().undo();
  assert.equal(useTableStore.getState().document.rows.length, 4);
  useTableStore.getState().redo();
  assert.equal(useTableStore.getState().document.rows.length, 2);
});
