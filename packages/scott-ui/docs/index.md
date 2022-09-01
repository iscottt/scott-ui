# 🎉 Scott-UI是什么?

## Features

- ⚡️ Vue 3, Vite 3, pnpm, ESBuild - born with fastness
- 🦾 TypeScript, of course
- 🗂 File based routing
- ⚙️ Unit Testing with Vitest
- 😃 Eslint + Prettier
- 🎨 UnoCSS - the instant on-demand atomic CSS engine
- 🌍 I18n ready
- 🚘 CI/CD with GithubActions


## Install

```bash
npm i scott-ui
```

## Quick Start

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

## Browser Support

Modern browsers and Internet Explorer 10+.
