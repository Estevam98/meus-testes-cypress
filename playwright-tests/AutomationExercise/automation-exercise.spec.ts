// Importa o `test` ESTENDIDO (com bloqueio de anúncios e fixtures), não o do Playwright.
import { test } from '../fixtures';
import SignupPage from '../pages/AutomationExercise/SignupPage';
import LoginPage from '../pages/AutomationExercise/LoginPage';

test('Jornada: cadastro pela UI e depois login com sessão limpa', async ({ page, context, newUser }) => {
  const signupPage = new SignupPage(page);
  const loginPage = new LoginPage(page);

  // ETAPA 1: cadastro pela UI, com credenciais únicas vindas do fixture
  await signupPage.visit();
  await signupPage.signupName(newUser.name);
  await signupPage.signupEmail(newUser.email);
  await signupPage.clickSignupButton();
  await signupPage.checkSignupPage();
  await signupPage.clickTitle();
  await signupPage.registerName(newUser.name);
  await signupPage.registerPassword(newUser.password);
  await signupPage.firstName('Lucas');
  await signupPage.lastName('Estevam');
  await signupPage.registerAdress('123 Main St');
  await signupPage.registerCountry('United States');
  await signupPage.registerState('California');
  await signupPage.registerCity('Los Angeles');
  await signupPage.registerZipcode('90210');
  await signupPage.registerMobileNumber('1234567890');
  await signupPage.createAccountButton();
  await signupPage.checkCreateAccount();
  await signupPage.clickContinueButton();

  // ETAPA 2: reset de sessão. O cadastro deixou o usuário logado.
  await context.clearCookies();

  // ETAPA 3: login válido apenas se começar deslogado
  await loginPage.visit();
  await loginPage.expectLoggedOut();
  await loginPage.login(newUser);
  await loginPage.expectLoggedInAs(newUser.name);
});