import { defineConfig } from 'vite'
const path = require('path')
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    outDir: 'dist',
  },
  base: '/ToDo/',
  plugins: [react()],
  resolve: {
    alias:{
      '~less': path.resolve(__dirname, 'src/styles/'),
      '~': path.resolve(__dirname, 'src/components/')
    }
  }
})
