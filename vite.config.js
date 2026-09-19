import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: false,
    fs: {
      allow: ['.', '/Users/apple/.gemini/antigravity-ide/brain']
    }
  }
});
