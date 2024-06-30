/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import path from 'node:path'

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$lib: path.join(__dirname, './src/lib'),
		},
	},
	test: {
		include: ['src/**/*.test.ts'],
		exclude: ['e2e'],
		coverage: {
			enabled: true,
			reporter: ['json-summary', 'json'],
		},
	},
})
