/**
 * Ported (narrowed) from Gxgen
 * `apps/web/src/pages/CanvasEditor/utils/connectionConfig.ts`
 * (validated by the extraction spike): type matrix + isNodeConnectionValid
 * + input/output options. Group/result-node branches are cut for M1.
 */

import {
  MATERIAL_TOOLS,
  MATERIAL_TOOL_INPUT_TYPES,
  type MaterialType,
  type MaterialTool,
} from '../../types/materialNode';

// ==================== 输出选项 ====================

export interface OutputOption {
  key: string;
  label: string;
  icon?: string;
  description?: string;
}

export interface MaterialOutputOption {
  targetMaterialType: MaterialType;
  targetTool: MaterialTool | string;
  label: string;
  icon?: string;
  description?: string;
}

/**
 * MaterialNode 素材类型到输出选项的映射（原样保留）
 */
const MATERIAL_OUTPUT_OPTIONS: Record<MaterialType, MaterialOutputOption[]> = {
  text: [
    { targetMaterialType: 'text', targetTool: 'text-to-text', label: 'AI 文本生成', icon: 'TextGen', description: '基于文本生成新文本' },
    { targetMaterialType: 'image', targetTool: 'text-to-image', label: '文生图', icon: 'ImageGen', description: '根据文本生成图片' },
    { targetMaterialType: 'video', targetTool: 'video-generation', label: '视频生成', icon: 'VideoGen', description: '根据文本生成视频' },
    { targetMaterialType: 'audio', targetTool: 'text-to-audio', label: '音频生成', icon: 'AudioLines', description: '根据文本生成音效' },
  ],
  image: [
    { targetMaterialType: 'image', targetTool: 'image-to-image', label: '图生图', icon: 'ImageGen', description: '以图生图、风格迁移' },
    { targetMaterialType: 'video', targetTool: 'video-generation', label: '图生视频', icon: 'VideoGen', description: '图片转视频、动态效果' },
  ],
  video: [
    { targetMaterialType: 'text', targetTool: 'text-to-text', label: '文本', icon: 'TextGen', description: '基于视频生成文本' },
    { targetMaterialType: 'video', targetTool: 'video-generation', label: '视频', icon: 'VideoGen', description: '基于视频参考生成新视频' },
    { targetMaterialType: 'video', targetTool: 'motion-mimicry', label: '动作模仿', icon: 'PersonStanding', description: '动作迁移、姿态复制' },
  ],
  audio: [
    { targetMaterialType: 'video', targetTool: 'video-generation', label: '视频生成', icon: 'VideoGen', description: '为视频添加背景音乐' },
    { targetMaterialType: 'audio', targetTool: 'voice-clone', label: '声音克隆', icon: 'Mic', description: '复制音色、语音合成' },
    { targetMaterialType: 'text', targetTool: 'audio-transcription', label: '语音转文字', icon: 'TextGen', description: '语音识别、字幕生成' },
  ],
};

export function getOutputOptionsForMaterialNode(materialType: MaterialType): MaterialOutputOption[] {
  return MATERIAL_OUTPUT_OPTIONS[materialType] ?? [];
}

// ==================== 输入选项 ====================

export interface MaterialInputOption {
  inputMaterialType: MaterialType;
  label: string;
  icon?: string;
  description?: string;
}

const MATERIAL_INPUT_OPTIONS: Partial<Record<MaterialTool, MaterialInputOption[]>> = {
  'text-to-text': [
    { inputMaterialType: 'text', label: '文本', icon: 'TextGen', description: '添加文本作为上下文' },
    { inputMaterialType: 'image', label: '图片', icon: 'ImageGen', description: '添加参考图片' },
    { inputMaterialType: 'video', label: '视频', icon: 'VideoGen', description: '添加参考视频' },
  ],
  'text-to-image': [
    { inputMaterialType: 'text', label: '文本', icon: 'TextGen', description: '添加提示词' },
  ],
  'image-to-image': [
    { inputMaterialType: 'text', label: '文本', icon: 'TextGen', description: '添加提示词' },
    { inputMaterialType: 'image', label: '图片', icon: 'ImageGen', description: '添加参考图片' },
  ],
  'video-generation': [
    { inputMaterialType: 'text', label: '文本', icon: 'TextGen', description: '添加提示词' },
    { inputMaterialType: 'image', label: '图片', icon: 'ImageGen', description: '添加参考图片（自动切换模式）' },
    { inputMaterialType: 'video', label: '视频', icon: 'VideoGen', description: '添加参考视频（动作/镜头/构图）' },
    { inputMaterialType: 'audio', label: '音频', icon: 'AudioLines', description: '添加驱动音频或节奏参考' },
  ],
  'motion-mimicry': [
    { inputMaterialType: 'text', label: '文本', icon: 'TextGen', description: '添加提示词' },
    { inputMaterialType: 'image', label: '图片', icon: 'ImageGen', description: '添加人物图片' },
    { inputMaterialType: 'video', label: '视频', icon: 'VideoGen', description: '添加动作参考视频' },
  ],
  'text-to-audio': [
    { inputMaterialType: 'text', label: '文本', icon: 'TextGen', description: '添加提示词' },
  ],
  'voice-clone': [
    { inputMaterialType: 'text', label: '文本', icon: 'TextGen', description: '添加要朗读的文本' },
    { inputMaterialType: 'audio', label: '音频', icon: 'AudioLines', description: '添加声音样本' },
  ],
  'audio-transcription': [
    { inputMaterialType: 'audio', label: '音频', icon: 'AudioLines', description: '添加要转录的音频' },
  ],
};

