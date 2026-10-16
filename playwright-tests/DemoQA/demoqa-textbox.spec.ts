import { test, expect } from '@playwright/test';

import TextBoxPage from '../pages/DemoQA/TextBoxPage';
import CheckboxPage from '../pages/DemoQA/CheckboxPage';
import RadioButtonPage from '../pages/DemoQA/RadioButtonPage';
import ButtonsPage from '../pages/DemoQA/ButtonsPage';
import SelectMenuPage from '../pages/DemoQA/SelectMenuPage';

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

test('deve verificar o título da página de radio button e clicar na opção Yes', async ({ page }) => {
    const radioButtonPage = new RadioButtonPage(page);
    await radioButtonPage.visit();
    await radioButtonPage.clickYes();
    await radioButtonPage.checkResult();
});

test('deve clicar no botão Click Me e verificar o resultado', async ({ page }) => {
    const buttonsPage = new ButtonsPage(page);
    await buttonsPage.visit();
    await buttonsPage.clickMe();
    await buttonsPage.checkResult();
});

test('deve selecionar uma opção no menu de seleção e verificar o resultado', async ({ page }) => {
    const selectMenuPage = new SelectMenuPage(page);
    await selectMenuPage.visit();
    await selectMenuPage.buttonSelectValue();
    await selectMenuPage.selectOption();
    await selectMenuPage.checkResult();
});