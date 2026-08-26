/**
 * 本地上传面板：拖拽区 + 多选 file input + 待提交列表与移除。
 */

import React, { useCallback, useRef, useState } from 'react';
import { FileUp, Trash2, Upload } from 'lucide-react';
import { useT } from '../../../i18n';
import { toast } from '../../../ui';
import {
  formatFileSize,
  mimeToMaterialType,
  type LocalFileDraft,
} from '../../utils/resourcePickerPolicy.ts';

export interface LocalUploadPaneProps {
  files: LocalFileDraft[];
  onAddFiles: (files: LocalFileDraft[]) => void;
  onRemove: (id: string) => void;
}

function draftFromFile(file: File): LocalFileDraft | null {
  const materialType = mimeToMaterialType(file.type, file.name);
  if (!materialType) return null;
  return {
    id: `${file.name}-${file.size}-${file.lastModified}-${Math.random().toString(36).slice(2, 8)}`,
    name: file.name,
    mime: file.type,
    size: file.size,
    objectUrl: URL.createObjectURL(file),
    materialType,
  };
}

const LocalUploadPane: React.FC<LocalUploadPaneProps> = ({ files, onAddFiles, onRemove }) => {
  const t = useT();
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  const ingest = useCallback(
    (list: FileList | File[]) => {
      const incoming = Array.from(list);
      const accepted: LocalFileDraft[] = [];
      let rejected = 0;
      for (const file of incoming) {
        const draft = draftFromFile(file);
        if (draft) accepted.push(draft);
        else rejected += 1;
      }
      if (accepted.length > 0) onAddFiles(accepted);
      if (rejected > 0) toast.warning(t('picker.unsupported'));
    },
    [onAddFiles, t],
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragging(false);
      if (e.dataTransfer.files?.length) ingest(e.dataTransfer.files);
    },
    [ingest],
  );

  return (
    <div className="wf-picker-pane">
      <button
        type="button"
        className={`wf-picker-dropzone ${dragging ? 'wf-picker-dropzone--active' : ''}`}
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setDragging(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setDragging(false);
        }}
        onDrop={handleDrop}
      >
        <Upload size={22} className="wf-picker-dropzone__icon" />
        <span className="wf-picker-dropzone__title">{t('picker.dropTitle')}</span>
        <span className="wf-picker-dropzone__hint">{t('picker.dropHint')}</span>
        <span className="wf-picker-dropzone__cta">
          <FileUp size={14} />
          {t('picker.chooseFiles')}
        </span>
      </button>
      <input
        ref={inputRef}
        type="file"
        multiple
        accept="image/*,video/*,audio/*"
        className="wf-picker-file-input"
        onChange={(e) => {
          if (e.target.files?.length) ingest(e.target.files);
          e.target.value = '';
        }}
      />

      {files.length > 0 ? (
        <ul className="wf-picker-file-list">
          {files.map((file) => (
            <li key={file.id} className="wf-picker-file-item">
              <div className="wf-picker-file-item__thumb">
                {file.materialType === 'image' ? (
                  <img src={file.objectUrl} alt="" className="wf-picker-card__media" />
                ) : file.materialType === 'video' ? (
                  <video src={file.objectUrl} className="wf-picker-card__media" muted />
                ) : (
                  <span className="wf-picker-card__fallback wf-picker-card__fallback--audio">
                    {t('node.type.audio')}
                  </span>
                )}
              </div>
              <div className="wf-picker-row__body">
                <span className="wf-picker-card__name">{file.name}</span>
                <span className="wf-picker-row__sub">
                  {t(`node.type.${file.materialType}`)}
                  {file.size ? ` · ${formatFileSize(file.size)}` : ''}
                </span>
              </div>
              <button
                type="button"
                className="wf-picker-file-remove"
                onClick={() => onRemove(file.id)}
                title={t('picker.removeFile')}
              >
                <Trash2 size={14} />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default LocalUploadPane;
