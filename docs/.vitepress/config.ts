import { defineConfig } from "vitepress";
import sidebar from "./theme/sidebar";
const ogImage = "https://vitejs.dev/og-image.png";
const ogTitle = "SCOTTUI";
const ogUrl = "https://vitejs.dev";
const ogDescription = "Next Generation Frontend Tooling";
export default defineConfig({
  title: "Scott-UI",
  description: "组件库",
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/logo1.png" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: ogTitle }],
    ["meta", { property: "og:image", content: ogImage }],
    ["meta", { property: "og:url", content: ogUrl }],
    ["meta", { property: "og:description", content: ogDescription }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:site", content: "@vite_js" }],
    ["meta", { name: "theme-color", content: "#646cff" }],
  ],
  themeConfig: {
    logo: "/logo.png",
    editLink: {
      pattern: "https://github.com/vitejs/vite/edit/main/docs/:path",
      text: "Suggest changes to this page",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/iscottt/scott-ui" },
    ],
    footer: {
      message: `Copyright © 2022-present Scott`,
    },
    nav: [
      { text: "首页", link: "/" },
      { text: "起步", link: "/guide/index", activeMatch: "/guide/" },
      { text: "组件", link: "/components/Button/index", activeMatch: "/components/Button/" },
    ],
    sidebar,
  },
  markdown: {
    config: (md) => {
      const { demoBlockPlugin } = require("vitepress-theme-demoblock");
      md.use(demoBlockPlugin, {
        cssPreprocessor: "sass",
      });
    },
  },
});
