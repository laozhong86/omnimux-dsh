/**
 * ★ Extension point: GenerationGateway seam interface (replaceable).
 *
 * The canvas never calls model APIs itself. All generation work flows
 * through this gateway. M1 ships the mock implementation; M4 replaces it
 * with OmniMuxSeamClient built on ctx.get('videoGenerate' | 'imageGenerate'
 * | 'textComplete') — the vertical I/O rule (docs/contracts/hub.md).
 */

export type GenerationCapability = 'text' | 'image' | 'video' | 'audio';

export interface SubmitRequest {
  capability: GenerationCapability;
  /** Prompt text (or upstream text content). */
  prompt?: string;
  /** Reference image (absolute local path / http(s) / data URI). */
  image?: string;
  /** Video duration hint in seconds. */
  duration?: number;
  /** Speech audio for talking-head, or background audio. */
  speech?: string;
  audio?: string;
  /** Model id from the capability catalog; omit for hub default. */
  model?: string;
  /** Absolute download destination (plugin-owned media dir). */
  dest: string;
  /** Cooperative cancel. */
  signal?: AbortSignal;
}

export interface SubmitResult {
  taskId: string;
  /** Submitted-only (no immediate local file yet). */
  mode: 'live' | 'submitted';
  url?: string;
}

export interface GenerationGateway {
  /** Submit a generation task (wait:false semantics). */
  submit(req: SubmitRequest): Promise<SubmitResult>;
  /** Poll a task and download the artifact to its dest. */
  awaitTask(taskId: string, dest: string, signal?: AbortSignal): Promise<{ url: string }>;
  /** Capability catalog for the config panel (model lists). */
  capabilities(): Promise<{
    source: 'static-stub' | 'omnimux';
    text: Array<{ id: string; label: string }>;
    image: Array<{ id: string; label: string }>;
    video: Array<{ id: string; label: string }>;
    audio: Array<{ id: string; label: string }>;
  }>;
}
