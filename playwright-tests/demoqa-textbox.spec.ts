import { test, expect } from '@playwright/test';

test('deve verificar o título da página', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await expect(page).toHaveTitle(/demosite/);
});

test('deve preencher o formulário e ver o resultado', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');

  await page.locator('#userName').fill('Lucas Estevam');
  await page.locator('#userEmail').fill('lucasqa@teste.com');
  await page.getByRole('button', { name: 'Submit' }).click();

  await expect(page.locator('#name')).toContainText('Lucas Estevam');
});

test('deve verificar o título da página de checkbox', async ({ page }) => {
  await page.goto('https://demoqa.com/checkbox');
  await expect(page).toHaveTitle(/demosite/);
});

test('deve clicar no checkbox Home e verificar o resultado', async ({ page }) => {
  await page.goto('https://demoqa.com/checkbox');

  await page.getByRole('checkbox', { name: 'Select Home' }).check();

  await page.locator('#result').waitFor({ state: 'visible' });
  await expect(page.locator('#result')).toContainText('home');
});