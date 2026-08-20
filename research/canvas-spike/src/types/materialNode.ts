/**
 * Ported (narrowed) from Gxgen `apps/web/src/types/materialNode.ts` +
 * `packages/shared/src/canvas/materialTypes.ts`.
 *
 * The `@gxg/shared/canvas` module (376 lines, self-contained) was inlined
 * verbatim below — it is the single source of truth for material type /
 * tool contracts and has zero other dependencies, so inlining is cheap.
 */

// ============================================================================
// Inlined from @gxg/shared/canvas/materialTypes.ts (verbatim)
// ============================================================================

export type MaterialType = 'text' | 'image' | 'video' | 'audio';

export type MaterialTool =
  | 'text-editor'
  | 'text-to-text'
  | 'link-extract'
  | 'audio-transcription'
  | 'import'
  | 'text-to-image'
  | 'image-to-image'
  | 'video-generation'
  | 'motion-mimicry'
  | 'subtitle-render'
  | 'digital-human'
  | 'text-to-audio'
  | 'text-to-music'
  | 'video-to-audio'
  | 'voice-clone'
  | 'audio-extract';

export const MATERIAL_TYPES: MaterialType[] = ['text', 'image', 'video', 'audio'];

export const MATERIAL_TOOLS: Record<MaterialType, readonly MaterialTool[]> = {
  text: ['text-editor', 'text-to-text', 'link-extract', 'audio-transcription'],
  image: ['import', 'text-to-image', 'image-to-image'],
  video: ['import', 'video-generation', 'motion-mimicry', 'subtitle-render', 'digital-human'],
  audio: ['import', 'text-to-audio', 'text-to-music', 'video-to-audio', 'voice-clone', 'audio-extract'],
};

export const DEFAULT_MATERIAL_TOOL: Record<MaterialType, MaterialTool> = {
  text: 'text-editor',
  image: 'import',
  video: 'import',
  audio: 'import',
};

/** 工具 -> 可接受的上游素材类型矩阵（连接校验的类型合同） */
export const MATERIAL_TOOL_INPUT_TYPES: Partial<Record<MaterialTool, MaterialType[]>> = {
  'text-editor': [],
  'text-to-text': ['text', 'image', 'video'],
  'link-extract': ['text'],
  'audio-transcription': ['audio'],
  import: [],
  'text-to-image': ['text'],
  'image-to-image': ['text', 'image'],
  'video-generation': ['text', 'image', 'video', 'audio'],
  'digital-human': ['text', 'image', 'video', 'audio'],
  'motion-mimicry': ['text', 'image', 'video'],
  'subtitle-render': ['text', 'video'],
  'text-to-audio': ['text'],
  'video-to-audio': ['video'],
  'voice-clone': ['text', 'audio'],
  'audio-extract': ['video'],
  'text-to-music': ['text'],
};

// ============================================================================
// Narrowed from Gxgen apps/web/src/types/materialNode.ts
// ============================================================================

export type MaterialStatus = 'empty' | 'ready' | 'generating' | 'completed' | 'failed';
export type NodeFailStrategy = 'abort' | 'skip';

import type { CanvasMediaSourceRef } from './shared';

/**
 * MaterialNode 节点数据（窄化版）。
 *
 * 保留了 Gxgen 原始接口中画布图结构 + 连接校验 + 配置面板真正消费的字段，
 * 裁掉了预设服务绑定（sceneId/modelOptions/priceRule…）、输入槽位、
 * 角色设计、字幕样式等强业务字段。索引签名保留以兼容 React Flow 的
 * Record<string, unknown> 约束。
 */
export interface MaterialNodeData {
  // 索引签名：兼容 Record<string, unknown>（React Flow 要求）
  [key: string]: unknown;

  // === 基础信息 ===
  /** 节点标签（用户可编辑） */
  label: string;
  /** 素材类型 */
  materialType: MaterialType;

  // === 输出内容 ===
  /** 节点状态 */
  status: MaterialStatus;
  /** 文本内容（text 类型使用） */
  content?: string;
  /** 主媒体 URL */
  mediaUrl?: string;
  /** 主媒体引用（持久化唯一真相） */
  mediaSource?: CanvasMediaSourceRef;
  /** 关联的任务 ID */
  taskId?: string;
  /** 错误信息 */
  errorMessage?: string;
  /** AI 生成的文本结果（text 节点，与用户输入 content 区分） */
  generatedContent?: string;

  // === 生成配置 ===
  /** 当前选中的工具类型 */
  selectedTool: MaterialTool;
  /** 默认提示词 */
  prompt?: string;
  /** 工具参数（模型、尺寸、时长等） */
  params: Record<string, unknown>;
  /** 节点失败策略 */
  failStrategy?: NodeFailStrategy;

  // === 尺寸配置 ===
  nodeWidth?: number;
  nodeHeight?: number;
  dimensions?: { width: number; height: number };
  aspectRatio?: number;
  duration?: number;
}

const MATERIAL_TYPE_LABELS: Record<MaterialType, string> = {
  text: '文本',
  image: '图片',
  video: '视频',
  audio: '音频',
};

export function getMaterialTypeLabel(materialType: MaterialType): string {
  return MATERIAL_TYPE_LABELS[materialType];
}

/** 创建默认的 MaterialNodeData（窄化版） */
export function createDefaultMaterialNodeData(
  materialType: MaterialType,
  overrides?: Partial<MaterialNodeData>,
): MaterialNodeData {
  return {
    label: MATERIAL_TYPE_LABELS[materialType],
    materialType,
    status: 'empty',
    selectedTool: DEFAULT_MATERIAL_TOOL[materialType],
    params: {},
    failStrategy: 'abort',
    ...overrides,
  };
}

/** 判断工具是否需要触发生成任务 */
export function isGenerativeTool(tool: MaterialTool): boolean {
  return tool !== 'import' && tool !== 'text-editor';
}

/** 检查节点是否有可输出的内容（连接校验的 hasOutput 判定） */
export function hasMaterialOutput(data: MaterialNodeData): boolean {
  if (data.status !== 'completed' && data.status !== 'ready') {
    return false;
  }
  switch (data.materialType) {
    case 'text':
      return !!data.content || !!data.generatedContent;
    case 'image':
    case 'video':
    case 'audio':
      return typeof data.mediaUrl === 'string' && data.mediaUrl.trim().length > 0;
    default:
      return false;
  }
}
