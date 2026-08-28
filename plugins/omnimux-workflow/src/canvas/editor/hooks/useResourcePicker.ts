/**
 * ResourcePicker 弹窗状态 + 提交。
 * 画布资源走 applyCanvasInputMutation 加边；本地文件按 realPath 索引写入当前节点或创建上游。
 */

import { useCallback, useState } from 'react';
import { useCanvasStore } from '../../store/canvasStore';
import { toast } from '../../ui';
import { useT } from '../../i18n';
import { pickLocalFiles } from '../../bridge/apiClient.ts';
import {
  planResourcePickerCommit,
  type LocalFileDraft,
  type ResourcePickerTab,
} from '../utils/resourcePickerPolicy.ts';
import { draftsFromPickedPaths } from '../utils/localFileDraft.ts';
import { buildImportedMediaData } from '../../../shared/localMedia.ts';
import type { MaterialType } from '../../../shared/graph/materialNode.ts';

export interface UseResourcePickerResult {
  open: boolean;
  initialTab: ResourcePickerTab;
  openPicker: (tab?: ResourcePickerTab) => void;
  closePicker: () => void;
  importLocalFiles: () => Promise<boolean>;
  relinkLocalFile: (materialType: MaterialType) => Promise<boolean>;
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

  const importLocalFiles = useCallback(async () => {
    const result = await pickLocalFiles();
    if (!result.ok) {
      if (result.body.error === 'picker-unsupported') {
        toast.warning(t('picker.needPath'));
      } else {
        toast.error(t('picker.pickFailed'));
      }
      return false;
    }
    const paths = result.body.paths ?? [];
    if (paths.length === 0) return false;
    const drafts = draftsFromPickedPaths(paths);
    if (drafts.length === 0) {
      toast.warning(t('picker.unsupported'));
      return false;
    }
    return commit({ selectedCanvasNodeIds: [], localFiles: drafts });
  }, [commit, t]);

  const relinkLocalFile = useCallback(async (materialType: MaterialType) => {
    const result = await pickLocalFiles();
    if (!result.ok) {
      toast.error(t('picker.pickFailed'));
      return false;
    }
    const path = result.body.path;
    if (!path) return false;
    const drafts = draftsFromPickedPaths([path]);
    const draft = drafts[0];
    if (!draft || draft.materialType !== materialType) {
      toast.warning(t('picker.unsupported'));
      return false;
    }
    const patch = buildImportedMediaData({
      realPath: draft.realPath,
      name: draft.name,
      materialType: draft.materialType,
      mime: draft.mime,
      size: draft.size,
    });
    const applied = useCanvasStore.getState().applyCanvasInputMutation({
      nodePatches: [{ nodeId, data: patch }],
    });
    if (applied.status !== 'allowed') {
      toast.error(t('picker.commitFailed'));
      return false;
    }
    toast.success(t('node.relinkOk'));
    return true;
  }, [nodeId, t]);

  return { open, initialTab, openPicker, closePicker, importLocalFiles, relinkLocalFile, commit };
}
