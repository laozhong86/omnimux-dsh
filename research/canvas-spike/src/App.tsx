import { useState } from 'react';
import CanvasEditor from '@/canvas/CanvasEditor';

/**
 * Spike app shell。
 *
 * 主题机制验证点：整个画布包在 .spike-root 内，节点/连线颜色全部
 * 走 --wb-* CSS 变量。右上角按钮切换 data-theme="alt" 即可看到
 * 节点选中框、连线、Handle、按钮主色整体换肤 —— 模拟 dsh 注入
 * --dsw-static-deepseek-500 / OmniMux 品牌色的换肤路径。
 */
export default function App() {
  const [theme, setTheme] = useState<'dsh' | 'omnimux'>('dsh');

  return (
    <div className="spike-root" data-theme={theme}>
      <header className="spike-header">
        <div className="spike-header__title">
          Canvas Spike — Gxgen CanvasEditor 抽取验证沙盒
        </div>
        <div className="spike-header__actions">
          <span className="spike-header__hint">
            拖拽平移 · 滚轮缩放 · 悬停节点见锚点 · 连线经类型校验 · Delete 删除
          </span>
          <button
            className="spike-theme-toggle"
            onClick={() => setTheme((t) => (t === 'dsh' ? 'omnimux' : 'dsh'))}
          >
            主题：{theme === 'dsh' ? 'dsh 蓝 #4176E6' : 'OmniMux 绿 #C8F135'}（点击切换）
          </button>
        </div>
      </header>
      <main className="spike-main">
        <CanvasEditor />
      </main>
    </div>
  );
}
