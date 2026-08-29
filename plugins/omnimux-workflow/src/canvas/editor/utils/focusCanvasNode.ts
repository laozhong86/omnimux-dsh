/**
 * 资产抽屉定位到画布节点：把视口中心移到节点附近并单选该节点。
 * 抽出纯函数，避免 CanvasEditor 内联闭包直接引用未解构的 React Flow API。
 */

export const FOCUS_NODE_OFFSET = 100;
export const FOCUS_NODE_ZOOM = 1;
export const FOCUS_NODE_DURATION = 800;

export type FocusableCanvasNode = {
  id: string;
  position: { x: number; y: number };
  selected?: boolean;
};

export type FocusCanvasNodePlan =
  | { focused: false }
  | {
      focused: true;
      nodeId: string;
      x: number;
      y: number;
      zoom: number;
      duration: number;
    };

export function planFocusCanvasNode(
  nodes: readonly FocusableCanvasNode[] | undefined,
  nodeId: string,
): FocusCanvasNodePlan {
  if (!nodeId || !Array.isArray(nodes)) return { focused: false };
  const target = nodes.find((node) => node.id === nodeId);
  if (!target) return { focused: false };
  return {
    focused: true,
    nodeId: target.id,
    x: target.position.x + FOCUS_NODE_OFFSET,
    y: target.position.y + FOCUS_NODE_OFFSET,
    zoom: FOCUS_NODE_ZOOM,
    duration: FOCUS_NODE_DURATION,
  };
}

export function applyFocusCanvasNode<T extends FocusableCanvasNode>(opts: {
  nodes: readonly T[] | undefined;
  nodeId: string;
  setCenter: (x: number, y: number, options?: { zoom?: number; duration?: number }) => void;
  setNodes: (updater: (nds: T[]) => T[]) => void;
}): boolean {
  const plan = planFocusCanvasNode(opts.nodes, opts.nodeId);
  if (!plan.focused) return false;
  opts.setCenter(plan.x, plan.y, { zoom: plan.zoom, duration: plan.duration });
  opts.setNodes((nds) =>
    nds.map((node) => ({
      ...node,
      selected: node.id === opts.nodeId,
    })),
  );
  return true;
}
