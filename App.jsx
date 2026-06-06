import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
@font-face {
  font-family: 'Acid Goth';
  src: url('/fonts/AcidGoth.woff2') format('woff2'),
       url('/fonts/AcidGoth.woff')  format('woff'),
       url('/fonts/AcidGoth.ttf')   format('truetype');
  src: url('/AcidGoth.woff2') format('woff2'),
     url('/AcidGoth.ttf')   format('truetype');
