import Theme from 'vitepress/dist/client/theme-default'
import ScottUI from '../../../src/entry';
import { registerComponents } from './register-components.js';
import 'vitepress-theme-demoblock/theme/styles/index.css';

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(ScottUI);
    registerComponents(app);
  },
};
