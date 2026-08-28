/**
 * video_composition — canvas Launcher Card for omnimux-clip.
 *
 * The node itself is a 350×440 proxy. Opening the editor dispatches
 * `omnimux-clip-open`; save/progress/close events write back into node data.
 * Canvas MUST NOT import omnimux-clip source (spec §2).
 *
 * 表现层（T4 拉齐 MaterialNode 规范）：
 * - 外置 NodeHeader + StatusBadge（mapVideoCompositionToBadge）；
 * - 主卡片四分支状态机：result / rendering / error / launcher
 *   （mapVideoCompositionToView 分流；rendering/error 走 GenerationStateContainer）；
 * - 产物态由纯展示组件 VideoCompositionResult 承载（.wf-vc-result* Token 类）。
 * 功能契约 100% 不变：OMNIMUX_CLIP_* 事件桥、collectUpstreamInputs、
 * ports、executorKey、350×440 尺寸。
 */

import { memo, useCallback, useEffect } from 'react';
import { type NodeProps } from '@xyflow/react';
import { Download, Film, Layers, Pencil } from 'lucide-react';
import CanvasNodeShell from '../../editor/components/CanvasNodeShell';
import FloatingTopPill, { type FloatingPillAction } from '../../editor/components/FloatingTopPill';
import NodeHeader from '../../editor/components/MaterialNode/NodeHeader';
import StatusBadge from '../../editor/components/MaterialNode/StatusBadge';
import GenerationStateContainer from '../../editor/components/GenerationStateContainer';
import NodeLauncherState from '../../editor/components/NodeEmptyState/NodeLauncherState';
import VideoCompositionResult from './videoCompositionResult';
import {
  mapVideoCompositionToBadge,
  mapVideoCompositionToView,
  projectFileName,
} from './videoCompositionStatus';
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

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function asString(value: unknown): string | undefined {
  return typeof value === 'string' && value.trim() ? value : undefined;
}

function asNumber(value: unknown): number | undefined {
  return typeof value === 'number' && Number.isFinite(value) ? value : undefined;
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
  const setEdges = useCanvasStore((state) => state.setEdges);
  const t = useT();

  const status: VideoCompositionStatus = nodeData.status ?? 'idle';
  const hasOutput = Boolean(nodeData.outputVideoUrl);
  const thumbnail = nodeData.thumbnailUrl || nodeData.outputThumbnailUrl;
  const title = nodeData.title || nodeData.label || t('node.type.video_composition');

  // 四分支状态机（T4）
  const view = mapVideoCompositionToView(status, hasOutput);

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

      // ─── 画布模式：自动创建下游视频素材节点并连线 ───
      if (output?.videoPath && detail.createDownstreamNode) {
        const store = useCanvasStore.getState();
        const currentNodes = store.nodes;
        const currentNode = currentNodes.find((n) => n.id === id);
        const currentPos = currentNode?.position || { x: 0, y: 0 };

        // 防重：若已有挂载同一文件路径的下游节点则不重复创建
        const alreadyLinked = currentNodes.some(
          (n) => n.type === 'material' && (n.data as Record<string, unknown>)?.realPath === output.videoPath
        );

        if (!alreadyLinked) {
          const newNodeId = `node_mat_vid_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;
          const newPos = {
            x: currentPos.x + VIDEO_COMPOSITION_NODE_WIDTH + 80,
            y: currentPos.y,
          };
          const newVideoNode = {
            id: newNodeId,
            type: 'material',
            position: newPos,
            selected: true,
            data: {
              materialType: 'video',
              label: `${nodeData.title || nodeData.label || t('node.type.video_composition')}_成片`,
              status: 'ready',
              selectedTool: 'import',
              realPath: output.videoPath,
              mediaUrl: output.videoPath,
              thumbnailUrl: output.thumbnailPath,
              duration: output.durationMs ? Math.round(output.durationMs / 1000) : undefined,
              size: { width: output.width || 1920, height: output.height || 1080 },
            },
          };

          const newEdgeId = `edge_${id}_${newNodeId}`;
          const newEdge = {
            id: newEdgeId,
            source: id,
            target: newNodeId,
            sourceHandle: 'output',
            targetHandle: 'input',
          };

          setNodes((nodes) => [
            ...nodes.map((node) => ({ ...node, selected: false })),
            newVideoNode as never,
          ]);
          setEdges((edges) => [...edges, newEdge as never]);
          toast.success(t('clip.exportedToNode') || '已生成视频节点并连接到画布');
        }
      }
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

  const handleDownload = useCallback(() => {
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

  return (
    <CanvasNodeShell
      id={id}
      selected={selected}
      nodeWidth={VIDEO_COMPOSITION_NODE_WIDTH}
      nodeHeight={VIDEO_COMPOSITION_NODE_HEIGHT}
      dataNodeType="video_composition"
      showLeftHandle={true}
      showRightHandle={true}
      leftHandleVariant="plain"
      rightHandleVariant="plain"
      onCardDoubleClick={(event) => {
        event.stopPropagation();
        openEditor();
      }}
      renderFloatingPill={({ hovered, selected: isSelected }) => {
        if (!hovered && !isSelected) return null;
        const pillActions: FloatingPillAction[] = [
          {
            key: 'open_clip',
            label: t('clip.openEditor'),
            icon: Pencil,
            variant: 'primary',
            onClick: (e) => {
              e.stopPropagation();
              openEditor();
            },
            title: t('clip.openEditorTitle'),
          },
        ];
        if (hasOutput) {
          pillActions.push({
            key: 'download_video',
            label: t('clip.download'),
            icon: Download,
            onClick: handleDownload,
            title: t('clip.downloadTitle'),
          });
        }
        return <FloatingTopPill actions={pillActions} />;
      }}
      renderHeader={() => (
        <NodeHeader
          label={title}
          materialType="video_composition"
          customIcon={<Film size={14} />}
          onLabelChange={(newLabel) => updateNodeData({ label: newLabel, title: newLabel })}
          trailing={<StatusBadge status={mapVideoCompositionToBadge(status)} />}
        />
      )}
    >
      {view === 'result' && (
        <VideoCompositionResult
          outputVideoUrl={nodeData.outputVideoUrl}
          thumbnailUrl={thumbnail}
          durationMs={nodeData.outputDurationMs}
          width={nodeData.outputWidth}
          height={nodeData.outputHeight}
          title={title}
          onReEdit={openEditor}
          onDownload={handleDownload}
        />
      )}

      {view === 'rendering' && (
        <div className="wf-material-node__media">
          <GenerationStateContainer status="generating" loadingAspectRatio="video">
            {null}
          </GenerationStateContainer>
        </div>
      )}

      {view === 'error' && (
        <div className="wf-material-node__media">
          <GenerationStateContainer
            status="failed"
            loadingAspectRatio="video"
            errorMessage={nodeData.errorMessage}
            onRetry={openEditor}
          >
            {null}
          </GenerationStateContainer>
        </div>
      )}

      {view === 'launcher' && (
        <NodeLauncherState
          mainIcon={<Film size={36} strokeWidth={1.5} />}
          secondaryIcon={<Layers size={14} />}
          title={t('clip.launcherTitle')}
          blurb={t('clip.launcherBlurb')}
          actions={[
            {
              key: 'open_clip',
              label: t('clip.openClip'),
              icon: Pencil,
              variant: 'primary',
              onClick: () => openEditor(),
            },
          ]}
        />
      )}
    </CanvasNodeShell>
  );
};

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