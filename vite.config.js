import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'




// https://vite.dev/config/
export default defineConfig({
  plugins: [  tailwindcss(), react()],
   build: {
    rollupOptions: {
      external: ['react-toastify'], // Add 'react-toastify' as an external
    },
  },
})
