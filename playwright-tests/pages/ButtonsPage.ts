import { Page, expect } from '@playwright/test'

class ButtonPage {
  constructor(private page: Page) {}

  async visit() {
    await this.page.goto('https://demoqa.com/buttons')
  }
    async clickMe() {
  await this.page.locator('.btn-primary').nth(2).click({ force: true })
}
    async checkResult() {
    await expect(this.page.locator('#dynamicClickMessage')).toContainText('You have done a dynamic click');
}
  }

export default ButtonPage