import { Page, expect } from '@playwright/test'

class TextBoxPage {
  constructor(private page: Page) {}

  async visit() {
    await this.page.goto('https://demoqa.com/text-box')
  }
  async fillName(name: string) {
    await this.page.locator('#userName').fill(name)
  }

    async fillEmail(email: string) {
      await this.page.locator('#userEmail').fill(email)
  }

    async submit() {
      await this.page.getByRole('button', { name: 'Submit' }).click()
  }

    async checkResult(name: string) {
      await expect(this.page.locator('#name')).toContainText(name)
}

}
export default TextBoxPage