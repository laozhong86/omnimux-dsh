/**
 * Port of Gxgen MaterialNode (validated by the extraction spike), completed
 * for M2: single node = input + generation config + output; the config
 * panel expands below the card when selected and now carries the full
 * editor surface — tool selector, prompt input, model select (capability
 * catalog), parameter panel (duration / aspect ratio / fail strategy) and
 * the reference-media placeholder. Sizes flow through nodeSizeConfig;
 * stub execution simulates the task state machine.
 */

import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { type NodeProps, useReactFlow } from '@xyflow/react';
import { Button, Input, Select, Slider } from 'antd';
import type { MaterialNodeData, MaterialType, MaterialTool } from '../../types/materialNode';
import {
  ASPECT_RATIO_OPTIONS,
  MATERIAL_TOOLS,
  MATERIAL_TOOL_LABELS,
  isGenerativeTool,
} from '../../types/materialNode';
import CanvasNodeHandle from './CanvasNodeHandle';
import {
  getDefaultNodeWidth,
  getNodeSizeCategory,
  calculateNodeHeight,
} from '../utils/nodeSizeConfig';
import type { CapabilityCatalog } from '../../../shared/api';

export const MATERIAL_TYPE_ICONS: Record<MaterialType, string> = {
  text: '📝',
  image: '🖼️',
  video: '🎬',
  audio: '🎵',
};

const PLACEHOLDER_IMAGE =
  'data:image/svg+xml;utf8,'
  + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="320" height="180">'
    + '<rect width="100%" height="100%" fill="#eef2fb"/>'
    + '<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="#4176E6" font-family="sans-serif" font-size="14">生成结果占位图</text>'
    + '</svg>',
  );

/** 执行按钮 stub：模拟任务提交-轮询-回填的节点状态流转（M3 换真实执行） */
function useStubExecution(updateNodeData: (updates: Partial<MaterialNodeData>) => void) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const run = useCallback(() => {
    updateNodeData({ status: 'generating', errorMessage: undefined, taskId: `stub-${Date.now()}` });
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      updateNodeData({
        status: 'completed',
        generatedContent: '【stub 生成结果】M1 执行桩输出；M3 接入 ExecutionScheduler 后为真实结果。',
        mediaUrl: PLACEHOLDER_IMAGE,
      });
    }, 1500);
  }, [updateNodeData]);
  return run;
}

interface MaterialConfigPanelProps {
  nodeData: MaterialNodeData;
  catalog: CapabilityCatalog | null;
  onUpdateNodeData: (updates: Partial<MaterialNodeData>) => void;
  onGenerate: () => void;
  onClose: () => void;
}

