import { test, expect } from '@playwright/test';
test.describe('basic login tests', () =>{
    
test.only('basic login test', async ({ page }) => {
  await page.goto('https://demoqa.com/login');
  await page.fill('#userName', 'testuser');
  await page.fill('#password', 'Test@123');
  await page.click('#login');
  await expect(page.locator('#userName-value')).toHaveText('testuser');
});
});

