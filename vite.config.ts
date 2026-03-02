import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite' // 👈 Agregá esto
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(), // 👈 Y esto
  ],
  resolve: {
    alias: {
      // Esto le dice a Vite: cuando veas "@", andá a la carpeta "src"
      "@": path.resolve(__dirname, "./src"),
    },
  },
})

