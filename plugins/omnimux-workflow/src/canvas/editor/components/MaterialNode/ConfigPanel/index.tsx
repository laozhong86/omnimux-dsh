/**
 * ConfigPanel — W2 T2.2，面板内容重排（Gxgen 式布局）。
 *
 * 布局：Prompt 大输入区 → 参数行（ParamBar 胶囊）→ 参考槽位 → 底部
 * GenerateButton 行。控件保留 antd Select/Slider/TextArea（回归面最小，
 * 计划 §9 坑#4）；数据链不变：__catalog / updateNodeData / execBusy。
 *
 * 外壳（定位/反缩放/clickOutside）在 ConfigPanelShell，本组件只管内容。
 */

import React, { memo, useCallback, useMemo } from 'react';
import { Input, Select, Slider } from 'antd';
import type { MaterialNodeData, MaterialTool } from '../../../../types/materialNode';
import {
  ASPECT_RATIO_OPTIONS,
  MATERIAL_TOOLS,
  isGenerativeTool,
} from '../../../../types/materialNode';
import type { CapabilityCatalog } from '../../../../../shared/api';
import { useT } from '../../../../i18n';
import GenerateButton from './GenerateButton';
import ReferenceSlots from './ReferenceSlots';

export interface ConfigPanelProps {
  nodeId: string;
  nodeData: MaterialNodeData;
  catalog: CapabilityCatalog | null;
  onUpdateNodeData: (updates: Partial<MaterialNodeData>) => void;
  onGenerate: () => void;
  /** 全图/其他节点执行中（禁用执行入口） */
  execBusy: boolean;
}

/** 模型选项 label：provider 图标无数据源 → 首字母圆片（计划 T2.4） */
function modelOptionLabel(label: string): React.ReactNode {
  return (
    <span className="wf-model-option">
      <span className="wf-model-option__avatar">{label.charAt(0).toUpperCase()}</span>
      <span className="wf-model-option__name">{label}</span>
    </span>
  );
}

const ConfigPanel: React.FC<ConfigPanelProps> = ({
  nodeId,
  nodeData,
  catalog,
  onUpdateNodeData,
  onGenerate,
  execBusy,
}) => {
  const t = useT();
  const { materialType, selectedTool, params } = nodeData;
  const generative = isGenerativeTool(selectedTool);

  const toolOptions = useMemo(
    () =>
      (MATERIAL_TOOLS[materialType] ?? []).map((tool: MaterialTool) => ({
        value: tool,
        label: t(`tool.${tool}`),
      })),
    [materialType, t],
  );

  const modelOptions = useMemo(() => {
    const rows = catalog?.[materialType] ?? [];
    return rows.map((row) => ({ value: row.id, label: modelOptionLabel(row.label) }));
  }, [catalog, materialType]);
  const modelValue = typeof params.model === 'string' ? params.model : modelOptions[0]?.value;

  const updateParam = useCallback(
    (key: string, value: unknown) => {
      onUpdateNodeData({ params: { ...params, [key]: value } });
    },
    [onUpdateNodeData, params],
  );

  // 时长参数：视频 1-20s，音频 1-60s
  const showDuration = generative && (materialType === 'video' || materialType === 'audio');
  const durationMax = materialType === 'video' ? 20 : 60;
  const durationValue = typeof params.duration === 'number' ? params.duration : 5;

  // 画幅参数：图片/视频生成型节点
  const showAspectRatio = generative && (materialType === 'image' || materialType === 'video');
  const aspectRatioValue = typeof params.aspectRatio === 'string' ? params.aspectRatio : '16:9';

  if (!generative) {
    // 非生成型工具（导入/文本编辑）：仅保留参考槽位与提示
    return (
      <div className="wf-config-panel">
        <ReferenceSlots nodeId={nodeId} />
        <span className="wf-config-panel__hint">
          {materialType === 'text' ? t('panel.hintTextNode') : t('panel.hintImportNode')}
        </span>
      </div>
    );
  }

  return (
    <div className="wf-config-panel">
      {/* Prompt 大输入区 */}
      <Input.TextArea
        className="wf-config-panel__prompt"
        value={nodeData.prompt ?? ''}
        onChange={(e) => onUpdateNodeData({ prompt: e.target.value })}
        placeholder={t('panel.promptPlaceholder')}
        autoSize={{ minRows: 3, maxRows: 6 }}
      />

      {/* 参数行：工具 / 模型 / 画幅 胶囊 */}
      <div className="wf-param-bar">
        <Select
          className="wf-param-bar__select"
          value={selectedTool}
          options={toolOptions}
          onChange={(value: MaterialTool) => onUpdateNodeData({ selectedTool: value })}
        />
        <Select
          className="wf-param-bar__select wf-param-bar__select--model"
          value={modelValue}
          options={modelOptions}
          placeholder={modelOptions.length === 0 ? t('panel.modelEmpty') : undefined}
          onChange={(value) => updateParam('model', value)}
        />
        {showAspectRatio ? (
          <Select
            className="wf-param-bar__select"
            value={aspectRatioValue}
            options={ASPECT_RATIO_OPTIONS.map((ratio) => ({ value: ratio, label: ratio }))}
            onChange={(value) => updateParam('aspectRatio', value)}
          />
        ) : null}
        <Select
          className="wf-param-bar__select"
          value={nodeData.failStrategy ?? 'abort'}
          options={[
            { value: 'abort', label: t('panel.failAbort') },
            { value: 'skip', label: t('panel.failSkip') },
          ]}
          onChange={(value: 'abort' | 'skip') => onUpdateNodeData({ failStrategy: value })}
        />
      </div>

      {/* 时长参数行（video/audio） */}
      {showDuration ? (
        <div className="wf-config-panel__duration">
          <label>{t('panel.duration')}</label>
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

      {/* 参考媒体槽位（上游连线缩略图） */}
      <ReferenceSlots nodeId={nodeId} />

      {/* 底部 GenerateButton 行 */}
      <div className="wf-config-panel__footer">
        <span className="wf-config-panel__hint">{t('panel.runHint')}</span>
        <GenerateButton
          onClick={onGenerate}
          disabled={execBusy}
          isGenerating={nodeData.executionStatus === 'running'}
        />
      </div>
    </div>
  );
};

export default memo(ConfigPanel);
