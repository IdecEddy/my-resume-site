import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { resolve } from "node:path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "~", replacement: resolve(__dirname, "./src") }]
  },
  test: {
    environment: 'jsdom',
  },
})
