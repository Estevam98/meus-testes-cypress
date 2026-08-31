describe('DemoQA - Text Box', () => {
  it('deve preencher o formulário e ver o resultado', () => {
    cy.visit('https://demoqa.com/text-box')
    cy.get('#userName').type('Lucas Estevam')
    cy.get('#userEmail').type('lucas@teste.com')
    cy.get('#currentAddress').type('São Paulo, SP')
    cy.get('#submit').click()
    cy.get('#name').should('contain', 'Lucas Estevam')
  })
})