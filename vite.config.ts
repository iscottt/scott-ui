/// <reference types="vitest" />
import { defineConfig } from 'vite';
import { setupVitePlugins } from './plugins';
// 配置导出模块类型
const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue',
    },
  },
};
export default defineConfig({
  plugins: setupVitePlugins(),
  test: {
    globals: true,
    environment: 'happy-dom',
    transformMode: {
      web: [/.[tj]sx$/]
    }
  },
  build: {
    rollupOptions,
    minify: false,
    cssCodeSplit: true,
    lib: {
      entry: './src/entry.ts',
      name: 'ScottUI',
      fileName: 'scott-ui',
      // 导出模块格式
      formats: ['es', 'umd', 'iife'],
    },
  },
});
