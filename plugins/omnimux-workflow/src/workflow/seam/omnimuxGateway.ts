/**
 * ★ M4: OmniMuxSeamClient — real GenerationGateway over the execution hub
 * seams (`docs/contracts/hub.md`).
 *
 * The canvas still never opens sockets itself: every generation goes through
 * `ctx.get('videoGenerate' | 'imageGenerate' | 'textComplete')` and the hub
 * owns keys, HTTP, polling and the download to `dest`. This module only maps
 * node data onto the seam request shape and back.
 *
 * Contract highlights (verified against hub source, see
 * docs/m4-hub-seam-research.md):
 *  - media seam: `execute({ prompt, dest, image?, duration?, speech?, audio?,
 *    model?, taskId?, wait?, signal? })` → `{ mode, taskId, url? }`;
 *    `wait:false` submits only, `{ dest, taskId }` polls + downloads.
 *  - textComplete: `execute({ prompt, model?, image?, system?, maxTokens?,
 *    signal? })` → `{ mode:'live', model, text }` (no taskId mechanism).
 *  - errors carry `{ code, message }` (OmnimuxError) and are re-thrown as
 *    SeamGatewayError so node badges show `[omnimux:<code>] message`.
 *
 * Concurrency: a counting semaphore caps in-flight seam calls (default 2,
 * `OMNIMUX_WORKFLOW_MAX_SEAM_CONCURRENCY`) so a wide DAG cannot trip hub-side
 * rate limits.
 */

import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { randomUUID } from 'node:crypto';
import type {
  AwaitTaskResult,
  GenerationCapability,
  GenerationGateway,
  SubmitRequest,
  SubmitResult,
} from './gateway';
import type { ModelParameterSchema } from '../../shared/api';
import { createWorkflowLogger } from '../execution/logger';

const LOG_TAG = 'OmniMuxSeamClient';

const logger = createWorkflowLogger(LOG_TAG);

/** Seam names exposed by the execution hub (docs/contracts/hub.md). */
export type SeamName = 'videoGenerate' | 'imageGenerate' | 'textComplete';

/**
 * Resolves a seam by name at call time (cordis `ctx.get`). Lazy by design:
 * the hub may be mounted after this plugin.
 */
export type SeamGetter = (name: string) => unknown;

/** Shape of the hub-provided seam API object (only what we consume). */
interface SeamApi {
  execute(req: Record<string, unknown>): Promise<SeamExecuteResult>;
}

/** Envelope returned by the hub media seams. */
interface SeamExecuteResult {
  mode?: string;
  taskId?: string | null;
  url?: string | null;
  /** textComplete only. */
  model?: string;
  text?: string;
}

/** Error thrown by the hub (OmnimuxError shape) re-wrapped for node badges. */
export class SeamGatewayError extends Error {
  readonly code: string;

  constructor(code: string, message: string) {
    super(`[omnimux:${code}] ${message}`);
    this.name = 'SeamGatewayError';
    this.code = code;
  }
}

export interface OmniumuxSeamClientOptions {
  /** cordis seam lookup (usually `(name) => ctx.get(name)`). */
  getSeam: SeamGetter;
  /** Env overlay source (tests); defaults to process.env. */
  env?: NodeJS.ProcessEnv;
  /** Max concurrent in-flight seam calls (default 2; env overlay below). */
  maxConcurrency?: number;
}

/** Env knob for the seam concurrency cap. */
export const SEAM_CONCURRENCY_ENV = 'OMNIMUX_WORKFLOW_MAX_SEAM_CONCURRENCY';

export const DEFAULT_SEAM_CONCURRENCY = 2;

// ============================================================================
// Capability catalog & dynamic parameter schemas
// ============================================================================

/** Text whitelist: filtered to core tier models (Claude 4.6, Gemini 3.1 Pro Preview, Gemini 3.7 Flash, GPT-5.5, DeepSeek 4 Flash). */
const TEXT_MODEL_IDS: ReadonlyArray<string> = [
  'claude-opus-4-6',
  'gemini-3.1-pro-preview',
  'gemini-3.7-flash',
  'gpt-5.5',
  'deepseek-v4-flash-vision-exp',
] as const;

