/**
 * MaterialNode — 统一素材节点（Unified Material Node）。
 *
 * 核心交互：
 * 1. 顶部操作胶囊（FloatingTopPill）：导入节点空态唤起系统选文件器；文本节点编辑/复制/拆分
 * 2. 空态引导模板（NodeEmptyState）：四类素材各具特色的空态与快捷 Prompt 预设
 * 3. 拖拽即导入：仅导入节点接受本地媒体文件
 * 4. 底部配置底栏（ConfigPanel）：生成节点展开 Prompt、模型、参数与生成；导入节点仅替换
 */

import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { Unlink } from 'lucide-react';
import { type NodeProps, useReactFlow } from '@xyflow/react';
import type { MaterialNodeData, MaterialType, MaterialTool } from '../../../types/materialNode';
import { resolveNodeKind } from '../../../types/materialNode';
import CanvasNodeHandle, { type CanvasNodeHandleSelectMeta } from '../CanvasNodeHandle';
import GenerationStateContainer from '../GenerationStateContainer';
import NodeHeader from './NodeHeader';
import StatusBadge from './StatusBadge';
import MediaPreview, { resolveMediaPreviewUrl, type MediaAssetLike } from './MediaPreview';
import NodeEmptyState from './NodeEmptyState';
import FloatingTopPill from './FloatingTopPill';
import ConfigPanelShell from './ConfigPanel/ConfigPanelShell';
import ConfigPanel from './ConfigPanel';
import ResourcePickerModal from '../ResourcePickerModal';
import { useResourcePicker } from '../../hooks/useResourcePicker';
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
import { toast } from '../../../ui';
import type { CapabilityCatalog, NodeExecutionApiStatus } from '../../../../shared/api';
import { draftFromRealPath, nativePathOf } from '../../utils/localFileDraft.ts';
import { planImportNodeFill } from '../../utils/resourcePickerPolicy.ts';

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
    const kind = resolveNodeKind(nodeData);
    if (kind === 'generate') {
      const currentTool = nodeData.selectedTool;
      const defaultGenTools: Record<MaterialType, MaterialTool> = {
        text: 'text-to-text',
        image: 'text-to-image',
        video: 'video-generation',
        audio: 'text-to-audio',
      };
      if (!currentTool || currentTool === 'text-editor') {
        updateNodeData({
          selectedTool: defaultGenTools[materialType],
        });
      }
    }
    useExecutionStore.getState().startNodeExecution?.(id);
  }, [id, materialType, nodeData, updateNodeData]);

  const t = useT();
  const applyCanvasInputMutation = useCanvasStore((state) => state.applyCanvasInputMutation);
  const resourcePicker = useResourcePicker(id);
  const kind = resolveNodeKind(nodeData);

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
          injected = '请创作一个[时长]的[类型]剧本。\n\n主题：[一句话描述]\n\n情绪基调：[温暖/悬疑/搞笑/热血]\n\n特殊要求：[如有]';
        } else if (presetKey === 'planning') {
          injected = '请撰写一份[项目类型]策划案。\n\n项目背景：[简述]\n\n核心目标：[希望达成什么]\n\n目标受众：[人群描述]';
        } else if (presetKey === 'prompt') {
          injected = '根据以下创意需求，生成一组适用于[目标工具]的高质量提示词。\n\n创意需求：[描述你想要的画面/音乐/视频]\n\n风格偏好：[写实/插画/3D/动漫/其他]';
        } else if (presetKey === 'storyboard') {
          injected = '镜头1：全景，城市天际线鸟瞰（缓慢下推 3s）\n镜头2：中景，主角推门走进咖啡馆（特写手部 2s）\n镜头3：特写，桌上的老式黑白照片（静止 2s）';
        }
        updateNodeData({
          prompt: injected,
          selectedTool: 'text-to-text',
        });
      }
    },
    [materialType, updateNodeData],
  );

  // 本地文件导入：只接受带绝对路径的 File（Electron）或 native picker。
  const handleImportFile = useCallback(
    (file: File) => {
      const path = nativePathOf(file);
      if (!path) {
        toast.warning(t('picker.needPath'));
        return;
      }
      const draft = draftFromRealPath(path, {
        name: file.name,
        mime: file.type,
        size: file.size,
      });
      if (!draft) {
        toast.warning(t('picker.unsupported'));
        return;
      }
      const state = useCanvasStore.getState();
      const plan = planImportNodeFill({
        nodes: state.nodes,
        targetNodeId: id,
        files: [draft],
      });
      if (!plan.hasWork) {
        toast.warning(t('picker.unsupported'));
        return;
      }
      const applied = applyCanvasInputMutation({
        addNodes: plan.addNodes,
        nodePatches: plan.nodePatches,
      });
      if (applied.status !== 'allowed') {
        toast.error(t('picker.commitFailed'));
      }
    },
    [applyCanvasInputMutation, id, t],
  );

  // 拖拽文件进入：仅导入素材节点接受本地文件，生成节点不再单独导入
  const handleDragOver = useCallback((e: React.DragEvent) => {
    if (kind !== 'import') return;
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(true);
  }, [kind]);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    if (kind !== 'import') return;
    e.preventDefault();
    e.stopPropagation();
    setIsDraggingOver(false);
  }, [kind]);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      if (kind !== 'import') return;
      e.preventDefault();
      e.stopPropagation();
      setIsDraggingOver(false);
      const files = Array.from(e.dataTransfer.files ?? []);
      if (files.length === 1) {
        handleImportFile(files[0]);
        return;
      }
      const drafts = files
        .map((file) => {
          const path = nativePathOf(file);
          return path
            ? draftFromRealPath(path, { name: file.name, mime: file.type, size: file.size })
            : null;
        })
        .filter((draft): draft is NonNullable<typeof draft> => Boolean(draft));
      if (drafts.length === 0) {
        if (files.length > 0) toast.warning(t('picker.needPath'));
        return;
      }
      const state = useCanvasStore.getState();
      const plan = planImportNodeFill({
        nodes: state.nodes,
        targetNodeId: id,
        files: drafts,
      });
      if (!plan.hasWork) {
        toast.warning(t('picker.unsupported'));
        return;
      }
      const applied = applyCanvasInputMutation({
        addNodes: plan.addNodes,
        nodePatches: plan.nodePatches,
      });
      if (applied.status !== 'allowed') {
        toast.error(t('picker.commitFailed'));
      }
    },
    [applyCanvasInputMutation, handleImportFile, id, kind, t],
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
  const isOffline = status === 'offline' || nodeData.isMissing === true;
  const previewUrl = resolveMediaPreviewUrl(materialType, mediaAssets, mediaUrl);
  const generationStatus = isOffline
    ? null
    : mapNodeToGenerationStatus(executionStatus, status, Boolean(previewUrl));

  const loadingAspectRatio =
    materialType === 'video' ? 'video' : materialType === 'audio' ? 'audio' : 'square';

  const showFloatingPill =
    (isHovered || selected) &&
    (materialType === 'text' || (kind === 'import' && !previewUrl && !isOffline));
  const showReplaceButton = kind === 'import' && Boolean(previewUrl) && !isOffline;

  return (
    <div
      className={`wf-material-node ${selected ? 'wf-material-node--selected' : ''}`}
      style={{ width: nodeWidth }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 顶部悬浮胶囊栏：生成媒体节点不再提供导入入口 */}
      {showFloatingPill && (
        <FloatingTopPill
          materialType={materialType}
          nodeKind={kind}
          selected={selected}
          onOpenResourcePicker={() => {
            void resourcePicker.fillImportNode();
          }}
          onStartTextEdit={() => setTextEditing(true)}
          onCopyText={handleCopyText}
          onSplitText={handleSplitText}
        />
      )}

      {/* 输入 Handle */}
      <CanvasNodeHandle side="left" nodeHovered={isHovered} />

      {/* 节点标题：导入节点统一显示「导入素材」 */}
      <NodeHeader
        label={label}
        materialType={kind === 'import' ? 'import_asset' : materialType}
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
          position: 'relative',
        }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {/* 导入素材：卡片内侧右上角「替换」 */}
        {showReplaceButton && (
          <button
            type="button"
            className="wf-material-node__replace-btn nodrag nopan"
            onClick={(e) => {
              e.stopPropagation();
              void resourcePicker.fillImportNode();
            }}
            title={t('node.replace')}
          >
            {t('node.replace')}
          </button>
        )}

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
        {materialType !== 'text' && isOffline && (
          <div className="wf-material-node__media wf-media-offline">
            <Unlink size={22} className="wf-media-offline__icon" />
            <div className="wf-media-offline__title">{t('node.offline')}</div>
            <div className="wf-media-offline__hint">{t('node.offlineHint')}</div>
            <button
              type="button"
              className="wf-media-offline__relink nodrag"
              onClick={() => void resourcePicker.relinkLocalFile(materialType)}
            >
              {t('node.relink')}
            </button>
          </div>
        )}
        {materialType !== 'text' && !isOffline &&
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
                    status={status}
                    isMissing={nodeData.isMissing === true}
                    onMediaSizeChange={handleMediaSizeChange}
                  />
                ) : (
                  <NodeEmptyState
                    materialType={materialType}
                    nodeKind={nodeData.nodeKind ?? (nodeData.selectedTool === 'import' ? 'import' : 'generate')}
                    onApplyPreset={handleApplyPreset}
                  />
                )}
              </GenerationStateContainer>
            </div>
          ) : (
            <div className="wf-material-node__media">
              <NodeEmptyState
                materialType={materialType}
                nodeKind={nodeData.nodeKind ?? (nodeData.selectedTool === 'import' ? 'import' : 'generate')}
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
            onOpenResourcePicker={
              kind === 'import'
                ? () => {
                    void resourcePicker.fillImportNode();
                  }
                : () => resourcePicker.openPicker('canvas')
            }
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

      <ResourcePickerModal
        open={resourcePicker.open}
        nodeId={id}
        initialTab={resourcePicker.initialTab}
        onCancel={resourcePicker.closePicker}
        onCommit={resourcePicker.commit}
      />
    </div>
  );
};

export default memo(MaterialNode);
