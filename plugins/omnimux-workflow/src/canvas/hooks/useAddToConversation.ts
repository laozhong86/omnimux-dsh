import { useCallback } from 'react';
import { toast } from '../ui/toast';

export interface AddToConversationPayload {
  sourcePlugin?: 'omnimux-workflow' | 'omnimux-assets' | 'omnimux-products' | 'omnimux-inspiration' | 'omnimux-clip';
  kind: 'image' | 'video' | 'audio' | 'table' | 'document' | 'canvas' | 'asset' | 'product';
  entityId: string;
  title: string;
  extension?: string;
  relativePath: string;
  absolutePath?: string;
  previewUrl?: string;
  duration?: string;
  metadata?: Record<string, unknown>;
}

const KIND_LABELS: Record<string, string> = {
  table: '表格',
  video: '视频',
  image: '图像',
  audio: '音频',
  document: '文档',
  canvas: '工作流',
  asset: '资产',
  product: '产品',
};

export function useAddToConversation() {
  const addToConversation = useCallback((payload: AddToConversationPayload) => {
    if (!payload || !payload.title) return;

    const sourcePlugin = payload.sourcePlugin || 'omnimux-workflow';
    const detail = {
      ...payload,
      sourcePlugin,
    };

    // 1. 派发全局统一 CustomEvent
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('omnimux:add-to-conversation', {
          detail,
        })
      );
    }

    // 2. 写入剪贴板作为双保险兜底
    const kindLabel = KIND_LABELS[payload.kind] || '文件';
    const clipText = `[${kindLabel}: ${payload.title}](@${payload.relativePath})`;
    navigator.clipboard?.writeText?.(clipText).catch(() => {});

    // 3. 弹出轻量成功反馈
    toast.success(`已添加到会话：${payload.title}`);
  }, []);

  return { addToConversation };
}
