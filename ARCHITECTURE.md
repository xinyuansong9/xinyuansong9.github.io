# 个人学术网站 - 架构与上线方案

**当前实现**：Vue 3 + Vite + TypeScript + Vue Router，面向未来升级预留扩展点。

---

## 一、整体架构

### 1.1 技术栈（已采用）

| 层级 | 选型 | 说明 |
|------|------|------|
| 框架 | Vue 3 | Composition API，便于后续加 Pinia、SSR（Nuxt） |
| 构建 | Vite 5 | 快、标准 ES 模块，易与 Vitest、PWA 等集成 |
| 语言 | TypeScript | 类型安全，便于重构与接入 API/CMS |
| 路由 | Vue Router 4 | 已配置首页 / 关于 / 研究 / 项目 / 联系 |

### 1.2 站点结构（页面规划）

```
个人学术网站
├── 首页 (Home)           # 简介、最新动态、快速入口
├── 关于 (About)          # 教育经历、职位、研究方向、照片
├── 研究/论文 (Research)  # 论文列表（可分类：期刊/会议/预印本）
├── 项目 (Projects)       # 开源或课题项目摘要与链接
├── 博客 (Blog)           # 可选：后续新增路由与视图
├── 教学 (Teaching)       # 可选
└── 联系方式 (Contact)     # 邮箱、ORCID、Google Scholar、GitHub 等
```

### 1.3 项目目录结构（为升级留空间）

```
MyWeb/
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions 自动部署到 Pages
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/              # 全局样式、图片
│   ├── components/          # 公共组件（布局、导航、页脚）
│   ├── composables/         # 可复用逻辑（如 usePapers、useMeta、未来 i18n）
│   ├── config.ts            # 站点名、base 等，可改为 env
│   ├── data/                # 论文、项目等静态数据，后续可换 API/CMS
│   │   ├── papers.ts
│   │   └── projects.ts
│   ├── router/
│   ├── types/               # 全局类型（Paper、Project 等）
│   ├── views/               # 页面级组件
│   ├── App.vue
│   └── main.ts
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── ARCHITECTURE.md
└── README.md
```

---

## 二、GitHub 上线方式

### 2.1 使用 GitHub Pages

- **仓库名**：`username.github.io` → 站点地址 `https://username.github.io`（根路径，需在 workflow 中设 `VITE_BASE: ''`）。  
  或任意仓库名（如 `MyWeb`）→ 地址 `https://username.github.io/MyWeb/`，当前 workflow 已按仓库名自动设置 `VITE_BASE`。
- **部署**：采用 **GitHub Actions**（`.github/workflows/deploy.yml`），推送到 `main` 后自动构建并部署到 GitHub Pages（Pages 来源需选 “GitHub Actions”）。

### 2.2 上线步骤

1. 在 GitHub 创建仓库（如 `MyWeb` 或 `username.github.io`），并 clone 到本地。
2. 本地执行 `npm ci`、`npm run build` 确认构建通过。
3. 将代码推送到 `main`。
4. 仓库 **Settings → Pages**：Source 选择 **GitHub Actions**。
5. 若仓库名为 `username.github.io`，需在 `deploy.yml` 的 Build 步骤里将 `VITE_BASE` 改为 `''`。
6. 访问 `https://用户名.github.io` 或 `https://用户名.github.io/仓库名/`。

### 2.3 自定义域名（可选）

- 在 `public/` 下添加 `CNAME` 文件，内容为域名（如 `www.yourname.edu`）。
- DNS 配置 A/CNAME 记录后，在 Pages 设置中勾选 Enforce HTTPS。

---

## 三、未来升级预留

| 方向 | 做法 |
|------|------|
| **状态管理** | 引入 Pinia，在 `src/stores/` 下按模块划分，路由与组件已可渐进接入 |
| **数据源** | 论文/项目目前用 `src/data/*.ts`；后续可改为接口请求、CMS 或 Markdown + 编译 |
| **多语言** | 使用 Vue I18n，在 `composables/` 或 `locales/` 中维护文案，路由与 meta 可带 locale |
| **SEO / SSR** | 若需更好 SEO，可迁移到 Nuxt 3（Vue 3 兼容），或仅对关键页做服务端渲染 |
| **博客** | 新增 `/blog` 路由与视图，文章可用 Markdown + 前端解析或静态 JSON 列表 |
| **主题/样式** | 全局变量在 `src/assets/main.css` 的 `:root` 中，可扩展为多主题或接入 UI 库 |
| **分析/统计** | 在 `index.html` 或根组件中按环境注入统计脚本（如 Google Analytics） |

---

## 四、后续可做

- 在论文页挂 **Google Scholar / Semantic Scholar** 链接或嵌入引用。
- 用 `src/data/papers.ts` 与 `src/types` 做年份、类型筛选与展示。
- 联系页可接 **Formspree / Netlify Forms** 等，无需自建后端。
