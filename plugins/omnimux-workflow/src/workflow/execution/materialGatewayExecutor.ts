/**
 * Material executor (M3): dispatches generative material nodes through the
 * GenerationGateway seam. M4 runs on the OmniMux seam client when the
 * execution hub is reachable (mock gateway otherwise) — this executor is
 * gateway-agnostic.
 *
 * Behavior by tool class:
 * - generative tools (text-to-image, video-generation, …): resolve prompt +
 *   upstream reference input, submit via gateway.submit, poll via
 *   gateway.awaitTask, return media assets (or text for text capabilities).
 * - non-generative tools (import / text-editor): pass-through of node-owned
 *   content and upstream outputs (M1 semantics, now upstream-aware).
 */

import { join } from 'node:path';
import { localFileMediaUrl } from '../../shared/localMedia.ts';
import type { GenerationGateway } from '../seam/gateway';
import type {
  ExecutionContext,
  NodeExecutor,
  NodeOutput,
} from '../executors/registry';

/** Deterministic per-node fail switch for the M3 mock path (node data flag). */
function readMockFail(nodeData: Record<string, unknown>): boolean {
  return nodeData.mockFail === true;
}

function readString(source: Record<string, unknown> | undefined, key: string): string | undefined {
  const value = source?.[key];
  return typeof value === 'string' && value.trim().length > 0 ? value : undefined;
}

function readDuration(data: Record<string, unknown>): number | undefined {
  const fromParams = (data.params as Record<string, unknown> | undefined)?.duration;
  if (typeof fromParams === 'number') return fromParams;
  if (typeof data.duration === 'number') return data.duration;
  return undefined;
}

function readMaterialType(nodeData: Record<string, unknown>): 'text' | 'image' | 'video' | 'audio' {
  const value = nodeData.materialType;
  if (value === 'image' || value === 'video' || value === 'audio') return value;
  return 'text';
}

function isGenerativeTool(
  tool: string | undefined,
  data: Record<string, unknown>,
  upstream: { text?: string; mediaUrl?: string },
): boolean {
  if (typeof tool === 'string' && tool !== 'import' && tool !== 'text-editor') {
    return true;
  }
  // If the node has an explicit prompt, it is intended to generate via model
  const prompt = readString(data, 'prompt');
  if (prompt && prompt.trim().length > 0) {
    return true;
  }
  // If the node has an explicit model selected and has upstream input or content
  const model = readString(data.params as Record<string, unknown> | undefined, 'model');
  if (model && (upstream.text || upstream.mediaUrl || readString(data, 'content'))) {
    return true;
  }
  return false;
}

function extFor(capability: 'text' | 'image' | 'video' | 'audio'): string {
  if (capability === 'image') return 'svg';
  if (capability === 'video') return 'mp4';
  if (capability === 'audio') return 'mp3';
  return 'txt';
}

/** First upstream output carrying text, plus first upstream media asset. */
function collectUpstream(ctx: ExecutionContext): {
  text?: string;
  mediaUrl?: string;
  mediaType?: 'image' | 'video' | 'audio';
} {
  for (const output of ctx.upstreamOutputs.values()) {
    if (output.text && output.text.trim()) {
      return { text: output.text };
    }
  }
  for (const output of ctx.upstreamOutputs.values()) {
    const asset = output.mediaAssets?.[0];
    if (asset) {
      return { mediaUrl: asset.url, mediaType: asset.type };
    }
  }
  return {};
}

export function createMaterialGatewayExecutor(opts: {
  gateway: GenerationGateway;
}): NodeExecutor {
  const { gateway } = opts;

  return {
    key: 'material',
    async execute(node, ctx): Promise<NodeOutput> {
      const data = node.data ?? {};
      const tool = readString(data, 'selectedTool');
      const upstream = collectUpstream(ctx);

      // ---- Non-generative: pass-through (node-owned / upstream content) ----
      if (!isGenerativeTool(tool, data, upstream)) {
        const materialType = readMaterialType(data);
        const type = materialType === 'video' ? 'video' : materialType === 'audio' ? 'audio' : 'image';
        const realPath = readString(data, 'realPath');
        if (realPath) {
          return { mediaAssets: [{ type, url: localFileMediaUrl(realPath) }] };
        }
        const nodeMediaUrl = readString(data, 'mediaUrl');
        if (nodeMediaUrl && !nodeMediaUrl.startsWith('blob:')) {
          return { mediaAssets: [{ type, url: nodeMediaUrl }] };
        }
        const text = readString(data, 'content') ?? upstream.text;
        return { text };
      }

      // ---- Generative: gateway submit -> await -> output ----
      const capability = readMaterialType(data);
      const prompt =
        readString(data, 'prompt')
        ?? readString(data, 'content')
        ?? upstream.text
        ?? '';

      // ---- Upstream reference mapping (M4, hub seam schema) ----
      // The hub media seams accept `image` (reference picture) and `audio`
      // (reference audio); textComplete accepts `image` on vision models.
      // There is NO video-reference field yet — a video upstream on an
      // image/video node is intentionally dropped (never faked as consumed);
      // see README「已知限制」and docs/m4-hub-seam-research.md §7.
      let image: string | undefined;
      let audio: string | undefined;
      if (upstream.mediaType === 'image') {
        image = upstream.mediaUrl;
      } else if (upstream.mediaType === 'audio' && capability === 'video') {
        audio = upstream.mediaUrl;
      } else if (upstream.mediaType === 'video') {
        // Degrade: first-frame-style video reference is not expressible on
        // the current seam. Logged + surfaced in the node UI hint.
        ctx.reportProgress?.(15, '视频参考输入暂不支持（等待执行中枢扩展），已忽略');
      }

      const dest = join(ctx.mediaDir, `${node.id}.${extFor(capability)}`);
      ctx.reportProgress?.(10, '已提交生成任务');

      const submitted = await gateway.submit({
        capability,
        prompt,
        image,
        audio,
        duration: readDuration(data),
        model: readString(data.params as Record<string, unknown> | undefined, 'model'),
        resolution: readString(data.params as Record<string, unknown> | undefined, 'resolution'),
        aspectRatio: readString(data.params as Record<string, unknown> | undefined, 'aspectRatio'),
        dest,
        signal: ctx.signal,
        // Mock-gateway control flag (deterministic failure injection for M3).
        mockFail: readMockFail(data),
      });

      ctx.reportProgress?.(40, '生成中…');
      const settled = await gateway.awaitTask(submitted.taskId, dest, ctx.signal);
      ctx.reportProgress?.(90, '生成完成');

      if (capability === 'text') {
        return { text: settled.text ?? `[gateway:${capability}] ${prompt}` };
      }

      const url = ctx.toPublicUrl ? ctx.toPublicUrl(settled.url) : settled.url;
      return {
        mediaAssets: [{ type: capability as 'image' | 'video' | 'audio', url }],
      };
    },
  };
}
