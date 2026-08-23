/**
 * Ported (narrowed) from Gxgen `CanvasEditor.tsx` (validated by the
 * extraction spike). nodeTypes now generate from the node registry;
 * ReactFlow interaction flags carry over verbatim.
 *
 * M2 additions: undo/redo history (canvasStore History slice), the
 * keyboard-shortcut base set (copy/paste/delete/select-all), the basic
 * context menu (add/delete/copy) and clipboard support — all ported in
 * shape from Gxgen useCanvasHistory / useKeyboardShortcuts / useCanvasMenu.
 *
 * Clipboard and context-menu mechanics live in dedicated hooks so this
 * file stays the ReactFlow wiring shell.
 */

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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
} from '@xyflow/react';
// NOTE: '@xyflow/react/dist/style.css' is injected by src/canvas/index.tsx
// (esbuild text-loader turns CSS imports into strings — they need manual
// <style> injection; see the island entry for the shared injector).
import { message } from 'antd';
import { useCanvasStore, useGraphStore, useCanUndo, useCanRedo } from '../store/canvasStore';
import type { MaterialType } from '../types/materialNode';
import AnimatedEdge from './components/AnimatedEdge';
import Toolbar from './components/Toolbar';
import CanvasNodeActionMenu from './components/CanvasNodeActionMenu';
import ContextMenu from './components/ContextMenu';
import { useKeyboardShortcuts } from './hooks/useKeyboardShortcuts';
import { useConnectionMenu } from './hooks/useConnectionMenu';
import { useCanvasClipboard } from './hooks/useCanvasClipboard';
import { useCanvasContextMenu } from './hooks/useCanvasContextMenu';
import { useT } from '../i18n';
import { CANVAS_ZOOM_CONFIG } from './utils/nodeSizeConfig';
import { validateConnection, rejectReasonKey } from './utils/connectionValidator';
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
  /**
   * M4 组/子集执行入口：右键「执行选中节点 / 执行此节点」回调
   * （subset 模式：nodeIds + 传递上游闭包，由 host 解析）。
   */
  onExecuteNodeIds?: (nodeIds: string[]) => void;
}

