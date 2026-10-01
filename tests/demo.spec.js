const { test, expect } = require('@playwright/test');
const { pathToFileURL } = require('node:url');
const path = require('node:path');

const demoUrl = pathToFileURL(path.join(__dirname, '../demo/index.html')).href;

test('displays the demo page and greets the user', async ({ page }) => {
  await page.goto(demoUrl);
  await expect(page).toHaveTitle('Playwright Demo');
  await expect(page.getByRole('heading', { name: 'Playwright Demo' })).toBeVisible();

  await page.getByLabel('Your name').fill('Alex');
  await page.getByRole('button', { name: 'Say hello' }).click();
  await expect(page.getByRole('status')).toHaveText('Hello, Alex!');
});

test('asks for a name when the input contains only spaces', async ({ page }) => {
  await page.goto(demoUrl);
  await page.getByLabel('Your name').fill('   ');
  await page.getByRole('button', { name: 'Say hello' }).click();
  await expect(page.getByRole('status')).toHaveText('Please enter your name.');
});
