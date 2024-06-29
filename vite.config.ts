/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import path from 'node:path'
import { svelteTesting } from '@testing-library/svelte/vite'

export default defineConfig({
	plugins: [sveltekit(), svelteTesting()],
	resolve: {
		alias: {
			$lib: path.join(__dirname, './src/lib'),
		},
	},
	test: {
		include: ['src/**/*.test.ts'],
		coverage: {
			enabled: true,
			reporter: ['json-summary', 'json'],
		},
    environment: 'jsdom',
	},
})
