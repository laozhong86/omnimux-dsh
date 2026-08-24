import React, { useState, useEffect, useCallback } from 'react';
import {
  Folder,
  Image,
  Film,
  FileText,
  Sparkles,
  X,
  Search,
  Plus,
  RefreshCw,
  Tag,
} from 'lucide-react';
import { stopToolbarNativeEvent } from './toolbarPointerGuard';

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
  onInsertAsset: (asset: AssetRecord) => void;
  activeCategory?: string;
  onCategoryChange?: (category: string) => void;
}

const CATEGORIES = [
  { key: 'all', label: '全部', icon: Folder },
  { key: 'character', label: '角色 (1)', icon: Sparkles },
  { key: 'scene', label: '场景 (2)', icon: Image },
  { key: 'prop', label: '道具 (3)', icon: Tag },
  { key: 'style', label: '风格 (4)', icon: Sparkles },
  { key: 'knowledge', label: '知识 (5)', icon: FileText },
  { key: 'custom', label: '自定义 (6)', icon: Folder },
  { key: 'artifacts', label: '产物库', icon: Film },
];

export const AssetsDrawer: React.FC<AssetsDrawerProps> = ({
  isOpen,
  onClose,
  onInsertAsset,
  activeCategory = 'all',
  onCategoryChange,
}) => {
  const [selectedCat, setSelectedCat] = useState(activeCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [assets, setAssets] = useState<AssetRecord[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAssets = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // 1. Fetch creative library assets
      const query = selectedCat !== 'all' && selectedCat !== 'artifacts' ? `?type=${selectedCat}` : '';
      const res = await fetch(`/omnimux/assets/library${query}`);
      let libraryAssets: AssetRecord[] = [];
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data.assets)) {
          libraryAssets = data.assets.map((a: any) => ({
            id: a.id,
            name: a.name,
            type: a.type || 'custom',
            description: a.description,
            real_path: a.real_path,
            previewUrl: `/omnimux/assets/library/preview?id=${encodeURIComponent(a.id)}`,
            tags: a.tags || [],
            updatedAt: a.updatedAt,
          }));
        }
      }

      // 2. If artifacts selected or all
      let artifactList: AssetRecord[] = [];
      if (selectedCat === 'all' || selectedCat === 'artifacts') {
        const artRes = await fetch('/omnimux/assets/artifacts');
        if (artRes.ok) {
          const artData = await artRes.json();
          if (Array.isArray(artData.artifacts)) {
            artifactList = artData.artifacts.map((art: any) => ({
              id: art.id,
              name: art.name || art.filename || '未命名产物',
              type: 'artifacts',
              description: art.prompt || art.agent,
              real_path: art.real_path,
              previewUrl: `/omnimux/assets/artifacts/detail?id=${encodeURIComponent(art.id)}`,
              tags: [art.type || 'artifact'],
              updatedAt: art.createdAt,
            }));
          }
        }
      }

      const combined = [...libraryAssets, ...artifactList];
      setAssets(combined);
    } catch (err: any) {
      setError(err.message || '加载资产库失败');
    } finally {
      setLoading(false);
    }
  }, [selectedCat]);

  useEffect(() => {
    if (isOpen) {
      void fetchAssets();
    }
  }, [isOpen, fetchAssets]);

  const handleSelectCat = (key: string) => {
    setSelectedCat(key);
    onCategoryChange?.(key);
  };

  const filteredAssets = assets.filter((item) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      item.name.toLowerCase().includes(q) ||
      (item.description && item.description.toLowerCase().includes(q)) ||
      (item.tags && item.tags.some((t) => t.toLowerCase().includes(q)))
    );
  });

  if (!isOpen) return null;

  return (
    <div
      className="wf-assets-drawer nodrag nopan"
      onPointerDown={stopToolbarNativeEvent}
      onMouseDown={stopToolbarNativeEvent}
      onClick={(e) => e.stopPropagation()}
    >
      {/* 抽屉头部 */}
      <div className="wf-assets-drawer__header">
        <div className="wf-assets-drawer__title">
          <Folder size={18} />
          <span>项目资产库</span>
          <span className="wf-assets-drawer__badge">快捷键 A</span>
        </div>
        <div className="wf-assets-drawer__actions">
          <button
            type="button"
            className="wf-assets-drawer__icon-btn"
            onClick={fetchAssets}
            title="刷新资产"
          >
            <RefreshCw size={14} className={loading ? 'wf-spin' : ''} />
          </button>
          <button
            type="button"
            className="wf-assets-drawer__icon-btn"
            onClick={onClose}
            title="关闭 (Esc / A)"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* 分类快捷切换 Tab 栏 */}
      <div className="wf-assets-drawer__categories">
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          const isActive = selectedCat === cat.key;
          return (
            <button
              key={cat.key}
              type="button"
              className={`wf-assets-drawer__cat-btn ${isActive ? 'wf-assets-drawer__cat-btn--active' : ''}`}
              onClick={() => handleSelectCat(cat.key)}
            >
              <Icon size={13} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* 搜索框 */}
      <div className="wf-assets-drawer__search">
        <Search size={14} className="wf-assets-drawer__search-icon" />
        <input
          type="text"
          className="wf-assets-drawer__search-input"
          placeholder="搜索资产或标签..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && (
          <button
            type="button"
            className="wf-assets-drawer__search-clear"
            onClick={() => setSearchQuery('')}
          >
            <X size={12} />
          </button>
        )}
      </div>

      {/* 资产列表内容 */}
      <div className="wf-assets-drawer__body">
        {loading && (
          <div className="wf-assets-drawer__empty">
            <RefreshCw size={20} className="wf-spin" />
            <span>加载资产中...</span>
          </div>
        )}

        {error && !loading && (
          <div className="wf-assets-drawer__empty wf-assets-drawer__empty--error">
            <span>{error}</span>
            <button type="button" onClick={fetchAssets} className="wf-assets-drawer__retry-btn">
              重试
            </button>
          </div>
        )}

        {!loading && !error && filteredAssets.length === 0 && (
          <div className="wf-assets-drawer__empty">
            <Folder size={32} strokeWidth={1.2} />
            <span>当前分类暂无资产</span>
            <p className="wf-assets-drawer__empty-hint">在资产库一级页添加角色、场景或道具后即可在此直接引用</p>
          </div>
        )}

        {!loading && !error && filteredAssets.length > 0 && (
          <div className="wf-assets-drawer__grid">
            {filteredAssets.map((asset) => (
              <div
                key={asset.id}
                className="wf-assets-card"
                onClick={() => onInsertAsset(asset)}
                title={`点击将「${asset.name}」插入到画布`}
              >
                <div className="wf-assets-card__preview">
                  {asset.type === 'scene' || asset.type === 'character' || asset.type === 'artifacts' ? (
                    <img
                      src={asset.previewUrl}
                      alt={asset.name}
                      onError={(e) => {
                        // fallback to icon placeholder
                        (e.currentTarget as HTMLElement).style.display = 'none';
                      }}
                    />
                  ) : (
                    <FileText size={24} className="wf-assets-card__file-icon" />
                  )}
                  <span className="wf-assets-card__type-tag">{asset.type}</span>
                </div>
                <div className="wf-assets-card__meta">
                  <div className="wf-assets-card__name">{asset.name}</div>
                  {asset.description && (
                    <div className="wf-assets-card__desc">{asset.description}</div>
                  )}
                </div>
                <button
                  type="button"
                  className="wf-assets-card__insert-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    onInsertAsset(asset);
                  }}
                  title="插入画布"
                >
                  <Plus size={14} />
                  <span>放入画布</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AssetsDrawer;
