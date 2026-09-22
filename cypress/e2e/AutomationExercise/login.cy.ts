describe('Automation Exercise - Criação de Conta', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/login')
  })

  it('deve preencher o formulário de cadastro e avançar', () => {
    cy.get('[data-qa="signup-name"]').type('Lucas Estevam')
    cy.get('[data-qa="signup-email"]').type('teste123@teste.com')
    cy.get('[data-qa="signup-button"]').click()
    cy.url().should('include', '/signup')
    cy.get('[value="Mr"]').click()
    cy.get('[data-qa="password"]').type('Senha@123')
    cy.get('[data-qa="first_name"]').type('Lucas')
    cy.get('[data-qa="last_name"]').type('Estevam')
    cy.get('[data-qa="address"]').type('Rua Teste, 123')
    cy.get('[data-qa="country"]').select('United States')
    cy.get('[data-qa="state"]').type('California')
    cy.get('[data-qa="city"]').type('Los Angeles')
    cy.get('[data-qa="zipcode"]').type('12345')
    cy.get('[data-qa="mobile_number"]').type('1234567890')
    cy.get('[data-qa="create-account"]').click()
    cy.url().should('include', '/account_created')
  })
})

describe('Automation Exercise - Login', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/login')
  })

  it('deve logar com sucesso', () => {
    cy.get("[data-qa='login-email']").type('teste123@teste.com')
    cy.get("[data-qa='login-password']").type('Senha@123')
    cy.get('[data-qa="login-button"]').click()
    cy.get('a').contains('Logout').should('be.visible')
  })

  it('login com email inválido', () => {
  cy.get("[data-qa='login-email']").type('Teste@t.com')
  cy.get("[data-qa='login-password']").type('Senha@123')
  cy.get('[data-qa="login-button"]').click()
  cy.get('[style="color: red;"]').should('be.visible')
})
})