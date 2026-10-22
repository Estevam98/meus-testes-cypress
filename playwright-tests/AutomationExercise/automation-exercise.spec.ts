import { test, expect } from '@playwright/test';

import LoginPage from '../pages/AutomationExercise/LoginPage';

test('deve informar as credenciais, verificar a página e criar o cadastro', async ({ page }) => {
    const timestamp = Date.now();
    const email = `teste${timestamp}@teste.com.br`;
    const name = `Lucas${timestamp}`;

    const loginPage = new LoginPage(page);
    await loginPage.visit();

    await loginPage.signupName(name);
    await loginPage.signupEmail(email);
    await loginPage.clickSignupButton();
    await loginPage.checkSignupPage();
    await loginPage.clickTitle();
    await loginPage.registerName(name);
    await loginPage.registerPassword('123456');
    await loginPage.firstName('Lucas');
    await loginPage.lastName('Estevam');
    await loginPage.registerAdress('123 Main St');
    await loginPage.registerCountry('United States');
    await loginPage.registerState('California');
    await loginPage.registerCity('Los Angeles');
    await loginPage.registerZipcode('90210');
    await loginPage.registerMobileNumber('1234567890');
    await loginPage.createAccountButton();
    await loginPage.checkCreateAccount();
});