import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  server: {
    allowedHosts: [
      '6fb4-2405-201-a40b-13c-4d77-db92-b749-ba21.ngrok-free.app',
      'workflowsx.com'
    
    ]
  }
})