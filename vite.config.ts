import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Port 5173 is used by another local project; run this portfolio on 5180.
  server: { port: 5180, open: true },
  preview: { port: 5181 },
});
