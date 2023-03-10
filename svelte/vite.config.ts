import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'public',
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
        manualChunks: {
          '@smui/common': ['@smui/common', '@smui/data-table', '@smui/icon-button'],
        },
      }
    }
  },
  server: {
    hmr: {
      overlay: true
    }
  },
  plugins: [svelte({compilerOptions: {
    // generate: 'ssr',
    hydratable: true
  }})],
})
