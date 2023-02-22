import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// vant3
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vant3
    Components({
      resolvers: [VantResolver()],
    }),
  ]
  ,
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      // '/api': {
      //   target: "http://123.207.32.32:1888/api",
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, '')
      // },
      '/cost': {
        target: "http://127.0.0.1:7001/api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/cost/, '')
      }
    }
  }

})
