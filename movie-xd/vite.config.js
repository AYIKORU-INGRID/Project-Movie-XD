import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
 
// vite.config.js
export default {
  server: {
    hmr: {
      host: 'bug-free-journey-wrxq6r5x994wcg466-5173.app.github.dev',
      protocol: 'wss',
    }
  }
}
