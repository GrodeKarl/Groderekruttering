
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT || '8080'),
    allowedHosts: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  },
  preview: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT || '8080')
  }
});
