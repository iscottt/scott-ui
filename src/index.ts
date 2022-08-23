import { createApp } from 'vue/dist/vue.esm-browser';
import SButton from './button/Button';
import SFCButton from './SFCButton.vue';
import JSXButton from './JSXButton';
import ScottUI from './entry';
createApp({
  template: `<div>
    <SButton>默认按钮</SButton>
    <SButton type="primary" ghost size="small" icon="search">主要按钮</SButton>
    <SButton type="danger" icon="edit">危险按钮</SButton>
    <SButton type="warning" icon="check" size="large">警告按钮</SButton>
    <SButton type="success" round icon="delete">成功按钮</SButton>
  </div>`,
})
  .use(ScottUI)
  .mount('#app');
