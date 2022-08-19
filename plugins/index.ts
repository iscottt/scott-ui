import jsx from './jsx';
import unocss from './unocss';
import vue from './vue';

/**
 * vite插件
 * @returns []
 */
export function setupVitePlugins() {
  const plugins = [vue, unocss(), jsx];
  return plugins;
}
