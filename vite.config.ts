import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  // En build (GitHub Pages) el sitio vive en /SKYLINKS-PAGINA/; en dev usa raíz "/"
  base: command === 'build' ? '/SKYLINKS-PAGINA/' : '/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
}));
