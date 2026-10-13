import { Page, expect } from '@playwright/test'

class SelectMenuPage {
  constructor(private page: Page) {}

  async visit() {
    await this.page.goto('https://demoqa.com/select-menu')
  }
    async buttonSelectValue() {
  await this.page.locator('#withOptGroup').click({ force: true })
}
    async selectOption() {
  await this.page.locator('#react-select-2-option-1-0').click({ force: true })
}
    async checkResult() {
    await expect(this.page.locator('#withOptGroup')).toContainText('Group 2, option 1');
  }
}

export default SelectMenuPage