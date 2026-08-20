/**
 * Ported (narrowed) from Gxgen `CanvasEditor.tsx` (validated by the
 * extraction spike). nodeTypes now generate from the node registry;
 * ReactFlow interaction flags carry over verbatim.
 */

import React, { useCallback, useRef, useState } from 'react';
import {
  ReactFlow,
  ReactFlowProvider,
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  PanOnScrollMode,
  SelectionMode,
  useReactFlow,
  type Connection,
  type Node,
  type Edge,
  type OnConnectEnd,
} from '@xyflow/react';
// NOTE: '@xyflow/react/dist/style.css' is injected by src/canvas/index.tsx
// (esbuild text-loader turns CSS imports into strings — they need manual
// <style> injection; see the island entry for the shared injector).
import { message } from 'antd';
import { useCanvasStore, useGraphStore } from '../store/canvasStore';
import type { MaterialType } from '../types/materialNode';
import MaterialNode from './components/MaterialNode';
import AnimatedEdge from './components/AnimatedEdge';
import Toolbar from './components/Toolbar';
import { CANVAS_ZOOM_CONFIG } from './utils/nodeSizeConfig';
import { validateConnection, validateConnectionDetailed } from './utils/connectionValidator';
import { DEFAULT_CANVAS_EDGE_OPTIONS } from './utils/canvasConnectionUtils';
import { createMaterialNode, appendWithSelectionReset } from './utils/nodeFactory';
import { buildNodeTypes } from '../nodes/registry';
import { materialNodeDefinition } from '../nodes/definitions/material';
import type { CapabilityCatalog } from '../../shared/api';

// Register node definitions once at module load (extension point ①).
// nodeTypes built outside the component to prevent re-creation (Gxgen rule).
import { registerNodeDefinition } from '../nodes/registry';
registerNodeDefinition(materialNodeDefinition);

const nodeTypes = buildNodeTypes();

const edgeTypes = {
  animated: AnimatedEdge,
};

const FIT_VIEW_OPTIONS = { maxZoom: 1 } as const;
const DEFAULT_VIEWPORT = { x: 0, y: 0, zoom: 1 } as const;
const PAN_ON_DRAG: number[] = [1, 2];
const CONNECTION_RADIUS = 96;

interface CanvasEditorProps {
  catalog: CapabilityCatalog | null;
}

