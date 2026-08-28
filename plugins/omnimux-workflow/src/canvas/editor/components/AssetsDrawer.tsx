import React, { useState, useEffect, useRef, useCallback } from 'react';
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

const INITIAL_CANVAS_NODES: CanvasNodeItem[] = [
  {
    id: 'node-1',
    name: '截屏2026-08-21 12.17.35.png',
    type: 'image',
    prompt: 'masterpiece, 1girl, cyberpunk city background, neon lights, 8k',
    previewUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80',
    tags: ['scene'],
    updatedAt: Date.now() - 1000 * 60 * 15,
  },
  {
    id: 'node-2',
    name: '截屏2026-08-22 11.24.02.png',
    type: 'image',
    prompt: 'ayla character portrait, sci-fi costume, detailed face',
    previewUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=400&q=80',
    tags: ['person'],
    updatedAt: Date.now() - 1000 * 60 * 45,
  },
  {
    id: 'node-3',
    name: '截屏2026-08-22 11.54.15.png',
    type: 'image',
    prompt: 'cyberpunk alley at night, rain reflection on ground',
    previewUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
    tags: ['scene'],
    updatedAt: Date.now() - 1000 * 60 * 80,
  },
  {
    id: 'node-4',
    name: '截屏2026-08-22 14.26.02.png',
    type: 'image',
    prompt: 'high-tech quantum terminal device, glowing blue interface',
    previewUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=80',
    tags: ['prop'],
    updatedAt: Date.now() - 1000 * 60 * 110,
  },
  {
    id: 'node-5',
    name: '播客男.MP3',
    type: 'audio',
    tags: ['voice'],
    updatedAt: Date.now() - 1000 * 60 * 140,
  },
  {
    id: 'node-6',
    name: '分镜脚本大纲 #01.md',
    type: 'text',
    prompt: '第一幕：雨夜初遇，主角从阴影中走出，手持量子终端...',
    tags: ['draft'],
    updatedAt: Date.now() - 1000 * 60 * 180,
  },
  {
    id: 'node-7',
    name: '主角回眸动态分镜_Seedance.mp4',
    type: 'video',
    previewUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&q=80',
    tags: ['final'],
    updatedAt: Date.now() - 1000 * 60 * 240,
  },
];

const INITIAL_ASSETS: AssetItem[] = [
  {
    id: 'folder-1',
    name: '01_角色立绘与三视图',
    type: 'folder',
    itemCount: 4,
    updatedAt: Date.now() - 1000 * 60 * 60,
  },
  {
    id: 'folder-2',
    name: '02_分镜参考素材',
    type: 'folder',
    itemCount: 8,
    updatedAt: Date.now() - 1000 * 60 * 120,
  },
  {
    id: 'asset-1',
    name: '截屏2026-08-21 12.17.35.png',
    type: 'image',
    fileExt: 'PNG',
    size: '2.4 MB',
    resolution: '1920 × 1080',
    tags: ['场景底图', '后期调色'],
    previewUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80',
    updatedAt: Date.now() - 1000 * 60 * 30,
  },
  {
    id: 'asset-2',
    name: '截屏2026-08-22 11.24.02.png',
    type: 'image',
    fileExt: 'PNG',
    size: '313 KB',
    resolution: '1622 × 1194',
    tags: ['角色立绘'],
    previewUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=400&q=80',
    updatedAt: Date.now() - 1000 * 60 * 45,
  },
  {
    id: 'asset-3',
    name: '雨夜追逐_动态分镜_v2.mp4',
    type: 'video',
    fileExt: 'MP4',
    size: '28.5 MB',
    duration: '00:08',
    resolution: '1920 × 1080',
    tags: ['特写镜头', '特效分层'],
    previewUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&q=80',
    updatedAt: Date.now() - 1000 * 60 * 80,
  },
  {
    id: 'asset-4',
    name: '短剧第一季_台词脚本_定稿.pdf',
    type: 'doc',
    fileExt: 'PDF',
    size: '840 KB',
    tags: ['特写镜头'],
    updatedAt: Date.now() - 1000 * 60 * 150,
  },
  {
    id: 'asset-5',
    name: '播客男.MP3',
    type: 'audio',
    fileExt: 'MP3',
    size: '4.2 MB',
    tags: ['音效提示'],
    updatedAt: Date.now() - 1000 * 60 * 200,
  },
];

