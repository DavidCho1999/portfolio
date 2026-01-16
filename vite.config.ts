import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
      webp: {
        quality: 80,
        lossless: false,
      },
    }),
  ],
  base: '/portfolio/',
  build: {
    // 이미지를 WebP로 자동 변환
    assetsInlineLimit: 0, // 모든 이미지를 파일로 출력
  },
})
