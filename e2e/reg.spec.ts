import { test, expect } from '@playwright/test'

const realBaseUrl = 'https://kakkofn.dev'
const localBaseUrl = 'http://localhost:3000'

type PageDef = {
  name: string;
  path: string;
}

const pagedefs: PageDef[] = [
  {name: 'top', path: '/'},
]

for (const pd of pagedefs) {
  test(`diff ${pd.name} (${pd.path})`, async ({ page }, testinfo) => {
    const filename = `${pd.name}.png`
    const capturePath = testinfo.snapshotPath(filename)

    await page.goto(`${realBaseUrl}${pd.path}`)
    await page.screenshot({
      path: capturePath,
      fullPage: true,
    })
  
    await page.goto(`${localBaseUrl}${pd.path}`)
    await expect(page).toHaveScreenshot(filename, { fullPage: true })
  })
}
