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
})