const MODEL_DISPLAY_NAMES: Record<string, string> = {
  'claude-opus-4-6': 'Claude 4.6',
  'gemini-3.1-pro-preview': 'Gemini 3.1 Pro Preview',
  'gemini-3.7-flash': 'Gemini 3.7 Flash',
  'gpt-5.5': 'GPT-5.5',
  'deepseek-v4-flash-vision-exp': 'DeepSeek 4 Flash',
  'deepseek-v4-flash': 'DeepSeek 4 Flash',
};

const RATIO_OPTS = {
  auto: { value: 'auto', label: '自适应' },
  r1_1: { value: '1:1', label: '1:1' },
  r16_9: { value: '16:9', label: '16:9' },
  r9_16: { value: '9:16', label: '9:16' },
  r4_3: { value: '4:3', label: '4:3' },
  r3_4: { value: '3:4', label: '3:4' },
  r21_9: { value: '21:9', label: '21:9' },
  r3_2: { value: '3:2', label: '3:2' },
  r2_3: { value: '2:3', label: '2:3' },
  r9_21: { value: '9:21', label: '9:21' },
};

export const IMAGE_MODEL_SPECS: ReadonlyArray<{
  id: string;
  label: string;
  badge?: string;
  subtitle?: string;
  family?: string;
  parameters?: ModelParameterSchema;
}> = [
  {
    id: 'nanobanana-2',
    label: 'NanoBanana 2',
    badge: 'Yearly -20%',
    subtitle: 'auto-4K',
    family: 'nanobanana',
    parameters: {
      aspectRatio: {
        options: [RATIO_OPTS.auto, RATIO_OPTS.r1_1, RATIO_OPTS.r4_3, RATIO_OPTS.r3_4, RATIO_OPTS.r16_9, RATIO_OPTS.r9_16],
        defaultValue: '16:9',
      },
      resolution: {
        options: [{ value: 'auto-4K', label: 'auto-4K' }, { value: '2K', label: '2K' }, { value: '1K', label: '1K' }],
        defaultValue: 'auto-4K',
      },
    },
  },
  {
    id: 'nanobanana-pro',
    label: 'NanoBanana Pro',
    badge: 'Yearly -20%',
    subtitle: 'auto-4K',
    family: 'nanobanana',
    parameters: {
      aspectRatio: {
        options: [RATIO_OPTS.auto, RATIO_OPTS.r1_1, RATIO_OPTS.r4_3, RATIO_OPTS.r3_4, RATIO_OPTS.r16_9, RATIO_OPTS.r9_16],
        defaultValue: '16:9',
      },
      resolution: {
        options: [{ value: 'auto-4K', label: 'auto-4K' }, { value: '2K', label: '2K' }, { value: '1K', label: '1K' }],
        defaultValue: 'auto-4K',
      },
    },
  },
  {
    id: 'seedream-5.0-pro',
    label: 'Seedream 5.0 Pro',
    badge: 'Yearly -20%',
    subtitle: '1K-2K',
    family: 'seedream',
    parameters: {
      aspectRatio: {
        options: [
          RATIO_OPTS.auto,
          RATIO_OPTS.r1_1,
          RATIO_OPTS.r4_3,
          RATIO_OPTS.r3_4,
          RATIO_OPTS.r16_9,
          RATIO_OPTS.r9_16,
          RATIO_OPTS.r21_9,
          RATIO_OPTS.r3_2,
          RATIO_OPTS.r2_3,
        ],
        defaultValue: '16:9',
      },
      resolution: {
        options: [{ value: '2K', label: '2K' }, { value: '1K', label: '1K' }],
        defaultValue: '2K',
      },
    },
  },
  {
    id: 'seedream-4.5',
    label: 'Seedream 4.5',
    badge: 'Yearly -20%',
    subtitle: '2K-4K',
    family: 'seedream',
    parameters: {
      aspectRatio: {
        options: [
          RATIO_OPTS.auto,
          RATIO_OPTS.r1_1,
          RATIO_OPTS.r4_3,
          RATIO_OPTS.r3_4,
          RATIO_OPTS.r16_9,
          RATIO_OPTS.r9_16,
          RATIO_OPTS.r21_9,
          RATIO_OPTS.r3_2,
          RATIO_OPTS.r2_3,
        ],
        defaultValue: '16:9',
      },
      resolution: {
        options: [{ value: '4K', label: '4K' }, { value: '2K', label: '2K' }],
        defaultValue: '2K',
      },
    },
  },
  {
    id: 'midjourney-8.1',
    label: 'Midjourney 8.1',
    badge: 'Yearly -20%',
    subtitle: '2K',
    family: 'midjourney',
    parameters: {
      aspectRatio: {
        options: [
          RATIO_OPTS.auto,
          RATIO_OPTS.r1_1,
          RATIO_OPTS.r4_3,
          RATIO_OPTS.r3_4,
          RATIO_OPTS.r16_9,
          RATIO_OPTS.r9_16,
          RATIO_OPTS.r21_9,
          RATIO_OPTS.r3_2,
          RATIO_OPTS.r2_3,
          RATIO_OPTS.r9_21,
        ],
        defaultValue: '16:9',
      },
      resolution: {
        options: [{ value: '2K', label: '2K' }, { value: '1080P', label: '1080P' }],
        defaultValue: '2K',
      },
    },
  },
  {
    id: 'midjourney-7',
    label: 'Midjourney 7',
    badge: 'Yearly -20%',
    subtitle: '1080P',
    family: 'midjourney',
    parameters: {
      aspectRatio: {
        options: [
          RATIO_OPTS.auto,
          RATIO_OPTS.r1_1,
          RATIO_OPTS.r4_3,
          RATIO_OPTS.r3_4,
          RATIO_OPTS.r16_9,
          RATIO_OPTS.r9_16,
          RATIO_OPTS.r21_9,
          RATIO_OPTS.r3_2,
          RATIO_OPTS.r2_3,
        ],
        defaultValue: '16:9',
      },
      resolution: {
        options: [{ value: '1080P', label: '1080P' }, { value: '720P', label: '720P' }],
        defaultValue: '1080P',
      },
    },
  },
  {
    id: 'midjourney-niji-7',
    label: 'Midjourney Niji 7',
    badge: 'Yearly -20%',
    subtitle: '1080P',
    family: 'midjourney',
    parameters: {
      aspectRatio: {
        options: [
          RATIO_OPTS.auto,
          RATIO_OPTS.r1_1,
          RATIO_OPTS.r4_3,
          RATIO_OPTS.r3_4,
          RATIO_OPTS.r16_9,
          RATIO_OPTS.r9_16,
          RATIO_OPTS.r21_9,
          RATIO_OPTS.r3_2,
          RATIO_OPTS.r2_3,
        ],
        defaultValue: '16:9',
      },
      resolution: {
        options: [{ value: '1080P', label: '1080P' }],
        defaultValue: '1080P',
      },
    },
  },
  {
    id: 'gpt-image-2',
    label: 'GPT Image 2',
    badge: 'Yearly -20%',
    subtitle: '1k-4k',
    family: 'openai',
    parameters: {
      aspectRatio: {
        options: [RATIO_OPTS.auto, RATIO_OPTS.r1_1, RATIO_OPTS.r16_9, RATIO_OPTS.r9_16],
        defaultValue: '16:9',
      },
      resolution: {
        options: [{ value: '1024x1024', label: '1K' }, { value: '1792x1024', label: '2K' }],
        defaultValue: '1792x1024',
      },
      quality: {
        options: [{ value: 'standard', label: '标准' }, { value: 'hd', label: '高清 HD' }],
        defaultValue: 'standard',
      },
    },
  },
] as const;

