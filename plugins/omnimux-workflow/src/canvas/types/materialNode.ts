/**
 * Ported (narrowed) from Gxgen `apps/web/src/types/materialNode.ts` +
 * `packages/shared/src/canvas/materialTypes.ts` — validated by the
 * extraction spike (research/canvas-spike/SPIKE-REPORT.md).
 *
 * The `@gxg/shared/canvas` module (376 lines, zero deps) was inlined
 * verbatim below; MaterialNodeData is narrowed to the fields the canvas
 * graph + connection validation actually consume.
 */

import type { MaterialType } from '../../shared/canvasTypes';

// ============================================================================
// Inlined from @gxg/shared/canvas/materialTypes.ts (verbatim)
// ============================================================================

export type { MaterialType };

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

/** 工具中文标签（配置面板 Select 选项文案，M2） */
export const MATERIAL_TOOL_LABELS: Record<MaterialTool, string> = {
  'text-editor': '文本编辑',
  'text-to-text': '文本生成',
  'link-extract': '链接提取',
  'audio-transcription': '音频转写',
  import: '导入素材',
  'text-to-image': '文生图',
  'image-to-image': '图生图',
  'video-generation': '视频生成',
  'motion-mimicry': '动作模仿',
  'subtitle-render': '字幕渲染',
  'digital-human': '数字人',
  'text-to-audio': '文本转语音',
  'text-to-music': '文本配乐',
  'video-to-audio': '视频转音频',
  'voice-clone': '声音克隆',
  'audio-extract': '音频提取',
};

/** 生成型工具的可用画幅选项（params.aspectRatio） */
export const ASPECT_RATIO_OPTIONS = ['1:1', '4:3', '16:9', '9:16'] as const;

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

/**
 * MaterialNode 节点数据（窄化版）。
 *
 * 保留了画布图结构 + 连接校验 + 配置面板真正消费的字段，裁掉了预设
 * 服务绑定、输入槽位、角色设计等强业务字段。索引签名保留以兼容
 * React Flow 的 Record<string, unknown> 约束。
 */
export interface MaterialNodeData {
  // 索引签名：兼容 Record<string, unknown>（React Flow 要求）
  [key: string]: unknown;

  // === 基础信息 ===
  label: string;
  materialType: MaterialType;

  // === 输出内容 ===
  status: MaterialStatus;
  content?: string;
  mediaUrl?: string;
  taskId?: string;
  errorMessage?: string;
  generatedContent?: string;

  // === 生成配置 ===
  selectedTool: MaterialTool;
  prompt?: string;
  params: Record<string, unknown>;
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
