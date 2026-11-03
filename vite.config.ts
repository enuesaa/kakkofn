/// <reference types="vitest/config" />

import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import path from 'node:path'
import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { preprocessMeltUI, sequence } from '@melt-ui/pp'

export default defineConfig({
	plugins: [
    tailwindcss(),
		sveltekit({
			preprocess: sequence([vitePreprocess(), preprocessMeltUI()]),
			adapter: adapter({
				pages: 'dist',
				fallback: '404.html',
			}),
		}),
	],
	resolve: {
		alias: {
			$lib: path.join(import.meta.dirname, './src/lib'),
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
