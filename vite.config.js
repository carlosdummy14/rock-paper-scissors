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
  build: {
    outDir: '../dist',
    assetsDir: './'
  },
  plugins: [react()]
})
