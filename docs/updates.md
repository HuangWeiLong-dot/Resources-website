# 更新记录（Resources Hub）

- **当前版本**：`v0.1.0`（本地原型）

> 记录本项目在本地开发过程中的重要 UI / 交互改动。

## 2025-12-02 · v0.1.0

- **整体视觉与布局**
  - 首页与 collection 页面统一为浅米色基调，通过 CSS 变量 `--surface` / `--surface-soft` 控制背景与大卡片渐变。
  - 首页和 collection 页的 hero 区域采用居中排版，并加入自上而下的渐入动画（`stagger-item` + `fade-in-stagger`）。

- **首页资源卡片**
  - 为 8 个资源类别重绘 SVG icon，统一采用扁平几何风格，只使用主色 `var(--accent)` 与深色描边。
  - 为分类网格加入顺序淡入动画，首次进入时从左到右依次出现。

- **collection 资源列表**
  - 为资源卡片添加「光照跟随」效果：根据鼠标位置更新 `--mouse-x` / `--mouse-y`，使用径向渐变模拟光斑。
  - 卡片右下角新增可点击三角色块（`resource-corner`），点击可在新标签打开对应资源链接。
  - 卡片整体 hover 时轻微抬起，并增加阴影与边框高亮。

- **主题色调节（Theme Panel）**
  - 在首页与 collection 页右上角加入主题面板：包含当前色块预览与色相滑杆（0–360）。
  - 新增 `scripts/theme.js`，通过滑杆更新全局 CSS 变量：
    - `--accent`：主品牌色（按钮、icon 高亮、右下角三角等）。
    - `--accent-soft`：主色的柔和版本，用于标签背景、卡片边框和光线效果。
    - `--surface` / `--surface-soft`：整体背景和 hero 卡片的渐变底色。
  - 选中的色相持久化到 `localStorage`，刷新页面后仍保持用户上次的主题色。

- **collection 顶部 Hero 卡片**
  - 背景渐变改为基于 `--surface-strong` 与 `--surface-soft` 的主题化渐变。
  - 鼠标悬浮时加入随鼠标移动的光线效果，颜色基于当前主题的 `--accent-soft`。

- **标签与其他细节**
  - 资源标签（`tag`）背景通过 `color-mix` 与 `--accent-soft` 计算，使其在不同主题色下都保持合适对比度。
  - 各种 hover 阴影 / 边框颜色统一改为使用 `--accent-soft` 与透明黑的混合，保持整体视觉一致。


