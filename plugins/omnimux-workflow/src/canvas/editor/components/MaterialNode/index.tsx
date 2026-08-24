/**
 * MaterialNode — 统一素材节点（Unified Material Node）。
 *
 * 核心交互：
 * 1. 顶部操作胶囊（FloatingTopPill）：导入图片/视频/音频、文本编辑/复制/结构化拆分
 * 2. 空态引导模板（NodeEmptyState）：四类素材各具特色的空态与快捷 Prompt 预设
 * 3. 拖拽即导入：支持拖拽本地媒体文件直接投喂到卡片
 * 4. 底部配置底栏（ConfigPanel）：统一展开 Prompt、模型、参数与生成
 */

import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { type NodeProps, useReactFlow } from '@xyflow/react';
import type { MaterialNodeData } from '../../../types/materialNode';
import CanvasNodeHandle, { type CanvasNodeHandleSelectMeta } from '../CanvasNodeHandle';
import GenerationStateContainer from '../GenerationStateContainer';
import NodeHeader from './NodeHeader';
import StatusBadge from './StatusBadge';
import MediaPreview, { resolveMediaPreviewUrl, type MediaAssetLike } from './MediaPreview';
import NodeEmptyState from './NodeEmptyState';
import FloatingTopPill from './FloatingTopPill';
import ConfigPanelShell from './ConfigPanel/ConfigPanelShell';
import ConfigPanel from './ConfigPanel';
import {
  getDefaultNodeWidth,
  getNodeSizeCategory,
  calculateNodeHeight,
} from '../../utils/nodeSizeConfig';
import { isConfigPanelVisible, mapNodeToGenerationStatus } from '../../utils/nodeVisualMath';
import { getOutputOptionSpecs, parseOutputOptionKey } from '../../utils/connectionMenuOptions';
import { createMaterialNode } from '../../utils/nodeFactory';
import { useExecutionStore } from '../../../store/executionStore';
import { useCanvasStore } from '../../../store/canvasStore';
import { useT } from '../../../i18n';
import type { CapabilityCatalog, NodeExecutionApiStatus } from '../../../../shared/api';

// ==================== 主组件 ====================

