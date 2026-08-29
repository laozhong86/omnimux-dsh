/**
 * Ported (narrowed) from Gxgen `apps/web/src/types/materialNode.ts` +
 * `packages/shared/src/canvas/materialTypes.ts` — validated by the
 * extraction spike (research/canvas-spike/SPIKE-REPORT.md).
 *
 * The `@gxg/shared/canvas` module (376 lines, zero deps) was inlined
 * verbatim below; MaterialNodeData is narrowed to the fields the canvas
 * graph + connection validation actually consume.
 */

import type { MaterialType } from '../canvasTypes';

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
  image: 'text-to-image',
  video: 'video-generation',
  audio: 'text-to-audio',
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

export type MaterialStatus = 'empty' | 'ready' | 'generating' | 'completed' | 'failed' | 'offline';
export type NodeFailStrategy = 'abort' | 'skip';
export type NodeKind = 'generate' | 'import';

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
  /** 不可变身份判别：创建时确定，只读。缺省由 selectedTool 推导（兼容老数据）。 */
  nodeKind?: NodeKind;

  // === 输出内容 ===
  status: MaterialStatus;
  content?: string;
  mediaUrl?: string;
  /** Absolute local source path for imported media (index, never a copy). */
  realPath?: string;
  originalName?: string;
  fileSize?: number;
  mimeType?: string;
  isMissing?: boolean;
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

/** 创建默认的 MaterialNodeData（窄化版）。
 *
 * label 默认为空串：NodeHeader 在 label 为空时回退到 i18n 字典的
 * `node.type.<materialType>` 文案，节点类型名可随宿主语言 live 切换；
 * 用户双击改名后 label 落为持久化用户数据，不再跟随语言。
 */
export function createDefaultMaterialNodeData(
  materialType: MaterialType,
  overrides?: Partial<MaterialNodeData>,
): MaterialNodeData {
  return {
    label: '',
    materialType,
    status: 'empty',
    selectedTool: DEFAULT_MATERIAL_TOOL[materialType],
    params: {},
    failStrategy: 'abort',
    ...overrides,
  };
}

/**
 * 全仓唯一节点身份判定真源：
 * 1. 显式 nodeKind === 'generate' | 'import' 优先
 * 2. 老数据 / 未标注节点兜底：selectedTool === 'import' 视为导入节点，其余为生成节点
 *
 * 关键规则：身份证据优先于行为残留 —— 标为 import 的节点即使残留 prompt，
 * 也绝不走模型生成（从根本上杜绝覆盖 realPath 与误烧钱）。
 */
export function resolveNodeKind(data: {
  nodeKind?: unknown;
  selectedTool?: unknown;
  realPath?: unknown;
}): NodeKind {
  if (data.nodeKind === 'generate' || data.nodeKind === 'import') {
    return data.nodeKind;
  }
  if (data.selectedTool === 'import') {
    return 'import';
  }
  return 'generate';
}

/**
 * @deprecated 请改用 `resolveNodeKind(data) === 'generate'`。
 * 保留此函数仅供老代码兼容，内部委托给 resolveNodeKind。
 */
export function isGenerativeTool(tool: MaterialTool): boolean {
  return resolveNodeKind({ selectedTool: tool }) === 'generate';
}
