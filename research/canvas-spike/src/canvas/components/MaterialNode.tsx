/**
 * Simplified port of Gxgen
 * `apps/web/src/pages/CanvasEditor/components/MaterialNode/MaterialNode.tsx` (919 行).
 *
 * 保留的架构要素（与 Gxgen 同构）：
 * - 单一节点完成「输入 + 生成配置 + 输出」（MaterialNode 设计理念）
 * - 选中节点时在卡片下方展开配置面板（MaterialConfigPanel）
 * - 节点数据更新走 updateNodeData -> setNodes（generation-input 字段
 *   走 mutation gateway 的行为在 spike 中简化为直接 setNodes，见报告）
 * - 尺寸计算走 nodeSizeConfig（getDefaultNodeWidth/getNodeSizeCategory）
 * - 左右 CanvasNodeHandle 锚点
 * - 文本节点直接编辑 content；生成型节点显示配置面板 + 执行按钮
 *
 * 裁掉的（全部是服务耦合，非画布结构耦合）：
 * - UnifiedAssetPicker / cloudStorage（云素材替换）
 * - useMaterialTask（真实任务提交）→ executeStub
 * - useSceneDetection / parseCanvasVideoToText / useVideoAudioExtraction
 * - character-design 节点变体、knowledge preset、@ 引用 chip
 * - i18n（react-i18next → 中文字面量）
 * - antd Card → 普通 div（antd 仅保留 Input/Select/Button 于配置面板，
 *   用于度量 antd 依赖深度）
 */

import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { type NodeProps, useReactFlow } from '@xyflow/react';
import { Button, Input, Select } from 'antd';
import type { MaterialNodeData, MaterialType } from '@/types/materialNode';
import CanvasNodeHandle from './CanvasNodeHandle';
import {
  getDefaultNodeWidth,
  getNodeSizeCategory,
  calculateNodeHeight,
} from '../utils/nodeSizeConfig';

const MATERIAL_TYPE_ICONS: Record<MaterialType, string> = {
  text: '📝',
  image: '🖼️',
  video: '🎬',
  audio: '🎵',
};

/** 假想的 OmniMux 能力目录（M3 时换成 ctx.get(seam) 的真实目录快照） */
const MODEL_OPTIONS_BY_TYPE: Record<MaterialType, Array<{ value: string; label: string }>> = {
  text: [
    { value: 'omni-text-pro', label: 'OmniText Pro' },
    { value: 'omni-text-flash', label: 'OmniText Flash' },
  ],
  image: [
    { value: 'omni-image-2', label: 'OmniImage 2' },
    { value: 'omni-image-turbo', label: 'OmniImage Turbo' },
  ],
  video: [
    { value: 'omni-video-1', label: 'OmniVideo 1' },
    { value: 'omni-video-motion', label: 'OmniVideo Motion' },
  ],
  audio: [
    { value: 'omni-audio-speech', label: 'OmniSpeech' },
    { value: 'omni-audio-music', label: 'OmniMusic' },
  ],
};

const PLACEHOLDER_IMAGE =
  'data:image/svg+xml;utf8,'
  + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="320" height="180">'
    + '<rect width="100%" height="100%" fill="#eef2fb"/>'
    + '<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="#4176E6" font-family="sans-serif" font-size="14">生成结果占位图</text>'
    + '</svg>',
  );

/** 执行按钮 stub：模拟任务提交-轮询-回填的节点状态流转 */
function useStubExecution(nodeId: string, updateNodeData: (updates: Partial<MaterialNodeData>) => void) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const run = useCallback(() => {
    updateNodeData({ status: 'generating', errorMessage: undefined, taskId: `stub-${Date.now()}` });
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      updateNodeData({
        status: 'completed',
        generatedContent: '【stub 生成结果】这是 spike 执行桩的输出，M3 时将经 OmniMux seam 提交真实任务。',
        mediaUrl: PLACEHOLDER_IMAGE,
      });
    }, 1500);
  }, [updateNodeData]);
  return run;
}

interface MaterialConfigPanelProps {
  nodeData: MaterialNodeData;
  onUpdateNodeData: (updates: Partial<MaterialNodeData>) => void;
  onGenerate: () => void;
  onClose: () => void;
}

