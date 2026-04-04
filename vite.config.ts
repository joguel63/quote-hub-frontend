import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/quote/',
  plugins: [react()],
  resolve: {
    alias: {
      core: '/src/core',
      modules: '/src/modules',
    },
  },
})
