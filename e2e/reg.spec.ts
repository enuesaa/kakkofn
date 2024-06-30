import { test, expect } from '@playwright/test'

test('basic test', async ({ page }, testInfo) => {
  const url = 'https://kakkofn.dev/'

  const path = testInfo.snapshotPath('top.png')
 
  await page.goto(url)
  await page.screenshot({
    path,
    fullPage: true,
  })

  await expect(page).toHaveScreenshot('top.png', {
    fullPage: true,
  })
})
