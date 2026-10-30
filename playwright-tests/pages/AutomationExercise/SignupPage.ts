import { Page, expect } from '@playwright/test'

class SignupPage {
  constructor(private page: Page) {}

    async visit() {
    await this.page.goto('/login', { waitUntil: 'domcontentloaded' })
  }

  async signupName(name: string) {
    await this.page.locator('[data-qa="signup-name"]').fill(name)
  }

  async signupEmail(email: string) {
    await this.page.locator('[data-qa="signup-email"]').fill(email)
  }

  async clickSignupButton() {
    await this.page.locator('[data-qa="signup-button"]').click()
  }

async checkSignupPage() {
  // Isso força o Playwright a esperar que o endereço mude para a tela de formulário antes de ler o texto
  await this.page.waitForURL('**/signup');
  await expect(this.page.locator('h2.title').first()).toContainText('Enter Account Information');
}



  async clickTitle() {
    await this.page.locator('[value="Mr"]').click({ force: true })
  }

  async registerName(name: string) {
    await this.page.locator('[data-qa="name"]').fill(name)
  }

  async registerPassword(password: string) {
    await this.page.locator('[data-qa="password"]').fill(password)
  }

  async firstName(firstName: string) {
    await this.page.locator('[data-qa="first_name"]').fill(firstName)
  }

  async lastName(lastName: string) {
    await this.page.locator('[data-qa="last_name"]').fill(lastName)
  }

  async registerAdress(address: string) {
    await this.page.locator('[data-qa="address"]').fill(address)
  }

  async registerCountry(country: string) {
    await this.page.locator('[data-qa="country"]').selectOption(country)
  }

  async registerState(state: string) {
    await this.page.locator('[data-qa="state"]').fill(state)
  }

  async registerCity(city: string) {
    await this.page.locator('[data-qa="city"]').fill(city)
  }

  async registerZipcode(zipcode: string) {
    await this.page.locator('[data-qa="zipcode"]').fill(zipcode)
  }

  async registerMobileNumber(mobileNumber: string) {
    await this.page.locator('[data-qa="mobile_number"]').fill(mobileNumber)
  }

  async createAccountButton() {
    await this.page.locator('[data-qa="create-account"]').click()
  }

  async checkCreateAccount() {
    await expect(this.page.locator('[data-qa="account-created"]')).toContainText('Account Created!')
  }

  async clickContinueButton() {
  await this.page.locator('[data-qa="continue-button"]').click()
}
}

export default SignupPage