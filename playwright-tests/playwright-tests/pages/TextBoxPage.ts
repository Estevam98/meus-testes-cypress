import { Page } from '@playwright/test'

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
      await expect(page.locator('#name')).toContainText('Lucas Estevam')
}
export default TextBoxPage