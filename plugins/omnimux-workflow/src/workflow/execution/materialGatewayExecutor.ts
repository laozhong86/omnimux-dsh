/**
 * Material generator executor: dispatches generative material nodes through the
 * GenerationGateway seam (key: 'material:generate').
 *
 * All non-generative / pass-through logic has been cleanly separated into
 * `importExecutor.ts`.
 */

import { join } from 'node:path';
import { localFilePathFromUrl } from '../../shared/localMedia.ts';
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
  if (capability === 'image') return 'png';
  if (capability === 'video') return 'mp4';
  if (capability === 'audio') return 'mp3';
  return 'txt';
}

function resolveMediaSourcePath(
  asset: { url?: string; path?: string; relativePath?: string } | undefined,
  mediaDir: string,
): string | undefined {
  if (!asset) return undefined;
  if (typeof asset.path === 'string' && asset.path.trim().length > 0) {
    return asset.path.trim();
  }
  const url = typeof asset.url === 'string' ? asset.url.trim() : '';
  if (!url) return undefined;
  if (url.startsWith('data:') || /^https?:\/\//i.test(url)) {
    return url;
  }
  const localPath = localFilePathFromUrl(url);
  if (localPath) {
    return localPath;
  }
  const marker = '/media/';
  const index = url.indexOf(marker);
  if (index !== -1 && url.startsWith('/')) {
    return join(mediaDir, url.slice(index + marker.length));
  }
  return url;
}

interface UpstreamData {
  text?: string;
  mediaUrl?: string;
  mediaPath?: string;
  mediaType?: 'image' | 'video' | 'audio';
}

/** Upstream output: collects text and first media asset without mutual exclusion. */
function collectUpstream(ctx: ExecutionContext): UpstreamData {
  let text: string | undefined;
  let mediaUrl: string | undefined;
  let mediaPath: string | undefined;
  let mediaType: 'image' | 'video' | 'audio' | undefined;

  for (const output of ctx.upstreamOutputs.values()) {
    if (!text && output.text && output.text.trim()) {
      text = output.text.trim();
    }
    if (!mediaUrl && Array.isArray(output.mediaAssets) && output.mediaAssets.length > 0) {
      const asset = output.mediaAssets[0];
      if (asset && asset.type) {
        mediaType = asset.type;
        mediaUrl = asset.url;
        mediaPath = resolveMediaSourcePath(asset, ctx.mediaDir);
      }
    }
  }
  return { text, mediaUrl, mediaPath, mediaType };
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
        image = upstream.mediaPath || upstream.mediaUrl;
      } else if (upstream.mediaType === 'audio' && capability === 'video') {
        audio = upstream.mediaPath || upstream.mediaUrl;
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

      if (ctx.persistGenerated) {
        const persisted = await ctx.persistGenerated({
          nodeId: node.id,
          nodeType: node.type,
          tmpAbs: dest,
          materialType: capability,
          prompt,
          modelId: readString(data.params as Record<string, unknown> | undefined, 'model'),
        });
        return {
          relativePath: persisted.relativePath,
          assetId: persisted.assetId,
          mediaAssets: [{
            type: capability,
            url: persisted.url,
            relativePath: persisted.relativePath,
            assetId: persisted.assetId,
          }],
        };
      }

      const url = ctx.toPublicUrl ? ctx.toPublicUrl(settled.url) : settled.url;
      return {
        mediaAssets: [{ type: capability as 'image' | 'video' | 'audio', url }],
      };
    },
  };
}