export function getInputOptionsForMaterialNode(selectedTool: MaterialTool): MaterialInputOption[] {
  return MATERIAL_INPUT_OPTIONS[selectedTool] ?? [];
}

// ==================== 连接校验工具函数 ====================

interface NodeOutputInfo {
  nodeType: string;
  materialType?: MaterialType;
  materialTypes?: MaterialType[];
  hasOutput: boolean;
}

interface NodeInputRequirements {
  nodeType: string;
  selectedTool?: MaterialTool;
  acceptedTypes: MaterialType[];
}

export function getNodeOutputInfo(node: { type?: string; data?: Record<string, unknown> }): NodeOutputInfo {
  const nodeType = node.type ?? '';
  const data = node.data ?? {};

  if (nodeType === 'material') {
    const materialType = data.materialType as MaterialType | undefined;
    const status = data.status as string | undefined;
    const mediaUrl = data.mediaUrl as string | undefined;
    const content = data.content as string | undefined;
    const generatedContent = data.generatedContent as string | undefined;

    let hasOutput = false;
    if (materialType === 'text') {
      hasOutput = !!(content?.trim() || generatedContent);
    } else if (materialType === 'image') {
      hasOutput = !!mediaUrl; // 窄化：原实现还查 mediaSource/mediaFiles
    } else {
      hasOutput = !!mediaUrl || status === 'completed' || status === 'ready';
    }

    return { nodeType, materialType, hasOutput };
  }

  // 未知类型，默认允许连接
  return { nodeType, hasOutput: true };
}

/**
 * 提取节点输入需求（原样保留 material 分支核心逻辑：
 * 按「该素材类型全部工具」而非当前工具收集可接受输入，
 * 支持先连线后换工具的交互）
 */
function getNodeInputRequirements(node: { type?: string; data?: Record<string, unknown> }): NodeInputRequirements {
  const nodeType = node.type ?? '';
  const data = node.data ?? {};

  if (nodeType === 'material') {
    const selectedTool = data.selectedTool as MaterialTool | undefined;
    const materialType = data.materialType as MaterialType | undefined;

    const acceptedTypesSet = new Set<MaterialType>();
    if (materialType) {
      const availableTools = MATERIAL_TOOLS[materialType];
      if (availableTools) {
        for (const tool of availableTools) {
          const toolInputTypes = MATERIAL_TOOL_INPUT_TYPES[tool];
          if (toolInputTypes) {
            toolInputTypes.forEach((t) => acceptedTypesSet.add(t));
          }
        }
      }
    }

    return { nodeType, selectedTool, acceptedTypes: [...acceptedTypesSet] };
  }

  // 未知类型，默认接受所有类型
  return { nodeType, acceptedTypes: ['text', 'image', 'video', 'audio'] };
}

export function canNodeAcceptIncomingConnection(
  node: { type?: string; data?: Record<string, unknown> },
): boolean {
  return getNodeInputRequirements(node).acceptedTypes.length > 0;
}

/** 验证两个节点之间的连接是否有效（基于类型兼容性，原样保留） */
export function isNodeConnectionValid(
  sourceNode: { type?: string; data?: Record<string, unknown> },
  targetNode: { type?: string; data?: Record<string, unknown> },
): boolean {
  const sourceInfo = getNodeOutputInfo(sourceNode);
  const targetRequirements = getNodeInputRequirements(targetNode);

  if (sourceInfo.nodeType === 'group' && !sourceInfo.hasOutput) {
    return false;
  }

  if (targetRequirements.acceptedTypes.length === 0) {
    return false;
  }

  if (sourceInfo.materialTypes && sourceInfo.materialTypes.length > 0) {
    return sourceInfo.materialTypes.some((type) => targetRequirements.acceptedTypes.includes(type));
  }

  if (!sourceInfo.materialType) {
    return true;
  }

  return targetRequirements.acceptedTypes.includes(sourceInfo.materialType);
}
