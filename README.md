
# 个人学术网站

基于 **Vue 3 + Vite + TypeScript + Vue Router** 的学术主页，支持 GitHub Pages 自动部署，并为后续升级预留扩展空间。

## 本地开发

```bash
npm install
npm run dev
```

浏览器访问 `http://localhost:5173`。

## 构建与预览

```bash
npm run build
npm run preview
```

构建产物在 `dist/`，预览会使用与生产一致的静态资源。

## 在 GitHub 上线

1. **创建仓库**  
   在 GitHub 新建仓库（例如 `MyWeb` 或 `username.github.io`），并推送到 `main` 分支。

2. **开启 GitHub Pages**  
   仓库 **Settings → Pages**：  
   - **Source** 选择 **GitHub Actions**（不要选 “Deploy from a branch”）。

3. **子路径说明**  
   - 若仓库名为 `username.github.io`，站点在根路径。请在 `.github/workflows/deploy.yml` 的 Build 步骤里把 `VITE_BASE: '/${{ github.event.repository.name }}/'` 改为 `VITE_BASE: ''`。  
   - 若仓库名为其他（如 `MyWeb`），无需改 workflow，站点地址为：  
     `https://<用户名>.github.io/MyWeb/`

4. **推送触发部署**  
   每次推送到 `main` 会触发 Actions 构建并部署，完成后在 Pages 设置页可看到站点地址。

## 项目结构概览

- `src/views/` — 页面：首页、关于、研究、项目、联系  
- `src/components/` — 布局、顶栏、页脚  
- `src/data/` — 论文、项目等数据（可后续改为 API）  
- `src/types/` — TypeScript 类型  
- `src/composables/` — 可复用逻辑，便于后续加 SEO、i18n 等  
- `src/config.ts` — 站点名、base 等配置  

更详细的架构与扩展建议见 [ARCHITECTURE.md](./ARCHITECTURE.md)。

## 技术栈

- Vue 3、Vue Router 4、TypeScript、Vite 5

# xinyuansong9.github.io
Academic website of Xinyuan Song
cb5b20273de4f426c03b90b5952324ae8ac50093
