# 🎉 Scott-UI是什么?


<p align="center">
    <a href="https://www.npmjs.com/package/smarty-admin-ui"><img src="https://img.shields.io/npm/v/smarty-admin-ui?color=c95f8b&amp;label=" alt="NPM version"></a>
    <a href="https://github.com/smarty-team/smarty-admin/actions/workflows/main.yml"><img src="https://github.com/smarty-team/smarty-admin/actions/workflows/main.yml/badge.svg?branch=main" alt="CI" style="max-width: 100%;"></a>
</p>


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
