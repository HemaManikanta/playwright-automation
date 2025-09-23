import { test, expect } from '@playwright/test';
test.describe('basic login tests', () =>{

test.only('basic login test', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.click('#app > div > div > div.home-body > div > div:nth-child(1) > div');
});
});

