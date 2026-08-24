/**
 * MaterialNode — 重构为目录（W1 T1.4），视觉对齐 Gxgen 节点卡片。
 *
 * 子组件：NodeHeader（反缩放标题 + lucide 图标）/ StatusBadge /
 * MediaPreview（真媒体预览）+ GenerationStateContainer（三态交叉淡入）。
 * W2：配置面板迁入 ConfigPanel/（ConfigPanelShell 内联浮层 + Gxgen 式内容）。
 *
 * 不可动资产（保留）：updateNodeData / __catalog 注入 /
 * executionStore.startNodeExecution 数据链与 panelVisible 语义。
 */

import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { type NodeProps, useReactFlow } from '@xyflow/react';
import type { MaterialNodeData } from '../../../types/materialNode';
import CanvasNodeHandle, { type CanvasNodeHandleSelectMeta } from '../CanvasNodeHandle';
import GenerationStateContainer from '../GenerationStateContainer';
import NodeHeader from './NodeHeader';
import StatusBadge from './StatusBadge';
import MediaPreview, { resolveMediaPreviewUrl, type MediaAssetLike } from './MediaPreview';
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
  // M3 execution fields (SSE-written; unknown via the index signature).
  const executionStatus = nodeData.executionStatus as NodeExecutionApiStatus | undefined;
  const executionError = nodeData.executionError as string | undefined;
  const mediaAssets = nodeData.mediaAssets as MediaAssetLike[] | undefined;
  const catalog = (data as { __catalog?: CapabilityCatalog }).__catalog ?? null;

  const [isHovered, setIsHovered] = useState(false);
  // 配置面板开合：选中节点时展开，关闭后本次选中周期内保持收起
  const [panelDismissed, setPanelDismissed] = useState(false);

  const { setNodes } = useReactFlow();

  // 全图/其他节点执行中时，禁用单节点执行入口
  const execBusy = useExecutionStore((state) => state.status === 'pending' || state.status === 'running');

  // 节点尺寸计算（走 nodeSizeConfig，同 Gxgen）
  const nodeWidth = nodeData.nodeWidth ?? getDefaultNodeWidth(materialType);
  const sizeCategory = getNodeSizeCategory(materialType);
  const nodeHeight = nodeData.nodeHeight ?? calculateNodeHeight(nodeWidth, sizeCategory);

  const updateNodeData = useCallback(
    (updates: Partial<MaterialNodeData>) => {
      setNodes((nodes) =>
        nodes.map((n) => (n.id === id ? { ...n, data: { ...n.data, ...updates } } : n)),
      );
    },
    [id, setNodes],
  );

  // M3: single-node execution = subset run (node + upstream closure) via the
  // execution controller bridge (no more M1 stub timer).
  const handleGenerate = useCallback(() => {
    useExecutionStore.getState().startNodeExecution?.(id);
  }, [id]);

  // W3 T3.4：输出 Handle 的 plus 点击菜单——选项由连接矩阵派生，
  // label/desc 经 i18n 字典解析；选中后在落点建下游节点并连线
  // （走 applyCanvasInputMutation，保证 undo/redo 链）。
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

  // 取消选中时重置面板收起标记，再次选中可重新展开
  useEffect(() => {
    if (!selected) setPanelDismissed(false);
  }, [selected]);

  // panelVisible 语义不变：选中 且 未收起 且 非执行中（W2 抽为纯函数）
  const panelVisible = isConfigPanelVisible(selected, panelDismissed, executionStatus);

  // 媒体预览 URL（mediaAssets 优先，回退 mediaUrl）
  const previewUrl = resolveMediaPreviewUrl(materialType, mediaAssets, mediaUrl);

  // 节点执行态 → GSC 状态（null = 空态，走空素材占位）
  const generationStatus = mapNodeToGenerationStatus(executionStatus, status, Boolean(previewUrl));

  // 加载态宽高比：视频 16:9、音频紧凑、图片 1:1（Gxgen 统一加载卡片）
  const loadingAspectRatio =
    materialType === 'video' ? 'video' : materialType === 'audio' ? 'audio' : 'square';

  return (
    <div
      className={`wf-material-node ${selected ? 'wf-material-node--selected' : ''}`}
      style={{ width: nodeWidth }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 输入 Handle（plain：纯锚点，无 plus 菜单） */}
      <CanvasNodeHandle side="left" nodeHovered={isHovered} variant="plain" />

      {/* 节点标题（卡片外部，反缩放恒定尺寸）+ 执行徽标 */}
      <NodeHeader
        label={label}
        materialType={materialType}
        onLabelChange={(newLabel) => updateNodeData({ label: newLabel })}
        trailing={<StatusBadge executionStatus={executionStatus} status={status} />}
      />

      {/* 主内容卡片 */}
      <div className="wf-material-node__card" style={{ minHeight: Math.min(nodeHeight, 240) }}>
        {/* 文本节点渲染器 */}
        {materialType === 'text' && (
          <textarea
            className="wf-material-node__text-editor nodrag"
            value={effectiveTextContent}
            placeholder={t('node.textPlaceholder')}
            onChange={(e) => updateNodeData({
              content: e.target.value,
              status: e.target.value.trim() ? 'ready' : 'empty',
              generatedContent: undefined,
            })}
          />
        )}

        {/* 媒体节点：GenerationStateContainer 三态（生成中点阵扫光 →
            完成交叉淡入 → 失败重试），completed 分支接真媒体预览 */}
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
                  />
                ) : (
                  <div className="wf-material-node__media-empty">
                    {t('node.emptyMedia')}
                  </div>
                )}
              </GenerationStateContainer>
            </div>
          ) : (
            <div className="wf-material-node__media">
              <div className="wf-material-node__media-empty">
                {t('node.emptyMedia')}
              </div>
            </div>
          ))}

        {/* 文本节点错误条（媒体节点错误由 GSC failed 分支承担） */}
        {materialType === 'text' && (errorMessage || executionError) && (
          <div className="wf-material-node__error">{executionError ?? errorMessage}</div>
        )}
      </div>

      {/* 配置面板：内联浮层（反缩放恒定尺寸，clickOutside 关闭） */}
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

      {/* 输出 Handle（plus：hover 回弹按钮 + 点击弹输出动作菜单） */}
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
