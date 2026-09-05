/**
 * Material generator executor: dispatches generative material nodes through the
 * GenerationGateway seam (key: 'material:generate').
 *
 * All non-generative / pass-through logic has been cleanly separated into
 * `importExecutor.ts`.
 */

import { join } from 'node:path';
import { localFilePathFromUrl } from '../../shared/localMedia.ts';
import type { GenerationGateway, ReferenceAssetPayload } from '../seam/gateway';
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

interface UpstreamMultiModalData {
  text?: string;
  references: ReferenceAssetPayload[];
  audioTrack?: ReferenceAssetPayload;
}

/** Upstream output: collects text, all media references and audio tracks without short-circuiting. */
function collectUpstreamMultiModal(ctx: ExecutionContext): UpstreamMultiModalData {
  let text: string | undefined;
  const references: ReferenceAssetPayload[] = [];
  let audioTrack: ReferenceAssetPayload | undefined;

  for (const output of ctx.upstreamOutputs.values()) {
    if (!text && output.text && output.text.trim()) {
      text = output.text.trim();
    }
    if (Array.isArray(output.mediaAssets) && output.mediaAssets.length > 0) {
      for (const asset of output.mediaAssets) {
        if (!asset || !asset.type) continue;
        const pathOrUrl = resolveMediaSourcePath(asset, ctx.mediaDir) || asset.url;
        if (!pathOrUrl) continue;

        if (asset.type === 'audio') {
          if (!audioTrack) {
            audioTrack = {
              role: 'audio_track',
              type: 'audio',
              pathOrUrl,
            };
          }
        } else {
          references.push({
            role: 'reference',
            type: asset.type,
            pathOrUrl,
          });
        }
      }
    }
  }
  return { text, references, audioTrack };
}

export function createMaterialGatewayExecutor(opts: {
  gateway: GenerationGateway;
}): NodeExecutor {
  const { gateway } = opts;

  return {
    key: 'material:generate',
    async execute(node, ctx): Promise<NodeOutput> {
      const data = node.data ?? {};
      const upstream = collectUpstreamMultiModal(ctx);

      // Generative: gateway submit -> await -> output
      const capability = readMaterialType(data);
      const prompt =
        readString(data, 'prompt')
        ?? readString(data, 'content')
        ?? upstream.text
        ?? '';

      // Upstream reference mapping (multi-modal references + audioTrack + backward compatibility)
      const references = upstream.references;
      const audioTrack = upstream.audioTrack;
      const image = references.find((r) => r.type === 'image')?.pathOrUrl || undefined;
      const audio = audioTrack?.pathOrUrl || undefined;

      const dest = join(ctx.mediaDir, `${node.id}.${extFor(capability)}`);
      ctx.reportProgress?.(10, '已提交生成任务');

      const submitted = await gateway.submit({
        capability,
        prompt,
        image,
        audio,
        references: references.length > 0 ? references : undefined,
        audioTrack,
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
            ...(persisted.mimeType ? { mimeType: persisted.mimeType } : {}),
            ...(persisted.sizeBytes != null ? { sizeBytes: persisted.sizeBytes } : {}),
            ...(persisted.durationSec != null ? { durationSec: persisted.durationSec } : {}),
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