const CanvasEditorContent: React.FC<CanvasEditorProps> = ({ catalog, onExecuteNodeIds }) => {
  const { screenToFlowPosition } = useReactFlow();
  const { nodes, edges, onNodesChange, onEdgesChange } = useGraphStore();
  const applyCanvasInputMutation = useCanvasStore((state) => state.applyCanvasInputMutation);
  const setNodes = useCanvasStore((state) => state.setNodes);
  const setSelectedElement = useCanvasStore((state) => state.setSelectedElement);
  const pushHistory = useCanvasStore((state) => state.pushHistory);
  const undo = useCanvasStore((state) => state.undo);
  const redo = useCanvasStore((state) => state.redo);
  const canUndo = useCanUndo();
  const canRedo = useCanRedo();
  const [lastRejectedReason, setLastRejectedReason] = useState<string | null>(null);
  const nodeCreateCounter = useRef(0);

  const hasSelection = useMemo(() => nodes.some((node) => node.selected), [nodes]);

  const clipboard = useCanvasClipboard(setNodes, setSelectedElement);

  // W3 T3.2: beam activation moved into AnimatedEdge (downstream-target
  // subscription); the old upstream flowEdges mapping was removed — edges
  // pass through unchanged.
  // W3 T3.4: release menu + rejection toast three-branch split.
  const t = useT();
  const connectionMenuTitle = t('menu.generateFromNode');
  const {
    menuState: connectionMenuState,
    onConnectStart: handleConnectStart,
    onConnectEnd: handleConnectEnd,
    onMenuSelect: handleConnectionMenuSelect,
    onMenuClose: handleConnectionMenuClose,
  } = useConnectionMenu({ onReject: setLastRejectedReason });

  // History recording: every nodes/edges change offers a snapshot; the
  // store debounces + dedupes internally (Gxgen useCanvasHistory port).
  useEffect(() => {
    pushHistory();
  }, [nodes, edges, pushHistory]);

  // Nodes carry the capability catalog down to node components via data
  // injection (plain object; island-internal, never persisted — stripped
  // before save by the persistence layer).
  // M5 perf: memoized — without this every editor re-render rebuilt all
  // node/data objects, defeating React Flow's internal node memoization and
  // re-rendering every (memo'd) MaterialNode on each keystroke/selection.
  const flowNodes = useMemo(
    () =>
      catalog
        ? nodes.map((node) => ({ ...node, data: { ...node.data, __catalog: catalog } }))
        : nodes,
    [nodes, catalog],
  );

  // 连线入口：store.onConnect 内部经 mutation gateway 校验
  const handleConnect = useCallback(
    (connection: Connection) => {
      const plan = applyCanvasInputMutation({ addEdges: [connection] });
      if (plan.status === 'rejected') {
        const reasonText = t(rejectReasonKey(plan.reasonCode));
        setLastRejectedReason(reasonText);
        message.warning(reasonText);
      } else {
        setLastRejectedReason(null);
      }
    },
    [applyCanvasInputMutation, t],
  );

  // 拖线过程中的实时校验（同 Gxgen isValidConnection 接线）
  const isValidConnection = useCallback(
    (connection: Connection | Edge) => {
      const state = useCanvasStore.getState();
      return validateConnection(connection, state.nodes, state.edges);
    },
    [],
  );

  // 工具栏添加节点（错位网格摆放，避免节点互相遮挡 Handle —— spike 坑 #2）；
  // 右键菜单可传入显式落点。
  const handleAddNode = useCallback(
    (type: MaterialType, position?: { x: number; y: number }) => {
      const index = nodeCreateCounter.current;
      const targetPosition = position ?? {
        x: 120 + (index % 3) * 420,
        y: 120 + Math.floor(index / 3) * 360,
      };
      const result = createMaterialNode(type, targetPosition);
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

  const {
    menu,
    handleNodeContextMenu,
    handlePaneContextMenu,
    handleSelectionContextMenu,
    closeMenu,
    handleMenuAction,
  } = useCanvasContextMenu({
    screenToFlowPosition,
    handleAddNode,
    setNodes,
    copySelectedNodes: clipboard.copySelectedNodes,
    pasteNodes: clipboard.pasteNodes,
    duplicateSelectedNodes: clipboard.duplicateSelectedNodes,
    deleteSelectedNodes: clipboard.deleteSelectedNodes,
    selectAllNodes: clipboard.selectAllNodes,
    clearSelection: clipboard.clearSelection,
    undo,
    redo,
    onExecuteNodeIds,
  });

  // 键盘快捷键基础集：复制/粘贴/删除/全选（+撤销重做/取消选中/副本）
  useKeyboardShortcuts({
    onCopy: clipboard.copySelectedNodes,
    onPaste: () => clipboard.pasteNodes(),
    onSelectAll: clipboard.selectAllNodes,
    onDeleteSelected: clipboard.deleteSelectedNodes,
    onClearSelection: clipboard.clearSelection,
    onDuplicate: clipboard.duplicateSelectedNodes,
    onUndo: undo,
    onRedo: redo,
    hasSelection,
  });

  const handleNodeClick = useCallback(
    (_event: React.MouseEvent, node: Node) => {
      setSelectedElement('node', node.id);
    },
    [setSelectedElement],
  );

  const handlePaneClick = useCallback(() => {
    setSelectedElement('none', null);
    closeMenu();
  }, [setSelectedElement, closeMenu]);

  return (
    <div className="wf-canvas-editor" style={{ position: 'relative', height: '100%' }}>
      <ReactFlow
        nodes={flowNodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={handleConnect}
        isValidConnection={isValidConnection}
        onConnectStart={handleConnectStart}
        onConnectEnd={handleConnectEnd}
        onNodeClick={handleNodeClick}
        onPaneClick={handlePaneClick}
        onNodeContextMenu={handleNodeContextMenu}
        onPaneContextMenu={handlePaneContextMenu}
        onSelectionContextMenu={handleSelectionContextMenu}
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
        // M5 perf baseline: viewport culling for the 200+ node scenario.
        // Off-screen nodes unmount — node state lives in canvasStore, so a
        // scrolled-away node restores fully when it re-enters the viewport.
        onlyRenderVisibleElements
      >
        <Background color="var(--wb-grid-dot, #C9CBD6)" gap={48} size={3.5} variant={BackgroundVariant.Dots} />
        <Controls />
        <MiniMap pannable zoomable />
      </ReactFlow>

      <Toolbar
        onAddNode={handleAddNode}
        onUndo={undo}
        onRedo={redo}
        canUndo={canUndo}
        canRedo={canRedo}
      />

      <ContextMenu
        x={menu.x}
        y={menu.y}
        visible={menu.visible}
        context={menu.context}
        onClose={closeMenu}
        onAction={handleMenuAction}
        canUndo={canUndo}
        canRedo={canRedo}
        hasClipboard={clipboard.hasClipboard}
        hasSelection={hasSelection}
      />

      <CanvasNodeActionMenu
        visible={connectionMenuState.visible}
        x={connectionMenuState.x}
        y={connectionMenuState.y}
        title={connectionMenuTitle}
        options={connectionMenuState.options}
        onSelect={handleConnectionMenuSelect}
        onClose={handleConnectionMenuClose}
      />

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
