import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    // 部署到 GitHub Pages：子路径由 workflow 注入 VITE_BASE（如 /MyWeb/），本地默认 /
    base: process.env.VITE_BASE || '/',
    build: {
        outDir: 'dist',
        sourcemap: false,
    },
});
