import { defineConfig } from '@playwright/test'

export default defineConfig({
  use: {
    browserName: 'firefox',
  },
  outputDir: 'pw-results',
  reporter: [
    ['html', { open: 'never', outputFolder: 'pw-report' }],
    ['json', {  outputFile: 'pw-results/results.json' }]
  ],
  snapshotPathTemplate: '{testDir}/pw-screenshots/{arg}{ext}',
  webServer: {
    command: 'cd ../ && pnpm run dev',
    url: 'http://localhost:3000',
  },
})