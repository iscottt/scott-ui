# 🎉 Scott-UI 


<p align="center">
    <img src="https://img.shields.io/npm/v/scott-ui?color=c95f8b&amp;label=" alt="NPM version">
    <img src="https://github.com/iscottt/scott-ui/actions/workflows/main.yml/badge.svg?branch=main" alt="CI" style="max-width: 100%;"/>
    <img src="https://img.shields.io/github/license/iscottt/scott-ui?color=red"/>
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


## LICENSE

[MIT](LICENSE)


Copyright (c) 2022 - present RuiNan (Scott) Peng
