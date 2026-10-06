import { test, expect } from '@playwright/test';
import TextBoxPage from './pages/TextBoxPage';
import CheckboxPage from './pages/CheckboxPage';

test('deve verificar o título da página', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await expect(page).toHaveTitle(/demosite/);
});

test('deve preencher o formulário e ver o resultado', async ({ page }) => {
  const textBoxPage = new TextBoxPage(page);
  await textBoxPage.visit();

  await textBoxPage.fillName('Lucas Estevam');
  await textBoxPage.fillEmail('lucasqa@teste.com');
  await textBoxPage.submit();
  await textBoxPage.checkResult('Lucas Estevam');

});

test('deve verificar o título da página de checkbox', async ({ page }) => {
  await page.goto('https://demoqa.com/checkbox');
  await expect(page).toHaveTitle(/demosite/);
});

test('deve clicar no checkbox Home e verificar o resultado', async ({ page }) => {
    const checkboxPage = new CheckboxPage(page);
    await checkboxPage.visit();
    await checkboxPage.checkHomeCheckbox();
    await checkboxPage.checkResult();
});