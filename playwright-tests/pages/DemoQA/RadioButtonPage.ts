import { Page, expect } from '@playwright/test'

class RadioButtonPage {
  constructor(private page: Page) {}

  async visit() {
    await this.page.goto('https://demoqa.com/radio-button')
  }
    async clickYes() {
  await this.page.locator('#yesRadio').click({ force: true })
}
    async checkResult() {
    await expect(this.page.locator('.text-success')).toContainText('Yes');
}
  }

export default RadioButtonPage