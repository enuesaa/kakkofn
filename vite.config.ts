/// <reference types="vitest/config" />

import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import path from 'node:path'
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	plugins: [
    tailwindcss(),
		sveltekit(),
	],
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
