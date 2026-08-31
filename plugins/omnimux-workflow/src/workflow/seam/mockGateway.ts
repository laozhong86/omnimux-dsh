/**
 * Mock GenerationGateway — M1/M2/M3 stand-in for the OmniMux seam client.
 *
 * Simulates the submit -> poll -> download flow with a configurable latency
 * window (default 1-3s) and deterministic failure injection (SubmitRequest.
 * mockFail), writing a placeholder artifact to dest. Deterministic, offline,
 * and safe: this is the injection point until M4 swaps in the real client.
 */

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { randomUUID } from 'node:crypto';
import type {
  GenerationGateway,
  SubmitRequest,
  SubmitResult,
} from './gateway';

export interface MockGatewayOptions {
  /** Simulated task latency window (default 1-3s per the M3 spec). */
  minLatencyMs?: number;
  maxLatencyMs?: number;
}

/** Default simulated latency (M3 spec: 1-3s). */
export const DEFAULT_MOCK_MIN_LATENCY_MS = 1000;
export const DEFAULT_MOCK_MAX_LATENCY_MS = 3000;

const MOCK_TEXT_PLACEHOLDER =
  '【mock 生成结果】这是 omnimux-workflow mock 网关的文本输出；M4 接入 OmniMux seam 后为真实模型结果。';

const MOCK_IMAGE_PLACEHOLDER =
  '<svg xmlns="http://www.w3.org/2000/svg" width="320" height="180"><rect width="100%" height="100%" fill="#eef2fb"/><text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="#4176E6" font-family="sans-serif" font-size="14">mock image</text></svg>';

function placeholderFor(capability: string): string {
  if (capability === 'image') return MOCK_IMAGE_PLACEHOLDER;
  if (capability === 'text') return MOCK_TEXT_PLACEHOLDER;
  // video / audio: no real binary in mock mode — small text marker file.
  return `mock ${capability} artifact`;
}

interface MockTask {
  req: SubmitRequest;
  submittedAt: number;
  latencyMs: number;
}

export function createMockGateway(opts: MockGatewayOptions = {}): GenerationGateway {
  const minLatency = opts.minLatencyMs ?? DEFAULT_MOCK_MIN_LATENCY_MS;
  const maxLatency = Math.max(opts.maxLatencyMs ?? DEFAULT_MOCK_MAX_LATENCY_MS, minLatency);
  const tasks = new Map<string, MockTask>();

  function settle(task: MockTask, dest: string, signal?: AbortSignal): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const timer = setTimeout(() => {
        if (signal?.aborted) {
          reject(new Error('mock task aborted'));
          return;
        }
        if (task.req.mockFail === true) {
          reject(new Error('mock generation failed (mockFail=true)'));
          return;
        }
        try {
          mkdirSync(join(dest, '..'), { recursive: true });
          writeFileSync(dest, placeholderFor(task.req.capability), 'utf8');
          resolve();
        } catch (error) {
          reject(error instanceof Error ? error : new Error(String(error)));
        }
      }, task.latencyMs);

      // Aborted before the latency elapses -> fail fast.
      signal?.addEventListener('abort', () => {
        clearTimeout(timer);
        reject(new Error('mock task aborted'));
      }, { once: true });
    });
  }

  return {
    async submit(req: SubmitRequest): Promise<SubmitResult> {
      const taskId = `mock_${randomUUID().slice(0, 12)}`;
      const latencyMs = minLatency + Math.floor(Math.random() * (maxLatency - minLatency + 1));
      tasks.set(taskId, { req, submittedAt: Date.now(), latencyMs });
      return { taskId, mode: 'submitted' };
    },

    async awaitTask(taskId: string, dest: string, signal?: AbortSignal) {
      const task = tasks.get(taskId);
      if (!task) throw new Error(`mock gateway: unknown task ${taskId}`);
      await settle(task, dest, signal);
      // Clean up settled tasks (memory hygiene).
      tasks.delete(taskId);
      return {
        url: dest,
        ...(task.req.capability === 'text' ? { text: MOCK_TEXT_PLACEHOLDER } : {}),
      };
    },

    async capabilities() {
      return {
        source: 'static-stub' as const,
        fingerprint: 'mock-static-stub',
        defaults: {
          text: 'mock-text-flash',
          image: 'mock-image-1',
          video: 'mock-video-1',
          audio: 'mock-audio-speech',
        },
        text: [
          { id: 'mock-text-flash', label: 'MockText Flash' },
          { id: 'mock-text-pro', label: 'MockText Pro' },
        ],
        image: [
          { id: 'mock-image-1', label: 'MockImage 1' },
        ],
        video: [
          { id: 'mock-video-1', label: 'MockVideo 1' },
        ],
        audio: [
          { id: 'mock-audio-speech', label: 'MockSpeech' },
        ],
      };
    },
  };
}