/** 配置面板：选中节点时在卡片下方展开（Gxgen MaterialConfigPanel 的 M2 完整版） */
const MaterialConfigPanel: React.FC<MaterialConfigPanelProps> = ({
  nodeData,
  catalog,
  onUpdateNodeData,
  onGenerate,
  onClose,
}) => {
  const { materialType, selectedTool, params } = nodeData;
  const generative = isGenerativeTool(selectedTool);

  const toolOptions = useMemo(
    () =>
      (MATERIAL_TOOLS[materialType] ?? []).map((tool: MaterialTool) => ({
        value: tool,
        label: MATERIAL_TOOL_LABELS[tool],
      })),
    [materialType],
  );

  const modelOptions = useMemo(() => {
    const rows = catalog?.[materialType] ?? [];
    return rows.map((row) => ({ value: row.id, label: row.label }));
  }, [catalog, materialType]);
  const modelValue = typeof params.model === 'string' ? params.model : modelOptions[0]?.value;

  const updateParam = useCallback(
    (key: string, value: unknown) => {
      onUpdateNodeData({ params: { ...params, [key]: value } });
    },
    [onUpdateNodeData, params],
  );

  // 时长参数：视频 1-20s，音频 1-60s（Gxgen ParamBar 的窄化）
  const showDuration = generative && (materialType === 'video' || materialType === 'audio');
  const durationMax = materialType === 'video' ? 20 : 60;
  const durationValue = typeof params.duration === 'number' ? params.duration : 5;

  // 画幅参数：图片/视频生成型节点
  const showAspectRatio = generative && (materialType === 'image' || materialType === 'video');
  const aspectRatioValue = typeof params.aspectRatio === 'string' ? params.aspectRatio : '16:9';

  return (
    <div className="wf-config-panel nodrag">
      <div className="wf-config-panel__header">
        <span>生成配置</span>
        <button className="wf-config-panel__close" onClick={onClose}>✕</button>
      </div>

      {/* 工具选择：决定节点行为与连线类型合同 */}
      <div className="wf-config-panel__field">
        <label>工具</label>
        <Select
          value={selectedTool}
          options={toolOptions}
          style={{ width: '100%' }}
          onChange={(value: MaterialTool) => onUpdateNodeData({ selectedTool: value })}
        />
      </div>

      {generative ? (
        <>
          <div className="wf-config-panel__field">
            <label>Prompt</label>
            <Input.TextArea
              value={nodeData.prompt ?? ''}
              onChange={(e) => onUpdateNodeData({ prompt: e.target.value })}
              placeholder="输入提示词…"
              autoSize={{ minRows: 2, maxRows: 5 }}
            />
          </div>

          <div className="wf-config-panel__field">
            <label>模型（能力目录）</label>
            <Select
              value={modelValue}
              options={modelOptions}
              style={{ width: '100%' }}
              placeholder={modelOptions.length === 0 ? '能力目录为空（stub）' : undefined}
              onChange={(value) => updateParam('model', value)}
            />
          </div>

          {showDuration ? (
            <div className="wf-config-panel__field">
              <label>时长（秒）</label>
              <Slider
                min={1}
                max={durationMax}
                step={1}
                value={durationValue}
                marks={{ 1: '1', [durationMax]: String(durationMax) }}
                onChange={(value: number) => updateParam('duration', value)}
              />
            </div>
          ) : null}

          {showAspectRatio ? (
            <div className="wf-config-panel__field">
              <label>画幅</label>
              <Select
                value={aspectRatioValue}
                options={ASPECT_RATIO_OPTIONS.map((ratio) => ({ value: ratio, label: ratio }))}
                style={{ width: '100%' }}
                onChange={(value) => updateParam('aspectRatio', value)}
              />
            </div>
          ) : null}

          <div className="wf-config-panel__field">
            <label>失败策略</label>
            <Select
              value={nodeData.failStrategy ?? 'abort'}
              options={[
                { value: 'abort', label: '出错即中止' },
                { value: 'skip', label: '跳过该节点' },
              ]}
              style={{ width: '100%' }}
              onChange={(value: 'abort' | 'skip') => onUpdateNodeData({ failStrategy: value })}
            />
          </div>

          {/* 参考媒体占位：上游连线输入在 M4 接入真实媒体引用/上传 */}
          <div className="wf-config-panel__refs">
            <span className="wf-config-panel__refs-title">📎 参考媒体</span>
            <span className="wf-config-panel__refs-hint">
              上游节点连线输入将作为参考素材在此展示（M4 接入媒体引用与上传）
            </span>
          </div>

          <Button type="primary" block onClick={onGenerate} loading={nodeData.status === 'generating'}>
            执行（stub）
          </Button>
        </>
      ) : (
        <>
          {/* 非生成型工具（导入/文本编辑）：仅保留参考占位与提示 */}
          <div className="wf-config-panel__refs">
            <span className="wf-config-panel__refs-title">📎 参考媒体</span>
            <span className="wf-config-panel__refs-hint">
              {materialType === 'text'
                ? '文本编辑节点直接在卡片内编辑内容；上游输入可通过文生类工具引用'
                : '导入素材节点由上游连线输入填充；上传入口在 M4 提供'}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

// ==================== 主组件 ====================

export interface MaterialNodeComponentProps extends NodeProps {
  data: Record<string, unknown>;
}

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
  const catalog = (data as { __catalog?: CapabilityCatalog }).__catalog ?? null;

  const [isHovered, setIsHovered] = useState(false);
  // 配置面板开合：选中节点时展开，关闭后本次选中周期内保持收起
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

  const runStubExecution = useStubExecution(updateNodeData);

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
      case 'generating': return <span className="wf-material-node__badge wf-material-node__badge--running" />;
      case 'completed': return <span className="wf-material-node__badge wf-material-node__badge--done" />;
      case 'failed': return <span className="wf-material-node__badge wf-material-node__badge--failed" />;
      default: return null;
    }
  }, [status]);

  return (
    <div
      className={`wf-material-node ${selected ? 'wf-material-node--selected' : ''}`}
      style={{ width: nodeWidth }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 输入 Handle */}
      <CanvasNodeHandle side="left" nodeHovered={isHovered} />

      {/* 节点标题（卡片外部）- 双击编辑，同 Gxgen NodeHeader */}
      <div className="wf-material-node__header nodrag">
        {editingLabel ? (
          <input
            className="wf-material-node__label-input"
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
            className="wf-material-node__label"
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
      <div className="wf-material-node__card" style={{ minHeight: Math.min(nodeHeight, 240) }}>
        {/* 文本节点渲染器 */}
        {materialType === 'text' && (
          <textarea
            className="wf-material-node__text-editor nodrag"
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
          <div className="wf-material-node__media">
            {status === 'generating' && (
              <div className="wf-material-node__media-placeholder wf-material-node__media-placeholder--running">
                生成中…
              </div>
            )}
            {status !== 'generating' && mediaUrl && materialType === 'image' && (
              <img src={mediaUrl} alt={label} className="wf-material-node__media-image" />
            )}
            {status !== 'generating' && mediaUrl && materialType !== 'image' && (
              <div className="wf-material-node__media-placeholder wf-material-node__media-placeholder--done">
                {materialType === 'video' ? '▶ 视频结果（占位）' : '🎵 音频结果（占位）'}
              </div>
            )}
            {status !== 'generating' && !mediaUrl && (
              <div className="wf-material-node__media-placeholder">
                空素材 —— 选中后在下方面板配置并执行
              </div>
            )}
          </div>
        )}

        {errorMessage && (
          <div className="wf-material-node__error">{errorMessage}</div>
        )}
      </div>

      {/* 配置面板：在卡片下方展开 */}
      {panelVisible && (
        <MaterialConfigPanel
          nodeData={nodeData}
          catalog={catalog}
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
