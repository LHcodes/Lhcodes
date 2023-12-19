import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Lhcodes/",
  assetsInclude: ['node_modules/react-router-dom/umd/react-router-dom.min.js'],
})