/** 配置面板：选中节点时在卡片下方展开（Gxgen MaterialConfigPanel 的窄化版） */
const MaterialConfigPanel: React.FC<MaterialConfigPanelProps> = ({
  nodeData,
  onUpdateNodeData,
  onGenerate,
  onClose,
}) => {
  const { materialType } = nodeData;
  const modelOptions = MODEL_OPTIONS_BY_TYPE[materialType] ?? [];
  const modelValue = typeof nodeData.params.model === 'string' ? nodeData.params.model : modelOptions[0]?.value;

  return (
    <div className="material-config-panel nodrag">
      <div className="material-config-panel__header">
        <span>生成配置</span>
        <button className="material-config-panel__close" onClick={onClose}>✕</button>
      </div>
      <div className="material-config-panel__field">
        <label>Prompt</label>
        <Input.TextArea
          value={nodeData.prompt ?? ''}
          onChange={(e) => onUpdateNodeData({ prompt: e.target.value })}
          placeholder="输入提示词…"
          autoSize={{ minRows: 2, maxRows: 5 }}
        />
      </div>
      <div className="material-config-panel__field">
        <label>模型（OmniMux 能力目录占位）</label>
        <Select
          value={modelValue}
          options={modelOptions}
          style={{ width: '100%' }}
          onChange={(value) => onUpdateNodeData({ params: { ...nodeData.params, model: value } })}
        />
      </div>
      <Button type="primary" block onClick={onGenerate} loading={nodeData.status === 'generating'}>
        执行（stub）
      </Button>
    </div>
  );
};

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

  const [isHovered, setIsHovered] = useState(false);
  // 配置面板开合：选中节点时展开，关闭后本次选中周期内保持收起
  // （Gxgen 由 useMaterialNodePreset 管理，spike 简化为选中驱动）
  const [panelDismissed, setPanelDismissed] = useState(false);
  const [editingLabel, setEditingLabel] = useState(false);
  const [labelDraft, setLabelDraft] = useState(label);

  const { setNodes } = useReactFlow();

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

  const runStubExecution = useStubExecution(id, updateNodeData);

  const handleGenerate = useCallback(() => {
    runStubExecution();
  }, [runStubExecution]);

  const effectiveTextContent = (generatedContent || content || '') as string;

  // 取消选中时重置面板收起标记，再次选中可重新展开
  useEffect(() => {
    if (!selected) setPanelDismissed(false);
  }, [selected]);

  const panelVisible = selected && !panelDismissed && status !== 'generating';

  const statusBadge = useMemo(() => {
    switch (status) {
      case 'generating': return <span className="material-node__badge material-node__badge--running" />;
      case 'completed': return <span className="material-node__badge material-node__badge--done" />;
      case 'failed': return <span className="material-node__badge material-node__badge--failed" />;
      default: return null;
    }
  }, [status]);

  return (
    <div
      className={`material-node ${selected ? 'material-node--selected' : ''}`}
      style={{ width: nodeWidth }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 输入 Handle */}
      <CanvasNodeHandle side="left" nodeHovered={isHovered} />

      {/* 节点标题（卡片外部）- 双击编辑，同 Gxgen NodeHeader */}
      <div className="material-node__header nodrag">
        {editingLabel ? (
          <input
            className="material-node__label-input"
            value={labelDraft}
            autoFocus
            onChange={(e) => setLabelDraft(e.target.value)}
            onBlur={() => {
              updateNodeData({ label: labelDraft || label });
              setEditingLabel(false);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                updateNodeData({ label: labelDraft || label });
                setEditingLabel(false);
              }
            }}
          />
        ) : (
          <span
            className="material-node__label"
            onDoubleClick={() => {
              setLabelDraft(label);
              setEditingLabel(true);
            }}
            title="双击重命名"
          >
            {MATERIAL_TYPE_ICONS[materialType]} {label}
          </span>
        )}
        {statusBadge}
      </div>

      {/* 主内容卡片 */}
      <div className="material-node__card" style={{ minHeight: Math.min(nodeHeight, 240) }}>
        {/* 文本节点渲染器 */}
        {materialType === 'text' && (
          <textarea
            className="material-node__text-editor nodrag"
            value={effectiveTextContent}
            placeholder="输入文本内容…"
            onChange={(e) => updateNodeData({
              content: e.target.value,
              status: e.target.value.trim() ? 'ready' : 'empty',
              generatedContent: undefined,
            })}
          />
        )}

        {/* 媒体节点渲染器（空态 / 生成中 / 结果占位） */}
        {materialType !== 'text' && (
          <div className="material-node__media">
            {status === 'generating' && (
              <div className="material-node__media-placeholder material-node__media-placeholder--running">
                生成中…
              </div>
            )}
            {status !== 'generating' && mediaUrl && materialType === 'image' && (
              <img src={mediaUrl} alt={label} className="material-node__media-image" />
            )}
            {status !== 'generating' && mediaUrl && materialType !== 'image' && (
              <div className="material-node__media-placeholder material-node__media-placeholder--done">
                {materialType === 'video' ? '▶ 视频结果（占位）' : '🎵 音频结果（占位）'}
              </div>
            )}
            {status !== 'generating' && !mediaUrl && (
              <div className="material-node__media-placeholder">
                空素材 —— 选中后在下方面板配置并执行
              </div>
            )}
          </div>
        )}

        {errorMessage && (
          <div className="material-node__error">{errorMessage}</div>
        )}
      </div>

      {/* 配置面板：在卡片下方展开（生成型节点） */}
      {panelVisible && (
        <MaterialConfigPanel
          nodeData={nodeData}
          onUpdateNodeData={updateNodeData}
          onGenerate={handleGenerate}
          onClose={() => setPanelDismissed(true)}
        />
      )}

      {/* 输出 Handle */}
      <CanvasNodeHandle side="right" nodeHovered={isHovered} />
    </div>
  );
};

export default memo(MaterialNode);
