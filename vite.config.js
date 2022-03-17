import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
const path = require('path')
const mode =
  process.env.NODE_ENV === 'production' ? 'production' : 'development'
const base =
  mode === 'production' ? '/' + path.basename(process.cwd()) + '/' : '/'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src',
  base,
  mode,
  publicDir: '../public',
  build: {
    outDir: '../dist'
  },
  plugins: [react()]
})
