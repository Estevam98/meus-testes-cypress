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
it('deve clicar no botão e ver a mensagem', () => {
  cy.visit('https://demoqa.com/buttons')
  cy.get('[type="button"]').eq(3).click({force: true})
  cy.get('#dynamicClickMessage').should('contain', 'You have done a dynamic click')
})
it('deve marcar um checkbox e verificar o estado', () => {
  cy.visit('https://demoqa.com/checkbox')
  cy.get('[role="checkbox"]').click()
  cy.get('.text-success').should('contain', 'home')
})