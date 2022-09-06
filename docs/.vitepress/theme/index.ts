import { h } from 'vue'
import Theme from 'vitepress/theme'
import ScottUI from "../../../src/entry";
import { registerComponents } from './register-components'
import "vitepress-theme-demoblock/theme/styles/index.css";
import './styles/vars.css'
import './styles/demoblock.scss'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {})
  },
  enhanceApp({ app }) {
    app.use(ScottUI)
    registerComponents(app)
  }
}
