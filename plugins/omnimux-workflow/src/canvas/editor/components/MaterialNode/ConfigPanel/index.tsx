/**
 * ConfigPanel — 统一材质创作底栏（Unified Config Dock）。
 *
 * 1:1 还原 4 张设计截图：
 * 1. 音频模式：顶部带 [ 音频生成 ] / [ 音乐生成 ] 子模式切换 Tab
 * 2. Prompt 输入区：左上角只读参考缩略图（有上游连线时展示）、右上角原地展开/收起、动态占位符
 * 3. 底部参数胶囊栏：
 *    - 文本：[模型选择] | ⚡ 10 | [↑]
 *    - 图片：[模型选择] | 自适应 | × 1 | ⚡ 60 | [↑]
 *    - 视频：[模型选择] | 全能参考 · ▱ 16:9 · 2K · ⏱ 5s | × 1 | [领取免费机会] | ⚡ 600 | [↑]
 *    - 音频：[模型选择] | ⚙ 参数 | ⚡ 30 | [↑]
 */

import React, { memo, useCallback, useMemo, useState } from 'react';
import {
  Maximize2,
  Minimize2,
  Plus,
  SlidersHorizontal,
  Music,
  Mic,
  Play,
  FileText,
  Image as ImageIcon,
  X,
  AlertTriangle,
} from 'lucide-react';
import type { MaterialNodeData, MaterialTool } from '../../../../types/materialNode';
import {
  ASPECT_RATIO_OPTIONS,
  MATERIAL_NODE_WHITELIST,
  MATERIAL_TOOLS,
  resolveNodeKind,
} from '../../../../types/materialNode';
import type { CapabilityCatalog, CapabilityModelItem } from '../../../../../shared/api';
import { sortCatalogRows } from '../../../../../shared/sortCatalog';
import {
  evaluateModelCompatibility,
  resolveModelInputCapability,
} from '../../../../../shared/validation/modelCompatibilityEvaluator.ts';
import { useT } from '../../../../i18n';
import { CustomSelect, CustomSlider } from '../../../../ui';
import { ModelBrandIcon } from '../../../../ui/ModelBrandIcon';
import { useCanvasStore } from '../../../../store/canvasStore';
import { useUpstreamMedia } from '../../../hooks/useUpstreamMedia';
import { useModelParameterSchema, getCachedCatalog } from '../../../hooks/useModelParameterSchema';
import GenerateButton from './GenerateButton';

export interface ConfigPanelProps {
  nodeId: string;
  nodeData: MaterialNodeData;
  catalog: CapabilityCatalog | null;
  onUpdateNodeData: (updates: Partial<MaterialNodeData>) => void;
  onGenerate: () => void;
  /** 全图/其他节点执行中（禁用执行入口） */
  execBusy: boolean;
  onOpenResourcePicker?: () => void;
}

function getModelVisuals(id: string) {
  const icon = <ModelBrandIcon modelId={id} size={15} />;

  if (id.startsWith('nanobanana')) {
    return {
      icon,
      badge: 'Yearly -20%',
      subtitle: 'auto-4K',
    };
  }
  if (id.startsWith('seedream')) {
    const subtitle = id.includes('5.0') || id.includes('5-0') ? '1K-2K' : '2K-4K';
    return {
      icon,
      badge: 'Yearly -20%',
      subtitle,
    };
  }
  if (id.startsWith('midjourney')) {
    const subtitle = id.includes('8.1') || id.includes('8-1') ? '2K' : '1080P';
    return {
      icon,
      badge: 'Yearly -20%',
      subtitle,
    };
  }
  if (id.startsWith('gpt-image') || id.startsWith('openai')) {
    return {
      icon,
      badge: 'Yearly -20%',
      subtitle: '1k-4k',
    };
  }
  if (id.startsWith('kling')) {
    let subtitle = '1080P · ⏱ 3-10s';
    if (id === 'kling-o3') subtitle = '4K · ⏱ 3-15s · 🔊';
    else if (id === 'kling-avatar') subtitle = 'Digital Human';
    else if (id === 'kling-motion-control') subtitle = '1080P';
    return {
      icon,
      subtitle,
    };
  }
  if (id.startsWith('wan')) {
    return {
      icon,
      subtitle: '720P-1080P · ⏱ 5-15s · 🔊',
    };
  }
  if (id.startsWith('veo')) {
    return {
      icon,
      subtitle: '720p-1080p · ⏱ 8s',
    };
  }
  return { icon };
}

