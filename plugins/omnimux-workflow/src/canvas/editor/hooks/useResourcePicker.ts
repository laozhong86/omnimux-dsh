/**
 * ResourcePicker 弹窗状态 + 提交。
 * 画布资源走 applyCanvasInputMutation 加边；本地文件按 policy 写入当前节点或创建上游。
 */

import { useCallback, useState } from 'react';
import { useCanvasStore } from '../../store/canvasStore';
import { toast } from '../../ui';
import { useT } from '../../i18n';
import {
  planResourcePickerCommit,
  type LocalFileDraft,
  type ResourcePickerTab,
} from '../utils/resourcePickerPolicy.ts';

export interface UseResourcePickerResult {
  open: boolean;
  initialTab: ResourcePickerTab;
  openPicker: (tab?: ResourcePickerTab) => void;
  closePicker: () => void;
  commit: (payload: {
    selectedCanvasNodeIds: string[];
    localFiles: LocalFileDraft[];
  }) => boolean;
}

export function useResourcePicker(nodeId: string): UseResourcePickerResult {
  const t = useT();
  const [open, setOpen] = useState(false);
  const [initialTab, setInitialTab] = useState<ResourcePickerTab>('canvas');

  const openPicker = useCallback((tab: ResourcePickerTab = 'canvas') => {
    setInitialTab(tab);
    setOpen(true);
  }, []);

  const closePicker = useCallback(() => {
    setOpen(false);
  }, []);

  const commit = useCallback(
    (payload: { selectedCanvasNodeIds: string[]; localFiles: LocalFileDraft[] }) => {
      const state = useCanvasStore.getState();
      const plan = planResourcePickerCommit({
        nodes: state.nodes,
        edges: state.edges,
        targetNodeId: nodeId,
        selectedCanvasNodeIds: payload.selectedCanvasNodeIds,
        localFiles: payload.localFiles,
      });

      if (!plan.hasWork) {
        toast.warning(t('picker.commitEmpty'));
        return false;
      }

      const result = state.applyCanvasInputMutation({
        addNodes: plan.addNodes,
        addEdges: plan.addEdges,
        nodePatches: plan.nodePatches,
      });

      if (result.status !== 'allowed') {
        toast.error(t('picker.commitFailed'));
        return false;
      }

      if (plan.rejected.length > 0) {
        toast.warning(t('picker.commitPartial'));
      } else {
        toast.success(t('picker.commitOk'));
      }
      setOpen(false);
      return true;
    },
    [nodeId, t],
  );

  return { open, initialTab, openPicker, closePicker, commit };
}
