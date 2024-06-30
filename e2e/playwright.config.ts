import { defineConfig } from '@playwright/test'

export default defineConfig({
  use: {
    browserName: 'firefox',
  },
  outputDir: 'playwright-results',
  reporter: [
    ['html', { open: 'never', outputFolder: 'playwright-report' }],
  ],
  snapshotPathTemplate: '{testDir}/playwright-screenshots/{arg}{ext}',
  webServer: {
    command: 'cd ../ && pnpm run dev',
    url: 'http://localhost:3000',
  },
})
