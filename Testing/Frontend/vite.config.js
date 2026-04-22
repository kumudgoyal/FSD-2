import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
    server: {
    host: '0.0.0.0',
    port: 5173, // dev server (optional)
  },
  preview: {
    host: '0.0.0.0',
    port: 4173, // build preview (important for Docker)
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: './src/setupTests.js'
  }
})