export const VIDEO_MODEL_SPECS: ReadonlyArray<{
  id: string;
  label: string;
  badge?: string;
  subtitle?: string;
  family?: string;
  parameters?: ModelParameterSchema;
}> = [
  {
    id: 'kling-o1',
    label: 'Kling O1',
    subtitle: '1080P · ⏱ 3-10s',
    family: 'kling',
    parameters: {
      aspectRatio: {
        options: [RATIO_OPTS.r16_9, RATIO_OPTS.r9_16, RATIO_OPTS.r1_1],
        defaultValue: '16:9',
      },
      duration: {
        options: [
          { value: 5, label: '5s' },
          { value: 10, label: '10s' },
        ],
        defaultValue: 5,
        unit: 's',
      },
      resolution: {
        options: [{ value: '1080P', label: '1080P' }],
        defaultValue: '1080P',
      },
      sound: {
        supported: false,
        defaultValue: false,
      },
    },
  },
  {
    id: 'kling-o3',
    label: 'Kling O3',
    subtitle: '4K · ⏱ 3-15s · 🔊',
    family: 'kling',
    parameters: {
      aspectRatio: {
        options: [RATIO_OPTS.r16_9, RATIO_OPTS.r9_16, RATIO_OPTS.r1_1],
        defaultValue: '16:9',
      },
      duration: {
        options: [
          { value: 5, label: '5s' },
          { value: 10, label: '10s' },
          { value: 15, label: '15s' },
        ],
        defaultValue: 5,
        unit: 's',
      },
      resolution: {
        options: [{ value: '1080P', label: '1080P' }, { value: '4K', label: '4K' }],
        defaultValue: '1080P',
      },
      sound: {
        supported: true,
        defaultValue: true,
      },
    },
  },
  {
    id: 'kling-avatar',
    label: 'Kling Avatar',
    family: 'kling',
    parameters: {
      aspectRatio: {
        options: [RATIO_OPTS.r16_9, RATIO_OPTS.r9_16, RATIO_OPTS.r1_1],
        defaultValue: '16:9',
      },
      duration: {
        options: [
          { value: 5, label: '5s' },
          { value: 10, label: '10s' },
        ],
        defaultValue: 5,
        unit: 's',
      },
    },
  },
  {
    id: 'kling-motion-control',
    label: 'Kling Motion Control',
    subtitle: '1080P',
    family: 'kling',
    parameters: {
      aspectRatio: {
        options: [RATIO_OPTS.r16_9, RATIO_OPTS.r9_16, RATIO_OPTS.r1_1],
        defaultValue: '16:9',
      },
      duration: {
        options: [
          { value: 5, label: '5s' },
          { value: 10, label: '10s' },
        ],
        defaultValue: 5,
        unit: 's',
      },
      resolution: {
        options: [{ value: '1080P', label: '1080P' }],
        defaultValue: '1080P',
      },
    },
  },
  {
    id: 'wan-2.6',
    label: 'Wan 2.6',
    subtitle: '720P-1080P · ⏱ 5-15s · 🔊',
    family: 'wan',
    parameters: {
      aspectRatio: {
        options: [RATIO_OPTS.r16_9, RATIO_OPTS.r9_16, RATIO_OPTS.r1_1, RATIO_OPTS.r4_3, RATIO_OPTS.r3_4],
        defaultValue: '16:9',
      },
      duration: {
        options: [
          { value: 5, label: '5s' },
          { value: 10, label: '10s' },
          { value: 15, label: '15s' },
        ],
        defaultValue: 5,
        unit: 's',
      },
      resolution: {
        options: [{ value: '1080P', label: '1080P' }, { value: '720P', label: '720P' }],
        defaultValue: '1080P',
      },
      sound: {
        supported: true,
        defaultValue: false,
      },
    },
  },
  {
    id: 'veo-3.1-fast',
    label: 'Veo3.1 Fast',
    subtitle: '720p-1080p · ⏱ 8s',
    family: 'veo',
    parameters: {
      aspectRatio: {
        options: [RATIO_OPTS.r16_9, RATIO_OPTS.r9_16],
        defaultValue: '16:9',
      },
      duration: {
        options: [
          { value: 5, label: '5s' },
          { value: 8, label: '8s' },
        ],
        defaultValue: 8,
        unit: 's',
      },
      resolution: {
        options: [{ value: '1080P', label: '1080P' }, { value: '720P', label: '720P' }],
        defaultValue: '1080P',
      },
    },
  },
  {
    id: 'veo-3.1',
    label: 'Veo3.1',
    subtitle: '720p-1080p · ⏱ 8s',
    family: 'veo',
    parameters: {
      aspectRatio: {
        options: [RATIO_OPTS.r16_9, RATIO_OPTS.r9_16],
        defaultValue: '16:9',
      },
      duration: {
        options: [
          { value: 5, label: '5s' },
          { value: 8, label: '8s' },
        ],
        defaultValue: 8,
        unit: 's',
      },
      resolution: {
        options: [{ value: '1080P', label: '1080P' }, { value: '720P', label: '720P' }],
        defaultValue: '1080P',
      },
    },
  },
] as const;

