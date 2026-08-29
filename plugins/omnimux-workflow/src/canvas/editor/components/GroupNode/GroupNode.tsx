import React, { memo, useState, useCallback } from 'react';
import { useReactFlow, type NodeProps } from '@xyflow/react';
import { useCanvasStore } from '../../../store/canvasStore';
import type { GroupNodeData } from '../../../../shared/canvasTypes';
import { useT } from '../../../i18n';
import { childIdsOfGroup } from '../../utils/nodeVisualMath';
import { GroupTopBar } from './GroupTopBar';
import { GroupResizeHandles } from './GroupResizeHandles';

export const GroupNode: React.FC<NodeProps> = memo(({
  id,
  data,
  selected,
  width: rawWidth,
  height: rawHeight,
}) => {
  const t = useT();
  const groupData = data as unknown as GroupNodeData;
  const title = groupData.title || t('group.defaultTitle');
  const color = groupData.color || 'var(--wb-accent)';
  const minWidth = groupData.minWidth || 300;
  const minHeight = groupData.minHeight || 200;

  const width = typeof rawWidth === 'number' && rawWidth > 0 ? rawWidth : 400;
  const height = typeof rawHeight === 'number' && rawHeight > 0 ? rawHeight : 300;

  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [titleInput, setTitleInput] = useState(title);

  const ungroup = useCanvasStore((state) => state.ungroup);
  const resizeGroup = useCanvasStore((state) => state.resizeGroup);
  const setNodes = useCanvasStore((state) => state.setNodes);
  const liveNodes = useCanvasStore((state) => state.nodes);
  const groupPosition = useCanvasStore(
    (state) => state.nodes.find((n) => n.id === id)?.position || { x: 0, y: 0 },
  );
  const { getViewport } = useReactFlow();
  const zoom = getViewport()?.zoom || 1;

  const handleTitleSubmit = useCallback(() => {
    setIsEditingTitle(false);
    const cleanTitle = titleInput.trim() || t('group.defaultTitle');
    setNodes((nodes) =>
      nodes.map((node) =>
        node.id === id
          ? { ...node, data: { ...(node.data as Record<string, unknown>), title: cleanTitle } }
          : node,
      ),
    );
  }, [id, titleInput, setNodes, t]);

  const handleColorChange = useCallback(
    (newColor: string) => {
      setNodes((nodes) =>
        nodes.map((node) =>
          node.id === id
            ? { ...node, data: { ...(node.data as Record<string, unknown>), color: newColor } }
            : node,
        ),
      );
    },
    [id, setNodes],
  );

  const handleResize = useCallback(
    (newBounds: { x: number; y: number; width: number; height: number }) => {
      resizeGroup(id, newBounds);
    },
    [id, resizeGroup],
  );

  const handleExecuteGroup = useCallback(() => {
    window.dispatchEvent(
      new CustomEvent('omnimux:workflow:execute-group', {
        detail: { groupId: id, nodeIds: childIdsOfGroup(liveNodes, id) },
      }),
    );
  }, [id, liveNodes]);

  const handleCreateWorkflow = useCallback(() => {
    window.dispatchEvent(
      new CustomEvent('omnimux:workflow:create-subworkflow', {
        detail: { groupId: id, groupTitle: title, nodeIds: childIdsOfGroup(liveNodes, id) },
      }),
    );
  }, [id, title, liveNodes]);

  const handleUngroup = useCallback(() => {
    ungroup(id);
  }, [id, ungroup]);

  const handleLayout = useCallback(
    (layoutType: 'horizontal' | 'vertical' | 'grid') => {
      window.dispatchEvent(
        new CustomEvent('omnimux:workflow:layout-group', {
          detail: { groupId: id, layoutType },
        }),
      );
    },
    [id],
  );

  return (
    <div
      className={`wf-group-node ${selected ? 'wf-group-node--selected' : ''}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        ['--wf-group-accent' as string]: color,
      }}
    >
      {selected && (
        <GroupTopBar
          groupId={id}
          groupTitle={title}
          groupColor={color}
          onExecuteGroup={handleExecuteGroup}
          onCreateWorkflow={handleCreateWorkflow}
          onUngroup={handleUngroup}
          onLayout={handleLayout}
          onColorChange={handleColorChange}
        />
      )}

      {selected && (
        <GroupResizeHandles
          bounds={{ x: groupPosition.x, y: groupPosition.y, width, height }}
          minAllowed={{ minWidth, minHeight }}
          color={color}
          zoom={zoom}
          onResize={handleResize}
        />
      )}

      <div className="wf-group-header">
        <div className="wf-group-header__dot" />
        {isEditingTitle ? (
          <input
            type="text"
            className="nodrag nopan wf-group-header__input"
            value={titleInput}
            onChange={(e) => setTitleInput(e.target.value)}
            onBlur={handleTitleSubmit}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleTitleSubmit();
              if (e.key === 'Escape') setIsEditingTitle(false);
            }}
            autoFocus
          />
        ) : (
          <span
            className="wf-group-header__title"
            onDoubleClick={() => setIsEditingTitle(true)}
            title={t('group.renameHint')}
          >
            {title}
          </span>
        )}
      </div>
    </div>
  );
});

GroupNode.displayName = 'GroupNode';
