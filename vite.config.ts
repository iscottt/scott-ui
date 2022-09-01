/// <reference types="vitest" />
import { defineConfig } from "vite";
import { setupVitePlugins } from "./plugins";
import { UserConfig } from "vitest";
// 配置导出模块类型
const rollupOptions = {
  external: ["vue"],
  output: {
    globals: {
      vue: "Vue",
    },
    assetFileNames: `[name].[ext]`,
    exports: "named",
  },
};

export const config = {
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
    minify: "terser",
    cssCodeSplit: true,
    brotliSize: true,
    sourcemap: true, // 开通后可以在chrome中断点调试
    lib: {
      entry: "./src/entry.ts",
      name: "ScottUI",
      fileName: "scott-ui",
      // 导出模块格式
      formats: ["esm", "umd", "iife"],
    },
    outDir: "./dist",
  },
};
// @ts-ignore
export default defineConfig(config as UserConfig);
