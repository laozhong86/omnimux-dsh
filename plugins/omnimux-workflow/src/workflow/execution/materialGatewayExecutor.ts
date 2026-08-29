/**
 * Material generator executor: dispatches generative material nodes through the
 * GenerationGateway seam (key: 'material:generate').
 *
 * All non-generative / pass-through logic has been cleanly separated into
 * `importExecutor.ts`.
 */

import { join } from 'node:path';
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
    key: 'material:generate',
    async execute(node, ctx): Promise<NodeOutput> {
      const data = node.data ?? {};
      const upstream = collectUpstream(ctx);

      // Generative: gateway submit -> await -> output
      const capability = readMaterialType(data);
      const prompt =
        readString(data, 'prompt')
        ?? readString(data, 'content')
        ?? upstream.text
        ?? '';

      // Upstream reference mapping (M4, hub seam schema)
      let image: string | undefined;
      let audio: string | undefined;
      if (upstream.mediaType === 'image') {
        image = upstream.mediaUrl;
      } else if (upstream.mediaType === 'audio' && capability === 'video') {
        audio = upstream.mediaUrl;
      } else if (upstream.mediaType === 'video') {
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
        voice: readString(data.params as Record<string, unknown> | undefined, 'voice'),
        style: readString(data.params as Record<string, unknown> | undefined, 'style'),
        instrumental: (data.params as Record<string, unknown> | undefined)?.instrumental === true,
        speed: typeof (data.params as Record<string, unknown> | undefined)?.speed === 'number'
          ? (data.params as Record<string, unknown>).speed as number
          : undefined,
        dest,
        signal: ctx.signal,
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
