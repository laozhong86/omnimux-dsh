# Third-Party Notices

## @cocofhu/skillhub

本插件基于 [@cocofhu/skillhub](https://github.com/cocofhu/skillhub)（MIT License）二次开发。

- Fork 基线：tag `v0.2.13`，commit `d9ea8c39fadc2737d04f178fce8420c4c6407f47`（2026-08-20）
- 上游版权声明：

```
MIT License

Copyright (c) 2026 cocofhu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 上游同步策略

上游迭代活跃，本 fork 的改动保持「追加式」以降低同步成本。同步上游修复时：
`git diff` 对比基线与本目录的标识符清单（插件 id、路由 `/omnimux-market`、配置文件
`omnimux-market.json`、CSS id、locale key、sidebar action id），手工移植目标修复。
