import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative base: the same build works at a domain root or a GitHub Pages
  // project path (https://<user>.github.io/<repo>/). All pages sit at the site
  // root, so runtime paths in the code are written relative too ("assets/...").
  base: './',
  build: {
    // Game art lives in public/assets — keep Vite's hashed bundles in a separate folder.
    assetsDir: 'static',
    // Multi-page: landing + legal pages, each its own HTML entry.
    rolldownOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        privacy: resolve(import.meta.dirname, 'privacy.html'),
        terms: resolve(import.meta.dirname, 'terms.html'),
      },
    },
  },
})
