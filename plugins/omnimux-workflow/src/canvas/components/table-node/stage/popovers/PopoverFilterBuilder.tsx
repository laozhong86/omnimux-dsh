import React from 'react';
import { Plus, X } from 'lucide-react';
import { useTableStore } from '../../../../store/tableStore';
import { CustomSelect, type SelectOption } from '../../../../ui';
import type { FilterOperator } from '../../../../../shared/types/htable';

const OP_OPTIONS: SelectOption<FilterOperator>[] = [
  { value: 'equals', label: '等于' },
  { value: 'notEquals', label: '不等于' },
  { value: 'contains', label: '包含' },
  { value: 'notContains', label: '不包含' },
  { value: 'gt', label: '大于' },
  { value: 'gte', label: '大于等于' },
  { value: 'lt', label: '小于' },
  { value: 'lte', label: '小于等于' },
  { value: 'empty', label: '为空' },
  { value: 'notEmpty', label: '不为空' },
];

export const PopoverFilterBuilder: React.FC = () => {
  const { document, setFilterConditions } = useTableStore();
  const conditions = document.filter?.conditions || [{ columnIndex: 0, op: 'equals', value: '' }];

  const columnOptions: SelectOption<number>[] = document.columns.map((col, idx) => ({
    value: idx,
    label: col.title || `列 ${idx + 1}`,
  }));

  const handleUpdateCondition = (index: number, patch: Partial<{ columnIndex: number; op: FilterOperator; value: string | number }>) => {
    const next = conditions.map((c, i) => (i === index ? { ...c, ...patch } : c));
    setFilterConditions(next);
  };

  const handleAddCondition = () => {
    const next = [...conditions, { columnIndex: 0, op: 'equals' as FilterOperator, value: '' }];
    setFilterConditions(next);
  };

  const handleDeleteCondition = (index: number) => {
    const next = conditions.filter((_, i) => i !== index);
    setFilterConditions(next.length === 0 ? [{ columnIndex: 0, op: 'equals', value: '' }] : next);
  };

  return (
    <div
      className="wf-popover-card wf-popover-filter"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="wf-popover-title">设置筛选条件</div>

      <div className="wf-filter-body">
        {conditions.map((cond, idx) => {
          return (
            <div key={idx} className="wf-filter-row">
              {/* 字段选择胶囊 */}
              <div style={{ width: 130, flexShrink: 0 }}>
                <CustomSelect<number>
                  value={cond.columnIndex}
                  options={columnOptions}
                  onChange={(val) => handleUpdateCondition(idx, { columnIndex: val })}
                  variant="standard"
                  className="wf-filter-capsule-select"
                />
              </div>

              {/* 运算符选择胶囊 */}
              <div style={{ width: 110, flexShrink: 0 }}>
                <CustomSelect<FilterOperator>
                  value={cond.op}
                  options={OP_OPTIONS}
                  onChange={(val) => handleUpdateCondition(idx, { op: val })}
                  variant="standard"
                  className="wf-filter-capsule-select"
                />
              </div>

              {/* 比较值输入框 */}
              <input
                type="text"
                className="wf-filter-capsule-input"
                placeholder="请输入筛选值..."
                value={cond.value ?? ''}
                disabled={cond.op === 'empty' || cond.op === 'notEmpty'}
                onChange={(e) => handleUpdateCondition(idx, { value: e.target.value })}
              />

              {/* 删除条件按钮 */}
              <button
                type="button"
                className="wf-field-config-subtle-btn"
                title="删除条件"
                onClick={() => handleDeleteCondition(idx)}
              >
                <X size={15} />
              </button>
            </div>
          );
        })}

        <div style={{ paddingTop: 4 }}>
          <button
            type="button"
            className="wf-context-menu-item"
            style={{ width: 'auto', color: 'var(--wb-accent, #4176E6)', display: 'inline-flex', gap: 6 }}
            onClick={handleAddCondition}
          >
            <Plus size={14} />
            <span>添加条件</span>
          </button>
        </div>
      </div>
    </div>
  );
};
