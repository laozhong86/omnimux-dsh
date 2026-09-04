import type { ConversationAttachment } from './types.ts';

const KIND_LABELS: Record<string, string> = {
  table: '表格',
  video: '视频',
  image: '图像',
  audio: '音频',
  document: '文档',
  canvas: '工作流',
  asset: '资产',
  product: '产品',
  inspiration: '灵感',
};

/**
 * 格式化相对路径为标准 DSH @引用语法
 */
export function formatPathReference(relativePath: string): string {
  if (!relativePath) return '';
  // 规范化 POSIX 分隔符并去除前导斜杠
  const normalized = relativePath.replace(/\\/g, '/').replace(/^\/+/, '');
  // 如果路径包含空格，用引号包裹 @"path with spaces"
  if (/\s/.test(normalized)) {
    return `@"${normalized}"`;
  }
  return `@${normalized}`;
}

/**
 * 组装单个附件的 Markdown 描述行
 */
function attachmentPaths(att: ConversationAttachment): string[] {
  const extra = att.metadata && Array.isArray(att.metadata.files)
    ? att.metadata.files.filter((row): row is string => typeof row === 'string' && row.length > 0)
    : [];
  if (extra.length > 0) return extra;
  return att.relativePath ? [att.relativePath] : [];
}

export function formatAttachmentLine(att: ConversationAttachment): string {
  const kindLabel = KIND_LABELS[att.kind] || '文件';
  const ext = att.extension || 'FILE';
  const durationPart = att.duration ? `, ${att.duration}` : '';
  const paths = attachmentPaths(att);
  if (paths.length <= 1) {
    const pathRef = formatPathReference(paths[0] || att.relativePath);
    return `- [${kindLabel}] ${att.title} (\`${ext}\`${durationPart}): ${pathRef}`;
  }
  const lines = paths.map((rel) => `  - ${formatPathReference(rel)}`);
  return `- [${kindLabel}] ${att.title} (\`${ext}\`${durationPart}):\n${lines.join('\n')}`;
}

/**
 * 组装结构化上下文附着块
 */
export function buildAttachedContextBlock(attachments: readonly ConversationAttachment[]): string {
  if (!attachments || attachments.length === 0) {
    return '';
  }

  const lines = attachments.map(formatAttachmentLine);
  return `\n\n---\n### 会话关联上下文 (Attached Context):\n${lines.join('\n')}`;
}

/**
 * 将用户 Prompt 正文与关联附件组合为最终提交内容
 */
export function assemblePromptWithAttachments(
  userPrompt: string,
  attachments: readonly ConversationAttachment[]
): string {
  const trimmed = userPrompt || '';
  if (!attachments || attachments.length === 0) {
    return trimmed;
  }

  const contextBlock = buildAttachedContextBlock(attachments);
  return `${trimmed}${contextBlock}`;
}
