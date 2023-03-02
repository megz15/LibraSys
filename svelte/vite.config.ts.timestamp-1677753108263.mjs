// vite.config.ts
import { defineConfig } from "file:///run/media/march/My%20Stuff/src_codes/svelte/crux_induction/librasys-express/svelte/node_modules/vite/dist/node/index.js";
import { svelte } from "file:///run/media/march/My%20Stuff/src_codes/svelte/crux_induction/librasys-express/svelte/node_modules/@sveltejs/vite-plugin-svelte/dist/index.js";
var vite_config_default = defineConfig({
  build: {
    outDir: "public",
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    }
  },
  server: {
    hmr: {
      overlay: true
    }
  },
  plugins: [svelte()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvcnVuL21lZGlhL21hcmNoL015IFN0dWZmL3NyY19jb2Rlcy9zdmVsdGUvY3J1eF9pbmR1Y3Rpb24vbGlicmFzeXMtZXhwcmVzcy9zdmVsdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ydW4vbWVkaWEvbWFyY2gvTXkgU3R1ZmYvc3JjX2NvZGVzL3N2ZWx0ZS9jcnV4X2luZHVjdGlvbi9saWJyYXN5cy1leHByZXNzL3N2ZWx0ZS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vcnVuL21lZGlhL21hcmNoL015JTIwU3R1ZmYvc3JjX2NvZGVzL3N2ZWx0ZS9jcnV4X2luZHVjdGlvbi9saWJyYXN5cy1leHByZXNzL3N2ZWx0ZS92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgeyBzdmVsdGUgfSBmcm9tICdAc3ZlbHRlanMvdml0ZS1wbHVnaW4tc3ZlbHRlJ1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6ICdwdWJsaWMnLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBlbnRyeUZpbGVOYW1lczogYFtuYW1lXS5qc2AsXG4gICAgICAgIGNodW5rRmlsZU5hbWVzOiBgW25hbWVdLmpzYCxcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IGBbbmFtZV0uW2V4dF1gXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBobXI6IHtcbiAgICAgIG92ZXJsYXk6IHRydWVcbiAgICB9XG4gIH0sXG4gIHBsdWdpbnM6IFtzdmVsdGUoKV0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1YSxTQUFTLG9CQUFvQjtBQUNwYyxTQUFTLGNBQWM7QUFHdkIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sS0FBSztBQUFBLE1BQ0gsU0FBUztBQUFBLElBQ1g7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTLENBQUMsT0FBTyxDQUFDO0FBQ3BCLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
