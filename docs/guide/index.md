# Scott-UI是什么?

[Scott-UI](https://github.com/iscottt/scott-ui) 是一个基于 [Vite](https://github.com/vitejs/vite)、 [TypeScript](https://www.typescriptlang.org/) 的定制化个人UI，目标是为开发提供开箱即用的高质量组件。


## 文档

- 文档地址为 [ScottUI-doc](https://scott-ui.vercel.app/)，采用 Vitepress 开发。如发现文档有误，欢迎提 pr 帮助我们改进。
- 英文文档暂时没有时间来写，欢迎有时间的同学来帮忙写英文文档。


### 本地运行文档

如需本地运行文档，请拉取代码到本地。

```bash
# 拉取代码
git clone https://github.com/iscottt/scott-ui.git
# 安装依赖
pnpm install
# 运行项目
pnpm docs:dev
```

## 特性

- ⚡️ Vite 3, pnpm, ESBuild - born with fastness
- 🦾 TypeScript, of course
- 🗂 File based routing
- ⚙️ Unit Testing with Vitest
- 😃 Eslint + Prettier
- 🎨 UnoCSS - the instant on-demand atomic CSS engine
- 🌍 I18n ready
- 🚘 CI/CD with GithubActions


## 安装

```bash
pnpm i scott-ui
```

## 快速开始

```js
import Vue from 'vue'
import ScottUI from 'scott-ui'

const App = {
    template: `
        <SButton/>
    `,
};

createApp(App)
    .use(ScottUI)
    .mount("#app");
```


## vite 插件推荐

如果这些插件对你有帮助，可以给一个 star 支持下

- [vite-plugin-mock](https://github.com/vbenjs/vite-plugin-mock) - 用于本地及开发环境数据 `mock`
- [vite-plugin-html](https://github.com/vbenjs/vite-plugin-html) - 用于 `html` 模版转换，可以在`html`文件内进行书写模版语法
- [vite-plugin-style-import](https://github.com/vbenjs/vite-plugin-style-import) - 用于组件库样式按需引入
- [vite-plugin-imagemin](https://github.com/vbenjs/vite-plugin-imagemin) - 用于打包压缩图片资源
- [vite-plugin-theme](https://github.com/vbenjs/vite-plugin-theme) - 用于在线切换主题色/黑暗主题适配等主题相关配置
- [vite-plugin-compression](https://github.com/vbenjs/vite-plugin-compression) - 用于打包输出`.gz`|`.br`文件
- [vite-plugin-svg-icons](https://github.com/vbenjs/vite-plugin-svg-icons) - 快速生成 `svg sprite`

## 浏览器支持

**本地开发**推荐使用`Chrome 最新版`浏览器，**不支持**`Chrome 80`以下版本。

**生产环境**支持现代浏览器，不支持 IE。

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png" alt="IE" width="24px" height="24px"  />](http://godban.github.io/browsers-support-badges/)IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)Safari |
| :-: | :-: | :-: | :-: | :-: |
| not support | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

