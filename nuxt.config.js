export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],

  // Keep your existing Element Plus import
  css: ['element-plus/dist/index.css'],

  plugins: [{ src: '~/src/plugins/element-plus.js', mode: 'client' }],

  // Optional: configure tailwind module options
  tailwindcss: {
    cssPath: '~/src/style.css',    // your main CSS file
    configPath: 'tailwind.config.js',
    viewer: true,                  // enables live Tailwind viewer at /_tailwind
  },

  // Configuration for manual deployment to separate repo
  app: {
    baseURL: '/',
    buildAssetsDir: '/_nuxt/',
  },

  // Static site generation configuration
  nitro: {
    prerender: {
      routes: ['/']
    }
  },

  // Build configuration
  build: {
    transpile: ['element-plus/es']
  },

  // Vite configuration for proper asset handling
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: undefined
        }
      }
    }
  }
})
