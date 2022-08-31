/// <reference types="vitest" />
import { defineConfig } from "vite";
import { setupVitePlugins } from "./plugins";
// 配置导出模块类型
const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
    exports: "named",
  },
};
export default defineConfig({
  plugins: setupVitePlugins(),
  test: {
    globals: true,
    environment: "happy-dom",
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
  build: {
    // @ts-ignore
    rollupOptions,
    minify: false,
    cssCodeSplit: true,
    sourcemap: true, // 开通后可以在chrome中断点调试
    lib: {
      entry: "./src/entry.ts",
      name: "ScottUI",
      fileName: "scott-ui",
      // 导出模块格式
      formats: ["es", "umd", "iife"],
    },
  },
});