/** Hub media route defaults (src/media/route.js DEFAULT_MEDIA.models). */
const DEFAULT_VIDEO_MODEL = 'seedance-2-0-fast';
const DEFAULT_IMAGE_MODEL = 'gpt-image-2';

function envString(env: NodeJS.ProcessEnv, key: string): string | undefined {
  const value = env[key];
  return typeof value === 'string' && value.trim().length > 0 ? value.trim() : undefined;
}

function labelOf(id: string): { id: string; label: string } {
  return { id, label: MODEL_DISPLAY_NAMES[id] ?? id };
}

// ============================================================================
// Semaphore
// ============================================================================

/** Counting semaphore: acquire() resolves with a release() callback. */
function createSemaphore(limit: number): { acquire(): Promise<() => void> } {
  let active = 0;
  const waiters: Array<() => void> = [];

  const release = (): void => {
    active -= 1;
    const next = waiters.shift();
    if (next) {
      active += 1;
      next();
    }
  };

  return {
    acquire(): Promise<() => void> {
      if (active < limit) {
        active += 1;
        return Promise.resolve(release);
      }
      return new Promise<(() => void)>((resolve) => {
        waiters.push(() => resolve(release));
      });
    },
  };
}

// ============================================================================
// Task bookkeeping
// ============================================================================