/** 模型选项 label：带精致图标/首字母圆片 */
function modelOptionLabel(label: string) {
  return (
    <span className="wf-model-option">
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
  onOpenResourcePicker,
}) => {
  const t = useT();
  const { materialType, selectedTool, params, prompt } = nodeData;
  const kind = resolveNodeKind(nodeData);

  const [isExpanded, setIsExpanded] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const upstreams = useUpstreamMedia(nodeId);

  // 导入类节点的专属面板展示：仅展示资源概览与替换入口，不提供模型生成设置
  if (kind === 'import') {
    return (
      <div className="wf-config-panel wf-config-panel--import">
        <div style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
            <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--wb-text-secondary)' }}>
              {t('panel.hintImportNode')}
            </span>
            {Boolean(nodeData.realPath) && (
              <span
                style={{
                  fontSize: '11px',
                  color: 'var(--wb-text-muted)',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  maxWidth: '240px',
                }}
                title={String(nodeData.realPath)}
              >
                {String(nodeData.realPath).split('/').pop()}
              </span>
            )}
          </div>
          {onOpenResourcePicker && (
            <button
              type="button"
              className="wf-param-pill wf-param-pill--btn"
              style={{ padding: '4px 10px', height: '28px' }}
              onClick={onOpenResourcePicker}
            >
              <span>{t('node.replace')}</span>
            </button>
          )}
        </div>
      </div>
    );
  }

  // 音频子模式：音频生成 (text-to-audio) / 音乐生成 (text-to-music)
  const audioSubMode = selectedTool === 'text-to-music' ? 'music' : 'speech';

  const handleAudioSubModeChange = useCallback(
    (mode: 'speech' | 'music') => {
      onUpdateNodeData({
        selectedTool: mode === 'music' ? 'text-to-music' : 'text-to-audio',
      });
    },
    [onUpdateNodeData],
  );

  // 解绑指定上游连线
  const handleUnbind = useCallback(
    (upstreamNodeId: string) => {
      const state = useCanvasStore.getState();
      const edgeIdsToRemove = state.edges
        .filter((edge) => edge.target === nodeId && edge.source === upstreamNodeId)
        .map((edge) => edge.id);
      if (edgeIdsToRemove.length > 0) {
        state.applyCanvasInputMutation({ removeEdgeIds: edgeIdsToRemove });
      }
    },
    [nodeId],
  );

  // 模型列表：仅消费 hub catalog（无生产假回退）；按显示名 A–Z。
  // 消费 MATERIAL_NODE_WHITELIST 进行白名单过滤（未配置白名单的模态不进行过滤）。
  // 已保存但不在当前可用列表中的 params.model 保留为 deprecated 项，不静默改写。
  const modelOptions = useMemo(() => {
    const activeCatalog = catalog ?? getCachedCatalog();
    const rawRows = activeCatalog?.[materialType] ?? [];
    const whitelist = MATERIAL_NODE_WHITELIST[materialType];
    const filteredRows = whitelist
      ? rawRows.filter((row) => whitelist.includes(row.id))
      : rawRows;
    const rows = sortCatalogRows<CapabilityModelItem>(filteredRows);
    const savedModel = typeof params.model === 'string' ? params.model.trim() : '';
    const orphan = savedModel && !rows.some((row) => row.id === savedModel)
      ? [{
          id: savedModel,
          label: rawRows.find((r) => r.id === savedModel)?.label ?? savedModel,
          deprecated: true as const,
        }]
      : [];
    const combined = [...orphan, ...rows.map((row) => ({ ...row, deprecated: false as const }))];

    const upstreamTypes = upstreams.map((u) => ({
      type: u.materialType,
    }));

    return combined.map((row) => {
      const visuals = getModelVisuals(row.id);
      const icon = visuals.icon;

      const modelCap = row.inputCapability ?? resolveModelInputCapability(row.id, activeCatalog);
      const compat = evaluateModelCompatibility(row.id, modelCap, upstreamTypes);

      const isDegraded = compat.level === 'degraded';
      const isDisabled = compat.level === 'disabled';
      const reasonText = compat.reasons.join('；');

      let badge = row.deprecated ? 'deprecated' : (row.badge ?? visuals.badge);
      if (isDegraded) {
        badge = '降级';
      } else if (isDisabled && !row.deprecated) {
        badge = '不可用';
      }

      let subtitle = row.subtitle ?? visuals.subtitle;
      if (isDisabled && reasonText) {
        subtitle = reasonText;
      } else if (isDegraded && compat.adaptationAdvice) {
        subtitle = compat.adaptationAdvice;
      }

      const label = row.deprecated ? `${row.label} (deprecated)` : row.label;
      const title = reasonText || (row.deprecated ? 'deprecated' : undefined);

      return {
        value: row.id,
        label,
        triggerLabel: (
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            {icon ? <span style={{ display: 'inline-flex', opacity: 0.8 }}>{icon}</span> : null}
            <span>{label}</span>
          </span>
        ),
        icon,
        badge,
        subtitle,
        disabled: isDisabled,
        title,
      };
    });
  }, [catalog, materialType, params.model, upstreams]);

  // Inheritance: keep existing params.model (even if deprecated) → defaults[type] → whitelist first → first sorted.
  const modelValue = useMemo(() => {
    if (typeof params.model === 'string' && params.model.trim()) return params.model;
    const activeCatalog = catalog ?? getCachedCatalog();
    const defaultId = activeCatalog?.defaults?.[materialType];
    if (typeof defaultId === 'string' && defaultId.trim()) {
      if (modelOptions.some((row) => row.value === defaultId)) return defaultId;
    }
    const whitelist = MATERIAL_NODE_WHITELIST[materialType];
    const firstWhitelisted = whitelist?.find((id) => modelOptions.some((row) => row.value === id));
    if (firstWhitelisted) return firstWhitelisted;
    return modelOptions[0]?.value;
  }, [params.model, catalog, materialType, modelOptions]);

  // 动态读取当前模型的 Parameter Schema 及其选项
  const {
    aspectRatioOptions,
    defaultAspectRatio,
    isAspectRatioValid,
    durationOptions,
    defaultDuration,
    isDurationValid,
    resolutionOptions,
    defaultResolution,
  } = useModelParameterSchema(materialType, modelValue, catalog);

  const updateParam = useCallback(
    (key: string, value: unknown) => {
      onUpdateNodeData({ params: { ...params, [key]: value } });
    },
    [onUpdateNodeData, params],
  );

  // 切换模型时的安全回退：检查画幅和时长是否依然合法，不合法则平滑降级
  const handleModelChange = useCallback(
    (newModelId: string) => {
      const activeCatalog = catalog ?? getCachedCatalog();
      const modelList = activeCatalog?.[materialType] ?? [];
      const newModelItem = modelList.find((m) => m.id === newModelId);
      const newSchema = newModelItem?.parameters;

      const nextParams: Record<string, unknown> = { ...params, model: newModelId };

      if (params.aspectRatio && newSchema?.aspectRatio?.options) {
        const isRatioSupported = newSchema.aspectRatio.options.some((opt) => opt.value === params.aspectRatio);
        if (!isRatioSupported) {
          nextParams.aspectRatio = newSchema.aspectRatio.defaultValue || '16:9';
        }
      }

      if (typeof params.duration === 'number' && newSchema?.duration?.options) {
        const isDurationSupported = newSchema.duration.options.some((opt) => opt.value === params.duration);
        if (!isDurationSupported) {
          nextParams.duration = newSchema.duration.defaultValue || newSchema.duration.options[0]?.value || 5;
        }
      }

      if (params.resolution && newSchema?.resolution?.options) {
        const isResolutionSupported = newSchema.resolution.options.some((opt) => opt.value === params.resolution);
        if (!isResolutionSupported) {
          nextParams.resolution = newSchema.resolution.defaultValue || newSchema.resolution.options[0]?.value;
        }
      } else if (params.resolution && newSchema && !newSchema.resolution?.options) {
        delete nextParams.resolution;
      }

      onUpdateNodeData({ params: nextParams });
    },
    [catalog, materialType, onUpdateNodeData, params],
  );

  // 动态 Prompt 占位符
  const placeholder = useMemo(() => {
    switch (materialType) {
      case 'text':
        return t('panel.textPromptPlaceholder');
      case 'image':
        return t('panel.imagePromptPlaceholder');
      case 'video':
        return t('panel.videoPromptPlaceholder');
      case 'audio':
        return audioSubMode === 'music'
          ? t('panel.musicPromptPlaceholder')
          : t('panel.audioPromptPlaceholder');
      default:
        return t('panel.promptPlaceholder');
    }
  }, [materialType, audioSubMode, t]);

  // 当前有效画幅与时长（带合法性防御兜底）
  const aspectRatioValue =
    typeof params.aspectRatio === 'string' && isAspectRatioValid(params.aspectRatio)
      ? params.aspectRatio
      : defaultAspectRatio;

  const durationValue =
    typeof params.duration === 'number' && isDurationValid(params.duration)
      ? params.duration
      : defaultDuration;

  // 当前有效分辨率（带合法性防御兜底）
  const isResolutionValid = (value: string | undefined) =>
    !!value && resolutionOptions.some((opt) => opt.value === value);
  const resolutionValue =
    typeof params.resolution === 'string' && isResolutionValid(params.resolution)
      ? params.resolution
      : defaultResolution;

  // 当前选中模型能力与降级状态
  const activeCatalog = catalog ?? getCachedCatalog();
  const currentModelCap = useMemo(() => {
    const rawRows = activeCatalog?.[materialType] ?? [];
    const found = rawRows.find((r) => r.id === modelValue);
    return found?.inputCapability ?? resolveModelInputCapability(modelValue, activeCatalog);
  }, [activeCatalog, materialType, modelValue]);

  const upstreamTypes = useMemo(() => upstreams.map((u) => ({ type: u.materialType })), [upstreams]);
  const modelCompat = useMemo(
    () => evaluateModelCompatibility(modelValue, currentModelCap, upstreamTypes),
    [modelValue, currentModelCap, upstreamTypes],
  );
  const isModelDegraded =
    modelCompat.level === 'degraded' ||
    (currentModelCap?.referenceImages?.max !== undefined &&
      upstreams.filter((u) => u.materialType === 'image' || !u.materialType).length >
        currentModelCap.referenceImages.max);
  const degradedWarningText = useMemo(() => {
    const max = currentModelCap?.referenceImages?.max;
    return t('model.compatibility.degradedWarning').replace('{max}', String(max ?? ''));
  }, [currentModelCap, t]);

  return (
    <div className="wf-config-panel">
      {/* 1. 音频模式专属顶部 Tab */}
      {materialType === 'audio' && (
        <div className="wf-config-panel__audio-tabs">
          <button
            type="button"
            className={`wf-config-panel__tab-btn ${
              audioSubMode === 'speech' ? 'wf-config-panel__tab-btn--active' : ''
            }`}
            onClick={() => handleAudioSubModeChange('speech')}
          >
            <Mic size={13} />
            <span>{t('panel.audioGen')}</span>
          </button>
          <button
            type="button"
            className={`wf-config-panel__tab-btn ${
              audioSubMode === 'music' ? 'wf-config-panel__tab-btn--active' : ''
            }`}
            onClick={() => handleAudioSubModeChange('music')}
          >
            <Music size={13} />
            <span>{t('panel.musicGen')}</span>
          </button>
        </div>
      )}

      {/* 2. Prompt 输入区容器 */}
      <div className="wf-config-panel__prompt-container">
        <div className="wf-config-panel__prompt-header">
          {/* 左上角参考素材缩略图：只读展示，仅在有上游连线时渲染 */}
          {upstreams.length > 0 || onOpenResourcePicker ? (
            <div className="wf-config-panel__ref-slots-group">
              {upstreams.map((item) => (
                <div
                  key={item.nodeId}
                  className={`wf-config-panel__ref-thumb-slot ${
                    item.hasMedia ? 'wf-config-panel__ref-thumb-slot--ready' : ''
                  }`}
                  title={`${item.label} (${item.hasMedia ? '素材已就绪' : '等待素材'})`}
                >
                  {item.url && item.materialType === 'image' ? (
                    <img
                      src={item.url}
                      alt={item.label}
                      className="wf-config-panel__ref-thumb-media"
                    />
                  ) : item.url && item.materialType === 'video' ? (
                    <div className="wf-config-panel__ref-thumb-video-box">
                      <video src={item.url} className="wf-config-panel__ref-thumb-media" muted />
                      <Play size={10} className="wf-config-panel__ref-thumb-overlay-icon" />
                    </div>
                  ) : item.materialType === 'audio' ? (
                    <div className="wf-config-panel__ref-thumb-icon-box wf-config-panel__ref-thumb-icon-box--audio">
                      <Music size={13} />
                    </div>
                  ) : item.materialType === 'text' ? (
                    <div className="wf-config-panel__ref-thumb-icon-box wf-config-panel__ref-thumb-icon-box--text">
                      <FileText size={13} />
                    </div>
                  ) : (
                    <div className="wf-config-panel__ref-thumb-icon-box">
                      <ImageIcon size={13} />
                    </div>
                  )}

                  {/* 状态小圆点 */}
                  {item.hasMedia && <span className="wf-config-panel__ref-thumb-dot" />}

                  {/* 解绑按钮 */}
                  <button
                    type="button"
                    className="wf-config-panel__ref-thumb-unbind nodrag"
                    title={t('edge.disconnect')}
                    aria-label={t('edge.disconnect')}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleUnbind(item.nodeId);
                    }}
                  >
                    <X size={8} />
                  </button>
                </div>
              ))}
              {onOpenResourcePicker ? (
                <button
                  type="button"
                  className="wf-config-panel__add-ref-btn"
                  onClick={onOpenResourcePicker}
                  title={t('picker.addRef')}
                >
                  <Plus size={14} />
                </button>
              ) : null}
            </div>
          ) : (
            <span />
          )}

          {/* 右上角操作区：降级警示徽标与原地展开 / 收起 */}
          <div className="wf-config-panel__prompt-header-actions">
            {isModelDegraded && (
              <span
                className="wf-config-panel__degraded-badge wf-material-node__badge wf-material-node__badge--degraded"
                title={degradedWarningText}
              />
            )}
            <button
              type="button"
              className="wf-config-panel__expand-btn"
              onClick={() => setIsExpanded((prev) => !prev)}
              title={isExpanded ? t('panel.collapse') : t('panel.expand')}
            >
              {isExpanded ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
            </button>
          </div>
        </div>

        {/* Prompt 输入框：展开态加高并保持底部参数栏紧贴 */}
        <textarea
          className={`wf-config-panel__prompt-input nowheel nodrag${
            isExpanded ? ' wf-config-panel__prompt-input--expanded' : ''
          }`}
          value={prompt ?? ''}
          placeholder={placeholder}
          rows={isExpanded ? 8 : 2}
          onChange={(e) => onUpdateNodeData({ prompt: e.target.value })}
        />
      </div>

      {/* 3. 底部参数与操作底栏 */}
      <div className="wf-config-panel__bottom-bar">
        {/* 左侧参数区 */}
        <div className="wf-config-panel__params-group">
          {/* 模型下拉选择 */}
          <CustomSelect
            className="wf-param-bar__select wf-param-bar__select--model"
            value={modelValue}
            options={modelOptions}
            popupMatchSelectWidth={false}
            onChange={(value) => handleModelChange(value)}
          />

          {/* 图片专属参数胶囊 */}
          {materialType === 'image' && (
            <>
              <span className="wf-param-pill__divider">|</span>
              <div className="wf-param-pill wf-param-pill--video-summary">
                <CustomSelect
                  className="wf-param-bar__select wf-param-bar__select--ghost"
                  variant="ghost"
                  value={aspectRatioValue}
                  options={aspectRatioOptions}
                  popupMatchSelectWidth={false}
                  onChange={(value) => updateParam('aspectRatio', value)}
                />
              </div>
            </>
          )}

          {/* 视频专属参数胶囊 */}
          {materialType === 'video' && (
            <>
              <span className="wf-param-pill__divider">|</span>
              <div className="wf-param-pill wf-param-pill--video-summary">
                <CustomSelect
                  className="wf-param-bar__select wf-param-bar__select--ghost"
                  variant="ghost"
                  value={aspectRatioValue}
                  options={aspectRatioOptions}
                  popupMatchSelectWidth={false}
                  onChange={(value) => updateParam('aspectRatio', value)}
                />
                <span className="wf-param-pill__dot">·</span>
                <CustomSelect
                  className="wf-param-bar__select wf-param-bar__select--ghost"
                  variant="ghost"
                  value={durationValue}
                  options={durationOptions}
                  popupMatchSelectWidth={false}
                  onChange={(value) => updateParam('duration', value)}
                />
                {resolutionOptions.length > 0 && (
                  <>
                    <span className="wf-param-pill__dot">·</span>
                    <CustomSelect
                      className="wf-param-bar__select wf-param-bar__select--ghost"
                      variant="ghost"
                      value={resolutionValue}
                      options={resolutionOptions}
                      popupMatchSelectWidth={false}
                      onChange={(value) => updateParam('resolution', value)}
                    />
                  </>
                )}
              </div>
            </>
          )}

          {/* 音频专属设置按钮 */}
          {materialType === 'audio' && (
            <>
              <span className="wf-param-pill__divider">|</span>
              <button
                type="button"
                className="wf-param-pill wf-param-pill--btn"
                onClick={() => setShowAdvanced(!showAdvanced)}
                title={t('panel.advanced')}
              >
                <SlidersHorizontal size={13} />
              </button>
            </>
          )}
        </div>

        {/* 右侧生成按钮 */}
        <div className="wf-config-panel__action-group">
          <GenerateButton
            onClick={onGenerate}
            disabled={execBusy}
            isGenerating={nodeData.executionStatus === 'running'}
          />
        </div>
      </div>

      {/* 高级参数展开 */}
      {showAdvanced && (
        <div className="wf-config-panel__advanced-drawer">
          <div className="wf-config-panel__advanced-row">
            <span className="wf-config-panel__advanced-label">{t('panel.duration')}</span>
            <CustomSlider
              style={{ flex: 1 }}
              min={1}
              max={materialType === 'video' ? 20 : 60}
              value={durationValue}
              onChange={(v) => updateParam('duration', v)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(ConfigPanel);
