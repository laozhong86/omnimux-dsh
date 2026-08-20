/**
 * omnimux-workflow canvas island entry — the IIFE global API.
 *
 * build-canvas.mjs bundles this file (React 19 included) into
 * lib/canvas.js with globalName `__omnimuxWorkflowCanvas`. The host React 18
 * CanvasBridge calls mountCanvas(el, props) / unmountCanvas(el).
 *
 * ★ HARD RULE: props crossing this boundary are plain data + callbacks
 * only — never React elements, refs, context, or component types.
 */

import { createRoot, type Root } from 'react-dom/client';
import App from './App';
// esbuild text-loader: both stylesheets arrive as strings and must be
// injected manually (Vite did this automatically in the spike sandbox).
// Order matters: xyflow base first, theme overrides second.
import xyflowCss from '@xyflow/react/dist/style.css';
import themeCss from './theme/workbench-theme.css';

export interface CanvasIslandProps {
  onClose?: () => void;
}

const roots = new WeakMap<HTMLElement, Root>();
let stylesInjected = false;

function injectStyles(): void {
  if (stylesInjected) return;
  const xyflowId = 'omnimux-workflow-xyflow-base';
  if (!document.getElementById(xyflowId)) {
    const style = document.createElement('style');
    style.id = xyflowId;
    style.textContent = xyflowCss;
    document.head.append(style);
  }
  if (!document.getElementById('omnimux-workflow-theme')) {
    const style = document.createElement('style');
    style.id = 'omnimux-workflow-theme';
    style.textContent = themeCss;
    document.head.append(style);
  }
  stylesInjected = true;
}

export function mountCanvas(el: HTMLElement, props: CanvasIslandProps): void {
  if (!el || roots.has(el)) return;
  injectStyles();
  const root = createRoot(el);
  roots.set(el, root);
  root.render(<App {...props} />);
}

export function unmountCanvas(el: HTMLElement): void {
  const root = roots.get(el);
  if (!root) return;
  root.unmount();
  roots.delete(el);
}
