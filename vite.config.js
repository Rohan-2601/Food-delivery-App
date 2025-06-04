import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['react-toastify'], // Add 'react-toastify' as an external
    },
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [  tailwindcss(), react()],
})
