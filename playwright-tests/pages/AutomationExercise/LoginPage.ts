import { Page, expect } from '@playwright/test';
import type { Credentials } from '../../fixtures';

class LoginPage {
  constructor(private page: Page) {}

  async visit() {
    await this.page.goto('/login', { waitUntil: 'domcontentloaded' });
  }

  async login(u: Pick<Credentials, 'email' | 'password'>) {
    await this.page.locator('[data-qa="login-email"]').fill(u.email);
    await this.page.locator('[data-qa="login-password"]').fill(u.password);
    await this.page.locator('[data-qa="login-button"]').click();
  }

  async expectLoggedOut() {
    await expect(this.page.getByText(/Logged in as/)).toHaveCount(0);
  }

  async expectLoggedInAs(name: string) {
    await expect(this.page.getByText(`Logged in as ${name}`)).toBeVisible();
  }


}

export default LoginPage;