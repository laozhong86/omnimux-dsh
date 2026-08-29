/**
 * ★ Extension point: GenerationGateway seam interface (replaceable).
 *
 * The canvas never calls model APIs itself. All generation work flows
 * through this gateway. M1–M3 shipped the mock implementation; M4 adds the
 * OmniMux seam client (omnimuxGateway.ts) over ctx.get('videoGenerate' |
 * 'imageGenerate' | 'textComplete') and assembles one of the two at mount
 * (gatewaySelection.ts) — the vertical I/O rule (docs/contracts/hub.md).
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
  /** Media resolution hint (e.g. '720P' | '1080P' | '4K'). */
  resolution?: string;
  /** Aspect ratio hint (e.g. '16:9' | '9:16' | '1:1'). */
  aspectRatio?: string;
  /** Speech audio for talking-head, or background audio. */
  speech?: string;
  audio?: string;
  /** Audio voice selection (alloy, echo, fable, onyx, nova, shimmer). */
  voice?: string;
  /** Audio/music style. */
  style?: string;
  /** Instrumental only flag for music. */
  instrumental?: boolean;
  /** Speed multiplier for speech. */
  speed?: number;
  /** Model id from the capability catalog; omit for hub default. */
  model?: string;
  /** Absolute download destination (plugin-owned media dir). */
  dest: string;
  /** Cooperative cancel. */
  signal?: AbortSignal;
  /**
   * Mock-gateway control (M3): force the simulated task to fail so failure
   * paths (node error / fail strategy / SSE node_error) are testable.
   * Real seam clients ignore this field.
   */
  mockFail?: boolean;
}

export interface SubmitResult {
  taskId: string;
  /** Submitted-only (no immediate local file yet). */
  mode: 'live' | 'submitted';
  url?: string;
}

export interface AwaitTaskResult {
  /** Absolute path (or URL) of the settled artifact. */
  url: string;
  /** Text capability output (mock gateway / future text seam). */
  text?: string;
}

export interface GenerationGateway {
  /** Submit a generation task (wait:false semantics). */
  submit(req: SubmitRequest): Promise<SubmitResult>;
  /** Poll a task and download the artifact to its dest. */
  awaitTask(taskId: string, dest: string, signal?: AbortSignal): Promise<AwaitTaskResult>;
  /** Capability catalog for the config panel (model lists). */
  capabilities(): Promise<{
    source: 'static-stub' | 'omnimux';
    text: Array<{ id: string; label: string }>;
    image: Array<{ id: string; label: string }>;
    video: Array<{ id: string; label: string }>;
    audio: Array<{ id: string; label: string }>;
  }>;
}
