import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
module.exports = {
  darkMode: 'class',
  // ...
}
export default defineConfig({
  plugins: [tailwind(),],
})
