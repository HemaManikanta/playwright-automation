import { test, expect } from '@playwright/test';
test.describe('basic login tests', () =>{

test('basic login test', async ({ page }) => {
  //await page.goto('https://demoqa.com/');
  await page.goto('https://demoqa.com/', { timeout: 60000, waitUntil: 'networkidle' });
  await page.click('#app > div > div > div.home-body > div > div:nth-child(1) > div');
  await page.click('.menu-list li:nth-child(1)');
  await page.fill('#userName', 'Hema Manikanta'); // Fill the input with "myUsername"
  await page.fill('#userEmail' , 'hema@gg.com');
  await page.click('#submit');
});
});