const CanvasEditorContent: React.FC<CanvasEditorProps> = ({ catalog }) => {
  const { screenToFlowPosition } = useReactFlow();
  const { nodes, edges, onNodesChange, onEdgesChange } = useGraphStore();
  const onConnect = useCanvasStore((state) => state.onConnect);
  const applyCanvasInputMutation = useCanvasStore((state) => state.applyCanvasInputMutation);
  const setNodes = useCanvasStore((state) => state.setNodes);
  const setSelectedElement = useCanvasStore((state) => state.setSelectedElement);
  const [lastRejectedReason, setLastRejectedReason] = useState<string | null>(null);
  const nodeCreateCounter = useRef(0);

  // Nodes carry the capability catalog down to node components via data
  // injection (plain object; island-internal, never persisted — stripped
  // before save by the persistence layer).
  const flowNodes = catalog
    ? nodes.map((node) => ({ ...node, data: { ...node.data, __catalog: catalog } }))
    : nodes;

  // 连线入口：store.onConnect 内部经 mutation gateway 校验
  const handleConnect = useCallback(
    (connection: Connection) => {
      const plan = applyCanvasInputMutation({ addEdges: [connection] });
      if (plan.status === 'rejected') {
        const reasonText = ({
          self_connection: '不能连接到自己',
          duplicate_edge: '这两个节点已经连接过了',
          missing_node: '连接目标不存在',
          cycle: '这条连线会形成循环依赖',
          type_contract: '目标节点当前不接受这种素材类型',
        } as Record<string, string>)[plan.reasonCode ?? ''] ?? '连接无效';
        setLastRejectedReason(reasonText);
        message.warning(reasonText);
      } else {
        setLastRejectedReason(null);
      }
    },
    [applyCanvasInputMutation],
  );

  // 拖线过程中的实时校验（同 Gxgen isValidConnection 接线）
  const isValidConnection = useCallback(
    (connection: Connection | Edge) => {
      const state = useCanvasStore.getState();
      return validateConnection(connection, state.nodes, state.edges);
    },
    [],
  );

  // 拖线结束但未成线（校验被拒）时，把拒绝原因透出给用户
  const handleConnectEnd: OnConnectEnd = useCallback(
    (_event, connectionState) => {
      const fromId = connectionState.fromNode?.id;
      const toId = connectionState.toNode?.id;
      if (connectionState.isValid || !fromId || !toId) return;
      const state = useCanvasStore.getState();
      const detail = validateConnectionDetailed(
        { source: fromId, target: toId, sourceHandle: null, targetHandle: null },
        state.nodes,
        state.edges,
      );
      if (!detail.valid && detail.reason) {
        setLastRejectedReason(detail.reason);
        message.warning(detail.reason);
      }
    },
    [],
  );

  // 工具栏添加节点（错位网格摆放，避免节点互相遮挡 Handle —— spike 坑 #2）
  const handleAddNode = useCallback(
    (type: MaterialType) => {
      const index = nodeCreateCounter.current;
      const result = createMaterialNode(type, {
        x: 120 + (index % 3) * 420,
        y: 120 + Math.floor(index / 3) * 360,
      });
      if (result.nodes.length === 0) return;
      nodeCreateCounter.current += 1;
      setNodes((current) => appendWithSelectionReset(current, result.nodes));
    },
    [setNodes],
  );

  // 删除键：级联删除（经 mutation gateway，自动清 dangling edges）
  const handleDelete = useCallback(
    (deletedElements: { nodes: Node[]; edges: Edge[] }) => {
      const nodeIds = deletedElements.nodes.map((n) => n.id);
      const edgeIds = deletedElements.edges.map((e) => e.id);
      if (nodeIds.length === 0 && edgeIds.length === 0) return;
      applyCanvasInputMutation({ removeNodeIds: nodeIds, removeEdgeIds: edgeIds });
    },
    [applyCanvasInputMutation],
  );

  const handleNodeClick = useCallback(
    (_event: React.MouseEvent, node: Node) => {
      setSelectedElement('node', node.id);
    },
    [setSelectedElement],
  );

  const handlePaneClick = useCallback(() => {
    setSelectedElement('none', null);
  }, [setSelectedElement]);

  return (
    <div className="wf-canvas-editor" style={{ position: 'relative', height: '100%' }}>
      <ReactFlow
        nodes={flowNodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={handleConnect}
        isValidConnection={isValidConnection}
        onConnectEnd={handleConnectEnd}
        onNodeClick={handleNodeClick}
        onPaneClick={handlePaneClick}
        onDelete={handleDelete}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        fitViewOptions={FIT_VIEW_OPTIONS}
        defaultViewport={DEFAULT_VIEWPORT}
        minZoom={CANVAS_ZOOM_CONFIG.minZoom}
        maxZoom={CANVAS_ZOOM_CONFIG.maxZoom}
        selectionKeyCode={null}
        multiSelectionKeyCode="Meta"
        panOnDrag={PAN_ON_DRAG}
        panOnScroll
        panOnScrollMode={PanOnScrollMode.Free}
        zoomOnScroll
        zoomOnPinch
        selectionOnDrag
        selectionMode={SelectionMode.Partial}
        defaultEdgeOptions={DEFAULT_CANVAS_EDGE_OPTIONS}
        connectOnClick={false}
        connectionRadius={CONNECTION_RADIUS}
      >
        <Background color="var(--wb-grid-dot, #C9CBD6)" gap={48} size={3.5} variant={BackgroundVariant.Dots} />
        <Controls />
        <MiniMap pannable zoomable />
      </ReactFlow>

      <Toolbar onAddNode={handleAddNode} />

      {lastRejectedReason && (
        <div className="wf-rejected-toast">{lastRejectedReason}</div>
      )}
    </div>
  );
};

const CanvasEditor: React.FC<CanvasEditorProps> = (props) => {
  return (
    <ReactFlowProvider>
      <CanvasEditorContent {...props} />
    </ReactFlowProvider>
  );
};

export default CanvasEditor;
