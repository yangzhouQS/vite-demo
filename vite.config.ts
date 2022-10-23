import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue'
import commonjs from '@rollup/plugin-commonjs';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		commonjs(),
		vue(),
	],
	build: {
		target: 'modules',
		sourcemap: true,
		lib: {
			entry: resolve(__dirname, 'src/main.ts'),
			name: 'GridSystem',
			// the proper extensions will be added
			fileName: (format) => `grid-system.${ format }.js`, // 打包后的文件名
			formats: [ 'es', 'umd', 'iife' ],
		},
	}
})
