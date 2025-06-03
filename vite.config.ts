import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://sunishptpm.github.io/nrj/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
