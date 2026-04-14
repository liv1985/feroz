import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Base path for GitHub Pages deployment. 
  // Change this if you use a custom domain or a different repo name.
  base: '/', 
  
  // Set to false to prevent the entire public directory from being included in the build
  // This ensures images or other store assets aren't accidentally exposed.
  publicDir: false,

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'coming-soon.html'),
      },
    },
    // Output directory for the isolated build
    outDir: 'dist-coming-soon',
  },
})
