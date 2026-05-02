import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue()
  ],
  server: {
    allowedHosts: ['identity-jiffy-reset.ngrok-free.dev']
  }
})