interface MediaTaskRecord {
  kind: 'media';
  capability: 'image' | 'video';
  /** Hub task id (used for poll + download resume). */
  hubTaskId: string;
}

interface TextTaskRecord {
  kind: 'text';
  prompt: string;
  model?: string;
  image?: string;
}

type TaskRecord = MediaTaskRecord | TextTaskRecord;

// ============================================================================
// Client
// ============================================================================

function isSeamApi(value: unknown): value is SeamApi {
  return (
    typeof value === 'object'
    && value !== null
    && typeof (value as SeamApi).execute === 'function'
  );
}

/** Resolve the seam for a media capability ('image' | 'video'), or throw. */
function requireMediaSeam(getSeam: SeamGetter, capability: 'image' | 'video'): SeamApi {
  const name: SeamName = capability === 'video' ? 'videoGenerate' : 'imageGenerate';
  const seam = getSeam(name);
  if (!isSeamApi(seam)) {
    throw new SeamGatewayError(
      'needs-provider',
      `执行中枢 ${name} 接缝不可用（hub 未加载或未提供该能力）`,
    );
  }
  return seam;
}

/**
 * Normalize a hub rejection into SeamGatewayError. Errors carrying a string
 * `code` (OmnimuxError) keep code + message; anything else becomes
 * `omnimux-request-failed`.
 */
function toSeamError(error: unknown): Error {
  if (error instanceof SeamGatewayError) return error;
  if (
    error instanceof Error
    && typeof (error as { code?: unknown }).code === 'string'
  ) {
    const coded = error as unknown as { code: string; message?: string };
    return new SeamGatewayError(coded.code, coded.message ?? String(error));
  }
  if (error instanceof Error) {
    return new SeamGatewayError('omnimux-request-failed', error.message);
  }
  return new SeamGatewayError('omnimux-request-failed', String(error));
}

