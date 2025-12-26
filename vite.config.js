import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages 部署路径，必须与 destination_dir 一致
  base: '/three-kingdoms-timeline/', 
})