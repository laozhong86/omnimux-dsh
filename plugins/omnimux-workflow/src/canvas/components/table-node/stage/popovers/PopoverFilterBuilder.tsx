import React, { useState } from 'react';
import { useTableStore } from '../../../../store/tableStore';
import type { FilterOperator } from '../../../../../shared/types/htable';

const OP_LABEL_MAP: Record<FilterOperator, string> = {
  equals: '等于',
  notEquals: '不等于',
  contains: '包含',
  notContains: '不包含',
  gt: '大于',
  gte: '大于等于',
  lt: '小于',
  lte: '小于等于',
  empty: '为空',
  notEmpty: '不为空',
};

const COMMON_OPS: FilterOperator[] = [
  'equals',
  'notEquals',
  'contains',
  'notContains',
  'empty',
  'notEmpty',
];

export const PopoverFilterBuilder: React.FC = () => {
  const { document, setFilterConditions } = useTableStore();
  const conditions = document.filter?.conditions || [{ columnIndex: 0, op: 'equals', value: '' }];

  const [activeOpMenuIdx, setActiveOpMenuIdx] = useState<number | null>(null);

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
      onClick={(e) => {
        e.stopPropagation();
        setActiveOpMenuIdx(null);
      }}
    >
      <div className="wf-popover-title">设置筛选条件</div>

      <div className="wf-filter-body">
        {conditions.map((cond, idx) => {
          const targetCol = document.columns[cond.columnIndex] || document.columns[0];
          const isOpMenuOpen = activeOpMenuIdx === idx;

          return (
            <div key={idx} className="wf-filter-row">
              {/* 字段选择胶囊 */}
              <div className="wf-filter-capsule-select" style={{ width: 110, flexShrink: 0 }}>
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {targetCol?.title || '字段'}
                </span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--wb-text-muted)' }}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>

              {/* 运算符选择胶囊 */}
              <div style={{ position: 'relative', flexShrink: 0 }}>
                <button
                  type="button"
                  className="wf-filter-capsule-select"
                  style={{ width: 110 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveOpMenuIdx(isOpMenuOpen ? null : idx);
                  }}
                >
                  <span>{OP_LABEL_MAP[cond.op] || '等于'}</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--wb-text-muted)' }}>
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {isOpMenuOpen && (
                  <div className="wf-popover-context-bubble" style={{ width: 140, left: 0, top: 40 }} onClick={(e) => e.stopPropagation()}>
                    {COMMON_OPS.map((op) => (
                      <button
                        key={op}
                        type="button"
                        className="wf-context-menu-item"
                        style={cond.op === op ? { fontWeight: 600, color: 'var(--wb-accent)', background: 'var(--wb-accent-soft)' } : {}}
                        onClick={() => {
                          handleUpdateCondition(idx, { op });
                          setActiveOpMenuIdx(null);
                        }}
                      >
                        <span style={{ flex: 1 }}>{OP_LABEL_MAP[op]}</span>
                        {cond.op === op && (
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: 'var(--wb-accent)' }}>
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* 比较值输入框 */}
              <input
                type="text"
                className="wf-filter-capsule-input"
                placeholder="请输入"
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
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          );
        })}

        <div style={{ paddingTop: 4 }}>
          <button
            type="button"
            className="wf-context-menu-item"
            style={{ width: 'auto', color: 'var(--wb-accent)', display: 'inline-flex' }}
            onClick={handleAddCondition}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <span>添加条件</span>
          </button>
        </div>
      </div>
    </div>
  );
};
