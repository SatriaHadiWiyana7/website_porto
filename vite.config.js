import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { portfolioMetadata } from './scripts/metadata.mjs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), portfolioMetadata()],
})
