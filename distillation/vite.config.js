import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  assetsInclude: ['**/*.glb'],
  resolve: {
    dedupe: ['react', 'react-dom', 'three', '@react-three/fiber', '@react-three/drei']
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'three',
      '@react-three/fiber',
      '@react-three/drei'
    ],
    esbuildOptions: {
      target: 'esnext'
    }
  }
})