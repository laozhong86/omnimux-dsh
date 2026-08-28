/**
 * MediaPreview（W1 T1.7）— 真实媒体预览，替换 M1-M5 的文字占位。
 *
 * image → img；video → <video controls>；audio → <audio controls>。
 * 数据源：mediaAssets（SSE node_complete 写入，
 * useExecutionController.ts:147-152）取首个匹配类型的 asset，回退 mediaUrl。
 * 嵌入 GenerationStateContainer 的 completed 分支。
 */

import { memo, useMemo, useCallback } from 'react';
import type { MaterialType } from '../../../types/materialNode';
import { resolveMediaPreviewUrl, type MediaAssetLike } from '../../utils/mediaUrl';

export type { MediaAssetLike };
export { resolveMediaPreviewUrl };

export interface MediaPreviewProps {
  materialType: MaterialType;
  mediaAssets?: MediaAssetLike[];
  mediaUrl?: string;
  label?: string;
  status?: string;
  isMissing?: boolean;
  onMediaSizeChange?: (width: number, height: number) => void;
}

const MediaPreview: React.FC<MediaPreviewProps> = ({
  materialType,
  mediaAssets,
  mediaUrl,
  label,
  status,
  isMissing,
  onMediaSizeChange,
}) => {
  const url = useMemo(
    () => resolveMediaPreviewUrl(materialType, mediaAssets, mediaUrl),
    [materialType, mediaAssets, mediaUrl],
  );

  const handleImageLoad = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      const img = e.currentTarget;
      if (img.naturalWidth > 0 && img.naturalHeight > 0) {
        onMediaSizeChange?.(img.naturalWidth, img.naturalHeight);
      }
    },
    [onMediaSizeChange],
  );

  const handleVideoMetadata = useCallback(
    (e: React.SyntheticEvent<HTMLVideoElement>) => {
      const v = e.currentTarget;
      if (v.videoWidth > 0 && v.videoHeight > 0) {
        onMediaSizeChange?.(v.videoWidth, v.videoHeight);
      }
    },
    [onMediaSizeChange],
  );

  if (status === 'offline' || isMissing) return null;
  if (!url) return null;

  switch (materialType) {
    case 'image':
      return (
        <img
          src={url}
          alt={label ?? ''}
          className="wf-media-preview__media wf-media-preview__media--image"
          onLoad={handleImageLoad}
        />
      );
    case 'video':
      return (
        <video
          src={url}
          controls
          preload="metadata"
          className="wf-media-preview__media wf-media-preview__media--video"
          onLoadedMetadata={handleVideoMetadata}
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
