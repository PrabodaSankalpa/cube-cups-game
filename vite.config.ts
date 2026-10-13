import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Game art lives in public/assets — keep Vite's hashed bundles in a separate folder.
  build: { assetsDir: 'static' },
})