const INITIAL_SUBJECTS: SubjectPack[] = [
  {
    id: 'sub-1',
    name: '主角·艾拉 (Ayla)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
    itemCount: 6,
    tags: ['立绘', '三视图', 'Lora模型', '音色'],
    updatedAt: Date.now() - 1000 * 60 * 30,
    previewUrls: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    ],
  },
  {
    id: 'sub-2',
    name: '反派·赛博机械师·维克托',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
    itemCount: 4,
    tags: ['角色', '概念图', '机甲'],
    updatedAt: Date.now() - 1000 * 60 * 90,
    previewUrls: [],
  },
  {
    id: 'sub-3',
    name: '核心场景·老城区地下黑市',
    avatar: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=300&auto=format&fit=crop&q=80',
    itemCount: 5,
    tags: ['场景', '氛围图', '光影方案'],
    updatedAt: Date.now() - 1000 * 60 * 180,
    previewUrls: [],
  },
];

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

  // Data states
  const [canvasNodes, setCanvasNodes] = useState<CanvasNodeItem[]>(INITIAL_CANVAS_NODES);
  const [assets, setAssets] = useState<AssetItem[]>(INITIAL_ASSETS);
  const [subjects, setSubjects] = useState<SubjectPack[]>(INITIAL_SUBJECTS);

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
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Sync canvas nodes from prop if available
  useEffect(() => {
    if (Array.isArray(propNodes)) {
      const hasRealAsset = (n: any): boolean => {
        if (!n || !n.data) return false;
        const d = n.data;

        // 1. 本地磁盘物理文件路径 (导入的素材)
        if (typeof d.real_path === 'string' && d.real_path.trim().length > 0) return true;
        if (typeof d.path === 'string' && d.path.trim().length > 0) return true;
        if (typeof d.filePath === 'string' && d.filePath.trim().length > 0) return true;

        // 2. 已生成的图片/视频/音频媒体结果或预览
        if (typeof d.previewUrl === 'string' && d.previewUrl.trim().length > 0) return true;
        if (typeof d.imageUrl === 'string' && d.imageUrl.trim().length > 0) return true;
        if (typeof d.outputUrl === 'string' && d.outputUrl.trim().length > 0) return true;
        if (typeof d.mediaUrl === 'string' && d.mediaUrl.trim().length > 0) return true;
        if (typeof d.coverUrl === 'string' && d.coverUrl.trim().length > 0) return true;
        if (typeof d.url === 'string' && d.url.trim().length > 0) return true;

        // 3. SSE 执行生成的多媒体产物数组 (mediaAssets)
        if (Array.isArray(d.mediaAssets) && d.mediaAssets.some((a: any) => a && (a.url || a.path || a.real_path))) {
          return true;
        }

        // 4. 多文件/多素材挂载
        if (Array.isArray(d.materials) && d.materials.length > 0) return true;
        if (Array.isArray(d.files) && d.files.length > 0) return true;

        // 5. 任务已完成且有产物输出
        if ((d.status === 'completed' || d.executionStatus === 'completed') && (d.output || d.result || d.previewUrl || d.mediaUrl)) {
          return true;
        }

        // 6. 文档/脚本/表格类型：必须有实质文本内容或结构化数据，未填写的空节点不显示
        const matType = String(d.materialType || n.type || '').toLowerCase();
        if (matType === 'text' || matType === 'doc' || matType === 'table' || matType === 'script') {
          const content = String(d.content || d.text || d.prompt || '').trim();
          if (content.length > 0) return true;
        }

        return false;
      };

      const mapNodeType = (n: any): 'image' | 'video' | 'audio' | 'text' | 'doc' => {
        const materialType = String(n.data?.materialType || n.data?.mediaType || '').toLowerCase();
        if (materialType === 'image') return 'image';
        if (materialType === 'video') return 'video';
        if (materialType === 'audio') return 'audio';
        if (materialType === 'text') return 'text';

        const t = String(n.type || '').toLowerCase();
        if (t === 'video_composition' || t.includes('video') || t.includes('clip')) return 'video';
        if (t.includes('image') || t === 'media') return 'image';
        if (t.includes('audio') || t.includes('sound') || t.includes('voice')) return 'audio';
        if (t.includes('prompt') || t.includes('text') || t.includes('script') || t === 'note' || t === 'table') return 'text';
        return 'doc';
      };

      // 仅过滤出具备真实导入文件或生成产物的实体节点
      const validNodes = propNodes.filter(hasRealAsset);

      const mapped: CanvasNodeItem[] = validNodes.map((n: any) => {
        const mappedType = mapNodeType(n);
        const previewUrl =
          n.data?.previewUrl ||
          n.data?.imageUrl ||
          n.data?.outputUrl ||
          n.data?.mediaUrl ||
          n.data?.coverUrl;
        return {
          id: n.id,
          name: n.data?.label || n.data?.title || n.data?.name || `${n.type || '节点'} #${String(n.id || '').slice(-4)}`,
          type: mappedType,
          prompt: n.data?.prompt || n.data?.text || n.data?.content || '',
          previewUrl,
          real_path: n.data?.real_path || n.data?.path || n.data?.content,
          tags: Array.isArray(n.data?.tags) ? n.data.tags : [],
          updatedAt: n.data?.updatedAt || Date.now(),
        };
      });
      setCanvasNodes(mapped);
    } else {
      setCanvasNodes(INITIAL_CANVAS_NODES);
    }
  }, [propNodes]);

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
            size: '2.4 MB',
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
        setCanvasNodes((prev) => [
          {
            ...item,
            id: `node-${Date.now()}`,
            name: `副本_${item.name}`,
            updatedAt: Date.now(),
          },
          ...prev,
        ]);
        toast.success(`已创建副本：${item.name}`);
        break;
      case 'toggle-tree-view':
        setCanvasViewMode((prev) => (prev === 'tree' ? 'grid' : 'tree'));
        toast.success(canvasViewMode === 'tree' ? '已切换到网格视图' : '已切换到树形视图');
        break;
      case 'rename': {
        const newName = prompt('重命名素材：', item.name);
        if (newName && newName.trim()) {
          setCanvasNodes((prev) =>
            prev.map((n) => (n.id === item.id ? { ...n, name: newName.trim() } : n)),
          );
          toast.success('已重命名');
        }
        break;
      }
      case 'delete':
        setCanvasNodes((prev) => prev.filter((n) => n.id !== item.id));
        toast.success(`已删除：${item.name}`);
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
                if (propNodes && propNodes.length > 0) {
                  toast.success('已刷新画布素材');
                } else {
                  setCanvasNodes([...INITIAL_CANVAS_NODES]);
                  toast.success('已刷新画布素材');
                }
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
