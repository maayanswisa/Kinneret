import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Prevent Vite from picking up a parent postcss.config (e.g. home dir Tailwind v3)
  css: {
    postcss: {},
  },
})
