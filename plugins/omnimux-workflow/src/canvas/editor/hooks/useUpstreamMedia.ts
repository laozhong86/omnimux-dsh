import { useMemo } from 'react';
import { useNodes, useEdges } from '@xyflow/react';
import type { MaterialNodeData, MaterialType } from '../../types/materialNode';
import { resolveMediaPreviewUrl, type MediaAssetLike } from '../utils/mediaUrl';

export interface UpstreamMediaItem {
  nodeId: string;
  label: string;
  materialType: MaterialType;
  url?: string;
  hasMedia: boolean;
  textContent?: string;
}

export function useUpstreamMedia(nodeId: string): UpstreamMediaItem[] {
  const nodes = useNodes();
  const edges = useEdges();

  return useMemo<UpstreamMediaItem[]>(() => {
    if (!nodeId || !edges || !nodes) return [];
    const sourceIds = edges.filter((edge) => edge.target === nodeId).map((edge) => edge.source);
    return sourceIds.flatMap((sourceId) => {
      const node = nodes.find((n) => n.id === sourceId);
      if (!node) return [];
      const data = (node.data || {}) as unknown as MaterialNodeData;
      const url = resolveMediaPreviewUrl(
        data.materialType,
        data.mediaAssets as MediaAssetLike[] | undefined,
        data.mediaUrl,
      );
      const textContent = (data.content || data.generatedContent || '') as string;
      const hasMedia = Boolean(url || (data.materialType === 'text' && textContent.trim().length > 0));

      return [
        {
          nodeId: node.id,
          label: data.label || node.id,
          materialType: data.materialType || 'image',
          url,
          hasMedia,
          textContent,
        },
      ];
    });
  }, [nodes, edges, nodeId]);
}
