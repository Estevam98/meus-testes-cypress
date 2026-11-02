import { test, expect } from '../fixtures';
import LoginPage from '../pages/AutomationExercise/LoginPage';

test.describe('Login', () => {
  test('usuário cadastrado consegue logar', async ({ page, seededUser }) => {
    const login = new LoginPage(page);

    await login.visit();
    await login.expectLoggedOut();
    await login.login(seededUser);

    await login.expectLoggedInAs(seededUser.name);
  });

  test('senha inválida não autentica', async ({ page, seededUser }) => {
    const login = new LoginPage(page);

    await login.visit();
    await login.login({ email: seededUser.email, password: 'errada' });

    await expect(page.getByText(/incorrect/i)).toBeVisible();
    await login.expectLoggedOut();
  });
});