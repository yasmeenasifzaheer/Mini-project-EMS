// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
// import { defineConfig } from 'vite'

// export default defineConfig({
//   build: {
//     cssMinify: 'esbuild'  // Switches from LightningCSS to esbuild minifier [web:16]
//   }
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    cssMinify: 'esbuild'  // Fixes LightningCSS parsing error [attached_file:1][web:13]
  }
})
