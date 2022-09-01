import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import unoCSS from "../plugins/unocss";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // 添加JSX插件
    vueJsx(),
    unoCSS(),
  ],
});
