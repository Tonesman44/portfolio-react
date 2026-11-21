import process from 'node:process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// Link previews (LinkedIn, iMessage, Slack...) need absolute URLs for og:url and og:image.
// SITE_URL wins if set (e.g. a custom domain). Otherwise Vercel's production domain is used,
// which Vercel provides at build time. Locally it falls back to the dev server address.
const siteUrl = (
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  'http://localhost:5173'
).replace(/\/$/, '')

const siteUrlPlugin = () => ({
  name: 'site-url',
  transformIndexHtml: (html) => html.replaceAll('%SITE_URL%', siteUrl),
})

// `npm run build` -> normal multi-file build for Vercel / Netlify / GitHub Pages.
// `npm run build:single` -> one self-contained index.html (used for the preview mock).
export default defineConfig(({ mode }) => ({
  plugins: [react(), siteUrlPlugin(), ...(mode === 'single' ? [viteSingleFile()] : [])],
  build: mode === 'single' ? { assetsInlineLimit: 100_000_000, outDir: 'dist-single' } : {},
}))
