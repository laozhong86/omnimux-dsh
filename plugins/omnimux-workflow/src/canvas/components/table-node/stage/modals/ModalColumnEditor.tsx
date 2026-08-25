import React, { useState, useEffect, useRef } from 'react';
import { useTableStore } from '../../../../store/tableStore';
import type { HTableFieldType } from '../../../../../shared/types/htable';

const FIELD_TYPES: { type: HTableFieldType; label: string }[] = [
  { type: 'text', label: '文本' },
  { type: 'number', label: '数字' },
  { type: 'attachment', label: '附件' },
];

export const ModalColumnEditor: React.FC = () => {
  const { modalState, closeColumnModal, addColumn, updateColumn } = useTableStore();
  const [title, setTitle] = useState(modalState.initialTitle);
  const [selectedType, setSelectedType] = useState<HTableFieldType>(modalState.initialType);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (modalState.isOpen) {
      setTitle(modalState.initialTitle);
      setSelectedType(modalState.initialType);
      setIsDropdownOpen(false);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [modalState.isOpen, modalState.initialTitle, modalState.initialType]);

  if (!modalState.isOpen) return null;

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = title.trim();
    if (!trimmed) {
      alert('请输入字段名');
      return;
    }

    if (modalState.mode === 'add') {
      addColumn(trimmed, selectedType);
    } else if (modalState.mode === 'edit' && modalState.targetColumnIndex !== null) {
      updateColumn(modalState.targetColumnIndex, trimmed, selectedType);
    }
    closeColumnModal();
  };

  const selectedTypeLabel = FIELD_TYPES.find((f) => f.type === selectedType)?.label || '文本';

  return (
    <div
      className="wf-modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeColumnModal();
      }}
    >
      <div className="wf-modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="wf-modal-header">
          <h3 className="wf-modal-title">
            {modalState.mode === 'add' ? '添加列' : '编辑列'}
          </h3>
          <button
            type="button"
            className="wf-field-config-subtle-btn"
            style={{ width: 28, height: 28 }}
            onClick={closeColumnModal}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <label style={{ fontSize: 12, fontWeight: 500, color: 'var(--wb-text-secondary)' }}>字段名</label>
            <input
              ref={inputRef}
              type="text"
              className="wf-modal-input"
              placeholder="请输入字段名"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, position: 'relative' }}>
            <label style={{ fontSize: 12, fontWeight: 500, color: 'var(--wb-text-secondary)' }}>字段类型</label>
            <div
              className="wf-filter-capsule-select"
              style={{ height: 42, padding: '0 14px' }}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span style={{ fontSize: 'var(--wb-fs-title)' }}>{selectedTypeLabel}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--wb-text-muted)' }}>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>

            {isDropdownOpen && (
              <div className="wf-popover-context-bubble" style={{ width: '100%', top: 72, left: 0 }}>
                {FIELD_TYPES.map((f) => (
                  <button
                    key={f.type}
                    type="button"
                    className="wf-row-height-item"
                    style={selectedType === f.type ? { fontWeight: 600, color: 'var(--wb-accent)' } : {}}
                    onClick={() => {
                      setSelectedType(f.type);
                      setIsDropdownOpen(false);
                    }}
                  >
                    <span>{f.label}</span>
                    {selectedType === f.type && (
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ color: 'var(--wb-accent)' }}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 10, marginTop: 12 }}>
            <button
              type="button"
              className="wf-modal-btn-cancel"
              onClick={closeColumnModal}
            >
              取消
            </button>
            <button
              type="submit"
              className="wf-modal-btn-primary"
            >
              确定
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
