import million from 'million/compiler';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [million.vite({ auto: true }), react()],
  build: {
    // Specify the directory to place assets
    assetsDir: 'website/assets',
    assetsInclude: ['**/*.lottie'],
  },
})
