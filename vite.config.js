import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const base = process.env.VITE_BASE || '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
  build: {
    // raise warning threshold to reduce noisy warnings for large bundles
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const parts = id.split('node_modules/')[1].split('/')
            const pkg = parts[0].startsWith('@') ? `${parts[0]}/${parts[1]}` : parts[0]
            return `vendor_${pkg.replace('@', '').replace('/', '_')}`
          }
        }
      }
    }
  }
})
