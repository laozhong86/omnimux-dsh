/**
 * MediaPreview（W1 T1.7）— 真实媒体预览，替换 M1-M5 的文字占位。
 *
 * image → img；video → <video controls>；audio → <audio controls>。
 * 数据源：mediaAssets（SSE node_complete 写入，
 * useExecutionController.ts:147-152）取首个匹配类型的 asset，回退 mediaUrl。
 * 嵌入 GenerationStateContainer 的 completed 分支。
 */

import { memo, useMemo } from 'react';
import type { MaterialType } from '../../../types/materialNode';
import { resolveMediaPreviewUrl, type MediaAssetLike } from '../../utils/mediaUrl';

export type { MediaAssetLike };
export { resolveMediaPreviewUrl };

export interface MediaPreviewProps {
  materialType: MaterialType;
  mediaAssets?: MediaAssetLike[];
  mediaUrl?: string;
  label?: string;
}

const MediaPreview: React.FC<MediaPreviewProps> = ({ materialType, mediaAssets, mediaUrl, label }) => {
  const url = useMemo(
    () => resolveMediaPreviewUrl(materialType, mediaAssets, mediaUrl),
    [materialType, mediaAssets, mediaUrl],
  );
  if (!url) return null;

  switch (materialType) {
    case 'image':
      return <img src={url} alt={label ?? ''} className="wf-media-preview__media wf-media-preview__media--image" />;
    case 'video':
      return (
        <video
          src={url}
          controls
          preload="metadata"
          className="wf-media-preview__media wf-media-preview__media--video"
        />
      );
    case 'audio':
      return (
        <div className="wf-media-preview__audio">
          <audio src={url} controls preload="metadata" className="wf-media-preview__audio-el" />
        </div>
      );
    default:
      return null;
  }
};

export default memo(MediaPreview);
