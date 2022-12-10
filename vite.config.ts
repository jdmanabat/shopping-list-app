import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  //  @ts-ignore
  test: {
    globals: true,
    environment: 'jsdom',
  },
  server: {
    host: true,
    port: 3000,
  },
  plugins: [react()],
});
