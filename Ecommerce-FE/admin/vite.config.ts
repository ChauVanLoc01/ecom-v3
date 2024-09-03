import path from 'path'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: true,
        port: 4000
    },
    preview: {
        port: 4000
    },
    css: {
        devSourcemap: true
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, './src')
        }
    }
})
