import { test, expect } from '@playwright/test';
test.describe('basic login tests', () =>{

test('basic login test', async ({ page }) => {
  //await page.goto('https://demoqa.com/');
  await page.goto('https://demoqa.com/', { timeout: 60000, waitUntil: 'networkidle' });
  await page.click('#app > div > div > div.home-body > div > div:nth-child(1) > div');
});
});

