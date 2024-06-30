import { test, expect } from '@playwright/test'

test('basic test', async ({ page }, testInfo) => {
  const url = 'https://kakkofn.dev/'

  await page.goto(url)
  await page.screenshot({
    path: 'top.png',
    fullPage: true,
  })

  await expect(page).toHaveScreenshot('top.png', {
    fullPage: true,
  })
})