export function createOmnimuxSeamClient(
  opts: OmniumuxSeamClientOptions,
): GenerationGateway & { currentMode(): 'omnimux' } {
  const env = opts.env ?? process.env;
  const rawLimit = Number.parseInt(env[SEAM_CONCURRENCY_ENV] ?? '', 10);
  const maxConcurrency =
    opts.maxConcurrency
    ?? (Number.isFinite(rawLimit) && rawLimit > 0 ? rawLimit : DEFAULT_SEAM_CONCURRENCY);
  const semaphore = createSemaphore(maxConcurrency);

  /** TaskId → record. Media ids are the hub's own task ids (poll resume). */
  const tasks = new Map<string, TaskRecord>();

  /** Run one seam call under the concurrency cap. */
  async function guarded<T>(fn: () => Promise<T>): Promise<T> {
    const release = await semaphore.acquire();
    try {
      return await fn();
    } finally {
      release();
    }
  }

  return {
    async submit(req: SubmitRequest): Promise<SubmitResult> {
      if (req.capability === 'text') {
        // textComplete is a one-shot synchronous seam (no taskId protocol):
        // register the work now, run it in awaitTask so the executor's
        // progress milestones keep their meaning.
        const taskId = `text_${randomUUID().slice(0, 12)}`;
        tasks.set(taskId, {
          kind: 'text',
          prompt: req.prompt ?? '',
          model: req.model,
          image: req.image,
        });
        return { taskId, mode: 'submitted' };
      }

      if (req.capability === 'audio') {
        // hub.md: audioGenerate does not exist until OmniMux publishes an
        // audio contract. Never pretend a model ran.
        throw new SeamGatewayError(
          'needs-provider',
          '执行中枢暂无音频生成接缝（audioGenerate 未开放）',
        );
      }

      const capability = req.capability === 'video' ? 'video' : 'image';
      const seam = requireMediaSeam(opts.getSeam, capability);
      if (!req.prompt || !req.prompt.trim()) {
        throw new SeamGatewayError('omnimux-invalid-request', '生成节点缺少 prompt');
      }

      const request: Record<string, unknown> = {
        prompt: req.prompt,
        dest: req.dest,
        wait: false,
      };
      if (req.image !== undefined) request.image = req.image;
      if (req.duration !== undefined) request.duration = req.duration;
      if (req.resolution !== undefined) request.resolution = req.resolution;
      if (req.aspectRatio !== undefined) request.aspectRatio = req.aspectRatio;
      if (req.speech !== undefined) request.speech = req.speech;
      if (req.audio !== undefined) request.audio = req.audio;
      if (req.model !== undefined) request.model = req.model;
      if (req.signal !== undefined) request.signal = req.signal;

      let result: SeamExecuteResult;
      try {
        result = await guarded(() => seam.execute(request));
      } catch (error) {
        throw toSeamError(error);
      }

      const hubTaskId =
        typeof result.taskId === 'string' && result.taskId.trim().length > 0
          ? result.taskId.trim()
          : '';
      if (result.mode === 'live') {
        // Provider already produced the file: the hub downloaded it to dest.
        if (!hubTaskId) {
          throw new SeamGatewayError(
            'omnimux-invalid-response',
            'live 提交缺少 taskId，无法登记任务',
          );
        }
        tasks.set(hubTaskId, { kind: 'media', capability, hubTaskId });
        return { taskId: hubTaskId, mode: 'live', url: result.url ?? undefined };
      }
      if (!hubTaskId) {
        throw new SeamGatewayError(
          'omnimux-invalid-response',
          'submitted 提交缺少 taskId（无法轮询）',
        );
      }
      tasks.set(hubTaskId, { kind: 'media', capability, hubTaskId });
      return { taskId: hubTaskId, mode: 'submitted' };
    },

    async awaitTask(
      taskId: string,
      dest: string,
      signal?: AbortSignal,
    ): Promise<AwaitTaskResult> {
      const record = tasks.get(taskId);
      if (!record) {
        throw new SeamGatewayError(
          'omnimux-invalid-request',
          `未知任务 ${taskId}（进程重启后 hub 任务不登记，节点会重新提交）`,
        );
      }

      if (record.kind === 'text') {
        const seamValue = opts.getSeam('textComplete');
        if (!isSeamApi(seamValue)) {
          throw new SeamGatewayError(
            'needs-provider',
            '执行中枢 textComplete 接缝不可用（hub 未加载或未提供该能力）',
          );
        }
        const request: Record<string, unknown> = { prompt: record.prompt };
        if (record.model !== undefined) request.model = record.model;
        if (record.image !== undefined) request.image = record.image;
        if (signal !== undefined) request.signal = signal;

        let result: SeamExecuteResult;
        try {
          result = await guarded(() => seamValue.execute(request));
        } catch (error) {
          throw toSeamError(error);
        }
        const text = typeof result.text === 'string' ? result.text : '';
        tasks.delete(taskId);
        // Persist the text artifact beside media outputs (same dest contract
        // as the mock gateway) so downstream nodes / the UI can reference it.
        try {
          mkdirSync(dirname(dest), { recursive: true });
          writeFileSync(dest, text, 'utf8');
        } catch (error) {
          logger.warn('failed to persist text artifact', {
            dest,
            error: error instanceof Error ? error.message : String(error),
          });
        }
        return { url: dest, text };
      }

      // Media: poll + download via the hub ({ dest, taskId } resume path).
      const seam = requireMediaSeam(opts.getSeam, record.capability);
      const request: Record<string, unknown> = { dest, taskId: record.hubTaskId };
      if (signal !== undefined) request.signal = signal;

      let result: SeamExecuteResult;
      try {
        result = await guarded(() => seam.execute(request));
      } catch (error) {
        throw toSeamError(error);
      }
      tasks.delete(taskId);
      // The hub downloaded the artifact to dest; return the local path so
      // the executor's toPublicUrl rewriter serves it same-origin through
      // /omnimux-workflow/media/ (the hub's remote url never reaches the
      // browser).
      return { url: dest };
    },

    async capabilities() {
      const hasVideo = isSeamApi(opts.getSeam('videoGenerate'));
      const hasImage = isSeamApi(opts.getSeam('imageGenerate'));
      const hasText = isSeamApi(opts.getSeam('textComplete'));
      const source: 'omnimux' | 'static-stub' =
        hasVideo || hasImage || hasText ? 'omnimux' : 'static-stub';

      const videoId = envString(env, 'OMNIMUX_VIDEO_MODEL') ?? DEFAULT_VIDEO_MODEL;
      const imageModels = (hasImage || source === 'static-stub')
        ? (envString(env, 'OMNIMUX_IMAGE_MODEL')
            ? [{ id: envString(env, 'OMNIMUX_IMAGE_MODEL')!, label: envString(env, 'OMNIMUX_IMAGE_MODEL')! }]
            : IMAGE_MODEL_SPECS.map((m) => ({
                id: m.id,
                label: m.label,
                badge: m.badge,
                subtitle: m.subtitle,
                family: m.family,
                parameters: m.parameters,
              })))
        : [];

      const videoModels = (hasVideo || source === 'static-stub')
        ? (envString(env, 'OMNIMUX_VIDEO_MODEL')
            ? [{ id: envString(env, 'OMNIMUX_VIDEO_MODEL')!, label: envString(env, 'OMNIMUX_VIDEO_MODEL')! }]
            : VIDEO_MODEL_SPECS.map((m) => ({
                id: m.id,
                label: m.label,
                badge: m.badge,
                subtitle: m.subtitle,
                family: m.family,
                parameters: m.parameters,
              })))
        : [];

      return {
        source,
        text: hasText || source === 'static-stub' ? TEXT_MODEL_IDS.map(labelOf) : [],
        image: imageModels,
        video: videoModels,
        // No audioGenerate seam exists in the hub (docs/contracts/hub.md).
        audio: [] as Array<{ id: string; label: string }>,
      };
    },

    currentMode() {
      return 'omnimux' as const;
    },
  };
}

/** Re-exported for callers that want the seam name of a capability. */
export function seamNameFor(capability: GenerationCapability): SeamName | null {
  if (capability === 'video') return 'videoGenerate';
  if (capability === 'image') return 'imageGenerate';
  if (capability === 'text') return 'textComplete';
  return null;
}
