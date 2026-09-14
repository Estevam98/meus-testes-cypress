describe('DemoQA - Select Menu', () => {
  it('deve selecionar uma opção no dropdown', () => {
    cy.visit('https://demoqa.com/select-menu')
    cy.get('#withOptGroup').click()
    cy.get('#react-select-2-option-1-0').click()
    cy.get('#withOptGroup').should('contain', 'Group 2, option 1')
  })
})