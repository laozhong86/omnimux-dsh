/**
 * video_composition — canvas Launcher Card for omnimux-clip.
 *
 * The node itself is a 350×440 proxy. Opening the editor dispatches
 * `omnimux-clip-open`; save/progress/close events write back into node data.
 * Canvas MUST NOT import omnimux-clip source (spec §2).
 */

import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { type NodeProps } from '@xyflow/react';
import { Download, Film, Layers, Pencil, Play } from 'lucide-react';
import CanvasNodeHandle from '../../editor/components/CanvasNodeHandle';
import { useCanvasStore } from '../../store/canvasStore';
import { toast } from '../../ui';
import { useT } from '../../i18n';
import type { NodeDefinition } from '../registry';
import {
  OMNIMUX_CLIP_CLOSE,
  OMNIMUX_CLIP_OPEN,
  OMNIMUX_CLIP_PROGRESS,
  OMNIMUX_CLIP_SAVE,
  isCloseClipEditorPayload,
  isProgressClipEditorPayload,
  isSaveClipEditorPayload,
  type OpenClipEditorPayload,
  type VideoCompositionNodeData,
  type VideoCompositionStatus,
} from '../../bridge/clipEvents';

export const VIDEO_COMPOSITION_NODE_WIDTH = 350;
export const VIDEO_COMPOSITION_NODE_HEIGHT = 440;

const STATUS_LABEL: Record<VideoCompositionStatus, string> = {
  idle: '未初始化',
  editing: '编辑中',
  rendering: '合成中',
  completed: '已合成',
  error: '出错',
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function asString(value: unknown): string | undefined {
  return typeof value === 'string' && value.trim() ? value : undefined;
}

function asNumber(value: unknown): number | undefined {
  return typeof value === 'number' && Number.isFinite(value) ? value : undefined;
}

function formatDuration(ms: number | undefined): string {
  if (ms == null || !Number.isFinite(ms) || ms < 0) return '—';
  const total = Math.round(ms);
  const minutes = Math.floor(total / 60_000);
  const seconds = Math.floor((total % 60_000) / 1000);
  const millis = total % 1000;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(millis).padStart(3, '0')}`;
}

function formatResolution(width?: number, height?: number): string {
  if (!width || !height) return '—';
  return `${width}×${height}`;
}

function mediaPathOf(data: Record<string, unknown>): string | undefined {
  return (
    asString(data.mediaUrl)
    || asString(data.outputVideoUrl)
    || asString(data.path)
    || asString(data.url)
    || asString(data.real_path)
    || asString(data.filePath)
  );
}

function collectUpstreamInputs(nodeId: string): OpenClipEditorPayload['upstreamInputs'] {
  const { nodes, edges } = useCanvasStore.getState();
  const videos: NonNullable<OpenClipEditorPayload['upstreamInputs']>['videos'] = [];
  const audios: NonNullable<OpenClipEditorPayload['upstreamInputs']>['audios'] = [];
  const images: NonNullable<OpenClipEditorPayload['upstreamInputs']>['images'] = [];
  const captions: NonNullable<OpenClipEditorPayload['upstreamInputs']>['captions'] = [];

  for (const edge of edges) {
    if (edge.target !== nodeId) continue;
    const source = nodes.find((node) => node.id === edge.source);
    if (!source) continue;
    const data = isRecord(source.data) ? source.data : {};
    const materialType = asString(data.materialType)
      || (source.type === 'material' ? undefined : source.type);
    const name = asString(data.label) || asString(data.title) || source.id;
    const path = mediaPathOf(data) || '';
    const durationMs = asNumber(data.duration) ?? asNumber(data.outputDurationMs) ?? asNumber(data.durationMs);

    if (materialType === 'video' || source.type === 'video_composition') {
      const videoPath = path || asString(data.outputVideoUrl) || '';
      if (videoPath) videos.push({ path: videoPath, name, durationMs, url: videoPath });
    } else if (materialType === 'image') {
      if (path) images.push({ path, name, displayDurationMs: durationMs ?? 3000, url: path });
    } else if (materialType === 'audio') {
      if (path) audios.push({ path, name, durationMs, url: path });
    } else if (materialType === 'text') {
      const text = asString(data.content) || asString(data.generatedContent) || asString(data.prompt);
      if (text) {
        captions.push({
          text,
          startTimeMs: captions.reduce((sum, item) => sum + item.durationMs, 0),
          durationMs: 3000,
        });
      }
    }
  }

  return { videos, audios, images, captions };
}

function clipPluginPresent(): boolean {
  if (typeof document === 'undefined') return false;
  return Boolean(
    document.querySelector('[data-plugin="omnimux-clip"]')
    || document.querySelector('[data-stage="clip-editor"]')
    || (typeof window !== 'undefined' && (window as { __omnimuxClipReady?: boolean }).__omnimuxClipReady),
  );
}

export function createDefaultVideoCompositionData(): VideoCompositionNodeData {
  return {
    title: '视频合成',
    label: '视频合成',
    status: 'idle',
    schemaVersion: '1.0',
    projectId: `clip_node_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
  };
}

