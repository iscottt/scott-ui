# Scott-UI是什么?

## 特性

- ⚡️ Vue 3, Vite 3, pnpm, ESBuild - born with fastness
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

## 浏览器支持

现代化浏览器和 IE 10+.
