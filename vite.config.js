import react from '@vitejs/plugin-react'
const path = require('path')
const mode =
  process.env.NODE_ENV === 'production' ? 'production' : 'development'
const base =
  mode === 'production' ? '/' + path.basename(process.cwd()) + '/' : '/'

export default {
  root: 'src',
  base,
  mode,
  publicDir: '../public',
  build: {
    outDir: '../dist',
    assetsDir: './'
  },
  plugins: [react()]
}

//import { defineConfig } from 'vite'

// https://vitejs.dev/config/
//export default defineConfig({
//root: 'src',
//base,
//mode,
//publicDir: '../public',
//build: {
//outDir: '../dist',
//assetsDir: './'
//},
//plugins: [react()]
//})
