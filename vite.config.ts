import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginImp from 'vite-plugin-imp'
import viteEslint from 'vite-plugin-eslint'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteEslint({
      failOnError: false
    }),
    vitePluginImp({
      libList: [
        {
          libName: "antd",
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // modifyVars: {
        // 	"primary-color": "#1DA57A",
        // },
        javascriptEnabled: true,
        // additionalData: `@import "@/styles/var.scss";`
      }
    }
  }
})
