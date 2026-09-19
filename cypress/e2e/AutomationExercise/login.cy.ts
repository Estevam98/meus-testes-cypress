describe('Automation Exercise - Criação de Conta', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/login')
  })

  it('deve preencher o formulário de cadastro e avançar', () => {
    cy.get('[data-qa="signup-name"]').type('Lucas Estevam')
    cy.get('[data-qa="signup-email"]').type('testeqa2@qateste.com')
    cy.get('[data-qa="signup-button"]').click()
    cy.url().should('include', '/signup')
  })
})