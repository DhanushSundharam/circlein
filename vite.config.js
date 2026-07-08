import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    // Enable CSS code splitting for better caching
    cssCodeSplit: true,

    // Increase chunk size warning limit slightly for leaflet
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        // Manual chunk splitting — improves caching by separating vendor libs
        manualChunks: {
          // React core — never changes, long cache
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // Leaflet map — large, split separately
          'vendor-leaflet': ['leaflet', 'react-leaflet'],
          // Icons — medium-sized, semi-stable
          'vendor-icons': ['lucide-react'],
        },
        // Predictable asset file names for CDN caching
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
  },

  // Performance: pre-bundle large dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'leaflet', 'react-leaflet', 'lucide-react'],
  },
})
