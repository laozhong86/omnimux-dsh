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
import { createWorkflowLogger } from '../execution/logger';

const LOG_TAG = 'OmniMuxSeamClient';

const logger = createWorkflowLogger(LOG_TAG);

/** Seam names exposed by the execution hub (docs/contracts/hub.md). */
export type SeamName = 'videoGenerate' | 'imageGenerate' | 'textComplete';

/**
 * Resolves a seam by name at call time (cordis `ctx.get`). Lazy by design:
 * the hub may be mounted after this plugin; dsh-drama uses the same pattern.
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
// Capability catalog (real ids from the hub route defaults + env overlays)
// ============================================================================

/** Text whitelist fixed by the hub chat directory (src/text/catalog.js). */
const TEXT_MODEL_IDS: ReadonlyArray<string> = [
  'claude-opus-5',
  'gpt-5.6-sol',
  'grok-4.6',
  'kimi-k3',
  'deepseek-v4-pro',
  'deepseek-v4-flash-vision-exp',
  'gemini-3.7-flash',
  'glm-5.3',
] as const;

/** Hub media route defaults (src/media/route.js DEFAULT_MEDIA.models). */
const DEFAULT_VIDEO_MODEL = 'seedance-2-0-fast';
const DEFAULT_IMAGE_MODEL = 'gpt-image-2';

function envString(env: NodeJS.ProcessEnv, key: string): string | undefined {
  const value = env[key];
  return typeof value === 'string' && value.trim().length > 0 ? value.trim() : undefined;
}

function labelOf(id: string): { id: string; label: string } {
  return { id, label: id };
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
      const imageId = envString(env, 'OMNIMUX_IMAGE_MODEL') ?? DEFAULT_IMAGE_MODEL;

      return {
        source,
        text: hasText || source === 'static-stub' ? TEXT_MODEL_IDS.map(labelOf) : [],
        image: hasImage || source === 'static-stub' ? [labelOf(imageId)] : [],
        video: hasVideo || source === 'static-stub' ? [labelOf(videoId)] : [],
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
