import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// `npm run build` -> normal multi-file build for Vercel / Netlify / GitHub Pages.
// `npm run build:single` -> one self-contained index.html (used for the preview mock).
export default defineConfig(({ mode }) => ({
  plugins: [react(), ...(mode === 'single' ? [viteSingleFile()] : [])],
  build: mode === 'single' ? { assetsInlineLimit: 100_000_000, outDir: 'dist-single' } : {},
}))
