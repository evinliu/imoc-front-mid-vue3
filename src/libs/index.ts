import type { App, Component } from 'vue'

export default {
  install(app: App) {
    const components = import.meta.glob<{ default: Component }>('./**/*.vue')
    Object.entries(components).forEach(([key, component]) => {
      const name = key.replace(/^\.\/(.+)\/([^/]+)\.vue$/, '$2')
      const comp = defineAsyncComponent(component)
      app.component(name, comp)
    })
  }
}
