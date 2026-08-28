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
import { toast } from '../ui';
import { useCanvasStore, useGraphStore, useCanUndo, useCanRedo } from '../store/canvasStore';
import type { MaterialType } from '../types/materialNode';
import AnimatedEdge from './components/AnimatedEdge';
import Toolbar, { type CanvasPointerMode } from './components/Toolbar';
import HeaderControls from './components/HeaderControls';
import AssetsDrawer, { type AssetRecord } from './components/AssetsDrawer';
import ShortcutsModal from './components/ShortcutsModal';
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
import { buildNodeTypes, createNode, registerNodeDefinition } from '../nodes/registry';
import { materialNodeDefinition } from '../nodes/definitions/material';
import { tableNodeDefinition } from '../nodes/definitions/table';
import { videoCompositionNodeDefinition } from '../nodes/definitions/videoComposition';
import { SpreadsheetStage } from '../components/table-node/stage/SpreadsheetStage';
import type { CapabilityCatalog } from '../../shared/api';

// 抽屉独立隔离保护器：确保抽屉内部发生任何未捕获错误时，画布绝不崩溃或黑屏
class DrawerErrorBoundary extends React.Component<
  { children: React.ReactNode; onClose: () => void },
  { hasError: boolean; errorMsg: string }
> {
  constructor(props: { children: React.ReactNode; onClose: () => void }) {
    super(props);
    this.state = { hasError: false, errorMsg: '' };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, errorMsg: error.message };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('[AssetsDrawer ErrorBoundary] 捕获到抽屉渲染错误:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="wf-assets-drawer-root nodrag nopan"
          style={{ width: '320px', padding: '16px', color: '#fff', background: '#18181b' }}
        >
          <div style={{ fontSize: '13px', fontWeight: 600, color: '#ef4444', marginBottom: '8px' }}>
            资产抽屉加载异常
          </div>
          <div style={{ fontSize: '11px', color: '#a1a1aa', marginBottom: '12px' }}>
            {this.state.errorMsg || '组件渲染发生未知错误'}
          </div>
          <button
            type="button"
            style={{
              padding: '4px 12px',
              borderRadius: '6px',
              background: '#3b82f6',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={() => {
              this.setState({ hasError: false, errorMsg: '' });
              this.props.onClose();
            }}
          >
            重置并关闭
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// Register node definitions once at module load (extension point ①).
// nodeTypes built outside the component to prevent re-creation (Gxgen rule).
registerNodeDefinition(materialNodeDefinition);
registerNodeDefinition(tableNodeDefinition);
registerNodeDefinition(videoCompositionNodeDefinition);

const nodeTypes = buildNodeTypes();

const edgeTypes = {
  default: AnimatedEdge,
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
  onStartExecution?: () => void;
  onPauseExecution?: () => void;
  onResumeExecution?: () => void;
  onCancelExecution?: () => void;
  onResetExecution?: () => void;
}

const CanvasEditorContent: React.FC<CanvasEditorProps> = ({
  catalog,
  onExecuteNodeIds,
  onStartExecution,
  onPauseExecution,
  onResumeExecution,
  onCancelExecution,
  onResetExecution,
}) => {
  const { screenToFlowPosition, fitView, zoomTo } = useReactFlow();
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
  const [isMinimapOpen, setIsMinimapOpen] = useState(false);
  const [isAssetsOpen, setIsAssetsOpen] = useState(false);
  const [isShortcutsOpen, setIsShortcutsOpen] = useState(false);
  const [isAddMenuOpen, setIsAddMenuOpen] = useState(false);
  const [assetsCategoryIndex, setAssetsCategoryIndex] = useState<number | undefined>(undefined);
  const [pointerMode, setPointerMode] = useState<CanvasPointerMode>('select');
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
        toast.warning(reasonText);
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
    (type: MaterialType | 'table' | 'video_composition', position?: { x: number; y: number }) => {
      const index = nodeCreateCounter.current;
      const targetPosition = position ?? {
        x: 120 + (index % 3) * 420,
        y: 120 + Math.floor(index / 3) * 360,
      };

      if (type === 'table' || type === 'video_composition') {
        const created = createNode(type, targetPosition, `node_${type}_${Date.now()}`);
        if (!created) return;
        nodeCreateCounter.current += 1;
        setNodes((current) => appendWithSelectionReset(current, [{ ...created, selected: true } as never]));
        return;
      }

      const result = createMaterialNode(type as MaterialType, targetPosition);
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
    handleAddNodeFromMenu,
  } = useCanvasContextMenu({
    screenToFlowPosition,
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
    onAddNode: handleAddNode,
  });

  // 插入资产到画布作为新节点
  const handleInsertAsset = useCallback(
    (asset: AssetRecord) => {
      const assetPath = asset.real_path || asset.files?.[0]?.path || '';
      const targetType: MaterialType =
        asset.type === 'video' ? 'video' : asset.type === 'image' ? 'image' : 'text';
      const count = nodeCreateCounter.current++;
      const position = {
        x: 200 + (count % 4) * 50,
        y: 200 + (count % 4) * 40,
      };

      const result = createMaterialNode(targetType, position, {
        title: asset.name,
        content: assetPath,
        previewUrl: asset.previewUrl,
        status: 'ready',
      });
      const newNode = result.nodes[0];
      if (!newNode) return;

      applyCanvasInputMutation({
        addNodes: [newNode],
      });
      setSelectedElement('node', newNode.id);
      toast.success(t('toolbar.assets') + ': ' + asset.name);
    },
    [applyCanvasInputMutation, setSelectedElement, t],
  );

  // 键盘快捷键全集
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
    onToggleAssets: () => setIsAssetsOpen((prev) => !prev),
    onToggleShortcuts: () => setIsShortcutsOpen((prev) => !prev),
    onToggleMinimap: () => setIsMinimapOpen((prev) => !prev),
    onToggleAddMenu: () => setIsAddMenuOpen((prev) => !prev),
    onSetPointerMode: (mode) => setPointerMode(mode),
    onFitView: () => fitView(FIT_VIEW_OPTIONS),
    onResetZoom: () => zoomTo(1),
    onCategoryKey: (catIdx) => {
      setIsAssetsOpen(true);
      setAssetsCategoryIndex(catIdx);
    },
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

  // 整理对齐节点
  const handleAlignGrid = useCallback(() => {
    setNodes((current) =>
      current.map((node, i) => ({
        ...node,
        position: {
          x: 120 + (i % 3) * 440,
          y: 120 + Math.floor(i / 3) * 360,
        },
      })),
    );
  }, [setNodes]);

  // 资产从抽屉拖拽释放到画布 (Drag-to-Mount)
  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      try {
        const raw = e.dataTransfer.getData('application/json');
        if (!raw) return;
        const payload = JSON.parse(raw);
        if (payload.type === 'omnimux-asset' && payload.asset) {
          const asset = payload.asset;
          const pos = screenToFlowPosition({ x: e.clientX, y: e.clientY });
          const targetType: MaterialType =
            asset.type === 'video' ? 'video' : asset.type === 'image' ? 'image' : 'text';
          const result = createMaterialNode(targetType, pos, {
            title: asset.name,
            content: asset.real_path || asset.prompt || '',
            previewUrl: asset.previewUrl,
            status: 'ready',
          });
          const newNode = result.nodes[0];
          if (newNode) {
            applyCanvasInputMutation({
              addNodes: [newNode],
            });
            setSelectedElement('node', newNode.id);
            toast.success(`已挂载素材到画布: ${asset.name}`);
          }
        }
      } catch (err) {
        console.error('Failed to parse dropped asset', err);
      }
    },
    [screenToFlowPosition, applyCanvasInputMutation, setSelectedElement],
  );

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
        onDragOver={handleDragOver}
        onDrop={handleDrop}
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
        panOnDrag={pointerMode === 'pan' ? true : PAN_ON_DRAG}
        panOnScroll
        panOnScrollMode={PanOnScrollMode.Free}
        zoomOnScroll
        zoomOnPinch
        selectionOnDrag={pointerMode === 'select'}
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
      </ReactFlow>

      {/* 顶部右侧控制栏胶囊 */}
      <HeaderControls
        isMinimapOpen={isMinimapOpen}
        onToggleMinimap={() => setIsMinimapOpen((prev) => !prev)}
        onAlignGrid={handleAlignGrid}
        onStartExecution={onStartExecution}
        onPauseExecution={onPauseExecution}
        onResumeExecution={onResumeExecution}
        onCancelExecution={onCancelExecution}
        onResetExecution={onResetExecution}
      />

      {/* 浮动小地图 Popover */}
      {isMinimapOpen && (
        <div className="wf-minimap-popover nodrag nopan">
          <MiniMap pannable zoomable />
        </div>
      )}

      {/* 底部悬浮控制坞 */}
      <Toolbar
        onAddNode={handleAddNode}
        onUndo={undo}
        onRedo={redo}
        canUndo={canUndo}
        canRedo={canRedo}
        pointerMode={pointerMode}
        onPointerModeChange={setPointerMode}
        onOpenAssets={() => setIsAssetsOpen((prev) => !prev)}
        onOpenHelp={() => setIsShortcutsOpen((prev) => !prev)}
        isAssetsOpen={isAssetsOpen}
        isAddMenuOpen={isAddMenuOpen}
        onToggleAddMenu={() => setIsAddMenuOpen((prev) => !prev)}
      />

      {/* 项目资产抽屉 (带防护隔离，保证画布永远不黑屏) */}
      {isAssetsOpen && (
        <DrawerErrorBoundary onClose={() => setIsAssetsOpen(false)}>
          <AssetsDrawer
            isOpen={isAssetsOpen}
            onClose={() => setIsAssetsOpen(false)}
            onInsertAsset={handleInsertAsset}
            nodes={flowNodes}
            onFocusNode={(nodeId) => {
              const targetNode = flowNodes.find((n) => n.id === nodeId);
              if (targetNode) {
                setCenter(targetNode.position.x + 100, targetNode.position.y + 100, {
                  zoom: 1,
                  duration: 800,
                });
                // 选中该节点
                setNodes((nds) =>
                  nds.map((n) => ({
                    ...n,
                    selected: n.id === nodeId,
                  })),
                );
              }
            }}
          />
        </DrawerErrorBoundary>
      )}

      {/* 快捷键帮助浮窗 */}
      <ShortcutsModal
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
      />

      <ContextMenu
        x={menu.x}
        y={menu.y}
        visible={menu.visible}
        context={menu.context}
        onClose={closeMenu}
        onAction={handleMenuAction}
        onAddNode={handleAddNodeFromMenu}
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

      {/* 全屏独立电子表格舞台 */}
      <SpreadsheetStage />

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
