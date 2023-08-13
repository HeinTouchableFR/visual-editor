import {defineConfig} from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'
import analyze from 'rollup-plugin-analyzer'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
    ],
    esbuild: {
        jsxFactory: 'jsx',
        jsxFragment: 'Fragment',
    },
    server: {
        host: true,
        watch: {
            disableGlobbing: false,
        },
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, './src'),
        },
    },
    build: {
        minify: false,
        rollupOptions: {
            plugins: [
                analyze({
                    summaryOnly: true,
                    filter: ({size}) => size > 5000,
                    filterSummary: true,
                }),
            ],
        },
        lib: {
            entry: path.resolve('src/VisualEditor.tsx'),
            name: 'Editor',
            formats: ['es'],
            fileName: () => 'VisualEditor.standalone.js',
        },
    },
})