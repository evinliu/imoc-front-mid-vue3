import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { fileURLToPath, URL } from 'node:url'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig, loadEnv } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [
      vue({
        script: {
          defineModel: true,
          propsDestructure: true,
        },
      }),
      vueJsx(),
      AutoImport({
        imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
        dts: 'src/auto-imports.d.ts',
        dirs: ['src/stores', 'src/composables', 'src/api'],
        vueTemplate: true,
      }),
      Icons({
        compiler: 'vue3',
        autoInstall: true,
      }),
      Components({
        dts: 'src/components.d.ts',
        dirs: ['src/components', 'src/views'],
        deep: true,
        resolvers: [
          IconsResolver({
            prefix: 'icon',
          }),
        ],
        include: [/\.vue$/, /\.vue\?vue/],
        exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/],
      }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[name]',
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      proxy: {
        [env.VITE_APP_BASE_API_PREFIX]: {
          target: env.VITE_APP_BASE_API,
          changeOrigin: true,
          rewrite: path => path.replace(env.VITE_APP_BASE_API_PREFIX, ''),
        },
      },
    },
  }
})
