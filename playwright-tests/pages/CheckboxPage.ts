import { Page, expect } from '@playwright/test'

class CheckboxPage {
  constructor(private page: Page) {}

  async visit() {
    await this.page.goto('https://demoqa.com/checkbox')
  }
    async checkHomeCheckbox() {
    await this.page.getByRole('checkbox', { name: 'Select Home' }).check();

    await this.page.locator('#result').waitFor({ state: 'visible' });
    }
    async checkResult() {
    await expect(this.page.locator('#result')).toContainText('home');
}
  }

export default CheckboxPage