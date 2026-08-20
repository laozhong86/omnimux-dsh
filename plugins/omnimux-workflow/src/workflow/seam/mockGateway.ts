/**
 * Mock GenerationGateway — M1/M2/M3 stand-in for the OmniMux seam client.
 *
 * Simulates the submit -> poll -> download flow with a short delay and a
 * placeholder artifact written to dest. Deterministic, offline, and safe:
 * this is the vitest injection point until M4 swaps in the real client.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { randomUUID } from 'node:crypto';
import type {
  GenerationGateway,
  SubmitRequest,
  SubmitResult,
} from './gateway';

const MOCK_LATENCY_MS = 1500;

const PLACEHOLDER_BY_CAPABILITY: Record<string, string> = {
  text: '【mock 生成结果】这是 dsh-workflow mock 网关的文本输出；M4 接入 OmniMux seam 后为真实模型结果。',
  image:
    '<svg xmlns="http://www.w3.org/2000/svg" width="320" height="180"><rect width="100%" height="100%" fill="#eef2fb"/><text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" fill="#4176E6" font-family="sans-serif" font-size="14">mock image</text></svg>',
};

function extFor(capability: string): string {
  if (capability === 'image') return 'svg';
  if (capability === 'video') return 'mp4';
  if (capability === 'audio') return 'mp3';
  return 'txt';
}

export function createMockGateway(): GenerationGateway {
  const tasks = new Map<string, { req: SubmitRequest; submittedAt: number }>();

  async function settle(req: SubmitRequest): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, MOCK_LATENCY_MS));
    if (req.signal?.aborted) {
      throw new Error('mock task aborted');
    }
    mkdirSync(join(req.dest, '..'), { recursive: true });
    writeFileSync(req.dest, PLACEHOLDER_BY_CAPABILITY[req.capability] ?? '', 'utf8');
  }

  return {
    async submit(req: SubmitRequest): Promise<SubmitResult> {
      const taskId = `mock_${randomUUID().slice(0, 12)}`;
      tasks.set(taskId, { req, submittedAt: Date.now() });
      return { taskId, mode: 'submitted' };
    },

    async awaitTask(taskId: string, dest: string, signal?: AbortSignal) {
      const entry = tasks.get(taskId);
      if (!entry) throw new Error(`mock gateway: unknown task ${taskId}`);
      await settle({ ...entry.req, dest, signal });
      return { url: dest };
    },

    async capabilities() {
      return {
        source: 'static-stub' as const,
        text: [
          { id: 'mock-text-pro', label: 'MockText Pro' },
          { id: 'mock-text-flash', label: 'MockText Flash' },
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
