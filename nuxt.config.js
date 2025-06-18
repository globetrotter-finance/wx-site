export default defineNuxtConfig({
      app: {
    baseURL: '/wx-site/', 
  },
  modules: ['@nuxtjs/tailwindcss'],

  // Keep your existing Element Plus import
  css: ['element-plus/dist/index.css'],

  plugins: [{ src: '~/src/plugins/element-plus.js', mode: 'client' }],

  // Optional: configure tailwind module options
  tailwindcss: {
    cssPath: '~/src/style.css',    
    configPath: 'tailwind.config.js',
    viewer: true,                 
  },
})
