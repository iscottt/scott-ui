const sidebar = {
  "/": [
    { text: "快速开始", link: "/" },
    {
      text: "通用",
      children: [{ text: "Button 按钮", link: "/components/Button/" }],
    },
    { text: "导航" },
    { text: "反馈" },
    { text: "数据录入" },
    { text: "数据展示" },
    { text: "布局" },
  ],
};
const config = {
  title: "🎉 Scott-UI",
  description: "组件库搭建的教学模型",
  themeConfig: {
    sidebar,
  },
  markdown: {
    config: (md) => {
      const { demoBlockPlugin } = require("vitepress-theme-demoblock");
      md.use(demoBlockPlugin, {
        cssPreprocessor: "less",
      });
    },
  },
};
export default config;