const MaterialNode: React.FC<NodeProps> = ({ id, data, selected }) => {
  const nodeData = data as unknown as MaterialNodeData;
  const {
    materialType,
    status,
    label,
    content,
    mediaUrl,
    generatedContent,
    errorMessage,
  } = nodeData;

  const executionStatus = nodeData.executionStatus as NodeExecutionApiStatus | undefined;
  const executionError = nodeData.executionError as string | undefined;
  const mediaAssets = nodeData.mediaAssets as MediaAssetLike[] | undefined;
  const catalog = (data as { __catalog?: CapabilityCatalog }).__catalog ?? null;

  const [isHovered, setIsHovered] = useState(false);
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [panelDismissed, setPanelDismissed] = useState(false);
  const [textEditing, setTextEditing] = useState(false);
  const [mediaAspectHeight, setMediaAspectHeight] = useState<number | null>(null);

  const { setNodes } = useReactFlow();

  const execBusy = useExecutionStore((state) => state.status === 'pending' || state.status === 'running');

  const nodeWidth = nodeData.nodeWidth ?? getDefaultNodeWidth(materialType);
  const sizeCategory = getNodeSizeCategory(materialType);
  const defaultCalculatedHeight = calculateNodeHeight(nodeWidth, sizeCategory);
  const nodeHeight = mediaAspectHeight ?? nodeData.nodeHeight ?? defaultCalculatedHeight;

  const updateNodeData = useCallback(
    (updates: Partial<MaterialNodeData>) => {
      setNodes((nodes) =>
        nodes.map((n) => (n.id === id ? { ...n, data: { ...n.data, ...updates } } : n)),
      );
    },
    [id, setNodes],
  );

  // 媒体素材宽高自适应计算
  const handleMediaSizeChange = useCallback(
    (naturalWidth: number, naturalHeight: number) => {
      if (naturalWidth > 0 && naturalHeight > 0) {
        const aspect = naturalWidth / naturalHeight;
        const targetHeight = Math.max(80, Math.min(800, Math.round(nodeWidth / aspect)));
        setMediaAspectHeight(targetHeight);
        if (nodeData.nodeHeight !== targetHeight) {
          updateNodeData({ nodeHeight: targetHeight });
        }
      }
    },
    [nodeData.nodeHeight, nodeWidth, updateNodeData],
  );

  const handleGenerate = useCallback(() => {
    useExecutionStore.getState().startNodeExecution?.(id);
  }, [id]);

  const t = useT();
  const applyCanvasInputMutation = useCanvasStore((state) => state.applyCanvasInputMutation);

  const outputMenuOptions = useMemo(
    () =>
      getOutputOptionSpecs(materialType).map((spec) => ({
        key: spec.key,
        label: t(spec.labelKey),
        description: t(spec.descKey),
        icon: spec.icon,
      })),
    [materialType, t],
  );

  const handleOutputMenuSelect = useCallback(
    (key: string, meta?: CanvasNodeHandleSelectMeta) => {
      const parsed = parseOutputOptionKey(key);
      const position = meta?.flowPosition;
      if (!parsed || !position) return;
      const result = createMaterialNode(parsed.targetMaterialType, position);
      const newNode = result.nodes[0];
      if (!newNode) return;
      applyCanvasInputMutation({
        addNodes: result.nodes,
        addEdges: [
          { source: id, sourceHandle: 'out', target: newNode.id, targetHandle: 'in' },
        ],
      });
    },
    [applyCanvasInputMutation, id],
  );

  const effectiveTextContent = (generatedContent || content || '') as string;

  // 预设注入
  const handleApplyPreset = useCallback(
    (presetKey: string) => {
      if (materialType === 'text') {
        let injected = '';
        if (presetKey === 'script') {
          injected = '【剧本场景】\n时间：黄昏\n地点：都市街角\n人物：主角（神情凝重）\n对白/动作：低头看表，随后步入阴影之中。';
        } else if (presetKey === 'planning') {
          injected = '【短剧策划案】\n主题：逆袭/打脸爽文\n目标受众：都市青年群体\n核心冲突：隐藏身份的继承人在关键时刻力挽狂澜。';
        } else if (presetKey === 'prompt') {
          injected = '超写实电影质感，8k 分辨率，柔和黄昏光线，赛博朋克都市街道，景深浅，杰作。';
        } else if (presetKey === 'storyboard') {
          injected = '镜头1：全景，城市天际线鸟瞰（缓慢下推 3s）\n镜头2：中景，主角推门走进咖啡馆（特写手部 2s）\n镜头3：特写，桌上的老式黑白照片（静止 2s）';
        }
        updateNodeData({
          content: injected,
          prompt: injected,
          status: injected.trim() ? 'ready' : 'empty',
          generatedContent: undefined,
        });
      } else if (materialType === 'video') {
        if (presetKey === 'omni-ref') {
          updateNodeData({
            prompt: '赛博朋克主角在雨夜奔跑，手部特写与运镜保持流畅一致',
            params: { ...nodeData.params, mode: 'omni-ref' },
          });
        } else if (presetKey === 'first-last-frame') {
          updateNodeData({
            prompt: '从初始静止镜头平滑运镜过渡到人物转身特写',
            params: { ...nodeData.params, mode: 'first-last-frame' },
          });
        }
      }
    },
    [materialType, nodeData.params, updateNodeData],
  );

  // 本地文件导入
  const handleImportFile = useCallback(
    (file: File) => {
      const url = URL.createObjectURL(file);
      if (file.type.startsWith('image/')) {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          if (img.naturalWidth > 0 && img.naturalHeight > 0) {
            handleMediaSizeChange(img.naturalWidth, img.naturalHeight);
          }
        };
      } else if (file.type.startsWith('video/')) {
        const v = document.createElement('video');
        v.src = url;
        v.onloadedmetadata = () => {
          if (v.videoWidth > 0 && v.videoHeight > 0) {
            handleMediaSizeChange(v.videoWidth, v.videoHeight);
          }
        };
      }
      updateNodeData({
        mediaUrl: url,
        status: 'ready',
        content: file.name,
      });
    },
    [handleMediaSizeChange, updateNodeData],
  );

  // 拖拽文件进入
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDraggingOver(false);
      const file = e.dataTransfer.files?.[0];
      if (file) {
        handleImportFile(file);
      }
    },
    [handleImportFile],
  );

  // 文本快捷操作
  const handleCopyText = useCallback(() => {
    if (effectiveTextContent) {
      navigator.clipboard.writeText(effectiveTextContent).catch(() => {});
    }
  }, [effectiveTextContent]);

  const handleSplitText = useCallback(() => {
    if (!effectiveTextContent) return;
    const lines = effectiveTextContent.split('\n\n').filter((l) => l.trim().length > 0);
    if (lines.length > 1) {
      updateNodeData({ content: lines.join('\n---\n') });
    }
  }, [effectiveTextContent, updateNodeData]);

  useEffect(() => {
    if (!selected) {
      setPanelDismissed(false);
      setTextEditing(false);
    }
  }, [selected]);

  const panelVisible = isConfigPanelVisible(selected, panelDismissed, executionStatus);
  const previewUrl = resolveMediaPreviewUrl(materialType, mediaAssets, mediaUrl);
  const generationStatus = mapNodeToGenerationStatus(executionStatus, status, Boolean(previewUrl));

  const loadingAspectRatio =
    materialType === 'video' ? 'video' : materialType === 'audio' ? 'audio' : 'square';

  const showFloatingPill = isHovered || selected;

  return (
    <div
      className={`wf-material-node ${selected ? 'wf-material-node--selected' : ''}`}
      style={{ width: nodeWidth }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 顶部悬浮胶囊栏 */}
      {showFloatingPill && (
        <FloatingTopPill
          materialType={materialType}
          selected={selected}
          onImportFile={handleImportFile}
          onStartTextEdit={() => setTextEditing(true)}
          onCopyText={handleCopyText}
          onSplitText={handleSplitText}
        />
      )}

      {/* 输入 Handle */}
      <CanvasNodeHandle side="left" nodeHovered={isHovered} />

      {/* 节点标题 */}
      <NodeHeader
        label={label}
        materialType={materialType}
        onLabelChange={(newLabel) => updateNodeData({ label: newLabel })}
        trailing={<StatusBadge executionStatus={executionStatus} status={status} />}
      />

      {/* 主内容卡片 */}
      <div
        className={`wf-material-node__card ${
          isDraggingOver ? 'wf-material-node__card--dragover' : ''
        }`}
        style={{
          width: nodeWidth,
          height: nodeHeight,
        }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {/* 四角缩放定位点 */}
        {selected && (
          <>
            <span className="wf-node-corner wf-node-corner--tl" />
            <span className="wf-node-corner wf-node-corner--tr" />
            <span className="wf-node-corner wf-node-corner--bl" />
            <span className="wf-node-corner wf-node-corner--br" />
          </>
        )}

        {/* 1. 文本节点渲染 */}
        {materialType === 'text' && (
          <div className="wf-material-node__text-shell" style={{ padding: '12px 14px' }}>
            {effectiveTextContent || textEditing ? (
              <textarea
                className={`wf-material-node__text-editor nowheel${textEditing ? ' nodrag' : ''}`}
                readOnly={!textEditing}
                value={effectiveTextContent}
                placeholder={t('node.textPlaceholder')}
                autoFocus={textEditing}
                onMouseDown={(e) => {
                  if (!textEditing) e.preventDefault();
                }}
                onDoubleClick={(e) => {
                  e.stopPropagation();
                  setTextEditing(true);
                  e.currentTarget.focus();
                }}
                onFocus={() => setTextEditing(true)}
                onBlur={() => setTextEditing(false)}
                onChange={(e) =>
                  updateNodeData({
                    content: e.target.value,
                    status: e.target.value.trim() ? 'ready' : 'empty',
                    generatedContent: undefined,
                  })
                }
              />
            ) : (
              <NodeEmptyState
                materialType="text"
                onStartEdit={() => setTextEditing(true)}
                onApplyPreset={handleApplyPreset}
              />
            )}
          </div>
        )}

        {/* 2. 媒体节点渲染 */}
        {materialType !== 'text' &&
          (generationStatus ? (
            <div className="wf-material-node__media">
              <GenerationStateContainer
                status={generationStatus}
                loadingAspectRatio={loadingAspectRatio}
                errorMessage={executionError ?? errorMessage}
                taskId={nodeData.taskId}
                onRetry={handleGenerate}
              >
                {previewUrl ? (
                  <MediaPreview
                    materialType={materialType}
                    mediaAssets={mediaAssets}
                    mediaUrl={mediaUrl}
                    label={label}
                    onMediaSizeChange={handleMediaSizeChange}
                  />
                ) : (
                  <NodeEmptyState
                    materialType={materialType}
                    onApplyPreset={handleApplyPreset}
                  />
                )}
              </GenerationStateContainer>
            </div>
          ) : (
            <div className="wf-material-node__media">
              <NodeEmptyState
                materialType={materialType}
                onApplyPreset={handleApplyPreset}
              />
            </div>
          ))}

        {/* 文本节点错误提示 */}
        {materialType === 'text' && (errorMessage || executionError) && (
          <div className="wf-material-node__error">{executionError ?? errorMessage}</div>
        )}
      </div>

      {/* 配置面板 */}
      {panelVisible && (
        <ConfigPanelShell onClose={() => setPanelDismissed(true)}>
          <ConfigPanel
            nodeId={id}
            nodeData={nodeData}
            catalog={catalog}
            onUpdateNodeData={updateNodeData}
            onGenerate={handleGenerate}
            execBusy={execBusy}
          />
        </ConfigPanelShell>
      )}

      {/* 输出 Handle */}
      <CanvasNodeHandle
        side="right"
        nodeHovered={isHovered}
        options={outputMenuOptions}
        onSelect={handleOutputMenuSelect}
      />
    </div>
  );
};

export default memo(MaterialNode);
