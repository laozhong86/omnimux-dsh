import { useEffect, useRef } from "react";
import { useProjectStore } from "../openreel/web/stores/project-store";
import { useUIStore } from "../openreel/web/stores/ui-store";

export interface CanvasSession {
  source?: "canvas" | "sidebar" | "agent";
  nodeId?: string;
  nodeTitle?: string;
  projectId?: string;
  draftSchema?: unknown;
  upstreamInputs?: {
    videos?: Array<{ path: string; name: string; durationMs?: number; url?: string }>;
    audios?: Array<{ path: string; name: string; durationMs?: number; url?: string }>;
    images?: Array<{ path: string; name: string; displayDurationMs?: number; url?: string }>;
    captions?: Array<{ text: string; startTimeMs: number; durationMs: number }>;
  };
}

function inferMime(path: string, fallback: string): string {
  const lower = path.toLowerCase();
  if (lower.endsWith(".mp4")) return "video/mp4";
  if (lower.endsWith(".webm")) return "video/webm";
  if (lower.endsWith(".mov")) return "video/quicktime";
  if (lower.endsWith(".png")) return "image/png";
  if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) return "image/jpeg";
  if (lower.endsWith(".webp")) return "image/webp";
  if (lower.endsWith(".gif")) return "image/gif";
  if (lower.endsWith(".mp3")) return "audio/mpeg";
  if (lower.endsWith(".wav")) return "audio/wav";
  if (lower.endsWith(".aac")) return "audio/aac";
  return fallback;
}

/**
 * useCanvasIngestion handles:
 * 1. Automatic project initialization when opened from canvas (bypassing welcome screen).
 * 2. Automatic async ingestion of upstream videos, images, and audio into OpenReel's media library.
 */
export function useCanvasIngestion(session: CanvasSession | null | undefined) {
  const processedRef = useRef<Set<string>>(new Set());
  const activeNodeIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (!session || session.source !== "canvas") {
      activeNodeIdRef.current = null;
      return;
    }

    const { nodeId, nodeTitle, upstreamInputs } = session;

    // Reset processed set when switching nodes
    if (activeNodeIdRef.current !== nodeId) {
      activeNodeIdRef.current = nodeId || null;
      processedRef.current.clear();
    }

    // Bypass welcome screen for canvas sessions
    const uiStore = useUIStore.getState();
    if (!uiStore.skipWelcomeScreen) {
      uiStore.setSkipWelcomeScreen(true);
    }

    // Ensure a project exists
    const projectStore = useProjectStore.getState();
    if (!projectStore.hasOpenProject) {
      projectStore.createNewProject(nodeTitle || "画布视频合成");
    }

    if (!upstreamInputs) return;

    const itemsToImport: Array<{ url: string; name: string; fallbackMime: string }> = [];

    if (Array.isArray(upstreamInputs.videos)) {
      for (const v of upstreamInputs.videos) {
        const url = v.url || v.path;
        if (url && !processedRef.current.has(url)) {
          itemsToImport.push({ url, name: v.name || "video.mp4", fallbackMime: "video/mp4" });
        }
      }
    }

    if (Array.isArray(upstreamInputs.images)) {
      for (const img of upstreamInputs.images) {
        const url = img.url || img.path;
        if (url && !processedRef.current.has(url)) {
          itemsToImport.push({ url, name: img.name || "image.png", fallbackMime: "image/png" });
        }
      }
    }

    if (Array.isArray(upstreamInputs.audios)) {
      for (const a of upstreamInputs.audios) {
        const url = a.url || a.path;
        if (url && !processedRef.current.has(url)) {
          itemsToImport.push({ url, name: a.name || "audio.mp3", fallbackMime: "audio/mpeg" });
        }
      }
    }

    if (itemsToImport.length === 0) return;

    let isMounted = true;

    const importAll = async () => {
      for (const item of itemsToImport) {
        if (!isMounted) break;
        processedRef.current.add(item.url);
        try {
          const res = await fetch(item.url);
          if (!res.ok) continue;
          const blob = await res.blob();
          const mime = inferMime(item.name || item.url, item.fallbackMime);
          const file = new File([blob], item.name, { type: mime });
          await useProjectStore.getState().importMedia(file);
        } catch (err) {
          console.warn("[omnimux-clip:ingestion] failed to import upstream asset:", item.url, err);
        }
      }
    };

    void importAll();

    return () => {
      isMounted = false;
    };
  }, [session]);
}