const VideoCompositionNode: React.FC<NodeProps> = ({ id, data, selected }) => {
  const nodeData = (isRecord(data) ? data : {}) as VideoCompositionNodeData;
  const setNodes = useCanvasStore((state) => state.setNodes);
  const t = useT();
  const [hovered, setHovered] = useState(false);
  const [isPlayingInline, setIsPlayingInline] = useState(false);

  const status: VideoCompositionStatus = nodeData.status ?? 'idle';
  const hasOutput = Boolean(nodeData.outputVideoUrl);
  const thumbnail = nodeData.thumbnailUrl || nodeData.outputThumbnailUrl;
  const title = nodeData.title || nodeData.label || t('node.type.video_composition');

  const updateNodeData = useCallback(
    (updates: Partial<VideoCompositionNodeData>) => {
      setNodes((nodes) =>
        nodes.map((node) => (node.id === id ? { ...node, data: { ...node.data, ...updates } } : node)),
      );
    },
    [id, setNodes],
  );

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const onSave = (event: Event) => {
      const detail = event instanceof CustomEvent ? event.detail : undefined;
      if (!isSaveClipEditorPayload(detail)) return;
      if (detail.nodeId && detail.nodeId !== id) return;
      const output = detail.output;
      updateNodeData({
        schema: detail.schema,
        projectId: detail.projectId || nodeData.projectId,
        outputVideoUrl: output?.videoPath,
        thumbnailUrl: output?.thumbnailPath,
        outputThumbnailUrl: output?.thumbnailPath,
        outputDurationMs: output?.durationMs,
        outputWidth: output?.width,
        outputHeight: output?.height,
        status: output?.videoPath ? 'completed' : 'idle',
        renderProgress: output?.videoPath ? 100 : undefined,
        errorMessage: undefined,
      });
    };

    const onProgress = (event: Event) => {
      const detail = event instanceof CustomEvent ? event.detail : undefined;
      if (!isProgressClipEditorPayload(detail)) return;
      if (detail.nodeId && detail.nodeId !== id) return;
      const nextStatus = (detail.status as VideoCompositionStatus | undefined) ?? 'rendering';
      updateNodeData({
        status: nextStatus,
        renderProgress: detail.renderProgress,
      });
    };

    const onClose = (event: Event) => {
      const detail = event instanceof CustomEvent ? event.detail : undefined;
      if (!isCloseClipEditorPayload(detail)) return;
      if (detail.nodeId && detail.nodeId !== id) return;
      if (nodeData.status === 'editing') {
        updateNodeData({ status: hasOutput ? 'completed' : 'idle' });
      }
    };

    window.addEventListener(OMNIMUX_CLIP_SAVE, onSave);
    window.addEventListener(OMNIMUX_CLIP_PROGRESS, onProgress);
    window.addEventListener(OMNIMUX_CLIP_CLOSE, onClose);
    return () => {
      window.removeEventListener(OMNIMUX_CLIP_SAVE, onSave);
      window.removeEventListener(OMNIMUX_CLIP_PROGRESS, onProgress);
      window.removeEventListener(OMNIMUX_CLIP_CLOSE, onClose);
    };
  }, [hasOutput, id, nodeData.projectId, nodeData.status, updateNodeData]);

  const openEditor = useCallback(() => {
    if (typeof window === 'undefined') return;
    const projectId = nodeData.projectId || `clip_${id.replace(/[^A-Za-z0-9._-]/g, '_').slice(0, 80)}`;
    const payload: OpenClipEditorPayload = {
      source: 'canvas',
      nodeId: id,
      nodeTitle: title,
      projectId,
      draftSchema: nodeData.schema,
      upstreamInputs: collectUpstreamInputs(id),
    };
    updateNodeData({ status: 'editing', projectId });
    window.dispatchEvent(new CustomEvent(OMNIMUX_CLIP_OPEN, { detail: payload, bubbles: true }));
    window.setTimeout(() => {
      if (!clipPluginPresent()) {
        toast.warning(t('clip.needPlugin'));
      }
    }, 400);
  }, [id, nodeData.projectId, nodeData.schema, t, title, updateNodeData]);

  const handleDownload = useCallback((event: React.MouseEvent) => {
    event.stopPropagation();
    const url = nodeData.outputVideoUrl;
    if (!url) return;
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `${projectFileName(title)}.mp4`;
    anchor.rel = 'noopener';
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
  }, [nodeData.outputVideoUrl, title]);

  const statusClass = useMemo(() => {
    if (status === 'completed') return 'wf-clip-status--done';
    if (status === 'editing' || status === 'rendering') return 'wf-clip-status--busy';
    if (status === 'error') return 'wf-clip-status--error';
    return 'wf-clip-status--idle';
  }, [status]);

  return (
    <div
      className={`wf-material-node wf-clip-launcher ${selected ? 'wf-material-node--selected' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onDoubleClick={(event) => {
        event.stopPropagation();
        openEditor();
      }}
    >
      <CanvasNodeHandle side="left" nodeHovered={hovered} />
      <CanvasNodeHandle side="right" nodeHovered={hovered} variant="plain" />

      <div
        className="wf-material-node__card wf-clip-launcher__card"
        data-node-type="video_composition"
      >
        {selected ? (
          <>
            <span className="wf-node-corner wf-node-corner--tl" />
            <span className="wf-node-corner wf-node-corner--tr" />
            <span className="wf-node-corner wf-node-corner--bl" />
            <span className="wf-node-corner wf-node-corner--br" />
          </>
        ) : null}

        <header className="wf-clip-launcher__header">
          <span className="wf-clip-launcher__icon" aria-hidden="true">
            <Layers size={18} />
            <Film size={12} className="wf-clip-launcher__icon-film" />
          </span>
          <div className="wf-clip-launcher__heading">
            <h3 className="wf-clip-launcher__title">{title}</h3>
            <span className={`wf-clip-status ${statusClass}`}>
              {STATUS_LABEL[status]}
            </span>
          </div>
        </header>

        {hasOutput ? (
          <div className="wf-clip-launcher__result">
            <div
              className="wf-clip-launcher__preview nodrag nopan"
              style={{ position: 'relative', cursor: 'pointer' }}
              onClick={(e) => {
                e.stopPropagation();
                setIsPlayingInline(!isPlayingInline);
              }}
            >
              {isPlayingInline && nodeData.outputVideoUrl ? (
                <video
                  src={nodeData.outputVideoUrl}
                  controls
                  autoPlay
                  className="wf-clip-launcher__thumb"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              ) : thumbnail ? (
                <>
                  <img src={thumbnail} alt="" className="wf-clip-launcher__thumb" />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'rgba(0,0,0,0.3)',
                    }}
                  >
                    <Play size={28} color="#fff" fill="#fff" />
                  </div>
                </>
              ) : (
                <div className="wf-clip-launcher__thumb-fallback">
                  <Film size={36} />
                </div>
              )}
            </div>
            <dl className="wf-clip-launcher__meta">
              <div>
                <dt>时长</dt>
                <dd>{formatDuration(nodeData.outputDurationMs)}</dd>
              </div>
              <div>
                <dt>分辨率</dt>
                <dd>{formatResolution(nodeData.outputWidth, nodeData.outputHeight)}</dd>
              </div>
            </dl>
            <div className="wf-clip-launcher__actions nodrag nopan">
              <button
                type="button"
                className="wf-clip-launcher__btn wf-clip-launcher__btn--primary"
                onClick={(event) => {
                  event.stopPropagation();
                  openEditor();
                }}
              >
                <Pencil size={14} />
                <span>重新编辑</span>
              </button>
              <button
                type="button"
                className="wf-clip-launcher__btn"
                onClick={handleDownload}
              >
                <Download size={14} />
                <span>下载</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="wf-clip-launcher__empty">
            <p className="wf-clip-launcher__blurb">
              开源 AI 视频剪辑工具，支持自动剪辑与字幕生成。
            </p>
            <button
              type="button"
              className="wf-clip-launcher__btn wf-clip-launcher__btn--primary wf-clip-launcher__open nodrag nopan"
              onClick={(event) => {
                event.stopPropagation();
                openEditor();
              }}
            >
              <Pencil size={14} />
              <span>打开视频剪辑</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

function projectFileName(title: string): string {
  const cleaned = title.replace(/[^\w\u4e00-\u9fff.-]+/g, '_').slice(0, 48);
  return cleaned || 'clip';
}

export const videoCompositionNodeDefinition: NodeDefinition = {
  type: 'video_composition',
  component: memo(VideoCompositionNode) as unknown as NodeDefinition['component'],
  ports: [
    { side: 'in', acceptedTypes: ['text', 'image', 'video', 'audio'] },
    { side: 'out', acceptedTypes: ['video'] },
  ],
  defaultData: () => createDefaultVideoCompositionData() as unknown as Record<string, unknown>,
  configSpec: {
    promptEnabled: false,
    modelCategory: 'video',
  },
  executorKey: 'video_composition',
  palette: {
    group: 'palette.group.material',
    label: 'palette.node.video_composition',
    icon: 'film',
  },
};

export default VideoCompositionNode;
