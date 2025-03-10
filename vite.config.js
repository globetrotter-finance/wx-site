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
      '927c-2405-201-a40b-53-6199-20f5-950f-372f.ngrok-free.app',
    
    ]
  }
})