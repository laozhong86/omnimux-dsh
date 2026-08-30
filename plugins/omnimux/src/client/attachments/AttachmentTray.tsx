import React, { useEffect, useSyncExternalStore, useCallback } from 'react';
import { getGlobalAttachmentStore } from './store.ts';
import { AttachmentCard } from './AttachmentCard.tsx';
import type { ConversationAttachment } from './types.ts';

const ATTACHMENTS_STYLE_ID = 'omnimux-attachments-styles';

// 内联基础样式以确保任何场景自洽加载
const BASE_CSS = `
.omx-attachment-dock {
  box-sizing: border-box;
  width: 100%;
  padding: 0 0 6px 0;
  margin: 0 auto;
}
.omx-attachment-tray {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  gap: 10px;
  max-width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  padding: 2px 2px 4px 2px;
}
.omx-attachment-tray::-webkit-scrollbar {
  display: none;
}
.omx-att-card {
  position: relative;
  box-sizing: border-box;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  background: var(--dsw-alias-bg-layer-1, rgba(255, 255, 255, 0.04));
  border: 1px solid var(--dsw-alias-border-l2, rgba(255, 255, 255, 0.12));
  user-select: none;
  cursor: default;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.omx-att-card:hover {
  background: var(--dsw-alias-bg-layer-2, rgba(255, 255, 255, 0.07));
  border-color: var(--dsw-alias-border-l3, rgba(255, 255, 255, 0.22));
}
.omx-att-card--media {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  overflow: hidden;
  padding: 0;
  justify-content: center;
}
.omx-att-card__media-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.omx-att-card__media-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--dsw-alias-bg-layer-2, rgba(255, 255, 255, 0.08));
  color: var(--dsw-alias-label-tertiary, rgba(255, 255, 255, 0.4));
}
.omx-att-card__play-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(2px);
  border-radius: 50%;
  color: #ffffff;
  pointer-events: none;
}
.omx-att-card__duration-badge {
  position: absolute;
  bottom: 4px;
  right: 4px;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(4px);
  color: #ffffff;
  font-size: 10px;
  font-weight: 500;
  line-height: 14px;
  padding: 0 4px;
  border-radius: 4px;
  pointer-events: none;
}
.omx-att-card--file {
  height: 56px;
  min-width: 130px;
  max-width: 180px;
  border-radius: 10px;
  padding: 8px 10px 8px 10px;
  gap: 10px;
}
.omx-att-card__file-icon {
  flex-shrink: 0;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--dsw-alias-label-secondary, rgba(255, 255, 255, 0.72));
}
.omx-att-card__file-info {
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3px;
}
.omx-att-card__file-title {
  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
  color: var(--dsw-alias-label-primary, #ffffff);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 115px;
}
.omx-att-card__file-ext {
  font-size: 10px;
  font-weight: 600;
  line-height: 12px;
  color: var(--dsw-alias-label-tertiary, rgba(255, 255, 255, 0.45));
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.omx-att-card__remove-btn {
  position: absolute;
  top: -6px;
  right: -6px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--dsw-alias-bg-elevated, #1c1c1f);
  border: 1px solid var(--dsw-alias-border-l2, rgba(255, 255, 255, 0.2));
  color: var(--dsw-alias-label-secondary, rgba(255, 255, 255, 0.7));
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.15s ease, transform 0.15s ease, background-color 0.15s ease, color 0.15s ease;
  z-index: 5;
}
.omx-att-card:hover .omx-att-card__remove-btn {
  opacity: 1;
  transform: scale(1);
}
.omx-att-card__remove-btn:hover {
  background: var(--dsw-alias-state-error-primary, #ef4444);
  border-color: var(--dsw-alias-state-error-primary, #ef4444);
  color: #ffffff;
}
`;

function ensureStylesInjected() {
  if (typeof document === 'undefined') return;
  if (!document.getElementById(ATTACHMENTS_STYLE_ID)) {
    const styleEl = document.createElement('style');
    styleEl.id = ATTACHMENTS_STYLE_ID;
    styleEl.textContent = BASE_CSS;
    document.head.appendChild(styleEl);
  }
}

export interface AttachmentTrayProps {
  session?: { id: string } | null;
  sessionId?: string;
}

export const AttachmentTray: React.FC<AttachmentTrayProps> = (props) => {
  const store = getGlobalAttachmentStore();
  const currentSessionId = props.session?.id || props.sessionId || store.getActiveSessionId() || 'default';

  useEffect(() => {
    ensureStylesInjected();
  }, []);

  const subscribe = useCallback(
    (callback: () => void) => store.subscribe(currentSessionId, callback),
    [store, currentSessionId]
  );

  const getSnapshot = useCallback(
    () => store.getSnapshot(currentSessionId),
    [store, currentSessionId]
  );

  const attachments = useSyncExternalStore(subscribe, getSnapshot, () => []);

  const handleRemove = useCallback(
    (attachmentId: string) => {
      store.removeAttachment(currentSessionId, attachmentId);
    },
    [store, currentSessionId]
  );

  // 空列表时零 DOM 占用，不渲染空容器
  if (!attachments || attachments.length === 0) {
    return null;
  }

  return (
    <div className="omx-attachment-dock" data-omnimux-attachments-dock="true">
      <div className="omx-attachment-tray" role="list" aria-label="会话关联附件导轨">
        {attachments.map((att) => (
          <AttachmentCard
            key={att.id}
            attachment={att}
            onRemove={handleRemove}
          />
        ))}
      </div>
    </div>
  );
};
