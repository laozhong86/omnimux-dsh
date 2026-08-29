import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import {
  X,
  ArrowUp,
} from 'lucide-react';
import { stopToolbarNativeEvent } from './toolbarPointerGuard';
import { toast } from '../../ui';
import {
  CanvasOutlineView,
  ProjectAssetsView,
  SubjectLibraryView,
  HoverInspector,
  CanvasItemContextMenu,
  AssetItemContextMenu,
  FolderContextMenu,
  extractCanvasAssets,
} from './assets';
import type {
  ActiveTab,
  AssetItem,
  CanvasNodeItem,
  SubjectPack,
  ContextMenuState,
  HoverInspectorState,
  ViewMode,
} from './assets/types';

export interface AssetRecord {
  id: string;
  name: string;
  type: string;
  description?: string;
  real_path?: string;
  previewUrl?: string;
  files?: Array<{ id: string; name: string; path: string }>;
  tags?: string[];
  updatedAt?: number;
}

interface AssetsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onInsertAsset?: (asset: any) => void;
  activeCategory?: string;
  onCategoryChange?: (category: string) => void;
  nodes?: any[];
  onFocusNode?: (nodeId: string) => void;
}

export const AssetsDrawer: React.FC<AssetsDrawerProps> = ({
  isOpen,
  onClose,
  onInsertAsset,
  nodes: propNodes,
  onFocusNode: propOnFocusNode,
}) => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('canvas');
  const [viewState, setViewState] = useState<'normal' | 'subject-library'>('normal');
  const [canvasViewMode, setCanvasViewMode] = useState<ViewMode>('tree');
  const [drawerWidth, setDrawerWidth] = useState(320);
  const [isResizing, setIsResizing] = useState(false);

  // 画布 Tab 由真实节点纯派生；资产 / 主体库初始为空，导入后才写入本地 list。
  const canvasNodes = useMemo(() => extractCanvasAssets(propNodes), [propNodes]);
  const [assets, setAssets] = useState<AssetItem[]>([]);
  const [subjects, setSubjects] = useState<SubjectPack[]>([]);

  // Context Menu state
  const [contextMenu, setContextMenu] = useState<ContextMenuState>({
    visible: false,
    x: 0,
    y: 0,
    targetType: 'canvas-item',
  });

  // Hover Inspector state
  const [hoverInspector, setHoverInspector] = useState<HoverInspectorState>({
    visible: false,
    x: 0,
    y: 0,
  });
  const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) {
        clearTimeout(hoverTimerRef.current);
        hoverTimerRef.current = null;
      }
    };
  }, []);

  // Width Resize Handler
  const startResize = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
    const startX = e.clientX;
    const startWidth = drawerWidth;

    const onMouseMove = (moveEvent: MouseEvent) => {
      const newWidth = Math.max(260, Math.min(500, startWidth - (moveEvent.clientX - startX)));
      setDrawerWidth(newWidth);
    };

    const onMouseUp = () => {
      setIsResizing(false);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  }, [drawerWidth]);

  // Focus node handler
  const handleFocusNode = (nodeId: string) => {
    if (propOnFocusNode) {
      propOnFocusNode(nodeId);
    } else {
      const el = document.getElementById(nodeId) || document.querySelector(`[data-id="${nodeId}"]`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('highlight-pulse');
        setTimeout(() => el.classList.remove('highlight-pulse'), 1800);
      }
    }
  };

  // Hover Inspector Trigger
  const handleHoverItem = (item: AssetItem | CanvasNodeItem | null, e?: React.MouseEvent) => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }

    if (!item || !e) {
      setHoverInspector({ visible: false, x: 0, y: 0 });
      return;
    }

    const { clientX, clientY } = e;
    hoverTimerRef.current = setTimeout(() => {
      setHoverInspector({
        visible: true,
        x: clientX,
        y: clientY,
        item,
      });
    }, 300);
  };

  // Context Menu Trigger Handlers
  const handleCanvasContextMenu = (e: React.MouseEvent, item: CanvasNodeItem) => {
    setContextMenu({
      visible: true,
      x: e.clientX,
      y: e.clientY,
      targetType: 'canvas-item',
      targetItem: item,
    });
  };

  const handleAssetContextMenu = (e: React.MouseEvent, item: AssetItem, isFolder: boolean) => {
    setContextMenu({
      visible: true,
      x: e.clientX,
      y: e.clientY,
      targetType: isFolder ? 'asset-folder' : 'asset-item',
      targetItem: item,
    });
  };

  const itemPath = (item: { name: string; real_path?: string }) =>
    item.real_path || item.name;

  const insertToChat = (item: { name: string; previewUrl?: string; real_path?: string }, kind: 'canvas' | 'asset') => {
    const label = kind === 'canvas' ? '素材引用' : '项目资产引用';
    const text = `[${label}: ${item.name}]`;
    navigator.clipboard?.writeText(text);
    window.dispatchEvent(
      new CustomEvent('omnimux:insert-chat', {
        detail: { text, name: item.name, previewUrl: item.previewUrl, path: item.real_path },
      }),
    );
    toast.success(`已添加到对话：${item.name}`);
  };

  const revealInFinder = (item: { name: string; real_path?: string }) => {
    const path = itemPath(item);
    navigator.clipboard?.writeText(path);
    window.dispatchEvent(
      new CustomEvent('omnimux:reveal-in-finder', { detail: { path, name: item.name } }),
    );
    toast.success(`已复制路径，可在访达中定位：${path}`);
  };

  const handleCanvasMenuAction = (action: string, item: CanvasNodeItem) => {
    switch (action) {
      case 'add-to-canvas':
        onInsertAsset?.(item);
        toast.success(`已添加到画布：${item.name}`);
        break;
      case 'focus-in-canvas':
        handleFocusNode(item.id);
        toast.info('已在画布中定位');
        break;
      case 'add-to-dialog':
      case 'add-to-chat':
        insertToChat(item, 'canvas');
        break;
      case 'add-to-subjects':
        setSubjects((prev) => [
          {
            id: `sub-${Date.now()}`,
            name: item.name.replace(/\.[^/.]+$/, ''),
            avatar: item.previewUrl || '',
            itemCount: 1,
            tags: [item.type, '来自画布'],
            updatedAt: Date.now(),
            previewUrls: item.previewUrl ? [item.previewUrl] : [],
          },
          ...prev,
        ]);
        toast.success(`已添加到主体库：${item.name}`);
        break;
      case 'save-to-assets':
        setAssets((prev) => [
          {
            id: `asset-${Date.now()}`,
            name: item.name,
            type: (item.type as AssetItem['type']) || 'doc',
            fileExt: item.name.split('.').pop()?.toUpperCase() || 'FILE',
            updatedAt: Date.now(),
            previewUrl: item.previewUrl,
            real_path: item.real_path,
            tags: ['画布沉淀'],
          },
          ...prev,
        ]);
        toast.success(`已存到项目资产：${item.name}`);
        break;
      case 'open-preview':
        if (item.previewUrl) {
          window.open(item.previewUrl, '_blank', 'noopener,noreferrer');
          toast.success('已打开预览');
        } else {
          toast.warning('当前素材暂无预览');
        }
        break;
      case 'reveal-in-finder':
        revealInFinder(item);
        break;
      case 'copy-path':
        navigator.clipboard?.writeText(itemPath(item));
        toast.success(`已复制路径：${itemPath(item)}`);
        break;
      case 'copy-file':
        navigator.clipboard?.writeText(item.name);
        toast.success(`已复制文件名：${item.name}`);
        break;
      case 'duplicate':
        toast.info('请在画布上复制节点');
        break;
      case 'toggle-tree-view':
        setCanvasViewMode((prev) => (prev === 'tree' ? 'grid' : 'tree'));
        toast.success(canvasViewMode === 'tree' ? '已切换到网格视图' : '已切换到树形视图');
        break;
      case 'rename':
        toast.info('请在画布上重命名节点');
        break;
      case 'delete':
        toast.info('请在画布上删除节点');
        break;
      default:
        toast.warning(`未识别的菜单动作：${action}`);
        break;
    }
  };

  const handleAssetMenuAction = (action: string, item: AssetItem) => {
    switch (action) {
      case 'add-to-canvas':
        onInsertAsset?.(item);
        toast.success(`已添加到画布：${item.name}`);
        break;
      case 'add-to-agent':
      case 'add-to-chat':
        insertToChat(item, 'asset');
        break;
      case 'reveal-in-finder':
        revealInFinder(item);
        break;
      case 'move-to': {
        const folders = assets.filter((a) => a.type === 'folder');
        const names = folders.map((f) => f.name).join(' / ') || '根目录';
        const target = prompt(`移动至目标文件夹（${names}）：`, folders[0]?.name || '');
        if (target && target.trim()) {
          const folder = folders.find((f) => f.name === target.trim());
          setAssets((prev) =>
            prev.map((a) =>
              a.id === item.id ? { ...a, parentId: folder?.id || target.trim() } : a,
            ),
          );
          toast.success(`已移动到：${target.trim()}`);
        }
        break;
      }
      case 'delete':
        setAssets((prev) => prev.filter((a) => a.id !== item.id));
        toast.success(`已删除：${item.name}`);
        break;
      default:
        toast.warning(`未识别的菜单动作：${action}`);
        break;
    }
  };

  const handleFolderMenuAction = (action: string, item: AssetItem) => {
    switch (action) {
      case 'reveal-in-finder':
        revealInFinder(item);
        break;
      case 'rename': {
        const newName = prompt('重命名文件夹：', item.name);
        if (newName && newName.trim()) {
          setAssets((prev) =>
            prev.map((a) => (a.id === item.id ? { ...a, name: newName.trim() } : a)),
          );
          toast.success('文件夹已重命名');
        }
        break;
      }
      case 'move-to': {
        const folders = assets.filter((a) => a.type === 'folder' && a.id !== item.id);
        const names = folders.map((f) => f.name).join(' / ') || '根目录';
        const target = prompt(`移动至目标文件夹（${names}）：`, folders[0]?.name || '');
        if (target && target.trim()) {
          const folder = folders.find((f) => f.name === target.trim());
          setAssets((prev) =>
            prev.map((a) =>
              a.id === item.id ? { ...a, parentId: folder?.id || target.trim() } : a,
            ),
          );
          toast.success(`文件夹已移动到：${target.trim()}`);
        }
        break;
      }
      case 'delete':
        setAssets((prev) => prev.filter((a) => a.id !== item.id && a.parentId !== item.id));
        toast.success(`已删除文件夹：${item.name}`);
        break;
      default:
        toast.warning(`未识别的菜单动作：${action}`);
        break;
    }
  };

  const handleImportFiles = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.onchange = (e: any) => {
      const files = e.target.files;
      if (files && files.length > 0) {
        const newItems: AssetItem[] = Array.from(files).map((f: any, idx) => ({
          id: `upload-${Date.now()}-${idx}`,
          name: f.name,
          type: f.type.startsWith('image/') ? 'image' : f.type.startsWith('video/') ? 'video' : 'doc',
          fileExt: f.name.split('.').pop()?.toUpperCase() || 'FILE',
          size: `${(f.size / (1024 * 1024)).toFixed(1)} MB`,
          updatedAt: Date.now(),
          tags: ['最新导入'],
        }));
        setAssets((prev) => [...newItems, ...prev]);
        toast.success(`已导入 ${newItems.length} 个文件`);
      }
    };
    input.click();
  };

  const handleCreateFolder = () => {
    const name = prompt('请输入新文件夹名称：', '新建素材文件夹');
    if (name && name.trim()) {
      const newFolder: AssetItem = {
        id: `folder-${Date.now()}`,
        name: name.trim(),
        type: 'folder',
        itemCount: 0,
        updatedAt: Date.now(),
      };
      setAssets((prev) => [newFolder, ...prev]);
      toast.success(`已新建文件夹：${name.trim()}`);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="wf-assets-drawer-root nodrag nopan"
      style={{ width: `${drawerWidth}px` }}
      onPointerDown={stopToolbarNativeEvent}
      onMouseDown={stopToolbarNativeEvent}
      onClick={(e) => e.stopPropagation()}
    >
      {/* 拖拽宽度调节手柄 */}
      <div className={`wf-drawer-resize-handle ${isResizing ? 'resizing' : ''}`} onMouseDown={startResize} />

      {/* 极简顶栏: 单行分段切换器 [ 画布 ] [ 资产 ] + 关闭按钮 ✕ */}
      <div className="wf-drawer-header-compact">
        <div className="wf-segmented-switch-compact">
          <button
            type="button"
            className={`wf-segmented-tab-compact ${activeTab === 'canvas' && viewState === 'normal' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('canvas');
              setViewState('normal');
            }}
          >
            画布
          </button>

          <button
            type="button"
            className={`wf-segmented-tab-compact ${activeTab === 'assets' || viewState === 'subject-library' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('assets');
            }}
          >
            资产
          </button>
        </div>

        <button
          type="button"
          className="wf-drawer-close-btn-compact"
          onClick={onClose}
          title="关闭抽屉 (Esc / A)"
        >
          <X size={14} />
        </button>
      </div>

      {/* 抽屉内容主体区 */}
      <div className="wf-drawer-body">
        {viewState === 'subject-library' ? (
          <SubjectLibraryView
            subjects={subjects}
            onBack={() => setViewState('normal')}
            onSelectSubject={(sub) => {
              // Expand subject assets
            }}
            onCreateSubject={() => {
              const name = prompt('请输入新主体名称：', '新主体');
              if (name && name.trim()) {
                setSubjects((prev) => [
                  {
                    id: `sub-${Date.now()}`,
                    name: name.trim(),
                    avatar: '',
                    itemCount: 0,
                    tags: ['自定义'],
                    updatedAt: Date.now(),
                    previewUrls: [],
                  },
                  ...prev,
                ]);
              }
            }}
          />
        ) : activeTab === 'canvas' ? (
          <div className="wf-drawer-tab-canvas-wrap">
            <CanvasOutlineView
              nodes={canvasNodes}
              onFocusNode={handleFocusNode}
              onContextMenu={handleCanvasContextMenu}
              onHoverItem={handleHoverItem}
              viewMode={canvasViewMode}
              onViewModeChange={setCanvasViewMode}
              onRefresh={() => {
                toast.success('已刷新画布素材');
              }}
            />

            {/* 画布 Tab 紧凑底部导入按钮 (始终吸底固定) */}
            <div className="wf-assets-bottom-bar-compact">
              <button
                type="button"
                className="wf-assets-action-primary-btn-compact"
                style={{ width: '100%' }}
                onClick={handleImportFiles}
              >
                <ArrowUp size={13} />
                <span>导入文件</span>
              </button>
            </div>
          </div>
        ) : (
          <ProjectAssetsView
            assets={assets}
            onOpenSubjects={() => setViewState('subject-library')}
            onContextMenu={handleAssetContextMenu}
            onHoverItem={handleHoverItem}
            onImportFiles={handleImportFiles}
            onCreateFolder={handleCreateFolder}
            onInsertToCanvas={(item) => onInsertAsset?.(item)}
          />
        )}
      </div>

      {/* 悬停元数据卡片 (Hover Inspector) */}
      <HoverInspector
        isOpen={hoverInspector.visible}
        x={hoverInspector.x}
        y={hoverInspector.y}
        item={hoverInspector.item || null}
      />

      {/* 画布素材专属右键菜单 (13 项) */}
      <CanvasItemContextMenu
        isOpen={contextMenu.visible && contextMenu.targetType === 'canvas-item'}
        x={contextMenu.x}
        y={contextMenu.y}
        item={(contextMenu.targetItem as CanvasNodeItem) || null}
        onAction={handleCanvasMenuAction}
        onClose={() => setContextMenu((prev) => ({ ...prev, visible: false }))}
      />

      {/* 资产素材专属右键菜单 (5 项) */}
      <AssetItemContextMenu
        isOpen={contextMenu.visible && contextMenu.targetType === 'asset-item'}
        x={contextMenu.x}
        y={contextMenu.y}
        item={(contextMenu.targetItem as AssetItem) || null}
        onAction={handleAssetMenuAction}
        onClose={() => setContextMenu((prev) => ({ ...prev, visible: false }))}
      />

      {/* 资产文件夹专属右键菜单 (4 项) */}
      <FolderContextMenu
        isOpen={contextMenu.visible && contextMenu.targetType === 'asset-folder'}
        x={contextMenu.x}
        y={contextMenu.y}
        item={(contextMenu.targetItem as AssetItem) || null}
        onAction={handleFolderMenuAction}
        onClose={() => setContextMenu((prev) => ({ ...prev, visible: false }))}
      />
    </div>
  );
};

export default AssetsDrawer;
