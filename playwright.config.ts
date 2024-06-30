import { defineConfig } from '@playwright/test'

export default defineConfig({
	use: {
		browserName: 'firefox',
	},
	outputDir: 'e2e/pw-results',
	snapshotPathTemplate: '{testDir}/e2e/pw-screenshots/{arg}{ext}',
	reporter: [
		[
			'html',
			{
				open: 'never',
				outputFolder: 'e2e/pw-report',
			},
		],
		[
			'json',
			{
				outputFile: 'e2e/pw-results/results.json',
			},
		],
	],
	webServer: {
		command: 'pnpm run dev',
		url: 'http://localhost:3000',
	},
})
