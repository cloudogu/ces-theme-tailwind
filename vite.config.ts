import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            {find: '@src', replacement: path.resolve(__dirname, 'src')},
            {find: '@components', replacement: path.resolve(__dirname, 'src/components')},
            {find: '@deprecated_components', replacement: path.resolve(__dirname, 'src/deprecated_components')},
        ],
    },
})
