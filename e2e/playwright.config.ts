import { defineConfig } from '@playwright/test'

export default defineConfig({
  timeout: 60 * 1000,
  snapshotPathTemplate: '{testDir}/__screenshots__/{arg}{ext}',
})